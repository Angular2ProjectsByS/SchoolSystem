import { SchoolClassListComponent } from './component/admin/school-class/main/school-class-list/school-class-list.component';
import { UserSearchComponent } from './component/admin/user/user-search/user-search.component';
import { ClassSpecializationMainComponent } from './component/admin/school-class/specialization/class-specialization-main/class-specialization-main.component';
import { AdminUserEditComponent } from './component/admin/user/admin-user-edit/admin-user-edit.component';
import { AdminUserListComponent } from './component/admin/user/admin-user-list/admin-user-list.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '@app/component/login/login.component';

import { AdminMainPageComponent } from '@app/component/admin/main-page/admin-main-page.component';
import { AdminOptionsComponent } from '@app/component/admin/pages/admin-options/admin-options.component';
import { AdminClassesComponent } from '@app/component/admin/pages/admin-nav-cards/admin-classes/admin-classes.component';
import { AdminPrefixesComponent } from '@app/component/admin/pages/prefixes/admin-prefixes-main/admin-prefixes.component';
import { AdminClassTypeComponent } from '@app/component/admin/pages/class-types/admin-class-type/admin-class-type.component';
import { AdminManageUserComponent } from '@app/component/admin/user/admin-manage-user/admin-manage-user.component';
import { AdminUserAddComponent } from '@app/component/admin/user/admin-user-add/admin-user-add.component';
import { SchoolClassAddComponent } from '@app/component/admin/school-class/main/school-class-add/school-class-add.component';
import { OccupationalGroupEditComponent } from '@app/component/admin/occupational-group/occupational-group-edit/occupational-group-edit.component';
import { OccupationalGroupAddComponent } from '@app/component/admin/occupational-group/occupational-group-add/occupational-group-add.component';
import {EmailComponent} from '@app/component/email/email.component';
import {EmailSendComponent} from '@app/component/email/email-send/email-send.component';
import {EmailOneComponent} from '@app/component/email/email-one/email-one.component';
import {OccupationalGroupListComponent} from '@app/component/admin/occupational-group/occupational-group-list/occupational-group-list.component';
import {TeacherMainPageComponent} from '@app/component/teacher/main-page/teacher-main-page.component';
import {TOrgGroupComponent} from '@app/component/teacher/t-org-group/t-org-group.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'admin',
        component: AdminMainPageComponent,
        children: [
            {
                path: '',
                redirectTo: '/admin/options',
                pathMatch: 'full'
            },
            {
              path: 'email',
              component: EmailComponent
            },
            {
              path: 'email/new',
              component: EmailSendComponent
            },
            {
              path: 'email/show',
              component: EmailOneComponent
            },
            {
                path: 'options',
                component: AdminOptionsComponent
            },
            {
                path: 'classes',
                component: AdminClassesComponent
            },
            {
                path: 'prefixes-class',
                component: AdminPrefixesComponent
            },
            {
                path: 'class-type',
                component: AdminClassTypeComponent
            },
            {
              path: 'school-class',
              component: SchoolClassListComponent
            },
            {
                path: 'school-class/add',
                component: SchoolClassAddComponent
            },
            {
                path: 'school-class',
                component: SchoolClassListComponent
            },
            {
                path: 'user',
                component: AdminManageUserComponent,
            },
            {
                path: 'class-specialization',
                component: ClassSpecializationMainComponent
            },
            {
                path: 'user/add',
                component: AdminUserAddComponent
            },
            {
                path: 'user/list',
                component: AdminUserListComponent
            },
            {
                path: 'user/edit',
                component: AdminUserEditComponent
            },
            {
                path: 'user/search',
                component: UserSearchComponent
            },
            {
                path: 'occupational-group',
                component: OccupationalGroupListComponent
            },
            {
                path: 'occupational-group/add',
                component: OccupationalGroupAddComponent
            }
        ]
    },
    {
      path: 'teacher',
      component: TeacherMainPageComponent,
      children: [
        {
          path: '',
          redirectTo: '/teacher/occup-group',
          pathMatch: 'full'
        },
        {
          path: 'occup-group',
          component: TOrgGroupComponent
        }
      ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
