import { Component, Input } from "@angular/core";

@Component({
    selector:'weather-card',
    templateUrl:'./weather-card.component.html'
})
export class WeatherCardComponent {
    @Input() selectedcity: any;
  @Input() weatherDetails: any;
  @Input() tempDetails: any;
  @Input() cel:any;

  constructor(){}
}