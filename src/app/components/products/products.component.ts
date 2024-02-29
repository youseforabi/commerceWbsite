import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/core/interfaces/product';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastEvokeService } from '@costlydeveloper/ngx-awesome-popup';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule , RouterLink ,NgxPaginationModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent  implements OnInit {
  allProducts:Product[] = [];

  pageSize:number = 0; //limit 
  currentPage:number = 1;
  total :number = 0;


  constructor(private _ProductService:ProductService , private _Renderer2:Renderer2 ,
    private _CartService:CartService,
    private toastEvokeService: ToastEvokeService ,
    ){}

  ngOnInit(): void {

    this._ProductService.getProductsApi().subscribe({
      next : (res)=>{

        this.allProducts = res.data;
        this.pageSize = res.metadata.limit;   
        this.currentPage = res.metadata.currentPage;   
        this.total = res.results; 
      },
      error : (err) =>{
        console.log(err);
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

  pageChanged(event:any):void{
    this._ProductService.getProductsApi(event).subscribe({
      next : (res)=>{

        this.allProducts = res.data;
        this.pageSize = res.metadata.limit;   
        this.currentPage = res.metadata.currentPage;   
        this.total = res.results; 
      },
      error : (err) =>{
        console.log(err);
      },
    })    
  }

}
