import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Menu from "../views/Menu.vue";
import MenuDetail from "../views/MenuDetail.vue";
import Cart from "../views/Cart.vue";
import OrderSuccess from "../views/OrderSuccess.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu,
    meta: {
      title: "Menu",
    },
  },
  {
    path: "/menu/:id",
    name: "MenuDetail",
    component: MenuDetail,
    meta: {
      title: "Menu detail",
    },
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
    meta: {
      title: "Cart",
    },
  },
  {
    path: "/order-success",
    name: "Order Sucess",
    component: OrderSuccess,
    meta: {
      title: "Nice, your order succeed",
    },
  },
  // {
  //   path: "/menu",
  //   name: "Menu",
  //   component: () => import("../views/Menu.vue"),
  // },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
