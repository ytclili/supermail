import {request} from './request'
export  function getDetail(iid) { 
return request({
    url:'/detail',
    params:{iid}
}) }
export class goodsdetail{
constructor(itemInfo,columns,services){
this.title=itemInfo.title,
this.desc=itemInfo.desc,
this.newPrice=itemInfo.price,
this.oldPrice=itemInfo.oldPrice,
this.discount=itemInfo.discountDesc,
this.columns=columns,
this.services=services,
this.realPrice=itemInfo.lowNowPrice
}
}
export class shop{
constructor(shopInfo){
    this.goods=shopInfo.cGoods,
this.sell=shopInfo.cSells
this.name=shopInfo.name,
this.shopLogo=shopInfo.shopLogo,
this.score=shopInfo.score
}
}
export class params{
constructor(info,rule){
this.image=info.images ? info.images[0]:''
this.set=info.set
this.rule=rule
}





}








