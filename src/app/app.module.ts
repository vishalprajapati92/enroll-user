import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnrollUserComponent } from './enroll-user/enroll-user.component';
import { EnrollUserInfoComponent } from './enroll-user-info/enroll-user-info.component';
import { UpdateEnrollUserComponent } from './update-enroll-user/update-enroll-user.component';
import { HeaderInterceptor } from './header.interceptor';
import {EnrollUserService } from './enroll-user.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    EnrollUserComponent,
    EnrollUserInfoComponent,
    UpdateEnrollUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [EnrollUserService,{
    provide : HTTP_INTERCEPTORS,
    useClass : HeaderInterceptor,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
