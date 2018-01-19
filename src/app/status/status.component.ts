import { Component } from '@angular/core';
import { ListService } from '../services/list.service';

@Component({
    selector: 'my-app',
    templateUrl: './status.template.html'
})

export class StatusComponent {
    private rows = [];
    private currentDate = new Date();
    constructor(_listService: ListService) {
        let that = this;
        _listService.getList().subscribe(function (res) {
            that.rows = res;
            that.updateList();

        });

    }
    updateList() {
        setTimeout(function () {
            if (this.rows) {
                for (let i = 0; i < this.rows.length; i++) {
                    if (new Date(this.rows[i].dateTimeDeparture) < this.currentDate) {
                        let timeDiff = Math.abs(this.currentDate.getTime() - new Date(this.rows[i].dateTimeDeparture).getTime()) / 36e5;
                        this.rows[i]['status'] = `Flight Departed ${Math.round(timeDiff)} hours before`;
                    } else {
                        this.rows[i]['status'] = 'Available';
                    }
                }
            }
        }, 0);
    }
}