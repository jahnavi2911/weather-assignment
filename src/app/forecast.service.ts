import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  apiKey : string = "419f2d544847f1e9862bd45c9c870eb4";
  serviceUrl: string ="https://api.openweathermap.org/data/2.5/forecast?q=";
  constructor(private http:HttpClient) { }

  getForecastDetail(city: string) {
    return this.http.get(this.serviceUrl + city + '&appid=' + this.apiKey);
  }
}
