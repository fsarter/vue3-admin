<template>
  <slot v-if="false"></slot>
  <div class="overflow-auto">
    <table>
      <TableHeader
        :columns-data="columnsData"
        @all-row-select-change="allRowSelectChange"
      />
      <TableBody
        :table-data="tableData"
        :columns-data="columnsData"
        :all-row-select="allRowSelect"
      />
    </table>
  </div>
</template>
<script>
import { h, toRef, ref } from 'vue';
const useColumnClass = (props) => {
  let columnClass = '';
  if ('fixed' in props) {
    columnClass += 'sticky left-0 right-0 ';
  }
  return columnClass;
};
const useColumnStyle = (props) => {
  let columnStyle = '';
  if ('min-width' in props) {
    columnStyle += `min-width:${props['min-width'] / 4}rem;`;
  }
  return columnStyle;
};

const TableHeader = {
  emits: ['allRowSelectChange'],
  props: ['columnsData'],
  render() {
    const tableHeaderField = (c) => {
      switch (c.props?.type) {
        // selection column render checkbox
        case 'selection':
          return h(
            'input',
            {
              type: 'checkbox',
              onChange: (e) => {
                const eventType = e.target.checked
                  ? 'allRowSelect'
                  : 'allRowDeselect';
                this.$emit('allRowSelectChange', eventType);
                this.$parent.$emit('selectChange', eventType);
              },
            },
            ''
          );
        default:
          return c.props.label;
      }
    };

    return h(
      'thead',
      { class: '' },
      h(
        'tr',
        { class: '' },
        this.columnsData.map((c) =>
          h(
            'th',
            {
              class: `${useColumnClass(
                c.props
              )} whitespace-normal px-4 py-2 text-gray-500 bg-gray-200 uppercase`,
              style: useColumnStyle(c.props),
            },
            tableHeaderField(c)
          )
        )
      )
    );
  },
};
const TableBody = {
  props: ['tableData', 'columnsData', 'allRowSelect'],
  render() {
    const tableBodyField = (c, row, rowIndex) => {
      switch (c.props?.type) {
        // selection column render checkbox
        case 'selection':
          return h(
            'input',
            {
              type: 'checkbox',
              // bind checked attribute to allRowSelect
              checked: this.allRowSelect,
              onChange: (e) => {
                const eventType = e.target.checked
                  ? 'rowSelect'
                  : 'rowDeselect';
                // we add extra row data, which identified which row is selected or deselected.
                this.$parent.$emit('selectChange', eventType, row);
              },
            },
            ''
          );
        case 'no.':
          return rowIndex + 1;
        default:
          // pass row to default slot of TableColumn
          return c.children ? c.children.default(row) : row[c.props.prop];
      }
    };
    return h(
      'tbody',
      { class: 'bg-white ' },
      this.tableData.map((row, rowIndex) =>
        h(
          'tr',
          { class: 'hover:bg-gray-100 ' },
          this.columnsData.map((c) =>
            h(
              'td',
              {
                class: `${useColumnClass(
                  c.props
                )} content-center whitespace-normal px-4 py-2 border bg-white`,
              },
              tableBodyField(c, row, rowIndex)
            )
          )
        )
      )
    );
  },
};
export default {
  emits: ['selectChange'],
  components: { TableHeader, TableBody },
  name: 'Table',
  props: ['data'],
  setup(props, context) {
    const tableData = toRef(props, 'data');
    const { slots } = context;
    const columnsData = slots.default
      ? slots
          .default()
          //code comments between <Table> and </Table> also treated as children, that should be filtered out
          .filter((vNode) => vNode.props !== null)
          .map((vNode) => {
            return { props: vNode.props, children: vNode.children };
          })
      : [];
    const allRowSelect = ref(false);
    const allRowSelectChange = (et) => {
      if (et === 'allRowSelect') {
        allRowSelect.value = true;
      }
      if (et === 'allRowDeselect') {
        allRowSelect.value = false;
      }
    };

    return {
      tableData,
      columnsData,
      allRowSelect,
      allRowSelectChange,
    };
  },
};
</script>
