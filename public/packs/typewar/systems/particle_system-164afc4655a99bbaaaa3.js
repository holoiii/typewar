!function(t){function e(i){if(r[i])return r[i].exports;var n=r[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var r={};e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,i){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=32)}({12:function(t,e){Crafty.c("BattleParticles",{init:function(){this._triggerParticles=!1,this._particleBuffer=[]},battleParticles:function(){return this},getParticleBuffer:function(){return this._particleBuffer},setParticleBuffer:function(t){this._particleBuffer=t},needTriggerParticles:function(){return this._triggerParticles},triggerParticles:function(){this._triggerParticles=!0}})},19:function(t,e,r){r(12),Crafty.c("PlayerParticles",{init:function(){this.requires("BattleParticles")},playerParticles:function(){return this}})},32:function(t,e,r){"use strict";function i(t){var e,r;e=t("BattlePlayer"),e.addComponent("PlayerParticles").playerParticles(),r=t("BattleNPC"),r.addComponent("NPCParticles").nPCParticles(),a()}function n(t){var e;e=t("BattleParticles").get(),_.each(e,function(t){t.needTriggerParticles()&&s(t),c(t)})}function a(){Crafty("BattleParticles").bind("Remove",function(){_.each(this.getParticleBuffer(),function(t){t.destroy()}),this._particleBuffer=null})}function c(t){var e;e=t.getParticleBuffer(),_.each(e,function(t){Crafty.frame()-t.getStartFrame()>=P&&(t.destroy(),t.setDestroyFlag(!0))}),_.remove(e,function(t){return t.getDestroyFlag()}),t.setParticleBuffer(e)}function o(t){return t.e("2D, Canvas, ParticleSource, Particles").particleSource(t.frame())}function s(t){var e;if(t._triggerParticles=!1,e=o(Crafty),e.attr({x:t._x,y:t._y,w:10,h:10}),t.attach(e),t.getParticleBuffer().push(e),t.has("PlayerParticles"))e.particles(l);else{if(!t.has("NPCParticles"))return void console.log("DEBUG: ERROR: some unknown entity has BattleParticles attached");e.particles(f)}}Object.defineProperty(e,"__esModule",{value:!0});r(51);e.initParticleSystem=i,e.particleSystem=n,r(19),r(48),r(49);var l,f,u={maxParticles:150,size:18,sizeRandom:4,speed:3,speedRandom:1.2,lifeSpan:29,lifeSpanRandom:25,angle:270,angleRandom:34,startColour:[255,131,0,1],startColourRandom:[48,50,45,0],endColour:[245,35,0,0],endColourRandom:[60,60,60,0],sharpness:20,sharpnessRandom:10,spread:10,duration:5,fastMode:!1,gravity:{x:0,y:.1},jitter:3,originOffset:{x:0,y:0}},P=300;l=_.cloneDeep(u),f=_.cloneDeep(u),l.originOffset.x=10,l.originOffset.y=30,f.angle=65,f.originOffset.x=10,f.originOffset.y=20},48:function(t,e,r){r(12),Crafty.c("NPCParticles",{init:function(){this.requires("BattleParticles")},nPCParticles:function(){return this}})},49:function(t,e){Crafty.c("ParticleSource",{init:function(){this._startFrame=null,this._deleteMe=!1},particleSource:function(t){return this._startFrame=t,this},getStartFrame:function(){return this._startFrame},getDestroyFlag:function(){return this._deleteMe},setDestroyFlag:function(t){this._deleteMe=t}})},51:function(t,e,r){"use strict";function i(t,e){return[t*Crafty.viewport._scale+Crafty.viewport.x,e*Crafty.viewport._scale+Crafty.viewport.y]}Object.defineProperty(e,"__esModule",{value:!0}),e.viewportConvert=i}});