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
import { AppAdminPaginComponent } from './component/admin/pages/app-admin-pagin/app-admin-pagin.component';
import { NumberToArrayPipe } from './pipe/number-to-array.pipe';
import { BaseDetailMainComponent } from './component/base-detail-wrapper/base-detail-main/base-detail-main.component';
import { BaseDetailEditComponent } from './component/base-detail-wrapper/base-detail-edit/base-detail-edit.component';
import { BaseDetailHistoryComponent } from './component/base-detail-wrapper/base-detail-history/base-detail-history.component';
import { BaseDetailAddComponent } from './component/base-detail-wrapper/base-detail-add/base-detail-add.component';
import { AdminClassTypeComponent } from './component/admin/pages/class-types/admin-class-type/admin-class-type.component';
import { AdminManageUserComponent } from './component/admin/user/admin-manage-user/admin-manage-user.component';
import { AdminUserAddComponent } from './component/admin/user/admin-user-add/admin-user-add.component';
import { AdminUserEditComponent } from './component/admin/user/admin-user-edit/admin-user-edit.component';
import { AdminUserListComponent } from './component/admin/user/admin-user-list/admin-user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TextMaskModule } from 'angular2-text-mask';
import { UserMoreInfoComponent } from './component/admin/user/user-more-info/user-more-info.component';
import { ClassSpecializationAddComponent } from './component/admin/school-class/specialization/class-specialization-add/class-specialization-add.component';
import { ClassSpecializationEditComponent } from './component/admin/school-class/specialization/class-specialization-edit/class-specialization-edit.component';
import { ClassSpecializationMainComponent } from './component/admin/school-class/specialization/class-specialization-main/class-specialization-main.component';
import { SchoolClassAddComponent } from './component/admin/school-class/main/school-class-add/school-class-add.component';
import { SchoolClassEditComponent } from './component/admin/school-class/main/school-class-edit/school-class-edit.component';
import { SchoolClassListComponent } from './component/admin/school-class/main/school-class-list/school-class-list.component';
import { UserSearchComponent } from './component/admin/user/user-search/user-search.component';
import { FoundUserListComponent } from './component/admin/user/found-user-list/found-user-list.component';
import { YearToNumberPipe } from './component/admin/school-class/main/school-class-list/pipe/year-to-number.pipe';
import { SchoolClassMoreInfoComponent } from './component/admin/school-class/school-class-more-info/school-class-more-info.component';



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
    AppAdminPaginComponent,
    NumberToArrayPipe,
    BaseDetailMainComponent,
    BaseDetailEditComponent,
    BaseDetailHistoryComponent,
    BaseDetailAddComponent,
    AdminClassTypeComponent,
    AdminManageUserComponent,
    AdminUserAddComponent,
    AdminUserEditComponent,
    AdminUserListComponent,
    UserMoreInfoComponent,
    ClassSpecializationAddComponent,
    ClassSpecializationEditComponent,
    ClassSpecializationMainComponent,
    SchoolClassAddComponent,
    SchoolClassEditComponent,
    SchoolClassListComponent,
    UserSearchComponent,
    FoundUserListComponent,
    YearToNumberPipe,
    SchoolClassMoreInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TextMaskModule,
    routing
  ],
  providers: [
    HttpClientModule,
    LoginService,
    UserService,
    HttpClient,
    RestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
