!function(e){function t(l){if(n[l])return n[l].exports;var i=n[l]={i:l,l:!1,exports:{}};return e[l].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,l){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:l})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=31)}({31:function(e,t,n){"use strict";function l(e){var t;t=e("BattleNPCSkillManager").get(),_.each(t,function(e){a(e),o(e),s(e)}),u(t)}function i(e){var t=e("BattleNPCSkillManager").get();_.each(t,function(e){var t;t=e.getSkillQueue(),t.length<1||(_.each(t,function(t){t.activate(),c(e,t)}),e.setSkillQueue([]))})}function u(e){_.each(e,function(e){e.bind("Remove",function(){console.log("DEBUG: IN THE REMOVE CALLBACK OF NPCSKLL MANAGER...."),_.each(e.getSkills(),function(e){e.destroy()}),e._skills=null,e._skillset=null,e._skillQueue=null})})}function r(e){return Crafty.e("BattleNPCSkill").battleNPCSkill(e)}function c(e,t){var n;n=e.getTarget(),_.each(t.getSkillDef().effects,function(l){var i,u,r;i=l.klass,u=l,r={target:n,source:e,skill:t},r=_.merge(r,u),i.execute(r)})}function o(e){var t,n;t=e.getSkillset(),n=[],_.each(t,function(e){n.push(r(e))}),e.setSkills(n)}function a(e){var t=e.charSheet.data.skills;!t||t.length<1||e.setSkillset(t)}function s(e){e.setSkillQueue([])}Object.defineProperty(t,"__esModule",{value:!0}),t.initNPCSkillSystem=l,t.npcSkillSystem=i}});