import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherCardComponent } from './weather/weather-card.component';
import { ForecastComponent } from './forecast/forecast.component';
import { WeatherComponent } from './weather/weather.component';
const routes: Routes = [
  {path: 'weather-component', component: WeatherComponent},
  {path: 'weather-card' , component: WeatherCardComponent},
  {path: 'forecast-component/:cityName' , component: ForecastComponent},
  {path:'', redirectTo:'/weather-component',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
