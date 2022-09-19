import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FoodsEdit } from './foodsEditModule';

@Injectable({
  providedIn: 'root'
})
export class FoodeditService {

  constructor(private httpClient: HttpClient) { }

  url = 'http://localhost:8000/api/foods/'

  getViewId(id: FoodsEdit){
    return this.httpClient.get(this.url + id + '/show')
  }

  updateData(id: FoodsEdit, data: FoodsEdit){
    return this.httpClient.put(this.url + id + '/update', data)
  }

}
