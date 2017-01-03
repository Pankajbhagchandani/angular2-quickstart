import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }   from '@angular/common';
import {Home} from './home.model';
@Component({
    moduleId: module.id,
    selector: 'browseAll',
    templateUrl: 'browse.all.component.html'
})
export class BrowseAllComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private location: Location
    ) {}

    model = new Home();

    options_platform = [
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

    rows = [
        { ReqId: '1001', HostName: 'CLA1-APN-M-L-05', BusinessOwner: 'c998366',Platform:'DFAS',NetworkDesigner:'d645447',OperationsContact:'d887636',PortId:'E1117',PortType:'Dual',Bandwidth:'10G'},
        { ReqId: '1002', HostName: 'CLA1-APN-M-L-06', BusinessOwner: 'c998367',Platform:'Gateway',NetworkDesigner:'d645447',OperationsContact:'d887636',PortId:'E1118',PortType:'Dual',Bandwidth:'10G'},
        { ReqId: '1003', HostName: 'CLA1-APN-M-L-06', BusinessOwner: 'c998389',Platform:'BaaS',NetworkDesigner:'d645447',OperationsContact:'d887636',PortId:'E1118',PortType:'Dual',Bandwidth:'10G'},
        { ReqId: '1004', HostName: 'CLA1-APN-M-L-05', BusinessOwner: 'c998312',Platform:'Gateway',NetworkDesigner:'d645447',OperationsContact:'d887636',PortId:'E1117',PortType:'Dual',Bandwidth:'10G'},
    ];
    columns = [
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

    port_detail_rows = [
        { PortId: 'E1117', UUID: 'a18083b5-01b2-4e5d-b352-560e8e189db6', Layer: '1',Bandwidth:'10G',Type:'Dual',VLANMode:'Trunk',Platform:'DFAS'},
        { PortId: 'E1117', UUID: 'a18083b5-01b2-4e5d-b352-560e8e189db6', Layer: '2',Bandwidth:'10G',Type:'Dual',VLANMode:'Trunk',Platform:'DFAS'},
        { PortId: 'E1117', UUID: 'a18083b5-01b2-4e5d-b352-560e8e189db6', Layer: '3',Bandwidth:'10G',Type:'Dual',VLANMode:'Trunk',Platform:'DFAS'},
        { PortId: 'E1118', UUID: 'a18083b5-01b2-4e5d-b352-560e8e189db6', Layer: '1',Bandwidth:'10G',Type:'Dual',VLANMode:'Trunk',Platform:'DFAS'},
        { PortId: 'E1118', UUID: 'a18083b5-01b2-4e5d-b352-560e8e189db6', Layer: '2',Bandwidth:'10G',Type:'Dual',VLANMode:'Trunk',Platform:'DFAS'},
        { PortId: 'E1118', UUID: 'a18083b5-01b2-4e5d-b352-560e8e189db6', Layer: '3',Bandwidth:'10G',Type:'Dual',VLANMode:'Trunk',Platform:'DFAS'},
    ];
    port_detail_columns = [
        { prop: 'PortId' },
        { prop: 'UUID' },
        { prop: 'Layer' },
        { prop: 'Bandwidth' },
        { prop: 'Type' },
        { prop: 'VLANMode' },
        { prop: 'Platform' },

    ];

    temp = this.rows;

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let username = +params['username'];
            console.log(username);

        });
    }

    goBack(): void {
        this.location.back();
    }
    selected = [];
    displayRequestDetails=false;
    onSelect({ selected }) {
        this.displayRequestDetails = true;
    }
    onDeselected(item):void {
        this.rows = this.temp;
    }
    updateFilter(item) {
        let val = item.value;

        // filter our data
        let temp = this.temp.filter(function(d) {
            return d.Platform.toLowerCase().indexOf(val) !== -1 || !val;
        });

        // update the rows
        this.rows = temp;
    }
    filterByHostName(event) {
        let val = event.target.value;

        // filter our data
        let temp = this.temp.filter(function(d) {
            return d.HostName.toLowerCase().indexOf(val) !== -1 || !val;
        });

        // update the rows
        this.rows = temp;
    }

    filterByPort(event) {
        console.log(event.target.value);
        let val = event.target.value;

        // filter our data
        let temp = this.temp.filter(function(d) {
            return d.PortId.toLowerCase().indexOf(val) !== -1 || !val;
        });

        // update the rows
        this.rows = temp;
    }
}