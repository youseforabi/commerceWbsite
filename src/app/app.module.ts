import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  NgxAwesomePopupModule,
  DialogConfigModule,
  ConfirmBoxConfigModule,
  ToastNotificationConfigModule
} from '@costlydeveloper/ngx-awesome-popup';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyhttpInterceptor } from './core/interceptors/myhttp.interceptor';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,NgxAwesomePopupModule.forRoot(), DialogConfigModule.forRoot(), 
    ConfirmBoxConfigModule.forRoot(), 
    ToastNotificationConfigModule.forRoot() ,NgxSpinnerModule,
    AppRoutingModule,HttpClientModule,BrowserModule,BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS , useClass:MyhttpInterceptor , multi : true },
    { provide: HTTP_INTERCEPTORS , useClass:LoadingInterceptor , multi : true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
