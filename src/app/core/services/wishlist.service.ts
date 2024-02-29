import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  baseUrl :string = `https://ecommerce.routemisr.com/api/v1/`

  constructor( private _HttpClient:HttpClient ) { }


  addToWishList(id:string|undefined):Observable<any>{
    return this._HttpClient.post(`${this.baseUrl}wishlist`,
    {
      productId : id
    }
    )
  }

  getWishList():Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}wishlist`)
  }

  removeWish(id:string|undefined):Observable<any>{
    return this._HttpClient.delete(`${this.baseUrl}wishlist/${id}`)
  }
}
