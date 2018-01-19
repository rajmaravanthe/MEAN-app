import { Component } from '@angular/core';

import { flightDetails } from '../interfaces/flight.interface';
import { ListService } from '../services/list.service';

@Component({
    selector: 'my-app',
    templateUrl: './flight.template.html'
})

export class FlightComponent {
    flightDetails: flightDetails;
    dateValidation = true;
    showDateValidation = false;
    public input1Moment: any;
    en: any;
    constructor(private _listService: ListService) {

    }

    ngOnInit() {
        this.en = {
            firstDayOfWeek: 0,
            dayNames: ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            monthNames: [ "January","February","March","April","May","June","July","August","September","October","November","December" ],
            monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
        };
        this.flightDetails = {
            flightFrom: '',
            flightTo: '',
            airlines: '',
            dateTimeDeparture: new Date(2017, 8, 10, 13, 30, 30),
            dateTimeArrival: new Date(2017, 8, 10, 13, 30, 30)
        };
    }

    public setMoment(status, moment: any): any {
        if (status === 'departure') {
            this.flightDetails.dateTimeDeparture = moment;
        } else {
            this.flightDetails.dateTimeArrival = moment;
        }

        if (new Date(this.flightDetails.dateTimeArrival) > new Date(this.flightDetails.dateTimeDeparture)) {
            this.dateValidation = false;
        } else {
            this.showDateValidation = true;
            this.dateValidation = true;
        }
    }

    submit(form) {
        if (!form.valid) {
            return;
        }
        this._listService.addList(this.flightDetails);
        form.reset();
        this.reset();
    }

    reset() {
        this.flightDetails.dateTimeDeparture = new Date();
        this.flightDetails.dateTimeArrival = new Date();
        this.dateValidation = true;
        this.showDateValidation = false;
    }
}