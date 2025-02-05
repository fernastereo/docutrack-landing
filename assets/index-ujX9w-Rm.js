(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ju(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ue={},Sr=[],kn=()=>{},OT=()=>!1,hl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Zu=t=>t.startsWith("onUpdate:"),ht=Object.assign,eh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},MT=Object.prototype.hasOwnProperty,De=(t,e)=>MT.call(t,e),ce=Array.isArray,Pr=t=>fl(t)==="[object Map]",dg=t=>fl(t)==="[object Set]",fe=t=>typeof t=="function",Je=t=>typeof t=="string",Ms=t=>typeof t=="symbol",We=t=>t!==null&&typeof t=="object",pg=t=>(We(t)||fe(t))&&fe(t.then)&&fe(t.catch),mg=Object.prototype.toString,fl=t=>mg.call(t),LT=t=>fl(t).slice(8,-1),gg=t=>fl(t)==="[object Object]",th=t=>Je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Fi=Ju(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),dl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},VT=/-(\w)/g,rn=dl(t=>t.replace(VT,(e,n)=>n?n.toUpperCase():"")),FT=/\B([A-Z])/g,or=dl(t=>t.replace(FT,"-$1").toLowerCase()),pl=dl(t=>t.charAt(0).toUpperCase()+t.slice(1)),hc=dl(t=>t?`on${pl(t)}`:""),Ts=(t,e)=>!Object.is(t,e),pa=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},_g=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Gc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},UT=t=>{const e=Je(t)?Number(t):NaN;return isNaN(e)?t:e};let md;const ml=()=>md||(md=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function nh(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Je(s)?qT(s):nh(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(Je(t)||We(t))return t}const BT=/;(?![^(]*\))/g,$T=/:([^]+)/,jT=/\/\*[^]*?\*\//g;function qT(t){const e={};return t.replace(jT,"").split(BT).forEach(n=>{if(n){const s=n.split($T);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ne(t){let e="";if(Je(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const s=Ne(t[n]);s&&(e+=s+" ")}else if(We(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const HT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",WT=Ju(HT);function yg(t){return!!t||t===""}const Eg=t=>!!(t&&t.__v_isRef===!0),yt=t=>Je(t)?t:t==null?"":ce(t)||We(t)&&(t.toString===mg||!fe(t.toString))?Eg(t)?yt(t.value):JSON.stringify(t,vg,2):String(t),vg=(t,e)=>Eg(e)?vg(t,e.value):Pr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[fc(s,i)+" =>"]=r,n),{})}:dg(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>fc(n))}:Ms(e)?fc(e):We(e)&&!ce(e)&&!gg(e)?String(e):e,fc=(t,e="")=>{var n;return Ms(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Lt;class zT{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Lt,!e&&Lt&&(this.index=(Lt.scopes||(Lt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Lt;try{return Lt=this,e()}finally{Lt=n}}}on(){Lt=this}off(){Lt=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Tg(){return Lt}function KT(t,e=!1){Lt&&Lt.cleanups.push(t)}let $e;const dc=new WeakSet;class wg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Lt&&Lt.active&&Lt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,dc.has(this)&&(dc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||bg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,gd(this),Ag(this);const e=$e,n=dn;$e=this,dn=!0;try{return this.fn()}finally{Cg(this),$e=e,dn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ih(e);this.deps=this.depsTail=void 0,gd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?dc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Qc(this)&&this.run()}get dirty(){return Qc(this)}}let Ig=0,Ui,Bi;function bg(t,e=!1){if(t.flags|=8,e){t.next=Bi,Bi=t;return}t.next=Ui,Ui=t}function sh(){Ig++}function rh(){if(--Ig>0)return;if(Bi){let e=Bi;for(Bi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ui;){let e=Ui;for(Ui=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Ag(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Cg(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),ih(s),GT(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function Qc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Rg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Rg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===no))return;t.globalVersion=no;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Qc(t)){t.flags&=-3;return}const n=$e,s=dn;$e=t,dn=!0;try{Ag(t);const r=t.fn(t._value);(e.version===0||Ts(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{$e=n,dn=s,Cg(t),t.flags&=-3}}function ih(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)ih(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function GT(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let dn=!0;const Sg=[];function Ls(){Sg.push(dn),dn=!1}function Vs(){const t=Sg.pop();dn=t===void 0?!0:t}function gd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=$e;$e=void 0;try{e()}finally{$e=n}}}let no=0;class QT{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class oh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!$e||!dn||$e===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==$e)n=this.activeLink=new QT($e,this),$e.deps?(n.prevDep=$e.depsTail,$e.depsTail.nextDep=n,$e.depsTail=n):$e.deps=$e.depsTail=n,Pg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=$e.depsTail,n.nextDep=void 0,$e.depsTail.nextDep=n,$e.depsTail=n,$e.deps===n&&($e.deps=s)}return n}trigger(e){this.version++,no++,this.notify(e)}notify(e){sh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{rh()}}}function Pg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Pg(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Yc=new WeakMap,Zs=Symbol(""),Xc=Symbol(""),so=Symbol("");function St(t,e,n){if(dn&&$e){let s=Yc.get(t);s||Yc.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new oh),r.map=s,r.key=n),r.track()}}function zn(t,e,n,s,r,i){const o=Yc.get(t);if(!o){no++;return}const l=c=>{c&&c.trigger()};if(sh(),e==="clear")o.forEach(l);else{const c=ce(t),u=c&&th(n);if(c&&n==="length"){const h=Number(s);o.forEach((d,m)=>{(m==="length"||m===so||!Ms(m)&&m>=h)&&l(d)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(so)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Zs)),Pr(t)&&l(o.get(Xc)));break;case"delete":c||(l(o.get(Zs)),Pr(t)&&l(o.get(Xc)));break;case"set":Pr(t)&&l(o.get(Zs));break}}rh()}function yr(t){const e=Pe(t);return e===t?e:(St(e,"iterate",so),sn(t)?e:e.map(Pt))}function gl(t){return St(t=Pe(t),"iterate",so),t}const YT={__proto__:null,[Symbol.iterator](){return pc(this,Symbol.iterator,Pt)},concat(...t){return yr(this).concat(...t.map(e=>ce(e)?yr(e):e))},entries(){return pc(this,"entries",t=>(t[1]=Pt(t[1]),t))},every(t,e){return Bn(this,"every",t,e,void 0,arguments)},filter(t,e){return Bn(this,"filter",t,e,n=>n.map(Pt),arguments)},find(t,e){return Bn(this,"find",t,e,Pt,arguments)},findIndex(t,e){return Bn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Bn(this,"findLast",t,e,Pt,arguments)},findLastIndex(t,e){return Bn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Bn(this,"forEach",t,e,void 0,arguments)},includes(...t){return mc(this,"includes",t)},indexOf(...t){return mc(this,"indexOf",t)},join(t){return yr(this).join(t)},lastIndexOf(...t){return mc(this,"lastIndexOf",t)},map(t,e){return Bn(this,"map",t,e,void 0,arguments)},pop(){return wi(this,"pop")},push(...t){return wi(this,"push",t)},reduce(t,...e){return _d(this,"reduce",t,e)},reduceRight(t,...e){return _d(this,"reduceRight",t,e)},shift(){return wi(this,"shift")},some(t,e){return Bn(this,"some",t,e,void 0,arguments)},splice(...t){return wi(this,"splice",t)},toReversed(){return yr(this).toReversed()},toSorted(t){return yr(this).toSorted(t)},toSpliced(...t){return yr(this).toSpliced(...t)},unshift(...t){return wi(this,"unshift",t)},values(){return pc(this,"values",Pt)}};function pc(t,e,n){const s=gl(t),r=s[e]();return s!==t&&!sn(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const XT=Array.prototype;function Bn(t,e,n,s,r,i){const o=gl(t),l=o!==t&&!sn(t),c=o[e];if(c!==XT[e]){const d=c.apply(t,i);return l?Pt(d):d}let u=n;o!==t&&(l?u=function(d,m){return n.call(this,Pt(d),m,t)}:n.length>2&&(u=function(d,m){return n.call(this,d,m,t)}));const h=c.call(o,u,s);return l&&r?r(h):h}function _d(t,e,n,s){const r=gl(t);let i=n;return r!==t&&(sn(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,Pt(l),c,t)}),r[e](i,...s)}function mc(t,e,n){const s=Pe(t);St(s,"iterate",so);const r=s[e](...n);return(r===-1||r===!1)&&ch(n[0])?(n[0]=Pe(n[0]),s[e](...n)):r}function wi(t,e,n=[]){Ls(),sh();const s=Pe(t)[e].apply(t,n);return rh(),Vs(),s}const JT=Ju("__proto__,__v_isRef,__isVue"),kg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ms));function ZT(t){Ms(t)||(t=String(t));const e=Pe(this);return St(e,"has",t),e.hasOwnProperty(t)}class Ng{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?cw:Mg:i?Og:Dg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=ce(e);if(!r){let c;if(o&&(c=YT[n]))return c;if(n==="hasOwnProperty")return ZT}const l=Reflect.get(e,n,Et(e)?e:s);return(Ms(n)?kg.has(n):JT(n))||(r||St(e,"get",n),i)?l:Et(l)?o&&th(n)?l:l.value:We(l)?r?Vg(l):_l(l):l}}class xg extends Ng{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const c=er(i);if(!sn(s)&&!er(s)&&(i=Pe(i),s=Pe(s)),!ce(e)&&Et(i)&&!Et(s))return c?!1:(i.value=s,!0)}const o=ce(e)&&th(n)?Number(n)<e.length:De(e,n),l=Reflect.set(e,n,s,Et(e)?e:r);return e===Pe(r)&&(o?Ts(s,i)&&zn(e,"set",n,s):zn(e,"add",n,s)),l}deleteProperty(e,n){const s=De(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&zn(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Ms(n)||!kg.has(n))&&St(e,"has",n),s}ownKeys(e){return St(e,"iterate",ce(e)?"length":Zs),Reflect.ownKeys(e)}}class ew extends Ng{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const tw=new xg,nw=new ew,sw=new xg(!0);const Jc=t=>t,Zo=t=>Reflect.getPrototypeOf(t);function rw(t,e,n){return function(...s){const r=this.__v_raw,i=Pe(r),o=Pr(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),h=n?Jc:e?Zc:Pt;return!e&&St(i,"iterate",c?Xc:Zs),{next(){const{value:d,done:m}=u.next();return m?{value:d,done:m}:{value:l?[h(d[0]),h(d[1])]:h(d),done:m}},[Symbol.iterator](){return this}}}}function ea(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function iw(t,e){const n={get(r){const i=this.__v_raw,o=Pe(i),l=Pe(r);t||(Ts(r,l)&&St(o,"get",r),St(o,"get",l));const{has:c}=Zo(o),u=e?Jc:t?Zc:Pt;if(c.call(o,r))return u(i.get(r));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&St(Pe(r),"iterate",Zs),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=Pe(i),l=Pe(r);return t||(Ts(r,l)&&St(o,"has",r),St(o,"has",l)),r===l?i.has(r):i.has(r)||i.has(l)},forEach(r,i){const o=this,l=o.__v_raw,c=Pe(l),u=e?Jc:t?Zc:Pt;return!t&&St(c,"iterate",Zs),l.forEach((h,d)=>r.call(i,u(h),u(d),o))}};return ht(n,t?{add:ea("add"),set:ea("set"),delete:ea("delete"),clear:ea("clear")}:{add(r){!e&&!sn(r)&&!er(r)&&(r=Pe(r));const i=Pe(this);return Zo(i).has.call(i,r)||(i.add(r),zn(i,"add",r,r)),this},set(r,i){!e&&!sn(i)&&!er(i)&&(i=Pe(i));const o=Pe(this),{has:l,get:c}=Zo(o);let u=l.call(o,r);u||(r=Pe(r),u=l.call(o,r));const h=c.call(o,r);return o.set(r,i),u?Ts(i,h)&&zn(o,"set",r,i):zn(o,"add",r,i),this},delete(r){const i=Pe(this),{has:o,get:l}=Zo(i);let c=o.call(i,r);c||(r=Pe(r),c=o.call(i,r)),l&&l.call(i,r);const u=i.delete(r);return c&&zn(i,"delete",r,void 0),u},clear(){const r=Pe(this),i=r.size!==0,o=r.clear();return i&&zn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=rw(r,t,e)}),n}function ah(t,e){const n=iw(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(De(n,r)&&r in s?n:s,r,i)}const ow={get:ah(!1,!1)},aw={get:ah(!1,!0)},lw={get:ah(!0,!1)};const Dg=new WeakMap,Og=new WeakMap,Mg=new WeakMap,cw=new WeakMap;function uw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hw(t){return t.__v_skip||!Object.isExtensible(t)?0:uw(LT(t))}function _l(t){return er(t)?t:lh(t,!1,tw,ow,Dg)}function Lg(t){return lh(t,!1,sw,aw,Og)}function Vg(t){return lh(t,!0,nw,lw,Mg)}function lh(t,e,n,s,r){if(!We(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=hw(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return r.set(t,l),l}function kr(t){return er(t)?kr(t.__v_raw):!!(t&&t.__v_isReactive)}function er(t){return!!(t&&t.__v_isReadonly)}function sn(t){return!!(t&&t.__v_isShallow)}function ch(t){return t?!!t.__v_raw:!1}function Pe(t){const e=t&&t.__v_raw;return e?Pe(e):t}function fw(t){return!De(t,"__v_skip")&&Object.isExtensible(t)&&_g(t,"__v_skip",!0),t}const Pt=t=>We(t)?_l(t):t,Zc=t=>We(t)?Vg(t):t;function Et(t){return t?t.__v_isRef===!0:!1}function zt(t){return Ug(t,!1)}function Fg(t){return Ug(t,!0)}function Ug(t,e){return Et(t)?t:new dw(t,e)}class dw{constructor(e,n){this.dep=new oh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Pe(e),this._value=n?e:Pt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||sn(e)||er(e);e=s?e:Pe(e),Ts(e,n)&&(this._rawValue=e,this._value=s?e:Pt(e),this.dep.trigger())}}function vt(t){return Et(t)?t.value:t}function Hn(t){return fe(t)?t():vt(t)}const pw={get:(t,e,n)=>e==="__v_raw"?t:vt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Et(r)&&!Et(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Bg(t){return kr(t)?t:new Proxy(t,pw)}class mw{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new oh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=no-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&$e!==this)return bg(this,!0),!0}get value(){const e=this.dep.track();return Rg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function gw(t,e,n=!1){let s,r;return fe(t)?s=t:(s=t.get,r=t.set),new mw(s,r,n)}const ta={},Ra=new WeakMap;let zs;function _w(t,e=!1,n=zs){if(n){let s=Ra.get(n);s||Ra.set(n,s=[]),s.push(t)}}function yw(t,e,n=Ue){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:l,call:c}=n,u=O=>r?O:sn(O)||r===!1||r===0?Kn(O,1):Kn(O);let h,d,m,g,A=!1,S=!1;if(Et(t)?(d=()=>t.value,A=sn(t)):kr(t)?(d=()=>u(t),A=!0):ce(t)?(S=!0,A=t.some(O=>kr(O)||sn(O)),d=()=>t.map(O=>{if(Et(O))return O.value;if(kr(O))return u(O);if(fe(O))return c?c(O,2):O()})):fe(t)?e?d=c?()=>c(t,2):t:d=()=>{if(m){Ls();try{m()}finally{Vs()}}const O=zs;zs=h;try{return c?c(t,3,[g]):t(g)}finally{zs=O}}:d=kn,e&&r){const O=d,ee=r===!0?1/0:r;d=()=>Kn(O(),ee)}const N=Tg(),V=()=>{h.stop(),N&&N.active&&eh(N.effects,h)};if(i&&e){const O=e;e=(...ee)=>{O(...ee),V()}}let F=S?new Array(t.length).fill(ta):ta;const D=O=>{if(!(!(h.flags&1)||!h.dirty&&!O))if(e){const ee=h.run();if(r||A||(S?ee.some((te,C)=>Ts(te,F[C])):Ts(ee,F))){m&&m();const te=zs;zs=h;try{const C=[ee,F===ta?void 0:S&&F[0]===ta?[]:F,g];c?c(e,3,C):e(...C),F=ee}finally{zs=te}}}else h.run()};return l&&l(D),h=new wg(d),h.scheduler=o?()=>o(D,!1):D,g=O=>_w(O,!1,h),m=h.onStop=()=>{const O=Ra.get(h);if(O){if(c)c(O,4);else for(const ee of O)ee();Ra.delete(h)}},e?s?D(!0):F=h.run():o?o(D.bind(null,!0),!0):h.run(),V.pause=h.pause.bind(h),V.resume=h.resume.bind(h),V.stop=V,V}function Kn(t,e=1/0,n){if(e<=0||!We(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Et(t))Kn(t.value,e,n);else if(ce(t))for(let s=0;s<t.length;s++)Kn(t[s],e,n);else if(dg(t)||Pr(t))t.forEach(s=>{Kn(s,e,n)});else if(gg(t)){for(const s in t)Kn(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Kn(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Io(t,e,n,s){try{return s?t(...s):t()}catch(r){yl(r,e,n)}}function gn(t,e,n,s){if(fe(t)){const r=Io(t,e,n,s);return r&&pg(r)&&r.catch(i=>{yl(i,e,n)}),r}if(ce(t)){const r=[];for(let i=0;i<t.length;i++)r.push(gn(t[i],e,n,s));return r}}function yl(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ue;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const h=l.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,c,u)===!1)return}l=l.parent}if(i){Ls(),Io(i,null,10,[t,c,u]),Vs();return}}Ew(t,n,r,s,o)}function Ew(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const Vt=[];let bn=-1;const Nr=[];let ms=null,Er=0;const $g=Promise.resolve();let Sa=null;function jg(t){const e=Sa||$g;return t?e.then(this?t.bind(this):t):e}function vw(t){let e=bn+1,n=Vt.length;for(;e<n;){const s=e+n>>>1,r=Vt[s],i=ro(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function uh(t){if(!(t.flags&1)){const e=ro(t),n=Vt[Vt.length-1];!n||!(t.flags&2)&&e>=ro(n)?Vt.push(t):Vt.splice(vw(e),0,t),t.flags|=1,qg()}}function qg(){Sa||(Sa=$g.then(Wg))}function Tw(t){ce(t)?Nr.push(...t):ms&&t.id===-1?ms.splice(Er+1,0,t):t.flags&1||(Nr.push(t),t.flags|=1),qg()}function yd(t,e,n=bn+1){for(;n<Vt.length;n++){const s=Vt[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Vt.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Hg(t){if(Nr.length){const e=[...new Set(Nr)].sort((n,s)=>ro(n)-ro(s));if(Nr.length=0,ms){ms.push(...e);return}for(ms=e,Er=0;Er<ms.length;Er++){const n=ms[Er];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ms=null,Er=0}}const ro=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Wg(t){try{for(bn=0;bn<Vt.length;bn++){const e=Vt[bn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Io(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;bn<Vt.length;bn++){const e=Vt[bn];e&&(e.flags&=-2)}bn=-1,Vt.length=0,Hg(),Sa=null,(Vt.length||Nr.length)&&Wg()}}let $t=null,zg=null;function Pa(t){const e=$t;return $t=t,zg=t&&t.type.__scopeId||null,e}function ma(t,e=$t,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Pd(-1);const i=Pa(e);let o;try{o=t(...r)}finally{Pa(i),s._d&&Pd(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Kg(t,e){if($t===null)return t;const n=Il($t),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,l,c=Ue]=e[r];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&Kn(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function js(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const l=r[o];i&&(l.oldValue=i[o].value);let c=l.dir[s];c&&(Ls(),gn(c,n,8,[t.el,l,t,e]),Vs())}}const ww=Symbol("_vte"),Gg=t=>t.__isTeleport,gs=Symbol("_leaveCb"),na=Symbol("_enterCb");function Iw(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return hh(()=>{t.isMounted=!0}),s_(()=>{t.isUnmounting=!0}),t}const en=[Function,Array],Qg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:en,onEnter:en,onAfterEnter:en,onEnterCancelled:en,onBeforeLeave:en,onLeave:en,onAfterLeave:en,onLeaveCancelled:en,onBeforeAppear:en,onAppear:en,onAfterAppear:en,onAppearCancelled:en},Yg=t=>{const e=t.subTree;return e.component?Yg(e.component):e},bw={name:"BaseTransition",props:Qg,setup(t,{slots:e}){const n=mh(),s=Iw();return()=>{const r=e.default&&Zg(e.default(),!0);if(!r||!r.length)return;const i=Xg(r),o=Pe(t),{mode:l}=o;if(s.isLeaving)return gc(i);const c=Ed(i);if(!c)return gc(i);let u=eu(c,o,s,n,d=>u=d);c.type!==Bt&&io(c,u);let h=n.subTree&&Ed(n.subTree);if(h&&h.type!==Bt&&!Qs(c,h)&&Yg(n).type!==Bt){let d=eu(h,o,s,n);if(io(h,d),l==="out-in"&&c.type!==Bt)return s.isLeaving=!0,d.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,h=void 0},gc(i);l==="in-out"&&c.type!==Bt?d.delayLeave=(m,g,A)=>{const S=Jg(s,h);S[String(h.key)]=h,m[gs]=()=>{g(),m[gs]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{A(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return i}}};function Xg(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Bt){e=n;break}}return e}const Aw=bw;function Jg(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function eu(t,e,n,s,r){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:m,onLeave:g,onAfterLeave:A,onLeaveCancelled:S,onBeforeAppear:N,onAppear:V,onAfterAppear:F,onAppearCancelled:D}=e,O=String(t.key),ee=Jg(n,t),te=(E,b)=>{E&&gn(E,s,9,b)},C=(E,b)=>{const R=b[1];te(E,b),ce(E)?E.every(I=>I.length<=1)&&R():E.length<=1&&R()},y={mode:o,persisted:l,beforeEnter(E){let b=c;if(!n.isMounted)if(i)b=N||c;else return;E[gs]&&E[gs](!0);const R=ee[O];R&&Qs(t,R)&&R.el[gs]&&R.el[gs](),te(b,[E])},enter(E){let b=u,R=h,I=d;if(!n.isMounted)if(i)b=V||u,R=F||h,I=D||d;else return;let v=!1;const Le=E[na]=st=>{v||(v=!0,st?te(I,[E]):te(R,[E]),y.delayedLeave&&y.delayedLeave(),E[na]=void 0)};b?C(b,[E,Le]):Le()},leave(E,b){const R=String(t.key);if(E[na]&&E[na](!0),n.isUnmounting)return b();te(m,[E]);let I=!1;const v=E[gs]=Le=>{I||(I=!0,b(),Le?te(S,[E]):te(A,[E]),E[gs]=void 0,ee[R]===t&&delete ee[R])};ee[R]=t,g?C(g,[E,v]):v()},clone(E){const b=eu(E,e,n,s,r);return r&&r(b),b}};return y}function gc(t){if(El(t))return t=Ss(t),t.children=null,t}function Ed(t){if(!El(t))return Gg(t.type)&&t.children?Xg(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&fe(n.default))return n.default()}}function io(t,e){t.shapeFlag&6&&t.component?(t.transition=e,io(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Zg(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===rt?(o.patchFlag&128&&r++,s=s.concat(Zg(o.children,e,l))):(e||o.type!==Bt)&&s.push(l!=null?Ss(o,{key:l}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function e_(t,e){return fe(t)?ht({name:t.name},e,{setup:t}):t}function t_(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ka(t,e,n,s,r=!1){if(ce(t)){t.forEach((A,S)=>ka(A,e&&(ce(e)?e[S]:e),n,s,r));return}if($i(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&ka(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?Il(s.component):s.el,o=r?null:i,{i:l,r:c}=t,u=e&&e.r,h=l.refs===Ue?l.refs={}:l.refs,d=l.setupState,m=Pe(d),g=d===Ue?()=>!1:A=>De(m,A);if(u!=null&&u!==c&&(Je(u)?(h[u]=null,g(u)&&(d[u]=null)):Et(u)&&(u.value=null)),fe(c))Io(c,l,12,[o,h]);else{const A=Je(c),S=Et(c);if(A||S){const N=()=>{if(t.f){const V=A?g(c)?d[c]:h[c]:c.value;r?ce(V)&&eh(V,i):ce(V)?V.includes(i)||V.push(i):A?(h[c]=[i],g(c)&&(d[c]=h[c])):(c.value=[i],t.k&&(h[t.k]=c.value))}else A?(h[c]=o,g(c)&&(d[c]=o)):S&&(c.value=o,t.k&&(h[t.k]=o))};o?(N.id=-1,Wt(N,n)):N()}}}ml().requestIdleCallback;ml().cancelIdleCallback;const $i=t=>!!t.type.__asyncLoader,El=t=>t.type.__isKeepAlive;function Cw(t,e){n_(t,"a",e)}function Rw(t,e){n_(t,"da",e)}function n_(t,e,n=mt){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(vl(e,s,n),n){let r=n.parent;for(;r&&r.parent;)El(r.parent.vnode)&&Sw(s,e,n,r),r=r.parent}}function Sw(t,e,n,s){const r=vl(e,t,s,!0);fh(()=>{eh(s[e],r)},n)}function vl(t,e,n=mt,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Ls();const l=bo(n),c=gn(e,n,t,o);return l(),Vs(),c});return s?r.unshift(i):r.push(i),i}}const ss=t=>(e,n=mt)=>{(!lo||t==="sp")&&vl(t,(...s)=>e(...s),n)},Pw=ss("bm"),hh=ss("m"),kw=ss("bu"),Nw=ss("u"),s_=ss("bum"),fh=ss("um"),r_=ss("sp"),xw=ss("rtg"),Dw=ss("rtc");function Ow(t,e=mt){vl("ec",t,e)}const i_="components";function Mw(t,e){return a_(i_,t,!0,e)||t}const o_=Symbol.for("v-ndc");function Lw(t){return Je(t)?a_(i_,t,!1)||t:t||o_}function a_(t,e,n=!0,s=!1){const r=$t||mt;if(r){const i=r.type;{const l=II(i,!1);if(l&&(l===e||l===rn(e)||l===pl(rn(e))))return i}const o=vd(r[t]||i[t],e)||vd(r.appContext[t],e);return!o&&s?i:o}}function vd(t,e){return t&&(t[e]||t[rn(e)]||t[pl(rn(e))])}function Zn(t,e,n,s){let r;const i=n,o=ce(t);if(o||Je(t)){const l=o&&kr(t);let c=!1;l&&(c=!sn(t),t=gl(t)),r=new Array(t.length);for(let u=0,h=t.length;u<h;u++)r[u]=e(c?Pt(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let l=0;l<t;l++)r[l]=e(l+1,l,void 0,i)}else if(We(t))if(t[Symbol.iterator])r=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);r=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const h=l[c];r[c]=e(t[h],h,c,i)}}else r=[];return r}const tu=t=>t?S_(t)?Il(t):tu(t.parent):null,ji=ht(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>tu(t.parent),$root:t=>tu(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>c_(t),$forceUpdate:t=>t.f||(t.f=()=>{uh(t.update)}),$nextTick:t=>t.n||(t.n=jg.bind(t.proxy)),$watch:t=>sI.bind(t)}),_c=(t,e)=>t!==Ue&&!t.__isScriptSetup&&De(t,e),Vw={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(_c(s,e))return o[e]=1,s[e];if(r!==Ue&&De(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&De(u,e))return o[e]=3,i[e];if(n!==Ue&&De(n,e))return o[e]=4,n[e];nu&&(o[e]=0)}}const h=ji[e];let d,m;if(h)return e==="$attrs"&&St(t.attrs,"get",""),h(t);if((d=l.__cssModules)&&(d=d[e]))return d;if(n!==Ue&&De(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,De(m,e))return m[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return _c(r,e)?(r[e]=n,!0):s!==Ue&&De(s,e)?(s[e]=n,!0):De(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let l;return!!n[o]||t!==Ue&&De(t,o)||_c(e,o)||(l=i[0])&&De(l,o)||De(s,o)||De(ji,o)||De(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:De(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Td(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let nu=!0;function Fw(t){const e=c_(t),n=t.proxy,s=t.ctx;nu=!1,e.beforeCreate&&wd(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:l,provide:c,inject:u,created:h,beforeMount:d,mounted:m,beforeUpdate:g,updated:A,activated:S,deactivated:N,beforeDestroy:V,beforeUnmount:F,destroyed:D,unmounted:O,render:ee,renderTracked:te,renderTriggered:C,errorCaptured:y,serverPrefetch:E,expose:b,inheritAttrs:R,components:I,directives:v,filters:Le}=e;if(u&&Uw(u,s,null),o)for(const ve in o){const ge=o[ve];fe(ge)&&(s[ve]=ge.bind(n))}if(r){const ve=r.call(n,n);We(ve)&&(t.data=_l(ve))}if(nu=!0,i)for(const ve in i){const ge=i[ve],qt=fe(ge)?ge.bind(n,n):fe(ge.get)?ge.get.bind(n,n):kn,an=!fe(ge)&&fe(ge.set)?ge.set.bind(n):kn,Xt=cn({get:qt,set:an});Object.defineProperty(s,ve,{enumerable:!0,configurable:!0,get:()=>Xt.value,set:Qe=>Xt.value=Qe})}if(l)for(const ve in l)l_(l[ve],s,n,ve);if(c){const ve=fe(c)?c.call(n):c;Reflect.ownKeys(ve).forEach(ge=>{ga(ge,ve[ge])})}h&&wd(h,t,"c");function Ge(ve,ge){ce(ge)?ge.forEach(qt=>ve(qt.bind(n))):ge&&ve(ge.bind(n))}if(Ge(Pw,d),Ge(hh,m),Ge(kw,g),Ge(Nw,A),Ge(Cw,S),Ge(Rw,N),Ge(Ow,y),Ge(Dw,te),Ge(xw,C),Ge(s_,F),Ge(fh,O),Ge(r_,E),ce(b))if(b.length){const ve=t.exposed||(t.exposed={});b.forEach(ge=>{Object.defineProperty(ve,ge,{get:()=>n[ge],set:qt=>n[ge]=qt})})}else t.exposed||(t.exposed={});ee&&t.render===kn&&(t.render=ee),R!=null&&(t.inheritAttrs=R),I&&(t.components=I),v&&(t.directives=v),E&&t_(t)}function Uw(t,e,n=kn){ce(t)&&(t=su(t));for(const s in t){const r=t[s];let i;We(r)?"default"in r?i=pn(r.from||s,r.default,!0):i=pn(r.from||s):i=pn(r),Et(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function wd(t,e,n){gn(ce(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function l_(t,e,n,s){let r=s.includes(".")?I_(n,s):()=>n[s];if(Je(t)){const i=e[t];fe(i)&&Dr(r,i)}else if(fe(t))Dr(r,t.bind(n));else if(We(t))if(ce(t))t.forEach(i=>l_(i,e,n,s));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&Dr(r,i,t)}}function c_(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>Na(c,u,o,!0)),Na(c,e,o)),We(e)&&i.set(e,c),c}function Na(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Na(t,i,n,!0),r&&r.forEach(o=>Na(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Bw[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Bw={data:Id,props:bd,emits:bd,methods:Ni,computed:Ni,beforeCreate:Mt,created:Mt,beforeMount:Mt,mounted:Mt,beforeUpdate:Mt,updated:Mt,beforeDestroy:Mt,beforeUnmount:Mt,destroyed:Mt,unmounted:Mt,activated:Mt,deactivated:Mt,errorCaptured:Mt,serverPrefetch:Mt,components:Ni,directives:Ni,watch:jw,provide:Id,inject:$w};function Id(t,e){return e?t?function(){return ht(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function $w(t,e){return Ni(su(t),su(e))}function su(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Mt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ni(t,e){return t?ht(Object.create(null),t,e):e}function bd(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:ht(Object.create(null),Td(t),Td(e??{})):e}function jw(t,e){if(!t)return e;if(!e)return t;const n=ht(Object.create(null),t);for(const s in e)n[s]=Mt(t[s],e[s]);return n}function u_(){return{app:null,config:{isNativeTag:OT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qw=0;function Hw(t,e){return function(s,r=null){fe(s)||(s=ht({},s)),r!=null&&!We(r)&&(r=null);const i=u_(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:qw++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:AI,get config(){return i.config},set config(h){},use(h,...d){return o.has(h)||(h&&fe(h.install)?(o.add(h),h.install(u,...d)):fe(h)&&(o.add(h),h(u,...d))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,d){return d?(i.components[h]=d,u):i.components[h]},directive(h,d){return d?(i.directives[h]=d,u):i.directives[h]},mount(h,d,m){if(!c){const g=u._ceVNode||Ae(s,r);return g.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(g,h,m),c=!0,u._container=h,h.__vue_app__=u,Il(g.component)}},onUnmount(h){l.push(h)},unmount(){c&&(gn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,d){return i.provides[h]=d,u},runWithContext(h){const d=xr;xr=u;try{return h()}finally{xr=d}}};return u}}let xr=null;function ga(t,e){if(mt){let n=mt.provides;const s=mt.parent&&mt.parent.provides;s===n&&(n=mt.provides=Object.create(s)),n[t]=e}}function pn(t,e,n=!1){const s=mt||$t;if(s||xr){const r=xr?xr._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&fe(e)?e.call(s&&s.proxy):e}}const h_={},f_=()=>Object.create(h_),d_=t=>Object.getPrototypeOf(t)===h_;function Ww(t,e,n,s=!1){const r={},i=f_();t.propsDefaults=Object.create(null),p_(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Lg(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function zw(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,l=Pe(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let d=0;d<h.length;d++){let m=h[d];if(Tl(t.emitsOptions,m))continue;const g=e[m];if(c)if(De(i,m))g!==i[m]&&(i[m]=g,u=!0);else{const A=rn(m);r[A]=ru(c,l,A,g,t,!1)}else g!==i[m]&&(i[m]=g,u=!0)}}}else{p_(t,e,r,i)&&(u=!0);let h;for(const d in l)(!e||!De(e,d)&&((h=or(d))===d||!De(e,h)))&&(c?n&&(n[d]!==void 0||n[h]!==void 0)&&(r[d]=ru(c,l,d,void 0,t,!0)):delete r[d]);if(i!==l)for(const d in i)(!e||!De(e,d))&&(delete i[d],u=!0)}u&&zn(t.attrs,"set","")}function p_(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Fi(c))continue;const u=e[c];let h;r&&De(r,h=rn(c))?!i||!i.includes(h)?n[h]=u:(l||(l={}))[h]=u:Tl(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=Pe(n),u=l||Ue;for(let h=0;h<i.length;h++){const d=i[h];n[d]=ru(r,c,d,u[d],t,!De(u,d))}}return o}function ru(t,e,n,s,r,i){const o=t[n];if(o!=null){const l=De(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&fe(c)){const{propsDefaults:u}=r;if(n in u)s=u[n];else{const h=bo(r);s=u[n]=c.call(null,e),h()}}else s=c;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!l?s=!1:o[1]&&(s===""||s===or(n))&&(s=!0))}return s}const Kw=new WeakMap;function m_(t,e,n=!1){const s=n?Kw:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},l=[];let c=!1;if(!fe(t)){const h=d=>{c=!0;const[m,g]=m_(d,e,!0);ht(o,m),g&&l.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!c)return We(t)&&s.set(t,Sr),Sr;if(ce(i))for(let h=0;h<i.length;h++){const d=rn(i[h]);Ad(d)&&(o[d]=Ue)}else if(i)for(const h in i){const d=rn(h);if(Ad(d)){const m=i[h],g=o[d]=ce(m)||fe(m)?{type:m}:ht({},m),A=g.type;let S=!1,N=!0;if(ce(A))for(let V=0;V<A.length;++V){const F=A[V],D=fe(F)&&F.name;if(D==="Boolean"){S=!0;break}else D==="String"&&(N=!1)}else S=fe(A)&&A.name==="Boolean";g[0]=S,g[1]=N,(S||De(g,"default"))&&l.push(d)}}const u=[o,l];return We(t)&&s.set(t,u),u}function Ad(t){return t[0]!=="$"&&!Fi(t)}const g_=t=>t[0]==="_"||t==="$stable",dh=t=>ce(t)?t.map(Cn):[Cn(t)],Gw=(t,e,n)=>{if(e._n)return e;const s=ma((...r)=>dh(e(...r)),n);return s._c=!1,s},__=(t,e,n)=>{const s=t._ctx;for(const r in t){if(g_(r))continue;const i=t[r];if(fe(i))e[r]=Gw(r,i,s);else if(i!=null){const o=dh(i);e[r]=()=>o}}},y_=(t,e)=>{const n=dh(e);t.slots.default=()=>n},E_=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},Qw=(t,e,n)=>{const s=t.slots=f_();if(t.vnode.shapeFlag&32){const r=e._;r?(E_(s,e,n),n&&_g(s,"_",r,!0)):__(e,s)}else e&&y_(t,e)},Yw=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Ue;if(s.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:E_(r,e,n):(i=!e.$stable,__(e,r)),o=e}else e&&(y_(t,e),o={default:1});if(i)for(const l in r)!g_(l)&&o[l]==null&&delete r[l]},Wt=uI;function Xw(t){return Jw(t)}function Jw(t,e){const n=ml();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:h,parentNode:d,nextSibling:m,setScopeId:g=kn,insertStaticContent:A}=t,S=(T,w,P,L=null,$=null,U=null,G=void 0,z=null,H=!!w.dynamicChildren)=>{if(T===w)return;T&&!Qs(T,w)&&(L=M(T),Qe(T,$,U,!0),T=null),w.patchFlag===-2&&(H=!1,w.dynamicChildren=null);const{type:q,ref:oe,shapeFlag:X}=w;switch(q){case wl:N(T,w,P,L);break;case Bt:V(T,w,P,L);break;case Ec:T==null&&F(w,P,L,G);break;case rt:I(T,w,P,L,$,U,G,z,H);break;default:X&1?ee(T,w,P,L,$,U,G,z,H):X&6?v(T,w,P,L,$,U,G,z,H):(X&64||X&128)&&q.process(T,w,P,L,$,U,G,z,H,ne)}oe!=null&&$&&ka(oe,T&&T.ref,U,w||T,!w)},N=(T,w,P,L)=>{if(T==null)s(w.el=l(w.children),P,L);else{const $=w.el=T.el;w.children!==T.children&&u($,w.children)}},V=(T,w,P,L)=>{T==null?s(w.el=c(w.children||""),P,L):w.el=T.el},F=(T,w,P,L)=>{[T.el,T.anchor]=A(T.children,w,P,L,T.el,T.anchor)},D=({el:T,anchor:w},P,L)=>{let $;for(;T&&T!==w;)$=m(T),s(T,P,L),T=$;s(w,P,L)},O=({el:T,anchor:w})=>{let P;for(;T&&T!==w;)P=m(T),r(T),T=P;r(w)},ee=(T,w,P,L,$,U,G,z,H)=>{w.type==="svg"?G="svg":w.type==="math"&&(G="mathml"),T==null?te(w,P,L,$,U,G,z,H):E(T,w,$,U,G,z,H)},te=(T,w,P,L,$,U,G,z)=>{let H,q;const{props:oe,shapeFlag:X,transition:se,dirs:le}=T;if(H=T.el=o(T.type,U,oe&&oe.is,oe),X&8?h(H,T.children):X&16&&y(T.children,H,null,L,$,yc(T,U),G,z),le&&js(T,null,L,"created"),C(H,T,T.scopeId,G,L),oe){for(const pe in oe)pe!=="value"&&!Fi(pe)&&i(H,pe,null,oe[pe],U,L);"value"in oe&&i(H,"value",null,oe.value,U),(q=oe.onVnodeBeforeMount)&&In(q,L,T)}le&&js(T,null,L,"beforeMount");const ae=Zw($,se);ae&&se.beforeEnter(H),s(H,w,P),((q=oe&&oe.onVnodeMounted)||ae||le)&&Wt(()=>{q&&In(q,L,T),ae&&se.enter(H),le&&js(T,null,L,"mounted")},$)},C=(T,w,P,L,$)=>{if(P&&g(T,P),L)for(let U=0;U<L.length;U++)g(T,L[U]);if($){let U=$.subTree;if(w===U||A_(U.type)&&(U.ssContent===w||U.ssFallback===w)){const G=$.vnode;C(T,G,G.scopeId,G.slotScopeIds,$.parent)}}},y=(T,w,P,L,$,U,G,z,H=0)=>{for(let q=H;q<T.length;q++){const oe=T[q]=z?_s(T[q]):Cn(T[q]);S(null,oe,w,P,L,$,U,G,z)}},E=(T,w,P,L,$,U,G)=>{const z=w.el=T.el;let{patchFlag:H,dynamicChildren:q,dirs:oe}=w;H|=T.patchFlag&16;const X=T.props||Ue,se=w.props||Ue;let le;if(P&&qs(P,!1),(le=se.onVnodeBeforeUpdate)&&In(le,P,w,T),oe&&js(w,T,P,"beforeUpdate"),P&&qs(P,!0),(X.innerHTML&&se.innerHTML==null||X.textContent&&se.textContent==null)&&h(z,""),q?b(T.dynamicChildren,q,z,P,L,yc(w,$),U):G||ge(T,w,z,null,P,L,yc(w,$),U,!1),H>0){if(H&16)R(z,X,se,P,$);else if(H&2&&X.class!==se.class&&i(z,"class",null,se.class,$),H&4&&i(z,"style",X.style,se.style,$),H&8){const ae=w.dynamicProps;for(let pe=0;pe<ae.length;pe++){const Te=ae[pe],wt=X[Te],ft=se[Te];(ft!==wt||Te==="value")&&i(z,Te,wt,ft,$,P)}}H&1&&T.children!==w.children&&h(z,w.children)}else!G&&q==null&&R(z,X,se,P,$);((le=se.onVnodeUpdated)||oe)&&Wt(()=>{le&&In(le,P,w,T),oe&&js(w,T,P,"updated")},L)},b=(T,w,P,L,$,U,G)=>{for(let z=0;z<w.length;z++){const H=T[z],q=w[z],oe=H.el&&(H.type===rt||!Qs(H,q)||H.shapeFlag&70)?d(H.el):P;S(H,q,oe,null,L,$,U,G,!0)}},R=(T,w,P,L,$)=>{if(w!==P){if(w!==Ue)for(const U in w)!Fi(U)&&!(U in P)&&i(T,U,w[U],null,$,L);for(const U in P){if(Fi(U))continue;const G=P[U],z=w[U];G!==z&&U!=="value"&&i(T,U,z,G,$,L)}"value"in P&&i(T,"value",w.value,P.value,$)}},I=(T,w,P,L,$,U,G,z,H)=>{const q=w.el=T?T.el:l(""),oe=w.anchor=T?T.anchor:l("");let{patchFlag:X,dynamicChildren:se,slotScopeIds:le}=w;le&&(z=z?z.concat(le):le),T==null?(s(q,P,L),s(oe,P,L),y(w.children||[],P,oe,$,U,G,z,H)):X>0&&X&64&&se&&T.dynamicChildren?(b(T.dynamicChildren,se,P,$,U,G,z),(w.key!=null||$&&w===$.subTree)&&v_(T,w,!0)):ge(T,w,P,oe,$,U,G,z,H)},v=(T,w,P,L,$,U,G,z,H)=>{w.slotScopeIds=z,T==null?w.shapeFlag&512?$.ctx.activate(w,P,L,G,H):Le(w,P,L,$,U,G,H):st(T,w,H)},Le=(T,w,P,L,$,U,G)=>{const z=T.component=yI(T,L,$);if(El(T)&&(z.ctx.renderer=ne),EI(z,!1,G),z.asyncDep){if($&&$.registerDep(z,Ge,G),!T.el){const H=z.subTree=Ae(Bt);V(null,H,w,P)}}else Ge(z,T,w,P,$,U,G)},st=(T,w,P)=>{const L=w.component=T.component;if(lI(T,w,P))if(L.asyncDep&&!L.asyncResolved){ve(L,w,P);return}else L.next=w,L.update();else w.el=T.el,L.vnode=w},Ge=(T,w,P,L,$,U,G)=>{const z=()=>{if(T.isMounted){let{next:X,bu:se,u:le,parent:ae,vnode:pe}=T;{const It=T_(T);if(It){X&&(X.el=pe.el,ve(T,X,G)),It.asyncDep.then(()=>{T.isUnmounted||z()});return}}let Te=X,wt;qs(T,!1),X?(X.el=pe.el,ve(T,X,G)):X=pe,se&&pa(se),(wt=X.props&&X.props.onVnodeBeforeUpdate)&&In(wt,ae,X,pe),qs(T,!0);const ft=Rd(T),Jt=T.subTree;T.subTree=ft,S(Jt,ft,d(Jt.el),M(Jt),T,$,U),X.el=ft.el,Te===null&&cI(T,ft.el),le&&Wt(le,$),(wt=X.props&&X.props.onVnodeUpdated)&&Wt(()=>In(wt,ae,X,pe),$)}else{let X;const{el:se,props:le}=w,{bm:ae,m:pe,parent:Te,root:wt,type:ft}=T,Jt=$i(w);qs(T,!1),ae&&pa(ae),!Jt&&(X=le&&le.onVnodeBeforeMount)&&In(X,Te,w),qs(T,!0);{wt.ce&&wt.ce._injectChildStyle(ft);const It=T.subTree=Rd(T);S(null,It,P,L,T,$,U),w.el=It.el}if(pe&&Wt(pe,$),!Jt&&(X=le&&le.onVnodeMounted)){const It=w;Wt(()=>In(X,Te,It),$)}(w.shapeFlag&256||Te&&$i(Te.vnode)&&Te.vnode.shapeFlag&256)&&T.a&&Wt(T.a,$),T.isMounted=!0,w=P=L=null}};T.scope.on();const H=T.effect=new wg(z);T.scope.off();const q=T.update=H.run.bind(H),oe=T.job=H.runIfDirty.bind(H);oe.i=T,oe.id=T.uid,H.scheduler=()=>uh(oe),qs(T,!0),q()},ve=(T,w,P)=>{w.component=T;const L=T.vnode.props;T.vnode=w,T.next=null,zw(T,w.props,L,P),Yw(T,w.children,P),Ls(),yd(T),Vs()},ge=(T,w,P,L,$,U,G,z,H=!1)=>{const q=T&&T.children,oe=T?T.shapeFlag:0,X=w.children,{patchFlag:se,shapeFlag:le}=w;if(se>0){if(se&128){an(q,X,P,L,$,U,G,z,H);return}else if(se&256){qt(q,X,P,L,$,U,G,z,H);return}}le&8?(oe&16&&Ft(q,$,U),X!==q&&h(P,X)):oe&16?le&16?an(q,X,P,L,$,U,G,z,H):Ft(q,$,U,!0):(oe&8&&h(P,""),le&16&&y(X,P,L,$,U,G,z,H))},qt=(T,w,P,L,$,U,G,z,H)=>{T=T||Sr,w=w||Sr;const q=T.length,oe=w.length,X=Math.min(q,oe);let se;for(se=0;se<X;se++){const le=w[se]=H?_s(w[se]):Cn(w[se]);S(T[se],le,P,null,$,U,G,z,H)}q>oe?Ft(T,$,U,!0,!1,X):y(w,P,L,$,U,G,z,H,X)},an=(T,w,P,L,$,U,G,z,H)=>{let q=0;const oe=w.length;let X=T.length-1,se=oe-1;for(;q<=X&&q<=se;){const le=T[q],ae=w[q]=H?_s(w[q]):Cn(w[q]);if(Qs(le,ae))S(le,ae,P,null,$,U,G,z,H);else break;q++}for(;q<=X&&q<=se;){const le=T[X],ae=w[se]=H?_s(w[se]):Cn(w[se]);if(Qs(le,ae))S(le,ae,P,null,$,U,G,z,H);else break;X--,se--}if(q>X){if(q<=se){const le=se+1,ae=le<oe?w[le].el:L;for(;q<=se;)S(null,w[q]=H?_s(w[q]):Cn(w[q]),P,ae,$,U,G,z,H),q++}}else if(q>se)for(;q<=X;)Qe(T[q],$,U,!0),q++;else{const le=q,ae=q,pe=new Map;for(q=ae;q<=se;q++){const dt=w[q]=H?_s(w[q]):Cn(w[q]);dt.key!=null&&pe.set(dt.key,q)}let Te,wt=0;const ft=se-ae+1;let Jt=!1,It=0;const ls=new Array(ft);for(q=0;q<ft;q++)ls[q]=0;for(q=le;q<=X;q++){const dt=T[q];if(wt>=ft){Qe(dt,$,U,!0);continue}let Zt;if(dt.key!=null)Zt=pe.get(dt.key);else for(Te=ae;Te<=se;Te++)if(ls[Te-ae]===0&&Qs(dt,w[Te])){Zt=Te;break}Zt===void 0?Qe(dt,$,U,!0):(ls[Zt-ae]=q+1,Zt>=It?It=Zt:Jt=!0,S(dt,w[Zt],P,null,$,U,G,z,H),wt++)}const ci=Jt?eI(ls):Sr;for(Te=ci.length-1,q=ft-1;q>=0;q--){const dt=ae+q,Zt=w[dt],Vo=dt+1<oe?w[dt+1].el:L;ls[q]===0?S(null,Zt,P,Vo,$,U,G,z,H):Jt&&(Te<0||q!==ci[Te]?Xt(Zt,P,Vo,2):Te--)}}},Xt=(T,w,P,L,$=null)=>{const{el:U,type:G,transition:z,children:H,shapeFlag:q}=T;if(q&6){Xt(T.component.subTree,w,P,L);return}if(q&128){T.suspense.move(w,P,L);return}if(q&64){G.move(T,w,P,ne);return}if(G===rt){s(U,w,P);for(let X=0;X<H.length;X++)Xt(H[X],w,P,L);s(T.anchor,w,P);return}if(G===Ec){D(T,w,P);return}if(L!==2&&q&1&&z)if(L===0)z.beforeEnter(U),s(U,w,P),Wt(()=>z.enter(U),$);else{const{leave:X,delayLeave:se,afterLeave:le}=z,ae=()=>s(U,w,P),pe=()=>{X(U,()=>{ae(),le&&le()})};se?se(U,ae,pe):pe()}else s(U,w,P)},Qe=(T,w,P,L=!1,$=!1)=>{const{type:U,props:G,ref:z,children:H,dynamicChildren:q,shapeFlag:oe,patchFlag:X,dirs:se,cacheIndex:le}=T;if(X===-2&&($=!1),z!=null&&ka(z,null,P,T,!0),le!=null&&(w.renderCache[le]=void 0),oe&256){w.ctx.deactivate(T);return}const ae=oe&1&&se,pe=!$i(T);let Te;if(pe&&(Te=G&&G.onVnodeBeforeUnmount)&&In(Te,w,T),oe&6)wn(T.component,P,L);else{if(oe&128){T.suspense.unmount(P,L);return}ae&&js(T,null,w,"beforeUnmount"),oe&64?T.type.remove(T,w,P,ne,L):q&&!q.hasOnce&&(U!==rt||X>0&&X&64)?Ft(q,w,P,!1,!0):(U===rt&&X&384||!$&&oe&16)&&Ft(H,w,P),L&&Ye(T)}(pe&&(Te=G&&G.onVnodeUnmounted)||ae)&&Wt(()=>{Te&&In(Te,w,T),ae&&js(T,null,w,"unmounted")},P)},Ye=T=>{const{type:w,el:P,anchor:L,transition:$}=T;if(w===rt){as(P,L);return}if(w===Ec){O(T);return}const U=()=>{r(P),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(T.shapeFlag&1&&$&&!$.persisted){const{leave:G,delayLeave:z}=$,H=()=>G(P,U);z?z(T.el,U,H):H()}else U()},as=(T,w)=>{let P;for(;T!==w;)P=m(T),r(T),T=P;r(w)},wn=(T,w,P)=>{const{bum:L,scope:$,job:U,subTree:G,um:z,m:H,a:q}=T;Cd(H),Cd(q),L&&pa(L),$.stop(),U&&(U.flags|=8,Qe(G,T,w,P)),z&&Wt(z,w),Wt(()=>{T.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},Ft=(T,w,P,L=!1,$=!1,U=0)=>{for(let G=U;G<T.length;G++)Qe(T[G],w,P,L,$)},M=T=>{if(T.shapeFlag&6)return M(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const w=m(T.anchor||T.el),P=w&&w[ww];return P?m(P):w};let J=!1;const Y=(T,w,P)=>{T==null?w._vnode&&Qe(w._vnode,null,null,!0):S(w._vnode||null,T,w,null,null,null,P),w._vnode=T,J||(J=!0,yd(),Hg(),J=!1)},ne={p:S,um:Qe,m:Xt,r:Ye,mt:Le,mc:y,pc:ge,pbc:b,n:M,o:t};return{render:Y,hydrate:void 0,createApp:Hw(Y)}}function yc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function qs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Zw(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function v_(t,e,n=!1){const s=t.children,r=e.children;if(ce(s)&&ce(r))for(let i=0;i<s.length;i++){const o=s[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=_s(r[i]),l.el=o.el),!n&&l.patchFlag!==-2&&v_(o,l)),l.type===wl&&(l.el=o.el)}}function eI(t){const e=t.slice(),n=[0];let s,r,i,o,l;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function T_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:T_(e)}function Cd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const tI=Symbol.for("v-scx"),nI=()=>pn(tI);function Dr(t,e,n){return w_(t,e,n)}function w_(t,e,n=Ue){const{immediate:s,deep:r,flush:i,once:o}=n,l=ht({},n),c=e&&s||!e&&i!=="post";let u;if(lo){if(i==="sync"){const g=nI();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=kn,g.resume=kn,g.pause=kn,g}}const h=mt;l.call=(g,A,S)=>gn(g,h,A,S);let d=!1;i==="post"?l.scheduler=g=>{Wt(g,h&&h.suspense)}:i!=="sync"&&(d=!0,l.scheduler=(g,A)=>{A?g():uh(g)}),l.augmentJob=g=>{e&&(g.flags|=4),d&&(g.flags|=2,h&&(g.id=h.uid,g.i=h))};const m=yw(t,e,l);return lo&&(u?u.push(m):c&&m()),m}function sI(t,e,n){const s=this.proxy,r=Je(t)?t.includes(".")?I_(s,t):()=>s[t]:t.bind(s,s);let i;fe(e)?i=e:(i=e.handler,n=e);const o=bo(this),l=w_(r,i.bind(s),n);return o(),l}function I_(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const rI=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${rn(e)}Modifiers`]||t[`${or(e)}Modifiers`];function iI(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ue;let r=n;const i=e.startsWith("update:"),o=i&&rI(s,e.slice(7));o&&(o.trim&&(r=n.map(h=>Je(h)?h.trim():h)),o.number&&(r=n.map(Gc)));let l,c=s[l=hc(e)]||s[l=hc(rn(e))];!c&&i&&(c=s[l=hc(or(e))]),c&&gn(c,t,6,r);const u=s[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,gn(u,t,6,r)}}function b_(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},l=!1;if(!fe(t)){const c=u=>{const h=b_(u,e,!0);h&&(l=!0,ht(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(We(t)&&s.set(t,null),null):(ce(i)?i.forEach(c=>o[c]=null):ht(o,i),We(t)&&s.set(t,o),o)}function Tl(t,e){return!t||!hl(e)?!1:(e=e.slice(2).replace(/Once$/,""),De(t,e[0].toLowerCase()+e.slice(1))||De(t,or(e))||De(t,e))}function Rd(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:h,props:d,data:m,setupState:g,ctx:A,inheritAttrs:S}=t,N=Pa(t);let V,F;try{if(n.shapeFlag&4){const O=r||s,ee=O;V=Cn(u.call(ee,O,h,d,g,m,A)),F=l}else{const O=e;V=Cn(O.length>1?O(d,{attrs:l,slots:o,emit:c}):O(d,null)),F=e.props?l:oI(l)}}catch(O){qi.length=0,yl(O,t,1),V=Ae(Bt)}let D=V;if(F&&S!==!1){const O=Object.keys(F),{shapeFlag:ee}=D;O.length&&ee&7&&(i&&O.some(Zu)&&(F=aI(F,i)),D=Ss(D,F,!1,!0))}return n.dirs&&(D=Ss(D,null,!1,!0),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&io(D,n.transition),V=D,Pa(N),V}const oI=t=>{let e;for(const n in t)(n==="class"||n==="style"||hl(n))&&((e||(e={}))[n]=t[n]);return e},aI=(t,e)=>{const n={};for(const s in t)(!Zu(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function lI(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Sd(s,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const m=h[d];if(o[m]!==s[m]&&!Tl(u,m))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Sd(s,o,u):!0:!!o;return!1}function Sd(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Tl(n,i))return!0}return!1}function cI({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const A_=t=>t.__isSuspense;function uI(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):Tw(t)}const rt=Symbol.for("v-fgt"),wl=Symbol.for("v-txt"),Bt=Symbol.for("v-cmt"),Ec=Symbol.for("v-stc"),qi=[];let Kt=null;function Se(t=!1){qi.push(Kt=t?null:[])}function hI(){qi.pop(),Kt=qi[qi.length-1]||null}let oo=1;function Pd(t,e=!1){oo+=t,t<0&&Kt&&e&&(Kt.hasOnce=!0)}function C_(t){return t.dynamicChildren=oo>0?Kt||Sr:null,hI(),oo>0&&Kt&&Kt.push(t),t}function Be(t,e,n,s,r,i){return C_(W(t,e,n,s,r,i,!0))}function ao(t,e,n,s,r){return C_(Ae(t,e,n,s,r,!0))}function xa(t){return t?t.__v_isVNode===!0:!1}function Qs(t,e){return t.type===e.type&&t.key===e.key}const R_=({key:t})=>t??null,_a=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Je(t)||Et(t)||fe(t)?{i:$t,r:t,k:e,f:!!n}:t:null);function W(t,e=null,n=null,s=0,r=null,i=t===rt?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&R_(e),ref:e&&_a(e),scopeId:zg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:$t};return l?(ph(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Je(n)?8:16),oo>0&&!o&&Kt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Kt.push(c),c}const Ae=fI;function fI(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===o_)&&(t=Bt),xa(t)){const l=Ss(t,e,!0);return n&&ph(l,n),oo>0&&!i&&Kt&&(l.shapeFlag&6?Kt[Kt.indexOf(t)]=l:Kt.push(l)),l.patchFlag=-2,l}if(bI(t)&&(t=t.__vccOpts),e){e=dI(e);let{class:l,style:c}=e;l&&!Je(l)&&(e.class=Ne(l)),We(c)&&(ch(c)&&!ce(c)&&(c=ht({},c)),e.style=nh(c))}const o=Je(t)?1:A_(t)?128:Gg(t)?64:We(t)?4:fe(t)?2:0;return W(t,e,n,s,r,o,i,!0)}function dI(t){return t?ch(t)||d_(t)?ht({},t):t:null}function Ss(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?mI(r||{},e):r,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&R_(u),ref:e&&e.ref?n&&i?ce(i)?i.concat(_a(e)):[i,_a(e)]:_a(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==rt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ss(t.ssContent),ssFallback:t.ssFallback&&Ss(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&io(h,c.clone(h)),h}function pI(t=" ",e=0){return Ae(wl,null,t,e)}function iu(t="",e=!1){return e?(Se(),ao(Bt,null,t)):Ae(Bt,null,t)}function Cn(t){return t==null||typeof t=="boolean"?Ae(Bt):ce(t)?Ae(rt,null,t.slice()):xa(t)?_s(t):Ae(wl,null,String(t))}function _s(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ss(t)}function ph(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),ph(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!d_(e)?e._ctx=$t:r===3&&$t&&($t.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:$t},n=32):(e=String(e),s&64?(n=16,e=[pI(e)]):n=8);t.children=e,t.shapeFlag|=n}function mI(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Ne([e.class,s.class]));else if(r==="style")e.style=nh([e.style,s.style]);else if(hl(r)){const i=e[r],o=s[r];o&&i!==o&&!(ce(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function In(t,e,n,s=null){gn(t,e,7,[n,s])}const gI=u_();let _I=0;function yI(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||gI,i={uid:_I++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new zT(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:m_(s,r),emitsOptions:b_(s,r),emit:null,emitted:null,propsDefaults:Ue,inheritAttrs:s.inheritAttrs,ctx:Ue,data:Ue,props:Ue,attrs:Ue,slots:Ue,refs:Ue,setupState:Ue,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=iI.bind(null,i),t.ce&&t.ce(i),i}let mt=null;const mh=()=>mt||$t;let Da,ou;{const t=ml(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Da=e("__VUE_INSTANCE_SETTERS__",n=>mt=n),ou=e("__VUE_SSR_SETTERS__",n=>lo=n)}const bo=t=>{const e=mt;return Da(t),t.scope.on(),()=>{t.scope.off(),Da(e)}},kd=()=>{mt&&mt.scope.off(),Da(null)};function S_(t){return t.vnode.shapeFlag&4}let lo=!1;function EI(t,e=!1,n=!1){e&&ou(e);const{props:s,children:r}=t.vnode,i=S_(t);Ww(t,s,i,e),Qw(t,r,n);const o=i?vI(t,e):void 0;return e&&ou(!1),o}function vI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Vw);const{setup:s}=n;if(s){Ls();const r=t.setupContext=s.length>1?wI(t):null,i=bo(t),o=Io(s,t,0,[t.props,r]),l=pg(o);if(Vs(),i(),(l||t.sp)&&!$i(t)&&t_(t),l){if(o.then(kd,kd),e)return o.then(c=>{Nd(t,c)}).catch(c=>{yl(c,t,0)});t.asyncDep=o}else Nd(t,o)}else P_(t)}function Nd(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:We(e)&&(t.setupState=Bg(e)),P_(t)}function P_(t,e,n){const s=t.type;t.render||(t.render=s.render||kn);{const r=bo(t);Ls();try{Fw(t)}finally{Vs(),r()}}}const TI={get(t,e){return St(t,"get",""),t[e]}};function wI(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,TI),slots:t.slots,emit:t.emit,expose:e}}function Il(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Bg(fw(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ji)return ji[n](t)},has(e,n){return n in e||n in ji}})):t.proxy}function II(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function bI(t){return fe(t)&&"__vccOpts"in t}const cn=(t,e)=>gw(t,e,lo);function Ur(t,e,n){const s=arguments.length;return s===2?We(e)&&!ce(e)?xa(e)?Ae(t,null,[e]):Ae(t,e):Ae(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&xa(n)&&(n=[n]),Ae(t,e,n))}const AI="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let au;const xd=typeof window<"u"&&window.trustedTypes;if(xd)try{au=xd.createPolicy("vue",{createHTML:t=>t})}catch{}const k_=au?t=>au.createHTML(t):t=>t,CI="http://www.w3.org/2000/svg",RI="http://www.w3.org/1998/Math/MathML",Wn=typeof document<"u"?document:null,Dd=Wn&&Wn.createElement("template"),SI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?Wn.createElementNS(CI,t):e==="mathml"?Wn.createElementNS(RI,t):n?Wn.createElement(t,{is:n}):Wn.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Wn.createTextNode(t),createComment:t=>Wn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Wn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Dd.innerHTML=k_(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=Dd.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},fs="transition",Ii="animation",co=Symbol("_vtc"),N_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},PI=ht({},Qg,N_),kI=t=>(t.displayName="Transition",t.props=PI,t),Od=kI((t,{slots:e})=>Ur(Aw,NI(t),e)),Hs=(t,e=[])=>{ce(t)?t.forEach(n=>n(...e)):t&&t(...e)},Md=t=>t?ce(t)?t.some(e=>e.length>1):t.length>1:!1;function NI(t){const e={};for(const I in t)I in N_||(e[I]=t[I]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:h=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,A=xI(r),S=A&&A[0],N=A&&A[1],{onBeforeEnter:V,onEnter:F,onEnterCancelled:D,onLeave:O,onLeaveCancelled:ee,onBeforeAppear:te=V,onAppear:C=F,onAppearCancelled:y=D}=e,E=(I,v,Le,st)=>{I._enterCancelled=st,Ws(I,v?h:l),Ws(I,v?u:o),Le&&Le()},b=(I,v)=>{I._isLeaving=!1,Ws(I,d),Ws(I,g),Ws(I,m),v&&v()},R=I=>(v,Le)=>{const st=I?C:F,Ge=()=>E(v,I,Le);Hs(st,[v,Ge]),Ld(()=>{Ws(v,I?c:i),$n(v,I?h:l),Md(st)||Vd(v,s,S,Ge)})};return ht(e,{onBeforeEnter(I){Hs(V,[I]),$n(I,i),$n(I,o)},onBeforeAppear(I){Hs(te,[I]),$n(I,c),$n(I,u)},onEnter:R(!1),onAppear:R(!0),onLeave(I,v){I._isLeaving=!0;const Le=()=>b(I,v);$n(I,d),I._enterCancelled?($n(I,m),Bd()):(Bd(),$n(I,m)),Ld(()=>{I._isLeaving&&(Ws(I,d),$n(I,g),Md(O)||Vd(I,s,N,Le))}),Hs(O,[I,Le])},onEnterCancelled(I){E(I,!1,void 0,!0),Hs(D,[I])},onAppearCancelled(I){E(I,!0,void 0,!0),Hs(y,[I])},onLeaveCancelled(I){b(I),Hs(ee,[I])}})}function xI(t){if(t==null)return null;if(We(t))return[vc(t.enter),vc(t.leave)];{const e=vc(t);return[e,e]}}function vc(t){return UT(t)}function $n(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[co]||(t[co]=new Set)).add(e)}function Ws(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[co];n&&(n.delete(e),n.size||(t[co]=void 0))}function Ld(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let DI=0;function Vd(t,e,n,s){const r=t._endId=++DI,i=()=>{r===t._endId&&s()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=OI(t,e);if(!o)return s();const u=o+"end";let h=0;const d=()=>{t.removeEventListener(u,m),i()},m=g=>{g.target===t&&++h>=c&&d()};setTimeout(()=>{h<c&&d()},l+1),t.addEventListener(u,m)}function OI(t,e){const n=window.getComputedStyle(t),s=A=>(n[A]||"").split(", "),r=s(`${fs}Delay`),i=s(`${fs}Duration`),o=Fd(r,i),l=s(`${Ii}Delay`),c=s(`${Ii}Duration`),u=Fd(l,c);let h=null,d=0,m=0;e===fs?o>0&&(h=fs,d=o,m=i.length):e===Ii?u>0&&(h=Ii,d=u,m=c.length):(d=Math.max(o,u),h=d>0?o>u?fs:Ii:null,m=h?h===fs?i.length:c.length:0);const g=h===fs&&/\b(transform|all)(,|$)/.test(s(`${fs}Property`).toString());return{type:h,timeout:d,propCount:m,hasTransform:g}}function Fd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Ud(n)+Ud(t[s])))}function Ud(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Bd(){return document.body.offsetHeight}function MI(t,e,n){const s=t[co];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Oa=Symbol("_vod"),x_=Symbol("_vsh"),LI={beforeMount(t,{value:e},{transition:n}){t[Oa]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):bi(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),bi(t,!0),s.enter(t)):s.leave(t,()=>{bi(t,!1)}):bi(t,e))},beforeUnmount(t,{value:e}){bi(t,e)}};function bi(t,e){t.style.display=e?t[Oa]:"none",t[x_]=!e}const VI=Symbol(""),FI=/(^|;)\s*display\s*:/;function UI(t,e,n){const s=t.style,r=Je(n);let i=!1;if(n&&!r){if(e)if(Je(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&ya(s,l,"")}else for(const o in e)n[o]==null&&ya(s,o,"");for(const o in n)o==="display"&&(i=!0),ya(s,o,n[o])}else if(r){if(e!==n){const o=s[VI];o&&(n+=";"+o),s.cssText=n,i=FI.test(n)}}else e&&t.removeAttribute("style");Oa in t&&(t[Oa]=i?s.display:"",t[x_]&&(s.display="none"))}const $d=/\s*!important$/;function ya(t,e,n){if(ce(n))n.forEach(s=>ya(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=BI(t,e);$d.test(n)?t.setProperty(or(s),n.replace($d,""),"important"):t[s]=n}}const jd=["Webkit","Moz","ms"],Tc={};function BI(t,e){const n=Tc[e];if(n)return n;let s=rn(e);if(s!=="filter"&&s in t)return Tc[e]=s;s=pl(s);for(let r=0;r<jd.length;r++){const i=jd[r]+s;if(i in t)return Tc[e]=i}return e}const qd="http://www.w3.org/1999/xlink";function Hd(t,e,n,s,r,i=WT(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(qd,e.slice(6,e.length)):t.setAttributeNS(qd,e,n):n==null||i&&!yg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Ms(n)?String(n):n)}function Wd(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?k_(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=yg(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function vr(t,e,n,s){t.addEventListener(e,n,s)}function $I(t,e,n,s){t.removeEventListener(e,n,s)}const zd=Symbol("_vei");function jI(t,e,n,s,r=null){const i=t[zd]||(t[zd]={}),o=i[e];if(s&&o)o.value=s;else{const[l,c]=qI(e);if(s){const u=i[e]=zI(s,r);vr(t,l,u,c)}else o&&($I(t,l,o,c),i[e]=void 0)}}const Kd=/(?:Once|Passive|Capture)$/;function qI(t){let e;if(Kd.test(t)){e={};let s;for(;s=t.match(Kd);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):or(t.slice(2)),e]}let wc=0;const HI=Promise.resolve(),WI=()=>wc||(HI.then(()=>wc=0),wc=Date.now());function zI(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;gn(KI(s,n.value),e,5,[s])};return n.value=t,n.attached=WI(),n}function KI(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Gd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,GI=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?MI(t,s,o):e==="style"?UI(t,n,s):hl(e)?Zu(e)||jI(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):QI(t,e,s,o))?(Wd(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Hd(t,e,s,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Je(s))?Wd(t,rn(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Hd(t,e,s,o))};function QI(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Gd(e)&&fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Gd(e)&&Je(n)?!1:e in t}const Qd=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ce(e)?n=>pa(e,n):e};function YI(t){t.target.composing=!0}function Yd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ic=Symbol("_assign"),XI={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[Ic]=Qd(r);const i=s||r.props&&r.props.type==="number";vr(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Gc(l)),t[Ic](l)}),n&&vr(t,"change",()=>{t.value=t.value.trim()}),e||(vr(t,"compositionstart",YI),vr(t,"compositionend",Yd),vr(t,"change",Yd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[Ic]=Qd(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Gc(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===c)||(t.value=c))}},JI=["ctrl","shift","alt","meta"],ZI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>JI.some(n=>t[`${n}Key`]&&!e.includes(n))},eb=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(r,...i)=>{for(let o=0;o<e.length;o++){const l=ZI[e[o]];if(l&&l(r,e))return}return t(r,...i)})},tb=ht({patchProp:GI},SI);let Xd;function nb(){return Xd||(Xd=Xw(tb))}const sb=(...t)=>{const e=nb().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=ib(s);if(!r)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,rb(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function rb(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ib(t){return Je(t)?document.querySelector(t):t}const D_=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},ob={};function ab(t,e){const n=Mw("RouterView");return Se(),ao(n)}const lb=D_(ob,[["render",ab]]);/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Tr=typeof document<"u";function O_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function cb(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&O_(t.default)}const xe=Object.assign;function bc(t,e){const n={};for(const s in e){const r=e[s];n[s]=_n(r)?r.map(t):t(r)}return n}const Hi=()=>{},_n=Array.isArray,M_=/#/g,ub=/&/g,hb=/\//g,fb=/=/g,db=/\?/g,L_=/\+/g,pb=/%5B/g,mb=/%5D/g,V_=/%5E/g,gb=/%60/g,F_=/%7B/g,_b=/%7C/g,U_=/%7D/g,yb=/%20/g;function gh(t){return encodeURI(""+t).replace(_b,"|").replace(pb,"[").replace(mb,"]")}function Eb(t){return gh(t).replace(F_,"{").replace(U_,"}").replace(V_,"^")}function lu(t){return gh(t).replace(L_,"%2B").replace(yb,"+").replace(M_,"%23").replace(ub,"%26").replace(gb,"`").replace(F_,"{").replace(U_,"}").replace(V_,"^")}function vb(t){return lu(t).replace(fb,"%3D")}function Tb(t){return gh(t).replace(M_,"%23").replace(db,"%3F")}function wb(t){return t==null?"":Tb(t).replace(hb,"%2F")}function uo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Ib=/\/$/,bb=t=>t.replace(Ib,"");function Ac(t,e,n="/"){let s,r={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),r=t(i)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=Sb(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:uo(o)}}function Ab(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Jd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Cb(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Br(e.matched[s],n.matched[r])&&B_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Br(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function B_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Rb(t[n],e[n]))return!1;return!0}function Rb(t,e){return _n(t)?Zd(t,e):_n(e)?Zd(e,t):t===e}function Zd(t,e){return _n(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Sb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const ds={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ho;(function(t){t.pop="pop",t.push="push"})(ho||(ho={}));var Wi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Wi||(Wi={}));function Pb(t){if(!t)if(Tr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),bb(t)}const kb=/^[^#]+#/;function Nb(t,e){return t.replace(kb,"#")+e}function xb(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const bl=()=>({left:window.scrollX,top:window.scrollY});function Db(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=xb(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ep(t,e){return(history.state?history.state.position-e:-1)+t}const cu=new Map;function Ob(t,e){cu.set(t,e)}function Mb(t){const e=cu.get(t);return cu.delete(t),e}let Lb=()=>location.protocol+"//"+location.host;function $_(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let l=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(l);return c[0]!=="/"&&(c="/"+c),Jd(c,"")}return Jd(n,t)+s+r}function Vb(t,e,n,s){let r=[],i=[],o=null;const l=({state:m})=>{const g=$_(t,location),A=n.value,S=e.value;let N=0;if(m){if(n.value=g,e.value=m,o&&o===A){o=null;return}N=S?m.position-S.position:0}else s(g);r.forEach(V=>{V(n.value,A,{delta:N,type:ho.pop,direction:N?N>0?Wi.forward:Wi.back:Wi.unknown})})};function c(){o=n.value}function u(m){r.push(m);const g=()=>{const A=r.indexOf(m);A>-1&&r.splice(A,1)};return i.push(g),g}function h(){const{history:m}=window;m.state&&m.replaceState(xe({},m.state,{scroll:bl()}),"")}function d(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:u,destroy:d}}function tp(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?bl():null}}function Fb(t){const{history:e,location:n}=window,s={value:$_(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,h){const d=t.indexOf("#"),m=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:Lb()+t+c;try{e[h?"replaceState":"pushState"](u,"",m),r.value=u}catch(g){console.error(g),n[h?"replace":"assign"](m)}}function o(c,u){const h=xe({},e.state,tp(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,h,!0),s.value=c}function l(c,u){const h=xe({},r.value,e.state,{forward:c,scroll:bl()});i(h.current,h,!0);const d=xe({},tp(s.value,c,null),{position:h.position+1},u);i(c,d,!1),s.value=c}return{location:s,state:r,push:l,replace:o}}function Ub(t){t=Pb(t);const e=Fb(t),n=Vb(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=xe({location:"",base:t,go:s,createHref:Nb.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Bb(t){return typeof t=="string"||t&&typeof t=="object"}function j_(t){return typeof t=="string"||typeof t=="symbol"}const q_=Symbol("");var np;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(np||(np={}));function $r(t,e){return xe(new Error,{type:t,[q_]:!0},e)}function jn(t,e){return t instanceof Error&&q_ in t&&(e==null||!!(t.type&e))}const sp="[^/]+?",$b={sensitive:!1,strict:!1,start:!0,end:!0},jb=/[.+*?^${}()[\]/\\]/g;function qb(t,e){const n=xe({},$b,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let d=0;d<u.length;d++){const m=u[d];let g=40+(n.sensitive?.25:0);if(m.type===0)d||(r+="/"),r+=m.value.replace(jb,"\\$&"),g+=40;else if(m.type===1){const{value:A,repeatable:S,optional:N,regexp:V}=m;i.push({name:A,repeatable:S,optional:N});const F=V||sp;if(F!==sp){g+=10;try{new RegExp(`(${F})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${A}" (${F}): `+O.message)}}let D=S?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;d||(D=N&&u.length<2?`(?:/${D})`:"/"+D),N&&(D+="?"),r+=D,g+=20,N&&(g+=-8),S&&(g+=-20),F===".*"&&(g+=-50)}h.push(g)}s.push(h)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function l(u){const h=u.match(o),d={};if(!h)return null;for(let m=1;m<h.length;m++){const g=h[m]||"",A=i[m-1];d[A.name]=g&&A.repeatable?g.split("/"):g}return d}function c(u){let h="",d=!1;for(const m of t){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const g of m)if(g.type===0)h+=g.value;else if(g.type===1){const{value:A,repeatable:S,optional:N}=g,V=A in u?u[A]:"";if(_n(V)&&!S)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const F=_n(V)?V.join("/"):V;if(!F)if(N)m.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${A}"`);h+=F}}return h||"/"}return{re:o,score:s,keys:i,parse:l,stringify:c}}function Hb(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function H_(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=Hb(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(rp(s))return 1;if(rp(r))return-1}return r.length-s.length}function rp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Wb={type:0,value:""},zb=/[a-zA-Z0-9_]/;function Kb(t){if(!t)return[[]];if(t==="/")return[[Wb]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let l=0,c,u="",h="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&d(),o()):c===":"?(d(),n=1):m();break;case 4:m(),n=s;break;case 1:c==="("?n=2:zb.test(c)?m():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:n=3:h+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),r}function Gb(t,e,n){const s=qb(Kb(t.path),n),r=xe(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Qb(t,e){const n=[],s=new Map;e=lp({strict:!1,end:!0,sensitive:!1},e);function r(d){return s.get(d)}function i(d,m,g){const A=!g,S=op(d);S.aliasOf=g&&g.record;const N=lp(e,d),V=[S];if("alias"in d){const O=typeof d.alias=="string"?[d.alias]:d.alias;for(const ee of O)V.push(op(xe({},S,{components:g?g.record.components:S.components,path:ee,aliasOf:g?g.record:S})))}let F,D;for(const O of V){const{path:ee}=O;if(m&&ee[0]!=="/"){const te=m.record.path,C=te[te.length-1]==="/"?"":"/";O.path=m.record.path+(ee&&C+ee)}if(F=Gb(O,m,N),g?g.alias.push(F):(D=D||F,D!==F&&D.alias.push(F),A&&d.name&&!ap(F)&&o(d.name)),W_(F)&&c(F),S.children){const te=S.children;for(let C=0;C<te.length;C++)i(te[C],F,g&&g.children[C])}g=g||F}return D?()=>{o(D)}:Hi}function o(d){if(j_(d)){const m=s.get(d);m&&(s.delete(d),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(d);m>-1&&(n.splice(m,1),d.record.name&&s.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function l(){return n}function c(d){const m=Jb(d,n);n.splice(m,0,d),d.record.name&&!ap(d)&&s.set(d.record.name,d)}function u(d,m){let g,A={},S,N;if("name"in d&&d.name){if(g=s.get(d.name),!g)throw $r(1,{location:d});N=g.record.name,A=xe(ip(m.params,g.keys.filter(D=>!D.optional).concat(g.parent?g.parent.keys.filter(D=>D.optional):[]).map(D=>D.name)),d.params&&ip(d.params,g.keys.map(D=>D.name))),S=g.stringify(A)}else if(d.path!=null)S=d.path,g=n.find(D=>D.re.test(S)),g&&(A=g.parse(S),N=g.record.name);else{if(g=m.name?s.get(m.name):n.find(D=>D.re.test(m.path)),!g)throw $r(1,{location:d,currentLocation:m});N=g.record.name,A=xe({},m.params,d.params),S=g.stringify(A)}const V=[];let F=g;for(;F;)V.unshift(F.record),F=F.parent;return{name:N,path:S,params:A,matched:V,meta:Xb(V)}}t.forEach(d=>i(d));function h(){n.length=0,s.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:l,getRecordMatcher:r}}function ip(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function op(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Yb(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Yb(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function ap(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Xb(t){return t.reduce((e,n)=>xe(e,n.meta),{})}function lp(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Jb(t,e){let n=0,s=e.length;for(;n!==s;){const i=n+s>>1;H_(t,e[i])<0?s=i:n=i+1}const r=Zb(t);return r&&(s=e.lastIndexOf(r,s-1)),s}function Zb(t){let e=t;for(;e=e.parent;)if(W_(e)&&H_(t,e)===0)return e}function W_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function eA(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(L_," "),o=i.indexOf("="),l=uo(o<0?i:i.slice(0,o)),c=o<0?null:uo(i.slice(o+1));if(l in e){let u=e[l];_n(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function cp(t){let e="";for(let n in t){const s=t[n];if(n=vb(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(_n(s)?s.map(i=>i&&lu(i)):[s&&lu(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function tA(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=_n(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const nA=Symbol(""),up=Symbol(""),_h=Symbol(""),z_=Symbol(""),uu=Symbol("");function Ai(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ys(t,e,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c($r(4,{from:n,to:e})):m instanceof Error?c(m):Bb(m)?c($r(2,{from:e,to:m})):(o&&s.enterCallbacks[r]===o&&typeof m=="function"&&o.push(m),l())},h=i(()=>t.call(s&&s.instances[r],e,n,u));let d=Promise.resolve(h);t.length<3&&(d=d.then(u)),d.catch(m=>c(m))})}function Cc(t,e,n,s,r=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(O_(c)){const h=(c.__vccOpts||c)[e];h&&i.push(ys(h,n,s,o,l,r))}else{let u=c();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const d=cb(h)?h.default:h;o.mods[l]=h,o.components[l]=d;const g=(d.__vccOpts||d)[e];return g&&ys(g,n,s,o,l,r)()}))}}return i}function hp(t){const e=pn(_h),n=pn(z_),s=cn(()=>{const c=vt(t.to);return e.resolve(c)}),r=cn(()=>{const{matched:c}=s.value,{length:u}=c,h=c[u-1],d=n.matched;if(!h||!d.length)return-1;const m=d.findIndex(Br.bind(null,h));if(m>-1)return m;const g=fp(c[u-2]);return u>1&&fp(h)===g&&d[d.length-1].path!==g?d.findIndex(Br.bind(null,c[u-2])):m}),i=cn(()=>r.value>-1&&oA(n.params,s.value.params)),o=cn(()=>r.value>-1&&r.value===n.matched.length-1&&B_(n.params,s.value.params));function l(c={}){if(iA(c)){const u=e[vt(t.replace)?"replace":"push"](vt(t.to)).catch(Hi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:cn(()=>s.value.href),isActive:i,isExactActive:o,navigate:l}}function sA(t){return t.length===1?t[0]:t}const rA=e_({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:hp,setup(t,{slots:e}){const n=_l(hp(t)),{options:s}=pn(_h),r=cn(()=>({[dp(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[dp(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&sA(e.default(n));return t.custom?i:Ur("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),K_=rA;function iA(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function oA(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!_n(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function fp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const dp=(t,e,n)=>t??e??n,aA=e_({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=pn(uu),r=cn(()=>t.route||s.value),i=pn(up,0),o=cn(()=>{let u=vt(i);const{matched:h}=r.value;let d;for(;(d=h[u])&&!d.components;)u++;return u}),l=cn(()=>r.value.matched[o.value]);ga(up,cn(()=>o.value+1)),ga(nA,l),ga(uu,r);const c=zt();return Dr(()=>[c.value,l.value,t.name],([u,h,d],[m,g,A])=>{h&&(h.instances[d]=u,g&&g!==h&&u&&u===m&&(h.leaveGuards.size||(h.leaveGuards=g.leaveGuards),h.updateGuards.size||(h.updateGuards=g.updateGuards))),u&&h&&(!g||!Br(h,g)||!m)&&(h.enterCallbacks[d]||[]).forEach(S=>S(u))},{flush:"post"}),()=>{const u=r.value,h=t.name,d=l.value,m=d&&d.components[h];if(!m)return pp(n.default,{Component:m,route:u});const g=d.props[h],A=g?g===!0?u.params:typeof g=="function"?g(u):g:null,N=Ur(m,xe({},A,e,{onVnodeUnmounted:V=>{V.component.isUnmounted&&(d.instances[h]=null)},ref:c}));return pp(n.default,{Component:N,route:u})||N}}});function pp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const lA=aA;function cA(t){const e=Qb(t.routes,t),n=t.parseQuery||eA,s=t.stringifyQuery||cp,r=t.history,i=Ai(),o=Ai(),l=Ai(),c=Fg(ds);let u=ds;Tr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=bc.bind(null,M=>""+M),d=bc.bind(null,wb),m=bc.bind(null,uo);function g(M,J){let Y,ne;return j_(M)?(Y=e.getRecordMatcher(M),ne=J):ne=M,e.addRoute(ne,Y)}function A(M){const J=e.getRecordMatcher(M);J&&e.removeRoute(J)}function S(){return e.getRoutes().map(M=>M.record)}function N(M){return!!e.getRecordMatcher(M)}function V(M,J){if(J=xe({},J||c.value),typeof M=="string"){const P=Ac(n,M,J.path),L=e.resolve({path:P.path},J),$=r.createHref(P.fullPath);return xe(P,L,{params:m(L.params),hash:uo(P.hash),redirectedFrom:void 0,href:$})}let Y;if(M.path!=null)Y=xe({},M,{path:Ac(n,M.path,J.path).path});else{const P=xe({},M.params);for(const L in P)P[L]==null&&delete P[L];Y=xe({},M,{params:d(P)}),J.params=d(J.params)}const ne=e.resolve(Y,J),Ce=M.hash||"";ne.params=h(m(ne.params));const T=Ab(s,xe({},M,{hash:Eb(Ce),path:ne.path})),w=r.createHref(T);return xe({fullPath:T,hash:Ce,query:s===cp?tA(M.query):M.query||{}},ne,{redirectedFrom:void 0,href:w})}function F(M){return typeof M=="string"?Ac(n,M,c.value.path):xe({},M)}function D(M,J){if(u!==M)return $r(8,{from:J,to:M})}function O(M){return C(M)}function ee(M){return O(xe(F(M),{replace:!0}))}function te(M){const J=M.matched[M.matched.length-1];if(J&&J.redirect){const{redirect:Y}=J;let ne=typeof Y=="function"?Y(M):Y;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=F(ne):{path:ne},ne.params={}),xe({query:M.query,hash:M.hash,params:ne.path!=null?{}:M.params},ne)}}function C(M,J){const Y=u=V(M),ne=c.value,Ce=M.state,T=M.force,w=M.replace===!0,P=te(Y);if(P)return C(xe(F(P),{state:typeof P=="object"?xe({},Ce,P.state):Ce,force:T,replace:w}),J||Y);const L=Y;L.redirectedFrom=J;let $;return!T&&Cb(s,ne,Y)&&($=$r(16,{to:L,from:ne}),Xt(ne,ne,!0,!1)),($?Promise.resolve($):b(L,ne)).catch(U=>jn(U)?jn(U,2)?U:an(U):ge(U,L,ne)).then(U=>{if(U){if(jn(U,2))return C(xe({replace:w},F(U.to),{state:typeof U.to=="object"?xe({},Ce,U.to.state):Ce,force:T}),J||L)}else U=I(L,ne,!0,w,Ce);return R(L,ne,U),U})}function y(M,J){const Y=D(M,J);return Y?Promise.reject(Y):Promise.resolve()}function E(M){const J=as.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(M):M()}function b(M,J){let Y;const[ne,Ce,T]=uA(M,J);Y=Cc(ne.reverse(),"beforeRouteLeave",M,J);for(const P of ne)P.leaveGuards.forEach(L=>{Y.push(ys(L,M,J))});const w=y.bind(null,M,J);return Y.push(w),Ft(Y).then(()=>{Y=[];for(const P of i.list())Y.push(ys(P,M,J));return Y.push(w),Ft(Y)}).then(()=>{Y=Cc(Ce,"beforeRouteUpdate",M,J);for(const P of Ce)P.updateGuards.forEach(L=>{Y.push(ys(L,M,J))});return Y.push(w),Ft(Y)}).then(()=>{Y=[];for(const P of T)if(P.beforeEnter)if(_n(P.beforeEnter))for(const L of P.beforeEnter)Y.push(ys(L,M,J));else Y.push(ys(P.beforeEnter,M,J));return Y.push(w),Ft(Y)}).then(()=>(M.matched.forEach(P=>P.enterCallbacks={}),Y=Cc(T,"beforeRouteEnter",M,J,E),Y.push(w),Ft(Y))).then(()=>{Y=[];for(const P of o.list())Y.push(ys(P,M,J));return Y.push(w),Ft(Y)}).catch(P=>jn(P,8)?P:Promise.reject(P))}function R(M,J,Y){l.list().forEach(ne=>E(()=>ne(M,J,Y)))}function I(M,J,Y,ne,Ce){const T=D(M,J);if(T)return T;const w=J===ds,P=Tr?history.state:{};Y&&(ne||w?r.replace(M.fullPath,xe({scroll:w&&P&&P.scroll},Ce)):r.push(M.fullPath,Ce)),c.value=M,Xt(M,J,Y,w),an()}let v;function Le(){v||(v=r.listen((M,J,Y)=>{if(!wn.listening)return;const ne=V(M),Ce=te(ne);if(Ce){C(xe(Ce,{replace:!0,force:!0}),ne).catch(Hi);return}u=ne;const T=c.value;Tr&&Ob(ep(T.fullPath,Y.delta),bl()),b(ne,T).catch(w=>jn(w,12)?w:jn(w,2)?(C(xe(F(w.to),{force:!0}),ne).then(P=>{jn(P,20)&&!Y.delta&&Y.type===ho.pop&&r.go(-1,!1)}).catch(Hi),Promise.reject()):(Y.delta&&r.go(-Y.delta,!1),ge(w,ne,T))).then(w=>{w=w||I(ne,T,!1),w&&(Y.delta&&!jn(w,8)?r.go(-Y.delta,!1):Y.type===ho.pop&&jn(w,20)&&r.go(-1,!1)),R(ne,T,w)}).catch(Hi)}))}let st=Ai(),Ge=Ai(),ve;function ge(M,J,Y){an(M);const ne=Ge.list();return ne.length?ne.forEach(Ce=>Ce(M,J,Y)):console.error(M),Promise.reject(M)}function qt(){return ve&&c.value!==ds?Promise.resolve():new Promise((M,J)=>{st.add([M,J])})}function an(M){return ve||(ve=!M,Le(),st.list().forEach(([J,Y])=>M?Y(M):J()),st.reset()),M}function Xt(M,J,Y,ne){const{scrollBehavior:Ce}=t;if(!Tr||!Ce)return Promise.resolve();const T=!Y&&Mb(ep(M.fullPath,0))||(ne||!Y)&&history.state&&history.state.scroll||null;return jg().then(()=>Ce(M,J,T)).then(w=>w&&Db(w)).catch(w=>ge(w,M,J))}const Qe=M=>r.go(M);let Ye;const as=new Set,wn={currentRoute:c,listening:!0,addRoute:g,removeRoute:A,clearRoutes:e.clearRoutes,hasRoute:N,getRoutes:S,resolve:V,options:t,push:O,replace:ee,go:Qe,back:()=>Qe(-1),forward:()=>Qe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Ge.add,isReady:qt,install(M){const J=this;M.component("RouterLink",K_),M.component("RouterView",lA),M.config.globalProperties.$router=J,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>vt(c)}),Tr&&!Ye&&c.value===ds&&(Ye=!0,O(r.location).catch(Ce=>{}));const Y={};for(const Ce in ds)Object.defineProperty(Y,Ce,{get:()=>c.value[Ce],enumerable:!0});M.provide(_h,J),M.provide(z_,Lg(Y)),M.provide(uu,c);const ne=M.unmount;as.add(M),M.unmount=function(){as.delete(M),as.size<1&&(u=ds,v&&v(),v=null,c.value=ds,Ye=!1,ve=!1),ne()}}};function Ft(M){return M.reduce((J,Y)=>J.then(()=>E(Y)),Promise.resolve())}return wn}function uA(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>Br(u,l))?s.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>Br(u,c))||r.push(c))}return[n,s,r]}const hA="/docutrack-landing/docutrack-logo-02.png";/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fA=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var sa={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dA=({size:t,strokeWidth:e=2,absoluteStrokeWidth:n,color:s,iconNode:r,name:i,class:o,...l},{slots:c})=>Ur("svg",{...sa,width:t||sa.width,height:t||sa.height,stroke:s||sa.stroke,"stroke-width":n?Number(e)*24/Number(t):e,class:["lucide",`lucide-${fA(i??"icon")}`],...l},[...r.map(u=>Ur(...u)),...c.default?[c.default()]:[]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=(t,e)=>(n,{slots:s})=>Ur(dA,{...n,iconNode:e,name:t},s);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=rs("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mA=rs("ChevronDownIcon",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gA=rs("CircleCheckBigIcon",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=rs("CircleXIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA=rs("HeartIcon",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA=rs("InstagramIcon",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vA=rs("LinkedinIcon",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=rs("MoonIcon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=rs("SunIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),IA={class:"container mx-auto px-4 py-4 flex justify-between items-center"},bA={class:"hidden md:flex justify-end gap-6 lg:gap-12 space-x-4 w-2/3"},AA=["href"],CA={class:"flex items-center space-x-4"},RA={class:"w-6 h-6 flex items-center justify-center"},SA={class:"relative w-6 h-4"},PA={class:"flex flex-col h-full"},kA={class:"flex-1 pt-24 pb-8"},NA={class:"flex flex-col space-y-8"},xA=["href"],DA={__name:"HeaderComponent",props:["isDarkMode","navItems"],emits:["switchTheme"],setup(t,{emit:e}){const n=e,s=zt(!1),r=()=>{s.value=!s.value,s.value?document.body.style.overflow="hidden":document.body.style.overflow=""},i=()=>{s.value=!1,document.body.style.overflow=""},o=()=>{n("switchTheme")};return hh(()=>{const l=c=>{c.key==="Escape"&&s.value&&i()};document.addEventListener("keydown",l)}),fh(()=>{document.body.style.overflow="",document.removeEventListener("keydown",handleEscape)}),(l,c)=>(Se(),Be("header",{class:Ne(["sticky top-0 z-50 shadow-md transition-colors duration-300",t.isDarkMode?"bg-base-400":"bg-base-100"])},[W("nav",IA,[Ae(vt(K_),{to:"/",class:"flex items-center relative z-50"},{default:ma(()=>c[1]||(c[1]=[W("img",{src:hA,alt:"Docutrack Logo",class:"h-10 w-auto mr-2"},null,-1),W("span",{class:"text-2xl font-bold text-primary-200 hidden md:block w-auto"},"Docutrack",-1)])),_:1}),W("div",bA,[(Se(!0),Be(rt,null,Zn(t.navItems,u=>(Se(),Be("a",{key:u,href:`#${u.toLowerCase()}`,class:Ne(["hover:text-primary-200 transition-colors font-semibold text-lg",t.isDarkMode?"text-base-100":"text-base-400"])},yt(u),11,AA))),128))]),W("div",CA,[W("button",{onClick:o,class:"text-primary-200 relative z-50"},[t.isDarkMode?(Se(),ao(vt(wA),{key:0,class:"w-6 h-6"})):(Se(),ao(vt(TA),{key:1,class:"w-6 h-6"}))]),W("button",{onClick:r,class:"md:hidden text-primary-200 relative z-50","aria-label":"Toggle menu"},[c[2]||(c[2]=W("span",{class:"sr-only"},"Toggle menu",-1)),W("div",RA,[W("div",SA,[W("span",{class:Ne(["absolute h-0.5 w-6 transform transition-all duration-300",s.value?"rotate-45 translate-y-2":"translate-y-0",(t.isDarkMode,"bg-primary-200")])},null,2),W("span",{class:Ne(["absolute h-0.5 w-6 transform transition-all duration-300",s.value?"opacity-0":"opacity-100",(t.isDarkMode,"bg-primary-200")]),style:{top:"50%",transform:"translateY(-50%)"}},null,2),W("span",{class:Ne(["absolute h-0.5 w-6 transform transition-all duration-300",s.value?"-rotate-45 -translate-y-2":"translate-y-4",(t.isDarkMode,"bg-primary-200")])},null,2)])])])])]),Ae(Od,{"enter-active-class":"transition-all duration-300 ease-out","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"transition-all duration-300 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:ma(()=>[s.value?(Se(),Be("div",{key:0,class:"fixed inset-0 z-40",onClick:i},[c[3]||(c[3]=W("div",{class:"absolute inset-0 bg-black/50 backdrop-blur-sm"},null,-1)),Ae(Od,{"enter-active-class":"transition-all duration-300 ease-out","enter-from-class":"translate-x-full","enter-to-class":"translate-x-0","leave-active-class":"transition-all duration-300 ease-in","leave-from-class":"translate-x-0","leave-to-class":"translate-x-full"},{default:ma(()=>[s.value?(Se(),Be("div",{key:0,class:Ne(["fixed inset-y-0 right-0 w-full max-w p-6 overflow-y-auto",t.isDarkMode?"bg-base-400":"bg-base-100"]),onClick:c[0]||(c[0]=eb(()=>{},["stop"]))},[W("div",PA,[W("div",kA,[W("nav",NA,[(Se(!0),Be(rt,null,Zn(t.navItems,u=>(Se(),Be("a",{key:u,href:`#${u.toLowerCase()}`,onClick:i,class:Ne(["text-2xl font-semibold text-center py-2 transition-colors duration-300",t.isDarkMode?"text-base-100 hover:text-primary-200":"text-base-400 hover:text-primary-200"])},yt(u),11,xA))),128))])]),W("div",{class:"pt-6 mt-auto border-t border-gray-200 dark:border-gray-800"},[W("div",{class:"flex justify-center space-x-6"},[W("button",{class:"px-6 py-3 rounded-full bg-primary-200 text-base-400 font-semibold hover:bg-primary-300 transition-colors",onClick:i}," Get Started ")])])])],2)):iu("",!0)]),_:1})])):iu("",!0)]),_:1})],2))}},OA=D_(DA,[["__scopeId","data-v-603dbf1f"]]),MA="/docutrack-landing/hero-image-01.jpg";var mp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q=function(t,e){if(!t)throw Zr(e)},Zr=function(t){return new Error("Firebase Database ("+G_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},LA=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],l=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Al={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,l=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,h=i>>2,d=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,g=u&63;c||(g=64,o||(m=64)),s.push(n[h],n[d],n[m],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Q_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):LA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],l=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||l==null||u==null||d==null)throw new VA;const m=i<<2|l>>4;if(s.push(m),u!==64){const g=l<<4&240|u>>2;if(s.push(g),d!==64){const A=u<<6&192|d;s.push(A)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class VA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Y_=function(t){const e=Q_(t);return Al.encodeByteArray(e,!0)},Ma=function(t){return Y_(t).replace(/\./g,"")},La=function(t){try{return Al.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FA(t){return X_(void 0,t)}function X_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!UA(n)||(t[n]=X_(t[n],e[n]));return t}function UA(t){return t!=="__proto__"}/**
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
 */function BA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $A=()=>BA().__FIREBASE_DEFAULTS__,jA=()=>{if(typeof process>"u"||typeof mp>"u")return;const t=mp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},qA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&La(t[1]);return e&&JSON.parse(e)},Cl=()=>{try{return $A()||jA()||qA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},HA=t=>{var e,n;return(n=(e=Cl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},WA=t=>{const e=HA(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},J_=()=>{var t;return(t=Cl())===null||t===void 0?void 0:t.config},zA=t=>{var e;return(e=Cl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function KA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ma(JSON.stringify(n)),Ma(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yn())}function GA(){var t;const e=(t=Cl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function QA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function YA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Z_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function XA(){return G_.NODE_ADMIN===!0}function JA(){return!GA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ey(){try{return typeof indexedDB=="object"}catch{return!1}}function ZA(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC="FirebaseError";class is extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=eC,Object.setPrototypeOf(this,is.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ei.prototype.create)}}class ei{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?tC(i,s):"Error",l=`${this.serviceName}: ${o} (${r}).`;return new is(r,l,s)}}function tC(t,e){return t.replace(nC,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const nC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t){return JSON.parse(t)}function gt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty=function(t){let e={},n={},s={},r="";try{const i=t.split(".");e=po(La(i[0])||""),n=po(La(i[1])||""),r=i[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:r}},sC=function(t){const e=ty(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},rC=function(t){const e=ty(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function jr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function gp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Va(t,e,n){const s={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=e.call(n,t[r],r,t));return s}function hu(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(_p(i)&&_p(o)){if(!hu(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function _p(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const m=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(m<<1|m>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],u,h;for(let d=0;d<80;d++){d<40?d<20?(u=l^i&(o^l),h=1518500249):(u=i^o^l,h=1859775393):d<60?(u=i&o|l&(i|o),h=2400959708):(u=i^o^l,h=3395469782);const m=(r<<5|r>>>27)+u+c+h+s[d]&4294967295;c=l,l=o,o=(i<<30|i>>>2)&4294967295,i=r,r=m}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<n;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function oC(t,e){const n=new aC(t,e);return n.subscribe.bind(n)}class aC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");lC(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Rc),r.error===void 0&&(r.error=Rc),r.complete===void 0&&(r.complete=Rc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Rc(){}function cC(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,Q(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;r=65536+(i<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Rl=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function En(t){return t&&t._delegate?t._delegate:t}class vn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ks="[DEFAULT]";/**
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
 */class hC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new fo;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dC(e))try{this.getOrInitializeService({instanceIdentifier:Ks})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Ks){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ks){return this.instances.has(e)}getOptions(e=Ks){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:fC(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ks){return this.component?this.component.multipleInstances?e:Ks:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fC(t){return t===Ks?void 0:t}function dC(t){return t.instantiationMode==="EAGER"}/**
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
 */class pC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const mC={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},gC=me.INFO,_C={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},yC=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=_C[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ao{constructor(e){this.name=e,this._logLevel=gC,this._logHandler=yC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const EC=(t,e)=>e.some(n=>t instanceof n);let yp,Ep;function vC(){return yp||(yp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function TC(){return Ep||(Ep=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ny=new WeakMap,fu=new WeakMap,sy=new WeakMap,Sc=new WeakMap,vh=new WeakMap;function wC(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ws(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ny.set(n,t)}).catch(()=>{}),vh.set(e,t),e}function IC(t){if(fu.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});fu.set(t,e)}let du={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||sy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ws(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function bC(t){du=t(du)}function AC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Pc(this),e,...n);return sy.set(s,e.sort?e.sort():[e]),ws(s)}:TC().includes(t)?function(...e){return t.apply(Pc(this),e),ws(ny.get(this))}:function(...e){return ws(t.apply(Pc(this),e))}}function CC(t){return typeof t=="function"?AC(t):(t instanceof IDBTransaction&&IC(t),EC(t,vC())?new Proxy(t,du):t)}function ws(t){if(t instanceof IDBRequest)return wC(t);if(Sc.has(t))return Sc.get(t);const e=CC(t);return e!==t&&(Sc.set(t,e),vh.set(e,t)),e}const Pc=t=>vh.get(t);function RC(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),l=ws(o);return s&&o.addEventListener("upgradeneeded",c=>{s(ws(o.result),c.oldVersion,c.newVersion,ws(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const SC=["get","getKey","getAll","getAllKeys","count"],PC=["put","add","delete","clear"],kc=new Map;function vp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(kc.get(e))return kc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=PC.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||SC.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),r&&c.done]))[0]};return kc.set(e,i),i}bC(t=>({...t,get:(e,n,s)=>vp(e,n)||t.get(e,n,s),has:(e,n)=>!!vp(e,n)||t.has(e,n)}));/**
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
 */class kC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(NC(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function NC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pu="@firebase/app",Tp="0.10.18";/**
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
 */const es=new Ao("@firebase/app"),xC="@firebase/app-compat",DC="@firebase/analytics-compat",OC="@firebase/analytics",MC="@firebase/app-check-compat",LC="@firebase/app-check",VC="@firebase/auth",FC="@firebase/auth-compat",UC="@firebase/database",BC="@firebase/data-connect",$C="@firebase/database-compat",jC="@firebase/functions",qC="@firebase/functions-compat",HC="@firebase/installations",WC="@firebase/installations-compat",zC="@firebase/messaging",KC="@firebase/messaging-compat",GC="@firebase/performance",QC="@firebase/performance-compat",YC="@firebase/remote-config",XC="@firebase/remote-config-compat",JC="@firebase/storage",ZC="@firebase/storage-compat",eR="@firebase/firestore",tR="@firebase/vertexai",nR="@firebase/firestore-compat",sR="firebase",rR="11.2.0";/**
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
 */const mu="[DEFAULT]",iR={[pu]:"fire-core",[xC]:"fire-core-compat",[OC]:"fire-analytics",[DC]:"fire-analytics-compat",[LC]:"fire-app-check",[MC]:"fire-app-check-compat",[VC]:"fire-auth",[FC]:"fire-auth-compat",[UC]:"fire-rtdb",[BC]:"fire-data-connect",[$C]:"fire-rtdb-compat",[jC]:"fire-fn",[qC]:"fire-fn-compat",[HC]:"fire-iid",[WC]:"fire-iid-compat",[zC]:"fire-fcm",[KC]:"fire-fcm-compat",[GC]:"fire-perf",[QC]:"fire-perf-compat",[YC]:"fire-rc",[XC]:"fire-rc-compat",[JC]:"fire-gcs",[ZC]:"fire-gcs-compat",[eR]:"fire-fst",[nR]:"fire-fst-compat",[tR]:"fire-vertex","fire-js":"fire-js",[sR]:"fire-js-all"};/**
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
 */const Fa=new Map,oR=new Map,gu=new Map;function wp(t,e){try{t.container.addComponent(e)}catch(n){es.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Dn(t){const e=t.name;if(gu.has(e))return es.debug(`There were multiple attempts to register component ${e}.`),!1;gu.set(e,t);for(const n of Fa.values())wp(n,t);for(const n of oR.values())wp(n,t);return!0}function aR(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function xi(t){return t.settings!==void 0}/**
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
 */const lR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Is=new ei("app","Firebase",lR);/**
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
 */class cR{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Is.create("app-deleted",{appName:this._name})}}/**
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
 */const ti=rR;function ry(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:mu,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Is.create("bad-app-name",{appName:String(r)});if(n||(n=J_()),!n)throw Is.create("no-options");const i=Fa.get(r);if(i){if(hu(n,i.options)&&hu(s,i.config))return i;throw Is.create("duplicate-app",{appName:r})}const o=new pC(r);for(const c of gu.values())o.addComponent(c);const l=new cR(n,s,o);return Fa.set(r,l),l}function iy(t=mu){const e=Fa.get(t);if(!e&&t===mu&&J_())return ry();if(!e)throw Is.create("no-app",{appName:t});return e}function Gt(t,e,n){var s;let r=(s=iR[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${r}" with version "${e}":`];i&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),es.warn(l.join(" "));return}Dn(new vn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const uR="firebase-heartbeat-database",hR=1,mo="firebase-heartbeat-store";let Nc=null;function oy(){return Nc||(Nc=RC(uR,hR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(mo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Is.create("idb-open",{originalErrorMessage:t.message})})),Nc}async function fR(t){try{const n=(await oy()).transaction(mo),s=await n.objectStore(mo).get(ay(t));return await n.done,s}catch(e){if(e instanceof is)es.warn(e.message);else{const n=Is.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});es.warn(n.message)}}}async function Ip(t,e){try{const s=(await oy()).transaction(mo,"readwrite");await s.objectStore(mo).put(e,ay(t)),await s.done}catch(n){if(n instanceof is)es.warn(n.message);else{const s=Is.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});es.warn(s.message)}}}function ay(t){return`${t.name}!${t.options.appId}`}/**
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
 */const dR=1024,pR=30*24*60*60*1e3;class mR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _R(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=bp();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=pR}),this._storage.overwrite(this._heartbeatsCache))}catch(s){es.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=bp(),{heartbeatsToSend:s,unsentEntries:r}=gR(this._heartbeatsCache.heartbeats),i=Ma(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return es.warn(n),""}}}function bp(){return new Date().toISOString().substring(0,10)}function gR(t,e=dR){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Ap(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ap(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class _R{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ey()?ZA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await fR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ip(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ip(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ap(t){return Ma(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function yR(t){Dn(new vn("platform-logger",e=>new kC(e),"PRIVATE")),Dn(new vn("heartbeat",e=>new mR(e),"PRIVATE")),Gt(pu,Tp,t),Gt(pu,Tp,"esm2017"),Gt("fire-js","")}yR("");var Cp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bs,ly;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,y){function E(){}E.prototype=y.prototype,C.D=y.prototype,C.prototype=new E,C.prototype.constructor=C,C.C=function(b,R,I){for(var v=Array(arguments.length-2),Le=2;Le<arguments.length;Le++)v[Le-2]=arguments[Le];return y.prototype[R].apply(b,v)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(C,y,E){E||(E=0);var b=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)b[R]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(R=0;16>R;++R)b[R]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=C.g[0],E=C.g[1],R=C.g[2];var I=C.g[3],v=y+(I^E&(R^I))+b[0]+3614090360&4294967295;y=E+(v<<7&4294967295|v>>>25),v=I+(R^y&(E^R))+b[1]+3905402710&4294967295,I=y+(v<<12&4294967295|v>>>20),v=R+(E^I&(y^E))+b[2]+606105819&4294967295,R=I+(v<<17&4294967295|v>>>15),v=E+(y^R&(I^y))+b[3]+3250441966&4294967295,E=R+(v<<22&4294967295|v>>>10),v=y+(I^E&(R^I))+b[4]+4118548399&4294967295,y=E+(v<<7&4294967295|v>>>25),v=I+(R^y&(E^R))+b[5]+1200080426&4294967295,I=y+(v<<12&4294967295|v>>>20),v=R+(E^I&(y^E))+b[6]+2821735955&4294967295,R=I+(v<<17&4294967295|v>>>15),v=E+(y^R&(I^y))+b[7]+4249261313&4294967295,E=R+(v<<22&4294967295|v>>>10),v=y+(I^E&(R^I))+b[8]+1770035416&4294967295,y=E+(v<<7&4294967295|v>>>25),v=I+(R^y&(E^R))+b[9]+2336552879&4294967295,I=y+(v<<12&4294967295|v>>>20),v=R+(E^I&(y^E))+b[10]+4294925233&4294967295,R=I+(v<<17&4294967295|v>>>15),v=E+(y^R&(I^y))+b[11]+2304563134&4294967295,E=R+(v<<22&4294967295|v>>>10),v=y+(I^E&(R^I))+b[12]+1804603682&4294967295,y=E+(v<<7&4294967295|v>>>25),v=I+(R^y&(E^R))+b[13]+4254626195&4294967295,I=y+(v<<12&4294967295|v>>>20),v=R+(E^I&(y^E))+b[14]+2792965006&4294967295,R=I+(v<<17&4294967295|v>>>15),v=E+(y^R&(I^y))+b[15]+1236535329&4294967295,E=R+(v<<22&4294967295|v>>>10),v=y+(R^I&(E^R))+b[1]+4129170786&4294967295,y=E+(v<<5&4294967295|v>>>27),v=I+(E^R&(y^E))+b[6]+3225465664&4294967295,I=y+(v<<9&4294967295|v>>>23),v=R+(y^E&(I^y))+b[11]+643717713&4294967295,R=I+(v<<14&4294967295|v>>>18),v=E+(I^y&(R^I))+b[0]+3921069994&4294967295,E=R+(v<<20&4294967295|v>>>12),v=y+(R^I&(E^R))+b[5]+3593408605&4294967295,y=E+(v<<5&4294967295|v>>>27),v=I+(E^R&(y^E))+b[10]+38016083&4294967295,I=y+(v<<9&4294967295|v>>>23),v=R+(y^E&(I^y))+b[15]+3634488961&4294967295,R=I+(v<<14&4294967295|v>>>18),v=E+(I^y&(R^I))+b[4]+3889429448&4294967295,E=R+(v<<20&4294967295|v>>>12),v=y+(R^I&(E^R))+b[9]+568446438&4294967295,y=E+(v<<5&4294967295|v>>>27),v=I+(E^R&(y^E))+b[14]+3275163606&4294967295,I=y+(v<<9&4294967295|v>>>23),v=R+(y^E&(I^y))+b[3]+4107603335&4294967295,R=I+(v<<14&4294967295|v>>>18),v=E+(I^y&(R^I))+b[8]+1163531501&4294967295,E=R+(v<<20&4294967295|v>>>12),v=y+(R^I&(E^R))+b[13]+2850285829&4294967295,y=E+(v<<5&4294967295|v>>>27),v=I+(E^R&(y^E))+b[2]+4243563512&4294967295,I=y+(v<<9&4294967295|v>>>23),v=R+(y^E&(I^y))+b[7]+1735328473&4294967295,R=I+(v<<14&4294967295|v>>>18),v=E+(I^y&(R^I))+b[12]+2368359562&4294967295,E=R+(v<<20&4294967295|v>>>12),v=y+(E^R^I)+b[5]+4294588738&4294967295,y=E+(v<<4&4294967295|v>>>28),v=I+(y^E^R)+b[8]+2272392833&4294967295,I=y+(v<<11&4294967295|v>>>21),v=R+(I^y^E)+b[11]+1839030562&4294967295,R=I+(v<<16&4294967295|v>>>16),v=E+(R^I^y)+b[14]+4259657740&4294967295,E=R+(v<<23&4294967295|v>>>9),v=y+(E^R^I)+b[1]+2763975236&4294967295,y=E+(v<<4&4294967295|v>>>28),v=I+(y^E^R)+b[4]+1272893353&4294967295,I=y+(v<<11&4294967295|v>>>21),v=R+(I^y^E)+b[7]+4139469664&4294967295,R=I+(v<<16&4294967295|v>>>16),v=E+(R^I^y)+b[10]+3200236656&4294967295,E=R+(v<<23&4294967295|v>>>9),v=y+(E^R^I)+b[13]+681279174&4294967295,y=E+(v<<4&4294967295|v>>>28),v=I+(y^E^R)+b[0]+3936430074&4294967295,I=y+(v<<11&4294967295|v>>>21),v=R+(I^y^E)+b[3]+3572445317&4294967295,R=I+(v<<16&4294967295|v>>>16),v=E+(R^I^y)+b[6]+76029189&4294967295,E=R+(v<<23&4294967295|v>>>9),v=y+(E^R^I)+b[9]+3654602809&4294967295,y=E+(v<<4&4294967295|v>>>28),v=I+(y^E^R)+b[12]+3873151461&4294967295,I=y+(v<<11&4294967295|v>>>21),v=R+(I^y^E)+b[15]+530742520&4294967295,R=I+(v<<16&4294967295|v>>>16),v=E+(R^I^y)+b[2]+3299628645&4294967295,E=R+(v<<23&4294967295|v>>>9),v=y+(R^(E|~I))+b[0]+4096336452&4294967295,y=E+(v<<6&4294967295|v>>>26),v=I+(E^(y|~R))+b[7]+1126891415&4294967295,I=y+(v<<10&4294967295|v>>>22),v=R+(y^(I|~E))+b[14]+2878612391&4294967295,R=I+(v<<15&4294967295|v>>>17),v=E+(I^(R|~y))+b[5]+4237533241&4294967295,E=R+(v<<21&4294967295|v>>>11),v=y+(R^(E|~I))+b[12]+1700485571&4294967295,y=E+(v<<6&4294967295|v>>>26),v=I+(E^(y|~R))+b[3]+2399980690&4294967295,I=y+(v<<10&4294967295|v>>>22),v=R+(y^(I|~E))+b[10]+4293915773&4294967295,R=I+(v<<15&4294967295|v>>>17),v=E+(I^(R|~y))+b[1]+2240044497&4294967295,E=R+(v<<21&4294967295|v>>>11),v=y+(R^(E|~I))+b[8]+1873313359&4294967295,y=E+(v<<6&4294967295|v>>>26),v=I+(E^(y|~R))+b[15]+4264355552&4294967295,I=y+(v<<10&4294967295|v>>>22),v=R+(y^(I|~E))+b[6]+2734768916&4294967295,R=I+(v<<15&4294967295|v>>>17),v=E+(I^(R|~y))+b[13]+1309151649&4294967295,E=R+(v<<21&4294967295|v>>>11),v=y+(R^(E|~I))+b[4]+4149444226&4294967295,y=E+(v<<6&4294967295|v>>>26),v=I+(E^(y|~R))+b[11]+3174756917&4294967295,I=y+(v<<10&4294967295|v>>>22),v=R+(y^(I|~E))+b[2]+718787259&4294967295,R=I+(v<<15&4294967295|v>>>17),v=E+(I^(R|~y))+b[9]+3951481745&4294967295,C.g[0]=C.g[0]+y&4294967295,C.g[1]=C.g[1]+(R+(v<<21&4294967295|v>>>11))&4294967295,C.g[2]=C.g[2]+R&4294967295,C.g[3]=C.g[3]+I&4294967295}s.prototype.u=function(C,y){y===void 0&&(y=C.length);for(var E=y-this.blockSize,b=this.B,R=this.h,I=0;I<y;){if(R==0)for(;I<=E;)r(this,C,I),I+=this.blockSize;if(typeof C=="string"){for(;I<y;)if(b[R++]=C.charCodeAt(I++),R==this.blockSize){r(this,b),R=0;break}}else for(;I<y;)if(b[R++]=C[I++],R==this.blockSize){r(this,b),R=0;break}}this.h=R,this.o+=y},s.prototype.v=function(){var C=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);C[0]=128;for(var y=1;y<C.length-8;++y)C[y]=0;var E=8*this.o;for(y=C.length-8;y<C.length;++y)C[y]=E&255,E/=256;for(this.u(C),C=Array(16),y=E=0;4>y;++y)for(var b=0;32>b;b+=8)C[E++]=this.g[y]>>>b&255;return C};function i(C,y){var E=l;return Object.prototype.hasOwnProperty.call(E,C)?E[C]:E[C]=y(C)}function o(C,y){this.h=y;for(var E=[],b=!0,R=C.length-1;0<=R;R--){var I=C[R]|0;b&&I==y||(E[R]=I,b=!1)}this.g=E}var l={};function c(C){return-128<=C&&128>C?i(C,function(y){return new o([y|0],0>y?-1:0)}):new o([C|0],0>C?-1:0)}function u(C){if(isNaN(C)||!isFinite(C))return d;if(0>C)return N(u(-C));for(var y=[],E=1,b=0;C>=E;b++)y[b]=C/E|0,E*=4294967296;return new o(y,0)}function h(C,y){if(C.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(C.charAt(0)=="-")return N(h(C.substring(1),y));if(0<=C.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=u(Math.pow(y,8)),b=d,R=0;R<C.length;R+=8){var I=Math.min(8,C.length-R),v=parseInt(C.substring(R,R+I),y);8>I?(I=u(Math.pow(y,I)),b=b.j(I).add(u(v))):(b=b.j(E),b=b.add(u(v)))}return b}var d=c(0),m=c(1),g=c(16777216);t=o.prototype,t.m=function(){if(S(this))return-N(this).m();for(var C=0,y=1,E=0;E<this.g.length;E++){var b=this.i(E);C+=(0<=b?b:4294967296+b)*y,y*=4294967296}return C},t.toString=function(C){if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(A(this))return"0";if(S(this))return"-"+N(this).toString(C);for(var y=u(Math.pow(C,6)),E=this,b="";;){var R=O(E,y).g;E=V(E,R.j(y));var I=((0<E.g.length?E.g[0]:E.h)>>>0).toString(C);if(E=R,A(E))return I+b;for(;6>I.length;)I="0"+I;b=I+b}},t.i=function(C){return 0>C?0:C<this.g.length?this.g[C]:this.h};function A(C){if(C.h!=0)return!1;for(var y=0;y<C.g.length;y++)if(C.g[y]!=0)return!1;return!0}function S(C){return C.h==-1}t.l=function(C){return C=V(this,C),S(C)?-1:A(C)?0:1};function N(C){for(var y=C.g.length,E=[],b=0;b<y;b++)E[b]=~C.g[b];return new o(E,~C.h).add(m)}t.abs=function(){return S(this)?N(this):this},t.add=function(C){for(var y=Math.max(this.g.length,C.g.length),E=[],b=0,R=0;R<=y;R++){var I=b+(this.i(R)&65535)+(C.i(R)&65535),v=(I>>>16)+(this.i(R)>>>16)+(C.i(R)>>>16);b=v>>>16,I&=65535,v&=65535,E[R]=v<<16|I}return new o(E,E[E.length-1]&-2147483648?-1:0)};function V(C,y){return C.add(N(y))}t.j=function(C){if(A(this)||A(C))return d;if(S(this))return S(C)?N(this).j(N(C)):N(N(this).j(C));if(S(C))return N(this.j(N(C)));if(0>this.l(g)&&0>C.l(g))return u(this.m()*C.m());for(var y=this.g.length+C.g.length,E=[],b=0;b<2*y;b++)E[b]=0;for(b=0;b<this.g.length;b++)for(var R=0;R<C.g.length;R++){var I=this.i(b)>>>16,v=this.i(b)&65535,Le=C.i(R)>>>16,st=C.i(R)&65535;E[2*b+2*R]+=v*st,F(E,2*b+2*R),E[2*b+2*R+1]+=I*st,F(E,2*b+2*R+1),E[2*b+2*R+1]+=v*Le,F(E,2*b+2*R+1),E[2*b+2*R+2]+=I*Le,F(E,2*b+2*R+2)}for(b=0;b<y;b++)E[b]=E[2*b+1]<<16|E[2*b];for(b=y;b<2*y;b++)E[b]=0;return new o(E,0)};function F(C,y){for(;(C[y]&65535)!=C[y];)C[y+1]+=C[y]>>>16,C[y]&=65535,y++}function D(C,y){this.g=C,this.h=y}function O(C,y){if(A(y))throw Error("division by zero");if(A(C))return new D(d,d);if(S(C))return y=O(N(C),y),new D(N(y.g),N(y.h));if(S(y))return y=O(C,N(y)),new D(N(y.g),y.h);if(30<C.g.length){if(S(C)||S(y))throw Error("slowDivide_ only works with positive integers.");for(var E=m,b=y;0>=b.l(C);)E=ee(E),b=ee(b);var R=te(E,1),I=te(b,1);for(b=te(b,2),E=te(E,2);!A(b);){var v=I.add(b);0>=v.l(C)&&(R=R.add(E),I=v),b=te(b,1),E=te(E,1)}return y=V(C,R.j(y)),new D(R,y)}for(R=d;0<=C.l(y);){for(E=Math.max(1,Math.floor(C.m()/y.m())),b=Math.ceil(Math.log(E)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),I=u(E),v=I.j(y);S(v)||0<v.l(C);)E-=b,I=u(E),v=I.j(y);A(I)&&(I=m),R=R.add(I),C=V(C,v)}return new D(R,C)}t.A=function(C){return O(this,C).h},t.and=function(C){for(var y=Math.max(this.g.length,C.g.length),E=[],b=0;b<y;b++)E[b]=this.i(b)&C.i(b);return new o(E,this.h&C.h)},t.or=function(C){for(var y=Math.max(this.g.length,C.g.length),E=[],b=0;b<y;b++)E[b]=this.i(b)|C.i(b);return new o(E,this.h|C.h)},t.xor=function(C){for(var y=Math.max(this.g.length,C.g.length),E=[],b=0;b<y;b++)E[b]=this.i(b)^C.i(b);return new o(E,this.h^C.h)};function ee(C){for(var y=C.g.length+1,E=[],b=0;b<y;b++)E[b]=C.i(b)<<1|C.i(b-1)>>>31;return new o(E,C.h)}function te(C,y){var E=y>>5;y%=32;for(var b=C.g.length-E,R=[],I=0;I<b;I++)R[I]=0<y?C.i(I+E)>>>y|C.i(I+E+1)<<32-y:C.i(I+E);return new o(R,C.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,ly=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,bs=o}).apply(typeof Cp<"u"?Cp:typeof self<"u"?self:typeof window<"u"?window:{});var ra=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cy,Di,uy,Ea,_u,hy,fy,dy;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,f,p){return a==Array.prototype||a==Object.prototype||(a[f]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ra=="object"&&ra];for(var f=0;f<a.length;++f){var p=a[f];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var s=n(this);function r(a,f){if(f)e:{var p=s;a=a.split(".");for(var _=0;_<a.length-1;_++){var k=a[_];if(!(k in p))break e;p=p[k]}a=a[a.length-1],_=p[a],f=f(_),f!=_&&f!=null&&e(p,a,{configurable:!0,writable:!0,value:f})}}function i(a,f){a instanceof String&&(a+="");var p=0,_=!1,k={next:function(){if(!_&&p<a.length){var x=p++;return{value:f(x,a[x]),done:!1}}return _=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}r("Array.prototype.values",function(a){return a||function(){return i(this,function(f,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var f=typeof a;return f=f!="object"?f:a?Array.isArray(a)?"array":f:"null",f=="array"||f=="object"&&typeof a.length=="number"}function u(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function h(a,f,p){return a.call.apply(a.bind,arguments)}function d(a,f,p){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,_),a.apply(f,k)}}return function(){return a.apply(f,arguments)}}function m(a,f,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,m.apply(null,arguments)}function g(a,f){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function A(a,f){function p(){}p.prototype=f.prototype,a.aa=f.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(_,k,x){for(var K=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)K[Fe-2]=arguments[Fe];return f.prototype[k].apply(_,K)}}function S(a){const f=a.length;if(0<f){const p=Array(f);for(let _=0;_<f;_++)p[_]=a[_];return p}return[]}function N(a,f){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(c(_)){const k=a.length||0,x=_.length||0;a.length=k+x;for(let K=0;K<x;K++)a[k+K]=_[K]}else a.push(_)}}class V{constructor(f,p){this.i=f,this.j=p,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function F(a){return/^[\s\xa0]*$/.test(a)}function D(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var ee=D().indexOf("Gecko")!=-1&&!(D().toLowerCase().indexOf("webkit")!=-1&&D().indexOf("Edge")==-1)&&!(D().indexOf("Trident")!=-1||D().indexOf("MSIE")!=-1)&&D().indexOf("Edge")==-1;function te(a,f,p){for(const _ in a)f.call(p,a[_],_,a)}function C(a,f){for(const p in a)f.call(void 0,a[p],p,a)}function y(a){const f={};for(const p in a)f[p]=a[p];return f}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(a,f){let p,_;for(let k=1;k<arguments.length;k++){_=arguments[k];for(p in _)a[p]=_[p];for(let x=0;x<E.length;x++)p=E[x],Object.prototype.hasOwnProperty.call(_,p)&&(a[p]=_[p])}}function R(a){var f=1;a=a.split(":");const p=[];for(;0<f&&a.length;)p.push(a.shift()),f--;return a.length&&p.push(a.join(":")),p}function I(a){l.setTimeout(()=>{throw a},0)}function v(){var a=qt;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class Le{constructor(){this.h=this.g=null}add(f,p){const _=st.get();_.set(f,p),this.h?this.h.next=_:this.g=_,this.h=_}}var st=new V(()=>new Ge,a=>a.reset());class Ge{constructor(){this.next=this.g=this.h=null}set(f,p){this.h=f,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let ve,ge=!1,qt=new Le,an=()=>{const a=l.Promise.resolve(void 0);ve=()=>{a.then(Xt)}};var Xt=()=>{for(var a;a=v();){try{a.h.call(a.g)}catch(p){I(p)}var f=st;f.j(a),100>f.h&&(f.h++,a.next=f.g,f.g=a)}ge=!1};function Qe(){this.s=this.s,this.C=this.C}Qe.prototype.s=!1,Qe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Qe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ye(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}Ye.prototype.h=function(){this.defaultPrevented=!0};var as=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,f),l.removeEventListener("test",p,f)}catch{}return a}();function wn(a,f){if(Ye.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget){if(ee){e:{try{O(f.nodeName);var k=!0;break e}catch{}k=!1}k||(f=null)}}else p=="mouseover"?f=a.fromElement:p=="mouseout"&&(f=a.toElement);this.relatedTarget=f,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ft[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&wn.aa.h.call(this)}}A(wn,Ye);var Ft={2:"touch",3:"pen",4:"mouse"};wn.prototype.h=function(){wn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var M="closure_listenable_"+(1e6*Math.random()|0),J=0;function Y(a,f,p,_,k){this.listener=a,this.proxy=null,this.src=f,this.type=p,this.capture=!!_,this.ha=k,this.key=++J,this.da=this.fa=!1}function ne(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ce(a){this.src=a,this.g={},this.h=0}Ce.prototype.add=function(a,f,p,_,k){var x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);var K=w(a,f,_,k);return-1<K?(f=a[K],p||(f.fa=!1)):(f=new Y(f,this.src,x,!!_,k),f.fa=p,a.push(f)),f};function T(a,f){var p=f.type;if(p in a.g){var _=a.g[p],k=Array.prototype.indexOf.call(_,f,void 0),x;(x=0<=k)&&Array.prototype.splice.call(_,k,1),x&&(ne(f),a.g[p].length==0&&(delete a.g[p],a.h--))}}function w(a,f,p,_){for(var k=0;k<a.length;++k){var x=a[k];if(!x.da&&x.listener==f&&x.capture==!!p&&x.ha==_)return k}return-1}var P="closure_lm_"+(1e6*Math.random()|0),L={};function $(a,f,p,_,k){if(Array.isArray(f)){for(var x=0;x<f.length;x++)$(a,f[x],p,_,k);return null}return p=le(p),a&&a[M]?a.K(f,p,u(_)?!!_.capture:!1,k):U(a,f,p,!1,_,k)}function U(a,f,p,_,k,x){if(!f)throw Error("Invalid event type");var K=u(k)?!!k.capture:!!k,Fe=X(a);if(Fe||(a[P]=Fe=new Ce(a)),p=Fe.add(f,p,_,K,x),p.proxy)return p;if(_=G(),p.proxy=_,_.src=a,_.listener=p,a.addEventListener)as||(k=K),k===void 0&&(k=!1),a.addEventListener(f.toString(),_,k);else if(a.attachEvent)a.attachEvent(q(f.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function G(){function a(p){return f.call(a.src,a.listener,p)}const f=oe;return a}function z(a,f,p,_,k){if(Array.isArray(f))for(var x=0;x<f.length;x++)z(a,f[x],p,_,k);else _=u(_)?!!_.capture:!!_,p=le(p),a&&a[M]?(a=a.i,f=String(f).toString(),f in a.g&&(x=a.g[f],p=w(x,p,_,k),-1<p&&(ne(x[p]),Array.prototype.splice.call(x,p,1),x.length==0&&(delete a.g[f],a.h--)))):a&&(a=X(a))&&(f=a.g[f.toString()],a=-1,f&&(a=w(f,p,_,k)),(p=-1<a?f[a]:null)&&H(p))}function H(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[M])T(f.i,a);else{var p=a.type,_=a.proxy;f.removeEventListener?f.removeEventListener(p,_,a.capture):f.detachEvent?f.detachEvent(q(p),_):f.addListener&&f.removeListener&&f.removeListener(_),(p=X(f))?(T(p,a),p.h==0&&(p.src=null,f[P]=null)):ne(a)}}}function q(a){return a in L?L[a]:L[a]="on"+a}function oe(a,f){if(a.da)a=!0;else{f=new wn(f,this);var p=a.listener,_=a.ha||a.src;a.fa&&H(a),a=p.call(_,f)}return a}function X(a){return a=a[P],a instanceof Ce?a:null}var se="__closure_events_fn_"+(1e9*Math.random()>>>0);function le(a){return typeof a=="function"?a:(a[se]||(a[se]=function(f){return a.handleEvent(f)}),a[se])}function ae(){Qe.call(this),this.i=new Ce(this),this.M=this,this.F=null}A(ae,Qe),ae.prototype[M]=!0,ae.prototype.removeEventListener=function(a,f,p,_){z(this,a,f,p,_)};function pe(a,f){var p,_=a.F;if(_)for(p=[];_;_=_.F)p.push(_);if(a=a.M,_=f.type||f,typeof f=="string")f=new Ye(f,a);else if(f instanceof Ye)f.target=f.target||a;else{var k=f;f=new Ye(_,a),b(f,k)}if(k=!0,p)for(var x=p.length-1;0<=x;x--){var K=f.g=p[x];k=Te(K,_,!0,f)&&k}if(K=f.g=a,k=Te(K,_,!0,f)&&k,k=Te(K,_,!1,f)&&k,p)for(x=0;x<p.length;x++)K=f.g=p[x],k=Te(K,_,!1,f)&&k}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var a=this.i,f;for(f in a.g){for(var p=a.g[f],_=0;_<p.length;_++)ne(p[_]);delete a.g[f],a.h--}}this.F=null},ae.prototype.K=function(a,f,p,_){return this.i.add(String(a),f,!1,p,_)},ae.prototype.L=function(a,f,p,_){return this.i.add(String(a),f,!0,p,_)};function Te(a,f,p,_){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();for(var k=!0,x=0;x<f.length;++x){var K=f[x];if(K&&!K.da&&K.capture==p){var Fe=K.listener,pt=K.ha||K.src;K.fa&&T(a.i,K),k=Fe.call(pt,_)!==!1&&k}}return k&&!_.defaultPrevented}function wt(a,f,p){if(typeof a=="function")p&&(a=m(a,p));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:l.setTimeout(a,f||0)}function ft(a){a.g=wt(()=>{a.g=null,a.i&&(a.i=!1,ft(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class Jt extends Qe{constructor(f,p){super(),this.m=f,this.l=p,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:ft(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function It(a){Qe.call(this),this.h=a,this.g={}}A(It,Qe);var ls=[];function ci(a){te(a.g,function(f,p){this.g.hasOwnProperty(p)&&H(f)},a),a.g={}}It.prototype.N=function(){It.aa.N.call(this),ci(this)},It.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var dt=l.JSON.stringify,Zt=l.JSON.parse,Vo=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Yl(){}Yl.prototype.h=null;function bf(a){return a.h||(a.h=a.i())}function Af(){}var ui={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Xl(){Ye.call(this,"d")}A(Xl,Ye);function Jl(){Ye.call(this,"c")}A(Jl,Ye);var Fs={},Cf=null;function Fo(){return Cf=Cf||new ae}Fs.La="serverreachability";function Rf(a){Ye.call(this,Fs.La,a)}A(Rf,Ye);function hi(a){const f=Fo();pe(f,new Rf(f))}Fs.STAT_EVENT="statevent";function Sf(a,f){Ye.call(this,Fs.STAT_EVENT,a),this.stat=f}A(Sf,Ye);function Ot(a){const f=Fo();pe(f,new Sf(f,a))}Fs.Ma="timingevent";function Pf(a,f){Ye.call(this,Fs.Ma,a),this.size=f}A(Pf,Ye);function fi(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},f)}function di(){this.g=!0}di.prototype.xa=function(){this.g=!1};function hT(a,f,p,_,k,x){a.info(function(){if(a.g)if(x)for(var K="",Fe=x.split("&"),pt=0;pt<Fe.length;pt++){var Re=Fe[pt].split("=");if(1<Re.length){var bt=Re[0];Re=Re[1];var At=bt.split("_");K=2<=At.length&&At[1]=="type"?K+(bt+"="+Re+"&"):K+(bt+"=redacted&")}}else K=null;else K=x;return"XMLHTTP REQ ("+_+") [attempt "+k+"]: "+f+`
`+p+`
`+K})}function fT(a,f,p,_,k,x,K){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+k+"]: "+f+`
`+p+`
`+x+" "+K})}function pr(a,f,p,_){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+pT(a,p)+(_?" "+_:"")})}function dT(a,f){a.info(function(){return"TIMEOUT: "+f})}di.prototype.info=function(){};function pT(a,f){if(!a.g)return f;if(!f)return null;try{var p=JSON.parse(f);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var _=p[a];if(!(2>_.length)){var k=_[1];if(Array.isArray(k)&&!(1>k.length)){var x=k[0];if(x!="noop"&&x!="stop"&&x!="close")for(var K=1;K<k.length;K++)k[K]=""}}}}return dt(p)}catch{return f}}var Uo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},kf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Zl;function Bo(){}A(Bo,Yl),Bo.prototype.g=function(){return new XMLHttpRequest},Bo.prototype.i=function(){return{}},Zl=new Bo;function cs(a,f,p,_){this.j=a,this.i=f,this.l=p,this.R=_||1,this.U=new It(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Nf}function Nf(){this.i=null,this.g="",this.h=!1}var xf={},ec={};function tc(a,f,p){a.L=1,a.v=Ho(Fn(f)),a.m=p,a.P=!0,Df(a,null)}function Df(a,f){a.F=Date.now(),$o(a),a.A=Fn(a.v);var p=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),Kf(p.i,"t",_),a.C=0,p=a.j.J,a.h=new Nf,a.g=hd(a.j,p?f:null,!a.m),0<a.O&&(a.M=new Jt(m(a.Y,a,a.g),a.O)),f=a.U,p=a.g,_=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(ls[0]=k.toString()),k=ls);for(var x=0;x<k.length;x++){var K=$(p,k[x],_||f.handleEvent,!1,f.h||f);if(!K)break;f.g[K.key]=K}f=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,f)):(a.u="GET",a.g.ea(a.A,a.u,null,f)),hi(),hT(a.i,a.u,a.A,a.l,a.R,a.m)}cs.prototype.ca=function(a){a=a.target;const f=this.M;f&&Un(a)==3?f.j():this.Y(a)},cs.prototype.Y=function(a){try{if(a==this.g)e:{const At=Un(this.g);var f=this.g.Ba();const _r=this.g.Z();if(!(3>At)&&(At!=3||this.g&&(this.h.h||this.g.oa()||ed(this.g)))){this.J||At!=4||f==7||(f==8||0>=_r?hi(3):hi(2)),nc(this);var p=this.g.Z();this.X=p;t:if(Of(this)){var _=ed(this.g);a="";var k=_.length,x=Un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Us(this),pi(this);var K="";break t}this.h.i=new l.TextDecoder}for(f=0;f<k;f++)this.h.h=!0,a+=this.h.i.decode(_[f],{stream:!(x&&f==k-1)});_.length=0,this.h.g+=a,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=p==200,fT(this.i,this.u,this.A,this.l,this.R,At,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,pt=this.g;if((Fe=pt.g?pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(Fe)){var Re=Fe;break t}}Re=null}if(p=Re)pr(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,sc(this,p);else{this.o=!1,this.s=3,Ot(12),Us(this),pi(this);break e}}if(this.P){p=!0;let ln;for(;!this.J&&this.C<K.length;)if(ln=mT(this,K),ln==ec){At==4&&(this.s=4,Ot(14),p=!1),pr(this.i,this.l,null,"[Incomplete Response]");break}else if(ln==xf){this.s=4,Ot(15),pr(this.i,this.l,K,"[Invalid Chunk]"),p=!1;break}else pr(this.i,this.l,ln,null),sc(this,ln);if(Of(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),At!=4||K.length!=0||this.h.h||(this.s=1,Ot(16),p=!1),this.o=this.o&&p,!p)pr(this.i,this.l,K,"[Invalid Chunked Response]"),Us(this),pi(this);else if(0<K.length&&!this.W){this.W=!0;var bt=this.j;bt.g==this&&bt.ba&&!bt.M&&(bt.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),cc(bt),bt.M=!0,Ot(11))}}else pr(this.i,this.l,K,null),sc(this,K);At==4&&Us(this),this.o&&!this.J&&(At==4?ad(this.j,this):(this.o=!1,$o(this)))}else xT(this.g),p==400&&0<K.indexOf("Unknown SID")?(this.s=3,Ot(12)):(this.s=0,Ot(13)),Us(this),pi(this)}}}catch{}finally{}};function Of(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function mT(a,f){var p=a.C,_=f.indexOf(`
`,p);return _==-1?ec:(p=Number(f.substring(p,_)),isNaN(p)?xf:(_+=1,_+p>f.length?ec:(f=f.slice(_,_+p),a.C=_+p,f)))}cs.prototype.cancel=function(){this.J=!0,Us(this)};function $o(a){a.S=Date.now()+a.I,Mf(a,a.I)}function Mf(a,f){if(a.B!=null)throw Error("WatchDog timer not null");a.B=fi(m(a.ba,a),f)}function nc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}cs.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(dT(this.i,this.A),this.L!=2&&(hi(),Ot(17)),Us(this),this.s=2,pi(this)):Mf(this,this.S-a)};function pi(a){a.j.G==0||a.J||ad(a.j,a)}function Us(a){nc(a);var f=a.M;f&&typeof f.ma=="function"&&f.ma(),a.M=null,ci(a.U),a.g&&(f=a.g,a.g=null,f.abort(),f.ma())}function sc(a,f){try{var p=a.j;if(p.G!=0&&(p.g==a||rc(p.h,a))){if(!a.K&&rc(p.h,a)&&p.G==3){try{var _=p.Da.g.parse(f)}catch{_=null}if(Array.isArray(_)&&_.length==3){var k=_;if(k[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)Yo(p),Go(p);else break e;lc(p),Ot(18)}}else p.za=k[1],0<p.za-p.T&&37500>k[2]&&p.F&&p.v==0&&!p.C&&(p.C=fi(m(p.Za,p),6e3));if(1>=Ff(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else $s(p,11)}else if((a.K||p.g==a)&&Yo(p),!F(f))for(k=p.Da.g.parse(f),f=0;f<k.length;f++){let Re=k[f];if(p.T=Re[0],Re=Re[1],p.G==2)if(Re[0]=="c"){p.K=Re[1],p.ia=Re[2];const bt=Re[3];bt!=null&&(p.la=bt,p.j.info("VER="+p.la));const At=Re[4];At!=null&&(p.Aa=At,p.j.info("SVER="+p.Aa));const _r=Re[5];_r!=null&&typeof _r=="number"&&0<_r&&(_=1.5*_r,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const ln=a.g;if(ln){const Jo=ln.g?ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Jo){var x=_.h;x.g||Jo.indexOf("spdy")==-1&&Jo.indexOf("quic")==-1&&Jo.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(ic(x,x.h),x.h=null))}if(_.D){const uc=ln.g?ln.g.getResponseHeader("X-HTTP-Session-Id"):null;uc&&(_.ya=uc,je(_.I,_.D,uc))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var K=a;if(_.qa=ud(_,_.J?_.ia:null,_.W),K.K){Uf(_.h,K);var Fe=K,pt=_.L;pt&&(Fe.I=pt),Fe.B&&(nc(Fe),$o(Fe)),_.g=K}else id(_);0<p.i.length&&Qo(p)}else Re[0]!="stop"&&Re[0]!="close"||$s(p,7);else p.G==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?$s(p,7):ac(p):Re[0]!="noop"&&p.l&&p.l.ta(Re),p.v=0)}}hi(4)}catch{}}var gT=class{constructor(a,f){this.g=a,this.map=f}};function Lf(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Vf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ff(a){return a.h?1:a.g?a.g.size:0}function rc(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function ic(a,f){a.g?a.g.add(f):a.h=f}function Uf(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}Lf.prototype.cancel=function(){if(this.i=Bf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Bf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const p of a.g.values())f=f.concat(p.D);return f}return S(a.i)}function _T(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var f=[],p=a.length,_=0;_<p;_++)f.push(a[_]);return f}f=[],p=0;for(_ in a)f[p++]=a[_];return f}function yT(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var f=[];a=a.length;for(var p=0;p<a;p++)f.push(p);return f}f=[],p=0;for(const _ in a)f[p++]=_;return f}}}function $f(a,f){if(a.forEach&&typeof a.forEach=="function")a.forEach(f,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,f,void 0);else for(var p=yT(a),_=_T(a),k=_.length,x=0;x<k;x++)f.call(void 0,_[x],p&&p[x],a)}var jf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ET(a,f){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var _=a[p].indexOf("="),k=null;if(0<=_){var x=a[p].substring(0,_);k=a[p].substring(_+1)}else x=a[p];f(x,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Bs(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Bs){this.h=a.h,jo(this,a.j),this.o=a.o,this.g=a.g,qo(this,a.s),this.l=a.l;var f=a.i,p=new _i;p.i=f.i,f.g&&(p.g=new Map(f.g),p.h=f.h),qf(this,p),this.m=a.m}else a&&(f=String(a).match(jf))?(this.h=!1,jo(this,f[1]||"",!0),this.o=mi(f[2]||""),this.g=mi(f[3]||"",!0),qo(this,f[4]),this.l=mi(f[5]||"",!0),qf(this,f[6]||"",!0),this.m=mi(f[7]||"")):(this.h=!1,this.i=new _i(null,this.h))}Bs.prototype.toString=function(){var a=[],f=this.j;f&&a.push(gi(f,Hf,!0),":");var p=this.g;return(p||f=="file")&&(a.push("//"),(f=this.o)&&a.push(gi(f,Hf,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(gi(p,p.charAt(0)=="/"?wT:TT,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",gi(p,bT)),a.join("")};function Fn(a){return new Bs(a)}function jo(a,f,p){a.j=p?mi(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function qo(a,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);a.s=f}else a.s=null}function qf(a,f,p){f instanceof _i?(a.i=f,AT(a.i,a.h)):(p||(f=gi(f,IT)),a.i=new _i(f,a.h))}function je(a,f,p){a.i.set(f,p)}function Ho(a){return je(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function mi(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function gi(a,f,p){return typeof a=="string"?(a=encodeURI(a).replace(f,vT),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function vT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Hf=/[#\/\?@]/g,TT=/[#\?:]/g,wT=/[#\?]/g,IT=/[#\?@]/g,bT=/#/g;function _i(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function us(a){a.g||(a.g=new Map,a.h=0,a.i&&ET(a.i,function(f,p){a.add(decodeURIComponent(f.replace(/\+/g," ")),p)}))}t=_i.prototype,t.add=function(a,f){us(this),this.i=null,a=mr(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(f),this.h+=1,this};function Wf(a,f){us(a),f=mr(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function zf(a,f){return us(a),f=mr(a,f),a.g.has(f)}t.forEach=function(a,f){us(this),this.g.forEach(function(p,_){p.forEach(function(k){a.call(f,k,_,this)},this)},this)},t.na=function(){us(this);const a=Array.from(this.g.values()),f=Array.from(this.g.keys()),p=[];for(let _=0;_<f.length;_++){const k=a[_];for(let x=0;x<k.length;x++)p.push(f[_])}return p},t.V=function(a){us(this);let f=[];if(typeof a=="string")zf(this,a)&&(f=f.concat(this.g.get(mr(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)f=f.concat(a[p])}return f},t.set=function(a,f){return us(this),this.i=null,a=mr(this,a),zf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},t.get=function(a,f){return a?(a=this.V(a),0<a.length?String(a[0]):f):f};function Kf(a,f,p){Wf(a,f),0<p.length&&(a.i=null,a.g.set(mr(a,f),S(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(var p=0;p<f.length;p++){var _=f[p];const x=encodeURIComponent(String(_)),K=this.V(_);for(_=0;_<K.length;_++){var k=x;K[_]!==""&&(k+="="+encodeURIComponent(String(K[_]))),a.push(k)}}return this.i=a.join("&")};function mr(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function AT(a,f){f&&!a.j&&(us(a),a.i=null,a.g.forEach(function(p,_){var k=_.toLowerCase();_!=k&&(Wf(this,_),Kf(this,k,p))},a)),a.j=f}function CT(a,f){const p=new di;if(l.Image){const _=new Image;_.onload=g(hs,p,"TestLoadImage: loaded",!0,f,_),_.onerror=g(hs,p,"TestLoadImage: error",!1,f,_),_.onabort=g(hs,p,"TestLoadImage: abort",!1,f,_),_.ontimeout=g(hs,p,"TestLoadImage: timeout",!1,f,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else f(!1)}function RT(a,f){const p=new di,_=new AbortController,k=setTimeout(()=>{_.abort(),hs(p,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:_.signal}).then(x=>{clearTimeout(k),x.ok?hs(p,"TestPingServer: ok",!0,f):hs(p,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(k),hs(p,"TestPingServer: error",!1,f)})}function hs(a,f,p,_,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),_(p)}catch{}}function ST(){this.g=new Vo}function PT(a,f,p){const _=p||"";try{$f(a,function(k,x){let K=k;u(k)&&(K=dt(k)),f.push(_+x+"="+encodeURIComponent(K))})}catch(k){throw f.push(_+"type="+encodeURIComponent("_badmap")),k}}function Wo(a){this.l=a.Ub||null,this.j=a.eb||!1}A(Wo,Yl),Wo.prototype.g=function(){return new zo(this.l,this.j)},Wo.prototype.i=function(a){return function(){return a}}({});function zo(a,f){ae.call(this),this.D=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(zo,ae),t=zo.prototype,t.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=f,this.readyState=1,Ei(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(f.body=a),(this.D||l).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ei(this)),this.g&&(this.readyState=3,Ei(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Gf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Gf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?yi(this):Ei(this),this.readyState==3&&Gf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,yi(this))},t.Qa=function(a){this.g&&(this.response=a,yi(this))},t.ga=function(){this.g&&yi(this)};function yi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ei(a)}t.setRequestHeader=function(a,f){this.u.append(a,f)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var p=f.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=f.next();return a.join(`\r
`)};function Ei(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(zo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Qf(a){let f="";return te(a,function(p,_){f+=_,f+=":",f+=p,f+=`\r
`}),f}function oc(a,f,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=Qf(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):je(a,f,p))}function Xe(a){ae.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Xe,ae);var kT=/^https?$/i,NT=["POST","PUT"];t=Xe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,f,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Zl.g(),this.v=this.o?bf(this.o):bf(Zl),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(x){Yf(this,x);return}if(a=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var k in _)p.set(k,_[k]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const x of _.keys())p.set(x,_.get(x));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(x=>x.toLowerCase()=="content-type"),k=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(NT,f,void 0))||_||k||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,K]of p)this.g.setRequestHeader(x,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Zf(this),this.u=!0,this.g.send(a),this.u=!1}catch(x){Yf(this,x)}};function Yf(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.m=5,Xf(a),Ko(a)}function Xf(a){a.A||(a.A=!0,pe(a,"complete"),pe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,pe(this,"complete"),pe(this,"abort"),Ko(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ko(this,!0)),Xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Jf(this):this.bb())},t.bb=function(){Jf(this)};function Jf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Un(a)!=4||a.Z()!=2)){if(a.u&&Un(a)==4)wt(a.Ea,0,a);else if(pe(a,"readystatechange"),Un(a)==4){a.h=!1;try{const K=a.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var p;if(!(p=f)){var _;if(_=K===0){var k=String(a.D).match(jf)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),_=!kT.test(k?k.toLowerCase():"")}p=_}if(p)pe(a,"complete"),pe(a,"success");else{a.m=6;try{var x=2<Un(a)?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.Z()+"]",Xf(a)}}finally{Ko(a)}}}}function Ko(a,f){if(a.g){Zf(a);const p=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,f||pe(a,"ready");try{p.onreadystatechange=_}catch{}}}function Zf(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Un(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Un(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),Zt(f)}};function ed(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function xT(a){const f={};a=(a.g&&2<=Un(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(F(a[_]))continue;var p=R(a[_]);const k=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const x=f[k]||[];f[k]=x,x.push(p)}C(f,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function vi(a,f,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||f}function td(a){this.Aa=0,this.i=[],this.j=new di,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=vi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=vi("baseRetryDelayMs",5e3,a),this.cb=vi("retryDelaySeedMs",1e4,a),this.Wa=vi("forwardChannelMaxRetries",2,a),this.wa=vi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Lf(a&&a.concurrentRequestLimit),this.Da=new ST,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=td.prototype,t.la=8,t.G=1,t.connect=function(a,f,p,_){Ot(0),this.W=a,this.H=f||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=ud(this,null,this.W),Qo(this)};function ac(a){if(nd(a),a.G==3){var f=a.U++,p=Fn(a.I);if(je(p,"SID",a.K),je(p,"RID",f),je(p,"TYPE","terminate"),Ti(a,p),f=new cs(a,a.j,f),f.L=2,f.v=Ho(Fn(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(f.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=f.v,p=!0),p||(f.g=hd(f.j,null),f.g.ea(f.v)),f.F=Date.now(),$o(f)}cd(a)}function Go(a){a.g&&(cc(a),a.g.cancel(),a.g=null)}function nd(a){Go(a),a.u&&(l.clearTimeout(a.u),a.u=null),Yo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Qo(a){if(!Vf(a.h)&&!a.s){a.s=!0;var f=a.Ga;ve||an(),ge||(ve(),ge=!0),qt.add(f,a),a.B=0}}function DT(a,f){return Ff(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=f.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=fi(m(a.Ga,a,f),ld(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new cs(this,this.j,a);let x=this.o;if(this.S&&(x?(x=y(x),b(x,this.S)):x=this.S),this.m!==null||this.O||(k.H=x,x=null),this.P)e:{for(var f=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(f+=_,4096<f){f=p;break e}if(f===4096||p===this.i.length-1){f=p+1;break e}}f=1e3}else f=1e3;f=rd(this,k,f),p=Fn(this.I),je(p,"RID",a),je(p,"CVER",22),this.D&&je(p,"X-HTTP-Session-Id",this.D),Ti(this,p),x&&(this.O?f="headers="+encodeURIComponent(String(Qf(x)))+"&"+f:this.m&&oc(p,this.m,x)),ic(this.h,k),this.Ua&&je(p,"TYPE","init"),this.P?(je(p,"$req",f),je(p,"SID","null"),k.T=!0,tc(k,p,null)):tc(k,p,f),this.G=2}}else this.G==3&&(a?sd(this,a):this.i.length==0||Vf(this.h)||sd(this))};function sd(a,f){var p;f?p=f.l:p=a.U++;const _=Fn(a.I);je(_,"SID",a.K),je(_,"RID",p),je(_,"AID",a.T),Ti(a,_),a.m&&a.o&&oc(_,a.m,a.o),p=new cs(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),f&&(a.i=f.D.concat(a.i)),f=rd(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ic(a.h,p),tc(p,_,f)}function Ti(a,f){a.H&&te(a.H,function(p,_){je(f,_,p)}),a.l&&$f({},function(p,_){je(f,_,p)})}function rd(a,f,p){p=Math.min(a.i.length,p);var _=a.l?m(a.l.Na,a.l,a):null;e:{var k=a.i;let x=-1;for(;;){const K=["count="+p];x==-1?0<p?(x=k[0].g,K.push("ofs="+x)):x=0:K.push("ofs="+x);let Fe=!0;for(let pt=0;pt<p;pt++){let Re=k[pt].g;const bt=k[pt].map;if(Re-=x,0>Re)x=Math.max(0,k[pt].g-100),Fe=!1;else try{PT(bt,K,"req"+Re+"_")}catch{_&&_(bt)}}if(Fe){_=K.join("&");break e}}}return a=a.i.splice(0,p),f.D=a,_}function id(a){if(!a.g&&!a.u){a.Y=1;var f=a.Fa;ve||an(),ge||(ve(),ge=!0),qt.add(f,a),a.v=0}}function lc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=fi(m(a.Fa,a),ld(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,od(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=fi(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ot(10),Go(this),od(this))};function cc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function od(a){a.g=new cs(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var f=Fn(a.qa);je(f,"RID","rpc"),je(f,"SID",a.K),je(f,"AID",a.T),je(f,"CI",a.F?"0":"1"),!a.F&&a.ja&&je(f,"TO",a.ja),je(f,"TYPE","xmlhttp"),Ti(a,f),a.m&&a.o&&oc(f,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=Ho(Fn(f)),p.m=null,p.P=!0,Df(p,a)}t.Za=function(){this.C!=null&&(this.C=null,Go(this),lc(this),Ot(19))};function Yo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function ad(a,f){var p=null;if(a.g==f){Yo(a),cc(a),a.g=null;var _=2}else if(rc(a.h,f))p=f.D,Uf(a.h,f),_=1;else return;if(a.G!=0){if(f.o)if(_==1){p=f.m?f.m.length:0,f=Date.now()-f.F;var k=a.B;_=Fo(),pe(_,new Pf(_,p)),Qo(a)}else id(a);else if(k=f.s,k==3||k==0&&0<f.X||!(_==1&&DT(a,f)||_==2&&lc(a)))switch(p&&0<p.length&&(f=a.h,f.i=f.i.concat(p)),k){case 1:$s(a,5);break;case 4:$s(a,10);break;case 3:$s(a,6);break;default:$s(a,2)}}}function ld(a,f){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*f}function $s(a,f){if(a.j.info("Error code "+f),f==2){var p=m(a.fb,a),_=a.Xa;const k=!_;_=new Bs(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||jo(_,"https"),Ho(_),k?CT(_.toString(),p):RT(_.toString(),p)}else Ot(2);a.G=0,a.l&&a.l.sa(f),cd(a),nd(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ot(2)):(this.j.info("Failed to ping google.com"),Ot(1))};function cd(a){if(a.G=0,a.ka=[],a.l){const f=Bf(a.h);(f.length!=0||a.i.length!=0)&&(N(a.ka,f),N(a.ka,a.i),a.h.i.length=0,S(a.i),a.i.length=0),a.l.ra()}}function ud(a,f,p){var _=p instanceof Bs?Fn(p):new Bs(p);if(_.g!="")f&&(_.g=f+"."+_.g),qo(_,_.s);else{var k=l.location;_=k.protocol,f=f?f+"."+k.hostname:k.hostname,k=+k.port;var x=new Bs(null);_&&jo(x,_),f&&(x.g=f),k&&qo(x,k),p&&(x.l=p),_=x}return p=a.D,f=a.ya,p&&f&&je(_,p,f),je(_,"VER",a.la),Ti(a,_),_}function hd(a,f,p){if(f&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Ca&&!a.pa?new Xe(new Wo({eb:p})):new Xe(a.pa),f.Ha(a.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function fd(){}t=fd.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Xo(){}Xo.prototype.g=function(a,f){return new Ht(a,f)};function Ht(a,f){ae.call(this),this.g=new td(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(a?a["X-WebChannel-Client-Profile"]=f.va:a={"X-WebChannel-Client-Profile":f.va}),this.g.S=a,(a=f&&f.Sb)&&!F(a)&&(this.g.m=a),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!F(f)&&(this.g.D=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new gr(this)}A(Ht,ae),Ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ht.prototype.close=function(){ac(this.g)},Ht.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=dt(a),a=p);f.i.push(new gT(f.Ya++,a)),f.G==3&&Qo(f)},Ht.prototype.N=function(){this.g.l=null,delete this.j,ac(this.g),delete this.g,Ht.aa.N.call(this)};function dd(a){Xl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const p in f){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}A(dd,Xl);function pd(){Jl.call(this),this.status=1}A(pd,Jl);function gr(a){this.g=a}A(gr,fd),gr.prototype.ua=function(){pe(this.g,"a")},gr.prototype.ta=function(a){pe(this.g,new dd(a))},gr.prototype.sa=function(a){pe(this.g,new pd)},gr.prototype.ra=function(){pe(this.g,"b")},Xo.prototype.createWebChannel=Xo.prototype.g,Ht.prototype.send=Ht.prototype.o,Ht.prototype.open=Ht.prototype.m,Ht.prototype.close=Ht.prototype.close,dy=function(){return new Xo},fy=function(){return Fo()},hy=Fs,_u={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Uo.NO_ERROR=0,Uo.TIMEOUT=8,Uo.HTTP_ERROR=6,Ea=Uo,kf.COMPLETE="complete",uy=kf,Af.EventType=ui,ui.OPEN="a",ui.CLOSE="b",ui.ERROR="c",ui.MESSAGE="d",ae.prototype.listen=ae.prototype.K,Di=Af,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,cy=Xe}).apply(typeof ra<"u"?ra:typeof self<"u"?self:typeof window<"u"?window:{});const Rp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Rt.UNAUTHENTICATED=new Rt(null),Rt.GOOGLE_CREDENTIALS=new Rt("google-credentials-uid"),Rt.FIRST_PARTY=new Rt("first-party-uid"),Rt.MOCK_USER=new Rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ni="11.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=new Ao("@firebase/firestore");function wr(){return tr.logLevel}function Z(t,...e){if(tr.logLevel<=me.DEBUG){const n=e.map(Th);tr.debug(`Firestore (${ni}): ${t}`,...n)}}function ts(t,...e){if(tr.logLevel<=me.ERROR){const n=e.map(Th);tr.error(`Firestore (${ni}): ${t}`,...n)}}function qr(t,...e){if(tr.logLevel<=me.WARN){const n=e.map(Th);tr.warn(`Firestore (${ni}): ${t}`,...n)}}function Th(t){if(typeof t=="string")return t;try{/**
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
 */function ue(t="Unexpected state"){const e=`FIRESTORE (${ni}) INTERNAL ASSERTION FAILED: `+t;throw ts(e),new Error(e)}function Me(t,e){t||ue()}function de(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends is{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ER{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Rt.UNAUTHENTICATED))}shutdown(){}}class vR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class TR{constructor(e){this.t=e,this.currentUser=Rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Me(this.o===void 0);let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Qn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Qn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},l=c=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Qn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Me(typeof s.accessToken=="string"),new py(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string"),new Rt(e)}}class wR{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=Rt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class IR{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new wR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class AR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Me(this.o===void 0);const s=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?r(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Me(typeof n.token=="string"),this.R=n.token,new bR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function CR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=CR(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ye(t,e){return t<e?-1:t>e?1:0}function Hr(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{static now(){return tt.fromMillis(Date.now())}static fromDate(e){return tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new tt(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new re(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new re(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new re(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{static fromTimestamp(e){return new he(e)}static min(){return new he(new tt(0,0))}static max(){return new he(new tt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,n,s){n===void 0?n=0:n>e.length&&ue(),s===void 0?s=e.length-n:s>e.length-n&&ue(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return An.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof An?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=An.compareSegments(e.get(r),n.get(r));if(i!==0)return i}return Math.sign(e.length-n.length)}static compareSegments(e,n){const s=An.isNumericId(e),r=An.isNumericId(n);return s&&!r?-1:!s&&r?1:s&&r?An.extractNumericId(e).compare(An.extractNumericId(n)):e<n?-1:e>n?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return bs.fromString(e.substring(4,e.length-2))}}class Ke extends An{construct(e,n,s){return new Ke(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new re(j.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ke(n)}static emptyPath(){return new Ke([])}}const RR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends An{construct(e,n,s){return new _t(e,n,s)}static isValidIdentifier(e){return RR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new _t(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new re(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new re(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new re(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else l==="`"?(o=!o,r++):l!=="."||o?(s+=l,r++):(i(),r++)}if(i(),o)throw new re(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _t(n)}static emptyPath(){return new _t([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(Ke.fromString(e))}static fromName(e){return new ie(Ke.fromString(e).popFirst(5))}static empty(){return new ie(Ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new Ke(e.slice()))}}function SR(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=he.fromTimestamp(s===1e9?new tt(n+1,0):new tt(n,s));return new Ps(r,ie.empty(),e)}function PR(t){return new Ps(t.readTime,t.key,-1)}class Ps{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ps(he.min(),ie.empty(),-1)}static max(){return new Ps(he.max(),ie.empty(),-1)}}function kR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ie.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
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
 */const NR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function si(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==NR)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ue(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,s)=>{n(e)})}static reject(e){return new B((n,s)=>{s(e)})}static waitFor(e){return new B((n,s)=>{let r=0,i=0,o=!1;e.forEach(l=>{++r,l.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=B.resolve(!1);for(const s of e)n=n.next(r=>r?B.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new B((s,r)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(h=>{o[u]=h,++l,l===i&&s(o)},h=>r(h))}})}static doWhile(e,n){return new B((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function DR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ri(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Sl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ie(s),this.se=s=>n.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Sl.oe=-1;function Pl(t){return t==null}function Ua(t){return t===0&&1/t==-1/0}function OR(t){return typeof t=="number"&&Number.isInteger(t)&&!Ua(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Sp(e)),e=LR(t.get(n),e);return Sp(e)}function LR(t,e){let n=e;const s=t.length;for(let r=0;r<s;r++){const i=t.charAt(r);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function Sp(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ar(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function gy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nt=class yu{constructor(e,n){this.comparator=e,this.root=n||As.EMPTY}insert(e,n){return new yu(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,As.BLACK,null,null))}remove(e){return new yu(this.comparator,this.root.remove(e,this.comparator).copy(null,null,As.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ia(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ia(this.root,e,this.comparator,!1)}getReverseIterator(){return new ia(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ia(this.root,e,this.comparator,!0)}},ia=class{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},As=class qn{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??qn.RED,this.left=r??qn.EMPTY,this.right=i??qn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new qn(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return qn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return qn.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ue();const e=this.left.check();if(e!==this.right.check())throw ue();return e+(this.isRed()?0:1)}};As.EMPTY=null,As.RED=!0,As.BLACK=!1;As.EMPTY=new class{constructor(){this.size=0}get key(){throw ue()}get value(){throw ue()}get color(){throw ue()}get left(){throw ue()}get right(){throw ue()}copy(e,n,s,r,i){return this}insert(e,n,s){return new As(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new kp(this.data.getIterator())}getIteratorFrom(e){return new kp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ot)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ot(this.comparator);return n.data=e,n}}class kp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class un{constructor(e){this.fields=e,e.sort(_t.comparator)}static empty(){return new un([])}unionWith(e){let n=new ot(_t.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new un(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Hr(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class _y extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new _y("Invalid base64 string: "+i):i}}(e);return new Tt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new Tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Tt.EMPTY_BYTE_STRING=new Tt("");const VR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ks(t){if(Me(!!t),typeof t=="string"){let e=0;const n=VR.exec(t);if(Me(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ze(t.seconds),nanos:Ze(t.nanos)}}function Ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ns(t){return typeof t=="string"?Tt.fromBase64String(t):Tt.fromUint8Array(t)}/**
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
 */function wh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function kl(t){const e=t.mapValue.fields.__previous_value__;return wh(e)?kl(e):e}function go(t){const e=ks(t.mapValue.fields.__local_write_time__.timestampValue);return new tt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,n,s,r,i,o,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class _o{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new _o("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof _o&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const oa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function xs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?wh(t)?4:BR(t)?9007199254740991:UR(t)?10:11:ue()}function On(t,e){if(t===e)return!0;const n=xs(t);if(n!==xs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return go(t).isEqual(go(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=ks(r.timestampValue),l=ks(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Ns(r.bytesValue).isEqual(Ns(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ze(r.geoPointValue.latitude)===Ze(i.geoPointValue.latitude)&&Ze(r.geoPointValue.longitude)===Ze(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ze(r.integerValue)===Ze(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=Ze(r.doubleValue),l=Ze(i.doubleValue);return o===l?Ua(o)===Ua(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Hr(t.arrayValue.values||[],e.arrayValue.values||[],On);case 10:case 11:return function(r,i){const o=r.mapValue.fields||{},l=i.mapValue.fields||{};if(Pp(o)!==Pp(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!On(o[c],l[c])))return!1;return!0}(t,e);default:return ue()}}function yo(t,e){return(t.values||[]).find(n=>On(n,e))!==void 0}function Wr(t,e){if(t===e)return 0;const n=xs(t),s=xs(e);if(n!==s)return ye(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ze(i.integerValue||i.doubleValue),c=Ze(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Np(t.timestampValue,e.timestampValue);case 4:return Np(go(t),go(e));case 5:return ye(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Ns(i),c=Ns(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const h=ye(l[u],c[u]);if(h!==0)return h}return ye(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ye(Ze(i.latitude),Ze(o.latitude));return l!==0?l:ye(Ze(i.longitude),Ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return xp(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,h;const d=i.fields||{},m=o.fields||{},g=(l=d.value)===null||l===void 0?void 0:l.arrayValue,A=(c=m.value)===null||c===void 0?void 0:c.arrayValue,S=ye(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0);return S!==0?S:xp(g,A)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===oa.mapValue&&o===oa.mapValue)return 0;if(i===oa.mapValue)return 1;if(o===oa.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let d=0;d<c.length&&d<h.length;++d){const m=ye(c[d],h[d]);if(m!==0)return m;const g=Wr(l[c[d]],u[h[d]]);if(g!==0)return g}return ye(c.length,h.length)}(t.mapValue,e.mapValue);default:throw ue()}}function Np(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=ks(t),s=ks(e),r=ye(n.seconds,s.seconds);return r!==0?r:ye(n.nanos,s.nanos)}function xp(t,e){const n=t.values||[],s=e.values||[];for(let r=0;r<n.length&&r<s.length;++r){const i=Wr(n[r],s[r]);if(i)return i}return ye(n.length,s.length)}function zr(t){return Eu(t)}function Eu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=ks(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ns(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ie.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=Eu(i);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${Eu(n.fields[o])}`;return r+"}"}(t.mapValue):ue()}function va(t){switch(xs(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=kl(t);return e?16+va(e):16;case 5:return 2*t.stringValue.length;case 6:return Ns(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((r,i)=>r+va(i),0)}(t.arrayValue);case 10:case 11:return function(s){let r=0;return ar(s.fields,(i,o)=>{r+=i.length+va(o)}),r}(t.mapValue);default:throw ue()}}function vu(t){return!!t&&"integerValue"in t}function Ih(t){return!!t&&"arrayValue"in t}function Dp(t){return!!t&&"nullValue"in t}function Op(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ta(t){return!!t&&"mapValue"in t}function UR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function zi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ar(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=zi(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=zi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function BR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.value=e}static empty(){return new tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Ta(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=zi(n)}setAll(e){let n=_t.emptyPath(),s={},r=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=l.popLast()}o?s[l.lastSegment()]=zi(o):r.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Ta(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return On(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Ta(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){ar(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new tn(zi(this.value))}}function yy(t){const e=[];return ar(t.fields,(n,s)=>{const r=new _t([n]);if(Ta(s)){const i=yy(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new un(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,n,s,r,i,o,l){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new kt(e,0,he.min(),he.min(),he.min(),tn.empty(),0)}static newFoundDocument(e,n,s,r){return new kt(e,1,n,he.min(),s,r,0)}static newNoDocument(e,n){return new kt(e,2,n,he.min(),he.min(),tn.empty(),0)}static newUnknownDocument(e,n){return new kt(e,3,n,he.min(),he.min(),tn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof kt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new kt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ba{constructor(e,n){this.position=e,this.inclusive=n}}function Mp(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=ie.comparator(ie.fromName(o.referenceValue),n.key):s=Wr(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Lp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!On(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class $a{constructor(e,n="asc"){this.field=e,this.dir=n}}function $R(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Ey{}class it extends Ey{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new qR(e,n,s):n==="array-contains"?new zR(e,s):n==="in"?new KR(e,s):n==="not-in"?new GR(e,s):n==="array-contains-any"?new QR(e,s):new it(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new HR(e,s):new WR(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Wr(n,this.value)):n!==null&&xs(this.value)===xs(n)&&this.matchesComparison(Wr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mn extends Ey{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Mn(e,n)}matches(e){return vy(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function vy(t){return t.op==="and"}function Ty(t){return jR(t)&&vy(t)}function jR(t){for(const e of t.filters)if(e instanceof Mn)return!1;return!0}function Tu(t){if(t instanceof it)return t.field.canonicalString()+t.op.toString()+zr(t.value);if(Ty(t))return t.filters.map(e=>Tu(e)).join(",");{const e=t.filters.map(n=>Tu(n)).join(",");return`${t.op}(${e})`}}function wy(t,e){return t instanceof it?function(s,r){return r instanceof it&&s.op===r.op&&s.field.isEqual(r.field)&&On(s.value,r.value)}(t,e):t instanceof Mn?function(s,r){return r instanceof Mn&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,l)=>i&&wy(o,r.filters[l]),!0):!1}(t,e):void ue()}function Iy(t){return t instanceof it?function(n){return`${n.field.canonicalString()} ${n.op} ${zr(n.value)}`}(t):t instanceof Mn?function(n){return n.op.toString()+" {"+n.getFilters().map(Iy).join(" ,")+"}"}(t):"Filter"}class qR extends it{constructor(e,n,s){super(e,n,s),this.key=ie.fromName(s.referenceValue)}matches(e){const n=ie.comparator(e.key,this.key);return this.matchesComparison(n)}}class HR extends it{constructor(e,n){super(e,"in",n),this.keys=by("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class WR extends it{constructor(e,n){super(e,"not-in",n),this.keys=by("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function by(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ie.fromName(s.referenceValue))}class zR extends it{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ih(n)&&yo(n.arrayValue,this.value)}}class KR extends it{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&yo(this.value.arrayValue,n)}}class GR extends it{constructor(e,n){super(e,"not-in",n)}matches(e){if(yo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!yo(this.value.arrayValue,n)}}class QR extends it{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ih(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>yo(this.value.arrayValue,s))}}/**
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
 */class YR{constructor(e,n=null,s=[],r=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function Vp(t,e=null,n=[],s=[],r=null,i=null,o=null){return new YR(t,e,n,s,r,i,o)}function bh(t){const e=de(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Tu(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Pl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>zr(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>zr(s)).join(",")),e.ue=n}return e.ue}function Ah(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!$R(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!wy(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Lp(t.startAt,e.startAt)&&Lp(t.endAt,e.endAt)}function wu(t){return ie.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n=null,s=[],r=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function XR(t,e,n,s,r,i,o,l){return new Nl(t,e,n,s,r,i,o,l)}function xl(t){return new Nl(t)}function Fp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function JR(t){return t.collectionGroup!==null}function Ki(t){const e=de(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ot(_t.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new $a(i,s))}),n.has(_t.keyField().canonicalString())||e.ce.push(new $a(_t.keyField(),s))}return e.ce}function Nn(t){const e=de(t);return e.le||(e.le=ZR(e,Ki(t))),e.le}function ZR(t,e){if(t.limitType==="F")return Vp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new $a(r.field,i)});const n=t.endAt?new Ba(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Ba(t.startAt.position,t.startAt.inclusive):null;return Vp(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function Iu(t,e,n){return new Nl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Dl(t,e){return Ah(Nn(t),Nn(e))&&t.limitType===e.limitType}function Ay(t){return`${bh(Nn(t))}|lt:${t.limitType}`}function Ir(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(r=>Iy(r)).join(", ")}]`),Pl(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(r=>zr(r)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(r=>zr(r)).join(",")),`Target(${s})`}(Nn(t))}; limitType=${t.limitType})`}function Ol(t,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):ie.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(t,e)&&function(s,r){for(const i of Ki(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(s,r){return!(s.startAt&&!function(o,l,c){const u=Mp(o,l,c);return o.inclusive?u<=0:u<0}(s.startAt,Ki(s),r)||s.endAt&&!function(o,l,c){const u=Mp(o,l,c);return o.inclusive?u>=0:u>0}(s.endAt,Ki(s),r))}(t,e)}function eS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Cy(t){return(e,n)=>{let s=!1;for(const r of Ki(t)){const i=tS(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function tS(t,e,n){const s=t.field.isKeyField()?ie.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Wr(c,u):ue()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ue()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ar(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return gy(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS=new nt(ie.comparator);function ns(){return nS}const Ry=new nt(ie.comparator);function Oi(...t){let e=Ry;for(const n of t)e=e.insert(n.key,n);return e}function Sy(t){let e=Ry;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Ys(){return Gi()}function Py(){return Gi()}function Gi(){return new lr(t=>t.toString(),(t,e)=>t.isEqual(e))}const sS=new nt(ie.comparator),rS=new ot(ie.comparator);function _e(...t){let e=rS;for(const n of t)e=e.add(n);return e}const iS=new ot(ye);function oS(){return iS}/**
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
 */function Ch(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ua(e)?"-0":e}}function ky(t){return{integerValue:""+t}}function aS(t,e){return OR(e)?ky(e):Ch(t,e)}/**
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
 */class Ml{constructor(){this._=void 0}}function lS(t,e,n){return t instanceof ja?function(r,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&wh(i)&&(i=kl(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Eo?xy(t,e):t instanceof vo?Dy(t,e):function(r,i){const o=Ny(r,i),l=Up(o)+Up(r.Pe);return vu(o)&&vu(r.Pe)?ky(l):Ch(r.serializer,l)}(t,e)}function cS(t,e,n){return t instanceof Eo?xy(t,e):t instanceof vo?Dy(t,e):n}function Ny(t,e){return t instanceof qa?function(s){return vu(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class ja extends Ml{}class Eo extends Ml{constructor(e){super(),this.elements=e}}function xy(t,e){const n=Oy(e);for(const s of t.elements)n.some(r=>On(r,s))||n.push(s);return{arrayValue:{values:n}}}class vo extends Ml{constructor(e){super(),this.elements=e}}function Dy(t,e){let n=Oy(e);for(const s of t.elements)n=n.filter(r=>!On(r,s));return{arrayValue:{values:n}}}class qa extends Ml{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Up(t){return Ze(t.integerValue||t.doubleValue)}function Oy(t){return Ih(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function uS(t,e){return t.field.isEqual(e.field)&&function(s,r){return s instanceof Eo&&r instanceof Eo||s instanceof vo&&r instanceof vo?Hr(s.elements,r.elements,On):s instanceof qa&&r instanceof qa?On(s.Pe,r.Pe):s instanceof ja&&r instanceof ja}(t.transform,e.transform)}class hS{constructor(e,n){this.version=e,this.transformResults=n}}class Yn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Yn}static exists(e){return new Yn(void 0,e)}static updateTime(e){return new Yn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ll{}function My(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Vy(t.key,Yn.none()):new Co(t.key,t.data,Yn.none());{const n=t.data,s=tn.empty();let r=new ot(_t.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new cr(t.key,s,new un(r.toArray()),Yn.none())}}function fS(t,e,n){t instanceof Co?function(r,i,o){const l=r.value.clone(),c=$p(r.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof cr?function(r,i,o){if(!wa(r.precondition,i))return void i.convertToUnknownDocument(o.version);const l=$p(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Ly(r)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Qi(t,e,n,s){return t instanceof Co?function(i,o,l,c){if(!wa(i.precondition,o))return l;const u=i.value.clone(),h=jp(i.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,s):t instanceof cr?function(i,o,l,c){if(!wa(i.precondition,o))return l;const u=jp(i.fieldTransforms,c,o),h=o.data;return h.setAll(Ly(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,s):function(i,o,l){return wa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function dS(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Ny(s.transform,r||null);i!=null&&(n===null&&(n=tn.empty()),n.set(s.field,i))}return n||null}function Bp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Hr(s,r,(i,o)=>uS(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Co extends Ll{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class cr extends Ll{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ly(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function $p(t,e,n){const s=new Map;Me(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,l=e.data.field(i.field);s.set(i.field,cS(o,l,n[r]))}return s}function jp(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,lS(i,o,e))}return s}class Vy extends Ll{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pS extends Ll{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&fS(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Qi(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Qi(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Py();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(r.key)?null:l;const c=My(o,l);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(he.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),_e())}isEqual(e){return this.batchId===e.batchId&&Hr(this.mutations,e.mutations,(n,s)=>Bp(n,s))&&Hr(this.baseMutations,e.baseMutations,(n,s)=>Bp(n,s))}}class Rh{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Me(e.mutations.length===s.length);let r=function(){return sS}();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Rh(e,n,s,r)}}/**
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
 */class gS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class _S{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et,we;function yS(t){switch(t){default:return ue();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function Fy(t){if(t===void 0)return ts("GRPC error has no .code"),j.UNKNOWN;switch(t){case et.OK:return j.OK;case et.CANCELLED:return j.CANCELLED;case et.UNKNOWN:return j.UNKNOWN;case et.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case et.INTERNAL:return j.INTERNAL;case et.UNAVAILABLE:return j.UNAVAILABLE;case et.UNAUTHENTICATED:return j.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case et.NOT_FOUND:return j.NOT_FOUND;case et.ALREADY_EXISTS:return j.ALREADY_EXISTS;case et.PERMISSION_DENIED:return j.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case et.ABORTED:return j.ABORTED;case et.OUT_OF_RANGE:return j.OUT_OF_RANGE;case et.UNIMPLEMENTED:return j.UNIMPLEMENTED;case et.DATA_LOSS:return j.DATA_LOSS;default:return ue()}}(we=et||(et={}))[we.OK=0]="OK",we[we.CANCELLED=1]="CANCELLED",we[we.UNKNOWN=2]="UNKNOWN",we[we.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",we[we.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",we[we.NOT_FOUND=5]="NOT_FOUND",we[we.ALREADY_EXISTS=6]="ALREADY_EXISTS",we[we.PERMISSION_DENIED=7]="PERMISSION_DENIED",we[we.UNAUTHENTICATED=16]="UNAUTHENTICATED",we[we.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",we[we.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",we[we.ABORTED=10]="ABORTED",we[we.OUT_OF_RANGE=11]="OUT_OF_RANGE",we[we.UNIMPLEMENTED=12]="UNIMPLEMENTED",we[we.INTERNAL=13]="INTERNAL",we[we.UNAVAILABLE=14]="UNAVAILABLE",we[we.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function ES(){return new TextEncoder}/**
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
 */const vS=new bs([4294967295,4294967295],0);function qp(t){const e=ES().encode(t),n=new ly;return n.update(e),new Uint8Array(n.digest())}function Hp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new bs([n,s],0),new bs([r,i],0)]}class Sh{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Mi(`Invalid padding: ${n}`);if(s<0)throw new Mi(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Mi(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Mi(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=bs.fromNumber(this.Te)}de(e,n,s){let r=e.add(n.multiply(bs.fromNumber(s)));return r.compare(vS)===1&&(r=new bs([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=qp(e),[s,r]=Hp(n);for(let i=0;i<this.hashCount;i++){const o=this.de(s,r,i);if(!this.Ee(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Sh(i,r,n);return s.forEach(l=>o.insert(l)),o}insert(e){if(this.Te===0)return;const n=qp(e),[s,r]=Hp(n);for(let i=0;i<this.hashCount;i++){const o=this.de(s,r,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Mi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Ro.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Vl(he.min(),r,new nt(ye),ns(),_e())}}class Ro{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Ro(s,n,_e(),_e(),_e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,n,s,r){this.Re=e,this.removedTargetIds=n,this.key=s,this.Ve=r}}class Uy{constructor(e,n){this.targetId=e,this.me=n}}class By{constructor(e,n,s=Tt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Wp{constructor(){this.fe=0,this.ge=zp(),this.pe=Tt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=_e(),n=_e(),s=_e();return this.ge.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:ue()}}),new Ro(this.pe,this.ye,e,n,s)}Ce(){this.we=!1,this.ge=zp()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Me(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class TS{constructor(e){this.Be=e,this.Le=new Map,this.ke=ns(),this.qe=aa(),this.Qe=aa(),this.Ke=new nt(ye)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const s=this.ze(n);switch(e.state){case 0:this.je(n)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(n);break;case 3:this.je(n)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),s.De(e.resumeToken));break;default:ue()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Le.forEach((s,r)=>{this.je(r)&&n(r)})}Je(e){const n=e.targetId,s=e.me.count,r=this.Ye(n);if(r){const i=r.target;if(wu(i))if(s===0){const o=new ie(i.path);this.We(n,o,kt.newNoDocument(o,he.min()))}else Me(s===1);else{const o=this.Ze(n);if(o!==s){const l=this.Xe(e),c=l?this.et(l,e,o):1;if(c!==0){this.He(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=n;let o,l;try{o=Ns(s).toUint8Array()}catch(c){if(c instanceof _y)return qr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Sh(o,r,i)}catch(c){return qr(c instanceof Mi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Te===0?null:l}et(e,n,s){return n.me.count===s-this.rt(e,n.targetId)?0:2}rt(e,n){const s=this.Be.getRemoteKeysForTarget(n);let r=0;return s.forEach(i=>{const o=this.Be.nt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.We(n,i,null),r++)}),r}it(e){const n=new Map;this.Le.forEach((i,o)=>{const l=this.Ye(o);if(l){if(i.current&&wu(l.target)){const c=new ie(l.target.path);this.st(c).has(o)||this.ot(o,c)||this.We(o,c,kt.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let s=_e();this.Qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(s=s.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const r=new Vl(e,n,this.Ke,this.ke,s);return this.ke=ns(),this.qe=aa(),this.Qe=aa(),this.Ke=new nt(ye),r}Ue(e,n){if(!this.je(e))return;const s=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,s),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,s){if(!this.je(e))return;const r=this.ze(e);this.ot(e,n)?r.Fe(n,1):r.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),s&&(this.ke=this.ke.insert(n,s))}removeTarget(e){this.Le.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Le.get(e);return n||(n=new Wp,this.Le.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new ot(ye),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ot(ye),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Le.get(e);return n&&n.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new Wp),this.Be.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Be.getRemoteKeysForTarget(e).has(n)}}function aa(){return new nt(ie.comparator)}function zp(){return new nt(ie.comparator)}const wS={asc:"ASCENDING",desc:"DESCENDING"},IS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},bS={and:"AND",or:"OR"};class AS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function bu(t,e){return t.useProto3Json||Pl(e)?e:{value:e}}function Ha(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $y(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function CS(t,e){return Ha(t,e.toTimestamp())}function xn(t){return Me(!!t),he.fromTimestamp(function(n){const s=ks(n);return new tt(s.seconds,s.nanos)}(t))}function Ph(t,e){return Au(t,e).canonicalString()}function Au(t,e){const n=function(r){return new Ke(["projects",r.projectId,"databases",r.database])}(t).child("documents");return e===void 0?n:n.child(e)}function jy(t){const e=Ke.fromString(t);return Me(Ky(e)),e}function Cu(t,e){return Ph(t.databaseId,e.path)}function xc(t,e){const n=jy(e);if(n.get(1)!==t.databaseId.projectId)throw new re(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new re(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ie(Hy(n))}function qy(t,e){return Ph(t.databaseId,e)}function RS(t){const e=jy(t);return e.length===4?Ke.emptyPath():Hy(e)}function Ru(t){return new Ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Hy(t){return Me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Kp(t,e,n){return{name:Cu(t,e),fields:n.value.mapValue.fields}}function SS(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ue()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(Me(h===void 0||typeof h=="string"),Tt.fromBase64String(h||"")):(Me(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Tt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const h=u.code===void 0?j.UNKNOWN:Fy(u.code);return new re(h,u.message||"")}(o);n=new By(s,r,i,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=xc(t,s.document.name),i=xn(s.document.updateTime),o=s.document.createTime?xn(s.document.createTime):he.min(),l=new tn({mapValue:{fields:s.document.fields}}),c=kt.newFoundDocument(r,i,o,l),u=s.targetIds||[],h=s.removedTargetIds||[];n=new Ia(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=xc(t,s.document),i=s.readTime?xn(s.readTime):he.min(),o=kt.newNoDocument(r,i),l=s.removedTargetIds||[];n=new Ia([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=xc(t,s.document),i=s.removedTargetIds||[];n=new Ia([],i,r,null)}else{if(!("filter"in e))return ue();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new _S(r,i),l=s.targetId;n=new Uy(l,o)}}return n}function PS(t,e){let n;if(e instanceof Co)n={update:Kp(t,e.key,e.value)};else if(e instanceof Vy)n={delete:Cu(t,e.key)};else if(e instanceof cr)n={update:Kp(t,e.key,e.data),updateMask:FS(e.fieldMask)};else{if(!(e instanceof pS))return ue();n={verify:Cu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,o){const l=o.transform;if(l instanceof ja)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Eo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof vo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof qa)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw ue()}(0,s))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:CS(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ue()}(t,e.precondition)),n}function kS(t,e){return t&&t.length>0?(Me(e!==void 0),t.map(n=>function(r,i){let o=r.updateTime?xn(r.updateTime):xn(i);return o.isEqual(he.min())&&(o=xn(i)),new hS(o,r.transformResults||[])}(n,e))):[]}function NS(t,e){return{documents:[qy(t,e.path)]}}function xS(t,e){const n={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=qy(t,r);const i=function(u){if(u.length!==0)return zy(Mn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(m){return{field:br(m.field),direction:MS(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=bu(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:n,parent:r}}function DS(t){let e=RS(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Me(s===1);const h=n.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(d){const m=Wy(d);return m instanceof Mn&&Ty(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(m=>function(A){return new $a(Ar(A.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(d){let m;return m=typeof d=="object"?d.value:d,Pl(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(d){const m=!!d.before,g=d.values||[];return new Ba(g,m)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const m=!d.before,g=d.values||[];return new Ba(g,m)}(n.endAt)),XR(e,r,o,i,l,"F",c,u)}function OS(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Wy(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Ar(n.unaryFilter.field);return it.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Ar(n.unaryFilter.field);return it.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ar(n.unaryFilter.field);return it.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ar(n.unaryFilter.field);return it.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ue()}}(t):t.fieldFilter!==void 0?function(n){return it.create(Ar(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ue()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Mn.create(n.compositeFilter.filters.map(s=>Wy(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return ue()}}(n.compositeFilter.op))}(t):ue()}function MS(t){return wS[t]}function LS(t){return IS[t]}function VS(t){return bS[t]}function br(t){return{fieldPath:t.canonicalString()}}function Ar(t){return _t.fromServerFormat(t.fieldPath)}function zy(t){return t instanceof it?function(n){if(n.op==="=="){if(Op(n.value))return{unaryFilter:{field:br(n.field),op:"IS_NAN"}};if(Dp(n.value))return{unaryFilter:{field:br(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Op(n.value))return{unaryFilter:{field:br(n.field),op:"IS_NOT_NAN"}};if(Dp(n.value))return{unaryFilter:{field:br(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:br(n.field),op:LS(n.op),value:n.value}}}(t):t instanceof Mn?function(n){const s=n.getFilters().map(r=>zy(r));return s.length===1?s[0]:{compositeFilter:{op:VS(n.op),filters:s}}}(t):ue()}function FS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ky(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n,s,r,i=he.min(),o=he.min(),l=Tt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Es(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Es(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Es(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Es(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e){this.ht=e}}function BS(t){const e=DS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Iu(e,e.limit,"L"):e}/**
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
 */class $S{constructor(){this.ln=new jS}addToCollectionParentIndex(e,n){return this.ln.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(Ps.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(Ps.min())}updateCollectionGroup(e,n,s){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class jS{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new ot(Ke.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ot(Ke.comparator)).toArray()}}/**
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
 */const Gp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ut{static withCacheSize(e){return new Ut(e,Ut.DEFAULT_COLLECTION_PERCENTILE,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ut.DEFAULT_COLLECTION_PERCENTILE=10,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ut.DEFAULT=new Ut(41943040,Ut.DEFAULT_COLLECTION_PERCENTILE,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ut.DISABLED=new Ut(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Kr(0)}static Qn(){return new Kr(-1)}}/**
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
 */function Qp([t,e],[n,s]){const r=ye(t,n);return r===0?ye(e,s):r}class qS{constructor(e){this.Gn=e,this.buffer=new ot(Qp),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();Qp(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class HS{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){Z("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ri(n)?Z("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await si(n)}await this.Yn(3e5)})}}class WS{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(s=>Math.floor(n/100*s))}nthSequenceNumber(e,n){if(n===0)return B.resolve(Sl.oe);const s=new qS(n);return this.Zn.forEachTarget(e,r=>s.Hn(r.sequenceNumber)).next(()=>this.Zn.er(e,r=>s.Hn(r))).next(()=>s.maxValue)}removeTargets(e,n,s){return this.Zn.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(Gp)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Gp):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let s,r,i,o,l,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),r=this.params.maximumSequenceNumbersToCollect):r=d,o=Date.now(),this.nthSequenceNumber(e,r))).next(d=>(s=d,l=Date.now(),this.removeTargets(e,s,n))).next(d=>(i=d,c=Date.now(),this.removeOrphanedDocuments(e,s))).next(d=>(u=Date.now(),wr()<=me.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${r} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${d} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:d})))}}function zS(t,e){return new WS(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(){this.changes=new lr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,kt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?B.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class GS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Qi(s.mutation,r,un.empty(),tt.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,_e()).next(()=>s))}getLocalViewOfDocuments(e,n,s=_e()){const r=Ys();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Oi();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Ys();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,_e()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,s,r){let i=ns();const o=Gi(),l=function(){return Gi()}();return n.forEach((c,u)=>{const h=s.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof cr)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Qi(h.mutation,u,h.mutation.getFieldMask(),tt.now())):o.set(u.key,un.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var d;return l.set(u,new GS(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),l))}recalculateAndSaveOverlays(e,n){const s=Gi();let r=new nt((o,l)=>o-l),i=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=s.get(c)||un.empty();h=l.applyToLocalView(u,h),s.set(c,h);const d=(r.get(l.batchId)||_e()).add(c);r=r.insert(l.batchId,d)})}).next(()=>{const o=[],l=r.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,h=c.value,d=Py();h.forEach(m=>{if(!i.has(m)){const g=My(n.get(m),s.get(m));g!==null&&d.set(m,g),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return B.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,r){return function(o){return ie.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):JR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,r):this.getDocumentsMatchingCollectionQuery(e,n,s,r)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):B.resolve(Ys());let l=-1,c=i;return o.next(u=>B.forEach(u,(h,d)=>(l<d.largestBatchId&&(l=d.largestBatchId),i.get(h)?B.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{c=c.insert(h,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,_e())).next(h=>({batchId:l,changes:Sy(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ie(n)).next(s=>{let r=Oi();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s,r){const i=n.collectionGroup;let o=Oi();return this.indexManager.getCollectionParents(e,i).next(l=>B.forEach(l,c=>{const u=function(d,m){return new Nl(m,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,s,r).next(h=>{h.forEach((d,m)=>{o=o.insert(d,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i,r))).next(o=>{i.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,kt.newInvalidDocument(h)))});let l=Oi();return o.forEach((c,u)=>{const h=i.get(c);h!==void 0&&Qi(h.mutation,u,un.empty(),tt.now()),Ol(n,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class YS{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return B.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(r){return{id:r.id,version:r.version,createTime:xn(r.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(r){return{name:r.name,query:BS(r.bundledQuery),readTime:xn(r.readTime)}}(n)),B.resolve()}}/**
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
 */class XS{constructor(){this.overlays=new nt(ie.comparator),this.dr=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ys();return B.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.Tt(e,n,i)}),B.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.dr.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.dr.delete(s)),B.resolve()}getOverlaysForCollection(e,n,s){const r=Ys(),i=n.length+1,o=new ie(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return B.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new nt((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let h=i.get(u.largestBatchId);h===null&&(h=Ys(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const l=Ys(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>l.set(u,h)),!(l.size()>=r)););return B.resolve(l)}Tt(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.dr.get(r.largestBatchId).delete(s.key);this.dr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new gS(n,s));let i=this.dr.get(n);i===void 0&&(i=_e(),this.dr.set(n,i)),this.dr.set(n,i.add(s.key))}}/**
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
 */class JS{constructor(){this.sessionToken=Tt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(){this.Er=new ot(lt.Ar),this.Rr=new ot(lt.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,n){const s=new lt(e,n);this.Er=this.Er.add(s),this.Rr=this.Rr.add(s)}mr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.gr(new lt(e,n))}pr(e,n){e.forEach(s=>this.removeReference(s,n))}yr(e){const n=new ie(new Ke([])),s=new lt(n,e),r=new lt(n,e+1),i=[];return this.Rr.forEachInRange([s,r],o=>{this.gr(o),i.push(o.key)}),i}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new ie(new Ke([])),s=new lt(n,e),r=new lt(n,e+1);let i=_e();return this.Rr.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new lt(e,0),s=this.Er.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class lt{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return ie.comparator(e.key,n.key)||ye(e.br,n.br)}static Vr(e,n){return ye(e.br,n.br)||ie.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new ot(lt.Ar)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new mS(i,n,s,r);this.mutationQueue.push(o);for(const l of r)this.vr=this.vr.add(new lt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Fr(s),i=r<0?0:r;return B.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new lt(n,0),r=new lt(n,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([s,r],o=>{const l=this.Cr(o.br);i.push(l)}),B.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ot(ye);return n.forEach(r=>{const i=new lt(r,0),o=new lt(r,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,o],l=>{s=s.add(l.br)})}),B.resolve(this.Mr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;ie.isDocumentKey(i)||(i=i.child(""));const o=new lt(new ie(i),0);let l=new ot(ye);return this.vr.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(l=l.add(c.br)),!0)},o),B.resolve(this.Mr(l))}Mr(e){const n=[];return e.forEach(s=>{const r=this.Cr(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Me(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.vr;return B.forEach(n.mutations,r=>{const i=new lt(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.vr=s})}Bn(e){}containsKey(e,n){const s=new lt(n,0),r=this.vr.firstAfterOrEqual(s);return B.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e){this.Nr=e,this.docs=function(){return new nt(ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Nr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return B.resolve(s?s.document.mutableCopy():kt.newInvalidDocument(n))}getEntries(e,n){let s=ns();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():kt.newInvalidDocument(r))}),B.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=ns();const o=n.path,l=new ie(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||kR(PR(h),s)<=0||(r.has(h.key)||Ol(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return B.resolve(i)}getAllFromCollectionGroup(e,n,s,r){ue()}Br(e,n){return B.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new t0(this)}getSize(e){return B.resolve(this.size)}}class t0 extends KS{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.hr.addEntry(e,r)):this.hr.removeEntry(s)}),B.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e){this.persistence=e,this.Lr=new lr(n=>bh(n),Ah),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.kr=0,this.qr=new kh,this.targetCount=0,this.Qr=Kr.qn()}forEachTarget(e,n){return this.Lr.forEach((s,r)=>n(r)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.kr&&(this.kr=n),B.resolve()}Un(e){this.Lr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new Kr(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.Un(n),B.resolve()}removeTargetData(e,n){return this.Lr.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Lr.forEach((o,l)=>{l.sequenceNumber<=n&&s.get(l.targetId)===null&&(this.Lr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)}),B.waitFor(i).next(()=>r)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const s=this.Lr.get(n)||null;return B.resolve(s)}addMatchingKeys(e,n,s){return this.qr.mr(n,s),B.resolve()}removeMatchingKeys(e,n,s){this.qr.pr(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),B.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const s=this.qr.Sr(n);return B.resolve(s)}containsKey(e,n){return B.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e,n){this.Kr={},this.overlays={},this.$r=new Sl(0),this.Ur=!1,this.Ur=!0,this.Wr=new JS,this.referenceDelegate=e(this),this.Gr=new n0(this),this.indexManager=new $S,this.remoteDocumentCache=function(r){return new e0(r)}(s=>this.referenceDelegate.zr(s)),this.serializer=new US(n),this.jr=new YS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new XS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Kr[e.toKey()];return s||(s=new ZS(n,this.referenceDelegate),this.Kr[e.toKey()]=s),s}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,s){Z("MemoryPersistence","Starting transaction:",e);const r=new s0(this.$r.next());return this.referenceDelegate.Hr(),s(r).next(i=>this.referenceDelegate.Jr(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Yr(e,n){return B.or(Object.values(this.Kr).map(s=>()=>s.containsKey(e,n)))}}class s0 extends xR{constructor(e){super(),this.currentSequenceNumber=e}}class Nh{constructor(e){this.persistence=e,this.Zr=new kh,this.Xr=null}static ei(e){return new Nh(e)}get ti(){if(this.Xr)return this.Xr;throw ue()}addReference(e,n,s){return this.Zr.addReference(s,n),this.ti.delete(s.toString()),B.resolve()}removeReference(e,n,s){return this.Zr.removeReference(s,n),this.ti.add(s.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),B.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(r=>this.ti.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.ti.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.ti,s=>{const r=ie.fromPath(s);return this.ni(e,r).next(i=>{i||n.removeEntry(r,he.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(s=>{s?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return B.or([()=>B.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class Wa{constructor(e,n){this.persistence=e,this.ri=new lr(s=>MR(s.path),(s,r)=>s.isEqual(r)),this.garbageCollector=zS(this,n)}static ei(e,n){return new Wa(e,n)}Hr(){}Jr(e){return B.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>n.next(r=>s+r))}nr(e){let n=0;return this.er(e,s=>{n++}).next(()=>n)}er(e,n){return B.forEach(this.ri,(s,r)=>this.ir(e,s,r).next(i=>i?B.resolve():n(r)))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.Br(e,o=>this.ir(e,o,n).next(l=>{l||(s++,i.removeEntry(o,he.min()))})).next(()=>i.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),B.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.ri.set(s,e.currentSequenceNumber),B.resolve()}removeReference(e,n,s){return this.ri.set(s,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),B.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=va(e.data.value)),n}ir(e,n,s){return B.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const r=this.ri.get(n);return B.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Wi=s,this.Gi=r}static zi(e,n){let s=_e(),r=_e();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new xh(e,n.fromCache,s,r)}}/**
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
 */class r0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class i0{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return JA()?8:DR(yn())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,s,r){const i={result:null};return this.Xi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.es(e,n,r,s).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new r0;return this.ts(e,n,o).next(l=>{if(i.result=l,this.Hi)return this.ns(e,n,o,l.size)})}).next(()=>i.result)}ns(e,n,s,r){return s.documentReadCount<this.Ji?(wr()<=me.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",Ir(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),B.resolve()):(wr()<=me.DEBUG&&Z("QueryEngine","Query:",Ir(n),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.Yi*r?(wr()<=me.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",Ir(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Nn(n))):B.resolve())}Xi(e,n){if(Fp(n))return B.resolve(null);let s=Nn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Iu(n,null,"F"),s=Nn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=_e(...i);return this.Zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.rs(n,l);return this.ss(n,u,o,c.readTime)?this.Xi(e,Iu(n,null,"F")):this.os(e,u,n,c)}))})))}es(e,n,s,r){return Fp(n)||r.isEqual(he.min())?B.resolve(null):this.Zi.getDocuments(e,s).next(i=>{const o=this.rs(n,i);return this.ss(n,o,s,r)?B.resolve(null):(wr()<=me.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ir(n)),this.os(e,o,n,SR(r,-1)).next(l=>l))})}rs(e,n){let s=new ot(Cy(e));return n.forEach((r,i)=>{Ol(e,i)&&(s=s.add(i))}),s}ss(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ts(e,n,s){return wr()<=me.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",Ir(n)),this.Zi.getDocumentsMatchingQuery(e,n,Ps.min(),s)}os(e,n,s,r){return this.Zi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class o0{constructor(e,n,s,r){this.persistence=e,this._s=n,this.serializer=r,this.us=new nt(ye),this.cs=new lr(i=>bh(i),Ah),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(s)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new QS(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function a0(t,e,n,s){return new o0(t,e,n,s)}async function Qy(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Ps(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],l=[];let c=_e();for(const u of r){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){l.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:l}))})})}function l0(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.hs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,h){const d=u.batch,m=d.keys();let g=B.resolve();return m.forEach(A=>{g=g.next(()=>h.getEntry(c,A)).next(S=>{const N=u.docVersions.get(A);Me(N!==null),S.version.compareTo(N)<0&&(d.applyToRemoteDocument(S,u),S.isValidDocument()&&(S.setReadTime(u.commitVersion),h.addEntry(S)))})}),g.next(()=>l.mutationQueue.removeMutationBatch(c,d))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(l){let c=_e();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Yy(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function c0(t,e){const n=de(t),s=e.snapshotVersion;let r=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});r=n.us;const l=[];e.targetChanges.forEach((h,d)=>{const m=r.get(d);if(!m)return;l.push(n.Gr.removeMatchingKeys(i,h.removedDocuments,d).next(()=>n.Gr.addMatchingKeys(i,h.addedDocuments,d)));let g=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(Tt.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,s)),r=r.insert(d,g),function(S,N,V){return S.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(m,g,h)&&l.push(n.Gr.updateTargetData(i,g))});let c=ns(),u=_e();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),l.push(u0(i,o,e.documentUpdates).next(h=>{c=h.Is,u=h.ds})),!s.isEqual(he.min())){const h=n.Gr.getLastRemoteSnapshotVersion(i).next(d=>n.Gr.setTargetsMetadata(i,i.currentSequenceNumber,s));l.push(h)}return B.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.us=r,i))}function u0(t,e,n){let s=_e(),r=_e();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=ns();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(l)),c.isNoDocument()&&c.version.isEqual(he.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):Z("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Is:o,ds:r}})}function h0(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function f0(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Gr.getTargetData(s,e).next(i=>i?(r=i,B.resolve(r)):n.Gr.allocateTargetId(s).next(o=>(r=new Es(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Gr.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.us.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.us=n.us.insert(s.targetId,s),n.cs.set(e,s.targetId)),s})}async function Su(t,e,n){const s=de(t),r=s.us.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!ri(o))throw o;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.us=s.us.remove(e),s.cs.delete(r.target)}function Yp(t,e,n){const s=de(t);let r=he.min(),i=_e();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const d=de(c),m=d.cs.get(h);return m!==void 0?B.resolve(d.us.get(m)):d.Gr.getTargetData(u,h)}(s,o,Nn(e)).next(l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,s.Gr.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>s._s.getDocumentsMatchingQuery(o,e,n?r:he.min(),n?i:_e())).next(l=>(d0(s,eS(e),l),{documents:l,Es:i})))}function d0(t,e,n){let s=t.ls.get(e)||he.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.ls.set(e,s)}class Xp{constructor(){this.activeTargetIds=oS()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class p0{constructor(){this._o=new Xp,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,s){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Xp,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class m0{uo(e){}shutdown(){}}/**
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
 */class Jp{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let la=null;function Dc(){return la===null?la=function(){return 268435456+Math.round(2147483648*Math.random())}():la++,"0x"+la.toString(16)}/**
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
 */const g0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="WebChannelConnection";class y0 extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=s+"://"+n.host,this.Mo=`projects/${r}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Oo(n,s,r,i,o){const l=Dc(),c=this.No(n,s.toUriEncodedString());Z("RestConnection",`Sending RPC '${n}' ${l}:`,c,r);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(u,i,o),this.Lo(n,c,u,r).then(h=>(Z("RestConnection",`Received RPC '${n}' ${l}: `,h),h),h=>{throw qr("RestConnection",`RPC '${n}' ${l} failed with error: `,h,"url: ",c,"request:",r),h})}ko(n,s,r,i,o,l){return this.Oo(n,s,r,i,o)}Bo(n,s,r){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ni}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((i,o)=>n[o]=i),r&&r.headers.forEach((i,o)=>n[o]=i)}No(n,s){const r=g0[n];return`${this.Fo}/v1/${s}:${r}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,n,s,r){const i=Dc();return new Promise((o,l)=>{const c=new cy;c.setWithCredentials(!0),c.listenOnce(uy.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ea.NO_ERROR:const h=c.getResponseJson();Z(Ct,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case Ea.TIMEOUT:Z(Ct,`RPC '${e}' ${i} timed out`),l(new re(j.DEADLINE_EXCEEDED,"Request time out"));break;case Ea.HTTP_ERROR:const d=c.getStatus();if(Z(Ct,`RPC '${e}' ${i} failed with status:`,d,"response text:",c.getResponseText()),d>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const g=m==null?void 0:m.error;if(g&&g.status&&g.message){const A=function(N){const V=N.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(V)>=0?V:j.UNKNOWN}(g.status);l(new re(A,g.message))}else l(new re(j.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new re(j.UNAVAILABLE,"Connection failed."));break;default:ue()}}finally{Z(Ct,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(r);Z(Ct,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",u,s,15)})}qo(e,n,s){const r=Dc(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=dy(),l=fy(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Bo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const h=i.join("");Z(Ct,`Creating RPC '${e}' stream ${r}: ${h}`,c);const d=o.createWebChannel(h,c);let m=!1,g=!1;const A=new _0({Eo:N=>{g?Z(Ct,`Not sending because RPC '${e}' stream ${r} is closed:`,N):(m||(Z(Ct,`Opening RPC '${e}' stream ${r} transport.`),d.open(),m=!0),Z(Ct,`RPC '${e}' stream ${r} sending:`,N),d.send(N))},Ao:()=>d.close()}),S=(N,V,F)=>{N.listen(V,D=>{try{F(D)}catch(O){setTimeout(()=>{throw O},0)}})};return S(d,Di.EventType.OPEN,()=>{g||(Z(Ct,`RPC '${e}' stream ${r} transport opened.`),A.So())}),S(d,Di.EventType.CLOSE,()=>{g||(g=!0,Z(Ct,`RPC '${e}' stream ${r} transport closed`),A.Do())}),S(d,Di.EventType.ERROR,N=>{g||(g=!0,qr(Ct,`RPC '${e}' stream ${r} transport errored:`,N),A.Do(new re(j.UNAVAILABLE,"The operation could not be completed")))}),S(d,Di.EventType.MESSAGE,N=>{var V;if(!g){const F=N.data[0];Me(!!F);const D=F,O=(D==null?void 0:D.error)||((V=D[0])===null||V===void 0?void 0:V.error);if(O){Z(Ct,`RPC '${e}' stream ${r} received error:`,O);const ee=O.status;let te=function(E){const b=et[E];if(b!==void 0)return Fy(b)}(ee),C=O.message;te===void 0&&(te=j.INTERNAL,C="Unknown error status: "+ee+" with message "+O.message),g=!0,A.Do(new re(te,C)),d.close()}else Z(Ct,`RPC '${e}' stream ${r} received:`,F),A.vo(F)}}),S(l,hy.STAT_EVENT,N=>{N.stat===_u.PROXY?Z(Ct,`RPC '${e}' stream ${r} detected buffering proxy`):N.stat===_u.NOPROXY&&Z(Ct,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{A.bo()},0),A}}function Oc(){return typeof document<"u"?document:null}/**
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
 */function Fl(t){return new AS(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e,n,s=1e3,r=1.5,i=6e4){this.li=e,this.timerId=n,this.Qo=s,this.Ko=r,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),s=Math.max(0,Date.now()-this.Go),r=Math.max(0,n-s);r>0&&Z("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,r,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e,n,s,r,i,o,l,c){this.li=e,this.Yo=s,this.Zo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Xy(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(ts(n.toString()),ts("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Xo===n&&this.I_(s,r)},s=>{e(()=>{const r=new re(j.UNKNOWN,"Fetching auth token failed: "+s.message);return this.d_(r)})})}I_(e,n){const s=this.T_(this.Xo);this.stream=this.E_(e,n),this.stream.Ro(()=>{s(()=>this.listener.Ro())}),this.stream.mo(()=>{s(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(r=>{s(()=>this.d_(r))}),this.stream.onMessage(r=>{s(()=>++this.n_==1?this.A_(r):this.onNext(r))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class E0 extends Jy{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}E_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=SS(this.serializer,e),s=function(i){if(!("targetChange"in i))return he.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?he.min():o.readTime?xn(o.readTime):he.min()}(e);return this.listener.R_(n,s)}V_(e){const n={};n.database=Ru(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=wu(c)?{documents:NS(i,c)}:{query:xS(i,c).ct},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=$y(i,o.resumeToken);const u=bu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(he.min())>0){l.readTime=Ha(i,o.snapshotVersion.toTimestamp());const u=bu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const s=OS(this.serializer,e);s&&(n.labels=s),this.c_(n)}m_(e){const n={};n.database=Ru(this.serializer),n.removeTarget=e,this.c_(n)}}class v0 extends Jy{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,n){return this.connection.qo("Write",e,n)}A_(e){return Me(!!e.streamToken),this.lastStreamToken=e.streamToken,Me(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=kS(e.writeResults,e.commitTime),s=xn(e.commitTime);return this.listener.y_(s,n)}w_(){const e={};e.database=Ru(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>PS(this.serializer,s))};this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0 extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.S_=!1}b_(){if(this.S_)throw new re(j.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,s,r){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Oo(e,Au(n,s),r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new re(j.UNKNOWN,i.toString())})}ko(e,n,s,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.ko(e,Au(n,s),r,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new re(j.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class w0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(ts(n),this.C_=!1):Z("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(o=>{s.enqueueAndForget(async()=>{ur(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=de(c);u.k_.add(4),await So(u),u.K_.set("Unknown"),u.k_.delete(4),await Ul(u)}(this))})}),this.K_=new w0(s,r)}}async function Ul(t){if(ur(t))for(const e of t.q_)await e(!0)}async function So(t){for(const e of t.q_)await e(!1)}function Zy(t,e){const n=de(t);n.L_.has(e.targetId)||(n.L_.set(e.targetId,e),Lh(n)?Mh(n):ii(n).s_()&&Oh(n,e))}function Dh(t,e){const n=de(t),s=ii(n);n.L_.delete(e),s.s_()&&eE(n,e),n.L_.size===0&&(s.s_()?s.a_():ur(n)&&n.K_.set("Unknown"))}function Oh(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ii(t).V_(e)}function eE(t,e){t.U_.xe(e),ii(t).m_(e)}function Mh(t){t.U_=new TS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.L_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),ii(t).start(),t.K_.F_()}function Lh(t){return ur(t)&&!ii(t).i_()&&t.L_.size>0}function ur(t){return de(t).k_.size===0}function tE(t){t.U_=void 0}async function b0(t){t.K_.set("Online")}async function A0(t){t.L_.forEach((e,n)=>{Oh(t,e)})}async function C0(t,e){tE(t),Lh(t)?(t.K_.O_(e),Mh(t)):t.K_.set("Unknown")}async function R0(t,e,n){if(t.K_.set("Online"),e instanceof By&&e.state===2&&e.cause)try{await async function(r,i){const o=i.cause;for(const l of i.targetIds)r.L_.has(l)&&(await r.remoteSyncer.rejectListen(l,o),r.L_.delete(l),r.U_.removeTarget(l))}(t,e)}catch(s){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await za(t,s)}else if(e instanceof Ia?t.U_.$e(e):e instanceof Uy?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(he.min()))try{const s=await Yy(t.localStore);n.compareTo(s)>=0&&await function(i,o){const l=i.U_.it(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=i.L_.get(u);h&&i.L_.set(u,h.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const h=i.L_.get(c);if(!h)return;i.L_.set(c,h.withResumeToken(Tt.EMPTY_BYTE_STRING,h.snapshotVersion)),eE(i,c);const d=new Es(h.target,c,u,h.sequenceNumber);Oh(i,d)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(s){Z("RemoteStore","Failed to raise snapshot:",s),await za(t,s)}}async function za(t,e,n){if(!ri(e))throw e;t.k_.add(1),await So(t),t.K_.set("Offline"),n||(n=()=>Yy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await Ul(t)})}function nE(t,e){return e().catch(n=>za(t,n,e))}async function Bl(t){const e=de(t),n=Ds(e);let s=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;S0(e);)try{const r=await h0(e.localStore,s);if(r===null){e.B_.length===0&&n.a_();break}s=r.batchId,P0(e,r)}catch(r){await za(e,r)}sE(e)&&rE(e)}function S0(t){return ur(t)&&t.B_.length<10}function P0(t,e){t.B_.push(e);const n=Ds(t);n.s_()&&n.f_&&n.g_(e.mutations)}function sE(t){return ur(t)&&!Ds(t).i_()&&t.B_.length>0}function rE(t){Ds(t).start()}async function k0(t){Ds(t).w_()}async function N0(t){const e=Ds(t);for(const n of t.B_)e.g_(n.mutations)}async function x0(t,e,n){const s=t.B_.shift(),r=Rh.from(s,e,n);await nE(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Bl(t)}async function D0(t,e){e&&Ds(t).f_&&await async function(s,r){if(function(o){return yS(o)&&o!==j.ABORTED}(r.code)){const i=s.B_.shift();Ds(s).__(),await nE(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Bl(s)}}(t,e),sE(t)&&rE(t)}async function Zp(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const s=ur(n);n.k_.add(3),await So(n),s&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await Ul(n)}async function O0(t,e){const n=de(t);e?(n.k_.delete(2),await Ul(n)):e||(n.k_.add(2),await So(n),n.K_.set("Unknown"))}function ii(t){return t.W_||(t.W_=function(n,s,r){const i=de(n);return i.b_(),new E0(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Ro:b0.bind(null,t),mo:A0.bind(null,t),po:C0.bind(null,t),R_:R0.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),Lh(t)?Mh(t):t.K_.set("Unknown")):(await t.W_.stop(),tE(t))})),t.W_}function Ds(t){return t.G_||(t.G_=function(n,s,r){const i=de(n);return i.b_(),new v0(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:k0.bind(null,t),po:D0.bind(null,t),p_:N0.bind(null,t),y_:x0.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await Bl(t)):(await t.G_.stop(),t.B_.length>0&&(Z("RemoteStore",`Stopping write stream with ${t.B_.length} pending writes`),t.B_=[]))})),t.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Qn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,l=new Vh(e,n,o,r,i);return l.start(s),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fh(t,e){if(ts("AsyncQueue",`${e}: ${t}`),ri(t))return new re(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{static emptySet(e){return new Or(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||ie.comparator(n.key,s.key):(n,s)=>ie.comparator(n.key,s.key),this.keyedMap=Oi(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Or)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Or;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(){this.z_=new nt(ie.comparator)}track(e){const n=e.doc.key,s=this.z_.get(n);s?e.type!==0&&s.type===3?this.z_=this.z_.insert(n,e):e.type===3&&s.type!==1?this.z_=this.z_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.z_=this.z_.remove(n):e.type===1&&s.type===2?this.z_=this.z_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):ue():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,s)=>{e.push(s)}),e}}class Gr{constructor(e,n,s,r,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Gr(e,n,Or.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Dl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class L0{constructor(){this.queries=tm(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,s){const r=de(n),i=r.queries;r.queries=tm(),i.forEach((o,l)=>{for(const c of l.J_)c.onError(s)})})(this,new re(j.ABORTED,"Firestore shutting down"))}}function tm(){return new lr(t=>Ay(t),Dl)}async function Uh(t,e){const n=de(t);let s=3;const r=e.query;let i=n.queries.get(r);i?!i.Y_()&&e.Z_()&&(s=2):(i=new M0,s=e.Z_()?0:1);try{switch(s){case 0:i.H_=await n.onListen(r,!0);break;case 1:i.H_=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(o){const l=Fh(o,`Initialization of query '${Ir(e.query)}' failed`);return void e.onError(l)}n.queries.set(r,i),i.J_.push(e),e.ea(n.onlineState),i.H_&&e.ta(i.H_)&&$h(n)}async function Bh(t,e){const n=de(t),s=e.query;let r=3;const i=n.queries.get(s);if(i){const o=i.J_.indexOf(e);o>=0&&(i.J_.splice(o,1),i.J_.length===0?r=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(r=2))}switch(r){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function V0(t,e){const n=de(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const l of o.J_)l.ta(r)&&(s=!0);o.H_=r}}s&&$h(n)}function F0(t,e,n){const s=de(t),r=s.queries.get(e);if(r)for(const i of r.J_)i.onError(n);s.queries.delete(e)}function $h(t){t.X_.forEach(e=>{e.next()})}var Pu,nm;(nm=Pu||(Pu={})).na="default",nm.Cache="cache";class jh{constructor(e,n,s){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=s||{}}ta(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Gr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const s=n!=="Offline";return(!this.options.ua||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=Gr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Pu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e){this.key=e}}class oE{constructor(e){this.key=e}}class U0{constructor(e,n){this.query=e,this.Ea=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=_e(),this.mutatedKeys=_e(),this.Va=Cy(e),this.ma=new Or(this.Va)}get fa(){return this.Ea}ga(e,n){const s=n?n.pa:new em,r=n?n.ma:this.ma;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,l=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((h,d)=>{const m=r.get(h),g=Ol(this.query,d)?d:null,A=!!m&&this.mutatedKeys.has(m.key),S=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let N=!1;m&&g?m.data.isEqual(g.data)?A!==S&&(s.track({type:3,doc:g}),N=!0):this.ya(m,g)||(s.track({type:2,doc:g}),N=!0,(c&&this.Va(g,c)>0||u&&this.Va(g,u)<0)&&(l=!0)):!m&&g?(s.track({type:0,doc:g}),N=!0):m&&!g&&(s.track({type:1,doc:m}),N=!0,(c||u)&&(l=!0)),N&&(g?(o=o.add(g),i=S?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),s.track({type:1,doc:h})}return{ma:o,pa:s,ss:l,mutatedKeys:i}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,r){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((h,d)=>function(g,A){const S=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue()}};return S(g)-S(A)}(h.type,d.type)||this.Va(h.doc,d.doc)),this.wa(s),r=r!=null&&r;const l=n&&!r?this.Sa():[],c=this.Ra.size===0&&this.current&&!r?1:0,u=c!==this.Aa;return this.Aa=c,o.length!==0||u?{snapshot:new Gr(this.query,e.ma,i,o,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),ba:l}:{ba:l}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new em,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.Ea=this.Ea.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ea=this.Ea.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=_e(),this.ma.forEach(s=>{this.Da(s.key)&&(this.Ra=this.Ra.add(s.key))});const n=[];return e.forEach(s=>{this.Ra.has(s)||n.push(new oE(s))}),this.Ra.forEach(s=>{e.has(s)||n.push(new iE(s))}),n}va(e){this.Ea=e.Es,this.Ra=_e();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return Gr.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class B0{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class $0{constructor(e){this.key=e,this.Fa=!1}}class j0{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new lr(l=>Ay(l),Dl),this.Oa=new Map,this.Na=new Set,this.Ba=new nt(ie.comparator),this.La=new Map,this.ka=new kh,this.qa={},this.Qa=new Map,this.Ka=Kr.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function q0(t,e,n=!0){const s=fE(t);let r;const i=s.xa.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.Ca()):r=await aE(s,e,n,!0),r}async function H0(t,e){const n=fE(t);await aE(n,e,!0,!1)}async function aE(t,e,n,s){const r=await f0(t.localStore,Nn(e)),i=r.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return s&&(l=await W0(t,e,i,o==="current",r.resumeToken)),t.isPrimaryClient&&n&&Zy(t.remoteStore,r),l}async function W0(t,e,n,s,r){t.Ua=(d,m,g)=>async function(S,N,V,F){let D=N.view.ga(V);D.ss&&(D=await Yp(S.localStore,N.query,!1).then(({documents:C})=>N.view.ga(C,D)));const O=F&&F.targetChanges.get(N.targetId),ee=F&&F.targetMismatches.get(N.targetId)!=null,te=N.view.applyChanges(D,S.isPrimaryClient,O,ee);return rm(S,N.targetId,te.ba),te.snapshot}(t,d,m,g);const i=await Yp(t.localStore,e,!0),o=new U0(e,i.Es),l=o.ga(i.documents),c=Ro.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(l,t.isPrimaryClient,c);rm(t,n,u.ba);const h=new B0(e,n,o);return t.xa.set(e,h),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),u.snapshot}async function z0(t,e,n){const s=de(t),r=s.xa.get(e),i=s.Oa.get(r.targetId);if(i.length>1)return s.Oa.set(r.targetId,i.filter(o=>!Dl(o,e))),void s.xa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await Su(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),n&&Dh(s.remoteStore,r.targetId),ku(s,r.targetId)}).catch(si)):(ku(s,r.targetId),await Su(s.localStore,r.targetId,!0))}async function K0(t,e){const n=de(t),s=n.xa.get(e),r=n.Oa.get(s.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Dh(n.remoteStore,s.targetId))}async function G0(t,e,n){const s=tP(t);try{const r=await function(o,l){const c=de(o),u=tt.now(),h=l.reduce((g,A)=>g.add(A.key),_e());let d,m;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let A=ns(),S=_e();return c.hs.getEntries(g,h).next(N=>{A=N,A.forEach((V,F)=>{F.isValidDocument()||(S=S.add(V))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,A)).next(N=>{d=N;const V=[];for(const F of l){const D=dS(F,d.get(F.key).overlayedDocument);D!=null&&V.push(new cr(F.key,D,yy(D.value.mapValue),Yn.exists(!0)))}return c.mutationQueue.addMutationBatch(g,u,V,l)}).next(N=>{m=N;const V=N.applyToLocalDocumentSet(d,S);return c.documentOverlayCache.saveOverlays(g,N.batchId,V)})}).then(()=>({batchId:m.batchId,changes:Sy(d)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(o,l,c){let u=o.qa[o.currentUser.toKey()];u||(u=new nt(ye)),u=u.insert(l,c),o.qa[o.currentUser.toKey()]=u}(s,r.batchId,n),await Po(s,r.changes),await Bl(s.remoteStore)}catch(r){const i=Fh(r,"Failed to persist write");n.reject(i)}}async function lE(t,e){const n=de(t);try{const s=await c0(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.La.get(i);o&&(Me(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Fa=!0:r.modifiedDocuments.size>0?Me(o.Fa):r.removedDocuments.size>0&&(Me(o.Fa),o.Fa=!1))}),await Po(n,s,e)}catch(s){await si(s)}}function sm(t,e,n){const s=de(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.xa.forEach((i,o)=>{const l=o.view.ea(e);l.snapshot&&r.push(l.snapshot)}),function(o,l){const c=de(o);c.onlineState=l;let u=!1;c.queries.forEach((h,d)=>{for(const m of d.J_)m.ea(l)&&(u=!0)}),u&&$h(c)}(s.eventManager,e),r.length&&s.Ma.R_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Q0(t,e,n){const s=de(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.La.get(e),i=r&&r.key;if(i){let o=new nt(ie.comparator);o=o.insert(i,kt.newNoDocument(i,he.min()));const l=_e().add(i),c=new Vl(he.min(),new Map,new nt(ye),o,l);await lE(s,c),s.Ba=s.Ba.remove(i),s.La.delete(e),qh(s)}else await Su(s.localStore,e,!1).then(()=>ku(s,e,n)).catch(si)}async function Y0(t,e){const n=de(t),s=e.batch.batchId;try{const r=await l0(n.localStore,e);uE(n,s,null),cE(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Po(n,r)}catch(r){await si(r)}}async function X0(t,e,n){const s=de(t);try{const r=await function(o,l){const c=de(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,l).next(d=>(Me(d!==null),h=d.keys(),c.mutationQueue.removeMutationBatch(u,d))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(s.localStore,e);uE(s,e,n),cE(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Po(s,r)}catch(r){await si(r)}}function cE(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function uE(t,e,n){const s=de(t);let r=s.qa[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.qa[s.currentUser.toKey()]=r}}function ku(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Oa.get(e))t.xa.delete(s),n&&t.Ma.Wa(s,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(s=>{t.ka.containsKey(s)||hE(t,s)})}function hE(t,e){t.Na.delete(e.path.canonicalString());const n=t.Ba.get(e);n!==null&&(Dh(t.remoteStore,n),t.Ba=t.Ba.remove(e),t.La.delete(n),qh(t))}function rm(t,e,n){for(const s of n)s instanceof iE?(t.ka.addReference(s.key,e),J0(t,s)):s instanceof oE?(Z("SyncEngine","Document no longer in limbo: "+s.key),t.ka.removeReference(s.key,e),t.ka.containsKey(s.key)||hE(t,s.key)):ue()}function J0(t,e){const n=e.key,s=n.path.canonicalString();t.Ba.get(n)||t.Na.has(s)||(Z("SyncEngine","New document in limbo: "+n),t.Na.add(s),qh(t))}function qh(t){for(;t.Na.size>0&&t.Ba.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new ie(Ke.fromString(e)),s=t.Ka.next();t.La.set(s,new $0(n)),t.Ba=t.Ba.insert(n,s),Zy(t.remoteStore,new Es(Nn(xl(n.path)),s,"TargetPurposeLimboResolution",Sl.oe))}}async function Po(t,e,n){const s=de(t),r=[],i=[],o=[];s.xa.isEmpty()||(s.xa.forEach((l,c)=>{o.push(s.Ua(c,e,n).then(u=>{var h;if((u||n)&&s.isPrimaryClient){const d=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;s.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(u){r.push(u);const d=xh.zi(c.targetId,u);i.push(d)}}))}),await Promise.all(o),s.Ma.R_(r),await async function(c,u){const h=de(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>B.forEach(u,m=>B.forEach(m.Wi,g=>h.persistence.referenceDelegate.addReference(d,m.targetId,g)).next(()=>B.forEach(m.Gi,g=>h.persistence.referenceDelegate.removeReference(d,m.targetId,g)))))}catch(d){if(!ri(d))throw d;Z("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const m=d.targetId;if(!d.fromCache){const g=h.us.get(m),A=g.snapshotVersion,S=g.withLastLimboFreeSnapshotVersion(A);h.us=h.us.insert(m,S)}}}(s.localStore,i))}async function Z0(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const s=await Qy(n.localStore,e);n.currentUser=e,function(i,o){i.Qa.forEach(l=>{l.forEach(c=>{c.reject(new re(j.CANCELLED,o))})}),i.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Po(n,s.Ts)}}function eP(t,e){const n=de(t),s=n.La.get(e);if(s&&s.Fa)return _e().add(s.key);{let r=_e();const i=n.Oa.get(e);if(!i)return r;for(const o of i){const l=n.xa.get(o);r=r.unionWith(l.view.fa)}return r}}function fE(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=lE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=eP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Q0.bind(null,e),e.Ma.R_=V0.bind(null,e.eventManager),e.Ma.Wa=F0.bind(null,e.eventManager),e}function tP(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Y0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=X0.bind(null,e),e}class Ka{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Fl(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return a0(this.persistence,new i0,e.initialUser,this.serializer)}ja(e){return new Gy(Nh.ei,this.serializer)}za(e){return new p0}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ka.provider={build:()=>new Ka};class nP extends Ka{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){Me(this.persistence.referenceDelegate instanceof Wa);const s=this.persistence.referenceDelegate.garbageCollector;return new HS(s,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?Ut.withCacheSize(this.cacheSizeBytes):Ut.DEFAULT;return new Gy(s=>Wa.ei(s,n),this.serializer)}}class Nu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>sm(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Z0.bind(null,this.syncEngine),await O0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new L0}()}createDatastore(e){const n=Fl(e.databaseInfo.databaseId),s=function(i){return new y0(i)}(e.databaseInfo);return function(i,o,l,c){return new T0(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,r,i,o,l){return new I0(s,r,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>sm(this.syncEngine,n,0),function(){return Jp.p()?new Jp:new m0}())}createSyncEngine(e,n){return function(r,i,o,l,c,u,h){const d=new j0(r,i,o,l,c,u);return h&&(d.$a=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(r){const i=de(r);Z("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await So(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Nu.provider={build:()=>new Nu};/**
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
 */class Hh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):ts("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e,n,s,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Rt.UNAUTHENTICATED,this.clientId=my.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async o=>{Z("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(Z("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Fh(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Mc(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Qy(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function im(t,e){t.asyncQueue.verifyOperationInProgress();const n=await rP(t);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(s=>Zp(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>Zp(e.remoteStore,r)),t._onlineComponents=e}async function rP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Mc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(r){return r.name==="FirebaseError"?r.code===j.FAILED_PRECONDITION||r.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(n))throw n;qr("Error using user provided cache. Falling back to memory cache: "+n),await Mc(t,new Ka)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await Mc(t,new nP(void 0));return t._offlineComponents}async function dE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await im(t,t._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await im(t,new Nu))),t._onlineComponents}function iP(t){return dE(t).then(e=>e.syncEngine)}async function Ga(t){const e=await dE(t),n=e.eventManager;return n.onListen=q0.bind(null,e.syncEngine),n.onUnlisten=z0.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=H0.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=K0.bind(null,e.syncEngine),n}function oP(t,e,n={}){const s=new Qn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const h=new Hh({next:m=>{h.eu(),o.enqueueAndForget(()=>Bh(i,d));const g=m.docs.has(l);!g&&m.fromCache?u.reject(new re(j.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&m.fromCache&&c&&c.source==="server"?u.reject(new re(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),d=new jh(xl(l.path),h,{includeMetadataChanges:!0,ua:!0});return Uh(i,d)}(await Ga(t),t.asyncQueue,e,n,s)),s.promise}function aP(t,e,n={}){const s=new Qn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const h=new Hh({next:m=>{h.eu(),o.enqueueAndForget(()=>Bh(i,d)),m.fromCache&&c.source==="server"?u.reject(new re(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),d=new jh(l,h,{includeMetadataChanges:!0,ua:!0});return Uh(i,d)}(await Ga(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */function pE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const om=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(t,e,n){if(!n)throw new re(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function lP(t,e,n,s){if(e===!0&&s===!0)throw new re(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function am(t){if(!ie.isDocumentKey(t))throw new re(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function lm(t){if(ie.isDocumentKey(t))throw new re(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Wh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue()}function Xn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new re(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Wh(t);throw new re(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class cm{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new re(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new re(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pE((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new re(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new re(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new re(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class $l{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cm({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cm(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new ER;switch(s.type){case"firstParty":return new IR(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new re(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=om.get(n);s&&(Z("ComponentProvider","Removing Datastore"),om.delete(n),s.terminate())}(this),Promise.resolve()}}function cP(t,e,n,s={}){var r;const i=(t=Xn(t,$l))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&qr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let l,c;if(typeof s.mockUserToken=="string")l=s.mockUserToken,c=Rt.MOCK_USER;else{l=KA(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new re(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Rt(u)}t._authCredentials=new vR(new py(l,c))}}/**
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
 */class ko{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ko(this.firestore,e,this._query)}}class Qt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qt(this.firestore,e,this._key)}}class Cs extends ko{constructor(e,n,s){super(e,n,xl(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qt(this.firestore,null,new ie(e))}withConverter(e){return new Cs(this.firestore,e,this._path)}}function uP(t,e,...n){if(t=En(t),mE("collection","path",e),t instanceof $l){const s=Ke.fromString(e,...n);return lm(s),new Cs(t,null,s)}{if(!(t instanceof Qt||t instanceof Cs))throw new re(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ke.fromString(e,...n));return lm(s),new Cs(t.firestore,null,s)}}function hP(t,e,...n){if(t=En(t),arguments.length===1&&(e=my.newId()),mE("doc","path",e),t instanceof $l){const s=Ke.fromString(e,...n);return am(s),new Qt(t,null,new ie(s))}{if(!(t instanceof Qt||t instanceof Cs))throw new re(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ke.fromString(e,...n));return am(s),new Qt(t.firestore,t instanceof Cs?t.converter:null,new ie(s))}}/**
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
 */class um{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Xy(this,"async_queue_retry"),this.fu=()=>{const s=Oc();s&&Z("AsyncQueue","Visibility state changed to "+s.visibilityState),this.r_.Jo()},this.gu=e;const n=Oc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const n=Oc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const n=new Qn;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!ri(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(s=>{this.Au=s,this.Ru=!1;const r=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(s);throw ts("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Ru=!1,s))));return this.gu=n,n}enqueueAfterDelay(e,n,s){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const r=Vh.createAndSchedule(this,e,n,s,i=>this.Su(i));return this.Eu.push(r),r}pu(){this.Au&&ue()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.Eu)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Eu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.Eu.indexOf(e);this.Eu.splice(n,1)}}function hm(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const r=n;for(const i of s)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Qr extends $l{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new um,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new um(e),this._firestoreClient=void 0,await e}}}function fP(t,e){const n=typeof t=="object"?t:iy(),s=typeof t=="string"?t:"(default)",r=aR(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=WA("firestore");i&&cP(r,...i)}return r}function jl(t){if(t._terminated)throw new re(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||dP(t),t._firestoreClient}function dP(t){var e,n,s;const r=t._freezeSettings(),i=function(l,c,u,h){return new FR(l,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,pE(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._componentsProvider||!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),t._firestoreClient=new sP(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class Yr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Yr(Tt.fromBase64String(e))}catch(n){throw new re(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Yr(Tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class zh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new re(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class gE{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new re(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new re(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}/**
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
 */class Kh{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP=/^__.*__$/;class mP{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new cr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Co(e,this.data,n,this.fieldTransforms)}}function _E(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue()}}class Gh{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Gh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.xu({path:s,Nu:!1});return r.Bu(e),r}Lu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.xu({path:s,Nu:!1});return r.Fu(),r}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Qa(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(_E(this.Mu)&&pP.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class gP{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Fl(e)}$u(e,n,s,r=!1){return new Gh({Mu:e,methodName:n,Ku:s,path:_t.emptyPath(),Nu:!1,Qu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _P(t){const e=t._freezeSettings(),n=Fl(t._databaseId);return new gP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function yP(t,e,n,s,r,i={}){const o=t.$u(i.merge||i.mergeFields?2:0,e,n,r);TE("Data must be an object, but it was:",o,s);const l=EE(s,o);let c,u;if(i.merge)c=new un(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const d of i.mergeFields){const m=EP(e,d,n);if(!o.contains(m))throw new re(j.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);TP(h,m)||h.push(m)}c=new un(h),u=o.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,u=o.fieldTransforms;return new mP(new tn(l),c,u)}function yE(t,e){if(vE(t=En(t)))return TE("Unsupported field value:",e,t),EE(t,e);if(t instanceof gE)return function(s,r){if(!_E(r.Mu))throw r.qu(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.qu(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(s,r){const i=[];let o=0;for(const l of s){let c=yE(l,r.ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(s,r){if((s=En(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return aS(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=tt.fromDate(s);return{timestampValue:Ha(r.serializer,i)}}if(s instanceof tt){const i=new tt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Ha(r.serializer,i)}}if(s instanceof ql)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Yr)return{bytesValue:$y(r.serializer,s._byteString)};if(s instanceof Qt){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ph(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof Kh)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.qu("VectorValues must only contain numeric values.");return Ch(l.serializer,c)})}}}}}}(s,r);throw r.qu(`Unsupported field value: ${Wh(s)}`)}(t,e)}function EE(t,e){const n={};return gy(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ar(t,(s,r)=>{const i=yE(r,e.Ou(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function vE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof tt||t instanceof ql||t instanceof Yr||t instanceof Qt||t instanceof gE||t instanceof Kh)}function TE(t,e,n){if(!vE(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const s=Wh(n);throw s==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+s)}}function EP(t,e,n){if((e=En(e))instanceof zh)return e._internalPath;if(typeof e=="string")return wE(t,e);throw Qa("Field path arguments must be of type string or ",t,!1,void 0,n)}const vP=new RegExp("[~\\*/\\[\\]]");function wE(t,e,n){if(e.search(vP)>=0)throw Qa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new zh(...e.split("."))._internalPath}catch{throw Qa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Qa(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new re(j.INVALID_ARGUMENT,l+t+c)}function TP(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class IE{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(bE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wP extends IE{data(){return super.data()}}function bE(t,e){return typeof e=="string"?wE(t,e):e instanceof zh?e._internalPath:e._delegate._internalPath}/**
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
 */function AE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new re(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class IP{convertValue(e,n="none"){switch(xs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ns(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ue()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return ar(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertVectorValue(e){var n,s,r;const i=(r=(s=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||s===void 0?void 0:s.values)===null||r===void 0?void 0:r.map(o=>Ze(o.doubleValue));return new Kh(i)}convertGeoPoint(e){return new ql(Ze(e.latitude),Ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=kl(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(go(e));default:return null}}convertTimestamp(e){const n=ks(e);return new tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ke.fromString(e);Me(Ky(s));const r=new _o(s.get(1),s.get(3)),i=new ie(s.popFirst(5));return r.isEqual(n)||ts(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function bP(t,e,n){let s;return s=t?t.toFirestore(e):e,s}/**
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
 */class Li{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class CE extends IE{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ba(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(bE("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ba extends CE{data(e={}){return super.data(e)}}class RE{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Li(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new ba(this._firestore,this._userDataWriter,s.key,s,new Li(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new re(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(l=>{const c=new ba(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Li(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new ba(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Li(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,h=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),h=o.indexOf(l.doc.key)),{type:AP(l.type),doc:c,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function AP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ue()}}/**
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
 */function SE(t){t=Xn(t,Qt);const e=Xn(t.firestore,Qr);return oP(jl(e),t._key).then(n=>PE(e,t,n))}class Qh extends IP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Yr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Qt(this.firestore,null,n)}}function CP(t){t=Xn(t,ko);const e=Xn(t.firestore,Qr),n=jl(e),s=new Qh(e);return AE(t._query),aP(n,t._query).then(r=>new RE(e,s,t,r))}function RP(t,e){const n=Xn(t.firestore,Qr),s=hP(t),r=bP(t.converter,e);return SP(n,[yP(_P(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Yn.exists(!1))]).then(()=>s)}function Yh(t,...e){var n,s,r;t=En(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||hm(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(hm(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(s=d.error)===null||s===void 0?void 0:s.bind(d),e[o+2]=(r=d.complete)===null||r===void 0?void 0:r.bind(d)}let c,u,h;if(t instanceof Qt)u=Xn(t.firestore,Qr),h=xl(t._key.path),c={next:d=>{e[o]&&e[o](PE(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=Xn(t,ko);u=Xn(d.firestore,Qr),h=d._query;const m=new Qh(u);c={next:g=>{e[o]&&e[o](new RE(u,m,d,g))},error:e[o+1],complete:e[o+2]},AE(t._query)}return function(m,g,A,S){const N=new Hh(S),V=new jh(g,N,A);return m.asyncQueue.enqueueAndForget(async()=>Uh(await Ga(m),V)),()=>{N.eu(),m.asyncQueue.enqueueAndForget(async()=>Bh(await Ga(m),V))}}(jl(u),h,l,c)}function SP(t,e){return function(s,r){const i=new Qn;return s.asyncQueue.enqueueAndForget(async()=>G0(await iP(s),r,i)),i.promise}(jl(t),e)}function PE(t,e,n){const s=n.docs.get(e._key),r=new Qh(t);return new CE(t,r,e._key,s,new Li(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(r){ni=r})(ti),Dn(new vn("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),l=new Qr(new TR(s.getProvider("auth-internal")),new AR(s.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new re(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _o(u.options.projectId,h)}(o,r),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Gt(Rp,"4.7.6",e),Gt(Rp,"4.7.6","esm2017")})();function kE(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function NE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const PP=NE,xE=new ei("auth","Firebase",NE());/**
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
 */const Ya=new Ao("@firebase/auth");function kP(t,...e){Ya.logLevel<=me.WARN&&Ya.warn(`Auth (${ti}): ${t}`,...e)}function Aa(t,...e){Ya.logLevel<=me.ERROR&&Ya.error(`Auth (${ti}): ${t}`,...e)}/**
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
 */function fm(t,...e){throw Xh(t,...e)}function DE(t,...e){return Xh(t,...e)}function OE(t,e,n){const s=Object.assign(Object.assign({},PP()),{[e]:n});return new ei("auth","Firebase",s).create(e,{appName:t.name})}function Ca(t){return OE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xh(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return xE.create(t,...e)}function ke(t,e,...n){if(!t)throw Xh(e,...n)}function Yi(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Aa(e),new Error(e)}function Xa(t,e){t||Yi(e)}function NP(){return dm()==="http:"||dm()==="https:"}function dm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function xP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(NP()||YA()||"connection"in navigator)?navigator.onLine:!0}function DP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class No{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xa(n>e,"Short delay should be less than long delay!"),this.isMobile=yh()||Z_()}get(){return xP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function OP(t,e){Xa(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ME{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const MP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const LP=new No(3e4,6e4);function LE(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Hl(t,e,n,s,r={}){return VE(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const l=Eh(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return QA()||(u.referrerPolicy="no-referrer"),ME.fetch()(FE(t,t.config.apiHost,n,l),u)})}async function VE(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},MP),e);try{const r=new VP(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ca(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ca(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ca(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ca(t,"user-disabled",o);const h=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw OE(t,h,u);fm(t,h)}}catch(r){if(r instanceof is)throw r;fm(t,"network-request-failed",{message:String(r)})}}function FE(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?OP(t.config,r):`${t.config.apiScheme}://${r}`}class VP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(DE(this.auth,"network-request-failed")),LP.get())})}}function ca(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=DE(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function FP(t,e){return Hl(t,"POST","/v1/accounts:delete",e)}async function UE(t,e){return Hl(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Xi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function UP(t,e=!1){const n=En(t),s=await n.getIdToken(e),r=BE(s);ke(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Xi(Lc(r.auth_time)),issuedAtTime:Xi(Lc(r.iat)),expirationTime:Xi(Lc(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Lc(t){return Number(t)*1e3}function BE(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Aa("JWT malformed, contained fewer than 3 sections"),null;try{const r=La(n);return r?JSON.parse(r):(Aa("Failed to decode base64 JWT payload"),null)}catch(r){return Aa("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function pm(t){const e=BE(t);return ke(e,"internal-error"),ke(typeof e.exp<"u","internal-error"),ke(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function xu(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof is&&BP(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function BP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class $P{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Du{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xi(this.lastLoginAt),this.creationTime=Xi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ja(t){var e;const n=t.auth,s=await t.getIdToken(),r=await xu(t,UE(n,{idToken:s}));ke(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?$E(i.providerUserInfo):[],l=qP(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),h=c?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Du(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function jP(t){const e=En(t);await Ja(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qP(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function $E(t){return t.map(e=>{var{providerId:n}=e,s=kE(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function HP(t,e){const n=await VE(t,{},async()=>{const s=Eh({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=FE(t,r,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",ME.fetch()(o,{method:"POST",headers:l,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function WP(t,e){return Hl(t,"POST","/v2/accounts:revokeToken",LE(t,e))}/**
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
 */class Mr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ke(e.idToken,"internal-error"),ke(typeof e.idToken<"u","internal-error"),ke(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ke(e.length!==0,"internal-error");const n=pm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ke(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await HP(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Mr;return s&&(ke(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(ke(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(ke(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mr,this.toJSON())}_performRefresh(){return Yi("not implemented")}}/**
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
 */function ps(t,e){ke(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class vs{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=kE(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $P(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Du(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await xu(this,this.stsTokenManager.getToken(this.auth,e));return ke(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return UP(this,e)}reload(){return jP(this)}_assign(e){this!==e&&(ke(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new vs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ke(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ja(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xi(this.auth.app))return Promise.reject(Ca(this.auth));const e=await this.getIdToken();return await xu(this,FP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,l,c,u,h;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,m=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(l=n.tenantId)!==null&&l!==void 0?l:void 0,N=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,V=(u=n.createdAt)!==null&&u!==void 0?u:void 0,F=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:D,emailVerified:O,isAnonymous:ee,providerData:te,stsTokenManager:C}=n;ke(D&&C,e,"internal-error");const y=Mr.fromJSON(this.name,C);ke(typeof D=="string",e,"internal-error"),ps(d,e.name),ps(m,e.name),ke(typeof O=="boolean",e,"internal-error"),ke(typeof ee=="boolean",e,"internal-error"),ps(g,e.name),ps(A,e.name),ps(S,e.name),ps(N,e.name),ps(V,e.name),ps(F,e.name);const E=new vs({uid:D,auth:e,email:m,emailVerified:O,displayName:d,isAnonymous:ee,photoURL:A,phoneNumber:g,tenantId:S,stsTokenManager:y,createdAt:V,lastLoginAt:F});return te&&Array.isArray(te)&&(E.providerData=te.map(b=>Object.assign({},b))),N&&(E._redirectEventId=N),E}static async _fromIdTokenResponse(e,n,s=!1){const r=new Mr;r.updateFromServerResponse(n);const i=new vs({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Ja(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];ke(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?$E(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),l=new Mr;l.updateFromIdToken(s);const c=new vs({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Du(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const mm=new Map;function Xs(t){Xa(t instanceof Function,"Expected a class definition");let e=mm.get(t);return e?(Xa(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,mm.set(t,e),e)}/**
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
 */class jE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}jE.type="NONE";const gm=jE;/**
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
 */function Vc(t,e,n){return`firebase:${t}:${e}:${n}`}class Lr{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Vc(this.userKey,r.apiKey,i),this.fullPersistenceKey=Vc("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Lr(Xs(gm),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||Xs(gm);const o=Vc(s,e.config.apiKey,e.name);let l=null;for(const u of n)try{const h=await u._get(o);if(h){const d=vs._fromJSON(e,h);u!==i&&(l=d),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Lr(i,e,s):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Lr(i,e,s))}}/**
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
 */function _m(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(QP(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zP(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(XP(e))return"Blackberry";if(JP(e))return"Webos";if(KP(e))return"Safari";if((e.includes("chrome/")||GP(e))&&!e.includes("edge/"))return"Chrome";if(YP(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function zP(t=yn()){return/firefox\//i.test(t)}function KP(t=yn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function GP(t=yn()){return/crios\//i.test(t)}function QP(t=yn()){return/iemobile/i.test(t)}function YP(t=yn()){return/android/i.test(t)}function XP(t=yn()){return/blackberry/i.test(t)}function JP(t=yn()){return/webos/i.test(t)}/**
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
 */function qE(t,e=[]){let n;switch(t){case"Browser":n=_m(yn());break;case"Worker":n=`${_m(yn())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ti}/${s}`}/**
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
 */class ZP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function ek(t,e={}){return Hl(t,"GET","/v2/passwordPolicy",LE(t,e))}/**
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
 */const tk=6;class nk{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:tk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class sk{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ym(this),this.idTokenSubscription=new ym(this),this.beforeStateQueue=new ZP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xs(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Lr.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await UE(this,{idToken:e}),s=await vs._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(xi(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ke(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ja(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=DP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xi(this.app))return Promise.reject(Ca(this));const n=e?En(e):null;return n&&ke(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ke(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xi(this.app)?Promise.reject(Ca(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xi(this.app)?Promise.reject(Ca(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xs(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ek(this),n=new nk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ei("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await WP(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xs(e)||this._popupRedirectResolver;ke(n,this,"argument-error"),this.redirectPersistenceManager=await Lr.create(this,[Xs(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ke(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ke(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&kP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function rk(t){return En(t)}class ym{constructor(e){this.auth=e,this.observer=null,this.addObserver=oC(n=>this.observer=n)}get next(){return ke(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ik(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Xs);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}new No(3e4,6e4);/**
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
 */new No(2e3,1e4);/**
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
 */new No(3e4,6e4);/**
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
 */new No(5e3,15e3);var Em="@firebase/auth",vm="1.8.2";/**
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
 */class ok{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ke(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ak(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function lk(t){Dn(new vn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=s.options;ke(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qE(t)},u=new sk(s,r,i,c);return ik(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Dn(new vn("auth-internal",e=>{const n=rk(e.getProvider("auth").getImmediate());return(s=>new ok(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(Em,vm,ak(t)),Gt(Em,vm,"esm2017")}/**
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
 */const ck=5*60;zA("authIdTokenMaxAge");lk("Browser");/**
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
 */const uk=new Map,hk={activated:!1,tokenObservers:[]};function Tn(t){return uk.get(t)||Object.assign({},hk)}const Tm={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class fk{constructor(e,n,s,r,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=r,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=r,r>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new fo,this.pending.promise.catch(n=>{}),await dk(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new fo,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function dk(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const pk={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Za=new ei("appCheck","AppCheck",pk);function HE(t){if(!Tn(t).activated)throw Za.create("use-before-activation",{appName:t.name})}/**
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
 */const mk="firebase-app-check-database",gk=1,Ou="firebase-app-check-store";let ua=null;function _k(){return ua||(ua=new Promise((t,e)=>{try{const n=indexedDB.open(mk,gk);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var r;e(Za.create("storage-open",{originalErrorMessage:(r=s.target.error)===null||r===void 0?void 0:r.message}))},n.onupgradeneeded=s=>{const r=s.target.result;switch(s.oldVersion){case 0:r.createObjectStore(Ou,{keyPath:"compositeKey"})}}}catch(n){e(Za.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),ua)}function yk(t,e){return Ek(vk(t),e)}async function Ek(t,e){const s=(await _k()).transaction(Ou,"readwrite"),i=s.objectStore(Ou).put({compositeKey:t,value:e});return new Promise((o,l)=>{i.onsuccess=c=>{o()},s.onerror=c=>{var u;l(Za.create("storage-set",{originalErrorMessage:(u=c.target.error)===null||u===void 0?void 0:u.message}))}})}function vk(t){return`${t.options.appId}-${t.name}`}/**
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
 */const Mu=new Ao("@firebase/app-check");function wm(t,e){return ey()?yk(t,e).catch(n=>{Mu.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const Tk={error:"UNKNOWN_ERROR"};function wk(t){return Al.encodeString(JSON.stringify(t),!1)}async function Lu(t,e=!1){const n=t.app;HE(n);const s=Tn(n);let r=s.token,i;if(r&&!Vi(r)&&(s.token=void 0,r=void 0),!r){const c=await s.cachedTokenPromise;c&&(Vi(c)?r=c:await wm(n,void 0))}if(!e&&r&&Vi(r))return{token:r.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),r=await Tn(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?Mu.warn(c.message):Mu.error(c),i=c}let l;return r?i?Vi(r)?l={token:r.token,internalError:i}:l=bm(i):(l={token:r.token},s.token=r,await wm(n,r)):l=bm(i),o&&Ck(n,l),l}async function Ik(t){const e=t.app;HE(e);const{provider:n}=Tn(e);{const{token:s}=await n.getToken();return{token:s}}}function bk(t,e,n,s){const{app:r}=t,i=Tn(r),o={next:n,error:s,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&Vi(i.token)){const l=i.token;Promise.resolve().then(()=>{n({token:l.token}),Im(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>Im(t))}function WE(t,e){const n=Tn(t),s=n.tokenObservers.filter(r=>r.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function Im(t){const{app:e}=t,n=Tn(e);let s=n.tokenRefresher;s||(s=Ak(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function Ak(t){const{app:e}=t;return new fk(async()=>{const n=Tn(e);let s;if(n.token?s=await Lu(t,!0):s=await Lu(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=Tn(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const r=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,r),Math.max(0,s-Date.now())}else return 0},Tm.RETRIAL_MIN_WAIT,Tm.RETRIAL_MAX_WAIT)}function Ck(t,e){const n=Tn(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function Vi(t){return t.expireTimeMillis-Date.now()>0}function bm(t){return{token:wk(Tk),error:t}}/**
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
 */class Rk{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Tn(this.app);for(const n of e)WE(this.app,n.next);return Promise.resolve()}}function Sk(t,e){return new Rk(t,e)}function Pk(t){return{getToken:e=>Lu(t,e),getLimitedUseToken:()=>Ik(t),addTokenListener:e=>bk(t,"INTERNAL",e),removeTokenListener:e=>WE(t.app,e)}}const kk="@firebase/app-check",Nk="0.8.11",xk="app-check",Am="app-check-internal";function Dk(){Dn(new vn(xk,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return Sk(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Am).initialize()})),Dn(new vn(Am,t=>{const e=t.getProvider("app-check").getImmediate();return Pk(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Gt(kk,Nk)}Dk();var Ok="firebase",Mk="11.2.0";/**
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
 */Gt(Ok,Mk,"app");const zE=Symbol("firebaseApp");function KE(t){return mh()&&pn(zE,null)||iy(t)}const Rn=()=>{};function Jh(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function Lk(t,e,n){const s=(""+e).split("."),r=s.pop(),i=s.reduce((o,l)=>o&&o[l],t);if(i!=null)return Array.isArray(i)?i.splice(Number(r),1,n):i[r]=n}function hr(t){return!!t&&typeof t=="object"}const Vk=Object.prototype;function Fk(t){return hr(t)&&Object.getPrototypeOf(t)===Vk}function Zh(t){return hr(t)&&t.type==="document"}function Uk(t){return hr(t)&&t.type==="collection"}function Bk(t){return Zh(t)||Uk(t)}function $k(t){return hr(t)&&t.type==="query"}function jk(t){return hr(t)&&"ref"in t}function qk(t){return hr(t)&&typeof t.bucket=="string"}function Hk(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const Wk=Symbol.for("v-scx");function zk(){return!!pn(Wk,0)}var Cm={};const Rm="@firebase/database",Sm="1.0.11";/**
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
 */let GE="";function Kk(t){GE=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),gt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:po(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return os(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Gk(e)}}catch{}return new Qk},Js=QE("localStorage"),Yk=QE("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=new Ao("@firebase/database"),Xk=function(){let t=1;return function(){return t++}}(),YE=function(t){const e=uC(t),n=new iC;n.update(e);const s=n.digest();return Al.encodeByteArray(s)},xo=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=xo.apply(null,s):typeof s=="object"?e+=gt(s):e+=s,e+=" "}return e};let Ji=null,Pm=!0;const Jk=function(t,e){Q(!0,"Can't turn on custom loggers persistently."),Vr.logLevel=me.VERBOSE,Ji=Vr.log.bind(Vr)},Nt=function(...t){if(Pm===!0&&(Pm=!1,Ji===null&&Yk.get("logging_enabled")===!0&&Jk()),Ji){const e=xo.apply(null,t);Ji(e)}},Do=function(t){return function(...e){Nt(t,...e)}},Vu=function(...t){const e="FIREBASE INTERNAL ERROR: "+xo(...t);Vr.error(e)},nr=function(...t){const e=`FIREBASE FATAL ERROR: ${xo(...t)}`;throw Vr.error(e),new Error(e)},Yt=function(...t){const e="FIREBASE WARNING: "+xo(...t);Vr.warn(e)},Zk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Yt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},XE=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},eN=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Xr="[MIN_NAME]",sr="[MAX_NAME]",oi=function(t,e){if(t===e)return 0;if(t===Xr||e===sr)return-1;if(e===Xr||t===sr)return 1;{const n=km(t),s=km(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},tN=function(t,e){return t===e?0:t<e?-1:1},Ci=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+gt(e))},ef=function(t){if(typeof t!="object"||t===null)return gt(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=gt(e[s]),n+=":",n+=ef(t[e[s]]);return n+="}",n},JE=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let r=0;r<n;r+=e)r+e>n?s.push(t.substring(r,n)):s.push(t.substring(r,r+e));return s};function on(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ZE=function(t){Q(!XE(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let r,i,o,l,c;t===0?(i=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),i=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-s-n))));const u=[];for(c=n;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(r?1:0),u.reverse();const h=u.join("");let d="";for(c=0;c<64;c+=8){let m=parseInt(h.substr(c,8),2).toString(16);m.length===1&&(m="0"+m),d=d+m}return d.toLowerCase()},nN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},sN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},rN=new RegExp("^-?(0*)\\d{1,10}$"),iN=-2147483648,oN=2147483647,km=function(t){if(rN.test(t)){const e=Number(t);if(e>=iN&&e<=oN)return e}return null},Oo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Yt("Exception was thrown by user callback.",n),e},Math.floor(0))}},aN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Zi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class lN{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Yt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Nt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Yt(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf="5",ev="v",tv="s",nv="r",sv="f",rv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,iv="ls",ov="p",Fu="ac",av="websocket",lv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e,n,s,r,i=!1,o="",l=!1,c=!1){this.secure=n,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Js.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Js.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function hN(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function cv(t,e,n){Q(typeof e=="string","typeof type must == string"),Q(typeof n=="object","typeof params must == object");let s;if(e===av)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===lv)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);hN(t)&&(n.ns=t.namespace);const r=[];return on(n,(i,o)=>{r.push(i+"="+o)}),s+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(){this.counters_={}}incrementCounter(e,n=1){os(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return FA(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc={},Uc={};function nf(t){const e=t.toString();return Fc[e]||(Fc[e]=new fN),Fc[e]}function dN(t,e){const n=t.toString();return Uc[n]||(Uc[n]=e()),Uc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&Oo(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm="start",mN="close",gN="pLPCommand",_N="pRTLPCB",uv="id",hv="pw",fv="ser",yN="cb",EN="seg",vN="ts",TN="d",wN="dframe",dv=1870,pv=30,IN=dv-pv,bN=25e3,AN=3e4;class Cr{constructor(e,n,s,r,i,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Do(e),this.stats_=nf(n),this.urlFn=c=>(this.appCheckToken&&(c[Fu]=this.appCheckToken),cv(n,lv,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new pN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(AN)),eN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new sf((...i)=>{const[o,l,c,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Nm)this.id=l,this.password=c;else if(o===mN)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,l]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Nm]="t",s[fv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[yN]=this.scriptTagHolder.uniqueCallbackIdentifier),s[ev]=tf,this.transportSessionId&&(s[tv]=this.transportSessionId),this.lastSessionId&&(s[iv]=this.lastSessionId),this.applicationId&&(s[ov]=this.applicationId),this.appCheckToken&&(s[Fu]=this.appCheckToken),typeof location<"u"&&location.hostname&&rv.test(location.hostname)&&(s[nv]=sv);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Cr.forceAllow_=!0}static forceDisallow(){Cr.forceDisallow_=!0}static isAvailable(){return Cr.forceAllow_?!0:!Cr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!nN()&&!sN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=gt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Y_(n),r=JE(s,IN);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[wN]="t",s[uv]=e,s[hv]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=gt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class sf{constructor(e,n,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Xk(),window[gN+this.uniqueCallbackIdentifier]=e,window[_N+this.uniqueCallbackIdentifier]=n,this.myIFrame=sf.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Nt("frame writing exception"),l.stack&&Nt(l.stack),Nt(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Nt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[uv]=this.myID,e[hv]=this.myPW,e[fv]=this.currentSerial;let n=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+pv+s.length<=dv;){const o=this.pendingSegs.shift();s=s+"&"+EN+r+"="+o.seg+"&"+vN+r+"="+o.ts+"&"+TN+r+"="+o.d,r++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(s,Math.floor(bN)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Nt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CN=16384,RN=45e3;let el=null;typeof MozWebSocket<"u"?el=MozWebSocket:typeof WebSocket<"u"&&(el=WebSocket);class Sn{constructor(e,n,s,r,i,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Do(this.connId),this.stats_=nf(n),this.connURL=Sn.connectionURL_(n,o,l,r,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,r,i){const o={};return o[ev]=tf,typeof location<"u"&&location.hostname&&rv.test(location.hostname)&&(o[nv]=sv),n&&(o[tv]=n),s&&(o[iv]=s),r&&(o[Fu]=r),i&&(o[ov]=i),cv(e,av,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Js.set("previous_websocket_failure",!0);try{let s;XA(),this.mySock=new el(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Sn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&el!==null&&!Sn.forceDisallow_}static previouslyFailed(){return Js.isInMemoryStorage||Js.get("previous_websocket_failure")===!0}markConnectionHealthy(){Js.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=po(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Q(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=gt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=JE(n,CN);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(RN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Sn.responsesRequiredToBeHealthy=2;Sn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{static get ALL_TRANSPORTS(){return[Cr,Sn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Sn.isAvailable();let s=n&&!Sn.previouslyFailed();if(e.webSocketOnly&&(n||Yt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Sn];else{const r=this.transports_=[];for(const i of To.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);To.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}To.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN=6e4,PN=5e3,kN=10*1024,NN=100*1024,Bc="t",xm="d",xN="s",Dm="r",DN="e",Om="o",Mm="a",Lm="n",Vm="p",ON="h";class MN{constructor(e,n,s,r,i,o,l,c,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Do("c:"+this.id+":"),this.transportManager_=new To(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Zi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>NN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>kN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Bc in e){const n=e[Bc];n===Mm?this.upgradeIfSecondaryHealthy_():n===Dm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Om&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ci("t",e),s=Ci("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Vm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Mm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Lm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ci("t",e),s=Ci("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ci(Bc,e);if(xm in e){const s=e[xm];if(n===ON){const r=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===Lm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===xN?this.onConnectionShutdown_(s):n===Dm?this.onReset_(s):n===DN?Vu("Server Error: "+s):n===Om?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Vu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),tf!==s&&Yt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Zi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(SN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Zi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(PN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Vm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Js.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{put(e,n,s,r){}merge(e,n,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e){this.allowedEvents_=e,this.listeners_={},Q(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const r=this.getInitialEvent(e);r&&n.apply(s,r)}off(e,n,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===n&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){Q(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl extends gv{static getInstance(){return new tl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!yh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return Q(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm=32,Um=768;class ze{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ve(){return new ze("")}function Ie(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Os(t){return t.pieces_.length-t.pieceNum_}function He(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ze(t.pieces_,e)}function _v(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function LN(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function yv(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Ev(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ze(e,0)}function ut(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ze)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&n.push(s[r])}return new ze(n,0)}function Ee(t){return t.pieceNum_>=t.pieces_.length}function nn(t,e){const n=Ie(t),s=Ie(e);if(n===null)return e;if(n===s)return nn(He(t),He(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function vv(t,e){if(Os(t)!==Os(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function hn(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Os(t)>Os(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class VN{constructor(e,n){this.errorPrefix_=n,this.parts_=yv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Rl(this.parts_[s]);Tv(this)}}function FN(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Rl(e),Tv(t)}function UN(t){const e=t.parts_.pop();t.byteLength_-=Rl(e),t.parts_.length>0&&(t.byteLength_-=1)}function Tv(t){if(t.byteLength_>Um)throw new Error(t.errorPrefix_+"has a key path longer than "+Um+" bytes ("+t.byteLength_+").");if(t.parts_.length>Fm)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Fm+") or object contains a cycle "+Gs(t))}function Gs(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf extends gv{static getInstance(){return new rf}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return Q(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=1e3,BN=60*5*1e3,Bm=30*1e3,$N=1.3,jN=3e4,qN="server_kill",$m=3;class Jn extends mv{constructor(e,n,s,r,i,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=Jn.nextPersistentConnectionId_++,this.log_=Do("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ri,this.maxReconnectDelay_=BN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");rf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&tl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const r=++this.requestNumber_,i={r,a:e,b:n};this.log_(gt(i)),Q(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const n=new fo,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,s,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),Q(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Q(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const l={onComplete:r,hashFn:n,query:e,tag:s};this.listens.get(o).set(i,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,l=>{const c=l.d,u=l.s;Jn.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&os(e,"w")){const s=jr(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Yt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||rC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Bm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=sC(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),Q(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,n)}sendUnlisten_(e,n,s,r){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";r&&(i.q=s,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,r){const i={p:n,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,s,r){this.putInternal("p",e,n,s,r)}merge(e,n,s,r){this.putInternal("m",e,n,s,r)}putInternal(e,n,s,r,i){this.initConnection_();const o={p:n,d:s};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+gt(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Vu("Unrecognized action received from server: "+gt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Q(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ri,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ri,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>jN&&(this.reconnectDelay_=Ri),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*$N)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Jn.nextConnectionId_++,i=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},u=function(d){Q(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:c,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,m]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Nt("getToken() completed but was canceled"):(Nt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=m&&m.token,l=new MN(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{Yt(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(qN)},i))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Yt(d),c())}}}interrupt(e){Nt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Nt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],gp(this.interruptReasons_)&&(this.reconnectDelay_=Ri,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(i=>ef(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const s=new ze(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(n),i.delete(n),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,n){Nt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=$m&&(this.reconnectDelay_=Bm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Nt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=$m&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+GE.replace(/\./g,"-")]=1,yh()?e["framework.cordova"]=1:Z_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=tl.getInstance().currentlyOnline();return gp(this.interruptReasons_)&&e}}Jn.nextPersistentConnectionId_=0;Jn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new be(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new be(Xr,e),r=new be(Xr,n);return this.compare(s,r)!==0}minPost(){return be.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ha;class wv extends Wl{static get __EMPTY_NODE(){return ha}static set __EMPTY_NODE(e){ha=e}compare(e,n){return oi(e.name,n.name)}isDefinedOn(e){throw Zr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return be.MIN}maxPost(){return new be(sr,ha)}makePost(e,n){return Q(typeof e=="string","KeyIndex indexValue must always be a string."),new be(e,ha)}toString(){return".key"}}const Fr=new wv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,n,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ct{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??ct.RED,this.left=r??jt.EMPTY_NODE,this.right=i??jt.EMPTY_NODE}copy(e,n,s,r,i){return new ct(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return jt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,r;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return jt.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ct.RED=!0;ct.BLACK=!1;class HN{copy(e,n,s,r,i){return this}insert(e,n,s){return new ct(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class jt{constructor(e,n=jt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new jt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ct.BLACK,null,null))}remove(e){return new jt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ct.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,r=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new fa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new fa(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new fa(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new fa(this.root_,null,this.comparator_,!0,e)}}jt.EMPTY_NODE=new HN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WN(t,e){return oi(t.name,e.name)}function of(t,e){return oi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uu;function zN(t){Uu=t}const Iv=function(t){return typeof t=="number"?"number:"+ZE(t):"string:"+t},bv=function(t){if(t.isLeafNode()){const e=t.val();Q(typeof e=="string"||typeof e=="number"||typeof e=="object"&&os(e,".sv"),"Priority must be a string or number.")}else Q(t===Uu||t.isEmpty(),"priority of unexpected type.");Q(t===Uu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jm;class at{static set __childrenNodeConstructor(e){jm=e}static get __childrenNodeConstructor(){return jm}constructor(e,n=at.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,Q(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),bv(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new at(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:at.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ee(e)?this:Ie(e)===".priority"?this.priorityNode_:at.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:at.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Ie(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(Q(s!==".priority"||Os(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,at.__childrenNodeConstructor.EMPTY_NODE.updateChild(He(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Iv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ZE(this.value_):e+=this.value_,this.lazyHash_=YE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===at.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof at.__childrenNodeConstructor?-1:(Q(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,r=at.VALUE_TYPE_ORDER.indexOf(n),i=at.VALUE_TYPE_ORDER.indexOf(s);return Q(r>=0,"Unknown leaf type: "+n),Q(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}at.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Av,Cv;function KN(t){Av=t}function GN(t){Cv=t}class QN extends Wl{compare(e,n){const s=e.node.getPriority(),r=n.node.getPriority(),i=s.compareTo(r);return i===0?oi(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return be.MIN}maxPost(){return new be(sr,new at("[PRIORITY-POST]",Cv))}makePost(e,n){const s=Av(e);return new be(n,new at("[PRIORITY-POST]",s))}toString(){return".priority"}}const Dt=new QN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YN=Math.log(2);class XN{constructor(e){const n=i=>parseInt(Math.log(i)/YN,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const nl=function(t,e,n,s){t.sort(e);const r=function(c,u){const h=u-c;let d,m;if(h===0)return null;if(h===1)return d=t[c],m=n?n(d):d,new ct(m,d.node,ct.BLACK,null,null);{const g=parseInt(h/2,10)+c,A=r(c,g),S=r(g+1,u);return d=t[g],m=n?n(d):d,new ct(m,d.node,ct.BLACK,A,S)}},i=function(c){let u=null,h=null,d=t.length;const m=function(A,S){const N=d-A,V=d;d-=A;const F=r(N+1,V),D=t[N],O=n?n(D):D;g(new ct(O,D.node,S,null,F))},g=function(A){u?(u.left=A,u=A):(h=A,u=A)};for(let A=0;A<c.count;++A){const S=c.nextBitIsOne(),N=Math.pow(2,c.count-(A+1));S?m(N,ct.BLACK):(m(N,ct.BLACK),m(N,ct.RED))}return h},o=new XN(t.length),l=i(o);return new jt(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $c;const Si={};class Gn{static get Default(){return Q(Dt,"ChildrenNode.ts has not been loaded"),$c=$c||new Gn({".priority":Si},{".priority":Dt}),$c}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=jr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof jt?n:null}hasIndex(e){return os(this.indexSet_,e.toString())}addIndex(e,n){Q(e!==Fr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=n.getIterator(be.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),s.push(o),o=i.getNext();let l;r?l=nl(s,e.getCompare()):l=Si;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const h=Object.assign({},this.indexes_);return h[c]=l,new Gn(h,u)}addToIndexes(e,n){const s=Va(this.indexes_,(r,i)=>{const o=jr(this.indexSet_,i);if(Q(o,"Missing index implementation for "+i),r===Si)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(be.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&l.push(u),u=c.getNext();return l.push(e),nl(l,o.getCompare())}else return Si;else{const l=n.get(e.name);let c=r;return l&&(c=c.remove(new be(e.name,l))),c.insert(e,e.node)}});return new Gn(s,this.indexSet_)}removeFromIndexes(e,n){const s=Va(this.indexes_,r=>{if(r===Si)return r;{const i=n.get(e.name);return i?r.remove(new be(e.name,i)):r}});return new Gn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pi;class Oe{static get EMPTY_NODE(){return Pi||(Pi=new Oe(new jt(of),null,Gn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&bv(this.priorityNode_),this.children_.isEmpty()&&Q(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Pi}updatePriority(e){return this.children_.isEmpty()?this:new Oe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Pi:n}}getChild(e){const n=Ie(e);return n===null?this:this.getImmediateChild(n).getChild(He(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(Q(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new be(e,n);let r,i;n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(s,this.children_));const o=r.isEmpty()?Pi:this.priorityNode_;return new Oe(r,o,i)}}updateChild(e,n){const s=Ie(e);if(s===null)return n;{Q(Ie(e)!==".priority"||Os(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(He(e),n);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,r=0,i=!0;if(this.forEachChild(Dt,(o,l)=>{n[o]=l.val(e),s++,i&&Oe.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Iv(this.getPriority().val())+":"),this.forEachChild(Dt,(n,s)=>{const r=s.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":YE(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new be(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new be(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new be(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,be.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,be.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Mo?-1:0}withIndex(e){if(e===Fr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Oe(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Fr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Dt),r=n.getIterator(Dt);let i=s.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=s.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Fr?null:this.indexMap_.get(e.toString())}}Oe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class JN extends Oe{constructor(){super(new jt(of),Oe.EMPTY_NODE,Gn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Oe.EMPTY_NODE}isEmpty(){return!1}}const Mo=new JN;Object.defineProperties(be,{MIN:{value:new be(Xr,Oe.EMPTY_NODE)},MAX:{value:new be(sr,Mo)}});wv.__EMPTY_NODE=Oe.EMPTY_NODE;at.__childrenNodeConstructor=Oe;zN(Mo);GN(Mo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZN=!0;function xt(t,e=null){if(t===null)return Oe.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),Q(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new at(n,xt(e))}if(!(t instanceof Array)&&ZN){const n=[];let s=!1;if(on(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=xt(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new be(o,c)))}}),n.length===0)return Oe.EMPTY_NODE;const i=nl(n,WN,o=>o.name,of);if(s){const o=nl(n,Dt.getCompare());return new Oe(i,xt(e),new Gn({".priority":o},{".priority":Dt}))}else return new Oe(i,xt(e),Gn.Default)}else{let n=Oe.EMPTY_NODE;return on(t,(s,r)=>{if(os(t,s)&&s.substring(0,1)!=="."){const i=xt(r);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(s,i))}}),n.updatePriority(xt(e))}}KN(xt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex extends Wl{constructor(e){super(),this.indexPath_=e,Q(!Ee(e)&&Ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),r=this.extractChild(n.node),i=s.compareTo(r);return i===0?oi(e.name,n.name):i}makePost(e,n){const s=xt(e),r=Oe.EMPTY_NODE.updateChild(this.indexPath_,s);return new be(n,r)}maxPost(){const e=Oe.EMPTY_NODE.updateChild(this.indexPath_,Mo);return new be(sr,e)}toString(){return yv(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx extends Wl{compare(e,n){const s=e.node.compareTo(n.node);return s===0?oi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return be.MIN}maxPost(){return be.MAX}makePost(e,n){const s=xt(e);return new be(n,s)}toString(){return".value"}}const nx=new tx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sx(t){return{type:"value",snapshotNode:t}}function rx(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ix(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function qm(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function ox(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Dt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return Q(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Q(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Xr}hasEnd(){return this.endSet_}getIndexEndValue(){return Q(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Q(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:sr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return Q(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Dt}copy(){const e=new af;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Hm(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Dt?n="$priority":t.index_===nx?n="$value":t.index_===Fr?n="$key":(Q(t.index_ instanceof ex,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=gt(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=gt(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+gt(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=gt(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+gt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Wm(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Dt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl extends mv{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(Q(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=Do("p:rest:"),this.listens_={}}listen(e,n,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=sl.getListenId_(e,s),l={};this.listens_[o]=l;const c=Hm(e._queryParams);this.restRequest_(i+".json",c,(u,h)=>{let d=h;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(i,d,!1,s),jr(this.listens_,o)===l){let m;u?u===401?m="permission_denied":m="rest_error:"+u:m="ok",r(m,null)}})}unlisten(e,n){const s=sl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Hm(e._queryParams),s=e._path.toString(),r=new fo;return this.restRequest_(s+".json",n,(i,o)=>{let l=o;i===404&&(l=null,i=null),i===null?(this.onDataUpdate_(s,l,!1,null),r.resolve(l)):r.reject(new Error(l))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(n.auth=r.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Eh(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=po(l.responseText)}catch{Yt("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&Yt("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(){this.rootNode_=Oe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(){return{value:null,children:new Map}}function Rv(t,e,n){if(Ee(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=Ie(e);t.children.has(s)||t.children.set(s,rl());const r=t.children.get(s);e=He(e),Rv(r,e,n)}}function Bu(t,e,n){t.value!==null?n(e,t.value):lx(t,(s,r)=>{const i=new ze(e.toString()+"/"+s);Bu(r,i,n)})}function lx(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&on(this.last_,(s,r)=>{n[s]=n[s]-r}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm=10*1e3,ux=30*1e3,hx=5*60*1e3;class fx{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new cx(e);const s=zm+(ux-zm)*Math.random();Zi(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;on(e,(r,i)=>{i>0&&os(this.statsToReport_,r)&&(n[r]=i,s=!0)}),s&&this.server_.reportStats(n),Zi(this.reportStats_.bind(this),Math.floor(Math.random()*2*hx))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Pn||(Pn={}));function Sv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Pv(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function kv(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Pn.ACK_USER_WRITE,this.source=Sv()}operationForChild(e){if(Ee(this.path)){if(this.affectedTree.value!=null)return Q(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ze(e));return new il(Ve(),n,this.revert)}}else return Q(Ie(this.path)===e,"operationForChild called for unrelated child."),new il(He(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Pn.OVERWRITE}operationForChild(e){return Ee(this.path)?new rr(this.source,Ve(),this.snap.getImmediateChild(e)):new rr(this.source,He(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Pn.MERGE}operationForChild(e){if(Ee(this.path)){const n=this.children.subtree(new ze(e));return n.isEmpty()?null:n.value?new rr(this.source,Ve(),n.value):new wo(this.source,Ve(),n)}else return Q(Ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new wo(this.source,He(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ee(e))return this.isFullyInitialized()&&!this.filtered_;const n=Ie(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function dx(t,e,n,s){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(ox(o.childName,o.snapshotNode))}),ki(t,r,"child_removed",e,s,n),ki(t,r,"child_added",e,s,n),ki(t,r,"child_moved",i,s,n),ki(t,r,"child_changed",e,s,n),ki(t,r,"value",e,s,n),r}function ki(t,e,n,s,r,i){const o=s.filter(l=>l.type===n);o.sort((l,c)=>mx(t,l,c)),o.forEach(l=>{const c=px(t,l,i);r.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(c,t.query_))})})}function px(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function mx(t,e,n){if(e.childName==null||n.childName==null)throw Zr("Should only compare child_ events.");const s=new be(e.childName,e.snapshotNode),r=new be(n.childName,n.snapshotNode);return t.index_.compare(s,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(t,e){return{eventCache:t,serverCache:e}}function eo(t,e,n,s){return Nv(new lf(e,n,s),t.serverCache)}function xv(t,e,n,s){return Nv(t.eventCache,new lf(e,n,s))}function $u(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ir(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jc;const gx=()=>(jc||(jc=new jt(tN)),jc);class qe{static fromObject(e){let n=new qe(null);return on(e,(s,r)=>{n=n.set(new ze(s),r)}),n}constructor(e,n=gx()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ve(),value:this.value};if(Ee(e))return null;{const s=Ie(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(He(e),n);return i!=null?{path:ut(new ze(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ee(e))return this;{const n=Ie(e),s=this.children.get(n);return s!==null?s.subtree(He(e)):new qe(null)}}set(e,n){if(Ee(e))return new qe(n,this.children);{const s=Ie(e),i=(this.children.get(s)||new qe(null)).set(He(e),n),o=this.children.insert(s,i);return new qe(this.value,o)}}remove(e){if(Ee(e))return this.children.isEmpty()?new qe(null):new qe(null,this.children);{const n=Ie(e),s=this.children.get(n);if(s){const r=s.remove(He(e));let i;return r.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,r),this.value===null&&i.isEmpty()?new qe(null):new qe(this.value,i)}else return this}}get(e){if(Ee(e))return this.value;{const n=Ie(e),s=this.children.get(n);return s?s.get(He(e)):null}}setTree(e,n){if(Ee(e))return n;{const s=Ie(e),i=(this.children.get(s)||new qe(null)).setTree(He(e),n);let o;return i.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,i),new qe(this.value,o)}}fold(e){return this.fold_(Ve(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(ut(e,r),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Ve(),n)}findOnPath_(e,n,s){const r=this.value?s(n,this.value):!1;if(r)return r;if(Ee(e))return null;{const i=Ie(e),o=this.children.get(i);return o?o.findOnPath_(He(e),ut(n,i),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ve(),n)}foreachOnPath_(e,n,s){if(Ee(e))return this;{this.value&&s(n,this.value);const r=Ie(e),i=this.children.get(r);return i?i.foreachOnPath_(He(e),ut(n,r),s):new qe(null)}}foreach(e){this.foreach_(Ve(),e)}foreach_(e,n){this.children.inorderTraversal((s,r)=>{r.foreach_(ut(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.writeTree_=e}static empty(){return new mn(new qe(null))}}function to(t,e,n){if(Ee(e))return new mn(new qe(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const o=nn(r,e);return i=i.updateChild(o,n),new mn(t.writeTree_.set(r,i))}else{const r=new qe(n),i=t.writeTree_.setTree(e,r);return new mn(i)}}}function Km(t,e,n){let s=t;return on(n,(r,i)=>{s=to(s,ut(e,r),i)}),s}function Gm(t,e){if(Ee(e))return mn.empty();{const n=t.writeTree_.setTree(e,new qe(null));return new mn(n)}}function ju(t,e){return fr(t,e)!=null}function fr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(nn(n.path,e)):null}function Qm(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Dt,(s,r)=>{e.push(new be(s,r))}):t.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new be(s,r.value))}),e}function Rs(t,e){if(Ee(e))return t;{const n=fr(t,e);return n!=null?new mn(new qe(n)):new mn(t.writeTree_.subtree(e))}}function qu(t){return t.writeTree_.isEmpty()}function Jr(t,e){return Dv(Ve(),t.writeTree_,e)}function Dv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(Q(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):n=Dv(ut(t,r),i,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ut(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(t,e){return Uv(e,t)}function _x(t,e,n,s,r){Q(s>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:r}),r&&(t.visibleWrites=to(t.visibleWrites,e,n)),t.lastWriteId=s}function yx(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Ex(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);Q(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let r=s.visible,i=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&vx(l,s.path)?r=!1:hn(s.path,l.path)&&(i=!0)),o--}if(r){if(i)return Tx(t),!0;if(s.snap)t.visibleWrites=Gm(t.visibleWrites,s.path);else{const l=s.children;on(l,c=>{t.visibleWrites=Gm(t.visibleWrites,ut(s.path,c))})}return!0}else return!1}function vx(t,e){if(t.snap)return hn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&hn(ut(t.path,n),e))return!0;return!1}function Tx(t){t.visibleWrites=Mv(t.allWrites,wx,Ve()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function wx(t){return t.visible}function Mv(t,e,n){let s=mn.empty();for(let r=0;r<t.length;++r){const i=t[r];if(e(i)){const o=i.path;let l;if(i.snap)hn(n,o)?(l=nn(n,o),s=to(s,l,i.snap)):hn(o,n)&&(l=nn(o,n),s=to(s,Ve(),i.snap.getChild(l)));else if(i.children){if(hn(n,o))l=nn(n,o),s=Km(s,l,i.children);else if(hn(o,n))if(l=nn(o,n),Ee(l))s=Km(s,Ve(),i.children);else{const c=jr(i.children,Ie(l));if(c){const u=c.getChild(He(l));s=to(s,Ve(),u)}}}else throw Zr("WriteRecord should have .snap or .children")}}return s}function Lv(t,e,n,s,r){if(!s&&!r){const i=fr(t.visibleWrites,e);if(i!=null)return i;{const o=Rs(t.visibleWrites,e);if(qu(o))return n;if(n==null&&!ju(o,Ve()))return null;{const l=n||Oe.EMPTY_NODE;return Jr(o,l)}}}else{const i=Rs(t.visibleWrites,e);if(!r&&qu(i))return n;if(!r&&n==null&&!ju(i,Ve()))return null;{const o=function(u){return(u.visible||r)&&(!s||!~s.indexOf(u.writeId))&&(hn(u.path,e)||hn(e,u.path))},l=Mv(t.allWrites,o,e),c=n||Oe.EMPTY_NODE;return Jr(l,c)}}}function Ix(t,e,n){let s=Oe.EMPTY_NODE;const r=fr(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Dt,(i,o)=>{s=s.updateImmediateChild(i,o)}),s;if(n){const i=Rs(t.visibleWrites,e);return n.forEachChild(Dt,(o,l)=>{const c=Jr(Rs(i,new ze(o)),l);s=s.updateImmediateChild(o,c)}),Qm(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const i=Rs(t.visibleWrites,e);return Qm(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function bx(t,e,n,s,r){Q(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=ut(e,n);if(ju(t.visibleWrites,i))return null;{const o=Rs(t.visibleWrites,i);return qu(o)?r.getChild(n):Jr(o,r.getChild(n))}}function Ax(t,e,n,s){const r=ut(e,n),i=fr(t.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(n)){const o=Rs(t.visibleWrites,r);return Jr(o,s.getNode().getImmediateChild(n))}else return null}function Cx(t,e){return fr(t.visibleWrites,e)}function Rx(t,e,n,s,r,i,o){let l;const c=Rs(t.visibleWrites,e),u=fr(c,Ve());if(u!=null)l=u;else if(n!=null)l=Jr(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],d=o.getCompare(),m=i?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let g=m.getNext();for(;g&&h.length<r;)d(g,s)!==0&&h.push(g),g=m.getNext();return h}else return[]}function Sx(){return{visibleWrites:mn.empty(),allWrites:[],lastWriteId:-1}}function Hu(t,e,n,s){return Lv(t.writeTree,t.treePath,e,n,s)}function Vv(t,e){return Ix(t.writeTree,t.treePath,e)}function Ym(t,e,n,s){return bx(t.writeTree,t.treePath,e,n,s)}function ol(t,e){return Cx(t.writeTree,ut(t.treePath,e))}function Px(t,e,n,s,r,i){return Rx(t.writeTree,t.treePath,e,n,s,r,i)}function cf(t,e,n){return Ax(t.writeTree,t.treePath,e,n)}function Fv(t,e){return Uv(ut(t.treePath,e),t.writeTree)}function Uv(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kx{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;Q(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),Q(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(s,qm(s,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(s,ix(s,r.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(s,rx(s,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(s,qm(s,e.snapshotNode,r.oldSnap));else throw Zr("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Bv=new Nx;class uf{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new lf(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return cf(this.writes_,e,s)}}getChildAfterChild(e,n,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ir(this.viewCache_),i=Px(this.writes_,r,n,1,s,e);return i.length===0?null:i[0]}}function xx(t,e){Q(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),Q(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Dx(t,e,n,s,r){const i=new kx;let o,l;if(n.type===Pn.OVERWRITE){const u=n;u.source.fromUser?o=Wu(t,e,u.path,u.snap,s,r,i):(Q(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!Ee(u.path),o=al(t,e,u.path,u.snap,s,r,l,i))}else if(n.type===Pn.MERGE){const u=n;u.source.fromUser?o=Mx(t,e,u.path,u.children,s,r,i):(Q(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=zu(t,e,u.path,u.children,s,r,l,i))}else if(n.type===Pn.ACK_USER_WRITE){const u=n;u.revert?o=Fx(t,e,u.path,s,r,i):o=Lx(t,e,u.path,u.affectedTree,s,r,i)}else if(n.type===Pn.LISTEN_COMPLETE)o=Vx(t,e,n.path,s,i);else throw Zr("Unknown operation type: "+n.type);const c=i.getChanges();return Ox(e,o,c),{viewCache:o,changes:c}}function Ox(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=$u(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&n.push(sx($u(e)))}}function $v(t,e,n,s,r,i){const o=e.eventCache;if(ol(s,n)!=null)return e;{let l,c;if(Ee(n))if(Q(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=ir(e),h=u instanceof Oe?u:Oe.EMPTY_NODE,d=Vv(s,h);l=t.filter.updateFullNode(e.eventCache.getNode(),d,i)}else{const u=Hu(s,ir(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=Ie(n);if(u===".priority"){Q(Os(n)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const d=Ym(s,n,h,c);d!=null?l=t.filter.updatePriority(h,d):l=o.getNode()}else{const h=He(n);let d;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const m=Ym(s,n,o.getNode(),c);m!=null?d=o.getNode().getImmediateChild(u).updateChild(h,m):d=o.getNode().getImmediateChild(u)}else d=cf(s,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,h,r,i):l=o.getNode()}}return eo(e,l,o.isFullyInitialized()||Ee(n),t.filter.filtersNodes())}}function al(t,e,n,s,r,i,o,l){const c=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(Ee(n))u=h.updateFullNode(c.getNode(),s,null);else if(h.filtersNodes()&&!c.isFiltered()){const g=c.getNode().updateChild(n,s);u=h.updateFullNode(c.getNode(),g,null)}else{const g=Ie(n);if(!c.isCompleteForPath(n)&&Os(n)>1)return e;const A=He(n),N=c.getNode().getImmediateChild(g).updateChild(A,s);g===".priority"?u=h.updatePriority(c.getNode(),N):u=h.updateChild(c.getNode(),g,N,A,Bv,null)}const d=xv(e,u,c.isFullyInitialized()||Ee(n),h.filtersNodes()),m=new uf(r,d,i);return $v(t,d,n,r,m,l)}function Wu(t,e,n,s,r,i,o){const l=e.eventCache;let c,u;const h=new uf(r,e,i);if(Ee(n))u=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=eo(e,u,!0,t.filter.filtersNodes());else{const d=Ie(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),s),c=eo(e,u,l.isFullyInitialized(),l.isFiltered());else{const m=He(n),g=l.getNode().getImmediateChild(d);let A;if(Ee(m))A=s;else{const S=h.getCompleteChild(d);S!=null?_v(m)===".priority"&&S.getChild(Ev(m)).isEmpty()?A=S:A=S.updateChild(m,s):A=Oe.EMPTY_NODE}if(g.equals(A))c=e;else{const S=t.filter.updateChild(l.getNode(),d,A,m,h,o);c=eo(e,S,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Xm(t,e){return t.eventCache.isCompleteForChild(e)}function Mx(t,e,n,s,r,i,o){let l=e;return s.foreach((c,u)=>{const h=ut(n,c);Xm(e,Ie(h))&&(l=Wu(t,l,h,u,r,i,o))}),s.foreach((c,u)=>{const h=ut(n,c);Xm(e,Ie(h))||(l=Wu(t,l,h,u,r,i,o))}),l}function Jm(t,e,n){return n.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function zu(t,e,n,s,r,i,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;Ee(n)?u=s:u=new qe(null).setTree(n,s);const h=e.serverCache.getNode();return u.children.inorderTraversal((d,m)=>{if(h.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),A=Jm(t,g,m);c=al(t,c,new ze(d),A,r,i,o,l)}}),u.children.inorderTraversal((d,m)=>{const g=!e.serverCache.isCompleteForChild(d)&&m.value===null;if(!h.hasChild(d)&&!g){const A=e.serverCache.getNode().getImmediateChild(d),S=Jm(t,A,m);c=al(t,c,new ze(d),S,r,i,o,l)}}),c}function Lx(t,e,n,s,r,i,o){if(ol(r,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(Ee(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return al(t,e,n,c.getNode().getChild(n),r,i,l,o);if(Ee(n)){let u=new qe(null);return c.getNode().forEachChild(Fr,(h,d)=>{u=u.set(new ze(h),d)}),zu(t,e,n,u,r,i,l,o)}else return e}else{let u=new qe(null);return s.foreach((h,d)=>{const m=ut(n,h);c.isCompleteForPath(m)&&(u=u.set(h,c.getNode().getChild(m)))}),zu(t,e,n,u,r,i,l,o)}}function Vx(t,e,n,s,r){const i=e.serverCache,o=xv(e,i.getNode(),i.isFullyInitialized()||Ee(n),i.isFiltered());return $v(t,o,n,s,Bv,r)}function Fx(t,e,n,s,r,i){let o;if(ol(s,n)!=null)return e;{const l=new uf(s,e,r),c=e.eventCache.getNode();let u;if(Ee(n)||Ie(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Hu(s,ir(e));else{const d=e.serverCache.getNode();Q(d instanceof Oe,"serverChildren would be complete if leaf node"),h=Vv(s,d)}h=h,u=t.filter.updateFullNode(c,h,i)}else{const h=Ie(n);let d=cf(s,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=c.getImmediateChild(h)),d!=null?u=t.filter.updateChild(c,h,d,He(n),l,i):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(c,h,Oe.EMPTY_NODE,He(n),l,i):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Hu(s,ir(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||ol(s,Ve())!=null,eo(e,u,o,t.filter.filtersNodes())}}function Ux(t,e){const n=ir(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Ee(e)&&!n.getImmediateChild(Ie(e)).isEmpty())?n.getChild(e):null}function Zm(t,e,n,s){e.type===Pn.MERGE&&e.source.queryId!==null&&(Q(ir(t.viewCache_),"We should always have a full cache before handling merges"),Q($u(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,i=Dx(t.processor_,r,e,n,s);return xx(t.processor_,i.viewCache),Q(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,Bx(t,i.changes,i.viewCache.eventCache.getNode())}function Bx(t,e,n,s){const r=t.eventRegistrations_;return dx(t.eventGenerator_,e,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eg;function $x(t){Q(!eg,"__referenceConstructor has already been defined"),eg=t}function hf(t,e,n,s){const r=e.source.queryId;if(r!==null){const i=t.views.get(r);return Q(i!=null,"SyncTree gave us an op for an invalid query."),Zm(i,e,n,s)}else{let i=[];for(const o of t.views.values())i=i.concat(Zm(o,e,n,s));return i}}function ff(t,e){let n=null;for(const s of t.views.values())n=n||Ux(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tg;function jx(t){Q(!tg,"__referenceConstructor has already been defined"),tg=t}class ng{constructor(e){this.listenProvider_=e,this.syncPointTree_=new qe(null),this.pendingWriteTree_=Sx(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function qx(t,e,n,s,r){return _x(t.pendingWriteTree_,e,n,s,r),r?Kl(t,new rr(Sv(),e,n)):[]}function Rr(t,e,n=!1){const s=yx(t.pendingWriteTree_,e);if(Ex(t.pendingWriteTree_,e)){let i=new qe(null);return s.snap!=null?i=i.set(Ve(),!0):on(s.children,o=>{i=i.set(new ze(o),!0)}),Kl(t,new il(s.path,i,n))}else return[]}function zl(t,e,n){return Kl(t,new rr(Pv(),e,n))}function Hx(t,e,n){const s=qe.fromObject(n);return Kl(t,new wo(Pv(),e,s))}function Wx(t,e,n,s){const r=Wv(t,s);if(r!=null){const i=zv(r),o=i.path,l=i.queryId,c=nn(o,e),u=new rr(kv(l),c,n);return Kv(t,o,u)}else return[]}function zx(t,e,n,s){const r=Wv(t,s);if(r){const i=zv(r),o=i.path,l=i.queryId,c=nn(o,e),u=qe.fromObject(n),h=new wo(kv(l),c,u);return Kv(t,o,h)}else return[]}function jv(t,e,n){const r=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=nn(o,e),u=ff(l,c);if(u)return u});return Lv(r,e,i,n,!0)}function Kl(t,e){return qv(e,t.syncPointTree_,null,Ov(t.pendingWriteTree_,Ve()))}function qv(t,e,n,s){if(Ee(t.path))return Hv(t,e,n,s);{const r=e.get(Ve());n==null&&r!=null&&(n=ff(r,Ve()));let i=[];const o=Ie(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const u=n?n.getImmediateChild(o):null,h=Fv(s,o);i=i.concat(qv(l,c,u,h))}return r&&(i=i.concat(hf(r,t,s,n))),i}}function Hv(t,e,n,s){const r=e.get(Ve());n==null&&r!=null&&(n=ff(r,Ve()));let i=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,u=Fv(s,o),h=t.operationForChild(o);h&&(i=i.concat(Hv(h,l,c,u)))}),r&&(i=i.concat(hf(r,t,s,n))),i}function Wv(t,e){return t.tagToQueryMap.get(e)}function zv(t){const e=t.indexOf("$");return Q(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ze(t.substr(0,e))}}function Kv(t,e,n){const s=t.syncPointTree_.get(e);Q(s,"Missing sync point for query tag that we're tracking");const r=Ov(t.pendingWriteTree_,e);return hf(s,n,r,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new df(n)}node(){return this.node_}}class pf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ut(this.path_,e);return new pf(this.syncTree_,n)}node(){return jv(this.syncTree_,this.path_)}}const Kx=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},sg=function(t,e,n){if(!t||typeof t!="object")return t;if(Q(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Gx(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Qx(t[".sv"],e);Q(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Gx=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:Q(!1,"Unexpected server value: "+t)}},Qx=function(t,e,n){t.hasOwnProperty("increment")||Q(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&Q(!1,"Unexpected increment value: "+s);const r=e.node();if(Q(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return typeof o!="number"?s:o+s},Yx=function(t,e,n,s){return mf(e,new pf(n,t),s)},Xx=function(t,e,n){return mf(t,new df(e),n)};function mf(t,e,n){const s=t.getPriority().val(),r=sg(s,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,l=sg(o.getValue(),e,n);return l!==o.getValue()||r!==o.getPriority().val()?new at(l,xt(r)):t}else{const o=t;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new at(r))),o.forEachChild(Dt,(l,c)=>{const u=mf(c,e.getImmediateChild(l),n);u!==c&&(i=i.updateImmediateChild(l,u))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function _f(t,e){let n=e instanceof ze?e:new ze(e),s=t,r=Ie(n);for(;r!==null;){const i=jr(s.node.children,r)||{children:{},childCount:0};s=new gf(r,s,i),n=He(n),r=Ie(n)}return s}function ai(t){return t.node.value}function Gv(t,e){t.node.value=e,Ku(t)}function Qv(t){return t.node.childCount>0}function Jx(t){return ai(t)===void 0&&!Qv(t)}function Gl(t,e){on(t.node.children,(n,s)=>{e(new gf(n,t,s))})}function Yv(t,e,n,s){n&&e(t),Gl(t,r=>{Yv(r,e,!0)})}function Zx(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Lo(t){return new ze(t.parent===null?t.name:Lo(t.parent)+"/"+t.name)}function Ku(t){t.parent!==null&&eD(t.parent,t.name,t)}function eD(t,e,n){const s=Jx(n),r=os(t.node.children,e);s&&r?(delete t.node.children[e],t.node.childCount--,Ku(t)):!s&&!r&&(t.node.children[e]=n.node,t.node.childCount++,Ku(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tD=/[\[\].#$\/\u0000-\u001F\u007F]/,nD=/[\[\].#$\u0000-\u001F\u007F]/,qc=10*1024*1024,Xv=function(t){return typeof t=="string"&&t.length!==0&&!tD.test(t)},sD=function(t){return typeof t=="string"&&t.length!==0&&!nD.test(t)},rD=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),sD(t)},Jv=function(t,e,n){const s=n instanceof ze?new VN(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Gs(s));if(typeof e=="function")throw new Error(t+"contains a function "+Gs(s)+" with contents = "+e.toString());if(XE(e))throw new Error(t+"contains "+e.toString()+" "+Gs(s));if(typeof e=="string"&&e.length>qc/3&&Rl(e)>qc)throw new Error(t+"contains a string greater than "+qc+" utf8 bytes "+Gs(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(on(e,(o,l)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!Xv(o)))throw new Error(t+" contains an invalid key ("+o+") "+Gs(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);FN(s,o),Jv(t,l,s),UN(s)}),r&&i)throw new Error(t+' contains ".value" child '+Gs(s)+" in addition to actual children.")}},iD=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Xv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!rD(n))throw new Error(cC(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function aD(t,e){let n=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();n!==null&&!vv(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(r)}n&&t.eventLists_.push(n)}function dr(t,e,n){aD(t,n),lD(t,s=>hn(s,e)||hn(e,s))}function lD(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const r=t.eventLists_[s];if(r){const i=r.path;e(i)?(cD(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function cD(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Ji&&Nt("event: "+n.toString()),Oo(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uD="repo_interrupt",hD=25;class fD{constructor(e,n,s,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new oD,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=rl(),this.transactionQueueTree_=new gf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function dD(t,e,n){if(t.stats_=nf(t.repoInfo_),t.forceRestClient_||aN())t.server_=new sl(t.repoInfo_,(s,r,i,o)=>{rg(t,s,r,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ig(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{gt(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Jn(t.repoInfo_,e,(s,r,i,o)=>{rg(t,s,r,i,o)},s=>{ig(t,s)},s=>{mD(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=dN(t.repoInfo_,()=>new fx(t.stats_,t.server_)),t.infoData_=new ax,t.infoSyncTree_=new ng({startListening:(s,r,i,o)=>{let l=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(l=zl(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),yf(t,"connected",!1),t.serverSyncTree_=new ng({startListening:(s,r,i,o)=>(t.server_.listen(s,i,r,(l,c)=>{const u=o(l,c);dr(t.eventQueue_,s._path,u)}),[]),stopListening:(s,r)=>{t.server_.unlisten(s,r)}})}function pD(t){const n=t.infoData_.getNode(new ze(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Zv(t){return Kx({timestamp:pD(t)})}function rg(t,e,n,s,r){t.dataUpdateCount++;const i=new ze(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(s){const c=Va(n,u=>xt(u));o=zx(t.serverSyncTree_,i,c,r)}else{const c=xt(n);o=Wx(t.serverSyncTree_,i,c,r)}else if(s){const c=Va(n,u=>xt(u));o=Hx(t.serverSyncTree_,i,c)}else{const c=xt(n);o=zl(t.serverSyncTree_,i,c)}let l=i;o.length>0&&(l=vf(t,i)),dr(t.eventQueue_,l,o)}function ig(t,e){yf(t,"connected",e),e===!1&&_D(t)}function mD(t,e){on(e,(n,s)=>{yf(t,n,s)})}function yf(t,e,n){const s=new ze("/.info/"+e),r=xt(n);t.infoData_.updateSnapshot(s,r);const i=zl(t.infoSyncTree_,s,r);dr(t.eventQueue_,s,i)}function gD(t){return t.nextWriteId_++}function _D(t){eT(t,"onDisconnectEvents");const e=Zv(t),n=rl();Bu(t.onDisconnect_,Ve(),(r,i)=>{const o=Yx(r,i,t.serverSyncTree_,e);Rv(n,r,o)});let s=[];Bu(n,Ve(),(r,i)=>{s=s.concat(zl(t.serverSyncTree_,r,i));const o=TD(t,r);vf(t,o)}),t.onDisconnect_=rl(),dr(t.eventQueue_,Ve(),s)}function yD(t){t.persistentConnection_&&t.persistentConnection_.interrupt(uD)}function eT(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Nt(n,...e)}function tT(t,e,n){return jv(t.serverSyncTree_,e,n)||Oe.EMPTY_NODE}function Ef(t,e=t.transactionQueueTree_){if(e||Ql(t,e),ai(e)){const n=sT(t,e);Q(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&ED(t,Lo(e),n)}else Qv(e)&&Gl(e,n=>{Ef(t,n)})}function ED(t,e,n){const s=n.map(u=>u.currentWriteId),r=tT(t,e,s);let i=r;const o=r.hash();for(let u=0;u<n.length;u++){const h=n[u];Q(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=nn(e,h.path);i=i.updateChild(d,h.currentOutputSnapshotRaw)}const l=i.val(!0),c=e;t.server_.put(c.toString(),l,u=>{eT(t,"transaction put response",{path:c.toString(),status:u});let h=[];if(u==="ok"){const d=[];for(let m=0;m<n.length;m++)n[m].status=2,h=h.concat(Rr(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&d.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();Ql(t,_f(t.transactionQueueTree_,e)),Ef(t,t.transactionQueueTree_),dr(t.eventQueue_,e,h);for(let m=0;m<d.length;m++)Oo(d[m])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Yt("transaction at "+c.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}vf(t,e)}},o)}function vf(t,e){const n=nT(t,e),s=Lo(n),r=sT(t,n);return vD(t,r,s),s}function vD(t,e,n){if(e.length===0)return;const s=[];let r=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],u=nn(n,c.path);let h=!1,d;if(Q(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,d=c.abortReason,r=r.concat(Rr(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=hD)h=!0,d="maxretry",r=r.concat(Rr(t.serverSyncTree_,c.currentWriteId,!0));else{const m=tT(t,c.path,o);c.currentInputSnapshot=m;const g=e[l].update(m.val());if(g!==void 0){Jv("transaction failed: Data returned ",g,c.path);let A=xt(g);typeof g=="object"&&g!=null&&os(g,".priority")||(A=A.updatePriority(m.getPriority()));const N=c.currentWriteId,V=Zv(t),F=Xx(A,m,V);c.currentOutputSnapshotRaw=A,c.currentOutputSnapshotResolved=F,c.currentWriteId=gD(t),o.splice(o.indexOf(N),1),r=r.concat(qx(t.serverSyncTree_,c.path,F,c.currentWriteId,c.applyLocally)),r=r.concat(Rr(t.serverSyncTree_,N,!0))}else h=!0,d="nodata",r=r.concat(Rr(t.serverSyncTree_,c.currentWriteId,!0))}dr(t.eventQueue_,n,r),r=[],h&&(e[l].status=2,function(m){setTimeout(m,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(d),!1,null))))}Ql(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Oo(s[l]);Ef(t,t.transactionQueueTree_)}function nT(t,e){let n,s=t.transactionQueueTree_;for(n=Ie(e);n!==null&&ai(s)===void 0;)s=_f(s,n),e=He(e),n=Ie(e);return s}function sT(t,e){const n=[];return rT(t,e,n),n.sort((s,r)=>s.order-r.order),n}function rT(t,e,n){const s=ai(e);if(s)for(let r=0;r<s.length;r++)n.push(s[r]);Gl(e,r=>{rT(t,r,n)})}function Ql(t,e){const n=ai(e);if(n){let s=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[s]=n[r],s++);n.length=s,Gv(e,n.length>0?n:void 0)}Gl(e,s=>{Ql(t,s)})}function TD(t,e){const n=Lo(nT(t,e)),s=_f(t.transactionQueueTree_,e);return Zx(s,r=>{Hc(t,r)}),Hc(t,s),Yv(s,r=>{Hc(t,r)}),n}function Hc(t,e){const n=ai(e);if(n){const s=[];let r=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(Q(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(Q(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(Rr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?Gv(e,void 0):n.length=i+1,dr(t.eventQueue_,Lo(e),r);for(let o=0;o<s.length;o++)Oo(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wD(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let r=n[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function ID(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Yt(`Invalid query segment '${n}' in query '${t}'`)}return e}const og=function(t,e){const n=bD(t),s=n.namespace;n.domain==="firebase.com"&&nr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&nr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Zk();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new uN(n.host,n.secure,s,r,e,"",s!==n.subdomain),path:new ze(n.pathString)}},bD=function(t){let e="",n="",s="",r="",i="",o=!0,l="https",c=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(h,d)),h<d&&(r=wD(t.substring(h,d)));const m=ID(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const A=e.indexOf(".");s=e.substring(0,A).toLowerCase(),n=e.substring(A+1),i=s}"ns"in m&&(i=m.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:l,pathString:r,namespace:i}};/**
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
 */class Tf{constructor(e,n,s,r){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=r}get key(){return Ee(this._path)?null:_v(this._path)}get ref(){return new li(this._repo,this._path)}get _queryIdentifier(){const e=Wm(this._queryParams),n=ef(e);return n==="{}"?"default":n}get _queryObject(){return Wm(this._queryParams)}isEqual(e){if(e=En(e),!(e instanceof Tf))return!1;const n=this._repo===e._repo,s=vv(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+LN(this._path)}}class li extends Tf{constructor(e,n){super(e,n,new af,!1)}get parent(){const e=Ev(this._path);return e===null?null:new li(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}$x(li);jx(li);/**
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
 */const AD="FIREBASE_DATABASE_EMULATOR_HOST",Gu={};let CD=!1;function RD(t,e,n,s,r){let i=s||t.options.databaseURL;i===void 0&&(t.options.projectId||nr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Nt("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=og(i,r),l=o.repoInfo,c;typeof process<"u"&&Cm&&(c=Cm[AD]),c?(i=`http://${c}?ns=${l.namespace}`,o=og(i,r),l=o.repoInfo):o.repoInfo.secure;const u=new cN(t.name,t.options,e);iD("Invalid Firebase Database URL",o),Ee(o.path)||nr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=PD(l,t,u,new lN(t.name,n));return new kD(h,t)}function SD(t,e){const n=Gu[e];(!n||n[t.key]!==t)&&nr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),yD(t),delete n[t.key]}function PD(t,e,n,s){let r=Gu[e.name];r||(r={},Gu[e.name]=r);let i=r[t.toURLString()];return i&&nr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new fD(t,CD,n,s),r[t.toURLString()]=i,i}class kD{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(dD(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new li(this._repo,Ve())),this._rootInternal}_delete(){return this._rootInternal!==null&&(SD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&nr("Cannot call "+e+" on a deleted database.")}}/**
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
 */function ND(t){Kk(ti),Dn(new vn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return RD(s,r,i,n)},"PUBLIC").setMultipleInstances(!0)),Gt(Rm,Sm,t),Gt(Rm,Sm,"esm2017")}Jn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Jn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ND();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT="firebasestorage.googleapis.com",xD="storageBucket",DD=2*60*1e3,OD=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends is{constructor(e,n,s=0){super(Wc(e),`Firebase Storage: ${n} (${Wc(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Vn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Wc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ln;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ln||(Ln={}));function Wc(t){return"storage/"+t}function MD(){const t="An unknown error occurred, please check the error payload for server response.";return new Vn(Ln.UNKNOWN,t)}function LD(){return new Vn(Ln.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function VD(){return new Vn(Ln.CANCELED,"User canceled the upload/download.")}function FD(t){return new Vn(Ln.INVALID_URL,"Invalid URL '"+t+"'.")}function UD(t){return new Vn(Ln.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ag(t){return new Vn(Ln.INVALID_ARGUMENT,t)}function oT(){return new Vn(Ln.APP_DELETED,"The Firebase app was deleted.")}function BD(t){return new Vn(Ln.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=fn.makeFromUrl(e,n)}catch{return new fn(e,"")}if(s.path==="")return s;throw UD(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(O){O.path_=decodeURIComponent(O.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${h}/b/${r}/o${m}`,"i"),A={bucket:1,path:3},S=n===iT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",V=new RegExp(`^https?://${S}/${r}/${N}`,"i"),D=[{regex:l,indices:c,postModify:i},{regex:g,indices:A,postModify:u},{regex:V,indices:{bucket:1,path:2},postModify:u}];for(let O=0;O<D.length;O++){const ee=D[O],te=ee.regex.exec(e);if(te){const C=te[ee.indices.bucket];let y=te[ee.indices.path];y||(y=""),s=new fn(C,y),ee.postModify(s);break}}if(s==null)throw FD(e);return s}}class $D{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jD(t,e,n){let s=1,r=null,i=null,o=!1,l=0;function c(){return l===2}let u=!1;function h(...N){u||(u=!0,e.apply(null,N))}function d(N){r=setTimeout(()=>{r=null,t(g,c())},N)}function m(){i&&clearTimeout(i)}function g(N,...V){if(u){m();return}if(N){m(),h.call(null,N,...V);return}if(c()||o){m(),h.call(null,N,...V);return}s<64&&(s*=2);let D;l===1?(l=2,D=0):D=(s+Math.random())*1e3,d(D)}let A=!1;function S(N){A||(A=!0,m(),!u&&(r!==null?(N||(l=2),clearTimeout(r),d(0)):N||(l=1)))}return d(0),i=setTimeout(()=>{o=!0,S(!0)},n),S}function qD(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HD(t){return t!==void 0}function lg(t,e,n,s){if(s<e)throw ag(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw ag(`Invalid value for '${t}'. Expected ${n} or less.`)}function WD(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}var ll;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ll||(ll={}));/**
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
 */function zD(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(e,n,s,r,i,o,l,c,u,h,d,m=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,A)=>{this.resolve_=g,this.reject_=A,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new da(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===ll.NO_ERROR,c=i.getStatus();if(!l||zD(c,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===ll.ABORT;s(!1,new da(!1,null,h));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new da(u,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,l=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());HD(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=MD();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(r.canceled){const c=this.appDelete_?oT():VD();o(c)}else{const c=LD();o(c)}};this.canceled_?n(!1,new da(!1,null,!0)):this.backoffId_=jD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&qD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class da{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function GD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function QD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function YD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function XD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function JD(t,e,n,s,r,i,o=!0){const l=WD(t.urlParams),c=t.url+l,u=Object.assign({},t.headers);return YD(u,e),GD(u,n),QD(u,i),XD(u,s),new KD(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function eO(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class cl{constructor(e,n){this._service=e,n instanceof fn?this._location=n:this._location=fn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new cl(e,n)}get root(){const e=new fn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return eO(this._location.path)}get storage(){return this._service}get parent(){const e=ZD(this._location.path);if(e===null)return null;const n=new fn(this._location.bucket,e);return new cl(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw BD(e)}}function cg(t,e){const n=e==null?void 0:e[xD];return n==null?null:fn.makeFromBucketSpec(n,t)}class tO{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=iT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=DD,this._maxUploadRetryTime=OD,this._requests=new Set,r!=null?this._bucket=fn.makeFromBucketSpec(r,this._host):this._bucket=cg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=fn.makeFromBucketSpec(this._url,e):this._bucket=cg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){lg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){lg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new cl(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new $D(oT());{const o=JD(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const ug="@firebase/storage",hg="0.13.5";/**
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
 */const nO="storage";function sO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new tO(n,s,r,e,ti)}function rO(){Dn(new vn(nO,sO,"PUBLIC").setMultipleInstances(!0)),Gt(ug,hg,""),Gt(ug,hg,"esm2017")}rO();const zc=new WeakMap;function aT(t,e){return zc.has(e)||zc.set(e,{f:{},r:{},s:{},u:{}}),zc.get(e)}function iO(t,e,n,s){if(!t)return n;const[r,i]=lT(t);if(!r)return n;const o=aT(void 0,s)[r]||{},l=e||i;return l&&l in o?o[l]:n}function oO(t,e,n,s){if(!t)return;const[r,i]=lT(t);if(!r)return;const o=aT(void 0,s)[r],l=e||i;if(l)return n.then(c=>{o[l]=c}).catch(Rn),l}function lT(t){return Bk(t)||$k(t)?["f",t.path]:jk(t)?["r",t.toString()]:qk(t)?["s",t.toString()]:[]}const Kc=new WeakMap;function aO(t,e,n){const s=KE();Kc.has(s)||Kc.set(s,new Map);const r=Kc.get(s),i=oO(e,n,t,s);return i&&r.set(i,t),i?()=>r.delete(i):Rn}const lO={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function Qu(t,e,n,s){if(!Fk(t))return[t,{}];const r=[{},{}],i=Object.keys(n).reduce((l,c)=>{const u=n[c];return l[u.path]=u.data(),l},{});function o(l,c,u,h){c=c||{};const[d,m]=h;Object.getOwnPropertyNames(l).forEach(g=>{const A=Object.getOwnPropertyDescriptor(l,g);A&&!A.enumerable&&Object.defineProperty(d,g,A)});for(const g in l){const A=l[g];if(A==null||A instanceof Date||A instanceof tt||A instanceof ql)d[g]=A;else if(Zh(A)){const S=u+g;d[g]=S in n?c[g]:A.path,m[S]=A.converter?A:A.withConverter(s.converter)}else if(Array.isArray(A)){d[g]=Array(A.length);for(let S=0;S<A.length;S++){const N=A[S];N&&N.path in i&&(d[g][S]=i[N.path])}o(A,c[g]||d[g],u+g+".",[d[g],m])}else hr(A)?(d[g]={},o(A,c[g],u+g+".",[d[g],m])):d[g]=A}}return o(t,e,"",r),r}const wf={reset:!1,wait:!0,maxRefDepth:2,converter:lO,snapshotOptions:{serverTimestamps:"estimate"}};function ul(t){for(const e in t)t[e].unsub()}function Yu(t,e,n,s,r,i,o,l,c){const[u,h]=Qu(s.data(t.snapshotOptions),Jh(e,n),r,t);i.set(e,n,u),Xu(t,e,n,r,h,i,o,l,c)}function cO({ref:t,target:e,path:n,depth:s,resolve:r,reject:i,ops:o},l){const c=Object.create(null);let u=Rn;return l.once?SE(t).then(h=>{h.exists()?Yu(l,e,n,h,c,o,s,r,i):(o.set(e,n,null),r())}).catch(i):u=Yh(t,h=>{h.exists()?Yu(l,e,n,h,c,o,s,r,i):(o.set(e,n,null),r())},i),()=>{u(),ul(c)}}function Xu(t,e,n,s,r,i,o,l,c){const u=Object.keys(r);if(Object.keys(s).filter(S=>u.indexOf(S)<0).forEach(S=>{s[S].unsub(),delete s[S]}),!u.length||++o>t.maxRefDepth)return l(n);let d=0;const m=u.length,g=Object.create(null);function A(S){S in g&&++d>=m&&l(n)}u.forEach(S=>{const N=s[S],V=r[S],F=`${n}.${S}`;if(g[F]=!0,N)if(N.path!==V.path)N.unsub();else return;s[S]={data:()=>Jh(e,F),unsub:cO({ref:V,target:e,path:F,depth:o,ops:i,resolve:A.bind(null,F),reject:c},t),path:V.path}})}function uO(t,e,n,s,r,i){const o=Object.assign({},wf,i),{snapshotListenOptions:l,snapshotOptions:c,wait:u,once:h}=o,d="value";let m=zt(u?[]:t.value);u||n.set(t,d,[]);const g=s;let A,S=Rn;const N=[],V={added:({newIndex:D,doc:O})=>{N.splice(D,0,Object.create(null));const ee=N[D],[te,C]=Qu(O.data(c),void 0,ee,o);n.add(Hn(m),D,te),Xu(o,m,`${d}.${D}`,ee,C,n,0,s.bind(null,O),r)},modified:({oldIndex:D,newIndex:O,doc:ee})=>{const te=Hn(m),C=N[D],y=te[D],[E,b]=Qu(ee.data(c),y,C,o);N.splice(O,0,C),n.remove(te,D),n.add(te,O,E),Xu(o,m,`${d}.${O}`,C,b,n,0,s,r)},removed:({oldIndex:D})=>{const O=Hn(m);n.remove(O,D),ul(N.splice(D,1)[0])}};function F(D){const O=D.docChanges(l);if(!A&&O.length){A=!0;let ee=0;const te=O.length,C=Object.create(null);for(let y=0;y<te;y++)C[O[y].doc.id]=!0;s=y=>{y&&y.id in C&&++ee>=te&&(u&&(n.set(t,d,Hn(m)),m=t),g(Hn(m)),s=Rn)}}O.forEach(ee=>{V[ee.type](ee)}),O.length||(u&&(n.set(t,d,Hn(m)),m=t),s(Hn(m)))}return h?CP(e).then(F).catch(r):S=Yh(e,F,r),D=>{if(S(),D){const O=typeof D=="function"?D():[];n.set(t,d,O)}N.forEach(ul)}}function hO(t,e,n,s,r,i){const o=Object.assign({},wf,i),l="value",c=Object.create(null);s=Hk(s,()=>Jh(t,l));let u=Rn;function h(d){d.exists()?Yu(o,t,l,d,c,n,0,s,r):(n.set(t,l,null),s(null))}return o.once?SE(e).then(h).catch(r):u=Yh(e,h,r),d=>{if(u(),d){const m=typeof d=="function"?d():null;n.set(t,l,m)}ul(c)}}const fg=Symbol();function fO(t,e){let n=Rn;const s=Object.assign({},wf,e),r=Hn(t),i=s.target||zt();zk()&&(s.once=!0);const o=iO(r,s.ssrKey,fg,KE()),l=o!==fg;l&&(i.value=o);let c=!l;const u=zt(!1),h=zt(),d=Fg(),m=Tg();let g=Rn;function A(){let V=Hn(t);const F=new Promise((D,O)=>{if(n(s.reset),!V)return n=Rn,D(null);u.value=c,c=!0,V.converter||(V=V.withConverter(s.converter)),n=(Zh(V)?hO:uO)(i,V,dO,D,O,s)}).catch(D=>(d.value===F&&(h.value=D),Promise.reject(D))).finally(()=>{d.value===F&&(u.value=!1)});d.value=F}let S=Rn;(Et(t)||typeof t=="function")&&(S=Dr(t,A)),A(),r&&(g=aO(d.value,r,s.ssrKey)),mh()&&r_(()=>d.value),m&&KT(N);function N(V=s.reset){S(),g(),n(V)}return Object.defineProperties(i,{error:{get:()=>h},data:{get:()=>i},pending:{get:()=>u},promise:{get:()=>d},stop:{get:()=>N}})}const dO={set:(t,e,n)=>Lk(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function pO(t,e){return fO(t,{target:zt([]),...e})}function mO(t,{firebaseApp:e,modules:n=[]}){t.provide(zE,e);for(const s of n)s(e,t)}const gO={apiKey:"AIzaSyAfF4tiebJT5Ce9-8rTuB2n8Z9oYiA1YFA",authDomain:"docutrack-waitlist.firebaseapp.com",projectId:"docutrack-waitlist",storageBucket:"docutrack-waitlist.firebasestorage.app",messagingSenderId:"502896437609",appId:"1:502896437609:web:d9a389e6ae8df8a266b5f8",measurementId:"G-WJMZ3W6SXQ"},cT=ry(gO),_O=fP(cT),yO={class:"flex justify-center w-full"},EO={class:"flex-auto max-w-md"},vO={class:"relative"},TO=["disabled"],wO={class:"h-8 relative"},uT={__name:"WaitingList",props:["isDarkMode"],setup(t){const e=zt(""),n=zt(!1),s=zt(""),r=zt("");Dr(s,()=>{setTimeout(()=>{s.value="",r.value=""},5e3)});const i=l=>/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(l),o=async()=>{if(!e.value){s.value="Please enter your email address.",r.value="error",n.value=!1;return}if(!i(e.value)){s.value="Invalid email address",r.value="error",n.value=!1;return}const l=uP(_O,"waitlist");pO(l),n.value=!0,s.value="",r.value="";const c={email:e.value,created_at:new Date().toISOString()};try{if(!await RP(l,c))throw new Error("An error occurred");s.value="You have been added to the waiting list!",r.value="success",e.value=""}catch{s.value="An error occurred. Please try again.",r.value="error"}finally{n.value=!1}};return(l,c)=>(Se(),Be("div",yO,[W("div",EO,[W("h2",{class:Ne(["text-md font-semibold mb-4 text-center",t.isDarkMode?"text-base-100":"text-base-400"])}," Join Our Waitlist ",2),W("div",vO,[Kg(W("input",{type:"email","onUpdate:modelValue":c[0]||(c[0]=u=>e.value=u),placeholder:"Enter your email",class:Ne(["w-full px-4 py-4 rounded-full","outline-none ring-2 ring-base-100","focus:ring-primary-200",t.isDarkMode?"bg-base-300 text-base-100 ring-base-200":"bg-base-100 text-base-400","pr-32"]),required:""},null,2),[[XI,e.value]]),W("button",{type:"submit",onClick:o,disabled:n.value,class:Ne(["absolute right-1 top-1 bottom-1","bg-primary-200 text-base-400 px-6 md:px-12 rounded-full font-semibold","hover:bg-primary-300 transition-colors","disabled:opacity-50 disabled:cursor-not-allowed"])},yt(n.value?"Joining...":"Join"),9,TO)]),W("div",wO,[s.value?(Se(),Be("p",{key:0,class:Ne(["absolute w-full mt-2 text-sm text-center",r.value==="success"?"text-primary-400":"text-red"])},yt(s.value),3)):iu("",!0)])])]))}},IO={id:"hero",class:"relative py-60 px-4 overflow-hidden"},bO={class:"absolute inset-0 z-0"},AO={class:"container mx-auto text-center relative z-10"},CO={__name:"HeroSection",props:["isDarkMode"],setup(t){return(e,n)=>(Se(),Be("section",IO,[W("div",bO,[n[0]||(n[0]=W("img",{src:MA,alt:"Background",class:"w-full h-full object-cover"},null,-1)),W("div",{class:Ne(["absolute inset-0",t.isDarkMode?"bg-base-400 opacity-70":"bg-base-100 opacity-50"])},null,2)]),W("div",AO,[W("h1",{class:Ne(["text-4xl md:text-6xl font-bold mb-6",t.isDarkMode?"text-base-100":"text-base-400"])}," Streamline Your Document Management ",2),W("p",{class:Ne(["text-xl mb-8",t.isDarkMode?"text-base-200":"text-base-300"])}," Docutrack helps you organize, track, and collaborate on your documents effortlessly. ",2),Ae(uT,{isDarkMode:t.isDarkMode},null,8,["isDarkMode"])])]))}},RO={class:"container mx-auto"},SO={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"},PO={class:"text-xl font-semibold mb-2"},kO={__name:"FeaturesSection",props:["isDarkMode"],setup(t){const e=[{title:"Centralized Storage",description:"Keep all your documents in one secure place",icon:"FolderIcon"},{title:"Easy Collaboration",description:"Work together seamlessly with your team",icon:"UsersIcon"},{title:"Version Control",description:"Track changes and revert to previous versions",icon:"HistoryIcon"},{title:"Advanced Search",description:"Find any document in seconds",icon:"SearchIcon"}];return(n,s)=>(Se(),Be("section",{id:"features",class:Ne(["py-20 px-4 transition-colors duration-300",t.isDarkMode?"bg-base-300":"bg-base-200"])},[W("div",RO,[s[0]||(s[0]=W("h2",{class:"text-3xl md:text-4xl font-bold text-center mb-12"},"Key Features",-1)),W("div",SO,[(Se(),Be(rt,null,Zn(e,r=>W("div",{key:r.title,class:Ne(["p-6 rounded-lg transition-colors duration-300",t.isDarkMode?"bg-base-400":"bg-base-100"])},[(Se(),ao(Lw(r.icon),{class:"w-12 h-12 text-base-200 mb-4"})),W("h3",PO,yt(r.title),1),W("p",{class:Ne(t.isDarkMode?"text-primary-100":"text-base-300")},yt(r.description),3)],2)),64))])])],2))}},NO={id:"solution",class:"py-40 px-4"},xO={class:"container mx-auto"},DO={class:"mx-10 grid grid-cols-1 md:grid-cols-2 gap-14"},OO={class:"space-y-2"},MO={class:"space-y-2"},LO={__name:"ProblemsSection",props:["isDarkMode"],setup(t){const e=["Lost documents and wasted time searching","Inconsistent version control","Security risks from scattered files","Inefficient collaboration processes"],n=["Centralized, easily searchable document repository","Automated version control and change tracking","Enhanced security with role-based access control","Streamlined collaboration with real-time editing"];return(s,r)=>(Se(),Be("section",NO,[W("div",xO,[r[2]||(r[2]=W("h2",{class:"text-3xl md:text-4xl font-bold text-center mb-20"},"The Problem We Solve",-1)),W("div",DO,[W("div",{class:Ne(["p-6 rounded-lg transition-colors duration-300",t.isDarkMode?"bg-base-300":"bg-base-100 border-2 border-base-200 shadow-2xl"])},[r[0]||(r[0]=W("h3",{class:"text-2xl font-semibold mb-4"},"Without Docutrack",-1)),W("ul",OO,[(Se(),Be(rt,null,Zn(e,i=>W("li",{key:i,class:"flex items-start"},[Ae(vt(_A),{class:"w-6 h-6 text-red mr-2 flex-shrink-0"}),W("span",null,yt(i),1)])),64))])],2),W("div",{class:Ne(["p-6 rounded-lg transition-colors duration-300",t.isDarkMode?"bg-base-300":"bg-base-100 border-2 border-base-200 shadow-2xl"])},[r[1]||(r[1]=W("h3",{class:"text-2xl font-semibold mb-4"},"With Docutrack",-1)),W("ul",MO,[(Se(),Be(rt,null,Zn(n,i=>W("li",{key:i,class:"flex items-start"},[Ae(vt(gA),{class:"w-6 h-6 text-primary-200 mr-2 flex-shrink-0"}),W("span",null,yt(i),1)])),64))])],2)])])]))}},VO={class:"container mx-auto"},FO={class:"space-y-6"},UO=["onClick"],BO={class:"text-xl font-semibold"},$O={__name:"FaqSection",props:["isDarkMode"],setup(t){const e=zt([{question:"What is Docutrack?",answer:"Docutrack is a comprehensive document management system that helps businesses organize, track, and collaborate on documents efficiently and securely.",isOpen:!1},{question:"How secure is Docutrack?",answer:"Docutrack uses enterprise-grade security measures, including encryption at rest and in transit, role-based access control, and regular security audits to keep your documents safe.",isOpen:!1},{question:"Can I integrate Docutrack with other tools?",answer:"Yes, Docutrack offers integrations with popular productivity tools and can be connected to your existing systems through our API.",isOpen:!1},{question:"Is there a free trial available?",answer:"Yes, we offer a 14-day free trial on all our plans so you can experience the full power of Docutrack before committing.",isOpen:!1}]);return(n,s)=>(Se(),Be("section",{id:"faq",class:Ne(["py-20 px-4 transition-colors duration-300",t.isDarkMode?"bg-base-300":"bg-base-200"])},[W("div",VO,[s[0]||(s[0]=W("h2",{class:"text-3xl md:text-4xl font-bold text-center mb-12"},"Frequently Asked Questions",-1)),W("div",FO,[(Se(!0),Be(rt,null,Zn(e.value,r=>(Se(),Be("div",{key:r.question,class:Ne(["p-6 rounded-lg transition-colors duration-300",t.isDarkMode?"bg-base-400":"bg-base-100"])},[W("button",{onClick:i=>r.isOpen=!r.isOpen,class:"flex justify-between items-center w-full text-left"},[W("span",BO,yt(r.question),1),Ae(vt(mA),{class:Ne(["w-6 h-6 transition-transform",{"transform rotate-180":r.isOpen}])},null,8,["class"])],8,UO),Kg(W("p",{class:Ne(["mt-4",t.isDarkMode?"text-primary-100":"text-base-300"])},yt(r.answer),3),[[LI,r.isOpen]])],2))),128))])])],2))}},jO={id:"pricing",class:"py-24 px-4"},qO={class:"container mx-auto"},HO={class:"grid grid-cols-1 md:grid-cols-3 gap-8"},WO={class:"text-2xl font-semibold mb-2"},zO={class:"text-4xl font-bold mb-6"},KO={class:"mb-8 flex-grow"},GO={__name:"PricingSection",props:["isDarkMode"],setup(t){const e=[{name:"Basic",description:"For small teams",price:"$9/month",features:["Unlimited Clients","Up to 5 users","10GB storage","Basic document tracking","Email support"]},{name:"Pro",description:"For growing businesses",price:"$29/month",features:["Unlimited Clients","Up to 20 users","100GB storage","Advanced document tracking","Priority support","Custom branding"]},{name:"Enterprise",description:"For large organizations",price:"Custom",features:["Unlimited Clients","Unlimited users","Unlimited storage","Advanced security features","24/7 phone support","Dedicated account manager"]}];return(n,s)=>(Se(),Be("section",jO,[W("div",qO,[s[1]||(s[1]=W("h2",{class:"text-3xl md:text-4xl font-bold text-center mb-20"},"Simple, Transparent Pricing",-1)),W("div",HO,[(Se(),Be(rt,null,Zn(e,r=>W("div",{key:r.name,class:Ne(["p-6 rounded-lg flex flex-col transition-colors duration-300",t.isDarkMode?"bg-base-300":"bg-base-100 border-2 border-base-200 shadow-2xl"])},[W("h3",WO,yt(r.name),1),W("p",{class:Ne([t.isDarkMode?"text-primary-100":"text-base-300","mb-4"])},yt(r.description),3),W("p",zO,yt(r.price),1),W("ul",KO,[(Se(!0),Be(rt,null,Zn(r.features,i=>(Se(),Be("li",{key:i,class:"flex items-center mb-2"},[Ae(vt(pA),{class:"w-5 h-5 text-primary-200 mr-2"}),W("span",null,yt(i),1)]))),128))]),s[0]||(s[0]=W("button",{class:"bg-primary-200 text-base-400 px-6 py-3 rounded-full font-semibold hover:bg-primary-300 transition-colors"}," Choose Plan ",-1))],2)),64))])])]))}},QO={class:"flex flex-col"},YO={__name:"WaitingListSection",props:["isDarkMode","navItems"],setup(t){return(e,n)=>(Se(),Be("div",{class:Ne(["py-12 px-4 transition-colors duration-300",t.isDarkMode?"bg-base-300":"bg-base-200"])},[W("div",QO,[n[0]||(n[0]=W("h2",{class:"text-2xl font-semibold text-center"},"Ready to see through the legal fog?",-1)),n[1]||(n[1]=W("p",{class:"text-center my-6"},"Sign up now to join our waiting list and be the first to experience legal clarity like never before!",-1)),Ae(uT,{isDarkMode:t.isDarkMode},null,8,["isDarkMode"])])],2))}},XO={class:"container mx-auto flex flex-col justify-center items-center md:flex-row flex-wrap"},JO={class:"flex flex-col gap-8 md:container md:flex-row md:items-center md:justify-between my-4 p-2"},ZO={class:"flex flex-row justify-center gap-8"},e1={href:"https://instagram.com/docutrack",target:"_blank",rel:"noopener noreferrer",class:"text-xl"},t1={href:"https://linkedin.com/company/docutrack",target:"_blank",rel:"noopener noreferrer",class:"text-xl"},n1={class:"py-6 px-2 flex flex-col md:flex-row md:container md:items-center md:justify-between"},s1={class:"py-4"},r1={class:"flex flex-col items-center gap-6 text-md font-semibold md:flex-row"},i1=["href"],o1={class:"my-4 py-4 text-center text-sm flex flex-row justify-start gap-2"},a1={__name:"FooterComponent",props:["isDarkMode","navItems"],setup(t){return(e,n)=>(Se(),Be("footer",{class:Ne(["py-8 px-4 transition-colors duration-300",t.isDarkMode?"bg-base-300":"bg-base-200"])},[W("div",XO,[W("div",JO,[n[0]||(n[0]=W("a",{class:"text-2xl underline-offset-1",mailto:"hello@docutrack.cloud"},"hello@docutrack.cloud",-1)),W("div",ZO,[W("a",e1,[Ae(vt(EA),{class:"h-6 w-auto"})]),W("a",t1,[Ae(vt(vA),{class:"h-6 w-auto"})])])]),W("div",n1,[W("div",s1,[W("nav",r1,[(Se(!0),Be(rt,null,Zn(t.navItems,s=>(Se(),Be("a",{key:s,href:`#${s.toLowerCase()}`},yt(s),9,i1))),128))])]),W("div",o1,[W("span",null,"© "+yt(new Date().getFullYear())+" Docutrack - designed with",1),Ae(vt(yA),{class:"h-4 w-auto my-auto text-red"}),n[1]||(n[1]=W("span",null,"Worldwide",-1))])])])],2))}},l1={__name:"HomeView",setup(t){const e=zt(!1),n=["Features","Solution","FAQ","Pricing"],s=()=>{e.value=!e.value};return(r,i)=>(Se(),Be("div",{class:Ne(["min-h-screen transition-colors duration-300",e.value?"bg-base-400 text-base-100":"bg-base-100 text-base-400"])},[Ae(OA,{isDarkMode:e.value,navItems:n,onSwitchTheme:s},null,8,["isDarkMode"]),Ae(CO,{isDarkMode:e.value},null,8,["isDarkMode"]),Ae(kO,{isDarkMode:e.value},null,8,["isDarkMode"]),Ae(LO,{isDarkMode:e.value},null,8,["isDarkMode"]),Ae($O,{isDarkMode:e.value},null,8,["isDarkMode"]),Ae(GO,{isDarkMode:e.value},null,8,["isDarkMode"]),Ae(YO,{isDarkMode:e.value},null,8,["isDarkMode"]),Ae(a1,{isDarkMode:e.value,navItems:n},null,8,["isDarkMode"])],2))}},c1=cA({history:Ub("/docutrack-landing"),routes:[{path:"/",name:"home",component:l1}]}),If=sb(lb);If.use(mO,{firebaseApp:cT});If.use(c1);If.mount("#app");
