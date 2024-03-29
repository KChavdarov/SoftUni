import { Routes, RouterModule } from '@angular/router';
import { ParamsActivate } from '../core/guards/params.activate';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';




const routes: Routes = [
    {
        path: 'list',
        component: UserListComponent,
    },
    {
        path: 'detail/:id',
        component: UserDetailComponent,
        canActivate: [ParamsActivate],
        data: {
            paramsActivate: ['id'],
            paramsActivateRedirectUrl: '/list'
        }
    }
];

export const UserRoutingModule = RouterModule.forChild(routes);

