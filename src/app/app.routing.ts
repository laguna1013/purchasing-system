import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { MenuComponent } from './layouts/menu/menu.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
];

export const appRoutingModule = RouterModule.forRoot(routes);
