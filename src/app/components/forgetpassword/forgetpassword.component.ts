import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup , FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import { ForgetPassService } from 'src/app/core/services/forget-pass.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent {

  constructor(private _ForgetPassService:ForgetPassService , private _Router:Router    ){}
  stepOne:boolean = true;
  stepTwo:boolean = false;
  stepThree:boolean = false;
   
  userMsg :string ='';

  forgetForm : FormGroup = new FormGroup({
    email : new FormControl('')
  });

  verifyForm :FormGroup = new FormGroup({
    resetCode : new FormControl('')
  });

  resetPassForm : FormGroup = new FormGroup({
    email : new FormControl(''),

    newPassword : new FormControl('')
  });



  forgetPassword():void{
    let userEmail = this.forgetForm.value;
    this._ForgetPassService.forgetPasswordApi(userEmail).subscribe({
      next:(response)=>{
        this.userMsg = response.message;

        this.stepOne = false;
        this.stepTwo  = true;
        this.stepThree  = false;

        
      },
      error:(err)=> {
          this.userMsg = err.error.message;
      },
    })

  }


  verifyCode():void{
    let theCode = this.verifyForm.value;
    this._ForgetPassService.resetCodeApi(theCode).subscribe({
      next:(res)=>{
        this.userMsg = res.status;

        this.stepOne = false;
        this.stepTwo  = false;
        this.stepThree  = true;
        
      },
      error:(err)=>{
        this.userMsg = err.error.message;
      }
    })
  }


 

  resetPassword():void{
    let resetForm = this.resetPassForm.value;
    this._ForgetPassService.resetPassApi(resetForm).subscribe({
      next:(res)=>{
        if(res.token){
          localStorage.setItem('eToken', res.token);
          this._Router.navigate(['/home']);
        }
        
      },
      error:(err)=>{
        this.userMsg = err.error.message;
      }

    })
  }

}
