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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var home_model_1 = require('./home.model');
var BrowseAllComponent = (function () {
    function BrowseAllComponent(route, location) {
        this.route = route;
        this.location = location;
        this.model = new home_model_1.Home();
        this.options_platform = [
            {
                value: 'dfas',
                label: 'DFAS'
            },
            {
                value: 'gateway',
                label: 'Gateway'
            },
            {
                value: 'baas',
                label: 'BaaS'
            }
        ];
        this.rows = [
            { ReqId: '1001', HostName: 'CLA1-APN-M-L-05', BusinessOwner: 'c998366', Platform: 'DFAS', NetworkDesigner: 'd645447', OperationsContact: 'd887636', PortId: 'E1117', PortType: 'Dual', Bandwidth: '10G' },
            { ReqId: '1002', HostName: 'CLA1-APN-M-L-06', BusinessOwner: 'c998367', Platform: 'Gateway', NetworkDesigner: 'd645447', OperationsContact: 'd887636', PortId: 'E1118', PortType: 'Dual', Bandwidth: '10G' },
            { ReqId: '1003', HostName: 'CLA1-APN-M-L-06', BusinessOwner: 'c998389', Platform: 'BaaS', NetworkDesigner: 'd645447', OperationsContact: 'd887636', PortId: 'E1118', PortType: 'Dual', Bandwidth: '10G' },
            { ReqId: '1004', HostName: 'CLA1-APN-M-L-05', BusinessOwner: 'c998312', Platform: 'Gateway', NetworkDesigner: 'd645447', OperationsContact: 'd887636', PortId: 'E1117', PortType: 'Dual', Bandwidth: '10G' },
        ];
        this.columns = [
            { prop: 'ReqId' },
            { prop: 'HostName' },
            { prop: 'BusinessOwner' },
            { prop: 'Platform' },
            { prop: 'NetworkDesigner' },
            { prop: 'OperationsContact' },
            { prop: 'PortId' },
            { prop: 'PortType' },
            { prop: 'Bandwidth' },
        ];
        this.port_detail_rows = [
            { PortId: 'E1117', UUID: 'a18083b5-01b2-4e5d-b352-560e8e189db6', Layer: '1', Bandwidth: '10G', Type: 'Dual', VLANMode: 'Trunk', Platform: 'DFAS' },
            { PortId: 'E1117', UUID: 'a18083b5-01b2-4e5d-b352-560e8e189db6', Layer: '2', Bandwidth: '10G', Type: 'Dual', VLANMode: 'Trunk', Platform: 'DFAS' },
            { PortId: 'E1117', UUID: 'a18083b5-01b2-4e5d-b352-560e8e189db6', Layer: '3', Bandwidth: '10G', Type: 'Dual', VLANMode: 'Trunk', Platform: 'DFAS' },
            { PortId: 'E1118', UUID: 'a18083b5-01b2-4e5d-b352-560e8e189db6', Layer: '1', Bandwidth: '10G', Type: 'Dual', VLANMode: 'Trunk', Platform: 'DFAS' },
            { PortId: 'E1118', UUID: 'a18083b5-01b2-4e5d-b352-560e8e189db6', Layer: '2', Bandwidth: '10G', Type: 'Dual', VLANMode: 'Trunk', Platform: 'DFAS' },
            { PortId: 'E1118', UUID: 'a18083b5-01b2-4e5d-b352-560e8e189db6', Layer: '3', Bandwidth: '10G', Type: 'Dual', VLANMode: 'Trunk', Platform: 'DFAS' },
        ];
        this.port_detail_columns = [
            { prop: 'PortId' },
            { prop: 'UUID' },
            { prop: 'Layer' },
            { prop: 'Bandwidth' },
            { prop: 'Type' },
            { prop: 'VLANMode' },
            { prop: 'Platform' },
        ];
        this.temp = this.rows;
        this.selected = [];
        this.displayRequestDetails = false;
    }
    BrowseAllComponent.prototype.ngOnInit = function () {
        this.route.params.forEach(function (params) {
            var username = +params['username'];
            console.log(username);
        });
    };
    BrowseAllComponent.prototype.goBack = function () {
        this.location.back();
    };
    BrowseAllComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        this.displayRequestDetails = true;
    };
    BrowseAllComponent.prototype.onDeselected = function (item) {
        this.rows = this.temp;
    };
    BrowseAllComponent.prototype.updateFilter = function (item) {
        var val = item.value;
        // filter our data
        var temp = this.temp.filter(function (d) {
            return d.Platform.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rows = temp;
    };
    BrowseAllComponent.prototype.filterByHostName = function (event) {
        var val = event.target.value;
        // filter our data
        var temp = this.temp.filter(function (d) {
            return d.HostName.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rows = temp;
    };
    BrowseAllComponent.prototype.filterByPort = function (event) {
        console.log(event.target.value);
        var val = event.target.value;
        // filter our data
        var temp = this.temp.filter(function (d) {
            return d.PortId.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rows = temp;
    };
    BrowseAllComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'browseAll',
            templateUrl: 'browse.all.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, common_1.Location])
    ], BrowseAllComponent);
    return BrowseAllComponent;
}());
exports.BrowseAllComponent = BrowseAllComponent;
//# sourceMappingURL=browse.all.component.js.map