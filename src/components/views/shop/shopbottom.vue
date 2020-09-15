<!--  -->
<template>
<div class='bottom'>
  <img src="~assets/img/shop/true.png" :class="{active:change}" @click="imgClick">
<span class="span1">全选</span>
<span>合计：</span>
<span>{{totalprice}}</span>
<div class="computer" @click="calc">去计算({{length}})</div>

</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {mapGetters} from 'vuex'
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {
 
    totalprice(){
      return '￥'+ this.$store.state.shop.filter(item=>{
            return item.checked==true            
        }).reduce((prevalue,item)=>{
             return (prevalue+item.price.substring(1,10)*item.count)
            },0).toFixed(2)
    },
    length(){
        return this.$store.state.shop.filter(item=>{
            return item.checked
        }).length//先将东西删选出来再进行统计长度
    },
    ...mapGetters(['shopList']),
    change(){
//  return  !(this.$store.state.shop.filter(item=>
// !item.checked).length
// )
if(this.shopList.length==0) return false
return !this.shopList.find(item=>!item.checked)
}
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
imgClick(){
if(this.change)
{
    this.shopList.forEach(item => item.checked=false)
}
else{
    this.shopList.forEach(item=>item.checked=true)
}
},
calc(){
if(!this.change){
    this.$toast.show('亲,您还有商品没有结算哦!')
}
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
deactivated() {}
}
</script>
<style  scoped>
.bottom{
    position: fixed;
    width: 100%;
    height: 30px;
    background: #eee;
    bottom: 49px;
    left: 0px;
    right: 0px;
    font-size: 13px;
    /* text-align: center; */
    line-height: 30px;
}

.bottom img{
    width: 15px;
    border:2px solid #aaa;
    border-radius: 50%;
    vertical-align: middle;
    margin-left: 10px; 
    margin-top: -4px;
    
}
.bottom .span1{
    margin-right: 10px;
}
.computer{
    float: right;
    width: 25%;
    height: 100%;
    background:#ff000096;
    text-align: center;
    color: #fff;
}
.active{
    background: red;
}
</style>