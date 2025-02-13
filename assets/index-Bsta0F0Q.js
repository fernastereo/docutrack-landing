(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function uh(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const $e={},Oi=[],Dn=()=>{},pT=()=>!1,vl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),hh=t=>t.startsWith("onUpdate:"),mt=Object.assign,dh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},mT=Object.prototype.hasOwnProperty,Me=(t,e)=>mT.call(t,e),he=Array.isArray,Mi=t=>El(t)==="[object Map]",Og=t=>El(t)==="[object Set]",pe=t=>typeof t=="function",Ze=t=>typeof t=="string",Vs=t=>typeof t=="symbol",We=t=>t!==null&&typeof t=="object",Mg=t=>(We(t)||pe(t))&&pe(t.then)&&pe(t.catch),Lg=Object.prototype.toString,El=t=>Lg.call(t),gT=t=>El(t).slice(8,-1),Vg=t=>El(t)==="[object Object]",fh=t=>Ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,qr=uh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},_T=/-(\w)/g,ln=wl(t=>t.replace(_T,(e,n)=>n?n.toUpperCase():"")),yT=/\B([A-Z])/g,hi=wl(t=>t.replace(yT,"-$1").toLowerCase()),Tl=wl(t=>t.charAt(0).toUpperCase()+t.slice(1)),wc=wl(t=>t?`on${Tl(t)}`:""),bs=(t,e)=>!Object.is(t,e),va=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Fg=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},ru=t=>{const e=parseFloat(t);return isNaN(e)?t:e},vT=t=>{const e=Ze(t)?Number(t):NaN;return isNaN(e)?t:e};let Rf;const bl=()=>Rf||(Rf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ph(t){if(he(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Ze(s)?bT(s):ph(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(Ze(t)||We(t))return t}const ET=/;(?![^(]*\))/g,wT=/:([^]+)/,TT=/\/\*[^]*?\*\//g;function bT(t){const e={};return t.replace(TT,"").split(ET).forEach(n=>{if(n){const s=n.split(wT);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Re(t){let e="";if(Ze(t))e=t;else if(he(t))for(let n=0;n<t.length;n++){const s=Re(t[n]);s&&(e+=s+" ")}else if(We(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const IT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",AT=uh(IT);function Ug(t){return!!t||t===""}const Bg=t=>!!(t&&t.__v_isRef===!0),ce=t=>Ze(t)?t:t==null?"":he(t)||We(t)&&(t.toString===Lg||!pe(t.toString))?Bg(t)?ce(t.value):JSON.stringify(t,$g,2):String(t),$g=(t,e)=>Bg(e)?$g(t,e.value):Mi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Tc(s,r)+" =>"]=i,n),{})}:Og(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Tc(n))}:Vs(e)?Tc(e):We(e)&&!he(e)&&!Vg(e)?String(e):e,Tc=(t,e="")=>{var n;return Vs(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ft;class CT{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ft,!e&&Ft&&(this.index=(Ft.scopes||(Ft.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ft;try{return Ft=this,e()}finally{Ft=n}}}on(){Ft=this}off(){Ft=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function zg(){return Ft}function ST(t,e=!1){Ft&&Ft.cleanups.push(t)}let ze;const bc=new WeakSet;class jg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ft&&Ft.active&&Ft.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,bc.has(this)&&(bc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Hg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,kf(this),Wg(this);const e=ze,n=mn;ze=this,mn=!0;try{return this.fn()}finally{Kg(this),ze=e,mn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)_h(e);this.deps=this.depsTail=void 0,kf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?bc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ou(this)&&this.run()}get dirty(){return ou(this)}}let qg=0,Hr,Wr;function Hg(t,e=!1){if(t.flags|=8,e){t.next=Wr,Wr=t;return}t.next=Hr,Hr=t}function mh(){qg++}function gh(){if(--qg>0)return;if(Wr){let e=Wr;for(Wr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Hr;){let e=Hr;for(Hr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Wg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Kg(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),_h(s),RT(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function ou(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Gg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Gg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===lo))return;t.globalVersion=lo;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!ou(t)){t.flags&=-3;return}const n=ze,s=mn;ze=t,mn=!0;try{Wg(t);const i=t.fn(t._value);(e.version===0||bs(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ze=n,mn=s,Kg(t),t.flags&=-3}}function _h(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)_h(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function RT(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let mn=!0;const Qg=[];function Fs(){Qg.push(mn),mn=!1}function Us(){const t=Qg.pop();mn=t===void 0?!0:t}function kf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ze;ze=void 0;try{e()}finally{ze=n}}}let lo=0;class kT{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class yh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ze||!mn||ze===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ze)n=this.activeLink=new kT(ze,this),ze.deps?(n.prevDep=ze.depsTail,ze.depsTail.nextDep=n,ze.depsTail=n):ze.deps=ze.depsTail=n,Yg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ze.depsTail,n.nextDep=void 0,ze.depsTail.nextDep=n,ze.depsTail=n,ze.deps===n&&(ze.deps=s)}return n}trigger(e){this.version++,lo++,this.notify(e)}notify(e){mh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{gh()}}}function Yg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Yg(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const au=new WeakMap,ni=Symbol(""),lu=Symbol(""),co=Symbol("");function Pt(t,e,n){if(mn&&ze){let s=au.get(t);s||au.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new yh),i.map=s,i.key=n),i.track()}}function Qn(t,e,n,s,i,r){const o=au.get(t);if(!o){lo++;return}const l=c=>{c&&c.trigger()};if(mh(),e==="clear")o.forEach(l);else{const c=he(t),u=c&&fh(n);if(c&&n==="length"){const h=Number(s);o.forEach((f,m)=>{(m==="length"||m===co||!Vs(m)&&m>=h)&&l(f)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(co)),e){case"add":c?u&&l(o.get("length")):(l(o.get(ni)),Mi(t)&&l(o.get(lu)));break;case"delete":c||(l(o.get(ni)),Mi(t)&&l(o.get(lu)));break;case"set":Mi(t)&&l(o.get(ni));break}}gh()}function Ii(t){const e=Ne(t);return e===t?e:(Pt(e,"iterate",co),an(t)?e:e.map(xt))}function Il(t){return Pt(t=Ne(t),"iterate",co),t}const PT={__proto__:null,[Symbol.iterator](){return Ic(this,Symbol.iterator,xt)},concat(...t){return Ii(this).concat(...t.map(e=>he(e)?Ii(e):e))},entries(){return Ic(this,"entries",t=>(t[1]=xt(t[1]),t))},every(t,e){return jn(this,"every",t,e,void 0,arguments)},filter(t,e){return jn(this,"filter",t,e,n=>n.map(xt),arguments)},find(t,e){return jn(this,"find",t,e,xt,arguments)},findIndex(t,e){return jn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return jn(this,"findLast",t,e,xt,arguments)},findLastIndex(t,e){return jn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return jn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ac(this,"includes",t)},indexOf(...t){return Ac(this,"indexOf",t)},join(t){return Ii(this).join(t)},lastIndexOf(...t){return Ac(this,"lastIndexOf",t)},map(t,e){return jn(this,"map",t,e,void 0,arguments)},pop(){return Rr(this,"pop")},push(...t){return Rr(this,"push",t)},reduce(t,...e){return Pf(this,"reduce",t,e)},reduceRight(t,...e){return Pf(this,"reduceRight",t,e)},shift(){return Rr(this,"shift")},some(t,e){return jn(this,"some",t,e,void 0,arguments)},splice(...t){return Rr(this,"splice",t)},toReversed(){return Ii(this).toReversed()},toSorted(t){return Ii(this).toSorted(t)},toSpliced(...t){return Ii(this).toSpliced(...t)},unshift(...t){return Rr(this,"unshift",t)},values(){return Ic(this,"values",xt)}};function Ic(t,e,n){const s=Il(t),i=s[e]();return s!==t&&!an(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const xT=Array.prototype;function jn(t,e,n,s,i,r){const o=Il(t),l=o!==t&&!an(t),c=o[e];if(c!==xT[e]){const f=c.apply(t,r);return l?xt(f):f}let u=n;o!==t&&(l?u=function(f,m){return n.call(this,xt(f),m,t)}:n.length>2&&(u=function(f,m){return n.call(this,f,m,t)}));const h=c.call(o,u,s);return l&&i?i(h):h}function Pf(t,e,n,s){const i=Il(t);let r=n;return i!==t&&(an(t)?n.length>3&&(r=function(o,l,c){return n.call(this,o,l,c,t)}):r=function(o,l,c){return n.call(this,o,xt(l),c,t)}),i[e](r,...s)}function Ac(t,e,n){const s=Ne(t);Pt(s,"iterate",co);const i=s[e](...n);return(i===-1||i===!1)&&wh(n[0])?(n[0]=Ne(n[0]),s[e](...n)):i}function Rr(t,e,n=[]){Fs(),mh();const s=Ne(t)[e].apply(t,n);return gh(),Us(),s}const NT=uh("__proto__,__v_isRef,__isVue"),Xg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Vs));function DT(t){Vs(t)||(t=String(t));const e=Ne(this);return Pt(e,"has",t),e.hasOwnProperty(t)}class Jg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?jT:n_:r?t_:e_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=he(e);if(!i){let c;if(o&&(c=PT[n]))return c;if(n==="hasOwnProperty")return DT}const l=Reflect.get(e,n,Tt(e)?e:s);return(Vs(n)?Xg.has(n):NT(n))||(i||Pt(e,"get",n),r)?l:Tt(l)?o&&fh(n)?l:l.value:We(l)?i?i_(l):Al(l):l}}class Zg extends Jg{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const c=ii(r);if(!an(s)&&!ii(s)&&(r=Ne(r),s=Ne(s)),!he(e)&&Tt(r)&&!Tt(s))return c?!1:(r.value=s,!0)}const o=he(e)&&fh(n)?Number(n)<e.length:Me(e,n),l=Reflect.set(e,n,s,Tt(e)?e:i);return e===Ne(i)&&(o?bs(s,r)&&Qn(e,"set",n,s):Qn(e,"add",n,s)),l}deleteProperty(e,n){const s=Me(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Qn(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Vs(n)||!Xg.has(n))&&Pt(e,"has",n),s}ownKeys(e){return Pt(e,"iterate",he(e)?"length":ni),Reflect.ownKeys(e)}}class OT extends Jg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const MT=new Zg,LT=new OT,VT=new Zg(!0);const cu=t=>t,ia=t=>Reflect.getPrototypeOf(t);function FT(t,e,n){return function(...s){const i=this.__v_raw,r=Ne(i),o=Mi(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=i[t](...s),h=n?cu:e?uu:xt;return!e&&Pt(r,"iterate",c?lu:ni),{next(){const{value:f,done:m}=u.next();return m?{value:f,done:m}:{value:l?[h(f[0]),h(f[1])]:h(f),done:m}},[Symbol.iterator](){return this}}}}function ra(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function UT(t,e){const n={get(i){const r=this.__v_raw,o=Ne(r),l=Ne(i);t||(bs(i,l)&&Pt(o,"get",i),Pt(o,"get",l));const{has:c}=ia(o),u=e?cu:t?uu:xt;if(c.call(o,i))return u(r.get(i));if(c.call(o,l))return u(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Pt(Ne(i),"iterate",ni),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=Ne(r),l=Ne(i);return t||(bs(i,l)&&Pt(o,"has",i),Pt(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,c=Ne(l),u=e?cu:t?uu:xt;return!t&&Pt(c,"iterate",ni),l.forEach((h,f)=>i.call(r,u(h),u(f),o))}};return mt(n,t?{add:ra("add"),set:ra("set"),delete:ra("delete"),clear:ra("clear")}:{add(i){!e&&!an(i)&&!ii(i)&&(i=Ne(i));const r=Ne(this);return ia(r).has.call(r,i)||(r.add(i),Qn(r,"add",i,i)),this},set(i,r){!e&&!an(r)&&!ii(r)&&(r=Ne(r));const o=Ne(this),{has:l,get:c}=ia(o);let u=l.call(o,i);u||(i=Ne(i),u=l.call(o,i));const h=c.call(o,i);return o.set(i,r),u?bs(r,h)&&Qn(o,"set",i,r):Qn(o,"add",i,r),this},delete(i){const r=Ne(this),{has:o,get:l}=ia(r);let c=o.call(r,i);c||(i=Ne(i),c=o.call(r,i)),l&&l.call(r,i);const u=r.delete(i);return c&&Qn(r,"delete",i,void 0),u},clear(){const i=Ne(this),r=i.size!==0,o=i.clear();return r&&Qn(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=FT(i,t,e)}),n}function vh(t,e){const n=UT(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Me(n,i)&&i in s?n:s,i,r)}const BT={get:vh(!1,!1)},$T={get:vh(!1,!0)},zT={get:vh(!0,!1)};const e_=new WeakMap,t_=new WeakMap,n_=new WeakMap,jT=new WeakMap;function qT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function HT(t){return t.__v_skip||!Object.isExtensible(t)?0:qT(gT(t))}function Al(t){return ii(t)?t:Eh(t,!1,MT,BT,e_)}function s_(t){return Eh(t,!1,VT,$T,t_)}function i_(t){return Eh(t,!0,LT,zT,n_)}function Eh(t,e,n,s,i){if(!We(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=HT(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Li(t){return ii(t)?Li(t.__v_raw):!!(t&&t.__v_isReactive)}function ii(t){return!!(t&&t.__v_isReadonly)}function an(t){return!!(t&&t.__v_isShallow)}function wh(t){return t?!!t.__v_raw:!1}function Ne(t){const e=t&&t.__v_raw;return e?Ne(e):t}function WT(t){return!Me(t,"__v_skip")&&Object.isExtensible(t)&&Fg(t,"__v_skip",!0),t}const xt=t=>We(t)?Al(t):t,uu=t=>We(t)?i_(t):t;function Tt(t){return t?t.__v_isRef===!0:!1}function Bt(t){return o_(t,!1)}function r_(t){return o_(t,!0)}function o_(t,e){return Tt(t)?t:new KT(t,e)}class KT{constructor(e,n){this.dep=new yh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ne(e),this._value=n?e:xt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||an(e)||ii(e);e=s?e:Ne(e),bs(e,n)&&(this._rawValue=e,this._value=s?e:xt(e),this.dep.trigger())}}function it(t){return Tt(t)?t.value:t}function Kn(t){return pe(t)?t():it(t)}const GT={get:(t,e,n)=>e==="__v_raw"?t:it(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Tt(i)&&!Tt(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function a_(t){return Li(t)?t:new Proxy(t,GT)}class QT{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new yh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=lo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ze!==this)return Hg(this,!0),!0}get value(){const e=this.dep.track();return Gg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function YT(t,e,n=!1){let s,i;return pe(t)?s=t:(s=t.get,i=t.set),new QT(s,i,n)}const oa={},Na=new WeakMap;let Qs;function XT(t,e=!1,n=Qs){if(n){let s=Na.get(n);s||Na.set(n,s=[]),s.push(t)}}function JT(t,e,n=$e){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:c}=n,u=M=>i?M:an(M)||i===!1||i===0?Yn(M,1):Yn(M);let h,f,m,g,A=!1,R=!1;if(Tt(t)?(f=()=>t.value,A=an(t)):Li(t)?(f=()=>u(t),A=!0):he(t)?(R=!0,A=t.some(M=>Li(M)||an(M)),f=()=>t.map(M=>{if(Tt(M))return M.value;if(Li(M))return u(M);if(pe(M))return c?c(M,2):M()})):pe(t)?e?f=c?()=>c(t,2):t:f=()=>{if(m){Fs();try{m()}finally{Us()}}const M=Qs;Qs=h;try{return c?c(t,3,[g]):t(g)}finally{Qs=M}}:f=Dn,e&&i){const M=f,ee=i===!0?1/0:i;f=()=>Yn(M(),ee)}const x=zg(),F=()=>{h.stop(),x&&x.active&&dh(x.effects,h)};if(r&&e){const M=e;e=(...ee)=>{M(...ee),F()}}let U=R?new Array(t.length).fill(oa):oa;const O=M=>{if(!(!(h.flags&1)||!h.dirty&&!M))if(e){const ee=h.run();if(i||A||(R?ee.some((te,C)=>bs(te,U[C])):bs(ee,U))){m&&m();const te=Qs;Qs=h;try{const C=[ee,U===oa?void 0:R&&U[0]===oa?[]:U,g];c?c(e,3,C):e(...C),U=ee}finally{Qs=te}}}else h.run()};return l&&l(O),h=new jg(f),h.scheduler=o?()=>o(O,!1):O,g=M=>XT(M,!1,h),m=h.onStop=()=>{const M=Na.get(h);if(M){if(c)c(M,4);else for(const ee of M)ee();Na.delete(h)}},e?s?O(!0):U=h.run():o?o(O.bind(null,!0),!0):h.run(),F.pause=h.pause.bind(h),F.resume=h.resume.bind(h),F.stop=F,F}function Yn(t,e=1/0,n){if(e<=0||!We(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Tt(t))Yn(t.value,e,n);else if(he(t))for(let s=0;s<t.length;s++)Yn(t[s],e,n);else if(Og(t)||Mi(t))t.forEach(s=>{Yn(s,e,n)});else if(Vg(t)){for(const s in t)Yn(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Yn(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ro(t,e,n,s){try{return s?t(...s):t()}catch(i){Cl(i,e,n)}}function yn(t,e,n,s){if(pe(t)){const i=Ro(t,e,n,s);return i&&Mg(i)&&i.catch(r=>{Cl(r,e,n)}),i}if(he(t)){const i=[];for(let r=0;r<t.length;r++)i.push(yn(t[r],e,n,s));return i}}function Cl(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||$e;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const h=l.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](t,c,u)===!1)return}l=l.parent}if(r){Fs(),Ro(r,null,10,[t,c,u]),Us();return}}ZT(t,n,i,s,o)}function ZT(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Ut=[];let Sn=-1;const Vi=[];let _s=null,Ai=0;const l_=Promise.resolve();let Da=null;function Oa(t){const e=Da||l_;return t?e.then(this?t.bind(this):t):e}function eb(t){let e=Sn+1,n=Ut.length;for(;e<n;){const s=e+n>>>1,i=Ut[s],r=uo(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function Th(t){if(!(t.flags&1)){const e=uo(t),n=Ut[Ut.length-1];!n||!(t.flags&2)&&e>=uo(n)?Ut.push(t):Ut.splice(eb(e),0,t),t.flags|=1,c_()}}function c_(){Da||(Da=l_.then(h_))}function tb(t){he(t)?Vi.push(...t):_s&&t.id===-1?_s.splice(Ai+1,0,t):t.flags&1||(Vi.push(t),t.flags|=1),c_()}function xf(t,e,n=Sn+1){for(;n<Ut.length;n++){const s=Ut[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Ut.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function u_(t){if(Vi.length){const e=[...new Set(Vi)].sort((n,s)=>uo(n)-uo(s));if(Vi.length=0,_s){_s.push(...e);return}for(_s=e,Ai=0;Ai<_s.length;Ai++){const n=_s[Ai];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}_s=null,Ai=0}}const uo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function h_(t){try{for(Sn=0;Sn<Ut.length;Sn++){const e=Ut[Sn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ro(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Sn<Ut.length;Sn++){const e=Ut[Sn];e&&(e.flags&=-2)}Sn=-1,Ut.length=0,u_(),Da=null,(Ut.length||Vi.length)&&h_()}}let qt=null,d_=null;function Ma(t){const e=qt;return qt=t,d_=t&&t.type.__scopeId||null,e}function La(t,e=qt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&zf(-1);const r=Ma(e);let o;try{o=t(...i)}finally{Ma(r),s._d&&zf(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function f_(t,e){if(qt===null)return t;const n=xl(qt),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,c=$e]=e[i];r&&(pe(r)&&(r={mounted:r,updated:r}),r.deep&&Yn(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Hs(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(Fs(),yn(c,n,8,[t.el,l,t,e]),Us())}}const nb=Symbol("_vte"),p_=t=>t.__isTeleport,ys=Symbol("_leaveCb"),aa=Symbol("_enterCb");function sb(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return bh(()=>{t.isMounted=!0}),b_(()=>{t.isUnmounting=!0}),t}const sn=[Function,Array],m_={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:sn,onEnter:sn,onAfterEnter:sn,onEnterCancelled:sn,onBeforeLeave:sn,onLeave:sn,onAfterLeave:sn,onLeaveCancelled:sn,onBeforeAppear:sn,onAppear:sn,onAfterAppear:sn,onAppearCancelled:sn},g_=t=>{const e=t.subTree;return e.component?g_(e.component):e},ib={name:"BaseTransition",props:m_,setup(t,{slots:e}){const n=Sh(),s=sb();return()=>{const i=e.default&&v_(e.default(),!0);if(!i||!i.length)return;const r=__(i),o=Ne(t),{mode:l}=o;if(s.isLeaving)return Cc(r);const c=Nf(r);if(!c)return Cc(r);let u=hu(c,o,s,n,f=>u=f);c.type!==jt&&ho(c,u);let h=n.subTree&&Nf(n.subTree);if(h&&h.type!==jt&&!Js(c,h)&&g_(n).type!==jt){let f=hu(h,o,s,n);if(ho(h,f),l==="out-in"&&c.type!==jt)return s.isLeaving=!0,f.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,h=void 0},Cc(r);l==="in-out"&&c.type!==jt?f.delayLeave=(m,g,A)=>{const R=y_(s,h);R[String(h.key)]=h,m[ys]=()=>{g(),m[ys]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{A(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return r}}};function __(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==jt){e=n;break}}return e}const rb=ib;function y_(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function hu(t,e,n,s,i){const{appear:r,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:m,onLeave:g,onAfterLeave:A,onLeaveCancelled:R,onBeforeAppear:x,onAppear:F,onAfterAppear:U,onAppearCancelled:O}=e,M=String(t.key),ee=y_(n,t),te=(v,I)=>{v&&yn(v,s,9,I)},C=(v,I)=>{const S=I[1];te(v,I),he(v)?v.every(b=>b.length<=1)&&S():v.length<=1&&S()},y={mode:o,persisted:l,beforeEnter(v){let I=c;if(!n.isMounted)if(r)I=x||c;else return;v[ys]&&v[ys](!0);const S=ee[M];S&&Js(t,S)&&S.el[ys]&&S.el[ys](),te(I,[v])},enter(v){let I=u,S=h,b=f;if(!n.isMounted)if(r)I=F||u,S=U||h,b=O||f;else return;let E=!1;const Fe=v[aa]=at=>{E||(E=!0,at?te(b,[v]):te(S,[v]),y.delayedLeave&&y.delayedLeave(),v[aa]=void 0)};I?C(I,[v,Fe]):Fe()},leave(v,I){const S=String(t.key);if(v[aa]&&v[aa](!0),n.isUnmounting)return I();te(m,[v]);let b=!1;const E=v[ys]=Fe=>{b||(b=!0,I(),Fe?te(R,[v]):te(A,[v]),v[ys]=void 0,ee[S]===t&&delete ee[S])};ee[S]=t,g?C(g,[v,E]):E()},clone(v){const I=hu(v,e,n,s,i);return i&&i(I),I}};return y}function Cc(t){if(Sl(t))return t=Ps(t),t.children=null,t}function Nf(t){if(!Sl(t))return p_(t.type)&&t.children?__(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&pe(n.default))return n.default()}}function ho(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ho(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function v_(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===tt?(o.patchFlag&128&&i++,s=s.concat(v_(o.children,e,l))):(e||o.type!==jt)&&s.push(l!=null?Ps(o,{key:l}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function E_(t,e){return pe(t)?mt({name:t.name},e,{setup:t}):t}function w_(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Va(t,e,n,s,i=!1){if(he(t)){t.forEach((A,R)=>Va(A,e&&(he(e)?e[R]:e),n,s,i));return}if(Kr(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Va(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?xl(s.component):s.el,o=i?null:r,{i:l,r:c}=t,u=e&&e.r,h=l.refs===$e?l.refs={}:l.refs,f=l.setupState,m=Ne(f),g=f===$e?()=>!1:A=>Me(m,A);if(u!=null&&u!==c&&(Ze(u)?(h[u]=null,g(u)&&(f[u]=null)):Tt(u)&&(u.value=null)),pe(c))Ro(c,l,12,[o,h]);else{const A=Ze(c),R=Tt(c);if(A||R){const x=()=>{if(t.f){const F=A?g(c)?f[c]:h[c]:c.value;i?he(F)&&dh(F,r):he(F)?F.includes(r)||F.push(r):A?(h[c]=[r],g(c)&&(f[c]=h[c])):(c.value=[r],t.k&&(h[t.k]=c.value))}else A?(h[c]=o,g(c)&&(f[c]=o)):R&&(c.value=o,t.k&&(h[t.k]=o))};o?(x.id=-1,Gt(x,n)):x()}}}bl().requestIdleCallback;bl().cancelIdleCallback;const Kr=t=>!!t.type.__asyncLoader,Sl=t=>t.type.__isKeepAlive;function ob(t,e){T_(t,"a",e)}function ab(t,e){T_(t,"da",e)}function T_(t,e,n=vt){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Rl(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Sl(i.parent.vnode)&&lb(s,e,n,i),i=i.parent}}function lb(t,e,n,s){const i=Rl(e,t,s,!0);Ih(()=>{dh(s[e],i)},n)}function Rl(t,e,n=vt,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Fs();const l=ko(n),c=yn(e,n,t,o);return l(),Us(),c});return s?i.unshift(r):i.push(r),r}}const rs=t=>(e,n=vt)=>{(!po||t==="sp")&&Rl(t,(...s)=>e(...s),n)},cb=rs("bm"),bh=rs("m"),ub=rs("bu"),hb=rs("u"),b_=rs("bum"),Ih=rs("um"),I_=rs("sp"),fb=rs("rtg"),pb=rs("rtc");function mb(t,e=vt){Rl("ec",t,e)}const A_="components";function gb(t,e){return R_(A_,t,!0,e)||t}const C_=Symbol.for("v-ndc");function S_(t){return Ze(t)?R_(A_,t,!1)||t:t||C_}function R_(t,e,n=!0,s=!1){const i=qt||vt;if(i){const r=i.type;{const l=nI(r,!1);if(l&&(l===e||l===ln(e)||l===Tl(ln(e))))return r}const o=Df(i[t]||r[t],e)||Df(i.appContext[t],e);return!o&&s?r:o}}function Df(t,e){return t&&(t[e]||t[ln(e)]||t[Tl(ln(e))])}function vn(t,e,n,s){let i;const r=n,o=he(t);if(o||Ze(t)){const l=o&&Li(t);let c=!1;l&&(c=!an(t),t=Il(t)),i=new Array(t.length);for(let u=0,h=t.length;u<h;u++)i[u]=e(c?xt(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,r)}else if(We(t))if(t[Symbol.iterator])i=Array.from(t,(l,c)=>e(l,c,void 0,r));else{const l=Object.keys(t);i=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const h=l[c];i[c]=e(t[h],h,c,r)}}else i=[];return i}const du=t=>t?Q_(t)?xl(t):du(t.parent):null,Gr=mt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>du(t.parent),$root:t=>du(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>P_(t),$forceUpdate:t=>t.f||(t.f=()=>{Th(t.update)}),$nextTick:t=>t.n||(t.n=Oa.bind(t.proxy)),$watch:t=>Vb.bind(t)}),Sc=(t,e)=>t!==$e&&!t.__isScriptSetup&&Me(t,e),_b={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Sc(s,e))return o[e]=1,s[e];if(i!==$e&&Me(i,e))return o[e]=2,i[e];if((u=t.propsOptions[0])&&Me(u,e))return o[e]=3,r[e];if(n!==$e&&Me(n,e))return o[e]=4,n[e];fu&&(o[e]=0)}}const h=Gr[e];let f,m;if(h)return e==="$attrs"&&Pt(t.attrs,"get",""),h(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(n!==$e&&Me(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,Me(m,e))return m[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Sc(i,e)?(i[e]=n,!0):s!==$e&&Me(s,e)?(s[e]=n,!0):Me(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==$e&&Me(t,o)||Sc(e,o)||(l=r[0])&&Me(l,o)||Me(s,o)||Me(Gr,o)||Me(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Me(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Of(t){return he(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let fu=!0;function yb(t){const e=P_(t),n=t.proxy,s=t.ctx;fu=!1,e.beforeCreate&&Mf(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:u,created:h,beforeMount:f,mounted:m,beforeUpdate:g,updated:A,activated:R,deactivated:x,beforeDestroy:F,beforeUnmount:U,destroyed:O,unmounted:M,render:ee,renderTracked:te,renderTriggered:C,errorCaptured:y,serverPrefetch:v,expose:I,inheritAttrs:S,components:b,directives:E,filters:Fe}=e;if(u&&vb(u,s,null),o)for(const Ie in o){const Ee=o[Ie];pe(Ee)&&(s[Ie]=Ee.bind(n))}if(i){const Ie=i.call(n,n);We(Ie)&&(t.data=Al(Ie))}if(fu=!0,r)for(const Ie in r){const Ee=r[Ie],Wt=pe(Ee)?Ee.bind(n,n):pe(Ee.get)?Ee.get.bind(n,n):Dn,un=!pe(Ee)&&pe(Ee.set)?Ee.set.bind(n):Dn,en=lt({get:Wt,set:un});Object.defineProperty(s,Ie,{enumerable:!0,configurable:!0,get:()=>en.value,set:Ye=>en.value=Ye})}if(l)for(const Ie in l)k_(l[Ie],s,n,Ie);if(c){const Ie=pe(c)?c.call(n):c;Reflect.ownKeys(Ie).forEach(Ee=>{Ea(Ee,Ie[Ee])})}h&&Mf(h,t,"c");function Qe(Ie,Ee){he(Ee)?Ee.forEach(Wt=>Ie(Wt.bind(n))):Ee&&Ie(Ee.bind(n))}if(Qe(cb,f),Qe(bh,m),Qe(ub,g),Qe(hb,A),Qe(ob,R),Qe(ab,x),Qe(mb,y),Qe(pb,te),Qe(fb,C),Qe(b_,U),Qe(Ih,M),Qe(I_,v),he(I))if(I.length){const Ie=t.exposed||(t.exposed={});I.forEach(Ee=>{Object.defineProperty(Ie,Ee,{get:()=>n[Ee],set:Wt=>n[Ee]=Wt})})}else t.exposed||(t.exposed={});ee&&t.render===Dn&&(t.render=ee),S!=null&&(t.inheritAttrs=S),b&&(t.components=b),E&&(t.directives=E),v&&w_(t)}function vb(t,e,n=Dn){he(t)&&(t=pu(t));for(const s in t){const i=t[s];let r;We(i)?"default"in i?r=gn(i.from||s,i.default,!0):r=gn(i.from||s):r=gn(i),Tt(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Mf(t,e,n){yn(he(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function k_(t,e,n,s){let i=s.includes(".")?q_(n,s):()=>n[s];if(Ze(t)){const r=e[t];pe(r)&&si(i,r)}else if(pe(t))si(i,t.bind(n));else if(We(t))if(he(t))t.forEach(r=>k_(r,e,n,s));else{const r=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(r)&&si(i,r,t)}}function P_(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(u=>Fa(c,u,o,!0)),Fa(c,e,o)),We(e)&&r.set(e,c),c}function Fa(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Fa(t,r,n,!0),i&&i.forEach(o=>Fa(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Eb[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Eb={data:Lf,props:Vf,emits:Vf,methods:Vr,computed:Vr,beforeCreate:Vt,created:Vt,beforeMount:Vt,mounted:Vt,beforeUpdate:Vt,updated:Vt,beforeDestroy:Vt,beforeUnmount:Vt,destroyed:Vt,unmounted:Vt,activated:Vt,deactivated:Vt,errorCaptured:Vt,serverPrefetch:Vt,components:Vr,directives:Vr,watch:Tb,provide:Lf,inject:wb};function Lf(t,e){return e?t?function(){return mt(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function wb(t,e){return Vr(pu(t),pu(e))}function pu(t){if(he(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Vt(t,e){return t?[...new Set([].concat(t,e))]:e}function Vr(t,e){return t?mt(Object.create(null),t,e):e}function Vf(t,e){return t?he(t)&&he(e)?[...new Set([...t,...e])]:mt(Object.create(null),Of(t),Of(e??{})):e}function Tb(t,e){if(!t)return e;if(!e)return t;const n=mt(Object.create(null),t);for(const s in e)n[s]=Vt(t[s],e[s]);return n}function x_(){return{app:null,config:{isNativeTag:pT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bb=0;function Ib(t,e){return function(s,i=null){pe(s)||(s=mt({},s)),i!=null&&!We(i)&&(i=null);const r=x_(),o=new WeakSet,l=[];let c=!1;const u=r.app={_uid:bb++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:iI,get config(){return r.config},set config(h){},use(h,...f){return o.has(h)||(h&&pe(h.install)?(o.add(h),h.install(u,...f)):pe(h)&&(o.add(h),h(u,...f))),u},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),u},component(h,f){return f?(r.components[h]=f,u):r.components[h]},directive(h,f){return f?(r.directives[h]=f,u):r.directives[h]},mount(h,f,m){if(!c){const g=u._ceVNode||ye(s,i);return g.appContext=r,m===!0?m="svg":m===!1&&(m=void 0),t(g,h,m),c=!0,u._container=h,h.__vue_app__=u,xl(g.component)}},onUnmount(h){l.push(h)},unmount(){c&&(yn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,f){return r.provides[h]=f,u},runWithContext(h){const f=Fi;Fi=u;try{return h()}finally{Fi=f}}};return u}}let Fi=null;function Ea(t,e){if(vt){let n=vt.provides;const s=vt.parent&&vt.parent.provides;s===n&&(n=vt.provides=Object.create(s)),n[t]=e}}function gn(t,e,n=!1){const s=vt||qt;if(s||Fi){const i=Fi?Fi._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&pe(e)?e.call(s&&s.proxy):e}}const N_={},D_=()=>Object.create(N_),O_=t=>Object.getPrototypeOf(t)===N_;function Ab(t,e,n,s=!1){const i={},r=D_();t.propsDefaults=Object.create(null),M_(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:s_(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Cb(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=Ne(i),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let f=0;f<h.length;f++){let m=h[f];if(kl(t.emitsOptions,m))continue;const g=e[m];if(c)if(Me(r,m))g!==r[m]&&(r[m]=g,u=!0);else{const A=ln(m);i[A]=mu(c,l,A,g,t,!1)}else g!==r[m]&&(r[m]=g,u=!0)}}}else{M_(t,e,i,r)&&(u=!0);let h;for(const f in l)(!e||!Me(e,f)&&((h=hi(f))===f||!Me(e,h)))&&(c?n&&(n[f]!==void 0||n[h]!==void 0)&&(i[f]=mu(c,l,f,void 0,t,!0)):delete i[f]);if(r!==l)for(const f in r)(!e||!Me(e,f))&&(delete r[f],u=!0)}u&&Qn(t.attrs,"set","")}function M_(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(qr(c))continue;const u=e[c];let h;i&&Me(i,h=ln(c))?!r||!r.includes(h)?n[h]=u:(l||(l={}))[h]=u:kl(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(r){const c=Ne(n),u=l||$e;for(let h=0;h<r.length;h++){const f=r[h];n[f]=mu(i,c,f,u[f],t,!Me(u,f))}}return o}function mu(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=Me(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&pe(c)){const{propsDefaults:u}=i;if(n in u)s=u[n];else{const h=ko(i);s=u[n]=c.call(null,e),h()}}else s=c;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===hi(n))&&(s=!0))}return s}const Sb=new WeakMap;function L_(t,e,n=!1){const s=n?Sb:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let c=!1;if(!pe(t)){const h=f=>{c=!0;const[m,g]=L_(f,e,!0);mt(o,m),g&&l.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!r&&!c)return We(t)&&s.set(t,Oi),Oi;if(he(r))for(let h=0;h<r.length;h++){const f=ln(r[h]);Ff(f)&&(o[f]=$e)}else if(r)for(const h in r){const f=ln(h);if(Ff(f)){const m=r[h],g=o[f]=he(m)||pe(m)?{type:m}:mt({},m),A=g.type;let R=!1,x=!0;if(he(A))for(let F=0;F<A.length;++F){const U=A[F],O=pe(U)&&U.name;if(O==="Boolean"){R=!0;break}else O==="String"&&(x=!1)}else R=pe(A)&&A.name==="Boolean";g[0]=R,g[1]=x,(R||Me(g,"default"))&&l.push(f)}}const u=[o,l];return We(t)&&s.set(t,u),u}function Ff(t){return t[0]!=="$"&&!qr(t)}const V_=t=>t[0]==="_"||t==="$stable",Ah=t=>he(t)?t.map(kn):[kn(t)],Rb=(t,e,n)=>{if(e._n)return e;const s=La((...i)=>Ah(e(...i)),n);return s._c=!1,s},F_=(t,e,n)=>{const s=t._ctx;for(const i in t){if(V_(i))continue;const r=t[i];if(pe(r))e[i]=Rb(i,r,s);else if(r!=null){const o=Ah(r);e[i]=()=>o}}},U_=(t,e)=>{const n=Ah(e);t.slots.default=()=>n},B_=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},kb=(t,e,n)=>{const s=t.slots=D_();if(t.vnode.shapeFlag&32){const i=e._;i?(B_(s,e,n),n&&Fg(s,"_",i,!0)):F_(e,s)}else e&&U_(t,e)},Pb=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=$e;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:B_(i,e,n):(r=!e.$stable,F_(e,i)),o=e}else e&&(U_(t,e),o={default:1});if(r)for(const l in i)!V_(l)&&o[l]==null&&delete i[l]},Gt=qb;function xb(t){return Nb(t)}function Nb(t,e){const n=bl();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:u,setElementText:h,parentNode:f,nextSibling:m,setScopeId:g=Dn,insertStaticContent:A}=t,R=(w,T,k,V=null,z=null,B=null,G=void 0,W=null,H=!!T.dynamicChildren)=>{if(w===T)return;w&&!Js(w,T)&&(V=L(w),Ye(w,z,B,!0),w=null),T.patchFlag===-2&&(H=!1,T.dynamicChildren=null);const{type:q,ref:oe,shapeFlag:X}=T;switch(q){case Pl:x(w,T,k,V);break;case jt:F(w,T,k,V);break;case wa:w==null&&U(T,k,V,G);break;case tt:b(w,T,k,V,z,B,G,W,H);break;default:X&1?ee(w,T,k,V,z,B,G,W,H):X&6?E(w,T,k,V,z,B,G,W,H):(X&64||X&128)&&q.process(w,T,k,V,z,B,G,W,H,ne)}oe!=null&&z&&Va(oe,w&&w.ref,B,T||w,!T)},x=(w,T,k,V)=>{if(w==null)s(T.el=l(T.children),k,V);else{const z=T.el=w.el;T.children!==w.children&&u(z,T.children)}},F=(w,T,k,V)=>{w==null?s(T.el=c(T.children||""),k,V):T.el=w.el},U=(w,T,k,V)=>{[w.el,w.anchor]=A(w.children,T,k,V,w.el,w.anchor)},O=({el:w,anchor:T},k,V)=>{let z;for(;w&&w!==T;)z=m(w),s(w,k,V),w=z;s(T,k,V)},M=({el:w,anchor:T})=>{let k;for(;w&&w!==T;)k=m(w),i(w),w=k;i(T)},ee=(w,T,k,V,z,B,G,W,H)=>{T.type==="svg"?G="svg":T.type==="math"&&(G="mathml"),w==null?te(T,k,V,z,B,G,W,H):v(w,T,z,B,G,W,H)},te=(w,T,k,V,z,B,G,W)=>{let H,q;const{props:oe,shapeFlag:X,transition:se,dirs:le}=w;if(H=w.el=o(w.type,B,oe&&oe.is,oe),X&8?h(H,w.children):X&16&&y(w.children,H,null,V,z,Rc(w,B),G,W),le&&Hs(w,null,V,"created"),C(H,w,w.scopeId,G,V),oe){for(const ge in oe)ge!=="value"&&!qr(ge)&&r(H,ge,null,oe[ge],B,V);"value"in oe&&r(H,"value",null,oe.value,B),(q=oe.onVnodeBeforeMount)&&Cn(q,V,w)}le&&Hs(w,null,V,"beforeMount");const ae=Db(z,se);ae&&se.beforeEnter(H),s(H,T,k),((q=oe&&oe.onVnodeMounted)||ae||le)&&Gt(()=>{q&&Cn(q,V,w),ae&&se.enter(H),le&&Hs(w,null,V,"mounted")},z)},C=(w,T,k,V,z)=>{if(k&&g(w,k),V)for(let B=0;B<V.length;B++)g(w,V[B]);if(z){let B=z.subTree;if(T===B||W_(B.type)&&(B.ssContent===T||B.ssFallback===T)){const G=z.vnode;C(w,G,G.scopeId,G.slotScopeIds,z.parent)}}},y=(w,T,k,V,z,B,G,W,H=0)=>{for(let q=H;q<w.length;q++){const oe=w[q]=W?vs(w[q]):kn(w[q]);R(null,oe,T,k,V,z,B,G,W)}},v=(w,T,k,V,z,B,G)=>{const W=T.el=w.el;let{patchFlag:H,dynamicChildren:q,dirs:oe}=T;H|=w.patchFlag&16;const X=w.props||$e,se=T.props||$e;let le;if(k&&Ws(k,!1),(le=se.onVnodeBeforeUpdate)&&Cn(le,k,T,w),oe&&Hs(T,w,k,"beforeUpdate"),k&&Ws(k,!0),(X.innerHTML&&se.innerHTML==null||X.textContent&&se.textContent==null)&&h(W,""),q?I(w.dynamicChildren,q,W,k,V,Rc(T,z),B):G||Ee(w,T,W,null,k,V,Rc(T,z),B,!1),H>0){if(H&16)S(W,X,se,k,z);else if(H&2&&X.class!==se.class&&r(W,"class",null,se.class,z),H&4&&r(W,"style",X.style,se.style,z),H&8){const ae=T.dynamicProps;for(let ge=0;ge<ae.length;ge++){const Ae=ae[ge],It=X[Ae],gt=se[Ae];(gt!==It||Ae==="value")&&r(W,Ae,It,gt,z,k)}}H&1&&w.children!==T.children&&h(W,T.children)}else!G&&q==null&&S(W,X,se,k,z);((le=se.onVnodeUpdated)||oe)&&Gt(()=>{le&&Cn(le,k,T,w),oe&&Hs(T,w,k,"updated")},V)},I=(w,T,k,V,z,B,G)=>{for(let W=0;W<T.length;W++){const H=w[W],q=T[W],oe=H.el&&(H.type===tt||!Js(H,q)||H.shapeFlag&70)?f(H.el):k;R(H,q,oe,null,V,z,B,G,!0)}},S=(w,T,k,V,z)=>{if(T!==k){if(T!==$e)for(const B in T)!qr(B)&&!(B in k)&&r(w,B,T[B],null,z,V);for(const B in k){if(qr(B))continue;const G=k[B],W=T[B];G!==W&&B!=="value"&&r(w,B,W,G,z,V)}"value"in k&&r(w,"value",T.value,k.value,z)}},b=(w,T,k,V,z,B,G,W,H)=>{const q=T.el=w?w.el:l(""),oe=T.anchor=w?w.anchor:l("");let{patchFlag:X,dynamicChildren:se,slotScopeIds:le}=T;le&&(W=W?W.concat(le):le),w==null?(s(q,k,V),s(oe,k,V),y(T.children||[],k,oe,z,B,G,W,H)):X>0&&X&64&&se&&w.dynamicChildren?(I(w.dynamicChildren,se,k,z,B,G,W),(T.key!=null||z&&T===z.subTree)&&$_(w,T,!0)):Ee(w,T,k,oe,z,B,G,W,H)},E=(w,T,k,V,z,B,G,W,H)=>{T.slotScopeIds=W,w==null?T.shapeFlag&512?z.ctx.activate(T,k,V,G,H):Fe(T,k,V,z,B,G,H):at(w,T,H)},Fe=(w,T,k,V,z,B,G)=>{const W=w.component=Xb(w,V,z);if(Sl(w)&&(W.ctx.renderer=ne),Jb(W,!1,G),W.asyncDep){if(z&&z.registerDep(W,Qe,G),!w.el){const H=W.subTree=ye(jt);F(null,H,T,k)}}else Qe(W,w,T,k,z,B,G)},at=(w,T,k)=>{const V=T.component=w.component;if(zb(w,T,k))if(V.asyncDep&&!V.asyncResolved){Ie(V,T,k);return}else V.next=T,V.update();else T.el=w.el,V.vnode=T},Qe=(w,T,k,V,z,B,G)=>{const W=()=>{if(w.isMounted){let{next:X,bu:se,u:le,parent:ae,vnode:ge}=w;{const At=z_(w);if(At){X&&(X.el=ge.el,Ie(w,X,G)),At.asyncDep.then(()=>{w.isUnmounted||W()});return}}let Ae=X,It;Ws(w,!1),X?(X.el=ge.el,Ie(w,X,G)):X=ge,se&&va(se),(It=X.props&&X.props.onVnodeBeforeUpdate)&&Cn(It,ae,X,ge),Ws(w,!0);const gt=Bf(w),tn=w.subTree;w.subTree=gt,R(tn,gt,f(tn.el),L(tn),w,z,B),X.el=gt.el,Ae===null&&jb(w,gt.el),le&&Gt(le,z),(It=X.props&&X.props.onVnodeUpdated)&&Gt(()=>Cn(It,ae,X,ge),z)}else{let X;const{el:se,props:le}=T,{bm:ae,m:ge,parent:Ae,root:It,type:gt}=w,tn=Kr(T);Ws(w,!1),ae&&va(ae),!tn&&(X=le&&le.onVnodeBeforeMount)&&Cn(X,Ae,T),Ws(w,!0);{It.ce&&It.ce._injectChildStyle(gt);const At=w.subTree=Bf(w);R(null,At,k,V,w,z,B),T.el=At.el}if(ge&&Gt(ge,z),!tn&&(X=le&&le.onVnodeMounted)){const At=T;Gt(()=>Cn(X,Ae,At),z)}(T.shapeFlag&256||Ae&&Kr(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&w.a&&Gt(w.a,z),w.isMounted=!0,T=k=V=null}};w.scope.on();const H=w.effect=new jg(W);w.scope.off();const q=w.update=H.run.bind(H),oe=w.job=H.runIfDirty.bind(H);oe.i=w,oe.id=w.uid,H.scheduler=()=>Th(oe),Ws(w,!0),q()},Ie=(w,T,k)=>{T.component=w;const V=w.vnode.props;w.vnode=T,w.next=null,Cb(w,T.props,V,k),Pb(w,T.children,k),Fs(),xf(w),Us()},Ee=(w,T,k,V,z,B,G,W,H=!1)=>{const q=w&&w.children,oe=w?w.shapeFlag:0,X=T.children,{patchFlag:se,shapeFlag:le}=T;if(se>0){if(se&128){un(q,X,k,V,z,B,G,W,H);return}else if(se&256){Wt(q,X,k,V,z,B,G,W,H);return}}le&8?(oe&16&&$t(q,z,B),X!==q&&h(k,X)):oe&16?le&16?un(q,X,k,V,z,B,G,W,H):$t(q,z,B,!0):(oe&8&&h(k,""),le&16&&y(X,k,V,z,B,G,W,H))},Wt=(w,T,k,V,z,B,G,W,H)=>{w=w||Oi,T=T||Oi;const q=w.length,oe=T.length,X=Math.min(q,oe);let se;for(se=0;se<X;se++){const le=T[se]=H?vs(T[se]):kn(T[se]);R(w[se],le,k,null,z,B,G,W,H)}q>oe?$t(w,z,B,!0,!1,X):y(T,k,V,z,B,G,W,H,X)},un=(w,T,k,V,z,B,G,W,H)=>{let q=0;const oe=T.length;let X=w.length-1,se=oe-1;for(;q<=X&&q<=se;){const le=w[q],ae=T[q]=H?vs(T[q]):kn(T[q]);if(Js(le,ae))R(le,ae,k,null,z,B,G,W,H);else break;q++}for(;q<=X&&q<=se;){const le=w[X],ae=T[se]=H?vs(T[se]):kn(T[se]);if(Js(le,ae))R(le,ae,k,null,z,B,G,W,H);else break;X--,se--}if(q>X){if(q<=se){const le=se+1,ae=le<oe?T[le].el:V;for(;q<=se;)R(null,T[q]=H?vs(T[q]):kn(T[q]),k,ae,z,B,G,W,H),q++}}else if(q>se)for(;q<=X;)Ye(w[q],z,B,!0),q++;else{const le=q,ae=q,ge=new Map;for(q=ae;q<=se;q++){const _t=T[q]=H?vs(T[q]):kn(T[q]);_t.key!=null&&ge.set(_t.key,q)}let Ae,It=0;const gt=se-ae+1;let tn=!1,At=0;const us=new Array(gt);for(q=0;q<gt;q++)us[q]=0;for(q=le;q<=X;q++){const _t=w[q];if(It>=gt){Ye(_t,z,B,!0);continue}let nn;if(_t.key!=null)nn=ge.get(_t.key);else for(Ae=ae;Ae<=se;Ae++)if(us[Ae-ae]===0&&Js(_t,T[Ae])){nn=Ae;break}nn===void 0?Ye(_t,z,B,!0):(us[nn-ae]=q+1,nn>=At?At=nn:tn=!0,R(_t,T[nn],k,null,z,B,G,W,H),It++)}const mr=tn?Ob(us):Oi;for(Ae=mr.length-1,q=gt-1;q>=0;q--){const _t=ae+q,nn=T[_t],zo=_t+1<oe?T[_t+1].el:V;us[q]===0?R(null,nn,k,zo,z,B,G,W,H):tn&&(Ae<0||q!==mr[Ae]?en(nn,k,zo,2):Ae--)}}},en=(w,T,k,V,z=null)=>{const{el:B,type:G,transition:W,children:H,shapeFlag:q}=w;if(q&6){en(w.component.subTree,T,k,V);return}if(q&128){w.suspense.move(T,k,V);return}if(q&64){G.move(w,T,k,ne);return}if(G===tt){s(B,T,k);for(let X=0;X<H.length;X++)en(H[X],T,k,V);s(w.anchor,T,k);return}if(G===wa){O(w,T,k);return}if(V!==2&&q&1&&W)if(V===0)W.beforeEnter(B),s(B,T,k),Gt(()=>W.enter(B),z);else{const{leave:X,delayLeave:se,afterLeave:le}=W,ae=()=>s(B,T,k),ge=()=>{X(B,()=>{ae(),le&&le()})};se?se(B,ae,ge):ge()}else s(B,T,k)},Ye=(w,T,k,V=!1,z=!1)=>{const{type:B,props:G,ref:W,children:H,dynamicChildren:q,shapeFlag:oe,patchFlag:X,dirs:se,cacheIndex:le}=w;if(X===-2&&(z=!1),W!=null&&Va(W,null,k,w,!0),le!=null&&(T.renderCache[le]=void 0),oe&256){T.ctx.deactivate(w);return}const ae=oe&1&&se,ge=!Kr(w);let Ae;if(ge&&(Ae=G&&G.onVnodeBeforeUnmount)&&Cn(Ae,T,w),oe&6)An(w.component,k,V);else{if(oe&128){w.suspense.unmount(k,V);return}ae&&Hs(w,null,T,"beforeUnmount"),oe&64?w.type.remove(w,T,k,ne,V):q&&!q.hasOnce&&(B!==tt||X>0&&X&64)?$t(q,T,k,!1,!0):(B===tt&&X&384||!z&&oe&16)&&$t(H,T,k),V&&Xe(w)}(ge&&(Ae=G&&G.onVnodeUnmounted)||ae)&&Gt(()=>{Ae&&Cn(Ae,T,w),ae&&Hs(w,null,T,"unmounted")},k)},Xe=w=>{const{type:T,el:k,anchor:V,transition:z}=w;if(T===tt){cs(k,V);return}if(T===wa){M(w);return}const B=()=>{i(k),z&&!z.persisted&&z.afterLeave&&z.afterLeave()};if(w.shapeFlag&1&&z&&!z.persisted){const{leave:G,delayLeave:W}=z,H=()=>G(k,B);W?W(w.el,B,H):H()}else B()},cs=(w,T)=>{let k;for(;w!==T;)k=m(w),i(w),w=k;i(T)},An=(w,T,k)=>{const{bum:V,scope:z,job:B,subTree:G,um:W,m:H,a:q}=w;Uf(H),Uf(q),V&&va(V),z.stop(),B&&(B.flags|=8,Ye(G,w,T,k)),W&&Gt(W,T),Gt(()=>{w.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},$t=(w,T,k,V=!1,z=!1,B=0)=>{for(let G=B;G<w.length;G++)Ye(w[G],T,k,V,z)},L=w=>{if(w.shapeFlag&6)return L(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const T=m(w.anchor||w.el),k=T&&T[nb];return k?m(k):T};let J=!1;const Y=(w,T,k)=>{w==null?T._vnode&&Ye(T._vnode,null,null,!0):R(T._vnode||null,w,T,null,null,null,k),T._vnode=w,J||(J=!0,xf(),u_(),J=!1)},ne={p:R,um:Ye,m:en,r:Xe,mt:Fe,mc:y,pc:Ee,pbc:I,n:L,o:t};return{render:Y,hydrate:void 0,createApp:Ib(Y)}}function Rc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ws({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Db(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function $_(t,e,n=!1){const s=t.children,i=e.children;if(he(s)&&he(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=vs(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&$_(o,l)),l.type===Pl&&(l.el=o.el)}}function Ob(t){const e=t.slice(),n=[0];let s,i,r,o,l;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(i=n[n.length-1],t[i]<u){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<u?r=l+1:o=l;u<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function z_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:z_(e)}function Uf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Mb=Symbol.for("v-scx"),Lb=()=>gn(Mb);function si(t,e,n){return j_(t,e,n)}function j_(t,e,n=$e){const{immediate:s,deep:i,flush:r,once:o}=n,l=mt({},n),c=e&&s||!e&&r!=="post";let u;if(po){if(r==="sync"){const g=Lb();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=Dn,g.resume=Dn,g.pause=Dn,g}}const h=vt;l.call=(g,A,R)=>yn(g,h,A,R);let f=!1;r==="post"?l.scheduler=g=>{Gt(g,h&&h.suspense)}:r!=="sync"&&(f=!0,l.scheduler=(g,A)=>{A?g():Th(g)}),l.augmentJob=g=>{e&&(g.flags|=4),f&&(g.flags|=2,h&&(g.id=h.uid,g.i=h))};const m=JT(t,e,l);return po&&(u?u.push(m):c&&m()),m}function Vb(t,e,n){const s=this.proxy,i=Ze(t)?t.includes(".")?q_(s,t):()=>s[t]:t.bind(s,s);let r;pe(e)?r=e:(r=e.handler,n=e);const o=ko(this),l=j_(i,r.bind(s),n);return o(),l}function q_(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const Fb=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${ln(e)}Modifiers`]||t[`${hi(e)}Modifiers`];function Ub(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||$e;let i=n;const r=e.startsWith("update:"),o=r&&Fb(s,e.slice(7));o&&(o.trim&&(i=n.map(h=>Ze(h)?h.trim():h)),o.number&&(i=n.map(ru)));let l,c=s[l=wc(e)]||s[l=wc(ln(e))];!c&&r&&(c=s[l=wc(hi(e))]),c&&yn(c,t,6,i);const u=s[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,yn(u,t,6,i)}}function H_(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!pe(t)){const c=u=>{const h=H_(u,e,!0);h&&(l=!0,mt(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(We(t)&&s.set(t,null),null):(he(r)?r.forEach(c=>o[c]=null):mt(o,r),We(t)&&s.set(t,o),o)}function kl(t,e){return!t||!vl(e)?!1:(e=e.slice(2).replace(/Once$/,""),Me(t,e[0].toLowerCase()+e.slice(1))||Me(t,hi(e))||Me(t,e))}function Bf(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:c,render:u,renderCache:h,props:f,data:m,setupState:g,ctx:A,inheritAttrs:R}=t,x=Ma(t);let F,U;try{if(n.shapeFlag&4){const M=i||s,ee=M;F=kn(u.call(ee,M,h,f,g,m,A)),U=l}else{const M=e;F=kn(M.length>1?M(f,{attrs:l,slots:o,emit:c}):M(f,null)),U=e.props?l:Bb(l)}}catch(M){Qr.length=0,Cl(M,t,1),F=ye(jt)}let O=F;if(U&&R!==!1){const M=Object.keys(U),{shapeFlag:ee}=O;M.length&&ee&7&&(r&&M.some(hh)&&(U=$b(U,r)),O=Ps(O,U,!1,!0))}return n.dirs&&(O=Ps(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&ho(O,n.transition),F=O,Ma(x),F}const Bb=t=>{let e;for(const n in t)(n==="class"||n==="style"||vl(n))&&((e||(e={}))[n]=t[n]);return e},$b=(t,e)=>{const n={};for(const s in t)(!hh(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function zb(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:c}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?$f(s,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let f=0;f<h.length;f++){const m=h[f];if(o[m]!==s[m]&&!kl(u,m))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?$f(s,o,u):!0:!!o;return!1}function $f(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!kl(n,r))return!0}return!1}function jb({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const W_=t=>t.__isSuspense;function qb(t,e){e&&e.pendingBranch?he(t)?e.effects.push(...t):e.effects.push(t):tb(t)}const tt=Symbol.for("v-fgt"),Pl=Symbol.for("v-txt"),jt=Symbol.for("v-cmt"),wa=Symbol.for("v-stc"),Qr=[];let Qt=null;function ue(t=!1){Qr.push(Qt=t?null:[])}function Hb(){Qr.pop(),Qt=Qr[Qr.length-1]||null}let fo=1;function zf(t,e=!1){fo+=t,t<0&&Qt&&e&&(Qt.hasOnce=!0)}function K_(t){return t.dynamicChildren=fo>0?Qt||Oi:null,Hb(),fo>0&&Qt&&Qt.push(t),t}function _e(t,e,n,s,i,r){return K_(D(t,e,n,s,i,r,!0))}function qi(t,e,n,s,i){return K_(ye(t,e,n,s,i,!0))}function Ua(t){return t?t.__v_isVNode===!0:!1}function Js(t,e){return t.type===e.type&&t.key===e.key}const G_=({key:t})=>t??null,Ta=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ze(t)||Tt(t)||pe(t)?{i:qt,r:t,k:e,f:!!n}:t:null);function D(t,e=null,n=null,s=0,i=null,r=t===tt?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&G_(e),ref:e&&Ta(e),scopeId:d_,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:qt};return l?(Ch(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=Ze(n)?8:16),fo>0&&!o&&Qt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Qt.push(c),c}const ye=Wb;function Wb(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===C_)&&(t=jt),Ua(t)){const l=Ps(t,e,!0);return n&&Ch(l,n),fo>0&&!r&&Qt&&(l.shapeFlag&6?Qt[Qt.indexOf(t)]=l:Qt.push(l)),l.patchFlag=-2,l}if(sI(t)&&(t=t.__vccOpts),e){e=Kb(e);let{class:l,style:c}=e;l&&!Ze(l)&&(e.class=Re(l)),We(c)&&(wh(c)&&!he(c)&&(c=mt({},c)),e.style=ph(c))}const o=Ze(t)?1:W_(t)?128:p_(t)?64:We(t)?4:pe(t)?2:0;return D(t,e,n,s,i,o,r,!0)}function Kb(t){return t?wh(t)||O_(t)?mt({},t):t:null}function Ps(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:c}=t,u=e?Gb(i||{},e):i,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&G_(u),ref:e&&e.ref?n&&r?he(r)?r.concat(Ta(e)):[r,Ta(e)]:Ta(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==tt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ps(t.ssContent),ssFallback:t.ssFallback&&Ps(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&ho(h,c.clone(h)),h}function di(t=" ",e=0){return ye(Pl,null,t,e)}function kc(t,e){const n=ye(wa,null,t);return n.staticCount=e,n}function Ba(t="",e=!1){return e?(ue(),qi(jt,null,t)):ye(jt,null,t)}function kn(t){return t==null||typeof t=="boolean"?ye(jt):he(t)?ye(tt,null,t.slice()):Ua(t)?vs(t):ye(Pl,null,String(t))}function vs(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ps(t)}function Ch(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(he(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Ch(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!O_(e)?e._ctx=qt:i===3&&qt&&(qt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:qt},n=32):(e=String(e),s&64?(n=16,e=[di(e)]):n=8);t.children=e,t.shapeFlag|=n}function Gb(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Re([e.class,s.class]));else if(i==="style")e.style=ph([e.style,s.style]);else if(vl(i)){const r=e[i],o=s[i];o&&r!==o&&!(he(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Cn(t,e,n,s=null){yn(t,e,7,[n,s])}const Qb=x_();let Yb=0;function Xb(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Qb,r={uid:Yb++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new CT(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:L_(s,i),emitsOptions:H_(s,i),emit:null,emitted:null,propsDefaults:$e,inheritAttrs:s.inheritAttrs,ctx:$e,data:$e,props:$e,attrs:$e,slots:$e,refs:$e,setupState:$e,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Ub.bind(null,r),t.ce&&t.ce(r),r}let vt=null;const Sh=()=>vt||qt;let $a,gu;{const t=bl(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};$a=e("__VUE_INSTANCE_SETTERS__",n=>vt=n),gu=e("__VUE_SSR_SETTERS__",n=>po=n)}const ko=t=>{const e=vt;return $a(t),t.scope.on(),()=>{t.scope.off(),$a(e)}},jf=()=>{vt&&vt.scope.off(),$a(null)};function Q_(t){return t.vnode.shapeFlag&4}let po=!1;function Jb(t,e=!1,n=!1){e&&gu(e);const{props:s,children:i}=t.vnode,r=Q_(t);Ab(t,s,r,e),kb(t,i,n);const o=r?Zb(t,e):void 0;return e&&gu(!1),o}function Zb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,_b);const{setup:s}=n;if(s){Fs();const i=t.setupContext=s.length>1?tI(t):null,r=ko(t),o=Ro(s,t,0,[t.props,i]),l=Mg(o);if(Us(),r(),(l||t.sp)&&!Kr(t)&&w_(t),l){if(o.then(jf,jf),e)return o.then(c=>{qf(t,c)}).catch(c=>{Cl(c,t,0)});t.asyncDep=o}else qf(t,o)}else Y_(t)}function qf(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:We(e)&&(t.setupState=a_(e)),Y_(t)}function Y_(t,e,n){const s=t.type;t.render||(t.render=s.render||Dn);{const i=ko(t);Fs();try{yb(t)}finally{Us(),i()}}}const eI={get(t,e){return Pt(t,"get",""),t[e]}};function tI(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,eI),slots:t.slots,emit:t.emit,expose:e}}function xl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(a_(WT(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Gr)return Gr[n](t)},has(e,n){return n in e||n in Gr}})):t.proxy}function nI(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function sI(t){return pe(t)&&"__vccOpts"in t}const lt=(t,e)=>YT(t,e,po);function Hi(t,e,n){const s=arguments.length;return s===2?We(e)&&!he(e)?Ua(e)?ye(t,null,[e]):ye(t,e):ye(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ua(n)&&(n=[n]),ye(t,e,n))}const iI="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _u;const Hf=typeof window<"u"&&window.trustedTypes;if(Hf)try{_u=Hf.createPolicy("vue",{createHTML:t=>t})}catch{}const X_=_u?t=>_u.createHTML(t):t=>t,rI="http://www.w3.org/2000/svg",oI="http://www.w3.org/1998/Math/MathML",Gn=typeof document<"u"?document:null,Wf=Gn&&Gn.createElement("template"),aI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?Gn.createElementNS(rI,t):e==="mathml"?Gn.createElementNS(oI,t):n?Gn.createElement(t,{is:n}):Gn.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Gn.createTextNode(t),createComment:t=>Gn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Gn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Wf.innerHTML=X_(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=Wf.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ps="transition",kr="animation",mo=Symbol("_vtc"),J_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},lI=mt({},m_,J_),cI=t=>(t.displayName="Transition",t.props=lI,t),Kf=cI((t,{slots:e})=>Hi(rb,uI(t),e)),Ks=(t,e=[])=>{he(t)?t.forEach(n=>n(...e)):t&&t(...e)},Gf=t=>t?he(t)?t.some(e=>e.length>1):t.length>1:!1;function uI(t){const e={};for(const b in t)b in J_||(e[b]=t[b]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=r,appearActiveClass:u=o,appearToClass:h=l,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,A=hI(i),R=A&&A[0],x=A&&A[1],{onBeforeEnter:F,onEnter:U,onEnterCancelled:O,onLeave:M,onLeaveCancelled:ee,onBeforeAppear:te=F,onAppear:C=U,onAppearCancelled:y=O}=e,v=(b,E,Fe,at)=>{b._enterCancelled=at,Gs(b,E?h:l),Gs(b,E?u:o),Fe&&Fe()},I=(b,E)=>{b._isLeaving=!1,Gs(b,f),Gs(b,g),Gs(b,m),E&&E()},S=b=>(E,Fe)=>{const at=b?C:U,Qe=()=>v(E,b,Fe);Ks(at,[E,Qe]),Qf(()=>{Gs(E,b?c:r),qn(E,b?h:l),Gf(at)||Yf(E,s,R,Qe)})};return mt(e,{onBeforeEnter(b){Ks(F,[b]),qn(b,r),qn(b,o)},onBeforeAppear(b){Ks(te,[b]),qn(b,c),qn(b,u)},onEnter:S(!1),onAppear:S(!0),onLeave(b,E){b._isLeaving=!0;const Fe=()=>I(b,E);qn(b,f),b._enterCancelled?(qn(b,m),Zf()):(Zf(),qn(b,m)),Qf(()=>{b._isLeaving&&(Gs(b,f),qn(b,g),Gf(M)||Yf(b,s,x,Fe))}),Ks(M,[b,Fe])},onEnterCancelled(b){v(b,!1,void 0,!0),Ks(O,[b])},onAppearCancelled(b){v(b,!0,void 0,!0),Ks(y,[b])},onLeaveCancelled(b){I(b),Ks(ee,[b])}})}function hI(t){if(t==null)return null;if(We(t))return[Pc(t.enter),Pc(t.leave)];{const e=Pc(t);return[e,e]}}function Pc(t){return vT(t)}function qn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[mo]||(t[mo]=new Set)).add(e)}function Gs(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[mo];n&&(n.delete(e),n.size||(t[mo]=void 0))}function Qf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let dI=0;function Yf(t,e,n,s){const i=t._endId=++dI,r=()=>{i===t._endId&&s()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:l,propCount:c}=fI(t,e);if(!o)return s();const u=o+"end";let h=0;const f=()=>{t.removeEventListener(u,m),r()},m=g=>{g.target===t&&++h>=c&&f()};setTimeout(()=>{h<c&&f()},l+1),t.addEventListener(u,m)}function fI(t,e){const n=window.getComputedStyle(t),s=A=>(n[A]||"").split(", "),i=s(`${ps}Delay`),r=s(`${ps}Duration`),o=Xf(i,r),l=s(`${kr}Delay`),c=s(`${kr}Duration`),u=Xf(l,c);let h=null,f=0,m=0;e===ps?o>0&&(h=ps,f=o,m=r.length):e===kr?u>0&&(h=kr,f=u,m=c.length):(f=Math.max(o,u),h=f>0?o>u?ps:kr:null,m=h?h===ps?r.length:c.length:0);const g=h===ps&&/\b(transform|all)(,|$)/.test(s(`${ps}Property`).toString());return{type:h,timeout:f,propCount:m,hasTransform:g}}function Xf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Jf(n)+Jf(t[s])))}function Jf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Zf(){return document.body.offsetHeight}function pI(t,e,n){const s=t[mo];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const za=Symbol("_vod"),Z_=Symbol("_vsh"),mI={beforeMount(t,{value:e},{transition:n}){t[za]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Pr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Pr(t,!0),s.enter(t)):s.leave(t,()=>{Pr(t,!1)}):Pr(t,e))},beforeUnmount(t,{value:e}){Pr(t,e)}};function Pr(t,e){t.style.display=e?t[za]:"none",t[Z_]=!e}const gI=Symbol(""),_I=/(^|;)\s*display\s*:/;function yI(t,e,n){const s=t.style,i=Ze(n);let r=!1;if(n&&!i){if(e)if(Ze(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&ba(s,l,"")}else for(const o in e)n[o]==null&&ba(s,o,"");for(const o in n)o==="display"&&(r=!0),ba(s,o,n[o])}else if(i){if(e!==n){const o=s[gI];o&&(n+=";"+o),s.cssText=n,r=_I.test(n)}}else e&&t.removeAttribute("style");za in t&&(t[za]=r?s.display:"",t[Z_]&&(s.display="none"))}const ep=/\s*!important$/;function ba(t,e,n){if(he(n))n.forEach(s=>ba(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=vI(t,e);ep.test(n)?t.setProperty(hi(s),n.replace(ep,""),"important"):t[s]=n}}const tp=["Webkit","Moz","ms"],xc={};function vI(t,e){const n=xc[e];if(n)return n;let s=ln(e);if(s!=="filter"&&s in t)return xc[e]=s;s=Tl(s);for(let i=0;i<tp.length;i++){const r=tp[i]+s;if(r in t)return xc[e]=r}return e}const np="http://www.w3.org/1999/xlink";function sp(t,e,n,s,i,r=AT(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(np,e.slice(6,e.length)):t.setAttributeNS(np,e,n):n==null||r&&!Ug(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Vs(n)?String(n):n)}function ip(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?X_(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Ug(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function Ci(t,e,n,s){t.addEventListener(e,n,s)}function EI(t,e,n,s){t.removeEventListener(e,n,s)}const rp=Symbol("_vei");function wI(t,e,n,s,i=null){const r=t[rp]||(t[rp]={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=TI(e);if(s){const u=r[e]=AI(s,i);Ci(t,l,u,c)}else o&&(EI(t,l,o,c),r[e]=void 0)}}const op=/(?:Once|Passive|Capture)$/;function TI(t){let e;if(op.test(t)){e={};let s;for(;s=t.match(op);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):hi(t.slice(2)),e]}let Nc=0;const bI=Promise.resolve(),II=()=>Nc||(bI.then(()=>Nc=0),Nc=Date.now());function AI(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;yn(CI(s,n.value),e,5,[s])};return n.value=t,n.attached=II(),n}function CI(t,e){if(he(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const ap=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,SI=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?pI(t,s,o):e==="style"?yI(t,n,s):vl(e)?hh(e)||wI(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):RI(t,e,s,o))?(ip(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&sp(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ze(s))?ip(t,ln(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),sp(t,e,s,o))};function RI(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&ap(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return ap(e)&&Ze(n)?!1:e in t}const lp=t=>{const e=t.props["onUpdate:modelValue"]||!1;return he(e)?n=>va(e,n):e};function kI(t){t.target.composing=!0}function cp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Dc=Symbol("_assign"),PI={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[Dc]=lp(i);const r=s||i.props&&i.props.type==="number";Ci(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=ru(l)),t[Dc](l)}),n&&Ci(t,"change",()=>{t.value=t.value.trim()}),e||(Ci(t,"compositionstart",kI),Ci(t,"compositionend",cp),Ci(t,"change",cp))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[Dc]=lp(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?ru(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===c)||(t.value=c))}},xI=["ctrl","shift","alt","meta"],NI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>xI.some(n=>t[`${n}Key`]&&!e.includes(n))},DI=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const l=NI[e[o]];if(l&&l(i,e))return}return t(i,...r)})},OI=mt({patchProp:SI},aI);let up;function MI(){return up||(up=xb(OI))}const LI=(...t)=>{const e=MI().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=FI(s);if(!i)return;const r=e._component;!pe(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,VI(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function VI(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function FI(t){return Ze(t)?document.querySelector(t):t}const ey=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},UI={};function BI(t,e){const n=gb("RouterView");return ue(),qi(n)}const $I=ey(UI,[["render",BI]]);/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Si=typeof document<"u";function ty(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function zI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&ty(t.default)}const Oe=Object.assign;function Oc(t,e){const n={};for(const s in e){const i=e[s];n[s]=En(i)?i.map(t):t(i)}return n}const Yr=()=>{},En=Array.isArray,ny=/#/g,jI=/&/g,qI=/\//g,HI=/=/g,WI=/\?/g,sy=/\+/g,KI=/%5B/g,GI=/%5D/g,iy=/%5E/g,QI=/%60/g,ry=/%7B/g,YI=/%7C/g,oy=/%7D/g,XI=/%20/g;function Rh(t){return encodeURI(""+t).replace(YI,"|").replace(KI,"[").replace(GI,"]")}function JI(t){return Rh(t).replace(ry,"{").replace(oy,"}").replace(iy,"^")}function yu(t){return Rh(t).replace(sy,"%2B").replace(XI,"+").replace(ny,"%23").replace(jI,"%26").replace(QI,"`").replace(ry,"{").replace(oy,"}").replace(iy,"^")}function ZI(t){return yu(t).replace(HI,"%3D")}function e0(t){return Rh(t).replace(ny,"%23").replace(WI,"%3F")}function t0(t){return t==null?"":e0(t).replace(qI,"%2F")}function go(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const n0=/\/$/,s0=t=>t.replace(n0,"");function Mc(t,e,n="/"){let s,i={},r="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(s=e.slice(0,c),r=e.slice(c+1,l>-1?l:e.length),i=t(r)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=a0(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:go(o)}}function i0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function hp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function r0(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Wi(e.matched[s],n.matched[i])&&ay(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Wi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ay(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!o0(t[n],e[n]))return!1;return!0}function o0(t,e){return En(t)?dp(t,e):En(e)?dp(e,t):t===e}function dp(t,e){return En(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function a0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const ms={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var _o;(function(t){t.pop="pop",t.push="push"})(_o||(_o={}));var Xr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Xr||(Xr={}));function l0(t){if(!t)if(Si){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),s0(t)}const c0=/^[^#]+#/;function u0(t,e){return t.replace(c0,"#")+e}function h0(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Nl=()=>({left:window.scrollX,top:window.scrollY});function d0(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=h0(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function fp(t,e){return(history.state?history.state.position-e:-1)+t}const vu=new Map;function f0(t,e){vu.set(t,e)}function p0(t){const e=vu.get(t);return vu.delete(t),e}let m0=()=>location.protocol+"//"+location.host;function ly(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let l=i.includes(t.slice(r))?t.slice(r).length:1,c=i.slice(l);return c[0]!=="/"&&(c="/"+c),hp(c,"")}return hp(n,t)+s+i}function g0(t,e,n,s){let i=[],r=[],o=null;const l=({state:m})=>{const g=ly(t,location),A=n.value,R=e.value;let x=0;if(m){if(n.value=g,e.value=m,o&&o===A){o=null;return}x=R?m.position-R.position:0}else s(g);i.forEach(F=>{F(n.value,A,{delta:x,type:_o.pop,direction:x?x>0?Xr.forward:Xr.back:Xr.unknown})})};function c(){o=n.value}function u(m){i.push(m);const g=()=>{const A=i.indexOf(m);A>-1&&i.splice(A,1)};return r.push(g),g}function h(){const{history:m}=window;m.state&&m.replaceState(Oe({},m.state,{scroll:Nl()}),"")}function f(){for(const m of r)m();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function pp(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Nl():null}}function _0(t){const{history:e,location:n}=window,s={value:ly(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,u,h){const f=t.indexOf("#"),m=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:m0()+t+c;try{e[h?"replaceState":"pushState"](u,"",m),i.value=u}catch(g){console.error(g),n[h?"replace":"assign"](m)}}function o(c,u){const h=Oe({},e.state,pp(i.value.back,c,i.value.forward,!0),u,{position:i.value.position});r(c,h,!0),s.value=c}function l(c,u){const h=Oe({},i.value,e.state,{forward:c,scroll:Nl()});r(h.current,h,!0);const f=Oe({},pp(s.value,c,null),{position:h.position+1},u);r(c,f,!1),s.value=c}return{location:s,state:i,push:l,replace:o}}function y0(t){t=l0(t);const e=_0(t),n=g0(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=Oe({location:"",base:t,go:s,createHref:u0.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function v0(t){return typeof t=="string"||t&&typeof t=="object"}function cy(t){return typeof t=="string"||typeof t=="symbol"}const uy=Symbol("");var mp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(mp||(mp={}));function Ki(t,e){return Oe(new Error,{type:t,[uy]:!0},e)}function Hn(t,e){return t instanceof Error&&uy in t&&(e==null||!!(t.type&e))}const gp="[^/]+?",E0={sensitive:!1,strict:!1,start:!0,end:!0},w0=/[.+*?^${}()[\]/\\]/g;function T0(t,e){const n=Oe({},E0,e),s=[];let i=n.start?"^":"";const r=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let f=0;f<u.length;f++){const m=u[f];let g=40+(n.sensitive?.25:0);if(m.type===0)f||(i+="/"),i+=m.value.replace(w0,"\\$&"),g+=40;else if(m.type===1){const{value:A,repeatable:R,optional:x,regexp:F}=m;r.push({name:A,repeatable:R,optional:x});const U=F||gp;if(U!==gp){g+=10;try{new RegExp(`(${U})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${A}" (${U}): `+M.message)}}let O=R?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;f||(O=x&&u.length<2?`(?:/${O})`:"/"+O),x&&(O+="?"),i+=O,g+=20,x&&(g+=-8),R&&(g+=-20),U===".*"&&(g+=-50)}h.push(g)}s.push(h)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(u){const h=u.match(o),f={};if(!h)return null;for(let m=1;m<h.length;m++){const g=h[m]||"",A=r[m-1];f[A.name]=g&&A.repeatable?g.split("/"):g}return f}function c(u){let h="",f=!1;for(const m of t){(!f||!h.endsWith("/"))&&(h+="/"),f=!1;for(const g of m)if(g.type===0)h+=g.value;else if(g.type===1){const{value:A,repeatable:R,optional:x}=g,F=A in u?u[A]:"";if(En(F)&&!R)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const U=En(F)?F.join("/"):F;if(!U)if(x)m.length<2&&(h.endsWith("/")?h=h.slice(0,-1):f=!0);else throw new Error(`Missing required param "${A}"`);h+=U}}return h||"/"}return{re:o,score:s,keys:r,parse:l,stringify:c}}function b0(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function hy(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=b0(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(_p(s))return 1;if(_p(i))return-1}return i.length-s.length}function _p(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const I0={type:0,value:""},A0=/[a-zA-Z0-9_]/;function C0(t){if(!t)return[[]];if(t==="/")return[[I0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,c,u="",h="";function f(){u&&(n===0?r.push({type:0,value:u}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),n=1):m();break;case 4:m(),n=s;break;case 1:c==="("?n=2:A0.test(c)?m():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:n=3:h+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),i}function S0(t,e,n){const s=T0(C0(t.path),n),i=Oe(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function R0(t,e){const n=[],s=new Map;e=wp({strict:!1,end:!0,sensitive:!1},e);function i(f){return s.get(f)}function r(f,m,g){const A=!g,R=vp(f);R.aliasOf=g&&g.record;const x=wp(e,f),F=[R];if("alias"in f){const M=typeof f.alias=="string"?[f.alias]:f.alias;for(const ee of M)F.push(vp(Oe({},R,{components:g?g.record.components:R.components,path:ee,aliasOf:g?g.record:R})))}let U,O;for(const M of F){const{path:ee}=M;if(m&&ee[0]!=="/"){const te=m.record.path,C=te[te.length-1]==="/"?"":"/";M.path=m.record.path+(ee&&C+ee)}if(U=S0(M,m,x),g?g.alias.push(U):(O=O||U,O!==U&&O.alias.push(U),A&&f.name&&!Ep(U)&&o(f.name)),dy(U)&&c(U),R.children){const te=R.children;for(let C=0;C<te.length;C++)r(te[C],U,g&&g.children[C])}g=g||U}return O?()=>{o(O)}:Yr}function o(f){if(cy(f)){const m=s.get(f);m&&(s.delete(f),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(f);m>-1&&(n.splice(m,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function l(){return n}function c(f){const m=x0(f,n);n.splice(m,0,f),f.record.name&&!Ep(f)&&s.set(f.record.name,f)}function u(f,m){let g,A={},R,x;if("name"in f&&f.name){if(g=s.get(f.name),!g)throw Ki(1,{location:f});x=g.record.name,A=Oe(yp(m.params,g.keys.filter(O=>!O.optional).concat(g.parent?g.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),f.params&&yp(f.params,g.keys.map(O=>O.name))),R=g.stringify(A)}else if(f.path!=null)R=f.path,g=n.find(O=>O.re.test(R)),g&&(A=g.parse(R),x=g.record.name);else{if(g=m.name?s.get(m.name):n.find(O=>O.re.test(m.path)),!g)throw Ki(1,{location:f,currentLocation:m});x=g.record.name,A=Oe({},m.params,f.params),R=g.stringify(A)}const F=[];let U=g;for(;U;)F.unshift(U.record),U=U.parent;return{name:x,path:R,params:A,matched:F,meta:P0(F)}}t.forEach(f=>r(f));function h(){n.length=0,s.clear()}return{addRoute:r,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:l,getRecordMatcher:i}}function yp(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function vp(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:k0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function k0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Ep(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function P0(t){return t.reduce((e,n)=>Oe(e,n.meta),{})}function wp(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function x0(t,e){let n=0,s=e.length;for(;n!==s;){const r=n+s>>1;hy(t,e[r])<0?s=r:n=r+1}const i=N0(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function N0(t){let e=t;for(;e=e.parent;)if(dy(e)&&hy(t,e)===0)return e}function dy({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function D0(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(sy," "),o=r.indexOf("="),l=go(o<0?r:r.slice(0,o)),c=o<0?null:go(r.slice(o+1));if(l in e){let u=e[l];En(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function Tp(t){let e="";for(let n in t){const s=t[n];if(n=ZI(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(En(s)?s.map(r=>r&&yu(r)):[s&&yu(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function O0(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=En(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const M0=Symbol(""),bp=Symbol(""),kh=Symbol(""),fy=Symbol(""),Eu=Symbol("");function xr(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Es(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(Ki(4,{from:n,to:e})):m instanceof Error?c(m):v0(m)?c(Ki(2,{from:e,to:m})):(o&&s.enterCallbacks[i]===o&&typeof m=="function"&&o.push(m),l())},h=r(()=>t.call(s&&s.instances[i],e,n,u));let f=Promise.resolve(h);t.length<3&&(f=f.then(u)),f.catch(m=>c(m))})}function Lc(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(ty(c)){const h=(c.__vccOpts||c)[e];h&&r.push(Es(h,n,s,o,l,i))}else{let u=c();r.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const f=zI(h)?h.default:h;o.mods[l]=h,o.components[l]=f;const g=(f.__vccOpts||f)[e];return g&&Es(g,n,s,o,l,i)()}))}}return r}function Ip(t){const e=gn(kh),n=gn(fy),s=lt(()=>{const c=it(t.to);return e.resolve(c)}),i=lt(()=>{const{matched:c}=s.value,{length:u}=c,h=c[u-1],f=n.matched;if(!h||!f.length)return-1;const m=f.findIndex(Wi.bind(null,h));if(m>-1)return m;const g=Ap(c[u-2]);return u>1&&Ap(h)===g&&f[f.length-1].path!==g?f.findIndex(Wi.bind(null,c[u-2])):m}),r=lt(()=>i.value>-1&&U0(n.params,s.value.params)),o=lt(()=>i.value>-1&&i.value===n.matched.length-1&&ay(n.params,s.value.params));function l(c={}){if(F0(c)){const u=e[it(t.replace)?"replace":"push"](it(t.to)).catch(Yr);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:lt(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}function L0(t){return t.length===1?t[0]:t}const V0=E_({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ip,setup(t,{slots:e}){const n=Al(Ip(t)),{options:s}=gn(kh),i=lt(()=>({[Cp(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Cp(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&L0(e.default(n));return t.custom?r:Hi("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),py=V0;function F0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function U0(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!En(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Ap(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Cp=(t,e,n)=>t??e??n,B0=E_({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=gn(Eu),i=lt(()=>t.route||s.value),r=gn(bp,0),o=lt(()=>{let u=it(r);const{matched:h}=i.value;let f;for(;(f=h[u])&&!f.components;)u++;return u}),l=lt(()=>i.value.matched[o.value]);Ea(bp,lt(()=>o.value+1)),Ea(M0,l),Ea(Eu,i);const c=Bt();return si(()=>[c.value,l.value,t.name],([u,h,f],[m,g,A])=>{h&&(h.instances[f]=u,g&&g!==h&&u&&u===m&&(h.leaveGuards.size||(h.leaveGuards=g.leaveGuards),h.updateGuards.size||(h.updateGuards=g.updateGuards))),u&&h&&(!g||!Wi(h,g)||!m)&&(h.enterCallbacks[f]||[]).forEach(R=>R(u))},{flush:"post"}),()=>{const u=i.value,h=t.name,f=l.value,m=f&&f.components[h];if(!m)return Sp(n.default,{Component:m,route:u});const g=f.props[h],A=g?g===!0?u.params:typeof g=="function"?g(u):g:null,x=Hi(m,Oe({},A,e,{onVnodeUnmounted:F=>{F.component.isUnmounted&&(f.instances[h]=null)},ref:c}));return Sp(n.default,{Component:x,route:u})||x}}});function Sp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const $0=B0;function z0(t){const e=R0(t.routes,t),n=t.parseQuery||D0,s=t.stringifyQuery||Tp,i=t.history,r=xr(),o=xr(),l=xr(),c=r_(ms);let u=ms;Si&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Oc.bind(null,L=>""+L),f=Oc.bind(null,t0),m=Oc.bind(null,go);function g(L,J){let Y,ne;return cy(L)?(Y=e.getRecordMatcher(L),ne=J):ne=L,e.addRoute(ne,Y)}function A(L){const J=e.getRecordMatcher(L);J&&e.removeRoute(J)}function R(){return e.getRoutes().map(L=>L.record)}function x(L){return!!e.getRecordMatcher(L)}function F(L,J){if(J=Oe({},J||c.value),typeof L=="string"){const k=Mc(n,L,J.path),V=e.resolve({path:k.path},J),z=i.createHref(k.fullPath);return Oe(k,V,{params:m(V.params),hash:go(k.hash),redirectedFrom:void 0,href:z})}let Y;if(L.path!=null)Y=Oe({},L,{path:Mc(n,L.path,J.path).path});else{const k=Oe({},L.params);for(const V in k)k[V]==null&&delete k[V];Y=Oe({},L,{params:f(k)}),J.params=f(J.params)}const ne=e.resolve(Y,J),Pe=L.hash||"";ne.params=h(m(ne.params));const w=i0(s,Oe({},L,{hash:JI(Pe),path:ne.path})),T=i.createHref(w);return Oe({fullPath:w,hash:Pe,query:s===Tp?O0(L.query):L.query||{}},ne,{redirectedFrom:void 0,href:T})}function U(L){return typeof L=="string"?Mc(n,L,c.value.path):Oe({},L)}function O(L,J){if(u!==L)return Ki(8,{from:J,to:L})}function M(L){return C(L)}function ee(L){return M(Oe(U(L),{replace:!0}))}function te(L){const J=L.matched[L.matched.length-1];if(J&&J.redirect){const{redirect:Y}=J;let ne=typeof Y=="function"?Y(L):Y;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=U(ne):{path:ne},ne.params={}),Oe({query:L.query,hash:L.hash,params:ne.path!=null?{}:L.params},ne)}}function C(L,J){const Y=u=F(L),ne=c.value,Pe=L.state,w=L.force,T=L.replace===!0,k=te(Y);if(k)return C(Oe(U(k),{state:typeof k=="object"?Oe({},Pe,k.state):Pe,force:w,replace:T}),J||Y);const V=Y;V.redirectedFrom=J;let z;return!w&&r0(s,ne,Y)&&(z=Ki(16,{to:V,from:ne}),en(ne,ne,!0,!1)),(z?Promise.resolve(z):I(V,ne)).catch(B=>Hn(B)?Hn(B,2)?B:un(B):Ee(B,V,ne)).then(B=>{if(B){if(Hn(B,2))return C(Oe({replace:T},U(B.to),{state:typeof B.to=="object"?Oe({},Pe,B.to.state):Pe,force:w}),J||V)}else B=b(V,ne,!0,T,Pe);return S(V,ne,B),B})}function y(L,J){const Y=O(L,J);return Y?Promise.reject(Y):Promise.resolve()}function v(L){const J=cs.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(L):L()}function I(L,J){let Y;const[ne,Pe,w]=j0(L,J);Y=Lc(ne.reverse(),"beforeRouteLeave",L,J);for(const k of ne)k.leaveGuards.forEach(V=>{Y.push(Es(V,L,J))});const T=y.bind(null,L,J);return Y.push(T),$t(Y).then(()=>{Y=[];for(const k of r.list())Y.push(Es(k,L,J));return Y.push(T),$t(Y)}).then(()=>{Y=Lc(Pe,"beforeRouteUpdate",L,J);for(const k of Pe)k.updateGuards.forEach(V=>{Y.push(Es(V,L,J))});return Y.push(T),$t(Y)}).then(()=>{Y=[];for(const k of w)if(k.beforeEnter)if(En(k.beforeEnter))for(const V of k.beforeEnter)Y.push(Es(V,L,J));else Y.push(Es(k.beforeEnter,L,J));return Y.push(T),$t(Y)}).then(()=>(L.matched.forEach(k=>k.enterCallbacks={}),Y=Lc(w,"beforeRouteEnter",L,J,v),Y.push(T),$t(Y))).then(()=>{Y=[];for(const k of o.list())Y.push(Es(k,L,J));return Y.push(T),$t(Y)}).catch(k=>Hn(k,8)?k:Promise.reject(k))}function S(L,J,Y){l.list().forEach(ne=>v(()=>ne(L,J,Y)))}function b(L,J,Y,ne,Pe){const w=O(L,J);if(w)return w;const T=J===ms,k=Si?history.state:{};Y&&(ne||T?i.replace(L.fullPath,Oe({scroll:T&&k&&k.scroll},Pe)):i.push(L.fullPath,Pe)),c.value=L,en(L,J,Y,T),un()}let E;function Fe(){E||(E=i.listen((L,J,Y)=>{if(!An.listening)return;const ne=F(L),Pe=te(ne);if(Pe){C(Oe(Pe,{replace:!0,force:!0}),ne).catch(Yr);return}u=ne;const w=c.value;Si&&f0(fp(w.fullPath,Y.delta),Nl()),I(ne,w).catch(T=>Hn(T,12)?T:Hn(T,2)?(C(Oe(U(T.to),{force:!0}),ne).then(k=>{Hn(k,20)&&!Y.delta&&Y.type===_o.pop&&i.go(-1,!1)}).catch(Yr),Promise.reject()):(Y.delta&&i.go(-Y.delta,!1),Ee(T,ne,w))).then(T=>{T=T||b(ne,w,!1),T&&(Y.delta&&!Hn(T,8)?i.go(-Y.delta,!1):Y.type===_o.pop&&Hn(T,20)&&i.go(-1,!1)),S(ne,w,T)}).catch(Yr)}))}let at=xr(),Qe=xr(),Ie;function Ee(L,J,Y){un(L);const ne=Qe.list();return ne.length?ne.forEach(Pe=>Pe(L,J,Y)):console.error(L),Promise.reject(L)}function Wt(){return Ie&&c.value!==ms?Promise.resolve():new Promise((L,J)=>{at.add([L,J])})}function un(L){return Ie||(Ie=!L,Fe(),at.list().forEach(([J,Y])=>L?Y(L):J()),at.reset()),L}function en(L,J,Y,ne){const{scrollBehavior:Pe}=t;if(!Si||!Pe)return Promise.resolve();const w=!Y&&p0(fp(L.fullPath,0))||(ne||!Y)&&history.state&&history.state.scroll||null;return Oa().then(()=>Pe(L,J,w)).then(T=>T&&d0(T)).catch(T=>Ee(T,L,J))}const Ye=L=>i.go(L);let Xe;const cs=new Set,An={currentRoute:c,listening:!0,addRoute:g,removeRoute:A,clearRoutes:e.clearRoutes,hasRoute:x,getRoutes:R,resolve:F,options:t,push:M,replace:ee,go:Ye,back:()=>Ye(-1),forward:()=>Ye(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:Qe.add,isReady:Wt,install(L){const J=this;L.component("RouterLink",py),L.component("RouterView",$0),L.config.globalProperties.$router=J,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>it(c)}),Si&&!Xe&&c.value===ms&&(Xe=!0,M(i.location).catch(Pe=>{}));const Y={};for(const Pe in ms)Object.defineProperty(Y,Pe,{get:()=>c.value[Pe],enumerable:!0});L.provide(kh,J),L.provide(fy,s_(Y)),L.provide(Eu,c);const ne=L.unmount;cs.add(L),L.unmount=function(){cs.delete(L),cs.size<1&&(u=ms,E&&E(),E=null,c.value=ms,Xe=!1,Ie=!1),ne()}}};function $t(L){return L.reduce((J,Y)=>J.then(()=>v(Y)),Promise.resolve())}return An}function j0(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(u=>Wi(u,l))?s.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>Wi(u,c))||i.push(c))}return[n,s,i]}const Rp=Bt("es"),os=()=>({language:Rp,setLanguage:e=>{Rp.value=e}}),q0=[{name:"Funciones",link:"features"},{name:"Solución",link:"solution"},{name:"FAQ",link:"faq"},{name:"Precios",link:"pricing"},{name:"Casos de uso",link:"use-cases"}],H0=[{name:"Features",link:"features"},{name:"Solution",link:"solution"},{name:"FAQ",link:"faq"},{name:"Pricing",link:"pricing"},{name:"Use Cases",link:"use-cases"}],W0=[{name:"Funktionen",link:"features"},{name:"Lösung",link:"solution"},{name:"FAQ",link:"faq"},{name:"Preise",link:"pricing"},{name:"Anwendungsfälle",link:"use-cases"}],K0={es:q0,en:H0,de:W0},G0="/docutrack-logo-02.png";/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var la={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=({size:t,strokeWidth:e=2,absoluteStrokeWidth:n,color:s,iconNode:i,name:r,class:o,...l},{slots:c})=>Hi("svg",{...la,width:t||la.width,height:t||la.height,stroke:s||la.stroke,"stroke-width":n?Number(e)*24/Number(t):e,class:["lucide",`lucide-${Q0(r??"icon")}`],...l},[...i.map(u=>Hi(...u)),...c.default?[c.default()]:[]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=(t,e)=>(n,{slots:s})=>Hi(Y0,{...n,iconNode:e,name:t},s);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=nt("AppWindowIcon",[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=nt("BaggageClaimIcon",[["path",{d:"M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2",key:"4irg2o"}],["path",{d:"M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10",key:"14fcyx"}],["rect",{width:"13",height:"8",x:"8",y:"6",rx:"1",key:"o6oiis"}],["circle",{cx:"18",cy:"20",r:"2",key:"t9985n"}],["circle",{cx:"9",cy:"20",r:"2",key:"e5v82j"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=nt("BellRingIcon",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eA=nt("BotIcon",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tA=nt("Building2Icon",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nA=nt("ChartColumnDecreasingIcon",[["path",{d:"M13 17V9",key:"1fwyjl"}],["path",{d:"M18 17v-3",key:"1sqioe"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M8 17V5",key:"1wzmnc"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sA=nt("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iA=nt("ChevronDownIcon",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rA=nt("CircleCheckBigIcon",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oA=nt("CircleXIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aA=nt("FileClockIcon",[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"37hlfg"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"8",cy:"16",r:"6",key:"10v15b"}],["path",{d:"M9.5 17.5 8 16.25V14",key:"1o80t2"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lA=nt("FolderIcon",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cA=nt("HardHatIcon",[["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",key:"1p9q5i"}],["path",{d:"M14 6a6 6 0 0 1 6 6v3",key:"1hnv84"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6",key:"9ciidu"}],["rect",{x:"2",y:"15",width:"20",height:"4",rx:"1",key:"g3x8cw"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uA=nt("HeartIcon",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hA=nt("InstagramIcon",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dA=nt("LandmarkIcon",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fA=nt("LinkedinIcon",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=nt("MoonIcon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mA=nt("Share2Icon",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gA=nt("SunIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=nt("UsersRoundIcon",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]]),yA={class:"flex justify-between w-32 border-base-400"},vA=["width","height"],EA=["width","height"],wA=["width","height"],kp={__name:"LanguageSelector",props:["size"],setup(t){const{setLanguage:e}=os();return(n,s)=>(ue(),_e("div",yA,[D("button",{onClick:s[0]||(s[0]=i=>it(e)("es"))},[(ue(),_e("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 32 32"},s[3]||(s[3]=[kc('<path d="M1,24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4v-3H1v3Z" fill="#b92932"></path><path fill="#0f2c83" d="M1 15H31V22H1z"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4v8H31V8c0-2.209-1.791-4-4-4Z" fill="#f8d047"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path>',5)]),8,vA))]),D("button",{onClick:s[1]||(s[1]=i=>it(e)("en"))},[(ue(),_e("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 32 32"},s[4]||(s[4]=[kc('<rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#fff"></rect><path d="M1.638,5.846H30.362c-.711-1.108-1.947-1.846-3.362-1.846H5c-1.414,0-2.65,.738-3.362,1.846Z" fill="#a62842"></path><path d="M2.03,7.692c-.008,.103-.03,.202-.03,.308v1.539H31v-1.539c0-.105-.022-.204-.03-.308H2.03Z" fill="#a62842"></path><path fill="#a62842" d="M2 11.385H31V13.231H2z"></path><path fill="#a62842" d="M2 15.077H31V16.923000000000002H2z"></path><path fill="#a62842" d="M1 18.769H31V20.615H1z"></path><path d="M1,24c0,.105,.023,.204,.031,.308H30.969c.008-.103,.031-.202,.031-.308v-1.539H1v1.539Z" fill="#a62842"></path><path d="M30.362,26.154H1.638c.711,1.108,1.947,1.846,3.362,1.846H27c1.414,0,2.65-.738,3.362-1.846Z" fill="#a62842"></path><path d="M5,4h11v12.923H1V8c0-2.208,1.792-4,4-4Z" fill="#102d5e"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path><path fill="#fff" d="M4.601 7.463L5.193 7.033 4.462 7.033 4.236 6.338 4.01 7.033 3.279 7.033 3.87 7.463 3.644 8.158 4.236 7.729 4.827 8.158 4.601 7.463z"></path><path fill="#fff" d="M7.58 7.463L8.172 7.033 7.441 7.033 7.215 6.338 6.989 7.033 6.258 7.033 6.849 7.463 6.623 8.158 7.215 7.729 7.806 8.158 7.58 7.463z"></path><path fill="#fff" d="M10.56 7.463L11.151 7.033 10.42 7.033 10.194 6.338 9.968 7.033 9.237 7.033 9.828 7.463 9.603 8.158 10.194 7.729 10.785 8.158 10.56 7.463z"></path><path fill="#fff" d="M6.066 9.283L6.658 8.854 5.927 8.854 5.701 8.158 5.475 8.854 4.744 8.854 5.335 9.283 5.109 9.979 5.701 9.549 6.292 9.979 6.066 9.283z"></path><path fill="#fff" d="M9.046 9.283L9.637 8.854 8.906 8.854 8.68 8.158 8.454 8.854 7.723 8.854 8.314 9.283 8.089 9.979 8.68 9.549 9.271 9.979 9.046 9.283z"></path><path fill="#fff" d="M12.025 9.283L12.616 8.854 11.885 8.854 11.659 8.158 11.433 8.854 10.702 8.854 11.294 9.283 11.068 9.979 11.659 9.549 12.251 9.979 12.025 9.283z"></path><path fill="#fff" d="M6.066 12.924L6.658 12.494 5.927 12.494 5.701 11.799 5.475 12.494 4.744 12.494 5.335 12.924 5.109 13.619 5.701 13.19 6.292 13.619 6.066 12.924z"></path><path fill="#fff" d="M9.046 12.924L9.637 12.494 8.906 12.494 8.68 11.799 8.454 12.494 7.723 12.494 8.314 12.924 8.089 13.619 8.68 13.19 9.271 13.619 9.046 12.924z"></path><path fill="#fff" d="M12.025 12.924L12.616 12.494 11.885 12.494 11.659 11.799 11.433 12.494 10.702 12.494 11.294 12.924 11.068 13.619 11.659 13.19 12.251 13.619 12.025 12.924z"></path><path fill="#fff" d="M13.539 7.463L14.13 7.033 13.399 7.033 13.173 6.338 12.947 7.033 12.216 7.033 12.808 7.463 12.582 8.158 13.173 7.729 13.765 8.158 13.539 7.463z"></path><path fill="#fff" d="M4.601 11.104L5.193 10.674 4.462 10.674 4.236 9.979 4.01 10.674 3.279 10.674 3.87 11.104 3.644 11.799 4.236 11.369 4.827 11.799 4.601 11.104z"></path><path fill="#fff" d="M7.58 11.104L8.172 10.674 7.441 10.674 7.215 9.979 6.989 10.674 6.258 10.674 6.849 11.104 6.623 11.799 7.215 11.369 7.806 11.799 7.58 11.104z"></path><path fill="#fff" d="M10.56 11.104L11.151 10.674 10.42 10.674 10.194 9.979 9.968 10.674 9.237 10.674 9.828 11.104 9.603 11.799 10.194 11.369 10.785 11.799 10.56 11.104z"></path><path fill="#fff" d="M13.539 11.104L14.13 10.674 13.399 10.674 13.173 9.979 12.947 10.674 12.216 10.674 12.808 11.104 12.582 11.799 13.173 11.369 13.765 11.799 13.539 11.104z"></path><path fill="#fff" d="M4.601 14.744L5.193 14.315 4.462 14.315 4.236 13.619 4.01 14.315 3.279 14.315 3.87 14.744 3.644 15.44 4.236 15.01 4.827 15.44 4.601 14.744z"></path><path fill="#fff" d="M7.58 14.744L8.172 14.315 7.441 14.315 7.215 13.619 6.989 14.315 6.258 14.315 6.849 14.744 6.623 15.44 7.215 15.01 7.806 15.44 7.58 14.744z"></path><path fill="#fff" d="M10.56 14.744L11.151 14.315 10.42 14.315 10.194 13.619 9.968 14.315 9.237 14.315 9.828 14.744 9.603 15.44 10.194 15.01 10.785 15.44 10.56 14.744z"></path><path fill="#fff" d="M13.539 14.744L14.13 14.315 13.399 14.315 13.173 13.619 12.947 14.315 12.216 14.315 12.808 14.744 12.582 15.44 13.173 15.01 13.765 15.44 13.539 14.744z"></path>',29)]),8,EA))]),D("button",{onClick:s[2]||(s[2]=i=>it(e)("de"))},[(ue(),_e("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 32 32"},s[5]||(s[5]=[kc('<path fill="#cc2b1d" d="M1 11H31V21H1z"></path><path d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"></path><path d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" transform="rotate(180 16 24)" fill="#f8d147"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path>',5)]),8,wA))])]))}},TA={class:"container mx-auto px-4 py-4 flex justify-between items-center"},bA={class:"hidden md:flex justify-end gap-6 lg:gap-12 space-x-4 w-2/3"},IA=["href"],AA={class:"hidden md:block"},CA={class:"flex items-center space-x-4"},SA={class:"w-6 h-6 flex items-center justify-center"},RA={class:"relative w-6 h-4"},kA={class:"flex flex-col h-full"},PA={class:"flex-1 pt-24 pb-8"},xA={class:"flex flex-col space-y-8"},NA=["href"],DA={class:"pt-6 mt-auto border-t border-gray-200 dark:border-gray-800"},OA={class:"flex justify-center space-x-6"},MA={__name:"HeaderComponent",props:["isDarkMode","navItems"],emits:["switchTheme"],setup(t,{emit:e}){const n=e,s=Bt(!1),i=()=>{s.value=!s.value,s.value?document.body.style.overflow="hidden":document.body.style.overflow=""},r=()=>{s.value=!1,document.body.style.overflow=""},o=()=>{n("switchTheme")},l=c=>{c.key==="Escape"&&s.value&&r()};return bh(()=>{document.addEventListener("keydown",l)}),Ih(()=>{document.body.style.overflow="",document.removeEventListener("keydown",l)}),(c,u)=>(ue(),_e("header",{class:Re(["sticky top-0 z-50 shadow-md transition-colors duration-300",t.isDarkMode?"bg-base-400":"bg-base-100"])},[D("nav",TA,[u[2]||(u[2]=D("a",{href:"#hero",class:"flex items-center relative z-50"},[D("img",{src:G0,alt:"Docutrack Logo",class:"h-10 w-auto mr-2"}),D("span",{class:"text-2xl font-bold text-primary-200 hidden md:block w-auto"},"Docutrack")],-1)),D("div",bA,[(ue(!0),_e(tt,null,vn(t.navItems,h=>(ue(),_e("a",{key:h.name,href:`#${h.link.toLowerCase()}`,class:Re(["hover:text-primary-200 transition-colors font-semibold text-lg",t.isDarkMode?"text-base-100":"text-base-400"])},ce(h.name),11,IA))),128))]),D("div",AA,[ye(kp,{size:"24"})]),D("div",CA,[D("button",{onClick:o,class:"text-primary-200 relative z-50"},[t.isDarkMode?(ue(),qi(it(gA),{key:0,class:"w-6 h-6"})):(ue(),qi(it(pA),{key:1,class:"w-6 h-6"}))]),D("button",{onClick:i,class:"md:hidden text-primary-200 relative z-50","aria-label":"Toggle menu"},[u[1]||(u[1]=D("span",{class:"sr-only"},"Toggle menu",-1)),D("div",SA,[D("div",RA,[D("span",{class:Re(["absolute h-0.5 w-6 transform transition-all duration-300",s.value?"rotate-45 translate-y-2":"translate-y-0",(t.isDarkMode,"bg-primary-200")])},null,2),D("span",{class:Re(["absolute h-0.5 w-6 transform transition-all duration-300",s.value?"opacity-0":"opacity-100",(t.isDarkMode,"bg-primary-200")]),style:{top:"50%",transform:"translateY(-50%)"}},null,2),D("span",{class:Re(["absolute h-0.5 w-6 transform transition-all duration-300",s.value?"-rotate-45 -translate-y-2":"translate-y-4",(t.isDarkMode,"bg-primary-200")])},null,2)])])])])]),ye(Kf,{"enter-active-class":"transition-all duration-300 ease-out","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"transition-all duration-300 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:La(()=>[s.value?(ue(),_e("div",{key:0,class:"fixed inset-0 z-40",onClick:r},[u[3]||(u[3]=D("div",{class:"absolute inset-0 bg-black/50 backdrop-blur-sm"},null,-1)),ye(Kf,{"enter-active-class":"transition-all duration-300 ease-out","enter-from-class":"translate-x-full","enter-to-class":"translate-x-0","leave-active-class":"transition-all duration-300 ease-in","leave-from-class":"translate-x-0","leave-to-class":"translate-x-full"},{default:La(()=>[s.value?(ue(),_e("div",{key:0,class:Re(["fixed inset-y-0 right-0 w-full max-w p-6 overflow-y-auto",t.isDarkMode?"bg-base-400":"bg-base-100"]),onClick:u[0]||(u[0]=DI(()=>{},["stop"]))},[D("div",kA,[D("div",PA,[D("nav",xA,[(ue(!0),_e(tt,null,vn(t.navItems,h=>(ue(),_e("a",{key:h.name,href:`#${h.link.toLowerCase()}`,onClick:r,class:Re(["text-2xl font-semibold text-center py-2 transition-colors duration-300",t.isDarkMode?"text-base-100 hover:text-primary-200":"text-base-400 hover:text-primary-200"])},ce(h.name),11,NA))),128))])]),D("div",DA,[D("div",OA,[ye(kp,{size:"24"})])])])],2)):Ba("",!0)]),_:1})])):Ba("",!0)]),_:1})],2))}},my=ey(MA,[["__scopeId","data-v-b27cf2dd"]]),LA="/hero-image-01.jpg";var Pp={};/**
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
 */const gy={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const Q=function(t,e){if(!t)throw rr(e)},rr=function(t){return new Error("Firebase Database ("+gy.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const _y=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},VA=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Dl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,h=r>>2,f=(r&3)<<4|l>>4;let m=(l&15)<<2|u>>6,g=u&63;c||(g=64,o||(m=64)),s.push(n[h],n[f],n[m],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_y(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):VA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||u==null||f==null)throw new FA;const m=r<<2|l>>4;if(s.push(m),u!==64){const g=l<<4&240|u>>2;if(s.push(g),f!==64){const A=u<<6&192|f;s.push(A)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class FA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yy=function(t){const e=_y(t);return Dl.encodeByteArray(e,!0)},ja=function(t){return yy(t).replace(/\./g,"")},qa=function(t){try{return Dl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function UA(t){return vy(void 0,t)}function vy(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!BA(n)||(t[n]=vy(t[n],e[n]));return t}function BA(t){return t!=="__proto__"}/**
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
 */function $A(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const zA=()=>$A().__FIREBASE_DEFAULTS__,jA=()=>{if(typeof process>"u"||typeof Pp>"u")return;const t=Pp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},qA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&qa(t[1]);return e&&JSON.parse(e)},Ol=()=>{try{return zA()||jA()||qA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},HA=t=>{var e,n;return(n=(e=Ol())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},WA=t=>{const e=HA(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Ey=()=>{var t;return(t=Ol())===null||t===void 0?void 0:t.config},KA=t=>{var e;return(e=Ol())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class yo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function GA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ja(JSON.stringify(n)),ja(JSON.stringify(o)),""].join(".")}/**
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
 */function wn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ph(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wn())}function QA(){var t;const e=(t=Ol())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function YA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function XA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function JA(){return gy.NODE_ADMIN===!0}function ZA(){return!QA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ty(){try{return typeof indexedDB=="object"}catch{return!1}}function eC(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const tC="FirebaseError";class as extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=tC,Object.setPrototypeOf(this,as.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,or.prototype.create)}}class or{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?nC(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new as(i,l,s)}}function nC(t,e){return t.replace(sC,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const sC=/\{\$([^}]+)}/g;/**
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
 */function vo(t){return JSON.parse(t)}function Et(t){return JSON.stringify(t)}/**
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
 */const by=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=vo(qa(r[0])||""),n=vo(qa(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},iC=function(t){const e=by(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},rC=function(t){const e=by(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ls(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Gi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function xp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ha(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function wu(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Np(r)&&Np(o)){if(!wu(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Np(t){return t!==null&&typeof t=="object"}/**
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
 */function xh(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class oC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)s[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)s[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const m=s[f-3]^s[f-8]^s[f-14]^s[f-16];s[f]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],u,h;for(let f=0;f<80;f++){f<40?f<20?(u=l^r&(o^l),h=1518500249):(u=r^o^l,h=1859775393):f<60?(u=r&o|l&(r|o),h=2400959708):(u=r^o^l,h=3395469782);const m=(i<<5|i>>>27)+u+c+h+s[f]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function aC(t,e){const n=new lC(t,e);return n.subscribe.bind(n)}class lC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");cC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Vc),i.error===void 0&&(i.error=Vc),i.complete===void 0&&(i.complete=Vc);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Vc(){}function uC(t,e){return`${t} failed: ${e} argument `}/**
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
 */const hC=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,Q(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ml=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Tn(t){return t&&t._delegate?t._delegate:t}class bn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class dC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new yo;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pC(e))try{this.getOrInitializeService({instanceIdentifier:Ys})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ys){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ys){return this.instances.has(e)}getOptions(e=Ys){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:fC(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ys){return this.component?this.component.multipleInstances?e:Ys:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fC(t){return t===Ys?void 0:t}function pC(t){return t.instantiationMode==="EAGER"}/**
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
 */class mC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new dC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const gC={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},_C=ve.INFO,yC={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},vC=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=yC[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Po{constructor(e){this.name=e,this._logLevel=_C,this._logHandler=vC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const EC=(t,e)=>e.some(n=>t instanceof n);let Dp,Op;function wC(){return Dp||(Dp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function TC(){return Op||(Op=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Iy=new WeakMap,Tu=new WeakMap,Ay=new WeakMap,Fc=new WeakMap,Nh=new WeakMap;function bC(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Is(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Iy.set(n,t)}).catch(()=>{}),Nh.set(e,t),e}function IC(t){if(Tu.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Tu.set(t,e)}let bu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Tu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ay.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Is(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function AC(t){bu=t(bu)}function CC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Uc(this),e,...n);return Ay.set(s,e.sort?e.sort():[e]),Is(s)}:TC().includes(t)?function(...e){return t.apply(Uc(this),e),Is(Iy.get(this))}:function(...e){return Is(t.apply(Uc(this),e))}}function SC(t){return typeof t=="function"?CC(t):(t instanceof IDBTransaction&&IC(t),EC(t,wC())?new Proxy(t,bu):t)}function Is(t){if(t instanceof IDBRequest)return bC(t);if(Fc.has(t))return Fc.get(t);const e=SC(t);return e!==t&&(Fc.set(t,e),Nh.set(e,t)),e}const Uc=t=>Nh.get(t);function RC(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Is(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Is(o.result),c.oldVersion,c.newVersion,Is(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const kC=["get","getKey","getAll","getAllKeys","count"],PC=["put","add","delete","clear"],Bc=new Map;function Mp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Bc.get(e))return Bc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=PC.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||kC.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&c.done]))[0]};return Bc.set(e,r),r}AC(t=>({...t,get:(e,n,s)=>Mp(e,n)||t.get(e,n,s),has:(e,n)=>!!Mp(e,n)||t.has(e,n)}));/**
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
 */class xC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(NC(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function NC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Iu="@firebase/app",Lp="0.10.18";/**
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
 */const ns=new Po("@firebase/app"),DC="@firebase/app-compat",OC="@firebase/analytics-compat",MC="@firebase/analytics",LC="@firebase/app-check-compat",VC="@firebase/app-check",FC="@firebase/auth",UC="@firebase/auth-compat",BC="@firebase/database",$C="@firebase/data-connect",zC="@firebase/database-compat",jC="@firebase/functions",qC="@firebase/functions-compat",HC="@firebase/installations",WC="@firebase/installations-compat",KC="@firebase/messaging",GC="@firebase/messaging-compat",QC="@firebase/performance",YC="@firebase/performance-compat",XC="@firebase/remote-config",JC="@firebase/remote-config-compat",ZC="@firebase/storage",eS="@firebase/storage-compat",tS="@firebase/firestore",nS="@firebase/vertexai",sS="@firebase/firestore-compat",iS="firebase",rS="11.2.0";/**
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
 */const Au="[DEFAULT]",oS={[Iu]:"fire-core",[DC]:"fire-core-compat",[MC]:"fire-analytics",[OC]:"fire-analytics-compat",[VC]:"fire-app-check",[LC]:"fire-app-check-compat",[FC]:"fire-auth",[UC]:"fire-auth-compat",[BC]:"fire-rtdb",[$C]:"fire-data-connect",[zC]:"fire-rtdb-compat",[jC]:"fire-fn",[qC]:"fire-fn-compat",[HC]:"fire-iid",[WC]:"fire-iid-compat",[KC]:"fire-fcm",[GC]:"fire-fcm-compat",[QC]:"fire-perf",[YC]:"fire-perf-compat",[XC]:"fire-rc",[JC]:"fire-rc-compat",[ZC]:"fire-gcs",[eS]:"fire-gcs-compat",[tS]:"fire-fst",[sS]:"fire-fst-compat",[nS]:"fire-vertex","fire-js":"fire-js",[iS]:"fire-js-all"};/**
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
 */const Wa=new Map,aS=new Map,Cu=new Map;function Vp(t,e){try{t.container.addComponent(e)}catch(n){ns.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ln(t){const e=t.name;if(Cu.has(e))return ns.debug(`There were multiple attempts to register component ${e}.`),!1;Cu.set(e,t);for(const n of Wa.values())Vp(n,t);for(const n of aS.values())Vp(n,t);return!0}function lS(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Fr(t){return t.settings!==void 0}/**
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
 */const cS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},As=new or("app","Firebase",cS);/**
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
 */class uS{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw As.create("app-deleted",{appName:this._name})}}/**
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
 */const ar=rS;function Cy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Au,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw As.create("bad-app-name",{appName:String(i)});if(n||(n=Ey()),!n)throw As.create("no-options");const r=Wa.get(i);if(r){if(wu(n,r.options)&&wu(s,r.config))return r;throw As.create("duplicate-app",{appName:i})}const o=new mC(i);for(const c of Cu.values())o.addComponent(c);const l=new uS(n,s,o);return Wa.set(i,l),l}function Sy(t=Au){const e=Wa.get(t);if(!e&&t===Au&&Ey())return Cy();if(!e)throw As.create("no-app",{appName:t});return e}function Yt(t,e,n){var s;let i=(s=oS[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ns.warn(l.join(" "));return}Ln(new bn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const hS="firebase-heartbeat-database",dS=1,Eo="firebase-heartbeat-store";let $c=null;function Ry(){return $c||($c=RC(hS,dS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Eo)}catch(n){console.warn(n)}}}}).catch(t=>{throw As.create("idb-open",{originalErrorMessage:t.message})})),$c}async function fS(t){try{const n=(await Ry()).transaction(Eo),s=await n.objectStore(Eo).get(ky(t));return await n.done,s}catch(e){if(e instanceof as)ns.warn(e.message);else{const n=As.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ns.warn(n.message)}}}async function Fp(t,e){try{const s=(await Ry()).transaction(Eo,"readwrite");await s.objectStore(Eo).put(e,ky(t)),await s.done}catch(n){if(n instanceof as)ns.warn(n.message);else{const s=As.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ns.warn(s.message)}}}function ky(t){return`${t.name}!${t.options.appId}`}/**
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
 */const pS=1024,mS=30*24*60*60*1e3;class gS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yS(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Up();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=mS}),this._storage.overwrite(this._heartbeatsCache))}catch(s){ns.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Up(),{heartbeatsToSend:s,unsentEntries:i}=_S(this._heartbeatsCache.heartbeats),r=ja(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return ns.warn(n),""}}}function Up(){return new Date().toISOString().substring(0,10)}function _S(t,e=pS){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Bp(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Bp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class yS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ty()?eC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await fS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Bp(t){return ja(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function vS(t){Ln(new bn("platform-logger",e=>new xC(e),"PRIVATE")),Ln(new bn("heartbeat",e=>new gS(e),"PRIVATE")),Yt(Iu,Lp,t),Yt(Iu,Lp,"esm2017"),Yt("fire-js","")}vS("");var $p=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cs,Py;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,y){function v(){}v.prototype=y.prototype,C.D=y.prototype,C.prototype=new v,C.prototype.constructor=C,C.C=function(I,S,b){for(var E=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)E[Fe-2]=arguments[Fe];return y.prototype[S].apply(I,E)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(C,y,v){v||(v=0);var I=Array(16);if(typeof y=="string")for(var S=0;16>S;++S)I[S]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(S=0;16>S;++S)I[S]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=C.g[0],v=C.g[1],S=C.g[2];var b=C.g[3],E=y+(b^v&(S^b))+I[0]+3614090360&4294967295;y=v+(E<<7&4294967295|E>>>25),E=b+(S^y&(v^S))+I[1]+3905402710&4294967295,b=y+(E<<12&4294967295|E>>>20),E=S+(v^b&(y^v))+I[2]+606105819&4294967295,S=b+(E<<17&4294967295|E>>>15),E=v+(y^S&(b^y))+I[3]+3250441966&4294967295,v=S+(E<<22&4294967295|E>>>10),E=y+(b^v&(S^b))+I[4]+4118548399&4294967295,y=v+(E<<7&4294967295|E>>>25),E=b+(S^y&(v^S))+I[5]+1200080426&4294967295,b=y+(E<<12&4294967295|E>>>20),E=S+(v^b&(y^v))+I[6]+2821735955&4294967295,S=b+(E<<17&4294967295|E>>>15),E=v+(y^S&(b^y))+I[7]+4249261313&4294967295,v=S+(E<<22&4294967295|E>>>10),E=y+(b^v&(S^b))+I[8]+1770035416&4294967295,y=v+(E<<7&4294967295|E>>>25),E=b+(S^y&(v^S))+I[9]+2336552879&4294967295,b=y+(E<<12&4294967295|E>>>20),E=S+(v^b&(y^v))+I[10]+4294925233&4294967295,S=b+(E<<17&4294967295|E>>>15),E=v+(y^S&(b^y))+I[11]+2304563134&4294967295,v=S+(E<<22&4294967295|E>>>10),E=y+(b^v&(S^b))+I[12]+1804603682&4294967295,y=v+(E<<7&4294967295|E>>>25),E=b+(S^y&(v^S))+I[13]+4254626195&4294967295,b=y+(E<<12&4294967295|E>>>20),E=S+(v^b&(y^v))+I[14]+2792965006&4294967295,S=b+(E<<17&4294967295|E>>>15),E=v+(y^S&(b^y))+I[15]+1236535329&4294967295,v=S+(E<<22&4294967295|E>>>10),E=y+(S^b&(v^S))+I[1]+4129170786&4294967295,y=v+(E<<5&4294967295|E>>>27),E=b+(v^S&(y^v))+I[6]+3225465664&4294967295,b=y+(E<<9&4294967295|E>>>23),E=S+(y^v&(b^y))+I[11]+643717713&4294967295,S=b+(E<<14&4294967295|E>>>18),E=v+(b^y&(S^b))+I[0]+3921069994&4294967295,v=S+(E<<20&4294967295|E>>>12),E=y+(S^b&(v^S))+I[5]+3593408605&4294967295,y=v+(E<<5&4294967295|E>>>27),E=b+(v^S&(y^v))+I[10]+38016083&4294967295,b=y+(E<<9&4294967295|E>>>23),E=S+(y^v&(b^y))+I[15]+3634488961&4294967295,S=b+(E<<14&4294967295|E>>>18),E=v+(b^y&(S^b))+I[4]+3889429448&4294967295,v=S+(E<<20&4294967295|E>>>12),E=y+(S^b&(v^S))+I[9]+568446438&4294967295,y=v+(E<<5&4294967295|E>>>27),E=b+(v^S&(y^v))+I[14]+3275163606&4294967295,b=y+(E<<9&4294967295|E>>>23),E=S+(y^v&(b^y))+I[3]+4107603335&4294967295,S=b+(E<<14&4294967295|E>>>18),E=v+(b^y&(S^b))+I[8]+1163531501&4294967295,v=S+(E<<20&4294967295|E>>>12),E=y+(S^b&(v^S))+I[13]+2850285829&4294967295,y=v+(E<<5&4294967295|E>>>27),E=b+(v^S&(y^v))+I[2]+4243563512&4294967295,b=y+(E<<9&4294967295|E>>>23),E=S+(y^v&(b^y))+I[7]+1735328473&4294967295,S=b+(E<<14&4294967295|E>>>18),E=v+(b^y&(S^b))+I[12]+2368359562&4294967295,v=S+(E<<20&4294967295|E>>>12),E=y+(v^S^b)+I[5]+4294588738&4294967295,y=v+(E<<4&4294967295|E>>>28),E=b+(y^v^S)+I[8]+2272392833&4294967295,b=y+(E<<11&4294967295|E>>>21),E=S+(b^y^v)+I[11]+1839030562&4294967295,S=b+(E<<16&4294967295|E>>>16),E=v+(S^b^y)+I[14]+4259657740&4294967295,v=S+(E<<23&4294967295|E>>>9),E=y+(v^S^b)+I[1]+2763975236&4294967295,y=v+(E<<4&4294967295|E>>>28),E=b+(y^v^S)+I[4]+1272893353&4294967295,b=y+(E<<11&4294967295|E>>>21),E=S+(b^y^v)+I[7]+4139469664&4294967295,S=b+(E<<16&4294967295|E>>>16),E=v+(S^b^y)+I[10]+3200236656&4294967295,v=S+(E<<23&4294967295|E>>>9),E=y+(v^S^b)+I[13]+681279174&4294967295,y=v+(E<<4&4294967295|E>>>28),E=b+(y^v^S)+I[0]+3936430074&4294967295,b=y+(E<<11&4294967295|E>>>21),E=S+(b^y^v)+I[3]+3572445317&4294967295,S=b+(E<<16&4294967295|E>>>16),E=v+(S^b^y)+I[6]+76029189&4294967295,v=S+(E<<23&4294967295|E>>>9),E=y+(v^S^b)+I[9]+3654602809&4294967295,y=v+(E<<4&4294967295|E>>>28),E=b+(y^v^S)+I[12]+3873151461&4294967295,b=y+(E<<11&4294967295|E>>>21),E=S+(b^y^v)+I[15]+530742520&4294967295,S=b+(E<<16&4294967295|E>>>16),E=v+(S^b^y)+I[2]+3299628645&4294967295,v=S+(E<<23&4294967295|E>>>9),E=y+(S^(v|~b))+I[0]+4096336452&4294967295,y=v+(E<<6&4294967295|E>>>26),E=b+(v^(y|~S))+I[7]+1126891415&4294967295,b=y+(E<<10&4294967295|E>>>22),E=S+(y^(b|~v))+I[14]+2878612391&4294967295,S=b+(E<<15&4294967295|E>>>17),E=v+(b^(S|~y))+I[5]+4237533241&4294967295,v=S+(E<<21&4294967295|E>>>11),E=y+(S^(v|~b))+I[12]+1700485571&4294967295,y=v+(E<<6&4294967295|E>>>26),E=b+(v^(y|~S))+I[3]+2399980690&4294967295,b=y+(E<<10&4294967295|E>>>22),E=S+(y^(b|~v))+I[10]+4293915773&4294967295,S=b+(E<<15&4294967295|E>>>17),E=v+(b^(S|~y))+I[1]+2240044497&4294967295,v=S+(E<<21&4294967295|E>>>11),E=y+(S^(v|~b))+I[8]+1873313359&4294967295,y=v+(E<<6&4294967295|E>>>26),E=b+(v^(y|~S))+I[15]+4264355552&4294967295,b=y+(E<<10&4294967295|E>>>22),E=S+(y^(b|~v))+I[6]+2734768916&4294967295,S=b+(E<<15&4294967295|E>>>17),E=v+(b^(S|~y))+I[13]+1309151649&4294967295,v=S+(E<<21&4294967295|E>>>11),E=y+(S^(v|~b))+I[4]+4149444226&4294967295,y=v+(E<<6&4294967295|E>>>26),E=b+(v^(y|~S))+I[11]+3174756917&4294967295,b=y+(E<<10&4294967295|E>>>22),E=S+(y^(b|~v))+I[2]+718787259&4294967295,S=b+(E<<15&4294967295|E>>>17),E=v+(b^(S|~y))+I[9]+3951481745&4294967295,C.g[0]=C.g[0]+y&4294967295,C.g[1]=C.g[1]+(S+(E<<21&4294967295|E>>>11))&4294967295,C.g[2]=C.g[2]+S&4294967295,C.g[3]=C.g[3]+b&4294967295}s.prototype.u=function(C,y){y===void 0&&(y=C.length);for(var v=y-this.blockSize,I=this.B,S=this.h,b=0;b<y;){if(S==0)for(;b<=v;)i(this,C,b),b+=this.blockSize;if(typeof C=="string"){for(;b<y;)if(I[S++]=C.charCodeAt(b++),S==this.blockSize){i(this,I),S=0;break}}else for(;b<y;)if(I[S++]=C[b++],S==this.blockSize){i(this,I),S=0;break}}this.h=S,this.o+=y},s.prototype.v=function(){var C=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);C[0]=128;for(var y=1;y<C.length-8;++y)C[y]=0;var v=8*this.o;for(y=C.length-8;y<C.length;++y)C[y]=v&255,v/=256;for(this.u(C),C=Array(16),y=v=0;4>y;++y)for(var I=0;32>I;I+=8)C[v++]=this.g[y]>>>I&255;return C};function r(C,y){var v=l;return Object.prototype.hasOwnProperty.call(v,C)?v[C]:v[C]=y(C)}function o(C,y){this.h=y;for(var v=[],I=!0,S=C.length-1;0<=S;S--){var b=C[S]|0;I&&b==y||(v[S]=b,I=!1)}this.g=v}var l={};function c(C){return-128<=C&&128>C?r(C,function(y){return new o([y|0],0>y?-1:0)}):new o([C|0],0>C?-1:0)}function u(C){if(isNaN(C)||!isFinite(C))return f;if(0>C)return x(u(-C));for(var y=[],v=1,I=0;C>=v;I++)y[I]=C/v|0,v*=4294967296;return new o(y,0)}function h(C,y){if(C.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(C.charAt(0)=="-")return x(h(C.substring(1),y));if(0<=C.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(y,8)),I=f,S=0;S<C.length;S+=8){var b=Math.min(8,C.length-S),E=parseInt(C.substring(S,S+b),y);8>b?(b=u(Math.pow(y,b)),I=I.j(b).add(u(E))):(I=I.j(v),I=I.add(u(E)))}return I}var f=c(0),m=c(1),g=c(16777216);t=o.prototype,t.m=function(){if(R(this))return-x(this).m();for(var C=0,y=1,v=0;v<this.g.length;v++){var I=this.i(v);C+=(0<=I?I:4294967296+I)*y,y*=4294967296}return C},t.toString=function(C){if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(A(this))return"0";if(R(this))return"-"+x(this).toString(C);for(var y=u(Math.pow(C,6)),v=this,I="";;){var S=M(v,y).g;v=F(v,S.j(y));var b=((0<v.g.length?v.g[0]:v.h)>>>0).toString(C);if(v=S,A(v))return b+I;for(;6>b.length;)b="0"+b;I=b+I}},t.i=function(C){return 0>C?0:C<this.g.length?this.g[C]:this.h};function A(C){if(C.h!=0)return!1;for(var y=0;y<C.g.length;y++)if(C.g[y]!=0)return!1;return!0}function R(C){return C.h==-1}t.l=function(C){return C=F(this,C),R(C)?-1:A(C)?0:1};function x(C){for(var y=C.g.length,v=[],I=0;I<y;I++)v[I]=~C.g[I];return new o(v,~C.h).add(m)}t.abs=function(){return R(this)?x(this):this},t.add=function(C){for(var y=Math.max(this.g.length,C.g.length),v=[],I=0,S=0;S<=y;S++){var b=I+(this.i(S)&65535)+(C.i(S)&65535),E=(b>>>16)+(this.i(S)>>>16)+(C.i(S)>>>16);I=E>>>16,b&=65535,E&=65535,v[S]=E<<16|b}return new o(v,v[v.length-1]&-2147483648?-1:0)};function F(C,y){return C.add(x(y))}t.j=function(C){if(A(this)||A(C))return f;if(R(this))return R(C)?x(this).j(x(C)):x(x(this).j(C));if(R(C))return x(this.j(x(C)));if(0>this.l(g)&&0>C.l(g))return u(this.m()*C.m());for(var y=this.g.length+C.g.length,v=[],I=0;I<2*y;I++)v[I]=0;for(I=0;I<this.g.length;I++)for(var S=0;S<C.g.length;S++){var b=this.i(I)>>>16,E=this.i(I)&65535,Fe=C.i(S)>>>16,at=C.i(S)&65535;v[2*I+2*S]+=E*at,U(v,2*I+2*S),v[2*I+2*S+1]+=b*at,U(v,2*I+2*S+1),v[2*I+2*S+1]+=E*Fe,U(v,2*I+2*S+1),v[2*I+2*S+2]+=b*Fe,U(v,2*I+2*S+2)}for(I=0;I<y;I++)v[I]=v[2*I+1]<<16|v[2*I];for(I=y;I<2*y;I++)v[I]=0;return new o(v,0)};function U(C,y){for(;(C[y]&65535)!=C[y];)C[y+1]+=C[y]>>>16,C[y]&=65535,y++}function O(C,y){this.g=C,this.h=y}function M(C,y){if(A(y))throw Error("division by zero");if(A(C))return new O(f,f);if(R(C))return y=M(x(C),y),new O(x(y.g),x(y.h));if(R(y))return y=M(C,x(y)),new O(x(y.g),y.h);if(30<C.g.length){if(R(C)||R(y))throw Error("slowDivide_ only works with positive integers.");for(var v=m,I=y;0>=I.l(C);)v=ee(v),I=ee(I);var S=te(v,1),b=te(I,1);for(I=te(I,2),v=te(v,2);!A(I);){var E=b.add(I);0>=E.l(C)&&(S=S.add(v),b=E),I=te(I,1),v=te(v,1)}return y=F(C,S.j(y)),new O(S,y)}for(S=f;0<=C.l(y);){for(v=Math.max(1,Math.floor(C.m()/y.m())),I=Math.ceil(Math.log(v)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),b=u(v),E=b.j(y);R(E)||0<E.l(C);)v-=I,b=u(v),E=b.j(y);A(b)&&(b=m),S=S.add(b),C=F(C,E)}return new O(S,C)}t.A=function(C){return M(this,C).h},t.and=function(C){for(var y=Math.max(this.g.length,C.g.length),v=[],I=0;I<y;I++)v[I]=this.i(I)&C.i(I);return new o(v,this.h&C.h)},t.or=function(C){for(var y=Math.max(this.g.length,C.g.length),v=[],I=0;I<y;I++)v[I]=this.i(I)|C.i(I);return new o(v,this.h|C.h)},t.xor=function(C){for(var y=Math.max(this.g.length,C.g.length),v=[],I=0;I<y;I++)v[I]=this.i(I)^C.i(I);return new o(v,this.h^C.h)};function ee(C){for(var y=C.g.length+1,v=[],I=0;I<y;I++)v[I]=C.i(I)<<1|C.i(I-1)>>>31;return new o(v,C.h)}function te(C,y){var v=y>>5;y%=32;for(var I=C.g.length-v,S=[],b=0;b<I;b++)S[b]=0<y?C.i(b+v)>>>y|C.i(b+v+1)<<32-y:C.i(b+v);return new o(S,C.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Py=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Cs=o}).apply(typeof $p<"u"?$p:typeof self<"u"?self:typeof window<"u"?window:{});var ca=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xy,Ur,Ny,Ia,Su,Dy,Oy,My;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,p){return a==Array.prototype||a==Object.prototype||(a[d]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ca=="object"&&ca];for(var d=0;d<a.length;++d){var p=a[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var s=n(this);function i(a,d){if(d)e:{var p=s;a=a.split(".");for(var _=0;_<a.length-1;_++){var P=a[_];if(!(P in p))break e;p=p[P]}a=a[a.length-1],_=p[a],d=d(_),d!=_&&d!=null&&e(p,a,{configurable:!0,writable:!0,value:d})}}function r(a,d){a instanceof String&&(a+="");var p=0,_=!1,P={next:function(){if(!_&&p<a.length){var N=p++;return{value:d(N,a[N]),done:!1}}return _=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(a){return a||function(){return r(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function u(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function h(a,d,p){return a.call.apply(a.bind,arguments)}function f(a,d,p){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,_),a.apply(d,P)}}return function(){return a.apply(d,arguments)}}function m(a,d,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,m.apply(null,arguments)}function g(a,d){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function A(a,d){function p(){}p.prototype=d.prototype,a.aa=d.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(_,P,N){for(var K=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)K[Be-2]=arguments[Be];return d.prototype[P].apply(_,K)}}function R(a){const d=a.length;if(0<d){const p=Array(d);for(let _=0;_<d;_++)p[_]=a[_];return p}return[]}function x(a,d){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(c(_)){const P=a.length||0,N=_.length||0;a.length=P+N;for(let K=0;K<N;K++)a[P+K]=_[K]}else a.push(_)}}class F{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function U(a){return/^[\s\xa0]*$/.test(a)}function O(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function M(a){return M[" "](a),a}M[" "]=function(){};var ee=O().indexOf("Gecko")!=-1&&!(O().toLowerCase().indexOf("webkit")!=-1&&O().indexOf("Edge")==-1)&&!(O().indexOf("Trident")!=-1||O().indexOf("MSIE")!=-1)&&O().indexOf("Edge")==-1;function te(a,d,p){for(const _ in a)d.call(p,a[_],_,a)}function C(a,d){for(const p in a)d.call(void 0,a[p],p,a)}function y(a){const d={};for(const p in a)d[p]=a[p];return d}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,d){let p,_;for(let P=1;P<arguments.length;P++){_=arguments[P];for(p in _)a[p]=_[p];for(let N=0;N<v.length;N++)p=v[N],Object.prototype.hasOwnProperty.call(_,p)&&(a[p]=_[p])}}function S(a){var d=1;a=a.split(":");const p=[];for(;0<d&&a.length;)p.push(a.shift()),d--;return a.length&&p.push(a.join(":")),p}function b(a){l.setTimeout(()=>{throw a},0)}function E(){var a=Wt;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class Fe{constructor(){this.h=this.g=null}add(d,p){const _=at.get();_.set(d,p),this.h?this.h.next=_:this.g=_,this.h=_}}var at=new F(()=>new Qe,a=>a.reset());class Qe{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Ie,Ee=!1,Wt=new Fe,un=()=>{const a=l.Promise.resolve(void 0);Ie=()=>{a.then(en)}};var en=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(p){b(p)}var d=at;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}Ee=!1};function Ye(){this.s=this.s,this.C=this.C}Ye.prototype.s=!1,Ye.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ye.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Xe(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}Xe.prototype.h=function(){this.defaultPrevented=!0};var cs=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,d),l.removeEventListener("test",p,d)}catch{}return a}();function An(a,d){if(Xe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(ee){e:{try{M(d.nodeName);var P=!0;break e}catch{}P=!1}P||(d=null)}}else p=="mouseover"?d=a.fromElement:p=="mouseout"&&(d=a.toElement);this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:$t[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&An.aa.h.call(this)}}A(An,Xe);var $t={2:"touch",3:"pen",4:"mouse"};An.prototype.h=function(){An.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var L="closure_listenable_"+(1e6*Math.random()|0),J=0;function Y(a,d,p,_,P){this.listener=a,this.proxy=null,this.src=d,this.type=p,this.capture=!!_,this.ha=P,this.key=++J,this.da=this.fa=!1}function ne(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Pe(a){this.src=a,this.g={},this.h=0}Pe.prototype.add=function(a,d,p,_,P){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var K=T(a,d,_,P);return-1<K?(d=a[K],p||(d.fa=!1)):(d=new Y(d,this.src,N,!!_,P),d.fa=p,a.push(d)),d};function w(a,d){var p=d.type;if(p in a.g){var _=a.g[p],P=Array.prototype.indexOf.call(_,d,void 0),N;(N=0<=P)&&Array.prototype.splice.call(_,P,1),N&&(ne(d),a.g[p].length==0&&(delete a.g[p],a.h--))}}function T(a,d,p,_){for(var P=0;P<a.length;++P){var N=a[P];if(!N.da&&N.listener==d&&N.capture==!!p&&N.ha==_)return P}return-1}var k="closure_lm_"+(1e6*Math.random()|0),V={};function z(a,d,p,_,P){if(Array.isArray(d)){for(var N=0;N<d.length;N++)z(a,d[N],p,_,P);return null}return p=le(p),a&&a[L]?a.K(d,p,u(_)?!!_.capture:!1,P):B(a,d,p,!1,_,P)}function B(a,d,p,_,P,N){if(!d)throw Error("Invalid event type");var K=u(P)?!!P.capture:!!P,Be=X(a);if(Be||(a[k]=Be=new Pe(a)),p=Be.add(d,p,_,K,N),p.proxy)return p;if(_=G(),p.proxy=_,_.src=a,_.listener=p,a.addEventListener)cs||(P=K),P===void 0&&(P=!1),a.addEventListener(d.toString(),_,P);else if(a.attachEvent)a.attachEvent(q(d.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function G(){function a(p){return d.call(a.src,a.listener,p)}const d=oe;return a}function W(a,d,p,_,P){if(Array.isArray(d))for(var N=0;N<d.length;N++)W(a,d[N],p,_,P);else _=u(_)?!!_.capture:!!_,p=le(p),a&&a[L]?(a=a.i,d=String(d).toString(),d in a.g&&(N=a.g[d],p=T(N,p,_,P),-1<p&&(ne(N[p]),Array.prototype.splice.call(N,p,1),N.length==0&&(delete a.g[d],a.h--)))):a&&(a=X(a))&&(d=a.g[d.toString()],a=-1,d&&(a=T(d,p,_,P)),(p=-1<a?d[a]:null)&&H(p))}function H(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[L])w(d.i,a);else{var p=a.type,_=a.proxy;d.removeEventListener?d.removeEventListener(p,_,a.capture):d.detachEvent?d.detachEvent(q(p),_):d.addListener&&d.removeListener&&d.removeListener(_),(p=X(d))?(w(p,a),p.h==0&&(p.src=null,d[k]=null)):ne(a)}}}function q(a){return a in V?V[a]:V[a]="on"+a}function oe(a,d){if(a.da)a=!0;else{d=new An(d,this);var p=a.listener,_=a.ha||a.src;a.fa&&H(a),a=p.call(_,d)}return a}function X(a){return a=a[k],a instanceof Pe?a:null}var se="__closure_events_fn_"+(1e9*Math.random()>>>0);function le(a){return typeof a=="function"?a:(a[se]||(a[se]=function(d){return a.handleEvent(d)}),a[se])}function ae(){Ye.call(this),this.i=new Pe(this),this.M=this,this.F=null}A(ae,Ye),ae.prototype[L]=!0,ae.prototype.removeEventListener=function(a,d,p,_){W(this,a,d,p,_)};function ge(a,d){var p,_=a.F;if(_)for(p=[];_;_=_.F)p.push(_);if(a=a.M,_=d.type||d,typeof d=="string")d=new Xe(d,a);else if(d instanceof Xe)d.target=d.target||a;else{var P=d;d=new Xe(_,a),I(d,P)}if(P=!0,p)for(var N=p.length-1;0<=N;N--){var K=d.g=p[N];P=Ae(K,_,!0,d)&&P}if(K=d.g=a,P=Ae(K,_,!0,d)&&P,P=Ae(K,_,!1,d)&&P,p)for(N=0;N<p.length;N++)K=d.g=p[N],P=Ae(K,_,!1,d)&&P}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var p=a.g[d],_=0;_<p.length;_++)ne(p[_]);delete a.g[d],a.h--}}this.F=null},ae.prototype.K=function(a,d,p,_){return this.i.add(String(a),d,!1,p,_)},ae.prototype.L=function(a,d,p,_){return this.i.add(String(a),d,!0,p,_)};function Ae(a,d,p,_){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var P=!0,N=0;N<d.length;++N){var K=d[N];if(K&&!K.da&&K.capture==p){var Be=K.listener,yt=K.ha||K.src;K.fa&&w(a.i,K),P=Be.call(yt,_)!==!1&&P}}return P&&!_.defaultPrevented}function It(a,d,p){if(typeof a=="function")p&&(a=m(a,p));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(a,d||0)}function gt(a){a.g=It(()=>{a.g=null,a.i&&(a.i=!1,gt(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class tn extends Ye{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:gt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function At(a){Ye.call(this),this.h=a,this.g={}}A(At,Ye);var us=[];function mr(a){te(a.g,function(d,p){this.g.hasOwnProperty(p)&&H(d)},a),a.g={}}At.prototype.N=function(){At.aa.N.call(this),mr(this)},At.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _t=l.JSON.stringify,nn=l.JSON.parse,zo=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function oc(){}oc.prototype.h=null;function Ld(a){return a.h||(a.h=a.i())}function Vd(){}var gr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ac(){Xe.call(this,"d")}A(ac,Xe);function lc(){Xe.call(this,"c")}A(lc,Xe);var $s={},Fd=null;function jo(){return Fd=Fd||new ae}$s.La="serverreachability";function Ud(a){Xe.call(this,$s.La,a)}A(Ud,Xe);function _r(a){const d=jo();ge(d,new Ud(d))}$s.STAT_EVENT="statevent";function Bd(a,d){Xe.call(this,$s.STAT_EVENT,a),this.stat=d}A(Bd,Xe);function Lt(a){const d=jo();ge(d,new Bd(d,a))}$s.Ma="timingevent";function $d(a,d){Xe.call(this,$s.Ma,a),this.size=d}A($d,Xe);function yr(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},d)}function vr(){this.g=!0}vr.prototype.xa=function(){this.g=!1};function Hw(a,d,p,_,P,N){a.info(function(){if(a.g)if(N)for(var K="",Be=N.split("&"),yt=0;yt<Be.length;yt++){var xe=Be[yt].split("=");if(1<xe.length){var Ct=xe[0];xe=xe[1];var St=Ct.split("_");K=2<=St.length&&St[1]=="type"?K+(Ct+"="+xe+"&"):K+(Ct+"=redacted&")}}else K=null;else K=N;return"XMLHTTP REQ ("+_+") [attempt "+P+"]: "+d+`
`+p+`
`+K})}function Ww(a,d,p,_,P,N,K){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+P+"]: "+d+`
`+p+`
`+N+" "+K})}function Ei(a,d,p,_){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+Gw(a,p)+(_?" "+_:"")})}function Kw(a,d){a.info(function(){return"TIMEOUT: "+d})}vr.prototype.info=function(){};function Gw(a,d){if(!a.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var _=p[a];if(!(2>_.length)){var P=_[1];if(Array.isArray(P)&&!(1>P.length)){var N=P[0];if(N!="noop"&&N!="stop"&&N!="close")for(var K=1;K<P.length;K++)P[K]=""}}}}return _t(p)}catch{return d}}var qo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},zd={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},cc;function Ho(){}A(Ho,oc),Ho.prototype.g=function(){return new XMLHttpRequest},Ho.prototype.i=function(){return{}},cc=new Ho;function hs(a,d,p,_){this.j=a,this.i=d,this.l=p,this.R=_||1,this.U=new At(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new jd}function jd(){this.i=null,this.g="",this.h=!1}var qd={},uc={};function hc(a,d,p){a.L=1,a.v=Qo($n(d)),a.m=p,a.P=!0,Hd(a,null)}function Hd(a,d){a.F=Date.now(),Wo(a),a.A=$n(a.v);var p=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),of(p.i,"t",_),a.C=0,p=a.j.J,a.h=new jd,a.g=If(a.j,p?d:null,!a.m),0<a.O&&(a.M=new tn(m(a.Y,a,a.g),a.O)),d=a.U,p=a.g,_=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(us[0]=P.toString()),P=us);for(var N=0;N<P.length;N++){var K=z(p,P[N],_||d.handleEvent,!1,d.h||d);if(!K)break;d.g[K.key]=K}d=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),_r(),Hw(a.i,a.u,a.A,a.l,a.R,a.m)}hs.prototype.ca=function(a){a=a.target;const d=this.M;d&&zn(a)==3?d.j():this.Y(a)},hs.prototype.Y=function(a){try{if(a==this.g)e:{const St=zn(this.g);var d=this.g.Ba();const bi=this.g.Z();if(!(3>St)&&(St!=3||this.g&&(this.h.h||this.g.oa()||ff(this.g)))){this.J||St!=4||d==7||(d==8||0>=bi?_r(3):_r(2)),dc(this);var p=this.g.Z();this.X=p;t:if(Wd(this)){var _=ff(this.g);a="";var P=_.length,N=zn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){zs(this),Er(this);var K="";break t}this.h.i=new l.TextDecoder}for(d=0;d<P;d++)this.h.h=!0,a+=this.h.i.decode(_[d],{stream:!(N&&d==P-1)});_.length=0,this.h.g+=a,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=p==200,Ww(this.i,this.u,this.A,this.l,this.R,St,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Be,yt=this.g;if((Be=yt.g?yt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(Be)){var xe=Be;break t}}xe=null}if(p=xe)Ei(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fc(this,p);else{this.o=!1,this.s=3,Lt(12),zs(this),Er(this);break e}}if(this.P){p=!0;let hn;for(;!this.J&&this.C<K.length;)if(hn=Qw(this,K),hn==uc){St==4&&(this.s=4,Lt(14),p=!1),Ei(this.i,this.l,null,"[Incomplete Response]");break}else if(hn==qd){this.s=4,Lt(15),Ei(this.i,this.l,K,"[Invalid Chunk]"),p=!1;break}else Ei(this.i,this.l,hn,null),fc(this,hn);if(Wd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),St!=4||K.length!=0||this.h.h||(this.s=1,Lt(16),p=!1),this.o=this.o&&p,!p)Ei(this.i,this.l,K,"[Invalid Chunked Response]"),zs(this),Er(this);else if(0<K.length&&!this.W){this.W=!0;var Ct=this.j;Ct.g==this&&Ct.ba&&!Ct.M&&(Ct.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),vc(Ct),Ct.M=!0,Lt(11))}}else Ei(this.i,this.l,K,null),fc(this,K);St==4&&zs(this),this.o&&!this.J&&(St==4?Ef(this.j,this):(this.o=!1,Wo(this)))}else dT(this.g),p==400&&0<K.indexOf("Unknown SID")?(this.s=3,Lt(12)):(this.s=0,Lt(13)),zs(this),Er(this)}}}catch{}finally{}};function Wd(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Qw(a,d){var p=a.C,_=d.indexOf(`
`,p);return _==-1?uc:(p=Number(d.substring(p,_)),isNaN(p)?qd:(_+=1,_+p>d.length?uc:(d=d.slice(_,_+p),a.C=_+p,d)))}hs.prototype.cancel=function(){this.J=!0,zs(this)};function Wo(a){a.S=Date.now()+a.I,Kd(a,a.I)}function Kd(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=yr(m(a.ba,a),d)}function dc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}hs.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Kw(this.i,this.A),this.L!=2&&(_r(),Lt(17)),zs(this),this.s=2,Er(this)):Kd(this,this.S-a)};function Er(a){a.j.G==0||a.J||Ef(a.j,a)}function zs(a){dc(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,mr(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function fc(a,d){try{var p=a.j;if(p.G!=0&&(p.g==a||pc(p.h,a))){if(!a.K&&pc(p.h,a)&&p.G==3){try{var _=p.Da.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var P=_;if(P[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)ta(p),Zo(p);else break e;yc(p),Lt(18)}}else p.za=P[1],0<p.za-p.T&&37500>P[2]&&p.F&&p.v==0&&!p.C&&(p.C=yr(m(p.Za,p),6e3));if(1>=Yd(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else qs(p,11)}else if((a.K||p.g==a)&&ta(p),!U(d))for(P=p.Da.g.parse(d),d=0;d<P.length;d++){let xe=P[d];if(p.T=xe[0],xe=xe[1],p.G==2)if(xe[0]=="c"){p.K=xe[1],p.ia=xe[2];const Ct=xe[3];Ct!=null&&(p.la=Ct,p.j.info("VER="+p.la));const St=xe[4];St!=null&&(p.Aa=St,p.j.info("SVER="+p.Aa));const bi=xe[5];bi!=null&&typeof bi=="number"&&0<bi&&(_=1.5*bi,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const hn=a.g;if(hn){const sa=hn.g?hn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(sa){var N=_.h;N.g||sa.indexOf("spdy")==-1&&sa.indexOf("quic")==-1&&sa.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(mc(N,N.h),N.h=null))}if(_.D){const Ec=hn.g?hn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ec&&(_.ya=Ec,je(_.I,_.D,Ec))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var K=a;if(_.qa=bf(_,_.J?_.ia:null,_.W),K.K){Xd(_.h,K);var Be=K,yt=_.L;yt&&(Be.I=yt),Be.B&&(dc(Be),Wo(Be)),_.g=K}else yf(_);0<p.i.length&&ea(p)}else xe[0]!="stop"&&xe[0]!="close"||qs(p,7);else p.G==3&&(xe[0]=="stop"||xe[0]=="close"?xe[0]=="stop"?qs(p,7):_c(p):xe[0]!="noop"&&p.l&&p.l.ta(xe),p.v=0)}}_r(4)}catch{}}var Yw=class{constructor(a,d){this.g=a,this.map=d}};function Gd(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qd(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Yd(a){return a.h?1:a.g?a.g.size:0}function pc(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function mc(a,d){a.g?a.g.add(d):a.h=d}function Xd(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Gd.prototype.cancel=function(){if(this.i=Jd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Jd(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const p of a.g.values())d=d.concat(p.D);return d}return R(a.i)}function Xw(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var d=[],p=a.length,_=0;_<p;_++)d.push(a[_]);return d}d=[],p=0;for(_ in a)d[p++]=a[_];return d}function Jw(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var d=[];a=a.length;for(var p=0;p<a;p++)d.push(p);return d}d=[],p=0;for(const _ in a)d[p++]=_;return d}}}function Zd(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var p=Jw(a),_=Xw(a),P=_.length,N=0;N<P;N++)d.call(void 0,_[N],p&&p[N],a)}var ef=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zw(a,d){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var _=a[p].indexOf("="),P=null;if(0<=_){var N=a[p].substring(0,_);P=a[p].substring(_+1)}else N=a[p];d(N,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function js(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof js){this.h=a.h,Ko(this,a.j),this.o=a.o,this.g=a.g,Go(this,a.s),this.l=a.l;var d=a.i,p=new br;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),tf(this,p),this.m=a.m}else a&&(d=String(a).match(ef))?(this.h=!1,Ko(this,d[1]||"",!0),this.o=wr(d[2]||""),this.g=wr(d[3]||"",!0),Go(this,d[4]),this.l=wr(d[5]||"",!0),tf(this,d[6]||"",!0),this.m=wr(d[7]||"")):(this.h=!1,this.i=new br(null,this.h))}js.prototype.toString=function(){var a=[],d=this.j;d&&a.push(Tr(d,nf,!0),":");var p=this.g;return(p||d=="file")&&(a.push("//"),(d=this.o)&&a.push(Tr(d,nf,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Tr(p,p.charAt(0)=="/"?nT:tT,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Tr(p,iT)),a.join("")};function $n(a){return new js(a)}function Ko(a,d,p){a.j=p?wr(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Go(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function tf(a,d,p){d instanceof br?(a.i=d,rT(a.i,a.h)):(p||(d=Tr(d,sT)),a.i=new br(d,a.h))}function je(a,d,p){a.i.set(d,p)}function Qo(a){return je(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function wr(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Tr(a,d,p){return typeof a=="string"?(a=encodeURI(a).replace(d,eT),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function eT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var nf=/[#\/\?@]/g,tT=/[#\?:]/g,nT=/[#\?]/g,sT=/[#\?@]/g,iT=/#/g;function br(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function ds(a){a.g||(a.g=new Map,a.h=0,a.i&&Zw(a.i,function(d,p){a.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=br.prototype,t.add=function(a,d){ds(this),this.i=null,a=wi(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(d),this.h+=1,this};function sf(a,d){ds(a),d=wi(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function rf(a,d){return ds(a),d=wi(a,d),a.g.has(d)}t.forEach=function(a,d){ds(this),this.g.forEach(function(p,_){p.forEach(function(P){a.call(d,P,_,this)},this)},this)},t.na=function(){ds(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let _=0;_<d.length;_++){const P=a[_];for(let N=0;N<P.length;N++)p.push(d[_])}return p},t.V=function(a){ds(this);let d=[];if(typeof a=="string")rf(this,a)&&(d=d.concat(this.g.get(wi(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)d=d.concat(a[p])}return d},t.set=function(a,d){return ds(this),this.i=null,a=wi(this,a),rf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function of(a,d,p){sf(a,d),0<p.length&&(a.i=null,a.g.set(wi(a,d),R(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var _=d[p];const N=encodeURIComponent(String(_)),K=this.V(_);for(_=0;_<K.length;_++){var P=N;K[_]!==""&&(P+="="+encodeURIComponent(String(K[_]))),a.push(P)}}return this.i=a.join("&")};function wi(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function rT(a,d){d&&!a.j&&(ds(a),a.i=null,a.g.forEach(function(p,_){var P=_.toLowerCase();_!=P&&(sf(this,_),of(this,P,p))},a)),a.j=d}function oT(a,d){const p=new vr;if(l.Image){const _=new Image;_.onload=g(fs,p,"TestLoadImage: loaded",!0,d,_),_.onerror=g(fs,p,"TestLoadImage: error",!1,d,_),_.onabort=g(fs,p,"TestLoadImage: abort",!1,d,_),_.ontimeout=g(fs,p,"TestLoadImage: timeout",!1,d,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else d(!1)}function aT(a,d){const p=new vr,_=new AbortController,P=setTimeout(()=>{_.abort(),fs(p,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:_.signal}).then(N=>{clearTimeout(P),N.ok?fs(p,"TestPingServer: ok",!0,d):fs(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(P),fs(p,"TestPingServer: error",!1,d)})}function fs(a,d,p,_,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),_(p)}catch{}}function lT(){this.g=new zo}function cT(a,d,p){const _=p||"";try{Zd(a,function(P,N){let K=P;u(P)&&(K=_t(P)),d.push(_+N+"="+encodeURIComponent(K))})}catch(P){throw d.push(_+"type="+encodeURIComponent("_badmap")),P}}function Yo(a){this.l=a.Ub||null,this.j=a.eb||!1}A(Yo,oc),Yo.prototype.g=function(){return new Xo(this.l,this.j)},Yo.prototype.i=function(a){return function(){return a}}({});function Xo(a,d){ae.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(Xo,ae),t=Xo.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,Ar(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ir(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ar(this)),this.g&&(this.readyState=3,Ar(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;af(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function af(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?Ir(this):Ar(this),this.readyState==3&&af(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ir(this))},t.Qa=function(a){this.g&&(this.response=a,Ir(this))},t.ga=function(){this.g&&Ir(this)};function Ir(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ar(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=d.next();return a.join(`\r
`)};function Ar(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Xo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function lf(a){let d="";return te(a,function(p,_){d+=_,d+=":",d+=p,d+=`\r
`}),d}function gc(a,d,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=lf(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):je(a,d,p))}function Je(a){ae.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Je,ae);var uT=/^https?$/i,hT=["POST","PUT"];t=Je.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():cc.g(),this.v=this.o?Ld(this.o):Ld(cc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(N){cf(this,N);return}if(a=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var P in _)p.set(P,_[P]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const N of _.keys())p.set(N,_.get(N));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(N=>N.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(hT,d,void 0))||_||P||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,K]of p)this.g.setRequestHeader(N,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{df(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){cf(this,N)}};function cf(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,uf(a),Jo(a)}function uf(a){a.A||(a.A=!0,ge(a,"complete"),ge(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ge(this,"complete"),ge(this,"abort"),Jo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Jo(this,!0)),Je.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?hf(this):this.bb())},t.bb=function(){hf(this)};function hf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||zn(a)!=4||a.Z()!=2)){if(a.u&&zn(a)==4)It(a.Ea,0,a);else if(ge(a,"readystatechange"),zn(a)==4){a.h=!1;try{const K=a.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var _;if(_=K===0){var P=String(a.D).match(ef)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),_=!uT.test(P?P.toLowerCase():"")}p=_}if(p)ge(a,"complete"),ge(a,"success");else{a.m=6;try{var N=2<zn(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",uf(a)}}finally{Jo(a)}}}}function Jo(a,d){if(a.g){df(a);const p=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||ge(a,"ready");try{p.onreadystatechange=_}catch{}}}function df(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function zn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<zn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),nn(d)}};function ff(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function dT(a){const d={};a=(a.g&&2<=zn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(U(a[_]))continue;var p=S(a[_]);const P=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const N=d[P]||[];d[P]=N,N.push(p)}C(d,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Cr(a,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||d}function pf(a){this.Aa=0,this.i=[],this.j=new vr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Cr("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Cr("baseRetryDelayMs",5e3,a),this.cb=Cr("retryDelaySeedMs",1e4,a),this.Wa=Cr("forwardChannelMaxRetries",2,a),this.wa=Cr("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Gd(a&&a.concurrentRequestLimit),this.Da=new lT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=pf.prototype,t.la=8,t.G=1,t.connect=function(a,d,p,_){Lt(0),this.W=a,this.H=d||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=bf(this,null,this.W),ea(this)};function _c(a){if(mf(a),a.G==3){var d=a.U++,p=$n(a.I);if(je(p,"SID",a.K),je(p,"RID",d),je(p,"TYPE","terminate"),Sr(a,p),d=new hs(a,a.j,d),d.L=2,d.v=Qo($n(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=d.v,p=!0),p||(d.g=If(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Wo(d)}Tf(a)}function Zo(a){a.g&&(vc(a),a.g.cancel(),a.g=null)}function mf(a){Zo(a),a.u&&(l.clearTimeout(a.u),a.u=null),ta(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ea(a){if(!Qd(a.h)&&!a.s){a.s=!0;var d=a.Ga;Ie||un(),Ee||(Ie(),Ee=!0),Wt.add(d,a),a.B=0}}function fT(a,d){return Yd(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=yr(m(a.Ga,a,d),wf(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new hs(this,this.j,a);let N=this.o;if(this.S&&(N?(N=y(N),I(N,this.S)):N=this.S),this.m!==null||this.O||(P.H=N,N=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=_f(this,P,d),p=$n(this.I),je(p,"RID",a),je(p,"CVER",22),this.D&&je(p,"X-HTTP-Session-Id",this.D),Sr(this,p),N&&(this.O?d="headers="+encodeURIComponent(String(lf(N)))+"&"+d:this.m&&gc(p,this.m,N)),mc(this.h,P),this.Ua&&je(p,"TYPE","init"),this.P?(je(p,"$req",d),je(p,"SID","null"),P.T=!0,hc(P,p,null)):hc(P,p,d),this.G=2}}else this.G==3&&(a?gf(this,a):this.i.length==0||Qd(this.h)||gf(this))};function gf(a,d){var p;d?p=d.l:p=a.U++;const _=$n(a.I);je(_,"SID",a.K),je(_,"RID",p),je(_,"AID",a.T),Sr(a,_),a.m&&a.o&&gc(_,a.m,a.o),p=new hs(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),d&&(a.i=d.D.concat(a.i)),d=_f(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),mc(a.h,p),hc(p,_,d)}function Sr(a,d){a.H&&te(a.H,function(p,_){je(d,_,p)}),a.l&&Zd({},function(p,_){je(d,_,p)})}function _f(a,d,p){p=Math.min(a.i.length,p);var _=a.l?m(a.l.Na,a.l,a):null;e:{var P=a.i;let N=-1;for(;;){const K=["count="+p];N==-1?0<p?(N=P[0].g,K.push("ofs="+N)):N=0:K.push("ofs="+N);let Be=!0;for(let yt=0;yt<p;yt++){let xe=P[yt].g;const Ct=P[yt].map;if(xe-=N,0>xe)N=Math.max(0,P[yt].g-100),Be=!1;else try{cT(Ct,K,"req"+xe+"_")}catch{_&&_(Ct)}}if(Be){_=K.join("&");break e}}}return a=a.i.splice(0,p),d.D=a,_}function yf(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;Ie||un(),Ee||(Ie(),Ee=!0),Wt.add(d,a),a.v=0}}function yc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=yr(m(a.Fa,a),wf(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,vf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=yr(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Lt(10),Zo(this),vf(this))};function vc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function vf(a){a.g=new hs(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=$n(a.qa);je(d,"RID","rpc"),je(d,"SID",a.K),je(d,"AID",a.T),je(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&je(d,"TO",a.ja),je(d,"TYPE","xmlhttp"),Sr(a,d),a.m&&a.o&&gc(d,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=Qo($n(d)),p.m=null,p.P=!0,Hd(p,a)}t.Za=function(){this.C!=null&&(this.C=null,Zo(this),yc(this),Lt(19))};function ta(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Ef(a,d){var p=null;if(a.g==d){ta(a),vc(a),a.g=null;var _=2}else if(pc(a.h,d))p=d.D,Xd(a.h,d),_=1;else return;if(a.G!=0){if(d.o)if(_==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var P=a.B;_=jo(),ge(_,new $d(_,p)),ea(a)}else yf(a);else if(P=d.s,P==3||P==0&&0<d.X||!(_==1&&fT(a,d)||_==2&&yc(a)))switch(p&&0<p.length&&(d=a.h,d.i=d.i.concat(p)),P){case 1:qs(a,5);break;case 4:qs(a,10);break;case 3:qs(a,6);break;default:qs(a,2)}}}function wf(a,d){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*d}function qs(a,d){if(a.j.info("Error code "+d),d==2){var p=m(a.fb,a),_=a.Xa;const P=!_;_=new js(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ko(_,"https"),Qo(_),P?oT(_.toString(),p):aT(_.toString(),p)}else Lt(2);a.G=0,a.l&&a.l.sa(d),Tf(a),mf(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Lt(2)):(this.j.info("Failed to ping google.com"),Lt(1))};function Tf(a){if(a.G=0,a.ka=[],a.l){const d=Jd(a.h);(d.length!=0||a.i.length!=0)&&(x(a.ka,d),x(a.ka,a.i),a.h.i.length=0,R(a.i),a.i.length=0),a.l.ra()}}function bf(a,d,p){var _=p instanceof js?$n(p):new js(p);if(_.g!="")d&&(_.g=d+"."+_.g),Go(_,_.s);else{var P=l.location;_=P.protocol,d=d?d+"."+P.hostname:P.hostname,P=+P.port;var N=new js(null);_&&Ko(N,_),d&&(N.g=d),P&&Go(N,P),p&&(N.l=p),_=N}return p=a.D,d=a.ya,p&&d&&je(_,p,d),je(_,"VER",a.la),Sr(a,_),_}function If(a,d,p){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new Je(new Yo({eb:p})):new Je(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Af(){}t=Af.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function na(){}na.prototype.g=function(a,d){return new Kt(a,d)};function Kt(a,d){ae.call(this),this.g=new pf(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!U(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!U(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Ti(this)}A(Kt,ae),Kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Kt.prototype.close=function(){_c(this.g)},Kt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=_t(a),a=p);d.i.push(new Yw(d.Ya++,a)),d.G==3&&ea(d)},Kt.prototype.N=function(){this.g.l=null,delete this.j,_c(this.g),delete this.g,Kt.aa.N.call(this)};function Cf(a){ac.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const p in d){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}A(Cf,ac);function Sf(){lc.call(this),this.status=1}A(Sf,lc);function Ti(a){this.g=a}A(Ti,Af),Ti.prototype.ua=function(){ge(this.g,"a")},Ti.prototype.ta=function(a){ge(this.g,new Cf(a))},Ti.prototype.sa=function(a){ge(this.g,new Sf)},Ti.prototype.ra=function(){ge(this.g,"b")},na.prototype.createWebChannel=na.prototype.g,Kt.prototype.send=Kt.prototype.o,Kt.prototype.open=Kt.prototype.m,Kt.prototype.close=Kt.prototype.close,My=function(){return new na},Oy=function(){return jo()},Dy=$s,Su={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},qo.NO_ERROR=0,qo.TIMEOUT=8,qo.HTTP_ERROR=6,Ia=qo,zd.COMPLETE="complete",Ny=zd,Vd.EventType=gr,gr.OPEN="a",gr.CLOSE="b",gr.ERROR="c",gr.MESSAGE="d",ae.prototype.listen=ae.prototype.K,Ur=Vd,Je.prototype.listenOnce=Je.prototype.L,Je.prototype.getLastError=Je.prototype.Ka,Je.prototype.getLastErrorCode=Je.prototype.Ba,Je.prototype.getStatus=Je.prototype.Z,Je.prototype.getResponseJson=Je.prototype.Oa,Je.prototype.getResponseText=Je.prototype.oa,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Ha,xy=Je}).apply(typeof ca<"u"?ca:typeof self<"u"?self:typeof window<"u"?window:{});const zp="@firebase/firestore";/**
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
 */class kt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}kt.UNAUTHENTICATED=new kt(null),kt.GOOGLE_CREDENTIALS=new kt("google-credentials-uid"),kt.FIRST_PARTY=new kt("first-party-uid"),kt.MOCK_USER=new kt("mock-user");/**
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
 */let lr="11.2.0";/**
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
 */const ri=new Po("@firebase/firestore");function Ri(){return ri.logLevel}function Z(t,...e){if(ri.logLevel<=ve.DEBUG){const n=e.map(Dh);ri.debug(`Firestore (${lr}): ${t}`,...n)}}function ss(t,...e){if(ri.logLevel<=ve.ERROR){const n=e.map(Dh);ri.error(`Firestore (${lr}): ${t}`,...n)}}function Qi(t,...e){if(ri.logLevel<=ve.WARN){const n=e.map(Dh);ri.warn(`Firestore (${lr}): ${t}`,...n)}}function Dh(t){if(typeof t=="string")return t;try{/**
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
 */function de(t="Unexpected state"){const e=`FIRESTORE (${lr}) INTERNAL ASSERTION FAILED: `+t;throw ss(e),new Error(e)}function Ve(t,e){t||de()}function me(t,e){return t}/**
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
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends as{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Jn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Ly{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ES{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(kt.UNAUTHENTICATED))}shutdown(){}}class wS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class TS{constructor(e){this.t=e,this.currentUser=kt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ve(this.o===void 0);let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new Jn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Jn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Jn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ve(typeof s.accessToken=="string"),new Ly(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ve(e===null||typeof e=="string"),new kt(e)}}class bS{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=kt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class IS{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new bS(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(kt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class AS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class CS{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ve(this.o===void 0);const s=r=>{r.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?i(r):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ve(typeof n.token=="string"),this.R=n.token,new AS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function SS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Vy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=SS(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function Te(t,e){return t<e?-1:t>e?1:0}function Yi(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */class rt{static now(){return rt.fromMillis(Date.now())}static fromDate(e){return rt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new rt(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ie(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ie(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ie(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class fe{static fromTimestamp(e){return new fe(e)}static min(){return new fe(new rt(0,0))}static max(){return new fe(new rt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Rn{constructor(e,n,s){n===void 0?n=0:n>e.length&&de(),s===void 0?s=e.length-n:s>e.length-n&&de(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Rn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Rn?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=Rn.compareSegments(e.get(i),n.get(i));if(r!==0)return r}return Math.sign(e.length-n.length)}static compareSegments(e,n){const s=Rn.isNumericId(e),i=Rn.isNumericId(n);return s&&!i?-1:!s&&i?1:s&&i?Rn.extractNumericId(e).compare(Rn.extractNumericId(n)):e<n?-1:e>n?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Cs.fromString(e.substring(4,e.length-2))}}class Ge extends Rn{construct(e,n,s){return new Ge(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new ie(j.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new Ge(n)}static emptyPath(){return new Ge([])}}const RS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class wt extends Rn{construct(e,n,s){return new wt(e,n,s)}static isValidIdentifier(e){return RS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),wt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new wt(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new ie(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new ie(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ie(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(s+=l,i++):(r(),i++)}if(r(),o)throw new ie(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new wt(n)}static emptyPath(){return new wt([])}}/**
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
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(Ge.fromString(e))}static fromName(e){return new re(Ge.fromString(e).popFirst(5))}static empty(){return new re(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new Ge(e.slice()))}}function kS(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=fe.fromTimestamp(s===1e9?new rt(n+1,0):new rt(n,s));return new xs(i,re.empty(),e)}function PS(t){return new xs(t.readTime,t.key,-1)}class xs{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new xs(fe.min(),re.empty(),-1)}static max(){return new xs(fe.max(),re.empty(),-1)}}function xS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:Te(t.largestBatchId,e.largestBatchId))}/**
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
 */const NS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class DS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function cr(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==NS)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&de(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,s)=>{n(e)})}static reject(e){return new $((n,s)=>{s(e)})}static waitFor(e){return new $((n,s)=>{let i=0,r=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(e){let n=$.resolve(!1);for(const s of e)n=n.next(i=>i?$.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new $((s,i)=>{const r=e.length,o=new Array(r);let l=0;for(let c=0;c<r;c++){const u=c;n(e[u]).next(h=>{o[u]=h,++l,l===r&&s(o)},h=>i(h))}})}static doWhile(e,n){return new $((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function OS(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ur(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ll{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ie(s),this.se=s=>n.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ll.oe=-1;function Vl(t){return t==null}function Ka(t){return t===0&&1/t==-1/0}function MS(t){return typeof t=="number"&&Number.isInteger(t)&&!Ka(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function LS(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=jp(e)),e=VS(t.get(n),e);return jp(e)}function VS(t,e){let n=e;const s=t.length;for(let i=0;i<s;i++){const r=t.charAt(i);switch(r){case"\0":n+="";break;case"":n+="";break;default:n+=r}}return n}function jp(t){return t+""}/**
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
 */function qp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Fy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */let ot=class Ru{constructor(e,n){this.comparator=e,this.root=n||Ss.EMPTY}insert(e,n){return new Ru(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ss.BLACK,null,null))}remove(e){return new Ru(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ss.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ua(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ua(this.root,e,this.comparator,!1)}getReverseIterator(){return new ua(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ua(this.root,e,this.comparator,!0)}},ua=class{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Ss=class Wn{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Wn.RED,this.left=i??Wn.EMPTY,this.right=r??Wn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Wn(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Wn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Wn.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Wn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Wn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw de();const e=this.left.check();if(e!==this.right.check())throw de();return e+(this.isRed()?0:1)}};Ss.EMPTY=null,Ss.RED=!0,Ss.BLACK=!1;Ss.EMPTY=new class{constructor(){this.size=0}get key(){throw de()}get value(){throw de()}get color(){throw de()}get left(){throw de()}get right(){throw de()}copy(e,n,s,i,r){return this}insert(e,n,s){return new Ss(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ut{constructor(e){this.comparator=e,this.data=new ot(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Hp(this.data.getIterator())}getIteratorFrom(e){return new Hp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ut(this.comparator);return n.data=e,n}}class Hp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class dn{constructor(e){this.fields=e,e.sort(wt.comparator)}static empty(){return new dn([])}unionWith(e){let n=new ut(wt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new dn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Yi(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Uy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Uy("Invalid base64 string: "+r):r}}(e);return new bt(n)}static fromUint8Array(e){const n=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(e);return new bt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const FS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ns(t){if(Ve(!!t),typeof t=="string"){let e=0;const n=FS.exec(t);if(Ve(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:et(t.seconds),nanos:et(t.nanos)}}function et(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ds(t){return typeof t=="string"?bt.fromBase64String(t):bt.fromUint8Array(t)}/**
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
 */function Oh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Fl(t){const e=t.mapValue.fields.__previous_value__;return Oh(e)?Fl(e):e}function wo(t){const e=Ns(t.mapValue.fields.__local_write_time__.timestampValue);return new rt(e.seconds,e.nanos)}/**
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
 */class US{constructor(e,n,s,i,r,o,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class To{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new To("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof To&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ha={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Os(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Oh(t)?4:$S(t)?9007199254740991:BS(t)?10:11:de()}function Vn(t,e){if(t===e)return!0;const n=Os(t);if(n!==Os(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return wo(t).isEqual(wo(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=Ns(i.timestampValue),l=Ns(r.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return Ds(i.bytesValue).isEqual(Ds(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return et(i.geoPointValue.latitude)===et(r.geoPointValue.latitude)&&et(i.geoPointValue.longitude)===et(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return et(i.integerValue)===et(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=et(i.doubleValue),l=et(r.doubleValue);return o===l?Ka(o)===Ka(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Yi(t.arrayValue.values||[],e.arrayValue.values||[],Vn);case 10:case 11:return function(i,r){const o=i.mapValue.fields||{},l=r.mapValue.fields||{};if(qp(o)!==qp(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Vn(o[c],l[c])))return!1;return!0}(t,e);default:return de()}}function bo(t,e){return(t.values||[]).find(n=>Vn(n,e))!==void 0}function Xi(t,e){if(t===e)return 0;const n=Os(t),s=Os(e);if(n!==s)return Te(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Te(t.booleanValue,e.booleanValue);case 2:return function(r,o){const l=et(r.integerValue||r.doubleValue),c=et(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Wp(t.timestampValue,e.timestampValue);case 4:return Wp(wo(t),wo(e));case 5:return Te(t.stringValue,e.stringValue);case 6:return function(r,o){const l=Ds(r),c=Ds(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(r,o){const l=r.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const h=Te(l[u],c[u]);if(h!==0)return h}return Te(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,o){const l=Te(et(r.latitude),et(o.latitude));return l!==0?l:Te(et(r.longitude),et(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Kp(t.arrayValue,e.arrayValue);case 10:return function(r,o){var l,c,u,h;const f=r.fields||{},m=o.fields||{},g=(l=f.value)===null||l===void 0?void 0:l.arrayValue,A=(c=m.value)===null||c===void 0?void 0:c.arrayValue,R=Te(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0);return R!==0?R:Kp(g,A)}(t.mapValue,e.mapValue);case 11:return function(r,o){if(r===ha.mapValue&&o===ha.mapValue)return 0;if(r===ha.mapValue)return 1;if(o===ha.mapValue)return-1;const l=r.fields||{},c=Object.keys(l),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let f=0;f<c.length&&f<h.length;++f){const m=Te(c[f],h[f]);if(m!==0)return m;const g=Xi(l[c[f]],u[h[f]]);if(g!==0)return g}return Te(c.length,h.length)}(t.mapValue,e.mapValue);default:throw de()}}function Wp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Te(t,e);const n=Ns(t),s=Ns(e),i=Te(n.seconds,s.seconds);return i!==0?i:Te(n.nanos,s.nanos)}function Kp(t,e){const n=t.values||[],s=e.values||[];for(let i=0;i<n.length&&i<s.length;++i){const r=Xi(n[i],s[i]);if(r)return r}return Te(n.length,s.length)}function Ji(t){return ku(t)}function ku(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=Ns(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ds(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return re.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",i=!0;for(const r of n.values||[])i?i=!1:s+=",",s+=ku(r);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${ku(n.fields[o])}`;return i+"}"}(t.mapValue):de()}function Aa(t){switch(Os(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Fl(t);return e?16+Aa(e):16;case 5:return 2*t.stringValue.length;case 6:return Ds(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((i,r)=>i+Aa(r),0)}(t.arrayValue);case 10:case 11:return function(s){let i=0;return fi(s.fields,(r,o)=>{i+=r.length+Aa(o)}),i}(t.mapValue);default:throw de()}}function Pu(t){return!!t&&"integerValue"in t}function Mh(t){return!!t&&"arrayValue"in t}function Gp(t){return!!t&&"nullValue"in t}function Qp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ca(t){return!!t&&"mapValue"in t}function BS(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Jr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return fi(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Jr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Jr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function $S(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class rn{constructor(e){this.value=e}static empty(){return new rn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Ca(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Jr(n)}setAll(e){let n=wt.emptyPath(),s={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=l.popLast()}o?s[l.lastSegment()]=Jr(o):i.push(l.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());Ca(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];Ca(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){fi(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new rn(Jr(this.value))}}function By(t){const e=[];return fi(t.fields,(n,s)=>{const i=new wt([n]);if(Ca(s)){const r=By(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new dn(e)}/**
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
 */class Nt{constructor(e,n,s,i,r,o,l){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Nt(e,0,fe.min(),fe.min(),fe.min(),rn.empty(),0)}static newFoundDocument(e,n,s,i){return new Nt(e,1,n,fe.min(),s,i,0)}static newNoDocument(e,n){return new Nt(e,2,n,fe.min(),fe.min(),rn.empty(),0)}static newUnknownDocument(e,n){return new Nt(e,3,n,fe.min(),fe.min(),rn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(fe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ga{constructor(e,n){this.position=e,this.inclusive=n}}function Yp(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=re.comparator(re.fromName(o.referenceValue),n.key):s=Xi(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Xp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Vn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Qa{constructor(e,n="asc"){this.field=e,this.dir=n}}function zS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class $y{}class ct extends $y{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new qS(e,n,s):n==="array-contains"?new KS(e,s):n==="in"?new GS(e,s):n==="not-in"?new QS(e,s):n==="array-contains-any"?new YS(e,s):new ct(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new HS(e,s):new WS(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Xi(n,this.value)):n!==null&&Os(this.value)===Os(n)&&this.matchesComparison(Xi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Fn extends $y{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Fn(e,n)}matches(e){return zy(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function zy(t){return t.op==="and"}function jy(t){return jS(t)&&zy(t)}function jS(t){for(const e of t.filters)if(e instanceof Fn)return!1;return!0}function xu(t){if(t instanceof ct)return t.field.canonicalString()+t.op.toString()+Ji(t.value);if(jy(t))return t.filters.map(e=>xu(e)).join(",");{const e=t.filters.map(n=>xu(n)).join(",");return`${t.op}(${e})`}}function qy(t,e){return t instanceof ct?function(s,i){return i instanceof ct&&s.op===i.op&&s.field.isEqual(i.field)&&Vn(s.value,i.value)}(t,e):t instanceof Fn?function(s,i){return i instanceof Fn&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,o,l)=>r&&qy(o,i.filters[l]),!0):!1}(t,e):void de()}function Hy(t){return t instanceof ct?function(n){return`${n.field.canonicalString()} ${n.op} ${Ji(n.value)}`}(t):t instanceof Fn?function(n){return n.op.toString()+" {"+n.getFilters().map(Hy).join(" ,")+"}"}(t):"Filter"}class qS extends ct{constructor(e,n,s){super(e,n,s),this.key=re.fromName(s.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class HS extends ct{constructor(e,n){super(e,"in",n),this.keys=Wy("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class WS extends ct{constructor(e,n){super(e,"not-in",n),this.keys=Wy("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Wy(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>re.fromName(s.referenceValue))}class KS extends ct{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Mh(n)&&bo(n.arrayValue,this.value)}}class GS extends ct{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&bo(this.value.arrayValue,n)}}class QS extends ct{constructor(e,n){super(e,"not-in",n)}matches(e){if(bo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!bo(this.value.arrayValue,n)}}class YS extends ct{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Mh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>bo(this.value.arrayValue,s))}}/**
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
 */class XS{constructor(e,n=null,s=[],i=[],r=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=l,this.ue=null}}function Jp(t,e=null,n=[],s=[],i=null,r=null,o=null){return new XS(t,e,n,s,i,r,o)}function Lh(t){const e=me(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>xu(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Vl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ji(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ji(s)).join(",")),e.ue=n}return e.ue}function Vh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!zS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!qy(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Xp(t.startAt,e.startAt)&&Xp(t.endAt,e.endAt)}function Nu(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ul{constructor(e,n=null,s=[],i=[],r=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function JS(t,e,n,s,i,r,o,l){return new Ul(t,e,n,s,i,r,o,l)}function Bl(t){return new Ul(t)}function Zp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ZS(t){return t.collectionGroup!==null}function Zr(t){const e=me(t);if(e.ce===null){e.ce=[];const n=new Set;for(const r of e.explicitOrderBy)e.ce.push(r),n.add(r.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ut(wt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(r=>{n.has(r.canonicalString())||r.isKeyField()||e.ce.push(new Qa(r,s))}),n.has(wt.keyField().canonicalString())||e.ce.push(new Qa(wt.keyField(),s))}return e.ce}function On(t){const e=me(t);return e.le||(e.le=eR(e,Zr(t))),e.le}function eR(t,e){if(t.limitType==="F")return Jp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const r=i.dir==="desc"?"asc":"desc";return new Qa(i.field,r)});const n=t.endAt?new Ga(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Ga(t.startAt.position,t.startAt.inclusive):null;return Jp(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function Du(t,e,n){return new Ul(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function $l(t,e){return Vh(On(t),On(e))&&t.limitType===e.limitType}function Ky(t){return`${Lh(On(t))}|lt:${t.limitType}`}function ki(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(i=>Hy(i)).join(", ")}]`),Vl(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(i=>Ji(i)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(i=>Ji(i)).join(",")),`Target(${s})`}(On(t))}; limitType=${t.limitType})`}function zl(t,e){return e.isFoundDocument()&&function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):re.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(t,e)&&function(s,i){for(const r of Zr(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(s,i){return!(s.startAt&&!function(o,l,c){const u=Yp(o,l,c);return o.inclusive?u<=0:u<0}(s.startAt,Zr(s),i)||s.endAt&&!function(o,l,c){const u=Yp(o,l,c);return o.inclusive?u>=0:u>0}(s.endAt,Zr(s),i))}(t,e)}function tR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Gy(t){return(e,n)=>{let s=!1;for(const i of Zr(t)){const r=nR(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function nR(t,e,n){const s=t.field.isKeyField()?re.comparator(e.key,n.key):function(r,o,l){const c=o.data.field(r),u=l.data.field(r);return c!==null&&u!==null?Xi(c,u):de()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return de()}}/**
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
 */class pi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){fi(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Fy(this.inner)}size(){return this.innerSize}}/**
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
 */const sR=new ot(re.comparator);function is(){return sR}const Qy=new ot(re.comparator);function Br(...t){let e=Qy;for(const n of t)e=e.insert(n.key,n);return e}function Yy(t){let e=Qy;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Zs(){return eo()}function Xy(){return eo()}function eo(){return new pi(t=>t.toString(),(t,e)=>t.isEqual(e))}const iR=new ot(re.comparator),rR=new ut(re.comparator);function we(...t){let e=rR;for(const n of t)e=e.add(n);return e}const oR=new ut(Te);function aR(){return oR}/**
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
 */function Fh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ka(e)?"-0":e}}function Jy(t){return{integerValue:""+t}}function lR(t,e){return MS(e)?Jy(e):Fh(t,e)}/**
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
 */class jl{constructor(){this._=void 0}}function cR(t,e,n){return t instanceof Ya?function(i,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&Oh(r)&&(r=Fl(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(n,e):t instanceof Io?ev(t,e):t instanceof Ao?tv(t,e):function(i,r){const o=Zy(i,r),l=em(o)+em(i.Pe);return Pu(o)&&Pu(i.Pe)?Jy(l):Fh(i.serializer,l)}(t,e)}function uR(t,e,n){return t instanceof Io?ev(t,e):t instanceof Ao?tv(t,e):n}function Zy(t,e){return t instanceof Xa?function(s){return Pu(s)||function(r){return!!r&&"doubleValue"in r}(s)}(e)?e:{integerValue:0}:null}class Ya extends jl{}class Io extends jl{constructor(e){super(),this.elements=e}}function ev(t,e){const n=nv(e);for(const s of t.elements)n.some(i=>Vn(i,s))||n.push(s);return{arrayValue:{values:n}}}class Ao extends jl{constructor(e){super(),this.elements=e}}function tv(t,e){let n=nv(e);for(const s of t.elements)n=n.filter(i=>!Vn(i,s));return{arrayValue:{values:n}}}class Xa extends jl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function em(t){return et(t.integerValue||t.doubleValue)}function nv(t){return Mh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function hR(t,e){return t.field.isEqual(e.field)&&function(s,i){return s instanceof Io&&i instanceof Io||s instanceof Ao&&i instanceof Ao?Yi(s.elements,i.elements,Vn):s instanceof Xa&&i instanceof Xa?Vn(s.Pe,i.Pe):s instanceof Ya&&i instanceof Ya}(t.transform,e.transform)}class dR{constructor(e,n){this.version=e,this.transformResults=n}}class Zn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Zn}static exists(e){return new Zn(void 0,e)}static updateTime(e){return new Zn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Sa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ql{}function sv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new rv(t.key,Zn.none()):new xo(t.key,t.data,Zn.none());{const n=t.data,s=rn.empty();let i=new ut(wt.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new mi(t.key,s,new dn(i.toArray()),Zn.none())}}function fR(t,e,n){t instanceof xo?function(i,r,o){const l=i.value.clone(),c=nm(i.fieldTransforms,r,o.transformResults);l.setAll(c),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof mi?function(i,r,o){if(!Sa(i.precondition,r))return void r.convertToUnknownDocument(o.version);const l=nm(i.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(iv(i)),c.setAll(l),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function to(t,e,n,s){return t instanceof xo?function(r,o,l,c){if(!Sa(r.precondition,o))return l;const u=r.value.clone(),h=sm(r.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,s):t instanceof mi?function(r,o,l,c){if(!Sa(r.precondition,o))return l;const u=sm(r.fieldTransforms,c,o),h=o.data;return h.setAll(iv(r)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),l===null?null:l.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(f=>f.field))}(t,e,n,s):function(r,o,l){return Sa(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function pR(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=Zy(s.transform,i||null);r!=null&&(n===null&&(n=rn.empty()),n.set(s.field,r))}return n||null}function tm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&Yi(s,i,(r,o)=>hR(r,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class xo extends ql{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class mi extends ql{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function iv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function nm(t,e,n){const s=new Map;Ve(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,l=e.data.field(r.field);s.set(r.field,uR(o,l,n[i]))}return s}function sm(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,cR(r,o,e))}return s}class rv extends ql{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class mR extends ql{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class gR{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&fR(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=to(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=to(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Xy();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let l=this.applyToLocalView(o,r.mutatedFields);l=n.has(i.key)?null:l;const c=sv(o,l);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(fe.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),we())}isEqual(e){return this.batchId===e.batchId&&Yi(this.mutations,e.mutations,(n,s)=>tm(n,s))&&Yi(this.baseMutations,e.baseMutations,(n,s)=>tm(n,s))}}class Uh{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){Ve(e.mutations.length===s.length);let i=function(){return iR}();const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Uh(e,n,s,i)}}/**
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
 */class _R{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class yR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var st,Ce;function vR(t){switch(t){default:return de();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function ov(t){if(t===void 0)return ss("GRPC error has no .code"),j.UNKNOWN;switch(t){case st.OK:return j.OK;case st.CANCELLED:return j.CANCELLED;case st.UNKNOWN:return j.UNKNOWN;case st.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case st.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case st.INTERNAL:return j.INTERNAL;case st.UNAVAILABLE:return j.UNAVAILABLE;case st.UNAUTHENTICATED:return j.UNAUTHENTICATED;case st.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case st.NOT_FOUND:return j.NOT_FOUND;case st.ALREADY_EXISTS:return j.ALREADY_EXISTS;case st.PERMISSION_DENIED:return j.PERMISSION_DENIED;case st.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case st.ABORTED:return j.ABORTED;case st.OUT_OF_RANGE:return j.OUT_OF_RANGE;case st.UNIMPLEMENTED:return j.UNIMPLEMENTED;case st.DATA_LOSS:return j.DATA_LOSS;default:return de()}}(Ce=st||(st={}))[Ce.OK=0]="OK",Ce[Ce.CANCELLED=1]="CANCELLED",Ce[Ce.UNKNOWN=2]="UNKNOWN",Ce[Ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ce[Ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ce[Ce.NOT_FOUND=5]="NOT_FOUND",Ce[Ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ce[Ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ce[Ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ce[Ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ce[Ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ce[Ce.ABORTED=10]="ABORTED",Ce[Ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ce[Ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ce[Ce.INTERNAL=13]="INTERNAL",Ce[Ce.UNAVAILABLE=14]="UNAVAILABLE",Ce[Ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function ER(){return new TextEncoder}/**
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
 */const wR=new Cs([4294967295,4294967295],0);function im(t){const e=ER().encode(t),n=new Py;return n.update(e),new Uint8Array(n.digest())}function rm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Cs([n,s],0),new Cs([i,r],0)]}class Bh{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new $r(`Invalid padding: ${n}`);if(s<0)throw new $r(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new $r(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new $r(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=Cs.fromNumber(this.Te)}de(e,n,s){let i=e.add(n.multiply(Cs.fromNumber(s)));return i.compare(wR)===1&&(i=new Cs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=im(e),[s,i]=rm(n);for(let r=0;r<this.hashCount;r++){const o=this.de(s,i,r);if(!this.Ee(o))return!1}return!0}static create(e,n,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Bh(r,i,n);return s.forEach(l=>o.insert(l)),o}insert(e){if(this.Te===0)return;const n=im(e),[s,i]=rm(n);for(let r=0;r<this.hashCount;r++){const o=this.de(s,i,r);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class $r extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Hl{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,No.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Hl(fe.min(),i,new ot(Te),is(),we())}}class No{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new No(s,n,we(),we(),we())}}/**
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
 */class Ra{constructor(e,n,s,i){this.Re=e,this.removedTargetIds=n,this.key=s,this.Ve=i}}class av{constructor(e,n){this.targetId=e,this.me=n}}class lv{constructor(e,n,s=bt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class om{constructor(){this.fe=0,this.ge=am(),this.pe=bt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=we(),n=we(),s=we();return this.ge.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:de()}}),new No(this.pe,this.ye,e,n,s)}Ce(){this.we=!1,this.ge=am()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ve(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class TR{constructor(e){this.Be=e,this.Le=new Map,this.ke=is(),this.qe=da(),this.Qe=da(),this.Ke=new ot(Te)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const s=this.ze(n);switch(e.state){case 0:this.je(n)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(n);break;case 3:this.je(n)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),s.De(e.resumeToken));break;default:de()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Le.forEach((s,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,s=e.me.count,i=this.Ye(n);if(i){const r=i.target;if(Nu(r))if(s===0){const o=new re(r.path);this.We(n,o,Nt.newNoDocument(o,fe.min()))}else Ve(s===1);else{const o=this.Ze(n);if(o!==s){const l=this.Xe(e),c=l?this.et(l,e,o):1;if(c!==0){this.He(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=n;let o,l;try{o=Ds(s).toUint8Array()}catch(c){if(c instanceof Uy)return Qi("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Bh(o,i,r)}catch(c){return Qi(c instanceof $r?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Te===0?null:l}et(e,n,s){return n.me.count===s-this.rt(e,n.targetId)?0:2}rt(e,n){const s=this.Be.getRemoteKeysForTarget(n);let i=0;return s.forEach(r=>{const o=this.Be.nt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(l)||(this.We(n,r,null),i++)}),i}it(e){const n=new Map;this.Le.forEach((r,o)=>{const l=this.Ye(o);if(l){if(r.current&&Nu(l.target)){const c=new re(l.target.path);this.st(c).has(o)||this.ot(o,c)||this.We(o,c,Nt.newNoDocument(c,e))}r.be&&(n.set(o,r.ve()),r.Ce())}});let s=we();this.Qe.forEach((r,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(s=s.add(r))}),this.ke.forEach((r,o)=>o.setReadTime(e));const i=new Hl(e,n,this.Ke,this.ke,s);return this.ke=is(),this.qe=da(),this.Qe=da(),this.Ke=new ot(Te),i}Ue(e,n){if(!this.je(e))return;const s=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,s),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,s){if(!this.je(e))return;const i=this.ze(e);this.ot(e,n)?i.Fe(n,1):i.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),s&&(this.ke=this.ke.insert(n,s))}removeTarget(e){this.Le.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Le.get(e);return n||(n=new om,this.Le.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new ut(Te),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ut(Te),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Le.get(e);return n&&n.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new om),this.Be.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Be.getRemoteKeysForTarget(e).has(n)}}function da(){return new ot(re.comparator)}function am(){return new ot(re.comparator)}const bR={asc:"ASCENDING",desc:"DESCENDING"},IR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},AR={and:"AND",or:"OR"};class CR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ou(t,e){return t.useProto3Json||Vl(e)?e:{value:e}}function Ja(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function SR(t,e){return Ja(t,e.toTimestamp())}function Mn(t){return Ve(!!t),fe.fromTimestamp(function(n){const s=Ns(n);return new rt(s.seconds,s.nanos)}(t))}function $h(t,e){return Mu(t,e).canonicalString()}function Mu(t,e){const n=function(i){return new Ge(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function uv(t){const e=Ge.fromString(t);return Ve(mv(e)),e}function Lu(t,e){return $h(t.databaseId,e.path)}function zc(t,e){const n=uv(e);if(n.get(1)!==t.databaseId.projectId)throw new ie(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ie(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(dv(n))}function hv(t,e){return $h(t.databaseId,e)}function RR(t){const e=uv(t);return e.length===4?Ge.emptyPath():dv(e)}function Vu(t){return new Ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function dv(t){return Ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function lm(t,e,n){return{name:Lu(t,e),fields:n.value.mapValue.fields}}function kR(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:de()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(u,h){return u.useProto3Json?(Ve(h===void 0||typeof h=="string"),bt.fromBase64String(h||"")):(Ve(h===void 0||h instanceof Buffer||h instanceof Uint8Array),bt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const h=u.code===void 0?j.UNKNOWN:ov(u.code);return new ie(h,u.message||"")}(o);n=new lv(s,i,r,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=zc(t,s.document.name),r=Mn(s.document.updateTime),o=s.document.createTime?Mn(s.document.createTime):fe.min(),l=new rn({mapValue:{fields:s.document.fields}}),c=Nt.newFoundDocument(i,r,o,l),u=s.targetIds||[],h=s.removedTargetIds||[];n=new Ra(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=zc(t,s.document),r=s.readTime?Mn(s.readTime):fe.min(),o=Nt.newNoDocument(i,r),l=s.removedTargetIds||[];n=new Ra([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=zc(t,s.document),r=s.removedTargetIds||[];n=new Ra([],r,i,null)}else{if(!("filter"in e))return de();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new yR(i,r),l=s.targetId;n=new av(l,o)}}return n}function PR(t,e){let n;if(e instanceof xo)n={update:lm(t,e.key,e.value)};else if(e instanceof rv)n={delete:Lu(t,e.key)};else if(e instanceof mi)n={update:lm(t,e.key,e.data),updateMask:UR(e.fieldMask)};else{if(!(e instanceof mR))return de();n={verify:Lu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,o){const l=o.transform;if(l instanceof Ya)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Io)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ao)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Xa)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw de()}(0,s))),e.precondition.isNone||(n.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:SR(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:de()}(t,e.precondition)),n}function xR(t,e){return t&&t.length>0?(Ve(e!==void 0),t.map(n=>function(i,r){let o=i.updateTime?Mn(i.updateTime):Mn(r);return o.isEqual(fe.min())&&(o=Mn(r)),new dR(o,i.transformResults||[])}(n,e))):[]}function NR(t,e){return{documents:[hv(t,e.path)]}}function DR(t,e){const n={structuredQuery:{}},s=e.path;let i;e.collectionGroup!==null?(i=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=hv(t,i);const r=function(u){if(u.length!==0)return pv(Fn.create(u,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const o=function(u){if(u.length!==0)return u.map(h=>function(m){return{field:Pi(m.field),direction:LR(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Ou(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:n,parent:i}}function OR(t){let e=RR(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Ve(s===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let r=[];n.where&&(r=function(f){const m=fv(f);return m instanceof Fn&&jy(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(A){return new Qa(xi(A.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(f){let m;return m=typeof f=="object"?f.value:f,Vl(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(f){const m=!!f.before,g=f.values||[];return new Ga(g,m)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const m=!f.before,g=f.values||[];return new Ga(g,m)}(n.endAt)),JS(e,i,o,r,l,"F",c,u)}function MR(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return de()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function fv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=xi(n.unaryFilter.field);return ct.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=xi(n.unaryFilter.field);return ct.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=xi(n.unaryFilter.field);return ct.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=xi(n.unaryFilter.field);return ct.create(o,"!=",{nullValue:"NULL_VALUE"});default:return de()}}(t):t.fieldFilter!==void 0?function(n){return ct.create(xi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return de()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Fn.create(n.compositeFilter.filters.map(s=>fv(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return de()}}(n.compositeFilter.op))}(t):de()}function LR(t){return bR[t]}function VR(t){return IR[t]}function FR(t){return AR[t]}function Pi(t){return{fieldPath:t.canonicalString()}}function xi(t){return wt.fromServerFormat(t.fieldPath)}function pv(t){return t instanceof ct?function(n){if(n.op==="=="){if(Qp(n.value))return{unaryFilter:{field:Pi(n.field),op:"IS_NAN"}};if(Gp(n.value))return{unaryFilter:{field:Pi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Qp(n.value))return{unaryFilter:{field:Pi(n.field),op:"IS_NOT_NAN"}};if(Gp(n.value))return{unaryFilter:{field:Pi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pi(n.field),op:VR(n.op),value:n.value}}}(t):t instanceof Fn?function(n){const s=n.getFilters().map(i=>pv(i));return s.length===1?s[0]:{compositeFilter:{op:FR(n.op),filters:s}}}(t):de()}function UR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function mv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ws{constructor(e,n,s,i,r=fe.min(),o=fe.min(),l=bt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new ws(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ws(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ws(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ws(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class BR{constructor(e){this.ht=e}}function $R(t){const e=OR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Du(e,e.limit,"L"):e}/**
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
 */class zR{constructor(){this.ln=new jR}addToCollectionParentIndex(e,n){return this.ln.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(xs.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(xs.min())}updateCollectionGroup(e,n,s){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class jR{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new ut(Ge.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new ut(Ge.comparator)).toArray()}}/**
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
 */const cm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class zt{static withCacheSize(e){return new zt(e,zt.DEFAULT_COLLECTION_PERCENTILE,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */class Zi{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Zi(0)}static Qn(){return new Zi(-1)}}/**
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
 */function um([t,e],[n,s]){const i=Te(t,n);return i===0?Te(e,s):i}class qR{constructor(e){this.Gn=e,this.buffer=new ut(um),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();um(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class HR{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){Z("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ur(n)?Z("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await cr(n)}await this.Yn(3e5)})}}class WR{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(s=>Math.floor(n/100*s))}nthSequenceNumber(e,n){if(n===0)return $.resolve(Ll.oe);const s=new qR(n);return this.Zn.forEachTarget(e,i=>s.Hn(i.sequenceNumber)).next(()=>this.Zn.er(e,i=>s.Hn(i))).next(()=>s.maxValue)}removeTargets(e,n,s){return this.Zn.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(cm)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),cm):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let s,i,r,o,l,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(s=f,l=Date.now(),this.removeTargets(e,s,n))).next(f=>(r=f,c=Date.now(),this.removeOrphanedDocuments(e,s))).next(f=>(u=Date.now(),Ri()<=ve.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${r} targets in `+(c-l)+`ms
	Removed ${f} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:f})))}}function KR(t,e){return new WR(t,e)}/**
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
 */class GR{constructor(){this.changes=new pi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?$.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class QR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class YR{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&to(s.mutation,i,dn.empty(),rt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,we()).next(()=>s))}getLocalViewOfDocuments(e,n,s=we()){const i=Zs();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Br();return r.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Zs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,we()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,s,i){let r=is();const o=eo(),l=function(){return eo()}();return n.forEach((c,u)=>{const h=s.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof mi)?r=r.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),to(h.mutation,u,h.mutation.getFieldMask(),rt.now())):o.set(u.key,dn.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var f;return l.set(u,new QR(h,(f=o.get(u))!==null&&f!==void 0?f:null))}),l))}recalculateAndSaveOverlays(e,n){const s=eo();let i=new ot((o,l)=>o-l),r=we();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=s.get(c)||dn.empty();h=l.applyToLocalView(u,h),s.set(c,h);const f=(i.get(l.batchId)||we()).add(c);i=i.insert(l.batchId,f)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,h=c.value,f=Xy();h.forEach(m=>{if(!r.has(m)){const g=sv(n.get(m),s.get(m));g!==null&&f.set(m,g),r=r.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return $.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,i){return function(o){return re.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ZS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,i):this.getDocumentsMatchingCollectionQuery(e,n,s,i)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):$.resolve(Zs());let l=-1,c=r;return o.next(u=>$.forEach(u,(h,f)=>(l<f.largestBatchId&&(l=f.largestBatchId),r.get(h)?$.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{c=c.insert(h,m)}))).next(()=>this.populateOverlays(e,u,r)).next(()=>this.computeViews(e,c,u,we())).next(h=>({batchId:l,changes:Yy(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next(s=>{let i=Br();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s,i){const r=n.collectionGroup;let o=Br();return this.indexManager.getCollectionParents(e,r).next(l=>$.forEach(l,c=>{const u=function(f,m){return new Ul(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,c.child(r));return this.getDocumentsMatchingCollectionQuery(e,u,s,i).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r,i))).next(o=>{r.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Nt.newInvalidDocument(h)))});let l=Br();return o.forEach((c,u)=>{const h=r.get(c);h!==void 0&&to(h.mutation,u,dn.empty(),rt.now()),zl(n,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class XR{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return $.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Mn(i.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(i){return{name:i.name,query:$R(i.bundledQuery),readTime:Mn(i.readTime)}}(n)),$.resolve()}}/**
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
 */class JR{constructor(){this.overlays=new ot(re.comparator),this.dr=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Zs();return $.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.Tt(e,n,r)}),$.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.dr.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.dr.delete(s)),$.resolve()}getOverlaysForCollection(e,n,s){const i=Zs(),r=n.length+1,o=new re(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return $.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new ot((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let h=r.get(u.largestBatchId);h===null&&(h=Zs(),r=r.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const l=Zs(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>l.set(u,h)),!(l.size()>=i)););return $.resolve(l)}Tt(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.dr.get(i.largestBatchId).delete(s.key);this.dr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new _R(n,s));let r=this.dr.get(n);r===void 0&&(r=we(),this.dr.set(n,r)),this.dr.set(n,r.add(s.key))}}/**
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
 */class ZR{constructor(){this.sessionToken=bt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
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
 */class zh{constructor(){this.Er=new ut(dt.Ar),this.Rr=new ut(dt.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,n){const s=new dt(e,n);this.Er=this.Er.add(s),this.Rr=this.Rr.add(s)}mr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.gr(new dt(e,n))}pr(e,n){e.forEach(s=>this.removeReference(s,n))}yr(e){const n=new re(new Ge([])),s=new dt(n,e),i=new dt(n,e+1),r=[];return this.Rr.forEachInRange([s,i],o=>{this.gr(o),r.push(o.key)}),r}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new re(new Ge([])),s=new dt(n,e),i=new dt(n,e+1);let r=we();return this.Rr.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new dt(e,0),s=this.Er.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class dt{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return re.comparator(e.key,n.key)||Te(e.br,n.br)}static Vr(e,n){return Te(e.br,n.br)||re.comparator(e.key,n.key)}}/**
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
 */class e1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new ut(dt.Ar)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new gR(r,n,s,i);this.mutationQueue.push(o);for(const l of i)this.vr=this.vr.add(new dt(l.key,r)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.Fr(s),r=i<0?0:i;return $.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new dt(n,0),i=new dt(n,Number.POSITIVE_INFINITY),r=[];return this.vr.forEachInRange([s,i],o=>{const l=this.Cr(o.br);r.push(l)}),$.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ut(Te);return n.forEach(i=>{const r=new dt(i,0),o=new dt(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([r,o],l=>{s=s.add(l.br)})}),$.resolve(this.Mr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;re.isDocumentKey(r)||(r=r.child(""));const o=new dt(new re(r),0);let l=new ut(Te);return this.vr.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(l=l.add(c.br)),!0)},o),$.resolve(this.Mr(l))}Mr(e){const n=[];return e.forEach(s=>{const i=this.Cr(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ve(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.vr;return $.forEach(n.mutations,i=>{const r=new dt(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.vr=s})}Bn(e){}containsKey(e,n){const s=new dt(n,0),i=this.vr.firstAfterOrEqual(s);return $.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class t1{constructor(e){this.Nr=e,this.docs=function(){return new ot(re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Nr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return $.resolve(s?s.document.mutableCopy():Nt.newInvalidDocument(n))}getEntries(e,n){let s=is();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Nt.newInvalidDocument(i))}),$.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=is();const o=n.path,l=new re(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||xS(PS(h),s)<=0||(i.has(h.key)||zl(n,h))&&(r=r.insert(h.key,h.mutableCopy()))}return $.resolve(r)}getAllFromCollectionGroup(e,n,s,i){de()}Br(e,n){return $.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new n1(this)}getSize(e){return $.resolve(this.size)}}class n1 extends GR{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.hr.addEntry(e,i)):this.hr.removeEntry(s)}),$.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
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
 */class s1{constructor(e){this.persistence=e,this.Lr=new pi(n=>Lh(n),Vh),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this.kr=0,this.qr=new zh,this.targetCount=0,this.Qr=Zi.qn()}forEachTarget(e,n){return this.Lr.forEach((s,i)=>n(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.kr&&(this.kr=n),$.resolve()}Un(e){this.Lr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new Zi(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Un(n),$.resolve()}removeTargetData(e,n){return this.Lr.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Lr.forEach((o,l)=>{l.sequenceNumber<=n&&s.get(l.targetId)===null&&(this.Lr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),$.waitFor(r).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const s=this.Lr.get(n)||null;return $.resolve(s)}addMatchingKeys(e,n,s){return this.qr.mr(n,s),$.resolve()}removeMatchingKeys(e,n,s){this.qr.pr(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),$.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const s=this.qr.Sr(n);return $.resolve(s)}containsKey(e,n){return $.resolve(this.qr.containsKey(n))}}/**
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
 */class gv{constructor(e,n){this.Kr={},this.overlays={},this.$r=new Ll(0),this.Ur=!1,this.Ur=!0,this.Wr=new ZR,this.referenceDelegate=e(this),this.Gr=new s1(this),this.indexManager=new zR,this.remoteDocumentCache=function(i){return new t1(i)}(s=>this.referenceDelegate.zr(s)),this.serializer=new BR(n),this.jr=new XR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new JR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Kr[e.toKey()];return s||(s=new e1(n,this.referenceDelegate),this.Kr[e.toKey()]=s),s}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,s){Z("MemoryPersistence","Starting transaction:",e);const i=new i1(this.$r.next());return this.referenceDelegate.Hr(),s(i).next(r=>this.referenceDelegate.Jr(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Yr(e,n){return $.or(Object.values(this.Kr).map(s=>()=>s.containsKey(e,n)))}}class i1 extends DS{constructor(e){super(),this.currentSequenceNumber=e}}class jh{constructor(e){this.persistence=e,this.Zr=new zh,this.Xr=null}static ei(e){return new jh(e)}get ti(){if(this.Xr)return this.Xr;throw de()}addReference(e,n,s){return this.Zr.addReference(s,n),this.ti.delete(s.toString()),$.resolve()}removeReference(e,n,s){return this.Zr.removeReference(s,n),this.ti.add(s.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),$.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(i=>this.ti.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.ti.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.ti,s=>{const i=re.fromPath(s);return this.ni(e,i).next(r=>{r||n.removeEntry(i,fe.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(s=>{s?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return $.or([()=>$.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class Za{constructor(e,n){this.persistence=e,this.ri=new pi(s=>LS(s.path),(s,i)=>s.isEqual(i)),this.garbageCollector=KR(this,n)}static ei(e,n){return new Za(e,n)}Hr(){}Jr(e){return $.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>n.next(i=>s+i))}nr(e){let n=0;return this.er(e,s=>{n++}).next(()=>n)}er(e,n){return $.forEach(this.ri,(s,i)=>this.ir(e,s,i).next(r=>r?$.resolve():n(i)))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const i=this.persistence.getRemoteDocumentCache(),r=i.newChangeBuffer();return i.Br(e,o=>this.ir(e,o,n).next(l=>{l||(s++,r.removeEntry(o,fe.min()))})).next(()=>r.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),$.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.ri.set(s,e.currentSequenceNumber),$.resolve()}removeReference(e,n,s){return this.ri.set(s,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),$.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Aa(e.data.value)),n}ir(e,n,s){return $.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.ri.get(n);return $.resolve(i!==void 0&&i>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class qh{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Wi=s,this.Gi=i}static zi(e,n){let s=we(),i=we();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new qh(e,n.fromCache,s,i)}}/**
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
 */class r1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class o1{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return ZA()?8:OS(wn())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,s,i){const r={result:null};return this.Xi(e,n).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.es(e,n,i,s).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new r1;return this.ts(e,n,o).next(l=>{if(r.result=l,this.Hi)return this.ns(e,n,o,l.size)})}).next(()=>r.result)}ns(e,n,s,i){return s.documentReadCount<this.Ji?(Ri()<=ve.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",ki(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),$.resolve()):(Ri()<=ve.DEBUG&&Z("QueryEngine","Query:",ki(n),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.Yi*i?(Ri()<=ve.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",ki(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,On(n))):$.resolve())}Xi(e,n){if(Zp(n))return $.resolve(null);let s=On(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Du(n,null,"F"),s=On(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=we(...r);return this.Zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.rs(n,l);return this.ss(n,u,o,c.readTime)?this.Xi(e,Du(n,null,"F")):this.os(e,u,n,c)}))})))}es(e,n,s,i){return Zp(n)||i.isEqual(fe.min())?$.resolve(null):this.Zi.getDocuments(e,s).next(r=>{const o=this.rs(n,r);return this.ss(n,o,s,i)?$.resolve(null):(Ri()<=ve.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ki(n)),this.os(e,o,n,kS(i,-1)).next(l=>l))})}rs(e,n){let s=new ut(Gy(e));return n.forEach((i,r)=>{zl(e,r)&&(s=s.add(r))}),s}ss(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}ts(e,n,s){return Ri()<=ve.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",ki(n)),this.Zi.getDocumentsMatchingQuery(e,n,xs.min(),s)}os(e,n,s,i){return this.Zi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class a1{constructor(e,n,s,i){this.persistence=e,this._s=n,this.serializer=i,this.us=new ot(Te),this.cs=new pi(r=>Lh(r),Vh),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(s)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new YR(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function l1(t,e,n,s){return new a1(t,e,n,s)}async function _v(t,e){const n=me(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Ps(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],l=[];let c=we();for(const u of i){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of r){l.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:l}))})})}function c1(t,e){const n=me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.hs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,h){const f=u.batch,m=f.keys();let g=$.resolve();return m.forEach(A=>{g=g.next(()=>h.getEntry(c,A)).next(R=>{const x=u.docVersions.get(A);Ve(x!==null),R.version.compareTo(x)<0&&(f.applyToRemoteDocument(R,u),R.isValidDocument()&&(R.setReadTime(u.commitVersion),h.addEntry(R)))})}),g.next(()=>l.mutationQueue.removeMutationBatch(c,f))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(l){let c=we();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function yv(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function u1(t,e){const n=me(t),s=e.snapshotVersion;let i=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});i=n.us;const l=[];e.targetChanges.forEach((h,f)=>{const m=i.get(f);if(!m)return;l.push(n.Gr.removeMatchingKeys(r,h.removedDocuments,f).next(()=>n.Gr.addMatchingKeys(r,h.addedDocuments,f)));let g=m.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(bt.EMPTY_BYTE_STRING,fe.min()).withLastLimboFreeSnapshotVersion(fe.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,s)),i=i.insert(f,g),function(R,x,F){return R.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(m,g,h)&&l.push(n.Gr.updateTargetData(r,g))});let c=is(),u=we();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(r,h))}),l.push(h1(r,o,e.documentUpdates).next(h=>{c=h.Is,u=h.ds})),!s.isEqual(fe.min())){const h=n.Gr.getLastRemoteSnapshotVersion(r).next(f=>n.Gr.setTargetsMetadata(r,r.currentSequenceNumber,s));l.push(h)}return $.waitFor(l).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,u)).next(()=>c)}).then(r=>(n.us=i,r))}function h1(t,e,n){let s=we(),i=we();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=is();return n.forEach((l,c)=>{const u=r.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(fe.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):Z("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Is:o,ds:i}})}function d1(t,e){const n=me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function f1(t,e){const n=me(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Gr.getTargetData(s,e).next(r=>r?(i=r,$.resolve(i)):n.Gr.allocateTargetId(s).next(o=>(i=new ws(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Gr.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.us.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.us=n.us.insert(s.targetId,s),n.cs.set(e,s.targetId)),s})}async function Fu(t,e,n){const s=me(t),i=s.us.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ur(o))throw o;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.us=s.us.remove(e),s.cs.delete(i.target)}function hm(t,e,n){const s=me(t);let i=fe.min(),r=we();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const f=me(c),m=f.cs.get(h);return m!==void 0?$.resolve(f.us.get(m)):f.Gr.getTargetData(u,h)}(s,o,On(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,s.Gr.getMatchingKeysForTargetId(o,l.targetId).next(c=>{r=c})}).next(()=>s._s.getDocumentsMatchingQuery(o,e,n?i:fe.min(),n?r:we())).next(l=>(p1(s,tR(e),l),{documents:l,Es:r})))}function p1(t,e,n){let s=t.ls.get(e)||fe.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.ls.set(e,s)}class dm{constructor(){this.activeTargetIds=aR()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class m1{constructor(){this._o=new dm,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,s){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new dm,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class g1{uo(e){}shutdown(){}}/**
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
 */class fm{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let fa=null;function jc(){return fa===null?fa=function(){return 268435456+Math.round(2147483648*Math.random())}():fa++,"0x"+fa.toString(16)}/**
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
 */const _1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class y1{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const Rt="WebChannelConnection";class v1 extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Fo=s+"://"+n.host,this.Mo=`projects/${i}/databases/${r}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${r}`}Oo(n,s,i,r,o){const l=jc(),c=this.No(n,s.toUriEncodedString());Z("RestConnection",`Sending RPC '${n}' ${l}:`,c,i);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(u,r,o),this.Lo(n,c,u,i).then(h=>(Z("RestConnection",`Received RPC '${n}' ${l}: `,h),h),h=>{throw Qi("RestConnection",`RPC '${n}' ${l} failed with error: `,h,"url: ",c,"request:",i),h})}ko(n,s,i,r,o,l){return this.Oo(n,s,i,r,o)}Bo(n,s,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+lr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((r,o)=>n[o]=r),i&&i.headers.forEach((r,o)=>n[o]=r)}No(n,s){const i=_1[n];return`${this.Fo}/v1/${s}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,n,s,i){const r=jc();return new Promise((o,l)=>{const c=new xy;c.setWithCredentials(!0),c.listenOnce(Ny.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ia.NO_ERROR:const h=c.getResponseJson();Z(Rt,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(h)),o(h);break;case Ia.TIMEOUT:Z(Rt,`RPC '${e}' ${r} timed out`),l(new ie(j.DEADLINE_EXCEEDED,"Request time out"));break;case Ia.HTTP_ERROR:const f=c.getStatus();if(Z(Rt,`RPC '${e}' ${r} failed with status:`,f,"response text:",c.getResponseText()),f>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const g=m==null?void 0:m.error;if(g&&g.status&&g.message){const A=function(x){const F=x.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(F)>=0?F:j.UNKNOWN}(g.status);l(new ie(A,g.message))}else l(new ie(j.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new ie(j.UNAVAILABLE,"Connection failed."));break;default:de()}}finally{Z(Rt,`RPC '${e}' ${r} completed.`)}});const u=JSON.stringify(i);Z(Rt,`RPC '${e}' ${r} sending request:`,i),c.send(n,"POST",u,s,15)})}qo(e,n,s){const i=jc(),r=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=My(),l=Oy(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Bo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const h=r.join("");Z(Rt,`Creating RPC '${e}' stream ${i}: ${h}`,c);const f=o.createWebChannel(h,c);let m=!1,g=!1;const A=new y1({Eo:x=>{g?Z(Rt,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(m||(Z(Rt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),Z(Rt,`RPC '${e}' stream ${i} sending:`,x),f.send(x))},Ao:()=>f.close()}),R=(x,F,U)=>{x.listen(F,O=>{try{U(O)}catch(M){setTimeout(()=>{throw M},0)}})};return R(f,Ur.EventType.OPEN,()=>{g||(Z(Rt,`RPC '${e}' stream ${i} transport opened.`),A.So())}),R(f,Ur.EventType.CLOSE,()=>{g||(g=!0,Z(Rt,`RPC '${e}' stream ${i} transport closed`),A.Do())}),R(f,Ur.EventType.ERROR,x=>{g||(g=!0,Qi(Rt,`RPC '${e}' stream ${i} transport errored:`,x),A.Do(new ie(j.UNAVAILABLE,"The operation could not be completed")))}),R(f,Ur.EventType.MESSAGE,x=>{var F;if(!g){const U=x.data[0];Ve(!!U);const O=U,M=(O==null?void 0:O.error)||((F=O[0])===null||F===void 0?void 0:F.error);if(M){Z(Rt,`RPC '${e}' stream ${i} received error:`,M);const ee=M.status;let te=function(v){const I=st[v];if(I!==void 0)return ov(I)}(ee),C=M.message;te===void 0&&(te=j.INTERNAL,C="Unknown error status: "+ee+" with message "+M.message),g=!0,A.Do(new ie(te,C)),f.close()}else Z(Rt,`RPC '${e}' stream ${i} received:`,U),A.vo(U)}}),R(l,Dy.STAT_EVENT,x=>{x.stat===Su.PROXY?Z(Rt,`RPC '${e}' stream ${i} detected buffering proxy`):x.stat===Su.NOPROXY&&Z(Rt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.bo()},0),A}}function qc(){return typeof document<"u"?document:null}/**
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
 */function Wl(t){return new CR(t,!0)}/**
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
 */class vv{constructor(e,n,s=1e3,i=1.5,r=6e4){this.li=e,this.timerId=n,this.Qo=s,this.Ko=i,this.$o=r,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),s=Math.max(0,Date.now()-this.Go),i=Math.max(0,n-s);i>0&&Z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class Ev{constructor(e,n,s,i,r,o,l,c){this.li=e,this.Yo=s,this.Zo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new vv(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(ss(n.toString()),ss("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Xo===n&&this.I_(s,i)},s=>{e(()=>{const i=new ie(j.UNKNOWN,"Fetching auth token failed: "+s.message);return this.d_(i)})})}I_(e,n){const s=this.T_(this.Xo);this.stream=this.E_(e,n),this.stream.Ro(()=>{s(()=>this.listener.Ro())}),this.stream.mo(()=>{s(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{s(()=>this.d_(i))}),this.stream.onMessage(i=>{s(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class E1 extends Ev{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}E_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=kR(this.serializer,e),s=function(r){if(!("targetChange"in r))return fe.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?fe.min():o.readTime?Mn(o.readTime):fe.min()}(e);return this.listener.R_(n,s)}V_(e){const n={};n.database=Vu(this.serializer),n.addTarget=function(r,o){let l;const c=o.target;if(l=Nu(c)?{documents:NR(r,c)}:{query:DR(r,c).ct},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=cv(r,o.resumeToken);const u=Ou(r,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(fe.min())>0){l.readTime=Ja(r,o.snapshotVersion.toTimestamp());const u=Ou(r,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const s=MR(this.serializer,e);s&&(n.labels=s),this.c_(n)}m_(e){const n={};n.database=Vu(this.serializer),n.removeTarget=e,this.c_(n)}}class w1 extends Ev{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,n){return this.connection.qo("Write",e,n)}A_(e){return Ve(!!e.streamToken),this.lastStreamToken=e.streamToken,Ve(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=xR(e.writeResults,e.commitTime),s=Mn(e.commitTime);return this.listener.y_(s,n)}w_(){const e={};e.database=Vu(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>PR(this.serializer,s))};this.c_(n)}}/**
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
 */class T1 extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new ie(j.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Oo(e,Mu(n,s),i,r,o)).catch(r=>{throw r.name==="FirebaseError"?(r.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new ie(j.UNKNOWN,r.toString())})}ko(e,n,s,i,r){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.ko(e,Mu(n,s),i,o,l,r)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ie(j.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class b1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(ss(n),this.C_=!1):Z("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class I1{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=r,this.Q_.uo(o=>{s.enqueueAndForget(async()=>{gi(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=me(c);u.k_.add(4),await Do(u),u.K_.set("Unknown"),u.k_.delete(4),await Kl(u)}(this))})}),this.K_=new b1(s,i)}}async function Kl(t){if(gi(t))for(const e of t.q_)await e(!0)}async function Do(t){for(const e of t.q_)await e(!1)}function wv(t,e){const n=me(t);n.L_.has(e.targetId)||(n.L_.set(e.targetId,e),Gh(n)?Kh(n):hr(n).s_()&&Wh(n,e))}function Hh(t,e){const n=me(t),s=hr(n);n.L_.delete(e),s.s_()&&Tv(n,e),n.L_.size===0&&(s.s_()?s.a_():gi(n)&&n.K_.set("Unknown"))}function Wh(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(fe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}hr(t).V_(e)}function Tv(t,e){t.U_.xe(e),hr(t).m_(e)}function Kh(t){t.U_=new TR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.L_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),hr(t).start(),t.K_.F_()}function Gh(t){return gi(t)&&!hr(t).i_()&&t.L_.size>0}function gi(t){return me(t).k_.size===0}function bv(t){t.U_=void 0}async function A1(t){t.K_.set("Online")}async function C1(t){t.L_.forEach((e,n)=>{Wh(t,e)})}async function S1(t,e){bv(t),Gh(t)?(t.K_.O_(e),Kh(t)):t.K_.set("Unknown")}async function R1(t,e,n){if(t.K_.set("Online"),e instanceof lv&&e.state===2&&e.cause)try{await async function(i,r){const o=r.cause;for(const l of r.targetIds)i.L_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.L_.delete(l),i.U_.removeTarget(l))}(t,e)}catch(s){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await el(t,s)}else if(e instanceof Ra?t.U_.$e(e):e instanceof av?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(fe.min()))try{const s=await yv(t.localStore);n.compareTo(s)>=0&&await function(r,o){const l=r.U_.it(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=r.L_.get(u);h&&r.L_.set(u,h.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const h=r.L_.get(c);if(!h)return;r.L_.set(c,h.withResumeToken(bt.EMPTY_BYTE_STRING,h.snapshotVersion)),Tv(r,c);const f=new ws(h.target,c,u,h.sequenceNumber);Wh(r,f)}),r.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(s){Z("RemoteStore","Failed to raise snapshot:",s),await el(t,s)}}async function el(t,e,n){if(!ur(e))throw e;t.k_.add(1),await Do(t),t.K_.set("Offline"),n||(n=()=>yv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await Kl(t)})}function Iv(t,e){return e().catch(n=>el(t,n,e))}async function Gl(t){const e=me(t),n=Ms(e);let s=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;k1(e);)try{const i=await d1(e.localStore,s);if(i===null){e.B_.length===0&&n.a_();break}s=i.batchId,P1(e,i)}catch(i){await el(e,i)}Av(e)&&Cv(e)}function k1(t){return gi(t)&&t.B_.length<10}function P1(t,e){t.B_.push(e);const n=Ms(t);n.s_()&&n.f_&&n.g_(e.mutations)}function Av(t){return gi(t)&&!Ms(t).i_()&&t.B_.length>0}function Cv(t){Ms(t).start()}async function x1(t){Ms(t).w_()}async function N1(t){const e=Ms(t);for(const n of t.B_)e.g_(n.mutations)}async function D1(t,e,n){const s=t.B_.shift(),i=Uh.from(s,e,n);await Iv(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Gl(t)}async function O1(t,e){e&&Ms(t).f_&&await async function(s,i){if(function(o){return vR(o)&&o!==j.ABORTED}(i.code)){const r=s.B_.shift();Ms(s).__(),await Iv(s,()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i)),await Gl(s)}}(t,e),Av(t)&&Cv(t)}async function pm(t,e){const n=me(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const s=gi(n);n.k_.add(3),await Do(n),s&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await Kl(n)}async function M1(t,e){const n=me(t);e?(n.k_.delete(2),await Kl(n)):e||(n.k_.add(2),await Do(n),n.K_.set("Unknown"))}function hr(t){return t.W_||(t.W_=function(n,s,i){const r=me(n);return r.b_(),new E1(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{Ro:A1.bind(null,t),mo:C1.bind(null,t),po:S1.bind(null,t),R_:R1.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),Gh(t)?Kh(t):t.K_.set("Unknown")):(await t.W_.stop(),bv(t))})),t.W_}function Ms(t){return t.G_||(t.G_=function(n,s,i){const r=me(n);return r.b_(),new w1(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:x1.bind(null,t),po:O1.bind(null,t),p_:N1.bind(null,t),y_:D1.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await Gl(t)):(await t.G_.stop(),t.B_.length>0&&(Z("RemoteStore",`Stopping write stream with ${t.B_.length} pending writes`),t.B_=[]))})),t.G_}/**
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
 */class Qh{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Jn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,l=new Qh(e,n,o,i,r);return l.start(s),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yh(t,e){if(ss("AsyncQueue",`${e}: ${t}`),ur(t))return new ie(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ui{static emptySet(e){return new Ui(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||re.comparator(n.key,s.key):(n,s)=>re.comparator(n.key,s.key),this.keyedMap=Br(),this.sortedSet=new ot(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ui)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Ui;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class mm{constructor(){this.z_=new ot(re.comparator)}track(e){const n=e.doc.key,s=this.z_.get(n);s?e.type!==0&&s.type===3?this.z_=this.z_.insert(n,e):e.type===3&&s.type!==1?this.z_=this.z_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.z_=this.z_.remove(n):e.type===1&&s.type===2?this.z_=this.z_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):de():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,s)=>{e.push(s)}),e}}class er{constructor(e,n,s,i,r,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new er(e,n,Ui.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$l(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class L1{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class V1{constructor(){this.queries=gm(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,s){const i=me(n),r=i.queries;i.queries=gm(),r.forEach((o,l)=>{for(const c of l.J_)c.onError(s)})})(this,new ie(j.ABORTED,"Firestore shutting down"))}}function gm(){return new pi(t=>Ky(t),$l)}async function Xh(t,e){const n=me(t);let s=3;const i=e.query;let r=n.queries.get(i);r?!r.Y_()&&e.Z_()&&(s=2):(r=new L1,s=e.Z_()?0:1);try{switch(s){case 0:r.H_=await n.onListen(i,!0);break;case 1:r.H_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Yh(o,`Initialization of query '${ki(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,r),r.J_.push(e),e.ea(n.onlineState),r.H_&&e.ta(r.H_)&&Zh(n)}async function Jh(t,e){const n=me(t),s=e.query;let i=3;const r=n.queries.get(s);if(r){const o=r.J_.indexOf(e);o>=0&&(r.J_.splice(o,1),r.J_.length===0?i=e.Z_()?0:1:!r.Y_()&&e.Z_()&&(i=2))}switch(i){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function F1(t,e){const n=me(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const l of o.J_)l.ta(i)&&(s=!0);o.H_=i}}s&&Zh(n)}function U1(t,e,n){const s=me(t),i=s.queries.get(e);if(i)for(const r of i.J_)r.onError(n);s.queries.delete(e)}function Zh(t){t.X_.forEach(e=>{e.next()})}var Uu,_m;(_m=Uu||(Uu={})).na="default",_m.Cache="cache";class ed{constructor(e,n,s){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=s||{}}ta(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new er(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const s=n!=="Offline";return(!this.options.ua||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=er.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Uu.Cache}}/**
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
 */class Sv{constructor(e){this.key=e}}class Rv{constructor(e){this.key=e}}class B1{constructor(e,n){this.query=e,this.Ea=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=we(),this.mutatedKeys=we(),this.Va=Gy(e),this.ma=new Ui(this.Va)}get fa(){return this.Ea}ga(e,n){const s=n?n.pa:new mm,i=n?n.ma:this.ma;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const m=i.get(h),g=zl(this.query,f)?f:null,A=!!m&&this.mutatedKeys.has(m.key),R=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let x=!1;m&&g?m.data.isEqual(g.data)?A!==R&&(s.track({type:3,doc:g}),x=!0):this.ya(m,g)||(s.track({type:2,doc:g}),x=!0,(c&&this.Va(g,c)>0||u&&this.Va(g,u)<0)&&(l=!0)):!m&&g?(s.track({type:0,doc:g}),x=!0):m&&!g&&(s.track({type:1,doc:m}),x=!0,(c||u)&&(l=!0)),x&&(g?(o=o.add(g),r=R?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{ma:o,pa:s,ss:l,mutatedKeys:r}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,i){const r=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((h,f)=>function(g,A){const R=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return de()}};return R(g)-R(A)}(h.type,f.type)||this.Va(h.doc,f.doc)),this.wa(s),i=i!=null&&i;const l=n&&!i?this.Sa():[],c=this.Ra.size===0&&this.current&&!i?1:0,u=c!==this.Aa;return this.Aa=c,o.length!==0||u?{snapshot:new er(this.query,e.ma,r,o,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),ba:l}:{ba:l}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new mm,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.Ea=this.Ea.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ea=this.Ea.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=we(),this.ma.forEach(s=>{this.Da(s.key)&&(this.Ra=this.Ra.add(s.key))});const n=[];return e.forEach(s=>{this.Ra.has(s)||n.push(new Rv(s))}),this.Ra.forEach(s=>{e.has(s)||n.push(new Sv(s))}),n}va(e){this.Ea=e.Es,this.Ra=we();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return er.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class $1{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class z1{constructor(e){this.key=e,this.Fa=!1}}class j1{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new pi(l=>Ky(l),$l),this.Oa=new Map,this.Na=new Set,this.Ba=new ot(re.comparator),this.La=new Map,this.ka=new zh,this.qa={},this.Qa=new Map,this.Ka=Zi.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function q1(t,e,n=!0){const s=Ov(t);let i;const r=s.xa.get(e);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.Ca()):i=await kv(s,e,n,!0),i}async function H1(t,e){const n=Ov(t);await kv(n,e,!0,!1)}async function kv(t,e,n,s){const i=await f1(t.localStore,On(e)),r=i.targetId,o=t.sharedClientState.addLocalQueryTarget(r,n);let l;return s&&(l=await W1(t,e,r,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&wv(t.remoteStore,i),l}async function W1(t,e,n,s,i){t.Ua=(f,m,g)=>async function(R,x,F,U){let O=x.view.ga(F);O.ss&&(O=await hm(R.localStore,x.query,!1).then(({documents:C})=>x.view.ga(C,O)));const M=U&&U.targetChanges.get(x.targetId),ee=U&&U.targetMismatches.get(x.targetId)!=null,te=x.view.applyChanges(O,R.isPrimaryClient,M,ee);return vm(R,x.targetId,te.ba),te.snapshot}(t,f,m,g);const r=await hm(t.localStore,e,!0),o=new B1(e,r.Es),l=o.ga(r.documents),c=No.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),u=o.applyChanges(l,t.isPrimaryClient,c);vm(t,n,u.ba);const h=new $1(e,n,o);return t.xa.set(e,h),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),u.snapshot}async function K1(t,e,n){const s=me(t),i=s.xa.get(e),r=s.Oa.get(i.targetId);if(r.length>1)return s.Oa.set(i.targetId,r.filter(o=>!$l(o,e))),void s.xa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await Fu(s.localStore,i.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(i.targetId),n&&Hh(s.remoteStore,i.targetId),Bu(s,i.targetId)}).catch(cr)):(Bu(s,i.targetId),await Fu(s.localStore,i.targetId,!0))}async function G1(t,e){const n=me(t),s=n.xa.get(e),i=n.Oa.get(s.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Hh(n.remoteStore,s.targetId))}async function Q1(t,e,n){const s=nk(t);try{const i=await function(o,l){const c=me(o),u=rt.now(),h=l.reduce((g,A)=>g.add(A.key),we());let f,m;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let A=is(),R=we();return c.hs.getEntries(g,h).next(x=>{A=x,A.forEach((F,U)=>{U.isValidDocument()||(R=R.add(F))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,A)).next(x=>{f=x;const F=[];for(const U of l){const O=pR(U,f.get(U.key).overlayedDocument);O!=null&&F.push(new mi(U.key,O,By(O.value.mapValue),Zn.exists(!0)))}return c.mutationQueue.addMutationBatch(g,u,F,l)}).next(x=>{m=x;const F=x.applyToLocalDocumentSet(f,R);return c.documentOverlayCache.saveOverlays(g,x.batchId,F)})}).then(()=>({batchId:m.batchId,changes:Yy(f)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(o,l,c){let u=o.qa[o.currentUser.toKey()];u||(u=new ot(Te)),u=u.insert(l,c),o.qa[o.currentUser.toKey()]=u}(s,i.batchId,n),await Oo(s,i.changes),await Gl(s.remoteStore)}catch(i){const r=Yh(i,"Failed to persist write");n.reject(r)}}async function Pv(t,e){const n=me(t);try{const s=await u1(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.La.get(r);o&&(Ve(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Fa=!0:i.modifiedDocuments.size>0?Ve(o.Fa):i.removedDocuments.size>0&&(Ve(o.Fa),o.Fa=!1))}),await Oo(n,s,e)}catch(s){await cr(s)}}function ym(t,e,n){const s=me(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.xa.forEach((r,o)=>{const l=o.view.ea(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const c=me(o);c.onlineState=l;let u=!1;c.queries.forEach((h,f)=>{for(const m of f.J_)m.ea(l)&&(u=!0)}),u&&Zh(c)}(s.eventManager,e),i.length&&s.Ma.R_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Y1(t,e,n){const s=me(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.La.get(e),r=i&&i.key;if(r){let o=new ot(re.comparator);o=o.insert(r,Nt.newNoDocument(r,fe.min()));const l=we().add(r),c=new Hl(fe.min(),new Map,new ot(Te),o,l);await Pv(s,c),s.Ba=s.Ba.remove(r),s.La.delete(e),td(s)}else await Fu(s.localStore,e,!1).then(()=>Bu(s,e,n)).catch(cr)}async function X1(t,e){const n=me(t),s=e.batch.batchId;try{const i=await c1(n.localStore,e);Nv(n,s,null),xv(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Oo(n,i)}catch(i){await cr(i)}}async function J1(t,e,n){const s=me(t);try{const i=await function(o,l){const c=me(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,l).next(f=>(Ve(f!==null),h=f.keys(),c.mutationQueue.removeMutationBatch(u,f))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(s.localStore,e);Nv(s,e,n),xv(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Oo(s,i)}catch(i){await cr(i)}}function xv(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function Nv(t,e,n){const s=me(t);let i=s.qa[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.qa[s.currentUser.toKey()]=i}}function Bu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Oa.get(e))t.xa.delete(s),n&&t.Ma.Wa(s,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(s=>{t.ka.containsKey(s)||Dv(t,s)})}function Dv(t,e){t.Na.delete(e.path.canonicalString());const n=t.Ba.get(e);n!==null&&(Hh(t.remoteStore,n),t.Ba=t.Ba.remove(e),t.La.delete(n),td(t))}function vm(t,e,n){for(const s of n)s instanceof Sv?(t.ka.addReference(s.key,e),Z1(t,s)):s instanceof Rv?(Z("SyncEngine","Document no longer in limbo: "+s.key),t.ka.removeReference(s.key,e),t.ka.containsKey(s.key)||Dv(t,s.key)):de()}function Z1(t,e){const n=e.key,s=n.path.canonicalString();t.Ba.get(n)||t.Na.has(s)||(Z("SyncEngine","New document in limbo: "+n),t.Na.add(s),td(t))}function td(t){for(;t.Na.size>0&&t.Ba.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new re(Ge.fromString(e)),s=t.Ka.next();t.La.set(s,new z1(n)),t.Ba=t.Ba.insert(n,s),wv(t.remoteStore,new ws(On(Bl(n.path)),s,"TargetPurposeLimboResolution",Ll.oe))}}async function Oo(t,e,n){const s=me(t),i=[],r=[],o=[];s.xa.isEmpty()||(s.xa.forEach((l,c)=>{o.push(s.Ua(c,e,n).then(u=>{var h;if((u||n)&&s.isPrimaryClient){const f=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;s.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){i.push(u);const f=qh.zi(c.targetId,u);r.push(f)}}))}),await Promise.all(o),s.Ma.R_(i),await async function(c,u){const h=me(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>$.forEach(u,m=>$.forEach(m.Wi,g=>h.persistence.referenceDelegate.addReference(f,m.targetId,g)).next(()=>$.forEach(m.Gi,g=>h.persistence.referenceDelegate.removeReference(f,m.targetId,g)))))}catch(f){if(!ur(f))throw f;Z("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const m=f.targetId;if(!f.fromCache){const g=h.us.get(m),A=g.snapshotVersion,R=g.withLastLimboFreeSnapshotVersion(A);h.us=h.us.insert(m,R)}}}(s.localStore,r))}async function ek(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const s=await _v(n.localStore,e);n.currentUser=e,function(r,o){r.Qa.forEach(l=>{l.forEach(c=>{c.reject(new ie(j.CANCELLED,o))})}),r.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Oo(n,s.Ts)}}function tk(t,e){const n=me(t),s=n.La.get(e);if(s&&s.Fa)return we().add(s.key);{let i=we();const r=n.Oa.get(e);if(!r)return i;for(const o of r){const l=n.xa.get(o);i=i.unionWith(l.view.fa)}return i}}function Ov(t){const e=me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Pv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=tk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Y1.bind(null,e),e.Ma.R_=F1.bind(null,e.eventManager),e.Ma.Wa=U1.bind(null,e.eventManager),e}function nk(t){const e=me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=X1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=J1.bind(null,e),e}class tl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Wl(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return l1(this.persistence,new o1,e.initialUser,this.serializer)}ja(e){return new gv(jh.ei,this.serializer)}za(e){return new m1}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}tl.provider={build:()=>new tl};class sk extends tl{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){Ve(this.persistence.referenceDelegate instanceof Za);const s=this.persistence.referenceDelegate.garbageCollector;return new HR(s,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?zt.withCacheSize(this.cacheSizeBytes):zt.DEFAULT;return new gv(s=>Za.ei(s,n),this.serializer)}}class $u{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ym(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=ek.bind(null,this.syncEngine),await M1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new V1}()}createDatastore(e){const n=Wl(e.databaseInfo.databaseId),s=function(r){return new v1(r)}(e.databaseInfo);return function(r,o,l,c){return new T1(r,o,l,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,i,r,o,l){return new I1(s,i,r,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>ym(this.syncEngine,n,0),function(){return fm.p()?new fm:new g1}())}createSyncEngine(e,n){return function(i,r,o,l,c,u,h){const f=new j1(i,r,o,l,c,u);return h&&(f.$a=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const r=me(i);Z("RemoteStore","RemoteStore shutting down."),r.k_.add(5),await Do(r),r.Q_.shutdown(),r.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}$u.provider={build:()=>new $u};/**
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
 */class nd{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):ss("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class ik{constructor(e,n,s,i,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=kt.UNAUTHENTICATED,this.clientId=Vy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(s,async o=>{Z("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(Z("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Jn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Yh(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Hc(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await _v(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Em(t,e){t.asyncQueue.verifyOperationInProgress();const n=await rk(t);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(s=>pm(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>pm(e.remoteStore,i)),t._onlineComponents=e}async function rk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Hc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===j.FAILED_PRECONDITION||i.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Qi("Error using user provided cache. Falling back to memory cache: "+n),await Hc(t,new tl)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await Hc(t,new sk(void 0));return t._offlineComponents}async function Mv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await Em(t,t._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await Em(t,new $u))),t._onlineComponents}function ok(t){return Mv(t).then(e=>e.syncEngine)}async function nl(t){const e=await Mv(t),n=e.eventManager;return n.onListen=q1.bind(null,e.syncEngine),n.onUnlisten=K1.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=H1.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=G1.bind(null,e.syncEngine),n}function ak(t,e,n={}){const s=new Jn;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,l,c,u){const h=new nd({next:m=>{h.eu(),o.enqueueAndForget(()=>Jh(r,f));const g=m.docs.has(l);!g&&m.fromCache?u.reject(new ie(j.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&m.fromCache&&c&&c.source==="server"?u.reject(new ie(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new ed(Bl(l.path),h,{includeMetadataChanges:!0,ua:!0});return Xh(r,f)}(await nl(t),t.asyncQueue,e,n,s)),s.promise}function lk(t,e,n={}){const s=new Jn;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,l,c,u){const h=new nd({next:m=>{h.eu(),o.enqueueAndForget(()=>Jh(r,f)),m.fromCache&&c.source==="server"?u.reject(new ie(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new ed(l,h,{includeMetadataChanges:!0,ua:!0});return Xh(r,f)}(await nl(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */function Lv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const wm=new Map;/**
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
 */function Vv(t,e,n){if(!n)throw new ie(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ck(t,e,n,s){if(e===!0&&s===!0)throw new ie(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Tm(t){if(!re.isDocumentKey(t))throw new ie(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function bm(t){if(re.isDocumentKey(t))throw new ie(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function sd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":de()}function es(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ie(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sd(t);throw new ie(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Im{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ie(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ck("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Lv((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ie(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ie(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ie(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ql{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Im({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Im(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new ES;switch(s.type){case"firstParty":return new IS(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ie(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=wm.get(n);s&&(Z("ComponentProvider","Removing Datastore"),wm.delete(n),s.terminate())}(this),Promise.resolve()}}function uk(t,e,n,s={}){var i;const r=(t=es(t,Ql))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Qi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let l,c;if(typeof s.mockUserToken=="string")l=s.mockUserToken,c=kt.MOCK_USER;else{l=GA(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new ie(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new kt(u)}t._authCredentials=new wS(new Ly(l,c))}}/**
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
 */class Mo{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Mo(this.firestore,e,this._query)}}class Xt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Xt(this.firestore,e,this._key)}}class Rs extends Mo{constructor(e,n,s){super(e,n,Bl(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Xt(this.firestore,null,new re(e))}withConverter(e){return new Rs(this.firestore,e,this._path)}}function Fv(t,e,...n){if(t=Tn(t),Vv("collection","path",e),t instanceof Ql){const s=Ge.fromString(e,...n);return bm(s),new Rs(t,null,s)}{if(!(t instanceof Xt||t instanceof Rs))throw new ie(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ge.fromString(e,...n));return bm(s),new Rs(t.firestore,null,s)}}function hk(t,e,...n){if(t=Tn(t),arguments.length===1&&(e=Vy.newId()),Vv("doc","path",e),t instanceof Ql){const s=Ge.fromString(e,...n);return Tm(s),new Xt(t,null,new re(s))}{if(!(t instanceof Xt||t instanceof Rs))throw new ie(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ge.fromString(e,...n));return Tm(s),new Xt(t.firestore,t instanceof Rs?t.converter:null,new re(s))}}/**
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
 */class Am{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new vv(this,"async_queue_retry"),this.fu=()=>{const s=qc();s&&Z("AsyncQueue","Visibility state changed to "+s.visibilityState),this.r_.Jo()},this.gu=e;const n=qc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const n=qc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const n=new Jn;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!ur(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(s=>{this.Au=s,this.Ru=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(s);throw ss("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Ru=!1,s))));return this.gu=n,n}enqueueAfterDelay(e,n,s){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const i=Qh.createAndSchedule(this,e,n,s,r=>this.Su(r));return this.Eu.push(i),i}pu(){this.Au&&de()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.Eu)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Eu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.Eu.indexOf(e);this.Eu.splice(n,1)}}function Cm(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const i=n;for(const r of s)if(r in i&&typeof i[r]=="function")return!0;return!1}(t,["next","error","complete"])}class tr extends Ql{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new Am,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Am(e),this._firestoreClient=void 0,await e}}}function dk(t,e){const n=typeof t=="object"?t:Sy(),s=typeof t=="string"?t:"(default)",i=lS(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=WA("firestore");r&&uk(i,...r)}return i}function Yl(t){if(t._terminated)throw new ie(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||fk(t),t._firestoreClient}function fk(t){var e,n,s;const i=t._freezeSettings(),r=function(l,c,u,h){return new US(l,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Lv(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new ik(t._authCredentials,t._appCheckCredentials,t._queue,r,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class nr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new nr(bt.fromBase64String(e))}catch(n){throw new ie(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new nr(bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class id{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ie(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new wt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Uv{constructor(e){this._methodName=e}}/**
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
 */class Xl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ie(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ie(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}}/**
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
 */class rd{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,i){if(s.length!==i.length)return!1;for(let r=0;r<s.length;++r)if(s[r]!==i[r])return!1;return!0}(this._values,e._values)}}/**
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
 */const pk=/^__.*__$/;class mk{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new mi(e,this.data,this.fieldMask,n,this.fieldTransforms):new xo(e,this.data,n,this.fieldTransforms)}}function Bv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de()}}class od{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Fu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new od(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.xu({path:s,Nu:!1});return i.Bu(e),i}Lu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.xu({path:s,Nu:!1});return i.Fu(),i}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return sl(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Bv(this.Mu)&&pk.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class gk{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Wl(e)}$u(e,n,s,i=!1){return new od({Mu:e,methodName:n,Ku:s,path:wt.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _k(t){const e=t._freezeSettings(),n=Wl(t._databaseId);return new gk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function yk(t,e,n,s,i,r={}){const o=t.$u(r.merge||r.mergeFields?2:0,e,n,i);qv("Data must be an object, but it was:",o,s);const l=zv(s,o);let c,u;if(r.merge)c=new dn(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const f of r.mergeFields){const m=vk(e,f,n);if(!o.contains(m))throw new ie(j.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);wk(h,m)||h.push(m)}c=new dn(h),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new mk(new rn(l),c,u)}function $v(t,e){if(jv(t=Tn(t)))return qv("Unsupported field value:",e,t),zv(t,e);if(t instanceof Uv)return function(s,i){if(!Bv(i.Mu))throw i.qu(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(s,i){const r=[];let o=0;for(const l of s){let c=$v(l,i.ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}}(t,e)}return function(s,i){if((s=Tn(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return lR(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=rt.fromDate(s);return{timestampValue:Ja(i.serializer,r)}}if(s instanceof rt){const r=new rt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Ja(i.serializer,r)}}if(s instanceof Xl)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof nr)return{bytesValue:cv(i.serializer,s._byteString)};if(s instanceof Xt){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:$h(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof rd)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.qu("VectorValues must only contain numeric values.");return Fh(l.serializer,c)})}}}}}}(s,i);throw i.qu(`Unsupported field value: ${sd(s)}`)}(t,e)}function zv(t,e){const n={};return Fy(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fi(t,(s,i)=>{const r=$v(i,e.Ou(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function jv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof rt||t instanceof Xl||t instanceof nr||t instanceof Xt||t instanceof Uv||t instanceof rd)}function qv(t,e,n){if(!jv(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const s=sd(n);throw s==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+s)}}function vk(t,e,n){if((e=Tn(e))instanceof id)return e._internalPath;if(typeof e=="string")return Hv(t,e);throw sl("Field path arguments must be of type string or ",t,!1,void 0,n)}const Ek=new RegExp("[~\\*/\\[\\]]");function Hv(t,e,n){if(e.search(Ek)>=0)throw sl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new id(...e.split("."))._internalPath}catch{throw sl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function sl(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new ie(j.INVALID_ARGUMENT,l+t+c)}function wk(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Wv{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Tk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Kv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Tk extends Wv{data(){return super.data()}}function Kv(t,e){return typeof e=="string"?Hv(t,e):e instanceof id?e._internalPath:e._delegate._internalPath}/**
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
 */function Gv(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ie(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bk{convertValue(e,n="none"){switch(Os(e)){case 0:return null;case 1:return e.booleanValue;case 2:return et(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ds(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw de()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return fi(e,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertVectorValue(e){var n,s,i;const r=(i=(s=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||s===void 0?void 0:s.values)===null||i===void 0?void 0:i.map(o=>et(o.doubleValue));return new rd(r)}convertGeoPoint(e){return new Xl(et(e.latitude),et(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Fl(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(wo(e));default:return null}}convertTimestamp(e){const n=Ns(e);return new rt(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ge.fromString(e);Ve(mv(s));const i=new To(s.get(1),s.get(3)),r=new re(s.popFirst(5));return i.isEqual(n)||ss(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function Ik(t,e,n){let s;return s=t?t.toFirestore(e):e,s}/**
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
 */class zr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Qv extends Wv{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ka(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Kv("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ka extends Qv{data(e={}){return super.data(e)}}class Yv{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new zr(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new ka(this._firestore,this._userDataWriter,s.key,s,new zr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ie(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const c=new ka(i._firestore,i._userDataWriter,l.doc.key,l.doc,new zr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>r||l.type!==3).map(l=>{const c=new ka(i._firestore,i._userDataWriter,l.doc.key,l.doc,new zr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,h=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),h=o.indexOf(l.doc.key)),{type:Ak(l.type),doc:c,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Ak(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return de()}}/**
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
 */function Xv(t){t=es(t,Xt);const e=es(t.firestore,tr);return ak(Yl(e),t._key).then(n=>Jv(e,t,n))}class ad extends bk{constructor(e){super(),this.firestore=e}convertBytes(e){return new nr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Xt(this.firestore,null,n)}}function Ck(t){t=es(t,Mo);const e=es(t.firestore,tr),n=Yl(e),s=new ad(e);return Gv(t._query),lk(n,t._query).then(i=>new Yv(e,s,t,i))}function Sk(t,e){const n=es(t.firestore,tr),s=hk(t),i=Ik(t.converter,e);return Rk(n,[yk(_k(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,Zn.exists(!1))]).then(()=>s)}function ld(t,...e){var n,s,i;t=Tn(t);let r={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Cm(e[o])||(r=e[o],o++);const l={includeMetadataChanges:r.includeMetadataChanges,source:r.source};if(Cm(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(s=f.error)===null||s===void 0?void 0:s.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let c,u,h;if(t instanceof Xt)u=es(t.firestore,tr),h=Bl(t._key.path),c={next:f=>{e[o]&&e[o](Jv(u,t,f))},error:e[o+1],complete:e[o+2]};else{const f=es(t,Mo);u=es(f.firestore,tr),h=f._query;const m=new ad(u);c={next:g=>{e[o]&&e[o](new Yv(u,m,f,g))},error:e[o+1],complete:e[o+2]},Gv(t._query)}return function(m,g,A,R){const x=new nd(R),F=new ed(g,x,A);return m.asyncQueue.enqueueAndForget(async()=>Xh(await nl(m),F)),()=>{x.eu(),m.asyncQueue.enqueueAndForget(async()=>Jh(await nl(m),F))}}(Yl(u),h,l,c)}function Rk(t,e){return function(s,i){const r=new Jn;return s.asyncQueue.enqueueAndForget(async()=>Q1(await ok(s),i,r)),r.promise}(Yl(t),e)}function Jv(t,e,n){const s=n.docs.get(e._key),i=new ad(t);return new Qv(t,i,e._key,s,new zr(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){lr=i})(ar),Ln(new bn("firestore",(s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),l=new tr(new TS(s.getProvider("auth-internal")),new CS(s.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ie(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new To(u.options.projectId,h)}(o,i),o);return r=Object.assign({useFetchStreams:n},r),l._setSettings(r),l},"PUBLIC").setMultipleInstances(!0)),Yt(zp,"4.7.6",e),Yt(zp,"4.7.6","esm2017")})();function Zv(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function eE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kk=eE,tE=new or("auth","Firebase",eE());/**
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
 */const il=new Po("@firebase/auth");function Pk(t,...e){il.logLevel<=ve.WARN&&il.warn(`Auth (${ar}): ${t}`,...e)}function Pa(t,...e){il.logLevel<=ve.ERROR&&il.error(`Auth (${ar}): ${t}`,...e)}/**
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
 */function Sm(t,...e){throw cd(t,...e)}function nE(t,...e){return cd(t,...e)}function sE(t,e,n){const s=Object.assign(Object.assign({},kk()),{[e]:n});return new or("auth","Firebase",s).create(e,{appName:t.name})}function xa(t){return sE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function cd(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return tE.create(t,...e)}function De(t,e,...n){if(!t)throw cd(e,...n)}function no(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Pa(e),new Error(e)}function rl(t,e){t||no(e)}function xk(){return Rm()==="http:"||Rm()==="https:"}function Rm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Nk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xk()||XA()||"connection"in navigator)?navigator.onLine:!0}function Dk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Lo{constructor(e,n){this.shortDelay=e,this.longDelay=n,rl(n>e,"Short delay should be less than long delay!"),this.isMobile=Ph()||wy()}get(){return Nk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ok(t,e){rl(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class iE{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;no("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;no("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;no("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Mk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Lk=new Lo(3e4,6e4);function rE(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Jl(t,e,n,s,i={}){return oE(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const l=xh(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},r);return YA()||(u.referrerPolicy="no-referrer"),iE.fetch()(aE(t,t.config.apiHost,n,l),u)})}async function oE(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Mk),e);try{const i=new Vk(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw pa(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw pa(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw pa(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw pa(t,"user-disabled",o);const h=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw sE(t,h,u);Sm(t,h)}}catch(i){if(i instanceof as)throw i;Sm(t,"network-request-failed",{message:String(i)})}}function aE(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Ok(t.config,i):`${t.config.apiScheme}://${i}`}class Vk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(nE(this.auth,"network-request-failed")),Lk.get())})}}function pa(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=nE(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function Fk(t,e){return Jl(t,"POST","/v1/accounts:delete",e)}async function lE(t,e){return Jl(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function so(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Uk(t,e=!1){const n=Tn(t),s=await n.getIdToken(e),i=cE(s);De(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:so(Wc(i.auth_time)),issuedAtTime:so(Wc(i.iat)),expirationTime:so(Wc(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Wc(t){return Number(t)*1e3}function cE(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Pa("JWT malformed, contained fewer than 3 sections"),null;try{const i=qa(n);return i?JSON.parse(i):(Pa("Failed to decode base64 JWT payload"),null)}catch(i){return Pa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function km(t){const e=cE(t);return De(e,"internal-error"),De(typeof e.exp<"u","internal-error"),De(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function zu(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof as&&Bk(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Bk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class $k{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ju{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=so(this.lastLoginAt),this.creationTime=so(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ol(t){var e;const n=t.auth,s=await t.getIdToken(),i=await zu(t,lE(n,{idToken:s}));De(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?uE(r.providerUserInfo):[],l=jk(t.providerData,o),c=t.isAnonymous,u=!(t.email&&r.passwordHash)&&!(l!=null&&l.length),h=c?u:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new ju(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function zk(t){const e=Tn(t);await ol(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jk(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function uE(t){return t.map(e=>{var{providerId:n}=e,s=Zv(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function qk(t,e){const n=await oE(t,{},async()=>{const s=xh({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=aE(t,i,"/v1/token",`key=${r}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",iE.fetch()(o,{method:"POST",headers:l,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Hk(t,e){return Jl(t,"POST","/v2/accounts:revokeToken",rE(t,e))}/**
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
 */class Bi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){De(e.idToken,"internal-error"),De(typeof e.idToken<"u","internal-error"),De(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):km(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){De(e.length!==0,"internal-error");const n=km(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(De(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await qk(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Bi;return s&&(De(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(De(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(De(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bi,this.toJSON())}_performRefresh(){return no("not implemented")}}/**
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
 */function gs(t,e){De(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ts{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Zv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $k(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ju(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await zu(this,this.stsTokenManager.getToken(this.auth,e));return De(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Uk(this,e)}reload(){return zk(this)}_assign(e){this!==e&&(De(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ts(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){De(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ol(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Fr(this.auth.app))return Promise.reject(xa(this.auth));const e=await this.getIdToken();return await zu(this,Fk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,l,c,u,h;const f=(s=n.displayName)!==null&&s!==void 0?s:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(l=n.tenantId)!==null&&l!==void 0?l:void 0,x=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,F=(u=n.createdAt)!==null&&u!==void 0?u:void 0,U=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:O,emailVerified:M,isAnonymous:ee,providerData:te,stsTokenManager:C}=n;De(O&&C,e,"internal-error");const y=Bi.fromJSON(this.name,C);De(typeof O=="string",e,"internal-error"),gs(f,e.name),gs(m,e.name),De(typeof M=="boolean",e,"internal-error"),De(typeof ee=="boolean",e,"internal-error"),gs(g,e.name),gs(A,e.name),gs(R,e.name),gs(x,e.name),gs(F,e.name),gs(U,e.name);const v=new Ts({uid:O,auth:e,email:m,emailVerified:M,displayName:f,isAnonymous:ee,photoURL:A,phoneNumber:g,tenantId:R,stsTokenManager:y,createdAt:F,lastLoginAt:U});return te&&Array.isArray(te)&&(v.providerData=te.map(I=>Object.assign({},I))),x&&(v._redirectEventId=x),v}static async _fromIdTokenResponse(e,n,s=!1){const i=new Bi;i.updateFromServerResponse(n);const r=new Ts({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await ol(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];De(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?uE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),l=new Bi;l.updateFromIdToken(s);const c=new Ts({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new ju(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,u),c}}/**
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
 */const Pm=new Map;function ei(t){rl(t instanceof Function,"Expected a class definition");let e=Pm.get(t);return e?(rl(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pm.set(t,e),e)}/**
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
 */class hE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}hE.type="NONE";const xm=hE;/**
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
 */function Kc(t,e,n){return`firebase:${t}:${e}:${n}`}class $i{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Kc(this.userKey,i.apiKey,r),this.fullPersistenceKey=Kc("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ts._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new $i(ei(xm),e,s);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||ei(xm);const o=Kc(s,e.config.apiKey,e.name);let l=null;for(const u of n)try{const h=await u._get(o);if(h){const f=Ts._fromJSON(e,h);u!==r&&(l=f),r=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new $i(r,e,s):(r=c[0],l&&await r._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new $i(r,e,s))}}/**
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
 */function Nm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qk(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wk(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xk(e))return"Blackberry";if(Jk(e))return"Webos";if(Kk(e))return"Safari";if((e.includes("chrome/")||Gk(e))&&!e.includes("edge/"))return"Chrome";if(Yk(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Wk(t=wn()){return/firefox\//i.test(t)}function Kk(t=wn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gk(t=wn()){return/crios\//i.test(t)}function Qk(t=wn()){return/iemobile/i.test(t)}function Yk(t=wn()){return/android/i.test(t)}function Xk(t=wn()){return/blackberry/i.test(t)}function Jk(t=wn()){return/webos/i.test(t)}/**
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
 */function dE(t,e=[]){let n;switch(t){case"Browser":n=Nm(wn());break;case"Worker":n=`${Nm(wn())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ar}/${s}`}/**
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
 */class Zk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,l)=>{try{const c=e(r);o(c)}catch(c){l(c)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function eP(t,e={}){return Jl(t,"GET","/v2/passwordPolicy",rE(t,e))}/**
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
 */const tP=6;class nP{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:tP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class sP{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dm(this),this.idTokenSubscription=new Dm(this),this.beforeStateQueue=new Zk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ei(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await $i.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await lE(this,{idToken:e}),s=await Ts._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Fr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return De(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ol(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Dk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Fr(this.app))return Promise.reject(xa(this));const n=e?Tn(e):null;return n&&De(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&De(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Fr(this.app)?Promise.reject(xa(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Fr(this.app)?Promise.reject(xa(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ei(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await eP(this),n=new nP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new or("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Hk(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ei(e)||this._popupRedirectResolver;De(n,this,"argument-error"),this.redirectPersistenceManager=await $i.create(this,[ei(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(De(l,this,"internal-error"),l.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return De(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Pk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function iP(t){return Tn(t)}class Dm{constructor(e){this.auth=e,this.observer=null,this.addObserver=aC(n=>this.observer=n)}get next(){return De(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function rP(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ei);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}new Lo(3e4,6e4);/**
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
 */new Lo(2e3,1e4);/**
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
 */new Lo(3e4,6e4);/**
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
 */new Lo(5e3,15e3);var Om="@firebase/auth",Mm="1.8.2";/**
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
 */class oP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){De(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function aP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function lP(t){Ln(new bn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=s.options;De(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dE(t)},u=new sP(s,i,r,c);return rP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ln(new bn("auth-internal",e=>{const n=iP(e.getProvider("auth").getImmediate());return(s=>new oP(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yt(Om,Mm,aP(t)),Yt(Om,Mm,"esm2017")}/**
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
 */const cP=5*60;KA("authIdTokenMaxAge");lP("Browser");/**
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
 */const uP=new Map,hP={activated:!1,tokenObservers:[]};function In(t){return uP.get(t)||Object.assign({},hP)}const Lm={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class dP{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new yo,this.pending.promise.catch(n=>{}),await fP(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new yo,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function fP(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const pP={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},al=new or("appCheck","AppCheck",pP);function fE(t){if(!In(t).activated)throw al.create("use-before-activation",{appName:t.name})}/**
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
 */const mP="firebase-app-check-database",gP=1,qu="firebase-app-check-store";let ma=null;function _P(){return ma||(ma=new Promise((t,e)=>{try{const n=indexedDB.open(mP,gP);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(al.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(qu,{keyPath:"compositeKey"})}}}catch(n){e(al.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),ma)}function yP(t,e){return vP(EP(t),e)}async function vP(t,e){const s=(await _P()).transaction(qu,"readwrite"),r=s.objectStore(qu).put({compositeKey:t,value:e});return new Promise((o,l)=>{r.onsuccess=c=>{o()},s.onerror=c=>{var u;l(al.create("storage-set",{originalErrorMessage:(u=c.target.error)===null||u===void 0?void 0:u.message}))}})}function EP(t){return`${t.options.appId}-${t.name}`}/**
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
 */const Hu=new Po("@firebase/app-check");function Vm(t,e){return Ty()?yP(t,e).catch(n=>{Hu.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const wP={error:"UNKNOWN_ERROR"};function TP(t){return Dl.encodeString(JSON.stringify(t),!1)}async function Wu(t,e=!1){const n=t.app;fE(n);const s=In(n);let i=s.token,r;if(i&&!jr(i)&&(s.token=void 0,i=void 0),!i){const c=await s.cachedTokenPromise;c&&(jr(c)?i=c:await Vm(n,void 0))}if(!e&&i&&jr(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await In(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?Hu.warn(c.message):Hu.error(c),r=c}let l;return i?r?jr(i)?l={token:i.token,internalError:r}:l=Um(r):(l={token:i.token},s.token=i,await Vm(n,i)):l=Um(r),o&&CP(n,l),l}async function bP(t){const e=t.app;fE(e);const{provider:n}=In(e);{const{token:s}=await n.getToken();return{token:s}}}function IP(t,e,n,s){const{app:i}=t,r=In(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&jr(r.token)){const l=r.token;Promise.resolve().then(()=>{n({token:l.token}),Fm(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>Fm(t))}function pE(t,e){const n=In(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function Fm(t){const{app:e}=t,n=In(e);let s=n.tokenRefresher;s||(s=AP(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function AP(t){const{app:e}=t;return new dP(async()=>{const n=In(e);let s;if(n.token?s=await Wu(t,!0):s=await Wu(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=In(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},Lm.RETRIAL_MIN_WAIT,Lm.RETRIAL_MAX_WAIT)}function CP(t,e){const n=In(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function jr(t){return t.expireTimeMillis-Date.now()>0}function Um(t){return{token:TP(wP),error:t}}/**
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
 */class SP{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=In(this.app);for(const n of e)pE(this.app,n.next);return Promise.resolve()}}function RP(t,e){return new SP(t,e)}function kP(t){return{getToken:e=>Wu(t,e),getLimitedUseToken:()=>bP(t),addTokenListener:e=>IP(t,"INTERNAL",e),removeTokenListener:e=>pE(t.app,e)}}const PP="@firebase/app-check",xP="0.8.11",NP="app-check",Bm="app-check-internal";function DP(){Ln(new bn(NP,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return RP(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Bm).initialize()})),Ln(new bn(Bm,t=>{const e=t.getProvider("app-check").getImmediate();return kP(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Yt(PP,xP)}DP();var OP="firebase",MP="11.2.0";/**
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
 */Yt(OP,MP,"app");const mE=Symbol("firebaseApp");function gE(t){return Sh()&&gn(mE,null)||Sy(t)}const Pn=()=>{};function ud(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function LP(t,e,n){const s=(""+e).split("."),i=s.pop(),r=s.reduce((o,l)=>o&&o[l],t);if(r!=null)return Array.isArray(r)?r.splice(Number(i),1,n):r[i]=n}function _i(t){return!!t&&typeof t=="object"}const VP=Object.prototype;function FP(t){return _i(t)&&Object.getPrototypeOf(t)===VP}function hd(t){return _i(t)&&t.type==="document"}function UP(t){return _i(t)&&t.type==="collection"}function BP(t){return hd(t)||UP(t)}function $P(t){return _i(t)&&t.type==="query"}function zP(t){return _i(t)&&"ref"in t}function jP(t){return _i(t)&&typeof t.bucket=="string"}function qP(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const HP=Symbol.for("v-scx");function WP(){return!!gn(HP,0)}var $m={};const zm="@firebase/database",jm="1.0.11";/**
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
 */let _E="";function KP(t){_E=t}/**
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
 */class GP{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Et(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:vo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class QP{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ls(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const yE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new GP(e)}}catch{}return new QP},ti=yE("localStorage"),YP=yE("sessionStorage");/**
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
 */const zi=new Po("@firebase/database"),XP=function(){let t=1;return function(){return t++}}(),vE=function(t){const e=hC(t),n=new oC;n.update(e);const s=n.digest();return Dl.encodeByteArray(s)},Vo=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Vo.apply(null,s):typeof s=="object"?e+=Et(s):e+=s,e+=" "}return e};let io=null,qm=!0;const JP=function(t,e){Q(!0,"Can't turn on custom loggers persistently."),zi.logLevel=ve.VERBOSE,io=zi.log.bind(zi)},Dt=function(...t){if(qm===!0&&(qm=!1,io===null&&YP.get("logging_enabled")===!0&&JP()),io){const e=Vo.apply(null,t);io(e)}},Fo=function(t){return function(...e){Dt(t,...e)}},Ku=function(...t){const e="FIREBASE INTERNAL ERROR: "+Vo(...t);zi.error(e)},oi=function(...t){const e=`FIREBASE FATAL ERROR: ${Vo(...t)}`;throw zi.error(e),new Error(e)},Jt=function(...t){const e="FIREBASE WARNING: "+Vo(...t);zi.warn(e)},ZP=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Jt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},EE=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},ex=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},sr="[MIN_NAME]",ai="[MAX_NAME]",dr=function(t,e){if(t===e)return 0;if(t===sr||e===ai)return-1;if(e===sr||t===ai)return 1;{const n=Hm(t),s=Hm(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},tx=function(t,e){return t===e?0:t<e?-1:1},Nr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Et(e))},dd=function(t){if(typeof t!="object"||t===null)return Et(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Et(e[s]),n+=":",n+=dd(t[e[s]]);return n+="}",n},wE=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function cn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const TE=function(t){Q(!EE(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const u=[];for(c=n;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(i?1:0),u.reverse();const h=u.join("");let f="";for(c=0;c<64;c+=8){let m=parseInt(h.substr(c,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},nx=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},sx=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},ix=new RegExp("^-?(0*)\\d{1,10}$"),rx=-2147483648,ox=2147483647,Hm=function(t){if(ix.test(t)){const e=Number(t);if(e>=rx&&e<=ox)return e}return null},Uo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Jt("Exception was thrown by user callback.",n),e},Math.floor(0))}},ax=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ro=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class lx{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Jt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class cx{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Dt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Jt(e)}}/**
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
 */const fd="5",bE="v",IE="s",AE="r",CE="f",SE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,RE="ls",kE="p",Gu="ac",PE="websocket",xE="long_polling";/**
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
 */class ux{constructor(e,n,s,i,r=!1,o="",l=!1,c=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ti.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ti.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function hx(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function NE(t,e,n){Q(typeof e=="string","typeof type must == string"),Q(typeof n=="object","typeof params must == object");let s;if(e===PE)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===xE)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);hx(t)&&(n.ns=t.namespace);const i=[];return cn(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class dx{constructor(){this.counters_={}}incrementCounter(e,n=1){ls(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return UA(this.counters_)}}/**
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
 */const Gc={},Qc={};function pd(t){const e=t.toString();return Gc[e]||(Gc[e]=new dx),Gc[e]}function fx(t,e){const n=t.toString();return Qc[n]||(Qc[n]=e()),Qc[n]}/**
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
 */class px{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Uo(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Wm="start",mx="close",gx="pLPCommand",_x="pRTLPCB",DE="id",OE="pw",ME="ser",yx="cb",vx="seg",Ex="ts",wx="d",Tx="dframe",LE=1870,VE=30,bx=LE-VE,Ix=25e3,Ax=3e4;class Ni{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Fo(e),this.stats_=pd(n),this.urlFn=c=>(this.appCheckToken&&(c[Gu]=this.appCheckToken),NE(n,xE,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new px(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Ax)),ex(()=>{if(this.isClosed_)return;this.scriptTagHolder=new md((...r)=>{const[o,l,c,u,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Wm)this.id=l,this.password=c;else if(o===mx)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Wm]="t",s[ME]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[yx]=this.scriptTagHolder.uniqueCallbackIdentifier),s[bE]=fd,this.transportSessionId&&(s[IE]=this.transportSessionId),this.lastSessionId&&(s[RE]=this.lastSessionId),this.applicationId&&(s[kE]=this.applicationId),this.appCheckToken&&(s[Gu]=this.appCheckToken),typeof location<"u"&&location.hostname&&SE.test(location.hostname)&&(s[AE]=CE);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ni.forceAllow_=!0}static forceDisallow(){Ni.forceDisallow_=!0}static isAvailable(){return Ni.forceAllow_?!0:!Ni.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!nx()&&!sx()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Et(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=yy(n),i=wE(s,bx);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Tx]="t",s[DE]=e,s[OE]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Et(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class md{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=XP(),window[gx+this.uniqueCallbackIdentifier]=e,window[_x+this.uniqueCallbackIdentifier]=n,this.myIFrame=md.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Dt("frame writing exception"),l.stack&&Dt(l.stack),Dt(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Dt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[DE]=this.myID,e[OE]=this.myPW,e[ME]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+VE+s.length<=LE;){const o=this.pendingSegs.shift();s=s+"&"+vx+i+"="+o.seg+"&"+Ex+i+"="+o.ts+"&"+wx+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Ix)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Dt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Cx=16384,Sx=45e3;let ll=null;typeof MozWebSocket<"u"?ll=MozWebSocket:typeof WebSocket<"u"&&(ll=WebSocket);class xn{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Fo(this.connId),this.stats_=pd(n),this.connURL=xn.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[bE]=fd,typeof location<"u"&&location.hostname&&SE.test(location.hostname)&&(o[AE]=CE),n&&(o[IE]=n),s&&(o[RE]=s),i&&(o[Gu]=i),r&&(o[kE]=r),NE(e,PE,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ti.set("previous_websocket_failure",!0);try{let s;JA(),this.mySock=new ll(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){xn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ll!==null&&!xn.forceDisallow_}static previouslyFailed(){return ti.isInMemoryStorage||ti.get("previous_websocket_failure")===!0}markConnectionHealthy(){ti.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=vo(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Q(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Et(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=wE(n,Cx);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Sx))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}xn.responsesRequiredToBeHealthy=2;xn.healthyTimeout=3e4;/**
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
 */class Co{static get ALL_TRANSPORTS(){return[Ni,xn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=xn.isAvailable();let s=n&&!xn.previouslyFailed();if(e.webSocketOnly&&(n||Jt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[xn];else{const i=this.transports_=[];for(const r of Co.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Co.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Co.globalTransportInitialized_=!1;/**
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
 */const Rx=6e4,kx=5e3,Px=10*1024,xx=100*1024,Yc="t",Km="d",Nx="s",Gm="r",Dx="e",Qm="o",Ym="a",Xm="n",Jm="p",Ox="h";class Mx{constructor(e,n,s,i,r,o,l,c,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Fo("c:"+this.id+":"),this.transportManager_=new Co(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ro(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>xx?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Px?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Yc in e){const n=e[Yc];n===Ym?this.upgradeIfSecondaryHealthy_():n===Gm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Qm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Nr("t",e),s=Nr("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Jm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ym,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Xm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Nr("t",e),s=Nr("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Nr(Yc,e);if(Km in e){const s=e[Km];if(n===Ox){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Xm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Nx?this.onConnectionShutdown_(s):n===Gm?this.onReset_(s):n===Dx?Ku("Server Error: "+s):n===Qm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ku("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),fd!==s&&Jt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ro(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Rx))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ro(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(kx))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Jm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ti.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class FE{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class UE{constructor(e){this.allowedEvents_=e,this.listeners_={},Q(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){Q(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class cl extends UE{static getInstance(){return new cl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ph()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return Q(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Zm=32,eg=768;class Ke{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ue(){return new Ke("")}function Se(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ls(t){return t.pieces_.length-t.pieceNum_}function He(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ke(t.pieces_,e)}function BE(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Lx(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function $E(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function zE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ke(e,0)}function pt(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Ke)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Ke(n,0)}function be(t){return t.pieceNum_>=t.pieces_.length}function on(t,e){const n=Se(t),s=Se(e);if(n===null)return e;if(n===s)return on(He(t),He(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function jE(t,e){if(Ls(t)!==Ls(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function fn(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Ls(t)>Ls(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Vx{constructor(e,n){this.errorPrefix_=n,this.parts_=$E(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ml(this.parts_[s]);qE(this)}}function Fx(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ml(e),qE(t)}function Ux(t){const e=t.parts_.pop();t.byteLength_-=Ml(e),t.parts_.length>0&&(t.byteLength_-=1)}function qE(t){if(t.byteLength_>eg)throw new Error(t.errorPrefix_+"has a key path longer than "+eg+" bytes ("+t.byteLength_+").");if(t.parts_.length>Zm)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Zm+") or object contains a cycle "+Xs(t))}function Xs(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class gd extends UE{static getInstance(){return new gd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return Q(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Dr=1e3,Bx=60*5*1e3,tg=30*1e3,$x=1.3,zx=3e4,jx="server_kill",ng=3;class ts extends FE{constructor(e,n,s,i,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=ts.nextPersistentConnectionId_++,this.log_=Fo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Dr,this.maxReconnectDelay_=Bx,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");gd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&cl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Et(r)),Q(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new yo,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),Q(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Q(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,u=l.s;ts.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ls(e,"w")){const s=Gi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Jt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||rC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=tg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=iC(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),Q(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Et(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ku("Unrecognized action received from server: "+Et(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Q(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Dr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Dr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>zx&&(this.reconnectDelay_=Dr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*$x)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ts.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},u=function(f){Q(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(f)};this.realtime_={close:c,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Dt("getToken() completed but was canceled"):(Dt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,l=new Mx(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{Jt(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(jx)},r))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Jt(f),c())}}}interrupt(e){Dt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Dt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],xp(this.interruptReasons_)&&(this.reconnectDelay_=Dr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>dd(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Ke(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Dt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ng&&(this.reconnectDelay_=tg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Dt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ng&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+_E.replace(/\./g,"-")]=1,Ph()?e["framework.cordova"]=1:wy()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=cl.getInstance().currentlyOnline();return xp(this.interruptReasons_)&&e}}ts.nextPersistentConnectionId_=0;ts.nextConnectionId_=0;/**
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
 */class Zl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ke(sr,e),i=new ke(sr,n);return this.compare(s,i)!==0}minPost(){return ke.MIN}}/**
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
 */let ga;class HE extends Zl{static get __EMPTY_NODE(){return ga}static set __EMPTY_NODE(e){ga=e}compare(e,n){return dr(e.name,n.name)}isDefinedOn(e){throw rr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ke.MIN}maxPost(){return new ke(ai,ga)}makePost(e,n){return Q(typeof e=="string","KeyIndex indexValue must always be a string."),new ke(e,ga)}toString(){return".key"}}const ji=new HE;/**
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
 */class _a{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ft{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ft.RED,this.left=i??Ht.EMPTY_NODE,this.right=r??Ht.EMPTY_NODE}copy(e,n,s,i,r){return new ft(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ht.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ht.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ft.RED=!0;ft.BLACK=!1;class qx{copy(e,n,s,i,r){return this}insert(e,n,s){return new ft(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ht{constructor(e,n=Ht.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ht(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ft.BLACK,null,null))}remove(e){return new Ht(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ft.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new _a(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new _a(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new _a(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new _a(this.root_,null,this.comparator_,!0,e)}}Ht.EMPTY_NODE=new qx;/**
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
 */function Hx(t,e){return dr(t.name,e.name)}function _d(t,e){return dr(t,e)}/**
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
 */let Qu;function Wx(t){Qu=t}const WE=function(t){return typeof t=="number"?"number:"+TE(t):"string:"+t},KE=function(t){if(t.isLeafNode()){const e=t.val();Q(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ls(e,".sv"),"Priority must be a string or number.")}else Q(t===Qu||t.isEmpty(),"priority of unexpected type.");Q(t===Qu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let sg;class ht{static set __childrenNodeConstructor(e){sg=e}static get __childrenNodeConstructor(){return sg}constructor(e,n=ht.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,Q(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),KE(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ht(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ht.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return be(e)?this:Se(e)===".priority"?this.priorityNode_:ht.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ht.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Se(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(Q(s!==".priority"||Ls(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ht.__childrenNodeConstructor.EMPTY_NODE.updateChild(He(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+WE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=TE(this.value_):e+=this.value_,this.lazyHash_=vE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ht.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ht.__childrenNodeConstructor?-1:(Q(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ht.VALUE_TYPE_ORDER.indexOf(n),r=ht.VALUE_TYPE_ORDER.indexOf(s);return Q(i>=0,"Unknown leaf type: "+n),Q(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ht.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let GE,QE;function Kx(t){GE=t}function Gx(t){QE=t}class Qx extends Zl{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?dr(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ke.MIN}maxPost(){return new ke(ai,new ht("[PRIORITY-POST]",QE))}makePost(e,n){const s=GE(e);return new ke(n,new ht("[PRIORITY-POST]",s))}toString(){return".priority"}}const Mt=new Qx;/**
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
 */const Yx=Math.log(2);class Xx{constructor(e){const n=r=>parseInt(Math.log(r)/Yx,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ul=function(t,e,n,s){t.sort(e);const i=function(c,u){const h=u-c;let f,m;if(h===0)return null;if(h===1)return f=t[c],m=n?n(f):f,new ft(m,f.node,ft.BLACK,null,null);{const g=parseInt(h/2,10)+c,A=i(c,g),R=i(g+1,u);return f=t[g],m=n?n(f):f,new ft(m,f.node,ft.BLACK,A,R)}},r=function(c){let u=null,h=null,f=t.length;const m=function(A,R){const x=f-A,F=f;f-=A;const U=i(x+1,F),O=t[x],M=n?n(O):O;g(new ft(M,O.node,R,null,U))},g=function(A){u?(u.left=A,u=A):(h=A,u=A)};for(let A=0;A<c.count;++A){const R=c.nextBitIsOne(),x=Math.pow(2,c.count-(A+1));R?m(x,ft.BLACK):(m(x,ft.BLACK),m(x,ft.RED))}return h},o=new Xx(t.length),l=r(o);return new Ht(s||e,l)};/**
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
 */let Xc;const Or={};class Xn{static get Default(){return Q(Mt,"ChildrenNode.ts has not been loaded"),Xc=Xc||new Xn({".priority":Or},{".priority":Mt}),Xc}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Gi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ht?n:null}hasIndex(e){return ls(this.indexSet_,e.toString())}addIndex(e,n){Q(e!==ji,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(ke.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=ul(s,e.getCompare()):l=Or;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const h=Object.assign({},this.indexes_);return h[c]=l,new Xn(h,u)}addToIndexes(e,n){const s=Ha(this.indexes_,(i,r)=>{const o=Gi(this.indexSet_,r);if(Q(o,"Missing index implementation for "+r),i===Or)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(ke.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&l.push(u),u=c.getNext();return l.push(e),ul(l,o.getCompare())}else return Or;else{const l=n.get(e.name);let c=i;return l&&(c=c.remove(new ke(e.name,l))),c.insert(e,e.node)}});return new Xn(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ha(this.indexes_,i=>{if(i===Or)return i;{const r=n.get(e.name);return r?i.remove(new ke(e.name,r)):i}});return new Xn(s,this.indexSet_)}}/**
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
 */let Mr;class Le{static get EMPTY_NODE(){return Mr||(Mr=new Le(new Ht(_d),null,Xn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&KE(this.priorityNode_),this.children_.isEmpty()&&Q(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Mr}updatePriority(e){return this.children_.isEmpty()?this:new Le(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Mr:n}}getChild(e){const n=Se(e);return n===null?this:this.getImmediateChild(n).getChild(He(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(Q(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ke(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Mr:this.priorityNode_;return new Le(i,o,r)}}updateChild(e,n){const s=Se(e);if(s===null)return n;{Q(Se(e)!==".priority"||Ls(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(He(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Mt,(o,l)=>{n[o]=l.val(e),s++,r&&Le.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+WE(this.getPriority().val())+":"),this.forEachChild(Mt,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":vE(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ke(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ke(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ke(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ke.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ke.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Bo?-1:0}withIndex(e){if(e===ji||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Le(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ji||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Mt),i=n.getIterator(Mt);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ji?null:this.indexMap_.get(e.toString())}}Le.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Jx extends Le{constructor(){super(new Ht(_d),Le.EMPTY_NODE,Xn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Le.EMPTY_NODE}isEmpty(){return!1}}const Bo=new Jx;Object.defineProperties(ke,{MIN:{value:new ke(sr,Le.EMPTY_NODE)},MAX:{value:new ke(ai,Bo)}});HE.__EMPTY_NODE=Le.EMPTY_NODE;ht.__childrenNodeConstructor=Le;Wx(Bo);Gx(Bo);/**
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
 */const Zx=!0;function Ot(t,e=null){if(t===null)return Le.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),Q(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ht(n,Ot(e))}if(!(t instanceof Array)&&Zx){const n=[];let s=!1;if(cn(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=Ot(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new ke(o,c)))}}),n.length===0)return Le.EMPTY_NODE;const r=ul(n,Hx,o=>o.name,_d);if(s){const o=ul(n,Mt.getCompare());return new Le(r,Ot(e),new Xn({".priority":o},{".priority":Mt}))}else return new Le(r,Ot(e),Xn.Default)}else{let n=Le.EMPTY_NODE;return cn(t,(s,i)=>{if(ls(t,s)&&s.substring(0,1)!=="."){const r=Ot(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ot(e))}}Kx(Ot);/**
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
 */class eN extends Zl{constructor(e){super(),this.indexPath_=e,Q(!be(e)&&Se(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?dr(e.name,n.name):r}makePost(e,n){const s=Ot(e),i=Le.EMPTY_NODE.updateChild(this.indexPath_,s);return new ke(n,i)}maxPost(){const e=Le.EMPTY_NODE.updateChild(this.indexPath_,Bo);return new ke(ai,e)}toString(){return $E(this.indexPath_,0).join("/")}}/**
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
 */class tN extends Zl{compare(e,n){const s=e.node.compareTo(n.node);return s===0?dr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ke.MIN}maxPost(){return ke.MAX}makePost(e,n){const s=Ot(e);return new ke(n,s)}toString(){return".value"}}const nN=new tN;/**
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
 */function sN(t){return{type:"value",snapshotNode:t}}function iN(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function rN(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ig(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function oN(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class yd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Mt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return Q(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Q(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:sr}hasEnd(){return this.endSet_}getIndexEndValue(){return Q(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Q(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ai}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return Q(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Mt}copy(){const e=new yd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function rg(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Mt?n="$priority":t.index_===nN?n="$value":t.index_===ji?n="$key":(Q(t.index_ instanceof eN,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Et(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Et(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Et(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Et(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Et(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function og(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Mt&&(e.i=t.index_.toString()),e}/**
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
 */class hl extends FE{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(Q(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Fo("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=hl.getListenId_(e,s),l={};this.listens_[o]=l;const c=rg(e._queryParams);this.restRequest_(r+".json",c,(u,h)=>{let f=h;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(r,f,!1,s),Gi(this.listens_,o)===l){let m;u?u===401?m="permission_denied":m="rest_error:"+u:m="ok",i(m,null)}})}unlisten(e,n){const s=hl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=rg(e._queryParams),s=e._path.toString(),i=new yo;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+xh(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=vo(l.responseText)}catch{Jt("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&Jt("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class aN{constructor(){this.rootNode_=Le.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function dl(){return{value:null,children:new Map}}function YE(t,e,n){if(be(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=Se(e);t.children.has(s)||t.children.set(s,dl());const i=t.children.get(s);e=He(e),YE(i,e,n)}}function Yu(t,e,n){t.value!==null?n(e,t.value):lN(t,(s,i)=>{const r=new Ke(e.toString()+"/"+s);Yu(i,r,n)})}function lN(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class cN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&cn(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const ag=10*1e3,uN=30*1e3,hN=5*60*1e3;class dN{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new cN(e);const s=ag+(uN-ag)*Math.random();ro(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;cn(e,(i,r)=>{r>0&&ls(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),ro(this.reportStats_.bind(this),Math.floor(Math.random()*2*hN))}}/**
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
 */var Nn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Nn||(Nn={}));function XE(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function JE(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ZE(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class fl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Nn.ACK_USER_WRITE,this.source=XE()}operationForChild(e){if(be(this.path)){if(this.affectedTree.value!=null)return Q(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ke(e));return new fl(Ue(),n,this.revert)}}else return Q(Se(this.path)===e,"operationForChild called for unrelated child."),new fl(He(this.path),this.affectedTree,this.revert)}}/**
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
 */class li{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Nn.OVERWRITE}operationForChild(e){return be(this.path)?new li(this.source,Ue(),this.snap.getImmediateChild(e)):new li(this.source,He(this.path),this.snap)}}/**
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
 */class So{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Nn.MERGE}operationForChild(e){if(be(this.path)){const n=this.children.subtree(new Ke(e));return n.isEmpty()?null:n.value?new li(this.source,Ue(),n.value):new So(this.source,Ue(),n)}else return Q(Se(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new So(this.source,He(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class vd{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(be(e))return this.isFullyInitialized()&&!this.filtered_;const n=Se(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function fN(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(oN(o.childName,o.snapshotNode))}),Lr(t,i,"child_removed",e,s,n),Lr(t,i,"child_added",e,s,n),Lr(t,i,"child_moved",r,s,n),Lr(t,i,"child_changed",e,s,n),Lr(t,i,"value",e,s,n),i}function Lr(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,c)=>mN(t,l,c)),o.forEach(l=>{const c=pN(t,l,r);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(c,t.query_))})})}function pN(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function mN(t,e,n){if(e.childName==null||n.childName==null)throw rr("Should only compare child_ events.");const s=new ke(e.childName,e.snapshotNode),i=new ke(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function ew(t,e){return{eventCache:t,serverCache:e}}function oo(t,e,n,s){return ew(new vd(e,n,s),t.serverCache)}function tw(t,e,n,s){return ew(t.eventCache,new vd(e,n,s))}function Xu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ci(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Jc;const gN=()=>(Jc||(Jc=new Ht(tx)),Jc);class qe{static fromObject(e){let n=new qe(null);return cn(e,(s,i)=>{n=n.set(new Ke(s),i)}),n}constructor(e,n=gN()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ue(),value:this.value};if(be(e))return null;{const s=Se(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(He(e),n);return r!=null?{path:pt(new Ke(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(be(e))return this;{const n=Se(e),s=this.children.get(n);return s!==null?s.subtree(He(e)):new qe(null)}}set(e,n){if(be(e))return new qe(n,this.children);{const s=Se(e),r=(this.children.get(s)||new qe(null)).set(He(e),n),o=this.children.insert(s,r);return new qe(this.value,o)}}remove(e){if(be(e))return this.children.isEmpty()?new qe(null):new qe(null,this.children);{const n=Se(e),s=this.children.get(n);if(s){const i=s.remove(He(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new qe(null):new qe(this.value,r)}else return this}}get(e){if(be(e))return this.value;{const n=Se(e),s=this.children.get(n);return s?s.get(He(e)):null}}setTree(e,n){if(be(e))return n;{const s=Se(e),r=(this.children.get(s)||new qe(null)).setTree(He(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new qe(this.value,o)}}fold(e){return this.fold_(Ue(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(pt(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Ue(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(be(e))return null;{const r=Se(e),o=this.children.get(r);return o?o.findOnPath_(He(e),pt(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ue(),n)}foreachOnPath_(e,n,s){if(be(e))return this;{this.value&&s(n,this.value);const i=Se(e),r=this.children.get(i);return r?r.foreachOnPath_(He(e),pt(n,i),s):new qe(null)}}foreach(e){this.foreach_(Ue(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(pt(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class _n{constructor(e){this.writeTree_=e}static empty(){return new _n(new qe(null))}}function ao(t,e,n){if(be(e))return new _n(new qe(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=on(i,e);return r=r.updateChild(o,n),new _n(t.writeTree_.set(i,r))}else{const i=new qe(n),r=t.writeTree_.setTree(e,i);return new _n(r)}}}function lg(t,e,n){let s=t;return cn(n,(i,r)=>{s=ao(s,pt(e,i),r)}),s}function cg(t,e){if(be(e))return _n.empty();{const n=t.writeTree_.setTree(e,new qe(null));return new _n(n)}}function Ju(t,e){return yi(t,e)!=null}function yi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(on(n.path,e)):null}function ug(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Mt,(s,i)=>{e.push(new ke(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ke(s,i.value))}),e}function ks(t,e){if(be(e))return t;{const n=yi(t,e);return n!=null?new _n(new qe(n)):new _n(t.writeTree_.subtree(e))}}function Zu(t){return t.writeTree_.isEmpty()}function ir(t,e){return nw(Ue(),t.writeTree_,e)}function nw(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(Q(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=nw(pt(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(pt(t,".priority"),s)),n}}/**
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
 */function sw(t,e){return lw(e,t)}function _N(t,e,n,s,i){Q(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=ao(t.visibleWrites,e,n)),t.lastWriteId=s}function yN(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function vN(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);Q(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&EN(l,s.path)?i=!1:fn(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return wN(t),!0;if(s.snap)t.visibleWrites=cg(t.visibleWrites,s.path);else{const l=s.children;cn(l,c=>{t.visibleWrites=cg(t.visibleWrites,pt(s.path,c))})}return!0}else return!1}function EN(t,e){if(t.snap)return fn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&fn(pt(t.path,n),e))return!0;return!1}function wN(t){t.visibleWrites=iw(t.allWrites,TN,Ue()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function TN(t){return t.visible}function iw(t,e,n){let s=_n.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)fn(n,o)?(l=on(n,o),s=ao(s,l,r.snap)):fn(o,n)&&(l=on(o,n),s=ao(s,Ue(),r.snap.getChild(l)));else if(r.children){if(fn(n,o))l=on(n,o),s=lg(s,l,r.children);else if(fn(o,n))if(l=on(o,n),be(l))s=lg(s,Ue(),r.children);else{const c=Gi(r.children,Se(l));if(c){const u=c.getChild(He(l));s=ao(s,Ue(),u)}}}else throw rr("WriteRecord should have .snap or .children")}}return s}function rw(t,e,n,s,i){if(!s&&!i){const r=yi(t.visibleWrites,e);if(r!=null)return r;{const o=ks(t.visibleWrites,e);if(Zu(o))return n;if(n==null&&!Ju(o,Ue()))return null;{const l=n||Le.EMPTY_NODE;return ir(o,l)}}}else{const r=ks(t.visibleWrites,e);if(!i&&Zu(r))return n;if(!i&&n==null&&!Ju(r,Ue()))return null;{const o=function(u){return(u.visible||i)&&(!s||!~s.indexOf(u.writeId))&&(fn(u.path,e)||fn(e,u.path))},l=iw(t.allWrites,o,e),c=n||Le.EMPTY_NODE;return ir(l,c)}}}function bN(t,e,n){let s=Le.EMPTY_NODE;const i=yi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Mt,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=ks(t.visibleWrites,e);return n.forEachChild(Mt,(o,l)=>{const c=ir(ks(r,new Ke(o)),l);s=s.updateImmediateChild(o,c)}),ug(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=ks(t.visibleWrites,e);return ug(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function IN(t,e,n,s,i){Q(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=pt(e,n);if(Ju(t.visibleWrites,r))return null;{const o=ks(t.visibleWrites,r);return Zu(o)?i.getChild(n):ir(o,i.getChild(n))}}function AN(t,e,n,s){const i=pt(e,n),r=yi(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=ks(t.visibleWrites,i);return ir(o,s.getNode().getImmediateChild(n))}else return null}function CN(t,e){return yi(t.visibleWrites,e)}function SN(t,e,n,s,i,r,o){let l;const c=ks(t.visibleWrites,e),u=yi(c,Ue());if(u!=null)l=u;else if(n!=null)l=ir(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],f=o.getCompare(),m=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let g=m.getNext();for(;g&&h.length<i;)f(g,s)!==0&&h.push(g),g=m.getNext();return h}else return[]}function RN(){return{visibleWrites:_n.empty(),allWrites:[],lastWriteId:-1}}function eh(t,e,n,s){return rw(t.writeTree,t.treePath,e,n,s)}function ow(t,e){return bN(t.writeTree,t.treePath,e)}function hg(t,e,n,s){return IN(t.writeTree,t.treePath,e,n,s)}function pl(t,e){return CN(t.writeTree,pt(t.treePath,e))}function kN(t,e,n,s,i,r){return SN(t.writeTree,t.treePath,e,n,s,i,r)}function Ed(t,e,n){return AN(t.writeTree,t.treePath,e,n)}function aw(t,e){return lw(pt(t.treePath,e),t.writeTree)}function lw(t,e){return{treePath:t,writeTree:e}}/**
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
 */class PN{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;Q(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),Q(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,ig(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,rN(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,iN(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,ig(s,e.snapshotNode,i.oldSnap));else throw rr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class xN{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const cw=new xN;class wd{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new vd(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ed(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ci(this.viewCache_),r=kN(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function NN(t,e){Q(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),Q(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function DN(t,e,n,s,i){const r=new PN;let o,l;if(n.type===Nn.OVERWRITE){const u=n;u.source.fromUser?o=th(t,e,u.path,u.snap,s,i,r):(Q(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!be(u.path),o=ml(t,e,u.path,u.snap,s,i,l,r))}else if(n.type===Nn.MERGE){const u=n;u.source.fromUser?o=MN(t,e,u.path,u.children,s,i,r):(Q(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=nh(t,e,u.path,u.children,s,i,l,r))}else if(n.type===Nn.ACK_USER_WRITE){const u=n;u.revert?o=FN(t,e,u.path,s,i,r):o=LN(t,e,u.path,u.affectedTree,s,i,r)}else if(n.type===Nn.LISTEN_COMPLETE)o=VN(t,e,n.path,s,r);else throw rr("Unknown operation type: "+n.type);const c=r.getChanges();return ON(e,o,c),{viewCache:o,changes:c}}function ON(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Xu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(sN(Xu(e)))}}function uw(t,e,n,s,i,r){const o=e.eventCache;if(pl(s,n)!=null)return e;{let l,c;if(be(n))if(Q(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=ci(e),h=u instanceof Le?u:Le.EMPTY_NODE,f=ow(s,h);l=t.filter.updateFullNode(e.eventCache.getNode(),f,r)}else{const u=eh(s,ci(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=Se(n);if(u===".priority"){Q(Ls(n)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const f=hg(s,n,h,c);f!=null?l=t.filter.updatePriority(h,f):l=o.getNode()}else{const h=He(n);let f;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const m=hg(s,n,o.getNode(),c);m!=null?f=o.getNode().getImmediateChild(u).updateChild(h,m):f=o.getNode().getImmediateChild(u)}else f=Ed(s,u,e.serverCache);f!=null?l=t.filter.updateChild(o.getNode(),u,f,h,i,r):l=o.getNode()}}return oo(e,l,o.isFullyInitialized()||be(n),t.filter.filtersNodes())}}function ml(t,e,n,s,i,r,o,l){const c=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(be(n))u=h.updateFullNode(c.getNode(),s,null);else if(h.filtersNodes()&&!c.isFiltered()){const g=c.getNode().updateChild(n,s);u=h.updateFullNode(c.getNode(),g,null)}else{const g=Se(n);if(!c.isCompleteForPath(n)&&Ls(n)>1)return e;const A=He(n),x=c.getNode().getImmediateChild(g).updateChild(A,s);g===".priority"?u=h.updatePriority(c.getNode(),x):u=h.updateChild(c.getNode(),g,x,A,cw,null)}const f=tw(e,u,c.isFullyInitialized()||be(n),h.filtersNodes()),m=new wd(i,f,r);return uw(t,f,n,i,m,l)}function th(t,e,n,s,i,r,o){const l=e.eventCache;let c,u;const h=new wd(i,e,r);if(be(n))u=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=oo(e,u,!0,t.filter.filtersNodes());else{const f=Se(n);if(f===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),s),c=oo(e,u,l.isFullyInitialized(),l.isFiltered());else{const m=He(n),g=l.getNode().getImmediateChild(f);let A;if(be(m))A=s;else{const R=h.getCompleteChild(f);R!=null?BE(m)===".priority"&&R.getChild(zE(m)).isEmpty()?A=R:A=R.updateChild(m,s):A=Le.EMPTY_NODE}if(g.equals(A))c=e;else{const R=t.filter.updateChild(l.getNode(),f,A,m,h,o);c=oo(e,R,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function dg(t,e){return t.eventCache.isCompleteForChild(e)}function MN(t,e,n,s,i,r,o){let l=e;return s.foreach((c,u)=>{const h=pt(n,c);dg(e,Se(h))&&(l=th(t,l,h,u,i,r,o))}),s.foreach((c,u)=>{const h=pt(n,c);dg(e,Se(h))||(l=th(t,l,h,u,i,r,o))}),l}function fg(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function nh(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;be(n)?u=s:u=new qe(null).setTree(n,s);const h=e.serverCache.getNode();return u.children.inorderTraversal((f,m)=>{if(h.hasChild(f)){const g=e.serverCache.getNode().getImmediateChild(f),A=fg(t,g,m);c=ml(t,c,new Ke(f),A,i,r,o,l)}}),u.children.inorderTraversal((f,m)=>{const g=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!h.hasChild(f)&&!g){const A=e.serverCache.getNode().getImmediateChild(f),R=fg(t,A,m);c=ml(t,c,new Ke(f),R,i,r,o,l)}}),c}function LN(t,e,n,s,i,r,o){if(pl(i,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(be(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return ml(t,e,n,c.getNode().getChild(n),i,r,l,o);if(be(n)){let u=new qe(null);return c.getNode().forEachChild(ji,(h,f)=>{u=u.set(new Ke(h),f)}),nh(t,e,n,u,i,r,l,o)}else return e}else{let u=new qe(null);return s.foreach((h,f)=>{const m=pt(n,h);c.isCompleteForPath(m)&&(u=u.set(h,c.getNode().getChild(m)))}),nh(t,e,n,u,i,r,l,o)}}function VN(t,e,n,s,i){const r=e.serverCache,o=tw(e,r.getNode(),r.isFullyInitialized()||be(n),r.isFiltered());return uw(t,o,n,s,cw,i)}function FN(t,e,n,s,i,r){let o;if(pl(s,n)!=null)return e;{const l=new wd(s,e,i),c=e.eventCache.getNode();let u;if(be(n)||Se(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=eh(s,ci(e));else{const f=e.serverCache.getNode();Q(f instanceof Le,"serverChildren would be complete if leaf node"),h=ow(s,f)}h=h,u=t.filter.updateFullNode(c,h,r)}else{const h=Se(n);let f=Ed(s,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=c.getImmediateChild(h)),f!=null?u=t.filter.updateChild(c,h,f,He(n),l,r):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(c,h,Le.EMPTY_NODE,He(n),l,r):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=eh(s,ci(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||pl(s,Ue())!=null,oo(e,u,o,t.filter.filtersNodes())}}function UN(t,e){const n=ci(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!be(e)&&!n.getImmediateChild(Se(e)).isEmpty())?n.getChild(e):null}function pg(t,e,n,s){e.type===Nn.MERGE&&e.source.queryId!==null&&(Q(ci(t.viewCache_),"We should always have a full cache before handling merges"),Q(Xu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=DN(t.processor_,i,e,n,s);return NN(t.processor_,r.viewCache),Q(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,BN(t,r.changes,r.viewCache.eventCache.getNode())}function BN(t,e,n,s){const i=t.eventRegistrations_;return fN(t.eventGenerator_,e,n,i)}/**
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
 */let mg;function $N(t){Q(!mg,"__referenceConstructor has already been defined"),mg=t}function Td(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return Q(r!=null,"SyncTree gave us an op for an invalid query."),pg(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(pg(o,e,n,s));return r}}function bd(t,e){let n=null;for(const s of t.views.values())n=n||UN(s,e);return n}/**
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
 */let gg;function zN(t){Q(!gg,"__referenceConstructor has already been defined"),gg=t}class _g{constructor(e){this.listenProvider_=e,this.syncPointTree_=new qe(null),this.pendingWriteTree_=RN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function jN(t,e,n,s,i){return _N(t.pendingWriteTree_,e,n,s,i),i?tc(t,new li(XE(),e,n)):[]}function Di(t,e,n=!1){const s=yN(t.pendingWriteTree_,e);if(vN(t.pendingWriteTree_,e)){let r=new qe(null);return s.snap!=null?r=r.set(Ue(),!0):cn(s.children,o=>{r=r.set(new Ke(o),!0)}),tc(t,new fl(s.path,r,n))}else return[]}function ec(t,e,n){return tc(t,new li(JE(),e,n))}function qN(t,e,n){const s=qe.fromObject(n);return tc(t,new So(JE(),e,s))}function HN(t,e,n,s){const i=pw(t,s);if(i!=null){const r=mw(i),o=r.path,l=r.queryId,c=on(o,e),u=new li(ZE(l),c,n);return gw(t,o,u)}else return[]}function WN(t,e,n,s){const i=pw(t,s);if(i){const r=mw(i),o=r.path,l=r.queryId,c=on(o,e),u=qe.fromObject(n),h=new So(ZE(l),c,u);return gw(t,o,h)}else return[]}function hw(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=on(o,e),u=bd(l,c);if(u)return u});return rw(i,e,r,n,!0)}function tc(t,e){return dw(e,t.syncPointTree_,null,sw(t.pendingWriteTree_,Ue()))}function dw(t,e,n,s){if(be(t.path))return fw(t,e,n,s);{const i=e.get(Ue());n==null&&i!=null&&(n=bd(i,Ue()));let r=[];const o=Se(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const u=n?n.getImmediateChild(o):null,h=aw(s,o);r=r.concat(dw(l,c,u,h))}return i&&(r=r.concat(Td(i,t,s,n))),r}}function fw(t,e,n,s){const i=e.get(Ue());n==null&&i!=null&&(n=bd(i,Ue()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,u=aw(s,o),h=t.operationForChild(o);h&&(r=r.concat(fw(h,l,c,u)))}),i&&(r=r.concat(Td(i,t,s,n))),r}function pw(t,e){return t.tagToQueryMap.get(e)}function mw(t){const e=t.indexOf("$");return Q(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ke(t.substr(0,e))}}function gw(t,e,n){const s=t.syncPointTree_.get(e);Q(s,"Missing sync point for query tag that we're tracking");const i=sw(t.pendingWriteTree_,e);return Td(s,n,i,null)}/**
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
 */class Id{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Id(n)}node(){return this.node_}}class Ad{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=pt(this.path_,e);return new Ad(this.syncTree_,n)}node(){return hw(this.syncTree_,this.path_)}}const KN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},yg=function(t,e,n){if(!t||typeof t!="object")return t;if(Q(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return GN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return QN(t[".sv"],e);Q(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},GN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:Q(!1,"Unexpected server value: "+t)}},QN=function(t,e,n){t.hasOwnProperty("increment")||Q(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&Q(!1,"Unexpected increment value: "+s);const i=e.node();if(Q(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},YN=function(t,e,n,s){return Cd(e,new Ad(n,t),s)},XN=function(t,e,n){return Cd(t,new Id(e),n)};function Cd(t,e,n){const s=t.getPriority().val(),i=yg(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=yg(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ht(l,Ot(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ht(i))),o.forEachChild(Mt,(l,c)=>{const u=Cd(c,e.getImmediateChild(l),n);u!==c&&(r=r.updateImmediateChild(l,u))}),r}}/**
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
 */class Sd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Rd(t,e){let n=e instanceof Ke?e:new Ke(e),s=t,i=Se(n);for(;i!==null;){const r=Gi(s.node.children,i)||{children:{},childCount:0};s=new Sd(i,s,r),n=He(n),i=Se(n)}return s}function fr(t){return t.node.value}function _w(t,e){t.node.value=e,sh(t)}function yw(t){return t.node.childCount>0}function JN(t){return fr(t)===void 0&&!yw(t)}function nc(t,e){cn(t.node.children,(n,s)=>{e(new Sd(n,t,s))})}function vw(t,e,n,s){n&&e(t),nc(t,i=>{vw(i,e,!0)})}function ZN(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function $o(t){return new Ke(t.parent===null?t.name:$o(t.parent)+"/"+t.name)}function sh(t){t.parent!==null&&eD(t.parent,t.name,t)}function eD(t,e,n){const s=JN(n),i=ls(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,sh(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,sh(t))}/**
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
 */const tD=/[\[\].#$\/\u0000-\u001F\u007F]/,nD=/[\[\].#$\u0000-\u001F\u007F]/,Zc=10*1024*1024,Ew=function(t){return typeof t=="string"&&t.length!==0&&!tD.test(t)},sD=function(t){return typeof t=="string"&&t.length!==0&&!nD.test(t)},iD=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),sD(t)},ww=function(t,e,n){const s=n instanceof Ke?new Vx(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Xs(s));if(typeof e=="function")throw new Error(t+"contains a function "+Xs(s)+" with contents = "+e.toString());if(EE(e))throw new Error(t+"contains "+e.toString()+" "+Xs(s));if(typeof e=="string"&&e.length>Zc/3&&Ml(e)>Zc)throw new Error(t+"contains a string greater than "+Zc+" utf8 bytes "+Xs(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(cn(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ew(o)))throw new Error(t+" contains an invalid key ("+o+") "+Xs(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Fx(s,o),ww(t,l,s),Ux(s)}),i&&r)throw new Error(t+' contains ".value" child '+Xs(s)+" in addition to actual children.")}},rD=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ew(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!iD(n))throw new Error(uC(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class oD{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function aD(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!jE(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function vi(t,e,n){aD(t,n),lD(t,s=>fn(s,e)||fn(e,s))}function lD(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(cD(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function cD(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();io&&Dt("event: "+n.toString()),Uo(s)}}}/**
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
 */const uD="repo_interrupt",hD=25;class dD{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new oD,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=dl(),this.transactionQueueTree_=new Sd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function fD(t,e,n){if(t.stats_=pd(t.repoInfo_),t.forceRestClient_||ax())t.server_=new hl(t.repoInfo_,(s,i,r,o)=>{vg(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Eg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Et(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new ts(t.repoInfo_,e,(s,i,r,o)=>{vg(t,s,i,r,o)},s=>{Eg(t,s)},s=>{mD(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=fx(t.repoInfo_,()=>new dN(t.stats_,t.server_)),t.infoData_=new aN,t.infoSyncTree_=new _g({startListening:(s,i,r,o)=>{let l=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(l=ec(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),kd(t,"connected",!1),t.serverSyncTree_=new _g({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,c)=>{const u=o(l,c);vi(t.eventQueue_,s._path,u)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function pD(t){const n=t.infoData_.getNode(new Ke(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Tw(t){return KN({timestamp:pD(t)})}function vg(t,e,n,s,i){t.dataUpdateCount++;const r=new Ke(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=Ha(n,u=>Ot(u));o=WN(t.serverSyncTree_,r,c,i)}else{const c=Ot(n);o=HN(t.serverSyncTree_,r,c,i)}else if(s){const c=Ha(n,u=>Ot(u));o=qN(t.serverSyncTree_,r,c)}else{const c=Ot(n);o=ec(t.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=xd(t,r)),vi(t.eventQueue_,l,o)}function Eg(t,e){kd(t,"connected",e),e===!1&&_D(t)}function mD(t,e){cn(e,(n,s)=>{kd(t,n,s)})}function kd(t,e,n){const s=new Ke("/.info/"+e),i=Ot(n);t.infoData_.updateSnapshot(s,i);const r=ec(t.infoSyncTree_,s,i);vi(t.eventQueue_,s,r)}function gD(t){return t.nextWriteId_++}function _D(t){bw(t,"onDisconnectEvents");const e=Tw(t),n=dl();Yu(t.onDisconnect_,Ue(),(i,r)=>{const o=YN(i,r,t.serverSyncTree_,e);YE(n,i,o)});let s=[];Yu(n,Ue(),(i,r)=>{s=s.concat(ec(t.serverSyncTree_,i,r));const o=wD(t,i);xd(t,o)}),t.onDisconnect_=dl(),vi(t.eventQueue_,Ue(),s)}function yD(t){t.persistentConnection_&&t.persistentConnection_.interrupt(uD)}function bw(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Dt(n,...e)}function Iw(t,e,n){return hw(t.serverSyncTree_,e,n)||Le.EMPTY_NODE}function Pd(t,e=t.transactionQueueTree_){if(e||sc(t,e),fr(e)){const n=Cw(t,e);Q(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&vD(t,$o(e),n)}else yw(e)&&nc(e,n=>{Pd(t,n)})}function vD(t,e,n){const s=n.map(u=>u.currentWriteId),i=Iw(t,e,s);let r=i;const o=i.hash();for(let u=0;u<n.length;u++){const h=n[u];Q(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=on(e,h.path);r=r.updateChild(f,h.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;t.server_.put(c.toString(),l,u=>{bw(t,"transaction put response",{path:c.toString(),status:u});let h=[];if(u==="ok"){const f=[];for(let m=0;m<n.length;m++)n[m].status=2,h=h.concat(Di(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&f.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();sc(t,Rd(t.transactionQueueTree_,e)),Pd(t,t.transactionQueueTree_),vi(t.eventQueue_,e,h);for(let m=0;m<f.length;m++)Uo(f[m])}else{if(u==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Jt("transaction at "+c.toString()+" failed: "+u);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=u}xd(t,e)}},o)}function xd(t,e){const n=Aw(t,e),s=$o(n),i=Cw(t,n);return ED(t,i,s),s}function ED(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],u=on(n,c.path);let h=!1,f;if(Q(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,f=c.abortReason,i=i.concat(Di(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=hD)h=!0,f="maxretry",i=i.concat(Di(t.serverSyncTree_,c.currentWriteId,!0));else{const m=Iw(t,c.path,o);c.currentInputSnapshot=m;const g=e[l].update(m.val());if(g!==void 0){ww("transaction failed: Data returned ",g,c.path);let A=Ot(g);typeof g=="object"&&g!=null&&ls(g,".priority")||(A=A.updatePriority(m.getPriority()));const x=c.currentWriteId,F=Tw(t),U=XN(A,m,F);c.currentOutputSnapshotRaw=A,c.currentOutputSnapshotResolved=U,c.currentWriteId=gD(t),o.splice(o.indexOf(x),1),i=i.concat(jN(t.serverSyncTree_,c.path,U,c.currentWriteId,c.applyLocally)),i=i.concat(Di(t.serverSyncTree_,x,!0))}else h=!0,f="nodata",i=i.concat(Di(t.serverSyncTree_,c.currentWriteId,!0))}vi(t.eventQueue_,n,i),i=[],h&&(e[l].status=2,function(m){setTimeout(m,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(f==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(f),!1,null))))}sc(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Uo(s[l]);Pd(t,t.transactionQueueTree_)}function Aw(t,e){let n,s=t.transactionQueueTree_;for(n=Se(e);n!==null&&fr(s)===void 0;)s=Rd(s,n),e=He(e),n=Se(e);return s}function Cw(t,e){const n=[];return Sw(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Sw(t,e,n){const s=fr(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);nc(e,i=>{Sw(t,i,n)})}function sc(t,e){const n=fr(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,_w(e,n.length>0?n:void 0)}nc(e,s=>{sc(t,s)})}function wD(t,e){const n=$o(Aw(t,e)),s=Rd(t.transactionQueueTree_,e);return ZN(s,i=>{eu(t,i)}),eu(t,s),vw(s,i=>{eu(t,i)}),n}function eu(t,e){const n=fr(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(Q(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(Q(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Di(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?_w(e,void 0):n.length=r+1,vi(t.eventQueue_,$o(e),i);for(let o=0;o<s.length;o++)Uo(s[o])}}/**
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
 */function TD(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function bD(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Jt(`Invalid query segment '${n}' in query '${t}'`)}return e}const wg=function(t,e){const n=ID(t),s=n.namespace;n.domain==="firebase.com"&&oi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&oi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||ZP();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new ux(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Ke(n.pathString)}},ID=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",c=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(i=TD(t.substring(h,f)));const m=bD(t.substring(Math.min(t.length,f)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const A=e.indexOf(".");s=e.substring(0,A).toLowerCase(),n=e.substring(A+1),r=s}"ns"in m&&(r=m.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */class Nd{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return be(this._path)?null:BE(this._path)}get ref(){return new pr(this._repo,this._path)}get _queryIdentifier(){const e=og(this._queryParams),n=dd(e);return n==="{}"?"default":n}get _queryObject(){return og(this._queryParams)}isEqual(e){if(e=Tn(e),!(e instanceof Nd))return!1;const n=this._repo===e._repo,s=jE(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Lx(this._path)}}class pr extends Nd{constructor(e,n){super(e,n,new yd,!1)}get parent(){const e=zE(this._path);return e===null?null:new pr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}$N(pr);zN(pr);/**
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
 */const AD="FIREBASE_DATABASE_EMULATOR_HOST",ih={};let CD=!1;function SD(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||oi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Dt("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=wg(r,i),l=o.repoInfo,c;typeof process<"u"&&$m&&(c=$m[AD]),c?(r=`http://${c}?ns=${l.namespace}`,o=wg(r,i),l=o.repoInfo):o.repoInfo.secure;const u=new cx(t.name,t.options,e);rD("Invalid Firebase Database URL",o),be(o.path)||oi("Database URL must point to the root of a Firebase Database (not including a child path).");const h=kD(l,t,u,new lx(t.name,n));return new PD(h,t)}function RD(t,e){const n=ih[e];(!n||n[t.key]!==t)&&oi(`Database ${e}(${t.repoInfo_}) has already been deleted.`),yD(t),delete n[t.key]}function kD(t,e,n,s){let i=ih[e.name];i||(i={},ih[e.name]=i);let r=i[t.toURLString()];return r&&oi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new dD(t,CD,n,s),i[t.toURLString()]=r,r}class PD{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(fD(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new pr(this._repo,Ue())),this._rootInternal}_delete(){return this._rootInternal!==null&&(RD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&oi("Cannot call "+e+" on a deleted database.")}}/**
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
 */function xD(t){KP(ar),Ln(new bn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return SD(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Yt(zm,jm,t),Yt(zm,jm,"esm2017")}ts.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ts.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};xD();/**
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
 */const Rw="firebasestorage.googleapis.com",ND="storageBucket",DD=2*60*1e3,OD=10*60*1e3;/**
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
 */class Bn extends as{constructor(e,n,s=0){super(tu(e),`Firebase Storage: ${n} (${tu(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Bn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return tu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Un;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Un||(Un={}));function tu(t){return"storage/"+t}function MD(){const t="An unknown error occurred, please check the error payload for server response.";return new Bn(Un.UNKNOWN,t)}function LD(){return new Bn(Un.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function VD(){return new Bn(Un.CANCELED,"User canceled the upload/download.")}function FD(t){return new Bn(Un.INVALID_URL,"Invalid URL '"+t+"'.")}function UD(t){return new Bn(Un.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Tg(t){return new Bn(Un.INVALID_ARGUMENT,t)}function kw(){return new Bn(Un.APP_DELETED,"The Firebase app was deleted.")}function BD(t){return new Bn(Un.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class pn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=pn.makeFromUrl(e,n)}catch{return new pn(e,"")}if(s.path==="")return s;throw UD(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(M){M.path.charAt(M.path.length-1)==="/"&&(M.path_=M.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(M){M.path_=decodeURIComponent(M.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${h}/b/${i}/o${m}`,"i"),A={bucket:1,path:3},R=n===Rw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,x="([^?#]*)",F=new RegExp(`^https?://${R}/${i}/${x}`,"i"),O=[{regex:l,indices:c,postModify:r},{regex:g,indices:A,postModify:u},{regex:F,indices:{bucket:1,path:2},postModify:u}];for(let M=0;M<O.length;M++){const ee=O[M],te=ee.regex.exec(e);if(te){const C=te[ee.indices.bucket];let y=te[ee.indices.path];y||(y=""),s=new pn(C,y),ee.postModify(s);break}}if(s==null)throw FD(e);return s}}class $D{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function zD(t,e,n){let s=1,i=null,r=null,o=!1,l=0;function c(){return l===2}let u=!1;function h(...x){u||(u=!0,e.apply(null,x))}function f(x){i=setTimeout(()=>{i=null,t(g,c())},x)}function m(){r&&clearTimeout(r)}function g(x,...F){if(u){m();return}if(x){m(),h.call(null,x,...F);return}if(c()||o){m(),h.call(null,x,...F);return}s<64&&(s*=2);let O;l===1?(l=2,O=0):O=(s+Math.random())*1e3,f(O)}let A=!1;function R(x){A||(A=!0,m(),!u&&(i!==null?(x||(l=2),clearTimeout(i),f(0)):x||(l=1)))}return f(0),r=setTimeout(()=>{o=!0,R(!0)},n),R}function jD(t){t(!1)}/**
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
 */function qD(t){return t!==void 0}function bg(t,e,n,s){if(s<e)throw Tg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Tg(`Invalid value for '${t}'. Expected ${n} or less.`)}function HD(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}var gl;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(gl||(gl={}));/**
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
 */function WD(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
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
 */class KD{constructor(e,n,s,i,r,o,l,c,u,h,f,m=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,A)=>{this.resolve_=g,this.reject_=A,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new ya(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const l=r.getErrorCode()===gl.NO_ERROR,c=r.getStatus();if(!l||WD(c,this.additionalRetryCodes_)&&this.retry){const h=r.getErrorCode()===gl.ABORT;s(!1,new ya(!1,null,h));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new ya(u,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());qD(c)?r(c):r()}catch(c){o(c)}else if(l!==null){const c=MD();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(i.canceled){const c=this.appDelete_?kw():VD();o(c)}else{const c=LD();o(c)}};this.canceled_?n(!1,new ya(!1,null,!0)):this.backoffId_=zD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&jD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ya{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function GD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function QD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function YD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function XD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function JD(t,e,n,s,i,r,o=!0){const l=HD(t.urlParams),c=t.url+l,u=Object.assign({},t.headers);return YD(u,e),GD(u,n),QD(u,r),XD(u,s),new KD(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function ZD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function e2(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class _l{constructor(e,n){this._service=e,n instanceof pn?this._location=n:this._location=pn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new _l(e,n)}get root(){const e=new pn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return e2(this._location.path)}get storage(){return this._service}get parent(){const e=ZD(this._location.path);if(e===null)return null;const n=new pn(this._location.bucket,e);return new _l(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw BD(e)}}function Ig(t,e){const n=e==null?void 0:e[ND];return n==null?null:pn.makeFromBucketSpec(n,t)}class t2{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=Rw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=DD,this._maxUploadRetryTime=OD,this._requests=new Set,i!=null?this._bucket=pn.makeFromBucketSpec(i,this._host):this._bucket=Ig(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=pn.makeFromBucketSpec(this._url,e):this._bucket=Ig(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){bg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){bg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new _l(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new $D(kw());{const o=JD(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Ag="@firebase/storage",Cg="0.13.5";/**
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
 */const n2="storage";function s2(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new t2(n,s,i,e,ar)}function i2(){Ln(new bn(n2,s2,"PUBLIC").setMultipleInstances(!0)),Yt(Ag,Cg,""),Yt(Ag,Cg,"esm2017")}i2();const nu=new WeakMap;function Pw(t,e){return nu.has(e)||nu.set(e,{f:{},r:{},s:{},u:{}}),nu.get(e)}function r2(t,e,n,s){if(!t)return n;const[i,r]=xw(t);if(!i)return n;const o=Pw(void 0,s)[i]||{},l=e||r;return l&&l in o?o[l]:n}function o2(t,e,n,s){if(!t)return;const[i,r]=xw(t);if(!i)return;const o=Pw(void 0,s)[i],l=e||r;if(l)return n.then(c=>{o[l]=c}).catch(Pn),l}function xw(t){return BP(t)||$P(t)?["f",t.path]:zP(t)?["r",t.toString()]:jP(t)?["s",t.toString()]:[]}const su=new WeakMap;function a2(t,e,n){const s=gE();su.has(s)||su.set(s,new Map);const i=su.get(s),r=o2(e,n,t,s);return r&&i.set(r,t),r?()=>i.delete(r):Pn}const l2={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function rh(t,e,n,s){if(!FP(t))return[t,{}];const i=[{},{}],r=Object.keys(n).reduce((l,c)=>{const u=n[c];return l[u.path]=u.data(),l},{});function o(l,c,u,h){c=c||{};const[f,m]=h;Object.getOwnPropertyNames(l).forEach(g=>{const A=Object.getOwnPropertyDescriptor(l,g);A&&!A.enumerable&&Object.defineProperty(f,g,A)});for(const g in l){const A=l[g];if(A==null||A instanceof Date||A instanceof rt||A instanceof Xl)f[g]=A;else if(hd(A)){const R=u+g;f[g]=R in n?c[g]:A.path,m[R]=A.converter?A:A.withConverter(s.converter)}else if(Array.isArray(A)){f[g]=Array(A.length);for(let R=0;R<A.length;R++){const x=A[R];x&&x.path in r&&(f[g][R]=r[x.path])}o(A,c[g]||f[g],u+g+".",[f[g],m])}else _i(A)?(f[g]={},o(A,c[g],u+g+".",[f[g],m])):f[g]=A}}return o(t,e,"",i),i}const Dd={reset:!1,wait:!0,maxRefDepth:2,converter:l2,snapshotOptions:{serverTimestamps:"estimate"}};function yl(t){for(const e in t)t[e].unsub()}function oh(t,e,n,s,i,r,o,l,c){const[u,h]=rh(s.data(t.snapshotOptions),ud(e,n),i,t);r.set(e,n,u),ah(t,e,n,i,h,r,o,l,c)}function c2({ref:t,target:e,path:n,depth:s,resolve:i,reject:r,ops:o},l){const c=Object.create(null);let u=Pn;return l.once?Xv(t).then(h=>{h.exists()?oh(l,e,n,h,c,o,s,i,r):(o.set(e,n,null),i())}).catch(r):u=ld(t,h=>{h.exists()?oh(l,e,n,h,c,o,s,i,r):(o.set(e,n,null),i())},r),()=>{u(),yl(c)}}function ah(t,e,n,s,i,r,o,l,c){const u=Object.keys(i);if(Object.keys(s).filter(R=>u.indexOf(R)<0).forEach(R=>{s[R].unsub(),delete s[R]}),!u.length||++o>t.maxRefDepth)return l(n);let f=0;const m=u.length,g=Object.create(null);function A(R){R in g&&++f>=m&&l(n)}u.forEach(R=>{const x=s[R],F=i[R],U=`${n}.${R}`;if(g[U]=!0,x)if(x.path!==F.path)x.unsub();else return;s[R]={data:()=>ud(e,U),unsub:c2({ref:F,target:e,path:U,depth:o,ops:r,resolve:A.bind(null,U),reject:c},t),path:F.path}})}function u2(t,e,n,s,i,r){const o=Object.assign({},Dd,r),{snapshotListenOptions:l,snapshotOptions:c,wait:u,once:h}=o,f="value";let m=Bt(u?[]:t.value);u||n.set(t,f,[]);const g=s;let A,R=Pn;const x=[],F={added:({newIndex:O,doc:M})=>{x.splice(O,0,Object.create(null));const ee=x[O],[te,C]=rh(M.data(c),void 0,ee,o);n.add(Kn(m),O,te),ah(o,m,`${f}.${O}`,ee,C,n,0,s.bind(null,M),i)},modified:({oldIndex:O,newIndex:M,doc:ee})=>{const te=Kn(m),C=x[O],y=te[O],[v,I]=rh(ee.data(c),y,C,o);x.splice(M,0,C),n.remove(te,O),n.add(te,M,v),ah(o,m,`${f}.${M}`,C,I,n,0,s,i)},removed:({oldIndex:O})=>{const M=Kn(m);n.remove(M,O),yl(x.splice(O,1)[0])}};function U(O){const M=O.docChanges(l);if(!A&&M.length){A=!0;let ee=0;const te=M.length,C=Object.create(null);for(let y=0;y<te;y++)C[M[y].doc.id]=!0;s=y=>{y&&y.id in C&&++ee>=te&&(u&&(n.set(t,f,Kn(m)),m=t),g(Kn(m)),s=Pn)}}M.forEach(ee=>{F[ee.type](ee)}),M.length||(u&&(n.set(t,f,Kn(m)),m=t),s(Kn(m)))}return h?Ck(e).then(U).catch(i):R=ld(e,U,i),O=>{if(R(),O){const M=typeof O=="function"?O():[];n.set(t,f,M)}x.forEach(yl)}}function h2(t,e,n,s,i,r){const o=Object.assign({},Dd,r),l="value",c=Object.create(null);s=qP(s,()=>ud(t,l));let u=Pn;function h(f){f.exists()?oh(o,t,l,f,c,n,0,s,i):(n.set(t,l,null),s(null))}return o.once?Xv(e).then(h).catch(i):u=ld(e,h,i),f=>{if(u(),f){const m=typeof f=="function"?f():null;n.set(t,l,m)}yl(c)}}const Sg=Symbol();function d2(t,e){let n=Pn;const s=Object.assign({},Dd,e),i=Kn(t),r=s.target||Bt();WP()&&(s.once=!0);const o=r2(i,s.ssrKey,Sg,gE()),l=o!==Sg;l&&(r.value=o);let c=!l;const u=Bt(!1),h=Bt(),f=r_(),m=zg();let g=Pn;function A(){let F=Kn(t);const U=new Promise((O,M)=>{if(n(s.reset),!F)return n=Pn,O(null);u.value=c,c=!0,F.converter||(F=F.withConverter(s.converter)),n=(hd(F)?h2:u2)(r,F,f2,O,M,s)}).catch(O=>(f.value===U&&(h.value=O),Promise.reject(O))).finally(()=>{f.value===U&&(u.value=!1)});f.value=U}let R=Pn;(Tt(t)||typeof t=="function")&&(R=si(t,A)),A(),i&&(g=a2(f.value,i,s.ssrKey)),Sh()&&I_(()=>f.value),m&&ST(x);function x(F=s.reset){R(),g(),n(F)}return Object.defineProperties(r,{error:{get:()=>h},data:{get:()=>r},pending:{get:()=>u},promise:{get:()=>f},stop:{get:()=>x}})}const f2={set:(t,e,n)=>LP(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function Nw(t,e){return d2(t,{target:Bt([]),...e})}function p2(t,{firebaseApp:e,modules:n=[]}){t.provide(mE,e);for(const s of n)s(e,t)}const m2={apiKey:"AIzaSyAfF4tiebJT5Ce9-8rTuB2n8Z9oYiA1YFA",authDomain:"docutrack-waitlist.firebaseapp.com",projectId:"docutrack-waitlist",storageBucket:"docutrack-waitlist.firebasestorage.app",messagingSenderId:"502896437609",appId:"1:502896437609:web:d9a389e6ae8df8a266b5f8",measurementId:"G-8RQMJTXMLW"},Dw=Cy(m2),g2=dk(Dw),_2=(t,e={})=>new Promise((n,s)=>{if(typeof document>"u")return;const i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("script");if(r.async=!0,r.src=t,r.defer=e.defer,e.preconnectOrigin){const o=document.createElement("link");o.href=e.preconnectOrigin,o.rel="preconnect",i.appendChild(o)}i.appendChild(r),r.onload=n,r.onerror=s}),lh=t=>typeof t=="function",iu=t=>t&&typeof t=="object"&&!Array.isArray(t),ch=(t,...e)=>{if(!e.length)return t;const n=e.shift();if(!(!iu(t)||!iu(n))){for(const s in n)iu(n[s])?(t[s]||Object.assign(t,{[s]:{}}),ch(t[s],n[s])):Object.assign(t,{[s]:n[s]});return ch(t,...e)}},ic=()=>!(typeof window>"u"||typeof document>"u"),Rg=(t,e=!0)=>{},y2=(t={})=>(Rg('Missing "appName" property inside the plugin options.',t.app_name==null),Rg('Missing "name" property in the route.',t.screen_name==null),t);function v2(t="",e=""){const n=t.split("/"),s=e.split("/");return n[0]===""&&e[e.length-1]==="/"&&n.shift(),s.join("/")+n.join("/")}const E2=()=>({bootstrap:!0,onReady:null,onError:null,onBeforeTrack:null,onAfterTrack:null,pageTrackerTemplate:null,customResourceURL:"https://www.googletagmanager.com/gtag/js",customPreconnectOrigin:"https://www.googletagmanager.com",deferScriptLoad:!1,pageTrackerExcludedRoutes:[],pageTrackerEnabled:!0,enabled:!0,disableScriptLoad:!1,pageTrackerScreenviewEnabled:!1,appName:null,pageTrackerUseFullPath:!1,pageTrackerPrependBase:!0,pageTrackerSkipSamePath:!0,globalDataLayerName:"dataLayer",globalObjectName:"gtag",defaultGroupName:"default",includes:null,config:{id:null,params:{send_page_view:!1}}});let Ow={};const w2=(t={})=>{const e=E2();Ow=ch(e,t)},Zt=()=>Ow,ui=(...t)=>{const{globalObjectName:e}=Zt();!ic()||typeof window[e]>"u"||window[e](...t)},Od=(...t)=>{const{config:e,includes:n}=Zt();if(ui("config",e.id,...t),Array.isArray(n))for(const s of n)ui("config",s.id,...t)},kg=(t,e)=>{ic()&&(window[`ga-disable-${t}`]=e)},Mw=(t=!0)=>{const{config:e,includes:n}=Zt();if(kg(e.id,t),Array.isArray(n))for(const s of n)kg(s.id,t)},Lw=()=>{Mw(!0)},T2=()=>{Mw(!1)},Bs=(t,e={})=>{const{includes:n,defaultGroupName:s}=Zt();e.send_to==null&&Array.isArray(n)&&n.length&&(e.send_to=n.map(i=>i.id).concat(s)),ui("event",t,e)};let Vw;const b2=t=>{Vw=t},Md=()=>Vw,Fw=t=>{if(!ic())return;let e;if(typeof t=="string")e={page_path:t};else if(t.path||t.fullPath){const{pageTrackerUseFullPath:n,pageTrackerPrependBase:s}=Zt(),i=Md(),r=i==null?void 0:i.options.base,o=n?t.fullPath:t.path;e={...t.name&&{page_title:t.name},page_path:s?v2(o,r):o}}else e=t;e.page_location==null&&(e.page_location=window.location.href),e.send_page_view==null&&(e.send_page_view=!0),Bs("page_view",e)},Uw=t=>{const{appName:e}=Zt();if(!t)return;let n;typeof t=="string"?n={screen_name:t}:n=t,n.app_name=n.app_name||e,Bs("screen_view",n)},I2=(...t)=>{Bs("exception",...t)},A2=t=>{Od("linker",t)},C2=t=>{Bs("timing_complete",t)},S2=(...t)=>{ui("set",...t)},R2=(...t)=>{Bs("refund",...t)},k2=t=>{Bs("purchase",t)},P2=t=>{Od({custom_map:t})},x2=Object.freeze(Object.defineProperty({__proto__:null,config:Od,customMap:P2,event:Bs,exception:I2,linker:A2,optIn:T2,optOut:Lw,pageview:Fw,purchase:k2,query:ui,refund:R2,screenview:Uw,set:S2,time:C2},Symbol.toStringTag,{value:"Module"})),N2=t=>{t.config.globalProperties.$gtag=x2},Pg=t=>({send_page_view:!1,...t}),Bw=()=>{const{config:t,includes:e}=Zt();if(ui("config",t.id,Pg(t.params)),Array.isArray(e))for(const n of e)ui("config",n.id,Pg(n.params))},xg=(t={},e={})=>{const{appName:n,pageTrackerTemplate:s,pageTrackerScreenviewEnabled:i,pageTrackerSkipSamePath:r}=Zt();if(r&&t.path===e.path)return;let o=t;if(lh(s)?o=s(t,e):i&&(o=y2({app_name:n,screen_name:t.name})),i){Uw(o);return}Fw(o)},Ng=t=>{const{pageTrackerExcludedRoutes:e}=Zt();return e.includes(t.path)||e.includes(t.name)},D2=()=>{const{onBeforeTrack:t,onAfterTrack:e}=Zt(),n=Md();n.isReady().then(()=>{Oa().then(()=>{const{currentRoute:s}=n;Bw(),!Ng(s.value)&&xg(s.value)}),n.afterEach((s,i)=>{Oa().then(()=>{Ng(s)||(lh(t)&&t(s,i),xg(s,i),lh(e)&&e(s,i))})})})},O2=()=>{if(!ic())return;const{enabled:t,globalObjectName:e,globalDataLayerName:n}=Zt();return window[e]==null&&(window[n]=window[n]||[],window[e]=(...s)=>{window[n].push(s)}),window[e]("js",new Date),t||Lw(),window[e]},M2=()=>{const{onReady:t,onError:e,globalObjectName:n,globalDataLayerName:s,config:i,customResourceURL:r,customPreconnectOrigin:o,deferScriptLoad:l,pageTrackerEnabled:c,disableScriptLoad:u}=Zt(),h=!!(c&&Md());if(O2(),h?D2():Bw(),!u)return _2(`${r}?id=${i.id}&l=${s}`,{preconnectOrigin:o,defer:l}).then(()=>{t&&t(window[n])}).catch(f=>(e&&e(f),f))},L2=(t,e,n)=>{N2(t),w2(e),b2(n),Zt().bootstrap&&M2()},V2={key:0,class:"flex justify-center w-full"},F2={class:"flex-auto max-w-md"},U2={class:"relative"},B2=["placeholder"],$2=["disabled"],z2={class:"h-8 relative"},$w={__name:"WaitingList",props:["isDarkMode","cta"],setup(t){const e=Bt(""),n=Bt(!1),s=Bt(""),i=Bt("");si(s,()=>{setTimeout(()=>{s.value="",i.value=""},5e3)});const r=l=>/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(l),o=async()=>{if(!e.value){s.value="Please enter your email address.",i.value="error",n.value=!1;return}if(!r(e.value)){s.value="Invalid email address",i.value="error",n.value=!1;return}const l=Fv(g2,"waitlist");Nw(l),n.value=!0,s.value="",i.value="";const c={email:e.value,created_at:new Date().toISOString()};try{if(!await Sk(l,c))throw new Error("An error occurred");Bs("add-to-waitlist",{event_category:"engagement",event_label:"added to waitlist",value:e.value}),s.value=t.cta.successMessage,i.value="success",e.value=""}catch{s.value=t.cta.errorMessage,i.value="error"}finally{n.value=!1}};return(l,c)=>t.cta?(ue(),_e("div",V2,[D("div",F2,[D("h2",{class:Re(["text-md font-semibold mb-4 text-center",t.isDarkMode?"text-base-100":"text-base-400"])},ce(t.cta.title),3),D("div",U2,[f_(D("input",{type:"email","onUpdate:modelValue":c[0]||(c[0]=u=>e.value=u),placeholder:t.cta.inputPlaceholder,class:Re(["w-full px-4 py-4 rounded-full","outline-none ring-2 ring-base-100","focus:ring-primary-200",t.isDarkMode?"bg-base-300 text-base-100 ring-base-200":"bg-base-100 text-base-400 ring-base-200","pr-32"]),required:""},null,10,B2),[[PI,e.value]]),D("button",{type:"submit",onClick:o,disabled:n.value,class:Re(["absolute right-1 top-1 bottom-1","bg-primary-200 text-base-400 px-6 md:px-12 rounded-full font-semibold","hover:bg-primary-300 transition-colors","disabled:opacity-50 disabled:cursor-not-allowed"])},ce(n.value?t.cta.buttonTextLoading:t.cta.buttonText),9,$2)]),D("div",z2,[s.value?(ue(),_e("p",{key:0,class:Re(["absolute w-full mt-2 text-sm text-center",i.value==="success"?"text-primary-400":"text-red"])},ce(s.value),3)):Ba("",!0)])])])):Ba("",!0)}},j2={headline:"Simplifica la Gestión de Peticiones y Documentos",subHeadline1:"Docutrack es La plataforma todo en uno para recibir, gestionar y dar seguimiento a peticiones, solicitudes y documentos de tus clientes.",subHeadline2:{bolded:"Personaliza tus tipos de solicitudes y flujos de trabajo",unbolded:"para adaptarte a las necesidades únicas de tu negocio."}},q2={headline:"Simplify the Management of Requests and Documents",subHeadline1:"Docutrack is the all-in-one platform to receive, manage, and track your clients' requests, applications, and documents.",subHeadline2:{bolded:"Customize your request types and workflows",unbolded:"to fit the unique needs of your business."}},H2={headline:"Vereinfachen Sie die Verwaltung von Anfragen und Dokumenten",subHeadline1:"Docutrack ist die All-in-One-Plattform, um Anfragen, Anträge und Dokumente Ihrer Kunden zu empfangen, zu verwalten und zu verfolgen.",subHeadline2:{bolded:"Passen Sie Ihre Anfragetypen und Workflows an,",unbolded:"um den einzigartigen Anforderungen Ihres Unternehmens gerecht zu werden."}},W2={es:j2,en:q2,de:H2},K2={title:"Sé el primero en probar Docutrack",subtitle:"Únete a nuestra lista de espera y obtén acceso exclusivo a Docutrack antes que nadie. Simplifica tus procesos y mejora tu productividad desde el primer día.",cta:{title:"Únete a la waitlist",inputPlaceholder:"Ingresa tu correo electrónico",buttonText:"Unirse",buttonTextLoading:"Enviando...",successMessage:"¡Gracias por unirte a la waitlist!",errorMessage:"¡Ups! Algo salió mal. Por favor, intenta de nuevo."}},G2={title:"Be the first to try Docutrack",subtitle:"Join our waitlist and get exclusive early access to Docutrack. Simplify your processes and boost your productivity from day one.",cta:{title:"Join the waitlist",inputPlaceholder:"Enter your email",buttonText:"Join",buttonTextLoading:"Sending...",successMessage:"Thank you for joining the waitlist!",errorMessage:"Oops! Something went wrong. Please try again."}},Q2={title:"Sei der Erste, der Docutrack ausprobiert",subtitle:"Trage dich in unsere Warteliste ein und erhalte exklusiven frühen Zugang zu Docutrack. Vereinfache deine Prozesse und steigere deine Produktivität vom ersten Tag an.",cta:{title:"Zur Warteliste hinzufügen",inputPlaceholder:"Gib deine E-Mail-Adresse ein",buttonText:"Beitreten",buttonTextLoading:"Wird gesendet...",successMessage:"Vielen Dank, dass du dich in die Warteliste eingetragen hast!",errorMessage:"Hoppla! Etwas ist schiefgelaufen. Bitte versuche es erneut."}},zw={es:K2,en:G2,de:Q2},Y2={id:"hero",class:"relative py-32 md:py-60 px-4 overflow-hidden"},X2={class:"absolute inset-0 z-0"},J2={class:"container mx-auto text-center relative z-10"},Z2={class:"text-md md:text-xl mb-8"},eO={class:"font-bold"},tO={__name:"HeroSection",props:["isDarkMode"],setup(t){const{language:e}=os(),n=lt(()=>W2[e.value]),s=lt(()=>zw[e.value]);return(i,r)=>(ue(),_e("section",Y2,[D("div",X2,[r[0]||(r[0]=D("img",{src:LA,alt:"Background",class:"w-full h-full object-cover"},null,-1)),D("div",{class:Re(["absolute inset-0",t.isDarkMode?"bg-base-400 opacity-70":"bg-base-100 opacity-50"])},null,2)]),D("div",J2,[D("h1",{class:Re(["text-4xl md:text-6xl font-bold mb-6",t.isDarkMode?"text-base-100":"text-base-400"])},ce(n.value.headline),3),D("p",{class:Re(["text-lg md:text-xl mb-6",t.isDarkMode?"text-base-200":"text-base-300"])},ce(n.value.subHeadline1),3),D("p",Z2,[D("span",eO,ce(n.value.subHeadline2.bolded),1),di(" "+ce(n.value.subHeadline2.unbolded),1)]),ye($w,{cta:s.value.cta,isDarkMode:t.isDarkMode},null,8,["cta","isDarkMode"])])]))}},nO={title:"Características Destacadas",features:[{title:"Gestión Centralizada",description:"Recibe y organiza todas las peticiones y documentos en un solo lugar.",icon:"Folder"},{title:"Seguimiento en Tiempo Real",description:"Permite a tus clientes ver el estado de sus solicitudes en cualquier momento.",icon:"FileClock"},{title:"Asistencia con Inteligencia Artificial",description:"Clasificación Automática, Sugerencias Inteligentes, Detección de Errores, Predicción de Tiempos, Chatbot Integrado",icon:"Bot"},{title:"Notificaciones Automáticas",description:"Envía alertas por email o SMS ante cambios de estado o actualizaciones.",icon:"BellRing"},{title:"Multitenant",description:"Funciona para múltiples oficinas o departamentos, cada uno con su espacio independiente.",icon:"UsersRound"},{title:"Comparte y Colabora",description:"Facilita la comunicación entre clientes y equipos internos con comentarios y adjuntos.",icon:"Share2"},{title:"Analítica Avanzada",description:"Obtén métricas clave para optimizar tus procesos y tiempos de respuesta",icon:"ChartColumnDecreasing"},{title:"Solicitudes Personalizadas",description:"Crea tipos de solicitudes con campos y flujos de trabajo adaptados a tus necesidades. Desde formularios simples hasta procesos complejos, Docutrack se ajusta a ti.",icon:"AppWindow"}]},sO={title:"Key Features",features:[{title:"Centralized Management",description:"Receive and organize all requests and documents in one place.",icon:"Folder"},{title:"Real-Time Tracking",description:"Allow your clients to see the status of their requests at any time.",icon:"FileClock"},{title:"AI-Powered Assistance",description:"Automatic Classification, Smart Suggestions, Error Detection, Time Predictions, Integrated Chatbot",icon:"Bot"},{title:"Automatic Notifications",description:"Send email or SMS alerts for status changes or updates.",icon:"BellRing"},{title:"Multitenant",description:"Works for multiple offices or departments, each with its own independent space.",icon:"UsersRound"},{title:"Share and Collaborate",description:"Facilitate communication between clients and internal teams with comments and attachments.",icon:"Share2"},{title:"Advanced Analytics",description:"Get key metrics to optimize your processes and response times.",icon:"ChartColumnDecreasing"},{title:"Custom Requests",description:"Create request types with fields and workflows tailored to your needs. From simple forms to complex processes, Docutrack adapts to you.",icon:"AppWindow"}]},iO={title:"Hauptmerkmale",features:[{title:"Zentralisiertes Management",description:"Erhalten und organisieren Sie alle Anfragen und Dokumente an einem Ort.",icon:"Folder"},{title:"Echtzeit-Verfolgung",description:"Ermöglichen Sie Ihren Kunden, den Status ihrer Anfragen jederzeit einzusehen.",icon:"FileClock"},{title:"KI-gestützte Unterstützung",description:"Automatische Klassifizierung, Intelligente Vorschläge, Fehlererkennung, Zeitvorhersagen, Integrierter Chatbot",icon:"Bot"},{title:"Automatische Benachrichtigungen",description:"Senden Sie E-Mail- oder SMS-Benachrichtigungen bei Statusänderungen oder Updates.",icon:"BellRing"},{title:"Multitenant-Fähigkeit",description:"Funktioniert für mehrere Büros oder Abteilungen, jeder mit seinem eigenen unabhängigen Bereich.",icon:"UsersRound"},{title:"Teilen und Zusammenarbeiten",description:"Erleichtern Sie die Kommunikation zwischen Kunden und internen Teams durch Kommentare und Anhänge.",icon:"Share2"},{title:"Erweiterte Analysen",description:"Erhalten Sie wichtige Kennzahlen, um Ihre Prozesse und Antwortzeiten zu optimieren.",icon:"ChartColumnDecreasing"},{title:"Benutzerdefinierte Anfragen",description:"Erstellen Sie Anfragetypen mit Feldern und Workflows, die auf Ihre Bedürfnisse zugeschnitten sind. Von einfachen Formularen bis zu komplexen Prozessen – Docutrack passt sich Ihnen an.",icon:"AppWindow"}]},rO={es:nO,en:sO,de:iO},oO={class:"container mx-auto"},aO={class:"text-3xl md:text-4xl font-bold text-center mb-12"},lO={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"},cO={class:"text-xl font-semibold mb-2"},uO={__name:"FeaturesSection",props:["isDarkMode"],setup(t){const{language:e}=os(),n={Folder:lA,FileClock:aA,Bot:eA,BellRing:Z0,UsersRound:_A,Share2:mA,ChartColumnDecreasing:nA,AppWindow:X0},s=lt(()=>rO[e.value]);return(i,r)=>(ue(),_e("section",{id:"features",class:Re(["py-20 px-4 transition-colors duration-300",t.isDarkMode?"bg-base-300":"bg-base-200"])},[D("div",oO,[D("h2",aO,ce(s.value.title),1),D("div",lO,[(ue(!0),_e(tt,null,vn(s.value.features,o=>(ue(),_e("div",{key:o.title,class:Re(["p-6 rounded-lg transition-colors duration-300",t.isDarkMode?"bg-base-400":"bg-base-100"])},[(ue(),qi(S_(n[o.icon]),{class:"w-12 h-12 text-base-200 mb-4"})),D("h3",cO,ce(o.title),1),D("p",{class:Re(t.isDarkMode?"text-primary-100":"text-base-300")},ce(o.description),3)],2))),128))])])],2))}},hO={title:"Sin Docutrack vs. Con Docutrack",subtitle:"Descubre cómo Docutrack transforma procesos desorganizados en flujos de trabajo eficientes.",cta:{title:"Transforma tus procesos hoy.",button:"Únete a la waitlist y sé parte del cambio."},without:{title:"Sin Docutrack",list:[{title:"Procesos lentos y desorganizados:",body:"Las solicitudes se pierden en correos, papeles o sistemas obsoletos."},{title:"Falta de transparencia:",body:"Los clientes no saben en qué estado están sus peticiones, generando frustración."},{title:"Comunicación ineficiente:",body:"Los equipos internos pierden tiempo buscando información o coordinando respuestas."},{title:"Errores frecuentes:",body:"La falta de seguimiento y control aumenta los errores y retrasos."},{title:"Gestión manual y propensa a errores:",body:"La clasificación y asignación de solicitudes se hace manualmente, lo que consume tiempo y recursos."}]},with:{title:"Con Docutrack",list:[{title:"Procesos ágiles y organizados:",body:"Centraliza todas las solicitudes en una plataforma intuitiva."},{title:"Transparencia total:",body:"Los clientes pueden ver el estado de sus peticiones en tiempo real."},{title:"Comunicación fluida:",body:"Comentarios, notificaciones y adjuntos simplifican la colaboración."},{title:"Control y precisión:",body:"Reduce errores y mejora los tiempos de respuesta con flujos de trabajo claros."},{title:"Asistencia con Inteligencia Artificial:",body:"Clasifica y asigna automáticamente las solicitudes al departamento correcto. Detecta errores en formularios y sugiere correcciones. Predice tiempos de respuesta basados en datos históricos. Ofrece respuestas automáticas a preguntas frecuentes mediante un chatbot integrado."}]}},dO={title:"Without Docutrack vs. With Docutrack",subtitle:"Discover how Docutrack transforms disorganized processes into streamlined workflows.",cta:{title:"Transform your processes today.",button:"Join the waitlist and be part of the change."},without:{title:"Without Docutrack",list:[{title:"Slow and disorganized processes:",body:"Requests get lost in emails, paperwork, or outdated systems."},{title:"Lack of transparency:",body:"Clients don’t know the status of their requests, leading to frustration."},{title:"Inefficient communication:",body:"Internal teams waste time searching for information or coordinating responses."},{title:"Frequent errors:",body:"Lack of tracking and control increases mistakes and delays."},{title:"Manual and error-prone management:",body:"Requests are classified and assigned manually, consuming time and resources."}]},with:{title:"With Docutrack",list:[{title:"Streamlined and organized processes:",body:"Centralize all requests in an intuitive platform."},{title:"Total transparency:",body:"Clients can see the status of their requests in real time."},{title:"Smooth communication:",body:"Comments, notifications, and attachments simplify collaboration."},{title:"Control and accuracy:",body:"Reduces errors and improves response times with clear workflows."},{title:"AI-Powered Assistance:",body:"Automatically classifies and assigns requests to the right department. Detects errors in forms and suggests corrections. Predicts response times based on historical data. Provides instant answers to frequent questions through an integrated chatbot."}]}},fO={title:"Ohne Docutrack vs. Mit Docutrack",subtitle:"Entdecken Sie, wie Docutrack chaotische Prozesse in effiziente Workflows verwandelt.",cta:{title:"Transformieren Sie Ihre Prozesse noch heute.",button:"Melden Sie sich für die Warteliste an und seien Sie Teil des Wandels."},without:{title:"Ohne Docutrack",list:[{title:"Langsame und unorganisierte Prozesse:",body:"Anfragen gehen in E-Mails, Papierkram oder veralteten Systemen verloren."},{title:"Mangelnde Transparenz:",body:"Kunden wissen nicht, in welchem Status sich ihre Anfragen befinden, was zu Frustration führt."},{title:"Ineffiziente Kommunikation:",body:"Interne Teams verschwenden Zeit mit der Suche nach Informationen oder der Koordination von Antworten."},{title:"Häufige Fehler:",body:"Mangelnde Nachverfolgung und Kontrolle erhöhen Fehler und Verzögerungen."},{title:"Manuelle und fehleranfällige Verwaltung:",body:"Anfragen werden manuell klassifiziert und zugewiesen, was Zeit und Ressourcen verbraucht."}]},with:{title:"Mit Docutrack",list:[{title:"Effiziente und organisierte Prozesse:",body:"Zentralisiert alle Anfragen in einer intuitiven Plattform."},{title:"Volle Transparenz:",body:"Kunden können den Status ihrer Anfragen in Echtzeit einsehen."},{title:"Reibungslose Kommunikation:",body:"Kommentare, Benachrichtigungen und Anhänge vereinfachen die Zusammenarbeit."},{title:"Kontrolle und Präzision:",body:"Reduziert Fehler und verbessert Antwortzeiten mit klaren Workflows."},{title:"KI-gestützte Unterstützung:",body:"Klassifiziert und weist Anfragen automatisch der richtigen Abteilung zu.  Erkennt Fehler in Formularen und schlägt Korrekturen vor. Sagt Antwortzeiten basierend auf historischen Daten voraus. Bietet sofortige Antworten auf häufige Fragen durch einen integrierten Chatbot."}]}},pO={es:hO,en:dO,de:fO},mO={id:"solution",class:"py-40 px-4"},gO={class:"container mx-auto"},_O={class:"text-3xl md:text-4xl font-bold text-center mb-10"},yO={class:"text-xl md:text-2xl font-semibold text-center mb-10"},vO={class:"mx-10 grid grid-cols-1 md:grid-cols-2 gap-14"},EO={class:"text-2xl font-semibold mb-4"},wO={class:"space-y-2"},TO={class:"flex flex-col mb-2"},bO={class:"font-semibold text-lg"},IO={class:"text-xs md:text-sm"},AO={class:"text-2xl font-semibold mb-4"},CO={class:"space-y-2"},SO={class:"flex flex-col mb-2"},RO={class:"font-semibold text-lg"},kO={class:"text-xs md:text-sm"},PO={class:"text-center mt-12 text-2xl"},xO={class:"underline underline-offset-8",href:"#hero"},NO={__name:"ProblemsSection",props:["isDarkMode"],setup(t){const{language:e}=os(),n=lt(()=>pO[e.value]);return(s,i)=>(ue(),_e("section",mO,[D("div",gO,[D("h2",_O,ce(n.value.title),1),D("h3",yO,ce(n.value.subtitle),1),D("div",vO,[D("div",{class:Re(["p-6 rounded-lg transition-colors duration-300",t.isDarkMode?"bg-base-300":"bg-base-100 border-2 border-base-200 shadow-2xl"])},[D("h3",EO,ce(n.value.without.title),1),D("ul",wO,[(ue(!0),_e(tt,null,vn(n.value.without.list,r=>(ue(),_e("li",{key:r.title,class:"flex items-start"},[ye(it(oA),{class:"w-6 h-6 text-red mr-2 flex-shrink-0"}),D("p",TO,[D("span",bO,ce(r.title),1),D("span",IO,ce(r.body),1)])]))),128))])],2),D("div",{class:Re(["p-6 rounded-lg transition-colors duration-300",t.isDarkMode?"bg-base-300":"bg-base-100 border-2 border-base-200 shadow-2xl"])},[D("h3",AO,ce(n.value.with.title),1),D("ul",CO,[(ue(!0),_e(tt,null,vn(n.value.with.list,r=>(ue(),_e("li",{key:r.title,class:"flex items-start"},[ye(it(rA),{class:"w-6 h-6 text-primary-200 mr-2 flex-shrink-0"}),D("p",SO,[D("span",RO,ce(r.title),1),D("span",kO,ce(r.body),1)])]))),128))])],2)]),D("div",null,[D("p",PO,[di(ce(n.value.cta.title)+" ",1),D("a",xO,ce(n.value.cta.button),1)])])])]))}},DO={title:"Preguntas Frecuentes",faqs:[{question:"¿Qué tipo de empresas pueden usar Docutrack?",answer:"Docutrack es ideal para empresas públicas o privadas que reciben peticiones, solicitudes o documentos de sus clientes, como oficinas gubernamentales, constructoras, consultorías, y más.",isOpen:!1},{question:"¿Puedo personalizar los flujos de trabajo?",answer:"¡Sí! Docutrack permite adaptar los flujos de trabajo según las necesidades de tu empresa.",isOpen:!1},{question:"¿Es seguro almacenar documentos en Docutrack?",answer:"Absolutamente. Usamos encriptación de última generación y cumplimos con los estándares de seguridad más altos.",isOpen:!1},{question:"¿Cómo funciona el sistema de notificaciones?",answer:"Docutrack envía notificaciones automáticas por email o SMS a tus clientes y equipos internos ante cualquier actualización.",isOpen:!1},{question:"¿Hay planes para diferentes tamaños de empresas?",answer:"Sí, ofrecemos tres planes de suscripción adaptados a las necesidades de cada empresa.",isOpen:!1},{question:"¿Puedo crear mis propios tipos de solicitudes en Docutrack?",answer:"¡Sí! Docutrack te permite crear tipos de solicitudes personalizados con campos específicos (texto, números, fechas, archivos, etc.) y flujos de trabajo adaptados a tus necesidades.",isOpen:!1},{question:"¿Cómo ayuda la IA en Docutrack?",answer:"La IA de Docutrack clasifica solicitudes, detecta errores, predice tiempos de respuesta y ofrece respuestas automáticas, mejorando la eficiencia y la experiencia del usuario.",isOpen:!1}],cta:{title:"¿Tienes más preguntas?",button:"Únete a la waitlist"}},OO={title:"Frequently Asked Questions",faqs:[{question:"What types of businesses can use Docutrack?",answer:"Docutrack is ideal for public or private companies that receive requests, applications, or documents from their clients, such as government offices, construction firms, consultancies, and more.",isOpen:!1},{question:"Can I customize workflows?",answer:"Yes! Docutrack allows you to adapt workflows to your company’s needs.",isOpen:!1},{question:"Is it safe to store documents in Docutrack?",answer:"Absolutely. We use state-of-the-art encryption and comply with the highest security standards.",isOpen:!1},{question:"How does the notification system work?",answer:"Docutrack sends automatic notifications via email or SMS to your clients and internal teams for any updates.",isOpen:!1},{question:"Are there plans for different business sizes?",answer:"Yes, we offer three subscription plans tailored to the needs of each business.",isOpen:!1},{question:"Can I create my own request types in Docutrack?",answer:"Yes! Docutrack allows you to create custom request types with specific fields (text, numbers, dates, files, etc.) and workflows tailored to your needs.",isOpen:!1},{question:"How does AI help in Docutrack?",answer:"Docutrack’s AI classifies requests, detects errors, predicts response times, and provides automated responses, improving efficiency and user experience.",isOpen:!1}],cta:{title:"Have more questions?",button:"Join the waitlist"}},MO={title:"Häufig gestellte Fragen (FAQ)",faqs:[{question:"Welche Arten von Unternehmen können Docutrack nutzen?",answer:"Docutrack ist ideal für öffentliche oder private Unternehmen, die Anfragen, Anträge oder Dokumente von ihren Kunden erhalten, wie z. B. Behörden, Bauunternehmen, Beratungsfirmen und mehr.",isOpen:!1},{question:"Kann ich Workflows anpassen?",answer:"Ja! Docutrack ermöglicht es Ihnen, Workflows an die Bedürfnisse Ihres Unternehmens anzupassen.",isOpen:!1},{question:"Ist es sicher, Dokumente in Docutrack zu speichern?",answer:"Absolut. Wir verwenden modernste Verschlüsselung und erfüllen die höchsten Sicherheitsstandards.",isOpen:!1},{question:"Wie funktioniert das Benachrichtigungssystem?",answer:"Docutrack sendet automatische Benachrichtigungen per E-Mail oder SMS an Ihre Kunden und internen Teams bei allen Aktualisierungen.",isOpen:!1},{question:"Gibt es Pläne für verschiedene Unternehmensgrößen?",answer:"Ja, wir bieten drei Abonnementpläne an, die auf die Bedürfnisse jedes Unternehmens zugeschnitten sind.",isOpen:!1},{question:"Kann ich meine eigenen Anfragetypen in Docutrack erstellen?",answer:"Ja! Docutrack ermöglicht es Ihnen, benutzerdefinierte Anfragetypen mit spezifischen Feldern (Text, Zahlen, Datum, Dateien usw.) und Workflows zu erstellen, die auf Ihre Bedürfnisse zugeschnitten sind.",isOpen:!1},{question:"Wie hilft KI bei Docutrack?",answer:"Die KI von Docutrack klassifiziert Anfragen, erkennt Fehler, sagt Antwortzeiten voraus und bietet automatisierte Antworten, was die Effizienz und das Benutzererlebnis verbessert.",isOpen:!1}],cta:{title:"Haben Sie weitere Fragen?",button:"Zur Warteliste hinzufügen"}},Dg={es:DO,en:OO,de:MO},LO={class:"container mx-auto"},VO={class:"text-3xl md:text-4xl font-bold text-center mb-12"},FO={class:"space-y-6"},UO=["onClick"],BO={class:"text-xl font-semibold"},$O={class:"text-center mt-12 text-2xl"},zO={class:"underline underline-offset-8",href:"#hero"},jO={__name:"FaqSection",props:["isDarkMode"],setup(t){const{language:e}=os(),n=Bt(Dg[e.value]),s=i=>{n.value.faqs[i].isOpen=!n.value.faqs[i].isOpen};return si(e,i=>{n.value=Dg[i]}),(i,r)=>(ue(),_e("section",{id:"faq",class:Re(["py-20 px-4 transition-colors duration-300",t.isDarkMode?"bg-base-300":"bg-base-200"])},[D("div",LO,[D("h2",VO,ce(n.value.title),1),D("div",FO,[(ue(!0),_e(tt,null,vn(n.value.faqs,(o,l)=>(ue(),_e("div",{key:l,class:Re(["p-6 rounded-lg transition-colors duration-300",t.isDarkMode?"bg-base-400":"bg-base-100"])},[D("button",{onClick:c=>s(l),class:"flex justify-between items-center w-full text-left"},[D("span",BO,ce(o.question),1),ye(it(iA),{class:Re(["w-6 h-6 transition-transform",{"transform rotate-180":o.isOpen}])},null,8,["class"])],8,UO),f_(D("p",{class:Re(["mt-4",t.isDarkMode?"text-primary-100":"text-base-300"])},ce(o.answer),3),[[mI,o.isOpen]])],2))),128))]),D("div",null,[D("p",$O,[di(ce(n.value.cta.title)+" ",1),D("a",zO,ce(n.value.cta.button),1)])])])],2))}},qO={title:"Precios",subtitle:"Elige el plan que mejor se adapte a las necesidades de tu equipo.",buttonText:"Elegir Plan",plans:[{name:"Básico",description:"Para equipos pequeños",price:"COP $123.881/mes",features:["Hasta 80 solicitudes/mes","Clientes ilimitados","Hasta 3 tipos de solicitudes personalizadas","Campos básicos (texto, números, fechas)","Hasta 5 usuarios","10GB de almacenamiento","Seguimiento básico de documentos","Notificaciones por correo electrónico","Soporte por correo electrónico"]},{name:"Pro",description:"Para negocios en crecimiento",price:"COP $227.144/mes",features:["Hasta 250 solicitudes/mes","Clientes ilimitados","Hasta 10 tipos de solicitudes personalizadas","Campos avanzados (listas desplegables, archivos adjuntos)","Hasta 20 usuarios","100GB de almacenamiento","Seguimiento avanzado de documentos","Notificaciones por correo electrónico y SMS","Soporte prioritario","Branding personalizado"]},{name:"Empresa",description:"Para grandes organizaciones",price:"Personalizado",features:["Solicitudes ilimitadas/mes","Clientes ilimitados","Tipos de solicitudes personalizadas ilimitadas","Campos y flujos de trabajo completamente personalizables","Usuarios ilimitados","Almacenamiento ilimitado","Funciones de seguridad avanzadas","Notificaciones por correo electrónico, SMS y WhatsApp","Soporte telefónico premium 24/7","Gerente de cuenta dedicado"]}],cta:{title:"Asegura tu acceso a Docutrack con un descuento exclusivo para los primeros usuarios.",button:"Únete a la lista de espera hoy"}},HO={title:"Pricing",subtitle:"Choose the plan that best fits your team's needs.",buttonText:"Choose Plan",plans:[{name:"Basic",description:"For small teams",price:"USD $30/month",features:["Up to 80 requests/month","Unlimited clients","Up to 3 custom request types","Basic fields (text, numbers, dates)","Up to 5 users","10GB storage","Basic document tracking","Email notifications","Email support"]},{name:"Pro",description:"For growing businesses",price:"USD $55/month",features:["Up to 250 requests/month","Unlimited clients","Up to 10 custom request types","Advanced fields (dropdowns, file attachments)","Up to 20 users","100GB storage","Advanced document tracking","Email and SMS notifications","Priority support","Custom branding"]},{name:"Enterprise",description:"For large organizations",price:"Custom",features:["Unlimited requests/month","Unlimited clients","Unlimited custom request types","Fully customizable fields and workflows","Unlimited users","Unlimited storage","Advanced security features","Email, SMS, and WhatsApp notifications","24/7 premium phone support","Dedicated account manager"]}],cta:{title:"Secure your access to Docutrack with an exclusive discount for early users.",button:"Join the waitlist today"}},WO={title:"Preise",subtitle:"Wählen Sie den Plan, der am besten zu den Anforderungen Ihres Teams passt.",buttonText:"Plan auswählen",plans:[{name:"Basic",description:"Für kleine Teams",price:"EUR $28,85/Monat",features:["Bis zu 80 Anfragen/Monat","Unbegrenzte Kunden","Bis zu 3 benutzerdefinierte Anfragentypen","Grundlegende Felder (Text, Zahlen, Daten)","Bis zu 5 Benutzer","10GB Speicher","Grundlegende Dokumentenverfolgung","E-Mail-Benachrichtigungen","E-Mail-Support"]},{name:"Pro",description:"Für wachsende Unternehmen",price:"EUR $52,90/Monat",features:["Bis zu 250 Anfragen/Monat","Unbegrenzte Kunden","Bis zu 10 benutzerdefinierte Anfragentypen","Erweiterte Felder (Dropdowns, Dateianhänge)","Bis zu 20 Benutzer","100GB Speicher","Erweiterte Dokumentenverfolgung","E-Mail- und SMS-Benachrichtigungen","Priorisierter Support","Benutzerdefiniertes Branding"]},{name:"Enterprise",description:"Für große Organisationen",price:"Individuell",features:["Unbegrenzte Anfragen/Monat","Unbegrenzte Kunden","Unbegrenzte benutzerdefinierte Anfragentypen","Vollständig anpassbare Felder und Workflows","Unbegrenzte Benutzer","Unbegrenzter Speicher","Erweiterte Sicherheitsfunktionen","E-Mail-, SMS- und WhatsApp-Benachrichtigungen","24/7 Premium-Telefonsupport","Dedizierter Account-Manager"]}],cta:{title:"Sichern Sie sich Ihren Zugang zu Docutrack mit einem exklusiven Rabatt für frühe Nutzer.",button:"Treten Sie noch heute der Warteliste bei"}},KO={es:qO,en:HO,de:WO},GO={id:"pricing",class:"py-24 px-4"},QO={class:"container mx-auto"},YO={class:"text-3xl md:text-4xl font-bold text-center mb-8"},XO={class:"text-xl md:text-2xl font-semibold text-center mb-10"},JO={class:"grid grid-cols-1 md:grid-cols-3 gap-8"},ZO={class:"text-2xl font-semibold mb-2"},eM={class:"text-4xl font-bold mb-6"},tM={class:"mb-8 flex-grow"},nM={href:"#waiting-list",class:"bg-primary-200 text-base-400 px-6 py-3 rounded-full font-semibold text-center hover:bg-primary-300 transition-colors"},sM={class:"text-center mt-12 text-xl"},iM={class:"underline underline-offset-8",href:"#hero"},rM={__name:"PricingSection",props:["isDarkMode"],setup(t){const{language:e}=os(),n=lt(()=>KO[e.value]);return(s,i)=>(ue(),_e("section",GO,[D("div",QO,[D("h2",YO,ce(n.value.title),1),D("h3",XO,ce(n.value.subtitle),1),D("div",JO,[(ue(!0),_e(tt,null,vn(n.value.plans,r=>(ue(),_e("div",{key:r.name,class:Re(["p-6 rounded-lg flex flex-col transition-colors duration-300",t.isDarkMode?"bg-base-300":"bg-base-100 border-2 border-base-200 shadow-2xl"])},[D("h3",ZO,ce(r.name),1),D("p",{class:Re([t.isDarkMode?"text-primary-100":"text-base-300","mb-4"])},ce(r.description),3),D("p",eM,ce(r.price),1),D("ul",tM,[(ue(!0),_e(tt,null,vn(r.features,o=>(ue(),_e("li",{key:o,class:"flex items-center mb-2"},[ye(it(sA),{class:"w-5 h-5 text-primary-200 mr-2"}),D("span",null,ce(o),1)]))),128))]),D("a",nM,ce(n.value.buttonText),1)],2))),128))]),D("div",null,[D("p",sM,[di(ce(n.value.cta.title)+" ",1),D("a",iM,ce(n.value.cta.button),1)])])])]))}},oM={title:"Docutrack se adapta a tus necesidades",subtitle:"Docutrack no es solo una herramienta, es una solución flexible que se ajusta a tus procesos. Aquí te mostramos cómo diferentes industrias pueden beneficiarse",features:[{title:"Gobiernos Locales",description:"Crea solicitudes para permisos de construcción, quejas, o consultas de normativa urbana.",icon:"Landmark"},{title:"Constructoras",description:"Gestiona solicitudes de aprobación de planos, inspecciones o certificaciones.",icon:"HardHat"},{title:"Consultorías",description:"Personaliza formularios para recopilar datos específicos de tus clientes.",icon:"Building2"},{title:"Empresas de Servicios",description:"Recibe y gestiona solicitudes de soporte técnico, facturación o contratación.",icon:"BaggageClaim"}],cta:{title:"Descubre cómo Docutrack puede personalizarse para tu industria.",button:"Únete a la waitlist."}},aM={title:"Docutrack adapts to your needs",subtitle:"Docutrack is not just a tool, it's a flexible solution that adapts to your processes. Here's how different industries can benefit",features:[{title:"Local Governments",description:"Create requests for construction permits, complaints, or urban planning consultations.",icon:"Landmark"},{title:"Construction Companies",description:"Manage requests for plan approvals, inspections, or certifications.",icon:"HardHat"},{title:"Consulting Firms",description:"Customize forms to collect specific data from your clients.",icon:"Building2"},{title:"Service Companies",description:"Receive and manage requests for technical support, billing, or hiring.",icon:"BaggageClaim"}],cta:{title:"Discover how Docutrack can be customized for your industry.",button:"Join the waitlist."}},lM={title:"Docutrack passt sich Ihren Bedürfnissen an",subtitle:"Docutrack ist nicht nur ein Werkzeug, sondern eine flexible Lösung, die sich Ihren Prozessen anpasst. Hier erfahren Sie, wie verschiedene Branchen davon profitieren können",features:[{title:"Kommunen",description:"Erstellen Sie Anfragen für Baugenehmigungen, Beschwerden oder städtebauliche Beratungen.",icon:"Landmark"},{title:"Bauunternehmen",description:"Verwalten Sie Anfragen für Planungs- und Inspektionsgenehmigungen oder Zertifizierungen.",icon:"HardHat"},{title:"Beratungsunternehmen",description:"Passen Sie Formulare an, um spezifische Daten von Ihren Kunden zu erfassen.",icon:"Building2"},{title:"Dienstleistungsunternehmen",description:"Empfangen und verwalten Sie Anfragen für technischen Support, Abrechnung oder Einstellung.",icon:"BaggageClaim"}],cta:{title:"Erfahren Sie, wie Docutrack für Ihre Branche angepasst werden kann.",button:"Melden Sie sich auf der Warteliste an."}},cM={es:oM,en:aM,de:lM},uM={class:"container mx-auto"},hM={class:"text-3xl md:text-4xl font-bold text-center mb-10"},dM={class:"text-xl md:text-2xl font-semibold text-center mb-10"},fM={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"},pM={class:"text-xl font-semibold mb-2"},mM={__name:"UseCasesSection",props:["isDarkMode"],setup(t){const{language:e}=os(),n={Landmark:dA,HardHat:cA,Building2:tA,BaggageClaim:J0},s=lt(()=>cM[e.value]);return(i,r)=>(ue(),_e("section",{id:"use-cases",class:Re(["py-20 px-4 transition-colors duration-300",t.isDarkMode?"bg-base-300":"bg-base-200"])},[D("div",uM,[D("h2",hM,ce(s.value.title),1),D("h3",dM,ce(s.value.subtitle),1),D("div",fM,[(ue(!0),_e(tt,null,vn(s.value.features,o=>(ue(),_e("div",{key:o.title,class:Re(["p-6 rounded-lg transition-colors duration-300",t.isDarkMode?"bg-base-400":"bg-base-100"])},[(ue(),qi(S_(n[o.icon]),{class:"w-12 h-12 text-base-200 mb-4"})),D("h3",pM,ce(o.title),1),D("p",{class:Re(t.isDarkMode?"text-primary-100":"text-base-300")},ce(o.description),3)],2))),128))])])],2))}},gM={id:"waiting-list",class:"pt-28 pb-14 md:py-12 px-4"},_M={class:"container mx-auto w-auto md:w-3/5 flex flex-col"},yM={class:"text-2xl font-semibold text-center"},vM={class:"text-center my-6 w-full"},EM={__name:"WaitingListSection",props:["isDarkMode"],setup(t){const{language:e}=os(),n=lt(()=>zw[e.value]);return(s,i)=>(ue(),_e("div",gM,[D("div",_M,[D("h2",yM,ce(n.value.title),1),D("p",vM,ce(n.value.subtitle),1),ye($w,{cta:n.value.cta,isDarkMode:t.isDarkMode},null,8,["cta","isDarkMode"])])]))}},wM="/assets/logo-css-peq-removebg-CwW5Ofir.png",TM={class:"container mx-auto flex flex-col justify-center items-center md:flex-row flex-wrap"},bM={class:"flex flex-col gap-8 md:container md:flex-row md:items-center md:justify-between my-4 p-2"},IM={class:"flex flex-row justify-center gap-8"},AM={href:"https://instagram.com/docutrack",target:"_blank",rel:"noopener noreferrer",class:"text-xl"},CM={href:"https://linkedin.com/company/docutrack",target:"_blank",rel:"noopener noreferrer",class:"text-xl"},SM={class:"px-2 flex flex-col md:flex-row md:container md:items-center md:justify-between"},RM={class:"py-4"},kM={class:"flex flex-col items-center gap-6 text-md font-semibold md:flex-row"},PM=["href"],xM={class:"py-4 text-center text-sm flex flex-col items-center md:flex-row md:justify-between gap-6"},NM={class:"flex flex-row justify-start items-center gap-2"},jw={__name:"FooterComponent",props:["isDarkMode","navItems"],setup(t){return(e,n)=>(ue(),_e("footer",{class:Re(["py-4 px-4 transition-colors duration-300",t.isDarkMode?"bg-base-300":"bg-base-200"])},[D("div",TM,[D("div",bM,[n[0]||(n[0]=D("a",{class:"text-2xl underline-offset-1",mailto:"hello@docutrack.cloud"},"hello@docutrack.cloud",-1)),D("div",IM,[D("a",AM,[ye(it(hA),{class:"h-6 w-auto"})]),D("a",CM,[ye(it(fA),{class:"h-6 w-auto"})])])]),D("div",SM,[D("div",RM,[D("nav",kM,[(ue(!0),_e(tt,null,vn(t.navItems,s=>(ue(),_e("a",{key:s.name,href:`#${s.link.toLowerCase()}`},ce(s.name),9,PM))),128))])]),D("div",xM,[D("div",NM,[D("span",null,"© "+ce(new Date().getFullYear())+" Docutrack - designed with",1),ye(it(uA),{class:"h-4 w-auto my-auto text-red"}),n[1]||(n[1]=D("span",null,"Worldwide",-1))]),n[2]||(n[2]=D("img",{src:wM,alt:"Consultoría y Servicios de Software S.A.S.",class:"h-10 w-auto"},null,-1))])])])],2))}},DM={__name:"HomeView",setup(t){const{language:e}=os(),n=Bt(!1),s=lt(()=>K0[e.value]),i=()=>{n.value=!n.value};return(r,o)=>(ue(),_e("div",{class:Re(["min-h-screen transition-colors duration-300",n.value?"bg-base-400 text-base-100":"bg-base-100 text-base-400"])},[ye(my,{isDarkMode:n.value,navItems:s.value,onSwitchTheme:i},null,8,["isDarkMode","navItems"]),ye(tO,{isDarkMode:n.value},null,8,["isDarkMode"]),ye(uO,{isDarkMode:n.value},null,8,["isDarkMode"]),ye(NO,{isDarkMode:n.value},null,8,["isDarkMode"]),ye(jO,{isDarkMode:n.value},null,8,["isDarkMode"]),ye(rM,{isDarkMode:n.value},null,8,["isDarkMode"]),ye(mM,{isDarkMode:n.value},null,8,["isDarkMode"]),ye(EM,{isDarkMode:n.value},null,8,["isDarkMode"]),ye(jw,{isDarkMode:n.value,navItems:s.value},null,8,["isDarkMode","navItems"])],2))}},OM={class:"px-4 sm:px-6 lg:px-8"},MM={class:"mt-8 flow-root"},LM={class:"-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},VM={class:"inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"},FM={class:"min-w-full divide-y divide-gray-300"},UM={class:"divide-y divide-gray-200"},BM={class:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},$M={class:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},zM={class:"relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"},jM={href:"#",class:"text-indigo-600 hover:text-indigo-900"},qM={class:"sr-only"},HM={__name:"WaitlistView",setup(t){Nw(Fv(db,"waitlistCollection"));const e=Bt(!1),n=["Features","Solution","FAQ","Pricing"],s=()=>{e.value=!e.value};return(i,r)=>(ue(),_e("div",{class:Re(["min-h-screen transition-colors duration-300",e.value?"bg-base-400 text-base-100":"bg-base-100 text-base-400"])},[ye(my,{isDarkMode:e.value,navItems:n,onSwitchTheme:s},null,8,["isDarkMode"]),D("div",null,[D("div",OM,[D("div",MM,[D("div",LM,[D("div",VM,[D("table",FM,[r[1]||(r[1]=D("thead",null,[D("tr",null,[D("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},"Email"),D("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},"Date"),D("th",{scope:"col",class:"relative py-3.5 pl-3 pr-4 sm:pr-0"},[D("span",{class:"sr-only"},"Edit")])])],-1)),D("tbody",UM,[(ue(!0),_e(tt,null,vn(i.people,o=>(ue(),_e("tr",{key:o.email},[D("td",BM,ce(o.email),1),D("td",$M,ce(o.date),1),D("td",zM,[D("a",jM,[r[0]||(r[0]=di("Edit")),D("span",qM,", "+ce(o.name),1)])])]))),128))])])])])])])]),ye(jw,{isDarkMode:e.value,navItems:n},null,8,["isDarkMode"])],2))}},WM={class:"grid min-h-full place-items-center bg-white px-6 py-32"},KM={class:"text-center"},GM={class:"mt-10"},QM={__name:"NotFoundView",setup(t){return(e,n)=>(ue(),_e("main",WM,[D("div",KM,[n[1]||(n[1]=D("h2",{class:"text-5xl font-semibold text-green-600"},"404",-1)),n[2]||(n[2]=D("h1",{class:"mt-4 text-7xl font-semibold text-gray-900"},"Page not found",-1)),n[3]||(n[3]=D("p",{class:"mt-6 text-lg font-medium text-gray-500"},"Sorry, we couldn’t find the page you’re looking for.",-1)),D("div",GM,[ye(it(py),{to:"/",class:"rounded-md bg-green-600 px-3 py-3 font-semibold text-white hover:bg-green-500"},{default:La(()=>n[0]||(n[0]=[di("Go back home")])),_:1})])])]))}},qw=z0({history:y0("/"),routes:[{path:"/",name:"home",component:DM},{path:"/waitlist",name:"waitlist",component:HM},{path:"/:catchall(.*)*",name:"not-found",component:QM}]}),rc=LI($I);rc.use(p2,{firebaseApp:Dw});rc.use(qw);rc.use(L2,{appName:"Docutrack - Landing Page",pageTrackerScreenviewEnabled:!0,config:{id:"G-8RQMJTXMLW"}},qw);rc.mount("#app");
