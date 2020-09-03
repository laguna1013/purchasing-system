import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';
import { HeaderComponent } from './layouts/header/header.component';
import { MenuComponent } from './layouts/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { FeatherIconDirective } from './directives/feather-icon.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    FeatherIconDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    appRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
