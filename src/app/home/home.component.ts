import { Component } from '@angular/core';
import { ListService } from '../services/list.service';
import { flightDetails } from '../interfaces/flight.interface';

@Component({
    selector: 'my-app',
    templateUrl: './home.template.html'
})

export class HomeComponent {
    private book = false;
    private searchEnable = false;
    private flights;
    flightDetails: flightDetails;
    date: Date = new Date();
    en: any;

    settings = {
        bigBanner: true,
        timePicker: false,
        format: 'dd-MM-yyyy',
        defaultOpen: true
    }

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
    bookTicket() {
        this.book = true;
    }
    submit(form) {
        if (!form.valid) {
            return;
        }
        this.searchEnable = true;
        var that = this;
        this._listService.findFlights(this.flightDetails).subscribe(function (res) {
            console.log(res);
            that.flights = res;
        })
        
        form.reset();
        this.reset();
    }

    reset() {
        this.flightDetails.dateTimeDeparture = new Date();
    }

}