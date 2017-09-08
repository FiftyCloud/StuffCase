import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
  template: `
  <div class="container-fluid">
    <h1>{{title}}</h1>
    <nav class="row">
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/case" routerLinkActive="active">StuffCase</a>
    </nav>
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent{
	  title = 'Tour of Heroes';
}