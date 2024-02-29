import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit{

  cartId : string|null= ''
constructor(private _ActivatedRoute:ActivatedRoute , private _CartService: CartService){}


  orderForm:FormGroup = new FormGroup({
    details:new FormControl(''),
    phone:new FormControl(''),
    city:new FormControl(''),
  })

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(param)=>{

        this.cartId = param.get('id');
        
      },
      error:(err)=>{
        console.log(err);
      }
    })
      
  }

  handleForm():void{
    this._CartService.chechOut(this.cartId , this.orderForm.value).subscribe({
      next:(response)=> {
  
       if(response.status == 'success'){
        window.open(response.session.url)
        
       }
          
      },
   
    })
    
  }

}
