import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  restaurants: any;
  errors: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getRestaurants();
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

}
