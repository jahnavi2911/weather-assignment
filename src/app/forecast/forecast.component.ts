import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ForecastService } from '../forecast.service';
@Component({
  selector: 'wa-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  public forecastDetails: any;
  public city: any;
  public list: any;
  
  public weather: Array<any> = new Array();
  public iconVal: Array<any> = new Array();
  public icon : any;
  constructor(private route: ActivatedRoute,
    private service: ForecastService) { }

  ngOnInit(): void {
    const cityFromUrl = this.route.snapshot.paramMap.get('cityName');
    this.city = cityFromUrl;
    // console.log(this.city);
    // console.log(cityFromUrl);
    this.service.getForecastDetail(this.city).subscribe(
      data => {
        this.forecastDetails = data;
        // console.log(this.forecastDetails);
        this.list = this.forecastDetails.list;
       
        console.log(this.list);
        
        // console.log(this.list[0].weather[0].icon);

        for (let index = 0; index < this.list.length; index++) {
          this.weather[index] = this.list[index].weather;
          console.log(this.weather[index]);
          
        }
        this.icon = this.weather[0].icon;
        




      });



  }



}



