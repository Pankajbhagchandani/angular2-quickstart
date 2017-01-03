import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }   from '@angular/common';
import {Request} from './request.model';
import { Router } from '@angular/router';
@Component({
    moduleId: module.id,
    selector: 'newRequest',
    templateUrl: 'request.component.html'
})
export class RequestComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private router:Router
    ) {}
    showPreviewPanel = false;
    model = new Request();
    locations = ['St.Leonards','Clayton'];
    speeds = ['1G','10G','40G'];
    portTypes= ['Single','Dual-HA','MC-LAG'];
    ports =[2,4,6,8,10,12,14,16];
    accessType = ['Access','Trunk'];
    platforms = ['TID','RDN','AWS','IBM S/L','Azure','CSX'];
    ngOnInit(): void {

    }

    continue():void {
        this.showPreviewPanel = true;
    };

    onSubmit(): void {
        let link = ['/home'];
        this.router.navigate(link);
    }

    goBack(): void {
        this.location.back();
    }

    previous(): void {
        this.showPreviewPanel = false;
    }
}