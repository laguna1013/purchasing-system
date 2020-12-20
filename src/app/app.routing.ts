import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { MenuComponent } from './layouts/menu/menu.component';
import { OrderComponent } from './user/order/order.component';
import { HistoryComponent } from './user/history/history.component';
import { ItemComponent } from './admin/item/item.component';
import { AddComponent } from './admin/item/add/add.component';
import { ManageOrderComponent } from './admin/manage-order/manage-order.component';
import { EditComponent } from './admin/item/edit/edit.component';
import { LoginComponent } from './auth/login/login.component';
import { UnauthorizedComponent } from './auth/unauthorized/unauthorized.component';
import { PageNotFoundComponent } from './auth/page-not-found/page-not-found.component';
import { AuthGuard } from './guards/auth.guard';


import { ItemsComponent } from './admin/items/items.component';
import { AddItemsComponent } from './admin/items/add-items/add-items.component';
import { EditItemsComponent } from './admin/items/edit-items/edit-items.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { DetailComponent } from './admin/orders/detail/detail.component';
import { OverviewComponent } from './admin/overview/overview.component';
import { HistoryDetailComponent } from './user/history/history-detail/history-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'order', component: OrderComponent, canActivate: [AuthGuard], data: { roles: ['cooperator', 'franchisee'] } },
  { path: 'history', component: HistoryComponent, canActivate: [AuthGuard], data: { roles: ['cooperator', 'franchisee'] } },
  { path: 'history/detail/:id', component: HistoryDetailComponent, canActivate: [AuthGuard], data: { roles: ['cooperator', 'franchisee'] } },
  { path: 'item', component: ItemComponent, canActivate: [AuthGuard], data: { roles: ['admin'] } },
  { path: 'item/add', component: AddComponent, canActivate: [AuthGuard], data: { roles: ['admin'] } },
  { path: 'item/edit/:id', component: EditComponent, canActivate: [AuthGuard], data: { roles: ['admin'] } },
  { path: 'manage-order', component: ManageOrderComponent, canActivate: [AuthGuard], data: { roles: ['admin'] } },

  { path: 'items', component: ItemsComponent, canActivate: [AuthGuard], data: { roles: ['admin'] } },
  { path: 'items/add-item', component: AddItemsComponent, canActivate: [AuthGuard], data: { roles: ['admin'] } },
  { path: 'items/edit-item/:id', component: EditItemsComponent, canActivate: [AuthGuard], data: { roles: ['admin'] } },
  { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard], data: { roles: ['admin'] } },
  { path: 'orders/detail/:id', component: DetailComponent, canActivate: [AuthGuard], data: { roles: ['admin'] } },
  { path: 'overview', component: OverviewComponent, canActivate: [AuthGuard], data: { roles: ['admin'] } },


  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const appRoutingModule = RouterModule.forRoot(routes);
