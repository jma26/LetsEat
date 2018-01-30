import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  id: any;
  restaurant_name: string;
  restaurants: any;

  constructor(private _httpService: HttpService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getOne(this.id);
    })
  }
  getOne(id) {
    let observable = this._httpService.getOne({id: id});
    observable.subscribe(data => {
      console.log(data);
      this.restaurant_name = data[0]['restaurant'];
      this.restaurants = data[0]['review'];
      console.log(data[0]['review']);
    })
  }

}
