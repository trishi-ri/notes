(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{koMD:function(t,i,e){"use strict";e.r(i),e.d(i,"CubeModule",(function(){return C}));var n=e("ofXK"),o=e("tyNb");class c{constructor(t){this.defaultActive=!0,this.defaultLevel=g.low,this.defaultColor=l.red,this.active=t&&void 0!==t.active?t.active:this.defaultActive,this.lightLevel=t&&void 0!==t.lightLevel?t.lightLevel:this.defaultLevel,this.lightColor=t&&void 0!==t.lightColor?t.lightColor:this.defaultColor}}var l=function(t){return t[t.red=0]="red",t[t.aquamarine=1]="aquamarine",t}({}),g=function(t){return t[t.low=0]="low",t[t.middle=1]="middle",t[t.high=2]="high",t}({});class s{constructor(t){this.glowing=new c(t&&t.glowing?t.glowing:null)}switchLight(){this.glowing.active=!this.glowing.active}}class r{constructor(t=4,i=!1){this.sides=[],Array.from(Array(t).keys()).forEach(()=>this.sides.push(new s({glowing:{active:i}})))}}var h=e("fXoL");function a(t,i){if(1&t){const t=h.Jb();h.Ib(0,"button",4),h.Ob("click",(function(){h.Wb(t);const e=i.$implicit;return h.Sb().changeLightColor(e.id)})),h.ac(1),h.Hb()}if(2&t){const t=i.$implicit;h.vb("data-test","cube-controls_button_changeLightColor_"+t.name),h.ub(1),h.bc(t.name)}}function u(t,i){if(1&t){const t=h.Jb();h.Ib(0,"button",4),h.Ob("click",(function(){h.Wb(t);const e=i.$implicit;return h.Sb().changeLightLevel(e.id)})),h.ac(1),h.Hb()}if(2&t){const t=i.$implicit;h.vb("data-test","cube-controls_button_changeLightLevel_"+t.name),h.ub(1),h.bc(t.name)}}let b=(()=>{class t{constructor(){this.lightColors=this.createLightColorEnumArray(),this.lightLevels=this.createLightLevelEnumArray(),this.lightOnEvent=new h.n,this.lightOffEvent=new h.n,this.switchLightEvent=new h.n,this.changeLightColorEvent=new h.n,this.changeLightLevelEvent=new h.n}ngOnInit(){}lightOn(){this.lightOnEvent.emit()}lightOff(){this.lightOffEvent.emit()}switchLight(){this.switchLightEvent.emit()}changeLightColor(t){this.changeLightColorEvent.emit(t)}changeLightLevel(t){this.changeLightLevelEvent.emit(t)}createLightColorEnumArray(){return Object.keys(l).filter(t=>"string"==typeof l[t]).map(t=>new f(Number(t),l[t]))}createLightLevelEnumArray(){return Object.keys(g).filter(t=>"string"==typeof g[t]).map(t=>new f(Number(t),g[t]))}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=h.xb({type:t,selectors:[["app-cube-controls"]],outputs:{lightOnEvent:"lightOnEvent",lightOffEvent:"lightOffEvent",switchLightEvent:"switchLightEvent",changeLightColorEvent:"changeLightColorEvent",changeLightLevelEvent:"changeLightLevelEvent"},decls:14,vars:2,consts:[["data-test","cube-controls_button_lightOn",1,"control-btn",3,"click"],["data-test","cube-controls_button_lightOff",1,"control-btn",3,"click"],["data-test","cube-controls_button_switchLight",1,"control-btn",3,"click"],["class","control-btn",3,"click",4,"ngFor","ngForOf"],[1,"control-btn",3,"click"]],template:function(t,i){1&t&&(h.Ib(0,"div"),h.ac(1," light: "),h.Ib(2,"button",0),h.Ob("click",(function(){return i.lightOn()})),h.ac(3,"light on"),h.Hb(),h.Ib(4,"button",1),h.Ob("click",(function(){return i.lightOff()})),h.ac(5,"light off"),h.Hb(),h.Ib(6,"button",2),h.Ob("click",(function(){return i.switchLight()})),h.ac(7,"switch light"),h.Hb(),h.Hb(),h.Ib(8,"div"),h.ac(9," light color: "),h.Zb(10,a,2,2,"button",3),h.Hb(),h.Ib(11,"div"),h.ac(12," light level: "),h.Zb(13,u,2,2,"button",3),h.Hb()),2&t&&(h.ub(10),h.Tb("ngForOf",i.lightColors),h.ub(3),h.Tb("ngForOf",i.lightLevels))},directives:[n.h],styles:[".control-btn[_ngcontent-%COMP%]{margin:10px}"]}),t})();class f{constructor(t,i){this.id=t,this.name=i}}function v(t,i){if(1&t&&(h.Gb(0),h.ac(1),h.Eb(2,"br"),h.ac(3),h.Eb(4,"br"),h.Fb()),2&t){const t=h.Sb().ngIf,i=h.Sb();h.ub(1),h.cc(" lightLevel = ",i.lightLevels[t.lightLevel],""),h.ub(2),h.cc(" lightColor = ",i.lightColors[t.lightColor],"")}}function w(t,i){if(1&t&&(h.Gb(0),h.ac(1),h.Eb(2,"br"),h.Zb(3,v,5,2,"ng-container",0),h.Fb()),2&t){const t=i.ngIf;h.ub(1),h.cc(" glowing: ",t.active?"active":"inactive",""),h.ub(2),h.Tb("ngIf",t.active)}}let d=(()=>{class t{constructor(){this.lightLevels=g,this.lightColors=l}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=h.xb({type:t,selectors:[["app-cube-side"]],inputs:{side:"side"},decls:1,vars:1,consts:[[4,"ngIf"]],template:function(t,i){1&t&&h.Zb(0,w,4,2,"ng-container",0),2&t&&h.Tb("ngIf",null==i.side?null:i.side.glowing)},directives:[n.i],styles:["[_nghost-%COMP%]{cursor:pointer;border:1px solid #000;padding:10px;margin:10px}"]}),t})(),p=(()=>{class t{constructor(t){this.el=t,this.defaultGlowing=new c,this.glowingLevel=this.defaultGlowing.defaultLevel,this.glowingColor=this.defaultGlowing.defaultColor}set glowingActive(t){this.active=this.defineActive(t)}ngOnChanges(){const t=this.glowingStyle;Object.keys(t).forEach(i=>this.el.nativeElement.style[i]=t[i])}get glowingStyle(){return{boxShadow:this.active?`${l[this.glowingColor]} 0px 0px ${5*(this.glowingLevel+1)}px`:""}}defineActive(t){switch(typeof t){case"string":return""===t?this.defaultGlowing.defaultActive:"true"===t;case"boolean":return t}}}return t.\u0275fac=function(i){return new(i||t)(h.Db(h.l))},t.\u0275dir=h.yb({type:t,selectors:[["","appGlowing",""]],inputs:{glowingActive:["appGlowing","glowingActive"],glowingLevel:"glowingLevel",glowingColor:"glowingColor"},features:[h.tb]}),t})();function L(t,i){if(1&t&&(h.Ib(0,"app-cube-side",4),h.Ob("click",(function(){return i.$implicit.switchLight})),h.Hb()),2&t){const t=i.$implicit;h.Tb("side",t)("appGlowing",t.glowing.active)("glowingLevel",t.glowing.lightLevel)("glowingColor",t.glowing.lightColor)}}function m(t,i){if(1&t&&(h.Gb(0),h.Ib(1,"div"),h.ac(2),h.Hb(),h.Ib(3,"div",2),h.Zb(4,L,1,4,"app-cube-side",3),h.Hb(),h.Fb()),2&t){const t=i.ngIf;h.ub(2),h.cc("number of sides: ",t.length,""),h.ub(2),h.Tb("ngForOf",t)}}const O=[{path:"",component:(()=>{class t{constructor(t){this.cdr=t}ngOnInit(){this.cube=new r}lightOn(){this.cube.sides.forEach(t=>t.glowing.active=!0),this.cdr.markForCheck()}lightOff(){this.cube.sides.forEach(t=>t.glowing.active=!1)}switchLight(){this.cube.sides.forEach(t=>t.switchLight())}changeLightColor(t){this.cube.sides.forEach(i=>i.glowing.lightColor=t)}changeLightLevel(t){this.cube.sides.forEach(i=>i.glowing.lightLevel=t)}}return t.\u0275fac=function(i){return new(i||t)(h.Db(h.h))},t.\u0275cmp=h.xb({type:t,selectors:[["app-cube"]],decls:2,vars:1,consts:[[3,"lightOnEvent","lightOffEvent","switchLightEvent","changeLightColorEvent","changeLightLevelEvent"],[4,"ngIf"],[1,"sides-wrapper"],[3,"side","appGlowing","glowingLevel","glowingColor","click",4,"ngFor","ngForOf"],[3,"side","appGlowing","glowingLevel","glowingColor","click"]],template:function(t,i){1&t&&(h.Ib(0,"app-cube-controls",0),h.Ob("lightOnEvent",(function(){return i.lightOn()}))("lightOffEvent",(function(){return i.lightOff()}))("switchLightEvent",(function(){return i.switchLight()}))("changeLightColorEvent",(function(t){return i.changeLightColor(t)}))("changeLightLevelEvent",(function(t){return i.changeLightLevel(t)})),h.Hb(),h.Zb(1,m,5,2,"ng-container",1)),2&t&&(h.ub(1),h.Tb("ngIf",i.cube.sides))},directives:[b,n.i,n.h,d,p],styles:["[_nghost-%COMP%]{display:block;padding:20px;text-align:center}[_nghost-%COMP%]   .sides-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center}"],changeDetection:0}),t})()}];let E=(()=>{class t{}return t.\u0275mod=h.Bb({type:t}),t.\u0275inj=h.Ab({factory:function(i){return new(i||t)},imports:[[o.b.forChild(O)],o.b]}),t})(),C=(()=>{class t{}return t.\u0275mod=h.Bb({type:t}),t.\u0275inj=h.Ab({factory:function(i){return new(i||t)},imports:[[n.b,E]]}),t})()}}]);