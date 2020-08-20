import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnrollUserComponent } from './enroll-user/enroll-user.component';
import { EnrollUserInfoComponent } from './enroll-user-info/enroll-user-info.component';
import { UpdateEnrollUserComponent } from './update-enroll-user/update-enroll-user.component';

const routes: Routes = [
  {path:'listUserInfo', component:EnrollUserComponent},
  {path:'viewEnrollUser/:id', component:EnrollUserInfoComponent},
  {path:'updateUser/:id', component:UpdateEnrollUserComponent},
  {path:'**', component: EnrollUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
