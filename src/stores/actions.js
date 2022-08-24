import apis from '../apis';

export default {
  async query() {
    this.tableData = await apis.getTableDataApi();
  },
};
