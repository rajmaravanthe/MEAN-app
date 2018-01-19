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
var StatusComponent = /** @class */ (function () {
    function StatusComponent(_listService) {
        this.rows = [];
        this.currentDate = new Date();
        this.rows = _listService.getList();
        if (this.rows) {
            for (var i = 0; i < this.rows.length; i++) {
                if (new Date(this.rows[i].dateTimeDeparture) < this.currentDate) {
                    var timeDiff = Math.abs(this.currentDate.getTime() - new Date(this.rows[i].dateTimeDeparture).getTime()) / 36e5;
                    this.rows[i]['status'] = "Flight Departed " + Math.round(timeDiff) + " hours before";
                }
                else {
                    this.rows[i]['status'] = 'Available';
                }
            }
        }
    }
    StatusComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/status/status.template.html'
        }),
        __metadata("design:paramtypes", [list_service_1.ListService])
    ], StatusComponent);
    return StatusComponent;
}());
exports.StatusComponent = StatusComponent;
//# sourceMappingURL=status.component.js.map