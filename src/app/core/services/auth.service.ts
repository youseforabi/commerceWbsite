import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userInfo:any;

  baseUrl : string = 'https://ecommerce.routemisr.com'


  constructor(private _HttpClient:HttpClient) { }

  registerApi(userData : object):Observable<any>
  {
    return this._HttpClient.post(`${this.baseUrl}/api/v1/auth/signup` , userData)
  }

  loginApi(userData : object):Observable<any>
  {
    return this._HttpClient.post(`${this.baseUrl}/api/v1/auth/signin` , userData)
  }

  decodeUser():void{
    const encode = localStorage.getItem('eToken');
    if( encode !== null ){
      const decode = jwtDecode(encode);
      this.userInfo = decode;
    }

  }
  

}
