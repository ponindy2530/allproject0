import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './shared/login/login.component';
import { LogoutComponent } from './shared/logout/logout.component';
import { DashboardComponent } from './matiral/dashboard/dashboard.component';
import { AddnewComponent } from './matiral/addnew/addnew.component';
import { CompanyComponent } from './matiral/company/company.component';
import { RepairComponent } from './matiral/repair/repair.component';
import { ItComponent } from './matiral/it/it.component';
import { SupComponent } from './matiral/sup/sup.component';
import { PisComponent } from './matiral/pis/pis.component';
import { CkrgtComponent } from './matiral/ckrgt/ckrgt.component';
import { RepMatiralComponent } from './matiral/rep-matiral/rep-matiral.component';
import { McgroupComponent } from './matiral/mcgroup/mcgroup.component';
import { MctypeComponent } from './matiral/mctype/mctype.component';
import { McattributeComponent } from './matiral/mcattribute/mcattribute.component';
import { HomeuserComponent } from './matiral/homeuser/homeuser.component';
import { BeikComponent } from './matiral/beik/beik.component';
import { KhunComponent } from './matiral/khun/khun.component';
import { UnitComponent } from './matiral/unit/unit.component';
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
                path: 'Addnew',
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
            {
                path: 'It',
                component: ItComponent
            },
            {
                path: 'Sup',
                component: SupComponent
            },
            {
                path: 'Pis',
                component: PisComponent
            },
            {
                path: 'Ckrgt',
                component: CkrgtComponent
            },
            {
                path: 'RepMatiral',
                component: RepMatiralComponent
            },
            {
                path: 'Mcgroup',
                component: McgroupComponent
            },
            {
                path: 'Mctype',
                component: MctypeComponent
            },
            {
                path: 'Mcattribute',
                component: McattributeComponent
            },
            {
                path: 'Homeuser',
                component: HomeuserComponent
            },
            {
                path: 'Beik',
                component: BeikComponent
            },
                        {
                path: 'Khun',
                component: KhunComponent
            },
                                  {
                path: 'Unit',
                component: UnitComponent
            }            
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
