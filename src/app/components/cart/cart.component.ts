import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/core/services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  cartDetails :any = null;
  constructor( private _CartService :CartService , private _Renderer2:Renderer2){}

  ngOnInit(): void {
      this._CartService.getCartUser().subscribe({
        next:(response)=>{
          console.log(response);
          
          this.cartDetails = response.data;
          
          
        },
        error:(response)=>{
          console.log(response);
          
          
        }
      })
  }

  removeItem(id:string,btnRemove:HTMLButtonElement):void{
    this._Renderer2.setAttribute(btnRemove,"disabled","true");
    this._CartService.removerCartItem(id).subscribe({
      next:(response) =>{

        this.cartDetails = response.data;
        this._Renderer2.removeAttribute(btnRemove,"disabled");
        this._CartService.cartNumber.next(response.numOfCartItems)

        
      },
      error:(error) =>{
        this._Renderer2.removeAttribute(btnRemove,"disabled");
        
      }
    })

  }

  changeCount(count: number , id :string , btnPlus:HTMLButtonElement ,btnMinus:HTMLButtonElement):void{
    if(count >= 1 ){
      this._Renderer2.setAttribute(btnPlus,"disabled","true");
      this._Renderer2.setAttribute(btnMinus,"disabled","true");
  
      this._CartService.updateCartCount(id , count).subscribe({
  
        next:(res)=>{
        this._Renderer2.removeAttribute(btnPlus,"disabled");
        this._Renderer2.removeAttribute(btnMinus,"disabled");
  
          this.cartDetails = res.data;
        },
        error:(err)=>{
          this._Renderer2.removeAttribute(btnPlus,"disabled");
          this._Renderer2.removeAttribute(btnMinus,"disabled");
  
          console.log(err);
          
        },
      });
    
    }

  }
  clear():void{
    this._CartService.clearCart().subscribe({
      next:(res)=>{
        if(res.message == "success"){
          this.cartDetails = null;
          this._CartService.cartNumber.next(0)

        }
      }
    })
  }
}
