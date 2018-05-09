import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LoginService } from './service/login.service';
import { UserService } from './service/user.service';
import { routing } from './app.routing';
 
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AddUserComponent } from './component/add-user/add-user.component';
import { PhoneNumberPipe } from './pipe/phone-number.pipe';
import { AddSchoolClassComponent } from './component/add-school-class/add-school-class.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    AddUserComponent,
    PhoneNumberPipe,
    AddSchoolClassComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    LoginService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
