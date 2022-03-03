import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CityWeather } from 'src/app/shared/models/weather.model';

@Component({
  selector: 'jv-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentWeatherComponent implements OnInit {

  @Input() cityWeather: CityWeather;
  @Output() toggleBookmark = new EventEmitter();
  
  get cityName(): string {
    return `${this.cityWeather.city.name} ${this.cityWeather.city.country}`;
  }
  ngOnInit(): void {
  }

  OnToggleBookmark() {
    this.toggleBookmark.emit()
  }



}
