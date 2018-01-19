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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var list_service_1 = require("../services/list.service");
var FlightComponent = /** @class */ (function () {
    function FlightComponent(_listService) {
        this._listService = _listService;
        this.dateValidation = true;
        this.showDateValidation = false;
    }
    FlightComponent.prototype.ngOnInit = function () {
        this.en = {
            firstDayOfWeek: 0,
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        };
        this.flightDetails = {
            flightFrom: '',
            flightTo: '',
            airlines: '',
            dateTimeDeparture: new Date(2017, 8, 10, 13, 30, 30),
            dateTimeArrival: new Date(2017, 8, 10, 13, 30, 30)
        };
    };
    FlightComponent.prototype.setMoment = function (status, moment) {
        if (status === 'departure') {
            this.flightDetails.dateTimeDeparture = moment;
        }
        else {
            this.flightDetails.dateTimeArrival = moment;
        }
        if (new Date(this.flightDetails.dateTimeArrival) > new Date(this.flightDetails.dateTimeDeparture)) {
            this.dateValidation = false;
        }
        else {
            this.showDateValidation = true;
            this.dateValidation = true;
        }
    };
    FlightComponent.prototype.submit = function (form) {
        if (!form.valid) {
            return;
        }
        this._listService.addList(form.value);
        form.reset();
        this.reset();
    };
    FlightComponent.prototype.reset = function () {
        this.flightDetails.dateTimeDeparture = new Date();
        this.flightDetails.dateTimeArrival = new Date();
        this.dateValidation = true;
        this.showDateValidation = false;
    };
    FlightComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/flight/flight.template.html'
        }),
        __metadata("design:paramtypes", [list_service_1.ListService])
    ], FlightComponent);
    return FlightComponent;
}());
exports.FlightComponent = FlightComponent;
//# sourceMappingURL=flight.component.js.map