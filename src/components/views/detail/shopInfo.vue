<!--  -->
<template>
<div class=''>
<div class="Logo">
    <img :src="this.shop.shopLogo" alt="">
    <span>{{this.shop.name}}</span>
</div>

<div class="all">
<div class="sell">{{this.shop.sell|saveNum}}<br>
<span>总销量</span></div>
<div>{{this.shop.goods}}<br>
<span>全部宝贝</span></div>
</div>
<div class="content">
<div class="shopInfo" v-for="item in this.shop.score" :key="item.sell">
{{item.name}}
<span :class="{active:item.isBetter}">{{item.score}}</span>
<span :class="{actives:item.isBetter}">{{item.isBetter ? '高':'低'}}</span>
</div>
</div>
<div class="go"><div class="goto">进店逛逛</div></div>

</div>

</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
props:{
shop:{
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
filters:{//过滤器
    saveNum(value){
if(value>10000)
{
    return (value/10000).toFixed(1)+'万'
}
else{
    return value
}
    }

}
,
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
.Logo img{
width:35px;
vertical-align: middle;
border-radius: 30px;
}
.Logo{
    font-size: 14px;
color:#000000ab;
margin-top: 10px;
margin-bottom: 15px;
margin-left: 5px;
}
.all{
    display: flex;
    justify-content: space-around;
    width: 50%;
    text-align: center;
    border-right: 2px solid #0000001c;
   
}
.all .sell{
    margin-left: 0px;
    margin-right: -30px;
}
.all span{
    font-size: 13px;
}
.content{
    float: right;
    position: relative;
    top: -57px;
    right: 0px;
        font-size: 13px;
}
.shopInfo span{
color: green;
margin-left: 5px;
margin-right: 5px;

}
.shopInfo{
    padding-bottom: 10px;
}
.shopInfo .active{
  color: red;
    margin-right: 21px;
}
.content .shopInfo .actives{
  color: white;
    margin-right: 21px;
    background: red;
}
.shopInfo  :nth-child(2){
    background: green;
    color: white;
}
.go{
position: relative;
top: 20px;
width: 50%;
height: 30px;
background: #808080d9;
margin: auto;
text-align: center;
line-height: 30px;
border-radius: 50px;


}
.go .goto{
    position: relative;
    top: 0px;
    left: 32px;
   
}
</style>