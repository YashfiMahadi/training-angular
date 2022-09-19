import { Component, OnInit } from '@angular/core';
import { FoodsService } from './foods.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss']
})
export class FoodsComponent implements OnInit {

  foods: any;
  columTable = ['No', 'Name', 'Jenis', 'Deskripsi', 'aksi']
  titlePage = 'List Foods'
  no = 1;


  constructor(private foodService: FoodsService) { }


  ngOnInit(): void {
    this.showFoods();
  }

  showFoods(){
    this.foods = this.foodService.getDataFoods().subscribe(food => {
      this.foods = food;
    })
  }

}
