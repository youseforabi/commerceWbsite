"use strict";(self.webpackChunkE_Commerce=self.webpackChunkE_Commerce||[]).push([[1],{4001:(N,u,n)=>{n.r(u),n.d(u,{HomeComponent:()=>O});var a=n(6814),m=n(5819),p=n(1120),t=n(4769);let g=(()=>{class i{transform(e,s){return e.filter(o=>o.title.toLowerCase().includes(s.toLowerCase()))}static#t=this.\u0275fac=function(s){return new(s||i)};static#e=this.\u0275pipe=t.Yjl({name:"search",type:i,pure:!0,standalone:!0})}return i})();var l=n(95),_=n(0),h=n(6286),f=n(4219),v=n(9196);function x(i,c){1&i&&t._UZ(0,"img",10)}function C(i,c){1&i&&t._UZ(0,"img",11)}function Z(i,c){1&i&&t._UZ(0,"img",12)}function T(i,c){if(1&i&&(t._UZ(0,"img",15),t.TgZ(1,"h2",16),t._uU(2),t.qZA()),2&i){const e=t.oxw().$implicit;t.Q6J("src",e.image,t.LSH)("alt",e.name)("title",e.name),t.xp6(2),t.Oqu(e.name)}}function b(i,c){1&i&&(t.ynx(0),t.YNc(1,T,3,4,"ng-template",4),t.BQk())}function w(i,c){if(1&i&&(t.TgZ(0,"section",13)(1,"owl-carousel-o",3),t.YNc(2,b,2,0,"ng-container",14),t.qZA()()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("options",e.customOptions),t.xp6(1),t.Q6J("ngForOf",e.allCategories)}}function A(i,c){if(1&i){const e=t.EpF();t.TgZ(0,"i",33),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().$implicit,r=t.oxw(2);return t.KtG(r.addFav(o._id))}),t.qZA()}}function H(i,c){if(1&i){const e=t.EpF();t.TgZ(0,"i",34),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().$implicit,r=t.oxw(2);return t.KtG(r.removeFav(o._id))}),t.qZA()}}const S=function(i){return["/productdetails",i]};function F(i,c){if(1&i){const e=t.EpF();t.TgZ(0,"div",21)(1,"div",22),t.YNc(2,A,1,0,"i",23),t.YNc(3,H,1,0,"i",24),t.TgZ(4,"header",25),t._UZ(5,"img",26),t.TgZ(6,"span",27),t._uU(7),t.qZA(),t.TgZ(8,"h1",28),t._uU(9),t.qZA(),t.TgZ(10,"div",29)(11,"span"),t._uU(12),t.qZA(),t.TgZ(13,"span"),t._UZ(14,"i",30),t._uU(15),t.qZA()()()(),t.TgZ(16,"footer")(17,"button",31,32),t.NdJ("click",function(){const r=t.CHM(e).$implicit,d=t.MAs(18),L=t.oxw(2);return t.KtG(L.addProduct(r._id,d))}),t._uU(19,"Add"),t.qZA()()()}if(2&i){const e=c.$implicit,s=t.oxw(2);t.xp6(2),t.Q6J("ngIf",!s.wishListData.includes(e._id)),t.xp6(1),t.Q6J("ngIf",s.wishListData.includes(e._id)),t.xp6(1),t.Q6J("routerLink",t.VKq(10,S,e._id)),t.xp6(1),t.Q6J("src",e.imageCover,t.LSH)("title",e.title)("alt",e.title),t.xp6(2),t.Oqu(e.category.name),t.xp6(2),t.Oqu(e.title.split(" ").slice(0,2).join(" ")),t.xp6(3),t.hij("",e.price,"EGP"),t.xp6(3),t.hij("",e.ratingsAverage," ")}}function J(i,c){if(1&i){const e=t.EpF();t.TgZ(0,"section")(1,"div",17)(2,"h2"),t._uU(3,"Popular Products"),t.qZA(),t.TgZ(4,"input",18),t.NdJ("ngModelChange",function(o){t.CHM(e);const r=t.oxw();return t.KtG(r.term=o)}),t.qZA(),t.TgZ(5,"div",19),t.YNc(6,F,20,12,"div",20),t.ALo(7,"slice"),t.ALo(8,"search"),t.qZA()()()}if(2&i){const e=t.oxw();t.xp6(4),t.Q6J("ngModel",e.term),t.xp6(2),t.Q6J("ngForOf",t.Dn7(7,2,t.xi3(8,6,e.allProducts,e.term),0,18))}}let O=(()=>{class i{constructor(e,s,o,r,d){this._ProductService=e,this._CartService=s,this.toastEvokeService=o,this._Renderer2=r,this._WishlistService=d,this.allProducts=[],this.allCategories=[],this.wishListData=[],this.term="",this.customOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!0,navSpeed:700,navText:["",""],responsive:{0:{items:1},400:{items:2},740:{items:3},940:{items:4}},nav:!1},this.bigOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!0,navSpeed:700,items:1,nav:!1}}ngOnInit(){this._ProductService.getProductsApi().subscribe({next:e=>{this.allProducts=e.data},error:e=>{console.log(e)}}),this._ProductService.getCategoriesApi().subscribe({next:e=>{this.allCategories=e.data},error:e=>{console.log(e)}}),this._WishlistService.getWishList().subscribe({next:e=>{const s=e.data.map(o=>o._id);this.wishListData=s}})}addProduct(e,s){this._Renderer2.setAttribute(s,"disabled","true"),this._CartService.addToCart(e).subscribe({next:o=>{this.toastEvokeService.success("Success",o.message).subscribe(),this._Renderer2.removeAttribute(s,"disabled"),this._CartService.cartNumber.next(o.numOfCartItems)},error:o=>{this._Renderer2.removeAttribute(s,"disabled")}})}addFav(e){this._WishlistService.addToWishList(e).subscribe({next:s=>{this.toastEvokeService.success("Success",s.message).subscribe(),this.wishListData=s.data},error:s=>{console.log(s)}})}removeFav(e){this._WishlistService.removeWish(e).subscribe({next:s=>{this.toastEvokeService.success("Success",s.message).subscribe(),this.wishListData=s.data},error:s=>{console.log(s)}})}static#t=this.\u0275fac=function(s){return new(s||i)(t.Y36(_.M),t.Y36(h.N),t.Y36(f.nm),t.Y36(t.Qsj),t.Y36(v.M))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-home"]],standalone:!0,features:[t.jDz],decls:12,vars:3,consts:[[1,"container","py-3"],[1,"row","g-0","cursor-pointer"],[1,"col-md-9"],[3,"options"],["carouselSlide",""],[1,"col-md-3"],["height","150","src","./assets/images/slide-1.jpeg","alt","slideOne",1,"w-100"],["height","150","src","./assets/images/slide-2.jpeg","alt","slideTwo",1,"w-100"],["class","container my-4",4,"ngIf"],[4,"ngIf"],["height","300","src","./assets/images/main-slider-1.jpeg","alt","slider-1"],["height","300","src","./assets/images/main-slider-2.jpeg","alt","slider-2"],["height","300","src","./assets/images/main-slider-3.jpeg","alt","slider-3"],[1,"container","my-4"],[4,"ngFor","ngForOf"],["height","300",1,"cursor-pointer",3,"src","alt","title"],[1,"h6","ms-2","mt-2"],[1,"container"],["type","text","placeholder","Search....",1,"form-control","w-50","mx-auto","mb-5","form-control-sm",3,"ngModel","ngModelChange"],[1,"row","g-4"],["class","col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4 p-2",4,"ngFor","ngForOf"],[1,"col-sm-6","col-md-4","col-lg-3","col-xl-2","mb-4","p-2"],[1,"product","p-2"],["class","fa-regular fa-heart heart",3,"click",4,"ngIf"],["class","fa-solid fa-heart heart",3,"click",4,"ngIf"],["role","button",3,"routerLink"],[1,"w-100",3,"src","title","alt"],[1,"text-main"],[1,"h6","fw-bold"],[1,"d-flex","justify-content-between"],[1,"fa-solid","fa-star","rating-color"],[1,"btn","bg-main","d-block","text-white","w-100","my-2",3,"click"],["btnAdd",""],[1,"fa-regular","fa-heart","heart",3,"click"],[1,"fa-solid","fa-heart","heart",3,"click"]],template:function(s,o){1&s&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"owl-carousel-o",3),t.YNc(4,x,1,0,"ng-template",4),t.YNc(5,C,1,0,"ng-template",4),t.YNc(6,Z,1,0,"ng-template",4),t.qZA()(),t.TgZ(7,"div",5),t._UZ(8,"img",6)(9,"img",7),t.qZA()()(),t.YNc(10,w,3,2,"section",8),t.YNc(11,J,9,9,"section",9)),2&s&&(t.xp6(3),t.Q6J("options",o.bigOptions),t.xp6(7),t.Q6J("ngIf",o.allCategories.length>0),t.xp6(1),t.Q6J("ngIf",o.allProducts.length>0))},dependencies:[a.ez,a.sg,a.O5,a.OU,m.bB,m.Fy,m.Mp,p.rH,g,l.u5,l.Fj,l.JJ,l.On]})}return i})()}}]);