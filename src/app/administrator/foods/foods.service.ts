import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FoodsDelete } from './foodsDeleteModel';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  constructor(private httpclient: HttpClient) { }

  url = 'http://localhost:8000/api/foods'

  urlDelete = 'http://localhost:8000/api/foods/'

  getDataFoods(){
    return this.httpclient.get(this.url)
  }


  deleteData(id: FoodsDelete){
    return this.httpclient.delete(this.urlDelete + id + '/delete')
  }
}
