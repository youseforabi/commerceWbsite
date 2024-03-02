"use strict";(self.webpackChunkE_Commerce=self.webpackChunkE_Commerce||[]).push([[932],{6666:(A,u,l)=>{l.r(u),l.d(u,{LoginComponent:()=>x});var g=l(6814),i=l(95),_=l(1120),e=l(4769),p=l(9410);function d(n,s){1&n&&(e.TgZ(0,"p"),e._uU(1,"Email is required"),e.qZA())}function c(n,s){1&n&&(e.TgZ(0,"p"),e._uU(1,"Enter valid email"),e.qZA())}function f(n,s){if(1&n&&(e.TgZ(0,"div",15),e.YNc(1,d,2,0,"p",16),e.YNc(2,c,2,0,"p",16),e.qZA()),2&n){const r=e.oxw();let o,t;e.xp6(1),e.Q6J("ngIf",null==(o=r.loginForm.get("email"))||null==o.errors?null:o.errors.required),e.xp6(1),e.Q6J("ngIf",null==(t=r.loginForm.get("email"))||null==t.errors?null:t.errors.email)}}function h(n,s){1&n&&(e.TgZ(0,"p"),e._uU(1,"password is required"),e.qZA())}function Z(n,s){1&n&&(e.TgZ(0,"p"),e._uU(1,"Enter valid Password"),e.qZA())}function v(n,s){if(1&n&&(e.TgZ(0,"div",15),e.YNc(1,h,2,0,"p",16),e.YNc(2,Z,2,0,"p",16),e.qZA()),2&n){const r=e.oxw();let o,t;e.xp6(1),e.Q6J("ngIf",null==(o=r.loginForm.get("password"))||null==o.errors?null:o.errors.required),e.xp6(1),e.Q6J("ngIf",null==(t=r.loginForm.get("password"))||null==t.errors?null:t.errors.pattern)}}function T(n,s){1&n&&e._UZ(0,"i",17)}function L(n,s){if(1&n&&(e.TgZ(0,"h1",18),e._uU(1),e.qZA()),2&n){const r=e.oxw();e.xp6(1),e.Oqu(r.errMessege)}}let x=(()=>{class n{constructor(r,o,t){this._Router=r,this._AuthService=o,this._FormBuilder=t,this.isLoading=!1,this.errMessege="",this.loginForm=this._FormBuilder.group({email:["",[i.kI.required,i.kI.email]],password:["",[i.kI.required,i.kI.pattern(/^[A-Za-z0-9_@]{6,}$/)]]})}handleForm(){const r=this.loginForm.value;this.isLoading=!0,!0===this.loginForm.valid&&this._AuthService.loginApi(r).subscribe({next:o=>{"success"==o.message&&(localStorage.setItem("eToken",o.token),this._AuthService.decodeUser(),this.isLoading=!1,this._Router.navigate(["/home"]))},error:o=>{this.isLoading=!1,this.errMessege=o.error.message}})}static#e=this.\u0275fac=function(o){return new(o||n)(e.Y36(_.F0),e.Y36(p.e),e.Y36(i.qu))};static#n=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-login"]],standalone:!0,features:[e.jDz],decls:23,vars:6,consts:[[1,"w-75","mx-auto","shadow","rounded","rounded-4","p-4","my-4","bg-main-light"],[1,"my-2"],[3,"formGroup","ngSubmit"],[1,"form-item"],["for","email",1,"py-1"],["formControlName","email","type","email","id","email",1,"form-control"],["class","alert alert-danger",4,"ngIf"],["for","password",1,"py-1"],["formControlName","password","type","password","id","password",1,"form-control"],[1,"d-flex","justify-content-between","align-items-center"],["role","button","routerLink","/forget",1,"link-primary"],["routerLink","/register",1,"btn","bg-main","text-white","d-block","mx-2","mt-2"],[1,"btn","bg-main","text-white","d-block","ms-auto","mt-2",3,"disabled"],["class","fa-solid fa-spinner fa-spin",4,"ngIf"],["class","h5 text-center alert alert-danger p-1 w-50 mx-auto mb-0",4,"ngIf"],[1,"alert","alert-danger"],[4,"ngIf"],[1,"fa-solid","fa-spinner","fa-spin"],[1,"h5","text-center","alert","alert-danger","p-1","w-50","mx-auto","mb-0"]],template:function(o,t){if(1&o&&(e.TgZ(0,"section",0)(1,"h1",1),e._uU(2,"Login Now"),e.qZA(),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return t.handleForm()}),e.TgZ(4,"div",3)(5,"label",4),e._uU(6,"Email :"),e.qZA(),e._UZ(7,"input",5),e.YNc(8,f,3,2,"div",6),e.qZA(),e.TgZ(9,"div",3)(10,"label",7),e._uU(11,"Password :"),e.qZA(),e._UZ(12,"input",8),e.YNc(13,v,3,2,"div",6),e.qZA(),e.TgZ(14,"div",9)(15,"a",10),e._uU(16,"Forget Password"),e.qZA(),e.TgZ(17,"button",11),e._uU(18," Register Now "),e.qZA(),e.TgZ(19,"button",12),e._uU(20," Login "),e.YNc(21,T,1,0,"i",13),e.qZA()()(),e.YNc(22,L,2,1,"h1",14),e.qZA()),2&o){let a,m;e.xp6(3),e.Q6J("formGroup",t.loginForm),e.xp6(5),e.Q6J("ngIf",(null==(a=t.loginForm.get("email"))?null:a.errors)&&(null==(a=t.loginForm.get("email"))?null:a.touched)),e.xp6(5),e.Q6J("ngIf",(null==(m=t.loginForm.get("password"))?null:m.errors)&&(null==(m=t.loginForm.get("password"))?null:m.touched)),e.xp6(6),e.Q6J("disabled",t.loginForm.invalid),e.xp6(2),e.Q6J("ngIf",t.isLoading),e.xp6(1),e.Q6J("ngIf",t.errMessege)}},dependencies:[g.ez,g.O5,i.UX,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,_.rH]})}return n})()}}]);