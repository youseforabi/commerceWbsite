import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  cartNumber : BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(private _HttpClient:HttpClient) { }
  baseUrl :string = `https://ecommerce.routemisr.com/api/v1/`

 


  addToCart(prodId:string):Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}cart` , 
    {
      productId: prodId
    }
    );
  }

  getCartUser():Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}cart`);
  }

  removerCartItem(prodId:string):Observable<any>{
    return this._HttpClient.delete(`${this.baseUrl}cart/${prodId}`);
  }

  updateCartCount(prodId:string , countNum:number):Observable<any>{
    return this._HttpClient.put(`${this.baseUrl}cart/${prodId}`,
    {
      count:countNum
    },
    
    );
  }

  clearCart():Observable<any>{
    return this._HttpClient.delete(`${this.baseUrl}cart`);
  }

  chechOut(cartID:string|null , orderInfo:object):Observable<any>
  {
    return this._HttpClient.post(`${this.baseUrl}orders/checkout-session/${cartID}?url=https://commerce-wbsite.vercel.app`,
    
      {
        shippingAddress: orderInfo
      },
      
    )
  }
}
