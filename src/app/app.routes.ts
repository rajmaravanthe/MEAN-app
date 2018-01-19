import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }  from './home/home.component';
import { FlightComponent }  from './flight/flight.component';
import { StatusComponent }  from './status/status.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'addFlights', component: FlightComponent },
  { path: 'addStatus', component: StatusComponent },
  { path: '**', redirectTo: '' }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);