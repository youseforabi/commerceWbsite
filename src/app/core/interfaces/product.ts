export interface Product {
    images: string[];
   
    title: string;
    category: Categoryproduct;
    price: number;
    imageCover: string;
    
    ratingsAverage: number;
    _id?:string;
    
  }
  
  export interface Categoryproduct {

    name: string

  }