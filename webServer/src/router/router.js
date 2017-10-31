const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['../views/tijianReportDetail.vue'], resolve)
}];
export default routers;