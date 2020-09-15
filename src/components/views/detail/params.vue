<!--  -->
<template>
<div v-if="Object.keys(params).length !==0">

<table v-for="(tables,index) in params.rule.tables" :key="index" cellspacing=0 class="table1">
    <tr v-for="(tr,indey) in tables" :key="indey">
        <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
</tr>
</table>
<table  class="table2">
<tr v-for="(tr,index) in params.set" :key="index">
    <td v-for="(td,indey) in tr" :key="indey">{{td}}</td>             
</tr>
</table>
<div v-if="params.image" >
<img :src="params.image" alt="">
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
params:{
    type:Object,
    default(){
        return {}
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
deactivated() {}
}
</script>
<style  scoped>
.size{
border-top: 4px solid  #ededed;
border-bottom: 4px solid  #ededed;
}
.table1 tr td{
    width: 60px;
    height: 15px;
 border-bottom: 2px solid  #ededed;
    text-align: left;
    line-height: 15px;
    font-size: 13px;
  padding-bottom: 5px;
  padding-top:5px ;
}
.table1 tr :nth-child(1){
   text-align: left;
   padding-left: 5px;
}
.table2{
    width: 305px;
    text-align: left;
}
.table2 tr td{
    height: 15px;
 border-bottom: 1px solid  #ededed;
    line-height: 15px;
    font-size: 13px;
  padding-bottom: 5px;
  padding-top:5px ;
}
.table2 tr :nth-child(1){
/* text-align: left; */
   padding-left: 5px;
   width: 80px;
}
.table2 tr :nth-child(2){
    color: #f009;
   
}
img{
    width:100%
}

</style>