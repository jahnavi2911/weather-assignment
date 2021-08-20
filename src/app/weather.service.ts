import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class WeatherService {
 apiKey: string = "419f2d544847f1e9862bd45c9c870eb4";
 serviceUrl: string = "https://api.openweathermap.org/data/2.5/weather?q=";
  constructor(private http: HttpClient) { }
  getWeatherDetail(city: any){
    return this.http.get(this.serviceUrl +  city + '&APPID=' + this.apiKey);
  }
}
