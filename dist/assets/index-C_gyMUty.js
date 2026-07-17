var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function n(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var r={},i=[],a=()=>{},o=()=>!1,s=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),c=e=>e.startsWith(`onUpdate:`),l=Object.assign,u=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},d=Object.prototype.hasOwnProperty,f=(e,t)=>d.call(e,t),p=Array.isArray,m=e=>C(e)===`[object Map]`,h=e=>C(e)===`[object Set]`,g=e=>C(e)===`[object Date]`,_=e=>typeof e==`function`,v=e=>typeof e==`string`,y=e=>typeof e==`symbol`,b=e=>typeof e==`object`&&!!e,x=e=>(b(e)||_(e))&&_(e.then)&&_(e.catch),S=Object.prototype.toString,C=e=>S.call(e),ee=e=>C(e).slice(8,-1),te=e=>C(e)===`[object Object]`,ne=e=>v(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,re=n(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),ie=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},ae=/-\w/g,w=ie(e=>e.replace(ae,e=>e.slice(1).toUpperCase())),oe=/\B([A-Z])/g,se=ie(e=>e.replace(oe,`-$1`).toLowerCase()),ce=ie(e=>e.charAt(0).toUpperCase()+e.slice(1)),le=ie(e=>e?`on${ce(e)}`:``),T=(e,t)=>!Object.is(e,t),ue=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},de=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},fe=e=>{let t=parseFloat(e);return isNaN(t)?e:t},pe=e=>{let t=v(e)?Number(e):NaN;return isNaN(t)?e:t},me,he=()=>me||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function ge(e){if(p(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=v(r)?be(r):ge(r);if(i)for(let e in i)t[e]=i[e]}return t}else if(v(e)||b(e))return e}var _e=/;(?![^(]*\))/g,ve=/:([^]+)/,ye=/\/\*[^]*?\*\//g;function be(e){let t={};return e.replace(ye,``).split(_e).forEach(e=>{if(e){let n=e.split(ve);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function xe(e){let t=``;if(v(e))t=e;else if(p(e))for(let n=0;n<e.length;n++){let r=xe(e[n]);r&&(t+=r+` `)}else if(b(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var Se=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,Ce=n(Se);Se+``;function we(e){return!!e||e===``}function Te(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Ee(e[r],t[r]);return n}function Ee(e,t){if(e===t)return!0;let n=g(e),r=g(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=y(e),r=y(t),n||r)return e===t;if(n=p(e),r=p(t),n||r)return n&&r?Te(e,t):!1;if(n=b(e),r=b(t),n||r){if(!n||!r||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e){let r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!Ee(e[n],t[n]))return!1}}return String(e)===String(t)}function De(e,t){return e.findIndex(e=>Ee(e,t))}var Oe=e=>!!(e&&e.__v_isRef===!0),E=e=>v(e)?e:e==null?``:p(e)||b(e)&&(e.toString===S||!_(e.toString))?Oe(e)?E(e.value):JSON.stringify(e,ke,2):String(e),ke=(e,t)=>Oe(t)?ke(e,t.value):m(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[Ae(t,r)+` =>`]=n,e),{})}:h(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Ae(e))}:y(t)?Ae(t):b(t)&&!p(t)&&!te(t)?String(t):t,Ae=(e,t=``)=>y(e)?`Symbol(${e.description??t})`:e,je,Me=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&je&&(je.active?(this.parent=je,this.index=(je.scopes||=[]).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}let n=this.effects.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}}run(e){if(this._active){let t=je;try{return je=this,e()}finally{je=t}}}on(){++this._on===1&&(this.prevScope=je,je=this)}off(){if(this._on>0&&--this._on===0){if(je===this)je=this.prevScope;else{let e=je;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){let e=this.scopes.slice();for(t=0,n=e.length;t<n;t++)e[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function Ne(){return je}var D,Pe=new WeakSet,Fe=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,je&&(je.active?je.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Pe.has(this)&&(Pe.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ze(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Qe(this),He(this);let e=D,t=Je;D=this,Je=!0;try{return this.fn()}finally{Ue(this),D=e,Je=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ke(e);this.deps=this.depsTail=void 0,Qe(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Pe.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){We(this)&&this.run()}get dirty(){return We(this)}},Ie=0,Le,Re;function ze(e,t=!1){if(e.flags|=8,t){e.next=Re,Re=e;return}e.next=Le,Le=e}function Be(){Ie++}function Ve(){if(--Ie>0)return;if(Re){let e=Re;for(Re=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;Le;){let t=Le;for(Le=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function He(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ue(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),Ke(r),qe(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function We(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ge(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ge(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===$e)||(e.globalVersion=$e,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!We(e))))return;e.flags|=2;let t=e.dep,n=D,r=Je;D=e,Je=!0;try{He(e);let n=e.fn(e._value);(t.version===0||T(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{D=n,Je=r,Ue(e),e.flags&=-3}}function Ke(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)Ke(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function qe(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var Je=!0,Ye=[];function Xe(){Ye.push(Je),Je=!1}function Ze(){let e=Ye.pop();Je=e===void 0||e}function Qe(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=D;D=void 0;try{t()}finally{D=e}}}var $e=0,et=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},tt=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!D||!Je||D===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==D)t=this.activeLink=new et(D,this),D.deps?(t.prevDep=D.depsTail,D.depsTail.nextDep=t,D.depsTail=t):D.deps=D.depsTail=t,nt(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=D.depsTail,t.nextDep=void 0,D.depsTail.nextDep=t,D.depsTail=t,D.deps===t&&(D.deps=e)}return t}trigger(e){this.version++,$e++,this.notify(e)}notify(e){Be();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Ve()}}};function nt(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)nt(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var rt=new WeakMap,it=Symbol(``),at=Symbol(``),ot=Symbol(``);function O(e,t,n){if(Je&&D){let t=rt.get(e);t||rt.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new tt),r.map=t,r.key=n),r.track()}}function st(e,t,n,r,i,a){let o=rt.get(e);if(!o){$e++;return}let s=e=>{e&&e.trigger()};if(Be(),t===`clear`)o.forEach(s);else{let i=p(e),a=i&&ne(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===ot||!y(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(ot)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(it)),m(e)&&s(o.get(at)));break;case`delete`:i||(s(o.get(it)),m(e)&&s(o.get(at)));break;case`set`:m(e)&&s(o.get(it));break}}Ve()}function ct(e){let t=k(e);return t===e?t:(O(t,`iterate`,ot),qt(e)?t:t.map(Xt))}function lt(e){return O(e=k(e),`iterate`,ot),e}function ut(e,t){return Kt(e)?Zt(Gt(e)?Xt(t):t):Xt(t)}var dt={__proto__:null,[Symbol.iterator](){return ft(this,Symbol.iterator,e=>ut(this,e))},concat(...e){return ct(this).concat(...e.map(e=>p(e)?ct(e):e))},entries(){return ft(this,`entries`,e=>(e[1]=ut(this,e[1]),e))},every(e,t){return mt(this,`every`,e,t,void 0,arguments)},filter(e,t){return mt(this,`filter`,e,t,e=>e.map(e=>ut(this,e)),arguments)},find(e,t){return mt(this,`find`,e,t,e=>ut(this,e),arguments)},findIndex(e,t){return mt(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return mt(this,`findLast`,e,t,e=>ut(this,e),arguments)},findLastIndex(e,t){return mt(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return mt(this,`forEach`,e,t,void 0,arguments)},includes(...e){return gt(this,`includes`,e)},indexOf(...e){return gt(this,`indexOf`,e)},join(e){return ct(this).join(e)},lastIndexOf(...e){return gt(this,`lastIndexOf`,e)},map(e,t){return mt(this,`map`,e,t,void 0,arguments)},pop(){return _t(this,`pop`)},push(...e){return _t(this,`push`,e)},reduce(e,...t){return ht(this,`reduce`,e,t)},reduceRight(e,...t){return ht(this,`reduceRight`,e,t)},shift(){return _t(this,`shift`)},some(e,t){return mt(this,`some`,e,t,void 0,arguments)},splice(...e){return _t(this,`splice`,e)},toReversed(){return ct(this).toReversed()},toSorted(e){return ct(this).toSorted(e)},toSpliced(...e){return ct(this).toSpliced(...e)},unshift(...e){return _t(this,`unshift`,e)},values(){return ft(this,`values`,e=>ut(this,e))}};function ft(e,t,n){let r=lt(e),i=r[t]();return r!==e&&!qt(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var pt=Array.prototype;function mt(e,t,n,r,i,a){let o=lt(e),s=o!==e&&!qt(e),c=o[t];if(c!==pt[t]){let t=c.apply(e,a);return s?Xt(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,ut(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function ht(e,t,n,r){let i=lt(e),a=i!==e&&!qt(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=ut(e,t)),n.call(this,t,ut(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?ut(e,c):c}function gt(e,t,n){let r=k(e);O(r,`iterate`,ot);let i=r[t](...n);return(i===-1||i===!1)&&Jt(n[0])?(n[0]=k(n[0]),r[t](...n)):i}function _t(e,t,n=[]){Xe(),Be();let r=k(e)[t].apply(e,n);return Ve(),Ze(),r}var vt=n(`__proto__,__v_isRef,__isVue`),yt=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(y));function bt(e){y(e)||(e=String(e));let t=k(this);return O(t,`has`,e),t.hasOwnProperty(e)}var xt=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?zt:Rt:i?Lt:It).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=p(e);if(!r){let e;if(a&&(e=dt[t]))return e;if(t===`hasOwnProperty`)return bt}let o=Reflect.get(e,t,Qt(e)?e:n);if((y(t)?yt.has(t):vt(t))||(r||O(e,`get`,t),i))return o;if(Qt(o)){let e=a&&ne(t)?o:o.value;return r&&b(e)?Ut(e):e}return b(o)?r?Ut(o):Vt(o):o}},St=class extends xt{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=p(e)&&ne(t);if(!this._isShallow){let e=Kt(i);if(!qt(n)&&!Kt(n)&&(i=k(i),n=k(n)),!a&&Qt(i)&&!Qt(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:f(e,t),s=Reflect.set(e,t,n,Qt(e)?e:r);return e===k(r)&&s&&(o?T(n,i)&&st(e,`set`,t,n,i):st(e,`add`,t,n)),s}deleteProperty(e,t){let n=f(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&st(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!y(t)||!yt.has(t))&&O(e,`has`,t),n}ownKeys(e){return O(e,`iterate`,p(e)?`length`:it),Reflect.ownKeys(e)}},Ct=class extends xt{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},wt=new St,Tt=new Ct,Et=new St(!0),Dt=e=>e,Ot=e=>Reflect.getPrototypeOf(e);function kt(e,t,n){return function(...r){let i=this.__v_raw,a=k(i),o=m(a),s=e===`entries`||e===Symbol.iterator&&o,c=e===`keys`&&o,u=i[e](...r),d=n?Dt:t?Zt:Xt;return!t&&O(a,`iterate`,c?at:it),l(Object.create(u),{next(){let{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:s?[d(e[0]),d(e[1])]:d(e),done:t}}})}}function At(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function jt(e,t){let n={get(n){let r=this.__v_raw,i=k(r),a=k(n);e||(T(n,a)&&O(i,`get`,n),O(i,`get`,a));let{has:o}=Ot(i),s=t?Dt:e?Zt:Xt;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&O(k(t),`iterate`,it),t.size},has(t){let n=this.__v_raw,r=k(n),i=k(t);return e||(T(t,i)&&O(r,`has`,t),O(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=k(a),s=t?Dt:e?Zt:Xt;return!e&&O(o,`iterate`,it),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return l(n,e?{add:At(`add`),set:At(`set`),delete:At(`delete`),clear:At(`clear`)}:{add(e){let n=k(this),r=Ot(n),i=k(e),a=!t&&!qt(e)&&!Kt(e)?i:e;return r.has.call(n,a)||T(e,a)&&r.has.call(n,e)||T(i,a)&&r.has.call(n,i)||(n.add(a),st(n,`add`,a,a)),this},set(e,n){!t&&!qt(n)&&!Kt(n)&&(n=k(n));let r=k(this),{has:i,get:a}=Ot(r),o=i.call(r,e);o||=(e=k(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?T(n,s)&&st(r,`set`,e,n,s):st(r,`add`,e,n),this},delete(e){let t=k(this),{has:n,get:r}=Ot(t),i=n.call(t,e);i||=(e=k(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&st(t,`delete`,e,void 0,a),o},clear(){let e=k(this),t=e.size!==0,n=e.clear();return t&&st(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=kt(r,e,t)}),n}function Mt(e,t){let n=jt(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(f(n,r)&&r in t?n:t,r,i)}var Nt={get:Mt(!1,!1)},Pt={get:Mt(!1,!0)},Ft={get:Mt(!0,!1)},It=new WeakMap,Lt=new WeakMap,Rt=new WeakMap,zt=new WeakMap;function Bt(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function Vt(e){return Kt(e)?e:Wt(e,!1,wt,Nt,It)}function Ht(e){return Wt(e,!1,Et,Pt,Lt)}function Ut(e){return Wt(e,!0,Tt,Ft,Rt)}function Wt(e,t,n,r,i){if(!b(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;let a=i.get(e);if(a)return a;let o=Bt(ee(e));if(o===0)return e;let s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function Gt(e){return Kt(e)?Gt(e.__v_raw):!!(e&&e.__v_isReactive)}function Kt(e){return!!(e&&e.__v_isReadonly)}function qt(e){return!!(e&&e.__v_isShallow)}function Jt(e){return e?!!e.__v_raw:!1}function k(e){let t=e&&e.__v_raw;return t?k(t):e}function Yt(e){return!f(e,`__v_skip`)&&Object.isExtensible(e)&&de(e,`__v_skip`,!0),e}var Xt=e=>b(e)?Vt(e):e,Zt=e=>b(e)?Ut(e):e;function Qt(e){return e?e.__v_isRef===!0:!1}function A(e){return en(e,!1)}function $t(e){return en(e,!0)}function en(e,t){return Qt(e)?e:new tn(e,t)}var tn=class{constructor(e,t){this.dep=new tt,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:k(e),this._value=t?e:Xt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||qt(e)||Kt(e);e=n?e:k(e),T(e,t)&&(this._rawValue=e,this._value=n?e:Xt(e),this.dep.trigger())}};function j(e){return Qt(e)?e.value:e}var nn={get:(e,t,n)=>t===`__v_raw`?e:j(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return Qt(i)&&!Qt(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function rn(e){return Gt(e)?e:new Proxy(e,nn)}var an=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new tt(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=$e-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&D!==this)return ze(this,!0),!0}get value(){let e=this.dep.track();return Ge(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function on(e,t,n=!1){let r,i;return _(e)?r=e:(r=e.get,i=e.set),new an(r,i,n)}var sn={},cn=new WeakMap,ln=void 0;function un(e,t=!1,n=ln){if(n){let t=cn.get(n);t||cn.set(n,t=[]),t.push(e)}}function dn(e,t,n=r){let{immediate:i,deep:o,once:s,scheduler:c,augmentJob:l,call:d}=n,f=e=>o?e:qt(e)||o===!1||o===0?fn(e,1):fn(e),m,h,g,v,y=!1,b=!1;if(Qt(e)?(h=()=>e.value,y=qt(e)):Gt(e)?(h=()=>f(e),y=!0):p(e)?(b=!0,y=e.some(e=>Gt(e)||qt(e)),h=()=>e.map(e=>{if(Qt(e))return e.value;if(Gt(e))return f(e);if(_(e))return d?d(e,2):e()})):h=_(e)?t?d?()=>d(e,2):e:()=>{if(g){Xe();try{g()}finally{Ze()}}let t=ln;ln=m;try{return d?d(e,3,[v]):e(v)}finally{ln=t}}:a,t&&o){let e=h,t=o===!0?1/0:o;h=()=>fn(e(),t)}let x=Ne(),S=()=>{m.stop(),x&&x.active&&u(x.effects,m)};if(s&&t){let e=t;t=(...t)=>{let n=e(...t);return S(),n}}let C=b?Array(e.length).fill(sn):sn,ee=e=>{if(!(!(m.flags&1)||!m.dirty&&!e))if(t){let n=m.run();if(e||o||y||(b?n.some((e,t)=>T(e,C[t])):T(n,C))){g&&g();let e=ln;ln=m;try{let e=[n,C===sn?void 0:b&&C[0]===sn?[]:C,v];C=n,d?d(t,3,e):t(...e)}finally{ln=e}}}else m.run()};return l&&l(ee),m=new Fe(h),m.scheduler=c?()=>c(ee,!1):ee,v=e=>un(e,!1,m),g=m.onStop=()=>{let e=cn.get(m);if(e){if(d)d(e,4);else for(let t of e)t();cn.delete(m)}},t?i?ee(!0):C=m.run():c?c(ee.bind(null,!0),!0):m.run(),S.pause=m.pause.bind(m),S.resume=m.resume.bind(m),S.stop=S,S}function fn(e,t=1/0,n){if(t<=0||!b(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Qt(e))fn(e.value,t,n);else if(p(e))for(let r=0;r<e.length;r++)fn(e[r],t,n);else if(h(e)||m(e))e.forEach(e=>{fn(e,t,n)});else if(te(e)){for(let r in e)fn(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&fn(e[r],t,n)}return e}function pn(e,t,n,r){try{return r?e(...r):e()}catch(e){hn(e,t,n)}}function mn(e,t,n,r){if(_(e)){let i=pn(e,t,n,r);return i&&x(i)&&i.catch(e=>{hn(e,t,n)}),i}if(p(e)){let i=[];for(let a=0;a<e.length;a++)i.push(mn(e[a],t,n,r));return i}}function hn(e,t,n,i=!0){let a=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=t&&t.appContext.config||r;if(t){let r=t.parent,i=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){let t=r.ec;if(t){for(let n=0;n<t.length;n++)if(t[n](e,i,a)===!1)return}r=r.parent}if(o){Xe(),pn(o,null,10,[e,i,a]),Ze();return}}gn(e,n,a,i,s)}function gn(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var _n=[],vn=-1,yn=[],bn=null,xn=0,Sn=Promise.resolve(),Cn=null;function wn(e){let t=Cn||Sn;return e?t.then(this?e.bind(this):e):t}function Tn(e){let t=vn+1,n=_n.length;for(;t<n;){let r=t+n>>>1,i=_n[r],a=jn(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function En(e){if(!(e.flags&1)){let t=jn(e),n=_n[_n.length-1];!n||!(e.flags&2)&&t>=jn(n)?_n.push(e):_n.splice(Tn(t),0,e),e.flags|=1,Dn()}}function Dn(){Cn||=Sn.then(Mn)}function On(e){p(e)?yn.push(...e):bn&&e.id===-1?bn.splice(xn+1,0,e):e.flags&1||(yn.push(e),e.flags|=1),Dn()}function kn(e,t,n=vn+1){for(;n<_n.length;n++){let t=_n[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;_n.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function An(e){if(yn.length){let e=[...new Set(yn)].sort((e,t)=>jn(e)-jn(t));if(yn.length=0,bn){bn.push(...e);return}for(bn=e,xn=0;xn<bn.length;xn++){let e=bn[xn];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}bn=null,xn=0}}var jn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Mn(e){try{for(vn=0;vn<_n.length;vn++){let e=_n[vn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),pn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;vn<_n.length;vn++){let e=_n[vn];e&&(e.flags&=-2)}vn=-1,_n.length=0,An(e),Cn=null,(_n.length||yn.length)&&Mn(e)}}var Nn=null,Pn=null;function Fn(e){let t=Nn;return Nn=e,Pn=e&&e.type.__scopeId||null,t}function In(e,t=Nn,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&va(-1);let i=Fn(t),a=ma.length,o;try{o=e(...n)}finally{for(let e=ma.length;e>a;e--)ga();Fn(i),r._d&&va(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ln(e,t){if(Nn===null)return e;let n=to(Nn),i=e.dirs||=[];for(let e=0;e<t.length;e++){let[a,o,s,c=r]=t[e];a&&(_(a)&&(a={mounted:a,updated:a}),a.deep&&fn(o),i.push({dir:a,instance:n,value:o,oldValue:void 0,arg:s,modifiers:c}))}return e}function Rn(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(Xe(),mn(c,n,8,[e.el,s,e,t]),Ze())}}function zn(e,t){if(za){let n=za.provides,r=za.parent&&za.parent.provides;r===n&&(n=za.provides=Object.create(r)),n[e]=t}}function Bn(e,t,n=!1){let r=Ba();if(r||xi){let i=xi?xi._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&_(t)?t.call(r&&r.proxy):t}}var Vn=Symbol.for(`v-scx`),Hn=()=>Bn(Vn);function Un(e,t,n){return Wn(e,t,n)}function Wn(e,t,n=r){let{immediate:i,deep:o,flush:s,once:c}=n,u=l({},n),d=t&&i||!t&&s!==`post`,f;if(Ka){if(s===`sync`){let e=Hn();f=e.__watcherHandles||=[]}else if(!d){let e=()=>{};return e.stop=a,e.resume=a,e.pause=a,e}}let p=za;u.call=(e,t,n)=>mn(e,p,t,n);let m=!1;s===`post`?u.scheduler=e=>{Qi(e,p&&p.suspense)}:s!==`sync`&&(m=!0,u.scheduler=(e,t)=>{t?e():En(e)}),u.augmentJob=e=>{t&&(e.flags|=4),m&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};let h=dn(e,t,u);return Ka&&(f?f.push(h):d&&h()),h}function Gn(e,t,n){let r=this.proxy,i=v(e)?e.includes(`.`)?Kn(r,e):()=>r[e]:e.bind(r,r),a;_(t)?a=t:(a=t.handler,n=t);let o=Ua(this),s=Wn(i,a.bind(r),n);return o(),s}function Kn(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var qn=new WeakMap,Jn=Symbol(`_vte`),Yn=e=>e.__isTeleport,Xn=e=>e&&(e.disabled||e.disabled===``),Zn=e=>e&&(e.defer||e.defer===``),Qn=e=>typeof SVGElement<`u`&&e instanceof SVGElement,$n=e=>typeof MathMLElement==`function`&&e instanceof MathMLElement,er=(e,t)=>{let n=e&&e.to;return v(n)?t?t(n):null:n},tr={name:`Teleport`,__isTeleport:!0,process(e,t,n,r,i,a,o,s,c,l){let{mc:u,pc:d,pbc:f,o:{insert:p,querySelector:m,createText:h,createComment:g,parentNode:_}}=l,v=Xn(t.props),{dynamicChildren:y}=t,b=(e,t,n)=>{e.shapeFlag&16&&u(e.children,t,n,i,a,o,s,c)},x=(e=t)=>{let n=Xn(e.props),r=e.target=er(e.props,m),a=or(r,e,h,p);r&&(o!==`svg`&&Qn(r)?o=`svg`:o!==`mathml`&&$n(r)&&(o=`mathml`),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(r),n||(b(e,r,a),ar(e,!1)))},S=e=>{let t=()=>{if(qn.get(e)===t){if(qn.delete(e),Xn(e.props)){let t=_(e.el)||n;b(e,t,e.anchor),ar(e,!0)}x(e)}};qn.set(e,t),Qi(t,a)};if(e==null){let e=t.el=h(``),i=t.anchor=h(``);if(p(e,n,r),p(i,n,r),Zn(t.props)||a&&a.pendingBranch){S(t);return}v&&(b(t,n,i),ar(t,!0)),x()}else{t.el=e.el;let r=t.anchor=e.anchor,u=qn.get(e);if(u){u.flags|=8,qn.delete(e),S(t);return}t.targetStart=e.targetStart;let p=t.target=e.target,h=t.targetAnchor=e.targetAnchor,g=Xn(e.props),_=g?n:p,b=g?r:h;if(o===`svg`||Qn(p)?o=`svg`:(o===`mathml`||$n(p))&&(o=`mathml`),y?(f(e.dynamicChildren,y,_,i,a,o,s),ia(e,t,!0)):c||d(e,t,_,b,i,a,o,s,!1),v)g?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):nr(t,n,r,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){let e=er(t.props,m);e&&(t.target=e,nr(t,e,null,l,0))}else g&&nr(t,p,h,l,1);ar(t,v)}},remove(e,t,n,{um:r,o:{remove:i}},a){let{shapeFlag:o,children:s,anchor:c,targetStart:l,targetAnchor:u,target:d,props:f}=e,p=Xn(f),m=a||!p,h=qn.get(e);if(h&&(h.flags|=8,qn.delete(e)),d&&(i(l),i(u)),a&&i(c),!h&&(p||d)&&o&16)for(let e=0;e<s.length;e++){let i=s[e];r(i,t,n,m,!!i.dynamicChildren)}},move:nr,hydrate:rr};function nr(e,t,n,{o:{insert:r},m:i},a=2){a===0&&r(e.targetAnchor,t,n);let{el:o,anchor:s,shapeFlag:c,children:l,props:u}=e,d=a===2;if(d&&r(o,t,n),!qn.has(e)&&(!d||Xn(u))&&c&16)for(let e=0;e<l.length;e++)i(l[e],t,n,2);d&&r(s,t,n)}function rr(e,t,n,r,i,a,{o:{nextSibling:o,parentNode:s,querySelector:c,insert:l,createText:u}},d){function f(e,n){let r=n;for(;r;){if(r&&r.nodeType===8){if(r.data===`teleport start anchor`)t.targetStart=r;else if(r.data===`teleport anchor`){t.targetAnchor=r,e._lpa=t.targetAnchor&&o(t.targetAnchor);break}}r=o(r)}}function p(e,t){t.anchor=d(o(e),t,s(e),n,r,i,a)}let m=t.target=er(t.props,c),h=Xn(t.props);if(m){let c=m._lpa||m.firstChild;t.shapeFlag&16&&(h?(p(e,t),f(m,c),t.targetAnchor||or(m,t,u,l,s(e)===m?e:null)):(t.anchor=o(e),f(m,c),t.targetAnchor||or(m,t,u,l),d(c&&o(c),t,m,n,r,i,a))),ar(t,h)}else h&&t.shapeFlag&16&&(p(e,t),t.targetStart=e,t.targetAnchor=o(e));return t.anchor&&o(t.anchor)}var ir=tr;function ar(e,t){let n=e.ctx;if(n&&n.ut){let r,i;for(t?(r=e.el,i=e.anchor):(r=e.targetStart,i=e.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute(`data-v-owner`,n.uid),r=r.nextSibling;n.ut()}}function or(e,t,n,r,i=null){let a=t.targetStart=n(``),o=t.targetAnchor=n(``);return a[Jn]=o,e&&(r(a,e,i),r(o,e,i)),o}var sr=Symbol(`_leaveCb`),cr=Symbol(`_enterCb`);function lr(){let e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Lr(()=>{e.isMounted=!0}),Br(()=>{e.isUnmounting=!0}),e}var ur=[Function,Array],dr={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ur,onEnter:ur,onAfterEnter:ur,onEnterCancelled:ur,onBeforeLeave:ur,onLeave:ur,onAfterLeave:ur,onLeaveCancelled:ur,onBeforeAppear:ur,onAppear:ur,onAfterAppear:ur,onAppearCancelled:ur},fr=e=>{let t=e.subTree;return t.component?fr(t.component):t},pr={name:`BaseTransition`,props:dr,setup(e,{slots:t}){let n=Ba(),r=lr();return()=>{let i=t.default&&xr(t.default(),!0),a=i&&i.length?mr(i):n.subTree?Aa():void 0;if(!a)return;let o=k(e),{mode:s}=o;if(r.isLeaving)return vr(a);let c=yr(a);if(!c)return vr(a);let l=_r(c,o,r,n,e=>l=e);c.type!==fa&&br(c,l);let u=n.subTree&&yr(n.subTree);if(u&&u.type!==fa&&!Sa(u,c)&&fr(n).type!==fa){let e=_r(u,o,r,n);if(br(u,e),s===`out-in`&&c.type!==fa)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete e.afterLeave,u=void 0},vr(a);s===`in-out`&&c.type!==fa?e.delayLeave=(e,t,n)=>{let i=gr(r,u);i[String(u.key)]=u,e[sr]=()=>{t(),e[sr]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{n(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&=void 0;return a}}};function mr(e){let t=e[0];if(e.length>1){for(let n of e)if(n.type!==fa){t=n;break}}return t}var hr=pr;function gr(e,t){let{leavingVNodes:n}=e,r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function _r(e,t,n,r,i){let{appear:a,mode:o,persisted:s=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:m,onAfterLeave:h,onLeaveCancelled:g,onBeforeAppear:_,onAppear:v,onAfterAppear:y,onAppearCancelled:b}=t,x=String(e.key),S=gr(n,e),C=(e,t)=>{e&&mn(e,r,9,t)},ee=(e,t)=>{let n=t[1];C(e,t),p(e)?e.every(e=>e.length<=1)&&n():e.length<=1&&n()},te={mode:o,persisted:s,beforeEnter(t){let r=c;if(!n.isMounted)if(a)r=_||c;else return;t[sr]&&t[sr](!0);let i=S[x];i&&Sa(e,i)&&i.el[sr]&&i.el[sr](),C(r,[t])},enter(t){if(S[x]===e)return;let r=l,i=u,o=d;if(!n.isMounted)if(a)r=v||l,i=y||u,o=b||d;else return;let s=!1;t[cr]=e=>{s||(s=!0,C(e?o:i,[t]),te.delayedLeave&&te.delayedLeave(),t[cr]=void 0)};let c=t[cr].bind(null,!1);r?ee(r,[t,c]):c()},leave(t,r){let i=String(e.key);if(t[cr]&&t[cr](!0),n.isUnmounting)return r();C(f,[t]);let a=!1;t[sr]=n=>{a||(a=!0,r(),C(n?g:h,[t]),t[sr]=void 0,S[i]===e&&delete S[i])};let o=t[sr].bind(null,!1);S[i]=e,m?ee(m,[t,o]):o()},clone(e){let a=_r(e,t,n,r,i);return i&&i(a),a}};return te}function vr(e){if(kr(e))return e=Da(e),e.children=null,e}function yr(e){if(!kr(e))return Yn(e.type)&&e.children?mr(e.children):e;if(e.component)return e.component.subTree;let{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&_(n.default))return n.default()}}function br(e,t){e.shapeFlag&6&&e.component?(e.transition=t,br(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function xr(e,t=!1,n){let r=[],i=0;for(let a=0;a<e.length;a++){let o=e[a],s=n==null?o.key:String(n)+String(o.key==null?a:o.key);o.type===M?(o.patchFlag&128&&i++,r=r.concat(xr(o.children,t,s))):(t||o.type!==fa)&&r.push(s==null?o:Da(o,{key:s}))}if(i>1)for(let e=0;e<r.length;e++)r[e].patchFlag=-2;return r}function Sr(e,t){return _(e)?l({name:e.name},t,{setup:e}):e}function Cr(e){e.ids=[e.ids[0]+e.ids[2]+++`-`,0,0]}function wr(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var Tr=new WeakMap;function Er(e,t,n,i,a=!1){if(p(e)){e.forEach((e,r)=>Er(e,t&&(p(t)?t[r]:t),n,i,a));return}if(Or(i)&&!a){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Er(e,t,n,i.component.subTree);return}let s=i.shapeFlag&4?to(i.component):i.el,c=a?null:s,{i:l,r:d}=e,m=t&&t.r,h=l.refs===r?l.refs={}:l.refs,g=l.setupState,y=k(g),b=g===r?o:e=>!wr(h,e)&&f(y,e),x=(e,t)=>!(t&&wr(h,t));if(m!=null&&m!==d){if(Dr(t),v(m))h[m]=null,b(m)&&(g[m]=null);else if(Qt(m)){let e=t;x(m,e.k)&&(m.value=null),e.k&&(h[e.k]=null)}}if(_(d))pn(d,l,12,[c,h]);else{let t=v(d),r=Qt(d);if(t||r){let i=()=>{if(e.f){let n=t?b(d)?g[d]:h[d]:x(d)||!e.k?d.value:h[e.k];if(a)p(n)&&u(n,s);else if(p(n))n.includes(s)||n.push(s);else if(t)h[d]=[s],b(d)&&(g[d]=h[d]);else{let t=[s];x(d,e.k)&&(d.value=t),e.k&&(h[e.k]=t)}}else t?(h[d]=c,b(d)&&(g[d]=c)):r&&(x(d,e.k)&&(d.value=c),e.k&&(h[e.k]=c))};if(c){let t=()=>{i(),Tr.delete(e)};t.id=-1,Tr.set(e,t),Qi(t,n)}else Dr(e),i()}}}function Dr(e){let t=Tr.get(e);t&&(t.flags|=8,Tr.delete(e))}he().requestIdleCallback,he().cancelIdleCallback;var Or=e=>!!e.type.__asyncLoader,kr=e=>e.type.__isKeepAlive;function Ar(e,t){Mr(e,`a`,t)}function jr(e,t){Mr(e,`da`,t)}function Mr(e,t,n=za){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(Pr(t,r,n),n){let e=n.parent;for(;e&&e.parent;)kr(e.parent.vnode)&&Nr(r,t,n,e),e=e.parent}}function Nr(e,t,n,r){let i=Pr(t,e,r,!0);Vr(()=>{u(r[t],i)},n)}function Pr(e,t,n=za,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{Xe();let i=Ua(n),a=mn(t,n,e,r);return i(),Ze(),a};return r?i.unshift(a):i.push(a),a}}var Fr=e=>(t,n=za)=>{(!Ka||e===`sp`)&&Pr(e,(...e)=>t(...e),n)},Ir=Fr(`bm`),Lr=Fr(`m`),Rr=Fr(`bu`),zr=Fr(`u`),Br=Fr(`bum`),Vr=Fr(`um`),Hr=Fr(`sp`),Ur=Fr(`rtg`),Wr=Fr(`rtc`);function Gr(e,t=za){Pr(`ec`,e,t)}var Kr=`components`;function qr(e,t){return Yr(Kr,e,!0,t)||e}var Jr=Symbol.for(`v-ndc`);function Yr(e,t,n=!0,r=!1){let i=Nn||za;if(i){let n=i.type;if(e===Kr){let e=no(n,!1);if(e&&(e===t||e===w(t)||e===ce(w(t))))return n}let a=Xr(i[e]||n[e],t)||Xr(i.appContext[e],t);return!a&&r?n:a}}function Xr(e,t){return e&&(e[t]||e[w(t)]||e[ce(w(t))])}function Zr(e,t,n,r){let i,a=n&&n[r],o=p(e);if(o||v(e)){let n=o&&Gt(e),r=!1,s=!1;n&&(r=!qt(e),s=Kt(e),e=lt(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?Zt(Xt(e[n])):Xt(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(b(e))if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}else i=[];return n&&(n[r]=i),i}var Qr=e=>e?Ga(e)?to(e):Qr(e.parent):null,$r=l(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Qr(e.parent),$root:e=>Qr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ci(e),$forceUpdate:e=>e.f||=()=>{En(e.update)},$nextTick:e=>e.n||=wn.bind(e.proxy),$watch:e=>Gn.bind(e)}),ei=(e,t)=>e!==r&&!e.__isScriptSetup&&f(e,t),ti={get({_:e},t){if(t===`__v_skip`)return!0;let{ctx:n,setupState:i,data:a,props:o,accessCache:s,type:c,appContext:l}=e;if(t[0]!==`$`){let e=s[t];if(e!==void 0)switch(e){case 1:return i[t];case 2:return a[t];case 4:return n[t];case 3:return o[t]}else if(ei(i,t))return s[t]=1,i[t];else if(a!==r&&f(a,t))return s[t]=2,a[t];else if(f(o,t))return s[t]=3,o[t];else if(n!==r&&f(n,t))return s[t]=4,n[t];else ri&&(s[t]=0)}let u=$r[t],d,p;if(u)return t===`$attrs`&&O(e.attrs,`get`,``),u(e);if((d=c.__cssModules)&&(d=d[t]))return d;if(n!==r&&f(n,t))return s[t]=4,n[t];if(p=l.config.globalProperties,f(p,t))return p[t]},set({_:e},t,n){let{data:i,setupState:a,ctx:o}=e;return ei(a,t)?(a[t]=n,!0):i!==r&&f(i,t)?(i[t]=n,!0):f(e.props,t)||t[0]===`$`&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:a,props:o,type:s}},c){let l;return!!(n[c]||e!==r&&c[0]!==`$`&&f(e,c)||ei(t,c)||f(o,c)||f(i,c)||f($r,c)||f(a.config.globalProperties,c)||(l=s.__cssModules)&&l[c])},defineProperty(e,t,n){return n.get==null?f(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function ni(e){return p(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var ri=!0;function ii(e){let t=ci(e),n=e.proxy,r=e.ctx;ri=!1,t.beforeCreate&&oi(t.beforeCreate,e,`bc`);let{data:i,computed:o,methods:s,watch:c,provide:l,inject:u,created:d,beforeMount:f,mounted:m,beforeUpdate:h,updated:g,activated:v,deactivated:y,beforeDestroy:x,beforeUnmount:S,destroyed:C,unmounted:ee,render:te,renderTracked:ne,renderTriggered:re,errorCaptured:ie,serverPrefetch:ae,expose:w,inheritAttrs:oe,components:se,directives:ce,filters:le}=t;if(u&&ai(u,r,null),s)for(let e in s){let t=s[e];_(t)&&(r[e]=t.bind(n))}if(i){let t=i.call(n,n);b(t)&&(e.data=Vt(t))}if(ri=!0,o)for(let e in o){let t=o[e],i=L({get:_(t)?t.bind(n,n):_(t.get)?t.get.bind(n,n):a,set:!_(t)&&_(t.set)?t.set.bind(n):a});Object.defineProperty(r,e,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e})}if(c)for(let e in c)si(c[e],r,n,e);if(l){let e=_(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{zn(t,e[t])})}d&&oi(d,e,`c`);function T(e,t){p(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(T(Ir,f),T(Lr,m),T(Rr,h),T(zr,g),T(Ar,v),T(jr,y),T(Gr,ie),T(Wr,ne),T(Ur,re),T(Br,S),T(Vr,ee),T(Hr,ae),p(w))if(w.length){let t=e.exposed||={};w.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={};te&&e.render===a&&(e.render=te),oe!=null&&(e.inheritAttrs=oe),se&&(e.components=se),ce&&(e.directives=ce),ae&&Cr(e)}function ai(e,t,n=a){p(e)&&(e=pi(e));for(let n in e){let r=e[n],i;i=b(r)?`default`in r?Bn(r.from||n,r.default,!0):Bn(r.from||n):Bn(r),Qt(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function oi(e,t,n){mn(p(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function si(e,t,n,r){let i=r.includes(`.`)?Kn(n,r):()=>n[r];if(v(e)){let n=t[e];_(n)&&Un(i,n)}else if(_(e))Un(i,e.bind(n));else if(b(e))if(p(e))e.forEach(e=>si(e,t,n,r));else{let r=_(e.handler)?e.handler.bind(n):t[e.handler];_(r)&&Un(i,r,e)}}function ci(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>li(c,e,o,!0)),li(c,t,o)),b(t)&&a.set(t,c),c}function li(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&li(e,a,n,!0),i&&i.forEach(t=>li(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=ui[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var ui={data:di,props:gi,emits:gi,methods:hi,computed:hi,beforeCreate:mi,created:mi,beforeMount:mi,mounted:mi,beforeUpdate:mi,updated:mi,beforeDestroy:mi,beforeUnmount:mi,destroyed:mi,unmounted:mi,activated:mi,deactivated:mi,errorCaptured:mi,serverPrefetch:mi,components:hi,directives:hi,watch:_i,provide:di,inject:fi};function di(e,t){return t?e?function(){return l(_(e)?e.call(this,this):e,_(t)?t.call(this,this):t)}:t:e}function fi(e,t){return hi(pi(e),pi(t))}function pi(e){if(p(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function mi(e,t){return e?[...new Set([].concat(e,t))]:t}function hi(e,t){return e?l(Object.create(null),e,t):t}function gi(e,t){return e?p(e)&&p(t)?[...new Set([...e,...t])]:l(Object.create(null),ni(e),ni(t??{})):t}function _i(e,t){if(!e)return t;if(!t)return e;let n=l(Object.create(null),e);for(let r in t)n[r]=mi(e[r],t[r]);return n}function vi(){return{app:null,config:{isNativeTag:o,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var yi=0;function bi(e,t){return function(n,r=null){_(n)||(n=l({},n)),r!=null&&!b(r)&&(r=null);let i=vi(),a=new WeakSet,o=[],s=!1,c=i.app={_uid:yi++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:ao,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&_(e.install)?(a.add(e),e.install(c,...t)):_(e)&&(a.add(e),e(c,...t))),c},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),c},component(e,t){return t?(i.components[e]=t,c):i.components[e]},directive(e,t){return t?(i.directives[e]=t,c):i.directives[e]},mount(a,o,l){if(!s){let u=c._ceVNode||I(n,r);return u.appContext=i,l===!0?l=`svg`:l===!1&&(l=void 0),o&&t?t(u,a):e(u,a,l),s=!0,c._container=a,a.__vue_app__=c,to(u.component)}},onUnmount(e){o.push(e)},unmount(){s&&(mn(o,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return i.provides[e]=t,c},runWithContext(e){let t=xi;xi=c;try{return e()}finally{xi=t}}};return c}}var xi=null,Si=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${w(t)}Modifiers`]||e[`${se(t)}Modifiers`];function Ci(e,t,...n){if(e.isUnmounted)return;let i=e.vnode.props||r,a=n,o=t.startsWith(`update:`),s=o&&Si(i,t.slice(7));s&&(s.trim&&(a=n.map(e=>v(e)?e.trim():e)),s.number&&(a=n.map(fe)));let c,l=i[c=le(t)]||i[c=le(w(t))];!l&&o&&(l=i[c=le(se(t))]),l&&mn(l,e,6,a);let u=i[c+`Once`];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,mn(u,e,6,a)}}var wi=new WeakMap;function Ti(e,t,n=!1){let r=n?wi:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},s=!1;if(!_(e)){let r=e=>{let n=Ti(e,t,!0);n&&(s=!0,l(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!s?(b(e)&&r.set(e,null),null):(p(a)?a.forEach(e=>o[e]=null):l(o,a),b(e)&&r.set(e,o),o)}function Ei(e,t){return!e||!s(t)?!1:(t=t.slice(2),t=t===`Once`?t:t.replace(/Once$/,``),f(e,t[0].toLowerCase()+t.slice(1))||f(e,se(t))||f(e,t))}function Di(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:o,attrs:s,emit:l,render:u,renderCache:d,props:f,data:p,setupState:m,ctx:h,inheritAttrs:g}=e,_=Fn(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=ja(u.call(t,e,d,f,m,p,h)),y=s}else{let e=t;v=ja(e.length>1?e(f,{attrs:s,slots:o,emit:l}):e(f,null)),y=t.props?s:Oi(s)}}catch(t){ma.length=0,hn(t,e,1),v=I(fa)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(c)&&(y=ki(y,a)),b=Da(b,y,!1,!0))}return n.dirs&&(b=Da(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&br(b,n.transition),v=b,Fn(_),v}var Oi=e=>{let t;for(let n in e)(n===`class`||n===`style`||s(n))&&((t||={})[n]=e[n]);return t},ki=(e,t)=>{let n={};for(let r in e)(!c(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Ai(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ji(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(Mi(o,r,n)&&!Ei(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?!o||ji(r,o,l):!!o;return!1}function ji(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(Mi(t,e,a)&&!Ei(n,a))return!0}return!1}function Mi(e,t,n){let r=e[n],i=t[n];return n===`style`&&b(r)&&b(i)?!Ee(r,i):r!==i}function Ni({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var Pi={},Fi=()=>Object.create(Pi),Ii=e=>Object.getPrototypeOf(e)===Pi;function Li(e,t,n,r=!1){let i={},a=Fi();e.propsDefaults=Object.create(null),zi(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);n?e.props=r?i:Ht(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function Ri(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=k(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Ei(e.emitsOptions,o))continue;let u=t[o];if(c)if(f(a,o))u!==a[o]&&(a[o]=u,l=!0);else{let t=w(o);i[t]=Bi(c,s,t,u,e,!1)}else u!==a[o]&&(a[o]=u,l=!0)}}}else{zi(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!f(t,a)&&((r=se(a))===a||!f(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=Bi(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!f(t,e))&&(delete a[e],l=!0)}l&&st(e.attrs,`set`,``)}function zi(e,t,n,i){let[a,o]=e.propsOptions,s=!1,c;if(t)for(let r in t){if(re(r))continue;let l=t[r],u;a&&f(a,u=w(r))?!o||!o.includes(u)?n[u]=l:(c||={})[u]=l:Ei(e.emitsOptions,r)||(!(r in i)||l!==i[r])&&(i[r]=l,s=!0)}if(o){let t=k(n),i=c||r;for(let r=0;r<o.length;r++){let s=o[r];n[s]=Bi(a,t,s,i[s],e,!f(i,s))}}return s}function Bi(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=f(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&_(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=Ua(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===se(n))&&(r=!0))}return r}var Vi=new WeakMap;function Hi(e,t,n=!1){let a=n?Vi:t.propsCache,o=a.get(e);if(o)return o;let s=e.props,c={},u=[],d=!1;if(!_(e)){let r=e=>{d=!0;let[n,r]=Hi(e,t,!0);l(c,n),r&&u.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!s&&!d)return b(e)&&a.set(e,i),i;if(p(s))for(let e=0;e<s.length;e++){let t=w(s[e]);Ui(t)&&(c[t]=r)}else if(s)for(let e in s){let t=w(e);if(Ui(t)){let n=s[e],r=c[t]=p(n)||_(n)?{type:n}:l({},n),i=r.type,a=!1,o=!0;if(p(i))for(let e=0;e<i.length;++e){let t=i[e],n=_(t)&&t.name;if(n===`Boolean`){a=!0;break}else n===`String`&&(o=!1)}else a=_(i)&&i.name===`Boolean`;r[0]=a,r[1]=o,(a||f(r,`default`))&&u.push(t)}}let m=[c,u];return b(e)&&a.set(e,m),m}function Ui(e){return e[0]!==`$`&&!re(e)}var Wi=e=>e===`_`||e===`_ctx`||e===`$stable`,Gi=e=>p(e)?e.map(ja):[ja(e)],Ki=(e,t,n)=>{if(t._n)return t;let r=In((...e)=>Gi(t(...e)),n);return r._c=!1,r},qi=(e,t,n)=>{let r=e._ctx;for(let n in e){if(Wi(n))continue;let i=e[n];if(_(i))t[n]=Ki(n,i,r);else if(i!=null){let e=Gi(i);t[n]=()=>e}}},Ji=(e,t)=>{let n=Gi(t);e.slots.default=()=>n},Yi=(e,t,n)=>{for(let r in t)(n||!Wi(r))&&(e[r]=t[r])},Xi=(e,t,n)=>{let r=e.slots=Fi();if(e.vnode.shapeFlag&32){let e=t._;e?(Yi(r,t,n),n&&de(r,`_`,e,!0)):qi(t,r)}else t&&Ji(e,t)},Zi=(e,t,n)=>{let{vnode:i,slots:a}=e,o=!0,s=r;if(i.shapeFlag&32){let e=t._;e?n&&e===1?o=!1:Yi(a,t,n):(o=!t.$stable,qi(t,a)),s=t}else t&&(Ji(e,t),s={default:1});if(o)for(let e in a)!Wi(e)&&s[e]==null&&delete a[e]},Qi=ua;function $i(e){return ea(e)}function ea(e,t){let n=he();n.__VUE__=!0;let{insert:o,remove:s,patchProp:c,createElement:l,createText:u,createComment:d,setText:f,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=a,insertStaticContent:_}=e,v=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Sa(e,t)&&(r=Ce(e),ve(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case da:y(e,t,n,r);break;case fa:b(e,t,n,r);break;case pa:e??x(t,n,r,o);break;case M:se(e,t,n,r,i,a,o,s,c);break;default:d&1?ee(e,t,n,r,i,a,o,s,c):d&6?ce(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,Ee)}u!=null&&i?Er(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&Er(e.ref,null,a,e,!0)},y=(e,t,n,r)=>{if(e==null)o(t.el=u(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,r)=>{e==null?o(t.el=d(t.children||``),n,r):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=h(e),o(e,n,r),e=i;o(t,n,r)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),s(e),e=n;s(t)},ee=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)te(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),ae(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},te=(e,t,n,r,i,a,s,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=l(e.type,a,m&&m.is,m),h&8?p(d,e.children):h&16&&ie(e.children,d,null,r,i,ta(e,a),s,u),_&&Rn(e,null,r,`created`),ne(d,e,e.scopeId,s,r),m){for(let e in m)e!==`value`&&!re(e)&&c(d,e,null,m[e],a,r);`value`in m&&c(d,`value`,null,m.value,a),(f=m.onVnodeBeforeMount)&&Fa(f,r,e)}_&&Rn(e,null,r,`beforeMount`);let v=ra(i,g);v&&g.beforeEnter(d),o(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&Qi(()=>{try{f&&Fa(f,r,e),v&&g.enter(d),_&&Rn(e,null,r,`mounted`)}finally{}},i)},ne=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||la(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;ne(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},ie=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++){let c=e[l]=s?Ma(e[l]):ja(e[l]);v(null,c,t,n,r,i,a,o,s)}},ae=(e,t,n,i,a,o,s)=>{let l=t.el=e.el,{patchFlag:u,dynamicChildren:d,dirs:f}=t;u|=e.patchFlag&16;let m=e.props||r,h=t.props||r,g;if(n&&na(n,!1),(g=h.onVnodeBeforeUpdate)&&Fa(g,n,t,e),f&&Rn(t,e,n,`beforeUpdate`),n&&na(n,!0),d&&(!e.dynamicChildren||e.dynamicChildren.length!==d.length)&&(u=0,s=!1,d=null),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(l,``),d?w(e.dynamicChildren,d,l,n,i,ta(t,a),o):s||pe(e,t,l,null,n,i,ta(t,a),o,!1),u>0){if(u&16)oe(l,m,h,n,a);else if(u&2&&m.class!==h.class&&c(l,`class`,null,h.class,a),u&4&&c(l,`style`,m.style,h.style,a),u&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let r=e[t],i=m[r],o=h[r];(o!==i||r===`value`)&&c(l,r,i,o,a,n)}}u&1&&e.children!==t.children&&p(l,t.children)}else!s&&d==null&&oe(l,m,h,n,a);((g=h.onVnodeUpdated)||f)&&Qi(()=>{g&&Fa(g,n,t,e),f&&Rn(t,e,n,`updated`)},i)},w=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s],u=c.el&&(c.type===M||!Sa(c,l)||c.shapeFlag&198)?m(c.el):n;v(c,l,u,null,r,i,a,o,!0)}},oe=(e,t,n,i,a)=>{if(t!==n){if(t!==r)for(let r in t)!re(r)&&!(r in n)&&c(e,r,t[r],null,a,i);for(let r in n){if(re(r))continue;let o=n[r],s=t[r];o!==s&&r!==`value`&&c(e,r,s,o,a,i)}`value`in n&&c(e,`value`,t.value,n.value,a)}},se=(e,t,n,r,i,a,s,c,l)=>{let d=t.el=e?e.el:u(``),f=t.anchor=e?e.anchor:u(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(c=c?c.concat(h):h),e==null?(o(d,n,r),o(f,n,r),ie(t.children||[],n,f,i,a,s,c,l)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(w(e.dynamicChildren,m,n,i,a,s,c),(t.key!=null||i&&t===i.subTree)&&ia(e,t,!0)):pe(e,t,n,f,i,a,s,c,l)},ce=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):le(t,n,r,i,a,o,c):T(e,t,c)},le=(e,t,n,r,i,a,o)=>{let s=e.component=Ra(e,r,i);if(kr(e)&&(s.ctx.renderer=Ee),qa(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,de,o),!e.el){let r=s.subTree=I(fa);b(null,r,t,n),e.placeholder=r.el}}else de(s,e,t,n,i,a,o)},T=(e,t,n)=>{let r=t.component=e.component;if(Ai(e,t,n))if(r.asyncDep&&!r.asyncResolved){fe(r,t,n);return}else r.next=t,r.update();else t.el=e.el,r.vnode=t},de=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=oa(e);if(n){t&&(t.el=c.el,fe(e,t,o)),n.asyncDep.then(()=>{Qi(()=>{e.isUnmounted||l()},i)});return}}let u=t,d;na(e,!1),t?(t.el=c.el,fe(e,t,o)):t=c,n&&ue(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&Fa(d,s,t,c),na(e,!0);let f=Di(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),Ce(p),e,i,a),t.el=f.el,u===null&&Ni(e,f.el),r&&Qi(r,i),(d=t.props&&t.props.onVnodeUpdated)&&Qi(()=>Fa(d,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=Or(t);if(na(e,!1),l&&ue(l),!m&&(o=c&&c.onVnodeBeforeMount)&&Fa(o,d,t),na(e,!0),s&&Oe){let t=()=>{e.subTree=Di(e),Oe(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=Di(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&Qi(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;Qi(()=>Fa(o,d,e),i)}(t.shapeFlag&256||d&&Or(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&Qi(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new Fe(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>En(u),na(e,!0),l()},fe=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,Ri(e,t.props,r,n),Zi(e,t.children,n),Xe(),kn(e),Ze()},pe=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){ge(l,d,n,r,i,a,o,s,c);return}else if(f&256){me(l,d,n,r,i,a,o,s,c);return}}m&8?(u&16&&Se(l,i,a),d!==l&&p(n,d)):u&16?m&16?ge(l,d,n,r,i,a,o,s,c):Se(l,i,a,!0):(u&8&&p(n,``),m&16&&ie(d,n,r,i,a,o,s,c))},me=(e,t,n,r,a,o,s,c,l)=>{e||=i,t||=i;let u=e.length,d=t.length,f=Math.min(u,d),p;for(p=0;p<f;p++){let r=t[p]=l?Ma(t[p]):ja(t[p]);v(e[p],r,n,null,a,o,s,c,l)}u>d?Se(e,a,o,!0,!1,f):ie(t,n,r,a,o,s,c,l,f)},ge=(e,t,n,r,a,o,s,c,l)=>{let u=0,d=t.length,f=e.length-1,p=d-1;for(;u<=f&&u<=p;){let r=e[u],i=t[u]=l?Ma(t[u]):ja(t[u]);if(Sa(r,i))v(r,i,n,null,a,o,s,c,l);else break;u++}for(;u<=f&&u<=p;){let r=e[f],i=t[p]=l?Ma(t[p]):ja(t[p]);if(Sa(r,i))v(r,i,n,null,a,o,s,c,l);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,i=e<d?t[e].el:r;for(;u<=p;)v(null,t[u]=l?Ma(t[u]):ja(t[u]),n,i,a,o,s,c,l),u++}}else if(u>p)for(;u<=f;)ve(e[u],a,o,!0),u++;else{let m=u,h=u,g=new Map;for(u=h;u<=p;u++){let e=t[u]=l?Ma(t[u]):ja(t[u]);e.key!=null&&g.set(e.key,u)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(u=0;u<b;u++)C[u]=0;for(u=m;u<=f;u++){let r=e[u];if(y>=b){ve(r,a,o,!0);continue}let i;if(r.key!=null)i=g.get(r.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&Sa(r,t[_])){i=_;break}i===void 0?ve(r,a,o,!0):(C[i-h]=u+1,i>=S?S=i:x=!0,v(r,t[i],n,null,a,o,s,c,l),y++)}let ee=x?aa(C):i;for(_=ee.length-1,u=b-1;u>=0;u--){let e=h+u,i=t[e],f=t[e+1],p=e+1<d?f.el||ca(f):r;C[u]===0?v(null,i,n,p,a,o,s,c,l):x&&(_<0||u!==ee[_]?_e(i,n,p,2):_--)}}},_e=(e,t,n,r,i=null)=>{let{el:a,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){_e(e.component.subTree,t,n,r);return}if(d&128){e.suspense.move(t,n,r);return}if(d&64){c.move(e,t,n,Ee);return}if(c===M){o(a,t,n);for(let e=0;e<u.length;e++)_e(u[e],t,n,r);o(e.anchor,t,n);return}if(c===pa){S(e,t,n);return}if(r!==2&&d&1&&l)if(r===0)l.persisted&&!a[sr]?o(a,t,n):(l.beforeEnter(a),o(a,t,n),Qi(()=>l.enter(a),i));else{let{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?s(a):o(a,t,n)},d=()=>{let e=a._isLeaving||!!a[sr];a._isLeaving&&a[sr](!0),l.persisted&&!e?u():r(a,()=>{u(),c&&c()})};i?i(a,u,d):d()}else o(a,t,n)},ve=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if(d===-2&&(i=!1),s!=null&&(Xe(),Er(s,null,n,e,!0),Ze()),p!=null&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,g=!Or(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&Fa(_,t,e),u&6)xe(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&Rn(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,Ee,r):l&&!l.hasOnce&&(a!==M||d>0&&d&64)?Se(l,t,n,!1,!0):(a===M&&d&384||!i&&u&16)&&Se(c,t,n),r&&ye(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&Qi(()=>{_&&Fa(_,t,e),h&&Rn(e,null,t,`unmounted`),v&&(e.el=null)},n)},ye=e=>{let{type:t,el:n,anchor:r,transition:i}=e;if(t===M){be(n,r);return}if(t===pa){C(e);return}let a=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(e.shapeFlag&1&&i&&!i.persisted){let{leave:t,delayLeave:r}=i,o=()=>t(n,a);r?r(e.el,a,o):o()}else a()},be=(e,t)=>{let n;for(;e!==t;)n=h(e),s(e),e=n;s(t)},xe=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;sa(c),sa(l),r&&ue(r),i.stop(),a&&(a.flags|=8,ve(o,e,t,n)),s&&Qi(s,t),Qi(()=>{e.isUnmounted=!0},t)},Se=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)ve(e[o],t,n,r,i)},Ce=e=>{if(e.shapeFlag&6)return Ce(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[Jn];return n?h(n):t},we=!1,Te=(e,t,n)=>{let r;e==null?t._vnode&&(ve(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,we||=(we=!0,kn(r),An(),!1)},Ee={p:v,um:ve,m:_e,r:ye,mt:le,mc:ie,pc:pe,pbc:w,n:Ce,o:e},De,Oe;return t&&([De,Oe]=t(Ee)),{render:Te,hydrate:De,createApp:bi(Te,De)}}function ta({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function na({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function ra(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ia(e,t,n=!1){let r=e.children,i=t.children;if(p(r)&&p(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=Ma(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&ia(t,a)),a.type===da&&(a.patchFlag===-1&&(a=i[e]=Ma(a)),a.el=t.el),a.type===fa&&!a.el&&(a.el=t.el)}}function aa(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-->0;)n[a]=o,o=t[o];return n}function oa(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:oa(t)}function sa(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function ca(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?ca(t.subTree):null}var la=e=>e.__isSuspense;function ua(e,t){t&&t.pendingBranch?p(e)?t.effects.push(...e):t.effects.push(e):On(e)}var M=Symbol.for(`v-fgt`),da=Symbol.for(`v-txt`),fa=Symbol.for(`v-cmt`),pa=Symbol.for(`v-stc`),ma=[],ha=null;function N(e=!1){ma.push(ha=e?null:[])}function ga(){ma.pop(),ha=ma[ma.length-1]||null}var _a=1;function va(e,t=!1){_a+=e,e<0&&ha&&t&&(ha.hasOnce=!0)}function ya(e){return e.dynamicChildren=_a>0?ha||i:null,ga(),_a>0&&ha&&ha.push(e),e}function P(e,t,n,r,i,a){return ya(F(e,t,n,r,i,a,!0))}function ba(e,t,n,r,i){return ya(I(e,t,n,r,i,!0))}function xa(e){return e?e.__v_isVNode===!0:!1}function Sa(e,t){return e.type===t.type&&e.key===t.key}var Ca=({key:e})=>e??null,wa=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:v(e)||Qt(e)||_(e)?{i:Nn,r:e,k:t,f:!!n}:e);function F(e,t=null,n=null,r=0,i=null,a=e===M?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ca(t),ref:t&&wa(t),scopeId:Pn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Nn};return s?(Na(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=v(n)?8:16),_a>0&&!o&&ha&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&ha.push(c),c}var I=Ta;function Ta(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===Jr)&&(e=fa),xa(e)){let r=Da(e,t,!0);return n&&Na(r,n),_a>0&&!a&&ha&&(r.shapeFlag&6?ha[ha.indexOf(e)]=r:ha.push(r)),r.patchFlag=-2,r}if(ro(e)&&(e=e.__vccOpts),t){t=Ea(t);let{class:e,style:n}=t;e&&!v(e)&&(t.class=xe(e)),b(n)&&(Jt(n)&&!p(n)&&(n=l({},n)),t.style=ge(n))}let o=v(e)?1:la(e)?128:Yn(e)?64:b(e)?4:_(e)?2:0;return F(e,t,n,r,i,o,a,!0)}function Ea(e){return e?Jt(e)||Ii(e)?l({},e):e:null}function Da(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?Pa(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Ca(l),ref:t&&t.ref?n&&a?p(a)?a.concat(wa(t)):[a,wa(t)]:wa(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==M?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Da(e.ssContent),ssFallback:e.ssFallback&&Da(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&br(u,c.clone(u)),u}function Oa(e=` `,t=0){return I(da,null,e,t)}function ka(e,t){let n=I(pa,null,e);return n.staticCount=t,n}function Aa(e=``,t=!1){return t?(N(),ba(fa,null,e)):I(fa,null,e)}function ja(e){return e==null||typeof e==`boolean`?I(fa):p(e)?I(M,null,e.slice()):xa(e)?Ma(e):I(da,null,String(e))}function Ma(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Da(e)}function Na(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(p(t))n=16;else if(typeof t==`object`)if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),Na(e,n()),n._c&&(n._d=!0));return}else{n=32;let r=t._;!r&&!Ii(t)?t._ctx=Nn:r===3&&Nn&&(Nn.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(_(t)){if(r&65){Na(e,{default:t});return}t={default:t,_ctx:Nn},n=32}else t=String(t),r&64?(n=16,t=[Oa(t)]):n=8;e.children=t,e.shapeFlag|=n}function Pa(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=xe([t.class,r.class]));else if(e===`style`)t.style=ge([t.style,r.style]);else if(s(e)){let n=t[e],i=r[e];i&&n!==i&&!(p(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!c(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function Fa(e,t,n,r=null){mn(e,t,7,[n,r])}var Ia=vi(),La=0;function Ra(e,t,n){let i=e.type,a=(t?t.appContext:e.appContext)||Ia,o={uid:La++,vnode:e,type:i,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Me(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),ids:t?t.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hi(i,a),emitsOptions:Ti(i,a),emit:null,emitted:null,propsDefaults:r,inheritAttrs:i.inheritAttrs,ctx:r,data:r,props:r,attrs:r,slots:r,refs:r,setupState:r,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Ci.bind(null,o),e.ce&&e.ce(o),o}var za=null,Ba=()=>za||Nn,Va,Ha;{let e=he(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};Va=t(`__VUE_INSTANCE_SETTERS__`,e=>za=e),Ha=t(`__VUE_SSR_SETTERS__`,e=>Ka=e)}var Ua=e=>{let t=za;return Va(e),e.scope.on(),()=>{e.scope.off(),Va(t)}},Wa=()=>{za&&za.scope.off(),Va(null)};function Ga(e){return e.vnode.shapeFlag&4}var Ka=!1;function qa(e,t=!1,n=!1){t&&Ha(t);let{props:r,children:i}=e.vnode,a=Ga(e);Li(e,r,a,t),Xi(e,i,n||t);let o=a?Ja(e,t):void 0;return t&&Ha(!1),o}function Ja(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,ti);let{setup:r}=n;if(r){Xe();let n=e.setupContext=r.length>1?eo(e):null,i=Ua(e),a=pn(r,e,0,[e.props,n]),o=x(a);if(Ze(),i(),(o||e.sp)&&!Or(e)&&Cr(e),o){if(a.then(Wa,Wa),t)return a.then(n=>{Ya(e,n,t)}).catch(t=>{hn(t,e,0)});e.asyncDep=a}else Ya(e,a,t)}else Qa(e,t)}function Ya(e,t,n){_(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:b(t)&&(e.setupState=rn(t)),Qa(e,n)}var Xa,Za;function Qa(e,t,n){let r=e.type;if(!e.render){if(!t&&Xa&&!r.render){let t=r.template||ci(e).template;if(t){let{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:o}=r;r.render=Xa(t,l(l({isCustomElement:n,delimiters:a},i),o))}}e.render=r.render||a,Za&&Za(e)}{let t=Ua(e);Xe();try{ii(e)}finally{Ze(),t()}}}var $a={get(e,t){return O(e,`get`,``),e[t]}};function eo(e){return{attrs:new Proxy(e.attrs,$a),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function to(e){return e.exposed?e.exposeProxy||=new Proxy(rn(Yt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in $r)return $r[n](e)},has(e,t){return t in e||t in $r}}):e.proxy}function no(e,t=!0){return _(e)?e.displayName||e.name:e.name||t&&e.__name}function ro(e){return _(e)&&`__vccOpts`in e}var L=(e,t)=>on(e,t,Ka);function io(e,t,n){try{va(-1);let r=arguments.length;return r===2?b(t)&&!p(t)?xa(t)?I(e,null,[t]):I(e,t):I(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&xa(n)&&(n=[n]),I(e,t,n))}finally{va(1)}}var ao=`3.5.40`,oo=void 0,so=typeof window<`u`&&window.trustedTypes;if(so)try{oo=so.createPolicy(`vue`,{createHTML:e=>e})}catch{}var co=oo?e=>oo.createHTML(e):e=>e,lo=`http://www.w3.org/2000/svg`,uo=`http://www.w3.org/1998/Math/MathML`,fo=typeof document<`u`?document:null,po=fo&&fo.createElement(`template`),mo={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?fo.createElementNS(lo,e):t===`mathml`?fo.createElementNS(uo,e):n?fo.createElement(e,{is:n}):fo.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>fo.createTextNode(e),createComment:e=>fo.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>fo.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{po.innerHTML=co(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=po.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},ho=`transition`,go=`animation`,_o=Symbol(`_vtc`),vo={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},yo=l({},dr,vo),bo=(e=>(e.displayName=`Transition`,e.props=yo,e))((e,{slots:t})=>io(hr,Co(e),t)),xo=(e,t=[])=>{p(e)?e.forEach(e=>e(...t)):e&&e(...t)},So=e=>e?p(e)?e.some(e=>e.length>1):e.length>1:!1;function Co(e){let t={};for(let n in e)n in vo||(t[n]=e[n]);if(e.css===!1)return t;let{name:n=`v`,type:r,duration:i,enterFromClass:a=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:c=a,appearActiveClass:u=o,appearToClass:d=s,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,h=wo(i),g=h&&h[0],_=h&&h[1],{onBeforeEnter:v,onEnter:y,onEnterCancelled:b,onLeave:x,onLeaveCancelled:S,onBeforeAppear:C=v,onAppear:ee=y,onAppearCancelled:te=b}=t,ne=(e,t,n,r)=>{e._enterCancelled=r,Do(e,t?d:s),Do(e,t?u:o),n&&n()},re=(e,t)=>{e._isLeaving=!1,Do(e,f),Do(e,m),Do(e,p),t&&t()},ie=e=>(t,n)=>{let i=e?ee:y,o=()=>ne(t,e,n);xo(i,[t,o]),Oo(()=>{Do(t,e?c:a),Eo(t,e?d:s),So(i)||Ao(t,r,g,o)})};return l(t,{onBeforeEnter(e){xo(v,[e]),Eo(e,a),Eo(e,o)},onBeforeAppear(e){xo(C,[e]),Eo(e,c),Eo(e,u)},onEnter:ie(!1),onAppear:ie(!0),onLeave(e,t){e._isLeaving=!0;let n=()=>re(e,t);Eo(e,f),e._enterCancelled?(Eo(e,p),Po(e)):(Po(e),Eo(e,p)),Oo(()=>{e._isLeaving&&(Do(e,f),Eo(e,m),So(x)||Ao(e,r,_,n))}),xo(x,[e,n])},onEnterCancelled(e){ne(e,!1,void 0,!0),xo(b,[e])},onAppearCancelled(e){ne(e,!0,void 0,!0),xo(te,[e])},onLeaveCancelled(e){re(e),xo(S,[e])}})}function wo(e){if(e==null)return null;if(b(e))return[To(e.enter),To(e.leave)];{let t=To(e);return[t,t]}}function To(e){return pe(e)}function Eo(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[_o]||(e[_o]=new Set)).add(t)}function Do(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));let n=e[_o];n&&(n.delete(t),n.size||(e[_o]=void 0))}function Oo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}var ko=0;function Ao(e,t,n,r){let i=e._endId=++ko,a=()=>{i===e._endId&&r()};if(n!=null)return setTimeout(a,n);let{type:o,timeout:s,propCount:c}=jo(e,t);if(!o)return r();let l=o+`end`,u=0,d=()=>{e.removeEventListener(l,f),a()},f=t=>{t.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},s+1),e.addEventListener(l,f)}function jo(e,t){let n=window.getComputedStyle(e),r=e=>(n[e]||``).split(`, `),i=r(`${ho}Delay`),a=r(`${ho}Duration`),o=Mo(i,a),s=r(`${go}Delay`),c=r(`${go}Duration`),l=Mo(s,c),u=null,d=0,f=0;t===ho?o>0&&(u=ho,d=o,f=a.length):t===go?l>0&&(u=go,d=l,f=c.length):(d=Math.max(o,l),u=d>0?o>l?ho:go:null,f=u?u===ho?a.length:c.length:0);let p=u===ho&&/\b(?:transform|all)(?:,|$)/.test(r(`${ho}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:p}}function Mo(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((t,n)=>No(t)+No(e[n])))}function No(e){return e===`auto`?0:Number(e.slice(0,-1).replace(`,`,`.`))*1e3}function Po(e){return(e?e.ownerDocument:document).body.offsetHeight}function Fo(e,t,n){let r=e[_o];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var Io=Symbol(`_vod`),Lo=Symbol(`_vsh`),Ro=Symbol(``),zo=/(?:^|;)\s*display\s*:/;function Bo(e,t,n){let r=e.style,i=v(n),a=!1;if(n&&!i){if(t)if(v(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??Ho(r,t,``)}else for(let e in t)n[e]??Ho(r,e,``);for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?Ho(r,i,``):Ko(e,i,!v(t)&&t?t[i]:void 0,o)||Ho(r,i,o)}}else if(i){if(t!==n){let e=r[Ro];e&&(n+=`;`+e),r.cssText=n,a=zo.test(n)}}else t&&e.removeAttribute(`style`);Io in e&&(e[Io]=a?r.display:``,e[Lo]&&(r.display=`none`))}var Vo=/\s*!important$/;function Ho(e,t,n){if(p(n))n.forEach(n=>Ho(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=Go(e,t);Vo.test(n)?e.setProperty(se(r),n.replace(Vo,``),`important`):e[r]=n}}var Uo=[`Webkit`,`Moz`,`ms`],Wo={};function Go(e,t){let n=Wo[t];if(n)return n;let r=w(t);if(r!==`filter`&&r in e)return Wo[t]=r;r=ce(r);for(let n=0;n<Uo.length;n++){let i=Uo[n]+r;if(i in e)return Wo[t]=i}return t}function Ko(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&v(r)&&n===r}var qo=`http://www.w3.org/1999/xlink`;function Jo(e,t,n,r,i,a=Ce(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(qo,t.slice(6,t.length)):e.setAttributeNS(qo,t,n):n==null||a&&!we(n)?e.removeAttribute(t):e.setAttribute(t,a?``:y(n)?String(n):n)}function Yo(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?co(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=we(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Xo(e,t,n,r){e.addEventListener(t,n,r)}function Zo(e,t,n,r){e.removeEventListener(t,n,r)}var Qo=Symbol(`_vei`);function $o(e,t,n,r,i=null){let a=e[Qo]||(e[Qo]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=ns(t);r?Xo(e,n,a[t]=os(r,i),s):o&&(Zo(e,n,o,s),a[t]=void 0)}}var es=/(Once|Passive|Capture)$/,ts=/^on:?(?:Once|Passive|Capture)$/;function ns(e){let t,n;for(;(n=e.match(es))&&!ts.test(e);)t||={},e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===`:`?e.slice(3):se(e.slice(2)),t]}var rs=0,is=Promise.resolve(),as=()=>rs||=(is.then(()=>rs=0),Date.now());function os(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;let r=n.value;if(p(r)){let n=e.stopImmediatePropagation;e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0};let i=r.slice(),a=[e];for(let n=0;n<i.length&&!e._stopped;n++){let e=i[n];e&&mn(e,t,5,a)}}else mn(r,t,5,[e])};return n.value=e,n.attached=as(),n}var ss=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,cs=(e,t,n,r,i,a)=>{let o=i===`svg`;t===`class`?Fo(e,r,o):t===`style`?Bo(e,n,r):s(t)?c(t)||$o(e,t,n,r,a):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):ls(e,t,r,o))?(Yo(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&Jo(e,t,r,o,a,t!==`value`)):e._isVueCE&&(us(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!v(r)))?Yo(e,w(t),r,a,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),Jo(e,t,r,o))};function ls(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&ss(t)&&_(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return ss(t)&&v(n)?!1:t in e}function us(e,t){let n=e._def.props;if(!n)return!1;let r=w(t);return Array.isArray(n)?n.some(e=>w(e)===r):Object.keys(n).some(e=>w(e)===r)}var ds=e=>{let t=e.props[`onUpdate:modelValue`]||!1;return p(t)?e=>ue(t,e):t};function fs(e){e.target.composing=!0}function ps(e){let t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event(`input`)))}var ms=Symbol(`_assign`);function hs(e,t,n){return t&&(e=e.trim()),n&&(e=fe(e)),e}var gs={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[ms]=ds(i);let a=r||i.props&&i.props.type===`number`;Xo(e,t?`change`:`input`,t=>{t.target.composing||e[ms](hs(e.value,n,a))}),(n||a)&&Xo(e,`change`,()=>{e.value=hs(e.value,n,a)}),t||(Xo(e,`compositionstart`,fs),Xo(e,`compositionend`,ps),Xo(e,`change`,ps))},mounted(e,{value:t}){e.value=t??``},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:a}},o){if(e[ms]=ds(o),e.composing)return;let s=(a||e.type===`number`)&&!/^0\d/.test(e.value)?fe(e.value):e.value,c=t??``;if(s===c)return;let l=e.getRootNode();(l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===e&&e.type!==`range`&&(r&&t===n||i&&e.value.trim()===c)||(e.value=c)}},_s={deep:!0,created(e,t,n){e[ms]=ds(n),Xo(e,`change`,()=>{let t=e._modelValue,n=ys(e),r=e.checked,i=e[ms];if(p(t)){let e=De(t,n),a=e!==-1;if(r&&!a)i(t.concat(n));else if(!r&&a){let n=[...t];n.splice(e,1),i(n)}}else if(h(t)){let e=new Set(t);r?e.add(n):e.delete(n),i(e)}else i(bs(e,r))})},mounted:vs,beforeUpdate(e,t,n){e[ms]=ds(n),vs(e,t,n)}};function vs(e,{value:t,oldValue:n},r){e._modelValue=t;let i;if(p(t))i=De(t,r.props.value)>-1;else if(h(t))i=t.has(r.props.value);else{if(t===n)return;i=Ee(t,bs(e,!0))}e.checked!==i&&(e.checked=i)}function ys(e){return`_value`in e?e._value:e.value}function bs(e,t){let n=t?`_trueValue`:`_falseValue`;return n in e?e[n]:t}var xs=[`ctrl`,`shift`,`alt`,`meta`],Ss={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>xs.some(n=>e[`${n}Key`]&&!t.includes(n))},Cs=(e,t)=>{if(!e)return e;let n=e._withMods||={},r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=Ss[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},ws={esc:`escape`,space:` `,up:`arrow-up`,left:`arrow-left`,right:`arrow-right`,down:`arrow-down`,delete:`backspace`},Ts=(e,t)=>{let n=e._withKeys||={},r=t.join(`.`);return n[r]||(n[r]=(n=>{if(!(`key`in n))return;let r=se(n.key);if(t.some(e=>e===r||ws[e]===r))return e(n)}))},Es=l({patchProp:cs},mo),Ds;function Os(){return Ds||=$i(Es)}var ks=((...e)=>{let t=Os().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=js(e);if(!r)return;let i=t._component;!_(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,As(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function As(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function js(e){return v(e)?document.querySelector(e):e}var Ms=`modulepreload`,Ns=function(e){return`/`+e},Ps={},Fs=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=Ns(t,n),t=s(t),t in Ps)return;Ps[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:Ms,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Is=`true`,Ls=`false`,Rs=Is===`true`,zs=Ls===`true`;function Bs(e={}){let{immediate:t=!1,onNeedReload:n,onNeedRefresh:r,onOfflineReady:i,onRegistered:a,onRegisteredSW:o,onRegisterError:s}=e,c,l,u,d=async(e=!0)=>{await l,Rs||u?.()};async function f(){if(`serviceWorker`in navigator){if(c=await Fs(async()=>{let{Workbox:e}=await import(`./workbox-window.prod.es5-Bd17z0YL.js`);return{Workbox:e}},[]).then(({Workbox:e})=>new e(`/sw.js`,{scope:`/`,type:`classic`})).catch(e=>{s?.(e)}),!c)return;if(u=()=>{c?.messageSkipWaiting()},!zs)if(Rs)c.addEventListener(`activated`,e=>{(e.isUpdate||e.isExternal)&&(n?n():window.location.reload())}),c.addEventListener(`installed`,e=>{e.isUpdate||i?.()});else{let e=!1,t=()=>{e=!0,c?.addEventListener(`controlling`,e=>{e.isUpdate&&(n?n():window.location.reload())}),r?.()};c.addEventListener(`installed`,n=>{n.isUpdate===void 0?n.isExternal===void 0?!e&&i?.():n.isExternal?t():!e&&i?.():n.isUpdate||i?.()}),c.addEventListener(`waiting`,t)}c.register({immediate:t}).then(e=>{o?o(`/sw.js`,e):a?.(e)}).catch(e=>{s?.(e)})}}return l=f(),d}function Vs(e){return typeof e==`object`||`displayName`in e||`props`in e||`__vccOpts`in e}function Hs(e){return e.__esModule||e[Symbol.toStringTag]===`Module`||e.default&&Vs(e.default)}var R=Object.assign;function Us(e,t){let n={};for(let r in t){let i=t[r];n[r]=Gs(i)?i.map(e):e(i)}return n}var Ws=()=>{},Gs=Array.isArray;function Ks(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}var qs=Symbol(``);function Js(e,t){return R(Error(),{type:e,[qs]:!0},t)}function Ys(e,t){return e instanceof Error&&qs in e&&(t==null||!!(e.type&t))}var Xs=Symbol(``),Zs=Symbol(``),Qs=Symbol(``),$s=Symbol(``),ec=Symbol(``);function tc(){return Bn(Qs)}function nc(e){return Bn($s)}var rc=typeof document<`u`,ic=/#/g,ac=/&/g,oc=/\//g,sc=/=/g,cc=/\?/g,lc=/\+/g,uc=/%5B/g,dc=/%5D/g,fc=/%5E/g,pc=/%60/g,mc=/%7B/g,hc=/%7C/g,gc=/%7D/g,_c=/%20/g;function vc(e){return e==null?``:encodeURI(``+e).replace(hc,`|`).replace(uc,`[`).replace(dc,`]`)}function yc(e){return vc(e).replace(mc,`{`).replace(gc,`}`).replace(fc,`^`)}function bc(e){return vc(e).replace(lc,`%2B`).replace(_c,`+`).replace(ic,`%23`).replace(ac,`%26`).replace(pc,"`").replace(mc,`{`).replace(gc,`}`).replace(fc,`^`)}function xc(e){return bc(e).replace(sc,`%3D`)}function Sc(e){return vc(e).replace(ic,`%23`).replace(cc,`%3F`)}function Cc(e){return Sc(e).replace(oc,`%2F`)}function wc(e){if(e==null)return null;try{return decodeURIComponent(``+e)}catch{}return``+e}var Tc=/\/$/,Ec=e=>e.replace(Tc,``);function Dc(e,t,n=`/`){let r,i={},a=``,o=``,s=t.indexOf(`#`),c=t.indexOf(`?`);return c=s>=0&&c>s?-1:c,c>=0&&(r=t.slice(0,c),a=t.slice(c,s>0?s:t.length),i=e(a.slice(1))),s>=0&&(r||=t.slice(0,s),o=t.slice(s,t.length)),r=Fc(r??t,n),{fullPath:r+a+o,path:r,query:i,hash:wc(o)}}function Oc(e,t){let n=t.query?e(t.query):``;return t.path+(n&&`?`)+n+(t.hash||``)}function kc(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||`/`}function Ac(e,t,n){let r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&jc(t.matched[r],n.matched[i])&&Mc(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function jc(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Mc(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!Nc(e[n],t[n]))return!1;return!0}function Nc(e,t){return Gs(e)?Pc(e,t):Gs(t)?Pc(t,e):(e&&e.valueOf())===(t&&t.valueOf())}function Pc(e,t){return Gs(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):e.length===1&&e[0]===t}function Fc(e,t){if(e.startsWith(`/`))return e;if(!e)return t;let n=t.split(`/`),r=e.split(`/`),i=r[r.length-1];(i===`..`||i===`.`)&&r.push(``);let a=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==`.`)if(s===`..`)a>1&&a--;else break;return n.slice(0,a).join(`/`)+`/`+r.slice(o).join(`/`)}var Ic={path:`/`,name:void 0,params:{},query:{},hash:``,fullPath:`/`,matched:[],meta:{},redirectedFrom:void 0};function Lc(e){if(!e)if(rc){let t=document.querySelector(`base`);e=t&&t.getAttribute(`href`)||`/`,e=e.replace(/^\w+:\/\/[^/]+/,``)}else e=`/`;return e[0]!==`/`&&e[0]!==`#`&&(e=`/`+e),Ec(e)}var Rc=/^[^#]+#/;function zc(e,t){return e.replace(Rc,`#`)+t}function Bc(e,t){let n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}var Vc=()=>({left:window.scrollX,top:window.scrollY});function Hc(e){let t;if(`el`in e){let n=e.el,r=typeof n==`string`&&n.startsWith(`#`),i=typeof n==`string`?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Bc(i,e)}else t=e;`scrollBehavior`in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left==null?window.scrollX:t.left,t.top==null?window.scrollY:t.top)}function Uc(e,t){return(history.state?history.state.position-t:-1)+e}var Wc=new Map;function Gc(e,t){Wc.set(e,t)}function Kc(e){let t=Wc.get(e);return Wc.delete(e),t}function qc(e){return typeof e==`string`||e&&typeof e==`object`}function Jc(e){return typeof e==`string`||typeof e==`symbol`}function Yc(e){let t={};if(e===``||e===`?`)return t;let n=(e[0]===`?`?e.slice(1):e).split(`&`);for(let e=0;e<n.length;++e){let r=n[e].replace(lc,` `),i=r.indexOf(`=`),a=wc(i<0?r:r.slice(0,i)),o=i<0?null:wc(r.slice(i+1));if(a in t){let e=t[a];Gs(e)||(e=t[a]=[e]),e.push(o)}else t[a]=o}return t}function Xc(e){let t=``;for(let n in e){let r=e[n];if(n=xc(n),r==null){r!==void 0&&(t+=(t.length?`&`:``)+n);continue}(Gs(r)?r.map(e=>e&&bc(e)):[r&&bc(r)]).forEach(e=>{e!==void 0&&(t+=(t.length?`&`:``)+n,e!=null&&(t+=`=`+e))})}return t}function Zc(e){let t={};for(let n in e){let r=e[n];r!==void 0&&(t[n]=Gs(r)?r.map(e=>e==null?null:``+e):r==null?r:``+r)}return t}function Qc(){let e=[];function t(t){return e.push(t),()=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function $c(e,t,n,r,i,a=e=>e()){let o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,c)=>{let l=e=>{e===!1?c(Js(4,{from:n,to:t})):e instanceof Error?c(e):qc(e)?c(Js(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&typeof e==`function`&&o.push(e),s())},u=a(()=>e.call(r&&r.instances[i],t,n,l)),d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch(e=>c(e))})}function el(e,t,n,r,i=e=>e()){let a=[];for(let o of e)for(let e in o.components){let s=o.components[e];if(!(t!==`beforeRouteEnter`&&!o.instances[e]))if(Vs(s)){let c=(s.__vccOpts||s)[t];c&&a.push($c(c,n,r,o,e,i))}else{let c=s();a.push(()=>c.then(a=>{if(!a)throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);let s=Hs(a)?a.default:a;o.mods[e]=a,o.components[e]=s;let c=(s.__vccOpts||s)[t];return c&&$c(c,n,r,o,e,i)()}))}}return a}function tl(e,t){let n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){let a=t.matched[o];a&&(e.matched.find(e=>jc(e,a))?r.push(a):n.push(a));let s=e.matched[o];s&&(t.matched.find(e=>jc(e,s))||i.push(s))}return[n,r,i]}var nl=()=>location.protocol+`//`+location.host;function rl(e,t){let{pathname:n,search:r,hash:i}=t,a=e.indexOf(`#`);if(a>-1){let t=i.includes(e.slice(a))?e.slice(a).length:1,n=i.slice(t);return n[0]!==`/`&&(n=`/`+n),kc(n,``)}return kc(n,e)+r+i}function il(e,t,n,r){let i=[],a=[],o=null,s=({state:a})=>{let s=rl(e,location),c=n.value,l=t.value,u=0;if(a){if(n.value=s,t.value=a,o&&o===c){o=null;return}u=l?a.position-l.position:0}else r(s);i.forEach(e=>{e(n.value,c,{delta:u,type:`pop`,direction:u?u>0?`forward`:`back`:``})})};function c(){o=n.value}function l(e){i.push(e);let t=()=>{let t=i.indexOf(e);t>-1&&i.splice(t,1)};return a.push(t),t}function u(){if(document.visibilityState===`hidden`){let{history:e}=window;if(!e.state)return;e.replaceState(R({},e.state,{scroll:Vc()}),``)}}function d(){for(let e of a)e();a=[],window.removeEventListener(`popstate`,s),window.removeEventListener(`pagehide`,u),document.removeEventListener(`visibilitychange`,u)}return window.addEventListener(`popstate`,s),window.addEventListener(`pagehide`,u),document.addEventListener(`visibilitychange`,u),{pauseListeners:c,listen:l,destroy:d}}function al(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Vc():null}}function ol(e){let{history:t,location:n}=window,r={value:rl(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(r,a,o){let s=e.indexOf(`#`),c=s>-1?(n.host&&document.querySelector(`base`)?e:e.slice(s))+r:nl()+e+r;try{t[o?`replaceState`:`pushState`](a,``,c),i.value=a}catch(e){console.error(e),n[o?`replace`:`assign`](c)}}function o(e,n){a(e,R({},t.state,al(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}function s(e,n){let o=R({},i.value,t.state,{forward:e,scroll:Vc()});a(o.current,o,!0),a(e,R({},al(r.value,e,null),{position:o.position+1},n),!1),r.value=e}return{location:r,state:i,push:s,replace:o}}function sl(e){e=Lc(e);let t=ol(e),n=il(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}let i=R({location:``,base:e,go:r,createHref:zc.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function cl(e){return e=location.host?e||location.pathname+location.search:``,e.includes(`#`)||(e+=`#`),sl(e)}var ll={type:0,value:``},ul=/[a-zA-Z0-9_]/;function dl(e){if(!e)return[[]];if(e===`/`)return[[ll]];if(!e.startsWith(`/`))throw Error(`Invalid path "${e}"`);function t(e){throw Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n,i=[],a;function o(){a&&i.push(a),a=[]}let s=0,c,l=``,u=``;function d(){l&&=(n===0?a.push({type:0,value:l}):n===1||n===2||n===3?(a.length>1&&(c===`*`||c===`+`)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:l,regexp:u,repeatable:c===`*`||c===`+`,optional:c===`*`||c===`?`})):t(`Invalid state to consume buffer`),``)}function f(){l+=c}for(;s<e.length;)switch(c=e[s++],n){case 0:c===`\\`?(r=n,n=4):c===`/`?(l&&d(),o()):c===`:`?(d(),n=1):f();break;case 4:f(),n=r;break;case 1:c===`(`?n=2:ul.test(c)?f():(d(),n=0,c!==`*`&&c!==`?`&&c!==`+`&&s--);break;case 2:c===`)`?u[u.length-1]==`\\`?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!==`*`&&c!==`?`&&c!==`+`&&s--,u=``;break;default:t(`Unknown state`);break}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}var fl=`[^/]+?`,pl={sensitive:!1,strict:!1,start:!0,end:!0},ml=/[.+*?^${}()[\]/\\]/g;function hl(e,t){let n=R({},pl,t),r=[],i=n.start?`^`:``,a=[];for(let t of e){let e=t.length?[]:[90];n.strict&&!t.length&&(i+=`/`);for(let r=0;r<t.length;r++){let o=t[r],s=40+(n.sensitive?.25:0);if(o.type===0)r||(i+=`/`),i+=o.value.replace(ml,`\\$&`),s+=40;else if(o.type===1){let{value:e,repeatable:n,optional:c,regexp:l}=o;a.push({name:e,repeatable:n,optional:c});let u=l||fl;if(u!==fl){s+=10;try{RegExp(`(${u})`)}catch(t){throw Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(d=c&&t.length<2?`(?:/${d})`:`/`+d),c&&(d+=`?`),i+=d,s+=20,c&&(s+=-8),n&&(s+=-20),u===`.*`&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){let e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+=`/?`),n.end?i+=`$`:n.strict&&!i.endsWith(`/`)&&(i+=`(?:/|$)`);let o=new RegExp(i,n.sensitive?``:`i`);function s(e){let t=e.match(o),n={};if(!t)return null;for(let e=1;e<t.length;e++){let r=t[e]||``,i=a[e-1];n[i.name]=r&&i.repeatable?r.split(`/`):r}return n}function c(t){let n=``,r=!1;for(let i of e){(!r||!n.endsWith(`/`))&&(n+=`/`),r=!1;for(let e of i)if(e.type===0)n+=e.value;else if(e.type===1){let{value:a,repeatable:o,optional:s}=e,c=a in t?t[a]:``;if(Gs(c)&&!o)throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);let l=Gs(c)?c.join(`/`):c;if(!l)if(s)i.length<2&&(n.endsWith(`/`)?n=n.slice(0,-1):r=!0);else throw Error(`Missing required param "${a}"`);n+=l}}return n||`/`}return{re:o,score:r,keys:a,parse:s,stringify:c}}function gl(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function _l(e,t){let n=0,r=e.score,i=t.score;for(;n<r.length&&n<i.length;){let e=gl(r[n],i[n]);if(e)return e;n++}if(Math.abs(i.length-r.length)===1){if(vl(r))return 1;if(vl(i))return-1}return i.length-r.length}function vl(e){let t=e[e.length-1];return e.length>0&&t[t.length-1]<0}var yl={strict:!1,end:!0,sensitive:!1};function bl(e,t,n){let r=R(hl(dl(e.path),n),{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function xl(e,t){let n=[],r=new Map;t=Ks(yl,t);function i(e){return r.get(e)}function a(e,n,r){let i=!r,s=Cl(e);s.aliasOf=r&&r.record;let l=Ks(t,e),u=[s];if(`alias`in e){let t=typeof e.alias==`string`?[e.alias]:e.alias;for(let e of t)u.push(Cl(R({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s})))}let d,f;for(let t of u){let{path:u}=t;if(n&&u[0]!==`/`){let e=n.record.path,r=e[e.length-1]===`/`?``:`/`;t.path=n.record.path+(u&&r+u)}if(d=bl(t,n,l),r?r.alias.push(d):(f||=d,f!==d&&f.alias.push(d),i&&e.name&&!Tl(d)&&o(e.name)),kl(d)&&c(d),s.children){let e=s.children;for(let t=0;t<e.length;t++)a(e[t],d,r&&r.children[t])}r||=d}return f?()=>{o(f)}:Ws}function o(e){if(Jc(e)){let t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function s(){return n}function c(e){let t=Dl(e,n);n.splice(t,0,e),e.record.name&&!Tl(e)&&r.set(e.record.name,e)}function l(e,t){let i,a={},o,s;if(`name`in e&&e.name){if(i=r.get(e.name),!i)throw Js(1,{location:e});s=i.record.name,a=R(Sl(t.params,i.keys.filter(e=>!e.optional).concat(i.parent?i.parent.keys.filter(e=>e.optional):[]).map(e=>e.name)),e.params&&Sl(e.params,i.keys.map(e=>e.name))),o=i.stringify(a)}else if(e.path!=null)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name,i.keys.forEach(e=>{e.optional&&!a[e.name]&&delete a[e.name]}));else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw Js(1,{location:e,currentLocation:t});s=i.record.name,a=R({},t.params,e.params),o=i.stringify(a)}let c=[],l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:s,path:o,params:a,matched:c,meta:El(c)}}e.forEach(e=>a(e));function u(){n.length=0,r.clear()}return{addRoute:a,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:s,getRecordMatcher:i}}function Sl(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function Cl(e){let t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:wl(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:`components`in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function wl(e){let t={},n=e.props||!1;if(`component`in e)t.default=n;else for(let r in e.components)t[r]=typeof n==`object`?n[r]:n;return t}function Tl(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function El(e){return e.reduce((e,t)=>R(e,t.meta),{})}function Dl(e,t){let n=0,r=t.length;for(;n!==r;){let i=n+r>>1;_l(e,t[i])<0?r=i:n=i+1}let i=Ol(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function Ol(e){let t=e;for(;t=t.parent;)if(kl(t)&&_l(e,t)===0)return t}function kl({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Al(e){let t=Bn(Qs),n=Bn($s),r=L(()=>{let n=j(e.to);return t.resolve(n)}),i=L(()=>{let{matched:e}=r.value,{length:t}=e,i=e[t-1],a=n.matched;if(!i||!a.length)return-1;let o=a.findIndex(jc.bind(null,i));if(o>-1)return o;let s=Fl(e[t-2]);return t>1&&Fl(i)===s&&a[a.length-1].path!==s?a.findIndex(jc.bind(null,e[t-2])):o}),a=L(()=>i.value>-1&&Pl(n.params,r.value.params)),o=L(()=>i.value>-1&&i.value===n.matched.length-1&&Mc(n.params,r.value.params));function s(n={}){if(Nl(n)){let n=t[j(e.replace)?`replace`:`push`](j(e.to)).catch(Ws);return e.viewTransition&&typeof document<`u`&&`startViewTransition`in document&&document.startViewTransition(()=>n),n}return Promise.resolve()}return{route:r,href:L(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}function jl(e){return e.length===1?e[0]:e}var Ml=Sr({name:`RouterLink`,compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:`page`},viewTransition:Boolean},useLink:Al,setup(e,{slots:t}){let n=Vt(Al(e)),{options:r}=Bn(Qs),i=L(()=>({[Il(e.activeClass,r.linkActiveClass,`router-link-active`)]:n.isActive,[Il(e.exactActiveClass,r.linkExactActiveClass,`router-link-exact-active`)]:n.isExactActive}));return()=>{let r=t.default&&jl(t.default(n));return e.custom?r:io(`a`,{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function Nl(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){let t=e.currentTarget.getAttribute(`target`);if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Pl(e,t){for(let n in t){let r=t[n],i=e[n];if(typeof r==`string`){if(r!==i)return!1}else if(!Gs(i)||i.length!==r.length||r.some((e,t)=>e.valueOf()!==i[t].valueOf()))return!1}return!0}function Fl(e){return e?e.aliasOf?e.aliasOf.path:e.path:``}var Il=(e,t,n)=>e??t??n,Ll=Sr({name:`RouterView`,inheritAttrs:!1,props:{name:{type:String,default:`default`},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){let r=Bn(ec),i=L(()=>e.route||r.value),a=Bn(Zs,0),o=L(()=>{let e=j(a),{matched:t}=i.value,n;for(;(n=t[e])&&!n.components;)e++;return e}),s=L(()=>i.value.matched[o.value]);zn(Zs,L(()=>o.value+1)),zn(Xs,s),zn(ec,i);let c=A();return Un(()=>[c.value,s.value,e.name],([e,t,n],[r,i,a])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),e&&t&&(!i||!jc(t,i)||!r)&&(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:`post`}),()=>{let r=i.value,a=e.name,o=s.value,l=o&&o.components[a];if(!l)return Rl(n.default,{Component:l,route:r});let u=o.props[a],d=io(l,R({},u?u===!0?r.params:typeof u==`function`?u(r):u:null,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(o.instances[a]=null)},ref:c}));return Rl(n.default,{Component:d,route:r})||d}}});function Rl(e,t){if(!e)return null;let n=e(t);return n.length===1?n[0]:n}var zl=Ll;function Bl(e){let t=xl(e.routes,e),n=e.parseQuery||Yc,r=e.stringifyQuery||Xc,i=e.history,a=Qc(),o=Qc(),s=Qc(),c=$t(Ic),l=Ic;rc&&e.scrollBehavior&&`scrollRestoration`in history&&(history.scrollRestoration=`manual`);let u=Us.bind(null,e=>``+e),d=Us.bind(null,Cc),f=Us.bind(null,wc);function p(e,n){let r,i;return Jc(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function m(e){let n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function h(){return t.getRoutes().map(e=>e.record)}function g(e){return!!t.getRecordMatcher(e)}function _(e,a){if(a=R({},a||c.value),typeof e==`string`){let r=Dc(n,e,a.path),o=t.resolve({path:r.path},a),s=i.createHref(r.fullPath);return R(r,o,{params:f(o.params),redirectedFrom:void 0,href:s})}let o;if(e.path!=null)o=R({},e,{path:Dc(n,e.path,a.path).path});else{let t=R({},e.params);for(let e in t)t[e]??delete t[e];o=R({},e,{params:d(t)}),a.params=d(a.params)}let s=t.resolve(o,a),l=e.hash||``;s.params=u(f(s.params));let p=Oc(r,R({},e,{hash:yc(l),path:s.path})),m=i.createHref(p);return R({fullPath:p,hash:l,query:r===Xc?Zc(e.query):e.query||{}},s,{redirectedFrom:void 0,href:m})}function v(e){return typeof e==`string`?Dc(n,e,c.value.path):R({},e)}function y(e,t){if(l!==e)return Js(8,{from:t,to:e})}function b(e){return C(e)}function x(e){return b(R(v(e),{replace:!0}))}function S(e,t){let n=e.matched[e.matched.length-1];if(n&&n.redirect){let{redirect:r}=n,i=typeof r==`function`?r(e,t):r;return typeof i==`string`&&(i=i.includes(`?`)||i.includes(`#`)?i=v(i):{path:i},i.params={}),R({query:e.query,hash:e.hash,params:i.path==null?e.params:{}},i)}}function C(e,t){let n=l=_(e),i=c.value,a=e.state,o=e.force,s=e.replace===!0,u=S(n,i);if(u)return C(R(v(u),{state:typeof u==`object`?R({},a,u.state):a,force:o,replace:s}),t||n);let d=n;d.redirectedFrom=t;let f;return!o&&Ac(r,i,n)&&(f=Js(16,{to:d,from:i}),de(i,i,!0,!1)),(f?Promise.resolve(f):ne(d,i)).catch(e=>Ys(e)?Ys(e,2)?e:ue(e):le(e,d,i)).then(e=>{if(e){if(Ys(e,2))return C(R({replace:s},v(e.to),{state:typeof e.to==`object`?R({},a,e.to.state):a,force:o}),t||d)}else e=ie(d,i,!0,s,a);return re(d,i,e),e})}function ee(e,t){let n=y(e,t);return n?Promise.reject(n):Promise.resolve()}function te(e){let t=me.values().next().value;return t&&typeof t.runWithContext==`function`?t.runWithContext(e):e()}function ne(e,t){let n,[r,i,s]=tl(e,t);n=el(r.reverse(),`beforeRouteLeave`,e,t);for(let i of r)i.leaveGuards.forEach(r=>{n.push($c(r,e,t))});let c=ee.bind(null,e,t);return n.push(c),ge(n).then(()=>{n=[];for(let r of a.list())n.push($c(r,e,t));return n.push(c),ge(n)}).then(()=>{n=el(i,`beforeRouteUpdate`,e,t);for(let r of i)r.updateGuards.forEach(r=>{n.push($c(r,e,t))});return n.push(c),ge(n)}).then(()=>{n=[];for(let r of s)if(r.beforeEnter)if(Gs(r.beforeEnter))for(let i of r.beforeEnter)n.push($c(i,e,t));else n.push($c(r.beforeEnter,e,t));return n.push(c),ge(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=el(s,`beforeRouteEnter`,e,t,te),n.push(c),ge(n))).then(()=>{n=[];for(let r of o.list())n.push($c(r,e,t));return n.push(c),ge(n)}).catch(e=>Ys(e,8)?e:Promise.reject(e))}function re(e,t,n){s.list().forEach(r=>te(()=>r(e,t,n)))}function ie(e,t,n,r,a){let o=y(e,t);if(o)return o;let s=t===Ic,l=rc?history.state:{};n&&(r||s?i.replace(e.fullPath,R({scroll:s&&l&&l.scroll},a)):i.push(e.fullPath,a)),c.value=e,de(e,t,n,s),ue()}let ae;function w(){ae||=i.listen((e,t,n)=>{if(!he.listening)return;let r=_(e),a=S(r,he.currentRoute.value);if(a){C(R(a,{replace:!0,force:!0}),r).catch(Ws);return}l=r;let o=c.value;rc&&Gc(Uc(o.fullPath,n.delta),Vc()),ne(r,o).catch(e=>Ys(e,12)?e:Ys(e,2)?(C(R(v(e.to),{force:!0}),r).then(e=>{Ys(e,20)&&!n.delta&&n.type===`pop`&&i.go(-1,!1)}).catch(Ws),Promise.reject()):(n.delta&&i.go(-n.delta,!1),le(e,r,o))).then(e=>{e||=ie(r,o,!1),e&&(n.delta&&!Ys(e,8)?i.go(-n.delta,!1):n.type===`pop`&&Ys(e,20)&&i.go(-1,!1)),re(r,o,e)}).catch(Ws)})}let oe=Qc(),se=Qc(),ce;function le(e,t,n){ue(e);let r=se.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function T(){return ce&&c.value!==Ic?Promise.resolve():new Promise((e,t)=>{oe.add([e,t])})}function ue(e){return ce||(ce=!e,w(),oe.list().forEach(([t,n])=>e?n(e):t()),oe.reset()),e}function de(t,n,r,i){let{scrollBehavior:a}=e;if(!rc||!a)return Promise.resolve();let o=!r&&Kc(Uc(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return wn().then(()=>a(t,n,o)).then(e=>t===c.value&&e&&Hc(e)).catch(e=>t===c.value&&le(e,t,n))}let fe=e=>i.go(e),pe,me=new Set,he={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,clearRoutes:t.clearRoutes,hasRoute:g,getRoutes:h,resolve:_,options:e,push:b,replace:x,go:fe,back:()=>fe(-1),forward:()=>fe(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:se.add,isReady:T,install(e){e.component(`RouterLink`,Ml),e.component(`RouterView`,zl),e.config.globalProperties.$router=he,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>j(c)}),rc&&!pe&&c.value===Ic&&(pe=!0,b(i.location).catch(e=>{}));let t={};for(let e in Ic)Object.defineProperty(t,e,{get:()=>c.value[e],enumerable:!0});e.provide(Qs,he),e.provide($s,Ht(t)),e.provide(ec,c);let n=e.unmount;me.add(e),e.unmount=function(){me.delete(e),me.size<1&&(l=Ic,ae&&ae(),ae=null,c.value=Ic,pe=!1,ce=!1),n()}}};function ge(e){return e.reduce((e,t)=>e.then(()=>te(t)),Promise.resolve())}return he}var Vl=`Murid's Manual

Information and Guidance for
Dervishes of the
Tariqa al Ansari
Qadiri Rifa’i Sufi Order

Compiled With Permission From
Es-Seyyid Es-Shaykh Taner Ansari
Tarsusi er Rifa’i el Qadiri

Murid’s Manual Revised ©2009
Ansari Qadiri Rifa’i Tariqa
Manual Number 3.1

No parts may be reproduced in any manner
without the written permission of the publisher.

Qadiri Rifa’i Tariqa
Nassau, NY 12123 USA
Tel: 518-766-2047
E-mail: qadiri.rifai.tariqa@gmail.com
`,Hl=`Contents

Statement From Shaykh Taner 02
Sufism An Introduction 03
Origins of Sufism 05
The History of the Qadiri Rifa’i Order 06
A Biography of Abdul Qadir Geylani 07
A Biography of Ahmed er Rifa’i 13
32 Fardz (obligations) of a Muslim 15
Levels of Nafs 17
Maqam (Spiritual Station) of Arifs (Gnostic) 21
The Crown of Prophet Muhammed (a.s.) 25
Understanding Personal and Group Zikr 26
Qadiri Rifa’i Congregational Zikr Script 31
Understanding Salat 38
Congregational Salat 40
Adab of Du’a 45
Silsillah of Qadiri Rifa’i Tariqa 46
Adab: Courtesies Practiced on the Path 51
Allah’s 99 Beautiful Names 60
Glossary of Sufi Terminology 75
For New Students 81
Tithing to the Tariqat 83
Suggested Readings 84
Turkish Pronunciation Guide 85

Statement From Shaykh Taner
When we open your heart and you have the connection to Allah then you are also going to get
knowledge in Haqq al Yaqin. Abdul Qadir Geylani said we need Sufism on earth because we are the ones
who show people how to connect and communicate with Allah. Also, when somebody finds Allah and
connects to It in his heart then he is never lonely. One time my Shaykh told me, you think war is keeping
the world together; it is love that is keeping the world together. True love is expressed, lived, understood,
experienced through Sufism within yourself through your heart with Allah only. That’s why, when you are
asked to give speeches or answer questions, which you may, your theme will be this: There is enough
violence on the earth, earth can’t take this anymore and the human race has to see itself as one race and
protect its unity and love and tolerate each other and live peacefully so that we can survive and keep our
environment intact. If we kill nature the world eco-system will die, it will be like sitting on the tip of a
branch and cutting the branch where it connects with the tree. Being thankful to Allah means taking action
by taking care of the human beings first, then taking care of your environment, animals, plants, everything.
What makes everything live is peace.
Our tariqa past, present, and future, whether it is Qadiri Rifa’i or Ansari Tariqa, has never been in
politics, has never taken part in politics and will never take part in politics. We believe in secularism. We
are not afraid of governments, only of Allah. We are only on Allah’s side and all people belong to Allah no
matter what party, country, race, religion, whether they are good or bad they belong to Allah and Allah
takes care of them, nourishes them and watches over them. They are responsible for their own actions to
Allah. We are here to serve Allah. To whomever He sends us to serve and help we will help, no
discrimination. When you give speeches you talk about peace, love and togetherness, how generous Allah
is, how grateful we should be, how giving and protecting Allah is, and the 99 names of Allah - give a good
explanation of Allah. That is what present people need; Allah is the light of the universe. Allah is the base
energy for everything. All of creation is made of this energy and by this energy and of this light. Our job is
to fight our nafs (ego) to become better human beings, who will tolerate the differences in each other. Our
unity is in our differences, not as most people think in our likenesses. What makes us a whole are our
differences.
`,Ul=`Sufism An Introduction
by Shaykh Taner
Religion is a Science. It becomes Mysticism when you
don’t understand what you are doing. —Shaykh Taner
Bismillahir Rahmanir Rahim. What is the difference between Sufism in America, and Sufism in
Turkey? In Turkey, everybody already believes in Allah, in His Prophets, in the last day, in the first day,
and in between. Everything is settled. Now they are looking for a deeper understanding of Allah. They
want to find a way to Allah, to be with Allah and experience Allah. The way is called Tariqat.
Sufism everywhere is based on Muhammed, peace be upon him (pbuh) or aleyhi salaam (a.s.). If
you don’t recognize Muhammed (a.s.), there is no Sufism. In order to get to Allah, you have to go past the
seven layers of nafs through the doors of Shariat, Tariqat, Haqqiqat, and Marifat. Shariat is Muhammed’s
(a.s.) rules, regulations, and laws of religion; it is what our Prophet (a.s.) said. Tariqat is what he did; his
actions, how he did all these things. Haqqiqat is his reality; in order to recognize Muhammed (a.s.) you
have to recognize his reality, and vice versa. By recognizing this, you can recognize your own origin. Your
origin is connected to this reality. The existence of the universe depends on this. When you close your eyes
and you call yourself a Sufi without this recognition, you go nowhere.
My job is to tell the truth and nothing but the truth at all times. Allah said in the Quran-i-Kerim:
“One must speak the truth or be quiet.” Don’t talk about a subject you don’t know. So, if you ask me
questions that I don’t know the answer to, I say, “I don’t know,” because I won’t speak about a subject I
don’t know about. You may ask, “What kind of a Shaykh is he if he doesn’t know?” I don’t know. What
can I do? I know what Allah lets me know, and I don’t know what He doesn’t let me know. The Prophet
Muhammed (a.s.) was asked a question once, and he answered, “I’ll tell you tomorrow.” He was expecting
to speak to the angel Gabriel and Gabriel was going to give him the answer. For ten days Gabriel didn’t
show up. And Allah said to Muhammed, “Say, ‘Insha’Allah (As Allah wills).’ for there is no guarantee.”
Who am I to say, “I’ll tell you tomorrow”? I can’t do that. Nobody can do that. Sufism is this: surrendering,
submitting, truthfulness.
Back in Turkey, Sufism is action. Less talk, more action. Here in America there is more talk, less
action. Everybody talks about Sufism. It’s an intellectual club. Everybody has to talk and read books about
Sufism. How are they living? They are living the same way as they were living before they became a Sufi.
They are living the same way as they were living before they read a hundred books. Now what did all these
books do for them?
Sufism is a way of life. You have to live life. Allah wants you to live to become a human being.
That’s the road to take, to be a real human being. You cannot act and do what Allah tells you to do until
you know what Allah tells you to do. Right? So what is the purpose of the Shaykh? It’s to show you the
path. Just by joining a Sufi order doesn’t mean that you are going to go to Allah. You have to do what the
Shaykh tells you to do. He does not order you to do these things. He shows the way. If you want to go this
far, then you do this. If you don’t, if you want to go only this far, then you stay there. If you want to go
further, then you have to do this. If you don’t want to do it, that’s fine with me, I don’t care. If that’s as far
as you want to go, that’s fine with me. The Shaykh is the one who can take you from one level to the next
level and the next level until you get to Allah. He holds your hand and takes you to Allah: then you are
finished.
Here is the situation from a different angle. There is a spiritual being, who does not have a
material body. Because he does not have a material body he does not have the perceptions and
requirements and maintenance of the material body. So the spiritual being chooses a material body that can
fit his needs or situation as closely as it can get. This body is working on certain motives that is given to it
for its survival. This body does not have the finesse and the logic to see the outer limits of its motivational
system. He gets hungry; he eats food wherever he finds it. He has no rights and wrongs and does not know
what is good and what is not and so on.
But the spiritual being knows all the limitations. He knows what's good, what's bad. He knows his
Creator and knows what he wants. He is conscious of his existence and its purpose. So the spiritual being
`,Wl=`rides on this animal body. It becomes one with its perceptions. Thus, he understands the material world,
which is Allah's zahir (outer). In this form he has to prove that he is worthy of Allah's love. He has to prove
his sincerity, his loyalty and his focus on Allah, so that he can get in Allah's circle and not be kicked out.
Allah, the Most High, sends these people “helpers” to help them to reach their goal. On the other
hand, He also sends distractions for those who'd like to disregard the goal of reaching Allah. He gives
everybody a choice and ‘helpers’ to go in the direction they choose. A Shaykh is a Wali, a servant of Allah,
gifted to humanity to help them achieve their goals to reach Allah or Allah's closeness. He helps establish
love between you and Allah with Allah's firsthand intervention and His qualities.
When you choose a Shaykh or when a Shaykh chooses you, then the spirituality is with you to
convert you from earth to gold so you can be true with the True. Allah's consciousness will take over your
consciousness. This is another definition of surrender. When you become part of the sea, then you can
know the sea. Loved and beloved, wanter and wanted, come together with love and know one another.
The Shaykh then is the one who gives all the talks and puts out the rules and theatrical things and
here we go. People criticize me. Why isn’t he doing it this way? I cannot be as you want me to be, because
there are many of you. If I want to try to be like you, and another person isn’t like you, then I have to be
like him, and then like another. I am trying to be like what Allah wants me to be and what I’m telling you is
the same. Try to be what Allah wants you to be, not like what your friends want you to be.
Your number one priority should be Allah. Second priority: Allah. Third priority: Allah. Your
relationship with others has to depend on this relationship. For the sake of Allah, you love me. For the sake
of Allah, I love you. For the sake of Allah, you will help me. For the sake of Allah, you will help your
friend. For the sake of Allah, he’s your brother. For the sake of Allah, that’s your sister. For the sake of
Allah, we are going to clean up. For the sake of Allah, we are going to feed the poor. For the sake of Allah,
we are going to protect animals. So when you have this Allah fear, Allah love, in you, then you act properly
and decently to the other creatures in every life form— that is Allah. So be good. You have to treat
everything, every life, with respect. This is what you need to learn. Be respectful. What does this mean?
Everything is a different lesson. Be humble. How can you reach Allah if you are not humble? Without
humbleness you are making your nafs (ego) God because the only thing you respect is your nafs. If
whatever you do returns to your nafs, then all you’re going to get is nothing and in the end you are back
where you started.
Allah created the entire universe. The question is this: “Why do we want Allah?” Here I am eating
and drinking, and here he is working, and so what? Who cares? Allah has created creatures, angels to
worship and praise Allah all the time. He created human beings so we could love Allah and go to Allah
willingly. How does this process happen? This process happens like this: Here you are, and Allah has
created the universe, the Quran, and everything. Allah also created ayat (signs to understand Allah’s
manifestations). This science will someday, sometime, motivate you and you’ll say, “Hey, man, there is a
reality.” Maybe you’ll wake up, and say, “Hey, I am living as Taner. I’m tired of living as Taner. Why
don’t I return to the owner and let Him live as He wants?” This is the purpose for which Allah created
you—to make you His image on earth, His viceroy on earth, to do things in His name on earth, in Allah’s
name, not in your name. But Allah put the nafs on earth. Who created the nafs? Who makes the nafs exist?
Allah does. So as long as you are playing Richard, He is playing Richard with you. That’s it. If you want
Allah to play Allah in you, then you have to give up Richard in you, because as long as Richard is there, He
is not going to show up because Allah is not a liar. If Allah shows Essence and Power through you as
Richard, then everyone will say, “Oh, Allah is Richard and so we should worship Richard.” But Richard is
not God; we can see that Richard is different. So that’s why Allah is not going to manifest Himself through
you until you give up Richard. It’s that simple. He will manifest only portions, limited measures of His
attributes. They are already being manifested in you. We call this the tea, Richard we call the cup.
So this is Sufism. This is what people back home in Turkey believe. They live for Allah. They let
themselves go and Allah takes over. They have endured many sufferings to prove their sincerity. Your fight
against your nafs is going to cause pain for your nafs, not for your heart. Your heart is always happy. When
you mention Allah’s name “Allah, Allah” while your foot is burning, your heart is happy because you are
saying, “Allah, Allah.” In Moses’ time, after Allah showed seven, nine, ten miracles, and then saved the
Jewish people from the Pharaoh, Moses went to the mountain for forty days and his people went back to
doing the same old thing. Allah says, “Do I have to give you afflictions for you to praise Me? Can’t you
praise Me when I am merciful and benevolent, gracious, and generous to you? Why can’t you praise Me
when I am generous to you?” Allah would give you more; He is generous, if you still hold onto Allah the
same way. He would keep giving to you. But we don’t yell “Allah” as we do when we are sick or have
`,Gl=`affliction; the way we say “Allah” is different than the way we say “Allah” when we have money in our
pocket.
Assume you are in a ship. (This is a Turkish folk story.) In the Northern habitats of Turkey, a
fisherman is in his boat, far off from land. There is a great storm, and the wind is blowing. He cries out,
“Oh Allah, if you help me, I will donate all this catch to the poor.” So Allah reduces the wind a little bit and
the fisherman sees the ship is not going to sink, so he says “Oh Allah, I’ll give 50% of my catch to the
poor.” And the winds subside down to 25% and as he lands safely, he says, “Oh Allah, I will cheat you, so
don’t believe me.”
Why can’t we praise Allah all the time? Allah says He will test you once or twice a year. Allah
will squeeze a little bit, less money, more trouble, or perhaps you will be given more. In both cases we
should be the same. If we keep praising Allah the same way, after a couple of tests, everything will go
smoothly. Insha’Allah. So this is Sufism the way I see it. In the United States, Sufism is in the books, in the
words, in the mouth. Back home, it is not in the words, it is in the heart and in the actions.
Origins of Sufism
Sufism started with Adam (a.s.). Allah taught him how to do zikr and how to go back to the
beloved stage of once he was part.
Sufism started long before Muhammed (a.s.) appeared on earth. Of course, Sufism, as I said in my
introduction, has always been based on Prophet Muhammed (a.s.). Before Muhammed (a.s.) Sufism was
known as Gnosticism in Christianity, and Kabala in Judaism. Isa or Jesus (a.s.) was Sufi. Allah also tried
to teach Sufism to Prophet Moses (a.s.) and from there in the Kabala. He carried the tradition with
Muhammed (a.s.) and when our Prophet (a.s.) went to miraj and Allah asked, “What do you want from
Me?’ The Prophet (a.s.) answered three times “My umma”. By this he meant ‘the love state you have
brought me, please grant this to my umma (people) too. I am your habbib (your beloved) and I would like
to grant this to my people too because I don’t want to be without them. How can I leave them and come
here while they are there? I cannot accept this. You entrusted those people to me and I have to be together
with them’. Well, Allah agreed and taught him how his umma can also go into this beloved state.
Then Hz. Ali (r.a.), asked the Prophet (a.s.) what is there today? The Prophet (a.s.) said there are
blessings today. Allah descended His knowledge here. So Hz. Ali (r.a.) wanted to know what was the
shortest way to Allah, to His path. The Prophet (a.s.) said that it is the path of love and zikr and then taught
him how to do zikr as Jibriel (a.s.) taught or showed him how to make zikr. When I say taught him, the
fundamentalists or the Sunnis object. They say, “How can Arch Angel Jibriel (a.s.) teach anything to our
Prophet (a.s.)?” Well, the angel showed him how to do zikr. When someone shows you something and you
learn from that then it is a teaching. He showed him by saying this “La illaha illallah” three times. Then
Hz. Abu Bakr later asked and the Prophet (a.s.) showed him. That is why the Naqshis do silent zikr.
All the tariqas, except the Naqshis, come from Hz. Ali (mainly the Qadiri Rifa’i, and the last
tariqa, the Ansari Tariqa). This knowledge comes from Hz. Ali via Abdul Qadir Geylani and Ahmed er
Rifai. Allah many times mentions zikr in the Quran-i-Kerim. Some people, wahabis and others, will
question, “Who is the shaykh? There is no Tariqa. This is bida (starting something new). During the time of
the Prophet (a.s.) there was no Tariqa. There was no Shaykh.” Well, the Prophet (a.s.) was the Shaykh. But
then he appointed Hz. Ali as the Shaykh, with no doubt. Witnessed. He took his hand and said to his
people, “As I am your Mevla, Ali is your Mevla too, I am the building of knowledge, Ali is the door. This
is written in the Hadiths.
The word ‘Sufi’ came from the homeless people who were at the Prophet’s (a.s.) Mosque (they
were homeless because they stayed near the Prophet (a.s.) at all times, living under the verandah of the
mosque and writing down whatever he was teaching). They were dressed in wool and they were called ahl’i
suffa (suf means wool). There were forty of these people and Allah’s Prophet (a.s.) assigned Hz. Ali (r.a) to
lead them and to teach them Sufism, the path of zikr. So, from there on it has been carried on down to you.
Now you are getting the connection, it’s a link. It’s the rope of Allah. The rope of Allah is Quran and
Sufism. You are one link in this rope of Allah. Just hold on tight
`,Kl=`The History of the Qadiri Rifa’i Order

Shaykh Muhammed Ansari
The Spiritual Fathers of the Qadiri Rifa’i Sufi Order
The lineage of the Qadiri Rifa’i Sufi Order is developed through several Sufi Saints. The first are
Abdul Qadir Geylani and Ahmed er Rifa’i. These two teachers were cousins, and lived in the area of
Baghdad approximately more than a thousand years ago (the 11th century). Each founded a school of
Sufism to address the needs of different types of spiritual seekers. Each school evolved independently until
the nineteenth century when two more Saints, Muhammed Ansari, a high ranking teacher of the Rifa’i
Order, and Abdullah Hashimi of the Qadiri Order, were guided to bring together the teachings and practices
of both Tariqas, forming a new school. These teachings were eventually handed down to Shaykh
Muhyiddin Ansari, and then to Shaykh Taner (this lineage is called silsila). As each new Shaykh receives
the ijaza (license to teach Sufism from their Shaykh) they will add their name to the silsila list.
The Tariqa has strong ties with the Naqshbandi, Bektashi, Mevlevi and Chisti orders. The present
Murshid of our Tariqa, Shaykh Taner Ansari, is connected to these lineages through his family, and by the
instruction of his teacher, has received training under Shaykhs of each of these tariqas to complete his
training.
All Shaykhs, including Shaykh Taner, have been Seyyids (descendants of the Prophet (a.s.)). This
is the Prophet’s (a.s.) family Tariqa. This is Allah’s Tariqa, Allah’s family. And those who are in this
Tariqa are in Allah’s family as well.
Shaykh Muhyiddin Ansari, who initiated the present phase of the Tariqa's activities, further
refined the school.
The school, as it exists today in the USA, is also known as "Tariqatiya Ansaryia" (The Path of the
Helpers). Its emphasis is on service to Allah by service to all life.
• • • •
History of the Dergah in Istanbul
Like the Kaba was renewed or rebuilt by Ibrahim (a.s.) there too was a Dergah (gathering place
where zikr and sohbet are held) in Istanbul, Kasimpasha several hundred years ago called Ayn’i Ali Baba
Dergah founded by Shaykh Ayn’i Ali Baba, a Rifa’i. By 1910, the building where the Tekke was housed
lay in ruins due to severe neglect.
Shaykh Muhammed Ansari, who was born in Baghdad, moved to Erzinçan in northeastern Turkey
in the early 1900’s. He was a descendant of both Abdul Qadir al Geylani and Ahmed er Rifa’i and was a
Shaykh of the Rifa’i order. In Turkey after meeting Shaykh Abdullah Hashimi, a Qadiri and a Rifai, he
worked with him for many years. When Shaykh Muhammed Ansari strengthened his connection to the
Qadiri Order, Shaykh Abdullah Hashimi sent him to Istanbul to establish the Qadiri Rifa’i Tariqa and
revive the Ayn’i Ali Baba Tekke.
Sometime after arriving in Istanbul, Shaykh Muhammed Ansari came across a soldier who was
stabbed while trying to arrest someone. He lay mortally wounded. Shaykh Muhammed Ansari, through his
`,ql=`lineage, had the powers to heal and so miraculously cured the soldier. Upon hearing how the soldier’s life
was saved, Sultan Abdul Hamid, a Qadiri himself (most of the Ottomans were Sufis), wanted to commend
and reward the Shaykh. He asked him what he would like. The Shaykh replied that he would like
permission to build a Sufi center on the foundation of the ruined Ayn’i Ali Baba Tekke. With the consent
of the Sultan, Shaykh Muhammed Ansari and his wife rebuilt the Tekke with their bare hands. (Since then
the Tekke has been renovated several times.)
Shaykh Muhammed Ansari headed the Qadiri Rifa’i Tariqa in the Ayn’i Ali Baba Tekke from
1915 until his death. His son, Shaykh Muhyiddin Ansari, born in Erzinçan, succeeded him. As Qutb of his
time, Shaykh Muhyiddin Ansari raised 101 Khalifas and many thousand dervishes all over Turkey,
Germany, and the former Yugoslavia. One of his Khalifas is Shaykh Jemali, Shaykh of Bosnia. In 1978 just
before Shaykh Muhyiddin Ansari died, he told the members of Dergah to run the tekke as it had been run in
his time.
It was under the leadership of Shaykh Nureddin Ozal, the Ayn’i Ali Baba Tekke that continued to
be a center of light as in Shaykh Muhyiddin’s time. Shaykh Nureddin Ozal’s exemplary devotion to his
Shaykh in and out of his presence set the standard of how murids should treat their Shaykh. While raising
ten Khalifas, he served everyone with whom he came in contact with humility and love.
In May 1993, Shaykh Nureddin Ozal passed away. When the timing was right, Shaykh Muhyiddin
passed the tasarruf of the order to Shaykh Taner directly. He took Shaykh Taner by the hand and
surrendered him to the Pirs. It is the Pirs that are continuing to educate Shaykh Taner. Under the guidance
of Es-Seyyid Es-Shaykh Taner Ansari and by order of his Shaykh, Es-Seyyid Es-Shaykh Muhyiddin
Ansari, a new order of Qadiri Rifa’i was founded known as the Tariqati Ansariya or Ansari Tariqa of the
Qadiri Rifa’i Tariqa. The center of the Tariqati Ansariya is now in America with the Pir Es-Seyyid Es-Shaykh Taner Ansari Tarsusi er Rifa’i el Qadiri.
A Biography of Abdul Qadir Geylani

Abdul Qadir Geylani is to the left
“When he has renounced the world so that he does not take it on account of his own desire, not in
compliance with the urges of his own self, but just to fulfill the commandment of Allah, he is then
commanded to talk to the world and establish contact with it because now there is a portion for him in it
which cannot be discarded and has not been created for any other person.” —Abdul Qadir al Geylani
Seyyid Muhyiddin Abu Muhammed Abdul Qadir Geylani was born on the Night of Power (hence
his name, Abdul Qadir), during Ramadan in 470 A.H. (1077 A.D.). He was born in Nayf in Geylan, Persia.
He passed to the other side at the age of 91 on the eleventh of Rabi al-Thani, 561 A.H. (1166 A.D.). His
tomb is in Baghdad, where thousands of people continue to visit it daily.
His father was Seyyid Musa Jangi Dost and his mother was Ummul Khayr Fatima bint al-Shaykh
Abdullah Sumi. Because both of his parents were seyyids (descendants of the Prophet, pbuh), his lineage is
`,Jl=`called the Silsiletil Zehep (the Golden Chain). On his mother’s side, his lineage was: Jemal Muhammed,
Mahmut, Tahir, Ibi Ata Abdullah, Kenaleddin, Isa, Ali Alauddin, Muhammedil Jevat, Imam Ali Riza,
Imam Musel Kazim, Imam Jaferils Sadik, Imam Muhammedil Bakir, Imam Ali Zeynel Abidin, Hazreti
Husayn, whose mother was Hazreti Fatima, the daughter of the Prophet Muhammed (pbuh). On his father’s
side, his lineage was Abdullah, Yahya Ezzhit, Muhammed, Davut, Musa, Abdullah, Musel Jun, Abdullah
Mahiz, Hasenul Musemma, Hazreti Hasan, whose mother was Hazreti Fatima, the daughter of our Prophet
Muhammed (pbuh).
Abdul Qadir Geylani is accepted as one of the four qutbs of all time. He was known as the Gavsul
Azam (the Great Helper, the human being who has reached the highest possible level), the Pole of Power,
Qutbul Rabbani (the Divine or Devout Qutb), Sultanul Awliya (King of the Saints), Qutbul Azam (the
Greatest Qutb) and as the biggest helper of people in need. He was also known as Bazul Eshep (the Grey
Hawk). When he was ten years old, his mother told him a story. “One day many years ago, I was traveling
in the desert. A Bedouin in black clothing blocked the road I was on and attacked me. At that time, I started
screaming for help. Suddenly, out of nowhere, a big hawk appeared, attacked the Bedouin, and kept
attacking until the Bedouin fled. After that, it grabbed my head covering and disappeared into the sky. I still
wonder about this bird.” Hz. Abdul Qadir smiled, and left his mother. A few moments later, he returned
with his mother’s head covering and said “Mother, here is your head covering. That bird you saw was I.”
He received his first education in his hometown. When he was 12, his mother received a message
to send him to Baghdad. She knew she was going to pass away and she wanted him to be on Allah’s path.
In Baghdad, he studied Islamic law, theology, and halwet (retreat). From one source we know that “Hz.
Geylani lived in ruins near Baghdad for twenty-five years in retreat and fighting with his nafs. He has left
the world completely, and for the last forty days he hasn’t eaten anything.”
According to one biographer, he was the person who took care of Abu Hanifa’s tomb. His first
Shaykh was Hammad ibn Muslim al-Dabbas. He studied with other Shaykhs as well, such as Abusaid bin
Ali Mahzumidir, from the Hanbali School.
During Geylani’s lifetime, Baghdad was a cultural center for Sufism and science. Even in a time
like that, Abdul Qadir Geylani was famous in the whole Islamic world for his talks, miracles, poems, and
books. Abdul Qadir Geylani is one of the greatest Sufis who has ever lived, one of the most talked and
written about. He is very respected in both the Islamic and Sufi communities.
Hz. Geylani performed numerous miracles that have been recorded in many books. During his
time many Christians and Jews became Muslims and many of his students became famous walis (saints and
teachers). Hz. Abdul Qadir was tall, olive-skinned, had long eyelashes and blue eyes, a beautiful face, and
long hair. He was very humble and beautifully dressed. When he spoke, the audience would be spellbound
and enraptured by his words and personality. Love has been his guide.
Before Abdul Qadir’s birth, his father, Seyyid Musa Jangi Dost, had a dream. Hazreti Muhammed
(pbuh), his family, and all the chosen awliya (saints) were gathered. Lover of Allah, Owner of Hearts,
Hazreti Muhammed (pbuh) said, “O Musa, O my son. All-powerful and Owner of Everything, Allah the
Most Great has given you a son. This child is my child. His rank is above all the awliya. Good tidings and
God’s blessings upon you.” When Musa woke up in the morning, his heart was happy and the whole sky
was filled with Allah’s Nur (Light).
When Hz. Abdul Qadir was born, he did not act like any other child. During Ramadan, he would
not nurse during daylight hours. When people were not sure whether Ramadan had started or ended, they
would come to his mother and ask, “Is he nursing or not?”
Young Geylani was burning with love of learning. He asked his mother for permission to go to
Baghdad to study. His mother couldn’t tolerate her son’s sincere pleading. When they were parting, she
said, “O my son, maybe we are parting forever. If you want to please Allah and me, don’t ever stray from
the straight path. Never lie. Allah is with the truthful.” His mother put forty golden pieces into a small
pouch and sewed it into his hirka (coat). He kissed his mother’s hand and said, “I promise I will always be
on the straight path.” They cried and parted, and he left with a caravan going to Baghdad. Thieves attacked
the caravan. They questioned the travelers about what they brought with them. When it was Hz. Abdul
Qadir’s turn, one asked him what he had. Remembering the promise to his mother, he said, ”I have forty
gold pieces.” When the thief heard this, he laughed very hard because Hz. Abdul Qadir was a youth who
didn’t seem to possess forty gold pieces, and he left. Another thief came, asked the same question, and got
the same answer. They told the chief of the thieves what the youth had said, who then asked Hz. Abdul
Qadir, “What do you have?” “I have forty golden pieces sewn into my coat.” The chief ordered his men to
search his coat and found the gold. The chief asked in amazement, “Son, why did you say you had money
`,Yl=`on you?” Hz. Abdul Qadir said, “When I was parting with my mother, I promised in Allah’s name that I
would not lie. Would I break my promise for forty gold pieces?” When the chief heard these pure and
blessed words, he started crying and striking his forehead with his hand in remorse. “Alas, we had
promised to Allah, too. For many years we followed the Devil and broke our promise. We did many bad
things. What are we going to say when we are in Allah’s presence? What is going to happen to us?” The
chief and his followers repented in the presence of Abdul Qadir al Geylani, and gave back whatever they
were stealing.
Hz. Abdul Qadir Geylani spent twenty-five years in Baghdad doing itikaf, a retreat, where he
protected himself from the evil and gossip of the world by living alone in ruins at Burjul Ajemi. The last
forty days, he said “O Allah, I will not eat or drink anything unless you give it to me with your own hands.”
Although a person from Rijali gayip (people only Allah knows about, one of Allah’s hidden servants) had
brought dinner and Hz. Qadir had felt faint from hunger, he did not eat. At that time, a great scholar and the
Shaykh who was the qutb, Hz. Ibu Sait Mahzumi, came and wanted to take him home. Hz. Abdul Qadir did
not accept his offer. Al Khidr appeared, and told him to accept the offer by Allah’s order. After this, Hz.
Abdul Qadir accepted Shaykh Mahzumi’s offer. The Shaykh took him home and fed him and gave him
water with his own hands, and made him his khalifa. Hz. Abdul Qadir stayed there for eight years
undergoing ascetic austerities and worshipping Allah.
When Hz. Geylani was 51 years old, our Prophet (pbuh) appeared to him in bodily form and said,
“Why are you silent?” Hz. Pir said, “O ancestor, I am from Persia. How can I get up and say anything
before the scholars of Baghdad?” Muhammed (pbuh) said, “Open your mouth” and went through the
motion of spitting seven times into Hz. Pir’s mouth. “Preach to people with truthfulness and wisdom.”
When Hz. Pir offered the Morning Prayer and stood to give a talk, many people gathered around him.
When he saw all these people with their eyes on him, he couldn’t speak. At that moment, Hz. Ali appeared
over his head and asked, “My son, why aren’t you talking?” Geylani remarked, “All these people made me
tongue-tied.” Hz. Ali said, “Open your mouth,” and made the motion of spitting five times into his mouth.
At that moment, Hz. Abdul Qadir al Geylani’s tongue was freed. He gave such a sermon as nobody in
Baghdad had heard before. He said, “Let’s leave the past and look at our situation now. Let’s be in the
present,” and then people started crying and screaming because of the divine magnetism he radiated. When
he spoke, many people would do sema (whirling) because of the ecstasy they experienced. Hz. Pir gave
sermons there for forty years.
One day a hundred scholars came from Damascus to question Hz. Geylani. When he said, “Ask
me your questions,” they forgot their questions and just sat gazing at him. Then Hz. Abdul Qadir answered
their questions, one by one, without their having asked them.
One day a merchant from Baghdad, Abu Muzaffer, decided to go to Damascus, but first he went to
his Shaykh, Hamad, and asked his advice. The Shaykh told him, “If you go to Damascus, you will be killed
and whatever you have will go to the thieves. This is what I saw in ‘Levhi Mahfuz’ [a book where whatever
will happen in the universe is written].” When the merchant heard this, he grew very sad. As he was going
back home, he met Hz. Geylani and told him what had happened. Hz. Pir said, “Go ahead to Damascus;
you will come back safe.” So the merchant trusted Abdul Qadir al Geylani and traveled to Damascus,
where he earned a thousand dollars, which he put into a pouch. When he went to relieve himself he forgot
his pouch and left it there, and then went back to the mosque, where he became very tired and fell asleep.
In his dream, many thieves attacked and killed him and stole all he had. When he awakened, he looked and
found blood on his neck. He remembered his pouch, went back and found it hanging from the branch of a
tree. As he returned to Baghdad, he was pondering whether to visit Hz. Geylani or his Shaykh first. While
he was thinking, his Shaykh appeared to him and said, “Visit Hz. Abdul Qadir first. Because of his prayer,
he made what was going to befall on you occur in the dream form.”
A hundred and fifty years after Hz. Geylani’s death, people asked Shah Bahauddin Naqshband (Pir
of the Naqshbandi order), “Gawsul Azam Hz. Abdul Qadir said, ‘My foot is on the shoulders of the awliya’
What do you think about this?” Hz. Naqshiband said, “May Hz. Geylani’s foot be upon my eyes and my
vision too.”
One day Shaykh Bahauddin was traveling in the desert and saw Al Khidr. Al Khidr transported
him within a second to the presence of Abdul Qadir al Geylani. Shaykh Bahauddin (whose name was not
yet Naqshband) said, “O One who holds hands with the universe, hold my hand so they will call you the
Holder of Hands” (In biat, one holds the hand of the Shaykh to receive Allah’s blessing. Also when
someone needed to be rescued, they held out their hand). Hz. Pir placed his hand on Bahauddin’s heart and
said, “O the holder of the adornment of the worlds, hold my adornment so that they can call you
`,Xl=`‘Naqshiband (the one who adorns)’.” Then Hz. Naqshband recited the following poem, which is inscribed
on both the tombs of Abdul Qadir Geylani and Bahauddin Naqshband:
“The King of this world and the hereafter is Shah Abdul Qadir.
The head of the children of Adam is Shah Abdul Qadir.
Sun, moon, heavens, the throne and the pen,
They all get their light from the heart of Abdul Qadir.”
One day some fundamentalists asked Shaykh Abdul Qadir, “Why are you doing sema? According
to Sharia, this is haram.” He said, “What is the punishment for doing something that is haram on purpose?”
They said, “The punishment is death.” Hz. Geylani said, “All right, when I start doing sema, hit me with
axes and knives and kill me.” One day when Hz. Pir was doing sema, they attacked him with axes. They hit
him hard, but their axes bent and nothing happened to Hz. Abdul Qadir, who was burning with Allah’s
love.
One day, a Christian and Muslim were arguing about whether Hz. Isa (Jesus, pbuh) or Hz.
Muhammed (pbuh) was greater. The Muslim was saying, “Allah created the whole universe for our Prophet
(pbuh).” The Christian, whose name was Nasrani, said, “But Hz. Isa was better than your Prophet.” Hz.
Abdul Qadir was walking by and heard the argument. He asked the Christian, “How are you going to prove
to me that Hz. Isa was greater?” to which Nasrani replied, “Hz. Isa made the dead come alive.” Hz. Abdul
Qadir said, “O Nasrani, I am not a Prophet, I am only a slave of Allah who is a follower and a lover of
Muhammed (pbuh). Let’s go to a cemetery. Let me show you how I make the dead come alive, whose
bones have rotten, whose bodies have melted away.” Nasrani accepted this and they went to a cemetery.
Hz. Pir asked, “O Nasrani, how did your prophet make the dead come alive, and how did he call out to
them?” Nasrani responded, “Hz. Isa used to say, ‘Get up with Allah’s permission’.” Hz. Abdul Qadir then
said, “O Nasrani, look, this cemetery has no life in it. I will call out to the person in this tomb and
somebody will emerge from it.” He proceeded to extend his hand towards the tomb and called out, “Get up
with Allah’s permission!” The tomb opened up and an old man came out and stood with his hands folded in
the presence of Abdul Qadir. Nasrani watched in amazement, repeated the shahadah,“La ilaha illallah,
Muhammedur Rasulullah,” and became Muslim. Hz. Pir then made a sign to the corpse to go back and they
left.
During Ramadan, while Hz. Geylani was staying in Baghdad, seventy people invited him for Iftar
(to break his fast at sunset). Hz. Pir accepted all their invitations, and broke his fast with all of them in
separate houses. In the morning this miracle was discussed all over Baghdad. One of the dervishes in the
dergah thought, “How could this be? Last night the Pir was with us.” The door opened, and Abdul Qadir
entered and said, “O my son, what they say about me is true. I was present at all the dinners.”
One day Shaykh Mehmet Suhreverdi’s wife came to Hz. Abdul Qadir and asked him to pray to
Allah so she could have a son; she had no children at all. When Hz. Pir asked Allah, “Ya Rabbi, please give
this woman a son,” he heard Allah respond, “Ya Gavsul Azam, there are no children in her destiny.” Hz.
Abdul Qadir begged Allah three times and he met with the same answer each time. He took his hirka sherif
(dervish coat) off and throwing it away, cried out, “Ya Rabbi, unless you give her a son I will not wear this
hirka [meaning he would stop being a dervish].” At that moment, our Prophet Muhammed (pbuh) appeared.
He took the hirka and returned it to Hz. Pir and said, “O my son who is the light of my eyes, this is
affectionate play, pretending reluctance, between lover and God. Allah has accepted your prayer and gave
this lady a son.” When Hz. Geylani heard this, he praised Allah very highly, went to the woman and told
her she was going to have a son. However, after some time she gave birth to a girl. The woman wrapped
the child in a red cloth and brought it to Hz. Pir and said, “O Sultan of the Universes, I asked for a son from
Allah, but He has given me a daughter.” The Bazul Eshep took the child, held her, and started gazing into
the child’s eyes. The girl miraculously turned into a boy. Hz. Pir returned the child to the mother and told
her, “This child is my son. Name him Shaykh Shehabeddin Suhreverdi. May his life be long, his dervishes
many.” And he prayed for the child, who grew up to become very famous.
He raised Shaykh Sadii Shirazi who wrote Gulistan (the Rose Garden).
One day, Shaykh Muhammeddin bin Ali came to the Pir and said, “Ya Gavsul Azam, I am an old
man and I can’t have children. Please pray to Allah so that He will bless me with a child.” Hz. Pir
answered, “You don’t have any children in your destiny, but I have a son in my destiny. Would you like to
have that one?” When the Shaykh accepted Hz. Pir’s offer, he told him to come closer and they sat with
their backs touching. Shaykh Muhammeddin bin Ali later said: “When our backs touched each other, I felt
`,Zl=`something warm pouring from my neck to my waist.” Later the Shaykh had a son and named him
“Muhyiddin” at the order of Hz. Pir (Muhyiddin was Hz. Geylani’s registered name at birth). This child
later became famous with the name “Muhyiddini Arabi.”
One day, the Sultan of that time invited Hz. Pir to dinner. There was a black magician at the same
table. A big dish was placed in the middle of the table. The Sultan said, “Please help yourself.” When Hz.
Pir took the food and was about to put it in his mouth, the black magician made the bite in his hand
disappear. Abdul Qadir remained quiet and reached for another bite, but the magician did the same thing
and that bite also disappeared. The Sultan was laughing very hard and inviting Hz. Pir to eat again,
mockingly repeated, “Please help yourself.” Hz. Pir again reached for a bite of food. The black magician
did something again and this time all the food on the table disappeared. There was a pillow with a lion’s
picture on the couch. Hz. Geylani placed his hand on the couch and said “Huz Ya esed (Appear O lion)!” A
huge lion leapt out, attacked the black magician, and carried him back into the pillow. The Sultan grew
very amazed and frightened. He couldn’t speak because of his fear. The black magician had disappeared.
One day somebody was talking about Abdul Qadir Geylani and disparagingly said, “I don’t know
any awliya who was rich like this!” After a while, he fell asleep. In his dream, he saw the Judgment Day.
Each person’s good and bad deeds were getting weighed with the scale made of light. Sinners were on one
side and those who had done good deeds were on the other. When this man’s turn came, he was put on the
side of the people who were going to Paradise. At that moment, a Jew came out of the crowd screaming,
“This man owes me ten dollars; he didn’t give it to me. I want justice!” The angels took him from the side
of the people of Paradise and put him with the people who were going to Hell. On the way to Hell, a light
appeared before them, as well as a group of people mounted on horses, very richly dressed with gold and
jewelry. The horseman at the head of the group stopped the people who were going to Hell and said,
“There’s a person who’s going to Paradise here; why is he going to go to Hell?” The dreamer, who had
been close to going to Paradise, jumped out of the crowd and started begging, “O my Sultan, I owed a Jew
ten dollars, that’s why I’m going to Hell, please help me, please save me!” The Sultan got a money pouch
from somebody behind him, took money out of the pouch, gave it to the Jew, and saved the man. This
made the man very happy and he started crying from happiness at being saved from Hell. He stopped
crying, and lifting his gaze to the face of the Sultan, who had given him the money, saw that it was Abdul
Qadir Geylani seated on horseback and gazing down at him. When the man awoke, he went immediately to
Abdul Qadir’s presence and asked for forgiveness because of his wrong thoughts and words about Hz.
Geylani. Our Pir replied, “Do you understand now why we are rich? We spend all our money to protect and
help people who love Allah. If Ibrahim Edhem lived in my time, I would not let him leave his money,
property and empire, because the best worship is to live with material things but not to let them get into
your heart.” (Ibrahim Edhem was the king who left his throne to be a wandering dervish.)
Whenever Hz. Abdul Qadir went for a walk, the people would go out just to see his face. One look
from him would elevate people to the highest degrees and help many people’s problems. To say his name,
even centuries later, still comforts people’s hearts. He is the Al Khizr and Al Ilyas of the spiritual world (Al
Ilyas was the Al Khidr of the sea).
In 561 A.H., on the ninth day of Rabiulahir, when Hz. Geylani was 91 years old, the sun of this
world set in this world and rose in the hearts of the people he had loved. They buried him at night because
the place was so crowded that they couldn’t bury him during the day. His son, Seyyid Abdul Wahhab led
the funeral prayers. Hz. Abdul Qadir’s last words were: “O my beautiful children, stay away from me. I am
here with you but there are many unseen people standing around me; make space for them. There are many
blessings in being with these unseen people.” Hz. Pir gave salaams to the unseen people and cried out, “La
ilaha illallah Muhammedur Rasulullah, Allah, Allah, Allah!” and passed from this world.
• • • •
Moments from Hz. Abdul Qadir’s Life
Mehmet el-Huseyni said: “I heard from my father that Hz. Abdul Qadir used to talk about 13 ilms
(sciences) and in his school he used to teach tafsir (interpretation of the Quran) and hadiths. He used to read
the Quran seven different ways (different methods of recitation, seven different Maqams). Whenever he
read the Quran, those who were listening to him would become ecstatic.”
Shaykh Aliyyul Heyti recounts this incident: “Hz. Abdul Qadir, Baka bin Batur, and I went to the
tomb of Imam Ahmad bin Hambel (may Allah be pleased with him). When we got to the tomb, a curtain
`,Ql=`was lifted from my eyes and I saw Hz. Hambel stand up and come towards Hz. Abdul Qadir. He hugged
Hz. Pir and gave him a spiritual cloak. Hz. Hambel asked Hz. Pir, ‘Help me in the sciences of Sharia
(religious law) and Haqqiqa (Reality).’ Hz. Gavs accepted his wish.”
Hizir bin Abbasul Musabi said in the year of 551 A.H., “I was in Baghdad at Hz. Gavs’ school.
One day I had a dream. I was in a big meydan (outdoor meeting place) and all the awliya were there. Hz.
Abdul Qadir was right in the middle of them. I looked and some of the people there only had amame
(Arabic hats) on their heads, and some people had one cloth wrapped on their hat, and others had two
wrapped on their hat. I looked at Hz. Abdul Qadir and I saw that he had three cloths wrapped on his hat.
This made me contemplate the meaning of his three wrappings. While I was thinking of this I awoke. I
looked, and Hz. Gavs was standing by me and smiling at me. He said, ‘Ya Hizir, those layers you are
curious about: one is for ilmi Sharia, one is for ilmi Haqqiqa, and the other is to show the high level of
these.’”
One day Yahya bin Edip went to a speech of Hz. Pir’s and he hid a thread under his coat. Each
time Hz. Pir answered a question he was going to ask but hadn’t asked outwardly, he tied a knot in his
thread. He was at the back of the group, hiding behind people, just listening. He felt that Hz. Geylani was
talking only to him that day, and as he heard his answers, he kept formulating more precise questions to test
his theory. After a while, Hz. Pir yelled at him, “Here I am trying to unknot your problems, and you’re
trying to knot them again. Is this appropriate?” Hz. Gavs had discovered what he was doing.
It is Allah who gives people their wishes. Allah uses walis as an instrument to do these things.
Although it appears to come from the walis, it’s actually from Allah. An old woman named Rose had a
daughter who died, leaving six children for the grandmother to take care of. This grandmother used to make
600 dirham of thread every week as her livelihood. Every week she would take it to the bazaar and with the
money she made would try to take care of her grandchildren. This pure-hearted lady prayed to Allah all the
time, “Ya Rabb, please send sustenance for these children; I can’t take care of them.” One day she
assembled all her thread very early in the morning and decided to go to the bazaar. As she was passing in
front of Hz. Pir’s house, he saw the woman and said “Hello, sister Rose, welcome. Where are you going?”
She answered that she was going to the bazaar to sell her thread. The Shaykh replied, “Give it to me, I will
sell it for you.” The woman became very happy, said, “It would be your generosity,” and started to leave.
The Shaykh threw the thread on the roof of the mosque as though he was joking. A big bird came and took
the thread and flew away. When the grandmother and the dervishes saw this, they asked, “What kind of a
joke is this?” The dervishes made a sign to the lady not to say anything, because they knew there was a
reason behind every joke of Hz. Pir’s. The Shaykh told the woman, “Please don’t worry about it, I sent
your thread so it would get sold. When it is sold, come to me, I will give you your money.” Rose returned
to her home. The next day she came to the Shaykh and asked if her thread had been sold. The Shaykh said,
“Yes, it is sold, but I did not get the money yet. Please be patient until the money comes.” A week later she
came back. The Shaykh said, “Come back tomorrow.” The old woman was not happy with what happened,
and she started complaining to the dervishes. The dervishes urged her, “Please don’t get upset; we know
there is divine wisdom behind this. Wait a couple of days and see what happens.” She went home again. A
little while later, a couple of merchants came to Hz. Pir and, kissing his feet and thanking him, gave him a
large amount of money. After they left the Shaykh’s presence, the dervishes stopped the merchants and
asked them why they gave this amount of money to the Shaykh. The merchants said, “The money belongs
to the Shaykh. We are merchants and we were traveling on the sea when a big storm came and shredded
our sails to pieces. We were close to death. After the storm had passed, we had no sails and the ship
wouldn’t move. We asked the captain, “How can we solve this problem?” The captain told us that if we had
600 dirham of thread, we could sew the sails and the ship would sail again. We started wailing, “O our
Sultan Abdul Qadir, give us 600 dirham of thread, we will give you a thousand filori from our
merchandise.” Suddenly we saw this big bird bringing the thread and dropping it on the ship. We measured
it, and it was 600 dirham. As soon as we fixed the sail, the ship started moving, and that’s how we were
saved. To keep our promise, we brought the money and gave it to the Shaykh.” The next day the old lady
came and asked, “O my master, did my money come?” The Shaykh took the thousand filori and gave it to
the woman. She went home and never had to worry about providing for her grandchildren again, and she
became a dervish of Shaykh Abdul Qadir’s. There are many games on this path; the Shaykhs have many
games. Some people look on these as hardship, others look on them as beauty. There is no solution except
surrendering. If Allah wants, he will use one bird as an instrument for salvation.
This story is taken from the book “Muzekkin Nufus,” written by Izniki Eshrefoglu. One day Hz.
Abdul Qadir said, “Two hundred years from now, a Shaykh will come out from Horasan with the name of
`,$l=`Bahauddin. He will be very knowledgeable and a great person.” These words proved to be correct. Shaykh
Bahauddin came forth in Horasan. Shaykh Gulal gave him an assignment to work with the Ismi Jalal
(Name of Majesty) “Allah.” As he was doing this, he was meditating but the name would only stay on his
lips. It wasn’t going into his heart, so he was suffering. In this disturbed state, as he was traveling in the
prairie, Al Khidr came. He understood his condition immediately and said, “O Bahauddin, don’t worry.
I’m sure there’s a cure for your problem, too.” Then the Shaykh answered, “How can there be a cure for my
problem?” Al Khidr said, “On earth, there is a wali with a big tassarruf (executive power). His name is Hz.
Abdul Qadir. His tomb is in Baghdad. Whoever asks for his help, he reaches out to them.” Upon hearing this,
Bahauddin asked for help from the Gavsul Azam. And that night, in a vision, he found himself in the
presence of Abdul Qadir and told him his problem. Hz. Gavsul Azam said, “Allah,” and put his hand on
Bahauddin’s chest. At that moment, all the frustration, stress, and trouble left Bahauddin and the doors of
wisdom opened. When he woke up in the morning, he felt joyful. When he turned his eyes to the sky, he
found “Allah” written in light. And his name became as told above, Naqshband. He himself told the story
in this manner.
A Biography of Ahmed Er Rifa’i
Ahmed Er Rifa’i is to the right
Seyyid Ahmed er Rifa’i was born in the first half of Rajab in the Muslim year of 512 A.H. (1119
A.D.) on a Thursday. His birthplace was in the town of Ummu Abeyde in the township of Beta in the
province of Basra, Iraq. He passed to the other side on Thursday, Jamadi al-Awwal 22, 578 A.H. (1183
A.D.), in the town of Wasit, in Basra, Iraq.
His father was Seyyid Ali Abu’l Hasan. His mother was Fatima ul-Anseri bint Yahya Nijjeri. His
Shaykh was Aleyyul Wasiti. His maternal uncle, who helped raise him, was Shaykh Mansur Rabbani.
Ahmed er Rifa’i was related to our Prophet (pbuh) from both his father’s and mother’s sides by
blood. His paternal lineage was Seyyid Ahmed er Rifa’i, Ibni Seyyid Ali, Ibni Seyyid Yahya, Ibni Seyyid
Sabit, Ibni Seyyid Hazim, Ibni Seyyid Ali, Ibni Seyyid Ebilmekerim Rufael Hasanulmekki, Ibni Elseyyit
Mehdi, Ibni Esseyyit Mehmet Ebi Kasim, Ibni Esseyyit Elhasan, Ibni Esseyyit Elhuseyin, Ibni Esseyyit
Ahmet, Ibni Esseyyit Musa ul-Sani, Ibni Esseyyit Imam Ibrahimulmurtaza, Ibni Imam Musa-ulkazim,
Imam Jaferi Sadik, Ibni Imam Muhammed Bakir, Ibni Imam Zeynelabidin, Ibni Imam Elsehit Huseyin,
Ibni Emirulmuminin Aliyelmurtaza.
Before Ahmed er Rifa’i’s birth, his maternal uncle, a famous Shaykh, Mansur Rabbani, had seen
our prophet Hz. Muhammed (pbuh) and was told that his sister would have a male child who would be
famous and be known by the name “Rifa’i.” When the child reached the proper age for Sufism, he should
be sent to Shaykh Aleyyul Vasiti for education and training.
Ahmed er Rifa’i’s father passed away when his son was 7 years old. Seyyid Ali died in 519 A.H.;
he is buried in Baghdad. So Ahmed er Rifa’i’s maternal uncle started taking care of the little boy. After a
while he was sent to Shaykh Vasiti in accordance with his uncle’s vision. Shaykh Mansur has said that as
`,eu=`long as Ahmed er Rifa’i stayed with him, he saw many miracles come through the boy and that many
blessings came through him for everyone.
Ahmed er Rifa’i showed ability and wisdom beyond his age when he began his education under
Shaykh Vasiti. He acquired a high maqam by explaining the book of the Shafi School called Tanbih.
Many miracles occurred through Ahmed er Rifa’i. One of the most widely known is the one that gave him
the name “Ebul alemeyin” (the Father of Two Banners). In the year 555 A.H., when he was 43 years old,
Hz. Rifa’i went on Hajj. He didn’t wear the usual traveling clothes of Seyyids (the relatives of the Prophet,
pbuh, could be recognized by their clothes). There is a certain section of the Prophet’s (pbuh) tomb in
Medina that only blood relatives of the Prophet (pbuh) may enter. The guard at the door would not allow
him in, as he wanted to know the proof that Ahmed er Rifa’i was related to the Prophet (pbuh). Ahmed er
Rifa’i was sad and yelled towards our Prophet’s (pbuh) tomb, “As-salaamu alaykum, ya jeddi (Peace be on
you, my ancestor).” Our Prophet (pbuh) answered, saying “Walaykum salaam, ya waladi (And peace be on
you, my son).” Muhammed’s (pbuh) hand came out of the tomb and our Pir kissed the Prophet’s (pbuh)
hand. When people saw this miracle, they went into a state of wajd (ecstasy) and began stabbing
themselves with their swords and knives. When the ecstasy passed, there were people lying all over the
floor covered with blood, so Ahmed er Rifa’i returned them to their normal health. After that, our Pir was
famous for possessing the gift of healing.
Ahmed er Rifa’i is known as one of the four major tariqa pirs (“Aktab-i erbaa,” a qutb of the time,
not just of a local area). Another major qutb was Abdul Qadir al Geylani.
One day somebody asked Abdul Qadir Geylani (who was Ahmed er Rifa’i’s cousin), “Ya Hazret,
what is love?” Hz. Geylani told the person to go ask this question to Seyyid Ahmed er Rifa’i. After sending
Hz. Geylani’s salaams to Hz. Rifa’i, he asked, “What is love?” When Ahmed er Rifa’i heard this question,
he stood up, saying, “Love is fire, love is fire.” He began whirling until he passed into the unseen and
disappeared. When the person saw this, he was disturbed because he didn’t understand what was
happening. At that moment, the spiritual presence of Abdul Qadir Geylani appeared and told him to look
for the spot where his brother Ahmed er Rifa’i had vanished, and to pour rosewater on that spot. The person
did this and within a couple of moments, Seyyid Ahmed er Rifa’i appeared, whirling in the exact same
place. When the man went back to Baghdad, he visited Hz. Geylani, who asked him, “Did you see love?
My brother Seyyid Rifa’i has reached stations that many walis have not been able to reach.” Seyyid Ahmed
er Rifa’i also deeply loved and respected Abdul Qadir Geylani and told his students that whoever visited
Baghdad without visiting Hz. Geylani’s tomb would not be welcomed by Allah or by them.
Ebu Musa el-Haddadi said that in the town of Haddahiye there was a woman whose children were
always stillborn. This lady said, if I have a child, I would give this child in the service of Ahmed er Rifa’i.
A few years later she had a daughter who was hunchbacked and lame. Because of this, the other children in
the village always made fun of her. One day, Ahmed er Rifa’i was visiting this town and all the people
went to the road to see him. The little girl threw herself at Rifa’i’s feet and cried out, “You are my mother’s
Shaykh; please heal me from these problems!” and wept. When Hz. Rifa’i saw her situation he cried as
well, and praying over her, he placed his hands on her back and head. The girl’s back and leg were both
healed. This is why Ahmed er Rifa’i is called Beynennas (Ebu’l Arca), the Father of the Lame.
One Friday, Hz. Rifa’i was sleeping and woke to find that it was time for prayer. However, there
was a cat asleep on his robe. He asked his wife for some scissors, cut off the part of his robe where the cat
lay, stood up and went to prayers. When he returned, the cat had awakened and left, so he asked his wife
for thread to sew the robe back together. When he saw his wife’s displeasure at what he had done to his
robe, he said, “Do not worry, nothing but goodness happened and I did not suffer because of this; this was a
good thing.”
Once, Ahmed er Rifa’i spent forty days caring for a dog with leprosy in the wilderness. When he
returned and was asked why he had spent so much time caring for an unclean beast, he replied, “When I die
and meet my Maker, what would I have said if He asked me why I hadn’t helped one of His creatures?”
The Rifa’i tariqa has 13 sections. The most important are the Heririye, the Keyyaliye, the Aziziye,
and the Ahiyye.
Ahmed er Rifa’i wrote three books:
1. 40 Hadiths
2. El Hikemü’r-Rifa’iye
3. En-Nizamü’l-has
`,tu=`Ahmed er Rifa’i possessed many virtuous personality traits. He would always forgive bad deeds, feed the
hungry, dress the naked, visit sick people, and go to all the prayers for the dead. He would sit with poor
people, and he didn’t look down on the poor. Hz. Pir often stayed and talked with the poor. He was patient
with pain. He gave good advice to his enemy and greeted them when he met them. He cleaned the mosque
with his own hands. If people were sad, Hz. Rifa’i would also be sad. If people were happy, he would be
happy. When he talked to young or to old people, he would speak with humility and respect. He would not
laugh aloud, but he smiled easily. When he walked on the road, he kept his eyes down. (It is fardz: to lower
one’s gaze, to just look in front of you.) He didn’t look to the right or the left, but would just look straight
ahead, unconcerned with what other people were doing. Hz. Rifa’i would send food to poor people’s
houses and take care of sick people. He also treated orphans as if he were their father. At the end of every
Salat, he would repeat Ayat al-Kursi. When he was walking on the road, he would always recite the Fatiha.
He always had wud’u. If Hz. Pir’s murids had needs, he would take care of them. He drank water in three
sips, and wore a patched robe out of humility.
32 Fardz (obligations) of a Muslim
Sharia
Sharia is what the Prophet (a.s.) said to do or not do. Allah, in the Quran-i-Kerim, gave 32 Fardz as part of
the sharia. These 32 Fardz are ibada (prayers, conditions, cleanliness and such). What the Prophet (a.s.)
performed, did or said is called Sunnah. When learning the Fardz or Sharia you should not make that the
focus though. Allah should be the focus at all times. You should learn the Fardz, but don’t make it your
goal, make Allah your goal. Scholars say there are 6000 Fardz; we are only concerned with the following
Fardz. Tariqa (the path) is the fresh connection, live and present from Allah via the Shaykh. We do not
need to be concerned about what the scholars say happened 1500 years ago. Know this Sharia well, because
if there is no Sharia there is no Tariqa.
I. Conditions of Iman (Belief)- This comes from the last two Ayats (285 & 286) of Baqara (The Cow)
in the Quran.
1. To believe in the Oneness of Allah. La illaha illallah – nothing is worth your worship but
Allah. ‘Illa’ means to worship to - and Allah is the name of the creator. He called Himself that
in the Quran. The word Allah existed before Muhammed (a.s.), before the Quran.
2. To believe in His Angels (malik). The first creation of Allah was Muhammed’s (a.s.) Nur
(light) and the Angels are created from the light of Allah. They are given power from Allah to
do their work. Malik means power to do. Allah has many kinds of angels. His archangels are:
Jibril (a.s.), Mikhail (a.s.), Israfil (a.s.), Azrail (a.s.). Their form comes from the light
characterized by the alam-i-jabbarut. Other angels come from the alam-i-malakut and alam-i-
ma
3. To believe in the Books Allah sent. The four books are the Torah, Psalms (David), the
Gospel (Isa or Jesus) and the Quran (Muhammed, a.s.). These books need to be read.
4. To believe in the Prophets Allah sent.
5. To believe in the Judgment Day (Resurrection). Allah will punish the
guilty and reward the good.
6. To believe that "goodness" and "misfortune" come from Allah.
Bad comes from us and good comes from Allah. But if a misfortune befalls you through
somebody doing something wrong and you are hurt, that person becomes responsible for you.
Allah’s responsibility is that He gives permission for that person to hurt you; this is a burden
on you because Allah wants you to take it. Natural disasters (i.e. famine, earthquake) come
directly from Allah. Allah has His goodness that He has given to everybody and
some friction He gives to everybody. Everybody gets his or her share. Remember this is
planet earth (in Arabic ardz) and here good and evil are mixed. Allah’s Jalil (power) and
Jamal (beauty) are here and you will learn Allah both ways. Those not learning Allah’s rights
and wrongs will learn Allah’s Jalil in Hell and those who do learn Allah’s rights and wrongs
and abide will get Jamal after the Judgment Day.
`,nu=`II. Conditions or Pillars of Islam
1. To say the words of witnessing (Shahada): "Ashahadu ana la illaha illallah. Ashahadu ana
Muhammedin abduhu wa Rassulullah.” (I witness that there is no one worth worshipping but
Allah. And Muhammed (a.s.) is Allah’s servant and messenger.”
2. To pray five times a day.
3. To fast in the month of Ramadan.
4. If rich, to pay the poor tax (2.5% of extra money or goods). (zakat)
5. To make hajj (pilgrimage) if you can afford it at least once in a lifetime
(and if you have the courage and not claustrophobic and not afraid of being trampled). It is a
blessed place and is a good experience, just be aware of the situation.
III. Wudu (Ablutions) This is done before prayer and what Allah requires. Skin that is exposed to the
sun’s radiation should be washed often. It is better for you. In the desert they walked in the sand, so they
washed their feet too. This is basic hygiene from Allah.
1. To wash hands once up to the elbows.
2. To wash the face once.
3. To wipe with your wet hands 1/4 of the front part of your head. We wipe the head because
we are going to do prostration and Allah wants it clean. Also our hair has static electricity and
pollens. (A sweet little story is that when Adam (a.s.) ate the apple, he smacked his forehead
with his hand and said, “Oh my God, what did I do?” So, cleaning the forehead is wiping that
dirt away.)
4. To wash your feet, including heels and ankles. Clean your feet, you are in
your house or a mosque, so be clean.
IV. Ghusl (Shower) This is required after you have intercourse or your genital
area is dirty or after physical activity. Secretions that come from your body produce germs.
1. To take plenty of water in your mouth and gargle.
2. To take water in your nose and clean it.
3. To wash all your body (not even leaving a place as small as a pinhead dry).
When you are about to perform these acts, (prayer, wudu, ghusl) in your heart make intention, “I intend to
perform wudu, etc.”
V. Teyemmum (to clean yourself without water for salat)
1. To make the intention to make teyemmum for Allah’s sake (wudu or ghusl when there is not
any available water).
2. Lightly hit your hands on clean dirt (such as a wall or the sand) then wipe your face and
hands up to the wrist (for wudu).
Basically this is ‘symbolic wudu’ executed when you are traveling or in a situation where there
isn’t any water or the water is unusable. For example, like when you are in a plane and you want to pray
but you cannot get to the water, or the water is dirty and it would be unhealthy to wash with it, or the water
is freezing cold, or you are at work - then tap your hands on a clean surface and wipe your hands and arms
up to your elbows and then your face.
VI. Salat (Formal Prayer)
Outer: Preparation of Salat
1. To take Wudu (washing yourself for this purpose, see above)
2. To have clean clothes & environment, free from animal refuse & garbage.
3. To cover the parts of the body that Allah has ordered (QRT Sufi men & women are to have only face, hands and feet showing).
Inner:
1. To start the prayer with “Allahu Akbar”.
2. To stand (qiam).
3. To recite Quran.
4. To put hands on knees and bow (ruku).
5. To prostrate (sejda).
6. To sit at the end of the prayer long enough to send blessings to the Prophet (a.s.) and make personal prayers (du’a). When performing du’a don’t close your eyes and don’t look up.
`,ru=`Outer: Preparation of Salat (continued)
4. To turn towards the Qible (towards Mecca) when praying. (cont. on page 17)
5. To pray on time
6. To make intention (niyat) according to the time of prayer (example, “I intend to pray the noon prayer”).
This intention does not have to be verbal.
This is the minimum that Allah has requested to perform salat. Allah did not make a lot of rules
and regulations to follow, for instance like looking only in front of your toes when bowing or looking at
your heart when standing up or placing your head a certain way when making sejda. Allah left these
decisions for the Prophet (a.s.) and the other people. The reason for this is because Allah does not want to
hinder you to a certain form. Allah wants you to do what comes from your heart - that is unique to you.
Always keep your attention on Allah in your heart, make rabita to Allah. You are praying to Allah, by
Allah, with Allah, for Allah. Remember, though, when you are praying with an Imam, even if you are shi’a
and he is sunni, no matter the differences, you have to do what the Imam does.
If you miss a prayer making it up is not a fardz, but it is a good thing to do. Abdul Qadir Geylani
and our pirs say to make it up. To make up a prayer you can make it up at the same time that you missed
one, for example if you missed the morning prayer, then on another morning you can say salat twice, or
after Isha prayer you can make up any prayers that you missed.
Also, when you are traveling Allah says that you can shorten your prayers; He is not saying that
you have to shorten the prayers. Some people shorten their prayers then pray Sunnah or extra prayers. If
you are going to pray extra prayers then there isn’t a reason to shorten the fardz prayer. But Allah leaves
this up to you. Do something from your heart and make a judgment according to the situation, this way the
religion can be flexible according to the time.
Also, the Prophet (a.s.) said that while praying don’t close your eyes, like other people do, and
don’t lift your head and look up. This gives the impression that you are thinking that Allah is up or outside
of your heart.
Levels of Nafs
Tariqa
By Shaykh Muhyiddin Ansari
There are seven pardahs (hijab, barriers, veils) between Allah and his bondsmen. Four of them are Hijab-i
Zulmani, or veils of darkness, two of them are Hijab-i Nurani, or veils of light, and one is the veil of Miraj
(night travel to Allah). All Muslims are in the first level (or pardah). They are the sailors of Islam.
The seven veils or partitions are the seven nafs. They are:
1. Nafs-i-Ammara
2. Nafs-i-Lawwama
3. Nafs-i-Mulhama
4. Nafs-i-Mutmaina (these first four are the veils or partitions of darkness)
5. Nafs-i-Radhiyyeh
6. Nafs-i-Mardhiyeh (these are the veils or partitions of light)
7. Nafs-i-Sufiyyeh, (the veil or partition of Miraj)
Nafs-i-Ammara (first level)
Maqam: Stinginess, ignorance, passion, pride, jealousy, anger or cruelty, enmity, lust and lowly manners
like them.
Key: La ilaha illallah
Seyri: (path it takes): lillahi-i-ta’ala (to the path of Haqq)
`,iu=`Alem (world): Alim’ul Mulk (the world of form, physical manifestation).
Mahal (place): Sadr (chest)
Warid (path of study): Shariat
Situation: Inclination
Nur (light): sky blue
Day: Saturday
Muekkil (client): fard
Ayat (verse): Nafsal ammarata bissu’i
Prophet: Adam (a.s.)
In this maqam the salik (student) with the order of command of his Shaykh says the zikr of “la
ilaha illallah” increasingly until he sees sky blue in his dream or vision. After this his road is opened and he
goes to the second level.
Dreams of this level which show that you are under the influence of Nafs Ammara: If one sees a
pig, it means haram (unlawful, forbidden things). Seeing a dog means wrath or anger. Seeing a snake,
elephant, or scorpion indicates sins by words such as backbiting, slander, swearing, etc. Seeing a mouse
means doing something hidden from public view but known to Haqq. Seeing a hornet means that one is
starting some work that serves no purpose or has no use. Seeing dump yards or houses means the nafs has a
tendency toward worldly things. Seeing opium, hashish or liquor bars means that one is serving corrupt
doubtful ideas and drinking liquor. Seeing muddy floodwater and similar things means your nafs are under
the influence of air (desires).
Nafs-i-Lawama (second level)
Key: Ya Allah
Indications: Hawas (desires), makr (cheating, tricks), conceitedness, kahr (overpowering), lawm (blame,
reproach), gaybah (backbiting), riya (lies), kizip (speaking falsely), and other qualities similar to these.
Seyri: (path it takes): Lillahi Ta’ala (to the path of Haqq)
Alem (world): Alem Melekut (the world of the angels)
Mahal (place): Qalb (heart)
Warid (path of study): Tariqat
Nur (light): red
Day: Sunday
Muekkil (client): Nuqaba (elders, especially the 12 chiefs of Muhammed (a.s.) in Medina)
Ayat (verse): 75:2 Al-Qiyahah: “Wa la uksimu bi nafs” (I call to witness the accusing voice of man’s own
nafs)
Maqam: Lawama
Level: the light of aql (understanding)
Planet: Utarid (Mercury; the essence of Utarid exists in the qalb [heart])
Prophet is Nuh (Noah) (a.s.): Nuh means ruh (spirit), which invites the vessel of the nafs to Haqq. The
vessel (as in the story of Noah) is like a ship/ark. The ship represents the body of humanity. Ruh is saved
along with its ship (or container) and it reaches Haqq. The ocean on which the ship sails represents the
attribute of jalal that destroys the ones who don’t obey or climb aboard the ship of the nafs. The sea
represents Allah’s Jalal.
In this level, the salik continues to make zikr using the honorable name “Ya Allah” until he sees
red in his dream or when he closes his eyes. He then passes to the third maqam. In this maqam the student’s
love should be “la maqsudi illallah” (No goal but Allah). The student shouldn’t have any other love in his
heart except for Allah. He should be connected to the high horizon. Here the secret of “Kataba fi
qulubihum-ul-iman” manifests itself. Its place is the core of iman (belief) 53:22 “[As for the true Sabians] it
is they in whose hearts He has inscribed faith.”
Dreams: If you see any of the following: sheep, cow, horse, camel, fish, pigeon, dove, geese,
chicken, honeybee or any edible fruit, these are a form of Nafs-i-lawama. If you see any of the following:
unburned candles, palaces, houses, clothing, buildings, ships, or pastry, soft drinks, honey and such, these
are qualities of nafs-i-lawama. These qualities or attributes manifest a variety of colors in human beings. To
pass this level one needs to continue “Ya Allah” with perseverance and patience.
Interpretations: Halal or lawful sheep and young cows mean usefulness for people. A camel means the
person is able to carry a great load. A fish indicates earning lawfully. Seeing things of the above nature
means a desiring of various kinds of provisions. If one sees a pigeon it means purity in your animal life.
`,au=`Flying birds mean acquiring the attributes of various manners. If one sees a bee it indicates attaining better
manners. If you see cooked food it is the symbol of your nature. If you see unripe fruit it means you have
behaved immaturely. If you see ripened fruit it means your behavior is mature or you are in the process of
maturing. If you see a market, bazaar, malls, etc., it means your nafs are buying and selling and all you’re
getting is the interest.
Nafs-i-Mulhama (third level)
Maqam: Three
Key: “Ya Hu”
Qualities: sehave (generosity), Kana’a (to be content), ilm (knowledge), hilm (softness), tevaa’zu
(humility/modesty), jud (liberality), tawakkul (to make Allah a trustee, to surrender, to make Allah your
wakil, to leave it up to Allah), tenezzul (to lower yourself), ibada (worship, prayer), shukr (thankfulness),
riza (to be happy and in harmony with Allah’s decisions), and high attributes like these. While the student
is obtaining these attributes, his nafs have not yet reached the state of fana (being nothing) yet.
Day: Monday
Place: Ruh / Prophet: Idris
Nur: Yellow (different ways to see the color: close eyes – at third eye what color do you see, or what color
is in your dreams (if you don’t see colors, don’t panic))
The student continues the zikr “Ya Hu” until the color yellow is manifested. The secret that will be
manifested is Allah, when it is manifested the student passes to the fourth level (maqam).
Dreams and manifestations: woman, unbeliever, uncovered head, half-shaved beard, lame or
crippled person, mute, deaf, black, bald, drunkard, tobacco, hashish, robber, comedian, butcher, cross-eyed
person, monkey owner, fisherman. If you see any of these in your dream, it means you must pass these
qualities before you can pass to the next level.
Interpretations: Seeing a woman means short thinking (it is forbidden for women to pray when
they are menstruating, that is why their thing is incomplete – that symbolizes short thinking), an unbeliever
means incomplete religion. A shaved head or partly shaved head means incomplete Shariat. An uncovered
head means an incomplete school of religion. Lame means holding the truth, deaf means avoiding Allah’s
commands, crippled means hearing or listening to things concerning worship but avoiding them. Mute
means keeping quiet when one should be backing or supporting the truth. Black means to shame someone.
A man without a beard means one is avoiding the sunnah. Seeing a drunkard represents one’s selfish
desires. A robber means you are hiding your worship. A magician, acrobat or comedian means quitting
worship (ibada) and starting haram (forbidden) things. A butcher means watching illegal things or sinning
with your eyes. Cross-eyed means leaving the straight path and going down a false path.
In order to get rid of any of the qualities described above, one should continue to zikr “Ya Hu”.
Nafs-i-Mutmaina (fourth level)
Maqam: Fourth
The Key: Ya Haqq
Qualities: Karim (dignity), zuhd (abstinence), ibada (worship), ikhlas (sincerity), courageous, loyalty, and
similar attributes.
Place: Sir (place in the heart -secret)
Nur: Green
Prophet: Abraham
Day: Tuesday
On this level the Murshid is in the position of Al Khidr and the murid is in the position of Musa
(Moses) (a.s.)
There is a place on Bahrain Island in the Red Sea where Musa and Khidr meet which is used as an
analogy to demonstrate the positions the student goes through in the attainment of this level. The presence
of Yahya (John) means the presence of Ruh (spirit/soul). A confirmed unbeliever means the visualization
of Jalal (majesty). The salik works on this until the required color is manifested. His or her path is Ma
Allah (to be with Allah). After the color is manifested, the salik may proceed to the fifth level with the
permission of his or her Shaykh. Those who pass the fourth level are considered Insan-i-Kamil (mature
human beings).
`,ou=`Dreams: Reading the Quran, Prophets, sultans, judges, religious leaders, imams, alims, scientists,
scholars, the Ka’aba, Medina, Jerusalem, mosques, tekkes, places of worship, flag, bow and arrows, prayer
beads, etc. If you see these things in your dreams, it means that you are in Nafs-i-Mutmaina and your
Murshid will give you life by inculcation of Ya Haqq. You will have to continue on this name.
Interpretations: Seeing the Quran means purity of heart. Interpretation depends on the sura being
read. Seeing a Prophet shows the strength of Islam (surrender). Seeing kings, rulers, etc., means you are
using yourself for a good cause. If you see Shaykhs, Murshid, etc., it means that divine rules, regulations,
structure are getting through to your heart and soul. An imam, lecturers, scholars, means obedience to
Allah’s commands. Seeing Mecca, Medina, the Ka’aba, Jerusalem, shows the cleanliness of the heart.
Mosques, schools, flags, bows and arrows, guns, indicate a weakening of doubt and fear that is present in
you induced by Shaytan.
Nafs-i-Radhiyyeh (fifth level)
Maqam: Five
The Key: Ya Hayy
Qualities: Halvat (seclusion), tark (leaving and quitting the bad habits/nafs), Lughub (maturity), fikr
(contemplation), do zikr and shukr (give thanks), things that are the property of the Jihab-i-Nurani (veil of
light).
Day: Wednesday
Place: Secret
Nur/color: White
Prophet: Musa (Moses) (a.s.)
Secret: is Fillah (for Allah)
The salik works on the name Ya Hayy increasingly under the command of his Shaykh and after
the manifestation of the color the salik passes to the sixth maqam.
The sixth maqam is the circle of the loved one. You enter into this level with love, courage,
bravery, and perseverance.
Dreams and Interpretations: They are produced proclaiming the return. Seeing Vildan, houris, angels and
paradise shows the maturity of aql (understanding). A rose, or a road, means a personal destination and
path. At this level nearness to Allah is attained. This level means staying among the slaves of Allah. Allah
is happy with them. These people have earned Allah’s good will. To be able to see things happening in the
circle you need studying and education and practice and you need to be pleased with your Murshid. You
must follow your Murshid with a loyal, pure, and sincere heart.
Nafs-i-Mardhiyeh (sixth level)
Maqam: Six (Qutb maqam)
The Key: Ya Qayyum
Qualities: Good nature, knowledge, appreciation tafakkur (contemplation) and similar things.
Saayr: Anillah-i ta’ala
World: Alem-i shahadot (the one that you see) and Hayolet (world of illusion)
Nur: Black
Day: Thursday
Place: al-Khafi (hidden)
Warid: as-Sharif
Prophet: Isa (Jesus) (a.s.)
Situation: Hal, Baka billah, be forever with Allah – (kinetic energy is forever – potential energy (form) it
will cease to exist) bring consciousness to Allah to be kept forever.
Muekkil: al-Awtad: cunud: 1. Ilm’el Yaqin 2. Ayn’al Yaqin 3. Haqq’al Yaqin
Ayat: “Irji’i ila rabbiki radiyatan mardiya” 89:28 (Return unto thy Lord, content in His good Pleasure!)
Maqams: “Fa-dhkuli fi’ibadi na-dkuli jannati” 89:29-30 (Enter thou among My bondmen! Enter thou
My Garden!)
Star: Venus, the substance of Venus is also present in Nafs Mardziyah
Dreams: The seven layers of heaven, which means Nur of Wahdah or lights of unity. If you see stars, the
lights of nafs, if you see the moon, it is the light of aql (intellect). In this level of Marduja one has to appeal
to his/her murshid whole-heartedly by outer language and from the heart and the murshid has to direct his
`,su=`heart to the salik so that this journey can be achieved. When you reach here you have to increase your
relationship with your Shaykh and the Shaykh will give his acceptance and pleasure to you. Then you can
go up. The murid is close to the end and he has plenty of enemies within himself. By continuing Ya
Qayyum with loyalty, sincerity he reaches his goal of moving up to the next level.
Nafs-i-Kamile or Nafs-i-Safiye (pure Nafs) (seventh level)
Maqam: Seven
Ayah – Huwellezi iialakakum min nefsin vahidetin
Its characteristic is being the store of divine secrets, being the perfect Heart. Being the house of greatness,
glory.
World: everlasting unity
Circle: Zaat-i-Qul (Allah’s whole person)
Place: line
Soldier: Nur-ul Haqq (light of the True)
Light: Bi Aman (by belief)
Prophet: Muhammed (a.s.)
Attributes in dreams: Rain, snow, hail, rivers, fountains, springs, wells, sea, ocean. These are the
attributes of nafs-i-safiye (purity). Rain means the mercy of Allah. Snow means the attribute of the person
of Allah. Rivers and fountains show purity of the heart.
This is the circle of seeing the path. When Murshid inculcates “Ya Qahar” to the Murid, his heart
should not waver.
Maqam (Spiritual Station) of
Arifs (Gnostic)
By Shaykh Muhyiddin Ansari
Arifs
The maqam or levels of Arifs (men of understanding) are three:
1. Ilm al Yaqin (Obtaining knowledge by studying – sure knowledge, outer and inner)
2. Ayn al Yaqin (Obtaining knowledge by observation - experience)
3. Haqq al Yaqin (Obtaining knowledge from Allah – Allah teaches directly, as in the Quran
being given to Muhammed (pbuh))
In order to acquire ilm you will have to practice with what you know. This is called “usulu ethari
sab’a,” a path of degrees, which are:
1. Muhabbest (rendering account, like the
tariqa)
2. Murid (student, answering to tariqa
through Shaykh)
3. Sufi (novice)
4. Dervish
5. Awliya
6. Irshad
7. Fanafillah
8. Bakabillah
9. Sayrifillah
10. Sayr-i-ma Allah
11. Tajallay-i-sirr
12. Tajallay-i-sirr-i-sirr
`,cu=`1. Muhabbest (found the tariqa, attracted, but not entered the path) – is like an air current or breeze
2. Murid (gained understanding of what Sufism, you took biat, you surrendered your will power to
Allah through the Shaykh) – is like fire
3. Sufi (you are like the Sufis with the Prophet (pbuh) who are studying Sufism) – is like water
4. Dervish – is like earth. When there is no air the fire will not burn. When fire isn’t put out water
will not run. When water is not evaporated food will not cook, and plants will not grow. Without
these four essentials nothing will happen, no life.
5. Awliya (plural of waliy) means protecting friends, sages, or saints. Awliya have four qualities:
they are like the wind, like the sunlight, like the water, and like the earth. In other words, they are
humble and cool; they comfort the creation as a breeze. They give life to the world as water does,
and finally they are like a dervish with a heart like earth: modest.
6. Irshad – (or enlightening) guide people to Haqq, the True or Real. They teach them or let them
know the Shariat and Tariqat that leads to Allah. Wind, breeze, or air is Shariat, fire is Tariqat,
water is Marifet, and earth is Haqqiqat.
7. Fana’fillah means to stop or leave actions or practices such as selfishness, conceitedness, self-
centeredness, pride, cruelty, jealousy, stinginess, and all similar bad actions as well as eating,
putting on, listening to, or looking at unlawful things.
8. Baka’billah refers to the experience or knowing of Paradise, the Hereafter, Hell, Mizan
(balance/judgment), as well as acquiring the understanding and qualities of questioning,
answering, practice, punishment, ilm* as well as contact with Houris, Gilman and Vildan (servants
in Paradise). Shafa’ah Rasul Allah (intercession of the Messenger), didar and Haqq.
9. Sayri’fillah: Journey for Allah, means that everything other than Haqq has been removed from his
heart. Those at this level ignore and leave behind the actions of all creatures and listen only to the
word of Allah. They say words that come from the spirit of the Wali of Allah and turn their eyes
towards Haqq. To take everything other than Allah (masiva) out of your heart. To quit
concentrating or focusing on all the creation and turn your eyes toward Allah. To listen to the
words of Allah and to say the words of the walis of Allah. Only does what will please Allah.
10. Seyri Maallah: Travel with Allah. Allah’s help, unity, gaze, and presence, all His perfection
never leaves the mentioned person’s nafs, mind and soul not even for a moment, an hour, any day
or night. Allah is with you in your journey.
11. Tecellayi-sirr: Secrets of creation. At the beginning of souls, the All High, the True, ordered your
soul and sent you from the high world to the lowest of the low world, from everlasting world
(Alem-i Baka) to perishable world, ending world (Alem-i fana). And He said to you, “Don’t forget
me, I am your loved one. I am your Goal. I am the One who formed your form with the hand of
Power. Understand My Secret. Don’t be unaware. Don’t forget My Secret and be deceived. Don’t
go to other doors than Mine, don’t give your heart to others than Me, because you will turn around
and come to My dergah.” This is fana upon fana. This is Tecallayi-sirr. A person, a human being,
cannot be insan-i kamil (a mature human being) until he or she gets into this maqam.
12. Tecellayi-sirr-i sirr: Secret of Secret of Creation. It is to give up your body, to surrender your
nafs to its origin, to Allah in your soul through your heart. It is to dissolve your own presence in
the presence of Allah and to bring outer (zahiri) and inner (batini) together and to get out of the
way, so that only everlasting (baki) Allah can be left.
`,lu=`The Twelve Names of Allah To Get These Maqams:
1. La ilaha illallah
2. Ya Allah
3. Ya Hu
4. Ya Haqq
5. Ya Hayy
6. Ya Qayyum
7. Ya Qahhar
8. Ya Qadir
9. Ya Qawi
10. Ya Jabbar
11. Ya Malik
12. Ya Wadud
Ilm (Knowledge)
Ilm (knowledge) is divided into two sections: Zahiri (outer) and Batini (inner). The second, Batini, has
four divisions; thus equaling five levels of Ilm.
1. The first one reforms the nafs. (zahiri)
2. The second one’s four divisions are: (batini)
a. Ilm-i ibret - (example, sample, exemplary knowledge, observation and need). Reforms
the heart. Observe things and contemplate and receive an example or sample and get a
lesson from that.
b. Ilm-i hikmet - (knowledge of Wisdom). Reforms soul. Allah gives you wisdom in heart.
c. Ilm-i esrar - (knowledge of Secrets). Takes you to the Ocean of Secrets. Allah opens it
to you and most likely you can’t share with anybody and even if you do they may not
understand. That is why half of Sufism is learning on your own and why Allah will share
His knowledge with you. That will be your secret.
d. Ilm-i kudret - (knowledge of Power). It takes you to the ocean of (sirri sirr) secret of
secrets, making you secret.
Positions of Ruh (Soul)
The sheath (envelope) of Sirr (secret) is Ruh (soul). The sheath of soul is qalb (heart). It is larger than all of
them outwardly (zahiren). In spite of this, it is hidden.
1. Ihva’s connection is Truth (reality) in the middle of the chest.
2. Ruh (soul’s) connection is from the left side of the chest.
3. Nafs and Natika are under the right nipple.
4. Ruh’s inner is Sirr. (hidden)
5. Sirr’s inner is Sirr-i sirr. (more hidden)
`,uu=`The Crown of Prophet Muhammed
Peace Be Upon Him
By Shaykh Muhyiddin Ansari
1. The writings on the taj (head/crown) sent for our Honor of the Universe, Muhammed (a.s.)
At the Top:
Kavliu ittaallah kulli shay’in khalifun illa wa shae (shaykh could not translate)
In the middle:
La ilaha illallah (There is nothing to worship other than Allah)
Inside:
Yasin wal kurun’il Azim (Hakim)
Outside:
La ilaha illallah
Muhammed’er Rasulullah
Ali Veliyullah
Fe Eyname tuwallu wa semme wechullah (Allah’s face is wherever you
turn)
In the back:
Ademe Esmea (taught Adam the names)
2. Hirka – Our Coat (Cloak) in general for Sufis
The purpose and the meaning are two.
1. Outer Meaning: It helps the person to be remembered and distinguished.
2. Inner Meaning: (batin) meaning:
The color means retreat
The skirt part means service
Its sunnah is to wear/attain it by the hands of one’s Murshid-i-Kamil
Its Fardz (obligatory) is to speak the truth and to follow the true
(correct) path.
Its iman (belief) is to get rid of pride and be humble and heart making (don’t break hearts, heal
the heart).
3. The Honorable Hirka of our Prophet (a.s.)
The writing on his Hirka is:
1. On the collar: Ya Sabur (patient), Ya Shakur (grateful) and Ya Karim (rich)
2. On the skirt: Ya Wahid (one), Ya Ahad (whole), Ya Ferd (individual), Ya
Samad (source)
4. Post (your lambskin) – everyone should have a skin (general knowledge for any Post)
1. The head of the skin is surrender
2. The feet are service, “mesaiye ademul fukora,” (work for or be the servant of the faqr, the
poor – the one who knows that everything belongs to Allah and not to him)
3. The right side is retreat
4. The left side is to hold hands (to give a hand to the needy)
5. Condition: Each time you sit on it, to sit giving respect and plead to Allah
6. The center is Love
7. Its mihrab is the hearts of the Pirs
8. Its Takbir-i Shariat is to drop the neck outside
9. Its Takbir-i Tariqat is to drop the neck inside
10. Its Haqqiqat is to sit down
11. Its Marifet is to know what it stands for
5. The Post (lambskin) of our Messenger (a.s.) – this is for reference to know that everything has
these prayers, and always keep your eyes on Allah
1. The skin (Post) of our Prophet (a.s.) has a word written on and an angel assigned to each leg.
`,du=`2. Right front leg: Ahsentu ileyke ya Ali. It represents North. The angel’s name is Abdullah
Samad. He deals with Shariat
3. Left front leg: Ahsentu ileyke ya Ali. It represents South. The angel’s name is Abdur Rahman
and he deals with Tariqat.
4. Right back leg: Ahsentu ileyke ya Ali. It represents East. The angel’s name is Abdul Majid.
He deals with Haqqiqat.
5. Left back leg: Edrikni ileyke ya Ali. It represents West. The name of the angel is Abdul
Jabbar. He deals with Marifet.
All power belongs to Allah, not to Ali, not to anyone. Allah has assigned Ali as the Walliullah. Ali is the
head of all Walis. He is the representative and keeper of the knowledge. Our Prophet (pbuh) said, if I am
the building of knowledge, Ali is the door. He didn’t make Ali the door, Allah made Ali the door. Color of
the Post is black and white. White for Qadiri and black for Rifi’a. Now they even dye the post, do as you
wish. Put down Post as said in the Khalifa Manual.
UNDERSTANDING PERSONAL AND GROUP ZIKR
BY SHAYKH TANER
“These hearts are subject to corrosion; to polish them, one should regularly read the Quran, remember
death and join the circles of zikr.”—From the Prophet (a.s.)
Zikr means remembrance of Allah. The Quran tells us to practice zikr in order to expand our
aliveness, increase our spiritual attunement and find rest for our hearts. In doing so, we invoke the
immediate experience of divine attributes, specifically activating the energies of compassion and mercy and
drawing blessings from the angelic realm.
Zikr offers us the opportunity to express and reinforce our conscious alignment with the reality
that Allah is our creator and that our position in the natural order is that of the created, and that we are
dependent upon Allah’s mercy for our very existence.
Finally zikr creates in us the habit of remembrance. Habit is the language of the physical body,
which is like a child that takes comfort in repetition. Zikr allows us to establish in our bodies a habit that
nourishes our heart at a deep level.
In the Quran-i-Kerim it is written that Allah is the light of the heavens and the earth. Some people
who interpret the Quran say that this ayat (verse) is talking about electricity and that Allah is describing the
bulb and the filament of the electric bulb, and how it glows. But as Sufis we say that Allah is referring to a
greater light. This is the light that is found in the houses where Allah gave permission to do His zikr.
When we do zikr, it is important for us to understand that we are not the ones actually doing it. It
is Allah who lets us do it. Zikr is a great favor given to us from Allah so that we can learn. As Sufis we
must be mindful that it is always Allah who does everything. Yet Allah is the one essential element in
every action that most people overlook. When we overlook the presence of Allah in every action, we begin
to think that all the power belongs to us. When we forget Allah, then we make mistakes. Allah is not
hidden. Allah is very apparent. The greatest miracle is that although Allah is apparent, nobody can see
Allah.
We take Allah for granted, even when we think we are doing good deeds (even this is not
permitted). Don’t think that you are doing anything. Allah is letting you do this. Coming together to make
zikr is Allah’s grace. We are all together here, but it is only through Allah’s grace that we are here. It is
Allah’s favor upon you that we are here talking about Allah.
Allah taught Abu Bakr with the heart so they do silent zikr, khafi zikr. In the Quran it is said that
they were leaving Mecca and going to Medina and they hid in a cave. Abu Bakr was afraid they were going
to be caught by the enemies and Allah sent the angels to give this ayat; Tell your comrades to put his
tongue on top of his mouth and then say Allah silently. That is why the Naqshis from Abu Bakr do zikr
`,fu=`like that. To Ali He taught from the mouth, outer, so we do jahri zikr. Everything is with zikr and with
Allah and surrender.
ON THE NECESSITY OF ZIKR
Zikr (also written as dhikr) is the remembrance of Allah with the tongue and heart. Through zikr
we polish the heart so that we may reflect Allah’s Nur (light). Some have suggested that the practice of
zikr is an innovation of the Sufis in later times, but we find Allah’s instructions to practice zikr in the Holy
Quran:
“Who have believed and whose hearts have rest in the remembrance of Allah. Verily in the
remembrance of Allah do hearts find rest.” (13:28)
“Recite that which hath been inspired in thee of the Scripture, and establish worship. Lo!
Worship preserveth from lewdness and iniquity, but verily remembrance of Allah is more
important/greater. And Allah knoweth what ye do.” (29:45)
“O ye who believe! Remember Allah with much remembrance.” (33:41)
PERFORM ZIKR REGULARLY
We also see from Hadith that it was the practice of the Prophet (a.s.) to perform zikr on a regular
basis.
Narrated by Abu Ma’bad (the freed slave of Ibn ‘Abbas): Ibn ‘Abbas told me, “In the lifetime of
the Prophet it was the custom to celebrate Allah’s praises aloud after the compulsory congregational
prayers.” Ibn ‘Abbas further said, “When I heard the zikr, I would learn that the compulsory congregational
prayer had ended.”
It is through zikr that we come closer to Allah: “Remember me, I shall remember you.” (2:152) In
a Hadith Qudsi, the Prophet (a.s.) narrated: “Allah says, ‘I am to My servant as he expects of Me, I am with
him when he remembers Me. If he remembers Me in his heart, I remember him to Myself, and if he
remembers Me in an assembly, I mention him in an assembly better than his, and if he draws nearer to Me a
hand’s span, I draw nearer to him an arm’s length, and if he draws nearer to Me an arm’s length, I draw
nearer to him a fathom length, and if he comes to Me walking, I rush to him at (great) speed.’” (Sources:
Sahih Bukhari and Sahih Muslim)
Allah has drawn close to Him those who remember Him. The Prophet (a.s.) said, “The devotees
have surpassed all.” They asked, “Who are these exceptional people (Mufarridun), O Prophet of Allah?”
He replied, “Those men and women who remember Allah unceasingly.” (Source: Sahih Muslim) These are
the people who are really alive. Abu Musa reported, “The likeness of the one who remembers his Lord and
the one who does not remember Him is like that of a living to a dead person.” (Source: Sahih Bukhari)
TRANSFORM NAFS THROUGH ZIKR
Remembrance of Allah is the foundation for transforming the nafs (ego). Whoever succeeds in it
is blessed with the close friendship of Allah. That is why the Prophet (a.s.) used to make remembrance of
Allah at all times. When a man complained, “The laws of Islam are too heavy for me, so tell me something
that I can easily follow,” the Prophet (a.s.) told him, “Let your tongue be always busy with the
remembrance of Allah.” The Prophet (a.s.) would often tell his Companions, “Shall I tell you about the
best of deeds, the most pure in the sight of your Lord, about the one that is of the highest order and is far
better for you than spending gold and silver, even better for you than meeting your enemies in the
battlefield where you strike at their necks and they at yours?” The Companions replied, “Yes, O
Messenger of Allah!” The Prophet (a.s.) said, “Remembrance of Allah.” (Reported by Tirmidhi, Ahmad,
and Al-Hakim, who considers reliable its chain of narrators.)
ZIKR CIRCLES
Joining the assemblies or circles of zikr is a commendable practice as shown by the following
Hadith: Ibn ‘Umar reported, “The Prophet (a.s.) said, ‘When you pass by a garden of Paradise, avail
yourselves of it.’ The Companions asked, ‘What are the gardens of Paradise, O Messenger of Allah?’ The
Prophet (a.s.) replied, ‘The assemblies or circles of zikr. There are some angels of Allah who go about
looking for such assemblies of zikr, and when they find them, they surround them.’”
`,pu=`It is reported in Sahih Muslim that Mu’awiyyah said, “The Prophet (a.s.) went out to a circle of his
Companions and asked, ‘What makes you sit here?’ They said, ‘We are sitting here in order to remember
Allah and to praise Him because He guided us to the path of Islam and He conferred favors upon us.’
Thereupon he adjured them by Allah and asked if that was the only purpose of their sitting there. They said,
‘By Allah, we are sitting here for this purpose only.’ At this the Prophet (a.s.) said, ‘I am not asking you to
take an oath because of any misapprehension against you, but only because Gabriel came to me and
informed me that Allah, the Exalted and Glorious, was telling the angels that He is proud of you.’”
Abu Sa’id Al-Khudri and Abu Hurairah reported that the Prophet (a.s.) said, “When any group of
men remember Allah, angels surround them and mercy covers them, tranquility descends upon them, and
Allah mentions them to those who are with Him.”
GETTING READY FOR GROUP ZIKR
Before zikr the Shaykh’s lambskin, called the Post, is set on the floor with special prayers. The
skin represents surrender, as the lamb has this character. We say Al Fatiha (the opening chapter of the
Quran) at the head of the Post for Muhammed (a.s.) and then for Imam Hasan, Imam Husayn, and Hazreti
Fatimah, Hazreti Ali (May Allah be pleased with them). After this we pray (salat) the fardz (obligatory)
prayer, usually Isha, the evening prayer.
THE OPENING
As a way of announcing that zikr is about to begin, we sing Selatul Kemaliya, a type of salawat,
which is our asking Allah to send His peace and blessings upon the Holy Prophet Muhammad.
DESTUR/MEYDAN (PERMISSION)
We start by asking our Pirs (the founders and saints of the order) to give us permission to do zikr.
This is also known as Meydan, which means opening a circle of zikr. You must call the Silsillah or the Pirs,
for when you do the Pirs take over zikr and help you while the angels circle and protect against shaytan and
jinn. This is how you get the blessings.
All of the following is done while sitting down. This is because Allah says in Quran-i-Kerim,
“Remember Me much sitting, standing, and reclining and look into the space and contemplate and
say, ‘O Allah, you didn’t create all this for nothing, and protect me from the torment of fire.’”
BISMILLAH ‘R RAHMAN ‘R RAHIM (IN THE NAME OF ALLAH, THE MOST COMPASSIONATE, THE MOST
MERCIFUL)
We rock back and forth as we repeat Bismillah ‘r Rahman ‘r Rahim. There are certain movements
that accompany the words that we say during zikr. These are in part based on the movements that are
found in nature. The way we move is also based on how the other prophets have moved. For example, the
Jewish people have a way of rocking forward and back in their worship as we do in zikr. Our movements
combine those of all three religions, which are in fact one religion.
ESTAUGHFIRULLAH, TUBTU ILA ‘LLAH, WE NA’ AYTU QALBI AN MA SIWA ‘LLAH. (Allah forgive me, please
cleanse my heart of everything but You.)
In the beginning, we were with Allah. Then we descended to this material world with the promise to Allah
that we would remember Him. But in this world, we forgot our Creator. When we realize this, we ask
Allah for forgiveness, so that He will show us how to get back to Him. Zikr represents our ascension back
to Allah.
ALLAH HUMMA SALLI ALA SAYADINNA MUHAMMEDIN WA ALA ALIHI WAS-SAHBIHI WA SALLIM (MAY
ALLAH GIVE BLESSINGS AND PEACE TO THE PROPHET MUHAMMED AND ON HIS FAMILY AND
COMPANIONS, PEACE.)
Allah appointed a guide in Muhammed (a.s.). Allah said that we should send peace and blessings
upon the Prophet Muhammed. Then Hz. Muhammed (a.s.) shows us what Allah taught him.
`,mu=`THE BODY OF GROUP ZIKR
DESTUR (PERMISSION)
After the opening we ask for permission again.
LA ILAHA ILLA ‘LLAH (THERE IS NOTHING WORTHY OF WORSHIP BUT ALLAH)
As we repeat La ilaha illa ‘llah one movement is to sway from side to side, turning the head to the
right and to the left. This comes from Yunus Emre, the Sufi poet, among other sources. We say, La
ilaha…” while turning the head to the right, which represents the nafs, our body and the material world.
We are saying that it is not Allah. We say, “…illa ‘llah” while turning the head to the left, toward our
heart, which is where Allah’s Essence lives in us. Appearance is not Allah, the Essence is Allah.
Another way we move to La ilaha illa’ llah is forward to the right, back to center, then forward left
and back to center. This repetition represents the wheat field submitting to the wind, among other things.
We always come back to the center so as to say that everything ends in us. Allah, of course, is everywhere,
but we don’t need to look outside to find Him. We can find Him within us.
ALLAH, ALLAH
One movement is of the head from right to left with a quick breath between each Allah. This
becomes like a sawing sound. It is based on the story of the Prophet Zechariah, who while being pursued
cried to a tree to conceal him. The tree opened up and he entered, but his pursuers soon discovered him.
As they began to saw down the center of the tree, Zechariah realized his mistake; he should have called
upon Allah to save him, not the tree. So as the saw came closer and closer, he repeated over and over,
“Allah, Allah, Allah.” Our repeating Allah in zikr reminds us to seek refuge only in Allah. The focus is
always the heart, where Allah is. This doesn’t mean that Allah isn’t anywhere else, but this is your maqam, your
connection. This is where your connection is zat to zat.
ALLAH HU, HU ALLAH
We move the torso in a circular fashion. This represents the angels moving in a circle around
Allah’s Throne (Arsh).
The following is done while standing.
ALLAH, ALLAH HAQQ (HAQQ MEANS TRUTH/REALITY)
We bend at the waist and move the torso to the right and back to the center, then to the left and to
the center. This is similar to the previous motion which connotes the wheat field.
YA HAYY (LIVING)
At this time we may join hands in the circle. This is to reinforce unity in Allah. Actually, it is
traditional during the sitting portion to lock arms. We haven’t done that yet because Americans like to
have room; it is more comfortable for them. But with everyone locked arm in arm, men and women
separately, this really builds brotherhood. Everyone’s energy level rises with the group. If there is love in
someone’s heart, you get the benefit of that love. There is more power in moving together. We may also
repeat Hayy standing as we bend our knees and straighten up with each repetition. Our arms are bent at the
elbow in front of us and we move them up and down in time with the movements of our legs.
ALLAH HAYY, YA QAYUM (ALLAH EVER-LIVING, THE SELF-EXISTING ONE)
We turn the whole body with feet planted firmly. At Allah Hayy…we turn to the right, placing
left hand on the heart and at …Ya Qayyum turn to the left, placing right hand on the heart. In every
direction is Allah. In all of these movements we are trying to develop a body language. What we want to
do is make zikr with body, heart, soul, and mind. Each time you do zikr you should do it with all your
being.
YA WADUD, YA SALAAM (O LOVING ONE, O PEACE)
We turn to the left, moving in a slow circle, right arm extended with palm up and left arm
downward with palm down. This time we are activating Allah’s love and peace in the universe. In this
world love and peace are not usually together. The only time when love and peace are together is when nafs
`,hu=`is not around. When there is love, there is fire, frustration, disappointment, and expectation. Only in
Divine Love is peace and love together. This is what we are trying to attract, with Allah’s permission, to
the universe.
HU (YOU, REFERRING TO ALLAH, IN ARABIC, 3RD
PERSON SINGULAR, NOT MALE OR FEMALE)
After such an active zikr people get tired, and with Hu we relax. At the same time, Hu sums
everything up. At this time we also sing a song that sends salaams (blessings) to all the members of our
silsillah (Our Pirs, the Lineage). At this time the Shaykh goes into the center of the circle, turns, and talks
to the Prophet (pbuh). We send salaams to him and to the whole universe. We sing his salawat in all
directions. Then we end zikr.
THE CLOSING
After zikr we make du’a (personal prayer). In this we also follow the example of the Prophet,
peace be upon him. Allah asked him what he wanted. He asked Allah to forgive his people. Then Allah
asked him what he wanted for himself. He asked that Allah not dismiss him from His service. Allah wants
us to make du’a because He wants to give us something. By making du’a we are also confirming that Allah
is Lord and we are not. In this way we return to being His bondsman. Allah said, “Irji,” which means,
“Return.” We make the trip to Allah during zikr, and then He wants us to return to the world. It is Allah’s
desire that we should be in this body, serving Allah in this world of manifestation.
SONGS, TURNING, AND PRAYERS
Some dervishes turn during zikr. Turning did not start with the Mevlevis. Shams was a student
of Abdul Qadir al Geylani. He wore the Qadiri color of green and he turned. From the beginning we
turned.
Prostration is also a part of zikr. Allah said, “Prostrate,” so we prostrate to show respect at various
times throughout the ceremony. There will be people who will come to your zikr and will criticize the fact
that we will prostrate in a circle. They will say that you can only prostrate to the Qible, because that is what
they have been told. So forgive them because they don’t know. We prostrate anywhere we want and we
prostrate to Allah. Allah says He is the Nur and He is in this house, middle of the circle His Nur is there so
we prostrate. We are not prostrating to each other’s image. So either ignore them or kindly escort them
outside.
We say Al Fatiha several times (seven times for seven verses) during zikr. Fatiha means Opening.
We open and close zikr with this sura (verse), and recite it during transitions. Just prior to closing, we
recite the three last suras of Quran. These are like a summary of the whole Quran, and reciting these is
traditional in virtually all religious ceremonies. These suras are a protection for those of us who have done
zikr, against evils of shaytan and evil jinns. Shaytan’s job is to take us away from the path or to stop us
from progressing. So he could be waiting right outside the door to tempt us with doubt or confusion or
fighting.
During group zikr we also sing certain songs (ilahis), which are designed to provide motivation
and rhythm. These songs tell us of our philosophy, of the wisdom of Sufism. For example, one of them
says, “You cannot reach the High Headquarters with vanity. You have to leave what you have and what
you have not. Then, come.”
CONTEMPLATION
Whoever contemplates an affair and seeks its cause finds that each of its parts has many parts of its own,
and finds that each of these is the cause of many other things. This is a contemplation that is worth a year’s
worship.
Whoever contemplates his devotions and seeks the cause and reason and comes to know it, his meditation
is worth seventy years of worship.
Whoever contemplates the divine wisdom with a strong wish to know Allah Most High, his meditation is
worth a thousand years of worship, for this is true knowledge.
From Pir Abdul Qadir al Geylani’s book ‘Secret of Secrets’
`,gu=`QUESTION/ANSWERS
I HAVE A QUESTION ABOUT OUR ZIKR AND OUR PRACTICES. THERE ARE SOME THINGS THAT WE DO IN
OUR PERSONAL ZIKR THAT WE DON’T DO IN OUR GROUP ZIKR, LIKE YA LATIF (THE SUBTLE) AND YA
QAHHAR (THE SUBDUER).
In your practices, when you say “Ya Qahhar” (the All Prevailing One) you are saying Ya Qahhar
to your nafs. Allah is being Qahhar on your nafs and so you are sacrificing your nafs for Allah. Ya Latif is
not actually in our practices. We say Ya Latif after Ya Qahhar because we don’t want to end our practices
with Ya Qahhar. We are weak. We have to end it with Ya Latif so Allah can be subtler. It’s more than that;
it’s tasteful, nice, beautiful.
SO YA LATIF IS THE OPPOSITE OF YA QAHHAR?
Not exactly, the opposite of white is not black. It can be brown; it can be red. How do you know it
is black? The opposite of Ya Qahhar is kindness, generosity, forgiveness; they are all opposites.
ANGELS OF ZIKR
Some of the angels travel throughout the world, seeking out gatherings of zikr (remembrance of
Allah). Abu Hurayrah said that:
“The Messenger of Allah said: ‘Allah, be He blessed and exalted, has angels who travel the
highways seeking out the people of zikr. When they find people remembering Allah, the Mighty and
Majestic, they call out to one another, "Come to what you hunger for!" and they enfold them with their
wings, stretching up to the lowest heaven.
Their Lord asked then, and He knows better than them, "What are My slaves saying?" They say:
"They are glorifying, magnifying, praising and extolling You." He asks, "Have they seen Me?" They say,
"No, Allah, they have not seen You." He asks, "And how would it be if they saw Me?" They say, "They
would be even more fervent and devoted in their praise and worship."
He asks, "What are they asking Me for?" They say, "They ask You for Paradise." He asks, "And
have they seen it?" They say, "No, Allah, O Lord, they have not seen it." He asks, "And how would it be if
they saw it?" They say: "They would be even more eager for it and they would beseech You even more
earnestly."
He asks, "And what do they seek My protection from?" They say, "From the Fire of Hell." He
asks, "Have they seen it?" They say, "No, Allah, they have not seen it." He asks, "And how would it be if
they saw it?" They say: "They would be even more afraid and anxious to escape it."
Allah says: "You are My witnesses that I have forgiven them." One of the angels says: "So-and-so is not
really one of them; he came (to the gathering) for some other reason." Allah says, "They were all in the
gathering, and one of them will not be excluded (from forgiveness)." (Reported by al-Bukhaari, al-Fath, no.
6408).
`,_u=`Qadiri Rifa’i Congregational Zikr Script
1. Shaykh sings with everyone - while standing facing
congregation. The Selati Kemaliye:
Allah humma salli wa sellim wa barik-a la seyyidina
Muhammedin wa ala alihi adede ilha milla-hilkerimi wa
ifdalihi. (3 times)
Allah humma salli ve sellim wa barik-a la murshidina
Muhammedin wa ala alihi adede kemalilla-hi wa
kemayeli kubikemalihi.
Allah humma salli wa sellim wa barik-a la shemsidduha
Muhammedin wa ala alihi adede kemalilla-hi wa
kemayeli kubikemalihi.
Allah humma salli wa sellim wa barik-a la bedridduja
Muhammedin wa ala alihi adede kemalilla-hi wa
kemayeli kubikemalihi.
Allah humma salli wa sellim wa barik-a la nurul huda
Muhammedin wa ala alihi adede kemalilla-hi wa
kemayeli kubikemalihi.
Mathari Maucudaqt, Muhammed Mustafa ra:
(Persian) Salawat -
Everyone says: Salawat
Allahumma salli ala Sayyidina Muhammedin wa ala’ aali
Sayyidina Muhammed.
2. Shaykh turns facing Mecca says:
Destur ya Allah. Destur ya Rasulallah. Destur ya Ali
Waliyallah. Destur ya Sahibel Sharia. Destur ya Sahibel
Tariqa. Destur ya Sahibel Haqqiqa. Destur ya Sahibel
Marifa. Destur ya Qutbul Zaman. Destur ya Sahibel
Meydan, al Fatiha
Everyone says: Salawat & Al Fatiha.
(Salawat) Allahumma salli ala Sayyidina Muhammedin
wa ala’ aali Sayyidina Muhammed.
(Fatiha) Bismillah’ir Rahman’ir-Rahim
Al hamdu lillahi, Rabbil alamin
ar-Rahman’ir Rahim,
Maliki-Yawmid-din
Iyyaka na’ budu wa iyaaka nasta’in
Ihdinas siratal mustaqim
1. Everyone Sings
The Most Perfect Blessings
Our God, send honor, peace and blessings on our
leader Muhammed as much as perfection (3 times)
(group standing)
Our God, send honor, peace and blessings on our
enlightener Muhammed and upon his family as much
as his perfections.
Our God, send honor, peace and blessings on the rising
sun at dawn Muhammed and upon his family as much
as his perfections.
Our God, send honor, peace and blessings on the full
moon Muhammed and upon his family as much as his
perfection.
Our God, send honor, peace and blessings on the light
of Allah Muhammed and upon his family as much as
his perfection.
The honor of all creation to Muhammed Mustafa:
Salawat -
Everyone says: (Salawat)
Our God, send honor upon our Leader Muhammed and
upon the family of our Leader Muhammed. (in other
words the whole creation gets blessed)
2. Everyone faces the mihrab (Mecca), feet sealed and
congregation says: Hu
Please grant permission O Allah. Please grant
permission, O Muhammed, O Ali. Please grant
permission, keeper of the Sharia, the Tariqa, the
Haqqiqa, the Marifa. Please grant us permission, the
Qutub of this time. Please grant permission, the keeper
of this place.
Everyone says: (Salawat)
Our God, send honor upon our Leader Muhammed and
upon the family of our Leader Muhammed.
(Fatiha) In the name of Allah, the Compassionate, the
Merciful,
Praise be to Allah, the Lord of the worlds, the
Compassionate, the Merciful
owner of the Day of Judgment
Thee alone do we worship, thee alone do we ask for
help. Guide us on the straight path, the path of those
`,vu=`siratal ladzhina an’ amta alaihim
Ghairil maghdubi alayhim, wa lad-zaalin. Amin.
Facing congregation Shaykh says: Hadzara Takbir-i
lillah
3. Everyone sings The Takbir three times
Allahü akbar, Allahü akbar, la ilaha illallah-hü wallahü
akbar, Allahü akbar wa lillahil hamd.
4. Everyone sits down. Shaykh says:
Bismillah’ir Rahman’ir Rahim.
Ridza’an Lillâh, Ridza’an Rasülullah, Ridza’an
Piran, Qabul ad Du’a
5. Then sejda, and sit up and face inner circle
6. Everyone sings: (as many times as your heart tells
you)
Bismillah’ir Rahman’ir-Rahim. 20 times
Shaykh says:
Illallah Hatemen Nebiyyine Rasulallah Hakkan wa
sitka.
Ya ayyuhal-ladzhina amanu, tubu ila ’llahi tawbatan
nasuhan.
7. Everyone sings:
Estaughfirallah, tubtu ila ‘llah, wa ’laytu qalbi a ma siwa
‘llah. 15 times
Estaughfirallah (said quickly, 33 times)
(Shaykh says in English): Estaughfirallahul-Azim, al-
Karim, alladzhi la ilaha illa huwal Hayyul Qayyumu,
wa atubu ilaih. (Wa nas-aluhut-tuwbatan wal
hidayatan wal magfiratan lana, innahu Huwat-
Tawwabur-Rahim. Optional)
8. (Shaykh says in English): A’edzhu billahi minash-
shaytan’ir-rajim. Bismillah’ir-Rahman’ir-rahim.
Inna ‘ilaha wal mala’ikatahu yusalluna alan-nabiyyi.
Ya ayyuhal-ladzhina amanu, sallu alaihi wa sallimu
tesliman.
9. Everyone sings: (10 times)
Allah humma salli ala sayyidina Muhammedin wa ala
alihi was-sahbi hi wa sallim.
Shaykh says:
Illallah Hatemen Nebiyyine Rasulallah Hakkan wa sitka.
10. Everyone sejda: (prostrates) Shaykh says the
upon whom You show favor, Not the path of those who
earn your anger, nor of those who go astray. Amen.
Shaykh says: Say Allah’s Takbir
3. Everyone sings: The Great Word:
God is Greater than Great, God is Greater than Great,
God is Greater than Great. There is no God but Allah,
and God is Greater than Great and unto God be praised.
4. Everyone sits:
In the Name of Allah, Compassionate, Merciful. For
the pleasure of God, for the pleasure of the Prophet of
God, for the pleasure of our Pirs, accept our
supplications,
5. Then prostrate, and sit up and face inner circle
6. Everyone sings:
In the name of Allah, the Compassionate, the Merciful
Shaykh says:
The Seal of our Prophets, messenger of Allah, Reality
and Truth.
O you, who believe, turn to Allah with a sincere
repentance.
7. Everyone sings: (In Arabic)
I seek forgiveness from Allah. I turn in repentance to
Allah, and please clear my heart of everything that is
not Allah.
I seek forgiveness from Allah.
Shaykh: I seek forgiveness of Allah, the Mighty, the
Generous, He, other than whom there is no God, the
living, the Eternal. And I turn unto Him. And we seek
returning, guidance, and forgiveness upon us, for truly
he is of the oft returning with mercy.
8. Shaykh says: I seek refuge in Allah from Shaytan
the banished. In the Name of Allah, the
compassionate, the merciful. Truly, Allah and his
angels shower His Prophet with peace and blessings.
O you, who believe, ask for Allah’s blessings and
peace upon Him likewise.
9. Everyone sings: (In Arabic)
O Lord, send honor upon our leader Muhammed and
on his family and companions, and peace.
10. Everyone prostrates: stay down and say HU
`,yu=`following Gulbenk:
11. Gulbenk (Overture) Letting people know who
gave you permission to do the zikr
Bi Tawwifiqi Allah. Shafaati Rasulallah. Bi ijazati Ali
Waliyallah. Bi ijazati Abdul Qadir Geylani. Bi ijazati
Ahmad er Rifai. Bi ijazati Abdullah Hashimi. Bi
ijazati Muhammed Ansari. Bi ijazati Muhyiddin
Ansari. Bi ijazati Taner Ansari.
Baraka Baraka fil hadra 2xs.
Al Fatiha
Everyone sits up and says Salawat and Fatiha
12. (Optional) Shaykh says: Bedeetu Bismillah wabi
sirri Muhammed Rasulullah wabi sirri Ibrahim
Halilullah wabi sirri Ali Waliyullah wabi sirri Sultan
Seyyid Abdul Qadir Geylani wabi sirri Seyyid Ahmad
er Rifai wabi sirri Sheyhi wa ustazi Sheyen lillah.
13. Shaykh says: Ka’al le men le Hu.
Everyone says Lâ ilâha illâllah. – turn head left then
right
33 times
Shaykh sings: Yüzün Nuru Hûdadir or
Seyreyleyip Yandim or
Bu Akil Fikriyle Mevlam Bulunmaz or
Hakka Asik Olanlar.
Then Say: Lo il-lo a illa-llo 33 times
14. Shaykh says: Illallah Hatemen Nebiyyine
Seyyidina Muhammedin Rasulallah Hakkan wa
sitka.
15. Shaykh says: (Shaykh Taner does this in English)
Allah yadhkuruna an Allaha qiyaman wa qu-udan wa
ala junubihimwa yayfakkuruna fi khalqis-samawati
wal ardh, “Rabbana, ma-khalaqta hadha batilan;
Subhanaka, fa qina \\ azabannar.”
16: Everyone says Salawat and Fatiha
Then do sejda and stand up
17. Sirni Ala - Everyone Sings slowly while turning
and swinging arms:
Allah – Allah, Allah, Allah - Oh Allah, Allah, Allah,
Allah 33 times il la la
While Shaykh Sings: Guzel Ashik
Allah
Daglar ile
Dertli Dolap
18. Everyone says: Allah Hu, Hu Allah
circle counter-clockwise
While Shaykh sings: Hor Bakma
11. Opening statement: group says Hu
With the succor of Allah. With the intercession of the
Prophet. By permission of Ali, Wali of Allah, Abdul
Qadir Geylani, Ahmad er Rifa’i, Abdullah Hashimi,
Muhammed Ansari, Muhyiddin Ansari, Nureddin Ozal,
Taner Ansari.
Al Fatiha
Everyone sits up and says Salawat and Fatiha
12. (optional) First of all Bismillah and with the secret
of Muhammedan Rasulullah and with the secret of
Abraham the friend of God and with the secret of Ali
the protecting friend of God and with the secret of
Sultan Sayyid Abdul Qadir Geylani, Sayyid Ahmad-ar
Rifa’i and with the secret of our shaykh and teacher.
13. Shaykh says: Say with the words of Allah:
Everyone says: Lâ ilâha illâllah. There is no God but
Allah.
(Can start with Askin Ile Asiklar)
(Ilahis for Cehr’i/vigorous zikr)
move forward right (Lo) -, back center (il-lo), forward
left (a illa), back center (lo) – this makes one ill la la,
then repeat
14. Shaykh says: The Seal of our Prophets, our leader
Muhammed, Messenger of Allah, Reality and Truth.
15. Allah says in Quran-i Kerim, and there are
believers who remember me sitting, standing and
reclining, and look into space and say “O Lord, you
haven’t created all this for nothing. All praise belongs
to you. Please save us from the torment of fire.”
16: Everyone says: Salawat and Fatiha
Then prostrate and stand up
17. Sirni Ala - Everyone Sings slowly while turning
and swinging arms:
Allah – Allah, Allah, Allah - Oh Allah, Allah, Allah,
Allah
18. Everyone says: Allah Hu, Hu Allah
(as many times as necessary)
`,bu=`19. Everyone Says:
Allah, Allah, Hay - 33 times
20. Allah, Allah, Haqq – 33 times
21. Hay, Hay Hay, Allah - 33 times
22. Allah, Allah, Allah (guttural) 33 times
23. Everyone says: Allah Hayy, Ya Qayyum -33 times
(turning left, bring right hand to heart; turning right,
bring left hand to heart)
While Shaykh sings:
Iki Kare Gavs Oldu
Can Yine Bulbul Oldu
24. Then say: Qayyum Allah, Qayyum Allah - 33
times
25. Everyone says: Hayy Hayy Hayy (start out slow
then speed up for ecstasy)
Slow 33 times
While Shaykh Sings:
Abdul Qadir ül Geylani
Seni Ben Severim
Haktan Inen Serbeti
(This can be done anywhere, especially to liven up the
zikr if you do it fast Shaykh sings:
Çhikilmaz Benlikle)
26. Everyone says: Ya Wadud, Ya Salam
While Shaykh sings:
Butun Evren
Haci Bektq
27. Slow Allah, like moaning, while turning right to
left (sick man’s zikr)
28. Shaykh Says: slow HU to sing songs below
Songs:
Seni Ben/Hizmetini Edemedim
Jani Dilden Fani Kildim
29. Shaykh starts fast Hu then sings:
Es salatu wa salamu aleyk aleyke ya Rasulallah.
Es salatu wa salamu aleyk aleyke ya Habibullah.
Es salatu wa salamu aleyk aleyke ya
Seyyid el Ewelina wa ahiri,
ya salamun al Murseliyn,
wa alhamdulillahi rabbil alamin
al Fatiha.
Salawat and Fatiha
19. Everyone Says: Allah, Allah, Hay
(Qasidas) Repeat
20. Allah, Allah, Haqq
21. Hay, Hay, Hay, Allah
22. Allah, Allah, Allah (guttural)
23. Everyone says: Allah Hayy, Ya Qayyum
(turning left, bring right hand to heart; turning
right, bring left hand to heart)
24. Then say: Qayyum Allah, Qayyum Allah
25. Hayy Hayy Hayy
Everyone Says: Hayy (fast)
26. Everyone says: Ya Wadud, Ya Salam (O Love,
O Peace) twirling counterclockwise right foot in place,
right arm up, left arm down
27. Slow Allah, like moaning, while turning head
right to left (sick man’s zikr)
28. Congregation says: HU slowly and continues till
song is done
29. Group Says: Hu (much faster, hands up and down)
Peace and blessings be upon you, O Messenger of God.
Peace and blessings be upon you, O Lover of God.
Peace and blessings be upon you, O Master of before
and later,
and peace be upon all the Prophets,
and praise be to Allah, lord of the worlds.
Al Fatiha.
Everyone Says Salawat and Fatiha
`,xu=`30. New Dua: Each person says a short prayer invoking
two of the Names of Allah, group repeats the Names 7
times. The Shaykh finishes with a longer dua and more
repetitions of the Names in the dua.
From old manual: Go Down into Sejda and sit up –
Shaykh says Du’a:
Ya Allah we thank you very much for your
blessings and especially for bringing us together giving
us the opportunity to do your zikr. Please bestow a
portion of this zikr’s blessing on our dear Prophet (a.s.)
and his family and all the other Prophets and their
families. And a portion of it to our pirs Ali Waliallah, the
12 Imams, Abdul Qadir Geylani, Ahmed Rifa’i, Hishimi,
Husan, Husayn, Muhyiddin Ansari, Muhammed Ansari,
Taner Ansari, Ehli Beyt and Rasulallah. Oh Allah please
guide, nourish us, sustain us. Show us the truth and make
it easy for us to accept it and act with it. Show us the
false and make it easy for us to avoid it. Open our hearts
to Islam, surrender. Keep our hearts fixed on Islam. Open
our eyes and hearts to see you and help us to be with you
at all times. Protect us from our transactions, our nafs and
shaytan and against any evil intentions from any other
creations especially other humans and jinn when they
envy us or ignite our nafs both day and night. Oh Allah,
we take refuge in you from all the dangers that you have
created. Please make those of us and our children who are
studying, successful in their studies. Please help us and
them to learn, to give us all the love to learn, give us all
the love to learn you Allah. And make us successful in
your path. Help us to establish your tariqa and make us be
successful in establishing the tariqa in service for you,
help us to serve you Oh, Allah and take refuge in you,
you are our protecting friend and our trustee and our
master. Help us to clean our earth to leave it healthy for
other generations. Help us to resurface our virtues.
Sedaka la hul Azim - Amin
Shaykh says: Rida’an Lillâh, Ridza’an Rasülullah,
Ridza’an Piran, Qabul ad Du’a, al Fatiha
Everyone says Salawat and Fatiha
Shaykh says: A edzu billahi minesh shaytan irajim
31. Everyone says:
Sura Iklas
Sura Falaq
Sura Nas
Shaykh says:
Subhana rabbika, rabbil izzati ama yasifun, wa salamun
alal mursalin, wa alhamdulillah’i rabbil alamin. Al Fatiha
Everyone says Salawat and Fatiha
32. Everyone does sejda and stands and faces the
30. Prostrate and then sit up
Personal prayer
While Shaykh says the Pirs names everyone should
say Hu….slowly
Everyone says Salawat and Fatiha
31. Everyone says:
Sura Iklas (1 time)
Sura Falaq (1 time)
Sura Nas (1 time)
Shaykh says: Glory to our Lord, Lord of might and
honor, above all that is attributed to Him. And peace
be upon the messengers, and praise be to Allah, Lord
of the Worlds.
Everyone says Salawat and Fatiha
32. Everyone prostrates and stands and faces the
mihrab, feet sealed and says:
Hu
`,Su=`mihrab, feet sealed Shaykh says:
Shukran ya Allah. Shukran ya Rasulullah. Shukran ya Ali
Waliyullah. Shukran ya Sahibel Sharia. Shukran ya
Sahibel Tariqa. Shukran ya Sahibel Haqiqa. Shukran ya
Sahibel Marifa. Shukran ya Qutbul Zaman. Shukran ya
Sahibel Meydan. Al Fatiha (Salawat & Fatiha)
Everyone says:
Salawat & Fatiha
33. Everyone turns to center, Shaykh says: As
salaam alaykum
Congregation says to Shaykh: (Wa alaykum as salam
wa rahmatullah wa barakatahu)
Shaykh says: Takbir
34. Everyone Sings: (optional)
Allahumma salli ala sayyidina Muhammedin wa ala alihi
was-sahbihi ali wa sallim.
Shaykh says: Thank you, O Allah. Thank you, O
Muhammed. Thank you, O Ali Waliyullah. Thank you,
keeper of the Sharia. Thank you, keeper of the Tariqa.
Thank you, keeper of the Haqqiqa. Thank you, keeper
of the Marifa. Thank you, qutub of this time and the
keeper of this place. Al Fatiha (Salawat and Fatiha)
Everyone says:
Salawat & Fatiha
33. Everyone turns to center, Shaykh says: May
Allah’s peace be upon you
The group responds: and on you Allah’s peace, and
mercy, and blessings.
Everyone answers: Allahü akbar.
34. Each member of the circle comes to the shaykh,
kisses his hand, and greets the others in the circle while
singing salawat.
`,Cu=`Understanding Salat
Shaykha Muzeyyen Anne
Salat (also called Namaz) is the required ritual prayer practiced five times a day in which to praise
Allah, surrender to Allah, and give attentiveness to Allah. Salat is the reminder that we are Allah’s servants.
He is not ours. It is used as a way to refocus one’s attention and remembrance back to Allah throughout the
day. With salat the Sufi strives to make worship an act of connection and knowing. In the Holy Hadiths
(sayings that came through the Prophet [a.s.]), it says: “I was a hidden treasure and I loved to be known, so I
created the Universe so that I might be known.”
The salat contains units of prayer called rakats and the number of rakats performed is what
distinguishes each of the five prayers done throughout the day. Salat also has two distinct levels of praying.
One is called fardz salat, or the five obligatory prayers that Allah wants us to do, the other is called sunnah.
Sunnah is what the Prophet (a.s.) did in addition to the five obligatory daily prayers, in other words, extra
prayers. Shaykh Taner would like all of us to learn how to pray the fardz (obligatory) salat. He wants you
to learn fardz salat first in your own language and then in Arabic. You really need to know the meaning of
the prayer you are saying. As a matter of fact, Shaykh Taner prayed in Turkish until he understood exactly
what he was saying. This is important because when you are praying you are talking to Allah and Allah is
talking back to you. For example when you say, ‘Subhana Rabiyal A’la’ (All glory to my Lord, the Most
High), you are talking to Allah, praising Allah. When you are reading the Quran, Allah is talking to you.
After you have learned all the prayers in your language and in the Arabic language, you can then choose to
say salat in your language, with the exception of the Quran’s ayats and suras which must be said in the
Arabic language. However, Muslims around the world mostly say salat in Arabic.
There are twelve salat requirements. Salat can be performed publicly or privately. The conditions
to be met for salat are listed in the ’32 Fardz’ Section of the Murid Manual.
People who are exempt from salat are women during their menstrual cycle or anyone who is
actively bleeding, children under the age of puberty, or those who are incapacitated, unconscious or
mentally challenged.
“Establish regular prayers at the sun’s decline till the darkness of the night, and the recital of the
Quran in Morning Prayer, for the recital of dawn is witnessed. And as for the night, keep awake a
part of it as an additional prayer for you: soon will Your Lord raise you to a station of Praise and
Glory!” (17:78-79)
The salat times are listed in the ‘Salat’ Section of the Daily Practices Manual.
There are two times of the day that are particularly significant. If you are unable to do all your
prayers you must at least do the Morning Prayer, right before the sun rises and the Evening Prayer, right
after the sun sets. These are the times of strength and intensity, when the transition is happening, day to
night – night to day. The Quran says, “Establish worship at the two ends of the day and in some watches of
the night. Lo! Good deeds annul ill deeds. This is a reminder for the mindful.” (Hud XI, Part 12:114)
The following example will explain one rakat and the meaning behind the sayings and
movements. For your convenience, in the Daily Practices Manual ‘Salat’ you will find the prayers spelled
phonetically.
1. First you state your intention. You are going to say, for example, “I intend to pray two rakats of
Fajr or Morning Prayer for Allah’s sake.” While performing salat you should be concentrated in
your heart for Allah.
2. Then raise your hands to stand in takbir, (standing up facing Qible men - hands up to ears, palms
facing front with thumbs at earlobes, women - hands up to face, palms facing forward with their
index finger at jawbone, feet shoulder-width apart) and say, “Allahu Akbar” (Allah is Great).
With this intention, gesture and saying you put everything behind; it is time to focus on Allah.
`,wu=`3. After this first, ‘Allahu Akbar,’ you will change your hand positions and stand in Qiam (men at
this point fold their right hand over their left, with their right hand index finger pointing at left
elbow and then placing both hands over their navel - women place your left hand on your heart
and place the right hand over the left hand with the index finger pointing towards the left elbow).
Different cultures do it differently depending on what schools they follow. You either do what
your shaykh does or what feels comfortable to you.
4. While standing in Qiam, the first prayer we do is not part of the Quran but a prayer that is
traditionally done. We say, “Subhaneka allahuma, webi hamdik, wete bare kesmuk, wete a la
jedduk, wela ilahe gheiruk” (I praise You O Allah, Your name is blessed and we don’t worship
anyone but You). At this point in your prayer you are talking to Allah. When you are doing this
traditional prayer you do not say – A euzu billahi minesh shaytan irrajim (I take refuge in Allah
from Shaytan the banished) or Bismillah’ir Rahman’ir Rahim (In the name of Allah, the Merciful,
the Compassionate) – because this prayer is not part of the Quran. You just say, “Allahu Akbar,”
and then, “Subhanka allahuma webi hamdik wet bare kesmuk, wete a la jedduk, wela ilahe
gheiruk.”
5. After the traditional prayer is said you read/recite the Ayat Fatiha from the Quran. Any time you
are reading or reciting from the Quran, with the very first Ayat you always say the full Bismillah;
which is – A euzu billahi minesh shaytan irrajim Bismillah’ir Rahman’ir Rahim (I take refuge in
Allah from shaytan the banished, In the name of Allah, the Merciful, the Compassionate). The
Quran says, “When you do read the Quran, seek Allah’s protection from satan, the rejected one.”
(16:98) After the first Ayat is read/recited then at the beginning of all the other Ayats you only
need to say, “Bismillah’ir Rahman’ir Rahim”. In fact, you will always say, “Bismillah’ir
Rahman’ir Rahim”, when you are starting to read or recite an Ayat from the Quran. This
designates this time of your prayer and/or reading to be between you and Allah. At the end of the
Ayat Fatiha the word daaal-leen needs to be elongated while spoken. The ‘daaal’ needs to be
drawn out long enough that you could say the Arabic letter ‘alif’ 4 times.
6. After Fatiha you read another Sura from the Quran (either Ikhlas, Falaq, Nas, Kursi or any of the
12 suras you are required to know).
7. Ikhlas (sura 112) is the most often repeated Ayat from the Quran. Shaykh Taner says this Ayat is
the description of Allah. Allah is energy. He was not born. He is the cause that has existed before
all. Of course Allah is not he or she. It is energy and energy does not have gender.
8. After reciting Fatiha and another ayat/sura you will say, “Allahu Akbar,” and change positions to
Ruku (bow at the waist and put your hands on your knees). While you are praying whenever you
move from one position to another you always say, “Allahu Akbar”. So, when you finish Ayat
Fatiha, which you are going to have to do with each rakat, then you do one verse from the Quran.
Then say, “Allahu Akbar,” while bowing to the waist and placing your hands to your knees. While
your hands are on your knees you say 3 times, “Subhana rabbiyal Azim” (How Glorious is my
Lord the Great). Here again you are talking to Allah.
9. Now you will stand up again (Qiam) and of course with this movement you say, “Allahu Akbar”.
While standing there you say, “Semi Allahu Limen Hamideh” (Allah heard those who praised
Him).
10. Then say, “Allahu Akbar”, because you are changing position again and are beginning to kneel
down into sejda, which means you are going to prostrate. While transitioning into prostration you
will say, “Rabbina lakal Hamd” (Our Lord, and praise be to You). When you are fully prostrated
you should be kneeling down with your hands open flat on the ground and your thumbs touching
each other. Your forehead should be touching the ground in the middle of the open space between
your hands with the bridge of your nose resting on your thumbs. While in sejda you will say three
times, “Subhana Rabiyal A’la” (All Glory to my Lord, the Most High). Prostration is an act of
surrendering oneself to Allah. The Prophet (a.s.) said, “Any believer who prostrates himself, will
`,Tu=`be raised one degree by Allah. As for what that degree consists of, know that it is not something
small, for each heaven might consist of one degree.”
11. It is said that everything in the universe prostrates to Allah knowingly or unknowingly. The Quran
states: “Whatever beings there are in the heavens and the earth do prostrate themselves to God
(acknowledging subjection), with good will, or in spite of themselves, so do their shadows in the
mornings and evenings.” (13:15)
12. Then sit back onto your heels (tashahud) and because you have changed positions again say,
“Allahu Akbar”. Take a second to take a breath in this position.
13. Then again say, “Allahu Akbar,” and move back down to sejda and say, “Subhana Rabiyal A’la,”
three times.
14. When you complete the circle of postures from Sejda (prostration) to Qiam (rising) to Ruku
(bowing) you have physically formed the word Allah.
15. This is the completion of one rakat. At this point, depending on which salat you are doing during
the day you would continue to repeat the required number of rakats starting with number 2.
When you repeat rakats, after you recite Fatiha, try to choose a different ayat from the Qur’an from the first
one you did in the other rakats. For example, if you did Ikhlas first then do Nas, or Falaq for the second
one.
One suggestion is to recite Falaq for the Morning Prayer. Falaq means Daybreak and according to my
understanding of this sura you are starting your day with Allah and you are taking protection in Allah from
evil. Falaq asks for “(refuge) from the evil of those who practice secret arts” and we know that many
people practiced magic in the old times and maybe even now. We are talking about evil intentions like
separating people; for instance, husbands from wives and horrible things like that. Falaq continues to ask
for “(refuge) from the people who practice envy.” Now this is a very important line. Envy of other people
can hurt you. It can hurt your energy body. In Islam this is called the ‘evil eye’. When people look at you
with envy and jealousy then they are directing negative energy towards you. Just like when people are
willing you and wishing you good and it helps you, conversely when they wish you bad it does not help
you. When you start your day, you should recite Ayat Falaq, Ayat Nas and Ayat Ikhlas 3 times and Ayat ul
Kursi.
When you have finished all your rakats remain in the tashahud (kneeling) position and recite the following
prayers in English or Arabic, which is what the Angels say. This is not a prayer from the Qur’an; it is a
prayer that all the Muslims around the world do and you are talking to Allah.
“In the name of Allah, the Beneficent, the Merciful.
All reverence, all worship, all sanctity are due to Allah. Peace be upon you, oh Prophet and the
Mercy of Allah and His Blessings.
And may Allah’s Peace be upon us, and the angels and on His righteous slaves. *I bear witness that
there is no God other than Allah. I bear witness that Muhammed is Allah’s Servant and His
Prophet.”
*This is the Shahada – Ashahadu ana la illaha illallah. Ashahadu ana Muhammedin abduhu wa
Rassulullah. This means you become a witness in Islam and it is the first Pillar of Islam.
Now we say the salawats (Asking Allah for peace and blessings upon the Prophet Muhammed) again in
English or Arabic.
`,Eu=`“In the name of Allah, the Most Merciful, the Most Beneficent
Oh Allah! Shower Thy blessings and Peace on our leader Muhammed and his family as You have
upon Ibrahim and his family. Surely You are the Praiseworthy and Glorious.
Oh Allah! Send Your Grace upon our Master Muhammed and his family as You have sent Your
Grace upon Ibrahim and his Family. Surely You are the Praiseworthy and Glorious.”
Now do this prayer.
“Please O Allah, please give us goodness in this world and in the hereafter and protect us from the
torment of fire.”
Now you do your personal prayers (Du’a), just talk with Allah. It is your wish list, what you would like to
ask from Allah, for example; O Allah, I want world peace, I want my kids to grow to be good people, etc.
Take your time; this is your time to talk with Allah. While making du’a it is traditional to place both hands
in front of yourself with the palms up and when finished pass your hands over your face. With these
actions we, inshallah, receive Allah’s help with open hands and then bathe our faces, inshallah, with
Allah’s grace.
Then turn your face to the right and greet the angels there by saying:
As-sa-la-mu a-lay-kum wa Rah-ma-tul-lah Peace be upon you and the Mercy
of Allah
Then turn your face to the left and greet the angels there by saying:
As-sa-la-mu a-lay-kum wa Rah-ma-tul-lah Peace be upon you and the Mercy
of Allah
At this point there are traditional prayers that are added on after the completion of the two, three or
four rakats. These are included in the actual ‘Salat’ section of the Murid Folder.
Congregational Salat
Adzan – (Call to Prayer – this is only done if more than one person is praying Salat together)
Iqama – everyone stands and face Ka’aba
Recited in a loud, clear voice by the Muezzin, Shaykh, Khalifa or leader.
Allahu Akbar 4 times Allah is Most Great
Ash-hadu ana la illaha ill Allah 2 times I testify that there is no God other than
Allah.
Ash-Hadu ana Muhammed-ar-rassulullah 2 times I testify that Muhammed is the Prophet
of Allah.
Hayya ‘alas-Salah; * 2 times Come to prayer (Face Right)
* (If Salat is before sunrise say:
A Salaatu karum min a nuun) (2 times Prayer is better than sleep)
Hayya ‘alal-Falah 2 times Come to success (prosperity) (face left)
Allahu Akbar 2 times Allah is Most Great
`,Du=`La illaha ill Allah 1 time There is no God other than Allah.
Salat
The following Salat is of one rakat. Please add the appropriate rakats for the time of day.
Leader says:
A udhu billahi minesh sheytan irrajim I take refuge in Allah from Shaytan the
banished
Make Intention: I intend to pray…
1. 2 rakat of Fajr (daybreak prayer)
2. 4 rakat of zuhr (noon prayer)
3. 4 rakat of Asr (mid-afternoon prayer)
4. 3 rakat of Maghrib (sunset prayer)
5. 4 rakat of Isha (night prayer)
Stand in Takbir and everyone says: (standing, hands at face)
Allahu Akbar Allah is Most Great
Stand in Qiam - Leader says: (standing with hands over heart)
Subheneka allahuma, webi hamdik, wete bare I praise you Oh Allah, Your name is blessed
kesmuk, wete a la jedduk, wela ilahe gheiruk and we don’t worship anyone but you
A a-uzu billahi minesh sheytan irrajim I take refuge in Allah from Shaytan the banished
*Allahu Akbar (takbir) Allah is Most Great
Wa alhamdulillah rabbil alamin, al Fatiha: All praise to Allah, Lord of all Worlds,
the Opening:
Congregation says sura Fatiha:
Allahumma salli ala sayyidina Muhammedin Oh Allah! Shower Thy blessings on our
wa ala ali sayyidina Muhammed leader Muhammed and his family
Bismillah Ar-Rahman ir-Rahim. In the name of Allah, the Merciful,
the Compassionate.
Al hamdu lillahi rabbil alamin All praise to Allah, Lord of all Worlds the
Ar-Rahman ir-Rahim The Merciful, the Compassionate
Maliki yawmid Din King of the Day of Judgment
Iyyaka nabodu wa iyyaka nasta-in Thee only do we worship and from Thee only
do we seek help;
ih dinas siratal mustaqim Guide us to the straight path
siratal lazina an amta alayhim The path of those to whom Thou has been
gracious
ghayril magdubi alayhim not of those who are condemned
walad dal-in. Amin. nor those who are misguided. Amen.
`,Ou=`EVERYONE RECITES A PRAYER FROM QUR’AN SUCH AS IKLAS, FALAQ, NAS, LEADER WILL DECIDE:
Then stand in Ruku and everyone says: (bow at waist, hands at knees)
Allahu Akbar Allah is Most Great
Subhana Rabbiyal Azim (3 times) How Glorious is my Lord
Stand in Qiam everyone says: (stand up hands at heart)
Allahu Akbar Allah is Most Great
Leader says:
Semi Allahu limen Hamideh Allah has listened to him who has praised
Him
Congregation says:
Rabban lakal-hamd Our Lord praise to Thee
Go to Sejda everyone says: (prostration)
Allahu Akbar Allah is Most Great
Subhana Rabbiyal-Ala (3 times) All glory to my Lord, the Most High
Go to Tashahud everyone says: (witnessing, kneeling position)
Allahu Akbar Allah is Most Great
Go to Sejda everyone says: (prostration)
Allahu Akbar Allah is Most Great
Subhana Rabbiyal-Ala (3 times) All glory to my Lord, the Most High
This is one Rakat, stand and repeat the blue section as necessary. At the end of each set of two rakats stay
in kneeling position (Tashahud) and say:
Allahu Akbar Allah is Most Great
The leader says, in English if preferred:
Ast tahiyatu lillahi was salawatu wat tayyibatu All reverence, all worship, all sanctity
are due to Allah
As Salamu alayka ayyuhan nabiyya Peace be upon you, Oh Prophet
Wa rahmatu lillahi wa barakatuhu and the Mercy of Allah and His
Blessings
was salamu alayna wa ala ibadillahis salihin And Peace be upon us, and the good
servants of Allah
Ashahadu ana la illaha illallah I bear witness that there is no god other
than Allah
Ashahadu ana Muhammedin abduhu wa Rassul I bear witness that Muhammed is Allah’s
illah servant and His Prophet
To finish the prayers after the final rakat, stay still in Tashahud (kneeling position). The leader says in
English:
`,ku=`Bismillah Ar-Rahman ir-Rahim In the name of Allah, The Beneficent,
the Merciful
Allahumma salli ala sayyidina Muhammedin Oh Allah! Shower Thy blessings on our
wa ala ali sayyidina Muhammedin leader Muhammed and his family
Kama sallayta ala Ibrahima as you blessed Abraham
wa ala ali Ibrahima and his family
Innaka Hamidun Majid Surely you are the Praiseworthy and
Glorious
Allahumma barik ala sayyidina Muhammedin Oh Allah! Send your Grace upon our
Master Muhammed
wa ala ali sayidina Muhammedin and upon his family
Kama barakta ala Ibrahima As you have sent your Grace upon
Abraham
wa ala ali Ibrahima and upon Abraham’s family
Innaka Hamidun Majid Surely you are the Praiseworthy and
Glorious.
Now say your Du’a (Silent Personal Prayer)
Turn face to right and everyone says to the angels there:
Assalamu alaikum wa rahmatullah Peace be upon you and the Mercy of
Allah
Turn face to left and everyone says to the angels there:
Assalamu alaikum wa rahmatullah Peace be upon you and the Mercy of
Allah
Then everyone says:
Estagfirullah (3 times) Allah forgive me (3 times)
The leader says in English if preferred:
Al Azim, Al Kerim, elledhi la illaha illahu The Magnificent, the Generous, verily
there is no god other than Allah
el Hayyul Qayyum etubi ileyh. the Living, the Eternal all repentance
is due to Him.
Allahumme entesselamu wa minkes selam Oh Allah, you are Peace and Peace
comes from you, bless us Oh Lord of
teberakte ya zul celali wal ikram. Majesty and Generosity.
Subhanallahu walhamdalillahu wala ilahe Glory to Allah, all praise to Allah,
itallahu wallahu Ekber. there is no God other than Allah, God
is the Most High and Great.
Wala hawle wala kuwwete illa billahi aliyyul Nobody else has any strength or power
aziym. besides Allah who is the Most High
and Great.
Everyone says Ayat ul-Kursi (Sura Baqara: 255; Throne Verse, Sura 2:255)
`,Au=`A udhu billahi menesh sheytan irrajim I take refuge in Allah from Shaytan the
banished
Bismillah Ar-Rahman ir-Rahim In the Name of Allah, the Merciful
the Compassionate
Allahu la ilaha illa Huwa-l Hayyu-l Qayyum. Allah, there is no God save Him, the
Alive, the Eternal
La takhudhuhu sinatun wa la nawm. Neither slumber nor sleep overtake Him
Lahu ma fis-samawati wa ma fil ard. Unto Him belongeth whatsoever is in the
heavens and whatsoever is in the earth.
Man dhal-ladhi yashfau indahu illa bi-idhnih. Who is he that intercedeth with Him
save by His leave.
Ya alamu ma bayna aydihim wa ma khalfahum He knoweth that which is in front of
wa la yuhituna bi-shayin min ilmihi illa bi-ma them and that which is behind them,
sha. while they encompass nothing of His
Knowledge save what He will.
Wasia kursiyuhus-samawati wal ard. His Throne includeth the heavens and
the earth and He is never weary of
preserving them.
Wa la ya-uduhu hifzuhuma, wa Huwal Aliyul He is the Sublime, the
Azim. Tremendous.
Subhanallah (33 times, everyone) Glory to Allah
Alhamdulillah (33 times, everyone) All Praise to Allah
Allahu Ekbar (33 times, everyone) All power is Allah’s (Allah is Most Great)
The leader says in English:
La ilahe illallahu wahdehu la sharikala lehul There is no God other than Allah, He is one
mulku wa lahul hamdu wa huva ala kulli He has no partner, and everything belongs to
shayin qadiry. Him, and He is able to do all things.
Subhane rabbiyel aliyyel alel vahhab. Glory to You, my Lord, the Most High
the Giver of All.
Now say your Du’a (Silent Personal Prayer)
The leader says:
Wa alhamdulillah rabbil alamin, al Fatiha: All praise to Allah, Lord of all Worlds,
the Opening:
Congregation says sura Fatiha:
Allahumma salli ala sayyidina Muhammedin Oh Allah! Shower Thy blessings on our
wa ala ali sayyidina Muhammed leader Muhammed and his family
Bismillah Ar-Rahman ir-Rahim. In the name of Allah, the Merciful,
the Compassionate.
Al hamdu lillahi rabbil alamin All praise to Allah, Lord of all Worlds the
Ar-Rahman ir-Rahim The Merciful, the Compassionate
Maliki yawmid Din King of the Day of Judgment
Iyyaka nabodu wa iyyaka nasta-in Thee only do we worship and from Thee only do
`,ju=`seek help;
ih dinas siratal mustaqim Guide us to the straight path
siratal lazina an amta alayhim The path of those to whom Thou has been
gracious
ghayril magdubi alayhim not of those who are condemned
walad dal-in. Amin. nor those who are misguided. Amen.
If the leader chooses, a public zikr could now begin.
Adab of Du’a
(Supplication/Personal Prayer)
by Shaykh Taner
In many traditions appealing to Allah or supplication is thought of as prayer but in Islam there is a distinct
difference between Salat (prayer) and personal prayers (du’a). Du’a is when someone makes personal
requests of Allah. You hold your hand up and ask Allah for whatever you want. The most important
requirement of a du’a is sincerity and it can be made in any language. One of the more common
supplications or du’a is, “Allah, give us the best in this life and the best in the next and protect us from the
punishment of the fire.” Allah, in the Quran, encourages du’a as it reminds us how much we need Allah.
Start du’a by thanking Allah for His blessings and His favors. Our Prophet (pbuh) says du’as made when
sandwiched between two salawats are accepted, “Allah, may your peace and blessings be upon our Prophet
and his family (don’t forget the family) and on all the other Prophets and their families.” Ask for Allah’s
forgiveness. Then you pray what you want and end with the second salawat.
When you are in zikr and are doing a public du’a and even in your personal du’a, there are certain
categories that you have to include:
1. Start with Bismillah’ir Rahman’ir Rahim and salawats (give peace and blessings on the Prophet
Muhammed (a.s.) and his family, and on all the other prophets and their families).
2. Give thanks to Allah.
3. Ask for guidance from Allah.
4. Ask Allah’s goodwill for your pirs and silsillah (tariqa lineage).
5. After asking for blessings on the lineage, pray for Shaykh Taner to be a strong Shaykh, and pray
for blessings on each of the murids
6. Ask for forgiveness for you and all the believers. (Remember you cannot ask for forgiveness for
unbelievers).
7. Ask for material and spiritual sustenance from Allah to provide for you and your family and what
Allah thinks is good for you.
8. Ask for good health.
9. Ask for protection — protection against your nafs and protection against Shaytan. Protection from
evil people and from people who make fitna. At the end of Baqara (25) it says, “…wa- uns.ur -naa
calaa al- qawm al- kaafiren… Help me against the unbelievers.”
10. Now you make your personal requests. You can ask for something from Allah. This is your time
to talk with Allah. You can also incorporate the prayers that our Prophet (a.s.) has used. For
example, “O Allah, please show us the truth and make it easy for us to act with it. Please show us
the false and make it easy for us to avoid it.”
11. End with salawat (give peace and blessings on the Prophet Muhammed (a.s.) and his family, and
on all the other prophets and their families)
`,Mu=`12. In addition, if you are doing zikr or prayer in somebody’s house, make sure that you also ask
blessings, forgiveness, and baraqat for the household and the people of the household.
13. If you are in zikr, as a Shaykh, and another Shaykh comes to visit, you also send blessings to his
pirs and Shaykhs too.
14. If doing this prayer outside of salat, end it with reciting Ayat Fatiha.
The emotions that are felt among the murids for each other go directly to the energy balances in the body.
Purge yourselves of negative emotions in order to bring about a state of health. We are like a circle of light;
we are holding a pattern that needs to be kept in the world. We need to consciously acknowledge our role in
this process.
Silsillah of Qadiri Rifa’i Tariqa Turkish Version
Tarikatta Ansariyya
Es-seyyid es-şeyh Taner Ansari Tarsusi er Rifa’i el Kadiri
Tarikatta Secereniz
Es-seyyid es-şeyh Taner Ansari Tarsusi er Rifa’i el Kadiri
Es-seyyid es-şeyh el hac Muhyiddinül Ensarül Erzinçane
Es-seyyid es-şeyh el veli Muhammedül Ensari Bagdadi
Es-seyyid es-şeyh el veli Muhammedül Kadiri
Es-seyyid es-şeyh Zeynettül Kadiri
Es-seyyid es-şeyh Aliyyül Kadiri
Es-seyyid es-şeyh Abdul Kadirül Kadiri
Es-seyyid es-şeyh Ebu Bekir
Es-seyyid es-şeyh Ismail
Es-seyyid es-şeyh Abdul Vahab
Es-seyyid es-şeyh Pir Nureddin
Es-seyyid es-şeyh Muhammed Dervis
Es-seyyid es-şeyh Hüsamettin
Es-seyyid es-şeyh Ebu Bekir
Es-seyyid es-şeyh Yahya Kadiri
Es-seyyid es-şeyh Yahya
Es-seyyid es-şeyh Nureddin ül-Kadiri
Es-seyyid es-şeyh Nureddin
Es-seyyid es-şeyh Veliüddin Kadiri
Es-seyyid es-şeyh Veliüddin
Es-seyyid es-şeyh Zeynetül Kadiri
Es-seyyid es-şeyh Serafettinül Kadiri
Es-seyyid es-şeyh Ahmedar Rufai
Es-seyyid es-şeyh Ibni Seyyid Ali
`,Nu=`Es-seyyid es-şeyh Ibni Seyyid Yahya
Es-seyyid es-şeyh Ibni Seyyid Sabit
Es-seyyid es-şeyh Ibni Seyyid Hazim
Es-seyyid es-şeyh Ibni Seyyid Ali
Es-seyyid es-şeyh Ibni Seyyid Ebil Mekarim Rufael Hasan ül Mekki
Es-seyyid es-şeyh Ibni Es Seyyid Mehdi
Es-seyyid es-şeyh Ibni Es Seyyid Mehmet Ebu Kasim
Es-seyyid es-şeyh Ibni Es Seyyid El Hasan
Es-seyyid es-şeyh Ibni Es Seyyid El Hüseyin
Es-seyyid es-şeyh Ibni Es Seyyid Ahmet
Es-seyyid es-şeyh Ibni Imam Musa-ül Kazim
Es-seyyid es-şeyh Ibni Es Seyyid Imam Ibrahim ül Mürtaza
Es-seyyid es-şeyh Ibni Imam Musa-ül Kazim
Es-seyyid es-şeyh Imam Caferi Sadik
Es-seyyid es-şeyh Ibni Imam Muhammed Bakir
Es-seyyid es-şeyh Ibni Imam Zeyn el Abidin
Es-seyyid es-şeyh Ibni Imam El Sehid Huseyin
Es-seyyid es-şeyh Ibni Emir ül Müminin Aliyel Murtaza
Es-seyyida Fatimatun Zehra
Muhammed Mustafa Peygamber (s.a.w.s.)
Hem Hilafet hem kan (Both Hereditary and Spiritual Lineage)
Tarikati Kadiriyeden Gelen Seceremiz
Es-seyyid es-şeyh Taner Ansari Tarsusi er Rifa’i el Kadiri
Es-seyyid es-şeyh Nuruddin Özal
Es-seyyid es-şeyh el hac Muhyiddin Ensari
Es-seyyid es-şeyh Muhammedül Ensari Bagdadi
Es-seyyid es-şeyh Serafettinül Hüseynül Bagdadi Ensari
Es-seyyid es-şeyh Halil Veli Muhammedül Ensari
Es-seyyid es-şeyh Ibni Zeyneddin
Es-seyyid es-şeyh Ibni Seyyid Ali
Es-seyyid es-şeyh Ibni Seyyid selman
Es-seyyid es-şeyh Ibni Seyyid Mustafa
Es-seyyid es-şeyh Ibni Seyyid Zeyneddin
Es-seyyid es-şeyh Ibni Seyyid Derviş
Es-seyyid es-şeyh Ibni Seyyid Husameddin
Es-seyyid es-şeyh Ibni Seyyid Nureddin
Es-seyyid es-şeyh Ibni Seyyid Veliüddin
`,Pu=`Es-seyyid es-şeyh Ibni Seyyid Zeyneddin
Es-seyyid es-şeyh Ibni Seyyid Serafeddin
Es-seyyid es-şeyh Ibni Seyyid Semseddin
Es-seyyid es-şeyh Ibni Seyyid Muhammedül Hüttaki
Es-seyyid es-şeyh Ibni Seyyid Abdul Aziz
Es-seyyid es-şeyh Ibni Seyyid Kutbul Aktab Gavsül Azam Esseyyid Es Şeyh Abdül Kadir Geylani
Sirrihül Ali
Es-seyyid es-şeyh Ibni Ebu Sali Musa Cengi Dost
Es-seyyid es-şeyh Ibni Seyyid Abdullahi Ceyli
Es-seyyid es-şeyh Ibni Seyyid Yahya Zahid
Es-seyyid es-şeyh Ibni Seyyid Muhammed
Es-seyyid es-şeyh Ibni Seyyid Davud
Es-seyyid es-şeyh Ibni Seyyid Musa
Es-seyyid es-şeyh Ibni Seyyid Abdullah
Es-seyyid es-şeyh Ibni Seyyid Musai Ceva
Es-seyyid es-şeyh Ibni Seyyid Abdullahil Mahz
Es-seyyid es-şeyh Ibni Seyyid Hasanül Mesna
Es-seyyid es-şeyh Ibni Imam Emirül Müminin Ali Ibni Talip, R.A. (Radzul Allahuanh)
Mezhebi
Es-seyyid es-şeyh Ibni Abdül Muttalip
Es-seyyid es-şeyh Ibni Hasim
Es-seyyid es-şeyh Ibni Abdül Menan
Es-seyyid es-şeyh Ibni Kusa
Es-seyyid es-şeyh Ibni Külal
Es-seyyid es-şeyh Ibni Merret
Es-seyyid es-şeyh Ibni Ka'b
Es-seyyid es-şeyh Ibni Birri
Es-seyyid es-şeyh Ibni Galip
Es-seyyid es-şeyh Ibni Fehir
Es-seyyid es-şeyh Ibni Malik
Es-seyyid es-şeyh Ibni Nadgar
Es-seyyid es-şeyh Ibni Kenane Peygamber Aleyhisselam
Es-seyyid es-şeyh Ibni Hazimet
Es-seyyid es-şeyh Ibni Müdrike
Es-seyyid es-şeyh Ibni Ilyas Peygamber Aleyhisselam
Es-seyyid es-şeyh Ibni Madar
Es-seyyid es-şeyh Ibni Nezzar
`,Fu=`Es-seyyid es-şeyh Ibni Mead
Es-seyyid es-şeyh Ibni Adhan
Es-seyyid es-şeyh Ibni Edde
Es-seyyid es-şeyh Ibni Evde
Es-seyyid es-şeyh Ibni Hamisa
Es-seyyid es-şeyh Ibni Cemel
Es-seyyid es-şeyh Ibni Nebet
Es-seyyid es-şeyh Ibni Kaydar
Es-seyyid es-şeyh Ibni Ismail Peygamber Aleyhisselam
Es-seyyid es-şeyh Ibni Ibrahim Peygamber Aleyhisselam
Es-seyyid es-şeyh Ibni Tarik
Es-seyyid es-şeyh Ibni Kasar
Es-seyyid es-şeyh Ibni Saril
Es-seyyid es-şeyh Ibni Ergah
Es-seyyid es-şeyh Ibni Falig
Es-seyyid es-şeyh Ibni Salih Peygamber Aleyhisselam
Es-seyyid es-şeyh Ibni Kenan
Es-seyyid es-şeyh Ibni Erfesah
Es-seyyid es-şeyh Ibni Sam
Es-seyyid es-şeyh Ibni Yam
Es-seyyid es-şeyh Ibni Nuh Peygamber Aleyhisselam
Es-seyyid es-şeyh Ibni Yert Peygamber Aleyhisselam
Es-seyyid es-şeyh Ibni Idris Peygamber Aleyhisselam
Es-seyyid es-şeyh Ibni Mehmail
Es-seyyid es-şeyh Ibni Keynan
Es-seyyid es-şeyh Ibni Enus
Es-seyyid es-şeyh Ibni Siit Aleyhisselam ikinci Peygamber Aleyhisselam
Es-seyyid es-şeyh Ibni Adem Ebil Beser Aleyhisselam
Qadiri silsila
Pir Abdulkadir Geylani
Seyh Ebu Salih Mubarek Mahzumi
Seyh Ebul Hasan Karshi Ali Hakkari
Seyh Ebul Feredza Tarsusi
Seyh Ebu Fadl Abdullah Yumi
Seyh Ebu Bekr Shibli
Seyh Cuneyd Bagdadi
`,Iu=`Seyh Sirri Sekati
Seyh Maruf Kerhi
Seyh Davud Tai
Seyh Habib Acemi
Seyh Hasan Basri
Seyh Hazreti Ali
Peygamber Muhammed s.a.v.s.
Rifai silsila:
Pir Sejjid Ahmed Rifai
Seyh Alij Vasiti
Seyh Ebu Fadl Bagdadi
Seyh Ebu Ali Gulam ibn Turkan
Seyh Ali Virdi Bari
Seyh Ali Acemi
Seyh Ebu Bekr Shibli
Seyh Cuneyd Bagdadi
Seyh Sirri Sekati
Seyh Maruf Kerhi
Seyh Davud Tai
Seyh Habib Acemi
Seyh Hasan Basri
Seyh Hazreti Ali
Peygamber Muhammed s.a.v.s.
-HAZRETI MUHAMMED SAVS
-HZ. EBUBEKİR ES-SİDDİK
-SELMAN-I FARİSİ
-KASIM BİN MUHAMMED
-CAFER-İ SADIK
-BÂYEZÎD BESTAMİ
-EBUL HASAN-İ HARKANİ
- EBU ALİ FERMEDİ
-YUSUF-U HAMEDANİ
-ABDULHALİK-İ GUCDÜVANİ
- ARİF-İ RİVİGERİ
-MAHMUD İNCİRİ FAGNEVİ
`,Lu=`-ALİ RAMİTENİ
-MUHAMMED BABA SİMMASİ
-SEYYİD EMİR KÜLAL
- SEYYİT EMİR BUHARİ BEHAUDDIN NAKŞBEND
-ALAUDDİN ATTAR
- YAKUBU ÇEHRİ
- UBEYDULLAH AHRAR
- KADI MUHAMMED ZAHİD
- DERVİŞ MUHAMMED
- HACEGI MUHAMMED İMKENGİ
- MUHAMMED BAKİ-BİLLAH
- AHMED FARUKİ SERHENDİ İMAMI RABBANİ
- MUHAMMED MASUM FARUKİ
- SEYFUDDİN-İ FARUKİ
- NUR MUHAMMED BEDAVINİ
- MAZHAR-I CAN-I CANAN SHEMSEDDIN HABIBULLAH
- ABDULLAH-I DEHLEVİ
- MEVLANA HALİD-İ BAGDADİ
- ZİYAEDDİN GÜMÜŞHANEVİ
- HACI HAMZA RAMAZANOGLU
- ES-SEYYID ES-ŞEYH TANER ANSARI TARSUSI ER RIFA’I EL KADIRI
Adab: Courtesies Practiced on the Path
“If you want to progress, find your own mistakes, not those of others.”
Shaykh Taner
“For none of you will faith be rectified unless your hearts be made right, nor will your hearts
be rectified unless your tongues be made right, nor will your tongues be rectified unless your actions
be made right.” —Hadith of the Prophet Muhammed (pbuh)
All Sufis should have good adab. Good adab starts with believing in Allah and doing things for
Allah’s sake. Pleasing Allah is what pleases Allah and what pleases Allah is being good to other people,
being considerate and respectful. How we act in the world in relation to other people and situations has a
direct effect on our spiritual being. As Sufis we try to be aligned with Allah at all times. In this path we
have to balance the inner and the outer. As Sufis, being in balance outwardly means following adab. Adab
is how to act in a given place, situation and time following our Prophet’s (a.s.) example. The most
important adab is perfecting your inner adab. You can perfect your inner adab by having positive thoughts
and changing your intention. Your intention should be giving peace to people, be pleasant with people, be
positive with and to people. The outer parts that show what you think and intend are your mouth, hands,
eyes, feet, ears, senses and organs. The most important one is your tongue. You must be careful of what
you say. If you see something wrong with someone and you need to remind them, there are a few ways of
doing this, for example: someone’s food is not that good, and they want to know if you like it. You don’t
`,Ru=`say it’s terrible, you say it is good; perhaps a little more salt and pepper would be good, help by being part
of the solution, not the problem. Or if someone makes a mistake, don’t tell them what a terrible job they are
doing, say here is something that may work better. If you go to another tariqa and they do things
differently, and they ask what you think, don’t tell them you don’t like what they are doing, it’s not good,
say, our Shaykh taught us this way and this is how we know our path. No arguments about this. Listen to
other ideas; they could be handy sometime. Also, do not try to keep correcting someone, learn to correct
once in a good way and be positive in attitude, give peace to people. Do not create fitna. In this world,
even if you don’t think it so, realize everyone is talking to you and try to learn something from everybody.
Always check: if you see someone doing something wrong, or you see something wrong with someone
check to see if you are doing the same thing. Your main job is to correct yourself. Everybody tries to
correct everyone else and other people will resist this, even you. So correct yourself. The inner you that
you can be put into outer action are through your hands and feet. Do not steal; your hands should be
helping. Remember to encourage the good and discourage the evil or the bad, if you can with your mouth,
with your hands, with your heart. With your tongue make zikr for people who are having trouble and are
doing stupid things say, ya Hakim, Ya Alim, if they are doing something bad say, ya Mani. With your heart
say, ‘O Allah please change this situation, please help them learn this’. Your intention has to be for
consideration for other people, you are not going to make yourself number one. Whatever culture you visit
you must know their social graces and laws. You are going to be just and you are going to observe Allah’s
rights and wrongs and you are always going to try to make Allah more pleased. Carry this intention within
you and act with it.
When a dervish removes his shoes and walks through the entrance of the dergah or tekke (Sufi
center), he leaves the everyday world with its worries and problems outside. The dergah becomes a school
in which to practice adab (proper behavior, courtesy). Many Shaykhs say that the dervish path is all adab.
Remember that your goal is to serve Allah through serving your Shaykh and others.
It is essential to follow the Shariat, as given in the Quran. The basic principles are the same as the
Ten Commandments; more details are given in the Fardz (obligatory requirements). The principles of adab
are: you go to the tekke not to show yourself off, you go there to learn, and the best way to learn is by
listening and observing. You have to learn to treat others as brothers and sisters and decent human beings,
and assume that everybody is more developed than you are. The tekke is the place to practice a humble
self-effacing attitude to the Shaykh and the other murids. It is the place to learn service. One should speak
softly, sit quietly, and follow the directions of the Shaykh or leader. The talk should focus on Allah, not
our nafs (selfish ego). We aren’t going to the tekke to gossip or to backbite. We’re going there to talk
about Allah so we can get rid of our negative habits. The aim is to control your nafs. That’s why you obey
the adab, because your nafs doesn’t want to. (Nafs is singular.)
The Shaykh/a is your soul’s guide to Allah. S/he takes you from where you are right now, and
uses your inner materials to nurture your heart. The Shaykh represents your highest potential. By putting
your trust in the Shaykh as a guide, you make the first step towards unifying yourself. On a personal basis,
the Shaykh goes within you, sees the distinction between your nafs and your True self, and helps you to
initiate the process of unification.
The Shaykh’s job is to help you prepare the soil to grow your heart-tree. Your heart, in its pure,
cleansed state, is the greatest treasure you will ever have. The Shaykh knows its worth and works with you
constantly to cleanse it of personal and cultural accretions. This is a labor of love and service. The Shaykh
knows that when the heart is cleansed, it is as though a spirit child is born (till-i maani), a child of the spirit
who sees, hears, speaks, and knows the languages of all living things. Allah’s blessings shower down upon
a clean heart.
A clean and pure heart is the beginning point for a dervish. When the eyes of the heart see the
world and life for what they truly are, a new life has begun. That is why adab (right action) is so strongly
taught. The heart-child is new and innocent, but because there is an awareness of the need for proper social
interaction, harm because of wrong action is avoided. The heart-child deserves our deepest respect, and so
we prepare for that meeting with adab.
Adab is the rudder of your spiritual voyage. It keeps you on the right course towards Allah. You
learn and practice adab with the Shaykh. The position of the Shaykh is a maqam, a station or post. As you
develop your relationship with the Shaykh, you are also learning how to relate to Allah. The Shaykh has
been appointed as Allah’s representative for you. This is a serious and deep commitment.
Adab with the Shaykh means to think of the Shaykh first, and not yourself. For example, you do
not engage in small talk, do not speak first, and always ask permission for anything. You wait until the
`,zu=`Shaykh sits before you sit down. You rise when s/he rises. Learn the needs of your Shaykh, and keep them
in your mind, so that you may serve the Shaykh appropriately. Remember, it is not the person you are
serving, but what that person represents: Allah.
As Allah’s representative, the Shaykh/a has had to go through extensive and difficult training to be
able to serve Allah. All that the Shaykh does is for Allah’s sake, out of love for Allah. Your time with the
Shaykh should be one of service and quiet. The real teachings happen without words. It is a tuning of the
heart. When you are with the Shaykh, you are in Allah’s presence, and you should remain in a state of
prayer and obedience.
Emptiness is the key here. Without emptiness Allah cannot pour blessings in. The Shaykh has
visited the well of life and brought back the water for the thirsty to drink. Some complain about the cup,
some say it is the wrong time of day to drink. Some say they don’t like the cupbearer. The point, of course,
is: who cares about any of that as long as one gets the water to drink. If you are thirsty, you want water.
First, though, you must realize what thirst is and then discover that you are thirsty. Then find the water
carrier.
Being able to recognize a true teacher or Shaykh requires in itself a certain spiritual development.
You must have developed enough humility and truth about yourself to ask for help. Asking for help means
to leave your “independence” behind.
Through time and experience rabita develops. Rabita is the spiritual/mental/heart connection
between you and another person. In Sufism the primary rabita is between the murid (student) and the
Shaykh. Over time, many people experience a profound deepening of this connection. When you can begin
to trust the spiritual teacher, it means that the process of surrender can begin. Surrender, in Sufism, is
giving up what your nafs want and learning to listen to what Allah wants.
Before Arriving at the Dergah/Tekke
“Adab is the way of harmony, acting with deference to the scheme of the whole. It is a way of behaving
graciously which flows from the foundation of an inner attitude of surrender.” Shaykh Taner Ansari
When you come to the Sufi center, come with the intention that you will be in Allah’s presence. It
is necessary to arrive for mejlis (assembly) having first taken a thorough ritual bath or shower. It’s good to
have a clean mouth (clean teeth and breath), cleanliness of clothes, as well as deodorizing or lightly
perfuming the body as a courtesy to the Shaykh and others.
Shaykh Taner is your teacher and your spiritual father. His wife Muzeyyen Anne is your spiritual
mother. Shaykha Sheila Khadija is your spiritual aunt.
When Shaykh Arrives
As soon as you see the Shaykh arrive, stand up and greet him. As a greeting you may say, “Salaam
alaykum, Shaykh.” Then kiss the top of his right hand if he is not your Shaykh, or kiss the palm if he is
your Shaykh, and press his hand to your forehead. This is a Turkish custom of paying respect to elders,
which we have continued in the United States. It is also a symbolic kissing of the Prophet Muhammed’s
(peace be upon him) hand. You welcome the other people who have come with him in the following order:
his wife, his family, his khalifas, his guests, and his murids. If the Shaykh or his wife is carrying
something, take it from them. His wife is your spiritual mother. She is referred to as Anne (pronounced
ah~neh, mother) or Asli Anne.
Respect Towards the Shaykh
The closer you get to the Shaykh the greater your respect must be. You must not act too familiar
or disrespectful. Address Shaykh by title, e.g., Shaykh Taner, Shaykh Ibrahim, Shaykha Khadija.
In the Learning Circle
When the Shaykh enters the room, it is respectful to stop talking, stand up and wait for the Shaykh
to be seated. Sit down only after the Shaykh sits down and quietly wait until the Shaykh starts to speak.
Serve the Shaykh his tea. (Shaykh says, “No tea, no talk.”) While waiting for the Shaykh to speak, make
rabita (connection), go deeper into your heart and center yourself so that you are in a position to learn with
your whole being. When the Shaykh begins his talk, listen with your heart. Allah speaks to you through the
Shaykh. Do not interrupt, as the message may be lost. At the end of the discourse, the Shaykh will open the
`,Bu=`floor to questions. In our tariqa, no question is inappropriate. Ask so that you may learn. Avoid making
speeches, which may prevent others from asking their questions.
Anyone sponsoring a newcomer to the tekke (meeting place) should first introduce that person to
the meydan-ji (host) or khalifas (the Shaykh’s representatives) who will then introduce that person to the
Shaykh and will further assist the person if necessary.
During congregational zikr, the room is darkened, light coming from one small light or perhaps
candles. The men sit on one side of the Shaykh, the women on the other side, in a circle.
Sitting in the Shaykh’s Presence
When in the Shaykh’s presence, sit up in a respectful manner. Never lie down when your Shaykh
is around, for it shows your lack of adab and discipline. Never stretch out your legs towards your Shaykh or
the other guests when you are in the learning circle. If you are uncomfortable and must stretch your legs,
cover your feet with a cloth or stretch them away from the circle. In a Hadith it is told that once when
Allah’s Apostle (a.s.) was sitting with his legs outstretched, Jibril (Gabriel) appeared and said,
“Muhammed, sit as servants sit before a master.”
Entering Late
Quietly enter the room, paying your respects to the Shaykh by placing your right hand on your
heart and making a slight bow and sitting down quietly and unobtrusively. When the talk is over, approach
the Shaykh and greet him.
Taking Leave Early
If you have to leave during the talk, wait for an appropriate time, for example, between questions.
Let your intention be known and quietly exit. If you have to leave during the zikr, just bow slightly and
quietly leave.
At the Shaykh’s House
Do not enter the bedrooms without the Shaykh’s permission. If you are able to, come early to help
clean and prepare the dergah, kitchen and bathroom area as well, for Allah’s sake.
As the Host for Shaykh
As the host, make and plan the Shaykh's itinerary. Shaykh will follow your lead in this and in
other general matters. In other words, he will follow your routine. Don't be shy about asking Shaykh what
his needs are if you are not sure. In getting your house ready to receive the Shaykh, check to see if the
Shaykh has any special needs such as allergies to food, plants, molds or pesticides. Then prepare food and
clean your home accordingly.
Taping his Discourses
In order to have a record of Shaykh's talks, tape them. If you have two cassette recorders, tape two
copies and send us one of the copies with the Shaykh.
At the Table
Cook what your Shaykh likes. Always serve the Shaykh first when others will be sharing the meal.
When the Shaykh finishes eating, he generally does table prayers (ceremonial zikr, Lailaha il Allah, Ya
Allah, Ya Hu, the Fatiha). If you have not finished eating, stop until the prayers are over, then continue
eating.
Zikr
During congregational zikr, the room is darkened, light coming only from candles. If you do not
have candles, just lower the lights. The men sit on one side of the Shaykh, the women on the other side, in a
circle.
Shaykh’s Departure
`,Vu=`When the Shaykh is ready to depart, thank him and guests for visiting you. The murids, especially
the men, carry the Shaykh’s things back to the car and wait in attendance until he leaves before returning to
the house.
Getting the House Ready to Receive Shaykh Taner
Shaykh Taner has allergies. He is allergic to pine, molds, and pesticides. During his allergy
attacks, his eyes bother him. Clean the house and remove any plants to which the Shaykh may be allergic.
Burn incense and do protection prayers around the house. Have tea prepared. Shaykh cannot drink
black teas. Check to find out what he prefers. He does not like his tea very strong. Please make sure that his
teacup is full, especially when he is giving a discourse.
Always refer to the Shaykh by his title; e.g., Shaykh Taner, Baba (father), or Taner Baba. Don’t
use his first name even when you are talking with other people about him. His wife is your spiritual mother.
She is referred to as Muzeyyen Anne (pronounced ah~neh, mother) or Asli Anne.
Food for Shaykh Taner
Cook things your Shaykh likes. Shaykh has some health problems that prohibit him from eating
hot, spicy foods. He cannot eat cumin. He prefers simple meals. At dinner he likes a simple meat, chicken
or fish dish, served with rice and salad. Stews are fine, but remember not hot, spicy. Put a saltshaker by his
plate and serve lemon wedges or lemon juice as a condiment.
Shaykh is lactose intolerant to certain dairy products, like whole milk. However, he can eat yogurt
with his meals.
For breakfast, which is more like brunch, for example, he eats eggs, feta cheese, olives, tomatoes,
and flat bread. Feel free to ask him what other foods he would like for his meals.
Keep fresh fruit available for him to snack on. He especially likes watermelon, grapes, and
oranges. However, you may offer him any fruit native to South Africa/Tanzania.
Always serve the Shaykh first when others will be sharing the meal. When the Shaykh finishes
eating, he generally does table prayers (ceremonial zikr). If you have not finished eating, stop until the
prayers are over, then continue eating.
Rest for Shaykh Taner
Because of the intensity of the spiritual energy that the Shaykh is carrying, he needs to rest
periodically. Please be aware of this and make sure that he gets his rest. At least once a day, a man should
massage the Shaykh's feet and lower legs, which help promote his well-being. The Shaykh needs to be kept
warm. He is disturbed by drafts and cold.
General Adab
If you are not sure about adab, after asking your heart, ask the Shaykh’s wakils or khalifas what is
appropriate.
The individual key in all adab is, of course, the Shaykh. He is the one who sets the tone of the
halka (circle). What will be studied in the gathering is the responsibility of the Shaykh, as is when the
activity will begin and end. Communications pass through him. He is the first person the dervish greets
when he arrives at the tekke, and the first one the dervish takes his leave of when leaving. The dervish asks
the Shaykh’s permission before undertaking any major decision, such as moving, traveling, or getting
married. A good attitude to have is to talk with or email one’s Shaykh at least once a week, if not more.
All instructions given by the Shaykh to murids should be treated as confidential, just as all
personal issues discussed by the murid with the Shaykh are confidential. Do not ask a fellow dervish about
their practices or compare yours to anyone else’s. Practices are given for the particular person’s
guidance/requirements, and most likely will be quite different than others’. Discussion of “visions,”
dreams, and other spiritual phenomena are discouraged between murids because of the confusions, as well
as subtle competitiveness, that may arise, unless they are being used in teaching to help the brother or sister
murid.
The most destructive and damaging problem in a spiritual group is backbiting. Backbiting occurs
when one or more people criticize the character of another individual who is not present. This kind of
destructive behavior can destroy a dervish halka, and once the damage is done it’s difficult to repair. The
`,Hu=`tekke is the place where the nafs is gradually brought into alignment with Reality. It is therefore expected
that conflicts will arise. Because of this, adab becomes a practice of extreme importance, not a mere
formality.
You learn by listening and observing. If you want to say something while the Shaykh is talking or
if you have a question, politely ask the Shaykh for permission to talk. The Shaykh might have you wait
because what is coming through might be forgotten if he is interrupted.
You can show disagreement with the Shaykh or other murids in a respectful way. (This doesn’t
mean that you are right!) If you hear something that you disagree with, put it in the “bag” behind you. If
you hear something that you agree with, put it in the “bag” in front of you. There might come a time when
you understand what you had previously disagreed with.
(In a humorous vein:)
Rule 1, is that the Shaykh is always right.
Rule 2, if you think the Shaykh is wrong, refer to Rule 1.
You can learn this the easy way or the hard way. The easy way is by listening to your Shaykh. If
you don’t, then you learn the hard way.
You are free to join the halka of another tariqa and do their zikr if you have permission of your
Shaykh, and the permission of the Shaykh of that tariqa. Your adab should be the same as with their own
Shaykh. If there are unique or different aspects to the adab of the other tariqa, honor these also. If the
Shaykh of the other tariqa offers the baraka (blessings) of his order in the form of biat (initiation, taking
hand), tell the Shaykh of your primary connection to your own tariqa and whether or not you have your
Shaykh’s permission to accept honorary biat. A dervish should ask to be released from commitment to his
or her own Shaykh before fully entering any other tariqa and taking full biat.
Adab of Handling the Qur’an
The Quran is not an ordinary book. It is a holy book, containing the words of Allah to our Prophet
(pbuh) and so it must be treated with respect. Do not leave it lying around or pick it up casually. There are
certain musts and certain suggestions in touching the Quran, particularly if the Arabic text is included. It
has been said that if you take care of the Quran, it will take care of you.
Reading or reciting the Quran is a sacred activity, like prayer and zikr. Before you open the book,
you should always do wudu (ritual cleansing). It is also suggested that you dress as you would to offer salat
(prayer): both sexes dressing modestly and women covering their heads. State your intention (niyat) to read
the Quran and hold it higher than your waist, sitting in a respectful position. Anytime you are not reading
the Quran, close it, even if you are briefly interrupted and intend to resume reading soon.
Always store the Quran in a clean place that is higher than your waist. It should never touch the
floor, where people walk. Also, don’t put any other books, or anything else for that matter, on top of the
Quran. The Quran, or even any piece of paper on which ayat (verses) are written, should never be thrown
away, but burned instead.
English translations of the Quran, without the Arabic text, may be treated with less formality if
you are referring to them for learning purposes. You may touch them without first performing ablution
(wudu). Of course, even with English versions, the more respect you give to the Quran, the more blessings
you open yourself up to receive.
Adab of Being a Guest
Short Term Visit
1. As a guest, you should make arrangements with or notify the host before the visit.
2. If you are a man visiting another married man, you shouldn’t enter the house if only the wife is
present. If you are a woman visiting a married woman, you shouldn’t enter the house if only the
husband is present.
3. If you are a man visiting a woman, you should be in the presence of a third person unless the
woman is a relative or has a muta (committed relationship) with you, which is publicly known. If
you are a woman visiting a man, you should be in the presence of a third person.
4. Restrict yourself to the areas of the house to which you have been permitted by the host.
`,Uu=`5. Be kind, take what is offered, and make no unnecessary demands.
6. Respect the host and household; e.g., the family, dog or cat, property.
7. Volunteer to help with meals.
8. Do not judge the host in his or her family situation. Mind your own business and respect the
confidentiality of the host and the house.
9. Do not spread gossip after the visit.
10. Eat and drink what is offered and show appreciation with words and actions.
Long Term Visit
1. Follow the advice given for a short-term visit.
2. Always take a gift to the host.
3. The host is including you in his or her household, and thus you are witnessing the host’s privacy.
Do not try to change the lifestyle of the host and his or her family or object to how they run their
household. Do not meddle in their family matters; remember that you do not know the history of
the situation. If you make decisions or judgments in haste about situations in the household, you
are probably wrong.
4. Try not to be a burden financially or socially by making unreasonable demands or expressing
unsolicited opinions.
5. Help them in their everyday life as much as they let you. Offer your help physically and
financially if you are able.
6. Don’t try to exploit or abuse their hospitality. Don’t overstay your welcome. Remember that they
are having you in their house for Allah’s sake. They trust you. Don’t betray their friendship, their
property, their life, or their trust.
Adab of Eating
Eating is an important human activity. It is not only good for nourishing the body, but also good
for nourishing the mind and soul. Allah, The Most High, says in Quran-i-Kerim, “Don’t eat like unbelievers;
they eat like cows do.”
Eat, Drink, But Don’t Waste
Eating is experiencing the manifestation of Allah’s attributes with our senses. Because of this we
have to respect our food. Before you eat, you have to start with “Bismillah’ir Rahman’ir Rahim, In the
Name of Allah, the Most Merciful, the Most Compassionate.” It is very important to pray over our food.
We should pray “Ya Nur” over all the food in addition to doing the mealtime prayers (Lailaha il Allah, Ya
Allah, Ya Hu, the Fatiha).
The Order of Eating
Our Pir, Imam Ali, used to begin his meal with salt and finish with salt in order to activate the
digestive system. After the salt, one should have the soup (if soup is served), then the main course with rice
and salad. It is suggested that you don’t have more than one main course at a time. (You shouldn’t mix
many kinds of foods in the same meal.)
Water should be drunk sparingly during a meal. It is better for the digestion to drink water at least
fifteen minutes after eating, but better if you wait a couple of hours. When you drink water, always sit
down to drink it.
The ideal way to eat is to have the heavy meal at lunch and the light meal in the evening. If you
are going to eat any animal products (fish, chicken, beef), eat it at lunch. Save the evening for vegetables
and rice. Our Prophet (a.s.) has warned us not to fill our stomach to the top, but to leave one third of it
empty.
When to Start Eating
A Sufi doesn’t eat until he or she is hungry. If you are eating as a group of adults, you should not
start eating until the eldest or the spiritual leader starts. If you are eating with your Shaykh or Shaykha,
don’t touch the food until he or she does. If there are children, feed them before the adults.
`,Wu=`Always begin and end the meal with a prayer. If the family is eating the meal together, the head of
the household (father, mother or whomever the parents appoint) recites the prayers.
A very important aspect of the adab of eating is that the food must come from halal means; that is,
from honest earnings (that with which Allah is pleased). Children must be fed from halal earned income
because the means in which they are fed reflects in the children’s character as they grow up. If this doesn’t
happen, all the adab you have is useless.
Adab of the Shaykh – His Behavior and Manners - By Shaykh Taner
Shaykh has to be on a very high adab level. We can categorize this into certain sections:
1. His adab to his Shaykh and his silsillah, ultimately to the Prophet (pbuh) and to Allah.
2. His adab to the general public
3. His adab to his murids
4. His adab with other Shaykhs
5. His adab with other Shaykhs’ murids
First of all, in order to be a Shaykh, and to continue to be a Shaykh you have to follow your own
Shaykh. You have to have your own Shaykh’s adab with you, by showing respect to your Shaykh whether
he’s passed away or not. You have to make rabita to him at all times and assume that you don’t exist, that
your Shaykh is the one who is running the affairs. So you have to be humble and modest. You always have
to take our Prophet (a.s.) as an example. Your actions have to be correct with the sharia, tariqa, haqqiqa,
and marifa.
As you show respect to your Shaykhs and your Pirs, you also have to show respect to others’
Shaykhs and Pirs. Assume that your Shaykhs are also them. A Shaykh’s adab with the general public is
based on his remembering that he is representing the Prophet (a.s.), and he must act with each person
according to his or her level of understanding. You have to be modest and more tolerant. You must be very
patient in order to explain things to people in a way that they can understand. Don’t despise anybody.
With our own murids you also have to act with kindness, love, and compassion. Your goal should
be only their own good. Sometimes you might have to yell at them or punish them. This is not from
vindictiveness, but from doing what is good for them. You must never lose sight of the goal. Your job is
only to help them get to Allah.
A Shaykh should never try to take advantage of his murids. If they have money or other
properties, he should not try to get these away from them for his own use. If they donate or give willingly
for the tariqa or for Allah’s sake or for himself, then it is acceptable. But he should not devise a plan to take
their money or properties.
There are five things that a Shaykh must be aware of, as they can become problems for him:
1. Fame
2. Money
3. Women
4. Drinking and drugs
5. Vanity
Having vanity is thinking that you are it and you don’t need your Shaykh anymore. You always
need your Shaykh. Remember, it is not you who is doing anything. It is Allah who is acting through the line
of your silsillah; it is Allah who is doing things through you. You are Allah’s door. People are not coming
for you, but rather they are coming for Allah through you. That is, they are coming to you for Allah. Don’t
think that all this attention is for you. You have to pass it up to Allah, all that attention and love being for
Him. You have to disappear.
When it comes to the Shaykh’s adab with other Shaykhs, he should always treat other Shaykhs as
his equal or better. He should not try to overpower them or take over and see them as smaller. Sometimes
Arabic speaking people think that they have automatic rights, that they are the most perfect Muslims. They
think that non-Arabic speaking people don’t know, that they must take charge and start teaching them
because they are better than them. Remember, our Prophet (a.s.) said, “Arabs are no better than Persians,
and Persians are no better than Arabs, but people pass each other only with their actions. Whoever does the
good action gets closer to Allah.” So you have to respect other Shaykhs too.
`,Gu=`When you encounter other Shaykhs’ murids, you should not talk to them on your own. If you need
some service from them, you have to go to their Shaykh and their Shaykh will try to get someone to help
you. You don’t see other Shaykhs’ murids as your servants or try to get their money or see them as an
opportunity to get money. First of all, a Shaykh should not lie to get money. A Shaykh should not cheat to
collect money. Whatever money he does collect, he has to use it for the purpose for which he is collecting.
Remember, our Prophet (pbuh) didn’t cheat or lie.
Some Shaykhs try to steal other Shaykhs’ students. This is a shame. If you are a Shaykh, you
should know who your son or daughter is. You should not be after anybody else’s daughter or son.
As a Shaykh you should not brag about how many followers you have. You don’t brag at all. It is
not important how many followers you have. The important thing is how many of them you took to Allah.
Can you spend time with all of them? Are you showing the proper affection for them? Having a lot of
people behind you doesn’t make you a good Shaykh. Michael Jackson has more people, but he’s not a
Shaykh.
A true Shaykh serves Allah only, and he lets Allah do everything. He knows his children and he
takes care of them. He doesn’t use them or abuse them. Everything has to be for their own good and in the
line of getting them to Allah.
So we all have to follow the Prophet’s (a.s.) footsteps in Sharia, in Tariqa, in Haqqiqa, and in
Marifa. If you are not doing this, don’t cheat people by claiming you are a Shaykh. If you are cheating,
lying, drinking, smoking pot, and other such things, how can you declare that you are a Shaykh?
One more important issue is that your students are our children. You cannot marry them, you
cannot molest them, and you cannot have any sexual contact with any of them whether it’s legal or not. It is
absolutely illegal for a Shaykh to have any sexual contact with his students. You have to follow the Prophet
(pbuh), that’s all.
A true Shaykh gives the truth. We just represent the truth and nothing but the truth. The people
have to see and compare, they have to decide who is true or not. If you are a liar, Allah will lead you to a
liar Shaykh. If you are true, Allah will lead you to a true Shaykh. The truth is available. What we try to do
is make it available to people.
The conditions of a true Shaykh are the following:
1. He follows the sharia.
2. He speaks about what is in your heart. He answers questions that you have not spoken aloud.
3. When you are in his presence you forget your troubles. He takes your load.
4. He praises Allah and not himself.
5. He has a silsillah (lineage) and a license to teach the path.
If someone fits these conditions, he or she is on the right path, and still Allah knows if he is a true
Shaykh or not, if he has a silsillah or not; it depends on a lot of things. But if he doesn’t fit them, he is not a
Shaykh at all, whether he has a silsillah or not. He is in the wrong.
May Allah help all the Shaykhs to be true; may Allah help us to clean ourselves and be real, true
Shaykhs. Our purpose in writing this article is to try to point out some problems in this society. We are not
trying to point our finger at any particular person, and that is not our job. It is the job of the people to
decide whom they belong to and who is real or not. May Allah help all the Shaykhs who are true and
everybody else who is trying to carry Allah’s message, so that they can move one more step toward Allah.
May Allah bless them all. Amin
Adab of the Murshid (Shaykh)
By Shaykh Muhyiddin Ansari
What about the Murshids? How should they act? Abdul Qadir al-Jilani says, “The Murshid should
accept a murid only for the sake of Allah.” Keep in mind the hadith that says religion is advice. He must be
with his murids. He must be kind to his murids and not put heavy loads on them that they cannot carry. He
must raise them like a mother raising her children. The Murshid requires his murid to do the things that are
permitted in the Shariat.
The Murshid should not exploit his murids financially. He must expect his payment from Allah. On the
other hand, he can accept help from his murids in the form of a gift as long as it is the murid’s own will
without any influence on the Murshid’s part.
Murshids can collect or accept money such as zakat for the purpose of giving to the poor or building a
masjid (mosque), etc.
`,Ku=`The Murshid should advise murids and should be soft to them. The Murshid should take our Prophet
(a.s.) as an example in his teachings.
When a Murshid realizes that his attitude is hindering the growth of his murids, he should resign
himself from the post of enlightening and work on attaining better manners. He should himself look for a
Murshid who will help him better himself. As you see, the Murshid has to be mature (kamil).
True Murshids are mature Murshids. They have cleansed themselves of their nafs. This is why Allah
has appointed them to this position.
A Murshid cannot accept murids of another Murshid without the permission of that murid’s Murshid.
True Murshids recognize who belongs to them and who belongs to another Murshid. Murshids respect each
other and they should cooperate.
Quotes of Prophet Muhammed on Generosity
• If anyone gives as charity as little as a date that has been lawfully earned, God will accept it with
His right hand, then nurture it on behalf of the one who gave it in the same way that one of you
nurtures a colt, till it becomes like a mountain.
• Every act of kindness is an act of charity... Do not consider any act of kindness insignificant, even
meeting another with a cheerful face.
• Worship the Compassionate One, provide food, and greet everyone you meet, and you will enter
paradise in peace.
• The most excellent charity consists in your satisfying a hungry stomach.
• When Aisha asked the Prophet what things were unlawful to refuse, he replied, "Water, salt and
fire. To those who give fire, it is as if they had given in charity everything cooked by that fire. To
those who give salt, it is as if they had given in charity everything freshened by that salt. To those
who give water where water is found, it is as if they had freed a slave. To those who give water
where there is none, it is as if they had given the thirsty one life."
Allah’s 99 Beautiful Names
By Shaykh Taner
The Sufi's goal in life is to achieve an intimate understanding of, and love for, God. As in any
pursuit, he must have some idea of what he is looking for. The Sufi therefore asks, who or what is God?
The cornerstone of faith for all Muslims, including Sufis, is the statement "La ilaha illa 'llah," that
is, "There is no god but God." Muslims call God "Allah" because there is no gender implied in this Arabic
appellation. Allah can have no gender because it would be a limiting factor, and Allah can have no limits.
Muslims believe that God is omniscient, omnipotent, and is the uncaused Cause of all creation. Allah is
without limit in every dimension, infinitely and eternally, the formless Creator of all forms. Allah is neither
created nor can He be destroyed.
For Sufis, because Allah is both uncreated and the Creator, Allah is the fundamental energy which
has existed before all time. Furthermore, because Sufis believe that Allah is the Being who contains infinite
knowledge and power to act in whatever way He wills, the Sufi concept of Allah includes His
comprehensive consciousness. Simply put, Allah is the conscious energy of the universe, aware of and in
command of all existence, unbounded by time or space. Allah defines Himself in the Holy Quran as "... the
Light of the heavens and the earth" (24:35). Just as we understand that light is energy, we conceive of Allah
as energy. Allah as pure energy is formless, but contains the potential to create all forms. Allah's power is
at once the energy used to create all forms, and the energy/substance of forms. We find the Sufi point of
view supported by scientific research in the following statement: "'Light' creates our world of pattern and
form. In agreement with many other scientists, we defined the domain for 'light' as the full range of the
electromagnetic spectrum in modern physics theories. ... Everything in the physical world represents
various manifestations of light." All creation consists of Allah's own substance. The basic matter of all
`,qu=`things are contained within His singular reality. Sufis call this spiritual/material substance the Ninety-Nine
Names or the Beautiful Names of Allah. These Names are Allah's diverse attributes, all of which comprise
His entire Being. Allah's essence holds all of these qualities as potential energy. In the act of creation, His
potential energy becomes kinetic.
ALLAH’S NAMES NUMEROLOGICAL VALUE
0. Allah, the Inconceivable Absolute God. 66
1. Ar-Rahman, the Most Merciful; Ya Rahman 298
2. Ar-Rahim, the Most Compassionate; Ya Rahim 258
3. Al-Malik, the Absolute Ruler; Ya Malik 90
4. Al-Quddus, the Holy One; Ya Quddus 170
5. As-Salaam, the Peace, Salvation; Ya Salaam 131
`,Ju=`6. Al-Mu’min, the Believer; Ya Mu’min 136
7. Al-Muhaymin, the Guardian; Ya Muhaymin 145
8. Al-Aziz, the Victorious; Ya Aziz 94
9. Al-Jabbar, the Compeller; Ya Jabbar 235 or 206?
10. Al-Mutakabbir, the Greatest; Ya Mutakabbir 662
11. Al-Khaliq, the Creator; Ya Khaliq 731
12. Al-Bari, the Shaper; Ya Bari 213
`,Yu=`13. Al-Musawwir, the Detailer; Ya Musawwir 336
14. Al-Ghaffar, the Forgiving One; Ya Ghaffar 1281
15. Al-Qahhar, the Destroyer; Ya Qahhar 306
16. Al-Wahhab, the Giver, Bestower; Ya Wahhab 14
17. Ar-Razzaq, the Provider; Ya Razzaq 308
18. Al-Fattah, the Opener; Ya Fattah 489
19. Al-Alim, the Knower of All; Ya Alim 150
`,Xu=`20. Al-Qabid, the Constrictor; Ya Qabid 903
21. Al-Basit, the Reliever, Expander; Ya Basit 72
22. Al-Khafid, the Abaser; Ya Khafid 1481
23. Ar-Rafi, the Exalter; Ya Rafi 351
24. Al-Mu'izz, the Bestower of Honors; Ya Mu’izz 117
25. Al-Mudhill, the Humiliator; Ya Mudhill 770
26. As-Sami, the Hearer; Ya Sami 180
`,Zu=`27. Al-Basir, the Seer; Ya Basir 302
28. Al-Hakam, the Judge; Ya Hakam 68
29. Al-Adl, the Just One; Ya Adl 104
30. Al-Latif, the Subtle One; Ya Latif 129
31. Al-Khabir, the Aware; Ya Khabir 812
32. Al-Halim, the Soft One; Ya Halim 88
33. Al-Azim, the Magnificent One; Ya Azim 1020
`,Qu=`34. Al-Ghafur, the Forgiver, the Hider of Faults; Ya Ghafur 1286
35. Ash-Shakur, the Thankful One; Ya Ash Shakur 526
36. Al-Ali, the Highest; Ya Ali 110
37. Al-Kabir, the Greatest; Ya Kabir 232
38. Al-Hafiz, the Preserver; Ya Hafiz 998
39. Al-Muqit, the Watcher Over; Ya Muqit 550
40. Al-Hasib, the One Who Keeps Accounts
`,$u=`and Measures Over All Things; Ya Hasib 80
41. Al-Jalil, the Mighty; Ya Jalil 73
42. Al-Karim, the Generous; Ya Karim 270
43. Ar-Raqib, the Vigilant; Ya Raqib 312
44. Al-Mujib, the Responder to Prayer; Ya Mujib 55
45. Al-Wasi, the All-Comprehending; Ya Wasi 74 or 137?
46. Al-Hakim, the Wise; Ya Hakim 78 or 76?
`,ed=`47. Al-Wadud, the Loving One; Ya Wadud 20
48. Al-Majiyd, the Majestic One; Ya Majiyd 57
49. Al-Ba'ith, the Resurrector; Ya Ba’ith 573
50. Ash-Shahid, the Witness; Ya Shahid 319
51. Al-Haqq, the Truth; Ya Haqq 108
52. Al-Wakil, the Trustee; Ya Wakil 66
53. Al-Qawi, the Strong One; Ya Qawi 116
54. Al-Matin, the Enduring One; Ya Matin 500
`,td=`55. Al-Wali, the Protecting Friend; Ya Wali 46 or 47?
56. Al-Hamid, the Praised One; Ya Hamid 62 or 72?
57. Al-Muhsi, the Appraiser; Ya Muhsi 148
58. Al-Mubdi, the Originator; Ya Mubdi 56
59. Al-Mu'id, the Restorer; Ya Mu’id 124
60. Al-Muhyi, the Reviver; Ya Muhyi 68
`,nd=`61. Al-Mumit, the Taker of Life; Ya Mumit 490
62. Al-Hayy, the Alive One; Ya Hayy 18 or 17?
63. Al-Qayyum, the Eternal Caretaker; Ya Qayyum 156
64. Al-Wajid, the One Who Forms; Ya Wajid 14
65. Al-Maajid, the Glorious One; Ya Maajid 48 or 57?
66. Al-Wahid, the One; Ya Wahid 19
67. Al-Ahad, the Unique; Ya Ahad 13
68. As-Samad, the Receiver of Requests; Ya Samad 134
`,rd=`69. Al-Qadir, the All-Powerful 305
70. Al-Muqtadir, the Creator of All Power; Ya Muqtadir 744
71. Al-Muqaddim, the One Who Puts His Creatures Ahead;
Ya Muqaddim 184
72. Al-Mu'akhkhir, the One Who Puts His Creatures Behind;
Ya Mu’akhkhir 846
73. Al-Awwal, the Before; Ya Awwal 37
74. Al-Akhir, the After; Ya Akhir 801
75. Az-Zahir, the Outer; Ya Zahir 1106
`,id=`76. Al-Batin, the Inner; Ya Batin 62
77. Al-Waali, the Governor; Ya Waali 47 or 46?
78. Al-Muta'ali, the Supreme One; Ya Muta’ali
551 or 541
79. Al-Barr, the Doer of Good; Ya Barr 202
80. At-Tawwab, the Accepter of Repentance; Ya Tawwab 409
81. Al-Muntaqim, the Avenger; Ya Muntaqim 630 or 680?
82. Al-Afu, the Forgiver; Ya Afu 156
`,ad=`83. Ar-Ra'uf, the Clement; Ya Ra’uf 286
84. Malik al-Mulk, the Owner of All; Ya Malik al-Mulk 212
85. Dhul-Jalali Wal-Ikram, the Lord of Majesty and Bounty;
Ya Dhul-Jalali Wal-Ikram 1100
86. Al-Muqsit, the Equitable One; Ya Muqsit 209
87. Al-Jami, the Gatherer; Ya Jami 114
88. Al-Ghani, the Rich One; Ya Ghani 1060
89. Al-Mughni, the Enricher; Ya Mughni 1100
`,od=`90. At-Mani, the Preventer; Ya Mani 161
91. Ad-Darr, the Creator of the Harmful; Ya Ad-Darr 1001
92. An-Nafi, the Creator of the Good; Ya Nafi 201
93. An-Nur, the Self-Emitting Light; Ya Nur 256
94. Al-Hadi, the Guide; Ya Hadi 20
95. Al-Badi, the Originator; Ya Badi 86
96. Al-Baqi, the One Who Remains; Ya Baqi 113
`,sd=`97. Al-Warith, the Inheritor of All; Ya Warith 707
98. Ar-Rashid, the Capable of Right Judgment; Ya Rashid 514
99. As-Sabur, the Patient One; Ya Sabur 298
Glossary of Sufi Terminology
A B C D E F G H I J K L M N P Q R S T V W Y Z
A
Abdal: Plural of badal.
Abaya: An Arabian cloak that is sleeveless, usually worn as an outer garment.
Abu Bakr As-siddiq: First Khalifa after the Prophet.
Adab: Spiritual courtesy or manners, courteous behavior; the way to act.
Adhan: Call to prayer.
Ahlak: Personal character or temperament.
Akbar: Greater or greater.
Al-Kitab: lit. The Book - another name for the Quran
Alam-i-jabbarut: The world, or realm of the archangels.
Alam-i-lahut: The world, or realm of the essence of Allah.
Alam-i-malakut: The world, or realm of the angels.
Alam-i-mulk: The world, or realm of creation.
Alayhi salaam: “Peace be upon him”; an honorific phrase traditionally uttered after
mentioning the name of a prophet or archangel; abbr. a.s.
Alayhis-salat was-Salam: “upon Him be Blessing and Peace.”
Ali Ibn Abu Talib: Fourth and last of the righteous Khalifas after the Holy Prophet
Muhammed (pbuh).
Alim: Knower, in a scholarly sense. Remembers a lot of information and calls it up from
mind’s memory – indirect knowledge
Amri maruf: The encouragement of good deeds.
Anbiya Al Mursalin: Prophet-Messengers.
Angel: A being created for the express purpose of carrying out Allah’s commands.
Aql: The rational mind.
Archangel: An angel with superior powers and responsibility.
Arif: Knower, according to deep spiritual states, Gnostic, mystic knower. Makes rabita
with shaykh or Allah to receive information – direct knowledge from Allah
`,cd=`As-salaamu alaykum: “Peace be upon you.”
Ash-hadu an la ilaha illallah: “I bear witness that there is no god but Allah.”
Asma ul Husna: The 99 Names of Allah that are used individually or together in zikr.
Awliya: The saints and friends of Allah (plural).
Ayat: Sign, indication, verse.
Ayn-al-Yaqin: Lit., the eye of undeniably sure knowledge; apprehension of sure
knowledge; apprehension of sure knowledge by way of personal
experience and observation.
Azrael: The archangel who takes the souls from their bodies at death.
B
Badal: Substitute; a wali who is in such a state of surrender to Allah that he performs
divine duties spontaneously; a minister to the qutb.
Bakabillah: Lit., being constant in Allah.
Baqa: The state of “subsistence,” continuing awareness through Allah.
Baraka: The “grace” or spiritual energy emanating from Allah through the silsillah of
the Tariqat through which all practices are accomplished.
Bast: The state of expansion or elation.
Batin: Hidden.
Biat (or Biat): A pledge or promise, initiation.
Beautiful Names: See Most Beautiful Names.
Bektashi: Name of a widely known Sufi Tariqa founded by Haji Bektash Wali
(1281-1338 C.E.); a Sufi who belongs to the Bektashi Tariqa.
Bella: affliction, adversity and trouble
Beloved: An appellation of Allah particularly meaningful to Sufis.
Biat (or Biat): Pledge of allegiance; solemn vow taken between a Sufi initiate
and his Shaykh.
Bismillah: “In the name of Allah.”
Bismillah er Rahman er Rahim: Lit., “In the name of God, the Most Merciful,
the Most compassionate”, known as the Bismillah.
Burhan: The state of spiritual possession.
C
CARCAN: a form of public humiliation by exposition at a pole, but also for a type of
stocks that encloses hands and necks in a heavy wooden board.
Confession of Unity: “la ilaha illa ‘laah.” (“There is no god but God’).
D
Dajjal: The evil misleader; the Antichrist.
Dede: Lit. “Grandfather,” an elder dervish with spiritual standing within the order,
usually the same level as a Khalifa.
Dedeghan: Elders or senior members of a Sufi Tariqa.
Dergah: Gathering place; place where zikr and sohbet are held. “Royal court” the
tomb of a saint and also the center which serves as the headquarters
of a particular branch of an order.
Dervish: A student of Sufism; a degree of advancement in a Sufi student. “Poor one,”
synonymous with fakir, a formal member of an order. In the
Qadiri Rifa’i, a salik who has attained maturity of the path.
Dhawg: Lit. “taste”, perceptivity gained through divine grace.
Du’a: Prayer or invocation.
Dunya: Material world.
E
Ehli bayt: Muhammed’s (a.s.) Family
Ehli samawat: People of the heavens.
Estaghfirullah: “I ask forgiveness of Allah.”
F
Fakr: Poverty
Fakir: Poor person, in knowledge
`,ld=`Fana: Dissolving; merging; ending. Stage of “annihilation” in the journey to God,
cessation of ego-awareness that may be accomplished in
various levels or depths.
Fanaful Pir: Dissolving in the Pir.
Fanaful Rasul: Dissolving in the Messenger (a.s.).
Fanaful Shaykh: Dissolving in the Shaykh.
Fanafullah: Dissolving in Allah.
Fatiha: Opening verse of the Quran
Fitna: Causing strife among people by gossiping and backbiting, and by nafs, the selfish
ego
G
Gaffar: Able to forgive.
Gawsul Azam: The Greatest Helper; an honorific title referring
to the Sufi saint and founder of the Qadiri Tariqa, Hazreti Abdul
Qadir Geylani (r.a.), which describes his power of intercession on
behalf of the believer.
Ghaiba: gossiping and backbiting
Ghawth: Helper, very high station in hierarchy.
Ghawth-i-Azam: “The Greatest Help(er),” a title of Pir Abdul Qadir al Geylani.
Gospel: The scripture sent to Prophet Isa (a.s.).
H
Habibullah: The lover of Allah; Allah’s beloved.
Hadith: Lit. tradition; well-known anecdote concerning the actions and sayings of
Prophet Muhammed (a.s.) as based on eyewitness accounts; also
known as Qudsi-Hadith; hadiths is a compilation of such
anecdotes.
Hadrah: Lit. “presence,” a gathering for the practice of zikr often accompanied with
movement.
Hadrat: See Hazreti.
Hafi: Silent Zikr
Haidar: The ornamental vest worn by a dervish.
Hajj: Pilgrimage to Mecca.
Hajji: Pilgrim.
Hal: A temporary spiritual state, as opposed to maqam, which is a permanent
spiritual station.
Halal: Permissible, according to sacred law, or sharia, or Islamic law.
Halka: Lit. “circle”, a group which gathers to practice or study Sufism, usually a
Shaykh
and murids.
Halwet: Spiritual retreat; (Turk.) is often 40 days.
Haram: Forbidden, according to sacred law, or sharia.
Hazreti: The Great; an honorific title (abbr. Hz.).
Himmah: Force of heart, decisiveness.
Hu: Third person singular pronoun, without gender, used in invocation, zikr.
I
Ibadat: Spiritual service.
Ijaza: The license to teach Sufism.
Ilm-al-Yaqin: Lit., the knowledge of undeniably sure knowledge; apprehension
of sure knowledge by way of written or verbal communication.
Ilm: Knowledge of science.
Iman: True faith.
Insan-i-Kamil: The perfected human being.
Insha Allah: If Allah wills.
Irada: The quality of spiritual aspiration.
Irfan: Gnosis; inner knowing, direct perception of Reality.
Irshad: Teaching the way to enlightenment, guidance or direction.
`,ud=`Ishq: Ardent love; passion or ardent desire.
Islam: Submission.
Ismi Jalal: Lit., the Name of Might, i.e., “Allah.”
Israfil: The archangel who will “blow the trumpet” on Judgment Day.
J
Jaheri zikr: Ceremonial remembrance of Allah executed in such a way as to be
audible to others.
Jalal: Lit., Might; Allah’s attributes of power or wrath.
Jamal: Lit., Beauty; Allah’s attributes of mercy.
Jibril: The archangel whose responsibilities include conveying messages and scriptures
from Allah to His prophets and other saintly people; known also
as Gabriel.
Jihad: Holy war, struggle or fight or effort.
Jihadu nafs: The holy war against one’s ego or self.
Jinn: Non-human being who is comprised of an electricity-like form of energy and is
not visible to the ordinary human eye; beings of the spirit world.
Jismani Ruh: Lit., corporeal soul; one of the four composite human souls; the soul
whose substance issues forth from the life-force of Allah.
Jubbe: A long gown with full sleeves.
K
Kaaba: The house of Allah in Mecca, originally built by Adam (a.s.), rebuilt by
Ibrahim (a.s.), and rededicated by Muhammed (a.s.); the sacred
destination of Muslim pilgrims.
Kabbala: Judaic mysticism.
Kafir: Unbeliever
Kalimah: The Islamic Creed.
Kanzi Mahfi: Secret Treasure
Kashf: Intuition, occasionally experience in lawami, sudden intuitions.
Khafi Zikr: Ceremonial remembrance of Allah executed in such a way as to be
audible only to oneself.
Khalifa: Lit., “vice-regent,” a deputized teacher or (sometimes) the designated
successor of a particular Shaykh.
Karama: Miracles
L
La Hawla wa la quwwata ila billahi ul Ali ul Azim: “There is no power or
strength except in Allah, the High, the Mighty.”
La ilaha illallah: “There is no god but God”; the Muslim declaration of faith; the
affirmation of the oneness of Allah. (There is no reality but God).
Laylatul Qadr: Night of Power, observed annually on one of the last ten days of the
Muslim month of Ramadan, during which Allah sends angels with
special blessings to mankind.
Laqab (nickname): “The White Falcon,” al-Bax al-Ashab, a title of Pir Abdul Qadir
al Geylani.
Levhi Mahfuz: a book where whatever will happen in the universe is written
M
Malak: Lit., having the power and ability to do deeds; Angel.
Ma’rifa: Mystical knowledge of all types held to be valid.
Masjid: mosque
Mahabba: Love or attraction.
Mahabbat: The state of effacement.
Maqam: (Makam) Station; spiritual level. A station or stage of spiritual development.
Maqamat: Lit., “station,” pl. of maqam, a more permanent condition having refined
one’s nafs. Permanent spiritual station
Marifa: State of knowing; state of Muhammed’s (a.s.) understanding.
Masjid: “mosque” in the West, literally “place of prostration.”
Messenger: An envoy, who also may be a prophet or an angel, sent by Allah to
`,dd=`convey a message to humanity and/or jinn.
Mevlevi: Name of a widely known Sufi tariqa founded by followers of Mevlana
Jalaluddin Rumi (1207-1273 C. E.); a Sufi who belongs to the
Mevlevi Tariqa.
Meydan: Means opening a circle of zikr by calling the Pirs
Meydan-ji: Maydan is literally the “field” or “meeting-place;” meydan-ji is an
elder dervish who helps other students learn the proper customs
and procedures of the Tariqat.
Mikhail: The archangel whose responsibilities and powers include managing weather
patterns on earth; also known as Michael.
Miraj: See below
Miraj-i-manawi: Prophet Muhammed’s (a.s.) famed spiritual Night Journey in which
he visited sacred sites on earth and traversed the heavens; the spiritual
journey taken by Sufis after completion of the process of tasawwuf.
Mihdi: One who is guided.
Mihrab: The niche in the wall, which shows the direction of prayer.
Most Beautiful Names: The attributes by which Allah describes Himself.
Muezzin or Mu’adh dhin: One who calls people to prayer, which is the adzan.
Muhasibi: Lit., “rendering account,” taking stock of one’s actions.
Muhyi-ud-din: “The Reviver of the Faith”, a title of Pir Abdul Qadir al Geylani.
Mu’min: Believer
Muraqaba: Meditation practiced in solitude.
Murid: Lit., “directed one,” a person who has accepted a spiritual director. Sufi student;
the one who surrenders his will and power to Allah.
Murshid: Lit., one who enlightens; Sufi master. Teacher of the Sufi Path, a title usually
reserved for the head of an order.
Muslim: One who submits to God.
Mutasadduq: The charitable one.
N
Nafs: Lit., breath; egoistic nature; man’s animal nature; the whole man as an individual
being. Personality/ego clusters which control people and keep
them from seeing Truth until the nafs is purified, refined, and
transcended.
Nafile ibade: Good worship
Nahy-i-munkar: The discouraging of ill deeds.
Naqshbandi: Name of a widely known Sufi Tariqa founded by Bahauddin Naqshbandi
(1318-1389 C.E.); a Sufi who belongs to the Naqshbandi Tariqa.
Ninety-Nine Names: See Most Beautiful Names.
Nur-i-Muhammed: The Light of Muhammed; the first created entity.
P
Pir: Spiritual ancestor; founder of a Sufi Tariqa; living principal of a Sufi tariqa.
Pir-i-Dastgir: “Who Takes by the Hand,” a title of Pir Abdul Qadir al Geylani.
Postaki or Post: A sheepskin used in place of a prayer rug.
Prophet: A designated representative of Allah, whose mission on earth was to enlighten
mankind as to spiritual truth, dispense Allah’s power as needed, and
warn mankind of imminent consequences for their wrongdoing;
one of the keepers of the covenant between mankind and Allah;
The Prophet refers to Muhammed of Arabia (a.s.).
Psalms: A scripture revealed to Prophet David (a.s.) in the form of a compilation of
devotional lyric verses.
Q
Qabz: Contraction or deflation.
Qadiri: Name of a widely known Sufi tariqa founded by Abdul Qadir Geylani (1078-
1166 C.E.); a Sufi who belongs to the Qadiri Tariqa.
Qawwal: One who chants in the liturgy, also known as a zakir.
`,fd=`Qible or Qiblah: The direction towards which Muslims face to pray, towards the
Ka’bah in Mecca.
Qudsi-Hadith: Lit., Holy Tradition; a documented eyewitness account of a saying or
action of Prophet Muhammed (a.s.): also known as Hadiths-i-
Qudsi or hadith.
Quran: Also Koran, Revelation from Allah. Lit., “recitation or lecture”; the holy
scripture revealed to Prophet Muhammed (a.s.) over the course of
twenty-three years; the last scripture revealed to mankind.
Qutb: Lit., “pole”; a person of extremely high spiritual level who acts as administrator
in the spiritual hierarchy of the world; a conduit of spiritual power
from Allah, through whom it is distributed in the world.
Qutb al Zaman: The Supreme Qutb; the living head of the spiritual administration.
R
Rabb: Lord, Sustainer.
Rabbi: “My Lord.”
Rabita: From the root “rab,” “binding,” to keep inward contact with one’s guide through
tawajjuh, concentrating one’s being upon another. Spiritual
connection between a person and Allah, or between two people; A
Sufi practice of purposeful spiritual connection between a Shaykh
and his student.
Radiyallahu anh: “May Allah be pleased with him”; one of the honorific phrases
traditionally uttered after mentioning the name of one of the
Prophet’s (a.s.)
Khalifas or a great saint; abbr. r.a.
Rafiq: Extreme softness of character.
Rahbar: Lit., “Conductor,” a spiritual guide.
Rak’at: A unit of ritual prayer including standing, bowing, sitting and prostrating.
Raqsh: Dancing.
Rasul: A messenger.
Rifa’i: Name of a widely known Sufi tariqa founded by Ahmed Rifai (1120-1183 C.E.).
A Sufi who belongs to the Rifai Tariqa.
Ru’yah: Lit., “vision,” esp. of a spiritual nature.
Ruh: Spirit, which contains divine secret; soul.
Ruhani Ruh: Lit., “the holy spirit”; one of the four composite human souls; the soul
whose substance issues forth from the essence of Allah.
Ruhsat: Concession or permission given by a Shaykh to perform a certain practice
or organizational function.
S
Sadiq: One who is loyal.
Safa: A state of spiritual tranquility.
Safabillah: Lit., “Being eternally happy with Allah.”
Sahabe: Lit., “companions”; Prophet Muhammed’s (a.s.) early followers, who
accompanied him in his daily life for spiritual enrichment
and to be at his disposal to provide any needed service.
Sahv: Lit., “sobriety,” the condition of the mature practitioner who has returned to
normative consciousness after sukr.
Sajjada: Prayer rug; a small rug on which Muslims traditionally offer ritual prayer
five times daily. A prayer rug which signifies the post of the
Shaykh.
Salams: The greeting of peace.
Salat: Islamic prayer, synonymous with namaz (pers).
Salawat: Asking Allah for peace and blessings upon the Prophet Muhammed (a.s.)
Salik: Lit., “traveler”; a seeker of spiritual realization.
Salla Allahu ‘Alayhi was Salam: “May Allah’s peace and blessings be upon him”,
spoken or written after Muhammed’s (a.s.) name.
`,pd=`Sanjak: A flag representing the order and its founder.
Sattar: Covering another’s shame; hiding others’ faults from themselves and the public;
concealing another’s shortcomings.
Sayrifullah: Lit., “journeying with Allah.”
Sayrima’ Allah: Lit., “journeying with Allah.”
Sayyids: Descendants of the Prophet (a.s.)
Sefiroth: Divine attributes which emanate from the unified Being of God throughout
the universe, according to the Kabbala, a body of Jewish mystical
doctrine; spiritual perception points in the human body which
correspond to divine attributes in the universe, e.g., mercy and
judgment.
Sema: Lit., “audition,” a spiritual concert or zikr accompanied by music and sometimes
turning (whirling).
Seyrani Ruh: Lit., “moving soul”: one of the four composite human souls; the soul
whose substance issues from the realm of angels, dreams, and jinn.
Seyyid: A descendant of Prophet Muhammed (a.s.).
Shafiq: Extreme kindness.
Sharia: the body of Islamic religious canons.
Shaykh: Lit., “elder,” appointed master in an order of dervishes. Commonly used in the
Middle East as an honorific title, to signify elder, teacher, tribal
leader; authorized teacher of tasawwuf.
Shirk: Sin, associating partners with Allah.
Siddiq: One who is truthful; an honorific title usually reserved for Abu Bakr (r.a.), the
Prophet Muhammed’s (a.s.) friend and Khalifa.
Silsillah: Lit., “chain,” the lineage of a Tariqat descending from the Prophet
Muhammed (a.s.) through his Companion, Ali Ibn Abu Talib or (in
some cases) Abu Bakr, or both. The chain of transmission includes
all Murshids of the order up to the present.
Silsiletil Zehep: the Golden Chain
Sirr: Secret, mystery.
Sohbet: A divinely inspired talk given by a Shaykh among his students.
Soffreh: A cloth spread on the floor used for meals.
Sufi: Lit., “wearer of wool.” In the Qadiri Rifa’i, one who has entered an order as a
novice.
Sufism: Modern Western term for tasawwuf, the system of spiritual cleansing practiced
by Sufis.
Sukr: Mystical intoxication, often accompanying wajd or fana
Sultani Ruh: Lit., “divine soul,” one of the four composite human souls; the soul whose
substance issues from the spiritual realm of the archangels.
Suluk: The path of a seeker; the particular life’s course or path of each student of
Sufism; the sum of experiences, both spiritual and mundane
in the life of a student of Sufism.
Sunna: Observed behavior of the Prophet (a.s.).
Sura: One of the one hundred fourteen sections of Quran, roughly translated as
“chapter”.
T
Ta’ifa: Lit., “group,” may designate a branch of an order.
Tafakkur: Meditative contemplation.
Tafsir: Explaining.
Taj: Lit., “crown”: the hat worn by a dervish.
Tajallay-i-sirr: The spiritual state of knowing the secret of creation.
Tajallay-i-sirrul sirr: The spiritual state of knowing the secret of the secret of
creation
Tajalli: The state of irradiation, epiphany, or theophany.
Talib: A candidate or aspirant to formal membership in a Sufi order.
Talqin: Inculcation; the practice of deliberate mental self-conditioning. Private spiritual
`,md=`instruction, transmitted orally or through other spiritual means.
Tariqa: Lit., “path,” the Sufi path, or school of spiritual study; the path to Allah
as exemplified in the behavior of Prophet Muhammed (a.s.);
a particular Sufi school, or order.
Tariqat: Lit., “way to,” order of Sufism founded by a recognized member of a silsillah.
Tassarruf: Executive spiritual power; a Shaykh’s authority to exercise spiritual
power at his discretion.
Tasawwuf: “Contemplative tradition,” exact equivalent for Sufism as a whole. The
system of spiritual cleansing known in the West as Sufism.
Tawba: Repentance.
Tawhid: Unity and oneness of God, the direct perception of the central tenet of Islam,
Allah’s absolute singularity.
Tawwakul: Complete trust in and reliance upon God alone.
Tekke (Turk): Lit., “corner,” a dervish gathering place, synonymous with Khaniqah
(Pers.) and Zawiyya (Ar.).
Tesbih: Lit., “glorification,” string of beads used in counting prayers.
Torah: The first five Books of the Old Testament, also known as the Pentateuch.
V
Verd: A set of prayers done in addition to the required 5 daily prayers (salat).
W
Wahdat al Wujud: “oneness of Being” (Ibn al Arabi), the absolute non-duality of
existence.
Wajd: The state of ecstasy.
Wakil: A guardian, representative of a Shaykh, lower in rank than a Khalifa. In the
Qadiri Rifa’i Tariqat, a wakil is permitted to lead a zikr.
Wali: Lit., “protecting friend,” a saint or someone who has attained a high degree of
realization, on which Allah has bestowed this attribute. Within the
Qadiri Rifa’i, a salik who may or may not be promoted to the
position of a guide. One of Allah’s Beautiful Names or attributes.
Waliullah: Lit., “Friend of Allah,” an honorific title usually reserved for Ali Ibn Abi
Talib (r.a.), Prophet Muhammed’s (a.s.) cousin and designated
representative.
Wazifa: Personal practice whereby a student of Sufism repeatedly invokes the
attributes of Allah according to a formula prescribed by his
teacher; individual zikr.
Wilayat: The state of protective friendship, a spiritual level attained by a Sufi on
whom Allah has bestowed His attribute Al-Wali, the Protecting
Friend.
Y
Yaqin: Lit., “certainty,” usually connoting conviction (of various degrees) concerning
the goal of the path. Undeniably sure knowledge.
Z
Zakir: One who chants in the liturgy, also known as a qawwal.
Zat: Essence or person of a being.
Zikr: Lit., “remembrance,” individual or collective meditation employing the names of
Allah. Traditional Sufi liturgy, exercised both congregationally and
individually.
Zina: Adultery
http://en.wikipedia.org/wiki/Main_Page an excellent site for looking up words
http://encyclopedia.thefreedictionary.com/Tarsus+%28city%29
`,hd=`For New Students
In our tariqa our focus is Allah only. Our example of a human being and how to behave is the Prophet
Muhammed (a.s.). Our manual for living is the Holy Quran.
Our path is not an easy path, because you must battle your nafs (selfish ego and its desires and its shirk,
etc.) and Shaytan's whispering and the doubts you may encounter. You must learn to trust in Allah only and
where and how Allah leads you. You must surrender to Allah's will.
Our path is a path of action. Talk little, act more. We learn Allah in our life. We must hold on to the
rope of Allah and not let go. We do not believe blindly. We ask questions and investigate until we know
internally. In our path we learn from the inside out. We get the learning and the behavior follows.
Our path is about adab, proper behavior in all situations, through adversity and good times. In adversity
we still hold on to the rope of Allah. The student gets individual attention and lessons. The student is a
sincere person who wants Allah only and is willing to go through the fire without letting go of the rope of
Allah.
Our path is the path of love. The shortest distance between you and Allah is love. We learn through
love, not fear. Our only fear is that Allah will dismiss us from Allah's service.
Are you willing to hold fast to the rope of Allah? Are you ready to take the step to polish your heart,
clean your nafs, and surrender to Allah though it may be very difficult?
The students whom we guide must be active in their path. There is no "abracadabra" boom! You are
"enlightened." It is hard and difficult work because Allah wants only the sincere, believing people for
Himself. Look at what the most beloved people of Allah had to endure and go through. The prophets, I
mean. Allah is merciful enough that He won't give us such a journey, but fighting our nafs is difficult
enough. If you are ready for such a journey, then you may belong to us. Shaykh Taner may be your guide
and teacher.
Please answer the following questions:
1. Who are you?
2. Where do you live?
3. How old are you?
4. Where did you hear about Sufism?
5. What do you know about Sufism?
6. Why do you want to know about Sufism?
7. Why have you contacted us, specifically?
8. Are you willing to donate monthly to our tariqa (see paragraph below)?
9. Have you studied any discipline, such as the arts, science, martial arts or sports?
10. Can you take criticism without defending yourself?
11. How do you learn?
12. Are you taking any medications?
13. What mental or health problems do you currently have?
14. Are you willing to look at your habits and be honest with yourself and your shaykh?
15. Do you have problems with trust and/or authority?
Tithing to the Tariqat
The dergah is for the use of all the dervishes. The Shaykh gives the teachings of Allah at no charge. It is the
responsibility of each dervish to realize there are needs in the dergah and then to search his or her heart in
order to know what he or she can offer to the fund. Your tax-deductible monthly donation provides and
supports the daily operation of the Tariqa, publications, savings towards a school, a retreat center, a
cemetery, travel to spread the message, and scholarships for spiritual education to study at home or abroad.
It is required that the murid pay a monthly tithe to the tariqa. Tithe and donations are the main source of
income for the tariqa. The suggested minimum contribution is $50 per month, as agreed upon by the group.
If you can afford more, donate more. If you have limited income, then donate less. Send your contribution
to Qadiri Rifa’i Tariqa or QRT, P.O. Box 833, Nassau, NY 12123 U.S.A. Thank you.
`,gd=`Suggested Readings
Murid Manual
Books by your Shaykh, Es-Seyyid Es-Shaykh Taner Ansari
The Sun Will Rise in the West: The Holy Trail
What About My Wood! 101 Sufi Stories
Alternative Healing: The Sufi Way
Grand Masters of Sufism: Abdul Qadir Geylani SECRET OF SECRETS and Ahmed er Rifai
GUIDANCE TO MYSTICISM
Bukhari’s collection of Hadith Qudsi (sayings of the Prophet, pbuh)
The Holy Quran
While no translation is ever complete, we like the English translations of Mohammed Marmaduke Pickthall
and Abdullah Yusuf Ali.
The Secret of Secrets
Abdul Qadir al Geylani
The Torah for Family Reading
The Five Books of Moses, The Prophets, The Writings
Edited by Joseph Gaer
Published by Jason Armstrong Inc. is a good source.
The Other Bible
by Willis Barnstone. Apocryphal books and non-canonical Gospels.
Sahih Al-Boukhari
Muhammed Ibn Ismaiel Al-Bukhari
Muhammad M. Khan (translator)
General Spiritual Topics and Biographies
Jesus, Prophet of Islam
Muhammad 'Ata ur-Rahim
Muhammad
Martin Lings
Kabbalah: An Introduction and Illumination for the World Today
Charles Ponce
Introducing the Prophets
M. Shamim Raza
A Brief History of Time: From the Big Bang to Black Holes
Stephen Hawking
Prayers Of The Cosmos, Meditations on the Aramaic words of Jesus
Neil Douglas-Klot
`,_d=`Turkish Pronunciation Guide
Consonants
Letter Approximate Pronunciation
b, d, f, l, m, n, p, t, z as in English, but when pronouncing d, n, and t, the tongue touches
the upper teeth.
c like j in jam
ç like ch in chip
g 1) before or after a, ı, o, u, as in go
2) before or after e, i, ö, ü, it is followed by a y-sound, as in angular
h always pronounced as in hit
j like s in pleasure
k 1) before or after a, ı, o, u, like c in cool
2) before or after e, i, ö, ü, it is followed by a y-sound, as in cure
r with the tip of the tongue touching the gums just behind the teeth
s always as in so, never as in is
ş like sh in shell
v often pronounced so weakly that it sounds more like a w
y 1) when at the beginning of a word or after a consonant, like y in yes
2) when y comes between e, i, ö, ü and a consonant, the vowel is lengthened
3) after a vowel, it becomes part of a diphthong
Vowels
In Turkish, vowels are generally short but can be lengthened by y; or when used in some words borrowed
from Persian or Arabic.
a 1) generally short version of the a in car, i.e. a sound between a in cat and u in cut
2) when long, as in car
e 1) usually as in met
2) sometimes (especially when long) like a in late
i as in machine
ı a sound between i as in big and u as in bug; with your lips spread as if to say ee, try to
pronounce u as in put
o as in tone, sometimes as in hot
ö like u in fur but shorter and with the lips a little rounded
ü pronounce ee as in see, but round your lips without moving your tongue
1) A circumflex accent (ˆ) over a vowel indicates that the preceding g, k, or l is followed
by a short y-sound
2) Elsewhere the circumflex indicates that a vowel is long.
ay like igh in sight
ey like ay in say
oy like oy in boy
`,vd=`- id: statement-from-shaykh-taner
  title: "Statement From Shaykh Taner"
  page: 2
  displayPage: "02"
- id: sufism-an-introduction
  title: "Sufism An Introduction"
  page: 3
  displayPage: "03"
- id: origins-of-sufism
  title: "Origins of Sufism"
  page: 5
  displayPage: "05"
- id: history-of-the-qadiri-rifai-order
  title: "The History of the Qadiri Rifa’i Order"
  page: 6
  displayPage: "06"
- id: biography-of-abdul-qadir-geylani
  title: "A Biography of Abdul Qadir Geylani"
  page: 7
  displayPage: "07"
- id: biography-of-ahmed-er-rifai
  title: "A Biography of Ahmed er Rifa’i"
  page: 13
  displayPage: "13"
- id: 32-fardz
  title: "32 Fardz (obligations) of a Muslim"
  page: 15
  displayPage: "15"
- id: levels-of-nafs
  title: "Levels of Nafs"
  page: 17
  displayPage: "17"
- id: maqam-of-arifs
  title: "Maqam (Spiritual Station) of Arifs (Gnostic)"
  page: 21
  displayPage: "21"
- id: crown-of-prophet-muhammed
  title: "The Crown of Prophet Muhammed (a.s.)"
  page: 24
  displayPage: "25"
- id: personal-and-group-zikr
  title: "Understanding Personal and Group Zikr"
  page: 25
  displayPage: "26"
- id: congregational-zikr-script
  title: "Qadiri Rifa’i Congregational Zikr Script"
  page: 31
  displayPage: "31"
- id: understanding-salat
  title: "Understanding Salat"
  page: 37
  displayPage: "38"
- id: congregational-salat
  title: "Congregational Salat"
  page: 40
  displayPage: "40"
- id: adab-of-dua
  title: "Adab of Du’a"
  page: 45
  displayPage: "45"
- id: silsillah
  title: "Silsillah of Qadiri Rifa’i Tariqa"
  page: 46
  displayPage: "46"
- id: adab-courtesies
  title: "Adab: Courtesies Practiced on the Path"
  page: 51
  displayPage: "51"
- id: allahs-99-beautiful-names
  title: "Allah’s 99 Beautiful Names"
  page: 60
  displayPage: "60"
- id: glossary
  title: "Glossary of Sufi Terminology"
  page: 75
  displayPage: "75"
- id: for-new-students
  title: "For New Students"
  page: 83
  displayPage: "81"
- id: tithing-to-the-tariqat
  title: "Tithing to the Tariqat"
  page: 83
  displayPage: "83"
- id: suggested-readings
  title: "Suggested Readings"
  page: 84
  displayPage: "84"
- id: turkish-pronunciation-guide
  title: "Turkish Pronunciation Guide"
  page: 85
  displayPage: "85"
`,yd=`Religion is a Science. It becomes Mysticism when you
don’t understand what you are doing. —Shaykh Taner
`,bd=`source: "Islamic Relief UK — The 99 Names and Attributes of Allah"
sourceUrl: "https://www.islamic-relief.org.uk/resources/knowledge-base/99-names-of-allah/"
names:
  - number: 1
    arabic: "الرَّحْمَنُ"
    transliteration: "Ar-Rahmaan"
    meaning: "The Beneficent"
  - number: 2
    arabic: "الرَّحِيمُ"
    transliteration: "Ar-Raheem"
    meaning: "The Merciful"
  - number: 3
    arabic: "الْمَلِكُ"
    transliteration: "Al-Malik"
    meaning: "The King"
  - number: 4
    arabic: "الْقُدُّوسُ"
    transliteration: "Al-Quddus"
    meaning: "The Most Sacred"
  - number: 5
    arabic: "السَّلَامُ"
    transliteration: "As-Salam"
    meaning: "The Source of Peace, The Flawless"
  - number: 6
    arabic: "الْمُؤْمِنُ"
    transliteration: "Al-Mu’min"
    meaning: "The Infuser of Faith"
  - number: 7
    arabic: "الْمُهَيْمِنُ"
    transliteration: "Al-Muhaymin"
    meaning: "The Preserver of Safety"
  - number: 8
    arabic: "الْعَزِيزُ"
    transliteration: "Al-Aziz"
    meaning: "All Mighty"
  - number: 9
    arabic: "الْجَبَّارُ"
    transliteration: "Al-Jabbar"
    meaning: "The Compeller, The Restorer"
  - number: 10
    arabic: "الْمُتَكَبِّرُ"
    transliteration: "Al-Mutakabbir"
    meaning: "The Supreme, The Majestic"
  - number: 11
    arabic: "الْخَالِقُ"
    transliteration: "Al-Khaaliq"
    meaning: "The Creator, The Maker"
  - number: 12
    arabic: "الْبَارِئُ"
    transliteration: "Al-Baari"
    meaning: "The Evolver"
  - number: 13
    arabic: "الْمُصَوِّرُ"
    transliteration: "Al-Musawwir"
    meaning: "The Fashioner"
  - number: 14
    arabic: "الْغَفَّارُ"
    transliteration: "Al-Ghaffar"
    meaning: "The Constant Forgiver"
  - number: 15
    arabic: "الْقَهَّارُ"
    transliteration: "Al-Qahhar"
    meaning: "The All-Prevailing One"
  - number: 16
    arabic: "الْوَهَّابُ"
    transliteration: "Al-Wahhaab"
    meaning: "The Supreme Bestower"
  - number: 17
    arabic: "الرَّزَّاقُ"
    transliteration: "Ar-Razzaaq"
    meaning: "The Provider"
  - number: 18
    arabic: "الْفَتَّاحُ"
    transliteration: "Al-Fattaah"
    meaning: "The Supreme Solver"
  - number: 19
    arabic: "الْعَلِيمُ"
    transliteration: "Al-‘Aleem"
    meaning: "The All-Knowing"
  - number: 20
    arabic: "الْقَابِضُ"
    transliteration: "Al-Qaabid"
    meaning: "The Withholder"
  - number: 21
    arabic: "الْبَاسِطُ"
    transliteration: "Al-Baasit"
    meaning: "The Extender"
  - number: 22
    arabic: "الْخَافِضُ"
    transliteration: "Al-Khaafidh"
    meaning: "The Reducer"
  - number: 23
    arabic: "الرَّافِعُ"
    transliteration: "Ar-Raafi’"
    meaning: "The Exalter, The Elevator"
  - number: 24
    arabic: "الْمُعِزُّ"
    transliteration: "Al-Mu’izz"
    meaning: "The Honourer, The Bestower"
  - number: 25
    arabic: "الْمُذِلُّ"
    transliteration: "Al-Muzil"
    meaning: "The Dishonourer"
  - number: 26
    arabic: "السَّمِيعُ"
    transliteration: "As-Samee’"
    meaning: "The All-Hearing"
  - number: 27
    arabic: "الْبَصِيرُ"
    transliteration: "Al-Baseer"
    meaning: "The All-Seeing"
  - number: 28
    arabic: "الْحَكَمُ"
    transliteration: "Al-Hakam"
    meaning: "The Impartial Judge"
  - number: 29
    arabic: "الْعَدْلُ"
    transliteration: "Al-‘Adl"
    meaning: "The Utterly Just"
  - number: 30
    arabic: "اللَّطِيفُ"
    transliteration: "Al-Lateef"
    meaning: "The Subtle One, The Most Gentle"
  - number: 31
    arabic: "الْخَبِيرُ"
    transliteration: "Al-Khabeer"
    meaning: "The All-Aware"
  - number: 32
    arabic: "الْحَلِيمُ"
    transliteration: "Al-Haleem"
    meaning: "The Most Forbearing"
  - number: 33
    arabic: "الْعَظِيمُ"
    transliteration: "Al-‘Azeem"
    meaning: "The Magnificent, The Supreme"
  - number: 34
    arabic: "الْغَفُورُ"
    transliteration: "Al-Ghafoor"
    meaning: "The Great Forgiver"
  - number: 35
    arabic: "الشَّكُورُ"
    transliteration: "Ash-Shakoor"
    meaning: "The Most Appreciative"
  - number: 36
    arabic: "الْعَلِيُّ"
    transliteration: "Al-‘Alee"
    meaning: "The Most High, The Exalted"
  - number: 37
    arabic: "الْكَبِيرُ"
    transliteration: "Al-Kabeer"
    meaning: "The Most Great"
  - number: 38
    arabic: "الْحَفِيظُ"
    transliteration: "Al-Hafeedh"
    meaning: "The Preserver"
  - number: 39
    arabic: "الْمُقِيتُ"
    transliteration: "Al-Muqeet"
    meaning: "The Sustainer"
  - number: 40
    arabic: "الْحَسِيبُ"
    transliteration: "Al-Haseeb"
    meaning: "The Reckoner"
  - number: 41
    arabic: "الْجَلِيلُ"
    transliteration: "Al-Jaleel"
    meaning: "The Majestic"
  - number: 42
    arabic: "الْكَرِيمُ"
    transliteration: "Al-Kareem"
    meaning: "The Most Generous, The Most Esteemed"
  - number: 43
    arabic: "الرَّقِيبُ"
    transliteration: "Ar-Raqeeb"
    meaning: "The Watchful"
  - number: 44
    arabic: "الْمُجِيبُ"
    transliteration: "Al-Mujeeb"
    meaning: "The Responsive One"
  - number: 45
    arabic: "الْوَاسِعُ"
    transliteration: "Al-Waasi’"
    meaning: "The All-Encompassing, The Boundless"
  - number: 46
    arabic: "الْحَكِيمُ"
    transliteration: "Al-Hakeem"
    meaning: "The All-Wise"
  - number: 47
    arabic: "الْوَدُودُ"
    transliteration: "Al-Wadud"
    meaning: "The Most Loving"
  - number: 48
    arabic: "الْمَجِيدُ"
    transliteration: "Al-Majeed"
    meaning: "The Glorious, The Most Honorable"
  - number: 49
    arabic: "الْبَاعِثُ"
    transliteration: "Al-Ba’ith"
    meaning: "The Infuser of New Life"
  - number: 50
    arabic: "الشَّهِيدُ"
    transliteration: "Ash-Shaheed"
    meaning: "The All Observing Witnessing"
  - number: 51
    arabic: "الْحَقُّ"
    transliteration: "Al-Haqq"
    meaning: "The Absolute Truth"
  - number: 52
    arabic: "الْوَكِيلُ"
    transliteration: "Al-Wakeel"
    meaning: "The Trustee, The Disposer of Affairs"
  - number: 53
    arabic: "الْقَوِيُّ"
    transliteration: "Al-Qawiyy"
    meaning: "The All-Strong"
  - number: 54
    arabic: "الْمَتِينُ"
    transliteration: "Al-Mateen"
    meaning: "The Firm, The Steadfast"
  - number: 55
    arabic: "الْوَلِيُّ"
    transliteration: "Al-Waliyy"
    meaning: "The Protecting Associate"
  - number: 56
    arabic: "الْحَمِيدُ"
    transliteration: "Al-Hameed"
    meaning: "The Praiseworthy"
  - number: 57
    arabic: "الْمُحْصِي"
    transliteration: "Al-Muhsee"
    meaning: "The All-Enumerating, The Counter"
  - number: 58
    arabic: "الْمُبْدِئُ"
    transliteration: "Al-Mubdi"
    meaning: "The Originator, The Initiator"
  - number: 59
    arabic: "الْمُعِيدُ"
    transliteration: "Al-Mueed"
    meaning: "The Restorer, The Reinstater"
  - number: 60
    arabic: "الْمُحْيِي"
    transliteration: "Al-Muhyi"
    meaning: "The Giver of Life"
  - number: 61
    arabic: "الْمُمِيتُ"
    transliteration: "Al-Mumeet"
    meaning: "The Creator of Death"
  - number: 62
    arabic: "الْحَيُّ"
    transliteration: "Al-Hayy"
    meaning: "The Ever-Living"
  - number: 63
    arabic: "الْقَيُّومُ"
    transliteration: "Al-Qayyoom"
    meaning: "The Sustainer, The Self-Subsisting"
  - number: 64
    arabic: "الْوَاجِدُ"
    transliteration: "Al-Waajid"
    meaning: "The Perceiver"
  - number: 65
    arabic: "الْمَاجِدُ"
    transliteration: "Al-Maajid"
    meaning: "The Illustrious, The Magnificent"
  - number: 66
    arabic: "الْوَاحِدُ"
    transliteration: "Al-Waahid"
    meaning: "The One"
  - number: 67
    arabic: "الْأَحَدُ"
    transliteration: "Al-Ahad"
    meaning: "The Unique, The Only One"
  - number: 68
    arabic: "الصَّمَدُ"
    transliteration: "As-Samad"
    meaning: "The Eternal, Satisfier of Needs"
  - number: 69
    arabic: "الْقَادِرُ"
    transliteration: "Al-Qaadir"
    meaning: "The Omnipotent One"
  - number: 70
    arabic: "الْمُقْتَدِرُ"
    transliteration: "Al-Muqtadir"
    meaning: "The Powerful"
  - number: 71
    arabic: "الْمُقَدِّمُ"
    transliteration: "Al-Muqaddim"
    meaning: "The Expediter, The Promoter"
  - number: 72
    arabic: "الْمُؤَخِّرُ"
    transliteration: "Al-Mu’akhkhir"
    meaning: "The Delayer"
  - number: 73
    arabic: "الْأَوَّلُ"
    transliteration: "Al-Awwal"
    meaning: "The First"
  - number: 74
    arabic: "الْآخِرُ"
    transliteration: "Al-Aakhir"
    meaning: "The Last"
  - number: 75
    arabic: "الظَّاهِرُ"
    transliteration: "Az-Zaahir"
    meaning: "The Manifest"
  - number: 76
    arabic: "الْبَاطِنُ"
    transliteration: "Al-Baatin"
    meaning: "The Hidden One, Knower of the Hidden"
  - number: 77
    arabic: "الْوَالِي"
    transliteration: "Al-Waali"
    meaning: "The Sole Governor"
  - number: 78
    arabic: "الْمُتَعَالِي"
    transliteration: "Al-Muta’ali"
    meaning: "The Self Exalted"
  - number: 79
    arabic: "الْبَرُّ"
    transliteration: "Al-Barr"
    meaning: "The Source of All Goodness"
  - number: 80
    arabic: "التَّوَّابُ"
    transliteration: "At-Tawwab"
    meaning: "The Ever-Pardoning"
  - number: 81
    arabic: "الْمُنْتَقِمُ"
    transliteration: "Al-Muntaqim"
    meaning: "The Avenger"
  - number: 82
    arabic: "الْعَفُوُّ"
    transliteration: "Al-‘Afuww"
    meaning: "The Pardoner"
  - number: 83
    arabic: "الرَّؤُوفُ"
    transliteration: "Ar-Ra’oof"
    meaning: "The Most Kind"
  - number: 84
    arabic: "مَالِكُ الْمُلْكِ"
    transliteration: "Maalik-ul-Mulk"
    meaning: "Master of the Kingdom, Owner of the Dominion"
  - number: 85
    arabic: "ذُو الْجَلَالِ وَالْإِكْرَامِ"
    transliteration: "Dhul-Jalaali Wal-Ikraam"
    meaning: "Lord of Glory and Honour, Lord of Majesty and Generosity"
  - number: 86
    arabic: "الْمُقْسِطُ"
    transliteration: "Al-Muqsit"
    meaning: "The Just One"
  - number: 87
    arabic: "الْجَامِعُ"
    transliteration: "Al-Jaami’"
    meaning: "The Gatherer, The Uniter"
  - number: 88
    arabic: "الْغَنِيُّ"
    transliteration: "Al-Ghaniyy"
    meaning: "The Self-Sufficient, The Wealthy"
  - number: 89
    arabic: "الْمُغْنِي"
    transliteration: "Al-Mughni"
    meaning: "The Enricher"
  - number: 90
    arabic: "الْمَانِعُ"
    transliteration: "Al-Mani’"
    meaning: "The Withholder"
  - number: 91
    arabic: "الضَّارُّ"
    transliteration: "Ad-Dharr"
    meaning: "The Distresser"
  - number: 92
    arabic: "النَّافِعُ"
    transliteration: "An-Nafi’"
    meaning: "The Propitious, The Benefactor"
  - number: 93
    arabic: "النُّورُ"
    transliteration: "An-Nur"
    meaning: "The Light, The Illuminator"
  - number: 94
    arabic: "الْهَادِي"
    transliteration: "Al-Haadi"
    meaning: "The Guide"
  - number: 95
    arabic: "الْبَدِيعُ"
    transliteration: "Al-Badee’"
    meaning: "The Incomparable Originator"
  - number: 96
    arabic: "الْبَاقِي"
    transliteration: "Al-Baaqi"
    meaning: "The Everlasting"
  - number: 97
    arabic: "الْوَارِثُ"
    transliteration: "Al-Waarith"
    meaning: "The Inheritor, The Heir"
  - number: 98
    arabic: "الرَّشِيدُ"
    transliteration: "Ar-Rasheed"
    meaning: "The Guide, Infallible Teacher"
  - number: 99
    arabic: "الصَّبُورُ"
    transliteration: "As-Saboor"
    meaning: "The Forbearing, The Patient"
`,xd=`- id: "2-152"
  text: "Remember me, I shall remember you."
  reference: "2:152"
  featured: true
`,Sd=`# One entry per line:
# Name | full YouTube link containing its start and end time
`,Cd=`# - week: "2026-W29"
#   title: ""
#   url: ""
`,wd=`# Gregorian event
# - id: ""
#   title: ""
#   calendar: "gregorian"
#   date: "2026-01-09"
#   start: "2026-01-09T19:00:00"
#   timezone: "America/New_York"
#   url: ""
#
# Diyanet Islamic calendar event
# - id: ""
#   title: ""
#   calendar: "diyanet"
#   hijriDay: 12
#   hijriMonth: "Rebiülevvel"
#   startTime: "19:00"
#   timezone: "America/New_York"
#   url: ""
`,z=Symbol(`NOT_RESOLVED`),Td=Symbol(`MERGE_KEY`);function Ed(e,t){return{tagName:e,nodeKind:`scalar`,implicit:t.implicit??!1,matchByTagPrefix:t.matchByTagPrefix??!1,implicitFirstChars:t.implicitFirstChars??null,resolve:t.resolve,identify:t.identify??null,represent:t.represent??(e=>String(e)),representTagName:t.representTagName??null}}function Dd(e,t){let n=t.finalize===void 0;return{tagName:e,nodeKind:`sequence`,implicit:!1,matchByTagPrefix:t.matchByTagPrefix??!1,create:t.create,addItem:t.addItem,finalize:t.finalize??(e=>e),carrierIsResult:n,identify:t.identify??null,represent:t.represent??(e=>e),representTagName:t.representTagName??null}}function Od(e,t){let n=t.finalize===void 0;return{tagName:e,nodeKind:`mapping`,implicit:!1,matchByTagPrefix:t.matchByTagPrefix??!1,create:t.create,addPair:t.addPair,has:t.has,keys:t.keys,get:t.get,finalize:t.finalize??(e=>e),carrierIsResult:n,identify:t.identify??null,represent:t.represent??(e=>e),representTagName:t.representTagName??null}}var kd=Ed(`tag:yaml.org,2002:str`,{resolve:e=>e,identify:e=>typeof e==`string`}),Ad=[``,`~`,`null`,`Null`,`NULL`],jd=Ed(`tag:yaml.org,2002:null`,{implicit:!0,implicitFirstChars:[``,`~`,`n`,`N`],resolve:e=>Ad.indexOf(e)===-1?z:null,identify:e=>e===null,represent:()=>`null`}),Md=Ed(`tag:yaml.org,2002:null`,{implicit:!0,implicitFirstChars:[`n`],resolve:(e,t)=>e===`null`||t&&e===``?null:z,identify:e=>e===null,represent:()=>`null`}),Nd=[``,`~`,`null`,`Null`,`NULL`],Pd=Ed(`tag:yaml.org,2002:null`,{implicit:!0,implicitFirstChars:[``,`~`,`n`,`N`],resolve:e=>Nd.indexOf(e)===-1?z:null,identify:e=>e===null,represent:()=>`null`}),Fd=[`true`,`True`,`TRUE`],Id=[`false`,`False`,`FALSE`],Ld=Ed(`tag:yaml.org,2002:bool`,{implicit:!0,implicitFirstChars:[`t`,`T`,`f`,`F`],resolve:e=>Fd.indexOf(e)!==-1||Id.indexOf(e)===-1&&z,identify:e=>Object.prototype.toString.call(e)===`[object Boolean]`,represent:e=>e?`true`:`false`}),Rd=[`true`],zd=[`false`],Bd=Ed(`tag:yaml.org,2002:bool`,{implicit:!0,implicitFirstChars:[`t`,`f`],resolve:e=>Rd.indexOf(e)!==-1||zd.indexOf(e)===-1&&z,identify:e=>Object.prototype.toString.call(e)===`[object Boolean]`,represent:e=>e?`true`:`false`}),Vd=[`true`,`True`,`TRUE`,`y`,`Y`,`yes`,`Yes`,`YES`,`on`,`On`,`ON`],Hd=[`false`,`False`,`FALSE`,`n`,`N`,`no`,`No`,`NO`,`off`,`Off`,`OFF`],Ud=Ed(`tag:yaml.org,2002:bool`,{implicit:!0,implicitFirstChars:[`y`,`Y`,`n`,`N`,`t`,`T`,`f`,`F`,`o`,`O`],resolve:e=>Vd.indexOf(e)!==-1||Hd.indexOf(e)===-1&&z,identify:e=>Object.prototype.toString.call(e)===`[object Boolean]`,represent:e=>e?`true`:`false`}),Wd=RegExp(`^(?:0o[0-7]+|0x[0-9a-fA-F]+|[-+]?[0-9]+)$`),Gd=RegExp(`^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$`);function Kd(e){let t=e,n=1;return(t[0]===`-`||t[0]===`+`)&&(t[0]===`-`&&(n=-1),t=t.slice(1)),t.startsWith(`0b`)?n*parseInt(t.slice(2),2):t.startsWith(`0o`)?n*parseInt(t.slice(2),8):t.startsWith(`0x`)?n*parseInt(t.slice(2),16):n*parseInt(t,10)}function qd(e,t){if(t){if(!Gd.test(e))return z}else if(!Wd.test(e))return z;let n=Kd(e);return Number.isFinite(n)?n:z}var Jd=Ed(`tag:yaml.org,2002:int`,{implicit:!0,implicitFirstChars:[`-`,`+`,...`0123456789`],resolve:qd,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf(`e`)<0,represent:e=>e.toString(10)}),Yd=RegExp(`^-?(?:0|[1-9][0-9]*)$`),Xd=RegExp(`^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$`);function Zd(e){let t=e,n=1;return(t[0]===`-`||t[0]===`+`)&&(t[0]===`-`&&(n=-1),t=t.slice(1)),t.startsWith(`0b`)?n*parseInt(t.slice(2),2):t.startsWith(`0o`)?n*parseInt(t.slice(2),8):t.startsWith(`0x`)?n*parseInt(t.slice(2),16):n*parseInt(t,10)}function Qd(e,t){if(t){if(!Xd.test(e))return z}else if(!Yd.test(e))return z;let n=Zd(e);return Number.isFinite(n)?n:z}var $d=Ed(`tag:yaml.org,2002:int`,{implicit:!0,implicitFirstChars:[`-`,...`0123456789`],resolve:Qd,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf(`e`)<0,represent:e=>e.toString(10)}),ef=RegExp(`^(?:[-+]?0b[0-1_]+|[-+]?0[0-7_]+|[-+]?0x[0-9a-fA-F_]+|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+|[-+]?(?:0|[1-9][0-9_]*))$`);function tf(e){let t=e.replace(/_/g,``),n=1;if((t[0]===`-`||t[0]===`+`)&&(t[0]===`-`&&(n=-1),t=t.slice(1)),t.startsWith(`0b`))return n*parseInt(t.slice(2),2);if(t.startsWith(`0x`))return n*parseInt(t.slice(2),16);if(t.includes(`:`)){let e=0;for(let n of t.split(`:`))e=e*60+Number(n);return n*e}return t!==`0`&&t[0]===`0`?n*parseInt(t,8):n*parseInt(t,10)}function nf(e){if(!ef.test(e))return z;let t=tf(e);return Number.isFinite(t)?t:z}var rf=Ed(`tag:yaml.org,2002:int`,{implicit:!0,implicitFirstChars:[`-`,`+`,...`0123456789`],resolve:nf,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf(`e`)<0,represent:e=>e.toString(10)}),af=RegExp(`^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$`),of=RegExp(`^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$`);function sf(e){if(!af.test(e))return z;let t=e.toLowerCase(),n=t[0]===`-`?-1:1;if(`+-`.includes(t[0])&&(t=t.slice(1)),t===`.inf`)return n===1?1/0:-1/0;if(t===`.nan`)return NaN;let r=n*parseFloat(t);return Number.isFinite(r)||of.test(e)?r:z}function cf(e){if(isNaN(e))return`.nan`;if(e===1/0)return`.inf`;if(e===-1/0)return`-.inf`;if(Object.is(e,-0))return`-0.0`;let t=e.toString(10);return/^[-+]?[0-9]+e/.test(t)?t.replace(`e`,`.e`):t}var lf=Ed(`tag:yaml.org,2002:float`,{implicit:!0,implicitFirstChars:[`-`,`+`,`.`,...`0123456789`],resolve:sf,identify:e=>typeof e==`number`&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf(`e`)>=0),represent:cf}),uf=RegExp(`^-?(?:0|[1-9][0-9]*)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$`),df=RegExp(`^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$`);function ff(e,t){if(t){if(!df.test(e))return z;let t=e.toLowerCase(),n=t[0]===`-`?-1:1;if(`+-`.includes(t[0])&&(t=t.slice(1)),t===`.inf`)return n===1?1/0:-1/0;if(t===`.nan`)return NaN;let r=n*parseFloat(t);return Number.isFinite(r)?r:z}if(!uf.test(e))return z;let n=Number(e);return Number.isFinite(n)?n:z}function pf(e){if(isNaN(e))return`.nan`;if(e===1/0)return`.inf`;if(e===-1/0)return`-.inf`;if(Object.is(e,-0))return`-0.0`;let t=e.toString(10);return/^[-+]?[0-9]+e/.test(t)?t.replace(`e`,`.e`):t}var mf=Ed(`tag:yaml.org,2002:float`,{implicit:!0,implicitFirstChars:[`-`,...`0123456789`],resolve:ff,identify:e=>typeof e==`number`&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf(`e`)>=0),represent:pf}),hf=RegExp(`^(?:[-+]?(?:(?:[0-9][0-9_]*)?\\.[0-9_]*)(?:[eE][-+][0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$`),gf=RegExp(`^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$`);function _f(e){if(!hf.test(e))return z;let t=e.toLowerCase().replace(/_/g,``),n=t[0]===`-`?-1:1;if(`+-`.includes(t[0])&&(t=t.slice(1)),t===`.inf`)return n===1?1/0:-1/0;if(t===`.nan`)return NaN;let r=0;if(t.includes(`:`)){for(let e of t.split(`:`))r=r*60+Number(e);r*=n}else r=n*parseFloat(t);return Number.isFinite(r)||gf.test(e)?r:z}function vf(e){if(isNaN(e))return`.nan`;if(e===1/0)return`.inf`;if(e===-1/0)return`-.inf`;if(Object.is(e,-0))return`-0.0`;let t=e.toString(10);return/^[-+]?[0-9]+e/.test(t)?t.replace(`e`,`.e`):t}var yf=Ed(`tag:yaml.org,2002:float`,{implicit:!0,implicitFirstChars:[`-`,`+`,`.`,...`0123456789`],resolve:_f,identify:e=>typeof e==`number`&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf(`e`)>=0),represent:vf}),bf=Ed(`tag:yaml.org,2002:merge`,{implicit:!0,implicitFirstChars:[`<`],resolve:(e,t)=>e===`<<`||t&&e===``?Td:z}),xf=/^[A-Za-z0-9+/]*={0,2}$/;function Sf(e){let t=e.replace(/\s/g,``);if(t.length%4!=0||!xf.test(t))return z;let n=atob(t),r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return r}function Cf(e){let t=``;for(let n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return btoa(t)}var wf=Ed(`tag:yaml.org,2002:binary`,{resolve:Sf,identify:e=>Object.prototype.toString.call(e)===`[object Uint8Array]`,represent:Cf}),Tf=RegExp(`^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$`),Ef=RegExp(`^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$`);function Df(e){let t=Tf.exec(e);if(t===null&&(t=Ef.exec(e)),t===null)return z;let n=+t[1],r=t[2]-1,i=+t[3];if(!t[4]){let e=new Date(Date.UTC(n,r,i));return e.getUTCFullYear()!==n||e.getUTCMonth()!==r||e.getUTCDate()!==i?z:e}let a=+t[4],o=+t[5],s=+t[6],c=0;if(a>23||o>59||s>59)return z;if(t[7]){let e=t[7].slice(0,3);for(;e.length<3;)e+=`0`;c=+e}let l=new Date(Date.UTC(n,r,i,a,o,s,c));if(l.getUTCFullYear()!==n||l.getUTCMonth()!==r||l.getUTCDate()!==i)return z;if(t[9]){let e=+t[10],n=+(t[11]||0);if(e>23||n>59)return z;let r=(e*60+n)*6e4;l.setTime(l.getTime()-(t[9]===`-`?-r:r))}return l}var Of=Ed(`tag:yaml.org,2002:timestamp`,{implicit:!0,implicitFirstChars:[...`0123456789`],resolve:Df,identify:e=>e instanceof Date,represent:e=>e.toISOString()}),kf=Dd(`tag:yaml.org,2002:seq`,{create:()=>[],addItem:(e,t)=>{e.push(t)},identify:Array.isArray});function Af(e){if(typeof e!=`object`||!e||Array.isArray(e))return!1;let t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}function jf(e,t){let n={};for(let r of t)e[r]!==void 0&&(n[r]=e[r]);return n}var Mf=Dd(`tag:yaml.org,2002:omap`,{create:()=>({list:[],seen:new Set}),addItem:(e,t)=>{let n;if(t instanceof Map){if(t.size!==1)return`cannot resolve an ordered map item`;n=t.keys().next().value}else if(Af(t)){let e=Object.keys(t);if(e.length!==1)return`cannot resolve an ordered map item`;n=e[0]}else return`cannot resolve an ordered map item`;return e.seen.has(n)?`duplicate key in ordered map`:(e.seen.add(n),e.list.push(t),``)},finalize:e=>e.list}),Nf=Dd(`tag:yaml.org,2002:pairs`,{create:()=>[],addItem:(e,t)=>{if(t instanceof Map)return t.size===1?(e.push(t.entries().next().value),``):`cannot resolve a pairs item`;if(Object.prototype.toString.call(t)!==`[object Object]`)return`cannot resolve a pairs item`;let n=t,r=Object.keys(n);return r.length===1?(e.push([r[0],n[r[0]]]),``):`cannot resolve a pairs item`}}),Pf=Od(`tag:yaml.org,2002:map`,{create:()=>({}),identify:Af,represent:e=>{let t=new Map;for(let n of Object.keys(e))t.set(n,e[n]);return t},addPair:(e,t,n)=>{if(typeof t==`object`&&t)return`object-based map does not support complex keys`;let r=String(t);return r===`__proto__`?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,``},has:(e,t)=>typeof t==`object`&&t?!1:Object.prototype.hasOwnProperty.call(e,String(t)),keys:e=>Object.keys(e),get:(e,t)=>e[String(t)]}),Ff=Od(`tag:yaml.org,2002:set`,{create:()=>new Set,identify:e=>e instanceof Set,represent:e=>{let t=new Map;for(let n of e)t.set(n,null);return t},addPair:(e,t,n)=>n===null?(e.add(t),``):`cannot resolve a set item`,has:(e,t)=>e.has(t),keys:e=>e.keys(),get:()=>null});function If(){return{scalar:{},sequence:{},mapping:{}}}function Lf(){return{scalar:[],sequence:[],mapping:[]}}function Rf(e){let t=[];for(let n of e){let e=t.length;for(let r=0;r<t.length;r++){let i=t[r];if(i.nodeKind===n.nodeKind&&i.tagName===n.tagName&&i.matchByTagPrefix===n.matchByTagPrefix){e=r;break}}t[e]=n}return t}var zf=class e{tags;implicitScalarTags;implicitScalarByFirstChar;implicitScalarAnyFirstChar;defaultScalarTag;defaultSequenceTag;defaultMappingTag;exact;prefix;constructor(e){let t=Rf(e),n=[],r=If(),i=Lf();for(let e of t){if(e.nodeKind===`scalar`&&e.implicit){if(e.matchByTagPrefix)throw Error(`Implicit scalar tags cannot match by tag prefix`);n.push(e)}switch(e.nodeKind){case`scalar`:e.matchByTagPrefix?i.scalar.push(e):r.scalar[e.tagName]=e;break;case`sequence`:e.matchByTagPrefix?i.sequence.push(e):r.sequence[e.tagName]=e;break;case`mapping`:e.matchByTagPrefix?i.mapping.push(e):r.mapping[e.tagName]=e;break}}let a=n.filter(e=>e.implicitFirstChars===null),o=new Set;for(let e of n)if(e.implicitFirstChars!==null)for(let t of e.implicitFirstChars)o.add(t);let s=new Map;for(let e of o)s.set(e,n.filter(t=>t.implicitFirstChars===null||t.implicitFirstChars.indexOf(e)!==-1));let c=r.scalar[`tag:yaml.org,2002:str`];if(!c)throw Error(`schema does not define the default scalar tag (tag:yaml.org,2002:str)`);this.tags=t,this.implicitScalarTags=n,this.implicitScalarByFirstChar=s,this.implicitScalarAnyFirstChar=a,this.defaultScalarTag=c,this.defaultSequenceTag=r.sequence[`tag:yaml.org,2002:seq`],this.defaultMappingTag=r.mapping[`tag:yaml.org,2002:map`],this.exact=r,this.prefix=i}withTags(...t){let n=[];for(let e of t)n=n.concat(e);return new e([...this.tags,...n])}},Bf=new zf([kd,kf,Pf]);new zf([...Bf.tags,Md,Bd,$d,mf]);var Vf=new zf([...Bf.tags,jd,Ld,Jd,lf]),Hf=new zf([...Bf.tags,Pd,Ud,rf,yf,Of,bf,wf,Mf,Nf,Ff]);Od(`tag:yaml.org,2002:map`,{create:()=>new Map,addPair:(e,t,n)=>(e.set(t,n),``),has:(e,t)=>e.has(t),keys:e=>e.keys(),get:(e,t)=>e.get(t),identify:e=>e instanceof Map||Af(e),represent:e=>{if(e instanceof Map)return e;let t=new Map,n=e;for(let e of Object.keys(n))t.set(e,n[e]);return t}});function Uf(e){if(Array.isArray(e)){let t=Array.prototype.slice.call(e);for(let e=0;e<t.length;e++){if(Array.isArray(t[e]))return null;typeof t[e]==`object`&&Object.prototype.toString.call(t[e])===`[object Object]`&&(t[e]=`[object Object]`)}return String(t)}return typeof e==`object`&&Object.prototype.toString.call(e)===`[object Object]`?`[object Object]`:String(e)}Od(`tag:yaml.org,2002:map`,{create:()=>({}),identify:Af,represent:e=>{let t=new Map;for(let n of Object.keys(e))t.set(n,e[n]);return t},addPair:(e,t,n)=>{let r=Uf(t);return r===null?`nested arrays are not supported inside keys`:(r===`__proto__`?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,``)},has:(e,t)=>{let n=Uf(t);return n!==null&&Object.prototype.hasOwnProperty.call(e,n)},keys:e=>Object.keys(e),get:(e,t)=>e[String(t)]});var Wf={maxLength:79,indent:1,linesBefore:3,linesAfter:2};function Gf(e,t,n,r,i){let a=``,o=``,s=Math.floor(i/2)-1;return r-t>s&&(a=` ... `,t=r-s+a.length),n-r>s&&(o=` ...`,n=r+s-o.length),{str:a+e.slice(t,n).replace(/\t/g,`→`)+o,pos:r-t+a.length}}function Kf(e,t){return` `.repeat(Math.max(t-e.length,0))+e}function qf(e,t){if(!e.buffer)return null;let n={...Wf,...t},r=/\r?\n|\r|\0/g,i=[0],a=[],o,s=-1;for(;o=r.exec(e.buffer);)a.push(o.index),i.push(o.index+o[0].length),e.position<=o.index&&s<0&&(s=i.length-2);s<0&&(s=i.length-1);let c=``,l=Math.min(e.line+n.linesAfter,a.length).toString().length,u=n.maxLength-(n.indent+l+3);for(let t=1;t<=n.linesBefore&&!(s-t<0);t++){let r=Gf(e.buffer,i[s-t],a[s-t],e.position-(i[s]-i[s-t]),u);c=`${` `.repeat(n.indent)}${Kf((e.line-t+1).toString(),l)} | ${r.str}\n${c}`}let d=Gf(e.buffer,i[s],a[s],e.position,u);c+=`${` `.repeat(n.indent)}${Kf((e.line+1).toString(),l)} | ${d.str}\n`,c+=`${`-`.repeat(n.indent+l+3+d.pos)}^\n`;for(let t=1;t<=n.linesAfter&&!(s+t>=a.length);t++){let r=Gf(e.buffer,i[s+t],a[s+t],e.position-(i[s]-i[s+t]),u);c+=`${` `.repeat(n.indent)}${Kf((e.line+t+1).toString(),l)} | ${r.str}\n`}return c.replace(/\n$/,``)}function Jf(e,t){let n=``;return e.mark?(e.mark.name&&(n+=`in "${e.mark.name}" `),n+=`(${e.mark.line+1}:${e.mark.column+1})`,!t&&e.mark.snippet&&(n+=`\n\n${e.mark.snippet}`),`${e.reason} ${n}`):e.reason}var Yf=class extends Error{reason;mark;constructor(e,t){super(),this.name=`YAMLException`,this.reason=e,this.mark=t,this.message=Jf(this,!1),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}toString(e){return`${this.name}: ${Jf(this,e)}`}};function Xf(e,t,n,r=``){let i=0,a=0;for(let n=0;n<t;n++){let t=e.charCodeAt(n);t===10?(i++,a=n+1):t===13&&(i++,e.charCodeAt(n+1)===10&&n++,a=n+1)}let o={name:r,buffer:e,position:t,line:i,column:t-a};throw o.snippet=qf(o),new Yf(n,o)}var Zf=-1;function Qf(e){switch(e){case 48:return`\0`;case 97:return`\x07`;case 98:return`\b`;case 116:return`	`;case 9:return`	`;case 110:return`
`;case 118:return`\v`;case 102:return`\f`;case 114:return`\r`;case 101:return`\x1B`;case 32:return` `;case 34:return`"`;case 47:return`/`;case 92:return`\\`;case 78:return``;case 95:return`\xA0`;case 76:return`\u2028`;case 80:return`\u2029`;default:return``}}var $f=Array(256),ep=Array(256);for(let e=0;e<256;e++)$f[e]=+!!Qf(e),ep[e]=Qf(e);function tp(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}function np(e){return e>=48&&e<=57?e-48:(e|32)-97+10}function rp(e){return e===120?2:e===117?4:8}function ip(e,t,n){let r=0;for(;t<n;){let n=e.charCodeAt(t);if(n===10)r++,t++;else if(n===13)r++,t++,e.charCodeAt(t)===10&&t++;else if(n===32||n===9)t++;else break}return{position:t,breaks:r}}function ap(e){return e===1?` `:`
`.repeat(e-1)}function op(e,t,n){let r=``,i=t,a=t,o=t;for(;i<n;){let t=e.charCodeAt(i);if(t===10||t===13){r+=e.slice(a,o);let t=ip(e,i,n);r+=ap(t.breaks),i=a=o=t.position}else i++,t!==32&&t!==9&&(o=i)}return r+e.slice(a,o)}function sp(e,t,n){let r=``,i=t,a=t,o=t;for(;i<n;){let t=e.charCodeAt(i);if(t===39)r+=e.slice(a,i)+`'`,i+=2,a=o=i;else if(t===10||t===13){r+=e.slice(a,o);let t=ip(e,i,n);r+=ap(t.breaks),i=a=o=t.position}else i++,t!==32&&t!==9&&(o=i)}return r+e.slice(a,n)}function cp(e,t,n){let r=``,i=t,a=t,o=t;for(;i<n;){let t=e.charCodeAt(i);if(t===92){r+=e.slice(a,i),i++;let t=e.charCodeAt(i);if(t===10||t===13)i=ip(e,i,n).position;else if(t<256&&$f[t])r+=ep[t],i++;else{let n=rp(t),a=0;for(;n>0;n--){i++;let t=np(e.charCodeAt(i));a=(a<<4)+t}r+=tp(a),i++}a=o=i}else if(t===10||t===13){r+=e.slice(a,o);let t=ip(e,i,n);r+=ap(t.breaks),i=a=o=t.position}else i++,t!==32&&t!==9&&(o=i)}return r+e.slice(a,n)}function lp(e,t,n,r,i,a){let o=r<0?0:r,s=e.slice(t,n).replace(/\r\n?/g,`
`),c=s===``?[]:(s.endsWith(`
`)?s.slice(0,-1):s).split(`
`),l=``,u=!1,d=0,f=!1;for(let e of c){let t=0;for(;t<o&&e.charCodeAt(t)===32;)t++;if(r<0||t>=e.length){d++;continue}let n=e.slice(o),i=n.charCodeAt(0);a?i===32||i===9?(f=!0,l+=`
`.repeat(u?1+d:d)):f?(f=!1,l+=`
`.repeat(d+1)):d===0?u&&(l+=` `):l+=`
`.repeat(d):l+=`
`.repeat(u?1+d:d),l+=n,u=!0,d=0}return i===3?l+=`
`.repeat(u?1+d:d):i!==2&&u&&(l+=`
`),l}function up(e,t){if(t.valueStart===Zf)return``;let{valueStart:n,valueEnd:r}=t;if(t.fast)return e.slice(n,r);switch(t.style){case 2:return sp(e,n,r);case 3:return cp(e,n,r);case 4:return lp(e,n,r,t.indent,t.chomping,!1);case 5:return lp(e,n,r,t.indent,t.chomping,!0);default:return op(e,n,r)}}var dp={"!":`!`,"!!":`tag:yaml.org,2002:`};function fp(e,t){if(e.startsWith(`!<`)&&e.endsWith(`>`))return decodeURIComponent(e.slice(2,-1));let n=e.indexOf(`!`,1),r=n===-1?`!`:e.slice(0,n+1),i=t?.[r]??dp[r]??r;return decodeURIComponent(i)+decodeURIComponent(e.slice(r.length))}var pp=-1,mp={filename:``,schema:Vf,json:!1,maxTotalMergeKeys:1e4,maxAliases:-1};function hp(e){return`tagStart`in e&&e.tagStart!==pp?e.tagStart:`anchorStart`in e&&e.anchorStart!==pp?e.anchorStart:`valueStart`in e&&e.valueStart!==pp?e.valueStart:`start`in e?e.start:0}function gp(e,t){Xf(e.source,e.position,t,e.filename)}function _p(e,t,n,r){try{return n.finalize(r)}catch(n){if(n instanceof Yf)throw n;Xf(e.source,t,n instanceof Error?n.message:String(n),e.filename)}}function vp(e,t,n){let r=e[n];if(r)return r;for(let e of t)if(n.startsWith(e.tagName))return e}function yp(e,t,n,r,i){let a=vp(t,n,r);if(a)return a;gp(e,`unknown ${i} tag !<${r}>`)}function bp(e,t){let n=up(e.source,t),r=t.tagStart===pp?``:e.source.slice(t.tagStart,t.tagEnd),i=e.schema.defaultScalarTag;if(r!==``){if(r===`!`)return{value:n,tag:i};let t=fp(r,e.tagHandlers),a=vp(e.schema.exact.scalar,e.schema.prefix.scalar,t);if(a){let r=a.resolve(n,!0,t);return r===z&&gp(e,`cannot resolve a node with !<${t}> explicit tag`),{value:r,tag:a}}let o=vp(e.schema.exact.mapping,e.schema.prefix.mapping,t)??vp(e.schema.exact.sequence,e.schema.prefix.sequence,t);if(o){n!==``&&gp(e,`cannot resolve a node with !<${t}> explicit tag`);let r=o.create(t);return{value:o.carrierIsResult?r:_p(e,e.position,o,r),tag:o}}gp(e,`unknown scalar tag !<${t}>`)}if(t.style===1){let t=e.schema.implicitScalarByFirstChar.get(n.charAt(0))??e.schema.implicitScalarAnyFirstChar;for(let e of t){let t=e.resolve(n,!1,e.tagName);if(t!==z)return{value:t,tag:e}}}return{value:i.resolve(n,!1,i.tagName),tag:i}}function xp(e,t,n,r,i,a){let o=t.tagStart===pp?``:e.source.slice(t.tagStart,t.tagEnd),s=o===``||o===`!`?i:fp(o,e.tagHandlers);return{tagName:s,tag:yp(e,n,r,s,a)}}function Sp(e){return e.nodeKind===`mapping`}function Cp(e,t,n,r){for(let i of r.keys(n)){if(e.maxTotalMergeKeys!==-1&&++e.totalMergeKeys>e.maxTotalMergeKeys&&gp(e,`merge keys exceeded maxTotalMergeKeys (${e.maxTotalMergeKeys})`),t.tag.has(t.value,i))continue;let a=t.tag.addPair(t.value,i,r.get(n,i));a&&gp(e,a),(t.overridable??=new Set).add(i)}}function wp(e,t,n,r){if(e.position=t.keyPosition,Sp(r))Cp(e,t,n,r);else if(r.nodeKind===`sequence`&&Array.isArray(n))for(let r of n)Cp(e,t,r,t.tag);else gp(e,`cannot merge mappings; the provided source object is unacceptable`)}function Tp(e,t,n,r,i){if(e.position=t.keyPosition,n===Td){wp(e,t,r,i);return}!e.json&&t.tag.has(t.value,n)&&!t.overridable?.has(n)&&gp(e,`duplicated mapping key`);let a=t.tag.addPair(t.value,n,r);a&&gp(e,a),t.overridable?.delete(n)}function Ep(e,t,n){let r=e.frames[e.frames.length-1];if(r.kind===`document`)r.value=t,r.hasValue=!0;else if(r.kind===`sequence`){r.merge&&(Sp(n)||gp(e,`cannot merge mappings; the provided source object is unacceptable`));let i=r.tag.addItem(r.value,t,r.index++);i&&gp(e,i)}else if(r.hasKey){let i=r.key;r.key=void 0,r.hasKey=!1,Tp(e,r,i,t,n)}else r.key=t,r.keyPosition=e.position,r.hasKey=!0}function Dp(e,t,n,r,i){if(t.anchorStart!==pp){let a={value:n,tag:r,isValueFinal:i};return e.anchors.set(e.source.slice(t.anchorStart,t.anchorEnd),a),a}return null}function Op(e,t){let n={...mp,...t,events:e,documents:[],eventIndex:0,position:0,frames:[],anchors:new Map,tagHandlers:Object.create(null),totalMergeKeys:0,aliasCount:0};for(;n.eventIndex<n.events.length;){let e=n.events[n.eventIndex++];switch(n.position=hp(e),e.type){case 1:n.anchors=new Map,n.aliasCount=0,n.tagHandlers=Object.create(null);for(let t of e.directives)t.kind===`tag`&&(n.tagHandlers[t.handle]=t.prefix);n.frames.push({kind:`document`,position:n.position,value:void 0,hasValue:!1});break;case 4:{let{value:t,tag:r}=bp(n,e);Dp(n,e,t,r,!0),Ep(n,t,r);break}case 2:{let t=xp(n,e,n.schema.exact.sequence,n.schema.prefix.sequence,`tag:yaml.org,2002:seq`,`sequence`),r=t.tag.create(t.tagName),i=Dp(n,e,r,t.tag,t.tag.carrierIsResult),a=n.frames[n.frames.length-1],o=a!==void 0&&a.kind===`mapping`&&a.hasKey&&a.key===Td;n.frames.push({kind:`sequence`,position:n.position,value:r,tag:t.tag,anchor:i,index:0,merge:o});break}case 3:{let t=xp(n,e,n.schema.exact.mapping,n.schema.prefix.mapping,`tag:yaml.org,2002:map`,`mapping`),r=t.tag.create(t.tagName),i=Dp(n,e,r,t.tag,t.tag.carrierIsResult);n.frames.push({kind:`mapping`,position:n.position,value:r,tag:t.tag,anchor:i,key:void 0,keyPosition:n.position,hasKey:!1,overridable:null});break}case 5:{n.maxAliases!==-1&&++n.aliasCount>n.maxAliases&&gp(n,`aliases exceeded maxAliases (${n.maxAliases})`);let t=n.source.slice(e.anchorStart,e.anchorEnd),r=n.anchors.get(t);r||gp(n,`unidentified alias "${t}"`),r.isValueFinal||gp(n,`recursive alias "${t}" is not supported for tag ${r.tag.tagName} because it uses finalize()`),Ep(n,r.value,r.tag);break}case 6:{let e=n.frames.pop();if(e.kind===`document`)n.documents.push(e.value);else{let t=e.tag.carrierIsResult?e.value:_p(n,e.position,e.tag,e.value);e.anchor&&(e.anchor.value=t,e.anchor.isValueFinal=!0),Ep(n,t,e.tag)}break}}}return n.documents}var B=-1,kp=Object.prototype.hasOwnProperty,Ap=1,jp=2,Mp=3,Np=4,Pp=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Fp=/[,\[\]{}]/,Ip=/^(?:!|!!|![0-9A-Za-z-]+!)$/,Lp=String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$,_.!~*'()\[\]])`,Rp=String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$.~*'()_])`,zp=RegExp(`^(?:${Lp})*$`),Bp=RegExp(`^(?:${Rp})+$`),Vp=RegExp(`^(?:!(?:${Lp})*|${Rp}(?:${Lp})*)$`),Hp={filename:``,maxDepth:100};function Up(e,t,n){e.events.push({type:1,explicitStart:t,explicitEnd:n,directives:e.directives})}function Wp(e,t,n,r,i,a,o){e.events.push({type:2,start:t,anchorStart:n,anchorEnd:r,tagStart:i,tagEnd:a,style:o})}function Gp(e,t,n,r,i,a,o){e.events.push({type:3,start:t,anchorStart:n,anchorEnd:r,tagStart:i,tagEnd:a,style:o})}function Kp(e,t,n,r,i,a,o,s,c=1,l=-1,u=!1){e.events.push({type:4,valueStart:t,valueEnd:n,anchorStart:r,anchorEnd:i,tagStart:a,tagEnd:o,style:s,chomping:c,indent:l,fast:u})}function qp(e,t,n){e.events.push({type:5,anchorStart:t,anchorEnd:n})}function Jp(e){e.events.push({type:6})}function Yp(e){Kp(e,B,B,B,B,B,B,1)}function Xp(){return{anchorStart:B,anchorEnd:B,tagStart:B,tagEnd:B}}function Zp(e){return{position:e.position,line:e.line,lineStart:e.lineStart,lineIndent:e.lineIndent,firstTabInLine:e.firstTabInLine,eventsLength:e.events.length}}function Qp(e,t){e.position=t.position,e.line=t.line,e.lineStart=t.lineStart,e.lineIndent=t.lineIndent,e.firstTabInLine=t.firstTabInLine,e.events.length=t.eventsLength}function V(e,t){Xf(e.input.slice(0,e.length),e.position,t,e.filename)}function H(e){return e===10||e===13}function $p(e){return e===9||e===32}function em(e){return $p(e)||H(e)}function tm(e){return e===0||em(e)}function nm(e){return e===44||e===91||e===93||e===123||e===125}function rm(e){return e>=48&&e<=57?e-48:-1}function im(e){if(e>=48&&e<=57)return e-48;let t=e|32;return t>=97&&t<=102?t-97+10:-1}function am(e){return e===120?2:e===117?4:e===85?8:0}function om(e){return e===48||e===97||e===98||e===116||e===9||e===110||e===118||e===102||e===114||e===101||e===32||e===34||e===47||e===92||e===78||e===95||e===76||e===80}function sm(e){e.input.charCodeAt(e.position)===10?e.position++:(e.position++,e.input.charCodeAt(e.position)===10&&e.position++),e.line++,e.lineStart=e.position,e.lineIndent=0,e.firstTabInLine=-1}function cm(e,t){let n=0,r=e.input.charCodeAt(e.position),i=e.position===e.lineStart||em(e.input.charCodeAt(e.position-1));for(;r!==0;){for(;$p(r);)i=!0,r===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),r=e.input.charCodeAt(++e.position);if(t&&i&&r===35)do r=e.input.charCodeAt(++e.position);while(!H(r)&&r!==0);if(!H(r))break;for(sm(e),n++,i=!0,r=e.input.charCodeAt(e.position);r===32;)e.lineIndent++,r=e.input.charCodeAt(++e.position)}return n}function lm(e,t=e.position){let n=e.input.charCodeAt(t);if((n===45||n===46)&&n===e.input.charCodeAt(t+1)&&n===e.input.charCodeAt(t+2)){let n=e.input.charCodeAt(t+3);return n===0||em(n)}return!1}function um(e){let t=e.input.charCodeAt(e.position);for(;t!==0&&!H(t);)t=e.input.charCodeAt(++e.position)}function dm(e,t,n){Pp.test(e.input.slice(t,n))&&V(e,`the stream contains non-printable characters`)}function fm(e,t,n){if(e.input.charCodeAt(e.position)!==33)return!1;t.tagStart!==B&&V(e,`duplication of a tag property`);let r=e.position,i=!1,a=!1,o=`!`,s=e.input.charCodeAt(++e.position);s===60?(i=!0,s=e.input.charCodeAt(++e.position)):s===33&&(a=!0,o=`!!`,s=e.input.charCodeAt(++e.position));let c=e.position,l;if(i){for(;s!==0&&s!==62;)s=e.input.charCodeAt(++e.position);s!==62&&V(e,`unexpected end of the stream within a verbatim tag`),l=e.input.slice(c,e.position),e.position++}else{for(;s!==0&&!em(s)&&!(n&&nm(s));)s===33&&(a?V(e,`tag suffix cannot contain exclamation marks`):(o=e.input.slice(c-1,e.position+1),Ip.test(o)||V(e,`named tag handle cannot contain such characters`),a=!0,c=e.position+1)),s=e.input.charCodeAt(++e.position);l=e.input.slice(c,e.position),Fp.test(l)&&V(e,`tag suffix cannot contain flow indicator characters`)}return l&&!(i?zp.test(l):Bp.test(l))&&V(e,`tag name cannot contain such characters: ${l}`),!i&&o!==`!`&&o!==`!!`&&!kp.call(e.tagHandlers,o)&&V(e,`undeclared tag handle "${o}"`),t.tagStart=r,t.tagEnd=e.position,!0}function pm(e,t){if(e.input.charCodeAt(e.position)!==38)return!1;t.anchorStart!==B&&V(e,`duplication of an anchor property`),e.position++;let n=e.position;for(;e.input.charCodeAt(e.position)!==0&&!em(e.input.charCodeAt(e.position))&&!nm(e.input.charCodeAt(e.position));)e.position++;return e.position===n&&V(e,`name of an anchor node must contain at least one character`),t.anchorStart=n,t.anchorEnd=e.position,!0}function mm(e,t){if(e.input.charCodeAt(e.position)!==42)return!1;(t.anchorStart!==B||t.tagStart!==B)&&V(e,`alias node should not have any properties`),e.position++;let n=e.position;for(;e.input.charCodeAt(e.position)!==0&&!em(e.input.charCodeAt(e.position))&&!nm(e.input.charCodeAt(e.position));)e.position++;return e.position===n&&V(e,`name of an alias node must contain at least one character`),qp(e,n,e.position),!0}function hm(e,t){cm(e,!1),e.lineIndent<t&&V(e,`deficient indentation`)}function gm(e,t,n){if(e.input.charCodeAt(e.position)!==39)return!1;e.position++;let r=e.position,i=!0;for(;e.input.charCodeAt(e.position)!==0;){let a=e.input.charCodeAt(e.position);if(a===39){if(e.input.charCodeAt(e.position+1)===39){i=!1,e.position+=2;continue}let t=e.position;return e.position++,Kp(e,r,t,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,2,1,-1,i),!0}H(a)?(i=!1,hm(e,t)):e.position===e.lineStart&&lm(e)?V(e,`unexpected end of the document within a single quoted scalar`):a!==9&&a<32?V(e,`expected valid JSON character`):e.position++}V(e,`unexpected end of the stream within a single quoted scalar`)}function _m(e,t,n){if(e.input.charCodeAt(e.position)!==34)return!1;e.position++;let r=e.position,i=!0;for(;e.input.charCodeAt(e.position)!==0;){let a=e.input.charCodeAt(e.position);if(a===34){let t=e.position;return e.position++,Kp(e,r,t,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,3,1,-1,i),!0}if(a===92){i=!1;let n=e.input.charCodeAt(++e.position);if(H(n))hm(e,t);else if(om(n))e.position++;else{let t=am(n);for(t===0&&V(e,`unknown escape sequence`);t-->0;)e.position++,im(e.input.charCodeAt(e.position))<0&&V(e,`expected hexadecimal character`);e.position++}}else H(a)?(i=!1,hm(e,t)):e.position===e.lineStart&&lm(e)?V(e,`unexpected end of the document within a double quoted scalar`):a!==9&&a<32?V(e,`expected valid JSON character`):e.position++}V(e,`unexpected end of the stream within a double quoted scalar`)}function vm(e,t,n){let r=e.input.charCodeAt(e.position),i=1,a=-1,o=!1;if(r!==124&&r!==62)return!1;let s=r===124?4:5;for(e.position++;e.input.charCodeAt(e.position)!==0;){let n=e.input.charCodeAt(e.position),r=rm(n);if(n===43||n===45)i!==1&&V(e,`repeat of a chomping mode identifier`),i=n===43?3:2,e.position++;else if(r>=0)r===0&&V(e,`bad explicit indentation width of a block scalar; it cannot be less than one`),o&&V(e,`repeat of an indentation width identifier`),a=t+r-1,o=!0,e.position++;else break}let c=!1;for(;$p(e.input.charCodeAt(e.position));)c=!0,e.position++;c&&e.input.charCodeAt(e.position)===35&&um(e),H(e.input.charCodeAt(e.position))?sm(e):e.input.charCodeAt(e.position)!==0&&V(e,`a line break is expected`);let l=o?a:-1,u=0,d=e.position,f=e.position;for(;e.input.charCodeAt(e.position)!==0;){let n=e.position,r=0;for(;e.input.charCodeAt(n+r)===32;)r++;let i=e.input.charCodeAt(n+r);if(i===0){l>=0?r>l&&(f=n+r):r>0&&(f=n+r);break}if(n===e.lineStart&&lm(e,n))break;if(!o&&l===-1&&H(i)&&(u=Math.max(u,r)),!o&&l===-1&&!H(i)&&(i===9&&r<t&&(e.position=n+r,V(e,`tab characters must not be used in indentation`)),r<u&&(e.position=n+r,V(e,`bad indentation of a mapping entry`))),l===-1&&i!==0&&!H(i)&&r<t){e.lineIndent=r,e.position=n+r;break}!o&&i!==0&&!H(i)&&l===-1&&(l=r);let a=l===-1?t+1:l;if(i!==0&&!H(i)&&r<a){e.lineIndent=r,e.position=n+r;break}um(e),f=e.position,H(e.input.charCodeAt(e.position))&&(sm(e),f=e.position)}return dm(e,d,f),Kp(e,d,f,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,s,i,l),!0}function ym(e,t){let n=e.input.charCodeAt(e.position),r=t===Ap;if(n===0||em(n)||n===35||n===38||n===42||n===33||n===124||n===62||n===39||n===34||n===37||n===64||n===96||r&&nm(n))return!1;if(n===63||n===45){let t=e.input.charCodeAt(e.position+1);if(tm(t)||r&&nm(t))return!1}return!0}function bm(e,t,n,r){if(!ym(e,n))return!1;let i=e.position,a=e.position,o=e.input.charCodeAt(e.position),s=n===Ap,c=!1;for(;o!==0&&!(e.position===e.lineStart&&lm(e));){if(o===58){let t=e.input.charCodeAt(e.position+1);if(tm(t)||s&&nm(t))break}else if(o===35){if(em(e.input.charCodeAt(e.position-1)))break}else if(s&&nm(o))break;else if(H(o)){let n=e.position,r=e.line,i=e.lineStart,a=e.lineIndent;if(cm(e,!1),e.lineIndent>=t){c=!0,o=e.input.charCodeAt(e.position);continue}e.position=n,e.line=r,e.lineStart=i,e.lineIndent=a;break}$p(o)||(a=e.position+1),o=e.input.charCodeAt(++e.position)}return a===i?!1:(dm(e,i,a),Kp(e,i,a,r.anchorStart,r.anchorEnd,r.tagStart,r.tagEnd,1,1,-1,!c),!0)}function xm(e,t){let n=e.line;cm(e,!0),(e.line>n&&e.lineIndent<t||e.firstTabInLine!==-1&&e.lineIndent<t)&&V(e,`deficient indentation`)}function Sm(e,t,n){let r=e.input.charCodeAt(e.position),i=r===123,a=e.position,o=!0;if(r!==91&&r!==123)return!1;let s=i?125:93;for(i?Gp(e,a,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,2):Wp(e,a,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,2),e.position++;e.input.charCodeAt(e.position)!==0;){xm(e,t);let n=e.input.charCodeAt(e.position);if(n===s)return e.position++,Jp(e),!0;o?n===44&&V(e,`expected the node content, but found ','`):V(e,`missed comma between flow collection entries`);let r=!1,a=!1;n===63&&em(e.input.charCodeAt(e.position+1))&&(r=a=!0,e.position+=1,xm(e,t));let c=e.line,l=Zp(e),u=Tm(e,t,Ap,!1,!0);xm(e,t),n=e.input.charCodeAt(e.position),(i||a||e.line===c)&&n===58?(r=!0,e.position++,xm(e,t),i?u||Yp(e):(Qp(e,l),Gp(e,l.position,B,B,B,B,2),Tm(e,t,Ap,!1,!0)||Yp(e),xm(e,t),e.position++,xm(e,t)),Tm(e,t,Ap,!1,!0)||Yp(e),xm(e,t),i||Jp(e)):i&&r?(u||Yp(e),Yp(e)):i?Yp(e):r&&(Qp(e,l),Gp(e,l.position,B,B,B,B,2),Tm(e,t,Ap,!1,!0),Yp(e),Jp(e)),n=e.input.charCodeAt(e.position),n===44?(o=!0,e.position++):o=!1}V(e,`unexpected end of the stream within a flow collection`)}function Cm(e,t,n){if(e.firstTabInLine!==-1||e.input.charCodeAt(e.position)!==45||!tm(e.input.charCodeAt(e.position+1)))return!1;for(Wp(e,e.position,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,1);e.input.charCodeAt(e.position)===45&&tm(e.input.charCodeAt(e.position+1));){e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,V(e,`tab characters must not be used in indentation`));let n=e.line;e.position++;let r=cm(e,!0)>0;if(e.firstTabInLine!==-1&&e.input.charCodeAt(e.position)===45&&tm(e.input.charCodeAt(e.position+1))&&V(e,`bad indentation of a sequence entry`),r&&e.lineIndent<=t?Yp(e):Tm(e,t,Mp,!1,!0),cm(e,!0),e.lineIndent<t||e.position>=e.length)break;e.lineIndent>t&&V(e,`bad indentation of a sequence entry`),e.line===n&&e.input.charCodeAt(e.position)===45&&tm(e.input.charCodeAt(e.position+1))&&V(e,`bad indentation of a sequence entry`)}return Jp(e),!0}function wm(e,t,n,r){let i=!1,a=!1,o=!1,s=!1;if(e.firstTabInLine!==-1)return!1;let c=e.input.charCodeAt(e.position);for(;c!==0;){!i&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,V(e,`tab characters must not be used in indentation`));let l=e.input.charCodeAt(e.position+1),u=e.line;if((c===63||c===58)&&tm(l))o||=(Gp(e,e.position,r.anchorStart,r.anchorEnd,r.tagStart,r.tagEnd,1),!0),c===63?(i&&Yp(e),a=!0,i=!0):i?i=!1:(Yp(e),a=!0,i=!1),e.position+=1,s=!0;else{i&&=(Yp(e),!1);let t=Zp(e);if(!Tm(e,n,jp,!1,!0))break;if(e.line===u){for(c=e.input.charCodeAt(e.position);$p(c);)c=e.input.charCodeAt(++e.position);if(c===58){if(c=e.input.charCodeAt(++e.position),tm(c)||V(e,`a whitespace character is expected after the key-value separator within a block mapping`),!o){for(Qp(e,t),Gp(e,t.position,r.anchorStart,r.anchorEnd,r.tagStart,r.tagEnd,1),o=!0,Tm(e,n,jp,!1,!0),c=e.input.charCodeAt(e.position);$p(c);)c=e.input.charCodeAt(++e.position);e.position++}a=!0,i=!1,s=!1}else if(a)V(e,`expected ':' after a mapping key`);else return r.anchorStart!==B||r.tagStart!==B?(Qp(e,t),!1):!0}else if(a)V(e,`can not read a block mapping entry; a multiline key may not be an implicit key`);else return r.anchorStart!==B||r.tagStart!==B?(Qp(e,t),!1):!0}if(Tm(e,t,Np,!0,s)&&(s=!1),i||(s&&=(Yp(e),!1)),cm(e,!0),c=e.input.charCodeAt(e.position),(e.line===u||e.lineIndent>t)&&c!==0)V(e,`bad indentation of a mapping entry`);else if(e.lineIndent<t)break}return a?(i&&Yp(e),o&&Jp(e),!0):!1}function Tm(e,t,n,r,i,a=!0){e.depth>=e.maxDepth&&V(e,`nesting exceeded maxDepth (${e.maxDepth})`),e.depth++;let o=1,s=!1,c=!1,l=null,u=Xp(),d=n===Np||n===Mp,f=d,p=d;if(r&&cm(e,!0)&&(s=!0,o=e.lineIndent>t?1:e.lineIndent===t?0:-1),e.position===e.lineStart&&lm(e))return e.depth--,!1;if(o===1)for(;;){let r=e.input.charCodeAt(e.position),i=Zp(e);if(s&&o!==1&&(r===33||r===38))break;if(s&&p&&(u.tagStart!==B||u.anchorStart!==B)&&(r===33||r===38)){let n=Zp(e),r=t+1;if(wm(e,e.position-e.lineStart,r,u)&&e.events[n.eventsLength]?.type===3)return e.depth--,!0;Qp(e,n)}if(s&&(r===33&&u.tagStart!==B||r===38&&u.anchorStart!==B)||!fm(e,u,n===Ap)&&!pm(e,u))break;l===null&&(l=i),cm(e,!0)?(s=!0,f=p,o=e.lineIndent>t?1:e.lineIndent===t?0:-1):f=!1}if(f&&=s||i,o===1||n===Np){let r=n===Ap||n===jp?t:t+1,i=e.position-e.lineStart;if(o===1)if(f&&(Cm(e,i,u)||wm(e,i,r,u))||Sm(e,r,u))c=!0;else{let t=e.input.charCodeAt(e.position);if(l!==null&&a&&p&&!f&&t!==124&&t!==62){let t=Zp(e),n=l.position-l.lineStart;Qp(e,l),wm(e,n,r,Xp())&&e.events[t.eventsLength]?.type===3?c=!0:Qp(e,t)}!c&&(d&&vm(e,r,u)||gm(e,r,u)||_m(e,r,u)||mm(e,u)||bm(e,r,n,u))&&(c=!0)}else o===0&&(c=f&&Cm(e,i,u))}return d&&=!c,!c&&(u.anchorStart!==B||u.tagStart!==B||d)&&(Kp(e,B,B,u.anchorStart,u.anchorEnd,u.tagStart,u.tagEnd,1),c=!0),e.depth--,c||u.anchorStart!==B||u.tagStart!==B}function Em(e){if(e.lineIndent>0||e.input.charCodeAt(e.position)!==37)return!1;e.position++;let t=e.position;for(;e.input.charCodeAt(e.position)!==0&&!em(e.input.charCodeAt(e.position));)e.position++;let n=e.input.slice(t,e.position),r=[];for(n.length===0&&V(e,`directive name must not be less than one character in length`);e.input.charCodeAt(e.position)!==0&&!H(e.input.charCodeAt(e.position));){for(;$p(e.input.charCodeAt(e.position));)e.position++;if(e.input.charCodeAt(e.position)===35||H(e.input.charCodeAt(e.position))||e.input.charCodeAt(e.position)===0)break;let t=e.position;for(;e.input.charCodeAt(e.position)!==0&&!em(e.input.charCodeAt(e.position));)e.position++;r.push(e.input.slice(t,e.position))}if(H(e.input.charCodeAt(e.position))&&sm(e),n===`YAML`){e.directives.some(e=>e.kind===`yaml`)&&V(e,`duplication of %YAML directive`),r.length!==1&&V(e,`YAML directive accepts exactly one argument`);let t=/^([0-9]+)\.([0-9]+)$/.exec(r[0]);t===null&&V(e,`ill-formed argument of the YAML directive`),parseInt(t[1],10)!==1&&V(e,`unacceptable YAML version of the document`),e.directives.push({kind:`yaml`,version:r[0]})}else if(n===`TAG`){r.length!==2&&V(e,`TAG directive accepts exactly two arguments`);let[t,n]=r;Ip.test(t)||V(e,`ill-formed tag handle (first argument) of the TAG directive`),kp.call(e.tagHandlers,t)&&V(e,`there is a previously declared suffix for "${t}" tag handle`),Vp.test(n)||V(e,`ill-formed tag prefix (second argument) of the TAG directive`),e.tagHandlers[t]=n,e.directives.push({kind:`tag`,handle:t,prefix:n})}return!0}function Dm(e){e.directives=[],e.tagHandlers=Object.create(null);let t=!1;for(cm(e,!0);Em(e);)t=!0,cm(e,!0);let n=!1,r=!1,i=!0;if(e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45&&tm(e.input.charCodeAt(e.position+3))){n=!0;let t=e.line;e.position+=3,cm(e,!0),i=e.line>t}else t&&V(e,`directives end mark is expected`);let a=e.events.length;if(!n&&e.position===e.lineStart&&e.input.charCodeAt(e.position)===46&&lm(e)){e.position+=3,cm(e,!0);return}if(Up(e,n,!1),Tm(e,e.lineIndent-1,Np,!1,i,i)||Yp(e),cm(e,!0),e.position===e.lineStart&&lm(e)&&(r=e.input.charCodeAt(e.position)===46,r)){let t=e.line;e.position+=3,cm(e,!0),e.line===t&&e.position<e.length&&V(e,`end of the stream or a document separator is expected`)}let o=e.events[a];o?.type===1&&(o.explicitEnd=r),Jp(e),!r&&e.position<e.length&&!(e.position===e.lineStart&&lm(e))&&V(e,`end of the stream or a document separator is expected`)}function Om(e,t){let n=e.length,r={...Hp,...t,input:`${e}\0`,length:n,position:0,line:0,lineStart:0,lineIndent:0,firstTabInLine:-1,depth:0,directives:[],tagHandlers:Object.create(null),events:[]},i=e.indexOf(`\0`);for(i!==-1&&Xf(e,i,`null byte is not allowed in input`,r.filename),r.input.charCodeAt(r.position)===65279&&r.position++;r.position<r.length&&(cm(r,!0),!(r.position>=r.length));){let e=r.position;Dm(r),r.position===e&&V(r,`can not read a document`)}return r.events}var km={...Hp,...mp};function Am(e,t={}){let n={...km,...t},r=String(e),i=Object.keys(Hp),a=Object.keys(mp);return Op(Om(r,jf(n,i)),{...jf(n,a),source:r})}function jm(e,t){let n=Am(e,t);if(n.length===0)throw new Yf(`expected a document, but the input is empty`);if(n.length===1)return n[0];throw new Yf(`expected a single document in the stream, but found more`)}var Mm={};Mm[0]=`\\0`,Mm[7]=`\\a`,Mm[8]=`\\b`,Mm[9]=`\\t`,Mm[10]=`\\n`,Mm[11]=`\\v`,Mm[12]=`\\f`,Mm[13]=`\\r`,Mm[27]=`\\e`,Mm[34]=`\\"`,Mm[92]=`\\\\`,Mm[133]=`\\N`,Mm[160]=`\\_`,Mm[8232]=`\\L`,Mm[8233]=`\\P`;var Nm={indent:2,seqNoIndent:!1,seqInlineFirst:!0,sortKeys:!1,lineWidth:80,flowBracketPadding:!1,flowSkipCommaSpace:!1,flowSkipColonSpace:!1,quoteFlowKeys:!1,quoteStyle:`single`,forceQuotes:!1,tagBeforeAnchor:!1};Hf.withTags({...rf,resolve:(e,t,n)=>{let r=rf.resolve(e,t,n);return r===z?Jd.resolve(e,t,n):r}},{...yf,resolve:(e,t,n)=>{let r=yf.resolve(e,t,n);return r===z?lf.resolve(e,t,n):r}}),{...Nm};var Pm={source:`Diyanet İşleri Başkanlığı`,sourceUrl:`https://namazvakitleri.diyanet.gov.tr/tr-TR/9118/toronto-namaz-vakitleri`,updatedAt:`2026-07-16T00:00:00Z`,dates:{"2026-07-14":`29 Muharrem 1448`,"2026-07-15":`1 Safer 1448`,"2026-07-16":`2 Safer 1448`,"2026-07-17":`3 Safer 1448`,"2026-07-18":`4 Safer 1448`,"2026-07-19":`5 Safer 1448`,"2026-07-20":`6 Safer 1448`,"2026-12-26":`17 Recep 1448`,"2026-12-27":`18 Recep 1448`,"2026-12-28":`19 Recep 1448`,"2026-12-29":`20 Recep 1448`,"2026-12-30":`21 Recep 1448`,"2026-12-31":`22 Recep 1448`}},Fm={};function Im(e){let t=Fm[e];if(t)return t;t=Fm[e]=[];for(let e=0;e<128;e++){let n=String.fromCharCode(e);t.push(n)}for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t[r]=`%`+(`0`+r.toString(16).toUpperCase()).slice(-2)}return t}function Lm(e,t){typeof t!=`string`&&(t=Lm.defaultChars);let n=Im(t);return e.replace(/(%[a-f0-9]{2})+/gi,function(e){let t=``;for(let r=0,i=e.length;r<i;r+=3){let a=parseInt(e.slice(r+1,r+3),16);if(a<128){t+=n[a];continue}if((a&224)==192&&r+3<i){let n=parseInt(e.slice(r+4,r+6),16);if((n&192)==128){let e=a<<6&1984|n&63;e<128?t+=`��`:t+=String.fromCharCode(e),r+=3;continue}}if((a&240)==224&&r+6<i){let n=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16);if((n&192)==128&&(i&192)==128){let e=a<<12&61440|n<<6&4032|i&63;e<2048||e>=55296&&e<=57343?t+=`���`:t+=String.fromCharCode(e),r+=6;continue}}if((a&248)==240&&r+9<i){let n=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16),o=parseInt(e.slice(r+10,r+12),16);if((n&192)==128&&(i&192)==128&&(o&192)==128){let e=a<<18&1835008|n<<12&258048|i<<6&4032|o&63;e<65536||e>1114111?t+=`����`:(e-=65536,t+=String.fromCharCode(55296+(e>>10),56320+(e&1023))),r+=9;continue}}t+=`�`}return t})}Lm.defaultChars=`;/?:@&=+$,#`,Lm.componentChars=``;var Rm={};function zm(e){let t=Rm[e];if(t)return t;t=Rm[e]=[];for(let e=0;e<128;e++){let n=String.fromCharCode(e);/^[0-9a-z]$/i.test(n)?t.push(n):t.push(`%`+(`0`+e.toString(16).toUpperCase()).slice(-2))}for(let n=0;n<e.length;n++)t[e.charCodeAt(n)]=e[n];return t}function Bm(e,t,n){typeof t!=`string`&&(n=t,t=Bm.defaultChars),n===void 0&&(n=!0);let r=zm(t),i=``;for(let t=0,a=e.length;t<a;t++){let o=e.charCodeAt(t);if(n&&o===37&&t+2<a&&/^[0-9a-f]{2}$/i.test(e.slice(t+1,t+3))){i+=e.slice(t,t+3),t+=2;continue}if(o<128){i+=r[o];continue}if(o>=55296&&o<=57343){if(o>=55296&&o<=56319&&t+1<a){let n=e.charCodeAt(t+1);if(n>=56320&&n<=57343){i+=encodeURIComponent(e[t]+e[t+1]),t++;continue}}i+=`%EF%BF%BD`;continue}i+=encodeURIComponent(e[t])}return i}Bm.defaultChars=`;/?:@&=+$,-_.!~*'()#`,Bm.componentChars=`-_.!~*'()`;function Vm(e){let t=``;return t+=e.protocol||``,t+=e.slashes?`//`:``,t+=e.auth?e.auth+`@`:``,e.hostname&&e.hostname.indexOf(`:`)!==-1?t+=`[`+e.hostname+`]`:t+=e.hostname||``,t+=e.port?`:`+e.port:``,t+=e.pathname||``,t+=e.search||``,t+=e.hash||``,t}function Hm(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}var Um=/^([a-z0-9.+-]+:)/i,Wm=/:[0-9]*$/,Gm=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,Km=[`%`,`/`,`?`,`;`,`#`,`'`,`{`,`}`,`|`,`\\`,`^`,"`",`<`,`>`,`"`,"`",` `,`\r`,`
`,`	`],qm=[`/`,`?`,`#`],Jm=255,Ym=/^[+a-z0-9A-Z_-]{0,63}$/,Xm=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,Zm={javascript:!0,"javascript:":!0},Qm={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function $m(e,t){if(e&&e instanceof Hm)return e;let n=new Hm;return n.parse(e,t),n}Hm.prototype.parse=function(e,t){let n,r,i,a=e;if(a=a.trim(),!t&&e.split(`#`).length===1){let e=Gm.exec(a);if(e)return this.pathname=e[1],e[2]&&(this.search=e[2]),this}let o=Um.exec(a);if(o&&(o=o[0],n=o.toLowerCase(),this.protocol=o,a=a.substr(o.length)),(t||o||a.match(/^\/\/[^@\/]+@[^@\/]+/))&&(i=a.substr(0,2)===`//`,i&&!(o&&Zm[o])&&(a=a.substr(2),this.slashes=!0)),!Zm[o]&&(i||o&&!Qm[o])){let e=-1;for(let t=0;t<qm.length;t++)r=a.indexOf(qm[t]),r!==-1&&(e===-1||r<e)&&(e=r);let t,n;n=e===-1?a.lastIndexOf(`@`):a.lastIndexOf(`@`,e),n!==-1&&(t=a.slice(0,n),a=a.slice(n+1),this.auth=t),e=-1;for(let t=0;t<Km.length;t++)r=a.indexOf(Km[t]),r!==-1&&(e===-1||r<e)&&(e=r);e===-1&&(e=a.length),a[e-1]===`:`&&e--;let i=a.slice(0,e);a=a.slice(e),this.parseHost(i),this.hostname=this.hostname||``;let o=this.hostname[0]===`[`&&this.hostname[this.hostname.length-1]===`]`;if(!o){let e=this.hostname.split(/\./);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n&&!n.match(Ym)){let r=``;for(let e=0,t=n.length;e<t;e++)n.charCodeAt(e)>127?r+=`x`:r+=n[e];if(!r.match(Ym)){let r=e.slice(0,t),i=e.slice(t+1),o=n.match(Xm);o&&(r.push(o[1]),i.unshift(o[2])),i.length&&(a=i.join(`.`)+a),this.hostname=r.join(`.`);break}}}}this.hostname.length>Jm&&(this.hostname=``),o&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}let s=a.indexOf(`#`);s!==-1&&(this.hash=a.substr(s),a=a.slice(0,s));let c=a.indexOf(`?`);return c!==-1&&(this.search=a.substr(c),a=a.slice(0,c)),a&&(this.pathname=a),Qm[n]&&this.hostname&&!this.pathname&&(this.pathname=``),this},Hm.prototype.parseHost=function(e){let t=Wm.exec(e);t&&(t=t[0],t!==`:`&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)};var eh=t({decode:()=>Lm,encode:()=>Bm,format:()=>Vm,parse:()=>$m}),th=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,nh=/[\0-\x1F\x7F-\x9F]/,rh=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,ih=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,ah=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,oh=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,sh=t({Any:()=>th,Cc:()=>nh,Cf:()=>rh,P:()=>ih,S:()=>ah,Z:()=>oh}),ch=new Uint16Array(`ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻\xA0ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌`.split(``).map(e=>e.charCodeAt(0))),lh=new Uint16Array(`Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢`.split(``).map(e=>e.charCodeAt(0))),uh=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),dh=String.fromCodePoint??function(e){let t=``;return e>65535&&(e-=65536,t+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),t+=String.fromCharCode(e),t};function fh(e){return e>=55296&&e<=57343||e>1114111?65533:uh.get(e)??e}var U;(function(e){e[e.NUM=35]=`NUM`,e[e.SEMI=59]=`SEMI`,e[e.EQUALS=61]=`EQUALS`,e[e.ZERO=48]=`ZERO`,e[e.NINE=57]=`NINE`,e[e.LOWER_A=97]=`LOWER_A`,e[e.LOWER_F=102]=`LOWER_F`,e[e.LOWER_X=120]=`LOWER_X`,e[e.LOWER_Z=122]=`LOWER_Z`,e[e.UPPER_A=65]=`UPPER_A`,e[e.UPPER_F=70]=`UPPER_F`,e[e.UPPER_Z=90]=`UPPER_Z`})(U||={});var ph=32,mh;(function(e){e[e.VALUE_LENGTH=49152]=`VALUE_LENGTH`,e[e.BRANCH_LENGTH=16256]=`BRANCH_LENGTH`,e[e.JUMP_TABLE=127]=`JUMP_TABLE`})(mh||={});function hh(e){return e>=U.ZERO&&e<=U.NINE}function gh(e){return e>=U.UPPER_A&&e<=U.UPPER_F||e>=U.LOWER_A&&e<=U.LOWER_F}function _h(e){return e>=U.UPPER_A&&e<=U.UPPER_Z||e>=U.LOWER_A&&e<=U.LOWER_Z||hh(e)}function vh(e){return e===U.EQUALS||_h(e)}var W;(function(e){e[e.EntityStart=0]=`EntityStart`,e[e.NumericStart=1]=`NumericStart`,e[e.NumericDecimal=2]=`NumericDecimal`,e[e.NumericHex=3]=`NumericHex`,e[e.NamedEntity=4]=`NamedEntity`})(W||={});var yh;(function(e){e[e.Legacy=0]=`Legacy`,e[e.Strict=1]=`Strict`,e[e.Attribute=2]=`Attribute`})(yh||={});var bh=class{constructor(e,t,n){this.decodeTree=e,this.emitCodePoint=t,this.errors=n,this.state=W.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=yh.Strict}startEntity(e){this.decodeMode=e,this.state=W.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(e,t){switch(this.state){case W.EntityStart:return e.charCodeAt(t)===U.NUM?(this.state=W.NumericStart,this.consumed+=1,this.stateNumericStart(e,t+1)):(this.state=W.NamedEntity,this.stateNamedEntity(e,t));case W.NumericStart:return this.stateNumericStart(e,t);case W.NumericDecimal:return this.stateNumericDecimal(e,t);case W.NumericHex:return this.stateNumericHex(e,t);case W.NamedEntity:return this.stateNamedEntity(e,t)}}stateNumericStart(e,t){return t>=e.length?-1:(e.charCodeAt(t)|ph)===U.LOWER_X?(this.state=W.NumericHex,this.consumed+=1,this.stateNumericHex(e,t+1)):(this.state=W.NumericDecimal,this.stateNumericDecimal(e,t))}addToNumericResult(e,t,n,r){if(t!==n){let i=n-t;this.result=this.result*r**+i+parseInt(e.substr(t,i),r),this.consumed+=i}}stateNumericHex(e,t){let n=t;for(;t<e.length;){let r=e.charCodeAt(t);if(hh(r)||gh(r))t+=1;else return this.addToNumericResult(e,n,t,16),this.emitNumericEntity(r,3)}return this.addToNumericResult(e,n,t,16),-1}stateNumericDecimal(e,t){let n=t;for(;t<e.length;){let r=e.charCodeAt(t);if(hh(r))t+=1;else return this.addToNumericResult(e,n,t,10),this.emitNumericEntity(r,2)}return this.addToNumericResult(e,n,t,10),-1}emitNumericEntity(e,t){var n;if(this.consumed<=t)return(n=this.errors)==null||n.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(e===U.SEMI)this.consumed+=1;else if(this.decodeMode===yh.Strict)return 0;return this.emitCodePoint(fh(this.result),this.consumed),this.errors&&(e!==U.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(e,t){let{decodeTree:n}=this,r=n[this.treeIndex],i=(r&mh.VALUE_LENGTH)>>14;for(;t<e.length;t++,this.excess++){let a=e.charCodeAt(t);if(this.treeIndex=Sh(n,r,this.treeIndex+Math.max(1,i),a),this.treeIndex<0)return this.result===0||this.decodeMode===yh.Attribute&&(i===0||vh(a))?0:this.emitNotTerminatedNamedEntity();if(r=n[this.treeIndex],i=(r&mh.VALUE_LENGTH)>>14,i!==0){if(a===U.SEMI)return this.emitNamedEntityData(this.treeIndex,i,this.consumed+this.excess);this.decodeMode!==yh.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var e;let{result:t,decodeTree:n}=this,r=(n[t]&mh.VALUE_LENGTH)>>14;return this.emitNamedEntityData(t,r,this.consumed),(e=this.errors)==null||e.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(e,t,n){let{decodeTree:r}=this;return this.emitCodePoint(t===1?r[e]&~mh.VALUE_LENGTH:r[e+1],n),t===3&&this.emitCodePoint(r[e+2],n),n}end(){var e;switch(this.state){case W.NamedEntity:return this.result!==0&&(this.decodeMode!==yh.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case W.NumericDecimal:return this.emitNumericEntity(0,2);case W.NumericHex:return this.emitNumericEntity(0,3);case W.NumericStart:return(e=this.errors)==null||e.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case W.EntityStart:return 0}}};function xh(e){let t=``,n=new bh(e,e=>t+=dh(e));return function(e,r){let i=0,a=0;for(;(a=e.indexOf(`&`,a))>=0;){t+=e.slice(i,a),n.startEntity(r);let o=n.write(e,a+1);if(o<0){i=a+n.end();break}i=a+o,a=o===0?i+1:i}let o=t+e.slice(i);return t=``,o}}function Sh(e,t,n,r){let i=(t&mh.BRANCH_LENGTH)>>7,a=t&mh.JUMP_TABLE;if(i===0)return a!==0&&r===a?n:-1;if(a){let t=r-a;return t<0||t>=i?-1:e[n+t]-1}let o=n,s=o+i-1;for(;o<=s;){let t=o+s>>>1,n=e[t];if(n<r)o=t+1;else if(n>r)s=t-1;else return e[t+i]}return-1}var Ch=xh(ch);xh(lh);function wh(e,t=yh.Legacy){return Ch(e,t)}function Th(e){return Ch(e,yh.Strict)}var Eh=t({arrayReplaceAt:()=>Mh,asciiTrim:()=>eg,assign:()=>jh,escapeHtml:()=>Gh,escapeRE:()=>qh,fromCodePoint:()=>Ph,has:()=>Ah,isMdAsciiPunct:()=>Zh,isPunctChar:()=>Yh,isPunctCharCode:()=>Xh,isSpace:()=>G,isString:()=>Oh,isValidEntityCode:()=>Nh,isWhiteSpace:()=>Jh,lib:()=>tg,normalizeReference:()=>Qh,unescapeAll:()=>Bh,unescapeMd:()=>zh});function Dh(e){return Object.prototype.toString.call(e)}function Oh(e){return Dh(e)===`[object String]`}var kh=Object.prototype.hasOwnProperty;function Ah(e,t){return kh.call(e,t)}function jh(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){if(t){if(typeof t!=`object`)throw TypeError(t+`must be object`);Object.keys(t).forEach(function(n){e[n]=t[n]})}}),e}function Mh(e,t,n){return[].concat(e.slice(0,t),n,e.slice(t+1))}function Nh(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)==65535||(e&65535)==65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function Ph(e){if(e>65535){e-=65536;let t=55296+(e>>10),n=56320+(e&1023);return String.fromCharCode(t,n)}return String.fromCharCode(e)}var Fh=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,Ih=RegExp(Fh.source+`|&([a-z#][a-z0-9]{1,31});`,`gi`),Lh=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function Rh(e,t){if(t.charCodeAt(0)===35&&Lh.test(t)){let n=t[1].toLowerCase()===`x`?parseInt(t.slice(2),16):parseInt(t.slice(1),10);return Nh(n)?Ph(n):e}let n=wh(e);return n===e?e:n}function zh(e){return e.indexOf(`\\`)<0?e:e.replace(Fh,`$1`)}function Bh(e){return e.indexOf(`\\`)<0&&e.indexOf(`&`)<0?e:e.replace(Ih,function(e,t,n){return t||Rh(e,n)})}var Vh=/[&<>"]/,Hh=/[&<>"]/g,Uh={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`};function Wh(e){return Uh[e]}function Gh(e){return Vh.test(e)?e.replace(Hh,Wh):e}var Kh=/[.?*+^$[\]\\(){}|-]/g;function qh(e){return e.replace(Kh,`\\$&`)}function G(e){switch(e){case 9:case 32:return!0}return!1}function Jh(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function Yh(e){return ih.test(e)||ah.test(e)}function Xh(e){return Yh(Ph(e))}function Zh(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function Qh(e){return e=e.trim().replace(/\s+/g,` `),e.toLowerCase().toUpperCase()}function $h(e){return e===32||e===9||e===10||e===13}function eg(e){let t=0;for(;t<e.length&&$h(e.charCodeAt(t));t++);let n=e.length-1;for(;n>=t&&$h(e.charCodeAt(n));n--);return e.slice(t,n+1)}var tg={mdurl:eh,ucmicro:sh};function ng(e,t,n){let r,i,a,o,s=e.posMax,c=e.pos;for(e.pos=t+1,r=1;e.pos<s;){if(a=e.src.charCodeAt(e.pos),a===93&&(r--,r===0)){i=!0;break}if(o=e.pos,e.md.inline.skipToken(e),a===91){if(o===e.pos-1)r++;else if(n)return e.pos=c,-1}}let l=-1;return i&&(l=e.pos),e.pos=c,l}function rg(e,t,n){let r,i=t,a={ok:!1,pos:0,str:``};if(e.charCodeAt(i)===60){for(i++;i<n;){if(r=e.charCodeAt(i),r===10||r===60)return a;if(r===62)return a.pos=i+1,a.str=Bh(e.slice(t+1,i)),a.ok=!0,a;if(r===92&&i+1<n){i+=2;continue}i++}return a}let o=0;for(;i<n&&(r=e.charCodeAt(i),!(r===32||r<32||r===127));){if(r===92&&i+1<n){if(e.charCodeAt(i+1)===32)break;i+=2;continue}if(r===40&&(o++,o>32))return a;if(r===41){if(o===0)break;o--}i++}return t===i||o!==0?a:(a.str=Bh(e.slice(t,i)),a.pos=i,a.ok=!0,a)}function ig(e,t,n,r){let i,a=t,o={ok:!1,can_continue:!1,pos:0,str:``,marker:0};if(r)o.str=r.str,o.marker=r.marker;else{if(a>=n)return o;let r=e.charCodeAt(a);if(r!==34&&r!==39&&r!==40)return o;t++,a++,r===40&&(r=41),o.marker=r}for(;a<n;){if(i=e.charCodeAt(a),i===o.marker)return o.pos=a+1,o.str+=Bh(e.slice(t,a)),o.ok=!0,o;if(i===40&&o.marker===41)return o;i===92&&a+1<n&&a++,a++}return o.can_continue=!0,o.str+=Bh(e.slice(t,a)),o}var ag=t({parseLinkDestination:()=>rg,parseLinkLabel:()=>ng,parseLinkTitle:()=>ig}),og={};og.code_inline=function(e,t,n,r,i){let a=e[t];return`<code`+i.renderAttrs(a)+`>`+Gh(a.content)+`</code>`},og.code_block=function(e,t,n,r,i){let a=e[t];return`<pre`+i.renderAttrs(a)+`><code>`+Gh(e[t].content)+`</code></pre>
`},og.fence=function(e,t,n,r,i){let a=e[t],o=a.info?Bh(a.info).trim():``,s=``,c=``;if(o){let e=o.split(/(\s+)/g);s=e[0],c=e.slice(2).join(``)}let l;if(l=n.highlight&&n.highlight(a.content,s,c)||Gh(a.content),l.indexOf(`<pre`)===0)return l+`
`;if(o){let e=a.attrIndex(`class`),t=a.attrs?a.attrs.slice():[];e<0?t.push([`class`,n.langPrefix+s]):(t[e]=t[e].slice(),t[e][1]+=` `+n.langPrefix+s);let r={attrs:t};return`<pre><code${i.renderAttrs(r)}>${l}</code></pre>\n`}return`<pre><code${i.renderAttrs(a)}>${l}</code></pre>\n`},og.image=function(e,t,n,r,i){let a=e[t];return a.attrs[a.attrIndex(`alt`)][1]=i.renderInlineAsText(a.children,n,r),i.renderToken(e,t,n)},og.hardbreak=function(e,t,n){return n.xhtmlOut?`<br />
`:`<br>
`},og.softbreak=function(e,t,n){return n.breaks?n.xhtmlOut?`<br />
`:`<br>
`:`
`},og.text=function(e,t){return Gh(e[t].content)},og.html_block=function(e,t){return e[t].content},og.html_inline=function(e,t){return e[t].content};function sg(){this.rules=jh({},og)}sg.prototype.renderAttrs=function(e){let t,n,r;if(!e.attrs)return``;for(r=``,t=0,n=e.attrs.length;t<n;t++)r+=` `+Gh(e.attrs[t][0])+`="`+Gh(e.attrs[t][1])+`"`;return r},sg.prototype.renderToken=function(e,t,n){let r=e[t],i=``;if(r.hidden)return``;r.block&&r.nesting!==-1&&t&&e[t-1].hidden&&(i+=`
`),i+=(r.nesting===-1?`</`:`<`)+r.tag,i+=this.renderAttrs(r),r.nesting===0&&n.xhtmlOut&&(i+=` /`);let a=!1;if(r.block&&(a=!0,r.nesting===1&&t+1<e.length)){let n=e[t+1];(n.type===`inline`||n.hidden||n.nesting===-1&&n.tag===r.tag)&&(a=!1)}return i+=a?`>
`:`>`,i},sg.prototype.renderInline=function(e,t,n){let r=``,i=this.rules;for(let a=0,o=e.length;a<o;a++){let o=e[a].type;i[o]===void 0?r+=this.renderToken(e,a,t):r+=i[o](e,a,t,n,this)}return r},sg.prototype.renderInlineAsText=function(e,t,n){let r=``;for(let i=0,a=e.length;i<a;i++)switch(e[i].type){case`text`:r+=e[i].content;break;case`image`:r+=this.renderInlineAsText(e[i].children,t,n);break;case`html_inline`:case`html_block`:r+=e[i].content;break;case`softbreak`:case`hardbreak`:r+=`
`;break;default:}return r},sg.prototype.render=function(e,t,n){let r=``,i=this.rules;for(let a=0,o=e.length;a<o;a++){let o=e[a].type;o===`inline`?r+=this.renderInline(e[a].children,t,n):i[o]===void 0?r+=this.renderToken(e,a,t,n):r+=i[o](e,a,t,n,this)}return r};function cg(){this.__rules__=[],this.__cache__=null}cg.prototype.__find__=function(e){for(let t=0;t<this.__rules__.length;t++)if(this.__rules__[t].name===e)return t;return-1},cg.prototype.__compile__=function(){let e=this,t=[``];e.__rules__.forEach(function(e){e.enabled&&e.alt.forEach(function(e){t.indexOf(e)<0&&t.push(e)})}),e.__cache__={},t.forEach(function(t){e.__cache__[t]=[],e.__rules__.forEach(function(n){n.enabled&&(t&&n.alt.indexOf(t)<0||e.__cache__[t].push(n.fn))})})},cg.prototype.at=function(e,t,n){let r=this.__find__(e),i=n||{};if(r===-1)throw Error(`Parser rule not found: `+e);this.__rules__[r].fn=t,this.__rules__[r].alt=i.alt||[],this.__cache__=null},cg.prototype.before=function(e,t,n,r){let i=this.__find__(e),a=r||{};if(i===-1)throw Error(`Parser rule not found: `+e);this.__rules__.splice(i,0,{name:t,enabled:!0,fn:n,alt:a.alt||[]}),this.__cache__=null},cg.prototype.after=function(e,t,n,r){let i=this.__find__(e),a=r||{};if(i===-1)throw Error(`Parser rule not found: `+e);this.__rules__.splice(i+1,0,{name:t,enabled:!0,fn:n,alt:a.alt||[]}),this.__cache__=null},cg.prototype.push=function(e,t,n){let r=n||{};this.__rules__.push({name:e,enabled:!0,fn:t,alt:r.alt||[]}),this.__cache__=null},cg.prototype.enable=function(e,t){Array.isArray(e)||(e=[e]);let n=[];return e.forEach(function(e){let r=this.__find__(e);if(r<0){if(t)return;throw Error(`Rules manager: invalid rule name `+e)}this.__rules__[r].enabled=!0,n.push(e)},this),this.__cache__=null,n},cg.prototype.enableOnly=function(e,t){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(e){e.enabled=!1}),this.enable(e,t)},cg.prototype.disable=function(e,t){Array.isArray(e)||(e=[e]);let n=[];return e.forEach(function(e){let r=this.__find__(e);if(r<0){if(t)return;throw Error(`Rules manager: invalid rule name `+e)}this.__rules__[r].enabled=!1,n.push(e)},this),this.__cache__=null,n},cg.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function lg(e,t,n){this.type=e,this.tag=t,this.attrs=null,this.map=null,this.nesting=n,this.level=0,this.children=null,this.content=``,this.markup=``,this.info=``,this.meta=null,this.block=!1,this.hidden=!1}lg.prototype.attrIndex=function(e){if(!this.attrs)return-1;let t=this.attrs;for(let n=0,r=t.length;n<r;n++)if(t[n][0]===e)return n;return-1},lg.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]},lg.prototype.attrSet=function(e,t){let n=this.attrIndex(e),r=[e,t];n<0?this.attrPush(r):this.attrs[n]=r},lg.prototype.attrGet=function(e){let t=this.attrIndex(e),n=null;return t>=0&&(n=this.attrs[t][1]),n},lg.prototype.attrJoin=function(e,t){let n=this.attrIndex(e);n<0?this.attrPush([e,t]):this.attrs[n][1]=this.attrs[n][1]+` `+t};function ug(e,t,n){this.src=e,this.env=n,this.tokens=[],this.inlineMode=!1,this.md=t}ug.prototype.Token=lg;var dg=/\r\n?|\n/g,fg=/\0/g;function pg(e){let t;t=e.src.replace(dg,`
`),t=t.replace(fg,`�`),e.src=t}function mg(e){let t;e.inlineMode?(t=new e.Token(`inline`,``,0),t.content=e.src,t.map=[0,1],t.children=[],e.tokens.push(t)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function hg(e){let t=e.tokens;for(let n=0,r=t.length;n<r;n++){let r=t[n];r.type===`inline`&&e.md.inline.parse(r.content,e.md,e.env,r.children)}}function gg(e){return/^<a[>\s]/i.test(e)}function _g(e){return/^<\/a\s*>/i.test(e)}function vg(e){let t=e.tokens;if(e.md.options.linkify)for(let n=0,r=t.length;n<r;n++){if(t[n].type!==`inline`||!e.md.linkify.pretest(t[n].content))continue;let r=t[n].children,i=0;for(let a=r.length-1;a>=0;a--){let o=r[a];if(o.type===`link_close`){for(a--;r[a].level!==o.level&&r[a].type!==`link_open`;)a--;continue}if(o.type===`html_inline`&&(gg(o.content)&&i>0&&i--,_g(o.content)&&i++),!(i>0)&&o.type===`text`&&e.md.linkify.test(o.content)){let i=o.content,s=e.md.linkify.match(i),c=[],l=o.level,u=0;s.length>0&&s[0].index===0&&a>0&&r[a-1].type===`text_special`&&(s=s.slice(1));for(let t=0;t<s.length;t++){let n=s[t].url,r=e.md.normalizeLink(n);if(!e.md.validateLink(r))continue;let a=s[t].text;a=s[t].schema?s[t].schema===`mailto:`&&!/^mailto:/i.test(a)?e.md.normalizeLinkText(`mailto:`+a).replace(/^mailto:/,``):e.md.normalizeLinkText(a):e.md.normalizeLinkText(`http://`+a).replace(/^http:\/\//,``);let o=s[t].index;if(o>u){let t=new e.Token(`text`,``,0);t.content=i.slice(u,o),t.level=l,c.push(t)}let d=new e.Token(`link_open`,`a`,1);d.attrs=[[`href`,r]],d.level=l++,d.markup=`linkify`,d.info=`auto`,c.push(d);let f=new e.Token(`text`,``,0);f.content=a,f.level=l,c.push(f);let p=new e.Token(`link_close`,`a`,-1);p.level=--l,p.markup=`linkify`,p.info=`auto`,c.push(p),u=s[t].lastIndex}if(u<i.length){let t=new e.Token(`text`,``,0);t.content=i.slice(u),t.level=l,c.push(t)}t[n].children=r=Mh(r,a,c)}}}}var yg=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,bg=/\((c|tm|r)\)/i,xg=/\((c|tm|r)\)/gi,Sg={c:`©`,r:`®`,tm:`™`};function Cg(e,t){return Sg[t.toLowerCase()]}function wg(e){let t=0;for(let n=e.length-1;n>=0;n--){let r=e[n];r.type===`text`&&!t&&(r.content=r.content.replace(xg,Cg)),r.type===`link_open`&&r.info===`auto`&&t--,r.type===`link_close`&&r.info===`auto`&&t++}}function Tg(e){let t=0;for(let n=e.length-1;n>=0;n--){let r=e[n];r.type===`text`&&!t&&yg.test(r.content)&&(r.content=r.content.replace(/\+-/g,`±`).replace(/\.{2,}/g,`…`).replace(/([?!])…/g,`$1..`).replace(/([?!]){4,}/g,`$1$1$1`).replace(/,{2,}/g,`,`).replace(/(^|[^-])---(?=[^-]|$)/gm,`$1—`).replace(/(^|\s)--(?=\s|$)/gm,`$1–`).replace(/(^|[^-\s])--(?=[^-\s]|$)/gm,`$1–`)),r.type===`link_open`&&r.info===`auto`&&t--,r.type===`link_close`&&r.info===`auto`&&t++}}function Eg(e){let t;if(e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type===`inline`&&(bg.test(e.tokens[t].content)&&wg(e.tokens[t].children),yg.test(e.tokens[t].content)&&Tg(e.tokens[t].children))}var Dg=/['"]/,Og=/['"]/g,kg=`’`;function Ag(e,t,n,r){e[t]||(e[t]=[]),e[t].push({pos:n,ch:r})}function jg(e,t){let n=``,r=0;t.sort((e,t)=>e.pos-t.pos);for(let i=0;i<t.length;i++){let a=t[i];n+=e.slice(r,a.pos)+a.ch,r=a.pos+1}return n+e.slice(r)}function Mg(e,t){let n,r=[],i={};for(let a=0;a<e.length;a++){let o=e[a],s=e[a].level;for(n=r.length-1;n>=0&&!(r[n].level<=s);n--);if(r.length=n+1,o.type!==`text`)continue;let c=o.content,l=0,u=c.length;OUTER:for(;l<u;){Og.lastIndex=l;let o=Og.exec(c);if(!o)break;let d=!0,f=!0;l=o.index+1;let p=o[0]===`'`,m=32;if(o.index-1>=0)m=c.charCodeAt(o.index-1);else for(n=a-1;n>=0&&!(e[n].type===`softbreak`||e[n].type===`hardbreak`);n--)if(e[n].content){m=e[n].content.charCodeAt(e[n].content.length-1);break}let h=32;if(l<u)h=c.charCodeAt(l);else for(n=a+1;n<e.length&&!(e[n].type===`softbreak`||e[n].type===`hardbreak`);n++)if(e[n].content){h=e[n].content.charCodeAt(0);break}let g=Zh(m)||Xh(m),_=Zh(h)||Xh(h),v=Jh(m),y=Jh(h);if(y?d=!1:_&&(v||g||(d=!1)),v?f=!1:g&&(y||_||(f=!1)),h===34&&o[0]===`"`&&m>=48&&m<=57&&(f=d=!1),d&&f&&(d=g,f=_),!d&&!f){p&&Ag(i,a,o.index,kg);continue}if(f)for(n=r.length-1;n>=0;n--){let e=r[n];if(r[n].level<s)break;if(e.single===p&&r[n].level===s){e=r[n];let s,c;p?(s=t.md.options.quotes[2],c=t.md.options.quotes[3]):(s=t.md.options.quotes[0],c=t.md.options.quotes[1]),Ag(i,a,o.index,c),Ag(i,e.token,e.pos,s),r.length=n;continue OUTER}}d?r.push({token:a,pos:o.index,single:p,level:s}):f&&p&&Ag(i,a,o.index,kg)}}Object.keys(i).forEach(function(t){e[t].content=jg(e[t].content,i[t])})}function Ng(e){if(e.md.options.typographer)for(let t=e.tokens.length-1;t>=0;t--)e.tokens[t].type!==`inline`||!Dg.test(e.tokens[t].content)||Mg(e.tokens[t].children,e)}function Pg(e){let t,n,r=e.tokens,i=r.length;for(let e=0;e<i;e++){if(r[e].type!==`inline`)continue;let i=r[e].children,a=i.length;for(t=0;t<a;t++)i[t].type===`text_special`&&(i[t].type=`text`);for(t=n=0;t<a;t++)i[t].type===`text`&&t+1<a&&i[t+1].type===`text`?i[t+1].content=i[t].content+i[t+1].content:(t!==n&&(i[n]=i[t]),n++);t!==n&&(i.length=n)}}var Fg=[[`normalize`,pg],[`block`,mg],[`inline`,hg],[`linkify`,vg],[`replacements`,Eg],[`smartquotes`,Ng],[`text_join`,Pg]];function Ig(){this.ruler=new cg;for(let e=0;e<Fg.length;e++)this.ruler.push(Fg[e][0],Fg[e][1])}Ig.prototype.process=function(e){let t=this.ruler.getRules(``);for(let n=0,r=t.length;n<r;n++)t[n](e)},Ig.prototype.State=ug;function Lg(e,t,n,r){this.src=e,this.md=t,this.env=n,this.tokens=r,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType=`root`,this.level=0;let i=this.src;for(let e=0,t=0,n=0,r=0,a=i.length,o=!1;t<a;t++){let s=i.charCodeAt(t);if(!o)if(G(s)){n++,s===9?r+=4-r%4:r++;continue}else o=!0;(s===10||t===a-1)&&(s!==10&&t++,this.bMarks.push(e),this.eMarks.push(t),this.tShift.push(n),this.sCount.push(r),this.bsCount.push(0),o=!1,n=0,r=0,e=t+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}Lg.prototype.push=function(e,t,n){let r=new lg(e,t,n);return r.block=!0,n<0&&this.level--,r.level=this.level,n>0&&this.level++,this.tokens.push(r),r},Lg.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]},Lg.prototype.skipEmptyLines=function(e){for(let t=this.lineMax;e<t&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e},Lg.prototype.skipSpaces=function(e){for(let t=this.src.length;e<t&&G(this.src.charCodeAt(e));e++);return e},Lg.prototype.skipSpacesBack=function(e,t){if(e<=t)return e;for(;e>t;)if(!G(this.src.charCodeAt(--e)))return e+1;return e},Lg.prototype.skipChars=function(e,t){for(let n=this.src.length;e<n&&this.src.charCodeAt(e)===t;e++);return e},Lg.prototype.skipCharsBack=function(e,t,n){if(e<=n)return e;for(;e>n;)if(t!==this.src.charCodeAt(--e))return e+1;return e},Lg.prototype.getLines=function(e,t,n,r){if(e>=t)return``;let i=Array(t-e);for(let a=0,o=e;o<t;o++,a++){let e=0,s=this.bMarks[o],c=s,l;for(l=o+1<t||r?this.eMarks[o]+1:this.eMarks[o];c<l&&e<n;){let t=this.src.charCodeAt(c);if(G(t))t===9?e+=4-(e+this.bsCount[o])%4:e++;else if(c-s<this.tShift[o])e++;else break;c++}e>n?i[a]=Array(e-n+1).join(` `)+this.src.slice(c,l):i[a]=this.src.slice(c,l)}return i.join(``)},Lg.prototype.Token=lg;var Rg=65536;function zg(e,t){let n=e.bMarks[t]+e.tShift[t],r=e.eMarks[t];return e.src.slice(n,r)}function Bg(e){let t=[],n=e.length,r=0,i=e.charCodeAt(r),a=!1,o=0,s=``;for(;r<n;)i===124&&(a?(s+=e.substring(o,r-1),o=r):(t.push(s+e.substring(o,r)),s=``,o=r+1)),a=i===92,r++,i=e.charCodeAt(r);return t.push(s+e.substring(o)),t}function Vg(e,t,n,r){if(t+2>n)return!1;let i=t+1;if(e.sCount[i]<e.blkIndent||e.sCount[i]-e.blkIndent>=4)return!1;let a=e.bMarks[i]+e.tShift[i];if(a>=e.eMarks[i])return!1;let o=e.src.charCodeAt(a++);if(o!==124&&o!==45&&o!==58||a>=e.eMarks[i])return!1;let s=e.src.charCodeAt(a++);if(s!==124&&s!==45&&s!==58&&!G(s)||o===45&&G(s))return!1;for(;a<e.eMarks[i];){let t=e.src.charCodeAt(a);if(t!==124&&t!==45&&t!==58&&!G(t))return!1;a++}let c=zg(e,t+1),l=c.split(`|`),u=[];for(let e=0;e<l.length;e++){let t=l[e].trim();if(!t){if(e===0||e===l.length-1)continue;return!1}if(!/^:?-+:?$/.test(t))return!1;t.charCodeAt(t.length-1)===58?u.push(t.charCodeAt(0)===58?`center`:`right`):t.charCodeAt(0)===58?u.push(`left`):u.push(``)}if(c=zg(e,t).trim(),c.indexOf(`|`)===-1||e.sCount[t]-e.blkIndent>=4)return!1;l=Bg(c),l.length&&l[0]===``&&l.shift(),l.length&&l[l.length-1]===``&&l.pop();let d=l.length;if(d===0||d!==u.length)return!1;if(r)return!0;let f=e.parentType;e.parentType=`table`;let p=e.md.block.ruler.getRules(`blockquote`),m=e.push(`table_open`,`table`,1),h=[t,0];m.map=h;let g=e.push(`thead_open`,`thead`,1);g.map=[t,t+1];let _=e.push(`tr_open`,`tr`,1);_.map=[t,t+1];for(let t=0;t<l.length;t++){let n=e.push(`th_open`,`th`,1);u[t]&&(n.attrs=[[`style`,`text-align:`+u[t]]]);let r=e.push(`inline`,``,0);r.content=l[t].trim(),r.children=[],e.push(`th_close`,`th`,-1)}e.push(`tr_close`,`tr`,-1),e.push(`thead_close`,`thead`,-1);let v,y=0;for(i=t+2;i<n&&!(e.sCount[i]<e.blkIndent);i++){let r=!1;for(let t=0,a=p.length;t<a;t++)if(p[t](e,i,n,!0)){r=!0;break}if(r||(c=zg(e,i).trim(),!c)||e.sCount[i]-e.blkIndent>=4||(l=Bg(c),l.length&&l[0]===``&&l.shift(),l.length&&l[l.length-1]===``&&l.pop(),y+=d-l.length,y>Rg))break;if(i===t+2){let n=e.push(`tbody_open`,`tbody`,1);n.map=v=[t+2,0]}let a=e.push(`tr_open`,`tr`,1);a.map=[i,i+1];for(let t=0;t<d;t++){let n=e.push(`td_open`,`td`,1);u[t]&&(n.attrs=[[`style`,`text-align:`+u[t]]]);let r=e.push(`inline`,``,0);r.content=l[t]?l[t].trim():``,r.children=[],e.push(`td_close`,`td`,-1)}e.push(`tr_close`,`tr`,-1)}return v&&(e.push(`tbody_close`,`tbody`,-1),v[1]=i),e.push(`table_close`,`table`,-1),h[1]=i,e.parentType=f,e.line=i,!0}function Hg(e,t,n){if(e.sCount[t]-e.blkIndent<4)return!1;let r=t+1,i=r;for(;r<n;){if(e.isEmpty(r)){r++;continue}if(e.sCount[r]-e.blkIndent>=4){r++,i=r;continue}break}e.line=i;let a=e.push(`code_block`,`code`,0);return a.content=e.getLines(t,i,4+e.blkIndent,!1)+`
`,a.map=[t,e.line],!0}function Ug(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||i+3>a)return!1;let o=e.src.charCodeAt(i);if(o!==126&&o!==96)return!1;let s=i;i=e.skipChars(i,o);let c=i-s;if(c<3)return!1;let l=e.src.slice(s,i),u=e.src.slice(i,a);if(o===96&&u.indexOf(String.fromCharCode(o))>=0)return!1;if(r)return!0;let d=t,f=!1;for(;d++,!(d>=n||(i=s=e.bMarks[d]+e.tShift[d],a=e.eMarks[d],i<a&&e.sCount[d]<e.blkIndent));)if(e.src.charCodeAt(i)===o&&!(e.sCount[d]-e.blkIndent>=4)&&(i=e.skipChars(i,o),!(i-s<c)&&(i=e.skipSpaces(i),!(i<a)))){f=!0;break}c=e.sCount[t],e.line=d+ +!!f;let p=e.push(`fence`,`code`,0);return p.info=u,p.content=e.getLines(t+1,d,c,!0),p.markup=l,p.map=[t,e.line],!0}function Wg(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t],o=e.lineMax;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==62)return!1;if(r)return!0;let s=[],c=[],l=[],u=[],d=e.md.block.ruler.getRules(`blockquote`),f=e.parentType;e.parentType=`blockquote`;let p=!1,m;for(m=t;m<n;m++){let t=e.sCount[m]<e.blkIndent;if(i=e.bMarks[m]+e.tShift[m],a=e.eMarks[m],i>=a)break;if(e.src.charCodeAt(i++)===62&&!t){let t=e.sCount[m]+1,n,r;e.src.charCodeAt(i)===32?(i++,t++,r=!1,n=!0):e.src.charCodeAt(i)===9?(n=!0,(e.bsCount[m]+t)%4==3?(i++,t++,r=!1):r=!0):n=!1;let o=t;for(s.push(e.bMarks[m]),e.bMarks[m]=i;i<a;){let t=e.src.charCodeAt(i);if(G(t))t===9?o+=4-(o+e.bsCount[m]+ +!!r)%4:o++;else break;i++}p=i>=a,c.push(e.bsCount[m]),e.bsCount[m]=e.sCount[m]+1+ +!!n,l.push(e.sCount[m]),e.sCount[m]=o-t,u.push(e.tShift[m]),e.tShift[m]=i-e.bMarks[m];continue}if(p)break;let r=!1;for(let t=0,i=d.length;t<i;t++)if(d[t](e,m,n,!0)){r=!0;break}if(r){e.lineMax=m,e.blkIndent!==0&&(s.push(e.bMarks[m]),c.push(e.bsCount[m]),u.push(e.tShift[m]),l.push(e.sCount[m]),e.sCount[m]-=e.blkIndent);break}s.push(e.bMarks[m]),c.push(e.bsCount[m]),u.push(e.tShift[m]),l.push(e.sCount[m]),e.sCount[m]=-1}let h=e.blkIndent;e.blkIndent=0;let g=e.push(`blockquote_open`,`blockquote`,1);g.markup=`>`;let _=[t,0];g.map=_,e.md.block.tokenize(e,t,m);let v=e.push(`blockquote_close`,`blockquote`,-1);v.markup=`>`,e.lineMax=o,e.parentType=f,_[1]=e.line;for(let n=0;n<u.length;n++)e.bMarks[n+t]=s[n],e.tShift[n+t]=u[n],e.sCount[n+t]=l[n],e.bsCount[n+t]=c[n];return e.blkIndent=h,!0}function Gg(e,t,n,r){let i=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let a=e.bMarks[t]+e.tShift[t],o=e.src.charCodeAt(a++);if(o!==42&&o!==45&&o!==95)return!1;let s=1;for(;a<i;){let t=e.src.charCodeAt(a++);if(t!==o&&!G(t))return!1;t===o&&s++}if(s<3)return!1;if(r)return!0;e.line=t+1;let c=e.push(`hr`,`hr`,0);return c.map=[t,e.line],c.markup=Array(s+1).join(String.fromCharCode(o)),!0}function Kg(e,t){let n=e.eMarks[t],r=e.bMarks[t]+e.tShift[t],i=e.src.charCodeAt(r++);return i!==42&&i!==45&&i!==43||r<n&&!G(e.src.charCodeAt(r))?-1:r}function qg(e,t){let n=e.bMarks[t]+e.tShift[t],r=e.eMarks[t],i=n;if(i+1>=r)return-1;let a=e.src.charCodeAt(i++);if(a<48||a>57)return-1;for(;;){if(i>=r)return-1;if(a=e.src.charCodeAt(i++),a>=48&&a<=57){if(i-n>=10)return-1;continue}if(a===41||a===46)break;return-1}return i<r&&(a=e.src.charCodeAt(i),!G(a))?-1:i}function Jg(e,t){let n=e.level+2;for(let r=t+2,i=e.tokens.length-2;r<i;r++)e.tokens[r].level===n&&e.tokens[r].type===`paragraph_open`&&(e.tokens[r+2].hidden=!0,e.tokens[r].hidden=!0,r+=2)}function Yg(e,t,n,r){let i,a,o,s,c=t,l=!0;if(e.sCount[c]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[c]-e.listIndent>=4&&e.sCount[c]<e.blkIndent)return!1;let u=!1;r&&e.parentType===`paragraph`&&e.sCount[c]>=e.blkIndent&&(u=!0);let d,f,p;if((p=qg(e,c))>=0){if(d=!0,o=e.bMarks[c]+e.tShift[c],f=Number(e.src.slice(o,p-1)),u&&f!==1)return!1}else if((p=Kg(e,c))>=0)d=!1;else return!1;if(u&&e.skipSpaces(p)>=e.eMarks[c])return!1;if(r)return!0;let m=e.src.charCodeAt(p-1),h=e.tokens.length;d?(s=e.push(`ordered_list_open`,`ol`,1),f!==1&&(s.attrs=[[`start`,f]])):s=e.push(`bullet_list_open`,`ul`,1);let g=[c,0];s.map=g,s.markup=String.fromCharCode(m);let _=!1,v=e.md.block.ruler.getRules(`list`),y=e.parentType;for(e.parentType=`list`;c<n;){a=p,i=e.eMarks[c];let t=e.sCount[c]+p-(e.bMarks[c]+e.tShift[c]),r=t;for(;a<i;){let t=e.src.charCodeAt(a);if(t===9)r+=4-(r+e.bsCount[c])%4;else if(t===32)r++;else break;a++}let u=a,f;f=u>=i?1:r-t,f>4&&(f=1);let h=t+f;s=e.push(`list_item_open`,`li`,1),s.markup=String.fromCharCode(m);let g=[c,0];s.map=g,d&&(s.info=e.src.slice(o,p-1));let y=e.tight,b=e.tShift[c],x=e.sCount[c],S=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=h,e.tight=!0,e.tShift[c]=u-e.bMarks[c],e.sCount[c]=r,u>=i&&e.isEmpty(c+1)?e.line=Math.min(e.line+2,n):e.md.block.tokenize(e,c,n,!0),(!e.tight||_)&&(l=!1),_=e.line-c>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=S,e.tShift[c]=b,e.sCount[c]=x,e.tight=y,s=e.push(`list_item_close`,`li`,-1),s.markup=String.fromCharCode(m),c=e.line,g[1]=c,c>=n||e.sCount[c]<e.blkIndent||e.sCount[c]-e.blkIndent>=4)break;let C=!1;for(let t=0,r=v.length;t<r;t++)if(v[t](e,c,n,!0)){C=!0;break}if(C)break;if(d){if(p=qg(e,c),p<0)break;o=e.bMarks[c]+e.tShift[c]}else if(p=Kg(e,c),p<0)break;if(m!==e.src.charCodeAt(p-1))break}return s=d?e.push(`ordered_list_close`,`ol`,-1):e.push(`bullet_list_close`,`ul`,-1),s.markup=String.fromCharCode(m),g[1]=c,e.line=c,e.parentType=y,l&&Jg(e,h),!0}function Xg(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t],o=t+1;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==91)return!1;function s(t){let n=e.lineMax;if(t>=n||e.isEmpty(t))return null;let r=!1;if(e.sCount[t]-e.blkIndent>3&&(r=!0),e.sCount[t]<0&&(r=!0),!r){let r=e.md.block.ruler.getRules(`reference`),i=e.parentType;e.parentType=`reference`;let a=!1;for(let i=0,o=r.length;i<o;i++)if(r[i](e,t,n,!0)){a=!0;break}if(e.parentType=i,a)return null}let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];return e.src.slice(i,a+1)}let c=e.src.slice(i,a+1);a=c.length;let l=-1;for(i=1;i<a;i++){let e=c.charCodeAt(i);if(e===91)return!1;if(e===93){l=i;break}else if(e===10){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}else if(e===92&&(i++,i<a&&c.charCodeAt(i)===10)){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}}if(l<0||c.charCodeAt(l+1)!==58)return!1;for(i=l+2;i<a;i++){let e=c.charCodeAt(i);if(e===10){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}else if(!G(e))break}let u=e.md.helpers.parseLinkDestination(c,i,a);if(!u.ok)return!1;let d=e.md.normalizeLink(u.str);if(!e.md.validateLink(d))return!1;i=u.pos;let f=i,p=o,m=i;for(;i<a;i++){let e=c.charCodeAt(i);if(e===10){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}else if(!G(e))break}let h=e.md.helpers.parseLinkTitle(c,i,a);for(;h.can_continue;){let t=s(o);if(t===null)break;c+=t,i=a,a=c.length,o++,h=e.md.helpers.parseLinkTitle(c,i,a,h)}let g;for(i<a&&m!==i&&h.ok?(g=h.str,i=h.pos):(g=``,i=f,o=p);i<a&&G(c.charCodeAt(i));)i++;if(i<a&&c.charCodeAt(i)!==10&&g)for(g=``,i=f,o=p;i<a&&G(c.charCodeAt(i));)i++;if(i<a&&c.charCodeAt(i)!==10)return!1;let _=Qh(c.slice(1,l));return _?r?!0:(e.env.references===void 0&&(e.env.references={}),e.env.references[_]===void 0&&(e.env.references[_]={title:g,href:d}),e.line=o,!0):!1}var Zg=`address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul`.split(`.`),Qg=RegExp(`^(?:<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"'=<>\`\\x00-\\x20]+|'[^']*'|"[^"]*"))?)*\\s*\\/?>|<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>|<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->|<[?][\\s\\S]*?[?]>|<![A-Za-z][^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)`),$g=RegExp(`^(?:<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"'=<>\`\\x00-\\x20]+|'[^']*'|"[^"]*"))?)*\\s*\\/?>|<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>)`),e_=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[RegExp(`^</?(`+Zg.join(`|`)+`)(?=(\\s|/?>|$))`,`i`),/^$/,!0],[RegExp($g.source+`\\s*$`),/^$/,!1]];function t_(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(i)!==60)return!1;let o=e.src.slice(i,a),s=0;for(;s<e_.length&&!e_[s][0].test(o);s++);if(s===e_.length)return!1;if(r)return e_[s][2];let c=t+1,l=e_[s][1].test(``);if(!e_[s][1].test(o)){for(;c<n&&!(e.sCount[c]<e.blkIndent&&(l||!e.isEmpty(c)));c++)if(i=e.bMarks[c]+e.tShift[c],a=e.eMarks[c],o=e.src.slice(i,a),e_[s][1].test(o)){o.length!==0&&c++;break}}e.line=c;let u=e.push(`html_block`,``,0);return u.map=[t,c],u.content=e.getLines(t,c,e.blkIndent,!0),!0}function n_(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let o=e.src.charCodeAt(i);if(o!==35||i>=a)return!1;let s=1;for(o=e.src.charCodeAt(++i);o===35&&i<a&&s<=6;)s++,o=e.src.charCodeAt(++i);if(s>6||i<a&&!G(o))return!1;if(r)return!0;a=e.skipSpacesBack(a,i);let c=e.skipCharsBack(a,35,i);c>i&&G(e.src.charCodeAt(c-1))&&(a=c),e.line=t+1;let l=e.push(`heading_open`,`h`+String(s),1);l.markup=`########`.slice(0,s),l.map=[t,e.line];let u=e.push(`inline`,``,0);u.content=eg(e.src.slice(i,a)),u.map=[t,e.line],u.children=[];let d=e.push(`heading_close`,`h`+String(s),-1);return d.markup=`########`.slice(0,s),!0}function r_(e,t,n){let r=e.md.block.ruler.getRules(`paragraph`);if(e.sCount[t]-e.blkIndent>=4)return!1;let i=e.parentType;e.parentType=`paragraph`;let a=0,o,s=t+1;for(;s<n&&!e.isEmpty(s);s++){if(e.sCount[s]-e.blkIndent>3)continue;if(e.sCount[s]>=e.blkIndent){let t=e.bMarks[s]+e.tShift[s],n=e.eMarks[s];if(t<n&&(o=e.src.charCodeAt(t),(o===45||o===61)&&(t=e.skipChars(t,o),t=e.skipSpaces(t),t>=n))){a=o===61?1:2;break}}if(e.sCount[s]<0)continue;let t=!1;for(let i=0,a=r.length;i<a;i++)if(r[i](e,s,n,!0)){t=!0;break}if(t)break}if(!a)return e.parentType=i,!1;let c=eg(e.getLines(t,s,e.blkIndent,!1));e.line=s+1;let l=e.push(`heading_open`,`h`+String(a),1);l.markup=String.fromCharCode(o),l.map=[t,e.line];let u=e.push(`inline`,``,0);u.content=c,u.map=[t,e.line-1],u.children=[];let d=e.push(`heading_close`,`h`+String(a),-1);return d.markup=String.fromCharCode(o),e.parentType=i,!0}function i_(e,t,n){let r=e.md.block.ruler.getRules(`paragraph`),i=e.parentType,a=t+1;for(e.parentType=`paragraph`;a<n&&!e.isEmpty(a);a++){if(e.sCount[a]-e.blkIndent>3||e.sCount[a]<0)continue;let t=!1;for(let i=0,o=r.length;i<o;i++)if(r[i](e,a,n,!0)){t=!0;break}if(t)break}let o=eg(e.getLines(t,a,e.blkIndent,!1));e.line=a;let s=e.push(`paragraph_open`,`p`,1);s.map=[t,e.line];let c=e.push(`inline`,``,0);return c.content=o,c.map=[t,e.line],c.children=[],e.push(`paragraph_close`,`p`,-1),e.parentType=i,!0}var a_=[[`table`,Vg,[`paragraph`,`reference`]],[`code`,Hg],[`fence`,Ug,[`paragraph`,`reference`,`blockquote`,`list`]],[`blockquote`,Wg,[`paragraph`,`reference`,`blockquote`,`list`]],[`hr`,Gg,[`paragraph`,`reference`,`blockquote`,`list`]],[`list`,Yg,[`paragraph`,`reference`,`blockquote`]],[`reference`,Xg],[`html_block`,t_,[`paragraph`,`reference`,`blockquote`]],[`heading`,n_,[`paragraph`,`reference`,`blockquote`]],[`lheading`,r_],[`paragraph`,i_]];function o_(){this.ruler=new cg;for(let e=0;e<a_.length;e++)this.ruler.push(a_[e][0],a_[e][1],{alt:(a_[e][2]||[]).slice()})}o_.prototype.tokenize=function(e,t,n){let r=this.ruler.getRules(``),i=r.length,a=e.md.options.maxNesting,o=t,s=!1;for(;o<n&&(e.line=o=e.skipEmptyLines(o),!(o>=n||e.sCount[o]<e.blkIndent));){if(e.level>=a){e.line=n;break}let t=e.line,c=!1;for(let a=0;a<i;a++)if(c=r[a](e,o,n,!1),c){if(t>=e.line)throw Error(`block rule didn't increment state.line`);break}if(!c)throw Error(`none of the block rules matched`);e.tight=!s,e.isEmpty(e.line-1)&&(s=!0),o=e.line,o<n&&e.isEmpty(o)&&(s=!0,o++,e.line=o)}},o_.prototype.parse=function(e,t,n,r){if(!e)return;let i=new this.State(e,t,n,r);this.tokenize(i,i.line,i.lineMax)},o_.prototype.State=Lg;function s_(e,t,n,r){this.src=e,this.env=n,this.md=t,this.tokens=r,this.tokens_meta=Array(r.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending=``,this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}s_.prototype.pushPending=function(){let e=new lg(`text`,``,0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending=``,e},s_.prototype.push=function(e,t,n){this.pending&&this.pushPending();let r=new lg(e,t,n),i=null;return n<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),r.level=this.level,n>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],i={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(r),this.tokens_meta.push(i),r},s_.prototype.scanDelims=function(e,t){let n=this.posMax,r=this.src.charCodeAt(e),i;if(e===0)i=32;else if(e===1)i=this.src.charCodeAt(0),(i&63488)==55296&&(i=65533);else if(i=this.src.charCodeAt(e-1),(i&64512)==56320){let t=this.src.charCodeAt(e-2);i=(t&64512)==55296?65536+(t-55296<<10)+(i-56320):65533}else(i&64512)==55296&&(i=65533);let a=e;for(;a<n&&this.src.charCodeAt(a)===r;)a++;let o=a-e,s=a<n?this.src.charCodeAt(a):32;if((s&64512)==55296){let e=this.src.charCodeAt(a+1);s=(e&64512)==56320?65536+(s-55296<<10)+(e-56320):65533}else(s&64512)==56320&&(s=65533);let c=Zh(i)||Xh(i),l=Zh(s)||Xh(s),u=Jh(i),d=Jh(s),f=!d&&(!l||u||c),p=!u&&(!c||d||l);return{can_open:f&&(t||!p||c),can_close:p&&(t||!f||l),length:o}},s_.prototype.Token=lg;function c_(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function l_(e,t){let n=e.pos;for(;n<e.posMax&&!c_(e.src.charCodeAt(n));)n++;return n===e.pos?!1:(t||(e.pending+=e.src.slice(e.pos,n)),e.pos=n,!0)}var u_=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function d_(e,t){if(!e.md.options.linkify||e.linkLevel>0)return!1;let n=e.pos,r=e.posMax;if(n+3>r||e.src.charCodeAt(n)!==58||e.src.charCodeAt(n+1)!==47||e.src.charCodeAt(n+2)!==47)return!1;let i=e.pending.match(u_);if(!i)return!1;let a=i[1],o=e.md.linkify.matchAtStart(e.src.slice(n-a.length));if(!o)return!1;let s=o.url;if(s.length<=a.length)return!1;let c=s.length;for(;c>0&&s.charCodeAt(c-1)===42;)c--;c!==s.length&&(s=s.slice(0,c));let l=e.md.normalizeLink(s);if(!e.md.validateLink(l))return!1;if(!t){e.pending=e.pending.slice(0,-a.length);let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,l]],t.markup=`linkify`,t.info=`auto`;let n=e.push(`text`,``,0);n.content=e.md.normalizeLinkText(s);let r=e.push(`link_close`,`a`,-1);r.markup=`linkify`,r.info=`auto`}return e.pos+=s.length-a.length,!0}function f_(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==10)return!1;let r=e.pending.length-1,i=e.posMax;if(!t)if(r>=0&&e.pending.charCodeAt(r)===32)if(r>=1&&e.pending.charCodeAt(r-1)===32){let t=r-1;for(;t>=1&&e.pending.charCodeAt(t-1)===32;)t--;e.pending=e.pending.slice(0,t),e.push(`hardbreak`,`br`,0)}else e.pending=e.pending.slice(0,-1),e.push(`softbreak`,`br`,0);else e.push(`softbreak`,`br`,0);for(n++;n<i&&G(e.src.charCodeAt(n));)n++;return e.pos=n,!0}var p_=[];for(let e=0;e<256;e++)p_.push(0);`\\!"#$%&'()*+,./:;<=>?@[]^_\`{|}~-`.split(``).forEach(function(e){p_[e.charCodeAt(0)]=1});function m_(e,t){let n=e.pos,r=e.posMax;if(e.src.charCodeAt(n)!==92||(n++,n>=r))return!1;let i=e.src.charCodeAt(n);if(i===10){for(t||e.push(`hardbreak`,`br`,0),n++;n<r&&(i=e.src.charCodeAt(n),G(i));)n++;return e.pos=n,!0}if(i===32){if(!t){let t=e.push(`text_special`,``,0);t.content=`\\`,t.markup=`\\`,t.info=`escape`}return e.pos=n,!0}let a=e.src[n];if(i>=55296&&i<=56319&&n+1<r){let t=e.src.charCodeAt(n+1);t>=56320&&t<=57343&&(a+=e.src[n+1],n++)}let o=`\\`+a;if(!t){let t=e.push(`text_special`,``,0);i<256&&p_[i]!==0?t.content=a:t.content=o,t.markup=o,t.info=`escape`}return e.pos=n+1,!0}function h_(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==96)return!1;let r=n;n++;let i=e.posMax;for(;n<i&&e.src.charCodeAt(n)===96;)n++;let a=e.src.slice(r,n),o=a.length;if(e.backticksScanned&&(e.backticks[o]||0)<=r)return t||(e.pending+=a),e.pos+=o,!0;let s=n,c;for(;(c=e.src.indexOf("`",s))!==-1;){for(s=c+1;s<i&&e.src.charCodeAt(s)===96;)s++;let r=s-c;if(r===o){if(!t){let t=e.push(`code_inline`,`code`,0);t.markup=a,t.content=e.src.slice(n,c).replace(/\n/g,` `).replace(/^ (.+) $/,`$1`)}return e.pos=s,!0}e.backticks[r]=c}return e.backticksScanned=!0,t||(e.pending+=a),e.pos+=o,!0}function g_(e,t){let n=e.pos,r=e.src.charCodeAt(n);if(t||r!==126)return!1;let i=e.scanDelims(e.pos,!0),a=i.length,o=String.fromCharCode(r);if(a<2)return!1;let s;a%2&&(s=e.push(`text`,``,0),s.content=o,a--);for(let t=0;t<a;t+=2)s=e.push(`text`,``,0),s.content=o+o,e.delimiters.push({marker:r,length:0,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close});return e.pos+=i.length,!0}function __(e,t){let n,r=[],i=t.length;for(let a=0;a<i;a++){let i=t[a];if(i.marker!==126||i.end===-1)continue;let o=t[i.end];n=e.tokens[i.token],n.type=`s_open`,n.tag=`s`,n.nesting=1,n.markup=`~~`,n.content=``,n=e.tokens[o.token],n.type=`s_close`,n.tag=`s`,n.nesting=-1,n.markup=`~~`,n.content=``,e.tokens[o.token-1].type===`text`&&e.tokens[o.token-1].content===`~`&&r.push(o.token-1)}for(;r.length;){let t=r.pop(),i=t+1;for(;i<e.tokens.length&&e.tokens[i].type===`s_close`;)i++;i--,t!==i&&(n=e.tokens[i],e.tokens[i]=e.tokens[t],e.tokens[t]=n)}}function v_(e){let t=e.tokens_meta,n=e.tokens_meta.length;__(e,e.delimiters);for(let r=0;r<n;r++)t[r]&&t[r].delimiters&&__(e,t[r].delimiters)}var y_={tokenize:g_,postProcess:v_};function b_(e,t){let n=e.pos,r=e.src.charCodeAt(n);if(t||r!==95&&r!==42)return!1;let i=e.scanDelims(e.pos,r===42);for(let t=0;t<i.length;t++){let t=e.push(`text`,``,0);t.content=String.fromCharCode(r),e.delimiters.push({marker:r,length:i.length,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close})}return e.pos+=i.length,!0}function x_(e,t){let n=t.length;for(let r=n-1;r>=0;r--){let n=t[r];if(n.marker!==95&&n.marker!==42||n.end===-1)continue;let i=t[n.end],a=r>0&&t[r-1].end===n.end+1&&t[r-1].marker===n.marker&&t[r-1].token===n.token-1&&t[n.end+1].token===i.token+1,o=String.fromCharCode(n.marker),s=e.tokens[n.token];s.type=a?`strong_open`:`em_open`,s.tag=a?`strong`:`em`,s.nesting=1,s.markup=a?o+o:o,s.content=``;let c=e.tokens[i.token];c.type=a?`strong_close`:`em_close`,c.tag=a?`strong`:`em`,c.nesting=-1,c.markup=a?o+o:o,c.content=``,a&&(e.tokens[t[r-1].token].content=``,e.tokens[t[n.end+1].token].content=``,r--)}}function S_(e){let t=e.tokens_meta,n=e.tokens_meta.length;x_(e,e.delimiters);for(let r=0;r<n;r++)t[r]&&t[r].delimiters&&x_(e,t[r].delimiters)}var C_={tokenize:b_,postProcess:S_};function w_(e,t){let n,r,i,a,o=``,s=``,c=e.pos,l=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;let u=e.pos,d=e.posMax,f=e.pos+1,p=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(p<0)return!1;let m=p+1;if(m<d&&e.src.charCodeAt(m)===40){for(l=!1,m++;m<d&&(n=e.src.charCodeAt(m),!(!G(n)&&n!==10));m++);if(m>=d)return!1;if(c=m,i=e.md.helpers.parseLinkDestination(e.src,m,e.posMax),i.ok){for(o=e.md.normalizeLink(i.str),e.md.validateLink(o)?m=i.pos:o=``,c=m;m<d&&(n=e.src.charCodeAt(m),!(!G(n)&&n!==10));m++);if(i=e.md.helpers.parseLinkTitle(e.src,m,e.posMax),m<d&&c!==m&&i.ok)for(s=i.str,m=i.pos;m<d&&(n=e.src.charCodeAt(m),!(!G(n)&&n!==10));m++);}(m>=d||e.src.charCodeAt(m)!==41)&&(l=!0),m++}if(l){if(e.env.references===void 0)return!1;if(m<d&&e.src.charCodeAt(m)===91?(c=m+1,m=e.md.helpers.parseLinkLabel(e,m),m>=0?r=e.src.slice(c,m++):m=p+1):m=p+1,r||=e.src.slice(f,p),a=e.env.references[Qh(r)],!a)return e.pos=u,!1;o=a.href,s=a.title}if(!t){e.pos=f,e.posMax=p;let t=e.push(`link_open`,`a`,1),n=[[`href`,o]];t.attrs=n,s&&n.push([`title`,s]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push(`link_close`,`a`,-1)}return e.pos=m,e.posMax=d,!0}function T_(e,t){let n,r,i,a,o,s,c,l,u=``,d=e.pos,f=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;let p=e.pos+2,m=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(m<0)return!1;if(a=m+1,a<f&&e.src.charCodeAt(a)===40){for(a++;a<f&&(n=e.src.charCodeAt(a),!(!G(n)&&n!==10));a++);if(a>=f)return!1;for(l=a,s=e.md.helpers.parseLinkDestination(e.src,a,e.posMax),s.ok&&(u=e.md.normalizeLink(s.str),e.md.validateLink(u)?a=s.pos:u=``),l=a;a<f&&(n=e.src.charCodeAt(a),!(!G(n)&&n!==10));a++);if(s=e.md.helpers.parseLinkTitle(e.src,a,e.posMax),a<f&&l!==a&&s.ok)for(c=s.str,a=s.pos;a<f&&(n=e.src.charCodeAt(a),!(!G(n)&&n!==10));a++);else c=``;if(a>=f||e.src.charCodeAt(a)!==41)return e.pos=d,!1;a++}else{if(e.env.references===void 0)return!1;if(a<f&&e.src.charCodeAt(a)===91?(l=a+1,a=e.md.helpers.parseLinkLabel(e,a),a>=0?i=e.src.slice(l,a++):a=m+1):a=m+1,i||=e.src.slice(p,m),o=e.env.references[Qh(i)],!o)return e.pos=d,!1;u=o.href,c=o.title}if(!t){r=e.src.slice(p,m);let t=[];e.md.inline.parse(r,e.md,e.env,t);let n=e.push(`image`,`img`,0),i=[[`src`,u],[`alt`,``]];n.attrs=i,n.children=t,n.content=r,c&&i.push([`title`,c])}return e.pos=a,e.posMax=f,!0}var E_=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,D_=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function O_(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==60)return!1;let r=e.pos,i=e.posMax;for(;;){if(++n>=i)return!1;let t=e.src.charCodeAt(n);if(t===60)return!1;if(t===62)break}let a=e.src.slice(r+1,n);if(D_.test(a)){let n=e.md.normalizeLink(a);if(!e.md.validateLink(n))return!1;if(!t){let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,n]],t.markup=`autolink`,t.info=`auto`;let r=e.push(`text`,``,0);r.content=e.md.normalizeLinkText(a);let i=e.push(`link_close`,`a`,-1);i.markup=`autolink`,i.info=`auto`}return e.pos+=a.length+2,!0}if(E_.test(a)){let n=e.md.normalizeLink(`mailto:`+a);if(!e.md.validateLink(n))return!1;if(!t){let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,n]],t.markup=`autolink`,t.info=`auto`;let r=e.push(`text`,``,0);r.content=e.md.normalizeLinkText(a);let i=e.push(`link_close`,`a`,-1);i.markup=`autolink`,i.info=`auto`}return e.pos+=a.length+2,!0}return!1}function k_(e){return/^<a[>\s]/i.test(e)}function A_(e){return/^<\/a\s*>/i.test(e)}function j_(e){let t=e|32;return t>=97&&t<=122}function M_(e,t){if(!e.md.options.html)return!1;let n=e.posMax,r=e.pos;if(e.src.charCodeAt(r)!==60||r+2>=n)return!1;let i=e.src.charCodeAt(r+1);if(i!==33&&i!==63&&i!==47&&!j_(i))return!1;let a=e.src.slice(r).match(Qg);if(!a)return!1;if(!t){let t=e.push(`html_inline`,``,0);t.content=a[0],k_(t.content)&&e.linkLevel++,A_(t.content)&&e.linkLevel--}return e.pos+=a[0].length,!0}var N_=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,P_=/^&([a-z][a-z0-9]{1,31});/i;function F_(e,t){let n=e.pos,r=e.posMax;if(e.src.charCodeAt(n)!==38||n+1>=r)return!1;if(e.src.charCodeAt(n+1)===35){let r=e.src.slice(n).match(N_);if(r){if(!t){let t=r[1][0].toLowerCase()===`x`?parseInt(r[1].slice(1),16):parseInt(r[1],10),n=e.push(`text_special`,``,0);n.content=Nh(t)?Ph(t):Ph(65533),n.markup=r[0],n.info=`entity`}return e.pos+=r[0].length,!0}}else{let r=e.src.slice(n).match(P_);if(r){let n=Th(r[0]);if(n!==r[0]){if(!t){let t=e.push(`text_special`,``,0);t.content=n,t.markup=r[0],t.info=`entity`}return e.pos+=r[0].length,!0}}}return!1}function I_(e){let t={},n=e.length;if(!n)return;let r=0,i=-2,a=[];for(let o=0;o<n;o++){let n=e[o];if(a.push(0),(e[r].marker!==n.marker||i!==n.token-1)&&(r=o),i=n.token,n.length=n.length||0,!n.close)continue;t.hasOwnProperty(n.marker)||(t[n.marker]=[-1,-1,-1,-1,-1,-1]);let s=t[n.marker][(n.open?3:0)+n.length%3],c=r-a[r]-1,l=c;for(;c>s;c-=a[c]+1){let t=e[c];if(t.marker===n.marker&&t.open&&t.end<0){let r=!1;if((t.close||n.open)&&(t.length+n.length)%3==0&&(t.length%3!=0||n.length%3!=0)&&(r=!0),!r){let r=c>0&&!e[c-1].open?a[c-1]+1:0;a[o]=o-c+r,a[c]=r,n.open=!1,t.end=o,t.close=!1,l=-1,i=-2;break}}}l!==-1&&(t[n.marker][(n.open?3:0)+(n.length||0)%3]=l)}}function L_(e){let t=e.tokens_meta,n=e.tokens_meta.length;I_(e.delimiters);for(let e=0;e<n;e++)t[e]&&t[e].delimiters&&I_(t[e].delimiters)}function R_(e){let t,n,r=0,i=e.tokens,a=e.tokens.length;for(t=n=0;t<a;t++)i[t].nesting<0&&r--,i[t].level=r,i[t].nesting>0&&r++,i[t].type===`text`&&t+1<a&&i[t+1].type===`text`?i[t+1].content=i[t].content+i[t+1].content:(t!==n&&(i[n]=i[t]),n++);t!==n&&(i.length=n)}var z_=[[`text`,l_],[`linkify`,d_],[`newline`,f_],[`escape`,m_],[`backticks`,h_],[`strikethrough`,y_.tokenize],[`emphasis`,C_.tokenize],[`link`,w_],[`image`,T_],[`autolink`,O_],[`html_inline`,M_],[`entity`,F_]],B_=[[`balance_pairs`,L_],[`strikethrough`,y_.postProcess],[`emphasis`,C_.postProcess],[`fragments_join`,R_]];function V_(){this.ruler=new cg;for(let e=0;e<z_.length;e++)this.ruler.push(z_[e][0],z_[e][1]);this.ruler2=new cg;for(let e=0;e<B_.length;e++)this.ruler2.push(B_[e][0],B_[e][1])}V_.prototype.skipToken=function(e){let t=e.pos,n=this.ruler.getRules(``),r=n.length,i=e.md.options.maxNesting,a=e.cache;if(a[t]!==void 0){e.pos=a[t];return}let o=!1;if(e.level<i){for(let i=0;i<r;i++)if(e.level++,o=n[i](e,!0),e.level--,o){if(t>=e.pos)throw Error(`inline rule didn't increment state.pos`);break}}else e.pos=e.posMax;o||e.pos++,a[t]=e.pos},V_.prototype.tokenize=function(e){let t=this.ruler.getRules(``),n=t.length,r=e.posMax,i=e.md.options.maxNesting;for(;e.pos<r;){let a=e.pos,o=!1;if(e.level<i){for(let r=0;r<n;r++)if(o=t[r](e,!1),o){if(a>=e.pos)throw Error(`inline rule didn't increment state.pos`);break}}if(o){if(e.pos>=r)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()},V_.prototype.parse=function(e,t,n,r){let i=new this.State(e,t,n,r);this.tokenize(i);let a=this.ruler2.getRules(``),o=a.length;for(let e=0;e<o;e++)a[e](i)},V_.prototype.State=s_;function H_(e){let t={};e||={},t.src_Any=th.source,t.src_Cc=nh.source,t.src_Z=oh.source,t.src_P=ih.source,t.src_ZPCc=[t.src_Z,t.src_P,t.src_Cc].join(`|`),t.src_ZCc=[t.src_Z,t.src_Cc].join(`|`);let n=`[><｜]`;return t.src_pseudo_letter=`(?:(?!${n}|${t.src_ZPCc})${t.src_Any})`,t.src_ip4=`(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)`,t.src_auth=`(?:(?:(?!${t.src_ZCc}|[@/\\[\\]()]).){1,50}@)?`,t.src_port=`(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?`,t.src_host_terminator=`(?=$|${n}|${t.src_ZPCc})(?!${e[`---`]?`-(?!--)|`:`-|`}_|:\\d|\\.-|\\.(?!$|${t.src_ZPCc}))`,t.src_path=`(?:[/?#](?:(?!${t.src_ZCc}|${n}|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!${t.src_ZCc}|\\]).)*\\]|\\((?:(?!${t.src_ZCc}|[)]).)*\\)|\\{(?:(?!${t.src_ZCc}|[}]).)*\\}|\\"(?:(?!${t.src_ZCc}|["]).)+\\"|\\'(?:(?!${t.src_ZCc}|[']).)+\\'|\\'(?=${t.src_pseudo_letter}|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!${t.src_ZCc}|[.]|$)|`+(e[`---`]?`\\-(?!--(?:[^-]|$))(?:-*)|`:`\\-+|`)+`,(?!${t.src_ZCc}|$)|;(?!${t.src_ZCc}|$)|\\!+(?!${t.src_ZCc}|[!]|$)|\\?(?!${t.src_ZCc}|[?]|$))+|\\/)?`,t.src_email_name=`[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]{0,63}`,t.src_xn=`xn--[a-z0-9\\-]{1,59}`,t.src_domain_root=`(?:`+t.src_xn+`|${t.src_pseudo_letter}{1,63})`,t.src_domain=`(?:`+t.src_xn+`|(?:${t.src_pseudo_letter})|(?:${t.src_pseudo_letter}(?:-|${t.src_pseudo_letter}){0,61}${t.src_pseudo_letter}))`,t.src_host=`(?:(?:(?:(?:${t.src_domain})\\.)*${t.src_domain}))`,t.tpl_host_fuzzy=`(?:`+t.src_ip4+`|(?:(?:(?:${t.src_domain})\\.)+(?:%TLDS%)))`,t.tpl_host_no_ip_fuzzy=`(?:(?:(?:${t.src_domain})\\.)+(?:%TLDS%))`,t.src_host_strict=t.src_host+t.src_host_terminator,t.tpl_host_fuzzy_strict=t.tpl_host_fuzzy+t.src_host_terminator,t.src_host_port_strict=t.src_host+t.src_port+t.src_host_terminator,t.tpl_host_port_fuzzy_strict=t.tpl_host_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_port_no_ip_fuzzy_strict=t.tpl_host_no_ip_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_fuzzy_test=`localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:${t.src_ZPCc}|>|$))`,t.tpl_email_fuzzy=`(^|${n}|"|\\(|${t.src_ZCc})(${t.src_email_name}@${t.tpl_host_fuzzy_strict})`,t.tpl_link_fuzzy=`(^|(?![.:/\\-_@])(?:[$+<=>^\`|\uff5c]|${t.src_ZPCc}))((?![$+<=>^\`|\uff5c])${t.tpl_host_port_fuzzy_strict}${t.src_path})`,t.tpl_link_no_ip_fuzzy=`(^|(?![.:/\\-_@])(?:[$+<=>^\`|\uff5c]|${t.src_ZPCc}))((?![$+<=>^\`|\uff5c])${t.tpl_host_port_no_ip_fuzzy_strict}${t.src_path})`,t}function U_(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){t&&Object.keys(t).forEach(function(n){e[n]=t[n]})}),e}function W_(e){return Object.prototype.toString.call(e)}function G_(e){return W_(e)===`[object String]`}function K_(e){return W_(e)===`[object Object]`}function q_(e){return W_(e)===`[object RegExp]`}function J_(e){return W_(e)===`[object Function]`}function Y_(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,`\\$&`)}var X_={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function Z_(e){return Object.keys(e||{}).reduce(function(e,t){return e||X_.hasOwnProperty(t)},!1)}var Q_={"http:":{validate:function(e,t,n){let r=e.slice(t);return n.re.http||(n.re.http=RegExp(`^\\/\\/${n.re.src_auth}${n.re.src_host_port_strict}${n.re.src_path}`,`i`)),n.re.http.test(r)?r.match(n.re.http)[0].length:0}},"https:":`http:`,"ftp:":`http:`,"//":{validate:function(e,t,n){let r=e.slice(t);return n.re.no_http||(n.re.no_http=RegExp(`^`+n.re.src_auth+`(?:localhost|(?:(?:${n.re.src_domain})\\.)+${n.re.src_domain_root})`+n.re.src_port+n.re.src_host_terminator+n.re.src_path,`i`)),n.re.no_http.test(r)?t>=3&&e[t-3]===`:`||t>=3&&e[t-3]===`/`?0:r.match(n.re.no_http)[0].length:0}},"mailto:":{validate:function(e,t,n){let r=e.slice(t);return n.re.mailto||(n.re.mailto=RegExp(`^${n.re.src_email_name}@${n.re.src_host_strict}`,`i`)),n.re.mailto.test(r)?r.match(n.re.mailto)[0].length:0}}},$_=`a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]`,ev=`biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф`.split(`|`);function tv(e){return function(t,n){let r=t.slice(n);return e.test(r)?r.match(e)[0].length:0}}function nv(){return function(e,t){t.normalize(e)}}function rv(e){let t=e.re=H_(e.__opts__),n=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||n.push($_),n.push(t.src_xn),t.src_tlds=n.join(`|`);function r(e){return e.replace(`%TLDS%`,t.src_tlds)}t.email_fuzzy=RegExp(r(t.tpl_email_fuzzy),`i`),t.email_fuzzy_global=RegExp(r(t.tpl_email_fuzzy),`ig`),t.link_fuzzy=RegExp(r(t.tpl_link_fuzzy),`i`),t.link_fuzzy_global=RegExp(r(t.tpl_link_fuzzy),`ig`),t.link_no_ip_fuzzy=RegExp(r(t.tpl_link_no_ip_fuzzy),`i`),t.link_no_ip_fuzzy_global=RegExp(r(t.tpl_link_no_ip_fuzzy),`ig`),t.host_fuzzy_test=RegExp(r(t.tpl_host_fuzzy_test),`i`);let i=[];e.__compiled__={};function a(e,t){throw Error(`(LinkifyIt) Invalid schema "${e}": ${t}`)}Object.keys(e.__schemas__).forEach(function(t){let n=e.__schemas__[t];if(n===null)return;let r={validate:null,link:null};if(e.__compiled__[t]=r,K_(n)){q_(n.validate)?r.validate=tv(n.validate):J_(n.validate)?r.validate=n.validate:a(t,n),J_(n.normalize)?r.normalize=n.normalize:n.normalize?a(t,n):r.normalize=nv();return}if(G_(n)){i.push(t);return}a(t,n)}),i.forEach(function(t){e.__compiled__[e.__schemas__[t]]&&(e.__compiled__[t].validate=e.__compiled__[e.__schemas__[t]].validate,e.__compiled__[t].normalize=e.__compiled__[e.__schemas__[t]].normalize)}),e.__compiled__[``]={validate:null,normalize:nv()};let o=Object.keys(e.__compiled__).filter(function(t){return t.length>0&&e.__compiled__[t]}).map(Y_).join(`|`);e.re.schema_test=RegExp(`(^|(?!_)(?:[><\uff5c]|${t.src_ZPCc}))(${o})`,`i`),e.re.schema_search=RegExp(`(^|(?!_)(?:[><\uff5c]|${t.src_ZPCc}))(${o})`,`ig`),e.re.schema_at_start=RegExp(`^${e.re.schema_search.source}`,`i`),e.re.pretest=RegExp(`(${e.re.schema_test.source})|(${e.re.host_fuzzy_test.source})|@`,`i`)}function iv(e,t,n,r){let i=e.slice(n,r);this.schema=t.toLowerCase(),this.index=n,this.lastIndex=r,this.raw=i,this.text=i,this.url=i}function av(e,t){if(!(this instanceof av))return new av(e,t);t||Z_(e)&&(t=e,e={}),this.__opts__=U_({},X_,t),this.__schemas__=U_({},Q_,e),this.__compiled__={},this.__tlds__=ev,this.__tlds_replaced__=!1,this.re={},rv(this)}av.prototype.add=function(e,t){return this.__schemas__[e]=t,rv(this),this},av.prototype.set=function(e){return this.__opts__=U_(this.__opts__,e),this},av.prototype.test=function(e){if(!e.length)return!1;let t,n;if(this.re.schema_test.test(e)){for(n=this.re.schema_search,n.lastIndex=0;(t=n.exec(e))!==null;)if(this.testSchemaAt(e,t[2],n.lastIndex))return!0}return!!(this.__opts__.fuzzyLink&&this.__compiled__[`http:`]&&e.search(this.re.host_fuzzy_test)>=0&&e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy)!==null||this.__opts__.fuzzyEmail&&this.__compiled__[`mailto:`]&&e.indexOf(`@`)>=0&&e.match(this.re.email_fuzzy)!==null)},av.prototype.pretest=function(e){return this.re.pretest.test(e)},av.prototype.testSchemaAt=function(e,t,n){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(e,n,this):0},av.prototype.match=function(e){let t=[],n=[],r=[],i=[],a,o,s;function c(e,t){return e?t?e.index===t.index?e.lastIndex>=t.lastIndex?e:t:e.index<t.index?e:t:e:t}if(!e.length)return null;if(this.re.schema_test.test(e))for(s=this.re.schema_search,s.lastIndex=0;(a=s.exec(e))!==null;)o=this.testSchemaAt(e,a[2],s.lastIndex),o&&n.push({schema:a[2],index:a.index+a[1].length,lastIndex:a.index+a[0].length+o});if(this.__opts__.fuzzyLink&&this.__compiled__[`http:`])for(s=this.__opts__.fuzzyIP?this.re.link_fuzzy_global:this.re.link_no_ip_fuzzy_global,s.lastIndex=0;(a=s.exec(e))!==null;)r.push({schema:``,index:a.index+a[1].length,lastIndex:a.index+a[0].length});if(this.__opts__.fuzzyEmail&&this.__compiled__[`mailto:`])for(s=this.re.email_fuzzy_global,s.lastIndex=0;(a=s.exec(e))!==null;)i.push({schema:`mailto:`,index:a.index+a[1].length,lastIndex:a.index+a[0].length});let l=[0,0,0],u=0;for(;;){let a=[n[l[0]],i[l[1]],r[l[2]]],o=c(c(a[0],a[1]),a[2]);if(!o)break;if(o===a[0]?l[0]++:o===a[1]?l[1]++:l[2]++,o.index<u)continue;let s=new iv(e,o.schema,o.index,o.lastIndex);this.__compiled__[s.schema].normalize(s,this),t.push(s),u=o.lastIndex}return t.length?t:null},av.prototype.matchAtStart=function(e){if(!e.length)return null;let t=this.re.schema_at_start.exec(e);if(!t)return null;let n=this.testSchemaAt(e,t[2],t[0].length);if(!n)return null;let r=new iv(e,t[2],t.index+t[1].length,t.index+t[0].length+n);return this.__compiled__[r.schema].normalize(r,this),r},av.prototype.tlds=function(e,t){return e=Array.isArray(e)?e:[e],t?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(e,t,n){return e!==n[t-1]}).reverse(),rv(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,rv(this),this)},av.prototype.normalize=function(e){e.schema||(e.url=`http://${e.url}`),e.schema===`mailto:`&&!/^mailto:/i.test(e.url)&&(e.url=`mailto:${e.url}`)},av.prototype.onCompile=function(){};var ov=2147483647,sv=36,cv=1,lv=26,uv=38,dv=700,fv=72,pv=128,mv=`-`,hv=/^xn--/,gv=/[^\0-\x7F]/,_v=/[\x2E\u3002\uFF0E\uFF61]/g,vv={overflow:`Overflow: input needs wider integers to process`,"not-basic":`Illegal input >= 0x80 (not a basic code point)`,"invalid-input":`Invalid input`},yv=sv-cv,bv=Math.floor,xv=String.fromCharCode;function Sv(e){throw RangeError(vv[e])}function Cv(e,t){let n=[],r=e.length;for(;r--;)n[r]=t(e[r]);return n}function wv(e,t){let n=e.split(`@`),r=``;n.length>1&&(r=n[0]+`@`,e=n[1]),e=e.replace(_v,`.`);let i=Cv(e.split(`.`),t).join(`.`);return r+i}function Tv(e){let t=[],n=0,r=e.length;for(;n<r;){let i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){let r=e.charCodeAt(n++);(r&64512)==56320?t.push(((i&1023)<<10)+(r&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}var Ev=e=>String.fromCodePoint(...e),Dv=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:sv},Ov=function(e,t){return e+22+75*(e<26)-((t!=0)<<5)},kv=function(e,t,n){let r=0;for(e=n?bv(e/dv):e>>1,e+=bv(e/t);e>455;r+=sv)e=bv(e/yv);return bv(r+36*e/(e+uv))},Av=function(e){let t=[],n=e.length,r=0,i=pv,a=fv,o=e.lastIndexOf(mv);o<0&&(o=0);for(let n=0;n<o;++n)e.charCodeAt(n)>=128&&Sv(`not-basic`),t.push(e.charCodeAt(n));for(let s=o>0?o+1:0;s<n;){let o=r;for(let t=1,i=sv;;i+=sv){s>=n&&Sv(`invalid-input`);let o=Dv(e.charCodeAt(s++));o>=sv&&Sv(`invalid-input`),o>bv((ov-r)/t)&&Sv(`overflow`),r+=o*t;let c=i<=a?cv:i>=a+lv?lv:i-a;if(o<c)break;let l=sv-c;t>bv(ov/l)&&Sv(`overflow`),t*=l}let c=t.length+1;a=kv(r-o,c,o==0),bv(r/c)>ov-i&&Sv(`overflow`),i+=bv(r/c),r%=c,t.splice(r++,0,i)}return String.fromCodePoint(...t)},jv=function(e){let t=[];e=Tv(e);let n=e.length,r=pv,i=0,a=fv;for(let n of e)n<128&&t.push(xv(n));let o=t.length,s=o;for(o&&t.push(mv);s<n;){let n=ov;for(let t of e)t>=r&&t<n&&(n=t);let c=s+1;n-r>bv((ov-i)/c)&&Sv(`overflow`),i+=(n-r)*c,r=n;for(let n of e)if(n<r&&++i>ov&&Sv(`overflow`),n===r){let e=i;for(let n=sv;;n+=sv){let r=n<=a?cv:n>=a+lv?lv:n-a;if(e<r)break;let i=e-r,o=sv-r;t.push(xv(Ov(r+i%o,0))),e=bv(i/o)}t.push(xv(Ov(e,0))),a=kv(i,c,s===o),i=0,++s}++i,++r}return t.join(``)},Mv={version:`2.3.1`,ucs2:{decode:Tv,encode:Ev},decode:Av,encode:jv,toASCII:function(e){return wv(e,function(e){return gv.test(e)?`xn--`+jv(e):e})},toUnicode:function(e){return wv(e,function(e){return hv.test(e)?Av(e.slice(4).toLowerCase()):e})}},Nv={default:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},zero:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:20},components:{core:{rules:[`normalize`,`block`,`inline`,`text_join`]},block:{rules:[`paragraph`]},inline:{rules:[`text`],rules2:[`balance_pairs`,`fragments_join`]}}},commonmark:{options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:20},components:{core:{rules:[`normalize`,`block`,`inline`,`text_join`]},block:{rules:[`blockquote`,`code`,`fence`,`heading`,`hr`,`html_block`,`lheading`,`list`,`reference`,`paragraph`]},inline:{rules:[`autolink`,`backticks`,`emphasis`,`entity`,`escape`,`html_inline`,`image`,`link`,`newline`,`text`],rules2:[`balance_pairs`,`emphasis`,`fragments_join`]}}}},Pv=/^(vbscript|javascript|file|data):/,Fv=/^data:image\/(gif|png|jpeg|webp);/;function Iv(e){let t=e.trim().toLowerCase();return!Pv.test(t)||Fv.test(t)}var Lv=[`http:`,`https:`,`mailto:`];function Rv(e){let t=$m(e,!0);if(t.hostname&&(!t.protocol||Lv.indexOf(t.protocol)>=0))try{t.hostname=Mv.toASCII(t.hostname)}catch{}return Bm(Vm(t))}function zv(e){let t=$m(e,!0);if(t.hostname&&(!t.protocol||Lv.indexOf(t.protocol)>=0))try{t.hostname=Mv.toUnicode(t.hostname)}catch{}return Lm(Vm(t),Lm.defaultChars+`%`)}function Bv(e,t){if(!(this instanceof Bv))return new Bv(e,t);t||Oh(e)||(t=e||{},e=`default`),this.inline=new V_,this.block=new o_,this.core=new Ig,this.renderer=new sg,this.linkify=new av,this.validateLink=Iv,this.normalizeLink=Rv,this.normalizeLinkText=zv,this.utils=Eh,this.helpers=jh({},ag),this.options={},this.configure(e),t&&this.set(t)}Bv.prototype.set=function(e){return jh(this.options,e),this},Bv.prototype.configure=function(e){let t=this;if(Oh(e)){let t=e;if(e=Nv[t],!e)throw Error('Wrong `markdown-it` preset "'+t+`", check name`)}if(!e)throw Error("Wrong `markdown-it` preset, can't be empty");return e.options&&t.set(e.options),e.components&&Object.keys(e.components).forEach(function(n){e.components[n].rules&&t[n].ruler.enableOnly(e.components[n].rules),e.components[n].rules2&&t[n].ruler2.enableOnly(e.components[n].rules2)}),this},Bv.prototype.enable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),[`core`,`block`,`inline`].forEach(function(t){n=n.concat(this[t].ruler.enable(e,!0))},this),n=n.concat(this.inline.ruler2.enable(e,!0));let r=e.filter(function(e){return n.indexOf(e)<0});if(r.length&&!t)throw Error(`MarkdownIt. Failed to enable unknown rule(s): `+r);return this},Bv.prototype.disable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),[`core`,`block`,`inline`].forEach(function(t){n=n.concat(this[t].ruler.disable(e,!0))},this),n=n.concat(this.inline.ruler2.disable(e,!0));let r=e.filter(function(e){return n.indexOf(e)<0});if(r.length&&!t)throw Error(`MarkdownIt. Failed to disable unknown rule(s): `+r);return this},Bv.prototype.use=function(e){let t=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,t),this},Bv.prototype.parse=function(e,t){if(typeof e!=`string`)throw Error(`Input data should be a String`);let n=new this.core.State(e,this,t);return this.core.process(n),n.tokens},Bv.prototype.render=function(e,t){return t||={},this.renderer.render(this.parse(e,t),this.options,t)},Bv.prototype.parseInline=function(e,t){let n=new this.core.State(e,this,t);return n.inlineMode=!0,this.core.process(n),n.tokens},Bv.prototype.renderInline=function(e,t){return t||={},this.renderer.render(this.parseInline(e,t),this.options,t)};var Vv=new Bv({html:!1,linkify:!0,typographer:!1,breaks:!0});function Hv(e){return Vv.render(e)}var Uv=Object.assign({"../../content/en/manual/pages/001.txt":Vl,"../../content/en/manual/pages/002.txt":Hl,"../../content/en/manual/pages/003.txt":Ul,"../../content/en/manual/pages/004.txt":Wl,"../../content/en/manual/pages/005.txt":Gl,"../../content/en/manual/pages/006.txt":Kl,"../../content/en/manual/pages/007.txt":ql,"../../content/en/manual/pages/008.txt":Jl,"../../content/en/manual/pages/009.txt":Yl,"../../content/en/manual/pages/010.txt":Xl,"../../content/en/manual/pages/011.txt":Zl,"../../content/en/manual/pages/012.txt":Ql,"../../content/en/manual/pages/013.txt":$l,"../../content/en/manual/pages/014.txt":eu,"../../content/en/manual/pages/015.txt":tu,"../../content/en/manual/pages/016.txt":nu,"../../content/en/manual/pages/017.txt":ru,"../../content/en/manual/pages/018.txt":iu,"../../content/en/manual/pages/019.txt":au,"../../content/en/manual/pages/020.txt":ou,"../../content/en/manual/pages/021.txt":su,"../../content/en/manual/pages/022.txt":cu,"../../content/en/manual/pages/023.txt":lu,"../../content/en/manual/pages/024.txt":uu,"../../content/en/manual/pages/025.txt":du,"../../content/en/manual/pages/026.txt":fu,"../../content/en/manual/pages/027.txt":pu,"../../content/en/manual/pages/028.txt":mu,"../../content/en/manual/pages/029.txt":hu,"../../content/en/manual/pages/030.txt":gu,"../../content/en/manual/pages/031.txt":_u,"../../content/en/manual/pages/032.txt":vu,"../../content/en/manual/pages/033.txt":yu,"../../content/en/manual/pages/034.txt":bu,"../../content/en/manual/pages/035.txt":xu,"../../content/en/manual/pages/036.txt":Su,"../../content/en/manual/pages/037.txt":Cu,"../../content/en/manual/pages/038.txt":wu,"../../content/en/manual/pages/039.txt":Tu,"../../content/en/manual/pages/040.txt":Eu,"../../content/en/manual/pages/041.txt":Du,"../../content/en/manual/pages/042.txt":Ou,"../../content/en/manual/pages/043.txt":ku,"../../content/en/manual/pages/044.txt":Au,"../../content/en/manual/pages/045.txt":ju,"../../content/en/manual/pages/046.txt":Mu,"../../content/en/manual/pages/047.txt":Nu,"../../content/en/manual/pages/048.txt":Pu,"../../content/en/manual/pages/049.txt":Fu,"../../content/en/manual/pages/050.txt":Iu,"../../content/en/manual/pages/051.txt":Lu,"../../content/en/manual/pages/052.txt":Ru,"../../content/en/manual/pages/053.txt":zu,"../../content/en/manual/pages/054.txt":Bu,"../../content/en/manual/pages/055.txt":Vu,"../../content/en/manual/pages/056.txt":Hu,"../../content/en/manual/pages/057.txt":Uu,"../../content/en/manual/pages/058.txt":Wu,"../../content/en/manual/pages/059.txt":Gu,"../../content/en/manual/pages/060.txt":Ku,"../../content/en/manual/pages/061.txt":qu,"../../content/en/manual/pages/062.txt":Ju,"../../content/en/manual/pages/063.txt":Yu,"../../content/en/manual/pages/064.txt":Xu,"../../content/en/manual/pages/065.txt":Zu,"../../content/en/manual/pages/066.txt":Qu,"../../content/en/manual/pages/067.txt":$u,"../../content/en/manual/pages/068.txt":ed,"../../content/en/manual/pages/069.txt":td,"../../content/en/manual/pages/070.txt":nd,"../../content/en/manual/pages/071.txt":rd,"../../content/en/manual/pages/072.txt":id,"../../content/en/manual/pages/073.txt":ad,"../../content/en/manual/pages/074.txt":od,"../../content/en/manual/pages/075.txt":sd,"../../content/en/manual/pages/076.txt":cd,"../../content/en/manual/pages/077.txt":ld,"../../content/en/manual/pages/078.txt":ud,"../../content/en/manual/pages/079.txt":dd,"../../content/en/manual/pages/080.txt":fd,"../../content/en/manual/pages/081.txt":pd,"../../content/en/manual/pages/082.txt":md,"../../content/en/manual/pages/083.txt":hd,"../../content/en/manual/pages/084.txt":gd,"../../content/en/manual/pages/085.txt":_d}),Wv=Object.assign({"../../content/en/manual/toc.yml":vd}),Gv=Object.assign({"../../content/en/quotes/001.txt":yd}),Kv=Object.assign({"../../content/en/names/names.yml":bd}),qv=Object.assign({"../../content/en/quran/verses.yml":xd}),Jv=Object.assign({"../../content/en/videos/videos.txt":Sd}),Yv=Object.assign({}),Xv=Object.assign({"../../content/en/activities/activities.yml":Cd}),Zv=Object.assign({"../../content/events/events.yml":wd});function Qv(e){return e.match(/content\/(en|fr|de|es)\//)?.[1]||`en`}function $v(e){let t=jm(e);return Array.isArray(t)?t:[]}var ey=new Map;for(let[e,t]of Object.entries(Wv))ey.set(Qv(e),$v(t));function ty(e,t){let n=ey.get(e)||[],r=[...[...new Set(n.map(e=>e.page))].sort((e,t)=>e-t)].reverse().find(e=>e<=t);return r===void 0?`AQRT Manual`:n.filter(e=>e.page===r).map(e=>e.title).join(` / `)}var ny=Object.entries(Uv).map(([e,t])=>{let n=e.match(/(\d{3})\.txt$/),r=Qv(e),i=Number(n?.[1]||0);return{locale:r,page:i,text:t,title:ty(r,i)}}).filter(e=>e.page>0).sort((e,t)=>e.locale.localeCompare(t.locale)||e.page-t.page),ry=new Map;for(let[e,t]of Object.entries(Gv)){let n=Qv(e),r=t.trim();if(!r)continue;let i=ry.get(n)||[];i.push(r),ry.set(n,i)}for(let e of ry.values())e.sort();var iy=new Map,ay=new Map;for(let[e,t]of Object.entries(Kv)){let n=Qv(e),r=jm(t),i=Array.isArray(r?.names)?r.names:[];iy.set(n,i),ay.set(n,{source:String(r?.source||``),sourceUrl:String(r?.sourceUrl||``)})}var oy=new Map;for(let[e,t]of Object.entries(qv)){let n=Qv(e),r=oy.get(n)||[];r.push(...$v(t).filter(e=>e.featured!==!1)),oy.set(n,r)}var sy=[];for(let[e,t]of Object.entries(Jv)){let n=Qv(e);t.split(/\r?\n/).forEach((t,r)=>{let i=t.trim();if(!i||i.startsWith(`#`))return;let a=i.indexOf(`|`);if(a<0)return;let o=i.slice(0,a).trim(),s=i.slice(a+1).trim();!o||!s||sy.push({id:`${n}-${e}-${r}`,name:o,url:s,locale:n})})}var cy=[];for(let[e,t]of Object.entries(Yv)){let n=e.match(/content\/(en|fr|de|es)\/weekly\/(\d{4}-W\d{2})-(summary|assignment|contemplation)\.md$/);n&&cy.push({locale:n[1],week:n[2],kind:n[3],raw:t,html:Hv(t)})}cy.sort((e,t)=>t.week.localeCompare(e.week));var ly=[];for(let e of Object.values(Xv))ly.push(...$v(e));ly.sort((e,t)=>t.week.localeCompare(e.week)||e.title.localeCompare(t.title));var uy=[];for(let e of Object.values(Zv))uy.push(...$v(e));var dy=Pm;function fy(){let e=[];for(let t of[`en`,`fr`,`de`,`es`])(ny.some(e=>e.locale===t)||(ry.get(t)?.length||0)>0||(oy.get(t)?.length||0)>0||cy.some(e=>e.locale===t))&&e.push(t);return e}var py=A(`en`),my=L(()=>fy());function hy(){function e(e){my.value.includes(e)&&(py.value=e)}return{activeLocale:py,locales:my,setLocale:e}}var gy=A(!1);function _y(){return{searchOpen:gy,openSearch:()=>{gy.value=!0},closeSearch:()=>{gy.value=!1}}}var vy={class:`version-footer`},yy=Sr({__name:`FooterVersion`,setup(e){let t=new Date(`2026-07-16T16:24:15.325Z`),n=new Intl.DateTimeFormat(`en-CA`,{year:`numeric`,month:`short`,day:`2-digit`}).format(t);return(e,t)=>(N(),P(`footer`,vy,[t[0]||=F(`span`,null,`AQRT Manual`,-1),t[1]||=F(`span`,{"aria-hidden":`true`},`·`,-1),F(`span`,null,`v`+E(j(`0.2.0`)),1),t[2]||=F(`span`,{"aria-hidden":`true`},`·`,-1),F(`span`,null,E(j(n)),1),t[3]||=F(`span`,{"aria-hidden":`true`},`·`,-1),F(`span`,null,E(j(`local`)),1)]))}}),by=`ENTRIES`,xy=`KEYS`,Sy=`VALUES`,K=``,Cy=class{constructor(e,t){let n=e._tree,r=Array.from(n.keys());this.set=e,this._type=t,this._path=r.length>0?[{node:n,keys:r}]:[]}next(){let e=this.dive();return this.backtrack(),e}dive(){if(this._path.length===0)return{done:!0,value:void 0};let{node:e,keys:t}=wy(this._path);if(wy(t)===K)return{done:!1,value:this.result()};let n=e.get(wy(t));return this._path.push({node:n,keys:Array.from(n.keys())}),this.dive()}backtrack(){if(this._path.length===0)return;let e=wy(this._path).keys;e.pop(),!(e.length>0)&&(this._path.pop(),this.backtrack())}key(){return this.set._prefix+this._path.map(({keys:e})=>wy(e)).filter(e=>e!==K).join(``)}value(){return wy(this._path).node.get(K)}result(){switch(this._type){case Sy:return this.value();case xy:return this.key();default:return[this.key(),this.value()]}}[Symbol.iterator](){return this}},wy=e=>e[e.length-1],Ty=(e,t,n)=>{let r=new Map;if(t===void 0)return r;let i=t.length+1,a=i+n,o=new Uint8Array(a*i).fill(n+1);for(let e=0;e<i;++e)o[e]=e;for(let e=1;e<a;++e)o[e*i]=e;return Ey(e,t,n,r,o,1,i,``),r},Ey=(e,t,n,r,i,a,o,s)=>{let c=a*o;key:for(let l of e.keys())if(l===K){let t=i[c-1];t<=n&&r.set(s,[e.get(l),t])}else{let c=a;for(let e=0;e<l.length;++e,++c){let r=l[e],a=o*c,s=a-o,u=i[a],d=Math.max(0,c-n-1),f=Math.min(o-1,c+n);for(let e=d;e<f;++e){let n=r!==t[e],o=i[s+e]+ +n,c=i[s+e+1]+1,l=i[a+e]+1,d=i[a+e+1]=Math.min(o,c,l);d<u&&(u=d)}if(u>n)continue key}Ey(e.get(l),t,n,r,i,c,o,s+l)}},Dy=class e{constructor(e=new Map,t=``){this._size=void 0,this._tree=e,this._prefix=t}atPrefix(t){if(!t.startsWith(this._prefix))throw Error(`Mismatched prefix`);let[n,r]=Oy(this._tree,t.slice(this._prefix.length));if(n===void 0){let[n,i]=Py(r);for(let r of n.keys())if(r!==K&&r.startsWith(i)){let a=new Map;return a.set(r.slice(i.length),n.get(r)),new e(a,t)}}return new e(n,t)}clear(){this._size=void 0,this._tree.clear()}delete(e){return this._size=void 0,jy(this._tree,e)}entries(){return new Cy(this,by)}forEach(e){for(let[t,n]of this)e(t,n,this)}fuzzyGet(e,t){return Ty(this._tree,e,t)}get(e){let t=ky(this._tree,e);return t===void 0?void 0:t.get(K)}has(e){let t=ky(this._tree,e);return t!==void 0&&t.has(K)}keys(){return new Cy(this,xy)}set(e,t){if(typeof e!=`string`)throw Error(`key must be a string`);return this._size=void 0,Ay(this._tree,e).set(K,t),this}get size(){if(this._size)return this._size;this._size=0;let e=this.entries();for(;!e.next().done;)this._size+=1;return this._size}update(e,t){if(typeof e!=`string`)throw Error(`key must be a string`);this._size=void 0;let n=Ay(this._tree,e);return n.set(K,t(n.get(K))),this}fetch(e,t){if(typeof e!=`string`)throw Error(`key must be a string`);this._size=void 0;let n=Ay(this._tree,e),r=n.get(K);return r===void 0&&n.set(K,r=t()),r}values(){return new Cy(this,Sy)}[Symbol.iterator](){return this.entries()}static from(t){let n=new e;for(let[e,r]of t)n.set(e,r);return n}static fromObject(t){return e.from(Object.entries(t))}},Oy=(e,t,n=[])=>{if(t.length===0||e==null)return[e,n];for(let r of e.keys())if(r!==K&&t.startsWith(r))return n.push([e,r]),Oy(e.get(r),t.slice(r.length),n);return n.push([e,t]),Oy(void 0,``,n)},ky=(e,t)=>{if(t.length===0||e==null)return e;for(let n of e.keys())if(n!==K&&t.startsWith(n))return ky(e.get(n),t.slice(n.length))},Ay=(e,t)=>{let n=t.length;outer:for(let r=0;e&&r<n;){for(let i of e.keys())if(i!==K&&t[r]===i[0]){let a=Math.min(n-r,i.length),o=1;for(;o<a&&t[r+o]===i[o];)++o;let s=e.get(i);if(o===i.length)e=s;else{let n=new Map;n.set(i.slice(o),s),e.set(t.slice(r,r+o),n),e.delete(i),e=n}r+=o;continue outer}let i=new Map;return e.set(t.slice(r),i),i}return e},jy=(e,t)=>{let[n,r]=Oy(e,t);if(n!==void 0){if(n.delete(K),n.size===0)My(r);else if(n.size===1){let[e,t]=n.entries().next().value;Ny(r,e,t)}}},My=e=>{if(e.length===0)return;let[t,n]=Py(e);if(t.delete(n),t.size===0)My(e.slice(0,-1));else if(t.size===1){let[n,r]=t.entries().next().value;n!==K&&Ny(e.slice(0,-1),n,r)}},Ny=(e,t,n)=>{if(e.length===0)return;let[r,i]=Py(e);r.set(i+t,n),r.delete(i)},Py=e=>e[e.length-1],Fy=`or`,Iy=`and`,Ly=`and_not`,Ry=class e{constructor(e){if(e?.fields==null)throw Error(`MiniSearch: option "fields" must be provided`);let t=e.autoVacuum==null||e.autoVacuum===!0?Yy:e.autoVacuum;this._options={...Wy,...e,autoVacuum:t,searchOptions:{...Gy,...e.searchOptions||{}},autoSuggestOptions:{...Ky,...e.autoSuggestOptions||{}}},this._index=new Dy,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=Jy,this.addFields(this._options.fields)}add(e){let{extractField:t,stringifyField:n,tokenize:r,processTerm:i,fields:a,idField:o}=this._options,s=t(e,o);if(s==null)throw Error(`MiniSearch: document does not have ID field "${o}"`);if(this._idToShortId.has(s))throw Error(`MiniSearch: duplicate ID ${s}`);let c=this.addDocumentId(s);this.saveStoredFields(c,e);for(let o of a){let a=t(e,o);if(a==null)continue;let s=r(n(a,o),o),l=this._fieldIds[o],u=new Set(s).size;this.addFieldLength(c,l,this._documentCount-1,u);for(let e of s){let t=i(e,o);if(Array.isArray(t))for(let e of t)this.addTerm(l,c,e);else t&&this.addTerm(l,c,t)}}}addAll(e){for(let t of e)this.add(t)}addAllAsync(e,t={}){let{chunkSize:n=10}=t,r={chunk:[],promise:Promise.resolve()},{chunk:i,promise:a}=e.reduce(({chunk:e,promise:t},r,i)=>(e.push(r),(i+1)%n===0?{chunk:[],promise:t.then(()=>new Promise(e=>setTimeout(e,0))).then(()=>this.addAll(e))}:{chunk:e,promise:t}),r);return a.then(()=>this.addAll(i))}remove(e){let{tokenize:t,processTerm:n,extractField:r,stringifyField:i,fields:a,idField:o}=this._options,s=r(e,o);if(s==null)throw Error(`MiniSearch: document does not have ID field "${o}"`);let c=this._idToShortId.get(s);if(c==null)throw Error(`MiniSearch: cannot remove document with ID ${s}: it is not in the index`);for(let o of a){let a=r(e,o);if(a==null)continue;let s=t(i(a,o),o),l=this._fieldIds[o],u=new Set(s).size;this.removeFieldLength(c,l,this._documentCount,u);for(let e of s){let t=n(e,o);if(Array.isArray(t))for(let e of t)this.removeTerm(l,c,e);else t&&this.removeTerm(l,c,t)}}this._storedFields.delete(c),this._documentIds.delete(c),this._idToShortId.delete(s),this._fieldLength.delete(c),--this._documentCount}removeAll(e){if(e)for(let t of e)this.remove(t);else if(arguments.length>0)throw Error(`Expected documents to be present. Omit the argument to remove all documents.`);else this._index=new Dy,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldLength=new Map,this._avgFieldLength=[],this._storedFields=new Map,this._nextId=0}discard(e){let t=this._idToShortId.get(e);if(t==null)throw Error(`MiniSearch: cannot discard document with ID ${e}: it is not in the index`);this._idToShortId.delete(e),this._documentIds.delete(t),this._storedFields.delete(t),(this._fieldLength.get(t)||[]).forEach((e,n)=>{this.removeFieldLength(t,n,this._documentCount,e)}),this._fieldLength.delete(t),--this._documentCount,this._dirtCount+=1,this.maybeAutoVacuum()}maybeAutoVacuum(){if(this._options.autoVacuum===!1)return;let{minDirtFactor:e,minDirtCount:t,batchSize:n,batchWait:r}=this._options.autoVacuum;this.conditionalVacuum({batchSize:n,batchWait:r},{minDirtCount:t,minDirtFactor:e})}discardAll(e){let t=this._options.autoVacuum;try{this._options.autoVacuum=!1;for(let t of e)this.discard(t)}finally{this._options.autoVacuum=t}this.maybeAutoVacuum()}replace(e){let{idField:t,extractField:n}=this._options,r=n(e,t);this.discard(r),this.add(e)}vacuum(e={}){return this.conditionalVacuum(e)}conditionalVacuum(e,t){return this._currentVacuum?(this._enqueuedVacuumConditions=this._enqueuedVacuumConditions&&t,this._enqueuedVacuum??=this._currentVacuum.then(()=>{let t=this._enqueuedVacuumConditions;return this._enqueuedVacuumConditions=Jy,this.performVacuuming(e,t)}),this._enqueuedVacuum):this.vacuumConditionsMet(t)===!1?Promise.resolve():(this._currentVacuum=this.performVacuuming(e),this._currentVacuum)}async performVacuuming(e,t){let n=this._dirtCount;if(this.vacuumConditionsMet(t)){let t=e.batchSize||qy.batchSize,r=e.batchWait||qy.batchWait,i=1;for(let[e,n]of this._index){for(let[e,t]of n)for(let[r]of t)this._documentIds.has(r)||(t.size<=1?n.delete(e):t.delete(r));this._index.get(e).size===0&&this._index.delete(e),i%t===0&&await new Promise(e=>setTimeout(e,r)),i+=1}this._dirtCount-=n}await null,this._currentVacuum=this._enqueuedVacuum,this._enqueuedVacuum=null}vacuumConditionsMet(e){if(e==null)return!0;let{minDirtCount:t,minDirtFactor:n}=e;return t||=Yy.minDirtCount,n||=Yy.minDirtFactor,this.dirtCount>=t&&this.dirtFactor>=n}get isVacuuming(){return this._currentVacuum!=null}get dirtCount(){return this._dirtCount}get dirtFactor(){return this._dirtCount/(1+this._documentCount+this._dirtCount)}has(e){return this._idToShortId.has(e)}getStoredFields(e){let t=this._idToShortId.get(e);if(t!=null)return this._storedFields.get(t)}search(t,n={}){let{searchOptions:r}=this._options,i={...r,...n},a=this.executeQuery(t,n),o=[];for(let[e,{score:t,terms:n,match:r}]of a){let a=n.length||1,s={id:this._documentIds.get(e),score:t*a,terms:Object.keys(r),queryTerms:n,match:r};Object.assign(s,this._storedFields.get(e)),(i.filter==null||i.filter(s))&&o.push(s)}return t===e.wildcard&&i.boostDocument==null||o.sort(Qy),o}autoSuggest(e,t={}){t={...this._options.autoSuggestOptions,...t};let n=new Map;for(let{score:r,terms:i}of this.search(e,t)){let e=i.join(` `),t=n.get(e);t==null?n.set(e,{score:r,terms:i,count:1}):(t.score+=r,t.count+=1)}let r=[];for(let[e,{score:t,terms:i,count:a}]of n)r.push({suggestion:e,terms:i,score:t/a});return r.sort(Qy),r}get documentCount(){return this._documentCount}get termCount(){return this._index.size}static loadJSON(e,t){if(t==null)throw Error(`MiniSearch: loadJSON should be given the same options used when serializing the index`);return this.loadJS(JSON.parse(e),t)}static async loadJSONAsync(e,t){if(t==null)throw Error(`MiniSearch: loadJSON should be given the same options used when serializing the index`);return this.loadJSAsync(JSON.parse(e),t)}static getDefault(e){if(Wy.hasOwnProperty(e))return zy(Wy,e);throw Error(`MiniSearch: unknown option "${e}"`)}static loadJS(e,t){let{index:n,documentIds:r,fieldLength:i,storedFields:a,serializationVersion:o}=e,s=this.instantiateMiniSearch(e,t);s._documentIds=eb(r),s._fieldLength=eb(i),s._storedFields=eb(a);for(let[e,t]of s._documentIds)s._idToShortId.set(t,e);for(let[e,t]of n){let n=new Map;for(let e of Object.keys(t)){let r=t[e];o===1&&(r=r.ds),n.set(parseInt(e,10),eb(r))}s._index.set(e,n)}return s}static async loadJSAsync(e,t){let{index:n,documentIds:r,fieldLength:i,storedFields:a,serializationVersion:o}=e,s=this.instantiateMiniSearch(e,t);s._documentIds=await tb(r),s._fieldLength=await tb(i),s._storedFields=await tb(a);for(let[e,t]of s._documentIds)s._idToShortId.set(t,e);let c=0;for(let[e,t]of n){let n=new Map;for(let e of Object.keys(t)){let r=t[e];o===1&&(r=r.ds),n.set(parseInt(e,10),await tb(r))}++c%1e3==0&&await nb(0),s._index.set(e,n)}return s}static instantiateMiniSearch(t,n){let{documentCount:r,nextId:i,fieldIds:a,averageFieldLength:o,dirtCount:s,serializationVersion:c}=t;if(c!==1&&c!==2)throw Error(`MiniSearch: cannot deserialize an index created with an incompatible version`);let l=new e(n);return l._documentCount=r,l._nextId=i,l._idToShortId=new Map,l._fieldIds=a,l._avgFieldLength=o,l._dirtCount=s||0,l._index=new Dy,l}executeQuery(t,n={}){if(t===e.wildcard)return this.executeWildcardQuery(n);if(typeof t!=`string`){let e={...n,...t,queries:void 0},r=t.queries.map(t=>this.executeQuery(t,e));return this.combineResults(r,e.combineWith)}let{tokenize:r,processTerm:i,searchOptions:a}=this._options,o={tokenize:r,processTerm:i,...a,...n},{tokenize:s,processTerm:c}=o,l=s(t).flatMap(e=>c(e)).filter(e=>!!e).map(Uy(o)).map(e=>this.executeQuerySpec(e,o));return this.combineResults(l,o.combineWith)}executeQuerySpec(e,t){let n={...this._options.searchOptions,...t},r=(n.fields||this._options.fields).reduce((e,t)=>({...e,[t]:zy(n.boost,t)||1}),{}),{boostDocument:i,weights:a,maxFuzzy:o,bm25:s}=n,{fuzzy:c,prefix:l}={...Gy.weights,...a},u=this._index.get(e.term),d=this.termResults(e.term,e.term,1,e.termBoost,u,r,i,s),f,p;if(e.prefix&&(f=this._index.atPrefix(e.term)),e.fuzzy){let t=e.fuzzy===!0?.2:e.fuzzy,n=t<1?Math.min(o,Math.round(e.term.length*t)):t;n&&(p=this._index.fuzzyGet(e.term,n))}if(f)for(let[t,n]of f){let a=t.length-e.term.length;if(!a)continue;p?.delete(t);let o=l*t.length/(t.length+.3*a);this.termResults(e.term,t,o,e.termBoost,n,r,i,s,d)}if(p)for(let t of p.keys()){let[n,a]=p.get(t);if(!a)continue;let o=c*t.length/(t.length+a);this.termResults(e.term,t,o,e.termBoost,n,r,i,s,d)}return d}executeWildcardQuery(e){let t=new Map,n={...this._options.searchOptions,...e};for(let[e,r]of this._documentIds){let i=n.boostDocument?n.boostDocument(r,``,this._storedFields.get(e)):1;t.set(e,{score:i,terms:[],match:{}})}return t}combineResults(e,t=Fy){if(e.length===0)return new Map;let n=By[t.toLowerCase()];if(!n)throw Error(`Invalid combination operator: ${t}`);return e.reduce(n)||new Map}toJSON(){let e=[];for(let[t,n]of this._index){let r={};for(let[e,t]of n)r[e]=Object.fromEntries(t);e.push([t,r])}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:e,serializationVersion:2}}termResults(e,t,n,r,i,a,o,s,c=new Map){if(i==null)return c;for(let l of Object.keys(a)){let u=a[l],d=this._fieldIds[l],f=i.get(d);if(f==null)continue;let p=f.size,m=this._avgFieldLength[d];for(let i of f.keys()){if(!this._documentIds.has(i)){this.removeTerm(d,i,t),--p;continue}let a=o?o(this._documentIds.get(i),t,this._storedFields.get(i)):1;if(!a)continue;let h=f.get(i),g=this._fieldLength.get(i)[d],_=Hy(h,p,this._documentCount,g,m,s),v=n*r*u*a*_,y=c.get(i);if(y){y.score+=v,Xy(y.terms,e);let n=zy(y.match,t);n?n.push(l):y.match[t]=[l]}else c.set(i,{score:v,terms:[e],match:{[t]:[l]}})}}return c}addTerm(e,t,n){let r=this._index.fetch(n,$y),i=r.get(e);if(i==null)i=new Map,i.set(t,1),r.set(e,i);else{let e=i.get(t);i.set(t,(e||0)+1)}}removeTerm(e,t,n){if(!this._index.has(n)){this.warnDocumentChanged(t,e,n);return}let r=this._index.fetch(n,$y),i=r.get(e);i==null||i.get(t)==null?this.warnDocumentChanged(t,e,n):i.get(t)<=1?i.size<=1?r.delete(e):i.delete(t):i.set(t,i.get(t)-1),this._index.get(n).size===0&&this._index.delete(n)}warnDocumentChanged(e,t,n){for(let r of Object.keys(this._fieldIds))if(this._fieldIds[r]===t){this._options.logger(`warn`,`MiniSearch: document with ID ${this._documentIds.get(e)} has changed before removal: term "${n}" was not present in field "${r}". Removing a document after it has changed can corrupt the index!`,`version_conflict`);return}}addDocumentId(e){let t=this._nextId;return this._idToShortId.set(e,t),this._documentIds.set(t,e),this._documentCount+=1,this._nextId+=1,t}addFields(e){for(let t=0;t<e.length;t++)this._fieldIds[e[t]]=t}addFieldLength(e,t,n,r){let i=this._fieldLength.get(e);i??this._fieldLength.set(e,i=[]),i[t]=r;let a=(this._avgFieldLength[t]||0)*n+r;this._avgFieldLength[t]=a/(n+1)}removeFieldLength(e,t,n,r){if(n===1){this._avgFieldLength[t]=0;return}let i=this._avgFieldLength[t]*n-r;this._avgFieldLength[t]=i/(n-1)}saveStoredFields(e,t){let{storeFields:n,extractField:r}=this._options;if(n==null||n.length===0)return;let i=this._storedFields.get(e);i??this._storedFields.set(e,i={});for(let e of n){let n=r(t,e);n!==void 0&&(i[e]=n)}}};Ry.wildcard=Symbol(`*`);var zy=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0,By={[Fy]:(e,t)=>{for(let n of t.keys()){let r=e.get(n);if(r==null)e.set(n,t.get(n));else{let{score:e,terms:i,match:a}=t.get(n);r.score+=e,r.match=Object.assign(r.match,a),Zy(r.terms,i)}}return e},[Iy]:(e,t)=>{let n=new Map;for(let r of t.keys()){let i=e.get(r);if(i==null)continue;let{score:a,terms:o,match:s}=t.get(r);Zy(i.terms,o),n.set(r,{score:i.score+a,terms:i.terms,match:Object.assign(i.match,s)})}return n},[Ly]:(e,t)=>{for(let n of t.keys())e.delete(n);return e}},Vy={k:1.2,b:.7,d:.5},Hy=(e,t,n,r,i,a)=>{let{k:o,b:s,d:c}=a;return Math.log(1+(n-t+.5)/(t+.5))*(c+e*(o+1)/(e+o*(1-s+s*r/i)))},Uy=e=>(t,n,r)=>({term:t,fuzzy:typeof e.fuzzy==`function`?e.fuzzy(t,n,r):e.fuzzy||!1,prefix:typeof e.prefix==`function`?e.prefix(t,n,r):e.prefix===!0,termBoost:typeof e.boostTerm==`function`?e.boostTerm(t,n,r):1}),Wy={idField:`id`,extractField:(e,t)=>e[t],stringifyField:(e,t)=>e.toString(),tokenize:e=>e.split(rb),processTerm:e=>e.toLowerCase(),fields:void 0,searchOptions:void 0,storeFields:[],logger:(e,t)=>{typeof(console==null?void 0:console[e])==`function`&&console[e](t)},autoVacuum:!0},Gy={combineWith:Fy,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:Vy},Ky={combineWith:Iy,prefix:(e,t,n)=>t===n.length-1},qy={batchSize:1e3,batchWait:10},Jy={minDirtFactor:.1,minDirtCount:20},Yy={...qy,...Jy},Xy=(e,t)=>{e.includes(t)||e.push(t)},Zy=(e,t)=>{for(let n of t)e.includes(n)||e.push(n)},Qy=({score:e},{score:t})=>t-e,$y=()=>new Map,eb=e=>{let t=new Map;for(let n of Object.keys(e))t.set(parseInt(n,10),e[n]);return t},tb=async e=>{let t=new Map,n=0;for(let r of Object.keys(e))t.set(parseInt(r,10),e[r]),++n%1e3==0&&await nb(0);return t},nb=e=>new Promise(t=>setTimeout(t,e)),rb=/[\n\r\p{Z}\p{P}]+/u,ib=null,ab=null;function ob(e){return e.replace(/```[\s\S]*?```/g,` `).replace(/[#>*_`\[\]()~-]/g,` `).replace(/\s+/g,` `).trim()}function sb(){let e=ny.map(e=>({id:`manual-${e.locale}-${e.page}`,title:`${e.title} · ${e.page}`,body:e.text,type:`Manual`,route:`/manual/page/${e.page}`,meta:e.locale}));for(let t of cy)e.push({id:`weekly-${t.locale}-${t.week}-${t.kind}`,title:`${t.week} · ${t.kind}`,body:ob(t.raw),type:`Weekly`,route:`/weekly/${t.kind}`,meta:t.locale});for(let t of sy)e.push({id:`video-${t.id}`,title:t.name,body:t.url,type:`Videos`,route:`/videos`,meta:t.locale});ly.forEach((t,n)=>e.push({id:`activity-${n}`,title:t.title,body:`${t.week} ${t.url}`,type:`Activities`,route:`/activities`,meta:t.week})),uy.forEach((t,n)=>e.push({id:`event-${t.id||n}`,title:t.title,body:[t.date,t.hijriDay,t.hijriMonth,t.start,t.timezone].filter(Boolean).join(` `),type:`Events`,route:`/`,meta:t.calendar}));for(let[t,n]of ry.entries())n.forEach((n,r)=>e.push({id:`quote-${t}-${r}`,title:`Quote`,body:n,type:`Home`,route:`/`,meta:t}));for(let[t,n]of iy.entries())n.forEach(n=>e.push({id:`name-${t}-${n.number}`,title:`${n.number}. ${n.transliteration}`,body:`${n.arabic} ${n.transliteration} ${n.meaning}`,type:`99 Names`,route:`/names?name=${n.number}`,meta:t}));for(let[t,n]of oy.entries())n.forEach(n=>e.push({id:`quran-${t}-${n.id}`,title:n.reference,body:n.text,type:`Quran`,route:`/`,meta:t}));return e}function cb(){ab&&ib||(ib=sb(),ab=new Ry({fields:[`title`,`body`,`type`,`meta`],storeFields:[`title`,`body`,`type`,`route`,`meta`],searchOptions:{boost:{title:3,type:1.5},fuzzy:.2,prefix:!0}}),ab.addAll(ib))}function lb(e,t){let n=e.replace(/\s+/g,` `).trim();if(!n)return``;let r=t.trim().split(/\s+/)[0]?.toLocaleLowerCase()||``,i=r?n.toLocaleLowerCase().indexOf(r):-1,a=i>80?i-80:0,o=Math.min(n.length,a+220);return`${a>0?`…`:``}${n.slice(a,o)}${o<n.length?`…`:``}`}function ub(e,t,n=30){let r=e.trim();return r?(cb(),ab.search(r,{filter:e=>!e.meta||e.meta===t||![`en`,`fr`,`de`,`es`].includes(String(e.meta))}).slice(0,n).map(e=>({id:String(e.id),title:String(e.title||``),type:String(e.type||``),route:String(e.route||`/`),meta:e.meta?String(e.meta):void 0,snippet:lb(String(e.body||``),r),score:e.score}))):[]}var db={class:`search-panel`},fb={class:`search-field-wrap`},pb={class:`search-results`},mb=[`onClick`],hb={class:`search-result-type`},gb=Sr({__name:`GlobalSearch`,setup(e){let t=A(``),n=A(null),r=tc(),{activeLocale:i}=hy(),{searchOpen:a,closeSearch:o}=_y(),s=L(()=>ub(t.value,i.value));Un(a,async e=>{e&&(t.value=``,await wn(),n.value?.focus())});function c(e){o(),r.push(e)}return(e,r)=>(N(),ba(ir,{to:`body`},[j(a)?(N(),P(`div`,{key:0,class:`search-veil`,role:`dialog`,"aria-modal":`true`,"aria-label":`Search`,onClick:r[3]||=Cs((...e)=>j(o)&&j(o)(...e),[`self`])},[F(`section`,db,[F(`div`,fb,[r[4]||=F(`span`,{class:`search-glyph`,"aria-hidden":`true`},`⌕`,-1),Ln(F(`input`,{ref_key:`input`,ref:n,"onUpdate:modelValue":r[0]||=e=>t.value=e,class:`search-field`,type:`search`,placeholder:`Search`,autocomplete:`off`,onKeydown:r[1]||=Ts((...e)=>j(o)&&j(o)(...e),[`esc`])},null,544),[[gs,t.value]]),F(`button`,{class:`round-button`,type:`button`,"aria-label":`Close`,onClick:r[2]||=(...e)=>j(o)&&j(o)(...e)},`×`)]),F(`div`,pb,[(N(!0),P(M,null,Zr(s.value,e=>(N(),P(`button`,{key:e.id,class:`search-result`,type:`button`,onClick:t=>c(e.route)},[F(`span`,hb,E(e.type),1),F(`strong`,null,E(e.title),1),F(`span`,null,E(e.snippet),1)],8,mb))),128))])])])):Aa(``,!0)]))}}),_b={class:`app-frame`},vb={class:`side-rail`},yb={class:`rail-nav`,"aria-label":`Main navigation`},bb={class:`rail-mark`,"aria-hidden":`true`},xb={class:`app-column`},Sb={class:`top-ribbon`},Cb={class:`ribbon-actions`},wb={class:`language-switch`,"aria-label":`Language`},Tb=[`disabled`,`onClick`],Eb={class:`mobile-more dropdown dropdown-end`},Db={class:`dropdown-content menu mobile-more-menu`},Ob={class:`page-stage`},kb={class:`bottom-dock`,"aria-label":`Mobile navigation`},Ab={"aria-hidden":`true`},jb=Sr({__name:`AppShell`,setup(e){let{activeLocale:t,locales:n,setLocale:r}=hy(),{openSearch:i}=_y(),a=[`en`,`fr`,`de`,`es`],o=`/aqrt-emblem.png`,s=[{to:`/`,label:`Home`,mark:`◈`},{to:`/manual`,label:`Manual`,mark:`§`},{to:`/names`,label:`99 Names`,mark:`٩٩`},{to:`/videos`,label:`Videos`,mark:`▶`},{to:`/weekly`,label:`Weekly`,mark:`Ⅶ`},{to:`/activities`,label:`Activities`,mark:`↗`},{to:`/teacher`,label:`Teacher's Corner`,mark:`⌑`},{to:`/links`,label:`Links`,mark:`∞`},{to:`/contact`,label:`Contact`,mark:`✦`}],c=s.filter(e=>[`/`,`/manual`,`/videos`,`/weekly`,`/activities`].includes(e.to)),l=s.filter(e=>!c.includes(e));return(e,u)=>(N(),P(`div`,_b,[F(`aside`,vb,[I(j(Ml),{class:`brand-seal`,to:`/`,"aria-label":`AQRT Manual`},{default:In(()=>[F(`img`,{src:o,alt:``,class:`brand-emblem`}),u[2]||=F(`span`,null,`AQRT Manual`,-1)]),_:1}),F(`nav`,yb,[(N(),P(M,null,Zr(s,e=>I(j(Ml),{key:e.to,to:e.to,class:`rail-link`},{default:In(()=>[F(`span`,bb,E(e.mark),1),F(`span`,null,E(e.label),1)]),_:2},1032,[`to`])),64))]),F(`button`,{class:`rail-search`,type:`button`,onClick:u[0]||=(...e)=>j(i)&&j(i)(...e)},[...u[3]||=[F(`span`,{"aria-hidden":`true`},`⌕`,-1),F(`span`,null,`Search`,-1)]])]),F(`div`,xb,[F(`header`,Sb,[I(j(Ml),{to:`/`,class:`mobile-brand`},{default:In(()=>[F(`img`,{src:o,alt:``}),u[4]||=F(`span`,null,`AQRT Manual`,-1)]),_:1}),F(`div`,Cb,[F(`div`,wb,[(N(),P(M,null,Zr(a,e=>F(`button`,{key:e,type:`button`,disabled:!j(n).includes(e),class:xe({active:j(t)===e}),onClick:t=>j(r)(e)},E(e.toUpperCase()),11,Tb)),64))]),F(`button`,{class:`round-button`,type:`button`,"aria-label":`Search`,onClick:u[1]||=(...e)=>j(i)&&j(i)(...e)},`⌕`),F(`details`,Eb,[u[5]||=F(`summary`,{class:`round-button`,"aria-label":`More`},`⋯`,-1),F(`ul`,Db,[(N(!0),P(M,null,Zr(j(l),e=>(N(),P(`li`,{key:e.to},[I(j(Ml),{to:e.to},{default:In(()=>[Oa(E(e.label),1)]),_:2},1032,[`to`])]))),128))])])])]),F(`main`,Ob,[I(j(zl))]),I(yy)]),F(`nav`,kb,[(N(!0),P(M,null,Zr(j(c),e=>(N(),ba(j(Ml),{key:e.to,to:e.to},{default:In(()=>[F(`span`,Ab,E(e.mark),1),F(`small`,null,E(e.label),1)]),_:2},1032,[`to`]))),128))]),I(gb)]))}}),Mb=Sr({__name:`App`,setup(e){let t=nc(),n=L(()=>t.meta.print===!0);return(e,t)=>n.value?(N(),ba(j(zl),{key:0})):(N(),ba(jb,{key:1}))}}),Nb=class extends Error{},Pb=class extends Nb{constructor(e){super(`Invalid DateTime: ${e.toMessage()}`)}},Fb=class extends Nb{constructor(e){super(`Invalid Interval: ${e.toMessage()}`)}},Ib=class extends Nb{constructor(e){super(`Invalid Duration: ${e.toMessage()}`)}},Lb=class extends Nb{},Rb=class extends Nb{constructor(e){super(`Invalid unit ${e}`)}},zb=class extends Nb{},Bb=class extends Nb{constructor(){super(`Zone is an abstract class`)}},q=`numeric`,Vb=`short`,Hb=`long`,Ub={year:q,month:q,day:q},Wb={year:q,month:Vb,day:q},Gb={year:q,month:Vb,day:q,weekday:Vb},Kb={year:q,month:Hb,day:q},qb={year:q,month:Hb,day:q,weekday:Hb},Jb={hour:q,minute:q},Yb={hour:q,minute:q,second:q},Xb={hour:q,minute:q,second:q,timeZoneName:Vb},Zb={hour:q,minute:q,second:q,timeZoneName:Hb},Qb={hour:q,minute:q,hourCycle:`h23`},$b={hour:q,minute:q,second:q,hourCycle:`h23`},ex={hour:q,minute:q,second:q,hourCycle:`h23`,timeZoneName:Vb},tx={hour:q,minute:q,second:q,hourCycle:`h23`,timeZoneName:Hb},nx={year:q,month:q,day:q,hour:q,minute:q},rx={year:q,month:q,day:q,hour:q,minute:q,second:q},ix={year:q,month:Vb,day:q,hour:q,minute:q},ax={year:q,month:Vb,day:q,hour:q,minute:q,second:q},ox={year:q,month:Vb,day:q,weekday:Vb,hour:q,minute:q},sx={year:q,month:Hb,day:q,hour:q,minute:q,timeZoneName:Vb},cx={year:q,month:Hb,day:q,hour:q,minute:q,second:q,timeZoneName:Vb},lx={year:q,month:Hb,day:q,weekday:Hb,hour:q,minute:q,timeZoneName:Hb},ux={year:q,month:Hb,day:q,weekday:Hb,hour:q,minute:q,second:q,timeZoneName:Hb},dx=class{get type(){throw new Bb}get name(){throw new Bb}get ianaName(){return this.name}get isUniversal(){throw new Bb}offsetName(e,t){throw new Bb}formatOffset(e,t){throw new Bb}offset(e){throw new Bb}equals(e){throw new Bb}get isValid(){throw new Bb}},fx=null,px=class e extends dx{static get instance(){return fx===null&&(fx=new e),fx}get type(){return`system`}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(e,{format:t,locale:n}){return ZS(e,t,n)}formatOffset(e,t){return tC(this.offset(e),t)}offset(e){return-new Date(e).getTimezoneOffset()}equals(e){return e.type===`system`}get isValid(){return!0}},mx=new Map;function hx(e){let t=mx.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(`en-US`,{hour12:!1,timeZone:e,year:`numeric`,month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`,second:`2-digit`,era:`short`}),mx.set(e,t)),t}var gx={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function _x(e,t){let n=e.format(t).replace(/\u200E/g,``),[,r,i,a,o,s,c,l]=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n);return[a,r,i,o,s,c,l]}function vx(e,t){let n=e.formatToParts(t),r=[];for(let e=0;e<n.length;e++){let{type:t,value:i}=n[e],a=gx[t];t===`era`?r[a]=i:X(a)||(r[a]=parseInt(i,10))}return r}var yx=new Map,bx=class e extends dx{static create(t){let n=yx.get(t);return n===void 0&&yx.set(t,n=new e(t)),n}static resetCache(){yx.clear(),mx.clear()}static isValidSpecifier(e){return this.isValidZone(e)}static isValidZone(e){if(!e)return!1;try{return new Intl.DateTimeFormat(`en-US`,{timeZone:e}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=e.isValidZone(t)}get type(){return`iana`}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(e,{format:t,locale:n}){return ZS(e,t,n,this.name)}formatOffset(e,t){return tC(this.offset(e),t)}offset(e){if(!this.valid)return NaN;let t=new Date(e);if(isNaN(t))return NaN;let n=hx(this.name),[r,i,a,o,s,c,l]=n.formatToParts?vx(n,t):_x(n,t);o===`BC`&&(r=-Math.abs(r)+1);let u=qS({year:r,month:i,day:a,hour:s===24?0:s,minute:c,second:l,millisecond:0}),d=+t,f=d%1e3;return d-=f>=0?f:1e3+f,(u-d)/(60*1e3)}equals(e){return e.type===`iana`&&e.name===this.name}get isValid(){return this.valid}},xx={};function Sx(e,t={}){let n=JSON.stringify([e,t]),r=xx[n];return r||(r=new Intl.ListFormat(e,t),xx[n]=r),r}var Cx=new Map;function wx(e,t={}){let n=JSON.stringify([e,t]),r=Cx.get(n);return r===void 0&&(r=new Intl.DateTimeFormat(e,t),Cx.set(n,r)),r}var Tx=new Map;function Ex(e,t={}){let n=JSON.stringify([e,t]),r=Tx.get(n);return r===void 0&&(r=new Intl.NumberFormat(e,t),Tx.set(n,r)),r}var Dx=new Map;function Ox(e,t={}){let{base:n,...r}=t,i=JSON.stringify([e,r]),a=Dx.get(i);return a===void 0&&(a=new Intl.RelativeTimeFormat(e,t),Dx.set(i,a)),a}var kx=null;function Ax(){return kx||(kx=new Intl.DateTimeFormat().resolvedOptions().locale,kx)}var jx=new Map;function Mx(e){let t=jx.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),jx.set(e,t)),t}var Nx=new Map;function Px(e){let t=Nx.get(e);if(!t){let n=new Intl.Locale(e);t=`getWeekInfo`in n?n.getWeekInfo():n.weekInfo,`minimalDays`in t||(t={...Wx,...t}),Nx.set(e,t)}return t}function Fx(e){let t=e.indexOf(`-x-`);t!==-1&&(e=e.substring(0,t));let n=e.indexOf(`-u-`);if(n===-1)return[e];{let t,r;try{t=wx(e).resolvedOptions(),r=e}catch{let i=e.substring(0,n);t=wx(i).resolvedOptions(),r=i}let{numberingSystem:i,calendar:a}=t;return[r,i,a]}}function Ix(e,t,n){return n||t?(e.includes(`-u-`)||(e+=`-u`),n&&(e+=`-ca-${n}`),t&&(e+=`-nu-${t}`),e):e}function Lx(e){let t=[];for(let n=1;n<=12;n++){let r=$.utc(2009,n,1);t.push(e(r))}return t}function Rx(e){let t=[];for(let n=1;n<=7;n++){let r=$.utc(2016,11,13+n);t.push(e(r))}return t}function zx(e,t,n,r){let i=e.listingMode();return i===`error`?null:i===`en`?n(t):r(t)}function Bx(e){return e.numberingSystem&&e.numberingSystem!==`latn`?!1:e.numberingSystem===`latn`||!e.locale||e.locale.startsWith(`en`)||Mx(e.locale).numberingSystem===`latn`}var Vx=class{constructor(e,t,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;let{padTo:r,floor:i,...a}=n;if(!t||Object.keys(a).length>0){let t={useGrouping:!1,...n};n.padTo>0&&(t.minimumIntegerDigits=n.padTo),this.inf=Ex(e,t)}}format(e){if(this.inf){let t=this.floor?Math.floor(e):e;return this.inf.format(t)}else return Z(this.floor?Math.floor(e):US(e,3),this.padTo)}},Hx=class{constructor(e,t,n){this.opts=n,this.originalZone=void 0;let r;if(this.opts.timeZone)this.dt=e;else if(e.zone.type===`fixed`){let t=-1*(e.offset/60),n=t>=0?`Etc/GMT+${t}`:`Etc/GMT${t}`;e.offset!==0&&bx.create(n).valid?(r=n,this.dt=e):(r=`UTC`,this.dt=e.offset===0?e:e.setZone(`UTC`).plus({minutes:e.offset}),this.originalZone=e.zone)}else e.zone.type===`system`?this.dt=e:e.zone.type===`iana`?(this.dt=e,r=e.zone.name):(r=`UTC`,this.dt=e.setZone(`UTC`).plus({minutes:e.offset}),this.originalZone=e.zone);let i={...this.opts};i.timeZone=i.timeZone||r,this.dtf=wx(t,i)}format(){return this.originalZone?this.formatToParts().map(({value:e})=>e).join(``):this.dtf.format(this.dt.toJSDate())}formatToParts(){let e=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?e.map(e=>{if(e.type===`timeZoneName`){let t=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...e,value:t}}else return e}):e}resolvedOptions(){return this.dtf.resolvedOptions()}},Ux=class{constructor(e,t,n){this.opts={style:`long`,...n},!t&&jS()&&(this.rtf=Ox(e,n))}format(e,t){return this.rtf?this.rtf.format(e,t):bC(t,e,this.opts.numeric,this.opts.style!==`long`)}formatToParts(e,t){return this.rtf?this.rtf.formatToParts(e,t):[]}},Wx={firstDay:1,minimalDays:4,weekend:[6,7]},J=class e{static fromOpts(t){return e.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,n,r,i,a=!1){let o=t||Y.defaultLocale,s=o||(a?`en-US`:Ax()),c=n||Y.defaultNumberingSystem,l=r||Y.defaultOutputCalendar,u=LS(i)||Y.defaultWeekSettings;return new e(s,c,l,u,o)}static resetCache(){kx=null,Cx.clear(),Tx.clear(),Dx.clear(),jx.clear(),Nx.clear()}static fromObject({locale:t,numberingSystem:n,outputCalendar:r,weekSettings:i}={}){return e.create(t,n,r,i)}constructor(e,t,n,r,i){let[a,o,s]=Fx(e);this.locale=a,this.numberingSystem=t||o||null,this.outputCalendar=n||s||null,this.weekSettings=r,this.intl=Ix(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=i,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached??=Bx(this),this.fastNumbersCached}listingMode(){let e=this.isEnglish(),t=(this.numberingSystem===null||this.numberingSystem===`latn`)&&(this.outputCalendar===null||this.outputCalendar===`gregory`);return e&&t?`en`:`intl`}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:e.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,LS(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(e={}){return this.clone({...e,defaultToEN:!0})}redefaultToSystem(e={}){return this.clone({...e,defaultToEN:!1})}months(e,t=!1){return zx(this,e,oC,()=>{let n=this.intl===`ja`||this.intl.startsWith(`ja-`);t&=!n;let r=t?{month:e,day:`numeric`}:{month:e},i=t?`format`:`standalone`;if(!this.monthsCache[i][e]){let t=n?e=>this.dtFormatter(e,r).format():e=>this.extract(e,r,`month`);this.monthsCache[i][e]=Lx(t)}return this.monthsCache[i][e]})}weekdays(e,t=!1){return zx(this,e,uC,()=>{let n=t?{weekday:e,year:`numeric`,month:`long`,day:`numeric`}:{weekday:e},r=t?`format`:`standalone`;return this.weekdaysCache[r][e]||(this.weekdaysCache[r][e]=Rx(e=>this.extract(e,n,`weekday`))),this.weekdaysCache[r][e]})}meridiems(){return zx(this,void 0,()=>dC,()=>{if(!this.meridiemCache){let e={hour:`numeric`,hourCycle:`h12`};this.meridiemCache=[$.utc(2016,11,13,9),$.utc(2016,11,13,19)].map(t=>this.extract(t,e,`dayperiod`))}return this.meridiemCache})}eras(e){return zx(this,e,hC,()=>{let t={era:e};return this.eraCache[e]||(this.eraCache[e]=[$.utc(-40,1,1),$.utc(2017,1,1)].map(e=>this.extract(e,t,`era`))),this.eraCache[e]})}extract(e,t,n){let r=this.dtFormatter(e,t).formatToParts().find(e=>e.type.toLowerCase()===n);return r?r.value:null}numberFormatter(e={}){return new Vx(this.intl,e.forceSimple||this.fastNumbers,e)}dtFormatter(e,t={}){return new Hx(e,this.intl,t)}relFormatter(e={}){return new Ux(this.intl,this.isEnglish(),e)}listFormatter(e={}){return Sx(this.intl,e)}isEnglish(){return this.locale===`en`||this.locale.toLowerCase()===`en-us`||Mx(this.intl).locale.startsWith(`en-us`)}getWeekSettings(){return this.weekSettings?this.weekSettings:MS()?Px(this.locale):Wx}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}},Gx=null,Kx=class e extends dx{static get utcInstance(){return Gx===null&&(Gx=new e(0)),Gx}static instance(t){return t===0?e.utcInstance:new e(t)}static parseSpecifier(t){if(t){let n=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(n)return new e(QS(n[1],n[2]))}return null}constructor(e){super(),this.fixed=e}get type(){return`fixed`}get name(){return this.fixed===0?`UTC`:`UTC${tC(this.fixed,`narrow`)}`}get ianaName(){return this.fixed===0?`Etc/UTC`:`Etc/GMT${tC(-this.fixed,`narrow`)}`}offsetName(){return this.name}formatOffset(e,t){return tC(this.fixed,t)}get isUniversal(){return!0}offset(){return this.fixed}equals(e){return e.type===`fixed`&&e.fixed===this.fixed}get isValid(){return!0}},qx=class extends dx{constructor(e){super(),this.zoneName=e}get type(){return`invalid`}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return``}offset(){return NaN}equals(){return!1}get isValid(){return!1}};function Jx(e,t){if(X(e)||e===null)return t;if(e instanceof dx)return e;if(kS(e)){let n=e.toLowerCase();return n==="default"?t:n===`local`||n===`system`?px.instance:n===`utc`||n===`gmt`?Kx.utcInstance:Kx.parseSpecifier(n)||bx.create(e)}else if(DS(e))return Kx.instance(e);else if(typeof e==`object`&&`offset`in e&&typeof e.offset==`function`)return e;else return new qx(e)}var Yx={arab:`[٠-٩]`,arabext:`[۰-۹]`,bali:`[᭐-᭙]`,beng:`[০-৯]`,deva:`[०-९]`,fullwide:`[０-９]`,gujr:`[૦-૯]`,hanidec:`[〇|一|二|三|四|五|六|七|八|九]`,khmr:`[០-៩]`,knda:`[೦-೯]`,laoo:`[໐-໙]`,limb:`[᥆-᥏]`,mlym:`[൦-൯]`,mong:`[᠐-᠙]`,mymr:`[၀-၉]`,orya:`[୦-୯]`,tamldec:`[௦-௯]`,telu:`[౦-౯]`,thai:`[๐-๙]`,tibt:`[༠-༩]`,latn:`\\d`},Xx={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},Zx=Yx.hanidec.replace(/[\[|\]]/g,``).split(``);function Qx(e){let t=parseInt(e,10);if(isNaN(t)){t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(e[n].search(Yx.hanidec)!==-1)t+=Zx.indexOf(e[n]);else for(let e in Xx){let[n,i]=Xx[e];r>=n&&r<=i&&(t+=r-n)}}return parseInt(t,10)}else return t}var $x=new Map;function eS(){$x.clear()}function tS({numberingSystem:e},t=``){let n=e||`latn`,r=$x.get(n);r===void 0&&(r=new Map,$x.set(n,r));let i=r.get(t);return i===void 0&&(i=RegExp(`${Yx[n]}${t}`),r.set(t,i)),i}var nS=()=>Date.now(),rS=`system`,iS=null,aS=null,oS=null,sS=60,cS,lS=null,Y=class{static get now(){return nS}static set now(e){nS=e}static set defaultZone(e){rS=e}static get defaultZone(){return Jx(rS,px.instance)}static get defaultLocale(){return iS}static set defaultLocale(e){iS=e}static get defaultNumberingSystem(){return aS}static set defaultNumberingSystem(e){aS=e}static get defaultOutputCalendar(){return oS}static set defaultOutputCalendar(e){oS=e}static get defaultWeekSettings(){return lS}static set defaultWeekSettings(e){lS=LS(e)}static get twoDigitCutoffYear(){return sS}static set twoDigitCutoffYear(e){sS=e%100}static get throwOnInvalid(){return cS}static set throwOnInvalid(e){cS=e}static resetCaches(){J.resetCache(),bx.resetCache(),$.resetCache(),eS()}},uS=class{constructor(e,t){this.reason=e,this.explanation=t}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}},dS=[0,31,59,90,120,151,181,212,243,273,304,334],fS=[0,31,60,91,121,152,182,213,244,274,305,335];function pS(e,t){return new uS(`unit out of range`,`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function mS(e,t,n){let r=new Date(Date.UTC(e,t-1,n));e<100&&e>=0&&r.setUTCFullYear(r.getUTCFullYear()-1900);let i=r.getUTCDay();return i===0?7:i}function hS(e,t,n){return n+(WS(e)?fS:dS)[t-1]}function gS(e,t){let n=WS(e)?fS:dS,r=n.findIndex(e=>e<t),i=t-n[r];return{month:r+1,day:i}}function _S(e,t){return(e-t+7)%7+1}function vS(e,t=4,n=1){let{year:r,month:i,day:a}=e,o=hS(r,i,a),s=_S(mS(r,i,a),n),c=Math.floor((o-s+14-t)/7),l;return c<1?(l=r-1,c=YS(l,t,n)):c>YS(r,t,n)?(l=r+1,c=1):l=r,{weekYear:l,weekNumber:c,weekday:s,...nC(e)}}function yS(e,t=4,n=1){let{weekYear:r,weekNumber:i,weekday:a}=e,o=_S(mS(r,1,t),n),s=GS(r),c=i*7+a-o-7+t,l;c<1?(l=r-1,c+=GS(l)):c>s?(l=r+1,c-=GS(r)):l=r;let{month:u,day:d}=gS(l,c);return{year:l,month:u,day:d,...nC(e)}}function bS(e){let{year:t,month:n,day:r}=e;return{year:t,ordinal:hS(t,n,r),...nC(e)}}function xS(e){let{year:t,ordinal:n}=e,{month:r,day:i}=gS(t,n);return{year:t,month:r,day:i,...nC(e)}}function SS(e,t){if(!X(e.localWeekday)||!X(e.localWeekNumber)||!X(e.localWeekYear)){if(!X(e.weekday)||!X(e.weekNumber)||!X(e.weekYear))throw new Lb(`Cannot mix locale-based week fields with ISO-based week fields`);return X(e.localWeekday)||(e.weekday=e.localWeekday),X(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),X(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function CS(e,t=4,n=1){let r=OS(e.weekYear),i=RS(e.weekNumber,1,YS(e.weekYear,t,n)),a=RS(e.weekday,1,7);return r?i?!a&&pS(`weekday`,e.weekday):pS(`week`,e.weekNumber):pS(`weekYear`,e.weekYear)}function wS(e){let t=OS(e.year),n=RS(e.ordinal,1,GS(e.year));return t?!n&&pS(`ordinal`,e.ordinal):pS(`year`,e.year)}function TS(e){let t=OS(e.year),n=RS(e.month,1,12),r=RS(e.day,1,KS(e.year,e.month));return t?n?!r&&pS(`day`,e.day):pS(`month`,e.month):pS(`year`,e.year)}function ES(e){let{hour:t,minute:n,second:r,millisecond:i}=e,a=RS(t,0,23)||t===24&&n===0&&r===0&&i===0,o=RS(n,0,59),s=RS(r,0,59),c=RS(i,0,999);return a?o?s?!c&&pS(`millisecond`,i):pS(`second`,r):pS(`minute`,n):pS(`hour`,t)}function X(e){return e===void 0}function DS(e){return typeof e==`number`}function OS(e){return typeof e==`number`&&e%1==0}function kS(e){return typeof e==`string`}function AS(e){return Object.prototype.toString.call(e)===`[object Date]`}function jS(){try{return typeof Intl<`u`&&!!Intl.RelativeTimeFormat}catch{return!1}}function MS(){try{return typeof Intl<`u`&&!!Intl.Locale&&(`weekInfo`in Intl.Locale.prototype||`getWeekInfo`in Intl.Locale.prototype)}catch{return!1}}function NS(e){return Array.isArray(e)?e:[e]}function PS(e,t,n){if(e.length!==0)return e.reduce((e,r)=>{let i=[t(r),r];return e&&n(e[0],i[0])===e[0]?e:i},null)[1]}function FS(e,t){return t.reduce((t,n)=>(t[n]=e[n],t),{})}function IS(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function LS(e){if(e==null)return null;if(typeof e!=`object`)throw new zb(`Week settings must be an object`);if(!RS(e.firstDay,1,7)||!RS(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(e=>!RS(e,1,7)))throw new zb(`Invalid week settings`);return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function RS(e,t,n){return OS(e)&&e>=t&&e<=n}function zS(e,t){return e-t*Math.floor(e/t)}function Z(e,t=2){let n=e<0,r;return r=n?`-`+(``+-e).padStart(t,`0`):(``+e).padStart(t,`0`),r}function BS(e){if(!(X(e)||e===null||e===``))return parseInt(e,10)}function VS(e){if(!(X(e)||e===null||e===``))return parseFloat(e)}function HS(e){if(!(X(e)||e===null||e===``)){let t=parseFloat(`0.`+e)*1e3;return Math.floor(t)}}function US(e,t,n=`round`){let r=10**t;switch(n){case`expand`:return e>0?Math.ceil(e*r)/r:Math.floor(e*r)/r;case`trunc`:return Math.trunc(e*r)/r;case`round`:return Math.round(e*r)/r;case`floor`:return Math.floor(e*r)/r;case`ceil`:return Math.ceil(e*r)/r;default:throw RangeError(`Value rounding ${n} is out of range`)}}function WS(e){return e%4==0&&(e%100!=0||e%400==0)}function GS(e){return WS(e)?366:365}function KS(e,t){let n=zS(t-1,12)+1,r=e+(t-n)/12;return n===2?WS(r)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][n-1]}function qS(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function JS(e,t,n){return-_S(mS(e,1,t),n)+t-1}function YS(e,t=4,n=1){let r=JS(e,t,n),i=JS(e+1,t,n);return(GS(e)-r+i)/7}function XS(e){return e>99?e:e>Y.twoDigitCutoffYear?1900+e:2e3+e}function ZS(e,t,n,r=null){let i=new Date(e),a={hourCycle:`h23`,year:`numeric`,month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`};r&&(a.timeZone=r);let o={timeZoneName:t,...a},s=new Intl.DateTimeFormat(n,o).formatToParts(i).find(e=>e.type.toLowerCase()===`timezonename`);return s?s.value:null}function QS(e,t){let n=parseInt(e,10);Number.isNaN(n)&&(n=0);let r=parseInt(t,10)||0,i=n<0||Object.is(n,-0)?-r:r;return n*60+i}function $S(e){let t=Number(e);if(typeof e==`boolean`||e===``||!Number.isFinite(t))throw new zb(`Invalid unit value ${e}`);return t}function eC(e,t){let n={};for(let r in e)if(IS(e,r)){let i=e[r];if(i==null)continue;n[t(r)]=$S(i)}return n}function tC(e,t){let n=Math.trunc(Math.abs(e/60)),r=Math.trunc(Math.abs(e%60)),i=e>=0?`+`:`-`;switch(t){case`short`:return`${i}${Z(n,2)}:${Z(r,2)}`;case`narrow`:return`${i}${n}${r>0?`:${r}`:``}`;case`techie`:return`${i}${Z(n,2)}${Z(r,2)}`;default:throw RangeError(`Value format ${t} is out of range for property format`)}}function nC(e){return FS(e,[`hour`,`minute`,`second`,`millisecond`])}var rC=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],iC=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],aC=[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`];function oC(e){switch(e){case`narrow`:return[...aC];case`short`:return[...iC];case`long`:return[...rC];case`numeric`:return[`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`10`,`11`,`12`];case`2-digit`:return[`01`,`02`,`03`,`04`,`05`,`06`,`07`,`08`,`09`,`10`,`11`,`12`];default:return null}}var sC=[`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`,`Sunday`],cC=[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`],lC=[`M`,`T`,`W`,`T`,`F`,`S`,`S`];function uC(e){switch(e){case`narrow`:return[...lC];case`short`:return[...cC];case`long`:return[...sC];case`numeric`:return[`1`,`2`,`3`,`4`,`5`,`6`,`7`];default:return null}}var dC=[`AM`,`PM`],fC=[`Before Christ`,`Anno Domini`],pC=[`BC`,`AD`],mC=[`B`,`A`];function hC(e){switch(e){case`narrow`:return[...mC];case`short`:return[...pC];case`long`:return[...fC];default:return null}}function gC(e){return dC[e.hour<12?0:1]}function _C(e,t){return uC(t)[e.weekday-1]}function vC(e,t){return oC(t)[e.month-1]}function yC(e,t){return hC(t)[e.year<0?0:1]}function bC(e,t,n=`always`,r=!1){let i={years:[`year`,`yr.`],quarters:[`quarter`,`qtr.`],months:[`month`,`mo.`],weeks:[`week`,`wk.`],days:[`day`,`day`,`days`],hours:[`hour`,`hr.`],minutes:[`minute`,`min.`],seconds:[`second`,`sec.`]},a=[`hours`,`minutes`,`seconds`].indexOf(e)===-1;if(n===`auto`&&a){let n=e===`days`;switch(t){case 1:return n?`tomorrow`:`next ${i[e][0]}`;case-1:return n?`yesterday`:`last ${i[e][0]}`;case 0:return n?`today`:`this ${i[e][0]}`}}let o=Object.is(t,-0)||t<0,s=Math.abs(t),c=s===1,l=i[e],u=r?c?l[1]:l[2]||l[1]:c?i[e][0]:e;return o?`${s} ${u} ago`:`in ${s} ${u}`}function xC(e,t){let n=``;for(let r of e)r.literal?n+=r.val:n+=t(r.val);return n}var SC={D:Ub,DD:Wb,DDD:Kb,DDDD:qb,t:Jb,tt:Yb,ttt:Xb,tttt:Zb,T:Qb,TT:$b,TTT:ex,TTTT:tx,f:nx,ff:ix,fff:sx,ffff:lx,F:rx,FF:ax,FFF:cx,FFFF:ux},CC=class e{static create(t,n={}){return new e(t,n)}static parseFormat(e){let t=null,n=``,r=!1,i=[];for(let a=0;a<e.length;a++){let o=e.charAt(a);o===`'`?((n.length>0||r)&&i.push({literal:r||/^\s+$/.test(n),val:n===``?`'`:n}),t=null,n=``,r=!r):r||o===t?n+=o:(n.length>0&&i.push({literal:/^\s+$/.test(n),val:n}),n=o,t=o)}return n.length>0&&i.push({literal:r||/^\s+$/.test(n),val:n}),i}static macroTokenToFormatOpts(e){return SC[e]}constructor(e,t){this.opts=t,this.loc=e,this.systemLoc=null}formatWithSystemDefault(e,t){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,{...this.opts,...t}).format()}dtFormatter(e,t={}){return this.loc.dtFormatter(e,{...this.opts,...t})}formatDateTime(e,t){return this.dtFormatter(e,t).format()}formatDateTimeParts(e,t){return this.dtFormatter(e,t).formatToParts()}formatInterval(e,t){return this.dtFormatter(e.start,t).dtf.formatRange(e.start.toJSDate(),e.end.toJSDate())}resolvedOptions(e,t){return this.dtFormatter(e,t).resolvedOptions()}num(e,t=0,n=void 0){if(this.opts.forceSimple)return Z(e,t);let r={...this.opts};return t>0&&(r.padTo=t),n&&(r.signDisplay=n),this.loc.numberFormatter(r).format(e)}formatDateTimeFromString(t,n){let r=this.loc.listingMode()===`en`,i=this.loc.outputCalendar&&this.loc.outputCalendar!==`gregory`,a=(e,n)=>this.loc.extract(t,e,n),o=e=>t.isOffsetFixed&&t.offset===0&&e.allowZ?`Z`:t.isValid?t.zone.formatOffset(t.ts,e.format):``,s=()=>r?gC(t):a({hour:`numeric`,hourCycle:`h12`},`dayperiod`),c=(e,n)=>r?vC(t,e):a(n?{month:e}:{month:e,day:`numeric`},`month`),l=(e,n)=>r?_C(t,e):a(n?{weekday:e}:{weekday:e,month:`long`,day:`numeric`},`weekday`),u=n=>{let r=e.macroTokenToFormatOpts(n);return r?this.formatWithSystemDefault(t,r):n},d=e=>r?yC(t,e):a({era:e},`era`);return xC(e.parseFormat(n),e=>{switch(e){case`S`:return this.num(t.millisecond);case`u`:case`SSS`:return this.num(t.millisecond,3);case`s`:return this.num(t.second);case`ss`:return this.num(t.second,2);case`uu`:return this.num(Math.floor(t.millisecond/10),2);case`uuu`:return this.num(Math.floor(t.millisecond/100));case`m`:return this.num(t.minute);case`mm`:return this.num(t.minute,2);case`h`:return this.num(t.hour%12==0?12:t.hour%12);case`hh`:return this.num(t.hour%12==0?12:t.hour%12,2);case`H`:return this.num(t.hour);case`HH`:return this.num(t.hour,2);case`Z`:return o({format:`narrow`,allowZ:this.opts.allowZ});case`ZZ`:return o({format:`short`,allowZ:this.opts.allowZ});case`ZZZ`:return o({format:`techie`,allowZ:this.opts.allowZ});case`ZZZZ`:return t.zone.offsetName(t.ts,{format:`short`,locale:this.loc.locale});case`ZZZZZ`:return t.zone.offsetName(t.ts,{format:`long`,locale:this.loc.locale});case`z`:return t.zoneName;case`a`:return s();case`d`:return i?a({day:`numeric`},`day`):this.num(t.day);case`dd`:return i?a({day:`2-digit`},`day`):this.num(t.day,2);case`c`:return this.num(t.weekday);case`ccc`:return l(`short`,!0);case`cccc`:return l(`long`,!0);case`ccccc`:return l(`narrow`,!0);case`E`:return this.num(t.weekday);case`EEE`:return l(`short`,!1);case`EEEE`:return l(`long`,!1);case`EEEEE`:return l(`narrow`,!1);case`L`:return i?a({month:`numeric`,day:`numeric`},`month`):this.num(t.month);case`LL`:return i?a({month:`2-digit`,day:`numeric`},`month`):this.num(t.month,2);case`LLL`:return c(`short`,!0);case`LLLL`:return c(`long`,!0);case`LLLLL`:return c(`narrow`,!0);case`M`:return i?a({month:`numeric`},`month`):this.num(t.month);case`MM`:return i?a({month:`2-digit`},`month`):this.num(t.month,2);case`MMM`:return c(`short`,!1);case`MMMM`:return c(`long`,!1);case`MMMMM`:return c(`narrow`,!1);case`y`:return i?a({year:`numeric`},`year`):this.num(t.year);case`yy`:return i?a({year:`2-digit`},`year`):this.num(t.year.toString().slice(-2),2);case`yyyy`:return i?a({year:`numeric`},`year`):this.num(t.year,4);case`yyyyyy`:return i?a({year:`numeric`},`year`):this.num(t.year,6);case`G`:return d(`short`);case`GG`:return d(`long`);case`GGGGG`:return d(`narrow`);case`kk`:return this.num(t.weekYear.toString().slice(-2),2);case`kkkk`:return this.num(t.weekYear,4);case`W`:return this.num(t.weekNumber);case`WW`:return this.num(t.weekNumber,2);case`n`:return this.num(t.localWeekNumber);case`nn`:return this.num(t.localWeekNumber,2);case`ii`:return this.num(t.localWeekYear.toString().slice(-2),2);case`iiii`:return this.num(t.localWeekYear,4);case`o`:return this.num(t.ordinal);case`ooo`:return this.num(t.ordinal,3);case`q`:return this.num(t.quarter);case`qq`:return this.num(t.quarter,2);case`X`:return this.num(Math.floor(t.ts/1e3));case`x`:return this.num(t.ts);default:return u(e)}})}formatDurationFromString(t,n){let r=this.opts.signMode===`negativeLargestOnly`?-1:1,i=e=>{switch(e[0]){case`S`:return`milliseconds`;case`s`:return`seconds`;case`m`:return`minutes`;case`h`:return`hours`;case`d`:return`days`;case`w`:return`weeks`;case`M`:return`months`;case`y`:return`years`;default:return null}},a=(e,t)=>n=>{let a=i(n);if(a){let i=t.isNegativeDuration&&a!==t.largestUnit?r:1,o;return o=this.opts.signMode===`negativeLargestOnly`&&a!==t.largestUnit?`never`:this.opts.signMode===`all`?`always`:`auto`,this.num(e.get(a)*i,n.length,o)}else return n},o=e.parseFormat(n),s=o.reduce((e,{literal:t,val:n})=>t?e:e.concat(n),[]),c=t.shiftTo(...s.map(i).filter(e=>e));return xC(o,a(c,{isNegativeDuration:c<0,largestUnit:Object.keys(c.values)[0]}))}},wC=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function TC(...e){let t=e.reduce((e,t)=>e+t.source,``);return RegExp(`^${t}$`)}function EC(...e){return t=>e.reduce(([e,n,r],i)=>{let[a,o,s]=i(t,r);return[{...e,...a},o||n,s]},[{},null,1]).slice(0,2)}function DC(e,...t){if(e==null)return[null,null];for(let[n,r]of t){let t=n.exec(e);if(t)return r(t)}return[null,null]}function OC(...e){return(t,n)=>{let r={},i;for(i=0;i<e.length;i++)r[e[i]]=BS(t[n+i]);return[r,null,n+i]}}var kC=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,AC=`(?:${kC.source}?(?:\\[(${wC.source})\\])?)?`,jC=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,MC=RegExp(`${jC.source}${AC}`),NC=RegExp(`(?:[Tt]${MC.source})?`),PC=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,FC=/(\d{4})-?W(\d\d)(?:-?(\d))?/,IC=/(\d{4})-?(\d{3})/,LC=OC(`weekYear`,`weekNumber`,`weekDay`),RC=OC(`year`,`ordinal`),zC=/(\d{4})-(\d\d)-(\d\d)/,BC=RegExp(`${jC.source} ?(?:${kC.source}|(${wC.source}))?`),VC=RegExp(`(?: ${BC.source})?`);function HC(e,t,n){let r=e[t];return X(r)?n:BS(r)}function UC(e,t){return[{year:HC(e,t),month:HC(e,t+1,1),day:HC(e,t+2,1)},null,t+3]}function WC(e,t){return[{hours:HC(e,t,0),minutes:HC(e,t+1,0),seconds:HC(e,t+2,0),milliseconds:HS(e[t+3])},null,t+4]}function GC(e,t){let n=!e[t]&&!e[t+1],r=QS(e[t+1],e[t+2]);return[{},n?null:Kx.instance(r),t+3]}function KC(e,t){return[{},e[t]?bx.create(e[t]):null,t+1]}var qC=RegExp(`^T?${jC.source}$`),JC=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function YC(e){let[t,n,r,i,a,o,s,c,l]=e,u=t[0]===`-`,d=c&&c[0]===`-`,f=(e,t=!1)=>e!==void 0&&(t||e&&u)?-e:e;return[{years:f(VS(n)),months:f(VS(r)),weeks:f(VS(i)),days:f(VS(a)),hours:f(VS(o)),minutes:f(VS(s)),seconds:f(VS(c),c===`-0`),milliseconds:f(HS(l),d)}]}var XC={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function ZC(e,t,n,r,i,a,o){let s={year:t.length===2?XS(BS(t)):BS(t),month:iC.indexOf(n)+1,day:BS(r),hour:BS(i),minute:BS(a)};return o&&(s.second=BS(o)),e&&(s.weekday=e.length>3?sC.indexOf(e)+1:cC.indexOf(e)+1),s}var QC=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function $C(e){let[,t,n,r,i,a,o,s,c,l,u,d]=e,f=ZC(t,i,r,n,a,o,s),p;return p=c?XC[c]:l?0:QS(u,d),[f,new Kx(p)]}function ew(e){return e.replace(/\([^()]*\)|[\n\t]/g,` `).replace(/(\s\s+)/g,` `).trim()}var tw=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,nw=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,rw=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function iw(e){let[,t,n,r,i,a,o,s]=e;return[ZC(t,i,r,n,a,o,s),Kx.utcInstance]}function aw(e){let[,t,n,r,i,a,o,s]=e;return[ZC(t,s,n,r,i,a,o),Kx.utcInstance]}var ow=TC(PC,NC),sw=TC(FC,NC),cw=TC(IC,NC),lw=TC(MC),uw=EC(UC,WC,GC,KC),dw=EC(LC,WC,GC,KC),fw=EC(RC,WC,GC,KC),pw=EC(WC,GC,KC);function mw(e){return DC(e,[ow,uw],[sw,dw],[cw,fw],[lw,pw])}function hw(e){return DC(ew(e),[QC,$C])}function gw(e){return DC(e,[tw,iw],[nw,iw],[rw,aw])}function _w(e){return DC(e,[JC,YC])}var vw=EC(WC);function yw(e){return DC(e,[qC,vw])}var bw=TC(zC,VC),xw=TC(BC),Sw=EC(WC,GC,KC);function Cw(e){return DC(e,[bw,uw],[xw,Sw])}var ww=`Invalid Duration`,Tw={weeks:{days:7,hours:168,minutes:10080,seconds:10080*60,milliseconds:10080*60*1e3},days:{hours:24,minutes:1440,seconds:1440*60,milliseconds:1440*60*1e3},hours:{minutes:60,seconds:3600,milliseconds:3600*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},Ew={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:2184*60,seconds:2184*60*60,milliseconds:2184*60*60*1e3},months:{weeks:4,days:30,hours:720,minutes:720*60,seconds:720*60*60,milliseconds:720*60*60*1e3},...Tw},Dw=146097/400,Ow=146097/4800,kw={years:{quarters:4,months:12,weeks:Dw/7,days:Dw,hours:Dw*24,minutes:Dw*24*60,seconds:Dw*24*60*60,milliseconds:Dw*24*60*60*1e3},quarters:{months:3,weeks:Dw/28,days:Dw/4,hours:Dw*24/4,minutes:Dw*24*60/4,seconds:Dw*24*60*60/4,milliseconds:Dw*24*60*60*1e3/4},months:{weeks:Ow/7,days:Ow,hours:Ow*24,minutes:Ow*24*60,seconds:Ow*24*60*60,milliseconds:Ow*24*60*60*1e3},...Tw},Aw=[`years`,`quarters`,`months`,`weeks`,`days`,`hours`,`minutes`,`seconds`,`milliseconds`],jw=Aw.slice(0).reverse();function Mw(e,t,n=!1){return new Iw({values:n?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix})}function Nw(e,t){let n=t.milliseconds??0;for(let r of jw.slice(1))t[r]&&(n+=t[r]*e[r].milliseconds);return n}function Pw(e,t){let n=Nw(e,t)<0?-1:1;Aw.reduceRight((r,i)=>{if(X(t[i]))return r;if(r){let a=t[r]*n,o=e[i][r],s=Math.floor(a/o);t[i]+=s*n,t[r]-=s*o*n}return i},null),Aw.reduce((n,r)=>{if(X(t[r]))return n;if(n){let i=t[n]%1;t[n]-=i,t[r]+=i*e[n][r]}return r},null)}function Fw(e){let t={};for(let[n,r]of Object.entries(e))r!==0&&(t[n]=r);return t}var Iw=class e{constructor(e){let t=e.conversionAccuracy===`longterm`||!1,n=t?kw:Ew;e.matrix&&(n=e.matrix),this.values=e.values,this.loc=e.loc||J.create(),this.conversionAccuracy=t?`longterm`:`casual`,this.invalid=e.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,n){return e.fromObject({milliseconds:t},n)}static fromObject(t,n={}){if(typeof t!=`object`||!t)throw new zb(`Duration.fromObject: argument expected to be an object, got ${t===null?`null`:typeof t}`);return new e({values:eC(t,e.normalizeUnit),loc:J.fromObject(n),conversionAccuracy:n.conversionAccuracy,matrix:n.matrix})}static fromDurationLike(t){if(DS(t))return e.fromMillis(t);if(e.isDuration(t))return t;if(typeof t==`object`)return e.fromObject(t);throw new zb(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,n){let[r]=_w(t);return r?e.fromObject(r,n):e.invalid(`unparsable`,`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,n){let[r]=yw(t);return r?e.fromObject(r,n):e.invalid(`unparsable`,`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,n=null){if(!t)throw new zb(`need to specify a reason the Duration is invalid`);let r=t instanceof uS?t:new uS(t,n);if(Y.throwOnInvalid)throw new Ib(r);return new e({invalid:r})}static normalizeUnit(e){let t={year:`years`,years:`years`,quarter:`quarters`,quarters:`quarters`,month:`months`,months:`months`,week:`weeks`,weeks:`weeks`,day:`days`,days:`days`,hour:`hours`,hours:`hours`,minute:`minutes`,minutes:`minutes`,second:`seconds`,seconds:`seconds`,millisecond:`milliseconds`,milliseconds:`milliseconds`}[e&&e.toLowerCase()];if(!t)throw new Rb(e);return t}static isDuration(e){return e&&e.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(e,t={}){let n={...t,floor:t.round!==!1&&t.floor!==!1};return this.isValid?CC.create(this.loc,n).formatDurationFromString(this,e):ww}toHuman(e={}){if(!this.isValid)return ww;let t=e.showZeros!==!1,n=Aw.map(n=>{let r=this.values[n];return X(r)||r===0&&!t?null:this.loc.numberFormatter({style:`unit`,unitDisplay:`long`,...e,unit:n.slice(0,-1)}).format(r)}).filter(e=>e);return this.loc.listFormatter({type:`conjunction`,style:e.listStyle||`narrow`,...e}).format(n)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let e=`P`;return this.years!==0&&(e+=this.years+`Y`),(this.months!==0||this.quarters!==0)&&(e+=this.months+this.quarters*3+`M`),this.weeks!==0&&(e+=this.weeks+`W`),this.days!==0&&(e+=this.days+`D`),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(e+=`T`),this.hours!==0&&(e+=this.hours+`H`),this.minutes!==0&&(e+=this.minutes+`M`),(this.seconds!==0||this.milliseconds!==0)&&(e+=US(this.seconds+this.milliseconds/1e3,3)+`S`),e===`P`&&(e+=`T0S`),e}toISOTime(e={}){if(!this.isValid)return null;let t=this.toMillis();return t<0||t>=864e5?null:(e={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:`extended`,...e,includeOffset:!1},$.fromMillis(t,{zone:`UTC`}).toISOTime(e))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for(`nodejs.util.inspect.custom`)](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?Nw(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;let n=e.fromDurationLike(t),r={};for(let e of Aw)(IS(n.values,e)||IS(this.values,e))&&(r[e]=n.get(e)+this.get(e));return Mw(this,{values:r},!0)}minus(t){if(!this.isValid)return this;let n=e.fromDurationLike(t);return this.plus(n.negate())}mapUnits(e){if(!this.isValid)return this;let t={};for(let n of Object.keys(this.values))t[n]=$S(e(this.values[n],n));return Mw(this,{values:t},!0)}get(t){return this[e.normalizeUnit(t)]}set(t){if(!this.isValid)return this;let n={...this.values,...eC(t,e.normalizeUnit)};return Mw(this,{values:n})}reconfigure({locale:e,numberingSystem:t,conversionAccuracy:n,matrix:r}={}){let i={loc:this.loc.clone({locale:e,numberingSystem:t}),matrix:r,conversionAccuracy:n};return Mw(this,i)}as(e){return this.isValid?this.shiftTo(e).get(e):NaN}normalize(){if(!this.isValid)return this;let e=this.toObject();return Pw(this.matrix,e),Mw(this,{values:e},!0)}rescale(){if(!this.isValid)return this;let e=Fw(this.normalize().shiftToAll().toObject());return Mw(this,{values:e},!0)}shiftTo(...t){if(!this.isValid||t.length===0)return this;t=t.map(t=>e.normalizeUnit(t));let n={},r={},i=this.toObject(),a;for(let e of Aw)if(t.indexOf(e)>=0){a=e;let t=0;for(let n in r)t+=this.matrix[n][e]*r[n],r[n]=0;DS(i[e])&&(t+=i[e]);let o=Math.trunc(t);n[e]=o,r[e]=(t*1e3-o*1e3)/1e3}else DS(i[e])&&(r[e]=i[e]);for(let e in r)r[e]!==0&&(n[a]+=e===a?r[e]:r[e]/this.matrix[a][e]);return Pw(this.matrix,n),Mw(this,{values:n},!0)}shiftToAll(){return this.isValid?this.shiftTo(`years`,`months`,`weeks`,`days`,`hours`,`minutes`,`seconds`,`milliseconds`):this}negate(){if(!this.isValid)return this;let e={};for(let t of Object.keys(this.values))e[t]=this.values[t]===0?0:-this.values[t];return Mw(this,{values:e},!0)}removeZeros(){if(!this.isValid)return this;let e=Fw(this.values);return Mw(this,{values:e},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(e){if(!this.isValid||!e.isValid||!this.loc.equals(e.loc))return!1;function t(e,t){return e===void 0||e===0?t===void 0||t===0:e===t}for(let n of Aw)if(!t(this.values[n],e.values[n]))return!1;return!0}},Lw=`Invalid Interval`;function Rw(e,t){return!e||!e.isValid?zw.invalid(`missing or invalid start`):!t||!t.isValid?zw.invalid(`missing or invalid end`):t<e?zw.invalid(`end before start`,`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}var zw=class e{constructor(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}static invalid(t,n=null){if(!t)throw new zb(`need to specify a reason the Interval is invalid`);let r=t instanceof uS?t:new uS(t,n);if(Y.throwOnInvalid)throw new Fb(r);return new e({invalid:r})}static fromDateTimes(t,n){let r=VT(t),i=VT(n);return Rw(r,i)??new e({start:r,end:i})}static after(t,n){let r=Iw.fromDurationLike(n),i=VT(t);return e.fromDateTimes(i,i.plus(r))}static before(t,n){let r=Iw.fromDurationLike(n),i=VT(t);return e.fromDateTimes(i.minus(r),i)}static fromISO(t,n){let[r,i]=(t||``).split(`/`,2);if(r&&i){let t,a;try{t=$.fromISO(r,n),a=t.isValid}catch{a=!1}let o,s;try{o=$.fromISO(i,n),s=o.isValid}catch{s=!1}if(a&&s)return e.fromDateTimes(t,o);if(a){let r=Iw.fromISO(i,n);if(r.isValid)return e.after(t,r)}else if(s){let t=Iw.fromISO(r,n);if(t.isValid)return e.before(o,t)}}return e.invalid(`unparsable`,`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(e){return e&&e.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(e=`milliseconds`){return this.isValid?this.toDuration(e).get(e):NaN}count(e=`milliseconds`,t){if(!this.isValid)return NaN;let n=this.start.startOf(e,t),r;return r=t?.useLocaleWeeks?this.end.reconfigure({locale:n.locale}):this.end,r=r.startOf(e,t),Math.floor(r.diff(n,e).get(e))+(r.valueOf()!==this.end.valueOf())}hasSame(e){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,e):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(e){return this.isValid?this.s>e:!1}isBefore(e){return this.isValid?this.e<=e:!1}contains(e){return this.isValid?this.s<=e&&this.e>e:!1}set({start:t,end:n}={}){return this.isValid?e.fromDateTimes(t||this.s,n||this.e):this}splitAt(...t){if(!this.isValid)return[];let n=t.map(VT).filter(e=>this.contains(e)).sort((e,t)=>e.toMillis()-t.toMillis()),r=[],{s:i}=this,a=0;for(;i<this.e;){let t=n[a]||this.e,o=+t>+this.e?this.e:t;r.push(e.fromDateTimes(i,o)),i=o,a+=1}return r}splitBy(t){let n=Iw.fromDurationLike(t);if(!this.isValid||!n.isValid||n.as(`milliseconds`)===0)return[];let{s:r}=this,i=1,a,o=[];for(;r<this.e;){let t=this.start.plus(n.mapUnits(e=>e*i));a=+t>+this.e?this.e:t,o.push(e.fromDateTimes(r,a)),r=a,i+=1}return o}divideEqually(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]}overlaps(e){return this.e>e.s&&this.s<e.e}abutsStart(e){return this.isValid?+this.e==+e.s:!1}abutsEnd(e){return this.isValid?+e.e==+this.s:!1}engulfs(e){return this.isValid?this.s<=e.s&&this.e>=e.e:!1}equals(e){return!this.isValid||!e.isValid?!1:this.s.equals(e.s)&&this.e.equals(e.e)}intersection(t){if(!this.isValid)return this;let n=this.s>t.s?this.s:t.s,r=this.e<t.e?this.e:t.e;return n>=r?null:e.fromDateTimes(n,r)}union(t){if(!this.isValid)return this;let n=this.s<t.s?this.s:t.s,r=this.e>t.e?this.e:t.e;return e.fromDateTimes(n,r)}static merge(e){let[t,n]=e.sort((e,t)=>e.s-t.s).reduce(([e,t],n)=>t?t.overlaps(n)||t.abutsStart(n)?[e,t.union(n)]:[e.concat([t]),n]:[e,n],[[],null]);return n&&t.push(n),t}static xor(t){let n=null,r=0,i=[],a=t.map(e=>[{time:e.s,type:`s`},{time:e.e,type:`e`}]),o=Array.prototype.concat(...a).sort((e,t)=>e.time-t.time);for(let t of o)r+=t.type===`s`?1:-1,r===1?n=t.time:(n&&+n!=+t.time&&i.push(e.fromDateTimes(n,t.time)),n=null);return e.merge(i)}difference(...t){return e.xor([this].concat(t)).map(e=>this.intersection(e)).filter(e=>e&&!e.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:Lw}[Symbol.for(`nodejs.util.inspect.custom`)](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(e=Ub,t={}){return this.isValid?CC.create(this.s.loc.clone(t),e).formatInterval(this):Lw}toISO(e){return this.isValid?`${this.s.toISO(e)}/${this.e.toISO(e)}`:Lw}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Lw}toISOTime(e){return this.isValid?`${this.s.toISOTime(e)}/${this.e.toISOTime(e)}`:Lw}toFormat(e,{separator:t=` – `}={}){return this.isValid?`${this.s.toFormat(e)}${t}${this.e.toFormat(e)}`:Lw}toDuration(e,t){return this.isValid?this.e.diff(this.s,e,t):Iw.invalid(this.invalidReason)}mapEndpoints(t){return e.fromDateTimes(t(this.s),t(this.e))}},Bw=class{static hasDST(e=Y.defaultZone){let t=$.now().setZone(e).set({month:12});return!e.isUniversal&&t.offset!==t.set({month:6}).offset}static isValidIANAZone(e){return bx.isValidZone(e)}static normalizeZone(e){return Jx(e,Y.defaultZone)}static getStartOfWeek({locale:e=null,locObj:t=null}={}){return(t||J.create(e)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:e=null,locObj:t=null}={}){return(t||J.create(e)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:e=null,locObj:t=null}={}){return(t||J.create(e)).getWeekendDays().slice()}static months(e=`long`,{locale:t=null,numberingSystem:n=null,locObj:r=null,outputCalendar:i=`gregory`}={}){return(r||J.create(t,n,i)).months(e)}static monthsFormat(e=`long`,{locale:t=null,numberingSystem:n=null,locObj:r=null,outputCalendar:i=`gregory`}={}){return(r||J.create(t,n,i)).months(e,!0)}static weekdays(e=`long`,{locale:t=null,numberingSystem:n=null,locObj:r=null}={}){return(r||J.create(t,n,null)).weekdays(e)}static weekdaysFormat(e=`long`,{locale:t=null,numberingSystem:n=null,locObj:r=null}={}){return(r||J.create(t,n,null)).weekdays(e,!0)}static meridiems({locale:e=null}={}){return J.create(e).meridiems()}static eras(e=`short`,{locale:t=null}={}){return J.create(t,null,`gregory`).eras(e)}static features(){return{relative:jS(),localeWeek:MS()}}};function Vw(e,t){let n=e=>e.toUTC(0,{keepLocalTime:!0}).startOf(`day`).valueOf(),r=n(t)-n(e);return Math.floor(Iw.fromMillis(r).as(`days`))}function Hw(e,t,n){let r=[[`years`,(e,t)=>t.year-e.year],[`quarters`,(e,t)=>t.quarter-e.quarter+(t.year-e.year)*4],[`months`,(e,t)=>t.month-e.month+(t.year-e.year)*12],[`weeks`,(e,t)=>{let n=Vw(e,t);return(n-n%7)/7}],[`days`,Vw]],i={},a=e,o,s;for(let[c,l]of r)n.indexOf(c)>=0&&(o=c,i[c]=l(e,t),s=a.plus(i),s>t?(i[c]--,e=a.plus(i),e>t&&(s=e,i[c]--,e=a.plus(i))):e=s);return[e,i,s,o]}function Uw(e,t,n,r){let[i,a,o,s]=Hw(e,t,n),c=t-i,l=n.filter(e=>[`hours`,`minutes`,`seconds`,`milliseconds`].indexOf(e)>=0);l.length===0&&(o<t&&(o=i.plus({[s]:1})),o!==i&&(a[s]=(a[s]||0)+c/(o-i)));let u=Iw.fromObject(a,r);return l.length>0?Iw.fromMillis(c,r).shiftTo(...l).plus(u):u}var Ww=`missing Intl.DateTimeFormat.formatToParts support`;function Q(e,t=e=>e){return{regex:e,deser:([e])=>t(Qx(e))}}var Gw=`[ \xA0]`,Kw=new RegExp(Gw,`g`);function qw(e){return e.replace(/\./g,`\\.?`).replace(Kw,Gw)}function Jw(e){return e.replace(/\./g,``).replace(Kw,` `).toLowerCase()}function Yw(e,t){return e===null?null:{regex:RegExp(e.map(qw).join(`|`)),deser:([n])=>e.findIndex(e=>Jw(n)===Jw(e))+t}}function Xw(e,t){return{regex:e,deser:([,e,t])=>QS(e,t),groups:t}}function Zw(e){return{regex:e,deser:([e])=>e}}function Qw(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,`\\$&`)}function $w(e,t){let n=tS(t),r=tS(t,`{2}`),i=tS(t,`{3}`),a=tS(t,`{4}`),o=tS(t,`{6}`),s=tS(t,`{1,2}`),c=tS(t,`{1,3}`),l=tS(t,`{1,6}`),u=tS(t,`{1,9}`),d=tS(t,`{2,4}`),f=tS(t,`{4,6}`),p=e=>({regex:RegExp(Qw(e.val)),deser:([e])=>e,literal:!0}),m=(m=>{if(e.literal)return p(m);switch(m.val){case`G`:return Yw(t.eras(`short`),0);case`GG`:return Yw(t.eras(`long`),0);case`y`:return Q(l);case`yy`:return Q(d,XS);case`yyyy`:return Q(a);case`yyyyy`:return Q(f);case`yyyyyy`:return Q(o);case`M`:return Q(s);case`MM`:return Q(r);case`MMM`:return Yw(t.months(`short`,!0),1);case`MMMM`:return Yw(t.months(`long`,!0),1);case`L`:return Q(s);case`LL`:return Q(r);case`LLL`:return Yw(t.months(`short`,!1),1);case`LLLL`:return Yw(t.months(`long`,!1),1);case`d`:return Q(s);case`dd`:return Q(r);case`o`:return Q(c);case`ooo`:return Q(i);case`HH`:return Q(r);case`H`:return Q(s);case`hh`:return Q(r);case`h`:return Q(s);case`mm`:return Q(r);case`m`:return Q(s);case`q`:return Q(s);case`qq`:return Q(r);case`s`:return Q(s);case`ss`:return Q(r);case`S`:return Q(c);case`SSS`:return Q(i);case`u`:return Zw(u);case`uu`:return Zw(s);case`uuu`:return Q(n);case`a`:return Yw(t.meridiems(),0);case`kkkk`:return Q(a);case`kk`:return Q(d,XS);case`W`:return Q(s);case`WW`:return Q(r);case`E`:case`c`:return Q(n);case`EEE`:return Yw(t.weekdays(`short`,!1),1);case`EEEE`:return Yw(t.weekdays(`long`,!1),1);case`ccc`:return Yw(t.weekdays(`short`,!0),1);case`cccc`:return Yw(t.weekdays(`long`,!0),1);case`Z`:case`ZZ`:return Xw(RegExp(`([+-]${s.source})(?::(${r.source}))?`),2);case`ZZZ`:return Xw(RegExp(`([+-]${s.source})(${r.source})?`),2);case`z`:return Zw(/[a-z_+-/]{1,256}?/i);case` `:return Zw(/[^\S\n\r]/);default:return p(m)}})(e)||{invalidReason:Ww};return m.token=e,m}var eT={year:{"2-digit":`yy`,numeric:`yyyyy`},month:{numeric:`M`,"2-digit":`MM`,short:`MMM`,long:`MMMM`},day:{numeric:`d`,"2-digit":`dd`},weekday:{short:`EEE`,long:`EEEE`},dayperiod:`a`,dayPeriod:`a`,hour12:{numeric:`h`,"2-digit":`hh`},hour24:{numeric:`H`,"2-digit":`HH`},minute:{numeric:`m`,"2-digit":`mm`},second:{numeric:`s`,"2-digit":`ss`},timeZoneName:{long:`ZZZZZ`,short:`ZZZ`}};function tT(e,t,n){let{type:r,value:i}=e;if(r===`literal`){let e=/^\s+$/.test(i);return{literal:!e,val:e?` `:i}}let a=t[r],o=r;r===`hour`&&(o=t.hour12==null?t.hourCycle==null?n.hour12?`hour12`:`hour24`:t.hourCycle===`h11`||t.hourCycle===`h12`?`hour12`:`hour24`:t.hour12?`hour12`:`hour24`);let s=eT[o];if(typeof s==`object`&&(s=s[a]),s)return{literal:!1,val:s}}function nT(e){return[`^${e.map(e=>e.regex).reduce((e,t)=>`${e}(${t.source})`,``)}$`,e]}function rT(e,t,n){let r=e.match(t);if(r){let e={},t=1;for(let i in n)if(IS(n,i)){let a=n[i],o=a.groups?a.groups+1:1;!a.literal&&a.token&&(e[a.token.val[0]]=a.deser(r.slice(t,t+o))),t+=o}return[r,e]}else return[r,{}]}function iT(e){let t=e=>{switch(e){case`S`:return`millisecond`;case`s`:return`second`;case`m`:return`minute`;case`h`:case`H`:return`hour`;case`d`:return`day`;case`o`:return`ordinal`;case`L`:case`M`:return`month`;case`y`:return`year`;case`E`:case`c`:return`weekday`;case`W`:return`weekNumber`;case`k`:return`weekYear`;case`q`:return`quarter`;default:return null}},n=null,r;return X(e.z)||(n=bx.create(e.z)),X(e.Z)||(n||=new Kx(e.Z),r=e.Z),X(e.q)||(e.M=(e.q-1)*3+1),X(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),X(e.u)||(e.S=HS(e.u)),[Object.keys(e).reduce((n,r)=>{let i=t(r);return i&&(n[i]=e[r]),n},{}),n,r]}var aT=null;function oT(){return aT||=$.fromMillis(1555555555555),aT}function sT(e,t){if(e.literal)return e;let n=fT(CC.macroTokenToFormatOpts(e.val),t);return n==null||n.includes(void 0)?e:n}function cT(e,t){return Array.prototype.concat(...e.map(e=>sT(e,t)))}var lT=class{constructor(e,t){if(this.locale=e,this.format=t,this.tokens=cT(CC.parseFormat(t),e),this.units=this.tokens.map(t=>$w(t,e)),this.disqualifyingUnit=this.units.find(e=>e.invalidReason),!this.disqualifyingUnit){let[e,t]=nT(this.units);this.regex=RegExp(e,`i`),this.handlers=t}}explainFromTokens(e){if(this.isValid){let[t,n]=rT(e,this.regex,this.handlers),[r,i,a]=n?iT(n):[null,null,void 0];if(IS(n,`a`)&&IS(n,`H`))throw new Lb(`Can't include meridiem when specifying 24-hour format`);return{input:e,tokens:this.tokens,regex:this.regex,rawMatches:t,matches:n,result:r,zone:i,specificOffset:a}}else return{input:e,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}};function uT(e,t,n){return new lT(e,n).explainFromTokens(t)}function dT(e,t,n){let{result:r,zone:i,specificOffset:a,invalidReason:o}=uT(e,t,n);return[r,i,a,o]}function fT(e,t){if(!e)return null;let n=CC.create(t,e).dtFormatter(oT()),r=n.formatToParts(),i=n.resolvedOptions();return r.map(t=>tT(t,e,i))}var pT=`Invalid DateTime`,mT=864e13;function hT(e){return new uS(`unsupported zone`,`the zone "${e.name}" is not supported`)}function gT(e){return e.weekData===null&&(e.weekData=vS(e.c)),e.weekData}function _T(e){return e.localWeekData===null&&(e.localWeekData=vS(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function vT(e,t){let n={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new $({...n,...t,old:n})}function yT(e,t,n){let r=e-t*60*1e3,i=n.offset(r);if(t===i)return[r,t];r-=(i-t)*60*1e3;let a=n.offset(r);return i===a?[r,i]:[e-Math.min(i,a)*60*1e3,Math.max(i,a)]}function bT(e,t){e+=t*60*1e3;let n=new Date(e);return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate(),hour:n.getUTCHours(),minute:n.getUTCMinutes(),second:n.getUTCSeconds(),millisecond:n.getUTCMilliseconds()}}function xT(e,t,n){return yT(qS(e),t,n)}function ST(e,t){let n=e.o,r=e.c.year+Math.trunc(t.years),i=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,a={...e.c,year:r,month:i,day:Math.min(e.c.day,KS(r,i))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},o=Iw.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as(`milliseconds`),[s,c]=yT(qS(a),n,e.zone);return o!==0&&(s+=o,c=e.zone.offset(s)),{ts:s,o:c}}function CT(e,t,n,r,i,a){let{setZone:o,zone:s}=n;if(e&&Object.keys(e).length!==0||t){let r=t||s,i=$.fromObject(e,{...n,zone:r,specificOffset:a});return o?i:i.setZone(s)}else return $.invalid(new uS(`unparsable`,`the input "${i}" can't be parsed as ${r}`))}function wT(e,t,n=!0){return e.isValid?CC.create(J.create(`en-US`),{allowZ:n,forceSimple:!0}).formatDateTimeFromString(e,t):null}function TT(e,t,n){let r=e.c.year>9999||e.c.year<0,i=``;if(r&&e.c.year>=0&&(i+=`+`),i+=Z(e.c.year,r?6:4),n===`year`)return i;if(t){if(i+=`-`,i+=Z(e.c.month),n===`month`)return i;i+=`-`}else if(i+=Z(e.c.month),n===`month`)return i;return i+=Z(e.c.day),i}function ET(e,t,n,r,i,a,o){let s=!n||e.c.millisecond!==0||e.c.second!==0,c=``;switch(o){case`day`:case`month`:case`year`:break;default:if(c+=Z(e.c.hour),o===`hour`)break;if(t){if(c+=`:`,c+=Z(e.c.minute),o===`minute`)break;s&&(c+=`:`,c+=Z(e.c.second))}else{if(c+=Z(e.c.minute),o===`minute`)break;s&&(c+=Z(e.c.second))}if(o===`second`)break;s&&(!r||e.c.millisecond!==0)&&(c+=`.`,c+=Z(e.c.millisecond,3))}return i&&(e.isOffsetFixed&&e.offset===0&&!a?c+=`Z`:e.o<0?(c+=`-`,c+=Z(Math.trunc(-e.o/60)),c+=`:`,c+=Z(Math.trunc(-e.o%60))):(c+=`+`,c+=Z(Math.trunc(e.o/60)),c+=`:`,c+=Z(Math.trunc(e.o%60)))),a&&(c+=`[`+e.zone.ianaName+`]`),c}var DT={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},OT={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},kT={ordinal:1,hour:0,minute:0,second:0,millisecond:0},AT=[`year`,`month`,`day`,`hour`,`minute`,`second`,`millisecond`],jT=[`weekYear`,`weekNumber`,`weekday`,`hour`,`minute`,`second`,`millisecond`],MT=[`year`,`ordinal`,`hour`,`minute`,`second`,`millisecond`];function NT(e){let t={year:`year`,years:`year`,month:`month`,months:`month`,day:`day`,days:`day`,hour:`hour`,hours:`hour`,minute:`minute`,minutes:`minute`,quarter:`quarter`,quarters:`quarter`,second:`second`,seconds:`second`,millisecond:`millisecond`,milliseconds:`millisecond`,weekday:`weekday`,weekdays:`weekday`,weeknumber:`weekNumber`,weeksnumber:`weekNumber`,weeknumbers:`weekNumber`,weekyear:`weekYear`,weekyears:`weekYear`,ordinal:`ordinal`}[e.toLowerCase()];if(!t)throw new Rb(e);return t}function PT(e){switch(e.toLowerCase()){case`localweekday`:case`localweekdays`:return`localWeekday`;case`localweeknumber`:case`localweeknumbers`:return`localWeekNumber`;case`localweekyear`:case`localweekyears`:return`localWeekYear`;default:return NT(e)}}function FT(e){if(zT===void 0&&(zT=Y.now()),e.type!==`iana`)return e.offset(zT);let t=e.name,n=BT.get(t);return n===void 0&&(n=e.offset(zT),BT.set(t,n)),n}function IT(e,t){let n=Jx(t.zone,Y.defaultZone);if(!n.isValid)return $.invalid(hT(n));let r=J.fromObject(t),i,a;if(X(e.year))i=Y.now();else{for(let t of AT)X(e[t])&&(e[t]=DT[t]);let t=TS(e)||ES(e);if(t)return $.invalid(t);let r=FT(n);[i,a]=xT(e,r,n)}return new $({ts:i,zone:n,loc:r,o:a})}function LT(e,t,n){let r=X(n.round)?!0:n.round,i=X(n.rounding)?`trunc`:n.rounding,a=(e,a)=>(e=US(e,r||n.calendary?0:2,n.calendary?`round`:i),t.loc.clone(n).relFormatter(n).format(e,a)),o=r=>n.calendary?t.hasSame(e,r)?0:t.startOf(r).diff(e.startOf(r),r).get(r):t.diff(e,r).get(r);if(n.unit)return a(o(n.unit),n.unit);for(let e of n.units){let t=o(e);if(Math.abs(t)>=1)return a(t,e)}return a(e>t?-0:0,n.units[n.units.length-1])}function RT(e){let t={},n;return e.length>0&&typeof e[e.length-1]==`object`?(t=e[e.length-1],n=Array.from(e).slice(0,e.length-1)):n=Array.from(e),[t,n]}var zT,BT=new Map,$=class e{constructor(e){let t=e.zone||Y.defaultZone,n=e.invalid||(Number.isNaN(e.ts)?new uS(`invalid input`):null)||(t.isValid?null:hT(t));this.ts=X(e.ts)?Y.now():e.ts;let r=null,i=null;if(!n)if(e.old&&e.old.ts===this.ts&&e.old.zone.equals(t))[r,i]=[e.old.c,e.old.o];else{let a=DS(e.o)&&!e.old?e.o:t.offset(this.ts);r=bT(this.ts,a),n=Number.isNaN(r.year)?new uS(`invalid input`):null,r=n?null:r,i=n?null:a}this._zone=t,this.loc=e.loc||J.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=r,this.o=i,this.isLuxonDateTime=!0}static now(){return new e({})}static local(){let[e,t]=RT(arguments),[n,r,i,a,o,s,c]=t;return IT({year:n,month:r,day:i,hour:a,minute:o,second:s,millisecond:c},e)}static utc(){let[e,t]=RT(arguments),[n,r,i,a,o,s,c]=t;return e.zone=Kx.utcInstance,IT({year:n,month:r,day:i,hour:a,minute:o,second:s,millisecond:c},e)}static fromJSDate(t,n={}){let r=AS(t)?t.valueOf():NaN;if(Number.isNaN(r))return e.invalid(`invalid input`);let i=Jx(n.zone,Y.defaultZone);return i.isValid?new e({ts:r,zone:i,loc:J.fromObject(n)}):e.invalid(hT(i))}static fromMillis(t,n={}){if(!DS(t))throw new zb(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`);return t<-864e13||t>mT?e.invalid(`Timestamp out of range`):new e({ts:t,zone:Jx(n.zone,Y.defaultZone),loc:J.fromObject(n)})}static fromSeconds(t,n={}){if(DS(t))return new e({ts:t*1e3,zone:Jx(n.zone,Y.defaultZone),loc:J.fromObject(n)});throw new zb(`fromSeconds requires a numerical input`)}static fromObject(t,n={}){t||={};let r=Jx(n.zone,Y.defaultZone);if(!r.isValid)return e.invalid(hT(r));let i=J.fromObject(n),a=eC(t,PT),{minDaysInFirstWeek:o,startOfWeek:s}=SS(a,i),c=Y.now(),l=X(n.specificOffset)?r.offset(c):n.specificOffset,u=!X(a.ordinal),d=!X(a.year),f=!X(a.month)||!X(a.day),p=d||f,m=a.weekYear||a.weekNumber;if((p||u)&&m)throw new Lb(`Can't mix weekYear/weekNumber units with year/month/day or ordinals`);if(f&&u)throw new Lb(`Can't mix ordinal dates with month/day`);let h=m||a.weekday&&!p,g,_,v=bT(c,l);h?(g=jT,_=OT,v=vS(v,o,s)):u?(g=MT,_=kT,v=bS(v)):(g=AT,_=DT);let y=!1;for(let e of g){let t=a[e];X(t)?y?a[e]=_[e]:a[e]=v[e]:y=!0}let b=(h?CS(a,o,s):u?wS(a):TS(a))||ES(a);if(b)return e.invalid(b);let[x,S]=xT(h?yS(a,o,s):u?xS(a):a,l,r),C=new e({ts:x,zone:r,o:S,loc:i});return a.weekday&&p&&t.weekday!==C.weekday?e.invalid(`mismatched weekday`,`you can't specify both a weekday of ${a.weekday} and a date of ${C.toISO()}`):C.isValid?C:e.invalid(C.invalid)}static fromISO(e,t={}){let[n,r]=mw(e);return CT(n,r,t,`ISO 8601`,e)}static fromRFC2822(e,t={}){let[n,r]=hw(e);return CT(n,r,t,`RFC 2822`,e)}static fromHTTP(e,t={}){let[n,r]=gw(e);return CT(n,r,t,`HTTP`,t)}static fromFormat(t,n,r={}){if(X(t)||X(n))throw new zb(`fromFormat requires an input string and a format`);let{locale:i=null,numberingSystem:a=null}=r,[o,s,c,l]=dT(J.fromOpts({locale:i,numberingSystem:a,defaultToEN:!0}),t,n);return l?e.invalid(l):CT(o,s,r,`format ${n}`,t,c)}static fromString(t,n,r={}){return e.fromFormat(t,n,r)}static fromSQL(e,t={}){let[n,r]=Cw(e);return CT(n,r,t,`SQL`,e)}static invalid(t,n=null){if(!t)throw new zb(`need to specify a reason the DateTime is invalid`);let r=t instanceof uS?t:new uS(t,n);if(Y.throwOnInvalid)throw new Pb(r);return new e({invalid:r})}static isDateTime(e){return e&&e.isLuxonDateTime||!1}static parseFormatForOpts(e,t={}){let n=fT(e,J.fromObject(t));return n?n.map(e=>e?e.val:null).join(``):null}static expandFormat(e,t={}){return cT(CC.parseFormat(e),J.fromObject(t)).map(e=>e.val).join(``)}static resetCache(){zT=void 0,BT.clear()}get(e){return this[e]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?gT(this).weekYear:NaN}get weekNumber(){return this.isValid?gT(this).weekNumber:NaN}get weekday(){return this.isValid?gT(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?_T(this).weekday:NaN}get localWeekNumber(){return this.isValid?_T(this).weekNumber:NaN}get localWeekYear(){return this.isValid?_T(this).weekYear:NaN}get ordinal(){return this.isValid?bS(this.c).ordinal:NaN}get monthShort(){return this.isValid?Bw.months(`short`,{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?Bw.months(`long`,{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?Bw.weekdays(`short`,{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?Bw.weekdays(`long`,{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:`short`,locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:`long`,locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];let e=864e5,t=6e4,n=qS(this.c),r=this.zone.offset(n-e),i=this.zone.offset(n+e),a=this.zone.offset(n-r*t),o=this.zone.offset(n-i*t);if(a===o)return[this];let s=n-a*t,c=n-o*t,l=bT(s,a),u=bT(c,o);return l.hour===u.hour&&l.minute===u.minute&&l.second===u.second&&l.millisecond===u.millisecond?[vT(this,{ts:s}),vT(this,{ts:c})]:[this]}get isInLeapYear(){return WS(this.year)}get daysInMonth(){return KS(this.year,this.month)}get daysInYear(){return this.isValid?GS(this.year):NaN}get weeksInWeekYear(){return this.isValid?YS(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?YS(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(e={}){let{locale:t,numberingSystem:n,calendar:r}=CC.create(this.loc.clone(e),e).resolvedOptions(this);return{locale:t,numberingSystem:n,outputCalendar:r}}toUTC(e=0,t={}){return this.setZone(Kx.instance(e),t)}toLocal(){return this.setZone(Y.defaultZone)}setZone(t,{keepLocalTime:n=!1,keepCalendarTime:r=!1}={}){if(t=Jx(t,Y.defaultZone),t.equals(this.zone))return this;if(t.isValid){let e=this.ts;if(n||r){let n=t.offset(this.ts),r=this.toObject();[e]=xT(r,n,t)}return vT(this,{ts:e,zone:t})}else return e.invalid(hT(t))}reconfigure({locale:e,numberingSystem:t,outputCalendar:n}={}){let r=this.loc.clone({locale:e,numberingSystem:t,outputCalendar:n});return vT(this,{loc:r})}setLocale(e){return this.reconfigure({locale:e})}set(e){if(!this.isValid)return this;let t=eC(e,PT),{minDaysInFirstWeek:n,startOfWeek:r}=SS(t,this.loc),i=!X(t.weekYear)||!X(t.weekNumber)||!X(t.weekday),a=!X(t.ordinal),o=!X(t.year),s=!X(t.month)||!X(t.day),c=o||s,l=t.weekYear||t.weekNumber;if((c||a)&&l)throw new Lb(`Can't mix weekYear/weekNumber units with year/month/day or ordinals`);if(s&&a)throw new Lb(`Can't mix ordinal dates with month/day`);let u;i?u=yS({...vS(this.c,n,r),...t},n,r):X(t.ordinal)?(u={...this.toObject(),...t},X(t.day)&&(u.day=Math.min(KS(u.year,u.month),u.day))):u=xS({...bS(this.c),...t});let[d,f]=xT(u,this.o,this.zone);return vT(this,{ts:d,o:f})}plus(e){if(!this.isValid)return this;let t=Iw.fromDurationLike(e);return vT(this,ST(this,t))}minus(e){if(!this.isValid)return this;let t=Iw.fromDurationLike(e).negate();return vT(this,ST(this,t))}startOf(e,{useLocaleWeeks:t=!1}={}){if(!this.isValid)return this;let n={},r=Iw.normalizeUnit(e);switch(r){case`years`:n.month=1;case`quarters`:case`months`:n.day=1;case`weeks`:case`days`:n.hour=0;case`hours`:n.minute=0;case`minutes`:n.second=0;case`seconds`:n.millisecond=0;break}if(r===`weeks`)if(t){let e=this.loc.getStartOfWeek(),{weekday:t}=this;t<e&&(n.weekNumber=this.weekNumber-1),n.weekday=e}else n.weekday=1;return r===`quarters`&&(n.month=(Math.ceil(this.month/3)-1)*3+1),this.set(n)}endOf(e,t){return this.isValid?this.plus({[e]:1}).startOf(e,t).minus(1):this}toFormat(e,t={}){return this.isValid?CC.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this,e):pT}toLocaleString(e=Ub,t={}){return this.isValid?CC.create(this.loc.clone(t),e).formatDateTime(this):pT}toLocaleParts(e={}){return this.isValid?CC.create(this.loc.clone(e),e).formatDateTimeParts(this):[]}toISO({format:e=`extended`,suppressSeconds:t=!1,suppressMilliseconds:n=!1,includeOffset:r=!0,extendedZone:i=!1,precision:a=`milliseconds`}={}){if(!this.isValid)return null;a=NT(a);let o=e===`extended`,s=TT(this,o,a);return AT.indexOf(a)>=3&&(s+=`T`),s+=ET(this,o,t,n,r,i,a),s}toISODate({format:e=`extended`,precision:t=`day`}={}){return this.isValid?TT(this,e===`extended`,NT(t)):null}toISOWeekDate(){return wT(this,`kkkk-'W'WW-c`)}toISOTime({suppressMilliseconds:e=!1,suppressSeconds:t=!1,includeOffset:n=!0,includePrefix:r=!1,extendedZone:i=!1,format:a=`extended`,precision:o=`milliseconds`}={}){return this.isValid?(o=NT(o),(r&&AT.indexOf(o)>=3?`T`:``)+ET(this,a===`extended`,t,e,n,i,o)):null}toRFC2822(){return wT(this,`EEE, dd LLL yyyy HH:mm:ss ZZZ`,!1)}toHTTP(){return wT(this.toUTC(),`EEE, dd LLL yyyy HH:mm:ss 'GMT'`)}toSQLDate(){return this.isValid?TT(this,!0):null}toSQLTime({includeOffset:e=!0,includeZone:t=!1,includeOffsetSpace:n=!0}={}){let r=`HH:mm:ss.SSS`;return(t||e)&&(n&&(r+=` `),t?r+=`z`:e&&(r+=`ZZ`)),wT(this,r,!0)}toSQL(e={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(e)}`:null}toString(){return this.isValid?this.toISO():pT}[Symbol.for(`nodejs.util.inspect.custom`)](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(e={}){if(!this.isValid)return{};let t={...this.c};return e.includeConfig&&(t.outputCalendar=this.outputCalendar,t.numberingSystem=this.loc.numberingSystem,t.locale=this.loc.locale),t}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(e,t=`milliseconds`,n={}){if(!this.isValid||!e.isValid)return Iw.invalid(`created by diffing an invalid DateTime`);let r={locale:this.locale,numberingSystem:this.numberingSystem,...n},i=NS(t).map(Iw.normalizeUnit),a=e.valueOf()>this.valueOf(),o=Uw(a?this:e,a?e:this,i,r);return a?o.negate():o}diffNow(t=`milliseconds`,n={}){return this.diff(e.now(),t,n)}until(e){return this.isValid?zw.fromDateTimes(this,e):this}hasSame(e,t,n){if(!this.isValid)return!1;let r=e.valueOf(),i=this.setZone(e.zone,{keepLocalTime:!0});return i.startOf(t,n)<=r&&r<=i.endOf(t,n)}equals(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)}toRelative(t={}){if(!this.isValid)return null;let n=t.base||e.fromObject({},{zone:this.zone}),r=t.padding?this<n?-t.padding:t.padding:0,i=[`years`,`months`,`days`,`hours`,`minutes`,`seconds`],a=t.unit;return Array.isArray(t.unit)&&(i=t.unit,a=void 0),LT(n,this.plus(r),{...t,numeric:`always`,units:i,unit:a})}toRelativeCalendar(t={}){return this.isValid?LT(t.base||e.fromObject({},{zone:this.zone}),this,{...t,numeric:`auto`,units:[`years`,`months`,`days`],calendary:!0}):null}static min(...t){if(!t.every(e.isDateTime))throw new zb(`min requires all arguments be DateTimes`);return PS(t,e=>e.valueOf(),Math.min)}static max(...t){if(!t.every(e.isDateTime))throw new zb(`max requires all arguments be DateTimes`);return PS(t,e=>e.valueOf(),Math.max)}static fromFormatExplain(e,t,n={}){let{locale:r=null,numberingSystem:i=null}=n;return uT(J.fromOpts({locale:r,numberingSystem:i,defaultToEN:!0}),e,t)}static fromStringExplain(t,n,r={}){return e.fromFormatExplain(t,n,r)}static buildFormatParser(e,t={}){let{locale:n=null,numberingSystem:r=null}=t;return new lT(J.fromOpts({locale:n,numberingSystem:r,defaultToEN:!0}),e)}static fromFormatParser(t,n,r={}){if(X(t)||X(n))throw new zb(`fromFormatParser requires an input string and a format parser`);let{locale:i=null,numberingSystem:a=null}=r,o=J.fromOpts({locale:i,numberingSystem:a,defaultToEN:!0});if(!o.equals(n.locale))throw new zb(`fromFormatParser called with a locale of ${o}, but the format parser was created for ${n.locale}`);let{result:s,zone:c,specificOffset:l,invalidReason:u}=n.explainFromTokens(t);return u?e.invalid(u):CT(s,c,r,`format ${n.format}`,t,l)}static get DATE_SHORT(){return Ub}static get DATE_MED(){return Wb}static get DATE_MED_WITH_WEEKDAY(){return Gb}static get DATE_FULL(){return Kb}static get DATE_HUGE(){return qb}static get TIME_SIMPLE(){return Jb}static get TIME_WITH_SECONDS(){return Yb}static get TIME_WITH_SHORT_OFFSET(){return Xb}static get TIME_WITH_LONG_OFFSET(){return Zb}static get TIME_24_SIMPLE(){return Qb}static get TIME_24_WITH_SECONDS(){return $b}static get TIME_24_WITH_SHORT_OFFSET(){return ex}static get TIME_24_WITH_LONG_OFFSET(){return tx}static get DATETIME_SHORT(){return nx}static get DATETIME_SHORT_WITH_SECONDS(){return rx}static get DATETIME_MED(){return ix}static get DATETIME_MED_WITH_SECONDS(){return ax}static get DATETIME_MED_WITH_WEEKDAY(){return ox}static get DATETIME_FULL(){return sx}static get DATETIME_FULL_WITH_SECONDS(){return cx}static get DATETIME_HUGE(){return lx}static get DATETIME_HUGE_WITH_SECONDS(){return ux}};function VT(e){if($.isDateTime(e))return e;if(e&&e.valueOf&&DS(e.valueOf()))return $.fromJSDate(e);if(e&&typeof e==`object`)return $.fromObject(e);throw new zb(`Unknown datetime argument: ${e}, of type ${typeof e}`)}function HT(e=new Date){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}function UT(e=new Date){return new Intl.DateTimeFormat(`en-US`,{weekday:`long`,year:`numeric`,month:`long`,day:`numeric`}).format(e)}function WT(e=new Date){return new Intl.DateTimeFormat(`en-u-ca-islamic`,{year:`numeric`,month:`long`,day:`numeric`}).format(e)}function GT(e,t=new Date){let n=e.dates[HT(t)];return n?{value:n,official:!0}:{value:WT(t),official:!1}}var KT={muharrem:`muharrem`,muharram:`muharrem`,safer:`safer`,safar:`safer`,rebiulevvel:`rebiulevvel`,rebiülevvel:`rebiulevvel`,rabiulawwal:`rebiulevvel`,"rabi-al-awwal":`rebiulevvel`,"rabi ul awwal":`rebiulevvel`,rebiulahir:`rebiulahir`,rebiülahir:`rebiulahir`,"rabi-al-thani":`rebiulahir`,cemaziyelevvel:`cemaziyelevvel`,cemâziyelevvel:`cemaziyelevvel`,"jumada-al-awwal":`cemaziyelevvel`,cemaziyelahir:`cemaziyelahir`,cemâziyelâhir:`cemaziyelahir`,"jumada-al-thani":`cemaziyelahir`,recep:`recep`,rajab:`recep`,saban:`saban`,şaban:`saban`,shaban:`saban`,ramazan:`ramazan`,ramadan:`ramazan`,sevval:`sevval`,şevval:`sevval`,shawwal:`sevval`,zilkade:`zilkade`,"dhu-al-qidah":`zilkade`,zilhicce:`zilhicce`,"dhu-al-hijjah":`zilhicce`};function qT(e){let t=e.toLocaleLowerCase(`tr-TR`).replace(/[’'._]/g,``).replace(/\s+/g,` `).trim();return KT[t]||t.replace(/\s|-/g,``)}function JT(e){let t=e.trim().match(/^(\d{1,2})\s+(.+?)\s+(\d{3,4})$/);return t?{day:Number(t[1]),month:qT(t[2]),year:Number(t[3])}:null}function YT(e,t,n=new Date){let r=HT(n);if(e.calendar===`gregorian`)return e.date===r;let i=JT(t);return!i||e.hijriDay===void 0||!e.hijriMonth?!1:i.day===e.hijriDay&&i.month===qT(e.hijriMonth)}function XT(e,t=new Date){if(e.start){let t=e.timezone?$.fromISO(e.start,{zone:e.timezone}):$.fromISO(e.start);return t.isValid?t.toLocal().toLocaleString($.DATETIME_MED_WITH_WEEKDAY):``}if(e.startTime){let n=`${HT(t)}T${e.startTime}`,r=$.fromISO(n,{zone:e.timezone||`local`});return r.isValid?r.toLocal().toLocaleString($.TIME_SIMPLE):``}return``}function ZT(e,t=new Date,n=0){if(e<=0)return-1;let r=Number(`${t.getFullYear()}${String(t.getMonth()+1).padStart(2,`0`)}${String(t.getDate()).padStart(2,`0`)}`);return Math.abs(r+n)%e}var QT={class:`home-page`},$T={class:`date-orbit`,"aria-label":`Date`},eE={class:`date-core`},tE={key:0,class:`illuminated-panel quote-panel`},nE={key:1,class:`illuminated-panel verse-panel`},rE={key:2,class:`event-band`},iE=[`href`,`target`,`rel`],aE={key:0},oE=Sr({__name:`HomeView`,setup(e){let{activeLocale:t}=hy(),n=A(new Date),r=window.setInterval(()=>{n.value=new Date},6e4);Br(()=>window.clearInterval(r));let i=L(()=>{let e=ry.get(t.value)||[],r=ZT(e.length,n.value);return r>=0?e[r]:``}),a=L(()=>{let e=oy.get(t.value)||[],r=ZT(e.length,n.value,17);return r>=0?e[r]:null}),o=L(()=>UT(n.value)),s=L(()=>GT(dy,n.value)),c=L(()=>uy.filter(e=>YT(e,s.value.value,n.value)).map(e=>({...e,localTime:XT(e,n.value)}))),l=Intl.DateTimeFormat().resolvedOptions().timeZone;return(e,t)=>(N(),P(`div`,QT,[F(`section`,$T,[t[2]||=F(`div`,{class:`orbit-rings`,"aria-hidden":`true`},null,-1),F(`div`,eE,[t[0]||=F(`span`,{class:`eyebrow`},`AQRT Manual`,-1),F(`time`,null,E(o.value),1),t[1]||=F(`span`,{class:`date-divider`},null,-1),F(`time`,null,E(s.value.value),1),F(`small`,null,E(s.value.official?`Diyanet Islamic`:`Islamic`),1)])]),i.value?(N(),P(`section`,tE,[t[3]||=F(`span`,{class:`panel-number`},`01`,-1),F(`blockquote`,null,E(i.value),1)])):Aa(``,!0),a.value?(N(),P(`section`,nE,[t[4]||=F(`span`,{class:`panel-number`},`02`,-1),F(`blockquote`,null,E(a.value.text),1),F(`cite`,null,E(a.value.reference),1)])):Aa(``,!0),c.value.length?(N(),P(`section`,rE,[F(`header`,null,[t[5]||=F(`span`,null,`Events`,-1),F(`small`,null,E(j(l)),1)]),(N(!0),P(M,null,Zr(c.value,e=>(N(),P(`a`,{key:e.id,class:`event-entry`,href:e.url||void 0,target:e.url?`_blank`:void 0,rel:e.url?`noreferrer`:void 0},[F(`strong`,null,E(e.title),1),e.localTime?(N(),P(`span`,aE,E(e.localTime),1)):Aa(``,!0)],8,iE))),128))])):Aa(``,!0)]))}}),sE={class:`manual-index page-enter`},cE={class:`page-heading ornament-heading`},lE={class:`heading-actions`},uE=[`disabled`],dE={class:`toc-grid`},fE={class:`toc-check`},pE=[`value`],mE={class:`toc-ordinal`},hE={class:`toc-page`},gE=Sr({__name:`ManualView`,setup(e){let{activeLocale:t}=hy(),n=A([]),r=L(()=>ey.get(t.value)||[]),i=L(()=>ny.filter(e=>e.locale===t.value).length);function a(e){return e.id===`allahs-99-beautiful-names`?`/names`:`/manual/page/${e.page}`}function o(e){let t=[...new Set(r.value.map(e=>e.page))].sort((e,t)=>e-t).find(t=>t>e.page)||i.value+1;return Array.from({length:Math.max(1,t-e.page)},(t,n)=>e.page+n)}let s=L(()=>{let e=new Set;for(let t of n.value){let n=r.value.find(e=>e.id===t);n&&o(n).forEach(t=>e.add(t))}return[...e].sort((e,t)=>e-t)});function c(){if(!s.value.length)return;let e=encodeURIComponent(s.value.join(`,`));window.open(`${window.location.origin}${window.location.pathname}#/print?pages=${e}`,`_blank`,`noopener`)}function l(){n.value=n.value.length===r.value.length?[]:r.value.map(e=>e.id)}return(e,t)=>{let i=qr(`RouterLink`);return N(),P(`section`,sE,[F(`header`,cE,[t[1]||=F(`div`,null,[F(`span`,{class:`eyebrow`},`AQRT Manual`),F(`h1`,null,`Table of Contents`)],-1),F(`div`,lE,[F(`button`,{class:`outline-action`,type:`button`,onClick:l},`All`),F(`button`,{class:`gold-action`,type:`button`,disabled:!s.value.length,onClick:c},`PDF`,8,uE)])]),F(`div`,dE,[(N(!0),P(M,null,Zr(r.value,(e,r)=>(N(),P(`article`,{key:e.id,class:`toc-card`},[F(`label`,fE,[Ln(F(`input`,{"onUpdate:modelValue":t[0]||=e=>n.value=e,type:`checkbox`,value:e.id},null,8,pE),[[_s,n.value]]),t[2]||=F(`span`,{"aria-hidden":`true`},null,-1)]),I(i,{to:a(e),class:`toc-link`},{default:In(()=>[F(`span`,mE,E(String(r+1).padStart(2,`0`)),1),F(`strong`,null,E(e.title),1),F(`span`,hE,E(e.displayPage),1)]),_:2},1032,[`to`])]))),128))])])}}}),_E={key:0,class:`manual-reader page-enter`},vE={class:`reader-toc`},yE={class:`reader-sheet`},bE={class:`reader-header`},xE={class:`eyebrow`},SE={class:`heading-actions`},CE={class:`manual-text`},wE={class:`reader-pager`,"aria-label":`Manual pages`},TE=[`disabled`],EE=[`disabled`],DE=Sr({__name:`ManualPageView`,setup(e){let t=nc(),n=tc(),{activeLocale:r}=hy(),i=L(()=>Number(t.params.page)),a=L(()=>ny.find(e=>e.locale===r.value&&e.page===i.value)),o=L(()=>ey.get(r.value)||[]),s=L(()=>ny.filter(e=>e.locale===r.value).length);function c(e){return e.id===`allahs-99-beautiful-names`?`/names`:`/manual/page/${e.page}`}function l(e){let t=i.value+e;t>=1&&t<=s.value&&n.push(`/manual/page/${t}`)}function u(){window.open(`${window.location.origin}${window.location.pathname}#/print?pages=${i.value}`,`_blank`,`noopener`)}return(e,t)=>{let n=qr(`RouterLink`);return a.value?(N(),P(`section`,_E,[F(`aside`,vE,[I(n,{to:`/manual`,class:`reader-toc-title`},{default:In(()=>[...t[2]||=[Oa(`Contents`,-1)]]),_:1}),(N(!0),P(M,null,Zr(o.value,e=>(N(),ba(n,{key:e.id,to:c(e),class:xe({active:e.page===i.value})},{default:In(()=>[Oa(E(e.title),1)]),_:2},1032,[`to`,`class`]))),128))]),F(`article`,yE,[F(`header`,bE,[F(`div`,null,[F(`span`,xE,E(a.value.page),1),F(`h1`,null,E(a.value.title),1)]),F(`div`,SE,[i.value>=60&&i.value<=74?(N(),ba(n,{key:0,class:`outline-action`,to:`/names`},{default:In(()=>[...t[3]||=[Oa(`99 Names`,-1)]]),_:1})):Aa(``,!0),F(`button`,{class:`gold-action`,type:`button`,onClick:u},`PDF`)])]),F(`div`,CE,E(a.value.text),1),F(`nav`,wE,[F(`button`,{type:`button`,disabled:i.value<=1,onClick:t[0]||=e=>l(-1)},`←`,8,TE),F(`span`,null,E(i.value)+` / `+E(s.value),1),F(`button`,{type:`button`,disabled:i.value>=s.value,onClick:t[1]||=e=>l(1)},`→`,8,EE)])])])):Aa(``,!0)}}}),OE={class:`names-page page-enter`},kE={class:`page-heading ornament-heading names-heading`},AE={class:`names-counter`},jE=[`disabled`],ME={class:`name-number`},NE={class:`name-arabic`,dir:`rtl`,lang:`ar`},PE=[`disabled`],FE={class:`names-controls`},IE=[`value`,`max`],LE=Sr({__name:`NamesView`,setup(e){let t=nc(),n=tc(),{activeLocale:r}=hy(),i=A(0),a=A(`forward`),o=A(null),s=A(null),c=L(()=>iy.get(r.value)||iy.get(`en`)||[]),l=L(()=>c.value[i.value]);function u(e){return Math.max(0,Math.min(c.value.length-1,e))}function d(e,t=!0){if(!c.value.length)return;let r=u(e);a.value=r>=i.value?`forward`:`backward`,i.value=r,t&&n.replace({path:`/names`,query:{name:String(r+1)}})}function f(e){d(i.value+e)}function p(){let e=Number(t.query.name);d(Number.isFinite(e)&&e>=1?e-1:0,!1)}function m(e){o.value=e.clientX,s.value=e.clientY,e.currentTarget.setPointerCapture?.(e.pointerId)}function h(e){if(o.value===null||s.value===null)return;let t=e.clientX-o.value,n=e.clientY-s.value;o.value=null,s.value=null,!(Math.abs(t)<55||Math.abs(t)<=Math.abs(n))&&f(t<0?1:-1)}function g(){o.value=null,s.value=null}function _(e){d(Number(e.target.value)-1)}function v(e){e.key===`ArrowRight`||e.key===`PageDown`?(e.preventDefault(),f(1)):e.key===`ArrowLeft`||e.key===`PageUp`?(e.preventDefault(),f(-1)):e.key===`Home`?(e.preventDefault(),d(0)):e.key===`End`&&(e.preventDefault(),d(c.value.length-1))}return Un(()=>t.query.name,p),Un(r,()=>d(0)),Lr(()=>window.addEventListener(`keydown`,v)),Vr(()=>window.removeEventListener(`keydown`,v)),p(),(e,t)=>(N(),P(`section`,OE,[F(`header`,kE,[t[2]||=F(`div`,null,[F(`span`,{class:`eyebrow`},`AQRT Manual`),F(`h1`,null,`Allah’s 99 Beautiful Names`)],-1),F(`span`,AE,E(i.value+1)+` / `+E(c.value.length),1)]),l.value?(N(),P(`div`,{key:0,class:`name-stage`,tabindex:`0`,"aria-label":`Allah’s 99 Beautiful Names. Swipe or use arrow keys.`,onPointerdown:m,onPointerup:h,onPointercancel:g},[F(`button`,{class:`name-arrow name-arrow-left`,type:`button`,disabled:i.value===0,"aria-label":`Previous name`,onClick:t[0]||=e=>f(-1)},`←`,8,jE),I(bo,{name:a.value===`forward`?`name-forward`:`name-backward`,mode:`out-in`},{default:In(()=>[(N(),P(`article`,{key:l.value.number,class:`name-card`},[F(`span`,ME,E(String(l.value.number).padStart(2,`0`)),1),F(`div`,NE,E(l.value.arabic),1),t[3]||=F(`div`,{class:`name-rule`,"aria-hidden":`true`},null,-1),F(`h2`,null,E(l.value.transliteration),1),F(`p`,null,E(l.value.meaning),1)]))]),_:1},8,[`name`]),F(`button`,{class:`name-arrow name-arrow-right`,type:`button`,disabled:i.value===c.value.length-1,"aria-label":`Next name`,onClick:t[1]||=e=>f(1)},`→`,8,PE)],32)):Aa(``,!0),F(`div`,FE,[t[4]||=F(`span`,null,`1`,-1),F(`input`,{value:i.value+1,type:`range`,min:`1`,max:c.value.length,"aria-label":`Choose a name`,onInput:_},null,40,IE),F(`span`,null,E(c.value.length),1)])]))}}),RE={class:`page-enter`},zE={class:`link-ribbon-list`},BE=[`href`],VE=Sr({__name:`VideosView`,setup(e){let{activeLocale:t}=hy(),n=L(()=>sy.filter(e=>e.locale===t.value));return(e,t)=>(N(),P(`section`,RE,[t[1]||=F(`header`,{class:`page-heading ornament-heading`},[F(`div`,null,[F(`span`,{class:`eyebrow`},`AQRT Manual`),F(`h1`,null,`Videos`)])],-1),F(`div`,zE,[(N(!0),P(M,null,Zr(n.value,(e,n)=>(N(),P(`a`,{key:e.id,href:e.url,target:`_blank`,rel:`noreferrer`},[F(`span`,null,E(String(n+1).padStart(2,`0`)),1),F(`strong`,null,E(e.name),1),t[0]||=F(`i`,{"aria-hidden":`true`},`↗`,-1)],8,BE))),128))])]))}}),HE=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},UE={},WE={class:`weekly-hub page-enter`},GE={class:`weekly-doors`};function KE(e,t){let n=qr(`RouterLink`);return N(),P(`section`,WE,[t[3]||=F(`div`,{class:`weekly-emblem`,"aria-hidden":`true`},`Ⅶ`,-1),t[4]||=F(`h1`,null,`Weekly`,-1),F(`nav`,GE,[I(n,{to:`/weekly/summary`},{default:In(()=>[...t[0]||=[Oa(`Summary`,-1)]]),_:1}),I(n,{to:`/weekly/assignment`},{default:In(()=>[...t[1]||=[Oa(`Assignment`,-1)]]),_:1}),I(n,{to:`/weekly/contemplation`},{default:In(()=>[...t[2]||=[Oa(`Contemplation`,-1)]]),_:1})])])}var qE=HE(UE,[[`render`,KE]]),JE={class:`weekly-content page-enter`},YE={class:`page-heading ornament-heading`},XE={key:0,class:`eyebrow`},ZE=[`innerHTML`],QE=Sr({__name:`WeeklyContentView`,setup(e){let t=nc(),{activeLocale:n}=hy(),r=L(()=>t.params.kind),i=L(()=>r.value.charAt(0).toUpperCase()+r.value.slice(1)),a=L(()=>cy.find(e=>e.locale===n.value&&e.kind===r.value));return(e,t)=>(N(),P(`section`,JE,[F(`header`,YE,[F(`div`,null,[a.value?(N(),P(`span`,XE,E(a.value.week),1)):Aa(``,!0),F(`h1`,null,E(i.value),1)])]),a.value?(N(),P(`article`,{key:0,class:`markdown-sheet`,innerHTML:a.value.html},null,8,ZE)):Aa(``,!0)]))}}),$E={class:`page-enter`},eD={class:`activity-grid`},tD=[`href`],nD=Sr({__name:`ActivitiesView`,setup(e){return(e,t)=>(N(),P(`section`,$E,[t[1]||=F(`header`,{class:`page-heading ornament-heading`},[F(`div`,null,[F(`span`,{class:`eyebrow`},`AQRT Manual`),F(`h1`,null,`Weekly Activities`)])],-1),F(`div`,eD,[(N(!0),P(M,null,Zr(j(ly),(e,n)=>(N(),P(`a`,{key:`${e.week}-${n}`,href:e.url,target:`_blank`,rel:`noreferrer`},[F(`span`,null,E(e.week),1),F(`strong`,null,E(e.title),1),t[0]||=F(`i`,{"aria-hidden":`true`},`↗`,-1)],8,tD))),128))])]))}}),rD=A(!1),iD=A(``),aD=A(!1),oD=A(!1),sD=A([]);async function cD(){aD.value=!0,oD.value=!1}async function lD(){}function uD(){Lr(()=>{aD.value||cD()});async function e(e,t){return iD.value=``,iD.value=`Supabase`,!1}async function t(){oD.value=!1,sD.value=[]}return{configured:L(()=>!1),emailConfigured:L(()=>!1),loading:rD,error:iD,sessionReady:aD,authenticated:oD,entries:sD,unlock:e,lock:t,loadEntries:lD}}var dD={class:`teacher-page page-enter`},fD={class:`page-heading ornament-heading`},pD=[`disabled`],mD={key:1,class:`form-status`},hD={key:1,class:`teacher-ledger`},gD=[`onClick`],_D={"aria-hidden":`true`},vD=[`innerHTML`],yD=Sr({__name:`TeacherView`,setup(e){let t=A(``),n=A(``),r=A(null),{configured:i,emailConfigured:a,loading:o,error:s,authenticated:c,entries:l,unlock:u,lock:d}=uD(),f=L(()=>l.value.map(e=>({...e,html:Hv(e.body)})));async function p(){await u(t.value,n.value||void 0)&&(t.value=``)}return(e,l)=>(N(),P(`section`,dD,[F(`header`,fD,[l[3]||=F(`div`,null,[F(`span`,{class:`eyebrow`},`AQRT Manual`),F(`h1`,null,`Teacher's Corner`)],-1),j(c)?(N(),P(`button`,{key:0,class:`outline-action`,type:`button`,onClick:l[0]||=(...e)=>j(d)&&j(d)(...e)},`Lock`)):Aa(``,!0)]),j(c)?(N(),P(`div`,hD,[(N(!0),P(M,null,Zr(f.value,e=>(N(),P(`article`,{key:e.id,class:xe({open:r.value===e.id})},[F(`button`,{type:`button`,onClick:t=>r.value=r.value===e.id?null:e.id},[F(`span`,null,E(e.category||`Teacher`),1),F(`strong`,null,E(e.title),1),F(`i`,_D,E(r.value===e.id?`−`:`+`),1)],8,gD),r.value===e.id?(N(),P(`div`,{key:0,class:`markdown-sheet`,innerHTML:e.html},null,8,vD)):Aa(``,!0)],2))),128))])):(N(),P(`form`,{key:0,class:`lock-gate`,onSubmit:Cs(p,[`prevent`])},[l[4]||=F(`div`,{class:`gate-symbol`,"aria-hidden":`true`},`⌑`,-1),j(a)?Aa(``,!0):Ln((N(),P(`input`,{key:0,"onUpdate:modelValue":l[1]||=e=>n.value=e,type:`email`,autocomplete:`username`,placeholder:`Email`,required:``},null,512)),[[gs,n.value]]),Ln(F(`input`,{"onUpdate:modelValue":l[2]||=e=>t.value=e,type:`password`,autocomplete:`current-password`,placeholder:`Password`,required:``},null,512),[[gs,t.value]]),F(`button`,{class:`gold-action`,type:`submit`,disabled:j(o)||!j(i)},`Unlock`,8,pD),j(s)?(N(),P(`span`,mD,E(j(s)),1)):Aa(``,!0)],32))]))}}),bD={class:`contact-page page-enter`},xD={class:`message-field`},SD=[`disabled`],CD={key:0,class:`form-status`},wD=Sr({__name:`ContactView`,setup(e){let t=A(``),n=A(``),r=A(``),i=A(``),a=A(!1);async function o(){}return(e,s)=>(N(),P(`section`,bD,[s[6]||=F(`header`,{class:`page-heading ornament-heading`},[F(`div`,null,[F(`span`,{class:`eyebrow`},`AQRT Manual`),F(`h1`,null,`Contact`)])],-1),F(`form`,{class:`contact-form`,onSubmit:Cs(o,[`prevent`])},[F(`label`,null,[s[3]||=F(`span`,null,`Name`,-1),Ln(F(`input`,{"onUpdate:modelValue":s[0]||=e=>t.value=e,name:`name`,type:`text`,autocomplete:`name`,required:``},null,512),[[gs,t.value]])]),F(`label`,null,[s[4]||=F(`span`,null,`Email`,-1),Ln(F(`input`,{"onUpdate:modelValue":s[1]||=e=>n.value=e,name:`email`,type:`email`,autocomplete:`email`,required:``},null,512),[[gs,n.value]])]),F(`label`,xD,[s[5]||=F(`span`,null,`Query`,-1),Ln(F(`textarea`,{"onUpdate:modelValue":s[2]||=e=>r.value=e,name:`message`,rows:`8`,required:``},null,512),[[gs,r.value]])]),F(`button`,{class:`gold-action`,type:`submit`,disabled:a.value||!j(void 0)},`Send`,8,SD),i.value?(N(),P(`span`,CD,E(i.value),1)):Aa(``,!0)],32)]))}}),TD={},ED={class:`links-page page-enter`};function DD(e,t){return N(),P(`section`,ED,[...t[0]||=[ka(`<header class="page-heading ornament-heading"><div><span class="eyebrow">AQRT Manual</span><h1>Links</h1></div></header><div class="portal-links"><a href="https://sufiview.com" target="_blank" rel="noreferrer"><span>01</span><strong>sufiview.com</strong><i aria-hidden="true">↗</i></a><a href="https://aqrtsufi.org" target="_blank" rel="noreferrer"><span>02</span><strong>aqrtsufi.org</strong><i aria-hidden="true">↗</i></a></div>`,2)]])}var OD=HE(TD,[[`render`,DD]]),kD={class:`print-document`},AD=Sr({__name:`PrintView`,setup(e){let t=nc(),n=L(()=>{let e=Array.isArray(t.query.pages)?t.query.pages[0]:t.query.pages;return String(e||``).split(`,`).map(e=>Number(e)).filter(e=>Number.isInteger(e)&&e>0)}),r=L(()=>ny.filter(e=>e.locale===`en`&&n.value.includes(e.page)));return Lr(async()=>{await wn(),window.setTimeout(()=>window.print(),350)}),(e,t)=>(N(),P(`main`,kD,[(N(!0),P(M,null,Zr(r.value,e=>(N(),P(`article`,{key:e.page,class:`print-page`},[F(`header`,null,[t[0]||=F(`span`,null,`AQRT Manual`,-1),F(`strong`,null,E(e.page),1)]),F(`h1`,null,E(e.title),1),F(`div`,null,E(e.text),1)]))),128))]))}}),jD=Bl({history:cl(),scrollBehavior:()=>({top:0}),routes:[{path:`/`,name:`home`,component:oE},{path:`/manual`,name:`manual`,component:gE},{path:`/manual/page/:page`,name:`manual-page`,component:DE},{path:`/names`,name:`names`,component:LE},{path:`/videos`,name:`videos`,component:VE},{path:`/weekly`,name:`weekly`,component:qE},{path:`/weekly/:kind(summary|assignment|contemplation)`,name:`weekly-content`,component:QE},{path:`/activities`,name:`activities`,component:nD},{path:`/teacher`,name:`teacher`,component:yD},{path:`/contact`,name:`contact`,component:wD},{path:`/links`,name:`links`,component:OD},{path:`/print`,name:`print`,component:AD,meta:{print:!0}},{path:`/:pathMatch(.*)*`,redirect:`/`}]});Bs({immediate:!0,onRegisteredSW(e,t){t?.update(),window.addEventListener(`focus`,()=>{t?.update()})}}),ks(Mb).use(jD).mount(`#app`);
//# sourceMappingURL=index-C_gyMUty.js.map