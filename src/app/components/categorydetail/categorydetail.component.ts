import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { Category } from 'src/app/core/interfaces/category';

@Component({
  selector: 'app-categorydetail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorydetail.component.html',
  styleUrls: ['./categorydetail.component.scss']
})
export class CategorydetailComponent implements OnInit {

  constructor( private ActivatedRoute: ActivatedRoute , private _ProductService: ProductService ){}
  categoryId : string | null = 'null';
  categoryDetails:Category = {}
  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe({
      next:(param)=> {
          this.categoryId = param.get('id');
      },
    })

    this._ProductService.getCategoryDetails(this.categoryId).subscribe({
      next:(res)=>{
        this.categoryDetails = res.data        
      }
    })
      
  }



}
