import { Component, Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams, HTTP_PROVIDERS } from '@angular/http';

@Component({
    providers: [HTTP_PROVIDERS]
})
@Injectable()
export class TranslinkService {
  private API_ROOT = '' // 'http://api.translink.ca'
  private API_URL = `${this.API_ROOT}/rttiapi/v1`;
  private API_KEY = '';
  private headers: Headers;

  constructor(private http: Http) { 
    this.headers = new Headers({ 
      'Content-Type': 'application/JSON',
      'Accept': 'application/JSON'
    });
  }

  // https://developer.translink.ca/ServicesRtti/ApiReference#Stops
  public getStop(stopNo: number, filters?) {
    const params = new URLSearchParams();
    
    params.set('apikey', this.API_KEY);
    filters.lat ? params.set('lat', filters.lat) : null;
    filters.lon ? params.set('lon', filters.lon) : null;
    filters.radius ? params.set('radius', filters.radius) : null;
    filters.routeNo ? params.set('routeNo', filters.routeNo) : null;


    return this.http.get(`${this.API_URL}/stops/${stopNo}`, { headers: this.headers, search: params })
               .toPromise()
               .then(response => response.json())
               .catch(err => console.log(err));
  }

  public getStopEstimates(stopNo: number, filters?) {
    const params = new URLSearchParams();

    params.set('apikey', this.API_KEY);
    filters.count ? params.set('count', filters.count) : null;
    filters.timeFrame ? params.set('timeFrame', filters.timeFrame) : null;
    filters.routeNo ? params.set('routeNo', filters.routeNo) : null;

    return this.http.get(`${this.API_URL}/stops/${stopNo}/estimate`, { headers: this.headers, search: params })
           .toPromise()
           .then(response => response.json())
           .catch(err => console.log(err));
  }

  public getBuses(busNo?: number, filters?) {
    const params = new URLSearchParams();

    params.set('apikey', this.API_KEY);
    filters.stopNo ? params.set('stopNo', filters.stopNo) : null;
    filters.routeNo ? params.set('routeNo', filters.routeNo) : null;

    return this.http.get(`${this.API_URL}/buses${busNo ? '/' + busNo : ''}`, { headers: this.headers, search: params})
               .toPromise()
               .then(response => response.json())
               .catch(err => console.log(err));
  }

  public getRoutes(routeNo: string, filters) {

  }



}