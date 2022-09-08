import { createStore } from 'vuex'
import {whatIs} from './modules/whatIs.js';
import {vendor} from './modules/vendor.js';
import {festivals} from './modules/festivals.js';
export default createStore({
  state: {
    isSidebarMinimized: false,
    userName: 'Vasili S'
    },
  getters: {
    
  },
  mutations: {
    updateSidebarCollapsedState(state, isSidebarMinimized) {
      state.isSidebarMinimized = isSidebarMinimized
    },
    changeUserName(state, newUserName) {
      state.userName = newUserName
    }
  },
  actions: {
  },
  modules: {
    whatIs,
    vendor,
    festivals
  }
})
