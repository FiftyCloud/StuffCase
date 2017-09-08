import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router"
import { Location } from "@angular/common";

import { StuffService } from "./stuff.service";
import { Stuff } from "./stuff";


@Component({
    selector: 'my-stuff-details',
    templateUrl: './stuff-details.component.html',
    styleUrls: ['']
})
export class StuffDetailsComponent implements OnInit{

    constructor(
        private stuffService: StuffService,
        private route: ActivatedRoute,
        private location : Location
    ){}

    ngOnInit() : void {
        this.route.paramMap
		.switchMap((params: ParamMap) => this.stuffService.getStuff(+params.get('id')))
		.subscribe(stuff => this.stuff = stuff);
    }

    goBack(): void {
	  this.location.back();
	}

    @Input() stuff : Stuff;
}