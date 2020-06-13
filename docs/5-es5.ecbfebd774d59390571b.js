function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{koMD:function(t,n,e){"use strict";e.r(n);var i=e("ofXK"),c=e("tyNb"),o=function(){function t(){_classCallCheck(this,t),this.active=!1,this.lightLevel=r.low,this.lightColor=l.red}return _createClass(t,[{key:"lightOn",value:function(){this.active=!0}},{key:"lightOff",value:function(){this.active=!1}},{key:"switchLight",value:function(){this.active=!this.active}},{key:"changeColor",value:function(t){this.lightColor=t}},{key:"changeLevel",value:function(t){this.lightLevel=t}}]),t}(),l=function(t){return t.red="red",t.aquamarine="aquamarine",t}({}),r=function(t){return t[t.low=1]="low",t[t.middle=2]="middle",t[t.high=3]="high",t}({}),s=function t(n){_classCallCheck(this,t),this.glowing=n&&n.glowing?n.glowing:new o},h=function t(){var n=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4;_classCallCheck(this,t),this.sides=[],Array.from(Array(e).keys()).forEach((function(){return n.sides.push(new s)}))},a=e("fXoL");function g(t,n){if(1&t){var e=a.Mb();a.Lb(0,"button",4),a.Sb("click",(function(){a.ac(e);var t=n.$implicit;return a.Wb().changeLightColor(t.id)})),a.ec(1),a.Kb()}if(2&t){var i=n.$implicit;a.xb("data-test","cube-controls_button_changeLightColor_"+i.id),a.wb(1),a.fc(i.name)}}function u(t,n){if(1&t){var e=a.Mb();a.Lb(0,"button",4),a.Sb("click",(function(){a.ac(e);var t=n.$implicit;return a.Wb().changeLightLevel(t.id)})),a.ec(1),a.Kb()}if(2&t){var i=n.$implicit;a.xb("data-test","cube-controls_button_changeLightLevel_"+i.id),a.wb(1),a.fc(i.name)}}var f,b=((f=function(){function t(){_classCallCheck(this,t),this.lightColors=this.createLightColorEnumArray(),this.lightLevels=this.createLightLevelEnumArray(),this.lightOnEvent=new a.n,this.lightOffEvent=new a.n,this.switchLightEvent=new a.n,this.changeLightColorEvent=new a.n,this.changeLightLevelEvent=new a.n}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"lightOn",value:function(){this.lightOnEvent.emit()}},{key:"lightOff",value:function(){this.lightOffEvent.emit()}},{key:"switchLight",value:function(){this.switchLightEvent.emit()}},{key:"changeLightColor",value:function(t){this.changeLightColorEvent.emit(t)}},{key:"changeLightLevel",value:function(t){this.changeLightLevelEvent.emit(t)}},{key:"createLightColorEnumArray",value:function(){return Object.keys(l).filter((function(t){return"string"==typeof l[t]})).map((function(t){return new v(t,l[t])}))}},{key:"createLightLevelEnumArray",value:function(){return Object.keys(r).filter((function(t){return"string"==typeof r[t]})).map((function(t){return new v(t,r[t])}))}}]),t}()).\u0275fac=function(t){return new(t||f)},f.\u0275cmp=a.Ab({type:f,selectors:[["app-cube-controls"]],outputs:{lightOnEvent:"lightOnEvent",lightOffEvent:"lightOffEvent",switchLightEvent:"switchLightEvent",changeLightColorEvent:"changeLightColorEvent",changeLightLevelEvent:"changeLightLevelEvent"},decls:14,vars:2,consts:[["data-test","cube-controls_button_lightOn",1,"control-btn",3,"click"],["data-test","cube-controls_button_lightOff",1,"control-btn",3,"click"],["data-test","cube-controls_button_switchLight",1,"control-btn",3,"click"],["class","control-btn",3,"click",4,"ngFor","ngForOf"],[1,"control-btn",3,"click"]],template:function(t,n){1&t&&(a.Lb(0,"div"),a.ec(1," light: "),a.Lb(2,"button",0),a.Sb("click",(function(){return n.lightOn()})),a.ec(3,"light on"),a.Kb(),a.Lb(4,"button",1),a.Sb("click",(function(){return n.lightOff()})),a.ec(5,"light off"),a.Kb(),a.Lb(6,"button",2),a.Sb("click",(function(){return n.switchLight()})),a.ec(7,"switch light"),a.Kb(),a.Kb(),a.Lb(8,"div"),a.ec(9," light color: "),a.dc(10,g,2,2,"button",3),a.Kb(),a.Lb(11,"div"),a.ec(12," light level: "),a.dc(13,u,2,2,"button",3),a.Kb()),2&t&&(a.wb(10),a.Xb("ngForOf",n.lightColors),a.wb(3),a.Xb("ngForOf",n.lightLevels))},directives:[i.h],styles:[".control-btn[_ngcontent-%COMP%]{margin:10px}"]}),f),v=function t(n,e){_classCallCheck(this,t),this.id=n,this.name=e};function d(t,n){if(1&t&&(a.Jb(0),a.ec(1),a.Hb(2,"br"),a.ec(3),a.Hb(4,"br"),a.Ib()),2&t){var e=a.Wb().ngIf,i=a.Wb();a.wb(1),a.gc(" lightLevel = ",i.lightLevels[e.lightLevel],""),a.wb(2),a.gc(" lightColor = ",e.lightColor,"")}}function w(t,n){if(1&t&&(a.Jb(0),a.ec(1),a.Hb(2,"br"),a.dc(3,d,5,2,"ng-container",0),a.Ib()),2&t){var e=n.ngIf;a.wb(1),a.gc(" glowing: ",e.active?"active":"inactive",""),a.wb(2),a.Xb("ngIf",e.active)}}var L,p=((L=function(){function t(){_classCallCheck(this,t),this.lightLevels=r}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"hostClasses",get:function(){var t=this.side.glowing;return[t&&t.active?"glowing":"",t&&t.active?"glowing--".concat(t.lightColor).concat(t.lightLevel):""].join(" ")}}]),t}()).\u0275fac=function(t){return new(t||L)},L.\u0275cmp=a.Ab({type:L,selectors:[["app-cube-side"]],hostVars:2,hostBindings:function(t,n){2&t&&a.yb(n.hostClasses)},inputs:{side:"side"},decls:1,vars:1,consts:[[4,"ngIf"]],template:function(t,n){1&t&&a.dc(0,w,4,2,"ng-container",0),2&t&&a.Xb("ngIf",n.side.glowing)},directives:[i.i],styles:["[_nghost-%COMP%]{cursor:pointer;border:1px solid #000;padding:10px;margin:10px}.glowing--red1[_nghost-%COMP%]{box-shadow:0 0 10px red}.glowing--red2[_nghost-%COMP%]{box-shadow:0 0 15px red}.glowing--red3[_nghost-%COMP%]{box-shadow:0 0 20px red}.glowing--aquamarine1[_nghost-%COMP%]{box-shadow:0 0 10px #7fffd4}.glowing--aquamarine2[_nghost-%COMP%]{box-shadow:0 0 15px #7fffd4}.glowing--aquamarine3[_nghost-%COMP%]{box-shadow:0 0 20px #7fffd4}"]}),L);function C(t,n){1&t&&(a.Lb(0,"app-cube-side",3),a.Sb("click",(function(){return n.$implicit.glowing.switchLight()})),a.Kb()),2&t&&a.Xb("side",n.$implicit)}var k,y,O=[{path:"",component:(k=function(){function t(){_classCallCheck(this,t),this.lightColors=l,this.lightLevels=r}return _createClass(t,[{key:"ngOnInit",value:function(){this.cube=new h}},{key:"lightOn",value:function(){this.cube.sides.forEach((function(t){return t.glowing.lightOn()}))}},{key:"lightOff",value:function(){this.cube.sides.forEach((function(t){return t.glowing.lightOff()}))}},{key:"switchLight",value:function(){this.cube.sides.forEach((function(t){return t.glowing.switchLight()}))}},{key:"changeLightColor",value:function(t){this.cube.sides.forEach((function(n){return n.glowing.changeColor(t)}))}},{key:"changeLightLevel",value:function(t){this.cube.sides.forEach((function(n){return n.glowing.changeLevel(t)}))}}]),t}(),k.\u0275fac=function(t){return new(t||k)},k.\u0275cmp=a.Ab({type:k,selectors:[["app-cube"]],decls:5,vars:2,consts:[[3,"lightOnEvent","lightOffEvent","switchLightEvent","changeLightColorEvent","changeLightLevelEvent"],[1,"sides-wrapper"],[3,"side","click",4,"ngFor","ngForOf"],[3,"side","click"]],template:function(t,n){1&t&&(a.Lb(0,"div"),a.ec(1),a.Kb(),a.Lb(2,"app-cube-controls",0),a.Sb("lightOnEvent",(function(){return n.lightOn()}))("lightOffEvent",(function(){return n.lightOff()}))("switchLightEvent",(function(){return n.switchLight()}))("changeLightColorEvent",(function(t){return n.changeLightColor(t)}))("changeLightLevelEvent",(function(t){return n.changeLightLevel(t)})),a.Kb(),a.Lb(3,"div",1),a.dc(4,C,1,1,"app-cube-side",2),a.Kb()),2&t&&(a.wb(1),a.gc("number of sides: ",n.cube.sides.length,""),a.wb(3),a.Xb("ngForOf",n.cube.sides))},directives:[b,i.h,p],styles:["[_nghost-%COMP%]{display:block;padding:20px;text-align:center}[_nghost-%COMP%]   .sides-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center}"]}),k)}],m=((y=function t(){_classCallCheck(this,t)}).\u0275mod=a.Eb({type:y}),y.\u0275inj=a.Db({factory:function(t){return new(t||y)},imports:[[c.b.forChild(O)],c.b]}),y);e.d(n,"CubeModule",(function(){return _}));var E,_=((E=function t(){_classCallCheck(this,t)}).\u0275mod=a.Eb({type:E}),E.\u0275inj=a.Db({factory:function(t){return new(t||E)},imports:[[i.b,m]]}),E)}}]);