import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-allorders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.scss']
})
export class AllordersComponent implements OnInit {

  userId:string = '';
  products :any[]=[];
  userOrders :any ={};
  constructor( private _AuthService:AuthService, private _ProductService:ProductService) { }

  ngOnInit(): void {
      this._AuthService.decodeUser();
      this.userId = this._AuthService.userId;
      console.log(this.userId);


      this._ProductService.getAllOrders(this.userId).subscribe({
        next:(res)=>{
          this.products = res;
          this.userOrders = this.products[this.products.length -1];
          console.log(this.userOrders.cartItems);
          
          
        },
        error:(err)=>{
          console.log(err);
          
        }
      })
  }
  


  

}

