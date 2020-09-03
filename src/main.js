import Vue from 'vue'
import App from './App'
import store from './store';
import ErrorPlugin from './errorPlugin';

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$store = store

// 异常处理插件
Vue.use(ErrorPlugin)

const app = new Vue({
  ...App,
  store
})

app.$mount()
