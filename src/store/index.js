import Vue from "vue";
import Vuex from "vuex";

// 插件
import createLogger from "vuex/dist/logger";
import loadingPlugin, { loadingModule } from "./plugin/loadingPlugin";

// 模块
import user from "./modules/user";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    loading: loadingModule
  },
  state: {},
  mutations: {},
  actions: {},
  plugins:
    process.env.NODE_ENV === "production"
      ? [loadingPlugin]
      : [createLogger(), loadingPlugin]
});

export default store;
