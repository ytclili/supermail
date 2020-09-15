import {debounce} from './utils'
export const mixin={
data(){
return {
    detailmixins:null
}
},
mounted (){
    const fresh=debounce(this.$refs.scroll.refresh,200)
    this.detailmixins=()=>{fresh()}
   this.$bus.$on('imgitem',this.detailmixins//接收imgitem事件总线

   )
//    console.log('我是mixins')
}



}