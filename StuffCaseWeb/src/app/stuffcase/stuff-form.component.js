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
var common_1 = require("@angular/common");
var stuff_service_1 = require("./stuff.service");
var StuffFormComponent = (function () {
    function StuffFormComponent(stuffService, route, location) {
        this.stuffService = stuffService;
        this.route = route;
        this.location = location;
    }
    StuffFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.stuffService.getStuff(+params.get('id')); })
            .subscribe(function (data) { return _this.stuff = data; });
    };
    StuffFormComponent.prototype.goBack = function () {
        this.location.back();
    };
    StuffFormComponent.prototype.save = function () {
        var _this = this;
        this.stuffService.updateStuff(this.stuff)
            .then(function () { return _this.goBack(); });
    };
    return StuffFormComponent;
}());
StuffFormComponent = __decorate([
    core_1.Component({
        selector: 'my-stuff-form',
        templateUrl: './stuff-form.component.html',
        styleUrls: ['']
    }),
    __metadata("design:paramtypes", [stuff_service_1.StuffService,
        router_1.ActivatedRoute,
        common_1.Location])
], StuffFormComponent);
exports.StuffFormComponent = StuffFormComponent;
//# sourceMappingURL=stuff-form.component.js.map