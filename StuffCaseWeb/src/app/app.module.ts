import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; 
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroSearchComponent } from './hero-search.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from './hero.service';
import { AppRoutingModule } from './app-routing.module';
import { CaseComponent } from "./stuffcase/case.component";
import { StuffService } from "./stuffcase/stuff.service";
import { StuffDetailsComponent } from "./stuffcase/stuff-details.component";



@NgModule({
  imports: [ 
		BrowserModule,
		FormsModule, 
		HttpModule,
		AppRoutingModule
	],
  declarations: [ 
		AppComponent, 
		HeroDetailComponent, 
		HeroesComponent,
		DashboardComponent,
    HeroSearchComponent,
		CaseComponent,
		StuffDetailsComponent
	],
  providers: [ HeroService, StuffService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
