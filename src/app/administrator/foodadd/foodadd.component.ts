import { Component, OnInit } from '@angular/core';
import { FoodsAdd } from './foodsAddModule';
import { FoodaddService } from './foodadd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foodadd',
  templateUrl: './foodadd.component.html',
  styleUrls: ['./foodadd.component.scss']
})
export class FoodaddComponent implements OnInit {

  title = 'Add Foods'
  form = new FoodsAdd()

  constructor(private foodAddService: FoodaddService, private router: Router) { }

  ngOnInit(): void {
  }

  insertDataForm(){
    this.foodAddService.insertData(this.form).subscribe(res =>{
      this.router.navigate(['/admin/foods'])
      console.log(res)
    })
  }

}
