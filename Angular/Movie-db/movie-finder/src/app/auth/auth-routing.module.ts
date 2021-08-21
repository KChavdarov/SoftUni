import { RouterModule, Routes } from '@angular/router';
import { RegisterReactiveComponent } from './register-reactive/register-reactive.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
    {
        path: 'register',
        component: RegisterReactiveComponent
    }
    // {
    //     path: 'register',
    //     component: RegisterComponent
    // }
];

export const AuthRoutingModule = RouterModule.forChild(routes);