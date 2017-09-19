const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['../views/tijianReport.vue'], resolve)
}];
export default routers;