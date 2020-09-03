// import uni from 'uni-app';
// import _ from './licia';

// export { _ }
export *  from "./licia";
import _ from './licia';

export const isProduction = process.env.NODE_ENV === "production";

const platform = uni.getSystemInfoSync().platform;

export const isAndroid = () => platform === "android";
export const isIos = () => platform === "ios";
export const isDevtools = () => platform === "devtools";

// 对对象的key进行排序
export function sortObject(val) {
    console.log({val});
  const keys = Object.keys(val).sort();
  let sortParam = {};
  keys.forEach((key, index) => {
    sortParam[key] = val[key];
  });
  return sortParam;
}

// Object/Array排序
export function deepSort(params) {
    console.log({params});
  for (let k in params) {
    if (Array.isArray(params[k])) {
      // 数组
      for (let i = 0; i < params[k].length; i++) {
        if (_.isObj(params[k][i])) {
          params[k][i] = deepSort(params[k][i]);
        }
      }
    } else if (_.isObj(params[k])) {
      // JSON
      params[k] = deepSort(params[k]);
    }
  }
  return sortObject(params);
}
