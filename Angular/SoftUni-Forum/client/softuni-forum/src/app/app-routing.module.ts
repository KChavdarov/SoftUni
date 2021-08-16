import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './shared/home/home.component';


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    },
    {
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
    },
    {
        path: 'theme',
        loadChildren: () => import('./theme/theme.module').then(m => m.ThemeModule)
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '404',
        component: NotFoundComponent
    },
    {
        path: '**',
        redirectTo: '/404'
    }
];

export const AppRoutingModule = RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules });