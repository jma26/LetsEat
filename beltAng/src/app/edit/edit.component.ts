import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any;
  restaurant: any;
  errors: any;
  constructor(private _httpService: HttpService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurant = {
      name: '',
      cuisine: ''
    }
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    this.getOne(this.id);
  }
  getOne(id) {
    let observable = this._httpService.getOne({id: id});
    observable.subscribe(data => {
      this.restaurant = {
        name: data[0].restaurant,
        cuisine: data[0].cuisine
      }
    })
  }
  cancel() {
    this.router.navigate(['/']);
  }
  update() {
    let observable = this._httpService.update({restaurant: this.restaurant, id: this.id});
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

