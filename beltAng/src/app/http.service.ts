import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }
  // Creat new restaurant 
  newRestaurant(restaurant) {
    console.log('Sent from httpService.ts', restaurant);
    return this._http.post('/restaurant', restaurant);
  }
  // Retrieving all restaurants for root page
  getRestaurants() {
    return this._http.get('/restaurant');
  }
  getOne(id) {
    return this._http.get('/restaurant/' + id.id);
  }
  newReview(data) {
    console.log(data.id);
    console.log(data.review.customer);
    console.log(data.review.stars);
    return this._http.put(`/restaurant/edit/${data.id}`, data);
  }
  delete(id) {
    console.log('HttpService is hit with --->', id.id);
    return this._http.delete(`/restaurant/${id.id}`);
  }
  update(data) {
    console.log(data);
    return this._http.patch(`/restaurant/${data.id}`, data)
  }
}
