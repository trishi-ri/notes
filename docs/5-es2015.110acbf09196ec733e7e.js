(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{koMD:function(t,i,n){"use strict";n.r(i),n.d(i,"CubeModule",(function(){return E}));var e=n("ofXK"),c=n("tyNb");class o{constructor(t){this.active=!(!t||void 0===t.active)&&t.active,this.lightLevel=t&&void 0!==t.lightLevel?t.lightLevel:l.low,this.lightColor=t&&void 0!==t.lightColor?t.lightColor:s.red}}var s=function(t){return t[t.red=0]="red",t[t.aquamarine=1]="aquamarine",t}({}),l=function(t){return t[t.low=0]="low",t[t.middle=1]="middle",t[t.high=2]="high",t}({});class g{constructor(t){this.glowing=new o(t&&t.glowing?t.glowing:null)}}class h{constructor(t=4){this.sides=[],Array.from(Array(t).keys()).forEach(()=>this.sides.push(new g))}}var r=n("fXoL");function a(t,i){if(1&t){const t=r.Mb();r.Lb(0,"button",4),r.Sb("click",(function(){r.ac(t);const n=i.$implicit;return r.Wb().changeLightColor(n.id)})),r.ec(1),r.Kb()}if(2&t){const t=i.$implicit;r.xb("data-test","cube-controls_button_changeLightColor_"+t.name),r.wb(1),r.fc(t.name)}}function b(t,i){if(1&t){const t=r.Mb();r.Lb(0,"button",4),r.Sb("click",(function(){r.ac(t);const n=i.$implicit;return r.Wb().changeLightLevel(n.id)})),r.ec(1),r.Kb()}if(2&t){const t=i.$implicit;r.xb("data-test","cube-controls_button_changeLightLevel_"+t.name),r.wb(1),r.fc(t.name)}}let u=(()=>{class t{constructor(){this.lightColors=this.createLightColorEnumArray(),this.lightLevels=this.createLightLevelEnumArray(),this.lightOnEvent=new r.n,this.lightOffEvent=new r.n,this.switchLightEvent=new r.n,this.changeLightColorEvent=new r.n,this.changeLightLevelEvent=new r.n}ngOnInit(){}lightOn(){this.lightOnEvent.emit()}lightOff(){this.lightOffEvent.emit()}switchLight(){this.switchLightEvent.emit()}changeLightColor(t){this.changeLightColorEvent.emit(t)}changeLightLevel(t){this.changeLightLevelEvent.emit(t)}createLightColorEnumArray(){return Object.keys(s).filter(t=>"string"==typeof s[t]).map(t=>new f(Number(t),s[t]))}createLightLevelEnumArray(){return Object.keys(l).filter(t=>"string"==typeof l[t]).map(t=>new f(Number(t),l[t]))}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=r.Ab({type:t,selectors:[["app-cube-controls"]],outputs:{lightOnEvent:"lightOnEvent",lightOffEvent:"lightOffEvent",switchLightEvent:"switchLightEvent",changeLightColorEvent:"changeLightColorEvent",changeLightLevelEvent:"changeLightLevelEvent"},decls:14,vars:2,consts:[["data-test","cube-controls_button_lightOn",1,"control-btn",3,"click"],["data-test","cube-controls_button_lightOff",1,"control-btn",3,"click"],["data-test","cube-controls_button_switchLight",1,"control-btn",3,"click"],["class","control-btn",3,"click",4,"ngFor","ngForOf"],[1,"control-btn",3,"click"]],template:function(t,i){1&t&&(r.Lb(0,"div"),r.ec(1," light: "),r.Lb(2,"button",0),r.Sb("click",(function(){return i.lightOn()})),r.ec(3,"light on"),r.Kb(),r.Lb(4,"button",1),r.Sb("click",(function(){return i.lightOff()})),r.ec(5,"light off"),r.Kb(),r.Lb(6,"button",2),r.Sb("click",(function(){return i.switchLight()})),r.ec(7,"switch light"),r.Kb(),r.Kb(),r.Lb(8,"div"),r.ec(9," light color: "),r.dc(10,a,2,2,"button",3),r.Kb(),r.Lb(11,"div"),r.ec(12," light level: "),r.dc(13,b,2,2,"button",3),r.Kb()),2&t&&(r.wb(10),r.Xb("ngForOf",i.lightColors),r.wb(3),r.Xb("ngForOf",i.lightLevels))},directives:[e.h],styles:[".control-btn[_ngcontent-%COMP%]{margin:10px}"]}),t})();class f{constructor(t,i){this.id=t,this.name=i}}function d(t,i){if(1&t&&(r.Jb(0),r.ec(1),r.Hb(2,"br"),r.ec(3),r.Hb(4,"br"),r.Ib()),2&t){const t=r.Wb().ngIf,i=r.Wb();r.wb(1),r.gc(" lightLevel = ",i.lightLevels[t.lightLevel],""),r.wb(2),r.gc(" lightColor = ",i.lightColors[t.lightColor],"")}}function v(t,i){if(1&t&&(r.Jb(0),r.ec(1),r.Hb(2,"br"),r.dc(3,d,5,2,"ng-container",0),r.Ib()),2&t){const t=i.ngIf;r.wb(1),r.gc(" glowing: ",t.active?"active":"inactive",""),r.wb(2),r.Xb("ngIf",t.active)}}let w=(()=>{class t{constructor(){this.lightLevels=l,this.lightColors=s}get hostClasses(){const t=this.side&&this.side.glowing;return[t&&t.active?"glowing":"",t&&t.active?`glowing--${s[t.lightColor]}-${l[t.lightLevel]}`:""].filter(t=>t).join(" ")}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=r.Ab({type:t,selectors:[["app-cube-side"]],hostVars:2,hostBindings:function(t,i){2&t&&r.yb(i.hostClasses)},inputs:{side:"side"},decls:1,vars:1,consts:[[4,"ngIf"]],template:function(t,i){1&t&&r.dc(0,v,4,2,"ng-container",0),2&t&&r.Xb("ngIf",null==i.side?null:i.side.glowing)},directives:[e.i],styles:["[_nghost-%COMP%]{cursor:pointer;border:1px solid #000;padding:10px;margin:10px}.glowing--red-low[_nghost-%COMP%]{box-shadow:0 0 5px red}.glowing--red-middle[_nghost-%COMP%]{box-shadow:0 0 10px red}.glowing--red-high[_nghost-%COMP%]{box-shadow:0 0 15px red}.glowing--aquamarine-low[_nghost-%COMP%]{box-shadow:0 0 5px #7fffd4}.glowing--aquamarine-middle[_nghost-%COMP%]{box-shadow:0 0 10px #7fffd4}.glowing--aquamarine-high[_nghost-%COMP%]{box-shadow:0 0 15px #7fffd4}"]}),t})();function L(t,i){if(1&t){const t=r.Mb();r.Lb(0,"app-cube-side",4),r.Sb("click",(function(){r.ac(t);const n=i.$implicit;return r.Wb(2).switchLightSide(n)})),r.Kb()}2&t&&r.Xb("side",i.$implicit)}function p(t,i){if(1&t&&(r.Jb(0),r.Lb(1,"div"),r.ec(2),r.Kb(),r.Lb(3,"div",2),r.dc(4,L,1,1,"app-cube-side",3),r.Kb(),r.Ib()),2&t){const t=i.ngIf;r.wb(2),r.gc("number of sides: ",t.length,""),r.wb(2),r.Xb("ngForOf",t)}}const m=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){this.cube=new h}lightOn(){this.cube.sides.forEach(t=>t.glowing.active=!0)}lightOff(){this.cube.sides.forEach(t=>t.glowing.active=!1)}switchLight(){this.cube.sides.forEach(t=>this.switchLightSide(t))}changeLightColor(t){this.cube.sides.forEach(i=>i.glowing.lightColor=t)}changeLightLevel(t){this.cube.sides.forEach(i=>i.glowing.lightLevel=t)}switchLightSide(t){t.glowing.active=!t.glowing.active}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=r.Ab({type:t,selectors:[["app-cube"]],decls:2,vars:1,consts:[[3,"lightOnEvent","lightOffEvent","switchLightEvent","changeLightColorEvent","changeLightLevelEvent"],[4,"ngIf"],[1,"sides-wrapper"],[3,"side","click",4,"ngFor","ngForOf"],[3,"side","click"]],template:function(t,i){1&t&&(r.Lb(0,"app-cube-controls",0),r.Sb("lightOnEvent",(function(){return i.lightOn()}))("lightOffEvent",(function(){return i.lightOff()}))("switchLightEvent",(function(){return i.switchLight()}))("changeLightColorEvent",(function(t){return i.changeLightColor(t)}))("changeLightLevelEvent",(function(t){return i.changeLightLevel(t)})),r.Kb(),r.dc(1,p,5,2,"ng-container",1)),2&t&&(r.wb(1),r.Xb("ngIf",i.cube.sides))},directives:[u,e.i,e.h,w],styles:["[_nghost-%COMP%]{display:block;padding:20px;text-align:center}[_nghost-%COMP%]   .sides-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center}"]}),t})()}];let O=(()=>{class t{}return t.\u0275mod=r.Eb({type:t}),t.\u0275inj=r.Db({factory:function(i){return new(i||t)},imports:[[c.b.forChild(m)],c.b]}),t})(),E=(()=>{class t{}return t.\u0275mod=r.Eb({type:t}),t.\u0275inj=r.Db({factory:function(i){return new(i||t)},imports:[[e.b,O]]}),t})()}}]);