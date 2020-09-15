<!--  -->
<template>
<div v-if="Object.keys(goods).length !== 0">
    <div class="title">{{goods.title}}
    </div>
    <div class="span">
    <span class="span1">{{goods.newPrice}}</span>
    <span class="span2">{{goods.oldPrice}}</span>
    <span class="span3">{{goods.discount}}</span>
    </div>
   <div class="sall">
<div>{{goods.columns[0]}}</div>
<div>{{goods.columns[1]}}</div>
<div>{{goods.services[goods.services.length-1].name}}</div>
   </div>
   <div class="mail">
<div v-for="index in goods.services.length-1" :key="index" >
<img :src="goods.services[index-1].icon" alt="">
{{goods.services[index-1].name}}
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
data() {
//这里存放数据
return {

};
},
props:{
goods:{
    type:Object,
    default(){
        return {}
    }
}
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
.title{
    text-indent: 7px;
    letter-spacing: 1px;
    font-size: 15px;
    margin-top: 8px;
    
}
.span .span1{
    color: red;
    font-size: 18px;
    margin-right: 5px;
    margin-left: 5px;
}
.span .span2{
    font-size: 13px;
    color: #00000082;
    text-decoration: line-through;
    margin-right: 5px;
    
}
.span .span3{
    background-color: #f006;
    border-radius: 5px;
    font-size: 13px;
    position: relative;
    top: -5px;
    left: 0px;
}
.sall{
    margin-top: 10px;
    display: flex;
    border-bottom: 4px solid #ededed;
    display: flex;
    text-align: center;
    justify-content: space-around;
    /* justify-content一般是在父级div用,且用了子div使用flex后此属性无效 */
}
.sall div{
font-size: 13px;
color: #00000082;
margin-bottom: 10px;


}


.mail img{
width: 14px;
height: 14px;
vertical-align: middle;
}
.mail {
    margin-top: 10px;
    display: flex;
    font-size: 13px;
justify-content: space-between;
padding-bottom: 15px;
border-bottom: 4px solid #ededed;
/* justify-content结合flex使用,space-between是前后两头都没有空白,space-around是前后两头都留有空白 一般是在div排版使用*/
}


</style>