import { RouterModule, Routes } from '@angular/router';
import { ThemeCreateComponent } from './theme-create/theme-create.component';
import { ThemeItemComponent } from './theme-item/theme-item.component';
import { ThemeListComponent } from './theme-list/theme-list.component';


const routes: Routes = [
    {
        path: 'themes',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: ThemeListComponent
            },
            {
                path: ':themeId',
                component: ThemeItemComponent
            },
            {
                path: 'add-theme',
                component: ThemeCreateComponent
            },
        ]
    }
];

export const ThemeRoutingModule = RouterModule.forChild(routes);