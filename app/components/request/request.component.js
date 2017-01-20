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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var request_model_1 = require("./request.model");
var router_2 = require("@angular/router");
var RequestComponent = (function () {
    function RequestComponent(route, location, router) {
        this.route = route;
        this.location = location;
        this.router = router;
        this.showPreviewPanel = false;
        this.model = new request_model_1.Request();
        this.locations = ['St.Leonards', 'Clayton'];
        this.speeds = ['1G', '10G', '40G'];
        this.portTypes = ['Single', 'Dual-HA', 'MC-LAG'];
        this.ports = [2, 4, 6, 8, 10, 12, 14, 16];
        this.accessType = ['Access', 'Trunk'];
        this.platforms = ['TID', 'RDN', 'AWS', 'IBM S/L', 'Azure', 'CSX'];
    }
    RequestComponent.prototype.ngOnInit = function () {
    };
    RequestComponent.prototype.continue = function () {
        this.showPreviewPanel = true;
    };
    ;
    RequestComponent.prototype.onSubmit = function () {
        var link = ['/home'];
        this.router.navigate(link);
    };
    RequestComponent.prototype.goBack = function () {
        this.location.back();
    };
    RequestComponent.prototype.previous = function () {
        this.showPreviewPanel = false;
    };
    return RequestComponent;
}());
RequestComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'newRequest',
        templateUrl: 'request.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        common_1.Location,
        router_2.Router])
], RequestComponent);
exports.RequestComponent = RequestComponent;
//# sourceMappingURL=request.component.js.map