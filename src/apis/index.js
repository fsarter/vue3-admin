import http from '../utils/http';

const baseUrl = '/api';

export default {
  async getTableDataApi() {
    const res = await http.post(`${baseUrl}/table-data/query`);
    return res.data;
  },
};
