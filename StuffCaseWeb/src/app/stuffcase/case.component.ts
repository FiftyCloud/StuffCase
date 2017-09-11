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
    this.router.navigate(['/stuffform', this.selectedStuff.id]);
  }

  
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.selectedStuff = new Stuff;
    this.selectedStuff.name= name;
    this.stuffService.create(this.selectedStuff)
      .then(stuff => {
        this.stuffs.push(stuff);
        this.router.navigate(['/stuffform', stuff.id]);
      });
  }
}