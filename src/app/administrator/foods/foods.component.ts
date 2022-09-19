import { Component, OnInit } from '@angular/core';
import { FoodsService } from './foods.service';
import { FoodsDelete } from './foodsDeleteModel';
import { Router } from '@angular/router';
@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss']
})
export class FoodsComponent implements OnInit {

  datafoods: any
  id: any
  var: any
  model = new FoodsDelete
  columTable = ['No', 'Name', 'Jenis', 'Deskripsi', 'aksi']
  titlePage = 'List Foods'
  no = 1;


  constructor(
    private foodService: FoodsService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.showFoods();
  }

  showFoods(){
    this.foodService.getDataFoods().subscribe(res => {
      this.datafoods = res;
    })
  }

  deleteData(id: FoodsDelete){
    this.foodService.deleteData(id).subscribe(res => {
      this.var = JSON.stringify(res)
      this.model = JSON.parse(this.var)
      window.location.reload()
      console.log(this.model.message);
    });
  }

}
