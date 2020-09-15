import Toast from './toast'
const obj={}
obj.install=function(Vue){//use会执行install函数，相当于插件
// document.body.appendChild()


const contrustor=Vue.extend(Toast)
const toast=new contrustor()
toast.$mount(document.createElement('div'))//$el就是创建的div
document.body.appendChild(toast.$el)
Vue.prototype.$toast=toast
console.log(toast.$el)
}

export default obj