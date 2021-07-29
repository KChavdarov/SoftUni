import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';




const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/user-list'
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];

export const AppRoutingModule = RouterModule.forRoot(routes);

