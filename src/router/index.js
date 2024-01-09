import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Shop from '../views/Shop.vue'
import WishList from '../views/WishList.vue'
import Stores from '../views/Stores.vue'
import Blogs from '../views/Blogs.vue'
import BlogPost from '../views/BlogPost.vue'
import MyOrders from '../views/MyOrders.vue'
import Settings from '../views/Settings.vue'
import Billing from '../views/Billing.vue'
import Dashboard from '../views/Dashboard.vue'
import DashboardProducts from '../views/DashboardProducts.vue'
import DashboardOrders from '../views/DashboardOrders.vue'
import AddProductView from '../views/AddProductView.vue'
import DashboardSingleOrder from '../views/DashboardSingleOrder.vue'
import DashboardSettings from '../views/DashboardSettings.vue'
import DashboardBilling from '../views/DashboardBilling.vue'
import store from '../store'
import PublicLayout from '../layouts/PublicLayout.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
     
      component: PublicLayout,
      children: [
        {path: '', component: HomeView}
      ],
      beforeEnter: (to, from, next) => {
        if (store.getters.isAuthenticated && store.getters.loggedInUser.role === 'merchant') {
          return {name: 'dashboard'}
        } else {
          next();
        }
      },
    },
    {
      path: '/shop',
      name: 'shop',
      component: PublicLayout,
      children: [
        {path: '', component: Shop}
      ],
      beforeEnter: (to, from) => {
        if (store.getters.isAuthenticated && store.getters.loggedInUser.role === 'merchant') {
          return from.path
        }
      },
    },
    {
      path: '/wish-list',
      name: 'wishlist',
      component: WishList,
      beforeEnter: (to, from) => {
        if (store.getters.isAuthenticated && store.getters.loggedInUser.role === 'merchant') {
          return from.path
        }
      },
    },
    {
      path: '/stores',
      name: 'stores',
      component: Stores,
      beforeEnter: (to, from) => {
        if (store.getters.isAuthenticated && store.getters.loggedInUser.role === 'merchant') {
          return from.path
        }
      },
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blogs,
      beforeEnter: (to, from) => {
        if (store.getters.isAuthenticated && store.getters.loggedInUser.role === 'merchant') {
          return from.path
        }
      },
    },
    {
      path: '/blogpost',
      name: 'blogpost',
      component: BlogPost,
      beforeEnter: (to, from) => {
        if (store.getters.isAuthenticated && store.getters.loggedInUser.role === 'merchant') {
          return from.path
        }
      },
    },
    {
      path: '/my-orders',
      name: 'myOrders',
      component: MyOrders,
      beforeEnter: (to, from) => {
        if (store.getters.isAuthenticated && store.getters.loggedInUser.role === 'merchant') {
          return from.path
        }
      },
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
      beforeEnter: (to, from) => {
        if (store.getters.isAuthenticated && store.getters.loggedInUser.role === 'merchant') {
          return from.path
        }
      },
    },
    {
      path: '/billing',
      name: 'billing',
      component: Billing,
      beforeEnter: (to, from) => {
        if (store.getters.isAuthenticated && store.getters.loggedInUser.role === 'merchant') {
          return from.path
        }
      },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      beforeEnter: (to, from) => {
        if (store.getters.isAuthenticated && store.getters.loggedInUser.role !== 'merchant') {
          return from.path
        }
      },
    },
    {
      path: '/dashboard/products',
      name: 'DashboardProducts',
      component: DashboardProducts,
      beforeEnter: (to, from) => {
        if (store.getters.isAuthenticated && store.getters.loggedInUser.role !== 'merchant') {
          return from.path
        }
      },
    },
    {
      path: '/dashboard/add-product',
      name: 'AddProductView',
      component: AddProductView,
      beforeEnter: (to, from) => {
        if (store.getters.isAuthenticated && store.getters.loggedInUser.role !== 'merchant') {
          return from.path
        }
      },
    },
    {
      path: '/dashboard/orders',
      name: 'DashboardOrders',
      component: DashboardOrders,
      beforeEnter: (to, from) => {
        if (store.getters.isAuthenticated && store.getters.loggedInUser.role !== 'merchant') {
          return from.path
        }
      },
    },   
    {
      path: '/dashboard/order-single',
      name: 'DashboardSingleOrder',
      component: DashboardSingleOrder,
      beforeEnter: (to, from) => {
        if (store.getters.isAuthenticated && store.getters.loggedInUser.role !== 'merchant') {
          return from.path
        }
      },
    },  
    {
      path: '/dashboard/settings',
      name: 'DashboardSettings',
      component: DashboardSettings,
      beforeEnter: (to, from) => {
        if (store.getters.isAuthenticated && store.getters.loggedInUser.role !== 'merchant') {
          return from.path
        }
      },
    }, 
    {
      path: '/dashboard/billing',
      name: 'DashboardBilling',
      component: DashboardBilling,
      beforeEnter: (to, from) => {
        if (store.getters.isAuthenticated && store.getters.loggedInUser.role !== 'merchant') {
          return from.path
        }
      },
    }, 
  ]
})


export default router
