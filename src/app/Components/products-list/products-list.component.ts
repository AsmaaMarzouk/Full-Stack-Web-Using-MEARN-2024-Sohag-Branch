import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Iproduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  productList: Iproduct[];
  flagImage: boolean = true;
  userName: string = 'Ahmed';
  productsWithFiltered: Iproduct[] = [];
  @Input() set listFilterInChild(value: string) {
    console.log('in setter: ', value);

    this.productsWithFiltered = this.performFilter(value);
    //  console.log(this.productsWithFiltered);
  }

  // Day3
  date1: Date = new Date();

  // #######################
  // 1,2,3
  // table => 1 , chairs => 2 , tv units =>3
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
      },
      // {id:1, name: 'Odense 8-Seater Top Dining Table', price: 21500, quantity:0, PrdimgURL:'https://media.homecentre.com/i/homecentre/163650487-163650487-HC18082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:1,Material:'Engineered Wood'},
      {
        id: 5,
        name: 'Trixia 4-Seater Glass Dining Table',
        price: 30000,
        quantity: 8,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 1,
        Material: 'Metal',
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
      },
    ];
  }
  ngOnInit(): void {
    this.productsWithFiltered = this.productList;
  }

  toggleImage() {
    this.flagImage = !this.flagImage;
  }
  // Day2
  performFilter(filterValue: string): Iproduct[] {
    filterValue = filterValue.toLowerCase();
    return this.productList.filter((product: Iproduct) =>
      product.name.toLowerCase().includes(filterValue)
    );
  }
  // Day4
  @Output() newPrdEvent: EventEmitter<Iproduct> = new EventEmitter<Iproduct>();
  addToCart(product: Iproduct) {
    // console.log(product);

    // fire event
    this.newPrdEvent.emit(product);
  }
}
