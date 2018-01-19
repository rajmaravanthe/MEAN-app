import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { AUTH_PROVIDERS } from 'angular2-jwt';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routes';
import { FormsModule } from '@angular/forms';
import { DateTimePickerModule} from 'ngx-datetime-picker';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FlightComponent } from './flight/flight.component';
import { StatusComponent } from './status/status.component';

import { ListService } from './services/list.service';
import { SearchFilter } from './filters/search.filter';
 
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        FlightComponent,
        StatusComponent,
        SearchFilter,
    ],
    providers: [
        appRoutingProviders,
        ListService
    ],
    imports: [
        BrowserModule,
        routing,
        HttpModule,
        FormsModule,
        DateTimePickerModule
    ],
    bootstrap: [AppComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
