<!--  -->

<template>
<div id="home">
 
<navbar class="home-nav">
<div slot="center">购物街</div></navbar>
<tabcontrol :titles="['流行','新款','精选']" class="tabcontrol" @tabclick="tabclick" ref="tabcontrol1" v-show="isLoad"></tabcontrol>
<scroll class="content" ref="scroll" :probeType='3' @scroll="scrolltop" @pullingup='pullingup' :pullUpLoad="true">
<swiper :banners="banners" @imgload='imgload'></swiper>
<homeview :recommendview="recommends"></homeview>
<popular></popular>
<tabcontrol :titles="['流行','新款','精选']" class="tabcontrol" @tabclick="tabclick" ref="tabcontrol2" ></tabcontrol>
<goodlist :goodlist="show" ></goodlist>
</scroll>
<backtop @click.native="topclick" v-show="flag"></backtop>
<!-- 监听组件的原生事件必须加上.native修饰符 -->
</div>
</template>

<script>
import navbar from 'components/common/navbar/navbar'
import tabcontrol from 'components/common/tabcontrol/tabcontrol'
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {getHome,getGoods} from 'network/home'//导入函数并不需要括号即使有参数
import swiper from './childrencom/swiper'
import homeview from './childrencom/homeview'
import popular from './childrencom/popular'
import goodlist from 'components/common/goods/goodslist'
import scroll from 'components/common/scroll/scroll'
import backtop from 'components/content/maintarbar/backtop/backtop'
import {debounce} from 'common/utils/utils'
import {mixin} from 'common/utils/mixins'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    navbar,
    swiper,
    homeview,
    popular,
    tabcontrol,
    goodlist,
    scroll,
    backtop

},
data() {
//这里存放数据
return {
banners:[],
recommends:[],
goods:{
'pop':{page:0,list:[]},//pop是实例调用this.goods[pop].page
'new':{page:0,list:[]},
'sell':{page:0,list:[]},
},
currenttype:'pop',
flag:false,
offsettop:0,
isLoad:false,
savey:1000,




}
},
//监听属性 类似于data概念
mixins:[mixin],
computed: {
show(){
    return this.goods[this.currenttype].list
}



},
created() {
//将res里面的数据给results保存
this.getHome()//调用的是函数,所以要下面要写成函数
this.getGoods('pop')//要加引号，只有变量不加引号字符串加引号
this.getGoods('new')
this.getGoods('sell')


},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    getHome(){
getHome().then((res)=>{
    this.banners=res.data.banner.list
this.recommends=res.data.recommend.list
}).catch((err)=>{console.log(err)})}
,
getGoods(type){
    const page=this.goods[type].page+1
getGoods(type,page).then((res)=>{
    this.goods[type].list.push(...res.data.list)//三点运算符可以解析数组将数组里面的数据全部解析然后push进去，如果将数据携程数组
    this.goods[type].page+=1//它并不会将数组进行解析，而是将数组当成字符串传进去[1,2,3]而不会1,2,3分别传入
}).catch(err=>console.log(err))
},
tabclick(index){
switch (index){
case 0:this.currenttype='pop'
break
case 1:this.currenttype="new"
break
case 2:this.currenttype='sell'
break
}
this.$refs.tabcontrol1.currentindex=index
this.$refs.tabcontrol2.currentindex =index

},
topclick(){
    // this.$refs.wrapper.bscroll.scrollTo(0,0,500)//直接拿scroll标签里面的bscroll
this.$refs.scroll.scrollTop(0,0)
},
scrolltop(position){
    this.flag=-position>1000
    this.isLoad=-position>this.offsettop
},
pullingup(){
    this.getGoods(this.currenttype)
},
imgload(){
this.offsettop=this.$refs.tabcontrol2.$el.offsetTop
console.log(this.offsettop)
}


},
//生命周期 - 创建完成（可以访问当前this实例）

//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {
}, //生命周期 - 销毁完成
activated() {

    this.$refs.scroll.scrollTop(0,this.savey)
    this.$refs.scroll.refresh()
}, //如果页面有keep-alive缓存功能，这个函数会触发
deactivated() {
    this.savey=this.$refs.scroll.saveY()
    this.$bus.$off('imgitem',this.detailmixins)
}
}
</script>
<style  scoped>
#home{
    /* padding-top: 44px; */
    height: 100vh;
    /* 100%的可视高度 */
}
.home-nav{
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 9;
    background-color: var(--color-text);
    color: var(--color-background);
}
.tabcontrol{
    position: sticky;
    top: 44px;
    background: #fff;
    z-index: 9;
}
.content{
    /* height: calc(100% - 93px); */
    /* calc动态计算 注意减号两边要空格 */
    /* overflow: hidden; */
    /* margin-top: 44px; */
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0px;
    right: 0px;
}

/* sticky 属性 top:44px表明距离顶部44px的时候position变成fixed */
</style>