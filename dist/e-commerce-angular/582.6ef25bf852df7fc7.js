"use strict";(self.webpackChunkE_Commerce_Angular=self.webpackChunkE_Commerce_Angular||[]).push([[582,376,840],{7830:(D,A,t)=>{t.d(A,{g:()=>S});var e=t(4813);class m extends e.w0{constructor(n,i){super()}schedule(n,i=0){return this}}const c={setInterval(p,n,...i){const{delegate:a}=c;return a?.setInterval?a.setInterval(p,n,...i):setInterval(p,n,...i)},clearInterval(p){const{delegate:n}=c;return(n?.clearInterval||clearInterval)(p)},delegate:void 0};var C=t(8308);const r={now:()=>(r.delegate||Date).now(),delegate:void 0};class g{constructor(n,i=g.now){this.schedulerActionCtor=n,this.now=i}schedule(n,i=0,a){return new this.schedulerActionCtor(this,n).schedule(a,i)}}g.now=r.now;const _=new class M extends g{constructor(n,i=g.now){super(n,i),this.actions=[],this._active=!1,this._scheduled=void 0}flush(n){const{actions:i}=this;if(this._active)return void i.push(n);let a;this._active=!0;do{if(a=n.execute(n.state,n.delay))break}while(n=i.shift());if(this._active=!1,a){for(;n=i.shift();)n.unsubscribe();throw a}}}(class f extends m{constructor(n,i){super(n,i),this.scheduler=n,this.work=i,this.pending=!1}schedule(n,i=0){if(this.closed)return this;this.state=n;const a=this.id,I=this.scheduler;return null!=a&&(this.id=this.recycleAsyncId(I,a,i)),this.pending=!0,this.delay=i,this.id=this.id||this.requestAsyncId(I,this.id,i),this}requestAsyncId(n,i,a=0){return c.setInterval(n.flush.bind(n,this),a)}recycleAsyncId(n,i,a=0){if(null!=a&&this.delay===a&&!1===this.pending)return i;c.clearInterval(i)}execute(n,i){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const a=this._execute(n,i);if(a)return a;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,i){let I,a=!1;try{this.work(n)}catch(P){a=!0,I=P||new Error("Scheduled action threw falsy error")}if(a)return this.unsubscribe(),I}unsubscribe(){if(!this.closed){const{id:n,scheduler:i}=this,{actions:a}=i;this.work=this.state=this.scheduler=null,this.pending=!1,(0,C.P)(a,this),null!=n&&(this.id=this.recycleAsyncId(i,n,null)),this.delay=null,super.unsubscribe()}}}),x=_;var u=t(3729),B=t(5598),b=t(2085),l=t(8499),y=t(408),o=t(116),h=t(4882);function d(p,n){return n?i=>(0,u.z)(n.pipe((0,B.q)(1),function s(){return(0,b.e)((p,n)=>{p.subscribe((0,l.x)(n,y.Z))})}()),i.pipe(d(p))):(0,h.z)((i,a)=>p(i,a).pipe((0,B.q)(1),(0,o.h)(i)))}var v=t(818),E=t(1830);function S(p,n=_){const i=function O(p=0,n,i=x){let a=-1;return null!=n&&((0,E.K)(n)?i=n:a=n),new v.y(I=>{let P=function T(p){return p instanceof Date&&!isNaN(p)}(p)?+p-i.now():p;P<0&&(P=0);let U=0;return i.schedule(function(){I.closed||(I.next(U++),0<=a?this.schedule(void 0,a):I.complete())},P)})}(p,n);return d(()=>i)}},643:(D,A,t)=>{t.d(A,{R:()=>r});var e=t(7969),m=t(8168),c=t(6985),C=t(2802),f=t(9184);let r=(()=>{class g{constructor(_,x){this.authService=_,this.router=x}canActivate(_,x){return this.authService.userBase.pipe((0,e.U)(u=>"omer04118102@gmail.com"==u.email),(0,m.b)(u=>{u||this.router.navigate(["/home"])}))}}return g.\u0275fac=function(_){return new(_||g)(c.LFG(C.e),c.LFG(f.F0))},g.\u0275prov=c.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},3361:(D,A,t)=>{t.d(A,{c:()=>M});var e=t(7969),m=t(8168),c=t(3568),C=t(7830),f=t(3787),r=t(6985),g=t(5732);let M=(()=>{class _{constructor(u){this.httpClient=u,this.url="https://e-commerce-angular-df9dd-default-rtdb.firebaseio.com/"}getBrands(){return this.httpClient.get(this.url+"brands.json").pipe((0,e.U)(B=>{const b=[];for(const l in B)b.push({...B[l],id:l});return b}),(0,m.b)(B=>{}),(0,c.K)(this.handleError),(0,C.g)(30))}createBrand(u){return this.httpClient.post(this.url+"brands.json",u).pipe((0,m.b)(b=>{}),(0,c.K)(this.handleError))}deleteBrand(u){const B=this.url+"brands"+(u?"/"+u.toString():"")+".json";return this.httpClient.delete(B)}handleError(u){if(u.error instanceof ErrorEvent)console.log("Error : "+u.error.message);else switch(u.status){case 404:console.log("Not Found");break;case 403:console.log("Access Denied");break;case 500:console.log("Internal server");break;default:console.log("some unknow error happened")}return(0,f._)(()=>new Error("some error happened"))}}return _.\u0275fac=function(u){return new(u||_)(r.LFG(g.eN))},_.\u0275prov=r.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},6533:(D,A,t)=>{t.d(A,{B:()=>b});var e=t(6985),m=t(3361),c=t(9184),C=t(3856),f=t(8692);const r=function(l){return{brandId:l}};function g(l,y){if(1&l){const s=e.EpF();e.TgZ(0,"li",10),e.NdJ("click",function(){const d=e.CHM(s).$implicit,v=e.oxw(3);return v.selectBrand(d),e.KtG(v.reloadAllComponent())}),e._uU(1),e.qZA()}if(2&l){const s=y.$implicit,o=e.oxw(3);e.ekj("active",!o.displayAll&&o.selectedBrand.id==s.id),e.Q6J("id",s.id)("routerLink","/products")("queryParams",e.VKq(7,r,s.id))("queryParamsHandling","merge"),e.xp6(1),e.hij("",s.name," ")}}const M=function(){return{brandId:null}};function _(l,y){if(1&l){const s=e.EpF();e.TgZ(0,"ul",5,6)(2,"li",7,8),e.NdJ("click",function(){e.CHM(s);const h=e.oxw(2);return h.selectBrand(),e.KtG(h.reloadAllComponent())}),e._uU(4,"All Brands "),e.qZA(),e.YNc(5,g,2,9,"li",9),e.qZA()}if(2&l){const s=e.oxw(2);e.xp6(2),e.ekj("active",s.displayAll),e.Q6J("routerLink","/products")("queryParams",e.DdM(6,M))("queryParamsHandling","merge"),e.xp6(3),e.Q6J("ngForOf",s.brands)}}function x(l,y){if(1&l){const s=e.EpF();e.TgZ(0,"li",13),e.NdJ("click",function(){const d=e.CHM(s).$implicit,v=e.oxw(3);return v.deleteBrand(d),e.KtG(v.reloadAllComponent())}),e._uU(1),e.qZA()}if(2&l){const s=y.$implicit;e.Q6J("id",s.id),e.xp6(1),e.hij("",s.name," ")}}function u(l,y){if(1&l){const s=e.EpF();e.TgZ(0,"ul",5,6)(2,"li",11),e.NdJ("click",function(){e.CHM(s);const h=e.oxw(2);return e.KtG(h.allDelete())}),e._uU(3,"All Delete "),e.qZA(),e.YNc(4,x,2,2,"li",12),e.qZA()}if(2&l){const s=e.oxw(2);e.xp6(4),e.Q6J("ngForOf",s.brands)}}function B(l,y){if(1&l&&(e.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"h4"),e._uU(4,"Brands"),e.qZA(),e.YNc(5,_,6,7,"ul",4),e.YNc(6,u,5,1,"ul",4),e.qZA()()()),2&l){const s=e.oxw();e.xp6(5),e.Q6J("ngIf",s.brands&&!s.isDeleteMode),e.xp6(1),e.Q6J("ngIf",s.brands&&s.isDeleteMode)}}let b=(()=>{class l{constructor(s,o,h,d){this.brandService=s,this.router=o,this.route=h,this.alertifyService=d,this.brands=[],this.selectedBrand=null,this.displayAll=!0,this.isDeleteMode=!1}ngOnInit(){this.preload=!0,this.brandService.getBrands().subscribe(s=>{this.brands=s,this.preload=!1;const o=new URLSearchParams(window.location.search),h=o.get("brandId"),d=o.get("dltMode");if(d&&"true"==d&&(this.isDeleteMode=!0),"0"==h)this.selectBrand();else if(null!=h){var v=0;for(let E=0;E<this.brands.length;E++)if(this.brands[E].id==h){v=E;break}this.selectBrand(this.brands[Number(v)])}})}selectBrand(s){s?(this.selectedBrand=s,this.displayAll=!1):(this.selectedBrand=null,this.displayAll=!0)}reloadAllComponent(s){setTimeout(()=>{this.router.routeReuseStrategy.shouldReuseRoute=()=>!1,this.router.onSameUrlNavigation="reload",this.router.navigate([s||"/products"],{relativeTo:this.route,queryParamsHandling:"merge"})},10)}allDelete(){this.brandService.deleteBrand(null).subscribe(s=>{this.reloadAllComponent("/brands"),this.alertifyService.warning("All brand deleted")})}deleteBrand(s){this.brandService.deleteBrand(s.id).subscribe(o=>{this.reloadAllComponent("/brands"),this.alertifyService.warning(s.name+" deleted")})}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(m.c),e.Y36(c.F0),e.Y36(c.gz),e.Y36(C.v))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-brands"]],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"row","my-3"],[1,"col-md-12","mx-auto"],["class","list-group",4,"ngIf"],[1,"list-group"],["parentTag",""],[1,"list-group-item","user-select-none","pointer",3,"routerLink","queryParams","queryParamsHandling","click"],["my",""],["class","list-group-item user-select-none pointer",3,"active","id","routerLink","queryParams","queryParamsHandling","click",4,"ngFor","ngForOf"],[1,"list-group-item","user-select-none","pointer",3,"id","routerLink","queryParams","queryParamsHandling","click"],[1,"list-group-item","user-select-none","pointer","bg-danger","text-light",3,"click"],["class","list-group-item user-select-none pointer bg-danger text-light",3,"id","click",4,"ngFor","ngForOf"],[1,"list-group-item","user-select-none","pointer","bg-danger","text-light",3,"id","click"]],template:function(s,o){1&s&&e.YNc(0,B,7,2,"div",0),2&s&&e.Q6J("ngIf",!o.preload)},dependencies:[c.rH,f.sg,f.O5]}),l})()},2582:(D,A,t)=>{t.r(A),t.d(A,{BrandsModule:()=>s});var e=t(8692),m=t(9900),c=t(4466),C=t(9184),f=t(643),r=t(6985),g=t(3361),M=t(3856),_=t(5769);function x(o,h){1&o&&r._UZ(0,"app-preload")}function u(o,h){if(1&o){const d=r.EpF();r.TgZ(0,"div",2)(1,"form",3,4),r.NdJ("ngSubmit",function(){r.CHM(d);const E=r.oxw();return r.KtG(E.createBrand())}),r.TgZ(3,"div",5)(4,"label",6),r._uU(5,"Brand Name"),r.qZA(),r.TgZ(6,"input",7),r.NdJ("ngModelChange",function(E){r.CHM(d);const T=r.oxw();return r.KtG(T.brand.name=E)}),r.qZA()(),r.TgZ(7,"div",8)(8,"button",9),r._uU(9,"Create Brand"),r.qZA()()()()}if(2&o){const d=r.MAs(2),v=r.oxw();r.xp6(6),r.Q6J("ngModel",v.brand.name),r.xp6(2),r.Q6J("disabled",d.invalid)}}let B=(()=>{class o{constructor(d,v,E){this.brandService=d,this.alertifyService=v,this.router=E,this.brand={}}ngOnInit(){}createBrand(){this.brand.name&&""!=this.brand.name&&(this.preload=!0,this.brandService.createBrand(this.brand).subscribe(d=>{setTimeout(()=>{this.alertifyService.success(`${this.brand.name} successfully added.`)},50),this.preload=!1,this.router.navigate(["/brands"])}))}}return o.\u0275fac=function(d){return new(d||o)(r.Y36(g.c),r.Y36(M.v),r.Y36(C.F0))},o.\u0275cmp=r.Xpm({type:o,selectors:[["app-brand-create"]],decls:2,vars:2,consts:[[4,"ngIf"],["class","container",4,"ngIf"],[1,"container"],[1,"row","my-4","d-flex","flex-column",3,"ngSubmit"],["form","ngForm"],[1,"col-md-6","mx-auto","mb-3"],["for","name"],["type","text","name","name","id","name","placeholder","Pleace enter brand name. (required)","minlength","1","maxlength","10","required","",1,"w-100","outline-none","customInputStyle",3,"ngModel","ngModelChange"],[1,"col-md-auto","mx-auto"],["type","submit",1,"btn","btn-success",3,"disabled"]],template:function(d,v){1&d&&(r.YNc(0,x,1,0,"app-preload",0),r.YNc(1,u,10,2,"div",1)),2&d&&(r.Q6J("ngIf",v.preload),r.xp6(1),r.Q6J("ngIf",!v.preload))},dependencies:[e.O5,m._Y,m.Fj,m.JJ,m.JL,m.Q7,m.wO,m.nD,m.On,m.F,_.r]}),o})();const l=[{path:"",component:t(6533).B,canActivate:[f.R]},{path:"create",component:B,canActivate:[f.R]}];let y=(()=>{class o{}return o.\u0275fac=function(d){return new(d||o)},o.\u0275mod=r.oAB({type:o}),o.\u0275inj=r.cJS({imports:[C.Bz.forChild(l),C.Bz]}),o})(),s=(()=>{class o{}return o.\u0275fac=function(d){return new(d||o)},o.\u0275mod=r.oAB({type:o}),o.\u0275inj=r.cJS({imports:[y,e.ez,m.u5,c.m]}),o})()},3856:(D,A,t)=>{t.d(A,{v:()=>m});var e=t(6985);let m=(()=>{class c{constructor(){}success(f){alertify.success(f)}error(f){alertify.error(f)}warning(f){alertify.warning(f)}}return c.\u0275fac=function(f){return new(f||c)},c.\u0275prov=e.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()}}]);