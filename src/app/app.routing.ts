import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { MenuComponent } from './layouts/menu/menu.component';
import { OrderComponent } from './user/order/order.component';
import { HistoryComponent } from './user/history/history.component';
import { ItemComponent } from './admin/item/item.component';
import { AddComponent } from './admin/item/add/add.component';
import { EditComponent } from './admin/item/edit/edit.component';

const routes: Routes = [
  { path: 'order', component: OrderComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'item', component: ItemComponent },
  { path: 'item/add', component: AddComponent },
  { path: 'item/edit/:id', component: EditComponent }
];

export const appRoutingModule = RouterModule.forRoot(routes);
