import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationComponent } from './notification/notification.component';
import { PosterComponent } from './poster/poster.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/guard.service'

const routes: Routes = [
  {
    path:'',
    redirectTo:'/dashboard',
    pathMatch:'full'
  },
  {
  path:'dashboard',
  component: DashboardComponent,
  canActivate: [AuthGuard]
},{
  path:'courses',
  component: CoursesComponent,
  canActivate: [AuthGuard]
},{
  path:'posters',
  component: PosterComponent,
  canActivate: [AuthGuard]
},{
  path:'orders',
  component: NotificationComponent,
  canActivate: [AuthGuard]
},
{
  path:'login',
  component: LoginComponent,
},
];

@NgModule({
  declarations:[DashboardComponent,CoursesComponent,PosterComponent,NotificationComponent, LoginComponent],
  imports: [RouterModule.forRoot(routes),NgxChartsModule, BrowserModule, CommonModule, BrowserAnimationsModule, FormsModule],
  exports: [RouterModule, BrowserModule, CommonModule,BrowserAnimationsModule],
})
export class AppRoutingModule { }
