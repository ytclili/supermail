import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'//小弹框
import fastclick from 'fastclick'//移动端点击延迟
import vuelazyload from 'vue-lazyload'
require
Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()//创建$bus为Vue实例
Vue.use(toast)
Vue.use(vuelazyload,{
  loading:require('assets/img/home/beautiful.jpg')//图片懒加载
})
fastclick.attach(document.body)
new Vue({
  render: h => h(App),
  router,
  store,
 
  
}).$mount('#app')
