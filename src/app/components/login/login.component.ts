import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  isLoading : boolean =  false;
  errMessege : string = '';

  constructor( private _Router:Router , private _AuthService:AuthService,private _FormBuilder:FormBuilder ){}

  // setting the register object

  loginForm: FormGroup = this._FormBuilder.group( 
    {
      
      email:[
        '',
        [ Validators.required , Validators.email ],
      ],
      password:[
        '',
        [ Validators.required , Validators.pattern(/^[A-Za-z0-9_@]{6,}$/) ],
      ]
    }
);



  // passing the object to the api
  handleForm():void{
    const userData = this.loginForm.value;
    this.isLoading = true;
    if(this.loginForm.valid === true){
      this._AuthService.loginApi(userData).subscribe({
        next : (response)=>{
          if(response.message == 'success'){
            
            localStorage.setItem('eToken',response.token);
            this._AuthService.decodeUser();

          this.isLoading = false;    

            this._Router.navigate( [ "/home" ] );
        }
        },
        error : (err)=>{
          this.isLoading = false;
          this.errMessege = err.error.message;
        }
      })
    }
    
  }

}
