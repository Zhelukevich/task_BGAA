"use strict";(self.webpackChunktask_bgaa=self.webpackChunktask_bgaa||[]).push([[179],{65:(e,t,r)=>{var n=r(294),a=r(745),o=r(998),i=r(32),u=r(861);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(){s=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function d(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(e){d=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var o=t&&t.prototype instanceof x?t:x,i=Object.create(o.prototype),u=new k(n||[]);return a(i,"_invoke",{value:O(e,r,u)}),i}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=f;var p="suspendedStart",y="suspendedYield",v="executing",m="completed",b={};function x(){}function g(){}function j(){}var w={};d(w,i,(function(){return this}));var I=Object.getPrototypeOf,S=I&&I(I(C([])));S&&S!==r&&n.call(S,i)&&(w=S);var q=j.prototype=x.prototype=Object.create(w);function T(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function r(a,o,i,u){var s=h(e[a],e,o);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==c(d)&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,i,u)}),(function(e){r("throw",e,i,u)})):t.resolve(d).then((function(e){l.value=e,i(l)}),(function(e){return r("throw",e,i,u)}))}u(s.arg)}var o;a(this,"_invoke",{value:function(e,n){function a(){return new t((function(t,a){r(e,n,t,a)}))}return o=o?o.then(a,a):a()}})}function O(t,r,n){var a=p;return function(o,i){if(a===v)throw new Error("Generator is already running");if(a===m){if("throw"===o)throw i;return{value:e,done:!0}}for(n.method=o,n.arg=i;;){var u=n.delegate;if(u){var c=L(u,n);if(c){if(c===b)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===p)throw a=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=v;var s=h(t,r,n);if("normal"===s.type){if(a=n.done?m:y,s.arg===b)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(a=m,n.method="throw",n.arg=s.arg)}}}function L(t,r){var n=r.method,a=t.iterator[n];if(a===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var o=h(a,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,b;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,b):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function C(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}throw new TypeError(c(t)+" is not iterable")}return g.prototype=j,a(q,"constructor",{value:j,configurable:!0}),a(j,"constructor",{value:g,configurable:!0}),g.displayName=d(j,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,j):(e.__proto__=j,d(e,l,"GeneratorFunction")),e.prototype=Object.create(q),e},t.awrap=function(e){return{__await:e}},T(_.prototype),d(_.prototype,u,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new _(f(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},T(q),d(q,l,"Generator"),d(q,i,(function(){return this})),d(q,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=C,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return u.type="throw",u.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),b},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),b}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;N(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),b}},t}function l(e,t,r,n,a,o,i){try{var u=e[o](i),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,a)}var d=(0,i.hg)("GET_Subject/fetchSubject",function(){var e,t=(e=s().mark((function e(t,r){var n,a,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.rejectWithValue,e.prev=1,e.next=4,u.Z.get("https://bgaa.by/test");case 4:if(200===(a=e.sent).status){e.next=7;break}throw new Error("ServerError!");case 7:return o=a.data,e.abrupt("return",o);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",n(e.t0));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})),function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){l(o,n,a,i,u,"next",e)}function u(e){l(o,n,a,i,u,"throw",e)}i(void 0)}))});return function(e,r){return t.apply(this,arguments)}}()),f=(0,i.oM)({name:"Subject",initialState:{subject:{data:[],teachers:[]},loading:!1,error:""},reducers:{updateAdditionalInfo:function(e,t){var r=e.subject.data.find((function(e){return e.uniqueId===t.payload.uniqueId}));r&&(r.additionalInfo=t.payload.additionalInfo)},updateLectureTeacher:function(e,t){var r=t.payload,n=r.uniqueId,a=r.lectureTeacher,o=r.index,i=e.subject.data.find((function(e){return e.uniqueId===n}));i&&i.podgroups&&i.podgroups[o]&&(i.podgroups[o].lectureTeacher=a)},updateLaboratoryTeacher:function(e,t){var r=t.payload,n=r.uniqueId,a=r.laboratoryTeacher,o=r.index,i=e.subject.data.find((function(e){return e.uniqueId===n}));i&&i.podgroups&&i.podgroups[o]&&(i.podgroups[o].laboratoryTeacher=a)},updatePracticeTeacher:function(e,t){var r=t.payload,n=r.uniqueId,a=r.practiceTeacher,o=r.index,i=e.subject.data.find((function(e){return e.uniqueId===n}));i&&i.podgroups&&i.podgroups[o]&&(i.podgroups[o].practiceTeacher=a)},updateSeminarTeacher:function(e,t){var r=t.payload,n=r.uniqueId,a=r.seminarTeacher,o=r.index,i=e.subject.data.find((function(e){return e.uniqueId===n}));i&&i.podgroups&&i.podgroups[o]&&(i.podgroups[o].seminarTeacher=a)},updateExamTeacher:function(e,t){var r=t.payload,n=r.uniqueId,a=r.examTeacher,o=r.index,i=e.subject.data.find((function(e){return e.uniqueId===n}));i&&i.podgroups&&i.podgroups[o]&&(i.podgroups[o].examTeacher=a)},updateOffsetTeacher:function(e,t){var r=t.payload,n=r.uniqueId,a=r.offsetTeacher,o=r.index,i=e.subject.data.find((function(e){return e.uniqueId===n}));i&&i.podgroups&&i.podgroups[o]&&(i.podgroups[o].offsetTeacher=a)},updateNumberOfPeople:function(e,t){var r=t.payload,n=r.uniqueId,a=r.countStudents,o=r.index,i=e.subject.data.find((function(e){return e.uniqueId===n}));i&&i.podgroups&&i.podgroups[o]&&(i.podgroups[o].countStudents=a)}},extraReducers:function(e){e.addCase(d.pending,(function(e){e.loading=!0,e.error=""})),e.addCase(d.fulfilled,(function(e,t){e.loading=!1,e.subject=t.payload})),e.addCase(d.rejected,(function(e,t){e.loading=!1,e.error=t.error.message}))}}),h=f.actions,p=h.updateAdditionalInfo,y=h.updateLaboratoryTeacher,v=h.updateLectureTeacher,m=h.updatePracticeTeacher,b=h.updateSeminarTeacher,x=h.updateExamTeacher,g=h.updateOffsetTeacher,j=h.updateNumberOfPeople;const w=f.reducer;function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function S(){S=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),u=new k(n||[]);return a(i,"_invoke",{value:O(e,r,u)}),i}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=l;var f="suspendedStart",h="suspendedYield",p="executing",y="completed",v={};function m(){}function b(){}function x(){}var g={};s(g,i,(function(){return this}));var j=Object.getPrototypeOf,w=j&&j(j(C([])));w&&w!==r&&n.call(w,i)&&(g=w);var q=x.prototype=m.prototype=Object.create(g);function T(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function r(a,o,i,u){var c=d(e[a],e,o);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==I(l)&&n.call(l,"__await")?t.resolve(l.__await).then((function(e){r("next",e,i,u)}),(function(e){r("throw",e,i,u)})):t.resolve(l).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,u)}))}u(c.arg)}var o;a(this,"_invoke",{value:function(e,n){function a(){return new t((function(t,a){r(e,n,t,a)}))}return o=o?o.then(a,a):a()}})}function O(t,r,n){var a=f;return function(o,i){if(a===p)throw new Error("Generator is already running");if(a===y){if("throw"===o)throw i;return{value:e,done:!0}}for(n.method=o,n.arg=i;;){var u=n.delegate;if(u){var c=L(u,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===f)throw a=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=p;var s=d(t,r,n);if("normal"===s.type){if(a=n.done?y:h,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(a=y,n.method="throw",n.arg=s.arg)}}}function L(t,r){var n=r.method,a=t.iterator[n];if(a===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var o=d(a,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function C(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}throw new TypeError(I(t)+" is not iterable")}return b.prototype=x,a(q,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:b,configurable:!0}),b.displayName=s(x,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,s(e,c,"GeneratorFunction")),e.prototype=Object.create(q),e},t.awrap=function(e){return{__await:e}},T(_.prototype),s(_.prototype,u,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new _(l(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},T(q),s(q,c,"Generator"),s(q,i,(function(){return this})),s(q,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=C,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return u.type="throw",u.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;N(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}function q(e,t,r,n,a,o,i){try{var u=e[o](i),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,a)}function T(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){q(o,n,a,i,u,"next",e)}function u(e){q(o,n,a,i,u,"throw",e)}i(void 0)}))}}var _=function(){var e=T(S().mark((function e(t){var r;return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.put("https://bgaa.by/test_result",t,{headers:{"Content-Type":"application/json"}});case 3:if(200===(r=e.sent).status){e.next=6;break}throw new Error("Ошибка отправки данных на сервер");case 6:return e.abrupt("return",r.data);case 9:throw e.prev=9,e.t0=e.catch(0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),O=(0,i.hg)("SentSubject/fetchSentSubject",function(){var e=T(S().mark((function e(t){var r;return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());const L=(0,i.oM)({name:"SentSubject",initialState:{subject:{data:[],teachers:[]},loading:!1,error:""},reducers:{},extraReducers:function(e){e.addCase(O.pending,(function(e){e.loading=!0,e.error=""})),e.addCase(O.fulfilled,(function(e,t){e.loading=!1,e.subject=t.payload})),e.addCase(O.rejected,(function(e,t){e.loading=!1,e.error=t.error.message}))}}).reducer;var E=(0,i.xC)({reducer:{apiSubject:w,sendDataSubject:L}}),N=function(){return(0,o.I0)()},k=o.v9;const C={container:"container__container--Ma9Dg"};var P=r(893);function H(e){var t=e.children;return(0,P.jsx)("div",{className:C.container,children:t})}function D(e){var t=e.width,r=e.height,n=e.className;return(0,P.jsx)("svg",{width:t,height:r,className:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,P.jsx)("path",{d:"M6 12H18M12 6V18",stroke:"#001844",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}function A(e){var t=e.width,r=e.height,n=e.className;return(0,P.jsxs)("svg",{width:t,height:r,className:n,xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16",children:[" ",(0,P.jsx)("path",{d:"M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z",fill:"white"})," "]})}function V(e){var t=e.width,r=e.height,n=e.className;return(0,P.jsxs)("svg",{width:t,height:r,className:n,fill:"#001844",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[" ",(0,P.jsx)("path",{d:"M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z"})," "]})}function F(e){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(e)}function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach((function(t){z(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function z(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==F(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==F(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===F(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function B(e){switch(e.name){case"Plus":return(0,P.jsx)(D,M({},e));case"SortDown":return(0,P.jsx)(A,M({},e));case"Delete":return(0,P.jsx)(V,M({},e));default:return(0,P.jsx)(P.Fragment,{})}}var W=r(184),R=r.n(W);const U={btn:"myButton__btn--dTxC7",blue:"myButton__blue--k0xii",green:"myButton__green--Vz9L6"};var Y=function(e){return e.f1="blue",e.f2="green",e}({}),Z=n.memo((function(e){var t=e.label,r=e.color,n=void 0===r?Y.f1:r,a=e.onClick,o=e.className,i=e.disabled,u=void 0!==i&&i,c=e.ariaLabel,s=R()(U.btn,U[n]);return(0,P.jsx)("button",{className:"".concat(s," ").concat(o),onClick:a,disabled:u,"aria-label":c,children:t})}));const J="mainTable__table--o9cdp",$="mainTable__thead--UAGeF",Q="mainTable__note--rZwET",K="mainTable__note_title--zoLVe",X="mainTable__sortDownDtm--xUgCo",ee="mainTable__thBtn--rEr0w",te="mainTable__btn--SPWYr",re="mainTable__wrapperSelect--hYTJ2",ne="mainTable__select--nExQa",ae="additionalInfo__textarea--CgJmU";function oe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,u=[],c=!0,s=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw a}}return u}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ie(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ie(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ie(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ue(e){var t=e.data,r=oe((0,n.useState)(null==t?void 0:t.additionalInfo),2),a=r[0],o=r[1],i=N(),u=(0,n.useRef)(void 0),c=(0,n.useCallback)((function(e){var r=e.target.value;o(r),u.current&&clearTimeout(u.current),u.current=setTimeout((function(){var e={uniqueId:t.uniqueId,additionalInfo:r};i(p(e))}),300)}),[t.uniqueId,i]);return(0,P.jsx)("textarea",{className:ae,value:a,onChange:c})}var ce=r(137);function se(e){return se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},se(e)}function le(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function de(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?le(Object(r),!0).forEach((function(t){fe(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):le(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function fe(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==se(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==se(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===se(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function he(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,u=[],c=!0,s=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw a}}return u}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return pe(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return pe(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function pe(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var ye=n.memo((function(e){var t=e.className,r=e.onChange,a=e.name,o=e.value,i=e.defaultValue,u=e.isDisabled,c=void 0!==u&&u,s=k((function(e){return e.apiSubject.subject})),l=he((0,n.useState)(null),2),d=l[0],f=l[1];(0,n.useEffect)((function(){f(o)}),[o]);var h=(0,n.useMemo)((function(){return s.teachers?s.teachers.map((function(e){return{value:e.id,label:e.name}})):[]}),[s.teachers]);return(0,P.jsx)(ce.ZP,{placeholder:"Вакансия",value:d,onChange:r,className:t,defaultValue:i,isDisabled:c,isSearchable:!1,options:h,name:a,styles:{container:function(e,t){return de(de({},e),{},{fontSize:"12px",color:"#001844",valueContainer:"#001844"})}},theme:function(e){return de(de({},e),{},{borderRadius:3,colors:de(de({},e.colors),{},{primary25:"rgb(226, 240, 255)",primary:"rgb(9, 47, 88)"})})}})}));const ve="inputCount__input--Hc5qL";var me=n.memo((function(e){var t=e.value,r=e.onChange,n=e.ariaLabel;return(0,P.jsx)("input",{"aria-label":n,className:ve,type:"number",min:"0",value:t,onChange:r})}));function be(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,u=[],c=!0,s=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw a}}return u}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return xe(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return xe(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function xe(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var ge=n.memo((function(e){var t,r,a=e.data,o=N(),i=be((0,n.useState)({value:"",label:"Вакансия"}),1)[0],u=be((0,n.useState)(i),2),c=u[0],s=u[1],l=be((0,n.useState)(i),2),d=l[0],f=l[1],h=be((0,n.useState)(i),2),p=h[0],w=h[1],I=be((0,n.useState)(i),2),S=I[0],q=I[1],T=be((0,n.useState)(i),2),_=T[0],O=T[1],L=be((0,n.useState)(i),2),E=L[0],k=L[1],C=be((0,n.useState)(i),2),H=C[0],D=C[1],A=be((0,n.useState)(i),2),V=A[0],F=A[1],G=be((0,n.useState)(i),2),M=G[0],z=G[1],W=be((0,n.useState)(i),2),R=W[0],U=W[1],Y=be((0,n.useState)(i),2),ae=Y[0],oe=Y[1],ie=be((0,n.useState)(i),2),ce=ie[0],se=ie[1],le=be((0,n.useState)(!1),2),de=le[0],fe=le[1],he=be((0,n.useState)(+(null===(t=a.podgroups[0])||void 0===t?void 0:t.countStudents)),2),pe=he[0],ve=he[1],xe=be((0,n.useState)(+(null===(r=a.podgroups[1])||void 0===r?void 0:r.countStudents)),2),ge=xe[0],je=xe[1];(0,n.useEffect)((function(){"0"!==a.lecturesHours?(o(v({uniqueId:a.uniqueId,lectureTeacher:c.value,index:0})),o(v({uniqueId:a.uniqueId,lectureTeacher:H.value,index:1}))):(o(v({uniqueId:a.uniqueId,lectureTeacher:"",index:0})),o(v({uniqueId:a.uniqueId,lectureTeacher:"",index:1}))),"0"!==a.laboratoryHours?(o(y({uniqueId:a.uniqueId,laboratoryTeacher:d.value,index:0})),o(y({uniqueId:a.uniqueId,laboratoryTeacher:V.value,index:1}))):(o(y({uniqueId:a.uniqueId,laboratoryTeacher:"",index:0})),o(y({uniqueId:a.uniqueId,laboratoryTeacher:"",index:1}))),"0"!==a.practicHours?(o(m({uniqueId:a.uniqueId,practiceTeacher:p.value,index:0})),o(m({uniqueId:a.uniqueId,practiceTeacher:M.value,index:1}))):(o(m({uniqueId:a.uniqueId,practiceTeacher:"",index:0})),o(m({uniqueId:a.uniqueId,practiceTeacher:"",index:1}))),"0"!==a.seminarHours?(o(b({uniqueId:a.uniqueId,seminarTeacher:S.value,index:0})),o(b({uniqueId:a.uniqueId,seminarTeacher:R.value,index:1}))):(o(b({uniqueId:a.uniqueId,seminarTeacher:"",index:0})),o(b({uniqueId:a.uniqueId,seminarTeacher:"",index:1}))),!0===a.exam?(o(x({uniqueId:a.uniqueId,examTeacher:E.value,index:0})),o(x({uniqueId:a.uniqueId,examTeacher:ce.value,index:1}))):(o(x({uniqueId:a.uniqueId,examTeacher:"",index:0})),o(x({uniqueId:a.uniqueId,examTeacher:"",index:1}))),!0===a.offset?(o(g({uniqueId:a.uniqueId,offsetTeacher:_.value,index:0})),o(g({uniqueId:a.uniqueId,offsetTeacher:ae.value,index:1}))):(o(g({uniqueId:a.uniqueId,offsetTeacher:"",index:0})),o(g({uniqueId:a.uniqueId,offsetTeacher:"",index:1})))}),[o,c,d,p,S,_,E,a.uniqueId,a.lecturesHours,a.laboratoryHours,a.practicHours,a.seminarHours,a.offset,a.exam,H,V,M,R,ce,ae]);var we=(0,n.useCallback)((function(){s(c),f(c),w(c),q(c),O(c),k(c)}),[c]),Ie=(0,n.useCallback)((function(){D(H),F(H),z(H),U(H),oe(H),se(H)}),[H]),Se=(0,n.useCallback)((function(e,t){switch(t){case"lectures":s(e),o(v({uniqueId:a.uniqueId,lectureTeacher:e.value,index:0}));break;case"laboratory":f(e),o(y({uniqueId:a.uniqueId,laboratoryTeacher:e.value,index:0}));break;case"practic":w(e),o(m({uniqueId:a.uniqueId,practiceTeacher:e.value,index:0}));break;case"seminar":q(e),o(b({uniqueId:a.uniqueId,seminarTeacher:e.value,index:0}));break;case"offset":O(e),o(g({uniqueId:a.uniqueId,offsetTeacher:e.value,index:0}));break;case"exam":k(e),o(x({uniqueId:a.uniqueId,examTeacher:e.value,index:0}))}}),[a.uniqueId,o]),qe=(0,n.useCallback)((function(e,t){switch(t){case"lectures":D(e),o(v({uniqueId:a.uniqueId,lectureTeacher:e.value,index:1}));break;case"laboratory":F(e),o(y({uniqueId:a.uniqueId,laboratoryTeacher:e.value,index:1}));break;case"practic":z(e),o(m({uniqueId:a.uniqueId,practiceTeacher:e.value,index:1}));break;case"seminar":U(e),o(b({uniqueId:a.uniqueId,seminarTeacher:e.value,index:1}));break;case"offset":oe(e),o(g({uniqueId:a.uniqueId,offsetTeacher:e.value,index:1}));break;case"exam":se(e),o(x({uniqueId:a.uniqueId,examTeacher:e.value,index:1}))}}),[a.uniqueId,o]),Te=(0,n.useCallback)((function(e){var t=parseInt(e.target.value,10);!isNaN(t)&&t<=+a.studentsNumber&&(ve(t),je(+a.studentsNumber-t))}),[a.studentsNumber]),_e=(0,n.useCallback)((function(e){var t=parseInt(e.target.value,10);!isNaN(t)&&t<=+a.studentsNumber&&(je(t),ve(+a.studentsNumber-t))}),[a.studentsNumber]);return(0,n.useEffect)((function(){o(j({uniqueId:a.uniqueId,countStudents:pe.toString(),index:0})),o(j({uniqueId:a.uniqueId,countStudents:ge.toString(),index:1}))}),[a.uniqueId,o,pe,ge]),(0,P.jsxs)("table",{className:J,children:[(0,P.jsxs)("colgroup",{children:[(0,P.jsx)("col",{width:"25%"}),(0,P.jsx)("col",{width:"5%"})]}),(0,P.jsx)("colgroup",{span:a.podgroups.length<=1?1:de?2:1,style:{width:"25%"}}),(0,P.jsx)("thead",{className:$,children:(0,P.jsxs)("tr",{children:[(0,P.jsx)("th",{children:"Занятие"}),(0,P.jsx)("th",{children:"Часы"}),a.podgroups.length<=1?(0,P.jsx)("th",{children:"Преподаватель"}):de?(0,P.jsx)("th",{children:"Подгруппа 1"}):(0,P.jsx)("th",{className:ee,children:(0,P.jsxs)("div",{children:["Преподаватель",(0,P.jsx)("button",{"aria-label":"Открыть подгруппу",onClick:function(){fe(!0)},className:te,children:(0,P.jsx)(B,{width:15,height:15,name:"Plus"})})]})}),de&&(0,P.jsx)("th",{className:ee,children:(0,P.jsxs)("div",{children:["Подгруппа 2",(0,P.jsx)("button",{"aria-label":"Закрыть подгруппу",onClick:function(){fe(!1)},className:te,children:(0,P.jsx)(B,{width:15,height:15,name:"Delete"})})]})})]})}),(0,P.jsxs)("tbody",{children:[(0,P.jsxs)("tr",{children:[(0,P.jsx)("td",{children:"Лекции"}),(0,P.jsx)("td",{children:a.lecturesHours}),(0,P.jsx)("td",{children:(0,P.jsxs)("div",{className:re,children:[(0,P.jsx)(ye,{className:ne,isDisabled:"0"===a.lecturesHours,defaultValue:i,onChange:function(e){return Se(e,"lectures")},value:"0"===a.lecturesHours?i:c}),(0,P.jsx)(Z,{className:X,label:(0,P.jsx)(B,{width:20,height:20,name:"SortDown"}),onClick:function(){return we()},ariaLabel:"Назначить преподавателя для всех полей"})]})}),de&&(0,P.jsx)("td",{children:(0,P.jsxs)("div",{className:re,children:[(0,P.jsx)(ye,{className:ne,isDisabled:"0"===a.lecturesHours,defaultValue:i,onChange:function(e){return qe(e,"lectures")},value:"0"===a.lecturesHours?i:H}),(0,P.jsx)(Z,{className:X,label:(0,P.jsx)(B,{width:20,height:20,name:"SortDown"}),onClick:function(){return Ie()},ariaLabel:"Назначить преподавателя для всех полей"})]})})]}),(0,P.jsxs)("tr",{children:[(0,P.jsx)("td",{children:" Лабораторные работы"}),(0,P.jsx)("td",{children:a.laboratoryHours}),(0,P.jsx)("td",{children:(0,P.jsx)(ye,{isDisabled:"0"===a.laboratoryHours,defaultValue:i,onChange:function(e){return Se(e,"laboratory")},value:"0"===a.laboratoryHours?i:d})}),de&&(0,P.jsx)("td",{children:(0,P.jsx)(ye,{isDisabled:"0"===a.laboratoryHours,defaultValue:i,onChange:function(e){return qe(e,"laboratory")},value:"0"===a.laboratoryHours?i:V})})]}),(0,P.jsxs)("tr",{children:[(0,P.jsx)("td",{children:"Практические"}),(0,P.jsx)("td",{children:a.practicHours}),(0,P.jsx)("td",{children:(0,P.jsx)(ye,{isDisabled:"0"===a.practicHours,defaultValue:i,onChange:function(e){return Se(e,"practic")},value:"0"===a.practicHours?i:p})}),de&&(0,P.jsx)("td",{children:(0,P.jsx)(ye,{isDisabled:"0"===a.practicHours,defaultValue:i,onChange:function(e){return qe(e,"practic")},value:"0"===a.practicHours?i:M})})]}),(0,P.jsxs)("tr",{children:[(0,P.jsx)("td",{children:"Семинарские"}),(0,P.jsx)("td",{children:a.seminarHours}),(0,P.jsx)("td",{children:(0,P.jsx)(ye,{isDisabled:"0"===a.seminarHours,defaultValue:i,onChange:function(e){return Se(e,"seminar")},value:"0"===a.seminarHours?i:S})}),de&&(0,P.jsx)("td",{children:(0,P.jsx)(ye,{isDisabled:"0"===a.seminarHours,defaultValue:i,onChange:function(e){return qe(e,"seminar")},value:"0"===a.seminarHours?i:R})})]}),!0===a.offset?(0,P.jsxs)("tr",{children:[(0,P.jsx)("td",{children:"Зачёт"}),(0,P.jsx)("td",{}),(0,P.jsx)("td",{children:(0,P.jsx)(ye,{isDisabled:!1,defaultValue:i,onChange:function(e){return Se(e,"offset")},value:_})}),de&&(0,P.jsx)("td",{children:(0,P.jsx)(ye,{isDisabled:!1,defaultValue:i,onChange:function(e){return qe(e,"offset")},value:ae})})]}):(0,P.jsx)(P.Fragment,{}),!0===a.exam?(0,P.jsxs)("tr",{children:[(0,P.jsx)("td",{children:"Экзамен"}),(0,P.jsx)("td",{}),(0,P.jsx)("td",{children:(0,P.jsx)(ye,{isDisabled:!1,defaultValue:i,onChange:function(e){return Se(e,"exam")},value:E})}),de&&(0,P.jsx)("td",{children:(0,P.jsx)(ye,{isDisabled:!1,defaultValue:i,onChange:function(e){return qe(e,"exam")},value:ce})})]}):(0,P.jsx)(P.Fragment,{}),de&&(0,P.jsxs)("tr",{children:[(0,P.jsx)("td",{children:"Количество человек"}),(0,P.jsx)("td",{}),(0,P.jsx)("td",{children:(0,P.jsx)(me,{ariaLabel:"Выберете количество человек в подгруппе 1",value:pe,onChange:Te})}),(0,P.jsx)("td",{children:(0,P.jsx)(me,{ariaLabel:"Выберете количество человек в подгруппе 2",value:ge,onChange:_e})})]}),(0,P.jsxs)("tr",{className:Q,children:[(0,P.jsxs)("td",{className:K,children:["Примечание",(0,P.jsx)("br",{}),(0,P.jsx)("span",{children:"(Для составление расписания)"})]}),(0,P.jsx)("td",{}),(0,P.jsx)("td",{colSpan:10,children:(0,P.jsx)(ue,{data:a})})]})]})]})}));const je={table:"generalTable__table--sOWoi",line:"generalTable__line--VWQmW"};function we(e){var t=e.data;return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)("table",{className:je.table,children:[(0,P.jsxs)("colgroup",{children:[(0,P.jsx)("col",{width:"30%"}),(0,P.jsx)("col",{width:"15%"}),(0,P.jsx)("col",{width:"30%"}),(0,P.jsx)("col",{width:"15%"})]}),(0,P.jsxs)("tbody",{children:[(0,P.jsxs)("tr",{children:[(0,P.jsx)("th",{children:"Группа"}),(0,P.jsxs)("td",{children:[" ",t.groupName]}),(0,P.jsx)("th",{children:"Курс"}),(0,P.jsx)("td",{children:t.course})]}),(0,P.jsxs)("tr",{children:[(0,P.jsx)("th",{children:"Количество курсов"}),(0,P.jsx)("td",{children:t.studentsNumber}),(0,P.jsx)("th",{children:"Семестр"}),(0,P.jsx)("td",{children:t.semestr})]})]})]}),(0,P.jsx)("div",{className:je.line})]})}const Ie={item:"subjectItem__item--jqKMJ",hgroup:"subjectItem__hgroup--Wt4wg",title:"subjectItem__title--Azq8E"};function Se(e){var t=e.data;return(0,P.jsxs)("li",{className:Ie.item,children:[(0,P.jsx)("div",{className:Ie.hgroup,children:(0,P.jsx)("h2",{className:Ie.title,children:t.subjectName})}),(0,P.jsx)(we,{data:t}),(0,P.jsx)(ge,{data:t})]})}const qe={wrapper:"Loader__wrapper--jeHgs",loader:"Loader__loader--arRhT",prixClipFix:"Loader__prixClipFix--s20FT"};function Te(){return(0,P.jsx)("div",{className:qe.wrapper,children:(0,P.jsx)("span",{className:qe.loader})})}const _e={subjectList:"subjectList__subjectList--IJRxD",list:"subjectList__list--ViOjJ"};function Oe(){var e=k((function(e){return e.apiSubject})),t=e.subject,r=e.error,n=e.loading,a=k((function(e){return e.sendDataSubject.error})),o=k((function(e){return e.sendDataSubject.loading})),i=N();return(0,P.jsx)("section",{className:_e.subjectList,children:n?(0,P.jsx)(Te,{}):r?(0,P.jsxs)("div",{style:{color:"red"},children:["Ошибка: ",r]}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("ul",{className:_e.list,children:t.data.map((function(e){return(0,P.jsx)(Se,{data:e},e.uniqueId)}))}),o?(0,P.jsx)(Te,{}):a?(0,P.jsxs)("div",{style:{color:"red"},children:["Ошибка: ",a]}):(0,P.jsx)(Z,{color:Y.f2,label:"Сохранить",onClick:function(){i(O(t))},ariaLabel:"Сохранить таблицу"})]})})}function Le(){return(0,P.jsx)(H,{children:(0,P.jsx)(Oe,{})})}const Ee=function(){var e=N();return(0,n.useEffect)((function(){e(d())}),[e]),(0,P.jsx)(Le,{})};var Ne=document.getElementById("root");(0,a.s)(Ne).render((0,P.jsx)(o.zt,{store:E,children:(0,P.jsx)(Ee,{})}))}},e=>{e.O(0,[741,716],(()=>{return t=65,e(e.s=t);var t}));e.O()}]);