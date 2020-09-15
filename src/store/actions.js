export default{
    addShop(context,payload){
        return new Promise((resolve,reject)=>{
          let oldproduct=context.state.shop.find(item=>{
            return item.iid===payload.iid
                })
            if(oldproduct){
            context.commit('Addshop',oldproduct)
            resolve('商品数量+1')
            }     
            else{
            payload.count=1
            context.commit('ADDshop',payload)
            resolve('商品添加成功')
            } 
        
        
        
        })
           
         
        }
}