import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {
  id: any;
  review: any;
  errors: any;
  constructor(private _httpService: HttpService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.review = {
      customer: '',
      stars: 0,
      review: ''
    }
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
  }
  cancel() {
    this.router.navigate(['/']);
  }
  newReview() {
    let observable = this._httpService.newReview({review: this.review, id: this.id});
    observable.subscribe(data => {
      if (data['errors']) {
        this.errors = data['message'];
      } else {
        console.log('Successful update');
        this.router.navigate(['/reviews', this.id]);
      }
    })
  }

}
