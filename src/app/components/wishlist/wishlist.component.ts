import { Component, OnInit,Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistService } from 'src/app/core/services/wishlist.service';
import { Product } from 'src/app/core/interfaces/product';
import { ToastEvokeService } from '@costlydeveloper/ngx-awesome-popup';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit{
  allProducts:Product[] = [];

  wishListData:string[] = [];

  constructor(private _WishlistService:WishlistService,
    private toastEvokeService: ToastEvokeService,
    private _Renderer2:Renderer2,
    private _CartService:CartService
    ){}

  ngOnInit(): void {
    this._WishlistService.getWishList().subscribe({
      next:(res)=>{
        this.allProducts = res.data;
        const newData = res.data.map( (item:any)=>item._id );
        this.wishListData = newData;
        
      }
    })

  }

  addFav(prodId:string|undefined){
    this._WishlistService.addToWishList(prodId).subscribe({
      next:(res)=>{

        this.toastEvokeService.success("Success" , res.message).subscribe();
        this.wishListData = res.data

      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

  removeFav(id:string|undefined):void{
    this._WishlistService.removeWish(id).subscribe({
      next:(res)=>{
        this.toastEvokeService.success("Success" , res.message).subscribe();
        this.wishListData = res.data;

        // two way to remove item from wishlist
        // 1----------
        // this._WishlistService.getWishList().subscribe({
        //   next:(res)=>{
        //     this.allProducts = res.data;
        //   },
        //   error:(err)=>{
        //     console.log(err);
        //   }
        // })

        // 2------------

        const newProdData = this.allProducts.filter( (item:any)=>this.wishListData.includes(item._id) );
        this.allProducts = newProdData;

      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }


  addProduct(id:any , element:HTMLButtonElement):void{

    this._Renderer2.setAttribute(element , "disabled" , "true");
    this._CartService.addToCart(id).subscribe({
      next:(res) =>{
        
        this.toastEvokeService.success("Success" , res.message).subscribe();
        this._Renderer2.removeAttribute(element , "disabled");

        this._CartService.cartNumber.next(res.numOfCartItems)

          
      },
      error:(err) =>{
        this._Renderer2.removeAttribute(element , "disabled");
      },
    })
  }

  

}
