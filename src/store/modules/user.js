import * as types from '@/mutation-types';
import { sleep } from '@/utils'

const store = {
  state: {
    count: 0
  },
  mutations: {
    [types.TEST_COUNT] (state, { count = 0 }) {
      state.count = count
    }
  },
  actions: {
    async [types.TEST_COUNT]({ commit }, payload = {}){
      await sleep(3000)
      commit(types.TEST_COUNT, payload)
      return payload
    }
  },
  getters: {
    testCount: state => state.count
  }
};

export default store;
