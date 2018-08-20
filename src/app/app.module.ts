import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { LoginService } from '@app/service/login.service';
import { UserService } from '@app/service/user.service';
import { HttpClient } from '@app/service/global/request/http-client';
import { RestService } from '@app/service/global/request/rest-service.service';
import { routing } from '@app/app.routing';
 
import { AppComponent } from '@app/app.component';
import { LoginComponent } from '@app/component/login/login.component';
import { PhoneNumberPipe } from '@app/pipe/phone-number.pipe';
import { AdminMainPageComponent } from '@app/component/admin/main-page/admin-main-page.component';
import { AdminOptionsComponent } from '@app/component/admin/pages/admin-options/admin-options.component';
import { AdminClassesComponent } from '@app/component/admin/pages/admin-nav-cards/admin-classes/admin-classes.component';
import { AdminPrefixesComponent } from '@app/component/admin/pages/prefixes/admin-prefixes-main/admin-prefixes.component';
import { SearchBarComponent } from '@app/component/common/search-bar/search-bar.component';
import { MessageBannerComponent } from '@app/component/common/message-banner/message-banner.component';
import { TwoButtonsModalComponent } from '@app/component/common/two-buttons-modal/two-buttons-modal.component';
import { AdminPrefixesAddComponent } from '@app/component/admin/pages/prefixes/admin-prefixes-add/admin-prefixes-add.component';
import { AdminPrefixEditComponent } from '@app/component/admin/pages/prefixes/admin-prefix-edit/admin-prefix-edit.component';
import { AdminPrefixHistoryComponent } from '@app/component/admin/pages/prefixes/admin-prefix-history/admin-prefix-history.component';
import { AppAdminPaginComponent } from './component/admin/pages/app-admin-pagin/app-admin-pagin.component';
import { NumberToArrayPipe } from './pipe/number-to-array.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PhoneNumberPipe,
    AdminMainPageComponent,
    AdminOptionsComponent,
    AdminClassesComponent,
    AdminPrefixesComponent,
    SearchBarComponent,
    MessageBannerComponent,
    TwoButtonsModalComponent,
    AdminPrefixesAddComponent,
    AdminPrefixEditComponent,
    AdminPrefixHistoryComponent,
    AppAdminPaginComponent,
    NumberToArrayPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    LoginService,
    UserService,
    HttpClient,
    RestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
