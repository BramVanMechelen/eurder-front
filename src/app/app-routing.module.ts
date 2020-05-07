import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemsComponent} from './items/items.component';
import {ItemDetailComponent} from './items/item-detail/item-detail.component';
import {CreateItemComponent} from './items/create-item/create-item.component';
import {CustomersComponent} from './customers/customers.component';
import {CreateCustomerComponent} from './customers/create-customer/create-customer.component';

const routes: Routes = [
  { path: '', redirectTo: '/items', pathMatch: 'full'},
  { path: 'items', component: ItemsComponent },
  { path: 'items/:id', component: ItemDetailComponent},
  { path: 'itemcreator' , component: CreateItemComponent},
  { path: 'customers', component: CustomersComponent},
  { path: 'customercreator', component: CreateCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
