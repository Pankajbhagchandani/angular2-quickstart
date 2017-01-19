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
var myrequest_model_1 = require('./myrequest.model');
var BrowseAllComponent = (function () {
    function BrowseAllComponent(route, location) {
        this.route = route;
        this.location = location;
        this.model = new myrequest_model_1.MyRequest();
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
            { ReqId: '1001', Date: '11/12/2016', Time: '00:20:13:22', Requester: 'c998312', Platform: 'DFAS', ReqTitle: 'Port Allocation for Replication', Status: 'Pending Approval' },
            { ReqId: '1002', Date: '12/12/2016', Time: '00:20:13:22', Requester: 'c998312', Platform: 'Gateway', ReqTitle: 'Port Allocation for Replication', Status: 'Pending Approval' },
            { ReqId: '1003', Date: '13/12/2016', Time: '00:20:13:22', Requester: 'c998312', Platform: 'BaaS', ReqTitle: '10G allocation', Status: 'Pending Approval' },
            { ReqId: '1004', Date: '14/12/2016', Time: '00:20:13:22', Requester: 'c998312', Platform: 'Gateway', ReqTitle: 'Netapp connection', Status: 'Pending Approval' },
            { ReqId: '1005', Date: '14/12/2016', Time: '00:20:13:22', Requester: 'c998312', Platform: 'Gateway', ReqTitle: 'Netapp connection', Status: 'Pending Approval' },
            { ReqId: '1006', Date: '14/12/2016', Time: '00:20:13:22', Requester: 'c998312', Platform: 'Gateway', ReqTitle: 'Netapp connection', Status: 'Pending Approval' },
            { ReqId: '1007', Date: '14/12/2016', Time: '00:20:13:22', Requester: 'c998312', Platform: 'Gateway', ReqTitle: 'Netapp connection', Status: 'Pending Approval' },
        ];
        this.columns = [
            { prop: 'ReqId' },
            { prop: 'Date' },
            { prop: 'Time' },
            { prop: 'Requester' },
            { prop: 'Platform' },
            { prop: 'ReqTitle' },
            { prop: 'Status' },
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