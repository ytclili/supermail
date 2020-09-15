<!--  -->
<template>
<div class="detail">
<navbar class="navbar">
    <div slot="left" class="leftitem" @click="returnclick"><img src="~assets/img/home/return.png"></div>
  <div slot="center" class="top"> 
      <div v-for="(item,index) in title" :key="item" class="topitem" :class="{active:index==currentindex}" @click="topitemclick(index)" >
          {{item}}</div>
  </div>
</navbar>
<scroll class="content" ref="scroll" :probeType="3" @scroll="scrollto">    
<detailswiper :image='topimage'></detailswiper>
<detailbase :goods="goods"></detailbase>
<shopinfo :shop="shop"></shopinfo>
<detail-info :detailInfo="detailInfo" @imgLoad='imageLoad'></detail-info>
<params-info :params='params' ref="params"></params-info>
<comment-info :commentInfo="commentInfo" ref="commentInfo"></comment-info>
<goodlist :goodlist="recommend" ref="recommend"></goodlist>
</scroll>
<backtop v-show="isShowBacktop" @click.native="backtopClick"></backtop>
<bottom @addShop="addShop"></bottom>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import navbar from 'components/common/navbar/navbar'
import {getDetail,goodsdetail,shop,params} from 'network/detail'
import detailswiper from './detailswiper'
import detailbase from './detailbase'
import shopinfo from './shopInfo'
import scroll from 'components/common/scroll/scroll'
import detailInfo from './detailcoment'
import paramsInfo from './params'
import commentInfo from './commentInfo'
import {recommend} from 'network/home'
import goodlist from 'components/common/goods/goodslist'
import {mixin} from 'common/utils/mixins'//混入
import bottom from './bottom'
import backtop from 'components/content/maintarbar/backtop/backtop'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    navbar,
    detailswiper,
    detailbase,
    shopinfo,
    scroll,
    detailInfo,
    paramsInfo,
    commentInfo,
    recommend,
    goodlist,
    bottom,
    backtop

},
data() {
//这里存放数据
return {
title:['商品','参数','评论','推荐'],
currentindex:0,
iid:null,
topimage:[],
goods:{},
shop:{},
detailInfo:{},
params:{},
commentInfo:{},
recommend:[],
themeYs:[],
getthemeTop:null,
isShowBacktop:false
};
},
//监听属性 类似于data概念
mixins:[mixin],//混入
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
topitemclick(index){
    this.currentindex=index

   this.$refs.scroll.scrollTop(0,-this.themeYs[index]+44)



},
returnclick(){
    this.$router.back()
},
imageLoad(){
    this.$refs.scroll.refresh()
         this.themeYs.push(0)
this.themeYs.push(this.$refs.params.$el.offsetTop)
this.themeYs.push(this.$refs.commentInfo.$el.offsetTop)
this.themeYs.push(this.$refs.recommend.$el.offsetTop)
this.themeYs.push(Number.MAX_VALUE)
},
scrollto(position){
    var length=this.themeYs.length
    var position=position-44
// for(let i=0;i<length;i++){
// if(( this.currentindex!==i &&i<length-1&&-position<this.themeYs[i+1]&&-position>= this.themeYs[i])||(i===length-1&&-position>= this.themeYs[i])){
//    this.currentindex=i
// }
// }
for(let i=0;i<length-1;i++)
{
if((this.currentindex!==i)&&(i<length-1&&-position<this.themeYs[i+1]&&-position>= this.themeYs[i]))
{
    this.currentindex=i
}
}
this.isShowBacktop=-position>1000

},
backtopClick(){
this.$refs.scroll.scrollTop(0,0)
},
addShop(){
   const product={}
product.image=this.topimage[0]
product.title=this.goods.title
product.desc=this.goods.desc
product.price='￥'+this.goods.realPrice
product.iid=this.iid
this.$store.dispatch('addShop',product).then(res=> this.$toast.show(res))
}









},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
   
    this.iid=this.$route.params.iid
getDetail(this.iid).then(res=>{   
    const data=res.result
    this.topimage=data.itemInfo.topImages 
    this.goods= new goodsdetail(data.itemInfo,data.columns,data.shopInfo.services)
    this.shop=new shop(data.shopInfo)
    this.detailInfo=data.detailInfo
   this.params=new params(data.itemParams.info,data.itemParams.rule)
   if(data.rate.cRate!==0)
   this.commentInfo=data.rate.list[0]
console.log(data)
    }
 ),
recommend(this.iid).then((res)=>{
    this.recommend=res.data.list
   
})
//  this.getthemeTop=debounce(()=>{
// this.themeYs.push(0)
// this.themeYs.push(this.$refs.params.$el.offsetTop)
// this.themeYs.push(this.$refs.commentInfo.$el.offsetTop)
// this.themeYs.push(this.$refs.recommend.$el.offsetTop)
// },100)
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {
     this.$bus.$off('imgitem',this.detailmixins)
}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
deactivated() {}
}
</script>
<style  scoped>
.top{
  display: flex;
}
.topitem{
    flex: 1;
    font-size: 13px;
}
.active{
    color: red;

}
.leftitem img{
    width: 20px;
    margin-top: 12px;
}
.navbar{
    background-color: #ffc0cf;
    position: relative;
    z-index: 9;
}
.content{
    /* height: calc(100% - 93px); */
    position: absolute;
    top: 44px;

    bottom: 49px;
    width: 100%;
}
.detail{
    position: relative;
    z-index: 9;
    background: #fff;
    height: 100vh;
}

</style>