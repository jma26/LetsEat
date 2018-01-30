import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() myRestaurants: restaurant_info;
  id: any;
  restaurant: any;
  errors: any;
  constructor(private _httpService: HttpService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurant = {
      name: this.myRestaurants['restaurant'],
      cuisine: this.myRestaurants['cuisine'],
      id: this.myRestaurants['_id']
    }
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    // this.getOne(this.id);
  }
  // getOne(id) {
  //   let observable = this._httpService.getOne({id: id});
  //   observable.subscribe(data => {
  //     this.restaurant = {
  //       name: data[0].restaurant,
  //       cuisine: data[0].cuisine
  //     }
  //   })
  // }
  cancel() {
    this.router.navigate(['/']);
  }
  update() {
    let observable = this._httpService.update(this.restaurant);
    observable.subscribe(data => {
      if (data['errors']) {
        this.errors = data['message'];
      } else {
        console.log('Successful update');
        this.router.navigate(['/']);
      }
    })
  }

}

