<!--  -->
<template>
<div class='nav'>
<div class="left"><slot name="left"></slot></div>
<div class="center"><slot name="center"></slot></div>
<div class="right"><slot name="right"></slot></div>
<!-- 一般插槽最好包裹在div里面 一般是具名插槽 -->
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

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
}
</script>
<style  scoped>
.nav{
    display: flex;
    height: 44px;
    text-align: center;
    line-height: 44px;
    box-shadow: 0 1px 1px rgb(100, 100,100,0.5);
    /* box-show x方偏移量 y方偏移量 粗细,颜色 rgb的第四个单位是透明度*/
}
.left ,.right{
    width:60px;
    height: 44px;
  
}
.center{
    flex:1;
 
}
</style>