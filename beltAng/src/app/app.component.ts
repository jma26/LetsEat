import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  restaurants: any;
  errors: any;
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getRestaurants();
  }
  getRestaurants() {
    let observable = this._httpService.getRestaurants();
    observable.subscribe(data => {
      this.restaurants = data;
    })
  }
}
