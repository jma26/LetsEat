import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  restaurant_info: any;
  restaurants: any;
  errors: any;
  toggleUpdateboolean: boolean;
  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.getRestaurants();
    this.toggleUpdateboolean = false;
  }
  getRestaurants() {
    let observable = this._httpService.getRestaurants();
    observable.subscribe(data => {
      this.restaurants = data;
      console.log(data);
    })
  }
  delete(id) {
    console.log('Home.components hit ---> ', id);
    let observable = this._httpService.delete({id: id});
    observable.subscribe(data => {
      console.log(data);
      this.restaurants = data;
    })
  }
  //Toggling for update
  toggleUpdate(restaurant) {
    if (this.toggleUpdateboolean === false) {
      this.restaurant_info = restaurant;
      console.log(this.restaurant_info);
      this.toggleUpdateboolean = true;
    } else {
      this.toggleUpdateboolean = false;
    }
  }
  refresh(eventData) {
    this.restaurants = eventData;
    this.toggleUpdateboolean = false;
  }

}
