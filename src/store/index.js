import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

const state={
    shop:[],    
}
const store=new Vuex.Store({//Store大写
state,
getters,//记住不能写在state里面
mutations,
actions,









})
export default store