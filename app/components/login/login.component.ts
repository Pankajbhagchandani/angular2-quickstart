import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Login} from './login.model';
@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: [ 'login.component.css' ]
})
export class LoginComponent implements OnInit {

    constructor(private router: Router) {
    }

    model = new Login('pankaj','pankaj');
    submitted = false;
    ngOnInit(): void {
    }

    onSubmit(): void {
        let link = ['/home'];
        this.router.navigate(link);
    }
}