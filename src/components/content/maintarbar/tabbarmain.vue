<!--  -->
<template>

<tabbar>
  <tabbaritem path='/home' activeColor="blue">
<img src="~assets/img/tabbar/home.png" alt="" slot="img">
<img src="~assets/img/tabbar/home1.png" alt="" slot="img1">
<div slot="text">首页</div> </tabbaritem>
 <tabbaritem path="/list"><img src="~assets/img/tabbar/list.png" alt="" slot="img">
 <img src="~assets/img/tabbar/list1.png" alt="" slot="img1">
<div slot="text">分类</div></tabbaritem>
  <tabbaritem path="/shop"><img src="~assets/img/tabbar/shop.png" alt="" slot="img">
  <img src="~assets/img/tabbar/shop1.png" alt="" slot="img1">
<div slot="text">购物车</div></tabbaritem>
   <tabbaritem path="/me"><img src="~assets/img/tabbar/me.png" alt="" slot="img">
   <img src="~assets/img/tabbar/me1.png" alt="" slot="img1">
<div slot="text">我的</div></tabbaritem>
</tabbar>
<!-- 因为src是dom属性所以要用~别名可以在webpack.base.conf.js里面设置alias属性 -->
</template>
<script>
import tabbar from 'components/common/tarbar/tabbar'//因为设置了alias(别名)所以可以不用点点
import tabbaritem from 'components/common/tarbar/tabbaritem'
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {
  tabbar,tabbaritem  //组件名要和上面import的相同

//这里存放数据

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

</style>