import error from "./utils/error";
import * as types from "./mutation-types";

/**
 * 全局异常处理
 * @param {
 * } error
 * @param {*} vm
 */

let isRegistered = false;

function isPromise(ret) {
  return (
    ret && typeof ret.then === "function" && typeof ret.catch === "function"
  );
}
const errorHandler = (error, vm, info) => {
  console.error("抛出全局异常");
  console.error(vm);
  console.error(error);
  console.error(info);
};

// 对每一个promise actions 进行捕获错误
function registerActionHandle(actions, instance, source) {
  Object.keys(actions).forEach(key => {
    let fn = actions[key];

    actions[key] = function(...args) {
      let ret = fn.apply(this, args);
      if (isPromise(ret)) {
        // 对于异步的操作方法进行捕获，一般请求数据回来之后的操作
        return ret.catch((err) => {
          const info = {};

          info.type = "error";
          info.source = source;
          info.key = key;
          info.componentName = instance.$options && instance.$options["name"];
          info.route = instance.route;

          // 相关action的loading变为false
          // 有可能是mapActions之后的 methods
          if (types[key] && instance && instance.$store) {
            // 这里是actions的错误
            info.actionType = key;
            instance.$store.commit(`loading/setLoading`, {
              action: types[key],
              loading: false
            });
          }

          errorHandler(err, instance, info);
        });
      } else {
        // 默认错误处理
        return ret;
      }
    };
  });
}

// 注册vuex异常处理
const registerVuex = instance => {
  if (instance.$options["store"]) {
    let actions = instance.$options["store"]["_actions"] || {};

    if (actions) {
      let tempActions = {};
      Object.keys(actions).forEach(key => {
        tempActions[key] = actions[key][0];
      });
      registerActionHandle(tempActions, instance, "store-actions");
    }
  }
};

const registerVue = instance => {
  if (instance.$options.methods) {
    let actions = instance.$options.methods || {};
    if (actions) {
      registerActionHandle(actions, instance, "vm-methods");
    }
  }
};

let GlobalError = {
  install: Vue => {
    // if (isRegistered) {
    //   return;
    // }
    /**
     * 全局异常处理
     * @param {
     * } error
     * @param {*} vm
     */
    Vue.config.errorHandler = errorHandler;

    // 全局混入
    Vue.mixin({
      beforeCreate() {
        registerVue(this);
        registerVuex(this);
      }
    });

    // 原型链注册异常函数
    Vue.prototype.$throw = errorHandler;

    isRegistered = true;
  }
};

export default GlobalError;
