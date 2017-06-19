import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { CookieService } from 'angular2-cookie/services/cookies.service';


import 'rxjs/Rx';
import { AppRoutingModule } from './app-routing.module';
import { ProductService } from './shared/service/service';
import { Dataservice } from './shared/service/dataservice';


//primeng
import { DataTableModule, SharedModule, MessagesModule, TooltipModule, CalendarModule, ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';

//Module



import { AppComponent } from './app.component';
import { LoginComponent } from './shared/login/login.component';
import { LogoutComponent } from './shared/logout/logout.component';
import { FootComponent } from './shared/foot/foot.component';
import { ManuComponent } from './shared/manu/manu.component';
import { HeadComponent } from './shared/head/head.component';
import { ManuMiniComponent } from './schedule/manu-mini/manu-mini.component';
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
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    FootComponent,
    ManuComponent,
    HeadComponent,
    ManuMiniComponent,
    DashboardComponent,
    RoomOpenComponent,
    RoomLockComponent,
    RegisterComponent,
    ManuAdminComponent,
    AddListComponent,
    ListRegisterComponent,
    ListRegisterOkComponent,
    ListRegisterNoComponent,
    UserShowComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MessagesModule,
    ReactiveFormsModule,
    DataTableModule,
    SharedModule,
    AppRoutingModule,
    TooltipModule,
    CalendarModule,
    ConfirmDialogModule
  ],
  providers: [ProductService, Dataservice, ConfirmationService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
