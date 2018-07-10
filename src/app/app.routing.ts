import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './component/login/login.component';
import { AddUserComponent } from './component/add-user/add-user.component';

import { AdminMainPageComponent } from './component/admin/main-page/admin-main-page.component';
import { AdminOptionsComponent } from "./component/admin/pages/admin-options/admin-options.component";
import { AdminClassesComponent } from "./component/admin/pages/admin-nav-cards/admin-classes/admin-classes.component";
import { AdminPrefixesComponent } from './component/admin/pages/prefixes/admin-prefixes-main/admin-prefixes.component';

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
        path: 'addUser',
        component: AddUserComponent
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
            }
        ]
    }
]; 

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);