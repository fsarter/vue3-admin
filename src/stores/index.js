import { defineStore } from 'pinia';
import actions from './actions';

export const useTableDataStore = defineStore('tableData', {
  state: () => ({
    tableData: [],
  }),
  actions,
});
