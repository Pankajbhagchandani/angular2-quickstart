"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard.component');
var heroes_component_1 = require('./heroes.component');
var hero_detail_component_1 = require('./hero-detail.component');
var login_component_1 = require('./components/login/login.component');
var home_component_1 = require('./components/home/home.component');
var request_component_1 = require('./components/request/request.component');
var browse_all_component_1 = require('./components/home/browse.all.component');
var approval_component_1 = require('./components/approval/approval.component');
var browse_host_component_1 = require('./components/home/browse.host.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'approve',
        component: approval_component_1.ApprovalComponent
    },
    {
        path: 'allRequests',
        component: browse_all_component_1.BrowseAllComponent
    },
    {
        path: 'byHost',
        component: browse_host_component_1.BrowseHostComponent
    },
    {
        path: 'new',
        component: request_component_1.RequestComponent
    },
    {
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    },
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map