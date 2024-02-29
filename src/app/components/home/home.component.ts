import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/core/interfaces/product';
import { Category } from 'src/app/core/interfaces/category';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastEvokeService } from '@costlydeveloper/ngx-awesome-popup';
import { SearchPipe } from 'src/app/core/pipe/search.pipe';
import { FormsModule } from '@angular/forms';
import { WishlistService } from 'src/app/core/services/wishlist.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule , CarouselModule ,RouterLink ,SearchPipe , FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  allProducts:Product[] = [];

  allCategories:Category[] = [];
  wishListData :string[] = []

  term:string = "";

  constructor(private _ProductService:ProductService , private _CartService:CartService,
    private toastEvokeService: ToastEvokeService,
    private _Renderer2:Renderer2,
    private _WishlistService:WishlistService
    ){}

  
  ngOnInit(): void {

    this._ProductService.getProductsApi().subscribe({
      next : (res)=>{

        this.allProducts = res.data;

      },
      error : (err) =>{
        console.log(err);
      },
    })

    this._ProductService.getCategoriesApi().subscribe({
      next : (res)=>{
        this.allCategories = res.data;
        
      },
      error : (err) =>{
        console.log(err);
      }
    })

    this._WishlistService.getWishList().subscribe({
      next:(res)=>{
        const newData = res.data.map( (item:any)=>item._id );
        this.wishListData = newData;
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
        this.wishListData = res.data
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    // autoplay:true,
    // autoplaySpeed:1500,
    // autoplayTimeout:2000,
    
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }


  bigOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    // autoplay:true,
    // autoplaySpeed:1500,
    // autoplayTimeout:2000,
    items:1,
    
   
    nav: false
  }

}
