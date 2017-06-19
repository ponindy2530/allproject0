import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import {CookieModule} from 'cookie';
import 'rxjs/Rx';
import { AppRoutingModule } from './app-routing.module';
import { ProductService } from './shared/service/service';
import { Dataservice } from './shared/service/dataservice';


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
import { ScmatiralPipe } from './shared/pipe/scmatiral.pipe';
import { ScmatiralPipe2 } from './shared/pipe/scmatiral.pipe';
import { ScmatiralPipe3 } from './shared/pipe/scmatiral.pipe';
import { ScmatiralPipe4 } from './shared/pipe/scmatiral.pipe';
import { SumsPipe } from './shared/pipe/scmatiral.pipe';

import { AppComponent } from './app.component';
import { LoginComponent } from './shared/login/login.component';
import { DashboardComponent } from './matiral/dashboard/dashboard.component';
import { LogoutComponent } from './shared/logout/logout.component';
import { AddnewComponent } from './matiral/addnew/addnew.component';
import { CompanyComponent } from './matiral/company/company.component';
import { RepairComponent } from './matiral/repair/repair.component';
import { PisComponent } from './matiral/pis/pis.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    DashboardComponent,
    AddnewComponent,
    ScmatiralPipe,
    ScmatiralPipe2,
    ScmatiralPipe3,
    ScmatiralPipe4,
    SumsPipe,
    CompanyComponent,
    RepairComponent,
    PisComponent

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
