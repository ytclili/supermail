import {request} from './request'
export function getHome(){
return request({ 
     url:'/home/multidata'
})
  }
export function getGoods(type,page){
     return request({
          url:'/home/data',
          params:{type,page}
     })
}
export function recommend(iid){
     return request({
          url:'/recommend'
     })
}





