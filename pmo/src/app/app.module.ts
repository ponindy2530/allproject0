import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/Rx';
import { AppRoutingModule } from './app-routing.module';
import { ProductService } from './shared/service/service';


import { AppComponent } from './app.component';
import { PmoComponent } from './pmo/pmo/pmo.component';

@NgModule({
  declarations: [
    AppComponent,
    PmoComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
