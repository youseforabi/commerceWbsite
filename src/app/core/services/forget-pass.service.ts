import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ForgetPassService {

  baseUrl : string = "https://ecommerce.routemisr.com" 
  constructor(private _HttpClient:HttpClient) { }

  forgetPasswordApi(userEmail:object):Observable<any>{
    return this._HttpClient.post(`${this.baseUrl}/api/v1/auth/forgotPasswords`,userEmail)
  }

  resetCodeApi(resetcode:object):Observable<any>{
    return this._HttpClient.post(`${this.baseUrl}/api/v1/auth/verifyResetCode`,resetcode)
  }

  resetPassApi(resetPass:object):Observable<any>{
    return this._HttpClient.put(`${this.baseUrl}/api/v1/auth/resetPassword`,resetPass)
  }

}
