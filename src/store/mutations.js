export default{

    Addshop(state,payload){
        payload.count++
    
      },
      ADDshop(state,payload){
       payload.checked=true
        state.shop.push(payload)
      },



}