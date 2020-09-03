import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { MenuComponent } from './layouts/menu/menu.component';
import { OrderComponent } from './user/order/order.component';
const routes: Routes = [
  { path: '', component: OrderComponent },
];

export const appRoutingModule = RouterModule.forRoot(routes);
