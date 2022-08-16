"use strict";(self.webpackChunkE_Commerce_Angular=self.webpackChunkE_Commerce_Angular||[]).push([[795],{8795:(Te,b,d)=>{d.r(b),d.d(b,{ProductsModule:()=>be});var u=d(8692),s=d(9184),N=d(3870),M=d(7969),_=d(8168),h=d(3568),k=d(7830),P=d(3787),e=d(6985),T=d(5732);let f=(()=>{class n{constructor(t){this.httpClient=t,this.url="https://e-commerce-angular-df9dd-default-rtdb.firebaseio.com/"}getProducts(t){return this.httpClient.get(this.url+"products.json").pipe((0,M.U)(r=>{const i=[];for(const l in r)t?t.toString()==r[l].brandId&&i.push({...r[l],id:l}):i.push({...r[l],id:l});return i}),(0,_.b)(r=>{}),(0,h.K)(this.handleError),(0,k.g)(118))}createProduct(t){return this.httpClient.post(this.url+"products.json",t).pipe((0,_.b)(o=>{}),(0,h.K)(this.handleError))}updateProduct(t){return this.httpClient.put(this.url+"products/"+t.id+".json",t).pipe((0,_.b)(r=>{}),(0,h.K)(this.handleError))}deleteProduct(t){return this.httpClient.delete(this.url+"products/"+t+".json").pipe((0,_.b)(()=>{}),(0,h.K)(this.handleError))}getProductById(t){return this.httpClient.get(this.url+"products/"+t+".json").pipe((0,M.U)(o=>({...o,id:t})),(0,_.b)(o=>{}),(0,h.K)(this.handleError))}handleError(t){if(t.error instanceof ErrorEvent)console.log("Error : "+t.error.message);else switch(t.status){case 404:console.log("Not Found");break;case 403:console.log("Access Denied");break;case 500:console.log("Internal server");break;default:console.log("some unknow error happened")}return(0,P._)(()=>new Error("some error happened"))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(T.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),C=(()=>{class n{constructor(t){this.httpClient=t}uploadImage(t){return this.httpClient.post("https://api.cloudinary.com/v1_1/social-network-web/image/upload",t).pipe((0,_.b)(r=>{}),(0,h.K)(this.handleError))}handleError(t){if(t.error instanceof ErrorEvent)console.log("Error : "+t.error.message);else switch(t.status){case 404:console.log("Not Found");break;case 403:console.log("Access Denied");break;case 500:console.log("Internal server");break;default:console.log("some unknow error happened")}return(0,P._)(()=>new Error("some error happened"))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(T.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var Z=d(5984),y=d(3361),I=d(8127),w=d(3856),a=d(9900),v=d(5769);function A(n,c){1&n&&e._UZ(0,"app-preload")}function S(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"a",33),e.NdJ("click",function(){e.CHM(t);const r=e.oxw(2);return e.KtG(r.openFileDialog())}),e._uU(1,"Drop Image Here"),e.qZA()}}function q(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"img",34),e.NdJ("dblclick",function(){e.CHM(t);const r=e.oxw(2);return e.KtG(r.removeFile())}),e.qZA()}if(2&n){const t=e.oxw(2);e.Q6J("src",t.url,e.LSH)}}function F(n,c){if(1&n&&(e.TgZ(0,"option",35),e._uU(1),e.qZA()),2&n){const t=c.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.name)}}function Q(n,c){if(1&n&&(e.TgZ(0,"option",35),e._uU(1),e.qZA()),2&n){const t=c.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.name)}}function U(n,c){if(1&n&&(e.TgZ(0,"option",35),e._uU(1),e.qZA()),2&n){const t=c.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.name)}}function O(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"form",2,3),e.NdJ("ngSubmit",function(){e.CHM(t);const r=e.MAs(1),i=e.oxw();return e.KtG(i.createProduct(r))}),e.TgZ(2,"div",4,5),e.NdJ("dragover",function(r){e.CHM(t);const i=e.MAs(3),l=e.oxw();return e.KtG(l.dragOver(i,r))})("dragleave",function(){e.CHM(t);const r=e.MAs(3),i=e.oxw();return e.KtG(i.dragLeave(r))})("drop",function(r){e.CHM(t);const i=e.MAs(3),l=e.oxw();return e.KtG(l.dropFile(r,i))})("dragstart",function(r){e.CHM(t);const i=e.oxw();return e.KtG(i.dragStart(r))}),e.YNc(4,S,2,0,"a",6),e.TgZ(5,"input",7),e.NdJ("change",function(r){e.CHM(t);const i=e.oxw();return e.KtG(i.onSelect(r))}),e.qZA(),e.YNc(6,q,1,1,"img",8),e.qZA(),e.TgZ(7,"div",9)(8,"label",10),e._uU(9,"Name"),e.qZA(),e.TgZ(10,"input",11),e.NdJ("ngModelChange",function(r){e.CHM(t);const i=e.oxw();return e.KtG(i.product.name=r)}),e.qZA()(),e.TgZ(11,"div",9)(12,"label",12),e._uU(13,"Description"),e.qZA(),e.TgZ(14,"input",13),e.NdJ("ngModelChange",function(r){e.CHM(t);const i=e.oxw();return e.KtG(i.product.description=r)}),e.qZA()(),e.TgZ(15,"div",9)(16,"label",14),e._uU(17,"Category"),e.qZA(),e.TgZ(18,"select",15),e.NdJ("ngModelChange",function(r){e.CHM(t);const i=e.oxw();return e.KtG(i.product.categoryId=r)}),e.YNc(19,F,2,2,"option",16),e.qZA()(),e.TgZ(20,"div",9)(21,"label",17),e._uU(22,"Brand"),e.qZA(),e.TgZ(23,"select",18),e.NdJ("ngModelChange",function(r){e.CHM(t);const i=e.oxw();return e.KtG(i.product.brandId=r)}),e.YNc(24,Q,2,2,"option",16),e.qZA()(),e.TgZ(25,"div",9)(26,"label",19),e._uU(27,"Color"),e.qZA(),e.TgZ(28,"select",20),e.NdJ("ngModelChange",function(r){e.CHM(t);const i=e.oxw();return e.KtG(i.product.colorId=r)}),e.YNc(29,U,2,2,"option",16),e.qZA()(),e.TgZ(30,"div",9)(31,"div",21)(32,"div",22)(33,"label",23),e._uU(34,"Count"),e.qZA(),e.TgZ(35,"input",24),e.NdJ("ngModelChange",function(r){e.CHM(t);const i=e.oxw();return e.KtG(i.product.count=r)}),e.qZA()(),e.TgZ(36,"div",22)(37,"label",25),e._uU(38,"Price"),e.qZA(),e.TgZ(39,"input",26),e.NdJ("ngModelChange",function(r){e.CHM(t);const i=e.oxw();return e.KtG(i.product.price=r)}),e.qZA()()()(),e.TgZ(40,"div",27)(41,"div",28)(42,"input",29),e.NdJ("ngModelChange",function(r){e.CHM(t);const i=e.oxw();return e.KtG(i.product.newItem=r)}),e.qZA(),e.TgZ(43,"label",30),e._uU(44,"New"),e.qZA()()(),e.TgZ(45,"div",31)(46,"button",32),e._uU(47,"Create Product"),e.qZA()()()}if(2&n){const t=e.MAs(1),o=e.oxw();e.xp6(2),e.Q6J("draggable",!0),e.xp6(2),e.Q6J("ngIf",!o.url),e.xp6(2),e.Q6J("ngIf",o.url),e.xp6(4),e.Q6J("ngModel",o.product.name),e.xp6(4),e.Q6J("ngModel",o.product.description),e.xp6(4),e.Q6J("ngModel",o.product.categoryId)("title","Select Category"),e.xp6(1),e.Q6J("ngForOf",o.categories),e.xp6(4),e.Q6J("ngModel",o.product.brandId)("title","Select Brand"),e.xp6(1),e.Q6J("ngForOf",o.brands),e.xp6(4),e.Q6J("ngModel",o.product.colorId)("title","Select Color"),e.xp6(1),e.Q6J("ngForOf",o.colors),e.xp6(6),e.Q6J("ngModel",o.product.count),e.xp6(4),e.Q6J("ngModel",o.product.price),e.xp6(3),e.Q6J("ngModel",o.product.newItem),e.xp6(4),e.Q6J("disabled",t.invalid)}}let Y=(()=>{class n{constructor(t,o,r,i,l,p,g){this.cloudinaryService=t,this.productService=o,this.categoryService=r,this.brandService=i,this.colorService=l,this.alertifyService=p,this.router=g,this.preload=!0,this.product={price:1,count:1}}ngOnInit(){this.categoryService.getCategories().subscribe(t=>{this.categories=t}),this.brandService.getBrands().subscribe(t=>{this.brands=t}),this.colorService.getColors().subscribe(t=>{this.colors=t,this.preload=!1})}removeFile(){this.file=null,this.url=null}dragOver(t,o){o.stopPropagation(),o.preventDefault(),t.className.includes("dropOver")||(t.classList.add("dropOver"),document.getElementById("dropLabel").innerText="Come on, let it go. Do not be afraid")}dragLeave(t){t.className.includes("dropOver")&&(t.classList.remove("dropOver"),document.getElementById("dropLabel").innerText="Drop Image Here")}dropFile(t,o){t.preventDefault(),this.dragLeave(o),console.log(event),console.log(document.getElementById("imgSelector"))}dragStart(t){t.preventDefault()}openFileDialog(){document.getElementById("imgSelector").focus(),document.getElementById("imgSelector").click()}onSelect(t){this.file=t.target.files[0];var o=new FileReader;o.readAsDataURL(this.file),o.onload=()=>{this.url=o.result.toString()}}createProduct(t){if(this.file){var o=new FormData;return o.append("file",this.file),o.append("upload_preset","uw_angular"),o.append("cloud_name","social-network-web"),this.preload=!0,void this.cloudinaryService.uploadImage(o).subscribe(r=>{this.product.imageUrl=r.secure_url,this.product.publishedDate=new Date,this.productService.createProduct(this.product).subscribe(i=>{this.preload=!1,this.router.navigate(["/home"]),setTimeout(()=>{this.alertifyService.success(`${this.product.name} successfully added.`)},50)})})}this.alertifyService.error("Please select image for product.")}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(C),e.Y36(f),e.Y36(Z.H),e.Y36(y.c),e.Y36(I.x),e.Y36(w.v),e.Y36(s.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-product-create"]],features:[e._Bn([f,C])],decls:2,vars:2,consts:[[4,"ngIf"],["class","row my-3 mx-4 d-flex flex-column",3,"ngSubmit",4,"ngIf"],[1,"row","my-3","mx-4","d-flex","flex-column",3,"ngSubmit"],["productForm","ngForm"],[1,"col-md-3","mx-auto","position-relative","p-0","mb-5","dropArea",3,"draggable","dragover","dragleave","drop","dragstart"],["dropArea",""],["id","dropLabel","class","position-absolute pointer user-select-none dropLabel",3,"click",4,"ngIf"],["type","file","name","imgSelector","id","imgSelector","accept","image/*",1,"d-none",3,"change"],["class","position-absolute m-0 rounded-lg dropedImage",3,"src","dblclick",4,"ngIf"],[1,"col-md-6","mx-auto","mb-3"],["for","proName"],["type","text","name","name","id","name","placeholder","Pleace enter product name.(required)","minlength","1","maxlength","25","required","",1,"w-100","outline-none","customInputStyle",3,"ngModel","ngModelChange"],["for","description"],["type","text","name","description","id","description","placeholder","Pleace enter product description.",1,"w-100","p-1","outline-none","customInputStyle",3,"ngModel","ngModelChange"],["for","categoryId",1,"d-block"],["name","categoryId","title","required","required","",1,"w-100","bg-white","selectStyle",3,"ngModel","title","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["for","brandId",1,"d-block"],["name","brandId","title","required","required","",1,"w-100","bg-white","selectStyle",3,"ngModel","title","ngModelChange"],["for","colorId",1,"d-block"],["name","colorId","title","required","required","",1,"w-100","bg-white","selectStyle",3,"ngModel","title","ngModelChange"],[1,"row"],[1,"col-md-6"],["for","count"],["type","number","min","1","value","1","name","count","id","count","placeholder","Pleace enter product count.(required)","required","",1,"w-100","p-1","mt-0","outline-none","customInputStyle",3,"ngModel","ngModelChange"],["for","price"],["type","number","min","1","value","1","name","price","id","price","placeholder","Pleace enter product price.(required)","required","",1,"w-100","p-1","mt-0","outline-none","customInputStyle",3,"ngModel","ngModelChange"],[1,"col-md-auto","mx-auto","mb-3"],[1,"form-check"],["type","checkbox","id","newItem","name","newItem","checked","",1,"form-check-input",3,"ngModel","ngModelChange"],["for","newItem",1,"form-check-label","user-select-none"],[1,"col-md-auto","mx-auto","mt-2","mb-4"],["type","submit",1,"btn","btn-success",3,"disabled"],["id","dropLabel",1,"position-absolute","pointer","user-select-none","dropLabel",3,"click"],[1,"position-absolute","m-0","rounded-lg","dropedImage",3,"src","dblclick"],[3,"value"]],template:function(t,o){1&t&&(e.YNc(0,A,1,0,"app-preload",0),e.YNc(1,O,48,18,"form",1)),2&t&&(e.Q6J("ngIf",o.preload),e.xp6(1),e.Q6J("ngIf",!o.preload))},dependencies:[u.sg,u.O5,a._Y,a.YN,a.Kr,a.Fj,a.wV,a.Wl,a.EJ,a.JJ,a.JL,a.Q7,a.wO,a.nD,a.qQ,a.On,a.F,v.r],styles:[".dropArea[_ngcontent-%COMP%]{width:30%;min-height:35vh;border:3px dashed black;border-radius:8px;z-index:0!important}.dropOver[_ngcontent-%COMP%]{border-style:solid}.dropLeave[_ngcontent-%COMP%]{border-style:dashed}.dropedImage[_ngcontent-%COMP%]{width:100%;min-height:100%;max-height:100%;z-index:10!important}.dropLabel[_ngcontent-%COMP%]{font-size:1.3vw;top:50%;left:50%;transform:translate(-50%,-50%)}.customeInputStyle[_ngcontent-%COMP%]{background:white;color:#000;border:1px solid black;border-radius:8px}.customeInputStyle[_ngcontent-%COMP%]:focus{background:black;color:#fff;border-color:#fff}.selectStyle[_ngcontent-%COMP%]{border:1px solid black;border-radius:8px}"]}),n})();var J=d(4083),D=d(2802);function H(n,c){1&n&&e._UZ(0,"app-preload")}function L(n,c){1&n&&(e.TgZ(0,"div",17)(1,"div",18),e._uU(2,"Please click on the image to change the image."),e.qZA()())}function E(n,c){if(1&n&&(e.TgZ(0,"option",25),e._uU(1),e.qZA()),2&n){const t=c.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.name)}}function K(n,c){if(1&n&&(e.TgZ(0,"option",25),e._uU(1),e.qZA()),2&n){const t=c.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.name)}}function G(n,c){if(1&n&&(e.TgZ(0,"option",25),e._uU(1),e.qZA()),2&n){const t=c.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.name)}}function B(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"div",19)(1,"div",20)(2,"select",21),e.NdJ("ngModelChange",function(r){e.CHM(t);const i=e.oxw();return e.KtG(i.product.categoryId=r)}),e.YNc(3,E,2,2,"option",22),e.qZA()(),e.TgZ(4,"div",20)(5,"select",23),e.NdJ("ngModelChange",function(r){e.CHM(t);const i=e.oxw();return e.KtG(i.product.brandId=r)}),e.YNc(6,K,2,2,"option",22),e.qZA()(),e.TgZ(7,"div",20)(8,"select",24),e.NdJ("ngModelChange",function(r){e.CHM(t);const i=e.oxw();return e.KtG(i.product.colorId=r)}),e.YNc(9,G,2,2,"option",22),e.qZA()()()}if(2&n){const t=e.oxw();e.xp6(2),e.Q6J("ngModel",t.product.categoryId),e.xp6(1),e.Q6J("ngForOf",t.categories),e.xp6(2),e.Q6J("ngModel",t.product.brandId),e.xp6(1),e.Q6J("ngForOf",t.brands),e.xp6(2),e.Q6J("ngModel",t.product.colorId),e.xp6(1),e.Q6J("ngForOf",t.colors)}}function V(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"div",26)(1,"div",27)(2,"label",28)(3,"input",29),e.NdJ("ngModelChange",function(r){e.CHM(t);const i=e.oxw();return e.KtG(i.product.newItem=r)}),e.qZA(),e._uU(4," New Item"),e.qZA()(),e.TgZ(5,"div",30)(6,"label",31),e._uU(7," Count: "),e.TgZ(8,"input",32),e.NdJ("ngModelChange",function(r){e.CHM(t);const i=e.oxw();return e.KtG(i.product.count=r)}),e.qZA()()()()}if(2&n){const t=e.oxw();e.xp6(3),e.Q6J("ngModel",t.product.newItem),e.xp6(5),e.Q6J("ngModel",t.product.count)}}let j=(()=>{class n{constructor(t,o,r,i,l,p,g,m,Me,Pe){this.authService=t,this.productService=o,this.categoryService=r,this.brandService=i,this.colorService=l,this.activatedRouted=p,this.cookieService=g,this.alertifyService=m,this.cloudinaryService=Me,this.router=Pe,this.preload=!0,this.selectedImageFile=null,this.rowCount=1,this.selectedCount=1,this.isVisible=!0}ngOnInit(){this.activatedRouted.params.subscribe(t=>{this.productService.getProductById(t.productId).subscribe(o=>{this.productBase={...o},this.product=o;for(let r=0;r<o.description.length;r++)"\n"==o.description[r]&&this.rowCount++;this.preload=!1}),this.categoryService.getCategories().subscribe(o=>{this.categories=o}),this.brandService.getBrands().subscribe(o=>{this.brands=o}),this.colorService.getColors().subscribe(o=>{this.colors=o})}),this.authService.userBase.subscribe(t=>{t&&(this.isAuthenticated="admin"==t.role,this.GMAIL=t.email)})}selectImage(t){this.selectedImageFile=t.target.files[0],document.getElementById("proImg").src=URL.createObjectURL(this.selectedImageFile)}openFiles(){document.getElementById("imageUrl").click()}addToCard(){var t=this.cookieService.check(`${this.GMAIL}cards`)?JSON.parse(this.cookieService.get(`${this.GMAIL}cards`)):null;if(t){var o=-1;for(let r=0;r<t.length;r++)if(t[r].id==this.product.id){o=r;break}o>=0?t[o].count++:t.push(this.addNewCard())}else(t=[]).push(this.addNewCard());this.cookieService.delete(`${this.GMAIL}cards`),this.cookieService.set(`${this.GMAIL}cards`,JSON.stringify(t)),this.alertifyService.success(this.product.name+" added successfully.")}addNewCard(){return{id:this.product.id,product:this.product,count:1}}changeMode(){this.isVisible=!this.isVisible,["name","description","price"].forEach(o=>{var r=document.getElementById(o);this.isVisible?r.setAttribute("readonly","readonly"):r.removeAttribute("readonly")}),this.isVisible&&this.updateProduct()}productUpdateBridge(){this.product.publishedDate=new Date,this.productService.updateProduct(this.product).subscribe(t=>{this.preload=!1,setTimeout(()=>{this.alertifyService.warning(`${this.product.name} update successfully.`)},50)})}updateProduct(){var t=!!this.selectedImageFile;if(this.preload=!0,t){var o=new FormData;o.append("file",this.selectedImageFile),o.append("upload_preset","uw_angular"),o.append("cloud_name","social-network-web"),this.cloudinaryService.uploadImage(o).subscribe(r=>{this.product.imageUrl=r.secure_url,this.productUpdateBridge()})}else JSON.stringify(this.product)!=JSON.stringify(this.productBase)?this.productUpdateBridge():this.preload=!1}deleteProduct(){this.productService.deleteProduct(this.product.id).subscribe(t=>{this.router.navigate(["/products"])})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(D.e),e.Y36(f),e.Y36(Z.H),e.Y36(y.c),e.Y36(I.x),e.Y36(s.gz),e.Y36(J.N),e.Y36(w.v),e.Y36(C),e.Y36(s.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-product-details"]],features:[e._Bn([J.N])],decls:21,vars:28,consts:[[4,"ngIf"],["class","row mx-2 mt-3",4,"ngIf"],[1,"row","mt-3","mb-3"],[1,"col-md-3","ml-auto","m-0"],["id","proImg",2,"height","25rem",3,"src","click"],[1,"col-md-5","mr-auto","m-0","bg-dark","rounded-right","position-relative"],["type","file","name","imageUrl","id","imageUrl","accept","image/*",1,"d-none",3,"change"],["readonly","","maxlength","25","type","text","id","name",1,"h4","mt-3","ml-2","base-style",3,"ngModel","ngModelChange"],["id","description","cols","30","readonly","","id","description",1,"mt-3","ml-2","base-style",3,"rows","ngModel","ngModelChange"],[1,"h5","text-light","mt-4","ml-2"],["readonly","","min","1","type","number","id","price","pattern","[0-9]*",1,"w-auto","base-style",3,"ngModel","ngModelChange"],["class","row w-100 px-3 mt-3",4,"ngIf"],["class","row mt-3",4,"ngIf"],[1,"row","w-100","m-0","position-absolute","buttons-style"],[1,"btn","btn-success","col-md-3","mx-auto","add-to-card-style",3,"click"],[1,"btn","btn-dark","col-md-3","mx-auto","add-to-card-style",3,"click"],[1,"btn","btn-dark","col-md-3","mx-auto","add-to-card-style","delete-style",3,"click"],[1,"row","mx-2","mt-3"],[1,"col-md-12","alert","alert-warning"],[1,"row","w-100","px-3","mt-3"],[1,"col-md-4"],["name","categoryId",1,"w-100","p-1",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["name","brandId",1,"w-100","p-1",3,"ngModel","ngModelChange"],["name","colorId",1,"w-100","p-1",3,"ngModel","ngModelChange"],[3,"value"],[1,"row","mt-3"],[1,"col-md-3"],[1,"text-light"],["type","checkbox","name","newItem",3,"ngModel","ngModelChange"],[1,"col-md-5","text-light"],["for","count"],["type","number","min","1","pattern","[0-9]*","name","count","id","count",3,"ngModel","ngModelChange"]],template:function(t,o){1&t&&(e.YNc(0,H,1,0,"app-preload",0),e.YNc(1,L,3,0,"div",1),e.TgZ(2,"div",2)(3,"div",3)(4,"img",4),e.NdJ("click",function(){return o.isVisible?"":o.openFiles()}),e.qZA()(),e.TgZ(5,"div",5)(6,"input",6),e.NdJ("change",function(i){return o.selectImage(i)}),e.qZA(),e.TgZ(7,"input",7),e.NdJ("ngModelChange",function(i){return o.product.name=i}),e.qZA(),e.TgZ(8,"textarea",8),e.NdJ("ngModelChange",function(i){return o.product.description=i}),e.qZA(),e.TgZ(9,"label",9),e._uU(10,"Price: $ "),e.TgZ(11,"input",10),e.NdJ("ngModelChange",function(i){return o.product.price=i}),e.qZA()(),e.YNc(12,B,10,6,"div",11),e.YNc(13,V,9,2,"div",12),e.TgZ(14,"div",13)(15,"button",14),e.NdJ("click",function(){return o.addToCard()}),e._uU(16,"Add To Card"),e.qZA(),e.TgZ(17,"button",15),e.NdJ("click",function(){return o.changeMode()}),e._uU(18),e.qZA(),e.TgZ(19,"button",16),e.NdJ("click",function(){return o.deleteProduct()}),e._uU(20,"Delete"),e.qZA()()()()),2&t&&(e.Q6J("ngIf",o.preload),e.xp6(1),e.Q6J("ngIf",o.isAuthenticated&&!o.isVisible),e.xp6(3),e.Q6J("src",o.product.imageUrl,e.LSH),e.xp6(3),e.ekj("no-admin-pro-name",o.isVisible)("text-light",o.isVisible),e.Q6J("ngModel",o.product.name),e.xp6(1),e.ekj("no-admin-pro-desc",o.isVisible)("text-light",o.isVisible),e.Q6J("rows",o.rowCount)("ngModel",o.product.description),e.xp6(3),e.ekj("no-admin-pro-price",o.isVisible)("text-danger",o.isVisible),e.Q6J("ngModel",o.product.price),e.xp6(1),e.Q6J("ngIf",!o.isVisible),e.xp6(1),e.Q6J("ngIf",!o.isVisible),e.xp6(2),e.ekj("d-none",o.isAuthenticated),e.xp6(2),e.ekj("d-none",!o.isAuthenticated),e.xp6(1),e.Oqu(o.isVisible?"Change Mode":"Save Mode"),e.xp6(1),e.ekj("d-none",!o.isAuthenticated||!o.isVisible))},dependencies:[u.sg,u.O5,a.YN,a.Kr,a.Fj,a.wV,a.Wl,a.EJ,a.JJ,a.nD,a.c5,a.qQ,a.On,v.r],styles:[".base-style[_ngcontent-%COMP%]{width:100%;text-align:justify;border:0;-webkit-appearance:textfield}.no-admin-pro-name[_ngcontent-%COMP%]{background-color:transparent;outline:none;cursor:context-menu}.no-admin-pro-desc[_ngcontent-%COMP%]{background-color:transparent;outline:none;cursor:context-menu;resize:none}.no-admin-pro-price[_ngcontent-%COMP%]{outline:none;cursor:context-menu;background-color:transparent}.buttons-style[_ngcontent-%COMP%]{left:50%;transform:translate(-50%);bottom:10px!important}.add-to-card-style[_ngcontent-%COMP%]{border:1px solid white;background-color:transparent;transition:.8s}.add-to-card-style[_ngcontent-%COMP%]:hover{background:white!important;border:1px solid black;color:#000;transition:.8s}.delete-style[_ngcontent-%COMP%]:hover{background:red!important;border-color:#fff!important;color:#fff;transition:.8s}"]}),n})(),$=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-product-home"]],decls:1,vars:0,template:function(t,o){1&t&&e._UZ(0,"router-outlet")},dependencies:[s.lC]}),n})();var R=d(1224),z=d(6533),X=d(1781);function W(n,c){1&n&&e._UZ(0,"app-preload")}function ee(n,c){1&n&&(e.TgZ(0,"div",17),e._uU(1,"There are no products in the base."),e.qZA())}function te(n,c){1&n&&(e.TgZ(0,"div",26)(1,"span"),e._uU(2,"New"),e.qZA()())}function oe(n,c){if(1&n&&(e.TgZ(0,"div",21)(1,"a")(2,"div",22),e._UZ(3,"img",23),e.qZA(),e.TgZ(4,"div",24)(5,"h6"),e._uU(6),e.qZA(),e.TgZ(7,"h6"),e._uU(8," Price:"),e.TgZ(9,"span"),e._uU(10),e.qZA()()(),e.YNc(11,te,3,0,"div",25),e.qZA()()),2&n){const t=e.oxw().$implicit;e.Q6J("id",t.id),e.xp6(3),e.Q6J("src",t.imageUrl,e.LSH)("alt",t.name),e.xp6(3),e.Oqu(t.name),e.xp6(4),e.hij("$",t.price,""),e.xp6(1),e.Q6J("ngIf",t.newItem)}}const ne=function(n){return["/products",n]};function re(n,c){if(1&n&&(e.TgZ(0,"div",19),e.YNc(1,oe,12,6,"div",20),e.qZA()),2&n){const t=c.$implicit;e.Q6J("routerLink",e.VKq(2,ne,t.id)),e.xp6(1),e.Q6J("ngIf",t.count>0)}}function ie(n,c){if(1&n&&(e.TgZ(0,"div",10),e.YNc(1,re,2,4,"div",18),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t.products[t.pageNumber])}}function ce(n,c){1&n&&(e.TgZ(0,"div",26)(1,"span"),e._uU(2,"New"),e.qZA()())}function ae(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"div",30),e.NdJ("click",function(){e.CHM(t);const r=e.oxw().$implicit,i=e.oxw(3);return e.KtG(i.deleteProducts(r))}),e.TgZ(1,"a")(2,"div",22),e._UZ(3,"img",23),e.qZA(),e.TgZ(4,"div",24)(5,"h6"),e._uU(6),e.qZA(),e.TgZ(7,"h6"),e._uU(8," Price:"),e.TgZ(9,"span"),e._uU(10),e.qZA()()(),e.YNc(11,ce,3,0,"div",25),e.qZA()()}if(2&n){const t=e.oxw().$implicit;e.Q6J("id",t.id),e.xp6(3),e.Q6J("src",t.imageUrl,e.LSH)("alt",t.name),e.xp6(3),e.Oqu(t.name),e.xp6(4),e.hij("$",t.price,""),e.xp6(1),e.Q6J("ngIf",t.newItem)}}function de(n,c){if(1&n&&(e.TgZ(0,"div",28),e.YNc(1,ae,12,6,"div",29),e.qZA()),2&n){const t=c.$implicit;e.xp6(1),e.Q6J("ngIf",t.count>0)}}function le(n,c){if(1&n&&(e.TgZ(0,"div",10),e.YNc(1,de,2,1,"div",27),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t.products[t.pageNumber])}}const x=function(n){return{page:n}};function se(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"li",31)(1,"a",32),e.NdJ("click",function(){e.CHM(t);const r=e.oxw(2);return e.KtG(r.pageNumberChange(r.pageNumber-1))}),e._uU(2,"\xab"),e.qZA()()}if(2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("routerLink","/products")("queryParams",e.VKq(3,x,t.pageNumber-1))("queryParamsHandling","merge")}}function ue(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"li",31)(1,"a",33),e.NdJ("click",function(){const i=e.CHM(t).index,l=e.oxw(2);return e.KtG(l.pageNumberChange(i+1))}),e._uU(2),e.qZA()()}if(2&n){const t=c.index,o=e.oxw(2);e.ekj("d-none",t==o.products.length-1),e.xp6(1),e.ekj("bg-dark",t+1==o.pageNumber)("text-light",t+1==o.pageNumber)("text-dark",t+1!=o.pageNumber),e.Q6J("routerLink","/products")("queryParams",e.VKq(12,x,t+1))("queryParamsHandling","merge"),e.xp6(1),e.Oqu(t+1)}}function pe(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"li",31)(1,"a",34),e.NdJ("click",function(){e.CHM(t);const r=e.oxw(2);return e.KtG(r.pageNumberChange(r.pageNumber+1))}),e._uU(2,"\xbb"),e.qZA()()}if(2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("routerLink","/products")("queryParams",e.VKq(3,x,t.pageNumber+1))("queryParamsHandling","merge")}}function ge(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"section",2)(1,"div",3)(2,"div",4)(3,"h2"),e._uU(4,"All Products"),e.qZA()(),e.TgZ(5,"div",5)(6,"div",6)(7,"input",7),e.NdJ("ngModelChange",function(r){e.CHM(t);const i=e.oxw();return e.KtG(i.filterText=r)})("ngModelChange",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.searchValueChange())}),e.qZA(),e.TgZ(8,"button",8),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.searchItem())}),e._UZ(9,"i",9),e.qZA()()(),e.TgZ(10,"div",10)(11,"div"),e._UZ(12,"app-brands")(13,"app-categories")(14,"app-colors"),e.qZA(),e.TgZ(15,"div"),e.YNc(16,ee,2,0,"div",11),e.YNc(17,ie,2,1,"div",12),e.YNc(18,le,2,1,"div",12),e.TgZ(19,"nav",13)(20,"ul",14),e.YNc(21,se,3,5,"li",15),e.YNc(22,ue,3,14,"li",16),e.YNc(23,pe,3,5,"li",15),e.qZA()()()()()()}if(2&n){const t=e.oxw();e.xp6(7),e.Q6J("ngModel",t.filterText),e.xp6(1),e.ekj("btn-danger",t.isDeleteMode)("btn-success",!t.isDeleteMode),e.xp6(3),e.ekj("col-md-3",!t.isDeleteMode)("d-none",t.isDeleteMode),e.xp6(4),e.ekj("col-md-9",!t.isDeleteMode)("col-md-12",t.isDeleteMode),e.xp6(1),e.Q6J("ngIf",0==t.products.length),e.xp6(1),e.Q6J("ngIf",t.products.length>0&&!t.isDeleteMode),e.xp6(1),e.Q6J("ngIf",t.products.length>0&&t.isDeleteMode),e.xp6(3),e.Q6J("ngIf",t.pageNumber>=2),e.xp6(1),e.Q6J("ngForOf",t.products),e.xp6(1),e.Q6J("ngIf",t.pageNumber<t.products.length-1)}}const _e=[{path:"",component:$,canActivate:[N.a],children:[{path:"",component:(()=>{class n{constructor(t,o,r){this.productService=t,this.router=o,this.route=r,this.productsBase=[],this.chunkSize=2,this.products=[],this.preload=!0,this.filterText="",this.pageNumber=1}ngOnInit(){this.productService.getProducts().subscribe(t=>{this.productsBase=t,this.preload=!1;const o=new URLSearchParams(window.location.search),r=o.get("dltMode"),i=o.get("page");if(r&&"true"==r)return this.paginationCreate(t,i),void(this.isDeleteMode=!0);if(0==t.length)return;const l=o.get("categoryId"),p=o.get("brandId"),g=o.get("colorId");"0"!=l&&null!=l&&(t=t.filter(m=>m.categoryId===l)),"0"!=p&&null!=p&&(t=t.filter(m=>m.brandId===p)),"0"!=g&&null!=g&&(t=t.filter(m=>m.colorId===g)),this.paginationCreate(t,i)})}paginationCreate(t,o){const r=[];for(let i=0;i<t.length;i+=this.chunkSize){const l=t.slice(i,i+this.chunkSize);0==i&&r.push([]),r.push(l)}if(this.products=r,null!=o&&"0"!=o){let i=+o;this.pageNumber=i<=0||i>=this.products.length-1?1:i}}reloadAllComponent(t){setTimeout(()=>{this.router.routeReuseStrategy.shouldReuseRoute=()=>!1,this.router.onSameUrlNavigation="reload",this.router.navigate([t||"/products"],{relativeTo:this.route,queryParamsHandling:"merge"})},10)}deleteProducts(t){console.log(t),this.productService.deleteProduct(t.id).subscribe(o=>{this.reloadAllComponent()})}searchValueChange(){this.searchItem()}searchItem(){const t=[];this.productsBase.forEach(o=>{o.name.toLocaleLowerCase().includes(this.filterText.toLocaleLowerCase())&&t.push(o)}),console.log(t),this.paginationCreate(t,null)}pageNumberChange(t){this.pageNumber=t}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(f),e.Y36(s.F0),e.Y36(s.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-products"]],decls:2,vars:2,consts:[[4,"ngIf"],["class","shop_section layout_padding",4,"ngIf"],[1,"shop_section","layout_padding"],[1,"container-fluid"],[1,"heading_container","heading_center"],[1,"row","mb-3"],[1,"col-md-6","mx-auto","d-flex","flex-row"],["type","text","id","filterText","placeholder","Search","aria-label","filterText",1,"form-control","mr-sm-2",3,"ngModel","ngModelChange"],["title","Search",1,"btn","ml-2",3,"click"],["aria-hidden","true",1,"fa","fa-search","pointer"],[1,"row"],["class","alert alert-warning mx-3",4,"ngIf"],["class","row",4,"ngIf"],["aria-label","page navigation example",1,"mt-3"],[1,"pagination"],["class","page-item",4,"ngIf"],["class","page-item",3,"d-none",4,"ngFor","ngForOf"],[1,"alert","alert-warning","mx-3"],["class","col-md-6",3,"routerLink",4,"ngFor","ngForOf"],[1,"col-md-6",3,"routerLink"],["class","box pointer",3,"id",4,"ngIf"],[1,"box","pointer",3,"id"],[1,"img-box"],[3,"src","alt"],[1,"detail-box"],["class","new",4,"ngIf"],[1,"new"],["class","col-sm-6 col-xl-3",4,"ngFor","ngForOf"],[1,"col-sm-6","col-xl-3"],["class","box pointer",3,"id","click",4,"ngIf"],[1,"box","pointer",3,"id","click"],[1,"page-item"],["aria-label","Previous",1,"page-link","text-dark",3,"routerLink","queryParams","queryParamsHandling","click"],[1,"page-link",3,"routerLink","queryParams","queryParamsHandling","click"],["aria-label","Next",1,"page-link","text-dark",3,"routerLink","queryParams","queryParamsHandling","click"]],template:function(t,o){1&t&&(e.YNc(0,W,1,0,"app-preload",0),e.YNc(1,ge,24,19,"section",1)),2&t&&(e.Q6J("ngIf",o.preload),e.xp6(1),e.Q6J("ngIf",!o.preload))},dependencies:[s.rH,s.yS,u.sg,u.O5,a.Fj,a.JJ,a.On,v.r,R.u,z.B,X.V]}),n})()},{path:"create",component:Y},{path:":productId",component:j}]}];let he=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[s.Bz.forChild(_e),s.Bz]}),n})();var fe=d(4466),Ce=d(5397),ve=d(2582),xe=d(6471);let be=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[he,u.ez,a.u5,fe.m,Ce.CategoriesModule,ve.BrandsModule,xe.ColorsModule]}),n})()}}]);