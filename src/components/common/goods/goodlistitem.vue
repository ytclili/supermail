<!--  -->
<template>
<div class='goods'>
   
<a ><img v-lazy="showimg" alt="" @load="imgload" @click="imgGo"></a>
<div class="word">
<p>{{goodlistitem.title}}</p>
<span class="span">{{'￥'+goodlistitem.price}}</span>
<span class="span1">{{goodlistitem.cfav}}</span>
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
goodlistitem:{
    type:Object,
    defalut(){
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
computed: {
    showimg(){
    return this.goodlistitem.image||this.goodlistitem.show.img 
}
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
imgload(){
    // if(this.$route.path.indexOf('/home'))
    // {this.$bus.$emit('imgitem')
    // }//事件总线
    // else if(this.$route.path.indexOf('/detail'))
    //     {
    //     this.$bus.$emit('detailitem')
    // }
  this.$bus.$emit('imgitem')
},
imgGo(){
  this.$router.push('./detail/'+this.goodlistitem.iid)
},

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
.goods{
    position: relative;
  padding-bottom: 40px;
  width: 48%;
}
.goods img{
width: 100%;
border-radius: 5px;
/* border-radius边缘变成圆角 */
}
.goods .word{
    margin-top: 5px;
    font-size: 13px;
    position: absolute;
    bottom:5px;
    left: 0px;
  
}

.goods .word p{
width: 150px;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis
/* ;兼容ie浏览器 */
/* white-space:nowrap多余的用也就是hidden部分...表示 */
}
.goods .word span{
    left: 0px;
    text-align: center;
    padding-left: 25px;
}
.goods .word .span{
color: red;
}
.goods .word .span1{
padding-left: 30px;

}
.goods .word .span1::before{
content: '';
position: absolute;
left: 80px;
top: 14px;
width: 14px;
height: 14px;
background: url('~assets/img/home/collection.png') 0 0/14px 14px;
/* 0 0/14px 14px 第一个0表示颜色,0/14px 0表示位置 14px表示大小 最后的14px也表示大小 */

}


</style>