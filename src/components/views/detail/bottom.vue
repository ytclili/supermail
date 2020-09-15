<!--  -->
<template>
<div class='bottom'> 
    <div class="bottom1">
<div ><img src="~assets/img/tabbar/service.png"><br>
<span>客服</span>
</div>
<div><img src="~assets/img/tabbar/store.png"><br>
<span>店铺</span>
</div>
<div><img src="~assets/img/tabbar/collect.png"><br>
<span>收藏</span>
</div>
    </div>
    <div class="bottom2">
<div class="shop" @click="addShop">加入购物车</div>
<div class="buy">购买</div>
    </div>
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
addShop(){
    this.$emit('addShop')
   
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
.bottom{
    display: flex;
position: fixed;
bottom: 0px;
left: 0px;
right: 0px;
height: 49px;
background-color: white;
justify-content: space-between;
}
img{
    width: 24px;
}
.bottom1{
    font-size: 12px;
    padding-top: 5px;
    display: flex;
    justify-content: space-around;
    width: 50%;
    background-color: white
}
.bottom2{
  width: 50%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  line-height: 49px;
  font-size: 15px;
}
.bottom .shop{
    width: 50%;
    background: #ffe300b0;
}
.bottom .buy{
    width: 50%;
    background: #ff003cb5;
    color: white;
}
</style>