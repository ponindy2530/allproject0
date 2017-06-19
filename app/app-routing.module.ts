import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './shared/login/login.component';
import { LogoutComponent } from './shared/logout/logout.component';
import { DashboardComponent } from './matiral/dashboard/dashboard.component';
import { AddnewComponent } from './matiral/addnew/addnew.component';
import { CompanyComponent } from './matiral/company/company.component';
import { RepairComponent } from './matiral/repair/repair.component';
@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                component: DashboardComponent
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
                path: 'Addnew/:id',
                component: AddnewComponent
            },
            {
                path: 'Company',
                component: CompanyComponent
            },
            {
                path: 'Repair',
                component: RepairComponent
            },
            // {
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
