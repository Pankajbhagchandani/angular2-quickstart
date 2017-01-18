import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }   from '@angular/common';
import {Approval} from './approval.model';
import { Router } from '@angular/router';
@Component({
    moduleId: module.id,
    selector: 'approval',
    templateUrl: 'approval.component.html'
})
export class ApprovalComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private router:Router
    ) {}

    model = new Approval();

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
        { ReqId: '1001', HostName: 'CLA1-APN-M-L-05', BusinessOwner: 'c998366',Platform:'DFAS',Owner:'d645447',Location:'St.Leonards',Status:'In Progress'},
        { ReqId: '1002', HostName: 'CLA1-APN-M-L-06', BusinessOwner: 'c998367',Platform:'Gateway',Owner:'d645447',Location:'St.Leonards',Status:'Approved'},
        { ReqId: '1003', HostName: 'CLA1-APN-M-L-06', BusinessOwner: 'c998389',Platform:'BaaS',Owner:'d645447',Location:'Clayton',Status:'Rejected'},
        { ReqId: '1004', HostName: 'CLA1-APN-M-L-05', BusinessOwner: 'c998312',Platform:'Gateway',Owner:'d645447',Location:'Clayton',Status:'In Progress'},
    ];
    columns = [
        { prop: 'ReqId' },
        { prop: 'HostName' },
        { prop: 'BusinessOwner' },
        { prop: 'Platform' },
        {prop: 'Owner'},
        {prop: 'Location'},
        {prop: 'Status'},
    ];


    temp = this.rows;

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let requestId = +params['requestId'];
            console.log(requestId);

        });
    }

    onSubmit(): void {
        let link = ['/home'];
        this.router.navigate(link);
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
    };
}