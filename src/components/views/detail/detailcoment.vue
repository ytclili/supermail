<!--  -->
<template>
<div>
<div v-if="Object.keys(detailInfo).length !== 0">
<div class="desc"><p>{{detailInfo.desc}}</p></div>
<div class="key">{{detailInfo.detailImage[0].key}}</div>
<div v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" class="image">
<img :src="item" alt=""  @load="imgLoad">

</div>
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
    detailInfo:{
        type:Object,
        default(){
            return {}
        }
    }
},
data() {
//这里存放数据
return {
count:0,
// imageLength:0
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {

},
//方法集合
methods: {
imgLoad(){
if(++this.count===this.detailInfo.detailImage[0].list.length)
    this.$emit('imgLoad')
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
.image img{
    width: 100%;
}
.desc{
    font-size: 13px;
    margin-top: 30px;
    border-top: 4px solid #ededed73 ;
     border-bottom: 4px solid  #ededed73;
  
}
.key{
    font-size: 14px;
    margin-bottom: 10px;
    text-indent: 10px;
}



</style>