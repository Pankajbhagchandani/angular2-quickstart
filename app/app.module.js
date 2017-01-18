"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var ngx_datatable_1 = require('@swimlane/ngx-datatable');
var angular2_select_1 = require('angular2-select');
var app_component_1 = require('./app.component');
var dashboard_component_1 = require('./dashboard.component');
var hero_detail_component_1 = require('./hero-detail.component');
var heroes_component_1 = require('./heroes.component');
var hero_service_1 = require('./hero.service');
var app_routing_1 = require('./app.routing');
var login_component_1 = require('./components/login/login.component');
var home_component_1 = require('./components/home/home.component');
var browse_all_component_1 = require('./components/home/browse.all.component');
var browse_host_component_1 = require('./components/home/browse.host.component');
var request_component_1 = require('./components/request/request.component');
var approval_component_1 = require('./components/approval/approval.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                ngx_datatable_1.NgxDatatableModule,
                angular2_select_1.SelectModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                home_component_1.HomeComponent,
                browse_all_component_1.BrowseAllComponent,
                browse_host_component_1.BrowseHostComponent,
                approval_component_1.ApprovalComponent,
                request_component_1.RequestComponent,
                dashboard_component_1.DashboardComponent,
                hero_detail_component_1.HeroDetailComponent,
                heroes_component_1.HeroesComponent
            ],
            providers: [
                hero_service_1.HeroService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map