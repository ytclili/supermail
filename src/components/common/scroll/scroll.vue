<!--  -->
<template>
<div class='wrapper' ref="wrapper">
<div class="content">
<slot></slot>
</div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Bscroll from 'better-scroll'
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
props:{
probeType:{
    type:Number,
    default:0
},
pullUpLoad:{
    type:Boolean,
    default:false
}


},
data() {
//这里存放数据
return {
bscroll:null,

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  scrollTop(x,y,time=500){
this.bscroll&&this.bscroll.scrollTo(x,y,time)
},
refresh(){
    this.bscroll&&this.bscroll.refresh()
 
},
saveY(){
    return this.bscroll?this.bscroll.y:0
}
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
this.bscroll=new Bscroll(this.$refs.wrapper,{
 click:true ,
probeType:this.probeType,
pullUpLoad:this.pullUpLoad

})
if(this.probeType==2||this.probeType==3){
this.bscroll.on('scroll',position=>{
    this.$emit('scroll',position.y)
  
})
}
if(this.pullUpLoad){
this.bscroll.on('pullingUp',()=>{
   this.$emit('pullingup')
   setTimeout(()=>{this.bscroll.finishPullUp()},2000)
})
}},
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