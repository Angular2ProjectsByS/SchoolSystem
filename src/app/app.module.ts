import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LoginService } from './service/login.service';
import { UserService } from './service/user.service';
import { routing } from './app.routing';
 
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { AddUserComponent } from './component/add-user/add-user.component';
import { PhoneNumberPipe } from './pipe/phone-number.pipe';
import { AddSchoolClassComponent } from './component/add-school-class/add-school-class.component';
import { AdminMainPageComponent } from './component/admin/main-page/admin-main-page.component';
import { AdminOptionsComponent } from './component/admin/pages/admin-options/admin-options.component';
import { AdminClassesComponent } from './component/admin/pages/admin-nav-cards/admin-classes/admin-classes.component';
import { AdminPrefixesComponent } from './component/admin/pages/admin-prefixes/admin-prefixes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddUserComponent,
    PhoneNumberPipe,
    AddSchoolClassComponent,
    AdminMainPageComponent,
    AdminOptionsComponent,
    AdminClassesComponent,
    AdminPrefixesComponent
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
