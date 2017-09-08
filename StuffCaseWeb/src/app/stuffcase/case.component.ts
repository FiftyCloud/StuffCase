import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { StuffService } from "./stuff.service";
import { Stuff } from './stuff';

@Component({
    selector: 'my-case',
    templateUrl : './case.component.html',
    styleUrls: ['./case.component.css'],
    providers: [StuffService]
})
export class CaseComponent implements OnInit{
  stuffs: Stuff[];
  selectedStuff: Stuff;

 constructor(
	  private stuffService: StuffService,
	  private router: Router
  ) { }

  ngOnInit() : void {
    this.getStuffs();
  }

  getStuffs() : void {
    this.stuffService.getStuffs().then(stuffs => this.stuffs = stuffs);
  }

  onSelect(stuff: Stuff): void {
    this.selectedStuff = stuff;
    this.router.navigate(['/stuffdetails', this.selectedStuff.id]);
  }
}