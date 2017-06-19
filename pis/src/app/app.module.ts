import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import {CookieModule} from 'cookie';
import 'rxjs/Rx';
import { AppRoutingModule } from './app-routing.module';
import { ProductService } from './shared/service/service';
import { Dataservice } from './shared/service/dataservice';
// import { default as swal } from 'sweetalert2';
//primeng
import { MessagesModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { PasswordModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';
import { TooltipModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import { FileUploadModule } from 'primeng/primeng';
import { CheckboxModule } from 'primeng/primeng';
import { ChartModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';

//pipe
import { SumsPipe } from './shared/pipe/sums.pipe';
import { Sums2Pipe } from './shared/pipe/sums.pipe';
import { KeysPipe } from './shared/pipe/keys.pipe';

import { AppComponent } from './app.component';
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
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    SumsPipe,
    Sums2Pipe,
    KeysPipe,
    Group1SsoComponent,
    Group1SwComponent,
    Group2SwComponent,
    Group3SwComponent,
    AmphomeComponent,
    Group123SwComponent,
    FteComponent,
    GroupFteComponent,
    GisComponent,
    GisSoComponent,
    FteHotComponent,
    AvgComponent,
    PisComponent,
    MoveinComponent,
    RpmoveinComponent,
    HomeuserComponent,
    RepDatestartComponent,
    Ftepos1Component,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ButtonModule,
    MessagesModule,
    InputTextModule,
    PasswordModule,
    ReactiveFormsModule,
    DataTableModule,
    SharedModule,
    DialogModule,
    AppRoutingModule,
    ConfirmDialogModule,
    TooltipModule,
    DropdownModule,
    GrowlModule,
    FileUploadModule,
    CheckboxModule,
    ChartModule,
    RadioButtonModule
  ],
  providers: [ProductService, Dataservice, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
