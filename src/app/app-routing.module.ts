import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationComponent } from './notification/notification.component';
import { PosterComponent } from './poster/poster.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common';

const routes: Routes = [{
  path:'',
  component: DashboardComponent,
},{
  path:'courses',
  component: CoursesComponent,
},{
  path:'posters',
  component: PosterComponent,
},{
  path:'notification',
  component: NotificationComponent,
},];

@NgModule({
  declarations:[DashboardComponent,CoursesComponent,PosterComponent,NotificationComponent],
  imports: [RouterModule.forRoot(routes),NgxChartsModule, BrowserModule, CommonModule, BrowserAnimationsModule],
  exports: [RouterModule, BrowserModule, CommonModule,BrowserAnimationsModule],
})
export class AppRoutingModule { }
