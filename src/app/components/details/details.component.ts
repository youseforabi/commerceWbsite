import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastEvokeService } from '@costlydeveloper/ngx-awesome-popup';



@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule , CarouselModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  productId! : string|null;
  productDetails: any = {};

  constructor( private _ActivatedRoute:ActivatedRoute ,
     private _ProductService:ProductService,
    private toastEvokeService: ToastEvokeService,
     private _Renderer2:Renderer2,
     private _CartService:CartService
     ){}


  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:( params )=>{
        this.productId = params.get('id');
      }
    })
      
    this._ProductService.getProductDetails(this.productId).subscribe({
      next:( {data} ) =>{
        console.log(data);
        this.productDetails = data ;
        
          
      },
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

  productDetailOption: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items : 1,
    nav: true
  }

}
