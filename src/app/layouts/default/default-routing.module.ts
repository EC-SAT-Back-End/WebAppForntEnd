import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/layouts/default/home/home.component';
import { DefaultComponent } from './default.component';

const routes: Routes = [
  {
    path: '', component: DefaultComponent,
    children: [
      {
        path: 'Home', component:HomeComponent
      },
      {
        path: '', redirectTo:'/Default/Home', pathMatch:'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
