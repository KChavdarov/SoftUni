import { RouterModule, Routes } from '@angular/router';
import { CanActivateAdmin } from '../authentication/guards/admin.guard';
import { FurnitureAllComponent } from './furniture-all/furniture-all.component';
import { FurnitureCreateComponent } from './furniture-create/furniture-create.component';
import { FurnitureDetailsComponent } from './furniture-details/furniture-details.component';
import { FurnitureEditComponent } from './furniture-edit/furniture-edit.component';
import { FurnitureUserComponent } from './furniture-user/furniture-user.component';


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: FurnitureAllComponent
    },
    {
        path: 'create',
        component: FurnitureCreateComponent
    },
    {
        path: 'user',
        component: FurnitureUserComponent
    },
    {
        path: 'edit/:id',
        component: FurnitureEditComponent,
        canActivate: [CanActivateAdmin]
    },
    {
        path: ':id',
        component: FurnitureDetailsComponent
    }
];

export const furnitureRoutingModule = RouterModule.forChild(routes);