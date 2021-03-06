import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {SelectModule} from 'angular2-select';
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { HeroService }          from './hero.service';
import { routing } from './app.routing';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {MyRequestComponent} from './components/home/myrequest.component';
import { BrowseAllComponent }  from './components/home/browse.all.component';
import { BrowseHostComponent }  from './components/home/browse.host.component';
import {RequestComponent} from './components/request/request.component';
import {ApprovalComponent} from './components/approval/approval.component';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        NgxDatatableModule,
        SelectModule,
        routing
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        MyRequestComponent,
        BrowseAllComponent,
        BrowseHostComponent,
        ApprovalComponent,
        RequestComponent,
        HomeComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent

    ],
    providers: [
        HeroService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
