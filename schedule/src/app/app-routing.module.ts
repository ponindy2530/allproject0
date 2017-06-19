import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { LoginComponent } from './shared/login/login.component';
import { LogoutComponent } from './shared/logout/logout.component';
import { DashboardComponent } from './healthstation/dashboard/dashboard.component';
import { RoomOpenComponent } from './healthstation/room/room-open/room-open.component';
import { RoomLockComponent } from './healthstation/room/room-lock/room-lock.component';
import { RegisterComponent } from './healthstation/room/register/register.component';
import { ManuAdminComponent } from './healthstation/admins/manu-admin/manu-admin.component';
import { AddListComponent } from './healthstation/admins/add-list/add-list.component';
import { ListRegisterComponent } from './healthstation/admins/list-register/list-register.component';
import { ListRegisterOkComponent } from './healthstation/admins/list-register-ok/list-register-ok.component';
import { ListRegisterNoComponent } from './healthstation/admins/list-register-no/list-register-no.component';
import { UserShowComponent } from './healthstation/users/user-show/user-show.component';
@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                component: DashboardComponent,
                pathMatch: 'full'
            },
            {
                path: 'Dashboard',
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
            {
                path: 'RoomOpen',
                component: RoomOpenComponent
            },
            {
                path: 'RoomLock',
                component: RoomLockComponent
            },
            {
                path: 'Register',
                component: RegisterComponent
            },
            {
                path: 'Registers/:id',
                component: RegisterComponent
            },
            {
                path: 'ManuAdmin',
                component: ManuAdminComponent
            },
            {
                path: 'AddList',
                component: AddListComponent
            },
            {
                path: 'ListRegister',
                component: ListRegisterComponent
            },
            {
                path: 'ListRegisterOk',
                component: ListRegisterOkComponent
            },
            {
                path: 'ListRegisterNo',
                component: ListRegisterNoComponent
            },
            {
                path: 'UserShow',
                component: UserShowComponent
            },
            { path: '**', redirectTo: '/', pathMatch: 'full' }
        ], { useHash: false })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
