(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{koMD:function(e,t,i){"use strict";i.r(t),i.d(t,"CubeModule",function(){return N});var n=i("ofXK"),o=i("tyNb");class s{constructor(e,t){this.value=this.isUndefined(e)?t:e}setNext(){this.value=this.defineNext()}isUndefined(e){return void 0===e}}class l extends s{constructor(e){super(e,r)}defineNext(){switch(this.value){case c.low:return c.middle;case c.middle:return c.high;case c.high:return c.low}}}var c=function(e){return e[e.low=0]="low",e[e.middle=1]="middle",e[e.high=2]="high",e}({});const r=c.low;class g extends s{constructor(e){super(e,h)}defineNext(){switch(this.value){case a.red:return a.aquamarine;case a.aquamarine:return a.red}}}var a=function(e){return e[e.red=0]="red",e[e.aquamarine=1]="aquamarine",e}({});const h=a.red;class u extends s{constructor(e){super(e,d)}defineNext(){return!this.value}}const d=!0;class b{constructor(e){this.activeModel=new u,this.lightLevelModel=new l,this.lightColorModel=new g,e&&(this.activeModel=new u(e.active),this.lightLevelModel=new l(e.lightLevel),this.lightColorModel=new g(e.lightColor))}get active(){return this.activeModel.value}setNextActive(){this.activeModel.setNext()}get lightLevel(){return this.lightLevelModel.value}setNextLightLevel(){this.lightLevelModel.setNext()}get lightColor(){return this.lightColorModel.value}setNextLightColor(){this.lightColorModel.setNext()}}class w{constructor(e){this.glowing=new b(e&&e.glowing?e.glowing:null)}switchLight(){this.glowing.setNextActive()}changeLightColor(){this.glowing.setNextLightColor()}changeLightLevel(){this.glowing.setNextLightLevel()}}class v{constructor(e=4,t=!1){this.sides=[],Array.from(Array(e).keys()).forEach(()=>this.sides.push(new w({glowing:{active:t}})))}}var p=i("fXoL");function f(e,t){if(1&e){const e=p.Kb();p.Hb(0),p.Jb(1,"div",1),p.bc(2,"lightLevel = "),p.Jb(3,"span",2),p.Pb("click",function(){return p.Xb(e),p.Tb(2).side.changeLightLevel()}),p.bc(4),p.Ib(),p.Ib(),p.Jb(5,"div",1),p.bc(6,"lightColor = "),p.Jb(7,"span",2),p.Pb("click",function(){return p.Xb(e),p.Tb(2).side.changeLightColor()}),p.bc(8),p.Ib(),p.Ib(),p.Gb()}if(2&e){const e=p.Tb().ngIf,t=p.Tb();p.vb(4),p.cc(t.lightLevels[e.lightLevel]),p.vb(4),p.cc(t.lightColors[e.lightColor])}}function C(e,t){if(1&e){const e=p.Kb();p.Hb(0),p.Jb(1,"div",1),p.bc(2,"glowing: "),p.Jb(3,"span",2),p.Pb("click",function(){return p.Xb(e),p.Tb().side.switchLight()}),p.bc(4),p.Ib(),p.Ib(),p.ac(5,f,9,2,"ng-container",0),p.Gb()}if(2&e){const e=t.ngIf;p.vb(4),p.cc(e.active?"active":"inactive"),p.vb(1),p.Ub("ngIf",e.active)}}let L=(()=>{class e{constructor(){this.lightLevels=c,this.lightColors=a}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p.yb({type:e,selectors:[["app-cube-side"]],inputs:{side:"side"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"state-changer-wrapper"],[1,"state-changer",3,"click"]],template:function(e,t){1&e&&p.ac(0,C,6,2,"ng-container",0),2&e&&p.Ub("ngIf",null==t.side?null:t.side.glowing)},directives:[n.i],styles:["[_nghost-%COMP%]{border:1px solid #000;padding:10px;margin:10px}[_nghost-%COMP%]   .state-changer-wrapper[_ngcontent-%COMP%]{padding:5px}[_nghost-%COMP%]   .state-changer-wrapper[_ngcontent-%COMP%]   .state-changer[_ngcontent-%COMP%]{cursor:pointer}"]}),e})(),x=(()=>{class e{constructor(e){this.el=e,this.glowingLevel=(new l).value,this.glowingColor=(new g).value}set glowingActive(e){this.active=this.defineActive(e)}ngOnChanges(){const e=this.glowingStyle;Object.keys(e).forEach(t=>this.el.nativeElement.style[t]=e[t])}get glowingStyle(){return{boxShadow:this.active?`${a[this.glowingColor]} 0px 0px ${5*(this.glowingLevel+1)}px`:""}}defineActive(e){switch(typeof e){case"string":return""===e?(new u).value:"true"===e;case"boolean":return e}}}return e.\u0275fac=function(t){return new(t||e)(p.Eb(p.l))},e.\u0275dir=p.zb({type:e,selectors:[["","appGlowing",""]],inputs:{glowingActive:["appGlowing","glowingActive"],glowingLevel:"glowingLevel",glowingColor:"glowingColor"},features:[p.ub]}),e})();function m(e,t){if(1&e&&p.Fb(0,"app-cube-side",3),2&e){const e=t.$implicit;p.Ub("side",e)("appGlowing",e.glowing.active)("glowingLevel",e.glowing.lightLevel)("glowingColor",e.glowing.lightColor)}}function y(e,t){if(1&e&&(p.Hb(0),p.Jb(1,"div"),p.bc(2),p.Ib(),p.Jb(3,"div",1),p.ac(4,m,1,4,"app-cube-side",2),p.Ib(),p.Gb()),2&e){const e=t.ngIf;p.vb(2),p.dc("number of sides: ",e.length,""),p.vb(2),p.Ub("ngForOf",e)}}const M=[{path:"",component:(()=>{class e{constructor(){this.cube=new v}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p.yb({type:e,selectors:[["app-cube"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"sides-wrapper"],[3,"side","appGlowing","glowingLevel","glowingColor",4,"ngFor","ngForOf"],[3,"side","appGlowing","glowingLevel","glowingColor"]],template:function(e,t){1&e&&p.ac(0,y,5,2,"ng-container",0),2&e&&p.Ub("ngIf",t.cube.sides)},directives:[n.i,n.h,L,x],styles:["[_nghost-%COMP%]{display:block;padding:20px;text-align:center}[_nghost-%COMP%]   .sides-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center}"],changeDetection:0}),e})()}];let I=(()=>{class e{}return e.\u0275mod=p.Cb({type:e}),e.\u0275inj=p.Bb({factory:function(t){return new(t||e)},imports:[[o.b.forChild(M)],o.b]}),e})(),N=(()=>{class e{}return e.\u0275mod=p.Cb({type:e}),e.\u0275inj=p.Bb({factory:function(t){return new(t||e)},imports:[[n.b,I]]}),e})()}}]);