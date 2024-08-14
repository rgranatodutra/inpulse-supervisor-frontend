var X2=Object.defineProperty;var Y2=(e,t,r)=>t in e?X2(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Mi=(e,t,r)=>Y2(e,typeof t!="symbol"?t+"":t,r);function Z2(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const o in n)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(n,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>n[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();var Ir=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function t1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var r1={exports:{}},cc={},n1={exports:{}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kl=Symbol.for("react.element"),ex=Symbol.for("react.portal"),tx=Symbol.for("react.fragment"),rx=Symbol.for("react.strict_mode"),nx=Symbol.for("react.profiler"),ox=Symbol.for("react.provider"),ix=Symbol.for("react.context"),lx=Symbol.for("react.forward_ref"),ax=Symbol.for("react.suspense"),sx=Symbol.for("react.memo"),cx=Symbol.for("react.lazy"),cp=Symbol.iterator;function ux(e){return e===null||typeof e!="object"?null:(e=cp&&e[cp]||e["@@iterator"],typeof e=="function"?e:null)}var o1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},i1=Object.assign,l1={};function bi(e,t,r){this.props=e,this.context=t,this.refs=l1,this.updater=r||o1}bi.prototype.isReactComponent={};bi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};bi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function a1(){}a1.prototype=bi.prototype;function wf(e,t,r){this.props=e,this.context=t,this.refs=l1,this.updater=r||o1}var Cf=wf.prototype=new a1;Cf.constructor=wf;i1(Cf,bi.prototype);Cf.isPureReactComponent=!0;var up=Array.isArray,s1=Object.prototype.hasOwnProperty,Sf={current:null},c1={key:!0,ref:!0,__self:!0,__source:!0};function u1(e,t,r){var n,o={},i=null,l=null;if(t!=null)for(n in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)s1.call(t,n)&&!c1.hasOwnProperty(n)&&(o[n]=t[n]);var s=arguments.length-2;if(s===1)o.children=r;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(n in s=e.defaultProps,s)o[n]===void 0&&(o[n]=s[n]);return{$$typeof:Kl,type:e,key:i,ref:l,props:o,_owner:Sf.current}}function dx(e,t){return{$$typeof:Kl,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function $f(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kl}function fx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var dp=/\/+/g;function Zc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?fx(""+e.key):t.toString(36)}function Ua(e,t,r,n,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Kl:case ex:l=!0}}if(l)return l=e,o=o(l),e=n===""?"."+Zc(l,0):n,up(o)?(r="",e!=null&&(r=e.replace(dp,"$&/")+"/"),Ua(o,t,r,"",function(u){return u})):o!=null&&($f(o)&&(o=dx(o,r+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(dp,"$&/")+"/")+e)),t.push(o)),1;if(l=0,n=n===""?".":n+":",up(e))for(var s=0;s<e.length;s++){i=e[s];var c=n+Zc(i,s);l+=Ua(i,t,r,c,o)}else if(c=ux(e),typeof c=="function")for(e=c.call(e),s=0;!(i=e.next()).done;)i=i.value,c=n+Zc(i,s++),l+=Ua(i,t,r,c,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function xa(e,t,r){if(e==null)return e;var n=[],o=0;return Ua(e,n,"","",function(i){return t.call(r,i,o++)}),n}function hx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var qt={current:null},Wa={transition:null},px={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:Wa,ReactCurrentOwner:Sf};Re.Children={map:xa,forEach:function(e,t,r){xa(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return xa(e,function(){t++}),t},toArray:function(e){return xa(e,function(t){return t})||[]},only:function(e){if(!$f(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Re.Component=bi;Re.Fragment=tx;Re.Profiler=nx;Re.PureComponent=wf;Re.StrictMode=rx;Re.Suspense=ax;Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=px;Re.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=i1({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Sf.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)s1.call(t,c)&&!c1.hasOwnProperty(c)&&(n[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];n.children=s}return{$$typeof:Kl,type:e.type,key:o,ref:i,props:n,_owner:l}};Re.createContext=function(e){return e={$$typeof:ix,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ox,_context:e},e.Consumer=e};Re.createElement=u1;Re.createFactory=function(e){var t=u1.bind(null,e);return t.type=e,t};Re.createRef=function(){return{current:null}};Re.forwardRef=function(e){return{$$typeof:lx,render:e}};Re.isValidElement=$f;Re.lazy=function(e){return{$$typeof:cx,_payload:{_status:-1,_result:e},_init:hx}};Re.memo=function(e,t){return{$$typeof:sx,type:e,compare:t===void 0?null:t}};Re.startTransition=function(e){var t=Wa.transition;Wa.transition={};try{e()}finally{Wa.transition=t}};Re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Re.useCallback=function(e,t){return qt.current.useCallback(e,t)};Re.useContext=function(e){return qt.current.useContext(e)};Re.useDebugValue=function(){};Re.useDeferredValue=function(e){return qt.current.useDeferredValue(e)};Re.useEffect=function(e,t){return qt.current.useEffect(e,t)};Re.useId=function(){return qt.current.useId()};Re.useImperativeHandle=function(e,t,r){return qt.current.useImperativeHandle(e,t,r)};Re.useInsertionEffect=function(e,t){return qt.current.useInsertionEffect(e,t)};Re.useLayoutEffect=function(e,t){return qt.current.useLayoutEffect(e,t)};Re.useMemo=function(e,t){return qt.current.useMemo(e,t)};Re.useReducer=function(e,t,r){return qt.current.useReducer(e,t,r)};Re.useRef=function(e){return qt.current.useRef(e)};Re.useState=function(e){return qt.current.useState(e)};Re.useSyncExternalStore=function(e,t,r){return qt.current.useSyncExternalStore(e,t,r)};Re.useTransition=function(){return qt.current.useTransition()};Re.version="18.2.0";n1.exports=Re;var j=n1.exports;const Se=t1(j),mx=Z2({__proto__:null,default:Se},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gx=j,yx=Symbol.for("react.element"),vx=Symbol.for("react.fragment"),xx=Object.prototype.hasOwnProperty,wx=gx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Cx={key:!0,ref:!0,__self:!0,__source:!0};function d1(e,t,r){var n,o={},i=null,l=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(n in t)xx.call(t,n)&&!Cx.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:yx,type:e,key:i,ref:l,props:o,_owner:wx.current}}cc.Fragment=vx;cc.jsx=d1;cc.jsxs=d1;r1.exports=cc;var a=r1.exports,Qu={},f1={exports:{}},Cr={},h1={exports:{}},p1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,Z){var z=M.length;M.push(Z);e:for(;0<z;){var D=z-1>>>1,K=M[D];if(0<o(K,Z))M[D]=Z,M[z]=K,z=D;else break e}}function r(M){return M.length===0?null:M[0]}function n(M){if(M.length===0)return null;var Z=M[0],z=M.pop();if(z!==Z){M[0]=z;e:for(var D=0,K=M.length,fe=K>>>1;D<fe;){var W=2*(D+1)-1,b=M[W],me=W+1,he=M[me];if(0>o(b,z))me<K&&0>o(he,b)?(M[D]=he,M[me]=z,D=me):(M[D]=b,M[W]=z,D=W);else if(me<K&&0>o(he,z))M[D]=he,M[me]=z,D=me;else break e}}return Z}function o(M,Z){var z=M.sortIndex-Z.sortIndex;return z!==0?z:M.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var c=[],u=[],d=1,f=null,g=3,C=!1,x=!1,w=!1,v=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(M){for(var Z=r(u);Z!==null;){if(Z.callback===null)n(u);else if(Z.startTime<=M)n(u),Z.sortIndex=Z.expirationTime,t(c,Z);else break;Z=r(u)}}function $(M){if(w=!1,p(M),!x)if(r(c)!==null)x=!0,U(E);else{var Z=r(u);Z!==null&&ne($,Z.startTime-M)}}function E(M,Z){x=!1,w&&(w=!1,y(T),T=-1),C=!0;var z=g;try{for(p(Z),f=r(c);f!==null&&(!(f.expirationTime>Z)||M&&!ge());){var D=f.callback;if(typeof D=="function"){f.callback=null,g=f.priorityLevel;var K=D(f.expirationTime<=Z);Z=e.unstable_now(),typeof K=="function"?f.callback=K:f===r(c)&&n(c),p(Z)}else n(c);f=r(c)}if(f!==null)var fe=!0;else{var W=r(u);W!==null&&ne($,W.startTime-Z),fe=!1}return fe}finally{f=null,g=z,C=!1}}var k=!1,O=null,T=-1,J=5,H=-1;function ge(){return!(e.unstable_now()-H<J)}function Y(){if(O!==null){var M=e.unstable_now();H=M;var Z=!0;try{Z=O(!0,M)}finally{Z?ye():(k=!1,O=null)}}else k=!1}var ye;if(typeof h=="function")ye=function(){h(Y)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,A=N.port2;N.port1.onmessage=Y,ye=function(){A.postMessage(null)}}else ye=function(){v(Y,0)};function U(M){O=M,k||(k=!0,ye())}function ne(M,Z){T=v(function(){M(e.unstable_now())},Z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){x||C||(x=!0,U(E))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(M){switch(g){case 1:case 2:case 3:var Z=3;break;default:Z=g}var z=g;g=Z;try{return M()}finally{g=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,Z){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var z=g;g=M;try{return Z()}finally{g=z}},e.unstable_scheduleCallback=function(M,Z,z){var D=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?D+z:D):z=D,M){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=z+K,M={id:d++,callback:Z,priorityLevel:M,startTime:z,expirationTime:K,sortIndex:-1},z>D?(M.sortIndex=z,t(u,M),r(c)===null&&M===r(u)&&(w?(y(T),T=-1):w=!0,ne($,z-D))):(M.sortIndex=K,t(c,M),x||C||(x=!0,U(E))),M},e.unstable_shouldYield=ge,e.unstable_wrapCallback=function(M){var Z=g;return function(){var z=g;g=Z;try{return M.apply(this,arguments)}finally{g=z}}}})(p1);h1.exports=p1;var Sx=h1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m1=j,wr=Sx;function G(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g1=new Set,wl={};function Ao(e,t){di(e,t),di(e+"Capture",t)}function di(e,t){for(wl[e]=t,e=0;e<t.length;e++)g1.add(t[e])}var hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ju=Object.prototype.hasOwnProperty,$x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fp={},hp={};function bx(e){return Ju.call(hp,e)?!0:Ju.call(fp,e)?!1:$x.test(e)?hp[e]=!0:(fp[e]=!0,!1)}function Ex(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function jx(e,t,r,n){if(t===null||typeof t>"u"||Ex(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Kt(e,t,r,n,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){zt[e]=new Kt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];zt[t]=new Kt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){zt[e]=new Kt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){zt[e]=new Kt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){zt[e]=new Kt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){zt[e]=new Kt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){zt[e]=new Kt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){zt[e]=new Kt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){zt[e]=new Kt(e,5,!1,e.toLowerCase(),null,!1,!1)});var bf=/[\-:]([a-z])/g;function Ef(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(bf,Ef);zt[t]=new Kt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(bf,Ef);zt[t]=new Kt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(bf,Ef);zt[t]=new Kt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){zt[e]=new Kt(e,1,!1,e.toLowerCase(),null,!1,!1)});zt.xlinkHref=new Kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){zt[e]=new Kt(e,1,!1,e.toLowerCase(),null,!0,!0)});function jf(e,t,r,n){var o=zt.hasOwnProperty(t)?zt[t]:null;(o!==null?o.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(jx(t,r,o,n)&&(r=null),n||o===null?bx(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(t=o.attributeName,n=o.attributeNamespace,r===null?e.removeAttribute(t):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var xn=m1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wa=Symbol.for("react.element"),Wo=Symbol.for("react.portal"),qo=Symbol.for("react.fragment"),kf=Symbol.for("react.strict_mode"),Xu=Symbol.for("react.profiler"),y1=Symbol.for("react.provider"),v1=Symbol.for("react.context"),Of=Symbol.for("react.forward_ref"),Yu=Symbol.for("react.suspense"),Zu=Symbol.for("react.suspense_list"),_f=Symbol.for("react.memo"),Rn=Symbol.for("react.lazy"),x1=Symbol.for("react.offscreen"),pp=Symbol.iterator;function Li(e){return e===null||typeof e!="object"?null:(e=pp&&e[pp]||e["@@iterator"],typeof e=="function"?e:null)}var ut=Object.assign,eu;function Ki(e){if(eu===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);eu=t&&t[1]||""}return`
`+eu+e}var tu=!1;function ru(e,t){if(!e||tu)return"";tu=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=n.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var c=`
`+o[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=s);break}}}finally{tu=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Ki(e):""}function kx(e){switch(e.tag){case 5:return Ki(e.type);case 16:return Ki("Lazy");case 13:return Ki("Suspense");case 19:return Ki("SuspenseList");case 0:case 2:case 15:return e=ru(e.type,!1),e;case 11:return e=ru(e.type.render,!1),e;case 1:return e=ru(e.type,!0),e;default:return""}}function ed(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qo:return"Fragment";case Wo:return"Portal";case Xu:return"Profiler";case kf:return"StrictMode";case Yu:return"Suspense";case Zu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case v1:return(e.displayName||"Context")+".Consumer";case y1:return(e._context.displayName||"Context")+".Provider";case Of:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _f:return t=e.displayName||null,t!==null?t:ed(e.type)||"Memo";case Rn:t=e._payload,e=e._init;try{return ed(e(t))}catch{}}return null}function Ox(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ed(t);case 8:return t===kf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Yn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function w1(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _x(e){var t=w1(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){n=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ca(e){e._valueTracker||(e._valueTracker=_x(e))}function C1(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=w1(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Cs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function td(e,t){var r=t.checked;return ut({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function mp(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Yn(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function S1(e,t){t=t.checked,t!=null&&jf(e,"checked",t,!1)}function rd(e,t){S1(e,t);var r=Yn(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?nd(e,t.type,r):t.hasOwnProperty("defaultValue")&&nd(e,t.type,Yn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function gp(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function nd(e,t,r){(t!=="number"||Cs(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Qi=Array.isArray;function ii(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Yn(r),t=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function od(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(G(91));return ut({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function yp(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(G(92));if(Qi(r)){if(1<r.length)throw Error(G(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Yn(r)}}function $1(e,t){var r=Yn(t.value),n=Yn(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function vp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function b1(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function id(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?b1(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Sa,E1=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,o){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Sa=Sa||document.createElement("div"),Sa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Sa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Cl(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var ll={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ix=["Webkit","ms","Moz","O"];Object.keys(ll).forEach(function(e){Ix.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ll[t]=ll[e]})});function j1(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||ll.hasOwnProperty(e)&&ll[e]?(""+t).trim():t+"px"}function k1(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,o=j1(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}var Rx=ut({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ld(e,t){if(t){if(Rx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(G(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(G(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(G(61))}if(t.style!=null&&typeof t.style!="object")throw Error(G(62))}}function ad(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sd=null;function If(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cd=null,li=null,ai=null;function xp(e){if(e=Xl(e)){if(typeof cd!="function")throw Error(G(280));var t=e.stateNode;t&&(t=pc(t),cd(e.stateNode,e.type,t))}}function O1(e){li?ai?ai.push(e):ai=[e]:li=e}function _1(){if(li){var e=li,t=ai;if(ai=li=null,xp(e),t)for(e=0;e<t.length;e++)xp(t[e])}}function I1(e,t){return e(t)}function R1(){}var nu=!1;function T1(e,t,r){if(nu)return e(t,r);nu=!0;try{return I1(e,t,r)}finally{nu=!1,(li!==null||ai!==null)&&(R1(),_1())}}function Sl(e,t){var r=e.stateNode;if(r===null)return null;var n=pc(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(G(231,t,typeof r));return r}var ud=!1;if(hn)try{var Fi={};Object.defineProperty(Fi,"passive",{get:function(){ud=!0}}),window.addEventListener("test",Fi,Fi),window.removeEventListener("test",Fi,Fi)}catch{ud=!1}function Tx(e,t,r,n,o,i,l,s,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(d){this.onError(d)}}var al=!1,Ss=null,$s=!1,dd=null,Ax={onError:function(e){al=!0,Ss=e}};function Dx(e,t,r,n,o,i,l,s,c){al=!1,Ss=null,Tx.apply(Ax,arguments)}function zx(e,t,r,n,o,i,l,s,c){if(Dx.apply(this,arguments),al){if(al){var u=Ss;al=!1,Ss=null}else throw Error(G(198));$s||($s=!0,dd=u)}}function Do(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function A1(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function wp(e){if(Do(e)!==e)throw Error(G(188))}function Nx(e){var t=e.alternate;if(!t){if(t=Do(e),t===null)throw Error(G(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(o===null)break;var i=o.alternate;if(i===null){if(n=o.return,n!==null){r=n;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===r)return wp(o),e;if(i===n)return wp(o),t;i=i.sibling}throw Error(G(188))}if(r.return!==n.return)r=o,n=i;else{for(var l=!1,s=o.child;s;){if(s===r){l=!0,r=o,n=i;break}if(s===n){l=!0,n=o,r=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===r){l=!0,r=i,n=o;break}if(s===n){l=!0,n=i,r=o;break}s=s.sibling}if(!l)throw Error(G(189))}}if(r.alternate!==n)throw Error(G(190))}if(r.tag!==3)throw Error(G(188));return r.stateNode.current===r?e:t}function D1(e){return e=Nx(e),e!==null?z1(e):null}function z1(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=z1(e);if(t!==null)return t;e=e.sibling}return null}var N1=wr.unstable_scheduleCallback,Cp=wr.unstable_cancelCallback,Px=wr.unstable_shouldYield,Mx=wr.unstable_requestPaint,ht=wr.unstable_now,Lx=wr.unstable_getCurrentPriorityLevel,Rf=wr.unstable_ImmediatePriority,P1=wr.unstable_UserBlockingPriority,bs=wr.unstable_NormalPriority,Fx=wr.unstable_LowPriority,M1=wr.unstable_IdlePriority,uc=null,rn=null;function Gx(e){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(uc,e,void 0,(e.current.flags&128)===128)}catch{}}var Gr=Math.clz32?Math.clz32:Hx,Bx=Math.log,Vx=Math.LN2;function Hx(e){return e>>>=0,e===0?32:31-(Bx(e)/Vx|0)|0}var $a=64,ba=4194304;function Ji(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Es(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,o=e.suspendedLanes,i=e.pingedLanes,l=r&268435455;if(l!==0){var s=l&~o;s!==0?n=Ji(s):(i&=l,i!==0&&(n=Ji(i)))}else l=r&~o,l!==0?n=Ji(l):i!==0&&(n=Ji(i));if(n===0)return 0;if(t!==0&&t!==n&&!(t&o)&&(o=n&-n,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Gr(t),o=1<<r,n|=e[r],t&=~o;return n}function Ux(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wx(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Gr(i),s=1<<l,c=o[l];c===-1?(!(s&r)||s&n)&&(o[l]=Ux(s,t)):c<=t&&(e.expiredLanes|=s),i&=~s}}function fd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function L1(){var e=$a;return $a<<=1,!($a&4194240)&&($a=64),e}function ou(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Ql(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Gr(t),e[t]=r}function qx(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-Gr(r),i=1<<o;t[o]=0,n[o]=-1,e[o]=-1,r&=~i}}function Tf(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Gr(r),o=1<<n;o&t|e[n]&t&&(e[n]|=t),r&=~o}}var Be=0;function F1(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var G1,Af,B1,V1,H1,hd=!1,Ea=[],Gn=null,Bn=null,Vn=null,$l=new Map,bl=new Map,An=[],Kx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sp(e,t){switch(e){case"focusin":case"focusout":Gn=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":Vn=null;break;case"pointerover":case"pointerout":$l.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bl.delete(t.pointerId)}}function Gi(e,t,r,n,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Xl(t),t!==null&&Af(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Qx(e,t,r,n,o){switch(t){case"focusin":return Gn=Gi(Gn,e,t,r,n,o),!0;case"dragenter":return Bn=Gi(Bn,e,t,r,n,o),!0;case"mouseover":return Vn=Gi(Vn,e,t,r,n,o),!0;case"pointerover":var i=o.pointerId;return $l.set(i,Gi($l.get(i)||null,e,t,r,n,o)),!0;case"gotpointercapture":return i=o.pointerId,bl.set(i,Gi(bl.get(i)||null,e,t,r,n,o)),!0}return!1}function U1(e){var t=ho(e.target);if(t!==null){var r=Do(t);if(r!==null){if(t=r.tag,t===13){if(t=A1(r),t!==null){e.blockedOn=t,H1(e.priority,function(){B1(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=pd(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);sd=n,r.target.dispatchEvent(n),sd=null}else return t=Xl(r),t!==null&&Af(t),e.blockedOn=r,!1;t.shift()}return!0}function $p(e,t,r){qa(e)&&r.delete(t)}function Jx(){hd=!1,Gn!==null&&qa(Gn)&&(Gn=null),Bn!==null&&qa(Bn)&&(Bn=null),Vn!==null&&qa(Vn)&&(Vn=null),$l.forEach($p),bl.forEach($p)}function Bi(e,t){e.blockedOn===t&&(e.blockedOn=null,hd||(hd=!0,wr.unstable_scheduleCallback(wr.unstable_NormalPriority,Jx)))}function El(e){function t(o){return Bi(o,e)}if(0<Ea.length){Bi(Ea[0],e);for(var r=1;r<Ea.length;r++){var n=Ea[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Gn!==null&&Bi(Gn,e),Bn!==null&&Bi(Bn,e),Vn!==null&&Bi(Vn,e),$l.forEach(t),bl.forEach(t),r=0;r<An.length;r++)n=An[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<An.length&&(r=An[0],r.blockedOn===null);)U1(r),r.blockedOn===null&&An.shift()}var si=xn.ReactCurrentBatchConfig,js=!0;function Xx(e,t,r,n){var o=Be,i=si.transition;si.transition=null;try{Be=1,Df(e,t,r,n)}finally{Be=o,si.transition=i}}function Yx(e,t,r,n){var o=Be,i=si.transition;si.transition=null;try{Be=4,Df(e,t,r,n)}finally{Be=o,si.transition=i}}function Df(e,t,r,n){if(js){var o=pd(e,t,r,n);if(o===null)pu(e,t,n,ks,r),Sp(e,n);else if(Qx(o,e,t,r,n))n.stopPropagation();else if(Sp(e,n),t&4&&-1<Kx.indexOf(e)){for(;o!==null;){var i=Xl(o);if(i!==null&&G1(i),i=pd(e,t,r,n),i===null&&pu(e,t,n,ks,r),i===o)break;o=i}o!==null&&n.stopPropagation()}else pu(e,t,n,null,r)}}var ks=null;function pd(e,t,r,n){if(ks=null,e=If(n),e=ho(e),e!==null)if(t=Do(e),t===null)e=null;else if(r=t.tag,r===13){if(e=A1(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ks=e,null}function W1(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lx()){case Rf:return 1;case P1:return 4;case bs:case Fx:return 16;case M1:return 536870912;default:return 16}default:return 16}}var zn=null,zf=null,Ka=null;function q1(){if(Ka)return Ka;var e,t=zf,r=t.length,n,o="value"in zn?zn.value:zn.textContent,i=o.length;for(e=0;e<r&&t[e]===o[e];e++);var l=r-e;for(n=1;n<=l&&t[r-n]===o[i-n];n++);return Ka=o.slice(e,1<n?1-n:void 0)}function Qa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ja(){return!0}function bp(){return!1}function Sr(e){function t(r,n,o,i,l){this._reactName=r,this._targetInst=o,this.type=n,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(r=e[s],this[s]=r?r(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ja:bp,this.isPropagationStopped=bp,this}return ut(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ja)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ja)},persist:function(){},isPersistent:ja}),t}var Ei={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nf=Sr(Ei),Jl=ut({},Ei,{view:0,detail:0}),Zx=Sr(Jl),iu,lu,Vi,dc=ut({},Jl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vi&&(Vi&&e.type==="mousemove"?(iu=e.screenX-Vi.screenX,lu=e.screenY-Vi.screenY):lu=iu=0,Vi=e),iu)},movementY:function(e){return"movementY"in e?e.movementY:lu}}),Ep=Sr(dc),e3=ut({},dc,{dataTransfer:0}),t3=Sr(e3),r3=ut({},Jl,{relatedTarget:0}),au=Sr(r3),n3=ut({},Ei,{animationName:0,elapsedTime:0,pseudoElement:0}),o3=Sr(n3),i3=ut({},Ei,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),l3=Sr(i3),a3=ut({},Ei,{data:0}),jp=Sr(a3),s3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},u3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function d3(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=u3[e])?!!t[e]:!1}function Pf(){return d3}var f3=ut({},Jl,{key:function(e){if(e.key){var t=s3[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?c3[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pf,charCode:function(e){return e.type==="keypress"?Qa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),h3=Sr(f3),p3=ut({},dc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kp=Sr(p3),m3=ut({},Jl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pf}),g3=Sr(m3),y3=ut({},Ei,{propertyName:0,elapsedTime:0,pseudoElement:0}),v3=Sr(y3),x3=ut({},dc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),w3=Sr(x3),C3=[9,13,27,32],Mf=hn&&"CompositionEvent"in window,sl=null;hn&&"documentMode"in document&&(sl=document.documentMode);var S3=hn&&"TextEvent"in window&&!sl,K1=hn&&(!Mf||sl&&8<sl&&11>=sl),Op=" ",_p=!1;function Q1(e,t){switch(e){case"keyup":return C3.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function J1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ko=!1;function $3(e,t){switch(e){case"compositionend":return J1(t);case"keypress":return t.which!==32?null:(_p=!0,Op);case"textInput":return e=t.data,e===Op&&_p?null:e;default:return null}}function b3(e,t){if(Ko)return e==="compositionend"||!Mf&&Q1(e,t)?(e=q1(),Ka=zf=zn=null,Ko=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return K1&&t.locale!=="ko"?null:t.data;default:return null}}var E3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ip(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!E3[e.type]:t==="textarea"}function X1(e,t,r,n){O1(n),t=Os(t,"onChange"),0<t.length&&(r=new Nf("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var cl=null,jl=null;function j3(e){sg(e,0)}function fc(e){var t=Xo(e);if(C1(t))return e}function k3(e,t){if(e==="change")return t}var Y1=!1;if(hn){var su;if(hn){var cu="oninput"in document;if(!cu){var Rp=document.createElement("div");Rp.setAttribute("oninput","return;"),cu=typeof Rp.oninput=="function"}su=cu}else su=!1;Y1=su&&(!document.documentMode||9<document.documentMode)}function Tp(){cl&&(cl.detachEvent("onpropertychange",Z1),jl=cl=null)}function Z1(e){if(e.propertyName==="value"&&fc(jl)){var t=[];X1(t,jl,e,If(e)),T1(j3,t)}}function O3(e,t,r){e==="focusin"?(Tp(),cl=t,jl=r,cl.attachEvent("onpropertychange",Z1)):e==="focusout"&&Tp()}function _3(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fc(jl)}function I3(e,t){if(e==="click")return fc(t)}function R3(e,t){if(e==="input"||e==="change")return fc(t)}function T3(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ur=typeof Object.is=="function"?Object.is:T3;function kl(e,t){if(Ur(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var o=r[n];if(!Ju.call(t,o)||!Ur(e[o],t[o]))return!1}return!0}function Ap(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dp(e,t){var r=Ap(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Ap(r)}}function eg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?eg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function tg(){for(var e=window,t=Cs();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Cs(e.document)}return t}function Lf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function A3(e){var t=tg(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&eg(r.ownerDocument.documentElement,r)){if(n!==null&&Lf(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,i=Math.min(n.start,o);n=n.end===void 0?i:Math.min(n.end,o),!e.extend&&i>n&&(o=n,n=i,i=o),o=Dp(r,i);var l=Dp(r,n);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var D3=hn&&"documentMode"in document&&11>=document.documentMode,Qo=null,md=null,ul=null,gd=!1;function zp(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;gd||Qo==null||Qo!==Cs(n)||(n=Qo,"selectionStart"in n&&Lf(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),ul&&kl(ul,n)||(ul=n,n=Os(md,"onSelect"),0<n.length&&(t=new Nf("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Qo)))}function ka(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Jo={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionend:ka("Transition","TransitionEnd")},uu={},rg={};hn&&(rg=document.createElement("div").style,"AnimationEvent"in window||(delete Jo.animationend.animation,delete Jo.animationiteration.animation,delete Jo.animationstart.animation),"TransitionEvent"in window||delete Jo.transitionend.transition);function hc(e){if(uu[e])return uu[e];if(!Jo[e])return e;var t=Jo[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in rg)return uu[e]=t[r];return e}var ng=hc("animationend"),og=hc("animationiteration"),ig=hc("animationstart"),lg=hc("transitionend"),ag=new Map,Np="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function eo(e,t){ag.set(e,t),Ao(t,[e])}for(var du=0;du<Np.length;du++){var fu=Np[du],z3=fu.toLowerCase(),N3=fu[0].toUpperCase()+fu.slice(1);eo(z3,"on"+N3)}eo(ng,"onAnimationEnd");eo(og,"onAnimationIteration");eo(ig,"onAnimationStart");eo("dblclick","onDoubleClick");eo("focusin","onFocus");eo("focusout","onBlur");eo(lg,"onTransitionEnd");di("onMouseEnter",["mouseout","mouseover"]);di("onMouseLeave",["mouseout","mouseover"]);di("onPointerEnter",["pointerout","pointerover"]);di("onPointerLeave",["pointerout","pointerover"]);Ao("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ao("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ao("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ao("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ao("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ao("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),P3=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xi));function Pp(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,zx(n,t,void 0,e),e.currentTarget=null}function sg(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var l=n.length-1;0<=l;l--){var s=n[l],c=s.instance,u=s.currentTarget;if(s=s.listener,c!==i&&o.isPropagationStopped())break e;Pp(o,s,u),i=c}else for(l=0;l<n.length;l++){if(s=n[l],c=s.instance,u=s.currentTarget,s=s.listener,c!==i&&o.isPropagationStopped())break e;Pp(o,s,u),i=c}}}if($s)throw e=dd,$s=!1,dd=null,e}function Ze(e,t){var r=t[Cd];r===void 0&&(r=t[Cd]=new Set);var n=e+"__bubble";r.has(n)||(cg(t,e,2,!1),r.add(n))}function hu(e,t,r){var n=0;t&&(n|=4),cg(r,e,n,t)}var Oa="_reactListening"+Math.random().toString(36).slice(2);function Ol(e){if(!e[Oa]){e[Oa]=!0,g1.forEach(function(r){r!=="selectionchange"&&(P3.has(r)||hu(r,!1,e),hu(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Oa]||(t[Oa]=!0,hu("selectionchange",!1,t))}}function cg(e,t,r,n){switch(W1(t)){case 1:var o=Xx;break;case 4:o=Yx;break;default:o=Df}r=o.bind(null,t,r,e),o=void 0,!ud||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):o!==void 0?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function pu(e,t,r,n,o){var i=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var s=n.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=n.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;l=l.return}for(;s!==null;){if(l=ho(s),l===null)return;if(c=l.tag,c===5||c===6){n=i=l;continue e}s=s.parentNode}}n=n.return}T1(function(){var u=i,d=If(r),f=[];e:{var g=ag.get(e);if(g!==void 0){var C=Nf,x=e;switch(e){case"keypress":if(Qa(r)===0)break e;case"keydown":case"keyup":C=h3;break;case"focusin":x="focus",C=au;break;case"focusout":x="blur",C=au;break;case"beforeblur":case"afterblur":C=au;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Ep;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=t3;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=g3;break;case ng:case og:case ig:C=o3;break;case lg:C=v3;break;case"scroll":C=Zx;break;case"wheel":C=w3;break;case"copy":case"cut":case"paste":C=l3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=kp}var w=(t&4)!==0,v=!w&&e==="scroll",y=w?g!==null?g+"Capture":null:g;w=[];for(var h=u,p;h!==null;){p=h;var $=p.stateNode;if(p.tag===5&&$!==null&&(p=$,y!==null&&($=Sl(h,y),$!=null&&w.push(_l(h,$,p)))),v)break;h=h.return}0<w.length&&(g=new C(g,x,null,r,d),f.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",g&&r!==sd&&(x=r.relatedTarget||r.fromElement)&&(ho(x)||x[pn]))break e;if((C||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,C?(x=r.relatedTarget||r.toElement,C=u,x=x?ho(x):null,x!==null&&(v=Do(x),x!==v||x.tag!==5&&x.tag!==6)&&(x=null)):(C=null,x=u),C!==x)){if(w=Ep,$="onMouseLeave",y="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(w=kp,$="onPointerLeave",y="onPointerEnter",h="pointer"),v=C==null?g:Xo(C),p=x==null?g:Xo(x),g=new w($,h+"leave",C,r,d),g.target=v,g.relatedTarget=p,$=null,ho(d)===u&&(w=new w(y,h+"enter",x,r,d),w.target=p,w.relatedTarget=v,$=w),v=$,C&&x)t:{for(w=C,y=x,h=0,p=w;p;p=Vo(p))h++;for(p=0,$=y;$;$=Vo($))p++;for(;0<h-p;)w=Vo(w),h--;for(;0<p-h;)y=Vo(y),p--;for(;h--;){if(w===y||y!==null&&w===y.alternate)break t;w=Vo(w),y=Vo(y)}w=null}else w=null;C!==null&&Mp(f,g,C,w,!1),x!==null&&v!==null&&Mp(f,v,x,w,!0)}}e:{if(g=u?Xo(u):window,C=g.nodeName&&g.nodeName.toLowerCase(),C==="select"||C==="input"&&g.type==="file")var E=k3;else if(Ip(g))if(Y1)E=R3;else{E=_3;var k=O3}else(C=g.nodeName)&&C.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=I3);if(E&&(E=E(e,u))){X1(f,E,r,d);break e}k&&k(e,g,u),e==="focusout"&&(k=g._wrapperState)&&k.controlled&&g.type==="number"&&nd(g,"number",g.value)}switch(k=u?Xo(u):window,e){case"focusin":(Ip(k)||k.contentEditable==="true")&&(Qo=k,md=u,ul=null);break;case"focusout":ul=md=Qo=null;break;case"mousedown":gd=!0;break;case"contextmenu":case"mouseup":case"dragend":gd=!1,zp(f,r,d);break;case"selectionchange":if(D3)break;case"keydown":case"keyup":zp(f,r,d)}var O;if(Mf)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Ko?Q1(e,r)&&(T="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(T="onCompositionStart");T&&(K1&&r.locale!=="ko"&&(Ko||T!=="onCompositionStart"?T==="onCompositionEnd"&&Ko&&(O=q1()):(zn=d,zf="value"in zn?zn.value:zn.textContent,Ko=!0)),k=Os(u,T),0<k.length&&(T=new jp(T,e,null,r,d),f.push({event:T,listeners:k}),O?T.data=O:(O=J1(r),O!==null&&(T.data=O)))),(O=S3?$3(e,r):b3(e,r))&&(u=Os(u,"onBeforeInput"),0<u.length&&(d=new jp("onBeforeInput","beforeinput",null,r,d),f.push({event:d,listeners:u}),d.data=O))}sg(f,t)})}function _l(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Os(e,t){for(var r=t+"Capture",n=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Sl(e,r),i!=null&&n.unshift(_l(e,i,o)),i=Sl(e,t),i!=null&&n.push(_l(e,i,o))),e=e.return}return n}function Vo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Mp(e,t,r,n,o){for(var i=t._reactName,l=[];r!==null&&r!==n;){var s=r,c=s.alternate,u=s.stateNode;if(c!==null&&c===n)break;s.tag===5&&u!==null&&(s=u,o?(c=Sl(r,i),c!=null&&l.unshift(_l(r,c,s))):o||(c=Sl(r,i),c!=null&&l.push(_l(r,c,s)))),r=r.return}l.length!==0&&e.push({event:t,listeners:l})}var M3=/\r\n?/g,L3=/\u0000|\uFFFD/g;function Lp(e){return(typeof e=="string"?e:""+e).replace(M3,`
`).replace(L3,"")}function _a(e,t,r){if(t=Lp(t),Lp(e)!==t&&r)throw Error(G(425))}function _s(){}var yd=null,vd=null;function xd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wd=typeof setTimeout=="function"?setTimeout:void 0,F3=typeof clearTimeout=="function"?clearTimeout:void 0,Fp=typeof Promise=="function"?Promise:void 0,G3=typeof queueMicrotask=="function"?queueMicrotask:typeof Fp<"u"?function(e){return Fp.resolve(null).then(e).catch(B3)}:wd;function B3(e){setTimeout(function(){throw e})}function mu(e,t){var r=t,n=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(n===0){e.removeChild(o),El(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=o}while(r);El(t)}function Hn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Gp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var ji=Math.random().toString(36).slice(2),tn="__reactFiber$"+ji,Il="__reactProps$"+ji,pn="__reactContainer$"+ji,Cd="__reactEvents$"+ji,V3="__reactListeners$"+ji,H3="__reactHandles$"+ji;function ho(e){var t=e[tn];if(t)return t;for(var r=e.parentNode;r;){if(t=r[pn]||r[tn]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Gp(e);e!==null;){if(r=e[tn])return r;e=Gp(e)}return t}e=r,r=e.parentNode}return null}function Xl(e){return e=e[tn]||e[pn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(G(33))}function pc(e){return e[Il]||null}var Sd=[],Yo=-1;function to(e){return{current:e}}function rt(e){0>Yo||(e.current=Sd[Yo],Sd[Yo]=null,Yo--)}function Ke(e,t){Yo++,Sd[Yo]=e.current,e.current=t}var Zn={},Bt=to(Zn),rr=to(!1),Eo=Zn;function fi(e,t){var r=e.type.contextTypes;if(!r)return Zn;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in r)o[i]=t[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function nr(e){return e=e.childContextTypes,e!=null}function Is(){rt(rr),rt(Bt)}function Bp(e,t,r){if(Bt.current!==Zn)throw Error(G(168));Ke(Bt,t),Ke(rr,r)}function ug(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var o in n)if(!(o in t))throw Error(G(108,Ox(e)||"Unknown",o));return ut({},r,n)}function Rs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zn,Eo=Bt.current,Ke(Bt,e),Ke(rr,rr.current),!0}function Vp(e,t,r){var n=e.stateNode;if(!n)throw Error(G(169));r?(e=ug(e,t,Eo),n.__reactInternalMemoizedMergedChildContext=e,rt(rr),rt(Bt),Ke(Bt,e)):rt(rr),Ke(rr,r)}var cn=null,mc=!1,gu=!1;function dg(e){cn===null?cn=[e]:cn.push(e)}function U3(e){mc=!0,dg(e)}function ro(){if(!gu&&cn!==null){gu=!0;var e=0,t=Be;try{var r=cn;for(Be=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}cn=null,mc=!1}catch(o){throw cn!==null&&(cn=cn.slice(e+1)),N1(Rf,ro),o}finally{Be=t,gu=!1}}return null}var Zo=[],ei=0,Ts=null,As=0,jr=[],kr=0,jo=null,un=1,dn="";function lo(e,t){Zo[ei++]=As,Zo[ei++]=Ts,Ts=e,As=t}function fg(e,t,r){jr[kr++]=un,jr[kr++]=dn,jr[kr++]=jo,jo=e;var n=un;e=dn;var o=32-Gr(n)-1;n&=~(1<<o),r+=1;var i=32-Gr(t)+o;if(30<i){var l=o-o%5;i=(n&(1<<l)-1).toString(32),n>>=l,o-=l,un=1<<32-Gr(t)+o|r<<o|n,dn=i+e}else un=1<<i|r<<o|n,dn=e}function Ff(e){e.return!==null&&(lo(e,1),fg(e,1,0))}function Gf(e){for(;e===Ts;)Ts=Zo[--ei],Zo[ei]=null,As=Zo[--ei],Zo[ei]=null;for(;e===jo;)jo=jr[--kr],jr[kr]=null,dn=jr[--kr],jr[kr]=null,un=jr[--kr],jr[kr]=null}var vr=null,yr=null,lt=!1,Fr=null;function hg(e,t){var r=Or(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Hp(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,vr=e,yr=Hn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,vr=e,yr=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=jo!==null?{id:un,overflow:dn}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Or(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,vr=e,yr=null,!0):!1;default:return!1}}function $d(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bd(e){if(lt){var t=yr;if(t){var r=t;if(!Hp(e,t)){if($d(e))throw Error(G(418));t=Hn(r.nextSibling);var n=vr;t&&Hp(e,t)?hg(n,r):(e.flags=e.flags&-4097|2,lt=!1,vr=e)}}else{if($d(e))throw Error(G(418));e.flags=e.flags&-4097|2,lt=!1,vr=e}}}function Up(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;vr=e}function Ia(e){if(e!==vr)return!1;if(!lt)return Up(e),lt=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!xd(e.type,e.memoizedProps)),t&&(t=yr)){if($d(e))throw pg(),Error(G(418));for(;t;)hg(e,t),t=Hn(t.nextSibling)}if(Up(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(G(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){yr=Hn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}yr=null}}else yr=vr?Hn(e.stateNode.nextSibling):null;return!0}function pg(){for(var e=yr;e;)e=Hn(e.nextSibling)}function hi(){yr=vr=null,lt=!1}function Bf(e){Fr===null?Fr=[e]:Fr.push(e)}var W3=xn.ReactCurrentBatchConfig;function Mr(e,t){if(e&&e.defaultProps){t=ut({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}var Ds=to(null),zs=null,ti=null,Vf=null;function Hf(){Vf=ti=zs=null}function Uf(e){var t=Ds.current;rt(Ds),e._currentValue=t}function Ed(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function ci(e,t){zs=e,Vf=ti=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(er=!0),e.firstContext=null)}function Rr(e){var t=e._currentValue;if(Vf!==e)if(e={context:e,memoizedValue:t,next:null},ti===null){if(zs===null)throw Error(G(308));ti=e,zs.dependencies={lanes:0,firstContext:e}}else ti=ti.next=e;return t}var po=null;function Wf(e){po===null?po=[e]:po.push(e)}function mg(e,t,r,n){var o=t.interleaved;return o===null?(r.next=r,Wf(t)):(r.next=o.next,o.next=r),t.interleaved=r,mn(e,n)}function mn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Tn=!1;function qf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function fn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Un(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,De&2){var o=n.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),n.pending=t,mn(e,r)}return o=n.interleaved,o===null?(t.next=t,Wf(n)):(t.next=o.next,o.next=t),n.interleaved=t,mn(e,r)}function Ja(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Tf(e,r)}}function Wp(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var o=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?o=i=l:i=i.next=l,r=r.next}while(r!==null);i===null?o=i=t:i=i.next=t}else o=i=t;r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Ns(e,t,r,n){var o=e.updateQueue;Tn=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var c=s,u=c.next;c.next=null,l===null?i=u:l.next=u,l=c;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==l&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=c))}if(i!==null){var f=o.baseState;l=0,d=u=c=null,s=i;do{var g=s.lane,C=s.eventTime;if((n&g)===g){d!==null&&(d=d.next={eventTime:C,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,w=s;switch(g=t,C=r,w.tag){case 1:if(x=w.payload,typeof x=="function"){f=x.call(C,f,g);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,g=typeof x=="function"?x.call(C,f,g):x,g==null)break e;f=ut({},f,g);break e;case 2:Tn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[s]:g.push(s))}else C={eventTime:C,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=C,c=f):d=d.next=C,l|=g;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;g=s,s=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(d===null&&(c=f),o.baseState=c,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Oo|=l,e.lanes=l,e.memoizedState=f}}function qp(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(o!==null){if(n.callback=null,n=r,typeof o!="function")throw Error(G(191,o));o.call(n)}}}var yg=new m1.Component().refs;function jd(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:ut({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var gc={isMounted:function(e){return(e=e._reactInternals)?Do(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Ut(),o=qn(e),i=fn(n,o);i.payload=t,r!=null&&(i.callback=r),t=Un(e,i,o),t!==null&&(Br(t,e,o,n),Ja(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Ut(),o=qn(e),i=fn(n,o);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=Un(e,i,o),t!==null&&(Br(t,e,o,n),Ja(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ut(),n=qn(e),o=fn(r,n);o.tag=2,t!=null&&(o.callback=t),t=Un(e,o,n),t!==null&&(Br(t,e,n,r),Ja(t,e,n))}};function Kp(e,t,r,n,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,l):t.prototype&&t.prototype.isPureReactComponent?!kl(r,n)||!kl(o,i):!0}function vg(e,t,r){var n=!1,o=Zn,i=t.contextType;return typeof i=="object"&&i!==null?i=Rr(i):(o=nr(t)?Eo:Bt.current,n=t.contextTypes,i=(n=n!=null)?fi(e,o):Zn),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=gc,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Qp(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&gc.enqueueReplaceState(t,t.state,null)}function kd(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs=yg,qf(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Rr(i):(i=nr(t)?Eo:Bt.current,o.context=fi(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(jd(e,t,i,r),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&gc.enqueueReplaceState(o,o.state,null),Ns(e,r,o,n),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Hi(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(G(309));var n=r.stateNode}if(!n)throw Error(G(147,e));var o=n,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;s===yg&&(s=o.refs={}),l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(G(284));if(!r._owner)throw Error(G(290,e))}return e}function Ra(e,t){throw e=Object.prototype.toString.call(t),Error(G(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Jp(e){var t=e._init;return t(e._payload)}function xg(e){function t(y,h){if(e){var p=y.deletions;p===null?(y.deletions=[h],y.flags|=16):p.push(h)}}function r(y,h){if(!e)return null;for(;h!==null;)t(y,h),h=h.sibling;return null}function n(y,h){for(y=new Map;h!==null;)h.key!==null?y.set(h.key,h):y.set(h.index,h),h=h.sibling;return y}function o(y,h){return y=Kn(y,h),y.index=0,y.sibling=null,y}function i(y,h,p){return y.index=p,e?(p=y.alternate,p!==null?(p=p.index,p<h?(y.flags|=2,h):p):(y.flags|=2,h)):(y.flags|=1048576,h)}function l(y){return e&&y.alternate===null&&(y.flags|=2),y}function s(y,h,p,$){return h===null||h.tag!==6?(h=$u(p,y.mode,$),h.return=y,h):(h=o(h,p),h.return=y,h)}function c(y,h,p,$){var E=p.type;return E===qo?d(y,h,p.props.children,$,p.key):h!==null&&(h.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Rn&&Jp(E)===h.type)?($=o(h,p.props),$.ref=Hi(y,h,p),$.return=y,$):($=rs(p.type,p.key,p.props,null,y.mode,$),$.ref=Hi(y,h,p),$.return=y,$)}function u(y,h,p,$){return h===null||h.tag!==4||h.stateNode.containerInfo!==p.containerInfo||h.stateNode.implementation!==p.implementation?(h=bu(p,y.mode,$),h.return=y,h):(h=o(h,p.children||[]),h.return=y,h)}function d(y,h,p,$,E){return h===null||h.tag!==7?(h=So(p,y.mode,$,E),h.return=y,h):(h=o(h,p),h.return=y,h)}function f(y,h,p){if(typeof h=="string"&&h!==""||typeof h=="number")return h=$u(""+h,y.mode,p),h.return=y,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case wa:return p=rs(h.type,h.key,h.props,null,y.mode,p),p.ref=Hi(y,null,h),p.return=y,p;case Wo:return h=bu(h,y.mode,p),h.return=y,h;case Rn:var $=h._init;return f(y,$(h._payload),p)}if(Qi(h)||Li(h))return h=So(h,y.mode,p,null),h.return=y,h;Ra(y,h)}return null}function g(y,h,p,$){var E=h!==null?h.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:s(y,h,""+p,$);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case wa:return p.key===E?c(y,h,p,$):null;case Wo:return p.key===E?u(y,h,p,$):null;case Rn:return E=p._init,g(y,h,E(p._payload),$)}if(Qi(p)||Li(p))return E!==null?null:d(y,h,p,$,null);Ra(y,p)}return null}function C(y,h,p,$,E){if(typeof $=="string"&&$!==""||typeof $=="number")return y=y.get(p)||null,s(h,y,""+$,E);if(typeof $=="object"&&$!==null){switch($.$$typeof){case wa:return y=y.get($.key===null?p:$.key)||null,c(h,y,$,E);case Wo:return y=y.get($.key===null?p:$.key)||null,u(h,y,$,E);case Rn:var k=$._init;return C(y,h,p,k($._payload),E)}if(Qi($)||Li($))return y=y.get(p)||null,d(h,y,$,E,null);Ra(h,$)}return null}function x(y,h,p,$){for(var E=null,k=null,O=h,T=h=0,J=null;O!==null&&T<p.length;T++){O.index>T?(J=O,O=null):J=O.sibling;var H=g(y,O,p[T],$);if(H===null){O===null&&(O=J);break}e&&O&&H.alternate===null&&t(y,O),h=i(H,h,T),k===null?E=H:k.sibling=H,k=H,O=J}if(T===p.length)return r(y,O),lt&&lo(y,T),E;if(O===null){for(;T<p.length;T++)O=f(y,p[T],$),O!==null&&(h=i(O,h,T),k===null?E=O:k.sibling=O,k=O);return lt&&lo(y,T),E}for(O=n(y,O);T<p.length;T++)J=C(O,y,T,p[T],$),J!==null&&(e&&J.alternate!==null&&O.delete(J.key===null?T:J.key),h=i(J,h,T),k===null?E=J:k.sibling=J,k=J);return e&&O.forEach(function(ge){return t(y,ge)}),lt&&lo(y,T),E}function w(y,h,p,$){var E=Li(p);if(typeof E!="function")throw Error(G(150));if(p=E.call(p),p==null)throw Error(G(151));for(var k=E=null,O=h,T=h=0,J=null,H=p.next();O!==null&&!H.done;T++,H=p.next()){O.index>T?(J=O,O=null):J=O.sibling;var ge=g(y,O,H.value,$);if(ge===null){O===null&&(O=J);break}e&&O&&ge.alternate===null&&t(y,O),h=i(ge,h,T),k===null?E=ge:k.sibling=ge,k=ge,O=J}if(H.done)return r(y,O),lt&&lo(y,T),E;if(O===null){for(;!H.done;T++,H=p.next())H=f(y,H.value,$),H!==null&&(h=i(H,h,T),k===null?E=H:k.sibling=H,k=H);return lt&&lo(y,T),E}for(O=n(y,O);!H.done;T++,H=p.next())H=C(O,y,T,H.value,$),H!==null&&(e&&H.alternate!==null&&O.delete(H.key===null?T:H.key),h=i(H,h,T),k===null?E=H:k.sibling=H,k=H);return e&&O.forEach(function(Y){return t(y,Y)}),lt&&lo(y,T),E}function v(y,h,p,$){if(typeof p=="object"&&p!==null&&p.type===qo&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case wa:e:{for(var E=p.key,k=h;k!==null;){if(k.key===E){if(E=p.type,E===qo){if(k.tag===7){r(y,k.sibling),h=o(k,p.props.children),h.return=y,y=h;break e}}else if(k.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Rn&&Jp(E)===k.type){r(y,k.sibling),h=o(k,p.props),h.ref=Hi(y,k,p),h.return=y,y=h;break e}r(y,k);break}else t(y,k);k=k.sibling}p.type===qo?(h=So(p.props.children,y.mode,$,p.key),h.return=y,y=h):($=rs(p.type,p.key,p.props,null,y.mode,$),$.ref=Hi(y,h,p),$.return=y,y=$)}return l(y);case Wo:e:{for(k=p.key;h!==null;){if(h.key===k)if(h.tag===4&&h.stateNode.containerInfo===p.containerInfo&&h.stateNode.implementation===p.implementation){r(y,h.sibling),h=o(h,p.children||[]),h.return=y,y=h;break e}else{r(y,h);break}else t(y,h);h=h.sibling}h=bu(p,y.mode,$),h.return=y,y=h}return l(y);case Rn:return k=p._init,v(y,h,k(p._payload),$)}if(Qi(p))return x(y,h,p,$);if(Li(p))return w(y,h,p,$);Ra(y,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,h!==null&&h.tag===6?(r(y,h.sibling),h=o(h,p),h.return=y,y=h):(r(y,h),h=$u(p,y.mode,$),h.return=y,y=h),l(y)):r(y,h)}return v}var pi=xg(!0),wg=xg(!1),Yl={},nn=to(Yl),Rl=to(Yl),Tl=to(Yl);function mo(e){if(e===Yl)throw Error(G(174));return e}function Kf(e,t){switch(Ke(Tl,t),Ke(Rl,e),Ke(nn,Yl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:id(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=id(t,e)}rt(nn),Ke(nn,t)}function mi(){rt(nn),rt(Rl),rt(Tl)}function Cg(e){mo(Tl.current);var t=mo(nn.current),r=id(t,e.type);t!==r&&(Ke(Rl,e),Ke(nn,r))}function Qf(e){Rl.current===e&&(rt(nn),rt(Rl))}var st=to(0);function Ps(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yu=[];function Jf(){for(var e=0;e<yu.length;e++)yu[e]._workInProgressVersionPrimary=null;yu.length=0}var Xa=xn.ReactCurrentDispatcher,vu=xn.ReactCurrentBatchConfig,ko=0,ct=null,St=null,jt=null,Ms=!1,dl=!1,Al=0,q3=0;function Mt(){throw Error(G(321))}function Xf(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Ur(e[r],t[r]))return!1;return!0}function Yf(e,t,r,n,o,i){if(ko=i,ct=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xa.current=e===null||e.memoizedState===null?X3:Y3,e=r(n,o),dl){i=0;do{if(dl=!1,Al=0,25<=i)throw Error(G(301));i+=1,jt=St=null,t.updateQueue=null,Xa.current=Z3,e=r(n,o)}while(dl)}if(Xa.current=Ls,t=St!==null&&St.next!==null,ko=0,jt=St=ct=null,Ms=!1,t)throw Error(G(300));return e}function Zf(){var e=Al!==0;return Al=0,e}function Zr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?ct.memoizedState=jt=e:jt=jt.next=e,jt}function Tr(){if(St===null){var e=ct.alternate;e=e!==null?e.memoizedState:null}else e=St.next;var t=jt===null?ct.memoizedState:jt.next;if(t!==null)jt=t,St=e;else{if(e===null)throw Error(G(310));St=e,e={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},jt===null?ct.memoizedState=jt=e:jt=jt.next=e}return jt}function Dl(e,t){return typeof t=="function"?t(e):t}function xu(e){var t=Tr(),r=t.queue;if(r===null)throw Error(G(311));r.lastRenderedReducer=e;var n=St,o=n.baseQueue,i=r.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}n.baseQueue=o=i,r.pending=null}if(o!==null){i=o.next,n=n.baseState;var s=l=null,c=null,u=i;do{var d=u.lane;if((ko&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(s=c=f,l=n):c=c.next=f,ct.lanes|=d,Oo|=d}u=u.next}while(u!==null&&u!==i);c===null?l=n:c.next=s,Ur(n,t.memoizedState)||(er=!0),t.memoizedState=n,t.baseState=l,t.baseQueue=c,r.lastRenderedState=n}if(e=r.interleaved,e!==null){o=e;do i=o.lane,ct.lanes|=i,Oo|=i,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function wu(e){var t=Tr(),r=t.queue;if(r===null)throw Error(G(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,i=t.memoizedState;if(o!==null){r.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Ur(i,t.memoizedState)||(er=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,n]}function Sg(){}function $g(e,t){var r=ct,n=Tr(),o=t(),i=!Ur(n.memoizedState,o);if(i&&(n.memoizedState=o,er=!0),n=n.queue,eh(jg.bind(null,r,n,e),[e]),n.getSnapshot!==t||i||jt!==null&&jt.memoizedState.tag&1){if(r.flags|=2048,zl(9,Eg.bind(null,r,n,o,t),void 0,null),Ot===null)throw Error(G(349));ko&30||bg(r,t,o)}return o}function bg(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ct.updateQueue,t===null?(t={lastEffect:null,stores:null},ct.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Eg(e,t,r,n){t.value=r,t.getSnapshot=n,kg(t)&&Og(e)}function jg(e,t,r){return r(function(){kg(t)&&Og(e)})}function kg(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ur(e,r)}catch{return!0}}function Og(e){var t=mn(e,1);t!==null&&Br(t,e,1,-1)}function Xp(e){var t=Zr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Dl,lastRenderedState:e},t.queue=e,e=e.dispatch=J3.bind(null,ct,e),[t.memoizedState,e]}function zl(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=ct.updateQueue,t===null?(t={lastEffect:null,stores:null},ct.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function _g(){return Tr().memoizedState}function Ya(e,t,r,n){var o=Zr();ct.flags|=e,o.memoizedState=zl(1|t,r,void 0,n===void 0?null:n)}function yc(e,t,r,n){var o=Tr();n=n===void 0?null:n;var i=void 0;if(St!==null){var l=St.memoizedState;if(i=l.destroy,n!==null&&Xf(n,l.deps)){o.memoizedState=zl(t,r,i,n);return}}ct.flags|=e,o.memoizedState=zl(1|t,r,i,n)}function Yp(e,t){return Ya(8390656,8,e,t)}function eh(e,t){return yc(2048,8,e,t)}function Ig(e,t){return yc(4,2,e,t)}function Rg(e,t){return yc(4,4,e,t)}function Tg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ag(e,t,r){return r=r!=null?r.concat([e]):null,yc(4,4,Tg.bind(null,t,e),r)}function th(){}function Dg(e,t){var r=Tr();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Xf(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function zg(e,t){var r=Tr();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Xf(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Ng(e,t,r){return ko&21?(Ur(r,t)||(r=L1(),ct.lanes|=r,Oo|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,er=!0),e.memoizedState=r)}function K3(e,t){var r=Be;Be=r!==0&&4>r?r:4,e(!0);var n=vu.transition;vu.transition={};try{e(!1),t()}finally{Be=r,vu.transition=n}}function Pg(){return Tr().memoizedState}function Q3(e,t,r){var n=qn(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Mg(e))Lg(t,r);else if(r=mg(e,t,r,n),r!==null){var o=Ut();Br(r,e,n,o),Fg(r,t,n)}}function J3(e,t,r){var n=qn(e),o={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Mg(e))Lg(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,r);if(o.hasEagerState=!0,o.eagerState=s,Ur(s,l)){var c=t.interleaved;c===null?(o.next=o,Wf(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}r=mg(e,t,o,n),r!==null&&(o=Ut(),Br(r,e,n,o),Fg(r,t,n))}}function Mg(e){var t=e.alternate;return e===ct||t!==null&&t===ct}function Lg(e,t){dl=Ms=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Fg(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Tf(e,r)}}var Ls={readContext:Rr,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useInsertionEffect:Mt,useLayoutEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useMutableSource:Mt,useSyncExternalStore:Mt,useId:Mt,unstable_isNewReconciler:!1},X3={readContext:Rr,useCallback:function(e,t){return Zr().memoizedState=[e,t===void 0?null:t],e},useContext:Rr,useEffect:Yp,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Ya(4194308,4,Tg.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Ya(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ya(4,2,e,t)},useMemo:function(e,t){var r=Zr();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Zr();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Q3.bind(null,ct,e),[n.memoizedState,e]},useRef:function(e){var t=Zr();return e={current:e},t.memoizedState=e},useState:Xp,useDebugValue:th,useDeferredValue:function(e){return Zr().memoizedState=e},useTransition:function(){var e=Xp(!1),t=e[0];return e=K3.bind(null,e[1]),Zr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=ct,o=Zr();if(lt){if(r===void 0)throw Error(G(407));r=r()}else{if(r=t(),Ot===null)throw Error(G(349));ko&30||bg(n,t,r)}o.memoizedState=r;var i={value:r,getSnapshot:t};return o.queue=i,Yp(jg.bind(null,n,i,e),[e]),n.flags|=2048,zl(9,Eg.bind(null,n,i,r,t),void 0,null),r},useId:function(){var e=Zr(),t=Ot.identifierPrefix;if(lt){var r=dn,n=un;r=(n&~(1<<32-Gr(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Al++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=q3++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Y3={readContext:Rr,useCallback:Dg,useContext:Rr,useEffect:eh,useImperativeHandle:Ag,useInsertionEffect:Ig,useLayoutEffect:Rg,useMemo:zg,useReducer:xu,useRef:_g,useState:function(){return xu(Dl)},useDebugValue:th,useDeferredValue:function(e){var t=Tr();return Ng(t,St.memoizedState,e)},useTransition:function(){var e=xu(Dl)[0],t=Tr().memoizedState;return[e,t]},useMutableSource:Sg,useSyncExternalStore:$g,useId:Pg,unstable_isNewReconciler:!1},Z3={readContext:Rr,useCallback:Dg,useContext:Rr,useEffect:eh,useImperativeHandle:Ag,useInsertionEffect:Ig,useLayoutEffect:Rg,useMemo:zg,useReducer:wu,useRef:_g,useState:function(){return wu(Dl)},useDebugValue:th,useDeferredValue:function(e){var t=Tr();return St===null?t.memoizedState=e:Ng(t,St.memoizedState,e)},useTransition:function(){var e=wu(Dl)[0],t=Tr().memoizedState;return[e,t]},useMutableSource:Sg,useSyncExternalStore:$g,useId:Pg,unstable_isNewReconciler:!1};function gi(e,t){try{var r="",n=t;do r+=kx(n),n=n.return;while(n);var o=r}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Cu(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Od(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var e5=typeof WeakMap=="function"?WeakMap:Map;function Gg(e,t,r){r=fn(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Gs||(Gs=!0,Md=n),Od(e,t)},r}function Bg(e,t,r){r=fn(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var o=t.value;r.payload=function(){return n(o)},r.callback=function(){Od(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){Od(e,t),typeof n!="function"&&(Wn===null?Wn=new Set([this]):Wn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),r}function Zp(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new e5;var o=new Set;n.set(t,o)}else o=n.get(t),o===void 0&&(o=new Set,n.set(t,o));o.has(r)||(o.add(r),e=p5.bind(null,e,t,r),t.then(e,e))}function e0(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function t0(e,t,r,n,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=fn(-1,1),t.tag=2,Un(r,t,1))),r.lanes|=1),e)}var t5=xn.ReactCurrentOwner,er=!1;function Vt(e,t,r,n){t.child=e===null?wg(t,null,r,n):pi(t,e.child,r,n)}function r0(e,t,r,n,o){r=r.render;var i=t.ref;return ci(t,o),n=Yf(e,t,r,n,i,o),r=Zf(),e!==null&&!er?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,gn(e,t,o)):(lt&&r&&Ff(t),t.flags|=1,Vt(e,t,n,o),t.child)}function n0(e,t,r,n,o){if(e===null){var i=r.type;return typeof i=="function"&&!ch(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,Vg(e,t,i,n,o)):(e=rs(r.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(r=r.compare,r=r!==null?r:kl,r(l,n)&&e.ref===t.ref)return gn(e,t,o)}return t.flags|=1,e=Kn(i,n),e.ref=t.ref,e.return=t,t.child=e}function Vg(e,t,r,n,o){if(e!==null){var i=e.memoizedProps;if(kl(i,n)&&e.ref===t.ref)if(er=!1,t.pendingProps=n=i,(e.lanes&o)!==0)e.flags&131072&&(er=!0);else return t.lanes=e.lanes,gn(e,t,o)}return _d(e,t,r,n,o)}function Hg(e,t,r){var n=t.pendingProps,o=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(ni,fr),fr|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ke(ni,fr),fr|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:r,Ke(ni,fr),fr|=n}else i!==null?(n=i.baseLanes|r,t.memoizedState=null):n=r,Ke(ni,fr),fr|=n;return Vt(e,t,o,r),t.child}function Ug(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function _d(e,t,r,n,o){var i=nr(r)?Eo:Bt.current;return i=fi(t,i),ci(t,o),r=Yf(e,t,r,n,i,o),n=Zf(),e!==null&&!er?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,gn(e,t,o)):(lt&&n&&Ff(t),t.flags|=1,Vt(e,t,r,o),t.child)}function o0(e,t,r,n,o){if(nr(r)){var i=!0;Rs(t)}else i=!1;if(ci(t,o),t.stateNode===null)Za(e,t),vg(t,r,n),kd(t,r,n,o),n=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var c=l.context,u=r.contextType;typeof u=="object"&&u!==null?u=Rr(u):(u=nr(r)?Eo:Bt.current,u=fi(t,u));var d=r.getDerivedStateFromProps,f=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==n||c!==u)&&Qp(t,l,n,u),Tn=!1;var g=t.memoizedState;l.state=g,Ns(t,n,l,o),c=t.memoizedState,s!==n||g!==c||rr.current||Tn?(typeof d=="function"&&(jd(t,r,d,n),c=t.memoizedState),(s=Tn||Kp(t,r,s,n,g,c,u))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),l.props=n,l.state=c,l.context=u,n=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{l=t.stateNode,gg(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Mr(t.type,s),l.props=u,f=t.pendingProps,g=l.context,c=r.contextType,typeof c=="object"&&c!==null?c=Rr(c):(c=nr(r)?Eo:Bt.current,c=fi(t,c));var C=r.getDerivedStateFromProps;(d=typeof C=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==f||g!==c)&&Qp(t,l,n,c),Tn=!1,g=t.memoizedState,l.state=g,Ns(t,n,l,o);var x=t.memoizedState;s!==f||g!==x||rr.current||Tn?(typeof C=="function"&&(jd(t,r,C,n),x=t.memoizedState),(u=Tn||Kp(t,r,u,n,g,x,c)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,x,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,x,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=x),l.props=n,l.state=x,l.context=c,n=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),n=!1)}return Id(e,t,r,n,i,o)}function Id(e,t,r,n,o,i){Ug(e,t);var l=(t.flags&128)!==0;if(!n&&!l)return o&&Vp(t,r,!1),gn(e,t,i);n=t.stateNode,t5.current=t;var s=l&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&l?(t.child=pi(t,e.child,null,i),t.child=pi(t,null,s,i)):Vt(e,t,s,i),t.memoizedState=n.state,o&&Vp(t,r,!0),t.child}function Wg(e){var t=e.stateNode;t.pendingContext?Bp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Bp(e,t.context,!1),Kf(e,t.containerInfo)}function i0(e,t,r,n,o){return hi(),Bf(o),t.flags|=256,Vt(e,t,r,n),t.child}var Rd={dehydrated:null,treeContext:null,retryLane:0};function Td(e){return{baseLanes:e,cachePool:null,transitions:null}}function qg(e,t,r){var n=t.pendingProps,o=st.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Ke(st,o&1),e===null)return bd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=n.children,e=n.fallback,i?(n=t.mode,i=t.child,l={mode:"hidden",children:l},!(n&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=wc(l,n,0,null),e=So(e,n,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Td(r),t.memoizedState=Rd,e):rh(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return r5(e,t,l,n,s,o,r);if(i){i=n.fallback,l=t.mode,o=e.child,s=o.sibling;var c={mode:"hidden",children:n.children};return!(l&1)&&t.child!==o?(n=t.child,n.childLanes=0,n.pendingProps=c,t.deletions=null):(n=Kn(o,c),n.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Kn(s,i):(i=So(i,l,r,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,l=e.child.memoizedState,l=l===null?Td(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~r,t.memoizedState=Rd,n}return i=e.child,e=i.sibling,n=Kn(i,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function rh(e,t){return t=wc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ta(e,t,r,n){return n!==null&&Bf(n),pi(t,e.child,null,r),e=rh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function r5(e,t,r,n,o,i,l){if(r)return t.flags&256?(t.flags&=-257,n=Cu(Error(G(422))),Ta(e,t,l,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=n.fallback,o=t.mode,n=wc({mode:"visible",children:n.children},o,0,null),i=So(i,o,l,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,t.mode&1&&pi(t,e.child,null,l),t.child.memoizedState=Td(l),t.memoizedState=Rd,i);if(!(t.mode&1))return Ta(e,t,l,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var s=n.dgst;return n=s,i=Error(G(419)),n=Cu(i,n,void 0),Ta(e,t,l,n)}if(s=(l&e.childLanes)!==0,er||s){if(n=Ot,n!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(n.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,mn(e,o),Br(n,e,o,-1))}return sh(),n=Cu(Error(G(421))),Ta(e,t,l,n)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=m5.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,yr=Hn(o.nextSibling),vr=t,lt=!0,Fr=null,e!==null&&(jr[kr++]=un,jr[kr++]=dn,jr[kr++]=jo,un=e.id,dn=e.overflow,jo=t),t=rh(t,n.children),t.flags|=4096,t)}function l0(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Ed(e.return,t,r)}function Su(e,t,r,n,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=o)}function Kg(e,t,r){var n=t.pendingProps,o=n.revealOrder,i=n.tail;if(Vt(e,t,n.children,r),n=st.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&l0(e,r,t);else if(e.tag===19)l0(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(Ke(st,n),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;r!==null;)e=r.alternate,e!==null&&Ps(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),Su(t,!1,o,r,i);break;case"backwards":for(r=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ps(e)===null){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}Su(t,!0,r,null,i);break;case"together":Su(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Za(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function gn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Oo|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(G(153));if(t.child!==null){for(e=t.child,r=Kn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Kn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function n5(e,t,r){switch(t.tag){case 3:Wg(t),hi();break;case 5:Cg(t);break;case 1:nr(t.type)&&Rs(t);break;case 4:Kf(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;Ke(Ds,n._currentValue),n._currentValue=o;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(Ke(st,st.current&1),t.flags|=128,null):r&t.child.childLanes?qg(e,t,r):(Ke(st,st.current&1),e=gn(e,t,r),e!==null?e.sibling:null);Ke(st,st.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Kg(e,t,r);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Ke(st,st.current),n)break;return null;case 22:case 23:return t.lanes=0,Hg(e,t,r)}return gn(e,t,r)}var Qg,Ad,Jg,Xg;Qg=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Ad=function(){};Jg=function(e,t,r,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,mo(nn.current);var i=null;switch(r){case"input":o=td(e,o),n=td(e,n),i=[];break;case"select":o=ut({},o,{value:void 0}),n=ut({},n,{value:void 0}),i=[];break;case"textarea":o=od(e,o),n=od(e,n),i=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=_s)}ld(r,n);var l;r=null;for(u in o)if(!n.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(l in s)s.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(wl.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in n){var c=n[u];if(s=o!=null?o[u]:void 0,n.hasOwnProperty(u)&&c!==s&&(c!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in c)c.hasOwnProperty(l)&&s[l]!==c[l]&&(r||(r={}),r[l]=c[l])}else r||(i||(i=[]),i.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(wl.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Ze("scroll",e),i||s===c||(i=[])):(i=i||[]).push(u,c))}r&&(i=i||[]).push("style",r);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Xg=function(e,t,r,n){r!==n&&(t.flags|=4)};function Ui(e,t){if(!lt)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Lt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function o5(e,t,r){var n=t.pendingProps;switch(Gf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(t),null;case 1:return nr(t.type)&&Is(),Lt(t),null;case 3:return n=t.stateNode,mi(),rt(rr),rt(Bt),Jf(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ia(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Fr!==null&&(Gd(Fr),Fr=null))),Ad(e,t),Lt(t),null;case 5:Qf(t);var o=mo(Tl.current);if(r=t.type,e!==null&&t.stateNode!=null)Jg(e,t,r,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(G(166));return Lt(t),null}if(e=mo(nn.current),Ia(t)){n=t.stateNode,r=t.type;var i=t.memoizedProps;switch(n[tn]=t,n[Il]=i,e=(t.mode&1)!==0,r){case"dialog":Ze("cancel",n),Ze("close",n);break;case"iframe":case"object":case"embed":Ze("load",n);break;case"video":case"audio":for(o=0;o<Xi.length;o++)Ze(Xi[o],n);break;case"source":Ze("error",n);break;case"img":case"image":case"link":Ze("error",n),Ze("load",n);break;case"details":Ze("toggle",n);break;case"input":mp(n,i),Ze("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},Ze("invalid",n);break;case"textarea":yp(n,i),Ze("invalid",n)}ld(r,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?n.textContent!==s&&(i.suppressHydrationWarning!==!0&&_a(n.textContent,s,e),o=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&_a(n.textContent,s,e),o=["children",""+s]):wl.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&Ze("scroll",n)}switch(r){case"input":Ca(n),gp(n,i,!0);break;case"textarea":Ca(n),vp(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=_s)}n=o,t.updateQueue=n,n!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=b1(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=l.createElement(r,{is:n.is}):(e=l.createElement(r),r==="select"&&(l=e,n.multiple?l.multiple=!0:n.size&&(l.size=n.size))):e=l.createElementNS(e,r),e[tn]=t,e[Il]=n,Qg(e,t,!1,!1),t.stateNode=e;e:{switch(l=ad(r,n),r){case"dialog":Ze("cancel",e),Ze("close",e),o=n;break;case"iframe":case"object":case"embed":Ze("load",e),o=n;break;case"video":case"audio":for(o=0;o<Xi.length;o++)Ze(Xi[o],e);o=n;break;case"source":Ze("error",e),o=n;break;case"img":case"image":case"link":Ze("error",e),Ze("load",e),o=n;break;case"details":Ze("toggle",e),o=n;break;case"input":mp(e,n),o=td(e,n),Ze("invalid",e);break;case"option":o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=ut({},n,{value:void 0}),Ze("invalid",e);break;case"textarea":yp(e,n),o=od(e,n),Ze("invalid",e);break;default:o=n}ld(r,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var c=s[i];i==="style"?k1(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&E1(e,c)):i==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&Cl(e,c):typeof c=="number"&&Cl(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(wl.hasOwnProperty(i)?c!=null&&i==="onScroll"&&Ze("scroll",e):c!=null&&jf(e,i,c,l))}switch(r){case"input":Ca(e),gp(e,n,!1);break;case"textarea":Ca(e),vp(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Yn(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?ii(e,!!n.multiple,i,!1):n.defaultValue!=null&&ii(e,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=_s)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Lt(t),null;case 6:if(e&&t.stateNode!=null)Xg(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(G(166));if(r=mo(Tl.current),mo(nn.current),Ia(t)){if(n=t.stateNode,r=t.memoizedProps,n[tn]=t,(i=n.nodeValue!==r)&&(e=vr,e!==null))switch(e.tag){case 3:_a(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&_a(n.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[tn]=t,t.stateNode=n}return Lt(t),null;case 13:if(rt(st),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(lt&&yr!==null&&t.mode&1&&!(t.flags&128))pg(),hi(),t.flags|=98560,i=!1;else if(i=Ia(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(G(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(G(317));i[tn]=t}else hi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Lt(t),i=!1}else Fr!==null&&(Gd(Fr),Fr=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||st.current&1?$t===0&&($t=3):sh())),t.updateQueue!==null&&(t.flags|=4),Lt(t),null);case 4:return mi(),Ad(e,t),e===null&&Ol(t.stateNode.containerInfo),Lt(t),null;case 10:return Uf(t.type._context),Lt(t),null;case 17:return nr(t.type)&&Is(),Lt(t),null;case 19:if(rt(st),i=t.memoizedState,i===null)return Lt(t),null;if(n=(t.flags&128)!==0,l=i.rendering,l===null)if(n)Ui(i,!1);else{if($t!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Ps(e),l!==null){for(t.flags|=128,Ui(i,!1),n=l.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)i=r,e=n,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Ke(st,st.current&1|2),t.child}e=e.sibling}i.tail!==null&&ht()>yi&&(t.flags|=128,n=!0,Ui(i,!1),t.lanes=4194304)}else{if(!n)if(e=Ps(l),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Ui(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!lt)return Lt(t),null}else 2*ht()-i.renderingStartTime>yi&&r!==1073741824&&(t.flags|=128,n=!0,Ui(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(r=i.last,r!==null?r.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ht(),t.sibling=null,r=st.current,Ke(st,n?r&1|2:r&1),t):(Lt(t),null);case 22:case 23:return ah(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?fr&1073741824&&(Lt(t),t.subtreeFlags&6&&(t.flags|=8192)):Lt(t),null;case 24:return null;case 25:return null}throw Error(G(156,t.tag))}function i5(e,t){switch(Gf(t),t.tag){case 1:return nr(t.type)&&Is(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mi(),rt(rr),rt(Bt),Jf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Qf(t),null;case 13:if(rt(st),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(G(340));hi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return rt(st),null;case 4:return mi(),null;case 10:return Uf(t.type._context),null;case 22:case 23:return ah(),null;case 24:return null;default:return null}}var Aa=!1,Ft=!1,l5=typeof WeakSet=="function"?WeakSet:Set,X=null;function ri(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){dt(e,t,n)}else r.current=null}function Dd(e,t,r){try{r()}catch(n){dt(e,t,n)}}var a0=!1;function a5(e,t){if(yd=js,e=tg(),Lf(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var o=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var l=0,s=-1,c=-1,u=0,d=0,f=e,g=null;t:for(;;){for(var C;f!==r||o!==0&&f.nodeType!==3||(s=l+o),f!==i||n!==0&&f.nodeType!==3||(c=l+n),f.nodeType===3&&(l+=f.nodeValue.length),(C=f.firstChild)!==null;)g=f,f=C;for(;;){if(f===e)break t;if(g===r&&++u===o&&(s=l),g===i&&++d===n&&(c=l),(C=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=C}r=s===-1||c===-1?null:{start:s,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(vd={focusedElem:e,selectionRange:r},js=!1,X=t;X!==null;)if(t=X,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,X=e;else for(;X!==null;){t=X;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,v=x.memoizedState,y=t.stateNode,h=y.getSnapshotBeforeUpdate(t.elementType===t.type?w:Mr(t.type,w),v);y.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(G(163))}}catch($){dt(t,t.return,$)}if(e=t.sibling,e!==null){e.return=t.return,X=e;break}X=t.return}return x=a0,a0=!1,x}function fl(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Dd(t,r,i)}o=o.next}while(o!==n)}}function vc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function zd(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Yg(e){var t=e.alternate;t!==null&&(e.alternate=null,Yg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[tn],delete t[Il],delete t[Cd],delete t[V3],delete t[H3])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Zg(e){return e.tag===5||e.tag===3||e.tag===4}function s0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Nd(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=_s));else if(n!==4&&(e=e.child,e!==null))for(Nd(e,t,r),e=e.sibling;e!==null;)Nd(e,t,r),e=e.sibling}function Pd(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Pd(e,t,r),e=e.sibling;e!==null;)Pd(e,t,r),e=e.sibling}var Tt=null,Lr=!1;function jn(e,t,r){for(r=r.child;r!==null;)ey(e,t,r),r=r.sibling}function ey(e,t,r){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(uc,r)}catch{}switch(r.tag){case 5:Ft||ri(r,t);case 6:var n=Tt,o=Lr;Tt=null,jn(e,t,r),Tt=n,Lr=o,Tt!==null&&(Lr?(e=Tt,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Tt.removeChild(r.stateNode));break;case 18:Tt!==null&&(Lr?(e=Tt,r=r.stateNode,e.nodeType===8?mu(e.parentNode,r):e.nodeType===1&&mu(e,r),El(e)):mu(Tt,r.stateNode));break;case 4:n=Tt,o=Lr,Tt=r.stateNode.containerInfo,Lr=!0,jn(e,t,r),Tt=n,Lr=o;break;case 0:case 11:case 14:case 15:if(!Ft&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Dd(r,t,l),o=o.next}while(o!==n)}jn(e,t,r);break;case 1:if(!Ft&&(ri(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){dt(r,t,s)}jn(e,t,r);break;case 21:jn(e,t,r);break;case 22:r.mode&1?(Ft=(n=Ft)||r.memoizedState!==null,jn(e,t,r),Ft=n):jn(e,t,r);break;default:jn(e,t,r)}}function c0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new l5),t.forEach(function(n){var o=g5.bind(null,e,n);r.has(n)||(r.add(n),n.then(o,o))})}}function Nr(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var o=r[n];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:Tt=s.stateNode,Lr=!1;break e;case 3:Tt=s.stateNode.containerInfo,Lr=!0;break e;case 4:Tt=s.stateNode.containerInfo,Lr=!0;break e}s=s.return}if(Tt===null)throw Error(G(160));ey(i,l,o),Tt=null,Lr=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(u){dt(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ty(t,e),t=t.sibling}function ty(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Nr(t,e),Kr(e),n&4){try{fl(3,e,e.return),vc(3,e)}catch(w){dt(e,e.return,w)}try{fl(5,e,e.return)}catch(w){dt(e,e.return,w)}}break;case 1:Nr(t,e),Kr(e),n&512&&r!==null&&ri(r,r.return);break;case 5:if(Nr(t,e),Kr(e),n&512&&r!==null&&ri(r,r.return),e.flags&32){var o=e.stateNode;try{Cl(o,"")}catch(w){dt(e,e.return,w)}}if(n&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=r!==null?r.memoizedProps:i,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&S1(o,i),ad(s,l);var u=ad(s,i);for(l=0;l<c.length;l+=2){var d=c[l],f=c[l+1];d==="style"?k1(o,f):d==="dangerouslySetInnerHTML"?E1(o,f):d==="children"?Cl(o,f):jf(o,d,f,u)}switch(s){case"input":rd(o,i);break;case"textarea":$1(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var C=i.value;C!=null?ii(o,!!i.multiple,C,!1):g!==!!i.multiple&&(i.defaultValue!=null?ii(o,!!i.multiple,i.defaultValue,!0):ii(o,!!i.multiple,i.multiple?[]:"",!1))}o[Il]=i}catch(w){dt(e,e.return,w)}}break;case 6:if(Nr(t,e),Kr(e),n&4){if(e.stateNode===null)throw Error(G(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){dt(e,e.return,w)}}break;case 3:if(Nr(t,e),Kr(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{El(t.containerInfo)}catch(w){dt(e,e.return,w)}break;case 4:Nr(t,e),Kr(e);break;case 13:Nr(t,e),Kr(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(ih=ht())),n&4&&c0(e);break;case 22:if(d=r!==null&&r.memoizedState!==null,e.mode&1?(Ft=(u=Ft)||d,Nr(t,e),Ft=u):Nr(t,e),Kr(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(X=e,d=e.child;d!==null;){for(f=X=d;X!==null;){switch(g=X,C=g.child,g.tag){case 0:case 11:case 14:case 15:fl(4,g,g.return);break;case 1:ri(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){n=g,r=g.return;try{t=n,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){dt(n,r,w)}}break;case 5:ri(g,g.return);break;case 22:if(g.memoizedState!==null){d0(f);continue}}C!==null?(C.return=g,X=C):d0(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{o=f.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=f.stateNode,c=f.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=j1("display",l))}catch(w){dt(e,e.return,w)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){dt(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Nr(t,e),Kr(e),n&4&&c0(e);break;case 21:break;default:Nr(t,e),Kr(e)}}function Kr(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Zg(r)){var n=r;break e}r=r.return}throw Error(G(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(Cl(o,""),n.flags&=-33);var i=s0(e);Pd(e,i,o);break;case 3:case 4:var l=n.stateNode.containerInfo,s=s0(e);Nd(e,s,l);break;default:throw Error(G(161))}}catch(c){dt(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function s5(e,t,r){X=e,ry(e)}function ry(e,t,r){for(var n=(e.mode&1)!==0;X!==null;){var o=X,i=o.child;if(o.tag===22&&n){var l=o.memoizedState!==null||Aa;if(!l){var s=o.alternate,c=s!==null&&s.memoizedState!==null||Ft;s=Aa;var u=Ft;if(Aa=l,(Ft=c)&&!u)for(X=o;X!==null;)l=X,c=l.child,l.tag===22&&l.memoizedState!==null?f0(o):c!==null?(c.return=l,X=c):f0(o);for(;i!==null;)X=i,ry(i),i=i.sibling;X=o,Aa=s,Ft=u}u0(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,X=i):u0(e)}}function u0(e){for(;X!==null;){var t=X;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ft||vc(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Ft)if(r===null)n.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:Mr(t.type,r.memoizedProps);n.componentDidUpdate(o,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&qp(t,i,n);break;case 3:var l=t.updateQueue;if(l!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}qp(t,l,r)}break;case 5:var s=t.stateNode;if(r===null&&t.flags&4){r=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&El(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(G(163))}Ft||t.flags&512&&zd(t)}catch(g){dt(t,t.return,g)}}if(t===e){X=null;break}if(r=t.sibling,r!==null){r.return=t.return,X=r;break}X=t.return}}function d0(e){for(;X!==null;){var t=X;if(t===e){X=null;break}var r=t.sibling;if(r!==null){r.return=t.return,X=r;break}X=t.return}}function f0(e){for(;X!==null;){var t=X;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{vc(4,t)}catch(c){dt(t,r,c)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var o=t.return;try{n.componentDidMount()}catch(c){dt(t,o,c)}}var i=t.return;try{zd(t)}catch(c){dt(t,i,c)}break;case 5:var l=t.return;try{zd(t)}catch(c){dt(t,l,c)}}}catch(c){dt(t,t.return,c)}if(t===e){X=null;break}var s=t.sibling;if(s!==null){s.return=t.return,X=s;break}X=t.return}}var c5=Math.ceil,Fs=xn.ReactCurrentDispatcher,nh=xn.ReactCurrentOwner,_r=xn.ReactCurrentBatchConfig,De=0,Ot=null,xt=null,Dt=0,fr=0,ni=to(0),$t=0,Nl=null,Oo=0,xc=0,oh=0,hl=null,Zt=null,ih=0,yi=1/0,an=null,Gs=!1,Md=null,Wn=null,Da=!1,Nn=null,Bs=0,pl=0,Ld=null,es=-1,ts=0;function Ut(){return De&6?ht():es!==-1?es:es=ht()}function qn(e){return e.mode&1?De&2&&Dt!==0?Dt&-Dt:W3.transition!==null?(ts===0&&(ts=L1()),ts):(e=Be,e!==0||(e=window.event,e=e===void 0?16:W1(e.type)),e):1}function Br(e,t,r,n){if(50<pl)throw pl=0,Ld=null,Error(G(185));Ql(e,r,n),(!(De&2)||e!==Ot)&&(e===Ot&&(!(De&2)&&(xc|=r),$t===4&&Dn(e,Dt)),or(e,n),r===1&&De===0&&!(t.mode&1)&&(yi=ht()+500,mc&&ro()))}function or(e,t){var r=e.callbackNode;Wx(e,t);var n=Es(e,e===Ot?Dt:0);if(n===0)r!==null&&Cp(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Cp(r),t===1)e.tag===0?U3(h0.bind(null,e)):dg(h0.bind(null,e)),G3(function(){!(De&6)&&ro()}),r=null;else{switch(F1(n)){case 1:r=Rf;break;case 4:r=P1;break;case 16:r=bs;break;case 536870912:r=M1;break;default:r=bs}r=uy(r,ny.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function ny(e,t){if(es=-1,ts=0,De&6)throw Error(G(327));var r=e.callbackNode;if(ui()&&e.callbackNode!==r)return null;var n=Es(e,e===Ot?Dt:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Vs(e,n);else{t=n;var o=De;De|=2;var i=iy();(Ot!==e||Dt!==t)&&(an=null,yi=ht()+500,Co(e,t));do try{f5();break}catch(s){oy(e,s)}while(!0);Hf(),Fs.current=i,De=o,xt!==null?t=0:(Ot=null,Dt=0,t=$t)}if(t!==0){if(t===2&&(o=fd(e),o!==0&&(n=o,t=Fd(e,o))),t===1)throw r=Nl,Co(e,0),Dn(e,n),or(e,ht()),r;if(t===6)Dn(e,n);else{if(o=e.current.alternate,!(n&30)&&!u5(o)&&(t=Vs(e,n),t===2&&(i=fd(e),i!==0&&(n=i,t=Fd(e,i))),t===1))throw r=Nl,Co(e,0),Dn(e,n),or(e,ht()),r;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(G(345));case 2:ao(e,Zt,an);break;case 3:if(Dn(e,n),(n&130023424)===n&&(t=ih+500-ht(),10<t)){if(Es(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){Ut(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=wd(ao.bind(null,e,Zt,an),t);break}ao(e,Zt,an);break;case 4:if(Dn(e,n),(n&4194240)===n)break;for(t=e.eventTimes,o=-1;0<n;){var l=31-Gr(n);i=1<<l,l=t[l],l>o&&(o=l),n&=~i}if(n=o,n=ht()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*c5(n/1960))-n,10<n){e.timeoutHandle=wd(ao.bind(null,e,Zt,an),n);break}ao(e,Zt,an);break;case 5:ao(e,Zt,an);break;default:throw Error(G(329))}}}return or(e,ht()),e.callbackNode===r?ny.bind(null,e):null}function Fd(e,t){var r=hl;return e.current.memoizedState.isDehydrated&&(Co(e,t).flags|=256),e=Vs(e,t),e!==2&&(t=Zt,Zt=r,t!==null&&Gd(t)),e}function Gd(e){Zt===null?Zt=e:Zt.push.apply(Zt,e)}function u5(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var o=r[n],i=o.getSnapshot;o=o.value;try{if(!Ur(i(),o))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dn(e,t){for(t&=~oh,t&=~xc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Gr(t),n=1<<r;e[r]=-1,t&=~n}}function h0(e){if(De&6)throw Error(G(327));ui();var t=Es(e,0);if(!(t&1))return or(e,ht()),null;var r=Vs(e,t);if(e.tag!==0&&r===2){var n=fd(e);n!==0&&(t=n,r=Fd(e,n))}if(r===1)throw r=Nl,Co(e,0),Dn(e,t),or(e,ht()),r;if(r===6)throw Error(G(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ao(e,Zt,an),or(e,ht()),null}function lh(e,t){var r=De;De|=1;try{return e(t)}finally{De=r,De===0&&(yi=ht()+500,mc&&ro())}}function _o(e){Nn!==null&&Nn.tag===0&&!(De&6)&&ui();var t=De;De|=1;var r=_r.transition,n=Be;try{if(_r.transition=null,Be=1,e)return e()}finally{Be=n,_r.transition=r,De=t,!(De&6)&&ro()}}function ah(){fr=ni.current,rt(ni)}function Co(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,F3(r)),xt!==null)for(r=xt.return;r!==null;){var n=r;switch(Gf(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Is();break;case 3:mi(),rt(rr),rt(Bt),Jf();break;case 5:Qf(n);break;case 4:mi();break;case 13:rt(st);break;case 19:rt(st);break;case 10:Uf(n.type._context);break;case 22:case 23:ah()}r=r.return}if(Ot=e,xt=e=Kn(e.current,null),Dt=fr=t,$t=0,Nl=null,oh=xc=Oo=0,Zt=hl=null,po!==null){for(t=0;t<po.length;t++)if(r=po[t],n=r.interleaved,n!==null){r.interleaved=null;var o=n.next,i=r.pending;if(i!==null){var l=i.next;i.next=o,n.next=l}r.pending=n}po=null}return e}function oy(e,t){do{var r=xt;try{if(Hf(),Xa.current=Ls,Ms){for(var n=ct.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}Ms=!1}if(ko=0,jt=St=ct=null,dl=!1,Al=0,nh.current=null,r===null||r.return===null){$t=1,Nl=t,xt=null;break}e:{var i=e,l=r.return,s=r,c=t;if(t=Dt,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=s,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var C=e0(l);if(C!==null){C.flags&=-257,t0(C,l,s,i,t),C.mode&1&&Zp(i,u,t),t=C,c=u;var x=t.updateQueue;if(x===null){var w=new Set;w.add(c),t.updateQueue=w}else x.add(c);break e}else{if(!(t&1)){Zp(i,u,t),sh();break e}c=Error(G(426))}}else if(lt&&s.mode&1){var v=e0(l);if(v!==null){!(v.flags&65536)&&(v.flags|=256),t0(v,l,s,i,t),Bf(gi(c,s));break e}}i=c=gi(c,s),$t!==4&&($t=2),hl===null?hl=[i]:hl.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var y=Gg(i,c,t);Wp(i,y);break e;case 1:s=c;var h=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof h.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Wn===null||!Wn.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var $=Bg(i,s,t);Wp(i,$);break e}}i=i.return}while(i!==null)}ay(r)}catch(E){t=E,xt===r&&r!==null&&(xt=r=r.return);continue}break}while(!0)}function iy(){var e=Fs.current;return Fs.current=Ls,e===null?Ls:e}function sh(){($t===0||$t===3||$t===2)&&($t=4),Ot===null||!(Oo&268435455)&&!(xc&268435455)||Dn(Ot,Dt)}function Vs(e,t){var r=De;De|=2;var n=iy();(Ot!==e||Dt!==t)&&(an=null,Co(e,t));do try{d5();break}catch(o){oy(e,o)}while(!0);if(Hf(),De=r,Fs.current=n,xt!==null)throw Error(G(261));return Ot=null,Dt=0,$t}function d5(){for(;xt!==null;)ly(xt)}function f5(){for(;xt!==null&&!Px();)ly(xt)}function ly(e){var t=cy(e.alternate,e,fr);e.memoizedProps=e.pendingProps,t===null?ay(e):xt=t,nh.current=null}function ay(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=i5(r,t),r!==null){r.flags&=32767,xt=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{$t=6,xt=null;return}}else if(r=o5(r,t,fr),r!==null){xt=r;return}if(t=t.sibling,t!==null){xt=t;return}xt=t=e}while(t!==null);$t===0&&($t=5)}function ao(e,t,r){var n=Be,o=_r.transition;try{_r.transition=null,Be=1,h5(e,t,r,n)}finally{_r.transition=o,Be=n}return null}function h5(e,t,r,n){do ui();while(Nn!==null);if(De&6)throw Error(G(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(G(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(qx(e,i),e===Ot&&(xt=Ot=null,Dt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Da||(Da=!0,uy(bs,function(){return ui(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=_r.transition,_r.transition=null;var l=Be;Be=1;var s=De;De|=4,nh.current=null,a5(e,r),ty(r,e),A3(vd),js=!!yd,vd=yd=null,e.current=r,s5(r),Mx(),De=s,Be=l,_r.transition=i}else e.current=r;if(Da&&(Da=!1,Nn=e,Bs=o),i=e.pendingLanes,i===0&&(Wn=null),Gx(r.stateNode),or(e,ht()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],n(o.value,{componentStack:o.stack,digest:o.digest});if(Gs)throw Gs=!1,e=Md,Md=null,e;return Bs&1&&e.tag!==0&&ui(),i=e.pendingLanes,i&1?e===Ld?pl++:(pl=0,Ld=e):pl=0,ro(),null}function ui(){if(Nn!==null){var e=F1(Bs),t=_r.transition,r=Be;try{if(_r.transition=null,Be=16>e?16:e,Nn===null)var n=!1;else{if(e=Nn,Nn=null,Bs=0,De&6)throw Error(G(331));var o=De;for(De|=4,X=e.current;X!==null;){var i=X,l=i.child;if(X.flags&16){var s=i.deletions;if(s!==null){for(var c=0;c<s.length;c++){var u=s[c];for(X=u;X!==null;){var d=X;switch(d.tag){case 0:case 11:case 15:fl(8,d,i)}var f=d.child;if(f!==null)f.return=d,X=f;else for(;X!==null;){d=X;var g=d.sibling,C=d.return;if(Yg(d),d===u){X=null;break}if(g!==null){g.return=C,X=g;break}X=C}}}var x=i.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var v=w.sibling;w.sibling=null,w=v}while(w!==null)}}X=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,X=l;else e:for(;X!==null;){if(i=X,i.flags&2048)switch(i.tag){case 0:case 11:case 15:fl(9,i,i.return)}var y=i.sibling;if(y!==null){y.return=i.return,X=y;break e}X=i.return}}var h=e.current;for(X=h;X!==null;){l=X;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,X=p;else e:for(l=h;X!==null;){if(s=X,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:vc(9,s)}}catch(E){dt(s,s.return,E)}if(s===l){X=null;break e}var $=s.sibling;if($!==null){$.return=s.return,X=$;break e}X=s.return}}if(De=o,ro(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(uc,e)}catch{}n=!0}return n}finally{Be=r,_r.transition=t}}return!1}function p0(e,t,r){t=gi(r,t),t=Gg(e,t,1),e=Un(e,t,1),t=Ut(),e!==null&&(Ql(e,1,t),or(e,t))}function dt(e,t,r){if(e.tag===3)p0(e,e,r);else for(;t!==null;){if(t.tag===3){p0(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Wn===null||!Wn.has(n))){e=gi(r,e),e=Bg(t,e,1),t=Un(t,e,1),e=Ut(),t!==null&&(Ql(t,1,e),or(t,e));break}}t=t.return}}function p5(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Ut(),e.pingedLanes|=e.suspendedLanes&r,Ot===e&&(Dt&r)===r&&($t===4||$t===3&&(Dt&130023424)===Dt&&500>ht()-ih?Co(e,0):oh|=r),or(e,t)}function sy(e,t){t===0&&(e.mode&1?(t=ba,ba<<=1,!(ba&130023424)&&(ba=4194304)):t=1);var r=Ut();e=mn(e,t),e!==null&&(Ql(e,t,r),or(e,r))}function m5(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),sy(e,r)}function g5(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(G(314))}n!==null&&n.delete(t),sy(e,r)}var cy;cy=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||rr.current)er=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return er=!1,n5(e,t,r);er=!!(e.flags&131072)}else er=!1,lt&&t.flags&1048576&&fg(t,As,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Za(e,t),e=t.pendingProps;var o=fi(t,Bt.current);ci(t,r),o=Yf(null,t,n,e,o,r);var i=Zf();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,nr(n)?(i=!0,Rs(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,qf(t),o.updater=gc,t.stateNode=o,o._reactInternals=t,kd(t,n,e,r),t=Id(null,t,n,!0,i,r)):(t.tag=0,lt&&i&&Ff(t),Vt(null,t,o,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Za(e,t),e=t.pendingProps,o=n._init,n=o(n._payload),t.type=n,o=t.tag=v5(n),e=Mr(n,e),o){case 0:t=_d(null,t,n,e,r);break e;case 1:t=o0(null,t,n,e,r);break e;case 11:t=r0(null,t,n,e,r);break e;case 14:t=n0(null,t,n,Mr(n.type,e),r);break e}throw Error(G(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Mr(n,o),_d(e,t,n,o,r);case 1:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Mr(n,o),o0(e,t,n,o,r);case 3:e:{if(Wg(t),e===null)throw Error(G(387));n=t.pendingProps,i=t.memoizedState,o=i.element,gg(e,t),Ns(t,n,null,r);var l=t.memoizedState;if(n=l.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=gi(Error(G(423)),t),t=i0(e,t,n,r,o);break e}else if(n!==o){o=gi(Error(G(424)),t),t=i0(e,t,n,r,o);break e}else for(yr=Hn(t.stateNode.containerInfo.firstChild),vr=t,lt=!0,Fr=null,r=wg(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(hi(),n===o){t=gn(e,t,r);break e}Vt(e,t,n,r)}t=t.child}return t;case 5:return Cg(t),e===null&&bd(t),n=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,xd(n,o)?l=null:i!==null&&xd(n,i)&&(t.flags|=32),Ug(e,t),Vt(e,t,l,r),t.child;case 6:return e===null&&bd(t),null;case 13:return qg(e,t,r);case 4:return Kf(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=pi(t,null,n,r):Vt(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Mr(n,o),r0(e,t,n,o,r);case 7:return Vt(e,t,t.pendingProps,r),t.child;case 8:return Vt(e,t,t.pendingProps.children,r),t.child;case 12:return Vt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,Ke(Ds,n._currentValue),n._currentValue=l,i!==null)if(Ur(i.value,l)){if(i.children===o.children&&!rr.current){t=gn(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var c=s.firstContext;c!==null;){if(c.context===n){if(i.tag===1){c=fn(-1,r&-r),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}i.lanes|=r,c=i.alternate,c!==null&&(c.lanes|=r),Ed(i.return,r,t),s.lanes|=r;break}c=c.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(G(341));l.lanes|=r,s=l.alternate,s!==null&&(s.lanes|=r),Ed(l,r,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Vt(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,ci(t,r),o=Rr(o),n=n(o),t.flags|=1,Vt(e,t,n,r),t.child;case 14:return n=t.type,o=Mr(n,t.pendingProps),o=Mr(n.type,o),n0(e,t,n,o,r);case 15:return Vg(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Mr(n,o),Za(e,t),t.tag=1,nr(n)?(e=!0,Rs(t)):e=!1,ci(t,r),vg(t,n,o),kd(t,n,o,r),Id(null,t,n,!0,e,r);case 19:return Kg(e,t,r);case 22:return Hg(e,t,r)}throw Error(G(156,t.tag))};function uy(e,t){return N1(e,t)}function y5(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Or(e,t,r,n){return new y5(e,t,r,n)}function ch(e){return e=e.prototype,!(!e||!e.isReactComponent)}function v5(e){if(typeof e=="function")return ch(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Of)return 11;if(e===_f)return 14}return 2}function Kn(e,t){var r=e.alternate;return r===null?(r=Or(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function rs(e,t,r,n,o,i){var l=2;if(n=e,typeof e=="function")ch(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case qo:return So(r.children,o,i,t);case kf:l=8,o|=8;break;case Xu:return e=Or(12,r,t,o|2),e.elementType=Xu,e.lanes=i,e;case Yu:return e=Or(13,r,t,o),e.elementType=Yu,e.lanes=i,e;case Zu:return e=Or(19,r,t,o),e.elementType=Zu,e.lanes=i,e;case x1:return wc(r,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case y1:l=10;break e;case v1:l=9;break e;case Of:l=11;break e;case _f:l=14;break e;case Rn:l=16,n=null;break e}throw Error(G(130,e==null?e:typeof e,""))}return t=Or(l,r,t,o),t.elementType=e,t.type=n,t.lanes=i,t}function So(e,t,r,n){return e=Or(7,e,n,t),e.lanes=r,e}function wc(e,t,r,n){return e=Or(22,e,n,t),e.elementType=x1,e.lanes=r,e.stateNode={isHidden:!1},e}function $u(e,t,r){return e=Or(6,e,null,t),e.lanes=r,e}function bu(e,t,r){return t=Or(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function x5(e,t,r,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ou(0),this.expirationTimes=ou(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ou(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function uh(e,t,r,n,o,i,l,s,c){return e=new x5(e,t,r,s,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Or(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},qf(i),e}function w5(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wo,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function dy(e){if(!e)return Zn;e=e._reactInternals;e:{if(Do(e)!==e||e.tag!==1)throw Error(G(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(nr(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(G(171))}if(e.tag===1){var r=e.type;if(nr(r))return ug(e,r,t)}return t}function fy(e,t,r,n,o,i,l,s,c){return e=uh(r,n,!0,e,o,i,l,s,c),e.context=dy(null),r=e.current,n=Ut(),o=qn(r),i=fn(n,o),i.callback=t??null,Un(r,i,o),e.current.lanes=o,Ql(e,o,n),or(e,n),e}function Cc(e,t,r,n){var o=t.current,i=Ut(),l=qn(o);return r=dy(r),t.context===null?t.context=r:t.pendingContext=r,t=fn(i,l),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Un(o,t,l),e!==null&&(Br(e,o,l,i),Ja(e,o,l)),l}function Hs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function m0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function dh(e,t){m0(e,t),(e=e.alternate)&&m0(e,t)}function C5(){return null}var hy=typeof reportError=="function"?reportError:function(e){console.error(e)};function fh(e){this._internalRoot=e}Sc.prototype.render=fh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(G(409));Cc(e,t,null,null)};Sc.prototype.unmount=fh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_o(function(){Cc(null,e,null,null)}),t[pn]=null}};function Sc(e){this._internalRoot=e}Sc.prototype.unstable_scheduleHydration=function(e){if(e){var t=V1();e={blockedOn:null,target:e,priority:t};for(var r=0;r<An.length&&t!==0&&t<An[r].priority;r++);An.splice(r,0,e),r===0&&U1(e)}};function hh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function g0(){}function S5(e,t,r,n,o){if(o){if(typeof n=="function"){var i=n;n=function(){var u=Hs(l);i.call(u)}}var l=fy(t,n,e,0,null,!1,!1,"",g0);return e._reactRootContainer=l,e[pn]=l.current,Ol(e.nodeType===8?e.parentNode:e),_o(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof n=="function"){var s=n;n=function(){var u=Hs(c);s.call(u)}}var c=uh(e,0,!1,null,null,!1,!1,"",g0);return e._reactRootContainer=c,e[pn]=c.current,Ol(e.nodeType===8?e.parentNode:e),_o(function(){Cc(t,c,r,n)}),c}function bc(e,t,r,n,o){var i=r._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var c=Hs(l);s.call(c)}}Cc(t,l,e,o)}else l=S5(r,t,e,o,n);return Hs(l)}G1=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Ji(t.pendingLanes);r!==0&&(Tf(t,r|1),or(t,ht()),!(De&6)&&(yi=ht()+500,ro()))}break;case 13:_o(function(){var n=mn(e,1);if(n!==null){var o=Ut();Br(n,e,1,o)}}),dh(e,1)}};Af=function(e){if(e.tag===13){var t=mn(e,134217728);if(t!==null){var r=Ut();Br(t,e,134217728,r)}dh(e,134217728)}};B1=function(e){if(e.tag===13){var t=qn(e),r=mn(e,t);if(r!==null){var n=Ut();Br(r,e,t,n)}dh(e,t)}};V1=function(){return Be};H1=function(e,t){var r=Be;try{return Be=e,t()}finally{Be=r}};cd=function(e,t,r){switch(t){case"input":if(rd(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=pc(n);if(!o)throw Error(G(90));C1(n),rd(n,o)}}}break;case"textarea":$1(e,r);break;case"select":t=r.value,t!=null&&ii(e,!!r.multiple,t,!1)}};I1=lh;R1=_o;var $5={usingClientEntryPoint:!1,Events:[Xl,Xo,pc,O1,_1,lh]},Wi={findFiberByHostInstance:ho,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},b5={bundleType:Wi.bundleType,version:Wi.version,rendererPackageName:Wi.rendererPackageName,rendererConfig:Wi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=D1(e),e===null?null:e.stateNode},findFiberByHostInstance:Wi.findFiberByHostInstance||C5,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var za=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!za.isDisabled&&za.supportsFiber)try{uc=za.inject(b5),rn=za}catch{}}Cr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$5;Cr.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hh(t))throw Error(G(200));return w5(e,t,null,r)};Cr.createRoot=function(e,t){if(!hh(e))throw Error(G(299));var r=!1,n="",o=hy;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=uh(e,1,!1,null,null,r,!1,n,o),e[pn]=t.current,Ol(e.nodeType===8?e.parentNode:e),new fh(t)};Cr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(G(188)):(e=Object.keys(e).join(","),Error(G(268,e)));return e=D1(t),e=e===null?null:e.stateNode,e};Cr.flushSync=function(e){return _o(e)};Cr.hydrate=function(e,t,r){if(!$c(t))throw Error(G(200));return bc(null,e,t,!0,r)};Cr.hydrateRoot=function(e,t,r){if(!hh(e))throw Error(G(405));var n=r!=null&&r.hydratedSources||null,o=!1,i="",l=hy;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),t=fy(t,null,e,1,r??null,o,!1,i,l),e[pn]=t.current,Ol(e),n)for(e=0;e<n.length;e++)r=n[e],o=r._getVersion,o=o(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new Sc(t)};Cr.render=function(e,t,r){if(!$c(t))throw Error(G(200));return bc(null,e,t,!1,r)};Cr.unmountComponentAtNode=function(e){if(!$c(e))throw Error(G(40));return e._reactRootContainer?(_o(function(){bc(null,null,e,!1,function(){e._reactRootContainer=null,e[pn]=null})}),!0):!1};Cr.unstable_batchedUpdates=lh;Cr.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!$c(r))throw Error(G(200));if(e==null||e._reactInternals===void 0)throw Error(G(38));return bc(e,t,r,!1,n)};Cr.version="18.2.0-next-9e3b772b8-20220608";function py(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(py)}catch(e){console.error(e)}}py(),f1.exports=Cr;var E5=f1.exports,y0=E5;Qu.createRoot=y0.createRoot,Qu.hydrateRoot=y0.hydrateRoot;/**
 * @remix-run/router v1.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pl(){return Pl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Pl.apply(this,arguments)}var Pn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Pn||(Pn={}));const v0="popstate";function j5(e){e===void 0&&(e={});function t(n,o){let{pathname:i,search:l,hash:s}=n.location;return Bd("",{pathname:i,search:l,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(n,o){return typeof o=="string"?o:Us(o)}return O5(t,r,null,e)}function wt(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ph(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function k5(){return Math.random().toString(36).substr(2,8)}function x0(e,t){return{usr:e.state,key:e.key,idx:t}}function Bd(e,t,r,n){return r===void 0&&(r=null),Pl({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ki(t):t,{state:r,key:t&&t.key||n||k5()})}function Us(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function ki(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function O5(e,t,r,n){n===void 0&&(n={});let{window:o=document.defaultView,v5Compat:i=!1}=n,l=o.history,s=Pn.Pop,c=null,u=d();u==null&&(u=0,l.replaceState(Pl({},l.state,{idx:u}),""));function d(){return(l.state||{idx:null}).idx}function f(){s=Pn.Pop;let v=d(),y=v==null?null:v-u;u=v,c&&c({action:s,location:w.location,delta:y})}function g(v,y){s=Pn.Push;let h=Bd(w.location,v,y);u=d()+1;let p=x0(h,u),$=w.createHref(h);try{l.pushState(p,"",$)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;o.location.assign($)}i&&c&&c({action:s,location:w.location,delta:1})}function C(v,y){s=Pn.Replace;let h=Bd(w.location,v,y);u=d();let p=x0(h,u),$=w.createHref(h);l.replaceState(p,"",$),i&&c&&c({action:s,location:w.location,delta:0})}function x(v){let y=o.location.origin!=="null"?o.location.origin:o.location.href,h=typeof v=="string"?v:Us(v);return wt(y,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,y)}let w={get action(){return s},get location(){return e(o,l)},listen(v){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(v0,f),c=v,()=>{o.removeEventListener(v0,f),c=null}},createHref(v){return t(o,v)},createURL:x,encodeLocation(v){let y=x(v);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:g,replace:C,go(v){return l.go(v)}};return w}var w0;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(w0||(w0={}));function _5(e,t,r){r===void 0&&(r="/");let n=typeof t=="string"?ki(t):t,o=mh(n.pathname||"/",r);if(o==null)return null;let i=my(e);I5(i);let l=null;for(let s=0;l==null&&s<i.length;++s)l=L5(i[s],B5(o));return l}function my(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let o=(i,l,s)=>{let c={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};c.relativePath.startsWith("/")&&(wt(c.relativePath.startsWith(n),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(n.length));let u=Qn([n,c.relativePath]),d=r.concat(c);i.children&&i.children.length>0&&(wt(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),my(i.children,t,d,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:P5(u,i.index),routesMeta:d})};return e.forEach((i,l)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,l);else for(let c of gy(i.path))o(i,l,c)}),t}function gy(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,o=r.endsWith("?"),i=r.replace(/\?$/,"");if(n.length===0)return o?[i,""]:[i];let l=gy(n.join("/")),s=[];return s.push(...l.map(c=>c===""?i:[i,c].join("/"))),o&&s.push(...l),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function I5(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:M5(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const R5=/^:[\w-]+$/,T5=3,A5=2,D5=1,z5=10,N5=-2,C0=e=>e==="*";function P5(e,t){let r=e.split("/"),n=r.length;return r.some(C0)&&(n+=N5),t&&(n+=A5),r.filter(o=>!C0(o)).reduce((o,i)=>o+(R5.test(i)?T5:i===""?D5:z5),n)}function M5(e,t){return e.length===t.length&&e.slice(0,-1).every((n,o)=>n===t[o])?e[e.length-1]-t[t.length-1]:0}function L5(e,t){let{routesMeta:r}=e,n={},o="/",i=[];for(let l=0;l<r.length;++l){let s=r[l],c=l===r.length-1,u=o==="/"?t:t.slice(o.length)||"/",d=F5({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},u);if(!d)return null;Object.assign(n,d.params);let f=s.route;i.push({params:n,pathname:Qn([o,d.pathname]),pathnameBase:q5(Qn([o,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(o=Qn([o,d.pathnameBase]))}return i}function F5(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=G5(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:n.reduce((u,d,f)=>{let{paramName:g,isOptional:C}=d;if(g==="*"){let w=s[f]||"";l=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const x=s[f];return C&&!x?u[g]=void 0:u[g]=V5(x||"",g),u},{}),pathname:i,pathnameBase:l,pattern:e}}function G5(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),ph(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,c)=>(n.push({paramName:s,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}function B5(e){try{return decodeURI(e)}catch(t){return ph(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function V5(e,t){try{return decodeURIComponent(e)}catch(r){return ph(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),e}}function mh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function H5(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:o=""}=typeof e=="string"?ki(e):e;return{pathname:r?r.startsWith("/")?r:U5(r,t):t,search:K5(n),hash:Q5(o)}}function U5(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function Eu(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function W5(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function yy(e,t){let r=W5(e);return t?r.map((n,o)=>o===e.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function vy(e,t,r,n){n===void 0&&(n=!1);let o;typeof e=="string"?o=ki(e):(o=Pl({},e),wt(!o.pathname||!o.pathname.includes("?"),Eu("?","pathname","search",o)),wt(!o.pathname||!o.pathname.includes("#"),Eu("#","pathname","hash",o)),wt(!o.search||!o.search.includes("#"),Eu("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,s;if(l==null)s=r;else{let f=t.length-1;if(!n&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),f-=1;o.pathname=g.join("/")}s=f>=0?t[f]:"/"}let c=H5(o,s),u=l&&l!=="/"&&l.endsWith("/"),d=(i||l===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const Qn=e=>e.join("/").replace(/\/\/+/g,"/"),q5=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),K5=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Q5=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function J5(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const xy=["post","put","patch","delete"];new Set(xy);const X5=["get",...xy];new Set(X5);/**
 * React Router v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ml(){return Ml=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ml.apply(this,arguments)}const gh=j.createContext(null),Y5=j.createContext(null),zo=j.createContext(null),Ec=j.createContext(null),wn=j.createContext({outlet:null,matches:[],isDataRoute:!1}),wy=j.createContext(null);function Z5(e,t){let{relative:r}=t===void 0?{}:t;Zl()||wt(!1);let{basename:n,navigator:o}=j.useContext(zo),{hash:i,pathname:l,search:s}=$y(e,{relative:r}),c=l;return n!=="/"&&(c=l==="/"?n:Qn([n,l])),o.createHref({pathname:c,search:s,hash:i})}function Zl(){return j.useContext(Ec)!=null}function No(){return Zl()||wt(!1),j.useContext(Ec).location}function Cy(e){j.useContext(zo).static||j.useLayoutEffect(e)}function ea(){let{isDataRoute:e}=j.useContext(wn);return e?p4():e4()}function e4(){Zl()||wt(!1);let e=j.useContext(gh),{basename:t,future:r,navigator:n}=j.useContext(zo),{matches:o}=j.useContext(wn),{pathname:i}=No(),l=JSON.stringify(yy(o,r.v7_relativeSplatPath)),s=j.useRef(!1);return Cy(()=>{s.current=!0}),j.useCallback(function(u,d){if(d===void 0&&(d={}),!s.current)return;if(typeof u=="number"){n.go(u);return}let f=vy(u,JSON.parse(l),i,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Qn([t,f.pathname])),(d.replace?n.replace:n.push)(f,d.state,d)},[t,n,l,i,e])}const t4=j.createContext(null);function r4(e){let t=j.useContext(wn).outlet;return t&&j.createElement(t4.Provider,{value:e},t)}function Sy(){let{matches:e}=j.useContext(wn),t=e[e.length-1];return t?t.params:{}}function $y(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=j.useContext(zo),{matches:o}=j.useContext(wn),{pathname:i}=No(),l=JSON.stringify(yy(o,n.v7_relativeSplatPath));return j.useMemo(()=>vy(e,JSON.parse(l),i,r==="path"),[e,l,i,r])}function n4(e,t){return o4(e,t)}function o4(e,t,r,n){Zl()||wt(!1);let{navigator:o}=j.useContext(zo),{matches:i}=j.useContext(wn),l=i[i.length-1],s=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let u=No(),d;if(t){var f;let v=typeof t=="string"?ki(t):t;c==="/"||(f=v.pathname)!=null&&f.startsWith(c)||wt(!1),d=v}else d=u;let g=d.pathname||"/",C=c==="/"?g:g.slice(c.length)||"/",x=_5(e,{pathname:C}),w=c4(x&&x.map(v=>Object.assign({},v,{params:Object.assign({},s,v.params),pathname:Qn([c,o.encodeLocation?o.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?c:Qn([c,o.encodeLocation?o.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,r,n);return t&&w?j.createElement(Ec.Provider,{value:{location:Ml({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Pn.Pop}},w):w}function i4(){let e=h4(),t=J5(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),r?j.createElement("pre",{style:o},r):null,null)}const l4=j.createElement(i4,null);class a4 extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?j.createElement(wn.Provider,{value:this.props.routeContext},j.createElement(wy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function s4(e){let{routeContext:t,match:r,children:n}=e,o=j.useContext(gh);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),j.createElement(wn.Provider,{value:t},n)}function c4(e,t,r,n){var o;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var i;if((i=r)!=null&&i.errors)e=r.matches;else return null}let l=e,s=(o=r)==null?void 0:o.errors;if(s!=null){let d=l.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id]));d>=0||wt(!1),l=l.slice(0,Math.min(l.length,d+1))}let c=!1,u=-1;if(r&&n&&n.v7_partialHydration)for(let d=0;d<l.length;d++){let f=l[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:g,errors:C}=r,x=f.route.loader&&g[f.route.id]===void 0&&(!C||C[f.route.id]===void 0);if(f.route.lazy||x){c=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((d,f,g)=>{let C,x=!1,w=null,v=null;r&&(C=s&&f.route.id?s[f.route.id]:void 0,w=f.route.errorElement||l4,c&&(u<0&&g===0?(x=!0,v=null):u===g&&(x=!0,v=f.route.hydrateFallbackElement||null)));let y=t.concat(l.slice(0,g+1)),h=()=>{let p;return C?p=w:x?p=v:f.route.Component?p=j.createElement(f.route.Component,null):f.route.element?p=f.route.element:p=d,j.createElement(s4,{match:f,routeContext:{outlet:d,matches:y,isDataRoute:r!=null},children:p})};return r&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?j.createElement(a4,{location:r.location,revalidation:r.revalidation,component:w,error:C,children:h(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):h()},null)}var by=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(by||{}),Ws=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ws||{});function u4(e){let t=j.useContext(gh);return t||wt(!1),t}function d4(e){let t=j.useContext(Y5);return t||wt(!1),t}function f4(e){let t=j.useContext(wn);return t||wt(!1),t}function Ey(e){let t=f4(),r=t.matches[t.matches.length-1];return r.route.id||wt(!1),r.route.id}function h4(){var e;let t=j.useContext(wy),r=d4(Ws.UseRouteError),n=Ey(Ws.UseRouteError);return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function p4(){let{router:e}=u4(by.UseNavigateStable),t=Ey(Ws.UseNavigateStable),r=j.useRef(!1);return Cy(()=>{r.current=!0}),j.useCallback(function(o,i){i===void 0&&(i={}),r.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Ml({fromRouteId:t},i)))},[e,t])}function m4(e){return r4(e.context)}function Ne(e){wt(!1)}function g4(e){let{basename:t="/",children:r=null,location:n,navigationType:o=Pn.Pop,navigator:i,static:l=!1,future:s}=e;Zl()&&wt(!1);let c=t.replace(/^\/*/,"/"),u=j.useMemo(()=>({basename:c,navigator:i,static:l,future:Ml({v7_relativeSplatPath:!1},s)}),[c,s,i,l]);typeof n=="string"&&(n=ki(n));let{pathname:d="/",search:f="",hash:g="",state:C=null,key:x="default"}=n,w=j.useMemo(()=>{let v=mh(d,c);return v==null?null:{location:{pathname:v,search:f,hash:g,state:C,key:x},navigationType:o}},[c,d,f,g,C,x,o]);return w==null?null:j.createElement(zo.Provider,{value:u},j.createElement(Ec.Provider,{children:r,value:w}))}function y4(e){let{children:t,location:r}=e;return n4(Vd(t),r)}new Promise(()=>{});function Vd(e,t){t===void 0&&(t=[]);let r=[];return j.Children.forEach(e,(n,o)=>{if(!j.isValidElement(n))return;let i=[...t,o];if(n.type===j.Fragment){r.push.apply(r,Vd(n.props.children,i));return}n.type!==Ne&&wt(!1),!n.props.index||!n.props.children||wt(!1);let l={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(l.children=Vd(n.props.children,i)),r.push(l)}),r}/**
 * React Router DOM v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hd(){return Hd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Hd.apply(this,arguments)}function v4(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function x4(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function w4(e,t){return e.button===0&&(!t||t==="_self")&&!x4(e)}function Ud(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let n=e[r];return t.concat(Array.isArray(n)?n.map(o=>[r,o]):[[r,n]])},[]))}function C4(e,t){let r=Ud(e);return t&&t.forEach((n,o)=>{r.has(o)||t.getAll(o).forEach(i=>{r.append(o,i)})}),r}const S4=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],$4="startTransition",S0=mx[$4];function b4(e){let{basename:t,children:r,future:n,window:o}=e,i=j.useRef();i.current==null&&(i.current=j5({window:o,v5Compat:!0}));let l=i.current,[s,c]=j.useState({action:l.action,location:l.location}),{v7_startTransition:u}=n||{},d=j.useCallback(f=>{u&&S0?S0(()=>c(f)):c(f)},[c,u]);return j.useLayoutEffect(()=>l.listen(d),[l,d]),j.createElement(g4,{basename:t,children:r,location:s.location,navigationType:s.action,navigator:l,future:n})}const E4=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",j4=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Po=j.forwardRef(function(t,r){let{onClick:n,relative:o,reloadDocument:i,replace:l,state:s,target:c,to:u,preventScrollReset:d,unstable_viewTransition:f}=t,g=v4(t,S4),{basename:C}=j.useContext(zo),x,w=!1;if(typeof u=="string"&&j4.test(u)&&(x=u,E4))try{let p=new URL(window.location.href),$=u.startsWith("//")?new URL(p.protocol+u):new URL(u),E=mh($.pathname,C);$.origin===p.origin&&E!=null?u=E+$.search+$.hash:w=!0}catch{}let v=Z5(u,{relative:o}),y=k4(u,{replace:l,state:s,target:c,preventScrollReset:d,relative:o,unstable_viewTransition:f});function h(p){n&&n(p),p.defaultPrevented||y(p)}return j.createElement("a",Hd({},g,{href:x||v,onClick:w||i?n:h,ref:r,target:c}))});var $0;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})($0||($0={}));var b0;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(b0||(b0={}));function k4(e,t){let{target:r,replace:n,state:o,preventScrollReset:i,relative:l,unstable_viewTransition:s}=t===void 0?{}:t,c=ea(),u=No(),d=$y(e,{relative:l});return j.useCallback(f=>{if(w4(f,r)){f.preventDefault();let g=n!==void 0?n:Us(u)===Us(d);c(e,{replace:g,state:o,preventScrollReset:i,relative:l,unstable_viewTransition:s})}},[u,c,d,n,o,r,e,i,l,s])}function O4(e){let t=j.useRef(Ud(e)),r=j.useRef(!1),n=No(),o=j.useMemo(()=>C4(n.search,r.current?null:t.current),[n.search]),i=ea(),l=j.useCallback((s,c)=>{const u=Ud(typeof s=="function"?s(o):s);r.current=!0,i("?"+u,c)},[i,o]);return[o,l]}var Gt=function(){return Gt=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},Gt.apply(this,arguments)};function Ll(e,t,r){if(r||arguments.length===2)for(var n=0,o=t.length,i;n<o;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}var et="-ms-",ml="-moz-",Le="-webkit-",jy="comm",jc="rule",yh="decl",_4="@import",ky="@keyframes",I4="@layer",R4=Math.abs,vh=String.fromCharCode,Wd=Object.assign;function T4(e,t){return kt(e,0)^45?(((t<<2^kt(e,0))<<2^kt(e,1))<<2^kt(e,2))<<2^kt(e,3):0}function Oy(e){return e.trim()}function sn(e,t){return(e=t.exec(e))?e[0]:e}function ke(e,t,r){return e.replace(t,r)}function ns(e,t){return e.indexOf(t)}function kt(e,t){return e.charCodeAt(t)|0}function vi(e,t,r){return e.slice(t,r)}function en(e){return e.length}function _y(e){return e.length}function Yi(e,t){return t.push(e),e}function A4(e,t){return e.map(t).join("")}function E0(e,t){return e.filter(function(r){return!sn(r,t)})}var kc=1,xi=1,Iy=0,Ar=0,vt=0,Oi="";function Oc(e,t,r,n,o,i,l,s){return{value:e,root:t,parent:r,type:n,props:o,children:i,line:kc,column:xi,length:l,return:"",siblings:s}}function On(e,t){return Wd(Oc("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Ho(e){for(;e.root;)e=On(e.root,{children:[e]});Yi(e,e.siblings)}function D4(){return vt}function z4(){return vt=Ar>0?kt(Oi,--Ar):0,xi--,vt===10&&(xi=1,kc--),vt}function Vr(){return vt=Ar<Iy?kt(Oi,Ar++):0,xi++,vt===10&&(xi=1,kc++),vt}function $o(){return kt(Oi,Ar)}function os(){return Ar}function _c(e,t){return vi(Oi,e,t)}function qd(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function N4(e){return kc=xi=1,Iy=en(Oi=e),Ar=0,[]}function P4(e){return Oi="",e}function ju(e){return Oy(_c(Ar-1,Kd(e===91?e+2:e===40?e+1:e)))}function M4(e){for(;(vt=$o())&&vt<33;)Vr();return qd(e)>2||qd(vt)>3?"":" "}function L4(e,t){for(;--t&&Vr()&&!(vt<48||vt>102||vt>57&&vt<65||vt>70&&vt<97););return _c(e,os()+(t<6&&$o()==32&&Vr()==32))}function Kd(e){for(;Vr();)switch(vt){case e:return Ar;case 34:case 39:e!==34&&e!==39&&Kd(vt);break;case 40:e===41&&Kd(e);break;case 92:Vr();break}return Ar}function F4(e,t){for(;Vr()&&e+vt!==57;)if(e+vt===84&&$o()===47)break;return"/*"+_c(t,Ar-1)+"*"+vh(e===47?e:Vr())}function G4(e){for(;!qd($o());)Vr();return _c(e,Ar)}function B4(e){return P4(is("",null,null,null,[""],e=N4(e),0,[0],e))}function is(e,t,r,n,o,i,l,s,c){for(var u=0,d=0,f=l,g=0,C=0,x=0,w=1,v=1,y=1,h=0,p="",$=o,E=i,k=n,O=p;v;)switch(x=h,h=Vr()){case 40:if(x!=108&&kt(O,f-1)==58){ns(O+=ke(ju(h),"&","&\f"),"&\f")!=-1&&(y=-1);break}case 34:case 39:case 91:O+=ju(h);break;case 9:case 10:case 13:case 32:O+=M4(x);break;case 92:O+=L4(os()-1,7);continue;case 47:switch($o()){case 42:case 47:Yi(V4(F4(Vr(),os()),t,r,c),c);break;default:O+="/"}break;case 123*w:s[u++]=en(O)*y;case 125*w:case 59:case 0:switch(h){case 0:case 125:v=0;case 59+d:y==-1&&(O=ke(O,/\f/g,"")),C>0&&en(O)-f&&Yi(C>32?k0(O+";",n,r,f-1,c):k0(ke(O," ","")+";",n,r,f-2,c),c);break;case 59:O+=";";default:if(Yi(k=j0(O,t,r,u,d,o,s,p,$=[],E=[],f,i),i),h===123)if(d===0)is(O,t,k,k,$,i,f,s,E);else switch(g===99&&kt(O,3)===110?100:g){case 100:case 108:case 109:case 115:is(e,k,k,n&&Yi(j0(e,k,k,0,0,o,s,p,o,$=[],f,E),E),o,E,f,s,n?$:E);break;default:is(O,k,k,k,[""],E,0,s,E)}}u=d=C=0,w=y=1,p=O="",f=l;break;case 58:f=1+en(O),C=x;default:if(w<1){if(h==123)--w;else if(h==125&&w++==0&&z4()==125)continue}switch(O+=vh(h),h*w){case 38:y=d>0?1:(O+="\f",-1);break;case 44:s[u++]=(en(O)-1)*y,y=1;break;case 64:$o()===45&&(O+=ju(Vr())),g=$o(),d=f=en(p=O+=G4(os())),h++;break;case 45:x===45&&en(O)==2&&(w=0)}}return i}function j0(e,t,r,n,o,i,l,s,c,u,d,f){for(var g=o-1,C=o===0?i:[""],x=_y(C),w=0,v=0,y=0;w<n;++w)for(var h=0,p=vi(e,g+1,g=R4(v=l[w])),$=e;h<x;++h)($=Oy(v>0?C[h]+" "+p:ke(p,/&\f/g,C[h])))&&(c[y++]=$);return Oc(e,t,r,o===0?jc:s,c,u,d,f)}function V4(e,t,r,n){return Oc(e,t,r,jy,vh(D4()),vi(e,2,-2),0,n)}function k0(e,t,r,n,o){return Oc(e,t,r,yh,vi(e,0,n),vi(e,n+1,-1),n,o)}function Ry(e,t,r){switch(T4(e,t)){case 5103:return Le+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Le+e+e;case 4789:return ml+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Le+e+ml+e+et+e+e;case 5936:switch(kt(e,t+11)){case 114:return Le+e+et+ke(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Le+e+et+ke(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Le+e+et+ke(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Le+e+et+e+e;case 6165:return Le+e+et+"flex-"+e+e;case 5187:return Le+e+ke(e,/(\w+).+(:[^]+)/,Le+"box-$1$2"+et+"flex-$1$2")+e;case 5443:return Le+e+et+"flex-item-"+ke(e,/flex-|-self/g,"")+(sn(e,/flex-|baseline/)?"":et+"grid-row-"+ke(e,/flex-|-self/g,""))+e;case 4675:return Le+e+et+"flex-line-pack"+ke(e,/align-content|flex-|-self/g,"")+e;case 5548:return Le+e+et+ke(e,"shrink","negative")+e;case 5292:return Le+e+et+ke(e,"basis","preferred-size")+e;case 6060:return Le+"box-"+ke(e,"-grow","")+Le+e+et+ke(e,"grow","positive")+e;case 4554:return Le+ke(e,/([^-])(transform)/g,"$1"+Le+"$2")+e;case 6187:return ke(ke(ke(e,/(zoom-|grab)/,Le+"$1"),/(image-set)/,Le+"$1"),e,"")+e;case 5495:case 3959:return ke(e,/(image-set\([^]*)/,Le+"$1$`$1");case 4968:return ke(ke(e,/(.+:)(flex-)?(.*)/,Le+"box-pack:$3"+et+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Le+e+e;case 4200:if(!sn(e,/flex-|baseline/))return et+"grid-column-align"+vi(e,t)+e;break;case 2592:case 3360:return et+ke(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,o){return t=o,sn(n.props,/grid-\w+-end/)})?~ns(e+(r=r[t].value),"span")?e:et+ke(e,"-start","")+e+et+"grid-row-span:"+(~ns(r,"span")?sn(r,/\d+/):+sn(r,/\d+/)-+sn(e,/\d+/))+";":et+ke(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return sn(n.props,/grid-\w+-start/)})?e:et+ke(ke(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ke(e,/(.+)-inline(.+)/,Le+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(en(e)-1-t>6)switch(kt(e,t+1)){case 109:if(kt(e,t+4)!==45)break;case 102:return ke(e,/(.+:)(.+)-([^]+)/,"$1"+Le+"$2-$3$1"+ml+(kt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ns(e,"stretch")?Ry(ke(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return ke(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,i,l,s,c,u){return et+o+":"+i+u+(l?et+o+"-span:"+(s?c:+c-+i)+u:"")+e});case 4949:if(kt(e,t+6)===121)return ke(e,":",":"+Le)+e;break;case 6444:switch(kt(e,kt(e,14)===45?18:11)){case 120:return ke(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Le+(kt(e,14)===45?"inline-":"")+"box$3$1"+Le+"$2$3$1"+et+"$2box$3")+e;case 100:return ke(e,":",":"+et)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ke(e,"scroll-","scroll-snap-")+e}return e}function qs(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function H4(e,t,r,n){switch(e.type){case I4:if(e.children.length)break;case _4:case yh:return e.return=e.return||e.value;case jy:return"";case ky:return e.return=e.value+"{"+qs(e.children,n)+"}";case jc:if(!en(e.value=e.props.join(",")))return""}return en(r=qs(e.children,n))?e.return=e.value+"{"+r+"}":""}function U4(e){var t=_y(e);return function(r,n,o,i){for(var l="",s=0;s<t;s++)l+=e[s](r,n,o,i)||"";return l}}function W4(e){return function(t){t.root||(t=t.return)&&e(t)}}function q4(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case yh:e.return=Ry(e.value,e.length,r);return;case ky:return qs([On(e,{value:ke(e.value,"@","@"+Le)})],n);case jc:if(e.length)return A4(r=e.props,function(o){switch(sn(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ho(On(e,{props:[ke(o,/:(read-\w+)/,":"+ml+"$1")]})),Ho(On(e,{props:[o]})),Wd(e,{props:E0(r,n)});break;case"::placeholder":Ho(On(e,{props:[ke(o,/:(plac\w+)/,":"+Le+"input-$1")]})),Ho(On(e,{props:[ke(o,/:(plac\w+)/,":"+ml+"$1")]})),Ho(On(e,{props:[ke(o,/:(plac\w+)/,et+"input-$1")]})),Ho(On(e,{props:[o]})),Wd(e,{props:E0(r,n)});break}return""})}}var K4={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},dr={},wi=typeof process<"u"&&dr!==void 0&&(dr.REACT_APP_SC_ATTR||dr.SC_ATTR)||"data-styled",xh=typeof window<"u"&&"HTMLElement"in window,Q4=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&dr!==void 0&&dr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&dr.REACT_APP_SC_DISABLE_SPEEDY!==""?dr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&dr.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&dr!==void 0&&dr.SC_DISABLE_SPEEDY!==void 0&&dr.SC_DISABLE_SPEEDY!==""&&dr.SC_DISABLE_SPEEDY!=="false"&&dr.SC_DISABLE_SPEEDY),J4={},Ic=Object.freeze([]),Ci=Object.freeze({});function Ty(e,t,r){return r===void 0&&(r=Ci),e.theme!==r.theme&&e.theme||t||r.theme}var Ay=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),X4=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Y4=/(^-|-$)/g;function O0(e){return e.replace(X4,"-").replace(Y4,"")}var Z4=/(a)(d)/gi,_0=function(e){return String.fromCharCode(e+(e>25?39:97))};function Qd(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=_0(t%52)+r;return(_0(t%52)+r).replace(Z4,"$1-$2")}var ku,oi=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Dy=function(e){return oi(5381,e)};function zy(e){return Qd(Dy(e)>>>0)}function ew(e){return e.displayName||e.name||"Component"}function Ou(e){return typeof e=="string"&&!0}var Ny=typeof Symbol=="function"&&Symbol.for,Py=Ny?Symbol.for("react.memo"):60115,tw=Ny?Symbol.for("react.forward_ref"):60112,rw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},nw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},My={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ow=((ku={})[tw]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ku[Py]=My,ku);function I0(e){return("type"in(t=e)&&t.type.$$typeof)===Py?My:"$$typeof"in e?ow[e.$$typeof]:rw;var t}var iw=Object.defineProperty,lw=Object.getOwnPropertyNames,R0=Object.getOwnPropertySymbols,aw=Object.getOwnPropertyDescriptor,sw=Object.getPrototypeOf,T0=Object.prototype;function Ly(e,t,r){if(typeof t!="string"){if(T0){var n=sw(t);n&&n!==T0&&Ly(e,n,r)}var o=lw(t);R0&&(o=o.concat(R0(t)));for(var i=I0(e),l=I0(t),s=0;s<o.length;++s){var c=o[s];if(!(c in nw||r&&r[c]||l&&c in l||i&&c in i)){var u=aw(t,c);try{iw(e,c,u)}catch{}}}}return e}function Si(e){return typeof e=="function"}function wh(e){return typeof e=="object"&&"styledComponentId"in e}function go(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Jd(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=e[n];return r}function Fl(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Xd(e,t,r){if(r===void 0&&(r=!1),!r&&!Fl(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Xd(e[n],t[n]);else if(Fl(t))for(var n in t)e[n]=Xd(e[n],t[n]);return e}function Ch(e,t){Object.defineProperty(e,"toString",{value:t})}function ta(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var cw=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,i=o;t>=i;)if((i<<=1)<0)throw ta(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),c=(l=0,r.length);l<c;l++)this.tag.insertRule(s,r[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),o=n+r;this.groupSizes[t]=0;for(var i=n;i<o;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],o=this.indexOfGroup(t),i=o+n,l=o;l<i;l++)r+="".concat(this.tag.getRule(l)).concat(`/*!sc*/
`);return r},e}(),ls=new Map,Ks=new Map,as=1,Na=function(e){if(ls.has(e))return ls.get(e);for(;Ks.has(as);)as++;var t=as++;return ls.set(e,t),Ks.set(t,e),t},uw=function(e,t){as=t+1,ls.set(e,t),Ks.set(t,e)},dw="style[".concat(wi,"][").concat("data-styled-version",'="').concat("6.1.1",'"]'),fw=new RegExp("^".concat(wi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),hw=function(e,t,r){for(var n,o=r.split(","),i=0,l=o.length;i<l;i++)(n=o[i])&&e.registerName(t,n)},pw=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(`/*!sc*/
`),o=[],i=0,l=n.length;i<l;i++){var s=n[i].trim();if(s){var c=s.match(fw);if(c){var u=0|parseInt(c[1],10),d=c[2];u!==0&&(uw(d,u),hw(e,d,c[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(s)}}};function mw(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Fy=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(s){var c=Array.from(s.querySelectorAll("style[".concat(wi,"]")));return c[c.length-1]}(r),i=o!==void 0?o.nextSibling:null;n.setAttribute(wi,"active"),n.setAttribute("data-styled-version","6.1.1");var l=mw();return l&&n.setAttribute("nonce",l),r.insertBefore(n,i),n},gw=function(){function e(t){this.element=Fy(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,o=0,i=n.length;o<i;o++){var l=n[o];if(l.ownerNode===r)return l}throw ta(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),yw=function(){function e(t){this.element=Fy(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),vw=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),A0=xh,xw={isServer:!xh,useCSSOMInjection:!Q4},Qs=function(){function e(t,r,n){t===void 0&&(t=Ci),r===void 0&&(r={});var o=this;this.options=Gt(Gt({},xw),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&xh&&A0&&(A0=!1,function(i){for(var l=document.querySelectorAll(dw),s=0,c=l.length;s<c;s++){var u=l[s];u&&u.getAttribute(wi)!=="active"&&(pw(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Ch(this,function(){return function(i){for(var l=i.getTag(),s=l.length,c="",u=function(f){var g=function(y){return Ks.get(y)}(f);if(g===void 0)return"continue";var C=i.names.get(g),x=l.getGroup(f);if(C===void 0||x.length===0)return"continue";var w="".concat(wi,".g").concat(f,'[id="').concat(g,'"]'),v="";C!==void 0&&C.forEach(function(y){y.length>0&&(v+="".concat(y,","))}),c+="".concat(x).concat(w,'{content:"').concat(v,'"}').concat(`/*!sc*/
`)},d=0;d<s;d++)u(d);return c}(o)})}return e.registerId=function(t){return Na(t)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(Gt(Gt({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,o=r.target;return r.isServer?new vw(o):n?new gw(o):new yw(o)}(this.options),new cw(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(Na(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(Na(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Na(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),ww=/&/g,Cw=/^\s*\/\/.*$/gm;function Gy(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Gy(r.children,t)),r})}function Sw(e){var t,r,n,o=Ci,i=o.options,l=i===void 0?Ci:i,s=o.plugins,c=s===void 0?Ic:s,u=function(g,C,x){return x===r||x.startsWith(r)&&x.endsWith(r)&&x.replaceAll(r,"").length>0?".".concat(t):g},d=c.slice();d.push(function(g){g.type===jc&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(ww,r).replace(n,u))}),l.prefix&&d.push(q4),d.push(H4);var f=function(g,C,x,w){C===void 0&&(C=""),x===void 0&&(x=""),w===void 0&&(w="&"),t=w,r=C,n=new RegExp("\\".concat(r,"\\b"),"g");var v=g.replace(Cw,""),y=B4(x||C?"".concat(x," ").concat(C," { ").concat(v," }"):v);l.namespace&&(y=Gy(y,l.namespace));var h=[];return qs(y,U4(d.concat(W4(function(p){return h.push(p)})))),h};return f.hash=c.length?c.reduce(function(g,C){return C.name||ta(15),oi(g,C.name)},5381).toString():"",f}var $w=new Qs,Yd=Sw(),By=Se.createContext({shouldForwardProp:void 0,styleSheet:$w,stylis:Yd});By.Consumer;Se.createContext(void 0);function Zd(){return j.useContext(By)}var bw=function(){function e(t,r){var n=this;this.inject=function(o,i){i===void 0&&(i=Yd);var l=n.name+i.hash;o.hasNameForId(n.id,l)||o.insertRules(n.id,l,i(n.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,Ch(this,function(){throw ta(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Yd),this.name+t.hash},e}(),Ew=function(e){return e>="A"&&e<="Z"};function D0(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;Ew(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Vy=function(e){return e==null||e===!1||e===""},Hy=function(e){var t,r,n=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Vy(i)&&(Array.isArray(i)&&i.isCss||Si(i)?n.push("".concat(D0(o),":"),i,";"):Fl(i)?n.push.apply(n,Ll(Ll(["".concat(o," {")],Hy(i),!1),["}"],!1)):n.push("".concat(D0(o),": ").concat((t=o,(r=i)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in K4||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function Jn(e,t,r,n){if(Vy(e))return[];if(wh(e))return[".".concat(e.styledComponentId)];if(Si(e)){if(!Si(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return Jn(o,t,r,n)}var i;return e instanceof bw?r?(e.inject(r,n),[e.getName(n)]):[e]:Fl(e)?Hy(e):Array.isArray(e)?Array.prototype.concat.apply(Ic,e.map(function(l){return Jn(l,t,r,n)})):[e.toString()]}function Uy(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Si(r)&&!wh(r))return!1}return!0}var jw=Dy("6.1.1"),kw=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Uy(t),this.componentId=r,this.baseHash=oi(jw,r),this.baseStyle=n,Qs.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=go(o,this.staticRulesId);else{var i=Jd(Jn(this.rules,t,r,n)),l=Qd(oi(this.baseHash,i)>>>0);if(!r.hasNameForId(this.componentId,l)){var s=n(i,".".concat(l),void 0,this.componentId);r.insertRules(this.componentId,l,s)}o=go(o,l),this.staticRulesId=l}else{for(var c=oi(this.baseHash,n.hash),u="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")u+=f;else if(f){var g=Jd(Jn(f,t,r,n));c=oi(c,g+d),u+=g}}if(u){var C=Qd(c>>>0);r.hasNameForId(this.componentId,C)||r.insertRules(this.componentId,C,n(u,".".concat(C),void 0,this.componentId)),o=go(o,C)}}return o},e}(),Sh=Se.createContext(void 0);Sh.Consumer;var _u={};function Ow(e,t,r){var n=wh(e),o=e,i=!Ou(e),l=t.attrs,s=l===void 0?Ic:l,c=t.componentId,u=c===void 0?function($,E){var k=typeof $!="string"?"sc":O0($);_u[k]=(_u[k]||0)+1;var O="".concat(k,"-").concat(zy("6.1.1"+k+_u[k]));return E?"".concat(E,"-").concat(O):O}(t.displayName,t.parentComponentId):c,d=t.displayName,f=d===void 0?function($){return Ou($)?"styled.".concat($):"Styled(".concat(ew($),")")}(e):d,g=t.displayName&&t.componentId?"".concat(O0(t.displayName),"-").concat(t.componentId):t.componentId||u,C=n&&o.attrs?o.attrs.concat(s).filter(Boolean):s,x=t.shouldForwardProp;if(n&&o.shouldForwardProp){var w=o.shouldForwardProp;if(t.shouldForwardProp){var v=t.shouldForwardProp;x=function($,E){return w($,E)&&v($,E)}}else x=w}var y=new kw(r,g,n?o.componentStyle:void 0);function h($,E){return function(k,O,T){var J=k.attrs,H=k.componentStyle,ge=k.defaultProps,Y=k.foldedComponentIds,ye=k.styledComponentId,N=k.target,A=Se.useContext(Sh),U=Zd(),ne=k.shouldForwardProp||U.shouldForwardProp,M=function(W,b,me){for(var he,ve=Gt(Gt({},b),{className:void 0,theme:me}),Ve=0;Ve<W.length;Ve+=1){var Pe=Si(he=W[Ve])?he(ve):he;for(var Ae in Pe)ve[Ae]=Ae==="className"?go(ve[Ae],Pe[Ae]):Ae==="style"?Gt(Gt({},ve[Ae]),Pe[Ae]):Pe[Ae]}return b.className&&(ve.className=go(ve.className,b.className)),ve}(J,O,Ty(O,A,ge)||Ci),Z=M.as||N,z={};for(var D in M)M[D]===void 0||D[0]==="$"||D==="as"||D==="theme"||(D==="forwardedAs"?z.as=M.forwardedAs:ne&&!ne(D,Z)||(z[D]=M[D]));var K=function(W,b){var me=Zd(),he=W.generateAndInjectStyles(b,me.styleSheet,me.stylis);return he}(H,M),fe=go(Y,ye);return K&&(fe+=" "+K),M.className&&(fe+=" "+M.className),z[Ou(Z)&&!Ay.has(Z)?"class":"className"]=fe,z.ref=T,j.createElement(Z,z)}(p,$,E)}h.displayName=f;var p=Se.forwardRef(h);return p.attrs=C,p.componentStyle=y,p.displayName=f,p.shouldForwardProp=x,p.foldedComponentIds=n?go(o.foldedComponentIds,o.styledComponentId):"",p.styledComponentId=g,p.target=n?o.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function($){this._foldedDefaultProps=n?function(E){for(var k=[],O=1;O<arguments.length;O++)k[O-1]=arguments[O];for(var T=0,J=k;T<J.length;T++)Xd(E,J[T],!0);return E}({},o.defaultProps,$):$}}),Ch(p,function(){return".".concat(p.styledComponentId)}),i&&Ly(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function z0(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var N0=function(e){return Object.assign(e,{isCss:!0})};function Ge(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Si(e)||Fl(e)){var n=e;return N0(Jn(z0(Ic,Ll([n],t,!0))))}var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?Jn(o):N0(Jn(z0(o,t)))}function ef(e,t,r){if(r===void 0&&(r=Ci),!t)throw ta(1,t);var n=function(o){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return e(t,r,Ge.apply(void 0,Ll([o],i,!1)))};return n.attrs=function(o){return ef(e,t,Gt(Gt({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return ef(e,t,Gt(Gt({},r),o))},n}var Wy=function(e){return ef(Ow,e)},Q=Wy;Ay.forEach(function(e){Q[e]=Wy(e)});var _w=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=Uy(t),Qs.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,n,o){var i=o(Jd(Jn(this.rules,r,n,o)),""),l=this.componentId+t;n.insertRules(l,l,i)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,n,o){t>2&&Qs.registerId(this.componentId+t),this.removeStyles(t,n),this.createStyles(t,r,n,o)},e}();function Iw(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=Ge.apply(void 0,Ll([e],t,!1)),o="sc-global-".concat(zy(JSON.stringify(n))),i=new _w(n,o),l=function(c){var u=Zd(),d=Se.useContext(Sh),f=Se.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&s(f,c,u.styleSheet,d,u.stylis),Se.useLayoutEffect(function(){if(!u.styleSheet.server)return s(f,c,u.styleSheet,d,u.stylis),function(){return i.removeStyles(f,u.styleSheet)}},[f,c,u.styleSheet,d,u.stylis]),null};function s(c,u,d,f,g){if(i.isStatic)i.renderStyles(c,J4,d,g);else{var C=Gt(Gt({},u),{theme:Ty(u,f,l.defaultProps)});i.renderStyles(c,C,d,g)}}return Se.memo(l)}const Rw=Q.div`
    width: 100%;
    height: 100%;

    background-image: url("./laptop_bg.jpg");
    
    >div {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: rgba(255, 255, 255, 0.025);
        backdrop-filter: blur(4px) brightness(0.65);
        border-right: 1px solid rgba(0, 0, 0, 0.5);

        @media (max-width: 50rem) {
            width: 100%;

            >form {
                width: 100%;
                border: none;
            }
        }

        >form {
            width: 30rem;
            display: flex;
            flex-direction: column;
            align-items: center;

            gap: 1rem;

            >img {
                width: 7.5rem;
                margin-bottom: 1rem;
            }
            
            >h2 {
                color: white;
                opacity: 0.85;
            }

            button {
                margin-top: 1rem;
                box-sizing: border-box;
                background-color: rgb(221, 223, 225);
                width: 20rem;
                border-radius: 0.5rem;
                padding: 1rem;
                pointer-events: all;
                font-weight: 600;

                transition: background-color 0.3s ease-in-out;

                &:hover {
                    background-color: white;
                }

                >.loading_spinner {
                    transform: scale(0.5);
                    height: 20px !important;
                    width: 1px !important;
                    position: static !important;
                    margin: 0 auto;
                }
            }
        }
    }
`,Tw="/assets/logov_transparent_dark-BgM9FWhU.png",Aw=Q.div`
    ${e=>Ge`
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        height: max-content;
        width: ${e.$width};
        max-width: 100%;
        transition: 0.2s ease-in-out;

        &:has(.error) {
            >div:nth-child(1) {
                border-color: rgb(255, 100, 100);
                ${e.$disableBorder&&Ge`border-color: transparent;`}
                >input {
                    color: rgb(255, 100, 100);
                }

                >svg {
                    color: rgb(255, 100, 100)
                }
            }
        }

        &:hover {
            background-color: rgba(100,110,135, 0.15);
        }

        &:focus-within {
            border-color: ${e.$focusColor};
            background-color: rgba(240,245,255, 0.15);
            ${e.$disableBorder&&Ge`border-color: transparent;`}
        }

        >div:nth-child(1) {
            box-sizing: border-box;
            width: 100%;
            max-width: 100%;
            display: flex;
            align-items: center;
            border: 1px solid ${e.$borderColor||e.$color};
            border-radius: 0.25rem;
            ${e.$disableBorder&&Ge`border-color: transparent;`}

            >svg{
                font-size: ${e.$fontSize?e.$fontSize*1.125+"rem":"1rem"};
                width: ${e.$fontSize?e.$fontSize*1.125+"rem":"1rem"};
                color: ${e.$color};
                opacity: 0.8;
                padding: ${e.$padding[0]+"rem"} ${e.$padding[1]+"rem"};
                transition: 0.2s ease-in-out;

                :hover {
                    background-color: rgba(70, 80, 95, 0.25);
                }

                @media (max-width: 50rem) {
                    font-size: ${e.$fontSize?e.$fontSize*1.125*.85+"rem":"0.75rem"};
                    width: ${e.$fontSize?e.$fontSize*1.125*.85+"rem":"0.75rem"};
                }
            }

            >span {
                font-size: ${e.$fontSize};
                color: ${e.$color};
                padding: ${e.$padding[0]+"rem"} ${e.$padding[1]+"rem"};
            }

            >svg+input {
                padding-left: 0;
            }

            >input+svg {
                padding-left: 0;
            }

            >input, textarea {
                box-sizing: border-box;
                font-size: ${e.$fontSize?e.$fontSize+"rem":"0.875rem"};
                font-weight: ${e.$fontWeight?e.$fontWeight:"400"};
                color: ${e.$color};
                width: 100%;
                padding: ${e.$padding[0]+"rem"} ${e.$padding[1]+"rem"};
                border-top-left-radius: 0.25rem;
                border-bottom-left-radius: 0.2rem;

                @media (max-width: 50rem) {
                    font-size: ${e.$fontSize?e.$fontSize*.85+"rem":"0.75rem"};
                }

                &::placeholder {
                    color: ${e.$color};
                    opacity: 0.8;
                }
                
                &:focus {
                    color: ${e.$focusColor};

                    &::placeholder {
                        color: ${e.$focusColor};
                        opacity: 0.8;
                    }
                }
            }

            &:focus-within {
                border-color: ${e.$focusColor};
                background-color: rgba(240,245,255, 0.15);
                ${e.$disableBorder&&Ge`border-color: transparent;`}

                >svg {
                    color: ${e.$focusColor};
                }
            }
        }

        >span.error {
            font-size: ${e.$fontSize?`${e.$fontSize*.75}rem`:"0.75rem"};
            color: rgb(255, 75, 75);
            padding-left: 0.25rem;
        }
    `}
`,V=({$padding:e,$width:t,$fontSize:r,$fontWeight:n,$color:o,$borderColor:i,$focusColor:l,$disableBorder:s,leftIcon:c,rightIcon:u,error:d,isTextArea:f,...g})=>a.jsxs(Aw,{$padding:e,$width:t,$fontSize:r,$fontWeight:n,$color:o,$borderColor:i,$focusColor:l,$disableBorder:s,children:[f?a.jsx(a.Fragment,{children:a.jsxs("div",{children:[c||"",a.jsx("textarea",{...g}),u||""]})}):a.jsx(a.Fragment,{children:a.jsxs("div",{children:[c||"",a.jsx("input",{...g}),u||""]})}),d&&a.jsxs("span",{className:"error",children:[" ",d," "]})]});var qy={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},P0=Se.createContext&&Se.createContext(qy),Xn=function(){return Xn=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Xn.apply(this,arguments)},Dw=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function Ky(e){return e&&e.map(function(t,r){return Se.createElement(t.tag,Xn({key:r},t.attr),Ky(t.child))})}function re(e){return function(t){return Se.createElement(zw,Xn({attr:Xn({},e.attr)},t),Ky(e.child))}}function zw(e){var t=function(r){var n=e.attr,o=e.size,i=e.title,l=Dw(e,["attr","size","title"]),s=o||r.size||"1em",c;return r.className&&(c=r.className),e.className&&(c=(c?c+" ":"")+e.className),Se.createElement("svg",Xn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,l,{className:c,style:Xn(Xn({color:e.color||r.color},r.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&Se.createElement("title",null,i),e.children)};return P0!==void 0?Se.createElement(P0.Consumer,null,function(r){return t(r)}):t(qy)}function M0(e){return re({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M221.5 51.7C216.6 39.8 204.9 32 192 32s-24.6 7.8-29.5 19.7l-120 288-40 96c-6.8 16.3 .9 35 17.2 41.8s35-.9 41.8-17.2L93.3 384H290.7l31.8 76.3c6.8 16.3 25.5 24 41.8 17.2s24-25.5 17.2-41.8l-40-96-120-288zM264 320H120l72-172.8L264 320z"}}]})(e)}function _i(e){return re({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"}}]})(e)}function Nw(e){return re({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"}}]})(e)}function Pw(e){return re({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"}}]})(e)}function Mw(e){return re({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"}}]})(e)}function Lw(e){return re({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"}}]})(e)}function Qy(e){return re({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"}}]})(e)}function Fw(e){return re({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"}}]})(e)}function Gw(e){return re({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"}}]})(e)}function Bw(e){return re({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"}}]})(e)}function Vw(e){return re({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M162.4 6c-1.5-3.6-5-6-8.9-6h-19c-3.9 0-7.5 2.4-8.9 6L104.9 57.7c-3.2 8-14.6 8-17.8 0L66.4 6c-1.5-3.6-5-6-8.9-6H48C21.5 0 0 21.5 0 48V224v22.4V256H9.6 374.4 384v-9.6V224 48c0-26.5-21.5-48-48-48H230.5c-3.9 0-7.5 2.4-8.9 6L200.9 57.7c-3.2 8-14.6 8-17.8 0L162.4 6zM0 288v32c0 35.3 28.7 64 64 64h64v64c0 35.3 28.7 64 64 64s64-28.7 64-64V384h64c35.3 0 64-28.7 64-64V288H0zM192 432a16 16 0 1 1 0 32 16 16 0 1 1 0-32z"}}]})(e)}function Hw(e){return re({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75H192 160 64c-35.3 0-64 28.7-64 64v96c0 35.3 28.7 64 64 64l0 128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V352l8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V300.4c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4V32zm-64 76.7V240 371.3C357.2 317.8 280.5 288 200.7 288H192V192h8.7c79.8 0 156.5-29.8 215.3-83.3z"}}]})(e)}function Jy(e){return re({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"}}]})(e)}function Xy(e){return re({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"}}]})(e)}function Uw(e){return re({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"}}]})(e)}function Ww(e){return re({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm96 288H448c17.7 0 32-14.3 32-32V251.8c0-7.6-2.7-15-7.7-20.8l-65.8-76.8c-12.1-14.2-33.7-15-46.9-1.8l-21 21c-10 10-26.4 9.2-35.4-1.6l-39.2-47c-12.6-15.1-35.7-15.4-48.7-.6L135.9 215c-5.1 5.8-7.9 13.3-7.9 21.1v84c0 17.7 14.3 32 32 32z"}}]})(e)}function qw(e){return re({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"}}]})(e)}function Kw(e){return re({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"}}]})(e)}function Qw(e){return re({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M480 48c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48V96H224V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V96H112V24c0-13.3-10.7-24-24-24S64 10.7 64 24V96H48C21.5 96 0 117.5 0 144v96V464c0 26.5 21.5 48 48 48H304h32 96H592c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48H480V48zm96 320v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM240 416H208c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zM128 400c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM560 256c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32zM256 176v32c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM112 160c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32zM256 304c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM112 320H80c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zm304-48v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM400 64c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h32zm16 112v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16z"}}]})(e)}function Yy(e){return re({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"}}]})(e)}function Jw(e){return re({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z"}}]})(e)}function Xw(e){return re({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"}}]})(e)}function Zy(e){return re({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"}}]})(e)}function Yw(e){return re({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"}}]})(e)}function Zw(e){return re({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"}}]})(e)}function ev(e){return re({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"}}]})(e)}function eC(e){return re({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V288H216c-13.3 0-24 10.7-24 24s10.7 24 24 24H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM384 336V288H494.1l-39-39c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39H384zm0-208H256V0L384 128z"}}]})(e)}function tC(e){return re({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"}}]})(e)}function tv(e){return re({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"}}]})(e)}function rC(e){return re({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"}}]})(e)}function nC(e){return re({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"}}]})(e)}function rv(e){return re({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80V384 336 288C0 146.6 114.6 32 256 32s256 114.6 256 256v48 48 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z"}}]})(e)}function $h(e){return re({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z"}}]})(e)}function oC(e){return re({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64V75c0 42.4 16.9 83.1 46.9 113.1L146.7 256 78.9 323.9C48.9 353.9 32 394.6 32 437v11c-17.7 0-32 14.3-32 32s14.3 32 32 32H64 320h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V437c0-42.4-16.9-83.1-46.9-113.1L237.3 256l67.9-67.9c30-30 46.9-70.7 46.9-113.1V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320 64 32zM96 75V64H288V75c0 25.5-10.1 49.9-28.1 67.9L192 210.7l-67.9-67.9C106.1 124.9 96 100.4 96 75z"}}]})(e)}function iC(e){return re({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64V75c0 42.4 16.9 83.1 46.9 113.1L146.7 256 78.9 323.9C48.9 353.9 32 394.6 32 437v11c-17.7 0-32 14.3-32 32s14.3 32 32 32H64 320h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V437c0-42.4-16.9-83.1-46.9-113.1L237.3 256l67.9-67.9c30-30 46.9-70.7 46.9-113.1V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320 64 32zM288 437v11H96V437c0-25.5 10.1-49.9 28.1-67.9L192 301.3l67.9 67.9c18 18 28.1 42.4 28.1 67.9z"}}]})(e)}function lC(e){return re({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M0 96l576 0c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm0 32V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128H0zM64 405.3c0-29.5 23.9-53.3 53.3-53.3H234.7c29.5 0 53.3 23.9 53.3 53.3c0 5.9-4.8 10.7-10.7 10.7H74.7c-5.9 0-10.7-4.8-10.7-10.7zM176 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm176 16c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16z"}}]})(e)}function aC(e){return re({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"}}]})(e)}function bh(e){return re({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"}}]})(e)}function sC(e){return re({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"}}]})(e)}function nv(e){return re({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M302.8 312C334.9 271.9 408 174.6 408 120C408 53.7 354.3 0 288 0S168 53.7 168 120c0 54.6 73.1 151.9 105.2 192c7.7 9.6 22 9.6 29.6 0zM416 503l144.9-58c9.1-3.6 15.1-12.5 15.1-22.3V152c0-17-17.1-28.6-32.9-22.3l-116 46.4c-.5 1.2-1 2.5-1.5 3.7c-2.9 6.8-6.1 13.7-9.6 20.6V503zM15.1 187.3C6 191 0 199.8 0 209.6V480.4c0 17 17.1 28.6 32.9 22.3L160 451.8V200.4c-3.5-6.9-6.7-13.8-9.6-20.6c-5.6-13.2-10.4-27.4-12.8-41.5l-122.6 49zM384 255c-20.5 31.3-42.3 59.6-56.2 77c-20.5 25.6-59.1 25.6-79.6 0c-13.9-17.4-35.7-45.7-56.2-77V449.4l192 54.9V255z"}}]})(e)}function ov(e){return re({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"}}]})(e)}function cC(e){return re({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M456 224H312c-13.3 0-24-10.7-24-24V56c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l40 40L442.3 5.7C446 2 450.9 0 456 0s10 2 13.7 5.7l36.7 36.7C510 46 512 50.9 512 56s-2 10-5.7 13.7L433 143l40 40c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8zm0 64c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-40 40 73.4 73.4c3.6 3.6 5.7 8.5 5.7 13.7s-2 10-5.7 13.7l-36.7 36.7C466 510 461.1 512 456 512s-10-2-13.7-5.7L369 433l-40 40c-6.9 6.9-17.2 8.9-26.2 5.2s-14.8-12.5-14.8-22.2V312c0-13.3 10.7-24 24-24H456zm-256 0c13.3 0 24 10.7 24 24V456c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-40-40L69.7 506.3C66 510 61.1 512 56 512s-10-2-13.7-5.7L5.7 469.7C2 466 0 461.1 0 456s2-10 5.7-13.7L79 369 39 329c-6.9-6.9-8.9-17.2-5.2-26.2s12.5-14.8 22.2-14.8H200zM56 224c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l40-40L5.7 69.7C2 66 0 61.1 0 56s2-10 5.7-13.7L42.3 5.7C46 2 50.9 0 56 0s10 2 13.7 5.7L143 79l40-40c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2V200c0 13.3-10.7 24-24 24H56z"}}]})(e)}function uC(e){return re({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"}}]})(e)}function dC(e){return re({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M256 64H384v64H256V64zM240 0c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h48v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96v32H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H240c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H192V288H448v32H400c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H560c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H512V288h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V192h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H240zM96 448V384H224v64H96zm320-64H544v64H416V384z"}}]})(e)}function Eh(e){return re({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H288V368c0-26.5 21.5-48 48-48H448V96c0-35.3-28.7-64-64-64H64zM448 352H402.7 336c-8.8 0-16 7.2-16 16v66.7V480l32-32 64-64 32-32z"}}]})(e)}function fC(e){return re({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"}}]})(e)}function iv(e){return re({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"}}]})(e)}function hC(e){return re({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"}}]})(e)}function pC(e){return re({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M208 80c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-8v40H464c30.9 0 56 25.1 56 56v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H464c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V288c0-4.4-3.6-8-8-8H312v40h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H256c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V280H112c-4.4 0-8 3.6-8 8v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V288c0-30.9 25.1-56 56-56H264V192h-8c-26.5 0-48-21.5-48-48V80z"}}]})(e)}function mC(e){return re({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"}}]})(e)}function gC(e){return re({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 64V416H224V160H64zm384 0H288V416H448V160z"}}]})(e)}function Dr(e){return re({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"}}]})(e)}function yC(e){return re({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5V80C0 53.5 21.5 32 48 32H197.5c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"}}]})(e)}function lv(e){return re({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M192 64C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192s-86-192-192-192H192zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"}}]})(e)}function vC(e){return re({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M176 88v40H336V88c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8zm-48 40V88c0-30.9 25.1-56 56-56H328c30.9 0 56 25.1 56 56v40h28.1c12.7 0 24.9 5.1 33.9 14.1l51.9 51.9c9 9 14.1 21.2 14.1 33.9V304H384V288c0-17.7-14.3-32-32-32s-32 14.3-32 32v16H192V288c0-17.7-14.3-32-32-32s-32 14.3-32 32v16H0V227.9c0-12.7 5.1-24.9 14.1-33.9l51.9-51.9c9-9 21.2-14.1 33.9-14.1H128zM0 416V336H128v16c0 17.7 14.3 32 32 32s32-14.3 32-32V336H320v16c0 17.7 14.3 32 32 32s32-14.3 32-32V336H512v80c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"}}]})(e)}function xC(e){return re({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"}}]})(e)}function wC(e){return re({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M144 144c0-44.2 35.8-80 80-80c31.9 0 59.4 18.6 72.3 45.7c7.6 16 26.7 22.8 42.6 15.2s22.8-26.7 15.2-42.6C331 33.7 281.5 0 224 0C144.5 0 80 64.5 80 144v48H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H144V144z"}}]})(e)}function av(e){return re({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zM178.3 304h91.4c11.8 0 23.4 1.2 34.5 3.3c-2.1 18.5 7.4 35.6 21.8 44.8c-16.6 10.6-26.7 31.6-20 53.3c4 12.9 9.4 25.5 16.4 37.6s15.2 23.1 24.4 33c15.7 16.9 39.6 18.4 57.2 8.7v.9c0 9.2 2.7 18.5 7.9 26.3H29.7C13.3 512 0 498.7 0 482.3C0 383.8 79.8 304 178.3 304zM436 218.2c0-7 4.5-13.3 11.3-14.8c10.5-2.4 21.5-3.7 32.7-3.7s22.2 1.3 32.7 3.7c6.8 1.5 11.3 7.8 11.3 14.8v30.6c7.9 3.4 15.4 7.7 22.3 12.8l24.9-14.3c6.1-3.5 13.7-2.7 18.5 2.4c7.6 8.1 14.3 17.2 20.1 27.2s10.3 20.4 13.5 31c2.1 6.7-1.1 13.7-7.2 17.2l-25 14.4c.4 4 .7 8.1 .7 12.3s-.2 8.2-.7 12.3l25 14.4c6.1 3.5 9.2 10.5 7.2 17.2c-3.3 10.6-7.8 21-13.5 31s-12.5 19.1-20.1 27.2c-4.8 5.1-12.5 5.9-18.5 2.4l-24.9-14.3c-6.9 5.1-14.3 9.4-22.3 12.8l0 30.6c0 7-4.5 13.3-11.3 14.8c-10.5 2.4-21.5 3.7-32.7 3.7s-22.2-1.3-32.7-3.7c-6.8-1.5-11.3-7.8-11.3-14.8V454.8c-8-3.4-15.6-7.7-22.5-12.9l-24.7 14.3c-6.1 3.5-13.7 2.7-18.5-2.4c-7.6-8.1-14.3-17.2-20.1-27.2s-10.3-20.4-13.5-31c-2.1-6.7 1.1-13.7 7.2-17.2l24.8-14.3c-.4-4.1-.7-8.2-.7-12.4s.2-8.3 .7-12.4L343.8 325c-6.1-3.5-9.2-10.5-7.2-17.2c3.3-10.6 7.7-21 13.5-31s12.5-19.1 20.1-27.2c4.8-5.1 12.4-5.9 18.5-2.4l24.8 14.3c6.9-5.1 14.5-9.4 22.5-12.9V218.2zm92.1 133.5a48.1 48.1 0 1 0 -96.1 0 48.1 48.1 0 1 0 96.1 0z"}}]})(e)}function sv(e){return re({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256A128 128 0 1 1 224 0a128 128 0 1 1 0 256zM209.1 359.2l-18.6-31c-6.4-10.7 1.3-24.2 13.7-24.2H224h19.7c12.4 0 20.1 13.6 13.7 24.2l-18.6 31 33.4 123.9 36-146.9c2-8.1 9.8-13.4 17.9-11.3c70.1 17.6 121.9 81 121.9 156.4c0 17-13.8 30.7-30.7 30.7H285.5c-2.1 0-4-.4-5.8-1.1l.3 1.1H168l.3-1.1c-1.8 .7-3.8 1.1-5.8 1.1H30.7C13.8 512 0 498.2 0 481.3c0-75.5 51.9-138.9 121.9-156.4c8.1-2 15.9 3.3 17.9 11.3l36 146.9 33.4-123.9z"}}]})(e)}function cv(e){return re({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"}}]})(e)}function lr(e){return re({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M211.2 96a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM32 256c0 17.7 14.3 32 32 32h85.6c10.1-39.4 38.6-71.5 75.8-86.6c-9.7-6-21.2-9.4-33.4-9.4H96c-35.3 0-64 28.7-64 64zm461.6 32H576c17.7 0 32-14.3 32-32c0-35.3-28.7-64-64-64H448c-11.7 0-22.7 3.1-32.1 8.6c38.1 14.8 67.4 47.3 77.7 87.4zM391.2 226.4c-6.9-1.6-14.2-2.4-21.6-2.4h-96c-8.5 0-16.7 1.1-24.5 3.1c-30.8 8.1-55.6 31.1-66.1 60.9c-3.5 10-5.5 20.8-5.5 32c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32c0-11.2-1.9-22-5.5-32c-10.8-30.7-36.8-54.2-68.9-61.6zM563.2 96a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM321.6 192a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z"}}]})(e)}function uv(e){return re({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"}}]})(e)}function ra(e){return re({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"}}]})(e)}function P(e){const[t,r]=j.useState(e);return{defaultValue:e,value:t,set:r,reset:()=>{r(e)}}}function dv(e,t){return function(){return e.apply(t,arguments)}}const{toString:CC}=Object.prototype,{getPrototypeOf:jh}=Object,Rc=(e=>t=>{const r=CC.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),Wr=e=>(e=e.toLowerCase(),t=>Rc(t)===e),Tc=e=>t=>typeof t===e,{isArray:Ii}=Array,Gl=Tc("undefined");function SC(e){return e!==null&&!Gl(e)&&e.constructor!==null&&!Gl(e.constructor)&&xr(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const fv=Wr("ArrayBuffer");function $C(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&fv(e.buffer),t}const bC=Tc("string"),xr=Tc("function"),hv=Tc("number"),Ac=e=>e!==null&&typeof e=="object",EC=e=>e===!0||e===!1,ss=e=>{if(Rc(e)!=="object")return!1;const t=jh(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},jC=Wr("Date"),kC=Wr("File"),OC=Wr("Blob"),_C=Wr("FileList"),IC=e=>Ac(e)&&xr(e.pipe),RC=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||xr(e.append)&&((t=Rc(e))==="formdata"||t==="object"&&xr(e.toString)&&e.toString()==="[object FormData]"))},TC=Wr("URLSearchParams"),[AC,DC,zC,NC]=["ReadableStream","Request","Response","Headers"].map(Wr),PC=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function na(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,o;if(typeof e!="object"&&(e=[e]),Ii(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{const i=r?Object.getOwnPropertyNames(e):Object.keys(e),l=i.length;let s;for(n=0;n<l;n++)s=i[n],t.call(null,e[s],s,e)}}function pv(e,t){t=t.toLowerCase();const r=Object.keys(e);let n=r.length,o;for(;n-- >0;)if(o=r[n],t===o.toLowerCase())return o;return null}const yo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,mv=e=>!Gl(e)&&e!==yo;function tf(){const{caseless:e}=mv(this)&&this||{},t={},r=(n,o)=>{const i=e&&pv(t,o)||o;ss(t[i])&&ss(n)?t[i]=tf(t[i],n):ss(n)?t[i]=tf({},n):Ii(n)?t[i]=n.slice():t[i]=n};for(let n=0,o=arguments.length;n<o;n++)arguments[n]&&na(arguments[n],r);return t}const MC=(e,t,r,{allOwnKeys:n}={})=>(na(t,(o,i)=>{r&&xr(o)?e[i]=dv(o,r):e[i]=o},{allOwnKeys:n}),e),LC=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),FC=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},GC=(e,t,r,n)=>{let o,i,l;const s={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)l=o[i],(!n||n(l,e,t))&&!s[l]&&(t[l]=e[l],s[l]=!0);e=r!==!1&&jh(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},BC=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},VC=e=>{if(!e)return null;if(Ii(e))return e;let t=e.length;if(!hv(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},HC=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&jh(Uint8Array)),UC=(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=n.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},WC=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},qC=Wr("HTMLFormElement"),KC=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,o){return n.toUpperCase()+o}),L0=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),QC=Wr("RegExp"),gv=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};na(r,(o,i)=>{let l;(l=t(o,i,e))!==!1&&(n[i]=l||o)}),Object.defineProperties(e,n)},JC=e=>{gv(e,(t,r)=>{if(xr(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(xr(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},XC=(e,t)=>{const r={},n=o=>{o.forEach(i=>{r[i]=!0})};return Ii(e)?n(e):n(String(e).split(t)),r},YC=()=>{},ZC=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Iu="abcdefghijklmnopqrstuvwxyz",F0="0123456789",yv={DIGIT:F0,ALPHA:Iu,ALPHA_DIGIT:Iu+Iu.toUpperCase()+F0},eS=(e=16,t=yv.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r};function tS(e){return!!(e&&xr(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const rS=e=>{const t=new Array(10),r=(n,o)=>{if(Ac(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[o]=n;const i=Ii(n)?[]:{};return na(n,(l,s)=>{const c=r(l,o+1);!Gl(c)&&(i[s]=c)}),t[o]=void 0,i}}return n};return r(e,0)},nS=Wr("AsyncFunction"),oS=e=>e&&(Ac(e)||xr(e))&&xr(e.then)&&xr(e.catch),vv=((e,t)=>e?setImmediate:t?((r,n)=>(yo.addEventListener("message",({source:o,data:i})=>{o===yo&&i===r&&n.length&&n.shift()()},!1),o=>{n.push(o),yo.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",xr(yo.postMessage)),iS=typeof queueMicrotask<"u"?queueMicrotask.bind(yo):typeof process<"u"&&process.nextTick||vv,R={isArray:Ii,isArrayBuffer:fv,isBuffer:SC,isFormData:RC,isArrayBufferView:$C,isString:bC,isNumber:hv,isBoolean:EC,isObject:Ac,isPlainObject:ss,isReadableStream:AC,isRequest:DC,isResponse:zC,isHeaders:NC,isUndefined:Gl,isDate:jC,isFile:kC,isBlob:OC,isRegExp:QC,isFunction:xr,isStream:IC,isURLSearchParams:TC,isTypedArray:HC,isFileList:_C,forEach:na,merge:tf,extend:MC,trim:PC,stripBOM:LC,inherits:FC,toFlatObject:GC,kindOf:Rc,kindOfTest:Wr,endsWith:BC,toArray:VC,forEachEntry:UC,matchAll:WC,isHTMLForm:qC,hasOwnProperty:L0,hasOwnProp:L0,reduceDescriptors:gv,freezeMethods:JC,toObjectSet:XC,toCamelCase:KC,noop:YC,toFiniteNumber:ZC,findKey:pv,global:yo,isContextDefined:mv,ALPHABET:yv,generateString:eS,isSpecCompliantForm:tS,toJSONObject:rS,isAsyncFn:nS,isThenable:oS,setImmediate:vv,asap:iS};function be(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}R.inherits(be,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:R.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const xv=be.prototype,wv={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{wv[e]={value:e}});Object.defineProperties(be,wv);Object.defineProperty(xv,"isAxiosError",{value:!0});be.from=(e,t,r,n,o,i)=>{const l=Object.create(xv);return R.toFlatObject(e,l,function(c){return c!==Error.prototype},s=>s!=="isAxiosError"),be.call(l,e.message,t,r,n,o),l.cause=e,l.name=e.name,i&&Object.assign(l,i),l};const lS=null;function rf(e){return R.isPlainObject(e)||R.isArray(e)}function Cv(e){return R.endsWith(e,"[]")?e.slice(0,-2):e}function G0(e,t,r){return e?e.concat(t).map(function(o,i){return o=Cv(o),!r&&i?"["+o+"]":o}).join(r?".":""):t}function aS(e){return R.isArray(e)&&!e.some(rf)}const sS=R.toFlatObject(R,{},null,function(t){return/^is[A-Z]/.test(t)});function Dc(e,t,r){if(!R.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=R.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,v){return!R.isUndefined(v[w])});const n=r.metaTokens,o=r.visitor||d,i=r.dots,l=r.indexes,c=(r.Blob||typeof Blob<"u"&&Blob)&&R.isSpecCompliantForm(t);if(!R.isFunction(o))throw new TypeError("visitor must be a function");function u(x){if(x===null)return"";if(R.isDate(x))return x.toISOString();if(!c&&R.isBlob(x))throw new be("Blob is not supported. Use a Buffer instead.");return R.isArrayBuffer(x)||R.isTypedArray(x)?c&&typeof Blob=="function"?new Blob([x]):Buffer.from(x):x}function d(x,w,v){let y=x;if(x&&!v&&typeof x=="object"){if(R.endsWith(w,"{}"))w=n?w:w.slice(0,-2),x=JSON.stringify(x);else if(R.isArray(x)&&aS(x)||(R.isFileList(x)||R.endsWith(w,"[]"))&&(y=R.toArray(x)))return w=Cv(w),y.forEach(function(p,$){!(R.isUndefined(p)||p===null)&&t.append(l===!0?G0([w],$,i):l===null?w:w+"[]",u(p))}),!1}return rf(x)?!0:(t.append(G0(v,w,i),u(x)),!1)}const f=[],g=Object.assign(sS,{defaultVisitor:d,convertValue:u,isVisitable:rf});function C(x,w){if(!R.isUndefined(x)){if(f.indexOf(x)!==-1)throw Error("Circular reference detected in "+w.join("."));f.push(x),R.forEach(x,function(y,h){(!(R.isUndefined(y)||y===null)&&o.call(t,y,R.isString(h)?h.trim():h,w,g))===!0&&C(y,w?w.concat(h):[h])}),f.pop()}}if(!R.isObject(e))throw new TypeError("data must be an object");return C(e),t}function B0(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function kh(e,t){this._pairs=[],e&&Dc(e,this,t)}const Sv=kh.prototype;Sv.append=function(t,r){this._pairs.push([t,r])};Sv.toString=function(t){const r=t?function(n){return t.call(this,n,B0)}:B0;return this._pairs.map(function(o){return r(o[0])+"="+r(o[1])},"").join("&")};function cS(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function $v(e,t,r){if(!t)return e;const n=r&&r.encode||cS,o=r&&r.serialize;let i;if(o?i=o(t,r):i=R.isURLSearchParams(t)?t.toString():new kh(t,r).toString(n),i){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class V0{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){R.forEach(this.handlers,function(n){n!==null&&t(n)})}}const bv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},uS=typeof URLSearchParams<"u"?URLSearchParams:kh,dS=typeof FormData<"u"?FormData:null,fS=typeof Blob<"u"?Blob:null,hS={isBrowser:!0,classes:{URLSearchParams:uS,FormData:dS,Blob:fS},protocols:["http","https","file","blob","url","data"]},Oh=typeof window<"u"&&typeof document<"u",pS=(e=>Oh&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),mS=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",gS=Oh&&window.location.href||"http://localhost",yS=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Oh,hasStandardBrowserEnv:pS,hasStandardBrowserWebWorkerEnv:mS,origin:gS},Symbol.toStringTag,{value:"Module"})),Hr={...yS,...hS};function vS(e,t){return Dc(e,new Hr.classes.URLSearchParams,Object.assign({visitor:function(r,n,o,i){return Hr.isNode&&R.isBuffer(r)?(this.append(n,r.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function xS(e){return R.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function wS(e){const t={},r=Object.keys(e);let n;const o=r.length;let i;for(n=0;n<o;n++)i=r[n],t[i]=e[i];return t}function Ev(e){function t(r,n,o,i){let l=r[i++];if(l==="__proto__")return!0;const s=Number.isFinite(+l),c=i>=r.length;return l=!l&&R.isArray(o)?o.length:l,c?(R.hasOwnProp(o,l)?o[l]=[o[l],n]:o[l]=n,!s):((!o[l]||!R.isObject(o[l]))&&(o[l]=[]),t(r,n,o[l],i)&&R.isArray(o[l])&&(o[l]=wS(o[l])),!s)}if(R.isFormData(e)&&R.isFunction(e.entries)){const r={};return R.forEachEntry(e,(n,o)=>{t(xS(n),o,r,0)}),r}return null}function CS(e,t,r){if(R.isString(e))try{return(t||JSON.parse)(e),R.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const oa={transitional:bv,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const n=r.getContentType()||"",o=n.indexOf("application/json")>-1,i=R.isObject(t);if(i&&R.isHTMLForm(t)&&(t=new FormData(t)),R.isFormData(t))return o?JSON.stringify(Ev(t)):t;if(R.isArrayBuffer(t)||R.isBuffer(t)||R.isStream(t)||R.isFile(t)||R.isBlob(t)||R.isReadableStream(t))return t;if(R.isArrayBufferView(t))return t.buffer;if(R.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return vS(t,this.formSerializer).toString();if((s=R.isFileList(t))||n.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Dc(s?{"files[]":t}:t,c&&new c,this.formSerializer)}}return i||o?(r.setContentType("application/json",!1),CS(t)):t}],transformResponse:[function(t){const r=this.transitional||oa.transitional,n=r&&r.forcedJSONParsing,o=this.responseType==="json";if(R.isResponse(t)||R.isReadableStream(t))return t;if(t&&R.isString(t)&&(n&&!this.responseType||o)){const l=!(r&&r.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(s){if(l)throw s.name==="SyntaxError"?be.from(s,be.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Hr.classes.FormData,Blob:Hr.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};R.forEach(["delete","get","head","post","put","patch"],e=>{oa.headers[e]={}});const SS=R.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),$S=e=>{const t={};let r,n,o;return e&&e.split(`
`).forEach(function(l){o=l.indexOf(":"),r=l.substring(0,o).trim().toLowerCase(),n=l.substring(o+1).trim(),!(!r||t[r]&&SS[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},H0=Symbol("internals");function qi(e){return e&&String(e).trim().toLowerCase()}function cs(e){return e===!1||e==null?e:R.isArray(e)?e.map(cs):String(e)}function bS(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const ES=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ru(e,t,r,n,o){if(R.isFunction(n))return n.call(this,t,r);if(o&&(t=r),!!R.isString(t)){if(R.isString(n))return t.indexOf(n)!==-1;if(R.isRegExp(n))return n.test(t)}}function jS(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function kS(e,t){const r=R.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(o,i,l){return this[n].call(this,t,o,i,l)},configurable:!0})})}let ir=class{constructor(t){t&&this.set(t)}set(t,r,n){const o=this;function i(s,c,u){const d=qi(c);if(!d)throw new Error("header name must be a non-empty string");const f=R.findKey(o,d);(!f||o[f]===void 0||u===!0||u===void 0&&o[f]!==!1)&&(o[f||c]=cs(s))}const l=(s,c)=>R.forEach(s,(u,d)=>i(u,d,c));if(R.isPlainObject(t)||t instanceof this.constructor)l(t,r);else if(R.isString(t)&&(t=t.trim())&&!ES(t))l($S(t),r);else if(R.isHeaders(t))for(const[s,c]of t.entries())i(c,s,n);else t!=null&&i(r,t,n);return this}get(t,r){if(t=qi(t),t){const n=R.findKey(this,t);if(n){const o=this[n];if(!r)return o;if(r===!0)return bS(o);if(R.isFunction(r))return r.call(this,o,n);if(R.isRegExp(r))return r.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=qi(t),t){const n=R.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||Ru(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let o=!1;function i(l){if(l=qi(l),l){const s=R.findKey(n,l);s&&(!r||Ru(n,n[s],s,r))&&(delete n[s],o=!0)}}return R.isArray(t)?t.forEach(i):i(t),o}clear(t){const r=Object.keys(this);let n=r.length,o=!1;for(;n--;){const i=r[n];(!t||Ru(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const r=this,n={};return R.forEach(this,(o,i)=>{const l=R.findKey(n,i);if(l){r[l]=cs(o),delete r[i];return}const s=t?jS(i):String(i).trim();s!==i&&delete r[i],r[s]=cs(o),n[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return R.forEach(this,(n,o)=>{n!=null&&n!==!1&&(r[o]=t&&R.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(o=>n.set(o)),n}static accessor(t){const n=(this[H0]=this[H0]={accessors:{}}).accessors,o=this.prototype;function i(l){const s=qi(l);n[s]||(kS(o,l),n[s]=!0)}return R.isArray(t)?t.forEach(i):i(t),this}};ir.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);R.reduceDescriptors(ir.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});R.freezeMethods(ir);function Tu(e,t){const r=this||oa,n=t||r,o=ir.from(n.headers);let i=n.data;return R.forEach(e,function(s){i=s.call(r,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function jv(e){return!!(e&&e.__CANCEL__)}function Ri(e,t,r){be.call(this,e??"canceled",be.ERR_CANCELED,t,r),this.name="CanceledError"}R.inherits(Ri,be,{__CANCEL__:!0});function kv(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new be("Request failed with status code "+r.status,[be.ERR_BAD_REQUEST,be.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function OS(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function _S(e,t){e=e||10;const r=new Array(e),n=new Array(e);let o=0,i=0,l;return t=t!==void 0?t:1e3,function(c){const u=Date.now(),d=n[i];l||(l=u),r[o]=c,n[o]=u;let f=i,g=0;for(;f!==o;)g+=r[f++],f=f%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-l<t)return;const C=d&&u-d;return C?Math.round(g*1e3/C):void 0}}function IS(e,t){let r=0,n=1e3/t,o,i;const l=(u,d=Date.now())=>{r=d,o=null,i&&(clearTimeout(i),i=null),e.apply(null,u)};return[(...u)=>{const d=Date.now(),f=d-r;f>=n?l(u,d):(o=u,i||(i=setTimeout(()=>{i=null,l(o)},n-f)))},()=>o&&l(o)]}const Js=(e,t,r=3)=>{let n=0;const o=_S(50,250);return IS(i=>{const l=i.loaded,s=i.lengthComputable?i.total:void 0,c=l-n,u=o(c),d=l<=s;n=l;const f={loaded:l,total:s,progress:s?l/s:void 0,bytes:c,rate:u||void 0,estimated:u&&s&&d?(s-l)/u:void 0,event:i,lengthComputable:s!=null,[t?"download":"upload"]:!0};e(f)},r)},U0=(e,t)=>{const r=e!=null;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},W0=e=>(...t)=>R.asap(()=>e(...t)),RS=Hr.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let n;function o(i){let l=i;return t&&(r.setAttribute("href",l),l=r.href),r.setAttribute("href",l),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=o(window.location.href),function(l){const s=R.isString(l)?o(l):l;return s.protocol===n.protocol&&s.host===n.host}}():function(){return function(){return!0}}(),TS=Hr.hasStandardBrowserEnv?{write(e,t,r,n,o,i){const l=[e+"="+encodeURIComponent(t)];R.isNumber(r)&&l.push("expires="+new Date(r).toGMTString()),R.isString(n)&&l.push("path="+n),R.isString(o)&&l.push("domain="+o),i===!0&&l.push("secure"),document.cookie=l.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function AS(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function DS(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Ov(e,t){return e&&!AS(t)?DS(e,t):t}const q0=e=>e instanceof ir?{...e}:e;function Io(e,t){t=t||{};const r={};function n(u,d,f){return R.isPlainObject(u)&&R.isPlainObject(d)?R.merge.call({caseless:f},u,d):R.isPlainObject(d)?R.merge({},d):R.isArray(d)?d.slice():d}function o(u,d,f){if(R.isUndefined(d)){if(!R.isUndefined(u))return n(void 0,u,f)}else return n(u,d,f)}function i(u,d){if(!R.isUndefined(d))return n(void 0,d)}function l(u,d){if(R.isUndefined(d)){if(!R.isUndefined(u))return n(void 0,u)}else return n(void 0,d)}function s(u,d,f){if(f in t)return n(u,d);if(f in e)return n(void 0,u)}const c={url:i,method:i,data:i,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,withXSRFToken:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:s,headers:(u,d)=>o(q0(u),q0(d),!0)};return R.forEach(Object.keys(Object.assign({},e,t)),function(d){const f=c[d]||o,g=f(e[d],t[d],d);R.isUndefined(g)&&f!==s||(r[d]=g)}),r}const _v=e=>{const t=Io({},e);let{data:r,withXSRFToken:n,xsrfHeaderName:o,xsrfCookieName:i,headers:l,auth:s}=t;t.headers=l=ir.from(l),t.url=$v(Ov(t.baseURL,t.url),e.params,e.paramsSerializer),s&&l.set("Authorization","Basic "+btoa((s.username||"")+":"+(s.password?unescape(encodeURIComponent(s.password)):"")));let c;if(R.isFormData(r)){if(Hr.hasStandardBrowserEnv||Hr.hasStandardBrowserWebWorkerEnv)l.setContentType(void 0);else if((c=l.getContentType())!==!1){const[u,...d]=c?c.split(";").map(f=>f.trim()).filter(Boolean):[];l.setContentType([u||"multipart/form-data",...d].join("; "))}}if(Hr.hasStandardBrowserEnv&&(n&&R.isFunction(n)&&(n=n(t)),n||n!==!1&&RS(t.url))){const u=o&&i&&TS.read(i);u&&l.set(o,u)}return t},zS=typeof XMLHttpRequest<"u",NS=zS&&function(e){return new Promise(function(r,n){const o=_v(e);let i=o.data;const l=ir.from(o.headers).normalize();let{responseType:s,onUploadProgress:c,onDownloadProgress:u}=o,d,f,g,C,x;function w(){C&&C(),x&&x(),o.cancelToken&&o.cancelToken.unsubscribe(d),o.signal&&o.signal.removeEventListener("abort",d)}let v=new XMLHttpRequest;v.open(o.method.toUpperCase(),o.url,!0),v.timeout=o.timeout;function y(){if(!v)return;const p=ir.from("getAllResponseHeaders"in v&&v.getAllResponseHeaders()),E={data:!s||s==="text"||s==="json"?v.responseText:v.response,status:v.status,statusText:v.statusText,headers:p,config:e,request:v};kv(function(O){r(O),w()},function(O){n(O),w()},E),v=null}"onloadend"in v?v.onloadend=y:v.onreadystatechange=function(){!v||v.readyState!==4||v.status===0&&!(v.responseURL&&v.responseURL.indexOf("file:")===0)||setTimeout(y)},v.onabort=function(){v&&(n(new be("Request aborted",be.ECONNABORTED,e,v)),v=null)},v.onerror=function(){n(new be("Network Error",be.ERR_NETWORK,e,v)),v=null},v.ontimeout=function(){let $=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const E=o.transitional||bv;o.timeoutErrorMessage&&($=o.timeoutErrorMessage),n(new be($,E.clarifyTimeoutError?be.ETIMEDOUT:be.ECONNABORTED,e,v)),v=null},i===void 0&&l.setContentType(null),"setRequestHeader"in v&&R.forEach(l.toJSON(),function($,E){v.setRequestHeader(E,$)}),R.isUndefined(o.withCredentials)||(v.withCredentials=!!o.withCredentials),s&&s!=="json"&&(v.responseType=o.responseType),u&&([g,x]=Js(u,!0),v.addEventListener("progress",g)),c&&v.upload&&([f,C]=Js(c),v.upload.addEventListener("progress",f),v.upload.addEventListener("loadend",C)),(o.cancelToken||o.signal)&&(d=p=>{v&&(n(!p||p.type?new Ri(null,e,v):p),v.abort(),v=null)},o.cancelToken&&o.cancelToken.subscribe(d),o.signal&&(o.signal.aborted?d():o.signal.addEventListener("abort",d)));const h=OS(o.url);if(h&&Hr.protocols.indexOf(h)===-1){n(new be("Unsupported protocol "+h+":",be.ERR_BAD_REQUEST,e));return}v.send(i||null)})},PS=(e,t)=>{let r=new AbortController,n;const o=function(c){if(!n){n=!0,l();const u=c instanceof Error?c:this.reason;r.abort(u instanceof be?u:new Ri(u instanceof Error?u.message:u))}};let i=t&&setTimeout(()=>{o(new be(`timeout ${t} of ms exceeded`,be.ETIMEDOUT))},t);const l=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(c=>{c&&(c.removeEventListener?c.removeEventListener("abort",o):c.unsubscribe(o))}),e=null)};e.forEach(c=>c&&c.addEventListener&&c.addEventListener("abort",o));const{signal:s}=r;return s.unsubscribe=l,[s,()=>{i&&clearTimeout(i),i=null}]},MS=function*(e,t){let r=e.byteLength;if(!t||r<t){yield e;return}let n=0,o;for(;n<r;)o=n+t,yield e.slice(n,o),n=o},LS=async function*(e,t,r){for await(const n of e)yield*MS(ArrayBuffer.isView(n)?n:await r(String(n)),t)},K0=(e,t,r,n,o)=>{const i=LS(e,t,o);let l=0,s,c=u=>{s||(s=!0,n&&n(u))};return new ReadableStream({async pull(u){try{const{done:d,value:f}=await i.next();if(d){c(),u.close();return}let g=f.byteLength;if(r){let C=l+=g;r(C)}u.enqueue(new Uint8Array(f))}catch(d){throw c(d),d}},cancel(u){return c(u),i.return()}},{highWaterMark:2})},zc=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Iv=zc&&typeof ReadableStream=="function",nf=zc&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Rv=(e,...t)=>{try{return!!e(...t)}catch{return!1}},FS=Iv&&Rv(()=>{let e=!1;const t=new Request(Hr.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Q0=64*1024,of=Iv&&Rv(()=>R.isReadableStream(new Response("").body)),Xs={stream:of&&(e=>e.body)};zc&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Xs[t]&&(Xs[t]=R.isFunction(e[t])?r=>r[t]():(r,n)=>{throw new be(`Response type '${t}' is not supported`,be.ERR_NOT_SUPPORT,n)})})})(new Response);const GS=async e=>{if(e==null)return 0;if(R.isBlob(e))return e.size;if(R.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(R.isArrayBufferView(e)||R.isArrayBuffer(e))return e.byteLength;if(R.isURLSearchParams(e)&&(e=e+""),R.isString(e))return(await nf(e)).byteLength},BS=async(e,t)=>{const r=R.toFiniteNumber(e.getContentLength());return r??GS(t)},VS=zc&&(async e=>{let{url:t,method:r,data:n,signal:o,cancelToken:i,timeout:l,onDownloadProgress:s,onUploadProgress:c,responseType:u,headers:d,withCredentials:f="same-origin",fetchOptions:g}=_v(e);u=u?(u+"").toLowerCase():"text";let[C,x]=o||i||l?PS([o,i],l):[],w,v;const y=()=>{!w&&setTimeout(()=>{C&&C.unsubscribe()}),w=!0};let h;try{if(c&&FS&&r!=="get"&&r!=="head"&&(h=await BS(d,n))!==0){let k=new Request(t,{method:"POST",body:n,duplex:"half"}),O;if(R.isFormData(n)&&(O=k.headers.get("content-type"))&&d.setContentType(O),k.body){const[T,J]=U0(h,Js(W0(c)));n=K0(k.body,Q0,T,J,nf)}}R.isString(f)||(f=f?"include":"omit"),v=new Request(t,{...g,signal:C,method:r.toUpperCase(),headers:d.normalize().toJSON(),body:n,duplex:"half",credentials:f});let p=await fetch(v);const $=of&&(u==="stream"||u==="response");if(of&&(s||$)){const k={};["status","statusText","headers"].forEach(H=>{k[H]=p[H]});const O=R.toFiniteNumber(p.headers.get("content-length")),[T,J]=s&&U0(O,Js(W0(s),!0))||[];p=new Response(K0(p.body,Q0,T,()=>{J&&J(),$&&y()},nf),k)}u=u||"text";let E=await Xs[R.findKey(Xs,u)||"text"](p,e);return!$&&y(),x&&x(),await new Promise((k,O)=>{kv(k,O,{data:E,headers:ir.from(p.headers),status:p.status,statusText:p.statusText,config:e,request:v})})}catch(p){throw y(),p&&p.name==="TypeError"&&/fetch/i.test(p.message)?Object.assign(new be("Network Error",be.ERR_NETWORK,e,v),{cause:p.cause||p}):be.from(p,p&&p.code,e,v)}}),lf={http:lS,xhr:NS,fetch:VS};R.forEach(lf,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const J0=e=>`- ${e}`,HS=e=>R.isFunction(e)||e===null||e===!1,Tv={getAdapter:e=>{e=R.isArray(e)?e:[e];const{length:t}=e;let r,n;const o={};for(let i=0;i<t;i++){r=e[i];let l;if(n=r,!HS(r)&&(n=lf[(l=String(r)).toLowerCase()],n===void 0))throw new be(`Unknown adapter '${l}'`);if(n)break;o[l||"#"+i]=n}if(!n){const i=Object.entries(o).map(([s,c])=>`adapter ${s} `+(c===!1?"is not supported by the environment":"is not available in the build"));let l=t?i.length>1?`since :
`+i.map(J0).join(`
`):" "+J0(i[0]):"as no adapter specified";throw new be("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return n},adapters:lf};function Au(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ri(null,e)}function X0(e){return Au(e),e.headers=ir.from(e.headers),e.data=Tu.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Tv.getAdapter(e.adapter||oa.adapter)(e).then(function(n){return Au(e),n.data=Tu.call(e,e.transformResponse,n),n.headers=ir.from(n.headers),n},function(n){return jv(n)||(Au(e),n&&n.response&&(n.response.data=Tu.call(e,e.transformResponse,n.response),n.response.headers=ir.from(n.response.headers))),Promise.reject(n)})}const Av="1.7.4",_h={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{_h[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const Y0={};_h.transitional=function(t,r,n){function o(i,l){return"[Axios v"+Av+"] Transitional option '"+i+"'"+l+(n?". "+n:"")}return(i,l,s)=>{if(t===!1)throw new be(o(l," has been removed"+(r?" in "+r:"")),be.ERR_DEPRECATED);return r&&!Y0[l]&&(Y0[l]=!0,console.warn(o(l," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(i,l,s):!0}};function US(e,t,r){if(typeof e!="object")throw new be("options must be an object",be.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let o=n.length;for(;o-- >0;){const i=n[o],l=t[i];if(l){const s=e[i],c=s===void 0||l(s,i,e);if(c!==!0)throw new be("option "+i+" must be "+c,be.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new be("Unknown option "+i,be.ERR_BAD_OPTION)}}const af={assertOptions:US,validators:_h},kn=af.validators;let bo=class{constructor(t){this.defaults=t,this.interceptors={request:new V0,response:new V0}}async request(t,r){try{return await this._request(t,r)}catch(n){if(n instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{n.stack?i&&!String(n.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+i):n.stack=i}catch{}}throw n}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=Io(this.defaults,r);const{transitional:n,paramsSerializer:o,headers:i}=r;n!==void 0&&af.assertOptions(n,{silentJSONParsing:kn.transitional(kn.boolean),forcedJSONParsing:kn.transitional(kn.boolean),clarifyTimeoutError:kn.transitional(kn.boolean)},!1),o!=null&&(R.isFunction(o)?r.paramsSerializer={serialize:o}:af.assertOptions(o,{encode:kn.function,serialize:kn.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let l=i&&R.merge(i.common,i[r.method]);i&&R.forEach(["delete","get","head","post","put","patch","common"],x=>{delete i[x]}),r.headers=ir.concat(l,i);const s=[];let c=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(r)===!1||(c=c&&w.synchronous,s.unshift(w.fulfilled,w.rejected))});const u=[];this.interceptors.response.forEach(function(w){u.push(w.fulfilled,w.rejected)});let d,f=0,g;if(!c){const x=[X0.bind(this),void 0];for(x.unshift.apply(x,s),x.push.apply(x,u),g=x.length,d=Promise.resolve(r);f<g;)d=d.then(x[f++],x[f++]);return d}g=s.length;let C=r;for(f=0;f<g;){const x=s[f++],w=s[f++];try{C=x(C)}catch(v){w.call(this,v);break}}try{d=X0.call(this,C)}catch(x){return Promise.reject(x)}for(f=0,g=u.length;f<g;)d=d.then(u[f++],u[f++]);return d}getUri(t){t=Io(this.defaults,t);const r=Ov(t.baseURL,t.url);return $v(r,t.params,t.paramsSerializer)}};R.forEach(["delete","get","head","options"],function(t){bo.prototype[t]=function(r,n){return this.request(Io(n||{},{method:t,url:r,data:(n||{}).data}))}});R.forEach(["post","put","patch"],function(t){function r(n){return function(i,l,s){return this.request(Io(s||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:i,data:l}))}}bo.prototype[t]=r(),bo.prototype[t+"Form"]=r(!0)});let WS=class Dv{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(i){r=i});const n=this;this.promise.then(o=>{if(!n._listeners)return;let i=n._listeners.length;for(;i-- >0;)n._listeners[i](o);n._listeners=null}),this.promise.then=o=>{let i;const l=new Promise(s=>{n.subscribe(s),i=s}).then(o);return l.cancel=function(){n.unsubscribe(i)},l},t(function(i,l,s){n.reason||(n.reason=new Ri(i,l,s),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new Dv(function(o){t=o}),cancel:t}}};function qS(e){return function(r){return e.apply(null,r)}}function KS(e){return R.isObject(e)&&e.isAxiosError===!0}const sf={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(sf).forEach(([e,t])=>{sf[t]=e});function zv(e){const t=new bo(e),r=dv(bo.prototype.request,t);return R.extend(r,bo.prototype,t,{allOwnKeys:!0}),R.extend(r,t,null,{allOwnKeys:!0}),r.create=function(o){return zv(Io(e,o))},r}const nt=zv(oa);nt.Axios=bo;nt.CanceledError=Ri;nt.CancelToken=WS;nt.isCancel=jv;nt.VERSION=Av;nt.toFormData=Dc;nt.AxiosError=be;nt.Cancel=nt.CanceledError;nt.all=function(t){return Promise.all(t)};nt.spread=qS;nt.isAxiosError=KS;nt.mergeConfig=Io;nt.AxiosHeaders=ir;nt.formToJSON=e=>Ev(R.isHTMLForm(e)?new FormData(e):e);nt.getAdapter=Tv.getAdapter;nt.HttpStatusCode=sf;nt.default=nt;const{Axios:AE,AxiosError:DE,CanceledError:zE,isCancel:NE,CancelToken:PE,VERSION:ME,all:LE,Cancel:FE,isAxiosError:GE,spread:BE,toFormData:VE,AxiosHeaders:HE,HttpStatusCode:UE,formToJSON:QS,getAdapter:WE,mergeConfig:qE}=nt;function Nv(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=Nv(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function Mn(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=Nv(e))&&(n&&(n+=" "),n+=t);return n}const gl=e=>typeof e=="number"&&!isNaN(e),Ro=e=>typeof e=="string",tr=e=>typeof e=="function",us=e=>Ro(e)||tr(e)?e:null,Du=e=>j.isValidElement(e)||Ro(e)||tr(e)||gl(e);function JS(e,t,r){r===void 0&&(r=300);const{scrollHeight:n,style:o}=e;requestAnimationFrame(()=>{o.minHeight="initial",o.height=n+"px",o.transition=`all ${r}ms`,requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,r)})})}function Nc(e){let{enter:t,exit:r,appendPosition:n=!1,collapse:o=!0,collapseDuration:i=300}=e;return function(l){let{children:s,position:c,preventExitTransition:u,done:d,nodeRef:f,isIn:g}=l;const C=n?`${t}--${c}`:t,x=n?`${r}--${c}`:r,w=j.useRef(0);return j.useLayoutEffect(()=>{const v=f.current,y=C.split(" "),h=p=>{p.target===f.current&&(v.dispatchEvent(new Event("d")),v.removeEventListener("animationend",h),v.removeEventListener("animationcancel",h),w.current===0&&p.type!=="animationcancel"&&v.classList.remove(...y))};v.classList.add(...y),v.addEventListener("animationend",h),v.addEventListener("animationcancel",h)},[]),j.useEffect(()=>{const v=f.current,y=()=>{v.removeEventListener("animationend",y),o?JS(v,d,i):d()};g||(u?y():(w.current=1,v.className+=` ${x}`,v.addEventListener("animationend",y)))},[g]),Se.createElement(Se.Fragment,null,s)}}function Z0(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const Er={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const r=this.list.get(e).filter(n=>n!==t);return this.list.set(e,r),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const r=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(r)})}},Pa=e=>{let{theme:t,type:r,...n}=e;return Se.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${r})`,...n})},zu={info:function(e){return Se.createElement(Pa,{...e},Se.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return Se.createElement(Pa,{...e},Se.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return Se.createElement(Pa,{...e},Se.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return Se.createElement(Pa,{...e},Se.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return Se.createElement("div",{className:"Toastify__spinner"})}};function XS(e){const[,t]=j.useReducer(C=>C+1,0),[r,n]=j.useState([]),o=j.useRef(null),i=j.useRef(new Map).current,l=C=>r.indexOf(C)!==-1,s=j.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:l,getToast:C=>i.get(C)}).current;function c(C){let{containerId:x}=C;const{limit:w}=s.props;!w||x&&s.containerId!==x||(s.count-=s.queue.length,s.queue=[])}function u(C){n(x=>C==null?[]:x.filter(w=>w!==C))}function d(){const{toastContent:C,toastProps:x,staleId:w}=s.queue.shift();g(C,x,w)}function f(C,x){let{delay:w,staleId:v,...y}=x;if(!Du(C)||function(Y){return!o.current||s.props.enableMultiContainer&&Y.containerId!==s.props.containerId||i.has(Y.toastId)&&Y.updateId==null}(y))return;const{toastId:h,updateId:p,data:$}=y,{props:E}=s,k=()=>u(h),O=p==null;O&&s.count++;const T={...E,style:E.toastStyle,key:s.toastKey++,...Object.fromEntries(Object.entries(y).filter(Y=>{let[ye,N]=Y;return N!=null})),toastId:h,updateId:p,data:$,closeToast:k,isIn:!1,className:us(y.className||E.toastClassName),bodyClassName:us(y.bodyClassName||E.bodyClassName),progressClassName:us(y.progressClassName||E.progressClassName),autoClose:!y.isLoading&&(J=y.autoClose,H=E.autoClose,J===!1||gl(J)&&J>0?J:H),deleteToast(){const Y=Z0(i.get(h),"removed");i.delete(h),Er.emit(4,Y);const ye=s.queue.length;if(s.count=h==null?s.count-s.displayedToast:s.count-1,s.count<0&&(s.count=0),ye>0){const N=h==null?s.props.limit:1;if(ye===1||N===1)s.displayedToast++,d();else{const A=N>ye?ye:N;s.displayedToast=A;for(let U=0;U<A;U++)d()}}else t()}};var J,H;T.iconOut=function(Y){let{theme:ye,type:N,isLoading:A,icon:U}=Y,ne=null;const M={theme:ye,type:N};return U===!1||(tr(U)?ne=U(M):j.isValidElement(U)?ne=j.cloneElement(U,M):Ro(U)||gl(U)?ne=U:A?ne=zu.spinner():(Z=>Z in zu)(N)&&(ne=zu[N](M))),ne}(T),tr(y.onOpen)&&(T.onOpen=y.onOpen),tr(y.onClose)&&(T.onClose=y.onClose),T.closeButton=E.closeButton,y.closeButton===!1||Du(y.closeButton)?T.closeButton=y.closeButton:y.closeButton===!0&&(T.closeButton=!Du(E.closeButton)||E.closeButton);let ge=C;j.isValidElement(C)&&!Ro(C.type)?ge=j.cloneElement(C,{closeToast:k,toastProps:T,data:$}):tr(C)&&(ge=C({closeToast:k,toastProps:T,data:$})),E.limit&&E.limit>0&&s.count>E.limit&&O?s.queue.push({toastContent:ge,toastProps:T,staleId:v}):gl(w)?setTimeout(()=>{g(ge,T,v)},w):g(ge,T,v)}function g(C,x,w){const{toastId:v}=x;w&&i.delete(w);const y={content:C,props:x};i.set(v,y),n(h=>[...h,v].filter(p=>p!==w)),Er.emit(4,Z0(y,y.props.updateId==null?"added":"updated"))}return j.useEffect(()=>(s.containerId=e.containerId,Er.cancelEmit(3).on(0,f).on(1,C=>o.current&&u(C)).on(5,c).emit(2,s),()=>{i.clear(),Er.emit(3,s)}),[]),j.useEffect(()=>{s.props=e,s.isToastActive=l,s.displayedToast=r.length}),{getToastToRender:function(C){const x=new Map,w=Array.from(i.values());return e.newestOnTop&&w.reverse(),w.forEach(v=>{const{position:y}=v.props;x.has(y)||x.set(y,[]),x.get(y).push(v)}),Array.from(x,v=>C(v[0],v[1]))},containerRef:o,isToastActive:l}}function em(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function tm(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function YS(e){const[t,r]=j.useState(!1),[n,o]=j.useState(!1),i=j.useRef(null),l=j.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,s=j.useRef(e),{autoClose:c,pauseOnHover:u,closeToast:d,onClick:f,closeOnClick:g}=e;function C($){if(e.draggable){$.nativeEvent.type==="touchstart"&&$.nativeEvent.preventDefault(),l.didMove=!1,document.addEventListener("mousemove",y),document.addEventListener("mouseup",h),document.addEventListener("touchmove",y),document.addEventListener("touchend",h);const E=i.current;l.canCloseOnClick=!0,l.canDrag=!0,l.boundingRect=E.getBoundingClientRect(),E.style.transition="",l.x=em($.nativeEvent),l.y=tm($.nativeEvent),e.draggableDirection==="x"?(l.start=l.x,l.removalDistance=E.offsetWidth*(e.draggablePercent/100)):(l.start=l.y,l.removalDistance=E.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function x($){if(l.boundingRect){const{top:E,bottom:k,left:O,right:T}=l.boundingRect;$.nativeEvent.type!=="touchend"&&e.pauseOnHover&&l.x>=O&&l.x<=T&&l.y>=E&&l.y<=k?v():w()}}function w(){r(!0)}function v(){r(!1)}function y($){const E=i.current;l.canDrag&&E&&(l.didMove=!0,t&&v(),l.x=em($),l.y=tm($),l.delta=e.draggableDirection==="x"?l.x-l.start:l.y-l.start,l.start!==l.x&&(l.canCloseOnClick=!1),E.style.transform=`translate${e.draggableDirection}(${l.delta}px)`,E.style.opacity=""+(1-Math.abs(l.delta/l.removalDistance)))}function h(){document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",h),document.removeEventListener("touchmove",y),document.removeEventListener("touchend",h);const $=i.current;if(l.canDrag&&l.didMove&&$){if(l.canDrag=!1,Math.abs(l.delta)>l.removalDistance)return o(!0),void e.closeToast();$.style.transition="transform 0.2s, opacity 0.2s",$.style.transform=`translate${e.draggableDirection}(0)`,$.style.opacity="1"}}j.useEffect(()=>{s.current=e}),j.useEffect(()=>(i.current&&i.current.addEventListener("d",w,{once:!0}),tr(e.onOpen)&&e.onOpen(j.isValidElement(e.children)&&e.children.props),()=>{const $=s.current;tr($.onClose)&&$.onClose(j.isValidElement($.children)&&$.children.props)}),[]),j.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||v(),window.addEventListener("focus",w),window.addEventListener("blur",v)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",w),window.removeEventListener("blur",v))}),[e.pauseOnFocusLoss]);const p={onMouseDown:C,onTouchStart:C,onMouseUp:x,onTouchEnd:x};return c&&u&&(p.onMouseEnter=v,p.onMouseLeave=w),g&&(p.onClick=$=>{f&&f($),l.canCloseOnClick&&d()}),{playToast:w,pauseToast:v,isRunning:t,preventExitTransition:n,toastRef:i,eventHandlers:p}}function Pv(e){let{closeToast:t,theme:r,ariaLabel:n="close"}=e;return Se.createElement("button",{className:`Toastify__close-button Toastify__close-button--${r}`,type:"button",onClick:o=>{o.stopPropagation(),t(o)},"aria-label":n},Se.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Se.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function ZS(e){let{delay:t,isRunning:r,closeToast:n,type:o="default",hide:i,className:l,style:s,controlledProgress:c,progress:u,rtl:d,isIn:f,theme:g}=e;const C=i||c&&u===0,x={...s,animationDuration:`${t}ms`,animationPlayState:r?"running":"paused",opacity:C?0:1};c&&(x.transform=`scaleX(${u})`);const w=Mn("Toastify__progress-bar",c?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${g}`,`Toastify__progress-bar--${o}`,{"Toastify__progress-bar--rtl":d}),v=tr(l)?l({rtl:d,type:o,defaultClassName:w}):Mn(w,l);return Se.createElement("div",{role:"progressbar","aria-hidden":C?"true":"false","aria-label":"notification timer",className:v,style:x,[c&&u>=1?"onTransitionEnd":"onAnimationEnd"]:c&&u<1?null:()=>{f&&n()}})}const e6=e=>{const{isRunning:t,preventExitTransition:r,toastRef:n,eventHandlers:o}=YS(e),{closeButton:i,children:l,autoClose:s,onClick:c,type:u,hideProgressBar:d,closeToast:f,transition:g,position:C,className:x,style:w,bodyClassName:v,bodyStyle:y,progressClassName:h,progressStyle:p,updateId:$,role:E,progress:k,rtl:O,toastId:T,deleteToast:J,isIn:H,isLoading:ge,iconOut:Y,closeOnClick:ye,theme:N}=e,A=Mn("Toastify__toast",`Toastify__toast-theme--${N}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":O},{"Toastify__toast--close-on-click":ye}),U=tr(x)?x({rtl:O,position:C,type:u,defaultClassName:A}):Mn(A,x),ne=!!k||!s,M={closeToast:f,type:u,theme:N};let Z=null;return i===!1||(Z=tr(i)?i(M):j.isValidElement(i)?j.cloneElement(i,M):Pv(M)),Se.createElement(g,{isIn:H,done:J,position:C,preventExitTransition:r,nodeRef:n},Se.createElement("div",{id:T,onClick:c,className:U,...o,style:w,ref:n},Se.createElement("div",{...H&&{role:E},className:tr(v)?v({type:u}):Mn("Toastify__toast-body",v),style:y},Y!=null&&Se.createElement("div",{className:Mn("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!ge})},Y),Se.createElement("div",null,l)),Z,Se.createElement(ZS,{...$&&!ne?{key:`pb-${$}`}:{},rtl:O,theme:N,delay:s,isRunning:t,isIn:H,closeToast:f,hide:d,type:u,style:p,className:h,controlledProgress:ne,progress:k||0})))},Pc=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},t6=Nc(Pc("bounce",!0));Nc(Pc("slide",!0));Nc(Pc("zoom"));Nc(Pc("flip"));const cf=j.forwardRef((e,t)=>{const{getToastToRender:r,containerRef:n,isToastActive:o}=XS(e),{className:i,style:l,rtl:s,containerId:c}=e;function u(d){const f=Mn("Toastify__toast-container",`Toastify__toast-container--${d}`,{"Toastify__toast-container--rtl":s});return tr(i)?i({position:d,rtl:s,defaultClassName:f}):Mn(f,us(i))}return j.useEffect(()=>{t&&(t.current=n.current)},[]),Se.createElement("div",{ref:n,className:"Toastify",id:c},r((d,f)=>{const g=f.length?{...l}:{...l,pointerEvents:"none"};return Se.createElement("div",{className:u(d),style:g,key:`container-${d}`},f.map((C,x)=>{let{content:w,props:v}=C;return Se.createElement(e6,{...v,isIn:o(v.toastId),style:{...v.style,"--nth":x+1,"--len":f.length},key:`toast-${v.key}`},w)}))}))});cf.displayName="ToastContainer",cf.defaultProps={position:"top-right",transition:t6,autoClose:5e3,closeButton:Pv,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let Nu,so=new Map,Zi=[],r6=1;function Mv(){return""+r6++}function n6(e){return e&&(Ro(e.toastId)||gl(e.toastId))?e.toastId:Mv()}function yl(e,t){return so.size>0?Er.emit(0,e,t):Zi.push({content:e,options:t}),t.toastId}function Ys(e,t){return{...t,type:t&&t.type||e,toastId:n6(t)}}function Ma(e){return(t,r)=>yl(t,Ys(e,r))}function Ce(e,t){return yl(e,Ys("default",t))}Ce.loading=(e,t)=>yl(e,Ys("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),Ce.promise=function(e,t,r){let n,{pending:o,error:i,success:l}=t;o&&(n=Ro(o)?Ce.loading(o,r):Ce.loading(o.render,{...r,...o}));const s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=(d,f,g)=>{if(f==null)return void Ce.dismiss(n);const C={type:d,...s,...r,data:g},x=Ro(f)?{render:f}:f;return n?Ce.update(n,{...C,...x}):Ce(x.render,{...C,...x}),g},u=tr(e)?e():e;return u.then(d=>c("success",l,d)).catch(d=>c("error",i,d)),u},Ce.success=Ma("success"),Ce.info=Ma("info"),Ce.error=Ma("error"),Ce.warning=Ma("warning"),Ce.warn=Ce.warning,Ce.dark=(e,t)=>yl(e,Ys("default",{theme:"dark",...t})),Ce.dismiss=e=>{so.size>0?Er.emit(1,e):Zi=Zi.filter(t=>e!=null&&t.options.toastId!==e)},Ce.clearWaitingQueue=function(e){return e===void 0&&(e={}),Er.emit(5,e)},Ce.isActive=e=>{let t=!1;return so.forEach(r=>{r.isToastActive&&r.isToastActive(e)&&(t=!0)}),t},Ce.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const r=function(n,o){let{containerId:i}=o;const l=so.get(i||Nu);return l&&l.getToast(n)}(e,t);if(r){const{props:n,content:o}=r,i={delay:100,...n,...t,toastId:t.toastId||e,updateId:Mv()};i.toastId!==e&&(i.staleId=e);const l=i.render||o;delete i.render,yl(l,i)}},0)},Ce.done=e=>{Ce.update(e,{progress:1})},Ce.onChange=e=>(Er.on(4,e),()=>{Er.off(4,e)}),Ce.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Ce.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},Er.on(2,e=>{Nu=e.containerId||e,so.set(Nu,e),Zi.forEach(t=>{Er.emit(0,t.content,t.options)}),Zi=[]}).on(3,e=>{so.delete(e.containerId||e),so.size===0&&Er.off(0).off(1).off(5)});const La=window.location.hostname.split(".")[0];class el{}Mi(el,"users",nt.create({baseURL:`https://supervisor.infotecrs.inf.br/api/users-service/${La}`})),Mi(el,"customers",nt.create({baseURL:`https://supervisor.infotecrs.inf.br/api/customers-service/${La}`})),Mi(el,"exceptions",nt.create({baseURL:`https://supervisor.infotecrs.inf.br/api/exceptions-service/${La}`})),Mi(el,"monitoring",nt.create({baseURL:`https://supervisor.infotecrs.inf.br/api/monitoring-service/${La}`}));async function de({method:e,service:t,endpoint:r,onSuccess:n,onError:o,loadingState:i,requestHeaders:l,params:s,requestData:c,enableToast:u,successToastMessage:d}){try{i&&i.set(!0);const f=el[t];let g;const C=localStorage.getItem("@inpulse/auth-token"),x={Authorization:C?`Bearer ${C}`:void 0,...l};switch(e){case"post":g=await f.post(r,c,{headers:x,params:s});break;case"patch":g=await f.patch(r,c,{headers:x,params:s});break;case"put":g=await f.put(r,c,{headers:x,params:s});break;case"delete":g=await f.delete(r,{headers:x,params:s});break;default:g=await f.get(r,{headers:x,params:s});break}n(g.data),u&&d&&Ce.success(d)}catch(f){console.error(f!=null&&f.response?f.response.data:f==null?void 0:f.message),console.log(f.response.data),f.response.data.errors&&Ce.error(Object.values(f.response.data.errors[0].constraints)[0]),u&&Ce.error(f.response?f.response.data:f==null?void 0:f.message),o&&o(f)}finally{i&&i.set(!1)}}const Qe=j.createContext({}),o6=({children:e})=>{const t=P(!1),r=P(null),n=P(null),o=({login:l,password:s,loadingState:c})=>{de({method:"post",service:"users",endpoint:"/auth",enableToast:!0,loadingState:c,requestData:{LOGIN:l,SENHA:s},onSuccess:u=>{console.log(u.message),localStorage.setItem("@inpulse/auth-token",u.token),nt.defaults.headers.authorization=`Bearer ${u.token}`,r.set(u.user)}})},i=()=>{localStorage.removeItem("@inpulse/auth-token"),r.set(null)};return j.useEffect(()=>{const l=window.localStorage.getItem("@inpulse/dark-mode");t.set(!!Number(l)),localStorage.getItem("@inpulse/auth-token")&&de({method:"get",service:"users",endpoint:"/auth",onSuccess:c=>{console.log(c.message),r.set(c.user)}})},[]),a.jsx(Qe.Provider,{value:{darkModeState:t,userState:r,modalState:n,login:o,logout:i},children:e})};var i6={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function Lv(e){if(typeof e=="number")return{value:e,unit:"px"};var t,r=(e.match(/^[0-9.]*/)||"").toString();r.includes(".")?t=parseFloat(r):t=parseInt(r,10);var n=(e.match(/[^0-9]*$/)||"").toString();return i6[n]?{value:t,unit:n}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}function Fa(e){var t=Lv(e);return"".concat(t.value).concat(t.unit)}var l6=function(e,t,r){var n="react-spinners-".concat(e,"-").concat(r);if(typeof window>"u"||!window.document)return n;var o=document.createElement("style");document.head.appendChild(o);var i=o.sheet,l=`
    @keyframes `.concat(n,` {
      `).concat(t,`
    }
  `);return i&&i.insertRule(l,0),n},yt=function(){return yt=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},yt.apply(this,arguments)},a6=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r},s6=l6("FadeLoader","50% {opacity: 0.3} 100% {opacity: 1}","fade");function c6(e){var t=e.loading,r=t===void 0?!0:t,n=e.color,o=n===void 0?"#000000":n,i=e.speedMultiplier,l=i===void 0?1:i,s=e.cssOverride,c=s===void 0?{}:s,u=e.height,d=u===void 0?15:u,f=e.width,g=f===void 0?5:f,C=e.radius,x=C===void 0?2:C,w=e.margin,v=w===void 0?2:w,y=a6(e,["loading","color","speedMultiplier","cssOverride","height","width","radius","margin"]),h=Lv(v).value,p=h+18,$=p/2+p/5.5,E=yt({display:"inherit",position:"relative",fontSize:"0",top:p,left:p,width:"".concat(p*3,"px"),height:"".concat(p*3,"px")},c),k=function(A){return{position:"absolute",width:Fa(g),height:Fa(d),margin:Fa(v),backgroundColor:o,borderRadius:Fa(x),transition:"2s",animationFillMode:"both",animation:"".concat(s6," ").concat(1.2/l,"s ").concat(A*.12,"s infinite ease-in-out")}},O=yt(yt({},k(1)),{top:"".concat(p,"px"),left:"0"}),T=yt(yt({},k(2)),{top:"".concat($,"px"),left:"".concat($,"px"),transform:"rotate(-45deg)"}),J=yt(yt({},k(3)),{top:"0",left:"".concat(p,"px"),transform:"rotate(90deg)"}),H=yt(yt({},k(4)),{top:"".concat(-1*$,"px"),left:"".concat($,"px"),transform:"rotate(45deg)"}),ge=yt(yt({},k(5)),{top:"".concat(-1*p,"px"),left:"0"}),Y=yt(yt({},k(6)),{top:"".concat(-1*$,"px"),left:"".concat(-1*$,"px"),transform:"rotate(-45deg)"}),ye=yt(yt({},k(7)),{top:"0",left:"".concat(-1*p,"px"),transform:"rotate(90deg)"}),N=yt(yt({},k(8)),{top:"".concat($,"px"),left:"".concat(-1*$,"px"),transform:"rotate(45deg)"});return r?j.createElement("span",yt({style:E},y),j.createElement("span",{style:O}),j.createElement("span",{style:T}),j.createElement("span",{style:J}),j.createElement("span",{style:H}),j.createElement("span",{style:ge}),j.createElement("span",{style:Y}),j.createElement("span",{style:ye}),j.createElement("span",{style:N})):null}const m={colorPrimary:"var(--color-primary)",colorGrey:{0:"var(--color-grey-0)",1:"var(--color-grey-1)",2:"var(--color-grey-2)",3:"var(--color-grey-3)",4:"var(--color-grey-4)",5:"var(--color-grey-5)",6:"var(--color-grey-6)","6h":"var(--color-grey-6-h)",7:"var(--color-grey-7)","7h":"var(--color-grey-7-h)",8:"var(--color-grey-8)"}},Mc=()=>a.jsx(c6,{className:"loading_spinner",color:m.colorGrey[3]}),u6=()=>{const e=P(!1),t=P(!1),{login:r}=j.useContext(Qe),n=o=>{o.preventDefault();const i=QS(o.currentTarget);r({login:i.login,password:i.password,loadingState:t})};return a.jsx(Rw,{children:a.jsx("div",{children:a.jsxs("form",{onSubmit:n,children:[a.jsx("img",{src:Tw,alt:"logo"}),a.jsx("h2",{children:" Painel do Supervisor "}),a.jsx(V,{$color:"rgb(221, 223, 225)",$focusColor:"white",$padding:[1,1],$width:"20rem",type:"text",name:"login",placeholder:"Usuário",leftIcon:null,rightIcon:a.jsx(cv,{}),required:!0}),a.jsx(V,{$color:"rgb(221, 223, 225)",$focusColor:"white",$padding:[1,1],$width:"20rem",type:e.value?"text":"password",placeholder:"Senha",name:"password",leftIcon:null,rightIcon:e.value?a.jsx(wC,{onClick:()=>e.set(!1),style:{cursor:"pointer"}}):a.jsx(aC,{onClick:()=>e.set(!0),style:{cursor:"pointer"}}),required:!0}),a.jsx("button",{disabled:t.value,children:t.value?a.jsx(Mc,{}):"Entrar"})]})})})},d6=Q.div`
    ${e=>Ge`
        box-sizing: border-box;
        width: ${e.$width};
        user-select: none;
        position: relative;
        border: 1px solid ${e.$borderColor||e.$color};
        border-radius: 0.25rem;
        ${e.$disableBorder&&Ge`border-color: transparent;`}
        transition: 0.2s ease-in-out;

        &:hover {
            background-color: rgba(100,110,125, 0.15);
        }

        &:focus-within {
            border-color: ${e.$focusColor};
            background-color: rgba(240,245,255, 0.15);
            ${e.$disableBorder&&Ge`border-color: transparent;`}
        }

        >div {
            >.icons {
                width: max-content;
                padding: ${e.$padding[0]*.5+"rem"} ${e.$padding[0]*.5+"rem"};
                display: flex;
                align-items: center;
            }
        }

        >div>.icons>svg {
            font-size: ${e.$fontSize?e.$fontSize*1.125+"rem":"1rem"};
            width: ${e.$fontSize?e.$fontSize*1.125+"rem":"1rem"};
            color: ${e.$color};
            padding: ${e.$padding[0]*.5+"rem"} ${e.$padding[0]*.5+"rem"};
            border-radius: 0.25rem;
            transition: 0.2s ease-in-out;

            :hover {
                background-color: rgba(70, 80, 95, 0.25);
            }

            @media (max-width: 50rem) {
                font-size: ${e.$fontSize?e.$fontSize*1.125*.85+"rem":"0.875rem"};
                width: ${e.$fontSize?e.$fontSize*1.125*.85+"rem":"0.875rem"};
            }
        }

        >div:nth-child(1) {
            display: flex;
            align-items: center;
            box-sizing: border-box;
            width: 100%;
            
            ${e.$disabled?"":Ge`cursor: pointer;`}

            ${e.$leftIcon&&Ge`
                >svg {
                    padding: ${e.$padding[0]+"rem"} ${e.$padding[1]+"rem"};
                    color: ${e.$color};
                    font-size: ${e.$fontSize?e.$fontSize+"rem":"0.875rem"};
                }
            `}
            

            >input {
                font-size: ${e.$fontSize?e.$fontSize+"rem":"0.875rem"};
                font-weight: ${e.$fontWeight?e.$fontWeight:"400"};
                color: ${e.$color};
                display: flex;
                align-items: center;
                gap: 0.5rem;
                width: 100%;

                @media (max-width: 50rem) {
                    font-size: ${e.$fontSize?e.$fontSize*.85+"rem":"0.75rem"};
                }

                padding: ${e.$padding[0]+"rem"} ${e.$padding[1]+"rem"};

                &::placeholder {
                    color: ${e.$color};
                    opacity: 0.8;
                }
                
                &:focus {
                    color: ${e.$focusColor};

                    &::placeholder {
                        color: ${e.$focusColor};
                        opacity: 0.8;
                    }
                }
            }

            >p+*:nth-last-child(1) {
                margin-left: auto;
            }
        }

        >ul {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: ${`${e.$padding[0]*2+(e.$padding[0]*2+(e.$fontSize||1))/4+(e.$fontSize||1)}rem`};
            border-radius: 0.25rem;
            left: 0;
            background-color: var(--color-grey-8);
            width: 100%;
            max-height: calc(40vh - 2rem);
            ${e.$maxULHeigth&&`max-height: ${e.$maxULHeigth}rem;`}
            overflow-y: auto;
            box-shadow: 0 0 1px 1px var(--color-grey-5);
            z-index: 2;

            >li {
                ${`padding: ${e.$padding[0]}rem ${e.$padding[1]}rem;`};

                &:hover {
                    background-color: var(--color-grey-7);
                    cursor: pointer;
                }

                &.selected {
                    background-color: rgba(0, 0, 0, 10%);
                }

                &:nth-child(1) {
                    border-top-left-radius: 0.25rem;
                    border-top-right-radius: 0.25rem;
                    padding-top: 0.125rem;
                    ${`padding-top: ${e.$padding[0]}rem;`}
                }

                &:nth-last-child() {
                    border-bottom-left-radius: 0.25rem;
                    border-bottom-right-radius: 0.25rem;
                    ${`padding-bottom: ${e.$padding[0]}rem;`}
                }

                >p {
                    font-size: ${(e.$fontSize||1)*.875+"rem"};
                    font-weight: ${e.$fontWeight?e.$fontWeight:400};

                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                svg {
                    font-size: ${e.$fontSize?e.$fontSize*1.125+"rem":"1rem"};
                    width: ${e.$fontSize?e.$fontSize*1.125+"rem":"1rem"};
                    color: ${e.$color};
                    opacity: 0.8;

                    @media (max-width: 50rem) {
                        font-size: ${e.$fontSize?e.$fontSize*1.125*.85+"rem":"0.875rem"};
                        width: ${e.$fontSize?e.$fontSize*1.125*.85+"rem":"0.875rem"};
                    }
                }
            }

            &.hidden {
                visibility: hidden;
            }

            transition-property: visibility;
        }

    `}
`;function Qr(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"")}function Te({$padding:e,$width:t,$fontSize:r,$fontWeight:n,$color:o,$borderColor:i,$focusColor:l,$maxULHeigth:s,$disableBorder:c,options:u,onChange:d,placeholder:f,defaultValue:g,disabled:C,disableClearButton:x,disableInput:w,leftIcon:v}){var ge;const y=P(g||null),h=P(!1),p=P(""),$=((ge=y.value)==null?void 0:ge.name)===p.value?u:u.filter(Y=>{var ye,N;return Qr((ye=Y.name)==null?void 0:ye.toLowerCase()).includes(Qr((N=p.value)==null?void 0:N.toLowerCase()))}),E=j.useRef(null);j.useEffect(()=>{y.value!==null?(d&&d(y.value.value),p.set(y.value.name)):(d&&d(null),p.set(""))},[y.value]),j.useEffect(()=>{g&&(y.set(g),p.set(g==null?void 0:g.name))},[]);const k=Y=>()=>{y.set(Y),h.reset()},O=Y=>{p.set(Y.target.value)},T=Y=>{var ye;if(Y.key==="Tab"){Y.preventDefault();const N=u.find(A=>Qr(A.name.toLowerCase()).startsWith(Qr(p.value.toLowerCase())))||u.find(A=>Qr(A.name.toLowerCase()).includes(Qr(p.value.toLowerCase())));N&&(y.set(N),p.set(N.name))}if(Y.key==="Enter"){Y.preventDefault();const N=u.find(A=>Qr(A.name.toLowerCase()).startsWith(Qr(p.value.toLowerCase())))||u.find(A=>Qr(A.name.toLowerCase()).includes(Qr(p.value.toLowerCase())));N&&(y.set(N),p.set(N.name),(ye=E.current)==null||ye.blur())}},J=Y=>{h.set(!0)},H=Y=>{setTimeout(()=>{h.set(!1)},200)};return a.jsxs(d6,{$padding:e,$width:t,$fontSize:r,$fontWeight:n,$color:o,$borderColor:i,$focusColor:l,$maxULHeigth:s,$disableBorder:c,$disabled:C,$leftIcon:!!v,children:[a.jsxs("div",{children:[v,a.jsx("input",{placeholder:f,value:p.value,onChange:O,onKeyDown:T,onFocus:J,onBlur:H,ref:E,disabled:C||w}),!C&&a.jsxs("div",{className:"icons",children:[!x&&y.value&&a.jsx(ra,{onClick:()=>y.set(null)}),h.value?a.jsx(Mw,{onClick:()=>{var Y;return(Y=E.current)==null?void 0:Y.blur()}}):a.jsx(_i,{onClick:()=>{var Y;return(Y=E.current)==null?void 0:Y.focus()}})]})]}),a.jsx("ul",{className:!C&&h.value?"showing":"hidden",children:$.map((Y,ye)=>a.jsx("li",{className:y.value===Y.value?"selected":"",onClick:k(Y),children:a.jsxs("p",{children:[" ",Y.name," "]})},`option_${ye}`))})]})}function pe(e,t){return r=>{t.set(n=>({...n,[e]:r.target.value}))}}function rm(e,t){return r=>{t.set(n=>({...n,[e]:r.target.value}))}}function it(e,t){return r=>{t.set(n=>({...n,[e]:r}))}}function f6(e){const t=e instanceof Date?e:new Date(e),r=new Date;let n=r.getFullYear()-t.getFullYear();const o=r.getMonth(),i=t.getMonth();return(o<i||o===i&&r.getDate()<t.getDate())&&n--,n}const h6=()=>{const{customerDataState:e,citiesState:t,loadingState:r}=j.useContext(Wt),o=Array.from(new Set(t.value.map(u=>u.UF))).map(u=>({name:u,value:u})),l=t.value.filter(u=>u.UF===e.value.ESTADO).map(u=>({name:u.NOME,value:u.NOME})).sort(function(u,d){return u.name<d.name?-1:u.name>d.name?1:0}),s=o.find(u=>u.name===e.value.ESTADO),c=l.find(u=>u.name===e.value.CIDADE);return a.jsx(a.Fragment,{children:!r.value&&t.value.length&&a.jsxs("section",{children:[a.jsxs("div",{style:{width:"calc(25% - 0.5rem)"},children:[a.jsx("h3",{children:" Estado "}),a.jsx(Te,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.375,.375],$fontSize:.875,$width:"100%",onChange:it("ESTADO",e),placeholder:"Estado",options:o,defaultValue:s})]}),a.jsxs("div",{style:{width:"calc(75% - 0.5rem)"},children:[a.jsx("h3",{children:" Município "}),a.jsx(Te,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.375,.375],$fontSize:.875,$width:"100%",onChange:it("CIDADE",e),placeholder:"Município",options:l,defaultValue:c})]}),a.jsxs("div",{style:{width:"calc(50% - 0.5rem)"},children:[a.jsx("h3",{children:" CEP "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.375,.375],$fontSize:.875,$width:"100%",leftIcon:null,rightIcon:null,onChange:pe("CEP",e),placeholder:"Ex: 92120-131",value:e.value.CEP})]}),a.jsxs("div",{style:{width:"calc(50% - 0.5rem)"},children:[a.jsx("h3",{children:" Bairro "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.375,.375],$fontSize:.875,$width:"100%",leftIcon:null,rightIcon:null,onChange:pe("BAIRRO",e),placeholder:"Ex: Tiradentes",value:e.value.BAIRRO})]}),a.jsxs("div",{style:{width:"100%"},children:[a.jsx("h3",{children:" Rua / Avenida "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.375,.375],$fontSize:.875,$width:"100%",leftIcon:null,rightIcon:null,onChange:pe("END_RUA",e),placeholder:"Ex: Rua Londres, 727",value:e.value.END_RUA})]}),a.jsxs("div",{style:{width:"100%"},children:[a.jsx("h3",{children:" Complemento "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.375,.375],$fontSize:.875,$width:"100%",leftIcon:null,rightIcon:null,onChange:pe("COMPLEMENTO",e),placeholder:"Ex: Sala 001",value:e.value.COMPLEMENTO})]})]})})},p6=Q.table`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border-radius: 0.25rem;
    background-color: var(--color-grey-7);
    overflow-x: auto;
    margin-top: 0.5rem;

    >thead {
        box-sizing: border-box;
        width: max-content;
        padding: 0.5rem;
        background-color: var(--color-grey-6);
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;

        >tr {
            text-align: left;
            width: 100%;
            display: grid;
            grid-template-areas:  "actions sex  name  nickname age  office mail  birthday team  children f_dir f_cel f_res";
            grid-template-columns: 5rem    2rem 12rem 12rem    3rem 10rem  12rem 6rem     6rem  4rem     10rem 10rem 10rem;

            >td {
                font-size: 0.75rem;
            }
        }
    }


    >tbody {
        box-sizing: border-box;
        width: max-content;

        height: 10rem;
        border-bottom-left-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;

        >tr {
            width: max-content;
            display: grid;
            grid-template-areas:  "actions sex  name  nickname age  office mail  birthday team  children f_dir f_cel f_res";
            grid-template-columns: 5rem    2rem 12rem 12rem    3rem 10rem  12rem 6rem     6rem  4rem     10rem 10rem 10rem;
            padding: 0.5rem;
            
            >td {
                font-size: 0.75rem;
                display: flex;
                align-items: center;
                gap: 0.5rem;

                >button {
                    color: var(--color-grey-2);
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    >svg {
                        pointer-events: none;
                    }
                }
            }
        }
    }
`;function Pu(e){let t="";return e.length===13?t=`+${e.slice(0,2)} (${e.slice(2,4)}) ${e.slice(4,5)} ${e.slice(5,9)}-${e.slice(9,13)}`:e.length===12?t=`+${e.slice(0,2)} (${e.slice(2,4)}) ${e.slice(4,8)}-${e.slice(8,12)}`:e.length===11?t=`(${e.slice(0,2)}) ${e.slice(2,5)}-${e.slice(5,8)}-${e.slice(8,11)}`:e.length===10?t=`(${e.slice(0,2)}) ${e.slice(2,6)}-${e.slice(6,10)}`:t=e,t}const m6=()=>{const{customerDataState:e,onClickEditContact:t,onClickDeleteContact:r}=j.useContext(Wt);return a.jsxs(p6,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:" Ações "}),a.jsx("th",{children:" S "}),a.jsx("th",{children:" Nome "}),a.jsx("th",{children:" Apelido "}),a.jsx("th",{children:" Idade "}),a.jsx("th",{children:" Cargo "}),a.jsx("th",{children:" E-mail "}),a.jsx("th",{children:" Aniversário"}),a.jsx("th",{children:" Time "}),a.jsx("th",{children:" Filhos "}),a.jsx("th",{children:" Fone Direto "}),a.jsx("th",{children:" Fone Celular "}),a.jsx("th",{children:" Fone Residencial "})]})}),a.jsx("tbody",{children:e.value.CONTATOS&&e.value.CONTATOS.map((n,o)=>a.jsxs("tr",{children:[a.jsxs("td",{children:[a.jsx("button",{onClick:t(n),title:"Editar contato",type:"button",children:a.jsx(fC,{})}),a.jsx("button",{onClick:r(n),title:"Remover contato",type:"button",children:a.jsx(xC,{})})]}),a.jsxs("td",{children:[" ",n.SEXO," "]}),a.jsxs("td",{children:[" ",n.NOME," "]}),a.jsxs("td",{children:[" ",n.TRATAMENTO," "]}),a.jsx("td",{children:n.ANIVERSARIO&&f6(n.ANIVERSARIO)}),a.jsxs("td",{children:[" ",n.CARGO," "]}),a.jsxs("td",{children:[" ",n.EMAIL," "]}),a.jsxs("td",{children:[" ",n.ANIVERSARIO&&new Date(n.ANIVERSARIO).toLocaleDateString()," "]}),a.jsxs("td",{children:[" ",n.TIME_FUTEBOL," "]}),a.jsxs("td",{children:[" ",n.FILHOS," "]}),a.jsx("td",{children:n.AREA_DIRETO&&n.FONE_DIRETO&&Pu(n.AREA_DIRETO+n.FONE_DIRETO)}),a.jsx("td",{children:n.AREA_CEL&&n.CELULAR&&Pu(n.AREA_CEL+n.CELULAR)}),a.jsx("td",{children:n.AREA_RESI&&n.FONE_RESIDENCIAL&&Pu(n.AREA_RESI+n.FONE_RESIDENCIAL)})]},`contact_${o}`))})]})},Mu=Q.button`
    background-color: transparent;
    color: var(--color-grey-4);
    border: 1px solid;
    border-color: var(--color-grey-4);

    padding: 0.5rem;
    padding-right: 0.75rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: background-color 0.3s ease-in-out;
    line-height: 100%;

    >p {
        font-weight: 500;
        font-size: 0.75rem;
        pointer-events: none;
    }

    >svg {
        pointer-events: none;
        font-size: 1rem;
        width: 1rem;
        color: var(--color-grey-3);

        opacity: 0.8;
    }

    @media (max-width: 50rem) {
        font-size: 0.75rem;

        >svg{
            font-size: 1rem;
        }
    }

    &:hover {
        background-color: var(--color-grey-2);
        border-color: var(--collor-grey-2);
        color: var(--color-grey-8);
        
        >svg {
            color: var(--color-grey-8);
        }
    }
`,ft=Q.button`
    background-color: var(--color-grey-8);
    color: var(--color-grey-4);
    border-color: var(--color-grey-4);
    border: 1px solid;
    padding: 0.5rem 0.875rem;
    padding-right: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    border-radius: 0.5rem;

    font-size: 1rem;
    font-weight: 600;

    &:hover {
        background-color: var(--color-grey-3);
        color: var(--color-grey-8);
        border-color: var(--color-grey-3);

        >svg {
            color: var(--color-grey-8);
        }
    }

`,pt=Q.div`
    &>a {
        color: var(--color-grey-2);
        display: flex;
        align-items: center;
        text-decoration: underline;
        width: max-content;
        gap: 0.5rem;
        cursor: pointer;

        font-size: 0.875rem;
        font-weight: 500;

        &:hover {
            color: var(--color-primary);
        }

        @media (max-width: 50rem) {
            width: 100%;
        }
    }
`,g6=Q.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    row-gap: 1rem;

    height: 52vh;
    width: 60rem;
    max-width: 100%;
    overflow-y: auto;
    padding-right: 4px;

    >div {
        display: inline-block;

        &.buttons {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 1rem;
        }
    }

    >button {
        justify-self: flex-end;
        align-self: right;
        margin-left: auto;
    }
`,y6=Q.aside`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;

    width: 100vw;
    height: 100vh;
    background-color: var(--color-grey-0-o);
    backdrop-filter: blur(1px);

    display: flex;
    justify-content: center;

    >div {
        margin-top: 20vh;
        background-color: var(--color-grey-8);
        width: max-content;
        height: max-content;
        border-radius: 0.375rem;
        max-height: 60vh;
        box-sizing: border-box;
        min-width: 20rem;

        display: grid;
        grid-template-areas: "header" "content";
        grid-template-columns: 100%;
        grid-template-rows: 2.5rem calc(100% - 2.5rem);

        @media (max-width: 50rem) {
            width: 96vw;
            height: max-content;
            margin-top: 10vh;
            max-height: 80vh;
        }

        >header {
            border-top-left-radius: 0.375rem;
            border-top-right-radius: 0.375rem;

            padding: 0.5rem 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;

            box-sizing: border-box;
            width: 100%;
            user-select: none;

            >button, a {
                display: flex;
                align-items: center;
                justify-content: center;
                transition: font-size 0.15s ease-in-out;
                font-size: 1rem;
                color: var(--color-grey-2);
                width: 1rem;
                cursor: pointer;

                >svg {
                    pointer-events: none;
                }

                &:hover {
                    font-size: 1.25rem;
                }
            }

            >h2 {
                color: var(--color-grey-2);
                line-height: 150%;
            }
        }

        >div {
            box-sizing: border-box;
            width: max-content;
            max-width: 100%;
            padding: 0.5rem 1rem 1rem 1rem;
            max-height: 80vh;
        }
    }
`,bt=({children:e,title:t,modalState:r})=>a.jsx(y6,{children:a.jsxs("div",{children:[a.jsxs("header",{children:[a.jsxs("h1",{children:[" ",t," "]}),a.jsx("button",{onClick:()=>r.reset(),children:a.jsx(ra,{})})]}),a.jsx("div",{children:e})]})}),v6=({modalState:e})=>{var u,d,f,g,C,x,w,v,y;const{selectedContactState:t,onClickAddContact:r,onClickCancelEditContact:n,positionsState:o}=j.useContext(Wt),i=Array.from({length:89},(h,p)=>({name:`${p+11}`,value:`${p+11}`})),l=o.value.map(h=>({name:h.DESCRICAO,value:h.CODIGO})),s=t.value.CODIGO?"edit":"create",c=s==="edit"?"Editando Contato":"Adicionando novo contato";return a.jsx(bt,{modalState:e,title:c,children:a.jsxs(g6,{children:[a.jsxs("div",{style:{width:"calc(66% - 0.5rem)"},children:[a.jsx("h3",{children:" Nome "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[4],$padding:[.375,.375],$fontSize:.875,$width:"100%",leftIcon:null,rightIcon:null,onChange:pe("NOME",t),placeholder:"Ex: Marcio Araújo",value:((u=t.value)==null?void 0:u.NOME)||""})]}),a.jsxs("div",{style:{width:"calc(34% - 0.5rem)"},children:[a.jsx("h3",{children:" Cargo "}),a.jsx(Te,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[4],$padding:[.375,.375],$fontSize:.875,$width:"100%",options:l,onChange:it("CARGO",t),defaultValue:l.find(h=>h.value===t.value.CARGO),placeholder:"Cargo",$maxULHeigth:10})]}),a.jsxs("div",{style:{width:"calc(66% - 0.5rem)"},children:[a.jsx("h3",{children:" Apelido / Tratamento "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[4],$padding:[.375,.375],$fontSize:.875,$width:"100%",leftIcon:null,rightIcon:null,onChange:pe("TRATAMENTO",t),placeholder:"Ex: Marcinho",value:((d=t.value)==null?void 0:d.TRATAMENTO)||""})]}),a.jsxs("div",{style:{width:"calc(34% - 0.5rem)"},children:[a.jsx("h3",{children:" Sexo "}),a.jsx(Te,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[4],$padding:[.375,.375],$fontSize:.875,$width:"100%",options:[{name:"Masculino",value:"M"},{name:"Feminino",value:"F"}],onChange:it("SEXO",t),placeholder:"Sexo"})]}),a.jsxs("div",{style:{width:"calc(50% - 0.5rem)"},children:[a.jsx("h3",{children:" E-mail "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[4],$padding:[.375,.375],$fontSize:.875,$width:"100%",leftIcon:null,rightIcon:null,onChange:pe("EMAIL",t),placeholder:"Ex: exemplo@mail.com",value:((f=t.value)==null?void 0:f.EMAIL)||"",type:"email"})]}),a.jsxs("div",{style:{width:"calc(50% - 0.5rem)"},children:[a.jsx("h3",{children:" Aniversário "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[4],$padding:[.375,.375],$fontSize:.875,$width:"100%",leftIcon:null,rightIcon:null,onChange:pe("ANIVERSARIO",t),value:((g=t.value)==null?void 0:g.ANIVERSARIO)||"",type:"date"})]}),a.jsxs("div",{style:{width:"calc(75% - 0.5rem)"},children:[a.jsx("h3",{children:" Time de Futebol "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[4],$padding:[.375,.375],$fontSize:.875,$width:"100%",leftIcon:null,rightIcon:null,onChange:pe("TIME_FUTEBOL",t),value:((C=t.value)==null?void 0:C.TIME_FUTEBOL)||"",placeholder:"Ex: Grêmio"})]}),a.jsxs("div",{style:{width:"calc(25% - 0.5rem)"},children:[a.jsx("h3",{children:" Filhos "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[4],$padding:[.375,.375],$fontSize:.875,$width:"100%",leftIcon:null,rightIcon:null,onChange:pe("FILHOS",t),value:((x=t.value)==null?void 0:x.FILHOS)||0,type:"number"})]}),a.jsxs("div",{style:{width:"calc(25% - 0.5rem)"},children:[a.jsx("h3",{children:" Área Direto "}),a.jsx(Te,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[4],$padding:[.375,.375],$fontSize:.875,$width:"100%",options:i,onChange:it("AREA_DIRETO",t),defaultValue:i.find(h=>h.value===t.value.AREA_DIRETO),placeholder:"Área",$maxULHeigth:10})]}),a.jsxs("div",{style:{width:"calc(75% - 0.5rem)"},children:[a.jsx("h3",{children:" Fone Direto "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[4],$padding:[.375,.375],$fontSize:.875,$width:"100%",leftIcon:null,rightIcon:null,onChange:pe("FONE_DIRETO",t),value:((w=t.value)==null?void 0:w.FONE_DIRETO)||"",placeholder:"987654321"})]}),a.jsxs("div",{style:{width:"calc(25% - 0.5rem)"},children:[a.jsx("h3",{children:" Área Celular "}),a.jsx(Te,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[4],$padding:[.375,.375],$fontSize:.875,$width:"100%",options:i,onChange:it("AREA_CEL",t),defaultValue:i.find(h=>h.value===t.value.AREA_CEL),placeholder:"Área",$maxULHeigth:10})]}),a.jsxs("div",{style:{width:"calc(75% - 0.5rem)"},children:[a.jsx("h3",{children:" Fone Celular "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[4],$padding:[.375,.375],$fontSize:.875,$width:"100%",leftIcon:null,rightIcon:null,onChange:pe("CELULAR",t),value:((v=t.value)==null?void 0:v.CELULAR)||"",placeholder:"987654321"})]}),a.jsxs("div",{style:{width:"calc(25% - 0.5rem)"},children:[a.jsx("h3",{children:" Área Res. "}),a.jsx(Te,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[4],$padding:[.375,.375],$fontSize:.875,$width:"100%",options:i,onChange:it("AREA_RESI",t),defaultValue:i.find(h=>h.value===t.value.AREA_RESI),placeholder:"Área",$maxULHeigth:10})]}),a.jsxs("div",{style:{width:"calc(75% - 0.5rem)"},children:[a.jsx("h3",{children:" Fone Residencial "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[4],$padding:[.375,.375],$fontSize:.875,$width:"100%",leftIcon:null,rightIcon:null,onChange:pe("FONE_RESIDENCIAL",t),value:((y=t.value)==null?void 0:y.FONE_RESIDENCIAL)||"",placeholder:"33334444"})]}),a.jsxs("div",{style:{width:"100%"},className:"buttons",children:[s==="edit"&&a.jsxs(ft,{onClick:n,type:"button",children:[a.jsx(ra,{}),"Cancelar Edição"]}),a.jsxs(ft,{onClick:r,type:"button",children:[a.jsx(rC,{}),s==="edit"?"Salvar Contato":"Adicionar Contato"]})]})]})})},x6=()=>{const{contactModalState:e}=j.useContext(Wt),t=()=>e.set(!0);return a.jsxs("section",{children:[a.jsx(pt,{onClick:t,children:a.jsx("a",{children:" Adicionar Contato "})}),a.jsx(m6,{}),e.value&&a.jsx(v6,{modalState:e})]})},w6=Q.table`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 0.25rem;
    background-color: var(--color-grey-7);
    overflow-x: auto;
    margin-top: 0.5rem;
    font-size: 0.75rem;

    >thead {
        box-sizing: border-box;
        width: max-content;
        min-width: 100%;
        padding: 0.5rem;
        background-color: var(--color-grey-6);
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;

        >tr {
            text-align: left;
            width: 100%;
            display: grid;
            grid-template-areas:  "campa  tipol opera resul lgini lgfim telef";
            grid-template-columns: 10rem  10rem 10rem 10rem 10rem 10rem 10rem;

            >td {
                font-size: 0.75rem;
            }
        }
    }


    >tbody {
        box-sizing: border-box;
        min-width: 100%;
        width: max-content;
        height: max-content;
        min-height: 8rem;
        max-height: 14rem;
        border-bottom-left-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        overflow: auto;

        >tr {
            box-sizing: border-box;
            width: max-content;
            min-width: 100%;
            display: grid;
            grid-template-areas:  "campa  tipol opera resul lgini lgfim telef";
            grid-template-columns: 10rem  10rem 10rem 10rem 10rem 10rem 10rem;
            padding: 0.5rem;
            
            &:nth-child(odd) {
                background-color: rgba(0, 0, 0, 0.05);
            }

            >td {
                font-size: 0.75rem;
                display: flex;
                align-items: center;
                gap: 0.5rem;

                >button {
                    color: var(--color-grey-2);
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    >svg {
                        pointer-events: none;
                    }
                }
            }
        }
    }
`,C6=()=>{var t;const{customerDataState:e}=j.useContext(Wt);return a.jsxs(w6,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:" Campanha "}),a.jsx("th",{children:" Tipo Ligação "}),a.jsx("th",{children:" Operador "}),a.jsx("th",{children:" Resultado "}),a.jsx("th",{children:" Ligação Início"}),a.jsx("th",{children:" Ligação Fim "}),a.jsx("th",{children:" Telefone "})]})}),a.jsx("tbody",{children:((t=e.value)==null?void 0:t.CAMPANHAS)&&e.value.CAMPANHAS.filter(r=>r.CONCLUIDO==="SIM").map((r,n)=>a.jsxs("tr",{children:[a.jsxs("td",{children:[" ",r.CAMPANHA," "]}),a.jsx("td",{children:" ATIVO | RECEPTIVO "}),a.jsxs("td",{children:[" ",r.OPERADOR_LIGACAO," "]}),a.jsxs("td",{children:[" ",r.RESULTADO," "]}),a.jsxs("td",{children:[" ",r.DATA_HORA_LIG&&new Date(r.DATA_HORA_LIG).toLocaleString()," "]}),a.jsxs("td",{children:[" ",r.DATA_HORA_FIM&&new Date(r.DATA_HORA_FIM).toLocaleString()," "]}),a.jsxs("td",{children:[" ",r.TELEFONE_LIGADO," "]})]},`contact_${n}`))})]})},S6=Q.div`
    ${e=>Ge`
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        height: max-content;
        width: ${e.$width};
        max-width: 100%;

        &:has(.error) {
            >div:nth-child(1) {
                border-color: rgb(255, 100, 100);
                >input {
                    color: rgb(255, 100, 100);
                }

                >svg {
                    color: rgb(255, 100, 100)
                }
            }
        }

        >div:nth-child(1) {
            box-sizing: border-box;
            width: ${e.$width};
            max-width: 100%;
            display: flex;
            align-items: center;
            border: 2px solid ${e.$borderColor||e.$color};
            border-radius: 0.5rem;

            >svg {
                font-size: ${e.$fontSize?e.$fontSize*1.125+"rem":"1rem"};
                width: ${e.$fontSize?e.$fontSize*1.125+"rem":"1rem"};
                color: ${e.$color};
                opacity: 0.8;
                padding: ${e.$padding[0]+"rem"} ${e.$padding[1]+"rem"};

                @media (max-width: 50rem) {
                    font-size: ${e.$fontSize?e.$fontSize*1.125*.85+"rem":"0.75rem"};
                    width: ${e.$fontSize?e.$fontSize*1.125*.85+"rem":"0.75rem"};
                }

                &:nth-child(1) {
                    margin-right: ${(e.$fontSize||.875)/2+"rem"};
                }

                &:nth-last-child(1) {
                    margin-left: ${(e.$fontSize||.875)/2+"rem"};
                }
            }

            >textarea {
                box-sizing: border-box;
                font-size: ${e.$fontSize?e.$fontSize+"rem":"0.875rem"};
                font-weight: ${e.$fontWeight?e.$fontWeight:"400"};
                color: ${e.$color};
                width: 100%;
                padding: ${e.$padding[0]+"rem"} ${e.$padding[1]+"rem"};
                border-top-left-radius: 0.5rem;
                border-bottom-left-radius: 0.5rem;
                resize: vertical;

                &[type="date"]::-webkit-calendar-picker-indicator {
                    background-color: white;
                    background-blend-mode: multiply;
                    border-radius: 0.25rem;
                }

                @media (max-width: 50rem) {
                    font-size: ${e.$fontSize?e.$fontSize*.85+"rem":"0.75rem"};
                }

                &::placeholder {
                    color: ${e.$color};
                    opacity: 0.8;
                }
                
                &:focus {
                    color: ${e.$focusColor};

                    &::placeholder {
                        color: ${e.$focusColor};
                        opacity: 0.8;
                    }
                }
            }

            &:focus-within {
                border: 1px solid ${e.$focusColor||e.$color};

                >svg {
                    color: ${e.$focusColor};
                }
            }
        }

        >span.error {
            font-size: ${e.$fontSize?`${e.$fontSize*.75}rem`:"0.75rem"};
            color: rgb(255, 75, 75);
            padding-left: 0.25rem;
        }
    `}
`,nm=({$padding:e,$width:t,$fontSize:r,$fontWeight:n,$color:o,$focusColor:i,$borderColor:l,...s})=>a.jsx(S6,{$padding:e,$width:t,$fontSize:r,$fontWeight:n,$color:o,$focusColor:i,$borderColor:l,children:a.jsx("div",{children:a.jsx("textarea",{...s})})}),$6=()=>{const{customerDataState:e}=j.useContext(Wt);return a.jsxs("section",{children:[a.jsxs("div",{style:{width:"100%"},children:[a.jsx("h3",{children:" Observação do Supervisor "}),a.jsx(nm,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.375,.375],$fontSize:.875,$width:"100%",style:{height:"5.5rem"},onChange:rm("OBS_ADMIN",e),value:e.value.OBS_ADMIN||""})]}),a.jsxs("div",{style:{width:"100%"},children:[a.jsx("h3",{children:" Observação do Operador "}),a.jsx(nm,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.375,.375],$fontSize:.875,$width:"100%",style:{height:"5.5rem"},onChange:rm("OBS_OPERADOR",e),value:e.value.OBS_OPERADOR||""})]})]})},b6=()=>{const{customerDataState:e,segmentsState:t,mediasState:r,operatorsState:n,originsState:o,groupsState:i}=j.useContext(Wt),l=r.value.map(v=>({name:v.NOME,value:v.CODIGO})),s=t.value.map(v=>({name:v.NOME,value:v.CODIGO})),c=n.value.map(v=>({name:v.NOME,value:v.CODIGO})),u=o.value.map(v=>({name:v.DESCRICAO,value:v.CODIGO})),d=i.value.map(v=>({name:v.DESCRICAO,value:v.CODIGO})),f=l.find(v=>v.value===e.value.COD_MIDIA),g=s.find(v=>v.value===e.value.SEGMENTO),C=c.find(v=>v.value===e.value.OPERADOR),x=u.find(v=>v.value===e.value.ORIGEM),w=d.find(v=>v.value===e.value.GRUPO);return a.jsxs("section",{children:[a.jsxs("div",{style:{width:"calc(50% - 0.5rem)"},children:[a.jsx("h3",{children:" Grupo "}),a.jsx(Te,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.375,.375],$fontSize:.875,$width:"100%",onChange:it("GRUPO",e),placeholder:"Grupo",options:d,defaultValue:w})]}),a.jsxs("div",{style:{width:"calc(50% - 0.5rem)"},children:[a.jsx("h3",{children:" Origem "}),a.jsx(Te,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.375,.375],$fontSize:.875,$width:"100%",onChange:it("ORIGEM",e),placeholder:"Origem",options:u,defaultValue:x})]}),a.jsxs("div",{style:{width:"calc(50% - 0.5rem)"},children:[a.jsx("h3",{children:" Mídia "}),a.jsx(Te,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.375,.375],$fontSize:.875,$width:"100%",onChange:it("COD_MIDIA",e),placeholder:"Mídia",options:l,defaultValue:f})]}),a.jsxs("div",{style:{width:"calc(50% - 0.5rem)"},children:[a.jsx("h3",{children:" Segmento "}),a.jsx(Te,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.375,.375],$fontSize:.875,$width:"100%",onChange:it("SEGMENTO",e),placeholder:"Segmento",options:s,defaultValue:g})]}),a.jsxs("div",{style:{width:"calc(50% - 0.5rem)"},children:[a.jsx("h3",{children:" E-mail 1 "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.375,.375],$fontSize:.875,$width:"100%",leftIcon:null,rightIcon:null,onChange:pe("EMAIL",e),placeholder:"Ex: rafael@empresa.com",value:e.value.EMAIL||""})]}),a.jsxs("div",{style:{width:"calc(50% - 0.5rem)"},children:[a.jsx("h3",{children:" E-mail 2 "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.375,.375],$fontSize:.875,$width:"100%",leftIcon:null,rightIcon:null,onChange:pe("EMAIL2",e),placeholder:"Ex: jaqueline@empresa.com",value:e.value.EMAIL2||""})]}),a.jsxs("div",{style:{width:"calc(50% - 0.5rem)"},children:[a.jsx("h3",{children:" Contato E-mail "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.375,.375],$fontSize:.875,$width:"100%",leftIcon:null,rightIcon:null,onChange:pe("CONTATO_MAIL",e),placeholder:"Ex: Rafael Souza",value:e.value.CONTATO_MAIL||""})]}),a.jsxs("div",{style:{width:"calc(50% - 0.5rem)"},children:[a.jsx("h3",{children:" Operador "}),a.jsx(Te,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.375,.375],$fontSize:.875,$width:"100%",onChange:it("OPERADOR",e),placeholder:"Operador",options:c,defaultValue:C})]})]})},E6=()=>{const{customerDataState:e}=j.useContext(Wt),t=Array.from({length:89},(r,n)=>({name:`${n+11}`,value:n+11}));return a.jsxs("section",{children:[a.jsxs("div",{style:{width:"calc(25% - 0.5rem)"},children:[a.jsx("h3",{children:" Área 1 "}),a.jsx(Te,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.375,.375],$fontSize:.875,$width:"100%",options:t,onChange:it("AREA1",e),defaultValue:t.find(r=>r.value===e.value.AREA1),placeholder:"Área",$maxULHeigth:10})]}),a.jsxs("div",{style:{width:"calc(50% - 1rem)"},children:[a.jsx("h3",{children:" Fone 1 "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.375,.375],$fontSize:.875,$width:"100%",onChange:pe("FONE1",e),value:e.value.FONE1||"",placeholder:"987654321"})]}),a.jsxs("div",{style:{width:"calc(25% - 0.5rem)"},children:[a.jsx("h3",{children:" Descrição Fone 1 "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.375,.375],$fontSize:.875,$width:"100%",maxLength:30,onChange:pe("DESC_FONE1",e),value:e.value.DESC_FONE1||"",placeholder:"Descrição do telefone..."})]}),a.jsxs("div",{style:{width:"calc(25% - 0.5rem)"},children:[a.jsx("h3",{children:" Área 2 "}),a.jsx(Te,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.375,.375],$fontSize:.875,$width:"100%",options:t,onChange:it("AREA2",e),defaultValue:t.find(r=>r.value===e.value.AREA2),placeholder:"Área",$maxULHeigth:10})]}),a.jsxs("div",{style:{width:"calc(50% - 1rem)"},children:[a.jsx("h3",{children:" Fone 2 "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.375,.375],$fontSize:.875,$width:"100%",onChange:pe("FONE2",e),value:e.value.FONE2||"",placeholder:"987654321"})]}),a.jsxs("div",{style:{width:"calc(25% - 0.5rem)"},children:[a.jsx("h3",{children:" Descrição Fone 2 "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.375,.375],$fontSize:.875,$width:"100%",maxLength:30,onChange:pe("DESC_FONE2",e),value:e.value.DESC_FONE2||"",placeholder:"Descrição do telefone..."})]}),a.jsxs("div",{style:{width:"calc(25% - 0.5rem)"},children:[a.jsx("h3",{children:" Área 3 "}),a.jsx(Te,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.375,.375],$fontSize:.875,$width:"100%",options:t,onChange:it("AREA3",e),defaultValue:t.find(r=>r.value===e.value.AREA3),placeholder:"Área",$maxULHeigth:10})]}),a.jsxs("div",{style:{width:"calc(50% - 1rem)"},children:[a.jsx("h3",{children:" Fone 3 "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.375,.375],$fontSize:.875,$width:"100%",onChange:pe("FONE3",e),value:e.value.FONE3||"",placeholder:"987654321"})]}),a.jsxs("div",{style:{width:"calc(25% - 0.5rem)"},children:[a.jsx("h3",{children:" Descrição Fone 3 "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.375,.375],$fontSize:.875,$width:"100%",maxLength:30,onChange:pe("DESC_FONE3",e),value:e.value.DESC_FONE3||"",placeholder:"Descrição do telefone..."})]}),a.jsxs("div",{style:{width:"calc(25% - 0.5rem)"},children:[a.jsx("h3",{children:" Área FAX "}),a.jsx(Te,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.375,.375],$fontSize:.875,$width:"100%",options:t,onChange:it("AREAFAX",e),defaultValue:t.find(r=>r.value===e.value.AREAFAX),placeholder:"Área",$maxULHeigth:10})]}),a.jsxs("div",{style:{width:"calc(50% - 1rem)"},children:[a.jsx("h3",{children:" FAX "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.375,.375],$fontSize:.875,$width:"100%",onChange:pe("FAX",e),value:e.value.FAX||"",placeholder:"987654321"})]}),a.jsxs("div",{style:{width:"calc(25% - 0.5rem)"},children:[a.jsx("h3",{children:" Descrição FAX "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.375,.375],$fontSize:.875,$width:"100%",maxLength:30,onChange:pe("DESCFAX",e),value:e.value.DESCFAX||"",placeholder:"Descrição do FAX..."})]})]})},j6=Q.table`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 0.25rem;
    background-color: var(--color-grey-7);
    overflow-x: auto;
    margin-top: 0.5rem;
    font-size: 0.75rem;

    >thead {
        box-sizing: border-box;
        width: max-content;
        min-width: 100%;
        padding: 0.5rem;
        background-color: var(--color-grey-6);
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;

        >tr {
            text-align: left;
            width: 100%;
            display: grid;
            grid-template-areas:  "action datac  descc valor fpaga tipoc";
            grid-template-columns: 2rem 10rem  20rem 10rem 14rem 14rem;

            >td {
                font-size: 0.75rem;
            }
        }
    }


    >tbody {
        box-sizing: border-box;
        min-width: 100%;
        width: max-content;
        height: max-content;
        min-height: 8rem;
        max-height: 14rem;
        border-bottom-left-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        overflow: auto;

        >tr {
            box-sizing: border-box;
            width: max-content;
            min-width: 100%;
            display: grid;
            grid-template-areas:  "action datac  descc valor fpaga tipoc";
            grid-template-columns: 2rem 10rem  20rem 10rem 14rem 14rem;
            padding: 0.5rem;
            
            &:nth-child(odd) {
                background-color: rgba(0, 0, 0, 0.05);
            }

            >td {
                font-size: 0.75rem;
                display: flex;
                align-items: center;
                gap: 0.5rem;

                >button {
                    color: var(--color-grey-2);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: max-content;

                    >svg {
                        pointer-events: none;
                    }
                }
            }
        }
    }
`,k6=Q.table`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 0.25rem;
    background-color: var(--color-grey-7);
    overflow-x: auto;
    margin-top: 0.5rem;
    font-size: 0.75rem;

    >thead {
        box-sizing: border-box;
        width: max-content;
        min-width: 100%;
        padding: 0.5rem;
        background-color: var(--color-grey-6);
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;

        >tr {
            text-align: left;
            width: 100%;
            display: grid;
            grid-template-areas:  "codpr desci qtdd unid valor desco";
            grid-template-columns: 6rem  20rem 6rem 6rem 6rem  6rem;

            >td {
                font-size: 0.75rem;
            }
        }
    }


    >tbody {
        box-sizing: border-box;
        min-width: 100%;
        width: max-content;
        height: max-content;
        min-height: 8rem;
        max-height: 14rem;
        border-bottom-left-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        overflow: auto;

        >tr {
            box-sizing: border-box;
            width: max-content;
            min-width: 100%;
            display: grid;
            grid-template-areas:  "codpr desci qtdd unid valor desco";
            grid-template-columns: 6rem  20rem 6rem 6rem 6rem  6rem;
            padding: 0.5rem;
            
            &:nth-child(odd) {
                background-color: rgba(0, 0, 0, 0.05);
            }

            >td {
                font-size: 0.75rem;
                display: flex;
                align-items: center;
                gap: 0.5rem;

                >button {
                    color: var(--color-grey-2);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: max-content;

                    >svg {
                        pointer-events: none;
                    }
                }
            }
        }
    }
`,O6=()=>{const e=P([]);return a.jsxs(k6,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:" Cód. Produto "}),a.jsx("th",{children:" Descrição do Item "}),a.jsx("th",{children:" Quantidade "}),a.jsx("th",{children:" Unidade "}),a.jsx("th",{children:" Valor Unidade "}),a.jsx("th",{children:" Desconto "})]})}),a.jsx("tbody",{children:e.value.map((t,r)=>a.jsxs("tr",{children:[a.jsxs("td",{children:[" ",t.CODPROD," "]}),a.jsxs("td",{children:[" ",t.DESCONTO," "]}),a.jsxs("td",{children:[" ",t.QDT," "]}),a.jsxs("td",{children:[" ",t.UN_MEDIDA," "]}),a.jsxs("td",{children:[" ",t.VALOR_UN.toLocaleString("pt-br",{currency:"BRL",style:"currency"})," "]}),a.jsxs("td",{children:[" ",t.DESCONTO.toLocaleString("pt-br",{currency:"BRL",style:"currency"})," "]})]},`contact_${r}`))})]})},_6=({modalState:e,purchase:t})=>a.jsx(bt,{modalState:e,title:`Items da compra: ${t.DESCRICAO}`,children:a.jsx(O6,{})}),I6=()=>{var n;const{customerDataState:e}=j.useContext(Wt),t=P(null),r=o=>()=>t.set(a.jsx(_6,{modalState:t,purchase:o}));return a.jsxs(j6,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:" "}),a.jsx("th",{children:" Data "}),a.jsx("th",{children:" Descrição da compra "}),a.jsx("th",{children:" Valor total "}),a.jsx("th",{children:" Forma pagamento "}),a.jsx("th",{children:" Tipo "})]})}),a.jsx("tbody",{children:((n=e.value)==null?void 0:n.COMPRAS)&&e.value.COMPRAS.map((o,i)=>a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("button",{type:"button",onClick:r(o),children:a.jsx(ev,{})})}),a.jsxs("td",{children:[" ",o.DATA&&new Date(o.DATA).toLocaleDateString()," "]}),a.jsxs("td",{children:[" ",o.DESCRICAO," "]}),a.jsxs("td",{children:[" ",o.VALOR.toLocaleString("pt-br",{currency:"BRL",style:"currency"})," "]}),a.jsxs("td",{children:[" ",o.FORMA_PGTO," "]}),a.jsxs("td",{children:[" ",o.TIPO," "]})]},`contact_${i}`))}),t.value]})},R6=()=>{const{customerDataState:e}=j.useContext(Wt),{SALDO_DISPONIVEL:t,SALDO_LIMITE:r,VENCIMENTO_LIMITE_CREDITO:n,POTENCIAL:o,DATA_ULT_COMPRA:i}=e.value;return a.jsxs(a.Fragment,{children:[a.jsxs("div",{children:[a.jsxs("p",{children:[a.jsx("b",{children:" Saldo disponível: "}),t.toLocaleString("pt-br",{currency:"BRL",style:"currency"})," |",a.jsx("b",{children:" Saldo limite: "}),r.toLocaleString("pt-br",{currency:"BRL",style:"currency"})]}),a.jsxs("p",{children:[a.jsx("b",{children:" Vencimento do limite de crédito: "}),n?new Date(n).toLocaleDateString():"n/d"]}),a.jsxs("p",{children:[a.jsx("b",{children:" Potêncial: "}),o.toLocaleString("pt-br",{currency:"BRL",style:"currency"})," |",a.jsx("b",{children:" Data ult. compra: "}),i&&new Date(i).toLocaleDateString()]})]}),a.jsx(I6,{})]})},T6=Q.table`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 0.25rem;
    background-color: var(--color-grey-7);
    overflow-x: auto;
    margin-top: 0.5rem;
    font-size: 0.75rem;

    >thead {
        box-sizing: border-box;
        width: max-content;
        min-width: 100%;
        padding: 0.5rem;
        background-color: var(--color-grey-6);
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;

        >tr {
            text-align: left;
            width: 100%;
            display: grid;
            grid-template-areas:  "camp  dt_agen dt_res result operad op_lig fone_lig lig_ini lig_fim";
            grid-template-columns: 10rem 10rem   6rem   10rem  10rem  10rem  6rem    10rem    10rem  ;

            >td {
                font-size: 0.75rem;
            }
        }
    }


    >tbody {
        box-sizing: border-box;
        min-width: 100%;
        width: max-content;
        height: max-content;
        min-height: 8rem;
        max-height: 14rem;
        border-bottom-left-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        >tr {
            box-sizing: border-box;
            width: max-content;
            min-width: 100%;
            display: grid;
            grid-template-areas:  "camp  dt_agen dt_res result operad op_lig fone_lig lig_ini lig_fim";
            grid-template-columns: 10rem 10rem   6rem   10rem  10rem  10rem  6rem    10rem    10rem;
            padding: 0.5rem;
            
            &:nth-child(odd) {
                background-color: rgba(0, 0, 0, 0.05);
            }

            >td {
                font-size: 0.75rem;
                display: flex;
                align-items: center;
                gap: 0.5rem;

                >button {
                    color: var(--color-grey-2);
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    >svg {
                        pointer-events: none;
                    }
                }
            }
        }
    }
`,A6=()=>{var t;const{customerDataState:e}=j.useContext(Wt);return a.jsxs(T6,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:" Campanha "}),a.jsx("th",{children:" Data Agendamento "}),a.jsx("th",{children:" Data Resultado "}),a.jsx("th",{children:" Resultado "}),a.jsx("th",{children:" Operador "}),a.jsx("th",{children:" Operador Ligação "}),a.jsx("th",{children:" Fone Ligação "}),a.jsx("th",{children:" Ligação Início "}),a.jsx("th",{children:" Ligação Fim "})]})}),a.jsx("tbody",{children:((t=e.value)==null?void 0:t.CAMPANHAS)&&e.value.CAMPANHAS.filter(r=>r.CONCLUIDO==="NAO").map((r,n)=>a.jsxs("tr",{children:[a.jsxs("td",{children:[" ",r.CAMPANHA," "]}),a.jsxs("td",{children:[" ",r.DT_AGENDAMENTO&&new Date(r.DT_AGENDAMENTO).toLocaleString()," "]}),a.jsxs("td",{children:[" ",r.DT_RESULTADO&&new Date(r.DT_RESULTADO).toLocaleDateString()," "]}),a.jsxs("td",{children:[" ",r.RESULTADO," "]}),a.jsxs("td",{children:[" ",r.OPERADOR," "]}),a.jsxs("td",{children:[" ",r.OPERADOR_LIGACAO," "]}),a.jsxs("td",{children:[" ",r.TELEFONE_LIGADO," "]}),a.jsxs("td",{children:[" ",r.DATA_HORA_LIG&&new Date(r.DATA_HORA_LIG).toLocaleString()," "]}),a.jsxs("td",{children:[" ",r.DATA_HORA_FIM&&new Date(r.DATA_HORA_FIM).toLocaleString()," "]})]},`contact_${n}`))})]})},D6=()=>a.jsx(a.Fragment,{children:a.jsx(A6,{})}),Wt=j.createContext({}),om=({children:e})=>{const t=[{id:0,button:a.jsxs(a.Fragment,{children:[" ",a.jsx(Zw,{})," "]}),component:a.jsx(a.Fragment,{}),mode:"both"},{id:1,button:a.jsxs(a.Fragment,{children:[" ",a.jsx(nv,{})," Endereço"," "]}),component:a.jsx(h6,{}),mode:"both"},{id:2,button:a.jsxs(a.Fragment,{children:[" ",a.jsx(dC,{})," Origem"," "]}),component:a.jsx(b6,{}),mode:"both"},{id:3,button:a.jsxs(a.Fragment,{children:[" ",a.jsx(Zy,{})," Contatos"," "]}),component:a.jsx(x6,{}),mode:"both"},{id:4,button:a.jsxs(a.Fragment,{children:[" ",a.jsx(iv,{})," Telefones"," "]}),component:a.jsx(E6,{}),mode:"both"},{id:5,button:a.jsxs(a.Fragment,{children:[" ",a.jsx(Eh,{})," Observações"," "]}),component:a.jsx($6,{}),mode:"both"},{id:6,button:a.jsxs(a.Fragment,{children:[" ",a.jsx(Xy,{})," Agenda"," "]}),component:a.jsx(D6,{}),mode:"edit"},{id:7,button:a.jsxs(a.Fragment,{children:[" ",a.jsx(tC,{})," Histórico"," "]}),component:a.jsx(C6,{}),mode:"edit"},{id:8,button:a.jsxs(a.Fragment,{children:[" ",a.jsx(Uw,{})," Compras"," "]}),component:a.jsx(R6,{}),mode:"edit"}],r=P(0),n=P({}),o=P({CODIGO:0,NOME:""}),i=P(!1),l=P(!1),s=P([]),c=P([]),u=P([]),d=P([]),f=P([]),g=P([]),C=P([]),x=()=>{n.set(h=>{const p={...h},$=o.value.CODIGO||Date.now();return p.CONTATOS&&p.CONTATOS.some(E=>E.CODIGO&&E.CODIGO===o.value.CODIGO)&&(p.CONTATOS=p.CONTATOS.filter(E=>E.CODIGO!==o.value.CODIGO)),p.CONTATOS=[...p.CONTATOS||[],{FILHOS:0,...o.value,CODIGO:$}],p}),l.set(!1)},w=()=>{l.set(!1),o.reset()},v=h=>()=>{l.set(!0),o.set(h)},y=h=>()=>{n.set(p=>{var E;const $={...p};return $.CONTATOS=(E=$.CONTATOS)==null?void 0:E.filter(k=>k.CODIGO!==h.CODIGO),$}),o.value.CODIGO===h.CODIGO&&o.set({})};return j.useEffect(()=>{de({method:"get",service:"customers",endpoint:"/cities",params:{perPage:99999},onSuccess:h=>s.set(h.data),loadingState:i}),de({method:"get",service:"customers",endpoint:"/segments",params:{perPage:9999},onSuccess:h=>c.set(h.data),loadingState:i}),de({method:"get",service:"customers",endpoint:"/medias",params:{perPage:9999},onSuccess:h=>u.set(h.data),loadingState:i}),de({method:"get",service:"users",endpoint:"/users",params:{perPage:9999},onSuccess:h=>g.set(h.data),loadingState:i}),de({method:"get",service:"customers",endpoint:"/origins",params:{perPage:9999},onSuccess:h=>f.set(h.data),loadingState:i}),de({method:"get",service:"customers",endpoint:"/customer-groups",params:{perPage:9999},onSuccess:h=>d.set(h.data),loadingState:i}),de({method:"get",service:"customers",endpoint:"/positions",params:{perPage:9999},onSuccess:h=>C.set(h.data),loadingState:i})},[]),a.jsx(Wt.Provider,{value:{formSections:t,renderingSectionState:r,customerDataState:n,selectedContactState:o,loadingState:i,contactModalState:l,citiesState:s,segmentsState:c,mediasState:u,operatorsState:g,groupsState:d,originsState:f,positionsState:C,onClickAddContact:x,onClickEditContact:v,onClickDeleteContact:y,onClickCancelEditContact:w},children:e})},z6=()=>{const{customerDataState:e}=j.useContext(Wt),t=[{name:"Física",value:"FIS"},{name:"Jurídica",value:"JUR"}],r=t.find(n=>n.value===e.value.PESSOA);return a.jsxs(a.Fragment,{children:[a.jsxs("div",{style:{width:"calc(50% - 0.5rem)"},children:[a.jsx("h3",{children:" Código ERP "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[4],$padding:[.375,.375],$fontSize:.875,$width:"100%",leftIcon:null,rightIcon:null,onChange:pe("COD_ERP",e),placeholder:"Ex: 0000000",value:e.value.COD_ERP})]}),a.jsxs("div",{style:{width:"calc(50% - 0.5rem)"},children:[a.jsx("h3",{children:" Pessoa * "}),a.jsx(Te,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[4],$padding:[.375,.375],$fontSize:.875,$width:"100%",onChange:it("PESSOA",e),placeholder:"Pessoa",options:t,defaultValue:r})]}),a.jsxs("div",{style:{width:"100%"},children:[a.jsx("h3",{children:" Razão social *"}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[4],$padding:[.375,.375],$fontSize:.875,$width:"100%",onChange:pe("RAZAO",e),placeholder:"Ex: COMERCIO DE TINTAS LTDA",value:e.value.RAZAO})]}),a.jsxs("div",{style:{width:"100%"},children:[a.jsx("h3",{children:" Nome Fantasia "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[4],$padding:[.375,.375],$fontSize:.875,$width:"100%",onChange:pe("FANTASIA",e),placeholder:"Ex: COMTINTAS",value:e.value.FANTASIA})]}),e.value.PESSOA==="FIS"&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{style:{width:"calc(50% - 0.5rem)"},children:[a.jsx("h3",{children:" CPF *"}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[4],$padding:[.375,.375],$fontSize:.875,$width:"100%",onChange:pe("CPF_CNPJ",e),placeholder:"000.000.000-00",value:e.value.CPF_CNPJ})]}),a.jsxs("div",{style:{width:"calc(50% - 0.5rem)"},children:[a.jsx("h3",{children:" Registro Geral "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[4],$padding:[.375,.375],$fontSize:.875,$width:"100%",onChange:pe("CIDADE",e),placeholder:"0000000000",value:e.value.CIDADE})]})]}),e.value.PESSOA==="JUR"&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{style:{width:"calc(50% - 0.5rem)"},children:[a.jsx("h3",{children:" CNPJ *"}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[4],$padding:[.375,.375],$fontSize:.875,$width:"100%",onChange:pe("CPF_CNPJ",e),placeholder:"00.000.000/0000-00",value:e.value.CPF_CNPJ})]}),a.jsxs("div",{style:{width:"calc(50% - 0.5rem)"},children:[a.jsx("h3",{children:" Inscrição Estadual "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[4],$padding:[.375,.375],$fontSize:.875,$width:"100%",onChange:pe("IE_RG",e),placeholder:"000.000.000.000",value:e.value.IE_RG})]})]})]})},N6=Q.button`
    background-color: var(--color-grey-6-h);
    color: var(--color-grey-3);
    font-weight: 500;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    display: flex;
    gap: 0.25rem;
    align-items: center;
    transition: 0.2s ease-in-out;

    >svg {
        color: var(--color-grey-2);
    }

    ${e=>e.$isSelected?Ge`
            background-color: var(--color-primary);
            color: white;
            cursor: default !important;
            position: none;

            >svg {
                color: white;
            }
        `:Ge`
            &:hover {
                transform: scale(1.1);
            }
        `}

    ${e=>!e.$isDisplaying&&Ge`
        display: none;
    `}
`,Fv=({children:e,currentMode:t,displayOnMode:r,sectionId:n,context:o})=>{const{renderingSectionState:i}=j.useContext(o),l=()=>i.set(n),s=i.value===n,c=r===t||r==="both";return a.jsx(N6,{$isSelected:s,$isDisplaying:c,onClick:l,type:"button",children:e})},Gv=Q.div`
    overflow: auto;
    background-color: var(--color-grey-8);
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;

    box-sizing: border-box;

    @media (max-width: 50rem) {
        h3 {
            font-size: 0.75rem;
            max-width: 100%;
            white-space: nowrap;
            overflow: hidden;
        }
    }
    >header{
        box-sizing: border-box;
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0.5rem 1rem;
        width: 100%;

        >button {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            transition: 0.3s ease-in-out;
            cursor: pointer;
            color: var(--color-grey-2);
            
            >svg {
                pointer-events: none;
            }

            &:hover {
                transform: scale(1.25);
            }
        }
    }

    >form {
        padding: 0.5rem 1rem;

        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        row-gap: 0.5rem;

        >nav {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 0.5rem;
            row-gap: 0.5rem;    
            margin-top: 0.5rem;
            box-sizing: border-box;
            width: 100%;
        }

        >div {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;

            >h3 {
                width: max-content;
            }
        }

        >section {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            row-gap: 0.5rem;
            border-radius: 0.5rem;
            background-color: var(--color-grey-6-h);
            box-sizing: border-box;
            padding: 1rem;
            width: 100%;

            >div {
                display: flex;
                flex-direction: column;
                gap: 0.25rem;

                >div {
                    background-color: var(--color-grey-8);
                    border-radius: 0.5rem;
                }

                >h3 {
                    width: max-content;
                }
            }
        }

    }

    >div:nth-child(3) {
        margin-top: 0.5rem;
        padding: 0.5rem 1rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 1rem;

        >button {
            font-weight: 500;
            padding: 0.5rem 2rem;
            border-radius: 0.25rem;
            border: 1px solid;
            background-color: var(--color-primary);
            border-color: var(--color-primary);
            color: white;

            &:hover {
                filter: opacity(0.75);
            }
        }
    }
`,im=({mode:e})=>{const{formSections:t,renderingSectionState:r,customerDataState:n,loadingState:o}=j.useContext(Wt),i=ea(),l=Sy(),s=t.find(w=>w.id===r.value),c=e==="create",u=c?"Cadastro de Cliente":"Edição de Cliente",d=c?"Cadastrar":"Salvar Alterações",f=()=>{const{CONTATOS:w,...v}=n.value;de({service:"customers",endpoint:"/customers",method:"post",requestData:v,onSuccess:y=>{var h;console.log(y.message,(h=y.data)==null?void 0:h.CODIGO),w!=null&&w.length&&w.forEach(p=>{de({service:"customers",endpoint:"/contacts",method:"post",requestData:p,onSuccess:$=>{var E;console.log($.message,(E=$.data)==null?void 0:E.CODIGO)}})})},enableToast:!0,loadingState:o})},g=()=>{const{CONTATOS:w,...v}=n.value;de({service:"customers",endpoint:`/customers/${l.customerId}`,method:"patch",requestData:v,onSuccess:y=>{var h;console.log(y.message,(h=y.data)==null?void 0:h.CODIGO),w!=null&&w.length&&w.forEach(p=>{de({service:"customers",endpoint:`/contacts/${p.CODIGO}`,method:"patch",requestData:p,onSuccess:$=>{var E;console.log($.message,(E=$.data)==null?void 0:E.CODIGO)}})})},enableToast:!0,loadingState:o})},C=()=>{i(-1)},x=c?f:g;return j.useEffect(()=>{if(e==="edit"){const w=l.customerId;de({method:"get",service:"customers",endpoint:`/customers/${w}`,onSuccess:v=>n.set(v.data),loadingState:o})}},[e,l.customerId]),a.jsxs(Gv,{children:[a.jsxs("header",{children:[a.jsx("button",{title:"voltar",type:"button",onClick:C,children:a.jsx(Qy,{})}),a.jsxs("h1",{children:[" ",u," "]})]}),o.value?a.jsx(Mc,{}):a.jsxs(a.Fragment,{children:[a.jsxs("form",{children:[a.jsx(z6,{}),a.jsx("nav",{children:t.map(w=>a.jsx(Fv,{children:w.button,currentMode:e,displayOnMode:w.mode,sectionId:w.id,context:Wt},`form_section_${w.id}`))}),o.value?a.jsx(a.Fragment,{children:" "}):s==null?void 0:s.component]}),a.jsx("div",{children:a.jsx("button",{className:"register",type:"button",onClick:x,children:d})})]})]})},P6=()=>{const{operatorDataState:e}=j.useContext($i);return a.jsxs("section",{children:[a.jsxs("div",{style:{width:"calc(50% - 0.5rem)"},children:[a.jsx("h3",{children:" E-mail "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.375,.375],$fontSize:.875,$width:"100%",leftIcon:null,rightIcon:null,onChange:pe("EMAIL",e),value:e.value.EMAIL||""})]}),a.jsxs("div",{style:{width:"calc(50% - 0.5rem)"},children:[a.jsx("h3",{children:" E-mail para Exibiçào "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.375,.375],$fontSize:.875,$width:"100%",leftIcon:null,rightIcon:null,onChange:pe("EMAIL",e),value:e.value.EMAIL||""})]}),a.jsxs("div",{style:{width:"calc(50% - 0.5rem)"},children:[a.jsx("h3",{children:" Senha (E-mail) "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.375,.375],$fontSize:.875,$width:"100%",leftIcon:null,rightIcon:null,onChange:pe("SENHAEMAILOPERADOR",e),value:e.value.SENHAEMAILOPERADOR||""})]})]})},M6=Q.div`
    ${e=>Ge`
        box-sizing: border-box;
        width: ${e.$width};
        user-select: none;
        position: relative;
        border: 2px solid ${e.$borderColor||e.$color};
        border-radius: 0.5rem;

        svg {
            font-size: ${e.$fontSize?e.$fontSize*1.125+"rem":"1rem"};
            width: ${e.$fontSize?e.$fontSize*1.125+"rem":"1rem"};
            color: ${e.$color};
            opacity: 0.8;
            padding: ${e.$padding[0]+"rem"} ${e.$padding[1]+"rem"};

            @media (max-width: 50rem) {
                font-size: ${e.$fontSize?e.$fontSize*1.125*.85+"rem":"0.875rem"};
                width: ${e.$fontSize?e.$fontSize*1.125*.85+"rem":"0.875rem"};
            }

            &:nth-child(1) {
                margin-right: ${(e.$fontSize||.875)/2+"rem"};
            }

            &:nth-last-child(1) {
                margin-left: ${(e.$fontSize||.875)/2+"rem"};
            }
        }

        >div:nth-child(1) {
            display: flex;
            align-items: center;
            box-sizing: border-box;
            width: 100%;
            
            &:not([disabled]){
                cursor: pointer;
            }

            >p {
                font-size: ${e.$fontSize?e.$fontSize+"rem":"0.875rem"};
                font-weight: ${e.$fontWeight?e.$fontWeight:"400"};
                color: ${e.$color};
                padding: ${e.$padding[0]+"rem"} ${e.$padding[1]+"rem"};

                @media (max-width: 50rem) {
                    font-size: ${e.$fontSize?e.$fontSize*.85+"rem":"0.75rem"};
                }
            }

            >p+*:nth-last-child(1) {
                margin-left: auto;
            }
        }

        >ul {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: ${`${e.$padding[0]*2+(e.$padding[0]*2+(e.$fontSize||1))/4+(e.$fontSize||1)}rem`};
            border-radius: 0.5rem;
            left: 0;
            background-color: var(--color-grey-8);
            width: 100%;
            max-height: calc(40vh - 2rem);
            overflow-y: auto;
            box-shadow: 0 0 1px 2px var(--color-grey-5);
            z-index: 2;

            >li {
                display: flex;
                align-items: center;
                gap: 0.25rem;
                
                box-sizing: border-box;
                min-height: max-content;

                ${`padding: ${e.$padding[0]}rem ${e.$padding[1]}rem;`};

                &:hover {
                    background-color: var(--color-grey-7);
                    cursor: pointer;
                }

                &.selected {
                    background-color: var(--color-grey-7);
                }

                &:nth-child(1) {
                    border-top-left-radius: 0.5rem;
                    border-top-right-radius: 0.5rem;
                    padding-top: 0.125rem;
                    ${`padding-top: ${e.$padding[0]}rem;`}
                }

                &:nth-last-child() {
                    border-bottom-left-radius: 0.5rem;
                    border-bottom-right-radius: 0.5rem;
                    ${`padding-bottom: ${e.$padding[0]}rem;`}
                }

                >p {
                    font-size: ${e.$fontSize+"rem"};
                    font-weight: ${e.$fontWeight?e.$fontWeight:500};
                
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                svg {
                    font-size: ${e.$fontSize?e.$fontSize*1.125+"rem":"1rem"};
                    width: ${e.$fontSize?e.$fontSize*1.125+"rem":"1rem"};
                    color: ${e.$color};
                    opacity: 0.8;

                    @media (max-width: 50rem) {
                        font-size: ${e.$fontSize?e.$fontSize*1.125*.85+"rem":"0.875rem"};
                        width: ${e.$fontSize?e.$fontSize*1.125*.85+"rem":"0.875rem"};
                    }
                }
            }

            &.hidden {
                visibility: hidden;
            }

            transition-property: visibility;
        }

    `}
`;function Bl({leftIcon:e,rightIcon:t,options:r,onChange:n,placeholder:o,disabled:i,defaultValue:l,...s}){const c=e?t?2:1:t?1:0,u=P(l||[]),d=P(!1),f=j.useRef(null),g=j.useRef(null);j.useEffect(()=>{function x(w){const v=g.current&&!g.current.contains(w.target),y=f.current&&!f.current.contains(w.target);v&&y&&d.set(!1)}return document.addEventListener("mousedown",x),()=>{document.removeEventListener("mousedown",x)}},[d.value]),j.useEffect(()=>{u.value&&n&&n(u.value.map(x=>x.value))},[u.value]);const C=x=>()=>{u.value.some(w=>w.name===x.name)?u.set(w=>w.filter(v=>v.name!==x.name)):u.set(w=>[...w,x])};return a.jsxs(M6,{...s,$icons:c,children:[a.jsxs("div",{onClick:()=>d.set(x=>!x),ref:f,children:[e||"",a.jsxs("p",{children:[" ",o," ","(",u.value.length,"/",r.length,")"," "]}),t||""]}),a.jsx("ul",{ref:g,className:d.value?"showing":"hidden",children:r.map((x,w)=>a.jsxs("li",{className:u.value.some(v=>v.name===x.name)?"selected":"",onClick:C(x),children:[a.jsx("input",{type:"checkbox",checked:u.value.some(v=>v.name===x.name),onChange:()=>null}),a.jsxs("p",{children:[" ",x.name," "]})]},`option_${w}`))})]})}const L6=()=>{const{operatorDataState:e}=j.useContext($i),t=[{name:"0 - PCMU",value:0},{name:"1 - PCMA",value:1},{name:"2 - SPEEX",value:2},{name:"3 - SPEEX_5",value:3},{name:"4 - SPEEX_15",value:4}];return a.jsxs("section",{children:[a.jsxs("div",{style:{width:"calc(50% - 0.5rem)"},children:[a.jsx("h3",{children:" Ramal "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.375,.375],$fontSize:.875,$width:"100%",leftIcon:null,rightIcon:null,onChange:pe("ASTERISK_RAMAL",e),value:e.value.ASTERISK_RAMAL||""})]}),a.jsxs("div",{style:{width:"calc(50% - 0.5rem)"},children:[a.jsx("h3",{children:" User ID "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.375,.375],$fontSize:.875,$width:"100%",leftIcon:null,rightIcon:null,onChange:pe("ASTERISK_USERID",e),value:e.value.ASTERISK_USERID||""})]}),a.jsxs("div",{style:{width:"calc(50% - 0.5rem)"},children:[a.jsx("h3",{children:" Login "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.375,.375],$fontSize:.875,$width:"100%",leftIcon:null,rightIcon:null,onChange:pe("ASTERISK_LOGIN",e),value:e.value.ASTERISK_LOGIN||""})]}),a.jsxs("div",{style:{width:"calc(50% - 0.5rem)"},children:[a.jsx("h3",{children:" Senha Ramal "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.375,.375],$fontSize:.875,$width:"100%",leftIcon:null,rightIcon:null,onChange:pe("ASTERISK_SENHA",e),value:e.value.ASTERISK_SENHA||""})]}),a.jsxs("div",{style:{width:"calc(50% - 0.5rem)"},children:[a.jsx("h3",{children:" ID Campanha WeON "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.375,.375],$fontSize:.875,$width:"100%",leftIcon:null,rightIcon:null,onChange:()=>null})]}),a.jsxs("div",{style:{width:"calc(50% - 0.5rem)"},children:[a.jsx("h3",{children:" Codecs "}),a.jsx(Bl,{$color:m.colorGrey[3],$borderColor:m.colorGrey[5],$padding:[.375,.375],$fontSize:.875,$width:"100%",leftIcon:null,rightIcon:a.jsx(_i,{}),placeholder:"Codecs",onChange:()=>null,options:t})]})]})},$i=j.createContext({}),lm=({children:e})=>{const t=[{id:1,button:a.jsxs(a.Fragment,{children:[" ",a.jsx(Zy,{})," E-mail"," "]}),component:a.jsx(P6,{}),mode:"both"},{id:2,button:a.jsxs(a.Fragment,{children:[" ",a.jsx(iv,{})," SIP"," "]}),component:a.jsx(L6,{}),mode:"both"}],r=P(1),n=P({}),o=P(!1);return a.jsx($i.Provider,{value:{formSections:t,renderingSectionState:r,operatorDataState:n,loadingState:o},children:e})},F6=()=>{const{operatorDataState:e}=j.useContext($i),t=[{name:"Manhã",value:1},{name:"Tarde",value:2},{name:"Integral",value:3}],r=[{name:"Ativo",value:"ATIVO"},{name:"Receptivo",value:"RECEP"},{name:"Ambos",value:"AMBOS"},{name:"Supervisor",value:"ADMIN"}],n=[{name:"Sim",value:"SIM"},{name:"Não",value:"NAO"}],o=t.find(d=>d.value===e.value.HORARIO),i=r.find(d=>d.value===e.value.NIVEL),l=n.find(d=>d.value===e.value.EDITA_CONTATOS)||{name:"Não",value:"NAO"},s=n.find(d=>d.value===e.value.VISUALIZA_COMPRAS)||{name:"Não",value:"NAO"},c=n.find(d=>d.value===e.value.ATIVO)||{name:"Não",value:"NAO"},u=n.find(d=>d.value===e.value.LIGA_REPRESENTANTE)||{name:"Não",value:"NAO"};return a.jsxs(a.Fragment,{children:[a.jsxs("div",{style:{width:"calc(50% - 0.5rem)"},children:[a.jsx("h3",{children:" Código ERP "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[4],$padding:[.375,.375],$fontSize:.875,$width:"100%",leftIcon:null,rightIcon:null,onChange:pe("CODIGO_ERP",e),placeholder:"Ex: 0000000",value:e.value.CODIGO_ERP})]}),a.jsxs("div",{style:{width:"calc(50% - 0.5rem)"},children:[a.jsx("h3",{children:" Código Telefonia "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[4],$padding:[.375,.375],$fontSize:.875,$width:"100%",leftIcon:null,rightIcon:null,onChange:pe("CODTELEFONIA",e),placeholder:"Ex: 0000000",value:e.value.CODTELEFONIA})]}),a.jsxs("div",{style:{width:"calc(50% - 0.5rem)"},children:[a.jsx("h3",{children:" Nome "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[4],$padding:[.375,.375],$fontSize:.875,$width:"100%",leftIcon:null,rightIcon:null,onChange:pe("NOME",e),placeholder:"Ex: 0000000",value:e.value.NOME})]}),a.jsxs("div",{style:{width:"calc(50% - 0.5rem)"},children:[a.jsx("h3",{children:" Nome de Exibição "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[4],$padding:[.375,.375],$fontSize:.875,$width:"100%",leftIcon:null,rightIcon:null,onChange:pe("NOME_EXIBICAO",e),placeholder:"Ex: 0000000",value:e.value.NOME_EXIBICAO||""})]}),a.jsxs("div",{style:{width:"calc(50% - 0.5rem)"},children:[a.jsx("h3",{children:" Login "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[4],$padding:[.375,.375],$fontSize:.875,$width:"100%",leftIcon:null,rightIcon:null,onChange:pe("LOGIN",e),placeholder:"Ex: 0000000",value:e.value.LOGIN||""})]}),a.jsxs("div",{style:{width:"calc(50% - 0.5rem)"},children:[a.jsx("h3",{children:" Senha "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[4],$padding:[.375,.375],$fontSize:.875,$width:"100%",leftIcon:null,rightIcon:null,onChange:pe("SENHA",e),placeholder:"Ex: 0000000",value:e.value.SENHA||""})]}),a.jsxs("div",{style:{width:"calc(50% - 0.5rem)"},children:[a.jsx("h3",{children:" Horário "}),a.jsx(Te,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[4],$padding:[.375,.375],$fontSize:.875,$width:"100%",onChange:it("HORARIO",e),defaultValue:o,options:t,placeholder:"Horário de Trabalho"})]}),a.jsxs("div",{style:{width:"calc(50% - 0.5rem)"},children:[a.jsx("h3",{children:" Nível "}),a.jsx(Te,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[4],$padding:[.375,.375],$fontSize:.875,$width:"100%",onChange:it("HORARIO",e),defaultValue:i,options:r,placeholder:"Nível de usuário"})]}),a.jsxs("div",{style:{width:"calc(33.33% - 0.666rem)"},children:[a.jsx("h3",{children:" Edita Contatos ? "}),a.jsx(Te,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[4],$padding:[.375,.375],$fontSize:.875,$width:"100%",onChange:it("EDITA_CONTATOS",e),defaultValue:l,options:n})]}),a.jsxs("div",{style:{width:"calc(33.34% - 0.667rem)"},children:[a.jsx("h3",{children:" Visualiza Compras ? "}),a.jsx(Te,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[4],$padding:[.375,.375],$fontSize:.875,$width:"100%",onChange:it("VISUALIZA_COMPRAS",e),defaultValue:s,options:n})]}),a.jsxs("div",{style:{width:"calc(33.33% - 0.666rem)"},children:[a.jsx("h3",{children:" Ativo ? "}),a.jsx(Te,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[4],$padding:[.375,.375],$fontSize:.875,$width:"100%",onChange:it("ATIVO",e),defaultValue:c,options:n})]}),a.jsxs("div",{style:{width:"calc(33.33% - 0.666rem)"},children:[a.jsx("h3",{children:" Módulo Manual ? "}),a.jsx(Te,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[4],$padding:[.375,.375],$fontSize:.875,$width:"100%",onChange:it("ATIVO",e),defaultValue:c,options:n})]}),a.jsxs("div",{style:{width:"calc(33.34% - 0.667rem)"},children:[a.jsx("h3",{children:" Liga p/ Representante ? "}),a.jsx(Te,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[4],$padding:[.375,.375],$fontSize:.875,$width:"100%",onChange:it("LIGA_REPRESENTANTE",e),defaultValue:u,options:n})]}),a.jsxs("div",{style:{width:"calc(33.33% - 0.666rem)"},children:[a.jsx("h3",{children:" Liga p/ Representante Dias "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[4],$padding:[.375,.375],$fontSize:.875,$width:"100%",leftIcon:null,rightIcon:null,onChange:pe("LIGA_REPRESENTANTE_DIAS",e),value:e.value.LIGA_REPRESENTANTE_DIAS||0,type:"number"})]}),a.jsxs("div",{style:{width:"calc(50% - 0.5rem)"},children:[a.jsx("h3",{children:" Limite Diário Agendamento "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[4],$padding:[.375,.375],$fontSize:.875,$width:"100%",leftIcon:null,rightIcon:null,onChange:pe("LIMITE_DIARIO_AGENDAMENTO",e),value:e.value.LIMITE_DIARIO_AGENDAMENTO||0,type:"number"})]}),a.jsxs("div",{style:{width:"calc(50% - 0.5rem)"},children:[a.jsx("h3",{children:" Omni "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[4],$padding:[.375,.375],$fontSize:.875,$width:"100%",leftIcon:null,rightIcon:null,onChange:pe("OMNI",e),value:e.value.OMNI||0,type:"number"})]})]})},am=({mode:e})=>{const t=ea(),r=Sy(),{formSections:n,renderingSectionState:o,operatorDataState:i}=j.useContext($i),l=e==="create",s=l?"Cadastro de Operador":"Edição de Operador",c=l?"Cadastrar":"Salvar Alterações",u=n.find(g=>g.id===o.value),d=P(!1),f=()=>t(-1);return j.useEffect(()=>{if(!l){const g=r.operatorId;de({method:"get",service:"users",endpoint:`/users/${g}`,onSuccess:C=>i.set(C),loadingState:d})}},[l]),a.jsxs(Gv,{children:[a.jsxs("header",{children:[a.jsx("button",{title:"voltar",type:"button",onClick:f,children:a.jsx(Qy,{})}),a.jsxs("h1",{children:[" ",s," "]})]}),d.value?a.jsx(Mc,{}):a.jsxs(a.Fragment,{children:[a.jsxs("form",{children:[a.jsx(F6,{}),a.jsx("nav",{children:n.map(g=>a.jsx(Fv,{children:g.button,currentMode:e,displayOnMode:g.mode,sectionId:g.id,context:$i},`form_section_${g.id}`))}),u==null?void 0:u.component]}),a.jsx("div",{children:a.jsx("button",{className:"register",type:"button",children:c})})]})]})},G6=Q.div`
${e=>Ge`
    display: grid;
    grid-template-areas: "options" "table";
    grid-template-rows: max-content 1fr;

    box-sizing: border-box;
    margin: 1rem;
    outline: 1px solid var(--color-grey-6);
    border-radius: 0.5rem;
    position: relative;

    @media (max-width: 50rem) {
        padding: 0.5rem ;
    }

    transition: 0.3s ease-in-out;

    ${e.$isMaximized&&Ge`
        @media (min-width: 50rem) {
            box-sizing: border-box;
            width: 100vw;
            height: 100vh !important;
            backdrop-filter: brightness(60%);
            position: absolute;
            top: 0;
            left: 0;
            z-index: 7;
            background-color: transparent;
            max-height: 100vh !important;
            border-radius: 0;
            margin: 0;
            padding: 1rem;
        }
    `}

    .loading_spinner {
        position: absolute !important;
        /* top: calc(50vh - 0.594rem);
        left: calc(50vw - 1.781rem); */
        top: calc(50% - 0.594rem) !important;
        left: calc(50% - 1.781rem) !important;
    }

    >table {
        background-color: var(--color-grey-8);
        overflow-x: auto;
        grid-area: table;
        display: grid;
        grid-template-areas: "thead" "tbody";
        grid-template-rows: max-content 1fr;

        &>thead {
            box-shadow: 0 0 6px 4px rgba(0,0,0, 0.125);
            z-index: 1;
        }
        
        &>thead>tr {
            grid-area: thead;
            display: flex;
            align-items: center;
            box-sizing: border-box;

            background-color: var(--color-grey-6-h);
            
            th {
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: ${e.$fontSize+"rem"};
                color: var(--color-grey-3);
                padding: 0.75rem 1rem;

                @media (max-width: 50rem) {
                    font-size: ${e.$fontSize*.875+"rem"};
                    padding: 0.5rem 0.75rem;
                }
            }
            
            ${e.$haveActions&&Ge`
                th:nth-child(1) {
                    width: 4rem;
                    min-width: 4rem;
                }
            `}

            ${e.$columns.map((t,r)=>Ge`
                th:nth-child(${e.$haveActions?r+2:r+1}) {
                    width: ${t.width?t.width+"rem":`${100/e.$columns.filter(n=>!n.width).length}%`};
                    ${t.width&&`min-width: ${t.width+"rem"};`}

                    @media (max-width: 50rem) {
                        width: ${t.width?t.width*.5+"rem":`${100/e.$columns.filter(n=>!n.width).length}%`}
                    }
                }
            `)}
        }
    
        &>tbody {
            grid-area: tbody;
            display: flex;
            flex-direction: column;
            
            box-sizing: border-box;
            overflow-y: auto;
            overflow-x: hidden;
            
            >tr {
                box-sizing: border-box;
                width: 100%;
                display: flex;
                align-items: center;
                
                &:nth-child(odd) {
                    background-color: var(--color-grey-7-h);
                }
                
                >td {
                    font-size: ${e.$fontSize+"rem"};
                    color: var(--color-grey-1);
                    padding: 1rem 1rem;

                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    
                    @media (max-width: 50rem) {
                        font-size: ${e.$fontSize*.875+"rem"};
                        padding: 0.75rem;
                    }
                    
                    >a {
                        font-size: ${e.$fontSize*1.5+"rem"};
                        color: var(--color-grey-2);
                        cursor: pointer;
                        width: max-content;

                        &:hover {
                            transform: scale(1.25);
                            transition: 0.3s ease-in-out;
                        }
                    }
                }

                ${e.$haveActions&&Ge`
                    td:nth-child(1) {
                        width: 4rem;
                        min-width: 4rem;
                    }
                `}
                
                ${e.$columns.map((t,r)=>Ge`
                >td:nth-child(${e.$haveActions?r+2:r+1}) {
                    width: ${t.width||`${100/e.$columns.filter(n=>!n.width).length}%`};
                    width: ${t.width?t.width+"rem":`${100/e.$columns.filter(n=>!n.width).length}%`};
                    ${t.width&&`min-width: ${t.width+"rem"};`}
                    ${t.primarykey&&"font-weight: 600;"}
                    ${t.alignContent&&`text-align: ${t.alignContent};`}

                    @media (max-width: 50rem) {
                        width: ${t.width?t.width*.5+"rem":`${100/e.$columns.filter(n=>!n.width).length}%`}
                    }
                }
                `)}
            }
        }
    }
`}
`,B6=Q.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.375rem 0.75rem;
    height: 1.25rem;

    border: 1px solid var(--color-grey-3);
    background-color: var(--color-grey-3);
    color: var(--color-grey-7);
    font-weight: 500;
    font-size: 0.75rem;
    border-radius: 0.5rem;

    >button {
        font-size: 1.125rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-grey-8);
        transition: 0.3s ease-in-out;

        >svg {
            pointer-events: none;
        }

        &:hover {
            transform: scale(1.25);
            color: var(--color-grey-7);
        }
    }

    >button:disabled {
        opacity: 0;
        pointer-events: none;
    }
`,V6=({searchParams:e,setSearchParams:t,totalPages:r})=>{const n=e.get("page"),o=n?Number(n):1,i=o<=1,l=o>=r,s=()=>t(u=>(u.set("page",String(o-1)),u)),c=()=>t(u=>(u.set("page",String(o+1)),u));return a.jsxs(B6,{children:[a.jsx("button",{disabled:i,onClick:s,children:a.jsx(Nw,{})}),a.jsxs("span",{children:["Página: ",o,"/",r]}),a.jsx("button",{disabled:l,onClick:c,children:a.jsx(Pw,{})})]})};var Bv={},Lc={},To={},Vv={},Ih={},Mo={},Ti={};/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hv=j;function Ee(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xt=Object.prototype.hasOwnProperty,H6=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sm={},cm={};function Uv(e){return Xt.call(cm,e)?!0:Xt.call(sm,e)?!1:H6.test(e)?cm[e]=!0:(sm[e]=!0,!1)}function Qt(e,t,r,n,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Nt[e]=new Qt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Nt[t]=new Qt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Nt[e]=new Qt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Nt[e]=new Qt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Nt[e]=new Qt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Nt[e]=new Qt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Nt[e]=new Qt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Nt[e]=new Qt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Nt[e]=new Qt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Rh=/[\-:]([a-z])/g;function Th(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Rh,Th);Nt[t]=new Qt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Rh,Th);Nt[t]=new Qt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Rh,Th);Nt[t]=new Qt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Nt[e]=new Qt(e,1,!1,e.toLowerCase(),null,!1,!1)});Nt.xlinkHref=new Qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Nt[e]=new Qt(e,1,!1,e.toLowerCase(),null,!0,!0)});var ds={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},U6=["Webkit","ms","Moz","O"];Object.keys(ds).forEach(function(e){U6.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ds[t]=ds[e]})});var W6=/["'&<>]/;function Ht(e){if(typeof e=="boolean"||typeof e=="number")return""+e;e=""+e;var t=W6.exec(e);if(t){var r="",n,o=0;for(n=t.index;n<e.length;n++){switch(e.charCodeAt(n)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}o!==n&&(r+=e.substring(o,n)),o=n+1,r+=t}e=o!==n?r+e.substring(o,n):r}return e}var q6=/([A-Z])/g,K6=/^ms-/,uf=Array.isArray;function ln(e,t){return{insertionMode:e,selectedValue:t}}function Q6(e,t,r){switch(t){case"select":return ln(1,r.value!=null?r.value:r.defaultValue);case"svg":return ln(2,null);case"math":return ln(3,null);case"foreignObject":return ln(1,null);case"table":return ln(4,null);case"thead":case"tbody":case"tfoot":return ln(5,null);case"colgroup":return ln(7,null);case"tr":return ln(6,null)}return 4<=e.insertionMode||e.insertionMode===0?ln(1,null):e}var um=new Map;function Wv(e,t,r){if(typeof r!="object")throw Error(Ee(62));t=!0;for(var n in r)if(Xt.call(r,n)){var o=r[n];if(o!=null&&typeof o!="boolean"&&o!==""){if(n.indexOf("--")===0){var i=Ht(n);o=Ht((""+o).trim())}else{i=n;var l=um.get(i);l!==void 0||(l=Ht(i.replace(q6,"-$1").toLowerCase().replace(K6,"-ms-")),um.set(i,l)),i=l,o=typeof o=="number"?o===0||Xt.call(ds,n)?""+o:o+"px":Ht((""+o).trim())}t?(t=!1,e.push(' style="',i,":",o)):e.push(";",i,":",o)}}t||e.push('"')}function cr(e,t,r,n){switch(r){case"style":Wv(e,t,n);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N"){if(t=Nt.hasOwnProperty(r)?Nt[r]:null,t!==null){switch(typeof n){case"function":case"symbol":return;case"boolean":if(!t.acceptsBooleans)return}switch(r=t.attributeName,t.type){case 3:n&&e.push(" ",r,'=""');break;case 4:n===!0?e.push(" ",r,'=""'):n!==!1&&e.push(" ",r,'="',Ht(n),'"');break;case 5:isNaN(n)||e.push(" ",r,'="',Ht(n),'"');break;case 6:!isNaN(n)&&1<=n&&e.push(" ",r,'="',Ht(n),'"');break;default:t.sanitizeURL&&(n=""+n),e.push(" ",r,'="',Ht(n),'"')}}else if(Uv(r)){switch(typeof n){case"function":case"symbol":return;case"boolean":if(t=r.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-")return}e.push(" ",r,'="',Ht(n),'"')}}}function fs(e,t,r){if(t!=null){if(r!=null)throw Error(Ee(60));if(typeof t!="object"||!("__html"in t))throw Error(Ee(61));t=t.__html,t!=null&&e.push(""+t)}}function J6(e){var t="";return Hv.Children.forEach(e,function(r){r!=null&&(t+=r)}),t}function Lu(e,t,r,n){e.push(Jr(r));var o=r=null,i;for(i in t)if(Xt.call(t,i)){var l=t[i];if(l!=null)switch(i){case"children":r=l;break;case"dangerouslySetInnerHTML":o=l;break;default:cr(e,n,i,l)}}return e.push(">"),fs(e,o,r),typeof r=="string"?(e.push(Ht(r)),null):r}var X6=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,dm=new Map;function Jr(e){var t=dm.get(e);if(t===void 0){if(!X6.test(e))throw Error(Ee(65,e));t="<"+e,dm.set(e,t)}return t}function Y6(e,t,r,n,o){switch(t){case"select":e.push(Jr("select"));var i=null,l=null;for(d in r)if(Xt.call(r,d)){var s=r[d];if(s!=null)switch(d){case"children":i=s;break;case"dangerouslySetInnerHTML":l=s;break;case"defaultValue":case"value":break;default:cr(e,n,d,s)}}return e.push(">"),fs(e,l,i),i;case"option":l=o.selectedValue,e.push(Jr("option"));var c=s=null,u=null,d=null;for(i in r)if(Xt.call(r,i)){var f=r[i];if(f!=null)switch(i){case"children":s=f;break;case"selected":u=f;break;case"dangerouslySetInnerHTML":d=f;break;case"value":c=f;default:cr(e,n,i,f)}}if(l!=null)if(r=c!==null?""+c:J6(s),uf(l)){for(n=0;n<l.length;n++)if(""+l[n]===r){e.push(' selected=""');break}}else""+l===r&&e.push(' selected=""');else u&&e.push(' selected=""');return e.push(">"),fs(e,d,s),s;case"textarea":e.push(Jr("textarea")),d=l=i=null;for(s in r)if(Xt.call(r,s)&&(c=r[s],c!=null))switch(s){case"children":d=c;break;case"value":i=c;break;case"defaultValue":l=c;break;case"dangerouslySetInnerHTML":throw Error(Ee(91));default:cr(e,n,s,c)}if(i===null&&l!==null&&(i=l),e.push(">"),d!=null){if(i!=null)throw Error(Ee(92));if(uf(d)&&1<d.length)throw Error(Ee(93));i=""+d}return typeof i=="string"&&i[0]===`
`&&e.push(`
`),i!==null&&e.push(Ht(""+i)),null;case"input":e.push(Jr("input")),c=d=s=i=null;for(l in r)if(Xt.call(r,l)&&(u=r[l],u!=null))switch(l){case"children":case"dangerouslySetInnerHTML":throw Error(Ee(399,"input"));case"defaultChecked":c=u;break;case"defaultValue":s=u;break;case"checked":d=u;break;case"value":i=u;break;default:cr(e,n,l,u)}return d!==null?cr(e,n,"checked",d):c!==null&&cr(e,n,"checked",c),i!==null?cr(e,n,"value",i):s!==null&&cr(e,n,"value",s),e.push("/>"),null;case"menuitem":e.push(Jr("menuitem"));for(var g in r)if(Xt.call(r,g)&&(i=r[g],i!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(Ee(400));default:cr(e,n,g,i)}return e.push(">"),null;case"title":e.push(Jr("title")),i=null;for(f in r)if(Xt.call(r,f)&&(l=r[f],l!=null))switch(f){case"children":i=l;break;case"dangerouslySetInnerHTML":throw Error(Ee(434));default:cr(e,n,f,l)}return e.push(">"),i;case"listing":case"pre":e.push(Jr(t)),l=i=null;for(c in r)if(Xt.call(r,c)&&(s=r[c],s!=null))switch(c){case"children":i=s;break;case"dangerouslySetInnerHTML":l=s;break;default:cr(e,n,c,s)}if(e.push(">"),l!=null){if(i!=null)throw Error(Ee(60));if(typeof l!="object"||!("__html"in l))throw Error(Ee(61));r=l.__html,r!=null&&(typeof r=="string"&&0<r.length&&r[0]===`
`?e.push(`
`,r):e.push(""+r))}return typeof i=="string"&&i[0]===`
`&&e.push(`
`),i;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":e.push(Jr(t));for(var C in r)if(Xt.call(r,C)&&(i=r[C],i!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(Ee(399,t));default:cr(e,n,C,i)}return e.push("/>"),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return Lu(e,r,t,n);case"html":return o.insertionMode===0&&e.push("<!DOCTYPE html>"),Lu(e,r,t,n);default:if(t.indexOf("-")===-1&&typeof r.is!="string")return Lu(e,r,t,n);e.push(Jr(t)),l=i=null;for(u in r)if(Xt.call(r,u)&&(s=r[u],s!=null))switch(u){case"children":i=s;break;case"dangerouslySetInnerHTML":l=s;break;case"style":Wv(e,n,s);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:Uv(u)&&typeof s!="function"&&typeof s!="symbol"&&e.push(" ",u,'="',Ht(s),'"')}return e.push(">"),fs(e,l,i),i}}function fm(e,t,r){if(e.push('<!--$?--><template id="'),r===null)throw Error(Ee(395));return e.push(r),e.push('"></template>')}function Z6(e,t,r,n){switch(r.insertionMode){case 0:case 1:return e.push('<div hidden id="'),e.push(t.segmentPrefix),t=n.toString(16),e.push(t),e.push('">');case 2:return e.push('<svg aria-hidden="true" style="display:none" id="'),e.push(t.segmentPrefix),t=n.toString(16),e.push(t),e.push('">');case 3:return e.push('<math aria-hidden="true" style="display:none" id="'),e.push(t.segmentPrefix),t=n.toString(16),e.push(t),e.push('">');case 4:return e.push('<table hidden id="'),e.push(t.segmentPrefix),t=n.toString(16),e.push(t),e.push('">');case 5:return e.push('<table hidden><tbody id="'),e.push(t.segmentPrefix),t=n.toString(16),e.push(t),e.push('">');case 6:return e.push('<table hidden><tr id="'),e.push(t.segmentPrefix),t=n.toString(16),e.push(t),e.push('">');case 7:return e.push('<table hidden><colgroup id="'),e.push(t.segmentPrefix),t=n.toString(16),e.push(t),e.push('">');default:throw Error(Ee(397))}}function e8(e,t){switch(t.insertionMode){case 0:case 1:return e.push("</div>");case 2:return e.push("</svg>");case 3:return e.push("</math>");case 4:return e.push("</table>");case 5:return e.push("</tbody></table>");case 6:return e.push("</tr></table>");case 7:return e.push("</colgroup></table>");default:throw Error(Ee(397))}}var t8=/[<\u2028\u2029]/g;function Fu(e){return JSON.stringify(e).replace(t8,function(t){switch(t){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}function r8(e,t){return t=t===void 0?"":t,{bootstrapChunks:[],startInlineScript:"<script>",placeholderPrefix:t+"P:",segmentPrefix:t+"S:",boundaryPrefix:t+"B:",idPrefix:t,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1,generateStaticMarkup:e}}function hm(e,t,r,n){return r.generateStaticMarkup?(e.push(Ht(t)),!1):(t===""?e=n:(n&&e.push("<!-- -->"),e.push(Ht(t)),e=!0),e)}var vl=Object.assign,n8=Symbol.for("react.element"),qv=Symbol.for("react.portal"),Kv=Symbol.for("react.fragment"),Qv=Symbol.for("react.strict_mode"),Jv=Symbol.for("react.profiler"),Xv=Symbol.for("react.provider"),Yv=Symbol.for("react.context"),Zv=Symbol.for("react.forward_ref"),e2=Symbol.for("react.suspense"),t2=Symbol.for("react.suspense_list"),r2=Symbol.for("react.memo"),Ah=Symbol.for("react.lazy"),o8=Symbol.for("react.scope"),i8=Symbol.for("react.debug_trace_mode"),l8=Symbol.for("react.legacy_hidden"),a8=Symbol.for("react.default_value"),pm=Symbol.iterator;function df(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kv:return"Fragment";case qv:return"Portal";case Jv:return"Profiler";case Qv:return"StrictMode";case e2:return"Suspense";case t2:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Yv:return(e.displayName||"Context")+".Consumer";case Xv:return(e._context.displayName||"Context")+".Provider";case Zv:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case r2:return t=e.displayName||null,t!==null?t:df(e.type)||"Memo";case Ah:t=e._payload,e=e._init;try{return df(e(t))}catch{}}return null}var n2={};function mm(e,t){if(e=e.contextTypes,!e)return n2;var r={},n;for(n in e)r[n]=t[n];return r}var vo=null;function Fc(e,t){if(e!==t){e.context._currentValue2=e.parentValue,e=e.parent;var r=t.parent;if(e===null){if(r!==null)throw Error(Ee(401))}else{if(r===null)throw Error(Ee(401));Fc(e,r)}t.context._currentValue2=t.value}}function o2(e){e.context._currentValue2=e.parentValue,e=e.parent,e!==null&&o2(e)}function i2(e){var t=e.parent;t!==null&&i2(t),e.context._currentValue2=e.value}function l2(e,t){if(e.context._currentValue2=e.parentValue,e=e.parent,e===null)throw Error(Ee(402));e.depth===t.depth?Fc(e,t):l2(e,t)}function a2(e,t){var r=t.parent;if(r===null)throw Error(Ee(402));e.depth===r.depth?Fc(e,r):a2(e,r),t.context._currentValue2=t.value}function Zs(e){var t=vo;t!==e&&(t===null?i2(e):e===null?o2(t):t.depth===e.depth?Fc(t,e):t.depth>e.depth?l2(t,e):a2(t,e),vo=e)}var gm={isMounted:function(){return!1},enqueueSetState:function(e,t){e=e._reactInternals,e.queue!==null&&e.queue.push(t)},enqueueReplaceState:function(e,t){e=e._reactInternals,e.replace=!0,e.queue=[t]},enqueueForceUpdate:function(){}};function ym(e,t,r,n){var o=e.state!==void 0?e.state:null;e.updater=gm,e.props=r,e.state=o;var i={queue:[],replace:!1};e._reactInternals=i;var l=t.contextType;if(e.context=typeof l=="object"&&l!==null?l._currentValue2:n,l=t.getDerivedStateFromProps,typeof l=="function"&&(l=l(r,o),o=l==null?o:vl({},o,l),e.state=o),typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function"&&(typeof e.UNSAFE_componentWillMount=="function"||typeof e.componentWillMount=="function"))if(t=e.state,typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount(),t!==e.state&&gm.enqueueReplaceState(e,e.state,null),i.queue!==null&&0<i.queue.length)if(t=i.queue,l=i.replace,i.queue=null,i.replace=!1,l&&t.length===1)e.state=t[0];else{for(i=l?t[0]:e.state,o=!0,l=l?1:0;l<t.length;l++){var s=t[l];s=typeof s=="function"?s.call(e,i,r,n):s,s!=null&&(o?(o=!1,i=vl({},i,s)):vl(i,s))}e.state=i}else i.queue=null}var s8={id:1,overflow:""};function ff(e,t,r){var n=e.id;e=e.overflow;var o=32-hs(n)-1;n&=~(1<<o),r+=1;var i=32-hs(t)+o;if(30<i){var l=o-o%5;return i=(n&(1<<l)-1).toString(32),n>>=l,o-=l,{id:1<<32-hs(t)+o|r<<o|n,overflow:i+e}}return{id:1<<i|r<<o|n,overflow:e}}var hs=Math.clz32?Math.clz32:d8,c8=Math.log,u8=Math.LN2;function d8(e){return e>>>=0,e===0?32:31-(c8(e)/u8|0)|0}function f8(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var h8=typeof Object.is=="function"?Object.is:f8,yn=null,Dh=null,ps=null,We=null,tl=!1,ec=!1,Vl=0,Ln=null,Gc=0;function co(){if(yn===null)throw Error(Ee(321));return yn}function vm(){if(0<Gc)throw Error(Ee(312));return{memoizedState:null,queue:null,next:null}}function zh(){return We===null?ps===null?(tl=!1,ps=We=vm()):(tl=!0,We=ps):We.next===null?(tl=!1,We=We.next=vm()):(tl=!0,We=We.next),We}function Nh(){Dh=yn=null,ec=!1,ps=null,Gc=0,We=Ln=null}function s2(e,t){return typeof t=="function"?t(e):t}function xm(e,t,r){if(yn=co(),We=zh(),tl){var n=We.queue;if(t=n.dispatch,Ln!==null&&(r=Ln.get(n),r!==void 0)){Ln.delete(n),n=We.memoizedState;do n=e(n,r.action),r=r.next;while(r!==null);return We.memoizedState=n,[n,t]}return[We.memoizedState,t]}return e=e===s2?typeof t=="function"?t():t:r!==void 0?r(t):t,We.memoizedState=e,e=We.queue={last:null,dispatch:null},e=e.dispatch=p8.bind(null,yn,e),[We.memoizedState,e]}function wm(e,t){if(yn=co(),We=zh(),t=t===void 0?null:t,We!==null){var r=We.memoizedState;if(r!==null&&t!==null){var n=r[1];e:if(n===null)n=!1;else{for(var o=0;o<n.length&&o<t.length;o++)if(!h8(t[o],n[o])){n=!1;break e}n=!0}if(n)return r[0]}}return e=e(),We.memoizedState=[e,t],e}function p8(e,t,r){if(25<=Gc)throw Error(Ee(301));if(e===yn)if(ec=!0,e={action:r,next:null},Ln===null&&(Ln=new Map),r=Ln.get(t),r===void 0)Ln.set(t,e);else{for(t=r;t.next!==null;)t=t.next;t.next=e}}function m8(){throw Error(Ee(394))}function Ga(){}var Cm={readContext:function(e){return e._currentValue2},useContext:function(e){return co(),e._currentValue2},useMemo:wm,useReducer:xm,useRef:function(e){yn=co(),We=zh();var t=We.memoizedState;return t===null?(e={current:e},We.memoizedState=e):t},useState:function(e){return xm(s2,e)},useInsertionEffect:Ga,useLayoutEffect:function(){},useCallback:function(e,t){return wm(function(){return e},t)},useImperativeHandle:Ga,useEffect:Ga,useDebugValue:Ga,useDeferredValue:function(e){return co(),e},useTransition:function(){return co(),[!1,m8]},useId:function(){var e=Dh.treeContext,t=e.overflow;e=e.id,e=(e&~(1<<32-hs(e)-1)).toString(32)+t;var r=ms;if(r===null)throw Error(Ee(404));return t=Vl++,e=":"+r.idPrefix+"R"+e,0<t&&(e+="H"+t.toString(32)),e+":"},useMutableSource:function(e,t){return co(),t(e._source)},useSyncExternalStore:function(e,t,r){if(r===void 0)throw Error(Ee(407));return r()}},ms=null,Gu=Hv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function g8(e){return console.error(e),null}function rl(){}function y8(e,t,r,n,o,i,l,s,c){var u=[],d=new Set;return t={destination:null,responseState:t,progressiveChunkSize:n===void 0?12800:n,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:d,pingedTasks:u,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:o===void 0?g8:o,onAllReady:rl,onShellReady:l===void 0?rl:l,onShellError:rl,onFatalError:rl},r=tc(t,0,null,r,!1,!1),r.parentFlushed=!0,e=Ph(t,e,null,r,d,n2,null,s8),u.push(e),t}function Ph(e,t,r,n,o,i,l,s){e.allPendingTasks++,r===null?e.pendingRootTasks++:r.pendingTasks++;var c={node:t,ping:function(){var u=e.pingedTasks;u.push(c),u.length===1&&d2(e)},blockedBoundary:r,blockedSegment:n,abortSet:o,legacyContext:i,context:l,treeContext:s};return o.add(c),c}function tc(e,t,r,n,o,i){return{status:0,id:-1,index:t,parentFlushed:!1,chunks:[],children:[],formatContext:n,boundary:r,lastPushedText:o,textEmbedded:i}}function Hl(e,t){if(e=e.onError(t),e!=null&&typeof e!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof e+'" instead');return e}function rc(e,t){var r=e.onShellError;r(t),r=e.onFatalError,r(t),e.destination!==null?(e.status=2,e.destination.destroy(t)):(e.status=1,e.fatalError=t)}function Sm(e,t,r,n,o){for(yn={},Dh=t,Vl=0,e=r(n,o);ec;)ec=!1,Vl=0,Gc+=1,We=null,e=r(n,o);return Nh(),e}function $m(e,t,r,n){var o=r.render(),i=n.childContextTypes;if(i!=null){var l=t.legacyContext;if(typeof r.getChildContext!="function")n=l;else{r=r.getChildContext();for(var s in r)if(!(s in i))throw Error(Ee(108,df(n)||"Unknown",s));n=vl({},l,r)}t.legacyContext=n,hr(e,t,o),t.legacyContext=l}else hr(e,t,o)}function bm(e,t){if(e&&e.defaultProps){t=vl({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function hf(e,t,r,n,o){if(typeof r=="function")if(r.prototype&&r.prototype.isReactComponent){o=mm(r,t.legacyContext);var i=r.contextType;i=new r(n,typeof i=="object"&&i!==null?i._currentValue2:o),ym(i,r,n,o),$m(e,t,i,r)}else{i=mm(r,t.legacyContext),o=Sm(e,t,r,n,i);var l=Vl!==0;if(typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0)ym(o,r,n,i),$m(e,t,o,r);else if(l){n=t.treeContext,t.treeContext=ff(n,1,0);try{hr(e,t,o)}finally{t.treeContext=n}}else hr(e,t,o)}else if(typeof r=="string"){switch(o=t.blockedSegment,i=Y6(o.chunks,r,n,e.responseState,o.formatContext),o.lastPushedText=!1,l=o.formatContext,o.formatContext=Q6(l,r,n),pf(e,t,i),o.formatContext=l,r){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:o.chunks.push("</",r,">")}o.lastPushedText=!1}else{switch(r){case l8:case i8:case Qv:case Jv:case Kv:hr(e,t,n.children);return;case t2:hr(e,t,n.children);return;case o8:throw Error(Ee(343));case e2:e:{r=t.blockedBoundary,o=t.blockedSegment,i=n.fallback,n=n.children,l=new Set;var s={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:l,errorDigest:null},c=tc(e,o.chunks.length,s,o.formatContext,!1,!1);o.children.push(c),o.lastPushedText=!1;var u=tc(e,0,null,o.formatContext,!1,!1);u.parentFlushed=!0,t.blockedBoundary=s,t.blockedSegment=u;try{if(pf(e,t,n),e.responseState.generateStaticMarkup||u.lastPushedText&&u.textEmbedded&&u.chunks.push("<!-- -->"),u.status=1,nc(s,u),s.pendingTasks===0)break e}catch(d){u.status=4,s.forceClientRender=!0,s.errorDigest=Hl(e,d)}finally{t.blockedBoundary=r,t.blockedSegment=o}t=Ph(e,i,r,c,l,t.legacyContext,t.context,t.treeContext),e.pingedTasks.push(t)}return}if(typeof r=="object"&&r!==null)switch(r.$$typeof){case Zv:if(n=Sm(e,t,r.render,n,o),Vl!==0){r=t.treeContext,t.treeContext=ff(r,1,0);try{hr(e,t,n)}finally{t.treeContext=r}}else hr(e,t,n);return;case r2:r=r.type,n=bm(r,n),hf(e,t,r,n,o);return;case Xv:if(o=n.children,r=r._context,n=n.value,i=r._currentValue2,r._currentValue2=n,l=vo,vo=n={parent:l,depth:l===null?0:l.depth+1,context:r,parentValue:i,value:n},t.context=n,hr(e,t,o),e=vo,e===null)throw Error(Ee(403));n=e.parentValue,e.context._currentValue2=n===a8?e.context._defaultValue:n,e=vo=e.parent,t.context=e;return;case Yv:n=n.children,n=n(r._currentValue2),hr(e,t,n);return;case Ah:o=r._init,r=o(r._payload),n=bm(r,n),hf(e,t,r,n,void 0);return}throw Error(Ee(130,r==null?r:typeof r,""))}}function hr(e,t,r){if(t.node=r,typeof r=="object"&&r!==null){switch(r.$$typeof){case n8:hf(e,t,r.type,r.props,r.ref);return;case qv:throw Error(Ee(257));case Ah:var n=r._init;r=n(r._payload),hr(e,t,r);return}if(uf(r)){Em(e,t,r);return}if(r===null||typeof r!="object"?n=null:(n=pm&&r[pm]||r["@@iterator"],n=typeof n=="function"?n:null),n&&(n=n.call(r))){if(r=n.next(),!r.done){var o=[];do o.push(r.value),r=n.next();while(!r.done);Em(e,t,o)}return}throw e=Object.prototype.toString.call(r),Error(Ee(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}typeof r=="string"?(n=t.blockedSegment,n.lastPushedText=hm(t.blockedSegment.chunks,r,e.responseState,n.lastPushedText)):typeof r=="number"&&(n=t.blockedSegment,n.lastPushedText=hm(t.blockedSegment.chunks,""+r,e.responseState,n.lastPushedText))}function Em(e,t,r){for(var n=r.length,o=0;o<n;o++){var i=t.treeContext;t.treeContext=ff(i,n,o);try{pf(e,t,r[o])}finally{t.treeContext=i}}}function pf(e,t,r){var n=t.blockedSegment.formatContext,o=t.legacyContext,i=t.context;try{return hr(e,t,r)}catch(c){if(Nh(),typeof c=="object"&&c!==null&&typeof c.then=="function"){r=c;var l=t.blockedSegment,s=tc(e,l.chunks.length,null,l.formatContext,l.lastPushedText,!0);l.children.push(s),l.lastPushedText=!1,e=Ph(e,t.node,t.blockedBoundary,s,t.abortSet,t.legacyContext,t.context,t.treeContext).ping,r.then(e,e),t.blockedSegment.formatContext=n,t.legacyContext=o,t.context=i,Zs(i)}else throw t.blockedSegment.formatContext=n,t.legacyContext=o,t.context=i,Zs(i),c}}function v8(e){var t=e.blockedBoundary;e=e.blockedSegment,e.status=3,u2(this,t,e)}function c2(e,t,r){var n=e.blockedBoundary;e.blockedSegment.status=3,n===null?(t.allPendingTasks--,t.status!==2&&(t.status=2,t.destination!==null&&t.destination.push(null))):(n.pendingTasks--,n.forceClientRender||(n.forceClientRender=!0,e=r===void 0?Error(Ee(432)):r,n.errorDigest=t.onError(e),n.parentFlushed&&t.clientRenderedBoundaries.push(n)),n.fallbackAbortableTasks.forEach(function(o){return c2(o,t,r)}),n.fallbackAbortableTasks.clear(),t.allPendingTasks--,t.allPendingTasks===0&&(n=t.onAllReady,n()))}function nc(e,t){if(t.chunks.length===0&&t.children.length===1&&t.children[0].boundary===null){var r=t.children[0];r.id=t.id,r.parentFlushed=!0,r.status===1&&nc(e,r)}else e.completedSegments.push(t)}function u2(e,t,r){if(t===null){if(r.parentFlushed){if(e.completedRootSegment!==null)throw Error(Ee(389));e.completedRootSegment=r}e.pendingRootTasks--,e.pendingRootTasks===0&&(e.onShellError=rl,t=e.onShellReady,t())}else t.pendingTasks--,t.forceClientRender||(t.pendingTasks===0?(r.parentFlushed&&r.status===1&&nc(t,r),t.parentFlushed&&e.completedBoundaries.push(t),t.fallbackAbortableTasks.forEach(v8,e),t.fallbackAbortableTasks.clear()):r.parentFlushed&&r.status===1&&(nc(t,r),t.completedSegments.length===1&&t.parentFlushed&&e.partialBoundaries.push(t)));e.allPendingTasks--,e.allPendingTasks===0&&(e=e.onAllReady,e())}function d2(e){if(e.status!==2){var t=vo,r=Gu.current;Gu.current=Cm;var n=ms;ms=e.responseState;try{var o=e.pingedTasks,i;for(i=0;i<o.length;i++){var l=o[i],s=e,c=l.blockedSegment;if(c.status===0){Zs(l.context);try{hr(s,l,l.node),s.responseState.generateStaticMarkup||c.lastPushedText&&c.textEmbedded&&c.chunks.push("<!-- -->"),l.abortSet.delete(l),c.status=1,u2(s,l.blockedBoundary,c)}catch(x){if(Nh(),typeof x=="object"&&x!==null&&typeof x.then=="function"){var u=l.ping;x.then(u,u)}else{l.abortSet.delete(l),c.status=4;var d=l.blockedBoundary,f=x,g=Hl(s,f);if(d===null?rc(s,f):(d.pendingTasks--,d.forceClientRender||(d.forceClientRender=!0,d.errorDigest=g,d.parentFlushed&&s.clientRenderedBoundaries.push(d))),s.allPendingTasks--,s.allPendingTasks===0){var C=s.onAllReady;C()}}}finally{}}}o.splice(0,i),e.destination!==null&&Mh(e,e.destination)}catch(x){Hl(e,x),rc(e,x)}finally{ms=n,Gu.current=r,r===Cm&&Zs(t)}}}function Ba(e,t,r){switch(r.parentFlushed=!0,r.status){case 0:var n=r.id=e.nextSegmentId++;return r.lastPushedText=!1,r.textEmbedded=!1,e=e.responseState,t.push('<template id="'),t.push(e.placeholderPrefix),e=n.toString(16),t.push(e),t.push('"></template>');case 1:r.status=2;var o=!0;n=r.chunks;var i=0;r=r.children;for(var l=0;l<r.length;l++){for(o=r[l];i<o.index;i++)t.push(n[i]);o=Bc(e,t,o)}for(;i<n.length-1;i++)t.push(n[i]);return i<n.length&&(o=t.push(n[i])),o;default:throw Error(Ee(390))}}function Bc(e,t,r){var n=r.boundary;if(n===null)return Ba(e,t,r);if(n.parentFlushed=!0,n.forceClientRender)return e.responseState.generateStaticMarkup||(n=n.errorDigest,t.push("<!--$!-->"),t.push("<template"),n&&(t.push(' data-dgst="'),n=Ht(n),t.push(n),t.push('"')),t.push("></template>")),Ba(e,t,r),e=e.responseState.generateStaticMarkup?!0:t.push("<!--/$-->"),e;if(0<n.pendingTasks){n.rootSegmentID=e.nextSegmentId++,0<n.completedSegments.length&&e.partialBoundaries.push(n);var o=e.responseState,i=o.nextSuspenseID++;return o=o.boundaryPrefix+i.toString(16),n=n.id=o,fm(t,e.responseState,n),Ba(e,t,r),t.push("<!--/$-->")}if(n.byteSize>e.progressiveChunkSize)return n.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(n),fm(t,e.responseState,n.id),Ba(e,t,r),t.push("<!--/$-->");if(e.responseState.generateStaticMarkup||t.push("<!--$-->"),r=n.completedSegments,r.length!==1)throw Error(Ee(391));return Bc(e,t,r[0]),e=e.responseState.generateStaticMarkup?!0:t.push("<!--/$-->"),e}function jm(e,t,r){return Z6(t,e.responseState,r.formatContext,r.id),Bc(e,t,r),e8(t,r.formatContext)}function km(e,t,r){for(var n=r.completedSegments,o=0;o<n.length;o++)f2(e,t,r,n[o]);if(n.length=0,e=e.responseState,n=r.id,r=r.rootSegmentID,t.push(e.startInlineScript),e.sentCompleteBoundaryFunction?t.push('$RC("'):(e.sentCompleteBoundaryFunction=!0,t.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')),n===null)throw Error(Ee(395));return r=r.toString(16),t.push(n),t.push('","'),t.push(e.segmentPrefix),t.push(r),t.push('")<\/script>')}function f2(e,t,r,n){if(n.status===2)return!0;var o=n.id;if(o===-1){if((n.id=r.rootSegmentID)===-1)throw Error(Ee(392));return jm(e,t,n)}return jm(e,t,n),e=e.responseState,t.push(e.startInlineScript),e.sentCompleteSegmentFunction?t.push('$RS("'):(e.sentCompleteSegmentFunction=!0,t.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')),t.push(e.segmentPrefix),o=o.toString(16),t.push(o),t.push('","'),t.push(e.placeholderPrefix),t.push(o),t.push('")<\/script>')}function Mh(e,t){try{var r=e.completedRootSegment;if(r!==null&&e.pendingRootTasks===0){Bc(e,t,r),e.completedRootSegment=null;var n=e.responseState.bootstrapChunks;for(r=0;r<n.length-1;r++)t.push(n[r]);r<n.length&&t.push(n[r])}var o=e.clientRenderedBoundaries,i;for(i=0;i<o.length;i++){var l=o[i];n=t;var s=e.responseState,c=l.id,u=l.errorDigest,d=l.errorMessage,f=l.errorComponentStack;if(n.push(s.startInlineScript),s.sentClientRenderFunction?n.push('$RX("'):(s.sentClientRenderFunction=!0,n.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')),c===null)throw Error(Ee(395));if(n.push(c),n.push('"'),u||d||f){n.push(",");var g=Fu(u||"");n.push(g)}if(d||f){n.push(",");var C=Fu(d||"");n.push(C)}if(f){n.push(",");var x=Fu(f);n.push(x)}if(!n.push(")<\/script>")){e.destination=null,i++,o.splice(0,i);return}}o.splice(0,i);var w=e.completedBoundaries;for(i=0;i<w.length;i++)if(!km(e,t,w[i])){e.destination=null,i++,w.splice(0,i);return}w.splice(0,i);var v=e.partialBoundaries;for(i=0;i<v.length;i++){var y=v[i];e:{o=e,l=t;var h=y.completedSegments;for(s=0;s<h.length;s++)if(!f2(o,l,y,h[s])){s++,h.splice(0,s);var p=!1;break e}h.splice(0,s),p=!0}if(!p){e.destination=null,i++,v.splice(0,i);return}}v.splice(0,i);var $=e.completedBoundaries;for(i=0;i<$.length;i++)if(!km(e,t,$[i])){e.destination=null,i++,$.splice(0,i);return}$.splice(0,i)}finally{e.allPendingTasks===0&&e.pingedTasks.length===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&t.push(null)}}function x8(e,t){try{var r=e.abortableTasks;r.forEach(function(n){return c2(n,e,t)}),r.clear(),e.destination!==null&&Mh(e,e.destination)}catch(n){Hl(e,n),rc(e,n)}}function w8(){}function h2(e,t,r,n){var o=!1,i=null,l="",s={push:function(u){return u!==null&&(l+=u),!0},destroy:function(u){o=!0,i=u}},c=!1;if(e=y8(e,r8(r,t?t.identifierPrefix:void 0),{insertionMode:1,selectedValue:null},1/0,w8,void 0,function(){c=!0}),d2(e),x8(e,n),e.status===1)e.status=2,s.destroy(e.fatalError);else if(e.status!==2&&e.destination===null){e.destination=s;try{Mh(e,s)}catch(u){Hl(e,u),rc(e,u)}}if(o)throw i;if(!c)throw Error(Ee(426));return l}Ti.renderToNodeStream=function(){throw Error(Ee(207))};Ti.renderToStaticMarkup=function(e,t){return h2(e,t,!0,'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};Ti.renderToStaticNodeStream=function(){throw Error(Ee(208))};Ti.renderToString=function(e,t){return h2(e,t,!1,'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')};Ti.version="18.2.0";var Lh={};/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p2=j;function Oe(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pr=null,mr=0;function ie(e,t){if(t.length!==0)if(512<t.length)0<mr&&(e.enqueue(new Uint8Array(pr.buffer,0,mr)),pr=new Uint8Array(512),mr=0),e.enqueue(t);else{var r=pr.length-mr;r<t.length&&(r===0?e.enqueue(pr):(pr.set(t.subarray(0,r),mr),e.enqueue(pr),t=t.subarray(r)),pr=new Uint8Array(512),mr=0),pr.set(t,mr),mr+=t.length}}function tt(e,t){return ie(e,t),!0}function Om(e){pr&&0<mr&&(e.enqueue(new Uint8Array(pr.buffer,0,mr)),pr=null,mr=0)}var m2=new TextEncoder;function Ie(e){return m2.encode(e)}function q(e){return m2.encode(e)}function g2(e,t){typeof e.error=="function"?e.error(t):e.close()}var Yt=Object.prototype.hasOwnProperty,C8=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_m={},Im={};function y2(e){return Yt.call(Im,e)?!0:Yt.call(_m,e)?!1:C8.test(e)?Im[e]=!0:(_m[e]=!0,!1)}function Jt(e,t,r,n,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Pt[e]=new Jt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Pt[t]=new Jt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Pt[e]=new Jt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Pt[e]=new Jt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Pt[e]=new Jt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Pt[e]=new Jt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Pt[e]=new Jt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Pt[e]=new Jt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Pt[e]=new Jt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fh=/[\-:]([a-z])/g;function Gh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Fh,Gh);Pt[t]=new Jt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Fh,Gh);Pt[t]=new Jt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Fh,Gh);Pt[t]=new Jt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Pt[e]=new Jt(e,1,!1,e.toLowerCase(),null,!1,!1)});Pt.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Pt[e]=new Jt(e,1,!1,e.toLowerCase(),null,!0,!0)});var gs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},S8=["Webkit","ms","Moz","O"];Object.keys(gs).forEach(function(e){S8.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),gs[t]=gs[e]})});var $8=/["'&<>]/;function At(e){if(typeof e=="boolean"||typeof e=="number")return""+e;e=""+e;var t=$8.exec(e);if(t){var r="",n,o=0;for(n=t.index;n<e.length;n++){switch(e.charCodeAt(n)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}o!==n&&(r+=e.substring(o,n)),o=n+1,r+=t}e=o!==n?r+e.substring(o,n):r}return e}var b8=/([A-Z])/g,E8=/^ms-/,mf=Array.isArray,j8=q("<script>"),k8=q("<\/script>"),O8=q('<script src="'),_8=q('<script type="module" src="'),Rm=q('" async=""><\/script>'),I8=/(<\/|<)(s)(cript)/gi;function R8(e,t,r,n){return""+t+(r==="s"?"\\u0073":"\\u0053")+n}function T8(e,t,r,n,o){e=e===void 0?"":e,t=t===void 0?j8:q('<script nonce="'+At(t)+'">');var i=[];if(r!==void 0&&i.push(t,Ie((""+r).replace(I8,R8)),k8),n!==void 0)for(r=0;r<n.length;r++)i.push(O8,Ie(At(n[r])),Rm);if(o!==void 0)for(n=0;n<o.length;n++)i.push(_8,Ie(At(o[n])),Rm);return{bootstrapChunks:i,startInlineScript:t,placeholderPrefix:q(e+"P:"),segmentPrefix:q(e+"S:"),boundaryPrefix:e+"B:",idPrefix:e,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1}}function Xr(e,t){return{insertionMode:e,selectedValue:t}}function A8(e){return Xr(e==="http://www.w3.org/2000/svg"?2:e==="http://www.w3.org/1998/Math/MathML"?3:0,null)}function D8(e,t,r){switch(t){case"select":return Xr(1,r.value!=null?r.value:r.defaultValue);case"svg":return Xr(2,null);case"math":return Xr(3,null);case"foreignObject":return Xr(1,null);case"table":return Xr(4,null);case"thead":case"tbody":case"tfoot":return Xr(5,null);case"colgroup":return Xr(7,null);case"tr":return Xr(6,null)}return 4<=e.insertionMode||e.insertionMode===0?Xr(1,null):e}var Bh=q("<!-- -->");function Tm(e,t,r,n){return t===""?n:(n&&e.push(Bh),e.push(Ie(At(t))),!0)}var Am=new Map,z8=q(' style="'),Dm=q(":"),N8=q(";");function v2(e,t,r){if(typeof r!="object")throw Error(Oe(62));t=!0;for(var n in r)if(Yt.call(r,n)){var o=r[n];if(o!=null&&typeof o!="boolean"&&o!==""){if(n.indexOf("--")===0){var i=Ie(At(n));o=Ie(At((""+o).trim()))}else{i=n;var l=Am.get(i);l!==void 0||(l=q(At(i.replace(b8,"-$1").toLowerCase().replace(E8,"-ms-"))),Am.set(i,l)),i=l,o=typeof o=="number"?o===0||Yt.call(gs,n)?Ie(""+o):Ie(o+"px"):Ie(At((""+o).trim()))}t?(t=!1,e.push(z8,i,Dm,o)):e.push(N8,i,Dm,o)}}t||e.push(uo)}var _n=q(" "),Uo=q('="'),uo=q('"'),zm=q('=""');function ur(e,t,r,n){switch(r){case"style":v2(e,t,n);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N"){if(t=Pt.hasOwnProperty(r)?Pt[r]:null,t!==null){switch(typeof n){case"function":case"symbol":return;case"boolean":if(!t.acceptsBooleans)return}switch(r=Ie(t.attributeName),t.type){case 3:n&&e.push(_n,r,zm);break;case 4:n===!0?e.push(_n,r,zm):n!==!1&&e.push(_n,r,Uo,Ie(At(n)),uo);break;case 5:isNaN(n)||e.push(_n,r,Uo,Ie(At(n)),uo);break;case 6:!isNaN(n)&&1<=n&&e.push(_n,r,Uo,Ie(At(n)),uo);break;default:t.sanitizeURL&&(n=""+n),e.push(_n,r,Uo,Ie(At(n)),uo)}}else if(y2(r)){switch(typeof n){case"function":case"symbol":return;case"boolean":if(t=r.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-")return}e.push(_n,Ie(r),Uo,Ie(At(n)),uo)}}}var In=q(">"),Nm=q("/>");function ys(e,t,r){if(t!=null){if(r!=null)throw Error(Oe(60));if(typeof t!="object"||!("__html"in t))throw Error(Oe(61));t=t.__html,t!=null&&e.push(Ie(""+t))}}function P8(e){var t="";return p2.Children.forEach(e,function(r){r!=null&&(t+=r)}),t}var Bu=q(' selected=""');function Vu(e,t,r,n){e.push(Yr(r));var o=r=null,i;for(i in t)if(Yt.call(t,i)){var l=t[i];if(l!=null)switch(i){case"children":r=l;break;case"dangerouslySetInnerHTML":o=l;break;default:ur(e,n,i,l)}}return e.push(In),ys(e,o,r),typeof r=="string"?(e.push(Ie(At(r))),null):r}var Hu=q(`
`),M8=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Pm=new Map;function Yr(e){var t=Pm.get(e);if(t===void 0){if(!M8.test(e))throw Error(Oe(65,e));t=q("<"+e),Pm.set(e,t)}return t}var L8=q("<!DOCTYPE html>");function F8(e,t,r,n,o){switch(t){case"select":e.push(Yr("select"));var i=null,l=null;for(d in r)if(Yt.call(r,d)){var s=r[d];if(s!=null)switch(d){case"children":i=s;break;case"dangerouslySetInnerHTML":l=s;break;case"defaultValue":case"value":break;default:ur(e,n,d,s)}}return e.push(In),ys(e,l,i),i;case"option":l=o.selectedValue,e.push(Yr("option"));var c=s=null,u=null,d=null;for(i in r)if(Yt.call(r,i)){var f=r[i];if(f!=null)switch(i){case"children":s=f;break;case"selected":u=f;break;case"dangerouslySetInnerHTML":d=f;break;case"value":c=f;default:ur(e,n,i,f)}}if(l!=null)if(r=c!==null?""+c:P8(s),mf(l)){for(n=0;n<l.length;n++)if(""+l[n]===r){e.push(Bu);break}}else""+l===r&&e.push(Bu);else u&&e.push(Bu);return e.push(In),ys(e,d,s),s;case"textarea":e.push(Yr("textarea")),d=l=i=null;for(s in r)if(Yt.call(r,s)&&(c=r[s],c!=null))switch(s){case"children":d=c;break;case"value":i=c;break;case"defaultValue":l=c;break;case"dangerouslySetInnerHTML":throw Error(Oe(91));default:ur(e,n,s,c)}if(i===null&&l!==null&&(i=l),e.push(In),d!=null){if(i!=null)throw Error(Oe(92));if(mf(d)&&1<d.length)throw Error(Oe(93));i=""+d}return typeof i=="string"&&i[0]===`
`&&e.push(Hu),i!==null&&e.push(Ie(At(""+i))),null;case"input":e.push(Yr("input")),c=d=s=i=null;for(l in r)if(Yt.call(r,l)&&(u=r[l],u!=null))switch(l){case"children":case"dangerouslySetInnerHTML":throw Error(Oe(399,"input"));case"defaultChecked":c=u;break;case"defaultValue":s=u;break;case"checked":d=u;break;case"value":i=u;break;default:ur(e,n,l,u)}return d!==null?ur(e,n,"checked",d):c!==null&&ur(e,n,"checked",c),i!==null?ur(e,n,"value",i):s!==null&&ur(e,n,"value",s),e.push(Nm),null;case"menuitem":e.push(Yr("menuitem"));for(var g in r)if(Yt.call(r,g)&&(i=r[g],i!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(Oe(400));default:ur(e,n,g,i)}return e.push(In),null;case"title":e.push(Yr("title")),i=null;for(f in r)if(Yt.call(r,f)&&(l=r[f],l!=null))switch(f){case"children":i=l;break;case"dangerouslySetInnerHTML":throw Error(Oe(434));default:ur(e,n,f,l)}return e.push(In),i;case"listing":case"pre":e.push(Yr(t)),l=i=null;for(c in r)if(Yt.call(r,c)&&(s=r[c],s!=null))switch(c){case"children":i=s;break;case"dangerouslySetInnerHTML":l=s;break;default:ur(e,n,c,s)}if(e.push(In),l!=null){if(i!=null)throw Error(Oe(60));if(typeof l!="object"||!("__html"in l))throw Error(Oe(61));r=l.__html,r!=null&&(typeof r=="string"&&0<r.length&&r[0]===`
`?e.push(Hu,Ie(r)):e.push(Ie(""+r)))}return typeof i=="string"&&i[0]===`
`&&e.push(Hu),i;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":e.push(Yr(t));for(var C in r)if(Yt.call(r,C)&&(i=r[C],i!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(Oe(399,t));default:ur(e,n,C,i)}return e.push(Nm),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return Vu(e,r,t,n);case"html":return o.insertionMode===0&&e.push(L8),Vu(e,r,t,n);default:if(t.indexOf("-")===-1&&typeof r.is!="string")return Vu(e,r,t,n);e.push(Yr(t)),l=i=null;for(u in r)if(Yt.call(r,u)&&(s=r[u],s!=null))switch(u){case"children":i=s;break;case"dangerouslySetInnerHTML":l=s;break;case"style":v2(e,n,s);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:y2(u)&&typeof s!="function"&&typeof s!="symbol"&&e.push(_n,Ie(u),Uo,Ie(At(s)),uo)}return e.push(In),ys(e,l,i),i}}var G8=q("</"),B8=q(">"),V8=q('<template id="'),H8=q('"></template>'),U8=q("<!--$-->"),W8=q('<!--$?--><template id="'),q8=q('"></template>'),K8=q("<!--$!-->"),Q8=q("<!--/$-->"),J8=q("<template"),X8=q('"'),Y8=q(' data-dgst="');q(' data-msg="');q(' data-stck="');var Z8=q("></template>");function Mm(e,t,r){if(ie(e,W8),r===null)throw Error(Oe(395));return ie(e,r),tt(e,q8)}var e$=q('<div hidden id="'),t$=q('">'),r$=q("</div>"),n$=q('<svg aria-hidden="true" style="display:none" id="'),o$=q('">'),i$=q("</svg>"),l$=q('<math aria-hidden="true" style="display:none" id="'),a$=q('">'),s$=q("</math>"),c$=q('<table hidden id="'),u$=q('">'),d$=q("</table>"),f$=q('<table hidden><tbody id="'),h$=q('">'),p$=q("</tbody></table>"),m$=q('<table hidden><tr id="'),g$=q('">'),y$=q("</tr></table>"),v$=q('<table hidden><colgroup id="'),x$=q('">'),w$=q("</colgroup></table>");function C$(e,t,r,n){switch(r.insertionMode){case 0:case 1:return ie(e,e$),ie(e,t.segmentPrefix),ie(e,Ie(n.toString(16))),tt(e,t$);case 2:return ie(e,n$),ie(e,t.segmentPrefix),ie(e,Ie(n.toString(16))),tt(e,o$);case 3:return ie(e,l$),ie(e,t.segmentPrefix),ie(e,Ie(n.toString(16))),tt(e,a$);case 4:return ie(e,c$),ie(e,t.segmentPrefix),ie(e,Ie(n.toString(16))),tt(e,u$);case 5:return ie(e,f$),ie(e,t.segmentPrefix),ie(e,Ie(n.toString(16))),tt(e,h$);case 6:return ie(e,m$),ie(e,t.segmentPrefix),ie(e,Ie(n.toString(16))),tt(e,g$);case 7:return ie(e,v$),ie(e,t.segmentPrefix),ie(e,Ie(n.toString(16))),tt(e,x$);default:throw Error(Oe(397))}}function S$(e,t){switch(t.insertionMode){case 0:case 1:return tt(e,r$);case 2:return tt(e,i$);case 3:return tt(e,s$);case 4:return tt(e,d$);case 5:return tt(e,p$);case 6:return tt(e,y$);case 7:return tt(e,w$);default:throw Error(Oe(397))}}var $$=q('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'),b$=q('$RS("'),E$=q('","'),j$=q('")<\/script>'),k$=q('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'),O$=q('$RC("'),_$=q('","'),I$=q('")<\/script>'),R$=q('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'),T$=q('$RX("'),A$=q('"'),D$=q(")<\/script>"),Uu=q(","),z$=/[<\u2028\u2029]/g;function Wu(e){return JSON.stringify(e).replace(z$,function(t){switch(t){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}var xl=Object.assign,N$=Symbol.for("react.element"),x2=Symbol.for("react.portal"),w2=Symbol.for("react.fragment"),C2=Symbol.for("react.strict_mode"),S2=Symbol.for("react.profiler"),$2=Symbol.for("react.provider"),b2=Symbol.for("react.context"),E2=Symbol.for("react.forward_ref"),j2=Symbol.for("react.suspense"),k2=Symbol.for("react.suspense_list"),O2=Symbol.for("react.memo"),Vh=Symbol.for("react.lazy"),P$=Symbol.for("react.scope"),M$=Symbol.for("react.debug_trace_mode"),L$=Symbol.for("react.legacy_hidden"),F$=Symbol.for("react.default_value"),Lm=Symbol.iterator;function gf(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w2:return"Fragment";case x2:return"Portal";case S2:return"Profiler";case C2:return"StrictMode";case j2:return"Suspense";case k2:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case b2:return(e.displayName||"Context")+".Consumer";case $2:return(e._context.displayName||"Context")+".Provider";case E2:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O2:return t=e.displayName||null,t!==null?t:gf(e.type)||"Memo";case Vh:t=e._payload,e=e._init;try{return gf(e(t))}catch{}}return null}var _2={};function Fm(e,t){if(e=e.contextTypes,!e)return _2;var r={},n;for(n in e)r[n]=t[n];return r}var xo=null;function Vc(e,t){if(e!==t){e.context._currentValue=e.parentValue,e=e.parent;var r=t.parent;if(e===null){if(r!==null)throw Error(Oe(401))}else{if(r===null)throw Error(Oe(401));Vc(e,r)}t.context._currentValue=t.value}}function I2(e){e.context._currentValue=e.parentValue,e=e.parent,e!==null&&I2(e)}function R2(e){var t=e.parent;t!==null&&R2(t),e.context._currentValue=e.value}function T2(e,t){if(e.context._currentValue=e.parentValue,e=e.parent,e===null)throw Error(Oe(402));e.depth===t.depth?Vc(e,t):T2(e,t)}function A2(e,t){var r=t.parent;if(r===null)throw Error(Oe(402));e.depth===r.depth?Vc(e,r):A2(e,r),t.context._currentValue=t.value}function oc(e){var t=xo;t!==e&&(t===null?R2(e):e===null?I2(t):t.depth===e.depth?Vc(t,e):t.depth>e.depth?T2(t,e):A2(t,e),xo=e)}var Gm={isMounted:function(){return!1},enqueueSetState:function(e,t){e=e._reactInternals,e.queue!==null&&e.queue.push(t)},enqueueReplaceState:function(e,t){e=e._reactInternals,e.replace=!0,e.queue=[t]},enqueueForceUpdate:function(){}};function Bm(e,t,r,n){var o=e.state!==void 0?e.state:null;e.updater=Gm,e.props=r,e.state=o;var i={queue:[],replace:!1};e._reactInternals=i;var l=t.contextType;if(e.context=typeof l=="object"&&l!==null?l._currentValue:n,l=t.getDerivedStateFromProps,typeof l=="function"&&(l=l(r,o),o=l==null?o:xl({},o,l),e.state=o),typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function"&&(typeof e.UNSAFE_componentWillMount=="function"||typeof e.componentWillMount=="function"))if(t=e.state,typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount(),t!==e.state&&Gm.enqueueReplaceState(e,e.state,null),i.queue!==null&&0<i.queue.length)if(t=i.queue,l=i.replace,i.queue=null,i.replace=!1,l&&t.length===1)e.state=t[0];else{for(i=l?t[0]:e.state,o=!0,l=l?1:0;l<t.length;l++){var s=t[l];s=typeof s=="function"?s.call(e,i,r,n):s,s!=null&&(o?(o=!1,i=xl({},i,s)):xl(i,s))}e.state=i}else i.queue=null}var G$={id:1,overflow:""};function yf(e,t,r){var n=e.id;e=e.overflow;var o=32-vs(n)-1;n&=~(1<<o),r+=1;var i=32-vs(t)+o;if(30<i){var l=o-o%5;return i=(n&(1<<l)-1).toString(32),n>>=l,o-=l,{id:1<<32-vs(t)+o|r<<o|n,overflow:i+e}}return{id:1<<i|r<<o|n,overflow:e}}var vs=Math.clz32?Math.clz32:H$,B$=Math.log,V$=Math.LN2;function H$(e){return e>>>=0,e===0?32:31-(B$(e)/V$|0)|0}function U$(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var W$=typeof Object.is=="function"?Object.is:U$,vn=null,Hh=null,xs=null,qe=null,nl=!1,ic=!1,Ul=0,Fn=null,Hc=0;function fo(){if(vn===null)throw Error(Oe(321));return vn}function Vm(){if(0<Hc)throw Error(Oe(312));return{memoizedState:null,queue:null,next:null}}function Uh(){return qe===null?xs===null?(nl=!1,xs=qe=Vm()):(nl=!0,qe=xs):qe.next===null?(nl=!1,qe=qe.next=Vm()):(nl=!0,qe=qe.next),qe}function Wh(){Hh=vn=null,ic=!1,xs=null,Hc=0,qe=Fn=null}function D2(e,t){return typeof t=="function"?t(e):t}function Hm(e,t,r){if(vn=fo(),qe=Uh(),nl){var n=qe.queue;if(t=n.dispatch,Fn!==null&&(r=Fn.get(n),r!==void 0)){Fn.delete(n),n=qe.memoizedState;do n=e(n,r.action),r=r.next;while(r!==null);return qe.memoizedState=n,[n,t]}return[qe.memoizedState,t]}return e=e===D2?typeof t=="function"?t():t:r!==void 0?r(t):t,qe.memoizedState=e,e=qe.queue={last:null,dispatch:null},e=e.dispatch=q$.bind(null,vn,e),[qe.memoizedState,e]}function Um(e,t){if(vn=fo(),qe=Uh(),t=t===void 0?null:t,qe!==null){var r=qe.memoizedState;if(r!==null&&t!==null){var n=r[1];e:if(n===null)n=!1;else{for(var o=0;o<n.length&&o<t.length;o++)if(!W$(t[o],n[o])){n=!1;break e}n=!0}if(n)return r[0]}}return e=e(),qe.memoizedState=[e,t],e}function q$(e,t,r){if(25<=Hc)throw Error(Oe(301));if(e===vn)if(ic=!0,e={action:r,next:null},Fn===null&&(Fn=new Map),r=Fn.get(t),r===void 0)Fn.set(t,e);else{for(t=r;t.next!==null;)t=t.next;t.next=e}}function K$(){throw Error(Oe(394))}function Va(){}var Wm={readContext:function(e){return e._currentValue},useContext:function(e){return fo(),e._currentValue},useMemo:Um,useReducer:Hm,useRef:function(e){vn=fo(),qe=Uh();var t=qe.memoizedState;return t===null?(e={current:e},qe.memoizedState=e):t},useState:function(e){return Hm(D2,e)},useInsertionEffect:Va,useLayoutEffect:function(){},useCallback:function(e,t){return Um(function(){return e},t)},useImperativeHandle:Va,useEffect:Va,useDebugValue:Va,useDeferredValue:function(e){return fo(),e},useTransition:function(){return fo(),[!1,K$]},useId:function(){var e=Hh.treeContext,t=e.overflow;e=e.id,e=(e&~(1<<32-vs(e)-1)).toString(32)+t;var r=ws;if(r===null)throw Error(Oe(404));return t=Ul++,e=":"+r.idPrefix+"R"+e,0<t&&(e+="H"+t.toString(32)),e+":"},useMutableSource:function(e,t){return fo(),t(e._source)},useSyncExternalStore:function(e,t,r){if(r===void 0)throw Error(Oe(407));return r()}},ws=null,qu=p2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function Q$(e){return console.error(e),null}function ol(){}function J$(e,t,r,n,o,i,l,s,c){var u=[],d=new Set;return t={destination:null,responseState:t,progressiveChunkSize:n===void 0?12800:n,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:d,pingedTasks:u,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:o===void 0?Q$:o,onAllReady:i===void 0?ol:i,onShellReady:l===void 0?ol:l,onShellError:s===void 0?ol:s,onFatalError:c===void 0?ol:c},r=lc(t,0,null,r,!1,!1),r.parentFlushed=!0,e=qh(t,e,null,r,d,_2,null,G$),u.push(e),t}function qh(e,t,r,n,o,i,l,s){e.allPendingTasks++,r===null?e.pendingRootTasks++:r.pendingTasks++;var c={node:t,ping:function(){var u=e.pingedTasks;u.push(c),u.length===1&&P2(e)},blockedBoundary:r,blockedSegment:n,abortSet:o,legacyContext:i,context:l,treeContext:s};return o.add(c),c}function lc(e,t,r,n,o,i){return{status:0,id:-1,index:t,parentFlushed:!1,chunks:[],children:[],formatContext:n,boundary:r,lastPushedText:o,textEmbedded:i}}function Wl(e,t){if(e=e.onError(t),e!=null&&typeof e!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof e+'" instead');return e}function ac(e,t){var r=e.onShellError;r(t),r=e.onFatalError,r(t),e.destination!==null?(e.status=2,g2(e.destination,t)):(e.status=1,e.fatalError=t)}function qm(e,t,r,n,o){for(vn={},Hh=t,Ul=0,e=r(n,o);ic;)ic=!1,Ul=0,Hc+=1,qe=null,e=r(n,o);return Wh(),e}function Km(e,t,r,n){var o=r.render(),i=n.childContextTypes;if(i!=null){var l=t.legacyContext;if(typeof r.getChildContext!="function")n=l;else{r=r.getChildContext();for(var s in r)if(!(s in i))throw Error(Oe(108,gf(n)||"Unknown",s));n=xl({},l,r)}t.legacyContext=n,gr(e,t,o),t.legacyContext=l}else gr(e,t,o)}function Qm(e,t){if(e&&e.defaultProps){t=xl({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function vf(e,t,r,n,o){if(typeof r=="function")if(r.prototype&&r.prototype.isReactComponent){o=Fm(r,t.legacyContext);var i=r.contextType;i=new r(n,typeof i=="object"&&i!==null?i._currentValue:o),Bm(i,r,n,o),Km(e,t,i,r)}else{i=Fm(r,t.legacyContext),o=qm(e,t,r,n,i);var l=Ul!==0;if(typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0)Bm(o,r,n,i),Km(e,t,o,r);else if(l){n=t.treeContext,t.treeContext=yf(n,1,0);try{gr(e,t,o)}finally{t.treeContext=n}}else gr(e,t,o)}else if(typeof r=="string"){switch(o=t.blockedSegment,i=F8(o.chunks,r,n,e.responseState,o.formatContext),o.lastPushedText=!1,l=o.formatContext,o.formatContext=D8(l,r,n),xf(e,t,i),o.formatContext=l,r){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:o.chunks.push(G8,Ie(r),B8)}o.lastPushedText=!1}else{switch(r){case L$:case M$:case C2:case S2:case w2:gr(e,t,n.children);return;case k2:gr(e,t,n.children);return;case P$:throw Error(Oe(343));case j2:e:{r=t.blockedBoundary,o=t.blockedSegment,i=n.fallback,n=n.children,l=new Set;var s={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:l,errorDigest:null},c=lc(e,o.chunks.length,s,o.formatContext,!1,!1);o.children.push(c),o.lastPushedText=!1;var u=lc(e,0,null,o.formatContext,!1,!1);u.parentFlushed=!0,t.blockedBoundary=s,t.blockedSegment=u;try{if(xf(e,t,n),u.lastPushedText&&u.textEmbedded&&u.chunks.push(Bh),u.status=1,sc(s,u),s.pendingTasks===0)break e}catch(d){u.status=4,s.forceClientRender=!0,s.errorDigest=Wl(e,d)}finally{t.blockedBoundary=r,t.blockedSegment=o}t=qh(e,i,r,c,l,t.legacyContext,t.context,t.treeContext),e.pingedTasks.push(t)}return}if(typeof r=="object"&&r!==null)switch(r.$$typeof){case E2:if(n=qm(e,t,r.render,n,o),Ul!==0){r=t.treeContext,t.treeContext=yf(r,1,0);try{gr(e,t,n)}finally{t.treeContext=r}}else gr(e,t,n);return;case O2:r=r.type,n=Qm(r,n),vf(e,t,r,n,o);return;case $2:if(o=n.children,r=r._context,n=n.value,i=r._currentValue,r._currentValue=n,l=xo,xo=n={parent:l,depth:l===null?0:l.depth+1,context:r,parentValue:i,value:n},t.context=n,gr(e,t,o),e=xo,e===null)throw Error(Oe(403));n=e.parentValue,e.context._currentValue=n===F$?e.context._defaultValue:n,e=xo=e.parent,t.context=e;return;case b2:n=n.children,n=n(r._currentValue),gr(e,t,n);return;case Vh:o=r._init,r=o(r._payload),n=Qm(r,n),vf(e,t,r,n,void 0);return}throw Error(Oe(130,r==null?r:typeof r,""))}}function gr(e,t,r){if(t.node=r,typeof r=="object"&&r!==null){switch(r.$$typeof){case N$:vf(e,t,r.type,r.props,r.ref);return;case x2:throw Error(Oe(257));case Vh:var n=r._init;r=n(r._payload),gr(e,t,r);return}if(mf(r)){Jm(e,t,r);return}if(r===null||typeof r!="object"?n=null:(n=Lm&&r[Lm]||r["@@iterator"],n=typeof n=="function"?n:null),n&&(n=n.call(r))){if(r=n.next(),!r.done){var o=[];do o.push(r.value),r=n.next();while(!r.done);Jm(e,t,o)}return}throw e=Object.prototype.toString.call(r),Error(Oe(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}typeof r=="string"?(n=t.blockedSegment,n.lastPushedText=Tm(t.blockedSegment.chunks,r,e.responseState,n.lastPushedText)):typeof r=="number"&&(n=t.blockedSegment,n.lastPushedText=Tm(t.blockedSegment.chunks,""+r,e.responseState,n.lastPushedText))}function Jm(e,t,r){for(var n=r.length,o=0;o<n;o++){var i=t.treeContext;t.treeContext=yf(i,n,o);try{xf(e,t,r[o])}finally{t.treeContext=i}}}function xf(e,t,r){var n=t.blockedSegment.formatContext,o=t.legacyContext,i=t.context;try{return gr(e,t,r)}catch(c){if(Wh(),typeof c=="object"&&c!==null&&typeof c.then=="function"){r=c;var l=t.blockedSegment,s=lc(e,l.chunks.length,null,l.formatContext,l.lastPushedText,!0);l.children.push(s),l.lastPushedText=!1,e=qh(e,t.node,t.blockedBoundary,s,t.abortSet,t.legacyContext,t.context,t.treeContext).ping,r.then(e,e),t.blockedSegment.formatContext=n,t.legacyContext=o,t.context=i,oc(i)}else throw t.blockedSegment.formatContext=n,t.legacyContext=o,t.context=i,oc(i),c}}function X$(e){var t=e.blockedBoundary;e=e.blockedSegment,e.status=3,N2(this,t,e)}function z2(e,t,r){var n=e.blockedBoundary;e.blockedSegment.status=3,n===null?(t.allPendingTasks--,t.status!==2&&(t.status=2,t.destination!==null&&t.destination.close())):(n.pendingTasks--,n.forceClientRender||(n.forceClientRender=!0,e=r===void 0?Error(Oe(432)):r,n.errorDigest=t.onError(e),n.parentFlushed&&t.clientRenderedBoundaries.push(n)),n.fallbackAbortableTasks.forEach(function(o){return z2(o,t,r)}),n.fallbackAbortableTasks.clear(),t.allPendingTasks--,t.allPendingTasks===0&&(n=t.onAllReady,n()))}function sc(e,t){if(t.chunks.length===0&&t.children.length===1&&t.children[0].boundary===null){var r=t.children[0];r.id=t.id,r.parentFlushed=!0,r.status===1&&sc(e,r)}else e.completedSegments.push(t)}function N2(e,t,r){if(t===null){if(r.parentFlushed){if(e.completedRootSegment!==null)throw Error(Oe(389));e.completedRootSegment=r}e.pendingRootTasks--,e.pendingRootTasks===0&&(e.onShellError=ol,t=e.onShellReady,t())}else t.pendingTasks--,t.forceClientRender||(t.pendingTasks===0?(r.parentFlushed&&r.status===1&&sc(t,r),t.parentFlushed&&e.completedBoundaries.push(t),t.fallbackAbortableTasks.forEach(X$,e),t.fallbackAbortableTasks.clear()):r.parentFlushed&&r.status===1&&(sc(t,r),t.completedSegments.length===1&&t.parentFlushed&&e.partialBoundaries.push(t)));e.allPendingTasks--,e.allPendingTasks===0&&(e=e.onAllReady,e())}function P2(e){if(e.status!==2){var t=xo,r=qu.current;qu.current=Wm;var n=ws;ws=e.responseState;try{var o=e.pingedTasks,i;for(i=0;i<o.length;i++){var l=o[i],s=e,c=l.blockedSegment;if(c.status===0){oc(l.context);try{gr(s,l,l.node),c.lastPushedText&&c.textEmbedded&&c.chunks.push(Bh),l.abortSet.delete(l),c.status=1,N2(s,l.blockedBoundary,c)}catch(x){if(Wh(),typeof x=="object"&&x!==null&&typeof x.then=="function"){var u=l.ping;x.then(u,u)}else{l.abortSet.delete(l),c.status=4;var d=l.blockedBoundary,f=x,g=Wl(s,f);if(d===null?ac(s,f):(d.pendingTasks--,d.forceClientRender||(d.forceClientRender=!0,d.errorDigest=g,d.parentFlushed&&s.clientRenderedBoundaries.push(d))),s.allPendingTasks--,s.allPendingTasks===0){var C=s.onAllReady;C()}}}finally{}}}o.splice(0,i),e.destination!==null&&Kh(e,e.destination)}catch(x){Wl(e,x),ac(e,x)}finally{ws=n,qu.current=r,r===Wm&&oc(t)}}}function Ha(e,t,r){switch(r.parentFlushed=!0,r.status){case 0:var n=r.id=e.nextSegmentId++;return r.lastPushedText=!1,r.textEmbedded=!1,e=e.responseState,ie(t,V8),ie(t,e.placeholderPrefix),e=Ie(n.toString(16)),ie(t,e),tt(t,H8);case 1:r.status=2;var o=!0;n=r.chunks;var i=0;r=r.children;for(var l=0;l<r.length;l++){for(o=r[l];i<o.index;i++)ie(t,n[i]);o=Uc(e,t,o)}for(;i<n.length-1;i++)ie(t,n[i]);return i<n.length&&(o=tt(t,n[i])),o;default:throw Error(Oe(390))}}function Uc(e,t,r){var n=r.boundary;if(n===null)return Ha(e,t,r);if(n.parentFlushed=!0,n.forceClientRender)n=n.errorDigest,tt(t,K8),ie(t,J8),n&&(ie(t,Y8),ie(t,Ie(At(n))),ie(t,X8)),tt(t,Z8),Ha(e,t,r);else if(0<n.pendingTasks){n.rootSegmentID=e.nextSegmentId++,0<n.completedSegments.length&&e.partialBoundaries.push(n);var o=e.responseState,i=o.nextSuspenseID++;o=q(o.boundaryPrefix+i.toString(16)),n=n.id=o,Mm(t,e.responseState,n),Ha(e,t,r)}else if(n.byteSize>e.progressiveChunkSize)n.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(n),Mm(t,e.responseState,n.id),Ha(e,t,r);else{if(tt(t,U8),r=n.completedSegments,r.length!==1)throw Error(Oe(391));Uc(e,t,r[0])}return tt(t,Q8)}function Xm(e,t,r){return C$(t,e.responseState,r.formatContext,r.id),Uc(e,t,r),S$(t,r.formatContext)}function Ym(e,t,r){for(var n=r.completedSegments,o=0;o<n.length;o++)M2(e,t,r,n[o]);if(n.length=0,e=e.responseState,n=r.id,r=r.rootSegmentID,ie(t,e.startInlineScript),e.sentCompleteBoundaryFunction?ie(t,O$):(e.sentCompleteBoundaryFunction=!0,ie(t,k$)),n===null)throw Error(Oe(395));return r=Ie(r.toString(16)),ie(t,n),ie(t,_$),ie(t,e.segmentPrefix),ie(t,r),tt(t,I$)}function M2(e,t,r,n){if(n.status===2)return!0;var o=n.id;if(o===-1){if((n.id=r.rootSegmentID)===-1)throw Error(Oe(392));return Xm(e,t,n)}return Xm(e,t,n),e=e.responseState,ie(t,e.startInlineScript),e.sentCompleteSegmentFunction?ie(t,b$):(e.sentCompleteSegmentFunction=!0,ie(t,$$)),ie(t,e.segmentPrefix),o=Ie(o.toString(16)),ie(t,o),ie(t,E$),ie(t,e.placeholderPrefix),ie(t,o),tt(t,j$)}function Kh(e,t){pr=new Uint8Array(512),mr=0;try{var r=e.completedRootSegment;if(r!==null&&e.pendingRootTasks===0){Uc(e,t,r),e.completedRootSegment=null;var n=e.responseState.bootstrapChunks;for(r=0;r<n.length-1;r++)ie(t,n[r]);r<n.length&&tt(t,n[r])}var o=e.clientRenderedBoundaries,i;for(i=0;i<o.length;i++){var l=o[i];n=t;var s=e.responseState,c=l.id,u=l.errorDigest,d=l.errorMessage,f=l.errorComponentStack;if(ie(n,s.startInlineScript),s.sentClientRenderFunction?ie(n,T$):(s.sentClientRenderFunction=!0,ie(n,R$)),c===null)throw Error(Oe(395));ie(n,c),ie(n,A$),(u||d||f)&&(ie(n,Uu),ie(n,Ie(Wu(u||"")))),(d||f)&&(ie(n,Uu),ie(n,Ie(Wu(d||"")))),f&&(ie(n,Uu),ie(n,Ie(Wu(f)))),tt(n,D$)}o.splice(0,i);var g=e.completedBoundaries;for(i=0;i<g.length;i++)Ym(e,t,g[i]);g.splice(0,i),Om(t),pr=new Uint8Array(512),mr=0;var C=e.partialBoundaries;for(i=0;i<C.length;i++){var x=C[i];e:{o=e,l=t;var w=x.completedSegments;for(s=0;s<w.length;s++)if(!M2(o,l,x,w[s])){s++,w.splice(0,s);var v=!1;break e}w.splice(0,s),v=!0}if(!v){e.destination=null,i++,C.splice(0,i);return}}C.splice(0,i);var y=e.completedBoundaries;for(i=0;i<y.length;i++)Ym(e,t,y[i]);y.splice(0,i)}finally{Om(t),e.allPendingTasks===0&&e.pingedTasks.length===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&t.close()}}function Zm(e,t){try{var r=e.abortableTasks;r.forEach(function(n){return z2(n,e,t)}),r.clear(),e.destination!==null&&Kh(e,e.destination)}catch(n){Wl(e,n),ac(e,n)}}Lh.renderToReadableStream=function(e,t){return new Promise(function(r,n){var o,i,l=new Promise(function(d,f){i=d,o=f}),s=J$(e,T8(t?t.identifierPrefix:void 0,t?t.nonce:void 0,t?t.bootstrapScriptContent:void 0,t?t.bootstrapScripts:void 0,t?t.bootstrapModules:void 0),A8(t?t.namespaceURI:void 0),t?t.progressiveChunkSize:void 0,t?t.onError:void 0,i,function(){var d=new ReadableStream({type:"bytes",pull:function(f){if(s.status===1)s.status=2,g2(f,s.fatalError);else if(s.status!==2&&s.destination===null){s.destination=f;try{Kh(s,f)}catch(g){Wl(s,g),ac(s,g)}}},cancel:function(){Zm(s)}},{highWaterMark:0});d.allReady=l,r(d)},function(d){l.catch(function(){}),n(d)},o);if(t&&t.signal){var c=t.signal,u=function(){Zm(s,c.reason),c.removeEventListener("abort",u)};c.addEventListener("abort",u)}P2(s)})};Lh.version="18.2.0";var Ai,L2;Ai=Ti,L2=Lh;Mo.version=Ai.version;Mo.renderToString=Ai.renderToString;Mo.renderToStaticMarkup=Ai.renderToStaticMarkup;Mo.renderToNodeStream=Ai.renderToNodeStream;Mo.renderToStaticNodeStream=Ai.renderToStaticNodeStream;Mo.renderToReadableStream=L2.renderToReadableStream;var Y$=Ir&&Ir.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ih,"__esModule",{value:!0});const Pr=Y$(j),Z$=Mo,e7=["string","number","boolean"];function t7({header:e,body:t}){const r=Pr.default.createElement("tr",null,e.map(o=>Pr.default.createElement("th",{key:o},o))),n=t.map((o,i)=>Array.isArray(o)?Pr.default.createElement("tr",{key:i},o.map((l,s)=>Pr.default.createElement("th",{key:s}," ",l," "))):o!==null&&typeof o=="object"?Pr.default.createElement("tr",{key:i},Object.entries(o).map(([l,s],c)=>typeof s=="object"?(console.error(`typeof ${l} is incorrect, only accept ${e7.join(", ")} `),Pr.default.createElement("th",{key:c})):Pr.default.createElement("th",{key:c},Pr.default.createElement(Pr.default.Fragment,null,s)))):(console.error(`
       data structure is incorrect,  
       data structure type -> 
       " type data = Array<{ [key: string]: string | number | boolean }> 
                         or 
        type data = Array<(string | number | boolean)[]>"
      `),null));return(0,Z$.renderToString)(Pr.default.createElement("table",null,Pr.default.createElement("tbody",null,r,n)))}Ih.default=t7;(function(e){var t=Ir&&Ir.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(e,"__esModule",{value:!0}),e.createTable=e.template=e.uri=e.format=e.base64=void 0;function r(i){return window.btoa(unescape(encodeURIComponent(i)))}e.base64=r;function n(i,l){return i.replace(/{(\w+)}/g,(s,c)=>l[c])}e.format=n,e.uri="data:application/vnd.ms-excel;base64,",e.template='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body>{table}</body></html>';var o=Ih;Object.defineProperty(e,"createTable",{enumerable:!0,get:function(){return t(o).default}})})(Vv);var r7=Ir&&Ir.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),n7=Ir&&Ir.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o7=Ir&&Ir.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.prototype.hasOwnProperty.call(e,r)&&r7(t,e,r);return n7(t,e),t};Object.defineProperty(To,"__esModule",{value:!0});To.downloadExcel=To.excel=void 0;const il=o7(Vv);function F2(){return document?!0:((process==null?void 0:"production")!=="production"&&console.error("Failed to access document object"),!1)}function G2(e,t){const r=window.document.createElement("a");return r.href=il.uri+il.base64(il.format(il.template,t)),r.download=e,document.body.appendChild(r),r.click(),document.body.removeChild(r),!0}function B2(e,t){if(e)return e.cloneNode(!0).outerHTML;if(t)return il.createTable(t);console.error("currentTableRef or tablePayload does not exist")}function i7({fileName:e,sheet:t,tablePayload:r},n){if(!F2())return!1;const o=B2(n,r);return G2(e,{worksheet:t||"Worksheet",table:o})}To.downloadExcel=i7;function l7({currentTableRef:e,filename:t,sheet:r}){function n(){if(!F2())return!1;const o=B2(e),i=`${t}.xls`;return G2(i,{worksheet:r||"Worksheet",table:o})}return{onDownload:n}}To.excel=l7;Object.defineProperty(Lc,"__esModule",{value:!0});Lc.useDownloadExcel=void 0;const Ku=j,a7=To;function s7({currentTableRef:e,filename:t,sheet:r}){const[n,o]=(0,Ku.useState)({});return(0,Ku.useEffect)(()=>{o({currentTableRef:e,filename:t,sheet:r})},[e,t,r]),(0,Ku.useMemo)(()=>(0,a7.excel)(n),[n])}Lc.useDownloadExcel=s7;(function(e){var t=Ir&&Ir.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(e,"__esModule",{value:!0}),e.downloadExcel=e.useDownloadExcel=e.DownloadTableExcel=void 0;const r=t(j),n=Lc;Object.defineProperty(e,"useDownloadExcel",{enumerable:!0,get:function(){return n.useDownloadExcel}});const o=To;Object.defineProperty(e,"downloadExcel",{enumerable:!0,get:function(){return o.downloadExcel}});const i=({currentTableRef:l,filename:s,sheet:c,children:u})=>{const{onDownload:d}=(0,n.useDownloadExcel)({currentTableRef:l,filename:s,sheet:c});return r.default.createElement("span",{onClick:d},u)};e.DownloadTableExcel=i})(Bv);const c7=Q.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`,u7=({tableName:e,modalState:t,tableRef:r})=>{const n=P(`${new Date().toLocaleDateString().replace(/([/])+/g,"-")}_${e}`),{onDownload:o}=Bv.useDownloadExcel({currentTableRef:r.current,filename:n.value,sheet:e});return a.jsx(bt,{modalState:t,title:`Exportar ${e}`,children:a.jsxs(c7,{children:[a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$padding:[.5,.5],$fontSize:1,$width:"20rem",leftIcon:null,rightIcon:a.jsx("p",{children:".xls"}),placeholder:"Digite o nome do arquivo",value:n.value,onChange:i=>n.set(i.target.value)}),a.jsxs(ft,{onClick:o,children:[a.jsx(Xw,{})," Salvar"]})]})})},d7=Q.div`
${e=>Ge`
    display: flex;
    flex-direction: column;
    align-items: start;
    
    gap: 2rem;
    width: ${e.$modalFiltersWidth?e.$modalFiltersWidth+"rem":"100%"};

    @media (max-width: 50rem) {
        width: calc(96vw - 2rem);
    }

    >div {
        width: 100%;
    }

    >div:nth-child(1)>div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        width: 100%;

        >h3 {
            color: var(--color-grey-2);
            font-size: 1rem
        }

        >div {
            width: 100%;
            display: flex;
            gap: 1rem;
            row-gap: 0.75rem;
            flex-wrap: wrap;
            
            @media (max-width: 50rem) {
                flex-direction: column;
                align-items: stretch;
                width: 100%;

                >* {
                    box-sizing: c;
                    width: 100% !important;

                    >div {
                        box-sizing: border-box;
                        width: 100% !important;
                    }
                }
            }
        }
    }

    >div:nth-child(2) {
        display: flex;
        gap: 0.5rem;
    }
`}
`;function f7(e,t,r,n){var d;const o=Array.from(new Set(t.value.map(f=>f[e.key]))),i=e.filter.options||o.map(f=>({name:e.format?e.format({[e.key]:f}):f,value:f})),l=n.get(String(e.key)),s=e.filter.placeholder||`Selecione um(a) ${(d=e.header)==null?void 0:d.toLowerCase()}`,c=e.filter.icon||a.jsx(bh,{}),u=f=>{r.set(g=>(f?g[e.key]=f:delete g[e.key],g))};return a.jsx(Te,{$color:m.colorGrey[3],$borderColor:m.colorGrey[2],$focusColor:m.colorGrey[0],$padding:[.5,.5],$fontSize:1,$width:e.filter.width,leftIcon:c,placeholder:s,onChange:u,options:i,defaultValue:i.find(f=>f.value===l)||void 0})}function h7(e,t,r){const n=r.get(String(e.key)),o=i=>{t.set(l=>(i.target.value?l[e.key]=i.target.value:delete l[e.key],l))};return a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$padding:[.5,.5],$fontSize:1,$width:e.filter.width,leftIcon:e.filter.icon||a.jsx(bh,{}),rightIcon:null,onChange:o,placeholder:e.header,defaultValue:n||void 0})}function p7(e,t,r){var l;const n=e.filter.options,o=r.getAll(String(e.key)),i=s=>{t.set(c=>(s?c[e.key]=s:delete c[e.key],c))};return a.jsx(Bl,{$color:m.colorGrey[3],$borderColor:m.colorGrey[2],$padding:[.5,.5],$fontSize:1,$width:e.filter.width,leftIcon:((l=e.filter)==null?void 0:l.icon)||a.jsx(bh,{}),rightIcon:a.jsx(_i,{}),onChange:i,options:n,placeholder:e.filter.placeholder||`${e.header||String(e.key)}s`,defaultValue:n.filter(s=>o==null?void 0:o.includes(String(s.value)))})}var m7=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(n,o,i){r.o(n,o)||Object.defineProperty(n,o,{enumerable:!0,get:i})},r.r=function(n){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,o){if(1&o&&(n=r(n)),8&o||4&o&&typeof n=="object"&&n&&n.__esModule)return n;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&o&&typeof n!="string")for(var l in n)r.d(i,l,(function(s){return n[s]}).bind(null,l));return i},r.n=function(n){var o=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(o,"a",o),o},r.o=function(n,o){return Object.prototype.hasOwnProperty.call(n,o)},r.p="",r(r.s=9)}([function(e,t){e.exports=j},function(e,t,r){var n;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(){var o={}.hasOwnProperty;function i(){for(var l=[],s=0;s<arguments.length;s++){var c=arguments[s];if(c){var u=typeof c;if(u==="string"||u==="number")l.push(c);else if(Array.isArray(c)&&c.length){var d=i.apply(null,c);d&&l.push(d)}else if(u==="object")for(var f in c)o.call(c,f)&&c[f]&&l.push(f)}}return l.join(" ")}e.exports?(i.default=i,e.exports=i):(n=(function(){return i}).apply(t,[]))===void 0||(e.exports=n)})()},function(e,t,r){(function(n){var o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt,u=typeof n=="object"&&n&&n.Object===Object&&n,d=typeof self=="object"&&self&&self.Object===Object&&self,f=u||d||Function("return this")(),g=Object.prototype.toString,C=f.Symbol,x=C?C.prototype:void 0,w=x?x.toString:void 0;function v($){if(typeof $=="string")return $;if(h($))return w?w.call($):"";var E=$+"";return E=="0"&&1/$==-1/0?"-0":E}function y($){var E=typeof $;return!!$&&(E=="object"||E=="function")}function h($){return typeof $=="symbol"||function(E){return!!E&&typeof E=="object"}($)&&g.call($)=="[object Symbol]"}function p($){return $?($=function(E){if(typeof E=="number")return E;if(h(E))return NaN;if(y(E)){var k=typeof E.valueOf=="function"?E.valueOf():E;E=y(k)?k+"":k}if(typeof E!="string")return E===0?E:+E;E=E.replace(o,"");var O=l.test(E);return O||s.test(E)?c(E.slice(2),O?2:8):i.test(E)?NaN:+E}($))===1/0||$===-1/0?17976931348623157e292*($<0?-1:1):$==$?$:0:$===0?$:0}e.exports=function($,E,k){var O,T,J,H;return $=(O=$)==null?"":v(O),T=function(ge){var Y=p(ge),ye=Y%1;return Y==Y?ye?Y-ye:Y:0}(k),J=0,H=$.length,T==T&&(H!==void 0&&(T=T<=H?T:H),J!==void 0&&(T=T>=J?T:J)),k=T,E=v(E),$.slice(k,k+E.length)==E}}).call(this,r(3))},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch{typeof window=="object"&&(r=window)}e.exports=r},function(e,t,r){(function(n){var o=/^\[object .+?Constructor\]$/,i=typeof n=="object"&&n&&n.Object===Object&&n,l=typeof self=="object"&&self&&self.Object===Object&&self,s=i||l||Function("return this")(),c,u=Array.prototype,d=Function.prototype,f=Object.prototype,g=s["__core-js_shared__"],C=(c=/[^.]+$/.exec(g&&g.keys&&g.keys.IE_PROTO||""))?"Symbol(src)_1."+c:"",x=d.toString,w=f.hasOwnProperty,v=f.toString,y=RegExp("^"+x.call(w).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),h=u.splice,p=ge(s,"Map"),$=ge(Object,"create");function E(N){var A=-1,U=N?N.length:0;for(this.clear();++A<U;){var ne=N[A];this.set(ne[0],ne[1])}}function k(N){var A=-1,U=N?N.length:0;for(this.clear();++A<U;){var ne=N[A];this.set(ne[0],ne[1])}}function O(N){var A=-1,U=N?N.length:0;for(this.clear();++A<U;){var ne=N[A];this.set(ne[0],ne[1])}}function T(N,A){for(var U,ne,M=N.length;M--;)if((U=N[M][0])===(ne=A)||U!=U&&ne!=ne)return M;return-1}function J(N){return!(!ye(N)||(A=N,C&&C in A))&&(function(U){var ne=ye(U)?v.call(U):"";return ne=="[object Function]"||ne=="[object GeneratorFunction]"}(N)||function(U){var ne=!1;if(U!=null&&typeof U.toString!="function")try{ne=!!(U+"")}catch{}return ne}(N)?y:o).test(function(U){if(U!=null){try{return x.call(U)}catch{}try{return U+""}catch{}}return""}(N));var A}function H(N,A){var U,ne,M=N.__data__;return((ne=typeof(U=A))=="string"||ne=="number"||ne=="symbol"||ne=="boolean"?U!=="__proto__":U===null)?M[typeof A=="string"?"string":"hash"]:M.map}function ge(N,A){var U=function(ne,M){return ne==null?void 0:ne[M]}(N,A);return J(U)?U:void 0}function Y(N,A){if(typeof N!="function"||A&&typeof A!="function")throw new TypeError("Expected a function");var U=function(){var ne=arguments,M=A?A.apply(this,ne):ne[0],Z=U.cache;if(Z.has(M))return Z.get(M);var z=N.apply(this,ne);return U.cache=Z.set(M,z),z};return U.cache=new(Y.Cache||O),U}function ye(N){var A=typeof N;return!!N&&(A=="object"||A=="function")}E.prototype.clear=function(){this.__data__=$?$(null):{}},E.prototype.delete=function(N){return this.has(N)&&delete this.__data__[N]},E.prototype.get=function(N){var A=this.__data__;if($){var U=A[N];return U==="__lodash_hash_undefined__"?void 0:U}return w.call(A,N)?A[N]:void 0},E.prototype.has=function(N){var A=this.__data__;return $?A[N]!==void 0:w.call(A,N)},E.prototype.set=function(N,A){return this.__data__[N]=$&&A===void 0?"__lodash_hash_undefined__":A,this},k.prototype.clear=function(){this.__data__=[]},k.prototype.delete=function(N){var A=this.__data__,U=T(A,N);return!(U<0)&&(U==A.length-1?A.pop():h.call(A,U,1),!0)},k.prototype.get=function(N){var A=this.__data__,U=T(A,N);return U<0?void 0:A[U][1]},k.prototype.has=function(N){return T(this.__data__,N)>-1},k.prototype.set=function(N,A){var U=this.__data__,ne=T(U,N);return ne<0?U.push([N,A]):U[ne][1]=A,this},O.prototype.clear=function(){this.__data__={hash:new E,map:new(p||k),string:new E}},O.prototype.delete=function(N){return H(this,N).delete(N)},O.prototype.get=function(N){return H(this,N).get(N)},O.prototype.has=function(N){return H(this,N).has(N)},O.prototype.set=function(N,A){return H(this,N).set(N,A),this},Y.Cache=O,e.exports=Y}).call(this,r(3))},function(e,t,r){(function(n){var o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt,u=typeof n=="object"&&n&&n.Object===Object&&n,d=typeof self=="object"&&self&&self.Object===Object&&self,f=u||d||Function("return this")(),g=Object.prototype.toString,C=Math.max,x=Math.min,w=function(){return f.Date.now()};function v(h){var p=typeof h;return!!h&&(p=="object"||p=="function")}function y(h){if(typeof h=="number")return h;if(function(E){return typeof E=="symbol"||function(k){return!!k&&typeof k=="object"}(E)&&g.call(E)=="[object Symbol]"}(h))return NaN;if(v(h)){var p=typeof h.valueOf=="function"?h.valueOf():h;h=v(p)?p+"":p}if(typeof h!="string")return h===0?h:+h;h=h.replace(o,"");var $=l.test(h);return $||s.test(h)?c(h.slice(2),$?2:8):i.test(h)?NaN:+h}e.exports=function(h,p,$){var E,k,O,T,J,H,ge=0,Y=!1,ye=!1,N=!0;if(typeof h!="function")throw new TypeError("Expected a function");function A(D){var K=E,fe=k;return E=k=void 0,ge=D,T=h.apply(fe,K)}function U(D){return ge=D,J=setTimeout(M,p),Y?A(D):T}function ne(D){var K=D-H;return H===void 0||K>=p||K<0||ye&&D-ge>=O}function M(){var D=w();if(ne(D))return Z(D);J=setTimeout(M,function(K){var fe=p-(K-H);return ye?x(fe,O-(K-ge)):fe}(D))}function Z(D){return J=void 0,N&&E?A(D):(E=k=void 0,T)}function z(){var D=w(),K=ne(D);if(E=arguments,k=this,H=D,K){if(J===void 0)return U(H);if(ye)return J=setTimeout(M,p),A(H)}return J===void 0&&(J=setTimeout(M,p)),T}return p=y(p)||0,v($)&&(Y=!!$.leading,O=(ye="maxWait"in $)?C(y($.maxWait)||0,p):O,N="trailing"in $?!!$.trailing:N),z.cancel=function(){J!==void 0&&clearTimeout(J),ge=0,E=H=k=J=void 0},z.flush=function(){return J===void 0?T:Z(w())},z}}).call(this,r(3))},function(e,t,r){(function(n,o){var i="[object Arguments]",l="[object Map]",s="[object Object]",c="[object Set]",u=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,d=/^\w*$/,f=/^\./,g=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,C=/\\(\\)?/g,x=/^\[object .+?Constructor\]$/,w=/^(?:0|[1-9]\d*)$/,v={};v["[object Float32Array]"]=v["[object Float64Array]"]=v["[object Int8Array]"]=v["[object Int16Array]"]=v["[object Int32Array]"]=v["[object Uint8Array]"]=v["[object Uint8ClampedArray]"]=v["[object Uint16Array]"]=v["[object Uint32Array]"]=!0,v[i]=v["[object Array]"]=v["[object ArrayBuffer]"]=v["[object Boolean]"]=v["[object DataView]"]=v["[object Date]"]=v["[object Error]"]=v["[object Function]"]=v[l]=v["[object Number]"]=v[s]=v["[object RegExp]"]=v[c]=v["[object String]"]=v["[object WeakMap]"]=!1;var y=typeof n=="object"&&n&&n.Object===Object&&n,h=typeof self=="object"&&self&&self.Object===Object&&self,p=y||h||Function("return this")(),$=t&&!t.nodeType&&t,E=$&&typeof o=="object"&&o&&!o.nodeType&&o,k=E&&E.exports===$&&y.process,O=function(){try{return k&&k.binding("util")}catch{}}(),T=O&&O.isTypedArray;function J(S,_,L,B){var ae=-1,se=S?S.length:0;for(B&&se&&(L=S[++ae]);++ae<se;)L=_(L,S[ae],ae,S);return L}function H(S,_){for(var L=-1,B=S?S.length:0;++L<B;)if(_(S[L],L,S))return!0;return!1}function ge(S,_,L,B,ae){return ae(S,function(se,$e,Xe){L=B?(B=!1,se):_(L,se,$e,Xe)}),L}function Y(S){var _=!1;if(S!=null&&typeof S.toString!="function")try{_=!!(S+"")}catch{}return _}function ye(S){var _=-1,L=Array(S.size);return S.forEach(function(B,ae){L[++_]=[ae,B]}),L}function N(S){var _=-1,L=Array(S.size);return S.forEach(function(B){L[++_]=B}),L}var A,U,ne,M=Array.prototype,Z=Function.prototype,z=Object.prototype,D=p["__core-js_shared__"],K=(A=/[^.]+$/.exec(D&&D.keys&&D.keys.IE_PROTO||""))?"Symbol(src)_1."+A:"",fe=Z.toString,W=z.hasOwnProperty,b=z.toString,me=RegExp("^"+fe.call(W).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),he=p.Symbol,ve=p.Uint8Array,Ve=z.propertyIsEnumerable,Pe=M.splice,Ae=(U=Object.keys,ne=Object,function(S){return U(ne(S))}),at=Fo(p,"DataView"),mt=Fo(p,"Map"),ot=Fo(p,"Promise"),I=Fo(p,"Set"),F=Fo(p,"WeakMap"),ee=Fo(Object,"create"),xe=oo(at),ue=oo(mt),we=oo(ot),je=oo(I),Me=oo(F),te=he?he.prototype:void 0,ce=te?te.valueOf:void 0,_e=te?te.toString:void 0;function oe(S){var _=-1,L=S?S.length:0;for(this.clear();++_<L;){var B=S[_];this.set(B[0],B[1])}}function le(S){var _=-1,L=S?S.length:0;for(this.clear();++_<L;){var B=S[_];this.set(B[0],B[1])}}function Je(S){var _=-1,L=S?S.length:0;for(this.clear();++_<L;){var B=S[_];this.set(B[0],B[1])}}function ar(S){var _=-1,L=S?S.length:0;for(this.__data__=new Je;++_<L;)this.add(S[_])}function It(S){this.__data__=new le(S)}function $r(S,_){var L=Sn(S)||np(S)?function($e,Xe){for(var Ye=-1,He=Array($e);++Ye<$e;)He[Ye]=Xe(Ye);return He}(S.length,String):[],B=L.length,ae=!!B;for(var se in S)!W.call(S,se)||ae&&(se=="length"||Zh(se,B))||L.push(se);return L}function qr(S,_){for(var L=S.length;L--;)if(rp(S[L][0],_))return L;return-1}oe.prototype.clear=function(){this.__data__=ee?ee(null):{}},oe.prototype.delete=function(S){return this.has(S)&&delete this.__data__[S]},oe.prototype.get=function(S){var _=this.__data__;if(ee){var L=_[S];return L==="__lodash_hash_undefined__"?void 0:L}return W.call(_,S)?_[S]:void 0},oe.prototype.has=function(S){var _=this.__data__;return ee?_[S]!==void 0:W.call(_,S)},oe.prototype.set=function(S,_){return this.__data__[S]=ee&&_===void 0?"__lodash_hash_undefined__":_,this},le.prototype.clear=function(){this.__data__=[]},le.prototype.delete=function(S){var _=this.__data__,L=qr(_,S);return!(L<0)&&(L==_.length-1?_.pop():Pe.call(_,L,1),!0)},le.prototype.get=function(S){var _=this.__data__,L=qr(_,S);return L<0?void 0:_[L][1]},le.prototype.has=function(S){return qr(this.__data__,S)>-1},le.prototype.set=function(S,_){var L=this.__data__,B=qr(L,S);return B<0?L.push([S,_]):L[B][1]=_,this},Je.prototype.clear=function(){this.__data__={hash:new oe,map:new(mt||le),string:new oe}},Je.prototype.delete=function(S){return la(this,S).delete(S)},Je.prototype.get=function(S){return la(this,S).get(S)},Je.prototype.has=function(S){return la(this,S).has(S)},Je.prototype.set=function(S,_){return la(this,S).set(S,_),this},ar.prototype.add=ar.prototype.push=function(S){return this.__data__.set(S,"__lodash_hash_undefined__"),this},ar.prototype.has=function(S){return this.__data__.has(S)},It.prototype.clear=function(){this.__data__=new le},It.prototype.delete=function(S){return this.__data__.delete(S)},It.prototype.get=function(S){return this.__data__.get(S)},It.prototype.has=function(S){return this.__data__.has(S)},It.prototype.set=function(S,_){var L=this.__data__;if(L instanceof le){var B=L.__data__;if(!mt||B.length<199)return B.push([S,_]),this;L=this.__data__=new Je(B)}return L.set(S,_),this};var no,gt=(no=function(S,_){return S&&Lo(S,_,da)},function(S,_){if(S==null)return S;if(!Kc(S))return no(S,_);for(var L=S.length,B=-1,ae=Object(S);++B<L&&_(ae[B],B,ae)!==!1;);return S}),Lo=function(S){return function(_,L,B){for(var ae=-1,se=Object(_),$e=B(_),Xe=$e.length;Xe--;){var Ye=$e[++ae];if(L(se[Ye],Ye,se)===!1)break}return _}}();function Di(S,_){for(var L=0,B=(_=aa(_,S)?[_]:Xh(_)).length;S!=null&&L<B;)S=S[sa(_[L++])];return L&&L==B?S:void 0}function Wc(S,_){return S!=null&&_ in Object(S)}function zi(S,_,L,B,ae){return S===_||(S==null||_==null||!ca(S)&&!ua(_)?S!=S&&_!=_:function(se,$e,Xe,Ye,He,ze){var br=Sn(se),Rt=Sn($e),Ct="[object Array]",Et="[object Array]";br||(Ct=(Ct=Cn(se))==i?s:Ct),Rt||(Et=(Et=Cn($e))==i?s:Et);var zr=Ct==s&&!Y(se),Go=Et==s&&!Y($e),$n=Ct==Et;if($n&&!zr)return ze||(ze=new It),br||q2(se)?Yh(se,$e,Xe,Ye,He,ze):function(Ue,Fe,Xc,io,fa,sr,on){switch(Xc){case"[object DataView]":if(Ue.byteLength!=Fe.byteLength||Ue.byteOffset!=Fe.byteOffset)return!1;Ue=Ue.buffer,Fe=Fe.buffer;case"[object ArrayBuffer]":return!(Ue.byteLength!=Fe.byteLength||!io(new ve(Ue),new ve(Fe)));case"[object Boolean]":case"[object Date]":case"[object Number]":return rp(+Ue,+Fe);case"[object Error]":return Ue.name==Fe.name&&Ue.message==Fe.message;case"[object RegExp]":case"[object String]":return Ue==Fe+"";case l:var bn=ye;case c:var Pi=2&sr;if(bn||(bn=N),Ue.size!=Fe.size&&!Pi)return!1;var ha=on.get(Ue);if(ha)return ha==Fe;sr|=1,on.set(Ue,Fe);var Bo=Yh(bn(Ue),bn(Fe),io,fa,sr,on);return on.delete(Ue),Bo;case"[object Symbol]":if(ce)return ce.call(Ue)==ce.call(Fe)}return!1}(se,$e,Ct,Xe,Ye,He,ze);if(!(2&He)){var ip=zr&&W.call(se,"__wrapped__"),lp=Go&&W.call($e,"__wrapped__");if(ip||lp){var Q2=ip?se.value():se,J2=lp?$e.value():$e;return ze||(ze=new It),Xe(Q2,J2,Ye,He,ze)}}return $n?(ze||(ze=new It),function(Ue,Fe,Xc,io,fa,sr){var on=2&fa,bn=da(Ue),Pi=bn.length,ha=da(Fe).length;if(Pi!=ha&&!on)return!1;for(var Bo=Pi;Bo--;){var En=bn[Bo];if(!(on?En in Fe:W.call(Fe,En)))return!1}var ap=sr.get(Ue);if(ap&&sr.get(Fe))return ap==Fe;var pa=!0;sr.set(Ue,Fe),sr.set(Fe,Ue);for(var Yc=on;++Bo<Pi;){En=bn[Bo];var ma=Ue[En],ga=Fe[En];if(io)var sp=on?io(ga,ma,En,Fe,Ue,sr):io(ma,ga,En,Ue,Fe,sr);if(!(sp===void 0?ma===ga||Xc(ma,ga,io,fa,sr):sp)){pa=!1;break}Yc||(Yc=En=="constructor")}if(pa&&!Yc){var ya=Ue.constructor,va=Fe.constructor;ya==va||!("constructor"in Ue)||!("constructor"in Fe)||typeof ya=="function"&&ya instanceof ya&&typeof va=="function"&&va instanceof va||(pa=!1)}return sr.delete(Ue),sr.delete(Fe),pa}(se,$e,Xe,Ye,He,ze)):!1}(S,_,zi,L,B,ae))}function Ni(S){return!(!ca(S)||function(_){return!!K&&K in _}(S))&&(op(S)||Y(S)?me:x).test(oo(S))}function H2(S){return typeof S=="function"?S:S==null?K2:typeof S=="object"?Sn(S)?function(B,ae){return aa(B)&&ep(ae)?tp(sa(B),ae):function(se){var $e=function(Xe,Ye,He){var ze=Xe==null?void 0:Di(Xe,Ye);return ze===void 0?He:ze}(se,B);return $e===void 0&&$e===ae?function(Xe,Ye){return Xe!=null&&function(He,ze,br){ze=aa(ze,He)?[ze]:Xh(ze);for(var Rt,Ct=-1,Et=ze.length;++Ct<Et;){var zr=sa(ze[Ct]);if(!(Rt=He!=null&&br(He,zr)))break;He=He[zr]}return Rt||!!(Et=He?He.length:0)&&Qc(Et)&&Zh(zr,Et)&&(Sn(He)||np(He))}(Xe,Ye,Wc)}(se,B):zi(ae,$e,void 0,3)}}(S[0],S[1]):function(B){var ae=function(se){for(var $e=da(se),Xe=$e.length;Xe--;){var Ye=$e[Xe],He=se[Ye];$e[Xe]=[Ye,He,ep(He)]}return $e}(B);return ae.length==1&&ae[0][2]?tp(ae[0][0],ae[0][1]):function(se){return se===B||function($e,Xe,Ye,He){var ze=Ye.length,br=ze;if($e==null)return!br;for($e=Object($e);ze--;){var Rt=Ye[ze];if(Rt[2]?Rt[1]!==$e[Rt[0]]:!(Rt[0]in $e))return!1}for(;++ze<br;){var Ct=(Rt=Ye[ze])[0],Et=$e[Ct],zr=Rt[1];if(Rt[2]){if(Et===void 0&&!(Ct in $e))return!1}else{var Go=new It,$n;if(!($n===void 0?zi(zr,Et,He,3,Go):$n))return!1}}return!0}(se,B,ae)}}(S):aa(_=S)?(L=sa(_),function(B){return B==null?void 0:B[L]}):function(B){return function(ae){return Di(ae,B)}}(_);var _,L}function U2(S){if(L=(_=S)&&_.constructor,B=typeof L=="function"&&L.prototype||z,_!==B)return Ae(S);var _,L,B,ae=[];for(var se in Object(S))W.call(S,se)&&se!="constructor"&&ae.push(se);return ae}function Xh(S){return Sn(S)?S:W2(S)}function Yh(S,_,L,B,ae,se){var $e=2&ae,Xe=S.length,Ye=_.length;if(Xe!=Ye&&!($e&&Ye>Xe))return!1;var He=se.get(S);if(He&&se.get(_))return He==_;var ze=-1,br=!0,Rt=1&ae?new ar:void 0;for(se.set(S,_),se.set(_,S);++ze<Xe;){var Ct=S[ze],Et=_[ze];if(B)var zr=$e?B(Et,Ct,ze,_,S,se):B(Ct,Et,ze,S,_,se);if(zr!==void 0){if(zr)continue;br=!1;break}if(Rt){if(!H(_,function(Go,$n){if(!Rt.has($n)&&(Ct===Go||L(Ct,Go,B,ae,se)))return Rt.add($n)})){br=!1;break}}else if(Ct!==Et&&!L(Ct,Et,B,ae,se)){br=!1;break}}return se.delete(S),se.delete(_),br}function la(S,_){var L,B,ae=S.__data__;return((B=typeof(L=_))=="string"||B=="number"||B=="symbol"||B=="boolean"?L!=="__proto__":L===null)?ae[typeof _=="string"?"string":"hash"]:ae.map}function Fo(S,_){var L=function(B,ae){return B==null?void 0:B[ae]}(S,_);return Ni(L)?L:void 0}var Cn=function(S){return b.call(S)};function Zh(S,_){return!!(_=_??9007199254740991)&&(typeof S=="number"||w.test(S))&&S>-1&&S%1==0&&S<_}function aa(S,_){if(Sn(S))return!1;var L=typeof S;return!(L!="number"&&L!="symbol"&&L!="boolean"&&S!=null&&!Jc(S))||d.test(S)||!u.test(S)||_!=null&&S in Object(_)}function ep(S){return S==S&&!ca(S)}function tp(S,_){return function(L){return L!=null&&L[S]===_&&(_!==void 0||S in Object(L))}}(at&&Cn(new at(new ArrayBuffer(1)))!="[object DataView]"||mt&&Cn(new mt)!=l||ot&&Cn(ot.resolve())!="[object Promise]"||I&&Cn(new I)!=c||F&&Cn(new F)!="[object WeakMap]")&&(Cn=function(S){var _=b.call(S),L=_==s?S.constructor:void 0,B=L?oo(L):void 0;if(B)switch(B){case xe:return"[object DataView]";case ue:return l;case we:return"[object Promise]";case je:return c;case Me:return"[object WeakMap]"}return _});var W2=qc(function(S){var _;S=(_=S)==null?"":function(B){if(typeof B=="string")return B;if(Jc(B))return _e?_e.call(B):"";var ae=B+"";return ae=="0"&&1/B==-1/0?"-0":ae}(_);var L=[];return f.test(S)&&L.push(""),S.replace(g,function(B,ae,se,$e){L.push(se?$e.replace(C,"$1"):ae||B)}),L});function sa(S){if(typeof S=="string"||Jc(S))return S;var _=S+"";return _=="0"&&1/S==-1/0?"-0":_}function oo(S){if(S!=null){try{return fe.call(S)}catch{}try{return S+""}catch{}}return""}function qc(S,_){if(typeof S!="function"||_&&typeof _!="function")throw new TypeError("Expected a function");var L=function(){var B=arguments,ae=_?_.apply(this,B):B[0],se=L.cache;if(se.has(ae))return se.get(ae);var $e=S.apply(this,B);return L.cache=se.set(ae,$e),$e};return L.cache=new(qc.Cache||Je),L}function rp(S,_){return S===_||S!=S&&_!=_}function np(S){return function(_){return ua(_)&&Kc(_)}(S)&&W.call(S,"callee")&&(!Ve.call(S,"callee")||b.call(S)==i)}qc.Cache=Je;var Sn=Array.isArray;function Kc(S){return S!=null&&Qc(S.length)&&!op(S)}function op(S){var _=ca(S)?b.call(S):"";return _=="[object Function]"||_=="[object GeneratorFunction]"}function Qc(S){return typeof S=="number"&&S>-1&&S%1==0&&S<=9007199254740991}function ca(S){var _=typeof S;return!!S&&(_=="object"||_=="function")}function ua(S){return!!S&&typeof S=="object"}function Jc(S){return typeof S=="symbol"||ua(S)&&b.call(S)=="[object Symbol]"}var q2=T?function(S){return function(_){return S(_)}}(T):function(S){return ua(S)&&Qc(S.length)&&!!v[b.call(S)]};function da(S){return Kc(S)?$r(S):U2(S)}function K2(S){return S}o.exports=function(S,_,L){var B=Sn(S)?J:ge,ae=arguments.length<3;return B(S,H2(_),L,ae,gt)}}).call(this,r(3),r(7)(e))},function(e,t){e.exports=function(r){return r.webpackPolyfill||(r.deprecate=function(){},r.paths=[],r.children||(r.children=[]),Object.defineProperty(r,"loaded",{enumerable:!0,get:function(){return r.l}}),Object.defineProperty(r,"id",{enumerable:!0,get:function(){return r.i}}),r.webpackPolyfill=1),r}},function(e,t){String.prototype.padEnd||(String.prototype.padEnd=function(r,n){return r>>=0,n=String(n!==void 0?n:" "),this.length>r?String(this):((r-=this.length)>n.length&&(n+=n.repeat(r/n.length)),String(this)+n.slice(0,r))})},function(e,t,r){function n(z,D,K){return D in z?Object.defineProperty(z,D,{value:K,enumerable:!0,configurable:!0,writable:!0}):z[D]=K,z}function o(z){if(Symbol.iterator in Object(z)||Object.prototype.toString.call(z)==="[object Arguments]")return Array.from(z)}function i(z){return function(D){if(Array.isArray(D)){for(var K=0,fe=new Array(D.length);K<D.length;K++)fe[K]=D[K];return fe}}(z)||o(z)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(z){if(Array.isArray(z))return z}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function c(z,D){if(!(z instanceof D))throw new TypeError("Cannot call a class as a function")}function u(z,D){for(var K=0;K<D.length;K++){var fe=D[K];fe.enumerable=fe.enumerable||!1,fe.configurable=!0,"value"in fe&&(fe.writable=!0),Object.defineProperty(z,fe.key,fe)}}function d(z){return(d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(D){return typeof D}:function(D){return D&&typeof Symbol=="function"&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":typeof D})(z)}function f(z){return(f=typeof Symbol=="function"&&d(Symbol.iterator)==="symbol"?function(D){return d(D)}:function(D){return D&&typeof Symbol=="function"&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":d(D)})(z)}function g(z){if(z===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return z}function C(z){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(D){return D.__proto__||Object.getPrototypeOf(D)})(z)}function x(z,D){return(x=Object.setPrototypeOf||function(K,fe){return K.__proto__=fe,K})(z,D)}r.r(t);var w=r(0),v=r.n(w),y=r(5),h=r.n(y),p=r(4),$=r.n(p),E=r(6),k=r.n(E),O=r(2),T=r.n(O),J=r(1),H=r.n(J);r(8);function ge(z,D){return l(z)||function(K,fe){var W=[],b=!0,me=!1,he=void 0;try{for(var ve,Ve=K[Symbol.iterator]();!(b=(ve=Ve.next()).done)&&(W.push(ve.value),!fe||W.length!==fe);b=!0);}catch(Pe){me=!0,he=Pe}finally{try{b||Ve.return==null||Ve.return()}finally{if(me)throw he}}return W}(z,D)||s()}var Y=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........",0,["11","221","223","261","264","2652","280","2905","291","2920","2966","299","341","342","343","351","376","379","381","3833","385","387","388"]],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ....",0,["2","3","4","7","8","02","03","04","07","08"]],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ...-....",1,["204","226","236","249","250","289","306","343","365","387","403","416","418","431","437","438","450","506","514","519","548","579","581","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599","",1],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86","..-........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506","....-...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599","",0],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1","",2,["809","829","849"]],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503","....-...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502","....-...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509","....-...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91",".....-....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... .......",0],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ...-..-..",1,["310","311","312","313","315","318","321","324","325","326","327","336","7172","73622"]],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60","..-....-...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ....",0,["55","81","33","656","664","998","774","229"]],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) ..-..-.."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","...-...-...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","...-......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","...-...-..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1","",3,["787","939"]],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ...-..-..",0],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65","....-...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ...-..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ...-....",0,["907","205","251","256","334","479","501","870","480","520","602","623","928","209","213","310","323","408","415","510","530","559","562","619","626","650","661","707","714","760","805","818","831","858","909","916","925","949","951","303","719","970","203","860","202","302","239","305","321","352","386","407","561","727","772","813","850","863","904","941","954","229","404","478","706","770","912","808","319","515","563","641","712","208","217","309","312","618","630","708","773","815","847","219","260","317","574","765","812","316","620","785","913","270","502","606","859","225","318","337","504","985","413","508","617","781","978","301","410","207","231","248","269","313","517","586","616","734","810","906","989","218","320","507","612","651","763","952","314","417","573","636","660","816","228","601","662","406","252","336","704","828","910","919","701","308","402","603","201","609","732","856","908","973","505","575","702","775","212","315","516","518","585","607","631","716","718","845","914","216","330","419","440","513","614","740","937","405","580","918","503","541","215","412","570","610","717","724","814","401","803","843","864","605","423","615","731","865","901","931","210","214","254","281","325","361","409","432","512","713","806","817","830","903","915","936","940","956","972","979","435","801","276","434","540","703","757","804","802","206","253","360","425","509","262","414","608","715","920","304","307"]],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ....",1],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],ye=[["American Samoa",["oceania"],"as","1684"],["Anguilla",["america","carribean"],"ai","1264"],["Bermuda",["america","north-america"],"bm","1441"],["British Virgin Islands",["america","carribean"],"vg","1284"],["Cayman Islands",["america","carribean"],"ky","1345"],["Cook Islands",["oceania"],"ck","682"],["Falkland Islands",["america","south-america"],"fk","500"],["Faroe Islands",["europe"],"fo","298"],["Gibraltar",["europe"],"gi","350"],["Greenland",["america"],"gl","299"],["Jersey",["europe","eu-union"],"je","44",".... ......"],["Montserrat",["america","carribean"],"ms","1664"],["Niue",["asia"],"nu","683"],["Norfolk Island",["oceania"],"nf","672"],["Northern Mariana Islands",["oceania"],"mp","1670"],["Saint Barthélemy",["america","carribean"],"bl","590","",1],["Saint Helena",["africa"],"sh","290"],["Saint Martin",["america","carribean"],"mf","590","",2],["Saint Pierre and Miquelon",["america","north-america"],"pm","508"],["Sint Maarten",["america","carribean"],"sx","1721"],["Tokelau",["oceania"],"tk","690"],["Turks and Caicos Islands",["america","carribean"],"tc","1649"],["U.S. Virgin Islands",["america","carribean"],"vi","1340"],["Wallis and Futuna",["oceania"],"wf","681"]];function N(z,D,K,fe,W){return!K||W?z+"".padEnd(D.length,".")+" "+fe:z+"".padEnd(D.length,".")+" "+K}function A(z,D,K,fe,W){var b,me,he=[];return me=D===!0,[(b=[]).concat.apply(b,i(z.map(function(ve){var Ve={name:ve[0],regions:ve[1],iso2:ve[2],countryCode:ve[3],dialCode:ve[3],format:N(K,ve[3],ve[4],fe,W),priority:ve[5]||0},Pe=[];return ve[6]&&ve[6].map(function(Ae){var at=function(mt){for(var ot=1;ot<arguments.length;ot++){var I=arguments[ot]!=null?arguments[ot]:{},F=Object.keys(I);typeof Object.getOwnPropertySymbols=="function"&&(F=F.concat(Object.getOwnPropertySymbols(I).filter(function(ee){return Object.getOwnPropertyDescriptor(I,ee).enumerable}))),F.forEach(function(ee){n(mt,ee,I[ee])})}return mt}({},Ve);at.dialCode=ve[3]+Ae,at.isAreaCode=!0,at.areaCodeLength=Ae.length,Pe.push(at)}),Pe.length>0?(Ve.mainCode=!0,me||D.constructor.name==="Array"&&D.includes(ve[2])?(Ve.hasAreaCodes=!0,[Ve].concat(Pe)):(he=he.concat(Pe),[Ve])):[Ve]}))),he]}function U(z,D,K,fe){if(K!==null){var W=Object.keys(K),b=Object.values(K);W.forEach(function(me,he){if(fe)return z.push([me,b[he]]);var ve=z.findIndex(function(Pe){return Pe[0]===me});if(ve===-1){var Ve=[me];Ve[D]=b[he],z.push(Ve)}else z[ve][D]=b[he]})}}function ne(z,D){return D.length===0?z:z.map(function(K){var fe=D.findIndex(function(b){return b[0]===K[2]});if(fe===-1)return K;var W=D[fe];return W[1]&&(K[4]=W[1]),W[3]&&(K[5]=W[3]),W[2]&&(K[6]=W[2]),K})}var M=function z(D,K,fe,W,b,me,he,ve,Ve,Pe,Ae,at,mt,ot){c(this,z),this.filterRegions=function(te,ce){if(typeof te=="string"){var _e=te;return ce.filter(function(oe){return oe.regions.some(function(le){return le===_e})})}return ce.filter(function(oe){return te.map(function(le){return oe.regions.some(function(Je){return Je===le})}).some(function(le){return le})})},this.sortTerritories=function(te,ce){var _e=[].concat(i(te),i(ce));return _e.sort(function(oe,le){return oe.name<le.name?-1:oe.name>le.name?1:0}),_e},this.getFilteredCountryList=function(te,ce,_e){return te.length===0?ce:_e?te.map(function(oe){var le=ce.find(function(Je){return Je.iso2===oe});if(le)return le}).filter(function(oe){return oe}):ce.filter(function(oe){return te.some(function(le){return le===oe.iso2})})},this.localizeCountries=function(te,ce,_e){for(var oe=0;oe<te.length;oe++)ce[te[oe].iso2]!==void 0?te[oe].localName=ce[te[oe].iso2]:ce[te[oe].name]!==void 0&&(te[oe].localName=ce[te[oe].name]);return _e||te.sort(function(le,Je){return le.localName<Je.localName?-1:le.localName>Je.localName?1:0}),te},this.getCustomAreas=function(te,ce){for(var _e=[],oe=0;oe<ce.length;oe++){var le=JSON.parse(JSON.stringify(te));le.dialCode+=ce[oe],_e.push(le)}return _e},this.excludeCountries=function(te,ce){return ce.length===0?te:te.filter(function(_e){return!ce.includes(_e.iso2)})};var I=function(te,ce,_e){var oe=[];return U(oe,1,te,!0),U(oe,3,ce),U(oe,2,_e),oe}(ve,Ve,Pe),F=ne(JSON.parse(JSON.stringify(Y)),I),ee=ne(JSON.parse(JSON.stringify(ye)),I),xe=ge(A(F,D,at,mt,ot),2),ue=xe[0],we=xe[1];if(K){var je=ge(A(ee,D,at,mt,ot),2),Me=je[0];je[1],ue=this.sortTerritories(Me,ue)}fe&&(ue=this.filterRegions(fe,ue)),this.onlyCountries=this.localizeCountries(this.excludeCountries(this.getFilteredCountryList(W,ue,he.includes("onlyCountries")),me),Ae,he.includes("onlyCountries")),this.preferredCountries=b.length===0?[]:this.localizeCountries(this.getFilteredCountryList(b,ue,he.includes("preferredCountries")),Ae,he.includes("preferredCountries")),this.hiddenAreaCodes=this.excludeCountries(this.getFilteredCountryList(W,we),me)},Z=function(z){function D(W){var b;c(this,D),(b=function(I,F){return!F||f(F)!=="object"&&typeof F!="function"?g(I):F}(this,C(D).call(this,W))).getProbableCandidate=$()(function(I){return I&&I.length!==0?b.state.onlyCountries.filter(function(F){return T()(F.name.toLowerCase(),I.toLowerCase())},g(g(b)))[0]:null}),b.guessSelectedCountry=$()(function(I,F,ee,xe){var ue;if(b.props.enableAreaCodes===!1&&(xe.some(function(Me){if(T()(I,Me.dialCode))return ee.some(function(te){if(Me.iso2===te.iso2&&te.mainCode)return ue=te,!0}),!0}),ue))return ue;var we=ee.find(function(Me){return Me.iso2==F});if(I.trim()==="")return we;var je=ee.reduce(function(Me,te){return T()(I,te.dialCode)&&(te.dialCode.length>Me.dialCode.length||te.dialCode.length===Me.dialCode.length&&te.priority<Me.priority)?te:Me},{dialCode:"",priority:10001},g(g(b)));return je.name?je:we}),b.updateCountry=function(I){var F,ee=b.state.onlyCountries;(F=I.indexOf(0)>="0"&&I.indexOf(0)<="9"?ee.find(function(xe){return xe.dialCode==+I}):ee.find(function(xe){return xe.iso2==I}))&&F.dialCode&&b.setState({selectedCountry:F,formattedNumber:b.props.disableCountryCode?"":b.formatNumber(F.dialCode,F)})},b.scrollTo=function(I,F){if(I){var ee=b.dropdownRef;if(ee&&document.body){var xe=ee.offsetHeight,ue=ee.getBoundingClientRect().top+document.body.scrollTop,we=ue+xe,je=I,Me=je.getBoundingClientRect(),te=je.offsetHeight,ce=Me.top+document.body.scrollTop,_e=ce+te,oe=ce-ue+ee.scrollTop,le=xe/2-te/2;if(b.props.enableSearch?ce<ue+32:ce<ue)F&&(oe-=le),ee.scrollTop=oe;else if(_e>we){F&&(oe+=le);var Je=xe-te;ee.scrollTop=oe-Je}}}},b.scrollToTop=function(){var I=b.dropdownRef;I&&document.body&&(I.scrollTop=0)},b.formatNumber=function(I,F){if(!F)return I;var ee,xe=F.format,ue=b.props,we=ue.disableCountryCode,je=ue.enableAreaCodeStretch,Me=ue.enableLongNumbers,te=ue.autoFormat;if(we?((ee=xe.split(" ")).shift(),ee=ee.join(" ")):je&&F.isAreaCode?((ee=xe.split(" "))[1]=ee[1].replace(/\.+/,"".padEnd(F.areaCodeLength,".")),ee=ee.join(" ")):ee=xe,!I||I.length===0)return we?"":b.props.prefix;if(I&&I.length<2||!ee||!te)return we?I:b.props.prefix+I;var ce,_e=k()(ee,function(oe,le){if(oe.remainingText.length===0)return oe;if(le!==".")return{formattedText:oe.formattedText+le,remainingText:oe.remainingText};var Je,ar=l(Je=oe.remainingText)||o(Je)||s(),It=ar[0],$r=ar.slice(1);return{formattedText:oe.formattedText+It,remainingText:$r}},{formattedText:"",remainingText:I.split("")});return(ce=Me?_e.formattedText+_e.remainingText.join(""):_e.formattedText).includes("(")&&!ce.includes(")")&&(ce+=")"),ce},b.cursorToEnd=function(){var I=b.numberInputRef;if(document.activeElement===I){I.focus();var F=I.value.length;I.value.charAt(F-1)===")"&&(F-=1),I.setSelectionRange(F,F)}},b.getElement=function(I){return b["flag_no_".concat(I)]},b.getCountryData=function(){return b.state.selectedCountry?{name:b.state.selectedCountry.name||"",dialCode:b.state.selectedCountry.dialCode||"",countryCode:b.state.selectedCountry.iso2||"",format:b.state.selectedCountry.format||""}:{}},b.handleFlagDropdownClick=function(I){if(I.preventDefault(),b.state.showDropdown||!b.props.disabled){var F=b.state,ee=F.preferredCountries,xe=F.onlyCountries,ue=F.selectedCountry,we=b.concatPreferredCountries(ee,xe).findIndex(function(je){return je.dialCode===ue.dialCode&&je.iso2===ue.iso2});b.setState({showDropdown:!b.state.showDropdown,highlightCountryIndex:we},function(){b.state.showDropdown&&b.scrollTo(b.getElement(b.state.highlightCountryIndex))})}},b.handleInput=function(I){var F=I.target.value,ee=b.props,xe=ee.prefix,ue=ee.onChange,we=b.props.disableCountryCode?"":xe,je=b.state.selectedCountry,Me=b.state.freezeSelection;if(!b.props.countryCodeEditable){var te=xe+(je.hasAreaCodes?b.state.onlyCountries.find(function(gt){return gt.iso2===je.iso2&&gt.mainCode}).dialCode:je.dialCode);if(F.slice(0,te.length)!==te)return}if(F===xe)return ue&&ue("",b.getCountryData(),I,""),b.setState({formattedNumber:""});if(!(F.replace(/\D/g,"").length>15&&(b.props.enableLongNumbers===!1||typeof b.props.enableLongNumbers=="number"&&F.replace(/\D/g,"").length>b.props.enableLongNumbers))&&F!==b.state.formattedNumber){I.preventDefault?I.preventDefault():I.returnValue=!1;var ce=b.props.country,_e=b.state,oe=_e.onlyCountries,le=_e.selectedCountry,Je=_e.hiddenAreaCodes;if(ue&&I.persist(),F.length>0){var ar=F.replace(/\D/g,"");(!b.state.freezeSelection||le&&le.dialCode.length>ar.length)&&(je=b.props.disableCountryGuess?le:b.guessSelectedCountry(ar.substring(0,6),ce,oe,Je)||le,Me=!1),we=b.formatNumber(ar,je),je=je.dialCode?je:le}var It=I.target.selectionStart,$r=I.target.selectionStart,qr=b.state.formattedNumber,no=we.length-qr.length;b.setState({formattedNumber:we,freezeSelection:Me,selectedCountry:je},function(){no>0&&($r-=no),we.charAt(we.length-1)==")"?b.numberInputRef.setSelectionRange(we.length-1,we.length-1):$r>0&&qr.length>=we.length?b.numberInputRef.setSelectionRange($r,$r):It<qr.length&&b.numberInputRef.setSelectionRange(It,It),ue&&ue(we.replace(/[^0-9]+/g,""),b.getCountryData(),I,we)})}},b.handleInputClick=function(I){b.setState({showDropdown:!1}),b.props.onClick&&b.props.onClick(I,b.getCountryData())},b.handleDoubleClick=function(I){var F=I.target.value.length;I.target.setSelectionRange(0,F)},b.handleFlagItemClick=function(I,F){var ee=b.state.selectedCountry,xe=b.state.onlyCountries.find(function(Me){return Me==I});if(xe){var ue=b.state.formattedNumber.replace(" ","").replace("(","").replace(")","").replace("-",""),we=ue.length>1?ue.replace(ee.dialCode,xe.dialCode):xe.dialCode,je=b.formatNumber(we.replace(/\D/g,""),xe);b.setState({showDropdown:!1,selectedCountry:xe,freezeSelection:!0,formattedNumber:je,searchValue:""},function(){b.cursorToEnd(),b.props.onChange&&b.props.onChange(je.replace(/[^0-9]+/g,""),b.getCountryData(),F,je)})}},b.handleInputFocus=function(I){b.numberInputRef&&b.numberInputRef.value===b.props.prefix&&b.state.selectedCountry&&!b.props.disableCountryCode&&b.setState({formattedNumber:b.props.prefix+b.state.selectedCountry.dialCode},function(){b.props.jumpCursorToEnd&&setTimeout(b.cursorToEnd,0)}),b.setState({placeholder:""}),b.props.onFocus&&b.props.onFocus(I,b.getCountryData()),b.props.jumpCursorToEnd&&setTimeout(b.cursorToEnd,0)},b.handleInputBlur=function(I){I.target.value||b.setState({placeholder:b.props.placeholder}),b.props.onBlur&&b.props.onBlur(I,b.getCountryData())},b.handleInputCopy=function(I){if(b.props.copyNumbersOnly){var F=window.getSelection().toString().replace(/[^0-9]+/g,"");I.clipboardData.setData("text/plain",F),I.preventDefault()}},b.getHighlightCountryIndex=function(I){var F=b.state.highlightCountryIndex+I;return F<0||F>=b.state.onlyCountries.length+b.state.preferredCountries.length?F-I:b.props.enableSearch&&F>b.getSearchFilteredCountries().length?0:F},b.searchCountry=function(){var I=b.getProbableCandidate(b.state.queryString)||b.state.onlyCountries[0],F=b.state.onlyCountries.findIndex(function(ee){return ee==I})+b.state.preferredCountries.length;b.scrollTo(b.getElement(F),!0),b.setState({queryString:"",highlightCountryIndex:F})},b.handleKeydown=function(I){var F=b.props.keys,ee=I.target.className;if(ee.includes("selected-flag")&&I.which===F.ENTER&&!b.state.showDropdown)return b.handleFlagDropdownClick(I);if(ee.includes("form-control")&&(I.which===F.ENTER||I.which===F.ESC))return I.target.blur();if(b.state.showDropdown&&!b.props.disabled&&(!ee.includes("search-box")||I.which===F.UP||I.which===F.DOWN||I.which===F.ENTER||I.which===F.ESC&&I.target.value==="")){I.preventDefault?I.preventDefault():I.returnValue=!1;var xe=function(ue){b.setState({highlightCountryIndex:b.getHighlightCountryIndex(ue)},function(){b.scrollTo(b.getElement(b.state.highlightCountryIndex),!0)})};switch(I.which){case F.DOWN:xe(1);break;case F.UP:xe(-1);break;case F.ENTER:b.props.enableSearch?b.handleFlagItemClick(b.getSearchFilteredCountries()[b.state.highlightCountryIndex]||b.getSearchFilteredCountries()[0],I):b.handleFlagItemClick([].concat(i(b.state.preferredCountries),i(b.state.onlyCountries))[b.state.highlightCountryIndex],I);break;case F.ESC:case F.TAB:b.setState({showDropdown:!1},b.cursorToEnd);break;default:(I.which>=F.A&&I.which<=F.Z||I.which===F.SPACE)&&b.setState({queryString:b.state.queryString+String.fromCharCode(I.which)},b.state.debouncedQueryStingSearcher)}}},b.handleInputKeyDown=function(I){var F=b.props,ee=F.keys,xe=F.onEnterKeyPress,ue=F.onKeyDown;I.which===ee.ENTER&&xe&&xe(I),ue&&ue(I)},b.handleClickOutside=function(I){b.dropdownRef&&!b.dropdownContainerRef.contains(I.target)&&b.state.showDropdown&&b.setState({showDropdown:!1})},b.handleSearchChange=function(I){var F=I.currentTarget.value,ee=b.state,xe=ee.preferredCountries,ue=ee.selectedCountry,we=0;if(F===""&&ue){var je=b.state.onlyCountries;we=b.concatPreferredCountries(xe,je).findIndex(function(Me){return Me==ue}),setTimeout(function(){return b.scrollTo(b.getElement(we))},100)}b.setState({searchValue:F,highlightCountryIndex:we})},b.concatPreferredCountries=function(I,F){return I.length>0?i(new Set(I.concat(F))):F},b.getDropdownCountryName=function(I){return I.localName||I.name},b.getSearchFilteredCountries=function(){var I=b.state,F=I.preferredCountries,ee=I.onlyCountries,xe=I.searchValue,ue=b.props.enableSearch,we=b.concatPreferredCountries(F,ee),je=xe.trim().toLowerCase().replace("+","");if(ue&&je){if(/^\d+$/.test(je))return we.filter(function(ce){var _e=ce.dialCode;return["".concat(_e)].some(function(oe){return oe.toLowerCase().includes(je)})});var Me=we.filter(function(ce){var _e=ce.iso2;return["".concat(_e)].some(function(oe){return oe.toLowerCase().includes(je)})}),te=we.filter(function(ce){var _e=ce.name,oe=ce.localName;return ce.iso2,["".concat(_e),"".concat(oe||"")].some(function(le){return le.toLowerCase().includes(je)})});return b.scrollToTop(),i(new Set([].concat(Me,te)))}return we},b.getCountryDropdownList=function(){var I=b.state,F=I.preferredCountries,ee=I.highlightCountryIndex,xe=I.showDropdown,ue=I.searchValue,we=b.props,je=we.disableDropdown,Me=we.prefix,te=b.props,ce=te.enableSearch,_e=te.searchNotFound,oe=te.disableSearchIcon,le=te.searchClass,Je=te.searchStyle,ar=te.searchPlaceholder,It=te.autocompleteSearch,$r=b.getSearchFilteredCountries().map(function(gt,Lo){var Di=ee===Lo,Wc=H()({country:!0,preferred:gt.iso2==="us"||gt.iso2==="gb",active:gt.iso2==="us",highlight:Di}),zi="flag ".concat(gt.iso2);return v.a.createElement("li",Object.assign({ref:function(Ni){return b["flag_no_".concat(Lo)]=Ni},key:"flag_no_".concat(Lo),"data-flag-key":"flag_no_".concat(Lo),className:Wc,"data-dial-code":"1",tabIndex:je?"-1":"0","data-country-code":gt.iso2,onClick:function(Ni){return b.handleFlagItemClick(gt,Ni)},role:"option"},Di?{"aria-selected":!0}:{}),v.a.createElement("div",{className:zi}),v.a.createElement("span",{className:"country-name"},b.getDropdownCountryName(gt)),v.a.createElement("span",{className:"dial-code"},gt.format?b.formatNumber(gt.dialCode,gt):Me+gt.dialCode))}),qr=v.a.createElement("li",{key:"dashes",className:"divider"});F.length>0&&(!ce||ce&&!ue.trim())&&$r.splice(F.length,0,qr);var no=H()(n({"country-list":!0,hide:!xe},b.props.dropdownClass,!0));return v.a.createElement("ul",{ref:function(gt){return!ce&&gt&&gt.focus(),b.dropdownRef=gt},className:no,style:b.props.dropdownStyle,role:"listbox",tabIndex:"0"},ce&&v.a.createElement("li",{className:H()(n({search:!0},le,le))},!oe&&v.a.createElement("span",{className:H()(n({"search-emoji":!0},"".concat(le,"-emoji"),le)),role:"img","aria-label":"Magnifying glass"},"🔎"),v.a.createElement("input",{className:H()(n({"search-box":!0},"".concat(le,"-box"),le)),style:Je,type:"search",placeholder:ar,autoFocus:!0,autoComplete:It?"on":"off",value:ue,onChange:b.handleSearchChange})),$r.length>0?$r:v.a.createElement("li",{className:"no-entries-message"},v.a.createElement("span",null,_e)))};var me,he=new M(W.enableAreaCodes,W.enableTerritories,W.regions,W.onlyCountries,W.preferredCountries,W.excludeCountries,W.preserveOrder,W.masks,W.priority,W.areaCodes,W.localization,W.prefix,W.defaultMask,W.alwaysDefaultMask),ve=he.onlyCountries,Ve=he.preferredCountries,Pe=he.hiddenAreaCodes,Ae=W.value?W.value.replace(/\D/g,""):"";me=W.disableInitialCountryGuess?0:Ae.length>1?b.guessSelectedCountry(Ae.substring(0,6),W.country,ve,Pe)||0:W.country&&ve.find(function(I){return I.iso2==W.country})||0;var at,mt=Ae.length<2&&me&&!T()(Ae,me.dialCode)?me.dialCode:"";at=Ae===""&&me===0?"":b.formatNumber((W.disableCountryCode?"":mt)+Ae,me.name?me:void 0);var ot=ve.findIndex(function(I){return I==me});return b.state={showDropdown:W.showDropdown,formattedNumber:at,onlyCountries:ve,preferredCountries:Ve,hiddenAreaCodes:Pe,selectedCountry:me,highlightCountryIndex:ot,queryString:"",freezeSelection:!1,debouncedQueryStingSearcher:h()(b.searchCountry,250),searchValue:""},b}var K,fe;return function(W,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function");W.prototype=Object.create(b&&b.prototype,{constructor:{value:W,writable:!0,configurable:!0}}),b&&x(W,b)}(D,z),K=D,(fe=[{key:"componentDidMount",value:function(){document.addEventListener&&this.props.enableClickOutside&&document.addEventListener("mousedown",this.handleClickOutside),this.props.onMount&&this.props.onMount(this.state.formattedNumber.replace(/[^0-9]+/g,""),this.getCountryData(),this.state.formattedNumber)}},{key:"componentWillUnmount",value:function(){document.removeEventListener&&this.props.enableClickOutside&&document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"componentDidUpdate",value:function(W,b,me){W.country!==this.props.country?this.updateCountry(this.props.country):W.value!==this.props.value&&this.updateFormattedNumber(this.props.value)}},{key:"updateFormattedNumber",value:function(W){if(W===null)return this.setState({selectedCountry:0,formattedNumber:""});var b=this.state,me=b.onlyCountries,he=b.selectedCountry,ve=b.hiddenAreaCodes,Ve=this.props,Pe=Ve.country,Ae=Ve.prefix;if(W==="")return this.setState({selectedCountry:he,formattedNumber:""});var at,mt,ot=W.replace(/\D/g,"");if(he&&T()(W,Ae+he.dialCode))mt=this.formatNumber(ot,he),this.setState({formattedNumber:mt});else{var I=(at=this.props.disableCountryGuess?he:this.guessSelectedCountry(ot.substring(0,6),Pe,me,ve)||he)&&T()(ot,Ae+at.dialCode)?at.dialCode:"";mt=this.formatNumber((this.props.disableCountryCode?"":I)+ot,at||void 0),this.setState({selectedCountry:at,formattedNumber:mt})}}},{key:"render",value:function(){var W,b,me,he=this,ve=this.state,Ve=ve.onlyCountries,Pe=ve.selectedCountry,Ae=ve.showDropdown,at=ve.formattedNumber,mt=ve.hiddenAreaCodes,ot=this.props,I=ot.disableDropdown,F=ot.renderStringAsFlag,ee=ot.isValid,xe=ot.defaultErrorMessage,ue=ot.specialLabel;if(typeof ee=="boolean")b=ee;else{var we=ee(at.replace(/\D/g,""),Pe,Ve,mt);typeof we=="boolean"?(b=we)===!1&&(me=xe):(b=!1,me=we)}var je=H()((n(W={},this.props.containerClass,!0),n(W,"react-tel-input",!0),W)),Me=H()({arrow:!0,up:Ae}),te=H()(n({"form-control":!0,"invalid-number":!b,open:Ae},this.props.inputClass,!0)),ce=H()({"selected-flag":!0,open:Ae}),_e=H()(n({"flag-dropdown":!0,"invalid-number":!b,open:Ae},this.props.buttonClass,!0)),oe="flag ".concat(Pe&&Pe.iso2);return v.a.createElement("div",{className:"".concat(je," ").concat(this.props.className),style:this.props.style||this.props.containerStyle,onKeyDown:this.handleKeydown},ue&&v.a.createElement("div",{className:"special-label"},ue),me&&v.a.createElement("div",{className:"invalid-number-message"},me),v.a.createElement("input",Object.assign({className:te,style:this.props.inputStyle,onChange:this.handleInput,onClick:this.handleInputClick,onDoubleClick:this.handleDoubleClick,onFocus:this.handleInputFocus,onBlur:this.handleInputBlur,onCopy:this.handleInputCopy,value:at,onKeyDown:this.handleInputKeyDown,placeholder:this.props.placeholder,disabled:this.props.disabled,type:"tel"},this.props.inputProps,{ref:function(le){he.numberInputRef=le,typeof he.props.inputProps.ref=="function"?he.props.inputProps.ref(le):typeof he.props.inputProps.ref=="object"&&(he.props.inputProps.ref.current=le)}})),v.a.createElement("div",{className:_e,style:this.props.buttonStyle,ref:function(le){return he.dropdownContainerRef=le}},F?v.a.createElement("div",{className:ce},F):v.a.createElement("div",{onClick:I?void 0:this.handleFlagDropdownClick,className:ce,title:Pe?"".concat(Pe.localName||Pe.name,": + ").concat(Pe.dialCode):"",tabIndex:I?"-1":"0",role:"button","aria-haspopup":"listbox","aria-expanded":!!Ae||void 0},v.a.createElement("div",{className:oe},!I&&v.a.createElement("div",{className:Me}))),Ae&&this.getCountryDropdownList()))}}])&&u(K.prototype,fe),D}(v.a.Component);Z.defaultProps={country:"",value:"",onlyCountries:[],preferredCountries:[],excludeCountries:[],placeholder:"1 (702) 123-4567",searchPlaceholder:"search",searchNotFound:"No entries to show",flagsImagePath:"./flags.png",disabled:!1,containerStyle:{},inputStyle:{},buttonStyle:{},dropdownStyle:{},searchStyle:{},containerClass:"",inputClass:"",buttonClass:"",dropdownClass:"",searchClass:"",className:"",autoFormat:!0,enableAreaCodes:!1,enableTerritories:!1,disableCountryCode:!1,disableDropdown:!1,enableLongNumbers:!1,countryCodeEditable:!0,enableSearch:!1,disableSearchIcon:!1,disableInitialCountryGuess:!1,disableCountryGuess:!1,regions:"",inputProps:{},localization:{},masks:null,priority:null,areaCodes:null,preserveOrder:[],defaultMask:"... ... ... ... ..",alwaysDefaultMask:!1,prefix:"+",copyNumbersOnly:!0,renderStringAsFlag:"",autocompleteSearch:!1,jumpCursorToEnd:!0,enableAreaCodeStretch:!1,enableClickOutside:!0,showDropdown:!1,isValid:!0,defaultErrorMessage:"",specialLabel:"Phone",onEnterKeyPress:null,keys:{UP:38,DOWN:40,RIGHT:39,LEFT:37,ENTER:13,ESC:27,PLUS:43,A:65,Z:90,SPACE:32,TAB:9}},t.default=Z}]);const g7=t1(m7);function y7(e,t,r){const n=r.get(String(e.key)),o=u=>{t.set(d=>(u?d[e.key]=u:delete d[e.key],d))},i={borderColor:m.colorGrey[2],width:e.filter.width,borderRadius:"0.5rem"},l={fontSize:"1rem",color:m.colorGrey[3],backgroundColor:m.colorGrey[8],borderColor:m.colorGrey[2],width:"100%",borderRadius:"0.5rem"},s={backgroundColor:m.colorGrey[7],borderColor:m.colorGrey[2],borderTopLeftRadius:"0.5rem",borderBottomLeftRadius:"0.5rem"},c={backgroundColor:m.colorGrey[7]};return a.jsx(g7,{country:"br",containerClass:"phone_input_container",dropdownClass:"phone_input_dropdown",buttonClass:"phone_input_button",value:n,onChange:o,containerStyle:i,inputStyle:l,buttonStyle:s,dropdownStyle:c})}const v7=Q.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    row-gap: 0.5rem;
    flex-wrap: wrap;
    border: 1px solid var(--color-grey-2);
    border-radius: 0.5rem;
    padding: 0.5rem;
`,Qh=({title:e,onChange:t,defaultValue:r,...n})=>{const o=P({min:(r==null?void 0:r.min)||null,max:(r==null?void 0:r.max)||null});j.useEffect(()=>{t&&t(o.value)},[o.value]);const i=({target:{valueAsDate:s}})=>{o.value.max&&s&&s>o.value.max?o.set(c=>({min:c.max,max:s})):o.set(c=>({...c,min:s}))},l=({target:{valueAsDate:s}})=>{o.value.min&&s&&s<o.value.min?o.set(c=>({min:s,max:c.min})):o.set(c=>({...c,max:s}))};return a.jsxs(v7,{children:[a.jsxs("h3",{style:{width:"100%"},children:[" ",e," "]}),a.jsx(V,{...n,leftIcon:a.jsx(iC,{}),rightIcon:null,type:"date",onChange:i,value:o.value.min?o.value.min.toISOString().split("T")[0]:""}),a.jsx(V,{...n,leftIcon:a.jsx(oC,{}),rightIcon:null,type:"date",onChange:l,value:o.value.max?o.value.max.toISOString().split("T")[0]:""})]})},_t={$color:m.colorGrey[3],$borderColor:m.colorGrey[5],$padding:[.375,.75],$focusColor:m.colorGrey[0],$fontSize:.875,$width:"100%",leftIcon:null,rightIcon:null},Jh={..._t,$width:"calc(50% - 0.5rem)"},ql={..._t,$focusColor:void 0,leftIcon:null,rightIcon:a.jsx(_i,{})},x7={...ql,$width:"calc(50% -0.5rem)"};function w7(e,t,r){const n=r.get(String(e.key)),o={min:n&&new Date(n.split("_")[0])||null,max:n&&new Date(n.split("_")[1])||null},i=l=>{t.set(s=>{const{min:c,max:u}=l,d=f=>{if(f){const[g,C,x]=[String(f.getUTCFullYear()),f.getUTCMonth()+1,f.getUTCDate()],w=C>=10?String(C):`0${C}`,v=x>=10?String(x):`0${x}`;return`${g}-${w}-${v}`}return""};return c||u?s[e.key]=`${d(c)}_${d(u)}`:delete s[e.key],s})};return a.jsx(Qh,{...Jh,title:e.header||e.key,onChange:i,defaultValue:o})}function C7({tableName:e,filtersModalState:t,setSearchParams:r,searchParams:n,$modalFiltersWidth:o,columns:i,rowsState:l}){const s=Array.from(new Set(i.filter(u=>u.filter).map(u=>u.filter.section))),c=P({});return a.jsx(bt,{title:`Filtrar ${e.toLowerCase()}`,modalState:t,children:a.jsxs(d7,{$modalFiltersWidth:o,children:[a.jsx("div",{children:s.map(u=>a.jsxs("div",{children:[u&&a.jsxs("h3",{children:[" ",u," "]}),a.jsx("div",{children:i.filter(d=>d.filter&&d.filter.section===u).map(d=>d.filter.type==="input"?h7(d,c,n):d.filter.type==="select"?f7(d,l,c,n):d.filter.type==="multi-select"?p7(d,c,n):d.filter.type==="phone"?y7(d,c,n):d.filter.type==="date-range"&&w7(d,c,n))})]}))}),a.jsxs("div",{children:[a.jsxs(ft,{onClick:()=>{c.reset(),r({}),t.reset()},children:[a.jsx(Vw,{})," Limpar filtros"]}),a.jsxs(ft,{onClick:()=>{r(c.value),t.reset()},children:[a.jsx(tv,{})," Filtrar"]})]})]})})}const S7=Q.header`
    grid-area: options;
    padding: 0.75rem;
    background-color: var(--color-grey-7);
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 50rem) {
        flex-direction: column;
        gap: 1rem;
    }

    >div:nth-child(1) {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding-right: 1rem;
        min-width: max-content;

        >button {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            color: var(--color-grey-2);

            >svg {
                pointer-events: none;
            }

            &:hover {
                transform: scale(1.5);
            }

            @media (max-width: 50rem) {
                display: none;
            }
        }
    }
    >div:nth-child(2) {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-wrap: wrap;
        gap: 1rem;

        >.auto-update {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        @media (max-width: 50rem) {
            justify-content: center;
            flex-wrap: wrap;

            >*:not(button) {
                width: 100%;
            }

            >button {
                width: calc(50% - 0.5rem);
            }

            >button:nth-child(4) {
                width: 100%;
            }
        }
    }
`;function $7({enableAutoUpdate:e,rowsState:t,modalState:r,loadingState:n,displayColumnsState:o,displayActionsState:i,isMaximizedState:l,autoUpdateState:s,autoUpdateIntervalState:c,totalPages:u,totalRowsCount:d,haveActions:f,tableName:g,tableRef:C,columns:x,searchParams:w,setSearchParams:v,$modalFiltersWidth:y,$fontSize:h}){const p=()=>r.set(a.jsx(u7,{modalState:r,tableName:g,tableRef:C})),$=()=>r.set(a.jsx(C7,{$modalFiltersWidth:y,columns:x,filtersModalState:r,setSearchParams:v,rowsState:t,tableName:g,searchParams:w})),E=f?[{name:"Ações",value:"actions"},...x.map(A=>({name:A.header||String(A.key),value:String(A.key)}))]:x.map(A=>({name:A.header||String(A.key),value:String(A.key)})),k=x.map(A=>({name:A.header||String(A.key),value:String(A.key)})),O=A=>{i.set(A.some(U=>U==="actions")),o.set(x.filter(U=>A.includes(String(U.key))))},T=A=>{v(U=>(U.set("ORDENAR_POR",A||""),U))},J=()=>v(A=>(A.set("perPage",String(d)),A)),H=()=>l.set(A=>!A),ge=x.filter(A=>A.filter).length,ye=`Filtros (${x.filter(A=>A.filter&&w.get(String(A.key))).length}/${ge})`,N=x.some(A=>!!A.filter);return a.jsxs(S7,{children:[a.jsxs("div",{children:[a.jsx("button",{title:"Maximizar tabela",onClick:H,children:l.value?a.jsx(cC,{}):a.jsx(Yw,{})}),d?a.jsxs("span",{children:[" ",d.toLocaleString("pt-BR")," ",d>1?"registros encontrados":"registro encontrado"," "]}):a.jsx("span",{children:" Nenhum registro encontardo "})]}),a.jsxs("div",{children:[e&&a.jsx(a.Fragment,{children:a.jsxs("div",{className:"auto-update",children:[a.jsx("span",{children:"Atualizar"}),a.jsx("input",{type:"checkbox",onChange:A=>s.set(A.target.checked)}),s.value&&a.jsx(Te,{...x7,$focusColor:m.colorGrey[0],placeholder:"Intervalo",$width:"10rem",options:[{value:5,name:"5 segundos"},{value:15,name:"15 segundos"},{value:30,name:"30 segundos"},{value:60,name:"1 minuto"},{value:300,name:"5 minutos"},{value:600,name:"10 minutos"}],defaultValue:{value:5,name:"5 segundos"},onChange:A=>c.set(A)})]})}),a.jsx(V6,{searchParams:w,setSearchParams:v,totalPages:u}),a.jsxs(Mu,{onClick:J,children:[a.jsx(ev,{}),a.jsx("p",{children:" Mostrar todos "})]}),a.jsxs(Mu,{onClick:p,children:[a.jsx(eC,{}),a.jsx("p",{children:" Exportar "})]}),N&&a.jsxs(Mu,{onClick:$,disabled:n.value,children:[a.jsx(tv,{}),a.jsxs("p",{children:[" ",ye," "]})]}),a.jsx(Te,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[2],$width:"10rem",$padding:[.375,.375],$fontSize:h,leftIcon:a.jsx(mC,{}),onChange:T,options:k,defaultValue:k.find(A=>A.value===w.get("ORDENAR_POR")),placeholder:"Ordenar por",disabled:n.value}),a.jsx(Bl,{$color:m.colorGrey[3],$borderColor:m.colorGrey[2],$padding:[.375,.375],$fontSize:h,$width:"12rem",leftIcon:a.jsx(gC,{}),rightIcon:a.jsx(_i,{}),onChange:O,options:E,placeholder:"Colunas",defaultValue:E})]})]})}function ia({columns:e,actions:t,tableName:r,requestEndpoint:n,enableAutoUpdate:o,service:i,...l}){const s=j.useRef(null),[c,u]=O4(),d=P([]),f=P(!1),g=P([...e]),C=P(!0),x=P(""),w=P(1),v=P(0),y=P(!1),h=P(!1),p=P(5);j.useEffect(()=>{de({method:"get",service:i,endpoint:n,params:c,onSuccess:E=>{d.set(E.data),w.set(E.totalPages),v.set(E.count)},loadingState:f})},[c]),j.useEffect(()=>{let E=null;return h.value&&(E=setInterval(()=>{console.log(new Date().toLocaleString(),"Auto-update..."),de({service:i,method:"get",endpoint:n,params:c,onSuccess:k=>{d.set(k.data),w.set(k.totalPages),v.set(k.count)},loadingState:f})},(p.value||60*5)*1e3)),()=>{E&&clearInterval(E)}},[c,h.value,p.value]);const $=(E,k)=>String(E[k]);return a.jsxs(G6,{$columns:g.value,$isMaximized:y.value,$haveActions:!!t,...l,children:[a.jsx($7,{$fontSize:l.$fontSize,$modalFiltersWidth:l.$modalFiltersWidth,$tableHeight:l.$tableHeight,$tableWidth:l.$tableWidth,columns:e,displayActionsState:C,displayColumnsState:g,loadingState:f,modalState:x,isMaximizedState:y,totalPages:w.value,totalRowsCount:v.value,rowsState:d,haveActions:!!t,tableName:r,tableRef:s,setSearchParams:u,searchParams:c,enableAutoUpdate:o||!1,autoUpdateState:h,autoUpdateIntervalState:p}),!f.value&&a.jsxs("table",{ref:s,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[t&&C.value&&a.jsx("th",{children:"Ações"}),g.value.map((E,k)=>a.jsx("th",{children:E.header||String(E.key)},`column_${k}`))]})}),a.jsx("tbody",{children:d.value.map((E,k)=>a.jsxs("tr",{children:[C.value&&t&&a.jsxs("td",{children:[" ",t(E)," "]}),g.value.map((O,T)=>a.jsx("td",{children:O.format?O.format(E):$(E,O.key)},`row_${k}_column_${T}`))]},`row_${k}`))})]}),f.value&&a.jsx(Mc,{}),x.value]})}const b7=[{key:"CODIGO",header:"Código",width:7,primarykey:!0,alignContent:"start"},{key:"DESCRICAO",header:"Nome/Título",width:24},{key:"INATIVOS_RECENTES",header:"Dias p/ inativo recente",width:12},{key:"INATIVOS_ANTIGOS",header:"Dias p/ inativo antigo",width:12},{key:"EMAIL",header:"Email p/ manifesto",width:24},{key:"CONTATO_MAIL",header:"Contato p/ manifesto",width:24}],E7=()=>a.jsx(ia,{$tableHeight:"100%",$tableWidth:"100%",$fontSize:.75,columns:b7,tableName:"Unidades",$modalFiltersWidth:41,actions:()=>[],requestEndpoint:"/units",service:"customers"}),j7=()=>a.jsx(a.Fragment,{children:a.jsx(E7,{})}),k7=Q.li`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--color-grey-2);
    padding: 1rem;
    background-color: var(--color-grey-8);
    width: 100%;
    transition: 0.3s ease-in-out;

    &:nth-child(odd) {
        background-color: var(--color-grey-7);
    }

    &:hover {
        background-color: var(--color-grey-6);
    }

    >div:nth-child(1) {
        display: flex;
        align-items: center;
        gap: 1rem;

        >span:nth-child(1) {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
    }

    >div:nth-child(2) {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
`,O7=Q.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	width: 18rem;

	> button {
		font-weight: 500;
		padding: 0.5rem 2rem;
		border-radius: 0.25rem;
		border: 1px solid;
		background-color: var(--color-primary);
		border-color: var(--color-primary);
		color: white;

		&:hover {
			filter: opacity(0.75);
		}
	}
`;function _7({brand:e,update:t}){const{modalState:r}=j.useContext(Qe),n=P(e.DESCRICAO);async function o(){de({endpoint:`/brands/${e.CODIGO}`,requestData:{DESCRICAO:n.value.trim()},method:"patch",service:"customers",onSuccess:i=>{Ce.success("Marca atualizada com sucesso"),r.reset(),t(i.data)}})}return a.jsx(bt,{modalState:r,title:"Editar Marca",children:a.jsxs(O7,{children:[a.jsx(V,{..._t,placeholder:"Digite o nome da marca",value:n.value,onChange:i=>{n.set(i.target.value)}}),a.jsx("button",{onClick:o,children:"Confirmar"})]})})}const I7=Q.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	width: 18rem;

	> button {
		font-weight: 500;
		padding: 0.5rem 2rem;
		border-radius: 0.25rem;
		border: 1px solid;
		background-color: var(--color-primary);
		border-color: var(--color-primary);
		color: white;

		&:disabled {
			filter: opacity(0.25);
		}

		&:hover {
			filter: opacity(0.75);
		}
	}
`;function R7({brand:e,updateOnDelete:t}){const{modalState:r}=j.useContext(Qe),n=P(""),o=P(!1);async function i(){de({endpoint:`/brands/${e.CODIGO}`,method:"delete",service:"customers",onSuccess:()=>{Ce.success("Marca deletada com sucesso"),r.reset(),t(e)}})}return a.jsx(bt,{modalState:r,title:"Remover Marca",children:a.jsxs(I7,{children:[a.jsx(V,{..._t,placeholder:`Digite '${e.DESCRICAO}' para confirmar`,value:n.value,onChange:l=>{n.set(l.target.value),l.target.value===e.DESCRICAO?o.set(!0):o.value!=!1&&o.set(!1)}}),o.value&&a.jsx("button",{onClick:i,children:"Confirmar"})||a.jsx("button",{disabled:!0,children:"Confirmar"})]})})}const T7=({brandData:e,updateOnEdit:t,updateOnDelete:r})=>{const{modalState:n}=j.useContext(Qe);return a.jsxs(k7,{children:[a.jsxs("div",{children:[a.jsxs("span",{children:[a.jsx(Dr,{}),e.CODIGO]}),a.jsxs("h2",{children:[" ",e.DESCRICAO]})]}),a.jsxs("div",{children:[a.jsx(pt,{onClick:()=>{n.set(a.jsx(_7,{brand:e,update:t}))},children:a.jsx("a",{children:" Editar "})}),a.jsx(pt,{onClick:()=>{n.set(a.jsx(R7,{brand:e,updateOnDelete:r}))},children:a.jsx("a",{children:" Remover "})})]})]})},A7=Q.div`
	box-sizing: border-box;
	padding: 1rem;
	max-height: calc(100% - 4rem);
	overflow: auto;

	> form {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-end;
		gap: 1rem;
		padding: 1rem 0;

		> div {
			display: flex;
			flex-direction: column;
			gap: 0.25rem;
		}

		> button {
			font-size: "1rem";
			height: "1.25rem";
			box-sizing: "content-box";
			width: max-content;
		}
		> button:disabled {
			opacity: 0.35;
		}
	}

	> ul {
		box-sizing: border-box;
		width: 100%;
		display: flex;
		flex-direction: column;
		max-height: calc(100% - 7rem);
		overflow: auto;

		border: 2px solid var(--color-grey-6-h);
		background-color: var(--color-grey-7);

		height: calc(100vh - 16rem);
	}
`,D7=()=>{const e=P([]),t=P({DESCRICAO:"",UNIDADE:null,COD_ERPMARCA:null}),r=P([{CODIGO:1,DESCRICAO:"TESTE1"},{CODIGO:2,DESCRICAO:"TESTE2"}]),n=P(!0),o=c=>{e.set(u=>u.map(d=>d.CODIGO===c.CODIGO?c:d))},i=c=>{e.set(u=>u.filter(d=>d.CODIGO!=c.CODIGO))},l=()=>{var u;const c={...t.value,DESCRICAO:(u=t.value.DESCRICAO)==null?void 0:u.trim()};de({endpoint:"/brands",method:"post",service:"customers",requestData:c,onSuccess:d=>{const f=[...e.value,d.data];e.set(f)}})};j.useEffect(()=>{de({endpoint:"/brands",method:"get",service:"customers",onSuccess:c=>{e.set(c.data)}})},[]);const s=c=>{t.set(u=>({...u,DESCRICAO:c.target.value})),c.target.value.trim().length&&n.value?n.set(!1):!n.value&&!c.target.value.trim().length&&n.set(!0)};return a.jsxs(A7,{children:[a.jsxs("h2",{children:[" Clientes ","->"," Marcas "]}),a.jsxs("form",{children:[a.jsxs("div",{style:{width:"20rem"},children:[a.jsx("h3",{children:" Nome da Marca "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.5,1],$fontSize:1,$width:"100%",leftIcon:null,rightIcon:null,onChange:c=>s(c),value:t.value.DESCRICAO,placeholder:"Digite o nome da marca aqui"})]}),a.jsxs("div",{style:{width:"20rem"},children:[a.jsx("h3",{children:" Unidade "}),a.jsx(Te,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.5,1],$fontSize:1,$width:"100%",onChange:c=>t.set(u=>({...u,UNIDADE:c})),options:r.value.map(c=>({name:c.DESCRICAO,value:c.CODIGO})),placeholder:"Unidade"})]}),n.value&&a.jsxs(ft,{disabled:!0,children:[a.jsx(lr,{}),"Adicionar Marca"]})||a.jsxs(ft,{type:"button",onClick:()=>l(),children:[a.jsx(lr,{}),"Adicionar Marca"]})]}),a.jsx("ul",{children:e.value.map(c=>a.jsx(T7,{brandData:c,updateOnEdit:o,updateOnDelete:i},`brand_${c.CODIGO}`))})]})},z7=Q.li`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--color-grey-2);
    padding: 1rem;
    background-color: var(--color-grey-8);
    width: 100%;
    transition: 0.3s ease-in-out;

    &:nth-child(odd) {
        background-color: var(--color-grey-7);
    }

    &:hover {
        background-color: var(--color-grey-6);
    }
    
    >div:nth-child(1) {
        display: flex;
        align-items: center;
        gap: 1rem;

        >span:nth-child(1) {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
    }

    >div:nth-child(2) {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
`,N7=Q.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	width: 18rem;

	> button {
		font-weight: 500;
		padding: 0.5rem 2rem;
		border-radius: 0.25rem;
		border: 1px solid;
		background-color: var(--color-primary);
		border-color: var(--color-primary);
		color: white;

		&:hover {
			filter: opacity(0.75);
		}
	}
`;function P7({group:e,update:t}){const{modalState:r}=j.useContext(Qe),n=P(e.DESCRICAO);async function o(){de({endpoint:`/customer-groups/${e.CODIGO}`,requestData:{DESCRICAO:n.value.trim()},method:"patch",service:"customers",onSuccess:i=>{Ce.success("Grupo atualizado com sucesso"),r.reset(),t(i.data)}})}return a.jsx(bt,{modalState:r,title:"Editar Grupo",children:a.jsxs(N7,{children:[a.jsx(V,{..._t,placeholder:"Digite o nome do grupo",value:n.value,onChange:i=>{n.set(i.target.value)}}),a.jsx("button",{onClick:o,children:"Confirmar"})]})})}const M7=Q.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	width: 18rem;

	> button {
		font-weight: 500;
		padding: 0.5rem 2rem;
		border-radius: 0.25rem;
		border: 1px solid;
		background-color: var(--color-primary);
		border-color: var(--color-primary);
		color: white;

		&:disabled {
			filter: opacity(0.25);
		}

		&:hover {
			filter: opacity(0.75);
		}
	}
`;function L7({group:e,updateOnDelete:t}){const{modalState:r}=j.useContext(Qe),n=P(""),o=P(!1);async function i(){de({endpoint:`/customer-groups/${e.CODIGO}`,method:"delete",service:"customers",onSuccess:()=>{Ce.success("Grupo deletado com sucesso"),r.reset(),t(e)}})}return a.jsx(bt,{modalState:r,title:"Remover Grupo",children:a.jsxs(M7,{children:[a.jsx(V,{..._t,placeholder:`Digite '${e.DESCRICAO}' para confirmar`,value:n.value,onChange:l=>{n.set(l.target.value),l.target.value===e.DESCRICAO?o.set(!0):o.value!=!1&&o.set(!1)}}),o.value&&a.jsx("button",{onClick:i,children:"Confirmar"})||a.jsx("button",{disabled:!0,children:"Confirmar"})]})})}const F7=({groupData:e,updateOnEdit:t,updateOnDelete:r})=>{const{modalState:n}=j.useContext(Qe);return a.jsxs(z7,{children:[a.jsxs("div",{children:[a.jsxs("span",{children:[a.jsx(Dr,{}),e.CODIGO]}),a.jsxs("h2",{children:[" ",e.DESCRICAO," "]})]}),a.jsxs("div",{children:[a.jsx(pt,{onClick:()=>{n.set(a.jsx(P7,{group:e,update:t}))},children:a.jsx("a",{children:" Editar "})}),a.jsx(pt,{onClick:()=>{n.set(a.jsx(L7,{group:e,updateOnDelete:r}))},children:a.jsx("a",{children:" Remover "})}),a.jsx(pt,{children:a.jsx(Po,{to:`/clientes?GRUPO=${e.CODIGO}`,children:"Visualizar Clientes"})})]})]})},G7=Q.div`
	box-sizing: border-box;
	padding: 1rem;
	max-height: calc(100% - 4rem);
	overflow: auto;

	> form {
		display: flex;
		align-items: flex-end;
		gap: 1rem;
		padding: 1rem 0;

		> div {
			display: flex;
			flex-direction: column;
			gap: 0.25rem;
		}

		> button {
			font-size: "1rem";
			height: "1.25rem";
			box-sizing: "content-box";
			width: max-content;
		}
		> button:disabled {
			opacity: 0.35;
		}
	}

	> ul {
		box-sizing: border-box;
		width: 100%;
		display: flex;
		flex-direction: column;
		max-height: calc(100% - 7rem);
		overflow: auto;

		border: 2px solid var(--color-grey-6-h);
		background-color: var(--color-grey-7);

		height: calc(100vh - 16rem);
	}
`,B7=()=>{const e=P(""),t=P([]),r=P(!0),n=s=>{t.set(c=>c.map(u=>u.CODIGO===s.CODIGO?s:u))},o=s=>{t.set(c=>c.filter(u=>u.CODIGO!=s.CODIGO))},i=s=>{de({endpoint:"/customer-groups",method:"post",service:"customers",requestData:{DESCRICAO:s},onSuccess:c=>{const u=[...t.value,c.data];t.set(u)}})};j.useEffect(()=>{de({endpoint:"/customer-groups",method:"get",service:"customers",onSuccess:s=>{t.set(s.data)}})},[]);const l=s=>{e.set(s.target.value),s.target.value.trim().length&&r.value?r.set(!1):!s.target.value.trim().length&&!r.value&&r.set(!0)};return a.jsxs(G7,{children:[a.jsxs("h2",{children:[" Clientes ","->"," Grupos "]}),a.jsxs("form",{children:[a.jsxs("div",{style:{width:"20rem"},children:[a.jsx("h3",{children:" Nome do Grupo "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.5,1],$fontSize:1,$width:"100%",leftIcon:null,rightIcon:null,onChange:s=>l(s),value:e.value,maxLength:35,placeholder:"Digite o nome do grupo aqui..."})]}),r.value&&a.jsxs(ft,{disabled:!0,children:[a.jsx(lr,{}),"Adicionar Grupo"]})||a.jsxs(ft,{type:"button",onClick:()=>i(e.value.trim()),children:[a.jsx(lr,{}),"Adicionar Grupo"]})]}),a.jsx("ul",{children:t.value.map(s=>a.jsx(F7,{groupData:s,updateOnEdit:n,updateOnDelete:o},`group_${s.CODIGO}`))})]})},V7=Q.div`
    box-sizing: border-box;
    display: grid;
    grid-template-areas: "top" "button" "list";
    grid-template-rows: max-content max-content 1fr;
    grid-template-columns: 100%;

    >div:nth-child(1) {
        grid-area: top;
        padding: 1rem;

        @media (max-width: 50rem) {
            padding: 0.5rem ;
        }
    }

    >div:nth-child(2) {
        box-sizing: border-box;
        grid-area: button;
        padding-left: 1rem;
        width: 100%;

        @media (max-width: 50rem) {
            padding: 0 0.5rem ;
        }
    }

    >div:nth-child(3) {
        grid-area: list;
        
        @media (min-width: 50rem) {
            height: calc(100vh - 19rem);
            max-height: calc(100vh - 19rem);
        }


    }
`;function H7(e){return e.length===14?e.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,"$1.$2.$3/$4-$5"):e.length===11?e.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/,"$1.$2.$3-$4"):e}const U7=[{key:"CODIGO",header:"Código",width:7,primarykey:!0,alignContent:"start",filter:{section:"Dados do cliente",type:"input",width:"20rem",icon:a.jsx(Dr,{})}},{key:"COD_ERP",header:"Código ERP",width:10,primarykey:!0,format:e=>e.COD_ERP||"N/D",filter:{section:"Dados do cliente",type:"input",width:"20rem",icon:a.jsx(Dr,{})}},{key:"ATIVO",header:"Ativo",width:6,format:e=>a.jsx("div",{className:`customer_active_tag ${e.ATIVO==="SIM"?"active":"inactive"}`,children:e.ATIVO==="SIM"?"Ativo":"Inativo"}),filter:{section:"Dados do cliente",type:"select",width:"20rem",icon:a.jsx(lv,{}),placeholder:"Status do cliente",options:[{name:"Ativo",value:"SIM"},{name:"Inativo",value:"NAO"},{name:"Ambos",value:void 0}]}},{key:"RAZAO",header:"Razão Social",width:20,format:e=>e.RAZAO||"Não definido",filter:{section:"Dados do cliente",type:"input",width:"41rem",icon:a.jsx(Bw,{})}},{key:"CPF_CNPJ",header:"CPF/CNPJ",width:20,format:e=>e.CPF_CNPJ?H7(e.CPF_CNPJ):"Não definido",filter:{section:"Dados do cliente",type:"input",width:"41rem",icon:a.jsx(lC,{}),placeholder:"Telefone 1"}},{key:"PESSOA",header:"Pessoa",format:e=>e.PESSOA==="FIS"?"Física":"Jurídica",width:6,filter:{section:"Dados do cliente",type:"select",width:"20rem",icon:a.jsx(cv,{}),placeholder:"Pessoa",options:[{name:"Física",value:"FIS"},{name:"Jurídica",value:"JUR"},{name:"Ambas",value:void 0}]}},{key:"CIDADE",header:"Cidade",width:12,filter:{section:"Dados do cliente",type:"input",width:"20rem",icon:a.jsx(Qw,{}),placeholder:"Cidade"}},{key:"ESTADO",header:"UF",width:6,filter:{section:"Dados do cliente",type:"input",width:"10rem",icon:a.jsx(nv,{}),placeholder:"UF"}},{key:"DATACAD",header:"Data Cadastro",format:e=>new Date(e.DATACAD).toLocaleString(),width:10,filter:{section:"Dados do cliente",type:"date-range",width:"20rem",icon:a.jsx(Xy,{}),placeholder:"Data Cadastro"}}],W7=({customerId:e})=>a.jsx(Po,{to:`/clientes/${e}`,title:`Editar cliente ID: ${e}`,style:{fontSize:"1.25rem",display:"flex",alignItems:"center",justifyContent:"center",color:m.colorGrey[2],cursor:"pointer"},children:a.jsx(av,{style:{pointerEvents:"none"}})}),q7=()=>a.jsx(ia,{$tableHeight:"100%",$tableWidth:"100%",$fontSize:.75,columns:U7,tableName:"Clientes",$modalFiltersWidth:41,actions:e=>[a.jsx(W7,{customerId:e.CODIGO},`actions_${e.CODIGO}`)],requestEndpoint:"/customers",service:"customers"}),K7=Q.div`
    display: flex;
    gap: 1rem;
    padding-right: 1.5rem;
    border-right: 1px solid var(--color-grey-6);

    width: max-content;
    white-space: nowrap;

    @media (max-width: 50rem) {
        padding: 0;
        padding-right: 0;
        border: none;
        
        width: 100%;
        box-sizing: border-box;
    }

    &:nth-last-child(1) {
        border: none;
    }

    &>.big_icon {
        padding: 1rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        width: max-content;
        height: max-content;
        background-color: var(--color-primary-o);
        color: var(--color-primary);

        @media (max-width: 50rem) {
            font-size: 2.125rem;
            padding: 1.125rem;
        }
    }

    >div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media (max-width: 50rem) {
            max-width: calc(100% - 4.375rem);
        }
        span.title {
            font-size: 0.75rem;
            font-weight: 400;
            color: var(--color-grey-2);
            opacity: 0.85;
        }

        h2 {
            font-size: 1.125rem;
            font-weight: 700;

            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }

        span.percentage_last_month {
            font-size: 0.75rem;
            display: flex;
            align-items: center;

            >span {
                display: flex;
                align-items: center;
                margin-right: 0.25rem;
                font-weight: 600;
                
            }

            .increase {
                color: rgb(50, 225, 90);
            }

            .decrease {
                color: rgb(254, 50, 90);
            }
        }
    }
`,wo=({icon:e,title:t,mainValue:r,subValue:n})=>a.jsxs(K7,{children:[a.jsx("span",{className:"big_icon",children:e}),a.jsxs("div",{children:[a.jsx("span",{className:"title",children:t}),a.jsxs("h2",{children:[" ",r," "]}),a.jsx("span",{className:"percentage_last_month",children:n})]})]}),V2=Q.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 1rem;
    align-items: center;
    margin-top: 0.5rem;
    background-color: var(--color-grey-7);
    border: 1px solid var(--color-grey-6-h);
    padding: 1rem 2rem;
    border-radius: 1rem;

    max-width: 100%;
    box-sizing: border-box;

    @media (max-width: 50rem) {
        padding: 1rem;
    }
    
    >div:nth-child(1) {
        display: flex;
        row-gap: 1rem;
        gap: 1rem;
        max-width: 100%;
        box-sizing: border-box;
        overflow: hidden;

        @media (max-width: 50rem) {
            flex-direction: column;
            max-width: 100%;
            box-sizing: border-box;
        }
    }

    h3, select, button {
        color:  var(--color-grey-2);
    }
`,Q7=()=>{const e=P({});j.useEffect(()=>{},[]);const{customersCount:t,customersIncreasePreviousMonth:r,largestSegment:n,largestState:o,percentageOfCustomersInLargestState:i,percentageOfCustomersInLargestSegment:l}=e.value,s=a.jsxs("p",{children:[a.jsxs("b",{children:[l==null?void 0:l.slice(0,4),"32%"]})," dos seus clientes são do segmento 'POSTO DE COMBUSTIVEL'"]}),c=a.jsxs("p",{children:[a.jsxs("b",{children:[i==null?void 0:i.slice(0,4),"24%"]})," dos seus clientes estão em SP"]}),u=a.jsxs(a.Fragment,{children:[a.jsxs("span",{className:r>0?"increase":r<0?"decrease":"",children:[r>0?a.jsxs(a.Fragment,{children:[a.jsx(Fw,{})," -"," "]}):r<0?a.jsxs(a.Fragment,{children:[a.jsx(Lw,{})," +"," "]}):a.jsx(a.Fragment,{children:"+8"}),r,"%"]}),"em relação ao mês anterior"]});return a.jsx(V2,{children:a.jsxs("div",{children:[a.jsx(wo,{icon:a.jsx(uv,{}),title:"Clientes Ativos",mainValue:t==null?void 0:t.toLocaleString("pt-BR"),subValue:u}),a.jsx(wo,{icon:a.jsx(yC,{}),title:"Maior Segmento",mainValue:n,subValue:s}),a.jsx(wo,{icon:a.jsx(sC,{}),title:"Maior Estado",mainValue:o,subValue:c})]})})},J7=()=>a.jsxs(V7,{children:[a.jsxs("div",{children:[a.jsx("h1",{children:" Cadastro de Clientes "}),a.jsx(Q7,{})]}),a.jsx("div",{children:a.jsx(pt,{children:a.jsx(Po,{to:"/clientes/cadastrar",children:"Adicionar novo cliente"})})}),a.jsx(q7,{}),a.jsx(m4,{})]}),X7=Q.li`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--color-grey-2);
    padding: 1rem;
    background-color: var(--color-grey-8);
    width: 100%;
    transition: 0.3s ease-in-out;

    &:nth-child(odd) {
        background-color: var(--color-grey-7);
    }

    &:hover {
        background-color: var(--color-grey-6);
    }
    
    >div:nth-child(1) {
        display: flex;
        align-items: center;
        gap: 1rem;

        >span:nth-child(1) {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
    }

    >div:nth-child(2) {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
`,Y7=Q.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	width: 18rem;

	> button {
		font-weight: 500;
		padding: 0.5rem 2rem;
		border-radius: 0.25rem;
		border: 1px solid;
		background-color: var(--color-primary);
		border-color: var(--color-primary);
		color: white;

		&:hover {
			filter: opacity(0.75);
		}
	}
`;function Z7({origin:e,update:t}){const{modalState:r}=j.useContext(Qe),n=P(e.DESCRICAO);async function o(){de({endpoint:`/origins/${e.CODIGO}`,requestData:{DESCRICAO:n.value.trim()},method:"patch",service:"customers",onSuccess:i=>{Ce.success("Origem atualizada com sucesso"),r.reset(),t(i.data)}})}return a.jsx(bt,{modalState:r,title:"Editar Origem",children:a.jsxs(Y7,{children:[a.jsx(V,{..._t,placeholder:"Digite o nome da origem",value:n.value,onChange:i=>{n.set(i.target.value)}}),a.jsx("button",{onClick:o,children:"Confirmar"})]})})}const eb=Q.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	width: 18rem;

	> button {
		font-weight: 500;
		padding: 0.5rem 2rem;
		border-radius: 0.25rem;
		border: 1px solid;
		background-color: var(--color-primary);
		border-color: var(--color-primary);
		color: white;

		&:disabled {
			filter: opacity(0.25);
		}

		&:hover {
			filter: opacity(0.75);
		}
	}
`;function tb({origin:e,updateOnDelete:t}){const{modalState:r}=j.useContext(Qe),n=P(""),o=P(!1);async function i(){de({endpoint:`/origins/${e.CODIGO}`,method:"delete",service:"customers",onSuccess:()=>{Ce.success("Origem deletada com sucesso"),r.reset(),t(e)}})}return a.jsx(bt,{modalState:r,title:"Remover Origem",children:a.jsxs(eb,{children:[a.jsx(V,{..._t,placeholder:`Digite '${e.DESCRICAO}' para confirmar`,value:n.value,onChange:l=>{n.set(l.target.value),l.target.value===e.DESCRICAO?o.set(!0):o.value!=!1&&o.set(!1)}}),o.value&&a.jsx("button",{onClick:i,children:"Confirmar"})||a.jsx("button",{disabled:!0,children:"Confirmar"})]})})}const rb=({originData:e,updateOnEdit:t,updateOnDelete:r})=>{const{modalState:n}=j.useContext(Qe);return a.jsxs(X7,{children:[a.jsxs("div",{children:[a.jsxs("span",{children:[a.jsx(Dr,{}),e.CODIGO]}),a.jsxs("h2",{children:[" ",e.DESCRICAO," "]})]}),a.jsxs("div",{children:[a.jsx(pt,{onClick:()=>{n.set(a.jsx(Z7,{origin:e,update:t}))},children:a.jsx("a",{children:" Editar "})}),a.jsx(pt,{onClick:()=>{n.set(a.jsx(tb,{origin:e,updateOnDelete:r}))},children:a.jsx("a",{children:" Remover "})}),a.jsx(pt,{children:a.jsx(Po,{to:`/clientes?ORIGEM=${e.CODIGO}`,children:"Visualizar Clientes"})})]})]})},nb=Q.div`
	box-sizing: border-box;
	padding: 1rem;
	max-height: calc(100% - 4rem);
	overflow: auto;

	> form {
		display: flex;
		align-items: flex-end;
		gap: 1rem;
		padding: 1rem 0;

		> div {
			display: flex;
			flex-direction: column;
			gap: 0.25rem;
		}

		> button {
			font-size: "1rem";
			height: "1.25rem";
			box-sizing: "content-box";
			width: max-content;
		}
		> button:disabled {
			opacity: 0.35;
		}
	}

	> ul {
		box-sizing: border-box;
		width: 100%;
		display: flex;
		flex-direction: column;
		max-height: calc(100% - 7rem);
		overflow: auto;

		border: 2px solid var(--color-grey-6-h);
		background-color: var(--color-grey-7);

		height: calc(100vh - 16rem);
	}
`,ob=()=>{const e=P(""),t=P([]),r=P(!0),n=s=>{t.set(c=>c.map(u=>u.CODIGO===s.CODIGO?s:u))},o=s=>{t.set(c=>c.filter(u=>u.CODIGO!=s.CODIGO))},i=s=>{de({endpoint:"/origins",method:"post",service:"customers",requestData:{DESCRICAO:s},onSuccess:c=>{const u=[...t.value,c.data];t.set(u)}})};j.useEffect(()=>{de({endpoint:"/origins",method:"get",service:"customers",onSuccess:s=>{t.set(s.data)}})},[]);const l=s=>{e.set(s.target.value),s.target.value.trim().length&&r.value?r.set(!1):!s.target.value.trim().length&&!r.value&&r.set(!0)};return a.jsxs(nb,{children:[a.jsxs("h2",{children:[" Clientes ","->"," Origens "]}),a.jsxs("form",{children:[a.jsxs("div",{style:{width:"20rem"},children:[a.jsx("h3",{children:" Nome da Origem "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.5,1],$fontSize:1,$width:"100%",leftIcon:null,rightIcon:null,onChange:s=>l(s),value:e.value,maxLength:35,placeholder:"Digite o nome da origem aqui..."})]}),r.value&&a.jsxs(ft,{disabled:!0,children:[a.jsx(lr,{}),"Adicionar Origem"]})||a.jsxs(ft,{type:"button",onClick:()=>i(e.value.trim()),children:[a.jsx(lr,{}),"Adicionar Origem"]})]}),a.jsx("ul",{children:t.value.map(s=>a.jsx(rb,{originData:s,updateOnEdit:n,updateOnDelete:o},`origin_${s.CODIGO}`))})]})},ib=Q.li`
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: var(--color-grey-2);
	padding: 1rem;
	background-color: var(--color-grey-8);
	width: 100%;
	transition: 0.3s ease-in-out;

	&:nth-child(odd) {
		background-color: var(--color-grey-7);
	}

	&:hover {
		background-color: var(--color-grey-6);
	}

	> div:nth-child(1) {
		display: flex;
		align-items: center;
		gap: 1rem;

		> span:nth-child(1) {
			display: flex;
			align-items: center;
			gap: 0.5rem;
		}
	}

	> div:nth-child(2) {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
`,lb=Q.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	width: 18rem;

	> button {
		font-weight: 500;
		padding: 0.5rem 2rem;
		border-radius: 0.25rem;
		border: 1px solid;
		background-color: var(--color-primary);
		border-color: var(--color-primary);
		color: white;

		&:hover {
			filter: opacity(0.75);
		}
	}
`;function ab({role:e,update:t}){const{modalState:r}=j.useContext(Qe),n=P(e.DESCRICAO);async function o(){de({endpoint:`/positions/${e.CODIGO}`,requestData:{DESCRICAO:n.value.trim()},method:"patch",service:"customers",onSuccess:i=>{Ce.success("Cargo atualizado com sucesso"),r.reset(),t(i.data)}})}return a.jsx(bt,{modalState:r,title:"Editar Cargo",children:a.jsxs(lb,{children:[a.jsx(V,{..._t,placeholder:"Digite o nome do cargo",value:n.value,onChange:i=>{n.set(i.target.value)}}),a.jsx("button",{onClick:o,children:"Confirmar"})]})})}const sb=Q.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	width: 18rem;

	> button {
		font-weight: 500;
		padding: 0.5rem 2rem;
		border-radius: 0.25rem;
		border: 1px solid;
		background-color: var(--color-primary);
		border-color: var(--color-primary);
		color: white;

		&:disabled {
			filter: opacity(0.25);
		}

		&:hover {
			filter: opacity(0.75);
		}
	}
`;function cb({role:e,updateOnDelete:t}){const{modalState:r}=j.useContext(Qe),n=P(""),o=P(!1);async function i(){de({endpoint:`/positions/${e.CODIGO}`,method:"delete",service:"customers",onSuccess:()=>{Ce.success("Cargo deletado com sucesso"),r.reset(),t(e)}})}return a.jsx(bt,{modalState:r,title:"Remover Cargo",children:a.jsxs(sb,{children:[a.jsx(V,{..._t,placeholder:`Digite '${e.DESCRICAO}' para confirmar`,value:n.value,onChange:l=>{n.set(l.target.value),l.target.value===e.DESCRICAO?o.set(!0):o.value!=!1&&o.set(!1)}}),o.value&&a.jsx("button",{onClick:i,children:"Confirmar"})||a.jsx("button",{disabled:!0,children:"Confirmar"})]})})}const ub=({roleData:e,updateOnEdit:t,updateOnDelete:r})=>{const{modalState:n}=j.useContext(Qe);return a.jsxs(ib,{children:[a.jsxs("div",{children:[a.jsxs("span",{children:[a.jsx(Dr,{}),e.CODIGO]}),a.jsxs("h2",{children:[" ",e.DESCRICAO," "]})]}),a.jsxs("div",{children:[a.jsx(pt,{onClick:()=>{n.set(a.jsx(ab,{role:e,update:t}))},children:a.jsx("a",{children:" Editar "})}),a.jsx(pt,{onClick:()=>{n.set(a.jsx(cb,{role:e,updateOnDelete:r}))},children:a.jsx("a",{children:" Remover "})})]})]})},db=Q.div`
	box-sizing: border-box;
	padding: 1rem;
	max-height: calc(100% - 4rem);
	overflow: auto;

	> form {
		display: flex;
		align-items: flex-end;
		gap: 1rem;
		padding: 1rem 0;

		> div {
			display: flex;
			flex-direction: column;
			gap: 0.25rem;
		}

		> button {
			font-size: "1rem";
			height: "1.25rem";
			box-sizing: "content-box";
			width: max-content;
		}
		> button:disabled {
			opacity: 0.35;
		}
	}

	> ul {
		box-sizing: border-box;
		width: 100%;
		display: flex;
		flex-direction: column;

		border: 2px solid var(--color-grey-6-h);
		background-color: var(--color-grey-7);

		height: calc(100vh - 16rem);
	}
`,fb=()=>{const e=P(""),t=P([]),r=P(!0),n=s=>{t.set(c=>c.map(u=>u.CODIGO===s.CODIGO?s:u))},o=s=>{t.set(c=>c.filter(u=>u.CODIGO!=s.CODIGO))},i=s=>{de({endpoint:"/positions",method:"post",service:"customers",requestData:{DESCRICAO:s},onSuccess:c=>{const u=[...t.value,c.data];t.set(u)}})};j.useEffect(()=>{de({endpoint:"/positions",method:"get",service:"customers",onSuccess:s=>{t.set(s.data)}})},[]);const l=s=>{e.set(s.target.value),s.target.value.trim().length&&r.value?r.set(!1):!s.target.value.trim().length&&!r.value&&r.set(!0)};return a.jsxs(db,{children:[a.jsxs("h2",{children:[" Clientes ","->"," Cargos "]}),a.jsxs("form",{children:[a.jsxs("div",{style:{width:"20rem"},children:[a.jsx("h3",{children:" Nome do Cargo "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.5,1],$fontSize:1,$width:"100%",leftIcon:null,rightIcon:null,onChange:s=>l(s),value:e.value,maxLength:35,placeholder:"Digite o nome do cargo aqui..."})]}),r.value&&a.jsxs(ft,{disabled:!0,children:[a.jsx(lr,{}),"Adicionar Cargo"]})||a.jsxs(ft,{type:"button",onClick:()=>i(e.value.trim()),children:[a.jsx(lr,{}),"Adicionar Cargo"]})]}),a.jsx("ul",{children:t.value.map(s=>a.jsx(ub,{roleData:s,updateOnEdit:n,updateOnDelete:o},`role_${s.CODIGO}`))})]})},hb=Q.li`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--color-grey-2);
    padding: 1rem;
    background-color: var(--color-grey-8);
    width: 100%;
    transition: 0.3s ease-in-out;

    &:nth-child(odd) {
        background-color: var(--color-grey-7);
    }

    &:hover {
        background-color: var(--color-grey-6);
    }

    >div:nth-child(1) {
        display: flex;
        align-items: center;
        gap: 1rem;

        >span:nth-child(1) {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
    }

    >div:nth-child(2) {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
`,pb=Q.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	width: 18rem;

	> button {
		font-weight: 500;
		padding: 0.5rem 2rem;
		border-radius: 0.25rem;
		border: 1px solid;
		background-color: var(--color-primary);
		border-color: var(--color-primary);
		color: white;

		&:hover {
			filter: opacity(0.75);
		}
	}
`;function mb({segment:e,update:t}){const{modalState:r}=j.useContext(Qe),n=P(e.NOME);async function o(){de({endpoint:`/segments/${e.CODIGO}`,requestData:{NOME:n.value.trim()},method:"patch",service:"customers",onSuccess:i=>{Ce.success("Segmento atualizado com sucesso"),r.reset(),t(i.data)}})}return a.jsx(bt,{modalState:r,title:"Editar Segmento",children:a.jsxs(pb,{children:[a.jsx(V,{..._t,placeholder:"Digite o nome do segmento",value:n.value,onChange:i=>{n.set(i.target.value)}}),a.jsx("button",{onClick:o,children:"Confirmar"})]})})}const gb=Q.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	width: 18rem;

	> button {
		font-weight: 500;
		padding: 0.5rem 2rem;
		border-radius: 0.25rem;
		border: 1px solid;
		background-color: var(--color-primary);
		border-color: var(--color-primary);
		color: white;

		&:disabled {
			filter: opacity(0.25);
		}

		&:hover {
			filter: opacity(0.75);
		}
	}
`;function yb({segment:e,updateOnDelete:t}){const{modalState:r}=j.useContext(Qe),n=P(""),o=P(!1);async function i(){de({endpoint:`/segments/${e.CODIGO}`,method:"delete",service:"customers",onSuccess:()=>{Ce.success("Segmento deletado com sucesso"),r.reset(),t(e)}})}return a.jsx(bt,{modalState:r,title:"Remover Segmento",children:a.jsxs(gb,{children:[a.jsx(V,{..._t,placeholder:`Digite '${e.NOME}' para confirmar`,value:n.value,onChange:l=>{n.set(l.target.value),l.target.value===e.NOME?o.set(!0):o.value!=!1&&o.set(!1)}}),o.value&&a.jsx("button",{onClick:i,children:"Confirmar"})||a.jsx("button",{disabled:!0,children:"Confirmar"})]})})}const vb=({segmentData:e,updateOnEdit:t,updateOnDelete:r})=>{const{modalState:n}=j.useContext(Qe);return a.jsxs(hb,{children:[a.jsxs("div",{children:[a.jsxs("span",{children:[a.jsx(Dr,{})," ",e.CODIGO]}),a.jsxs("h2",{children:[" ",e.NOME," "]})]}),a.jsxs("div",{children:[a.jsx(pt,{onClick:()=>{n.set(a.jsx(mb,{segment:e,update:t}))},children:a.jsx("a",{children:" Editar "})}),a.jsx(pt,{onClick:()=>{n.set(a.jsx(yb,{segment:e,updateOnDelete:r}))},children:a.jsx("a",{children:" Remover "})}),a.jsx(pt,{children:a.jsx(Po,{to:`/clientes?SEGMENTO=${e.CODIGO}`,children:"Visualizar Clientes"})})]})]})},xb=Q.div`
	box-sizing: border-box;
	padding: 1rem;
	max-height: calc(100% - 4rem);
	overflow: auto;

	> form {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-end;
		gap: 1rem;
		padding: 1rem 0;

		> div {
			display: flex;
			flex-direction: column;
			gap: 0.25rem;
		}

		> button {
			font-size: "1rem";
			height: "1.25rem";
			box-sizing: "content-box";
			width: max-content;
		}
		> button:disabled {
			opacity: 0.35;
		}
	}

	> ul {
		box-sizing: border-box;
		width: 100%;
		display: flex;
		flex-direction: column;
		max-height: calc(100% - 7rem);
		overflow: auto;

		border: 2px solid var(--color-grey-6-h);
		background-color: var(--color-grey-7);

		height: calc(100vh - 16rem);
	}
`,wb=()=>{const e=P([]),t=P({NOME:"",COD_UNIDADE:null}),r=P([{CODIGO:1,DESCRICAO:"TESTE1"},{CODIGO:2,DESCRICAO:"TESTE2"}]),n=P(!0),o=c=>{e.set(u=>u.map(d=>d.CODIGO===c.CODIGO?c:d))},i=c=>{e.set(u=>u.filter(d=>d.CODIGO!=c.CODIGO))},l=()=>{var u;const c={...t.value,NOME:(u=t.value.NOME)==null?void 0:u.trim()};console.log(c),de({endpoint:"/segments",method:"post",service:"customers",requestData:c,onSuccess:d=>{const f=[...e.value,d.data];e.set(f)}})};j.useEffect(()=>{de({endpoint:"/segments",method:"get",service:"customers",onSuccess:c=>{e.set(c.data)}})},[]);const s=c=>{t.set(u=>({...u,NOME:c.target.value})),c.target.value.trim().length&&n.value?n.set(!1):!n.value&&!c.target.value.trim().length&&n.set(!0)};return a.jsxs(xb,{children:[a.jsxs("h2",{children:[" Clientes ","->"," Segmentos "]}),a.jsxs("form",{children:[a.jsxs("div",{style:{width:"20rem"},children:[a.jsx("h3",{children:" Nome do Segmento "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.5,1],$fontSize:1,$width:"100%",leftIcon:null,rightIcon:null,onChange:c=>s(c),value:t.value.NOME,placeholder:"Digite o nome do segmento aqui..."})]}),a.jsxs("div",{style:{width:"20rem"},children:[a.jsx("h3",{children:" Unidade "}),a.jsx(Te,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.5,1],$fontSize:1,$width:"100%",onChange:c=>t.set(u=>({...u,COD_UNIDADE:c})),options:r.value.map(c=>({name:c.DESCRICAO,value:c.CODIGO})),placeholder:"Unidade"})]}),n.value&&a.jsxs(ft,{disabled:!0,children:[a.jsx(lr,{}),"Adicionar Segmento"]})||a.jsxs(ft,{type:"button",onClick:()=>l(),children:[a.jsx(lr,{}),"Adicionar Segmento"]})]}),a.jsx("ul",{children:e.value.map(c=>a.jsx(vb,{segmentData:c,updateOnEdit:o,updateOnDelete:i},`segment_${c.CODIGO}`))})]})},Cb=Q.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    box-sizing: border-box;
    width: 100%;

    >h1 {
        font-size: 1.5rem;
        font-weight: 500;
    }

    >div.funil {
        width: 32rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.125rem;
        border: 2px solid var(--color-grey-6-h);
        padding: 2rem;
        border-radius: 2rem;
        background-color: var(--color-grey-7-h);

        >div {
            box-sizing: border-box;
            padding: 1.25rem 1rem;
            border-radius: 2rem;
            border-bottom: 5px solid;
            border-color: var(--color-grey-0-o);

            h2, h4, h5{
                color: white;
            }
            
            >span.mid {
                height: 100%;
                width: 2px;
                background-color: white;
                justify-self: center;
            }
        }
        
        >div:nth-child(1) {
            width: 32rem;
            background-color: rgb(205, 35, 68);
            display: flex;
            justify-content: space-between;

            >div {
                width: calc(50% - 1px);
                text-align: center;
            }
        }

        >div:nth-child(2) {
            width: 26rem;
            background-color: rgb(205, 55, 68);
            display: flex;
            justify-content: space-between;

            >div {
                width: calc(50% - 1px);
                text-align: center;
            }
        }

        >div:nth-child(3) {
            width: 20rem;
            background-color: rgb(205, 75, 68);
            text-align: center;
        }

        >div:nth-child(4) {
            width: 14rem;
            background-color: rgb(205, 95, 68);
            text-align: center;
        }

        >div:nth-child(5) {
            width: 8rem;
            background-color: rgb(205, 115, 68);
            text-align: center;
        }

    }

`,Sb=()=>a.jsxs(Cb,{children:[a.jsx("h1",{children:" Bem-vindo(a) ao inPulse!"}),a.jsx("h3",{children:" Confira o seu funil de vendas: "}),a.jsxs("div",{className:"funil",children:[a.jsxs("div",{children:[a.jsxs("div",{children:[a.jsx("h4",{children:"Atendimentos"}),a.jsx("h2",{children:"763"})]}),a.jsx("span",{className:"mid"}),a.jsxs("div",{children:[a.jsx("h4",{children:"Clientes trabalhados"}),a.jsx("h2",{children:"445"})]})]}),a.jsxs("div",{children:[a.jsxs("div",{children:[a.jsx("h5",{children:"Atendimentos produtivos"}),a.jsx("h2",{children:"763"})]}),a.jsx("span",{className:"mid"}),a.jsxs("div",{children:[a.jsx("h5",{children:"Clientes trabalhados produtivos"}),a.jsx("h2",{children:"445"})]})]}),a.jsx("div",{children:a.jsxs("div",{children:[a.jsx("h4",{children:"Cotação"}),a.jsx("h2",{children:"1"})]})}),a.jsx("div",{children:a.jsxs("div",{children:[a.jsx("h4",{children:"Pedidos"}),a.jsx("h2",{children:"55"})]})}),a.jsx("div",{children:a.jsxs("div",{children:[a.jsx("h4",{children:"Faturados"}),a.jsx("h2",{children:"13"})]})})]})]}),$b=[{key:"DATA_HORA",header:"Data e hora",width:20,format:e=>new Date(e.DATA_HORA).toLocaleString(),filter:{type:"date-range",width:"41rem"}},{key:"OPERADOR",header:"Operador",width:12},{key:"MOTIVO",header:"Motivo",width:12},{key:"TIPO",header:"Tipo",width:8,format:e=>e.TIPO==="ATIVO"?"Ativo":e.TIPO==="RECEP"?"Receptivo":"N/D"},{key:"EXCEDEU",header:"Excedeu ?",width:8,format:e=>e.EXCEDEU==="SIM"?"Sim":"Não"},{key:"TEMPO_EXCEDIDO",header:"Tempo excedido",width:8},{key:"OBS",header:"Observação",width:24}],bb=()=>a.jsx(ia,{$tableHeight:"100%",$tableWidth:"100%",$fontSize:.75,columns:$b,tableName:"Pausas realizadas",$modalFiltersWidth:40,requestEndpoint:"/breaks",service:"monitoring",enableAutoUpdate:!0}),Eb=Q.div`
    box-sizing: border-box;
`,jb=()=>a.jsx(Eb,{children:a.jsx(bb,{})}),kb=Q.section`
    border-top: 1px solid var(--color-grey-5);
    box-sizing: border-box;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    overflow-y: auto;
    padding-bottom: 5rem;

    >.input-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }

    >:nth-child(1) {
        margin-bottom: 0.5rem;
    }
`,Ob=()=>{const e=P({}),t=[{name:"CPF/CNPJ",value:{key:"CPF/CNPJ",type:"string"}},{name:"Código inPulse",value:{key:"Código inPulse",type:"string"}},{name:"Código ERP",value:{key:"Código ERP",type:"string"}},{name:"Campanhas",value:{key:"Campanhas",type:"array",options:[]}},{name:"Grupos",value:{key:"Grupos",type:"array",options:[]}},{name:"Segmentos",value:{key:"Segmentos",type:"array",options:[]}},{name:"Origens",value:{key:"Origens",type:"array",options:[]}},{name:"Mídias",value:{key:"Mídias",type:"array",options:[]}},{name:"Estados",value:{key:"Estados",type:"array",options:[]}},{name:"Ultima compra",value:{key:"Ultima compra",type:"range-date"}},{name:"Produto comprado",value:{key:"Produto comprado",type:"array",options:[]}},{name:"Situação",value:{key:"Situação",type:"string"}},{name:"Ultimo contato",value:{key:"Ultimo contato",type:"range-date"}}],r=n=>{e.set(n.reduce((o,i)=>(i&&(i.type==="array"?o[i.key]={type:"array",value:[]}:i.type==="range-date"?o[i.key]={type:"range-date",value:{min:null,max:null}}:o[i.key]={type:"string",value:""}),o),{}))};return a.jsxs(kb,{children:[a.jsx(Bl,{...ql,options:t,onChange:r,placeholder:"Filtros de clientes"}),Object.entries(e.value).map((n,o)=>a.jsxs("div",{className:"input-wrapper",children:[a.jsx("label",{children:n[0]}),n[1].type==="string"&&a.jsx(V,{..._t,placeholder:n[0]}),n[1].type==="array"&&a.jsx(Bl,{...ql,placeholder:n[0],options:[]}),n[1].type==="range-date"&&a.jsx(Qh,{title:n[0],...Jh})]},o))]})},_b=Q.section`
    box-sizing: border-box;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    >.input-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }

    >:nth-child(1) {
        margin-bottom: 0.5rem;
    }
`,Ib=()=>{const e=P("Agendamentos"),t=[{name:"Agendamentos",value:"Agendamentos"},{name:"Ligações",value:"Ligações"},{name:"Sem agendamento",value:"Sem agendamento"}],r={Agendamentos:{"Agendamento após":{type:"date-hour"},"Agendamento até":{type:"date-hour"},"Operador do cliente":{type:"select",options:[]},"Data recompra":{type:"range-date"},"Clientes nunca trabalhados":{type:"boolean"},"Contatos/Ligações":{type:"select",options:[]}},Ligações:{"Operador da ligação":{type:"select",options:[]},Resultado:{type:"select",options:[]},"Ligação após":{type:"date-hour"},"Ligação até":{type:"date-hour"}},"Sem agendamento":{}};return a.jsxs(_b,{children:[a.jsx(Te,{...ql,$focusColor:m.colorGrey[0],defaultValue:t[0],options:t,onChange:n=>{e.set(n||"Agendamentos")}}),Object.entries(r[e.value]).map(n=>a.jsxs("div",{className:"input-wrapper",children:[n[1].type==="boolean"&&a.jsxs("span",{style:{display:"flex",alignItems:"center",width:"100%",gap:"0.5rem"},children:[a.jsx("input",{type:"checkbox"}),a.jsxs("h2",{children:[" ",n[0]," "]})]}),n[1].type==="date-hour"&&a.jsxs("span",{style:{display:"flex",alignItems:"center",width:"100%",gap:"0.5rem"},children:[a.jsxs("h3",{style:{whiteSpace:"nowrap",width:"12rem"},children:[" ",n[0]," "]}),a.jsx(V,{..._t,type:"datetime-local"})]}),n[1].type==="range-date"&&a.jsx(Qh,{...Jh,title:n[0]+" (após - até)"}),n[1].type==="select"&&a.jsx(Te,{...ql,$focusColor:m.colorGrey[0],placeholder:n[0],options:[],onChange:()=>null})]}))]})},Rb=[{key:"CODIGO",header:"Código",width:6,primarykey:!0,alignContent:"start"},{key:"CODIGO_ERP",header:"Código ERP",width:6},{key:"ULTIMO_CONTATO",header:"Último contato",width:12},{key:"DATA_AGENDAMENTO",header:"Data agendamento",width:20,format:e=>new Date(e.DATA_AGENDAMENTO).toLocaleString()},{key:"CLIENTE",header:"Cliente",width:20},{key:"CPF_CNPJ",header:"CPF/CNPJ",width:12},{key:"CIDADE",header:"CIDADE",width:12},{key:"UF",header:"UF",width:3},{key:"CAMPANHA",header:"Campanha",width:12},{key:"SEGMENTO",header:"Segmento",width:12},{key:"DATA_RESULTADO",header:"Data resultado",width:20,format:e=>new Date(e.DATA_RESULTADO).toLocaleString()},{key:"RESULTADO",header:"Resultado",width:12},{key:"FONE1",header:"Fone 1",width:12},{key:"FONE2",header:"Fone 2",width:12},{key:"FONE3",header:"Fone 3",width:12},{key:"OPERADOR",header:"Operador",width:12},{key:"OPERADOR_LIGACAO",header:"Operador ligação",width:12},{key:"FONE_LIGACAO",header:"Fone ligação",width:12},{key:"LIGACAO_INICIO",header:"Início Ligação",width:20,format:e=>new Date(e.LIGACAO_INICIO).toLocaleString()},{key:"LIGACAO_FIM",header:"Fim Ligação",width:20,format:e=>new Date(e.LIGACAO_FIM).toLocaleString()},{key:"ULTIMA_COMPRA",header:"Última compra",width:12,format:e=>new Date(e.ULTIMA_COMPRA).toLocaleDateString()},{key:"DATA_RECOMPRA",header:"Data recompra",width:12,format:e=>new Date(e.DATA_RECOMPRA).toLocaleDateString()}],Tb=({title:e})=>a.jsx(ia,{$tableHeight:"100%",$tableWidth:"100%",$fontSize:.75,columns:Rb,tableName:e,$modalFiltersWidth:40,requestEndpoint:"/schedules",service:"monitoring"}),Ab=Q.div`
    box-sizing: border-box;

    >main {
        height: 100%;
        display: grid;
        grid-template-areas: "filters table";
        grid-template-columns: 26rem 1fr;
        grid-template-rows: 100%;

        >form {
            display: grid;
            grid-template-areas: "variable" "fixed";
            grid-template-columns: 100%;
            grid-template-rows: max-content 1fr;
        
            border-right: 1px solid var(--color-grey-6);
        }
    }
`,Db=()=>a.jsx(Ab,{children:a.jsxs("main",{children:[a.jsxs("form",{children:[a.jsx(Ib,{}),a.jsx(Ob,{})]}),a.jsx("div",{children:a.jsx(Tb,{title:"Agendamentos"})})]})}),zb=Q.div`
    box-sizing: border-box;
    padding: 1rem;

    >form {
        display: flex;
        align-items: flex-end;
        flex-wrap: wrap;
        gap: 1rem;
        padding: 1rem 0;

        >div {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
        }

        >button {
            width: max-content;
        }
    }

    >ul {
        box-sizing: border-box;
        width: 100%;
        display: flex;
        flex-direction: column;

        border: 2px solid var(--color-grey-6-h);
        background-color: var(--color-grey-7);

        height: calc(100vh - 18rem);
    }
`,Nb=()=>{const e=P(""),t=P("NAO"),r=P(60);return a.jsxs(zb,{children:[a.jsxs("h2",{children:[" Operadores ","->"," Vendas "]}),a.jsxs("form",{children:[a.jsxs("div",{style:{width:"20rem"},children:[a.jsx("h3",{children:" Motivo / Descrição "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.5,.5],$fontSize:1,$width:"100%",leftIcon:a.jsx(Eh,{}),rightIcon:null,onChange:n=>e.set(n.target.value),value:e.value,placeholder:"Digite o motivo da pausa aqui..."})]}),a.jsxs("div",{style:{width:"10rem"},children:[a.jsx("h3",{children:" Tempo Limite (seg.)"}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.5,.5],$fontSize:1,$width:"100%",leftIcon:a.jsx(Yy,{}),rightIcon:null,onChange:n=>r.set(Number(n.target.value)),value:r.value,type:"number"})]}),a.jsxs("div",{style:{width:"10rem"},children:[a.jsx("h3",{children:" Produtiva "}),a.jsx(Te,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.5,.5],$fontSize:1,$width:"100%",leftIcon:null,onChange:n=>t.set(n||"NAO"),options:[{name:"Sim",value:"SIM"},{name:"Não",value:"NAO"}],defaultValue:{name:"Não",value:"NAO"}})]}),a.jsxs(ft,{style:{fontSize:"1rem",height:"1.25rem",boxSizing:"content-box"},children:[a.jsx(Jy,{}),"Adicionar Pausa"]})]}),a.jsx("ul",{})]})},Pb=Q.div`
    box-sizing: border-box;
    padding: 1rem;

    >form {
        display: flex;
        align-items: flex-end;
        flex-wrap: wrap;
        gap: 1rem;
        padding: 1rem 0;

        >div {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
        }

        >button {
            width: max-content;
        }
    }

    >ul {
        box-sizing: border-box;
        width: 100%;
        display: flex;
        flex-direction: column;

        border: 2px solid var(--color-grey-6-h);
        background-color: var(--color-grey-7);

        height: calc(100vh - 18rem);
    }
`,Mb=()=>{const e=P(0),t=P(""),r=P(new Date().getFullYear()),n=P(0);return a.jsxs(Pb,{children:[a.jsxs("h2",{children:[" Operadores ","->"," Metas "]}),a.jsxs("form",{children:[a.jsxs("div",{style:{width:"20rem"},children:[a.jsx("h3",{children:" Operador "}),a.jsx(Te,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.5,.5],$fontSize:1,$width:"100%",leftIcon:null,onChange:o=>e.set(o||0),options:[{name:"Teste",value:1}],defaultValue:{name:"Teste",value:1}})]}),a.jsxs("div",{style:{width:"20rem"},children:[a.jsx("h3",{children:" Mês / Ano "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.5,.5],$fontSize:1,$width:"100%",leftIcon:null,rightIcon:null,onChange:o=>{r.set(+o.target.value.slice(0,4)),t.set(o.target.value.slice(5))},value:t.value,type:"month"})]}),a.jsxs("div",{style:{width:"10rem"},children:[a.jsx("h3",{children:" Meta "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.5,.5],$fontSize:1,$width:"100%",leftIcon:a.jsx("span",{children:" R$ "}),rightIcon:null,value:n.value,type:"number",onChange:o=>n.set(+o.target.value)})]}),a.jsxs(ft,{style:{fontSize:"1rem",height:"1.25rem",boxSizing:"content-box"},children:[a.jsx(qw,{}),"Adicionar Meta"]})]}),a.jsx("ul",{})]})},Lb=Q.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	width: 18rem;

	> button {
		font-weight: 500;
		padding: 0.5rem 2rem;
		border-radius: 0.25rem;
		border: 1px solid;
		background-color: var(--color-primary);
		border-color: var(--color-primary);
		color: white;

		&:disabled {
			filter: opacity(0.25);
		}

		&:hover {
			filter: opacity(0.75);
		}
	}
`;function Fb({group:e,updateOnDelete:t}){const{modalState:r}=j.useContext(Qe),n=P(""),o=P(!1);async function i(){de({endpoint:`/user-groups/${e.CODIGO}`,method:"delete",service:"users",onSuccess:()=>{Ce.success("Grupo deletado com sucesso"),r.reset(),t(e)}})}return a.jsx(bt,{modalState:r,title:"Remover Grupo",children:a.jsxs(Lb,{children:[a.jsx(V,{..._t,placeholder:`Digite '${e.DESCRICAO}' para confirmar`,value:n.value,onChange:l=>{n.set(l.target.value),l.target.value===e.DESCRICAO?o.set(!0):o.value!=!1&&o.set(!1)}}),o.value&&a.jsx("button",{onClick:i,children:"Confirmar"})||a.jsx("button",{disabled:!0,children:"Confirmar"})]})})}const Gb=Q.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	width: 18rem;

	> button {
		font-weight: 500;
		padding: 0.5rem 2rem;
		border-radius: 0.25rem;
		border: 1px solid;
		background-color: var(--color-primary);
		border-color: var(--color-primary);
		color: white;

		&:hover {
			filter: opacity(0.75);
		}
	}
	> button:disabled {
		opacity: 0.35;
	}
`;function Bb({group:e,update:t}){const{modalState:r}=j.useContext(Qe),n=P(e.DESCRICAO),o=P(!1),i=s=>{n.set(s.target.value),s.target.value.trim().length>=3&&o.value?o.set(!1):s.target.value.trim().length<3&&!o.value&&o.set(!0)};async function l(){n.value.trim().length<3?Ce.error("Minimo de 3 caracteres no nome do grupo"):de({endpoint:`/user-groups/${e.CODIGO}`,requestData:{DESCRICAO:n.value.trim()},method:"patch",service:"users",onSuccess:s=>{Ce.success("Nome atualizado com sucesso"),r.reset(),t(s.data)}})}return a.jsx(bt,{modalState:r,title:"Editar Grupo",children:a.jsxs(Gb,{children:[a.jsx(V,{..._t,placeholder:"Digite o nome do grupo",value:n.value,onChange:s=>{i(s)}}),o.value&&a.jsx("button",{disabled:!0,children:"Confirmar"})||a.jsx("button",{onClick:l,children:"Confirmar"})]})})}const Vb=Q.li`
	box-sizing: border-box;
	align-items: center;
	color: var(--color-grey-2);
	padding: 1rem;
	background-color: var(--color-grey-8);
	transition: 0.3s ease-in-out;

	&:nth-child(odd) {
		background-color: var(--color-grey-7);
	}

	&:hover {
		background-color: var(--color-grey-6);
	}

	> div:nth-child(1) {
		justify-content: space-between;
		display: flex;
		align-items: center;
		gap: 1rem;

		> div {
			display: flex;
			align-items: center;
			gap: 1rem;

			> span:nth-child(1) {
				display: flex;
				align-items: center;
				gap: 0.5rem;
			}
		}

		> button {
			float: right;
		}
	}
`,e1=({user:e,manageOperator:t,isGroupMember:r,groupUserId:n})=>a.jsx(Vb,{children:a.jsxs("div",{children:[a.jsxs("div",{children:[a.jsxs("span",{children:[a.jsx(Dr,{}),e.CODIGO]}),a.jsxs("h2",{children:[" ",e.NOME," "]})]}),r?a.jsx("button",{onClick:()=>t(n,!1),children:a.jsx(uC,{})}):a.jsx("button",{onClick:()=>t(e.CODIGO,!0),children:a.jsx(hC,{})})]})}),Hb=Q.div`
	display: flex;
	width: 100%;
	height: 25rem;
	max-height: 100%;

	> div {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 50%;
		box-sizing: border-box;

		> h2 {
			margin-left: 0.5rem;
		}

		> ul {
			overflow: auto;
			list-style: none;
			font-size: 1rem;
			display: inline-block;
			flex-direction: column;
			gap: 2rem;
			width: 25rem;
			height: 100%;
			max-height: calc(100% - 1rem);
		}
	}
`;function Ub({usersState:e,groupData:t}){const{modalState:r}=j.useContext(Qe),n=P([]);j.useEffect(()=>{de({endpoint:`/user-groups/${t.CODIGO}/members`,method:"get",service:"users",onSuccess:l=>{n.set(l.data)}})},[]);const o=n.value.map(l=>e.value.find(s=>s.CODIGO===l.OPERADOR)).filter(l=>!!l).sort((l,s)=>l.CODIGO-s.CODIGO),i=(l,s)=>{de(s?{endpoint:`/user-groups/${t.CODIGO}/members`,method:"post",service:"users",requestData:{OPERADOR:l},onSuccess:c=>{Ce.success("Operador adicionado com sucesso!"),n.set(u=>[...u,c.data])}}:{endpoint:`/user-groups/${t.CODIGO}/members/${l}`,method:"delete",service:"users",onSuccess:()=>{Ce.success("Operador removido com sucesso!"),n.set(c=>c.filter(u=>u.CODIGO!==l))}})};return a.jsx(bt,{modalState:r,title:`Gerenciar grupo: ${t.DESCRICAO}`,children:a.jsxs(Hb,{children:[a.jsxs("div",{children:[a.jsx("h2",{children:"Operadores"}),a.jsx("ul",{children:e.value.filter(l=>!n.value.some(c=>c.OPERADOR===l.CODIGO)).map(l=>a.jsx(e1,{isGroupMember:!1,user:l,manageOperator:i},`operator_${l.CODIGO}`))})]}),a.jsxs("div",{children:[a.jsx("h2",{children:"Membros do grupo"}),a.jsx("ul",{children:o.map(l=>{const s=n.value.find(c=>c.OPERADOR===l.CODIGO);return a.jsx(e1,{isGroupMember:!0,user:l,groupUserId:s==null?void 0:s.CODIGO,manageOperator:i},`group_${l.CODIGO}`)})})]})]})})}const Wb=Q.li`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--color-grey-2);
    padding: 1rem;
    background-color: var(--color-grey-8);
    width: 100%;
    transition: 0.3s ease-in-out;

    &:nth-child(odd) {
        background-color: var(--color-grey-7);
    }

    &:hover {
        background-color: var(--color-grey-6);
    }
    
    >div:nth-child(1) {
        display: flex;
        align-items: center;
        gap: 1rem;

        >span:nth-child(1) {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
    }

    >div:nth-child(2) {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
`,qb=({usersState:e,groupData:t,updateOnEdit:r,updateOnDelete:n})=>{const{modalState:o}=j.useContext(Qe);return a.jsxs(Wb,{children:[a.jsxs("div",{children:[a.jsxs("span",{children:[a.jsx(Dr,{}),t.CODIGO]}),a.jsxs("h2",{children:[" ",t.DESCRICAO," "]})]}),a.jsxs("div",{children:[a.jsx(pt,{onClick:()=>{o.set(a.jsx(Bb,{group:t,update:r}))},children:a.jsx("a",{children:"Editar"})}),a.jsx(pt,{onClick:()=>{o.set(a.jsx(Fb,{group:t,updateOnDelete:n}))},children:a.jsx("a",{children:"Remover"})}),a.jsx(pt,{onClick:()=>{o.set(a.jsx(Ub,{usersState:e,groupData:t}))},children:a.jsx("a",{children:" Gerenciar Grupo"})})]})]})},Kb=Q.div`
	box-sizing: border-box;
	padding: 1rem;
	max-height: calc(100% - 4rem);
	overflow: auto;

	> form {
		display: flex;
		align-items: flex-end;
		gap: 1rem;
		padding: 1rem 0;

		> div {
			display: flex;
			flex-direction: column;
			gap: 0.25rem;
		}

		> button {
			font-size: "1rem";
			height: "1.25rem";
			box-sizing: "content-box";
			width: max-content;
		}
		> button:disabled {
			opacity: 0.35;
		}
	}

	> ul {
		box-sizing: border-box;
		width: 100%;
		display: flex;
		flex-direction: column;
		max-height: calc(100% - 7rem);
		overflow: auto;

		border: 2px solid var(--color-grey-6-h);
		background-color: var(--color-grey-7);

		height: calc(100vh - 16rem);
	}
`,Qb=()=>{const e=P(""),t=P([]),r=P([]),n=P(!0),o=c=>{r.set(u=>u.map(d=>d.CODIGO===c.CODIGO?c:d))};j.useEffect(()=>{de({endpoint:"/users",method:"get",service:"users",onSuccess:c=>{t.set(c.data.filter(u=>u.CODIGO>0))}})},[]);const i=c=>{r.set(u=>u.filter(d=>d.CODIGO!=c.CODIGO))},l=c=>{console.log(c),de({endpoint:"/user-groups",method:"post",service:"users",requestData:{DESCRICAO:c},onSuccess:u=>{const d=[...r.value,u.data];r.set(d)}})};j.useEffect(()=>{de({endpoint:"/user-groups",method:"get",service:"users",onSuccess:c=>{r.set(c.data)}})},[]);const s=c=>{e.set(c.target.value),c.target.value.trim().length>=3&&n.value?n.set(!1):c.target.value.trim().length<3&&!n.value&&n.set(!0)};return a.jsxs(Kb,{children:[a.jsxs("h2",{children:[" Operadores ","->"," Grupos "]}),a.jsxs("form",{children:[a.jsxs("div",{style:{width:"20rem"},children:[a.jsx("h3",{children:" Nome do Grupo "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.5,1],$fontSize:1,$width:"100%",leftIcon:null,rightIcon:null,onChange:c=>s(c),value:e.value,maxLength:35,placeholder:"Digite o nome do grupo aqui..."})]}),n.value&&a.jsxs(ft,{disabled:!0,children:[a.jsx(lr,{}),"Adicionar Grupo"]})||a.jsxs(ft,{type:"button",onClick:()=>l(e.value.trim()),children:[a.jsx(lr,{}),"Adicionar Grupo"]})]}),a.jsx("ul",{children:r.value.map(c=>a.jsx(qb,{groupData:c,usersState:t,updateOnEdit:o,updateOnDelete:i},`group_${c.CODIGO}`))})]})},Jb=[{key:"CODIGO",header:"Código",width:6,primarykey:!0,alignContent:"start",filter:{section:"Dados do Operador",type:"input",width:"20rem",icon:a.jsx(Dr,{})}},{key:"CODIGO_ERP",header:"Código ERP",width:6,format:e=>e.CODIGO_ERP||"N/D",filter:{section:"Dados do Operador",type:"input",width:"20rem",icon:a.jsx(Dr,{})}},{key:"ATIVO",header:"Ativo",width:6,format:e=>a.jsx("div",{className:`customer_active_tag ${e.ATIVO==="SIM"?"active":"inactive"}`,children:e.ATIVO==="SIM"?"Ativo":"Inativo"}),filter:{section:"Dados do Operador",type:"select",width:"20rem",icon:a.jsx(lv,{}),placeholder:"Status do operador",options:[{name:"Ativo",value:"SIM"},{name:"Inativo",value:"NAO"},{name:"Ambos",value:void 0}]}},{key:"NIVEL",header:"Nível",width:6,format:e=>{switch(e.NIVEL){case"ATIVO":return a.jsxs(a.Fragment,{children:[" ",a.jsx(ov,{})," Ativo"," "]});case"RECEP":return a.jsxs(a.Fragment,{children:[" ",a.jsx(rv,{})," Receptivo"," "]});case"AMBOS":return a.jsxs(a.Fragment,{children:[" ",a.jsx($h,{})," Ambos"," "]});case"ADMIN":return a.jsxs(a.Fragment,{children:[" ",a.jsx(sv,{})," Supervisor"," "]});default:return"N/D"}},filter:{section:"Dados do Operador",type:"multi-select",width:"20rem",icon:a.jsx(pC,{}),placeholder:"Nível do operador",options:[{name:"Ativo",value:"ATIVO"},{name:"Receptivo",value:"RECEP"},{name:"Ambos",value:"AMBOS"},{name:"Supervisor",value:"ADMIN"}]}},{key:"NOME",header:"Nome",width:16,format:e=>e.NOME||"Não definido",filter:{section:"Dados do Operador",type:"input",width:"41rem",icon:a.jsx(M0,{})}},{key:"LOGIN",header:"Login",width:16,format:e=>e.LOGIN||"Não definido",filter:{section:"Dados do Operador",type:"input",width:"41rem",icon:a.jsx(M0,{})}},{key:"DATACAD",header:"Data Cadastro",width:12,format:e=>e.DATACAD?new Date(e.DATACAD).toLocaleString():"N/D",filter:{section:"Dados do Operador",type:"date-range",width:"41rem"}}],Xb=({operatorId:e})=>a.jsx(Po,{to:`/operadores/${e}`,title:`Editar Operador de ID: ${e}`,style:{fontSize:"1.25rem",display:"flex",alignItems:"center",justifyContent:"center",color:m.colorGrey[2],cursor:"pointer"},children:a.jsx(av,{style:{pointerEvents:"none"}})}),Yb=()=>a.jsx(ia,{$tableHeight:"100%",$tableWidth:"100%",$fontSize:.75,columns:Jb,tableName:"Operadores",$modalFiltersWidth:41,actions:e=>[a.jsx(Xb,{operatorId:e.CODIGO},`actions_${e.CODIGO}`)],requestEndpoint:"/users",service:"users"}),Zb=Q.div`
    box-sizing: border-box;
    display: grid;
    grid-template-areas: "top" "button" "list";
    grid-template-rows: max-content max-content 1fr;
    grid-template-columns: 100%;

    >div:nth-child(1) {
        grid-area: top;
        padding: 1rem;

        @media (max-width: 50rem) {
            padding: 0.5rem ;
        }
    }

    >div:nth-child(2) {
        box-sizing: border-box;
        grid-area: button;
        padding-left: 1rem;
        width: 100%;

        @media (max-width: 50rem) {
            padding: 0 0.5rem ;
        }
    }

    >div:nth-child(3) {
        grid-area: list;
        
        @media (min-width: 50rem) {
            height: calc(100vh - 19rem);
            max-height: calc(100vh - 19rem);
        }
    }
`,eE=()=>a.jsx(V2,{children:a.jsxs("div",{children:[a.jsx(wo,{icon:a.jsx(sv,{}),title:"Supervisores",mainValue:"10",subValue:"5% dos usuários"}),a.jsx(wo,{icon:a.jsx(ov,{}),title:"Operadores (Ativo)",mainValue:"90",subValue:"45% dos usuários"}),a.jsx(wo,{icon:a.jsx(rv,{}),title:"Operadores (Receptivo)",mainValue:"70",subValue:"35% dos usuários"}),a.jsx(wo,{icon:a.jsx($h,{}),title:"Operadores (Ambos)",mainValue:"30",subValue:"15% dos usuários"})]})}),tE=()=>a.jsxs(Zb,{children:[a.jsxs("div",{children:[a.jsx("h1",{children:" Cadastro de Operadores "}),a.jsx(eE,{})]}),a.jsx("div",{children:a.jsx(pt,{children:a.jsx(Po,{to:"/operadores/cadastrar",children:"Adicionar novo operador"})})}),a.jsx(Yb,{})]}),rE=Q.div`
    box-sizing: border-box;
    padding: 1rem;

    >form {
        display: flex;
        align-items: flex-end;
        flex-wrap: wrap;
        gap: 1rem;
        padding: 1rem 0;

        >div {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
        }

        >button {
            width: max-content;
        }
    }

    >ul {
        box-sizing: border-box;
        width: 100%;
        display: flex;
        flex-direction: column;

        border: 2px solid var(--color-grey-6-h);
        background-color: var(--color-grey-7);

        height: calc(100vh - 18rem);
    }
`,nE=()=>{const e=P(""),t=P("NAO"),r=P(60);return a.jsxs(rE,{children:[a.jsxs("h2",{children:[" Operadores ","->"," Pausas "]}),a.jsxs("form",{children:[a.jsxs("div",{style:{width:"20rem"},children:[a.jsx("h3",{children:" Motivo / Descrição "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.5,.5],$fontSize:1,$width:"100%",leftIcon:a.jsx(Eh,{}),rightIcon:null,onChange:n=>e.set(n.target.value),value:e.value,placeholder:"Digite o motivo da pausa aqui..."})]}),a.jsxs("div",{style:{width:"10rem"},children:[a.jsx("h3",{children:" Tempo Limite (seg.)"}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.5,.5],$fontSize:1,$width:"100%",leftIcon:a.jsx(Yy,{}),rightIcon:null,onChange:n=>r.set(Number(n.target.value)),value:r.value,type:"number"})]}),a.jsxs("div",{style:{width:"10rem"},children:[a.jsx("h3",{children:" Produtiva "}),a.jsx(Te,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.5,.5],$fontSize:1,$width:"100%",onChange:n=>t.set(n||"NAO"),options:[{name:"Sim",value:"SIM"},{name:"Não",value:"NAO"}],defaultValue:{name:"Não",value:"NAO"}})]}),a.jsxs(ft,{style:{fontSize:"1rem",height:"1.25rem",boxSizing:"content-box"},children:[a.jsx(Jy,{}),"Adicionar Pausa"]})]}),a.jsx("ul",{})]})},oE=Q.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	width: 18rem;

	> button {
		font-weight: 500;
		padding: 0.5rem 2rem;
		border-radius: 0.25rem;
		border: 1px solid;
		background-color: var(--color-primary);
		border-color: var(--color-primary);
		color: white;

		&:disabled {
			filter: opacity(0.25);
		}

		&:hover {
			filter: opacity(0.75);
		}
	}
`;function iE({shift:e,updateOnDelete:t}){const{modalState:r}=j.useContext(Qe),n=P(""),o=P(!1);async function i(){de({endpoint:`/Shifts/${e.CODIGO}`,method:"delete",service:"users",onSuccess:()=>{Ce.success("Turno deletado com sucesso"),r.reset(),t(e)}})}return a.jsx(bt,{modalState:r,title:"Remover Turno",children:a.jsxs(oE,{children:[a.jsx(V,{..._t,placeholder:`Digite '${e.DESCRICAO}' para confirmar`,value:n.value,onChange:l=>{n.set(l.target.value),l.target.value===e.DESCRICAO?o.set(!0):o.value!=!1&&o.set(!1)}}),o.value&&a.jsx("button",{onClick:i,children:"Confirmar"})||a.jsx("button",{disabled:!0,children:"Confirmar"})]})})}const lE=Q.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 18rem;

	> button {
		font-weight: 500;
		padding: 0.5rem 2rem;
		border-radius: 0.25rem;
		border: 1px solid;
		background-color: var(--color-primary);
		border-color: var(--color-primary);
		color: white;

		&:disabled {
			opacity: 0.35;
		}

		&:hover {
			filter: opacity(0.75);
		}
	}
`;function aE({shift:e,update:t}){const{modalState:r}=j.useContext(Qe),n=P(e),o=P(!1);async function i(){de({endpoint:`/Shifts/${e.CODIGO}`,requestData:{...n.value,DESCRICAO:n.value.DESCRICAO.trim()},method:"patch",service:"users",onSuccess:s=>{Ce.success("Turno atualizado com sucesso"),r.reset(),t(s.data)}})}const l=(s,c)=>{c==="name"?n.set(u=>({...u,DESCRICAO:s.target.value})):c==="entry"?n.set(u=>({...u,ENTRADA_1:s.target.value})):n.set(u=>({...u,SAIDA_1:s.target.value})),s.target.value.trim().length&&o.value?o.set(!1):!o.value&&!s.target.value.trim().length&&o.set(!0)};return a.jsx(bt,{modalState:r,title:"Editar turno",children:a.jsxs(lE,{children:[a.jsx(V,{..._t,placeholder:"Digite o nome do turno",value:n.value.DESCRICAO,onChange:s=>l(s,"name")}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.5,1],$fontSize:.875,$width:"100%",leftIcon:null,rightIcon:null,type:"time",defaultValue:e.ENTRADA_1,onChange:s=>l(s,"entry"),style:{height:"2.375rem"}}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.5,1],$fontSize:.875,$width:"100%",leftIcon:null,rightIcon:null,type:"time",defaultValue:e.SAIDA_1,onChange:s=>l(s,"exit"),style:{height:"2.375rem"}}),a.jsx("button",{onClick:i,disabled:o.value,children:"Confirmar"})]})})}const sE=Q.li`
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: var(--color-grey-2);
	padding: 1rem;
	background-color: var(--color-grey-8);
	width: 100%;
	transition: 0.3s ease-in-out;

	&:nth-child(odd) {
		background-color: var(--color-grey-7);
	}

	&:hover {
		background-color: var(--color-grey-6);
	}

	> div:nth-child(1) {
		display: flex;
		align-items: center;
		gap: 1rem;

		> span:nth-child(1) {
			display: flex;
			align-items: center;
			gap: 0.5rem;
		}
		> h2 {
			width: 10rem;
		}
	}

	> div:nth-child(2) {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
`,cE=({shiftData:e,updateOnEdit:t,updateOnDelete:r})=>{const{modalState:n}=j.useContext(Qe);return a.jsxs(sE,{children:[a.jsxs("div",{children:[a.jsxs("span",{children:[a.jsx(Dr,{})," ",e.CODIGO]}),a.jsxs("h2",{children:[" ",e.DESCRICAO," "]}),a.jsxs("a",{children:[e.ENTRADA_1.slice(0,5)," - ",e.SAIDA_1.slice(0,5)," "]})]}),a.jsxs("div",{children:[a.jsx(pt,{onClick:()=>{n.set(a.jsx(aE,{shift:e,update:t}))},children:a.jsx("a",{children:" Editar "})}),a.jsx(pt,{onClick:()=>{n.set(a.jsx(iE,{shift:e,updateOnDelete:r}))},children:a.jsx("a",{children:" Remover "})})]})]})},uE=Q.div`
	box-sizing: border-box;
	padding: 1rem;
	max-height: calc(100% - 4rem);
	overflow: auto;

	> form {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-end;
		gap: 1rem;
		padding: 1rem 0;

		> div {
			display: flex;
			flex-direction: column;
			gap: 0.25rem;
		}

		> button {
			font-size: "1rem";
			height: "1.25rem";
			box-sizing: "content-box";
			width: max-content;
		}

		> button:disabled {
			opacity: 0.35;
		}
	}

	> ul {
		box-sizing: border-box;
		width: 100%;
		display: flex;
		flex-direction: column;
		max-height: calc(100% - 7rem);
		overflow: auto;

		border: 2px solid var(--color-grey-6-h);
		background-color: var(--color-grey-7);

		height: calc(100vh - 16rem);
	}
`,dE=()=>{const e=P([]),t=P({}),r=P(!0),n=s=>{e.set(c=>c.map(u=>u.CODIGO===s.CODIGO?s:u))},o=s=>{e.set(c=>c.filter(u=>u.CODIGO!=s.CODIGO))},i=()=>{var c;const s={...t.value,DESCRICAO:(c=t.value.DESCRICAO)==null?void 0:c.trim()};de({endpoint:"/shifts",method:"post",service:"users",requestData:s,onSuccess:u=>{const d=[...e.value,u.data];e.set(d)}})};j.useEffect(()=>{de({endpoint:"/shifts",method:"get",service:"users",onSuccess:s=>{e.set(s.data)}})},[]);const l=(s,c)=>{c==="name"?t.set(u=>({...u,DESCRICAO:s.target.value})):c==="entry"?t.set(u=>({...u,ENTRADA_1:s.target.value})):t.set(u=>({...u,SAIDA_1:s.target.value})),s.target.value.trim().length&&r.value?r.set(!1):!r.value&&!s.target.value.trim().length&&r.set(!0)};return a.jsxs(uE,{children:[a.jsxs("h2",{children:[" Operadores ","->"," Turnos "]}),a.jsxs("form",{children:[a.jsxs("div",{style:{width:"14rem"},children:[a.jsx("h3",{children:" Início do Expediente "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.5,1],$fontSize:.875,$width:"100%",leftIcon:null,rightIcon:null,onChange:s=>l(s,"entry"),type:"time",style:{height:"2.375rem"}})]}),a.jsxs("div",{style:{width:"14rem"},children:[a.jsx("h3",{children:" Fim do Expediente "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.5,1],$fontSize:.875,$width:"100%",leftIcon:null,rightIcon:null,onChange:s=>l(s,"exit"),type:"time",style:{height:"2.375rem"}})]}),a.jsxs("div",{style:{width:"20rem"},children:[a.jsx("h3",{children:" Nome do Turno "}),a.jsx(V,{$color:m.colorGrey[3],$focusColor:m.colorGrey[0],$borderColor:m.colorGrey[5],$padding:[.5,1],$fontSize:1,$width:"100%",leftIcon:null,rightIcon:null,onChange:s=>l(s,"name"),placeholder:"Digite o nome do turno aqui...",style:{height:"2.375rem"}})]}),r.value&&a.jsxs(ft,{disabled:!0,children:[a.jsx(lr,{}),"Adicionar Turno"]})||a.jsxs(ft,{type:"button",onClick:()=>i(),children:[a.jsx(lr,{}),"Adicionar Turno"]})]}),a.jsx("ul",{children:e.value.map(s=>a.jsx(cE,{shiftData:s,updateOnEdit:n,updateOnDelete:o},`shift_${s.CODIGO}`))})]})},fE=e=>document.title=e,hE=()=>{const e=No();return j.useEffect(()=>{fE("inPulse: "+e.pathname.replace("/","").replace("/"," -> ").replace("_"," "))},[e]),a.jsxs(y4,{children:[a.jsx(Ne,{path:"/",element:a.jsx(Sb,{})}),a.jsxs(a.Fragment,{children:[a.jsx(Ne,{path:"/clientes",element:a.jsx(J7,{})}),a.jsx(Ne,{path:"/clientes/cadastrar",element:a.jsx(om,{children:a.jsx(im,{mode:"create"})})}),a.jsx(Ne,{path:"/clientes/:customerId",element:a.jsx(om,{children:a.jsx(im,{mode:"edit"})})}),a.jsx(Ne,{path:"/clientes/grupos",element:a.jsx(B7,{})}),a.jsx(Ne,{path:"/clientes/segmentos",element:a.jsx(wb,{})}),a.jsx(Ne,{path:"/clientes/cargos",element:a.jsx(fb,{})}),a.jsx(Ne,{path:"/clientes/origens",element:a.jsx(ob,{})}),a.jsx(Ne,{path:"/clientes/marcas",element:a.jsx(D7,{})})]}),a.jsxs(a.Fragment,{children:[a.jsx(Ne,{path:"/operadores",element:a.jsx(tE,{})}),a.jsx(Ne,{path:"/operadores/cadastrar",element:a.jsx(lm,{children:a.jsx(am,{mode:"create"})})}),a.jsx(Ne,{path:"/operadores/:operatorId",element:a.jsx(lm,{children:a.jsx(am,{mode:"edit"})})}),a.jsx(Ne,{path:"/operadores/grupos",element:a.jsx(Qb,{})}),a.jsx(Ne,{path:"/operadores/turnos",element:a.jsx(dE,{})}),a.jsx(Ne,{path:"/operadores/pausas",element:a.jsx(nE,{})}),a.jsx(Ne,{path:"/operadores/metas",element:a.jsx(Mb,{})}),a.jsx(Ne,{path:"/operadores/vendas",element:a.jsx(Nb,{})})]}),a.jsx(a.Fragment,{children:a.jsx(Ne,{path:"/campanhas/unidades",element:a.jsx(j7,{})})}),a.jsxs(a.Fragment,{children:[a.jsx(Ne,{path:"/monitor/agenda",element:a.jsx(Db,{})}),a.jsx(Ne,{path:"/monitor/pausas_realizadas",element:a.jsx(jb,{})})]}),a.jsxs(a.Fragment,{children:[a.jsx(Ne,{path:"/relatorios/construtor",element:a.jsx(a.Fragment,{})}),a.jsx(Ne,{path:"/relatorios/analise_de_mailing",element:a.jsx(a.Fragment,{})}),a.jsx(Ne,{path:"/relatorios/bilhetagem",element:a.jsx(a.Fragment,{})}),a.jsx(Ne,{path:"/relatorios/curva_abc_de_ligacoes",element:a.jsx(a.Fragment,{})}),a.jsx(Ne,{path:"/relatorios/produtividade",element:a.jsx(a.Fragment,{})}),a.jsx(Ne,{path:"/relatorios/propostas",element:a.jsx(a.Fragment,{})}),a.jsx(Ne,{path:"/relatorios/ordem_das_ligacoes",element:a.jsx(a.Fragment,{})}),a.jsx(Ne,{path:"/relatorios/pesquisa_de_satisfacao",element:a.jsx(a.Fragment,{})}),a.jsx(Ne,{path:"/relatorios/regua_por_carteira",element:a.jsx(a.Fragment,{})}),a.jsx(Ne,{path:"/relatorios/pausas_realizadas",element:a.jsx(a.Fragment,{})}),a.jsx(Ne,{path:"/relatorios/analise_de_campanhas",element:a.jsx(a.Fragment,{})})]})]})},pE=Q.header`
    z-index: 1;
    background-color: var(--color-grey-7-h);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(99, 99, 99, 0.1);

    &>a:nth-child(1)>div {
        display: flex;
        align-items: center;
        gap: 2rem;
        padding: 1rem;
        width: max-content;
        cursor: pointer;

        :hover {
            filter: brightness(1.1);
        }
        
        >button {
            font-size: 1.25rem;

            @media (min-width: 48rem) {
                display: none;
            }
        }

        >img {
            height: 2.5rem;
            pointer-events: none;

            @media (max-width: 48rem) {
                display: none;
            }
        }

        >h2 {
            color: var(--color-gray-8);
            font-weight: 500;
            font-size: 1rem;
        }
    }

    &>div.user_box {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;

        border-top-left-radius: 0.5rem;
        border-bottom-left-radius: 0.5rem;

        box-sizing: border-box;
        width: max-content;
        max-width: 20rem;
        height: 100%;
        padding: 1rem;

        background-color: var(--color-primary);
        color: white;
        overflow: hidden;

        >svg {
            font-size: 3rem;
            min-width: 3rem;
        }
        
        >div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            font-size: 1rem;
            font-weight: 500;

            >p {
                overflow: hidden;
                white-space: nowrap;
            }

            >div {
                >span:hover {
                    cursor: pointer;
                    text-decoration: underline;
                }
            }

        }
    }
`,mE="/assets/logoh_transparent-Dn-rm1EZ.png",gE="/assets/logoh_transparent_dark-DUDHlgI_.png",yE=({navigationMenuState:e})=>{const{darkModeState:t,userState:r,logout:n}=j.useContext(Qe),o=t.value?gE:mE,i=e.value?a.jsx(ra,{color:m.colorGrey[0]}):a.jsx(Gw,{color:m.colorGrey[0]}),l=()=>e.set(c=>!c),s=()=>{t.set(c=>(localStorage.setItem("@inpulse/dark-mode",c?"0":"1"),!c))};return a.jsxs(pE,{children:[a.jsx("a",{href:"/",children:a.jsxs("div",{children:[a.jsx("button",{onClick:l,children:i}),a.jsx("img",{src:o,alt:"Logo"})]})}),a.jsxs("div",{className:"user_box",children:[a.jsx(Kw,{}),a.jsxs("div",{children:[a.jsxs("p",{children:[" Olá, ",a.jsxs("b",{children:[" ",r.value.NOME," "]})]}),a.jsxs("div",{children:[a.jsx("span",{onClick:s,children:"Preferências"}),a.jsx("span",{children:" | "}),a.jsx("span",{onClick:n,children:"Saír"})]})]})]})]})},vE=[{id:1,icon:a.jsx(uv,{}),text:"Clientes",path:"/clientes",subMenu:{options:[{text:"Clientes",path:"/clientes"},{text:"Grupos",path:"/clientes/grupos"},{text:"Segmentos",path:"/clientes/segmentos"},{text:"Cargos",path:"/clientes/cargos"},{text:"Origens",path:"/clientes/origens"},{text:"Marcas",path:"/clientes/marcas"}]}},{id:2,icon:a.jsx($h,{}),text:"Operadores",path:"/operadores",subMenu:{options:[{text:"Operadores",path:"/operadores"},{text:"Grupos",path:"/operadores/grupos"},{text:"Turnos",path:"/operadores/turnos"},{text:"Pausas",path:"/operadores/pausas"},{text:"Metas",path:"/operadores/metas"},{text:"Vendas",path:"/operadores/vendas"}]}},{id:3,icon:a.jsx(Hw,{}),text:"Campanhas",path:"/campanhas",subMenu:{options:[{text:"Unidades",path:"/campanhas/unidades"},{text:"Campanhas",path:"/campanhas"},{text:"Resultados",path:"/campanhas/resultados"},{text:"Ordem",path:"/campanhas/ordem"}]}},{id:4,icon:a.jsx(nC,{}),text:"Outros Cadastros",path:"/outros",subMenu:{options:[{text:"Exceções",path:"/outros/excecoes"},{text:"Cidades",path:"/outros/cidades"},{text:"Estados",path:"/outros/estados"},{text:"Pesquisas",path:"/outros/pesquisas_satisfacao"}]}},{id:5,icon:a.jsx(Jw,{}),text:"Monitor",path:"/monitor",subMenu:{options:[{text:"Agenda",path:"/monitor/agenda"},{text:"Pausas realizadas",path:"/monitor/pausas_realizadas"},{text:"Chamadas recebidas",path:"/monitor/chamadas_recebidas"},{text:"Recompra a expirar",path:"/monitor/recompra_a_expirar"},{text:"Fila de atendimento",path:"/monitor/fila_de_atendimento"},{text:"Clientes a bloquear",path:"/monitor/clientes_a_bloquear"}]}},{id:6,icon:a.jsx(vC,{}),text:"Ferramentas",path:"/ferramentas",subMenu:{options:[{text:"Importador",path:"/ferramentas/importador"},{text:"Configurações",path:"/ferramentas/configuracoes"},{text:"Rotinas",path:"/ferramentas/rotinas"},{text:"Funcionalidades Telefonicas",path:"/ferramentas/funcionalidades_telefonicas"},{text:"Exportar alterações nos clientes",path:"/ferramentas/exportar_alteracoes_nos_clientes"},{text:"Transferências de clientes",path:"/ferramentas/funcionalidades_telefonicas"}]}},{id:7,icon:a.jsx(Ww,{}),text:"Relatórios",path:"/relatorios",subMenu:{options:[{text:"Construtor de relatórios",path:"/relatorios/construtor"},{text:"Análise de mailing",path:"/relatorios/analise_de_mailing"},{text:"Bilhetagem",path:"/relatorios/bilhetagem"},{text:"Curva ABC de ligações",path:"/relatorios/curva_abc_de_ligacoes"},{text:"Produtividade",path:"/relatorios/produtividade"},{text:"Propostas",path:"/relatorios/propostas"},{text:"Ordem das ligações",path:"/relatorios/ordem_das_ligacoes"},{text:"Pesquisa de satisfação",path:"/relatorios/pesquisa_de_satisfacao"},{text:"Régua por carteira",path:"/relatorios/regua_por_carteira"},{text:"Pausas realizadas",path:"/relatorios/pausas_realizadas"},{text:"Análise de campanhas",path:"/relatorios/analise_de_campanhas"}]}}],xE=Q.nav`
    box-sizing: border-box;
    background-color: var(--color-grey-7-h);
    box-shadow: 0 0 3px 1px rgba(99, 99, 99, 0.2);
    color: var(--color-grey-2);

    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;

    @media (max-width: 50rem) {
        position: absolute;
        z-index: 2;
        left: 0;
        top: 4rem;
        width: 100%;
    }
`,wE=Q.div`
    width: 100%;

    >button {
        width: 100%;
        box-sizing: border-box;
        padding: 1rem;
        height: 6rem;

        display: flex;
        align-items: center;
        gap: 1rem;
        
        font-weight: 600;

        cursor: pointer;

        @media (max-width: 50rem) {
            height: 4rem;
        }
        color: var(--color-grey-2);
   
        &>svg.angle_down {
            font-size: 0.75rem;
            margin-left: auto;

            @media (min-width: 48rem) {
                display: none;
            }
        }

        &>svg:nth-child(1) {
            font-size: 1.5rem;
        }

        @media (min-width: 48rem) {
            flex-direction: column
        }

        &.selected {
            color: var(--color-primary);
        }

        &:hover {
            background-color: var(--color-primary);
            color: white;
        }
    }
    
    @keyframes custom-hidden {
        0% {
            opacity: 0;
        } 80% {
            opacity: 0;
        } 100% {
            opacity: 1;
        }
    }
`,CE=Q.div`
    display: flex;
    flex-direction: column;
    background-color: var(--color-grey-7);

    >header {
        padding: 1rem;
        gap: 1rem;
        background-color: rgba(0,0,0, 0.075);
        display: none;

        >div {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        >button {
            transition: 0.3s ease-in-out;
            color: var(--color-grey-2);

            >svg {
                pointer-events: none;
            }
            &:hover {
                transform: scale(1.25);
            }
        }
    }

    @media (max-width: 50rem) {
        transition: height 0.5s ease-in-out;
        height: max-content;

        ${e=>!e.$displaySubMenu&&Ge`
            height: 0;
            box-shadow: none;
            * {
                display: none;
            }
            overflow: hidden;
        `}
    }

    @media (min-width: 50rem) {
        position: absolute;
        left: 6rem;
        width: 16rem;
        top: 4rem;
        height: calc(100vh - 4rem);
        box-shadow: 1px 0 1px 1px rgba(99, 99, 99, 0.2);
        transition: width 0.5s ease-in-out;
        white-space: nowrap;
        z-index: 2;

        * {
            animation: custom-hidden 0.5s ease-in-out;
        }

        >button:nth-child(odd) {
            background-color: rgba(99, 99, 99, 0.025);
        }

        ${e=>!e.$displaySubMenu&&Ge`
            width: 0;
            height: 0;
            box-shadow: none;
            * {
                display: none;
            }
            overflow: hidden;
        `}

        >header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }

    >button {
        padding: 1rem;
        padding-left: 3.25rem;
        text-align: start;
        color: var(--color-grey-2);

        &.selected {
            color: var(--color-primary);
        }

        >p {
            pointer-events: none;
        }

        &:hover {
            background-color: var(--color-primary);
            color: white;

            >p {
                transform: scale(1.05); 
            }
        }
    }
    
`,SE=({option:e,selectedOptionIdState:t,$displaySubMenu:r})=>{const n=ea(),o=location.pathname,i=l=>()=>{t.reset(),n(l)};return a.jsxs(CE,{$displaySubMenu:r,children:[a.jsxs("header",{children:[a.jsxs("div",{children:[e.icon,a.jsx("p",{children:e.text})]}),a.jsx("button",{onClick:t.reset,children:a.jsx(ra,{})})]}),e.subMenu.options.map((l,s)=>a.jsx("button",{onClick:i(l.path),className:o===l.path?"selected":"",children:a.jsxs("p",{children:[" ",l.text," "]})},`menu_option_${e.id}/${s}`))]})},$E=({navigationMenuState:e})=>{const t=P(vE),r=P(0),o=No().pathname;return a.jsx(xE,{children:t.value.map(i=>a.jsxs(wE,{children:[a.jsxs("button",{onClick:()=>{r.set(r.value===i.id?0:i.id),e.set(!0)},className:o.includes(i.path)?"selected":"",children:[a.jsx(a.Fragment,{children:i.icon}),a.jsx("p",{children:i.text}),i.subMenu&&e.value&&a.jsx(_i,{className:"angle_down"})]}),i.subMenu&&a.jsx(SE,{option:i,selectedOptionIdState:r,$displaySubMenu:r.value===i.id})]},`menu_option_${i.id}`))})},bE=Q.div`
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;

    display: grid;
    grid-template-areas: 
        "header header"
        "menu content"
    ;

    grid-template-rows: 4rem calc(100vh - 4rem);
    grid-template-columns: 6rem calc(100vw - 6rem);

    background-color: var(--color-grey-8);
    color: var(--color-grey-0);

    @media (max-width: 50rem) {
        grid-template-areas: "header" "content";
        grid-template-columns: 100vw;

        height: max-content;
    }

    ${e=>!e.$displayNavigationMenu&&Ge`
                @media (max-width: 48rem) {
                    display: grid;
                    grid-template-areas: 
                        "header"
                        "content"
                    ;

                    grid-template-rows: 4rem 1fr;
                    grid-template-columns: 100%;

                    &>:nth-child(2) {
                        display: none;
                    }
                }

        `}

    &>:nth-child(1) {
        grid-area: header;
    }

    &>:nth-child(2) {
        @media (min-width: 50rem) {
            grid-area: menu;
        }
    }

    &>:nth-child(3) {
        grid-area: content;
        box-sizing: border-box;
    }

`,EE=()=>{const e=P(!1);return a.jsxs(bE,{$displayNavigationMenu:e.value,children:[a.jsx(yE,{navigationMenuState:e}),a.jsx($E,{navigationMenuState:e}),a.jsx(hE,{})]})},jE=Ge`
    :root {
        --color-primary: rgb(245, 90, 75);
		--color-primary-o: rgba(245, 90, 75, 0.2);
		--color-primary-so: rgba(245, 90, 75, 0.125);
        --color-grey-8: #15171A;
        --color-grey-7-h: #212529;
        --color-grey-7: #2B2F33;
        --color-grey-6-h: #495057; /* Tonalidade intermediária */
        --color-grey-6: #868E96;
        --color-grey-5: #ADB5BD;
        --color-grey-4: #CED4DA;
        --color-grey-3: #DEE2E6;
        --color-grey-2: #F0F1F3;
        --color-grey-1: #F1F3F5;
        --color-grey-0: #F8F9FA;

		--color-grey-8-o: rgba(21,23,26, 0.125);
		--color-grey-0-o: rgba(248, 249, 250, 0.125);
		
		* {
			color-scheme: dark !important;
		}
    }
`,kE=Ge`
    :root {
        --color-primary: rgb(245, 90, 75);
		--color-primary-o: rgba(245, 90, 75, 0.2);
		--color-primary-so: rgba(245, 90, 75, 0.125);
        --color-grey-0: #15171A;
        --color-grey-1: #212529;
        --color-grey-2: #2B2F33;
        --color-grey-3: #495057; /* Tonalidade intermediária */
        --color-grey-4: #868E96;
        --color-grey-5: #ADB5BD;
        --color-grey-6: #CED4DA;
        --color-grey-6-h: #DEE2E6;
        --color-grey-7: #F0F1F3;
        --color-grey-7-h: #F1F3F5;
        --color-grey-8: #F8F9FA;

		--color-grey-0-o: rgba(21, 23, 27, 0.125);
    }
`,OE=Iw`
${e=>e.darkMode?jE:kE};

/* Reset CSS */
* {
	margin: 0;
	padding: 0;
	border: none;
	outline: none;

	background: none;
	cursor: default;
}

/* Global */
h1 {
	font-size: 1.125rem;
	font-weight: 500;
	color: var(--color-grey-0);
}

h2 {
	font-size: 1rem;
	font-weight: 500;
	color: var(--color-grey-1);
}

h3 {
	font-size: 0.875rem;
	font-weight: 500;
	color: var(--color-grey-2);
}

body {
	font-family: 'Rethink Sans', sans-serif;
	font-size: 0.875rem;
	font-weight: 400;

	width: 100vw;
	height: 100vh;
	box-sizing: border-box;

	color: var(--color-grey-2);
}


#root {
	width: 100%;
	height: 100%;
	background-color: var(--color-grey-8);
}

button {
	cursor: pointer !important;
	transition: 0.2s ease-in-out;
}

button:disabled {
	pointer-events: none;
	cursor: default !important;
}

button>svg {
	pointer-events: none;
}

::-webkit-scrollbar {
	width: 0.5rem;
	height: 0.5rem;
}

::-webkit-scrollbar-thumb {
	background-color: var(--color-primary);
}

.phone_input_container {
	font-family: 'Rethink Sans', sans-serif;
}

.phone_input_dropdown>.country:hover {
	background: var(--color-grey-6-h) !important;
}

.phone_input_dropdown>.country.highlight {
	background: var(--color-grey-6) !important;
	color: var(--color-grey-2) !important;
}

.phone_input_button>.selected-flag:hover {
	background: var(--color-grey-6) !important;
}

.phone_input_button>.selected-flag.open {
	background: var(--color-grey-5) !important;
}

.customer_active_tag {
	box-sizing: border-box;
	border: 1px solid;
	width: max-content;
	text-align: center;
	padding: 0.125rem 1rem;
	border-radius: 0.25rem;
	font-weight: 600;
	font-size: 0.75rem;

	user-select: none;
}

.customer_active_tag.active {
	background-color: rgba(70, 200, 50, 0.125);
	color: rgb(70, 200, 50);
}

.customer_active_tag.inactive {
	background-color: rgba(200, 70, 50, 0.125);
	color: rgb(200, 70, 50);
}

`,_E=()=>{const{darkModeState:e,userState:t,modalState:r}=j.useContext(Qe),n=!!t.value;return a.jsxs(a.Fragment,{children:[a.jsx(OE,{darkMode:e.value}),a.jsx(cf,{}),n?a.jsx(EE,{}):a.jsx(u6,{}),r.value]})};Qu.createRoot(document.getElementById("root")).render(a.jsx(Se.StrictMode,{children:a.jsx(b4,{children:a.jsx(o6,{children:a.jsx(_E,{})})})}));
