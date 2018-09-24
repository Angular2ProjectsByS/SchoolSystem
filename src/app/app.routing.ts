import { AdminUserEditComponent } from './component/admin/user/admin-user-edit/admin-user-edit.component';
import { AdminUserListComponent } from './component/admin/user/admin-user-list/admin-user-list.component';
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '@app/component/login/login.component';

import { AdminMainPageComponent } from '@app/component/admin/main-page/admin-main-page.component';
import { AdminOptionsComponent } from "@app/component/admin/pages/admin-options/admin-options.component";
import { AdminClassesComponent } from "@app/component/admin/pages/admin-nav-cards/admin-classes/admin-classes.component";
import { AdminPrefixesComponent } from '@app/component/admin/pages/prefixes/admin-prefixes-main/admin-prefixes.component';
import { AdminClassTypeComponent } from "@app/component/admin/pages/class-types/admin-class-type/admin-class-type.component";
import { AdminManageUserComponent } from "@app/component/admin/user/admin-manage-user/admin-manage-user.component";
import { AdminUserAddComponent } from "@app/component/admin/user/admin-user-add/admin-user-add.component";

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
        path: "admin",
        component: AdminMainPageComponent, 
        children: [
            {
                path: '',
                redirectTo: '/admin/options',
                pathMatch: 'full'
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
                path: 'user',
                component: AdminManageUserComponent,
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
            }
        ]
    }
]; 

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);