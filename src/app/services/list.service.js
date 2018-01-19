"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ListService = /** @class */ (function () {
    function ListService() {
        this.Arraylist = [];
    }
    /** Add list in the array List. */
    ListService.prototype.addList = function (arrayListDetail) {
        if (localStorage.getItem("FlightDetails")) {
            this.Arraylist = JSON.parse(localStorage.getItem("FlightDetails"));
        }
        this.Arraylist.unshift(arrayListDetail);
        localStorage.setItem("FlightDetails", JSON.stringify(this.Arraylist));
    };
    /**Get the list list from the array. */
    ListService.prototype.getList = function () {
        return JSON.parse(localStorage.getItem("FlightDetails"));
    };
    ListService = __decorate([
        core_1.Injectable()
    ], ListService);
    return ListService;
}());
exports.ListService = ListService;
//# sourceMappingURL=list.service.js.map