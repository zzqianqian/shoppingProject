import * as types from "../mutations-type";
export default {
  state: {
    userInfo: {
      name: "001"
    }
  },
  getters: {
    userInfo: state => state.userInfo
  },
  mutations: {
    [types.GET_PERSON_INFO](state, data) {
      state.personInfo = data;
    },
    [types.UPDATE_USER](state, data) {
      state.userInfo = data;
    }
  },
  actions: {
    async fetchPersonInfo({ commit }) {
      // let res = await api.user.getPersonInfo();
      commit("GET_PERSON_INFO", { age: 99 });
    }
  }
};
