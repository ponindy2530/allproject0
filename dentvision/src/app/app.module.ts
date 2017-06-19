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
import { KeysPipe } from './shared/pipe/keys.pipe';
import { SumsPipe } from './shared/pipe/sums.pipe';

import { AppComponent } from './app.component';
import { LoginComponent } from './shared/login/login.component';
import { LogoutComponent } from './shared/logout/logout.component';
import { GendentComponent } from './dent/gendent/gendent.component';
import { RpdentComponent } from './dent/rpdent/rpdent.component';
import { GentantaComponent } from './dent/gentanta/gentanta.component';


@NgModule({
  declarations: [
    AppComponent,
    KeysPipe,
    SumsPipe,
    LoginComponent,
    LogoutComponent,
    GendentComponent,
    RpdentComponent,
    GentantaComponent

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
