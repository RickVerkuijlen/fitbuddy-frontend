import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewUserComponent } from './component/new-user/new-user.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProfileComponent } from './component/profile/profile.component';
import { SportsComponent } from './component/sports/sports.component';
import { ActivityComponent } from './component/activity/activity.component';


const routes: Routes = [
  {path: "dashboard", component: DashboardComponent},
  {path: "profile", component: ProfileComponent},
  {path: "newUser", component: NewUserComponent},
  {path: "sports", component: SportsComponent},
  {path: "activity", component: ActivityComponent},
  {path: "**", redirectTo: 'dashboard', pathMatch: 'full'},
  {path: "", redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
