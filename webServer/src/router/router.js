const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['../views/master.vue'], resolve)
}];
export default routers;