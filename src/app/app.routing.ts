import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { MenuComponent } from './layouts/menu/menu.component';
import { OrderComponent } from './user/order/order.component';
import { HistoryComponent } from './user/history/history.component';
import { ItemComponent } from './admin/item/item.component';
import { AddComponent } from './admin/item/add/add.component';
import { EditComponent } from './admin/item/edit/edit.component';
import { LoginComponent } from './auth/login/login.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'order', component: OrderComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'item', component: ItemComponent },
  { path: 'item/add', component: AddComponent },
  { path: 'item/edit/:id', component: EditComponent },
  { path: 'login', component: LoginComponent }
];

export const appRoutingModule = RouterModule.forRoot(routes);
