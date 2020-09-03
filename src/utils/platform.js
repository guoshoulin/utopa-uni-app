const PLATFORM_TYPE = {
    H5: 'H5',
    MP: 'MP'
}

/**
 * 获取 window.location.href
 */
export const getLocationUrl = () => {
  let url = "";

  // #ifdef H5
  url = window.location.href;
  // #endif

  return url;
};

export const getPlatform = () => {
  let platform = "";

  // #ifdef H5
  platform = PLATFORM_TYPE.H5;
  // #endif

  // #ifdef MP
  platform = PLATFORM_TYPE.MP;
  // #endif

  return platform;
};

/**
 * 判断是h5环境
 */
export const isH5 = (() => getPlatform() === PLATFORM_TYPE.H5)();

/**
 * 判断在小程序环境 微信小程序/支付宝小程序/百度小程序/头条小程序/QQ小程序
 */
export const isMiniProgram = (() => getPlatform() === PLATFORM_TYPE.MP)();
