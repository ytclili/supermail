<!--  -->
<template>
<div class='logon'>
<div class="detail">
<img src="~assets/img/me/user.png">
<div class="phone">
<span>登录/注册</span>
<img src="~assets/img/me/return.png" class="image1">
<div class="image">
    <img src="~assets/img/me/phone.png" alt="" >
    <span>暂无绑定手机号</span>
</div>
</div>
</div>
<div class="money">

<div class="balance">
    <span>0.00</span>元<br>
    <span>我的余额</span>

</div>
<div class="discount"></div>
<div class="intergral"></div>





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

.logon{
    width: 100%;
    height: 75px;
background: #0000ff69;
    padding-top: 15px;
}
.detail{
    width: 100%;
    height: 60px;

    
}
.detail .phone{
    width: 75%;
    height: 60px;
    float: right;
 
    color: #fff;
}
.detail .phone :nth-child(1){

    line-height: 40px;
    padding-bottom: 0px;
    margin-bottom: 0px;
  

}
.detail .phone .image img{
    width: 20px; 
      vertical-align: middle;
}
.detail .phone .image{
    font-size: 13px;
}
.detail .image1{
    width: 15px;
    display: block;
    float: right;
    padding-top: 20px;
    padding-right: 10px;
}
.money{
    width: 100%;
    height: 80px;
    background: #fff;
    display: flex;
    justify-content: space-between;
}
.money .balance{
    width: 33%;
    background: yellow;
    text-align: center;  
}
.money .balance :nth-child(1){
    line-height: 80px;
}

</style>