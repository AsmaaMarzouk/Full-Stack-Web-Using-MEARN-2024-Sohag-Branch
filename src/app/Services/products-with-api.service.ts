import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../Models/iproduct';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsWithApiService {

  // inject =>HttpClient
  constructor(private httpclient:HttpClient) { }
  getAllProducts():Observable<Iproduct[]>{
  //  return this.httpclient.get<Iproduct[]>("http://localhost:3000/products")
   return this.httpclient.get<Iproduct[]>(`${environment.BaseApiURL}/products`);
  }

  getProductByID(prodID:number):Observable<Iproduct>{
    return this.httpclient.get<Iproduct>(`${environment.BaseApiURL}/products/${prodID}`);
  }

  // query string
  searchWithMaterial(mat:string):Observable<Iproduct[]>{

    return this.httpclient.get<Iproduct[]>(`${environment.BaseApiURL}/products?Material=${mat}`)
  }

}
