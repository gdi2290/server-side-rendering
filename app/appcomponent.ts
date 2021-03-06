import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {AboutUs} from './about-us';
import {Mission} from './mission.ts';
import {LifeCycle} from './lifecycle/lifecycle.ts';
import {GreetUser} from './ServiceDI/greet-user.ts';
import {HttpClient} from './httpClient/client.ts';
import {ObservableExample} from './httpClient/observableExample.ts';



@Component({
    selector: 'my-app',
    template: `
     <h1>Bootsrapping Angular</h1>
	   <nav>
	    <a [routerLink]="['Mission']">Mission & Vision</a>
	    <a [routerLink]="['About']">About Us</a>
	    <a [routerLink]="['LifeCycle']">Life Cycle Hooks</a>
	    <a [routerLink]="['GreetUser']">Service and DI</a>
	    <a [routerLink]="['ObservableExample']">Observable Example</a>
	    <a [routerLink]="['HttpClient']">Http Client</a>
	   </nav>
	   <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
 	{ path: '/mission', name: 'Mission', component: Mission },
	{ path: '/about-us', name: 'About', component: AboutUs, useAsDefault: true },
	{ path: '/lifecycle', name: 'LifeCycle', component: LifeCycle },
	{ path: '/dependency-injection', name: 'GreetUser', component: GreetUser },
	{ path: '/httpClient', name: 'HttpClient', component: HttpClient },
	{ path: '/observable', name: 'ObservableExample', component: ObservableExample }
])
export class AppComponent { }