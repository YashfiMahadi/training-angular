import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FoodsAdd } from './foodsAddModule';

@Injectable({
  providedIn: 'root'
})
export class FoodaddService {

  constructor(private httpClient: HttpClient) { }

  url = 'http://localhost:8000/api/foods/store'

  insertData(data : FoodsAdd) {
    return this.httpClient.post(this.url, data);
  }

}
