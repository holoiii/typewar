!function(A){function n(e){if(t[e])return t[e].exports;var _=t[e]={i:e,l:!1,exports:{}};return A[e].call(_.exports,_,_.exports,n),_.l=!0,_.exports}var t={};n.m=A,n.c=t,n.i=function(A){return A},n.d=function(A,t,e){n.o(A,t)||Object.defineProperty(A,t,{configurable:!1,enumerable:!0,get:e})},n.n=function(A){var t=A&&A.__esModule?function(){return A.default}:function(){return A};return n.d(t,"a",t),t},n.o=function(A,n){return Object.prototype.hasOwnProperty.call(A,n)},n.p="",n(n.s=70)}({5:function(A,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"ANIM_READY",function(){return e}),t.d(n,"ANIM_LIGHT_ATTACK",function(){return _}),t.d(n,"ANIM_MED_ATTACK",function(){return r}),t.d(n,"ANIM_HEAVY_ATTACK",function(){return i}),t.d(n,"ANIM_SPECIAL_ATTACK",function(){return E}),t.d(n,"ANIM_GUARD",function(){return u}),t.d(n,"ANIM_DASH",function(){return o}),t.d(n,"ANIM_JUMP",function(){return M}),t.d(n,"ANIM_ENTER",function(){return R}),t.d(n,"ANIM_CHARGE",function(){return I}),t.d(n,"ANIM_HIT",function(){return a});var e="ANIM_READY",_="ANIM_LIGHT_ATTACK",r="ANIM_MED_ATTACK",i="ANIM_HEAVY_ATTACK",E="ANIM_SPECIAL_ATTACK",u="ANIM_GUARD",o="ANIM_DASH",M="ANIM_JUMP",R="ANIM_ENTER",I="ANIM_CHARGE",a="ANIM_HIT"},70:function(A,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=t(5),_={ANIM_READY:"ZERO_READY",ANIM_LIGHT_ATTACK:"ZERO_LIGHT_SLASH",ANIM_MED_ATTACK:"ZERO_MED_SLASH",ANIM_HEAVY_ATTACK:"ZERO_HEAVY_SLASH",ANIM_SPECIAL_ATTACK:"ZERO_UPPER_SLASH",ANIM_GUARD:"ZERO_BLOCK",ANIM_DASH:"ZERO_DASH",ANIM_JUMP:"ZERO_JUMP",ANIM_ENTER:"ZERO_ENTER",ANIM_CHARGE:"ZERO_CHARGE",ANIM_HIT:"ZERO_HIT"};Crafty.c("BattlePlayerZeroAnimation",{init:function(){this.requires("SpriteAnimation")},battlePlayerZeroAnimation:function(){var A=this;return this.reel("ZERO_READY",900,0,0,4).reel("ZERO_LIGHT_SLASH",380,0,1,8).reel("ZERO_MED_SLASH",380,0,2,6).reel("ZERO_HEAVY_SLASH",380,0,3,8).reel("ZERO_UPPER_SLASH",380,0,4,8).reel("ZERO_BLOCK",480,0,5,7).reel("ZERO_DASH",700,0,8,3).reel("ZERO_JUMP",700,9,6).reel("ZERO_ENTER",700,10,13).reel("ZERO_CHARGE",700,11,7)._setupHitAnim().bind("EnterFrame",function(n){A.isPlaying()||A.playAnim(e.ANIM_READY)}),this},animAttack:function(A){var n,t;A?n=A:(t=["ZERO_LIGHT_SLASH",ZERO_ANIM_MED_SLASH_ZERO_ANIM_HEAVY_SLASH,"ZERO_UPPER_SLASH"],n=t[Math.floor(t.length*Math.random())]),this.animate(n,0)},playAnim:function(A){this._playAnim(_[A])},_playAnim:function(A){if(!A)throw"ERROR: No reel id passed to play animation";this.animate(A,0)},_setupHitAnim:function(){var A;return A=[[0,6],[1,6],[0,7],[1,7],[0,6],[1,6],[0,7],[1,7],[0,6],[1,6],[0,7],[1,7],[0,6],[1,6],[0,7],[1,7],[0,6],[1,6],[0,7],[1,7]],this.reel("ZERO_HIT",320,A),this}})}});