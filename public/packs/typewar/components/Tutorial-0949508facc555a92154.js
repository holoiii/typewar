!function(t){function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var e={};n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=61)}({4:function(t,n,e){!function(){var e={VERSION:"2.4.0",Result:{SUCCEEDED:1,NOTRANSITION:2,CANCELLED:3,PENDING:4},Error:{INVALID_TRANSITION:100,PENDING_TRANSITION:200,INVALID_CALLBACK:300},WILDCARD:"*",ASYNC:"async",create:function(t,n){var r="string"==typeof t.initial?{state:t.initial}:t.initial,i=t.terminal||t.final,o=n||t.target||{},a=t.events||[],u=t.callbacks||{},s={},c={},l=function(t){var n=Array.isArray(t.from)?t.from:t.from?[t.from]:[e.WILDCARD];s[t.name]=s[t.name]||{};for(var r=0;r<n.length;r++)c[n[r]]=c[n[r]]||[],c[n[r]].push(t.name),s[t.name][n[r]]=t.to||n[r];t.to&&(c[t.to]=c[t.to]||[])};r&&(r.event=r.event||"startup",l({name:r.event,from:"none",to:r.state}));for(var f=0;f<a.length;f++)l(a[f]);for(var h in s)s.hasOwnProperty(h)&&(o[h]=e.buildEvent(h,s[h]));for(var h in u)u.hasOwnProperty(h)&&(o[h]=u[h]);return o.current="none",o.is=function(t){return Array.isArray(t)?t.indexOf(this.current)>=0:this.current===t},o.can=function(t){return!this.transition&&void 0!==s[t]&&(s[t].hasOwnProperty(this.current)||s[t].hasOwnProperty(e.WILDCARD))},o.cannot=function(t){return!this.can(t)},o.transitions=function(){return(c[this.current]||[]).concat(c[e.WILDCARD]||[])},o.isFinished=function(){return this.is(i)},o.error=t.error||function(t,n,e,r,i,o,a){throw a||o},o.states=function(){return Object.keys(c).sort()},r&&!r.defer&&o[r.event](),o},doCallback:function(t,n,r,i,o,a){if(n)try{return n.apply(t,[r,i,o].concat(a))}catch(n){return t.error(r,i,o,a,e.Error.INVALID_CALLBACK,"an exception occurred in a caller-provided callback function",n)}},beforeAnyEvent:function(t,n,r,i,o){return e.doCallback(t,t.onbeforeevent,n,r,i,o)},afterAnyEvent:function(t,n,r,i,o){return e.doCallback(t,t.onafterevent||t.onevent,n,r,i,o)},leaveAnyState:function(t,n,r,i,o){return e.doCallback(t,t.onleavestate,n,r,i,o)},enterAnyState:function(t,n,r,i,o){return e.doCallback(t,t.onenterstate||t.onstate,n,r,i,o)},changeState:function(t,n,r,i,o){return e.doCallback(t,t.onchangestate,n,r,i,o)},beforeThisEvent:function(t,n,r,i,o){return e.doCallback(t,t["onbefore"+n],n,r,i,o)},afterThisEvent:function(t,n,r,i,o){return e.doCallback(t,t["onafter"+n]||t["on"+n],n,r,i,o)},leaveThisState:function(t,n,r,i,o){return e.doCallback(t,t["onleave"+r],n,r,i,o)},enterThisState:function(t,n,r,i,o){return e.doCallback(t,t["onenter"+i]||t["on"+i],n,r,i,o)},beforeEvent:function(t,n,r,i,o){if(!1===e.beforeThisEvent(t,n,r,i,o)||!1===e.beforeAnyEvent(t,n,r,i,o))return!1},afterEvent:function(t,n,r,i,o){e.afterThisEvent(t,n,r,i,o),e.afterAnyEvent(t,n,r,i,o)},leaveState:function(t,n,r,i,o){var a=e.leaveThisState(t,n,r,i,o),u=e.leaveAnyState(t,n,r,i,o);return!1!==a&&!1!==u&&(e.ASYNC===a||e.ASYNC===u?e.ASYNC:void 0)},enterState:function(t,n,r,i,o){e.enterThisState(t,n,r,i,o),e.enterAnyState(t,n,r,i,o)},buildEvent:function(t,n){return function(){var r=this.current,i=n[r]||(n[e.WILDCARD]!=e.WILDCARD?n[e.WILDCARD]:r)||r,o=Array.prototype.slice.call(arguments);if(this.transition)return this.error(t,r,i,o,e.Error.PENDING_TRANSITION,"event "+t+" inappropriate because previous transition did not complete");if(this.cannot(t))return this.error(t,r,i,o,e.Error.INVALID_TRANSITION,"event "+t+" inappropriate in current state "+this.current);if(!1===e.beforeEvent(this,t,r,i,o))return e.Result.CANCELLED;if(r===i)return e.afterEvent(this,t,r,i,o),e.Result.NOTRANSITION;var a=this;this.transition=function(){return a.transition=null,a.current=i,e.enterState(a,t,r,i,o),e.changeState(a,t,r,i,o),e.afterEvent(a,t,r,i,o),e.Result.SUCCEEDED},this.transition.cancel=function(){a.transition=null,e.afterEvent(a,t,r,i,o)};var u=e.leaveState(this,t,r,i,o);return!1===u?(this.transition=null,e.Result.CANCELLED):e.ASYNC===u?e.Result.PENDING:this.transition?this.transition():void 0}}};void 0!==t&&t.exports&&(n=t.exports=e),n.StateMachine=e}()},61:function(t,n,e){e(4);Crafty.c("Tutorial",{init:function(){this._isListeningForInput=!1},tutorial:function(t){return this.setTutorialData(t),this.setTutorialStepNum(0),this},getTutorialData:function(){return this._tutorialData},setTutorialData:function(t){this._tutorialData=t},getTutorialSteps:function(){return this._tutorialData.steps},getTutorialStepNum:function(){return this._tutorialStep},setTutorialStepNum:function(t){this._tutorialStep=t},getCurrTutorialStep:function(){return this._tutorialData.steps[this._tutorialStep]},incrementTutorialStep:function(){this._tutorialStep+=1},listenForInput:function(){this._isListeningForInput=!0},isListeningForInput:function(){return this._isListeningForInput},stopListeningForInput:function(){return this._isListeningForInput=!1},getCallback:function(){return this._callback},setCallback:function(t){this._callback=t}})}});