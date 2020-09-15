<!--  -->
<template>
<div class='shoping'>
<navbar class="navbar">
    <div slot="center">购物车({{length}})</div>
</navbar>
<scroll class="content" ref="scroll">
<shopitem :list="shop"></shopitem>
</scroll>
<shopbottom></shopbottom>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import navbar from 'components/common/navbar/navbar'
import scroll from 'components/common/scroll/scroll'
import shopitem from './shopitem'
import {mapGetters} from 'vuex'
import shopbottom from './shopbottom'

export default {

//import引入的组件需要注入到对象中才能使用
components: {
    navbar,
    scroll,
    shopitem,
    shopbottom

},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {
    // number(){
    //    return this.$store.state.shop.length
    // }
    // ...mapGetters(['shopNumber','shopList'])
    ...mapGetters({
length:'shopNumber',//取名字为length
// list:'shopList'
    }),
    shop(){
        return this.$store.state.shop
    }
},
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
activated() {
  this.$refs.scroll.refresh()
}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style  scoped>
.navbar{
    background: #ff0c007d;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 10;
}
.content{
    position: relative;
    height: calc(100% - 93px);
    top: 44px;
    bottom: 49px;
    overflow: hidden;
}
.shoping{
    height: 100vh;
    z-index: 10;
}


</style>