import vue from 'vue'
import VueRouter from 'vue-router'
vue.use(VueRouter)
const home=()=>import('../components/views/home/home')
const me=()=>import('../components/views/me/me')
const list=()=>import('../components/views/list/list')
const shop=()=>import('../components/views/shop/shop')
const detail=()=>import('../components/views/detail/detail')
const routes=[//为什么一定要routes
    {
        path:'',
        redirect:'/home'
      },
      {
      path:'/home',
      component:home
      },
      {
        path:'/me',
        component:me
      },
      {
        path:'/list',
      component:list
      },
      {
        path:'/shop',
        component:shop
      },
      {
        path:'/detail/:iid',
        component:detail
          
      },
]



const router=new VueRouter({
routes,
mode:'history'
})
export default router