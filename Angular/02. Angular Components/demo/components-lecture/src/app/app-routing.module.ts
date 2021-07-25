import { Routes, RouterModule } from '@angular/router'
import { AboutComponent } from './about/about.component'
import { UserListComponent } from './user/user-list/user-list.component'




const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/user-list'
    },
    {
        path: 'user-list',
        component: UserListComponent,
    },
    {
        path: 'about',
        component: AboutComponent,
    }
]

export const AppRoutingModule = RouterModule.forRoot(routes);

