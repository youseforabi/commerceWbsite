import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [CommonModule , RouterLink , RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss']
})
export class NavBlankComponent implements OnInit{
  curtNumber : number = 0;

  constructor( private _Router:Router , private _CartService:CartService , private _Renderer2:Renderer2){}



  @ViewChild('navBar') navElement!:ElementRef;

  @HostListener(' window:scroll ')
  onScroll():void{
    if(scrollY > 300){
      this._Renderer2.addClass(this.navElement.nativeElement,'px-5')

    }else{
      this._Renderer2.removeClass(this.navElement.nativeElement,'px-5')

    }
  }

  ngOnInit(): void {
      this._CartService.cartNumber .subscribe({
        next:( data )=>{
          
          this.curtNumber = data; 

          
        }
      });
      this._CartService.getCartUser().subscribe({
        next:( response )=>{
          this.curtNumber = response.numOfCartItems;
        }
      })
  }


  signOut():void{
    localStorage.removeItem('eToken');

    this._Router.navigate(['/login']);

  }

}
