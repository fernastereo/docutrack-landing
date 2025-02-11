(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ju(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Be={},Sr=[],kn=()=>{},UT=()=>!1,hl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Zu=t=>t.startsWith("onUpdate:"),dt=Object.assign,eh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},BT=Object.prototype.hasOwnProperty,Oe=(t,e)=>BT.call(t,e),ce=Array.isArray,Pr=t=>fl(t)==="[object Map]",mg=t=>fl(t)==="[object Set]",fe=t=>typeof t=="function",Je=t=>typeof t=="string",Ms=t=>typeof t=="symbol",We=t=>t!==null&&typeof t=="object",gg=t=>(We(t)||fe(t))&&fe(t.then)&&fe(t.catch),_g=Object.prototype.toString,fl=t=>_g.call(t),$T=t=>fl(t).slice(8,-1),yg=t=>fl(t)==="[object Object]",th=t=>Je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Fi=Ju(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),dl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},jT=/-(\w)/g,rn=dl(t=>t.replace(jT,(e,n)=>n?n.toUpperCase():"")),qT=/\B([A-Z])/g,or=dl(t=>t.replace(qT,"-$1").toLowerCase()),pl=dl(t=>t.charAt(0).toUpperCase()+t.slice(1)),hc=dl(t=>t?`on${pl(t)}`:""),Ts=(t,e)=>!Object.is(t,e),ma=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},vg=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Gc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},HT=t=>{const e=Je(t)?Number(t):NaN;return isNaN(e)?t:e};let _d;const ml=()=>_d||(_d=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function nh(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Je(s)?GT(s):nh(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(Je(t)||We(t))return t}const WT=/;(?![^(]*\))/g,zT=/:([^]+)/,KT=/\/\*[^]*?\*\//g;function GT(t){const e={};return t.replace(KT,"").split(WT).forEach(n=>{if(n){const s=n.split(zT);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Pe(t){let e="";if(Je(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const s=Pe(t[n]);s&&(e+=s+" ")}else if(We(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const QT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",YT=Ju(QT);function Eg(t){return!!t||t===""}const Tg=t=>!!(t&&t.__v_isRef===!0),nt=t=>Je(t)?t:t==null?"":ce(t)||We(t)&&(t.toString===_g||!fe(t.toString))?Tg(t)?nt(t.value):JSON.stringify(t,wg,2):String(t),wg=(t,e)=>Tg(e)?wg(t,e.value):Pr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[fc(s,i)+" =>"]=r,n),{})}:mg(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>fc(n))}:Ms(e)?fc(e):We(e)&&!ce(e)&&!yg(e)?String(e):e,fc=(t,e="")=>{var n;return Ms(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Lt;class XT{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Lt,!e&&Lt&&(this.index=(Lt.scopes||(Lt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Lt;try{return Lt=this,e()}finally{Lt=n}}}on(){Lt=this}off(){Lt=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Ig(){return Lt}function JT(t,e=!1){Lt&&Lt.cleanups.push(t)}let $e;const dc=new WeakSet;class bg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Lt&&Lt.active&&Lt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,dc.has(this)&&(dc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Cg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,yd(this),Rg(this);const e=$e,n=dn;$e=this,dn=!0;try{return this.fn()}finally{Sg(this),$e=e,dn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ih(e);this.deps=this.depsTail=void 0,yd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?dc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Qc(this)&&this.run()}get dirty(){return Qc(this)}}let Ag=0,Ui,Bi;function Cg(t,e=!1){if(t.flags|=8,e){t.next=Bi,Bi=t;return}t.next=Ui,Ui=t}function sh(){Ag++}function rh(){if(--Ag>0)return;if(Bi){let e=Bi;for(Bi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ui;){let e=Ui;for(Ui=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Rg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Sg(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),ih(s),ZT(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function Qc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Pg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Pg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===so))return;t.globalVersion=so;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Qc(t)){t.flags&=-3;return}const n=$e,s=dn;$e=t,dn=!0;try{Rg(t);const r=t.fn(t._value);(e.version===0||Ts(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{$e=n,dn=s,Sg(t),t.flags&=-3}}function ih(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)ih(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function ZT(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let dn=!0;const kg=[];function Ls(){kg.push(dn),dn=!1}function Vs(){const t=kg.pop();dn=t===void 0?!0:t}function yd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=$e;$e=void 0;try{e()}finally{$e=n}}}let so=0;class ew{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class oh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!$e||!dn||$e===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==$e)n=this.activeLink=new ew($e,this),$e.deps?(n.prevDep=$e.depsTail,$e.depsTail.nextDep=n,$e.depsTail=n):$e.deps=$e.depsTail=n,Ng(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=$e.depsTail,n.nextDep=void 0,$e.depsTail.nextDep=n,$e.depsTail=n,$e.deps===n&&($e.deps=s)}return n}trigger(e){this.version++,so++,this.notify(e)}notify(e){sh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{rh()}}}function Ng(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Ng(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Yc=new WeakMap,Zs=Symbol(""),Xc=Symbol(""),ro=Symbol("");function St(t,e,n){if(dn&&$e){let s=Yc.get(t);s||Yc.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new oh),r.map=s,r.key=n),r.track()}}function Kn(t,e,n,s,r,i){const o=Yc.get(t);if(!o){so++;return}const l=c=>{c&&c.trigger()};if(sh(),e==="clear")o.forEach(l);else{const c=ce(t),u=c&&th(n);if(c&&n==="length"){const h=Number(s);o.forEach((d,m)=>{(m==="length"||m===ro||!Ms(m)&&m>=h)&&l(d)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(ro)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Zs)),Pr(t)&&l(o.get(Xc)));break;case"delete":c||(l(o.get(Zs)),Pr(t)&&l(o.get(Xc)));break;case"set":Pr(t)&&l(o.get(Zs));break}}rh()}function yr(t){const e=ke(t);return e===t?e:(St(e,"iterate",ro),sn(t)?e:e.map(Pt))}function gl(t){return St(t=ke(t),"iterate",ro),t}const tw={__proto__:null,[Symbol.iterator](){return pc(this,Symbol.iterator,Pt)},concat(...t){return yr(this).concat(...t.map(e=>ce(e)?yr(e):e))},entries(){return pc(this,"entries",t=>(t[1]=Pt(t[1]),t))},every(t,e){return $n(this,"every",t,e,void 0,arguments)},filter(t,e){return $n(this,"filter",t,e,n=>n.map(Pt),arguments)},find(t,e){return $n(this,"find",t,e,Pt,arguments)},findIndex(t,e){return $n(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return $n(this,"findLast",t,e,Pt,arguments)},findLastIndex(t,e){return $n(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return $n(this,"forEach",t,e,void 0,arguments)},includes(...t){return mc(this,"includes",t)},indexOf(...t){return mc(this,"indexOf",t)},join(t){return yr(this).join(t)},lastIndexOf(...t){return mc(this,"lastIndexOf",t)},map(t,e){return $n(this,"map",t,e,void 0,arguments)},pop(){return wi(this,"pop")},push(...t){return wi(this,"push",t)},reduce(t,...e){return vd(this,"reduce",t,e)},reduceRight(t,...e){return vd(this,"reduceRight",t,e)},shift(){return wi(this,"shift")},some(t,e){return $n(this,"some",t,e,void 0,arguments)},splice(...t){return wi(this,"splice",t)},toReversed(){return yr(this).toReversed()},toSorted(t){return yr(this).toSorted(t)},toSpliced(...t){return yr(this).toSpliced(...t)},unshift(...t){return wi(this,"unshift",t)},values(){return pc(this,"values",Pt)}};function pc(t,e,n){const s=gl(t),r=s[e]();return s!==t&&!sn(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const nw=Array.prototype;function $n(t,e,n,s,r,i){const o=gl(t),l=o!==t&&!sn(t),c=o[e];if(c!==nw[e]){const d=c.apply(t,i);return l?Pt(d):d}let u=n;o!==t&&(l?u=function(d,m){return n.call(this,Pt(d),m,t)}:n.length>2&&(u=function(d,m){return n.call(this,d,m,t)}));const h=c.call(o,u,s);return l&&r?r(h):h}function vd(t,e,n,s){const r=gl(t);let i=n;return r!==t&&(sn(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,Pt(l),c,t)}),r[e](i,...s)}function mc(t,e,n){const s=ke(t);St(s,"iterate",ro);const r=s[e](...n);return(r===-1||r===!1)&&ch(n[0])?(n[0]=ke(n[0]),s[e](...n)):r}function wi(t,e,n=[]){Ls(),sh();const s=ke(t)[e].apply(t,n);return rh(),Vs(),s}const sw=Ju("__proto__,__v_isRef,__isVue"),xg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ms));function rw(t){Ms(t)||(t=String(t));const e=ke(this);return St(e,"has",t),e.hasOwnProperty(t)}class Dg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?pw:Vg:i?Lg:Mg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=ce(e);if(!r){let c;if(o&&(c=tw[n]))return c;if(n==="hasOwnProperty")return rw}const l=Reflect.get(e,n,Et(e)?e:s);return(Ms(n)?xg.has(n):sw(n))||(r||St(e,"get",n),i)?l:Et(l)?o&&th(n)?l:l.value:We(l)?r?Ug(l):_l(l):l}}class Og extends Dg{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const c=er(i);if(!sn(s)&&!er(s)&&(i=ke(i),s=ke(s)),!ce(e)&&Et(i)&&!Et(s))return c?!1:(i.value=s,!0)}const o=ce(e)&&th(n)?Number(n)<e.length:Oe(e,n),l=Reflect.set(e,n,s,Et(e)?e:r);return e===ke(r)&&(o?Ts(s,i)&&Kn(e,"set",n,s):Kn(e,"add",n,s)),l}deleteProperty(e,n){const s=Oe(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&Kn(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Ms(n)||!xg.has(n))&&St(e,"has",n),s}ownKeys(e){return St(e,"iterate",ce(e)?"length":Zs),Reflect.ownKeys(e)}}class iw extends Dg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ow=new Og,aw=new iw,lw=new Og(!0);const Jc=t=>t,ea=t=>Reflect.getPrototypeOf(t);function cw(t,e,n){return function(...s){const r=this.__v_raw,i=ke(r),o=Pr(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),h=n?Jc:e?Zc:Pt;return!e&&St(i,"iterate",c?Xc:Zs),{next(){const{value:d,done:m}=u.next();return m?{value:d,done:m}:{value:l?[h(d[0]),h(d[1])]:h(d),done:m}},[Symbol.iterator](){return this}}}}function ta(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function uw(t,e){const n={get(r){const i=this.__v_raw,o=ke(i),l=ke(r);t||(Ts(r,l)&&St(o,"get",r),St(o,"get",l));const{has:c}=ea(o),u=e?Jc:t?Zc:Pt;if(c.call(o,r))return u(i.get(r));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&St(ke(r),"iterate",Zs),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=ke(i),l=ke(r);return t||(Ts(r,l)&&St(o,"has",r),St(o,"has",l)),r===l?i.has(r):i.has(r)||i.has(l)},forEach(r,i){const o=this,l=o.__v_raw,c=ke(l),u=e?Jc:t?Zc:Pt;return!t&&St(c,"iterate",Zs),l.forEach((h,d)=>r.call(i,u(h),u(d),o))}};return dt(n,t?{add:ta("add"),set:ta("set"),delete:ta("delete"),clear:ta("clear")}:{add(r){!e&&!sn(r)&&!er(r)&&(r=ke(r));const i=ke(this);return ea(i).has.call(i,r)||(i.add(r),Kn(i,"add",r,r)),this},set(r,i){!e&&!sn(i)&&!er(i)&&(i=ke(i));const o=ke(this),{has:l,get:c}=ea(o);let u=l.call(o,r);u||(r=ke(r),u=l.call(o,r));const h=c.call(o,r);return o.set(r,i),u?Ts(i,h)&&Kn(o,"set",r,i):Kn(o,"add",r,i),this},delete(r){const i=ke(this),{has:o,get:l}=ea(i);let c=o.call(i,r);c||(r=ke(r),c=o.call(i,r)),l&&l.call(i,r);const u=i.delete(r);return c&&Kn(i,"delete",r,void 0),u},clear(){const r=ke(this),i=r.size!==0,o=r.clear();return i&&Kn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=cw(r,t,e)}),n}function ah(t,e){const n=uw(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Oe(n,r)&&r in s?n:s,r,i)}const hw={get:ah(!1,!1)},fw={get:ah(!1,!0)},dw={get:ah(!0,!1)};const Mg=new WeakMap,Lg=new WeakMap,Vg=new WeakMap,pw=new WeakMap;function mw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gw(t){return t.__v_skip||!Object.isExtensible(t)?0:mw($T(t))}function _l(t){return er(t)?t:lh(t,!1,ow,hw,Mg)}function Fg(t){return lh(t,!1,lw,fw,Lg)}function Ug(t){return lh(t,!0,aw,dw,Vg)}function lh(t,e,n,s,r){if(!We(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=gw(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return r.set(t,l),l}function kr(t){return er(t)?kr(t.__v_raw):!!(t&&t.__v_isReactive)}function er(t){return!!(t&&t.__v_isReadonly)}function sn(t){return!!(t&&t.__v_isShallow)}function ch(t){return t?!!t.__v_raw:!1}function ke(t){const e=t&&t.__v_raw;return e?ke(e):t}function _w(t){return!Oe(t,"__v_skip")&&Object.isExtensible(t)&&vg(t,"__v_skip",!0),t}const Pt=t=>We(t)?_l(t):t,Zc=t=>We(t)?Ug(t):t;function Et(t){return t?t.__v_isRef===!0:!1}function $t(t){return $g(t,!1)}function Bg(t){return $g(t,!0)}function $g(t,e){return Et(t)?t:new yw(t,e)}class yw{constructor(e,n){this.dep=new oh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ke(e),this._value=n?e:Pt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||sn(e)||er(e);e=s?e:ke(e),Ts(e,n)&&(this._rawValue=e,this._value=s?e:Pt(e),this.dep.trigger())}}function ft(t){return Et(t)?t.value:t}function Wn(t){return fe(t)?t():ft(t)}const vw={get:(t,e,n)=>e==="__v_raw"?t:ft(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Et(r)&&!Et(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function jg(t){return kr(t)?t:new Proxy(t,vw)}class Ew{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new oh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=so-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&$e!==this)return Cg(this,!0),!0}get value(){const e=this.dep.track();return Pg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Tw(t,e,n=!1){let s,r;return fe(t)?s=t:(s=t.get,r=t.set),new Ew(s,r,n)}const na={},Ra=new WeakMap;let zs;function ww(t,e=!1,n=zs){if(n){let s=Ra.get(n);s||Ra.set(n,s=[]),s.push(t)}}function Iw(t,e,n=Be){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:l,call:c}=n,u=O=>r?O:sn(O)||r===!1||r===0?Gn(O,1):Gn(O);let h,d,m,g,A=!1,S=!1;if(Et(t)?(d=()=>t.value,A=sn(t)):kr(t)?(d=()=>u(t),A=!0):ce(t)?(S=!0,A=t.some(O=>kr(O)||sn(O)),d=()=>t.map(O=>{if(Et(O))return O.value;if(kr(O))return u(O);if(fe(O))return c?c(O,2):O()})):fe(t)?e?d=c?()=>c(t,2):t:d=()=>{if(m){Ls();try{m()}finally{Vs()}}const O=zs;zs=h;try{return c?c(t,3,[g]):t(g)}finally{zs=O}}:d=kn,e&&r){const O=d,ee=r===!0?1/0:r;d=()=>Gn(O(),ee)}const N=Ig(),V=()=>{h.stop(),N&&N.active&&eh(N.effects,h)};if(i&&e){const O=e;e=(...ee)=>{O(...ee),V()}}let F=S?new Array(t.length).fill(na):na;const D=O=>{if(!(!(h.flags&1)||!h.dirty&&!O))if(e){const ee=h.run();if(r||A||(S?ee.some((te,C)=>Ts(te,F[C])):Ts(ee,F))){m&&m();const te=zs;zs=h;try{const C=[ee,F===na?void 0:S&&F[0]===na?[]:F,g];c?c(e,3,C):e(...C),F=ee}finally{zs=te}}}else h.run()};return l&&l(D),h=new bg(d),h.scheduler=o?()=>o(D,!1):D,g=O=>ww(O,!1,h),m=h.onStop=()=>{const O=Ra.get(h);if(O){if(c)c(O,4);else for(const ee of O)ee();Ra.delete(h)}},e?s?D(!0):F=h.run():o?o(D.bind(null,!0),!0):h.run(),V.pause=h.pause.bind(h),V.resume=h.resume.bind(h),V.stop=V,V}function Gn(t,e=1/0,n){if(e<=0||!We(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Et(t))Gn(t.value,e,n);else if(ce(t))for(let s=0;s<t.length;s++)Gn(t[s],e,n);else if(mg(t)||Pr(t))t.forEach(s=>{Gn(s,e,n)});else if(yg(t)){for(const s in t)Gn(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Gn(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function bo(t,e,n,s){try{return s?t(...s):t()}catch(r){yl(r,e,n)}}function gn(t,e,n,s){if(fe(t)){const r=bo(t,e,n,s);return r&&gg(r)&&r.catch(i=>{yl(i,e,n)}),r}if(ce(t)){const r=[];for(let i=0;i<t.length;i++)r.push(gn(t[i],e,n,s));return r}}function yl(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Be;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const h=l.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,c,u)===!1)return}l=l.parent}if(i){Ls(),bo(i,null,10,[t,c,u]),Vs();return}}bw(t,n,r,s,o)}function bw(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const Vt=[];let bn=-1;const Nr=[];let ms=null,vr=0;const qg=Promise.resolve();let Sa=null;function Hg(t){const e=Sa||qg;return t?e.then(this?t.bind(this):t):e}function Aw(t){let e=bn+1,n=Vt.length;for(;e<n;){const s=e+n>>>1,r=Vt[s],i=io(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function uh(t){if(!(t.flags&1)){const e=io(t),n=Vt[Vt.length-1];!n||!(t.flags&2)&&e>=io(n)?Vt.push(t):Vt.splice(Aw(e),0,t),t.flags|=1,Wg()}}function Wg(){Sa||(Sa=qg.then(Kg))}function Cw(t){ce(t)?Nr.push(...t):ms&&t.id===-1?ms.splice(vr+1,0,t):t.flags&1||(Nr.push(t),t.flags|=1),Wg()}function Ed(t,e,n=bn+1){for(;n<Vt.length;n++){const s=Vt[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Vt.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function zg(t){if(Nr.length){const e=[...new Set(Nr)].sort((n,s)=>io(n)-io(s));if(Nr.length=0,ms){ms.push(...e);return}for(ms=e,vr=0;vr<ms.length;vr++){const n=ms[vr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ms=null,vr=0}}const io=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Kg(t){try{for(bn=0;bn<Vt.length;bn++){const e=Vt[bn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),bo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;bn<Vt.length;bn++){const e=Vt[bn];e&&(e.flags&=-2)}bn=-1,Vt.length=0,zg(),Sa=null,(Vt.length||Nr.length)&&Kg()}}let jt=null,Gg=null;function Pa(t){const e=jt;return jt=t,Gg=t&&t.type.__scopeId||null,e}function $i(t,e=jt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Nd(-1);const i=Pa(e);let o;try{o=t(...r)}finally{Pa(i),s._d&&Nd(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Qg(t,e){if(jt===null)return t;const n=Il(jt),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,l,c=Be]=e[r];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&Gn(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function js(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const l=r[o];i&&(l.oldValue=i[o].value);let c=l.dir[s];c&&(Ls(),gn(c,n,8,[t.el,l,t,e]),Vs())}}const Rw=Symbol("_vte"),Yg=t=>t.__isTeleport,gs=Symbol("_leaveCb"),sa=Symbol("_enterCb");function Sw(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return hh(()=>{t.isMounted=!0}),i_(()=>{t.isUnmounting=!0}),t}const en=[Function,Array],Xg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:en,onEnter:en,onAfterEnter:en,onEnterCancelled:en,onBeforeLeave:en,onLeave:en,onAfterLeave:en,onLeaveCancelled:en,onBeforeAppear:en,onAppear:en,onAfterAppear:en,onAppearCancelled:en},Jg=t=>{const e=t.subTree;return e.component?Jg(e.component):e},Pw={name:"BaseTransition",props:Xg,setup(t,{slots:e}){const n=gh(),s=Sw();return()=>{const r=e.default&&t_(e.default(),!0);if(!r||!r.length)return;const i=Zg(r),o=ke(t),{mode:l}=o;if(s.isLeaving)return gc(i);const c=Td(i);if(!c)return gc(i);let u=eu(c,o,s,n,d=>u=d);c.type!==Bt&&oo(c,u);let h=n.subTree&&Td(n.subTree);if(h&&h.type!==Bt&&!Qs(c,h)&&Jg(n).type!==Bt){let d=eu(h,o,s,n);if(oo(h,d),l==="out-in"&&c.type!==Bt)return s.isLeaving=!0,d.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,h=void 0},gc(i);l==="in-out"&&c.type!==Bt?d.delayLeave=(m,g,A)=>{const S=e_(s,h);S[String(h.key)]=h,m[gs]=()=>{g(),m[gs]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{A(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return i}}};function Zg(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Bt){e=n;break}}return e}const kw=Pw;function e_(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function eu(t,e,n,s,r){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:m,onLeave:g,onAfterLeave:A,onLeaveCancelled:S,onBeforeAppear:N,onAppear:V,onAfterAppear:F,onAppearCancelled:D}=e,O=String(t.key),ee=e_(n,t),te=(v,b)=>{v&&gn(v,s,9,b)},C=(v,b)=>{const R=b[1];te(v,b),ce(v)?v.every(I=>I.length<=1)&&R():v.length<=1&&R()},y={mode:o,persisted:l,beforeEnter(v){let b=c;if(!n.isMounted)if(i)b=N||c;else return;v[gs]&&v[gs](!0);const R=ee[O];R&&Qs(t,R)&&R.el[gs]&&R.el[gs](),te(b,[v])},enter(v){let b=u,R=h,I=d;if(!n.isMounted)if(i)b=V||u,R=F||h,I=D||d;else return;let E=!1;const Ve=v[sa]=it=>{E||(E=!0,it?te(I,[v]):te(R,[v]),y.delayedLeave&&y.delayedLeave(),v[sa]=void 0)};b?C(b,[v,Ve]):Ve()},leave(v,b){const R=String(t.key);if(v[sa]&&v[sa](!0),n.isUnmounting)return b();te(m,[v]);let I=!1;const E=v[gs]=Ve=>{I||(I=!0,b(),Ve?te(S,[v]):te(A,[v]),v[gs]=void 0,ee[R]===t&&delete ee[R])};ee[R]=t,g?C(g,[v,E]):E()},clone(v){const b=eu(v,e,n,s,r);return r&&r(b),b}};return y}function gc(t){if(vl(t))return t=Ss(t),t.children=null,t}function Td(t){if(!vl(t))return Yg(t.type)&&t.children?Zg(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&fe(n.default))return n.default()}}function oo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,oo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function t_(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===tt?(o.patchFlag&128&&r++,s=s.concat(t_(o.children,e,l))):(e||o.type!==Bt)&&s.push(l!=null?Ss(o,{key:l}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function n_(t,e){return fe(t)?dt({name:t.name},e,{setup:t}):t}function s_(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ka(t,e,n,s,r=!1){if(ce(t)){t.forEach((A,S)=>ka(A,e&&(ce(e)?e[S]:e),n,s,r));return}if(ji(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&ka(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?Il(s.component):s.el,o=r?null:i,{i:l,r:c}=t,u=e&&e.r,h=l.refs===Be?l.refs={}:l.refs,d=l.setupState,m=ke(d),g=d===Be?()=>!1:A=>Oe(m,A);if(u!=null&&u!==c&&(Je(u)?(h[u]=null,g(u)&&(d[u]=null)):Et(u)&&(u.value=null)),fe(c))bo(c,l,12,[o,h]);else{const A=Je(c),S=Et(c);if(A||S){const N=()=>{if(t.f){const V=A?g(c)?d[c]:h[c]:c.value;r?ce(V)&&eh(V,i):ce(V)?V.includes(i)||V.push(i):A?(h[c]=[i],g(c)&&(d[c]=h[c])):(c.value=[i],t.k&&(h[t.k]=c.value))}else A?(h[c]=o,g(c)&&(d[c]=o)):S&&(c.value=o,t.k&&(h[t.k]=o))};o?(N.id=-1,zt(N,n)):N()}}}ml().requestIdleCallback;ml().cancelIdleCallback;const ji=t=>!!t.type.__asyncLoader,vl=t=>t.type.__isKeepAlive;function Nw(t,e){r_(t,"a",e)}function xw(t,e){r_(t,"da",e)}function r_(t,e,n=_t){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(El(e,s,n),n){let r=n.parent;for(;r&&r.parent;)vl(r.parent.vnode)&&Dw(s,e,n,r),r=r.parent}}function Dw(t,e,n,s){const r=El(e,t,s,!0);fh(()=>{eh(s[e],r)},n)}function El(t,e,n=_t,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Ls();const l=Ao(n),c=gn(e,n,t,o);return l(),Vs(),c});return s?r.unshift(i):r.push(i),i}}const ss=t=>(e,n=_t)=>{(!co||t==="sp")&&El(t,(...s)=>e(...s),n)},Ow=ss("bm"),hh=ss("m"),Mw=ss("bu"),Lw=ss("u"),i_=ss("bum"),fh=ss("um"),o_=ss("sp"),Vw=ss("rtg"),Fw=ss("rtc");function Uw(t,e=_t){El("ec",t,e)}const a_="components";function Bw(t,e){return c_(a_,t,!0,e)||t}const l_=Symbol.for("v-ndc");function $w(t){return Je(t)?c_(a_,t,!1)||t:t||l_}function c_(t,e,n=!0,s=!1){const r=jt||_t;if(r){const i=r.type;{const l=RI(i,!1);if(l&&(l===e||l===rn(e)||l===pl(rn(e))))return i}const o=wd(r[t]||i[t],e)||wd(r.appContext[t],e);return!o&&s?i:o}}function wd(t,e){return t&&(t[e]||t[rn(e)]||t[pl(rn(e))])}function Dn(t,e,n,s){let r;const i=n,o=ce(t);if(o||Je(t)){const l=o&&kr(t);let c=!1;l&&(c=!sn(t),t=gl(t)),r=new Array(t.length);for(let u=0,h=t.length;u<h;u++)r[u]=e(c?Pt(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let l=0;l<t;l++)r[l]=e(l+1,l,void 0,i)}else if(We(t))if(t[Symbol.iterator])r=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);r=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const h=l[c];r[c]=e(t[h],h,c,i)}}else r=[];return r}const tu=t=>t?k_(t)?Il(t):tu(t.parent):null,qi=dt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>tu(t.parent),$root:t=>tu(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>h_(t),$forceUpdate:t=>t.f||(t.f=()=>{uh(t.update)}),$nextTick:t=>t.n||(t.n=Hg.bind(t.proxy)),$watch:t=>lI.bind(t)}),_c=(t,e)=>t!==Be&&!t.__isScriptSetup&&Oe(t,e),jw={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(_c(s,e))return o[e]=1,s[e];if(r!==Be&&Oe(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&Oe(u,e))return o[e]=3,i[e];if(n!==Be&&Oe(n,e))return o[e]=4,n[e];nu&&(o[e]=0)}}const h=qi[e];let d,m;if(h)return e==="$attrs"&&St(t.attrs,"get",""),h(t);if((d=l.__cssModules)&&(d=d[e]))return d;if(n!==Be&&Oe(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,Oe(m,e))return m[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return _c(r,e)?(r[e]=n,!0):s!==Be&&Oe(s,e)?(s[e]=n,!0):Oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let l;return!!n[o]||t!==Be&&Oe(t,o)||_c(e,o)||(l=i[0])&&Oe(l,o)||Oe(s,o)||Oe(qi,o)||Oe(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Id(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let nu=!0;function qw(t){const e=h_(t),n=t.proxy,s=t.ctx;nu=!1,e.beforeCreate&&bd(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:l,provide:c,inject:u,created:h,beforeMount:d,mounted:m,beforeUpdate:g,updated:A,activated:S,deactivated:N,beforeDestroy:V,beforeUnmount:F,destroyed:D,unmounted:O,render:ee,renderTracked:te,renderTriggered:C,errorCaptured:y,serverPrefetch:v,expose:b,inheritAttrs:R,components:I,directives:E,filters:Ve}=e;if(u&&Hw(u,s,null),o)for(const we in o){const ge=o[we];fe(ge)&&(s[we]=ge.bind(n))}if(r){const we=r.call(n,n);We(we)&&(t.data=_l(we))}if(nu=!0,i)for(const we in i){const ge=i[we],Ht=fe(ge)?ge.bind(n,n):fe(ge.get)?ge.get.bind(n,n):kn,an=!fe(ge)&&fe(ge.set)?ge.set.bind(n):kn,Xt=cn({get:Ht,set:an});Object.defineProperty(s,we,{enumerable:!0,configurable:!0,get:()=>Xt.value,set:Qe=>Xt.value=Qe})}if(l)for(const we in l)u_(l[we],s,n,we);if(c){const we=fe(c)?c.call(n):c;Reflect.ownKeys(we).forEach(ge=>{ga(ge,we[ge])})}h&&bd(h,t,"c");function Ge(we,ge){ce(ge)?ge.forEach(Ht=>we(Ht.bind(n))):ge&&we(ge.bind(n))}if(Ge(Ow,d),Ge(hh,m),Ge(Mw,g),Ge(Lw,A),Ge(Nw,S),Ge(xw,N),Ge(Uw,y),Ge(Fw,te),Ge(Vw,C),Ge(i_,F),Ge(fh,O),Ge(o_,v),ce(b))if(b.length){const we=t.exposed||(t.exposed={});b.forEach(ge=>{Object.defineProperty(we,ge,{get:()=>n[ge],set:Ht=>n[ge]=Ht})})}else t.exposed||(t.exposed={});ee&&t.render===kn&&(t.render=ee),R!=null&&(t.inheritAttrs=R),I&&(t.components=I),E&&(t.directives=E),v&&s_(t)}function Hw(t,e,n=kn){ce(t)&&(t=su(t));for(const s in t){const r=t[s];let i;We(r)?"default"in r?i=pn(r.from||s,r.default,!0):i=pn(r.from||s):i=pn(r),Et(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function bd(t,e,n){gn(ce(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function u_(t,e,n,s){let r=s.includes(".")?A_(n,s):()=>n[s];if(Je(t)){const i=e[t];fe(i)&&Dr(r,i)}else if(fe(t))Dr(r,t.bind(n));else if(We(t))if(ce(t))t.forEach(i=>u_(i,e,n,s));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&Dr(r,i,t)}}function h_(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>Na(c,u,o,!0)),Na(c,e,o)),We(e)&&i.set(e,c),c}function Na(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Na(t,i,n,!0),r&&r.forEach(o=>Na(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Ww[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Ww={data:Ad,props:Cd,emits:Cd,methods:Ni,computed:Ni,beforeCreate:Mt,created:Mt,beforeMount:Mt,mounted:Mt,beforeUpdate:Mt,updated:Mt,beforeDestroy:Mt,beforeUnmount:Mt,destroyed:Mt,unmounted:Mt,activated:Mt,deactivated:Mt,errorCaptured:Mt,serverPrefetch:Mt,components:Ni,directives:Ni,watch:Kw,provide:Ad,inject:zw};function Ad(t,e){return e?t?function(){return dt(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function zw(t,e){return Ni(su(t),su(e))}function su(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Mt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ni(t,e){return t?dt(Object.create(null),t,e):e}function Cd(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:dt(Object.create(null),Id(t),Id(e??{})):e}function Kw(t,e){if(!t)return e;if(!e)return t;const n=dt(Object.create(null),t);for(const s in e)n[s]=Mt(t[s],e[s]);return n}function f_(){return{app:null,config:{isNativeTag:UT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Gw=0;function Qw(t,e){return function(s,r=null){fe(s)||(s=dt({},s)),r!=null&&!We(r)&&(r=null);const i=f_(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:Gw++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:PI,get config(){return i.config},set config(h){},use(h,...d){return o.has(h)||(h&&fe(h.install)?(o.add(h),h.install(u,...d)):fe(h)&&(o.add(h),h(u,...d))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,d){return d?(i.components[h]=d,u):i.components[h]},directive(h,d){return d?(i.directives[h]=d,u):i.directives[h]},mount(h,d,m){if(!c){const g=u._ceVNode||ye(s,r);return g.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(g,h,m),c=!0,u._container=h,h.__vue_app__=u,Il(g.component)}},onUnmount(h){l.push(h)},unmount(){c&&(gn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,d){return i.provides[h]=d,u},runWithContext(h){const d=xr;xr=u;try{return h()}finally{xr=d}}};return u}}let xr=null;function ga(t,e){if(_t){let n=_t.provides;const s=_t.parent&&_t.parent.provides;s===n&&(n=_t.provides=Object.create(s)),n[t]=e}}function pn(t,e,n=!1){const s=_t||jt;if(s||xr){const r=xr?xr._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&fe(e)?e.call(s&&s.proxy):e}}const d_={},p_=()=>Object.create(d_),m_=t=>Object.getPrototypeOf(t)===d_;function Yw(t,e,n,s=!1){const r={},i=p_();t.propsDefaults=Object.create(null),g_(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Fg(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Xw(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,l=ke(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let d=0;d<h.length;d++){let m=h[d];if(Tl(t.emitsOptions,m))continue;const g=e[m];if(c)if(Oe(i,m))g!==i[m]&&(i[m]=g,u=!0);else{const A=rn(m);r[A]=ru(c,l,A,g,t,!1)}else g!==i[m]&&(i[m]=g,u=!0)}}}else{g_(t,e,r,i)&&(u=!0);let h;for(const d in l)(!e||!Oe(e,d)&&((h=or(d))===d||!Oe(e,h)))&&(c?n&&(n[d]!==void 0||n[h]!==void 0)&&(r[d]=ru(c,l,d,void 0,t,!0)):delete r[d]);if(i!==l)for(const d in i)(!e||!Oe(e,d))&&(delete i[d],u=!0)}u&&Kn(t.attrs,"set","")}function g_(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Fi(c))continue;const u=e[c];let h;r&&Oe(r,h=rn(c))?!i||!i.includes(h)?n[h]=u:(l||(l={}))[h]=u:Tl(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=ke(n),u=l||Be;for(let h=0;h<i.length;h++){const d=i[h];n[d]=ru(r,c,d,u[d],t,!Oe(u,d))}}return o}function ru(t,e,n,s,r,i){const o=t[n];if(o!=null){const l=Oe(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&fe(c)){const{propsDefaults:u}=r;if(n in u)s=u[n];else{const h=Ao(r);s=u[n]=c.call(null,e),h()}}else s=c;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!l?s=!1:o[1]&&(s===""||s===or(n))&&(s=!0))}return s}const Jw=new WeakMap;function __(t,e,n=!1){const s=n?Jw:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},l=[];let c=!1;if(!fe(t)){const h=d=>{c=!0;const[m,g]=__(d,e,!0);dt(o,m),g&&l.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!c)return We(t)&&s.set(t,Sr),Sr;if(ce(i))for(let h=0;h<i.length;h++){const d=rn(i[h]);Rd(d)&&(o[d]=Be)}else if(i)for(const h in i){const d=rn(h);if(Rd(d)){const m=i[h],g=o[d]=ce(m)||fe(m)?{type:m}:dt({},m),A=g.type;let S=!1,N=!0;if(ce(A))for(let V=0;V<A.length;++V){const F=A[V],D=fe(F)&&F.name;if(D==="Boolean"){S=!0;break}else D==="String"&&(N=!1)}else S=fe(A)&&A.name==="Boolean";g[0]=S,g[1]=N,(S||Oe(g,"default"))&&l.push(d)}}const u=[o,l];return We(t)&&s.set(t,u),u}function Rd(t){return t[0]!=="$"&&!Fi(t)}const y_=t=>t[0]==="_"||t==="$stable",dh=t=>ce(t)?t.map(Cn):[Cn(t)],Zw=(t,e,n)=>{if(e._n)return e;const s=$i((...r)=>dh(e(...r)),n);return s._c=!1,s},v_=(t,e,n)=>{const s=t._ctx;for(const r in t){if(y_(r))continue;const i=t[r];if(fe(i))e[r]=Zw(r,i,s);else if(i!=null){const o=dh(i);e[r]=()=>o}}},E_=(t,e)=>{const n=dh(e);t.slots.default=()=>n},T_=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},eI=(t,e,n)=>{const s=t.slots=p_();if(t.vnode.shapeFlag&32){const r=e._;r?(T_(s,e,n),n&&vg(s,"_",r,!0)):v_(e,s)}else e&&E_(t,e)},tI=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Be;if(s.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:T_(r,e,n):(i=!e.$stable,v_(e,r)),o=e}else e&&(E_(t,e),o={default:1});if(i)for(const l in r)!y_(l)&&o[l]==null&&delete r[l]},zt=mI;function nI(t){return sI(t)}function sI(t,e){const n=ml();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:h,parentNode:d,nextSibling:m,setScopeId:g=kn,insertStaticContent:A}=t,S=(T,w,P,L=null,$=null,U=null,G=void 0,z=null,W=!!w.dynamicChildren)=>{if(T===w)return;T&&!Qs(T,w)&&(L=M(T),Qe(T,$,U,!0),T=null),w.patchFlag===-2&&(W=!1,w.dynamicChildren=null);const{type:H,ref:oe,shapeFlag:X}=w;switch(H){case wl:N(T,w,P,L);break;case Bt:V(T,w,P,L);break;case vc:T==null&&F(w,P,L,G);break;case tt:I(T,w,P,L,$,U,G,z,W);break;default:X&1?ee(T,w,P,L,$,U,G,z,W):X&6?E(T,w,P,L,$,U,G,z,W):(X&64||X&128)&&H.process(T,w,P,L,$,U,G,z,W,ne)}oe!=null&&$&&ka(oe,T&&T.ref,U,w||T,!w)},N=(T,w,P,L)=>{if(T==null)s(w.el=l(w.children),P,L);else{const $=w.el=T.el;w.children!==T.children&&u($,w.children)}},V=(T,w,P,L)=>{T==null?s(w.el=c(w.children||""),P,L):w.el=T.el},F=(T,w,P,L)=>{[T.el,T.anchor]=A(T.children,w,P,L,T.el,T.anchor)},D=({el:T,anchor:w},P,L)=>{let $;for(;T&&T!==w;)$=m(T),s(T,P,L),T=$;s(w,P,L)},O=({el:T,anchor:w})=>{let P;for(;T&&T!==w;)P=m(T),r(T),T=P;r(w)},ee=(T,w,P,L,$,U,G,z,W)=>{w.type==="svg"?G="svg":w.type==="math"&&(G="mathml"),T==null?te(w,P,L,$,U,G,z,W):v(T,w,$,U,G,z,W)},te=(T,w,P,L,$,U,G,z)=>{let W,H;const{props:oe,shapeFlag:X,transition:se,dirs:le}=T;if(W=T.el=o(T.type,U,oe&&oe.is,oe),X&8?h(W,T.children):X&16&&y(T.children,W,null,L,$,yc(T,U),G,z),le&&js(T,null,L,"created"),C(W,T,T.scopeId,G,L),oe){for(const pe in oe)pe!=="value"&&!Fi(pe)&&i(W,pe,null,oe[pe],U,L);"value"in oe&&i(W,"value",null,oe.value,U),(H=oe.onVnodeBeforeMount)&&In(H,L,T)}le&&js(T,null,L,"beforeMount");const ae=rI($,se);ae&&se.beforeEnter(W),s(W,w,P),((H=oe&&oe.onVnodeMounted)||ae||le)&&zt(()=>{H&&In(H,L,T),ae&&se.enter(W),le&&js(T,null,L,"mounted")},$)},C=(T,w,P,L,$)=>{if(P&&g(T,P),L)for(let U=0;U<L.length;U++)g(T,L[U]);if($){let U=$.subTree;if(w===U||R_(U.type)&&(U.ssContent===w||U.ssFallback===w)){const G=$.vnode;C(T,G,G.scopeId,G.slotScopeIds,$.parent)}}},y=(T,w,P,L,$,U,G,z,W=0)=>{for(let H=W;H<T.length;H++){const oe=T[H]=z?_s(T[H]):Cn(T[H]);S(null,oe,w,P,L,$,U,G,z)}},v=(T,w,P,L,$,U,G)=>{const z=w.el=T.el;let{patchFlag:W,dynamicChildren:H,dirs:oe}=w;W|=T.patchFlag&16;const X=T.props||Be,se=w.props||Be;let le;if(P&&qs(P,!1),(le=se.onVnodeBeforeUpdate)&&In(le,P,w,T),oe&&js(w,T,P,"beforeUpdate"),P&&qs(P,!0),(X.innerHTML&&se.innerHTML==null||X.textContent&&se.textContent==null)&&h(z,""),H?b(T.dynamicChildren,H,z,P,L,yc(w,$),U):G||ge(T,w,z,null,P,L,yc(w,$),U,!1),W>0){if(W&16)R(z,X,se,P,$);else if(W&2&&X.class!==se.class&&i(z,"class",null,se.class,$),W&4&&i(z,"style",X.style,se.style,$),W&8){const ae=w.dynamicProps;for(let pe=0;pe<ae.length;pe++){const Ie=ae[pe],wt=X[Ie],pt=se[Ie];(pt!==wt||Ie==="value")&&i(z,Ie,wt,pt,$,P)}}W&1&&T.children!==w.children&&h(z,w.children)}else!G&&H==null&&R(z,X,se,P,$);((le=se.onVnodeUpdated)||oe)&&zt(()=>{le&&In(le,P,w,T),oe&&js(w,T,P,"updated")},L)},b=(T,w,P,L,$,U,G)=>{for(let z=0;z<w.length;z++){const W=T[z],H=w[z],oe=W.el&&(W.type===tt||!Qs(W,H)||W.shapeFlag&70)?d(W.el):P;S(W,H,oe,null,L,$,U,G,!0)}},R=(T,w,P,L,$)=>{if(w!==P){if(w!==Be)for(const U in w)!Fi(U)&&!(U in P)&&i(T,U,w[U],null,$,L);for(const U in P){if(Fi(U))continue;const G=P[U],z=w[U];G!==z&&U!=="value"&&i(T,U,z,G,$,L)}"value"in P&&i(T,"value",w.value,P.value,$)}},I=(T,w,P,L,$,U,G,z,W)=>{const H=w.el=T?T.el:l(""),oe=w.anchor=T?T.anchor:l("");let{patchFlag:X,dynamicChildren:se,slotScopeIds:le}=w;le&&(z=z?z.concat(le):le),T==null?(s(H,P,L),s(oe,P,L),y(w.children||[],P,oe,$,U,G,z,W)):X>0&&X&64&&se&&T.dynamicChildren?(b(T.dynamicChildren,se,P,$,U,G,z),(w.key!=null||$&&w===$.subTree)&&w_(T,w,!0)):ge(T,w,P,oe,$,U,G,z,W)},E=(T,w,P,L,$,U,G,z,W)=>{w.slotScopeIds=z,T==null?w.shapeFlag&512?$.ctx.activate(w,P,L,G,W):Ve(w,P,L,$,U,G,W):it(T,w,W)},Ve=(T,w,P,L,$,U,G)=>{const z=T.component=wI(T,L,$);if(vl(T)&&(z.ctx.renderer=ne),II(z,!1,G),z.asyncDep){if($&&$.registerDep(z,Ge,G),!T.el){const W=z.subTree=ye(Bt);V(null,W,w,P)}}else Ge(z,T,w,P,$,U,G)},it=(T,w,P)=>{const L=w.component=T.component;if(dI(T,w,P))if(L.asyncDep&&!L.asyncResolved){we(L,w,P);return}else L.next=w,L.update();else w.el=T.el,L.vnode=w},Ge=(T,w,P,L,$,U,G)=>{const z=()=>{if(T.isMounted){let{next:X,bu:se,u:le,parent:ae,vnode:pe}=T;{const It=I_(T);if(It){X&&(X.el=pe.el,we(T,X,G)),It.asyncDep.then(()=>{T.isUnmounted||z()});return}}let Ie=X,wt;qs(T,!1),X?(X.el=pe.el,we(T,X,G)):X=pe,se&&ma(se),(wt=X.props&&X.props.onVnodeBeforeUpdate)&&In(wt,ae,X,pe),qs(T,!0);const pt=Pd(T),Jt=T.subTree;T.subTree=pt,S(Jt,pt,d(Jt.el),M(Jt),T,$,U),X.el=pt.el,Ie===null&&pI(T,pt.el),le&&zt(le,$),(wt=X.props&&X.props.onVnodeUpdated)&&zt(()=>In(wt,ae,X,pe),$)}else{let X;const{el:se,props:le}=w,{bm:ae,m:pe,parent:Ie,root:wt,type:pt}=T,Jt=ji(w);qs(T,!1),ae&&ma(ae),!Jt&&(X=le&&le.onVnodeBeforeMount)&&In(X,Ie,w),qs(T,!0);{wt.ce&&wt.ce._injectChildStyle(pt);const It=T.subTree=Pd(T);S(null,It,P,L,T,$,U),w.el=It.el}if(pe&&zt(pe,$),!Jt&&(X=le&&le.onVnodeMounted)){const It=w;zt(()=>In(X,Ie,It),$)}(w.shapeFlag&256||Ie&&ji(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&T.a&&zt(T.a,$),T.isMounted=!0,w=P=L=null}};T.scope.on();const W=T.effect=new bg(z);T.scope.off();const H=T.update=W.run.bind(W),oe=T.job=W.runIfDirty.bind(W);oe.i=T,oe.id=T.uid,W.scheduler=()=>uh(oe),qs(T,!0),H()},we=(T,w,P)=>{w.component=T;const L=T.vnode.props;T.vnode=w,T.next=null,Xw(T,w.props,L,P),tI(T,w.children,P),Ls(),Ed(T),Vs()},ge=(T,w,P,L,$,U,G,z,W=!1)=>{const H=T&&T.children,oe=T?T.shapeFlag:0,X=w.children,{patchFlag:se,shapeFlag:le}=w;if(se>0){if(se&128){an(H,X,P,L,$,U,G,z,W);return}else if(se&256){Ht(H,X,P,L,$,U,G,z,W);return}}le&8?(oe&16&&Ft(H,$,U),X!==H&&h(P,X)):oe&16?le&16?an(H,X,P,L,$,U,G,z,W):Ft(H,$,U,!0):(oe&8&&h(P,""),le&16&&y(X,P,L,$,U,G,z,W))},Ht=(T,w,P,L,$,U,G,z,W)=>{T=T||Sr,w=w||Sr;const H=T.length,oe=w.length,X=Math.min(H,oe);let se;for(se=0;se<X;se++){const le=w[se]=W?_s(w[se]):Cn(w[se]);S(T[se],le,P,null,$,U,G,z,W)}H>oe?Ft(T,$,U,!0,!1,X):y(w,P,L,$,U,G,z,W,X)},an=(T,w,P,L,$,U,G,z,W)=>{let H=0;const oe=w.length;let X=T.length-1,se=oe-1;for(;H<=X&&H<=se;){const le=T[H],ae=w[H]=W?_s(w[H]):Cn(w[H]);if(Qs(le,ae))S(le,ae,P,null,$,U,G,z,W);else break;H++}for(;H<=X&&H<=se;){const le=T[X],ae=w[se]=W?_s(w[se]):Cn(w[se]);if(Qs(le,ae))S(le,ae,P,null,$,U,G,z,W);else break;X--,se--}if(H>X){if(H<=se){const le=se+1,ae=le<oe?w[le].el:L;for(;H<=se;)S(null,w[H]=W?_s(w[H]):Cn(w[H]),P,ae,$,U,G,z,W),H++}}else if(H>se)for(;H<=X;)Qe(T[H],$,U,!0),H++;else{const le=H,ae=H,pe=new Map;for(H=ae;H<=se;H++){const mt=w[H]=W?_s(w[H]):Cn(w[H]);mt.key!=null&&pe.set(mt.key,H)}let Ie,wt=0;const pt=se-ae+1;let Jt=!1,It=0;const ls=new Array(pt);for(H=0;H<pt;H++)ls[H]=0;for(H=le;H<=X;H++){const mt=T[H];if(wt>=pt){Qe(mt,$,U,!0);continue}let Zt;if(mt.key!=null)Zt=pe.get(mt.key);else for(Ie=ae;Ie<=se;Ie++)if(ls[Ie-ae]===0&&Qs(mt,w[Ie])){Zt=Ie;break}Zt===void 0?Qe(mt,$,U,!0):(ls[Zt-ae]=H+1,Zt>=It?It=Zt:Jt=!0,S(mt,w[Zt],P,null,$,U,G,z,W),wt++)}const ci=Jt?iI(ls):Sr;for(Ie=ci.length-1,H=pt-1;H>=0;H--){const mt=ae+H,Zt=w[mt],Fo=mt+1<oe?w[mt+1].el:L;ls[H]===0?S(null,Zt,P,Fo,$,U,G,z,W):Jt&&(Ie<0||H!==ci[Ie]?Xt(Zt,P,Fo,2):Ie--)}}},Xt=(T,w,P,L,$=null)=>{const{el:U,type:G,transition:z,children:W,shapeFlag:H}=T;if(H&6){Xt(T.component.subTree,w,P,L);return}if(H&128){T.suspense.move(w,P,L);return}if(H&64){G.move(T,w,P,ne);return}if(G===tt){s(U,w,P);for(let X=0;X<W.length;X++)Xt(W[X],w,P,L);s(T.anchor,w,P);return}if(G===vc){D(T,w,P);return}if(L!==2&&H&1&&z)if(L===0)z.beforeEnter(U),s(U,w,P),zt(()=>z.enter(U),$);else{const{leave:X,delayLeave:se,afterLeave:le}=z,ae=()=>s(U,w,P),pe=()=>{X(U,()=>{ae(),le&&le()})};se?se(U,ae,pe):pe()}else s(U,w,P)},Qe=(T,w,P,L=!1,$=!1)=>{const{type:U,props:G,ref:z,children:W,dynamicChildren:H,shapeFlag:oe,patchFlag:X,dirs:se,cacheIndex:le}=T;if(X===-2&&($=!1),z!=null&&ka(z,null,P,T,!0),le!=null&&(w.renderCache[le]=void 0),oe&256){w.ctx.deactivate(T);return}const ae=oe&1&&se,pe=!ji(T);let Ie;if(pe&&(Ie=G&&G.onVnodeBeforeUnmount)&&In(Ie,w,T),oe&6)wn(T.component,P,L);else{if(oe&128){T.suspense.unmount(P,L);return}ae&&js(T,null,w,"beforeUnmount"),oe&64?T.type.remove(T,w,P,ne,L):H&&!H.hasOnce&&(U!==tt||X>0&&X&64)?Ft(H,w,P,!1,!0):(U===tt&&X&384||!$&&oe&16)&&Ft(W,w,P),L&&Ye(T)}(pe&&(Ie=G&&G.onVnodeUnmounted)||ae)&&zt(()=>{Ie&&In(Ie,w,T),ae&&js(T,null,w,"unmounted")},P)},Ye=T=>{const{type:w,el:P,anchor:L,transition:$}=T;if(w===tt){as(P,L);return}if(w===vc){O(T);return}const U=()=>{r(P),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(T.shapeFlag&1&&$&&!$.persisted){const{leave:G,delayLeave:z}=$,W=()=>G(P,U);z?z(T.el,U,W):W()}else U()},as=(T,w)=>{let P;for(;T!==w;)P=m(T),r(T),T=P;r(w)},wn=(T,w,P)=>{const{bum:L,scope:$,job:U,subTree:G,um:z,m:W,a:H}=T;Sd(W),Sd(H),L&&ma(L),$.stop(),U&&(U.flags|=8,Qe(G,T,w,P)),z&&zt(z,w),zt(()=>{T.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},Ft=(T,w,P,L=!1,$=!1,U=0)=>{for(let G=U;G<T.length;G++)Qe(T[G],w,P,L,$)},M=T=>{if(T.shapeFlag&6)return M(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const w=m(T.anchor||T.el),P=w&&w[Rw];return P?m(P):w};let J=!1;const Y=(T,w,P)=>{T==null?w._vnode&&Qe(w._vnode,null,null,!0):S(w._vnode||null,T,w,null,null,null,P),w._vnode=T,J||(J=!0,Ed(),zg(),J=!1)},ne={p:S,um:Qe,m:Xt,r:Ye,mt:Ve,mc:y,pc:ge,pbc:b,n:M,o:t};return{render:Y,hydrate:void 0,createApp:Qw(Y)}}function yc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function qs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function rI(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function w_(t,e,n=!1){const s=t.children,r=e.children;if(ce(s)&&ce(r))for(let i=0;i<s.length;i++){const o=s[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=_s(r[i]),l.el=o.el),!n&&l.patchFlag!==-2&&w_(o,l)),l.type===wl&&(l.el=o.el)}}function iI(t){const e=t.slice(),n=[0];let s,r,i,o,l;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function I_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:I_(e)}function Sd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const oI=Symbol.for("v-scx"),aI=()=>pn(oI);function Dr(t,e,n){return b_(t,e,n)}function b_(t,e,n=Be){const{immediate:s,deep:r,flush:i,once:o}=n,l=dt({},n),c=e&&s||!e&&i!=="post";let u;if(co){if(i==="sync"){const g=aI();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=kn,g.resume=kn,g.pause=kn,g}}const h=_t;l.call=(g,A,S)=>gn(g,h,A,S);let d=!1;i==="post"?l.scheduler=g=>{zt(g,h&&h.suspense)}:i!=="sync"&&(d=!0,l.scheduler=(g,A)=>{A?g():uh(g)}),l.augmentJob=g=>{e&&(g.flags|=4),d&&(g.flags|=2,h&&(g.id=h.uid,g.i=h))};const m=Iw(t,e,l);return co&&(u?u.push(m):c&&m()),m}function lI(t,e,n){const s=this.proxy,r=Je(t)?t.includes(".")?A_(s,t):()=>s[t]:t.bind(s,s);let i;fe(e)?i=e:(i=e.handler,n=e);const o=Ao(this),l=b_(r,i.bind(s),n);return o(),l}function A_(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const cI=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${rn(e)}Modifiers`]||t[`${or(e)}Modifiers`];function uI(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Be;let r=n;const i=e.startsWith("update:"),o=i&&cI(s,e.slice(7));o&&(o.trim&&(r=n.map(h=>Je(h)?h.trim():h)),o.number&&(r=n.map(Gc)));let l,c=s[l=hc(e)]||s[l=hc(rn(e))];!c&&i&&(c=s[l=hc(or(e))]),c&&gn(c,t,6,r);const u=s[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,gn(u,t,6,r)}}function C_(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},l=!1;if(!fe(t)){const c=u=>{const h=C_(u,e,!0);h&&(l=!0,dt(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(We(t)&&s.set(t,null),null):(ce(i)?i.forEach(c=>o[c]=null):dt(o,i),We(t)&&s.set(t,o),o)}function Tl(t,e){return!t||!hl(e)?!1:(e=e.slice(2).replace(/Once$/,""),Oe(t,e[0].toLowerCase()+e.slice(1))||Oe(t,or(e))||Oe(t,e))}function Pd(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:h,props:d,data:m,setupState:g,ctx:A,inheritAttrs:S}=t,N=Pa(t);let V,F;try{if(n.shapeFlag&4){const O=r||s,ee=O;V=Cn(u.call(ee,O,h,d,g,m,A)),F=l}else{const O=e;V=Cn(O.length>1?O(d,{attrs:l,slots:o,emit:c}):O(d,null)),F=e.props?l:hI(l)}}catch(O){Hi.length=0,yl(O,t,1),V=ye(Bt)}let D=V;if(F&&S!==!1){const O=Object.keys(F),{shapeFlag:ee}=D;O.length&&ee&7&&(i&&O.some(Zu)&&(F=fI(F,i)),D=Ss(D,F,!1,!0))}return n.dirs&&(D=Ss(D,null,!1,!0),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&oo(D,n.transition),V=D,Pa(N),V}const hI=t=>{let e;for(const n in t)(n==="class"||n==="style"||hl(n))&&((e||(e={}))[n]=t[n]);return e},fI=(t,e)=>{const n={};for(const s in t)(!Zu(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function dI(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?kd(s,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const m=h[d];if(o[m]!==s[m]&&!Tl(u,m))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?kd(s,o,u):!0:!!o;return!1}function kd(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Tl(n,i))return!0}return!1}function pI({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const R_=t=>t.__isSuspense;function mI(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):Cw(t)}const tt=Symbol.for("v-fgt"),wl=Symbol.for("v-txt"),Bt=Symbol.for("v-cmt"),vc=Symbol.for("v-stc"),Hi=[];let Kt=null;function _e(t=!1){Hi.push(Kt=t?null:[])}function gI(){Hi.pop(),Kt=Hi[Hi.length-1]||null}let ao=1;function Nd(t,e=!1){ao+=t,t<0&&Kt&&e&&(Kt.hasOnce=!0)}function S_(t){return t.dynamicChildren=ao>0?Kt||Sr:null,gI(),ao>0&&Kt&&Kt.push(t),t}function xe(t,e,n,s,r,i){return S_(j(t,e,n,s,r,i,!0))}function lo(t,e,n,s,r){return S_(ye(t,e,n,s,r,!0))}function xa(t){return t?t.__v_isVNode===!0:!1}function Qs(t,e){return t.type===e.type&&t.key===e.key}const P_=({key:t})=>t??null,_a=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Je(t)||Et(t)||fe(t)?{i:jt,r:t,k:e,f:!!n}:t:null);function j(t,e=null,n=null,s=0,r=null,i=t===tt?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&P_(e),ref:e&&_a(e),scopeId:Gg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:jt};return l?(mh(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Je(n)?8:16),ao>0&&!o&&Kt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Kt.push(c),c}const ye=_I;function _I(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===l_)&&(t=Bt),xa(t)){const l=Ss(t,e,!0);return n&&mh(l,n),ao>0&&!i&&Kt&&(l.shapeFlag&6?Kt[Kt.indexOf(t)]=l:Kt.push(l)),l.patchFlag=-2,l}if(SI(t)&&(t=t.__vccOpts),e){e=yI(e);let{class:l,style:c}=e;l&&!Je(l)&&(e.class=Pe(l)),We(c)&&(ch(c)&&!ce(c)&&(c=dt({},c)),e.style=nh(c))}const o=Je(t)?1:R_(t)?128:Yg(t)?64:We(t)?4:fe(t)?2:0;return j(t,e,n,s,r,o,i,!0)}function yI(t){return t?ch(t)||m_(t)?dt({},t):t:null}function Ss(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?vI(r||{},e):r,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&P_(u),ref:e&&e.ref?n&&i?ce(i)?i.concat(_a(e)):[i,_a(e)]:_a(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==tt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ss(t.ssContent),ssFallback:t.ssFallback&&Ss(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&oo(h,c.clone(h)),h}function ph(t=" ",e=0){return ye(wl,null,t,e)}function iu(t="",e=!1){return e?(_e(),lo(Bt,null,t)):ye(Bt,null,t)}function Cn(t){return t==null||typeof t=="boolean"?ye(Bt):ce(t)?ye(tt,null,t.slice()):xa(t)?_s(t):ye(wl,null,String(t))}function _s(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ss(t)}function mh(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),mh(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!m_(e)?e._ctx=jt:r===3&&jt&&(jt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:jt},n=32):(e=String(e),s&64?(n=16,e=[ph(e)]):n=8);t.children=e,t.shapeFlag|=n}function vI(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Pe([e.class,s.class]));else if(r==="style")e.style=nh([e.style,s.style]);else if(hl(r)){const i=e[r],o=s[r];o&&i!==o&&!(ce(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function In(t,e,n,s=null){gn(t,e,7,[n,s])}const EI=f_();let TI=0;function wI(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||EI,i={uid:TI++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new XT(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:__(s,r),emitsOptions:C_(s,r),emit:null,emitted:null,propsDefaults:Be,inheritAttrs:s.inheritAttrs,ctx:Be,data:Be,props:Be,attrs:Be,slots:Be,refs:Be,setupState:Be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=uI.bind(null,i),t.ce&&t.ce(i),i}let _t=null;const gh=()=>_t||jt;let Da,ou;{const t=ml(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Da=e("__VUE_INSTANCE_SETTERS__",n=>_t=n),ou=e("__VUE_SSR_SETTERS__",n=>co=n)}const Ao=t=>{const e=_t;return Da(t),t.scope.on(),()=>{t.scope.off(),Da(e)}},xd=()=>{_t&&_t.scope.off(),Da(null)};function k_(t){return t.vnode.shapeFlag&4}let co=!1;function II(t,e=!1,n=!1){e&&ou(e);const{props:s,children:r}=t.vnode,i=k_(t);Yw(t,s,i,e),eI(t,r,n);const o=i?bI(t,e):void 0;return e&&ou(!1),o}function bI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,jw);const{setup:s}=n;if(s){Ls();const r=t.setupContext=s.length>1?CI(t):null,i=Ao(t),o=bo(s,t,0,[t.props,r]),l=gg(o);if(Vs(),i(),(l||t.sp)&&!ji(t)&&s_(t),l){if(o.then(xd,xd),e)return o.then(c=>{Dd(t,c)}).catch(c=>{yl(c,t,0)});t.asyncDep=o}else Dd(t,o)}else N_(t)}function Dd(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:We(e)&&(t.setupState=jg(e)),N_(t)}function N_(t,e,n){const s=t.type;t.render||(t.render=s.render||kn);{const r=Ao(t);Ls();try{qw(t)}finally{Vs(),r()}}}const AI={get(t,e){return St(t,"get",""),t[e]}};function CI(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,AI),slots:t.slots,emit:t.emit,expose:e}}function Il(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(jg(_w(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in qi)return qi[n](t)},has(e,n){return n in e||n in qi}})):t.proxy}function RI(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function SI(t){return fe(t)&&"__vccOpts"in t}const cn=(t,e)=>Tw(t,e,co);function Ur(t,e,n){const s=arguments.length;return s===2?We(e)&&!ce(e)?xa(e)?ye(t,null,[e]):ye(t,e):ye(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&xa(n)&&(n=[n]),ye(t,e,n))}const PI="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let au;const Od=typeof window<"u"&&window.trustedTypes;if(Od)try{au=Od.createPolicy("vue",{createHTML:t=>t})}catch{}const x_=au?t=>au.createHTML(t):t=>t,kI="http://www.w3.org/2000/svg",NI="http://www.w3.org/1998/Math/MathML",zn=typeof document<"u"?document:null,Md=zn&&zn.createElement("template"),xI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?zn.createElementNS(kI,t):e==="mathml"?zn.createElementNS(NI,t):n?zn.createElement(t,{is:n}):zn.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>zn.createTextNode(t),createComment:t=>zn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>zn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Md.innerHTML=x_(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=Md.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},fs="transition",Ii="animation",uo=Symbol("_vtc"),D_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},DI=dt({},Xg,D_),OI=t=>(t.displayName="Transition",t.props=DI,t),Ld=OI((t,{slots:e})=>Ur(kw,MI(t),e)),Hs=(t,e=[])=>{ce(t)?t.forEach(n=>n(...e)):t&&t(...e)},Vd=t=>t?ce(t)?t.some(e=>e.length>1):t.length>1:!1;function MI(t){const e={};for(const I in t)I in D_||(e[I]=t[I]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:h=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,A=LI(r),S=A&&A[0],N=A&&A[1],{onBeforeEnter:V,onEnter:F,onEnterCancelled:D,onLeave:O,onLeaveCancelled:ee,onBeforeAppear:te=V,onAppear:C=F,onAppearCancelled:y=D}=e,v=(I,E,Ve,it)=>{I._enterCancelled=it,Ws(I,E?h:l),Ws(I,E?u:o),Ve&&Ve()},b=(I,E)=>{I._isLeaving=!1,Ws(I,d),Ws(I,g),Ws(I,m),E&&E()},R=I=>(E,Ve)=>{const it=I?C:F,Ge=()=>v(E,I,Ve);Hs(it,[E,Ge]),Fd(()=>{Ws(E,I?c:i),jn(E,I?h:l),Vd(it)||Ud(E,s,S,Ge)})};return dt(e,{onBeforeEnter(I){Hs(V,[I]),jn(I,i),jn(I,o)},onBeforeAppear(I){Hs(te,[I]),jn(I,c),jn(I,u)},onEnter:R(!1),onAppear:R(!0),onLeave(I,E){I._isLeaving=!0;const Ve=()=>b(I,E);jn(I,d),I._enterCancelled?(jn(I,m),jd()):(jd(),jn(I,m)),Fd(()=>{I._isLeaving&&(Ws(I,d),jn(I,g),Vd(O)||Ud(I,s,N,Ve))}),Hs(O,[I,Ve])},onEnterCancelled(I){v(I,!1,void 0,!0),Hs(D,[I])},onAppearCancelled(I){v(I,!0,void 0,!0),Hs(y,[I])},onLeaveCancelled(I){b(I),Hs(ee,[I])}})}function LI(t){if(t==null)return null;if(We(t))return[Ec(t.enter),Ec(t.leave)];{const e=Ec(t);return[e,e]}}function Ec(t){return HT(t)}function jn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[uo]||(t[uo]=new Set)).add(e)}function Ws(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[uo];n&&(n.delete(e),n.size||(t[uo]=void 0))}function Fd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let VI=0;function Ud(t,e,n,s){const r=t._endId=++VI,i=()=>{r===t._endId&&s()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=FI(t,e);if(!o)return s();const u=o+"end";let h=0;const d=()=>{t.removeEventListener(u,m),i()},m=g=>{g.target===t&&++h>=c&&d()};setTimeout(()=>{h<c&&d()},l+1),t.addEventListener(u,m)}function FI(t,e){const n=window.getComputedStyle(t),s=A=>(n[A]||"").split(", "),r=s(`${fs}Delay`),i=s(`${fs}Duration`),o=Bd(r,i),l=s(`${Ii}Delay`),c=s(`${Ii}Duration`),u=Bd(l,c);let h=null,d=0,m=0;e===fs?o>0&&(h=fs,d=o,m=i.length):e===Ii?u>0&&(h=Ii,d=u,m=c.length):(d=Math.max(o,u),h=d>0?o>u?fs:Ii:null,m=h?h===fs?i.length:c.length:0);const g=h===fs&&/\b(transform|all)(,|$)/.test(s(`${fs}Property`).toString());return{type:h,timeout:d,propCount:m,hasTransform:g}}function Bd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>$d(n)+$d(t[s])))}function $d(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function jd(){return document.body.offsetHeight}function UI(t,e,n){const s=t[uo];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Oa=Symbol("_vod"),O_=Symbol("_vsh"),BI={beforeMount(t,{value:e},{transition:n}){t[Oa]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):bi(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),bi(t,!0),s.enter(t)):s.leave(t,()=>{bi(t,!1)}):bi(t,e))},beforeUnmount(t,{value:e}){bi(t,e)}};function bi(t,e){t.style.display=e?t[Oa]:"none",t[O_]=!e}const $I=Symbol(""),jI=/(^|;)\s*display\s*:/;function qI(t,e,n){const s=t.style,r=Je(n);let i=!1;if(n&&!r){if(e)if(Je(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&ya(s,l,"")}else for(const o in e)n[o]==null&&ya(s,o,"");for(const o in n)o==="display"&&(i=!0),ya(s,o,n[o])}else if(r){if(e!==n){const o=s[$I];o&&(n+=";"+o),s.cssText=n,i=jI.test(n)}}else e&&t.removeAttribute("style");Oa in t&&(t[Oa]=i?s.display:"",t[O_]&&(s.display="none"))}const qd=/\s*!important$/;function ya(t,e,n){if(ce(n))n.forEach(s=>ya(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=HI(t,e);qd.test(n)?t.setProperty(or(s),n.replace(qd,""),"important"):t[s]=n}}const Hd=["Webkit","Moz","ms"],Tc={};function HI(t,e){const n=Tc[e];if(n)return n;let s=rn(e);if(s!=="filter"&&s in t)return Tc[e]=s;s=pl(s);for(let r=0;r<Hd.length;r++){const i=Hd[r]+s;if(i in t)return Tc[e]=i}return e}const Wd="http://www.w3.org/1999/xlink";function zd(t,e,n,s,r,i=YT(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Wd,e.slice(6,e.length)):t.setAttributeNS(Wd,e,n):n==null||i&&!Eg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Ms(n)?String(n):n)}function Kd(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?x_(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Eg(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function Er(t,e,n,s){t.addEventListener(e,n,s)}function WI(t,e,n,s){t.removeEventListener(e,n,s)}const Gd=Symbol("_vei");function zI(t,e,n,s,r=null){const i=t[Gd]||(t[Gd]={}),o=i[e];if(s&&o)o.value=s;else{const[l,c]=KI(e);if(s){const u=i[e]=YI(s,r);Er(t,l,u,c)}else o&&(WI(t,l,o,c),i[e]=void 0)}}const Qd=/(?:Once|Passive|Capture)$/;function KI(t){let e;if(Qd.test(t)){e={};let s;for(;s=t.match(Qd);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):or(t.slice(2)),e]}let wc=0;const GI=Promise.resolve(),QI=()=>wc||(GI.then(()=>wc=0),wc=Date.now());function YI(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;gn(XI(s,n.value),e,5,[s])};return n.value=t,n.attached=QI(),n}function XI(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Yd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,JI=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?UI(t,s,o):e==="style"?qI(t,n,s):hl(e)?Zu(e)||zI(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ZI(t,e,s,o))?(Kd(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&zd(t,e,s,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Je(s))?Kd(t,rn(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),zd(t,e,s,o))};function ZI(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Yd(e)&&fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Yd(e)&&Je(n)?!1:e in t}const Xd=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ce(e)?n=>ma(e,n):e};function eb(t){t.target.composing=!0}function Jd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ic=Symbol("_assign"),tb={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[Ic]=Xd(r);const i=s||r.props&&r.props.type==="number";Er(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Gc(l)),t[Ic](l)}),n&&Er(t,"change",()=>{t.value=t.value.trim()}),e||(Er(t,"compositionstart",eb),Er(t,"compositionend",Jd),Er(t,"change",Jd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[Ic]=Xd(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Gc(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===c)||(t.value=c))}},nb=["ctrl","shift","alt","meta"],sb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>nb.some(n=>t[`${n}Key`]&&!e.includes(n))},rb=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(r,...i)=>{for(let o=0;o<e.length;o++){const l=sb[e[o]];if(l&&l(r,e))return}return t(r,...i)})},ib=dt({patchProp:JI},xI);let Zd;function ob(){return Zd||(Zd=nI(ib))}const ab=(...t)=>{const e=ob().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=cb(s);if(!r)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,lb(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function lb(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function cb(t){return Je(t)?document.querySelector(t):t}const M_=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},ub={};function hb(t,e){const n=Bw("RouterView");return _e(),lo(n)}const fb=M_(ub,[["render",hb]]);/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Tr=typeof document<"u";function L_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function pb(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&L_(t.default)}const De=Object.assign;function bc(t,e){const n={};for(const s in e){const r=e[s];n[s]=_n(r)?r.map(t):t(r)}return n}const Wi=()=>{},_n=Array.isArray,V_=/#/g,mb=/&/g,gb=/\//g,_b=/=/g,yb=/\?/g,F_=/\+/g,vb=/%5B/g,Eb=/%5D/g,U_=/%5E/g,Tb=/%60/g,B_=/%7B/g,wb=/%7C/g,$_=/%7D/g,Ib=/%20/g;function _h(t){return encodeURI(""+t).replace(wb,"|").replace(vb,"[").replace(Eb,"]")}function bb(t){return _h(t).replace(B_,"{").replace($_,"}").replace(U_,"^")}function lu(t){return _h(t).replace(F_,"%2B").replace(Ib,"+").replace(V_,"%23").replace(mb,"%26").replace(Tb,"`").replace(B_,"{").replace($_,"}").replace(U_,"^")}function Ab(t){return lu(t).replace(_b,"%3D")}function Cb(t){return _h(t).replace(V_,"%23").replace(yb,"%3F")}function Rb(t){return t==null?"":Cb(t).replace(gb,"%2F")}function ho(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Sb=/\/$/,Pb=t=>t.replace(Sb,"");function Ac(t,e,n="/"){let s,r={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),r=t(i)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=Db(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:ho(o)}}function kb(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ep(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Nb(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Br(e.matched[s],n.matched[r])&&j_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Br(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function j_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!xb(t[n],e[n]))return!1;return!0}function xb(t,e){return _n(t)?tp(t,e):_n(e)?tp(e,t):t===e}function tp(t,e){return _n(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Db(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const ds={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var fo;(function(t){t.pop="pop",t.push="push"})(fo||(fo={}));var zi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(zi||(zi={}));function Ob(t){if(!t)if(Tr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Pb(t)}const Mb=/^[^#]+#/;function Lb(t,e){return t.replace(Mb,"#")+e}function Vb(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const bl=()=>({left:window.scrollX,top:window.scrollY});function Fb(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Vb(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function np(t,e){return(history.state?history.state.position-e:-1)+t}const cu=new Map;function Ub(t,e){cu.set(t,e)}function Bb(t){const e=cu.get(t);return cu.delete(t),e}let $b=()=>location.protocol+"//"+location.host;function q_(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let l=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(l);return c[0]!=="/"&&(c="/"+c),ep(c,"")}return ep(n,t)+s+r}function jb(t,e,n,s){let r=[],i=[],o=null;const l=({state:m})=>{const g=q_(t,location),A=n.value,S=e.value;let N=0;if(m){if(n.value=g,e.value=m,o&&o===A){o=null;return}N=S?m.position-S.position:0}else s(g);r.forEach(V=>{V(n.value,A,{delta:N,type:fo.pop,direction:N?N>0?zi.forward:zi.back:zi.unknown})})};function c(){o=n.value}function u(m){r.push(m);const g=()=>{const A=r.indexOf(m);A>-1&&r.splice(A,1)};return i.push(g),g}function h(){const{history:m}=window;m.state&&m.replaceState(De({},m.state,{scroll:bl()}),"")}function d(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:u,destroy:d}}function sp(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?bl():null}}function qb(t){const{history:e,location:n}=window,s={value:q_(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,h){const d=t.indexOf("#"),m=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:$b()+t+c;try{e[h?"replaceState":"pushState"](u,"",m),r.value=u}catch(g){console.error(g),n[h?"replace":"assign"](m)}}function o(c,u){const h=De({},e.state,sp(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,h,!0),s.value=c}function l(c,u){const h=De({},r.value,e.state,{forward:c,scroll:bl()});i(h.current,h,!0);const d=De({},sp(s.value,c,null),{position:h.position+1},u);i(c,d,!1),s.value=c}return{location:s,state:r,push:l,replace:o}}function Hb(t){t=Ob(t);const e=qb(t),n=jb(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=De({location:"",base:t,go:s,createHref:Lb.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Wb(t){return typeof t=="string"||t&&typeof t=="object"}function H_(t){return typeof t=="string"||typeof t=="symbol"}const W_=Symbol("");var rp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(rp||(rp={}));function $r(t,e){return De(new Error,{type:t,[W_]:!0},e)}function qn(t,e){return t instanceof Error&&W_ in t&&(e==null||!!(t.type&e))}const ip="[^/]+?",zb={sensitive:!1,strict:!1,start:!0,end:!0},Kb=/[.+*?^${}()[\]/\\]/g;function Gb(t,e){const n=De({},zb,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let d=0;d<u.length;d++){const m=u[d];let g=40+(n.sensitive?.25:0);if(m.type===0)d||(r+="/"),r+=m.value.replace(Kb,"\\$&"),g+=40;else if(m.type===1){const{value:A,repeatable:S,optional:N,regexp:V}=m;i.push({name:A,repeatable:S,optional:N});const F=V||ip;if(F!==ip){g+=10;try{new RegExp(`(${F})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${A}" (${F}): `+O.message)}}let D=S?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;d||(D=N&&u.length<2?`(?:/${D})`:"/"+D),N&&(D+="?"),r+=D,g+=20,N&&(g+=-8),S&&(g+=-20),F===".*"&&(g+=-50)}h.push(g)}s.push(h)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function l(u){const h=u.match(o),d={};if(!h)return null;for(let m=1;m<h.length;m++){const g=h[m]||"",A=i[m-1];d[A.name]=g&&A.repeatable?g.split("/"):g}return d}function c(u){let h="",d=!1;for(const m of t){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const g of m)if(g.type===0)h+=g.value;else if(g.type===1){const{value:A,repeatable:S,optional:N}=g,V=A in u?u[A]:"";if(_n(V)&&!S)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const F=_n(V)?V.join("/"):V;if(!F)if(N)m.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${A}"`);h+=F}}return h||"/"}return{re:o,score:s,keys:i,parse:l,stringify:c}}function Qb(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function z_(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=Qb(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(op(s))return 1;if(op(r))return-1}return r.length-s.length}function op(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Yb={type:0,value:""},Xb=/[a-zA-Z0-9_]/;function Jb(t){if(!t)return[[]];if(t==="/")return[[Yb]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let l=0,c,u="",h="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&d(),o()):c===":"?(d(),n=1):m();break;case 4:m(),n=s;break;case 1:c==="("?n=2:Xb.test(c)?m():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:n=3:h+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),r}function Zb(t,e,n){const s=Gb(Jb(t.path),n),r=De(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function eA(t,e){const n=[],s=new Map;e=up({strict:!1,end:!0,sensitive:!1},e);function r(d){return s.get(d)}function i(d,m,g){const A=!g,S=lp(d);S.aliasOf=g&&g.record;const N=up(e,d),V=[S];if("alias"in d){const O=typeof d.alias=="string"?[d.alias]:d.alias;for(const ee of O)V.push(lp(De({},S,{components:g?g.record.components:S.components,path:ee,aliasOf:g?g.record:S})))}let F,D;for(const O of V){const{path:ee}=O;if(m&&ee[0]!=="/"){const te=m.record.path,C=te[te.length-1]==="/"?"":"/";O.path=m.record.path+(ee&&C+ee)}if(F=Zb(O,m,N),g?g.alias.push(F):(D=D||F,D!==F&&D.alias.push(F),A&&d.name&&!cp(F)&&o(d.name)),K_(F)&&c(F),S.children){const te=S.children;for(let C=0;C<te.length;C++)i(te[C],F,g&&g.children[C])}g=g||F}return D?()=>{o(D)}:Wi}function o(d){if(H_(d)){const m=s.get(d);m&&(s.delete(d),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(d);m>-1&&(n.splice(m,1),d.record.name&&s.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function l(){return n}function c(d){const m=sA(d,n);n.splice(m,0,d),d.record.name&&!cp(d)&&s.set(d.record.name,d)}function u(d,m){let g,A={},S,N;if("name"in d&&d.name){if(g=s.get(d.name),!g)throw $r(1,{location:d});N=g.record.name,A=De(ap(m.params,g.keys.filter(D=>!D.optional).concat(g.parent?g.parent.keys.filter(D=>D.optional):[]).map(D=>D.name)),d.params&&ap(d.params,g.keys.map(D=>D.name))),S=g.stringify(A)}else if(d.path!=null)S=d.path,g=n.find(D=>D.re.test(S)),g&&(A=g.parse(S),N=g.record.name);else{if(g=m.name?s.get(m.name):n.find(D=>D.re.test(m.path)),!g)throw $r(1,{location:d,currentLocation:m});N=g.record.name,A=De({},m.params,d.params),S=g.stringify(A)}const V=[];let F=g;for(;F;)V.unshift(F.record),F=F.parent;return{name:N,path:S,params:A,matched:V,meta:nA(V)}}t.forEach(d=>i(d));function h(){n.length=0,s.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:l,getRecordMatcher:r}}function ap(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function lp(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:tA(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function tA(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function cp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function nA(t){return t.reduce((e,n)=>De(e,n.meta),{})}function up(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function sA(t,e){let n=0,s=e.length;for(;n!==s;){const i=n+s>>1;z_(t,e[i])<0?s=i:n=i+1}const r=rA(t);return r&&(s=e.lastIndexOf(r,s-1)),s}function rA(t){let e=t;for(;e=e.parent;)if(K_(e)&&z_(t,e)===0)return e}function K_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function iA(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(F_," "),o=i.indexOf("="),l=ho(o<0?i:i.slice(0,o)),c=o<0?null:ho(i.slice(o+1));if(l in e){let u=e[l];_n(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function hp(t){let e="";for(let n in t){const s=t[n];if(n=Ab(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(_n(s)?s.map(i=>i&&lu(i)):[s&&lu(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function oA(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=_n(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const aA=Symbol(""),fp=Symbol(""),yh=Symbol(""),G_=Symbol(""),uu=Symbol("");function Ai(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ys(t,e,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c($r(4,{from:n,to:e})):m instanceof Error?c(m):Wb(m)?c($r(2,{from:e,to:m})):(o&&s.enterCallbacks[r]===o&&typeof m=="function"&&o.push(m),l())},h=i(()=>t.call(s&&s.instances[r],e,n,u));let d=Promise.resolve(h);t.length<3&&(d=d.then(u)),d.catch(m=>c(m))})}function Cc(t,e,n,s,r=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(L_(c)){const h=(c.__vccOpts||c)[e];h&&i.push(ys(h,n,s,o,l,r))}else{let u=c();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const d=pb(h)?h.default:h;o.mods[l]=h,o.components[l]=d;const g=(d.__vccOpts||d)[e];return g&&ys(g,n,s,o,l,r)()}))}}return i}function dp(t){const e=pn(yh),n=pn(G_),s=cn(()=>{const c=ft(t.to);return e.resolve(c)}),r=cn(()=>{const{matched:c}=s.value,{length:u}=c,h=c[u-1],d=n.matched;if(!h||!d.length)return-1;const m=d.findIndex(Br.bind(null,h));if(m>-1)return m;const g=pp(c[u-2]);return u>1&&pp(h)===g&&d[d.length-1].path!==g?d.findIndex(Br.bind(null,c[u-2])):m}),i=cn(()=>r.value>-1&&hA(n.params,s.value.params)),o=cn(()=>r.value>-1&&r.value===n.matched.length-1&&j_(n.params,s.value.params));function l(c={}){if(uA(c)){const u=e[ft(t.replace)?"replace":"push"](ft(t.to)).catch(Wi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:cn(()=>s.value.href),isActive:i,isExactActive:o,navigate:l}}function lA(t){return t.length===1?t[0]:t}const cA=n_({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:dp,setup(t,{slots:e}){const n=_l(dp(t)),{options:s}=pn(yh),r=cn(()=>({[mp(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[mp(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&lA(e.default(n));return t.custom?i:Ur("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),vh=cA;function uA(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function hA(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!_n(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function pp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const mp=(t,e,n)=>t??e??n,fA=n_({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=pn(uu),r=cn(()=>t.route||s.value),i=pn(fp,0),o=cn(()=>{let u=ft(i);const{matched:h}=r.value;let d;for(;(d=h[u])&&!d.components;)u++;return u}),l=cn(()=>r.value.matched[o.value]);ga(fp,cn(()=>o.value+1)),ga(aA,l),ga(uu,r);const c=$t();return Dr(()=>[c.value,l.value,t.name],([u,h,d],[m,g,A])=>{h&&(h.instances[d]=u,g&&g!==h&&u&&u===m&&(h.leaveGuards.size||(h.leaveGuards=g.leaveGuards),h.updateGuards.size||(h.updateGuards=g.updateGuards))),u&&h&&(!g||!Br(h,g)||!m)&&(h.enterCallbacks[d]||[]).forEach(S=>S(u))},{flush:"post"}),()=>{const u=r.value,h=t.name,d=l.value,m=d&&d.components[h];if(!m)return gp(n.default,{Component:m,route:u});const g=d.props[h],A=g?g===!0?u.params:typeof g=="function"?g(u):g:null,N=Ur(m,De({},A,e,{onVnodeUnmounted:V=>{V.component.isUnmounted&&(d.instances[h]=null)},ref:c}));return gp(n.default,{Component:N,route:u})||N}}});function gp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const dA=fA;function pA(t){const e=eA(t.routes,t),n=t.parseQuery||iA,s=t.stringifyQuery||hp,r=t.history,i=Ai(),o=Ai(),l=Ai(),c=Bg(ds);let u=ds;Tr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=bc.bind(null,M=>""+M),d=bc.bind(null,Rb),m=bc.bind(null,ho);function g(M,J){let Y,ne;return H_(M)?(Y=e.getRecordMatcher(M),ne=J):ne=M,e.addRoute(ne,Y)}function A(M){const J=e.getRecordMatcher(M);J&&e.removeRoute(J)}function S(){return e.getRoutes().map(M=>M.record)}function N(M){return!!e.getRecordMatcher(M)}function V(M,J){if(J=De({},J||c.value),typeof M=="string"){const P=Ac(n,M,J.path),L=e.resolve({path:P.path},J),$=r.createHref(P.fullPath);return De(P,L,{params:m(L.params),hash:ho(P.hash),redirectedFrom:void 0,href:$})}let Y;if(M.path!=null)Y=De({},M,{path:Ac(n,M.path,J.path).path});else{const P=De({},M.params);for(const L in P)P[L]==null&&delete P[L];Y=De({},M,{params:d(P)}),J.params=d(J.params)}const ne=e.resolve(Y,J),Re=M.hash||"";ne.params=h(m(ne.params));const T=kb(s,De({},M,{hash:bb(Re),path:ne.path})),w=r.createHref(T);return De({fullPath:T,hash:Re,query:s===hp?oA(M.query):M.query||{}},ne,{redirectedFrom:void 0,href:w})}function F(M){return typeof M=="string"?Ac(n,M,c.value.path):De({},M)}function D(M,J){if(u!==M)return $r(8,{from:J,to:M})}function O(M){return C(M)}function ee(M){return O(De(F(M),{replace:!0}))}function te(M){const J=M.matched[M.matched.length-1];if(J&&J.redirect){const{redirect:Y}=J;let ne=typeof Y=="function"?Y(M):Y;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=F(ne):{path:ne},ne.params={}),De({query:M.query,hash:M.hash,params:ne.path!=null?{}:M.params},ne)}}function C(M,J){const Y=u=V(M),ne=c.value,Re=M.state,T=M.force,w=M.replace===!0,P=te(Y);if(P)return C(De(F(P),{state:typeof P=="object"?De({},Re,P.state):Re,force:T,replace:w}),J||Y);const L=Y;L.redirectedFrom=J;let $;return!T&&Nb(s,ne,Y)&&($=$r(16,{to:L,from:ne}),Xt(ne,ne,!0,!1)),($?Promise.resolve($):b(L,ne)).catch(U=>qn(U)?qn(U,2)?U:an(U):ge(U,L,ne)).then(U=>{if(U){if(qn(U,2))return C(De({replace:w},F(U.to),{state:typeof U.to=="object"?De({},Re,U.to.state):Re,force:T}),J||L)}else U=I(L,ne,!0,w,Re);return R(L,ne,U),U})}function y(M,J){const Y=D(M,J);return Y?Promise.reject(Y):Promise.resolve()}function v(M){const J=as.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(M):M()}function b(M,J){let Y;const[ne,Re,T]=mA(M,J);Y=Cc(ne.reverse(),"beforeRouteLeave",M,J);for(const P of ne)P.leaveGuards.forEach(L=>{Y.push(ys(L,M,J))});const w=y.bind(null,M,J);return Y.push(w),Ft(Y).then(()=>{Y=[];for(const P of i.list())Y.push(ys(P,M,J));return Y.push(w),Ft(Y)}).then(()=>{Y=Cc(Re,"beforeRouteUpdate",M,J);for(const P of Re)P.updateGuards.forEach(L=>{Y.push(ys(L,M,J))});return Y.push(w),Ft(Y)}).then(()=>{Y=[];for(const P of T)if(P.beforeEnter)if(_n(P.beforeEnter))for(const L of P.beforeEnter)Y.push(ys(L,M,J));else Y.push(ys(P.beforeEnter,M,J));return Y.push(w),Ft(Y)}).then(()=>(M.matched.forEach(P=>P.enterCallbacks={}),Y=Cc(T,"beforeRouteEnter",M,J,v),Y.push(w),Ft(Y))).then(()=>{Y=[];for(const P of o.list())Y.push(ys(P,M,J));return Y.push(w),Ft(Y)}).catch(P=>qn(P,8)?P:Promise.reject(P))}function R(M,J,Y){l.list().forEach(ne=>v(()=>ne(M,J,Y)))}function I(M,J,Y,ne,Re){const T=D(M,J);if(T)return T;const w=J===ds,P=Tr?history.state:{};Y&&(ne||w?r.replace(M.fullPath,De({scroll:w&&P&&P.scroll},Re)):r.push(M.fullPath,Re)),c.value=M,Xt(M,J,Y,w),an()}let E;function Ve(){E||(E=r.listen((M,J,Y)=>{if(!wn.listening)return;const ne=V(M),Re=te(ne);if(Re){C(De(Re,{replace:!0,force:!0}),ne).catch(Wi);return}u=ne;const T=c.value;Tr&&Ub(np(T.fullPath,Y.delta),bl()),b(ne,T).catch(w=>qn(w,12)?w:qn(w,2)?(C(De(F(w.to),{force:!0}),ne).then(P=>{qn(P,20)&&!Y.delta&&Y.type===fo.pop&&r.go(-1,!1)}).catch(Wi),Promise.reject()):(Y.delta&&r.go(-Y.delta,!1),ge(w,ne,T))).then(w=>{w=w||I(ne,T,!1),w&&(Y.delta&&!qn(w,8)?r.go(-Y.delta,!1):Y.type===fo.pop&&qn(w,20)&&r.go(-1,!1)),R(ne,T,w)}).catch(Wi)}))}let it=Ai(),Ge=Ai(),we;function ge(M,J,Y){an(M);const ne=Ge.list();return ne.length?ne.forEach(Re=>Re(M,J,Y)):console.error(M),Promise.reject(M)}function Ht(){return we&&c.value!==ds?Promise.resolve():new Promise((M,J)=>{it.add([M,J])})}function an(M){return we||(we=!M,Ve(),it.list().forEach(([J,Y])=>M?Y(M):J()),it.reset()),M}function Xt(M,J,Y,ne){const{scrollBehavior:Re}=t;if(!Tr||!Re)return Promise.resolve();const T=!Y&&Bb(np(M.fullPath,0))||(ne||!Y)&&history.state&&history.state.scroll||null;return Hg().then(()=>Re(M,J,T)).then(w=>w&&Fb(w)).catch(w=>ge(w,M,J))}const Qe=M=>r.go(M);let Ye;const as=new Set,wn={currentRoute:c,listening:!0,addRoute:g,removeRoute:A,clearRoutes:e.clearRoutes,hasRoute:N,getRoutes:S,resolve:V,options:t,push:O,replace:ee,go:Qe,back:()=>Qe(-1),forward:()=>Qe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Ge.add,isReady:Ht,install(M){const J=this;M.component("RouterLink",vh),M.component("RouterView",dA),M.config.globalProperties.$router=J,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>ft(c)}),Tr&&!Ye&&c.value===ds&&(Ye=!0,O(r.location).catch(Re=>{}));const Y={};for(const Re in ds)Object.defineProperty(Y,Re,{get:()=>c.value[Re],enumerable:!0});M.provide(yh,J),M.provide(G_,Fg(Y)),M.provide(uu,c);const ne=M.unmount;as.add(M),M.unmount=function(){as.delete(M),as.size<1&&(u=ds,E&&E(),E=null,c.value=ds,Ye=!1,we=!1),ne()}}};function Ft(M){return M.reduce((J,Y)=>J.then(()=>v(Y)),Promise.resolve())}return wn}function mA(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>Br(u,l))?s.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>Br(u,c))||r.push(c))}return[n,s,r]}const gA="/docutrack-logo-02.png";/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ra={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA=({size:t,strokeWidth:e=2,absoluteStrokeWidth:n,color:s,iconNode:r,name:i,class:o,...l},{slots:c})=>Ur("svg",{...ra,width:t||ra.width,height:t||ra.height,stroke:s||ra.stroke,"stroke-width":n?Number(e)*24/Number(t):e,class:["lucide",`lucide-${_A(i??"icon")}`],...l},[...r.map(u=>Ur(...u)),...c.default?[c.default()]:[]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=(t,e)=>(n,{slots:s})=>Ur(yA,{...n,iconNode:e,name:t},s);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vA=rs("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA=rs("ChevronDownIcon",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=rs("CircleCheckBigIcon",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=rs("CircleXIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IA=rs("HeartIcon",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA=rs("InstagramIcon",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AA=rs("LinkedinIcon",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=rs("MoonIcon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=rs("SunIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),SA={class:"container mx-auto px-4 py-4 flex justify-between items-center"},PA={class:"hidden md:flex justify-end gap-6 lg:gap-12 space-x-4 w-2/3"},kA=["href"],NA={class:"flex items-center space-x-4"},xA={class:"w-6 h-6 flex items-center justify-center"},DA={class:"relative w-6 h-4"},OA={class:"flex flex-col h-full"},MA={class:"flex-1 pt-24 pb-8"},LA={class:"flex flex-col space-y-8"},VA=["href"],FA={__name:"HeaderComponent",props:["isDarkMode","navItems"],emits:["switchTheme"],setup(t,{emit:e}){const n=e,s=$t(!1),r=()=>{s.value=!s.value,s.value?document.body.style.overflow="hidden":document.body.style.overflow=""},i=()=>{s.value=!1,document.body.style.overflow=""},o=()=>{n("switchTheme")};return hh(()=>{const l=c=>{c.key==="Escape"&&s.value&&i()};document.addEventListener("keydown",l)}),fh(()=>{document.body.style.overflow="",document.removeEventListener("keydown",handleEscape)}),(l,c)=>(_e(),xe("header",{class:Pe(["sticky top-0 z-50 shadow-md transition-colors duration-300",t.isDarkMode?"bg-base-400":"bg-base-100"])},[j("nav",SA,[ye(ft(vh),{to:"/",class:"flex items-center relative z-50"},{default:$i(()=>c[1]||(c[1]=[j("img",{src:gA,alt:"Docutrack Logo",class:"h-10 w-auto mr-2"},null,-1),j("span",{class:"text-2xl font-bold text-primary-200 hidden md:block w-auto"},"Docutrack",-1)])),_:1}),j("div",PA,[(_e(!0),xe(tt,null,Dn(t.navItems,u=>(_e(),xe("a",{key:u,href:`#${u.toLowerCase()}`,class:Pe(["hover:text-primary-200 transition-colors font-semibold text-lg",t.isDarkMode?"text-base-100":"text-base-400"])},nt(u),11,kA))),128))]),j("div",NA,[j("button",{onClick:o,class:"text-primary-200 relative z-50"},[t.isDarkMode?(_e(),lo(ft(RA),{key:0,class:"w-6 h-6"})):(_e(),lo(ft(CA),{key:1,class:"w-6 h-6"}))]),j("button",{onClick:r,class:"md:hidden text-primary-200 relative z-50","aria-label":"Toggle menu"},[c[2]||(c[2]=j("span",{class:"sr-only"},"Toggle menu",-1)),j("div",xA,[j("div",DA,[j("span",{class:Pe(["absolute h-0.5 w-6 transform transition-all duration-300",s.value?"rotate-45 translate-y-2":"translate-y-0",(t.isDarkMode,"bg-primary-200")])},null,2),j("span",{class:Pe(["absolute h-0.5 w-6 transform transition-all duration-300",s.value?"opacity-0":"opacity-100",(t.isDarkMode,"bg-primary-200")]),style:{top:"50%",transform:"translateY(-50%)"}},null,2),j("span",{class:Pe(["absolute h-0.5 w-6 transform transition-all duration-300",s.value?"-rotate-45 -translate-y-2":"translate-y-4",(t.isDarkMode,"bg-primary-200")])},null,2)])])])])]),ye(Ld,{"enter-active-class":"transition-all duration-300 ease-out","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"transition-all duration-300 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:$i(()=>[s.value?(_e(),xe("div",{key:0,class:"fixed inset-0 z-40",onClick:i},[c[3]||(c[3]=j("div",{class:"absolute inset-0 bg-black/50 backdrop-blur-sm"},null,-1)),ye(Ld,{"enter-active-class":"transition-all duration-300 ease-out","enter-from-class":"translate-x-full","enter-to-class":"translate-x-0","leave-active-class":"transition-all duration-300 ease-in","leave-from-class":"translate-x-0","leave-to-class":"translate-x-full"},{default:$i(()=>[s.value?(_e(),xe("div",{key:0,class:Pe(["fixed inset-y-0 right-0 w-full max-w p-6 overflow-y-auto",t.isDarkMode?"bg-base-400":"bg-base-100"]),onClick:c[0]||(c[0]=rb(()=>{},["stop"]))},[j("div",OA,[j("div",MA,[j("nav",LA,[(_e(!0),xe(tt,null,Dn(t.navItems,u=>(_e(),xe("a",{key:u,href:`#${u.toLowerCase()}`,onClick:i,class:Pe(["text-2xl font-semibold text-center py-2 transition-colors duration-300",t.isDarkMode?"text-base-100 hover:text-primary-200":"text-base-400 hover:text-primary-200"])},nt(u),11,VA))),128))])]),j("div",{class:"pt-6 mt-auto border-t border-gray-200 dark:border-gray-800"},[j("div",{class:"flex justify-center space-x-6"},[j("button",{class:"px-6 py-3 rounded-full bg-primary-200 text-base-400 font-semibold hover:bg-primary-300 transition-colors",onClick:i}," Get Started ")])])])],2)):iu("",!0)]),_:1})])):iu("",!0)]),_:1})],2))}},Q_=M_(FA,[["__scopeId","data-v-603dbf1f"]]),UA="/hero-image-01.jpg";var _p={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q=function(t,e){if(!t)throw Zr(e)},Zr=function(t){return new Error("Firebase Database ("+Y_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},BA=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],l=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Al={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,l=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,h=i>>2,d=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,g=u&63;c||(g=64,o||(m=64)),s.push(n[h],n[d],n[m],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(X_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):BA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],l=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||l==null||u==null||d==null)throw new $A;const m=i<<2|l>>4;if(s.push(m),u!==64){const g=l<<4&240|u>>2;if(s.push(g),d!==64){const A=u<<6&192|d;s.push(A)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $A extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const J_=function(t){const e=X_(t);return Al.encodeByteArray(e,!0)},Ma=function(t){return J_(t).replace(/\./g,"")},La=function(t){try{return Al.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jA(t){return Z_(void 0,t)}function Z_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!qA(n)||(t[n]=Z_(t[n],e[n]));return t}function qA(t){return t!=="__proto__"}/**
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
 */function HA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const WA=()=>HA().__FIREBASE_DEFAULTS__,zA=()=>{if(typeof process>"u"||typeof _p>"u")return;const t=_p.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},KA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&La(t[1]);return e&&JSON.parse(e)},Cl=()=>{try{return WA()||zA()||KA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},GA=t=>{var e,n;return(n=(e=Cl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},QA=t=>{const e=GA(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ey=()=>{var t;return(t=Cl())===null||t===void 0?void 0:t.config},YA=t=>{var e;return(e=Cl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function XA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ma(JSON.stringify(n)),Ma(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Eh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yn())}function JA(){var t;const e=(t=Cl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ZA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function eC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ty(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tC(){return Y_.NODE_ADMIN===!0}function nC(){return!JA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ny(){try{return typeof indexedDB=="object"}catch{return!1}}function sC(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC="FirebaseError";class is extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=rC,Object.setPrototypeOf(this,is.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ei.prototype.create)}}class ei{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?iC(i,s):"Error",l=`${this.serviceName}: ${o} (${r}).`;return new is(r,l,s)}}function iC(t,e){return t.replace(oC,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const oC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(t){return JSON.parse(t)}function yt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy=function(t){let e={},n={},s={},r="";try{const i=t.split(".");e=mo(La(i[0])||""),n=mo(La(i[1])||""),r=i[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:r}},aC=function(t){const e=sy(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},lC=function(t){const e=sy(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function jr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function yp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Va(t,e,n){const s={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=e.call(n,t[r],r,t));return s}function hu(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(vp(i)&&vp(o)){if(!hu(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function vp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const m=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(m<<1|m>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],u,h;for(let d=0;d<80;d++){d<40?d<20?(u=l^i&(o^l),h=1518500249):(u=i^o^l,h=1859775393):d<60?(u=i&o|l&(i|o),h=2400959708):(u=i^o^l,h=3395469782);const m=(r<<5|r>>>27)+u+c+h+s[d]&4294967295;c=l,l=o,o=(i<<30|i>>>2)&4294967295,i=r,r=m}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<n;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function uC(t,e){const n=new hC(t,e);return n.subscribe.bind(n)}class hC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");fC(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Rc),r.error===void 0&&(r.error=Rc),r.complete===void 0&&(r.complete=Rc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Rc(){}function dC(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,Q(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;r=65536+(i<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Rl=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function vn(t){return t&&t._delegate?t._delegate:t}class En{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class mC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new po;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_C(e))try{this.getOrInitializeService({instanceIdentifier:Ks})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Ks){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ks){return this.instances.has(e)}getOptions(e=Ks){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:gC(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ks){return this.component?this.component.multipleInstances?e:Ks:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gC(t){return t===Ks?void 0:t}function _C(t){return t.instantiationMode==="EAGER"}/**
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
 */class yC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const vC={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},EC=me.INFO,TC={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},wC=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=TC[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Co{constructor(e){this.name=e,this._logLevel=EC,this._logHandler=wC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const IC=(t,e)=>e.some(n=>t instanceof n);let Ep,Tp;function bC(){return Ep||(Ep=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function AC(){return Tp||(Tp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ry=new WeakMap,fu=new WeakMap,iy=new WeakMap,Sc=new WeakMap,wh=new WeakMap;function CC(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ws(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ry.set(n,t)}).catch(()=>{}),wh.set(e,t),e}function RC(t){if(fu.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});fu.set(t,e)}let du={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||iy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ws(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function SC(t){du=t(du)}function PC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Pc(this),e,...n);return iy.set(s,e.sort?e.sort():[e]),ws(s)}:AC().includes(t)?function(...e){return t.apply(Pc(this),e),ws(ry.get(this))}:function(...e){return ws(t.apply(Pc(this),e))}}function kC(t){return typeof t=="function"?PC(t):(t instanceof IDBTransaction&&RC(t),IC(t,bC())?new Proxy(t,du):t)}function ws(t){if(t instanceof IDBRequest)return CC(t);if(Sc.has(t))return Sc.get(t);const e=kC(t);return e!==t&&(Sc.set(t,e),wh.set(e,t)),e}const Pc=t=>wh.get(t);function NC(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),l=ws(o);return s&&o.addEventListener("upgradeneeded",c=>{s(ws(o.result),c.oldVersion,c.newVersion,ws(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const xC=["get","getKey","getAll","getAllKeys","count"],DC=["put","add","delete","clear"],kc=new Map;function wp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(kc.get(e))return kc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=DC.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||xC.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),r&&c.done]))[0]};return kc.set(e,i),i}SC(t=>({...t,get:(e,n,s)=>wp(e,n)||t.get(e,n,s),has:(e,n)=>!!wp(e,n)||t.has(e,n)}));/**
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
 */class OC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(MC(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function MC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pu="@firebase/app",Ip="0.10.18";/**
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
 */const es=new Co("@firebase/app"),LC="@firebase/app-compat",VC="@firebase/analytics-compat",FC="@firebase/analytics",UC="@firebase/app-check-compat",BC="@firebase/app-check",$C="@firebase/auth",jC="@firebase/auth-compat",qC="@firebase/database",HC="@firebase/data-connect",WC="@firebase/database-compat",zC="@firebase/functions",KC="@firebase/functions-compat",GC="@firebase/installations",QC="@firebase/installations-compat",YC="@firebase/messaging",XC="@firebase/messaging-compat",JC="@firebase/performance",ZC="@firebase/performance-compat",eR="@firebase/remote-config",tR="@firebase/remote-config-compat",nR="@firebase/storage",sR="@firebase/storage-compat",rR="@firebase/firestore",iR="@firebase/vertexai",oR="@firebase/firestore-compat",aR="firebase",lR="11.2.0";/**
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
 */const mu="[DEFAULT]",cR={[pu]:"fire-core",[LC]:"fire-core-compat",[FC]:"fire-analytics",[VC]:"fire-analytics-compat",[BC]:"fire-app-check",[UC]:"fire-app-check-compat",[$C]:"fire-auth",[jC]:"fire-auth-compat",[qC]:"fire-rtdb",[HC]:"fire-data-connect",[WC]:"fire-rtdb-compat",[zC]:"fire-fn",[KC]:"fire-fn-compat",[GC]:"fire-iid",[QC]:"fire-iid-compat",[YC]:"fire-fcm",[XC]:"fire-fcm-compat",[JC]:"fire-perf",[ZC]:"fire-perf-compat",[eR]:"fire-rc",[tR]:"fire-rc-compat",[nR]:"fire-gcs",[sR]:"fire-gcs-compat",[rR]:"fire-fst",[oR]:"fire-fst-compat",[iR]:"fire-vertex","fire-js":"fire-js",[aR]:"fire-js-all"};/**
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
 */const Fa=new Map,uR=new Map,gu=new Map;function bp(t,e){try{t.container.addComponent(e)}catch(n){es.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function On(t){const e=t.name;if(gu.has(e))return es.debug(`There were multiple attempts to register component ${e}.`),!1;gu.set(e,t);for(const n of Fa.values())bp(n,t);for(const n of uR.values())bp(n,t);return!0}function hR(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function xi(t){return t.settings!==void 0}/**
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
 */const fR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Is=new ei("app","Firebase",fR);/**
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
 */class dR{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new En("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Is.create("app-deleted",{appName:this._name})}}/**
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
 */const ti=lR;function oy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:mu,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Is.create("bad-app-name",{appName:String(r)});if(n||(n=ey()),!n)throw Is.create("no-options");const i=Fa.get(r);if(i){if(hu(n,i.options)&&hu(s,i.config))return i;throw Is.create("duplicate-app",{appName:r})}const o=new yC(r);for(const c of gu.values())o.addComponent(c);const l=new dR(n,s,o);return Fa.set(r,l),l}function ay(t=mu){const e=Fa.get(t);if(!e&&t===mu&&ey())return oy();if(!e)throw Is.create("no-app",{appName:t});return e}function Gt(t,e,n){var s;let r=(s=cR[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${r}" with version "${e}":`];i&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),es.warn(l.join(" "));return}On(new En(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const pR="firebase-heartbeat-database",mR=1,go="firebase-heartbeat-store";let Nc=null;function ly(){return Nc||(Nc=NC(pR,mR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(go)}catch(n){console.warn(n)}}}}).catch(t=>{throw Is.create("idb-open",{originalErrorMessage:t.message})})),Nc}async function gR(t){try{const n=(await ly()).transaction(go),s=await n.objectStore(go).get(cy(t));return await n.done,s}catch(e){if(e instanceof is)es.warn(e.message);else{const n=Is.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});es.warn(n.message)}}}async function Ap(t,e){try{const s=(await ly()).transaction(go,"readwrite");await s.objectStore(go).put(e,cy(t)),await s.done}catch(n){if(n instanceof is)es.warn(n.message);else{const s=Is.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});es.warn(s.message)}}}function cy(t){return`${t.name}!${t.options.appId}`}/**
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
 */const _R=1024,yR=30*24*60*60*1e3;class vR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new TR(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Cp();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=yR}),this._storage.overwrite(this._heartbeatsCache))}catch(s){es.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Cp(),{heartbeatsToSend:s,unsentEntries:r}=ER(this._heartbeatsCache.heartbeats),i=Ma(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return es.warn(n),""}}}function Cp(){return new Date().toISOString().substring(0,10)}function ER(t,e=_R){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Rp(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Rp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class TR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ny()?sC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await gR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ap(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ap(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Rp(t){return Ma(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function wR(t){On(new En("platform-logger",e=>new OC(e),"PRIVATE")),On(new En("heartbeat",e=>new vR(e),"PRIVATE")),Gt(pu,Ip,t),Gt(pu,Ip,"esm2017"),Gt("fire-js","")}wR("");var Sp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bs,uy;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,y){function v(){}v.prototype=y.prototype,C.D=y.prototype,C.prototype=new v,C.prototype.constructor=C,C.C=function(b,R,I){for(var E=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)E[Ve-2]=arguments[Ve];return y.prototype[R].apply(b,E)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(C,y,v){v||(v=0);var b=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)b[R]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(R=0;16>R;++R)b[R]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=C.g[0],v=C.g[1],R=C.g[2];var I=C.g[3],E=y+(I^v&(R^I))+b[0]+3614090360&4294967295;y=v+(E<<7&4294967295|E>>>25),E=I+(R^y&(v^R))+b[1]+3905402710&4294967295,I=y+(E<<12&4294967295|E>>>20),E=R+(v^I&(y^v))+b[2]+606105819&4294967295,R=I+(E<<17&4294967295|E>>>15),E=v+(y^R&(I^y))+b[3]+3250441966&4294967295,v=R+(E<<22&4294967295|E>>>10),E=y+(I^v&(R^I))+b[4]+4118548399&4294967295,y=v+(E<<7&4294967295|E>>>25),E=I+(R^y&(v^R))+b[5]+1200080426&4294967295,I=y+(E<<12&4294967295|E>>>20),E=R+(v^I&(y^v))+b[6]+2821735955&4294967295,R=I+(E<<17&4294967295|E>>>15),E=v+(y^R&(I^y))+b[7]+4249261313&4294967295,v=R+(E<<22&4294967295|E>>>10),E=y+(I^v&(R^I))+b[8]+1770035416&4294967295,y=v+(E<<7&4294967295|E>>>25),E=I+(R^y&(v^R))+b[9]+2336552879&4294967295,I=y+(E<<12&4294967295|E>>>20),E=R+(v^I&(y^v))+b[10]+4294925233&4294967295,R=I+(E<<17&4294967295|E>>>15),E=v+(y^R&(I^y))+b[11]+2304563134&4294967295,v=R+(E<<22&4294967295|E>>>10),E=y+(I^v&(R^I))+b[12]+1804603682&4294967295,y=v+(E<<7&4294967295|E>>>25),E=I+(R^y&(v^R))+b[13]+4254626195&4294967295,I=y+(E<<12&4294967295|E>>>20),E=R+(v^I&(y^v))+b[14]+2792965006&4294967295,R=I+(E<<17&4294967295|E>>>15),E=v+(y^R&(I^y))+b[15]+1236535329&4294967295,v=R+(E<<22&4294967295|E>>>10),E=y+(R^I&(v^R))+b[1]+4129170786&4294967295,y=v+(E<<5&4294967295|E>>>27),E=I+(v^R&(y^v))+b[6]+3225465664&4294967295,I=y+(E<<9&4294967295|E>>>23),E=R+(y^v&(I^y))+b[11]+643717713&4294967295,R=I+(E<<14&4294967295|E>>>18),E=v+(I^y&(R^I))+b[0]+3921069994&4294967295,v=R+(E<<20&4294967295|E>>>12),E=y+(R^I&(v^R))+b[5]+3593408605&4294967295,y=v+(E<<5&4294967295|E>>>27),E=I+(v^R&(y^v))+b[10]+38016083&4294967295,I=y+(E<<9&4294967295|E>>>23),E=R+(y^v&(I^y))+b[15]+3634488961&4294967295,R=I+(E<<14&4294967295|E>>>18),E=v+(I^y&(R^I))+b[4]+3889429448&4294967295,v=R+(E<<20&4294967295|E>>>12),E=y+(R^I&(v^R))+b[9]+568446438&4294967295,y=v+(E<<5&4294967295|E>>>27),E=I+(v^R&(y^v))+b[14]+3275163606&4294967295,I=y+(E<<9&4294967295|E>>>23),E=R+(y^v&(I^y))+b[3]+4107603335&4294967295,R=I+(E<<14&4294967295|E>>>18),E=v+(I^y&(R^I))+b[8]+1163531501&4294967295,v=R+(E<<20&4294967295|E>>>12),E=y+(R^I&(v^R))+b[13]+2850285829&4294967295,y=v+(E<<5&4294967295|E>>>27),E=I+(v^R&(y^v))+b[2]+4243563512&4294967295,I=y+(E<<9&4294967295|E>>>23),E=R+(y^v&(I^y))+b[7]+1735328473&4294967295,R=I+(E<<14&4294967295|E>>>18),E=v+(I^y&(R^I))+b[12]+2368359562&4294967295,v=R+(E<<20&4294967295|E>>>12),E=y+(v^R^I)+b[5]+4294588738&4294967295,y=v+(E<<4&4294967295|E>>>28),E=I+(y^v^R)+b[8]+2272392833&4294967295,I=y+(E<<11&4294967295|E>>>21),E=R+(I^y^v)+b[11]+1839030562&4294967295,R=I+(E<<16&4294967295|E>>>16),E=v+(R^I^y)+b[14]+4259657740&4294967295,v=R+(E<<23&4294967295|E>>>9),E=y+(v^R^I)+b[1]+2763975236&4294967295,y=v+(E<<4&4294967295|E>>>28),E=I+(y^v^R)+b[4]+1272893353&4294967295,I=y+(E<<11&4294967295|E>>>21),E=R+(I^y^v)+b[7]+4139469664&4294967295,R=I+(E<<16&4294967295|E>>>16),E=v+(R^I^y)+b[10]+3200236656&4294967295,v=R+(E<<23&4294967295|E>>>9),E=y+(v^R^I)+b[13]+681279174&4294967295,y=v+(E<<4&4294967295|E>>>28),E=I+(y^v^R)+b[0]+3936430074&4294967295,I=y+(E<<11&4294967295|E>>>21),E=R+(I^y^v)+b[3]+3572445317&4294967295,R=I+(E<<16&4294967295|E>>>16),E=v+(R^I^y)+b[6]+76029189&4294967295,v=R+(E<<23&4294967295|E>>>9),E=y+(v^R^I)+b[9]+3654602809&4294967295,y=v+(E<<4&4294967295|E>>>28),E=I+(y^v^R)+b[12]+3873151461&4294967295,I=y+(E<<11&4294967295|E>>>21),E=R+(I^y^v)+b[15]+530742520&4294967295,R=I+(E<<16&4294967295|E>>>16),E=v+(R^I^y)+b[2]+3299628645&4294967295,v=R+(E<<23&4294967295|E>>>9),E=y+(R^(v|~I))+b[0]+4096336452&4294967295,y=v+(E<<6&4294967295|E>>>26),E=I+(v^(y|~R))+b[7]+1126891415&4294967295,I=y+(E<<10&4294967295|E>>>22),E=R+(y^(I|~v))+b[14]+2878612391&4294967295,R=I+(E<<15&4294967295|E>>>17),E=v+(I^(R|~y))+b[5]+4237533241&4294967295,v=R+(E<<21&4294967295|E>>>11),E=y+(R^(v|~I))+b[12]+1700485571&4294967295,y=v+(E<<6&4294967295|E>>>26),E=I+(v^(y|~R))+b[3]+2399980690&4294967295,I=y+(E<<10&4294967295|E>>>22),E=R+(y^(I|~v))+b[10]+4293915773&4294967295,R=I+(E<<15&4294967295|E>>>17),E=v+(I^(R|~y))+b[1]+2240044497&4294967295,v=R+(E<<21&4294967295|E>>>11),E=y+(R^(v|~I))+b[8]+1873313359&4294967295,y=v+(E<<6&4294967295|E>>>26),E=I+(v^(y|~R))+b[15]+4264355552&4294967295,I=y+(E<<10&4294967295|E>>>22),E=R+(y^(I|~v))+b[6]+2734768916&4294967295,R=I+(E<<15&4294967295|E>>>17),E=v+(I^(R|~y))+b[13]+1309151649&4294967295,v=R+(E<<21&4294967295|E>>>11),E=y+(R^(v|~I))+b[4]+4149444226&4294967295,y=v+(E<<6&4294967295|E>>>26),E=I+(v^(y|~R))+b[11]+3174756917&4294967295,I=y+(E<<10&4294967295|E>>>22),E=R+(y^(I|~v))+b[2]+718787259&4294967295,R=I+(E<<15&4294967295|E>>>17),E=v+(I^(R|~y))+b[9]+3951481745&4294967295,C.g[0]=C.g[0]+y&4294967295,C.g[1]=C.g[1]+(R+(E<<21&4294967295|E>>>11))&4294967295,C.g[2]=C.g[2]+R&4294967295,C.g[3]=C.g[3]+I&4294967295}s.prototype.u=function(C,y){y===void 0&&(y=C.length);for(var v=y-this.blockSize,b=this.B,R=this.h,I=0;I<y;){if(R==0)for(;I<=v;)r(this,C,I),I+=this.blockSize;if(typeof C=="string"){for(;I<y;)if(b[R++]=C.charCodeAt(I++),R==this.blockSize){r(this,b),R=0;break}}else for(;I<y;)if(b[R++]=C[I++],R==this.blockSize){r(this,b),R=0;break}}this.h=R,this.o+=y},s.prototype.v=function(){var C=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);C[0]=128;for(var y=1;y<C.length-8;++y)C[y]=0;var v=8*this.o;for(y=C.length-8;y<C.length;++y)C[y]=v&255,v/=256;for(this.u(C),C=Array(16),y=v=0;4>y;++y)for(var b=0;32>b;b+=8)C[v++]=this.g[y]>>>b&255;return C};function i(C,y){var v=l;return Object.prototype.hasOwnProperty.call(v,C)?v[C]:v[C]=y(C)}function o(C,y){this.h=y;for(var v=[],b=!0,R=C.length-1;0<=R;R--){var I=C[R]|0;b&&I==y||(v[R]=I,b=!1)}this.g=v}var l={};function c(C){return-128<=C&&128>C?i(C,function(y){return new o([y|0],0>y?-1:0)}):new o([C|0],0>C?-1:0)}function u(C){if(isNaN(C)||!isFinite(C))return d;if(0>C)return N(u(-C));for(var y=[],v=1,b=0;C>=v;b++)y[b]=C/v|0,v*=4294967296;return new o(y,0)}function h(C,y){if(C.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(C.charAt(0)=="-")return N(h(C.substring(1),y));if(0<=C.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(y,8)),b=d,R=0;R<C.length;R+=8){var I=Math.min(8,C.length-R),E=parseInt(C.substring(R,R+I),y);8>I?(I=u(Math.pow(y,I)),b=b.j(I).add(u(E))):(b=b.j(v),b=b.add(u(E)))}return b}var d=c(0),m=c(1),g=c(16777216);t=o.prototype,t.m=function(){if(S(this))return-N(this).m();for(var C=0,y=1,v=0;v<this.g.length;v++){var b=this.i(v);C+=(0<=b?b:4294967296+b)*y,y*=4294967296}return C},t.toString=function(C){if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(A(this))return"0";if(S(this))return"-"+N(this).toString(C);for(var y=u(Math.pow(C,6)),v=this,b="";;){var R=O(v,y).g;v=V(v,R.j(y));var I=((0<v.g.length?v.g[0]:v.h)>>>0).toString(C);if(v=R,A(v))return I+b;for(;6>I.length;)I="0"+I;b=I+b}},t.i=function(C){return 0>C?0:C<this.g.length?this.g[C]:this.h};function A(C){if(C.h!=0)return!1;for(var y=0;y<C.g.length;y++)if(C.g[y]!=0)return!1;return!0}function S(C){return C.h==-1}t.l=function(C){return C=V(this,C),S(C)?-1:A(C)?0:1};function N(C){for(var y=C.g.length,v=[],b=0;b<y;b++)v[b]=~C.g[b];return new o(v,~C.h).add(m)}t.abs=function(){return S(this)?N(this):this},t.add=function(C){for(var y=Math.max(this.g.length,C.g.length),v=[],b=0,R=0;R<=y;R++){var I=b+(this.i(R)&65535)+(C.i(R)&65535),E=(I>>>16)+(this.i(R)>>>16)+(C.i(R)>>>16);b=E>>>16,I&=65535,E&=65535,v[R]=E<<16|I}return new o(v,v[v.length-1]&-2147483648?-1:0)};function V(C,y){return C.add(N(y))}t.j=function(C){if(A(this)||A(C))return d;if(S(this))return S(C)?N(this).j(N(C)):N(N(this).j(C));if(S(C))return N(this.j(N(C)));if(0>this.l(g)&&0>C.l(g))return u(this.m()*C.m());for(var y=this.g.length+C.g.length,v=[],b=0;b<2*y;b++)v[b]=0;for(b=0;b<this.g.length;b++)for(var R=0;R<C.g.length;R++){var I=this.i(b)>>>16,E=this.i(b)&65535,Ve=C.i(R)>>>16,it=C.i(R)&65535;v[2*b+2*R]+=E*it,F(v,2*b+2*R),v[2*b+2*R+1]+=I*it,F(v,2*b+2*R+1),v[2*b+2*R+1]+=E*Ve,F(v,2*b+2*R+1),v[2*b+2*R+2]+=I*Ve,F(v,2*b+2*R+2)}for(b=0;b<y;b++)v[b]=v[2*b+1]<<16|v[2*b];for(b=y;b<2*y;b++)v[b]=0;return new o(v,0)};function F(C,y){for(;(C[y]&65535)!=C[y];)C[y+1]+=C[y]>>>16,C[y]&=65535,y++}function D(C,y){this.g=C,this.h=y}function O(C,y){if(A(y))throw Error("division by zero");if(A(C))return new D(d,d);if(S(C))return y=O(N(C),y),new D(N(y.g),N(y.h));if(S(y))return y=O(C,N(y)),new D(N(y.g),y.h);if(30<C.g.length){if(S(C)||S(y))throw Error("slowDivide_ only works with positive integers.");for(var v=m,b=y;0>=b.l(C);)v=ee(v),b=ee(b);var R=te(v,1),I=te(b,1);for(b=te(b,2),v=te(v,2);!A(b);){var E=I.add(b);0>=E.l(C)&&(R=R.add(v),I=E),b=te(b,1),v=te(v,1)}return y=V(C,R.j(y)),new D(R,y)}for(R=d;0<=C.l(y);){for(v=Math.max(1,Math.floor(C.m()/y.m())),b=Math.ceil(Math.log(v)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),I=u(v),E=I.j(y);S(E)||0<E.l(C);)v-=b,I=u(v),E=I.j(y);A(I)&&(I=m),R=R.add(I),C=V(C,E)}return new D(R,C)}t.A=function(C){return O(this,C).h},t.and=function(C){for(var y=Math.max(this.g.length,C.g.length),v=[],b=0;b<y;b++)v[b]=this.i(b)&C.i(b);return new o(v,this.h&C.h)},t.or=function(C){for(var y=Math.max(this.g.length,C.g.length),v=[],b=0;b<y;b++)v[b]=this.i(b)|C.i(b);return new o(v,this.h|C.h)},t.xor=function(C){for(var y=Math.max(this.g.length,C.g.length),v=[],b=0;b<y;b++)v[b]=this.i(b)^C.i(b);return new o(v,this.h^C.h)};function ee(C){for(var y=C.g.length+1,v=[],b=0;b<y;b++)v[b]=C.i(b)<<1|C.i(b-1)>>>31;return new o(v,C.h)}function te(C,y){var v=y>>5;y%=32;for(var b=C.g.length-v,R=[],I=0;I<b;I++)R[I]=0<y?C.i(I+v)>>>y|C.i(I+v+1)<<32-y:C.i(I+v);return new o(R,C.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,uy=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,bs=o}).apply(typeof Sp<"u"?Sp:typeof self<"u"?self:typeof window<"u"?window:{});var ia=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hy,Di,fy,va,_u,dy,py,my;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,f,p){return a==Array.prototype||a==Object.prototype||(a[f]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ia=="object"&&ia];for(var f=0;f<a.length;++f){var p=a[f];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var s=n(this);function r(a,f){if(f)e:{var p=s;a=a.split(".");for(var _=0;_<a.length-1;_++){var k=a[_];if(!(k in p))break e;p=p[k]}a=a[a.length-1],_=p[a],f=f(_),f!=_&&f!=null&&e(p,a,{configurable:!0,writable:!0,value:f})}}function i(a,f){a instanceof String&&(a+="");var p=0,_=!1,k={next:function(){if(!_&&p<a.length){var x=p++;return{value:f(x,a[x]),done:!1}}return _=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}r("Array.prototype.values",function(a){return a||function(){return i(this,function(f,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var f=typeof a;return f=f!="object"?f:a?Array.isArray(a)?"array":f:"null",f=="array"||f=="object"&&typeof a.length=="number"}function u(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function h(a,f,p){return a.call.apply(a.bind,arguments)}function d(a,f,p){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,_),a.apply(f,k)}}return function(){return a.apply(f,arguments)}}function m(a,f,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,m.apply(null,arguments)}function g(a,f){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function A(a,f){function p(){}p.prototype=f.prototype,a.aa=f.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(_,k,x){for(var K=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)K[Ue-2]=arguments[Ue];return f.prototype[k].apply(_,K)}}function S(a){const f=a.length;if(0<f){const p=Array(f);for(let _=0;_<f;_++)p[_]=a[_];return p}return[]}function N(a,f){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(c(_)){const k=a.length||0,x=_.length||0;a.length=k+x;for(let K=0;K<x;K++)a[k+K]=_[K]}else a.push(_)}}class V{constructor(f,p){this.i=f,this.j=p,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function F(a){return/^[\s\xa0]*$/.test(a)}function D(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var ee=D().indexOf("Gecko")!=-1&&!(D().toLowerCase().indexOf("webkit")!=-1&&D().indexOf("Edge")==-1)&&!(D().indexOf("Trident")!=-1||D().indexOf("MSIE")!=-1)&&D().indexOf("Edge")==-1;function te(a,f,p){for(const _ in a)f.call(p,a[_],_,a)}function C(a,f){for(const p in a)f.call(void 0,a[p],p,a)}function y(a){const f={};for(const p in a)f[p]=a[p];return f}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(a,f){let p,_;for(let k=1;k<arguments.length;k++){_=arguments[k];for(p in _)a[p]=_[p];for(let x=0;x<v.length;x++)p=v[x],Object.prototype.hasOwnProperty.call(_,p)&&(a[p]=_[p])}}function R(a){var f=1;a=a.split(":");const p=[];for(;0<f&&a.length;)p.push(a.shift()),f--;return a.length&&p.push(a.join(":")),p}function I(a){l.setTimeout(()=>{throw a},0)}function E(){var a=Ht;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class Ve{constructor(){this.h=this.g=null}add(f,p){const _=it.get();_.set(f,p),this.h?this.h.next=_:this.g=_,this.h=_}}var it=new V(()=>new Ge,a=>a.reset());class Ge{constructor(){this.next=this.g=this.h=null}set(f,p){this.h=f,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let we,ge=!1,Ht=new Ve,an=()=>{const a=l.Promise.resolve(void 0);we=()=>{a.then(Xt)}};var Xt=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(p){I(p)}var f=it;f.j(a),100>f.h&&(f.h++,a.next=f.g,f.g=a)}ge=!1};function Qe(){this.s=this.s,this.C=this.C}Qe.prototype.s=!1,Qe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Qe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ye(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}Ye.prototype.h=function(){this.defaultPrevented=!0};var as=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,f),l.removeEventListener("test",p,f)}catch{}return a}();function wn(a,f){if(Ye.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget){if(ee){e:{try{O(f.nodeName);var k=!0;break e}catch{}k=!1}k||(f=null)}}else p=="mouseover"?f=a.fromElement:p=="mouseout"&&(f=a.toElement);this.relatedTarget=f,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ft[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&wn.aa.h.call(this)}}A(wn,Ye);var Ft={2:"touch",3:"pen",4:"mouse"};wn.prototype.h=function(){wn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var M="closure_listenable_"+(1e6*Math.random()|0),J=0;function Y(a,f,p,_,k){this.listener=a,this.proxy=null,this.src=f,this.type=p,this.capture=!!_,this.ha=k,this.key=++J,this.da=this.fa=!1}function ne(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Re(a){this.src=a,this.g={},this.h=0}Re.prototype.add=function(a,f,p,_,k){var x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);var K=w(a,f,_,k);return-1<K?(f=a[K],p||(f.fa=!1)):(f=new Y(f,this.src,x,!!_,k),f.fa=p,a.push(f)),f};function T(a,f){var p=f.type;if(p in a.g){var _=a.g[p],k=Array.prototype.indexOf.call(_,f,void 0),x;(x=0<=k)&&Array.prototype.splice.call(_,k,1),x&&(ne(f),a.g[p].length==0&&(delete a.g[p],a.h--))}}function w(a,f,p,_){for(var k=0;k<a.length;++k){var x=a[k];if(!x.da&&x.listener==f&&x.capture==!!p&&x.ha==_)return k}return-1}var P="closure_lm_"+(1e6*Math.random()|0),L={};function $(a,f,p,_,k){if(Array.isArray(f)){for(var x=0;x<f.length;x++)$(a,f[x],p,_,k);return null}return p=le(p),a&&a[M]?a.K(f,p,u(_)?!!_.capture:!1,k):U(a,f,p,!1,_,k)}function U(a,f,p,_,k,x){if(!f)throw Error("Invalid event type");var K=u(k)?!!k.capture:!!k,Ue=X(a);if(Ue||(a[P]=Ue=new Re(a)),p=Ue.add(f,p,_,K,x),p.proxy)return p;if(_=G(),p.proxy=_,_.src=a,_.listener=p,a.addEventListener)as||(k=K),k===void 0&&(k=!1),a.addEventListener(f.toString(),_,k);else if(a.attachEvent)a.attachEvent(H(f.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function G(){function a(p){return f.call(a.src,a.listener,p)}const f=oe;return a}function z(a,f,p,_,k){if(Array.isArray(f))for(var x=0;x<f.length;x++)z(a,f[x],p,_,k);else _=u(_)?!!_.capture:!!_,p=le(p),a&&a[M]?(a=a.i,f=String(f).toString(),f in a.g&&(x=a.g[f],p=w(x,p,_,k),-1<p&&(ne(x[p]),Array.prototype.splice.call(x,p,1),x.length==0&&(delete a.g[f],a.h--)))):a&&(a=X(a))&&(f=a.g[f.toString()],a=-1,f&&(a=w(f,p,_,k)),(p=-1<a?f[a]:null)&&W(p))}function W(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[M])T(f.i,a);else{var p=a.type,_=a.proxy;f.removeEventListener?f.removeEventListener(p,_,a.capture):f.detachEvent?f.detachEvent(H(p),_):f.addListener&&f.removeListener&&f.removeListener(_),(p=X(f))?(T(p,a),p.h==0&&(p.src=null,f[P]=null)):ne(a)}}}function H(a){return a in L?L[a]:L[a]="on"+a}function oe(a,f){if(a.da)a=!0;else{f=new wn(f,this);var p=a.listener,_=a.ha||a.src;a.fa&&W(a),a=p.call(_,f)}return a}function X(a){return a=a[P],a instanceof Re?a:null}var se="__closure_events_fn_"+(1e9*Math.random()>>>0);function le(a){return typeof a=="function"?a:(a[se]||(a[se]=function(f){return a.handleEvent(f)}),a[se])}function ae(){Qe.call(this),this.i=new Re(this),this.M=this,this.F=null}A(ae,Qe),ae.prototype[M]=!0,ae.prototype.removeEventListener=function(a,f,p,_){z(this,a,f,p,_)};function pe(a,f){var p,_=a.F;if(_)for(p=[];_;_=_.F)p.push(_);if(a=a.M,_=f.type||f,typeof f=="string")f=new Ye(f,a);else if(f instanceof Ye)f.target=f.target||a;else{var k=f;f=new Ye(_,a),b(f,k)}if(k=!0,p)for(var x=p.length-1;0<=x;x--){var K=f.g=p[x];k=Ie(K,_,!0,f)&&k}if(K=f.g=a,k=Ie(K,_,!0,f)&&k,k=Ie(K,_,!1,f)&&k,p)for(x=0;x<p.length;x++)K=f.g=p[x],k=Ie(K,_,!1,f)&&k}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var a=this.i,f;for(f in a.g){for(var p=a.g[f],_=0;_<p.length;_++)ne(p[_]);delete a.g[f],a.h--}}this.F=null},ae.prototype.K=function(a,f,p,_){return this.i.add(String(a),f,!1,p,_)},ae.prototype.L=function(a,f,p,_){return this.i.add(String(a),f,!0,p,_)};function Ie(a,f,p,_){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();for(var k=!0,x=0;x<f.length;++x){var K=f[x];if(K&&!K.da&&K.capture==p){var Ue=K.listener,gt=K.ha||K.src;K.fa&&T(a.i,K),k=Ue.call(gt,_)!==!1&&k}}return k&&!_.defaultPrevented}function wt(a,f,p){if(typeof a=="function")p&&(a=m(a,p));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:l.setTimeout(a,f||0)}function pt(a){a.g=wt(()=>{a.g=null,a.i&&(a.i=!1,pt(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class Jt extends Qe{constructor(f,p){super(),this.m=f,this.l=p,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:pt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function It(a){Qe.call(this),this.h=a,this.g={}}A(It,Qe);var ls=[];function ci(a){te(a.g,function(f,p){this.g.hasOwnProperty(p)&&W(f)},a),a.g={}}It.prototype.N=function(){It.aa.N.call(this),ci(this)},It.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var mt=l.JSON.stringify,Zt=l.JSON.parse,Fo=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Yl(){}Yl.prototype.h=null;function Cf(a){return a.h||(a.h=a.i())}function Rf(){}var ui={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Xl(){Ye.call(this,"d")}A(Xl,Ye);function Jl(){Ye.call(this,"c")}A(Jl,Ye);var Fs={},Sf=null;function Uo(){return Sf=Sf||new ae}Fs.La="serverreachability";function Pf(a){Ye.call(this,Fs.La,a)}A(Pf,Ye);function hi(a){const f=Uo();pe(f,new Pf(f))}Fs.STAT_EVENT="statevent";function kf(a,f){Ye.call(this,Fs.STAT_EVENT,a),this.stat=f}A(kf,Ye);function Ot(a){const f=Uo();pe(f,new kf(f,a))}Fs.Ma="timingevent";function Nf(a,f){Ye.call(this,Fs.Ma,a),this.size=f}A(Nf,Ye);function fi(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},f)}function di(){this.g=!0}di.prototype.xa=function(){this.g=!1};function gT(a,f,p,_,k,x){a.info(function(){if(a.g)if(x)for(var K="",Ue=x.split("&"),gt=0;gt<Ue.length;gt++){var Se=Ue[gt].split("=");if(1<Se.length){var bt=Se[0];Se=Se[1];var At=bt.split("_");K=2<=At.length&&At[1]=="type"?K+(bt+"="+Se+"&"):K+(bt+"=redacted&")}}else K=null;else K=x;return"XMLHTTP REQ ("+_+") [attempt "+k+"]: "+f+`
`+p+`
`+K})}function _T(a,f,p,_,k,x,K){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+k+"]: "+f+`
`+p+`
`+x+" "+K})}function pr(a,f,p,_){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+vT(a,p)+(_?" "+_:"")})}function yT(a,f){a.info(function(){return"TIMEOUT: "+f})}di.prototype.info=function(){};function vT(a,f){if(!a.g)return f;if(!f)return null;try{var p=JSON.parse(f);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var _=p[a];if(!(2>_.length)){var k=_[1];if(Array.isArray(k)&&!(1>k.length)){var x=k[0];if(x!="noop"&&x!="stop"&&x!="close")for(var K=1;K<k.length;K++)k[K]=""}}}}return mt(p)}catch{return f}}var Bo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},xf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Zl;function $o(){}A($o,Yl),$o.prototype.g=function(){return new XMLHttpRequest},$o.prototype.i=function(){return{}},Zl=new $o;function cs(a,f,p,_){this.j=a,this.i=f,this.l=p,this.R=_||1,this.U=new It(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Df}function Df(){this.i=null,this.g="",this.h=!1}var Of={},ec={};function tc(a,f,p){a.L=1,a.v=Wo(Un(f)),a.m=p,a.P=!0,Mf(a,null)}function Mf(a,f){a.F=Date.now(),jo(a),a.A=Un(a.v);var p=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),Qf(p.i,"t",_),a.C=0,p=a.j.J,a.h=new Df,a.g=dd(a.j,p?f:null,!a.m),0<a.O&&(a.M=new Jt(m(a.Y,a,a.g),a.O)),f=a.U,p=a.g,_=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(ls[0]=k.toString()),k=ls);for(var x=0;x<k.length;x++){var K=$(p,k[x],_||f.handleEvent,!1,f.h||f);if(!K)break;f.g[K.key]=K}f=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,f)):(a.u="GET",a.g.ea(a.A,a.u,null,f)),hi(),gT(a.i,a.u,a.A,a.l,a.R,a.m)}cs.prototype.ca=function(a){a=a.target;const f=this.M;f&&Bn(a)==3?f.j():this.Y(a)},cs.prototype.Y=function(a){try{if(a==this.g)e:{const At=Bn(this.g);var f=this.g.Ba();const _r=this.g.Z();if(!(3>At)&&(At!=3||this.g&&(this.h.h||this.g.oa()||nd(this.g)))){this.J||At!=4||f==7||(f==8||0>=_r?hi(3):hi(2)),nc(this);var p=this.g.Z();this.X=p;t:if(Lf(this)){var _=nd(this.g);a="";var k=_.length,x=Bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Us(this),pi(this);var K="";break t}this.h.i=new l.TextDecoder}for(f=0;f<k;f++)this.h.h=!0,a+=this.h.i.decode(_[f],{stream:!(x&&f==k-1)});_.length=0,this.h.g+=a,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=p==200,_T(this.i,this.u,this.A,this.l,this.R,At,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,gt=this.g;if((Ue=gt.g?gt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(Ue)){var Se=Ue;break t}}Se=null}if(p=Se)pr(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,sc(this,p);else{this.o=!1,this.s=3,Ot(12),Us(this),pi(this);break e}}if(this.P){p=!0;let ln;for(;!this.J&&this.C<K.length;)if(ln=ET(this,K),ln==ec){At==4&&(this.s=4,Ot(14),p=!1),pr(this.i,this.l,null,"[Incomplete Response]");break}else if(ln==Of){this.s=4,Ot(15),pr(this.i,this.l,K,"[Invalid Chunk]"),p=!1;break}else pr(this.i,this.l,ln,null),sc(this,ln);if(Lf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),At!=4||K.length!=0||this.h.h||(this.s=1,Ot(16),p=!1),this.o=this.o&&p,!p)pr(this.i,this.l,K,"[Invalid Chunked Response]"),Us(this),pi(this);else if(0<K.length&&!this.W){this.W=!0;var bt=this.j;bt.g==this&&bt.ba&&!bt.M&&(bt.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),cc(bt),bt.M=!0,Ot(11))}}else pr(this.i,this.l,K,null),sc(this,K);At==4&&Us(this),this.o&&!this.J&&(At==4?cd(this.j,this):(this.o=!1,jo(this)))}else VT(this.g),p==400&&0<K.indexOf("Unknown SID")?(this.s=3,Ot(12)):(this.s=0,Ot(13)),Us(this),pi(this)}}}catch{}finally{}};function Lf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function ET(a,f){var p=a.C,_=f.indexOf(`
`,p);return _==-1?ec:(p=Number(f.substring(p,_)),isNaN(p)?Of:(_+=1,_+p>f.length?ec:(f=f.slice(_,_+p),a.C=_+p,f)))}cs.prototype.cancel=function(){this.J=!0,Us(this)};function jo(a){a.S=Date.now()+a.I,Vf(a,a.I)}function Vf(a,f){if(a.B!=null)throw Error("WatchDog timer not null");a.B=fi(m(a.ba,a),f)}function nc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}cs.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(yT(this.i,this.A),this.L!=2&&(hi(),Ot(17)),Us(this),this.s=2,pi(this)):Vf(this,this.S-a)};function pi(a){a.j.G==0||a.J||cd(a.j,a)}function Us(a){nc(a);var f=a.M;f&&typeof f.ma=="function"&&f.ma(),a.M=null,ci(a.U),a.g&&(f=a.g,a.g=null,f.abort(),f.ma())}function sc(a,f){try{var p=a.j;if(p.G!=0&&(p.g==a||rc(p.h,a))){if(!a.K&&rc(p.h,a)&&p.G==3){try{var _=p.Da.g.parse(f)}catch{_=null}if(Array.isArray(_)&&_.length==3){var k=_;if(k[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)Xo(p),Qo(p);else break e;lc(p),Ot(18)}}else p.za=k[1],0<p.za-p.T&&37500>k[2]&&p.F&&p.v==0&&!p.C&&(p.C=fi(m(p.Za,p),6e3));if(1>=Bf(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else $s(p,11)}else if((a.K||p.g==a)&&Xo(p),!F(f))for(k=p.Da.g.parse(f),f=0;f<k.length;f++){let Se=k[f];if(p.T=Se[0],Se=Se[1],p.G==2)if(Se[0]=="c"){p.K=Se[1],p.ia=Se[2];const bt=Se[3];bt!=null&&(p.la=bt,p.j.info("VER="+p.la));const At=Se[4];At!=null&&(p.Aa=At,p.j.info("SVER="+p.Aa));const _r=Se[5];_r!=null&&typeof _r=="number"&&0<_r&&(_=1.5*_r,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const ln=a.g;if(ln){const Zo=ln.g?ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zo){var x=_.h;x.g||Zo.indexOf("spdy")==-1&&Zo.indexOf("quic")==-1&&Zo.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(ic(x,x.h),x.h=null))}if(_.D){const uc=ln.g?ln.g.getResponseHeader("X-HTTP-Session-Id"):null;uc&&(_.ya=uc,je(_.I,_.D,uc))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var K=a;if(_.qa=fd(_,_.J?_.ia:null,_.W),K.K){$f(_.h,K);var Ue=K,gt=_.L;gt&&(Ue.I=gt),Ue.B&&(nc(Ue),jo(Ue)),_.g=K}else ad(_);0<p.i.length&&Yo(p)}else Se[0]!="stop"&&Se[0]!="close"||$s(p,7);else p.G==3&&(Se[0]=="stop"||Se[0]=="close"?Se[0]=="stop"?$s(p,7):ac(p):Se[0]!="noop"&&p.l&&p.l.ta(Se),p.v=0)}}hi(4)}catch{}}var TT=class{constructor(a,f){this.g=a,this.map=f}};function Ff(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Uf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Bf(a){return a.h?1:a.g?a.g.size:0}function rc(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function ic(a,f){a.g?a.g.add(f):a.h=f}function $f(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}Ff.prototype.cancel=function(){if(this.i=jf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function jf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const p of a.g.values())f=f.concat(p.D);return f}return S(a.i)}function wT(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var f=[],p=a.length,_=0;_<p;_++)f.push(a[_]);return f}f=[],p=0;for(_ in a)f[p++]=a[_];return f}function IT(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var f=[];a=a.length;for(var p=0;p<a;p++)f.push(p);return f}f=[],p=0;for(const _ in a)f[p++]=_;return f}}}function qf(a,f){if(a.forEach&&typeof a.forEach=="function")a.forEach(f,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,f,void 0);else for(var p=IT(a),_=wT(a),k=_.length,x=0;x<k;x++)f.call(void 0,_[x],p&&p[x],a)}var Hf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bT(a,f){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var _=a[p].indexOf("="),k=null;if(0<=_){var x=a[p].substring(0,_);k=a[p].substring(_+1)}else x=a[p];f(x,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Bs(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Bs){this.h=a.h,qo(this,a.j),this.o=a.o,this.g=a.g,Ho(this,a.s),this.l=a.l;var f=a.i,p=new _i;p.i=f.i,f.g&&(p.g=new Map(f.g),p.h=f.h),Wf(this,p),this.m=a.m}else a&&(f=String(a).match(Hf))?(this.h=!1,qo(this,f[1]||"",!0),this.o=mi(f[2]||""),this.g=mi(f[3]||"",!0),Ho(this,f[4]),this.l=mi(f[5]||"",!0),Wf(this,f[6]||"",!0),this.m=mi(f[7]||"")):(this.h=!1,this.i=new _i(null,this.h))}Bs.prototype.toString=function(){var a=[],f=this.j;f&&a.push(gi(f,zf,!0),":");var p=this.g;return(p||f=="file")&&(a.push("//"),(f=this.o)&&a.push(gi(f,zf,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(gi(p,p.charAt(0)=="/"?RT:CT,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",gi(p,PT)),a.join("")};function Un(a){return new Bs(a)}function qo(a,f,p){a.j=p?mi(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function Ho(a,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);a.s=f}else a.s=null}function Wf(a,f,p){f instanceof _i?(a.i=f,kT(a.i,a.h)):(p||(f=gi(f,ST)),a.i=new _i(f,a.h))}function je(a,f,p){a.i.set(f,p)}function Wo(a){return je(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function mi(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function gi(a,f,p){return typeof a=="string"?(a=encodeURI(a).replace(f,AT),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function AT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var zf=/[#\/\?@]/g,CT=/[#\?:]/g,RT=/[#\?]/g,ST=/[#\?@]/g,PT=/#/g;function _i(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function us(a){a.g||(a.g=new Map,a.h=0,a.i&&bT(a.i,function(f,p){a.add(decodeURIComponent(f.replace(/\+/g," ")),p)}))}t=_i.prototype,t.add=function(a,f){us(this),this.i=null,a=mr(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(f),this.h+=1,this};function Kf(a,f){us(a),f=mr(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function Gf(a,f){return us(a),f=mr(a,f),a.g.has(f)}t.forEach=function(a,f){us(this),this.g.forEach(function(p,_){p.forEach(function(k){a.call(f,k,_,this)},this)},this)},t.na=function(){us(this);const a=Array.from(this.g.values()),f=Array.from(this.g.keys()),p=[];for(let _=0;_<f.length;_++){const k=a[_];for(let x=0;x<k.length;x++)p.push(f[_])}return p},t.V=function(a){us(this);let f=[];if(typeof a=="string")Gf(this,a)&&(f=f.concat(this.g.get(mr(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)f=f.concat(a[p])}return f},t.set=function(a,f){return us(this),this.i=null,a=mr(this,a),Gf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},t.get=function(a,f){return a?(a=this.V(a),0<a.length?String(a[0]):f):f};function Qf(a,f,p){Kf(a,f),0<p.length&&(a.i=null,a.g.set(mr(a,f),S(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(var p=0;p<f.length;p++){var _=f[p];const x=encodeURIComponent(String(_)),K=this.V(_);for(_=0;_<K.length;_++){var k=x;K[_]!==""&&(k+="="+encodeURIComponent(String(K[_]))),a.push(k)}}return this.i=a.join("&")};function mr(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function kT(a,f){f&&!a.j&&(us(a),a.i=null,a.g.forEach(function(p,_){var k=_.toLowerCase();_!=k&&(Kf(this,_),Qf(this,k,p))},a)),a.j=f}function NT(a,f){const p=new di;if(l.Image){const _=new Image;_.onload=g(hs,p,"TestLoadImage: loaded",!0,f,_),_.onerror=g(hs,p,"TestLoadImage: error",!1,f,_),_.onabort=g(hs,p,"TestLoadImage: abort",!1,f,_),_.ontimeout=g(hs,p,"TestLoadImage: timeout",!1,f,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else f(!1)}function xT(a,f){const p=new di,_=new AbortController,k=setTimeout(()=>{_.abort(),hs(p,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:_.signal}).then(x=>{clearTimeout(k),x.ok?hs(p,"TestPingServer: ok",!0,f):hs(p,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(k),hs(p,"TestPingServer: error",!1,f)})}function hs(a,f,p,_,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),_(p)}catch{}}function DT(){this.g=new Fo}function OT(a,f,p){const _=p||"";try{qf(a,function(k,x){let K=k;u(k)&&(K=mt(k)),f.push(_+x+"="+encodeURIComponent(K))})}catch(k){throw f.push(_+"type="+encodeURIComponent("_badmap")),k}}function zo(a){this.l=a.Ub||null,this.j=a.eb||!1}A(zo,Yl),zo.prototype.g=function(){return new Ko(this.l,this.j)},zo.prototype.i=function(a){return function(){return a}}({});function Ko(a,f){ae.call(this),this.D=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(Ko,ae),t=Ko.prototype,t.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=f,this.readyState=1,vi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(f.body=a),(this.D||l).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,vi(this)),this.g&&(this.readyState=3,vi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Yf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Yf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?yi(this):vi(this),this.readyState==3&&Yf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,yi(this))},t.Qa=function(a){this.g&&(this.response=a,yi(this))},t.ga=function(){this.g&&yi(this)};function yi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,vi(a)}t.setRequestHeader=function(a,f){this.u.append(a,f)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var p=f.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=f.next();return a.join(`\r
`)};function vi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ko.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Xf(a){let f="";return te(a,function(p,_){f+=_,f+=":",f+=p,f+=`\r
`}),f}function oc(a,f,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=Xf(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):je(a,f,p))}function Xe(a){ae.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Xe,ae);var MT=/^https?$/i,LT=["POST","PUT"];t=Xe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,f,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Zl.g(),this.v=this.o?Cf(this.o):Cf(Zl),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(x){Jf(this,x);return}if(a=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var k in _)p.set(k,_[k]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const x of _.keys())p.set(x,_.get(x));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(x=>x.toLowerCase()=="content-type"),k=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(LT,f,void 0))||_||k||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,K]of p)this.g.setRequestHeader(x,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{td(this),this.u=!0,this.g.send(a),this.u=!1}catch(x){Jf(this,x)}};function Jf(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.m=5,Zf(a),Go(a)}function Zf(a){a.A||(a.A=!0,pe(a,"complete"),pe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,pe(this,"complete"),pe(this,"abort"),Go(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Go(this,!0)),Xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ed(this):this.bb())},t.bb=function(){ed(this)};function ed(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Bn(a)!=4||a.Z()!=2)){if(a.u&&Bn(a)==4)wt(a.Ea,0,a);else if(pe(a,"readystatechange"),Bn(a)==4){a.h=!1;try{const K=a.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var p;if(!(p=f)){var _;if(_=K===0){var k=String(a.D).match(Hf)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),_=!MT.test(k?k.toLowerCase():"")}p=_}if(p)pe(a,"complete"),pe(a,"success");else{a.m=6;try{var x=2<Bn(a)?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.Z()+"]",Zf(a)}}finally{Go(a)}}}}function Go(a,f){if(a.g){td(a);const p=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,f||pe(a,"ready");try{p.onreadystatechange=_}catch{}}}function td(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Bn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Bn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),Zt(f)}};function nd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function VT(a){const f={};a=(a.g&&2<=Bn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(F(a[_]))continue;var p=R(a[_]);const k=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const x=f[k]||[];f[k]=x,x.push(p)}C(f,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ei(a,f,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||f}function sd(a){this.Aa=0,this.i=[],this.j=new di,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ei("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ei("baseRetryDelayMs",5e3,a),this.cb=Ei("retryDelaySeedMs",1e4,a),this.Wa=Ei("forwardChannelMaxRetries",2,a),this.wa=Ei("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Ff(a&&a.concurrentRequestLimit),this.Da=new DT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=sd.prototype,t.la=8,t.G=1,t.connect=function(a,f,p,_){Ot(0),this.W=a,this.H=f||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=fd(this,null,this.W),Yo(this)};function ac(a){if(rd(a),a.G==3){var f=a.U++,p=Un(a.I);if(je(p,"SID",a.K),je(p,"RID",f),je(p,"TYPE","terminate"),Ti(a,p),f=new cs(a,a.j,f),f.L=2,f.v=Wo(Un(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(f.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=f.v,p=!0),p||(f.g=dd(f.j,null),f.g.ea(f.v)),f.F=Date.now(),jo(f)}hd(a)}function Qo(a){a.g&&(cc(a),a.g.cancel(),a.g=null)}function rd(a){Qo(a),a.u&&(l.clearTimeout(a.u),a.u=null),Xo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Yo(a){if(!Uf(a.h)&&!a.s){a.s=!0;var f=a.Ga;we||an(),ge||(we(),ge=!0),Ht.add(f,a),a.B=0}}function FT(a,f){return Bf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=f.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=fi(m(a.Ga,a,f),ud(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new cs(this,this.j,a);let x=this.o;if(this.S&&(x?(x=y(x),b(x,this.S)):x=this.S),this.m!==null||this.O||(k.H=x,x=null),this.P)e:{for(var f=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(f+=_,4096<f){f=p;break e}if(f===4096||p===this.i.length-1){f=p+1;break e}}f=1e3}else f=1e3;f=od(this,k,f),p=Un(this.I),je(p,"RID",a),je(p,"CVER",22),this.D&&je(p,"X-HTTP-Session-Id",this.D),Ti(this,p),x&&(this.O?f="headers="+encodeURIComponent(String(Xf(x)))+"&"+f:this.m&&oc(p,this.m,x)),ic(this.h,k),this.Ua&&je(p,"TYPE","init"),this.P?(je(p,"$req",f),je(p,"SID","null"),k.T=!0,tc(k,p,null)):tc(k,p,f),this.G=2}}else this.G==3&&(a?id(this,a):this.i.length==0||Uf(this.h)||id(this))};function id(a,f){var p;f?p=f.l:p=a.U++;const _=Un(a.I);je(_,"SID",a.K),je(_,"RID",p),je(_,"AID",a.T),Ti(a,_),a.m&&a.o&&oc(_,a.m,a.o),p=new cs(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),f&&(a.i=f.D.concat(a.i)),f=od(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ic(a.h,p),tc(p,_,f)}function Ti(a,f){a.H&&te(a.H,function(p,_){je(f,_,p)}),a.l&&qf({},function(p,_){je(f,_,p)})}function od(a,f,p){p=Math.min(a.i.length,p);var _=a.l?m(a.l.Na,a.l,a):null;e:{var k=a.i;let x=-1;for(;;){const K=["count="+p];x==-1?0<p?(x=k[0].g,K.push("ofs="+x)):x=0:K.push("ofs="+x);let Ue=!0;for(let gt=0;gt<p;gt++){let Se=k[gt].g;const bt=k[gt].map;if(Se-=x,0>Se)x=Math.max(0,k[gt].g-100),Ue=!1;else try{OT(bt,K,"req"+Se+"_")}catch{_&&_(bt)}}if(Ue){_=K.join("&");break e}}}return a=a.i.splice(0,p),f.D=a,_}function ad(a){if(!a.g&&!a.u){a.Y=1;var f=a.Fa;we||an(),ge||(we(),ge=!0),Ht.add(f,a),a.v=0}}function lc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=fi(m(a.Fa,a),ud(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,ld(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=fi(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ot(10),Qo(this),ld(this))};function cc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function ld(a){a.g=new cs(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var f=Un(a.qa);je(f,"RID","rpc"),je(f,"SID",a.K),je(f,"AID",a.T),je(f,"CI",a.F?"0":"1"),!a.F&&a.ja&&je(f,"TO",a.ja),je(f,"TYPE","xmlhttp"),Ti(a,f),a.m&&a.o&&oc(f,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=Wo(Un(f)),p.m=null,p.P=!0,Mf(p,a)}t.Za=function(){this.C!=null&&(this.C=null,Qo(this),lc(this),Ot(19))};function Xo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function cd(a,f){var p=null;if(a.g==f){Xo(a),cc(a),a.g=null;var _=2}else if(rc(a.h,f))p=f.D,$f(a.h,f),_=1;else return;if(a.G!=0){if(f.o)if(_==1){p=f.m?f.m.length:0,f=Date.now()-f.F;var k=a.B;_=Uo(),pe(_,new Nf(_,p)),Yo(a)}else ad(a);else if(k=f.s,k==3||k==0&&0<f.X||!(_==1&&FT(a,f)||_==2&&lc(a)))switch(p&&0<p.length&&(f=a.h,f.i=f.i.concat(p)),k){case 1:$s(a,5);break;case 4:$s(a,10);break;case 3:$s(a,6);break;default:$s(a,2)}}}function ud(a,f){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*f}function $s(a,f){if(a.j.info("Error code "+f),f==2){var p=m(a.fb,a),_=a.Xa;const k=!_;_=new Bs(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||qo(_,"https"),Wo(_),k?NT(_.toString(),p):xT(_.toString(),p)}else Ot(2);a.G=0,a.l&&a.l.sa(f),hd(a),rd(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ot(2)):(this.j.info("Failed to ping google.com"),Ot(1))};function hd(a){if(a.G=0,a.ka=[],a.l){const f=jf(a.h);(f.length!=0||a.i.length!=0)&&(N(a.ka,f),N(a.ka,a.i),a.h.i.length=0,S(a.i),a.i.length=0),a.l.ra()}}function fd(a,f,p){var _=p instanceof Bs?Un(p):new Bs(p);if(_.g!="")f&&(_.g=f+"."+_.g),Ho(_,_.s);else{var k=l.location;_=k.protocol,f=f?f+"."+k.hostname:k.hostname,k=+k.port;var x=new Bs(null);_&&qo(x,_),f&&(x.g=f),k&&Ho(x,k),p&&(x.l=p),_=x}return p=a.D,f=a.ya,p&&f&&je(_,p,f),je(_,"VER",a.la),Ti(a,_),_}function dd(a,f,p){if(f&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Ca&&!a.pa?new Xe(new zo({eb:p})):new Xe(a.pa),f.Ha(a.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function pd(){}t=pd.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Jo(){}Jo.prototype.g=function(a,f){return new Wt(a,f)};function Wt(a,f){ae.call(this),this.g=new sd(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(a?a["X-WebChannel-Client-Profile"]=f.va:a={"X-WebChannel-Client-Profile":f.va}),this.g.S=a,(a=f&&f.Sb)&&!F(a)&&(this.g.m=a),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!F(f)&&(this.g.D=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new gr(this)}A(Wt,ae),Wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Wt.prototype.close=function(){ac(this.g)},Wt.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=mt(a),a=p);f.i.push(new TT(f.Ya++,a)),f.G==3&&Yo(f)},Wt.prototype.N=function(){this.g.l=null,delete this.j,ac(this.g),delete this.g,Wt.aa.N.call(this)};function md(a){Xl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const p in f){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}A(md,Xl);function gd(){Jl.call(this),this.status=1}A(gd,Jl);function gr(a){this.g=a}A(gr,pd),gr.prototype.ua=function(){pe(this.g,"a")},gr.prototype.ta=function(a){pe(this.g,new md(a))},gr.prototype.sa=function(a){pe(this.g,new gd)},gr.prototype.ra=function(){pe(this.g,"b")},Jo.prototype.createWebChannel=Jo.prototype.g,Wt.prototype.send=Wt.prototype.o,Wt.prototype.open=Wt.prototype.m,Wt.prototype.close=Wt.prototype.close,my=function(){return new Jo},py=function(){return Uo()},dy=Fs,_u={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Bo.NO_ERROR=0,Bo.TIMEOUT=8,Bo.HTTP_ERROR=6,va=Bo,xf.COMPLETE="complete",fy=xf,Rf.EventType=ui,ui.OPEN="a",ui.CLOSE="b",ui.ERROR="c",ui.MESSAGE="d",ae.prototype.listen=ae.prototype.K,Di=Rf,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,hy=Xe}).apply(typeof ia<"u"?ia:typeof self<"u"?self:typeof window<"u"?window:{});const Pp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const tr=new Co("@firebase/firestore");function wr(){return tr.logLevel}function Z(t,...e){if(tr.logLevel<=me.DEBUG){const n=e.map(Ih);tr.debug(`Firestore (${ni}): ${t}`,...n)}}function ts(t,...e){if(tr.logLevel<=me.ERROR){const n=e.map(Ih);tr.error(`Firestore (${ni}): ${t}`,...n)}}function qr(t,...e){if(tr.logLevel<=me.WARN){const n=e.map(Ih);tr.warn(`Firestore (${ni}): ${t}`,...n)}}function Ih(t){if(typeof t=="string")return t;try{/**
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
 */function ue(t="Unexpected state"){const e=`FIRESTORE (${ni}) INTERNAL ASSERTION FAILED: `+t;throw ts(e),new Error(e)}function Le(t,e){t||ue()}function de(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends is{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class IR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Rt.UNAUTHENTICATED))}shutdown(){}}class bR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class AR{constructor(e){this.t=e,this.currentUser=Rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Le(this.o===void 0);let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Yn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Yn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},l=c=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Yn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Le(typeof s.accessToken=="string"),new gy(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Le(e===null||typeof e=="string"),new Rt(e)}}class CR{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=Rt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class RR{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new CR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class SR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class PR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Le(this.o===void 0);const s=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?r(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Le(typeof n.token=="string"),this.R=n.token,new SR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function kR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=kR(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function Ee(t,e){return t<e?-1:t>e?1:0}function Hr(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{static now(){return st.fromMillis(Date.now())}static fromDate(e){return st.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new st(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new re(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new re(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new re(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ee(this.nanoseconds,e.nanoseconds):Ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{static fromTimestamp(e){return new he(e)}static min(){return new he(new st(0,0))}static max(){return new he(new st(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,n,s){n===void 0?n=0:n>e.length&&ue(),s===void 0?s=e.length-n:s>e.length-n&&ue(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return An.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof An?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=An.compareSegments(e.get(r),n.get(r));if(i!==0)return i}return Math.sign(e.length-n.length)}static compareSegments(e,n){const s=An.isNumericId(e),r=An.isNumericId(n);return s&&!r?-1:!s&&r?1:s&&r?An.extractNumericId(e).compare(An.extractNumericId(n)):e<n?-1:e>n?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return bs.fromString(e.substring(4,e.length-2))}}class Ke extends An{construct(e,n,s){return new Ke(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new re(q.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ke(n)}static emptyPath(){return new Ke([])}}const NR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vt extends An{construct(e,n,s){return new vt(e,n,s)}static isValidIdentifier(e){return NR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new vt(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new re(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new re(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new re(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else l==="`"?(o=!o,r++):l!=="."||o?(s+=l,r++):(i(),r++)}if(i(),o)throw new re(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new vt(n)}static emptyPath(){return new vt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(Ke.fromString(e))}static fromName(e){return new ie(Ke.fromString(e).popFirst(5))}static empty(){return new ie(Ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new Ke(e.slice()))}}function xR(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=he.fromTimestamp(s===1e9?new st(n+1,0):new st(n,s));return new Ps(r,ie.empty(),e)}function DR(t){return new Ps(t.readTime,t.key,-1)}class Ps{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ps(he.min(),ie.empty(),-1)}static max(){return new Ps(he.max(),ie.empty(),-1)}}function OR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ie.comparator(t.documentKey,e.documentKey),n!==0?n:Ee(t.largestBatchId,e.largestBatchId))}/**
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
 */const MR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class LR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function si(t){if(t.code!==q.FAILED_PRECONDITION||t.message!==MR)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ue(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,s)=>{n(e)})}static reject(e){return new B((n,s)=>{s(e)})}static waitFor(e){return new B((n,s)=>{let r=0,i=0,o=!1;e.forEach(l=>{++r,l.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=B.resolve(!1);for(const s of e)n=n.next(r=>r?B.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new B((s,r)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(h=>{o[u]=h,++l,l===i&&s(o)},h=>r(h))}})}static doWhile(e,n){return new B((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function VR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ri(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Sl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ie(s),this.se=s=>n.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Sl.oe=-1;function Pl(t){return t==null}function Ua(t){return t===0&&1/t==-1/0}function FR(t){return typeof t=="number"&&Number.isInteger(t)&&!Ua(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=kp(e)),e=BR(t.get(n),e);return kp(e)}function BR(t,e){let n=e;const s=t.length;for(let r=0;r<s;r++){const i=t.charAt(r);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function kp(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ar(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function yy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rt=class yu{constructor(e,n){this.comparator=e,this.root=n||As.EMPTY}insert(e,n){return new yu(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,As.BLACK,null,null))}remove(e){return new yu(this.comparator,this.root.remove(e,this.comparator).copy(null,null,As.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new oa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new oa(this.root,e,this.comparator,!1)}getReverseIterator(){return new oa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new oa(this.root,e,this.comparator,!0)}},oa=class{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},As=class Hn{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Hn.RED,this.left=r??Hn.EMPTY,this.right=i??Hn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Hn(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Hn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Hn.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Hn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Hn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ue();const e=this.left.check();if(e!==this.right.check())throw ue();return e+(this.isRed()?0:1)}};As.EMPTY=null,As.RED=!0,As.BLACK=!1;As.EMPTY=new class{constructor(){this.size=0}get key(){throw ue()}get value(){throw ue()}get color(){throw ue()}get left(){throw ue()}get right(){throw ue()}copy(e,n,s,r,i){return this}insert(e,n,s){return new As(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.comparator=e,this.data=new rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new xp(this.data.getIterator())}getIteratorFrom(e){return new xp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new at(this.comparator);return n.data=e,n}}class xp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class un{constructor(e){this.fields=e,e.sort(vt.comparator)}static empty(){return new un([])}unionWith(e){let n=new at(vt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new un(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Hr(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class vy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new vy("Invalid base64 string: "+i):i}}(e);return new Tt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new Tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Tt.EMPTY_BYTE_STRING=new Tt("");const $R=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ks(t){if(Le(!!t),typeof t=="string"){let e=0;const n=$R.exec(t);if(Le(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ze(t.seconds),nanos:Ze(t.nanos)}}function Ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ns(t){return typeof t=="string"?Tt.fromBase64String(t):Tt.fromUint8Array(t)}/**
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
 */function bh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function kl(t){const e=t.mapValue.fields.__previous_value__;return bh(e)?kl(e):e}function _o(t){const e=ks(t.mapValue.fields.__local_write_time__.timestampValue);return new st(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e,n,s,r,i,o,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class yo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new yo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof yo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const aa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function xs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?bh(t)?4:HR(t)?9007199254740991:qR(t)?10:11:ue()}function Mn(t,e){if(t===e)return!0;const n=xs(t);if(n!==xs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _o(t).isEqual(_o(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=ks(r.timestampValue),l=ks(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Ns(r.bytesValue).isEqual(Ns(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ze(r.geoPointValue.latitude)===Ze(i.geoPointValue.latitude)&&Ze(r.geoPointValue.longitude)===Ze(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ze(r.integerValue)===Ze(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=Ze(r.doubleValue),l=Ze(i.doubleValue);return o===l?Ua(o)===Ua(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Hr(t.arrayValue.values||[],e.arrayValue.values||[],Mn);case 10:case 11:return function(r,i){const o=r.mapValue.fields||{},l=i.mapValue.fields||{};if(Np(o)!==Np(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Mn(o[c],l[c])))return!1;return!0}(t,e);default:return ue()}}function vo(t,e){return(t.values||[]).find(n=>Mn(n,e))!==void 0}function Wr(t,e){if(t===e)return 0;const n=xs(t),s=xs(e);if(n!==s)return Ee(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ee(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ze(i.integerValue||i.doubleValue),c=Ze(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Dp(t.timestampValue,e.timestampValue);case 4:return Dp(_o(t),_o(e));case 5:return Ee(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Ns(i),c=Ns(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const h=Ee(l[u],c[u]);if(h!==0)return h}return Ee(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Ee(Ze(i.latitude),Ze(o.latitude));return l!==0?l:Ee(Ze(i.longitude),Ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Op(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,h;const d=i.fields||{},m=o.fields||{},g=(l=d.value)===null||l===void 0?void 0:l.arrayValue,A=(c=m.value)===null||c===void 0?void 0:c.arrayValue,S=Ee(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0);return S!==0?S:Op(g,A)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===aa.mapValue&&o===aa.mapValue)return 0;if(i===aa.mapValue)return 1;if(o===aa.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let d=0;d<c.length&&d<h.length;++d){const m=Ee(c[d],h[d]);if(m!==0)return m;const g=Wr(l[c[d]],u[h[d]]);if(g!==0)return g}return Ee(c.length,h.length)}(t.mapValue,e.mapValue);default:throw ue()}}function Dp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ee(t,e);const n=ks(t),s=ks(e),r=Ee(n.seconds,s.seconds);return r!==0?r:Ee(n.nanos,s.nanos)}function Op(t,e){const n=t.values||[],s=e.values||[];for(let r=0;r<n.length&&r<s.length;++r){const i=Wr(n[r],s[r]);if(i)return i}return Ee(n.length,s.length)}function zr(t){return vu(t)}function vu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=ks(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ns(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ie.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=vu(i);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${vu(n.fields[o])}`;return r+"}"}(t.mapValue):ue()}function Ea(t){switch(xs(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=kl(t);return e?16+Ea(e):16;case 5:return 2*t.stringValue.length;case 6:return Ns(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((r,i)=>r+Ea(i),0)}(t.arrayValue);case 10:case 11:return function(s){let r=0;return ar(s.fields,(i,o)=>{r+=i.length+Ea(o)}),r}(t.mapValue);default:throw ue()}}function Eu(t){return!!t&&"integerValue"in t}function Ah(t){return!!t&&"arrayValue"in t}function Mp(t){return!!t&&"nullValue"in t}function Lp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ta(t){return!!t&&"mapValue"in t}function qR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ki(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ar(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Ki(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ki(t.arrayValue.values[n]);return e}return Object.assign({},t)}function HR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.value=e}static empty(){return new tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Ta(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ki(n)}setAll(e){let n=vt.emptyPath(),s={},r=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=l.popLast()}o?s[l.lastSegment()]=Ki(o):r.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Ta(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Mn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Ta(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){ar(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new tn(Ki(this.value))}}function Ey(t){const e=[];return ar(t.fields,(n,s)=>{const r=new vt([n]);if(Ta(s)){const i=Ey(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new un(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ba{constructor(e,n){this.position=e,this.inclusive=n}}function Vp(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=ie.comparator(ie.fromName(o.referenceValue),n.key):s=Wr(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Fp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Mn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class $a{constructor(e,n="asc"){this.field=e,this.dir=n}}function WR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Ty{}class ot extends Ty{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new KR(e,n,s):n==="array-contains"?new YR(e,s):n==="in"?new XR(e,s):n==="not-in"?new JR(e,s):n==="array-contains-any"?new ZR(e,s):new ot(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new GR(e,s):new QR(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Wr(n,this.value)):n!==null&&xs(this.value)===xs(n)&&this.matchesComparison(Wr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ln extends Ty{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Ln(e,n)}matches(e){return wy(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function wy(t){return t.op==="and"}function Iy(t){return zR(t)&&wy(t)}function zR(t){for(const e of t.filters)if(e instanceof Ln)return!1;return!0}function Tu(t){if(t instanceof ot)return t.field.canonicalString()+t.op.toString()+zr(t.value);if(Iy(t))return t.filters.map(e=>Tu(e)).join(",");{const e=t.filters.map(n=>Tu(n)).join(",");return`${t.op}(${e})`}}function by(t,e){return t instanceof ot?function(s,r){return r instanceof ot&&s.op===r.op&&s.field.isEqual(r.field)&&Mn(s.value,r.value)}(t,e):t instanceof Ln?function(s,r){return r instanceof Ln&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,l)=>i&&by(o,r.filters[l]),!0):!1}(t,e):void ue()}function Ay(t){return t instanceof ot?function(n){return`${n.field.canonicalString()} ${n.op} ${zr(n.value)}`}(t):t instanceof Ln?function(n){return n.op.toString()+" {"+n.getFilters().map(Ay).join(" ,")+"}"}(t):"Filter"}class KR extends ot{constructor(e,n,s){super(e,n,s),this.key=ie.fromName(s.referenceValue)}matches(e){const n=ie.comparator(e.key,this.key);return this.matchesComparison(n)}}class GR extends ot{constructor(e,n){super(e,"in",n),this.keys=Cy("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class QR extends ot{constructor(e,n){super(e,"not-in",n),this.keys=Cy("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Cy(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ie.fromName(s.referenceValue))}class YR extends ot{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ah(n)&&vo(n.arrayValue,this.value)}}class XR extends ot{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&vo(this.value.arrayValue,n)}}class JR extends ot{constructor(e,n){super(e,"not-in",n)}matches(e){if(vo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!vo(this.value.arrayValue,n)}}class ZR extends ot{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ah(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>vo(this.value.arrayValue,s))}}/**
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
 */class eS{constructor(e,n=null,s=[],r=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function Up(t,e=null,n=[],s=[],r=null,i=null,o=null){return new eS(t,e,n,s,r,i,o)}function Ch(t){const e=de(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Tu(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Pl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>zr(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>zr(s)).join(",")),e.ue=n}return e.ue}function Rh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!WR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!by(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Fp(t.startAt,e.startAt)&&Fp(t.endAt,e.endAt)}function wu(t){return ie.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n=null,s=[],r=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function tS(t,e,n,s,r,i,o,l){return new Nl(t,e,n,s,r,i,o,l)}function xl(t){return new Nl(t)}function Bp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function nS(t){return t.collectionGroup!==null}function Gi(t){const e=de(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new at(vt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new $a(i,s))}),n.has(vt.keyField().canonicalString())||e.ce.push(new $a(vt.keyField(),s))}return e.ce}function Nn(t){const e=de(t);return e.le||(e.le=sS(e,Gi(t))),e.le}function sS(t,e){if(t.limitType==="F")return Up(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new $a(r.field,i)});const n=t.endAt?new Ba(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Ba(t.startAt.position,t.startAt.inclusive):null;return Up(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function Iu(t,e,n){return new Nl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Dl(t,e){return Rh(Nn(t),Nn(e))&&t.limitType===e.limitType}function Ry(t){return`${Ch(Nn(t))}|lt:${t.limitType}`}function Ir(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(r=>Ay(r)).join(", ")}]`),Pl(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(r=>zr(r)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(r=>zr(r)).join(",")),`Target(${s})`}(Nn(t))}; limitType=${t.limitType})`}function Ol(t,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):ie.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(t,e)&&function(s,r){for(const i of Gi(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(s,r){return!(s.startAt&&!function(o,l,c){const u=Vp(o,l,c);return o.inclusive?u<=0:u<0}(s.startAt,Gi(s),r)||s.endAt&&!function(o,l,c){const u=Vp(o,l,c);return o.inclusive?u>=0:u>0}(s.endAt,Gi(s),r))}(t,e)}function rS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Sy(t){return(e,n)=>{let s=!1;for(const r of Gi(t)){const i=iS(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function iS(t,e,n){const s=t.field.isKeyField()?ie.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Wr(c,u):ue()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ue()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ar(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return yy(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS=new rt(ie.comparator);function ns(){return oS}const Py=new rt(ie.comparator);function Oi(...t){let e=Py;for(const n of t)e=e.insert(n.key,n);return e}function ky(t){let e=Py;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Ys(){return Qi()}function Ny(){return Qi()}function Qi(){return new lr(t=>t.toString(),(t,e)=>t.isEqual(e))}const aS=new rt(ie.comparator),lS=new at(ie.comparator);function ve(...t){let e=lS;for(const n of t)e=e.add(n);return e}const cS=new at(Ee);function uS(){return cS}/**
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
 */function Sh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ua(e)?"-0":e}}function xy(t){return{integerValue:""+t}}function hS(t,e){return FR(e)?xy(e):Sh(t,e)}/**
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
 */class Ml{constructor(){this._=void 0}}function fS(t,e,n){return t instanceof ja?function(r,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&bh(i)&&(i=kl(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Eo?Oy(t,e):t instanceof To?My(t,e):function(r,i){const o=Dy(r,i),l=$p(o)+$p(r.Pe);return Eu(o)&&Eu(r.Pe)?xy(l):Sh(r.serializer,l)}(t,e)}function dS(t,e,n){return t instanceof Eo?Oy(t,e):t instanceof To?My(t,e):n}function Dy(t,e){return t instanceof qa?function(s){return Eu(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class ja extends Ml{}class Eo extends Ml{constructor(e){super(),this.elements=e}}function Oy(t,e){const n=Ly(e);for(const s of t.elements)n.some(r=>Mn(r,s))||n.push(s);return{arrayValue:{values:n}}}class To extends Ml{constructor(e){super(),this.elements=e}}function My(t,e){let n=Ly(e);for(const s of t.elements)n=n.filter(r=>!Mn(r,s));return{arrayValue:{values:n}}}class qa extends Ml{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function $p(t){return Ze(t.integerValue||t.doubleValue)}function Ly(t){return Ah(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function pS(t,e){return t.field.isEqual(e.field)&&function(s,r){return s instanceof Eo&&r instanceof Eo||s instanceof To&&r instanceof To?Hr(s.elements,r.elements,Mn):s instanceof qa&&r instanceof qa?Mn(s.Pe,r.Pe):s instanceof ja&&r instanceof ja}(t.transform,e.transform)}class mS{constructor(e,n){this.version=e,this.transformResults=n}}class Xn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Xn}static exists(e){return new Xn(void 0,e)}static updateTime(e){return new Xn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ll{}function Vy(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Uy(t.key,Xn.none()):new Ro(t.key,t.data,Xn.none());{const n=t.data,s=tn.empty();let r=new at(vt.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new cr(t.key,s,new un(r.toArray()),Xn.none())}}function gS(t,e,n){t instanceof Ro?function(r,i,o){const l=r.value.clone(),c=qp(r.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof cr?function(r,i,o){if(!wa(r.precondition,i))return void i.convertToUnknownDocument(o.version);const l=qp(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Fy(r)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Yi(t,e,n,s){return t instanceof Ro?function(i,o,l,c){if(!wa(i.precondition,o))return l;const u=i.value.clone(),h=Hp(i.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,s):t instanceof cr?function(i,o,l,c){if(!wa(i.precondition,o))return l;const u=Hp(i.fieldTransforms,c,o),h=o.data;return h.setAll(Fy(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,s):function(i,o,l){return wa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function _S(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Dy(s.transform,r||null);i!=null&&(n===null&&(n=tn.empty()),n.set(s.field,i))}return n||null}function jp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Hr(s,r,(i,o)=>pS(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ro extends Ll{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class cr extends Ll{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Fy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function qp(t,e,n){const s=new Map;Le(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,l=e.data.field(i.field);s.set(i.field,dS(o,l,n[r]))}return s}function Hp(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,fS(i,o,e))}return s}class Uy extends Ll{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yS extends Ll{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&gS(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Yi(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Yi(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Ny();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(r.key)?null:l;const c=Vy(o,l);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(he.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&Hr(this.mutations,e.mutations,(n,s)=>jp(n,s))&&Hr(this.baseMutations,e.baseMutations,(n,s)=>jp(n,s))}}class Ph{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Le(e.mutations.length===s.length);let r=function(){return aS}();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Ph(e,n,s,r)}}/**
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
 */class ES{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class TS{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et,be;function wS(t){switch(t){default:return ue();case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0}}function By(t){if(t===void 0)return ts("GRPC error has no .code"),q.UNKNOWN;switch(t){case et.OK:return q.OK;case et.CANCELLED:return q.CANCELLED;case et.UNKNOWN:return q.UNKNOWN;case et.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case et.INTERNAL:return q.INTERNAL;case et.UNAVAILABLE:return q.UNAVAILABLE;case et.UNAUTHENTICATED:return q.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case et.NOT_FOUND:return q.NOT_FOUND;case et.ALREADY_EXISTS:return q.ALREADY_EXISTS;case et.PERMISSION_DENIED:return q.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case et.ABORTED:return q.ABORTED;case et.OUT_OF_RANGE:return q.OUT_OF_RANGE;case et.UNIMPLEMENTED:return q.UNIMPLEMENTED;case et.DATA_LOSS:return q.DATA_LOSS;default:return ue()}}(be=et||(et={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function IS(){return new TextEncoder}/**
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
 */const bS=new bs([4294967295,4294967295],0);function Wp(t){const e=IS().encode(t),n=new uy;return n.update(e),new Uint8Array(n.digest())}function zp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new bs([n,s],0),new bs([r,i],0)]}class kh{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Mi(`Invalid padding: ${n}`);if(s<0)throw new Mi(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Mi(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Mi(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=bs.fromNumber(this.Te)}de(e,n,s){let r=e.add(n.multiply(bs.fromNumber(s)));return r.compare(bS)===1&&(r=new bs([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Wp(e),[s,r]=zp(n);for(let i=0;i<this.hashCount;i++){const o=this.de(s,r,i);if(!this.Ee(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new kh(i,r,n);return s.forEach(l=>o.insert(l)),o}insert(e){if(this.Te===0)return;const n=Wp(e),[s,r]=zp(n);for(let i=0;i<this.hashCount;i++){const o=this.de(s,r,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Mi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,So.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Vl(he.min(),r,new rt(Ee),ns(),ve())}}class So{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new So(s,n,ve(),ve(),ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,n,s,r){this.Re=e,this.removedTargetIds=n,this.key=s,this.Ve=r}}class $y{constructor(e,n){this.targetId=e,this.me=n}}class jy{constructor(e,n,s=Tt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Kp{constructor(){this.fe=0,this.ge=Gp(),this.pe=Tt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ve(),n=ve(),s=ve();return this.ge.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:ue()}}),new So(this.pe,this.ye,e,n,s)}Ce(){this.we=!1,this.ge=Gp()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Le(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class AS{constructor(e){this.Be=e,this.Le=new Map,this.ke=ns(),this.qe=la(),this.Qe=la(),this.Ke=new rt(Ee)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const s=this.ze(n);switch(e.state){case 0:this.je(n)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(n);break;case 3:this.je(n)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),s.De(e.resumeToken));break;default:ue()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Le.forEach((s,r)=>{this.je(r)&&n(r)})}Je(e){const n=e.targetId,s=e.me.count,r=this.Ye(n);if(r){const i=r.target;if(wu(i))if(s===0){const o=new ie(i.path);this.We(n,o,kt.newNoDocument(o,he.min()))}else Le(s===1);else{const o=this.Ze(n);if(o!==s){const l=this.Xe(e),c=l?this.et(l,e,o):1;if(c!==0){this.He(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=n;let o,l;try{o=Ns(s).toUint8Array()}catch(c){if(c instanceof vy)return qr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new kh(o,r,i)}catch(c){return qr(c instanceof Mi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Te===0?null:l}et(e,n,s){return n.me.count===s-this.rt(e,n.targetId)?0:2}rt(e,n){const s=this.Be.getRemoteKeysForTarget(n);let r=0;return s.forEach(i=>{const o=this.Be.nt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.We(n,i,null),r++)}),r}it(e){const n=new Map;this.Le.forEach((i,o)=>{const l=this.Ye(o);if(l){if(i.current&&wu(l.target)){const c=new ie(l.target.path);this.st(c).has(o)||this.ot(o,c)||this.We(o,c,kt.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let s=ve();this.Qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(s=s.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const r=new Vl(e,n,this.Ke,this.ke,s);return this.ke=ns(),this.qe=la(),this.Qe=la(),this.Ke=new rt(Ee),r}Ue(e,n){if(!this.je(e))return;const s=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,s),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,s){if(!this.je(e))return;const r=this.ze(e);this.ot(e,n)?r.Fe(n,1):r.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),s&&(this.ke=this.ke.insert(n,s))}removeTarget(e){this.Le.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Le.get(e);return n||(n=new Kp,this.Le.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new at(Ee),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new at(Ee),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Le.get(e);return n&&n.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new Kp),this.Be.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Be.getRemoteKeysForTarget(e).has(n)}}function la(){return new rt(ie.comparator)}function Gp(){return new rt(ie.comparator)}const CS={asc:"ASCENDING",desc:"DESCENDING"},RS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},SS={and:"AND",or:"OR"};class PS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function bu(t,e){return t.useProto3Json||Pl(e)?e:{value:e}}function Ha(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qy(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function kS(t,e){return Ha(t,e.toTimestamp())}function xn(t){return Le(!!t),he.fromTimestamp(function(n){const s=ks(n);return new st(s.seconds,s.nanos)}(t))}function Nh(t,e){return Au(t,e).canonicalString()}function Au(t,e){const n=function(r){return new Ke(["projects",r.projectId,"databases",r.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Hy(t){const e=Ke.fromString(t);return Le(Qy(e)),e}function Cu(t,e){return Nh(t.databaseId,e.path)}function xc(t,e){const n=Hy(e);if(n.get(1)!==t.databaseId.projectId)throw new re(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new re(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ie(zy(n))}function Wy(t,e){return Nh(t.databaseId,e)}function NS(t){const e=Hy(t);return e.length===4?Ke.emptyPath():zy(e)}function Ru(t){return new Ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function zy(t){return Le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Qp(t,e,n){return{name:Cu(t,e),fields:n.value.mapValue.fields}}function xS(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ue()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(Le(h===void 0||typeof h=="string"),Tt.fromBase64String(h||"")):(Le(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Tt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const h=u.code===void 0?q.UNKNOWN:By(u.code);return new re(h,u.message||"")}(o);n=new jy(s,r,i,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=xc(t,s.document.name),i=xn(s.document.updateTime),o=s.document.createTime?xn(s.document.createTime):he.min(),l=new tn({mapValue:{fields:s.document.fields}}),c=kt.newFoundDocument(r,i,o,l),u=s.targetIds||[],h=s.removedTargetIds||[];n=new Ia(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=xc(t,s.document),i=s.readTime?xn(s.readTime):he.min(),o=kt.newNoDocument(r,i),l=s.removedTargetIds||[];n=new Ia([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=xc(t,s.document),i=s.removedTargetIds||[];n=new Ia([],i,r,null)}else{if(!("filter"in e))return ue();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new TS(r,i),l=s.targetId;n=new $y(l,o)}}return n}function DS(t,e){let n;if(e instanceof Ro)n={update:Qp(t,e.key,e.value)};else if(e instanceof Uy)n={delete:Cu(t,e.key)};else if(e instanceof cr)n={update:Qp(t,e.key,e.data),updateMask:jS(e.fieldMask)};else{if(!(e instanceof yS))return ue();n={verify:Cu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,o){const l=o.transform;if(l instanceof ja)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Eo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof To)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof qa)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw ue()}(0,s))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:kS(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ue()}(t,e.precondition)),n}function OS(t,e){return t&&t.length>0?(Le(e!==void 0),t.map(n=>function(r,i){let o=r.updateTime?xn(r.updateTime):xn(i);return o.isEqual(he.min())&&(o=xn(i)),new mS(o,r.transformResults||[])}(n,e))):[]}function MS(t,e){return{documents:[Wy(t,e.path)]}}function LS(t,e){const n={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=Wy(t,r);const i=function(u){if(u.length!==0)return Gy(Ln.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(m){return{field:br(m.field),direction:US(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=bu(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:n,parent:r}}function VS(t){let e=NS(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Le(s===1);const h=n.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(d){const m=Ky(d);return m instanceof Ln&&Iy(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(m=>function(A){return new $a(Ar(A.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(d){let m;return m=typeof d=="object"?d.value:d,Pl(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(d){const m=!!d.before,g=d.values||[];return new Ba(g,m)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const m=!d.before,g=d.values||[];return new Ba(g,m)}(n.endAt)),tS(e,r,o,i,l,"F",c,u)}function FS(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ky(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Ar(n.unaryFilter.field);return ot.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Ar(n.unaryFilter.field);return ot.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ar(n.unaryFilter.field);return ot.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ar(n.unaryFilter.field);return ot.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ue()}}(t):t.fieldFilter!==void 0?function(n){return ot.create(Ar(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ue()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ln.create(n.compositeFilter.filters.map(s=>Ky(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return ue()}}(n.compositeFilter.op))}(t):ue()}function US(t){return CS[t]}function BS(t){return RS[t]}function $S(t){return SS[t]}function br(t){return{fieldPath:t.canonicalString()}}function Ar(t){return vt.fromServerFormat(t.fieldPath)}function Gy(t){return t instanceof ot?function(n){if(n.op==="=="){if(Lp(n.value))return{unaryFilter:{field:br(n.field),op:"IS_NAN"}};if(Mp(n.value))return{unaryFilter:{field:br(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Lp(n.value))return{unaryFilter:{field:br(n.field),op:"IS_NOT_NAN"}};if(Mp(n.value))return{unaryFilter:{field:br(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:br(n.field),op:BS(n.op),value:n.value}}}(t):t instanceof Ln?function(n){const s=n.getFilters().map(r=>Gy(r));return s.length===1?s[0]:{compositeFilter:{op:$S(n.op),filters:s}}}(t):ue()}function jS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Qy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n,s,r,i=he.min(),o=he.min(),l=Tt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new vs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new vs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new vs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new vs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e){this.ht=e}}function HS(t){const e=VS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Iu(e,e.limit,"L"):e}/**
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
 */class WS{constructor(){this.ln=new zS}addToCollectionParentIndex(e,n){return this.ln.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(Ps.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(Ps.min())}updateCollectionGroup(e,n,s){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class zS{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new at(Ke.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new at(Ke.comparator)).toArray()}}/**
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
 */const Yp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ut{static withCacheSize(e){return new Ut(e,Ut.DEFAULT_COLLECTION_PERCENTILE,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Xp([t,e],[n,s]){const r=Ee(t,n);return r===0?Ee(e,s):r}class KS{constructor(e){this.Gn=e,this.buffer=new at(Xp),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();Xp(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class GS{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){Z("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ri(n)?Z("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await si(n)}await this.Yn(3e5)})}}class QS{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(s=>Math.floor(n/100*s))}nthSequenceNumber(e,n){if(n===0)return B.resolve(Sl.oe);const s=new KS(n);return this.Zn.forEachTarget(e,r=>s.Hn(r.sequenceNumber)).next(()=>this.Zn.er(e,r=>s.Hn(r))).next(()=>s.maxValue)}removeTargets(e,n,s){return this.Zn.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(Yp)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Yp):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let s,r,i,o,l,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),r=this.params.maximumSequenceNumbersToCollect):r=d,o=Date.now(),this.nthSequenceNumber(e,r))).next(d=>(s=d,l=Date.now(),this.removeTargets(e,s,n))).next(d=>(i=d,c=Date.now(),this.removeOrphanedDocuments(e,s))).next(d=>(u=Date.now(),wr()<=me.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${r} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${d} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:d})))}}function YS(t,e){return new QS(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(){this.changes=new lr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,kt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?B.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class JS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Yi(s.mutation,r,un.empty(),st.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ve()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ve()){const r=Ys();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Oi();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Ys();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ve()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,s,r){let i=ns();const o=Qi(),l=function(){return Qi()}();return n.forEach((c,u)=>{const h=s.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof cr)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Yi(h.mutation,u,h.mutation.getFieldMask(),st.now())):o.set(u.key,un.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var d;return l.set(u,new JS(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),l))}recalculateAndSaveOverlays(e,n){const s=Qi();let r=new rt((o,l)=>o-l),i=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=s.get(c)||un.empty();h=l.applyToLocalView(u,h),s.set(c,h);const d=(r.get(l.batchId)||ve()).add(c);r=r.insert(l.batchId,d)})}).next(()=>{const o=[],l=r.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,h=c.value,d=Ny();h.forEach(m=>{if(!i.has(m)){const g=Vy(n.get(m),s.get(m));g!==null&&d.set(m,g),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return B.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,r){return function(o){return ie.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):nS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,r):this.getDocumentsMatchingCollectionQuery(e,n,s,r)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):B.resolve(Ys());let l=-1,c=i;return o.next(u=>B.forEach(u,(h,d)=>(l<d.largestBatchId&&(l=d.largestBatchId),i.get(h)?B.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{c=c.insert(h,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ve())).next(h=>({batchId:l,changes:ky(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ie(n)).next(s=>{let r=Oi();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s,r){const i=n.collectionGroup;let o=Oi();return this.indexManager.getCollectionParents(e,i).next(l=>B.forEach(l,c=>{const u=function(d,m){return new Nl(m,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,s,r).next(h=>{h.forEach((d,m)=>{o=o.insert(d,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i,r))).next(o=>{i.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,kt.newInvalidDocument(h)))});let l=Oi();return o.forEach((c,u)=>{const h=i.get(c);h!==void 0&&Yi(h.mutation,u,un.empty(),st.now()),Ol(n,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class e0{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return B.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(r){return{id:r.id,version:r.version,createTime:xn(r.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(r){return{name:r.name,query:HS(r.bundledQuery),readTime:xn(r.readTime)}}(n)),B.resolve()}}/**
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
 */class t0{constructor(){this.overlays=new rt(ie.comparator),this.dr=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ys();return B.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.Tt(e,n,i)}),B.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.dr.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.dr.delete(s)),B.resolve()}getOverlaysForCollection(e,n,s){const r=Ys(),i=n.length+1,o=new ie(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return B.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new rt((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let h=i.get(u.largestBatchId);h===null&&(h=Ys(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const l=Ys(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>l.set(u,h)),!(l.size()>=r)););return B.resolve(l)}Tt(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.dr.get(r.largestBatchId).delete(s.key);this.dr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new ES(n,s));let i=this.dr.get(n);i===void 0&&(i=ve(),this.dr.set(n,i)),this.dr.set(n,i.add(s.key))}}/**
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
 */class n0{constructor(){this.sessionToken=Tt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(){this.Er=new at(ct.Ar),this.Rr=new at(ct.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,n){const s=new ct(e,n);this.Er=this.Er.add(s),this.Rr=this.Rr.add(s)}mr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.gr(new ct(e,n))}pr(e,n){e.forEach(s=>this.removeReference(s,n))}yr(e){const n=new ie(new Ke([])),s=new ct(n,e),r=new ct(n,e+1),i=[];return this.Rr.forEachInRange([s,r],o=>{this.gr(o),i.push(o.key)}),i}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new ie(new Ke([])),s=new ct(n,e),r=new ct(n,e+1);let i=ve();return this.Rr.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ct(e,0),s=this.Er.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ct{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return ie.comparator(e.key,n.key)||Ee(e.br,n.br)}static Vr(e,n){return Ee(e.br,n.br)||ie.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new at(ct.Ar)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new vS(i,n,s,r);this.mutationQueue.push(o);for(const l of r)this.vr=this.vr.add(new ct(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Fr(s),i=r<0?0:r;return B.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ct(n,0),r=new ct(n,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([s,r],o=>{const l=this.Cr(o.br);i.push(l)}),B.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new at(Ee);return n.forEach(r=>{const i=new ct(r,0),o=new ct(r,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,o],l=>{s=s.add(l.br)})}),B.resolve(this.Mr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;ie.isDocumentKey(i)||(i=i.child(""));const o=new ct(new ie(i),0);let l=new at(Ee);return this.vr.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(l=l.add(c.br)),!0)},o),B.resolve(this.Mr(l))}Mr(e){const n=[];return e.forEach(s=>{const r=this.Cr(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Le(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.vr;return B.forEach(n.mutations,r=>{const i=new ct(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.vr=s})}Bn(e){}containsKey(e,n){const s=new ct(n,0),r=this.vr.firstAfterOrEqual(s);return B.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e){this.Nr=e,this.docs=function(){return new rt(ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Nr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return B.resolve(s?s.document.mutableCopy():kt.newInvalidDocument(n))}getEntries(e,n){let s=ns();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():kt.newInvalidDocument(r))}),B.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=ns();const o=n.path,l=new ie(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||OR(DR(h),s)<=0||(r.has(h.key)||Ol(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return B.resolve(i)}getAllFromCollectionGroup(e,n,s,r){ue()}Br(e,n){return B.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new i0(this)}getSize(e){return B.resolve(this.size)}}class i0 extends XS{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.hr.addEntry(e,r)):this.hr.removeEntry(s)}),B.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(e){this.persistence=e,this.Lr=new lr(n=>Ch(n),Rh),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.kr=0,this.qr=new xh,this.targetCount=0,this.Qr=Kr.qn()}forEachTarget(e,n){return this.Lr.forEach((s,r)=>n(r)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.kr&&(this.kr=n),B.resolve()}Un(e){this.Lr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new Kr(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.Un(n),B.resolve()}removeTargetData(e,n){return this.Lr.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Lr.forEach((o,l)=>{l.sequenceNumber<=n&&s.get(l.targetId)===null&&(this.Lr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)}),B.waitFor(i).next(()=>r)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const s=this.Lr.get(n)||null;return B.resolve(s)}addMatchingKeys(e,n,s){return this.qr.mr(n,s),B.resolve()}removeMatchingKeys(e,n,s){this.qr.pr(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),B.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const s=this.qr.Sr(n);return B.resolve(s)}containsKey(e,n){return B.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e,n){this.Kr={},this.overlays={},this.$r=new Sl(0),this.Ur=!1,this.Ur=!0,this.Wr=new n0,this.referenceDelegate=e(this),this.Gr=new o0(this),this.indexManager=new WS,this.remoteDocumentCache=function(r){return new r0(r)}(s=>this.referenceDelegate.zr(s)),this.serializer=new qS(n),this.jr=new e0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new t0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Kr[e.toKey()];return s||(s=new s0(n,this.referenceDelegate),this.Kr[e.toKey()]=s),s}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,s){Z("MemoryPersistence","Starting transaction:",e);const r=new a0(this.$r.next());return this.referenceDelegate.Hr(),s(r).next(i=>this.referenceDelegate.Jr(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Yr(e,n){return B.or(Object.values(this.Kr).map(s=>()=>s.containsKey(e,n)))}}class a0 extends LR{constructor(e){super(),this.currentSequenceNumber=e}}class Dh{constructor(e){this.persistence=e,this.Zr=new xh,this.Xr=null}static ei(e){return new Dh(e)}get ti(){if(this.Xr)return this.Xr;throw ue()}addReference(e,n,s){return this.Zr.addReference(s,n),this.ti.delete(s.toString()),B.resolve()}removeReference(e,n,s){return this.Zr.removeReference(s,n),this.ti.add(s.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),B.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(r=>this.ti.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.ti.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.ti,s=>{const r=ie.fromPath(s);return this.ni(e,r).next(i=>{i||n.removeEntry(r,he.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(s=>{s?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return B.or([()=>B.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class Wa{constructor(e,n){this.persistence=e,this.ri=new lr(s=>UR(s.path),(s,r)=>s.isEqual(r)),this.garbageCollector=YS(this,n)}static ei(e,n){return new Wa(e,n)}Hr(){}Jr(e){return B.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>n.next(r=>s+r))}nr(e){let n=0;return this.er(e,s=>{n++}).next(()=>n)}er(e,n){return B.forEach(this.ri,(s,r)=>this.ir(e,s,r).next(i=>i?B.resolve():n(r)))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.Br(e,o=>this.ir(e,o,n).next(l=>{l||(s++,i.removeEntry(o,he.min()))})).next(()=>i.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),B.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.ri.set(s,e.currentSequenceNumber),B.resolve()}removeReference(e,n,s){return this.ri.set(s,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),B.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ea(e.data.value)),n}ir(e,n,s){return B.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const r=this.ri.get(n);return B.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Wi=s,this.Gi=r}static zi(e,n){let s=ve(),r=ve();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Oh(e,n.fromCache,s,r)}}/**
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
 */class l0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class c0{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return nC()?8:VR(yn())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,s,r){const i={result:null};return this.Xi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.es(e,n,r,s).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new l0;return this.ts(e,n,o).next(l=>{if(i.result=l,this.Hi)return this.ns(e,n,o,l.size)})}).next(()=>i.result)}ns(e,n,s,r){return s.documentReadCount<this.Ji?(wr()<=me.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",Ir(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),B.resolve()):(wr()<=me.DEBUG&&Z("QueryEngine","Query:",Ir(n),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.Yi*r?(wr()<=me.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",Ir(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Nn(n))):B.resolve())}Xi(e,n){if(Bp(n))return B.resolve(null);let s=Nn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Iu(n,null,"F"),s=Nn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ve(...i);return this.Zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.rs(n,l);return this.ss(n,u,o,c.readTime)?this.Xi(e,Iu(n,null,"F")):this.os(e,u,n,c)}))})))}es(e,n,s,r){return Bp(n)||r.isEqual(he.min())?B.resolve(null):this.Zi.getDocuments(e,s).next(i=>{const o=this.rs(n,i);return this.ss(n,o,s,r)?B.resolve(null):(wr()<=me.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ir(n)),this.os(e,o,n,xR(r,-1)).next(l=>l))})}rs(e,n){let s=new at(Sy(e));return n.forEach((r,i)=>{Ol(e,i)&&(s=s.add(i))}),s}ss(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ts(e,n,s){return wr()<=me.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",Ir(n)),this.Zi.getDocumentsMatchingQuery(e,n,Ps.min(),s)}os(e,n,s,r){return this.Zi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class u0{constructor(e,n,s,r){this.persistence=e,this._s=n,this.serializer=r,this.us=new rt(Ee),this.cs=new lr(i=>Ch(i),Rh),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(s)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ZS(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function h0(t,e,n,s){return new u0(t,e,n,s)}async function Xy(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Ps(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],l=[];let c=ve();for(const u of r){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){l.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:l}))})})}function f0(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.hs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,h){const d=u.batch,m=d.keys();let g=B.resolve();return m.forEach(A=>{g=g.next(()=>h.getEntry(c,A)).next(S=>{const N=u.docVersions.get(A);Le(N!==null),S.version.compareTo(N)<0&&(d.applyToRemoteDocument(S,u),S.isValidDocument()&&(S.setReadTime(u.commitVersion),h.addEntry(S)))})}),g.next(()=>l.mutationQueue.removeMutationBatch(c,d))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(l){let c=ve();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Jy(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function d0(t,e){const n=de(t),s=e.snapshotVersion;let r=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});r=n.us;const l=[];e.targetChanges.forEach((h,d)=>{const m=r.get(d);if(!m)return;l.push(n.Gr.removeMatchingKeys(i,h.removedDocuments,d).next(()=>n.Gr.addMatchingKeys(i,h.addedDocuments,d)));let g=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(Tt.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,s)),r=r.insert(d,g),function(S,N,V){return S.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(m,g,h)&&l.push(n.Gr.updateTargetData(i,g))});let c=ns(),u=ve();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),l.push(p0(i,o,e.documentUpdates).next(h=>{c=h.Is,u=h.ds})),!s.isEqual(he.min())){const h=n.Gr.getLastRemoteSnapshotVersion(i).next(d=>n.Gr.setTargetsMetadata(i,i.currentSequenceNumber,s));l.push(h)}return B.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.us=r,i))}function p0(t,e,n){let s=ve(),r=ve();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=ns();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(l)),c.isNoDocument()&&c.version.isEqual(he.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):Z("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Is:o,ds:r}})}function m0(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function g0(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Gr.getTargetData(s,e).next(i=>i?(r=i,B.resolve(r)):n.Gr.allocateTargetId(s).next(o=>(r=new vs(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Gr.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.us.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.us=n.us.insert(s.targetId,s),n.cs.set(e,s.targetId)),s})}async function Su(t,e,n){const s=de(t),r=s.us.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!ri(o))throw o;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.us=s.us.remove(e),s.cs.delete(r.target)}function Jp(t,e,n){const s=de(t);let r=he.min(),i=ve();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const d=de(c),m=d.cs.get(h);return m!==void 0?B.resolve(d.us.get(m)):d.Gr.getTargetData(u,h)}(s,o,Nn(e)).next(l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,s.Gr.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>s._s.getDocumentsMatchingQuery(o,e,n?r:he.min(),n?i:ve())).next(l=>(_0(s,rS(e),l),{documents:l,Es:i})))}function _0(t,e,n){let s=t.ls.get(e)||he.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.ls.set(e,s)}class Zp{constructor(){this.activeTargetIds=uS()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class y0{constructor(){this._o=new Zp,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,s){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Zp,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class v0{uo(e){}shutdown(){}}/**
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
 */class em{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ca=null;function Dc(){return ca===null?ca=function(){return 268435456+Math.round(2147483648*Math.random())}():ca++,"0x"+ca.toString(16)}/**
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
 */const E0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="WebChannelConnection";class w0 extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=s+"://"+n.host,this.Mo=`projects/${r}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Oo(n,s,r,i,o){const l=Dc(),c=this.No(n,s.toUriEncodedString());Z("RestConnection",`Sending RPC '${n}' ${l}:`,c,r);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(u,i,o),this.Lo(n,c,u,r).then(h=>(Z("RestConnection",`Received RPC '${n}' ${l}: `,h),h),h=>{throw qr("RestConnection",`RPC '${n}' ${l} failed with error: `,h,"url: ",c,"request:",r),h})}ko(n,s,r,i,o,l){return this.Oo(n,s,r,i,o)}Bo(n,s,r){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ni}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((i,o)=>n[o]=i),r&&r.headers.forEach((i,o)=>n[o]=i)}No(n,s){const r=E0[n];return`${this.Fo}/v1/${s}:${r}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,n,s,r){const i=Dc();return new Promise((o,l)=>{const c=new hy;c.setWithCredentials(!0),c.listenOnce(fy.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case va.NO_ERROR:const h=c.getResponseJson();Z(Ct,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case va.TIMEOUT:Z(Ct,`RPC '${e}' ${i} timed out`),l(new re(q.DEADLINE_EXCEEDED,"Request time out"));break;case va.HTTP_ERROR:const d=c.getStatus();if(Z(Ct,`RPC '${e}' ${i} failed with status:`,d,"response text:",c.getResponseText()),d>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const g=m==null?void 0:m.error;if(g&&g.status&&g.message){const A=function(N){const V=N.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(V)>=0?V:q.UNKNOWN}(g.status);l(new re(A,g.message))}else l(new re(q.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new re(q.UNAVAILABLE,"Connection failed."));break;default:ue()}}finally{Z(Ct,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(r);Z(Ct,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",u,s,15)})}qo(e,n,s){const r=Dc(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=my(),l=py(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Bo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const h=i.join("");Z(Ct,`Creating RPC '${e}' stream ${r}: ${h}`,c);const d=o.createWebChannel(h,c);let m=!1,g=!1;const A=new T0({Eo:N=>{g?Z(Ct,`Not sending because RPC '${e}' stream ${r} is closed:`,N):(m||(Z(Ct,`Opening RPC '${e}' stream ${r} transport.`),d.open(),m=!0),Z(Ct,`RPC '${e}' stream ${r} sending:`,N),d.send(N))},Ao:()=>d.close()}),S=(N,V,F)=>{N.listen(V,D=>{try{F(D)}catch(O){setTimeout(()=>{throw O},0)}})};return S(d,Di.EventType.OPEN,()=>{g||(Z(Ct,`RPC '${e}' stream ${r} transport opened.`),A.So())}),S(d,Di.EventType.CLOSE,()=>{g||(g=!0,Z(Ct,`RPC '${e}' stream ${r} transport closed`),A.Do())}),S(d,Di.EventType.ERROR,N=>{g||(g=!0,qr(Ct,`RPC '${e}' stream ${r} transport errored:`,N),A.Do(new re(q.UNAVAILABLE,"The operation could not be completed")))}),S(d,Di.EventType.MESSAGE,N=>{var V;if(!g){const F=N.data[0];Le(!!F);const D=F,O=(D==null?void 0:D.error)||((V=D[0])===null||V===void 0?void 0:V.error);if(O){Z(Ct,`RPC '${e}' stream ${r} received error:`,O);const ee=O.status;let te=function(v){const b=et[v];if(b!==void 0)return By(b)}(ee),C=O.message;te===void 0&&(te=q.INTERNAL,C="Unknown error status: "+ee+" with message "+O.message),g=!0,A.Do(new re(te,C)),d.close()}else Z(Ct,`RPC '${e}' stream ${r} received:`,F),A.vo(F)}}),S(l,dy.STAT_EVENT,N=>{N.stat===_u.PROXY?Z(Ct,`RPC '${e}' stream ${r} detected buffering proxy`):N.stat===_u.NOPROXY&&Z(Ct,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{A.bo()},0),A}}function Oc(){return typeof document<"u"?document:null}/**
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
 */function Fl(t){return new PS(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e,n,s=1e3,r=1.5,i=6e4){this.li=e,this.timerId=n,this.Qo=s,this.Ko=r,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),s=Math.max(0,Date.now()-this.Go),r=Math.max(0,n-s);r>0&&Z("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,r,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e,n,s,r,i,o,l,c){this.li=e,this.Yo=s,this.Zo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Zy(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===q.RESOURCE_EXHAUSTED?(ts(n.toString()),ts("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Xo===n&&this.I_(s,r)},s=>{e(()=>{const r=new re(q.UNKNOWN,"Fetching auth token failed: "+s.message);return this.d_(r)})})}I_(e,n){const s=this.T_(this.Xo);this.stream=this.E_(e,n),this.stream.Ro(()=>{s(()=>this.listener.Ro())}),this.stream.mo(()=>{s(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(r=>{s(()=>this.d_(r))}),this.stream.onMessage(r=>{s(()=>++this.n_==1?this.A_(r):this.onNext(r))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class I0 extends ev{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}E_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=xS(this.serializer,e),s=function(i){if(!("targetChange"in i))return he.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?he.min():o.readTime?xn(o.readTime):he.min()}(e);return this.listener.R_(n,s)}V_(e){const n={};n.database=Ru(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=wu(c)?{documents:MS(i,c)}:{query:LS(i,c).ct},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=qy(i,o.resumeToken);const u=bu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(he.min())>0){l.readTime=Ha(i,o.snapshotVersion.toTimestamp());const u=bu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const s=FS(this.serializer,e);s&&(n.labels=s),this.c_(n)}m_(e){const n={};n.database=Ru(this.serializer),n.removeTarget=e,this.c_(n)}}class b0 extends ev{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,n){return this.connection.qo("Write",e,n)}A_(e){return Le(!!e.streamToken),this.lastStreamToken=e.streamToken,Le(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=OS(e.writeResults,e.commitTime),s=xn(e.commitTime);return this.listener.y_(s,n)}w_(){const e={};e.database=Ru(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>DS(this.serializer,s))};this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0 extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.S_=!1}b_(){if(this.S_)throw new re(q.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,s,r){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Oo(e,Au(n,s),r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new re(q.UNKNOWN,i.toString())})}ko(e,n,s,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.ko(e,Au(n,s),r,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new re(q.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class C0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class R0{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(o=>{s.enqueueAndForget(async()=>{ur(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=de(c);u.k_.add(4),await Po(u),u.K_.set("Unknown"),u.k_.delete(4),await Ul(u)}(this))})}),this.K_=new C0(s,r)}}async function Ul(t){if(ur(t))for(const e of t.q_)await e(!0)}async function Po(t){for(const e of t.q_)await e(!1)}function tv(t,e){const n=de(t);n.L_.has(e.targetId)||(n.L_.set(e.targetId,e),Fh(n)?Vh(n):ii(n).s_()&&Lh(n,e))}function Mh(t,e){const n=de(t),s=ii(n);n.L_.delete(e),s.s_()&&nv(n,e),n.L_.size===0&&(s.s_()?s.a_():ur(n)&&n.K_.set("Unknown"))}function Lh(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ii(t).V_(e)}function nv(t,e){t.U_.xe(e),ii(t).m_(e)}function Vh(t){t.U_=new AS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.L_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),ii(t).start(),t.K_.F_()}function Fh(t){return ur(t)&&!ii(t).i_()&&t.L_.size>0}function ur(t){return de(t).k_.size===0}function sv(t){t.U_=void 0}async function S0(t){t.K_.set("Online")}async function P0(t){t.L_.forEach((e,n)=>{Lh(t,e)})}async function k0(t,e){sv(t),Fh(t)?(t.K_.O_(e),Vh(t)):t.K_.set("Unknown")}async function N0(t,e,n){if(t.K_.set("Online"),e instanceof jy&&e.state===2&&e.cause)try{await async function(r,i){const o=i.cause;for(const l of i.targetIds)r.L_.has(l)&&(await r.remoteSyncer.rejectListen(l,o),r.L_.delete(l),r.U_.removeTarget(l))}(t,e)}catch(s){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await za(t,s)}else if(e instanceof Ia?t.U_.$e(e):e instanceof $y?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(he.min()))try{const s=await Jy(t.localStore);n.compareTo(s)>=0&&await function(i,o){const l=i.U_.it(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=i.L_.get(u);h&&i.L_.set(u,h.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const h=i.L_.get(c);if(!h)return;i.L_.set(c,h.withResumeToken(Tt.EMPTY_BYTE_STRING,h.snapshotVersion)),nv(i,c);const d=new vs(h.target,c,u,h.sequenceNumber);Lh(i,d)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(s){Z("RemoteStore","Failed to raise snapshot:",s),await za(t,s)}}async function za(t,e,n){if(!ri(e))throw e;t.k_.add(1),await Po(t),t.K_.set("Offline"),n||(n=()=>Jy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await Ul(t)})}function rv(t,e){return e().catch(n=>za(t,n,e))}async function Bl(t){const e=de(t),n=Ds(e);let s=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;x0(e);)try{const r=await m0(e.localStore,s);if(r===null){e.B_.length===0&&n.a_();break}s=r.batchId,D0(e,r)}catch(r){await za(e,r)}iv(e)&&ov(e)}function x0(t){return ur(t)&&t.B_.length<10}function D0(t,e){t.B_.push(e);const n=Ds(t);n.s_()&&n.f_&&n.g_(e.mutations)}function iv(t){return ur(t)&&!Ds(t).i_()&&t.B_.length>0}function ov(t){Ds(t).start()}async function O0(t){Ds(t).w_()}async function M0(t){const e=Ds(t);for(const n of t.B_)e.g_(n.mutations)}async function L0(t,e,n){const s=t.B_.shift(),r=Ph.from(s,e,n);await rv(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Bl(t)}async function V0(t,e){e&&Ds(t).f_&&await async function(s,r){if(function(o){return wS(o)&&o!==q.ABORTED}(r.code)){const i=s.B_.shift();Ds(s).__(),await rv(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Bl(s)}}(t,e),iv(t)&&ov(t)}async function tm(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const s=ur(n);n.k_.add(3),await Po(n),s&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await Ul(n)}async function F0(t,e){const n=de(t);e?(n.k_.delete(2),await Ul(n)):e||(n.k_.add(2),await Po(n),n.K_.set("Unknown"))}function ii(t){return t.W_||(t.W_=function(n,s,r){const i=de(n);return i.b_(),new I0(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Ro:S0.bind(null,t),mo:P0.bind(null,t),po:k0.bind(null,t),R_:N0.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),Fh(t)?Vh(t):t.K_.set("Unknown")):(await t.W_.stop(),sv(t))})),t.W_}function Ds(t){return t.G_||(t.G_=function(n,s,r){const i=de(n);return i.b_(),new b0(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:O0.bind(null,t),po:V0.bind(null,t),p_:M0.bind(null,t),y_:L0.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await Bl(t)):(await t.G_.stop(),t.B_.length>0&&(Z("RemoteStore",`Stopping write stream with ${t.B_.length} pending writes`),t.B_=[]))})),t.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Yn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,l=new Uh(e,n,o,r,i);return l.start(s),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bh(t,e){if(ts("AsyncQueue",`${e}: ${t}`),ri(t))return new re(q.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{static emptySet(e){return new Or(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||ie.comparator(n.key,s.key):(n,s)=>ie.comparator(n.key,s.key),this.keyedMap=Oi(),this.sortedSet=new rt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Or)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class nm{constructor(){this.z_=new rt(ie.comparator)}track(e){const n=e.doc.key,s=this.z_.get(n);s?e.type!==0&&s.type===3?this.z_=this.z_.insert(n,e):e.type===3&&s.type!==1?this.z_=this.z_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.z_=this.z_.remove(n):e.type===1&&s.type===2?this.z_=this.z_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):ue():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,s)=>{e.push(s)}),e}}class Gr{constructor(e,n,s,r,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Gr(e,n,Or.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Dl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class B0{constructor(){this.queries=sm(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,s){const r=de(n),i=r.queries;r.queries=sm(),i.forEach((o,l)=>{for(const c of l.J_)c.onError(s)})})(this,new re(q.ABORTED,"Firestore shutting down"))}}function sm(){return new lr(t=>Ry(t),Dl)}async function $h(t,e){const n=de(t);let s=3;const r=e.query;let i=n.queries.get(r);i?!i.Y_()&&e.Z_()&&(s=2):(i=new U0,s=e.Z_()?0:1);try{switch(s){case 0:i.H_=await n.onListen(r,!0);break;case 1:i.H_=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(o){const l=Bh(o,`Initialization of query '${Ir(e.query)}' failed`);return void e.onError(l)}n.queries.set(r,i),i.J_.push(e),e.ea(n.onlineState),i.H_&&e.ta(i.H_)&&qh(n)}async function jh(t,e){const n=de(t),s=e.query;let r=3;const i=n.queries.get(s);if(i){const o=i.J_.indexOf(e);o>=0&&(i.J_.splice(o,1),i.J_.length===0?r=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(r=2))}switch(r){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function $0(t,e){const n=de(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const l of o.J_)l.ta(r)&&(s=!0);o.H_=r}}s&&qh(n)}function j0(t,e,n){const s=de(t),r=s.queries.get(e);if(r)for(const i of r.J_)i.onError(n);s.queries.delete(e)}function qh(t){t.X_.forEach(e=>{e.next()})}var Pu,rm;(rm=Pu||(Pu={})).na="default",rm.Cache="cache";class Hh{constructor(e,n,s){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=s||{}}ta(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Gr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const s=n!=="Offline";return(!this.options.ua||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=Gr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Pu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e){this.key=e}}class lv{constructor(e){this.key=e}}class q0{constructor(e,n){this.query=e,this.Ea=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=ve(),this.mutatedKeys=ve(),this.Va=Sy(e),this.ma=new Or(this.Va)}get fa(){return this.Ea}ga(e,n){const s=n?n.pa:new nm,r=n?n.ma:this.ma;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,l=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((h,d)=>{const m=r.get(h),g=Ol(this.query,d)?d:null,A=!!m&&this.mutatedKeys.has(m.key),S=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let N=!1;m&&g?m.data.isEqual(g.data)?A!==S&&(s.track({type:3,doc:g}),N=!0):this.ya(m,g)||(s.track({type:2,doc:g}),N=!0,(c&&this.Va(g,c)>0||u&&this.Va(g,u)<0)&&(l=!0)):!m&&g?(s.track({type:0,doc:g}),N=!0):m&&!g&&(s.track({type:1,doc:m}),N=!0,(c||u)&&(l=!0)),N&&(g?(o=o.add(g),i=S?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),s.track({type:1,doc:h})}return{ma:o,pa:s,ss:l,mutatedKeys:i}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,r){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((h,d)=>function(g,A){const S=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue()}};return S(g)-S(A)}(h.type,d.type)||this.Va(h.doc,d.doc)),this.wa(s),r=r!=null&&r;const l=n&&!r?this.Sa():[],c=this.Ra.size===0&&this.current&&!r?1:0,u=c!==this.Aa;return this.Aa=c,o.length!==0||u?{snapshot:new Gr(this.query,e.ma,i,o,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),ba:l}:{ba:l}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new nm,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.Ea=this.Ea.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ea=this.Ea.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=ve(),this.ma.forEach(s=>{this.Da(s.key)&&(this.Ra=this.Ra.add(s.key))});const n=[];return e.forEach(s=>{this.Ra.has(s)||n.push(new lv(s))}),this.Ra.forEach(s=>{e.has(s)||n.push(new av(s))}),n}va(e){this.Ea=e.Es,this.Ra=ve();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return Gr.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class H0{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class W0{constructor(e){this.key=e,this.Fa=!1}}class z0{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new lr(l=>Ry(l),Dl),this.Oa=new Map,this.Na=new Set,this.Ba=new rt(ie.comparator),this.La=new Map,this.ka=new xh,this.qa={},this.Qa=new Map,this.Ka=Kr.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function K0(t,e,n=!0){const s=pv(t);let r;const i=s.xa.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.Ca()):r=await cv(s,e,n,!0),r}async function G0(t,e){const n=pv(t);await cv(n,e,!0,!1)}async function cv(t,e,n,s){const r=await g0(t.localStore,Nn(e)),i=r.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return s&&(l=await Q0(t,e,i,o==="current",r.resumeToken)),t.isPrimaryClient&&n&&tv(t.remoteStore,r),l}async function Q0(t,e,n,s,r){t.Ua=(d,m,g)=>async function(S,N,V,F){let D=N.view.ga(V);D.ss&&(D=await Jp(S.localStore,N.query,!1).then(({documents:C})=>N.view.ga(C,D)));const O=F&&F.targetChanges.get(N.targetId),ee=F&&F.targetMismatches.get(N.targetId)!=null,te=N.view.applyChanges(D,S.isPrimaryClient,O,ee);return om(S,N.targetId,te.ba),te.snapshot}(t,d,m,g);const i=await Jp(t.localStore,e,!0),o=new q0(e,i.Es),l=o.ga(i.documents),c=So.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(l,t.isPrimaryClient,c);om(t,n,u.ba);const h=new H0(e,n,o);return t.xa.set(e,h),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),u.snapshot}async function Y0(t,e,n){const s=de(t),r=s.xa.get(e),i=s.Oa.get(r.targetId);if(i.length>1)return s.Oa.set(r.targetId,i.filter(o=>!Dl(o,e))),void s.xa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await Su(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),n&&Mh(s.remoteStore,r.targetId),ku(s,r.targetId)}).catch(si)):(ku(s,r.targetId),await Su(s.localStore,r.targetId,!0))}async function X0(t,e){const n=de(t),s=n.xa.get(e),r=n.Oa.get(s.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Mh(n.remoteStore,s.targetId))}async function J0(t,e,n){const s=iP(t);try{const r=await function(o,l){const c=de(o),u=st.now(),h=l.reduce((g,A)=>g.add(A.key),ve());let d,m;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let A=ns(),S=ve();return c.hs.getEntries(g,h).next(N=>{A=N,A.forEach((V,F)=>{F.isValidDocument()||(S=S.add(V))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,A)).next(N=>{d=N;const V=[];for(const F of l){const D=_S(F,d.get(F.key).overlayedDocument);D!=null&&V.push(new cr(F.key,D,Ey(D.value.mapValue),Xn.exists(!0)))}return c.mutationQueue.addMutationBatch(g,u,V,l)}).next(N=>{m=N;const V=N.applyToLocalDocumentSet(d,S);return c.documentOverlayCache.saveOverlays(g,N.batchId,V)})}).then(()=>({batchId:m.batchId,changes:ky(d)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(o,l,c){let u=o.qa[o.currentUser.toKey()];u||(u=new rt(Ee)),u=u.insert(l,c),o.qa[o.currentUser.toKey()]=u}(s,r.batchId,n),await ko(s,r.changes),await Bl(s.remoteStore)}catch(r){const i=Bh(r,"Failed to persist write");n.reject(i)}}async function uv(t,e){const n=de(t);try{const s=await d0(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.La.get(i);o&&(Le(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Fa=!0:r.modifiedDocuments.size>0?Le(o.Fa):r.removedDocuments.size>0&&(Le(o.Fa),o.Fa=!1))}),await ko(n,s,e)}catch(s){await si(s)}}function im(t,e,n){const s=de(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.xa.forEach((i,o)=>{const l=o.view.ea(e);l.snapshot&&r.push(l.snapshot)}),function(o,l){const c=de(o);c.onlineState=l;let u=!1;c.queries.forEach((h,d)=>{for(const m of d.J_)m.ea(l)&&(u=!0)}),u&&qh(c)}(s.eventManager,e),r.length&&s.Ma.R_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Z0(t,e,n){const s=de(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.La.get(e),i=r&&r.key;if(i){let o=new rt(ie.comparator);o=o.insert(i,kt.newNoDocument(i,he.min()));const l=ve().add(i),c=new Vl(he.min(),new Map,new rt(Ee),o,l);await uv(s,c),s.Ba=s.Ba.remove(i),s.La.delete(e),Wh(s)}else await Su(s.localStore,e,!1).then(()=>ku(s,e,n)).catch(si)}async function eP(t,e){const n=de(t),s=e.batch.batchId;try{const r=await f0(n.localStore,e);fv(n,s,null),hv(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await ko(n,r)}catch(r){await si(r)}}async function tP(t,e,n){const s=de(t);try{const r=await function(o,l){const c=de(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,l).next(d=>(Le(d!==null),h=d.keys(),c.mutationQueue.removeMutationBatch(u,d))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(s.localStore,e);fv(s,e,n),hv(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await ko(s,r)}catch(r){await si(r)}}function hv(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function fv(t,e,n){const s=de(t);let r=s.qa[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.qa[s.currentUser.toKey()]=r}}function ku(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Oa.get(e))t.xa.delete(s),n&&t.Ma.Wa(s,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(s=>{t.ka.containsKey(s)||dv(t,s)})}function dv(t,e){t.Na.delete(e.path.canonicalString());const n=t.Ba.get(e);n!==null&&(Mh(t.remoteStore,n),t.Ba=t.Ba.remove(e),t.La.delete(n),Wh(t))}function om(t,e,n){for(const s of n)s instanceof av?(t.ka.addReference(s.key,e),nP(t,s)):s instanceof lv?(Z("SyncEngine","Document no longer in limbo: "+s.key),t.ka.removeReference(s.key,e),t.ka.containsKey(s.key)||dv(t,s.key)):ue()}function nP(t,e){const n=e.key,s=n.path.canonicalString();t.Ba.get(n)||t.Na.has(s)||(Z("SyncEngine","New document in limbo: "+n),t.Na.add(s),Wh(t))}function Wh(t){for(;t.Na.size>0&&t.Ba.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new ie(Ke.fromString(e)),s=t.Ka.next();t.La.set(s,new W0(n)),t.Ba=t.Ba.insert(n,s),tv(t.remoteStore,new vs(Nn(xl(n.path)),s,"TargetPurposeLimboResolution",Sl.oe))}}async function ko(t,e,n){const s=de(t),r=[],i=[],o=[];s.xa.isEmpty()||(s.xa.forEach((l,c)=>{o.push(s.Ua(c,e,n).then(u=>{var h;if((u||n)&&s.isPrimaryClient){const d=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;s.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(u){r.push(u);const d=Oh.zi(c.targetId,u);i.push(d)}}))}),await Promise.all(o),s.Ma.R_(r),await async function(c,u){const h=de(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>B.forEach(u,m=>B.forEach(m.Wi,g=>h.persistence.referenceDelegate.addReference(d,m.targetId,g)).next(()=>B.forEach(m.Gi,g=>h.persistence.referenceDelegate.removeReference(d,m.targetId,g)))))}catch(d){if(!ri(d))throw d;Z("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const m=d.targetId;if(!d.fromCache){const g=h.us.get(m),A=g.snapshotVersion,S=g.withLastLimboFreeSnapshotVersion(A);h.us=h.us.insert(m,S)}}}(s.localStore,i))}async function sP(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const s=await Xy(n.localStore,e);n.currentUser=e,function(i,o){i.Qa.forEach(l=>{l.forEach(c=>{c.reject(new re(q.CANCELLED,o))})}),i.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ko(n,s.Ts)}}function rP(t,e){const n=de(t),s=n.La.get(e);if(s&&s.Fa)return ve().add(s.key);{let r=ve();const i=n.Oa.get(e);if(!i)return r;for(const o of i){const l=n.xa.get(o);r=r.unionWith(l.view.fa)}return r}}function pv(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=uv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Z0.bind(null,e),e.Ma.R_=$0.bind(null,e.eventManager),e.Ma.Wa=j0.bind(null,e.eventManager),e}function iP(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=eP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tP.bind(null,e),e}class Ka{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Fl(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return h0(this.persistence,new c0,e.initialUser,this.serializer)}ja(e){return new Yy(Dh.ei,this.serializer)}za(e){return new y0}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ka.provider={build:()=>new Ka};class oP extends Ka{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){Le(this.persistence.referenceDelegate instanceof Wa);const s=this.persistence.referenceDelegate.garbageCollector;return new GS(s,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?Ut.withCacheSize(this.cacheSizeBytes):Ut.DEFAULT;return new Yy(s=>Wa.ei(s,n),this.serializer)}}class Nu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>im(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=sP.bind(null,this.syncEngine),await F0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new B0}()}createDatastore(e){const n=Fl(e.databaseInfo.databaseId),s=function(i){return new w0(i)}(e.databaseInfo);return function(i,o,l,c){return new A0(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,r,i,o,l){return new R0(s,r,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>im(this.syncEngine,n,0),function(){return em.p()?new em:new v0}())}createSyncEngine(e,n){return function(r,i,o,l,c,u,h){const d=new z0(r,i,o,l,c,u);return h&&(d.$a=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(r){const i=de(r);Z("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await Po(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Nu.provider={build:()=>new Nu};/**
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
 */class zh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):ts("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e,n,s,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Rt.UNAUTHENTICATED,this.clientId=_y.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async o=>{Z("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(Z("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Yn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Bh(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Mc(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Xy(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function am(t,e){t.asyncQueue.verifyOperationInProgress();const n=await lP(t);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(s=>tm(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>tm(e.remoteStore,r)),t._onlineComponents=e}async function lP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Mc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(r){return r.name==="FirebaseError"?r.code===q.FAILED_PRECONDITION||r.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(n))throw n;qr("Error using user provided cache. Falling back to memory cache: "+n),await Mc(t,new Ka)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await Mc(t,new oP(void 0));return t._offlineComponents}async function mv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await am(t,t._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await am(t,new Nu))),t._onlineComponents}function cP(t){return mv(t).then(e=>e.syncEngine)}async function Ga(t){const e=await mv(t),n=e.eventManager;return n.onListen=K0.bind(null,e.syncEngine),n.onUnlisten=Y0.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=G0.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=X0.bind(null,e.syncEngine),n}function uP(t,e,n={}){const s=new Yn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const h=new zh({next:m=>{h.eu(),o.enqueueAndForget(()=>jh(i,d));const g=m.docs.has(l);!g&&m.fromCache?u.reject(new re(q.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&m.fromCache&&c&&c.source==="server"?u.reject(new re(q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),d=new Hh(xl(l.path),h,{includeMetadataChanges:!0,ua:!0});return $h(i,d)}(await Ga(t),t.asyncQueue,e,n,s)),s.promise}function hP(t,e,n={}){const s=new Yn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const h=new zh({next:m=>{h.eu(),o.enqueueAndForget(()=>jh(i,d)),m.fromCache&&c.source==="server"?u.reject(new re(q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),d=new Hh(l,h,{includeMetadataChanges:!0,ua:!0});return $h(i,d)}(await Ga(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */function gv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const lm=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _v(t,e,n){if(!n)throw new re(q.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function fP(t,e,n,s){if(e===!0&&s===!0)throw new re(q.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function cm(t){if(!ie.isDocumentKey(t))throw new re(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function um(t){if(ie.isDocumentKey(t))throw new re(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Kh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue()}function Jn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new re(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Kh(t);throw new re(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class hm{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new re(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new re(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gv((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new re(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new re(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new re(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class $l{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hm({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hm(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new IR;switch(s.type){case"firstParty":return new RR(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new re(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=lm.get(n);s&&(Z("ComponentProvider","Removing Datastore"),lm.delete(n),s.terminate())}(this),Promise.resolve()}}function dP(t,e,n,s={}){var r;const i=(t=Jn(t,$l))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&qr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let l,c;if(typeof s.mockUserToken=="string")l=s.mockUserToken,c=Rt.MOCK_USER;else{l=XA(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new re(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Rt(u)}t._authCredentials=new bR(new gy(l,c))}}/**
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
 */class No{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new No(this.firestore,e,this._query)}}class Qt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qt(this.firestore,e,this._key)}}class Cs extends No{constructor(e,n,s){super(e,n,xl(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qt(this.firestore,null,new ie(e))}withConverter(e){return new Cs(this.firestore,e,this._path)}}function yv(t,e,...n){if(t=vn(t),_v("collection","path",e),t instanceof $l){const s=Ke.fromString(e,...n);return um(s),new Cs(t,null,s)}{if(!(t instanceof Qt||t instanceof Cs))throw new re(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ke.fromString(e,...n));return um(s),new Cs(t.firestore,null,s)}}function pP(t,e,...n){if(t=vn(t),arguments.length===1&&(e=_y.newId()),_v("doc","path",e),t instanceof $l){const s=Ke.fromString(e,...n);return cm(s),new Qt(t,null,new ie(s))}{if(!(t instanceof Qt||t instanceof Cs))throw new re(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ke.fromString(e,...n));return cm(s),new Qt(t.firestore,t instanceof Cs?t.converter:null,new ie(s))}}/**
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
 */class fm{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Zy(this,"async_queue_retry"),this.fu=()=>{const s=Oc();s&&Z("AsyncQueue","Visibility state changed to "+s.visibilityState),this.r_.Jo()},this.gu=e;const n=Oc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const n=Oc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const n=new Yn;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!ri(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(s=>{this.Au=s,this.Ru=!1;const r=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(s);throw ts("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Ru=!1,s))));return this.gu=n,n}enqueueAfterDelay(e,n,s){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const r=Uh.createAndSchedule(this,e,n,s,i=>this.Su(i));return this.Eu.push(r),r}pu(){this.Au&&ue()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.Eu)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Eu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.Eu.indexOf(e);this.Eu.splice(n,1)}}function dm(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const r=n;for(const i of s)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Qr extends $l{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new fm,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new fm(e),this._firestoreClient=void 0,await e}}}function mP(t,e){const n=typeof t=="object"?t:ay(),s=typeof t=="string"?t:"(default)",r=hR(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=QA("firestore");i&&dP(r,...i)}return r}function jl(t){if(t._terminated)throw new re(q.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||gP(t),t._firestoreClient}function gP(t){var e,n,s;const r=t._freezeSettings(),i=function(l,c,u,h){return new jR(l,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,gv(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._componentsProvider||!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),t._firestoreClient=new aP(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class Yr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Yr(Tt.fromBase64String(e))}catch(n){throw new re(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Yr(Tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Gh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new re(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class vv{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new re(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new re(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ee(this._lat,e._lat)||Ee(this._long,e._long)}}/**
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
 */class Qh{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _P=/^__.*__$/;class yP{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new cr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ro(e,this.data,n,this.fieldTransforms)}}function Ev(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue()}}class Yh{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Yh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.xu({path:s,Nu:!1});return r.Bu(e),r}Lu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.xu({path:s,Nu:!1});return r.Fu(),r}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Qa(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Ev(this.Mu)&&_P.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class vP{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Fl(e)}$u(e,n,s,r=!1){return new Yh({Mu:e,methodName:n,Ku:s,path:vt.emptyPath(),Nu:!1,Qu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function EP(t){const e=t._freezeSettings(),n=Fl(t._databaseId);return new vP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function TP(t,e,n,s,r,i={}){const o=t.$u(i.merge||i.mergeFields?2:0,e,n,r);bv("Data must be an object, but it was:",o,s);const l=wv(s,o);let c,u;if(i.merge)c=new un(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const d of i.mergeFields){const m=wP(e,d,n);if(!o.contains(m))throw new re(q.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);bP(h,m)||h.push(m)}c=new un(h),u=o.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,u=o.fieldTransforms;return new yP(new tn(l),c,u)}function Tv(t,e){if(Iv(t=vn(t)))return bv("Unsupported field value:",e,t),wv(t,e);if(t instanceof vv)return function(s,r){if(!Ev(r.Mu))throw r.qu(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.qu(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(s,r){const i=[];let o=0;for(const l of s){let c=Tv(l,r.ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(s,r){if((s=vn(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return hS(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=st.fromDate(s);return{timestampValue:Ha(r.serializer,i)}}if(s instanceof st){const i=new st(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Ha(r.serializer,i)}}if(s instanceof ql)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Yr)return{bytesValue:qy(r.serializer,s._byteString)};if(s instanceof Qt){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Nh(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof Qh)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.qu("VectorValues must only contain numeric values.");return Sh(l.serializer,c)})}}}}}}(s,r);throw r.qu(`Unsupported field value: ${Kh(s)}`)}(t,e)}function wv(t,e){const n={};return yy(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ar(t,(s,r)=>{const i=Tv(r,e.Ou(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Iv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof st||t instanceof ql||t instanceof Yr||t instanceof Qt||t instanceof vv||t instanceof Qh)}function bv(t,e,n){if(!Iv(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const s=Kh(n);throw s==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+s)}}function wP(t,e,n){if((e=vn(e))instanceof Gh)return e._internalPath;if(typeof e=="string")return Av(t,e);throw Qa("Field path arguments must be of type string or ",t,!1,void 0,n)}const IP=new RegExp("[~\\*/\\[\\]]");function Av(t,e,n){if(e.search(IP)>=0)throw Qa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Gh(...e.split("."))._internalPath}catch{throw Qa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Qa(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new re(q.INVALID_ARGUMENT,l+t+c)}function bP(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Cv{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new AP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Rv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class AP extends Cv{data(){return super.data()}}function Rv(t,e){return typeof e=="string"?Av(t,e):e instanceof Gh?e._internalPath:e._delegate._internalPath}/**
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
 */function Sv(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new re(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class CP{convertValue(e,n="none"){switch(xs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ns(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ue()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return ar(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertVectorValue(e){var n,s,r;const i=(r=(s=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||s===void 0?void 0:s.values)===null||r===void 0?void 0:r.map(o=>Ze(o.doubleValue));return new Qh(i)}convertGeoPoint(e){return new ql(Ze(e.latitude),Ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=kl(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(_o(e));default:return null}}convertTimestamp(e){const n=ks(e);return new st(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ke.fromString(e);Le(Qy(s));const r=new yo(s.get(1),s.get(3)),i=new ie(s.popFirst(5));return r.isEqual(n)||ts(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function RP(t,e,n){let s;return s=t?t.toFirestore(e):e,s}/**
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
 */class Li{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Pv extends Cv{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ba(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Rv("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ba extends Pv{data(e={}){return super.data(e)}}class kv{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Li(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new ba(this._firestore,this._userDataWriter,s.key,s,new Li(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new re(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(l=>{const c=new ba(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Li(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new ba(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Li(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,h=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),h=o.indexOf(l.doc.key)),{type:SP(l.type),doc:c,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function SP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ue()}}/**
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
 */function Nv(t){t=Jn(t,Qt);const e=Jn(t.firestore,Qr);return uP(jl(e),t._key).then(n=>xv(e,t,n))}class Xh extends CP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Yr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Qt(this.firestore,null,n)}}function PP(t){t=Jn(t,No);const e=Jn(t.firestore,Qr),n=jl(e),s=new Xh(e);return Sv(t._query),hP(n,t._query).then(r=>new kv(e,s,t,r))}function kP(t,e){const n=Jn(t.firestore,Qr),s=pP(t),r=RP(t.converter,e);return NP(n,[TP(EP(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Xn.exists(!1))]).then(()=>s)}function Jh(t,...e){var n,s,r;t=vn(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||dm(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(dm(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(s=d.error)===null||s===void 0?void 0:s.bind(d),e[o+2]=(r=d.complete)===null||r===void 0?void 0:r.bind(d)}let c,u,h;if(t instanceof Qt)u=Jn(t.firestore,Qr),h=xl(t._key.path),c={next:d=>{e[o]&&e[o](xv(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=Jn(t,No);u=Jn(d.firestore,Qr),h=d._query;const m=new Xh(u);c={next:g=>{e[o]&&e[o](new kv(u,m,d,g))},error:e[o+1],complete:e[o+2]},Sv(t._query)}return function(m,g,A,S){const N=new zh(S),V=new Hh(g,N,A);return m.asyncQueue.enqueueAndForget(async()=>$h(await Ga(m),V)),()=>{N.eu(),m.asyncQueue.enqueueAndForget(async()=>jh(await Ga(m),V))}}(jl(u),h,l,c)}function NP(t,e){return function(s,r){const i=new Yn;return s.asyncQueue.enqueueAndForget(async()=>J0(await cP(s),r,i)),i.promise}(jl(t),e)}function xv(t,e,n){const s=n.docs.get(e._key),r=new Xh(t);return new Pv(t,r,e._key,s,new Li(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(r){ni=r})(ti),On(new En("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),l=new Qr(new AR(s.getProvider("auth-internal")),new PR(s.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new re(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yo(u.options.projectId,h)}(o,r),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Gt(Pp,"4.7.6",e),Gt(Pp,"4.7.6","esm2017")})();function Dv(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Ov(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xP=Ov,Mv=new ei("auth","Firebase",Ov());/**
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
 */const Ya=new Co("@firebase/auth");function DP(t,...e){Ya.logLevel<=me.WARN&&Ya.warn(`Auth (${ti}): ${t}`,...e)}function Aa(t,...e){Ya.logLevel<=me.ERROR&&Ya.error(`Auth (${ti}): ${t}`,...e)}/**
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
 */function pm(t,...e){throw Zh(t,...e)}function Lv(t,...e){return Zh(t,...e)}function Vv(t,e,n){const s=Object.assign(Object.assign({},xP()),{[e]:n});return new ei("auth","Firebase",s).create(e,{appName:t.name})}function Ca(t){return Vv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Zh(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Mv.create(t,...e)}function Ne(t,e,...n){if(!t)throw Zh(e,...n)}function Xi(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Aa(e),new Error(e)}function Xa(t,e){t||Xi(e)}function OP(){return mm()==="http:"||mm()==="https:"}function mm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function MP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(OP()||eC()||"connection"in navigator)?navigator.onLine:!0}function LP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class xo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xa(n>e,"Short delay should be less than long delay!"),this.isMobile=Eh()||ty()}get(){return MP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function VP(t,e){Xa(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Fv{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const FP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const UP=new xo(3e4,6e4);function Uv(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Hl(t,e,n,s,r={}){return Bv(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const l=Th(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return ZA()||(u.referrerPolicy="no-referrer"),Fv.fetch()($v(t,t.config.apiHost,n,l),u)})}async function Bv(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},FP),e);try{const r=new BP(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ua(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ua(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ua(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ua(t,"user-disabled",o);const h=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Vv(t,h,u);pm(t,h)}}catch(r){if(r instanceof is)throw r;pm(t,"network-request-failed",{message:String(r)})}}function $v(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?VP(t.config,r):`${t.config.apiScheme}://${r}`}class BP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Lv(this.auth,"network-request-failed")),UP.get())})}}function ua(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Lv(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function $P(t,e){return Hl(t,"POST","/v1/accounts:delete",e)}async function jv(t,e){return Hl(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ji(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jP(t,e=!1){const n=vn(t),s=await n.getIdToken(e),r=qv(s);Ne(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Ji(Lc(r.auth_time)),issuedAtTime:Ji(Lc(r.iat)),expirationTime:Ji(Lc(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Lc(t){return Number(t)*1e3}function qv(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Aa("JWT malformed, contained fewer than 3 sections"),null;try{const r=La(n);return r?JSON.parse(r):(Aa("Failed to decode base64 JWT payload"),null)}catch(r){return Aa("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function gm(t){const e=qv(t);return Ne(e,"internal-error"),Ne(typeof e.exp<"u","internal-error"),Ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function xu(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof is&&qP(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function qP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class HP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Du{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ji(this.lastLoginAt),this.creationTime=Ji(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ja(t){var e;const n=t.auth,s=await t.getIdToken(),r=await xu(t,jv(n,{idToken:s}));Ne(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Hv(i.providerUserInfo):[],l=zP(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),h=c?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Du(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function WP(t){const e=vn(t);await Ja(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zP(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Hv(t){return t.map(e=>{var{providerId:n}=e,s=Dv(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function KP(t,e){const n=await Bv(t,{},async()=>{const s=Th({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=$v(t,r,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Fv.fetch()(o,{method:"POST",headers:l,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function GP(t,e){return Hl(t,"POST","/v2/accounts:revokeToken",Uv(t,e))}/**
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
 */class Mr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ne(e.idToken,"internal-error"),Ne(typeof e.idToken<"u","internal-error"),Ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Ne(e.length!==0,"internal-error");const n=gm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await KP(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Mr;return s&&(Ne(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(Ne(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(Ne(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mr,this.toJSON())}_performRefresh(){return Xi("not implemented")}}/**
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
 */function ps(t,e){Ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Es{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Dv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new HP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Du(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await xu(this,this.stsTokenManager.getToken(this.auth,e));return Ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jP(this,e)}reload(){return WP(this)}_assign(e){this!==e&&(Ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Es(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ja(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xi(this.auth.app))return Promise.reject(Ca(this.auth));const e=await this.getIdToken();return await xu(this,$P(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,l,c,u,h;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,m=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(l=n.tenantId)!==null&&l!==void 0?l:void 0,N=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,V=(u=n.createdAt)!==null&&u!==void 0?u:void 0,F=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:D,emailVerified:O,isAnonymous:ee,providerData:te,stsTokenManager:C}=n;Ne(D&&C,e,"internal-error");const y=Mr.fromJSON(this.name,C);Ne(typeof D=="string",e,"internal-error"),ps(d,e.name),ps(m,e.name),Ne(typeof O=="boolean",e,"internal-error"),Ne(typeof ee=="boolean",e,"internal-error"),ps(g,e.name),ps(A,e.name),ps(S,e.name),ps(N,e.name),ps(V,e.name),ps(F,e.name);const v=new Es({uid:D,auth:e,email:m,emailVerified:O,displayName:d,isAnonymous:ee,photoURL:A,phoneNumber:g,tenantId:S,stsTokenManager:y,createdAt:V,lastLoginAt:F});return te&&Array.isArray(te)&&(v.providerData=te.map(b=>Object.assign({},b))),N&&(v._redirectEventId=N),v}static async _fromIdTokenResponse(e,n,s=!1){const r=new Mr;r.updateFromServerResponse(n);const i=new Es({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Ja(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];Ne(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Hv(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),l=new Mr;l.updateFromIdToken(s);const c=new Es({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Du(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const _m=new Map;function Xs(t){Xa(t instanceof Function,"Expected a class definition");let e=_m.get(t);return e?(Xa(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_m.set(t,e),e)}/**
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
 */class Wv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Wv.type="NONE";const ym=Wv;/**
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
 */function Vc(t,e,n){return`firebase:${t}:${e}:${n}`}class Lr{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Vc(this.userKey,r.apiKey,i),this.fullPersistenceKey=Vc("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Es._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Lr(Xs(ym),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||Xs(ym);const o=Vc(s,e.config.apiKey,e.name);let l=null;for(const u of n)try{const h=await u._get(o);if(h){const d=Es._fromJSON(e,h);u!==i&&(l=d),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Lr(i,e,s):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Lr(i,e,s))}}/**
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
 */function vm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(JP(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(QP(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ek(e))return"Blackberry";if(tk(e))return"Webos";if(YP(e))return"Safari";if((e.includes("chrome/")||XP(e))&&!e.includes("edge/"))return"Chrome";if(ZP(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function QP(t=yn()){return/firefox\//i.test(t)}function YP(t=yn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function XP(t=yn()){return/crios\//i.test(t)}function JP(t=yn()){return/iemobile/i.test(t)}function ZP(t=yn()){return/android/i.test(t)}function ek(t=yn()){return/blackberry/i.test(t)}function tk(t=yn()){return/webos/i.test(t)}/**
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
 */function zv(t,e=[]){let n;switch(t){case"Browser":n=vm(yn());break;case"Worker":n=`${vm(yn())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ti}/${s}`}/**
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
 */class nk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function sk(t,e={}){return Hl(t,"GET","/v2/passwordPolicy",Uv(t,e))}/**
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
 */const rk=6;class ik{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:rk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class ok{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Em(this),this.idTokenSubscription=new Em(this),this.beforeStateQueue=new nk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xs(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Lr.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await jv(this,{idToken:e}),s=await Es._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(xi(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ja(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=LP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xi(this.app))return Promise.reject(Ca(this));const n=e?vn(e):null;return n&&Ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xi(this.app)?Promise.reject(Ca(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xi(this.app)?Promise.reject(Ca(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xs(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await sk(this),n=new ik(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ei("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await GP(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xs(e)||this._popupRedirectResolver;Ne(n,this,"argument-error"),this.redirectPersistenceManager=await Lr.create(this,[Xs(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ne(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&DP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ak(t){return vn(t)}class Em{constructor(e){this.auth=e,this.observer=null,this.addObserver=uC(n=>this.observer=n)}get next(){return Ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function lk(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Xs);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}new xo(3e4,6e4);/**
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
 */new xo(2e3,1e4);/**
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
 */new xo(3e4,6e4);/**
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
 */new xo(5e3,15e3);var Tm="@firebase/auth",wm="1.8.2";/**
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
 */class ck{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function uk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hk(t){On(new En("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=s.options;Ne(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zv(t)},u=new ok(s,r,i,c);return lk(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),On(new En("auth-internal",e=>{const n=ak(e.getProvider("auth").getImmediate());return(s=>new ck(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(Tm,wm,uk(t)),Gt(Tm,wm,"esm2017")}/**
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
 */const fk=5*60;YA("authIdTokenMaxAge");hk("Browser");/**
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
 */const dk=new Map,pk={activated:!1,tokenObservers:[]};function Tn(t){return dk.get(t)||Object.assign({},pk)}const Im={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class mk{constructor(e,n,s,r,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=r,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=r,r>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new po,this.pending.promise.catch(n=>{}),await gk(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new po,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function gk(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const _k={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Za=new ei("appCheck","AppCheck",_k);function Kv(t){if(!Tn(t).activated)throw Za.create("use-before-activation",{appName:t.name})}/**
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
 */const yk="firebase-app-check-database",vk=1,Ou="firebase-app-check-store";let ha=null;function Ek(){return ha||(ha=new Promise((t,e)=>{try{const n=indexedDB.open(yk,vk);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var r;e(Za.create("storage-open",{originalErrorMessage:(r=s.target.error)===null||r===void 0?void 0:r.message}))},n.onupgradeneeded=s=>{const r=s.target.result;switch(s.oldVersion){case 0:r.createObjectStore(Ou,{keyPath:"compositeKey"})}}}catch(n){e(Za.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),ha)}function Tk(t,e){return wk(Ik(t),e)}async function wk(t,e){const s=(await Ek()).transaction(Ou,"readwrite"),i=s.objectStore(Ou).put({compositeKey:t,value:e});return new Promise((o,l)=>{i.onsuccess=c=>{o()},s.onerror=c=>{var u;l(Za.create("storage-set",{originalErrorMessage:(u=c.target.error)===null||u===void 0?void 0:u.message}))}})}function Ik(t){return`${t.options.appId}-${t.name}`}/**
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
 */const Mu=new Co("@firebase/app-check");function bm(t,e){return ny()?Tk(t,e).catch(n=>{Mu.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const bk={error:"UNKNOWN_ERROR"};function Ak(t){return Al.encodeString(JSON.stringify(t),!1)}async function Lu(t,e=!1){const n=t.app;Kv(n);const s=Tn(n);let r=s.token,i;if(r&&!Vi(r)&&(s.token=void 0,r=void 0),!r){const c=await s.cachedTokenPromise;c&&(Vi(c)?r=c:await bm(n,void 0))}if(!e&&r&&Vi(r))return{token:r.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),r=await Tn(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?Mu.warn(c.message):Mu.error(c),i=c}let l;return r?i?Vi(r)?l={token:r.token,internalError:i}:l=Cm(i):(l={token:r.token},s.token=r,await bm(n,r)):l=Cm(i),o&&Pk(n,l),l}async function Ck(t){const e=t.app;Kv(e);const{provider:n}=Tn(e);{const{token:s}=await n.getToken();return{token:s}}}function Rk(t,e,n,s){const{app:r}=t,i=Tn(r),o={next:n,error:s,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&Vi(i.token)){const l=i.token;Promise.resolve().then(()=>{n({token:l.token}),Am(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>Am(t))}function Gv(t,e){const n=Tn(t),s=n.tokenObservers.filter(r=>r.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function Am(t){const{app:e}=t,n=Tn(e);let s=n.tokenRefresher;s||(s=Sk(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function Sk(t){const{app:e}=t;return new mk(async()=>{const n=Tn(e);let s;if(n.token?s=await Lu(t,!0):s=await Lu(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=Tn(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const r=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,r),Math.max(0,s-Date.now())}else return 0},Im.RETRIAL_MIN_WAIT,Im.RETRIAL_MAX_WAIT)}function Pk(t,e){const n=Tn(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function Vi(t){return t.expireTimeMillis-Date.now()>0}function Cm(t){return{token:Ak(bk),error:t}}/**
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
 */class kk{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Tn(this.app);for(const n of e)Gv(this.app,n.next);return Promise.resolve()}}function Nk(t,e){return new kk(t,e)}function xk(t){return{getToken:e=>Lu(t,e),getLimitedUseToken:()=>Ck(t),addTokenListener:e=>Rk(t,"INTERNAL",e),removeTokenListener:e=>Gv(t.app,e)}}const Dk="@firebase/app-check",Ok="0.8.11",Mk="app-check",Rm="app-check-internal";function Lk(){On(new En(Mk,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return Nk(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Rm).initialize()})),On(new En(Rm,t=>{const e=t.getProvider("app-check").getImmediate();return xk(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Gt(Dk,Ok)}Lk();var Vk="firebase",Fk="11.2.0";/**
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
 */Gt(Vk,Fk,"app");const Qv=Symbol("firebaseApp");function Yv(t){return gh()&&pn(Qv,null)||ay(t)}const Rn=()=>{};function ef(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function Uk(t,e,n){const s=(""+e).split("."),r=s.pop(),i=s.reduce((o,l)=>o&&o[l],t);if(i!=null)return Array.isArray(i)?i.splice(Number(r),1,n):i[r]=n}function hr(t){return!!t&&typeof t=="object"}const Bk=Object.prototype;function $k(t){return hr(t)&&Object.getPrototypeOf(t)===Bk}function tf(t){return hr(t)&&t.type==="document"}function jk(t){return hr(t)&&t.type==="collection"}function qk(t){return tf(t)||jk(t)}function Hk(t){return hr(t)&&t.type==="query"}function Wk(t){return hr(t)&&"ref"in t}function zk(t){return hr(t)&&typeof t.bucket=="string"}function Kk(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const Gk=Symbol.for("v-scx");function Qk(){return!!pn(Gk,0)}var Sm={};const Pm="@firebase/database",km="1.0.11";/**
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
 */let Xv="";function Yk(t){Xv=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),yt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:mo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return os(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Xk(e)}}catch{}return new Jk},Js=Jv("localStorage"),Zk=Jv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=new Co("@firebase/database"),eN=function(){let t=1;return function(){return t++}}(),Zv=function(t){const e=pC(t),n=new cC;n.update(e);const s=n.digest();return Al.encodeByteArray(s)},Do=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Do.apply(null,s):typeof s=="object"?e+=yt(s):e+=s,e+=" "}return e};let Zi=null,Nm=!0;const tN=function(t,e){Q(!0,"Can't turn on custom loggers persistently."),Vr.logLevel=me.VERBOSE,Zi=Vr.log.bind(Vr)},Nt=function(...t){if(Nm===!0&&(Nm=!1,Zi===null&&Zk.get("logging_enabled")===!0&&tN()),Zi){const e=Do.apply(null,t);Zi(e)}},Oo=function(t){return function(...e){Nt(t,...e)}},Vu=function(...t){const e="FIREBASE INTERNAL ERROR: "+Do(...t);Vr.error(e)},nr=function(...t){const e=`FIREBASE FATAL ERROR: ${Do(...t)}`;throw Vr.error(e),new Error(e)},Yt=function(...t){const e="FIREBASE WARNING: "+Do(...t);Vr.warn(e)},nN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Yt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},eE=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},sN=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Xr="[MIN_NAME]",sr="[MAX_NAME]",oi=function(t,e){if(t===e)return 0;if(t===Xr||e===sr)return-1;if(e===Xr||t===sr)return 1;{const n=xm(t),s=xm(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},rN=function(t,e){return t===e?0:t<e?-1:1},Ci=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+yt(e))},nf=function(t){if(typeof t!="object"||t===null)return yt(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=yt(e[s]),n+=":",n+=nf(t[e[s]]);return n+="}",n},tE=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let r=0;r<n;r+=e)r+e>n?s.push(t.substring(r,n)):s.push(t.substring(r,r+e));return s};function on(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const nE=function(t){Q(!eE(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let r,i,o,l,c;t===0?(i=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),i=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-s-n))));const u=[];for(c=n;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(r?1:0),u.reverse();const h=u.join("");let d="";for(c=0;c<64;c+=8){let m=parseInt(h.substr(c,8),2).toString(16);m.length===1&&(m="0"+m),d=d+m}return d.toLowerCase()},iN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},oN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},aN=new RegExp("^-?(0*)\\d{1,10}$"),lN=-2147483648,cN=2147483647,xm=function(t){if(aN.test(t)){const e=Number(t);if(e>=lN&&e<=cN)return e}return null},Mo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Yt("Exception was thrown by user callback.",n),e},Math.floor(0))}},uN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},eo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class hN{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Yt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Nt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Yt(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf="5",sE="v",rE="s",iE="r",oE="f",aE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,lE="ls",cE="p",Fu="ac",uE="websocket",hE="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(e,n,s,r,i=!1,o="",l=!1,c=!1){this.secure=n,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Js.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Js.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function pN(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function fE(t,e,n){Q(typeof e=="string","typeof type must == string"),Q(typeof n=="object","typeof params must == object");let s;if(e===uE)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===hE)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);pN(t)&&(n.ns=t.namespace);const r=[];return on(n,(i,o)=>{r.push(i+"="+o)}),s+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(){this.counters_={}}incrementCounter(e,n=1){os(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return jA(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc={},Uc={};function rf(t){const e=t.toString();return Fc[e]||(Fc[e]=new mN),Fc[e]}function gN(t,e){const n=t.toString();return Uc[n]||(Uc[n]=e()),Uc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&Mo(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm="start",yN="close",vN="pLPCommand",EN="pRTLPCB",dE="id",pE="pw",mE="ser",TN="cb",wN="seg",IN="ts",bN="d",AN="dframe",gE=1870,_E=30,CN=gE-_E,RN=25e3,SN=3e4;class Cr{constructor(e,n,s,r,i,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Oo(e),this.stats_=rf(n),this.urlFn=c=>(this.appCheckToken&&(c[Fu]=this.appCheckToken),fE(n,hE,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new _N(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(SN)),sN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new of((...i)=>{const[o,l,c,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Dm)this.id=l,this.password=c;else if(o===yN)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,l]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Dm]="t",s[mE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[TN]=this.scriptTagHolder.uniqueCallbackIdentifier),s[sE]=sf,this.transportSessionId&&(s[rE]=this.transportSessionId),this.lastSessionId&&(s[lE]=this.lastSessionId),this.applicationId&&(s[cE]=this.applicationId),this.appCheckToken&&(s[Fu]=this.appCheckToken),typeof location<"u"&&location.hostname&&aE.test(location.hostname)&&(s[iE]=oE);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Cr.forceAllow_=!0}static forceDisallow(){Cr.forceDisallow_=!0}static isAvailable(){return Cr.forceAllow_?!0:!Cr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!iN()&&!oN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=yt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=J_(n),r=tE(s,CN);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[AN]="t",s[dE]=e,s[pE]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=yt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class of{constructor(e,n,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=eN(),window[vN+this.uniqueCallbackIdentifier]=e,window[EN+this.uniqueCallbackIdentifier]=n,this.myIFrame=of.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Nt("frame writing exception"),l.stack&&Nt(l.stack),Nt(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Nt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[dE]=this.myID,e[pE]=this.myPW,e[mE]=this.currentSerial;let n=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+_E+s.length<=gE;){const o=this.pendingSegs.shift();s=s+"&"+wN+r+"="+o.seg+"&"+IN+r+"="+o.ts+"&"+bN+r+"="+o.d,r++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(s,Math.floor(RN)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Nt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PN=16384,kN=45e3;let el=null;typeof MozWebSocket<"u"?el=MozWebSocket:typeof WebSocket<"u"&&(el=WebSocket);class Sn{constructor(e,n,s,r,i,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Oo(this.connId),this.stats_=rf(n),this.connURL=Sn.connectionURL_(n,o,l,r,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,r,i){const o={};return o[sE]=sf,typeof location<"u"&&location.hostname&&aE.test(location.hostname)&&(o[iE]=oE),n&&(o[rE]=n),s&&(o[lE]=s),r&&(o[Fu]=r),i&&(o[cE]=i),fE(e,uE,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Js.set("previous_websocket_failure",!0);try{let s;tC(),this.mySock=new el(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Sn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&el!==null&&!Sn.forceDisallow_}static previouslyFailed(){return Js.isInMemoryStorage||Js.get("previous_websocket_failure")===!0}markConnectionHealthy(){Js.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=mo(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Q(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=yt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=tE(n,PN);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(kN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Sn.responsesRequiredToBeHealthy=2;Sn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{static get ALL_TRANSPORTS(){return[Cr,Sn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Sn.isAvailable();let s=n&&!Sn.previouslyFailed();if(e.webSocketOnly&&(n||Yt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Sn];else{const r=this.transports_=[];for(const i of wo.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);wo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}wo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NN=6e4,xN=5e3,DN=10*1024,ON=100*1024,Bc="t",Om="d",MN="s",Mm="r",LN="e",Lm="o",Vm="a",Fm="n",Um="p",VN="h";class FN{constructor(e,n,s,r,i,o,l,c,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Oo("c:"+this.id+":"),this.transportManager_=new wo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=eo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ON?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>DN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Bc in e){const n=e[Bc];n===Vm?this.upgradeIfSecondaryHealthy_():n===Mm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Lm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ci("t",e),s=Ci("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Um,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Vm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Fm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ci("t",e),s=Ci("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ci(Bc,e);if(Om in e){const s=e[Om];if(n===VN){const r=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===Fm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===MN?this.onConnectionShutdown_(s):n===Mm?this.onReset_(s):n===LN?Vu("Server Error: "+s):n===Lm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Vu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),sf!==s&&Yt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),eo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(NN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):eo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(xN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Um,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Js.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{put(e,n,s,r){}merge(e,n,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e){this.allowedEvents_=e,this.listeners_={},Q(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const r=this.getInitialEvent(e);r&&n.apply(s,r)}off(e,n,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===n&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){Q(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl extends vE{static getInstance(){return new tl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Eh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return Q(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm=32,$m=768;class ze{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Fe(){return new ze("")}function Ae(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Os(t){return t.pieces_.length-t.pieceNum_}function He(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ze(t.pieces_,e)}function EE(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function UN(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function TE(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function wE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ze(e,0)}function ht(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ze)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&n.push(s[r])}return new ze(n,0)}function Te(t){return t.pieceNum_>=t.pieces_.length}function nn(t,e){const n=Ae(t),s=Ae(e);if(n===null)return e;if(n===s)return nn(He(t),He(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function IE(t,e){if(Os(t)!==Os(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function hn(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Os(t)>Os(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class BN{constructor(e,n){this.errorPrefix_=n,this.parts_=TE(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Rl(this.parts_[s]);bE(this)}}function $N(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Rl(e),bE(t)}function jN(t){const e=t.parts_.pop();t.byteLength_-=Rl(e),t.parts_.length>0&&(t.byteLength_-=1)}function bE(t){if(t.byteLength_>$m)throw new Error(t.errorPrefix_+"has a key path longer than "+$m+" bytes ("+t.byteLength_+").");if(t.parts_.length>Bm)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Bm+") or object contains a cycle "+Gs(t))}function Gs(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af extends vE{static getInstance(){return new af}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return Q(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=1e3,qN=60*5*1e3,jm=30*1e3,HN=1.3,WN=3e4,zN="server_kill",qm=3;class Zn extends yE{constructor(e,n,s,r,i,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=Zn.nextPersistentConnectionId_++,this.log_=Oo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ri,this.maxReconnectDelay_=qN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");af.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&tl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const r=++this.requestNumber_,i={r,a:e,b:n};this.log_(yt(i)),Q(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const n=new po,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,s,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),Q(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Q(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const l={onComplete:r,hashFn:n,query:e,tag:s};this.listens.get(o).set(i,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,l=>{const c=l.d,u=l.s;Zn.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&os(e,"w")){const s=jr(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Yt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||lC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=jm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=aC(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),Q(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,n)}sendUnlisten_(e,n,s,r){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";r&&(i.q=s,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,r){const i={p:n,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,s,r){this.putInternal("p",e,n,s,r)}merge(e,n,s,r){this.putInternal("m",e,n,s,r)}putInternal(e,n,s,r,i){this.initConnection_();const o={p:n,d:s};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+yt(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Vu("Unrecognized action received from server: "+yt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Q(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ri,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ri,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>WN&&(this.reconnectDelay_=Ri),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*HN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Zn.nextConnectionId_++,i=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},u=function(d){Q(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:c,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,m]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Nt("getToken() completed but was canceled"):(Nt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=m&&m.token,l=new FN(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{Yt(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(zN)},i))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Yt(d),c())}}}interrupt(e){Nt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Nt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],yp(this.interruptReasons_)&&(this.reconnectDelay_=Ri,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(i=>nf(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const s=new ze(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(n),i.delete(n),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,n){Nt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=qm&&(this.reconnectDelay_=jm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Nt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=qm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Xv.replace(/\./g,"-")]=1,Eh()?e["framework.cordova"]=1:ty()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=tl.getInstance().currentlyOnline();return yp(this.interruptReasons_)&&e}}Zn.nextPersistentConnectionId_=0;Zn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Ce(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Ce(Xr,e),r=new Ce(Xr,n);return this.compare(s,r)!==0}minPost(){return Ce.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fa;class AE extends Wl{static get __EMPTY_NODE(){return fa}static set __EMPTY_NODE(e){fa=e}compare(e,n){return oi(e.name,n.name)}isDefinedOn(e){throw Zr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Ce.MIN}maxPost(){return new Ce(sr,fa)}makePost(e,n){return Q(typeof e=="string","KeyIndex indexValue must always be a string."),new Ce(e,fa)}toString(){return".key"}}const Fr=new AE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ut{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??ut.RED,this.left=r??qt.EMPTY_NODE,this.right=i??qt.EMPTY_NODE}copy(e,n,s,r,i){return new ut(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return qt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,r;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return qt.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ut.RED=!0;ut.BLACK=!1;class KN{copy(e,n,s,r,i){return this}insert(e,n,s){return new ut(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class qt{constructor(e,n=qt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new qt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ut.BLACK,null,null))}remove(e){return new qt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ut.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,r=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new da(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new da(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new da(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new da(this.root_,null,this.comparator_,!0,e)}}qt.EMPTY_NODE=new KN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GN(t,e){return oi(t.name,e.name)}function lf(t,e){return oi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uu;function QN(t){Uu=t}const CE=function(t){return typeof t=="number"?"number:"+nE(t):"string:"+t},RE=function(t){if(t.isLeafNode()){const e=t.val();Q(typeof e=="string"||typeof e=="number"||typeof e=="object"&&os(e,".sv"),"Priority must be a string or number.")}else Q(t===Uu||t.isEmpty(),"priority of unexpected type.");Q(t===Uu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hm;class lt{static set __childrenNodeConstructor(e){Hm=e}static get __childrenNodeConstructor(){return Hm}constructor(e,n=lt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,Q(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),RE(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new lt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:lt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Te(e)?this:Ae(e)===".priority"?this.priorityNode_:lt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:lt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Ae(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(Q(s!==".priority"||Os(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,lt.__childrenNodeConstructor.EMPTY_NODE.updateChild(He(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+CE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=nE(this.value_):e+=this.value_,this.lazyHash_=Zv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===lt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof lt.__childrenNodeConstructor?-1:(Q(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,r=lt.VALUE_TYPE_ORDER.indexOf(n),i=lt.VALUE_TYPE_ORDER.indexOf(s);return Q(r>=0,"Unknown leaf type: "+n),Q(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}lt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let SE,PE;function YN(t){SE=t}function XN(t){PE=t}class JN extends Wl{compare(e,n){const s=e.node.getPriority(),r=n.node.getPriority(),i=s.compareTo(r);return i===0?oi(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Ce.MIN}maxPost(){return new Ce(sr,new lt("[PRIORITY-POST]",PE))}makePost(e,n){const s=SE(e);return new Ce(n,new lt("[PRIORITY-POST]",s))}toString(){return".priority"}}const Dt=new JN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZN=Math.log(2);class ex{constructor(e){const n=i=>parseInt(Math.log(i)/ZN,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const nl=function(t,e,n,s){t.sort(e);const r=function(c,u){const h=u-c;let d,m;if(h===0)return null;if(h===1)return d=t[c],m=n?n(d):d,new ut(m,d.node,ut.BLACK,null,null);{const g=parseInt(h/2,10)+c,A=r(c,g),S=r(g+1,u);return d=t[g],m=n?n(d):d,new ut(m,d.node,ut.BLACK,A,S)}},i=function(c){let u=null,h=null,d=t.length;const m=function(A,S){const N=d-A,V=d;d-=A;const F=r(N+1,V),D=t[N],O=n?n(D):D;g(new ut(O,D.node,S,null,F))},g=function(A){u?(u.left=A,u=A):(h=A,u=A)};for(let A=0;A<c.count;++A){const S=c.nextBitIsOne(),N=Math.pow(2,c.count-(A+1));S?m(N,ut.BLACK):(m(N,ut.BLACK),m(N,ut.RED))}return h},o=new ex(t.length),l=i(o);return new qt(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $c;const Si={};class Qn{static get Default(){return Q(Dt,"ChildrenNode.ts has not been loaded"),$c=$c||new Qn({".priority":Si},{".priority":Dt}),$c}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=jr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof qt?n:null}hasIndex(e){return os(this.indexSet_,e.toString())}addIndex(e,n){Q(e!==Fr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=n.getIterator(Ce.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),s.push(o),o=i.getNext();let l;r?l=nl(s,e.getCompare()):l=Si;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const h=Object.assign({},this.indexes_);return h[c]=l,new Qn(h,u)}addToIndexes(e,n){const s=Va(this.indexes_,(r,i)=>{const o=jr(this.indexSet_,i);if(Q(o,"Missing index implementation for "+i),r===Si)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(Ce.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&l.push(u),u=c.getNext();return l.push(e),nl(l,o.getCompare())}else return Si;else{const l=n.get(e.name);let c=r;return l&&(c=c.remove(new Ce(e.name,l))),c.insert(e,e.node)}});return new Qn(s,this.indexSet_)}removeFromIndexes(e,n){const s=Va(this.indexes_,r=>{if(r===Si)return r;{const i=n.get(e.name);return i?r.remove(new Ce(e.name,i)):r}});return new Qn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pi;class Me{static get EMPTY_NODE(){return Pi||(Pi=new Me(new qt(lf),null,Qn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&RE(this.priorityNode_),this.children_.isEmpty()&&Q(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Pi}updatePriority(e){return this.children_.isEmpty()?this:new Me(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Pi:n}}getChild(e){const n=Ae(e);return n===null?this:this.getImmediateChild(n).getChild(He(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(Q(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Ce(e,n);let r,i;n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(s,this.children_));const o=r.isEmpty()?Pi:this.priorityNode_;return new Me(r,o,i)}}updateChild(e,n){const s=Ae(e);if(s===null)return n;{Q(Ae(e)!==".priority"||Os(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(He(e),n);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,r=0,i=!0;if(this.forEachChild(Dt,(o,l)=>{n[o]=l.val(e),s++,i&&Me.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+CE(this.getPriority().val())+":"),this.forEachChild(Dt,(n,s)=>{const r=s.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":Zv(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new Ce(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Ce(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Ce(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,Ce.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,Ce.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Lo?-1:0}withIndex(e){if(e===Fr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Me(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Fr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Dt),r=n.getIterator(Dt);let i=s.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=s.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Fr?null:this.indexMap_.get(e.toString())}}Me.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class tx extends Me{constructor(){super(new qt(lf),Me.EMPTY_NODE,Qn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Me.EMPTY_NODE}isEmpty(){return!1}}const Lo=new tx;Object.defineProperties(Ce,{MIN:{value:new Ce(Xr,Me.EMPTY_NODE)},MAX:{value:new Ce(sr,Lo)}});AE.__EMPTY_NODE=Me.EMPTY_NODE;lt.__childrenNodeConstructor=Me;QN(Lo);XN(Lo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nx=!0;function xt(t,e=null){if(t===null)return Me.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),Q(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new lt(n,xt(e))}if(!(t instanceof Array)&&nx){const n=[];let s=!1;if(on(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=xt(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new Ce(o,c)))}}),n.length===0)return Me.EMPTY_NODE;const i=nl(n,GN,o=>o.name,lf);if(s){const o=nl(n,Dt.getCompare());return new Me(i,xt(e),new Qn({".priority":o},{".priority":Dt}))}else return new Me(i,xt(e),Qn.Default)}else{let n=Me.EMPTY_NODE;return on(t,(s,r)=>{if(os(t,s)&&s.substring(0,1)!=="."){const i=xt(r);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(s,i))}}),n.updatePriority(xt(e))}}YN(xt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx extends Wl{constructor(e){super(),this.indexPath_=e,Q(!Te(e)&&Ae(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),r=this.extractChild(n.node),i=s.compareTo(r);return i===0?oi(e.name,n.name):i}makePost(e,n){const s=xt(e),r=Me.EMPTY_NODE.updateChild(this.indexPath_,s);return new Ce(n,r)}maxPost(){const e=Me.EMPTY_NODE.updateChild(this.indexPath_,Lo);return new Ce(sr,e)}toString(){return TE(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx extends Wl{compare(e,n){const s=e.node.compareTo(n.node);return s===0?oi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Ce.MIN}maxPost(){return Ce.MAX}makePost(e,n){const s=xt(e);return new Ce(n,s)}toString(){return".value"}}const ix=new rx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ox(t){return{type:"value",snapshotNode:t}}function ax(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function lx(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Wm(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function cx(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Dt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return Q(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Q(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Xr}hasEnd(){return this.endSet_}getIndexEndValue(){return Q(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Q(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:sr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return Q(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Dt}copy(){const e=new cf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function zm(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Dt?n="$priority":t.index_===ix?n="$value":t.index_===Fr?n="$key":(Q(t.index_ instanceof sx,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=yt(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=yt(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+yt(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=yt(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+yt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Km(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Dt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl extends yE{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(Q(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=Oo("p:rest:"),this.listens_={}}listen(e,n,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=sl.getListenId_(e,s),l={};this.listens_[o]=l;const c=zm(e._queryParams);this.restRequest_(i+".json",c,(u,h)=>{let d=h;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(i,d,!1,s),jr(this.listens_,o)===l){let m;u?u===401?m="permission_denied":m="rest_error:"+u:m="ok",r(m,null)}})}unlisten(e,n){const s=sl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=zm(e._queryParams),s=e._path.toString(),r=new po;return this.restRequest_(s+".json",n,(i,o)=>{let l=o;i===404&&(l=null,i=null),i===null?(this.onDataUpdate_(s,l,!1,null),r.resolve(l)):r.reject(new Error(l))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(n.auth=r.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Th(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=mo(l.responseText)}catch{Yt("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&Yt("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(){this.rootNode_=Me.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(){return{value:null,children:new Map}}function kE(t,e,n){if(Te(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=Ae(e);t.children.has(s)||t.children.set(s,rl());const r=t.children.get(s);e=He(e),kE(r,e,n)}}function Bu(t,e,n){t.value!==null?n(e,t.value):hx(t,(s,r)=>{const i=new ze(e.toString()+"/"+s);Bu(r,i,n)})}function hx(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&on(this.last_,(s,r)=>{n[s]=n[s]-r}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm=10*1e3,dx=30*1e3,px=5*60*1e3;class mx{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new fx(e);const s=Gm+(dx-Gm)*Math.random();eo(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;on(e,(r,i)=>{i>0&&os(this.statsToReport_,r)&&(n[r]=i,s=!0)}),s&&this.server_.reportStats(n),eo(this.reportStats_.bind(this),Math.floor(Math.random()*2*px))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Pn||(Pn={}));function NE(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function xE(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function DE(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Pn.ACK_USER_WRITE,this.source=NE()}operationForChild(e){if(Te(this.path)){if(this.affectedTree.value!=null)return Q(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ze(e));return new il(Fe(),n,this.revert)}}else return Q(Ae(this.path)===e,"operationForChild called for unrelated child."),new il(He(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Pn.OVERWRITE}operationForChild(e){return Te(this.path)?new rr(this.source,Fe(),this.snap.getImmediateChild(e)):new rr(this.source,He(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Pn.MERGE}operationForChild(e){if(Te(this.path)){const n=this.children.subtree(new ze(e));return n.isEmpty()?null:n.value?new rr(this.source,Fe(),n.value):new Io(this.source,Fe(),n)}else return Q(Ae(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Io(this.source,He(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Te(e))return this.isFullyInitialized()&&!this.filtered_;const n=Ae(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function gx(t,e,n,s){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(cx(o.childName,o.snapshotNode))}),ki(t,r,"child_removed",e,s,n),ki(t,r,"child_added",e,s,n),ki(t,r,"child_moved",i,s,n),ki(t,r,"child_changed",e,s,n),ki(t,r,"value",e,s,n),r}function ki(t,e,n,s,r,i){const o=s.filter(l=>l.type===n);o.sort((l,c)=>yx(t,l,c)),o.forEach(l=>{const c=_x(t,l,i);r.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(c,t.query_))})})}function _x(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function yx(t,e,n){if(e.childName==null||n.childName==null)throw Zr("Should only compare child_ events.");const s=new Ce(e.childName,e.snapshotNode),r=new Ce(n.childName,n.snapshotNode);return t.index_.compare(s,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OE(t,e){return{eventCache:t,serverCache:e}}function to(t,e,n,s){return OE(new uf(e,n,s),t.serverCache)}function ME(t,e,n,s){return OE(t.eventCache,new uf(e,n,s))}function $u(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ir(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jc;const vx=()=>(jc||(jc=new qt(rN)),jc);class qe{static fromObject(e){let n=new qe(null);return on(e,(s,r)=>{n=n.set(new ze(s),r)}),n}constructor(e,n=vx()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Fe(),value:this.value};if(Te(e))return null;{const s=Ae(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(He(e),n);return i!=null?{path:ht(new ze(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Te(e))return this;{const n=Ae(e),s=this.children.get(n);return s!==null?s.subtree(He(e)):new qe(null)}}set(e,n){if(Te(e))return new qe(n,this.children);{const s=Ae(e),i=(this.children.get(s)||new qe(null)).set(He(e),n),o=this.children.insert(s,i);return new qe(this.value,o)}}remove(e){if(Te(e))return this.children.isEmpty()?new qe(null):new qe(null,this.children);{const n=Ae(e),s=this.children.get(n);if(s){const r=s.remove(He(e));let i;return r.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,r),this.value===null&&i.isEmpty()?new qe(null):new qe(this.value,i)}else return this}}get(e){if(Te(e))return this.value;{const n=Ae(e),s=this.children.get(n);return s?s.get(He(e)):null}}setTree(e,n){if(Te(e))return n;{const s=Ae(e),i=(this.children.get(s)||new qe(null)).setTree(He(e),n);let o;return i.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,i),new qe(this.value,o)}}fold(e){return this.fold_(Fe(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(ht(e,r),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Fe(),n)}findOnPath_(e,n,s){const r=this.value?s(n,this.value):!1;if(r)return r;if(Te(e))return null;{const i=Ae(e),o=this.children.get(i);return o?o.findOnPath_(He(e),ht(n,i),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Fe(),n)}foreachOnPath_(e,n,s){if(Te(e))return this;{this.value&&s(n,this.value);const r=Ae(e),i=this.children.get(r);return i?i.foreachOnPath_(He(e),ht(n,r),s):new qe(null)}}foreach(e){this.foreach_(Fe(),e)}foreach_(e,n){this.children.inorderTraversal((s,r)=>{r.foreach_(ht(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.writeTree_=e}static empty(){return new mn(new qe(null))}}function no(t,e,n){if(Te(e))return new mn(new qe(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const o=nn(r,e);return i=i.updateChild(o,n),new mn(t.writeTree_.set(r,i))}else{const r=new qe(n),i=t.writeTree_.setTree(e,r);return new mn(i)}}}function Qm(t,e,n){let s=t;return on(n,(r,i)=>{s=no(s,ht(e,r),i)}),s}function Ym(t,e){if(Te(e))return mn.empty();{const n=t.writeTree_.setTree(e,new qe(null));return new mn(n)}}function ju(t,e){return fr(t,e)!=null}function fr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(nn(n.path,e)):null}function Xm(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Dt,(s,r)=>{e.push(new Ce(s,r))}):t.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new Ce(s,r.value))}),e}function Rs(t,e){if(Te(e))return t;{const n=fr(t,e);return n!=null?new mn(new qe(n)):new mn(t.writeTree_.subtree(e))}}function qu(t){return t.writeTree_.isEmpty()}function Jr(t,e){return LE(Fe(),t.writeTree_,e)}function LE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(Q(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):n=LE(ht(t,r),i,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ht(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(t,e){return jE(e,t)}function Ex(t,e,n,s,r){Q(s>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:r}),r&&(t.visibleWrites=no(t.visibleWrites,e,n)),t.lastWriteId=s}function Tx(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function wx(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);Q(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let r=s.visible,i=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Ix(l,s.path)?r=!1:hn(s.path,l.path)&&(i=!0)),o--}if(r){if(i)return bx(t),!0;if(s.snap)t.visibleWrites=Ym(t.visibleWrites,s.path);else{const l=s.children;on(l,c=>{t.visibleWrites=Ym(t.visibleWrites,ht(s.path,c))})}return!0}else return!1}function Ix(t,e){if(t.snap)return hn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&hn(ht(t.path,n),e))return!0;return!1}function bx(t){t.visibleWrites=FE(t.allWrites,Ax,Fe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Ax(t){return t.visible}function FE(t,e,n){let s=mn.empty();for(let r=0;r<t.length;++r){const i=t[r];if(e(i)){const o=i.path;let l;if(i.snap)hn(n,o)?(l=nn(n,o),s=no(s,l,i.snap)):hn(o,n)&&(l=nn(o,n),s=no(s,Fe(),i.snap.getChild(l)));else if(i.children){if(hn(n,o))l=nn(n,o),s=Qm(s,l,i.children);else if(hn(o,n))if(l=nn(o,n),Te(l))s=Qm(s,Fe(),i.children);else{const c=jr(i.children,Ae(l));if(c){const u=c.getChild(He(l));s=no(s,Fe(),u)}}}else throw Zr("WriteRecord should have .snap or .children")}}return s}function UE(t,e,n,s,r){if(!s&&!r){const i=fr(t.visibleWrites,e);if(i!=null)return i;{const o=Rs(t.visibleWrites,e);if(qu(o))return n;if(n==null&&!ju(o,Fe()))return null;{const l=n||Me.EMPTY_NODE;return Jr(o,l)}}}else{const i=Rs(t.visibleWrites,e);if(!r&&qu(i))return n;if(!r&&n==null&&!ju(i,Fe()))return null;{const o=function(u){return(u.visible||r)&&(!s||!~s.indexOf(u.writeId))&&(hn(u.path,e)||hn(e,u.path))},l=FE(t.allWrites,o,e),c=n||Me.EMPTY_NODE;return Jr(l,c)}}}function Cx(t,e,n){let s=Me.EMPTY_NODE;const r=fr(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Dt,(i,o)=>{s=s.updateImmediateChild(i,o)}),s;if(n){const i=Rs(t.visibleWrites,e);return n.forEachChild(Dt,(o,l)=>{const c=Jr(Rs(i,new ze(o)),l);s=s.updateImmediateChild(o,c)}),Xm(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const i=Rs(t.visibleWrites,e);return Xm(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Rx(t,e,n,s,r){Q(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=ht(e,n);if(ju(t.visibleWrites,i))return null;{const o=Rs(t.visibleWrites,i);return qu(o)?r.getChild(n):Jr(o,r.getChild(n))}}function Sx(t,e,n,s){const r=ht(e,n),i=fr(t.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(n)){const o=Rs(t.visibleWrites,r);return Jr(o,s.getNode().getImmediateChild(n))}else return null}function Px(t,e){return fr(t.visibleWrites,e)}function kx(t,e,n,s,r,i,o){let l;const c=Rs(t.visibleWrites,e),u=fr(c,Fe());if(u!=null)l=u;else if(n!=null)l=Jr(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],d=o.getCompare(),m=i?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let g=m.getNext();for(;g&&h.length<r;)d(g,s)!==0&&h.push(g),g=m.getNext();return h}else return[]}function Nx(){return{visibleWrites:mn.empty(),allWrites:[],lastWriteId:-1}}function Hu(t,e,n,s){return UE(t.writeTree,t.treePath,e,n,s)}function BE(t,e){return Cx(t.writeTree,t.treePath,e)}function Jm(t,e,n,s){return Rx(t.writeTree,t.treePath,e,n,s)}function ol(t,e){return Px(t.writeTree,ht(t.treePath,e))}function xx(t,e,n,s,r,i){return kx(t.writeTree,t.treePath,e,n,s,r,i)}function hf(t,e,n){return Sx(t.writeTree,t.treePath,e,n)}function $E(t,e){return jE(ht(t.treePath,e),t.writeTree)}function jE(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;Q(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),Q(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(s,Wm(s,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(s,lx(s,r.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(s,ax(s,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(s,Wm(s,e.snapshotNode,r.oldSnap));else throw Zr("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const qE=new Ox;class ff{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new uf(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return hf(this.writes_,e,s)}}getChildAfterChild(e,n,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ir(this.viewCache_),i=xx(this.writes_,r,n,1,s,e);return i.length===0?null:i[0]}}function Mx(t,e){Q(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),Q(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Lx(t,e,n,s,r){const i=new Dx;let o,l;if(n.type===Pn.OVERWRITE){const u=n;u.source.fromUser?o=Wu(t,e,u.path,u.snap,s,r,i):(Q(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!Te(u.path),o=al(t,e,u.path,u.snap,s,r,l,i))}else if(n.type===Pn.MERGE){const u=n;u.source.fromUser?o=Fx(t,e,u.path,u.children,s,r,i):(Q(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=zu(t,e,u.path,u.children,s,r,l,i))}else if(n.type===Pn.ACK_USER_WRITE){const u=n;u.revert?o=$x(t,e,u.path,s,r,i):o=Ux(t,e,u.path,u.affectedTree,s,r,i)}else if(n.type===Pn.LISTEN_COMPLETE)o=Bx(t,e,n.path,s,i);else throw Zr("Unknown operation type: "+n.type);const c=i.getChanges();return Vx(e,o,c),{viewCache:o,changes:c}}function Vx(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=$u(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&n.push(ox($u(e)))}}function HE(t,e,n,s,r,i){const o=e.eventCache;if(ol(s,n)!=null)return e;{let l,c;if(Te(n))if(Q(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=ir(e),h=u instanceof Me?u:Me.EMPTY_NODE,d=BE(s,h);l=t.filter.updateFullNode(e.eventCache.getNode(),d,i)}else{const u=Hu(s,ir(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=Ae(n);if(u===".priority"){Q(Os(n)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const d=Jm(s,n,h,c);d!=null?l=t.filter.updatePriority(h,d):l=o.getNode()}else{const h=He(n);let d;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const m=Jm(s,n,o.getNode(),c);m!=null?d=o.getNode().getImmediateChild(u).updateChild(h,m):d=o.getNode().getImmediateChild(u)}else d=hf(s,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,h,r,i):l=o.getNode()}}return to(e,l,o.isFullyInitialized()||Te(n),t.filter.filtersNodes())}}function al(t,e,n,s,r,i,o,l){const c=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(Te(n))u=h.updateFullNode(c.getNode(),s,null);else if(h.filtersNodes()&&!c.isFiltered()){const g=c.getNode().updateChild(n,s);u=h.updateFullNode(c.getNode(),g,null)}else{const g=Ae(n);if(!c.isCompleteForPath(n)&&Os(n)>1)return e;const A=He(n),N=c.getNode().getImmediateChild(g).updateChild(A,s);g===".priority"?u=h.updatePriority(c.getNode(),N):u=h.updateChild(c.getNode(),g,N,A,qE,null)}const d=ME(e,u,c.isFullyInitialized()||Te(n),h.filtersNodes()),m=new ff(r,d,i);return HE(t,d,n,r,m,l)}function Wu(t,e,n,s,r,i,o){const l=e.eventCache;let c,u;const h=new ff(r,e,i);if(Te(n))u=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=to(e,u,!0,t.filter.filtersNodes());else{const d=Ae(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),s),c=to(e,u,l.isFullyInitialized(),l.isFiltered());else{const m=He(n),g=l.getNode().getImmediateChild(d);let A;if(Te(m))A=s;else{const S=h.getCompleteChild(d);S!=null?EE(m)===".priority"&&S.getChild(wE(m)).isEmpty()?A=S:A=S.updateChild(m,s):A=Me.EMPTY_NODE}if(g.equals(A))c=e;else{const S=t.filter.updateChild(l.getNode(),d,A,m,h,o);c=to(e,S,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Zm(t,e){return t.eventCache.isCompleteForChild(e)}function Fx(t,e,n,s,r,i,o){let l=e;return s.foreach((c,u)=>{const h=ht(n,c);Zm(e,Ae(h))&&(l=Wu(t,l,h,u,r,i,o))}),s.foreach((c,u)=>{const h=ht(n,c);Zm(e,Ae(h))||(l=Wu(t,l,h,u,r,i,o))}),l}function eg(t,e,n){return n.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function zu(t,e,n,s,r,i,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;Te(n)?u=s:u=new qe(null).setTree(n,s);const h=e.serverCache.getNode();return u.children.inorderTraversal((d,m)=>{if(h.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),A=eg(t,g,m);c=al(t,c,new ze(d),A,r,i,o,l)}}),u.children.inorderTraversal((d,m)=>{const g=!e.serverCache.isCompleteForChild(d)&&m.value===null;if(!h.hasChild(d)&&!g){const A=e.serverCache.getNode().getImmediateChild(d),S=eg(t,A,m);c=al(t,c,new ze(d),S,r,i,o,l)}}),c}function Ux(t,e,n,s,r,i,o){if(ol(r,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(Te(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return al(t,e,n,c.getNode().getChild(n),r,i,l,o);if(Te(n)){let u=new qe(null);return c.getNode().forEachChild(Fr,(h,d)=>{u=u.set(new ze(h),d)}),zu(t,e,n,u,r,i,l,o)}else return e}else{let u=new qe(null);return s.foreach((h,d)=>{const m=ht(n,h);c.isCompleteForPath(m)&&(u=u.set(h,c.getNode().getChild(m)))}),zu(t,e,n,u,r,i,l,o)}}function Bx(t,e,n,s,r){const i=e.serverCache,o=ME(e,i.getNode(),i.isFullyInitialized()||Te(n),i.isFiltered());return HE(t,o,n,s,qE,r)}function $x(t,e,n,s,r,i){let o;if(ol(s,n)!=null)return e;{const l=new ff(s,e,r),c=e.eventCache.getNode();let u;if(Te(n)||Ae(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Hu(s,ir(e));else{const d=e.serverCache.getNode();Q(d instanceof Me,"serverChildren would be complete if leaf node"),h=BE(s,d)}h=h,u=t.filter.updateFullNode(c,h,i)}else{const h=Ae(n);let d=hf(s,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=c.getImmediateChild(h)),d!=null?u=t.filter.updateChild(c,h,d,He(n),l,i):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(c,h,Me.EMPTY_NODE,He(n),l,i):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Hu(s,ir(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||ol(s,Fe())!=null,to(e,u,o,t.filter.filtersNodes())}}function jx(t,e){const n=ir(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Te(e)&&!n.getImmediateChild(Ae(e)).isEmpty())?n.getChild(e):null}function tg(t,e,n,s){e.type===Pn.MERGE&&e.source.queryId!==null&&(Q(ir(t.viewCache_),"We should always have a full cache before handling merges"),Q($u(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,i=Lx(t.processor_,r,e,n,s);return Mx(t.processor_,i.viewCache),Q(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,qx(t,i.changes,i.viewCache.eventCache.getNode())}function qx(t,e,n,s){const r=t.eventRegistrations_;return gx(t.eventGenerator_,e,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ng;function Hx(t){Q(!ng,"__referenceConstructor has already been defined"),ng=t}function df(t,e,n,s){const r=e.source.queryId;if(r!==null){const i=t.views.get(r);return Q(i!=null,"SyncTree gave us an op for an invalid query."),tg(i,e,n,s)}else{let i=[];for(const o of t.views.values())i=i.concat(tg(o,e,n,s));return i}}function pf(t,e){let n=null;for(const s of t.views.values())n=n||jx(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sg;function Wx(t){Q(!sg,"__referenceConstructor has already been defined"),sg=t}class rg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new qe(null),this.pendingWriteTree_=Nx(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function zx(t,e,n,s,r){return Ex(t.pendingWriteTree_,e,n,s,r),r?Kl(t,new rr(NE(),e,n)):[]}function Rr(t,e,n=!1){const s=Tx(t.pendingWriteTree_,e);if(wx(t.pendingWriteTree_,e)){let i=new qe(null);return s.snap!=null?i=i.set(Fe(),!0):on(s.children,o=>{i=i.set(new ze(o),!0)}),Kl(t,new il(s.path,i,n))}else return[]}function zl(t,e,n){return Kl(t,new rr(xE(),e,n))}function Kx(t,e,n){const s=qe.fromObject(n);return Kl(t,new Io(xE(),e,s))}function Gx(t,e,n,s){const r=GE(t,s);if(r!=null){const i=QE(r),o=i.path,l=i.queryId,c=nn(o,e),u=new rr(DE(l),c,n);return YE(t,o,u)}else return[]}function Qx(t,e,n,s){const r=GE(t,s);if(r){const i=QE(r),o=i.path,l=i.queryId,c=nn(o,e),u=qe.fromObject(n),h=new Io(DE(l),c,u);return YE(t,o,h)}else return[]}function WE(t,e,n){const r=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=nn(o,e),u=pf(l,c);if(u)return u});return UE(r,e,i,n,!0)}function Kl(t,e){return zE(e,t.syncPointTree_,null,VE(t.pendingWriteTree_,Fe()))}function zE(t,e,n,s){if(Te(t.path))return KE(t,e,n,s);{const r=e.get(Fe());n==null&&r!=null&&(n=pf(r,Fe()));let i=[];const o=Ae(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const u=n?n.getImmediateChild(o):null,h=$E(s,o);i=i.concat(zE(l,c,u,h))}return r&&(i=i.concat(df(r,t,s,n))),i}}function KE(t,e,n,s){const r=e.get(Fe());n==null&&r!=null&&(n=pf(r,Fe()));let i=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,u=$E(s,o),h=t.operationForChild(o);h&&(i=i.concat(KE(h,l,c,u)))}),r&&(i=i.concat(df(r,t,s,n))),i}function GE(t,e){return t.tagToQueryMap.get(e)}function QE(t){const e=t.indexOf("$");return Q(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ze(t.substr(0,e))}}function YE(t,e,n){const s=t.syncPointTree_.get(e);Q(s,"Missing sync point for query tag that we're tracking");const r=VE(t.pendingWriteTree_,e);return df(s,n,r,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new mf(n)}node(){return this.node_}}class gf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ht(this.path_,e);return new gf(this.syncTree_,n)}node(){return WE(this.syncTree_,this.path_)}}const Yx=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ig=function(t,e,n){if(!t||typeof t!="object")return t;if(Q(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Xx(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Jx(t[".sv"],e);Q(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Xx=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:Q(!1,"Unexpected server value: "+t)}},Jx=function(t,e,n){t.hasOwnProperty("increment")||Q(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&Q(!1,"Unexpected increment value: "+s);const r=e.node();if(Q(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return typeof o!="number"?s:o+s},Zx=function(t,e,n,s){return _f(e,new gf(n,t),s)},eD=function(t,e,n){return _f(t,new mf(e),n)};function _f(t,e,n){const s=t.getPriority().val(),r=ig(s,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,l=ig(o.getValue(),e,n);return l!==o.getValue()||r!==o.getPriority().val()?new lt(l,xt(r)):t}else{const o=t;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new lt(r))),o.forEachChild(Dt,(l,c)=>{const u=_f(c,e.getImmediateChild(l),n);u!==c&&(i=i.updateImmediateChild(l,u))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function vf(t,e){let n=e instanceof ze?e:new ze(e),s=t,r=Ae(n);for(;r!==null;){const i=jr(s.node.children,r)||{children:{},childCount:0};s=new yf(r,s,i),n=He(n),r=Ae(n)}return s}function ai(t){return t.node.value}function XE(t,e){t.node.value=e,Ku(t)}function JE(t){return t.node.childCount>0}function tD(t){return ai(t)===void 0&&!JE(t)}function Gl(t,e){on(t.node.children,(n,s)=>{e(new yf(n,t,s))})}function ZE(t,e,n,s){n&&e(t),Gl(t,r=>{ZE(r,e,!0)})}function nD(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Vo(t){return new ze(t.parent===null?t.name:Vo(t.parent)+"/"+t.name)}function Ku(t){t.parent!==null&&sD(t.parent,t.name,t)}function sD(t,e,n){const s=tD(n),r=os(t.node.children,e);s&&r?(delete t.node.children[e],t.node.childCount--,Ku(t)):!s&&!r&&(t.node.children[e]=n.node,t.node.childCount++,Ku(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rD=/[\[\].#$\/\u0000-\u001F\u007F]/,iD=/[\[\].#$\u0000-\u001F\u007F]/,qc=10*1024*1024,eT=function(t){return typeof t=="string"&&t.length!==0&&!rD.test(t)},oD=function(t){return typeof t=="string"&&t.length!==0&&!iD.test(t)},aD=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),oD(t)},tT=function(t,e,n){const s=n instanceof ze?new BN(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Gs(s));if(typeof e=="function")throw new Error(t+"contains a function "+Gs(s)+" with contents = "+e.toString());if(eE(e))throw new Error(t+"contains "+e.toString()+" "+Gs(s));if(typeof e=="string"&&e.length>qc/3&&Rl(e)>qc)throw new Error(t+"contains a string greater than "+qc+" utf8 bytes "+Gs(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(on(e,(o,l)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!eT(o)))throw new Error(t+" contains an invalid key ("+o+") "+Gs(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);$N(s,o),tT(t,l,s),jN(s)}),r&&i)throw new Error(t+' contains ".value" child '+Gs(s)+" in addition to actual children.")}},lD=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!eT(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!aD(n))throw new Error(dC(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function uD(t,e){let n=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();n!==null&&!IE(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(r)}n&&t.eventLists_.push(n)}function dr(t,e,n){uD(t,n),hD(t,s=>hn(s,e)||hn(e,s))}function hD(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const r=t.eventLists_[s];if(r){const i=r.path;e(i)?(fD(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function fD(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Zi&&Nt("event: "+n.toString()),Mo(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dD="repo_interrupt",pD=25;class mD{constructor(e,n,s,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new cD,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=rl(),this.transactionQueueTree_=new yf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function gD(t,e,n){if(t.stats_=rf(t.repoInfo_),t.forceRestClient_||uN())t.server_=new sl(t.repoInfo_,(s,r,i,o)=>{og(t,s,r,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ag(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{yt(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Zn(t.repoInfo_,e,(s,r,i,o)=>{og(t,s,r,i,o)},s=>{ag(t,s)},s=>{yD(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=gN(t.repoInfo_,()=>new mx(t.stats_,t.server_)),t.infoData_=new ux,t.infoSyncTree_=new rg({startListening:(s,r,i,o)=>{let l=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(l=zl(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Ef(t,"connected",!1),t.serverSyncTree_=new rg({startListening:(s,r,i,o)=>(t.server_.listen(s,i,r,(l,c)=>{const u=o(l,c);dr(t.eventQueue_,s._path,u)}),[]),stopListening:(s,r)=>{t.server_.unlisten(s,r)}})}function _D(t){const n=t.infoData_.getNode(new ze(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function nT(t){return Yx({timestamp:_D(t)})}function og(t,e,n,s,r){t.dataUpdateCount++;const i=new ze(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(s){const c=Va(n,u=>xt(u));o=Qx(t.serverSyncTree_,i,c,r)}else{const c=xt(n);o=Gx(t.serverSyncTree_,i,c,r)}else if(s){const c=Va(n,u=>xt(u));o=Kx(t.serverSyncTree_,i,c)}else{const c=xt(n);o=zl(t.serverSyncTree_,i,c)}let l=i;o.length>0&&(l=wf(t,i)),dr(t.eventQueue_,l,o)}function ag(t,e){Ef(t,"connected",e),e===!1&&ED(t)}function yD(t,e){on(e,(n,s)=>{Ef(t,n,s)})}function Ef(t,e,n){const s=new ze("/.info/"+e),r=xt(n);t.infoData_.updateSnapshot(s,r);const i=zl(t.infoSyncTree_,s,r);dr(t.eventQueue_,s,i)}function vD(t){return t.nextWriteId_++}function ED(t){sT(t,"onDisconnectEvents");const e=nT(t),n=rl();Bu(t.onDisconnect_,Fe(),(r,i)=>{const o=Zx(r,i,t.serverSyncTree_,e);kE(n,r,o)});let s=[];Bu(n,Fe(),(r,i)=>{s=s.concat(zl(t.serverSyncTree_,r,i));const o=bD(t,r);wf(t,o)}),t.onDisconnect_=rl(),dr(t.eventQueue_,Fe(),s)}function TD(t){t.persistentConnection_&&t.persistentConnection_.interrupt(dD)}function sT(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Nt(n,...e)}function rT(t,e,n){return WE(t.serverSyncTree_,e,n)||Me.EMPTY_NODE}function Tf(t,e=t.transactionQueueTree_){if(e||Ql(t,e),ai(e)){const n=oT(t,e);Q(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&wD(t,Vo(e),n)}else JE(e)&&Gl(e,n=>{Tf(t,n)})}function wD(t,e,n){const s=n.map(u=>u.currentWriteId),r=rT(t,e,s);let i=r;const o=r.hash();for(let u=0;u<n.length;u++){const h=n[u];Q(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=nn(e,h.path);i=i.updateChild(d,h.currentOutputSnapshotRaw)}const l=i.val(!0),c=e;t.server_.put(c.toString(),l,u=>{sT(t,"transaction put response",{path:c.toString(),status:u});let h=[];if(u==="ok"){const d=[];for(let m=0;m<n.length;m++)n[m].status=2,h=h.concat(Rr(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&d.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();Ql(t,vf(t.transactionQueueTree_,e)),Tf(t,t.transactionQueueTree_),dr(t.eventQueue_,e,h);for(let m=0;m<d.length;m++)Mo(d[m])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Yt("transaction at "+c.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}wf(t,e)}},o)}function wf(t,e){const n=iT(t,e),s=Vo(n),r=oT(t,n);return ID(t,r,s),s}function ID(t,e,n){if(e.length===0)return;const s=[];let r=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],u=nn(n,c.path);let h=!1,d;if(Q(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,d=c.abortReason,r=r.concat(Rr(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=pD)h=!0,d="maxretry",r=r.concat(Rr(t.serverSyncTree_,c.currentWriteId,!0));else{const m=rT(t,c.path,o);c.currentInputSnapshot=m;const g=e[l].update(m.val());if(g!==void 0){tT("transaction failed: Data returned ",g,c.path);let A=xt(g);typeof g=="object"&&g!=null&&os(g,".priority")||(A=A.updatePriority(m.getPriority()));const N=c.currentWriteId,V=nT(t),F=eD(A,m,V);c.currentOutputSnapshotRaw=A,c.currentOutputSnapshotResolved=F,c.currentWriteId=vD(t),o.splice(o.indexOf(N),1),r=r.concat(zx(t.serverSyncTree_,c.path,F,c.currentWriteId,c.applyLocally)),r=r.concat(Rr(t.serverSyncTree_,N,!0))}else h=!0,d="nodata",r=r.concat(Rr(t.serverSyncTree_,c.currentWriteId,!0))}dr(t.eventQueue_,n,r),r=[],h&&(e[l].status=2,function(m){setTimeout(m,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(d),!1,null))))}Ql(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Mo(s[l]);Tf(t,t.transactionQueueTree_)}function iT(t,e){let n,s=t.transactionQueueTree_;for(n=Ae(e);n!==null&&ai(s)===void 0;)s=vf(s,n),e=He(e),n=Ae(e);return s}function oT(t,e){const n=[];return aT(t,e,n),n.sort((s,r)=>s.order-r.order),n}function aT(t,e,n){const s=ai(e);if(s)for(let r=0;r<s.length;r++)n.push(s[r]);Gl(e,r=>{aT(t,r,n)})}function Ql(t,e){const n=ai(e);if(n){let s=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[s]=n[r],s++);n.length=s,XE(e,n.length>0?n:void 0)}Gl(e,s=>{Ql(t,s)})}function bD(t,e){const n=Vo(iT(t,e)),s=vf(t.transactionQueueTree_,e);return nD(s,r=>{Hc(t,r)}),Hc(t,s),ZE(s,r=>{Hc(t,r)}),n}function Hc(t,e){const n=ai(e);if(n){const s=[];let r=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(Q(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(Q(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(Rr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?XE(e,void 0):n.length=i+1,dr(t.eventQueue_,Vo(e),r);for(let o=0;o<s.length;o++)Mo(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AD(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let r=n[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function CD(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Yt(`Invalid query segment '${n}' in query '${t}'`)}return e}const lg=function(t,e){const n=RD(t),s=n.namespace;n.domain==="firebase.com"&&nr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&nr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||nN();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new dN(n.host,n.secure,s,r,e,"",s!==n.subdomain),path:new ze(n.pathString)}},RD=function(t){let e="",n="",s="",r="",i="",o=!0,l="https",c=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(h,d)),h<d&&(r=AD(t.substring(h,d)));const m=CD(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const A=e.indexOf(".");s=e.substring(0,A).toLowerCase(),n=e.substring(A+1),i=s}"ns"in m&&(i=m.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:l,pathString:r,namespace:i}};/**
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
 */class If{constructor(e,n,s,r){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=r}get key(){return Te(this._path)?null:EE(this._path)}get ref(){return new li(this._repo,this._path)}get _queryIdentifier(){const e=Km(this._queryParams),n=nf(e);return n==="{}"?"default":n}get _queryObject(){return Km(this._queryParams)}isEqual(e){if(e=vn(e),!(e instanceof If))return!1;const n=this._repo===e._repo,s=IE(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+UN(this._path)}}class li extends If{constructor(e,n){super(e,n,new cf,!1)}get parent(){const e=wE(this._path);return e===null?null:new li(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}Hx(li);Wx(li);/**
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
 */const SD="FIREBASE_DATABASE_EMULATOR_HOST",Gu={};let PD=!1;function kD(t,e,n,s,r){let i=s||t.options.databaseURL;i===void 0&&(t.options.projectId||nr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Nt("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=lg(i,r),l=o.repoInfo,c;typeof process<"u"&&Sm&&(c=Sm[SD]),c?(i=`http://${c}?ns=${l.namespace}`,o=lg(i,r),l=o.repoInfo):o.repoInfo.secure;const u=new fN(t.name,t.options,e);lD("Invalid Firebase Database URL",o),Te(o.path)||nr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=xD(l,t,u,new hN(t.name,n));return new DD(h,t)}function ND(t,e){const n=Gu[e];(!n||n[t.key]!==t)&&nr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),TD(t),delete n[t.key]}function xD(t,e,n,s){let r=Gu[e.name];r||(r={},Gu[e.name]=r);let i=r[t.toURLString()];return i&&nr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new mD(t,PD,n,s),r[t.toURLString()]=i,i}class DD{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(gD(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new li(this._repo,Fe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ND(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&nr("Cannot call "+e+" on a deleted database.")}}/**
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
 */function OD(t){Yk(ti),On(new En("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return kD(s,r,i,n)},"PUBLIC").setMultipleInstances(!0)),Gt(Pm,km,t),Gt(Pm,km,"esm2017")}Zn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Zn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};OD();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT="firebasestorage.googleapis.com",MD="storageBucket",LD=2*60*1e3,VD=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends is{constructor(e,n,s=0){super(Wc(e),`Firebase Storage: ${n} (${Wc(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Fn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Wc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Vn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Vn||(Vn={}));function Wc(t){return"storage/"+t}function FD(){const t="An unknown error occurred, please check the error payload for server response.";return new Fn(Vn.UNKNOWN,t)}function UD(){return new Fn(Vn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function BD(){return new Fn(Vn.CANCELED,"User canceled the upload/download.")}function $D(t){return new Fn(Vn.INVALID_URL,"Invalid URL '"+t+"'.")}function jD(t){return new Fn(Vn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function cg(t){return new Fn(Vn.INVALID_ARGUMENT,t)}function cT(){return new Fn(Vn.APP_DELETED,"The Firebase app was deleted.")}function qD(t){return new Fn(Vn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=fn.makeFromUrl(e,n)}catch{return new fn(e,"")}if(s.path==="")return s;throw jD(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(O){O.path_=decodeURIComponent(O.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${h}/b/${r}/o${m}`,"i"),A={bucket:1,path:3},S=n===lT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",V=new RegExp(`^https?://${S}/${r}/${N}`,"i"),D=[{regex:l,indices:c,postModify:i},{regex:g,indices:A,postModify:u},{regex:V,indices:{bucket:1,path:2},postModify:u}];for(let O=0;O<D.length;O++){const ee=D[O],te=ee.regex.exec(e);if(te){const C=te[ee.indices.bucket];let y=te[ee.indices.path];y||(y=""),s=new fn(C,y),ee.postModify(s);break}}if(s==null)throw $D(e);return s}}class HD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WD(t,e,n){let s=1,r=null,i=null,o=!1,l=0;function c(){return l===2}let u=!1;function h(...N){u||(u=!0,e.apply(null,N))}function d(N){r=setTimeout(()=>{r=null,t(g,c())},N)}function m(){i&&clearTimeout(i)}function g(N,...V){if(u){m();return}if(N){m(),h.call(null,N,...V);return}if(c()||o){m(),h.call(null,N,...V);return}s<64&&(s*=2);let D;l===1?(l=2,D=0):D=(s+Math.random())*1e3,d(D)}let A=!1;function S(N){A||(A=!0,m(),!u&&(r!==null?(N||(l=2),clearTimeout(r),d(0)):N||(l=1)))}return d(0),i=setTimeout(()=>{o=!0,S(!0)},n),S}function zD(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KD(t){return t!==void 0}function ug(t,e,n,s){if(s<e)throw cg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw cg(`Invalid value for '${t}'. Expected ${n} or less.`)}function GD(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}var ll;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ll||(ll={}));/**
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
 */function QD(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD{constructor(e,n,s,r,i,o,l,c,u,h,d,m=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,A)=>{this.resolve_=g,this.reject_=A,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new pa(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===ll.NO_ERROR,c=i.getStatus();if(!l||QD(c,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===ll.ABORT;s(!1,new pa(!1,null,h));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new pa(u,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,l=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());KD(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=FD();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(r.canceled){const c=this.appDelete_?cT():BD();o(c)}else{const c=UD();o(c)}};this.canceled_?n(!1,new pa(!1,null,!0)):this.backoffId_=WD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&zD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class pa{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function XD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function JD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ZD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function e1(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function t1(t,e,n,s,r,i,o=!0){const l=GD(t.urlParams),c=t.url+l,u=Object.assign({},t.headers);return ZD(u,e),XD(u,n),JD(u,i),e1(u,s),new YD(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function s1(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class cl{constructor(e,n){this._service=e,n instanceof fn?this._location=n:this._location=fn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new cl(e,n)}get root(){const e=new fn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return s1(this._location.path)}get storage(){return this._service}get parent(){const e=n1(this._location.path);if(e===null)return null;const n=new fn(this._location.bucket,e);return new cl(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw qD(e)}}function hg(t,e){const n=e==null?void 0:e[MD];return n==null?null:fn.makeFromBucketSpec(n,t)}class r1{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=lT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=LD,this._maxUploadRetryTime=VD,this._requests=new Set,r!=null?this._bucket=fn.makeFromBucketSpec(r,this._host):this._bucket=hg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=fn.makeFromBucketSpec(this._url,e):this._bucket=hg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ug("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ug("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new cl(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new HD(cT());{const o=t1(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const fg="@firebase/storage",dg="0.13.5";/**
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
 */const i1="storage";function o1(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new r1(n,s,r,e,ti)}function a1(){On(new En(i1,o1,"PUBLIC").setMultipleInstances(!0)),Gt(fg,dg,""),Gt(fg,dg,"esm2017")}a1();const zc=new WeakMap;function uT(t,e){return zc.has(e)||zc.set(e,{f:{},r:{},s:{},u:{}}),zc.get(e)}function l1(t,e,n,s){if(!t)return n;const[r,i]=hT(t);if(!r)return n;const o=uT(void 0,s)[r]||{},l=e||i;return l&&l in o?o[l]:n}function c1(t,e,n,s){if(!t)return;const[r,i]=hT(t);if(!r)return;const o=uT(void 0,s)[r],l=e||i;if(l)return n.then(c=>{o[l]=c}).catch(Rn),l}function hT(t){return qk(t)||Hk(t)?["f",t.path]:Wk(t)?["r",t.toString()]:zk(t)?["s",t.toString()]:[]}const Kc=new WeakMap;function u1(t,e,n){const s=Yv();Kc.has(s)||Kc.set(s,new Map);const r=Kc.get(s),i=c1(e,n,t,s);return i&&r.set(i,t),i?()=>r.delete(i):Rn}const h1={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function Qu(t,e,n,s){if(!$k(t))return[t,{}];const r=[{},{}],i=Object.keys(n).reduce((l,c)=>{const u=n[c];return l[u.path]=u.data(),l},{});function o(l,c,u,h){c=c||{};const[d,m]=h;Object.getOwnPropertyNames(l).forEach(g=>{const A=Object.getOwnPropertyDescriptor(l,g);A&&!A.enumerable&&Object.defineProperty(d,g,A)});for(const g in l){const A=l[g];if(A==null||A instanceof Date||A instanceof st||A instanceof ql)d[g]=A;else if(tf(A)){const S=u+g;d[g]=S in n?c[g]:A.path,m[S]=A.converter?A:A.withConverter(s.converter)}else if(Array.isArray(A)){d[g]=Array(A.length);for(let S=0;S<A.length;S++){const N=A[S];N&&N.path in i&&(d[g][S]=i[N.path])}o(A,c[g]||d[g],u+g+".",[d[g],m])}else hr(A)?(d[g]={},o(A,c[g],u+g+".",[d[g],m])):d[g]=A}}return o(t,e,"",r),r}const bf={reset:!1,wait:!0,maxRefDepth:2,converter:h1,snapshotOptions:{serverTimestamps:"estimate"}};function ul(t){for(const e in t)t[e].unsub()}function Yu(t,e,n,s,r,i,o,l,c){const[u,h]=Qu(s.data(t.snapshotOptions),ef(e,n),r,t);i.set(e,n,u),Xu(t,e,n,r,h,i,o,l,c)}function f1({ref:t,target:e,path:n,depth:s,resolve:r,reject:i,ops:o},l){const c=Object.create(null);let u=Rn;return l.once?Nv(t).then(h=>{h.exists()?Yu(l,e,n,h,c,o,s,r,i):(o.set(e,n,null),r())}).catch(i):u=Jh(t,h=>{h.exists()?Yu(l,e,n,h,c,o,s,r,i):(o.set(e,n,null),r())},i),()=>{u(),ul(c)}}function Xu(t,e,n,s,r,i,o,l,c){const u=Object.keys(r);if(Object.keys(s).filter(S=>u.indexOf(S)<0).forEach(S=>{s[S].unsub(),delete s[S]}),!u.length||++o>t.maxRefDepth)return l(n);let d=0;const m=u.length,g=Object.create(null);function A(S){S in g&&++d>=m&&l(n)}u.forEach(S=>{const N=s[S],V=r[S],F=`${n}.${S}`;if(g[F]=!0,N)if(N.path!==V.path)N.unsub();else return;s[S]={data:()=>ef(e,F),unsub:f1({ref:V,target:e,path:F,depth:o,ops:i,resolve:A.bind(null,F),reject:c},t),path:V.path}})}function d1(t,e,n,s,r,i){const o=Object.assign({},bf,i),{snapshotListenOptions:l,snapshotOptions:c,wait:u,once:h}=o,d="value";let m=$t(u?[]:t.value);u||n.set(t,d,[]);const g=s;let A,S=Rn;const N=[],V={added:({newIndex:D,doc:O})=>{N.splice(D,0,Object.create(null));const ee=N[D],[te,C]=Qu(O.data(c),void 0,ee,o);n.add(Wn(m),D,te),Xu(o,m,`${d}.${D}`,ee,C,n,0,s.bind(null,O),r)},modified:({oldIndex:D,newIndex:O,doc:ee})=>{const te=Wn(m),C=N[D],y=te[D],[v,b]=Qu(ee.data(c),y,C,o);N.splice(O,0,C),n.remove(te,D),n.add(te,O,v),Xu(o,m,`${d}.${O}`,C,b,n,0,s,r)},removed:({oldIndex:D})=>{const O=Wn(m);n.remove(O,D),ul(N.splice(D,1)[0])}};function F(D){const O=D.docChanges(l);if(!A&&O.length){A=!0;let ee=0;const te=O.length,C=Object.create(null);for(let y=0;y<te;y++)C[O[y].doc.id]=!0;s=y=>{y&&y.id in C&&++ee>=te&&(u&&(n.set(t,d,Wn(m)),m=t),g(Wn(m)),s=Rn)}}O.forEach(ee=>{V[ee.type](ee)}),O.length||(u&&(n.set(t,d,Wn(m)),m=t),s(Wn(m)))}return h?PP(e).then(F).catch(r):S=Jh(e,F,r),D=>{if(S(),D){const O=typeof D=="function"?D():[];n.set(t,d,O)}N.forEach(ul)}}function p1(t,e,n,s,r,i){const o=Object.assign({},bf,i),l="value",c=Object.create(null);s=Kk(s,()=>ef(t,l));let u=Rn;function h(d){d.exists()?Yu(o,t,l,d,c,n,0,s,r):(n.set(t,l,null),s(null))}return o.once?Nv(e).then(h).catch(r):u=Jh(e,h,r),d=>{if(u(),d){const m=typeof d=="function"?d():null;n.set(t,l,m)}ul(c)}}const pg=Symbol();function m1(t,e){let n=Rn;const s=Object.assign({},bf,e),r=Wn(t),i=s.target||$t();Qk()&&(s.once=!0);const o=l1(r,s.ssrKey,pg,Yv()),l=o!==pg;l&&(i.value=o);let c=!l;const u=$t(!1),h=$t(),d=Bg(),m=Ig();let g=Rn;function A(){let V=Wn(t);const F=new Promise((D,O)=>{if(n(s.reset),!V)return n=Rn,D(null);u.value=c,c=!0,V.converter||(V=V.withConverter(s.converter)),n=(tf(V)?p1:d1)(i,V,g1,D,O,s)}).catch(D=>(d.value===F&&(h.value=D),Promise.reject(D))).finally(()=>{d.value===F&&(u.value=!1)});d.value=F}let S=Rn;(Et(t)||typeof t=="function")&&(S=Dr(t,A)),A(),r&&(g=u1(d.value,r,s.ssrKey)),gh()&&o_(()=>d.value),m&&JT(N);function N(V=s.reset){S(),g(),n(V)}return Object.defineProperties(i,{error:{get:()=>h},data:{get:()=>i},pending:{get:()=>u},promise:{get:()=>d},stop:{get:()=>N}})}const g1={set:(t,e,n)=>Uk(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function fT(t,e){return m1(t,{target:$t([]),...e})}function _1(t,{firebaseApp:e,modules:n=[]}){t.provide(Qv,e);for(const s of n)s(e,t)}const y1={apiKey:"AIzaSyAfF4tiebJT5Ce9-8rTuB2n8Z9oYiA1YFA",authDomain:"docutrack-waitlist.firebaseapp.com",projectId:"docutrack-waitlist",storageBucket:"docutrack-waitlist.firebasestorage.app",messagingSenderId:"502896437609",appId:"1:502896437609:web:d9a389e6ae8df8a266b5f8",measurementId:"G-WJMZ3W6SXQ"},dT=oy(y1),v1=mP(dT),E1={class:"flex justify-center w-full"},T1={class:"flex-auto max-w-md"},w1={class:"relative"},I1=["disabled"],b1={class:"h-8 relative"},pT={__name:"WaitingList",props:["isDarkMode"],setup(t){const e=$t(""),n=$t(!1),s=$t(""),r=$t("");Dr(s,()=>{setTimeout(()=>{s.value="",r.value=""},5e3)});const i=l=>/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(l),o=async()=>{if(!e.value){s.value="Please enter your email address.",r.value="error",n.value=!1;return}if(!i(e.value)){s.value="Invalid email address",r.value="error",n.value=!1;return}const l=yv(v1,"waitlist");fT(l),n.value=!0,s.value="",r.value="";const c={email:e.value,created_at:new Date().toISOString()};try{if(!await kP(l,c))throw new Error("An error occurred");s.value="You have been added to the waiting list!",r.value="success",e.value=""}catch{s.value="An error occurred. Please try again.",r.value="error"}finally{n.value=!1}};return(l,c)=>(_e(),xe("div",E1,[j("div",T1,[j("h2",{class:Pe(["text-md font-semibold mb-4 text-center",t.isDarkMode?"text-base-100":"text-base-400"])}," Join Our Waitlist ",2),j("div",w1,[Qg(j("input",{type:"email","onUpdate:modelValue":c[0]||(c[0]=u=>e.value=u),placeholder:"Enter your email",class:Pe(["w-full px-4 py-4 rounded-full","outline-none ring-2 ring-base-100","focus:ring-primary-200",t.isDarkMode?"bg-base-300 text-base-100 ring-base-200":"bg-base-100 text-base-400","pr-32"]),required:""},null,2),[[tb,e.value]]),j("button",{type:"submit",onClick:o,disabled:n.value,class:Pe(["absolute right-1 top-1 bottom-1","bg-primary-200 text-base-400 px-6 md:px-12 rounded-full font-semibold","hover:bg-primary-300 transition-colors","disabled:opacity-50 disabled:cursor-not-allowed"])},nt(n.value?"Joining...":"Join"),9,I1)]),j("div",b1,[s.value?(_e(),xe("p",{key:0,class:Pe(["absolute w-full mt-2 text-sm text-center",r.value==="success"?"text-primary-400":"text-red"])},nt(s.value),3)):iu("",!0)])])]))}},A1={id:"hero",class:"relative py-60 px-4 overflow-hidden"},C1={class:"absolute inset-0 z-0"},R1={class:"container mx-auto text-center relative z-10"},S1={__name:"HeroSection",props:["isDarkMode"],setup(t){return(e,n)=>(_e(),xe("section",A1,[j("div",C1,[n[0]||(n[0]=j("img",{src:UA,alt:"Background",class:"w-full h-full object-cover"},null,-1)),j("div",{class:Pe(["absolute inset-0",t.isDarkMode?"bg-base-400 opacity-70":"bg-base-100 opacity-50"])},null,2)]),j("div",R1,[j("h1",{class:Pe(["text-4xl md:text-6xl font-bold mb-6",t.isDarkMode?"text-base-100":"text-base-400"])}," Streamline Your Document Management ",2),j("p",{class:Pe(["text-xl mb-8",t.isDarkMode?"text-base-200":"text-base-300"])}," Docutrack helps you organize, track, and collaborate on your documents effortlessly. ",2),ye(pT,{isDarkMode:t.isDarkMode},null,8,["isDarkMode"])])]))}},P1={class:"container mx-auto"},k1={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"},N1={class:"text-xl font-semibold mb-2"},x1={__name:"FeaturesSection",props:["isDarkMode"],setup(t){const e=[{title:"Centralized Storage",description:"Keep all your documents in one secure place",icon:"FolderIcon"},{title:"Easy Collaboration",description:"Work together seamlessly with your team",icon:"UsersIcon"},{title:"Version Control",description:"Track changes and revert to previous versions",icon:"HistoryIcon"},{title:"Advanced Search",description:"Find any document in seconds",icon:"SearchIcon"}];return(n,s)=>(_e(),xe("section",{id:"features",class:Pe(["py-20 px-4 transition-colors duration-300",t.isDarkMode?"bg-base-300":"bg-base-200"])},[j("div",P1,[s[0]||(s[0]=j("h2",{class:"text-3xl md:text-4xl font-bold text-center mb-12"},"Key Features",-1)),j("div",k1,[(_e(),xe(tt,null,Dn(e,r=>j("div",{key:r.title,class:Pe(["p-6 rounded-lg transition-colors duration-300",t.isDarkMode?"bg-base-400":"bg-base-100"])},[(_e(),lo($w(r.icon),{class:"w-12 h-12 text-base-200 mb-4"})),j("h3",N1,nt(r.title),1),j("p",{class:Pe(t.isDarkMode?"text-primary-100":"text-base-300")},nt(r.description),3)],2)),64))])])],2))}},D1={id:"solution",class:"py-40 px-4"},O1={class:"container mx-auto"},M1={class:"mx-10 grid grid-cols-1 md:grid-cols-2 gap-14"},L1={class:"space-y-2"},V1={class:"space-y-2"},F1={__name:"ProblemsSection",props:["isDarkMode"],setup(t){const e=["Lost documents and wasted time searching","Inconsistent version control","Security risks from scattered files","Inefficient collaboration processes"],n=["Centralized, easily searchable document repository","Automated version control and change tracking","Enhanced security with role-based access control","Streamlined collaboration with real-time editing"];return(s,r)=>(_e(),xe("section",D1,[j("div",O1,[r[2]||(r[2]=j("h2",{class:"text-3xl md:text-4xl font-bold text-center mb-20"},"The Problem We Solve",-1)),j("div",M1,[j("div",{class:Pe(["p-6 rounded-lg transition-colors duration-300",t.isDarkMode?"bg-base-300":"bg-base-100 border-2 border-base-200 shadow-2xl"])},[r[0]||(r[0]=j("h3",{class:"text-2xl font-semibold mb-4"},"Without Docutrack",-1)),j("ul",L1,[(_e(),xe(tt,null,Dn(e,i=>j("li",{key:i,class:"flex items-start"},[ye(ft(wA),{class:"w-6 h-6 text-red mr-2 flex-shrink-0"}),j("span",null,nt(i),1)])),64))])],2),j("div",{class:Pe(["p-6 rounded-lg transition-colors duration-300",t.isDarkMode?"bg-base-300":"bg-base-100 border-2 border-base-200 shadow-2xl"])},[r[1]||(r[1]=j("h3",{class:"text-2xl font-semibold mb-4"},"With Docutrack",-1)),j("ul",V1,[(_e(),xe(tt,null,Dn(n,i=>j("li",{key:i,class:"flex items-start"},[ye(ft(TA),{class:"w-6 h-6 text-primary-200 mr-2 flex-shrink-0"}),j("span",null,nt(i),1)])),64))])],2)])])]))}},U1={class:"container mx-auto"},B1={class:"space-y-6"},$1=["onClick"],j1={class:"text-xl font-semibold"},q1={__name:"FaqSection",props:["isDarkMode"],setup(t){const e=$t([{question:"What is Docutrack?",answer:"Docutrack is a comprehensive document management system that helps businesses organize, track, and collaborate on documents efficiently and securely.",isOpen:!1},{question:"How secure is Docutrack?",answer:"Docutrack uses enterprise-grade security measures, including encryption at rest and in transit, role-based access control, and regular security audits to keep your documents safe.",isOpen:!1},{question:"Can I integrate Docutrack with other tools?",answer:"Yes, Docutrack offers integrations with popular productivity tools and can be connected to your existing systems through our API.",isOpen:!1},{question:"Is there a free trial available?",answer:"Yes, we offer a 14-day free trial on all our plans so you can experience the full power of Docutrack before committing.",isOpen:!1}]);return(n,s)=>(_e(),xe("section",{id:"faq",class:Pe(["py-20 px-4 transition-colors duration-300",t.isDarkMode?"bg-base-300":"bg-base-200"])},[j("div",U1,[s[0]||(s[0]=j("h2",{class:"text-3xl md:text-4xl font-bold text-center mb-12"},"Frequently Asked Questions",-1)),j("div",B1,[(_e(!0),xe(tt,null,Dn(e.value,r=>(_e(),xe("div",{key:r.question,class:Pe(["p-6 rounded-lg transition-colors duration-300",t.isDarkMode?"bg-base-400":"bg-base-100"])},[j("button",{onClick:i=>r.isOpen=!r.isOpen,class:"flex justify-between items-center w-full text-left"},[j("span",j1,nt(r.question),1),ye(ft(EA),{class:Pe(["w-6 h-6 transition-transform",{"transform rotate-180":r.isOpen}])},null,8,["class"])],8,$1),Qg(j("p",{class:Pe(["mt-4",t.isDarkMode?"text-primary-100":"text-base-300"])},nt(r.answer),3),[[BI,r.isOpen]])],2))),128))])])],2))}},H1={id:"pricing",class:"py-24 px-4"},W1={class:"container mx-auto"},z1={class:"grid grid-cols-1 md:grid-cols-3 gap-8"},K1={class:"text-2xl font-semibold mb-2"},G1={class:"text-4xl font-bold mb-6"},Q1={class:"mb-8 flex-grow"},Y1={__name:"PricingSection",props:["isDarkMode"],setup(t){const e=[{name:"Basic",description:"For small teams",price:"$9/month",features:["Unlimited Clients","Up to 5 users","10GB storage","Basic document tracking","Email support"]},{name:"Pro",description:"For growing businesses",price:"$29/month",features:["Unlimited Clients","Up to 20 users","100GB storage","Advanced document tracking","Priority support","Custom branding"]},{name:"Enterprise",description:"For large organizations",price:"Custom",features:["Unlimited Clients","Unlimited users","Unlimited storage","Advanced security features","24/7 phone support","Dedicated account manager"]}];return(n,s)=>(_e(),xe("section",H1,[j("div",W1,[s[1]||(s[1]=j("h2",{class:"text-3xl md:text-4xl font-bold text-center mb-20"},"Simple, Transparent Pricing",-1)),j("div",z1,[(_e(),xe(tt,null,Dn(e,r=>j("div",{key:r.name,class:Pe(["p-6 rounded-lg flex flex-col transition-colors duration-300",t.isDarkMode?"bg-base-300":"bg-base-100 border-2 border-base-200 shadow-2xl"])},[j("h3",K1,nt(r.name),1),j("p",{class:Pe([t.isDarkMode?"text-primary-100":"text-base-300","mb-4"])},nt(r.description),3),j("p",G1,nt(r.price),1),j("ul",Q1,[(_e(!0),xe(tt,null,Dn(r.features,i=>(_e(),xe("li",{key:i,class:"flex items-center mb-2"},[ye(ft(vA),{class:"w-5 h-5 text-primary-200 mr-2"}),j("span",null,nt(i),1)]))),128))]),s[0]||(s[0]=j("button",{class:"bg-primary-200 text-base-400 px-6 py-3 rounded-full font-semibold hover:bg-primary-300 transition-colors"}," Choose Plan ",-1))],2)),64))])])]))}},X1={class:"container mx-auto w-3/4 border-b-2 border-base-100 pb-8 flex flex-col"},J1={__name:"WaitingListSection",props:["isDarkMode","navItems"],setup(t){return(e,n)=>(_e(),xe("div",{class:Pe(["py-12 px-4 transition-colors duration-300",t.isDarkMode?"bg-base-300":"bg-base-200"])},[j("div",X1,[n[0]||(n[0]=j("h2",{class:"text-2xl font-semibold text-center"},"Ready to see through the legal fog?",-1)),n[1]||(n[1]=j("p",{class:"text-center my-6"},"Sign up now to join our waiting list and be the first to experience legal clarity like never before!",-1)),ye(pT,{isDarkMode:t.isDarkMode},null,8,["isDarkMode"])])],2))}},Z1={class:"container mx-auto flex flex-col justify-center items-center md:flex-row flex-wrap"},eO={class:"flex flex-col gap-8 md:container md:flex-row md:items-center md:justify-between my-4 p-2"},tO={class:"flex flex-row justify-center gap-8"},nO={href:"https://instagram.com/docutrack",target:"_blank",rel:"noopener noreferrer",class:"text-xl"},sO={href:"https://linkedin.com/company/docutrack",target:"_blank",rel:"noopener noreferrer",class:"text-xl"},rO={class:"py-6 px-2 flex flex-col md:flex-row md:container md:items-center md:justify-between"},iO={class:"py-4"},oO={class:"flex flex-col items-center gap-6 text-md font-semibold md:flex-row"},aO=["href"],lO={class:"my-4 py-4 text-center text-sm flex flex-row justify-start gap-2"},mT={__name:"FooterComponent",props:["isDarkMode","navItems"],setup(t){return(e,n)=>(_e(),xe("footer",{class:Pe(["py-8 px-4 transition-colors duration-300",t.isDarkMode?"bg-base-300":"bg-base-200"])},[j("div",Z1,[j("div",eO,[n[0]||(n[0]=j("a",{class:"text-2xl underline-offset-1",mailto:"hello@docutrack.cloud"},"hello@docutrack.cloud",-1)),j("div",tO,[j("a",nO,[ye(ft(bA),{class:"h-6 w-auto"})]),j("a",sO,[ye(ft(AA),{class:"h-6 w-auto"})])])]),j("div",rO,[j("div",iO,[j("nav",oO,[(_e(!0),xe(tt,null,Dn(t.navItems,s=>(_e(),xe("a",{key:s,href:`#${s.toLowerCase()}`},nt(s),9,aO))),128))])]),j("div",lO,[j("span",null,"© "+nt(new Date().getFullYear())+" Docutrack - designed with",1),ye(ft(IA),{class:"h-4 w-auto my-auto text-red"}),n[1]||(n[1]=j("span",null,"Worldwide",-1))])])])],2))}},cO={__name:"HomeView",setup(t){const e=$t(!1),n=["Features","Solution","FAQ","Pricing"],s=()=>{e.value=!e.value};return(r,i)=>(_e(),xe("div",{class:Pe(["min-h-screen transition-colors duration-300",e.value?"bg-base-400 text-base-100":"bg-base-100 text-base-400"])},[ye(Q_,{isDarkMode:e.value,navItems:n,onSwitchTheme:s},null,8,["isDarkMode"]),ye(S1,{isDarkMode:e.value},null,8,["isDarkMode"]),ye(x1,{isDarkMode:e.value},null,8,["isDarkMode"]),ye(F1,{isDarkMode:e.value},null,8,["isDarkMode"]),ye(q1,{isDarkMode:e.value},null,8,["isDarkMode"]),ye(Y1,{isDarkMode:e.value},null,8,["isDarkMode"]),ye(J1,{isDarkMode:e.value},null,8,["isDarkMode"]),ye(mT,{isDarkMode:e.value,navItems:n},null,8,["isDarkMode"])],2))}},uO={class:"px-4 sm:px-6 lg:px-8"},hO={class:"mt-8 flow-root"},fO={class:"-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},dO={class:"inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"},pO={class:"min-w-full divide-y divide-gray-300"},mO={class:"divide-y divide-gray-200"},gO={class:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},_O={class:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},yO={class:"relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"},vO={href:"#",class:"text-indigo-600 hover:text-indigo-900"},EO={class:"sr-only"},TO={__name:"WaitlistView",setup(t){fT(yv(db,"waitlistCollection"));const e=$t(!1),n=["Features","Solution","FAQ","Pricing"],s=()=>{e.value=!e.value};return(r,i)=>(_e(),xe("div",{class:Pe(["min-h-screen transition-colors duration-300",e.value?"bg-base-400 text-base-100":"bg-base-100 text-base-400"])},[ye(Q_,{isDarkMode:e.value,navItems:n,onSwitchTheme:s},null,8,["isDarkMode"]),j("div",null,[j("div",uO,[j("div",hO,[j("div",fO,[j("div",dO,[j("table",pO,[i[1]||(i[1]=j("thead",null,[j("tr",null,[j("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},"Email"),j("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},"Date"),j("th",{scope:"col",class:"relative py-3.5 pl-3 pr-4 sm:pr-0"},[j("span",{class:"sr-only"},"Edit")])])],-1)),j("tbody",mO,[(_e(!0),xe(tt,null,Dn(r.people,o=>(_e(),xe("tr",{key:o.email},[j("td",gO,nt(o.email),1),j("td",_O,nt(o.date),1),j("td",yO,[j("a",vO,[i[0]||(i[0]=ph("Edit")),j("span",EO,", "+nt(o.name),1)])])]))),128))])])])])])])]),ye(mT,{isDarkMode:e.value,navItems:n},null,8,["isDarkMode"])],2))}},wO={class:"grid min-h-full place-items-center bg-white px-6 py-32"},IO={class:"text-center"},bO={class:"mt-10"},AO={__name:"NotFoundView",setup(t){return(e,n)=>(_e(),xe("main",wO,[j("div",IO,[n[1]||(n[1]=j("h2",{class:"text-5xl font-semibold text-green-600"},"404",-1)),n[2]||(n[2]=j("h1",{class:"mt-4 text-7xl font-semibold text-gray-900"},"Page not found",-1)),n[3]||(n[3]=j("p",{class:"mt-6 text-lg font-medium text-gray-500"},"Sorry, we couldn’t find the page you’re looking for.",-1)),j("div",bO,[ye(ft(vh),{to:"/",class:"rounded-md bg-green-600 px-3 py-3 font-semibold text-white hover:bg-green-500"},{default:$i(()=>n[0]||(n[0]=[ph("Go back home")])),_:1})])])]))}},CO=pA({history:Hb("/"),routes:[{path:"/",name:"home",component:cO},{path:"/waitlist",name:"waitlist",component:TO},{path:"/:catchall(.*)*",name:"not-found",component:AO}]}),Af=ab(fb);Af.use(_1,{firebaseApp:dT});Af.use(CO);Af.mount("#app");
