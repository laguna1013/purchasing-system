import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';
import { HeaderComponent } from './layouts/header/header.component';
import { MenuComponent } from './layouts/menu/menu.component';
import { FeatherIconDirective } from './directives/feather-icon.directive';
import { OrderComponent } from './user/order/order.component';
import { HistoryComponent } from './user/history/history.component';
import { ItemComponent } from './admin/item/item.component';
import { AddComponent } from './admin/item/add/add.component';
import { EditComponent } from './admin/item/edit/edit.component';
import { HttpClientModule } from '@angular/common/http';

import { NgxDropzoneModule } from 'ngx-dropzone';
import { LoginComponent } from './auth/login/login.component';
import { UnauthorizedComponent } from './auth/unauthorized/unauthorized.component';
import { PageNotFoundComponent } from './auth/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { LoaderComponent } from './fragments/loader/loader.component';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FeatherIconDirective,
    OrderComponent,
    HistoryComponent,
    ItemComponent,
    AddComponent,
    EditComponent,
    LoginComponent,
    UnauthorizedComponent,
    PageNotFoundComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    appRoutingModule,
    NgxDropzoneModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
