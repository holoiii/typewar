!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=49)}({49:function(t,e){Crafty.c("ParticleSource",{init:function(){this._startFrame=null,this._deleteMe=!1},particleSource:function(t){return this._startFrame=t,this},getStartFrame:function(){return this._startFrame},getDestroyFlag:function(){return this._deleteMe},setDestroyFlag:function(t){this._deleteMe=t}})}});