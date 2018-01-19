"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var angular2_jwt_1 = require("angular2-jwt");
var http_1 = require("@angular/http");
var app_routes_1 = require("./app.routes");
var forms_1 = require("@angular/forms");
var ng_pick_datetime_1 = require("ng-pick-datetime");
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var flight_component_1 = require("./flight/flight.component");
var status_component_1 = require("./status/status.component");
var list_service_1 = require("./services/list.service");
var search_filter_1 = require("./filters/search.filter");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                flight_component_1.FlightComponent,
                status_component_1.StatusComponent,
                search_filter_1.SearchFilter,
            ],
            providers: [
                app_routes_1.appRoutingProviders,
                angular2_jwt_1.AUTH_PROVIDERS,
                list_service_1.ListService
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routes_1.routing,
                http_1.HttpModule,
                forms_1.FormsModule,
                ng_pick_datetime_1.DateTimePickerModule,
            ],
            bootstrap: [app_component_1.AppComponent],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map