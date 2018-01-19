import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ListService {

  BASE_URL = "http://localhost:3000/api/add/"
  constructor (private _http: Http) {}
  Arraylist: any[] = [];

  /** Add list in the array List. */
  addList(arrayListDetail: any) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });


    return this._http.post('http://localhost:3000/flight',  JSON.stringify(arrayListDetail) , options)
      .map(function (res) { 
        return res.json() 
      })
      .catch(function(error) {
        return Observable.throw(error);
      }).subscribe();
  }

  /**Get the list list from the array. */
  getList() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });


    return this._http.get('http://localhost:3000/flight/thelist', options)
      .map(function (res) {
         return res.json() 
      })
      .catch(function(error) {
        return Observable.throw(error);
      });

    //return JSON.parse(localStorage.getItem("FlightDetails"));
  }

  findFlights(flightDetails) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });


    return this._http.post('http://localhost:3000/flight/flights',  JSON.stringify(flightDetails), options)
      .map(function (res) {
         return res.json() 
      })
      .catch(function(error) {
        return Observable.throw(error);
      });
  }

}
