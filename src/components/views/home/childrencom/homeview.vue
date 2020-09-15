<!--  -->
<template>
<div class='recommend'>
<div v-for="item in recommendview" :key="item.acm" class="item-recommend">
<a :href="item.link">
<img :src="item.image" class="img">
<div class="word">{{item.title}}</div></a>

</div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
props:{
recommendview:{
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
.recommend{
    display: flex;
    text-align: center;
    font-size: 13px;
    
}
.item-recommend{
    flex: 1;
    width: 100%;
    height: 130px;
      border-bottom: 8px solid #eee;
}
.item-recommend img{
    width: 70px;
    padding:8px 0px 5px;
  
}
.item-recommend .word {
    color: black;

}
a{
    text-decoration: none;
}
.item-recommend .word:hover{
   text-decoration: underline;
}
</style>