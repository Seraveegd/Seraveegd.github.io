"use strict";(self.webpackChunkd2rapp=self.webpackChunkd2rapp||[]).push([[238],{2238:(Z,L,r)=>{r.d(L,{WI:()=>R,Bq:()=>T,uw:()=>D,H8:()=>N,ZT:()=>V,xY:()=>Q,Is:()=>X,so:()=>p,uh:()=>z});var _=r(625),h=r(7636),i=r(7716),y=r(2458),E=r(946),A=r(8583),g=r(9765),I=r(1439),x=r(5917),f=r(5435),m=r(5257),F=r(9761),C=r(521),d=r(7238),O=r(6461),b=r(9238);function k(a,o){}class v{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.maxWidth="80vw",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.autoFocus=!0,this.restoreFocus=!0,this.closeOnNavigation=!0}}const w={dialogContainer:(0,d.X$)("dialogContainer",[(0,d.SB)("void, exit",(0,d.oB)({opacity:0,transform:"scale(0.7)"})),(0,d.SB)("enter",(0,d.oB)({transform:"none"})),(0,d.eR)("* => enter",(0,d.jt)("150ms cubic-bezier(0, 0, 0.2, 1)",(0,d.oB)({transform:"none",opacity:1}))),(0,d.eR)("* => void, * => exit",(0,d.jt)("75ms cubic-bezier(0.4, 0.0, 0.2, 1)",(0,d.oB)({opacity:0})))])};let S=(()=>{class a extends h.en{constructor(t,e,n,s,l,c){super(),this._elementRef=t,this._focusTrapFactory=e,this._changeDetectorRef=n,this._config=l,this._focusMonitor=c,this._animationStateChanged=new i.vpe,this._elementFocusedBeforeDialogWasOpened=null,this._closeInteractionType=null,this.attachDomPortal=u=>(this._portalOutlet.hasAttached(),this._portalOutlet.attachDomPortal(u)),this._ariaLabelledBy=l.ariaLabelledBy||null,this._document=s}_initializeWithAttachedContent(){this._setupFocusTrap(),this._capturePreviouslyFocusedElement(),this._focusDialogContainer()}attachComponentPortal(t){return this._portalOutlet.hasAttached(),this._portalOutlet.attachComponentPortal(t)}attachTemplatePortal(t){return this._portalOutlet.hasAttached(),this._portalOutlet.attachTemplatePortal(t)}_recaptureFocus(){this._containsFocus()||(!this._config.autoFocus||!this._focusTrap.focusInitialElement())&&this._elementRef.nativeElement.focus()}_trapFocus(){this._config.autoFocus?this._focusTrap.focusInitialElementWhenReady():this._containsFocus()||this._elementRef.nativeElement.focus()}_restoreFocus(){const t=this._elementFocusedBeforeDialogWasOpened;if(this._config.restoreFocus&&t&&"function"==typeof t.focus){const e=(0,C.ht)(),n=this._elementRef.nativeElement;(!e||e===this._document.body||e===n||n.contains(e))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_setupFocusTrap(){this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement)}_capturePreviouslyFocusedElement(){this._document&&(this._elementFocusedBeforeDialogWasOpened=(0,C.ht)())}_focusDialogContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){const t=this._elementRef.nativeElement,e=(0,C.ht)();return t===e||t.contains(e)}}return a.\u0275fac=function(t){return new(t||a)(i.Y36(i.SBq),i.Y36(b.qV),i.Y36(i.sBO),i.Y36(A.K0,8),i.Y36(v),i.Y36(b.tE))},a.\u0275dir=i.lG2({type:a,viewQuery:function(t,e){if(1&t&&i.Gf(h.Pl,7),2&t){let n;i.iGM(n=i.CRH())&&(e._portalOutlet=n.first)}},features:[i.qOj]}),a})(),Y=(()=>{class a extends S{constructor(){super(...arguments),this._state="enter"}_onAnimationDone({toState:t,totalTime:e}){"enter"===t?(this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})):"exit"===t&&(this._restoreFocus(),this._animationStateChanged.next({state:"closed",totalTime:e}))}_onAnimationStart({toState:t,totalTime:e}){"enter"===t?this._animationStateChanged.next({state:"opening",totalTime:e}):("exit"===t||"void"===t)&&this._animationStateChanged.next({state:"closing",totalTime:e})}_startExitAnimation(){this._state="exit",this._changeDetectorRef.markForCheck()}}return a.\u0275fac=function(){let o;return function(e){return(o||(o=i.n5z(a)))(e||a)}}(),a.\u0275cmp=i.Xpm({type:a,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1","aria-modal","true",1,"mat-dialog-container"],hostVars:6,hostBindings:function(t,e){1&t&&i.WFA("@dialogContainer.start",function(s){return e._onAnimationStart(s)})("@dialogContainer.done",function(s){return e._onAnimationDone(s)}),2&t&&(i.Ikx("id",e._id),i.uIk("role",e._config.role)("aria-labelledby",e._config.ariaLabel?null:e._ariaLabelledBy)("aria-label",e._config.ariaLabel)("aria-describedby",e._config.ariaDescribedBy||null),i.d8E("@dialogContainer",e._state))},features:[i.qOj],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,e){1&t&&i.YNc(0,k,0,0,"ng-template",0)},directives:[h.Pl],styles:[".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;box-sizing:content-box;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],encapsulation:2,data:{animation:[w.dialogContainer]}}),a})(),W=0;class p{constructor(o,t,e="mat-dialog-"+W++){this._overlayRef=o,this._containerInstance=t,this.id=e,this.disableClose=this._containerInstance._config.disableClose,this._afterOpened=new g.xQ,this._afterClosed=new g.xQ,this._beforeClosed=new g.xQ,this._state=0,t._id=e,t._animationStateChanged.pipe((0,f.h)(n=>"opened"===n.state),(0,m.q)(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe((0,f.h)(n=>"closed"===n.state),(0,m.q)(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),o.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._afterClosed.next(this._result),this._afterClosed.complete(),this.componentInstance=null,this._overlayRef.dispose()}),o.keydownEvents().pipe((0,f.h)(n=>n.keyCode===O.hY&&!this.disableClose&&!(0,O.Vb)(n))).subscribe(n=>{n.preventDefault(),M(this,"keyboard")}),o.backdropClick().subscribe(()=>{this.disableClose?this._containerInstance._recaptureFocus():M(this,"mouse")})}close(o){this._result=o,this._containerInstance._animationStateChanged.pipe((0,f.h)(t=>"closing"===t.state),(0,m.q)(1)).subscribe(t=>{this._beforeClosed.next(o),this._beforeClosed.complete(),this._overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=1,this._containerInstance._startExitAnimation()}afterOpened(){return this._afterOpened}afterClosed(){return this._afterClosed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._overlayRef.backdropClick()}keydownEvents(){return this._overlayRef.keydownEvents()}updatePosition(o){let t=this._getPositionStrategy();return o&&(o.left||o.right)?o.left?t.left(o.left):t.right(o.right):t.centerHorizontally(),o&&(o.top||o.bottom)?o.top?t.top(o.top):t.bottom(o.bottom):t.centerVertically(),this._overlayRef.updatePosition(),this}updateSize(o="",t=""){return this._overlayRef.updateSize({width:o,height:t}),this._overlayRef.updatePosition(),this}addPanelClass(o){return this._overlayRef.addPanelClass(o),this}removePanelClass(o){return this._overlayRef.removePanelClass(o),this}getState(){return this._state}_finishDialogClose(){this._state=2,this._overlayRef.dispose()}_getPositionStrategy(){return this._overlayRef.getConfig().positionStrategy}}function M(a,o,t){return void 0!==a._containerInstance&&(a._containerInstance._closeInteractionType=o),a.close(t)}const R=new i.OlP("MatDialogData"),T=new i.OlP("mat-dialog-default-options"),P=new i.OlP("mat-dialog-scroll-strategy"),G={provide:P,deps:[_.aV],useFactory:function(a){return()=>a.scrollStrategies.block()}};let U=(()=>{class a{constructor(t,e,n,s,l,c,u,$,J){this._overlay=t,this._injector=e,this._defaultOptions=n,this._parentDialog=s,this._overlayContainer=l,this._dialogRefConstructor=u,this._dialogContainerType=$,this._dialogDataToken=J,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new g.xQ,this._afterOpenedAtThisLevel=new g.xQ,this._ariaHiddenElements=new Map,this.afterAllClosed=(0,I.P)(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe((0,F.O)(void 0))),this._scrollStrategy=c}get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){const t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}open(t,e){(e=function(a,o){return Object.assign(Object.assign({},o),a)}(e,this._defaultOptions||new v)).id&&this.getDialogById(e.id);const n=this._createOverlay(e),s=this._attachDialogContainer(n,e),l=this._attachDialogContent(t,s,n,e);return this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(l),l.afterClosed().subscribe(()=>this._removeOpenDialog(l)),this.afterOpened.next(l),s._initializeWithAttachedContent(),l}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_createOverlay(t){const e=this._getOverlayConfig(t);return this._overlay.create(e)}_getOverlayConfig(t){const e=new _.X_({positionStrategy:this._overlay.position().global(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,disposeOnNavigation:t.closeOnNavigation});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachDialogContainer(t,e){const s=i.zs3.create({parent:e&&e.viewContainerRef&&e.viewContainerRef.injector||this._injector,providers:[{provide:v,useValue:e}]}),l=new h.C5(this._dialogContainerType,e.viewContainerRef,s,e.componentFactoryResolver);return t.attach(l).instance}_attachDialogContent(t,e,n,s){const l=new this._dialogRefConstructor(n,e,s.id);if(t instanceof i.Rgc)e.attachTemplatePortal(new h.UE(t,null,{$implicit:s.data,dialogRef:l}));else{const c=this._createInjector(s,l,e),u=e.attachComponentPortal(new h.C5(t,s.viewContainerRef,c));l.componentInstance=u.instance}return l.updateSize(s.width,s.height).updatePosition(s.position),l}_createInjector(t,e,n){const s=t&&t.viewContainerRef&&t.viewContainerRef.injector,l=[{provide:this._dialogContainerType,useValue:n},{provide:this._dialogDataToken,useValue:t.data},{provide:this._dialogRefConstructor,useValue:e}];return t.direction&&(!s||!s.get(E.Is,null,i.XFs.Optional))&&l.push({provide:E.Is,useValue:{value:t.direction,change:(0,x.of)()}}),i.zs3.create({parent:s||this._injector,providers:l})}_removeOpenDialog(t){const e=this.openDialogs.indexOf(t);e>-1&&(this.openDialogs.splice(e,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((n,s)=>{n?s.setAttribute("aria-hidden",n):s.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(){const t=this._overlayContainer.getContainerElement();if(t.parentElement){const e=t.parentElement.children;for(let n=e.length-1;n>-1;n--){let s=e[n];s!==t&&"SCRIPT"!==s.nodeName&&"STYLE"!==s.nodeName&&!s.hasAttribute("aria-live")&&(this._ariaHiddenElements.set(s,s.getAttribute("aria-hidden")),s.setAttribute("aria-hidden","true"))}}}_closeDialogs(t){let e=t.length;for(;e--;)t[e].close()}}return a.\u0275fac=function(t){return new(t||a)(i.Y36(_.aV),i.Y36(i.zs3),i.Y36(void 0),i.Y36(void 0),i.Y36(_.Xj),i.Y36(void 0),i.Y36(i.DyG),i.Y36(i.DyG),i.Y36(i.OlP))},a.\u0275dir=i.lG2({type:a}),a})(),D=(()=>{class a extends U{constructor(t,e,n,s,l,c,u){super(t,e,s,c,u,l,p,Y,R)}}return a.\u0275fac=function(t){return new(t||a)(i.LFG(_.aV),i.LFG(i.zs3),i.LFG(A.Ye,8),i.LFG(T,8),i.LFG(P),i.LFG(a,12),i.LFG(_.Xj))},a.\u0275prov=i.Yz7({token:a,factory:a.\u0275fac}),a})(),H=0,V=(()=>{class a{constructor(t,e,n){this.dialogRef=t,this._elementRef=e,this._dialog=n,this.type="button"}ngOnInit(){this.dialogRef||(this.dialogRef=B(this._elementRef,this._dialog.openDialogs))}ngOnChanges(t){const e=t._matDialogClose||t._matDialogCloseResult;e&&(this.dialogResult=e.currentValue)}_onButtonClick(t){M(this.dialogRef,0===t.screenX&&0===t.screenY?"keyboard":"mouse",this.dialogResult)}}return a.\u0275fac=function(t){return new(t||a)(i.Y36(p,8),i.Y36(i.SBq),i.Y36(D))},a.\u0275dir=i.lG2({type:a,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(t,e){1&t&&i.NdJ("click",function(s){return e._onButtonClick(s)}),2&t&&i.uIk("aria-label",e.ariaLabel||null)("type",e.type)},inputs:{type:"type",dialogResult:["mat-dialog-close","dialogResult"],ariaLabel:["aria-label","ariaLabel"],_matDialogClose:["matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[i.TTD]}),a})(),z=(()=>{class a{constructor(t,e,n){this._dialogRef=t,this._elementRef=e,this._dialog=n,this.id="mat-dialog-title-"+H++}ngOnInit(){this._dialogRef||(this._dialogRef=B(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{const t=this._dialogRef._containerInstance;t&&!t._ariaLabelledBy&&(t._ariaLabelledBy=this.id)})}}return a.\u0275fac=function(t){return new(t||a)(i.Y36(p,8),i.Y36(i.SBq),i.Y36(D))},a.\u0275dir=i.lG2({type:a,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-dialog-title"],hostVars:1,hostBindings:function(t,e){2&t&&i.Ikx("id",e.id)},inputs:{id:"id"},exportAs:["matDialogTitle"]}),a})(),Q=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275dir=i.lG2({type:a,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-dialog-content"]}),a})(),N=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275dir=i.lG2({type:a,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-dialog-actions"]}),a})();function B(a,o){let t=a.nativeElement.parentElement;for(;t&&!t.classList.contains("mat-dialog-container");)t=t.parentElement;return t?o.find(e=>e.id===t.id):null}let X=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=i.oAB({type:a}),a.\u0275inj=i.cJS({providers:[D,G],imports:[[_.U8,h.eL,y.BQ],y.BQ]}),a})()}}]);