module.exports={
plugins:{
autoprefixer:{},
"postcss-px-to-viewport":{
viewportWidth:375,
viewportHeight:667,
unitPrecision:5,
selectorBlackList:['ignore','tabbar','tabbaritem'],
viewportUnit:'vw',
minPixelValue:1,//小于或等于1px不转换为vw
mediaQuery:false//是否允许媒体查询转换为px




}



}






}