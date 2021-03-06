import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '@app/component/login/login.component';

import { AdminMainPageComponent } from '@app/component/admin/main-page/admin-main-page.component';
import { AdminOptionsComponent } from "@app/component/admin/pages/admin-options/admin-options.component";
import { AdminClassesComponent } from "@app/component/admin/pages/admin-nav-cards/admin-classes/admin-classes.component";
import { AdminPrefixesComponent } from '@app/component/admin/pages/prefixes/admin-prefixes-main/admin-prefixes.component';

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
            }
        ]
    }
]; 

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);