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
  private options: RequestOptions;
  
  constructor(private http: Http) { 
    const headers = new Headers({ 
      'Content-Type': 'application/JSON',
      'Accept': 'application/JSON'
    });

    this.options = new RequestOptions({ headers: headers });
  }

  // https://developer.translink.ca/ServicesRtti/ApiReference#Stops
  public getStop(stopNo: number, filters) {
    const params = new URLSearchParams();
    
    params.set('apikey', this.API_KEY);
    filters.lat ? params.set('lat', filters.lat) : null;
    filters.lon ? params.set('lon', filters.lon) : null;
    filters.radius ? params.set('radius', filters.radius) : null;
    filters.routeNo ? params.set('routeNo', filters.routeNo) : null;


    return this.http.get(`${this.API_URL}/stops/${stopNo}?apiKey=${this.API_KEY}`, this.options)
               .toPromise()
               .then(response => response.json())
               .catch(err => console.log(err));
  }

  public getStopEstimates(stopNo: number, filters) {

  }

  public getBuses(busNo: number, filters) {

  }

  public getRoutes(routeNo: string, filters) {

  }
}