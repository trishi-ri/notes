(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{koMD:function(e,t,i){"use strict";i.r(t),i.d(t,"CubeModule",(function(){return C}));var n=i("ofXK"),o=i("tyNb");class l{constructor(e){this.defaultActive=!0,this.defaultLevel=g.low,this.defaultColor=s.red,this.active=e&&void 0!==e.active?e.active:this.defaultActive,this.lightLevel=e&&void 0!==e.lightLevel?e.lightLevel:this.defaultLevel,this.lightColor=e&&void 0!==e.lightColor?e.lightColor:this.defaultColor}}var s=function(e){return e[e.red=0]="red",e[e.aquamarine=1]="aquamarine",e}({}),g=function(e){return e[e.low=0]="low",e[e.middle=1]="middle",e[e.high=2]="high",e}({});class c{constructor(e){this.glowing=new l(e&&e.glowing?e.glowing:null)}switchLight(){this.glowing.active=!this.glowing.active}changeLightColor(){this.glowing.lightColor=this.nextLightColor}changeLightLevel(){this.glowing.lightLevel=this.nextLightLevel}get nextLightColor(){switch(this.glowing.lightColor){case s.red:return s.aquamarine;case s.aquamarine:default:return s.red}}get nextLightLevel(){switch(this.glowing.lightLevel){case g.low:return g.middle;case g.middle:return g.high;case g.high:default:return g.low}}}class r{constructor(e=4,t=!1){this.sides=[],Array.from(Array(e).keys()).forEach(()=>this.sides.push(new c({glowing:{active:t}})))}}var a=i("fXoL");function h(e,t){if(1&e){const e=a.Jb();a.Gb(0),a.Ib(1,"div",1),a.ac(2,"lightLevel = "),a.Ib(3,"span",2),a.Ob("click",(function(){return a.Wb(e),a.Sb(2).side.changeLightLevel()})),a.ac(4),a.Hb(),a.Hb(),a.Ib(5,"div",1),a.ac(6,"lightColor = "),a.Ib(7,"span",2),a.Ob("click",(function(){return a.Wb(e),a.Sb(2).side.changeLightColor()})),a.ac(8),a.Hb(),a.Hb(),a.Fb()}if(2&e){const e=a.Sb().ngIf,t=a.Sb();a.ub(4),a.bc(t.lightLevels[e.lightLevel]),a.ub(4),a.bc(t.lightColors[e.lightColor])}}function u(e,t){if(1&e){const e=a.Jb();a.Gb(0),a.Ib(1,"div",1),a.ac(2,"glowing: "),a.Ib(3,"span",2),a.Ob("click",(function(){return a.Wb(e),a.Sb().side.switchLight()})),a.ac(4),a.Hb(),a.Hb(),a.Zb(5,h,9,2,"ng-container",0),a.Fb()}if(2&e){const e=t.ngIf;a.ub(4),a.bc(e.active?"active":"inactive"),a.ub(1),a.Tb("ngIf",e.active)}}let b=(()=>{class e{constructor(){this.lightLevels=g,this.lightColors=s}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.xb({type:e,selectors:[["app-cube-side"]],inputs:{side:"side"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"state-changer-wrapper"],[1,"state-changer",3,"click"]],template:function(e,t){1&e&&a.Zb(0,u,6,2,"ng-container",0),2&e&&a.Tb("ngIf",null==t.side?null:t.side.glowing)},directives:[n.i],styles:["[_nghost-%COMP%]{border:1px solid #000;padding:10px;margin:10px}[_nghost-%COMP%]   .state-changer-wrapper[_ngcontent-%COMP%]{padding:5px}[_nghost-%COMP%]   .state-changer-wrapper[_ngcontent-%COMP%]   .state-changer[_ngcontent-%COMP%]{cursor:pointer}"]}),e})(),d=(()=>{class e{constructor(e){this.el=e,this.defaultGlowing=new l,this.glowingLevel=this.defaultGlowing.defaultLevel,this.glowingColor=this.defaultGlowing.defaultColor}set glowingActive(e){this.active=this.defineActive(e)}ngOnChanges(){const e=this.glowingStyle;Object.keys(e).forEach(t=>this.el.nativeElement.style[t]=e[t])}get glowingStyle(){return{boxShadow:this.active?`${s[this.glowingColor]} 0px 0px ${5*(this.glowingLevel+1)}px`:""}}defineActive(e){switch(typeof e){case"string":return""===e?this.defaultGlowing.defaultActive:"true"===e;case"boolean":return e}}}return e.\u0275fac=function(t){return new(t||e)(a.Db(a.l))},e.\u0275dir=a.yb({type:e,selectors:[["","appGlowing",""]],inputs:{glowingActive:["appGlowing","glowingActive"],glowingLevel:"glowingLevel",glowingColor:"glowingColor"},features:[a.tb]}),e})();function w(e,t){if(1&e&&a.Eb(0,"app-cube-side",3),2&e){const e=t.$implicit;a.Tb("side",e)("appGlowing",e.glowing.active)("glowingLevel",e.glowing.lightLevel)("glowingColor",e.glowing.lightColor)}}function f(e,t){if(1&e&&(a.Gb(0),a.Ib(1,"div"),a.ac(2),a.Hb(),a.Ib(3,"div",1),a.Zb(4,w,1,4,"app-cube-side",2),a.Hb(),a.Fb()),2&e){const e=t.ngIf;a.ub(2),a.cc("number of sides: ",e.length,""),a.ub(2),a.Tb("ngForOf",e)}}const p=[{path:"",component:(()=>{class e{constructor(){this.cube=new r}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.xb({type:e,selectors:[["app-cube"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"sides-wrapper"],[3,"side","appGlowing","glowingLevel","glowingColor",4,"ngFor","ngForOf"],[3,"side","appGlowing","glowingLevel","glowingColor"]],template:function(e,t){1&e&&a.Zb(0,f,5,2,"ng-container",0),2&e&&a.Tb("ngIf",t.cube.sides)},directives:[n.i,n.h,b,d],styles:["[_nghost-%COMP%]{display:block;padding:20px;text-align:center}[_nghost-%COMP%]   .sides-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center}"],changeDetection:0}),e})()}];let v=(()=>{class e{}return e.\u0275mod=a.Bb({type:e}),e.\u0275inj=a.Ab({factory:function(t){return new(t||e)},imports:[[o.b.forChild(p)],o.b]}),e})(),C=(()=>{class e{}return e.\u0275mod=a.Bb({type:e}),e.\u0275inj=a.Ab({factory:function(t){return new(t||e)},imports:[[n.b,v]]}),e})()}}]);