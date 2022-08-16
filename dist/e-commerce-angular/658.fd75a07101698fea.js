"use strict";(self.webpackChunkE_Commerce_Angular=self.webpackChunkE_Commerce_Angular||[]).push([[658],{6658:(_,m,i)=>{i.r(m),i.d(m,{CardsModule:()=>I});var u=i(8692),p=i(9184),d=i(3870),h=i(4083),a=i(2802),v=i(8127),C=i(3856),y=i(8168),M=i(3568),Z=i(3787),t=i(6985),O=i(5732);let x=(()=>{class r{constructor(e){this.httpClient=e,this.url="https://e-commerce-angular-df9dd-default-rtdb.firebaseio.com/"}ordering(e,n){return this.httpClient.post(this.url+"/users/"+n+"/list/"+e.product.id+".json",e).pipe((0,y.b)(()=>{}),(0,M.K)(this.handleError))}handleError(e){if(e.error instanceof ErrorEvent)console.log("Error : "+e.error.message);else switch(e.status){case 404:console.log("Not Found");break;case 403:console.log("Access Denied");break;case 500:console.log("Internal server");break;default:console.log("some unknow error happened")}return(0,Z._)(()=>new Error("some error happened"))}}return r.\u0275fac=function(e){return new(e||r)(t.LFG(O.eN))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var g=i(9900),b=i(5769);function A(r,c){1&r&&t._UZ(0,"app-preload")}function P(r,c){1&r&&(t.TgZ(0,"div",4)(1,"div",5),t._uU(2,"You cannot order. (Admin)"),t.qZA()())}function w(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"div",29)(1,"div",30)(2,"div",31)(3,"div",16)(4,"div",32)(5,"div",33),t._UZ(6,"img",34),t.qZA(),t.TgZ(7,"div",35)(8,"div",36)(9,"div",10)(10,"h6",11),t._uU(11),t.qZA()(),t.TgZ(12,"div",23)(13,"small"),t._uU(14),t.qZA()(),t.TgZ(15,"div",10)(16,"small"),t._uU(17),t.ALo(18,"currency"),t.qZA()(),t.TgZ(19,"div",10),t._uU(20,"Count: "),t.TgZ(21,"input",37),t.NdJ("ngModelChange",function(o){const l=t.CHM(e).$implicit;return t.KtG(l.count=o)})("ngModelChange",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.productCountChange())}),t.qZA()(),t.TgZ(22,"div",10)(23,"h6",11),t._uU(24),t.ALo(25,"currency"),t.qZA()()()()(),t._UZ(26,"hr",38),t.TgZ(27,"div",29)(28,"div",39)(29,"small",40),t.NdJ("click",function(){const s=t.CHM(e).index,l=t.oxw(2);return t.KtG(l.deleteCard(s))}),t.TgZ(30,"span"),t._UZ(31,"i",41),t.qZA(),t._uU(32,"Delete Order"),t.qZA()()()()()()()}if(2&r){const e=c.$implicit,n=c.index,o=t.oxw(2);t.ekj("mt-4",n>0),t.xp6(6),t.Q6J("src",e.product.imageUrl,t.LSH),t.xp6(5),t.Oqu(e.product.name),t.xp6(3),t.hij("Color: ",o.colors.get(e.product.colorId),""),t.xp6(3),t.hij("Price: ",t.lcZ(18,8,e.product.price),""),t.xp6(4),t.Q6J("ngModel",e.count),t.xp6(3),t.Oqu(t.lcZ(25,10,e.count*e.product.price))}}function T(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"div",6)(1,"div",7)(2,"div",8)(3,"div",9)(4,"div",10)(5,"h4",11),t._uU(6,"Welcome to Card Panel: "),t.TgZ(7,"span",12),t._uU(8),t.qZA(),t._uU(9," ."),t.qZA()(),t.TgZ(10,"div",13),t._UZ(11,"img",14),t.TgZ(12,"p",15),t._uU(13,"Watches For Everyone"),t.qZA()()()(),t.TgZ(14,"div",16),t.YNc(15,w,33,12,"div",17),t.qZA(),t.TgZ(16,"div",18)(17,"div",19)(18,"div",20)(19,"div",21),t._UZ(20,"img",22),t.qZA(),t.TgZ(21,"div",23)(22,"h2",24),t._uU(23,"Must Be Paid"),t.qZA()(),t.TgZ(24,"div",25)(25,"h1",26),t._uU(26),t.ALo(27,"currency"),t.qZA()()(),t.TgZ(28,"div",27)(29,"button",28),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.ordering())}),t._uU(30,"Ordering"),t.qZA()()()()()()}if(2&r){const e=t.oxw();t.xp6(8),t.hij(" ",e.user.email,""),t.xp6(7),t.Q6J("ngForOf",e.cards),t.xp6(11),t.Oqu(t.lcZ(27,3,e.total))}}const U=[{path:"",component:(()=>{class r{constructor(e,n,o,s,l,f){this.authService=e,this.cookieService=n,this.colorService=o,this.cardService=s,this.alertifyService=l,this.router=f,this.user=null,this.userBase=null,this.isUserCheck=!1,this.cards=null,this.colors=null,this.total=0,this.preload=!1}ngOnInit(){if(this.user=JSON.parse(localStorage.getItem("user")),this.userBase=JSON.parse(localStorage.getItem("userBase")),this.userBase){var e=this.cookieService.get(`${this.user.email}cards`);if(this.cards=""==e?null:JSON.parse(e),this.cards)for(let n=0;n<this.cards.length;n++){const o=this.cards[n];this.total+=o.count*o.product.price}}"admin"==this.userBase.role&&(this.isUserCheck=!0),this.colorService.getColors().subscribe(n=>{this.colors=new Map;for(let o=0;o<n.length;o++){const s=n[o];this.colors.set(s.id,s.name)}})}productCountChange(){var e=[];this.total=0;for(let n=0;n<this.cards.length;n++){const o=this.cards[n];o.count>0?this.total+=o.count*o.product.price:e.push(n)}for(let n=0;n<e.length;n++){const o=e[n];this.cards.splice(o,o+1)}this.cookieService.set(`${this.user.email}cards`,JSON.stringify(this.cards))}deleteCard(e){this.cards.splice(e,e+1),this.productCountChange()}ordering(){this.preload=!0;var e=0;for(let o=0;o<this.cards.length;o++)this.cardService.ordering(this.cards[o],this.user.id).subscribe(l=>{e++});var n=setInterval((o,s,l,f,J)=>{o!=s&&(l.set(`${f}cards`,null),this.alertifyService.success("All orders have been shipped."),this.router.navigate(["/products"]),clearInterval(n))},100,e,this.cards.length,this.cookieService,this.user.email,this.preload,this)}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(a.e),t.Y36(h.N),t.Y36(v.x),t.Y36(x),t.Y36(C.v),t.Y36(p.F0))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-cards"]],features:[t._Bn([a.e,h.N,v.x,x,C.v])],decls:5,vars:3,consts:[[4,"ngIf"],[1,"w-100","text-center","mt-4","text-bold"],["class","w-100",4,"ngIf"],["class","container-fluid my-4 d-flex justify-content-center",4,"ngIf"],[1,"w-100"],[1,"alert","alert-warning"],[1,"container-fluid","my-4","d-flex","justify-content-center"],[1,"card","card-1"],[1,"card-header","bg-white"],[1,"media","flex-sm-row","flex-column-reverse","justify-content-between"],[1,"col","my-auto"],[1,"mb-0"],[1,"change-color"],[1,"col-auto","text-center","my-auto","pl-0","pt-sm-4"],["src","../../assets/images/favicon.png","width","115","height","115",1,"img-fluid","my-auto","align-items-center","mb-0","pt-3"],[1,"mb-4","pt-0","Glasses"],[1,"card-body"],["class","row",3,"mt-4",4,"ngFor","ngForOf"],[1,"card-footer"],[1,"jumbotron-fluid"],[1,"row","justify-content-between"],[1,"col-sm-auto","col-auto","my-auto"],["src","../../assets/images/favicon.png","width","115","height","115",1,"img-fluid","my-auto","align-self-center","rounded"],[1,"col-auto","my-auto"],[1,"mb-0","font-weight-bold"],[1,"col-auto","my-auto","ml-auto"],[1,"display-3"],[1,"row","mb-1","mt-5","mt-md-0"],[1,"col-md-6","mx-auto","border-0","rounded-pill","p-2","text-white","text-bold","bg-primary","letter-spacing-1",3,"click"],[1,"row"],[1,"col"],[1,"card","card-2"],[1,"media"],[1,"sq","align-self-center"],["width","135","height","135",1,"img-fluid","my-auto","align-self-center","mr-2","mr-md-4","pl-0","p-0","m-0",3,"src"],[1,"media-body","my-auto","text-right"],[1,"row","my-auto","flex-column","flex-md-row"],["type","number",1,"w-50",3,"ngModel","ngModelChange"],[1,"my-3"],[1,"col-md-3","mb-3"],[1,"cursor-pointer",3,"click"],[1,"mr-2","fa","fa-trash-alt","cursor-pointer"]],template:function(e,n){1&e&&(t.YNc(0,A,1,0,"app-preload",0),t.TgZ(1,"h3",1),t._uU(2,"Orders"),t.qZA(),t.YNc(3,P,3,0,"div",2),t.YNc(4,T,31,5,"div",3)),2&e&&(t.Q6J("ngIf",n.preload),t.xp6(3),t.Q6J("ngIf",n.isUserCheck),t.xp6(1),t.Q6J("ngIf",!n.isUserCheck))},dependencies:[g.Fj,g.wV,g.JJ,g.On,u.sg,u.O5,b.r,u.H9],styles:["body[_ngcontent-%COMP%]{min-height:100vh;background-size:cover;font-family:Lato,sans-serif;color:#747474aa;background:linear-gradient(140deg,#fff,50%,#7068c8)}.container-fluid[_ngcontent-%COMP%]{margin-top:200px}p[_ngcontent-%COMP%]{font-size:14px;margin-bottom:7px}.small[_ngcontent-%COMP%]{letter-spacing:.5px!important}.card-1[_ngcontent-%COMP%]{box-shadow:2px 2px 10px #786cbe}hr[_ngcontent-%COMP%]{background-color:#f8f8f8aa}.bold[_ngcontent-%COMP%]{font-weight:500}.change-color[_ngcontent-%COMP%]{color:#00f!important}.card-2[_ngcontent-%COMP%]{box-shadow:1px 1px 3px #70738b}.fa-circle.active[_ngcontent-%COMP%]{font-size:8px;color:#5747bc}.fa-circle[_ngcontent-%COMP%]{font-size:8px;color:#aaa}.rounded[_ngcontent-%COMP%]{border-radius:2.25rem!important}.progress-bar[_ngcontent-%COMP%]{background-color:#5747bc!important}.progress[_ngcontent-%COMP%]{height:5px!important;margin-bottom:0}.invoice[_ngcontent-%COMP%]{position:relative;top:-70px}.Glasses[_ngcontent-%COMP%]{position:relative;top:-12px!important}.card-footer[_ngcontent-%COMP%]{background-color:#20f;color:#fff}h2[_ngcontent-%COMP%]{color:#000;letter-spacing:2px!important}.display-3[_ngcontent-%COMP%]{font-weight:500!important}@media (max-width: 479px){.invoice[_ngcontent-%COMP%]{position:relative;top:7px}.border-line[_ngcontent-%COMP%]{border-right:0px solid rgb(206,206,226)!important}}@media (max-width: 700px){h2[_ngcontent-%COMP%]{color:#03005c;font-size:17px}.display-3[_ngcontent-%COMP%]{font-size:28px;font-weight:500!important}}.card-footer[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{letter-spacing:7px!important;font-size:12px}.border-line[_ngcontent-%COMP%]{border-right:1px solid rgb(206,206,226)}.cursor-pointer[_ngcontent-%COMP%]{cursor:pointer!important}.letter-spacing-1[_ngcontent-%COMP%]{letter-spacing:1px!important}"]}),r})(),canActivate:[d.a]}];let S=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[p.Bz.forChild(U),p.Bz]}),r})();var E=i(4466);let I=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[S,g.u5,u.ez,E.m]}),r})()},3856:(_,m,i)=>{i.d(m,{v:()=>p});var u=i(6985);let p=(()=>{class d{constructor(){}success(a){alertify.success(a)}error(a){alertify.error(a)}warning(a){alertify.warning(a)}}return d.\u0275fac=function(a){return new(a||d)},d.\u0275prov=u.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()}}]);