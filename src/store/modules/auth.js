import * as types from '@/mutation-types';

const store = {
  state: {
    count: 0
  },
  mutations: {
  },
  actions: {
    async [types.GET_WEIXIN_CONFIG]({ commit }, payload = {}){
      return payload
    }
  },
  getters: {
    testCount: state => state.count
  }
};

export default store;
