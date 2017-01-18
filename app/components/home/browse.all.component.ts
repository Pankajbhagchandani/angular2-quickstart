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
        { ReqId: '1001', Date: '11/12/2016', Time: '00:20:13:22', Requester: 'c998312',Platform:'DFAS',ReqTitle:'Port Allocation for Replication',Status:'Pending Approval'},
        { ReqId: '1002', Date: '12/12/2016', Time: '00:20:13:22', Requester: 'c998312',Platform:'Gateway',ReqTitle:'Port Allocation for Replication',Status:'Pending Approval'},
        { ReqId: '1003', Date: '13/12/2016', Time: '00:20:13:22', Requester: 'c998312',Platform:'BaaS',ReqTitle:'10G allocation',Status:'Pending Approval'},
        { ReqId: '1004', Date: '14/12/2016', Time: '00:20:13:22', Requester: 'c998312',Platform:'Gateway',ReqTitle:'Netapp connection',Status:'Pending Approval'},
        { ReqId: '1005', Date: '14/12/2016', Time: '00:20:13:22', Requester: 'c998312',Platform:'Gateway',ReqTitle:'Netapp connection',Status:'Pending Approval'},
        { ReqId: '1006', Date: '14/12/2016', Time: '00:20:13:22', Requester: 'c998312',Platform:'Gateway',ReqTitle:'Netapp connection',Status:'Pending Approval'},
        { ReqId: '1007', Date: '14/12/2016', Time: '00:20:13:22', Requester: 'c998312',Platform:'Gateway',ReqTitle:'Netapp connection',Status:'Pending Approval'},
    ];
    columns = [
        { prop: 'ReqId' },
        { prop: 'Date' },
        { prop: 'Time'},
        { prop: 'Requester' },
        { prop: 'Platform' },
        { prop: 'ReqTitle' },
        { prop: 'Status' },

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
}