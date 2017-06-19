import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './shared/login/login.component';
import { LogoutComponent } from './shared/logout/logout.component';
import { Group1SsoComponent } from './pis/report/group1-sso/group1-sso.component';
import { Group1SwComponent } from './pis/report/group1-sw/group1-sw.component';
import { Group2SwComponent } from './pis/report/group2-sw/group2-sw.component';
import { Group3SwComponent } from './pis/report/group3-sw/group3-sw.component';
import { AmphomeComponent } from './pis/report/amphome/amphome.component';
import { Group123SwComponent } from './pis/report/group123-sw/group123-sw.component';
import { FteComponent } from './pis/report/fte/fte.component';
import { GroupFteComponent } from './pis/report/group-fte/group-fte.component';
import { GisComponent } from './pis/report/gis/gis.component';
import { GisSoComponent } from './pis/report/gis-so/gis-so.component';
import { FteHotComponent } from './pis/report/fte-hot/fte-hot.component';
import { AvgComponent } from './pis/avg/avg.component';
import { PisComponent } from './pis/pis/pis.component';
import { MoveinComponent } from './pis/movein/movein.component';
import { RpmoveinComponent } from './pis/rpmovein/rpmovein.component';
import { HomeuserComponent } from './pis/homeuser/homeuser.component';
import { RepDatestartComponent } from './pis/rep-datestart/rep-datestart.component';
import { Ftepos1Component } from './pis/ftepos1/ftepos1.component';
@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                component: AmphomeComponent
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
            // {
            //     path: 'uploadimg/:id',
            //     component: UploadimgComponent
            // },
            {
                path: 'Group1Sso',
                component: Group1SsoComponent
            },
            {
                path: 'Group1Sw',
                component: Group1SwComponent
            },
            {
                path: 'Group2Sw',
                component: Group2SwComponent
            },
            {
                path: 'Group3Sw',
                component: Group3SwComponent
            },
            {
                path: 'Amphome',
                component: AmphomeComponent
            },
            {
                path: 'Group123Sw',
                component: Group123SwComponent
            },
            {
                path: 'Fte',
                component: FteComponent
            },
            {
                path: 'GroupFte',
                component: GroupFteComponent
            },
            {
                path: 'Gis',
                component: GisComponent
            },
            {
                path: 'GisSo',
                component: GisSoComponent
            },
            {
                path: 'FteHot',
                component: FteHotComponent
            },
            {
                path: 'Avg',
                component: AvgComponent
            },
            {
                path: 'Pis',
                component: PisComponent
            },
            {
                path: 'Movein',
                component: MoveinComponent
            },
            {
                path: 'Rpmovein',
                component: RpmoveinComponent
            },
            {
                path: 'Homeuser',
                component: HomeuserComponent
            },
            {
                path: 'RepDatestart',
                component: RepDatestartComponent
            },
            {
                path: 'Ftepos1',
                component: Ftepos1Component
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
