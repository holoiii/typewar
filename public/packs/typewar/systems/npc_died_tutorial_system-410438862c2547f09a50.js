!function(n){function t(r){if(e[r])return e[r].exports;var u=e[r]={i:r,l:!1,exports:{}};return n[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}var e={};t.m=n,t.c=e,t.i=function(n){return n},t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:r})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=59)}({2:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),e.d(t,"PLAYER_DEFENDED_ATTACK_EVT",function(){return r}),e.d(t,"PLAYER_SWITCHED_TO_OFFENSE_EVT",function(){return u}),e.d(t,"PLAYER_USED_SKILL_EVT",function(){return _}),e.d(t,"SCENE_TRANSITION_EVT",function(){return o}),e.d(t,"TRAINING_TUTORIAL_COMPLETED_EVT",function(){return i}),e.d(t,"BATTLE_VICTORY_COND",function(){return c}),e.d(t,"BATTLE_DEFEAT_COND",function(){return T}),e.d(t,"SID_TRAINING1",function(){return f}),e.d(t,"SID_TRAINING2",function(){return a}),e.d(t,"SID_TRAINING3",function(){return d}),e.d(t,"SID_BABY_SLIME",function(){return E}),e.d(t,"SID_SLIME_BLAST",function(){return l}),e.d(t,"SID_PROTOTYPE_BATTLE",function(){return s}),e.d(t,"SID_PL_LOSE",function(){return I}),e.d(t,"TRN_FADEOUT",function(){return N}),e.d(t,"TRN_NEXT",function(){return p}),e.d(t,"TRN_LOSE",function(){return A});var r="player_defended_attack",u="player_switched_to_offensive_stance",_="player_used_a_skill",o="scene_transition",i="tutorial_completed",c="victory",T="defeat",f="training_scene_1",a="training_scene_2",d="training_scene_3",E="baby_slime",l="slime_blaster",s="prototype_battle",I="player_lose_scene",N="fadeout",p="next",A="lose"},59:function(n,t,e){"use strict";function r(n){var t;t=n("BattleNPC"),0!=t.length&&t.getHP()<=0&&n.trigger(u.TRAINING_TUTORIAL_COMPLETED_EVT)}Object.defineProperty(t,"__esModule",{value:!0});var u=e(2);t.npcDiedTutorialSystem=r}});