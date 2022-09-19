import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodeditService } from './foodedit.service';
import { FoodsEdit } from './foodsEditModule';

@Component({
  selector: 'app-foodedit',
  templateUrl: './foodedit.component.html',
  styleUrls: ['./foodedit.component.scss']
})
export class FoodeditComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private foodEditService: FoodeditService
  ) { }

  id : any
  form = new FoodsEdit()
  dataView: any

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getViewIdFood()
  }

  getViewIdFood() {
    this.foodEditService.getViewId(this.id).subscribe(res =>{
      this.dataView = res
      this.form =  this.dataView
    })
  }

  updateDataFood() {
    this.foodEditService.updateData(this.id, this.form).subscribe(res =>{
      this.router.navigate(['/admin/foods'])
      console.log(res)
    })
  }
}
