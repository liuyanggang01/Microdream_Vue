import Vue from 'vue'
import Router from 'vue-router'
import index from "@/view/index/index";
import login from "@/view/login/login";
import error from "@/view/error/error";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/login',
            name: '登录',
            component: login
        },
        {
            path: '/',
            name: '首页',
            component: index,
            children: [
                {path: '/index', component: error, name: '主页'}
            ]
        },
        {
            path: '/',
            name: '找不到',
            component: error,
            children: [
                {path: '*', component: error, name: '404'}
            ]
        }
    ]
})
