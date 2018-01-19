"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var flight_component_1 = require("./flight/flight.component");
var status_component_1 = require("./status/status.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'addFlights', component: flight_component_1.FlightComponent },
    { path: 'addStatus', component: status_component_1.StatusComponent },
    { path: '**', redirectTo: '' }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map