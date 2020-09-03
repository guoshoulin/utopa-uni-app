const PAGE_PATH ={
  INDEX: '/pages/index/index'
}

const _navigateTo = (url = PAGE_PATH.INDEX, animationType = "pop-in", isRedirect = false) => {
  if (isRedirect) {
    uni.redirectTo({
      url,
      fail(err) {
        console.error(`进入页面失败---${url}`);
        console.error(err);
      },
      success() {
        console.log(`进入页面 --- ${url}`);
      }
    });
  } else {
    uni.navigateTo({
      url,
      animationType,
      fail(err) {
        console.error(`进入页面失败---${url}`);
        console.error(err);
      },
      success() {
        console.log(`进入页面 --- ${url}`);
      }
    });
  }
};

export default {
  goToIndex: () => _navigateTo(PAGE_PATH.INDEX)
}