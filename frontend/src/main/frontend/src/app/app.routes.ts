import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {Login} from './login/login';

export const routes:Routes = [
    {path: '', component: Login}
];

export const RoutesModule: ModuleWithProviders = RouterModule.forRoot(routes);
