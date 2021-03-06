import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { LoginComponent }  from './components/login/login.component';
import { MyRequestComponent }  from './components/home/myrequest.component';
import { RequestComponent }  from './components/request/request.component';
import { BrowseAllComponent }  from './components/home/browse.all.component';
import {ApprovalComponent} from './components/approval/approval.component'
import { BrowseHostComponent }  from './components/home/browse.host.component';
import {HomeComponent} from './components/home/home.component'
const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component:LoginComponent
    },
    {
        path: 'home',
        component:HomeComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'myRequest',
        component: MyRequestComponent
    },
    {
        path: 'approve',
        component: ApprovalComponent
    },
    {
        path: 'allRequests',
        component: BrowseAllComponent
    },
    {
        path: 'byHost',
        component: BrowseHostComponent
    },
    {
        path: 'new',
        component: RequestComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },
    {
        path: 'heroes',
        component: HeroesComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);