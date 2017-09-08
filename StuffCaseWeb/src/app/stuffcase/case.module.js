"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var case_component_1 = require("./case.component");
var stuff_service_1 = require("./stuff.service");
var CaseModule = (function () {
    function CaseModule() {
    }
    return CaseModule;
}());
CaseModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            router_1.RouterModule
        ],
        declarations: [case_component_1.CaseComponent],
        providers: [stuff_service_1.StuffService],
        bootstrap: [case_component_1.CaseComponent]
    })
], CaseModule);
exports.CaseModule = CaseModule;
//# sourceMappingURL=case.module.js.map