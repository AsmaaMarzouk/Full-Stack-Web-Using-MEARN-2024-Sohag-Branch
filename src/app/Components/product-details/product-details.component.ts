import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  currentProductID:number=0;
  product:Iproduct|undefined=undefined;
  productsIDSList:number[]=[];
  currentPrdIndex:number=0;
constructor(private activatedRoute: ActivatedRoute,private prdService:ProductsService,private router:Router){}
  ngOnInit(): void {


    // convert to number
    // parseInt , Number , +
    // this.currentProductID=(this.activatedRoute.snapshot.paramMap.get('prodID'))?Number(this.activatedRoute.snapshot.paramMap.get('prodID')):0;
    // console.log(this.currentProductID);

    // this.product=this.prdService.getProductByID(this.currentProductID);
    // console.log(this.product);

    this.productsIDSList=this.prdService.getProductIDSList();
    // console.log(this.productsIDSList);

    this.activatedRoute.paramMap.subscribe(paramMap=>{

      this.currentProductID=(paramMap.get('prodID'))?Number(paramMap.get('prodID')):0;

      let foundedProduct = this.prdService.getProductByID(this.currentProductID);
      if(foundedProduct){
        this.product=foundedProduct;
      }
      else{
        alert("Not Found Product");

        this.router.navigate(['**']);
        // this.router.navigate(['/Products']);
      }
    })


  }

  backFunc(){

    this.router.navigate(['/Products'])
  }
  previousFunc(){

    this.currentPrdIndex=this.productsIDSList.indexOf(this.currentProductID);
    // console.log(this.currentPrdIndex);

    // arr[2]
    this.router.navigate(['/ProductDetails',this.productsIDSList[--this.currentPrdIndex]]);

  }
  nextFunc(){
    this.currentPrdIndex=this.productsIDSList.indexOf(this.currentProductID);
    this.router.navigate(['/ProductDetails',this.productsIDSList[++this.currentPrdIndex]])
  }
}
