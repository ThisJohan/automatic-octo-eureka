import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'list', component: ListComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full'}
];
