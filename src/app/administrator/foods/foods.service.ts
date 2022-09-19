import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  constructor(private httpclient: HttpClient) { }

  url:string = 'http://localhost:8000/api/foods'

  getDataFoods(){
    return this.httpclient.get(this.url)
  }
}
