(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function lh(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const $e={},Di=[],Nn=()=>{},rT=()=>!1,Tl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ch=t=>t.startsWith("onUpdate:"),gt=Object.assign,uh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},oT=Object.prototype.hasOwnProperty,Me=(t,e)=>oT.call(t,e),le=Array.isArray,Oi=t=>bl(t)==="[object Map]",Rg=t=>bl(t)==="[object Set]",pe=t=>typeof t=="function",et=t=>typeof t=="string",Vs=t=>typeof t=="symbol",We=t=>t!==null&&typeof t=="object",kg=t=>(We(t)||pe(t))&&pe(t.then)&&pe(t.catch),Pg=Object.prototype.toString,bl=t=>Pg.call(t),aT=t=>bl(t).slice(8,-1),xg=t=>bl(t)==="[object Object]",hh=t=>et(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Hr=lh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Il=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},lT=/-(\w)/g,an=Il(t=>t.replace(lT,(e,n)=>n?n.toUpperCase():"")),cT=/\B([A-Z])/g,ci=Il(t=>t.replace(cT,"-$1").toLowerCase()),Al=Il(t=>t.charAt(0).toUpperCase()+t.slice(1)),bc=Il(t=>t?`on${Al(t)}`:""),Ts=(t,e)=>!Object.is(t,e),Ta=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ng=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},ou=t=>{const e=parseFloat(t);return isNaN(e)?t:e},uT=t=>{const e=et(t)?Number(t):NaN;return isNaN(e)?t:e};let Af;const Cl=()=>Af||(Af=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function dh(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=et(s)?pT(s):dh(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(et(t)||We(t))return t}const hT=/;(?![^(]*\))/g,dT=/:([^]+)/,fT=/\/\*[^]*?\*\//g;function pT(t){const e={};return t.replace(fT,"").split(hT).forEach(n=>{if(n){const s=n.split(dT);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Re(t){let e="";if(et(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const s=Re(t[n]);s&&(e+=s+" ")}else if(We(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const mT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gT=lh(mT);function Dg(t){return!!t||t===""}const Og=t=>!!(t&&t.__v_isRef===!0),ue=t=>et(t)?t:t==null?"":le(t)||We(t)&&(t.toString===Pg||!pe(t.toString))?Og(t)?ue(t.value):JSON.stringify(t,Mg,2):String(t),Mg=(t,e)=>Og(e)?Mg(t,e.value):Oi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Ic(s,r)+" =>"]=i,n),{})}:Rg(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ic(n))}:Vs(e)?Ic(e):We(e)&&!le(e)&&!xg(e)?String(e):e,Ic=(t,e="")=>{var n;return Vs(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ut;class _T{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ut,!e&&Ut&&(this.index=(Ut.scopes||(Ut.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ut;try{return Ut=this,e()}finally{Ut=n}}}on(){Ut=this}off(){Ut=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Lg(){return Ut}function yT(t,e=!1){Ut&&Ut.cleanups.push(t)}let ze;const Ac=new WeakSet;class Vg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ut&&Ut.active&&Ut.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ac.has(this)&&(Ac.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ug(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Cf(this),Bg(this);const e=ze,n=pn;ze=this,pn=!0;try{return this.fn()}finally{$g(this),ze=e,pn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)mh(e);this.deps=this.depsTail=void 0,Cf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ac.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){au(this)&&this.run()}get dirty(){return au(this)}}let Fg=0,Wr,Kr;function Ug(t,e=!1){if(t.flags|=8,e){t.next=Kr,Kr=t;return}t.next=Wr,Wr=t}function fh(){Fg++}function ph(){if(--Fg>0)return;if(Kr){let e=Kr;for(Kr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Wr;){let e=Wr;for(Wr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Bg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function $g(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),mh(s),vT(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function au(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(zg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function zg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===co))return;t.globalVersion=co;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!au(t)){t.flags&=-3;return}const n=ze,s=pn;ze=t,pn=!0;try{Bg(t);const i=t.fn(t._value);(e.version===0||Ts(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ze=n,pn=s,$g(t),t.flags&=-3}}function mh(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)mh(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function vT(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let pn=!0;const jg=[];function Fs(){jg.push(pn),pn=!1}function Us(){const t=jg.pop();pn=t===void 0?!0:t}function Cf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ze;ze=void 0;try{e()}finally{ze=n}}}let co=0;class ET{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class gh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ze||!pn||ze===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ze)n=this.activeLink=new ET(ze,this),ze.deps?(n.prevDep=ze.depsTail,ze.depsTail.nextDep=n,ze.depsTail=n):ze.deps=ze.depsTail=n,qg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ze.depsTail,n.nextDep=void 0,ze.depsTail.nextDep=n,ze.depsTail=n,ze.deps===n&&(ze.deps=s)}return n}trigger(e){this.version++,co++,this.notify(e)}notify(e){fh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ph()}}}function qg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)qg(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ma=new WeakMap,ni=Symbol(""),lu=Symbol(""),uo=Symbol("");function xt(t,e,n){if(pn&&ze){let s=Ma.get(t);s||Ma.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new gh),i.map=s,i.key=n),i.track()}}function Gn(t,e,n,s,i,r){const o=Ma.get(t);if(!o){co++;return}const a=c=>{c&&c.trigger()};if(fh(),e==="clear")o.forEach(a);else{const c=le(t),u=c&&hh(n);if(c&&n==="length"){const h=Number(s);o.forEach((f,m)=>{(m==="length"||m===uo||!Vs(m)&&m>=h)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(uo)),e){case"add":c?u&&a(o.get("length")):(a(o.get(ni)),Oi(t)&&a(o.get(lu)));break;case"delete":c||(a(o.get(ni)),Oi(t)&&a(o.get(lu)));break;case"set":Oi(t)&&a(o.get(ni));break}}ph()}function wT(t,e){const n=Ma.get(t);return n&&n.get(e)}function bi(t){const e=Ne(t);return e===t?e:(xt(e,"iterate",uo),on(t)?e:e.map(Nt))}function Sl(t){return xt(t=Ne(t),"iterate",uo),t}const TT={__proto__:null,[Symbol.iterator](){return Cc(this,Symbol.iterator,Nt)},concat(...t){return bi(this).concat(...t.map(e=>le(e)?bi(e):e))},entries(){return Cc(this,"entries",t=>(t[1]=Nt(t[1]),t))},every(t,e){return zn(this,"every",t,e,void 0,arguments)},filter(t,e){return zn(this,"filter",t,e,n=>n.map(Nt),arguments)},find(t,e){return zn(this,"find",t,e,Nt,arguments)},findIndex(t,e){return zn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return zn(this,"findLast",t,e,Nt,arguments)},findLastIndex(t,e){return zn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return zn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Sc(this,"includes",t)},indexOf(...t){return Sc(this,"indexOf",t)},join(t){return bi(this).join(t)},lastIndexOf(...t){return Sc(this,"lastIndexOf",t)},map(t,e){return zn(this,"map",t,e,void 0,arguments)},pop(){return kr(this,"pop")},push(...t){return kr(this,"push",t)},reduce(t,...e){return Sf(this,"reduce",t,e)},reduceRight(t,...e){return Sf(this,"reduceRight",t,e)},shift(){return kr(this,"shift")},some(t,e){return zn(this,"some",t,e,void 0,arguments)},splice(...t){return kr(this,"splice",t)},toReversed(){return bi(this).toReversed()},toSorted(t){return bi(this).toSorted(t)},toSpliced(...t){return bi(this).toSpliced(...t)},unshift(...t){return kr(this,"unshift",t)},values(){return Cc(this,"values",Nt)}};function Cc(t,e,n){const s=Sl(t),i=s[e]();return s!==t&&!on(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const bT=Array.prototype;function zn(t,e,n,s,i,r){const o=Sl(t),a=o!==t&&!on(t),c=o[e];if(c!==bT[e]){const f=c.apply(t,r);return a?Nt(f):f}let u=n;o!==t&&(a?u=function(f,m){return n.call(this,Nt(f),m,t)}:n.length>2&&(u=function(f,m){return n.call(this,f,m,t)}));const h=c.call(o,u,s);return a&&i?i(h):h}function Sf(t,e,n,s){const i=Sl(t);let r=n;return i!==t&&(on(t)?n.length>3&&(r=function(o,a,c){return n.call(this,o,a,c,t)}):r=function(o,a,c){return n.call(this,o,Nt(a),c,t)}),i[e](r,...s)}function Sc(t,e,n){const s=Ne(t);xt(s,"iterate",uo);const i=s[e](...n);return(i===-1||i===!1)&&vh(n[0])?(n[0]=Ne(n[0]),s[e](...n)):i}function kr(t,e,n=[]){Fs(),fh();const s=Ne(t)[e].apply(t,n);return ph(),Us(),s}const IT=lh("__proto__,__v_isRef,__isVue"),Hg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Vs));function AT(t){Vs(t)||(t=String(t));const e=Ne(this);return xt(e,"has",t),e.hasOwnProperty(t)}class Wg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?MT:Yg:r?Qg:Gg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=le(e);if(!i){let c;if(o&&(c=TT[n]))return c;if(n==="hasOwnProperty")return AT}const a=Reflect.get(e,n,mt(e)?e:s);return(Vs(n)?Hg.has(n):IT(n))||(i||xt(e,"get",n),r)?a:mt(a)?o&&hh(n)?a:a.value:We(a)?i?Jg(a):ir(a):a}}class Kg extends Wg{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const c=si(r);if(!on(s)&&!si(s)&&(r=Ne(r),s=Ne(s)),!le(e)&&mt(r)&&!mt(s))return c?!1:(r.value=s,!0)}const o=le(e)&&hh(n)?Number(n)<e.length:Me(e,n),a=Reflect.set(e,n,s,mt(e)?e:i);return e===Ne(i)&&(o?Ts(s,r)&&Gn(e,"set",n,s):Gn(e,"add",n,s)),a}deleteProperty(e,n){const s=Me(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Gn(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Vs(n)||!Hg.has(n))&&xt(e,"has",n),s}ownKeys(e){return xt(e,"iterate",le(e)?"length":ni),Reflect.ownKeys(e)}}class CT extends Wg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ST=new Kg,RT=new CT,kT=new Kg(!0);const cu=t=>t,aa=t=>Reflect.getPrototypeOf(t);function PT(t,e,n){return function(...s){const i=this.__v_raw,r=Ne(i),o=Oi(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=i[t](...s),h=n?cu:e?uu:Nt;return!e&&xt(r,"iterate",c?lu:ni),{next(){const{value:f,done:m}=u.next();return m?{value:f,done:m}:{value:a?[h(f[0]),h(f[1])]:h(f),done:m}},[Symbol.iterator](){return this}}}}function la(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function xT(t,e){const n={get(i){const r=this.__v_raw,o=Ne(r),a=Ne(i);t||(Ts(i,a)&&xt(o,"get",i),xt(o,"get",a));const{has:c}=aa(o),u=e?cu:t?uu:Nt;if(c.call(o,i))return u(r.get(i));if(c.call(o,a))return u(r.get(a));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&xt(Ne(i),"iterate",ni),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=Ne(r),a=Ne(i);return t||(Ts(i,a)&&xt(o,"has",i),xt(o,"has",a)),i===a?r.has(i):r.has(i)||r.has(a)},forEach(i,r){const o=this,a=o.__v_raw,c=Ne(a),u=e?cu:t?uu:Nt;return!t&&xt(c,"iterate",ni),a.forEach((h,f)=>i.call(r,u(h),u(f),o))}};return gt(n,t?{add:la("add"),set:la("set"),delete:la("delete"),clear:la("clear")}:{add(i){!e&&!on(i)&&!si(i)&&(i=Ne(i));const r=Ne(this);return aa(r).has.call(r,i)||(r.add(i),Gn(r,"add",i,i)),this},set(i,r){!e&&!on(r)&&!si(r)&&(r=Ne(r));const o=Ne(this),{has:a,get:c}=aa(o);let u=a.call(o,i);u||(i=Ne(i),u=a.call(o,i));const h=c.call(o,i);return o.set(i,r),u?Ts(r,h)&&Gn(o,"set",i,r):Gn(o,"add",i,r),this},delete(i){const r=Ne(this),{has:o,get:a}=aa(r);let c=o.call(r,i);c||(i=Ne(i),c=o.call(r,i)),a&&a.call(r,i);const u=r.delete(i);return c&&Gn(r,"delete",i,void 0),u},clear(){const i=Ne(this),r=i.size!==0,o=i.clear();return r&&Gn(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=PT(i,t,e)}),n}function _h(t,e){const n=xT(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Me(n,i)&&i in s?n:s,i,r)}const NT={get:_h(!1,!1)},DT={get:_h(!1,!0)},OT={get:_h(!0,!1)};const Gg=new WeakMap,Qg=new WeakMap,Yg=new WeakMap,MT=new WeakMap;function LT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function VT(t){return t.__v_skip||!Object.isExtensible(t)?0:LT(aT(t))}function ir(t){return si(t)?t:yh(t,!1,ST,NT,Gg)}function Xg(t){return yh(t,!1,kT,DT,Qg)}function Jg(t){return yh(t,!0,RT,OT,Yg)}function yh(t,e,n,s,i){if(!We(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=VT(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Mi(t){return si(t)?Mi(t.__v_raw):!!(t&&t.__v_isReactive)}function si(t){return!!(t&&t.__v_isReadonly)}function on(t){return!!(t&&t.__v_isShallow)}function vh(t){return t?!!t.__v_raw:!1}function Ne(t){const e=t&&t.__v_raw;return e?Ne(e):t}function FT(t){return!Me(t,"__v_skip")&&Object.isExtensible(t)&&Ng(t,"__v_skip",!0),t}const Nt=t=>We(t)?ir(t):t,uu=t=>We(t)?Jg(t):t;function mt(t){return t?t.__v_isRef===!0:!1}function bt(t){return e_(t,!1)}function Zg(t){return e_(t,!0)}function e_(t,e){return mt(t)?t:new UT(t,e)}class UT{constructor(e,n){this.dep=new gh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ne(e),this._value=n?e:Nt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||on(e)||si(e);e=s?e:Ne(e),Ts(e,n)&&(this._rawValue=e,this._value=s?e:Nt(e),this.dep.trigger())}}function rt(t){return mt(t)?t.value:t}function Wn(t){return pe(t)?t():rt(t)}const BT={get:(t,e,n)=>e==="__v_raw"?t:rt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return mt(i)&&!mt(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function t_(t){return Mi(t)?t:new Proxy(t,BT)}function $T(t){const e=le(t)?new Array(t.length):{};for(const n in t)e[n]=jT(t,n);return e}class zT{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return wT(Ne(this._object),this._key)}}function jT(t,e,n){const s=t[e];return mt(s)?s:new zT(t,e,n)}class qT{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new gh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=co-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ze!==this)return Ug(this,!0),!0}get value(){const e=this.dep.track();return zg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function HT(t,e,n=!1){let s,i;return pe(t)?s=t:(s=t.get,i=t.set),new qT(s,i,n)}const ca={},La=new WeakMap;let Qs;function WT(t,e=!1,n=Qs){if(n){let s=La.get(n);s||La.set(n,s=[]),s.push(t)}}function KT(t,e,n=$e){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:c}=n,u=M=>i?M:on(M)||i===!1||i===0?Qn(M,1):Qn(M);let h,f,m,g,A=!1,R=!1;if(mt(t)?(f=()=>t.value,A=on(t)):Mi(t)?(f=()=>u(t),A=!0):le(t)?(R=!0,A=t.some(M=>Mi(M)||on(M)),f=()=>t.map(M=>{if(mt(M))return M.value;if(Mi(M))return u(M);if(pe(M))return c?c(M,2):M()})):pe(t)?e?f=c?()=>c(t,2):t:f=()=>{if(m){Fs();try{m()}finally{Us()}}const M=Qs;Qs=h;try{return c?c(t,3,[g]):t(g)}finally{Qs=M}}:f=Nn,e&&i){const M=f,ee=i===!0?1/0:i;f=()=>Qn(M(),ee)}const x=Lg(),F=()=>{h.stop(),x&&x.active&&uh(x.effects,h)};if(r&&e){const M=e;e=(...ee)=>{M(...ee),F()}}let U=R?new Array(t.length).fill(ca):ca;const O=M=>{if(!(!(h.flags&1)||!h.dirty&&!M))if(e){const ee=h.run();if(i||A||(R?ee.some((te,C)=>Ts(te,U[C])):Ts(ee,U))){m&&m();const te=Qs;Qs=h;try{const C=[ee,U===ca?void 0:R&&U[0]===ca?[]:U,g];c?c(e,3,C):e(...C),U=ee}finally{Qs=te}}}else h.run()};return a&&a(O),h=new Vg(f),h.scheduler=o?()=>o(O,!1):O,g=M=>WT(M,!1,h),m=h.onStop=()=>{const M=La.get(h);if(M){if(c)c(M,4);else for(const ee of M)ee();La.delete(h)}},e?s?O(!0):U=h.run():o?o(O.bind(null,!0),!0):h.run(),F.pause=h.pause.bind(h),F.resume=h.resume.bind(h),F.stop=F,F}function Qn(t,e=1/0,n){if(e<=0||!We(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,mt(t))Qn(t.value,e,n);else if(le(t))for(let s=0;s<t.length;s++)Qn(t[s],e,n);else if(Rg(t)||Oi(t))t.forEach(s=>{Qn(s,e,n)});else if(xg(t)){for(const s in t)Qn(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Qn(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Po(t,e,n,s){try{return s?t(...s):t()}catch(i){Rl(i,e,n)}}function _n(t,e,n,s){if(pe(t)){const i=Po(t,e,n,s);return i&&kg(i)&&i.catch(r=>{Rl(r,e,n)}),i}if(le(t)){const i=[];for(let r=0;r<t.length;r++)i.push(_n(t[r],e,n,s));return i}}function Rl(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||$e;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const h=a.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](t,c,u)===!1)return}a=a.parent}if(r){Fs(),Po(r,null,10,[t,c,u]),Us();return}}GT(t,n,i,s,o)}function GT(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Bt=[];let Cn=-1;const Li=[];let gs=null,Ii=0;const n_=Promise.resolve();let Va=null;function s_(t){const e=Va||n_;return t?e.then(this?t.bind(this):t):e}function QT(t){let e=Cn+1,n=Bt.length;for(;e<n;){const s=e+n>>>1,i=Bt[s],r=ho(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function Eh(t){if(!(t.flags&1)){const e=ho(t),n=Bt[Bt.length-1];!n||!(t.flags&2)&&e>=ho(n)?Bt.push(t):Bt.splice(QT(e),0,t),t.flags|=1,i_()}}function i_(){Va||(Va=n_.then(o_))}function YT(t){le(t)?Li.push(...t):gs&&t.id===-1?gs.splice(Ii+1,0,t):t.flags&1||(Li.push(t),t.flags|=1),i_()}function Rf(t,e,n=Cn+1){for(;n<Bt.length;n++){const s=Bt[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Bt.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function r_(t){if(Li.length){const e=[...new Set(Li)].sort((n,s)=>ho(n)-ho(s));if(Li.length=0,gs){gs.push(...e);return}for(gs=e,Ii=0;Ii<gs.length;Ii++){const n=gs[Ii];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}gs=null,Ii=0}}const ho=t=>t.id==null?t.flags&2?-1:1/0:t.id;function o_(t){try{for(Cn=0;Cn<Bt.length;Cn++){const e=Bt[Cn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Po(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Cn<Bt.length;Cn++){const e=Bt[Cn];e&&(e.flags&=-2)}Cn=-1,Bt.length=0,r_(),Va=null,(Bt.length||Li.length)&&o_()}}let qt=null,a_=null;function Fa(t){const e=qt;return qt=t,a_=t&&t.type.__scopeId||null,e}function Ua(t,e=qt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Uf(-1);const r=Fa(e);let o;try{o=t(...i)}finally{Fa(r),s._d&&Uf(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function l_(t,e){if(qt===null)return t;const n=Dl(qt),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,c=$e]=e[i];r&&(pe(r)&&(r={mounted:r,updated:r}),r.deep&&Qn(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Hs(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let c=a.dir[s];c&&(Fs(),_n(c,n,8,[t.el,a,t,e]),Us())}}const XT=Symbol("_vte"),c_=t=>t.__isTeleport,_s=Symbol("_leaveCb"),ua=Symbol("_enterCb");function JT(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return wh(()=>{t.isMounted=!0}),y_(()=>{t.isUnmounting=!0}),t}const nn=[Function,Array],u_={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:nn,onEnter:nn,onAfterEnter:nn,onEnterCancelled:nn,onBeforeLeave:nn,onLeave:nn,onAfterLeave:nn,onLeaveCancelled:nn,onBeforeAppear:nn,onAppear:nn,onAfterAppear:nn,onAppearCancelled:nn},h_=t=>{const e=t.subTree;return e.component?h_(e.component):e},ZT={name:"BaseTransition",props:u_,setup(t,{slots:e}){const n=Ah(),s=JT();return()=>{const i=e.default&&p_(e.default(),!0);if(!i||!i.length)return;const r=d_(i),o=Ne(t),{mode:a}=o;if(s.isLeaving)return Rc(r);const c=kf(r);if(!c)return Rc(r);let u=hu(c,o,s,n,f=>u=f);c.type!==jt&&fo(c,u);let h=n.subTree&&kf(n.subTree);if(h&&h.type!==jt&&!Js(c,h)&&h_(n).type!==jt){let f=hu(h,o,s,n);if(fo(h,f),a==="out-in"&&c.type!==jt)return s.isLeaving=!0,f.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,h=void 0},Rc(r);a==="in-out"&&c.type!==jt?f.delayLeave=(m,g,A)=>{const R=f_(s,h);R[String(h.key)]=h,m[_s]=()=>{g(),m[_s]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{A(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return r}}};function d_(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==jt){e=n;break}}return e}const eb=ZT;function f_(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function hu(t,e,n,s,i){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:m,onLeave:g,onAfterLeave:A,onLeaveCancelled:R,onBeforeAppear:x,onAppear:F,onAfterAppear:U,onAppearCancelled:O}=e,M=String(t.key),ee=f_(n,t),te=(v,I)=>{v&&_n(v,s,9,I)},C=(v,I)=>{const S=I[1];te(v,I),le(v)?v.every(b=>b.length<=1)&&S():v.length<=1&&S()},y={mode:o,persisted:a,beforeEnter(v){let I=c;if(!n.isMounted)if(r)I=x||c;else return;v[_s]&&v[_s](!0);const S=ee[M];S&&Js(t,S)&&S.el[_s]&&S.el[_s](),te(I,[v])},enter(v){let I=u,S=h,b=f;if(!n.isMounted)if(r)I=F||u,S=U||h,b=O||f;else return;let E=!1;const Fe=v[ua]=lt=>{E||(E=!0,lt?te(b,[v]):te(S,[v]),y.delayedLeave&&y.delayedLeave(),v[ua]=void 0)};I?C(I,[v,Fe]):Fe()},leave(v,I){const S=String(t.key);if(v[ua]&&v[ua](!0),n.isUnmounting)return I();te(m,[v]);let b=!1;const E=v[_s]=Fe=>{b||(b=!0,I(),Fe?te(R,[v]):te(A,[v]),v[_s]=void 0,ee[S]===t&&delete ee[S])};ee[S]=t,g?C(g,[v,E]):E()},clone(v){const I=hu(v,e,n,s,i);return i&&i(I),I}};return y}function Rc(t){if(kl(t))return t=Ps(t),t.children=null,t}function kf(t){if(!kl(t))return c_(t.type)&&t.children?d_(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&pe(n.default))return n.default()}}function fo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,fo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function p_(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===nt?(o.patchFlag&128&&i++,s=s.concat(p_(o.children,e,a))):(e||o.type!==jt)&&s.push(a!=null?Ps(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function m_(t,e){return pe(t)?gt({name:t.name},e,{setup:t}):t}function g_(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ba(t,e,n,s,i=!1){if(le(t)){t.forEach((A,R)=>Ba(A,e&&(le(e)?e[R]:e),n,s,i));return}if(Gr(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Ba(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Dl(s.component):s.el,o=i?null:r,{i:a,r:c}=t,u=e&&e.r,h=a.refs===$e?a.refs={}:a.refs,f=a.setupState,m=Ne(f),g=f===$e?()=>!1:A=>Me(m,A);if(u!=null&&u!==c&&(et(u)?(h[u]=null,g(u)&&(f[u]=null)):mt(u)&&(u.value=null)),pe(c))Po(c,a,12,[o,h]);else{const A=et(c),R=mt(c);if(A||R){const x=()=>{if(t.f){const F=A?g(c)?f[c]:h[c]:c.value;i?le(F)&&uh(F,r):le(F)?F.includes(r)||F.push(r):A?(h[c]=[r],g(c)&&(f[c]=h[c])):(c.value=[r],t.k&&(h[t.k]=c.value))}else A?(h[c]=o,g(c)&&(f[c]=o)):R&&(c.value=o,t.k&&(h[t.k]=o))};o?(x.id=-1,Gt(x,n)):x()}}}Cl().requestIdleCallback;Cl().cancelIdleCallback;const Gr=t=>!!t.type.__asyncLoader,kl=t=>t.type.__isKeepAlive;function tb(t,e){__(t,"a",e)}function nb(t,e){__(t,"da",e)}function __(t,e,n=Et){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Pl(e,s,n),n){let i=n.parent;for(;i&&i.parent;)kl(i.parent.vnode)&&sb(s,e,n,i),i=i.parent}}function sb(t,e,n,s){const i=Pl(e,t,s,!0);Th(()=>{uh(s[e],i)},n)}function Pl(t,e,n=Et,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Fs();const a=xo(n),c=_n(e,n,t,o);return a(),Us(),c});return s?i.unshift(r):i.push(r),r}}const is=t=>(e,n=Et)=>{(!mo||t==="sp")&&Pl(t,(...s)=>e(...s),n)},ib=is("bm"),wh=is("m"),rb=is("bu"),ob=is("u"),y_=is("bum"),Th=is("um"),v_=is("sp"),ab=is("rtg"),lb=is("rtc");function cb(t,e=Et){Pl("ec",t,e)}const E_="components";function ub(t,e){return b_(E_,t,!0,e)||t}const w_=Symbol.for("v-ndc");function T_(t){return et(t)?b_(E_,t,!1)||t:t||w_}function b_(t,e,n=!0,s=!1){const i=qt||Et;if(i){const r=i.type;{const a=Xb(r,!1);if(a&&(a===e||a===an(e)||a===Al(an(e))))return r}const o=Pf(i[t]||r[t],e)||Pf(i.appContext[t],e);return!o&&s?r:o}}function Pf(t,e){return t&&(t[e]||t[an(e)]||t[Al(an(e))])}function yn(t,e,n,s){let i;const r=n,o=le(t);if(o||et(t)){const a=o&&Mi(t);let c=!1;a&&(c=!on(t),t=Sl(t)),i=new Array(t.length);for(let u=0,h=t.length;u<h;u++)i[u]=e(c?Nt(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,r)}else if(We(t))if(t[Symbol.iterator])i=Array.from(t,(a,c)=>e(a,c,void 0,r));else{const a=Object.keys(t);i=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const h=a[c];i[c]=e(t[h],h,c,r)}}else i=[];return i}const du=t=>t?q_(t)?Dl(t):du(t.parent):null,Qr=gt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>du(t.parent),$root:t=>du(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>A_(t),$forceUpdate:t=>t.f||(t.f=()=>{Eh(t.update)}),$nextTick:t=>t.n||(t.n=s_.bind(t.proxy)),$watch:t=>Nb.bind(t)}),kc=(t,e)=>t!==$e&&!t.__isScriptSetup&&Me(t,e),hb={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(kc(s,e))return o[e]=1,s[e];if(i!==$e&&Me(i,e))return o[e]=2,i[e];if((u=t.propsOptions[0])&&Me(u,e))return o[e]=3,r[e];if(n!==$e&&Me(n,e))return o[e]=4,n[e];fu&&(o[e]=0)}}const h=Qr[e];let f,m;if(h)return e==="$attrs"&&xt(t.attrs,"get",""),h(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==$e&&Me(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,Me(m,e))return m[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return kc(i,e)?(i[e]=n,!0):s!==$e&&Me(s,e)?(s[e]=n,!0):Me(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==$e&&Me(t,o)||kc(e,o)||(a=r[0])&&Me(a,o)||Me(s,o)||Me(Qr,o)||Me(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Me(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function xf(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let fu=!0;function fb(t){const e=A_(t),n=t.proxy,s=t.ctx;fu=!1,e.beforeCreate&&Nf(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:c,inject:u,created:h,beforeMount:f,mounted:m,beforeUpdate:g,updated:A,activated:R,deactivated:x,beforeDestroy:F,beforeUnmount:U,destroyed:O,unmounted:M,render:ee,renderTracked:te,renderTriggered:C,errorCaptured:y,serverPrefetch:v,expose:I,inheritAttrs:S,components:b,directives:E,filters:Fe}=e;if(u&&pb(u,s,null),o)for(const Ie in o){const Ee=o[Ie];pe(Ee)&&(s[Ie]=Ee.bind(n))}if(i){const Ie=i.call(n,n);We(Ie)&&(t.data=ir(Ie))}if(fu=!0,r)for(const Ie in r){const Ee=r[Ie],Wt=pe(Ee)?Ee.bind(n,n):pe(Ee.get)?Ee.get.bind(n,n):Nn,cn=!pe(Ee)&&pe(Ee.set)?Ee.set.bind(n):Nn,Zt=Je({get:Wt,set:cn});Object.defineProperty(s,Ie,{enumerable:!0,configurable:!0,get:()=>Zt.value,set:Ye=>Zt.value=Ye})}if(a)for(const Ie in a)I_(a[Ie],s,n,Ie);if(c){const Ie=pe(c)?c.call(n):c;Reflect.ownKeys(Ie).forEach(Ee=>{ba(Ee,Ie[Ee])})}h&&Nf(h,t,"c");function Qe(Ie,Ee){le(Ee)?Ee.forEach(Wt=>Ie(Wt.bind(n))):Ee&&Ie(Ee.bind(n))}if(Qe(ib,f),Qe(wh,m),Qe(rb,g),Qe(ob,A),Qe(tb,R),Qe(nb,x),Qe(cb,y),Qe(lb,te),Qe(ab,C),Qe(y_,U),Qe(Th,M),Qe(v_,v),le(I))if(I.length){const Ie=t.exposed||(t.exposed={});I.forEach(Ee=>{Object.defineProperty(Ie,Ee,{get:()=>n[Ee],set:Wt=>n[Ee]=Wt})})}else t.exposed||(t.exposed={});ee&&t.render===Nn&&(t.render=ee),S!=null&&(t.inheritAttrs=S),b&&(t.components=b),E&&(t.directives=E),v&&g_(t)}function pb(t,e,n=Nn){le(t)&&(t=pu(t));for(const s in t){const i=t[s];let r;We(i)?"default"in i?r=mn(i.from||s,i.default,!0):r=mn(i.from||s):r=mn(i),mt(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Nf(t,e,n){_n(le(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function I_(t,e,n,s){let i=s.includes(".")?U_(n,s):()=>n[s];if(et(t)){const r=e[t];pe(r)&&bs(i,r)}else if(pe(t))bs(i,t.bind(n));else if(We(t))if(le(t))t.forEach(r=>I_(r,e,n,s));else{const r=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(r)&&bs(i,r,t)}}function A_(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(u=>$a(c,u,o,!0)),$a(c,e,o)),We(e)&&r.set(e,c),c}function $a(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&$a(t,r,n,!0),i&&i.forEach(o=>$a(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=mb[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const mb={data:Df,props:Of,emits:Of,methods:Fr,computed:Fr,beforeCreate:Ft,created:Ft,beforeMount:Ft,mounted:Ft,beforeUpdate:Ft,updated:Ft,beforeDestroy:Ft,beforeUnmount:Ft,destroyed:Ft,unmounted:Ft,activated:Ft,deactivated:Ft,errorCaptured:Ft,serverPrefetch:Ft,components:Fr,directives:Fr,watch:_b,provide:Df,inject:gb};function Df(t,e){return e?t?function(){return gt(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function gb(t,e){return Fr(pu(t),pu(e))}function pu(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ft(t,e){return t?[...new Set([].concat(t,e))]:e}function Fr(t,e){return t?gt(Object.create(null),t,e):e}function Of(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:gt(Object.create(null),xf(t),xf(e??{})):e}function _b(t,e){if(!t)return e;if(!e)return t;const n=gt(Object.create(null),t);for(const s in e)n[s]=Ft(t[s],e[s]);return n}function C_(){return{app:null,config:{isNativeTag:rT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yb=0;function vb(t,e){return function(s,i=null){pe(s)||(s=gt({},s)),i!=null&&!We(i)&&(i=null);const r=C_(),o=new WeakSet,a=[];let c=!1;const u=r.app={_uid:yb++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Zb,get config(){return r.config},set config(h){},use(h,...f){return o.has(h)||(h&&pe(h.install)?(o.add(h),h.install(u,...f)):pe(h)&&(o.add(h),h(u,...f))),u},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),u},component(h,f){return f?(r.components[h]=f,u):r.components[h]},directive(h,f){return f?(r.directives[h]=f,u):r.directives[h]},mount(h,f,m){if(!c){const g=u._ceVNode||ye(s,i);return g.appContext=r,m===!0?m="svg":m===!1&&(m=void 0),t(g,h,m),c=!0,u._container=h,h.__vue_app__=u,Dl(g.component)}},onUnmount(h){a.push(h)},unmount(){c&&(_n(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,f){return r.provides[h]=f,u},runWithContext(h){const f=Vi;Vi=u;try{return h()}finally{Vi=f}}};return u}}let Vi=null;function ba(t,e){if(Et){let n=Et.provides;const s=Et.parent&&Et.parent.provides;s===n&&(n=Et.provides=Object.create(s)),n[t]=e}}function mn(t,e,n=!1){const s=Et||qt;if(s||Vi){const i=Vi?Vi._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&pe(e)?e.call(s&&s.proxy):e}}const S_={},R_=()=>Object.create(S_),k_=t=>Object.getPrototypeOf(t)===S_;function Eb(t,e,n,s=!1){const i={},r=R_();t.propsDefaults=Object.create(null),P_(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Xg(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function wb(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=Ne(i),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let f=0;f<h.length;f++){let m=h[f];if(xl(t.emitsOptions,m))continue;const g=e[m];if(c)if(Me(r,m))g!==r[m]&&(r[m]=g,u=!0);else{const A=an(m);i[A]=mu(c,a,A,g,t,!1)}else g!==r[m]&&(r[m]=g,u=!0)}}}else{P_(t,e,i,r)&&(u=!0);let h;for(const f in a)(!e||!Me(e,f)&&((h=ci(f))===f||!Me(e,h)))&&(c?n&&(n[f]!==void 0||n[h]!==void 0)&&(i[f]=mu(c,a,f,void 0,t,!0)):delete i[f]);if(r!==a)for(const f in r)(!e||!Me(e,f))&&(delete r[f],u=!0)}u&&Gn(t.attrs,"set","")}function P_(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Hr(c))continue;const u=e[c];let h;i&&Me(i,h=an(c))?!r||!r.includes(h)?n[h]=u:(a||(a={}))[h]=u:xl(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(r){const c=Ne(n),u=a||$e;for(let h=0;h<r.length;h++){const f=r[h];n[f]=mu(i,c,f,u[f],t,!Me(u,f))}}return o}function mu(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=Me(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&pe(c)){const{propsDefaults:u}=i;if(n in u)s=u[n];else{const h=xo(i);s=u[n]=c.call(null,e),h()}}else s=c;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===ci(n))&&(s=!0))}return s}const Tb=new WeakMap;function x_(t,e,n=!1){const s=n?Tb:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let c=!1;if(!pe(t)){const h=f=>{c=!0;const[m,g]=x_(f,e,!0);gt(o,m),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!r&&!c)return We(t)&&s.set(t,Di),Di;if(le(r))for(let h=0;h<r.length;h++){const f=an(r[h]);Mf(f)&&(o[f]=$e)}else if(r)for(const h in r){const f=an(h);if(Mf(f)){const m=r[h],g=o[f]=le(m)||pe(m)?{type:m}:gt({},m),A=g.type;let R=!1,x=!0;if(le(A))for(let F=0;F<A.length;++F){const U=A[F],O=pe(U)&&U.name;if(O==="Boolean"){R=!0;break}else O==="String"&&(x=!1)}else R=pe(A)&&A.name==="Boolean";g[0]=R,g[1]=x,(R||Me(g,"default"))&&a.push(f)}}const u=[o,a];return We(t)&&s.set(t,u),u}function Mf(t){return t[0]!=="$"&&!Hr(t)}const N_=t=>t[0]==="_"||t==="$stable",bh=t=>le(t)?t.map(Rn):[Rn(t)],bb=(t,e,n)=>{if(e._n)return e;const s=Ua((...i)=>bh(e(...i)),n);return s._c=!1,s},D_=(t,e,n)=>{const s=t._ctx;for(const i in t){if(N_(i))continue;const r=t[i];if(pe(r))e[i]=bb(i,r,s);else if(r!=null){const o=bh(r);e[i]=()=>o}}},O_=(t,e)=>{const n=bh(e);t.slots.default=()=>n},M_=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},Ib=(t,e,n)=>{const s=t.slots=R_();if(t.vnode.shapeFlag&32){const i=e._;i?(M_(s,e,n),n&&Ng(s,"_",i,!0)):D_(e,s)}else e&&O_(t,e)},Ab=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=$e;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:M_(i,e,n):(r=!e.$stable,D_(e,i)),o=e}else e&&(O_(t,e),o={default:1});if(r)for(const a in i)!N_(a)&&o[a]==null&&delete i[a]},Gt=Ub;function Cb(t){return Sb(t)}function Sb(t,e){const n=Cl();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:c,setText:u,setElementText:h,parentNode:f,nextSibling:m,setScopeId:g=Nn,insertStaticContent:A}=t,R=(w,T,k,V=null,z=null,B=null,G=void 0,W=null,H=!!T.dynamicChildren)=>{if(w===T)return;w&&!Js(w,T)&&(V=L(w),Ye(w,z,B,!0),w=null),T.patchFlag===-2&&(H=!1,T.dynamicChildren=null);const{type:q,ref:oe,shapeFlag:X}=T;switch(q){case Nl:x(w,T,k,V);break;case jt:F(w,T,k,V);break;case Ia:w==null&&U(T,k,V,G);break;case nt:b(w,T,k,V,z,B,G,W,H);break;default:X&1?ee(w,T,k,V,z,B,G,W,H):X&6?E(w,T,k,V,z,B,G,W,H):(X&64||X&128)&&q.process(w,T,k,V,z,B,G,W,H,ne)}oe!=null&&z&&Ba(oe,w&&w.ref,B,T||w,!T)},x=(w,T,k,V)=>{if(w==null)s(T.el=a(T.children),k,V);else{const z=T.el=w.el;T.children!==w.children&&u(z,T.children)}},F=(w,T,k,V)=>{w==null?s(T.el=c(T.children||""),k,V):T.el=w.el},U=(w,T,k,V)=>{[w.el,w.anchor]=A(w.children,T,k,V,w.el,w.anchor)},O=({el:w,anchor:T},k,V)=>{let z;for(;w&&w!==T;)z=m(w),s(w,k,V),w=z;s(T,k,V)},M=({el:w,anchor:T})=>{let k;for(;w&&w!==T;)k=m(w),i(w),w=k;i(T)},ee=(w,T,k,V,z,B,G,W,H)=>{T.type==="svg"?G="svg":T.type==="math"&&(G="mathml"),w==null?te(T,k,V,z,B,G,W,H):v(w,T,z,B,G,W,H)},te=(w,T,k,V,z,B,G,W)=>{let H,q;const{props:oe,shapeFlag:X,transition:se,dirs:ce}=w;if(H=w.el=o(w.type,B,oe&&oe.is,oe),X&8?h(H,w.children):X&16&&y(w.children,H,null,V,z,Pc(w,B),G,W),ce&&Hs(w,null,V,"created"),C(H,w,w.scopeId,G,V),oe){for(const ge in oe)ge!=="value"&&!Hr(ge)&&r(H,ge,null,oe[ge],B,V);"value"in oe&&r(H,"value",null,oe.value,B),(q=oe.onVnodeBeforeMount)&&An(q,V,w)}ce&&Hs(w,null,V,"beforeMount");const ae=Rb(z,se);ae&&se.beforeEnter(H),s(H,T,k),((q=oe&&oe.onVnodeMounted)||ae||ce)&&Gt(()=>{q&&An(q,V,w),ae&&se.enter(H),ce&&Hs(w,null,V,"mounted")},z)},C=(w,T,k,V,z)=>{if(k&&g(w,k),V)for(let B=0;B<V.length;B++)g(w,V[B]);if(z){let B=z.subTree;if(T===B||$_(B.type)&&(B.ssContent===T||B.ssFallback===T)){const G=z.vnode;C(w,G,G.scopeId,G.slotScopeIds,z.parent)}}},y=(w,T,k,V,z,B,G,W,H=0)=>{for(let q=H;q<w.length;q++){const oe=w[q]=W?ys(w[q]):Rn(w[q]);R(null,oe,T,k,V,z,B,G,W)}},v=(w,T,k,V,z,B,G)=>{const W=T.el=w.el;let{patchFlag:H,dynamicChildren:q,dirs:oe}=T;H|=w.patchFlag&16;const X=w.props||$e,se=T.props||$e;let ce;if(k&&Ws(k,!1),(ce=se.onVnodeBeforeUpdate)&&An(ce,k,T,w),oe&&Hs(T,w,k,"beforeUpdate"),k&&Ws(k,!0),(X.innerHTML&&se.innerHTML==null||X.textContent&&se.textContent==null)&&h(W,""),q?I(w.dynamicChildren,q,W,k,V,Pc(T,z),B):G||Ee(w,T,W,null,k,V,Pc(T,z),B,!1),H>0){if(H&16)S(W,X,se,k,z);else if(H&2&&X.class!==se.class&&r(W,"class",null,se.class,z),H&4&&r(W,"style",X.style,se.style,z),H&8){const ae=T.dynamicProps;for(let ge=0;ge<ae.length;ge++){const Ae=ae[ge],At=X[Ae],_t=se[Ae];(_t!==At||Ae==="value")&&r(W,Ae,At,_t,z,k)}}H&1&&w.children!==T.children&&h(W,T.children)}else!G&&q==null&&S(W,X,se,k,z);((ce=se.onVnodeUpdated)||oe)&&Gt(()=>{ce&&An(ce,k,T,w),oe&&Hs(T,w,k,"updated")},V)},I=(w,T,k,V,z,B,G)=>{for(let W=0;W<T.length;W++){const H=w[W],q=T[W],oe=H.el&&(H.type===nt||!Js(H,q)||H.shapeFlag&70)?f(H.el):k;R(H,q,oe,null,V,z,B,G,!0)}},S=(w,T,k,V,z)=>{if(T!==k){if(T!==$e)for(const B in T)!Hr(B)&&!(B in k)&&r(w,B,T[B],null,z,V);for(const B in k){if(Hr(B))continue;const G=k[B],W=T[B];G!==W&&B!=="value"&&r(w,B,W,G,z,V)}"value"in k&&r(w,"value",T.value,k.value,z)}},b=(w,T,k,V,z,B,G,W,H)=>{const q=T.el=w?w.el:a(""),oe=T.anchor=w?w.anchor:a("");let{patchFlag:X,dynamicChildren:se,slotScopeIds:ce}=T;ce&&(W=W?W.concat(ce):ce),w==null?(s(q,k,V),s(oe,k,V),y(T.children||[],k,oe,z,B,G,W,H)):X>0&&X&64&&se&&w.dynamicChildren?(I(w.dynamicChildren,se,k,z,B,G,W),(T.key!=null||z&&T===z.subTree)&&L_(w,T,!0)):Ee(w,T,k,oe,z,B,G,W,H)},E=(w,T,k,V,z,B,G,W,H)=>{T.slotScopeIds=W,w==null?T.shapeFlag&512?z.ctx.activate(T,k,V,G,H):Fe(T,k,V,z,B,G,H):lt(w,T,H)},Fe=(w,T,k,V,z,B,G)=>{const W=w.component=Wb(w,V,z);if(kl(w)&&(W.ctx.renderer=ne),Kb(W,!1,G),W.asyncDep){if(z&&z.registerDep(W,Qe,G),!w.el){const H=W.subTree=ye(jt);F(null,H,T,k)}}else Qe(W,w,T,k,z,B,G)},lt=(w,T,k)=>{const V=T.component=w.component;if(Vb(w,T,k))if(V.asyncDep&&!V.asyncResolved){Ie(V,T,k);return}else V.next=T,V.update();else T.el=w.el,V.vnode=T},Qe=(w,T,k,V,z,B,G)=>{const W=()=>{if(w.isMounted){let{next:X,bu:se,u:ce,parent:ae,vnode:ge}=w;{const Ct=V_(w);if(Ct){X&&(X.el=ge.el,Ie(w,X,G)),Ct.asyncDep.then(()=>{w.isUnmounted||W()});return}}let Ae=X,At;Ws(w,!1),X?(X.el=ge.el,Ie(w,X,G)):X=ge,se&&Ta(se),(At=X.props&&X.props.onVnodeBeforeUpdate)&&An(At,ae,X,ge),Ws(w,!0);const _t=Vf(w),en=w.subTree;w.subTree=_t,R(en,_t,f(en.el),L(en),w,z,B),X.el=_t.el,Ae===null&&Fb(w,_t.el),ce&&Gt(ce,z),(At=X.props&&X.props.onVnodeUpdated)&&Gt(()=>An(At,ae,X,ge),z)}else{let X;const{el:se,props:ce}=T,{bm:ae,m:ge,parent:Ae,root:At,type:_t}=w,en=Gr(T);Ws(w,!1),ae&&Ta(ae),!en&&(X=ce&&ce.onVnodeBeforeMount)&&An(X,Ae,T),Ws(w,!0);{At.ce&&At.ce._injectChildStyle(_t);const Ct=w.subTree=Vf(w);R(null,Ct,k,V,w,z,B),T.el=Ct.el}if(ge&&Gt(ge,z),!en&&(X=ce&&ce.onVnodeMounted)){const Ct=T;Gt(()=>An(X,Ae,Ct),z)}(T.shapeFlag&256||Ae&&Gr(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&w.a&&Gt(w.a,z),w.isMounted=!0,T=k=V=null}};w.scope.on();const H=w.effect=new Vg(W);w.scope.off();const q=w.update=H.run.bind(H),oe=w.job=H.runIfDirty.bind(H);oe.i=w,oe.id=w.uid,H.scheduler=()=>Eh(oe),Ws(w,!0),q()},Ie=(w,T,k)=>{T.component=w;const V=w.vnode.props;w.vnode=T,w.next=null,wb(w,T.props,V,k),Ab(w,T.children,k),Fs(),Rf(w),Us()},Ee=(w,T,k,V,z,B,G,W,H=!1)=>{const q=w&&w.children,oe=w?w.shapeFlag:0,X=T.children,{patchFlag:se,shapeFlag:ce}=T;if(se>0){if(se&128){cn(q,X,k,V,z,B,G,W,H);return}else if(se&256){Wt(q,X,k,V,z,B,G,W,H);return}}ce&8?(oe&16&&$t(q,z,B),X!==q&&h(k,X)):oe&16?ce&16?cn(q,X,k,V,z,B,G,W,H):$t(q,z,B,!0):(oe&8&&h(k,""),ce&16&&y(X,k,V,z,B,G,W,H))},Wt=(w,T,k,V,z,B,G,W,H)=>{w=w||Di,T=T||Di;const q=w.length,oe=T.length,X=Math.min(q,oe);let se;for(se=0;se<X;se++){const ce=T[se]=H?ys(T[se]):Rn(T[se]);R(w[se],ce,k,null,z,B,G,W,H)}q>oe?$t(w,z,B,!0,!1,X):y(T,k,V,z,B,G,W,H,X)},cn=(w,T,k,V,z,B,G,W,H)=>{let q=0;const oe=T.length;let X=w.length-1,se=oe-1;for(;q<=X&&q<=se;){const ce=w[q],ae=T[q]=H?ys(T[q]):Rn(T[q]);if(Js(ce,ae))R(ce,ae,k,null,z,B,G,W,H);else break;q++}for(;q<=X&&q<=se;){const ce=w[X],ae=T[se]=H?ys(T[se]):Rn(T[se]);if(Js(ce,ae))R(ce,ae,k,null,z,B,G,W,H);else break;X--,se--}if(q>X){if(q<=se){const ce=se+1,ae=ce<oe?T[ce].el:V;for(;q<=se;)R(null,T[q]=H?ys(T[q]):Rn(T[q]),k,ae,z,B,G,W,H),q++}}else if(q>se)for(;q<=X;)Ye(w[q],z,B,!0),q++;else{const ce=q,ae=q,ge=new Map;for(q=ae;q<=se;q++){const yt=T[q]=H?ys(T[q]):Rn(T[q]);yt.key!=null&&ge.set(yt.key,q)}let Ae,At=0;const _t=se-ae+1;let en=!1,Ct=0;const cs=new Array(_t);for(q=0;q<_t;q++)cs[q]=0;for(q=ce;q<=X;q++){const yt=w[q];if(At>=_t){Ye(yt,z,B,!0);continue}let tn;if(yt.key!=null)tn=ge.get(yt.key);else for(Ae=ae;Ae<=se;Ae++)if(cs[Ae-ae]===0&&Js(yt,T[Ae])){tn=Ae;break}tn===void 0?Ye(yt,z,B,!0):(cs[tn-ae]=q+1,tn>=Ct?Ct=tn:en=!0,R(yt,T[tn],k,null,z,B,G,W,H),At++)}const gr=en?kb(cs):Di;for(Ae=gr.length-1,q=_t-1;q>=0;q--){const yt=ae+q,tn=T[yt],Ho=yt+1<oe?T[yt+1].el:V;cs[q]===0?R(null,tn,k,Ho,z,B,G,W,H):en&&(Ae<0||q!==gr[Ae]?Zt(tn,k,Ho,2):Ae--)}}},Zt=(w,T,k,V,z=null)=>{const{el:B,type:G,transition:W,children:H,shapeFlag:q}=w;if(q&6){Zt(w.component.subTree,T,k,V);return}if(q&128){w.suspense.move(T,k,V);return}if(q&64){G.move(w,T,k,ne);return}if(G===nt){s(B,T,k);for(let X=0;X<H.length;X++)Zt(H[X],T,k,V);s(w.anchor,T,k);return}if(G===Ia){O(w,T,k);return}if(V!==2&&q&1&&W)if(V===0)W.beforeEnter(B),s(B,T,k),Gt(()=>W.enter(B),z);else{const{leave:X,delayLeave:se,afterLeave:ce}=W,ae=()=>s(B,T,k),ge=()=>{X(B,()=>{ae(),ce&&ce()})};se?se(B,ae,ge):ge()}else s(B,T,k)},Ye=(w,T,k,V=!1,z=!1)=>{const{type:B,props:G,ref:W,children:H,dynamicChildren:q,shapeFlag:oe,patchFlag:X,dirs:se,cacheIndex:ce}=w;if(X===-2&&(z=!1),W!=null&&Ba(W,null,k,w,!0),ce!=null&&(T.renderCache[ce]=void 0),oe&256){T.ctx.deactivate(w);return}const ae=oe&1&&se,ge=!Gr(w);let Ae;if(ge&&(Ae=G&&G.onVnodeBeforeUnmount)&&An(Ae,T,w),oe&6)In(w.component,k,V);else{if(oe&128){w.suspense.unmount(k,V);return}ae&&Hs(w,null,T,"beforeUnmount"),oe&64?w.type.remove(w,T,k,ne,V):q&&!q.hasOnce&&(B!==nt||X>0&&X&64)?$t(q,T,k,!1,!0):(B===nt&&X&384||!z&&oe&16)&&$t(H,T,k),V&&Xe(w)}(ge&&(Ae=G&&G.onVnodeUnmounted)||ae)&&Gt(()=>{Ae&&An(Ae,T,w),ae&&Hs(w,null,T,"unmounted")},k)},Xe=w=>{const{type:T,el:k,anchor:V,transition:z}=w;if(T===nt){ls(k,V);return}if(T===Ia){M(w);return}const B=()=>{i(k),z&&!z.persisted&&z.afterLeave&&z.afterLeave()};if(w.shapeFlag&1&&z&&!z.persisted){const{leave:G,delayLeave:W}=z,H=()=>G(k,B);W?W(w.el,B,H):H()}else B()},ls=(w,T)=>{let k;for(;w!==T;)k=m(w),i(w),w=k;i(T)},In=(w,T,k)=>{const{bum:V,scope:z,job:B,subTree:G,um:W,m:H,a:q}=w;Lf(H),Lf(q),V&&Ta(V),z.stop(),B&&(B.flags|=8,Ye(G,w,T,k)),W&&Gt(W,T),Gt(()=>{w.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},$t=(w,T,k,V=!1,z=!1,B=0)=>{for(let G=B;G<w.length;G++)Ye(w[G],T,k,V,z)},L=w=>{if(w.shapeFlag&6)return L(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const T=m(w.anchor||w.el),k=T&&T[XT];return k?m(k):T};let J=!1;const Y=(w,T,k)=>{w==null?T._vnode&&Ye(T._vnode,null,null,!0):R(T._vnode||null,w,T,null,null,null,k),T._vnode=w,J||(J=!0,Rf(),r_(),J=!1)},ne={p:R,um:Ye,m:Zt,r:Xe,mt:Fe,mc:y,pc:Ee,pbc:I,n:L,o:t};return{render:Y,hydrate:void 0,createApp:vb(Y)}}function Pc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ws({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Rb(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function L_(t,e,n=!1){const s=t.children,i=e.children;if(le(s)&&le(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=ys(i[r]),a.el=o.el),!n&&a.patchFlag!==-2&&L_(o,a)),a.type===Nl&&(a.el=o.el)}}function kb(t){const e=t.slice(),n=[0];let s,i,r,o,a;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(i=n[n.length-1],t[i]<u){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<u?r=a+1:o=a;u<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function V_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:V_(e)}function Lf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Pb=Symbol.for("v-scx"),xb=()=>mn(Pb);function bs(t,e,n){return F_(t,e,n)}function F_(t,e,n=$e){const{immediate:s,deep:i,flush:r,once:o}=n,a=gt({},n),c=e&&s||!e&&r!=="post";let u;if(mo){if(r==="sync"){const g=xb();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=Nn,g.resume=Nn,g.pause=Nn,g}}const h=Et;a.call=(g,A,R)=>_n(g,h,A,R);let f=!1;r==="post"?a.scheduler=g=>{Gt(g,h&&h.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(g,A)=>{A?g():Eh(g)}),a.augmentJob=g=>{e&&(g.flags|=4),f&&(g.flags|=2,h&&(g.id=h.uid,g.i=h))};const m=KT(t,e,a);return mo&&(u?u.push(m):c&&m()),m}function Nb(t,e,n){const s=this.proxy,i=et(t)?t.includes(".")?U_(s,t):()=>s[t]:t.bind(s,s);let r;pe(e)?r=e:(r=e.handler,n=e);const o=xo(this),a=F_(i,r.bind(s),n);return o(),a}function U_(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const Db=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${an(e)}Modifiers`]||t[`${ci(e)}Modifiers`];function Ob(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||$e;let i=n;const r=e.startsWith("update:"),o=r&&Db(s,e.slice(7));o&&(o.trim&&(i=n.map(h=>et(h)?h.trim():h)),o.number&&(i=n.map(ou)));let a,c=s[a=bc(e)]||s[a=bc(an(e))];!c&&r&&(c=s[a=bc(ci(e))]),c&&_n(c,t,6,i);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,_n(u,t,6,i)}}function B_(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!pe(t)){const c=u=>{const h=B_(u,e,!0);h&&(a=!0,gt(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(We(t)&&s.set(t,null),null):(le(r)?r.forEach(c=>o[c]=null):gt(o,r),We(t)&&s.set(t,o),o)}function xl(t,e){return!t||!Tl(e)?!1:(e=e.slice(2).replace(/Once$/,""),Me(t,e[0].toLowerCase()+e.slice(1))||Me(t,ci(e))||Me(t,e))}function Vf(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:c,render:u,renderCache:h,props:f,data:m,setupState:g,ctx:A,inheritAttrs:R}=t,x=Fa(t);let F,U;try{if(n.shapeFlag&4){const M=i||s,ee=M;F=Rn(u.call(ee,M,h,f,g,m,A)),U=a}else{const M=e;F=Rn(M.length>1?M(f,{attrs:a,slots:o,emit:c}):M(f,null)),U=e.props?a:Mb(a)}}catch(M){Yr.length=0,Rl(M,t,1),F=ye(jt)}let O=F;if(U&&R!==!1){const M=Object.keys(U),{shapeFlag:ee}=O;M.length&&ee&7&&(r&&M.some(ch)&&(U=Lb(U,r)),O=Ps(O,U,!1,!0))}return n.dirs&&(O=Ps(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&fo(O,n.transition),F=O,Fa(x),F}const Mb=t=>{let e;for(const n in t)(n==="class"||n==="style"||Tl(n))&&((e||(e={}))[n]=t[n]);return e},Lb=(t,e)=>{const n={};for(const s in t)(!ch(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Vb(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:c}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Ff(s,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let f=0;f<h.length;f++){const m=h[f];if(o[m]!==s[m]&&!xl(u,m))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Ff(s,o,u):!0:!!o;return!1}function Ff(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!xl(n,r))return!0}return!1}function Fb({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const $_=t=>t.__isSuspense;function Ub(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):YT(t)}const nt=Symbol.for("v-fgt"),Nl=Symbol.for("v-txt"),jt=Symbol.for("v-cmt"),Ia=Symbol.for("v-stc"),Yr=[];let Qt=null;function he(t=!1){Yr.push(Qt=t?null:[])}function Bb(){Yr.pop(),Qt=Yr[Yr.length-1]||null}let po=1;function Uf(t,e=!1){po+=t,t<0&&Qt&&e&&(Qt.hasOnce=!0)}function z_(t){return t.dynamicChildren=po>0?Qt||Di:null,Bb(),po>0&&Qt&&Qt.push(t),t}function _e(t,e,n,s,i,r){return z_(D(t,e,n,s,i,r,!0))}function ji(t,e,n,s,i){return z_(ye(t,e,n,s,i,!0))}function za(t){return t?t.__v_isVNode===!0:!1}function Js(t,e){return t.type===e.type&&t.key===e.key}const j_=({key:t})=>t??null,Aa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?et(t)||mt(t)||pe(t)?{i:qt,r:t,k:e,f:!!n}:t:null);function D(t,e=null,n=null,s=0,i=null,r=t===nt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&j_(e),ref:e&&Aa(e),scopeId:a_,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:qt};return a?(Ih(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=et(n)?8:16),po>0&&!o&&Qt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Qt.push(c),c}const ye=$b;function $b(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===w_)&&(t=jt),za(t)){const a=Ps(t,e,!0);return n&&Ih(a,n),po>0&&!r&&Qt&&(a.shapeFlag&6?Qt[Qt.indexOf(t)]=a:Qt.push(a)),a.patchFlag=-2,a}if(Jb(t)&&(t=t.__vccOpts),e){e=zb(e);let{class:a,style:c}=e;a&&!et(a)&&(e.class=Re(a)),We(c)&&(vh(c)&&!le(c)&&(c=gt({},c)),e.style=dh(c))}const o=et(t)?1:$_(t)?128:c_(t)?64:We(t)?4:pe(t)?2:0;return D(t,e,n,s,i,o,r,!0)}function zb(t){return t?vh(t)||k_(t)?gt({},t):t:null}function Ps(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:c}=t,u=e?jb(i||{},e):i,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&j_(u),ref:e&&e.ref?n&&r?le(r)?r.concat(Aa(e)):[r,Aa(e)]:Aa(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==nt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ps(t.ssContent),ssFallback:t.ssFallback&&Ps(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&fo(h,c.clone(h)),h}function ui(t=" ",e=0){return ye(Nl,null,t,e)}function xc(t,e){const n=ye(Ia,null,t);return n.staticCount=e,n}function ja(t="",e=!1){return e?(he(),ji(jt,null,t)):ye(jt,null,t)}function Rn(t){return t==null||typeof t=="boolean"?ye(jt):le(t)?ye(nt,null,t.slice()):za(t)?ys(t):ye(Nl,null,String(t))}function ys(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ps(t)}function Ih(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Ih(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!k_(e)?e._ctx=qt:i===3&&qt&&(qt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:qt},n=32):(e=String(e),s&64?(n=16,e=[ui(e)]):n=8);t.children=e,t.shapeFlag|=n}function jb(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Re([e.class,s.class]));else if(i==="style")e.style=dh([e.style,s.style]);else if(Tl(i)){const r=e[i],o=s[i];o&&r!==o&&!(le(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function An(t,e,n,s=null){_n(t,e,7,[n,s])}const qb=C_();let Hb=0;function Wb(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||qb,r={uid:Hb++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new _T(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:x_(s,i),emitsOptions:B_(s,i),emit:null,emitted:null,propsDefaults:$e,inheritAttrs:s.inheritAttrs,ctx:$e,data:$e,props:$e,attrs:$e,slots:$e,refs:$e,setupState:$e,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Ob.bind(null,r),t.ce&&t.ce(r),r}let Et=null;const Ah=()=>Et||qt;let qa,gu;{const t=Cl(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};qa=e("__VUE_INSTANCE_SETTERS__",n=>Et=n),gu=e("__VUE_SSR_SETTERS__",n=>mo=n)}const xo=t=>{const e=Et;return qa(t),t.scope.on(),()=>{t.scope.off(),qa(e)}},Bf=()=>{Et&&Et.scope.off(),qa(null)};function q_(t){return t.vnode.shapeFlag&4}let mo=!1;function Kb(t,e=!1,n=!1){e&&gu(e);const{props:s,children:i}=t.vnode,r=q_(t);Eb(t,s,r,e),Ib(t,i,n);const o=r?Gb(t,e):void 0;return e&&gu(!1),o}function Gb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,hb);const{setup:s}=n;if(s){Fs();const i=t.setupContext=s.length>1?Yb(t):null,r=xo(t),o=Po(s,t,0,[t.props,i]),a=kg(o);if(Us(),r(),(a||t.sp)&&!Gr(t)&&g_(t),a){if(o.then(Bf,Bf),e)return o.then(c=>{$f(t,c)}).catch(c=>{Rl(c,t,0)});t.asyncDep=o}else $f(t,o)}else H_(t)}function $f(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:We(e)&&(t.setupState=t_(e)),H_(t)}function H_(t,e,n){const s=t.type;t.render||(t.render=s.render||Nn);{const i=xo(t);Fs();try{fb(t)}finally{Us(),i()}}}const Qb={get(t,e){return xt(t,"get",""),t[e]}};function Yb(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Qb),slots:t.slots,emit:t.emit,expose:e}}function Dl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(t_(FT(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Qr)return Qr[n](t)},has(e,n){return n in e||n in Qr}})):t.proxy}function Xb(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function Jb(t){return pe(t)&&"__vccOpts"in t}const Je=(t,e)=>HT(t,e,mo);function qi(t,e,n){const s=arguments.length;return s===2?We(e)&&!le(e)?za(e)?ye(t,null,[e]):ye(t,e):ye(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&za(n)&&(n=[n]),ye(t,e,n))}const Zb="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _u;const zf=typeof window<"u"&&window.trustedTypes;if(zf)try{_u=zf.createPolicy("vue",{createHTML:t=>t})}catch{}const W_=_u?t=>_u.createHTML(t):t=>t,eI="http://www.w3.org/2000/svg",tI="http://www.w3.org/1998/Math/MathML",Kn=typeof document<"u"?document:null,jf=Kn&&Kn.createElement("template"),nI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?Kn.createElementNS(eI,t):e==="mathml"?Kn.createElementNS(tI,t):n?Kn.createElement(t,{is:n}):Kn.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Kn.createTextNode(t),createComment:t=>Kn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Kn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{jf.innerHTML=W_(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=jf.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},fs="transition",Pr="animation",go=Symbol("_vtc"),K_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},sI=gt({},u_,K_),iI=t=>(t.displayName="Transition",t.props=sI,t),qf=iI((t,{slots:e})=>qi(eb,rI(t),e)),Ks=(t,e=[])=>{le(t)?t.forEach(n=>n(...e)):t&&t(...e)},Hf=t=>t?le(t)?t.some(e=>e.length>1):t.length>1:!1;function rI(t){const e={};for(const b in t)b in K_||(e[b]=t[b]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=r,appearActiveClass:u=o,appearToClass:h=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,A=oI(i),R=A&&A[0],x=A&&A[1],{onBeforeEnter:F,onEnter:U,onEnterCancelled:O,onLeave:M,onLeaveCancelled:ee,onBeforeAppear:te=F,onAppear:C=U,onAppearCancelled:y=O}=e,v=(b,E,Fe,lt)=>{b._enterCancelled=lt,Gs(b,E?h:a),Gs(b,E?u:o),Fe&&Fe()},I=(b,E)=>{b._isLeaving=!1,Gs(b,f),Gs(b,g),Gs(b,m),E&&E()},S=b=>(E,Fe)=>{const lt=b?C:U,Qe=()=>v(E,b,Fe);Ks(lt,[E,Qe]),Wf(()=>{Gs(E,b?c:r),jn(E,b?h:a),Hf(lt)||Kf(E,s,R,Qe)})};return gt(e,{onBeforeEnter(b){Ks(F,[b]),jn(b,r),jn(b,o)},onBeforeAppear(b){Ks(te,[b]),jn(b,c),jn(b,u)},onEnter:S(!1),onAppear:S(!0),onLeave(b,E){b._isLeaving=!0;const Fe=()=>I(b,E);jn(b,f),b._enterCancelled?(jn(b,m),Yf()):(Yf(),jn(b,m)),Wf(()=>{b._isLeaving&&(Gs(b,f),jn(b,g),Hf(M)||Kf(b,s,x,Fe))}),Ks(M,[b,Fe])},onEnterCancelled(b){v(b,!1,void 0,!0),Ks(O,[b])},onAppearCancelled(b){v(b,!0,void 0,!0),Ks(y,[b])},onLeaveCancelled(b){I(b),Ks(ee,[b])}})}function oI(t){if(t==null)return null;if(We(t))return[Nc(t.enter),Nc(t.leave)];{const e=Nc(t);return[e,e]}}function Nc(t){return uT(t)}function jn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[go]||(t[go]=new Set)).add(e)}function Gs(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[go];n&&(n.delete(e),n.size||(t[go]=void 0))}function Wf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let aI=0;function Kf(t,e,n,s){const i=t._endId=++aI,r=()=>{i===t._endId&&s()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:a,propCount:c}=lI(t,e);if(!o)return s();const u=o+"end";let h=0;const f=()=>{t.removeEventListener(u,m),r()},m=g=>{g.target===t&&++h>=c&&f()};setTimeout(()=>{h<c&&f()},a+1),t.addEventListener(u,m)}function lI(t,e){const n=window.getComputedStyle(t),s=A=>(n[A]||"").split(", "),i=s(`${fs}Delay`),r=s(`${fs}Duration`),o=Gf(i,r),a=s(`${Pr}Delay`),c=s(`${Pr}Duration`),u=Gf(a,c);let h=null,f=0,m=0;e===fs?o>0&&(h=fs,f=o,m=r.length):e===Pr?u>0&&(h=Pr,f=u,m=c.length):(f=Math.max(o,u),h=f>0?o>u?fs:Pr:null,m=h?h===fs?r.length:c.length:0);const g=h===fs&&/\b(transform|all)(,|$)/.test(s(`${fs}Property`).toString());return{type:h,timeout:f,propCount:m,hasTransform:g}}function Gf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Qf(n)+Qf(t[s])))}function Qf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Yf(){return document.body.offsetHeight}function cI(t,e,n){const s=t[go];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ha=Symbol("_vod"),G_=Symbol("_vsh"),uI={beforeMount(t,{value:e},{transition:n}){t[Ha]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):xr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),xr(t,!0),s.enter(t)):s.leave(t,()=>{xr(t,!1)}):xr(t,e))},beforeUnmount(t,{value:e}){xr(t,e)}};function xr(t,e){t.style.display=e?t[Ha]:"none",t[G_]=!e}const hI=Symbol(""),dI=/(^|;)\s*display\s*:/;function fI(t,e,n){const s=t.style,i=et(n);let r=!1;if(n&&!i){if(e)if(et(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ca(s,a,"")}else for(const o in e)n[o]==null&&Ca(s,o,"");for(const o in n)o==="display"&&(r=!0),Ca(s,o,n[o])}else if(i){if(e!==n){const o=s[hI];o&&(n+=";"+o),s.cssText=n,r=dI.test(n)}}else e&&t.removeAttribute("style");Ha in t&&(t[Ha]=r?s.display:"",t[G_]&&(s.display="none"))}const Xf=/\s*!important$/;function Ca(t,e,n){if(le(n))n.forEach(s=>Ca(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=pI(t,e);Xf.test(n)?t.setProperty(ci(s),n.replace(Xf,""),"important"):t[s]=n}}const Jf=["Webkit","Moz","ms"],Dc={};function pI(t,e){const n=Dc[e];if(n)return n;let s=an(e);if(s!=="filter"&&s in t)return Dc[e]=s;s=Al(s);for(let i=0;i<Jf.length;i++){const r=Jf[i]+s;if(r in t)return Dc[e]=r}return e}const Zf="http://www.w3.org/1999/xlink";function ep(t,e,n,s,i,r=gT(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Zf,e.slice(6,e.length)):t.setAttributeNS(Zf,e,n):n==null||r&&!Dg(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Vs(n)?String(n):n)}function tp(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?W_(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Dg(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function Ai(t,e,n,s){t.addEventListener(e,n,s)}function mI(t,e,n,s){t.removeEventListener(e,n,s)}const np=Symbol("_vei");function gI(t,e,n,s,i=null){const r=t[np]||(t[np]={}),o=r[e];if(s&&o)o.value=s;else{const[a,c]=_I(e);if(s){const u=r[e]=EI(s,i);Ai(t,a,u,c)}else o&&(mI(t,a,o,c),r[e]=void 0)}}const sp=/(?:Once|Passive|Capture)$/;function _I(t){let e;if(sp.test(t)){e={};let s;for(;s=t.match(sp);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ci(t.slice(2)),e]}let Oc=0;const yI=Promise.resolve(),vI=()=>Oc||(yI.then(()=>Oc=0),Oc=Date.now());function EI(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;_n(wI(s,n.value),e,5,[s])};return n.value=t,n.attached=vI(),n}function wI(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const ip=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,TI=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?cI(t,s,o):e==="style"?fI(t,n,s):Tl(e)?ch(e)||gI(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bI(t,e,s,o))?(tp(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ep(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!et(s))?tp(t,an(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),ep(t,e,s,o))};function bI(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&ip(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return ip(e)&&et(n)?!1:e in t}const rp=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>Ta(e,n):e};function II(t){t.target.composing=!0}function op(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Mc=Symbol("_assign"),AI={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[Mc]=rp(i);const r=s||i.props&&i.props.type==="number";Ai(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=ou(a)),t[Mc](a)}),n&&Ai(t,"change",()=>{t.value=t.value.trim()}),e||(Ai(t,"compositionstart",II),Ai(t,"compositionend",op),Ai(t,"change",op))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[Mc]=rp(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?ou(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===c)||(t.value=c))}},CI=["ctrl","shift","alt","meta"],SI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>CI.some(n=>t[`${n}Key`]&&!e.includes(n))},RI=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const a=SI[e[o]];if(a&&a(i,e))return}return t(i,...r)})},kI=gt({patchProp:TI},nI);let ap;function PI(){return ap||(ap=Cb(kI))}const xI=(...t)=>{const e=PI().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=DI(s);if(!i)return;const r=e._component;!pe(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,NI(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function NI(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function DI(t){return et(t)?document.querySelector(t):t}const Q_=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},OI={};function MI(t,e){const n=ub("RouterView");return he(),ji(n)}const LI=Q_(OI,[["render",MI]]);/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ci=typeof document<"u";function Y_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function VI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Y_(t.default)}const Oe=Object.assign;function Lc(t,e){const n={};for(const s in e){const i=e[s];n[s]=vn(i)?i.map(t):t(i)}return n}const Xr=()=>{},vn=Array.isArray,X_=/#/g,FI=/&/g,UI=/\//g,BI=/=/g,$I=/\?/g,J_=/\+/g,zI=/%5B/g,jI=/%5D/g,Z_=/%5E/g,qI=/%60/g,ey=/%7B/g,HI=/%7C/g,ty=/%7D/g,WI=/%20/g;function Ch(t){return encodeURI(""+t).replace(HI,"|").replace(zI,"[").replace(jI,"]")}function KI(t){return Ch(t).replace(ey,"{").replace(ty,"}").replace(Z_,"^")}function yu(t){return Ch(t).replace(J_,"%2B").replace(WI,"+").replace(X_,"%23").replace(FI,"%26").replace(qI,"`").replace(ey,"{").replace(ty,"}").replace(Z_,"^")}function GI(t){return yu(t).replace(BI,"%3D")}function QI(t){return Ch(t).replace(X_,"%23").replace($I,"%3F")}function YI(t){return t==null?"":QI(t).replace(UI,"%2F")}function _o(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const XI=/\/$/,JI=t=>t.replace(XI,"");function Vc(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),r=e.slice(c+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=n0(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:_o(o)}}function ZI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function lp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function e0(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Hi(e.matched[s],n.matched[i])&&ny(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Hi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ny(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!t0(t[n],e[n]))return!1;return!0}function t0(t,e){return vn(t)?cp(t,e):vn(e)?cp(e,t):t===e}function cp(t,e){return vn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function n0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const ps={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var yo;(function(t){t.pop="pop",t.push="push"})(yo||(yo={}));var Jr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Jr||(Jr={}));function s0(t){if(!t)if(Ci){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),JI(t)}const i0=/^[^#]+#/;function r0(t,e){return t.replace(i0,"#")+e}function o0(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Ol=()=>({left:window.scrollX,top:window.scrollY});function a0(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=o0(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function up(t,e){return(history.state?history.state.position-e:-1)+t}const vu=new Map;function l0(t,e){vu.set(t,e)}function c0(t){const e=vu.get(t);return vu.delete(t),e}let u0=()=>location.protocol+"//"+location.host;function sy(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),lp(c,"")}return lp(n,t)+s+i}function h0(t,e,n,s){let i=[],r=[],o=null;const a=({state:m})=>{const g=sy(t,location),A=n.value,R=e.value;let x=0;if(m){if(n.value=g,e.value=m,o&&o===A){o=null;return}x=R?m.position-R.position:0}else s(g);i.forEach(F=>{F(n.value,A,{delta:x,type:yo.pop,direction:x?x>0?Jr.forward:Jr.back:Jr.unknown})})};function c(){o=n.value}function u(m){i.push(m);const g=()=>{const A=i.indexOf(m);A>-1&&i.splice(A,1)};return r.push(g),g}function h(){const{history:m}=window;m.state&&m.replaceState(Oe({},m.state,{scroll:Ol()}),"")}function f(){for(const m of r)m();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function hp(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Ol():null}}function d0(t){const{history:e,location:n}=window,s={value:sy(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,u,h){const f=t.indexOf("#"),m=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:u0()+t+c;try{e[h?"replaceState":"pushState"](u,"",m),i.value=u}catch(g){console.error(g),n[h?"replace":"assign"](m)}}function o(c,u){const h=Oe({},e.state,hp(i.value.back,c,i.value.forward,!0),u,{position:i.value.position});r(c,h,!0),s.value=c}function a(c,u){const h=Oe({},i.value,e.state,{forward:c,scroll:Ol()});r(h.current,h,!0);const f=Oe({},hp(s.value,c,null),{position:h.position+1},u);r(c,f,!1),s.value=c}return{location:s,state:i,push:a,replace:o}}function f0(t){t=s0(t);const e=d0(t),n=h0(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=Oe({location:"",base:t,go:s,createHref:r0.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function p0(t){return typeof t=="string"||t&&typeof t=="object"}function iy(t){return typeof t=="string"||typeof t=="symbol"}const ry=Symbol("");var dp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(dp||(dp={}));function Wi(t,e){return Oe(new Error,{type:t,[ry]:!0},e)}function qn(t,e){return t instanceof Error&&ry in t&&(e==null||!!(t.type&e))}const fp="[^/]+?",m0={sensitive:!1,strict:!1,start:!0,end:!0},g0=/[.+*?^${}()[\]/\\]/g;function _0(t,e){const n=Oe({},m0,e),s=[];let i=n.start?"^":"";const r=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let f=0;f<u.length;f++){const m=u[f];let g=40+(n.sensitive?.25:0);if(m.type===0)f||(i+="/"),i+=m.value.replace(g0,"\\$&"),g+=40;else if(m.type===1){const{value:A,repeatable:R,optional:x,regexp:F}=m;r.push({name:A,repeatable:R,optional:x});const U=F||fp;if(U!==fp){g+=10;try{new RegExp(`(${U})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${A}" (${U}): `+M.message)}}let O=R?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;f||(O=x&&u.length<2?`(?:/${O})`:"/"+O),x&&(O+="?"),i+=O,g+=20,x&&(g+=-8),R&&(g+=-20),U===".*"&&(g+=-50)}h.push(g)}s.push(h)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(u){const h=u.match(o),f={};if(!h)return null;for(let m=1;m<h.length;m++){const g=h[m]||"",A=r[m-1];f[A.name]=g&&A.repeatable?g.split("/"):g}return f}function c(u){let h="",f=!1;for(const m of t){(!f||!h.endsWith("/"))&&(h+="/"),f=!1;for(const g of m)if(g.type===0)h+=g.value;else if(g.type===1){const{value:A,repeatable:R,optional:x}=g,F=A in u?u[A]:"";if(vn(F)&&!R)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const U=vn(F)?F.join("/"):F;if(!U)if(x)m.length<2&&(h.endsWith("/")?h=h.slice(0,-1):f=!0);else throw new Error(`Missing required param "${A}"`);h+=U}}return h||"/"}return{re:o,score:s,keys:r,parse:a,stringify:c}}function y0(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function oy(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=y0(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(pp(s))return 1;if(pp(i))return-1}return i.length-s.length}function pp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const v0={type:0,value:""},E0=/[a-zA-Z0-9_]/;function w0(t){if(!t)return[[]];if(t==="/")return[[v0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,c,u="",h="";function f(){u&&(n===0?r.push({type:0,value:u}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),n=1):m();break;case 4:m(),n=s;break;case 1:c==="("?n=2:E0.test(c)?m():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:n=3:h+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),i}function T0(t,e,n){const s=_0(w0(t.path),n),i=Oe(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function b0(t,e){const n=[],s=new Map;e=yp({strict:!1,end:!0,sensitive:!1},e);function i(f){return s.get(f)}function r(f,m,g){const A=!g,R=gp(f);R.aliasOf=g&&g.record;const x=yp(e,f),F=[R];if("alias"in f){const M=typeof f.alias=="string"?[f.alias]:f.alias;for(const ee of M)F.push(gp(Oe({},R,{components:g?g.record.components:R.components,path:ee,aliasOf:g?g.record:R})))}let U,O;for(const M of F){const{path:ee}=M;if(m&&ee[0]!=="/"){const te=m.record.path,C=te[te.length-1]==="/"?"":"/";M.path=m.record.path+(ee&&C+ee)}if(U=T0(M,m,x),g?g.alias.push(U):(O=O||U,O!==U&&O.alias.push(U),A&&f.name&&!_p(U)&&o(f.name)),ay(U)&&c(U),R.children){const te=R.children;for(let C=0;C<te.length;C++)r(te[C],U,g&&g.children[C])}g=g||U}return O?()=>{o(O)}:Xr}function o(f){if(iy(f)){const m=s.get(f);m&&(s.delete(f),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(f);m>-1&&(n.splice(m,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const m=C0(f,n);n.splice(m,0,f),f.record.name&&!_p(f)&&s.set(f.record.name,f)}function u(f,m){let g,A={},R,x;if("name"in f&&f.name){if(g=s.get(f.name),!g)throw Wi(1,{location:f});x=g.record.name,A=Oe(mp(m.params,g.keys.filter(O=>!O.optional).concat(g.parent?g.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),f.params&&mp(f.params,g.keys.map(O=>O.name))),R=g.stringify(A)}else if(f.path!=null)R=f.path,g=n.find(O=>O.re.test(R)),g&&(A=g.parse(R),x=g.record.name);else{if(g=m.name?s.get(m.name):n.find(O=>O.re.test(m.path)),!g)throw Wi(1,{location:f,currentLocation:m});x=g.record.name,A=Oe({},m.params,f.params),R=g.stringify(A)}const F=[];let U=g;for(;U;)F.unshift(U.record),U=U.parent;return{name:x,path:R,params:A,matched:F,meta:A0(F)}}t.forEach(f=>r(f));function h(){n.length=0,s.clear()}return{addRoute:r,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:i}}function mp(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function gp(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:I0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function I0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function _p(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function A0(t){return t.reduce((e,n)=>Oe(e,n.meta),{})}function yp(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function C0(t,e){let n=0,s=e.length;for(;n!==s;){const r=n+s>>1;oy(t,e[r])<0?s=r:n=r+1}const i=S0(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function S0(t){let e=t;for(;e=e.parent;)if(ay(e)&&oy(t,e)===0)return e}function ay({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function R0(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(J_," "),o=r.indexOf("="),a=_o(o<0?r:r.slice(0,o)),c=o<0?null:_o(r.slice(o+1));if(a in e){let u=e[a];vn(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function vp(t){let e="";for(let n in t){const s=t[n];if(n=GI(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(vn(s)?s.map(r=>r&&yu(r)):[s&&yu(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function k0(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=vn(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const P0=Symbol(""),Ep=Symbol(""),Sh=Symbol(""),ly=Symbol(""),Eu=Symbol("");function Nr(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function vs(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((a,c)=>{const u=m=>{m===!1?c(Wi(4,{from:n,to:e})):m instanceof Error?c(m):p0(m)?c(Wi(2,{from:e,to:m})):(o&&s.enterCallbacks[i]===o&&typeof m=="function"&&o.push(m),a())},h=r(()=>t.call(s&&s.instances[i],e,n,u));let f=Promise.resolve(h);t.length<3&&(f=f.then(u)),f.catch(m=>c(m))})}function Fc(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Y_(c)){const h=(c.__vccOpts||c)[e];h&&r.push(vs(h,n,s,o,a,i))}else{let u=c();r.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=VI(h)?h.default:h;o.mods[a]=h,o.components[a]=f;const g=(f.__vccOpts||f)[e];return g&&vs(g,n,s,o,a,i)()}))}}return r}function wp(t){const e=mn(Sh),n=mn(ly),s=Je(()=>{const c=rt(t.to);return e.resolve(c)}),i=Je(()=>{const{matched:c}=s.value,{length:u}=c,h=c[u-1],f=n.matched;if(!h||!f.length)return-1;const m=f.findIndex(Hi.bind(null,h));if(m>-1)return m;const g=Tp(c[u-2]);return u>1&&Tp(h)===g&&f[f.length-1].path!==g?f.findIndex(Hi.bind(null,c[u-2])):m}),r=Je(()=>i.value>-1&&O0(n.params,s.value.params)),o=Je(()=>i.value>-1&&i.value===n.matched.length-1&&ny(n.params,s.value.params));function a(c={}){if(D0(c)){const u=e[rt(t.replace)?"replace":"push"](rt(t.to)).catch(Xr);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:Je(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}function x0(t){return t.length===1?t[0]:t}const N0=m_({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:wp,setup(t,{slots:e}){const n=ir(wp(t)),{options:s}=mn(Sh),i=Je(()=>({[bp(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[bp(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&x0(e.default(n));return t.custom?r:qi("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),cy=N0;function D0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function O0(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!vn(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Tp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const bp=(t,e,n)=>t??e??n,M0=m_({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=mn(Eu),i=Je(()=>t.route||s.value),r=mn(Ep,0),o=Je(()=>{let u=rt(r);const{matched:h}=i.value;let f;for(;(f=h[u])&&!f.components;)u++;return u}),a=Je(()=>i.value.matched[o.value]);ba(Ep,Je(()=>o.value+1)),ba(P0,a),ba(Eu,i);const c=bt();return bs(()=>[c.value,a.value,t.name],([u,h,f],[m,g,A])=>{h&&(h.instances[f]=u,g&&g!==h&&u&&u===m&&(h.leaveGuards.size||(h.leaveGuards=g.leaveGuards),h.updateGuards.size||(h.updateGuards=g.updateGuards))),u&&h&&(!g||!Hi(h,g)||!m)&&(h.enterCallbacks[f]||[]).forEach(R=>R(u))},{flush:"post"}),()=>{const u=i.value,h=t.name,f=a.value,m=f&&f.components[h];if(!m)return Ip(n.default,{Component:m,route:u});const g=f.props[h],A=g?g===!0?u.params:typeof g=="function"?g(u):g:null,x=qi(m,Oe({},A,e,{onVnodeUnmounted:F=>{F.component.isUnmounted&&(f.instances[h]=null)},ref:c}));return Ip(n.default,{Component:x,route:u})||x}}});function Ip(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const L0=M0;function V0(t){const e=b0(t.routes,t),n=t.parseQuery||R0,s=t.stringifyQuery||vp,i=t.history,r=Nr(),o=Nr(),a=Nr(),c=Zg(ps);let u=ps;Ci&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Lc.bind(null,L=>""+L),f=Lc.bind(null,YI),m=Lc.bind(null,_o);function g(L,J){let Y,ne;return iy(L)?(Y=e.getRecordMatcher(L),ne=J):ne=L,e.addRoute(ne,Y)}function A(L){const J=e.getRecordMatcher(L);J&&e.removeRoute(J)}function R(){return e.getRoutes().map(L=>L.record)}function x(L){return!!e.getRecordMatcher(L)}function F(L,J){if(J=Oe({},J||c.value),typeof L=="string"){const k=Vc(n,L,J.path),V=e.resolve({path:k.path},J),z=i.createHref(k.fullPath);return Oe(k,V,{params:m(V.params),hash:_o(k.hash),redirectedFrom:void 0,href:z})}let Y;if(L.path!=null)Y=Oe({},L,{path:Vc(n,L.path,J.path).path});else{const k=Oe({},L.params);for(const V in k)k[V]==null&&delete k[V];Y=Oe({},L,{params:f(k)}),J.params=f(J.params)}const ne=e.resolve(Y,J),Pe=L.hash||"";ne.params=h(m(ne.params));const w=ZI(s,Oe({},L,{hash:KI(Pe),path:ne.path})),T=i.createHref(w);return Oe({fullPath:w,hash:Pe,query:s===vp?k0(L.query):L.query||{}},ne,{redirectedFrom:void 0,href:T})}function U(L){return typeof L=="string"?Vc(n,L,c.value.path):Oe({},L)}function O(L,J){if(u!==L)return Wi(8,{from:J,to:L})}function M(L){return C(L)}function ee(L){return M(Oe(U(L),{replace:!0}))}function te(L){const J=L.matched[L.matched.length-1];if(J&&J.redirect){const{redirect:Y}=J;let ne=typeof Y=="function"?Y(L):Y;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=U(ne):{path:ne},ne.params={}),Oe({query:L.query,hash:L.hash,params:ne.path!=null?{}:L.params},ne)}}function C(L,J){const Y=u=F(L),ne=c.value,Pe=L.state,w=L.force,T=L.replace===!0,k=te(Y);if(k)return C(Oe(U(k),{state:typeof k=="object"?Oe({},Pe,k.state):Pe,force:w,replace:T}),J||Y);const V=Y;V.redirectedFrom=J;let z;return!w&&e0(s,ne,Y)&&(z=Wi(16,{to:V,from:ne}),Zt(ne,ne,!0,!1)),(z?Promise.resolve(z):I(V,ne)).catch(B=>qn(B)?qn(B,2)?B:cn(B):Ee(B,V,ne)).then(B=>{if(B){if(qn(B,2))return C(Oe({replace:T},U(B.to),{state:typeof B.to=="object"?Oe({},Pe,B.to.state):Pe,force:w}),J||V)}else B=b(V,ne,!0,T,Pe);return S(V,ne,B),B})}function y(L,J){const Y=O(L,J);return Y?Promise.reject(Y):Promise.resolve()}function v(L){const J=ls.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(L):L()}function I(L,J){let Y;const[ne,Pe,w]=F0(L,J);Y=Fc(ne.reverse(),"beforeRouteLeave",L,J);for(const k of ne)k.leaveGuards.forEach(V=>{Y.push(vs(V,L,J))});const T=y.bind(null,L,J);return Y.push(T),$t(Y).then(()=>{Y=[];for(const k of r.list())Y.push(vs(k,L,J));return Y.push(T),$t(Y)}).then(()=>{Y=Fc(Pe,"beforeRouteUpdate",L,J);for(const k of Pe)k.updateGuards.forEach(V=>{Y.push(vs(V,L,J))});return Y.push(T),$t(Y)}).then(()=>{Y=[];for(const k of w)if(k.beforeEnter)if(vn(k.beforeEnter))for(const V of k.beforeEnter)Y.push(vs(V,L,J));else Y.push(vs(k.beforeEnter,L,J));return Y.push(T),$t(Y)}).then(()=>(L.matched.forEach(k=>k.enterCallbacks={}),Y=Fc(w,"beforeRouteEnter",L,J,v),Y.push(T),$t(Y))).then(()=>{Y=[];for(const k of o.list())Y.push(vs(k,L,J));return Y.push(T),$t(Y)}).catch(k=>qn(k,8)?k:Promise.reject(k))}function S(L,J,Y){a.list().forEach(ne=>v(()=>ne(L,J,Y)))}function b(L,J,Y,ne,Pe){const w=O(L,J);if(w)return w;const T=J===ps,k=Ci?history.state:{};Y&&(ne||T?i.replace(L.fullPath,Oe({scroll:T&&k&&k.scroll},Pe)):i.push(L.fullPath,Pe)),c.value=L,Zt(L,J,Y,T),cn()}let E;function Fe(){E||(E=i.listen((L,J,Y)=>{if(!In.listening)return;const ne=F(L),Pe=te(ne);if(Pe){C(Oe(Pe,{replace:!0,force:!0}),ne).catch(Xr);return}u=ne;const w=c.value;Ci&&l0(up(w.fullPath,Y.delta),Ol()),I(ne,w).catch(T=>qn(T,12)?T:qn(T,2)?(C(Oe(U(T.to),{force:!0}),ne).then(k=>{qn(k,20)&&!Y.delta&&Y.type===yo.pop&&i.go(-1,!1)}).catch(Xr),Promise.reject()):(Y.delta&&i.go(-Y.delta,!1),Ee(T,ne,w))).then(T=>{T=T||b(ne,w,!1),T&&(Y.delta&&!qn(T,8)?i.go(-Y.delta,!1):Y.type===yo.pop&&qn(T,20)&&i.go(-1,!1)),S(ne,w,T)}).catch(Xr)}))}let lt=Nr(),Qe=Nr(),Ie;function Ee(L,J,Y){cn(L);const ne=Qe.list();return ne.length?ne.forEach(Pe=>Pe(L,J,Y)):console.error(L),Promise.reject(L)}function Wt(){return Ie&&c.value!==ps?Promise.resolve():new Promise((L,J)=>{lt.add([L,J])})}function cn(L){return Ie||(Ie=!L,Fe(),lt.list().forEach(([J,Y])=>L?Y(L):J()),lt.reset()),L}function Zt(L,J,Y,ne){const{scrollBehavior:Pe}=t;if(!Ci||!Pe)return Promise.resolve();const w=!Y&&c0(up(L.fullPath,0))||(ne||!Y)&&history.state&&history.state.scroll||null;return s_().then(()=>Pe(L,J,w)).then(T=>T&&a0(T)).catch(T=>Ee(T,L,J))}const Ye=L=>i.go(L);let Xe;const ls=new Set,In={currentRoute:c,listening:!0,addRoute:g,removeRoute:A,clearRoutes:e.clearRoutes,hasRoute:x,getRoutes:R,resolve:F,options:t,push:M,replace:ee,go:Ye,back:()=>Ye(-1),forward:()=>Ye(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Qe.add,isReady:Wt,install(L){const J=this;L.component("RouterLink",cy),L.component("RouterView",L0),L.config.globalProperties.$router=J,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>rt(c)}),Ci&&!Xe&&c.value===ps&&(Xe=!0,M(i.location).catch(Pe=>{}));const Y={};for(const Pe in ps)Object.defineProperty(Y,Pe,{get:()=>c.value[Pe],enumerable:!0});L.provide(Sh,J),L.provide(ly,Xg(Y)),L.provide(Eu,c);const ne=L.unmount;ls.add(L),L.unmount=function(){ls.delete(L),ls.size<1&&(u=ps,E&&E(),E=null,c.value=ps,Xe=!1,Ie=!1),ne()}}};function $t(L){return L.reduce((J,Y)=>J.then(()=>v(Y)),Promise.resolve())}return In}function F0(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(u=>Hi(u,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Hi(u,c))||i.push(c))}return[n,s,i]}var Ml=function(){return typeof document<"u"&&typeof window<"u"},U0=function(e,n){return new Promise(function(s,i){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");if(o.async=!0,o.src=e,o.charset="utf-8",n){var a=document.createElement("link");a.href=n,a.rel="preconnect",r.appendChild(a)}r.appendChild(o),o.onload=s,o.onerror=i})},B0=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Object.keys(n).forEach(function(s){e[s]=n[s]})},uy=ir({property:null,isEnabled:!0,disableScriptLoader:!1,useDebugger:!1,globalObjectName:"gtag",dataLayerName:"dataLayer",resourceURL:"https://www.googletagmanager.com/gtag/js",preconnectOrigin:"https://www.googletagmanager.com",customResource:null,appName:null,appId:null,appVersion:null}),Bs=function(){return $T(uy)},hy=Je(function(){var t=Bs(),e=t.property;if(e.value)return Array.isArray(e.value)?e.value.find(function(n){return n.default===!0})||e.value[0]:e.value}),$0=Je(function(){var t=Bs(),e=t.property;return!!(e.value&&e.value.id!==null)}),vo=Je(function(){var t=Bs(),e=t.property;return Array.isArray(e.value)?e.value:[e.value]}),z0=Je(function(){var t=Bs(),e=t.isEnabled,n=hy.value;return!!(n&&n.id&&e.value)}),No=function(){var t;if(Ml()){for(var e=Bs(),n=e.globalObjectName,s=e.useDebugger,i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];s.value&&console.warn("[vue-gtag] Debugger:",r),(t=window)[n.value].apply(t,r)}},Rh=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];vo.value.forEach(function(s){No.apply(void 0,["config",s.id].concat(e))})},j0=function(t){Rh({custom_map:t})},q0=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;Ml()&&vo.value.forEach(function(e){window["ga-disable-".concat(e.id)]=t})},hi=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=Object.assign({},e);!n.send_to&&vo.value.length>1&&(n.send_to=vo.value.map(function(s){return s.id})),No("event",t,n)},H0=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];hi.apply(void 0,["exception"].concat(e))},W0=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];Rh.apply(void 0,["linker"].concat(e))},K0=function(t){var e={};typeof t=="string"?e={page_path:t,page_location:window.location.href}:e=t,typeof e.send_page_view>"u"&&(e.send_page_view=!0),hi("page_view",e)},G0=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];hi.apply(void 0,["purchase"].concat(e))},Q0=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];hi.apply(void 0,["refund"].concat(e))},Y0=function(){for(var t=Bs(),e=t.appName,n=t.appId,s=t.appVersion,i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];var a=r[0],c={};typeof a=="string"?c={screen_name:a}:c=a,c.app_name==null&&e.value!=null&&(c.app_name=e.value),c.app_id==null&&n.value!=null&&(c.app_id=n.value),c.app_version==null&&s.value!=null&&(c.app_version=s.value),hi("screen_view",c)},X0=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];No.apply(void 0,["set"].concat(e))},J0=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];hi.apply(void 0,["timing_complete"].concat(e))},dy=Object.freeze({__proto__:null,config:Rh,customMap:j0,disable:q0,event:hi,exception:H0,linker:W0,pageview:K0,purchase:G0,query:No,refund:Q0,screenview:Y0,set:X0,time:J0}),Ap=bt(!1),Cp=bt(!1),Z0=function(){var e=Bs(),n=e.disableScriptLoader,s=e.preconnectOrigin,i=e.resourceURL,r=e.dataLayerName;if(!(!Ml()||!$0.value||Cp.value)){if(Cp.value=!0,vo.value.forEach(function(a){var c=Object.assign({send_page_view:!1},a.params);No("config",a.id,c)}),n.value){Ap.value=!0;return}var o="".concat(i.value,"?id=").concat(hy.value.id,"&l=").concat(r.value);U0(o,s.value).then(function(){Ap.value=!0})}},eA=function(){bs(function(){return z0.value},function(e){return e&&Z0()},{immediate:!0})},tA=function(){if(Ml()){var t=Bs(),e=t.globalObjectName,n=t.dataLayerName;window[e.value]==null&&(window[n.value]=window[n.value]||[],window[e.value]=function(){window[n.value].push(arguments)}),window[e.value]("js",new Date)}},rr=function(){return dy};ir({template:null,useScreenview:!1,skipSamePath:!0});var nA={install:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};B0(uy,n),tA(),eA(),e.config.globalProperties.$gtag=dy}};const{event:sA}=rr(),Sp=bt("es"),rs=()=>({language:Sp,setLanguage:e=>{Sp.value=e,sA("language-selected",{event_category:"engagement",event_label:"language",value:e})}}),iA=[{name:"Funciones",link:"features"},{name:"Solución",link:"solution"},{name:"FAQ",link:"faq"},{name:"Precios",link:"pricing"},{name:"Casos de uso",link:"use-cases"}],rA=[{name:"Features",link:"features"},{name:"Solution",link:"solution"},{name:"FAQ",link:"faq"},{name:"Pricing",link:"pricing"},{name:"Use Cases",link:"use-cases"}],oA=[{name:"Funktionen",link:"features"},{name:"Lösung",link:"solution"},{name:"FAQ",link:"faq"},{name:"Preise",link:"pricing"},{name:"Anwendungsfälle",link:"use-cases"}],aA={es:iA,en:rA,de:oA},lA="/docutrack-logo-02.png";/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cA=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ha={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uA=({size:t,strokeWidth:e=2,absoluteStrokeWidth:n,color:s,iconNode:i,name:r,class:o,...a},{slots:c})=>qi("svg",{...ha,width:t||ha.width,height:t||ha.height,stroke:s||ha.stroke,"stroke-width":n?Number(e)*24/Number(t):e,class:["lucide",`lucide-${cA(r??"icon")}`],...a},[...i.map(u=>qi(...u)),...c.default?[c.default()]:[]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=(t,e)=>(n,{slots:s})=>qi(uA,{...n,iconNode:e,name:t},s);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hA=st("AppWindowIcon",[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dA=st("BaggageClaimIcon",[["path",{d:"M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2",key:"4irg2o"}],["path",{d:"M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10",key:"14fcyx"}],["rect",{width:"13",height:"8",x:"8",y:"6",rx:"1",key:"o6oiis"}],["circle",{cx:"18",cy:"20",r:"2",key:"t9985n"}],["circle",{cx:"9",cy:"20",r:"2",key:"e5v82j"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fA=st("BellRingIcon",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=st("BotIcon",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mA=st("Building2Icon",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gA=st("ChartColumnDecreasingIcon",[["path",{d:"M13 17V9",key:"1fwyjl"}],["path",{d:"M18 17v-3",key:"1sqioe"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M8 17V5",key:"1wzmnc"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=st("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA=st("ChevronDownIcon",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vA=st("CircleCheckBigIcon",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA=st("CircleXIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=st("FileClockIcon",[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"37hlfg"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"8",cy:"16",r:"6",key:"10v15b"}],["path",{d:"M9.5 17.5 8 16.25V14",key:"1o80t2"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=st("FolderIcon",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA=st("HardHatIcon",[["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",key:"1p9q5i"}],["path",{d:"M14 6a6 6 0 0 1 6 6v3",key:"1hnv84"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6",key:"9ciidu"}],["rect",{x:"2",y:"15",width:"20",height:"4",rx:"1",key:"g3x8cw"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IA=st("HeartIcon",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AA=st("InstagramIcon",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=st("LandmarkIcon",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SA=st("LinkedinIcon",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=st("MoonIcon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kA=st("Share2Icon",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=st("SunIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xA=st("UsersRoundIcon",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]]),NA={class:"flex justify-between w-32 border-base-400"},DA=["width","height"],OA=["width","height"],MA=["width","height"],Rp={__name:"LanguageSelector",props:["size"],setup(t){const{setLanguage:e}=rs();return(n,s)=>(he(),_e("div",NA,[D("button",{onClick:s[0]||(s[0]=i=>rt(e)("es"))},[(he(),_e("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 32 32"},s[3]||(s[3]=[xc('<path d="M1,24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4v-3H1v3Z" fill="#b92932"></path><path fill="#0f2c83" d="M1 15H31V22H1z"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4v8H31V8c0-2.209-1.791-4-4-4Z" fill="#f8d047"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path>',5)]),8,DA))]),D("button",{onClick:s[1]||(s[1]=i=>rt(e)("en"))},[(he(),_e("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 32 32"},s[4]||(s[4]=[xc('<rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#fff"></rect><path d="M1.638,5.846H30.362c-.711-1.108-1.947-1.846-3.362-1.846H5c-1.414,0-2.65,.738-3.362,1.846Z" fill="#a62842"></path><path d="M2.03,7.692c-.008,.103-.03,.202-.03,.308v1.539H31v-1.539c0-.105-.022-.204-.03-.308H2.03Z" fill="#a62842"></path><path fill="#a62842" d="M2 11.385H31V13.231H2z"></path><path fill="#a62842" d="M2 15.077H31V16.923000000000002H2z"></path><path fill="#a62842" d="M1 18.769H31V20.615H1z"></path><path d="M1,24c0,.105,.023,.204,.031,.308H30.969c.008-.103,.031-.202,.031-.308v-1.539H1v1.539Z" fill="#a62842"></path><path d="M30.362,26.154H1.638c.711,1.108,1.947,1.846,3.362,1.846H27c1.414,0,2.65-.738,3.362-1.846Z" fill="#a62842"></path><path d="M5,4h11v12.923H1V8c0-2.208,1.792-4,4-4Z" fill="#102d5e"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path><path fill="#fff" d="M4.601 7.463L5.193 7.033 4.462 7.033 4.236 6.338 4.01 7.033 3.279 7.033 3.87 7.463 3.644 8.158 4.236 7.729 4.827 8.158 4.601 7.463z"></path><path fill="#fff" d="M7.58 7.463L8.172 7.033 7.441 7.033 7.215 6.338 6.989 7.033 6.258 7.033 6.849 7.463 6.623 8.158 7.215 7.729 7.806 8.158 7.58 7.463z"></path><path fill="#fff" d="M10.56 7.463L11.151 7.033 10.42 7.033 10.194 6.338 9.968 7.033 9.237 7.033 9.828 7.463 9.603 8.158 10.194 7.729 10.785 8.158 10.56 7.463z"></path><path fill="#fff" d="M6.066 9.283L6.658 8.854 5.927 8.854 5.701 8.158 5.475 8.854 4.744 8.854 5.335 9.283 5.109 9.979 5.701 9.549 6.292 9.979 6.066 9.283z"></path><path fill="#fff" d="M9.046 9.283L9.637 8.854 8.906 8.854 8.68 8.158 8.454 8.854 7.723 8.854 8.314 9.283 8.089 9.979 8.68 9.549 9.271 9.979 9.046 9.283z"></path><path fill="#fff" d="M12.025 9.283L12.616 8.854 11.885 8.854 11.659 8.158 11.433 8.854 10.702 8.854 11.294 9.283 11.068 9.979 11.659 9.549 12.251 9.979 12.025 9.283z"></path><path fill="#fff" d="M6.066 12.924L6.658 12.494 5.927 12.494 5.701 11.799 5.475 12.494 4.744 12.494 5.335 12.924 5.109 13.619 5.701 13.19 6.292 13.619 6.066 12.924z"></path><path fill="#fff" d="M9.046 12.924L9.637 12.494 8.906 12.494 8.68 11.799 8.454 12.494 7.723 12.494 8.314 12.924 8.089 13.619 8.68 13.19 9.271 13.619 9.046 12.924z"></path><path fill="#fff" d="M12.025 12.924L12.616 12.494 11.885 12.494 11.659 11.799 11.433 12.494 10.702 12.494 11.294 12.924 11.068 13.619 11.659 13.19 12.251 13.619 12.025 12.924z"></path><path fill="#fff" d="M13.539 7.463L14.13 7.033 13.399 7.033 13.173 6.338 12.947 7.033 12.216 7.033 12.808 7.463 12.582 8.158 13.173 7.729 13.765 8.158 13.539 7.463z"></path><path fill="#fff" d="M4.601 11.104L5.193 10.674 4.462 10.674 4.236 9.979 4.01 10.674 3.279 10.674 3.87 11.104 3.644 11.799 4.236 11.369 4.827 11.799 4.601 11.104z"></path><path fill="#fff" d="M7.58 11.104L8.172 10.674 7.441 10.674 7.215 9.979 6.989 10.674 6.258 10.674 6.849 11.104 6.623 11.799 7.215 11.369 7.806 11.799 7.58 11.104z"></path><path fill="#fff" d="M10.56 11.104L11.151 10.674 10.42 10.674 10.194 9.979 9.968 10.674 9.237 10.674 9.828 11.104 9.603 11.799 10.194 11.369 10.785 11.799 10.56 11.104z"></path><path fill="#fff" d="M13.539 11.104L14.13 10.674 13.399 10.674 13.173 9.979 12.947 10.674 12.216 10.674 12.808 11.104 12.582 11.799 13.173 11.369 13.765 11.799 13.539 11.104z"></path><path fill="#fff" d="M4.601 14.744L5.193 14.315 4.462 14.315 4.236 13.619 4.01 14.315 3.279 14.315 3.87 14.744 3.644 15.44 4.236 15.01 4.827 15.44 4.601 14.744z"></path><path fill="#fff" d="M7.58 14.744L8.172 14.315 7.441 14.315 7.215 13.619 6.989 14.315 6.258 14.315 6.849 14.744 6.623 15.44 7.215 15.01 7.806 15.44 7.58 14.744z"></path><path fill="#fff" d="M10.56 14.744L11.151 14.315 10.42 14.315 10.194 13.619 9.968 14.315 9.237 14.315 9.828 14.744 9.603 15.44 10.194 15.01 10.785 15.44 10.56 14.744z"></path><path fill="#fff" d="M13.539 14.744L14.13 14.315 13.399 14.315 13.173 13.619 12.947 14.315 12.216 14.315 12.808 14.744 12.582 15.44 13.173 15.01 13.765 15.44 13.539 14.744z"></path>',29)]),8,OA))]),D("button",{onClick:s[2]||(s[2]=i=>rt(e)("de"))},[(he(),_e("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 32 32"},s[5]||(s[5]=[xc('<path fill="#cc2b1d" d="M1 11H31V21H1z"></path><path d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"></path><path d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" transform="rotate(180 16 24)" fill="#f8d147"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path>',5)]),8,MA))])]))}},LA={class:"container mx-auto px-4 py-4 flex justify-between items-center"},VA={class:"hidden md:flex justify-end gap-6 lg:gap-12 space-x-4 w-2/3"},FA=["href"],UA={class:"hidden md:block"},BA={class:"flex items-center space-x-4"},$A={class:"w-6 h-6 flex items-center justify-center"},zA={class:"relative w-6 h-4"},jA={class:"flex flex-col h-full"},qA={class:"flex-1 pt-24 pb-8"},HA={class:"flex flex-col space-y-8"},WA=["href"],KA={class:"pt-6 mt-auto border-t border-gray-200 dark:border-gray-800"},GA={class:"flex justify-center space-x-6"},QA={__name:"HeaderComponent",props:["isDarkMode","navItems"],emits:["switchTheme"],setup(t,{emit:e}){const n=e,s=bt(!1),i=()=>{s.value=!s.value,s.value?document.body.style.overflow="hidden":document.body.style.overflow=""},r=()=>{s.value=!1,document.body.style.overflow=""},o=()=>{n("switchTheme")},a=c=>{c.key==="Escape"&&s.value&&r()};return wh(()=>{document.addEventListener("keydown",a)}),Th(()=>{document.body.style.overflow="",document.removeEventListener("keydown",a)}),(c,u)=>(he(),_e("header",{class:Re(["sticky top-0 z-50 shadow-md transition-colors duration-300",t.isDarkMode?"bg-base-400":"bg-base-100"])},[D("nav",LA,[u[2]||(u[2]=D("a",{href:"#hero",class:"flex items-center relative z-50"},[D("img",{src:lA,alt:"Docutrack Logo",class:"h-10 w-auto mr-2"}),D("span",{class:"text-2xl font-bold text-primary-200 hidden md:block w-auto"},"Docutrack")],-1)),D("div",VA,[(he(!0),_e(nt,null,yn(t.navItems,h=>(he(),_e("a",{key:h.name,href:`#${h.link.toLowerCase()}`,class:Re(["hover:text-primary-200 transition-colors font-semibold text-lg",t.isDarkMode?"text-base-100":"text-base-400"])},ue(h.name),11,FA))),128))]),D("div",UA,[ye(Rp,{size:"24"})]),D("div",BA,[D("button",{onClick:o,class:"text-primary-200 relative z-50"},[t.isDarkMode?(he(),ji(rt(PA),{key:0,class:"w-6 h-6"})):(he(),ji(rt(RA),{key:1,class:"w-6 h-6"}))]),D("button",{onClick:i,class:"md:hidden text-primary-200 relative z-50","aria-label":"Toggle menu"},[u[1]||(u[1]=D("span",{class:"sr-only"},"Toggle menu",-1)),D("div",$A,[D("div",zA,[D("span",{class:Re(["absolute h-0.5 w-6 transform transition-all duration-300",s.value?"rotate-45 translate-y-2":"translate-y-0",(t.isDarkMode,"bg-primary-200")])},null,2),D("span",{class:Re(["absolute h-0.5 w-6 transform transition-all duration-300",s.value?"opacity-0":"opacity-100",(t.isDarkMode,"bg-primary-200")]),style:{top:"50%",transform:"translateY(-50%)"}},null,2),D("span",{class:Re(["absolute h-0.5 w-6 transform transition-all duration-300",s.value?"-rotate-45 -translate-y-2":"translate-y-4",(t.isDarkMode,"bg-primary-200")])},null,2)])])])])]),ye(qf,{"enter-active-class":"transition-all duration-300 ease-out","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"transition-all duration-300 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:Ua(()=>[s.value?(he(),_e("div",{key:0,class:"fixed inset-0 z-40",onClick:r},[u[3]||(u[3]=D("div",{class:"absolute inset-0 bg-black/50 backdrop-blur-sm"},null,-1)),ye(qf,{"enter-active-class":"transition-all duration-300 ease-out","enter-from-class":"translate-x-full","enter-to-class":"translate-x-0","leave-active-class":"transition-all duration-300 ease-in","leave-from-class":"translate-x-0","leave-to-class":"translate-x-full"},{default:Ua(()=>[s.value?(he(),_e("div",{key:0,class:Re(["fixed inset-y-0 right-0 w-full max-w p-6 overflow-y-auto",t.isDarkMode?"bg-base-400":"bg-base-100"]),onClick:u[0]||(u[0]=RI(()=>{},["stop"]))},[D("div",jA,[D("div",qA,[D("nav",HA,[(he(!0),_e(nt,null,yn(t.navItems,h=>(he(),_e("a",{key:h.name,href:`#${h.link.toLowerCase()}`,onClick:r,class:Re(["text-2xl font-semibold text-center py-2 transition-colors duration-300",t.isDarkMode?"text-base-100 hover:text-primary-200":"text-base-400 hover:text-primary-200"])},ue(h.name),11,WA))),128))])]),D("div",KA,[D("div",GA,[ye(Rp,{size:"24"})])])])],2)):ja("",!0)]),_:1})])):ja("",!0)]),_:1})],2))}},fy=Q_(QA,[["__scopeId","data-v-b27cf2dd"]]),YA="/hero-image-01.jpg";var kp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q=function(t,e){if(!t)throw or(e)},or=function(t){return new Error("Firebase Database ("+py.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},XA=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ll={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,h=r>>2,f=(r&3)<<4|a>>4;let m=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(m=64)),s.push(n[h],n[f],n[m],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(my(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):XA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||u==null||f==null)throw new JA;const m=r<<2|a>>4;if(s.push(m),u!==64){const g=a<<4&240|u>>2;if(s.push(g),f!==64){const A=u<<6&192|f;s.push(A)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class JA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gy=function(t){const e=my(t);return Ll.encodeByteArray(e,!0)},Wa=function(t){return gy(t).replace(/\./g,"")},Ka=function(t){try{return Ll.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZA(t){return _y(void 0,t)}function _y(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!eC(n)||(t[n]=_y(t[n],e[n]));return t}function eC(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=()=>tC().__FIREBASE_DEFAULTS__,sC=()=>{if(typeof process>"u"||typeof kp>"u")return;const t=kp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},iC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ka(t[1]);return e&&JSON.parse(e)},Vl=()=>{try{return nC()||sC()||iC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},rC=t=>{var e,n;return(n=(e=Vl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},oC=t=>{const e=rC(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},yy=()=>{var t;return(t=Vl())===null||t===void 0?void 0:t.config},aC=t=>{var e;return(e=Vl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Wa(JSON.stringify(n)),Wa(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(En())}function cC(){var t;const e=(t=Vl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function uC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function hC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function vy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dC(){return py.NODE_ADMIN===!0}function fC(){return!cC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ey(){try{return typeof indexedDB=="object"}catch{return!1}}function pC(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC="FirebaseError";class os extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=mC,Object.setPrototypeOf(this,os.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ar.prototype.create)}}class ar{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?gC(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new os(i,a,s)}}function gC(t,e){return t.replace(_C,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const _C=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(t){return JSON.parse(t)}function wt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=wo(Ka(r[0])||""),n=wo(Ka(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},yC=function(t){const e=wy(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},vC=function(t){const e=wy(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ki(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Pp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ga(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function wu(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(xp(r)&&xp(o)){if(!wu(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function xp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)s[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)s[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const m=s[f-3]^s[f-8]^s[f-14]^s[f-16];s[f]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],u,h;for(let f=0;f<80;f++){f<40?f<20?(u=a^r&(o^a),h=1518500249):(u=r^o^a,h=1859775393):f<60?(u=r&o|a&(r|o),h=2400959708):(u=r^o^a,h=3395469782);const m=(i<<5|i>>>27)+u+c+h+s[f]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function wC(t,e){const n=new TC(t,e);return n.subscribe.bind(n)}class TC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");bC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Uc),i.error===void 0&&(i.error=Uc),i.complete===void 0&&(i.complete=Uc);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Uc(){}function IC(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,Q(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Fl=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(t){return t&&t._delegate?t._delegate:t}class Tn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Eo;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(RC(e))try{this.getOrInitializeService({instanceIdentifier:Ys})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ys){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ys){return this.instances.has(e)}getOptions(e=Ys){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:SC(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ys){return this.component?this.component.multipleInstances?e:Ys:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function SC(t){return t===Ys?void 0:t}function RC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new CC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const PC={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},xC=ve.INFO,NC={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},DC=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=NC[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Do{constructor(e){this.name=e,this._logLevel=xC,this._logHandler=DC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?PC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const OC=(t,e)=>e.some(n=>t instanceof n);let Np,Dp;function MC(){return Np||(Np=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function LC(){return Dp||(Dp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ty=new WeakMap,Tu=new WeakMap,by=new WeakMap,Bc=new WeakMap,xh=new WeakMap;function VC(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Is(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ty.set(n,t)}).catch(()=>{}),xh.set(e,t),e}function FC(t){if(Tu.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Tu.set(t,e)}let bu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Tu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||by.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Is(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function UC(t){bu=t(bu)}function BC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call($c(this),e,...n);return by.set(s,e.sort?e.sort():[e]),Is(s)}:LC().includes(t)?function(...e){return t.apply($c(this),e),Is(Ty.get(this))}:function(...e){return Is(t.apply($c(this),e))}}function $C(t){return typeof t=="function"?BC(t):(t instanceof IDBTransaction&&FC(t),OC(t,MC())?new Proxy(t,bu):t)}function Is(t){if(t instanceof IDBRequest)return VC(t);if(Bc.has(t))return Bc.get(t);const e=$C(t);return e!==t&&(Bc.set(t,e),xh.set(e,t)),e}const $c=t=>xh.get(t);function zC(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Is(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Is(o.result),c.oldVersion,c.newVersion,Is(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const jC=["get","getKey","getAll","getAllKeys","count"],qC=["put","add","delete","clear"],zc=new Map;function Op(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zc.get(e))return zc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=qC.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||jC.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return zc.set(e,r),r}UC(t=>({...t,get:(e,n,s)=>Op(e,n)||t.get(e,n,s),has:(e,n)=>!!Op(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(WC(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function WC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Iu="@firebase/app",Mp="0.10.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=new Do("@firebase/app"),KC="@firebase/app-compat",GC="@firebase/analytics-compat",QC="@firebase/analytics",YC="@firebase/app-check-compat",XC="@firebase/app-check",JC="@firebase/auth",ZC="@firebase/auth-compat",eS="@firebase/database",tS="@firebase/data-connect",nS="@firebase/database-compat",sS="@firebase/functions",iS="@firebase/functions-compat",rS="@firebase/installations",oS="@firebase/installations-compat",aS="@firebase/messaging",lS="@firebase/messaging-compat",cS="@firebase/performance",uS="@firebase/performance-compat",hS="@firebase/remote-config",dS="@firebase/remote-config-compat",fS="@firebase/storage",pS="@firebase/storage-compat",mS="@firebase/firestore",gS="@firebase/vertexai",_S="@firebase/firestore-compat",yS="firebase",vS="11.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au="[DEFAULT]",ES={[Iu]:"fire-core",[KC]:"fire-core-compat",[QC]:"fire-analytics",[GC]:"fire-analytics-compat",[XC]:"fire-app-check",[YC]:"fire-app-check-compat",[JC]:"fire-auth",[ZC]:"fire-auth-compat",[eS]:"fire-rtdb",[tS]:"fire-data-connect",[nS]:"fire-rtdb-compat",[sS]:"fire-fn",[iS]:"fire-fn-compat",[rS]:"fire-iid",[oS]:"fire-iid-compat",[aS]:"fire-fcm",[lS]:"fire-fcm-compat",[cS]:"fire-perf",[uS]:"fire-perf-compat",[hS]:"fire-rc",[dS]:"fire-rc-compat",[fS]:"fire-gcs",[pS]:"fire-gcs-compat",[mS]:"fire-fst",[_S]:"fire-fst-compat",[gS]:"fire-vertex","fire-js":"fire-js",[yS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa=new Map,wS=new Map,Cu=new Map;function Lp(t,e){try{t.container.addComponent(e)}catch(n){ts.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Mn(t){const e=t.name;if(Cu.has(e))return ts.debug(`There were multiple attempts to register component ${e}.`),!1;Cu.set(e,t);for(const n of Qa.values())Lp(n,t);for(const n of wS.values())Lp(n,t);return!0}function TS(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ur(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},As=new ar("app","Firebase",bS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw As.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=vS;function Iy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Au,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw As.create("bad-app-name",{appName:String(i)});if(n||(n=yy()),!n)throw As.create("no-options");const r=Qa.get(i);if(r){if(wu(n,r.options)&&wu(s,r.config))return r;throw As.create("duplicate-app",{appName:i})}const o=new kC(i);for(const c of Cu.values())o.addComponent(c);const a=new IS(n,s,o);return Qa.set(i,a),a}function Ay(t=Au){const e=Qa.get(t);if(!e&&t===Au&&yy())return Iy();if(!e)throw As.create("no-app",{appName:t});return e}function Yt(t,e,n){var s;let i=(s=ES[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ts.warn(a.join(" "));return}Mn(new Tn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS="firebase-heartbeat-database",CS=1,To="firebase-heartbeat-store";let jc=null;function Cy(){return jc||(jc=zC(AS,CS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(To)}catch(n){console.warn(n)}}}}).catch(t=>{throw As.create("idb-open",{originalErrorMessage:t.message})})),jc}async function SS(t){try{const n=(await Cy()).transaction(To),s=await n.objectStore(To).get(Sy(t));return await n.done,s}catch(e){if(e instanceof os)ts.warn(e.message);else{const n=As.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ts.warn(n.message)}}}async function Vp(t,e){try{const s=(await Cy()).transaction(To,"readwrite");await s.objectStore(To).put(e,Sy(t)),await s.done}catch(n){if(n instanceof os)ts.warn(n.message);else{const s=As.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ts.warn(s.message)}}}function Sy(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS=1024,kS=30*24*60*60*1e3;class PS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new NS(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Fp();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=kS}),this._storage.overwrite(this._heartbeatsCache))}catch(s){ts.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Fp(),{heartbeatsToSend:s,unsentEntries:i}=xS(this._heartbeatsCache.heartbeats),r=Wa(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return ts.warn(n),""}}}function Fp(){return new Date().toISOString().substring(0,10)}function xS(t,e=RS){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Up(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Up(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class NS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ey()?pC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await SS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Up(t){return Wa(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DS(t){Mn(new Tn("platform-logger",e=>new HC(e),"PRIVATE")),Mn(new Tn("heartbeat",e=>new PS(e),"PRIVATE")),Yt(Iu,Mp,t),Yt(Iu,Mp,"esm2017"),Yt("fire-js","")}DS("");var Bp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cs,Ry;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,y){function v(){}v.prototype=y.prototype,C.D=y.prototype,C.prototype=new v,C.prototype.constructor=C,C.C=function(I,S,b){for(var E=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)E[Fe-2]=arguments[Fe];return y.prototype[S].apply(I,E)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(C,y,v){v||(v=0);var I=Array(16);if(typeof y=="string")for(var S=0;16>S;++S)I[S]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(S=0;16>S;++S)I[S]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=C.g[0],v=C.g[1],S=C.g[2];var b=C.g[3],E=y+(b^v&(S^b))+I[0]+3614090360&4294967295;y=v+(E<<7&4294967295|E>>>25),E=b+(S^y&(v^S))+I[1]+3905402710&4294967295,b=y+(E<<12&4294967295|E>>>20),E=S+(v^b&(y^v))+I[2]+606105819&4294967295,S=b+(E<<17&4294967295|E>>>15),E=v+(y^S&(b^y))+I[3]+3250441966&4294967295,v=S+(E<<22&4294967295|E>>>10),E=y+(b^v&(S^b))+I[4]+4118548399&4294967295,y=v+(E<<7&4294967295|E>>>25),E=b+(S^y&(v^S))+I[5]+1200080426&4294967295,b=y+(E<<12&4294967295|E>>>20),E=S+(v^b&(y^v))+I[6]+2821735955&4294967295,S=b+(E<<17&4294967295|E>>>15),E=v+(y^S&(b^y))+I[7]+4249261313&4294967295,v=S+(E<<22&4294967295|E>>>10),E=y+(b^v&(S^b))+I[8]+1770035416&4294967295,y=v+(E<<7&4294967295|E>>>25),E=b+(S^y&(v^S))+I[9]+2336552879&4294967295,b=y+(E<<12&4294967295|E>>>20),E=S+(v^b&(y^v))+I[10]+4294925233&4294967295,S=b+(E<<17&4294967295|E>>>15),E=v+(y^S&(b^y))+I[11]+2304563134&4294967295,v=S+(E<<22&4294967295|E>>>10),E=y+(b^v&(S^b))+I[12]+1804603682&4294967295,y=v+(E<<7&4294967295|E>>>25),E=b+(S^y&(v^S))+I[13]+4254626195&4294967295,b=y+(E<<12&4294967295|E>>>20),E=S+(v^b&(y^v))+I[14]+2792965006&4294967295,S=b+(E<<17&4294967295|E>>>15),E=v+(y^S&(b^y))+I[15]+1236535329&4294967295,v=S+(E<<22&4294967295|E>>>10),E=y+(S^b&(v^S))+I[1]+4129170786&4294967295,y=v+(E<<5&4294967295|E>>>27),E=b+(v^S&(y^v))+I[6]+3225465664&4294967295,b=y+(E<<9&4294967295|E>>>23),E=S+(y^v&(b^y))+I[11]+643717713&4294967295,S=b+(E<<14&4294967295|E>>>18),E=v+(b^y&(S^b))+I[0]+3921069994&4294967295,v=S+(E<<20&4294967295|E>>>12),E=y+(S^b&(v^S))+I[5]+3593408605&4294967295,y=v+(E<<5&4294967295|E>>>27),E=b+(v^S&(y^v))+I[10]+38016083&4294967295,b=y+(E<<9&4294967295|E>>>23),E=S+(y^v&(b^y))+I[15]+3634488961&4294967295,S=b+(E<<14&4294967295|E>>>18),E=v+(b^y&(S^b))+I[4]+3889429448&4294967295,v=S+(E<<20&4294967295|E>>>12),E=y+(S^b&(v^S))+I[9]+568446438&4294967295,y=v+(E<<5&4294967295|E>>>27),E=b+(v^S&(y^v))+I[14]+3275163606&4294967295,b=y+(E<<9&4294967295|E>>>23),E=S+(y^v&(b^y))+I[3]+4107603335&4294967295,S=b+(E<<14&4294967295|E>>>18),E=v+(b^y&(S^b))+I[8]+1163531501&4294967295,v=S+(E<<20&4294967295|E>>>12),E=y+(S^b&(v^S))+I[13]+2850285829&4294967295,y=v+(E<<5&4294967295|E>>>27),E=b+(v^S&(y^v))+I[2]+4243563512&4294967295,b=y+(E<<9&4294967295|E>>>23),E=S+(y^v&(b^y))+I[7]+1735328473&4294967295,S=b+(E<<14&4294967295|E>>>18),E=v+(b^y&(S^b))+I[12]+2368359562&4294967295,v=S+(E<<20&4294967295|E>>>12),E=y+(v^S^b)+I[5]+4294588738&4294967295,y=v+(E<<4&4294967295|E>>>28),E=b+(y^v^S)+I[8]+2272392833&4294967295,b=y+(E<<11&4294967295|E>>>21),E=S+(b^y^v)+I[11]+1839030562&4294967295,S=b+(E<<16&4294967295|E>>>16),E=v+(S^b^y)+I[14]+4259657740&4294967295,v=S+(E<<23&4294967295|E>>>9),E=y+(v^S^b)+I[1]+2763975236&4294967295,y=v+(E<<4&4294967295|E>>>28),E=b+(y^v^S)+I[4]+1272893353&4294967295,b=y+(E<<11&4294967295|E>>>21),E=S+(b^y^v)+I[7]+4139469664&4294967295,S=b+(E<<16&4294967295|E>>>16),E=v+(S^b^y)+I[10]+3200236656&4294967295,v=S+(E<<23&4294967295|E>>>9),E=y+(v^S^b)+I[13]+681279174&4294967295,y=v+(E<<4&4294967295|E>>>28),E=b+(y^v^S)+I[0]+3936430074&4294967295,b=y+(E<<11&4294967295|E>>>21),E=S+(b^y^v)+I[3]+3572445317&4294967295,S=b+(E<<16&4294967295|E>>>16),E=v+(S^b^y)+I[6]+76029189&4294967295,v=S+(E<<23&4294967295|E>>>9),E=y+(v^S^b)+I[9]+3654602809&4294967295,y=v+(E<<4&4294967295|E>>>28),E=b+(y^v^S)+I[12]+3873151461&4294967295,b=y+(E<<11&4294967295|E>>>21),E=S+(b^y^v)+I[15]+530742520&4294967295,S=b+(E<<16&4294967295|E>>>16),E=v+(S^b^y)+I[2]+3299628645&4294967295,v=S+(E<<23&4294967295|E>>>9),E=y+(S^(v|~b))+I[0]+4096336452&4294967295,y=v+(E<<6&4294967295|E>>>26),E=b+(v^(y|~S))+I[7]+1126891415&4294967295,b=y+(E<<10&4294967295|E>>>22),E=S+(y^(b|~v))+I[14]+2878612391&4294967295,S=b+(E<<15&4294967295|E>>>17),E=v+(b^(S|~y))+I[5]+4237533241&4294967295,v=S+(E<<21&4294967295|E>>>11),E=y+(S^(v|~b))+I[12]+1700485571&4294967295,y=v+(E<<6&4294967295|E>>>26),E=b+(v^(y|~S))+I[3]+2399980690&4294967295,b=y+(E<<10&4294967295|E>>>22),E=S+(y^(b|~v))+I[10]+4293915773&4294967295,S=b+(E<<15&4294967295|E>>>17),E=v+(b^(S|~y))+I[1]+2240044497&4294967295,v=S+(E<<21&4294967295|E>>>11),E=y+(S^(v|~b))+I[8]+1873313359&4294967295,y=v+(E<<6&4294967295|E>>>26),E=b+(v^(y|~S))+I[15]+4264355552&4294967295,b=y+(E<<10&4294967295|E>>>22),E=S+(y^(b|~v))+I[6]+2734768916&4294967295,S=b+(E<<15&4294967295|E>>>17),E=v+(b^(S|~y))+I[13]+1309151649&4294967295,v=S+(E<<21&4294967295|E>>>11),E=y+(S^(v|~b))+I[4]+4149444226&4294967295,y=v+(E<<6&4294967295|E>>>26),E=b+(v^(y|~S))+I[11]+3174756917&4294967295,b=y+(E<<10&4294967295|E>>>22),E=S+(y^(b|~v))+I[2]+718787259&4294967295,S=b+(E<<15&4294967295|E>>>17),E=v+(b^(S|~y))+I[9]+3951481745&4294967295,C.g[0]=C.g[0]+y&4294967295,C.g[1]=C.g[1]+(S+(E<<21&4294967295|E>>>11))&4294967295,C.g[2]=C.g[2]+S&4294967295,C.g[3]=C.g[3]+b&4294967295}s.prototype.u=function(C,y){y===void 0&&(y=C.length);for(var v=y-this.blockSize,I=this.B,S=this.h,b=0;b<y;){if(S==0)for(;b<=v;)i(this,C,b),b+=this.blockSize;if(typeof C=="string"){for(;b<y;)if(I[S++]=C.charCodeAt(b++),S==this.blockSize){i(this,I),S=0;break}}else for(;b<y;)if(I[S++]=C[b++],S==this.blockSize){i(this,I),S=0;break}}this.h=S,this.o+=y},s.prototype.v=function(){var C=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);C[0]=128;for(var y=1;y<C.length-8;++y)C[y]=0;var v=8*this.o;for(y=C.length-8;y<C.length;++y)C[y]=v&255,v/=256;for(this.u(C),C=Array(16),y=v=0;4>y;++y)for(var I=0;32>I;I+=8)C[v++]=this.g[y]>>>I&255;return C};function r(C,y){var v=a;return Object.prototype.hasOwnProperty.call(v,C)?v[C]:v[C]=y(C)}function o(C,y){this.h=y;for(var v=[],I=!0,S=C.length-1;0<=S;S--){var b=C[S]|0;I&&b==y||(v[S]=b,I=!1)}this.g=v}var a={};function c(C){return-128<=C&&128>C?r(C,function(y){return new o([y|0],0>y?-1:0)}):new o([C|0],0>C?-1:0)}function u(C){if(isNaN(C)||!isFinite(C))return f;if(0>C)return x(u(-C));for(var y=[],v=1,I=0;C>=v;I++)y[I]=C/v|0,v*=4294967296;return new o(y,0)}function h(C,y){if(C.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(C.charAt(0)=="-")return x(h(C.substring(1),y));if(0<=C.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(y,8)),I=f,S=0;S<C.length;S+=8){var b=Math.min(8,C.length-S),E=parseInt(C.substring(S,S+b),y);8>b?(b=u(Math.pow(y,b)),I=I.j(b).add(u(E))):(I=I.j(v),I=I.add(u(E)))}return I}var f=c(0),m=c(1),g=c(16777216);t=o.prototype,t.m=function(){if(R(this))return-x(this).m();for(var C=0,y=1,v=0;v<this.g.length;v++){var I=this.i(v);C+=(0<=I?I:4294967296+I)*y,y*=4294967296}return C},t.toString=function(C){if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(A(this))return"0";if(R(this))return"-"+x(this).toString(C);for(var y=u(Math.pow(C,6)),v=this,I="";;){var S=M(v,y).g;v=F(v,S.j(y));var b=((0<v.g.length?v.g[0]:v.h)>>>0).toString(C);if(v=S,A(v))return b+I;for(;6>b.length;)b="0"+b;I=b+I}},t.i=function(C){return 0>C?0:C<this.g.length?this.g[C]:this.h};function A(C){if(C.h!=0)return!1;for(var y=0;y<C.g.length;y++)if(C.g[y]!=0)return!1;return!0}function R(C){return C.h==-1}t.l=function(C){return C=F(this,C),R(C)?-1:A(C)?0:1};function x(C){for(var y=C.g.length,v=[],I=0;I<y;I++)v[I]=~C.g[I];return new o(v,~C.h).add(m)}t.abs=function(){return R(this)?x(this):this},t.add=function(C){for(var y=Math.max(this.g.length,C.g.length),v=[],I=0,S=0;S<=y;S++){var b=I+(this.i(S)&65535)+(C.i(S)&65535),E=(b>>>16)+(this.i(S)>>>16)+(C.i(S)>>>16);I=E>>>16,b&=65535,E&=65535,v[S]=E<<16|b}return new o(v,v[v.length-1]&-2147483648?-1:0)};function F(C,y){return C.add(x(y))}t.j=function(C){if(A(this)||A(C))return f;if(R(this))return R(C)?x(this).j(x(C)):x(x(this).j(C));if(R(C))return x(this.j(x(C)));if(0>this.l(g)&&0>C.l(g))return u(this.m()*C.m());for(var y=this.g.length+C.g.length,v=[],I=0;I<2*y;I++)v[I]=0;for(I=0;I<this.g.length;I++)for(var S=0;S<C.g.length;S++){var b=this.i(I)>>>16,E=this.i(I)&65535,Fe=C.i(S)>>>16,lt=C.i(S)&65535;v[2*I+2*S]+=E*lt,U(v,2*I+2*S),v[2*I+2*S+1]+=b*lt,U(v,2*I+2*S+1),v[2*I+2*S+1]+=E*Fe,U(v,2*I+2*S+1),v[2*I+2*S+2]+=b*Fe,U(v,2*I+2*S+2)}for(I=0;I<y;I++)v[I]=v[2*I+1]<<16|v[2*I];for(I=y;I<2*y;I++)v[I]=0;return new o(v,0)};function U(C,y){for(;(C[y]&65535)!=C[y];)C[y+1]+=C[y]>>>16,C[y]&=65535,y++}function O(C,y){this.g=C,this.h=y}function M(C,y){if(A(y))throw Error("division by zero");if(A(C))return new O(f,f);if(R(C))return y=M(x(C),y),new O(x(y.g),x(y.h));if(R(y))return y=M(C,x(y)),new O(x(y.g),y.h);if(30<C.g.length){if(R(C)||R(y))throw Error("slowDivide_ only works with positive integers.");for(var v=m,I=y;0>=I.l(C);)v=ee(v),I=ee(I);var S=te(v,1),b=te(I,1);for(I=te(I,2),v=te(v,2);!A(I);){var E=b.add(I);0>=E.l(C)&&(S=S.add(v),b=E),I=te(I,1),v=te(v,1)}return y=F(C,S.j(y)),new O(S,y)}for(S=f;0<=C.l(y);){for(v=Math.max(1,Math.floor(C.m()/y.m())),I=Math.ceil(Math.log(v)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),b=u(v),E=b.j(y);R(E)||0<E.l(C);)v-=I,b=u(v),E=b.j(y);A(b)&&(b=m),S=S.add(b),C=F(C,E)}return new O(S,C)}t.A=function(C){return M(this,C).h},t.and=function(C){for(var y=Math.max(this.g.length,C.g.length),v=[],I=0;I<y;I++)v[I]=this.i(I)&C.i(I);return new o(v,this.h&C.h)},t.or=function(C){for(var y=Math.max(this.g.length,C.g.length),v=[],I=0;I<y;I++)v[I]=this.i(I)|C.i(I);return new o(v,this.h|C.h)},t.xor=function(C){for(var y=Math.max(this.g.length,C.g.length),v=[],I=0;I<y;I++)v[I]=this.i(I)^C.i(I);return new o(v,this.h^C.h)};function ee(C){for(var y=C.g.length+1,v=[],I=0;I<y;I++)v[I]=C.i(I)<<1|C.i(I-1)>>>31;return new o(v,C.h)}function te(C,y){var v=y>>5;y%=32;for(var I=C.g.length-v,S=[],b=0;b<I;b++)S[b]=0<y?C.i(b+v)>>>y|C.i(b+v+1)<<32-y:C.i(b+v);return new o(S,C.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Ry=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Cs=o}).apply(typeof Bp<"u"?Bp:typeof self<"u"?self:typeof window<"u"?window:{});var da=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ky,Br,Py,Sa,Su,xy,Ny,Dy;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,p){return l==Array.prototype||l==Object.prototype||(l[d]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof da=="object"&&da];for(var d=0;d<l.length;++d){var p=l[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var s=n(this);function i(l,d){if(d)e:{var p=s;l=l.split(".");for(var _=0;_<l.length-1;_++){var P=l[_];if(!(P in p))break e;p=p[P]}l=l[l.length-1],_=p[l],d=d(_),d!=_&&d!=null&&e(p,l,{configurable:!0,writable:!0,value:d})}}function r(l,d){l instanceof String&&(l+="");var p=0,_=!1,P={next:function(){if(!_&&p<l.length){var N=p++;return{value:d(N,l[N]),done:!1}}return _=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(l){return l||function(){return r(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function u(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,p){return l.call.apply(l.bind,arguments)}function f(l,d,p){if(!l)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,_),l.apply(d,P)}}return function(){return l.apply(d,arguments)}}function m(l,d,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,m.apply(null,arguments)}function g(l,d){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),l.apply(this,_)}}function A(l,d){function p(){}p.prototype=d.prototype,l.aa=d.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(_,P,N){for(var K=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)K[Be-2]=arguments[Be];return d.prototype[P].apply(_,K)}}function R(l){const d=l.length;if(0<d){const p=Array(d);for(let _=0;_<d;_++)p[_]=l[_];return p}return[]}function x(l,d){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(c(_)){const P=l.length||0,N=_.length||0;l.length=P+N;for(let K=0;K<N;K++)l[P+K]=_[K]}else l.push(_)}}class F{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function U(l){return/^[\s\xa0]*$/.test(l)}function O(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function M(l){return M[" "](l),l}M[" "]=function(){};var ee=O().indexOf("Gecko")!=-1&&!(O().toLowerCase().indexOf("webkit")!=-1&&O().indexOf("Edge")==-1)&&!(O().indexOf("Trident")!=-1||O().indexOf("MSIE")!=-1)&&O().indexOf("Edge")==-1;function te(l,d,p){for(const _ in l)d.call(p,l[_],_,l)}function C(l,d){for(const p in l)d.call(void 0,l[p],p,l)}function y(l){const d={};for(const p in l)d[p]=l[p];return d}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(l,d){let p,_;for(let P=1;P<arguments.length;P++){_=arguments[P];for(p in _)l[p]=_[p];for(let N=0;N<v.length;N++)p=v[N],Object.prototype.hasOwnProperty.call(_,p)&&(l[p]=_[p])}}function S(l){var d=1;l=l.split(":");const p=[];for(;0<d&&l.length;)p.push(l.shift()),d--;return l.length&&p.push(l.join(":")),p}function b(l){a.setTimeout(()=>{throw l},0)}function E(){var l=Wt;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class Fe{constructor(){this.h=this.g=null}add(d,p){const _=lt.get();_.set(d,p),this.h?this.h.next=_:this.g=_,this.h=_}}var lt=new F(()=>new Qe,l=>l.reset());class Qe{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Ie,Ee=!1,Wt=new Fe,cn=()=>{const l=a.Promise.resolve(void 0);Ie=()=>{l.then(Zt)}};var Zt=()=>{for(var l;l=E();){try{l.h.call(l.g)}catch(p){b(p)}var d=lt;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}Ee=!1};function Ye(){this.s=this.s,this.C=this.C}Ye.prototype.s=!1,Ye.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ye.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Xe(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}Xe.prototype.h=function(){this.defaultPrevented=!0};var ls=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,d),a.removeEventListener("test",p,d)}catch{}return l}();function In(l,d){if(Xe.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,_=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(ee){e:{try{M(d.nodeName);var P=!0;break e}catch{}P=!1}P||(d=null)}}else p=="mouseover"?d=l.fromElement:p=="mouseout"&&(d=l.toElement);this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:$t[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&In.aa.h.call(this)}}A(In,Xe);var $t={2:"touch",3:"pen",4:"mouse"};In.prototype.h=function(){In.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var L="closure_listenable_"+(1e6*Math.random()|0),J=0;function Y(l,d,p,_,P){this.listener=l,this.proxy=null,this.src=d,this.type=p,this.capture=!!_,this.ha=P,this.key=++J,this.da=this.fa=!1}function ne(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Pe(l){this.src=l,this.g={},this.h=0}Pe.prototype.add=function(l,d,p,_,P){var N=l.toString();l=this.g[N],l||(l=this.g[N]=[],this.h++);var K=T(l,d,_,P);return-1<K?(d=l[K],p||(d.fa=!1)):(d=new Y(d,this.src,N,!!_,P),d.fa=p,l.push(d)),d};function w(l,d){var p=d.type;if(p in l.g){var _=l.g[p],P=Array.prototype.indexOf.call(_,d,void 0),N;(N=0<=P)&&Array.prototype.splice.call(_,P,1),N&&(ne(d),l.g[p].length==0&&(delete l.g[p],l.h--))}}function T(l,d,p,_){for(var P=0;P<l.length;++P){var N=l[P];if(!N.da&&N.listener==d&&N.capture==!!p&&N.ha==_)return P}return-1}var k="closure_lm_"+(1e6*Math.random()|0),V={};function z(l,d,p,_,P){if(Array.isArray(d)){for(var N=0;N<d.length;N++)z(l,d[N],p,_,P);return null}return p=ce(p),l&&l[L]?l.K(d,p,u(_)?!!_.capture:!1,P):B(l,d,p,!1,_,P)}function B(l,d,p,_,P,N){if(!d)throw Error("Invalid event type");var K=u(P)?!!P.capture:!!P,Be=X(l);if(Be||(l[k]=Be=new Pe(l)),p=Be.add(d,p,_,K,N),p.proxy)return p;if(_=G(),p.proxy=_,_.src=l,_.listener=p,l.addEventListener)ls||(P=K),P===void 0&&(P=!1),l.addEventListener(d.toString(),_,P);else if(l.attachEvent)l.attachEvent(q(d.toString()),_);else if(l.addListener&&l.removeListener)l.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function G(){function l(p){return d.call(l.src,l.listener,p)}const d=oe;return l}function W(l,d,p,_,P){if(Array.isArray(d))for(var N=0;N<d.length;N++)W(l,d[N],p,_,P);else _=u(_)?!!_.capture:!!_,p=ce(p),l&&l[L]?(l=l.i,d=String(d).toString(),d in l.g&&(N=l.g[d],p=T(N,p,_,P),-1<p&&(ne(N[p]),Array.prototype.splice.call(N,p,1),N.length==0&&(delete l.g[d],l.h--)))):l&&(l=X(l))&&(d=l.g[d.toString()],l=-1,d&&(l=T(d,p,_,P)),(p=-1<l?d[l]:null)&&H(p))}function H(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[L])w(d.i,l);else{var p=l.type,_=l.proxy;d.removeEventListener?d.removeEventListener(p,_,l.capture):d.detachEvent?d.detachEvent(q(p),_):d.addListener&&d.removeListener&&d.removeListener(_),(p=X(d))?(w(p,l),p.h==0&&(p.src=null,d[k]=null)):ne(l)}}}function q(l){return l in V?V[l]:V[l]="on"+l}function oe(l,d){if(l.da)l=!0;else{d=new In(d,this);var p=l.listener,_=l.ha||l.src;l.fa&&H(l),l=p.call(_,d)}return l}function X(l){return l=l[k],l instanceof Pe?l:null}var se="__closure_events_fn_"+(1e9*Math.random()>>>0);function ce(l){return typeof l=="function"?l:(l[se]||(l[se]=function(d){return l.handleEvent(d)}),l[se])}function ae(){Ye.call(this),this.i=new Pe(this),this.M=this,this.F=null}A(ae,Ye),ae.prototype[L]=!0,ae.prototype.removeEventListener=function(l,d,p,_){W(this,l,d,p,_)};function ge(l,d){var p,_=l.F;if(_)for(p=[];_;_=_.F)p.push(_);if(l=l.M,_=d.type||d,typeof d=="string")d=new Xe(d,l);else if(d instanceof Xe)d.target=d.target||l;else{var P=d;d=new Xe(_,l),I(d,P)}if(P=!0,p)for(var N=p.length-1;0<=N;N--){var K=d.g=p[N];P=Ae(K,_,!0,d)&&P}if(K=d.g=l,P=Ae(K,_,!0,d)&&P,P=Ae(K,_,!1,d)&&P,p)for(N=0;N<p.length;N++)K=d.g=p[N],P=Ae(K,_,!1,d)&&P}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var p=l.g[d],_=0;_<p.length;_++)ne(p[_]);delete l.g[d],l.h--}}this.F=null},ae.prototype.K=function(l,d,p,_){return this.i.add(String(l),d,!1,p,_)},ae.prototype.L=function(l,d,p,_){return this.i.add(String(l),d,!0,p,_)};function Ae(l,d,p,_){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var P=!0,N=0;N<d.length;++N){var K=d[N];if(K&&!K.da&&K.capture==p){var Be=K.listener,vt=K.ha||K.src;K.fa&&w(l.i,K),P=Be.call(vt,_)!==!1&&P}}return P&&!_.defaultPrevented}function At(l,d,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function _t(l){l.g=At(()=>{l.g=null,l.i&&(l.i=!1,_t(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class en extends Ye{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:_t(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ct(l){Ye.call(this),this.h=l,this.g={}}A(Ct,Ye);var cs=[];function gr(l){te(l.g,function(d,p){this.g.hasOwnProperty(p)&&H(d)},l),l.g={}}Ct.prototype.N=function(){Ct.aa.N.call(this),gr(this)},Ct.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var yt=a.JSON.stringify,tn=a.JSON.parse,Ho=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function lc(){}lc.prototype.h=null;function Dd(l){return l.h||(l.h=l.i())}function Od(){}var _r={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function cc(){Xe.call(this,"d")}A(cc,Xe);function uc(){Xe.call(this,"c")}A(uc,Xe);var $s={},Md=null;function Wo(){return Md=Md||new ae}$s.La="serverreachability";function Ld(l){Xe.call(this,$s.La,l)}A(Ld,Xe);function yr(l){const d=Wo();ge(d,new Ld(d))}$s.STAT_EVENT="statevent";function Vd(l,d){Xe.call(this,$s.STAT_EVENT,l),this.stat=d}A(Vd,Xe);function Vt(l){const d=Wo();ge(d,new Vd(d,l))}$s.Ma="timingevent";function Fd(l,d){Xe.call(this,$s.Ma,l),this.size=d}A(Fd,Xe);function vr(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function Er(){this.g=!0}Er.prototype.xa=function(){this.g=!1};function Lw(l,d,p,_,P,N){l.info(function(){if(l.g)if(N)for(var K="",Be=N.split("&"),vt=0;vt<Be.length;vt++){var xe=Be[vt].split("=");if(1<xe.length){var St=xe[0];xe=xe[1];var Rt=St.split("_");K=2<=Rt.length&&Rt[1]=="type"?K+(St+"="+xe+"&"):K+(St+"=redacted&")}}else K=null;else K=N;return"XMLHTTP REQ ("+_+") [attempt "+P+"]: "+d+`
`+p+`
`+K})}function Vw(l,d,p,_,P,N,K){l.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+P+"]: "+d+`
`+p+`
`+N+" "+K})}function vi(l,d,p,_){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+Uw(l,p)+(_?" "+_:"")})}function Fw(l,d){l.info(function(){return"TIMEOUT: "+d})}Er.prototype.info=function(){};function Uw(l,d){if(!l.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var _=p[l];if(!(2>_.length)){var P=_[1];if(Array.isArray(P)&&!(1>P.length)){var N=P[0];if(N!="noop"&&N!="stop"&&N!="close")for(var K=1;K<P.length;K++)P[K]=""}}}}return yt(p)}catch{return d}}var Ko={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ud={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},hc;function Go(){}A(Go,lc),Go.prototype.g=function(){return new XMLHttpRequest},Go.prototype.i=function(){return{}},hc=new Go;function us(l,d,p,_){this.j=l,this.i=d,this.l=p,this.R=_||1,this.U=new Ct(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Bd}function Bd(){this.i=null,this.g="",this.h=!1}var $d={},dc={};function fc(l,d,p){l.L=1,l.v=Jo(Bn(d)),l.m=p,l.P=!0,zd(l,null)}function zd(l,d){l.F=Date.now(),Qo(l),l.A=Bn(l.v);var p=l.A,_=l.R;Array.isArray(_)||(_=[String(_)]),nf(p.i,"t",_),l.C=0,p=l.j.J,l.h=new Bd,l.g=wf(l.j,p?d:null,!l.m),0<l.O&&(l.M=new en(m(l.Y,l,l.g),l.O)),d=l.U,p=l.g,_=l.ca;var P="readystatechange";Array.isArray(P)||(P&&(cs[0]=P.toString()),P=cs);for(var N=0;N<P.length;N++){var K=z(p,P[N],_||d.handleEvent,!1,d.h||d);if(!K)break;d.g[K.key]=K}d=l.H?y(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),yr(),Lw(l.i,l.u,l.A,l.l,l.R,l.m)}us.prototype.ca=function(l){l=l.target;const d=this.M;d&&$n(l)==3?d.j():this.Y(l)},us.prototype.Y=function(l){try{if(l==this.g)e:{const Rt=$n(this.g);var d=this.g.Ba();const Ti=this.g.Z();if(!(3>Rt)&&(Rt!=3||this.g&&(this.h.h||this.g.oa()||uf(this.g)))){this.J||Rt!=4||d==7||(d==8||0>=Ti?yr(3):yr(2)),pc(this);var p=this.g.Z();this.X=p;t:if(jd(this)){var _=uf(this.g);l="";var P=_.length,N=$n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){zs(this),wr(this);var K="";break t}this.h.i=new a.TextDecoder}for(d=0;d<P;d++)this.h.h=!0,l+=this.h.i.decode(_[d],{stream:!(N&&d==P-1)});_.length=0,this.h.g+=l,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=p==200,Vw(this.i,this.u,this.A,this.l,this.R,Rt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Be,vt=this.g;if((Be=vt.g?vt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(Be)){var xe=Be;break t}}xe=null}if(p=xe)vi(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,mc(this,p);else{this.o=!1,this.s=3,Vt(12),zs(this),wr(this);break e}}if(this.P){p=!0;let un;for(;!this.J&&this.C<K.length;)if(un=Bw(this,K),un==dc){Rt==4&&(this.s=4,Vt(14),p=!1),vi(this.i,this.l,null,"[Incomplete Response]");break}else if(un==$d){this.s=4,Vt(15),vi(this.i,this.l,K,"[Invalid Chunk]"),p=!1;break}else vi(this.i,this.l,un,null),mc(this,un);if(jd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Rt!=4||K.length!=0||this.h.h||(this.s=1,Vt(16),p=!1),this.o=this.o&&p,!p)vi(this.i,this.l,K,"[Invalid Chunked Response]"),zs(this),wr(this);else if(0<K.length&&!this.W){this.W=!0;var St=this.j;St.g==this&&St.ba&&!St.M&&(St.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),wc(St),St.M=!0,Vt(11))}}else vi(this.i,this.l,K,null),mc(this,K);Rt==4&&zs(this),this.o&&!this.J&&(Rt==4?_f(this.j,this):(this.o=!1,Qo(this)))}else sT(this.g),p==400&&0<K.indexOf("Unknown SID")?(this.s=3,Vt(12)):(this.s=0,Vt(13)),zs(this),wr(this)}}}catch{}finally{}};function jd(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Bw(l,d){var p=l.C,_=d.indexOf(`
`,p);return _==-1?dc:(p=Number(d.substring(p,_)),isNaN(p)?$d:(_+=1,_+p>d.length?dc:(d=d.slice(_,_+p),l.C=_+p,d)))}us.prototype.cancel=function(){this.J=!0,zs(this)};function Qo(l){l.S=Date.now()+l.I,qd(l,l.I)}function qd(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=vr(m(l.ba,l),d)}function pc(l){l.B&&(a.clearTimeout(l.B),l.B=null)}us.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Fw(this.i,this.A),this.L!=2&&(yr(),Vt(17)),zs(this),this.s=2,wr(this)):qd(this,this.S-l)};function wr(l){l.j.G==0||l.J||_f(l.j,l)}function zs(l){pc(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,gr(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function mc(l,d){try{var p=l.j;if(p.G!=0&&(p.g==l||gc(p.h,l))){if(!l.K&&gc(p.h,l)&&p.G==3){try{var _=p.Da.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var P=_;if(P[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)ia(p),na(p);else break e;Ec(p),Vt(18)}}else p.za=P[1],0<p.za-p.T&&37500>P[2]&&p.F&&p.v==0&&!p.C&&(p.C=vr(m(p.Za,p),6e3));if(1>=Kd(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else qs(p,11)}else if((l.K||p.g==l)&&ia(p),!U(d))for(P=p.Da.g.parse(d),d=0;d<P.length;d++){let xe=P[d];if(p.T=xe[0],xe=xe[1],p.G==2)if(xe[0]=="c"){p.K=xe[1],p.ia=xe[2];const St=xe[3];St!=null&&(p.la=St,p.j.info("VER="+p.la));const Rt=xe[4];Rt!=null&&(p.Aa=Rt,p.j.info("SVER="+p.Aa));const Ti=xe[5];Ti!=null&&typeof Ti=="number"&&0<Ti&&(_=1.5*Ti,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const un=l.g;if(un){const oa=un.g?un.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(oa){var N=_.h;N.g||oa.indexOf("spdy")==-1&&oa.indexOf("quic")==-1&&oa.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(_c(N,N.h),N.h=null))}if(_.D){const Tc=un.g?un.g.getResponseHeader("X-HTTP-Session-Id"):null;Tc&&(_.ya=Tc,je(_.I,_.D,Tc))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var K=l;if(_.qa=Ef(_,_.J?_.ia:null,_.W),K.K){Gd(_.h,K);var Be=K,vt=_.L;vt&&(Be.I=vt),Be.B&&(pc(Be),Qo(Be)),_.g=K}else mf(_);0<p.i.length&&sa(p)}else xe[0]!="stop"&&xe[0]!="close"||qs(p,7);else p.G==3&&(xe[0]=="stop"||xe[0]=="close"?xe[0]=="stop"?qs(p,7):vc(p):xe[0]!="noop"&&p.l&&p.l.ta(xe),p.v=0)}}yr(4)}catch{}}var $w=class{constructor(l,d){this.g=l,this.map=d}};function Hd(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Wd(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Kd(l){return l.h?1:l.g?l.g.size:0}function gc(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function _c(l,d){l.g?l.g.add(d):l.h=d}function Gd(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}Hd.prototype.cancel=function(){if(this.i=Qd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Qd(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const p of l.g.values())d=d.concat(p.D);return d}return R(l.i)}function zw(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var d=[],p=l.length,_=0;_<p;_++)d.push(l[_]);return d}d=[],p=0;for(_ in l)d[p++]=l[_];return d}function jw(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var d=[];l=l.length;for(var p=0;p<l;p++)d.push(p);return d}d=[],p=0;for(const _ in l)d[p++]=_;return d}}}function Yd(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var p=jw(l),_=zw(l),P=_.length,N=0;N<P;N++)d.call(void 0,_[N],p&&p[N],l)}var Xd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qw(l,d){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var _=l[p].indexOf("="),P=null;if(0<=_){var N=l[p].substring(0,_);P=l[p].substring(_+1)}else N=l[p];d(N,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function js(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof js){this.h=l.h,Yo(this,l.j),this.o=l.o,this.g=l.g,Xo(this,l.s),this.l=l.l;var d=l.i,p=new Ir;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),Jd(this,p),this.m=l.m}else l&&(d=String(l).match(Xd))?(this.h=!1,Yo(this,d[1]||"",!0),this.o=Tr(d[2]||""),this.g=Tr(d[3]||"",!0),Xo(this,d[4]),this.l=Tr(d[5]||"",!0),Jd(this,d[6]||"",!0),this.m=Tr(d[7]||"")):(this.h=!1,this.i=new Ir(null,this.h))}js.prototype.toString=function(){var l=[],d=this.j;d&&l.push(br(d,Zd,!0),":");var p=this.g;return(p||d=="file")&&(l.push("//"),(d=this.o)&&l.push(br(d,Zd,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(br(p,p.charAt(0)=="/"?Kw:Ww,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",br(p,Qw)),l.join("")};function Bn(l){return new js(l)}function Yo(l,d,p){l.j=p?Tr(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function Xo(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function Jd(l,d,p){d instanceof Ir?(l.i=d,Yw(l.i,l.h)):(p||(d=br(d,Gw)),l.i=new Ir(d,l.h))}function je(l,d,p){l.i.set(d,p)}function Jo(l){return je(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Tr(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function br(l,d,p){return typeof l=="string"?(l=encodeURI(l).replace(d,Hw),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Hw(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Zd=/[#\/\?@]/g,Ww=/[#\?:]/g,Kw=/[#\?]/g,Gw=/[#\?@]/g,Qw=/#/g;function Ir(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function hs(l){l.g||(l.g=new Map,l.h=0,l.i&&qw(l.i,function(d,p){l.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=Ir.prototype,t.add=function(l,d){hs(this),this.i=null,l=Ei(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(d),this.h+=1,this};function ef(l,d){hs(l),d=Ei(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function tf(l,d){return hs(l),d=Ei(l,d),l.g.has(d)}t.forEach=function(l,d){hs(this),this.g.forEach(function(p,_){p.forEach(function(P){l.call(d,P,_,this)},this)},this)},t.na=function(){hs(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let _=0;_<d.length;_++){const P=l[_];for(let N=0;N<P.length;N++)p.push(d[_])}return p},t.V=function(l){hs(this);let d=[];if(typeof l=="string")tf(this,l)&&(d=d.concat(this.g.get(Ei(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)d=d.concat(l[p])}return d},t.set=function(l,d){return hs(this),this.i=null,l=Ei(this,l),tf(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function nf(l,d,p){ef(l,d),0<p.length&&(l.i=null,l.g.set(Ei(l,d),R(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var _=d[p];const N=encodeURIComponent(String(_)),K=this.V(_);for(_=0;_<K.length;_++){var P=N;K[_]!==""&&(P+="="+encodeURIComponent(String(K[_]))),l.push(P)}}return this.i=l.join("&")};function Ei(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function Yw(l,d){d&&!l.j&&(hs(l),l.i=null,l.g.forEach(function(p,_){var P=_.toLowerCase();_!=P&&(ef(this,_),nf(this,P,p))},l)),l.j=d}function Xw(l,d){const p=new Er;if(a.Image){const _=new Image;_.onload=g(ds,p,"TestLoadImage: loaded",!0,d,_),_.onerror=g(ds,p,"TestLoadImage: error",!1,d,_),_.onabort=g(ds,p,"TestLoadImage: abort",!1,d,_),_.ontimeout=g(ds,p,"TestLoadImage: timeout",!1,d,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=l}else d(!1)}function Jw(l,d){const p=new Er,_=new AbortController,P=setTimeout(()=>{_.abort(),ds(p,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:_.signal}).then(N=>{clearTimeout(P),N.ok?ds(p,"TestPingServer: ok",!0,d):ds(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(P),ds(p,"TestPingServer: error",!1,d)})}function ds(l,d,p,_,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),_(p)}catch{}}function Zw(){this.g=new Ho}function eT(l,d,p){const _=p||"";try{Yd(l,function(P,N){let K=P;u(P)&&(K=yt(P)),d.push(_+N+"="+encodeURIComponent(K))})}catch(P){throw d.push(_+"type="+encodeURIComponent("_badmap")),P}}function Zo(l){this.l=l.Ub||null,this.j=l.eb||!1}A(Zo,lc),Zo.prototype.g=function(){return new ea(this.l,this.j)},Zo.prototype.i=function(l){return function(){return l}}({});function ea(l,d){ae.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(ea,ae),t=ea.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,Cr(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ar(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Cr(this)),this.g&&(this.readyState=3,Cr(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;sf(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function sf(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?Ar(this):Cr(this),this.readyState==3&&sf(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Ar(this))},t.Qa=function(l){this.g&&(this.response=l,Ar(this))},t.ga=function(){this.g&&Ar(this)};function Ar(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Cr(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=d.next();return l.join(`\r
`)};function Cr(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(ea.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function rf(l){let d="";return te(l,function(p,_){d+=_,d+=":",d+=p,d+=`\r
`}),d}function yc(l,d,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=rf(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):je(l,d,p))}function Ze(l){ae.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Ze,ae);var tT=/^https?$/i,nT=["POST","PUT"];t=Ze.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():hc.g(),this.v=this.o?Dd(this.o):Dd(hc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(N){of(this,N);return}if(l=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var P in _)p.set(P,_[P]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const N of _.keys())p.set(N,_.get(N));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(N=>N.toLowerCase()=="content-type"),P=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(nT,d,void 0))||_||P||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,K]of p)this.g.setRequestHeader(N,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{cf(this),this.u=!0,this.g.send(l),this.u=!1}catch(N){of(this,N)}};function of(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,af(l),ta(l)}function af(l){l.A||(l.A=!0,ge(l,"complete"),ge(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ge(this,"complete"),ge(this,"abort"),ta(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ta(this,!0)),Ze.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?lf(this):this.bb())},t.bb=function(){lf(this)};function lf(l){if(l.h&&typeof o<"u"&&(!l.v[1]||$n(l)!=4||l.Z()!=2)){if(l.u&&$n(l)==4)At(l.Ea,0,l);else if(ge(l,"readystatechange"),$n(l)==4){l.h=!1;try{const K=l.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var _;if(_=K===0){var P=String(l.D).match(Xd)[1]||null;!P&&a.self&&a.self.location&&(P=a.self.location.protocol.slice(0,-1)),_=!tT.test(P?P.toLowerCase():"")}p=_}if(p)ge(l,"complete"),ge(l,"success");else{l.m=6;try{var N=2<$n(l)?l.g.statusText:""}catch{N=""}l.l=N+" ["+l.Z()+"]",af(l)}}finally{ta(l)}}}}function ta(l,d){if(l.g){cf(l);const p=l.g,_=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||ge(l,"ready");try{p.onreadystatechange=_}catch{}}}function cf(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function $n(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<$n(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),tn(d)}};function uf(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function sT(l){const d={};l=(l.g&&2<=$n(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<l.length;_++){if(U(l[_]))continue;var p=S(l[_]);const P=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const N=d[P]||[];d[P]=N,N.push(p)}C(d,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Sr(l,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||d}function hf(l){this.Aa=0,this.i=[],this.j=new Er,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Sr("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Sr("baseRetryDelayMs",5e3,l),this.cb=Sr("retryDelaySeedMs",1e4,l),this.Wa=Sr("forwardChannelMaxRetries",2,l),this.wa=Sr("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Hd(l&&l.concurrentRequestLimit),this.Da=new Zw,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=hf.prototype,t.la=8,t.G=1,t.connect=function(l,d,p,_){Vt(0),this.W=l,this.H=d||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=Ef(this,null,this.W),sa(this)};function vc(l){if(df(l),l.G==3){var d=l.U++,p=Bn(l.I);if(je(p,"SID",l.K),je(p,"RID",d),je(p,"TYPE","terminate"),Rr(l,p),d=new us(l,l.j,d),d.L=2,d.v=Jo(Bn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=d.v,p=!0),p||(d.g=wf(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Qo(d)}vf(l)}function na(l){l.g&&(wc(l),l.g.cancel(),l.g=null)}function df(l){na(l),l.u&&(a.clearTimeout(l.u),l.u=null),ia(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function sa(l){if(!Wd(l.h)&&!l.s){l.s=!0;var d=l.Ga;Ie||cn(),Ee||(Ie(),Ee=!0),Wt.add(d,l),l.B=0}}function iT(l,d){return Kd(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=vr(m(l.Ga,l,d),yf(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const P=new us(this,this.j,l);let N=this.o;if(this.S&&(N?(N=y(N),I(N,this.S)):N=this.S),this.m!==null||this.O||(P.H=N,N=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=pf(this,P,d),p=Bn(this.I),je(p,"RID",l),je(p,"CVER",22),this.D&&je(p,"X-HTTP-Session-Id",this.D),Rr(this,p),N&&(this.O?d="headers="+encodeURIComponent(String(rf(N)))+"&"+d:this.m&&yc(p,this.m,N)),_c(this.h,P),this.Ua&&je(p,"TYPE","init"),this.P?(je(p,"$req",d),je(p,"SID","null"),P.T=!0,fc(P,p,null)):fc(P,p,d),this.G=2}}else this.G==3&&(l?ff(this,l):this.i.length==0||Wd(this.h)||ff(this))};function ff(l,d){var p;d?p=d.l:p=l.U++;const _=Bn(l.I);je(_,"SID",l.K),je(_,"RID",p),je(_,"AID",l.T),Rr(l,_),l.m&&l.o&&yc(_,l.m,l.o),p=new us(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),d&&(l.i=d.D.concat(l.i)),d=pf(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),_c(l.h,p),fc(p,_,d)}function Rr(l,d){l.H&&te(l.H,function(p,_){je(d,_,p)}),l.l&&Yd({},function(p,_){je(d,_,p)})}function pf(l,d,p){p=Math.min(l.i.length,p);var _=l.l?m(l.l.Na,l.l,l):null;e:{var P=l.i;let N=-1;for(;;){const K=["count="+p];N==-1?0<p?(N=P[0].g,K.push("ofs="+N)):N=0:K.push("ofs="+N);let Be=!0;for(let vt=0;vt<p;vt++){let xe=P[vt].g;const St=P[vt].map;if(xe-=N,0>xe)N=Math.max(0,P[vt].g-100),Be=!1;else try{eT(St,K,"req"+xe+"_")}catch{_&&_(St)}}if(Be){_=K.join("&");break e}}}return l=l.i.splice(0,p),d.D=l,_}function mf(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;Ie||cn(),Ee||(Ie(),Ee=!0),Wt.add(d,l),l.v=0}}function Ec(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=vr(m(l.Fa,l),yf(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,gf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=vr(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Vt(10),na(this),gf(this))};function wc(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function gf(l){l.g=new us(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=Bn(l.qa);je(d,"RID","rpc"),je(d,"SID",l.K),je(d,"AID",l.T),je(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&je(d,"TO",l.ja),je(d,"TYPE","xmlhttp"),Rr(l,d),l.m&&l.o&&yc(d,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=Jo(Bn(d)),p.m=null,p.P=!0,zd(p,l)}t.Za=function(){this.C!=null&&(this.C=null,na(this),Ec(this),Vt(19))};function ia(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function _f(l,d){var p=null;if(l.g==d){ia(l),wc(l),l.g=null;var _=2}else if(gc(l.h,d))p=d.D,Gd(l.h,d),_=1;else return;if(l.G!=0){if(d.o)if(_==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var P=l.B;_=Wo(),ge(_,new Fd(_,p)),sa(l)}else mf(l);else if(P=d.s,P==3||P==0&&0<d.X||!(_==1&&iT(l,d)||_==2&&Ec(l)))switch(p&&0<p.length&&(d=l.h,d.i=d.i.concat(p)),P){case 1:qs(l,5);break;case 4:qs(l,10);break;case 3:qs(l,6);break;default:qs(l,2)}}}function yf(l,d){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*d}function qs(l,d){if(l.j.info("Error code "+d),d==2){var p=m(l.fb,l),_=l.Xa;const P=!_;_=new js(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Yo(_,"https"),Jo(_),P?Xw(_.toString(),p):Jw(_.toString(),p)}else Vt(2);l.G=0,l.l&&l.l.sa(d),vf(l),df(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Vt(2)):(this.j.info("Failed to ping google.com"),Vt(1))};function vf(l){if(l.G=0,l.ka=[],l.l){const d=Qd(l.h);(d.length!=0||l.i.length!=0)&&(x(l.ka,d),x(l.ka,l.i),l.h.i.length=0,R(l.i),l.i.length=0),l.l.ra()}}function Ef(l,d,p){var _=p instanceof js?Bn(p):new js(p);if(_.g!="")d&&(_.g=d+"."+_.g),Xo(_,_.s);else{var P=a.location;_=P.protocol,d=d?d+"."+P.hostname:P.hostname,P=+P.port;var N=new js(null);_&&Yo(N,_),d&&(N.g=d),P&&Xo(N,P),p&&(N.l=p),_=N}return p=l.D,d=l.ya,p&&d&&je(_,p,d),je(_,"VER",l.la),Rr(l,_),_}function wf(l,d,p){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new Ze(new Zo({eb:p})):new Ze(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Tf(){}t=Tf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ra(){}ra.prototype.g=function(l,d){return new Kt(l,d)};function Kt(l,d){ae.call(this),this.g=new hf(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!U(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!U(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new wi(this)}A(Kt,ae),Kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Kt.prototype.close=function(){vc(this.g)},Kt.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=yt(l),l=p);d.i.push(new $w(d.Ya++,l)),d.G==3&&sa(d)},Kt.prototype.N=function(){this.g.l=null,delete this.j,vc(this.g),delete this.g,Kt.aa.N.call(this)};function bf(l){cc.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const p in d){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}A(bf,cc);function If(){uc.call(this),this.status=1}A(If,uc);function wi(l){this.g=l}A(wi,Tf),wi.prototype.ua=function(){ge(this.g,"a")},wi.prototype.ta=function(l){ge(this.g,new bf(l))},wi.prototype.sa=function(l){ge(this.g,new If)},wi.prototype.ra=function(){ge(this.g,"b")},ra.prototype.createWebChannel=ra.prototype.g,Kt.prototype.send=Kt.prototype.o,Kt.prototype.open=Kt.prototype.m,Kt.prototype.close=Kt.prototype.close,Dy=function(){return new ra},Ny=function(){return Wo()},xy=$s,Su={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ko.NO_ERROR=0,Ko.TIMEOUT=8,Ko.HTTP_ERROR=6,Sa=Ko,Ud.COMPLETE="complete",Py=Ud,Od.EventType=_r,_r.OPEN="a",_r.CLOSE="b",_r.ERROR="c",_r.MESSAGE="d",ae.prototype.listen=ae.prototype.K,Br=Od,Ze.prototype.listenOnce=Ze.prototype.L,Ze.prototype.getLastError=Ze.prototype.Ka,Ze.prototype.getLastErrorCode=Ze.prototype.Ba,Ze.prototype.getStatus=Ze.prototype.Z,Ze.prototype.getResponseJson=Ze.prototype.Oa,Ze.prototype.getResponseText=Ze.prototype.oa,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Ha,ky=Ze}).apply(typeof da<"u"?da:typeof self<"u"?self:typeof window<"u"?window:{});const $p="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Pt.UNAUTHENTICATED=new Pt(null),Pt.GOOGLE_CREDENTIALS=new Pt("google-credentials-uid"),Pt.FIRST_PARTY=new Pt("first-party-uid"),Pt.MOCK_USER=new Pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cr="11.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=new Do("@firebase/firestore");function Si(){return ii.logLevel}function Z(t,...e){if(ii.logLevel<=ve.DEBUG){const n=e.map(Nh);ii.debug(`Firestore (${cr}): ${t}`,...n)}}function ns(t,...e){if(ii.logLevel<=ve.ERROR){const n=e.map(Nh);ii.error(`Firestore (${cr}): ${t}`,...n)}}function Gi(t,...e){if(ii.logLevel<=ve.WARN){const n=e.map(Nh);ii.warn(`Firestore (${cr}): ${t}`,...n)}}function Nh(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(t="Unexpected state"){const e=`FIRESTORE (${cr}) INTERNAL ASSERTION FAILED: `+t;throw ns(e),new Error(e)}function Ve(t,e){t||de()}function me(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends os{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class OS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Pt.UNAUTHENTICATED))}shutdown(){}}class MS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class LS{constructor(e){this.t=e,this.currentUser=Pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ve(this.o===void 0);let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new Xn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Xn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Xn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ve(typeof s.accessToken=="string"),new Oy(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ve(e===null||typeof e=="string"),new Pt(e)}}class VS{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=Pt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class FS{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new VS(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class US{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class BS{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ve(this.o===void 0);const s=r=>{r.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?i(r):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ve(typeof n.token=="string"),this.R=n.token,new US(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=$S(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function Te(t,e){return t<e?-1:t>e?1:0}function Qi(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{static now(){return ot.fromMillis(Date.now())}static fromDate(e){return ot.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ot(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ie(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ie(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ie(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{static fromTimestamp(e){return new fe(e)}static min(){return new fe(new ot(0,0))}static max(){return new fe(new ot(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,n,s){n===void 0?n=0:n>e.length&&de(),s===void 0?s=e.length-n:s>e.length-n&&de(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Sn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Sn?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=Sn.compareSegments(e.get(i),n.get(i));if(r!==0)return r}return Math.sign(e.length-n.length)}static compareSegments(e,n){const s=Sn.isNumericId(e),i=Sn.isNumericId(n);return s&&!i?-1:!s&&i?1:s&&i?Sn.extractNumericId(e).compare(Sn.extractNumericId(n)):e<n?-1:e>n?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Cs.fromString(e.substring(4,e.length-2))}}class Ge extends Sn{construct(e,n,s){return new Ge(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new ie(j.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new Ge(n)}static emptyPath(){return new Ge([])}}const zS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tt extends Sn{construct(e,n,s){return new Tt(e,n,s)}static isValidIdentifier(e){return zS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Tt(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new ie(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ie(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ie(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new ie(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Tt(n)}static emptyPath(){return new Tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(Ge.fromString(e))}static fromName(e){return new re(Ge.fromString(e).popFirst(5))}static empty(){return new re(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new Ge(e.slice()))}}function jS(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=fe.fromTimestamp(s===1e9?new ot(n+1,0):new ot(n,s));return new xs(i,re.empty(),e)}function qS(t){return new xs(t.readTime,t.key,-1)}class xs{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new xs(fe.min(),re.empty(),-1)}static max(){return new xs(fe.max(),re.empty(),-1)}}function HS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:Te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class KS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ur(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==WS)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&de(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,s)=>{n(e)})}static reject(e){return new $((n,s)=>{s(e)})}static waitFor(e){return new $((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(e){let n=$.resolve(!1);for(const s of e)n=n.next(i=>i?$.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new $((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const u=c;n(e[u]).next(h=>{o[u]=h,++a,a===r&&s(o)},h=>i(h))}})}static doWhile(e,n){return new $((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function GS(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function hr(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ie(s),this.se=s=>n.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ul.oe=-1;function Bl(t){return t==null}function Ya(t){return t===0&&1/t==-1/0}function QS(t){return typeof t=="number"&&Number.isInteger(t)&&!Ya(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YS(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=zp(e)),e=XS(t.get(n),e);return zp(e)}function XS(t,e){let n=e;const s=t.length;for(let i=0;i<s;i++){const r=t.charAt(i);switch(r){case"\0":n+="";break;case"":n+="";break;default:n+=r}}return n}function zp(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function di(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ly(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let at=class Ru{constructor(e,n){this.comparator=e,this.root=n||Ss.EMPTY}insert(e,n){return new Ru(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ss.BLACK,null,null))}remove(e){return new Ru(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ss.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fa(this.root,e,this.comparator,!1)}getReverseIterator(){return new fa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fa(this.root,e,this.comparator,!0)}},fa=class{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Ss=class Hn{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Hn.RED,this.left=i??Hn.EMPTY,this.right=r??Hn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Hn(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Hn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Hn.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Hn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Hn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw de();const e=this.left.check();if(e!==this.right.check())throw de();return e+(this.isRed()?0:1)}};Ss.EMPTY=null,Ss.RED=!0,Ss.BLACK=!1;Ss.EMPTY=new class{constructor(){this.size=0}get key(){throw de()}get value(){throw de()}get color(){throw de()}get left(){throw de()}get right(){throw de()}copy(e,n,s,i,r){return this}insert(e,n,s){return new Ss(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.comparator=e,this.data=new at(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new qp(this.data.getIterator())}getIteratorFrom(e){return new qp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ut(this.comparator);return n.data=e,n}}class qp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.fields=e,e.sort(Tt.comparator)}static empty(){return new hn([])}unionWith(e){let n=new ut(Tt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new hn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Qi(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Vy("Invalid base64 string: "+r):r}}(e);return new It(n)}static fromUint8Array(e){const n=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(e);return new It(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}It.EMPTY_BYTE_STRING=new It("");const JS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ns(t){if(Ve(!!t),typeof t=="string"){let e=0;const n=JS.exec(t);if(Ve(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:tt(t.seconds),nanos:tt(t.nanos)}}function tt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ds(t){return typeof t=="string"?It.fromBase64String(t):It.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function $l(t){const e=t.mapValue.fields.__previous_value__;return Dh(e)?$l(e):e}function bo(t){const e=Ns(t.mapValue.fields.__local_write_time__.timestampValue);return new ot(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e,n,s,i,r,o,a,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class Io{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Io("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Io&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Os(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Dh(t)?4:tR(t)?9007199254740991:eR(t)?10:11:de()}function Ln(t,e){if(t===e)return!0;const n=Os(t);if(n!==Os(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return bo(t).isEqual(bo(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=Ns(i.timestampValue),a=Ns(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return Ds(i.bytesValue).isEqual(Ds(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return tt(i.geoPointValue.latitude)===tt(r.geoPointValue.latitude)&&tt(i.geoPointValue.longitude)===tt(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return tt(i.integerValue)===tt(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=tt(i.doubleValue),a=tt(r.doubleValue);return o===a?Ya(o)===Ya(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Qi(t.arrayValue.values||[],e.arrayValue.values||[],Ln);case 10:case 11:return function(i,r){const o=i.mapValue.fields||{},a=r.mapValue.fields||{};if(jp(o)!==jp(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Ln(o[c],a[c])))return!1;return!0}(t,e);default:return de()}}function Ao(t,e){return(t.values||[]).find(n=>Ln(n,e))!==void 0}function Yi(t,e){if(t===e)return 0;const n=Os(t),s=Os(e);if(n!==s)return Te(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Te(t.booleanValue,e.booleanValue);case 2:return function(r,o){const a=tt(r.integerValue||r.doubleValue),c=tt(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Hp(t.timestampValue,e.timestampValue);case 4:return Hp(bo(t),bo(e));case 5:return Te(t.stringValue,e.stringValue);case 6:return function(r,o){const a=Ds(r),c=Ds(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(r,o){const a=r.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const h=Te(a[u],c[u]);if(h!==0)return h}return Te(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,o){const a=Te(tt(r.latitude),tt(o.latitude));return a!==0?a:Te(tt(r.longitude),tt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Wp(t.arrayValue,e.arrayValue);case 10:return function(r,o){var a,c,u,h;const f=r.fields||{},m=o.fields||{},g=(a=f.value)===null||a===void 0?void 0:a.arrayValue,A=(c=m.value)===null||c===void 0?void 0:c.arrayValue,R=Te(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0);return R!==0?R:Wp(g,A)}(t.mapValue,e.mapValue);case 11:return function(r,o){if(r===pa.mapValue&&o===pa.mapValue)return 0;if(r===pa.mapValue)return 1;if(o===pa.mapValue)return-1;const a=r.fields||{},c=Object.keys(a),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let f=0;f<c.length&&f<h.length;++f){const m=Te(c[f],h[f]);if(m!==0)return m;const g=Yi(a[c[f]],u[h[f]]);if(g!==0)return g}return Te(c.length,h.length)}(t.mapValue,e.mapValue);default:throw de()}}function Hp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Te(t,e);const n=Ns(t),s=Ns(e),i=Te(n.seconds,s.seconds);return i!==0?i:Te(n.nanos,s.nanos)}function Wp(t,e){const n=t.values||[],s=e.values||[];for(let i=0;i<n.length&&i<s.length;++i){const r=Yi(n[i],s[i]);if(r)return r}return Te(n.length,s.length)}function Xi(t){return ku(t)}function ku(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=Ns(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ds(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return re.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",i=!0;for(const r of n.values||[])i?i=!1:s+=",",s+=ku(r);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${ku(n.fields[o])}`;return i+"}"}(t.mapValue):de()}function Ra(t){switch(Os(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=$l(t);return e?16+Ra(e):16;case 5:return 2*t.stringValue.length;case 6:return Ds(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((i,r)=>i+Ra(r),0)}(t.arrayValue);case 10:case 11:return function(s){let i=0;return di(s.fields,(r,o)=>{i+=r.length+Ra(o)}),i}(t.mapValue);default:throw de()}}function Pu(t){return!!t&&"integerValue"in t}function Oh(t){return!!t&&"arrayValue"in t}function Kp(t){return!!t&&"nullValue"in t}function Gp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ka(t){return!!t&&"mapValue"in t}function eR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Zr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return di(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Zr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Zr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function tR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.value=e}static empty(){return new sn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ka(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Zr(n)}setAll(e){let n=Tt.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Zr(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());ka(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ln(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];ka(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){di(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new sn(Zr(this.value))}}function Fy(t){const e=[];return di(t.fields,(n,s)=>{const i=new Tt([n]);if(ka(s)){const r=Fy(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new hn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Dt(e,0,fe.min(),fe.min(),fe.min(),sn.empty(),0)}static newFoundDocument(e,n,s,i){return new Dt(e,1,n,fe.min(),s,i,0)}static newNoDocument(e,n){return new Dt(e,2,n,fe.min(),fe.min(),sn.empty(),0)}static newUnknownDocument(e,n){return new Dt(e,3,n,fe.min(),fe.min(),sn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(fe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=sn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=sn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,n){this.position=e,this.inclusive=n}}function Qp(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=re.comparator(re.fromName(o.referenceValue),n.key):s=Yi(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Yp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ln(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,n="asc"){this.field=e,this.dir=n}}function nR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{}class ct extends Uy{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new iR(e,n,s):n==="array-contains"?new aR(e,s):n==="in"?new lR(e,s):n==="not-in"?new cR(e,s):n==="array-contains-any"?new uR(e,s):new ct(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new rR(e,s):new oR(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Yi(n,this.value)):n!==null&&Os(this.value)===Os(n)&&this.matchesComparison(Yi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vn extends Uy{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Vn(e,n)}matches(e){return By(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function By(t){return t.op==="and"}function $y(t){return sR(t)&&By(t)}function sR(t){for(const e of t.filters)if(e instanceof Vn)return!1;return!0}function xu(t){if(t instanceof ct)return t.field.canonicalString()+t.op.toString()+Xi(t.value);if($y(t))return t.filters.map(e=>xu(e)).join(",");{const e=t.filters.map(n=>xu(n)).join(",");return`${t.op}(${e})`}}function zy(t,e){return t instanceof ct?function(s,i){return i instanceof ct&&s.op===i.op&&s.field.isEqual(i.field)&&Ln(s.value,i.value)}(t,e):t instanceof Vn?function(s,i){return i instanceof Vn&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,o,a)=>r&&zy(o,i.filters[a]),!0):!1}(t,e):void de()}function jy(t){return t instanceof ct?function(n){return`${n.field.canonicalString()} ${n.op} ${Xi(n.value)}`}(t):t instanceof Vn?function(n){return n.op.toString()+" {"+n.getFilters().map(jy).join(" ,")+"}"}(t):"Filter"}class iR extends ct{constructor(e,n,s){super(e,n,s),this.key=re.fromName(s.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class rR extends ct{constructor(e,n){super(e,"in",n),this.keys=qy("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class oR extends ct{constructor(e,n){super(e,"not-in",n),this.keys=qy("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function qy(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>re.fromName(s.referenceValue))}class aR extends ct{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Oh(n)&&Ao(n.arrayValue,this.value)}}class lR extends ct{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ao(this.value.arrayValue,n)}}class cR extends ct{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ao(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ao(this.value.arrayValue,n)}}class uR extends ct{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Oh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ao(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ue=null}}function Xp(t,e=null,n=[],s=[],i=null,r=null,o=null){return new hR(t,e,n,s,i,r,o)}function Mh(t){const e=me(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>xu(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Bl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Xi(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Xi(s)).join(",")),e.ue=n}return e.ue}function Lh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!nR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!zy(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Yp(t.startAt,e.startAt)&&Yp(t.endAt,e.endAt)}function Nu(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function dR(t,e,n,s,i,r,o,a){return new zl(t,e,n,s,i,r,o,a)}function jl(t){return new zl(t)}function Jp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function fR(t){return t.collectionGroup!==null}function eo(t){const e=me(t);if(e.ce===null){e.ce=[];const n=new Set;for(const r of e.explicitOrderBy)e.ce.push(r),n.add(r.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ut(Tt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(r=>{n.has(r.canonicalString())||r.isKeyField()||e.ce.push(new Ja(r,s))}),n.has(Tt.keyField().canonicalString())||e.ce.push(new Ja(Tt.keyField(),s))}return e.ce}function Dn(t){const e=me(t);return e.le||(e.le=pR(e,eo(t))),e.le}function pR(t,e){if(t.limitType==="F")return Xp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const r=i.dir==="desc"?"asc":"desc";return new Ja(i.field,r)});const n=t.endAt?new Xa(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Xa(t.startAt.position,t.startAt.inclusive):null;return Xp(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function Du(t,e,n){return new zl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ql(t,e){return Lh(Dn(t),Dn(e))&&t.limitType===e.limitType}function Hy(t){return`${Mh(Dn(t))}|lt:${t.limitType}`}function Ri(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(i=>jy(i)).join(", ")}]`),Bl(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(i=>Xi(i)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(i=>Xi(i)).join(",")),`Target(${s})`}(Dn(t))}; limitType=${t.limitType})`}function Hl(t,e){return e.isFoundDocument()&&function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):re.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(t,e)&&function(s,i){for(const r of eo(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(s,i){return!(s.startAt&&!function(o,a,c){const u=Qp(o,a,c);return o.inclusive?u<=0:u<0}(s.startAt,eo(s),i)||s.endAt&&!function(o,a,c){const u=Qp(o,a,c);return o.inclusive?u>=0:u>0}(s.endAt,eo(s),i))}(t,e)}function mR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Wy(t){return(e,n)=>{let s=!1;for(const i of eo(t)){const r=gR(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function gR(t,e,n){const s=t.field.isKeyField()?re.comparator(e.key,n.key):function(r,o,a){const c=o.data.field(r),u=a.data.field(r);return c!==null&&u!==null?Yi(c,u):de()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return de()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){di(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Ly(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R=new at(re.comparator);function ss(){return _R}const Ky=new at(re.comparator);function $r(...t){let e=Ky;for(const n of t)e=e.insert(n.key,n);return e}function Gy(t){let e=Ky;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Zs(){return to()}function Qy(){return to()}function to(){return new fi(t=>t.toString(),(t,e)=>t.isEqual(e))}const yR=new at(re.comparator),vR=new ut(re.comparator);function we(...t){let e=vR;for(const n of t)e=e.add(n);return e}const ER=new ut(Te);function wR(){return ER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ya(e)?"-0":e}}function Yy(t){return{integerValue:""+t}}function TR(t,e){return QS(e)?Yy(e):Vh(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(){this._=void 0}}function bR(t,e,n){return t instanceof Za?function(i,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&Dh(r)&&(r=$l(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(n,e):t instanceof Co?Jy(t,e):t instanceof So?Zy(t,e):function(i,r){const o=Xy(i,r),a=Zp(o)+Zp(i.Pe);return Pu(o)&&Pu(i.Pe)?Yy(a):Vh(i.serializer,a)}(t,e)}function IR(t,e,n){return t instanceof Co?Jy(t,e):t instanceof So?Zy(t,e):n}function Xy(t,e){return t instanceof el?function(s){return Pu(s)||function(r){return!!r&&"doubleValue"in r}(s)}(e)?e:{integerValue:0}:null}class Za extends Wl{}class Co extends Wl{constructor(e){super(),this.elements=e}}function Jy(t,e){const n=ev(e);for(const s of t.elements)n.some(i=>Ln(i,s))||n.push(s);return{arrayValue:{values:n}}}class So extends Wl{constructor(e){super(),this.elements=e}}function Zy(t,e){let n=ev(e);for(const s of t.elements)n=n.filter(i=>!Ln(i,s));return{arrayValue:{values:n}}}class el extends Wl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Zp(t){return tt(t.integerValue||t.doubleValue)}function ev(t){return Oh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function AR(t,e){return t.field.isEqual(e.field)&&function(s,i){return s instanceof Co&&i instanceof Co||s instanceof So&&i instanceof So?Qi(s.elements,i.elements,Ln):s instanceof el&&i instanceof el?Ln(s.Pe,i.Pe):s instanceof Za&&i instanceof Za}(t.transform,e.transform)}class CR{constructor(e,n){this.version=e,this.transformResults=n}}class Jn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Jn}static exists(e){return new Jn(void 0,e)}static updateTime(e){return new Jn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Pa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Kl{}function tv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new sv(t.key,Jn.none()):new Oo(t.key,t.data,Jn.none());{const n=t.data,s=sn.empty();let i=new ut(Tt.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new pi(t.key,s,new hn(i.toArray()),Jn.none())}}function SR(t,e,n){t instanceof Oo?function(i,r,o){const a=i.value.clone(),c=tm(i.fieldTransforms,r,o.transformResults);a.setAll(c),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof pi?function(i,r,o){if(!Pa(i.precondition,r))return void r.convertToUnknownDocument(o.version);const a=tm(i.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(nv(i)),c.setAll(a),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function no(t,e,n,s){return t instanceof Oo?function(r,o,a,c){if(!Pa(r.precondition,o))return a;const u=r.value.clone(),h=nm(r.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,s):t instanceof pi?function(r,o,a,c){if(!Pa(r.precondition,o))return a;const u=nm(r.fieldTransforms,c,o),h=o.data;return h.setAll(nv(r)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(f=>f.field))}(t,e,n,s):function(r,o,a){return Pa(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function RR(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=Xy(s.transform,i||null);r!=null&&(n===null&&(n=sn.empty()),n.set(s.field,r))}return n||null}function em(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&Qi(s,i,(r,o)=>AR(r,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Oo extends Kl{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class pi extends Kl{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function nv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function tm(t,e,n){const s=new Map;Ve(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,IR(o,a,n[i]))}return s}function nm(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,bR(r,o,e))}return s}class sv extends Kl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kR extends Kl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&SR(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=no(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=no(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Qy();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=tv(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(fe.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),we())}isEqual(e){return this.batchId===e.batchId&&Qi(this.mutations,e.mutations,(n,s)=>em(n,s))&&Qi(this.baseMutations,e.baseMutations,(n,s)=>em(n,s))}}class Fh{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){Ve(e.mutations.length===s.length);let i=function(){return yR}();const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Fh(e,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it,Ce;function DR(t){switch(t){default:return de();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function iv(t){if(t===void 0)return ns("GRPC error has no .code"),j.UNKNOWN;switch(t){case it.OK:return j.OK;case it.CANCELLED:return j.CANCELLED;case it.UNKNOWN:return j.UNKNOWN;case it.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case it.INTERNAL:return j.INTERNAL;case it.UNAVAILABLE:return j.UNAVAILABLE;case it.UNAUTHENTICATED:return j.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case it.NOT_FOUND:return j.NOT_FOUND;case it.ALREADY_EXISTS:return j.ALREADY_EXISTS;case it.PERMISSION_DENIED:return j.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case it.ABORTED:return j.ABORTED;case it.OUT_OF_RANGE:return j.OUT_OF_RANGE;case it.UNIMPLEMENTED:return j.UNIMPLEMENTED;case it.DATA_LOSS:return j.DATA_LOSS;default:return de()}}(Ce=it||(it={}))[Ce.OK=0]="OK",Ce[Ce.CANCELLED=1]="CANCELLED",Ce[Ce.UNKNOWN=2]="UNKNOWN",Ce[Ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ce[Ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ce[Ce.NOT_FOUND=5]="NOT_FOUND",Ce[Ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ce[Ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ce[Ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ce[Ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ce[Ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ce[Ce.ABORTED=10]="ABORTED",Ce[Ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ce[Ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ce[Ce.INTERNAL=13]="INTERNAL",Ce[Ce.UNAVAILABLE=14]="UNAVAILABLE",Ce[Ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR=new Cs([4294967295,4294967295],0);function sm(t){const e=OR().encode(t),n=new Ry;return n.update(e),new Uint8Array(n.digest())}function im(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Cs([n,s],0),new Cs([i,r],0)]}class Uh{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new zr(`Invalid padding: ${n}`);if(s<0)throw new zr(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new zr(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new zr(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=Cs.fromNumber(this.Te)}de(e,n,s){let i=e.add(n.multiply(Cs.fromNumber(s)));return i.compare(MR)===1&&(i=new Cs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=sm(e),[s,i]=im(n);for(let r=0;r<this.hashCount;r++){const o=this.de(s,i,r);if(!this.Ee(o))return!1}return!0}static create(e,n,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Uh(r,i,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=sm(e),[s,i]=im(n);for(let r=0;r<this.hashCount;r++){const o=this.de(s,i,r);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class zr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Mo.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Gl(fe.min(),i,new at(Te),ss(),we())}}class Mo{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Mo(s,n,we(),we(),we())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,n,s,i){this.Re=e,this.removedTargetIds=n,this.key=s,this.Ve=i}}class rv{constructor(e,n){this.targetId=e,this.me=n}}class ov{constructor(e,n,s=It.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class rm{constructor(){this.fe=0,this.ge=om(),this.pe=It.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=we(),n=we(),s=we();return this.ge.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:de()}}),new Mo(this.pe,this.ye,e,n,s)}Ce(){this.we=!1,this.ge=om()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ve(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class LR{constructor(e){this.Be=e,this.Le=new Map,this.ke=ss(),this.qe=ma(),this.Qe=ma(),this.Ke=new at(Te)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const s=this.ze(n);switch(e.state){case 0:this.je(n)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(n);break;case 3:this.je(n)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),s.De(e.resumeToken));break;default:de()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Le.forEach((s,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,s=e.me.count,i=this.Ye(n);if(i){const r=i.target;if(Nu(r))if(s===0){const o=new re(r.path);this.We(n,o,Dt.newNoDocument(o,fe.min()))}else Ve(s===1);else{const o=this.Ze(n);if(o!==s){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=n;let o,a;try{o=Ds(s).toUint8Array()}catch(c){if(c instanceof Vy)return Gi("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Uh(o,i,r)}catch(c){return Gi(c instanceof zr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,s){return n.me.count===s-this.rt(e,n.targetId)?0:2}rt(e,n){const s=this.Be.getRemoteKeysForTarget(n);let i=0;return s.forEach(r=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(a)||(this.We(n,r,null),i++)}),i}it(e){const n=new Map;this.Le.forEach((r,o)=>{const a=this.Ye(o);if(a){if(r.current&&Nu(a.target)){const c=new re(a.target.path);this.st(c).has(o)||this.ot(o,c)||this.We(o,c,Dt.newNoDocument(c,e))}r.be&&(n.set(o,r.ve()),r.Ce())}});let s=we();this.Qe.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.ke.forEach((r,o)=>o.setReadTime(e));const i=new Gl(e,n,this.Ke,this.ke,s);return this.ke=ss(),this.qe=ma(),this.Qe=ma(),this.Ke=new at(Te),i}Ue(e,n){if(!this.je(e))return;const s=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,s),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,s){if(!this.je(e))return;const i=this.ze(e);this.ot(e,n)?i.Fe(n,1):i.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),s&&(this.ke=this.ke.insert(n,s))}removeTarget(e){this.Le.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Le.get(e);return n||(n=new rm,this.Le.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new ut(Te),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ut(Te),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Le.get(e);return n&&n.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new rm),this.Be.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Be.getRemoteKeysForTarget(e).has(n)}}function ma(){return new at(re.comparator)}function om(){return new at(re.comparator)}const VR={asc:"ASCENDING",desc:"DESCENDING"},FR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},UR={and:"AND",or:"OR"};class BR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ou(t,e){return t.useProto3Json||Bl(e)?e:{value:e}}function tl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function av(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function $R(t,e){return tl(t,e.toTimestamp())}function On(t){return Ve(!!t),fe.fromTimestamp(function(n){const s=Ns(n);return new ot(s.seconds,s.nanos)}(t))}function Bh(t,e){return Mu(t,e).canonicalString()}function Mu(t,e){const n=function(i){return new Ge(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function lv(t){const e=Ge.fromString(t);return Ve(fv(e)),e}function Lu(t,e){return Bh(t.databaseId,e.path)}function qc(t,e){const n=lv(e);if(n.get(1)!==t.databaseId.projectId)throw new ie(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ie(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(uv(n))}function cv(t,e){return Bh(t.databaseId,e)}function zR(t){const e=lv(t);return e.length===4?Ge.emptyPath():uv(e)}function Vu(t){return new Ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function uv(t){return Ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function am(t,e,n){return{name:Lu(t,e),fields:n.value.mapValue.fields}}function jR(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:de()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(u,h){return u.useProto3Json?(Ve(h===void 0||typeof h=="string"),It.fromBase64String(h||"")):(Ve(h===void 0||h instanceof Buffer||h instanceof Uint8Array),It.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?j.UNKNOWN:iv(u.code);return new ie(h,u.message||"")}(o);n=new ov(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=qc(t,s.document.name),r=On(s.document.updateTime),o=s.document.createTime?On(s.document.createTime):fe.min(),a=new sn({mapValue:{fields:s.document.fields}}),c=Dt.newFoundDocument(i,r,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];n=new xa(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=qc(t,s.document),r=s.readTime?On(s.readTime):fe.min(),o=Dt.newNoDocument(i,r),a=s.removedTargetIds||[];n=new xa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=qc(t,s.document),r=s.removedTargetIds||[];n=new xa([],r,i,null)}else{if(!("filter"in e))return de();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new NR(i,r),a=s.targetId;n=new rv(a,o)}}return n}function qR(t,e){let n;if(e instanceof Oo)n={update:am(t,e.key,e.value)};else if(e instanceof sv)n={delete:Lu(t,e.key)};else if(e instanceof pi)n={update:am(t,e.key,e.data),updateMask:ZR(e.fieldMask)};else{if(!(e instanceof kR))return de();n={verify:Lu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,o){const a=o.transform;if(a instanceof Za)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Co)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof So)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof el)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw de()}(0,s))),e.precondition.isNone||(n.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:$R(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:de()}(t,e.precondition)),n}function HR(t,e){return t&&t.length>0?(Ve(e!==void 0),t.map(n=>function(i,r){let o=i.updateTime?On(i.updateTime):On(r);return o.isEqual(fe.min())&&(o=On(r)),new CR(o,i.transformResults||[])}(n,e))):[]}function WR(t,e){return{documents:[cv(t,e.path)]}}function KR(t,e){const n={structuredQuery:{}},s=e.path;let i;e.collectionGroup!==null?(i=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=cv(t,i);const r=function(u){if(u.length!==0)return dv(Vn.create(u,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const o=function(u){if(u.length!==0)return u.map(h=>function(m){return{field:ki(m.field),direction:YR(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Ou(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:n,parent:i}}function GR(t){let e=zR(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Ve(s===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let r=[];n.where&&(r=function(f){const m=hv(f);return m instanceof Vn&&$y(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(A){return new Ja(Pi(A.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,Bl(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(f){const m=!!f.before,g=f.values||[];return new Xa(g,m)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const m=!f.before,g=f.values||[];return new Xa(g,m)}(n.endAt)),dR(e,i,o,r,a,"F",c,u)}function QR(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return de()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function hv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Pi(n.unaryFilter.field);return ct.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=Pi(n.unaryFilter.field);return ct.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Pi(n.unaryFilter.field);return ct.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Pi(n.unaryFilter.field);return ct.create(o,"!=",{nullValue:"NULL_VALUE"});default:return de()}}(t):t.fieldFilter!==void 0?function(n){return ct.create(Pi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return de()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Vn.create(n.compositeFilter.filters.map(s=>hv(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return de()}}(n.compositeFilter.op))}(t):de()}function YR(t){return VR[t]}function XR(t){return FR[t]}function JR(t){return UR[t]}function ki(t){return{fieldPath:t.canonicalString()}}function Pi(t){return Tt.fromServerFormat(t.fieldPath)}function dv(t){return t instanceof ct?function(n){if(n.op==="=="){if(Gp(n.value))return{unaryFilter:{field:ki(n.field),op:"IS_NAN"}};if(Kp(n.value))return{unaryFilter:{field:ki(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Gp(n.value))return{unaryFilter:{field:ki(n.field),op:"IS_NOT_NAN"}};if(Kp(n.value))return{unaryFilter:{field:ki(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ki(n.field),op:XR(n.op),value:n.value}}}(t):t instanceof Vn?function(n){const s=n.getFilters().map(i=>dv(i));return s.length===1?s[0]:{compositeFilter:{op:JR(n.op),filters:s}}}(t):de()}function ZR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function fv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n,s,i,r=fe.min(),o=fe.min(),a=It.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Es(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Es(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Es(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Es(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e){this.ht=e}}function t1(t){const e=GR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Du(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(){this.ln=new s1}addToCollectionParentIndex(e,n){return this.ln.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(xs.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(xs.min())}updateCollectionGroup(e,n,s){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class s1{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new ut(Ge.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new ut(Ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class zt{static withCacheSize(e){return new zt(e,zt.DEFAULT_COLLECTION_PERCENTILE,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zt.DEFAULT_COLLECTION_PERCENTILE=10,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,zt.DEFAULT=new zt(41943040,zt.DEFAULT_COLLECTION_PERCENTILE,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),zt.DISABLED=new zt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Ji(0)}static Qn(){return new Ji(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm([t,e],[n,s]){const i=Te(t,n);return i===0?Te(e,s):i}class i1{constructor(e){this.Gn=e,this.buffer=new ut(cm),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();cm(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class r1{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){Z("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){hr(n)?Z("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await ur(n)}await this.Yn(3e5)})}}class o1{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(s=>Math.floor(n/100*s))}nthSequenceNumber(e,n){if(n===0)return $.resolve(Ul.oe);const s=new i1(n);return this.Zn.forEachTarget(e,i=>s.Hn(i.sequenceNumber)).next(()=>this.Zn.er(e,i=>s.Hn(i))).next(()=>s.maxValue)}removeTargets(e,n,s){return this.Zn.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(lm)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),lm):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let s,i,r,o,a,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(s=f,a=Date.now(),this.removeTargets(e,s,n))).next(f=>(r=f,c=Date.now(),this.removeOrphanedDocuments(e,s))).next(f=>(u=Date.now(),Si()<=ve.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${r} targets in `+(c-a)+`ms
	Removed ${f} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:f})))}}function a1(t,e){return new o1(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(){this.changes=new fi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?$.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&no(s.mutation,i,hn.empty(),ot.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,we()).next(()=>s))}getLocalViewOfDocuments(e,n,s=we()){const i=Zs();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=$r();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Zs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,we()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=ss();const o=to(),a=function(){return to()}();return n.forEach((c,u)=>{const h=s.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof pi)?r=r.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),no(h.mutation,u,h.mutation.getFieldMask(),ot.now())):o.set(u.key,hn.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var f;return a.set(u,new c1(h,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const s=to();let i=new at((o,a)=>o-a),r=we();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=s.get(c)||hn.empty();h=a.applyToLocalView(u,h),s.set(c,h);const f=(i.get(a.batchId)||we()).add(c);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,f=Qy();h.forEach(m=>{if(!r.has(m)){const g=tv(n.get(m),s.get(m));g!==null&&f.set(m,g),r=r.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return $.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,i){return function(o){return re.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):fR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,i):this.getDocumentsMatchingCollectionQuery(e,n,s,i)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):$.resolve(Zs());let a=-1,c=r;return o.next(u=>$.forEach(u,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),r.get(h)?$.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{c=c.insert(h,m)}))).next(()=>this.populateOverlays(e,u,r)).next(()=>this.computeViews(e,c,u,we())).next(h=>({batchId:a,changes:Gy(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next(s=>{let i=$r();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s,i){const r=n.collectionGroup;let o=$r();return this.indexManager.getCollectionParents(e,r).next(a=>$.forEach(a,c=>{const u=function(f,m){return new zl(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,c.child(r));return this.getDocumentsMatchingCollectionQuery(e,u,s,i).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r,i))).next(o=>{r.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Dt.newInvalidDocument(h)))});let a=$r();return o.forEach((c,u)=>{const h=r.get(c);h!==void 0&&no(h.mutation,u,hn.empty(),ot.now()),Hl(n,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return $.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:On(i.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(i){return{name:i.name,query:t1(i.bundledQuery),readTime:On(i.readTime)}}(n)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(){this.overlays=new at(re.comparator),this.dr=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Zs();return $.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.Tt(e,n,r)}),$.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.dr.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.dr.delete(s)),$.resolve()}getOverlaysForCollection(e,n,s){const i=Zs(),r=n.length+1,o=new re(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return $.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new at((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let h=r.get(u.largestBatchId);h===null&&(h=Zs(),r=r.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Zs(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=i)););return $.resolve(a)}Tt(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.dr.get(i.largestBatchId).delete(s.key);this.dr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new xR(n,s));let r=this.dr.get(n);r===void 0&&(r=we(),this.dr.set(n,r)),this.dr.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(){this.sessionToken=It.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(){this.Er=new ut(dt.Ar),this.Rr=new ut(dt.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,n){const s=new dt(e,n);this.Er=this.Er.add(s),this.Rr=this.Rr.add(s)}mr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.gr(new dt(e,n))}pr(e,n){e.forEach(s=>this.removeReference(s,n))}yr(e){const n=new re(new Ge([])),s=new dt(n,e),i=new dt(n,e+1),r=[];return this.Rr.forEachInRange([s,i],o=>{this.gr(o),r.push(o.key)}),r}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new re(new Ge([])),s=new dt(n,e),i=new dt(n,e+1);let r=we();return this.Rr.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new dt(e,0),s=this.Er.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class dt{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return re.comparator(e.key,n.key)||Te(e.br,n.br)}static Vr(e,n){return Te(e.br,n.br)||re.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new ut(dt.Ar)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new PR(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.vr=this.vr.add(new dt(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.Fr(s),r=i<0?0:i;return $.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new dt(n,0),i=new dt(n,Number.POSITIVE_INFINITY),r=[];return this.vr.forEachInRange([s,i],o=>{const a=this.Cr(o.br);r.push(a)}),$.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ut(Te);return n.forEach(i=>{const r=new dt(i,0),o=new dt(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([r,o],a=>{s=s.add(a.br)})}),$.resolve(this.Mr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;re.isDocumentKey(r)||(r=r.child(""));const o=new dt(new re(r),0);let a=new ut(Te);return this.vr.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.br)),!0)},o),$.resolve(this.Mr(a))}Mr(e){const n=[];return e.forEach(s=>{const i=this.Cr(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ve(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.vr;return $.forEach(n.mutations,i=>{const r=new dt(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.vr=s})}Bn(e){}containsKey(e,n){const s=new dt(n,0),i=this.vr.firstAfterOrEqual(s);return $.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e){this.Nr=e,this.docs=function(){return new at(re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Nr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return $.resolve(s?s.document.mutableCopy():Dt.newInvalidDocument(n))}getEntries(e,n){let s=ss();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Dt.newInvalidDocument(i))}),$.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=ss();const o=n.path,a=new re(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||HS(qS(h),s)<=0||(i.has(h.key)||Hl(n,h))&&(r=r.insert(h.key,h.mutableCopy()))}return $.resolve(r)}getAllFromCollectionGroup(e,n,s,i){de()}Br(e,n){return $.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new g1(this)}getSize(e){return $.resolve(this.size)}}class g1 extends l1{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.hr.addEntry(e,i)):this.hr.removeEntry(s)}),$.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(e){this.persistence=e,this.Lr=new fi(n=>Mh(n),Lh),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this.kr=0,this.qr=new $h,this.targetCount=0,this.Qr=Ji.qn()}forEachTarget(e,n){return this.Lr.forEach((s,i)=>n(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.kr&&(this.kr=n),$.resolve()}Un(e){this.Lr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new Ji(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Un(n),$.resolve()}removeTargetData(e,n){return this.Lr.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Lr.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Lr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),$.waitFor(r).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const s=this.Lr.get(n)||null;return $.resolve(s)}addMatchingKeys(e,n,s){return this.qr.mr(n,s),$.resolve()}removeMatchingKeys(e,n,s){this.qr.pr(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),$.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const s=this.qr.Sr(n);return $.resolve(s)}containsKey(e,n){return $.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e,n){this.Kr={},this.overlays={},this.$r=new Ul(0),this.Ur=!1,this.Ur=!0,this.Wr=new f1,this.referenceDelegate=e(this),this.Gr=new _1(this),this.indexManager=new n1,this.remoteDocumentCache=function(i){return new m1(i)}(s=>this.referenceDelegate.zr(s)),this.serializer=new e1(n),this.jr=new h1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new d1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Kr[e.toKey()];return s||(s=new p1(n,this.referenceDelegate),this.Kr[e.toKey()]=s),s}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,s){Z("MemoryPersistence","Starting transaction:",e);const i=new y1(this.$r.next());return this.referenceDelegate.Hr(),s(i).next(r=>this.referenceDelegate.Jr(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Yr(e,n){return $.or(Object.values(this.Kr).map(s=>()=>s.containsKey(e,n)))}}class y1 extends KS{constructor(e){super(),this.currentSequenceNumber=e}}class zh{constructor(e){this.persistence=e,this.Zr=new $h,this.Xr=null}static ei(e){return new zh(e)}get ti(){if(this.Xr)return this.Xr;throw de()}addReference(e,n,s){return this.Zr.addReference(s,n),this.ti.delete(s.toString()),$.resolve()}removeReference(e,n,s){return this.Zr.removeReference(s,n),this.ti.add(s.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),$.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(i=>this.ti.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.ti.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.ti,s=>{const i=re.fromPath(s);return this.ni(e,i).next(r=>{r||n.removeEntry(i,fe.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(s=>{s?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return $.or([()=>$.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class nl{constructor(e,n){this.persistence=e,this.ri=new fi(s=>YS(s.path),(s,i)=>s.isEqual(i)),this.garbageCollector=a1(this,n)}static ei(e,n){return new nl(e,n)}Hr(){}Jr(e){return $.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>n.next(i=>s+i))}nr(e){let n=0;return this.er(e,s=>{n++}).next(()=>n)}er(e,n){return $.forEach(this.ri,(s,i)=>this.ir(e,s,i).next(r=>r?$.resolve():n(i)))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const i=this.persistence.getRemoteDocumentCache(),r=i.newChangeBuffer();return i.Br(e,o=>this.ir(e,o,n).next(a=>{a||(s++,r.removeEntry(o,fe.min()))})).next(()=>r.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),$.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.ri.set(s,e.currentSequenceNumber),$.resolve()}removeReference(e,n,s){return this.ri.set(s,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),$.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ra(e.data.value)),n}ir(e,n,s){return $.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.ri.get(n);return $.resolve(i!==void 0&&i>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Wi=s,this.Gi=i}static zi(e,n){let s=we(),i=we();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new jh(e,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return fC()?8:GS(En())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,s,i){const r={result:null};return this.Xi(e,n).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.es(e,n,i,s).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new v1;return this.ts(e,n,o).next(a=>{if(r.result=a,this.Hi)return this.ns(e,n,o,a.size)})}).next(()=>r.result)}ns(e,n,s,i){return s.documentReadCount<this.Ji?(Si()<=ve.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",Ri(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),$.resolve()):(Si()<=ve.DEBUG&&Z("QueryEngine","Query:",Ri(n),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.Yi*i?(Si()<=ve.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",Ri(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Dn(n))):$.resolve())}Xi(e,n){if(Jp(n))return $.resolve(null);let s=Dn(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Du(n,null,"F"),s=Dn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=we(...r);return this.Zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.rs(n,a);return this.ss(n,u,o,c.readTime)?this.Xi(e,Du(n,null,"F")):this.os(e,u,n,c)}))})))}es(e,n,s,i){return Jp(n)||i.isEqual(fe.min())?$.resolve(null):this.Zi.getDocuments(e,s).next(r=>{const o=this.rs(n,r);return this.ss(n,o,s,i)?$.resolve(null):(Si()<=ve.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ri(n)),this.os(e,o,n,jS(i,-1)).next(a=>a))})}rs(e,n){let s=new ut(Wy(e));return n.forEach((i,r)=>{Hl(e,r)&&(s=s.add(r))}),s}ss(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}ts(e,n,s){return Si()<=ve.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",Ri(n)),this.Zi.getDocumentsMatchingQuery(e,n,xs.min(),s)}os(e,n,s,i){return this.Zi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e,n,s,i){this.persistence=e,this._s=n,this.serializer=i,this.us=new at(Te),this.cs=new fi(r=>Mh(r),Lh),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(s)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new u1(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function T1(t,e,n,s){return new w1(t,e,n,s)}async function mv(t,e){const n=me(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Ps(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=we();for(const u of i){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of r){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function b1(t,e){const n=me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.hs.newChangeBuffer({trackRemovals:!0});return function(a,c,u,h){const f=u.batch,m=f.keys();let g=$.resolve();return m.forEach(A=>{g=g.next(()=>h.getEntry(c,A)).next(R=>{const x=u.docVersions.get(A);Ve(x!==null),R.version.compareTo(x)<0&&(f.applyToRemoteDocument(R,u),R.isValidDocument()&&(R.setReadTime(u.commitVersion),h.addEntry(R)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(c,f))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let c=we();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function gv(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function I1(t,e){const n=me(t),s=e.snapshotVersion;let i=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});i=n.us;const a=[];e.targetChanges.forEach((h,f)=>{const m=i.get(f);if(!m)return;a.push(n.Gr.removeMatchingKeys(r,h.removedDocuments,f).next(()=>n.Gr.addMatchingKeys(r,h.addedDocuments,f)));let g=m.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(It.EMPTY_BYTE_STRING,fe.min()).withLastLimboFreeSnapshotVersion(fe.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,s)),i=i.insert(f,g),function(R,x,F){return R.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(m,g,h)&&a.push(n.Gr.updateTargetData(r,g))});let c=ss(),u=we();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(A1(r,o,e.documentUpdates).next(h=>{c=h.Is,u=h.ds})),!s.isEqual(fe.min())){const h=n.Gr.getLastRemoteSnapshotVersion(r).next(f=>n.Gr.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return $.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,u)).next(()=>c)}).then(r=>(n.us=i,r))}function A1(t,e,n){let s=we(),i=we();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=ss();return n.forEach((a,c)=>{const u=r.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(fe.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):Z("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Is:o,ds:i}})}function C1(t,e){const n=me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function S1(t,e){const n=me(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Gr.getTargetData(s,e).next(r=>r?(i=r,$.resolve(i)):n.Gr.allocateTargetId(s).next(o=>(i=new Es(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Gr.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.us.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.us=n.us.insert(s.targetId,s),n.cs.set(e,s.targetId)),s})}async function Fu(t,e,n){const s=me(t),i=s.us.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!hr(o))throw o;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.us=s.us.remove(e),s.cs.delete(i.target)}function um(t,e,n){const s=me(t);let i=fe.min(),r=we();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const f=me(c),m=f.cs.get(h);return m!==void 0?$.resolve(f.us.get(m)):f.Gr.getTargetData(u,h)}(s,o,Dn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Gr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s._s.getDocumentsMatchingQuery(o,e,n?i:fe.min(),n?r:we())).next(a=>(R1(s,mR(e),a),{documents:a,Es:r})))}function R1(t,e,n){let s=t.ls.get(e)||fe.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.ls.set(e,s)}class hm{constructor(){this.activeTargetIds=wR()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class k1{constructor(){this._o=new hm,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,s){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new hm,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ga=null;function Hc(){return ga===null?ga=function(){return 268435456+Math.round(2147483648*Math.random())}():ga++,"0x"+ga.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt="WebChannelConnection";class D1 extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Fo=s+"://"+n.host,this.Mo=`projects/${i}/databases/${r}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${r}`}Oo(n,s,i,r,o){const a=Hc(),c=this.No(n,s.toUriEncodedString());Z("RestConnection",`Sending RPC '${n}' ${a}:`,c,i);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(u,r,o),this.Lo(n,c,u,i).then(h=>(Z("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw Gi("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",c,"request:",i),h})}ko(n,s,i,r,o,a){return this.Oo(n,s,i,r,o)}Bo(n,s,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+cr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((r,o)=>n[o]=r),i&&i.headers.forEach((r,o)=>n[o]=r)}No(n,s){const i=x1[n];return`${this.Fo}/v1/${s}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,n,s,i){const r=Hc();return new Promise((o,a)=>{const c=new ky;c.setWithCredentials(!0),c.listenOnce(Py.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Sa.NO_ERROR:const h=c.getResponseJson();Z(kt,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(h)),o(h);break;case Sa.TIMEOUT:Z(kt,`RPC '${e}' ${r} timed out`),a(new ie(j.DEADLINE_EXCEEDED,"Request time out"));break;case Sa.HTTP_ERROR:const f=c.getStatus();if(Z(kt,`RPC '${e}' ${r} failed with status:`,f,"response text:",c.getResponseText()),f>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const g=m==null?void 0:m.error;if(g&&g.status&&g.message){const A=function(x){const F=x.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(F)>=0?F:j.UNKNOWN}(g.status);a(new ie(A,g.message))}else a(new ie(j.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new ie(j.UNAVAILABLE,"Connection failed."));break;default:de()}}finally{Z(kt,`RPC '${e}' ${r} completed.`)}});const u=JSON.stringify(i);Z(kt,`RPC '${e}' ${r} sending request:`,i),c.send(n,"POST",u,s,15)})}qo(e,n,s){const i=Hc(),r=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Dy(),a=Ny(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Bo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const h=r.join("");Z(kt,`Creating RPC '${e}' stream ${i}: ${h}`,c);const f=o.createWebChannel(h,c);let m=!1,g=!1;const A=new N1({Eo:x=>{g?Z(kt,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(m||(Z(kt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),Z(kt,`RPC '${e}' stream ${i} sending:`,x),f.send(x))},Ao:()=>f.close()}),R=(x,F,U)=>{x.listen(F,O=>{try{U(O)}catch(M){setTimeout(()=>{throw M},0)}})};return R(f,Br.EventType.OPEN,()=>{g||(Z(kt,`RPC '${e}' stream ${i} transport opened.`),A.So())}),R(f,Br.EventType.CLOSE,()=>{g||(g=!0,Z(kt,`RPC '${e}' stream ${i} transport closed`),A.Do())}),R(f,Br.EventType.ERROR,x=>{g||(g=!0,Gi(kt,`RPC '${e}' stream ${i} transport errored:`,x),A.Do(new ie(j.UNAVAILABLE,"The operation could not be completed")))}),R(f,Br.EventType.MESSAGE,x=>{var F;if(!g){const U=x.data[0];Ve(!!U);const O=U,M=(O==null?void 0:O.error)||((F=O[0])===null||F===void 0?void 0:F.error);if(M){Z(kt,`RPC '${e}' stream ${i} received error:`,M);const ee=M.status;let te=function(v){const I=it[v];if(I!==void 0)return iv(I)}(ee),C=M.message;te===void 0&&(te=j.INTERNAL,C="Unknown error status: "+ee+" with message "+M.message),g=!0,A.Do(new ie(te,C)),f.close()}else Z(kt,`RPC '${e}' stream ${i} received:`,U),A.vo(U)}}),R(a,xy.STAT_EVENT,x=>{x.stat===Su.PROXY?Z(kt,`RPC '${e}' stream ${i} detected buffering proxy`):x.stat===Su.NOPROXY&&Z(kt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.bo()},0),A}}function Wc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(t){return new BR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e,n,s=1e3,i=1.5,r=6e4){this.li=e,this.timerId=n,this.Qo=s,this.Ko=i,this.$o=r,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),s=Math.max(0,Date.now()-this.Go),i=Math.max(0,n-s);i>0&&Z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e,n,s,i,r,o,a,c){this.li=e,this.Yo=s,this.Zo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new _v(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(ns(n.toString()),ns("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Xo===n&&this.I_(s,i)},s=>{e(()=>{const i=new ie(j.UNKNOWN,"Fetching auth token failed: "+s.message);return this.d_(i)})})}I_(e,n){const s=this.T_(this.Xo);this.stream=this.E_(e,n),this.stream.Ro(()=>{s(()=>this.listener.Ro())}),this.stream.mo(()=>{s(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{s(()=>this.d_(i))}),this.stream.onMessage(i=>{s(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class O1 extends yv{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}E_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=jR(this.serializer,e),s=function(r){if(!("targetChange"in r))return fe.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?fe.min():o.readTime?On(o.readTime):fe.min()}(e);return this.listener.R_(n,s)}V_(e){const n={};n.database=Vu(this.serializer),n.addTarget=function(r,o){let a;const c=o.target;if(a=Nu(c)?{documents:WR(r,c)}:{query:KR(r,c).ct},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=av(r,o.resumeToken);const u=Ou(r,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(fe.min())>0){a.readTime=tl(r,o.snapshotVersion.toTimestamp());const u=Ou(r,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const s=QR(this.serializer,e);s&&(n.labels=s),this.c_(n)}m_(e){const n={};n.database=Vu(this.serializer),n.removeTarget=e,this.c_(n)}}class M1 extends yv{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,n){return this.connection.qo("Write",e,n)}A_(e){return Ve(!!e.streamToken),this.lastStreamToken=e.streamToken,Ve(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=HR(e.writeResults,e.commitTime),s=On(e.commitTime);return this.listener.y_(s,n)}w_(){const e={};e.database=Vu(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>qR(this.serializer,s))};this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1 extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new ie(j.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Oo(e,Mu(n,s),i,r,o)).catch(r=>{throw r.name==="FirebaseError"?(r.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new ie(j.UNKNOWN,r.toString())})}ko(e,n,s,i,r){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.ko(e,Mu(n,s),i,o,a,r)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ie(j.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class V1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(ns(n),this.C_=!1):Z("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=r,this.Q_.uo(o=>{s.enqueueAndForget(async()=>{mi(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=me(c);u.k_.add(4),await Lo(u),u.K_.set("Unknown"),u.k_.delete(4),await Yl(u)}(this))})}),this.K_=new V1(s,i)}}async function Yl(t){if(mi(t))for(const e of t.q_)await e(!0)}async function Lo(t){for(const e of t.q_)await e(!1)}function vv(t,e){const n=me(t);n.L_.has(e.targetId)||(n.L_.set(e.targetId,e),Kh(n)?Wh(n):dr(n).s_()&&Hh(n,e))}function qh(t,e){const n=me(t),s=dr(n);n.L_.delete(e),s.s_()&&Ev(n,e),n.L_.size===0&&(s.s_()?s.a_():mi(n)&&n.K_.set("Unknown"))}function Hh(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(fe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}dr(t).V_(e)}function Ev(t,e){t.U_.xe(e),dr(t).m_(e)}function Wh(t){t.U_=new LR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.L_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),dr(t).start(),t.K_.F_()}function Kh(t){return mi(t)&&!dr(t).i_()&&t.L_.size>0}function mi(t){return me(t).k_.size===0}function wv(t){t.U_=void 0}async function U1(t){t.K_.set("Online")}async function B1(t){t.L_.forEach((e,n)=>{Hh(t,e)})}async function $1(t,e){wv(t),Kh(t)?(t.K_.O_(e),Wh(t)):t.K_.set("Unknown")}async function z1(t,e,n){if(t.K_.set("Online"),e instanceof ov&&e.state===2&&e.cause)try{await async function(i,r){const o=r.cause;for(const a of r.targetIds)i.L_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.L_.delete(a),i.U_.removeTarget(a))}(t,e)}catch(s){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await sl(t,s)}else if(e instanceof xa?t.U_.$e(e):e instanceof rv?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(fe.min()))try{const s=await gv(t.localStore);n.compareTo(s)>=0&&await function(r,o){const a=r.U_.it(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=r.L_.get(u);h&&r.L_.set(u,h.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const h=r.L_.get(c);if(!h)return;r.L_.set(c,h.withResumeToken(It.EMPTY_BYTE_STRING,h.snapshotVersion)),Ev(r,c);const f=new Es(h.target,c,u,h.sequenceNumber);Hh(r,f)}),r.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(s){Z("RemoteStore","Failed to raise snapshot:",s),await sl(t,s)}}async function sl(t,e,n){if(!hr(e))throw e;t.k_.add(1),await Lo(t),t.K_.set("Offline"),n||(n=()=>gv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await Yl(t)})}function Tv(t,e){return e().catch(n=>sl(t,n,e))}async function Xl(t){const e=me(t),n=Ms(e);let s=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;j1(e);)try{const i=await C1(e.localStore,s);if(i===null){e.B_.length===0&&n.a_();break}s=i.batchId,q1(e,i)}catch(i){await sl(e,i)}bv(e)&&Iv(e)}function j1(t){return mi(t)&&t.B_.length<10}function q1(t,e){t.B_.push(e);const n=Ms(t);n.s_()&&n.f_&&n.g_(e.mutations)}function bv(t){return mi(t)&&!Ms(t).i_()&&t.B_.length>0}function Iv(t){Ms(t).start()}async function H1(t){Ms(t).w_()}async function W1(t){const e=Ms(t);for(const n of t.B_)e.g_(n.mutations)}async function K1(t,e,n){const s=t.B_.shift(),i=Fh.from(s,e,n);await Tv(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Xl(t)}async function G1(t,e){e&&Ms(t).f_&&await async function(s,i){if(function(o){return DR(o)&&o!==j.ABORTED}(i.code)){const r=s.B_.shift();Ms(s).__(),await Tv(s,()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i)),await Xl(s)}}(t,e),bv(t)&&Iv(t)}async function fm(t,e){const n=me(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const s=mi(n);n.k_.add(3),await Lo(n),s&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await Yl(n)}async function Q1(t,e){const n=me(t);e?(n.k_.delete(2),await Yl(n)):e||(n.k_.add(2),await Lo(n),n.K_.set("Unknown"))}function dr(t){return t.W_||(t.W_=function(n,s,i){const r=me(n);return r.b_(),new O1(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{Ro:U1.bind(null,t),mo:B1.bind(null,t),po:$1.bind(null,t),R_:z1.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),Kh(t)?Wh(t):t.K_.set("Unknown")):(await t.W_.stop(),wv(t))})),t.W_}function Ms(t){return t.G_||(t.G_=function(n,s,i){const r=me(n);return r.b_(),new M1(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:H1.bind(null,t),po:G1.bind(null,t),p_:W1.bind(null,t),y_:K1.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await Xl(t)):(await t.G_.stop(),t.B_.length>0&&(Z("RemoteStore",`Stopping write stream with ${t.B_.length} pending writes`),t.B_=[]))})),t.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Xn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Gh(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qh(t,e){if(ns("AsyncQueue",`${e}: ${t}`),hr(t))return new ie(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{static emptySet(e){return new Fi(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||re.comparator(n.key,s.key):(n,s)=>re.comparator(n.key,s.key),this.keyedMap=$r(),this.sortedSet=new at(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Fi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Fi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(){this.z_=new at(re.comparator)}track(e){const n=e.doc.key,s=this.z_.get(n);s?e.type!==0&&s.type===3?this.z_=this.z_.insert(n,e):e.type===3&&s.type!==1?this.z_=this.z_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.z_=this.z_.remove(n):e.type===1&&s.type===2?this.z_=this.z_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):de():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,s)=>{e.push(s)}),e}}class Zi{constructor(e,n,s,i,r,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Zi(e,n,Fi.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ql(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class X1{constructor(){this.queries=mm(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,s){const i=me(n),r=i.queries;i.queries=mm(),r.forEach((o,a)=>{for(const c of a.J_)c.onError(s)})})(this,new ie(j.ABORTED,"Firestore shutting down"))}}function mm(){return new fi(t=>Hy(t),ql)}async function Yh(t,e){const n=me(t);let s=3;const i=e.query;let r=n.queries.get(i);r?!r.Y_()&&e.Z_()&&(s=2):(r=new Y1,s=e.Z_()?0:1);try{switch(s){case 0:r.H_=await n.onListen(i,!0);break;case 1:r.H_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Qh(o,`Initialization of query '${Ri(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,r),r.J_.push(e),e.ea(n.onlineState),r.H_&&e.ta(r.H_)&&Jh(n)}async function Xh(t,e){const n=me(t),s=e.query;let i=3;const r=n.queries.get(s);if(r){const o=r.J_.indexOf(e);o>=0&&(r.J_.splice(o,1),r.J_.length===0?i=e.Z_()?0:1:!r.Y_()&&e.Z_()&&(i=2))}switch(i){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function J1(t,e){const n=me(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.J_)a.ta(i)&&(s=!0);o.H_=i}}s&&Jh(n)}function Z1(t,e,n){const s=me(t),i=s.queries.get(e);if(i)for(const r of i.J_)r.onError(n);s.queries.delete(e)}function Jh(t){t.X_.forEach(e=>{e.next()})}var Uu,gm;(gm=Uu||(Uu={})).na="default",gm.Cache="cache";class Zh{constructor(e,n,s){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=s||{}}ta(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Zi(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const s=n!=="Offline";return(!this.options.ua||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=Zi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Uu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e){this.key=e}}class Cv{constructor(e){this.key=e}}class ek{constructor(e,n){this.query=e,this.Ea=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=we(),this.mutatedKeys=we(),this.Va=Wy(e),this.ma=new Fi(this.Va)}get fa(){return this.Ea}ga(e,n){const s=n?n.pa:new pm,i=n?n.ma:this.ma;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const m=i.get(h),g=Hl(this.query,f)?f:null,A=!!m&&this.mutatedKeys.has(m.key),R=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let x=!1;m&&g?m.data.isEqual(g.data)?A!==R&&(s.track({type:3,doc:g}),x=!0):this.ya(m,g)||(s.track({type:2,doc:g}),x=!0,(c&&this.Va(g,c)>0||u&&this.Va(g,u)<0)&&(a=!0)):!m&&g?(s.track({type:0,doc:g}),x=!0):m&&!g&&(s.track({type:1,doc:m}),x=!0,(c||u)&&(a=!0)),x&&(g?(o=o.add(g),r=R?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{ma:o,pa:s,ss:a,mutatedKeys:r}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,i){const r=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((h,f)=>function(g,A){const R=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return de()}};return R(g)-R(A)}(h.type,f.type)||this.Va(h.doc,f.doc)),this.wa(s),i=i!=null&&i;const a=n&&!i?this.Sa():[],c=this.Ra.size===0&&this.current&&!i?1:0,u=c!==this.Aa;return this.Aa=c,o.length!==0||u?{snapshot:new Zi(this.query,e.ma,r,o,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),ba:a}:{ba:a}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new pm,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.Ea=this.Ea.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ea=this.Ea.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=we(),this.ma.forEach(s=>{this.Da(s.key)&&(this.Ra=this.Ra.add(s.key))});const n=[];return e.forEach(s=>{this.Ra.has(s)||n.push(new Cv(s))}),this.Ra.forEach(s=>{e.has(s)||n.push(new Av(s))}),n}va(e){this.Ea=e.Es,this.Ra=we();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return Zi.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class tk{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class nk{constructor(e){this.key=e,this.Fa=!1}}class sk{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new fi(a=>Hy(a),ql),this.Oa=new Map,this.Na=new Set,this.Ba=new at(re.comparator),this.La=new Map,this.ka=new $h,this.qa={},this.Qa=new Map,this.Ka=Ji.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function ik(t,e,n=!0){const s=Nv(t);let i;const r=s.xa.get(e);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.Ca()):i=await Sv(s,e,n,!0),i}async function rk(t,e){const n=Nv(t);await Sv(n,e,!0,!1)}async function Sv(t,e,n,s){const i=await S1(t.localStore,Dn(e)),r=i.targetId,o=t.sharedClientState.addLocalQueryTarget(r,n);let a;return s&&(a=await ok(t,e,r,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&vv(t.remoteStore,i),a}async function ok(t,e,n,s,i){t.Ua=(f,m,g)=>async function(R,x,F,U){let O=x.view.ga(F);O.ss&&(O=await um(R.localStore,x.query,!1).then(({documents:C})=>x.view.ga(C,O)));const M=U&&U.targetChanges.get(x.targetId),ee=U&&U.targetMismatches.get(x.targetId)!=null,te=x.view.applyChanges(O,R.isPrimaryClient,M,ee);return ym(R,x.targetId,te.ba),te.snapshot}(t,f,m,g);const r=await um(t.localStore,e,!0),o=new ek(e,r.Es),a=o.ga(r.documents),c=Mo.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,c);ym(t,n,u.ba);const h=new tk(e,n,o);return t.xa.set(e,h),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),u.snapshot}async function ak(t,e,n){const s=me(t),i=s.xa.get(e),r=s.Oa.get(i.targetId);if(r.length>1)return s.Oa.set(i.targetId,r.filter(o=>!ql(o,e))),void s.xa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await Fu(s.localStore,i.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(i.targetId),n&&qh(s.remoteStore,i.targetId),Bu(s,i.targetId)}).catch(ur)):(Bu(s,i.targetId),await Fu(s.localStore,i.targetId,!0))}async function lk(t,e){const n=me(t),s=n.xa.get(e),i=n.Oa.get(s.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),qh(n.remoteStore,s.targetId))}async function ck(t,e,n){const s=gk(t);try{const i=await function(o,a){const c=me(o),u=ot.now(),h=a.reduce((g,A)=>g.add(A.key),we());let f,m;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let A=ss(),R=we();return c.hs.getEntries(g,h).next(x=>{A=x,A.forEach((F,U)=>{U.isValidDocument()||(R=R.add(F))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,A)).next(x=>{f=x;const F=[];for(const U of a){const O=RR(U,f.get(U.key).overlayedDocument);O!=null&&F.push(new pi(U.key,O,Fy(O.value.mapValue),Jn.exists(!0)))}return c.mutationQueue.addMutationBatch(g,u,F,a)}).next(x=>{m=x;const F=x.applyToLocalDocumentSet(f,R);return c.documentOverlayCache.saveOverlays(g,x.batchId,F)})}).then(()=>({batchId:m.batchId,changes:Gy(f)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.qa[o.currentUser.toKey()];u||(u=new at(Te)),u=u.insert(a,c),o.qa[o.currentUser.toKey()]=u}(s,i.batchId,n),await Vo(s,i.changes),await Xl(s.remoteStore)}catch(i){const r=Qh(i,"Failed to persist write");n.reject(r)}}async function Rv(t,e){const n=me(t);try{const s=await I1(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.La.get(r);o&&(Ve(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Fa=!0:i.modifiedDocuments.size>0?Ve(o.Fa):i.removedDocuments.size>0&&(Ve(o.Fa),o.Fa=!1))}),await Vo(n,s,e)}catch(s){await ur(s)}}function _m(t,e,n){const s=me(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.xa.forEach((r,o)=>{const a=o.view.ea(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=me(o);c.onlineState=a;let u=!1;c.queries.forEach((h,f)=>{for(const m of f.J_)m.ea(a)&&(u=!0)}),u&&Jh(c)}(s.eventManager,e),i.length&&s.Ma.R_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function uk(t,e,n){const s=me(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.La.get(e),r=i&&i.key;if(r){let o=new at(re.comparator);o=o.insert(r,Dt.newNoDocument(r,fe.min()));const a=we().add(r),c=new Gl(fe.min(),new Map,new at(Te),o,a);await Rv(s,c),s.Ba=s.Ba.remove(r),s.La.delete(e),ed(s)}else await Fu(s.localStore,e,!1).then(()=>Bu(s,e,n)).catch(ur)}async function hk(t,e){const n=me(t),s=e.batch.batchId;try{const i=await b1(n.localStore,e);Pv(n,s,null),kv(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Vo(n,i)}catch(i){await ur(i)}}async function dk(t,e,n){const s=me(t);try{const i=await function(o,a){const c=me(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,a).next(f=>(Ve(f!==null),h=f.keys(),c.mutationQueue.removeMutationBatch(u,f))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(s.localStore,e);Pv(s,e,n),kv(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Vo(s,i)}catch(i){await ur(i)}}function kv(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function Pv(t,e,n){const s=me(t);let i=s.qa[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.qa[s.currentUser.toKey()]=i}}function Bu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Oa.get(e))t.xa.delete(s),n&&t.Ma.Wa(s,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(s=>{t.ka.containsKey(s)||xv(t,s)})}function xv(t,e){t.Na.delete(e.path.canonicalString());const n=t.Ba.get(e);n!==null&&(qh(t.remoteStore,n),t.Ba=t.Ba.remove(e),t.La.delete(n),ed(t))}function ym(t,e,n){for(const s of n)s instanceof Av?(t.ka.addReference(s.key,e),fk(t,s)):s instanceof Cv?(Z("SyncEngine","Document no longer in limbo: "+s.key),t.ka.removeReference(s.key,e),t.ka.containsKey(s.key)||xv(t,s.key)):de()}function fk(t,e){const n=e.key,s=n.path.canonicalString();t.Ba.get(n)||t.Na.has(s)||(Z("SyncEngine","New document in limbo: "+n),t.Na.add(s),ed(t))}function ed(t){for(;t.Na.size>0&&t.Ba.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new re(Ge.fromString(e)),s=t.Ka.next();t.La.set(s,new nk(n)),t.Ba=t.Ba.insert(n,s),vv(t.remoteStore,new Es(Dn(jl(n.path)),s,"TargetPurposeLimboResolution",Ul.oe))}}async function Vo(t,e,n){const s=me(t),i=[],r=[],o=[];s.xa.isEmpty()||(s.xa.forEach((a,c)=>{o.push(s.Ua(c,e,n).then(u=>{var h;if((u||n)&&s.isPrimaryClient){const f=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;s.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){i.push(u);const f=jh.zi(c.targetId,u);r.push(f)}}))}),await Promise.all(o),s.Ma.R_(i),await async function(c,u){const h=me(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>$.forEach(u,m=>$.forEach(m.Wi,g=>h.persistence.referenceDelegate.addReference(f,m.targetId,g)).next(()=>$.forEach(m.Gi,g=>h.persistence.referenceDelegate.removeReference(f,m.targetId,g)))))}catch(f){if(!hr(f))throw f;Z("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const m=f.targetId;if(!f.fromCache){const g=h.us.get(m),A=g.snapshotVersion,R=g.withLastLimboFreeSnapshotVersion(A);h.us=h.us.insert(m,R)}}}(s.localStore,r))}async function pk(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const s=await mv(n.localStore,e);n.currentUser=e,function(r,o){r.Qa.forEach(a=>{a.forEach(c=>{c.reject(new ie(j.CANCELLED,o))})}),r.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Vo(n,s.Ts)}}function mk(t,e){const n=me(t),s=n.La.get(e);if(s&&s.Fa)return we().add(s.key);{let i=we();const r=n.Oa.get(e);if(!r)return i;for(const o of r){const a=n.xa.get(o);i=i.unionWith(a.view.fa)}return i}}function Nv(t){const e=me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Rv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=uk.bind(null,e),e.Ma.R_=J1.bind(null,e.eventManager),e.Ma.Wa=Z1.bind(null,e.eventManager),e}function gk(t){const e=me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dk.bind(null,e),e}class il{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ql(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return T1(this.persistence,new E1,e.initialUser,this.serializer)}ja(e){return new pv(zh.ei,this.serializer)}za(e){return new k1}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}il.provider={build:()=>new il};class _k extends il{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){Ve(this.persistence.referenceDelegate instanceof nl);const s=this.persistence.referenceDelegate.garbageCollector;return new r1(s,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?zt.withCacheSize(this.cacheSizeBytes):zt.DEFAULT;return new pv(s=>nl.ei(s,n),this.serializer)}}class $u{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>_m(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=pk.bind(null,this.syncEngine),await Q1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new X1}()}createDatastore(e){const n=Ql(e.databaseInfo.databaseId),s=function(r){return new D1(r)}(e.databaseInfo);return function(r,o,a,c){return new L1(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,i,r,o,a){return new F1(s,i,r,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>_m(this.syncEngine,n,0),function(){return dm.p()?new dm:new P1}())}createSyncEngine(e,n){return function(i,r,o,a,c,u,h){const f=new sk(i,r,o,a,c,u);return h&&(f.$a=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const r=me(i);Z("RemoteStore","RemoteStore shutting down."),r.k_.add(5),await Lo(r),r.Q_.shutdown(),r.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}$u.provider={build:()=>new $u};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):ns("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e,n,s,i,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Pt.UNAUTHENTICATED,this.clientId=My.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(s,async o=>{Z("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(Z("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Xn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Qh(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Kc(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await mv(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function vm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await vk(t);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(s=>fm(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>fm(e.remoteStore,i)),t._onlineComponents=e}async function vk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Kc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===j.FAILED_PRECONDITION||i.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Gi("Error using user provided cache. Falling back to memory cache: "+n),await Kc(t,new il)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await Kc(t,new _k(void 0));return t._offlineComponents}async function Dv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await vm(t,t._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await vm(t,new $u))),t._onlineComponents}function Ek(t){return Dv(t).then(e=>e.syncEngine)}async function rl(t){const e=await Dv(t),n=e.eventManager;return n.onListen=ik.bind(null,e.syncEngine),n.onUnlisten=ak.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=rk.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=lk.bind(null,e.syncEngine),n}function wk(t,e,n={}){const s=new Xn;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,c,u){const h=new td({next:m=>{h.eu(),o.enqueueAndForget(()=>Xh(r,f));const g=m.docs.has(a);!g&&m.fromCache?u.reject(new ie(j.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&m.fromCache&&c&&c.source==="server"?u.reject(new ie(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new Zh(jl(a.path),h,{includeMetadataChanges:!0,ua:!0});return Yh(r,f)}(await rl(t),t.asyncQueue,e,n,s)),s.promise}function Tk(t,e,n={}){const s=new Xn;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,c,u){const h=new td({next:m=>{h.eu(),o.enqueueAndForget(()=>Xh(r,f)),m.fromCache&&c.source==="server"?u.reject(new ie(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new Zh(a,h,{includeMetadataChanges:!0,ua:!0});return Yh(r,f)}(await rl(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mv(t,e,n){if(!n)throw new ie(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function bk(t,e,n,s){if(e===!0&&s===!0)throw new ie(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function wm(t){if(!re.isDocumentKey(t))throw new ie(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Tm(t){if(re.isDocumentKey(t))throw new ie(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function nd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":de()}function Zn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ie(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=nd(t);throw new ie(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ie(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}bk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ov((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ie(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ie(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ie(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Jl{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bm({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bm(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new OS;switch(s.type){case"firstParty":return new FS(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ie(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Em.get(n);s&&(Z("ComponentProvider","Removing Datastore"),Em.delete(n),s.terminate())}(this),Promise.resolve()}}function Ik(t,e,n,s={}){var i;const r=(t=Zn(t,Jl))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Gi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=Pt.MOCK_USER;else{a=lC(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new ie(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Pt(u)}t._authCredentials=new MS(new Oy(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Fo(this.firestore,e,this._query)}}class Xt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Xt(this.firestore,e,this._key)}}class Rs extends Fo{constructor(e,n,s){super(e,n,jl(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Xt(this.firestore,null,new re(e))}withConverter(e){return new Rs(this.firestore,e,this._path)}}function Lv(t,e,...n){if(t=wn(t),Mv("collection","path",e),t instanceof Jl){const s=Ge.fromString(e,...n);return Tm(s),new Rs(t,null,s)}{if(!(t instanceof Xt||t instanceof Rs))throw new ie(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ge.fromString(e,...n));return Tm(s),new Rs(t.firestore,null,s)}}function Ak(t,e,...n){if(t=wn(t),arguments.length===1&&(e=My.newId()),Mv("doc","path",e),t instanceof Jl){const s=Ge.fromString(e,...n);return wm(s),new Xt(t,null,new re(s))}{if(!(t instanceof Xt||t instanceof Rs))throw new ie(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ge.fromString(e,...n));return wm(s),new Xt(t.firestore,t instanceof Rs?t.converter:null,new re(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new _v(this,"async_queue_retry"),this.fu=()=>{const s=Wc();s&&Z("AsyncQueue","Visibility state changed to "+s.visibilityState),this.r_.Jo()},this.gu=e;const n=Wc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const n=Wc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const n=new Xn;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!hr(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(s=>{this.Au=s,this.Ru=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw ns("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Ru=!1,s))));return this.gu=n,n}enqueueAfterDelay(e,n,s){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const i=Gh.createAndSchedule(this,e,n,s,r=>this.Su(r));return this.Eu.push(i),i}pu(){this.Au&&de()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.Eu)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Eu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.Eu.indexOf(e);this.Eu.splice(n,1)}}function Am(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const i=n;for(const r of s)if(r in i&&typeof i[r]=="function")return!0;return!1}(t,["next","error","complete"])}class er extends Jl{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new Im,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Im(e),this._firestoreClient=void 0,await e}}}function Ck(t,e){const n=typeof t=="object"?t:Ay(),s=typeof t=="string"?t:"(default)",i=TS(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=oC("firestore");r&&Ik(i,...r)}return i}function Zl(t){if(t._terminated)throw new ie(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Sk(t),t._firestoreClient}function Sk(t){var e,n,s;const i=t._freezeSettings(),r=function(a,c,u,h){return new ZS(a,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Ov(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new yk(t._authCredentials,t._appCheckCredentials,t._queue,r,t._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new tr(It.fromBase64String(e))}catch(n){throw new ie(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new tr(It.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ie(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ie(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ie(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,i){if(s.length!==i.length)return!1;for(let r=0;r<s.length;++r)if(s[r]!==i[r])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk=/^__.*__$/;class kk{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new pi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Oo(e,this.data,n,this.fieldTransforms)}}function Fv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de()}}class rd{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Fu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new rd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.xu({path:s,Nu:!1});return i.Bu(e),i}Lu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.xu({path:s,Nu:!1});return i.Fu(),i}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return ol(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Fv(this.Mu)&&Rk.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class Pk{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Ql(e)}$u(e,n,s,i=!1){return new rd({Mu:e,methodName:n,Ku:s,path:Tt.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xk(t){const e=t._freezeSettings(),n=Ql(t._databaseId);return new Pk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Nk(t,e,n,s,i,r={}){const o=t.$u(r.merge||r.mergeFields?2:0,e,n,i);zv("Data must be an object, but it was:",o,s);const a=Bv(s,o);let c,u;if(r.merge)c=new hn(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const f of r.mergeFields){const m=Dk(e,f,n);if(!o.contains(m))throw new ie(j.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Mk(h,m)||h.push(m)}c=new hn(h),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new kk(new sn(a),c,u)}function Uv(t,e){if($v(t=wn(t)))return zv("Unsupported field value:",e,t),Bv(t,e);if(t instanceof Vv)return function(s,i){if(!Fv(i.Mu))throw i.qu(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(s,i){const r=[];let o=0;for(const a of s){let c=Uv(a,i.ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}}(t,e)}return function(s,i){if((s=wn(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return TR(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=ot.fromDate(s);return{timestampValue:tl(i.serializer,r)}}if(s instanceof ot){const r=new ot(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:tl(i.serializer,r)}}if(s instanceof ec)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof tr)return{bytesValue:av(i.serializer,s._byteString)};if(s instanceof Xt){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Bh(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof id)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.qu("VectorValues must only contain numeric values.");return Vh(a.serializer,c)})}}}}}}(s,i);throw i.qu(`Unsupported field value: ${nd(s)}`)}(t,e)}function Bv(t,e){const n={};return Ly(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):di(t,(s,i)=>{const r=Uv(i,e.Ou(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function $v(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ot||t instanceof ec||t instanceof tr||t instanceof Xt||t instanceof Vv||t instanceof id)}function zv(t,e,n){if(!$v(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const s=nd(n);throw s==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+s)}}function Dk(t,e,n){if((e=wn(e))instanceof sd)return e._internalPath;if(typeof e=="string")return jv(t,e);throw ol("Field path arguments must be of type string or ",t,!1,void 0,n)}const Ok=new RegExp("[~\\*/\\[\\]]");function jv(t,e,n){if(e.search(Ok)>=0)throw ol(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new sd(...e.split("."))._internalPath}catch{throw ol(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ol(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new ie(j.INVALID_ARGUMENT,a+t+c)}function Mk(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Lk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Hv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Lk extends qv{data(){return super.data()}}function Hv(t,e){return typeof e=="string"?jv(t,e):e instanceof sd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ie(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vk{convertValue(e,n="none"){switch(Os(e)){case 0:return null;case 1:return e.booleanValue;case 2:return tt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ds(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw de()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return di(e,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertVectorValue(e){var n,s,i;const r=(i=(s=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||s===void 0?void 0:s.values)===null||i===void 0?void 0:i.map(o=>tt(o.doubleValue));return new id(r)}convertGeoPoint(e){return new ec(tt(e.latitude),tt(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=$l(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(bo(e));default:return null}}convertTimestamp(e){const n=Ns(e);return new ot(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ge.fromString(e);Ve(fv(s));const i=new Io(s.get(1),s.get(3)),r=new re(s.popFirst(5));return i.isEqual(n)||ns(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fk(t,e,n){let s;return s=t?t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Kv extends qv{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Na(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Hv("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Na extends Kv{data(e={}){return super.data(e)}}class Gv{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new jr(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Na(this._firestore,this._userDataWriter,s.key,s,new jr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ie(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new Na(i._firestore,i._userDataWriter,a.doc.key,a.doc,new jr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const c=new Na(i._firestore,i._userDataWriter,a.doc.key,a.doc,new jr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:Uk(a.type),doc:c,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Uk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return de()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qv(t){t=Zn(t,Xt);const e=Zn(t.firestore,er);return wk(Zl(e),t._key).then(n=>Yv(e,t,n))}class od extends Vk{constructor(e){super(),this.firestore=e}convertBytes(e){return new tr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Xt(this.firestore,null,n)}}function Bk(t){t=Zn(t,Fo);const e=Zn(t.firestore,er),n=Zl(e),s=new od(e);return Wv(t._query),Tk(n,t._query).then(i=>new Gv(e,s,t,i))}function $k(t,e){const n=Zn(t.firestore,er),s=Ak(t),i=Fk(t.converter,e);return zk(n,[Nk(xk(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,Jn.exists(!1))]).then(()=>s)}function ad(t,...e){var n,s,i;t=wn(t);let r={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Am(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges,source:r.source};if(Am(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(s=f.error)===null||s===void 0?void 0:s.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let c,u,h;if(t instanceof Xt)u=Zn(t.firestore,er),h=jl(t._key.path),c={next:f=>{e[o]&&e[o](Yv(u,t,f))},error:e[o+1],complete:e[o+2]};else{const f=Zn(t,Fo);u=Zn(f.firestore,er),h=f._query;const m=new od(u);c={next:g=>{e[o]&&e[o](new Gv(u,m,f,g))},error:e[o+1],complete:e[o+2]},Wv(t._query)}return function(m,g,A,R){const x=new td(R),F=new Zh(g,x,A);return m.asyncQueue.enqueueAndForget(async()=>Yh(await rl(m),F)),()=>{x.eu(),m.asyncQueue.enqueueAndForget(async()=>Xh(await rl(m),F))}}(Zl(u),h,a,c)}function zk(t,e){return function(s,i){const r=new Xn;return s.asyncQueue.enqueueAndForget(async()=>ck(await Ek(s),i,r)),r.promise}(Zl(t),e)}function Yv(t,e,n){const s=n.docs.get(e._key),i=new od(t);return new Kv(t,i,e._key,s,new jr(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){cr=i})(lr),Mn(new Tn("firestore",(s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),a=new er(new LS(s.getProvider("auth-internal")),new BS(s.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ie(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Io(u.options.projectId,h)}(o,i),o);return r=Object.assign({useFetchStreams:n},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),Yt($p,"4.7.6",e),Yt($p,"4.7.6","esm2017")})();function Xv(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Jv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jk=Jv,Zv=new ar("auth","Firebase",Jv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al=new Do("@firebase/auth");function qk(t,...e){al.logLevel<=ve.WARN&&al.warn(`Auth (${lr}): ${t}`,...e)}function Da(t,...e){al.logLevel<=ve.ERROR&&al.error(`Auth (${lr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(t,...e){throw ld(t,...e)}function eE(t,...e){return ld(t,...e)}function tE(t,e,n){const s=Object.assign(Object.assign({},jk()),{[e]:n});return new ar("auth","Firebase",s).create(e,{appName:t.name})}function Oa(t){return tE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ld(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Zv.create(t,...e)}function De(t,e,...n){if(!t)throw ld(e,...n)}function so(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Da(e),new Error(e)}function ll(t,e){t||so(e)}function Hk(){return Sm()==="http:"||Sm()==="https:"}function Sm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Hk()||hC()||"connection"in navigator)?navigator.onLine:!0}function Kk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,n){this.shortDelay=e,this.longDelay=n,ll(n>e,"Short delay should be less than long delay!"),this.isMobile=kh()||vy()}get(){return Wk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gk(t,e){ll(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;so("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;so("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;so("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk=new Uo(3e4,6e4);function sE(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function tc(t,e,n,s,i={}){return iE(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Ph(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},r);return uC()||(u.referrerPolicy="no-referrer"),nE.fetch()(rE(t,t.config.apiHost,n,a),u)})}async function iE(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Qk),e);try{const i=new Xk(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw _a(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw _a(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw _a(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw _a(t,"user-disabled",o);const h=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw tE(t,h,u);Cm(t,h)}}catch(i){if(i instanceof os)throw i;Cm(t,"network-request-failed",{message:String(i)})}}function rE(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Gk(t.config,i):`${t.config.apiScheme}://${i}`}class Xk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(eE(this.auth,"network-request-failed")),Yk.get())})}}function _a(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=eE(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jk(t,e){return tc(t,"POST","/v1/accounts:delete",e)}async function oE(t,e){return tc(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Zk(t,e=!1){const n=wn(t),s=await n.getIdToken(e),i=aE(s);De(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:io(Gc(i.auth_time)),issuedAtTime:io(Gc(i.iat)),expirationTime:io(Gc(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Gc(t){return Number(t)*1e3}function aE(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Da("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ka(n);return i?JSON.parse(i):(Da("Failed to decode base64 JWT payload"),null)}catch(i){return Da("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Rm(t){const e=aE(t);return De(e,"internal-error"),De(typeof e.exp<"u","internal-error"),De(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zu(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof os&&eP(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function eP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=io(this.lastLoginAt),this.creationTime=io(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cl(t){var e;const n=t.auth,s=await t.getIdToken(),i=await zu(t,oE(n,{idToken:s}));De(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?lE(r.providerUserInfo):[],a=sP(t.providerData,o),c=t.isAnonymous,u=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),h=c?u:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new ju(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function nP(t){const e=wn(t);await cl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sP(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function lE(t){return t.map(e=>{var{providerId:n}=e,s=Xv(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iP(t,e){const n=await iE(t,{},async()=>{const s=Ph({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=rE(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",nE.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function rP(t,e){return tc(t,"POST","/v2/accounts:revokeToken",sE(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){De(e.idToken,"internal-error"),De(typeof e.idToken<"u","internal-error"),De(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){De(e.length!==0,"internal-error");const n=Rm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(De(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await iP(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Ui;return s&&(De(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(De(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(De(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ui,this.toJSON())}_performRefresh(){return so("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(t,e){De(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ws{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Xv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ju(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await zu(this,this.stsTokenManager.getToken(this.auth,e));return De(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Zk(this,e)}reload(){return nP(this)}_assign(e){this!==e&&(De(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ws(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){De(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await cl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ur(this.auth.app))return Promise.reject(Oa(this.auth));const e=await this.getIdToken();return await zu(this,Jk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,c,u,h;const f=(s=n.displayName)!==null&&s!==void 0?s:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,F=(u=n.createdAt)!==null&&u!==void 0?u:void 0,U=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:O,emailVerified:M,isAnonymous:ee,providerData:te,stsTokenManager:C}=n;De(O&&C,e,"internal-error");const y=Ui.fromJSON(this.name,C);De(typeof O=="string",e,"internal-error"),ms(f,e.name),ms(m,e.name),De(typeof M=="boolean",e,"internal-error"),De(typeof ee=="boolean",e,"internal-error"),ms(g,e.name),ms(A,e.name),ms(R,e.name),ms(x,e.name),ms(F,e.name),ms(U,e.name);const v=new ws({uid:O,auth:e,email:m,emailVerified:M,displayName:f,isAnonymous:ee,photoURL:A,phoneNumber:g,tenantId:R,stsTokenManager:y,createdAt:F,lastLoginAt:U});return te&&Array.isArray(te)&&(v.providerData=te.map(I=>Object.assign({},I))),x&&(v._redirectEventId=x),v}static async _fromIdTokenResponse(e,n,s=!1){const i=new Ui;i.updateFromServerResponse(n);const r=new ws({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await cl(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];De(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?lE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new Ui;a.updateFromIdToken(s);const c=new ws({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new ju(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km=new Map;function ei(t){ll(t instanceof Function,"Expected a class definition");let e=km.get(t);return e?(ll(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,km.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}cE.type="NONE";const Pm=cE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(t,e,n){return`firebase:${t}:${e}:${n}`}class Bi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Qc(this.userKey,i.apiKey,r),this.fullPersistenceKey=Qc("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ws._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Bi(ei(Pm),e,s);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||ei(Pm);const o=Qc(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const f=ws._fromJSON(e,h);u!==r&&(a=f),r=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Bi(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new Bi(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cP(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(oP(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hP(e))return"Blackberry";if(dP(e))return"Webos";if(aP(e))return"Safari";if((e.includes("chrome/")||lP(e))&&!e.includes("edge/"))return"Chrome";if(uP(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function oP(t=En()){return/firefox\//i.test(t)}function aP(t=En()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lP(t=En()){return/crios\//i.test(t)}function cP(t=En()){return/iemobile/i.test(t)}function uP(t=En()){return/android/i.test(t)}function hP(t=En()){return/blackberry/i.test(t)}function dP(t=En()){return/webos/i.test(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(t,e=[]){let n;switch(t){case"Browser":n=xm(En());break;case"Worker":n=`${xm(En())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${lr}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pP(t,e={}){return tc(t,"GET","/v2/passwordPolicy",sE(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP=6;class gP{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:mP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nm(this),this.idTokenSubscription=new Nm(this),this.beforeStateQueue=new fP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ei(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Bi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await oE(this,{idToken:e}),s=await ws._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ur(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return De(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await cl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Kk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ur(this.app))return Promise.reject(Oa(this));const n=e?wn(e):null;return n&&De(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&De(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ur(this.app)?Promise.reject(Oa(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ur(this.app)?Promise.reject(Oa(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ei(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await pP(this),n=new gP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ar("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await rP(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ei(e)||this._popupRedirectResolver;De(n,this,"argument-error"),this.redirectPersistenceManager=await Bi.create(this,[ei(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(De(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return De(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=uE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&qk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function yP(t){return wn(t)}class Nm{constructor(e){this.auth=e,this.observer=null,this.addObserver=wC(n=>this.observer=n)}get next(){return De(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function vP(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ei);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}new Uo(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uo(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uo(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uo(5e3,15e3);var Dm="@firebase/auth",Om="1.8.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){De(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function TP(t){Mn(new Tn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;De(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uE(t)},u=new _P(s,i,r,c);return vP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Mn(new Tn("auth-internal",e=>{const n=yP(e.getProvider("auth").getImmediate());return(s=>new EP(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yt(Dm,Om,wP(t)),Yt(Dm,Om,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP=5*60;aC("authIdTokenMaxAge");TP("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IP=new Map,AP={activated:!1,tokenObservers:[]};function bn(t){return IP.get(t)||Object.assign({},AP)}const Mm={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Eo,this.pending.promise.catch(n=>{}),await SP(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Eo,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function SP(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},ul=new ar("appCheck","AppCheck",RP);function hE(t){if(!bn(t).activated)throw ul.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kP="firebase-app-check-database",PP=1,qu="firebase-app-check-store";let ya=null;function xP(){return ya||(ya=new Promise((t,e)=>{try{const n=indexedDB.open(kP,PP);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(ul.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(qu,{keyPath:"compositeKey"})}}}catch(n){e(ul.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),ya)}function NP(t,e){return DP(OP(t),e)}async function DP(t,e){const s=(await xP()).transaction(qu,"readwrite"),r=s.objectStore(qu).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=c=>{o()},s.onerror=c=>{var u;a(ul.create("storage-set",{originalErrorMessage:(u=c.target.error)===null||u===void 0?void 0:u.message}))}})}function OP(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu=new Do("@firebase/app-check");function Lm(t,e){return Ey()?NP(t,e).catch(n=>{Hu.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP={error:"UNKNOWN_ERROR"};function LP(t){return Ll.encodeString(JSON.stringify(t),!1)}async function Wu(t,e=!1){const n=t.app;hE(n);const s=bn(n);let i=s.token,r;if(i&&!qr(i)&&(s.token=void 0,i=void 0),!i){const c=await s.cachedTokenPromise;c&&(qr(c)?i=c:await Lm(n,void 0))}if(!e&&i&&qr(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await bn(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?Hu.warn(c.message):Hu.error(c),r=c}let a;return i?r?qr(i)?a={token:i.token,internalError:r}:a=Fm(r):(a={token:i.token},s.token=i,await Lm(n,i)):a=Fm(r),o&&BP(n,a),a}async function VP(t){const e=t.app;hE(e);const{provider:n}=bn(e);{const{token:s}=await n.getToken();return{token:s}}}function FP(t,e,n,s){const{app:i}=t,r=bn(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&qr(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),Vm(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>Vm(t))}function dE(t,e){const n=bn(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function Vm(t){const{app:e}=t,n=bn(e);let s=n.tokenRefresher;s||(s=UP(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function UP(t){const{app:e}=t;return new CP(async()=>{const n=bn(e);let s;if(n.token?s=await Wu(t,!0):s=await Wu(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=bn(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},Mm.RETRIAL_MIN_WAIT,Mm.RETRIAL_MAX_WAIT)}function BP(t,e){const n=bn(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function qr(t){return t.expireTimeMillis-Date.now()>0}function Fm(t){return{token:LP(MP),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=bn(this.app);for(const n of e)dE(this.app,n.next);return Promise.resolve()}}function zP(t,e){return new $P(t,e)}function jP(t){return{getToken:e=>Wu(t,e),getLimitedUseToken:()=>VP(t),addTokenListener:e=>FP(t,"INTERNAL",e),removeTokenListener:e=>dE(t.app,e)}}const qP="@firebase/app-check",HP="0.8.11",WP="app-check",Um="app-check-internal";function KP(){Mn(new Tn(WP,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return zP(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Um).initialize()})),Mn(new Tn(Um,t=>{const e=t.getProvider("app-check").getImmediate();return jP(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Yt(qP,HP)}KP();var GP="firebase",QP="11.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt(GP,QP,"app");const fE=Symbol("firebaseApp");function pE(t){return Ah()&&mn(fE,null)||Ay(t)}const kn=()=>{};function cd(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function YP(t,e,n){const s=(""+e).split("."),i=s.pop(),r=s.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(i),1,n):r[i]=n}function gi(t){return!!t&&typeof t=="object"}const XP=Object.prototype;function JP(t){return gi(t)&&Object.getPrototypeOf(t)===XP}function ud(t){return gi(t)&&t.type==="document"}function ZP(t){return gi(t)&&t.type==="collection"}function ex(t){return ud(t)||ZP(t)}function tx(t){return gi(t)&&t.type==="query"}function nx(t){return gi(t)&&"ref"in t}function sx(t){return gi(t)&&typeof t.bucket=="string"}function ix(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const rx=Symbol.for("v-scx");function ox(){return!!mn(rx,0)}var Bm={};const $m="@firebase/database",zm="1.0.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mE="";function ax(t){mE=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),wt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:wo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return as(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new lx(e)}}catch{}return new cx},ti=gE("localStorage"),ux=gE("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=new Do("@firebase/database"),hx=function(){let t=1;return function(){return t++}}(),_E=function(t){const e=AC(t),n=new EC;n.update(e);const s=n.digest();return Ll.encodeByteArray(s)},Bo=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Bo.apply(null,s):typeof s=="object"?e+=wt(s):e+=s,e+=" "}return e};let ro=null,jm=!0;const dx=function(t,e){Q(!0,"Can't turn on custom loggers persistently."),$i.logLevel=ve.VERBOSE,ro=$i.log.bind($i)},Ot=function(...t){if(jm===!0&&(jm=!1,ro===null&&ux.get("logging_enabled")===!0&&dx()),ro){const e=Bo.apply(null,t);ro(e)}},$o=function(t){return function(...e){Ot(t,...e)}},Ku=function(...t){const e="FIREBASE INTERNAL ERROR: "+Bo(...t);$i.error(e)},ri=function(...t){const e=`FIREBASE FATAL ERROR: ${Bo(...t)}`;throw $i.error(e),new Error(e)},Jt=function(...t){const e="FIREBASE WARNING: "+Bo(...t);$i.warn(e)},fx=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Jt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},yE=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},px=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},nr="[MIN_NAME]",oi="[MAX_NAME]",fr=function(t,e){if(t===e)return 0;if(t===nr||e===oi)return-1;if(e===nr||t===oi)return 1;{const n=qm(t),s=qm(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},mx=function(t,e){return t===e?0:t<e?-1:1},Dr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+wt(e))},hd=function(t){if(typeof t!="object"||t===null)return wt(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=wt(e[s]),n+=":",n+=hd(t[e[s]]);return n+="}",n},vE=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function ln(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const EE=function(t){Q(!yE(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const u=[];for(c=n;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(i?1:0),u.reverse();const h=u.join("");let f="";for(c=0;c<64;c+=8){let m=parseInt(h.substr(c,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},gx=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},_x=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},yx=new RegExp("^-?(0*)\\d{1,10}$"),vx=-2147483648,Ex=2147483647,qm=function(t){if(yx.test(t)){const e=Number(t);if(e>=vx&&e<=Ex)return e}return null},zo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Jt("Exception was thrown by user callback.",n),e},Math.floor(0))}},wx=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},oo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Jt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ot("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Jt(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="5",wE="v",TE="s",bE="r",IE="f",AE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,CE="ls",SE="p",Gu="ac",RE="websocket",kE="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(e,n,s,i,r=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ti.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ti.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Ax(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function PE(t,e,n){Q(typeof e=="string","typeof type must == string"),Q(typeof n=="object","typeof params must == object");let s;if(e===RE)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===kE)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Ax(t)&&(n.ns=t.namespace);const i=[];return ln(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(){this.counters_={}}incrementCounter(e,n=1){as(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ZA(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc={},Xc={};function fd(t){const e=t.toString();return Yc[e]||(Yc[e]=new Cx),Yc[e]}function Sx(t,e){const n=t.toString();return Xc[n]||(Xc[n]=e()),Xc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&zo(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm="start",kx="close",Px="pLPCommand",xx="pRTLPCB",xE="id",NE="pw",DE="ser",Nx="cb",Dx="seg",Ox="ts",Mx="d",Lx="dframe",OE=1870,ME=30,Vx=OE-ME,Fx=25e3,Ux=3e4;class xi{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=$o(e),this.stats_=fd(n),this.urlFn=c=>(this.appCheckToken&&(c[Gu]=this.appCheckToken),PE(n,kE,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Rx(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Ux)),px(()=>{if(this.isClosed_)return;this.scriptTagHolder=new pd((...r)=>{const[o,a,c,u,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Hm)this.id=a,this.password=c;else if(o===kx)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Hm]="t",s[DE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Nx]=this.scriptTagHolder.uniqueCallbackIdentifier),s[wE]=dd,this.transportSessionId&&(s[TE]=this.transportSessionId),this.lastSessionId&&(s[CE]=this.lastSessionId),this.applicationId&&(s[SE]=this.applicationId),this.appCheckToken&&(s[Gu]=this.appCheckToken),typeof location<"u"&&location.hostname&&AE.test(location.hostname)&&(s[bE]=IE);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){xi.forceAllow_=!0}static forceDisallow(){xi.forceDisallow_=!0}static isAvailable(){return xi.forceAllow_?!0:!xi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!gx()&&!_x()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=wt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=gy(n),i=vE(s,Vx);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Lx]="t",s[xE]=e,s[NE]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=wt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class pd{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=hx(),window[Px+this.uniqueCallbackIdentifier]=e,window[xx+this.uniqueCallbackIdentifier]=n,this.myIFrame=pd.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ot("frame writing exception"),a.stack&&Ot(a.stack),Ot(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ot("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[xE]=this.myID,e[NE]=this.myPW,e[DE]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ME+s.length<=OE;){const o=this.pendingSegs.shift();s=s+"&"+Dx+i+"="+o.seg+"&"+Ox+i+"="+o.ts+"&"+Mx+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Fx)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ot("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bx=16384,$x=45e3;let hl=null;typeof MozWebSocket<"u"?hl=MozWebSocket:typeof WebSocket<"u"&&(hl=WebSocket);class Pn{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=$o(this.connId),this.stats_=fd(n),this.connURL=Pn.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[wE]=dd,typeof location<"u"&&location.hostname&&AE.test(location.hostname)&&(o[bE]=IE),n&&(o[TE]=n),s&&(o[CE]=s),i&&(o[Gu]=i),r&&(o[SE]=r),PE(e,RE,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ti.set("previous_websocket_failure",!0);try{let s;dC(),this.mySock=new hl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Pn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&hl!==null&&!Pn.forceDisallow_}static previouslyFailed(){return ti.isInMemoryStorage||ti.get("previous_websocket_failure")===!0}markConnectionHealthy(){ti.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=wo(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Q(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=wt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=vE(n,Bx);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor($x))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Pn.responsesRequiredToBeHealthy=2;Pn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{static get ALL_TRANSPORTS(){return[xi,Pn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Pn.isAvailable();let s=n&&!Pn.previouslyFailed();if(e.webSocketOnly&&(n||Jt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Pn];else{const i=this.transports_=[];for(const r of Ro.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Ro.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ro.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zx=6e4,jx=5e3,qx=10*1024,Hx=100*1024,Jc="t",Wm="d",Wx="s",Km="r",Kx="e",Gm="o",Qm="a",Ym="n",Xm="p",Gx="h";class Qx{constructor(e,n,s,i,r,o,a,c,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=$o("c:"+this.id+":"),this.transportManager_=new Ro(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=oo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Hx?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>qx?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Jc in e){const n=e[Jc];n===Qm?this.upgradeIfSecondaryHealthy_():n===Km?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Gm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Dr("t",e),s=Dr("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Xm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Qm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ym,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Dr("t",e),s=Dr("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Dr(Jc,e);if(Wm in e){const s=e[Wm];if(n===Gx){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Ym){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Wx?this.onConnectionShutdown_(s):n===Km?this.onReset_(s):n===Kx?Ku("Server Error: "+s):n===Gm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ku("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),dd!==s&&Jt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),oo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(zx))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):oo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(jx))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Xm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ti.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e){this.allowedEvents_=e,this.listeners_={},Q(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){Q(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl extends VE{static getInstance(){return new dl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!kh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return Q(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm=32,Zm=768;class Ke{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ue(){return new Ke("")}function Se(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ls(t){return t.pieces_.length-t.pieceNum_}function He(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ke(t.pieces_,e)}function FE(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Yx(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function UE(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function BE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ke(e,0)}function pt(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Ke)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Ke(n,0)}function be(t){return t.pieceNum_>=t.pieces_.length}function rn(t,e){const n=Se(t),s=Se(e);if(n===null)return e;if(n===s)return rn(He(t),He(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function $E(t,e){if(Ls(t)!==Ls(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function dn(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Ls(t)>Ls(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Xx{constructor(e,n){this.errorPrefix_=n,this.parts_=UE(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Fl(this.parts_[s]);zE(this)}}function Jx(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Fl(e),zE(t)}function Zx(t){const e=t.parts_.pop();t.byteLength_-=Fl(e),t.parts_.length>0&&(t.byteLength_-=1)}function zE(t){if(t.byteLength_>Zm)throw new Error(t.errorPrefix_+"has a key path longer than "+Zm+" bytes ("+t.byteLength_+").");if(t.parts_.length>Jm)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Jm+") or object contains a cycle "+Xs(t))}function Xs(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md extends VE{static getInstance(){return new md}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return Q(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=1e3,eN=60*5*1e3,eg=30*1e3,tN=1.3,nN=3e4,sN="server_kill",tg=3;class es extends LE{constructor(e,n,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=es.nextPersistentConnectionId_++,this.log_=$o("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Or,this.maxReconnectDelay_=eN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");md.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&dl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(wt(r)),Q(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Eo,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),Q(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Q(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,u=a.s;es.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&as(e,"w")){const s=Ki(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Jt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||vC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=eg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=yC(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),Q(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+wt(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ku("Unrecognized action received from server: "+wt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Q(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Or,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Or,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>nN&&(this.reconnectDelay_=Or),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*tN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+es.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},u=function(f){Q(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:c,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Ot("getToken() completed but was canceled"):(Ot("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new Qx(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{Jt(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(sN)},r))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Jt(f),c())}}}interrupt(e){Ot("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ot("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Pp(this.interruptReasons_)&&(this.reconnectDelay_=Or,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>hd(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Ke(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ot("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=tg&&(this.reconnectDelay_=eg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ot("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=tg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+mE.replace(/\./g,"-")]=1,kh()?e["framework.cordova"]=1:vy()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=dl.getInstance().currentlyOnline();return Pp(this.interruptReasons_)&&e}}es.nextPersistentConnectionId_=0;es.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ke(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ke(nr,e),i=new ke(nr,n);return this.compare(s,i)!==0}minPost(){return ke.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let va;class jE extends nc{static get __EMPTY_NODE(){return va}static set __EMPTY_NODE(e){va=e}compare(e,n){return fr(e.name,n.name)}isDefinedOn(e){throw or("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ke.MIN}maxPost(){return new ke(oi,va)}makePost(e,n){return Q(typeof e=="string","KeyIndex indexValue must always be a string."),new ke(e,va)}toString(){return".key"}}const zi=new jE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ft{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ft.RED,this.left=i??Ht.EMPTY_NODE,this.right=r??Ht.EMPTY_NODE}copy(e,n,s,i,r){return new ft(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ht.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ht.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ft.RED=!0;ft.BLACK=!1;class iN{copy(e,n,s,i,r){return this}insert(e,n,s){return new ft(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ht{constructor(e,n=Ht.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ht(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ft.BLACK,null,null))}remove(e){return new Ht(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ft.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ea(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ea(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ea(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ea(this.root_,null,this.comparator_,!0,e)}}Ht.EMPTY_NODE=new iN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rN(t,e){return fr(t.name,e.name)}function gd(t,e){return fr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qu;function oN(t){Qu=t}const qE=function(t){return typeof t=="number"?"number:"+EE(t):"string:"+t},HE=function(t){if(t.isLeafNode()){const e=t.val();Q(typeof e=="string"||typeof e=="number"||typeof e=="object"&&as(e,".sv"),"Priority must be a string or number.")}else Q(t===Qu||t.isEmpty(),"priority of unexpected type.");Q(t===Qu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ng;class ht{static set __childrenNodeConstructor(e){ng=e}static get __childrenNodeConstructor(){return ng}constructor(e,n=ht.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,Q(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),HE(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ht(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ht.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return be(e)?this:Se(e)===".priority"?this.priorityNode_:ht.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ht.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Se(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(Q(s!==".priority"||Ls(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ht.__childrenNodeConstructor.EMPTY_NODE.updateChild(He(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+qE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=EE(this.value_):e+=this.value_,this.lazyHash_=_E(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ht.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ht.__childrenNodeConstructor?-1:(Q(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ht.VALUE_TYPE_ORDER.indexOf(n),r=ht.VALUE_TYPE_ORDER.indexOf(s);return Q(i>=0,"Unknown leaf type: "+n),Q(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ht.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let WE,KE;function aN(t){WE=t}function lN(t){KE=t}class cN extends nc{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?fr(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ke.MIN}maxPost(){return new ke(oi,new ht("[PRIORITY-POST]",KE))}makePost(e,n){const s=WE(e);return new ke(n,new ht("[PRIORITY-POST]",s))}toString(){return".priority"}}const Lt=new cN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN=Math.log(2);class hN{constructor(e){const n=r=>parseInt(Math.log(r)/uN,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const fl=function(t,e,n,s){t.sort(e);const i=function(c,u){const h=u-c;let f,m;if(h===0)return null;if(h===1)return f=t[c],m=n?n(f):f,new ft(m,f.node,ft.BLACK,null,null);{const g=parseInt(h/2,10)+c,A=i(c,g),R=i(g+1,u);return f=t[g],m=n?n(f):f,new ft(m,f.node,ft.BLACK,A,R)}},r=function(c){let u=null,h=null,f=t.length;const m=function(A,R){const x=f-A,F=f;f-=A;const U=i(x+1,F),O=t[x],M=n?n(O):O;g(new ft(M,O.node,R,null,U))},g=function(A){u?(u.left=A,u=A):(h=A,u=A)};for(let A=0;A<c.count;++A){const R=c.nextBitIsOne(),x=Math.pow(2,c.count-(A+1));R?m(x,ft.BLACK):(m(x,ft.BLACK),m(x,ft.RED))}return h},o=new hN(t.length),a=r(o);return new Ht(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zc;const Mr={};class Yn{static get Default(){return Q(Lt,"ChildrenNode.ts has not been loaded"),Zc=Zc||new Yn({".priority":Mr},{".priority":Lt}),Zc}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Ki(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ht?n:null}hasIndex(e){return as(this.indexSet_,e.toString())}addIndex(e,n){Q(e!==zi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(ke.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=fl(s,e.getCompare()):a=Mr;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const h=Object.assign({},this.indexes_);return h[c]=a,new Yn(h,u)}addToIndexes(e,n){const s=Ga(this.indexes_,(i,r)=>{const o=Ki(this.indexSet_,r);if(Q(o,"Missing index implementation for "+r),i===Mr)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(ke.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&a.push(u),u=c.getNext();return a.push(e),fl(a,o.getCompare())}else return Mr;else{const a=n.get(e.name);let c=i;return a&&(c=c.remove(new ke(e.name,a))),c.insert(e,e.node)}});return new Yn(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ga(this.indexes_,i=>{if(i===Mr)return i;{const r=n.get(e.name);return r?i.remove(new ke(e.name,r)):i}});return new Yn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lr;class Le{static get EMPTY_NODE(){return Lr||(Lr=new Le(new Ht(gd),null,Yn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&HE(this.priorityNode_),this.children_.isEmpty()&&Q(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Lr}updatePriority(e){return this.children_.isEmpty()?this:new Le(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Lr:n}}getChild(e){const n=Se(e);return n===null?this:this.getImmediateChild(n).getChild(He(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(Q(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ke(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Lr:this.priorityNode_;return new Le(i,o,r)}}updateChild(e,n){const s=Se(e);if(s===null)return n;{Q(Se(e)!==".priority"||Ls(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(He(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Lt,(o,a)=>{n[o]=a.val(e),s++,r&&Le.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+qE(this.getPriority().val())+":"),this.forEachChild(Lt,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":_E(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ke(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ke(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ke(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ke.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ke.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===jo?-1:0}withIndex(e){if(e===zi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Le(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===zi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Lt),i=n.getIterator(Lt);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===zi?null:this.indexMap_.get(e.toString())}}Le.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class dN extends Le{constructor(){super(new Ht(gd),Le.EMPTY_NODE,Yn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Le.EMPTY_NODE}isEmpty(){return!1}}const jo=new dN;Object.defineProperties(ke,{MIN:{value:new ke(nr,Le.EMPTY_NODE)},MAX:{value:new ke(oi,jo)}});jE.__EMPTY_NODE=Le.EMPTY_NODE;ht.__childrenNodeConstructor=Le;oN(jo);lN(jo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN=!0;function Mt(t,e=null){if(t===null)return Le.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),Q(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ht(n,Mt(e))}if(!(t instanceof Array)&&fN){const n=[];let s=!1;if(ln(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=Mt(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new ke(o,c)))}}),n.length===0)return Le.EMPTY_NODE;const r=fl(n,rN,o=>o.name,gd);if(s){const o=fl(n,Lt.getCompare());return new Le(r,Mt(e),new Yn({".priority":o},{".priority":Lt}))}else return new Le(r,Mt(e),Yn.Default)}else{let n=Le.EMPTY_NODE;return ln(t,(s,i)=>{if(as(t,s)&&s.substring(0,1)!=="."){const r=Mt(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Mt(e))}}aN(Mt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN extends nc{constructor(e){super(),this.indexPath_=e,Q(!be(e)&&Se(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?fr(e.name,n.name):r}makePost(e,n){const s=Mt(e),i=Le.EMPTY_NODE.updateChild(this.indexPath_,s);return new ke(n,i)}maxPost(){const e=Le.EMPTY_NODE.updateChild(this.indexPath_,jo);return new ke(oi,e)}toString(){return UE(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN extends nc{compare(e,n){const s=e.node.compareTo(n.node);return s===0?fr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ke.MIN}maxPost(){return ke.MAX}makePost(e,n){const s=Mt(e);return new ke(n,s)}toString(){return".value"}}const gN=new mN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _N(t){return{type:"value",snapshotNode:t}}function yN(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function vN(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function sg(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function EN(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Lt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return Q(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Q(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:nr}hasEnd(){return this.endSet_}getIndexEndValue(){return Q(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Q(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:oi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return Q(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Lt}copy(){const e=new _d;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ig(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Lt?n="$priority":t.index_===gN?n="$value":t.index_===zi?n="$key":(Q(t.index_ instanceof pN,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=wt(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=wt(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+wt(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=wt(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+wt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function rg(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Lt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl extends LE{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(Q(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=$o("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=pl.getListenId_(e,s),a={};this.listens_[o]=a;const c=ig(e._queryParams);this.restRequest_(r+".json",c,(u,h)=>{let f=h;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(r,f,!1,s),Ki(this.listens_,o)===a){let m;u?u===401?m="permission_denied":m="rest_error:"+u:m="ok",i(m,null)}})}unlisten(e,n){const s=pl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=ig(e._queryParams),s=e._path.toString(),i=new Eo;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ph(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=wo(a.responseText)}catch{Jt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&Jt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{constructor(){this.rootNode_=Le.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(){return{value:null,children:new Map}}function GE(t,e,n){if(be(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=Se(e);t.children.has(s)||t.children.set(s,ml());const i=t.children.get(s);e=He(e),GE(i,e,n)}}function Yu(t,e,n){t.value!==null?n(e,t.value):TN(t,(s,i)=>{const r=new Ke(e.toString()+"/"+s);Yu(i,r,n)})}function TN(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ln(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=10*1e3,IN=30*1e3,AN=5*60*1e3;class CN{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new bN(e);const s=og+(IN-og)*Math.random();oo(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;ln(e,(i,r)=>{r>0&&as(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),oo(this.reportStats_.bind(this),Math.floor(Math.random()*2*AN))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(xn||(xn={}));function QE(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function YE(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function XE(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=xn.ACK_USER_WRITE,this.source=QE()}operationForChild(e){if(be(this.path)){if(this.affectedTree.value!=null)return Q(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ke(e));return new gl(Ue(),n,this.revert)}}else return Q(Se(this.path)===e,"operationForChild called for unrelated child."),new gl(He(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=xn.OVERWRITE}operationForChild(e){return be(this.path)?new ai(this.source,Ue(),this.snap.getImmediateChild(e)):new ai(this.source,He(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=xn.MERGE}operationForChild(e){if(be(this.path)){const n=this.children.subtree(new Ke(e));return n.isEmpty()?null:n.value?new ai(this.source,Ue(),n.value):new ko(this.source,Ue(),n)}else return Q(Se(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ko(this.source,He(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(be(e))return this.isFullyInitialized()&&!this.filtered_;const n=Se(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function SN(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(EN(o.childName,o.snapshotNode))}),Vr(t,i,"child_removed",e,s,n),Vr(t,i,"child_added",e,s,n),Vr(t,i,"child_moved",r,s,n),Vr(t,i,"child_changed",e,s,n),Vr(t,i,"value",e,s,n),i}function Vr(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,c)=>kN(t,a,c)),o.forEach(a=>{const c=RN(t,a,r);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(c,t.query_))})})}function RN(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function kN(t,e,n){if(e.childName==null||n.childName==null)throw or("Should only compare child_ events.");const s=new ke(e.childName,e.snapshotNode),i=new ke(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JE(t,e){return{eventCache:t,serverCache:e}}function ao(t,e,n,s){return JE(new yd(e,n,s),t.serverCache)}function ZE(t,e,n,s){return JE(t.eventCache,new yd(e,n,s))}function Xu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function li(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eu;const PN=()=>(eu||(eu=new Ht(mx)),eu);class qe{static fromObject(e){let n=new qe(null);return ln(e,(s,i)=>{n=n.set(new Ke(s),i)}),n}constructor(e,n=PN()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ue(),value:this.value};if(be(e))return null;{const s=Se(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(He(e),n);return r!=null?{path:pt(new Ke(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(be(e))return this;{const n=Se(e),s=this.children.get(n);return s!==null?s.subtree(He(e)):new qe(null)}}set(e,n){if(be(e))return new qe(n,this.children);{const s=Se(e),r=(this.children.get(s)||new qe(null)).set(He(e),n),o=this.children.insert(s,r);return new qe(this.value,o)}}remove(e){if(be(e))return this.children.isEmpty()?new qe(null):new qe(null,this.children);{const n=Se(e),s=this.children.get(n);if(s){const i=s.remove(He(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new qe(null):new qe(this.value,r)}else return this}}get(e){if(be(e))return this.value;{const n=Se(e),s=this.children.get(n);return s?s.get(He(e)):null}}setTree(e,n){if(be(e))return n;{const s=Se(e),r=(this.children.get(s)||new qe(null)).setTree(He(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new qe(this.value,o)}}fold(e){return this.fold_(Ue(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(pt(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Ue(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(be(e))return null;{const r=Se(e),o=this.children.get(r);return o?o.findOnPath_(He(e),pt(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ue(),n)}foreachOnPath_(e,n,s){if(be(e))return this;{this.value&&s(n,this.value);const i=Se(e),r=this.children.get(i);return r?r.foreachOnPath_(He(e),pt(n,i),s):new qe(null)}}foreach(e){this.foreach_(Ue(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(pt(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.writeTree_=e}static empty(){return new gn(new qe(null))}}function lo(t,e,n){if(be(e))return new gn(new qe(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=rn(i,e);return r=r.updateChild(o,n),new gn(t.writeTree_.set(i,r))}else{const i=new qe(n),r=t.writeTree_.setTree(e,i);return new gn(r)}}}function ag(t,e,n){let s=t;return ln(n,(i,r)=>{s=lo(s,pt(e,i),r)}),s}function lg(t,e){if(be(e))return gn.empty();{const n=t.writeTree_.setTree(e,new qe(null));return new gn(n)}}function Ju(t,e){return _i(t,e)!=null}function _i(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(rn(n.path,e)):null}function cg(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Lt,(s,i)=>{e.push(new ke(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ke(s,i.value))}),e}function ks(t,e){if(be(e))return t;{const n=_i(t,e);return n!=null?new gn(new qe(n)):new gn(t.writeTree_.subtree(e))}}function Zu(t){return t.writeTree_.isEmpty()}function sr(t,e){return ew(Ue(),t.writeTree_,e)}function ew(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(Q(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=ew(pt(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(pt(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(t,e){return ow(e,t)}function xN(t,e,n,s,i){Q(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=lo(t.visibleWrites,e,n)),t.lastWriteId=s}function NN(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function DN(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);Q(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&ON(a,s.path)?i=!1:dn(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return MN(t),!0;if(s.snap)t.visibleWrites=lg(t.visibleWrites,s.path);else{const a=s.children;ln(a,c=>{t.visibleWrites=lg(t.visibleWrites,pt(s.path,c))})}return!0}else return!1}function ON(t,e){if(t.snap)return dn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&dn(pt(t.path,n),e))return!0;return!1}function MN(t){t.visibleWrites=nw(t.allWrites,LN,Ue()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function LN(t){return t.visible}function nw(t,e,n){let s=gn.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)dn(n,o)?(a=rn(n,o),s=lo(s,a,r.snap)):dn(o,n)&&(a=rn(o,n),s=lo(s,Ue(),r.snap.getChild(a)));else if(r.children){if(dn(n,o))a=rn(n,o),s=ag(s,a,r.children);else if(dn(o,n))if(a=rn(o,n),be(a))s=ag(s,Ue(),r.children);else{const c=Ki(r.children,Se(a));if(c){const u=c.getChild(He(a));s=lo(s,Ue(),u)}}}else throw or("WriteRecord should have .snap or .children")}}return s}function sw(t,e,n,s,i){if(!s&&!i){const r=_i(t.visibleWrites,e);if(r!=null)return r;{const o=ks(t.visibleWrites,e);if(Zu(o))return n;if(n==null&&!Ju(o,Ue()))return null;{const a=n||Le.EMPTY_NODE;return sr(o,a)}}}else{const r=ks(t.visibleWrites,e);if(!i&&Zu(r))return n;if(!i&&n==null&&!Ju(r,Ue()))return null;{const o=function(u){return(u.visible||i)&&(!s||!~s.indexOf(u.writeId))&&(dn(u.path,e)||dn(e,u.path))},a=nw(t.allWrites,o,e),c=n||Le.EMPTY_NODE;return sr(a,c)}}}function VN(t,e,n){let s=Le.EMPTY_NODE;const i=_i(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Lt,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=ks(t.visibleWrites,e);return n.forEachChild(Lt,(o,a)=>{const c=sr(ks(r,new Ke(o)),a);s=s.updateImmediateChild(o,c)}),cg(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=ks(t.visibleWrites,e);return cg(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function FN(t,e,n,s,i){Q(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=pt(e,n);if(Ju(t.visibleWrites,r))return null;{const o=ks(t.visibleWrites,r);return Zu(o)?i.getChild(n):sr(o,i.getChild(n))}}function UN(t,e,n,s){const i=pt(e,n),r=_i(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=ks(t.visibleWrites,i);return sr(o,s.getNode().getImmediateChild(n))}else return null}function BN(t,e){return _i(t.visibleWrites,e)}function $N(t,e,n,s,i,r,o){let a;const c=ks(t.visibleWrites,e),u=_i(c,Ue());if(u!=null)a=u;else if(n!=null)a=sr(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),m=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let g=m.getNext();for(;g&&h.length<i;)f(g,s)!==0&&h.push(g),g=m.getNext();return h}else return[]}function zN(){return{visibleWrites:gn.empty(),allWrites:[],lastWriteId:-1}}function eh(t,e,n,s){return sw(t.writeTree,t.treePath,e,n,s)}function iw(t,e){return VN(t.writeTree,t.treePath,e)}function ug(t,e,n,s){return FN(t.writeTree,t.treePath,e,n,s)}function _l(t,e){return BN(t.writeTree,pt(t.treePath,e))}function jN(t,e,n,s,i,r){return $N(t.writeTree,t.treePath,e,n,s,i,r)}function vd(t,e,n){return UN(t.writeTree,t.treePath,e,n)}function rw(t,e){return ow(pt(t.treePath,e),t.writeTree)}function ow(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;Q(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),Q(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,sg(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,vN(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,yN(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,sg(s,e.snapshotNode,i.oldSnap));else throw or("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const aw=new HN;class Ed{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new yd(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return vd(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:li(this.viewCache_),r=jN(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function WN(t,e){Q(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),Q(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function KN(t,e,n,s,i){const r=new qN;let o,a;if(n.type===xn.OVERWRITE){const u=n;u.source.fromUser?o=th(t,e,u.path,u.snap,s,i,r):(Q(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!be(u.path),o=yl(t,e,u.path,u.snap,s,i,a,r))}else if(n.type===xn.MERGE){const u=n;u.source.fromUser?o=QN(t,e,u.path,u.children,s,i,r):(Q(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=nh(t,e,u.path,u.children,s,i,a,r))}else if(n.type===xn.ACK_USER_WRITE){const u=n;u.revert?o=JN(t,e,u.path,s,i,r):o=YN(t,e,u.path,u.affectedTree,s,i,r)}else if(n.type===xn.LISTEN_COMPLETE)o=XN(t,e,n.path,s,r);else throw or("Unknown operation type: "+n.type);const c=r.getChanges();return GN(e,o,c),{viewCache:o,changes:c}}function GN(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Xu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(_N(Xu(e)))}}function lw(t,e,n,s,i,r){const o=e.eventCache;if(_l(s,n)!=null)return e;{let a,c;if(be(n))if(Q(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=li(e),h=u instanceof Le?u:Le.EMPTY_NODE,f=iw(s,h);a=t.filter.updateFullNode(e.eventCache.getNode(),f,r)}else{const u=eh(s,li(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=Se(n);if(u===".priority"){Q(Ls(n)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const f=ug(s,n,h,c);f!=null?a=t.filter.updatePriority(h,f):a=o.getNode()}else{const h=He(n);let f;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const m=ug(s,n,o.getNode(),c);m!=null?f=o.getNode().getImmediateChild(u).updateChild(h,m):f=o.getNode().getImmediateChild(u)}else f=vd(s,u,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),u,f,h,i,r):a=o.getNode()}}return ao(e,a,o.isFullyInitialized()||be(n),t.filter.filtersNodes())}}function yl(t,e,n,s,i,r,o,a){const c=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(be(n))u=h.updateFullNode(c.getNode(),s,null);else if(h.filtersNodes()&&!c.isFiltered()){const g=c.getNode().updateChild(n,s);u=h.updateFullNode(c.getNode(),g,null)}else{const g=Se(n);if(!c.isCompleteForPath(n)&&Ls(n)>1)return e;const A=He(n),x=c.getNode().getImmediateChild(g).updateChild(A,s);g===".priority"?u=h.updatePriority(c.getNode(),x):u=h.updateChild(c.getNode(),g,x,A,aw,null)}const f=ZE(e,u,c.isFullyInitialized()||be(n),h.filtersNodes()),m=new Ed(i,f,r);return lw(t,f,n,i,m,a)}function th(t,e,n,s,i,r,o){const a=e.eventCache;let c,u;const h=new Ed(i,e,r);if(be(n))u=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=ao(e,u,!0,t.filter.filtersNodes());else{const f=Se(n);if(f===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),s),c=ao(e,u,a.isFullyInitialized(),a.isFiltered());else{const m=He(n),g=a.getNode().getImmediateChild(f);let A;if(be(m))A=s;else{const R=h.getCompleteChild(f);R!=null?FE(m)===".priority"&&R.getChild(BE(m)).isEmpty()?A=R:A=R.updateChild(m,s):A=Le.EMPTY_NODE}if(g.equals(A))c=e;else{const R=t.filter.updateChild(a.getNode(),f,A,m,h,o);c=ao(e,R,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function hg(t,e){return t.eventCache.isCompleteForChild(e)}function QN(t,e,n,s,i,r,o){let a=e;return s.foreach((c,u)=>{const h=pt(n,c);hg(e,Se(h))&&(a=th(t,a,h,u,i,r,o))}),s.foreach((c,u)=>{const h=pt(n,c);hg(e,Se(h))||(a=th(t,a,h,u,i,r,o))}),a}function dg(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function nh(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;be(n)?u=s:u=new qe(null).setTree(n,s);const h=e.serverCache.getNode();return u.children.inorderTraversal((f,m)=>{if(h.hasChild(f)){const g=e.serverCache.getNode().getImmediateChild(f),A=dg(t,g,m);c=yl(t,c,new Ke(f),A,i,r,o,a)}}),u.children.inorderTraversal((f,m)=>{const g=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!h.hasChild(f)&&!g){const A=e.serverCache.getNode().getImmediateChild(f),R=dg(t,A,m);c=yl(t,c,new Ke(f),R,i,r,o,a)}}),c}function YN(t,e,n,s,i,r,o){if(_l(i,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(be(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return yl(t,e,n,c.getNode().getChild(n),i,r,a,o);if(be(n)){let u=new qe(null);return c.getNode().forEachChild(zi,(h,f)=>{u=u.set(new Ke(h),f)}),nh(t,e,n,u,i,r,a,o)}else return e}else{let u=new qe(null);return s.foreach((h,f)=>{const m=pt(n,h);c.isCompleteForPath(m)&&(u=u.set(h,c.getNode().getChild(m)))}),nh(t,e,n,u,i,r,a,o)}}function XN(t,e,n,s,i){const r=e.serverCache,o=ZE(e,r.getNode(),r.isFullyInitialized()||be(n),r.isFiltered());return lw(t,o,n,s,aw,i)}function JN(t,e,n,s,i,r){let o;if(_l(s,n)!=null)return e;{const a=new Ed(s,e,i),c=e.eventCache.getNode();let u;if(be(n)||Se(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=eh(s,li(e));else{const f=e.serverCache.getNode();Q(f instanceof Le,"serverChildren would be complete if leaf node"),h=iw(s,f)}h=h,u=t.filter.updateFullNode(c,h,r)}else{const h=Se(n);let f=vd(s,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=c.getImmediateChild(h)),f!=null?u=t.filter.updateChild(c,h,f,He(n),a,r):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(c,h,Le.EMPTY_NODE,He(n),a,r):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=eh(s,li(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||_l(s,Ue())!=null,ao(e,u,o,t.filter.filtersNodes())}}function ZN(t,e){const n=li(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!be(e)&&!n.getImmediateChild(Se(e)).isEmpty())?n.getChild(e):null}function fg(t,e,n,s){e.type===xn.MERGE&&e.source.queryId!==null&&(Q(li(t.viewCache_),"We should always have a full cache before handling merges"),Q(Xu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=KN(t.processor_,i,e,n,s);return WN(t.processor_,r.viewCache),Q(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,eD(t,r.changes,r.viewCache.eventCache.getNode())}function eD(t,e,n,s){const i=t.eventRegistrations_;return SN(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pg;function tD(t){Q(!pg,"__referenceConstructor has already been defined"),pg=t}function wd(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return Q(r!=null,"SyncTree gave us an op for an invalid query."),fg(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(fg(o,e,n,s));return r}}function Td(t,e){let n=null;for(const s of t.views.values())n=n||ZN(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mg;function nD(t){Q(!mg,"__referenceConstructor has already been defined"),mg=t}class gg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new qe(null),this.pendingWriteTree_=zN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function sD(t,e,n,s,i){return xN(t.pendingWriteTree_,e,n,s,i),i?ic(t,new ai(QE(),e,n)):[]}function Ni(t,e,n=!1){const s=NN(t.pendingWriteTree_,e);if(DN(t.pendingWriteTree_,e)){let r=new qe(null);return s.snap!=null?r=r.set(Ue(),!0):ln(s.children,o=>{r=r.set(new Ke(o),!0)}),ic(t,new gl(s.path,r,n))}else return[]}function sc(t,e,n){return ic(t,new ai(YE(),e,n))}function iD(t,e,n){const s=qe.fromObject(n);return ic(t,new ko(YE(),e,s))}function rD(t,e,n,s){const i=dw(t,s);if(i!=null){const r=fw(i),o=r.path,a=r.queryId,c=rn(o,e),u=new ai(XE(a),c,n);return pw(t,o,u)}else return[]}function oD(t,e,n,s){const i=dw(t,s);if(i){const r=fw(i),o=r.path,a=r.queryId,c=rn(o,e),u=qe.fromObject(n),h=new ko(XE(a),c,u);return pw(t,o,h)}else return[]}function cw(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=rn(o,e),u=Td(a,c);if(u)return u});return sw(i,e,r,n,!0)}function ic(t,e){return uw(e,t.syncPointTree_,null,tw(t.pendingWriteTree_,Ue()))}function uw(t,e,n,s){if(be(t.path))return hw(t,e,n,s);{const i=e.get(Ue());n==null&&i!=null&&(n=Td(i,Ue()));let r=[];const o=Se(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const u=n?n.getImmediateChild(o):null,h=rw(s,o);r=r.concat(uw(a,c,u,h))}return i&&(r=r.concat(wd(i,t,s,n))),r}}function hw(t,e,n,s){const i=e.get(Ue());n==null&&i!=null&&(n=Td(i,Ue()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,u=rw(s,o),h=t.operationForChild(o);h&&(r=r.concat(hw(h,a,c,u)))}),i&&(r=r.concat(wd(i,t,s,n))),r}function dw(t,e){return t.tagToQueryMap.get(e)}function fw(t){const e=t.indexOf("$");return Q(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ke(t.substr(0,e))}}function pw(t,e,n){const s=t.syncPointTree_.get(e);Q(s,"Missing sync point for query tag that we're tracking");const i=tw(t.pendingWriteTree_,e);return wd(s,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new bd(n)}node(){return this.node_}}class Id{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=pt(this.path_,e);return new Id(this.syncTree_,n)}node(){return cw(this.syncTree_,this.path_)}}const aD=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},_g=function(t,e,n){if(!t||typeof t!="object")return t;if(Q(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return lD(t[".sv"],e,n);if(typeof t[".sv"]=="object")return cD(t[".sv"],e);Q(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},lD=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:Q(!1,"Unexpected server value: "+t)}},cD=function(t,e,n){t.hasOwnProperty("increment")||Q(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&Q(!1,"Unexpected increment value: "+s);const i=e.node();if(Q(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},uD=function(t,e,n,s){return Ad(e,new Id(n,t),s)},hD=function(t,e,n){return Ad(t,new bd(e),n)};function Ad(t,e,n){const s=t.getPriority().val(),i=_g(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=_g(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ht(a,Mt(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ht(i))),o.forEachChild(Lt,(a,c)=>{const u=Ad(c,e.getImmediateChild(a),n);u!==c&&(r=r.updateImmediateChild(a,u))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Sd(t,e){let n=e instanceof Ke?e:new Ke(e),s=t,i=Se(n);for(;i!==null;){const r=Ki(s.node.children,i)||{children:{},childCount:0};s=new Cd(i,s,r),n=He(n),i=Se(n)}return s}function pr(t){return t.node.value}function mw(t,e){t.node.value=e,sh(t)}function gw(t){return t.node.childCount>0}function dD(t){return pr(t)===void 0&&!gw(t)}function rc(t,e){ln(t.node.children,(n,s)=>{e(new Cd(n,t,s))})}function _w(t,e,n,s){n&&e(t),rc(t,i=>{_w(i,e,!0)})}function fD(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function qo(t){return new Ke(t.parent===null?t.name:qo(t.parent)+"/"+t.name)}function sh(t){t.parent!==null&&pD(t.parent,t.name,t)}function pD(t,e,n){const s=dD(n),i=as(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,sh(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,sh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mD=/[\[\].#$\/\u0000-\u001F\u007F]/,gD=/[\[\].#$\u0000-\u001F\u007F]/,tu=10*1024*1024,yw=function(t){return typeof t=="string"&&t.length!==0&&!mD.test(t)},_D=function(t){return typeof t=="string"&&t.length!==0&&!gD.test(t)},yD=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),_D(t)},vw=function(t,e,n){const s=n instanceof Ke?new Xx(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Xs(s));if(typeof e=="function")throw new Error(t+"contains a function "+Xs(s)+" with contents = "+e.toString());if(yE(e))throw new Error(t+"contains "+e.toString()+" "+Xs(s));if(typeof e=="string"&&e.length>tu/3&&Fl(e)>tu)throw new Error(t+"contains a string greater than "+tu+" utf8 bytes "+Xs(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(ln(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!yw(o)))throw new Error(t+" contains an invalid key ("+o+") "+Xs(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Jx(s,o),vw(t,a,s),Zx(s)}),i&&r)throw new Error(t+' contains ".value" child '+Xs(s)+" in addition to actual children.")}},vD=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!yw(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!yD(n))throw new Error(IC(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function wD(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!$E(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function yi(t,e,n){wD(t,n),TD(t,s=>dn(s,e)||dn(e,s))}function TD(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(bD(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function bD(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();ro&&Ot("event: "+n.toString()),zo(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ID="repo_interrupt",AD=25;class CD{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ED,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ml(),this.transactionQueueTree_=new Cd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function SD(t,e,n){if(t.stats_=fd(t.repoInfo_),t.forceRestClient_||wx())t.server_=new pl(t.repoInfo_,(s,i,r,o)=>{yg(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>vg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{wt(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new es(t.repoInfo_,e,(s,i,r,o)=>{yg(t,s,i,r,o)},s=>{vg(t,s)},s=>{kD(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Sx(t.repoInfo_,()=>new CN(t.stats_,t.server_)),t.infoData_=new wN,t.infoSyncTree_=new gg({startListening:(s,i,r,o)=>{let a=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(a=sc(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Rd(t,"connected",!1),t.serverSyncTree_=new gg({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,c)=>{const u=o(a,c);yi(t.eventQueue_,s._path,u)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function RD(t){const n=t.infoData_.getNode(new Ke(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ew(t){return aD({timestamp:RD(t)})}function yg(t,e,n,s,i){t.dataUpdateCount++;const r=new Ke(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=Ga(n,u=>Mt(u));o=oD(t.serverSyncTree_,r,c,i)}else{const c=Mt(n);o=rD(t.serverSyncTree_,r,c,i)}else if(s){const c=Ga(n,u=>Mt(u));o=iD(t.serverSyncTree_,r,c)}else{const c=Mt(n);o=sc(t.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=Pd(t,r)),yi(t.eventQueue_,a,o)}function vg(t,e){Rd(t,"connected",e),e===!1&&xD(t)}function kD(t,e){ln(e,(n,s)=>{Rd(t,n,s)})}function Rd(t,e,n){const s=new Ke("/.info/"+e),i=Mt(n);t.infoData_.updateSnapshot(s,i);const r=sc(t.infoSyncTree_,s,i);yi(t.eventQueue_,s,r)}function PD(t){return t.nextWriteId_++}function xD(t){ww(t,"onDisconnectEvents");const e=Ew(t),n=ml();Yu(t.onDisconnect_,Ue(),(i,r)=>{const o=uD(i,r,t.serverSyncTree_,e);GE(n,i,o)});let s=[];Yu(n,Ue(),(i,r)=>{s=s.concat(sc(t.serverSyncTree_,i,r));const o=MD(t,i);Pd(t,o)}),t.onDisconnect_=ml(),yi(t.eventQueue_,Ue(),s)}function ND(t){t.persistentConnection_&&t.persistentConnection_.interrupt(ID)}function ww(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ot(n,...e)}function Tw(t,e,n){return cw(t.serverSyncTree_,e,n)||Le.EMPTY_NODE}function kd(t,e=t.transactionQueueTree_){if(e||oc(t,e),pr(e)){const n=Iw(t,e);Q(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&DD(t,qo(e),n)}else gw(e)&&rc(e,n=>{kd(t,n)})}function DD(t,e,n){const s=n.map(u=>u.currentWriteId),i=Tw(t,e,s);let r=i;const o=i.hash();for(let u=0;u<n.length;u++){const h=n[u];Q(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=rn(e,h.path);r=r.updateChild(f,h.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;t.server_.put(c.toString(),a,u=>{ww(t,"transaction put response",{path:c.toString(),status:u});let h=[];if(u==="ok"){const f=[];for(let m=0;m<n.length;m++)n[m].status=2,h=h.concat(Ni(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&f.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();oc(t,Sd(t.transactionQueueTree_,e)),kd(t,t.transactionQueueTree_),yi(t.eventQueue_,e,h);for(let m=0;m<f.length;m++)zo(f[m])}else{if(u==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Jt("transaction at "+c.toString()+" failed: "+u);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=u}Pd(t,e)}},o)}function Pd(t,e){const n=bw(t,e),s=qo(n),i=Iw(t,n);return OD(t,i,s),s}function OD(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],u=rn(n,c.path);let h=!1,f;if(Q(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,f=c.abortReason,i=i.concat(Ni(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=AD)h=!0,f="maxretry",i=i.concat(Ni(t.serverSyncTree_,c.currentWriteId,!0));else{const m=Tw(t,c.path,o);c.currentInputSnapshot=m;const g=e[a].update(m.val());if(g!==void 0){vw("transaction failed: Data returned ",g,c.path);let A=Mt(g);typeof g=="object"&&g!=null&&as(g,".priority")||(A=A.updatePriority(m.getPriority()));const x=c.currentWriteId,F=Ew(t),U=hD(A,m,F);c.currentOutputSnapshotRaw=A,c.currentOutputSnapshotResolved=U,c.currentWriteId=PD(t),o.splice(o.indexOf(x),1),i=i.concat(sD(t.serverSyncTree_,c.path,U,c.currentWriteId,c.applyLocally)),i=i.concat(Ni(t.serverSyncTree_,x,!0))}else h=!0,f="nodata",i=i.concat(Ni(t.serverSyncTree_,c.currentWriteId,!0))}yi(t.eventQueue_,n,i),i=[],h&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(f),!1,null))))}oc(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)zo(s[a]);kd(t,t.transactionQueueTree_)}function bw(t,e){let n,s=t.transactionQueueTree_;for(n=Se(e);n!==null&&pr(s)===void 0;)s=Sd(s,n),e=He(e),n=Se(e);return s}function Iw(t,e){const n=[];return Aw(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Aw(t,e,n){const s=pr(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);rc(e,i=>{Aw(t,i,n)})}function oc(t,e){const n=pr(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,mw(e,n.length>0?n:void 0)}rc(e,s=>{oc(t,s)})}function MD(t,e){const n=qo(bw(t,e)),s=Sd(t.transactionQueueTree_,e);return fD(s,i=>{nu(t,i)}),nu(t,s),_w(s,i=>{nu(t,i)}),n}function nu(t,e){const n=pr(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(Q(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(Q(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ni(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?mw(e,void 0):n.length=r+1,yi(t.eventQueue_,qo(e),i);for(let o=0;o<s.length;o++)zo(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LD(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function VD(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Jt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Eg=function(t,e){const n=FD(t),s=n.namespace;n.domain==="firebase.com"&&ri(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&ri("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||fx();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ix(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Ke(n.pathString)}},FD=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",c=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(i=LD(t.substring(h,f)));const m=VD(t.substring(Math.min(t.length,f)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const A=e.indexOf(".");s=e.substring(0,A).toLowerCase(),n=e.substring(A+1),r=s}"ns"in m&&(r=m.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return be(this._path)?null:FE(this._path)}get ref(){return new mr(this._repo,this._path)}get _queryIdentifier(){const e=rg(this._queryParams),n=hd(e);return n==="{}"?"default":n}get _queryObject(){return rg(this._queryParams)}isEqual(e){if(e=wn(e),!(e instanceof xd))return!1;const n=this._repo===e._repo,s=$E(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Yx(this._path)}}class mr extends xd{constructor(e,n){super(e,n,new _d,!1)}get parent(){const e=BE(this._path);return e===null?null:new mr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}tD(mr);nD(mr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UD="FIREBASE_DATABASE_EMULATOR_HOST",ih={};let BD=!1;function $D(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||ri("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ot("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Eg(r,i),a=o.repoInfo,c;typeof process<"u"&&Bm&&(c=Bm[UD]),c?(r=`http://${c}?ns=${a.namespace}`,o=Eg(r,i),a=o.repoInfo):o.repoInfo.secure;const u=new bx(t.name,t.options,e);vD("Invalid Firebase Database URL",o),be(o.path)||ri("Database URL must point to the root of a Firebase Database (not including a child path).");const h=jD(a,t,u,new Tx(t.name,n));return new qD(h,t)}function zD(t,e){const n=ih[e];(!n||n[t.key]!==t)&&ri(`Database ${e}(${t.repoInfo_}) has already been deleted.`),ND(t),delete n[t.key]}function jD(t,e,n,s){let i=ih[e.name];i||(i={},ih[e.name]=i);let r=i[t.toURLString()];return r&&ri("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new CD(t,BD,n,s),i[t.toURLString()]=r,r}class qD{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(SD(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new mr(this._repo,Ue())),this._rootInternal}_delete(){return this._rootInternal!==null&&(zD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ri("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HD(t){ax(lr),Mn(new Tn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return $D(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Yt($m,zm,t),Yt($m,zm,"esm2017")}es.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};es.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};HD();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw="firebasestorage.googleapis.com",WD="storageBucket",KD=2*60*1e3,GD=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends os{constructor(e,n,s=0){super(su(e),`Firebase Storage: ${n} (${su(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Un.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return su(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Fn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Fn||(Fn={}));function su(t){return"storage/"+t}function QD(){const t="An unknown error occurred, please check the error payload for server response.";return new Un(Fn.UNKNOWN,t)}function YD(){return new Un(Fn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function XD(){return new Un(Fn.CANCELED,"User canceled the upload/download.")}function JD(t){return new Un(Fn.INVALID_URL,"Invalid URL '"+t+"'.")}function ZD(t){return new Un(Fn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function wg(t){return new Un(Fn.INVALID_ARGUMENT,t)}function Sw(){return new Un(Fn.APP_DELETED,"The Firebase app was deleted.")}function e2(t){return new Un(Fn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=fn.makeFromUrl(e,n)}catch{return new fn(e,"")}if(s.path==="")return s;throw ZD(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(M){M.path.charAt(M.path.length-1)==="/"&&(M.path_=M.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(M){M.path_=decodeURIComponent(M.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${h}/b/${i}/o${m}`,"i"),A={bucket:1,path:3},R=n===Cw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,x="([^?#]*)",F=new RegExp(`^https?://${R}/${i}/${x}`,"i"),O=[{regex:a,indices:c,postModify:r},{regex:g,indices:A,postModify:u},{regex:F,indices:{bucket:1,path:2},postModify:u}];for(let M=0;M<O.length;M++){const ee=O[M],te=ee.regex.exec(e);if(te){const C=te[ee.indices.bucket];let y=te[ee.indices.path];y||(y=""),s=new fn(C,y),ee.postModify(s);break}}if(s==null)throw JD(e);return s}}class t2{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n2(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function c(){return a===2}let u=!1;function h(...x){u||(u=!0,e.apply(null,x))}function f(x){i=setTimeout(()=>{i=null,t(g,c())},x)}function m(){r&&clearTimeout(r)}function g(x,...F){if(u){m();return}if(x){m(),h.call(null,x,...F);return}if(c()||o){m(),h.call(null,x,...F);return}s<64&&(s*=2);let O;a===1?(a=2,O=0):O=(s+Math.random())*1e3,f(O)}let A=!1;function R(x){A||(A=!0,m(),!u&&(i!==null?(x||(a=2),clearTimeout(i),f(0)):x||(a=1)))}return f(0),r=setTimeout(()=>{o=!0,R(!0)},n),R}function s2(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i2(t){return t!==void 0}function Tg(t,e,n,s){if(s<e)throw wg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw wg(`Invalid value for '${t}'. Expected ${n} or less.`)}function r2(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}var vl;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(vl||(vl={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o2(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e,n,s,i,r,o,a,c,u,h,f,m=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,A)=>{this.resolve_=g,this.reject_=A,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new wa(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===vl.NO_ERROR,c=r.getStatus();if(!a||o2(c,this.additionalRetryCodes_)&&this.retry){const h=r.getErrorCode()===vl.ABORT;s(!1,new wa(!1,null,h));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new wa(u,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());i2(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=QD();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?Sw():XD();o(c)}else{const c=YD();o(c)}};this.canceled_?n(!1,new wa(!1,null,!0)):this.backoffId_=n2(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&s2(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class wa{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function l2(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function c2(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function u2(t,e){e&&(t["X-Firebase-GMPID"]=e)}function h2(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function d2(t,e,n,s,i,r,o=!0){const a=r2(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return u2(u,e),l2(u,n),c2(u,r),h2(u,s),new a2(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f2(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function p2(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,n){this._service=e,n instanceof fn?this._location=n:this._location=fn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new El(e,n)}get root(){const e=new fn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return p2(this._location.path)}get storage(){return this._service}get parent(){const e=f2(this._location.path);if(e===null)return null;const n=new fn(this._location.bucket,e);return new El(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw e2(e)}}function bg(t,e){const n=e==null?void 0:e[WD];return n==null?null:fn.makeFromBucketSpec(n,t)}class m2{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=Cw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=KD,this._maxUploadRetryTime=GD,this._requests=new Set,i!=null?this._bucket=fn.makeFromBucketSpec(i,this._host):this._bucket=bg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=fn.makeFromBucketSpec(this._url,e):this._bucket=bg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Tg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Tg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new El(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new t2(Sw());{const o=d2(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Ig="@firebase/storage",Ag="0.13.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g2="storage";function _2(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new m2(n,s,i,e,lr)}function y2(){Mn(new Tn(g2,_2,"PUBLIC").setMultipleInstances(!0)),Yt(Ig,Ag,""),Yt(Ig,Ag,"esm2017")}y2();const iu=new WeakMap;function Rw(t,e){return iu.has(e)||iu.set(e,{f:{},r:{},s:{},u:{}}),iu.get(e)}function v2(t,e,n,s){if(!t)return n;const[i,r]=kw(t);if(!i)return n;const o=Rw(void 0,s)[i]||{},a=e||r;return a&&a in o?o[a]:n}function E2(t,e,n,s){if(!t)return;const[i,r]=kw(t);if(!i)return;const o=Rw(void 0,s)[i],a=e||r;if(a)return n.then(c=>{o[a]=c}).catch(kn),a}function kw(t){return ex(t)||tx(t)?["f",t.path]:nx(t)?["r",t.toString()]:sx(t)?["s",t.toString()]:[]}const ru=new WeakMap;function w2(t,e,n){const s=pE();ru.has(s)||ru.set(s,new Map);const i=ru.get(s),r=E2(e,n,t,s);return r&&i.set(r,t),r?()=>i.delete(r):kn}const T2={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function rh(t,e,n,s){if(!JP(t))return[t,{}];const i=[{},{}],r=Object.keys(n).reduce((a,c)=>{const u=n[c];return a[u.path]=u.data(),a},{});function o(a,c,u,h){c=c||{};const[f,m]=h;Object.getOwnPropertyNames(a).forEach(g=>{const A=Object.getOwnPropertyDescriptor(a,g);A&&!A.enumerable&&Object.defineProperty(f,g,A)});for(const g in a){const A=a[g];if(A==null||A instanceof Date||A instanceof ot||A instanceof ec)f[g]=A;else if(ud(A)){const R=u+g;f[g]=R in n?c[g]:A.path,m[R]=A.converter?A:A.withConverter(s.converter)}else if(Array.isArray(A)){f[g]=Array(A.length);for(let R=0;R<A.length;R++){const x=A[R];x&&x.path in r&&(f[g][R]=r[x.path])}o(A,c[g]||f[g],u+g+".",[f[g],m])}else gi(A)?(f[g]={},o(A,c[g],u+g+".",[f[g],m])):f[g]=A}}return o(t,e,"",i),i}const Nd={reset:!1,wait:!0,maxRefDepth:2,converter:T2,snapshotOptions:{serverTimestamps:"estimate"}};function wl(t){for(const e in t)t[e].unsub()}function oh(t,e,n,s,i,r,o,a,c){const[u,h]=rh(s.data(t.snapshotOptions),cd(e,n),i,t);r.set(e,n,u),ah(t,e,n,i,h,r,o,a,c)}function b2({ref:t,target:e,path:n,depth:s,resolve:i,reject:r,ops:o},a){const c=Object.create(null);let u=kn;return a.once?Qv(t).then(h=>{h.exists()?oh(a,e,n,h,c,o,s,i,r):(o.set(e,n,null),i())}).catch(r):u=ad(t,h=>{h.exists()?oh(a,e,n,h,c,o,s,i,r):(o.set(e,n,null),i())},r),()=>{u(),wl(c)}}function ah(t,e,n,s,i,r,o,a,c){const u=Object.keys(i);if(Object.keys(s).filter(R=>u.indexOf(R)<0).forEach(R=>{s[R].unsub(),delete s[R]}),!u.length||++o>t.maxRefDepth)return a(n);let f=0;const m=u.length,g=Object.create(null);function A(R){R in g&&++f>=m&&a(n)}u.forEach(R=>{const x=s[R],F=i[R],U=`${n}.${R}`;if(g[U]=!0,x)if(x.path!==F.path)x.unsub();else return;s[R]={data:()=>cd(e,U),unsub:b2({ref:F,target:e,path:U,depth:o,ops:r,resolve:A.bind(null,U),reject:c},t),path:F.path}})}function I2(t,e,n,s,i,r){const o=Object.assign({},Nd,r),{snapshotListenOptions:a,snapshotOptions:c,wait:u,once:h}=o,f="value";let m=bt(u?[]:t.value);u||n.set(t,f,[]);const g=s;let A,R=kn;const x=[],F={added:({newIndex:O,doc:M})=>{x.splice(O,0,Object.create(null));const ee=x[O],[te,C]=rh(M.data(c),void 0,ee,o);n.add(Wn(m),O,te),ah(o,m,`${f}.${O}`,ee,C,n,0,s.bind(null,M),i)},modified:({oldIndex:O,newIndex:M,doc:ee})=>{const te=Wn(m),C=x[O],y=te[O],[v,I]=rh(ee.data(c),y,C,o);x.splice(M,0,C),n.remove(te,O),n.add(te,M,v),ah(o,m,`${f}.${M}`,C,I,n,0,s,i)},removed:({oldIndex:O})=>{const M=Wn(m);n.remove(M,O),wl(x.splice(O,1)[0])}};function U(O){const M=O.docChanges(a);if(!A&&M.length){A=!0;let ee=0;const te=M.length,C=Object.create(null);for(let y=0;y<te;y++)C[M[y].doc.id]=!0;s=y=>{y&&y.id in C&&++ee>=te&&(u&&(n.set(t,f,Wn(m)),m=t),g(Wn(m)),s=kn)}}M.forEach(ee=>{F[ee.type](ee)}),M.length||(u&&(n.set(t,f,Wn(m)),m=t),s(Wn(m)))}return h?Bk(e).then(U).catch(i):R=ad(e,U,i),O=>{if(R(),O){const M=typeof O=="function"?O():[];n.set(t,f,M)}x.forEach(wl)}}function A2(t,e,n,s,i,r){const o=Object.assign({},Nd,r),a="value",c=Object.create(null);s=ix(s,()=>cd(t,a));let u=kn;function h(f){f.exists()?oh(o,t,a,f,c,n,0,s,i):(n.set(t,a,null),s(null))}return o.once?Qv(e).then(h).catch(i):u=ad(e,h,i),f=>{if(u(),f){const m=typeof f=="function"?f():null;n.set(t,a,m)}wl(c)}}const Cg=Symbol();function C2(t,e){let n=kn;const s=Object.assign({},Nd,e),i=Wn(t),r=s.target||bt();ox()&&(s.once=!0);const o=v2(i,s.ssrKey,Cg,pE()),a=o!==Cg;a&&(r.value=o);let c=!a;const u=bt(!1),h=bt(),f=Zg(),m=Lg();let g=kn;function A(){let F=Wn(t);const U=new Promise((O,M)=>{if(n(s.reset),!F)return n=kn,O(null);u.value=c,c=!0,F.converter||(F=F.withConverter(s.converter)),n=(ud(F)?A2:I2)(r,F,S2,O,M,s)}).catch(O=>(f.value===U&&(h.value=O),Promise.reject(O))).finally(()=>{f.value===U&&(u.value=!1)});f.value=U}let R=kn;(mt(t)||typeof t=="function")&&(R=bs(t,A)),A(),i&&(g=w2(f.value,i,s.ssrKey)),Ah()&&v_(()=>f.value),m&&yT(x);function x(F=s.reset){R(),g(),n(F)}return Object.defineProperties(r,{error:{get:()=>h},data:{get:()=>r},pending:{get:()=>u},promise:{get:()=>f},stop:{get:()=>x}})}const S2={set:(t,e,n)=>YP(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function Pw(t,e){return C2(t,{target:bt([]),...e})}function R2(t,{firebaseApp:e,modules:n=[]}){t.provide(fE,e);for(const s of n)s(e,t)}const k2={apiKey:"AIzaSyAfF4tiebJT5Ce9-8rTuB2n8Z9oYiA1YFA",authDomain:"docutrack-waitlist.firebaseapp.com",projectId:"docutrack-waitlist",storageBucket:"docutrack-waitlist.firebasestorage.app",messagingSenderId:"502896437609",appId:"1:502896437609:web:d9a389e6ae8df8a266b5f8",measurementId:"G-ZQ5QSM665B"},xw=Iy(k2),P2=Ck(xw),x2={key:0,class:"flex justify-center w-full"},N2={class:"flex-auto max-w-md"},D2={class:"relative"},O2=["placeholder"],M2=["disabled"],L2={class:"h-8 relative"},Nw={__name:"WaitingList",props:["isDarkMode","cta"],setup(t){const{event:e}=rr(),n=bt(""),s=bt(!1),i=bt(""),r=bt("");bs(i,()=>{setTimeout(()=>{i.value="",r.value=""},5e3)});const o=c=>/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(c),a=async()=>{if(!n.value){i.value="Please enter your email address.",r.value="error",s.value=!1;return}if(!o(n.value)){i.value="Invalid email address",r.value="error",s.value=!1;return}const c=Lv(P2,"waitlist");Pw(c),e("add-to-waiting-list",{event_category:"engagement",event_label:"waiting-list",value:n.value}),s.value=!0,i.value="",r.value="";const u={email:n.value,created_at:new Date().toISOString()};try{if(!await $k(c,u))throw new Error("An error occurred");i.value=t.cta.successMessage,r.value="success",n.value=""}catch{i.value=t.cta.errorMessage,r.value="error"}finally{s.value=!1}};return(c,u)=>t.cta?(he(),_e("div",x2,[D("div",N2,[D("h2",{class:Re(["text-md font-semibold mb-4 text-center",t.isDarkMode?"text-base-100":"text-base-400"])},ue(t.cta.title),3),D("div",D2,[l_(D("input",{type:"email","onUpdate:modelValue":u[0]||(u[0]=h=>n.value=h),placeholder:t.cta.inputPlaceholder,class:Re(["w-full px-4 py-4 rounded-full","outline-none ring-2 ring-base-100","focus:ring-primary-200",t.isDarkMode?"bg-base-300 text-base-100 ring-base-200":"bg-base-100 text-base-400 ring-base-200","pr-32"]),required:""},null,10,O2),[[AI,n.value]]),D("button",{type:"submit",onClick:a,disabled:s.value,class:Re(["absolute right-1 top-1 bottom-1","bg-primary-200 text-base-400 px-6 md:px-12 rounded-full font-semibold","hover:bg-primary-300 transition-colors","disabled:opacity-50 disabled:cursor-not-allowed"])},ue(s.value?t.cta.buttonTextLoading:t.cta.buttonText),9,M2)]),D("div",L2,[i.value?(he(),_e("p",{key:0,class:Re(["absolute w-full mt-2 text-sm text-center",r.value==="success"?"text-primary-400":"text-red"])},ue(i.value),3)):ja("",!0)])])])):ja("",!0)}},V2={headline:"Simplifica la Gestión de Peticiones y Documentos",subHeadline1:"Docutrack es La plataforma todo en uno para recibir, gestionar y dar seguimiento a peticiones, solicitudes y documentos de tus clientes.",subHeadline2:{bolded:"Personaliza tus tipos de solicitudes y flujos de trabajo",unbolded:"para adaptarte a las necesidades únicas de tu negocio."}},F2={headline:"Simplify the Management of Requests and Documents",subHeadline1:"Docutrack is the all-in-one platform to receive, manage, and track your clients' requests, applications, and documents.",subHeadline2:{bolded:"Customize your request types and workflows",unbolded:"to fit the unique needs of your business."}},U2={headline:"Vereinfachen Sie die Verwaltung von Anfragen und Dokumenten",subHeadline1:"Docutrack ist die All-in-One-Plattform, um Anfragen, Anträge und Dokumente Ihrer Kunden zu empfangen, zu verwalten und zu verfolgen.",subHeadline2:{bolded:"Passen Sie Ihre Anfragetypen und Workflows an,",unbolded:"um den einzigartigen Anforderungen Ihres Unternehmens gerecht zu werden."}},B2={es:V2,en:F2,de:U2},$2={title:"Sé el primero en probar Docutrack",subtitle:"Únete a nuestra lista de espera y obtén acceso exclusivo a Docutrack antes que nadie. Simplifica tus procesos y mejora tu productividad desde el primer día.",cta:{title:"Únete a la waitlist",inputPlaceholder:"Ingresa tu correo electrónico",buttonText:"Unirse",buttonTextLoading:"Enviando...",successMessage:"¡Gracias por unirte a la waitlist!",errorMessage:"¡Ups! Algo salió mal. Por favor, intenta de nuevo."}},z2={title:"Be the first to try Docutrack",subtitle:"Join our waitlist and get exclusive early access to Docutrack. Simplify your processes and boost your productivity from day one.",cta:{title:"Join the waitlist",inputPlaceholder:"Enter your email",buttonText:"Join",buttonTextLoading:"Sending...",successMessage:"Thank you for joining the waitlist!",errorMessage:"Oops! Something went wrong. Please try again."}},j2={title:"Sei der Erste, der Docutrack ausprobiert",subtitle:"Trage dich in unsere Warteliste ein und erhalte exklusiven frühen Zugang zu Docutrack. Vereinfache deine Prozesse und steigere deine Produktivität vom ersten Tag an.",cta:{title:"Zur Warteliste hinzufügen",inputPlaceholder:"Gib deine E-Mail-Adresse ein",buttonText:"Beitreten",buttonTextLoading:"Wird gesendet...",successMessage:"Vielen Dank, dass du dich in die Warteliste eingetragen hast!",errorMessage:"Hoppla! Etwas ist schiefgelaufen. Bitte versuche es erneut."}},Dw={es:$2,en:z2,de:j2},q2={id:"hero",class:"relative py-32 md:py-60 px-4 overflow-hidden"},H2={class:"absolute inset-0 z-0"},W2={class:"container mx-auto text-center relative z-10"},K2={class:"text-md md:text-xl mb-8"},G2={class:"font-bold"},Q2={__name:"HeroSection",props:["isDarkMode"],setup(t){const{language:e}=rs(),n=Je(()=>B2[e.value]),s=Je(()=>Dw[e.value]);return(i,r)=>(he(),_e("section",q2,[D("div",H2,[r[0]||(r[0]=D("img",{src:YA,alt:"Background",class:"w-full h-full object-cover"},null,-1)),D("div",{class:Re(["absolute inset-0",t.isDarkMode?"bg-base-400 opacity-70":"bg-base-100 opacity-50"])},null,2)]),D("div",W2,[D("h1",{class:Re(["text-4xl md:text-6xl font-bold mb-6",t.isDarkMode?"text-base-100":"text-base-400"])},ue(n.value.headline),3),D("p",{class:Re(["text-lg md:text-xl mb-6",t.isDarkMode?"text-base-200":"text-base-300"])},ue(n.value.subHeadline1),3),D("p",K2,[D("span",G2,ue(n.value.subHeadline2.bolded),1),ui(" "+ue(n.value.subHeadline2.unbolded),1)]),ye(Nw,{cta:s.value.cta,isDarkMode:t.isDarkMode},null,8,["cta","isDarkMode"])])]))}},Y2={title:"Características Destacadas",features:[{title:"Gestión Centralizada",description:"Recibe y organiza todas las peticiones y documentos en un solo lugar.",icon:"Folder"},{title:"Seguimiento en Tiempo Real",description:"Permite a tus clientes ver el estado de sus solicitudes en cualquier momento.",icon:"FileClock"},{title:"Asistencia con Inteligencia Artificial",description:"Clasificación Automática, Sugerencias Inteligentes, Detección de Errores, Predicción de Tiempos, Chatbot Integrado",icon:"Bot"},{title:"Notificaciones Automáticas",description:"Envía alertas por email o SMS ante cambios de estado o actualizaciones.",icon:"BellRing"},{title:"Multitenant",description:"Funciona para múltiples oficinas o departamentos, cada uno con su espacio independiente.",icon:"UsersRound"},{title:"Comparte y Colabora",description:"Facilita la comunicación entre clientes y equipos internos con comentarios y adjuntos.",icon:"Share2"},{title:"Analítica Avanzada",description:"Obtén métricas clave para optimizar tus procesos y tiempos de respuesta",icon:"ChartColumnDecreasing"},{title:"Solicitudes Personalizadas",description:"Crea tipos de solicitudes con campos y flujos de trabajo adaptados a tus necesidades. Desde formularios simples hasta procesos complejos, Docutrack se ajusta a ti.",icon:"AppWindow"}]},X2={title:"Key Features",features:[{title:"Centralized Management",description:"Receive and organize all requests and documents in one place.",icon:"Folder"},{title:"Real-Time Tracking",description:"Allow your clients to see the status of their requests at any time.",icon:"FileClock"},{title:"AI-Powered Assistance",description:"Automatic Classification, Smart Suggestions, Error Detection, Time Predictions, Integrated Chatbot",icon:"Bot"},{title:"Automatic Notifications",description:"Send email or SMS alerts for status changes or updates.",icon:"BellRing"},{title:"Multitenant",description:"Works for multiple offices or departments, each with its own independent space.",icon:"UsersRound"},{title:"Share and Collaborate",description:"Facilitate communication between clients and internal teams with comments and attachments.",icon:"Share2"},{title:"Advanced Analytics",description:"Get key metrics to optimize your processes and response times.",icon:"ChartColumnDecreasing"},{title:"Custom Requests",description:"Create request types with fields and workflows tailored to your needs. From simple forms to complex processes, Docutrack adapts to you.",icon:"AppWindow"}]},J2={title:"Hauptmerkmale",features:[{title:"Zentralisiertes Management",description:"Erhalten und organisieren Sie alle Anfragen und Dokumente an einem Ort.",icon:"Folder"},{title:"Echtzeit-Verfolgung",description:"Ermöglichen Sie Ihren Kunden, den Status ihrer Anfragen jederzeit einzusehen.",icon:"FileClock"},{title:"KI-gestützte Unterstützung",description:"Automatische Klassifizierung, Intelligente Vorschläge, Fehlererkennung, Zeitvorhersagen, Integrierter Chatbot",icon:"Bot"},{title:"Automatische Benachrichtigungen",description:"Senden Sie E-Mail- oder SMS-Benachrichtigungen bei Statusänderungen oder Updates.",icon:"BellRing"},{title:"Multitenant-Fähigkeit",description:"Funktioniert für mehrere Büros oder Abteilungen, jeder mit seinem eigenen unabhängigen Bereich.",icon:"UsersRound"},{title:"Teilen und Zusammenarbeiten",description:"Erleichtern Sie die Kommunikation zwischen Kunden und internen Teams durch Kommentare und Anhänge.",icon:"Share2"},{title:"Erweiterte Analysen",description:"Erhalten Sie wichtige Kennzahlen, um Ihre Prozesse und Antwortzeiten zu optimieren.",icon:"ChartColumnDecreasing"},{title:"Benutzerdefinierte Anfragen",description:"Erstellen Sie Anfragetypen mit Feldern und Workflows, die auf Ihre Bedürfnisse zugeschnitten sind. Von einfachen Formularen bis zu komplexen Prozessen – Docutrack passt sich Ihnen an.",icon:"AppWindow"}]},Z2={es:Y2,en:X2,de:J2},eO={class:"container mx-auto"},tO={class:"text-3xl md:text-4xl font-bold text-center mb-12"},nO={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"},sO={class:"text-xl font-semibold mb-2"},iO={__name:"FeaturesSection",props:["isDarkMode"],setup(t){const{language:e}=rs(),n={Folder:TA,FileClock:wA,Bot:pA,BellRing:fA,UsersRound:xA,Share2:kA,ChartColumnDecreasing:gA,AppWindow:hA},s=Je(()=>Z2[e.value]);return(i,r)=>(he(),_e("section",{id:"features",class:Re(["py-20 px-4 transition-colors duration-300",t.isDarkMode?"bg-base-300":"bg-base-200"])},[D("div",eO,[D("h2",tO,ue(s.value.title),1),D("div",nO,[(he(!0),_e(nt,null,yn(s.value.features,o=>(he(),_e("div",{key:o.title,class:Re(["p-6 rounded-lg transition-colors duration-300",t.isDarkMode?"bg-base-400":"bg-base-100"])},[(he(),ji(T_(n[o.icon]),{class:"w-12 h-12 text-base-200 mb-4"})),D("h3",sO,ue(o.title),1),D("p",{class:Re(t.isDarkMode?"text-primary-100":"text-base-300")},ue(o.description),3)],2))),128))])])],2))}},rO={title:"Sin Docutrack vs. Con Docutrack",subtitle:"Descubre cómo Docutrack transforma procesos desorganizados en flujos de trabajo eficientes.",cta:{title:"Transforma tus procesos hoy.",button:"Únete a la waitlist y sé parte del cambio."},without:{title:"Sin Docutrack",list:[{title:"Procesos lentos y desorganizados:",body:"Las solicitudes se pierden en correos, papeles o sistemas obsoletos."},{title:"Falta de transparencia:",body:"Los clientes no saben en qué estado están sus peticiones, generando frustración."},{title:"Comunicación ineficiente:",body:"Los equipos internos pierden tiempo buscando información o coordinando respuestas."},{title:"Errores frecuentes:",body:"La falta de seguimiento y control aumenta los errores y retrasos."},{title:"Gestión manual y propensa a errores:",body:"La clasificación y asignación de solicitudes se hace manualmente, lo que consume tiempo y recursos."}]},with:{title:"Con Docutrack",list:[{title:"Procesos ágiles y organizados:",body:"Centraliza todas las solicitudes en una plataforma intuitiva."},{title:"Transparencia total:",body:"Los clientes pueden ver el estado de sus peticiones en tiempo real."},{title:"Comunicación fluida:",body:"Comentarios, notificaciones y adjuntos simplifican la colaboración."},{title:"Control y precisión:",body:"Reduce errores y mejora los tiempos de respuesta con flujos de trabajo claros."},{title:"Asistencia con Inteligencia Artificial:",body:"Clasifica y asigna automáticamente las solicitudes al departamento correcto. Detecta errores en formularios y sugiere correcciones. Predice tiempos de respuesta basados en datos históricos. Ofrece respuestas automáticas a preguntas frecuentes mediante un chatbot integrado."}]}},oO={title:"Without Docutrack vs. With Docutrack",subtitle:"Discover how Docutrack transforms disorganized processes into streamlined workflows.",cta:{title:"Transform your processes today.",button:"Join the waitlist and be part of the change."},without:{title:"Without Docutrack",list:[{title:"Slow and disorganized processes:",body:"Requests get lost in emails, paperwork, or outdated systems."},{title:"Lack of transparency:",body:"Clients don’t know the status of their requests, leading to frustration."},{title:"Inefficient communication:",body:"Internal teams waste time searching for information or coordinating responses."},{title:"Frequent errors:",body:"Lack of tracking and control increases mistakes and delays."},{title:"Manual and error-prone management:",body:"Requests are classified and assigned manually, consuming time and resources."}]},with:{title:"With Docutrack",list:[{title:"Streamlined and organized processes:",body:"Centralize all requests in an intuitive platform."},{title:"Total transparency:",body:"Clients can see the status of their requests in real time."},{title:"Smooth communication:",body:"Comments, notifications, and attachments simplify collaboration."},{title:"Control and accuracy:",body:"Reduces errors and improves response times with clear workflows."},{title:"AI-Powered Assistance:",body:"Automatically classifies and assigns requests to the right department. Detects errors in forms and suggests corrections. Predicts response times based on historical data. Provides instant answers to frequent questions through an integrated chatbot."}]}},aO={title:"Ohne Docutrack vs. Mit Docutrack",subtitle:"Entdecken Sie, wie Docutrack chaotische Prozesse in effiziente Workflows verwandelt.",cta:{title:"Transformieren Sie Ihre Prozesse noch heute.",button:"Melden Sie sich für die Warteliste an und seien Sie Teil des Wandels."},without:{title:"Ohne Docutrack",list:[{title:"Langsame und unorganisierte Prozesse:",body:"Anfragen gehen in E-Mails, Papierkram oder veralteten Systemen verloren."},{title:"Mangelnde Transparenz:",body:"Kunden wissen nicht, in welchem Status sich ihre Anfragen befinden, was zu Frustration führt."},{title:"Ineffiziente Kommunikation:",body:"Interne Teams verschwenden Zeit mit der Suche nach Informationen oder der Koordination von Antworten."},{title:"Häufige Fehler:",body:"Mangelnde Nachverfolgung und Kontrolle erhöhen Fehler und Verzögerungen."},{title:"Manuelle und fehleranfällige Verwaltung:",body:"Anfragen werden manuell klassifiziert und zugewiesen, was Zeit und Ressourcen verbraucht."}]},with:{title:"Mit Docutrack",list:[{title:"Effiziente und organisierte Prozesse:",body:"Zentralisiert alle Anfragen in einer intuitiven Plattform."},{title:"Volle Transparenz:",body:"Kunden können den Status ihrer Anfragen in Echtzeit einsehen."},{title:"Reibungslose Kommunikation:",body:"Kommentare, Benachrichtigungen und Anhänge vereinfachen die Zusammenarbeit."},{title:"Kontrolle und Präzision:",body:"Reduziert Fehler und verbessert Antwortzeiten mit klaren Workflows."},{title:"KI-gestützte Unterstützung:",body:"Klassifiziert und weist Anfragen automatisch der richtigen Abteilung zu.  Erkennt Fehler in Formularen und schlägt Korrekturen vor. Sagt Antwortzeiten basierend auf historischen Daten voraus. Bietet sofortige Antworten auf häufige Fragen durch einen integrierten Chatbot."}]}},lO={es:rO,en:oO,de:aO},cO={id:"solution",class:"py-40 px-4"},uO={class:"container mx-auto"},hO={class:"text-3xl md:text-4xl font-bold text-center mb-10"},dO={class:"text-xl md:text-2xl font-semibold text-center mb-10"},fO={class:"mx-10 grid grid-cols-1 md:grid-cols-2 gap-14"},pO={class:"text-2xl font-semibold mb-4"},mO={class:"space-y-2"},gO={class:"flex flex-col mb-2"},_O={class:"font-semibold text-lg"},yO={class:"text-xs md:text-sm"},vO={class:"text-2xl font-semibold mb-4"},EO={class:"space-y-2"},wO={class:"flex flex-col mb-2"},TO={class:"font-semibold text-lg"},bO={class:"text-xs md:text-sm"},IO={class:"text-center mt-12 text-2xl"},AO={class:"underline underline-offset-8",href:"#hero"},CO={__name:"ProblemsSection",props:["isDarkMode"],setup(t){const{language:e}=rs(),n=Je(()=>lO[e.value]);return(s,i)=>(he(),_e("section",cO,[D("div",uO,[D("h2",hO,ue(n.value.title),1),D("h3",dO,ue(n.value.subtitle),1),D("div",fO,[D("div",{class:Re(["p-6 rounded-lg transition-colors duration-300",t.isDarkMode?"bg-base-300":"bg-base-100 border-2 border-base-200 shadow-2xl"])},[D("h3",pO,ue(n.value.without.title),1),D("ul",mO,[(he(!0),_e(nt,null,yn(n.value.without.list,r=>(he(),_e("li",{key:r.title,class:"flex items-start"},[ye(rt(EA),{class:"w-6 h-6 text-red mr-2 flex-shrink-0"}),D("p",gO,[D("span",_O,ue(r.title),1),D("span",yO,ue(r.body),1)])]))),128))])],2),D("div",{class:Re(["p-6 rounded-lg transition-colors duration-300",t.isDarkMode?"bg-base-300":"bg-base-100 border-2 border-base-200 shadow-2xl"])},[D("h3",vO,ue(n.value.with.title),1),D("ul",EO,[(he(!0),_e(nt,null,yn(n.value.with.list,r=>(he(),_e("li",{key:r.title,class:"flex items-start"},[ye(rt(vA),{class:"w-6 h-6 text-primary-200 mr-2 flex-shrink-0"}),D("p",wO,[D("span",TO,ue(r.title),1),D("span",bO,ue(r.body),1)])]))),128))])],2)]),D("div",null,[D("p",IO,[ui(ue(n.value.cta.title)+" ",1),D("a",AO,ue(n.value.cta.button),1)])])])]))}},SO={title:"Preguntas Frecuentes",faqs:[{id:1,question:"¿Qué tipo de empresas pueden usar Docutrack?",answer:"Docutrack es ideal para empresas públicas o privadas que reciben peticiones, solicitudes o documentos de sus clientes, como oficinas gubernamentales, constructoras, consultorías, y más.",isOpen:!1},{id:2,question:"¿Puedo personalizar los flujos de trabajo?",answer:"¡Sí! Docutrack permite adaptar los flujos de trabajo según las necesidades de tu empresa.",isOpen:!1},{id:3,question:"¿Es seguro almacenar documentos en Docutrack?",answer:"Absolutamente. Usamos encriptación de última generación y cumplimos con los estándares de seguridad más altos.",isOpen:!1},{id:4,question:"¿Cómo funciona el sistema de notificaciones?",answer:"Docutrack envía notificaciones automáticas por email o SMS a tus clientes y equipos internos ante cualquier actualización.",isOpen:!1},{id:5,question:"¿Hay planes para diferentes tamaños de empresas?",answer:"Sí, ofrecemos tres planes de suscripción adaptados a las necesidades de cada empresa.",isOpen:!1},{id:6,question:"¿Puedo crear mis propios tipos de solicitudes en Docutrack?",answer:"¡Sí! Docutrack te permite crear tipos de solicitudes personalizados con campos específicos (texto, números, fechas, archivos, etc.) y flujos de trabajo adaptados a tus necesidades.",isOpen:!1},{id:7,question:"¿Cómo ayuda la IA en Docutrack?",answer:"La IA de Docutrack clasifica solicitudes, detecta errores, predice tiempos de respuesta y ofrece respuestas automáticas, mejorando la eficiencia y la experiencia del usuario.",isOpen:!1}],cta:{title:"¿Tienes más preguntas?",button:"Únete a la waitlist"}},RO={title:"Frequently Asked Questions",faqs:[{id:1,question:"What types of businesses can use Docutrack?",answer:"Docutrack is ideal for public or private companies that receive requests, applications, or documents from their clients, such as government offices, construction firms, consultancies, and more.",isOpen:!1},{id:2,question:"Can I customize workflows?",answer:"Yes! Docutrack allows you to adapt workflows to your company’s needs.",isOpen:!1},{id:3,question:"Is it safe to store documents in Docutrack?",answer:"Absolutely. We use state-of-the-art encryption and comply with the highest security standards.",isOpen:!1},{id:4,question:"How does the notification system work?",answer:"Docutrack sends automatic notifications via email or SMS to your clients and internal teams for any updates.",isOpen:!1},{id:5,question:"Are there plans for different business sizes?",answer:"Yes, we offer three subscription plans tailored to the needs of each business.",isOpen:!1},{id:6,question:"Can I create my own request types in Docutrack?",answer:"Yes! Docutrack allows you to create custom request types with specific fields (text, numbers, dates, files, etc.) and workflows tailored to your needs.",isOpen:!1},{id:7,question:"How does AI help in Docutrack?",answer:"Docutrack’s AI classifies requests, detects errors, predicts response times, and provides automated responses, improving efficiency and user experience.",isOpen:!1}],cta:{title:"Have more questions?",button:"Join the waitlist"}},kO={title:"Häufig gestellte Fragen (FAQ)",faqs:[{id:1,question:"Welche Arten von Unternehmen können Docutrack nutzen?",answer:"Docutrack ist ideal für öffentliche oder private Unternehmen, die Anfragen, Anträge oder Dokumente von ihren Kunden erhalten, wie z. B. Behörden, Bauunternehmen, Beratungsfirmen und mehr.",isOpen:!1},{id:2,question:"Kann ich Workflows anpassen?",answer:"Ja! Docutrack ermöglicht es Ihnen, Workflows an die Bedürfnisse Ihres Unternehmens anzupassen.",isOpen:!1},{id:3,question:"Ist es sicher, Dokumente in Docutrack zu speichern?",answer:"Absolut. Wir verwenden modernste Verschlüsselung und erfüllen die höchsten Sicherheitsstandards.",isOpen:!1},{id:4,question:"Wie funktioniert das Benachrichtigungssystem?",answer:"Docutrack sendet automatische Benachrichtigungen per E-Mail oder SMS an Ihre Kunden und internen Teams bei allen Aktualisierungen.",isOpen:!1},{id:5,question:"Gibt es Pläne für verschiedene Unternehmensgrößen?",answer:"Ja, wir bieten drei Abonnementpläne an, die auf die Bedürfnisse jedes Unternehmens zugeschnitten sind.",isOpen:!1},{id:6,question:"Kann ich meine eigenen Anfragetypen in Docutrack erstellen?",answer:"Ja! Docutrack ermöglicht es Ihnen, benutzerdefinierte Anfragetypen mit spezifischen Feldern (Text, Zahlen, Datum, Dateien usw.) und Workflows zu erstellen, die auf Ihre Bedürfnisse zugeschnitten sind.",isOpen:!1},{id:7,question:"Wie hilft KI bei Docutrack?",answer:"Die KI von Docutrack klassifiziert Anfragen, erkennt Fehler, sagt Antwortzeiten voraus und bietet automatisierte Antworten, was die Effizienz und das Benutzererlebnis verbessert.",isOpen:!1}],cta:{title:"Haben Sie weitere Fragen?",button:"Zur Warteliste hinzufügen"}},Sg={es:SO,en:RO,de:kO},PO={class:"container mx-auto"},xO={class:"text-3xl md:text-4xl font-bold text-center mb-12"},NO={class:"space-y-6"},DO=["onClick"],OO={class:"text-xl font-semibold"},MO={class:"text-center mt-12 text-2xl"},LO={class:"underline underline-offset-8",href:"#hero"},VO={__name:"FaqSection",props:["isDarkMode"],setup(t){const{event:e}=rr(),{language:n}=rs(),s=bt(Sg[n.value]),i=r=>{if(s.value.faqs[r].isOpen=!s.value.faqs[r].isOpen,s.value.faqs[r].isOpen){const o=s.value.faqs[r].id;e("faq-opened",{event_category:"engagement",event_label:"faqs",value:o})}};return bs(n,r=>{s.value=Sg[r]}),(r,o)=>(he(),_e("section",{id:"faq",class:Re(["py-20 px-4 transition-colors duration-300",t.isDarkMode?"bg-base-300":"bg-base-200"])},[D("div",PO,[D("h2",xO,ue(s.value.title),1),D("div",NO,[(he(!0),_e(nt,null,yn(s.value.faqs,(a,c)=>(he(),_e("div",{key:a.id,class:Re(["p-6 rounded-lg transition-colors duration-300",t.isDarkMode?"bg-base-400":"bg-base-100"])},[D("button",{onClick:u=>i(c),class:"flex justify-between items-center w-full text-left"},[D("span",OO,ue(a.question),1),ye(rt(yA),{class:Re(["w-6 h-6 transition-transform",{"transform rotate-180":a.isOpen}])},null,8,["class"])],8,DO),l_(D("p",{class:Re(["mt-4",t.isDarkMode?"text-primary-100":"text-base-300"])},ue(a.answer),3),[[uI,a.isOpen]])],2))),128))]),D("div",null,[D("p",MO,[ui(ue(s.value.cta.title)+" ",1),D("a",LO,ue(s.value.cta.button),1)])])])],2))}},FO={title:"Precios",subtitle:"Elige el plan que mejor se adapte a las necesidades de tu equipo.",buttonText:"Elegir Plan",plans:[{name:"Básico",genericName:"Basic",description:"Para equipos pequeños",price:"COP $123.881/mes",features:["Hasta 80 solicitudes/mes","Clientes ilimitados","Hasta 3 tipos de solicitudes personalizadas","Campos básicos (texto, números, fechas)","Hasta 5 usuarios","10GB de almacenamiento","Seguimiento básico de documentos","Notificaciones por correo electrónico","Soporte por correo electrónico"]},{name:"Pro",genericName:"Pro",description:"Para negocios en crecimiento",price:"COP $227.144/mes",features:["Hasta 250 solicitudes/mes","Clientes ilimitados","Hasta 10 tipos de solicitudes personalizadas","Campos avanzados (listas desplegables, archivos adjuntos)","Hasta 20 usuarios","100GB de almacenamiento","Seguimiento avanzado de documentos","Notificaciones por correo electrónico y SMS","Soporte prioritario","Branding personalizado"]},{name:"Empresa",genericName:"Enterprise",description:"Para grandes organizaciones",price:"Personalizado",features:["Solicitudes ilimitadas/mes","Clientes ilimitados","Tipos de solicitudes personalizadas ilimitadas","Campos y flujos de trabajo completamente personalizables","Usuarios ilimitados","Almacenamiento ilimitado","Funciones de seguridad avanzadas","Notificaciones por correo electrónico, SMS y WhatsApp","Soporte telefónico premium 24/7","Gerente de cuenta dedicado"]}],cta:{title:"Asegura tu acceso a Docutrack con un descuento exclusivo para los primeros usuarios.",button:"Únete a la lista de espera hoy"}},UO={title:"Pricing",subtitle:"Choose the plan that best fits your team's needs.",buttonText:"Choose Plan",plans:[{name:"Basic",genericName:"Basic",description:"For small teams",price:"USD $30/month",features:["Up to 80 requests/month","Unlimited clients","Up to 3 custom request types","Basic fields (text, numbers, dates)","Up to 5 users","10GB storage","Basic document tracking","Email notifications","Email support"]},{name:"Pro",genericName:"Pro",description:"For growing businesses",price:"USD $55/month",features:["Up to 250 requests/month","Unlimited clients","Up to 10 custom request types","Advanced fields (dropdowns, file attachments)","Up to 20 users","100GB storage","Advanced document tracking","Email and SMS notifications","Priority support","Custom branding"]},{name:"Enterprise",genericName:"Enterprise",description:"For large organizations",price:"Custom",features:["Unlimited requests/month","Unlimited clients","Unlimited custom request types","Fully customizable fields and workflows","Unlimited users","Unlimited storage","Advanced security features","Email, SMS, and WhatsApp notifications","24/7 premium phone support","Dedicated account manager"]}],cta:{title:"Secure your access to Docutrack with an exclusive discount for early users.",button:"Join the waitlist today"}},BO={title:"Preise",subtitle:"Wählen Sie den Plan, der am besten zu den Anforderungen Ihres Teams passt.",buttonText:"Plan auswählen",plans:[{name:"Basic",genericName:"Basic",description:"Für kleine Teams",price:"EUR $28,85/Monat",features:["Bis zu 80 Anfragen/Monat","Unbegrenzte Kunden","Bis zu 3 benutzerdefinierte Anfragentypen","Grundlegende Felder (Text, Zahlen, Daten)","Bis zu 5 Benutzer","10GB Speicher","Grundlegende Dokumentenverfolgung","E-Mail-Benachrichtigungen","E-Mail-Support"]},{name:"Pro",genericName:"Pro",description:"Für wachsende Unternehmen",price:"EUR $52,90/Monat",features:["Bis zu 250 Anfragen/Monat","Unbegrenzte Kunden","Bis zu 10 benutzerdefinierte Anfragentypen","Erweiterte Felder (Dropdowns, Dateianhänge)","Bis zu 20 Benutzer","100GB Speicher","Erweiterte Dokumentenverfolgung","E-Mail- und SMS-Benachrichtigungen","Priorisierter Support","Benutzerdefiniertes Branding"]},{name:"Enterprise",genericName:"Enterprise",description:"Für große Organisationen",price:"Individuell",features:["Unbegrenzte Anfragen/Monat","Unbegrenzte Kunden","Unbegrenzte benutzerdefinierte Anfragentypen","Vollständig anpassbare Felder und Workflows","Unbegrenzte Benutzer","Unbegrenzter Speicher","Erweiterte Sicherheitsfunktionen","E-Mail-, SMS- und WhatsApp-Benachrichtigungen","24/7 Premium-Telefonsupport","Dedizierter Account-Manager"]}],cta:{title:"Sichern Sie sich Ihren Zugang zu Docutrack mit einem exklusiven Rabatt für frühe Nutzer.",button:"Treten Sie noch heute der Warteliste bei"}},$O={es:FO,en:UO,de:BO},zO={id:"pricing",class:"py-24 px-4"},jO={class:"container mx-auto"},qO={class:"text-3xl md:text-4xl font-bold text-center mb-8"},HO={class:"text-xl md:text-2xl font-semibold text-center mb-10"},WO={class:"grid grid-cols-1 md:grid-cols-3 gap-8"},KO={class:"text-2xl font-semibold mb-2"},GO={class:"text-4xl font-bold mb-6"},QO={class:"mb-8 flex-grow"},YO=["onClick"],XO={class:"text-center mt-12 text-xl"},JO={class:"underline underline-offset-8",href:"#hero"},ZO={__name:"PricingSection",props:["isDarkMode"],setup(t){const{event:e}=rr(),n=r=>{e("plan-selected",{event_category:"engagement",event_label:"pricing",value:r});const o=document.getElementById("waiting-list");o&&o.scrollIntoView({behavior:"smooth",block:"start"})},{language:s}=rs(),i=Je(()=>$O[s.value]);return(r,o)=>(he(),_e("section",zO,[D("div",jO,[D("h2",qO,ue(i.value.title),1),D("h3",HO,ue(i.value.subtitle),1),D("div",WO,[(he(!0),_e(nt,null,yn(i.value.plans,a=>(he(),_e("div",{key:a.name,class:Re(["p-6 rounded-lg flex flex-col transition-colors duration-300",t.isDarkMode?"bg-base-300":"bg-base-100 border-2 border-base-200 shadow-2xl"])},[D("h3",KO,ue(a.name),1),D("p",{class:Re([t.isDarkMode?"text-primary-100":"text-base-300","mb-4"])},ue(a.description),3),D("p",GO,ue(a.price),1),D("ul",QO,[(he(!0),_e(nt,null,yn(a.features,c=>(he(),_e("li",{key:c,class:"flex items-center mb-2"},[ye(rt(_A),{class:"w-5 h-5 text-primary-200 mr-2"}),D("span",null,ue(c),1)]))),128))]),D("button",{onClick:c=>n(a.genericName),class:"bg-primary-200 text-base-400 px-6 py-3 rounded-full font-semibold text-center hover:bg-primary-300 transition-colors"},ue(i.value.buttonText),9,YO)],2))),128))]),D("div",null,[D("p",XO,[ui(ue(i.value.cta.title)+" ",1),D("a",JO,ue(i.value.cta.button),1)])])])]))}},eM={title:"Docutrack se adapta a tus necesidades",subtitle:"Docutrack no es solo una herramienta, es una solución flexible que se ajusta a tus procesos. Aquí te mostramos cómo diferentes industrias pueden beneficiarse",features:[{title:"Gobiernos Locales",description:"Crea solicitudes para permisos de construcción, quejas, o consultas de normativa urbana.",icon:"Landmark"},{title:"Constructoras",description:"Gestiona solicitudes de aprobación de planos, inspecciones o certificaciones.",icon:"HardHat"},{title:"Consultorías",description:"Personaliza formularios para recopilar datos específicos de tus clientes.",icon:"Building2"},{title:"Empresas de Servicios",description:"Recibe y gestiona solicitudes de soporte técnico, facturación o contratación.",icon:"BaggageClaim"}],cta:{title:"Descubre cómo Docutrack puede personalizarse para tu industria.",button:"Únete a la waitlist."}},tM={title:"Docutrack adapts to your needs",subtitle:"Docutrack is not just a tool, it's a flexible solution that adapts to your processes. Here's how different industries can benefit",features:[{title:"Local Governments",description:"Create requests for construction permits, complaints, or urban planning consultations.",icon:"Landmark"},{title:"Construction Companies",description:"Manage requests for plan approvals, inspections, or certifications.",icon:"HardHat"},{title:"Consulting Firms",description:"Customize forms to collect specific data from your clients.",icon:"Building2"},{title:"Service Companies",description:"Receive and manage requests for technical support, billing, or hiring.",icon:"BaggageClaim"}],cta:{title:"Discover how Docutrack can be customized for your industry.",button:"Join the waitlist."}},nM={title:"Docutrack passt sich Ihren Bedürfnissen an",subtitle:"Docutrack ist nicht nur ein Werkzeug, sondern eine flexible Lösung, die sich Ihren Prozessen anpasst. Hier erfahren Sie, wie verschiedene Branchen davon profitieren können",features:[{title:"Kommunen",description:"Erstellen Sie Anfragen für Baugenehmigungen, Beschwerden oder städtebauliche Beratungen.",icon:"Landmark"},{title:"Bauunternehmen",description:"Verwalten Sie Anfragen für Planungs- und Inspektionsgenehmigungen oder Zertifizierungen.",icon:"HardHat"},{title:"Beratungsunternehmen",description:"Passen Sie Formulare an, um spezifische Daten von Ihren Kunden zu erfassen.",icon:"Building2"},{title:"Dienstleistungsunternehmen",description:"Empfangen und verwalten Sie Anfragen für technischen Support, Abrechnung oder Einstellung.",icon:"BaggageClaim"}],cta:{title:"Erfahren Sie, wie Docutrack für Ihre Branche angepasst werden kann.",button:"Melden Sie sich auf der Warteliste an."}},sM={es:eM,en:tM,de:nM},iM={class:"container mx-auto"},rM={class:"text-3xl md:text-4xl font-bold text-center mb-10"},oM={class:"text-xl md:text-2xl font-semibold text-center mb-10"},aM={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"},lM={class:"text-xl font-semibold mb-2"},cM={__name:"UseCasesSection",props:["isDarkMode"],setup(t){const{language:e}=rs(),n={Landmark:CA,HardHat:bA,Building2:mA,BaggageClaim:dA},s=Je(()=>sM[e.value]);return(i,r)=>(he(),_e("section",{id:"use-cases",class:Re(["py-20 px-4 transition-colors duration-300",t.isDarkMode?"bg-base-300":"bg-base-200"])},[D("div",iM,[D("h2",rM,ue(s.value.title),1),D("h3",oM,ue(s.value.subtitle),1),D("div",aM,[(he(!0),_e(nt,null,yn(s.value.features,o=>(he(),_e("div",{key:o.title,class:Re(["p-6 rounded-lg transition-colors duration-300",t.isDarkMode?"bg-base-400":"bg-base-100"])},[(he(),ji(T_(n[o.icon]),{class:"w-12 h-12 text-base-200 mb-4"})),D("h3",lM,ue(o.title),1),D("p",{class:Re(t.isDarkMode?"text-primary-100":"text-base-300")},ue(o.description),3)],2))),128))])])],2))}},uM={id:"waiting-list",class:"pt-28 pb-14 md:py-12 px-4"},hM={class:"container mx-auto w-auto md:w-3/5 flex flex-col"},dM={class:"text-2xl font-semibold text-center"},fM={class:"text-center my-6 w-full"},pM={__name:"WaitingListSection",props:["isDarkMode"],setup(t){const{language:e}=rs(),n=Je(()=>Dw[e.value]);return(s,i)=>(he(),_e("div",uM,[D("div",hM,[D("h2",dM,ue(n.value.title),1),D("p",fM,ue(n.value.subtitle),1),ye(Nw,{cta:n.value.cta,isDarkMode:t.isDarkMode},null,8,["cta","isDarkMode"])])]))}},mM="/assets/logo-css-peq-removebg-CwW5Ofir.png",gM={class:"container mx-auto flex flex-col justify-center items-center md:flex-row flex-wrap"},_M={class:"flex flex-col gap-8 md:container md:flex-row md:items-center md:justify-between my-4 p-2"},yM={class:"flex flex-row justify-center gap-8"},vM={href:"https://instagram.com/docutrack",target:"_blank",rel:"noopener noreferrer",class:"text-xl"},EM={href:"https://linkedin.com/company/docutrack",target:"_blank",rel:"noopener noreferrer",class:"text-xl"},wM={class:"px-2 flex flex-col md:flex-row md:container md:items-center md:justify-between"},TM={class:"py-4"},bM={class:"flex flex-col items-center gap-6 text-md font-semibold md:flex-row"},IM=["href"],AM={class:"py-4 text-center text-sm flex flex-col items-center md:flex-row md:justify-between gap-6"},CM={class:"flex flex-row justify-start items-center gap-2"},Ow={__name:"FooterComponent",props:["isDarkMode","navItems"],setup(t){return(e,n)=>(he(),_e("footer",{class:Re(["py-4 px-4 transition-colors duration-300",t.isDarkMode?"bg-base-300":"bg-base-200"])},[D("div",gM,[D("div",_M,[n[0]||(n[0]=D("a",{class:"text-2xl underline-offset-1",mailto:"hello@docutrack.cloud"},"hello@docutrack.cloud",-1)),D("div",yM,[D("a",vM,[ye(rt(AA),{class:"h-6 w-auto"})]),D("a",EM,[ye(rt(SA),{class:"h-6 w-auto"})])])]),D("div",wM,[D("div",TM,[D("nav",bM,[(he(!0),_e(nt,null,yn(t.navItems,s=>(he(),_e("a",{key:s.name,href:`#${s.link.toLowerCase()}`},ue(s.name),9,IM))),128))])]),D("div",AM,[D("div",CM,[D("span",null,"© "+ue(new Date().getFullYear())+" Docutrack - designed with",1),ye(rt(IA),{class:"h-4 w-auto my-auto text-red"}),n[1]||(n[1]=D("span",null,"Worldwide",-1))]),n[2]||(n[2]=D("img",{src:mM,alt:"Consultoría y Servicios de Software S.A.S.",class:"h-10 w-auto"},null,-1))])])])],2))}},SM={__name:"HomeView",setup(t){const{pageview:e}=rr();e({page_path:"/"});const{language:n}=rs(),s=bt(!1),i=Je(()=>aA[n.value]),r=()=>{s.value=!s.value};return(o,a)=>(he(),_e("div",{class:Re(["min-h-screen transition-colors duration-300",s.value?"bg-base-400 text-base-100":"bg-base-100 text-base-400"])},[ye(fy,{isDarkMode:s.value,navItems:i.value,onSwitchTheme:r},null,8,["isDarkMode","navItems"]),ye(Q2,{isDarkMode:s.value},null,8,["isDarkMode"]),ye(iO,{isDarkMode:s.value},null,8,["isDarkMode"]),ye(CO,{isDarkMode:s.value},null,8,["isDarkMode"]),ye(VO,{isDarkMode:s.value},null,8,["isDarkMode"]),ye(ZO,{isDarkMode:s.value},null,8,["isDarkMode"]),ye(cM,{isDarkMode:s.value},null,8,["isDarkMode"]),ye(pM,{isDarkMode:s.value},null,8,["isDarkMode"]),ye(Ow,{isDarkMode:s.value,navItems:i.value},null,8,["isDarkMode","navItems"])],2))}},RM={class:"px-4 sm:px-6 lg:px-8"},kM={class:"mt-8 flow-root"},PM={class:"-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},xM={class:"inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"},NM={class:"min-w-full divide-y divide-gray-300"},DM={class:"divide-y divide-gray-200"},OM={class:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},MM={class:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},LM={class:"relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"},VM={href:"#",class:"text-indigo-600 hover:text-indigo-900"},FM={class:"sr-only"},UM={__name:"WaitlistView",setup(t){const{pageview:e}=rr();e({page_path:"/waitlist"}),Pw(Lv(db,"waitlistCollection"));const n=bt(!1),s=["Features","Solution","FAQ","Pricing"],i=()=>{n.value=!n.value};return(r,o)=>(he(),_e("div",{class:Re(["min-h-screen transition-colors duration-300",n.value?"bg-base-400 text-base-100":"bg-base-100 text-base-400"])},[ye(fy,{isDarkMode:n.value,navItems:s,onSwitchTheme:i},null,8,["isDarkMode"]),D("div",null,[D("div",RM,[D("div",kM,[D("div",PM,[D("div",xM,[D("table",NM,[o[1]||(o[1]=D("thead",null,[D("tr",null,[D("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},"Email"),D("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},"Date"),D("th",{scope:"col",class:"relative py-3.5 pl-3 pr-4 sm:pr-0"},[D("span",{class:"sr-only"},"Edit")])])],-1)),D("tbody",DM,[(he(!0),_e(nt,null,yn(r.people,a=>(he(),_e("tr",{key:a.email},[D("td",OM,ue(a.email),1),D("td",MM,ue(a.date),1),D("td",LM,[D("a",VM,[o[0]||(o[0]=ui("Edit")),D("span",FM,", "+ue(a.name),1)])])]))),128))])])])])])])]),ye(Ow,{isDarkMode:n.value,navItems:s},null,8,["isDarkMode"])],2))}},BM={class:"grid min-h-full place-items-center bg-white px-6 py-32"},$M={class:"text-center"},zM={class:"mt-10"},jM={__name:"NotFoundView",setup(t){return(e,n)=>(he(),_e("main",BM,[D("div",$M,[n[1]||(n[1]=D("h2",{class:"text-5xl font-semibold text-green-600"},"404",-1)),n[2]||(n[2]=D("h1",{class:"mt-4 text-7xl font-semibold text-gray-900"},"Page not found",-1)),n[3]||(n[3]=D("p",{class:"mt-6 text-lg font-medium text-gray-500"},"Sorry, we couldn’t find the page you’re looking for.",-1)),D("div",zM,[ye(rt(cy),{to:"/",class:"rounded-md bg-green-600 px-3 py-3 font-semibold text-white hover:bg-green-500"},{default:Ua(()=>n[0]||(n[0]=[ui("Go back home")])),_:1})])])]))}},Mw=V0({history:f0("/"),routes:[{path:"/",name:"home",component:SM},{path:"/waitlist",name:"waitlist",component:UM},{path:"/:catchall(.*)*",name:"not-found",component:jM}]}),ac=xI(LI);ac.use(R2,{firebaseApp:xw});ac.use(nA,{property:{id:"G-ZQ5QSM665B"}},Mw);ac.use(Mw);ac.mount("#app");
