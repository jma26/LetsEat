import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  restaurant: any;
  errors: any;
  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.restaurant = {
      name: '',
      cuisine: ''
    }
  }
  newRestaurant() {
    let observable = this._httpService.newRestaurant(this.restaurant);
    observable.subscribe(data => {
      console.log(data);
      if (data['errors']) {
        this.errors = data['message'];
      } else {
        console.log('Successful creation');
        this.router.navigate(['/']);
      }
    })
  }
  //Navigate to root route when cancelled
  cancel() {
    this.router.navigate(['/']);
  }

}
