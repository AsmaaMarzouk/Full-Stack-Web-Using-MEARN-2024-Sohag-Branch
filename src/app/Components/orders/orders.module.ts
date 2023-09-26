import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackOrderComponent } from './track-order/track-order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {path:'TrackOrder',component: TrackOrderComponent,title:"Track order page"},
  {path:'OrderDetails',component: OrderDetailsComponent,title:"Order details page"}
];

@NgModule({
  declarations: [
    TrackOrderComponent,
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OrdersModule { }
