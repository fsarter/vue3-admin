<template>
  <div class="flex flex-col overflow-hidden">
    <div>Dashboard!</div>
    <Table :data="tableData" @select-change="selectChange">
      <!-- add selection column -->
      <TableColumn type="selection" />
      <!-- add row number column -->
      <TableColumn type="no." label="No." />
      <TableColumn prop="id" label="ID" />
      <TableColumn prop="column1" label="Column1" />
      <TableColumn prop="column2" label="Column2" />
      <TableColumn prop="column3" label="Column3" min-width="72">
        <template #default="row">
          {{ 'hello, ' + row.column3 }}
        </template>
      </TableColumn>
      <TableColumn prop="column3" label="Column4" />
      <TableColumn prop="column3" label="Column5" />
      <TableColumn prop="column3" label="Column6" />
      <TableColumn prop="column3" label="Column7" />
      <TableColumn prop="column3" label="Column8" />
      <TableColumn prop="column3" label="Column9" />
      <TableColumn prop="column3" label="Column10" />
      <TableColumn label="Operations" fixed min-width="48">
        <template #default="row">
          <button class="btn-primary" @click="rowEdit(row)">edit</button
          >|<button class="btn-danger" @click="rowDelete(row)">delete</button>
        </template>
      </TableColumn>
    </Table>
  </div>
</template>
<script>
import Table from '../components/Table.vue';
import TableColumn from '../components/TableColumn.vue';
export default {
  components: { Table, TableColumn },
  data() {
    return {
      tableData: [
        {
          id: 'Row1',
          column1: 'Value1.1',
          column2: 'Value1.2',
          column3: 'Value1.3',
        },
        {
          id: 'Row2',
          column1: 'Value2.1',
          column2: 'Value2.2',
          column3: 'Value2.3',
        },
        {
          id: 'Row3',
          column1: 'Value3.1',
          column2: 'Value3.2',
          column3: 'Value3.3',
        },
      ],
    };
  },
  methods: {
    selectChange(eventType, rowData) {
      console.log('eventType, rowData===>', eventType, rowData);
    },
    rowEdit(row) {
      console.log('We will edit row:', row);
    },
    rowDelete(row) {
      console.log('We will delete row:', row);
    },
  },
};
</script>
