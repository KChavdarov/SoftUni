import { RouterModule, Routes } from '@angular/router';
import { FurnitureAllComponent } from './furniture-all/furniture-all.component';
import { FurnitureCreateComponent } from './furniture-create/furniture-create.component';
import { FurnitureDetailsComponent } from './furniture-details/furniture-details.component';


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
        
    },
    {
        path: ':id',
        component: FurnitureDetailsComponent
    }
];

export const furnitureRoutingModule = RouterModule.forChild(routes);