import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodsComponent } from './foods/foods.component';
import { SettingsComponent } from './settings/settings.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FoodaddComponent } from './foodadd/foodadd.component';
import { FormsModule } from '@angular/forms';
import { FoodeditComponent } from './foodedit/foodedit.component';

const routes: Routes = [
  {
    path:'',component:MainComponent,
    children:[
      {
        path:'',
        redirectTo:'admin/home',
        pathMatch: 'full'
      },
      {
        path:'home',component:HomeComponent
      },
      {
        path:'foods',component:FoodsComponent
      },
      {
        path:'settings',component:SettingsComponent
      },
      {
        path:'add-foods',component:FoodaddComponent
      },
      {
        path:'edit-foods/:id',component:FoodeditComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    FoodsComponent,
    SettingsComponent,
    FoodaddComponent,
    FoodeditComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule
  ]
})
export class AdministratorModule { }
