"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var stuff_service_1 = require("./stuff.service");
var CaseComponent = (function () {
    function CaseComponent(stuffService, router) {
        this.stuffService = stuffService;
        this.router = router;
    }
    CaseComponent.prototype.ngOnInit = function () {
        this.getStuffs();
    };
    CaseComponent.prototype.getStuffs = function () {
        var _this = this;
        this.stuffService.getStuffs().then(function (stuffs) { return _this.stuffs = stuffs; });
    };
    CaseComponent.prototype.onSelect = function (stuff) {
        this.selectedStuff = stuff;
        this.router.navigate(['/stuffdetails', this.selectedStuff.id]);
    };
    return CaseComponent;
}());
CaseComponent = __decorate([
    core_1.Component({
        selector: 'my-case',
        templateUrl: './case.component.html',
        styleUrls: ['./case.component.css'],
        providers: [stuff_service_1.StuffService]
    }),
    __metadata("design:paramtypes", [stuff_service_1.StuffService,
        router_1.Router])
], CaseComponent);
exports.CaseComponent = CaseComponent;
//# sourceMappingURL=case.component.js.map