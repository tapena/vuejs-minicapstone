import Vue from 'vue'
import Router from 'vue-router'

import ProductIndex from './views/ProductsIndex.vue'
import ProductNew from './views/ProductsNew.vue'
import ProductsShow from './views/ProductsShow.vue'

import Signup from "./views/SignUp.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'root', component: ProductIndex },
    { path: '/products', name: 'products-index', component: ProductIndex },
    { path: '/products', name: 'products-new', component: ProductNew },
    { path: '/products/:id', name: 'products-show', component: ProductsShow},
    { path: "/signup", name: "signup", component: Signup },
    { path: "/login", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout }
  ]
});
