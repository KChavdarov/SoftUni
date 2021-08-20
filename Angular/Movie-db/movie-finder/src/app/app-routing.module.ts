import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'movies',
    loadChildren: () => import('./movie/movie.module').then(m => m.MovieModule),
  },
];

export const appRoutingModule = RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules });