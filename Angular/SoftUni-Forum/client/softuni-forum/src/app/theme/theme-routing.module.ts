import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../core/guards/auth.activate';
import { ThemeContainerComponent } from './theme-container/theme-container.component';
import { ThemeCreateComponent } from './theme-create/theme-create.component';
import { ThemeItemComponent } from './theme-item/theme-item.component';

const routes: Routes = [
    {
        path: 'themes',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: ThemeContainerComponent
            },
            {
                path: 'add-theme',
                component: ThemeCreateComponent,
                canActivate: [AuthActivate],
                data: {
                    authenticationRequired: true,
                    redirectUrl: '/login'
                }
            },
            {
                path: ':themeId',
                component: ThemeItemComponent
            },
        ],
    }
];

export const ThemeRoutingModule = RouterModule.forChild(routes);