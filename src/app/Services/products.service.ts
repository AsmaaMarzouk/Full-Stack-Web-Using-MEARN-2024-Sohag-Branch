import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 private productList: Iproduct[];
  constructor() {
    this.productList = [
      {
        id: 2,
        name: 'Solo Wooden Top Coffee Table',
        price: 5000,
        quantity: 0,
        categoryID: 1,
        Material: 'Wood',
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/163906871-163906871-HC13042022_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
          details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi odit assumenda saepe temporibus necessitatibus delectus a animi aliquam dolorem, sint, reiciendis dolor explicabo perspiciatis maxime molestias blanditiis quidem. Dolorem, magni! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum unde soluta laboriosam! Quae provident qui culpa. Veritatis adipisci nulla, vero ipsam quam, delectus, et possimus numquam facilis accusantium consequatur voluptatibus.'
      },
      {
        id: 5,
        name: 'Trixia 4-Seater Glass Dining Table',
        price: 30000,
        quantity: 8,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 1,
        Material: 'Metal',
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi odit assumenda saepe temporibus necessitatibus delectus a animi aliquam dolorem, sint, reiciendis dolor explicabo perspiciatis maxime molestias blanditiis quidem. Dolorem, magni! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum unde soluta laboriosam! Quae provident qui culpa. Veritatis adipisci nulla, vero ipsam quam, delectus, et possimus numquam facilis accusantium consequatur voluptatibus.'
      },
      {
        id: 25,
        name: 'Gasha Marble Top Side Table',
        price: 14000,
        quantity: 10,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/160079085-160079085-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 1,
        Material: 'Metal',
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi odit assumenda saepe temporibus necessitatibus delectus a animi aliquam dolorem, sint, reiciendis dolor explicabo perspiciatis maxime molestias blanditiis quidem. Dolorem, magni! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum unde soluta laboriosam! Quae provident qui culpa. Veritatis adipisci nulla, vero ipsam quam, delectus, et possimus numquam facilis accusantium consequatur voluptatibus.'
      },
      {
        id: 7,
        name: 'Ventura Fabric Dining Chair',
        price: 1500,
        quantity: 2,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/161257427-161257427-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 2,
        Material: 'Upholstered Seating',
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi odit assumenda saepe temporibus necessitatibus delectus a animi aliquam dolorem, sint, reiciendis dolor explicabo perspiciatis maxime molestias blanditiis quidem. Dolorem, magni! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum unde soluta laboriosam! Quae provident qui culpa. Veritatis adipisci nulla, vero ipsam quam, delectus, et possimus numquam facilis accusantium consequatur voluptatibus.'
      },
      {
        id: 17,
        name: 'Ventura Fabric Dining Chair',
        price: 1500,
        quantity: 1,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/162640761-162640761-HC23092020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 2,
        Material: 'Upholstered Seating',
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi odit assumenda saepe temporibus necessitatibus delectus a animi aliquam dolorem, sint, reiciendis dolor explicabo perspiciatis maxime molestias blanditiis quidem. Dolorem, magni! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum unde soluta laboriosam! Quae provident qui culpa. Veritatis adipisci nulla, vero ipsam quam, delectus, et possimus numquam facilis accusantium consequatur voluptatibus.'
      },
      {
        id: 9,
        name: 'Boston Study Chair',
        price: 1000,
        quantity: 10,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/159671547-159671547-HCB1226OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 2,
        Material: 'Upholstered Seating',
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi odit assumenda saepe temporibus necessitatibus delectus a animi aliquam dolorem, sint, reiciendis dolor explicabo perspiciatis maxime molestias blanditiis quidem. Dolorem, magni! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum unde soluta laboriosam! Quae provident qui culpa. Veritatis adipisci nulla, vero ipsam quam, delectus, et possimus numquam facilis accusantium consequatur voluptatibus.'
      },
      {
        id: 10,
        name: 'Coby Extendable TV Unit',
        price: 13000,
        quantity: 0,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 3,
        Material: 'Wood',
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi odit assumenda saepe temporibus necessitatibus delectus a animi aliquam dolorem, sint, reiciendis dolor explicabo perspiciatis maxime molestias blanditiis quidem. Dolorem, magni! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum unde soluta laboriosam! Quae provident qui culpa. Veritatis adipisci nulla, vero ipsam quam, delectus, et possimus numquam facilis accusantium consequatur voluptatibus.'
      },
      {
        id: 15,
        name: 'Accent TV Unit',
        price: 36999,
        quantity: 4,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 3,
        Material: 'MDF',
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi odit assumenda saepe temporibus necessitatibus delectus a animi aliquam dolorem, sint, reiciendis dolor explicabo perspiciatis maxime molestias blanditiis quidem. Dolorem, magni! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum unde soluta laboriosam! Quae provident qui culpa. Veritatis adipisci nulla, vero ipsam quam, delectus, et possimus numquam facilis accusantium consequatur voluptatibus.'
      },
      {
        id: 55,
        name: 'Plymouth TV Unit',
        price: 36999,
        quantity: 3,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 3,
        Material: 'wood',
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi odit assumenda saepe temporibus necessitatibus delectus a animi aliquam dolorem, sint, reiciendis dolor explicabo perspiciatis maxime molestias blanditiis quidem. Dolorem, magni! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum unde soluta laboriosam! Quae provident qui culpa. Veritatis adipisci nulla, vero ipsam quam, delectus, et possimus numquam facilis accusantium consequatur voluptatibus.'
      },
    ];
  }

  getAllPrds():Iproduct[]{
    return this.productList;
  }

  performFilter(filterValue: string): Iproduct[] {
    filterValue = filterValue.toLowerCase();
    return this.productList.filter((product: Iproduct) =>
      product.name.toLowerCase().includes(filterValue)
    );
  }
  getProductByID(prdID:number):Iproduct|undefined{
    return this.productList.find(prd=>prd.id==prdID);

  }
  getProductIDSList():number[]{
    return this.productList.map(prd=>prd.id)
  }
}
