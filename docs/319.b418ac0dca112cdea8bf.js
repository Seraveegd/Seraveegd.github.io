"use strict";(self.webpackChunkd2rapp=self.webpackChunkd2rapp||[]).push([[319],{5939:(w,I,d)=>{d.d(I,{uX:()=>Q,SP:()=>Ct,Nh:()=>At});var f=d(9238),o=d(8553),l=d(7636),M=d(8583),t=d(7716),u=d(2458),T=d(6237),y=d(9765),m=d(5319),C=d(6682),c=d(2759),p=d(5917),v=d(8634),b=d(7238),O=d(9761),X=d(7519),x=d(6782),k=d(9490),P=d(521),L=d(6461),D=d(946),B=d(7656);function tt(i,r){1&i&&t.Hsn(0)}const R=["*"];function et(i,r){}const at=function(i){return{animationDuration:i}},nt=function(i,r){return{value:i,params:r}},it=["tabBodyWrapper"],ot=["tabHeader"];function st(i,r){}function rt(i,r){if(1&i&&t.YNc(0,st,0,0,"ng-template",9),2&i){const e=t.oxw().$implicit;t.Q6J("cdkPortalOutlet",e.templateLabel)}}function lt(i,r){if(1&i&&t._uU(0),2&i){const e=t.oxw().$implicit;t.Oqu(e.textLabel)}}function dt(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"div",6),t.NdJ("click",function(){const n=t.CHM(e),s=n.$implicit,_=n.index,h=t.oxw(),g=t.MAs(1);return h._handleClick(s,g,_)})("cdkFocusChange",function(n){const _=t.CHM(e).index;return t.oxw()._tabFocusChanged(n,_)}),t.TgZ(1,"div",7),t.YNc(2,rt,1,1,"ng-template",8),t.YNc(3,lt,1,1,"ng-template",8),t.qZA(),t.qZA()}if(2&i){const e=r.$implicit,a=r.index,n=t.oxw();t.ekj("mat-tab-label-active",n.selectedIndex==a),t.Q6J("id",n._getTabLabelId(a))("disabled",e.disabled)("matRippleDisabled",e.disabled||n.disableRipple),t.uIk("tabIndex",n._getTabIndex(e,a))("aria-posinset",a+1)("aria-setsize",n._tabs.length)("aria-controls",n._getTabContentId(a))("aria-selected",n.selectedIndex==a)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),t.xp6(2),t.Q6J("ngIf",e.templateLabel),t.xp6(1),t.Q6J("ngIf",!e.templateLabel)}}function ct(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"mat-tab-body",10),t.NdJ("_onCentered",function(){return t.CHM(e),t.oxw()._removeTabBodyWrapperHeight()})("_onCentering",function(n){return t.CHM(e),t.oxw()._setTabBodyWrapperHeight(n)}),t.qZA()}if(2&i){const e=r.$implicit,a=r.index,n=t.oxw();t.ekj("mat-tab-body-active",n.selectedIndex===a),t.Q6J("id",n._getTabContentId(a))("content",e.content)("position",e.position)("origin",e.origin)("animationDuration",n.animationDuration),t.uIk("tabindex",null!=n.contentTabIndex&&n.selectedIndex===a?n.contentTabIndex:null)("aria-labelledby",n._getTabLabelId(a))}}const S=["tabListContainer"],Z=["tabList"],H=["nextPaginator"],F=["previousPaginator"],bt=new t.OlP("MatInkBarPositioner",{providedIn:"root",factory:function(){return r=>({left:r?(r.offsetLeft||0)+"px":"0",width:r?(r.offsetWidth||0)+"px":"0"})}});let E=(()=>{class i{constructor(e,a,n,s){this._elementRef=e,this._ngZone=a,this._inkBarPositioner=n,this._animationMode=s}alignToElement(e){this.show(),"undefined"!=typeof requestAnimationFrame?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._setStyles(e))}):this._setStyles(e)}show(){this._elementRef.nativeElement.style.visibility="visible"}hide(){this._elementRef.nativeElement.style.visibility="hidden"}_setStyles(e){const a=this._inkBarPositioner(e),n=this._elementRef.nativeElement;n.style.left=a.left,n.style.width=a.width}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.SBq),t.Y36(t.R0b),t.Y36(bt),t.Y36(T.Qb,8))},i.\u0275dir=t.lG2({type:i,selectors:[["mat-ink-bar"]],hostAttrs:[1,"mat-ink-bar"],hostVars:2,hostBindings:function(e,a){2&e&&t.ekj("_mat-animation-noopable","NoopAnimations"===a._animationMode)}}),i})();const Y=new t.OlP("MatTabContent"),G=new t.OlP("MatTabLabel"),W=new t.OlP("MAT_TAB"),ut=(0,u.Id)(class{}),N=new t.OlP("MAT_TAB_GROUP");let Q=(()=>{class i extends ut{constructor(e,a){super(),this._viewContainerRef=e,this._closestTabGroup=a,this.textLabel="",this._contentPortal=null,this._stateChanges=new y.xQ,this.position=null,this.origin=null,this.isActive=!1}get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}get content(){return this._contentPortal}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new l.UE(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.s_b),t.Y36(N,8))},i.\u0275cmp=t.Xpm({type:i,selectors:[["mat-tab"]],contentQueries:function(e,a,n){if(1&e&&(t.Suo(n,G,5),t.Suo(n,Y,7,t.Rgc)),2&e){let s;t.iGM(s=t.CRH())&&(a.templateLabel=s.first),t.iGM(s=t.CRH())&&(a._explicitContent=s.first)}},viewQuery:function(e,a){if(1&e&&t.Gf(t.Rgc,7),2&e){let n;t.iGM(n=t.CRH())&&(a._implicitContent=n.first)}},inputs:{disabled:"disabled",textLabel:["label","textLabel"],ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"]},exportAs:["matTab"],features:[t._Bn([{provide:W,useExisting:i}]),t.qOj,t.TTD],ngContentSelectors:R,decls:1,vars:0,template:function(e,a){1&e&&(t.F$t(),t.YNc(0,tt,1,0,"ng-template"))},encapsulation:2}),i})();const pt={translateTab:(0,b.X$)("translateTab",[(0,b.SB)("center, void, left-origin-center, right-origin-center",(0,b.oB)({transform:"none"})),(0,b.SB)("left",(0,b.oB)({transform:"translate3d(-100%, 0, 0)",minHeight:"1px"})),(0,b.SB)("right",(0,b.oB)({transform:"translate3d(100%, 0, 0)",minHeight:"1px"})),(0,b.eR)("* => left, * => right, left => center, right => center",(0,b.jt)("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")),(0,b.eR)("void => left-origin-center",[(0,b.oB)({transform:"translate3d(-100%, 0, 0)"}),(0,b.jt)("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")]),(0,b.eR)("void => right-origin-center",[(0,b.oB)({transform:"translate3d(100%, 0, 0)"}),(0,b.jt)("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")])])};let gt=(()=>{class i extends l.Pl{constructor(e,a,n,s){super(e,a,s),this._host=n,this._centeringSub=m.w.EMPTY,this._leavingSub=m.w.EMPTY}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe((0,O.O)(this._host._isCenterPosition(this._host._position))).subscribe(e=>{e&&!this.hasAttached()&&this.attach(this._host._content)}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this.detach()})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t._Vd),t.Y36(t.s_b),t.Y36((0,t.Gpc)(()=>U)),t.Y36(M.K0))},i.\u0275dir=t.lG2({type:i,selectors:[["","matTabBodyHost",""]],features:[t.qOj]}),i})(),mt=(()=>{class i{constructor(e,a,n){this._elementRef=e,this._dir=a,this._dirChangeSubscription=m.w.EMPTY,this._translateTabComplete=new y.xQ,this._onCentering=new t.vpe,this._beforeCentering=new t.vpe,this._afterLeavingCenter=new t.vpe,this._onCentered=new t.vpe(!0),this.animationDuration="500ms",a&&(this._dirChangeSubscription=a.change.subscribe(s=>{this._computePositionAnimationState(s),n.markForCheck()})),this._translateTabComplete.pipe((0,X.x)((s,_)=>s.fromState===_.fromState&&s.toState===_.toState)).subscribe(s=>{this._isCenterPosition(s.toState)&&this._isCenterPosition(this._position)&&this._onCentered.emit(),this._isCenterPosition(s.fromState)&&!this._isCenterPosition(this._position)&&this._afterLeavingCenter.emit()})}set position(e){this._positionIndex=e,this._computePositionAnimationState()}ngOnInit(){"center"==this._position&&null!=this.origin&&(this._position=this._computePositionFromOrigin(this.origin))}ngOnDestroy(){this._dirChangeSubscription.unsubscribe(),this._translateTabComplete.complete()}_onTranslateTabStarted(e){const a=this._isCenterPosition(e.toState);this._beforeCentering.emit(a),a&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_getLayoutDirection(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}_isCenterPosition(e){return"center"==e||"left-origin-center"==e||"right-origin-center"==e}_computePositionAnimationState(e=this._getLayoutDirection()){this._position=this._positionIndex<0?"ltr"==e?"left":"right":this._positionIndex>0?"ltr"==e?"right":"left":"center"}_computePositionFromOrigin(e){const a=this._getLayoutDirection();return"ltr"==a&&e<=0||"rtl"==a&&e>0?"left-origin-center":"right-origin-center"}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.SBq),t.Y36(D.Is,8),t.Y36(t.sBO))},i.\u0275dir=t.lG2({type:i,inputs:{animationDuration:"animationDuration",position:"position",_content:["content","_content"],origin:"origin"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_afterLeavingCenter:"_afterLeavingCenter",_onCentered:"_onCentered"}}),i})(),U=(()=>{class i extends mt{constructor(e,a,n){super(e,a,n)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.SBq),t.Y36(D.Is,8),t.Y36(t.sBO))},i.\u0275cmp=t.Xpm({type:i,selectors:[["mat-tab-body"]],viewQuery:function(e,a){if(1&e&&t.Gf(l.Pl,5),2&e){let n;t.iGM(n=t.CRH())&&(a._portalHost=n.first)}},hostAttrs:[1,"mat-tab-body"],features:[t.qOj],decls:3,vars:6,consts:[["cdkScrollable","",1,"mat-tab-body-content"],["content",""],["matTabBodyHost",""]],template:function(e,a){1&e&&(t.TgZ(0,"div",0,1),t.NdJ("@translateTab.start",function(s){return a._onTranslateTabStarted(s)})("@translateTab.done",function(s){return a._translateTabComplete.next(s)}),t.YNc(2,et,0,0,"ng-template",2),t.qZA()),2&e&&t.Q6J("@translateTab",t.WLB(3,nt,a._position,t.VKq(1,at,a.animationDuration)))},directives:[gt],styles:[".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}\n"],encapsulation:2,data:{animation:[pt.translateTab]}}),i})();const j=new t.OlP("MAT_TABS_CONFIG");let ft=0;class Tt{}const vt=(0,u.pj)((0,u.Kr)(class{constructor(i){this._elementRef=i}}),"primary");let Mt=(()=>{class i extends vt{constructor(e,a,n,s){var _;super(e),this._changeDetectorRef=a,this._animationMode=s,this._tabs=new t.n_E,this._indexToSelect=0,this._tabBodyWrapperHeight=0,this._tabsSubscription=m.w.EMPTY,this._tabLabelSubscription=m.w.EMPTY,this._selectedIndex=null,this.headerPosition="above",this.selectedIndexChange=new t.vpe,this.focusChange=new t.vpe,this.animationDone=new t.vpe,this.selectedTabChange=new t.vpe(!0),this._groupId=ft++,this.animationDuration=n&&n.animationDuration?n.animationDuration:"500ms",this.disablePagination=!(!n||null==n.disablePagination)&&n.disablePagination,this.dynamicHeight=!(!n||null==n.dynamicHeight)&&n.dynamicHeight,this.contentTabIndex=null!==(_=null==n?void 0:n.contentTabIndex)&&void 0!==_?_:null}get dynamicHeight(){return this._dynamicHeight}set dynamicHeight(e){this._dynamicHeight=(0,k.Ig)(e)}get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=(0,k.su)(e,null)}get animationDuration(){return this._animationDuration}set animationDuration(e){this._animationDuration=/^\d+$/.test(e)?e+"ms":e}get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=(0,k.su)(e,null)}get backgroundColor(){return this._backgroundColor}set backgroundColor(e){const a=this._elementRef.nativeElement;a.classList.remove(`mat-background-${this.backgroundColor}`),e&&a.classList.add(`mat-background-${e}`),this._backgroundColor=e}ngAfterContentChecked(){const e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){const a=null==this._selectedIndex;if(!a){this.selectedTabChange.emit(this._createChangeEvent(e));const n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((n,s)=>n.isActive=s===e),a||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((a,n)=>{a.position=n-e,null!=this._selectedIndex&&0==a.position&&!a.origin&&(a.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{if(this._clampTabIndex(this._indexToSelect)===this._selectedIndex){const a=this._tabs.toArray();for(let n=0;n<a.length;n++)if(a[n].isActive){this._indexToSelect=this._selectedIndex=n;break}}this._changeDetectorRef.markForCheck()})}_subscribeToAllTabChanges(){this._allTabs.changes.pipe((0,O.O)(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(a=>a._closestTabGroup===this||!a._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}focusTab(e){const a=this._tabHeader;a&&(a.focusIndex=e)}_focusChanged(e){this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){const a=new Tt;return a.index=e,this._tabs&&this._tabs.length&&(a.tab=this._tabs.toArray()[e]),a}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=(0,C.T)(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e){return`mat-tab-label-${this._groupId}-${e}`}_getTabContentId(e){return`mat-tab-content-${this._groupId}-${e}`}_setTabBodyWrapperHeight(e){if(!this._dynamicHeight||!this._tabBodyWrapperHeight)return;const a=this._tabBodyWrapper.nativeElement;a.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(a.style.height=e+"px")}_removeTabBodyWrapperHeight(){const e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this.animationDone.emit()}_handleClick(e,a,n){e.disabled||(this.selectedIndex=a.focusIndex=n)}_getTabIndex(e,a){return e.disabled?null:this.selectedIndex===a?0:-1}_tabFocusChanged(e,a){e&&"mouse"!==e&&"touch"!==e&&(this._tabHeader.focusIndex=a)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.SBq),t.Y36(t.sBO),t.Y36(j,8),t.Y36(T.Qb,8))},i.\u0275dir=t.lG2({type:i,inputs:{headerPosition:"headerPosition",animationDuration:"animationDuration",disablePagination:"disablePagination",dynamicHeight:"dynamicHeight",contentTabIndex:"contentTabIndex",selectedIndex:"selectedIndex",backgroundColor:"backgroundColor"},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},features:[t.qOj]}),i})(),Ct=(()=>{class i extends Mt{constructor(e,a,n,s){super(e,a,n,s)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.SBq),t.Y36(t.sBO),t.Y36(j,8),t.Y36(T.Qb,8))},i.\u0275cmp=t.Xpm({type:i,selectors:[["mat-tab-group"]],contentQueries:function(e,a,n){if(1&e&&t.Suo(n,Q,5),2&e){let s;t.iGM(s=t.CRH())&&(a._allTabs=s)}},viewQuery:function(e,a){if(1&e&&(t.Gf(it,5),t.Gf(ot,5)),2&e){let n;t.iGM(n=t.CRH())&&(a._tabBodyWrapper=n.first),t.iGM(n=t.CRH())&&(a._tabHeader=n.first)}},hostAttrs:[1,"mat-tab-group"],hostVars:4,hostBindings:function(e,a){2&e&&t.ekj("mat-tab-group-dynamic-height",a.dynamicHeight)("mat-tab-group-inverted-header","below"===a.headerPosition)},inputs:{color:"color",disableRipple:"disableRipple"},exportAs:["matTabGroup"],features:[t._Bn([{provide:N,useExisting:i}]),t.qOj],decls:6,vars:7,consts:[[3,"selectedIndex","disableRipple","disablePagination","indexFocused","selectFocusedIndex"],["tabHeader",""],["class","mat-tab-label mat-focus-indicator","role","tab","matTabLabelWrapper","","mat-ripple","","cdkMonitorElementFocus","",3,"id","mat-tab-label-active","disabled","matRippleDisabled","click","cdkFocusChange",4,"ngFor","ngForOf"],[1,"mat-tab-body-wrapper"],["tabBodyWrapper",""],["role","tabpanel",3,"id","mat-tab-body-active","content","position","origin","animationDuration","_onCentered","_onCentering",4,"ngFor","ngForOf"],["role","tab","matTabLabelWrapper","","mat-ripple","","cdkMonitorElementFocus","",1,"mat-tab-label","mat-focus-indicator",3,"id","disabled","matRippleDisabled","click","cdkFocusChange"],[1,"mat-tab-label-content"],[3,"ngIf"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"id","content","position","origin","animationDuration","_onCentered","_onCentering"]],template:function(e,a){1&e&&(t.TgZ(0,"mat-tab-header",0,1),t.NdJ("indexFocused",function(s){return a._focusChanged(s)})("selectFocusedIndex",function(s){return a.selectedIndex=s}),t.YNc(2,dt,4,14,"div",2),t.qZA(),t.TgZ(3,"div",3,4),t.YNc(5,ct,1,9,"mat-tab-body",5),t.qZA()),2&e&&(t.Q6J("selectedIndex",a.selectedIndex||0)("disableRipple",a.disableRipple)("disablePagination",a.disablePagination),t.xp6(2),t.Q6J("ngForOf",a._tabs),t.xp6(1),t.ekj("_mat-animation-noopable","NoopAnimations"===a._animationMode),t.xp6(2),t.Q6J("ngForOf",a._tabs))},directives:function(){return[Dt,M.sg,J,u.wG,f.kH,M.O5,l.Pl,U]},styles:[".mat-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-tab-body-wrapper{transition:none;animation:none}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}\n"],encapsulation:2}),i})();const yt=(0,u.Id)(class{});let J=(()=>{class i extends yt{constructor(e){super(),this.elementRef=e}focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.SBq))},i.\u0275dir=t.lG2({type:i,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(e,a){2&e&&(t.uIk("aria-disabled",!!a.disabled),t.ekj("mat-tab-disabled",a.disabled))},inputs:{disabled:"disabled"},features:[t.qOj]}),i})();const q=(0,P.i$)({passive:!0});let z=(()=>{class i{constructor(e,a,n,s,_,h,g){this._elementRef=e,this._changeDetectorRef=a,this._viewportRuler=n,this._dir=s,this._ngZone=_,this._platform=h,this._animationMode=g,this._scrollDistance=0,this._selectedIndexChanged=!1,this._destroyed=new y.xQ,this._showPaginationControls=!1,this._disableScrollAfter=!0,this._disableScrollBefore=!0,this._stopScrolling=new y.xQ,this.disablePagination=!1,this._selectedIndex=0,this.selectFocusedIndex=new t.vpe,this.indexFocused=new t.vpe,_.runOutsideAngular(()=>{(0,c.R)(e.nativeElement,"mouseleave").pipe((0,x.R)(this._destroyed)).subscribe(()=>{this._stopInterval()})})}get selectedIndex(){return this._selectedIndex}set selectedIndex(e){e=(0,k.su)(e),this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}ngAfterViewInit(){(0,c.R)(this._previousPaginator.nativeElement,"touchstart",q).pipe((0,x.R)(this._destroyed)).subscribe(()=>{this._handlePaginatorPress("before")}),(0,c.R)(this._nextPaginator.nativeElement,"touchstart",q).pipe((0,x.R)(this._destroyed)).subscribe(()=>{this._handlePaginatorPress("after")})}ngAfterContentInit(){const e=this._dir?this._dir.change:(0,p.of)("ltr"),a=this._viewportRuler.change(150),n=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new f.Em(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap(),this._keyManager.updateActiveItem(this._selectedIndex),"undefined"!=typeof requestAnimationFrame?requestAnimationFrame(n):n(),(0,C.T)(e,a,this._items.changes).pipe((0,x.R)(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>Promise.resolve().then(n)),this._keyManager.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.pipe((0,x.R)(this._destroyed)).subscribe(s=>{this.indexFocused.emit(s),this._setTabFocus(s)})}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!(0,L.Vb)(e))switch(e.keyCode){case L.K5:case L.L_:this.focusIndex!==this.selectedIndex&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e));break;default:this._keyManager.onKeydown(e)}}_onContentChanges(){const e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){if(!this._items)return!0;const a=this._items?this._items.toArray()[e]:null;return!!a&&!a.disabled}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();const a=this._tabListContainer.nativeElement;a.scrollLeft="ltr"==this._getLayoutDirection()?0:a.scrollWidth-a.offsetWidth}}_getLayoutDirection(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;const e=this.scrollDistance,a="ltr"===this._getLayoutDirection()?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(a)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){return this._scrollTo(this._scrollDistance+("before"==e?-1:1)*this._tabListContainer.nativeElement.offsetWidth/3)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;const a=this._items?this._items.toArray()[e]:null;if(!a)return;const n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:s,offsetWidth:_}=a.elementRef.nativeElement;let h,g;"ltr"==this._getLayoutDirection()?(h=s,g=h+_):(g=this._tabList.nativeElement.offsetWidth-s,h=g-_);const A=this.scrollDistance,$=this.scrollDistance+n;h<A?this.scrollDistance-=A-h+60:g>$&&(this.scrollDistance+=g-$+60)}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{const e=this._tabList.nativeElement.scrollWidth>this._elementRef.nativeElement.offsetWidth;e||(this.scrollDistance=0),e!==this._showPaginationControls&&this._changeDetectorRef.markForCheck(),this._showPaginationControls=e}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=0==this.scrollDistance,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabList.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){const e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,a=e?e.elementRef.nativeElement:null;a?this._inkBar.alignToElement(a):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,a){a&&null!=a.button&&0!==a.button||(this._stopInterval(),(0,v.H)(650,100).pipe((0,x.R)((0,C.T)(this._stopScrolling,this._destroyed))).subscribe(()=>{const{maxScrollDistance:n,distance:s}=this._scrollHeader(e);(0===s||s>=n)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};const a=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(a,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:a,distance:this._scrollDistance}}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.SBq),t.Y36(t.sBO),t.Y36(B.rL),t.Y36(D.Is,8),t.Y36(t.R0b),t.Y36(P.t4),t.Y36(T.Qb,8))},i.\u0275dir=t.lG2({type:i,inputs:{disablePagination:"disablePagination"}}),i})(),Pt=(()=>{class i extends z{constructor(e,a,n,s,_,h,g){super(e,a,n,s,_,h,g),this._disableRipple=!1}get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=(0,k.Ig)(e)}_itemSelected(e){e.preventDefault()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.SBq),t.Y36(t.sBO),t.Y36(B.rL),t.Y36(D.Is,8),t.Y36(t.R0b),t.Y36(P.t4),t.Y36(T.Qb,8))},i.\u0275dir=t.lG2({type:i,inputs:{disableRipple:"disableRipple"},features:[t.qOj]}),i})(),Dt=(()=>{class i extends Pt{constructor(e,a,n,s,_,h,g){super(e,a,n,s,_,h,g)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.SBq),t.Y36(t.sBO),t.Y36(B.rL),t.Y36(D.Is,8),t.Y36(t.R0b),t.Y36(P.t4),t.Y36(T.Qb,8))},i.\u0275cmp=t.Xpm({type:i,selectors:[["mat-tab-header"]],contentQueries:function(e,a,n){if(1&e&&t.Suo(n,J,4),2&e){let s;t.iGM(s=t.CRH())&&(a._items=s)}},viewQuery:function(e,a){if(1&e&&(t.Gf(E,7),t.Gf(S,7),t.Gf(Z,7),t.Gf(H,5),t.Gf(F,5)),2&e){let n;t.iGM(n=t.CRH())&&(a._inkBar=n.first),t.iGM(n=t.CRH())&&(a._tabListContainer=n.first),t.iGM(n=t.CRH())&&(a._tabList=n.first),t.iGM(n=t.CRH())&&(a._nextPaginator=n.first),t.iGM(n=t.CRH())&&(a._previousPaginator=n.first)}},hostAttrs:[1,"mat-tab-header"],hostVars:4,hostBindings:function(e,a){2&e&&t.ekj("mat-tab-header-pagination-controls-enabled",a._showPaginationControls)("mat-tab-header-rtl","rtl"==a._getLayoutDirection())},inputs:{selectedIndex:"selectedIndex"},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"},features:[t.qOj],ngContentSelectors:R,decls:13,vars:8,consts:[["aria-hidden","true","mat-ripple","",1,"mat-tab-header-pagination","mat-tab-header-pagination-before","mat-elevation-z4",3,"matRippleDisabled","click","mousedown","touchend"],["previousPaginator",""],[1,"mat-tab-header-pagination-chevron"],[1,"mat-tab-label-container",3,"keydown"],["tabListContainer",""],["role","tablist",1,"mat-tab-list",3,"cdkObserveContent"],["tabList",""],[1,"mat-tab-labels"],["aria-hidden","true","mat-ripple","",1,"mat-tab-header-pagination","mat-tab-header-pagination-after","mat-elevation-z4",3,"matRippleDisabled","mousedown","click","touchend"],["nextPaginator",""]],template:function(e,a){1&e&&(t.F$t(),t.TgZ(0,"div",0,1),t.NdJ("click",function(){return a._handlePaginatorClick("before")})("mousedown",function(s){return a._handlePaginatorPress("before",s)})("touchend",function(){return a._stopInterval()}),t._UZ(2,"div",2),t.qZA(),t.TgZ(3,"div",3,4),t.NdJ("keydown",function(s){return a._handleKeydown(s)}),t.TgZ(5,"div",5,6),t.NdJ("cdkObserveContent",function(){return a._onContentChanges()}),t.TgZ(7,"div",7),t.Hsn(8),t.qZA(),t._UZ(9,"mat-ink-bar"),t.qZA(),t.qZA(),t.TgZ(10,"div",8,9),t.NdJ("mousedown",function(s){return a._handlePaginatorPress("after",s)})("click",function(){return a._handlePaginatorClick("after")})("touchend",function(){return a._stopInterval()}),t._UZ(12,"div",2),t.qZA()),2&e&&(t.ekj("mat-tab-header-pagination-disabled",a._disableScrollBefore),t.Q6J("matRippleDisabled",a._disableScrollBefore||a.disableRipple),t.xp6(5),t.ekj("_mat-animation-noopable","NoopAnimations"===a._animationMode),t.xp6(5),t.ekj("mat-tab-header-pagination-disabled",a._disableScrollAfter),t.Q6J("matRippleDisabled",a._disableScrollAfter||a.disableRipple))},directives:[u.wG,o.wD,E],styles:['.mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:"";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-labels{display:flex}[mat-align-tabs=center]>.mat-tab-header .mat-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-tab-header .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}._mat-animation-noopable.mat-tab-list{transition:none;animation:none}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{min-width:72px}}\n'],encapsulation:2}),i})(),At=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[M.ez,u.BQ,l.eL,u.si,o.Q8,f.rt],u.BQ]}),i})()},7319:(w,I,d)=>{d.r(I),d.d(I,{FiguresModule:()=>C});var f=d(8583),o=d(4655),l=d(7716);const M=function(c){return{active:c}},t=function(){return["monster"]},y=[{path:"",component:(()=>{class c{constructor(){this.selected=""}ngOnInit(){}clink(v){this.selected=v}}return c.\u0275fac=function(v){return new(v||c)},c.\u0275cmp=l.Xpm({type:c,selectors:[["app-figures"]],decls:17,vars:15,consts:[[3,"ngClass"],[3,"ngClass","click"],[3,"routerLink","ngClass","click"]],template:function(v,b){1&v&&(l.TgZ(0,"div",0),l.TgZ(1,"div",0),l._uU(2,"\u4eba\u7269"),l.qZA(),l.TgZ(3,"div",0),l.TgZ(4,"div",0),l.TgZ(5,"span"),l._uU(6,"\u5206\u985e"),l.qZA(),l.TgZ(7,"span"),l.TgZ(8,"a",1),l.NdJ("click",function(){return b.clink("1")}),l._uU(9,"\u8077\u696d"),l.qZA(),l.qZA(),l.TgZ(10,"span"),l.TgZ(11,"a",1),l.NdJ("click",function(){return b.clink("2")}),l._uU(12,"\u50ad\u5175"),l.qZA(),l.qZA(),l.TgZ(13,"span"),l.TgZ(14,"a",2),l.NdJ("click",function(){return b.clink("3")}),l._uU(15,"\u602a\u7269"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l._UZ(16,"router-outlet"),l.qZA()),2&v&&(l.Q6J("ngClass","contents"),l.xp6(1),l.Q6J("ngClass","title"),l.xp6(2),l.Q6J("ngClass","rwords"),l.xp6(1),l.Q6J("ngClass","list"),l.xp6(4),l.Q6J("ngClass",l.VKq(8,M,"1"===b.selected)),l.xp6(3),l.Q6J("ngClass",l.VKq(10,M,"2"===b.selected)),l.xp6(3),l.Q6J("routerLink",l.DdM(12,t))("ngClass",l.VKq(13,M,"3"===b.selected)))},directives:[f.mk,o.yS,o.lC],styles:[".contents[_ngcontent-%COMP%]{border-radius:.25rem;border:1px solid rgba(0,0,0,.125);margin-top:20px}.contents[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:#444;color:#bb9e74;padding:24px;font-size:20pt;border-bottom:1px solid rgba(0,0,0,.125)}.contents[_ngcontent-%COMP%]   .rwords[_ngcontent-%COMP%]{background-color:#303030;padding:18px}.contents[_ngcontent-%COMP%]   .rwords[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{display:flex;margin-bottom:6px;flex-wrap:wrap}.contents[_ngcontent-%COMP%]   .rwords[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child{border:1px solid #36739f;color:#36739f;background-color:#303030;font-weight:bold;padding:8px 12px;font-size:16px}.contents[_ngcontent-%COMP%]   .rwords[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{margin:4px;border-radius:5px;background-color:#444;color:#fff}.contents[_ngcontent-%COMP%]   .rwords[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;padding:10px 12px;font-size:16px;display:block;color:#fff}.contents[_ngcontent-%COMP%]   .rwords[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background-color:#375a7f;color:#fff;border-radius:5px}.contents[_ngcontent-%COMP%]   .rwords[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#303030}"]}),c})(),children:[{path:"monster",loadChildren:()=>d.e(651).then(d.bind(d,7651)).then(c=>c.MonsterModule)},{path:"monster/detail/:id",component:d(772).J}]}];let m=(()=>{class c{}return c.\u0275fac=function(v){return new(v||c)},c.\u0275mod=l.oAB({type:c}),c.\u0275inj=l.cJS({imports:[[o.Bz.forChild(y)],o.Bz]}),c})(),C=(()=>{class c{}return c.\u0275fac=function(v){return new(v||c)},c.\u0275mod=l.oAB({type:c}),c.\u0275inj=l.cJS({imports:[[f.ez,m]]}),c})()},772:(w,I,d)=>{d.d(I,{J:()=>y});var f=d(2238),o=d(7716),l=d(8583),M=d(5939),t=d(1095);function u(m,C){if(1&m&&(o.TgZ(0,"div",2),o._uU(1),o.qZA()),2&m){const c=o.oxw();o.Q6J("ngClass","desc"),o.xp6(1),o.Oqu(c.data.monster.desc)}}const T=function(){return{color:"white"}};let y=(()=>{class m{constructor(c,p){this.dialogRef=c,this.data=p}ngOnInit(){}close(){this.dialogRef.close()}}return m.\u0275fac=function(c){return new(c||m)(o.Y36(f.so),o.Y36(f.WI))},m.\u0275cmp=o.Xpm({type:m,selectors:[["app-detail"]],decls:32,vars:19,consts:[["mat-dialog-title","",3,"ngClass"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],["mat-align-tabs","start",3,"color"],["label","\u666e\u901a",3,"ngStyle"],["label","\u60e1\u5922"],["label","\u5730\u7344"],["mat-button","","mat-","","mat-dialog-close","",3,"ngClass","click"]],template:function(c,p){1&c&&(o.TgZ(0,"div",0),o._uU(1),o.YNc(2,u,2,2,"div",1),o.qZA(),o.TgZ(3,"mat-dialog-content",2),o.TgZ(4,"div",2),o.TgZ(5,"div",2),o.TgZ(6,"div"),o._uU(7,"\u9060\u7a0b\uff1a"),o.qZA(),o.TgZ(8,"div"),o._uU(9),o.qZA(),o.qZA(),o.TgZ(10,"div",2),o.TgZ(11,"div"),o._uU(12,"\u7a00\u6709\u6a5f\u7387\uff1a"),o.qZA(),o.TgZ(13,"div"),o._uU(14),o.qZA(),o.qZA(),o.TgZ(15,"div",2),o.TgZ(16,"div"),o._uU(17,"\u60e1\u9b54\uff1a"),o.qZA(),o.TgZ(18,"div"),o._uU(19),o.qZA(),o.qZA(),o.TgZ(20,"div",2),o.TgZ(21,"div"),o._uU(22,"\u9996\u9818\uff1a"),o.qZA(),o.TgZ(23,"div"),o._uU(24),o.qZA(),o.qZA(),o.qZA(),o.TgZ(25,"mat-tab-group",3),o._UZ(26,"mat-tab",4),o._UZ(27,"mat-tab",5),o._UZ(28,"mat-tab",6),o.qZA(),o.qZA(),o.TgZ(29,"mat-dialog-actions",2),o.TgZ(30,"button",7),o.NdJ("click",function(){return p.close()}),o._uU(31,"\u95dc\u9589"),o.qZA(),o.qZA()),2&c&&(o.Q6J("ngClass","title"),o.xp6(1),o.AsE(" ",p.data.monster.name,"(",p.data.monster.name_en,") "),o.xp6(1),o.Q6J("ngIf",p.data.monster.desc),o.xp6(1),o.Q6J("ngClass","content"),o.xp6(1),o.Q6J("ngClass","base"),o.xp6(1),o.Q6J("ngClass","block"),o.xp6(4),o.Oqu(null==p.data.monster.rangedtype?"N":"Y"),o.xp6(1),o.Q6J("ngClass","block"),o.xp6(4),o.Oqu(p.data.monster.rarity),o.xp6(1),o.Q6J("ngClass","block"),o.xp6(4),o.Oqu(null==p.data.monster.demon?"N":"Y"),o.xp6(1),o.Q6J("ngClass","block"),o.xp6(4),o.Oqu(null==p.data.monster.boss?"N":"Y"),o.xp6(1),o.Q6J("color","accent"),o.xp6(1),o.Q6J("ngStyle",o.DdM(18,T)),o.xp6(3),o.Q6J("ngClass","action"),o.xp6(1),o.Q6J("ngClass","close"))},directives:[f.uh,l.mk,l.O5,f.xY,M.SP,M.uX,l.PC,f.H8,t.lW,f.ZT],styles:[".title{background-color:#444;color:#bb9e74;padding:8px;font-size:20pt;border-bottom:1px solid rgba(0,0,0,.125)}.title .desc{color:#c9b012;font-size:14px}.content .base{display:flex;flex-wrap:wrap;justify-content:space-between;color:#fff}.content .base .block{display:flex;width:40%;border:1px solid white;padding:10px;margin:10px;font-size:16px}.content .base .block div{width:47%}.content .mat-tab-label{font-weight:bolder;color:#fff}.action button{width:100%;background-color:#123;color:#fff}.action button:hover{background-color:#444}\n"],encapsulation:2}),m})()}}]);