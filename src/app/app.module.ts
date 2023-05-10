import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './core';
import { SharedHeaderModule, SharedFooterModule, SharedAlertModule } from '@mean/shared';
import { LoginComponent, RegisterComponent, HomeComponent } from '@mean/public';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { FileUploadModule } from 'primeng/fileupload';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { UriConstants } from './utils';
const config: SocketIoConfig = { url: UriConstants.HOST, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedHeaderModule,
    SharedFooterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    RatingModule,
    InputTextareaModule,
    SharedAlertModule,
    OverlayPanelModule,
    FileUploadModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
