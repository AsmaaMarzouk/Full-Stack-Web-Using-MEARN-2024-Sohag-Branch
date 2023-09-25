import { Component } from '@angular/core';
import { Iproduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-products-parent',
  templateUrl: './products-parent.component.html',
  styleUrls: ['./products-parent.component.scss']
})
export class ProductsParentComponent {
listFilter:string = '';

//
cart:Iproduct[]=[];
CartFunc(newprd:Iproduct){
// console.log("Recevied To Parent: "+newprd);
this.cart.push(newprd);

// console.log(this.cart);


}
}
