import { Component, OnInit } from '@angular/core';
import { cities } from '../city';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'wa-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  cities =cities;
  public searchWeatherForm!: FormGroup;
  public weatherDetails: any;
  public selectedCity: string | undefined;
  public newWeatherDetails: any;
  public currentTemp: any;
  public tempInCel: any;
  
  constructor(private formBuilder:FormBuilder,
    private apiService: WeatherService) { }

  ngOnInit(): void {
    this.searchWeatherForm = this.formBuilder.group({
      city: ['']
    });
   
  }
  sendToApi(formValue: any) {
    this.apiService.getWeatherDetail(formValue.city).subscribe(data=> {
      this.weatherDetails = data;
      this.selectedCity = formValue.city;
      //console.log(this.weatherDetails);
      this.newWeatherDetails = this.weatherDetails.weather;
      console.log(this.newWeatherDetails);
      this.currentTemp =  this.weatherDetails.main;
      // console.log(this.currentTemp);
      this.tempInCel = this.currentTemp.temp - 272.15;


    });
 }
 

}
