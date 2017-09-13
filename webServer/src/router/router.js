const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['../views/computerDetail.vue'], resolve)
}];
export default routers;