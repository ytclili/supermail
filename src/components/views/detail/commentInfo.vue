<!--  -->
<template>
<div class='' v-if="Object.keys(commentInfo).length!==0">
<div class="span"><span>用户评价</span>
<span>更多</span>
</div>
<div>

<img  :src="commentInfo.user.avatar">
<span>{{commentInfo.user.uname}}</span>
</div>
<div class="content1">{{commentInfo.content}}</div>
<div class="content2">
<span>{{commentInfo.created |showData}}</span>
<span>{{commentInfo.style}}</span><br>
<img :src="commentInfo.images" alt="">
</div>










</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {formatDate} from 'common/utils/utils'
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
props:{
commentInfo:{
    type:Object,
    default(){
        return {}
    }
}


},
filters:{
showData(value){
    const data=new Date(value*1000)//先将data转换为日期对象
return formatDate(data,'yyyy-MM-dd hh:mm:ss')//将data给formData()
}


},
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
.span{
    margin-top: 10px;
    border-bottom: 4px solid #ededed73;
    padding-bottom: 10px;
    font-size: 13px;
    display: flex;
    justify-content: space-between;
}
.span :nth-child(1){
padding-left: 10px;
}
.span :nth-child(2){
padding-right: 10px;
}
.content img{
width: 40px;
vertical-align: middle;
margin-right: 5px;
}
.content{
    font-size: 13px;
    font-weight: bold;
}
.content1{
    font-size: 13px;
    color: black;
    margin-top: 10px;
}
.content2 span{
padding-right: 10px;
font-size: 12px;
color: #0009;
}
</style>