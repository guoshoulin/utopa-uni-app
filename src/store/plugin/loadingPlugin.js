import * as types from "@/mutation-types";

const loadingPlugin = store => {
  // 监听actions
  store.subscribeAction({
    before: (action) => {
      store.commit(`loading/setLoading`, {
        action: action.type,
        loading: true
      });
    },
    after: (action) => {
      store.commit(`loading/setLoading`, {
        action: action.type,
        loading: false
      });
    }
  });
};

const getters = {};
const state = {}

Object.keys(types).forEach(type => {
  // 必须提前声明
  state[type] = false;
  getters[type] = state => state[type] || false;
});

export const loadingModule = {
  namespaced: true,
  state,
  mutations: {
    setLoading(state, { action, loading = false }) {
      state[action] = loading;
    }
  },
  getters
};

export default loadingPlugin;
