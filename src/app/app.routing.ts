import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './component/login/login.component';
import { AddUserComponent } from './component/add-user/add-user.component';

import { AdminMainPageComponent } from './component/main-page/admin-main-page/admin-main-page.component';

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
        component: AdminMainPageComponent
    }
]; 

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);