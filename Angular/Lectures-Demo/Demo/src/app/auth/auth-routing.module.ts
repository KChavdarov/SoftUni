import { RouterModule } from '@angular/router';
import { RegisterReactiveComponent } from './register-reactive/register-reactive.component';
import { RegisterComponent } from './register/register.component';

const routes = [
    {
        path: 'auth-register',
        component: RegisterComponent,
    },
    {
        path: 'auth-register-reactive',
        component: RegisterReactiveComponent,
    }
];

export const AuthRoutingModule = RouterModule.forChild(routes)