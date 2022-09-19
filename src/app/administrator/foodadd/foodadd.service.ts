import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodaddService {

  constructor(private httpClient: HttpClient) { }

  url = 'http://localhost:8000/api/foods/store'

  insertData(data: any) {
    return this.httpClient.post(this.url, data);
  }

}
