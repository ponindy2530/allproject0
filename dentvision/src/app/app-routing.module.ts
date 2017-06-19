import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './shared/login/login.component';
import { LogoutComponent } from './shared/logout/logout.component';
import { GendentComponent } from './dent/gendent/gendent.component';
import { RpdentComponent } from './dent/rpdent/rpdent.component';
import { GentantaComponent } from './dent/gentanta/gentanta.component';
@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                component: GendentComponent
            },
            {
                path: 'Login',
                component: LoginComponent
            },
            {
                path: 'Logout',
                component: LogoutComponent
            },
            // // {
            // //     path: 'loginck/:id/:followup',
            // //     component: LoginckComponent
            // // },
            {
                path: 'Gendent',
                component: GendentComponent
            },
            {
                path: 'Rpdent/:amp',
                component: RpdentComponent
            },
            {
                path: 'Gentanta',
                component: GentantaComponent
            },
            // {
            //     path: 'Repair',
            //     component: RepairComponent
            // },
            // // {
            //     path: 'uploadimg/:id',
            //     component: UploadimgComponent
            // },
            // {
            //     path: 'test',
            //     component: TestComponent
            // },
            // {
            //     path: 'menu',
            //     component: MenuComponent
            // },
            // {
            //     path: 'adminrepair',
            //     component: AdminrepairComponent
            // },
            // {
            //     path: 'repair',
            //     component: RepairComponent
            // },
            // {
            //     path: 'login',
            //     component: LoginComponent
            // },
            // {
            //     path: 'loginfrom',
            //     component: LoginformComponent
            // },
            // {
            //     path: 'logout',
            //     component: LogoutComponent
            // },
            // {
            //     path: 'imgreload',
            //     component: ImgreloadComponent
            // },
            // {
            //     path: 'Dashboard',
            //     component: DashboardComponent
            // },
            // {
            //     path: 'MatiralForm/:id',
            //     component: MatiralFormComponent
            // }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
