import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
  template: `
  <div class="container-fluid">
    <h1>{{title}}</h1>
    <nav class="row">
      <a routerLink="/case" routerLinkActive="active">StuffCase</a>
    </nav>
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent{
	  title = 'Stuff Case';
}