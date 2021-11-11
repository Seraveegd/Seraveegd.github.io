"use strict";(self.webpackChunkd2rapp=self.webpackChunkd2rapp||[]).push([[409],{5496:(C,u,c)=>{c.d(u,{j:()=>n});var s=c(7716),a=c(1841);let n=(()=>{class i{constructor(p){this.http=p}getCrafts(){return this.http.get("/assets/craft.json")}getRunes(){return this.http.get("/assets/runeupgrade.json")}getItems(){return this.http.get("/assets/item.json")}getEquipments(){return this.http.get("/assets/equipment.json")}}return i.\u0275fac=function(p){return new(p||i)(s.LFG(a.eN))},i.\u0275prov=s.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},2409:(C,u,c)=>{c.r(u),c.d(u,{RecipesModule:()=>b});var s=c(8583),a=c(4655),n=c(7716);const i=function(){return["craft"]},g=function(t){return{active:t}},p=function(){return["runes"]},f=function(){return["items"]},_=function(){return["equipments"]};let M=(()=>{class t{constructor(){this.selected=""}ngOnInit(){}clink(e){this.selected=e}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-recipes"]],decls:20,vars:24,consts:[[3,"ngClass"],[3,"routerLink","ngClass","click"]],template:function(e,o){1&e&&(n.TgZ(0,"div",0),n.TgZ(1,"div",0),n._uU(2,"\u914d\u65b9"),n.qZA(),n.TgZ(3,"div",0),n.TgZ(4,"div",0),n.TgZ(5,"span"),n._uU(6,"\u65b9\u584a"),n.qZA(),n.TgZ(7,"span"),n.TgZ(8,"a",1),n.NdJ("click",function(){return o.clink("1")}),n._uU(9,"\u624b\u5de5\u85dd"),n.qZA(),n.qZA(),n.TgZ(10,"span"),n.TgZ(11,"a",1),n.NdJ("click",function(){return o.clink("2")}),n._uU(12,"\u7b26\u6587"),n.qZA(),n.qZA(),n.TgZ(13,"span"),n.TgZ(14,"a",1),n.NdJ("click",function(){return o.clink("3")}),n._uU(15,"\u7269\u54c1"),n.qZA(),n.qZA(),n.TgZ(16,"span"),n.TgZ(17,"a",1),n.NdJ("click",function(){return o.clink("4")}),n._uU(18,"\u88dd\u5099"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n._UZ(19,"router-outlet"),n.qZA()),2&e&&(n.Q6J("ngClass","contents"),n.xp6(1),n.Q6J("ngClass","title"),n.xp6(2),n.Q6J("ngClass","rwords"),n.xp6(1),n.Q6J("ngClass","list"),n.xp6(4),n.Q6J("routerLink",n.DdM(12,i))("ngClass",n.VKq(13,g,"1"===o.selected)),n.xp6(3),n.Q6J("routerLink",n.DdM(15,p))("ngClass",n.VKq(16,g,"2"===o.selected)),n.xp6(3),n.Q6J("routerLink",n.DdM(18,f))("ngClass",n.VKq(19,g,"3"===o.selected)),n.xp6(3),n.Q6J("routerLink",n.DdM(21,_))("ngClass",n.VKq(22,g,"4"===o.selected)))},directives:[s.mk,a.yS,a.lC],styles:[".contents[_ngcontent-%COMP%]{border-radius:.25rem;border:1px solid rgba(0,0,0,.125);margin-top:20px}.contents[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:#444;color:#bb9e74;padding:24px;font-size:20pt;border-bottom:1px solid rgba(0,0,0,.125)}.contents[_ngcontent-%COMP%]   .rwords[_ngcontent-%COMP%]{background-color:#303030;padding:18px}.contents[_ngcontent-%COMP%]   .rwords[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{display:flex;margin-bottom:6px;flex-wrap:wrap}.contents[_ngcontent-%COMP%]   .rwords[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child{border:1px solid #36739f;color:#36739f;background-color:#303030;font-weight:bold;padding:8px 12px;font-size:16px}.contents[_ngcontent-%COMP%]   .rwords[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{margin:4px;border-radius:5px;background-color:#444;color:#fff}.contents[_ngcontent-%COMP%]   .rwords[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;padding:10px 12px;font-size:16px;display:block;color:#fff}.contents[_ngcontent-%COMP%]   .rwords[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background-color:#375a7f;color:#fff;border-radius:5px}.contents[_ngcontent-%COMP%]   .rwords[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#303030}"]}),t})();var m=c(5496),O=c(4770);function P(t,r){1&t&&(n.TgZ(0,"p",0),n._uU(1,"\u5929\u68af\u9650\u5b9a"),n.qZA()),2&t&&n.Q6J("ngClass","ladder")}function h(t,r){if(1&t&&(n.ynx(0),n.TgZ(1,"div",0),n._uU(2),n._UZ(3,"img",2),n._uU(4),n.qZA(),n.BQk()),2&t){const e=n.oxw().$implicit,o=n.oxw(2);n.xp6(1),n.Q6J("ngClass","rune"),n.xp6(1),n.hij(" ",e.amout,"x"),n.xp6(1),n.Q6J("src","/assets/images/rune/"+e.material+"_Rune.png",n.LSH),n.xp6(1),n.AsE("",o.control[e.material].name,"(",o.control[e.material].code,") ")}}function x(t,r){if(1&t&&(n.ynx(0),n._uU(1),n.BQk()),2&t){const e=n.oxw().$implicit;n.xp6(1),n.AsE(" ",e.amout,"x",e.material," ")}}function Z(t,r){if(1&t&&(n.TgZ(0,"p"),n.YNc(1,h,5,5,"ng-container",4),n.YNc(2,x,2,2,"ng-container",4),n.qZA()),2&t){const e=r.$implicit,o=n.oxw(2);n.xp6(1),n.Q6J("ngIf",o.control[e.material]),n.xp6(1),n.Q6J("ngIf",!o.control[e.material])}}function T(t,r){if(1&t&&(n.TgZ(0,"tr"),n.TgZ(1,"td",0),n.TgZ(2,"p",0),n._UZ(3,"img",2),n._uU(4),n.qZA(),n.YNc(5,P,2,1,"p",3),n.qZA(),n.TgZ(6,"td"),n.YNc(7,Z,3,2,"p",1),n.qZA(),n.qZA()),2&t){const e=r.$implicit,o=n.oxw();n.xp6(1),n.Q6J("ngClass","rare"),n.xp6(1),n.Q6J("ngClass","rune"),n.xp6(1),n.Q6J("src","/assets/images/rune/"+e.result+"_Rune.png",n.LSH),n.xp6(1),n.AsE("",o.control[e.result].name,"(",o.control[e.result].code,") "),n.xp6(1),n.Q6J("ngIf",e.ladder),n.xp6(2),n.Q6J("ngForOf",e.recipe)}}const A=[{path:"",component:M,children:[{path:"craft",loadChildren:()=>c.e(678).then(c.bind(c,1678)).then(t=>t.CraftModule)},{path:"runes",component:(()=>{class t{constructor(e,o){this.recipe=e,this.rune=o,this.runeupgrades=this.recipe.getRunes(),this.control=[],this.runes=this.rune.getRunes().subscribe(l=>{l&&l.forEach(d=>{this.control[d.name_en]={name:d.name,code:d.number}})})}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(m.j),n.Y36(O.Z))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-runes"]],decls:11,vars:5,consts:[[3,"ngClass"],[4,"ngFor","ngForOf"],[3,"src"],[3,"ngClass",4,"ngIf"],[4,"ngIf"]],template:function(e,o){1&e&&(n.TgZ(0,"div",0),n._uU(1,"\u7b26\u6587"),n.qZA(),n.TgZ(2,"table",0),n.TgZ(3,"thead"),n.TgZ(4,"th"),n._uU(5,"\u540d\u7a31"),n.qZA(),n.TgZ(6,"th"),n._uU(7,"\u6750\u6599"),n.qZA(),n.qZA(),n.TgZ(8,"tbody"),n.YNc(9,T,8,7,"tr",1),n.ALo(10,"async"),n.qZA(),n.qZA()),2&e&&(n.Q6J("ngClass","title"),n.xp6(2),n.Q6J("ngClass","crafts"),n.xp6(7),n.Q6J("ngForOf",n.lcZ(10,3,o.runeupgrades)))},directives:[s.mk,s.sg,s.O5],pipes:[s.Ov],styles:[".title[_ngcontent-%COMP%]{background-color:#444;color:#bb9e74;padding:24px;font-size:20pt;border-bottom:1px solid rgba(0,0,0,.125)}.crafts[_ngcontent-%COMP%]{width:100%;text-align:center;color:#fff;border-collapse:collapse;margin-bottom:10px;background-color:#444}.crafts[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .crafts[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:8px;border:1px solid #1f1f1f;white-space:pre-line;line-height:24px}.crafts[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:20px;background-color:#303030}.crafts[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd){background-color:#3c3c3c}.crafts[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background-color:#303030}.crafts[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child{border-bottom:none}.crafts[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#272727}.crafts[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:20px;vertical-align:top}.crafts[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{vertical-align:top}.crafts[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{color:#dcc684}.crafts[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .ladder[_ngcontent-%COMP%]{color:#8b8b8b}.crafts[_ngcontent-%COMP%]   td.rare[_ngcontent-%COMP%]{color:#ffff6f}.crafts[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .slot[_ngcontent-%COMP%]{color:#7a7aff}.crafts[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .magic[_ngcontent-%COMP%]{color:#7a7aff}.crafts[_ngcontent-%COMP%]   td.limit[_ngcontent-%COMP%]{text-align:left;line-height:30px}.crafts[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .rune[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;color:#ffba00;flex-wrap:wrap}.crafts[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .rune[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px}.crafts[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .rune[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{margin:4px}.crafts[_ngcontent-%COMP%]   td.effect[_ngcontent-%COMP%]{color:#7a7aff}.crafts[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{white-space:pre-wrap}.crafts[_ngcontent-%COMP%]   .margin[_ngcontent-%COMP%]{border-bottom:20px solid #222222}"]}),t})()},{path:"items",loadChildren:()=>c.e(709).then(c.bind(c,5709)).then(t=>t.ItemsModule)},{path:"equipments",loadChildren:()=>c.e(674).then(c.bind(c,2674)).then(t=>t.EquipmentsModule)}]}];let R=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[a.Bz.forChild(A)],a.Bz]}),t})(),b=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[s.ez,R]]}),t})()}}]);