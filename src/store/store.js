import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({

  state: {
    dataRoom: [],
  },
  // return ...state.dataRoom
  mutations: {
    setDataRoom(state, data) {
      state.dataRoom = data;
    }
  },
  actions: {
    updateDataRoom(context, data, sn) {
        console.log(context, data)
      context.commit("setDataRoom", data.data, sn);
    }
  }
});
