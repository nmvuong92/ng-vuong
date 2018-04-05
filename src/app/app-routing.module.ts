import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { NewsComponent}  from './news/news.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //routes mặc định
  { path: 'dashboard', component: DashboardComponent },
  { path: 'news', component: NewsComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ], //nhét routes vào root 
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
