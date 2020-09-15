<!--  -->
<template>
<div class=''>
<div v-for="(item,index) in list" :key="index" class="content">
    <img src="~assets/img/shop/true.png" @click="imgClick(item)" :class="{change:item.checked}">
<img :src="item.image" class="image">
<div class="span">
<span>{{item.title}}</span>
<span>{{item.desc}}</span>
<span>{{item.price}}</span>
<span>{{"x"+item.count}}</span>
</div>


</div>









</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {mapGetters} from 'vuex'
export default {
//import引入的组件需要注入到对象中才能使用
components: {

},
props:{
    list:{
        type:Array,
        default(){
            return []
        }
    }
},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {
//   list(){
//       return this.$store.state.shop
//   }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
imgClick(item){//可以直接利用点击将item作为参数传过来,并不是只有index才能传
item.checked=!item.checked
// this.$store.commit('ADDshop',index)
}
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
deactivated() {}
}
</script>
<style  scoped>
.content{
    width: 100%;
    height: 90px;
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid gray;
}
.content .image{
    width: 60px;
    border-radius: 5px;

}
.content img{
    width: 20px;
    border:2px solid #aaa;
    border-radius: 50%;
    vertical-align: middle; 
}
.span{
    width: 230px;
    height: 90px;
  
    float: right;
    

}
.span :nth-child(1){
    font-size: 14px;
    font-weight: bold;
   display: block;
 
 overflow: hidden;
 white-space: nowrap;
 text-overflow: ellipsis;
}
.span :nth-child(2){
    font-size: 13px;
    color: black;
    display: block;
 overflow: hidden;
 white-space: nowrap;
 text-overflow: ellipsis;
 padding-top: 15px;
}
.span :nth-child(3){
    display: block;
margin-top: 15px;
color: red;
}
.span :nth-child(4){
    position: relative;
    bottom: 15px;
    right: 20px;
    display: block;
    float: right;
}
.change{
background: red;
}
</style>