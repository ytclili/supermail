<!--  -->
<template>

<div class='wrapper' ref="aaa">
<ul class="content">
    <button class="btn"> abbbb</button>
<li>大家好1</li>
<li>大家好2</li>
<li>大家好3</li>
<li>大家好4</li>
<li>大家好5</li>
<li>大家好6</li>
<li>大家好7</li>
<li>大家好8</li>
<li>大家好9</li>
<li>大家好10</li>
<li>大家好11</li>
<li>大家好12</li>
<li>大家好13</li>
<li>大家好14</li>
<li>大家好15</li>
<li>大家好16</li>
<li>大家好17</li>
<li>大家好18</li>
<li>大家好19</li>
<li>大家好20</li>
<li>大家好21</li>
<li>大家好22</li>
<li>大家好23</li>
<li>大家好24</li>
<li>大家好25</li>
<li>大家好26</li>
<li>大家好27</li>
<li>大家好28</li>
<li>大家好29</li>
<li>大家好30</li>
<li>大家好31</li>
<li>大家好32</li>
<li>大家好33</li>
<li>大家好34</li>
<li>大家好35</li>
<li>大家好36</li>
<li>大家好37</li>
<li>大家好38</li>
<li>大家好39</li>
<li>大家好40</li>
<li>大家好41</li>
<li>大家好42</li>
<li>大家好43</li>
<li>大家好44</li>
<li>大家好45</li>
<li>大家好46</li>
<li>大家好47</li>
<li>大家好48</li>
<li>大家好49</li>
<li>大家好50</li>
<li>大家好51</li>
<li>大家好52</li>
<li>大家好53</li>
<li>大家好54</li>
<li>大家好55</li>
<li>大家好56</li>
<li>大家好57</li>
<li>大家好58</li>
<li>大家好59</li>
<li>大家好60</li>
<li>大家好61</li>
<li>大家好62</li>
<li>大家好63</li>
<li>大家好64</li>
<li>大家好65</li>
<li>大家好66</li>
<li>大家好67</li>
<li>大家好68</li>
<li>大家好69</li>
<li>大家好70</li>
<li>大家好71</li>
<li>大家好72</li>
<li>大家好73</li>
<li>大家好74</li>
<li>大家好75</li>
<li>大家好76</li>
<li>大家好77</li>
<li>大家好78</li>
<li>大家好79</li>
<li>大家好80</li>
<li>大家好81</li>
<li>大家好82</li>
<li>大家好83</li>
<li>大家好84</li>
<li>大家好85</li>
<li>大家好86</li>
<li>大家好87</li>
<li>大家好88</li>
<li>大家好89</li>
<li>大家好90</li>
<li>大家好91</li>
<li>大家好92</li>
<li>大家好93</li>
<li>大家好94</li>
<li>大家好95</li>
<li>大家好96</li>
<li>大家好97</li>
<li>大家好98</li>
<li>大家好99</li>
<li>大家好100</li>


</ul>


</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Bscroll from 'better-scroll'





export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
scroll:null
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
console.log(this.$refs.aaa)
console.log(new Bscroll(document.querySelector('.wrapper'),{}))
this.scroll=  new Bscroll(document.querySelector('.wrapper'),{
    probeType:2,//probeType:当值为0或1时不侦测，(默认是0)，2时侦测(当手指在上面滑动时侦测,惯性不侦测)，当值为3时惯性也侦测
    click:true,//默认是false无法监听事件
    pullUpLoad:true,
})
this.scroll.on('scroll',(position)=>{
    // console.log(position)
})
this.scroll.on('pullingUp',()=>{
    console.log('上拉加载成功!')
    setTimeout(()=>{this.scroll.finishPullUp()},2000)//下一次的下拉加载 

})

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前时
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style  scoped>
/* scoped表示作用域 */
.wrapper{
width: 100%;
height: 150px;
background-color: red;
/* overflow-y: scroll; */
/* overflow: hidden;上面的scroll相当于隐藏了这个 */
}





</style>