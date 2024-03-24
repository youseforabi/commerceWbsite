import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  baseUrl : string = "https://ecommerce.routemisr.com"

  constructor(private _HttpClient:HttpClient) { }

  getProductsApi(pageNum:number=1 ):Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}/api/v1/products?page=${pageNum}`);
  }

  getCategoriesApi():Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}/api/v1/categories`);
  }

  getProductDetails(id:string|null):Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}/api/v1/products/${id}`);
  }

  getCategory():Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}/api/v1/categories`);
 
  }

  getCategoryDetails(id:string|null):Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}/api/v1/categories/${id}`);
 
  }
  getAllOrders(id:string):Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}/api/v1/orders/user/${id}`)
  }



  
}
