(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();function WA(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var a_={exports:{}},yc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X0;function LO(){if(X0)return yc;X0=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(i,s,o){var u=null;if(o!==void 0&&(u=""+o),s.key!==void 0&&(u=""+s.key),"key"in s){o={};for(var h in s)h!=="key"&&(o[h]=s[h])}else o=s;return s=o.ref,{$$typeof:n,type:i,key:u,ref:s!==void 0?s:null,props:o}}return yc.Fragment=e,yc.jsx=t,yc.jsxs=t,yc}var Z0;function VO(){return Z0||(Z0=1,a_.exports=LO()),a_.exports}var b=VO(),o_={exports:{}},Oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J0;function UO(){if(J0)return Oe;J0=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function T(k){return k===null||typeof k!="object"?null:(k=v&&k[v]||k["@@iterator"],typeof k=="function"?k:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,P={};function L(k,te,ce){this.props=k,this.context=te,this.refs=P,this.updater=ce||C}L.prototype.isReactComponent={},L.prototype.setState=function(k,te){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,te,"setState")},L.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function H(){}H.prototype=L.prototype;function J(k,te,ce){this.props=k,this.context=te,this.refs=P,this.updater=ce||C}var W=J.prototype=new H;W.constructor=J,O(W,L.prototype),W.isPureReactComponent=!0;var re=Array.isArray,K={H:null,A:null,T:null,S:null,V:null},ae=Object.prototype.hasOwnProperty;function N(k,te,ce,oe,ge,Ne){return ce=Ne.ref,{$$typeof:n,type:k,key:te,ref:ce!==void 0?ce:null,props:Ne}}function R(k,te){return N(k.type,te,void 0,void 0,void 0,k.props)}function I(k){return typeof k=="object"&&k!==null&&k.$$typeof===n}function M(k){var te={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(ce){return te[ce]})}var U=/\/+/g;function j(k,te){return typeof k=="object"&&k!==null&&k.key!=null?M(""+k.key):te.toString(36)}function x(){}function Et(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(x,x):(k.status="pending",k.then(function(te){k.status==="pending"&&(k.status="fulfilled",k.value=te)},function(te){k.status==="pending"&&(k.status="rejected",k.reason=te)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function dt(k,te,ce,oe,ge){var Ne=typeof k;(Ne==="undefined"||Ne==="boolean")&&(k=null);var ve=!1;if(k===null)ve=!0;else switch(Ne){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(k.$$typeof){case n:case e:ve=!0;break;case _:return ve=k._init,dt(ve(k._payload),te,ce,oe,ge)}}if(ve)return ge=ge(k),ve=oe===""?"."+j(k,0):oe,re(ge)?(ce="",ve!=null&&(ce=ve.replace(U,"$&/")+"/"),dt(ge,te,ce,"",function(Yt){return Yt})):ge!=null&&(I(ge)&&(ge=R(ge,ce+(ge.key==null||k&&k.key===ge.key?"":(""+ge.key).replace(U,"$&/")+"/")+ve)),te.push(ge)),1;ve=0;var Tt=oe===""?".":oe+":";if(re(k))for(var We=0;We<k.length;We++)oe=k[We],Ne=Tt+j(oe,We),ve+=dt(oe,te,ce,Ne,ge);else if(We=T(k),typeof We=="function")for(k=We.call(k),We=0;!(oe=k.next()).done;)oe=oe.value,Ne=Tt+j(oe,We++),ve+=dt(oe,te,ce,Ne,ge);else if(Ne==="object"){if(typeof k.then=="function")return dt(Et(k),te,ce,oe,ge);throw te=String(k),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.")}return ve}function X(k,te,ce){if(k==null)return k;var oe=[],ge=0;return dt(k,oe,"","",function(Ne){return te.call(ce,Ne,ge++)}),oe}function he(k){if(k._status===-1){var te=k._result;te=te(),te.then(function(ce){(k._status===0||k._status===-1)&&(k._status=1,k._result=ce)},function(ce){(k._status===0||k._status===-1)&&(k._status=2,k._result=ce)}),k._status===-1&&(k._status=0,k._result=te)}if(k._status===1)return k._result.default;throw k._result}var pe=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var te=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(te))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)};function xe(){}return Oe.Children={map:X,forEach:function(k,te,ce){X(k,function(){te.apply(this,arguments)},ce)},count:function(k){var te=0;return X(k,function(){te++}),te},toArray:function(k){return X(k,function(te){return te})||[]},only:function(k){if(!I(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},Oe.Component=L,Oe.Fragment=t,Oe.Profiler=s,Oe.PureComponent=J,Oe.StrictMode=i,Oe.Suspense=m,Oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,Oe.__COMPILER_RUNTIME={__proto__:null,c:function(k){return K.H.useMemoCache(k)}},Oe.cache=function(k){return function(){return k.apply(null,arguments)}},Oe.cloneElement=function(k,te,ce){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var oe=O({},k.props),ge=k.key,Ne=void 0;if(te!=null)for(ve in te.ref!==void 0&&(Ne=void 0),te.key!==void 0&&(ge=""+te.key),te)!ae.call(te,ve)||ve==="key"||ve==="__self"||ve==="__source"||ve==="ref"&&te.ref===void 0||(oe[ve]=te[ve]);var ve=arguments.length-2;if(ve===1)oe.children=ce;else if(1<ve){for(var Tt=Array(ve),We=0;We<ve;We++)Tt[We]=arguments[We+2];oe.children=Tt}return N(k.type,ge,void 0,void 0,Ne,oe)},Oe.createContext=function(k){return k={$$typeof:u,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:o,_context:k},k},Oe.createElement=function(k,te,ce){var oe,ge={},Ne=null;if(te!=null)for(oe in te.key!==void 0&&(Ne=""+te.key),te)ae.call(te,oe)&&oe!=="key"&&oe!=="__self"&&oe!=="__source"&&(ge[oe]=te[oe]);var ve=arguments.length-2;if(ve===1)ge.children=ce;else if(1<ve){for(var Tt=Array(ve),We=0;We<ve;We++)Tt[We]=arguments[We+2];ge.children=Tt}if(k&&k.defaultProps)for(oe in ve=k.defaultProps,ve)ge[oe]===void 0&&(ge[oe]=ve[oe]);return N(k,Ne,void 0,void 0,null,ge)},Oe.createRef=function(){return{current:null}},Oe.forwardRef=function(k){return{$$typeof:h,render:k}},Oe.isValidElement=I,Oe.lazy=function(k){return{$$typeof:_,_payload:{_status:-1,_result:k},_init:he}},Oe.memo=function(k,te){return{$$typeof:p,type:k,compare:te===void 0?null:te}},Oe.startTransition=function(k){var te=K.T,ce={};K.T=ce;try{var oe=k(),ge=K.S;ge!==null&&ge(ce,oe),typeof oe=="object"&&oe!==null&&typeof oe.then=="function"&&oe.then(xe,pe)}catch(Ne){pe(Ne)}finally{K.T=te}},Oe.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},Oe.use=function(k){return K.H.use(k)},Oe.useActionState=function(k,te,ce){return K.H.useActionState(k,te,ce)},Oe.useCallback=function(k,te){return K.H.useCallback(k,te)},Oe.useContext=function(k){return K.H.useContext(k)},Oe.useDebugValue=function(){},Oe.useDeferredValue=function(k,te){return K.H.useDeferredValue(k,te)},Oe.useEffect=function(k,te,ce){var oe=K.H;if(typeof ce=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return oe.useEffect(k,te)},Oe.useId=function(){return K.H.useId()},Oe.useImperativeHandle=function(k,te,ce){return K.H.useImperativeHandle(k,te,ce)},Oe.useInsertionEffect=function(k,te){return K.H.useInsertionEffect(k,te)},Oe.useLayoutEffect=function(k,te){return K.H.useLayoutEffect(k,te)},Oe.useMemo=function(k,te){return K.H.useMemo(k,te)},Oe.useOptimistic=function(k,te){return K.H.useOptimistic(k,te)},Oe.useReducer=function(k,te,ce){return K.H.useReducer(k,te,ce)},Oe.useRef=function(k){return K.H.useRef(k)},Oe.useState=function(k){return K.H.useState(k)},Oe.useSyncExternalStore=function(k,te,ce){return K.H.useSyncExternalStore(k,te,ce)},Oe.useTransition=function(){return K.H.useTransition()},Oe.version="19.1.0",Oe}var eb;function qy(){return eb||(eb=1,o_.exports=UO()),o_.exports}var z=qy();const jO=WA(z);var l_={exports:{}},vc={},u_={exports:{}},c_={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tb;function FO(){return tb||(tb=1,function(n){function e(X,he){var pe=X.length;X.push(he);e:for(;0<pe;){var xe=pe-1>>>1,k=X[xe];if(0<s(k,he))X[xe]=he,X[pe]=k,pe=xe;else break e}}function t(X){return X.length===0?null:X[0]}function i(X){if(X.length===0)return null;var he=X[0],pe=X.pop();if(pe!==he){X[0]=pe;e:for(var xe=0,k=X.length,te=k>>>1;xe<te;){var ce=2*(xe+1)-1,oe=X[ce],ge=ce+1,Ne=X[ge];if(0>s(oe,pe))ge<k&&0>s(Ne,oe)?(X[xe]=Ne,X[ge]=pe,xe=ge):(X[xe]=oe,X[ce]=pe,xe=ce);else if(ge<k&&0>s(Ne,pe))X[xe]=Ne,X[ge]=pe,xe=ge;else break e}}return he}function s(X,he){var pe=X.sortIndex-he.sortIndex;return pe!==0?pe:X.id-he.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var o=performance;n.unstable_now=function(){return o.now()}}else{var u=Date,h=u.now();n.unstable_now=function(){return u.now()-h}}var m=[],p=[],_=1,v=null,T=3,C=!1,O=!1,P=!1,L=!1,H=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;function re(X){for(var he=t(p);he!==null;){if(he.callback===null)i(p);else if(he.startTime<=X)i(p),he.sortIndex=he.expirationTime,e(m,he);else break;he=t(p)}}function K(X){if(P=!1,re(X),!O)if(t(m)!==null)O=!0,ae||(ae=!0,j());else{var he=t(p);he!==null&&dt(K,he.startTime-X)}}var ae=!1,N=-1,R=5,I=-1;function M(){return L?!0:!(n.unstable_now()-I<R)}function U(){if(L=!1,ae){var X=n.unstable_now();I=X;var he=!0;try{e:{O=!1,P&&(P=!1,J(N),N=-1),C=!0;var pe=T;try{t:{for(re(X),v=t(m);v!==null&&!(v.expirationTime>X&&M());){var xe=v.callback;if(typeof xe=="function"){v.callback=null,T=v.priorityLevel;var k=xe(v.expirationTime<=X);if(X=n.unstable_now(),typeof k=="function"){v.callback=k,re(X),he=!0;break t}v===t(m)&&i(m),re(X)}else i(m);v=t(m)}if(v!==null)he=!0;else{var te=t(p);te!==null&&dt(K,te.startTime-X),he=!1}}break e}finally{v=null,T=pe,C=!1}he=void 0}}finally{he?j():ae=!1}}}var j;if(typeof W=="function")j=function(){W(U)};else if(typeof MessageChannel<"u"){var x=new MessageChannel,Et=x.port2;x.port1.onmessage=U,j=function(){Et.postMessage(null)}}else j=function(){H(U,0)};function dt(X,he){N=H(function(){X(n.unstable_now())},he)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(X){X.callback=null},n.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<X?Math.floor(1e3/X):5},n.unstable_getCurrentPriorityLevel=function(){return T},n.unstable_next=function(X){switch(T){case 1:case 2:case 3:var he=3;break;default:he=T}var pe=T;T=he;try{return X()}finally{T=pe}},n.unstable_requestPaint=function(){L=!0},n.unstable_runWithPriority=function(X,he){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var pe=T;T=X;try{return he()}finally{T=pe}},n.unstable_scheduleCallback=function(X,he,pe){var xe=n.unstable_now();switch(typeof pe=="object"&&pe!==null?(pe=pe.delay,pe=typeof pe=="number"&&0<pe?xe+pe:xe):pe=xe,X){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=pe+k,X={id:_++,callback:he,priorityLevel:X,startTime:pe,expirationTime:k,sortIndex:-1},pe>xe?(X.sortIndex=pe,e(p,X),t(m)===null&&X===t(p)&&(P?(J(N),N=-1):P=!0,dt(K,pe-xe))):(X.sortIndex=k,e(m,X),O||C||(O=!0,ae||(ae=!0,j()))),X},n.unstable_shouldYield=M,n.unstable_wrapCallback=function(X){var he=T;return function(){var pe=T;T=he;try{return X.apply(this,arguments)}finally{T=pe}}}}(c_)),c_}var nb;function BO(){return nb||(nb=1,u_.exports=FO()),u_.exports}var h_={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ib;function zO(){if(ib)return Rn;ib=1;var n=qy();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var i={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},s=Symbol.for("react.portal");function o(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var u=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,Rn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return o(m,p,null,_)},Rn.flushSync=function(m){var p=u.T,_=i.p;try{if(u.T=null,i.p=2,m)return m()}finally{u.T=p,i.p=_,i.d.f()}},Rn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,i.d.C(m,p))},Rn.prefetchDNS=function(m){typeof m=="string"&&i.d.D(m)},Rn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin),T=typeof p.integrity=="string"?p.integrity:void 0,C=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?i.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:T,fetchPriority:C}):_==="script"&&i.d.X(m,{crossOrigin:v,integrity:T,fetchPriority:C,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Rn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);i.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&i.d.M(m)},Rn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin);i.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Rn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);i.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else i.d.m(m)},Rn.requestFormReset=function(m){i.d.r(m)},Rn.unstable_batchedUpdates=function(m,p){return m(p)},Rn.useFormState=function(m,p,_){return u.H.useFormState(m,p,_)},Rn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Rn.version="19.1.0",Rn}var rb;function qO(){if(rb)return h_.exports;rb=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),h_.exports=zO(),h_.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sb;function HO(){if(sb)return vc;sb=1;var n=BO(),e=qy(),t=qO();function i(r){var a="https://react.dev/errors/"+r;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)a+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+r+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function o(r){var a=r,l=r;if(r.alternate)for(;a.return;)a=a.return;else{r=a;do a=r,(a.flags&4098)!==0&&(l=a.return),r=a.return;while(r)}return a.tag===3?l:null}function u(r){if(r.tag===13){var a=r.memoizedState;if(a===null&&(r=r.alternate,r!==null&&(a=r.memoizedState)),a!==null)return a.dehydrated}return null}function h(r){if(o(r)!==r)throw Error(i(188))}function m(r){var a=r.alternate;if(!a){if(a=o(r),a===null)throw Error(i(188));return a!==r?null:r}for(var l=r,c=a;;){var d=l.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){l=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===l)return h(d),r;if(g===c)return h(d),a;g=g.sibling}throw Error(i(188))}if(l.return!==c.return)l=d,c=g;else{for(var w=!1,S=d.child;S;){if(S===l){w=!0,l=d,c=g;break}if(S===c){w=!0,c=d,l=g;break}S=S.sibling}if(!w){for(S=g.child;S;){if(S===l){w=!0,l=g,c=d;break}if(S===c){w=!0,c=g,l=d;break}S=S.sibling}if(!w)throw Error(i(189))}}if(l.alternate!==c)throw Error(i(190))}if(l.tag!==3)throw Error(i(188));return l.stateNode.current===l?r:a}function p(r){var a=r.tag;if(a===5||a===26||a===27||a===6)return r;for(r=r.child;r!==null;){if(a=p(r),a!==null)return a;r=r.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),T=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),H=Symbol.for("react.provider"),J=Symbol.for("react.consumer"),W=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),M=Symbol.for("react.memo_cache_sentinel"),U=Symbol.iterator;function j(r){return r===null||typeof r!="object"?null:(r=U&&r[U]||r["@@iterator"],typeof r=="function"?r:null)}var x=Symbol.for("react.client.reference");function Et(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===x?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case O:return"Fragment";case L:return"Profiler";case P:return"StrictMode";case K:return"Suspense";case ae:return"SuspenseList";case I:return"Activity"}if(typeof r=="object")switch(r.$$typeof){case C:return"Portal";case W:return(r.displayName||"Context")+".Provider";case J:return(r._context.displayName||"Context")+".Consumer";case re:var a=r.render;return r=r.displayName,r||(r=a.displayName||a.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case N:return a=r.displayName||null,a!==null?a:Et(r.type)||"Memo";case R:a=r._payload,r=r._init;try{return Et(r(a))}catch{}}return null}var dt=Array.isArray,X=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,he=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pe={pending:!1,data:null,method:null,action:null},xe=[],k=-1;function te(r){return{current:r}}function ce(r){0>k||(r.current=xe[k],xe[k]=null,k--)}function oe(r,a){k++,xe[k]=r.current,r.current=a}var ge=te(null),Ne=te(null),ve=te(null),Tt=te(null);function We(r,a){switch(oe(ve,a),oe(Ne,r),oe(ge,null),a.nodeType){case 9:case 11:r=(r=a.documentElement)&&(r=r.namespaceURI)?A0(r):0;break;default:if(r=a.tagName,a=a.namespaceURI)a=A0(a),r=C0(a,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}ce(ge),oe(ge,r)}function Yt(){ce(ge),ce(Ne),ce(ve)}function fi(r){r.memoizedState!==null&&oe(Tt,r);var a=ge.current,l=C0(a,r.type);a!==l&&(oe(Ne,r),oe(ge,l))}function Qn(r){Ne.current===r&&(ce(ge),ce(Ne)),Tt.current===r&&(ce(Tt),dc._currentValue=pe)}var di=Object.prototype.hasOwnProperty,ki=n.unstable_scheduleCallback,ut=n.unstable_cancelCallback,Pi=n.unstable_shouldYield,fn=n.unstable_requestPaint,dn=n.unstable_now,Uo=n.unstable_getCurrentPriorityLevel,Ss=n.unstable_ImmediatePriority,As=n.unstable_UserBlockingPriority,xr=n.unstable_NormalPriority,vu=n.unstable_LowPriority,kr=n.unstable_IdlePriority,xa=n.log,jo=n.unstable_setDisableYieldValue,wt=null,Ze=null;function Pn(r){if(typeof xa=="function"&&jo(r),Ze&&typeof Ze.setStrictMode=="function")try{Ze.setStrictMode(wt,r)}catch{}}var jt=Math.clz32?Math.clz32:Pr,ka=Math.log,Fo=Math.LN2;function Pr(r){return r>>>=0,r===0?32:31-(ka(r)/Fo|0)|0}var mi=256,er=4194304;function Xn(r){var a=r&42;if(a!==0)return a;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function Mr(r,a,l){var c=r.pendingLanes;if(c===0)return 0;var d=0,g=r.suspendedLanes,w=r.pingedLanes;r=r.warmLanes;var S=c&134217727;return S!==0?(c=S&~g,c!==0?d=Xn(c):(w&=S,w!==0?d=Xn(w):l||(l=S&~r,l!==0&&(d=Xn(l))))):(S=c&~g,S!==0?d=Xn(S):w!==0?d=Xn(w):l||(l=c&~r,l!==0&&(d=Xn(l)))),d===0?0:a!==0&&a!==d&&(a&g)===0&&(g=d&-d,l=a&-a,g>=l||g===32&&(l&4194048)!==0)?a:d}function tr(r,a){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&a)===0}function Lr(r,a){switch(r){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pa(){var r=mi;return mi<<=1,(mi&4194048)===0&&(mi=256),r}function Cs(){var r=er;return er<<=1,(er&62914560)===0&&(er=4194304),r}function Mi(r){for(var a=[],l=0;31>l;l++)a.push(r);return a}function pi(r,a){r.pendingLanes|=a,a!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function Ft(r,a,l,c,d,g){var w=r.pendingLanes;r.pendingLanes=l,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=l,r.entangledLanes&=l,r.errorRecoveryDisabledLanes&=l,r.shellSuspendCounter=0;var S=r.entanglements,D=r.expirationTimes,G=r.hiddenUpdates;for(l=w&~l;0<l;){var Z=31-jt(l),ne=1<<Z;S[Z]=0,D[Z]=-1;var Y=G[Z];if(Y!==null)for(G[Z]=null,Z=0;Z<Y.length;Z++){var $=Y[Z];$!==null&&($.lane&=-536870913)}l&=~ne}c!==0&&gt(r,c,0),g!==0&&d===0&&r.tag!==0&&(r.suspendedLanes|=g&~(w&~a))}function gt(r,a,l){r.pendingLanes|=a,r.suspendedLanes&=~a;var c=31-jt(a);r.entangledLanes|=a,r.entanglements[c]=r.entanglements[c]|1073741824|l&4194090}function nr(r,a){var l=r.entangledLanes|=a;for(r=r.entanglements;l;){var c=31-jt(l),d=1<<c;d&a|r[c]&a&&(r[c]|=a),l&=~d}}function Ke(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function mn(r){return r&=-r,2<r?8<r?(r&134217727)!==0?32:268435456:8:2}function ir(){var r=he.p;return r!==0?r:(r=window.event,r===void 0?32:G0(r.type))}function Rs(r,a){var l=he.p;try{return he.p=r,a()}finally{he.p=l}}var ct=Math.random().toString(36).slice(2),Nt="__reactFiber$"+ct,bt="__reactProps$"+ct,pn="__reactContainer$"+ct,Vr="__reactEvents$"+ct,Ma="__reactListeners$"+ct,gi="__reactHandles$"+ct,Bo="__reactResources$"+ct,Li="__reactMarker$"+ct;function Vi(r){delete r[Nt],delete r[bt],delete r[Vr],delete r[Ma],delete r[gi]}function Ui(r){var a=r[Nt];if(a)return a;for(var l=r.parentNode;l;){if(a=l[pn]||l[Nt]){if(l=a.alternate,a.child!==null||l!==null&&l.child!==null)for(r=D0(r);r!==null;){if(l=r[Nt])return l;r=D0(r)}return a}r=l,l=r.parentNode}return null}function _i(r){if(r=r[Nt]||r[pn]){var a=r.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return r}return null}function Ce(r){var a=r.tag;if(a===5||a===26||a===27||a===6)return r.stateNode;throw Error(i(33))}function Me(r){var a=r[Bo];return a||(a=r[Bo]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function De(r){r[Li]=!0}var gn=new Set,tn={};function Mn(r,a){ji(r,a),ji(r+"Capture",a)}function ji(r,a){for(tn[r]=a,r=0;r<a.length;r++)gn.add(a[r])}var zo=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Uh={},La={};function jh(r){return di.call(La,r)?!0:di.call(Uh,r)?!1:zo.test(r)?La[r]=!0:(Uh[r]=!0,!1)}function Is(r,a,l){if(jh(a))if(l===null)r.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":r.removeAttribute(a);return;case"boolean":var c=a.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){r.removeAttribute(a);return}}r.setAttribute(a,""+l)}}function rr(r,a,l){if(l===null)r.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(a);return}r.setAttribute(a,""+l)}}function _n(r,a,l,c){if(c===null)r.removeAttribute(l);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(l);return}r.setAttributeNS(a,l,""+c)}}var Va,Fh;function Ur(r){if(Va===void 0)try{throw Error()}catch(l){var a=l.stack.trim().match(/\n( *(at )?)/);Va=a&&a[1]||"",Fh=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Va+r+Fh}var qo=!1;function Ho(r,a){if(!r||qo)return"";qo=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(a){var ne=function(){throw Error()};if(Object.defineProperty(ne.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ne,[])}catch($){var Y=$}Reflect.construct(r,[],ne)}else{try{ne.call()}catch($){Y=$}r.call(ne.prototype)}}else{try{throw Error()}catch($){Y=$}(ne=r())&&typeof ne.catch=="function"&&ne.catch(function(){})}}catch($){if($&&Y&&typeof $.stack=="string")return[$.stack,Y.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=c.DetermineComponentFrameRoot(),w=g[0],S=g[1];if(w&&S){var D=w.split(`
`),G=S.split(`
`);for(d=c=0;c<D.length&&!D[c].includes("DetermineComponentFrameRoot");)c++;for(;d<G.length&&!G[d].includes("DetermineComponentFrameRoot");)d++;if(c===D.length||d===G.length)for(c=D.length-1,d=G.length-1;1<=c&&0<=d&&D[c]!==G[d];)d--;for(;1<=c&&0<=d;c--,d--)if(D[c]!==G[d]){if(c!==1||d!==1)do if(c--,d--,0>d||D[c]!==G[d]){var Z=`
`+D[c].replace(" at new "," at ");return r.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",r.displayName)),Z}while(1<=c&&0<=d);break}}}finally{qo=!1,Error.prepareStackTrace=l}return(l=r?r.displayName||r.name:"")?Ur(l):""}function Eu(r){switch(r.tag){case 26:case 27:case 5:return Ur(r.type);case 16:return Ur("Lazy");case 13:return Ur("Suspense");case 19:return Ur("SuspenseList");case 0:case 15:return Ho(r.type,!1);case 11:return Ho(r.type.render,!1);case 1:return Ho(r.type,!0);case 31:return Ur("Activity");default:return""}}function Go(r){try{var a="";do a+=Eu(r),r=r.return;while(r);return a}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function Ln(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Tu(r){var a=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function cp(r){var a=Tu(r)?"checked":"value",l=Object.getOwnPropertyDescriptor(r.constructor.prototype,a),c=""+r[a];if(!r.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var d=l.get,g=l.set;return Object.defineProperty(r,a,{configurable:!0,get:function(){return d.call(this)},set:function(w){c=""+w,g.call(this,w)}}),Object.defineProperty(r,a,{enumerable:l.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){r._valueTracker=null,delete r[a]}}}}function Yo(r){r._valueTracker||(r._valueTracker=cp(r))}function wu(r){if(!r)return!1;var a=r._valueTracker;if(!a)return!0;var l=a.getValue(),c="";return r&&(c=Tu(r)?r.checked?"true":"false":r.value),r=c,r!==l?(a.setValue(r),!0):!1}function Ua(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var hp=/[\n"\\]/g;function Bt(r){return r.replace(hp,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Zn(r,a,l,c,d,g,w,S){r.name="",w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?r.type=w:r.removeAttribute("type"),a!=null?w==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+Ln(a)):r.value!==""+Ln(a)&&(r.value=""+Ln(a)):w!=="submit"&&w!=="reset"||r.removeAttribute("value"),a!=null?Ns(r,w,Ln(a)):l!=null?Ns(r,w,Ln(l)):c!=null&&r.removeAttribute("value"),d==null&&g!=null&&(r.defaultChecked=!!g),d!=null&&(r.checked=d&&typeof d!="function"&&typeof d!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?r.name=""+Ln(S):r.removeAttribute("name")}function ja(r,a,l,c,d,g,w,S){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(r.type=g),a!=null||l!=null){if(!(g!=="submit"&&g!=="reset"||a!=null))return;l=l!=null?""+Ln(l):"",a=a!=null?""+Ln(a):l,S||a===r.value||(r.value=a),r.defaultValue=a}c=c??d,c=typeof c!="function"&&typeof c!="symbol"&&!!c,r.checked=S?r.checked:!!c,r.defaultChecked=!!c,w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"&&(r.name=w)}function Ns(r,a,l){a==="number"&&Ua(r.ownerDocument)===r||r.defaultValue===""+l||(r.defaultValue=""+l)}function jr(r,a,l,c){if(r=r.options,a){a={};for(var d=0;d<l.length;d++)a["$"+l[d]]=!0;for(l=0;l<r.length;l++)d=a.hasOwnProperty("$"+r[l].value),r[l].selected!==d&&(r[l].selected=d),d&&c&&(r[l].defaultSelected=!0)}else{for(l=""+Ln(l),a=null,d=0;d<r.length;d++){if(r[d].value===l){r[d].selected=!0,c&&(r[d].defaultSelected=!0);return}a!==null||r[d].disabled||(a=r[d])}a!==null&&(a.selected=!0)}}function rt(r,a,l){if(a!=null&&(a=""+Ln(a),a!==r.value&&(r.value=a),l==null)){r.defaultValue!==a&&(r.defaultValue=a);return}r.defaultValue=l!=null?""+Ln(l):""}function Fa(r,a,l,c){if(a==null){if(c!=null){if(l!=null)throw Error(i(92));if(dt(c)){if(1<c.length)throw Error(i(93));c=c[0]}l=c}l==null&&(l=""),a=l}l=Ln(a),r.defaultValue=l,c=r.textContent,c===l&&c!==""&&c!==null&&(r.value=c)}function yi(r,a){if(a){var l=r.firstChild;if(l&&l===r.lastChild&&l.nodeType===3){l.nodeValue=a;return}}r.textContent=a}var Ba=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bh(r,a,l){var c=a.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?c?r.setProperty(a,""):a==="float"?r.cssFloat="":r[a]="":c?r.setProperty(a,l):typeof l!="number"||l===0||Ba.has(a)?a==="float"?r.cssFloat=l:r[a]=(""+l).trim():r[a]=l+"px"}function bu(r,a,l){if(a!=null&&typeof a!="object")throw Error(i(62));if(r=r.style,l!=null){for(var c in l)!l.hasOwnProperty(c)||a!=null&&a.hasOwnProperty(c)||(c.indexOf("--")===0?r.setProperty(c,""):c==="float"?r.cssFloat="":r[c]="");for(var d in a)c=a[d],a.hasOwnProperty(d)&&l[d]!==c&&Bh(r,d,c)}else for(var g in a)a.hasOwnProperty(g)&&Bh(r,g,a[g])}function Su(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),dp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $o(r){return dp.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var Fr=null;function vi(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Br=null,zr=null;function Au(r){var a=_i(r);if(a&&(r=a.stateNode)){var l=r[bt]||null;e:switch(r=a.stateNode,a.type){case"input":if(Zn(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),a=l.name,l.type==="radio"&&a!=null){for(l=r;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Bt(""+a)+'"][type="radio"]'),a=0;a<l.length;a++){var c=l[a];if(c!==r&&c.form===r.form){var d=c[bt]||null;if(!d)throw Error(i(90));Zn(c,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(a=0;a<l.length;a++)c=l[a],c.form===r.form&&wu(c)}break e;case"textarea":rt(r,l.value,l.defaultValue);break e;case"select":a=l.value,a!=null&&jr(r,!!l.multiple,a,!1)}}}var sr=!1;function zh(r,a,l){if(sr)return r(a,l);sr=!0;try{var c=r(a);return c}finally{if(sr=!1,(Br!==null||zr!==null)&&(Lf(),Br&&(a=Br,r=zr,zr=Br=null,Au(a),r)))for(a=0;a<r.length;a++)Au(r[a])}}function za(r,a){var l=r.stateNode;if(l===null)return null;var c=l[bt]||null;if(c===null)return null;l=c[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(l&&typeof l!="function")throw Error(i(231,a,typeof l));return l}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ei=!1;if(Fi)try{var qa={};Object.defineProperty(qa,"passive",{get:function(){Ei=!0}}),window.addEventListener("test",qa,qa),window.removeEventListener("test",qa,qa)}catch{Ei=!1}var ar=null,Ds=null,qr=null;function Cu(){if(qr)return qr;var r,a=Ds,l=a.length,c,d="value"in ar?ar.value:ar.textContent,g=d.length;for(r=0;r<l&&a[r]===d[r];r++);var w=l-r;for(c=1;c<=w&&a[l-c]===d[g-c];c++);return qr=d.slice(r,1<c?1-c:void 0)}function or(r){var a=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&a===13&&(r=13)):r=a,r===10&&(r=13),32<=r||r===13?r:0}function lr(){return!0}function Ru(){return!1}function nn(r){function a(l,c,d,g,w){this._reactName=l,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var S in r)r.hasOwnProperty(S)&&(l=r[S],this[S]=l?l(g):g[S]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?lr:Ru,this.isPropagationStopped=Ru,this}return _(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=lr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=lr)},persist:function(){},isPersistent:lr}),a}var et={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wo=nn(et),Ha=_({},et,{view:0,detail:0}),qh=nn(Ha),Ko,Qo,ur,Ga=_({},Ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wa,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ur&&(ur&&r.type==="mousemove"?(Ko=r.screenX-ur.screenX,Qo=r.screenY-ur.screenY):Qo=Ko=0,ur=r),Ko)},movementY:function(r){return"movementY"in r?r.movementY:Qo}}),Ti=nn(Ga),Hh=_({},Ga,{dataTransfer:0}),mp=nn(Hh),Ya=_({},Ha,{relatedTarget:0}),Xo=nn(Ya),Iu=_({},et,{animationName:0,elapsedTime:0,pseudoElement:0}),Zo=nn(Iu),Gh=_({},et,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Jo=nn(Gh),pp=_({},et,{data:0}),Nu=nn(pp),$a={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$h={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Du(r){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(r):(r=$h[r])?!!a[r]:!1}function Wa(){return Du}var Wh=_({},Ha,{key:function(r){if(r.key){var a=$a[r.key]||r.key;if(a!=="Unidentified")return a}return r.type==="keypress"?(r=or(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Yh[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wa,charCode:function(r){return r.type==="keypress"?or(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?or(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),el=nn(Wh),Kh=_({},Ga,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ou=nn(Kh),Hr=_({},Ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wa}),Qh=nn(Hr),Xh=_({},et,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zh=nn(Xh),Jh=_({},Ga,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),tl=nn(Jh),Vn=_({},et,{newState:0,oldState:0}),ef=nn(Vn),tf=[9,13,27,32],cr=Fi&&"CompositionEvent"in window,f=null;Fi&&"documentMode"in document&&(f=document.documentMode);var y=Fi&&"TextEvent"in window&&!f,E=Fi&&(!cr||f&&8<f&&11>=f),A=" ",B=!1;function Q(r,a){switch(r){case"keyup":return tf.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function le(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var He=!1;function $t(r,a){switch(r){case"compositionend":return le(a);case"keypress":return a.which!==32?null:(B=!0,A);case"textInput":return r=a.data,r===A&&B?null:r;default:return null}}function Ge(r,a){if(He)return r==="compositionend"||!cr&&Q(r,a)?(r=Cu(),qr=Ds=ar=null,He=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return E&&a.locale!=="ko"?null:a.data;default:return null}}var rn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wt(r){var a=r&&r.nodeName&&r.nodeName.toLowerCase();return a==="input"?!!rn[r.type]:a==="textarea"}function Gr(r,a,l,c){Br?zr?zr.push(c):zr=[c]:Br=c,a=zf(a,"onChange"),0<a.length&&(l=new Wo("onChange","change",null,l,c),r.push({event:l,listeners:a}))}var yn=null,hr=null;function xu(r){E0(r,0)}function nf(r){var a=Ce(r);if(wu(a))return r}function BE(r,a){if(r==="change")return a}var zE=!1;if(Fi){var gp;if(Fi){var _p="oninput"in document;if(!_p){var qE=document.createElement("div");qE.setAttribute("oninput","return;"),_p=typeof qE.oninput=="function"}gp=_p}else gp=!1;zE=gp&&(!document.documentMode||9<document.documentMode)}function HE(){yn&&(yn.detachEvent("onpropertychange",GE),hr=yn=null)}function GE(r){if(r.propertyName==="value"&&nf(hr)){var a=[];Gr(a,hr,r,vi(r)),zh(xu,a)}}function fD(r,a,l){r==="focusin"?(HE(),yn=a,hr=l,yn.attachEvent("onpropertychange",GE)):r==="focusout"&&HE()}function dD(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return nf(hr)}function mD(r,a){if(r==="click")return nf(a)}function pD(r,a){if(r==="input"||r==="change")return nf(a)}function gD(r,a){return r===a&&(r!==0||1/r===1/a)||r!==r&&a!==a}var Jn=typeof Object.is=="function"?Object.is:gD;function ku(r,a){if(Jn(r,a))return!0;if(typeof r!="object"||r===null||typeof a!="object"||a===null)return!1;var l=Object.keys(r),c=Object.keys(a);if(l.length!==c.length)return!1;for(c=0;c<l.length;c++){var d=l[c];if(!di.call(a,d)||!Jn(r[d],a[d]))return!1}return!0}function YE(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function $E(r,a){var l=YE(r);r=0;for(var c;l;){if(l.nodeType===3){if(c=r+l.textContent.length,r<=a&&c>=a)return{node:l,offset:a-r};r=c}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=YE(l)}}function WE(r,a){return r&&a?r===a?!0:r&&r.nodeType===3?!1:a&&a.nodeType===3?WE(r,a.parentNode):"contains"in r?r.contains(a):r.compareDocumentPosition?!!(r.compareDocumentPosition(a)&16):!1:!1}function KE(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var a=Ua(r.document);a instanceof r.HTMLIFrameElement;){try{var l=typeof a.contentWindow.location.href=="string"}catch{l=!1}if(l)r=a.contentWindow;else break;a=Ua(r.document)}return a}function yp(r){var a=r&&r.nodeName&&r.nodeName.toLowerCase();return a&&(a==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||a==="textarea"||r.contentEditable==="true")}var _D=Fi&&"documentMode"in document&&11>=document.documentMode,nl=null,vp=null,Pu=null,Ep=!1;function QE(r,a,l){var c=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Ep||nl==null||nl!==Ua(c)||(c=nl,"selectionStart"in c&&yp(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Pu&&ku(Pu,c)||(Pu=c,c=zf(vp,"onSelect"),0<c.length&&(a=new Wo("onSelect","select",null,a,l),r.push({event:a,listeners:c}),a.target=nl)))}function Ka(r,a){var l={};return l[r.toLowerCase()]=a.toLowerCase(),l["Webkit"+r]="webkit"+a,l["Moz"+r]="moz"+a,l}var il={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionrun:Ka("Transition","TransitionRun"),transitionstart:Ka("Transition","TransitionStart"),transitioncancel:Ka("Transition","TransitionCancel"),transitionend:Ka("Transition","TransitionEnd")},Tp={},XE={};Fi&&(XE=document.createElement("div").style,"AnimationEvent"in window||(delete il.animationend.animation,delete il.animationiteration.animation,delete il.animationstart.animation),"TransitionEvent"in window||delete il.transitionend.transition);function Qa(r){if(Tp[r])return Tp[r];if(!il[r])return r;var a=il[r],l;for(l in a)if(a.hasOwnProperty(l)&&l in XE)return Tp[r]=a[l];return r}var ZE=Qa("animationend"),JE=Qa("animationiteration"),eT=Qa("animationstart"),yD=Qa("transitionrun"),vD=Qa("transitionstart"),ED=Qa("transitioncancel"),tT=Qa("transitionend"),nT=new Map,wp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");wp.push("scrollEnd");function Bi(r,a){nT.set(r,a),Mn(a,[r])}var iT=new WeakMap;function wi(r,a){if(typeof r=="object"&&r!==null){var l=iT.get(r);return l!==void 0?l:(a={value:r,source:a,stack:Go(a)},iT.set(r,a),a)}return{value:r,source:a,stack:Go(a)}}var bi=[],rl=0,bp=0;function rf(){for(var r=rl,a=bp=rl=0;a<r;){var l=bi[a];bi[a++]=null;var c=bi[a];bi[a++]=null;var d=bi[a];bi[a++]=null;var g=bi[a];if(bi[a++]=null,c!==null&&d!==null){var w=c.pending;w===null?d.next=d:(d.next=w.next,w.next=d),c.pending=d}g!==0&&rT(l,d,g)}}function sf(r,a,l,c){bi[rl++]=r,bi[rl++]=a,bi[rl++]=l,bi[rl++]=c,bp|=c,r.lanes|=c,r=r.alternate,r!==null&&(r.lanes|=c)}function Sp(r,a,l,c){return sf(r,a,l,c),af(r)}function sl(r,a){return sf(r,null,null,a),af(r)}function rT(r,a,l){r.lanes|=l;var c=r.alternate;c!==null&&(c.lanes|=l);for(var d=!1,g=r.return;g!==null;)g.childLanes|=l,c=g.alternate,c!==null&&(c.childLanes|=l),g.tag===22&&(r=g.stateNode,r===null||r._visibility&1||(d=!0)),r=g,g=g.return;return r.tag===3?(g=r.stateNode,d&&a!==null&&(d=31-jt(l),r=g.hiddenUpdates,c=r[d],c===null?r[d]=[a]:c.push(a),a.lane=l|536870912),g):null}function af(r){if(50<sc)throw sc=0,Dg=null,Error(i(185));for(var a=r.return;a!==null;)r=a,a=r.return;return r.tag===3?r.stateNode:null}var al={};function TD(r,a,l,c){this.tag=r,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(r,a,l,c){return new TD(r,a,l,c)}function Ap(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Yr(r,a){var l=r.alternate;return l===null?(l=ei(r.tag,a,r.key,r.mode),l.elementType=r.elementType,l.type=r.type,l.stateNode=r.stateNode,l.alternate=r,r.alternate=l):(l.pendingProps=a,l.type=r.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=r.flags&65011712,l.childLanes=r.childLanes,l.lanes=r.lanes,l.child=r.child,l.memoizedProps=r.memoizedProps,l.memoizedState=r.memoizedState,l.updateQueue=r.updateQueue,a=r.dependencies,l.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},l.sibling=r.sibling,l.index=r.index,l.ref=r.ref,l.refCleanup=r.refCleanup,l}function sT(r,a){r.flags&=65011714;var l=r.alternate;return l===null?(r.childLanes=0,r.lanes=a,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=l.childLanes,r.lanes=l.lanes,r.child=l.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=l.memoizedProps,r.memoizedState=l.memoizedState,r.updateQueue=l.updateQueue,r.type=l.type,a=l.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),r}function of(r,a,l,c,d,g){var w=0;if(c=r,typeof r=="function")Ap(r)&&(w=1);else if(typeof r=="string")w=bO(r,l,ge.current)?26:r==="html"||r==="head"||r==="body"?27:5;else e:switch(r){case I:return r=ei(31,l,a,d),r.elementType=I,r.lanes=g,r;case O:return Xa(l.children,d,g,a);case P:w=8,d|=24;break;case L:return r=ei(12,l,a,d|2),r.elementType=L,r.lanes=g,r;case K:return r=ei(13,l,a,d),r.elementType=K,r.lanes=g,r;case ae:return r=ei(19,l,a,d),r.elementType=ae,r.lanes=g,r;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case H:case W:w=10;break e;case J:w=9;break e;case re:w=11;break e;case N:w=14;break e;case R:w=16,c=null;break e}w=29,l=Error(i(130,r===null?"null":typeof r,"")),c=null}return a=ei(w,l,a,d),a.elementType=r,a.type=c,a.lanes=g,a}function Xa(r,a,l,c){return r=ei(7,r,c,a),r.lanes=l,r}function Cp(r,a,l){return r=ei(6,r,null,a),r.lanes=l,r}function Rp(r,a,l){return a=ei(4,r.children!==null?r.children:[],r.key,a),a.lanes=l,a.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},a}var ol=[],ll=0,lf=null,uf=0,Si=[],Ai=0,Za=null,$r=1,Wr="";function Ja(r,a){ol[ll++]=uf,ol[ll++]=lf,lf=r,uf=a}function aT(r,a,l){Si[Ai++]=$r,Si[Ai++]=Wr,Si[Ai++]=Za,Za=r;var c=$r;r=Wr;var d=32-jt(c)-1;c&=~(1<<d),l+=1;var g=32-jt(a)+d;if(30<g){var w=d-d%5;g=(c&(1<<w)-1).toString(32),c>>=w,d-=w,$r=1<<32-jt(a)+d|l<<d|c,Wr=g+r}else $r=1<<g|l<<d|c,Wr=r}function Ip(r){r.return!==null&&(Ja(r,1),aT(r,1,0))}function Np(r){for(;r===lf;)lf=ol[--ll],ol[ll]=null,uf=ol[--ll],ol[ll]=null;for(;r===Za;)Za=Si[--Ai],Si[Ai]=null,Wr=Si[--Ai],Si[Ai]=null,$r=Si[--Ai],Si[Ai]=null}var Un=null,Dt=null,Je=!1,eo=null,fr=!1,Dp=Error(i(519));function to(r){var a=Error(i(418,""));throw Vu(wi(a,r)),Dp}function oT(r){var a=r.stateNode,l=r.type,c=r.memoizedProps;switch(a[Nt]=r,a[bt]=c,l){case"dialog":je("cancel",a),je("close",a);break;case"iframe":case"object":case"embed":je("load",a);break;case"video":case"audio":for(l=0;l<oc.length;l++)je(oc[l],a);break;case"source":je("error",a);break;case"img":case"image":case"link":je("error",a),je("load",a);break;case"details":je("toggle",a);break;case"input":je("invalid",a),ja(a,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),Yo(a);break;case"select":je("invalid",a);break;case"textarea":je("invalid",a),Fa(a,c.value,c.defaultValue,c.children),Yo(a)}l=c.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||a.textContent===""+l||c.suppressHydrationWarning===!0||S0(a.textContent,l)?(c.popover!=null&&(je("beforetoggle",a),je("toggle",a)),c.onScroll!=null&&je("scroll",a),c.onScrollEnd!=null&&je("scrollend",a),c.onClick!=null&&(a.onclick=qf),a=!0):a=!1,a||to(r)}function lT(r){for(Un=r.return;Un;)switch(Un.tag){case 5:case 13:fr=!1;return;case 27:case 3:fr=!0;return;default:Un=Un.return}}function Mu(r){if(r!==Un)return!1;if(!Je)return lT(r),Je=!0,!1;var a=r.tag,l;if((l=a!==3&&a!==27)&&((l=a===5)&&(l=r.type,l=!(l!=="form"&&l!=="button")||Yg(r.type,r.memoizedProps)),l=!l),l&&Dt&&to(r),lT(r),a===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(i(317));e:{for(r=r.nextSibling,a=0;r;){if(r.nodeType===8)if(l=r.data,l==="/$"){if(a===0){Dt=qi(r.nextSibling);break e}a--}else l!=="$"&&l!=="$!"&&l!=="$?"||a++;r=r.nextSibling}Dt=null}}else a===27?(a=Dt,Ys(r.type)?(r=Qg,Qg=null,Dt=r):Dt=a):Dt=Un?qi(r.stateNode.nextSibling):null;return!0}function Lu(){Dt=Un=null,Je=!1}function uT(){var r=eo;return r!==null&&(qn===null?qn=r:qn.push.apply(qn,r),eo=null),r}function Vu(r){eo===null?eo=[r]:eo.push(r)}var Op=te(null),no=null,Kr=null;function Os(r,a,l){oe(Op,a._currentValue),a._currentValue=l}function Qr(r){r._currentValue=Op.current,ce(Op)}function xp(r,a,l){for(;r!==null;){var c=r.alternate;if((r.childLanes&a)!==a?(r.childLanes|=a,c!==null&&(c.childLanes|=a)):c!==null&&(c.childLanes&a)!==a&&(c.childLanes|=a),r===l)break;r=r.return}}function kp(r,a,l,c){var d=r.child;for(d!==null&&(d.return=r);d!==null;){var g=d.dependencies;if(g!==null){var w=d.child;g=g.firstContext;e:for(;g!==null;){var S=g;g=d;for(var D=0;D<a.length;D++)if(S.context===a[D]){g.lanes|=l,S=g.alternate,S!==null&&(S.lanes|=l),xp(g.return,l,r),c||(w=null);break e}g=S.next}}else if(d.tag===18){if(w=d.return,w===null)throw Error(i(341));w.lanes|=l,g=w.alternate,g!==null&&(g.lanes|=l),xp(w,l,r),w=null}else w=d.child;if(w!==null)w.return=d;else for(w=d;w!==null;){if(w===r){w=null;break}if(d=w.sibling,d!==null){d.return=w.return,w=d;break}w=w.return}d=w}}function Uu(r,a,l,c){r=null;for(var d=a,g=!1;d!==null;){if(!g){if((d.flags&524288)!==0)g=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var w=d.alternate;if(w===null)throw Error(i(387));if(w=w.memoizedProps,w!==null){var S=d.type;Jn(d.pendingProps.value,w.value)||(r!==null?r.push(S):r=[S])}}else if(d===Tt.current){if(w=d.alternate,w===null)throw Error(i(387));w.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(r!==null?r.push(dc):r=[dc])}d=d.return}r!==null&&kp(a,r,l,c),a.flags|=262144}function cf(r){for(r=r.firstContext;r!==null;){if(!Jn(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function io(r){no=r,Kr=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function Cn(r){return cT(no,r)}function hf(r,a){return no===null&&io(r),cT(r,a)}function cT(r,a){var l=a._currentValue;if(a={context:a,memoizedValue:l,next:null},Kr===null){if(r===null)throw Error(i(308));Kr=a,r.dependencies={lanes:0,firstContext:a},r.flags|=524288}else Kr=Kr.next=a;return l}var wD=typeof AbortController<"u"?AbortController:function(){var r=[],a=this.signal={aborted:!1,addEventListener:function(l,c){r.push(c)}};this.abort=function(){a.aborted=!0,r.forEach(function(l){return l()})}},bD=n.unstable_scheduleCallback,SD=n.unstable_NormalPriority,Kt={$$typeof:W,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pp(){return{controller:new wD,data:new Map,refCount:0}}function ju(r){r.refCount--,r.refCount===0&&bD(SD,function(){r.controller.abort()})}var Fu=null,Mp=0,ul=0,cl=null;function AD(r,a){if(Fu===null){var l=Fu=[];Mp=0,ul=Vg(),cl={status:"pending",value:void 0,then:function(c){l.push(c)}}}return Mp++,a.then(hT,hT),a}function hT(){if(--Mp===0&&Fu!==null){cl!==null&&(cl.status="fulfilled");var r=Fu;Fu=null,ul=0,cl=null;for(var a=0;a<r.length;a++)(0,r[a])()}}function CD(r,a){var l=[],c={status:"pending",value:null,reason:null,then:function(d){l.push(d)}};return r.then(function(){c.status="fulfilled",c.value=a;for(var d=0;d<l.length;d++)(0,l[d])(a)},function(d){for(c.status="rejected",c.reason=d,d=0;d<l.length;d++)(0,l[d])(void 0)}),c}var fT=X.S;X.S=function(r,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&AD(r,a),fT!==null&&fT(r,a)};var ro=te(null);function Lp(){var r=ro.current;return r!==null?r:mt.pooledCache}function ff(r,a){a===null?oe(ro,ro.current):oe(ro,a.pool)}function dT(){var r=Lp();return r===null?null:{parent:Kt._currentValue,pool:r}}var Bu=Error(i(460)),mT=Error(i(474)),df=Error(i(542)),Vp={then:function(){}};function pT(r){return r=r.status,r==="fulfilled"||r==="rejected"}function mf(){}function gT(r,a,l){switch(l=r[l],l===void 0?r.push(a):l!==a&&(a.then(mf,mf),a=l),a.status){case"fulfilled":return a.value;case"rejected":throw r=a.reason,yT(r),r;default:if(typeof a.status=="string")a.then(mf,mf);else{if(r=mt,r!==null&&100<r.shellSuspendCounter)throw Error(i(482));r=a,r.status="pending",r.then(function(c){if(a.status==="pending"){var d=a;d.status="fulfilled",d.value=c}},function(c){if(a.status==="pending"){var d=a;d.status="rejected",d.reason=c}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw r=a.reason,yT(r),r}throw zu=a,Bu}}var zu=null;function _T(){if(zu===null)throw Error(i(459));var r=zu;return zu=null,r}function yT(r){if(r===Bu||r===df)throw Error(i(483))}var xs=!1;function Up(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function jp(r,a){r=r.updateQueue,a.updateQueue===r&&(a.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function ks(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function Ps(r,a,l){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(nt&2)!==0){var d=c.pending;return d===null?a.next=a:(a.next=d.next,d.next=a),c.pending=a,a=af(r),rT(r,null,l),a}return sf(r,c,a,l),af(r)}function qu(r,a,l){if(a=a.updateQueue,a!==null&&(a=a.shared,(l&4194048)!==0)){var c=a.lanes;c&=r.pendingLanes,l|=c,a.lanes=l,nr(r,l)}}function Fp(r,a){var l=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,l===c)){var d=null,g=null;if(l=l.firstBaseUpdate,l!==null){do{var w={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};g===null?d=g=w:g=g.next=w,l=l.next}while(l!==null);g===null?d=g=a:g=g.next=a}else d=g=a;l={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,callbacks:c.callbacks},r.updateQueue=l;return}r=l.lastBaseUpdate,r===null?l.firstBaseUpdate=a:r.next=a,l.lastBaseUpdate=a}var Bp=!1;function Hu(){if(Bp){var r=cl;if(r!==null)throw r}}function Gu(r,a,l,c){Bp=!1;var d=r.updateQueue;xs=!1;var g=d.firstBaseUpdate,w=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var D=S,G=D.next;D.next=null,w===null?g=G:w.next=G,w=D;var Z=r.alternate;Z!==null&&(Z=Z.updateQueue,S=Z.lastBaseUpdate,S!==w&&(S===null?Z.firstBaseUpdate=G:S.next=G,Z.lastBaseUpdate=D))}if(g!==null){var ne=d.baseState;w=0,Z=G=D=null,S=g;do{var Y=S.lane&-536870913,$=Y!==S.lane;if($?(Ye&Y)===Y:(c&Y)===Y){Y!==0&&Y===ul&&(Bp=!0),Z!==null&&(Z=Z.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var Ae=r,Ee=S;Y=a;var ot=l;switch(Ee.tag){case 1:if(Ae=Ee.payload,typeof Ae=="function"){ne=Ae.call(ot,ne,Y);break e}ne=Ae;break e;case 3:Ae.flags=Ae.flags&-65537|128;case 0:if(Ae=Ee.payload,Y=typeof Ae=="function"?Ae.call(ot,ne,Y):Ae,Y==null)break e;ne=_({},ne,Y);break e;case 2:xs=!0}}Y=S.callback,Y!==null&&(r.flags|=64,$&&(r.flags|=8192),$=d.callbacks,$===null?d.callbacks=[Y]:$.push(Y))}else $={lane:Y,tag:S.tag,payload:S.payload,callback:S.callback,next:null},Z===null?(G=Z=$,D=ne):Z=Z.next=$,w|=Y;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;$=S,S=$.next,$.next=null,d.lastBaseUpdate=$,d.shared.pending=null}}while(!0);Z===null&&(D=ne),d.baseState=D,d.firstBaseUpdate=G,d.lastBaseUpdate=Z,g===null&&(d.shared.lanes=0),zs|=w,r.lanes=w,r.memoizedState=ne}}function vT(r,a){if(typeof r!="function")throw Error(i(191,r));r.call(a)}function ET(r,a){var l=r.callbacks;if(l!==null)for(r.callbacks=null,r=0;r<l.length;r++)vT(l[r],a)}var hl=te(null),pf=te(0);function TT(r,a){r=is,oe(pf,r),oe(hl,a),is=r|a.baseLanes}function zp(){oe(pf,is),oe(hl,hl.current)}function qp(){is=pf.current,ce(hl),ce(pf)}var Ms=0,ke=null,st=null,zt=null,gf=!1,fl=!1,so=!1,_f=0,Yu=0,dl=null,RD=0;function Mt(){throw Error(i(321))}function Hp(r,a){if(a===null)return!1;for(var l=0;l<a.length&&l<r.length;l++)if(!Jn(r[l],a[l]))return!1;return!0}function Gp(r,a,l,c,d,g){return Ms=g,ke=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,X.H=r===null||r.memoizedState===null?rw:sw,so=!1,g=l(c,d),so=!1,fl&&(g=bT(a,l,c,d)),wT(r),g}function wT(r){X.H=bf;var a=st!==null&&st.next!==null;if(Ms=0,zt=st=ke=null,gf=!1,Yu=0,dl=null,a)throw Error(i(300));r===null||sn||(r=r.dependencies,r!==null&&cf(r)&&(sn=!0))}function bT(r,a,l,c){ke=r;var d=0;do{if(fl&&(dl=null),Yu=0,fl=!1,25<=d)throw Error(i(301));if(d+=1,zt=st=null,r.updateQueue!=null){var g=r.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}X.H=PD,g=a(l,c)}while(fl);return g}function ID(){var r=X.H,a=r.useState()[0];return a=typeof a.then=="function"?$u(a):a,r=r.useState()[0],(st!==null?st.memoizedState:null)!==r&&(ke.flags|=1024),a}function Yp(){var r=_f!==0;return _f=0,r}function $p(r,a,l){a.updateQueue=r.updateQueue,a.flags&=-2053,r.lanes&=~l}function Wp(r){if(gf){for(r=r.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}gf=!1}Ms=0,zt=st=ke=null,fl=!1,Yu=_f=0,dl=null}function Bn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?ke.memoizedState=zt=r:zt=zt.next=r,zt}function qt(){if(st===null){var r=ke.alternate;r=r!==null?r.memoizedState:null}else r=st.next;var a=zt===null?ke.memoizedState:zt.next;if(a!==null)zt=a,st=r;else{if(r===null)throw ke.alternate===null?Error(i(467)):Error(i(310));st=r,r={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},zt===null?ke.memoizedState=zt=r:zt=zt.next=r}return zt}function Kp(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $u(r){var a=Yu;return Yu+=1,dl===null&&(dl=[]),r=gT(dl,r,a),a=ke,(zt===null?a.memoizedState:zt.next)===null&&(a=a.alternate,X.H=a===null||a.memoizedState===null?rw:sw),r}function yf(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return $u(r);if(r.$$typeof===W)return Cn(r)}throw Error(i(438,String(r)))}function Qp(r){var a=null,l=ke.updateQueue;if(l!==null&&(a=l.memoCache),a==null){var c=ke.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(a={data:c.data.map(function(d){return d.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),l===null&&(l=Kp(),ke.updateQueue=l),l.memoCache=a,l=a.data[a.index],l===void 0)for(l=a.data[a.index]=Array(r),c=0;c<r;c++)l[c]=M;return a.index++,l}function Xr(r,a){return typeof a=="function"?a(r):a}function vf(r){var a=qt();return Xp(a,st,r)}function Xp(r,a,l){var c=r.queue;if(c===null)throw Error(i(311));c.lastRenderedReducer=l;var d=r.baseQueue,g=c.pending;if(g!==null){if(d!==null){var w=d.next;d.next=g.next,g.next=w}a.baseQueue=d=g,c.pending=null}if(g=r.baseState,d===null)r.memoizedState=g;else{a=d.next;var S=w=null,D=null,G=a,Z=!1;do{var ne=G.lane&-536870913;if(ne!==G.lane?(Ye&ne)===ne:(Ms&ne)===ne){var Y=G.revertLane;if(Y===0)D!==null&&(D=D.next={lane:0,revertLane:0,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null}),ne===ul&&(Z=!0);else if((Ms&Y)===Y){G=G.next,Y===ul&&(Z=!0);continue}else ne={lane:0,revertLane:G.revertLane,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null},D===null?(S=D=ne,w=g):D=D.next=ne,ke.lanes|=Y,zs|=Y;ne=G.action,so&&l(g,ne),g=G.hasEagerState?G.eagerState:l(g,ne)}else Y={lane:ne,revertLane:G.revertLane,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null},D===null?(S=D=Y,w=g):D=D.next=Y,ke.lanes|=ne,zs|=ne;G=G.next}while(G!==null&&G!==a);if(D===null?w=g:D.next=S,!Jn(g,r.memoizedState)&&(sn=!0,Z&&(l=cl,l!==null)))throw l;r.memoizedState=g,r.baseState=w,r.baseQueue=D,c.lastRenderedState=g}return d===null&&(c.lanes=0),[r.memoizedState,c.dispatch]}function Zp(r){var a=qt(),l=a.queue;if(l===null)throw Error(i(311));l.lastRenderedReducer=r;var c=l.dispatch,d=l.pending,g=a.memoizedState;if(d!==null){l.pending=null;var w=d=d.next;do g=r(g,w.action),w=w.next;while(w!==d);Jn(g,a.memoizedState)||(sn=!0),a.memoizedState=g,a.baseQueue===null&&(a.baseState=g),l.lastRenderedState=g}return[g,c]}function ST(r,a,l){var c=ke,d=qt(),g=Je;if(g){if(l===void 0)throw Error(i(407));l=l()}else l=a();var w=!Jn((st||d).memoizedState,l);w&&(d.memoizedState=l,sn=!0),d=d.queue;var S=RT.bind(null,c,d,r);if(Wu(2048,8,S,[r]),d.getSnapshot!==a||w||zt!==null&&zt.memoizedState.tag&1){if(c.flags|=2048,ml(9,Ef(),CT.bind(null,c,d,l,a),null),mt===null)throw Error(i(349));g||(Ms&124)!==0||AT(c,a,l)}return l}function AT(r,a,l){r.flags|=16384,r={getSnapshot:a,value:l},a=ke.updateQueue,a===null?(a=Kp(),ke.updateQueue=a,a.stores=[r]):(l=a.stores,l===null?a.stores=[r]:l.push(r))}function CT(r,a,l,c){a.value=l,a.getSnapshot=c,IT(a)&&NT(r)}function RT(r,a,l){return l(function(){IT(a)&&NT(r)})}function IT(r){var a=r.getSnapshot;r=r.value;try{var l=a();return!Jn(r,l)}catch{return!0}}function NT(r){var a=sl(r,2);a!==null&&si(a,r,2)}function Jp(r){var a=Bn();if(typeof r=="function"){var l=r;if(r=l(),so){Pn(!0);try{l()}finally{Pn(!1)}}}return a.memoizedState=a.baseState=r,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xr,lastRenderedState:r},a}function DT(r,a,l,c){return r.baseState=l,Xp(r,st,typeof c=="function"?c:Xr)}function ND(r,a,l,c,d){if(wf(r))throw Error(i(485));if(r=a.action,r!==null){var g={payload:d,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(w){g.listeners.push(w)}};X.T!==null?l(!0):g.isTransition=!1,c(g),l=a.pending,l===null?(g.next=a.pending=g,OT(a,g)):(g.next=l.next,a.pending=l.next=g)}}function OT(r,a){var l=a.action,c=a.payload,d=r.state;if(a.isTransition){var g=X.T,w={};X.T=w;try{var S=l(d,c),D=X.S;D!==null&&D(w,S),xT(r,a,S)}catch(G){eg(r,a,G)}finally{X.T=g}}else try{g=l(d,c),xT(r,a,g)}catch(G){eg(r,a,G)}}function xT(r,a,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(c){kT(r,a,c)},function(c){return eg(r,a,c)}):kT(r,a,l)}function kT(r,a,l){a.status="fulfilled",a.value=l,PT(a),r.state=l,a=r.pending,a!==null&&(l=a.next,l===a?r.pending=null:(l=l.next,a.next=l,OT(r,l)))}function eg(r,a,l){var c=r.pending;if(r.pending=null,c!==null){c=c.next;do a.status="rejected",a.reason=l,PT(a),a=a.next;while(a!==c)}r.action=null}function PT(r){r=r.listeners;for(var a=0;a<r.length;a++)(0,r[a])()}function MT(r,a){return a}function LT(r,a){if(Je){var l=mt.formState;if(l!==null){e:{var c=ke;if(Je){if(Dt){t:{for(var d=Dt,g=fr;d.nodeType!==8;){if(!g){d=null;break t}if(d=qi(d.nextSibling),d===null){d=null;break t}}g=d.data,d=g==="F!"||g==="F"?d:null}if(d){Dt=qi(d.nextSibling),c=d.data==="F!";break e}}to(c)}c=!1}c&&(a=l[0])}}return l=Bn(),l.memoizedState=l.baseState=a,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:MT,lastRenderedState:a},l.queue=c,l=tw.bind(null,ke,c),c.dispatch=l,c=Jp(!1),g=sg.bind(null,ke,!1,c.queue),c=Bn(),d={state:a,dispatch:null,action:r,pending:null},c.queue=d,l=ND.bind(null,ke,d,g,l),d.dispatch=l,c.memoizedState=r,[a,l,!1]}function VT(r){var a=qt();return UT(a,st,r)}function UT(r,a,l){if(a=Xp(r,a,MT)[0],r=vf(Xr)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var c=$u(a)}catch(w){throw w===Bu?df:w}else c=a;a=qt();var d=a.queue,g=d.dispatch;return l!==a.memoizedState&&(ke.flags|=2048,ml(9,Ef(),DD.bind(null,d,l),null)),[c,g,r]}function DD(r,a){r.action=a}function jT(r){var a=qt(),l=st;if(l!==null)return UT(a,l,r);qt(),a=a.memoizedState,l=qt();var c=l.queue.dispatch;return l.memoizedState=r,[a,c,!1]}function ml(r,a,l,c){return r={tag:r,create:l,deps:c,inst:a,next:null},a=ke.updateQueue,a===null&&(a=Kp(),ke.updateQueue=a),l=a.lastEffect,l===null?a.lastEffect=r.next=r:(c=l.next,l.next=r,r.next=c,a.lastEffect=r),r}function Ef(){return{destroy:void 0,resource:void 0}}function FT(){return qt().memoizedState}function Tf(r,a,l,c){var d=Bn();c=c===void 0?null:c,ke.flags|=r,d.memoizedState=ml(1|a,Ef(),l,c)}function Wu(r,a,l,c){var d=qt();c=c===void 0?null:c;var g=d.memoizedState.inst;st!==null&&c!==null&&Hp(c,st.memoizedState.deps)?d.memoizedState=ml(a,g,l,c):(ke.flags|=r,d.memoizedState=ml(1|a,g,l,c))}function BT(r,a){Tf(8390656,8,r,a)}function zT(r,a){Wu(2048,8,r,a)}function qT(r,a){return Wu(4,2,r,a)}function HT(r,a){return Wu(4,4,r,a)}function GT(r,a){if(typeof a=="function"){r=r();var l=a(r);return function(){typeof l=="function"?l():a(null)}}if(a!=null)return r=r(),a.current=r,function(){a.current=null}}function YT(r,a,l){l=l!=null?l.concat([r]):null,Wu(4,4,GT.bind(null,a,r),l)}function tg(){}function $T(r,a){var l=qt();a=a===void 0?null:a;var c=l.memoizedState;return a!==null&&Hp(a,c[1])?c[0]:(l.memoizedState=[r,a],r)}function WT(r,a){var l=qt();a=a===void 0?null:a;var c=l.memoizedState;if(a!==null&&Hp(a,c[1]))return c[0];if(c=r(),so){Pn(!0);try{r()}finally{Pn(!1)}}return l.memoizedState=[c,a],c}function ng(r,a,l){return l===void 0||(Ms&1073741824)!==0?r.memoizedState=a:(r.memoizedState=l,r=Xw(),ke.lanes|=r,zs|=r,l)}function KT(r,a,l,c){return Jn(l,a)?l:hl.current!==null?(r=ng(r,l,c),Jn(r,a)||(sn=!0),r):(Ms&42)===0?(sn=!0,r.memoizedState=l):(r=Xw(),ke.lanes|=r,zs|=r,a)}function QT(r,a,l,c,d){var g=he.p;he.p=g!==0&&8>g?g:8;var w=X.T,S={};X.T=S,sg(r,!1,a,l);try{var D=d(),G=X.S;if(G!==null&&G(S,D),D!==null&&typeof D=="object"&&typeof D.then=="function"){var Z=CD(D,c);Ku(r,a,Z,ri(r))}else Ku(r,a,c,ri(r))}catch(ne){Ku(r,a,{then:function(){},status:"rejected",reason:ne},ri())}finally{he.p=g,X.T=w}}function OD(){}function ig(r,a,l,c){if(r.tag!==5)throw Error(i(476));var d=XT(r).queue;QT(r,d,a,pe,l===null?OD:function(){return ZT(r),l(c)})}function XT(r){var a=r.memoizedState;if(a!==null)return a;a={memoizedState:pe,baseState:pe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xr,lastRenderedState:pe},next:null};var l={};return a.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xr,lastRenderedState:l},next:null},r.memoizedState=a,r=r.alternate,r!==null&&(r.memoizedState=a),a}function ZT(r){var a=XT(r).next.queue;Ku(r,a,{},ri())}function rg(){return Cn(dc)}function JT(){return qt().memoizedState}function ew(){return qt().memoizedState}function xD(r){for(var a=r.return;a!==null;){switch(a.tag){case 24:case 3:var l=ri();r=ks(l);var c=Ps(a,r,l);c!==null&&(si(c,a,l),qu(c,a,l)),a={cache:Pp()},r.payload=a;return}a=a.return}}function kD(r,a,l){var c=ri();l={lane:c,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},wf(r)?nw(a,l):(l=Sp(r,a,l,c),l!==null&&(si(l,r,c),iw(l,a,c)))}function tw(r,a,l){var c=ri();Ku(r,a,l,c)}function Ku(r,a,l,c){var d={lane:c,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(wf(r))nw(a,d);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=a.lastRenderedReducer,g!==null))try{var w=a.lastRenderedState,S=g(w,l);if(d.hasEagerState=!0,d.eagerState=S,Jn(S,w))return sf(r,a,d,0),mt===null&&rf(),!1}catch{}finally{}if(l=Sp(r,a,d,c),l!==null)return si(l,r,c),iw(l,a,c),!0}return!1}function sg(r,a,l,c){if(c={lane:2,revertLane:Vg(),action:c,hasEagerState:!1,eagerState:null,next:null},wf(r)){if(a)throw Error(i(479))}else a=Sp(r,l,c,2),a!==null&&si(a,r,2)}function wf(r){var a=r.alternate;return r===ke||a!==null&&a===ke}function nw(r,a){fl=gf=!0;var l=r.pending;l===null?a.next=a:(a.next=l.next,l.next=a),r.pending=a}function iw(r,a,l){if((l&4194048)!==0){var c=a.lanes;c&=r.pendingLanes,l|=c,a.lanes=l,nr(r,l)}}var bf={readContext:Cn,use:yf,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useLayoutEffect:Mt,useInsertionEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useSyncExternalStore:Mt,useId:Mt,useHostTransitionStatus:Mt,useFormState:Mt,useActionState:Mt,useOptimistic:Mt,useMemoCache:Mt,useCacheRefresh:Mt},rw={readContext:Cn,use:yf,useCallback:function(r,a){return Bn().memoizedState=[r,a===void 0?null:a],r},useContext:Cn,useEffect:BT,useImperativeHandle:function(r,a,l){l=l!=null?l.concat([r]):null,Tf(4194308,4,GT.bind(null,a,r),l)},useLayoutEffect:function(r,a){return Tf(4194308,4,r,a)},useInsertionEffect:function(r,a){Tf(4,2,r,a)},useMemo:function(r,a){var l=Bn();a=a===void 0?null:a;var c=r();if(so){Pn(!0);try{r()}finally{Pn(!1)}}return l.memoizedState=[c,a],c},useReducer:function(r,a,l){var c=Bn();if(l!==void 0){var d=l(a);if(so){Pn(!0);try{l(a)}finally{Pn(!1)}}}else d=a;return c.memoizedState=c.baseState=d,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:d},c.queue=r,r=r.dispatch=kD.bind(null,ke,r),[c.memoizedState,r]},useRef:function(r){var a=Bn();return r={current:r},a.memoizedState=r},useState:function(r){r=Jp(r);var a=r.queue,l=tw.bind(null,ke,a);return a.dispatch=l,[r.memoizedState,l]},useDebugValue:tg,useDeferredValue:function(r,a){var l=Bn();return ng(l,r,a)},useTransition:function(){var r=Jp(!1);return r=QT.bind(null,ke,r.queue,!0,!1),Bn().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,a,l){var c=ke,d=Bn();if(Je){if(l===void 0)throw Error(i(407));l=l()}else{if(l=a(),mt===null)throw Error(i(349));(Ye&124)!==0||AT(c,a,l)}d.memoizedState=l;var g={value:l,getSnapshot:a};return d.queue=g,BT(RT.bind(null,c,g,r),[r]),c.flags|=2048,ml(9,Ef(),CT.bind(null,c,g,l,a),null),l},useId:function(){var r=Bn(),a=mt.identifierPrefix;if(Je){var l=Wr,c=$r;l=(c&~(1<<32-jt(c)-1)).toString(32)+l,a="«"+a+"R"+l,l=_f++,0<l&&(a+="H"+l.toString(32)),a+="»"}else l=RD++,a="«"+a+"r"+l.toString(32)+"»";return r.memoizedState=a},useHostTransitionStatus:rg,useFormState:LT,useActionState:LT,useOptimistic:function(r){var a=Bn();a.memoizedState=a.baseState=r;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=l,a=sg.bind(null,ke,!0,l),l.dispatch=a,[r,a]},useMemoCache:Qp,useCacheRefresh:function(){return Bn().memoizedState=xD.bind(null,ke)}},sw={readContext:Cn,use:yf,useCallback:$T,useContext:Cn,useEffect:zT,useImperativeHandle:YT,useInsertionEffect:qT,useLayoutEffect:HT,useMemo:WT,useReducer:vf,useRef:FT,useState:function(){return vf(Xr)},useDebugValue:tg,useDeferredValue:function(r,a){var l=qt();return KT(l,st.memoizedState,r,a)},useTransition:function(){var r=vf(Xr)[0],a=qt().memoizedState;return[typeof r=="boolean"?r:$u(r),a]},useSyncExternalStore:ST,useId:JT,useHostTransitionStatus:rg,useFormState:VT,useActionState:VT,useOptimistic:function(r,a){var l=qt();return DT(l,st,r,a)},useMemoCache:Qp,useCacheRefresh:ew},PD={readContext:Cn,use:yf,useCallback:$T,useContext:Cn,useEffect:zT,useImperativeHandle:YT,useInsertionEffect:qT,useLayoutEffect:HT,useMemo:WT,useReducer:Zp,useRef:FT,useState:function(){return Zp(Xr)},useDebugValue:tg,useDeferredValue:function(r,a){var l=qt();return st===null?ng(l,r,a):KT(l,st.memoizedState,r,a)},useTransition:function(){var r=Zp(Xr)[0],a=qt().memoizedState;return[typeof r=="boolean"?r:$u(r),a]},useSyncExternalStore:ST,useId:JT,useHostTransitionStatus:rg,useFormState:jT,useActionState:jT,useOptimistic:function(r,a){var l=qt();return st!==null?DT(l,st,r,a):(l.baseState=r,[r,l.queue.dispatch])},useMemoCache:Qp,useCacheRefresh:ew},pl=null,Qu=0;function Sf(r){var a=Qu;return Qu+=1,pl===null&&(pl=[]),gT(pl,r,a)}function Xu(r,a){a=a.props.ref,r.ref=a!==void 0?a:null}function Af(r,a){throw a.$$typeof===v?Error(i(525)):(r=Object.prototype.toString.call(a),Error(i(31,r==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":r)))}function aw(r){var a=r._init;return a(r._payload)}function ow(r){function a(F,V){if(r){var q=F.deletions;q===null?(F.deletions=[V],F.flags|=16):q.push(V)}}function l(F,V){if(!r)return null;for(;V!==null;)a(F,V),V=V.sibling;return null}function c(F){for(var V=new Map;F!==null;)F.key!==null?V.set(F.key,F):V.set(F.index,F),F=F.sibling;return V}function d(F,V){return F=Yr(F,V),F.index=0,F.sibling=null,F}function g(F,V,q){return F.index=q,r?(q=F.alternate,q!==null?(q=q.index,q<V?(F.flags|=67108866,V):q):(F.flags|=67108866,V)):(F.flags|=1048576,V)}function w(F){return r&&F.alternate===null&&(F.flags|=67108866),F}function S(F,V,q,ee){return V===null||V.tag!==6?(V=Cp(q,F.mode,ee),V.return=F,V):(V=d(V,q),V.return=F,V)}function D(F,V,q,ee){var de=q.type;return de===O?Z(F,V,q.props.children,ee,q.key):V!==null&&(V.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===R&&aw(de)===V.type)?(V=d(V,q.props),Xu(V,q),V.return=F,V):(V=of(q.type,q.key,q.props,null,F.mode,ee),Xu(V,q),V.return=F,V)}function G(F,V,q,ee){return V===null||V.tag!==4||V.stateNode.containerInfo!==q.containerInfo||V.stateNode.implementation!==q.implementation?(V=Rp(q,F.mode,ee),V.return=F,V):(V=d(V,q.children||[]),V.return=F,V)}function Z(F,V,q,ee,de){return V===null||V.tag!==7?(V=Xa(q,F.mode,ee,de),V.return=F,V):(V=d(V,q),V.return=F,V)}function ne(F,V,q){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Cp(""+V,F.mode,q),V.return=F,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case T:return q=of(V.type,V.key,V.props,null,F.mode,q),Xu(q,V),q.return=F,q;case C:return V=Rp(V,F.mode,q),V.return=F,V;case R:var ee=V._init;return V=ee(V._payload),ne(F,V,q)}if(dt(V)||j(V))return V=Xa(V,F.mode,q,null),V.return=F,V;if(typeof V.then=="function")return ne(F,Sf(V),q);if(V.$$typeof===W)return ne(F,hf(F,V),q);Af(F,V)}return null}function Y(F,V,q,ee){var de=V!==null?V.key:null;if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return de!==null?null:S(F,V,""+q,ee);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case T:return q.key===de?D(F,V,q,ee):null;case C:return q.key===de?G(F,V,q,ee):null;case R:return de=q._init,q=de(q._payload),Y(F,V,q,ee)}if(dt(q)||j(q))return de!==null?null:Z(F,V,q,ee,null);if(typeof q.then=="function")return Y(F,V,Sf(q),ee);if(q.$$typeof===W)return Y(F,V,hf(F,q),ee);Af(F,q)}return null}function $(F,V,q,ee,de){if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return F=F.get(q)||null,S(V,F,""+ee,de);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case T:return F=F.get(ee.key===null?q:ee.key)||null,D(V,F,ee,de);case C:return F=F.get(ee.key===null?q:ee.key)||null,G(V,F,ee,de);case R:var Le=ee._init;return ee=Le(ee._payload),$(F,V,q,ee,de)}if(dt(ee)||j(ee))return F=F.get(q)||null,Z(V,F,ee,de,null);if(typeof ee.then=="function")return $(F,V,q,Sf(ee),de);if(ee.$$typeof===W)return $(F,V,q,hf(V,ee),de);Af(V,ee)}return null}function Ae(F,V,q,ee){for(var de=null,Le=null,_e=V,Te=V=0,on=null;_e!==null&&Te<q.length;Te++){_e.index>Te?(on=_e,_e=null):on=_e.sibling;var Qe=Y(F,_e,q[Te],ee);if(Qe===null){_e===null&&(_e=on);break}r&&_e&&Qe.alternate===null&&a(F,_e),V=g(Qe,V,Te),Le===null?de=Qe:Le.sibling=Qe,Le=Qe,_e=on}if(Te===q.length)return l(F,_e),Je&&Ja(F,Te),de;if(_e===null){for(;Te<q.length;Te++)_e=ne(F,q[Te],ee),_e!==null&&(V=g(_e,V,Te),Le===null?de=_e:Le.sibling=_e,Le=_e);return Je&&Ja(F,Te),de}for(_e=c(_e);Te<q.length;Te++)on=$(_e,F,Te,q[Te],ee),on!==null&&(r&&on.alternate!==null&&_e.delete(on.key===null?Te:on.key),V=g(on,V,Te),Le===null?de=on:Le.sibling=on,Le=on);return r&&_e.forEach(function(Xs){return a(F,Xs)}),Je&&Ja(F,Te),de}function Ee(F,V,q,ee){if(q==null)throw Error(i(151));for(var de=null,Le=null,_e=V,Te=V=0,on=null,Qe=q.next();_e!==null&&!Qe.done;Te++,Qe=q.next()){_e.index>Te?(on=_e,_e=null):on=_e.sibling;var Xs=Y(F,_e,Qe.value,ee);if(Xs===null){_e===null&&(_e=on);break}r&&_e&&Xs.alternate===null&&a(F,_e),V=g(Xs,V,Te),Le===null?de=Xs:Le.sibling=Xs,Le=Xs,_e=on}if(Qe.done)return l(F,_e),Je&&Ja(F,Te),de;if(_e===null){for(;!Qe.done;Te++,Qe=q.next())Qe=ne(F,Qe.value,ee),Qe!==null&&(V=g(Qe,V,Te),Le===null?de=Qe:Le.sibling=Qe,Le=Qe);return Je&&Ja(F,Te),de}for(_e=c(_e);!Qe.done;Te++,Qe=q.next())Qe=$(_e,F,Te,Qe.value,ee),Qe!==null&&(r&&Qe.alternate!==null&&_e.delete(Qe.key===null?Te:Qe.key),V=g(Qe,V,Te),Le===null?de=Qe:Le.sibling=Qe,Le=Qe);return r&&_e.forEach(function(MO){return a(F,MO)}),Je&&Ja(F,Te),de}function ot(F,V,q,ee){if(typeof q=="object"&&q!==null&&q.type===O&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case T:e:{for(var de=q.key;V!==null;){if(V.key===de){if(de=q.type,de===O){if(V.tag===7){l(F,V.sibling),ee=d(V,q.props.children),ee.return=F,F=ee;break e}}else if(V.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===R&&aw(de)===V.type){l(F,V.sibling),ee=d(V,q.props),Xu(ee,q),ee.return=F,F=ee;break e}l(F,V);break}else a(F,V);V=V.sibling}q.type===O?(ee=Xa(q.props.children,F.mode,ee,q.key),ee.return=F,F=ee):(ee=of(q.type,q.key,q.props,null,F.mode,ee),Xu(ee,q),ee.return=F,F=ee)}return w(F);case C:e:{for(de=q.key;V!==null;){if(V.key===de)if(V.tag===4&&V.stateNode.containerInfo===q.containerInfo&&V.stateNode.implementation===q.implementation){l(F,V.sibling),ee=d(V,q.children||[]),ee.return=F,F=ee;break e}else{l(F,V);break}else a(F,V);V=V.sibling}ee=Rp(q,F.mode,ee),ee.return=F,F=ee}return w(F);case R:return de=q._init,q=de(q._payload),ot(F,V,q,ee)}if(dt(q))return Ae(F,V,q,ee);if(j(q)){if(de=j(q),typeof de!="function")throw Error(i(150));return q=de.call(q),Ee(F,V,q,ee)}if(typeof q.then=="function")return ot(F,V,Sf(q),ee);if(q.$$typeof===W)return ot(F,V,hf(F,q),ee);Af(F,q)}return typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint"?(q=""+q,V!==null&&V.tag===6?(l(F,V.sibling),ee=d(V,q),ee.return=F,F=ee):(l(F,V),ee=Cp(q,F.mode,ee),ee.return=F,F=ee),w(F)):l(F,V)}return function(F,V,q,ee){try{Qu=0;var de=ot(F,V,q,ee);return pl=null,de}catch(_e){if(_e===Bu||_e===df)throw _e;var Le=ei(29,_e,null,F.mode);return Le.lanes=ee,Le.return=F,Le}finally{}}}var gl=ow(!0),lw=ow(!1),Ci=te(null),dr=null;function Ls(r){var a=r.alternate;oe(Qt,Qt.current&1),oe(Ci,r),dr===null&&(a===null||hl.current!==null||a.memoizedState!==null)&&(dr=r)}function uw(r){if(r.tag===22){if(oe(Qt,Qt.current),oe(Ci,r),dr===null){var a=r.alternate;a!==null&&a.memoizedState!==null&&(dr=r)}}else Vs()}function Vs(){oe(Qt,Qt.current),oe(Ci,Ci.current)}function Zr(r){ce(Ci),dr===r&&(dr=null),ce(Qt)}var Qt=te(0);function Cf(r){for(var a=r;a!==null;){if(a.tag===13){var l=a.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||Kg(l)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function ag(r,a,l,c){a=r.memoizedState,l=l(c,a),l=l==null?a:_({},a,l),r.memoizedState=l,r.lanes===0&&(r.updateQueue.baseState=l)}var og={enqueueSetState:function(r,a,l){r=r._reactInternals;var c=ri(),d=ks(c);d.payload=a,l!=null&&(d.callback=l),a=Ps(r,d,c),a!==null&&(si(a,r,c),qu(a,r,c))},enqueueReplaceState:function(r,a,l){r=r._reactInternals;var c=ri(),d=ks(c);d.tag=1,d.payload=a,l!=null&&(d.callback=l),a=Ps(r,d,c),a!==null&&(si(a,r,c),qu(a,r,c))},enqueueForceUpdate:function(r,a){r=r._reactInternals;var l=ri(),c=ks(l);c.tag=2,a!=null&&(c.callback=a),a=Ps(r,c,l),a!==null&&(si(a,r,l),qu(a,r,l))}};function cw(r,a,l,c,d,g,w){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,g,w):a.prototype&&a.prototype.isPureReactComponent?!ku(l,c)||!ku(d,g):!0}function hw(r,a,l,c){r=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(l,c),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(l,c),a.state!==r&&og.enqueueReplaceState(a,a.state,null)}function ao(r,a){var l=a;if("ref"in a){l={};for(var c in a)c!=="ref"&&(l[c]=a[c])}if(r=r.defaultProps){l===a&&(l=_({},l));for(var d in r)l[d]===void 0&&(l[d]=r[d])}return l}var Rf=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function fw(r){Rf(r)}function dw(r){console.error(r)}function mw(r){Rf(r)}function If(r,a){try{var l=r.onUncaughtError;l(a.value,{componentStack:a.stack})}catch(c){setTimeout(function(){throw c})}}function pw(r,a,l){try{var c=r.onCaughtError;c(l.value,{componentStack:l.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function lg(r,a,l){return l=ks(l),l.tag=3,l.payload={element:null},l.callback=function(){If(r,a)},l}function gw(r){return r=ks(r),r.tag=3,r}function _w(r,a,l,c){var d=l.type.getDerivedStateFromError;if(typeof d=="function"){var g=c.value;r.payload=function(){return d(g)},r.callback=function(){pw(a,l,c)}}var w=l.stateNode;w!==null&&typeof w.componentDidCatch=="function"&&(r.callback=function(){pw(a,l,c),typeof d!="function"&&(qs===null?qs=new Set([this]):qs.add(this));var S=c.stack;this.componentDidCatch(c.value,{componentStack:S!==null?S:""})})}function MD(r,a,l,c,d){if(l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(a=l.alternate,a!==null&&Uu(a,l,d,!0),l=Ci.current,l!==null){switch(l.tag){case 13:return dr===null?xg():l.alternate===null&&Ot===0&&(Ot=3),l.flags&=-257,l.flags|=65536,l.lanes=d,c===Vp?l.flags|=16384:(a=l.updateQueue,a===null?l.updateQueue=new Set([c]):a.add(c),Pg(r,c,d)),!1;case 22:return l.flags|=65536,c===Vp?l.flags|=16384:(a=l.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([c])},l.updateQueue=a):(l=a.retryQueue,l===null?a.retryQueue=new Set([c]):l.add(c)),Pg(r,c,d)),!1}throw Error(i(435,l.tag))}return Pg(r,c,d),xg(),!1}if(Je)return a=Ci.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=d,c!==Dp&&(r=Error(i(422),{cause:c}),Vu(wi(r,l)))):(c!==Dp&&(a=Error(i(423),{cause:c}),Vu(wi(a,l))),r=r.current.alternate,r.flags|=65536,d&=-d,r.lanes|=d,c=wi(c,l),d=lg(r.stateNode,c,d),Fp(r,d),Ot!==4&&(Ot=2)),!1;var g=Error(i(520),{cause:c});if(g=wi(g,l),rc===null?rc=[g]:rc.push(g),Ot!==4&&(Ot=2),a===null)return!0;c=wi(c,l),l=a;do{switch(l.tag){case 3:return l.flags|=65536,r=d&-d,l.lanes|=r,r=lg(l.stateNode,c,r),Fp(l,r),!1;case 1:if(a=l.type,g=l.stateNode,(l.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(qs===null||!qs.has(g))))return l.flags|=65536,d&=-d,l.lanes|=d,d=gw(d),_w(d,r,l,c),Fp(l,d),!1}l=l.return}while(l!==null);return!1}var yw=Error(i(461)),sn=!1;function vn(r,a,l,c){a.child=r===null?lw(a,null,l,c):gl(a,r.child,l,c)}function vw(r,a,l,c,d){l=l.render;var g=a.ref;if("ref"in c){var w={};for(var S in c)S!=="ref"&&(w[S]=c[S])}else w=c;return io(a),c=Gp(r,a,l,w,g,d),S=Yp(),r!==null&&!sn?($p(r,a,d),Jr(r,a,d)):(Je&&S&&Ip(a),a.flags|=1,vn(r,a,c,d),a.child)}function Ew(r,a,l,c,d){if(r===null){var g=l.type;return typeof g=="function"&&!Ap(g)&&g.defaultProps===void 0&&l.compare===null?(a.tag=15,a.type=g,Tw(r,a,g,c,d)):(r=of(l.type,null,c,a,a.mode,d),r.ref=a.ref,r.return=a,a.child=r)}if(g=r.child,!gg(r,d)){var w=g.memoizedProps;if(l=l.compare,l=l!==null?l:ku,l(w,c)&&r.ref===a.ref)return Jr(r,a,d)}return a.flags|=1,r=Yr(g,c),r.ref=a.ref,r.return=a,a.child=r}function Tw(r,a,l,c,d){if(r!==null){var g=r.memoizedProps;if(ku(g,c)&&r.ref===a.ref)if(sn=!1,a.pendingProps=c=g,gg(r,d))(r.flags&131072)!==0&&(sn=!0);else return a.lanes=r.lanes,Jr(r,a,d)}return ug(r,a,l,c,d)}function ww(r,a,l){var c=a.pendingProps,d=c.children,g=r!==null?r.memoizedState:null;if(c.mode==="hidden"){if((a.flags&128)!==0){if(c=g!==null?g.baseLanes|l:l,r!==null){for(d=a.child=r.child,g=0;d!==null;)g=g|d.lanes|d.childLanes,d=d.sibling;a.childLanes=g&~c}else a.childLanes=0,a.child=null;return bw(r,a,c,l)}if((l&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},r!==null&&ff(a,g!==null?g.cachePool:null),g!==null?TT(a,g):zp(),uw(a);else return a.lanes=a.childLanes=536870912,bw(r,a,g!==null?g.baseLanes|l:l,l)}else g!==null?(ff(a,g.cachePool),TT(a,g),Vs(),a.memoizedState=null):(r!==null&&ff(a,null),zp(),Vs());return vn(r,a,d,l),a.child}function bw(r,a,l,c){var d=Lp();return d=d===null?null:{parent:Kt._currentValue,pool:d},a.memoizedState={baseLanes:l,cachePool:d},r!==null&&ff(a,null),zp(),uw(a),r!==null&&Uu(r,a,c,!0),null}function Nf(r,a){var l=a.ref;if(l===null)r!==null&&r.ref!==null&&(a.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(i(284));(r===null||r.ref!==l)&&(a.flags|=4194816)}}function ug(r,a,l,c,d){return io(a),l=Gp(r,a,l,c,void 0,d),c=Yp(),r!==null&&!sn?($p(r,a,d),Jr(r,a,d)):(Je&&c&&Ip(a),a.flags|=1,vn(r,a,l,d),a.child)}function Sw(r,a,l,c,d,g){return io(a),a.updateQueue=null,l=bT(a,c,l,d),wT(r),c=Yp(),r!==null&&!sn?($p(r,a,g),Jr(r,a,g)):(Je&&c&&Ip(a),a.flags|=1,vn(r,a,l,g),a.child)}function Aw(r,a,l,c,d){if(io(a),a.stateNode===null){var g=al,w=l.contextType;typeof w=="object"&&w!==null&&(g=Cn(w)),g=new l(c,g),a.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=og,a.stateNode=g,g._reactInternals=a,g=a.stateNode,g.props=c,g.state=a.memoizedState,g.refs={},Up(a),w=l.contextType,g.context=typeof w=="object"&&w!==null?Cn(w):al,g.state=a.memoizedState,w=l.getDerivedStateFromProps,typeof w=="function"&&(ag(a,l,w,c),g.state=a.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(w=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),w!==g.state&&og.enqueueReplaceState(g,g.state,null),Gu(a,c,g,d),Hu(),g.state=a.memoizedState),typeof g.componentDidMount=="function"&&(a.flags|=4194308),c=!0}else if(r===null){g=a.stateNode;var S=a.memoizedProps,D=ao(l,S);g.props=D;var G=g.context,Z=l.contextType;w=al,typeof Z=="object"&&Z!==null&&(w=Cn(Z));var ne=l.getDerivedStateFromProps;Z=typeof ne=="function"||typeof g.getSnapshotBeforeUpdate=="function",S=a.pendingProps!==S,Z||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(S||G!==w)&&hw(a,g,c,w),xs=!1;var Y=a.memoizedState;g.state=Y,Gu(a,c,g,d),Hu(),G=a.memoizedState,S||Y!==G||xs?(typeof ne=="function"&&(ag(a,l,ne,c),G=a.memoizedState),(D=xs||cw(a,l,D,c,Y,G,w))?(Z||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(a.flags|=4194308)):(typeof g.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=c,a.memoizedState=G),g.props=c,g.state=G,g.context=w,c=D):(typeof g.componentDidMount=="function"&&(a.flags|=4194308),c=!1)}else{g=a.stateNode,jp(r,a),w=a.memoizedProps,Z=ao(l,w),g.props=Z,ne=a.pendingProps,Y=g.context,G=l.contextType,D=al,typeof G=="object"&&G!==null&&(D=Cn(G)),S=l.getDerivedStateFromProps,(G=typeof S=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(w!==ne||Y!==D)&&hw(a,g,c,D),xs=!1,Y=a.memoizedState,g.state=Y,Gu(a,c,g,d),Hu();var $=a.memoizedState;w!==ne||Y!==$||xs||r!==null&&r.dependencies!==null&&cf(r.dependencies)?(typeof S=="function"&&(ag(a,l,S,c),$=a.memoizedState),(Z=xs||cw(a,l,Z,c,Y,$,D)||r!==null&&r.dependencies!==null&&cf(r.dependencies))?(G||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(c,$,D),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(c,$,D)),typeof g.componentDidUpdate=="function"&&(a.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof g.componentDidUpdate!="function"||w===r.memoizedProps&&Y===r.memoizedState||(a.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===r.memoizedProps&&Y===r.memoizedState||(a.flags|=1024),a.memoizedProps=c,a.memoizedState=$),g.props=c,g.state=$,g.context=D,c=Z):(typeof g.componentDidUpdate!="function"||w===r.memoizedProps&&Y===r.memoizedState||(a.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===r.memoizedProps&&Y===r.memoizedState||(a.flags|=1024),c=!1)}return g=c,Nf(r,a),c=(a.flags&128)!==0,g||c?(g=a.stateNode,l=c&&typeof l.getDerivedStateFromError!="function"?null:g.render(),a.flags|=1,r!==null&&c?(a.child=gl(a,r.child,null,d),a.child=gl(a,null,l,d)):vn(r,a,l,d),a.memoizedState=g.state,r=a.child):r=Jr(r,a,d),r}function Cw(r,a,l,c){return Lu(),a.flags|=256,vn(r,a,l,c),a.child}var cg={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hg(r){return{baseLanes:r,cachePool:dT()}}function fg(r,a,l){return r=r!==null?r.childLanes&~l:0,a&&(r|=Ri),r}function Rw(r,a,l){var c=a.pendingProps,d=!1,g=(a.flags&128)!==0,w;if((w=g)||(w=r!==null&&r.memoizedState===null?!1:(Qt.current&2)!==0),w&&(d=!0,a.flags&=-129),w=(a.flags&32)!==0,a.flags&=-33,r===null){if(Je){if(d?Ls(a):Vs(),Je){var S=Dt,D;if(D=S){e:{for(D=S,S=fr;D.nodeType!==8;){if(!S){S=null;break e}if(D=qi(D.nextSibling),D===null){S=null;break e}}S=D}S!==null?(a.memoizedState={dehydrated:S,treeContext:Za!==null?{id:$r,overflow:Wr}:null,retryLane:536870912,hydrationErrors:null},D=ei(18,null,null,0),D.stateNode=S,D.return=a,a.child=D,Un=a,Dt=null,D=!0):D=!1}D||to(a)}if(S=a.memoizedState,S!==null&&(S=S.dehydrated,S!==null))return Kg(S)?a.lanes=32:a.lanes=536870912,null;Zr(a)}return S=c.children,c=c.fallback,d?(Vs(),d=a.mode,S=Df({mode:"hidden",children:S},d),c=Xa(c,d,l,null),S.return=a,c.return=a,S.sibling=c,a.child=S,d=a.child,d.memoizedState=hg(l),d.childLanes=fg(r,w,l),a.memoizedState=cg,c):(Ls(a),dg(a,S))}if(D=r.memoizedState,D!==null&&(S=D.dehydrated,S!==null)){if(g)a.flags&256?(Ls(a),a.flags&=-257,a=mg(r,a,l)):a.memoizedState!==null?(Vs(),a.child=r.child,a.flags|=128,a=null):(Vs(),d=c.fallback,S=a.mode,c=Df({mode:"visible",children:c.children},S),d=Xa(d,S,l,null),d.flags|=2,c.return=a,d.return=a,c.sibling=d,a.child=c,gl(a,r.child,null,l),c=a.child,c.memoizedState=hg(l),c.childLanes=fg(r,w,l),a.memoizedState=cg,a=d);else if(Ls(a),Kg(S)){if(w=S.nextSibling&&S.nextSibling.dataset,w)var G=w.dgst;w=G,c=Error(i(419)),c.stack="",c.digest=w,Vu({value:c,source:null,stack:null}),a=mg(r,a,l)}else if(sn||Uu(r,a,l,!1),w=(l&r.childLanes)!==0,sn||w){if(w=mt,w!==null&&(c=l&-l,c=(c&42)!==0?1:Ke(c),c=(c&(w.suspendedLanes|l))!==0?0:c,c!==0&&c!==D.retryLane))throw D.retryLane=c,sl(r,c),si(w,r,c),yw;S.data==="$?"||xg(),a=mg(r,a,l)}else S.data==="$?"?(a.flags|=192,a.child=r.child,a=null):(r=D.treeContext,Dt=qi(S.nextSibling),Un=a,Je=!0,eo=null,fr=!1,r!==null&&(Si[Ai++]=$r,Si[Ai++]=Wr,Si[Ai++]=Za,$r=r.id,Wr=r.overflow,Za=a),a=dg(a,c.children),a.flags|=4096);return a}return d?(Vs(),d=c.fallback,S=a.mode,D=r.child,G=D.sibling,c=Yr(D,{mode:"hidden",children:c.children}),c.subtreeFlags=D.subtreeFlags&65011712,G!==null?d=Yr(G,d):(d=Xa(d,S,l,null),d.flags|=2),d.return=a,c.return=a,c.sibling=d,a.child=c,c=d,d=a.child,S=r.child.memoizedState,S===null?S=hg(l):(D=S.cachePool,D!==null?(G=Kt._currentValue,D=D.parent!==G?{parent:G,pool:G}:D):D=dT(),S={baseLanes:S.baseLanes|l,cachePool:D}),d.memoizedState=S,d.childLanes=fg(r,w,l),a.memoizedState=cg,c):(Ls(a),l=r.child,r=l.sibling,l=Yr(l,{mode:"visible",children:c.children}),l.return=a,l.sibling=null,r!==null&&(w=a.deletions,w===null?(a.deletions=[r],a.flags|=16):w.push(r)),a.child=l,a.memoizedState=null,l)}function dg(r,a){return a=Df({mode:"visible",children:a},r.mode),a.return=r,r.child=a}function Df(r,a){return r=ei(22,r,null,a),r.lanes=0,r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},r}function mg(r,a,l){return gl(a,r.child,null,l),r=dg(a,a.pendingProps.children),r.flags|=2,a.memoizedState=null,r}function Iw(r,a,l){r.lanes|=a;var c=r.alternate;c!==null&&(c.lanes|=a),xp(r.return,a,l)}function pg(r,a,l,c,d){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:c,tail:l,tailMode:d}:(g.isBackwards=a,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=l,g.tailMode=d)}function Nw(r,a,l){var c=a.pendingProps,d=c.revealOrder,g=c.tail;if(vn(r,a,c.children,l),c=Qt.current,(c&2)!==0)c=c&1|2,a.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=a.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Iw(r,l,a);else if(r.tag===19)Iw(r,l,a);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===a)break e;for(;r.sibling===null;){if(r.return===null||r.return===a)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}switch(oe(Qt,c),d){case"forwards":for(l=a.child,d=null;l!==null;)r=l.alternate,r!==null&&Cf(r)===null&&(d=l),l=l.sibling;l=d,l===null?(d=a.child,a.child=null):(d=l.sibling,l.sibling=null),pg(a,!1,d,l,g);break;case"backwards":for(l=null,d=a.child,a.child=null;d!==null;){if(r=d.alternate,r!==null&&Cf(r)===null){a.child=d;break}r=d.sibling,d.sibling=l,l=d,d=r}pg(a,!0,l,null,g);break;case"together":pg(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Jr(r,a,l){if(r!==null&&(a.dependencies=r.dependencies),zs|=a.lanes,(l&a.childLanes)===0)if(r!==null){if(Uu(r,a,l,!1),(l&a.childLanes)===0)return null}else return null;if(r!==null&&a.child!==r.child)throw Error(i(153));if(a.child!==null){for(r=a.child,l=Yr(r,r.pendingProps),a.child=l,l.return=a;r.sibling!==null;)r=r.sibling,l=l.sibling=Yr(r,r.pendingProps),l.return=a;l.sibling=null}return a.child}function gg(r,a){return(r.lanes&a)!==0?!0:(r=r.dependencies,!!(r!==null&&cf(r)))}function LD(r,a,l){switch(a.tag){case 3:We(a,a.stateNode.containerInfo),Os(a,Kt,r.memoizedState.cache),Lu();break;case 27:case 5:fi(a);break;case 4:We(a,a.stateNode.containerInfo);break;case 10:Os(a,a.type,a.memoizedProps.value);break;case 13:var c=a.memoizedState;if(c!==null)return c.dehydrated!==null?(Ls(a),a.flags|=128,null):(l&a.child.childLanes)!==0?Rw(r,a,l):(Ls(a),r=Jr(r,a,l),r!==null?r.sibling:null);Ls(a);break;case 19:var d=(r.flags&128)!==0;if(c=(l&a.childLanes)!==0,c||(Uu(r,a,l,!1),c=(l&a.childLanes)!==0),d){if(c)return Nw(r,a,l);a.flags|=128}if(d=a.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),oe(Qt,Qt.current),c)break;return null;case 22:case 23:return a.lanes=0,ww(r,a,l);case 24:Os(a,Kt,r.memoizedState.cache)}return Jr(r,a,l)}function Dw(r,a,l){if(r!==null)if(r.memoizedProps!==a.pendingProps)sn=!0;else{if(!gg(r,l)&&(a.flags&128)===0)return sn=!1,LD(r,a,l);sn=(r.flags&131072)!==0}else sn=!1,Je&&(a.flags&1048576)!==0&&aT(a,uf,a.index);switch(a.lanes=0,a.tag){case 16:e:{r=a.pendingProps;var c=a.elementType,d=c._init;if(c=d(c._payload),a.type=c,typeof c=="function")Ap(c)?(r=ao(c,r),a.tag=1,a=Aw(null,a,c,r,l)):(a.tag=0,a=ug(null,a,c,r,l));else{if(c!=null){if(d=c.$$typeof,d===re){a.tag=11,a=vw(null,a,c,r,l);break e}else if(d===N){a.tag=14,a=Ew(null,a,c,r,l);break e}}throw a=Et(c)||c,Error(i(306,a,""))}}return a;case 0:return ug(r,a,a.type,a.pendingProps,l);case 1:return c=a.type,d=ao(c,a.pendingProps),Aw(r,a,c,d,l);case 3:e:{if(We(a,a.stateNode.containerInfo),r===null)throw Error(i(387));c=a.pendingProps;var g=a.memoizedState;d=g.element,jp(r,a),Gu(a,c,null,l);var w=a.memoizedState;if(c=w.cache,Os(a,Kt,c),c!==g.cache&&kp(a,[Kt],l,!0),Hu(),c=w.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:w.cache},a.updateQueue.baseState=g,a.memoizedState=g,a.flags&256){a=Cw(r,a,c,l);break e}else if(c!==d){d=wi(Error(i(424)),a),Vu(d),a=Cw(r,a,c,l);break e}else{switch(r=a.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}for(Dt=qi(r.firstChild),Un=a,Je=!0,eo=null,fr=!0,l=lw(a,null,c,l),a.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Lu(),c===d){a=Jr(r,a,l);break e}vn(r,a,c,l)}a=a.child}return a;case 26:return Nf(r,a),r===null?(l=P0(a.type,null,a.pendingProps,null))?a.memoizedState=l:Je||(l=a.type,r=a.pendingProps,c=Hf(ve.current).createElement(l),c[Nt]=a,c[bt]=r,Tn(c,l,r),De(c),a.stateNode=c):a.memoizedState=P0(a.type,r.memoizedProps,a.pendingProps,r.memoizedState),null;case 27:return fi(a),r===null&&Je&&(c=a.stateNode=O0(a.type,a.pendingProps,ve.current),Un=a,fr=!0,d=Dt,Ys(a.type)?(Qg=d,Dt=qi(c.firstChild)):Dt=d),vn(r,a,a.pendingProps.children,l),Nf(r,a),r===null&&(a.flags|=4194304),a.child;case 5:return r===null&&Je&&((d=c=Dt)&&(c=cO(c,a.type,a.pendingProps,fr),c!==null?(a.stateNode=c,Un=a,Dt=qi(c.firstChild),fr=!1,d=!0):d=!1),d||to(a)),fi(a),d=a.type,g=a.pendingProps,w=r!==null?r.memoizedProps:null,c=g.children,Yg(d,g)?c=null:w!==null&&Yg(d,w)&&(a.flags|=32),a.memoizedState!==null&&(d=Gp(r,a,ID,null,null,l),dc._currentValue=d),Nf(r,a),vn(r,a,c,l),a.child;case 6:return r===null&&Je&&((r=l=Dt)&&(l=hO(l,a.pendingProps,fr),l!==null?(a.stateNode=l,Un=a,Dt=null,r=!0):r=!1),r||to(a)),null;case 13:return Rw(r,a,l);case 4:return We(a,a.stateNode.containerInfo),c=a.pendingProps,r===null?a.child=gl(a,null,c,l):vn(r,a,c,l),a.child;case 11:return vw(r,a,a.type,a.pendingProps,l);case 7:return vn(r,a,a.pendingProps,l),a.child;case 8:return vn(r,a,a.pendingProps.children,l),a.child;case 12:return vn(r,a,a.pendingProps.children,l),a.child;case 10:return c=a.pendingProps,Os(a,a.type,c.value),vn(r,a,c.children,l),a.child;case 9:return d=a.type._context,c=a.pendingProps.children,io(a),d=Cn(d),c=c(d),a.flags|=1,vn(r,a,c,l),a.child;case 14:return Ew(r,a,a.type,a.pendingProps,l);case 15:return Tw(r,a,a.type,a.pendingProps,l);case 19:return Nw(r,a,l);case 31:return c=a.pendingProps,l=a.mode,c={mode:c.mode,children:c.children},r===null?(l=Df(c,l),l.ref=a.ref,a.child=l,l.return=a,a=l):(l=Yr(r.child,c),l.ref=a.ref,a.child=l,l.return=a,a=l),a;case 22:return ww(r,a,l);case 24:return io(a),c=Cn(Kt),r===null?(d=Lp(),d===null&&(d=mt,g=Pp(),d.pooledCache=g,g.refCount++,g!==null&&(d.pooledCacheLanes|=l),d=g),a.memoizedState={parent:c,cache:d},Up(a),Os(a,Kt,d)):((r.lanes&l)!==0&&(jp(r,a),Gu(a,null,null,l),Hu()),d=r.memoizedState,g=a.memoizedState,d.parent!==c?(d={parent:c,cache:c},a.memoizedState=d,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=d),Os(a,Kt,c)):(c=g.cache,Os(a,Kt,c),c!==d.cache&&kp(a,[Kt],l,!0))),vn(r,a,a.pendingProps.children,l),a.child;case 29:throw a.pendingProps}throw Error(i(156,a.tag))}function es(r){r.flags|=4}function Ow(r,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)r.flags&=-16777217;else if(r.flags|=16777216,!j0(a)){if(a=Ci.current,a!==null&&((Ye&4194048)===Ye?dr!==null:(Ye&62914560)!==Ye&&(Ye&536870912)===0||a!==dr))throw zu=Vp,mT;r.flags|=8192}}function Of(r,a){a!==null&&(r.flags|=4),r.flags&16384&&(a=r.tag!==22?Cs():536870912,r.lanes|=a,El|=a)}function Zu(r,a){if(!Je)switch(r.tailMode){case"hidden":a=r.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?r.tail=null:l.sibling=null;break;case"collapsed":l=r.tail;for(var c=null;l!==null;)l.alternate!==null&&(c=l),l=l.sibling;c===null?a||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function Rt(r){var a=r.alternate!==null&&r.alternate.child===r.child,l=0,c=0;if(a)for(var d=r.child;d!==null;)l|=d.lanes|d.childLanes,c|=d.subtreeFlags&65011712,c|=d.flags&65011712,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)l|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=c,r.childLanes=l,a}function VD(r,a,l){var c=a.pendingProps;switch(Np(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rt(a),null;case 1:return Rt(a),null;case 3:return l=a.stateNode,c=null,r!==null&&(c=r.memoizedState.cache),a.memoizedState.cache!==c&&(a.flags|=2048),Qr(Kt),Yt(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(r===null||r.child===null)&&(Mu(a)?es(a):r===null||r.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,uT())),Rt(a),null;case 26:return l=a.memoizedState,r===null?(es(a),l!==null?(Rt(a),Ow(a,l)):(Rt(a),a.flags&=-16777217)):l?l!==r.memoizedState?(es(a),Rt(a),Ow(a,l)):(Rt(a),a.flags&=-16777217):(r.memoizedProps!==c&&es(a),Rt(a),a.flags&=-16777217),null;case 27:Qn(a),l=ve.current;var d=a.type;if(r!==null&&a.stateNode!=null)r.memoizedProps!==c&&es(a);else{if(!c){if(a.stateNode===null)throw Error(i(166));return Rt(a),null}r=ge.current,Mu(a)?oT(a):(r=O0(d,c,l),a.stateNode=r,es(a))}return Rt(a),null;case 5:if(Qn(a),l=a.type,r!==null&&a.stateNode!=null)r.memoizedProps!==c&&es(a);else{if(!c){if(a.stateNode===null)throw Error(i(166));return Rt(a),null}if(r=ge.current,Mu(a))oT(a);else{switch(d=Hf(ve.current),r){case 1:r=d.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:r=d.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":r=d.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":r=d.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":r=d.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof c.is=="string"?d.createElement("select",{is:c.is}):d.createElement("select"),c.multiple?r.multiple=!0:c.size&&(r.size=c.size);break;default:r=typeof c.is=="string"?d.createElement(l,{is:c.is}):d.createElement(l)}}r[Nt]=a,r[bt]=c;e:for(d=a.child;d!==null;){if(d.tag===5||d.tag===6)r.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===a)break e;for(;d.sibling===null;){if(d.return===null||d.return===a)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}a.stateNode=r;e:switch(Tn(r,l,c),l){case"button":case"input":case"select":case"textarea":r=!!c.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&es(a)}}return Rt(a),a.flags&=-16777217,null;case 6:if(r&&a.stateNode!=null)r.memoizedProps!==c&&es(a);else{if(typeof c!="string"&&a.stateNode===null)throw Error(i(166));if(r=ve.current,Mu(a)){if(r=a.stateNode,l=a.memoizedProps,c=null,d=Un,d!==null)switch(d.tag){case 27:case 5:c=d.memoizedProps}r[Nt]=a,r=!!(r.nodeValue===l||c!==null&&c.suppressHydrationWarning===!0||S0(r.nodeValue,l)),r||to(a)}else r=Hf(r).createTextNode(c),r[Nt]=a,a.stateNode=r}return Rt(a),null;case 13:if(c=a.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(d=Mu(a),c!==null&&c.dehydrated!==null){if(r===null){if(!d)throw Error(i(318));if(d=a.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));d[Nt]=a}else Lu(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Rt(a),d=!1}else d=uT(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=d),d=!0;if(!d)return a.flags&256?(Zr(a),a):(Zr(a),null)}if(Zr(a),(a.flags&128)!==0)return a.lanes=l,a;if(l=c!==null,r=r!==null&&r.memoizedState!==null,l){c=a.child,d=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(d=c.alternate.memoizedState.cachePool.pool);var g=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(g=c.memoizedState.cachePool.pool),g!==d&&(c.flags|=2048)}return l!==r&&l&&(a.child.flags|=8192),Of(a,a.updateQueue),Rt(a),null;case 4:return Yt(),r===null&&Bg(a.stateNode.containerInfo),Rt(a),null;case 10:return Qr(a.type),Rt(a),null;case 19:if(ce(Qt),d=a.memoizedState,d===null)return Rt(a),null;if(c=(a.flags&128)!==0,g=d.rendering,g===null)if(c)Zu(d,!1);else{if(Ot!==0||r!==null&&(r.flags&128)!==0)for(r=a.child;r!==null;){if(g=Cf(r),g!==null){for(a.flags|=128,Zu(d,!1),r=g.updateQueue,a.updateQueue=r,Of(a,r),a.subtreeFlags=0,r=l,l=a.child;l!==null;)sT(l,r),l=l.sibling;return oe(Qt,Qt.current&1|2),a.child}r=r.sibling}d.tail!==null&&dn()>Pf&&(a.flags|=128,c=!0,Zu(d,!1),a.lanes=4194304)}else{if(!c)if(r=Cf(g),r!==null){if(a.flags|=128,c=!0,r=r.updateQueue,a.updateQueue=r,Of(a,r),Zu(d,!0),d.tail===null&&d.tailMode==="hidden"&&!g.alternate&&!Je)return Rt(a),null}else 2*dn()-d.renderingStartTime>Pf&&l!==536870912&&(a.flags|=128,c=!0,Zu(d,!1),a.lanes=4194304);d.isBackwards?(g.sibling=a.child,a.child=g):(r=d.last,r!==null?r.sibling=g:a.child=g,d.last=g)}return d.tail!==null?(a=d.tail,d.rendering=a,d.tail=a.sibling,d.renderingStartTime=dn(),a.sibling=null,r=Qt.current,oe(Qt,c?r&1|2:r&1),a):(Rt(a),null);case 22:case 23:return Zr(a),qp(),c=a.memoizedState!==null,r!==null?r.memoizedState!==null!==c&&(a.flags|=8192):c&&(a.flags|=8192),c?(l&536870912)!==0&&(a.flags&128)===0&&(Rt(a),a.subtreeFlags&6&&(a.flags|=8192)):Rt(a),l=a.updateQueue,l!==null&&Of(a,l.retryQueue),l=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),c=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==l&&(a.flags|=2048),r!==null&&ce(ro),null;case 24:return l=null,r!==null&&(l=r.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),Qr(Kt),Rt(a),null;case 25:return null;case 30:return null}throw Error(i(156,a.tag))}function UD(r,a){switch(Np(a),a.tag){case 1:return r=a.flags,r&65536?(a.flags=r&-65537|128,a):null;case 3:return Qr(Kt),Yt(),r=a.flags,(r&65536)!==0&&(r&128)===0?(a.flags=r&-65537|128,a):null;case 26:case 27:case 5:return Qn(a),null;case 13:if(Zr(a),r=a.memoizedState,r!==null&&r.dehydrated!==null){if(a.alternate===null)throw Error(i(340));Lu()}return r=a.flags,r&65536?(a.flags=r&-65537|128,a):null;case 19:return ce(Qt),null;case 4:return Yt(),null;case 10:return Qr(a.type),null;case 22:case 23:return Zr(a),qp(),r!==null&&ce(ro),r=a.flags,r&65536?(a.flags=r&-65537|128,a):null;case 24:return Qr(Kt),null;case 25:return null;default:return null}}function xw(r,a){switch(Np(a),a.tag){case 3:Qr(Kt),Yt();break;case 26:case 27:case 5:Qn(a);break;case 4:Yt();break;case 13:Zr(a);break;case 19:ce(Qt);break;case 10:Qr(a.type);break;case 22:case 23:Zr(a),qp(),r!==null&&ce(ro);break;case 24:Qr(Kt)}}function Ju(r,a){try{var l=a.updateQueue,c=l!==null?l.lastEffect:null;if(c!==null){var d=c.next;l=d;do{if((l.tag&r)===r){c=void 0;var g=l.create,w=l.inst;c=g(),w.destroy=c}l=l.next}while(l!==d)}}catch(S){ht(a,a.return,S)}}function Us(r,a,l){try{var c=a.updateQueue,d=c!==null?c.lastEffect:null;if(d!==null){var g=d.next;c=g;do{if((c.tag&r)===r){var w=c.inst,S=w.destroy;if(S!==void 0){w.destroy=void 0,d=a;var D=l,G=S;try{G()}catch(Z){ht(d,D,Z)}}}c=c.next}while(c!==g)}}catch(Z){ht(a,a.return,Z)}}function kw(r){var a=r.updateQueue;if(a!==null){var l=r.stateNode;try{ET(a,l)}catch(c){ht(r,r.return,c)}}}function Pw(r,a,l){l.props=ao(r.type,r.memoizedProps),l.state=r.memoizedState;try{l.componentWillUnmount()}catch(c){ht(r,a,c)}}function ec(r,a){try{var l=r.ref;if(l!==null){switch(r.tag){case 26:case 27:case 5:var c=r.stateNode;break;case 30:c=r.stateNode;break;default:c=r.stateNode}typeof l=="function"?r.refCleanup=l(c):l.current=c}}catch(d){ht(r,a,d)}}function mr(r,a){var l=r.ref,c=r.refCleanup;if(l!==null)if(typeof c=="function")try{c()}catch(d){ht(r,a,d)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(d){ht(r,a,d)}else l.current=null}function Mw(r){var a=r.type,l=r.memoizedProps,c=r.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":l.autoFocus&&c.focus();break e;case"img":l.src?c.src=l.src:l.srcSet&&(c.srcset=l.srcSet)}}catch(d){ht(r,r.return,d)}}function _g(r,a,l){try{var c=r.stateNode;sO(c,r.type,l,a),c[bt]=a}catch(d){ht(r,r.return,d)}}function Lw(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&Ys(r.type)||r.tag===4}function yg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Lw(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&Ys(r.type)||r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function vg(r,a,l){var c=r.tag;if(c===5||c===6)r=r.stateNode,a?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(r,a):(a=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,a.appendChild(r),l=l._reactRootContainer,l!=null||a.onclick!==null||(a.onclick=qf));else if(c!==4&&(c===27&&Ys(r.type)&&(l=r.stateNode,a=null),r=r.child,r!==null))for(vg(r,a,l),r=r.sibling;r!==null;)vg(r,a,l),r=r.sibling}function xf(r,a,l){var c=r.tag;if(c===5||c===6)r=r.stateNode,a?l.insertBefore(r,a):l.appendChild(r);else if(c!==4&&(c===27&&Ys(r.type)&&(l=r.stateNode),r=r.child,r!==null))for(xf(r,a,l),r=r.sibling;r!==null;)xf(r,a,l),r=r.sibling}function Vw(r){var a=r.stateNode,l=r.memoizedProps;try{for(var c=r.type,d=a.attributes;d.length;)a.removeAttributeNode(d[0]);Tn(a,c,l),a[Nt]=r,a[bt]=l}catch(g){ht(r,r.return,g)}}var ts=!1,Lt=!1,Eg=!1,Uw=typeof WeakSet=="function"?WeakSet:Set,an=null;function jD(r,a){if(r=r.containerInfo,Hg=Qf,r=KE(r),yp(r)){if("selectionStart"in r)var l={start:r.selectionStart,end:r.selectionEnd};else e:{l=(l=r.ownerDocument)&&l.defaultView||window;var c=l.getSelection&&l.getSelection();if(c&&c.rangeCount!==0){l=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{l.nodeType,g.nodeType}catch{l=null;break e}var w=0,S=-1,D=-1,G=0,Z=0,ne=r,Y=null;t:for(;;){for(var $;ne!==l||d!==0&&ne.nodeType!==3||(S=w+d),ne!==g||c!==0&&ne.nodeType!==3||(D=w+c),ne.nodeType===3&&(w+=ne.nodeValue.length),($=ne.firstChild)!==null;)Y=ne,ne=$;for(;;){if(ne===r)break t;if(Y===l&&++G===d&&(S=w),Y===g&&++Z===c&&(D=w),($=ne.nextSibling)!==null)break;ne=Y,Y=ne.parentNode}ne=$}l=S===-1||D===-1?null:{start:S,end:D}}else l=null}l=l||{start:0,end:0}}else l=null;for(Gg={focusedElem:r,selectionRange:l},Qf=!1,an=a;an!==null;)if(a=an,r=a.child,(a.subtreeFlags&1024)!==0&&r!==null)r.return=a,an=r;else for(;an!==null;){switch(a=an,g=a.alternate,r=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((r&1024)!==0&&g!==null){r=void 0,l=a,d=g.memoizedProps,g=g.memoizedState,c=l.stateNode;try{var Ae=ao(l.type,d,l.elementType===l.type);r=c.getSnapshotBeforeUpdate(Ae,g),c.__reactInternalSnapshotBeforeUpdate=r}catch(Ee){ht(l,l.return,Ee)}}break;case 3:if((r&1024)!==0){if(r=a.stateNode.containerInfo,l=r.nodeType,l===9)Wg(r);else if(l===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Wg(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((r&1024)!==0)throw Error(i(163))}if(r=a.sibling,r!==null){r.return=a.return,an=r;break}an=a.return}}function jw(r,a,l){var c=l.flags;switch(l.tag){case 0:case 11:case 15:js(r,l),c&4&&Ju(5,l);break;case 1:if(js(r,l),c&4)if(r=l.stateNode,a===null)try{r.componentDidMount()}catch(w){ht(l,l.return,w)}else{var d=ao(l.type,a.memoizedProps);a=a.memoizedState;try{r.componentDidUpdate(d,a,r.__reactInternalSnapshotBeforeUpdate)}catch(w){ht(l,l.return,w)}}c&64&&kw(l),c&512&&ec(l,l.return);break;case 3:if(js(r,l),c&64&&(r=l.updateQueue,r!==null)){if(a=null,l.child!==null)switch(l.child.tag){case 27:case 5:a=l.child.stateNode;break;case 1:a=l.child.stateNode}try{ET(r,a)}catch(w){ht(l,l.return,w)}}break;case 27:a===null&&c&4&&Vw(l);case 26:case 5:js(r,l),a===null&&c&4&&Mw(l),c&512&&ec(l,l.return);break;case 12:js(r,l);break;case 13:js(r,l),c&4&&zw(r,l),c&64&&(r=l.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(l=WD.bind(null,l),fO(r,l))));break;case 22:if(c=l.memoizedState!==null||ts,!c){a=a!==null&&a.memoizedState!==null||Lt,d=ts;var g=Lt;ts=c,(Lt=a)&&!g?Fs(r,l,(l.subtreeFlags&8772)!==0):js(r,l),ts=d,Lt=g}break;case 30:break;default:js(r,l)}}function Fw(r){var a=r.alternate;a!==null&&(r.alternate=null,Fw(a)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(a=r.stateNode,a!==null&&Vi(a)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var St=null,zn=!1;function ns(r,a,l){for(l=l.child;l!==null;)Bw(r,a,l),l=l.sibling}function Bw(r,a,l){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(wt,l)}catch{}switch(l.tag){case 26:Lt||mr(l,a),ns(r,a,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Lt||mr(l,a);var c=St,d=zn;Ys(l.type)&&(St=l.stateNode,zn=!1),ns(r,a,l),uc(l.stateNode),St=c,zn=d;break;case 5:Lt||mr(l,a);case 6:if(c=St,d=zn,St=null,ns(r,a,l),St=c,zn=d,St!==null)if(zn)try{(St.nodeType===9?St.body:St.nodeName==="HTML"?St.ownerDocument.body:St).removeChild(l.stateNode)}catch(g){ht(l,a,g)}else try{St.removeChild(l.stateNode)}catch(g){ht(l,a,g)}break;case 18:St!==null&&(zn?(r=St,N0(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,l.stateNode),_c(r)):N0(St,l.stateNode));break;case 4:c=St,d=zn,St=l.stateNode.containerInfo,zn=!0,ns(r,a,l),St=c,zn=d;break;case 0:case 11:case 14:case 15:Lt||Us(2,l,a),Lt||Us(4,l,a),ns(r,a,l);break;case 1:Lt||(mr(l,a),c=l.stateNode,typeof c.componentWillUnmount=="function"&&Pw(l,a,c)),ns(r,a,l);break;case 21:ns(r,a,l);break;case 22:Lt=(c=Lt)||l.memoizedState!==null,ns(r,a,l),Lt=c;break;default:ns(r,a,l)}}function zw(r,a){if(a.memoizedState===null&&(r=a.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{_c(r)}catch(l){ht(a,a.return,l)}}function FD(r){switch(r.tag){case 13:case 19:var a=r.stateNode;return a===null&&(a=r.stateNode=new Uw),a;case 22:return r=r.stateNode,a=r._retryCache,a===null&&(a=r._retryCache=new Uw),a;default:throw Error(i(435,r.tag))}}function Tg(r,a){var l=FD(r);a.forEach(function(c){var d=KD.bind(null,r,c);l.has(c)||(l.add(c),c.then(d,d))})}function ti(r,a){var l=a.deletions;if(l!==null)for(var c=0;c<l.length;c++){var d=l[c],g=r,w=a,S=w;e:for(;S!==null;){switch(S.tag){case 27:if(Ys(S.type)){St=S.stateNode,zn=!1;break e}break;case 5:St=S.stateNode,zn=!1;break e;case 3:case 4:St=S.stateNode.containerInfo,zn=!0;break e}S=S.return}if(St===null)throw Error(i(160));Bw(g,w,d),St=null,zn=!1,g=d.alternate,g!==null&&(g.return=null),d.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)qw(a,r),a=a.sibling}var zi=null;function qw(r,a){var l=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:ti(a,r),ni(r),c&4&&(Us(3,r,r.return),Ju(3,r),Us(5,r,r.return));break;case 1:ti(a,r),ni(r),c&512&&(Lt||l===null||mr(l,l.return)),c&64&&ts&&(r=r.updateQueue,r!==null&&(c=r.callbacks,c!==null&&(l=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=l===null?c:l.concat(c))));break;case 26:var d=zi;if(ti(a,r),ni(r),c&512&&(Lt||l===null||mr(l,l.return)),c&4){var g=l!==null?l.memoizedState:null;if(c=r.memoizedState,l===null)if(c===null)if(r.stateNode===null){e:{c=r.type,l=r.memoizedProps,d=d.ownerDocument||d;t:switch(c){case"title":g=d.getElementsByTagName("title")[0],(!g||g[Li]||g[Nt]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=d.createElement(c),d.head.insertBefore(g,d.querySelector("head > title"))),Tn(g,c,l),g[Nt]=r,De(g),c=g;break e;case"link":var w=V0("link","href",d).get(c+(l.href||""));if(w){for(var S=0;S<w.length;S++)if(g=w[S],g.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&g.getAttribute("rel")===(l.rel==null?null:l.rel)&&g.getAttribute("title")===(l.title==null?null:l.title)&&g.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){w.splice(S,1);break t}}g=d.createElement(c),Tn(g,c,l),d.head.appendChild(g);break;case"meta":if(w=V0("meta","content",d).get(c+(l.content||""))){for(S=0;S<w.length;S++)if(g=w[S],g.getAttribute("content")===(l.content==null?null:""+l.content)&&g.getAttribute("name")===(l.name==null?null:l.name)&&g.getAttribute("property")===(l.property==null?null:l.property)&&g.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&g.getAttribute("charset")===(l.charSet==null?null:l.charSet)){w.splice(S,1);break t}}g=d.createElement(c),Tn(g,c,l),d.head.appendChild(g);break;default:throw Error(i(468,c))}g[Nt]=r,De(g),c=g}r.stateNode=c}else U0(d,r.type,r.stateNode);else r.stateNode=L0(d,c,r.memoizedProps);else g!==c?(g===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):g.count--,c===null?U0(d,r.type,r.stateNode):L0(d,c,r.memoizedProps)):c===null&&r.stateNode!==null&&_g(r,r.memoizedProps,l.memoizedProps)}break;case 27:ti(a,r),ni(r),c&512&&(Lt||l===null||mr(l,l.return)),l!==null&&c&4&&_g(r,r.memoizedProps,l.memoizedProps);break;case 5:if(ti(a,r),ni(r),c&512&&(Lt||l===null||mr(l,l.return)),r.flags&32){d=r.stateNode;try{yi(d,"")}catch($){ht(r,r.return,$)}}c&4&&r.stateNode!=null&&(d=r.memoizedProps,_g(r,d,l!==null?l.memoizedProps:d)),c&1024&&(Eg=!0);break;case 6:if(ti(a,r),ni(r),c&4){if(r.stateNode===null)throw Error(i(162));c=r.memoizedProps,l=r.stateNode;try{l.nodeValue=c}catch($){ht(r,r.return,$)}}break;case 3:if($f=null,d=zi,zi=Gf(a.containerInfo),ti(a,r),zi=d,ni(r),c&4&&l!==null&&l.memoizedState.isDehydrated)try{_c(a.containerInfo)}catch($){ht(r,r.return,$)}Eg&&(Eg=!1,Hw(r));break;case 4:c=zi,zi=Gf(r.stateNode.containerInfo),ti(a,r),ni(r),zi=c;break;case 12:ti(a,r),ni(r);break;case 13:ti(a,r),ni(r),r.child.flags&8192&&r.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Rg=dn()),c&4&&(c=r.updateQueue,c!==null&&(r.updateQueue=null,Tg(r,c)));break;case 22:d=r.memoizedState!==null;var D=l!==null&&l.memoizedState!==null,G=ts,Z=Lt;if(ts=G||d,Lt=Z||D,ti(a,r),Lt=Z,ts=G,ni(r),c&8192)e:for(a=r.stateNode,a._visibility=d?a._visibility&-2:a._visibility|1,d&&(l===null||D||ts||Lt||oo(r)),l=null,a=r;;){if(a.tag===5||a.tag===26){if(l===null){D=l=a;try{if(g=D.stateNode,d)w=g.style,typeof w.setProperty=="function"?w.setProperty("display","none","important"):w.display="none";else{S=D.stateNode;var ne=D.memoizedProps.style,Y=ne!=null&&ne.hasOwnProperty("display")?ne.display:null;S.style.display=Y==null||typeof Y=="boolean"?"":(""+Y).trim()}}catch($){ht(D,D.return,$)}}}else if(a.tag===6){if(l===null){D=a;try{D.stateNode.nodeValue=d?"":D.memoizedProps}catch($){ht(D,D.return,$)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===r)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break e;for(;a.sibling===null;){if(a.return===null||a.return===r)break e;l===a&&(l=null),a=a.return}l===a&&(l=null),a.sibling.return=a.return,a=a.sibling}c&4&&(c=r.updateQueue,c!==null&&(l=c.retryQueue,l!==null&&(c.retryQueue=null,Tg(r,l))));break;case 19:ti(a,r),ni(r),c&4&&(c=r.updateQueue,c!==null&&(r.updateQueue=null,Tg(r,c)));break;case 30:break;case 21:break;default:ti(a,r),ni(r)}}function ni(r){var a=r.flags;if(a&2){try{for(var l,c=r.return;c!==null;){if(Lw(c)){l=c;break}c=c.return}if(l==null)throw Error(i(160));switch(l.tag){case 27:var d=l.stateNode,g=yg(r);xf(r,g,d);break;case 5:var w=l.stateNode;l.flags&32&&(yi(w,""),l.flags&=-33);var S=yg(r);xf(r,S,w);break;case 3:case 4:var D=l.stateNode.containerInfo,G=yg(r);vg(r,G,D);break;default:throw Error(i(161))}}catch(Z){ht(r,r.return,Z)}r.flags&=-3}a&4096&&(r.flags&=-4097)}function Hw(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var a=r;Hw(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),r=r.sibling}}function js(r,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)jw(r,a.alternate,a),a=a.sibling}function oo(r){for(r=r.child;r!==null;){var a=r;switch(a.tag){case 0:case 11:case 14:case 15:Us(4,a,a.return),oo(a);break;case 1:mr(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&Pw(a,a.return,l),oo(a);break;case 27:uc(a.stateNode);case 26:case 5:mr(a,a.return),oo(a);break;case 22:a.memoizedState===null&&oo(a);break;case 30:oo(a);break;default:oo(a)}r=r.sibling}}function Fs(r,a,l){for(l=l&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var c=a.alternate,d=r,g=a,w=g.flags;switch(g.tag){case 0:case 11:case 15:Fs(d,g,l),Ju(4,g);break;case 1:if(Fs(d,g,l),c=g,d=c.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(G){ht(c,c.return,G)}if(c=g,d=c.updateQueue,d!==null){var S=c.stateNode;try{var D=d.shared.hiddenCallbacks;if(D!==null)for(d.shared.hiddenCallbacks=null,d=0;d<D.length;d++)vT(D[d],S)}catch(G){ht(c,c.return,G)}}l&&w&64&&kw(g),ec(g,g.return);break;case 27:Vw(g);case 26:case 5:Fs(d,g,l),l&&c===null&&w&4&&Mw(g),ec(g,g.return);break;case 12:Fs(d,g,l);break;case 13:Fs(d,g,l),l&&w&4&&zw(d,g);break;case 22:g.memoizedState===null&&Fs(d,g,l),ec(g,g.return);break;case 30:break;default:Fs(d,g,l)}a=a.sibling}}function wg(r,a){var l=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),r=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==l&&(r!=null&&r.refCount++,l!=null&&ju(l))}function bg(r,a){r=null,a.alternate!==null&&(r=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==r&&(a.refCount++,r!=null&&ju(r))}function pr(r,a,l,c){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Gw(r,a,l,c),a=a.sibling}function Gw(r,a,l,c){var d=a.flags;switch(a.tag){case 0:case 11:case 15:pr(r,a,l,c),d&2048&&Ju(9,a);break;case 1:pr(r,a,l,c);break;case 3:pr(r,a,l,c),d&2048&&(r=null,a.alternate!==null&&(r=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==r&&(a.refCount++,r!=null&&ju(r)));break;case 12:if(d&2048){pr(r,a,l,c),r=a.stateNode;try{var g=a.memoizedProps,w=g.id,S=g.onPostCommit;typeof S=="function"&&S(w,a.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(D){ht(a,a.return,D)}}else pr(r,a,l,c);break;case 13:pr(r,a,l,c);break;case 23:break;case 22:g=a.stateNode,w=a.alternate,a.memoizedState!==null?g._visibility&2?pr(r,a,l,c):tc(r,a):g._visibility&2?pr(r,a,l,c):(g._visibility|=2,_l(r,a,l,c,(a.subtreeFlags&10256)!==0)),d&2048&&wg(w,a);break;case 24:pr(r,a,l,c),d&2048&&bg(a.alternate,a);break;default:pr(r,a,l,c)}}function _l(r,a,l,c,d){for(d=d&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var g=r,w=a,S=l,D=c,G=w.flags;switch(w.tag){case 0:case 11:case 15:_l(g,w,S,D,d),Ju(8,w);break;case 23:break;case 22:var Z=w.stateNode;w.memoizedState!==null?Z._visibility&2?_l(g,w,S,D,d):tc(g,w):(Z._visibility|=2,_l(g,w,S,D,d)),d&&G&2048&&wg(w.alternate,w);break;case 24:_l(g,w,S,D,d),d&&G&2048&&bg(w.alternate,w);break;default:_l(g,w,S,D,d)}a=a.sibling}}function tc(r,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var l=r,c=a,d=c.flags;switch(c.tag){case 22:tc(l,c),d&2048&&wg(c.alternate,c);break;case 24:tc(l,c),d&2048&&bg(c.alternate,c);break;default:tc(l,c)}a=a.sibling}}var nc=8192;function yl(r){if(r.subtreeFlags&nc)for(r=r.child;r!==null;)Yw(r),r=r.sibling}function Yw(r){switch(r.tag){case 26:yl(r),r.flags&nc&&r.memoizedState!==null&&AO(zi,r.memoizedState,r.memoizedProps);break;case 5:yl(r);break;case 3:case 4:var a=zi;zi=Gf(r.stateNode.containerInfo),yl(r),zi=a;break;case 22:r.memoizedState===null&&(a=r.alternate,a!==null&&a.memoizedState!==null?(a=nc,nc=16777216,yl(r),nc=a):yl(r));break;default:yl(r)}}function $w(r){var a=r.alternate;if(a!==null&&(r=a.child,r!==null)){a.child=null;do a=r.sibling,r.sibling=null,r=a;while(r!==null)}}function ic(r){var a=r.deletions;if((r.flags&16)!==0){if(a!==null)for(var l=0;l<a.length;l++){var c=a[l];an=c,Kw(c,r)}$w(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Ww(r),r=r.sibling}function Ww(r){switch(r.tag){case 0:case 11:case 15:ic(r),r.flags&2048&&Us(9,r,r.return);break;case 3:ic(r);break;case 12:ic(r);break;case 22:var a=r.stateNode;r.memoizedState!==null&&a._visibility&2&&(r.return===null||r.return.tag!==13)?(a._visibility&=-3,kf(r)):ic(r);break;default:ic(r)}}function kf(r){var a=r.deletions;if((r.flags&16)!==0){if(a!==null)for(var l=0;l<a.length;l++){var c=a[l];an=c,Kw(c,r)}$w(r)}for(r=r.child;r!==null;){switch(a=r,a.tag){case 0:case 11:case 15:Us(8,a,a.return),kf(a);break;case 22:l=a.stateNode,l._visibility&2&&(l._visibility&=-3,kf(a));break;default:kf(a)}r=r.sibling}}function Kw(r,a){for(;an!==null;){var l=an;switch(l.tag){case 0:case 11:case 15:Us(8,l,a);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var c=l.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:ju(l.memoizedState.cache)}if(c=l.child,c!==null)c.return=l,an=c;else e:for(l=r;an!==null;){c=an;var d=c.sibling,g=c.return;if(Fw(c),c===l){an=null;break e}if(d!==null){d.return=g,an=d;break e}an=g}}}var BD={getCacheForType:function(r){var a=Cn(Kt),l=a.data.get(r);return l===void 0&&(l=r(),a.data.set(r,l)),l}},zD=typeof WeakMap=="function"?WeakMap:Map,nt=0,mt=null,Ue=null,Ye=0,it=0,ii=null,Bs=!1,vl=!1,Sg=!1,is=0,Ot=0,zs=0,lo=0,Ag=0,Ri=0,El=0,rc=null,qn=null,Cg=!1,Rg=0,Pf=1/0,Mf=null,qs=null,En=0,Hs=null,Tl=null,wl=0,Ig=0,Ng=null,Qw=null,sc=0,Dg=null;function ri(){if((nt&2)!==0&&Ye!==0)return Ye&-Ye;if(X.T!==null){var r=ul;return r!==0?r:Vg()}return ir()}function Xw(){Ri===0&&(Ri=(Ye&536870912)===0||Je?Pa():536870912);var r=Ci.current;return r!==null&&(r.flags|=32),Ri}function si(r,a,l){(r===mt&&(it===2||it===9)||r.cancelPendingCommit!==null)&&(bl(r,0),Gs(r,Ye,Ri,!1)),pi(r,l),((nt&2)===0||r!==mt)&&(r===mt&&((nt&2)===0&&(lo|=l),Ot===4&&Gs(r,Ye,Ri,!1)),gr(r))}function Zw(r,a,l){if((nt&6)!==0)throw Error(i(327));var c=!l&&(a&124)===0&&(a&r.expiredLanes)===0||tr(r,a),d=c?GD(r,a):kg(r,a,!0),g=c;do{if(d===0){vl&&!c&&Gs(r,a,0,!1);break}else{if(l=r.current.alternate,g&&!qD(l)){d=kg(r,a,!1),g=!1;continue}if(d===2){if(g=a,r.errorRecoveryDisabledLanes&g)var w=0;else w=r.pendingLanes&-536870913,w=w!==0?w:w&536870912?536870912:0;if(w!==0){a=w;e:{var S=r;d=rc;var D=S.current.memoizedState.isDehydrated;if(D&&(bl(S,w).flags|=256),w=kg(S,w,!1),w!==2){if(Sg&&!D){S.errorRecoveryDisabledLanes|=g,lo|=g,d=4;break e}g=qn,qn=d,g!==null&&(qn===null?qn=g:qn.push.apply(qn,g))}d=w}if(g=!1,d!==2)continue}}if(d===1){bl(r,0),Gs(r,a,0,!0);break}e:{switch(c=r,g=d,g){case 0:case 1:throw Error(i(345));case 4:if((a&4194048)!==a)break;case 6:Gs(c,a,Ri,!Bs);break e;case 2:qn=null;break;case 3:case 5:break;default:throw Error(i(329))}if((a&62914560)===a&&(d=Rg+300-dn(),10<d)){if(Gs(c,a,Ri,!Bs),Mr(c,0,!0)!==0)break e;c.timeoutHandle=R0(Jw.bind(null,c,l,qn,Mf,Cg,a,Ri,lo,El,Bs,g,2,-0,0),d);break e}Jw(c,l,qn,Mf,Cg,a,Ri,lo,El,Bs,g,0,-0,0)}}break}while(!0);gr(r)}function Jw(r,a,l,c,d,g,w,S,D,G,Z,ne,Y,$){if(r.timeoutHandle=-1,ne=a.subtreeFlags,(ne&8192||(ne&16785408)===16785408)&&(fc={stylesheets:null,count:0,unsuspend:SO},Yw(a),ne=CO(),ne!==null)){r.cancelPendingCommit=ne(a0.bind(null,r,a,g,l,c,d,w,S,D,Z,1,Y,$)),Gs(r,g,w,!G);return}a0(r,a,g,l,c,d,w,S,D)}function qD(r){for(var a=r;;){var l=a.tag;if((l===0||l===11||l===15)&&a.flags&16384&&(l=a.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var c=0;c<l.length;c++){var d=l[c],g=d.getSnapshot;d=d.value;try{if(!Jn(g(),d))return!1}catch{return!1}}if(l=a.child,a.subtreeFlags&16384&&l!==null)l.return=a,a=l;else{if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Gs(r,a,l,c){a&=~Ag,a&=~lo,r.suspendedLanes|=a,r.pingedLanes&=~a,c&&(r.warmLanes|=a),c=r.expirationTimes;for(var d=a;0<d;){var g=31-jt(d),w=1<<g;c[g]=-1,d&=~w}l!==0&&gt(r,l,a)}function Lf(){return(nt&6)===0?(ac(0),!1):!0}function Og(){if(Ue!==null){if(it===0)var r=Ue.return;else r=Ue,Kr=no=null,Wp(r),pl=null,Qu=0,r=Ue;for(;r!==null;)xw(r.alternate,r),r=r.return;Ue=null}}function bl(r,a){var l=r.timeoutHandle;l!==-1&&(r.timeoutHandle=-1,oO(l)),l=r.cancelPendingCommit,l!==null&&(r.cancelPendingCommit=null,l()),Og(),mt=r,Ue=l=Yr(r.current,null),Ye=a,it=0,ii=null,Bs=!1,vl=tr(r,a),Sg=!1,El=Ri=Ag=lo=zs=Ot=0,qn=rc=null,Cg=!1,(a&8)!==0&&(a|=a&32);var c=r.entangledLanes;if(c!==0)for(r=r.entanglements,c&=a;0<c;){var d=31-jt(c),g=1<<d;a|=r[d],c&=~g}return is=a,rf(),l}function e0(r,a){ke=null,X.H=bf,a===Bu||a===df?(a=_T(),it=3):a===mT?(a=_T(),it=4):it=a===yw?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,ii=a,Ue===null&&(Ot=1,If(r,wi(a,r.current)))}function t0(){var r=X.H;return X.H=bf,r===null?bf:r}function n0(){var r=X.A;return X.A=BD,r}function xg(){Ot=4,Bs||(Ye&4194048)!==Ye&&Ci.current!==null||(vl=!0),(zs&134217727)===0&&(lo&134217727)===0||mt===null||Gs(mt,Ye,Ri,!1)}function kg(r,a,l){var c=nt;nt|=2;var d=t0(),g=n0();(mt!==r||Ye!==a)&&(Mf=null,bl(r,a)),a=!1;var w=Ot;e:do try{if(it!==0&&Ue!==null){var S=Ue,D=ii;switch(it){case 8:Og(),w=6;break e;case 3:case 2:case 9:case 6:Ci.current===null&&(a=!0);var G=it;if(it=0,ii=null,Sl(r,S,D,G),l&&vl){w=0;break e}break;default:G=it,it=0,ii=null,Sl(r,S,D,G)}}HD(),w=Ot;break}catch(Z){e0(r,Z)}while(!0);return a&&r.shellSuspendCounter++,Kr=no=null,nt=c,X.H=d,X.A=g,Ue===null&&(mt=null,Ye=0,rf()),w}function HD(){for(;Ue!==null;)i0(Ue)}function GD(r,a){var l=nt;nt|=2;var c=t0(),d=n0();mt!==r||Ye!==a?(Mf=null,Pf=dn()+500,bl(r,a)):vl=tr(r,a);e:do try{if(it!==0&&Ue!==null){a=Ue;var g=ii;t:switch(it){case 1:it=0,ii=null,Sl(r,a,g,1);break;case 2:case 9:if(pT(g)){it=0,ii=null,r0(a);break}a=function(){it!==2&&it!==9||mt!==r||(it=7),gr(r)},g.then(a,a);break e;case 3:it=7;break e;case 4:it=5;break e;case 7:pT(g)?(it=0,ii=null,r0(a)):(it=0,ii=null,Sl(r,a,g,7));break;case 5:var w=null;switch(Ue.tag){case 26:w=Ue.memoizedState;case 5:case 27:var S=Ue;if(!w||j0(w)){it=0,ii=null;var D=S.sibling;if(D!==null)Ue=D;else{var G=S.return;G!==null?(Ue=G,Vf(G)):Ue=null}break t}}it=0,ii=null,Sl(r,a,g,5);break;case 6:it=0,ii=null,Sl(r,a,g,6);break;case 8:Og(),Ot=6;break e;default:throw Error(i(462))}}YD();break}catch(Z){e0(r,Z)}while(!0);return Kr=no=null,X.H=c,X.A=d,nt=l,Ue!==null?0:(mt=null,Ye=0,rf(),Ot)}function YD(){for(;Ue!==null&&!Pi();)i0(Ue)}function i0(r){var a=Dw(r.alternate,r,is);r.memoizedProps=r.pendingProps,a===null?Vf(r):Ue=a}function r0(r){var a=r,l=a.alternate;switch(a.tag){case 15:case 0:a=Sw(l,a,a.pendingProps,a.type,void 0,Ye);break;case 11:a=Sw(l,a,a.pendingProps,a.type.render,a.ref,Ye);break;case 5:Wp(a);default:xw(l,a),a=Ue=sT(a,is),a=Dw(l,a,is)}r.memoizedProps=r.pendingProps,a===null?Vf(r):Ue=a}function Sl(r,a,l,c){Kr=no=null,Wp(a),pl=null,Qu=0;var d=a.return;try{if(MD(r,d,a,l,Ye)){Ot=1,If(r,wi(l,r.current)),Ue=null;return}}catch(g){if(d!==null)throw Ue=d,g;Ot=1,If(r,wi(l,r.current)),Ue=null;return}a.flags&32768?(Je||c===1?r=!0:vl||(Ye&536870912)!==0?r=!1:(Bs=r=!0,(c===2||c===9||c===3||c===6)&&(c=Ci.current,c!==null&&c.tag===13&&(c.flags|=16384))),s0(a,r)):Vf(a)}function Vf(r){var a=r;do{if((a.flags&32768)!==0){s0(a,Bs);return}r=a.return;var l=VD(a.alternate,a,is);if(l!==null){Ue=l;return}if(a=a.sibling,a!==null){Ue=a;return}Ue=a=r}while(a!==null);Ot===0&&(Ot=5)}function s0(r,a){do{var l=UD(r.alternate,r);if(l!==null){l.flags&=32767,Ue=l;return}if(l=r.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!a&&(r=r.sibling,r!==null)){Ue=r;return}Ue=r=l}while(r!==null);Ot=6,Ue=null}function a0(r,a,l,c,d,g,w,S,D){r.cancelPendingCommit=null;do Uf();while(En!==0);if((nt&6)!==0)throw Error(i(327));if(a!==null){if(a===r.current)throw Error(i(177));if(g=a.lanes|a.childLanes,g|=bp,Ft(r,l,g,w,S,D),r===mt&&(Ue=mt=null,Ye=0),Tl=a,Hs=r,wl=l,Ig=g,Ng=d,Qw=c,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,QD(xr,function(){return h0(),null})):(r.callbackNode=null,r.callbackPriority=0),c=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||c){c=X.T,X.T=null,d=he.p,he.p=2,w=nt,nt|=4;try{jD(r,a,l)}finally{nt=w,he.p=d,X.T=c}}En=1,o0(),l0(),u0()}}function o0(){if(En===1){En=0;var r=Hs,a=Tl,l=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||l){l=X.T,X.T=null;var c=he.p;he.p=2;var d=nt;nt|=4;try{qw(a,r);var g=Gg,w=KE(r.containerInfo),S=g.focusedElem,D=g.selectionRange;if(w!==S&&S&&S.ownerDocument&&WE(S.ownerDocument.documentElement,S)){if(D!==null&&yp(S)){var G=D.start,Z=D.end;if(Z===void 0&&(Z=G),"selectionStart"in S)S.selectionStart=G,S.selectionEnd=Math.min(Z,S.value.length);else{var ne=S.ownerDocument||document,Y=ne&&ne.defaultView||window;if(Y.getSelection){var $=Y.getSelection(),Ae=S.textContent.length,Ee=Math.min(D.start,Ae),ot=D.end===void 0?Ee:Math.min(D.end,Ae);!$.extend&&Ee>ot&&(w=ot,ot=Ee,Ee=w);var F=$E(S,Ee),V=$E(S,ot);if(F&&V&&($.rangeCount!==1||$.anchorNode!==F.node||$.anchorOffset!==F.offset||$.focusNode!==V.node||$.focusOffset!==V.offset)){var q=ne.createRange();q.setStart(F.node,F.offset),$.removeAllRanges(),Ee>ot?($.addRange(q),$.extend(V.node,V.offset)):(q.setEnd(V.node,V.offset),$.addRange(q))}}}}for(ne=[],$=S;$=$.parentNode;)$.nodeType===1&&ne.push({element:$,left:$.scrollLeft,top:$.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<ne.length;S++){var ee=ne[S];ee.element.scrollLeft=ee.left,ee.element.scrollTop=ee.top}}Qf=!!Hg,Gg=Hg=null}finally{nt=d,he.p=c,X.T=l}}r.current=a,En=2}}function l0(){if(En===2){En=0;var r=Hs,a=Tl,l=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||l){l=X.T,X.T=null;var c=he.p;he.p=2;var d=nt;nt|=4;try{jw(r,a.alternate,a)}finally{nt=d,he.p=c,X.T=l}}En=3}}function u0(){if(En===4||En===3){En=0,fn();var r=Hs,a=Tl,l=wl,c=Qw;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?En=5:(En=0,Tl=Hs=null,c0(r,r.pendingLanes));var d=r.pendingLanes;if(d===0&&(qs=null),mn(l),a=a.stateNode,Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(wt,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=X.T,d=he.p,he.p=2,X.T=null;try{for(var g=r.onRecoverableError,w=0;w<c.length;w++){var S=c[w];g(S.value,{componentStack:S.stack})}}finally{X.T=a,he.p=d}}(wl&3)!==0&&Uf(),gr(r),d=r.pendingLanes,(l&4194090)!==0&&(d&42)!==0?r===Dg?sc++:(sc=0,Dg=r):sc=0,ac(0)}}function c0(r,a){(r.pooledCacheLanes&=a)===0&&(a=r.pooledCache,a!=null&&(r.pooledCache=null,ju(a)))}function Uf(r){return o0(),l0(),u0(),h0()}function h0(){if(En!==5)return!1;var r=Hs,a=Ig;Ig=0;var l=mn(wl),c=X.T,d=he.p;try{he.p=32>l?32:l,X.T=null,l=Ng,Ng=null;var g=Hs,w=wl;if(En=0,Tl=Hs=null,wl=0,(nt&6)!==0)throw Error(i(331));var S=nt;if(nt|=4,Ww(g.current),Gw(g,g.current,w,l),nt=S,ac(0,!1),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(wt,g)}catch{}return!0}finally{he.p=d,X.T=c,c0(r,a)}}function f0(r,a,l){a=wi(l,a),a=lg(r.stateNode,a,2),r=Ps(r,a,2),r!==null&&(pi(r,2),gr(r))}function ht(r,a,l){if(r.tag===3)f0(r,r,l);else for(;a!==null;){if(a.tag===3){f0(a,r,l);break}else if(a.tag===1){var c=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(qs===null||!qs.has(c))){r=wi(l,r),l=gw(2),c=Ps(a,l,2),c!==null&&(_w(l,c,a,r),pi(c,2),gr(c));break}}a=a.return}}function Pg(r,a,l){var c=r.pingCache;if(c===null){c=r.pingCache=new zD;var d=new Set;c.set(a,d)}else d=c.get(a),d===void 0&&(d=new Set,c.set(a,d));d.has(l)||(Sg=!0,d.add(l),r=$D.bind(null,r,a,l),a.then(r,r))}function $D(r,a,l){var c=r.pingCache;c!==null&&c.delete(a),r.pingedLanes|=r.suspendedLanes&l,r.warmLanes&=~l,mt===r&&(Ye&l)===l&&(Ot===4||Ot===3&&(Ye&62914560)===Ye&&300>dn()-Rg?(nt&2)===0&&bl(r,0):Ag|=l,El===Ye&&(El=0)),gr(r)}function d0(r,a){a===0&&(a=Cs()),r=sl(r,a),r!==null&&(pi(r,a),gr(r))}function WD(r){var a=r.memoizedState,l=0;a!==null&&(l=a.retryLane),d0(r,l)}function KD(r,a){var l=0;switch(r.tag){case 13:var c=r.stateNode,d=r.memoizedState;d!==null&&(l=d.retryLane);break;case 19:c=r.stateNode;break;case 22:c=r.stateNode._retryCache;break;default:throw Error(i(314))}c!==null&&c.delete(a),d0(r,l)}function QD(r,a){return ki(r,a)}var jf=null,Al=null,Mg=!1,Ff=!1,Lg=!1,uo=0;function gr(r){r!==Al&&r.next===null&&(Al===null?jf=Al=r:Al=Al.next=r),Ff=!0,Mg||(Mg=!0,ZD())}function ac(r,a){if(!Lg&&Ff){Lg=!0;do for(var l=!1,c=jf;c!==null;){if(r!==0){var d=c.pendingLanes;if(d===0)var g=0;else{var w=c.suspendedLanes,S=c.pingedLanes;g=(1<<31-jt(42|r)+1)-1,g&=d&~(w&~S),g=g&201326741?g&201326741|1:g?g|2:0}g!==0&&(l=!0,_0(c,g))}else g=Ye,g=Mr(c,c===mt?g:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(g&3)===0||tr(c,g)||(l=!0,_0(c,g));c=c.next}while(l);Lg=!1}}function XD(){m0()}function m0(){Ff=Mg=!1;var r=0;uo!==0&&(aO()&&(r=uo),uo=0);for(var a=dn(),l=null,c=jf;c!==null;){var d=c.next,g=p0(c,a);g===0?(c.next=null,l===null?jf=d:l.next=d,d===null&&(Al=l)):(l=c,(r!==0||(g&3)!==0)&&(Ff=!0)),c=d}ac(r)}function p0(r,a){for(var l=r.suspendedLanes,c=r.pingedLanes,d=r.expirationTimes,g=r.pendingLanes&-62914561;0<g;){var w=31-jt(g),S=1<<w,D=d[w];D===-1?((S&l)===0||(S&c)!==0)&&(d[w]=Lr(S,a)):D<=a&&(r.expiredLanes|=S),g&=~S}if(a=mt,l=Ye,l=Mr(r,r===a?l:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),c=r.callbackNode,l===0||r===a&&(it===2||it===9)||r.cancelPendingCommit!==null)return c!==null&&c!==null&&ut(c),r.callbackNode=null,r.callbackPriority=0;if((l&3)===0||tr(r,l)){if(a=l&-l,a===r.callbackPriority)return a;switch(c!==null&&ut(c),mn(l)){case 2:case 8:l=As;break;case 32:l=xr;break;case 268435456:l=kr;break;default:l=xr}return c=g0.bind(null,r),l=ki(l,c),r.callbackPriority=a,r.callbackNode=l,a}return c!==null&&c!==null&&ut(c),r.callbackPriority=2,r.callbackNode=null,2}function g0(r,a){if(En!==0&&En!==5)return r.callbackNode=null,r.callbackPriority=0,null;var l=r.callbackNode;if(Uf()&&r.callbackNode!==l)return null;var c=Ye;return c=Mr(r,r===mt?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),c===0?null:(Zw(r,c,a),p0(r,dn()),r.callbackNode!=null&&r.callbackNode===l?g0.bind(null,r):null)}function _0(r,a){if(Uf())return null;Zw(r,a,!0)}function ZD(){lO(function(){(nt&6)!==0?ki(Ss,XD):m0()})}function Vg(){return uo===0&&(uo=Pa()),uo}function y0(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:$o(""+r)}function v0(r,a){var l=a.ownerDocument.createElement("input");return l.name=a.name,l.value=a.value,r.id&&l.setAttribute("form",r.id),a.parentNode.insertBefore(l,a),r=new FormData(r),l.parentNode.removeChild(l),r}function JD(r,a,l,c,d){if(a==="submit"&&l&&l.stateNode===d){var g=y0((d[bt]||null).action),w=c.submitter;w&&(a=(a=w[bt]||null)?y0(a.formAction):w.getAttribute("formAction"),a!==null&&(g=a,w=null));var S=new Wo("action","action",null,c,d);r.push({event:S,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(uo!==0){var D=w?v0(d,w):new FormData(d);ig(l,{pending:!0,data:D,method:d.method,action:g},null,D)}}else typeof g=="function"&&(S.preventDefault(),D=w?v0(d,w):new FormData(d),ig(l,{pending:!0,data:D,method:d.method,action:g},g,D))},currentTarget:d}]})}}for(var Ug=0;Ug<wp.length;Ug++){var jg=wp[Ug],eO=jg.toLowerCase(),tO=jg[0].toUpperCase()+jg.slice(1);Bi(eO,"on"+tO)}Bi(ZE,"onAnimationEnd"),Bi(JE,"onAnimationIteration"),Bi(eT,"onAnimationStart"),Bi("dblclick","onDoubleClick"),Bi("focusin","onFocus"),Bi("focusout","onBlur"),Bi(yD,"onTransitionRun"),Bi(vD,"onTransitionStart"),Bi(ED,"onTransitionCancel"),Bi(tT,"onTransitionEnd"),ji("onMouseEnter",["mouseout","mouseover"]),ji("onMouseLeave",["mouseout","mouseover"]),ji("onPointerEnter",["pointerout","pointerover"]),ji("onPointerLeave",["pointerout","pointerover"]),Mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Mn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nO=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(oc));function E0(r,a){a=(a&4)!==0;for(var l=0;l<r.length;l++){var c=r[l],d=c.event;c=c.listeners;e:{var g=void 0;if(a)for(var w=c.length-1;0<=w;w--){var S=c[w],D=S.instance,G=S.currentTarget;if(S=S.listener,D!==g&&d.isPropagationStopped())break e;g=S,d.currentTarget=G;try{g(d)}catch(Z){Rf(Z)}d.currentTarget=null,g=D}else for(w=0;w<c.length;w++){if(S=c[w],D=S.instance,G=S.currentTarget,S=S.listener,D!==g&&d.isPropagationStopped())break e;g=S,d.currentTarget=G;try{g(d)}catch(Z){Rf(Z)}d.currentTarget=null,g=D}}}}function je(r,a){var l=a[Vr];l===void 0&&(l=a[Vr]=new Set);var c=r+"__bubble";l.has(c)||(T0(a,r,2,!1),l.add(c))}function Fg(r,a,l){var c=0;a&&(c|=4),T0(l,r,c,a)}var Bf="_reactListening"+Math.random().toString(36).slice(2);function Bg(r){if(!r[Bf]){r[Bf]=!0,gn.forEach(function(l){l!=="selectionchange"&&(nO.has(l)||Fg(l,!1,r),Fg(l,!0,r))});var a=r.nodeType===9?r:r.ownerDocument;a===null||a[Bf]||(a[Bf]=!0,Fg("selectionchange",!1,a))}}function T0(r,a,l,c){switch(G0(a)){case 2:var d=NO;break;case 8:d=DO;break;default:d=t_}l=d.bind(null,a,l,r),d=void 0,!Ei||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(d=!0),c?d!==void 0?r.addEventListener(a,l,{capture:!0,passive:d}):r.addEventListener(a,l,!0):d!==void 0?r.addEventListener(a,l,{passive:d}):r.addEventListener(a,l,!1)}function zg(r,a,l,c,d){var g=c;if((a&1)===0&&(a&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var S=c.stateNode.containerInfo;if(S===d)break;if(w===4)for(w=c.return;w!==null;){var D=w.tag;if((D===3||D===4)&&w.stateNode.containerInfo===d)return;w=w.return}for(;S!==null;){if(w=Ui(S),w===null)return;if(D=w.tag,D===5||D===6||D===26||D===27){c=g=w;continue e}S=S.parentNode}}c=c.return}zh(function(){var G=g,Z=vi(l),ne=[];e:{var Y=nT.get(r);if(Y!==void 0){var $=Wo,Ae=r;switch(r){case"keypress":if(or(l)===0)break e;case"keydown":case"keyup":$=el;break;case"focusin":Ae="focus",$=Xo;break;case"focusout":Ae="blur",$=Xo;break;case"beforeblur":case"afterblur":$=Xo;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=Ti;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=mp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=Qh;break;case ZE:case JE:case eT:$=Zo;break;case tT:$=Zh;break;case"scroll":case"scrollend":$=qh;break;case"wheel":$=tl;break;case"copy":case"cut":case"paste":$=Jo;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=Ou;break;case"toggle":case"beforetoggle":$=ef}var Ee=(a&4)!==0,ot=!Ee&&(r==="scroll"||r==="scrollend"),F=Ee?Y!==null?Y+"Capture":null:Y;Ee=[];for(var V=G,q;V!==null;){var ee=V;if(q=ee.stateNode,ee=ee.tag,ee!==5&&ee!==26&&ee!==27||q===null||F===null||(ee=za(V,F),ee!=null&&Ee.push(lc(V,ee,q))),ot)break;V=V.return}0<Ee.length&&(Y=new $(Y,Ae,null,l,Z),ne.push({event:Y,listeners:Ee}))}}if((a&7)===0){e:{if(Y=r==="mouseover"||r==="pointerover",$=r==="mouseout"||r==="pointerout",Y&&l!==Fr&&(Ae=l.relatedTarget||l.fromElement)&&(Ui(Ae)||Ae[pn]))break e;if(($||Y)&&(Y=Z.window===Z?Z:(Y=Z.ownerDocument)?Y.defaultView||Y.parentWindow:window,$?(Ae=l.relatedTarget||l.toElement,$=G,Ae=Ae?Ui(Ae):null,Ae!==null&&(ot=o(Ae),Ee=Ae.tag,Ae!==ot||Ee!==5&&Ee!==27&&Ee!==6)&&(Ae=null)):($=null,Ae=G),$!==Ae)){if(Ee=Ti,ee="onMouseLeave",F="onMouseEnter",V="mouse",(r==="pointerout"||r==="pointerover")&&(Ee=Ou,ee="onPointerLeave",F="onPointerEnter",V="pointer"),ot=$==null?Y:Ce($),q=Ae==null?Y:Ce(Ae),Y=new Ee(ee,V+"leave",$,l,Z),Y.target=ot,Y.relatedTarget=q,ee=null,Ui(Z)===G&&(Ee=new Ee(F,V+"enter",Ae,l,Z),Ee.target=q,Ee.relatedTarget=ot,ee=Ee),ot=ee,$&&Ae)t:{for(Ee=$,F=Ae,V=0,q=Ee;q;q=Cl(q))V++;for(q=0,ee=F;ee;ee=Cl(ee))q++;for(;0<V-q;)Ee=Cl(Ee),V--;for(;0<q-V;)F=Cl(F),q--;for(;V--;){if(Ee===F||F!==null&&Ee===F.alternate)break t;Ee=Cl(Ee),F=Cl(F)}Ee=null}else Ee=null;$!==null&&w0(ne,Y,$,Ee,!1),Ae!==null&&ot!==null&&w0(ne,ot,Ae,Ee,!0)}}e:{if(Y=G?Ce(G):window,$=Y.nodeName&&Y.nodeName.toLowerCase(),$==="select"||$==="input"&&Y.type==="file")var de=BE;else if(Wt(Y))if(zE)de=pD;else{de=dD;var Le=fD}else $=Y.nodeName,!$||$.toLowerCase()!=="input"||Y.type!=="checkbox"&&Y.type!=="radio"?G&&Su(G.elementType)&&(de=BE):de=mD;if(de&&(de=de(r,G))){Gr(ne,de,l,Z);break e}Le&&Le(r,Y,G),r==="focusout"&&G&&Y.type==="number"&&G.memoizedProps.value!=null&&Ns(Y,"number",Y.value)}switch(Le=G?Ce(G):window,r){case"focusin":(Wt(Le)||Le.contentEditable==="true")&&(nl=Le,vp=G,Pu=null);break;case"focusout":Pu=vp=nl=null;break;case"mousedown":Ep=!0;break;case"contextmenu":case"mouseup":case"dragend":Ep=!1,QE(ne,l,Z);break;case"selectionchange":if(_D)break;case"keydown":case"keyup":QE(ne,l,Z)}var _e;if(cr)e:{switch(r){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else He?Q(r,l)&&(Te="onCompositionEnd"):r==="keydown"&&l.keyCode===229&&(Te="onCompositionStart");Te&&(E&&l.locale!=="ko"&&(He||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&He&&(_e=Cu()):(ar=Z,Ds="value"in ar?ar.value:ar.textContent,He=!0)),Le=zf(G,Te),0<Le.length&&(Te=new Nu(Te,r,null,l,Z),ne.push({event:Te,listeners:Le}),_e?Te.data=_e:(_e=le(l),_e!==null&&(Te.data=_e)))),(_e=y?$t(r,l):Ge(r,l))&&(Te=zf(G,"onBeforeInput"),0<Te.length&&(Le=new Nu("onBeforeInput","beforeinput",null,l,Z),ne.push({event:Le,listeners:Te}),Le.data=_e)),JD(ne,r,G,l,Z)}E0(ne,a)})}function lc(r,a,l){return{instance:r,listener:a,currentTarget:l}}function zf(r,a){for(var l=a+"Capture",c=[];r!==null;){var d=r,g=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||g===null||(d=za(r,l),d!=null&&c.unshift(lc(r,d,g)),d=za(r,a),d!=null&&c.push(lc(r,d,g))),r.tag===3)return c;r=r.return}return[]}function Cl(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function w0(r,a,l,c,d){for(var g=a._reactName,w=[];l!==null&&l!==c;){var S=l,D=S.alternate,G=S.stateNode;if(S=S.tag,D!==null&&D===c)break;S!==5&&S!==26&&S!==27||G===null||(D=G,d?(G=za(l,g),G!=null&&w.unshift(lc(l,G,D))):d||(G=za(l,g),G!=null&&w.push(lc(l,G,D)))),l=l.return}w.length!==0&&r.push({event:a,listeners:w})}var iO=/\r\n?/g,rO=/\u0000|\uFFFD/g;function b0(r){return(typeof r=="string"?r:""+r).replace(iO,`
`).replace(rO,"")}function S0(r,a){return a=b0(a),b0(r)===a}function qf(){}function at(r,a,l,c,d,g){switch(l){case"children":typeof c=="string"?a==="body"||a==="textarea"&&c===""||yi(r,c):(typeof c=="number"||typeof c=="bigint")&&a!=="body"&&yi(r,""+c);break;case"className":rr(r,"class",c);break;case"tabIndex":rr(r,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":rr(r,l,c);break;case"style":bu(r,c,g);break;case"data":if(a!=="object"){rr(r,"data",c);break}case"src":case"href":if(c===""&&(a!=="a"||l!=="href")){r.removeAttribute(l);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){r.removeAttribute(l);break}c=$o(""+c),r.setAttribute(l,c);break;case"action":case"formAction":if(typeof c=="function"){r.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(l==="formAction"?(a!=="input"&&at(r,a,"name",d.name,d,null),at(r,a,"formEncType",d.formEncType,d,null),at(r,a,"formMethod",d.formMethod,d,null),at(r,a,"formTarget",d.formTarget,d,null)):(at(r,a,"encType",d.encType,d,null),at(r,a,"method",d.method,d,null),at(r,a,"target",d.target,d,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){r.removeAttribute(l);break}c=$o(""+c),r.setAttribute(l,c);break;case"onClick":c!=null&&(r.onclick=qf);break;case"onScroll":c!=null&&je("scroll",r);break;case"onScrollEnd":c!=null&&je("scrollend",r);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(l=c.__html,l!=null){if(d.children!=null)throw Error(i(60));r.innerHTML=l}}break;case"multiple":r.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":r.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){r.removeAttribute("xlink:href");break}l=$o(""+c),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(l,""+c):r.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(l,""):r.removeAttribute(l);break;case"capture":case"download":c===!0?r.setAttribute(l,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(l,c):r.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?r.setAttribute(l,c):r.removeAttribute(l);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?r.removeAttribute(l):r.setAttribute(l,c);break;case"popover":je("beforetoggle",r),je("toggle",r),Is(r,"popover",c);break;case"xlinkActuate":_n(r,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":_n(r,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":_n(r,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":_n(r,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":_n(r,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":_n(r,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":_n(r,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":_n(r,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":_n(r,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Is(r,"is",c);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=fp.get(l)||l,Is(r,l,c))}}function qg(r,a,l,c,d,g){switch(l){case"style":bu(r,c,g);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(l=c.__html,l!=null){if(d.children!=null)throw Error(i(60));r.innerHTML=l}}break;case"children":typeof c=="string"?yi(r,c):(typeof c=="number"||typeof c=="bigint")&&yi(r,""+c);break;case"onScroll":c!=null&&je("scroll",r);break;case"onScrollEnd":c!=null&&je("scrollend",r);break;case"onClick":c!=null&&(r.onclick=qf);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!tn.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(d=l.endsWith("Capture"),a=l.slice(2,d?l.length-7:void 0),g=r[bt]||null,g=g!=null?g[l]:null,typeof g=="function"&&r.removeEventListener(a,g,d),typeof c=="function")){typeof g!="function"&&g!==null&&(l in r?r[l]=null:r.hasAttribute(l)&&r.removeAttribute(l)),r.addEventListener(a,c,d);break e}l in r?r[l]=c:c===!0?r.setAttribute(l,""):Is(r,l,c)}}}function Tn(r,a,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":je("error",r),je("load",r);var c=!1,d=!1,g;for(g in l)if(l.hasOwnProperty(g)){var w=l[g];if(w!=null)switch(g){case"src":c=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:at(r,a,g,w,l,null)}}d&&at(r,a,"srcSet",l.srcSet,l,null),c&&at(r,a,"src",l.src,l,null);return;case"input":je("invalid",r);var S=g=w=d=null,D=null,G=null;for(c in l)if(l.hasOwnProperty(c)){var Z=l[c];if(Z!=null)switch(c){case"name":d=Z;break;case"type":w=Z;break;case"checked":D=Z;break;case"defaultChecked":G=Z;break;case"value":g=Z;break;case"defaultValue":S=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(i(137,a));break;default:at(r,a,c,Z,l,null)}}ja(r,g,S,D,G,w,d,!1),Yo(r);return;case"select":je("invalid",r),c=w=g=null;for(d in l)if(l.hasOwnProperty(d)&&(S=l[d],S!=null))switch(d){case"value":g=S;break;case"defaultValue":w=S;break;case"multiple":c=S;default:at(r,a,d,S,l,null)}a=g,l=w,r.multiple=!!c,a!=null?jr(r,!!c,a,!1):l!=null&&jr(r,!!c,l,!0);return;case"textarea":je("invalid",r),g=d=c=null;for(w in l)if(l.hasOwnProperty(w)&&(S=l[w],S!=null))switch(w){case"value":c=S;break;case"defaultValue":d=S;break;case"children":g=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(i(91));break;default:at(r,a,w,S,l,null)}Fa(r,c,d,g),Yo(r);return;case"option":for(D in l)if(l.hasOwnProperty(D)&&(c=l[D],c!=null))switch(D){case"selected":r.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:at(r,a,D,c,l,null)}return;case"dialog":je("beforetoggle",r),je("toggle",r),je("cancel",r),je("close",r);break;case"iframe":case"object":je("load",r);break;case"video":case"audio":for(c=0;c<oc.length;c++)je(oc[c],r);break;case"image":je("error",r),je("load",r);break;case"details":je("toggle",r);break;case"embed":case"source":case"link":je("error",r),je("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(G in l)if(l.hasOwnProperty(G)&&(c=l[G],c!=null))switch(G){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:at(r,a,G,c,l,null)}return;default:if(Su(a)){for(Z in l)l.hasOwnProperty(Z)&&(c=l[Z],c!==void 0&&qg(r,a,Z,c,l,void 0));return}}for(S in l)l.hasOwnProperty(S)&&(c=l[S],c!=null&&at(r,a,S,c,l,null))}function sO(r,a,l,c){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,g=null,w=null,S=null,D=null,G=null,Z=null;for($ in l){var ne=l[$];if(l.hasOwnProperty($)&&ne!=null)switch($){case"checked":break;case"value":break;case"defaultValue":D=ne;default:c.hasOwnProperty($)||at(r,a,$,null,c,ne)}}for(var Y in c){var $=c[Y];if(ne=l[Y],c.hasOwnProperty(Y)&&($!=null||ne!=null))switch(Y){case"type":g=$;break;case"name":d=$;break;case"checked":G=$;break;case"defaultChecked":Z=$;break;case"value":w=$;break;case"defaultValue":S=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(i(137,a));break;default:$!==ne&&at(r,a,Y,$,c,ne)}}Zn(r,w,S,D,G,Z,g,d);return;case"select":$=w=S=Y=null;for(g in l)if(D=l[g],l.hasOwnProperty(g)&&D!=null)switch(g){case"value":break;case"multiple":$=D;default:c.hasOwnProperty(g)||at(r,a,g,null,c,D)}for(d in c)if(g=c[d],D=l[d],c.hasOwnProperty(d)&&(g!=null||D!=null))switch(d){case"value":Y=g;break;case"defaultValue":S=g;break;case"multiple":w=g;default:g!==D&&at(r,a,d,g,c,D)}a=S,l=w,c=$,Y!=null?jr(r,!!l,Y,!1):!!c!=!!l&&(a!=null?jr(r,!!l,a,!0):jr(r,!!l,l?[]:"",!1));return;case"textarea":$=Y=null;for(S in l)if(d=l[S],l.hasOwnProperty(S)&&d!=null&&!c.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:at(r,a,S,null,c,d)}for(w in c)if(d=c[w],g=l[w],c.hasOwnProperty(w)&&(d!=null||g!=null))switch(w){case"value":Y=d;break;case"defaultValue":$=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(i(91));break;default:d!==g&&at(r,a,w,d,c,g)}rt(r,Y,$);return;case"option":for(var Ae in l)if(Y=l[Ae],l.hasOwnProperty(Ae)&&Y!=null&&!c.hasOwnProperty(Ae))switch(Ae){case"selected":r.selected=!1;break;default:at(r,a,Ae,null,c,Y)}for(D in c)if(Y=c[D],$=l[D],c.hasOwnProperty(D)&&Y!==$&&(Y!=null||$!=null))switch(D){case"selected":r.selected=Y&&typeof Y!="function"&&typeof Y!="symbol";break;default:at(r,a,D,Y,c,$)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ee in l)Y=l[Ee],l.hasOwnProperty(Ee)&&Y!=null&&!c.hasOwnProperty(Ee)&&at(r,a,Ee,null,c,Y);for(G in c)if(Y=c[G],$=l[G],c.hasOwnProperty(G)&&Y!==$&&(Y!=null||$!=null))switch(G){case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(i(137,a));break;default:at(r,a,G,Y,c,$)}return;default:if(Su(a)){for(var ot in l)Y=l[ot],l.hasOwnProperty(ot)&&Y!==void 0&&!c.hasOwnProperty(ot)&&qg(r,a,ot,void 0,c,Y);for(Z in c)Y=c[Z],$=l[Z],!c.hasOwnProperty(Z)||Y===$||Y===void 0&&$===void 0||qg(r,a,Z,Y,c,$);return}}for(var F in l)Y=l[F],l.hasOwnProperty(F)&&Y!=null&&!c.hasOwnProperty(F)&&at(r,a,F,null,c,Y);for(ne in c)Y=c[ne],$=l[ne],!c.hasOwnProperty(ne)||Y===$||Y==null&&$==null||at(r,a,ne,Y,c,$)}var Hg=null,Gg=null;function Hf(r){return r.nodeType===9?r:r.ownerDocument}function A0(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function C0(r,a){if(r===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&a==="foreignObject"?0:r}function Yg(r,a){return r==="textarea"||r==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var $g=null;function aO(){var r=window.event;return r&&r.type==="popstate"?r===$g?!1:($g=r,!0):($g=null,!1)}var R0=typeof setTimeout=="function"?setTimeout:void 0,oO=typeof clearTimeout=="function"?clearTimeout:void 0,I0=typeof Promise=="function"?Promise:void 0,lO=typeof queueMicrotask=="function"?queueMicrotask:typeof I0<"u"?function(r){return I0.resolve(null).then(r).catch(uO)}:R0;function uO(r){setTimeout(function(){throw r})}function Ys(r){return r==="head"}function N0(r,a){var l=a,c=0,d=0;do{var g=l.nextSibling;if(r.removeChild(l),g&&g.nodeType===8)if(l=g.data,l==="/$"){if(0<c&&8>c){l=c;var w=r.ownerDocument;if(l&1&&uc(w.documentElement),l&2&&uc(w.body),l&4)for(l=w.head,uc(l),w=l.firstChild;w;){var S=w.nextSibling,D=w.nodeName;w[Li]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&w.rel.toLowerCase()==="stylesheet"||l.removeChild(w),w=S}}if(d===0){r.removeChild(g),_c(a);return}d--}else l==="$"||l==="$?"||l==="$!"?d++:c=l.charCodeAt(0)-48;else c=0;l=g}while(l);_c(a)}function Wg(r){var a=r.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var l=a;switch(a=a.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Wg(l),Vi(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}r.removeChild(l)}}function cO(r,a,l,c){for(;r.nodeType===1;){var d=l;if(r.nodeName.toLowerCase()!==a.toLowerCase()){if(!c&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(c){if(!r[Li])switch(a){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(g=r.getAttribute("rel"),g==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(g!==d.rel||r.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||r.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||r.getAttribute("title")!==(d.title==null?null:d.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(g=r.getAttribute("src"),(g!==(d.src==null?null:d.src)||r.getAttribute("type")!==(d.type==null?null:d.type)||r.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&g&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(a==="input"&&r.type==="hidden"){var g=d.name==null?null:""+d.name;if(d.type==="hidden"&&r.getAttribute("name")===g)return r}else return r;if(r=qi(r.nextSibling),r===null)break}return null}function hO(r,a,l){if(a==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!l||(r=qi(r.nextSibling),r===null))return null;return r}function Kg(r){return r.data==="$!"||r.data==="$?"&&r.ownerDocument.readyState==="complete"}function fO(r,a){var l=r.ownerDocument;if(r.data!=="$?"||l.readyState==="complete")a();else{var c=function(){a(),l.removeEventListener("DOMContentLoaded",c)};l.addEventListener("DOMContentLoaded",c),r._reactRetry=c}}function qi(r){for(;r!=null;r=r.nextSibling){var a=r.nodeType;if(a===1||a===3)break;if(a===8){if(a=r.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return r}var Qg=null;function D0(r){r=r.previousSibling;for(var a=0;r;){if(r.nodeType===8){var l=r.data;if(l==="$"||l==="$!"||l==="$?"){if(a===0)return r;a--}else l==="/$"&&a++}r=r.previousSibling}return null}function O0(r,a,l){switch(a=Hf(l),r){case"html":if(r=a.documentElement,!r)throw Error(i(452));return r;case"head":if(r=a.head,!r)throw Error(i(453));return r;case"body":if(r=a.body,!r)throw Error(i(454));return r;default:throw Error(i(451))}}function uc(r){for(var a=r.attributes;a.length;)r.removeAttributeNode(a[0]);Vi(r)}var Ii=new Map,x0=new Set;function Gf(r){return typeof r.getRootNode=="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}var rs=he.d;he.d={f:dO,r:mO,D:pO,C:gO,L:_O,m:yO,X:EO,S:vO,M:TO};function dO(){var r=rs.f(),a=Lf();return r||a}function mO(r){var a=_i(r);a!==null&&a.tag===5&&a.type==="form"?ZT(a):rs.r(r)}var Rl=typeof document>"u"?null:document;function k0(r,a,l){var c=Rl;if(c&&typeof a=="string"&&a){var d=Bt(a);d='link[rel="'+r+'"][href="'+d+'"]',typeof l=="string"&&(d+='[crossorigin="'+l+'"]'),x0.has(d)||(x0.add(d),r={rel:r,crossOrigin:l,href:a},c.querySelector(d)===null&&(a=c.createElement("link"),Tn(a,"link",r),De(a),c.head.appendChild(a)))}}function pO(r){rs.D(r),k0("dns-prefetch",r,null)}function gO(r,a){rs.C(r,a),k0("preconnect",r,a)}function _O(r,a,l){rs.L(r,a,l);var c=Rl;if(c&&r&&a){var d='link[rel="preload"][as="'+Bt(a)+'"]';a==="image"&&l&&l.imageSrcSet?(d+='[imagesrcset="'+Bt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(d+='[imagesizes="'+Bt(l.imageSizes)+'"]')):d+='[href="'+Bt(r)+'"]';var g=d;switch(a){case"style":g=Il(r);break;case"script":g=Nl(r)}Ii.has(g)||(r=_({rel:"preload",href:a==="image"&&l&&l.imageSrcSet?void 0:r,as:a},l),Ii.set(g,r),c.querySelector(d)!==null||a==="style"&&c.querySelector(cc(g))||a==="script"&&c.querySelector(hc(g))||(a=c.createElement("link"),Tn(a,"link",r),De(a),c.head.appendChild(a)))}}function yO(r,a){rs.m(r,a);var l=Rl;if(l&&r){var c=a&&typeof a.as=="string"?a.as:"script",d='link[rel="modulepreload"][as="'+Bt(c)+'"][href="'+Bt(r)+'"]',g=d;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=Nl(r)}if(!Ii.has(g)&&(r=_({rel:"modulepreload",href:r},a),Ii.set(g,r),l.querySelector(d)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(hc(g)))return}c=l.createElement("link"),Tn(c,"link",r),De(c),l.head.appendChild(c)}}}function vO(r,a,l){rs.S(r,a,l);var c=Rl;if(c&&r){var d=Me(c).hoistableStyles,g=Il(r);a=a||"default";var w=d.get(g);if(!w){var S={loading:0,preload:null};if(w=c.querySelector(cc(g)))S.loading=5;else{r=_({rel:"stylesheet",href:r,"data-precedence":a},l),(l=Ii.get(g))&&Xg(r,l);var D=w=c.createElement("link");De(D),Tn(D,"link",r),D._p=new Promise(function(G,Z){D.onload=G,D.onerror=Z}),D.addEventListener("load",function(){S.loading|=1}),D.addEventListener("error",function(){S.loading|=2}),S.loading|=4,Yf(w,a,c)}w={type:"stylesheet",instance:w,count:1,state:S},d.set(g,w)}}}function EO(r,a){rs.X(r,a);var l=Rl;if(l&&r){var c=Me(l).hoistableScripts,d=Nl(r),g=c.get(d);g||(g=l.querySelector(hc(d)),g||(r=_({src:r,async:!0},a),(a=Ii.get(d))&&Zg(r,a),g=l.createElement("script"),De(g),Tn(g,"link",r),l.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(d,g))}}function TO(r,a){rs.M(r,a);var l=Rl;if(l&&r){var c=Me(l).hoistableScripts,d=Nl(r),g=c.get(d);g||(g=l.querySelector(hc(d)),g||(r=_({src:r,async:!0,type:"module"},a),(a=Ii.get(d))&&Zg(r,a),g=l.createElement("script"),De(g),Tn(g,"link",r),l.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(d,g))}}function P0(r,a,l,c){var d=(d=ve.current)?Gf(d):null;if(!d)throw Error(i(446));switch(r){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(a=Il(l.href),l=Me(d).hoistableStyles,c=l.get(a),c||(c={type:"style",instance:null,count:0,state:null},l.set(a,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){r=Il(l.href);var g=Me(d).hoistableStyles,w=g.get(r);if(w||(d=d.ownerDocument||d,w={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(r,w),(g=d.querySelector(cc(r)))&&!g._p&&(w.instance=g,w.state.loading=5),Ii.has(r)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Ii.set(r,l),g||wO(d,r,l,w.state))),a&&c===null)throw Error(i(528,""));return w}if(a&&c!==null)throw Error(i(529,""));return null;case"script":return a=l.async,l=l.src,typeof l=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Nl(l),l=Me(d).hoistableScripts,c=l.get(a),c||(c={type:"script",instance:null,count:0,state:null},l.set(a,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,r))}}function Il(r){return'href="'+Bt(r)+'"'}function cc(r){return'link[rel="stylesheet"]['+r+"]"}function M0(r){return _({},r,{"data-precedence":r.precedence,precedence:null})}function wO(r,a,l,c){r.querySelector('link[rel="preload"][as="style"]['+a+"]")?c.loading=1:(a=r.createElement("link"),c.preload=a,a.addEventListener("load",function(){return c.loading|=1}),a.addEventListener("error",function(){return c.loading|=2}),Tn(a,"link",l),De(a),r.head.appendChild(a))}function Nl(r){return'[src="'+Bt(r)+'"]'}function hc(r){return"script[async]"+r}function L0(r,a,l){if(a.count++,a.instance===null)switch(a.type){case"style":var c=r.querySelector('style[data-href~="'+Bt(l.href)+'"]');if(c)return a.instance=c,De(c),c;var d=_({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return c=(r.ownerDocument||r).createElement("style"),De(c),Tn(c,"style",d),Yf(c,l.precedence,r),a.instance=c;case"stylesheet":d=Il(l.href);var g=r.querySelector(cc(d));if(g)return a.state.loading|=4,a.instance=g,De(g),g;c=M0(l),(d=Ii.get(d))&&Xg(c,d),g=(r.ownerDocument||r).createElement("link"),De(g);var w=g;return w._p=new Promise(function(S,D){w.onload=S,w.onerror=D}),Tn(g,"link",c),a.state.loading|=4,Yf(g,l.precedence,r),a.instance=g;case"script":return g=Nl(l.src),(d=r.querySelector(hc(g)))?(a.instance=d,De(d),d):(c=l,(d=Ii.get(g))&&(c=_({},l),Zg(c,d)),r=r.ownerDocument||r,d=r.createElement("script"),De(d),Tn(d,"link",c),r.head.appendChild(d),a.instance=d);case"void":return null;default:throw Error(i(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(c=a.instance,a.state.loading|=4,Yf(c,l.precedence,r));return a.instance}function Yf(r,a,l){for(var c=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=c.length?c[c.length-1]:null,g=d,w=0;w<c.length;w++){var S=c[w];if(S.dataset.precedence===a)g=S;else if(g!==d)break}g?g.parentNode.insertBefore(r,g.nextSibling):(a=l.nodeType===9?l.head:l,a.insertBefore(r,a.firstChild))}function Xg(r,a){r.crossOrigin==null&&(r.crossOrigin=a.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=a.referrerPolicy),r.title==null&&(r.title=a.title)}function Zg(r,a){r.crossOrigin==null&&(r.crossOrigin=a.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=a.referrerPolicy),r.integrity==null&&(r.integrity=a.integrity)}var $f=null;function V0(r,a,l){if($f===null){var c=new Map,d=$f=new Map;d.set(l,c)}else d=$f,c=d.get(l),c||(c=new Map,d.set(l,c));if(c.has(r))return c;for(c.set(r,null),l=l.getElementsByTagName(r),d=0;d<l.length;d++){var g=l[d];if(!(g[Li]||g[Nt]||r==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var w=g.getAttribute(a)||"";w=r+w;var S=c.get(w);S?S.push(g):c.set(w,[g])}}return c}function U0(r,a,l){r=r.ownerDocument||r,r.head.insertBefore(l,a==="title"?r.querySelector("head > title"):null)}function bO(r,a,l){if(l===1||a.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return r=a.disabled,typeof a.precedence=="string"&&r==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function j0(r){return!(r.type==="stylesheet"&&(r.state.loading&3)===0)}var fc=null;function SO(){}function AO(r,a,l){if(fc===null)throw Error(i(475));var c=fc;if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var d=Il(l.href),g=r.querySelector(cc(d));if(g){r=g._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(c.count++,c=Wf.bind(c),r.then(c,c)),a.state.loading|=4,a.instance=g,De(g);return}g=r.ownerDocument||r,l=M0(l),(d=Ii.get(d))&&Xg(l,d),g=g.createElement("link"),De(g);var w=g;w._p=new Promise(function(S,D){w.onload=S,w.onerror=D}),Tn(g,"link",l),a.instance=g}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(a,r),(r=a.state.preload)&&(a.state.loading&3)===0&&(c.count++,a=Wf.bind(c),r.addEventListener("load",a),r.addEventListener("error",a))}}function CO(){if(fc===null)throw Error(i(475));var r=fc;return r.stylesheets&&r.count===0&&Jg(r,r.stylesheets),0<r.count?function(a){var l=setTimeout(function(){if(r.stylesheets&&Jg(r,r.stylesheets),r.unsuspend){var c=r.unsuspend;r.unsuspend=null,c()}},6e4);return r.unsuspend=a,function(){r.unsuspend=null,clearTimeout(l)}}:null}function Wf(){if(this.count--,this.count===0){if(this.stylesheets)Jg(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var Kf=null;function Jg(r,a){r.stylesheets=null,r.unsuspend!==null&&(r.count++,Kf=new Map,a.forEach(RO,r),Kf=null,Wf.call(r))}function RO(r,a){if(!(a.state.loading&4)){var l=Kf.get(r);if(l)var c=l.get(null);else{l=new Map,Kf.set(r,l);for(var d=r.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<d.length;g++){var w=d[g];(w.nodeName==="LINK"||w.getAttribute("media")!=="not all")&&(l.set(w.dataset.precedence,w),c=w)}c&&l.set(null,c)}d=a.instance,w=d.getAttribute("data-precedence"),g=l.get(w)||c,g===c&&l.set(null,d),l.set(w,d),this.count++,c=Wf.bind(this),d.addEventListener("load",c),d.addEventListener("error",c),g?g.parentNode.insertBefore(d,g.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(d,r.firstChild)),a.state.loading|=4}}var dc={$$typeof:W,Provider:null,Consumer:null,_currentValue:pe,_currentValue2:pe,_threadCount:0};function IO(r,a,l,c,d,g,w,S){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Mi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mi(0),this.hiddenUpdates=Mi(null),this.identifierPrefix=c,this.onUncaughtError=d,this.onCaughtError=g,this.onRecoverableError=w,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function F0(r,a,l,c,d,g,w,S,D,G,Z,ne){return r=new IO(r,a,l,w,S,D,G,ne),a=1,g===!0&&(a|=24),g=ei(3,null,null,a),r.current=g,g.stateNode=r,a=Pp(),a.refCount++,r.pooledCache=a,a.refCount++,g.memoizedState={element:c,isDehydrated:l,cache:a},Up(g),r}function B0(r){return r?(r=al,r):al}function z0(r,a,l,c,d,g){d=B0(d),c.context===null?c.context=d:c.pendingContext=d,c=ks(a),c.payload={element:l},g=g===void 0?null:g,g!==null&&(c.callback=g),l=Ps(r,c,a),l!==null&&(si(l,r,a),qu(l,r,a))}function q0(r,a){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var l=r.retryLane;r.retryLane=l!==0&&l<a?l:a}}function e_(r,a){q0(r,a),(r=r.alternate)&&q0(r,a)}function H0(r){if(r.tag===13){var a=sl(r,67108864);a!==null&&si(a,r,67108864),e_(r,67108864)}}var Qf=!0;function NO(r,a,l,c){var d=X.T;X.T=null;var g=he.p;try{he.p=2,t_(r,a,l,c)}finally{he.p=g,X.T=d}}function DO(r,a,l,c){var d=X.T;X.T=null;var g=he.p;try{he.p=8,t_(r,a,l,c)}finally{he.p=g,X.T=d}}function t_(r,a,l,c){if(Qf){var d=n_(c);if(d===null)zg(r,a,c,Xf,l),Y0(r,c);else if(xO(d,r,a,l,c))c.stopPropagation();else if(Y0(r,c),a&4&&-1<OO.indexOf(r)){for(;d!==null;){var g=_i(d);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var w=Xn(g.pendingLanes);if(w!==0){var S=g;for(S.pendingLanes|=2,S.entangledLanes|=2;w;){var D=1<<31-jt(w);S.entanglements[1]|=D,w&=~D}gr(g),(nt&6)===0&&(Pf=dn()+500,ac(0))}}break;case 13:S=sl(g,2),S!==null&&si(S,g,2),Lf(),e_(g,2)}if(g=n_(c),g===null&&zg(r,a,c,Xf,l),g===d)break;d=g}d!==null&&c.stopPropagation()}else zg(r,a,c,null,l)}}function n_(r){return r=vi(r),i_(r)}var Xf=null;function i_(r){if(Xf=null,r=Ui(r),r!==null){var a=o(r);if(a===null)r=null;else{var l=a.tag;if(l===13){if(r=u(a),r!==null)return r;r=null}else if(l===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;r=null}else a!==r&&(r=null)}}return Xf=r,null}function G0(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Uo()){case Ss:return 2;case As:return 8;case xr:case vu:return 32;case kr:return 268435456;default:return 32}default:return 32}}var r_=!1,$s=null,Ws=null,Ks=null,mc=new Map,pc=new Map,Qs=[],OO="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Y0(r,a){switch(r){case"focusin":case"focusout":$s=null;break;case"dragenter":case"dragleave":Ws=null;break;case"mouseover":case"mouseout":Ks=null;break;case"pointerover":case"pointerout":mc.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":pc.delete(a.pointerId)}}function gc(r,a,l,c,d,g){return r===null||r.nativeEvent!==g?(r={blockedOn:a,domEventName:l,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},a!==null&&(a=_i(a),a!==null&&H0(a)),r):(r.eventSystemFlags|=c,a=r.targetContainers,d!==null&&a.indexOf(d)===-1&&a.push(d),r)}function xO(r,a,l,c,d){switch(a){case"focusin":return $s=gc($s,r,a,l,c,d),!0;case"dragenter":return Ws=gc(Ws,r,a,l,c,d),!0;case"mouseover":return Ks=gc(Ks,r,a,l,c,d),!0;case"pointerover":var g=d.pointerId;return mc.set(g,gc(mc.get(g)||null,r,a,l,c,d)),!0;case"gotpointercapture":return g=d.pointerId,pc.set(g,gc(pc.get(g)||null,r,a,l,c,d)),!0}return!1}function $0(r){var a=Ui(r.target);if(a!==null){var l=o(a);if(l!==null){if(a=l.tag,a===13){if(a=u(l),a!==null){r.blockedOn=a,Rs(r.priority,function(){if(l.tag===13){var c=ri();c=Ke(c);var d=sl(l,c);d!==null&&si(d,l,c),e_(l,c)}});return}}else if(a===3&&l.stateNode.current.memoizedState.isDehydrated){r.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Zf(r){if(r.blockedOn!==null)return!1;for(var a=r.targetContainers;0<a.length;){var l=n_(r.nativeEvent);if(l===null){l=r.nativeEvent;var c=new l.constructor(l.type,l);Fr=c,l.target.dispatchEvent(c),Fr=null}else return a=_i(l),a!==null&&H0(a),r.blockedOn=l,!1;a.shift()}return!0}function W0(r,a,l){Zf(r)&&l.delete(a)}function kO(){r_=!1,$s!==null&&Zf($s)&&($s=null),Ws!==null&&Zf(Ws)&&(Ws=null),Ks!==null&&Zf(Ks)&&(Ks=null),mc.forEach(W0),pc.forEach(W0)}function Jf(r,a){r.blockedOn===a&&(r.blockedOn=null,r_||(r_=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,kO)))}var ed=null;function K0(r){ed!==r&&(ed=r,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){ed===r&&(ed=null);for(var a=0;a<r.length;a+=3){var l=r[a],c=r[a+1],d=r[a+2];if(typeof c!="function"){if(i_(c||l)===null)continue;break}var g=_i(l);g!==null&&(r.splice(a,3),a-=3,ig(g,{pending:!0,data:d,method:l.method,action:c},c,d))}}))}function _c(r){function a(D){return Jf(D,r)}$s!==null&&Jf($s,r),Ws!==null&&Jf(Ws,r),Ks!==null&&Jf(Ks,r),mc.forEach(a),pc.forEach(a);for(var l=0;l<Qs.length;l++){var c=Qs[l];c.blockedOn===r&&(c.blockedOn=null)}for(;0<Qs.length&&(l=Qs[0],l.blockedOn===null);)$0(l),l.blockedOn===null&&Qs.shift();if(l=(r.ownerDocument||r).$$reactFormReplay,l!=null)for(c=0;c<l.length;c+=3){var d=l[c],g=l[c+1],w=d[bt]||null;if(typeof g=="function")w||K0(l);else if(w){var S=null;if(g&&g.hasAttribute("formAction")){if(d=g,w=g[bt]||null)S=w.formAction;else if(i_(d)!==null)continue}else S=w.action;typeof S=="function"?l[c+1]=S:(l.splice(c,3),c-=3),K0(l)}}}function s_(r){this._internalRoot=r}td.prototype.render=s_.prototype.render=function(r){var a=this._internalRoot;if(a===null)throw Error(i(409));var l=a.current,c=ri();z0(l,c,r,a,null,null)},td.prototype.unmount=s_.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var a=r.containerInfo;z0(r.current,2,null,r,null,null),Lf(),a[pn]=null}};function td(r){this._internalRoot=r}td.prototype.unstable_scheduleHydration=function(r){if(r){var a=ir();r={blockedOn:null,target:r,priority:a};for(var l=0;l<Qs.length&&a!==0&&a<Qs[l].priority;l++);Qs.splice(l,0,r),l===0&&$0(r)}};var Q0=e.version;if(Q0!=="19.1.0")throw Error(i(527,Q0,"19.1.0"));he.findDOMNode=function(r){var a=r._reactInternals;if(a===void 0)throw typeof r.render=="function"?Error(i(188)):(r=Object.keys(r).join(","),Error(i(268,r)));return r=m(a),r=r!==null?p(r):null,r=r===null?null:r.stateNode,r};var PO={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:X,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nd.isDisabled&&nd.supportsFiber)try{wt=nd.inject(PO),Ze=nd}catch{}}return vc.createRoot=function(r,a){if(!s(r))throw Error(i(299));var l=!1,c="",d=fw,g=dw,w=mw,S=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(S=a.unstable_transitionCallbacks)),a=F0(r,1,!1,null,null,l,c,d,g,w,S,null),r[pn]=a.current,Bg(r),new s_(a)},vc.hydrateRoot=function(r,a,l){if(!s(r))throw Error(i(299));var c=!1,d="",g=fw,w=dw,S=mw,D=null,G=null;return l!=null&&(l.unstable_strictMode===!0&&(c=!0),l.identifierPrefix!==void 0&&(d=l.identifierPrefix),l.onUncaughtError!==void 0&&(g=l.onUncaughtError),l.onCaughtError!==void 0&&(w=l.onCaughtError),l.onRecoverableError!==void 0&&(S=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(D=l.unstable_transitionCallbacks),l.formState!==void 0&&(G=l.formState)),a=F0(r,1,!0,a,l??null,c,d,g,w,S,D,G),a.context=B0(null),l=a.current,c=ri(),c=Ke(c),d=ks(c),d.callback=null,Ps(l,d,c),l=c,a.current.lanes=l,pi(a,l),gr(a),r[pn]=a.current,Bg(r),new td(a)},vc.version="19.1.0",vc}var ab;function GO(){if(ab)return l_.exports;ab=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),l_.exports=HO(),l_.exports}var YO=GO();const $O=WA(YO);/**
 * react-router v7.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var ob="popstate";function WO(n={}){function e(i,s){let{pathname:o,search:u,hash:h}=i.location;return B_("",{pathname:o,search:u,hash:h},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function t(i,s){return typeof s=="string"?s:Yc(s)}return QO(e,t,null,n)}function At(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Xi(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function KO(){return Math.random().toString(36).substring(2,10)}function lb(n,e){return{usr:n.state,key:n.key,idx:e}}function B_(n,e,t=null,i){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?ru(e):e,state:t,key:e&&e.key||i||KO()}}function Yc({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function ru(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function QO(n,e,t,i={}){let{window:s=document.defaultView,v5Compat:o=!1}=i,u=s.history,h="POP",m=null,p=_();p==null&&(p=0,u.replaceState({...u.state,idx:p},""));function _(){return(u.state||{idx:null}).idx}function v(){h="POP";let L=_(),H=L==null?null:L-p;p=L,m&&m({action:h,location:P.location,delta:H})}function T(L,H){h="PUSH";let J=B_(P.location,L,H);p=_()+1;let W=lb(J,p),re=P.createHref(J);try{u.pushState(W,"",re)}catch(K){if(K instanceof DOMException&&K.name==="DataCloneError")throw K;s.location.assign(re)}o&&m&&m({action:h,location:P.location,delta:1})}function C(L,H){h="REPLACE";let J=B_(P.location,L,H);p=_();let W=lb(J,p),re=P.createHref(J);u.replaceState(W,"",re),o&&m&&m({action:h,location:P.location,delta:0})}function O(L){return XO(L)}let P={get action(){return h},get location(){return n(s,u)},listen(L){if(m)throw new Error("A history only accepts one active listener");return s.addEventListener(ob,v),m=L,()=>{s.removeEventListener(ob,v),m=null}},createHref(L){return e(s,L)},createURL:O,encodeLocation(L){let H=O(L);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:T,replace:C,go(L){return u.go(L)}};return P}function XO(n,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),At(t,"No window.location.(origin|href) available to create URL");let i=typeof n=="string"?n:Yc(n);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=t+i),new URL(i,t)}function KA(n,e,t="/"){return ZO(n,e,t,!1)}function ZO(n,e,t,i){let s=typeof e=="string"?ru(e):e,o=hs(s.pathname||"/",t);if(o==null)return null;let u=QA(n);JO(u);let h=null;for(let m=0;h==null&&m<u.length;++m){let p=cx(o);h=lx(u[m],p,i)}return h}function QA(n,e=[],t=[],i=""){let s=(o,u,h)=>{let m={relativePath:h===void 0?o.path||"":h,caseSensitive:o.caseSensitive===!0,childrenIndex:u,route:o};m.relativePath.startsWith("/")&&(At(m.relativePath.startsWith(i),`Absolute route path "${m.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(i.length));let p=ls([i,m.relativePath]),_=t.concat(m);o.children&&o.children.length>0&&(At(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),QA(o.children,e,_,p)),!(o.path==null&&!o.index)&&e.push({path:p,score:ax(p,o.index),routesMeta:_})};return n.forEach((o,u)=>{if(o.path===""||!o.path?.includes("?"))s(o,u);else for(let h of XA(o.path))s(o,u,h)}),e}function XA(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,s=t.endsWith("?"),o=t.replace(/\?$/,"");if(i.length===0)return s?[o,""]:[o];let u=XA(i.join("/")),h=[];return h.push(...u.map(m=>m===""?o:[o,m].join("/"))),s&&h.push(...u),h.map(m=>n.startsWith("/")&&m===""?"/":m)}function JO(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:ox(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var ex=/^:[\w-]+$/,tx=3,nx=2,ix=1,rx=10,sx=-2,ub=n=>n==="*";function ax(n,e){let t=n.split("/"),i=t.length;return t.some(ub)&&(i+=sx),e&&(i+=nx),t.filter(s=>!ub(s)).reduce((s,o)=>s+(ex.test(o)?tx:o===""?ix:rx),i)}function ox(n,e){return n.length===e.length&&n.slice(0,-1).every((i,s)=>i===e[s])?n[n.length-1]-e[e.length-1]:0}function lx(n,e,t=!1){let{routesMeta:i}=n,s={},o="/",u=[];for(let h=0;h<i.length;++h){let m=i[h],p=h===i.length-1,_=o==="/"?e:e.slice(o.length)||"/",v=xd({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},_),T=m.route;if(!v&&p&&t&&!i[i.length-1].route.index&&(v=xd({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},_)),!v)return null;Object.assign(s,v.params),u.push({params:s,pathname:ls([o,v.pathname]),pathnameBase:mx(ls([o,v.pathnameBase])),route:T}),v.pathnameBase!=="/"&&(o=ls([o,v.pathnameBase]))}return u}function xd(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=ux(n.path,n.caseSensitive,n.end),s=e.match(t);if(!s)return null;let o=s[0],u=o.replace(/(.)\/+$/,"$1"),h=s.slice(1);return{params:i.reduce((p,{paramName:_,isOptional:v},T)=>{if(_==="*"){let O=h[T]||"";u=o.slice(0,o.length-O.length).replace(/(.)\/+$/,"$1")}const C=h[T];return v&&!C?p[_]=void 0:p[_]=(C||"").replace(/%2F/g,"/"),p},{}),pathname:o,pathnameBase:u,pattern:n}}function ux(n,e=!1,t=!0){Xi(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],s="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,h,m)=>(i.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),s+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":n!==""&&n!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),i]}function cx(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Xi(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function hs(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function hx(n,e="/"){let{pathname:t,search:i="",hash:s=""}=typeof n=="string"?ru(n):n;return{pathname:t?t.startsWith("/")?t:fx(t,e):e,search:px(i),hash:gx(s)}}function fx(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function f_(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function dx(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Hy(n){let e=dx(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function Gy(n,e,t,i=!1){let s;typeof n=="string"?s=ru(n):(s={...n},At(!s.pathname||!s.pathname.includes("?"),f_("?","pathname","search",s)),At(!s.pathname||!s.pathname.includes("#"),f_("#","pathname","hash",s)),At(!s.search||!s.search.includes("#"),f_("#","search","hash",s)));let o=n===""||s.pathname==="",u=o?"/":s.pathname,h;if(u==null)h=t;else{let v=e.length-1;if(!i&&u.startsWith("..")){let T=u.split("/");for(;T[0]==="..";)T.shift(),v-=1;s.pathname=T.join("/")}h=v>=0?e[v]:"/"}let m=hx(s,h),p=u&&u!=="/"&&u.endsWith("/"),_=(o||u===".")&&t.endsWith("/");return!m.pathname.endsWith("/")&&(p||_)&&(m.pathname+="/"),m}var ls=n=>n.join("/").replace(/\/\/+/g,"/"),mx=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),px=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,gx=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function _x(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var ZA=["POST","PUT","PATCH","DELETE"];new Set(ZA);var yx=["GET",...ZA];new Set(yx);var su=z.createContext(null);su.displayName="DataRouter";var gm=z.createContext(null);gm.displayName="DataRouterState";z.createContext(!1);var JA=z.createContext({isTransitioning:!1});JA.displayName="ViewTransition";var vx=z.createContext(new Map);vx.displayName="Fetchers";var Ex=z.createContext(null);Ex.displayName="Await";var Ji=z.createContext(null);Ji.displayName="Navigation";var fh=z.createContext(null);fh.displayName="Location";var Dr=z.createContext({outlet:null,matches:[],isDataRoute:!1});Dr.displayName="Route";var Yy=z.createContext(null);Yy.displayName="RouteError";function Tx(n,{relative:e}={}){At(au(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=z.useContext(Ji),{hash:s,pathname:o,search:u}=dh(n,{relative:e}),h=o;return t!=="/"&&(h=o==="/"?t:ls([t,o])),i.createHref({pathname:h,search:u,hash:s})}function au(){return z.useContext(fh)!=null}function ba(){return At(au(),"useLocation() may be used only in the context of a <Router> component."),z.useContext(fh).location}var eC="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function tC(n){z.useContext(Ji).static||z.useLayoutEffect(n)}function _m(){let{isDataRoute:n}=z.useContext(Dr);return n?Px():wx()}function wx(){At(au(),"useNavigate() may be used only in the context of a <Router> component.");let n=z.useContext(su),{basename:e,navigator:t}=z.useContext(Ji),{matches:i}=z.useContext(Dr),{pathname:s}=ba(),o=JSON.stringify(Hy(i)),u=z.useRef(!1);return tC(()=>{u.current=!0}),z.useCallback((m,p={})=>{if(Xi(u.current,eC),!u.current)return;if(typeof m=="number"){t.go(m);return}let _=Gy(m,JSON.parse(o),s,p.relative==="path");n==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:ls([e,_.pathname])),(p.replace?t.replace:t.push)(_,p.state,p)},[e,t,o,s,n])}z.createContext(null);function dh(n,{relative:e}={}){let{matches:t}=z.useContext(Dr),{pathname:i}=ba(),s=JSON.stringify(Hy(t));return z.useMemo(()=>Gy(n,JSON.parse(s),i,e==="path"),[n,s,i,e])}function bx(n,e){return nC(n,e)}function nC(n,e,t,i){At(au(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=z.useContext(Ji),{matches:o}=z.useContext(Dr),u=o[o.length-1],h=u?u.params:{},m=u?u.pathname:"/",p=u?u.pathnameBase:"/",_=u&&u.route;{let H=_&&_.path||"";iC(m,!_||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let v=ba(),T;if(e){let H=typeof e=="string"?ru(e):e;At(p==="/"||H.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${H.pathname}" was given in the \`location\` prop.`),T=H}else T=v;let C=T.pathname||"/",O=C;if(p!=="/"){let H=p.replace(/^\//,"").split("/");O="/"+C.replace(/^\//,"").split("/").slice(H.length).join("/")}let P=KA(n,{pathname:O});Xi(_||P!=null,`No routes matched location "${T.pathname}${T.search}${T.hash}" `),Xi(P==null||P[P.length-1].route.element!==void 0||P[P.length-1].route.Component!==void 0||P[P.length-1].route.lazy!==void 0,`Matched leaf route at location "${T.pathname}${T.search}${T.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let L=Ix(P&&P.map(H=>Object.assign({},H,{params:Object.assign({},h,H.params),pathname:ls([p,s.encodeLocation?s.encodeLocation(H.pathname).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?p:ls([p,s.encodeLocation?s.encodeLocation(H.pathnameBase).pathname:H.pathnameBase])})),o,t,i);return e&&L?z.createElement(fh.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...T},navigationType:"POP"}},L):L}function Sx(){let n=kx(),e=_x(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:i},o={padding:"2px 4px",backgroundColor:i},u=null;return console.error("Error handled by React Router default ErrorBoundary:",n),u=z.createElement(z.Fragment,null,z.createElement("p",null,"💿 Hey developer 👋"),z.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",z.createElement("code",{style:o},"ErrorBoundary")," or"," ",z.createElement("code",{style:o},"errorElement")," prop on your route.")),z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},e),t?z.createElement("pre",{style:s},t):null,u)}var Ax=z.createElement(Sx,null),Cx=class extends z.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?z.createElement(Dr.Provider,{value:this.props.routeContext},z.createElement(Yy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Rx({routeContext:n,match:e,children:t}){let i=z.useContext(su);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),z.createElement(Dr.Provider,{value:n},t)}function Ix(n,e=[],t=null,i=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let s=n,o=t?.errors;if(o!=null){let m=s.findIndex(p=>p.route.id&&o?.[p.route.id]!==void 0);At(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),s=s.slice(0,Math.min(s.length,m+1))}let u=!1,h=-1;if(t)for(let m=0;m<s.length;m++){let p=s[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=m),p.route.id){let{loaderData:_,errors:v}=t,T=p.route.loader&&!_.hasOwnProperty(p.route.id)&&(!v||v[p.route.id]===void 0);if(p.route.lazy||T){u=!0,h>=0?s=s.slice(0,h+1):s=[s[0]];break}}}return s.reduceRight((m,p,_)=>{let v,T=!1,C=null,O=null;t&&(v=o&&p.route.id?o[p.route.id]:void 0,C=p.route.errorElement||Ax,u&&(h<0&&_===0?(iC("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),T=!0,O=null):h===_&&(T=!0,O=p.route.hydrateFallbackElement||null)));let P=e.concat(s.slice(0,_+1)),L=()=>{let H;return v?H=C:T?H=O:p.route.Component?H=z.createElement(p.route.Component,null):p.route.element?H=p.route.element:H=m,z.createElement(Rx,{match:p,routeContext:{outlet:m,matches:P,isDataRoute:t!=null},children:H})};return t&&(p.route.ErrorBoundary||p.route.errorElement||_===0)?z.createElement(Cx,{location:t.location,revalidation:t.revalidation,component:C,error:v,children:L(),routeContext:{outlet:null,matches:P,isDataRoute:!0}}):L()},null)}function $y(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Nx(n){let e=z.useContext(su);return At(e,$y(n)),e}function Dx(n){let e=z.useContext(gm);return At(e,$y(n)),e}function Ox(n){let e=z.useContext(Dr);return At(e,$y(n)),e}function Wy(n){let e=Ox(n),t=e.matches[e.matches.length-1];return At(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function xx(){return Wy("useRouteId")}function kx(){let n=z.useContext(Yy),e=Dx("useRouteError"),t=Wy("useRouteError");return n!==void 0?n:e.errors?.[t]}function Px(){let{router:n}=Nx("useNavigate"),e=Wy("useNavigate"),t=z.useRef(!1);return tC(()=>{t.current=!0}),z.useCallback(async(s,o={})=>{Xi(t.current,eC),t.current&&(typeof s=="number"?n.navigate(s):await n.navigate(s,{fromRouteId:e,...o}))},[n,e])}var cb={};function iC(n,e,t){!e&&!cb[n]&&(cb[n]=!0,Xi(!1,t))}z.memo(Mx);function Mx({routes:n,future:e,state:t}){return nC(n,void 0,t,e)}function Lx({to:n,replace:e,state:t,relative:i}){At(au(),"<Navigate> may be used only in the context of a <Router> component.");let{static:s}=z.useContext(Ji);Xi(!s,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:o}=z.useContext(Dr),{pathname:u}=ba(),h=_m(),m=Gy(n,Hy(o),u,i==="path"),p=JSON.stringify(m);return z.useEffect(()=>{h(JSON.parse(p),{replace:e,state:t,relative:i})},[h,p,i,e,t]),null}function Ni(n){At(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Vx({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:s,static:o=!1}){At(!au(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=n.replace(/^\/*/,"/"),h=z.useMemo(()=>({basename:u,navigator:s,static:o,future:{}}),[u,s,o]);typeof t=="string"&&(t=ru(t));let{pathname:m="/",search:p="",hash:_="",state:v=null,key:T="default"}=t,C=z.useMemo(()=>{let O=hs(m,u);return O==null?null:{location:{pathname:O,search:p,hash:_,state:v,key:T},navigationType:i}},[u,m,p,_,v,T,i]);return Xi(C!=null,`<Router basename="${u}"> is not able to match the URL "${m}${p}${_}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:z.createElement(Ji.Provider,{value:h},z.createElement(fh.Provider,{children:e,value:C}))}function Ux({children:n,location:e}){return bx(z_(n),e)}function z_(n,e=[]){let t=[];return z.Children.forEach(n,(i,s)=>{if(!z.isValidElement(i))return;let o=[...e,s];if(i.type===z.Fragment){t.push.apply(t,z_(i.props.children,o));return}At(i.type===Ni,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),At(!i.props.index||!i.props.children,"An index route cannot have child routes.");let u={id:i.props.id||o.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(u.children=z_(i.props.children,o)),t.push(u)}),t}var _d="get",yd="application/x-www-form-urlencoded";function ym(n){return n!=null&&typeof n.tagName=="string"}function jx(n){return ym(n)&&n.tagName.toLowerCase()==="button"}function Fx(n){return ym(n)&&n.tagName.toLowerCase()==="form"}function Bx(n){return ym(n)&&n.tagName.toLowerCase()==="input"}function zx(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function qx(n,e){return n.button===0&&(!e||e==="_self")&&!zx(n)}var id=null;function Hx(){if(id===null)try{new FormData(document.createElement("form"),0),id=!1}catch{id=!0}return id}var Gx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function d_(n){return n!=null&&!Gx.has(n)?(Xi(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${yd}"`),null):n}function Yx(n,e){let t,i,s,o,u;if(Fx(n)){let h=n.getAttribute("action");i=h?hs(h,e):null,t=n.getAttribute("method")||_d,s=d_(n.getAttribute("enctype"))||yd,o=new FormData(n)}else if(jx(n)||Bx(n)&&(n.type==="submit"||n.type==="image")){let h=n.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=n.getAttribute("formaction")||h.getAttribute("action");if(i=m?hs(m,e):null,t=n.getAttribute("formmethod")||h.getAttribute("method")||_d,s=d_(n.getAttribute("formenctype"))||d_(h.getAttribute("enctype"))||yd,o=new FormData(h,n),!Hx()){let{name:p,type:_,value:v}=n;if(_==="image"){let T=p?`${p}.`:"";o.append(`${T}x`,"0"),o.append(`${T}y`,"0")}else p&&o.append(p,v)}}else{if(ym(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=_d,i=null,s=yd,u=n}return o&&s==="text/plain"&&(u=o,o=void 0),{action:i,method:t.toLowerCase(),encType:s,formData:o,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ky(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function $x(n,e,t){let i=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return i.pathname==="/"?i.pathname=`_root.${t}`:e&&hs(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.${t}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${t}`,i}async function Wx(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Kx(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function Qx(n,e,t){let i=await Promise.all(n.map(async s=>{let o=e.routes[s.route.id];if(o){let u=await Wx(o,t);return u.links?u.links():[]}return[]}));return ek(i.flat(1).filter(Kx).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function hb(n,e,t,i,s,o){let u=(m,p)=>t[p]?m.route.id!==t[p].route.id:!0,h=(m,p)=>t[p].pathname!==m.pathname||t[p].route.path?.endsWith("*")&&t[p].params["*"]!==m.params["*"];return o==="assets"?e.filter((m,p)=>u(m,p)||h(m,p)):o==="data"?e.filter((m,p)=>{let _=i.routes[m.route.id];if(!_||!_.hasLoader)return!1;if(u(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:t[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function Xx(n,e,{includeHydrateFallback:t}={}){return Zx(n.map(i=>{let s=e.routes[i.route.id];if(!s)return[];let o=[s.module];return s.clientActionModule&&(o=o.concat(s.clientActionModule)),s.clientLoaderModule&&(o=o.concat(s.clientLoaderModule)),t&&s.hydrateFallbackModule&&(o=o.concat(s.hydrateFallbackModule)),s.imports&&(o=o.concat(s.imports)),o}).flat(1))}function Zx(n){return[...new Set(n)]}function Jx(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function ek(n,e){let t=new Set;return new Set(e),n.reduce((i,s)=>{let o=JSON.stringify(Jx(s));return t.has(o)||(t.add(o),i.push({key:o,link:s})),i},[])}function rC(){let n=z.useContext(su);return Ky(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function tk(){let n=z.useContext(gm);return Ky(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Qy=z.createContext(void 0);Qy.displayName="FrameworkContext";function sC(){let n=z.useContext(Qy);return Ky(n,"You must render this element inside a <HydratedRouter> element"),n}function nk(n,e){let t=z.useContext(Qy),[i,s]=z.useState(!1),[o,u]=z.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:_,onTouchStart:v}=e,T=z.useRef(null);z.useEffect(()=>{if(n==="render"&&u(!0),n==="viewport"){let P=H=>{H.forEach(J=>{u(J.isIntersecting)})},L=new IntersectionObserver(P,{threshold:.5});return T.current&&L.observe(T.current),()=>{L.disconnect()}}},[n]),z.useEffect(()=>{if(i){let P=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(P)}}},[i]);let C=()=>{s(!0)},O=()=>{s(!1),u(!1)};return t?n!=="intent"?[o,T,{}]:[o,T,{onFocus:Ec(h,C),onBlur:Ec(m,O),onMouseEnter:Ec(p,C),onMouseLeave:Ec(_,O),onTouchStart:Ec(v,C)}]:[!1,T,{}]}function Ec(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function ik({page:n,...e}){let{router:t}=rC(),i=z.useMemo(()=>KA(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?z.createElement(sk,{page:n,matches:i,...e}):null}function rk(n){let{manifest:e,routeModules:t}=sC(),[i,s]=z.useState([]);return z.useEffect(()=>{let o=!1;return Qx(n,e,t).then(u=>{o||s(u)}),()=>{o=!0}},[n,e,t]),i}function sk({page:n,matches:e,...t}){let i=ba(),{manifest:s,routeModules:o}=sC(),{basename:u}=rC(),{loaderData:h,matches:m}=tk(),p=z.useMemo(()=>hb(n,e,m,s,i,"data"),[n,e,m,s,i]),_=z.useMemo(()=>hb(n,e,m,s,i,"assets"),[n,e,m,s,i]),v=z.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let O=new Set,P=!1;if(e.forEach(H=>{let J=s.routes[H.route.id];!J||!J.hasLoader||(!p.some(W=>W.route.id===H.route.id)&&H.route.id in h&&o[H.route.id]?.shouldRevalidate||J.hasClientLoader?P=!0:O.add(H.route.id))}),O.size===0)return[];let L=$x(n,u,"data");return P&&O.size>0&&L.searchParams.set("_routes",e.filter(H=>O.has(H.route.id)).map(H=>H.route.id).join(",")),[L.pathname+L.search]},[u,h,i,s,p,e,n,o]),T=z.useMemo(()=>Xx(_,s),[_,s]),C=rk(_);return z.createElement(z.Fragment,null,v.map(O=>z.createElement("link",{key:O,rel:"prefetch",as:"fetch",href:O,...t})),T.map(O=>z.createElement("link",{key:O,rel:"modulepreload",href:O,...t})),C.map(({key:O,link:P})=>z.createElement("link",{key:O,...P})))}function ak(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var aC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{aC&&(window.__reactRouterVersion="7.7.0")}catch{}function ok({basename:n,children:e,window:t}){let i=z.useRef();i.current==null&&(i.current=WO({window:t,v5Compat:!0}));let s=i.current,[o,u]=z.useState({action:s.action,location:s.location}),h=z.useCallback(m=>{z.startTransition(()=>u(m))},[u]);return z.useLayoutEffect(()=>s.listen(h),[s,h]),z.createElement(Vx,{basename:n,children:e,location:o.location,navigationType:o.action,navigator:s})}var oC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hi=z.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:s,reloadDocument:o,replace:u,state:h,target:m,to:p,preventScrollReset:_,viewTransition:v,...T},C){let{basename:O}=z.useContext(Ji),P=typeof p=="string"&&oC.test(p),L,H=!1;if(typeof p=="string"&&P&&(L=p,aC))try{let I=new URL(window.location.href),M=p.startsWith("//")?new URL(I.protocol+p):new URL(p),U=hs(M.pathname,O);M.origin===I.origin&&U!=null?p=U+M.search+M.hash:H=!0}catch{Xi(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let J=Tx(p,{relative:s}),[W,re,K]=nk(i,T),ae=hk(p,{replace:u,state:h,target:m,preventScrollReset:_,relative:s,viewTransition:v});function N(I){e&&e(I),I.defaultPrevented||ae(I)}let R=z.createElement("a",{...T,...K,href:L||J,onClick:H||o?e:N,ref:ak(C,re),target:m,"data-discover":!P&&t==="render"?"true":void 0});return W&&!P?z.createElement(z.Fragment,null,R,z.createElement(ik,{page:J})):R});Hi.displayName="Link";var lk=z.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:s=!1,style:o,to:u,viewTransition:h,children:m,...p},_){let v=dh(u,{relative:p.relative}),T=ba(),C=z.useContext(gm),{navigator:O,basename:P}=z.useContext(Ji),L=C!=null&&gk(v)&&h===!0,H=O.encodeLocation?O.encodeLocation(v).pathname:v.pathname,J=T.pathname,W=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;t||(J=J.toLowerCase(),W=W?W.toLowerCase():null,H=H.toLowerCase()),W&&P&&(W=hs(W,P)||W);const re=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let K=J===H||!s&&J.startsWith(H)&&J.charAt(re)==="/",ae=W!=null&&(W===H||!s&&W.startsWith(H)&&W.charAt(H.length)==="/"),N={isActive:K,isPending:ae,isTransitioning:L},R=K?e:void 0,I;typeof i=="function"?I=i(N):I=[i,K?"active":null,ae?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let M=typeof o=="function"?o(N):o;return z.createElement(Hi,{...p,"aria-current":R,className:I,ref:_,style:M,to:u,viewTransition:h},typeof m=="function"?m(N):m)});lk.displayName="NavLink";var uk=z.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:s,state:o,method:u=_d,action:h,onSubmit:m,relative:p,preventScrollReset:_,viewTransition:v,...T},C)=>{let O=mk(),P=pk(h,{relative:p}),L=u.toLowerCase()==="get"?"get":"post",H=typeof h=="string"&&oC.test(h),J=W=>{if(m&&m(W),W.defaultPrevented)return;W.preventDefault();let re=W.nativeEvent.submitter,K=re?.getAttribute("formmethod")||u;O(re||W.currentTarget,{fetcherKey:e,method:K,navigate:t,replace:s,state:o,relative:p,preventScrollReset:_,viewTransition:v})};return z.createElement("form",{ref:C,method:L,action:P,onSubmit:i?m:J,...T,"data-discover":!H&&n==="render"?"true":void 0})});uk.displayName="Form";function ck(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function lC(n){let e=z.useContext(su);return At(e,ck(n)),e}function hk(n,{target:e,replace:t,state:i,preventScrollReset:s,relative:o,viewTransition:u}={}){let h=_m(),m=ba(),p=dh(n,{relative:o});return z.useCallback(_=>{if(qx(_,e)){_.preventDefault();let v=t!==void 0?t:Yc(m)===Yc(p);h(n,{replace:v,state:i,preventScrollReset:s,relative:o,viewTransition:u})}},[m,h,p,t,i,e,n,s,o,u])}var fk=0,dk=()=>`__${String(++fk)}__`;function mk(){let{router:n}=lC("useSubmit"),{basename:e}=z.useContext(Ji),t=xx();return z.useCallback(async(i,s={})=>{let{action:o,method:u,encType:h,formData:m,body:p}=Yx(i,e);if(s.navigate===!1){let _=s.fetcherKey||dk();await n.fetch(_,t,s.action||o,{preventScrollReset:s.preventScrollReset,formData:m,body:p,formMethod:s.method||u,formEncType:s.encType||h,flushSync:s.flushSync})}else await n.navigate(s.action||o,{preventScrollReset:s.preventScrollReset,formData:m,body:p,formMethod:s.method||u,formEncType:s.encType||h,replace:s.replace,state:s.state,fromRouteId:t,flushSync:s.flushSync,viewTransition:s.viewTransition})},[n,e,t])}function pk(n,{relative:e}={}){let{basename:t}=z.useContext(Ji),i=z.useContext(Dr);At(i,"useFormAction must be used inside a RouteContext");let[s]=i.matches.slice(-1),o={...dh(n||".",{relative:e})},u=ba();if(n==null){o.search=u.search;let h=new URLSearchParams(o.search),m=h.getAll("index");if(m.some(_=>_==="")){h.delete("index"),m.filter(v=>v).forEach(v=>h.append("index",v));let _=h.toString();o.search=_?`?${_}`:""}}return(!n||n===".")&&s.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(o.pathname=o.pathname==="/"?t:ls([t,o.pathname])),Yc(o)}function gk(n,e={}){let t=z.useContext(JA);At(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=lC("useViewTransitionState"),s=dh(n,{relative:e.relative});if(!t.isTransitioning)return!1;let o=hs(t.currentLocation.pathname,i)||t.currentLocation.pathname,u=hs(t.nextLocation.pathname,i)||t.nextLocation.pathname;return xd(s.pathname,u)!=null||xd(s.pathname,o)!=null}const _k=()=>{};var fb={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue=function(n,e){if(!n)throw ou(e)},ou=function(n){return new Error("Firebase Database ("+uC.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},yk=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[t++];e[i++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[t++],u=n[t++],h=n[t++],m=((s&7)<<18|(o&63)<<12|(u&63)<<6|h&63)-65536;e[i++]=String.fromCharCode(55296+(m>>10)),e[i++]=String.fromCharCode(56320+(m&1023))}else{const o=n[t++],u=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(o&63)<<6|u&63)}}return e.join("")},Xy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const o=n[s],u=s+1<n.length,h=u?n[s+1]:0,m=s+2<n.length,p=m?n[s+2]:0,_=o>>2,v=(o&3)<<4|h>>4;let T=(h&15)<<2|p>>6,C=p&63;m||(C=64,u||(T=64)),i.push(t[_],t[v],t[T],t[C])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(cC(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):yk(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const o=t[n.charAt(s++)],h=s<n.length?t[n.charAt(s)]:0;++s;const p=s<n.length?t[n.charAt(s)]:64;++s;const v=s<n.length?t[n.charAt(s)]:64;if(++s,o==null||h==null||p==null||v==null)throw new vk;const T=o<<2|h>>4;if(i.push(T),p!==64){const C=h<<4&240|p>>2;if(i.push(C),v!==64){const O=p<<6&192|v;i.push(O)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class vk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hC=function(n){const e=cC(n);return Xy.encodeByteArray(e,!0)},kd=function(n){return hC(n).replace(/\./g,"")},Pd=function(n){try{return Xy.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(n){return fC(void 0,n)}function fC(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Tk(t)||(n[t]=fC(n[t],e[t]));return n}function Tk(n){return n!=="__proto__"}/**
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
 */function wk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const bk=()=>wk().__FIREBASE_DEFAULTS__,Sk=()=>{if(typeof process>"u"||typeof fb>"u")return;const n=fb.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ak=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Pd(n[1]);return e&&JSON.parse(e)},vm=()=>{try{return _k()||bk()||Sk()||Ak()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},dC=n=>{var e,t;return(t=(e=vm())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Zy=n=>{const e=dC(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},mC=()=>{var n;return(n=vm())===null||n===void 0?void 0:n.config},pC=n=>{var e;return(e=vm())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Tm(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Jy(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[kd(JSON.stringify(t)),kd(JSON.stringify(u)),""].join(".")}const kc={};function Ck(){const n={prod:[],emulator:[]};for(const e of Object.keys(kc))kc[e]?n.emulator.push(e):n.prod.push(e);return n}function Rk(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let db=!1;function wm(n,e){if(typeof window>"u"||typeof document>"u"||!Or(window.location.host)||kc[n]===e||kc[n]||db)return;kc[n]=e;function t(T){return`__firebase__banner__${T}`}const i="__firebase__banner",o=Ck().prod.length>0;function u(){const T=document.getElementById(i);T&&T.remove()}function h(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function m(T,C){T.setAttribute("width","24"),T.setAttribute("id",C),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function p(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{db=!0,u()},T}function _(T,C){T.setAttribute("id",C),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function v(){const T=Rk(i),C=t("text"),O=document.getElementById(C)||document.createElement("span"),P=t("learnmore"),L=document.getElementById(P)||document.createElement("a"),H=t("preprendIcon"),J=document.getElementById(H)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const W=T.element;h(W),_(L,P);const re=p();m(J,H),W.append(J,O,L,re),document.body.appendChild(W)}o?(O.innerText="Preview backend disconnected.",J.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(J.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,O.innerText="Preview backend running in this workspace."),O.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",v):v()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ev(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kn())}function Ik(){var n;const e=(n=vm())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Nk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gC(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function _C(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dk(){const n=kn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ok(){return uC.NODE_ADMIN===!0}function xk(){return!Ik()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yC(){try{return typeof indexedDB=="object"}catch{return!1}}function vC(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}function kk(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk="FirebaseError";class xi extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Pk,Object.setPrototypeOf(this,xi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oo.prototype.create)}}class Oo{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,o=this.errors[e],u=o?Mk(o,i):"Error",h=`${this.serviceName}: ${u} (${s}).`;return new xi(s,h,i)}}function Mk(n,e){return n.replace(Lk,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Lk=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(n){return JSON.parse(n)}function Xt(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC=function(n){let e={},t={},i={},s="";try{const o=n.split(".");e=$c(Pd(o[0])||""),t=$c(Pd(o[1])||""),s=o[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},Vk=function(n){const e=EC(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Uk=function(n){const e=EC(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function $l(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function q_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Md(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function fs(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const o=n[s],u=e[s];if(mb(o)&&mb(u)){if(!fs(o,u))return!1}else if(o!==u)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function mb(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Cc(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,o]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(o)}}),e}function Rc(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let v=0;v<16;v++)i[v]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let v=0;v<16;v++)i[v]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let v=16;v<80;v++){const T=i[v-3]^i[v-8]^i[v-14]^i[v-16];i[v]=(T<<1|T>>>31)&4294967295}let s=this.chain_[0],o=this.chain_[1],u=this.chain_[2],h=this.chain_[3],m=this.chain_[4],p,_;for(let v=0;v<80;v++){v<40?v<20?(p=h^o&(u^h),_=1518500249):(p=o^u^h,_=1859775393):v<60?(p=o&u|h&(o|u),_=2400959708):(p=o^u^h,_=3395469782);const T=(s<<5|s>>>27)+p+m+_+i[v]&4294967295;m=h,h=u,u=(o<<30|o>>>2)&4294967295,o=s,s=T}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+h&4294967295,this.chain_[4]=this.chain_[4]+m&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const o=this.buf_;let u=this.inbuf_;for(;s<t;){if(u===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(o[u]=e.charCodeAt(s),++u,++s,u===this.blockSize){this.compress_(o),u=0;break}}else for(;s<t;)if(o[u]=e[s],++u,++s,u===this.blockSize){this.compress_(o),u=0;break}}this.inbuf_=u,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let o=24;o>=0;o-=8)e[i]=this.chain_[s]>>o&255,++i;return e}}function Fk(n,e){const t=new Bk(n,e);return t.subscribe.bind(t)}class Bk{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");zk(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=m_),s.error===void 0&&(s.error=m_),s.complete===void 0&&(s.complete=m_);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zk(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function m_(){}function tv(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const o=s-55296;i++,ue(i<n.length,"Surrogate pair missing trail surrogate.");const u=n.charCodeAt(i)-56320;s=65536+(o<<10)+u}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},bm=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const Hk=1e3,Gk=2,Yk=4*60*60*1e3,$k=.5;function pb(n,e=Hk,t=Gk){const i=e*Math.pow(t,n),s=Math.round($k*i*(Math.random()-.5)*2);return Math.min(Yk,i+s)}/**
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
 */function lt(n){return n&&n._delegate?n._delegate:n}class hi{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const co="[DEFAULT]";/**
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
 */class Wk{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Em;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e?.identifier),s=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Qk(e))try{this.getOrInitializeService({instanceIdentifier:co})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:s});i.resolve(o)}catch{}}}}clearInstance(e=co){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=co){return this.instances.has(e)}getOptions(e=co){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[o,u]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(o);i===h&&u.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),o=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Kk(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=co){return this.component?this.component.multipleInstances?e:co:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Kk(n){return n===co?void 0:n}function Qk(n){return n.instantiationMode==="EAGER"}/**
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
 */class Xk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Wk(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Fe||(Fe={}));const Zk={debug:Fe.DEBUG,verbose:Fe.VERBOSE,info:Fe.INFO,warn:Fe.WARN,error:Fe.ERROR,silent:Fe.SILENT},Jk=Fe.INFO,eP={[Fe.DEBUG]:"log",[Fe.VERBOSE]:"log",[Fe.INFO]:"info",[Fe.WARN]:"warn",[Fe.ERROR]:"error"},tP=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=eP[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mh{constructor(e){this.name=e,this._logLevel=Jk,this._logHandler=tP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Fe.DEBUG,...e),this._logHandler(this,Fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Fe.VERBOSE,...e),this._logHandler(this,Fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Fe.INFO,...e),this._logHandler(this,Fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Fe.WARN,...e),this._logHandler(this,Fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Fe.ERROR,...e),this._logHandler(this,Fe.ERROR,...e)}}const nP=(n,e)=>e.some(t=>n instanceof t);let gb,_b;function iP(){return gb||(gb=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rP(){return _b||(_b=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const TC=new WeakMap,H_=new WeakMap,wC=new WeakMap,p_=new WeakMap,nv=new WeakMap;function sP(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{t(aa(n.result)),s()},u=()=>{i(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&TC.set(t,n)}).catch(()=>{}),nv.set(e,n),e}function aP(n){if(H_.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{t(),s()},u=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});H_.set(n,e)}let G_={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return H_.get(n);if(e==="objectStoreNames")return n.objectStoreNames||wC.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return aa(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function oP(n){G_=n(G_)}function lP(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(g_(this),e,...t);return wC.set(i,e.sort?e.sort():[e]),aa(i)}:rP().includes(n)?function(...e){return n.apply(g_(this),e),aa(TC.get(this))}:function(...e){return aa(n.apply(g_(this),e))}}function uP(n){return typeof n=="function"?lP(n):(n instanceof IDBTransaction&&aP(n),nP(n,iP())?new Proxy(n,G_):n)}function aa(n){if(n instanceof IDBRequest)return sP(n);if(p_.has(n))return p_.get(n);const e=uP(n);return e!==n&&(p_.set(n,e),nv.set(e,n)),e}const g_=n=>nv.get(n);function bC(n,e,{blocked:t,upgrade:i,blocking:s,terminated:o}={}){const u=indexedDB.open(n,e),h=aa(u);return i&&u.addEventListener("upgradeneeded",m=>{i(aa(u.result),m.oldVersion,m.newVersion,aa(u.transaction),m)}),t&&u.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),h.then(m=>{o&&m.addEventListener("close",()=>o()),s&&m.addEventListener("versionchange",p=>s(p.oldVersion,p.newVersion,p))}).catch(()=>{}),h}const cP=["get","getKey","getAll","getAllKeys","count"],hP=["put","add","delete","clear"],__=new Map;function yb(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(__.get(e))return __.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=hP.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||cP.includes(t)))return;const o=async function(u,...h){const m=this.transaction(u,s?"readwrite":"readonly");let p=m.store;return i&&(p=p.index(h.shift())),(await Promise.all([p[t](...h),s&&m.done]))[0]};return __.set(e,o),o}oP(n=>({...n,get:(e,t,i)=>yb(e,t)||n.get(e,t,i),has:(e,t)=>!!yb(e,t)||n.has(e,t)}));/**
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
 */class fP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(dP(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function dP(n){const e=n.getComponent();return e?.type==="VERSION"}const Y_="@firebase/app",vb="0.13.2";/**
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
 */const ds=new mh("@firebase/app"),mP="@firebase/app-compat",pP="@firebase/analytics-compat",gP="@firebase/analytics",_P="@firebase/app-check-compat",yP="@firebase/app-check",vP="@firebase/auth",EP="@firebase/auth-compat",TP="@firebase/database",wP="@firebase/data-connect",bP="@firebase/database-compat",SP="@firebase/functions",AP="@firebase/functions-compat",CP="@firebase/installations",RP="@firebase/installations-compat",IP="@firebase/messaging",NP="@firebase/messaging-compat",DP="@firebase/performance",OP="@firebase/performance-compat",xP="@firebase/remote-config",kP="@firebase/remote-config-compat",PP="@firebase/storage",MP="@firebase/storage-compat",LP="@firebase/firestore",VP="@firebase/ai",UP="@firebase/firestore-compat",jP="firebase",FP="11.10.0";/**
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
 */const $_="[DEFAULT]",BP={[Y_]:"fire-core",[mP]:"fire-core-compat",[gP]:"fire-analytics",[pP]:"fire-analytics-compat",[yP]:"fire-app-check",[_P]:"fire-app-check-compat",[vP]:"fire-auth",[EP]:"fire-auth-compat",[TP]:"fire-rtdb",[wP]:"fire-data-connect",[bP]:"fire-rtdb-compat",[SP]:"fire-fn",[AP]:"fire-fn-compat",[CP]:"fire-iid",[RP]:"fire-iid-compat",[IP]:"fire-fcm",[NP]:"fire-fcm-compat",[DP]:"fire-perf",[OP]:"fire-perf-compat",[xP]:"fire-rc",[kP]:"fire-rc-compat",[PP]:"fire-gcs",[MP]:"fire-gcs-compat",[LP]:"fire-fst",[UP]:"fire-fst-compat",[VP]:"fire-vertex","fire-js":"fire-js",[jP]:"fire-js-all"};/**
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
 */const Ld=new Map,zP=new Map,W_=new Map;function Eb(n,e){try{n.container.addComponent(e)}catch(t){ds.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Oi(n){const e=n.name;if(W_.has(e))return ds.debug(`There were multiple attempts to register component ${e}.`),!1;W_.set(e,n);for(const t of Ld.values())Eb(t,n);for(const t of zP.values())Eb(t,n);return!0}function Es(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Gn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const qP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},oa=new Oo("app","Firebase",qP);/**
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
 */class HP{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new hi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw oa.create("app-deleted",{appName:this._name})}}/**
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
 */const Sa=FP;function SC(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:$_,automaticDataCollectionEnabled:!0},e),s=i.name;if(typeof s!="string"||!s)throw oa.create("bad-app-name",{appName:String(s)});if(t||(t=mC()),!t)throw oa.create("no-options");const o=Ld.get(s);if(o){if(fs(t,o.options)&&fs(i,o.config))return o;throw oa.create("duplicate-app",{appName:s})}const u=new Xk(s);for(const m of W_.values())u.addComponent(m);const h=new HP(t,i,u);return Ld.set(s,h),h}function ph(n=$_){const e=Ld.get(n);if(!e&&n===$_&&mC())return SC();if(!e)throw oa.create("no-app",{appName:n});return e}function xn(n,e,t){var i;let s=(i=BP[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ds.warn(h.join(" "));return}Oi(new hi(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const GP="firebase-heartbeat-database",YP=1,Wc="firebase-heartbeat-store";let y_=null;function AC(){return y_||(y_=bC(GP,YP,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Wc)}catch(t){console.warn(t)}}}}).catch(n=>{throw oa.create("idb-open",{originalErrorMessage:n.message})})),y_}async function $P(n){try{const t=(await AC()).transaction(Wc),i=await t.objectStore(Wc).get(CC(n));return await t.done,i}catch(e){if(e instanceof xi)ds.warn(e.message);else{const t=oa.create("idb-get",{originalErrorMessage:e?.message});ds.warn(t.message)}}}async function Tb(n,e){try{const i=(await AC()).transaction(Wc,"readwrite");await i.objectStore(Wc).put(e,CC(n)),await i.done}catch(t){if(t instanceof xi)ds.warn(t.message);else{const i=oa.create("idb-set",{originalErrorMessage:t?.message});ds.warn(i.message)}}}function CC(n){return`${n.name}!${n.options.appId}`}/**
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
 */const WP=1024,KP=30;class QP{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ZP(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=wb();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>KP){const u=JP(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){ds.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=wb(),{heartbeatsToSend:i,unsentEntries:s}=XP(this._heartbeatsCache.heartbeats),o=kd(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return ds.warn(t),""}}}function wb(){return new Date().toISOString().substring(0,10)}function XP(n,e=WP){const t=[];let i=n.slice();for(const s of n){const o=t.find(u=>u.agent===s.agent);if(o){if(o.dates.push(s.date),bb(t)>e){o.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),bb(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class ZP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yC()?vC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await $P(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Tb(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Tb(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function bb(n){return kd(JSON.stringify({version:2,heartbeats:n})).length}function JP(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function eM(n){Oi(new hi("platform-logger",e=>new fP(e),"PRIVATE")),Oi(new hi("heartbeat",e=>new QP(e),"PRIVATE")),xn(Y_,vb,n),xn(Y_,vb,"esm2017"),xn("fire-js","")}eM("");var tM="firebase",nM="11.10.0";/**
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
 */xn(tM,nM,"app");const RC="@firebase/installations",iv="0.6.18";/**
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
 */const IC=1e4,NC=`w:${iv}`,DC="FIS_v2",iM="https://firebaseinstallations.googleapis.com/v1",rM=60*60*1e3,sM="installations",aM="Installations";/**
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
 */const oM={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Eo=new Oo(sM,aM,oM);function OC(n){return n instanceof xi&&n.code.includes("request-failed")}/**
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
 */function xC({projectId:n}){return`${iM}/projects/${n}/installations`}function kC(n){return{token:n.token,requestStatus:2,expiresIn:uM(n.expiresIn),creationTime:Date.now()}}async function PC(n,e){const i=(await e.json()).error;return Eo.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function MC({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function lM(n,{refreshToken:e}){const t=MC(n);return t.append("Authorization",cM(e)),t}async function LC(n){const e=await n();return e.status>=500&&e.status<600?n():e}function uM(n){return Number(n.replace("s","000"))}function cM(n){return`${DC} ${n}`}/**
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
 */async function hM({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=xC(n),s=MC(n),o=e.getImmediate({optional:!0});if(o){const p=await o.getHeartbeatsHeader();p&&s.append("x-firebase-client",p)}const u={fid:t,authVersion:DC,appId:n.appId,sdkVersion:NC},h={method:"POST",headers:s,body:JSON.stringify(u)},m=await LC(()=>fetch(i,h));if(m.ok){const p=await m.json();return{fid:p.fid||t,registrationStatus:2,refreshToken:p.refreshToken,authToken:kC(p.authToken)}}else throw await PC("Create Installation",m)}/**
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
 */function VC(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function fM(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const dM=/^[cdef][\w-]{21}$/,K_="";function mM(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=pM(n);return dM.test(t)?t:K_}catch{return K_}}function pM(n){return fM(n).substr(0,22)}/**
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
 */function Sm(n){return`${n.appName}!${n.appId}`}/**
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
 */const UC=new Map;function jC(n,e){const t=Sm(n);FC(t,e),gM(t,e)}function FC(n,e){const t=UC.get(n);if(t)for(const i of t)i(e)}function gM(n,e){const t=_M();t&&t.postMessage({key:n,fid:e}),yM()}let fo=null;function _M(){return!fo&&"BroadcastChannel"in self&&(fo=new BroadcastChannel("[Firebase] FID Change"),fo.onmessage=n=>{FC(n.data.key,n.data.fid)}),fo}function yM(){UC.size===0&&fo&&(fo.close(),fo=null)}/**
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
 */const vM="firebase-installations-database",EM=1,To="firebase-installations-store";let v_=null;function rv(){return v_||(v_=bC(vM,EM,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(To)}}})),v_}async function Vd(n,e){const t=Sm(n),s=(await rv()).transaction(To,"readwrite"),o=s.objectStore(To),u=await o.get(t);return await o.put(e,t),await s.done,(!u||u.fid!==e.fid)&&jC(n,e.fid),e}async function BC(n){const e=Sm(n),i=(await rv()).transaction(To,"readwrite");await i.objectStore(To).delete(e),await i.done}async function Am(n,e){const t=Sm(n),s=(await rv()).transaction(To,"readwrite"),o=s.objectStore(To),u=await o.get(t),h=e(u);return h===void 0?await o.delete(t):await o.put(h,t),await s.done,h&&(!u||u.fid!==h.fid)&&jC(n,h.fid),h}/**
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
 */async function sv(n){let e;const t=await Am(n.appConfig,i=>{const s=TM(i),o=wM(n,s);return e=o.registrationPromise,o.installationEntry});return t.fid===K_?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function TM(n){const e=n||{fid:mM(),registrationStatus:0};return zC(e)}function wM(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Eo.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=bM(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:SM(n)}:{installationEntry:e}}async function bM(n,e){try{const t=await hM(n,e);return Vd(n.appConfig,t)}catch(t){throw OC(t)&&t.customData.serverCode===409?await BC(n.appConfig):await Vd(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function SM(n){let e=await Sb(n.appConfig);for(;e.registrationStatus===1;)await VC(100),e=await Sb(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await sv(n);return i||t}return e}function Sb(n){return Am(n,e=>{if(!e)throw Eo.create("installation-not-found");return zC(e)})}function zC(n){return AM(n)?{fid:n.fid,registrationStatus:0}:n}function AM(n){return n.registrationStatus===1&&n.registrationTime+IC<Date.now()}/**
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
 */async function CM({appConfig:n,heartbeatServiceProvider:e},t){const i=RM(n,t),s=lM(n,t),o=e.getImmediate({optional:!0});if(o){const p=await o.getHeartbeatsHeader();p&&s.append("x-firebase-client",p)}const u={installation:{sdkVersion:NC,appId:n.appId}},h={method:"POST",headers:s,body:JSON.stringify(u)},m=await LC(()=>fetch(i,h));if(m.ok){const p=await m.json();return kC(p)}else throw await PC("Generate Auth Token",m)}function RM(n,{fid:e}){return`${xC(n)}/${e}/authTokens:generate`}/**
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
 */async function av(n,e=!1){let t;const i=await Am(n.appConfig,o=>{if(!qC(o))throw Eo.create("not-registered");const u=o.authToken;if(!e&&DM(u))return o;if(u.requestStatus===1)return t=IM(n,e),o;{if(!navigator.onLine)throw Eo.create("app-offline");const h=xM(o);return t=NM(n,h),h}});return t?await t:i.authToken}async function IM(n,e){let t=await Ab(n.appConfig);for(;t.authToken.requestStatus===1;)await VC(100),t=await Ab(n.appConfig);const i=t.authToken;return i.requestStatus===0?av(n,e):i}function Ab(n){return Am(n,e=>{if(!qC(e))throw Eo.create("not-registered");const t=e.authToken;return kM(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function NM(n,e){try{const t=await CM(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await Vd(n.appConfig,i),t}catch(t){if(OC(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await BC(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Vd(n.appConfig,i)}throw t}}function qC(n){return n!==void 0&&n.registrationStatus===2}function DM(n){return n.requestStatus===2&&!OM(n)}function OM(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+rM}function xM(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function kM(n){return n.requestStatus===1&&n.requestTime+IC<Date.now()}/**
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
 */async function PM(n){const e=n,{installationEntry:t,registrationPromise:i}=await sv(e);return i?i.catch(console.error):av(e).catch(console.error),t.fid}/**
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
 */async function MM(n,e=!1){const t=n;return await LM(t),(await av(t,e)).token}async function LM(n){const{registrationPromise:e}=await sv(n);e&&await e}/**
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
 */function VM(n){if(!n||!n.options)throw E_("App Configuration");if(!n.name)throw E_("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw E_(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function E_(n){return Eo.create("missing-app-config-values",{valueName:n})}/**
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
 */const HC="installations",UM="installations-internal",jM=n=>{const e=n.getProvider("app").getImmediate(),t=VM(e),i=Es(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},FM=n=>{const e=n.getProvider("app").getImmediate(),t=Es(e,HC).getImmediate();return{getId:()=>PM(t),getToken:s=>MM(t,s)}};function BM(){Oi(new hi(HC,jM,"PUBLIC")),Oi(new hi(UM,FM,"PRIVATE"))}BM();xn(RC,iv);xn(RC,iv,"esm2017");/**
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
 */const Ud="analytics",zM="firebase_id",qM="origin",HM=60*1e3,GM="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ov="https://www.googletagmanager.com/gtag/js";/**
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
 */const $n=new mh("@firebase/analytics");/**
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
 */const YM={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ci=new Oo("analytics","Analytics",YM);/**
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
 */function $M(n){if(!n.startsWith(ov)){const e=ci.create("invalid-gtag-resource",{gtagURL:n});return $n.warn(e.message),""}return n}function GC(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function WM(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function KM(n,e){const t=WM("firebase-js-sdk-policy",{createScriptURL:$M}),i=document.createElement("script"),s=`${ov}?l=${n}&id=${e}`;i.src=t?t?.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function QM(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function XM(n,e,t,i,s,o){const u=i[s];try{if(u)await e[u];else{const m=(await GC(t)).find(p=>p.measurementId===s);m&&await e[m.appId]}}catch(h){$n.error(h)}n("config",s,o)}async function ZM(n,e,t,i,s){try{let o=[];if(s&&s.send_to){let u=s.send_to;Array.isArray(u)||(u=[u]);const h=await GC(t);for(const m of u){const p=h.find(v=>v.measurementId===m),_=p&&e[p.appId];if(_)o.push(_);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),n("event",i,s||{})}catch(o){$n.error(o)}}function JM(n,e,t,i){async function s(o,...u){try{if(o==="event"){const[h,m]=u;await ZM(n,e,t,h,m)}else if(o==="config"){const[h,m]=u;await XM(n,e,t,i,h,m)}else if(o==="consent"){const[h,m]=u;n("consent",h,m)}else if(o==="get"){const[h,m,p]=u;n("get",h,m,p)}else if(o==="set"){const[h]=u;n("set",h)}else n(o,...u)}catch(h){$n.error(h)}}return s}function e2(n,e,t,i,s){let o=function(...u){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=JM(o,n,e,t),{gtagCore:o,wrappedGtag:window[s]}}function t2(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(ov)&&t.src.includes(n))return t;return null}/**
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
 */const n2=30,i2=1e3;class r2{constructor(e={},t=i2){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const YC=new r2;function s2(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function a2(n){var e;const{appId:t,apiKey:i}=n,s={method:"GET",headers:s2(i)},o=GM.replace("{app-id}",t),u=await fetch(o,s);if(u.status!==200&&u.status!==304){let h="";try{const m=await u.json();!((e=m.error)===null||e===void 0)&&e.message&&(h=m.error.message)}catch{}throw ci.create("config-fetch-failed",{httpStatus:u.status,responseMessage:h})}return u.json()}async function o2(n,e=YC,t){const{appId:i,apiKey:s,measurementId:o}=n.options;if(!i)throw ci.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:i};throw ci.create("no-api-key")}const u=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},h=new c2;return setTimeout(async()=>{h.abort()},HM),$C({appId:i,apiKey:s,measurementId:o},u,h,e)}async function $C(n,{throttleEndTimeMillis:e,backoffCount:t},i,s=YC){var o;const{appId:u,measurementId:h}=n;try{await l2(i,e)}catch(m){if(h)return $n.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${m?.message}]`),{appId:u,measurementId:h};throw m}try{const m=await a2(n);return s.deleteThrottleMetadata(u),m}catch(m){const p=m;if(!u2(p)){if(s.deleteThrottleMetadata(u),h)return $n.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${p?.message}]`),{appId:u,measurementId:h};throw m}const _=Number((o=p?.customData)===null||o===void 0?void 0:o.httpStatus)===503?pb(t,s.intervalMillis,n2):pb(t,s.intervalMillis),v={throttleEndTimeMillis:Date.now()+_,backoffCount:t+1};return s.setThrottleMetadata(u,v),$n.debug(`Calling attemptFetch again in ${_} millis`),$C(n,v,i,s)}}function l2(n,e){return new Promise((t,i)=>{const s=Math.max(e-Date.now(),0),o=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(o),i(ci.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function u2(n){if(!(n instanceof xi)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class c2{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function h2(n,e,t,i,s){if(s&&s.global){n("event",t,i);return}else{const o=await e,u=Object.assign(Object.assign({},i),{send_to:o});n("event",t,u)}}/**
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
 */async function f2(){if(yC())try{await vC()}catch(n){return $n.warn(ci.create("indexeddb-unavailable",{errorInfo:n?.toString()}).message),!1}else return $n.warn(ci.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function d2(n,e,t,i,s,o,u){var h;const m=o2(n);m.then(C=>{t[C.measurementId]=C.appId,n.options.measurementId&&C.measurementId!==n.options.measurementId&&$n.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${C.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(C=>$n.error(C)),e.push(m);const p=f2().then(C=>{if(C)return i.getId()}),[_,v]=await Promise.all([m,p]);t2(o)||KM(o,_.measurementId),s("js",new Date);const T=(h=u?.config)!==null&&h!==void 0?h:{};return T[qM]="firebase",T.update=!0,v!=null&&(T[zM]=v),s("config",_.measurementId,T),_.measurementId}/**
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
 */class m2{constructor(e){this.app=e}_delete(){return delete Pc[this.app.options.appId],Promise.resolve()}}let Pc={},Cb=[];const Rb={};let T_="dataLayer",p2="gtag",Ib,WC,Nb=!1;function g2(){const n=[];if(gC()&&n.push("This is a browser extension environment."),kk()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,s)=>`(${s+1}) ${i}`).join(" "),t=ci.create("invalid-analytics-context",{errorInfo:e});$n.warn(t.message)}}function _2(n,e,t){g2();const i=n.options.appId;if(!i)throw ci.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)$n.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ci.create("no-api-key");if(Pc[i]!=null)throw ci.create("already-exists",{id:i});if(!Nb){QM(T_);const{wrappedGtag:o,gtagCore:u}=e2(Pc,Cb,Rb,T_,p2);WC=o,Ib=u,Nb=!0}return Pc[i]=d2(n,Cb,Rb,e,Ib,T_,t),new m2(n)}function y2(n=ph()){n=lt(n);const e=Es(n,Ud);return e.isInitialized()?e.getImmediate():v2(n)}function v2(n,e={}){const t=Es(n,Ud);if(t.isInitialized()){const s=t.getImmediate();if(fs(e,t.getOptions()))return s;throw ci.create("already-initialized")}return t.initialize({options:e})}function E2(n,e,t,i){n=lt(n),h2(WC,Pc[n.app.options.appId],e,t,i).catch(s=>$n.error(s))}const Db="@firebase/analytics",Ob="0.10.17";function T2(){Oi(new hi(Ud,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return _2(i,s,t)},"PUBLIC")),Oi(new hi("analytics-internal",n,"PRIVATE")),xn(Db,Ob),xn(Db,Ob,"esm2017");function n(e){try{const t=e.getProvider(Ud).getImmediate();return{logEvent:(i,s,o)=>E2(t,i,s,o)}}catch(t){throw ci.create("interop-component-reg-failed",{reason:t})}}}T2();var xb={};const kb="@firebase/database",Pb="1.0.20";/**
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
 */let KC="";function w2(n){KC=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Xt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:$c(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S2{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return vs(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new b2(e)}}catch{}return new S2},mo=QC("localStorage"),A2=QC("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=new mh("@firebase/database"),C2=function(){let n=1;return function(){return n++}}(),XC=function(n){const e=qk(n),t=new jk;t.update(e);const i=t.digest();return Xy.encodeByteArray(i)},gh=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=gh.apply(null,i):typeof i=="object"?e+=Xt(i):e+=i,e+=" "}return e};let Mc=null,Mb=!0;const R2=function(n,e){ue(!0,"Can't turn on custom loggers persistently."),jl.logLevel=Fe.VERBOSE,Mc=jl.log.bind(jl)},Dn=function(...n){if(Mb===!0&&(Mb=!1,Mc===null&&A2.get("logging_enabled")===!0&&R2()),Mc){const e=gh.apply(null,n);Mc(e)}},_h=function(n){return function(...e){Dn(n,...e)}},Q_=function(...n){const e="FIREBASE INTERNAL ERROR: "+gh(...n);jl.error(e)},ms=function(...n){const e=`FIREBASE FATAL ERROR: ${gh(...n)}`;throw jl.error(e),new Error(e)},Wn=function(...n){const e="FIREBASE WARNING: "+gh(...n);jl.warn(e)},I2=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Wn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ZC=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},N2=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Wl="[MIN_NAME]",wo="[MAX_NAME]",uu=function(n,e){if(n===e)return 0;if(n===Wl||e===wo)return-1;if(e===Wl||n===wo)return 1;{const t=Lb(n),i=Lb(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},D2=function(n,e){return n===e?0:n<e?-1:1},Tc=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Xt(e))},lv=function(n){if(typeof n!="object"||n===null)return Xt(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=Xt(e[i]),t+=":",t+=lv(n[e[i]]);return t+="}",t},JC=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function Kn(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const eR=function(n){ue(!ZC(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,o,u,h,m;n===0?(o=0,u=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(h=Math.min(Math.floor(Math.log(n)/Math.LN2),i),o=h+i,u=Math.round(n*Math.pow(2,t-h)-Math.pow(2,t))):(o=0,u=Math.round(n/Math.pow(2,1-i-t))));const p=[];for(m=t;m;m-=1)p.push(u%2?1:0),u=Math.floor(u/2);for(m=e;m;m-=1)p.push(o%2?1:0),o=Math.floor(o/2);p.push(s?1:0),p.reverse();const _=p.join("");let v="";for(m=0;m<64;m+=8){let T=parseInt(_.substr(m,8),2).toString(16);T.length===1&&(T="0"+T),v=v+T}return v.toLowerCase()},O2=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},x2=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function k2(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const P2=new RegExp("^-?(0*)\\d{1,10}$"),M2=-2147483648,L2=2147483647,Lb=function(n){if(P2.test(n)){const e=Number(n);if(e>=M2&&e<=L2)return e}return null},cu=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Wn("Exception was thrown by user callback.",t),e},Math.floor(0))}},V2=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Lc=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class U2{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Gn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Wn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Dn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Wn(e)}}class vd{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}vd.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv="5",tR="v",nR="s",iR="r",rR="f",sR=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,aR="ls",oR="p",X_="ac",lR="websocket",uR="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e,t,i,s,o=!1,u="",h=!1,m=!1,p=null){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=o,this.persistenceKey=u,this.includeNamespaceInQueryParams=h,this.isUsingEmulator=m,this.emulatorOptions=p,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=mo.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&mo.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function F2(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function hR(n,e,t){ue(typeof e=="string","typeof type must == string"),ue(typeof t=="object","typeof params must == object");let i;if(e===lR)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===uR)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);F2(n)&&(t.ns=n.namespace);const s=[];return Kn(t,(o,u)=>{s.push(o+"="+u)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(){this.counters_={}}incrementCounter(e,t=1){vs(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Ek(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_={},b_={};function cv(n){const e=n.toString();return w_[e]||(w_[e]=new B2),w_[e]}function z2(n,e){const t=n.toString();return b_[t]||(b_[t]=e()),b_[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&cu(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb="start",H2="close",G2="pLPCommand",Y2="pRTLPCB",fR="id",dR="pw",mR="ser",$2="cb",W2="seg",K2="ts",Q2="d",X2="dframe",pR=1870,gR=30,Z2=pR-gR,J2=25e3,eL=3e4;class Ml{constructor(e,t,i,s,o,u,h){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=o,this.transportSessionId=u,this.lastSessionId=h,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=_h(e),this.stats_=cv(t),this.urlFn=m=>(this.appCheckToken&&(m[X_]=this.appCheckToken),hR(t,uR,m))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new q2(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(eL)),N2(()=>{if(this.isClosed_)return;this.scriptTagHolder=new hv((...o)=>{const[u,h,m,p,_]=o;if(this.incrementIncomingBytes_(o),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===Vb)this.id=h,this.password=m;else if(u===H2)h?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(h,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...o)=>{const[u,h]=o;this.incrementIncomingBytes_(o),this.myPacketOrderer.handleResponse(u,h)},()=>{this.onClosed_()},this.urlFn);const i={};i[Vb]="t",i[mR]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[$2]=this.scriptTagHolder.uniqueCallbackIdentifier),i[tR]=uv,this.transportSessionId&&(i[nR]=this.transportSessionId),this.lastSessionId&&(i[aR]=this.lastSessionId),this.applicationId&&(i[oR]=this.applicationId),this.appCheckToken&&(i[X_]=this.appCheckToken),typeof location<"u"&&location.hostname&&sR.test(location.hostname)&&(i[iR]=rR);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ml.forceAllow_=!0}static forceDisallow(){Ml.forceDisallow_=!0}static isAvailable(){return Ml.forceAllow_?!0:!Ml.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!O2()&&!x2()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Xt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=hC(t),s=JC(i,Z2);for(let o=0;o<s.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[o]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[X2]="t",i[fR]=e,i[dR]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Xt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class hv{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=C2(),window[G2+this.uniqueCallbackIdentifier]=e,window[Y2+this.uniqueCallbackIdentifier]=t,this.myIFrame=hv.createIFrame_();let o="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(o='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(h){Dn("frame writing exception"),h.stack&&Dn(h.stack),Dn(h)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Dn("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[fR]=this.myID,e[dR]=this.myPW,e[mR]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+gR+i.length<=pR;){const u=this.pendingSegs.shift();i=i+"&"+W2+s+"="+u.seg+"&"+K2+s+"="+u.ts+"&"+Q2+s+"="+u.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(J2)),o=()=>{clearTimeout(s),i()};this.addTag(e,o)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{Dn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tL=16384,nL=45e3;let jd=null;typeof MozWebSocket<"u"?jd=MozWebSocket:typeof WebSocket<"u"&&(jd=WebSocket);class Gi{constructor(e,t,i,s,o,u,h){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=_h(this.connId),this.stats_=cv(t),this.connURL=Gi.connectionURL_(t,u,h,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,o){const u={};return u[tR]=uv,typeof location<"u"&&location.hostname&&sR.test(location.hostname)&&(u[iR]=rR),t&&(u[nR]=t),i&&(u[aR]=i),s&&(u[X_]=s),o&&(u[oR]=o),hR(e,lR,u)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,mo.set("previous_websocket_failure",!0);try{let i;Ok(),this.mySock=new jd(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Gi.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&jd!==null&&!Gi.forceDisallow_}static previouslyFailed(){return mo.isInMemoryStorage||mo.get("previous_websocket_failure")===!0}markConnectionHealthy(){mo.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=$c(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ue(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=Xt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=JC(t,tL);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(nL))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Gi.responsesRequiredToBeHealthy=2;Gi.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{static get ALL_TRANSPORTS(){return[Ml,Gi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Gi&&Gi.isAvailable();let i=t&&!Gi.previouslyFailed();if(e.webSocketOnly&&(t||Wn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Gi];else{const s=this.transports_=[];for(const o of Kc.ALL_TRANSPORTS)o&&o.isAvailable()&&s.push(o);Kc.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Kc.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iL=6e4,rL=5e3,sL=10*1024,aL=100*1024,S_="t",Ub="d",oL="s",jb="r",lL="e",Fb="o",Bb="a",zb="n",qb="p",uL="h";class cL{constructor(e,t,i,s,o,u,h,m,p,_){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=o,this.onMessage_=u,this.onReady_=h,this.onDisconnect_=m,this.onKill_=p,this.lastSessionId=_,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=_h("c:"+this.id+":"),this.transportManager_=new Kc(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Lc(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>aL?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>sL?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(S_ in e){const t=e[S_];t===Bb?this.upgradeIfSecondaryHealthy_():t===jb?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Fb&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Tc("t",e),i=Tc("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:qb,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Bb,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:zb,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Tc("t",e),i=Tc("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Tc(S_,e);if(Ub in e){const i=e[Ub];if(t===uL){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===zb){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===oL?this.onConnectionShutdown_(i):t===jb?this.onReset_(i):t===lL?Q_("Server Error: "+i):t===Fb?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Q_("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),uv!==i&&Wn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Lc(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(iL))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Lc(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(rL))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:qb,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(mo.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e){this.allowedEvents_=e,this.listeners_={},ue(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let o=0;o<s.length;o++)if(s[o].callback===t&&(!i||i===s[o].context)){s.splice(o,1);return}}validateEventType_(e){ue(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd extends yR{static getInstance(){return new Fd}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ev()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return ue(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb=32,Gb=768;class ft{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Xe(){return new ft("")}function ze(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function da(n){return n.pieces_.length-n.pieceNum_}function pt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new ft(n.pieces_,e)}function vR(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function hL(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function ER(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function TR(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new ft(e,0)}function Zt(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof ft)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new ft(t,0)}function Be(n){return n.pieceNum_>=n.pieces_.length}function Fn(n,e){const t=ze(n),i=ze(e);if(t===null)return e;if(t===i)return Fn(pt(n),pt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function wR(n,e){if(da(n)!==da(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function Yi(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(da(n)>da(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class fL{constructor(e,t){this.errorPrefix_=t,this.parts_=ER(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=bm(this.parts_[i]);bR(this)}}function dL(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=bm(e),bR(n)}function mL(n){const e=n.parts_.pop();n.byteLength_-=bm(e),n.parts_.length>0&&(n.byteLength_-=1)}function bR(n){if(n.byteLength_>Gb)throw new Error(n.errorPrefix_+"has a key path longer than "+Gb+" bytes ("+n.byteLength_+").");if(n.parts_.length>Hb)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Hb+") or object contains a cycle "+ho(n))}function ho(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv extends yR{static getInstance(){return new fv}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return ue(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc=1e3,pL=60*5*1e3,Yb=30*1e3,gL=1.3,_L=3e4,yL="server_kill",$b=3;class us extends _R{constructor(e,t,i,s,o,u,h,m){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=o,this.authTokenProvider_=u,this.appCheckTokenProvider_=h,this.authOverride_=m,this.id=us.nextPersistentConnectionId_++,this.log_=_h("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=wc,this.maxReconnectDelay_=pL,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,m)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");fv.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Fd.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,o={r:s,a:e,b:t};this.log_(Xt(o)),ue(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(o),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new Em,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const h=u.d;u.s==="ok"?t.resolve(h):t.reject(h)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const o=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(o),t.promise}listen(e,t,i,s){this.initConnection_();const o=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+o),this.listens.has(u)||this.listens.set(u,new Map),ue(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ue(!this.listens.get(u).has(o),"listen() called twice for same path/queryId.");const h={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(u).set(o,h),this.connected_&&this.sendListen_(h)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const o={p:i},u="q";e.tag&&(o.q=t._queryObject,o.t=e.tag),o.h=e.hashFn(),this.sendRequest(u,o,h=>{const m=h.d,p=h.s;us.warnOnListenWarnings_(m,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",h),p!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(p,m))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&vs(e,"w")){const i=$l(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',o=t._path.toString();Wn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${o} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Uk(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Yb)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Vk(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const o=s.s,u=s.d||"error";this.authToken_===e&&(o==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(o,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),ue(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const o={p:e},u="n";s&&(o.q=i,o.t=s),this.sendRequest(u,o)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const o={p:t,d:i};this.log_("onDisconnect "+e,o),this.sendRequest(e,o,u=>{s&&setTimeout(()=>{s(u.s,u.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,o){this.initConnection_();const u={p:t,d:i};o!==void 0&&(u.h=o),this.outstandingPuts_.push({action:e,request:u,onComplete:s}),this.outstandingPutCount_++;const h=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(h):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,o=>{this.log_(t+" response",o),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(o.s,o.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const o=i.d;this.log_("reportStats","Error sending stats: "+o)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Xt(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Q_("Unrecognized action received from server: "+Xt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ue(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=wc,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=wc,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>_L&&(this.reconnectDelay_=wc),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*gL)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+us.nextConnectionId_++,o=this.lastSessionId;let u=!1,h=null;const m=function(){h?h.close():(u=!0,i())},p=function(v){ue(h,"sendRequest call when we're not connected not allowed."),h.sendRequest(v)};this.realtime_={close:m,sendRequest:p};const _=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[v,T]=await Promise.all([this.authTokenProvider_.getToken(_),this.appCheckTokenProvider_.getToken(_)]);u?Dn("getToken() completed but was canceled"):(Dn("getToken() completed. Creating connection."),this.authToken_=v&&v.accessToken,this.appCheckToken_=T&&T.token,h=new cL(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,C=>{Wn(C+" ("+this.repoInfo_.toString()+")"),this.interrupt(yL)},o))}catch(v){this.log_("Failed to get token: "+v),u||(this.repoInfo_.nodeAdmin&&Wn(v),m())}}}interrupt(e){Dn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Dn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],q_(this.interruptReasons_)&&(this.reconnectDelay_=wc,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(o=>lv(o)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new ft(e).toString();let s;if(this.listens.has(i)){const o=this.listens.get(i);s=o.get(t),o.delete(t),o.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){Dn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=$b&&(this.reconnectDelay_=Yb,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Dn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=$b&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+KC.replace(/\./g,"-")]=1,ev()?e["framework.cordova"]=1:_C()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Fd.getInstance().currentlyOnline();return q_(this.interruptReasons_)&&e}}us.nextPersistentConnectionId_=0;us.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ve(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new Ve(Wl,e),s=new Ve(Wl,t);return this.compare(i,s)!==0}minPost(){return Ve.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rd;class SR extends Cm{static get __EMPTY_NODE(){return rd}static set __EMPTY_NODE(e){rd=e}compare(e,t){return uu(e.name,t.name)}isDefinedOn(e){throw ou("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ve.MIN}maxPost(){return new Ve(wo,rd)}makePost(e,t){return ue(typeof e=="string","KeyIndex indexValue must always be a string."),new Ve(e,rd)}toString(){return".key"}}const Fl=new SR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sd=class{constructor(e,t,i,s,o=null){this.isReverse_=s,this.resultGenerator_=o,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=t?i(e.key,t):1,s&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},ai=class Ic{constructor(e,t,i,s,o){this.key=e,this.value=t,this.color=i??Ic.RED,this.left=s??vr.EMPTY_NODE,this.right=o??vr.EMPTY_NODE}copy(e,t,i,s,o){return new Ic(e??this.key,t??this.value,i??this.color,s??this.left,o??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const o=i(e,s.key);return o<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):o===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return vr.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return vr.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ic.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ic.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};ai.RED=!0;ai.BLACK=!1;class vL{copy(e,t,i,s,o){return this}insert(e,t,i){return new ai(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let vr=class Ed{constructor(e,t=Ed.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Ed(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ai.BLACK,null,null))}remove(e){return new Ed(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ai.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new sd(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new sd(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new sd(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new sd(this.root_,null,this.comparator_,!0,e)}};vr.EMPTY_NODE=new vL;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EL(n,e){return uu(n.name,e.name)}function dv(n,e){return uu(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Z_;function TL(n){Z_=n}const AR=function(n){return typeof n=="number"?"number:"+eR(n):"string:"+n},CR=function(n){if(n.isLeafNode()){const e=n.val();ue(typeof e=="string"||typeof e=="number"||typeof e=="object"&&vs(e,".sv"),"Priority must be a string or number.")}else ue(n===Z_||n.isEmpty(),"priority of unexpected type.");ue(n===Z_||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wb;class ln{static set __childrenNodeConstructor(e){Wb=e}static get __childrenNodeConstructor(){return Wb}constructor(e,t=ln.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ue(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),CR(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ln(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ln.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Be(e)?this:ze(e)===".priority"?this.priorityNode_:ln.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ln.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=ze(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(ue(i!==".priority"||da(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,ln.__childrenNodeConstructor.EMPTY_NODE.updateChild(pt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+AR(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=eR(this.value_):e+=this.value_,this.lazyHash_=XC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ln.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ln.__childrenNodeConstructor?-1:(ue(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=ln.VALUE_TYPE_ORDER.indexOf(t),o=ln.VALUE_TYPE_ORDER.indexOf(i);return ue(s>=0,"Unknown leaf type: "+t),ue(o>=0,"Unknown leaf type: "+i),s===o?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:o-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ln.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let RR,IR;function wL(n){RR=n}function bL(n){IR=n}class SL extends Cm{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),o=i.compareTo(s);return o===0?uu(e.name,t.name):o}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ve.MIN}maxPost(){return new Ve(wo,new ln("[PRIORITY-POST]",IR))}makePost(e,t){const i=RR(e);return new Ve(t,new ln("[PRIORITY-POST]",i))}toString(){return".priority"}}const xt=new SL;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AL=Math.log(2);class CL{constructor(e){const t=o=>parseInt(Math.log(o)/AL,10),i=o=>parseInt(Array(o+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Bd=function(n,e,t,i){n.sort(e);const s=function(m,p){const _=p-m;let v,T;if(_===0)return null;if(_===1)return v=n[m],T=t?t(v):v,new ai(T,v.node,ai.BLACK,null,null);{const C=parseInt(_/2,10)+m,O=s(m,C),P=s(C+1,p);return v=n[C],T=t?t(v):v,new ai(T,v.node,ai.BLACK,O,P)}},o=function(m){let p=null,_=null,v=n.length;const T=function(O,P){const L=v-O,H=v;v-=O;const J=s(L+1,H),W=n[L],re=t?t(W):W;C(new ai(re,W.node,P,null,J))},C=function(O){p?(p.left=O,p=O):(_=O,p=O)};for(let O=0;O<m.count;++O){const P=m.nextBitIsOne(),L=Math.pow(2,m.count-(O+1));P?T(L,ai.BLACK):(T(L,ai.BLACK),T(L,ai.RED))}return _},u=new CL(n.length),h=o(u);return new vr(i||e,h)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let A_;const Dl={};class ss{static get Default(){return ue(Dl&&xt,"ChildrenNode.ts has not been loaded"),A_=A_||new ss({".priority":Dl},{".priority":xt}),A_}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=$l(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof vr?t:null}hasIndex(e){return vs(this.indexSet_,e.toString())}addIndex(e,t){ue(e!==Fl,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const o=t.getIterator(Ve.Wrap);let u=o.getNext();for(;u;)s=s||e.isDefinedOn(u.node),i.push(u),u=o.getNext();let h;s?h=Bd(i,e.getCompare()):h=Dl;const m=e.toString(),p=Object.assign({},this.indexSet_);p[m]=e;const _=Object.assign({},this.indexes_);return _[m]=h,new ss(_,p)}addToIndexes(e,t){const i=Md(this.indexes_,(s,o)=>{const u=$l(this.indexSet_,o);if(ue(u,"Missing index implementation for "+o),s===Dl)if(u.isDefinedOn(e.node)){const h=[],m=t.getIterator(Ve.Wrap);let p=m.getNext();for(;p;)p.name!==e.name&&h.push(p),p=m.getNext();return h.push(e),Bd(h,u.getCompare())}else return Dl;else{const h=t.get(e.name);let m=s;return h&&(m=m.remove(new Ve(e.name,h))),m.insert(e,e.node)}});return new ss(i,this.indexSet_)}removeFromIndexes(e,t){const i=Md(this.indexes_,s=>{if(s===Dl)return s;{const o=t.get(e.name);return o?s.remove(new Ve(e.name,o)):s}});return new ss(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bc;class be{static get EMPTY_NODE(){return bc||(bc=new be(new vr(dv),null,ss.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&CR(this.priorityNode_),this.children_.isEmpty()&&ue(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||bc}updatePriority(e){return this.children_.isEmpty()?this:new be(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?bc:t}}getChild(e){const t=ze(e);return t===null?this:this.getImmediateChild(t).getChild(pt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ue(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new Ve(e,t);let s,o;t.isEmpty()?(s=this.children_.remove(e),o=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),o=this.indexMap_.addToIndexes(i,this.children_));const u=s.isEmpty()?bc:this.priorityNode_;return new be(s,u,o)}}updateChild(e,t){const i=ze(e);if(i===null)return t;{ue(ze(e)!==".priority"||da(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(pt(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,o=!0;if(this.forEachChild(xt,(u,h)=>{t[u]=h.val(e),i++,o&&be.INTEGER_REGEXP_.test(u)?s=Math.max(s,Number(u)):o=!1}),!e&&o&&s<2*i){const u=[];for(const h in t)u[h]=t[h];return u}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+AR(this.getPriority().val())+":"),this.forEachChild(xt,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":XC(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const o=s.getPredecessorKey(new Ve(e,t));return o?o.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ve(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ve(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Ve.Wrap);let o=s.peek();for(;o!=null&&t.compare(o,e)<0;)s.getNext(),o=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Ve.Wrap);let o=s.peek();for(;o!=null&&t.compare(o,e)>0;)s.getNext(),o=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===yh?-1:0}withIndex(e){if(e===Fl||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new be(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Fl||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(xt),s=t.getIterator(xt);let o=i.getNext(),u=s.getNext();for(;o&&u;){if(o.name!==u.name||!o.node.equals(u.node))return!1;o=i.getNext(),u=s.getNext()}return o===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===Fl?null:this.indexMap_.get(e.toString())}}be.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class RL extends be{constructor(){super(new vr(dv),be.EMPTY_NODE,ss.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return be.EMPTY_NODE}isEmpty(){return!1}}const yh=new RL;Object.defineProperties(Ve,{MIN:{value:new Ve(Wl,be.EMPTY_NODE)},MAX:{value:new Ve(wo,yh)}});SR.__EMPTY_NODE=be.EMPTY_NODE;ln.__childrenNodeConstructor=be;TL(yh);bL(yh);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IL=!0;function cn(n,e=null){if(n===null)return be.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),ue(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ln(t,cn(e))}if(!(n instanceof Array)&&IL){const t=[];let i=!1;if(Kn(n,(u,h)=>{if(u.substring(0,1)!=="."){const m=cn(h);m.isEmpty()||(i=i||!m.getPriority().isEmpty(),t.push(new Ve(u,m)))}}),t.length===0)return be.EMPTY_NODE;const o=Bd(t,EL,u=>u.name,dv);if(i){const u=Bd(t,xt.getCompare());return new be(o,cn(e),new ss({".priority":u},{".priority":xt}))}else return new be(o,cn(e),ss.Default)}else{let t=be.EMPTY_NODE;return Kn(n,(i,s)=>{if(vs(n,i)&&i.substring(0,1)!=="."){const o=cn(s);(o.isLeafNode()||!o.isEmpty())&&(t=t.updateImmediateChild(i,o))}}),t.updatePriority(cn(e))}}wL(cn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NL extends Cm{constructor(e){super(),this.indexPath_=e,ue(!Be(e)&&ze(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),o=i.compareTo(s);return o===0?uu(e.name,t.name):o}makePost(e,t){const i=cn(e),s=be.EMPTY_NODE.updateChild(this.indexPath_,i);return new Ve(t,s)}maxPost(){const e=be.EMPTY_NODE.updateChild(this.indexPath_,yh);return new Ve(wo,e)}toString(){return ER(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DL extends Cm{compare(e,t){const i=e.node.compareTo(t.node);return i===0?uu(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ve.MIN}maxPost(){return Ve.MAX}makePost(e,t){const i=cn(e);return new Ve(t,i)}toString(){return".value"}}const OL=new DL;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NR(n){return{type:"value",snapshotNode:n}}function Kl(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Qc(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Xc(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function xL(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(e){this.index_=e}updateChild(e,t,i,s,o,u){ue(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const h=e.getImmediateChild(t);return h.getChild(s).equals(i.getChild(s))&&h.isEmpty()===i.isEmpty()||(u!=null&&(i.isEmpty()?e.hasChild(t)?u.trackChildChange(Qc(t,h)):ue(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):h.isEmpty()?u.trackChildChange(Kl(t,i)):u.trackChildChange(Xc(t,i,h))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(xt,(s,o)=>{t.hasChild(s)||i.trackChildChange(Qc(s,o))}),t.isLeafNode()||t.forEachChild(xt,(s,o)=>{if(e.hasChild(s)){const u=e.getImmediateChild(s);u.equals(o)||i.trackChildChange(Xc(s,o,u))}else i.trackChildChange(Kl(s,o))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?be.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e){this.indexedFilter_=new mv(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Zc.getStartPost_(e),this.endPost_=Zc.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,o,u){return this.matches(new Ve(t,i))||(i=be.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,o,u)}updateFullNode(e,t,i){t.isLeafNode()&&(t=be.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(be.EMPTY_NODE);const o=this;return t.forEachChild(xt,(u,h)=>{o.matches(new Ve(u,h))||(s=s.updateImmediateChild(u,be.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kL{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Zc(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,o,u){return this.rangedFilter_.matches(new Ve(t,i))||(i=be.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,o,u):this.fullLimitUpdateChild_(e,t,i,o,u)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=be.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=be.EMPTY_NODE.withIndex(this.index_);let o;this.reverse_?o=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):o=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;o.hasNext()&&u<this.limit_;){const h=o.getNext();if(this.withinDirectionalStart(h))if(this.withinDirectionalEnd(h))s=s.updateImmediateChild(h.name,h.node),u++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(be.EMPTY_NODE);let o;this.reverse_?o=s.getReverseIterator(this.index_):o=s.getIterator(this.index_);let u=0;for(;o.hasNext();){const h=o.getNext();u<this.limit_&&this.withinDirectionalStart(h)&&this.withinDirectionalEnd(h)?u++:s=s.updateImmediateChild(h.name,be.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,o){let u;if(this.reverse_){const v=this.index_.getCompare();u=(T,C)=>v(C,T)}else u=this.index_.getCompare();const h=e;ue(h.numChildren()===this.limit_,"");const m=new Ve(t,i),p=this.reverse_?h.getFirstChild(this.index_):h.getLastChild(this.index_),_=this.rangedFilter_.matches(m);if(h.hasChild(t)){const v=h.getImmediateChild(t);let T=s.getChildAfterChild(this.index_,p,this.reverse_);for(;T!=null&&(T.name===t||h.hasChild(T.name));)T=s.getChildAfterChild(this.index_,T,this.reverse_);const C=T==null?1:u(T,m);if(_&&!i.isEmpty()&&C>=0)return o?.trackChildChange(Xc(t,i,v)),h.updateImmediateChild(t,i);{o?.trackChildChange(Qc(t,v));const P=h.updateImmediateChild(t,be.EMPTY_NODE);return T!=null&&this.rangedFilter_.matches(T)?(o?.trackChildChange(Kl(T.name,T.node)),P.updateImmediateChild(T.name,T.node)):P}}else return i.isEmpty()?e:_&&u(p,m)>=0?(o!=null&&(o.trackChildChange(Qc(p.name,p.node)),o.trackChildChange(Kl(t,i))),h.updateImmediateChild(t,i).updateImmediateChild(p.name,be.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=xt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ue(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ue(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Wl}hasEnd(){return this.endSet_}getIndexEndValue(){return ue(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ue(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:wo}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ue(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===xt}copy(){const e=new pv;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function PL(n){return n.loadsAllData()?new mv(n.getIndex()):n.hasLimit()?new kL(n):new Zc(n)}function Kb(n){const e={};if(n.isDefault())return e;let t;if(n.index_===xt?t="$priority":n.index_===OL?t="$value":n.index_===Fl?t="$key":(ue(n.index_ instanceof NL,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Xt(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=Xt(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+Xt(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=Xt(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+Xt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Qb(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==xt&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd extends _R{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ue(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=_h("p:rest:"),this.listens_={}}listen(e,t,i,s){const o=e._path.toString();this.log_("Listen called for "+o+" "+e._queryIdentifier);const u=zd.getListenId_(e,i),h={};this.listens_[u]=h;const m=Kb(e._queryParams);this.restRequest_(o+".json",m,(p,_)=>{let v=_;if(p===404&&(v=null,p=null),p===null&&this.onDataUpdate_(o,v,!1,i),$l(this.listens_,u)===h){let T;p?p===401?T="permission_denied":T="rest_error:"+p:T="ok",s(T,null)}})}unlisten(e,t){const i=zd.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Kb(e._queryParams),i=e._path.toString(),s=new Em;return this.restRequest_(i+".json",t,(o,u)=>{let h=u;o===404&&(h=null,o=null),o===null?(this.onDataUpdate_(i,h,!1,null),s.resolve(h)):s.reject(new Error(h))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,o])=>{s&&s.accessToken&&(t.auth=s.accessToken),o&&o.token&&(t.ac=o.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+lu(t);this.log_("Sending REST request for "+u);const h=new XMLHttpRequest;h.onreadystatechange=()=>{if(i&&h.readyState===4){this.log_("REST Response for "+u+" received. status:",h.status,"response:",h.responseText);let m=null;if(h.status>=200&&h.status<300){try{m=$c(h.responseText)}catch{Wn("Failed to parse JSON response for "+u+": "+h.responseText)}i(null,m)}else h.status!==401&&h.status!==404&&Wn("Got unsuccessful REST response for "+u+" Status: "+h.status),i(h.status);i=null}},h.open("GET",u,!0),h.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ML{constructor(){this.rootNode_=be.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(){return{value:null,children:new Map}}function DR(n,e,t){if(Be(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=ze(e);n.children.has(i)||n.children.set(i,qd());const s=n.children.get(i);e=pt(e),DR(s,e,t)}}function J_(n,e,t){n.value!==null?t(e,n.value):LL(n,(i,s)=>{const o=new ft(e.toString()+"/"+i);J_(s,o,t)})}function LL(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VL{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Kn(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb=10*1e3,UL=30*1e3,jL=5*60*1e3;class FL{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new VL(e);const i=Xb+(UL-Xb)*Math.random();Lc(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Kn(e,(s,o)=>{o>0&&vs(this.statsToReport_,s)&&(t[s]=o,i=!0)}),i&&this.server_.reportStats(t),Lc(this.reportStats_.bind(this),Math.floor(Math.random()*2*jL))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $i;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})($i||($i={}));function OR(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function gv(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function _v(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=$i.ACK_USER_WRITE,this.source=OR()}operationForChild(e){if(Be(this.path)){if(this.affectedTree.value!=null)return ue(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ft(e));return new Hd(Xe(),t,this.revert)}}else return ue(ze(this.path)===e,"operationForChild called for unrelated child."),new Hd(pt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,t){this.source=e,this.path=t,this.type=$i.LISTEN_COMPLETE}operationForChild(e){return Be(this.path)?new Jc(this.source,Xe()):new Jc(this.source,pt(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=$i.OVERWRITE}operationForChild(e){return Be(this.path)?new bo(this.source,Xe(),this.snap.getImmediateChild(e)):new bo(this.source,pt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=$i.MERGE}operationForChild(e){if(Be(this.path)){const t=this.children.subtree(new ft(e));return t.isEmpty()?null:t.value?new bo(this.source,Xe(),t.value):new eh(this.source,Xe(),t)}else return ue(ze(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new eh(this.source,pt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Be(e))return this.isFullyInitialized()&&!this.filtered_;const t=ze(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BL{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function zL(n,e,t,i){const s=[],o=[];return e.forEach(u=>{u.type==="child_changed"&&n.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&o.push(xL(u.childName,u.snapshotNode))}),Sc(n,s,"child_removed",e,i,t),Sc(n,s,"child_added",e,i,t),Sc(n,s,"child_moved",o,i,t),Sc(n,s,"child_changed",e,i,t),Sc(n,s,"value",e,i,t),s}function Sc(n,e,t,i,s,o){const u=i.filter(h=>h.type===t);u.sort((h,m)=>HL(n,h,m)),u.forEach(h=>{const m=qL(n,h,o);s.forEach(p=>{p.respondsTo(h.type)&&e.push(p.createEvent(m,n.query_))})})}function qL(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function HL(n,e,t){if(e.childName==null||t.childName==null)throw ou("Should only compare child_ events.");const i=new Ve(e.childName,e.snapshotNode),s=new Ve(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(n,e){return{eventCache:n,serverCache:e}}function Vc(n,e,t,i){return Rm(new ma(e,t,i),n.serverCache)}function xR(n,e,t,i){return Rm(n.eventCache,new ma(e,t,i))}function Gd(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function So(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let C_;const GL=()=>(C_||(C_=new vr(D2)),C_);class _t{static fromObject(e){let t=new _t(null);return Kn(e,(i,s)=>{t=t.set(new ft(i),s)}),t}constructor(e,t=GL()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Xe(),value:this.value};if(Be(e))return null;{const i=ze(e),s=this.children.get(i);if(s!==null){const o=s.findRootMostMatchingPathAndValue(pt(e),t);return o!=null?{path:Zt(new ft(i),o.path),value:o.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Be(e))return this;{const t=ze(e),i=this.children.get(t);return i!==null?i.subtree(pt(e)):new _t(null)}}set(e,t){if(Be(e))return new _t(t,this.children);{const i=ze(e),o=(this.children.get(i)||new _t(null)).set(pt(e),t),u=this.children.insert(i,o);return new _t(this.value,u)}}remove(e){if(Be(e))return this.children.isEmpty()?new _t(null):new _t(null,this.children);{const t=ze(e),i=this.children.get(t);if(i){const s=i.remove(pt(e));let o;return s.isEmpty()?o=this.children.remove(t):o=this.children.insert(t,s),this.value===null&&o.isEmpty()?new _t(null):new _t(this.value,o)}else return this}}get(e){if(Be(e))return this.value;{const t=ze(e),i=this.children.get(t);return i?i.get(pt(e)):null}}setTree(e,t){if(Be(e))return t;{const i=ze(e),o=(this.children.get(i)||new _t(null)).setTree(pt(e),t);let u;return o.isEmpty()?u=this.children.remove(i):u=this.children.insert(i,o),new _t(this.value,u)}}fold(e){return this.fold_(Xe(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,o)=>{i[s]=o.fold_(Zt(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,Xe(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(Be(e))return null;{const o=ze(e),u=this.children.get(o);return u?u.findOnPath_(pt(e),Zt(t,o),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Xe(),t)}foreachOnPath_(e,t,i){if(Be(e))return this;{this.value&&i(t,this.value);const s=ze(e),o=this.children.get(s);return o?o.foreachOnPath_(pt(e),Zt(t,s),i):new _t(null)}}foreach(e){this.foreach_(Xe(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(Zt(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e){this.writeTree_=e}static empty(){return new Ki(new _t(null))}}function Uc(n,e,t){if(Be(e))return new Ki(new _t(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let o=i.value;const u=Fn(s,e);return o=o.updateChild(u,t),new Ki(n.writeTree_.set(s,o))}else{const s=new _t(t),o=n.writeTree_.setTree(e,s);return new Ki(o)}}}function Zb(n,e,t){let i=n;return Kn(t,(s,o)=>{i=Uc(i,Zt(e,s),o)}),i}function Jb(n,e){if(Be(e))return Ki.empty();{const t=n.writeTree_.setTree(e,new _t(null));return new Ki(t)}}function ey(n,e){return xo(n,e)!=null}function xo(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Fn(t.path,e)):null}function eS(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(xt,(i,s)=>{e.push(new Ve(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new Ve(i,s.value))}),e}function la(n,e){if(Be(e))return n;{const t=xo(n,e);return t!=null?new Ki(new _t(t)):new Ki(n.writeTree_.subtree(e))}}function ty(n){return n.writeTree_.isEmpty()}function Ql(n,e){return kR(Xe(),n.writeTree_,e)}function kR(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,o)=>{s===".priority"?(ue(o.value!==null,"Priority writes must always be leaf nodes"),i=o.value):t=kR(Zt(n,s),o,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(Zt(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(n,e){return VR(e,n)}function YL(n,e,t,i,s){ue(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=Uc(n.visibleWrites,e,t)),n.lastWriteId=i}function $L(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function WL(n,e){const t=n.allWrites.findIndex(h=>h.writeId===e);ue(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,o=!1,u=n.allWrites.length-1;for(;s&&u>=0;){const h=n.allWrites[u];h.visible&&(u>=t&&KL(h,i.path)?s=!1:Yi(i.path,h.path)&&(o=!0)),u--}if(s){if(o)return QL(n),!0;if(i.snap)n.visibleWrites=Jb(n.visibleWrites,i.path);else{const h=i.children;Kn(h,m=>{n.visibleWrites=Jb(n.visibleWrites,Zt(i.path,m))})}return!0}else return!1}function KL(n,e){if(n.snap)return Yi(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Yi(Zt(n.path,t),e))return!0;return!1}function QL(n){n.visibleWrites=PR(n.allWrites,XL,Xe()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function XL(n){return n.visible}function PR(n,e,t){let i=Ki.empty();for(let s=0;s<n.length;++s){const o=n[s];if(e(o)){const u=o.path;let h;if(o.snap)Yi(t,u)?(h=Fn(t,u),i=Uc(i,h,o.snap)):Yi(u,t)&&(h=Fn(u,t),i=Uc(i,Xe(),o.snap.getChild(h)));else if(o.children){if(Yi(t,u))h=Fn(t,u),i=Zb(i,h,o.children);else if(Yi(u,t))if(h=Fn(u,t),Be(h))i=Zb(i,Xe(),o.children);else{const m=$l(o.children,ze(h));if(m){const p=m.getChild(pt(h));i=Uc(i,Xe(),p)}}}else throw ou("WriteRecord should have .snap or .children")}}return i}function MR(n,e,t,i,s){if(!i&&!s){const o=xo(n.visibleWrites,e);if(o!=null)return o;{const u=la(n.visibleWrites,e);if(ty(u))return t;if(t==null&&!ey(u,Xe()))return null;{const h=t||be.EMPTY_NODE;return Ql(u,h)}}}else{const o=la(n.visibleWrites,e);if(!s&&ty(o))return t;if(!s&&t==null&&!ey(o,Xe()))return null;{const u=function(p){return(p.visible||s)&&(!i||!~i.indexOf(p.writeId))&&(Yi(p.path,e)||Yi(e,p.path))},h=PR(n.allWrites,u,e),m=t||be.EMPTY_NODE;return Ql(h,m)}}}function ZL(n,e,t){let i=be.EMPTY_NODE;const s=xo(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(xt,(o,u)=>{i=i.updateImmediateChild(o,u)}),i;if(t){const o=la(n.visibleWrites,e);return t.forEachChild(xt,(u,h)=>{const m=Ql(la(o,new ft(u)),h);i=i.updateImmediateChild(u,m)}),eS(o).forEach(u=>{i=i.updateImmediateChild(u.name,u.node)}),i}else{const o=la(n.visibleWrites,e);return eS(o).forEach(u=>{i=i.updateImmediateChild(u.name,u.node)}),i}}function JL(n,e,t,i,s){ue(i||s,"Either existingEventSnap or existingServerSnap must exist");const o=Zt(e,t);if(ey(n.visibleWrites,o))return null;{const u=la(n.visibleWrites,o);return ty(u)?s.getChild(t):Ql(u,s.getChild(t))}}function eV(n,e,t,i){const s=Zt(e,t),o=xo(n.visibleWrites,s);if(o!=null)return o;if(i.isCompleteForChild(t)){const u=la(n.visibleWrites,s);return Ql(u,i.getNode().getImmediateChild(t))}else return null}function tV(n,e){return xo(n.visibleWrites,e)}function nV(n,e,t,i,s,o,u){let h;const m=la(n.visibleWrites,e),p=xo(m,Xe());if(p!=null)h=p;else if(t!=null)h=Ql(m,t);else return[];if(h=h.withIndex(u),!h.isEmpty()&&!h.isLeafNode()){const _=[],v=u.getCompare(),T=o?h.getReverseIteratorFrom(i,u):h.getIteratorFrom(i,u);let C=T.getNext();for(;C&&_.length<s;)v(C,i)!==0&&_.push(C),C=T.getNext();return _}else return[]}function iV(){return{visibleWrites:Ki.empty(),allWrites:[],lastWriteId:-1}}function Yd(n,e,t,i){return MR(n.writeTree,n.treePath,e,t,i)}function yv(n,e){return ZL(n.writeTree,n.treePath,e)}function tS(n,e,t,i){return JL(n.writeTree,n.treePath,e,t,i)}function $d(n,e){return tV(n.writeTree,Zt(n.treePath,e))}function rV(n,e,t,i,s,o){return nV(n.writeTree,n.treePath,e,t,i,s,o)}function vv(n,e,t){return eV(n.writeTree,n.treePath,e,t)}function LR(n,e){return VR(Zt(n.treePath,e),n.writeTree)}function VR(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sV{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;ue(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ue(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const o=s.type;if(t==="child_added"&&o==="child_removed")this.changeMap.set(i,Xc(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&o==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&o==="child_changed")this.changeMap.set(i,Qc(i,s.oldSnap));else if(t==="child_changed"&&o==="child_added")this.changeMap.set(i,Kl(i,e.snapshotNode));else if(t==="child_changed"&&o==="child_changed")this.changeMap.set(i,Xc(i,e.snapshotNode,s.oldSnap));else throw ou("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aV{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const UR=new aV;class Ev{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new ma(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return vv(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:So(this.viewCache_),o=rV(this.writes_,s,t,1,i,e);return o.length===0?null:o[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oV(n){return{filter:n}}function lV(n,e){ue(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),ue(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function uV(n,e,t,i,s){const o=new sV;let u,h;if(t.type===$i.OVERWRITE){const p=t;p.source.fromUser?u=ny(n,e,p.path,p.snap,i,s,o):(ue(p.source.fromServer,"Unknown source."),h=p.source.tagged||e.serverCache.isFiltered()&&!Be(p.path),u=Wd(n,e,p.path,p.snap,i,s,h,o))}else if(t.type===$i.MERGE){const p=t;p.source.fromUser?u=hV(n,e,p.path,p.children,i,s,o):(ue(p.source.fromServer,"Unknown source."),h=p.source.tagged||e.serverCache.isFiltered(),u=iy(n,e,p.path,p.children,i,s,h,o))}else if(t.type===$i.ACK_USER_WRITE){const p=t;p.revert?u=mV(n,e,p.path,i,s,o):u=fV(n,e,p.path,p.affectedTree,i,s,o)}else if(t.type===$i.LISTEN_COMPLETE)u=dV(n,e,t.path,i,o);else throw ou("Unknown operation type: "+t.type);const m=o.getChanges();return cV(e,u,m),{viewCache:u,changes:m}}function cV(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),o=Gd(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(o)||!i.getNode().getPriority().equals(o.getPriority()))&&t.push(NR(Gd(e)))}}function jR(n,e,t,i,s,o){const u=e.eventCache;if($d(i,t)!=null)return e;{let h,m;if(Be(t))if(ue(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const p=So(e),_=p instanceof be?p:be.EMPTY_NODE,v=yv(i,_);h=n.filter.updateFullNode(e.eventCache.getNode(),v,o)}else{const p=Yd(i,So(e));h=n.filter.updateFullNode(e.eventCache.getNode(),p,o)}else{const p=ze(t);if(p===".priority"){ue(da(t)===1,"Can't have a priority with additional path components");const _=u.getNode();m=e.serverCache.getNode();const v=tS(i,t,_,m);v!=null?h=n.filter.updatePriority(_,v):h=u.getNode()}else{const _=pt(t);let v;if(u.isCompleteForChild(p)){m=e.serverCache.getNode();const T=tS(i,t,u.getNode(),m);T!=null?v=u.getNode().getImmediateChild(p).updateChild(_,T):v=u.getNode().getImmediateChild(p)}else v=vv(i,p,e.serverCache);v!=null?h=n.filter.updateChild(u.getNode(),p,v,_,s,o):h=u.getNode()}}return Vc(e,h,u.isFullyInitialized()||Be(t),n.filter.filtersNodes())}}function Wd(n,e,t,i,s,o,u,h){const m=e.serverCache;let p;const _=u?n.filter:n.filter.getIndexedFilter();if(Be(t))p=_.updateFullNode(m.getNode(),i,null);else if(_.filtersNodes()&&!m.isFiltered()){const C=m.getNode().updateChild(t,i);p=_.updateFullNode(m.getNode(),C,null)}else{const C=ze(t);if(!m.isCompleteForPath(t)&&da(t)>1)return e;const O=pt(t),L=m.getNode().getImmediateChild(C).updateChild(O,i);C===".priority"?p=_.updatePriority(m.getNode(),L):p=_.updateChild(m.getNode(),C,L,O,UR,null)}const v=xR(e,p,m.isFullyInitialized()||Be(t),_.filtersNodes()),T=new Ev(s,v,o);return jR(n,v,t,s,T,h)}function ny(n,e,t,i,s,o,u){const h=e.eventCache;let m,p;const _=new Ev(s,e,o);if(Be(t))p=n.filter.updateFullNode(e.eventCache.getNode(),i,u),m=Vc(e,p,!0,n.filter.filtersNodes());else{const v=ze(t);if(v===".priority")p=n.filter.updatePriority(e.eventCache.getNode(),i),m=Vc(e,p,h.isFullyInitialized(),h.isFiltered());else{const T=pt(t),C=h.getNode().getImmediateChild(v);let O;if(Be(T))O=i;else{const P=_.getCompleteChild(v);P!=null?vR(T)===".priority"&&P.getChild(TR(T)).isEmpty()?O=P:O=P.updateChild(T,i):O=be.EMPTY_NODE}if(C.equals(O))m=e;else{const P=n.filter.updateChild(h.getNode(),v,O,T,_,u);m=Vc(e,P,h.isFullyInitialized(),n.filter.filtersNodes())}}}return m}function nS(n,e){return n.eventCache.isCompleteForChild(e)}function hV(n,e,t,i,s,o,u){let h=e;return i.foreach((m,p)=>{const _=Zt(t,m);nS(e,ze(_))&&(h=ny(n,h,_,p,s,o,u))}),i.foreach((m,p)=>{const _=Zt(t,m);nS(e,ze(_))||(h=ny(n,h,_,p,s,o,u))}),h}function iS(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function iy(n,e,t,i,s,o,u,h){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let m=e,p;Be(t)?p=i:p=new _t(null).setTree(t,i);const _=e.serverCache.getNode();return p.children.inorderTraversal((v,T)=>{if(_.hasChild(v)){const C=e.serverCache.getNode().getImmediateChild(v),O=iS(n,C,T);m=Wd(n,m,new ft(v),O,s,o,u,h)}}),p.children.inorderTraversal((v,T)=>{const C=!e.serverCache.isCompleteForChild(v)&&T.value===null;if(!_.hasChild(v)&&!C){const O=e.serverCache.getNode().getImmediateChild(v),P=iS(n,O,T);m=Wd(n,m,new ft(v),P,s,o,u,h)}}),m}function fV(n,e,t,i,s,o,u){if($d(s,t)!=null)return e;const h=e.serverCache.isFiltered(),m=e.serverCache;if(i.value!=null){if(Be(t)&&m.isFullyInitialized()||m.isCompleteForPath(t))return Wd(n,e,t,m.getNode().getChild(t),s,o,h,u);if(Be(t)){let p=new _t(null);return m.getNode().forEachChild(Fl,(_,v)=>{p=p.set(new ft(_),v)}),iy(n,e,t,p,s,o,h,u)}else return e}else{let p=new _t(null);return i.foreach((_,v)=>{const T=Zt(t,_);m.isCompleteForPath(T)&&(p=p.set(_,m.getNode().getChild(T)))}),iy(n,e,t,p,s,o,h,u)}}function dV(n,e,t,i,s){const o=e.serverCache,u=xR(e,o.getNode(),o.isFullyInitialized()||Be(t),o.isFiltered());return jR(n,u,t,i,UR,s)}function mV(n,e,t,i,s,o){let u;if($d(i,t)!=null)return e;{const h=new Ev(i,e,s),m=e.eventCache.getNode();let p;if(Be(t)||ze(t)===".priority"){let _;if(e.serverCache.isFullyInitialized())_=Yd(i,So(e));else{const v=e.serverCache.getNode();ue(v instanceof be,"serverChildren would be complete if leaf node"),_=yv(i,v)}_=_,p=n.filter.updateFullNode(m,_,o)}else{const _=ze(t);let v=vv(i,_,e.serverCache);v==null&&e.serverCache.isCompleteForChild(_)&&(v=m.getImmediateChild(_)),v!=null?p=n.filter.updateChild(m,_,v,pt(t),h,o):e.eventCache.getNode().hasChild(_)?p=n.filter.updateChild(m,_,be.EMPTY_NODE,pt(t),h,o):p=m,p.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=Yd(i,So(e)),u.isLeafNode()&&(p=n.filter.updateFullNode(p,u,o)))}return u=e.serverCache.isFullyInitialized()||$d(i,Xe())!=null,Vc(e,p,u,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pV{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new mv(i.getIndex()),o=PL(i);this.processor_=oV(o);const u=t.serverCache,h=t.eventCache,m=s.updateFullNode(be.EMPTY_NODE,u.getNode(),null),p=o.updateFullNode(be.EMPTY_NODE,h.getNode(),null),_=new ma(m,u.isFullyInitialized(),s.filtersNodes()),v=new ma(p,h.isFullyInitialized(),o.filtersNodes());this.viewCache_=Rm(v,_),this.eventGenerator_=new BL(this.query_)}get query(){return this.query_}}function gV(n){return n.viewCache_.serverCache.getNode()}function _V(n){return Gd(n.viewCache_)}function yV(n,e){const t=So(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Be(e)&&!t.getImmediateChild(ze(e)).isEmpty())?t.getChild(e):null}function rS(n){return n.eventRegistrations_.length===0}function vV(n,e){n.eventRegistrations_.push(e)}function sS(n,e,t){const i=[];if(t){ue(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(o=>{const u=o.createCancelEvent(t,s);u&&i.push(u)})}if(e){let s=[];for(let o=0;o<n.eventRegistrations_.length;++o){const u=n.eventRegistrations_[o];if(!u.matches(e))s.push(u);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(o+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function aS(n,e,t,i){e.type===$i.MERGE&&e.source.queryId!==null&&(ue(So(n.viewCache_),"We should always have a full cache before handling merges"),ue(Gd(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,o=uV(n.processor_,s,e,t,i);return lV(n.processor_,o.viewCache),ue(o.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=o.viewCache,FR(n,o.changes,o.viewCache.eventCache.getNode(),null)}function EV(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(xt,(o,u)=>{i.push(Kl(o,u))}),t.isFullyInitialized()&&i.push(NR(t.getNode())),FR(n,i,t.getNode(),e)}function FR(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return zL(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kd;class BR{constructor(){this.views=new Map}}function TV(n){ue(!Kd,"__referenceConstructor has already been defined"),Kd=n}function wV(){return ue(Kd,"Reference.ts has not been loaded"),Kd}function bV(n){return n.views.size===0}function Tv(n,e,t,i){const s=e.source.queryId;if(s!==null){const o=n.views.get(s);return ue(o!=null,"SyncTree gave us an op for an invalid query."),aS(o,e,t,i)}else{let o=[];for(const u of n.views.values())o=o.concat(aS(u,e,t,i));return o}}function zR(n,e,t,i,s){const o=e._queryIdentifier,u=n.views.get(o);if(!u){let h=Yd(t,s?i:null),m=!1;h?m=!0:i instanceof be?(h=yv(t,i),m=!1):(h=be.EMPTY_NODE,m=!1);const p=Rm(new ma(h,m,!1),new ma(i,s,!1));return new pV(e,p)}return u}function SV(n,e,t,i,s,o){const u=zR(n,e,i,s,o);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,u),vV(u,t),EV(u,t)}function AV(n,e,t,i){const s=e._queryIdentifier,o=[];let u=[];const h=pa(n);if(s==="default")for(const[m,p]of n.views.entries())u=u.concat(sS(p,t,i)),rS(p)&&(n.views.delete(m),p.query._queryParams.loadsAllData()||o.push(p.query));else{const m=n.views.get(s);m&&(u=u.concat(sS(m,t,i)),rS(m)&&(n.views.delete(s),m.query._queryParams.loadsAllData()||o.push(m.query)))}return h&&!pa(n)&&o.push(new(wV())(e._repo,e._path)),{removed:o,events:u}}function qR(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function ua(n,e){let t=null;for(const i of n.views.values())t=t||yV(i,e);return t}function HR(n,e){if(e._queryParams.loadsAllData())return Nm(n);{const i=e._queryIdentifier;return n.views.get(i)}}function GR(n,e){return HR(n,e)!=null}function pa(n){return Nm(n)!=null}function Nm(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qd;function CV(n){ue(!Qd,"__referenceConstructor has already been defined"),Qd=n}function RV(){return ue(Qd,"Reference.ts has not been loaded"),Qd}let IV=1;class oS{constructor(e){this.listenProvider_=e,this.syncPointTree_=new _t(null),this.pendingWriteTree_=iV(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function YR(n,e,t,i,s){return YL(n.pendingWriteTree_,e,t,i,s),s?Eh(n,new bo(OR(),e,t)):[]}function po(n,e,t=!1){const i=$L(n.pendingWriteTree_,e);if(WL(n.pendingWriteTree_,e)){let o=new _t(null);return i.snap!=null?o=o.set(Xe(),!0):Kn(i.children,u=>{o=o.set(new ft(u),!0)}),Eh(n,new Hd(i.path,o,t))}else return[]}function vh(n,e,t){return Eh(n,new bo(gv(),e,t))}function NV(n,e,t){const i=_t.fromObject(t);return Eh(n,new eh(gv(),e,i))}function DV(n,e){return Eh(n,new Jc(gv(),e))}function OV(n,e,t){const i=bv(n,t);if(i){const s=Sv(i),o=s.path,u=s.queryId,h=Fn(o,e),m=new Jc(_v(u),h);return Av(n,o,m)}else return[]}function $R(n,e,t,i,s=!1){const o=e._path,u=n.syncPointTree_.get(o);let h=[];if(u&&(e._queryIdentifier==="default"||GR(u,e))){const m=AV(u,e,t,i);bV(u)&&(n.syncPointTree_=n.syncPointTree_.remove(o));const p=m.removed;if(h=m.events,!s){const _=p.findIndex(T=>T._queryParams.loadsAllData())!==-1,v=n.syncPointTree_.findOnPath(o,(T,C)=>pa(C));if(_&&!v){const T=n.syncPointTree_.subtree(o);if(!T.isEmpty()){const C=MV(T);for(let O=0;O<C.length;++O){const P=C[O],L=P.query,H=XR(n,P);n.listenProvider_.startListening(jc(L),th(n,L),H.hashFn,H.onComplete)}}}!v&&p.length>0&&!i&&(_?n.listenProvider_.stopListening(jc(e),null):p.forEach(T=>{const C=n.queryToTagMap.get(Dm(T));n.listenProvider_.stopListening(jc(T),C)}))}LV(n,p)}return h}function WR(n,e,t,i){const s=bv(n,i);if(s!=null){const o=Sv(s),u=o.path,h=o.queryId,m=Fn(u,e),p=new bo(_v(h),m,t);return Av(n,u,p)}else return[]}function xV(n,e,t,i){const s=bv(n,i);if(s){const o=Sv(s),u=o.path,h=o.queryId,m=Fn(u,e),p=_t.fromObject(t),_=new eh(_v(h),m,p);return Av(n,u,_)}else return[]}function kV(n,e,t,i=!1){const s=e._path;let o=null,u=!1;n.syncPointTree_.foreachOnPath(s,(T,C)=>{const O=Fn(T,s);o=o||ua(C,O),u=u||pa(C)});let h=n.syncPointTree_.get(s);h?(u=u||pa(h),o=o||ua(h,Xe())):(h=new BR,n.syncPointTree_=n.syncPointTree_.set(s,h));let m;o!=null?m=!0:(m=!1,o=be.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((C,O)=>{const P=ua(O,Xe());P&&(o=o.updateImmediateChild(C,P))}));const p=GR(h,e);if(!p&&!e._queryParams.loadsAllData()){const T=Dm(e);ue(!n.queryToTagMap.has(T),"View does not exist, but we have a tag");const C=VV();n.queryToTagMap.set(T,C),n.tagToQueryMap.set(C,T)}const _=Im(n.pendingWriteTree_,s);let v=SV(h,e,t,_,o,m);if(!p&&!u&&!i){const T=HR(h,e);v=v.concat(UV(n,e,T))}return v}function wv(n,e,t){const s=n.pendingWriteTree_,o=n.syncPointTree_.findOnPath(e,(u,h)=>{const m=Fn(u,e),p=ua(h,m);if(p)return p});return MR(s,e,o,t,!0)}function PV(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(p,_)=>{const v=Fn(p,t);i=i||ua(_,v)});let s=n.syncPointTree_.get(t);s?i=i||ua(s,Xe()):(s=new BR,n.syncPointTree_=n.syncPointTree_.set(t,s));const o=i!=null,u=o?new ma(i,!0,!1):null,h=Im(n.pendingWriteTree_,e._path),m=zR(s,e,h,o?u.getNode():be.EMPTY_NODE,o);return _V(m)}function Eh(n,e){return KR(e,n.syncPointTree_,null,Im(n.pendingWriteTree_,Xe()))}function KR(n,e,t,i){if(Be(n.path))return QR(n,e,t,i);{const s=e.get(Xe());t==null&&s!=null&&(t=ua(s,Xe()));let o=[];const u=ze(n.path),h=n.operationForChild(u),m=e.children.get(u);if(m&&h){const p=t?t.getImmediateChild(u):null,_=LR(i,u);o=o.concat(KR(h,m,p,_))}return s&&(o=o.concat(Tv(s,n,i,t))),o}}function QR(n,e,t,i){const s=e.get(Xe());t==null&&s!=null&&(t=ua(s,Xe()));let o=[];return e.children.inorderTraversal((u,h)=>{const m=t?t.getImmediateChild(u):null,p=LR(i,u),_=n.operationForChild(u);_&&(o=o.concat(QR(_,h,m,p)))}),s&&(o=o.concat(Tv(s,n,i,t))),o}function XR(n,e){const t=e.query,i=th(n,t);return{hashFn:()=>(gV(e)||be.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?OV(n,t._path,i):DV(n,t._path);{const o=k2(s,t);return $R(n,t,null,o)}}}}function th(n,e){const t=Dm(e);return n.queryToTagMap.get(t)}function Dm(n){return n._path.toString()+"$"+n._queryIdentifier}function bv(n,e){return n.tagToQueryMap.get(e)}function Sv(n){const e=n.indexOf("$");return ue(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new ft(n.substr(0,e))}}function Av(n,e,t){const i=n.syncPointTree_.get(e);ue(i,"Missing sync point for query tag that we're tracking");const s=Im(n.pendingWriteTree_,e);return Tv(i,t,s,null)}function MV(n){return n.fold((e,t,i)=>{if(t&&pa(t))return[Nm(t)];{let s=[];return t&&(s=qR(t)),Kn(i,(o,u)=>{s=s.concat(u)}),s}})}function jc(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(RV())(n._repo,n._path):n}function LV(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=Dm(i),o=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(o)}}}function VV(){return IV++}function UV(n,e,t){const i=e._path,s=th(n,e),o=XR(n,t),u=n.listenProvider_.startListening(jc(e),s,o.hashFn,o.onComplete),h=n.syncPointTree_.subtree(i);if(s)ue(!pa(h.value),"If we're adding a query, it shouldn't be shadowed");else{const m=h.fold((p,_,v)=>{if(!Be(p)&&_&&pa(_))return[Nm(_).query];{let T=[];return _&&(T=T.concat(qR(_).map(C=>C.query))),Kn(v,(C,O)=>{T=T.concat(O)}),T}});for(let p=0;p<m.length;++p){const _=m[p];n.listenProvider_.stopListening(jc(_),th(n,_))}}return u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Cv(t)}node(){return this.node_}}class Rv{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Zt(this.path_,e);return new Rv(this.syncTree_,t)}node(){return wv(this.syncTree_,this.path_)}}const jV=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},lS=function(n,e,t){if(!n||typeof n!="object")return n;if(ue(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return FV(n[".sv"],e,t);if(typeof n[".sv"]=="object")return BV(n[".sv"],e);ue(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},FV=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:ue(!1,"Unexpected server value: "+n)}},BV=function(n,e,t){n.hasOwnProperty("increment")||ue(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&ue(!1,"Unexpected increment value: "+i);const s=e.node();if(ue(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const u=s.getValue();return typeof u!="number"?i:u+i},zV=function(n,e,t,i){return Iv(e,new Rv(t,n),i)},ZR=function(n,e,t){return Iv(n,new Cv(e),t)};function Iv(n,e,t){const i=n.getPriority().val(),s=lS(i,e.getImmediateChild(".priority"),t);let o;if(n.isLeafNode()){const u=n,h=lS(u.getValue(),e,t);return h!==u.getValue()||s!==u.getPriority().val()?new ln(h,cn(s)):n}else{const u=n;return o=u,s!==u.getPriority().val()&&(o=o.updatePriority(new ln(s))),u.forEachChild(xt,(h,m)=>{const p=Iv(m,e.getImmediateChild(h),t);p!==m&&(o=o.updateImmediateChild(h,p))}),o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Dv(n,e){let t=e instanceof ft?e:new ft(e),i=n,s=ze(t);for(;s!==null;){const o=$l(i.node.children,s)||{children:{},childCount:0};i=new Nv(s,i,o),t=pt(t),s=ze(t)}return i}function hu(n){return n.node.value}function JR(n,e){n.node.value=e,ry(n)}function eI(n){return n.node.childCount>0}function qV(n){return hu(n)===void 0&&!eI(n)}function Om(n,e){Kn(n.node.children,(t,i)=>{e(new Nv(t,n,i))})}function tI(n,e,t,i){t&&e(n),Om(n,s=>{tI(s,e,!0)})}function HV(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Th(n){return new ft(n.parent===null?n.name:Th(n.parent)+"/"+n.name)}function ry(n){n.parent!==null&&GV(n.parent,n.name,n)}function GV(n,e,t){const i=qV(t),s=vs(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,ry(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,ry(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YV=/[\[\].#$\/\u0000-\u001F\u007F]/,$V=/[\[\].#$\u0000-\u001F\u007F]/,R_=10*1024*1024,nI=function(n){return typeof n=="string"&&n.length!==0&&!YV.test(n)},iI=function(n){return typeof n=="string"&&n.length!==0&&!$V.test(n)},WV=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),iI(n)},KV=function(n,e,t,i){Ov(tv(n,"value"),e,t)},Ov=function(n,e,t){const i=t instanceof ft?new fL(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+ho(i));if(typeof e=="function")throw new Error(n+"contains a function "+ho(i)+" with contents = "+e.toString());if(ZC(e))throw new Error(n+"contains "+e.toString()+" "+ho(i));if(typeof e=="string"&&e.length>R_/3&&bm(e)>R_)throw new Error(n+"contains a string greater than "+R_+" utf8 bytes "+ho(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,o=!1;if(Kn(e,(u,h)=>{if(u===".value")s=!0;else if(u!==".priority"&&u!==".sv"&&(o=!0,!nI(u)))throw new Error(n+" contains an invalid key ("+u+") "+ho(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);dL(i,u),Ov(n,h,i),mL(i)}),s&&o)throw new Error(n+' contains ".value" child '+ho(i)+" in addition to actual children.")}},rI=function(n,e,t,i){if(!iI(t))throw new Error(tv(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},QV=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),rI(n,e,t)},XV=function(n,e){if(ze(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},ZV=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!nI(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!WV(t))throw new Error(tv(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JV{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function sI(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],o=s.getPath();t!==null&&!wR(o,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:o}),t.events.push(s)}t&&n.eventLists_.push(t)}function Rr(n,e,t){sI(n,t),e4(n,i=>Yi(i,e)||Yi(e,i))}function e4(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const o=s.path;e(o)?(t4(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function t4(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Mc&&Dn("event: "+t.toString()),cu(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n4="repo_interrupt",i4=25;class r4{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new JV,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=qd(),this.transactionQueueTree_=new Nv,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function s4(n,e,t){if(n.stats_=cv(n.repoInfo_),n.forceRestClient_||V2())n.server_=new zd(n.repoInfo_,(i,s,o,u)=>{uS(n,i,s,o,u)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>cS(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Xt(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new us(n.repoInfo_,e,(i,s,o,u)=>{uS(n,i,s,o,u)},i=>{cS(n,i)},i=>{o4(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=z2(n.repoInfo_,()=>new FL(n.stats_,n.server_)),n.infoData_=new ML,n.infoSyncTree_=new oS({startListening:(i,s,o,u)=>{let h=[];const m=n.infoData_.getNode(i._path);return m.isEmpty()||(h=vh(n.infoSyncTree_,i._path,m),setTimeout(()=>{u("ok")},0)),h},stopListening:()=>{}}),kv(n,"connected",!1),n.serverSyncTree_=new oS({startListening:(i,s,o,u)=>(n.server_.listen(i,o,s,(h,m)=>{const p=u(h,m);Rr(n.eventQueue_,i._path,p)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function a4(n){const t=n.infoData_.getNode(new ft(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function xv(n){return jV({timestamp:a4(n)})}function uS(n,e,t,i,s){n.dataUpdateCount++;const o=new ft(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let u=[];if(s)if(i){const m=Md(t,p=>cn(p));u=xV(n.serverSyncTree_,o,m,s)}else{const m=cn(t);u=WR(n.serverSyncTree_,o,m,s)}else if(i){const m=Md(t,p=>cn(p));u=NV(n.serverSyncTree_,o,m)}else{const m=cn(t);u=vh(n.serverSyncTree_,o,m)}let h=o;u.length>0&&(h=km(n,o)),Rr(n.eventQueue_,h,u)}function cS(n,e){kv(n,"connected",e),e===!1&&c4(n)}function o4(n,e){Kn(e,(t,i)=>{kv(n,t,i)})}function kv(n,e,t){const i=new ft("/.info/"+e),s=cn(t);n.infoData_.updateSnapshot(i,s);const o=vh(n.infoSyncTree_,i,s);Rr(n.eventQueue_,i,o)}function aI(n){return n.nextWriteId_++}function l4(n,e,t){const i=PV(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{const o=cn(s).withIndex(e._queryParams.getIndex());kV(n.serverSyncTree_,e,t,!0);let u;if(e._queryParams.loadsAllData())u=vh(n.serverSyncTree_,e._path,o);else{const h=th(n.serverSyncTree_,e);u=WR(n.serverSyncTree_,e._path,o,h)}return Rr(n.eventQueue_,e._path,u),$R(n.serverSyncTree_,e,t,null,!0),o},s=>(xm(n,"get for query "+Xt(e)+" failed: "+s),Promise.reject(new Error(s))))}function u4(n,e,t,i,s){xm(n,"set",{path:e.toString(),value:t,priority:i});const o=xv(n),u=cn(t,i),h=wv(n.serverSyncTree_,e),m=ZR(u,h,o),p=aI(n),_=YR(n.serverSyncTree_,e,m,p,!0);sI(n.eventQueue_,_),n.server_.put(e.toString(),u.val(!0),(T,C)=>{const O=T==="ok";O||Wn("set at "+e+" failed: "+T);const P=po(n.serverSyncTree_,p,!O);Rr(n.eventQueue_,e,P),f4(n,s,T,C)});const v=hI(n,e);km(n,v),Rr(n.eventQueue_,v,[])}function c4(n){xm(n,"onDisconnectEvents");const e=xv(n),t=qd();J_(n.onDisconnect_,Xe(),(s,o)=>{const u=zV(s,o,n.serverSyncTree_,e);DR(t,s,u)});let i=[];J_(t,Xe(),(s,o)=>{i=i.concat(vh(n.serverSyncTree_,s,o));const u=hI(n,s);km(n,u)}),n.onDisconnect_=qd(),Rr(n.eventQueue_,Xe(),i)}function h4(n){n.persistentConnection_&&n.persistentConnection_.interrupt(n4)}function xm(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Dn(t,...e)}function f4(n,e,t,i){e&&cu(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let o=s;i&&(o+=": "+i);const u=new Error(o);u.code=s,e(u)}})}function oI(n,e,t){return wv(n.serverSyncTree_,e,t)||be.EMPTY_NODE}function Pv(n,e=n.transactionQueueTree_){if(e||Pm(n,e),hu(e)){const t=uI(n,e);ue(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&d4(n,Th(e),t)}else eI(e)&&Om(e,t=>{Pv(n,t)})}function d4(n,e,t){const i=t.map(p=>p.currentWriteId),s=oI(n,e,i);let o=s;const u=s.hash();for(let p=0;p<t.length;p++){const _=t[p];ue(_.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),_.status=1,_.retryCount++;const v=Fn(e,_.path);o=o.updateChild(v,_.currentOutputSnapshotRaw)}const h=o.val(!0),m=e;n.server_.put(m.toString(),h,p=>{xm(n,"transaction put response",{path:m.toString(),status:p});let _=[];if(p==="ok"){const v=[];for(let T=0;T<t.length;T++)t[T].status=2,_=_.concat(po(n.serverSyncTree_,t[T].currentWriteId)),t[T].onComplete&&v.push(()=>t[T].onComplete(null,!0,t[T].currentOutputSnapshotResolved)),t[T].unwatcher();Pm(n,Dv(n.transactionQueueTree_,e)),Pv(n,n.transactionQueueTree_),Rr(n.eventQueue_,e,_);for(let T=0;T<v.length;T++)cu(v[T])}else{if(p==="datastale")for(let v=0;v<t.length;v++)t[v].status===3?t[v].status=4:t[v].status=0;else{Wn("transaction at "+m.toString()+" failed: "+p);for(let v=0;v<t.length;v++)t[v].status=4,t[v].abortReason=p}km(n,e)}},u)}function km(n,e){const t=lI(n,e),i=Th(t),s=uI(n,t);return m4(n,s,i),i}function m4(n,e,t){if(e.length===0)return;const i=[];let s=[];const u=e.filter(h=>h.status===0).map(h=>h.currentWriteId);for(let h=0;h<e.length;h++){const m=e[h],p=Fn(t,m.path);let _=!1,v;if(ue(p!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),m.status===4)_=!0,v=m.abortReason,s=s.concat(po(n.serverSyncTree_,m.currentWriteId,!0));else if(m.status===0)if(m.retryCount>=i4)_=!0,v="maxretry",s=s.concat(po(n.serverSyncTree_,m.currentWriteId,!0));else{const T=oI(n,m.path,u);m.currentInputSnapshot=T;const C=e[h].update(T.val());if(C!==void 0){Ov("transaction failed: Data returned ",C,m.path);let O=cn(C);typeof C=="object"&&C!=null&&vs(C,".priority")||(O=O.updatePriority(T.getPriority()));const L=m.currentWriteId,H=xv(n),J=ZR(O,T,H);m.currentOutputSnapshotRaw=O,m.currentOutputSnapshotResolved=J,m.currentWriteId=aI(n),u.splice(u.indexOf(L),1),s=s.concat(YR(n.serverSyncTree_,m.path,J,m.currentWriteId,m.applyLocally)),s=s.concat(po(n.serverSyncTree_,L,!0))}else _=!0,v="nodata",s=s.concat(po(n.serverSyncTree_,m.currentWriteId,!0))}Rr(n.eventQueue_,t,s),s=[],_&&(e[h].status=2,function(T){setTimeout(T,Math.floor(0))}(e[h].unwatcher),e[h].onComplete&&(v==="nodata"?i.push(()=>e[h].onComplete(null,!1,e[h].currentInputSnapshot)):i.push(()=>e[h].onComplete(new Error(v),!1,null))))}Pm(n,n.transactionQueueTree_);for(let h=0;h<i.length;h++)cu(i[h]);Pv(n,n.transactionQueueTree_)}function lI(n,e){let t,i=n.transactionQueueTree_;for(t=ze(e);t!==null&&hu(i)===void 0;)i=Dv(i,t),e=pt(e),t=ze(e);return i}function uI(n,e){const t=[];return cI(n,e,t),t.sort((i,s)=>i.order-s.order),t}function cI(n,e,t){const i=hu(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Om(e,s=>{cI(n,s,t)})}function Pm(n,e){const t=hu(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,JR(e,t.length>0?t:void 0)}Om(e,i=>{Pm(n,i)})}function hI(n,e){const t=Th(lI(n,e)),i=Dv(n.transactionQueueTree_,e);return HV(i,s=>{I_(n,s)}),I_(n,i),tI(i,s=>{I_(n,s)}),t}function I_(n,e){const t=hu(e);if(t){const i=[];let s=[],o=-1;for(let u=0;u<t.length;u++)t[u].status===3||(t[u].status===1?(ue(o===u-1,"All SENT items should be at beginning of queue."),o=u,t[u].status=3,t[u].abortReason="set"):(ue(t[u].status===0,"Unexpected transaction status in abort"),t[u].unwatcher(),s=s.concat(po(n.serverSyncTree_,t[u].currentWriteId,!0)),t[u].onComplete&&i.push(t[u].onComplete.bind(null,new Error("set"),!1,null))));o===-1?JR(e,void 0):t.length=o+1,Rr(n.eventQueue_,Th(e),s);for(let u=0;u<i.length;u++)cu(i[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p4(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function g4(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Wn(`Invalid query segment '${t}' in query '${n}'`)}return e}const hS=function(n,e){const t=_4(n),i=t.namespace;t.domain==="firebase.com"&&ms(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&ms("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||I2();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new cR(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new ft(t.pathString)}},_4=function(n){let e="",t="",i="",s="",o="",u=!0,h="https",m=443;if(typeof n=="string"){let p=n.indexOf("//");p>=0&&(h=n.substring(0,p-1),n=n.substring(p+2));let _=n.indexOf("/");_===-1&&(_=n.length);let v=n.indexOf("?");v===-1&&(v=n.length),e=n.substring(0,Math.min(_,v)),_<v&&(s=p4(n.substring(_,v)));const T=g4(n.substring(Math.min(n.length,v)));p=e.indexOf(":"),p>=0?(u=h==="https"||h==="wss",m=parseInt(e.substring(p+1),10)):p=e.length;const C=e.slice(0,p);if(C.toLowerCase()==="localhost")t="localhost";else if(C.split(".").length<=2)t=C;else{const O=e.indexOf(".");i=e.substring(0,O).toLowerCase(),t=e.substring(O+1),o=i}"ns"in T&&(o=T.ns)}return{host:e,port:m,domain:t,subdomain:i,secure:u,scheme:h,pathString:s,namespace:o}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y4{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Xt(this.snapshot.exportVal())}}class v4{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E4{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return ue(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Mv{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return Be(this._path)?null:vR(this._path)}get ref(){return new Ts(this._repo,this._path)}get _queryIdentifier(){const e=Qb(this._queryParams),t=lv(e);return t==="{}"?"default":t}get _queryObject(){return Qb(this._queryParams)}isEqual(e){if(e=lt(e),!(e instanceof Mv))return!1;const t=this._repo===e._repo,i=wR(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+hL(this._path)}}class Ts extends Mv{constructor(e,t){super(e,t,new pv,!1)}get parent(){const e=TR(this._path);return e===null?null:new Ts(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class nh{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ft(e),i=sy(this.ref,e);return new nh(this._node.getChild(t),i,xt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new nh(s,sy(this.ref,i),xt)))}hasChild(e){const t=new ft(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Lv(n,e){return n=lt(n),n._checkNotDeleted("ref"),e!==void 0?sy(n._root,e):n._root}function sy(n,e){return n=lt(n),ze(n._path)===null?QV("child","path",e):rI("child","path",e),new Ts(n._repo,Zt(n._path,e))}function T4(n,e){n=lt(n),XV("set",n._path),KV("set",e,n._path);const t=new Em;return u4(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function fI(n){n=lt(n);const e=new E4(()=>{}),t=new Vv(e);return l4(n._repo,n,t).then(i=>new nh(i,new Ts(n._repo,n._path),n._queryParams.getIndex()))}class Vv{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new y4("value",this,new nh(e.snapshotNode,new Ts(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new v4(this,e,t):null}matches(e){return e instanceof Vv?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}TV(Ts);CV(Ts);/**
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
 */const w4="FIREBASE_DATABASE_EMULATOR_HOST",ay={};let b4=!1;function S4(n,e,t,i){const s=e.lastIndexOf(":"),o=e.substring(0,s),u=Or(o);n.repoInfo_=new cR(e,u,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),i&&(n.authTokenProvider_=i)}function A4(n,e,t,i,s){let o=i||n.options.databaseURL;o===void 0&&(n.options.projectId||ms("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Dn("Using default host for project ",n.options.projectId),o=`${n.options.projectId}-default-rtdb.firebaseio.com`);let u=hS(o,s),h=u.repoInfo,m;typeof process<"u"&&xb&&(m=xb[w4]),m?(o=`http://${m}?ns=${h.namespace}`,u=hS(o,s),h=u.repoInfo):u.repoInfo.secure;const p=new j2(n.name,n.options,e);ZV("Invalid Firebase Database URL",u),Be(u.path)||ms("Database URL must point to the root of a Firebase Database (not including a child path).");const _=R4(h,n,p,new U2(n,t));return new I4(_,n)}function C4(n,e){const t=ay[e];(!t||t[n.key]!==n)&&ms(`Database ${e}(${n.repoInfo_}) has already been deleted.`),h4(n),delete t[n.key]}function R4(n,e,t,i){let s=ay[e.name];s||(s={},ay[e.name]=s);let o=s[n.toURLString()];return o&&ms("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new r4(n,b4,t,i),s[n.toURLString()]=o,o}class I4{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(s4(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ts(this._repo,Xe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(C4(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ms("Cannot call "+e+" on a deleted database.")}}function dI(n=ph(),e){const t=Es(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=Zy("database");i&&N4(t,...i)}return t}function N4(n,e,t,i={}){n=lt(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,o=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&fs(i,o.repoInfo_.emulatorOptions))return;ms("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(o.repoInfo_.nodeAdmin)i.mockUserToken&&ms('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new vd(vd.OWNER);else if(i.mockUserToken){const h=typeof i.mockUserToken=="string"?i.mockUserToken:Jy(i.mockUserToken,n.app.options.projectId);u=new vd(h)}Or(e)&&(Tm(e),wm("Database",!0)),S4(o,s,i,u)}/**
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
 */function D4(n){w2(Sa),Oi(new hi("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return A4(i,s,o,t)},"PUBLIC").setMultipleInstances(!0)),xn(kb,Pb,n),xn(kb,Pb,"esm2017")}us.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};us.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};D4();function Uv(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function mI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const O4=mI,pI=new Oo("auth","Firebase",mI());/**
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
 */const Xd=new mh("@firebase/auth");function x4(n,...e){Xd.logLevel<=Fe.WARN&&Xd.warn(`Auth (${Sa}): ${n}`,...e)}function Td(n,...e){Xd.logLevel<=Fe.ERROR&&Xd.error(`Auth (${Sa}): ${n}`,...e)}/**
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
 */function Zi(n,...e){throw jv(n,...e)}function Tr(n,...e){return jv(n,...e)}function gI(n,e,t){const i=Object.assign(Object.assign({},O4()),{[e]:t});return new Oo("auth","Firebase",i).create(e,{appName:n.name})}function cs(n){return gI(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jv(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return pI.create(n,...e)}function we(n,e,...t){if(!n)throw jv(e,...t)}function as(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Td(e),new Error(e)}function ps(n,e){n||as(e)}/**
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
 */function oy(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function k4(){return fS()==="http:"||fS()==="https:"}function fS(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function P4(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(k4()||gC()||"connection"in navigator)?navigator.onLine:!0}function M4(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class wh{constructor(e,t){this.shortDelay=e,this.longDelay=t,ps(t>e,"Short delay should be less than long delay!"),this.isMobile=ev()||_C()}get(){return P4()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Fv(n,e){ps(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class _I{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;as("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;as("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;as("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const L4={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const V4=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],U4=new wh(3e4,6e4);function Aa(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ws(n,e,t,i,s={}){return yI(n,s,async()=>{let o={},u={};i&&(e==="GET"?u=i:o={body:JSON.stringify(i)});const h=lu(Object.assign({key:n.config.apiKey},u)).slice(1),m=await n._getAdditionalHeaders();m["Content-Type"]="application/json",n.languageCode&&(m["X-Firebase-Locale"]=n.languageCode);const p=Object.assign({method:e,headers:m},o);return Nk()||(p.referrerPolicy="no-referrer"),n.emulatorConfig&&Or(n.emulatorConfig.host)&&(p.credentials="include"),_I.fetch()(await vI(n,n.config.apiHost,t,h),p)})}async function yI(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},L4),e);try{const s=new F4(n),o=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const u=await o.json();if("needConfirmation"in u)throw ad(n,"account-exists-with-different-credential",u);if(o.ok&&!("errorMessage"in u))return u;{const h=o.ok?u.errorMessage:u.error.message,[m,p]=h.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw ad(n,"credential-already-in-use",u);if(m==="EMAIL_EXISTS")throw ad(n,"email-already-in-use",u);if(m==="USER_DISABLED")throw ad(n,"user-disabled",u);const _=i[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw gI(n,_,p);Zi(n,_)}}catch(s){if(s instanceof xi)throw s;Zi(n,"network-request-failed",{message:String(s)})}}async function bh(n,e,t,i,s={}){const o=await ws(n,e,t,i,s);return"mfaPendingCredential"in o&&Zi(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function vI(n,e,t,i){const s=`${e}${t}?${i}`,o=n,u=o.config.emulator?Fv(n.config,s):`${n.config.apiScheme}://${s}`;return V4.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(u).toString():u}function j4(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class F4{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Tr(this.auth,"network-request-failed")),U4.get())})}}function ad(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=Tr(n,e,i);return s.customData._tokenResponse=t,s}function dS(n){return n!==void 0&&n.enterprise!==void 0}class B4{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return j4(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function z4(n,e){return ws(n,"GET","/v2/recaptchaConfig",Aa(n,e))}/**
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
 */async function q4(n,e){return ws(n,"POST","/v1/accounts:delete",e)}async function Zd(n,e){return ws(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Fc(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function H4(n,e=!1){const t=lt(n),i=await t.getIdToken(e),s=Bv(i);we(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,u=o?.sign_in_provider;return{claims:s,token:i,authTime:Fc(N_(s.auth_time)),issuedAtTime:Fc(N_(s.iat)),expirationTime:Fc(N_(s.exp)),signInProvider:u||null,signInSecondFactor:o?.sign_in_second_factor||null}}function N_(n){return Number(n)*1e3}function Bv(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Td("JWT malformed, contained fewer than 3 sections"),null;try{const s=Pd(t);return s?JSON.parse(s):(Td("Failed to decode base64 JWT payload"),null)}catch(s){return Td("Caught error parsing JWT payload as JSON",s?.toString()),null}}function mS(n){const e=Bv(n);return we(e,"internal-error"),we(typeof e.exp<"u","internal-error"),we(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Xl(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof xi&&G4(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function G4({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Y4{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ly{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fc(this.lastLoginAt),this.creationTime=Fc(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Jd(n){var e;const t=n.auth,i=await n.getIdToken(),s=await Xl(n,Zd(t,{idToken:i}));we(s?.users.length,t,"internal-error");const o=s.users[0];n._notifyReloadListener(o);const u=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?EI(o.providerUserInfo):[],h=W4(n.providerData,u),m=n.isAnonymous,p=!(n.email&&o.passwordHash)&&!h?.length,_=m?p:!1,v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new ly(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(n,v)}async function $4(n){const e=lt(n);await Jd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function W4(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function EI(n){return n.map(e=>{var{providerId:t}=e,i=Uv(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function K4(n,e){const t=await yI(n,{},async()=>{const i=lu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=n.config,u=await vI(n,s,"/v1/token",`key=${o}`),h=await n._getAdditionalHeaders();h["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:h,body:i};return n.emulatorConfig&&Or(n.emulatorConfig.host)&&(m.credentials="include"),_I.fetch()(u,m)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Q4(n,e){return ws(n,"POST","/v2/accounts:revokeToken",Aa(n,e))}/**
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
 */class Bl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){we(e.idToken,"internal-error"),we(typeof e.idToken<"u","internal-error"),we(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):mS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){we(e.length!==0,"internal-error");const t=mS(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(we(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:o}=await K4(e,t);this.updateTokensAndExpiration(i,s,Number(o))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:o}=t,u=new Bl;return i&&(we(typeof i=="string","internal-error",{appName:e}),u.refreshToken=i),s&&(we(typeof s=="string","internal-error",{appName:e}),u.accessToken=s),o&&(we(typeof o=="number","internal-error",{appName:e}),u.expirationTime=o),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bl,this.toJSON())}_performRefresh(){return as("not implemented")}}/**
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
 */function Zs(n,e){we(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Wi{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,o=Uv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Y4(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new ly(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Xl(this,this.stsTokenManager.getToken(this.auth,e));return we(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return H4(this,e)}reload(){return $4(this)}_assign(e){this!==e&&(we(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Wi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){we(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Jd(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Gn(this.auth.app))return Promise.reject(cs(this.auth));const e=await this.getIdToken();return await Xl(this,q4(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,o,u,h,m,p,_;const v=(i=t.displayName)!==null&&i!==void 0?i:void 0,T=(s=t.email)!==null&&s!==void 0?s:void 0,C=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,O=(u=t.photoURL)!==null&&u!==void 0?u:void 0,P=(h=t.tenantId)!==null&&h!==void 0?h:void 0,L=(m=t._redirectEventId)!==null&&m!==void 0?m:void 0,H=(p=t.createdAt)!==null&&p!==void 0?p:void 0,J=(_=t.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:W,emailVerified:re,isAnonymous:K,providerData:ae,stsTokenManager:N}=t;we(W&&N,e,"internal-error");const R=Bl.fromJSON(this.name,N);we(typeof W=="string",e,"internal-error"),Zs(v,e.name),Zs(T,e.name),we(typeof re=="boolean",e,"internal-error"),we(typeof K=="boolean",e,"internal-error"),Zs(C,e.name),Zs(O,e.name),Zs(P,e.name),Zs(L,e.name),Zs(H,e.name),Zs(J,e.name);const I=new Wi({uid:W,auth:e,email:T,emailVerified:re,displayName:v,isAnonymous:K,photoURL:O,phoneNumber:C,tenantId:P,stsTokenManager:R,createdAt:H,lastLoginAt:J});return ae&&Array.isArray(ae)&&(I.providerData=ae.map(M=>Object.assign({},M))),L&&(I._redirectEventId=L),I}static async _fromIdTokenResponse(e,t,i=!1){const s=new Bl;s.updateFromServerResponse(t);const o=new Wi({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Jd(o),o}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];we(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?EI(s.providerUserInfo):[],u=!(s.email&&s.passwordHash)&&!o?.length,h=new Bl;h.updateFromIdToken(i);const m=new Wi({uid:s.localId,auth:e,stsTokenManager:h,isAnonymous:u}),p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new ly(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!o?.length};return Object.assign(m,p),m}}/**
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
 */const pS=new Map;function os(n){ps(n instanceof Function,"Expected a class definition");let e=pS.get(n);return e?(ps(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,pS.set(n,e),e)}/**
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
 */class TI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}TI.type="NONE";const gS=TI;/**
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
 */function wd(n,e,t){return`firebase:${n}:${e}:${t}`}class zl{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:o}=this.auth;this.fullUserKey=wd(this.userKey,s.apiKey,o),this.fullPersistenceKey=wd("persistence",s.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Zd(this.auth,{idToken:e}).catch(()=>{});return t?Wi._fromGetAccountInfoResponse(this.auth,t,e):null}return Wi._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new zl(os(gS),e,i);const s=(await Promise.all(t.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let o=s[0]||os(gS);const u=wd(i,e.config.apiKey,e.name);let h=null;for(const p of t)try{const _=await p._get(u);if(_){let v;if(typeof _=="string"){const T=await Zd(e,{idToken:_}).catch(()=>{});if(!T)break;v=await Wi._fromGetAccountInfoResponse(e,T,_)}else v=Wi._fromJSON(e,_);p!==o&&(h=v),o=p;break}}catch{}const m=s.filter(p=>p._shouldAllowMigration);return!o._shouldAllowMigration||!m.length?new zl(o,e,i):(o=m[0],h&&await o._set(u,h.toJSON()),await Promise.all(t.map(async p=>{if(p!==o)try{await p._remove(u)}catch{}})),new zl(o,e,i))}}/**
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
 */function _S(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(AI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(RI(e))return"Blackberry";if(II(e))return"Webos";if(bI(e))return"Safari";if((e.includes("chrome/")||SI(e))&&!e.includes("edge/"))return"Chrome";if(CI(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if(i?.length===2)return i[1]}return"Other"}function wI(n=kn()){return/firefox\//i.test(n)}function bI(n=kn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function SI(n=kn()){return/crios\//i.test(n)}function AI(n=kn()){return/iemobile/i.test(n)}function CI(n=kn()){return/android/i.test(n)}function RI(n=kn()){return/blackberry/i.test(n)}function II(n=kn()){return/webos/i.test(n)}function zv(n=kn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function X4(n=kn()){var e;return zv(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Z4(){return Dk()&&document.documentMode===10}function NI(n=kn()){return zv(n)||CI(n)||II(n)||RI(n)||/windows phone/i.test(n)||AI(n)}/**
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
 */function DI(n,e=[]){let t;switch(n){case"Browser":t=_S(kn());break;case"Worker":t=`${_S(kn())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Sa}/${i}`}/**
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
 */class J4{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=o=>new Promise((u,h)=>{try{const m=e(o);u(m)}catch(m){h(m)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function eU(n,e={}){return ws(n,"GET","/v2/passwordPolicy",Aa(n,e))}/**
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
 */const tU=6;class nU{constructor(e){var t,i,s,o;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:tU,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,o,u,h;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(t=m.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),m.isValid&&(m.isValid=(i=m.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),m.isValid&&(m.isValid=(s=m.containsLowercaseLetter)!==null&&s!==void 0?s:!0),m.isValid&&(m.isValid=(o=m.containsUppercaseLetter)!==null&&o!==void 0?o:!0),m.isValid&&(m.isValid=(u=m.containsNumericCharacter)!==null&&u!==void 0?u:!0),m.isValid&&(m.isValid=(h=m.containsNonAlphanumericCharacter)!==null&&h!==void 0?h:!0),m}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class iU{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yS(this),this.idTokenSubscription=new yS(this),this.beforeStateQueue=new J4(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=os(t)),this._initializationPromise=this.queue(async()=>{var i,s,o;if(!this._deleted&&(this.persistenceManager=await zl.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Zd(this,{idToken:e}),i=await Wi._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Gn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(h,h))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,h=s?._redirectEventId,m=await this.tryRedirectSignIn(e);(!u||u===h)&&m?.user&&(s=m.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return we(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Jd(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=M4()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Gn(this.app))return Promise.reject(cs(this));const t=e?lt(e):null;return t&&we(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&we(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Gn(this.app)?Promise.reject(cs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Gn(this.app)?Promise.reject(cs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(os(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await eU(this),t=new nU(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Oo("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Q4(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&os(e)||this._popupRedirectResolver;we(t,this,"argument-error"),this.redirectPersistenceManager=await zl.create(this,[os(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let u=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(we(h,this,"internal-error"),h.then(()=>{u||o(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,i,s);return()=>{u=!0,m()}}else{const m=e.addObserver(t);return()=>{u=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return we(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=DI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Gn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&x4(`Error while retrieving App Check token: ${t.error}`),t?.token}}function ko(n){return lt(n)}class yS{constructor(e){this.auth=e,this.observer=null,this.addObserver=Fk(t=>this.observer=t)}get next(){return we(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Mm={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function rU(n){Mm=n}function OI(n){return Mm.loadJS(n)}function sU(){return Mm.recaptchaEnterpriseScript}function aU(){return Mm.gapiScript}function oU(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class lU{constructor(){this.enterprise=new uU}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class uU{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const cU="recaptcha-enterprise",xI="NO_RECAPTCHA";class hU{constructor(e){this.type=cU,this.auth=ko(e)}async verify(e="verify",t=!1){async function i(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(u,h)=>{z4(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const p=new B4(m);return o.tenantId==null?o._agentRecaptchaConfig=p:o._tenantRecaptchaConfigs[o.tenantId]=p,u(p.siteKey)}}).catch(m=>{h(m)})})}function s(o,u,h){const m=window.grecaptcha;dS(m)?m.enterprise.ready(()=>{m.enterprise.execute(o,{action:e}).then(p=>{u(p)}).catch(()=>{u(xI)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new lU().execute("siteKey",{action:"verify"}):new Promise((o,u)=>{i(this.auth).then(h=>{if(!t&&dS(window.grecaptcha))s(h,o,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let m=sU();m.length!==0&&(m+=h),OI(m).then(()=>{s(h,o,u)}).catch(p=>{u(p)})}}).catch(h=>{u(h)})})}}async function vS(n,e,t,i=!1,s=!1){const o=new hU(n);let u;if(s)u=xI;else try{u=await o.verify(t)}catch{u=await o.verify(t,!0)}const h=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in h){const m=h.phoneEnrollmentInfo.phoneNumber,p=h.phoneEnrollmentInfo.recaptchaToken;Object.assign(h,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:p,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in h){const m=h.phoneSignInInfo.recaptchaToken;Object.assign(h,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return h}return i?Object.assign(h,{captchaResp:u}):Object.assign(h,{captchaResponse:u}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function uy(n,e,t,i,s){var o;if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await vS(n,e,t,t==="getOobCode");return i(n,u)}else return i(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await vS(n,e,t,t==="getOobCode");return i(n,h)}else return Promise.reject(u)})}/**
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
 */function fU(n,e){const t=Es(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),o=t.getOptions();if(fs(o,e??{}))return s;Zi(s,"already-initialized")}return t.initialize({options:e})}function dU(n,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(os);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e?.popupRedirectResolver)}function mU(n,e,t){const i=ko(n);we(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,o=kI(e),{host:u,port:h}=pU(e),m=h===null?"":`:${h}`,p={url:`${o}//${u}${m}/`},_=Object.freeze({host:u,port:h,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){we(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),we(fs(p,i.config.emulator)&&fs(_,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=p,i.emulatorConfig=_,i.settings.appVerificationDisabledForTesting=!0,Or(u)?(Tm(`${o}//${u}${m}`),wm("Auth",!0)):gU()}function kI(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function pU(n){const e=kI(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const o=s[1];return{host:o,port:ES(i.substr(o.length+1))}}else{const[o,u]=i.split(":");return{host:o,port:ES(u)}}}function ES(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function gU(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class qv{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return as("not implemented")}_getIdTokenResponse(e){return as("not implemented")}_linkToIdToken(e,t){return as("not implemented")}_getReauthenticationResolver(e){return as("not implemented")}}async function _U(n,e){return ws(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function yU(n,e){return bh(n,"POST","/v1/accounts:signInWithPassword",Aa(n,e))}/**
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
 */async function vU(n,e){return bh(n,"POST","/v1/accounts:signInWithEmailLink",Aa(n,e))}async function EU(n,e){return bh(n,"POST","/v1/accounts:signInWithEmailLink",Aa(n,e))}/**
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
 */class ih extends qv{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ih(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new ih(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uy(e,t,"signInWithPassword",yU);case"emailLink":return vU(e,{email:this._email,oobCode:this._password});default:Zi(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uy(e,i,"signUpPassword",_U);case"emailLink":return EU(e,{idToken:t,email:this._email,oobCode:this._password});default:Zi(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ql(n,e){return bh(n,"POST","/v1/accounts:signInWithIdp",Aa(n,e))}/**
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
 */const TU="http://localhost";class Ao extends qv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ao(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Zi("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,o=Uv(t,["providerId","signInMethod"]);if(!i||!s)return null;const u=new Ao(i,s);return u.idToken=o.idToken||void 0,u.accessToken=o.accessToken||void 0,u.secret=o.secret,u.nonce=o.nonce,u.pendingToken=o.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return ql(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,ql(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ql(e,t)}buildRequest(){const e={requestUri:TU,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=lu(t)}return e}}/**
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
 */function wU(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bU(n){const e=Cc(Rc(n)).link,t=e?Cc(Rc(e)).deep_link_id:null,i=Cc(Rc(n)).deep_link_id;return(i?Cc(Rc(i)).link:null)||i||t||e||n}class Hv{constructor(e){var t,i,s,o,u,h;const m=Cc(Rc(e)),p=(t=m.apiKey)!==null&&t!==void 0?t:null,_=(i=m.oobCode)!==null&&i!==void 0?i:null,v=wU((s=m.mode)!==null&&s!==void 0?s:null);we(p&&_&&v,"argument-error"),this.apiKey=p,this.operation=v,this.code=_,this.continueUrl=(o=m.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(u=m.lang)!==null&&u!==void 0?u:null,this.tenantId=(h=m.tenantId)!==null&&h!==void 0?h:null}static parseLink(e){const t=bU(e);try{return new Hv(t)}catch{return null}}}/**
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
 */class fu{constructor(){this.providerId=fu.PROVIDER_ID}static credential(e,t){return ih._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Hv.parseLink(t);return we(i,"argument-error"),ih._fromEmailAndCode(e,i.code,i.tenantId)}}fu.PROVIDER_ID="password";fu.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fu.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class PI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Sh extends PI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ea extends Sh{constructor(){super("facebook.com")}static credential(e){return Ao._fromParams({providerId:ea.PROVIDER_ID,signInMethod:ea.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ea.credentialFromTaggedObject(e)}static credentialFromError(e){return ea.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ea.credential(e.oauthAccessToken)}catch{return null}}}ea.FACEBOOK_SIGN_IN_METHOD="facebook.com";ea.PROVIDER_ID="facebook.com";/**
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
 */class ta extends Sh{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ao._fromParams({providerId:ta.PROVIDER_ID,signInMethod:ta.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ta.credentialFromTaggedObject(e)}static credentialFromError(e){return ta.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return ta.credential(t,i)}catch{return null}}}ta.GOOGLE_SIGN_IN_METHOD="google.com";ta.PROVIDER_ID="google.com";/**
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
 */class na extends Sh{constructor(){super("github.com")}static credential(e){return Ao._fromParams({providerId:na.PROVIDER_ID,signInMethod:na.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return na.credentialFromTaggedObject(e)}static credentialFromError(e){return na.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return na.credential(e.oauthAccessToken)}catch{return null}}}na.GITHUB_SIGN_IN_METHOD="github.com";na.PROVIDER_ID="github.com";/**
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
 */class ia extends Sh{constructor(){super("twitter.com")}static credential(e,t){return Ao._fromParams({providerId:ia.PROVIDER_ID,signInMethod:ia.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ia.credentialFromTaggedObject(e)}static credentialFromError(e){return ia.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return ia.credential(t,i)}catch{return null}}}ia.TWITTER_SIGN_IN_METHOD="twitter.com";ia.PROVIDER_ID="twitter.com";/**
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
 */async function SU(n,e){return bh(n,"POST","/v1/accounts:signUp",Aa(n,e))}/**
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
 */class Co{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const o=await Wi._fromIdTokenResponse(e,i,s),u=TS(i);return new Co({user:o,providerId:u,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=TS(i);return new Co({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function TS(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class em extends xi{constructor(e,t,i,s){var o;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,em.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new em(e,t,i,s)}}function MI(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?em._fromErrorAndOperation(n,o,e,i):o})}async function AU(n,e,t=!1){const i=await Xl(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Co._forOperation(n,"link",i)}/**
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
 */async function CU(n,e,t=!1){const{auth:i}=n;if(Gn(i.app))return Promise.reject(cs(i));const s="reauthenticate";try{const o=await Xl(n,MI(i,s,e,n),t);we(o.idToken,i,"internal-error");const u=Bv(o.idToken);we(u,i,"internal-error");const{sub:h}=u;return we(n.uid===h,i,"user-mismatch"),Co._forOperation(n,s,o)}catch(o){throw o?.code==="auth/user-not-found"&&Zi(i,"user-mismatch"),o}}/**
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
 */async function LI(n,e,t=!1){if(Gn(n.app))return Promise.reject(cs(n));const i="signIn",s=await MI(n,i,e),o=await Co._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(o.user),o}async function RU(n,e){return LI(ko(n),e)}/**
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
 */async function VI(n){const e=ko(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Gv(n,e,t){if(Gn(n.app))return Promise.reject(cs(n));const i=ko(n),u=await uy(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",SU).catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&VI(n),m}),h=await Co._fromIdTokenResponse(i,"signIn",u);return await i._updateCurrentUser(h.user),h}function IU(n,e,t){return Gn(n.app)?Promise.reject(cs(n)):RU(lt(n),fu.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&VI(n),i})}/**
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
 */async function NU(n,e){return ws(n,"POST","/v1/accounts:update",e)}/**
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
 */async function DU(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=lt(n),o={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},u=await Xl(i,NU(i.auth,o));i.displayName=u.displayName||null,i.photoURL=u.photoUrl||null;const h=i.providerData.find(({providerId:m})=>m==="password");h&&(h.displayName=i.displayName,h.photoURL=i.photoURL),await i._updateTokensIfNecessary(u)}function OU(n,e,t,i){return lt(n).onIdTokenChanged(e,t,i)}function xU(n,e,t){return lt(n).beforeAuthStateChanged(e,t)}const tm="__sak";/**
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
 */class UI{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(tm,"1"),this.storage.removeItem(tm),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const kU=1e3,PU=10;class jI extends UI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=NI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,h,m)=>{this.notifyListeners(u,m)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const u=this.storage.getItem(i);!t&&this.localCache[i]===u||this.notifyListeners(i,u)},o=this.storage.getItem(i);Z4()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,PU):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},kU)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}jI.type="LOCAL";const MU=jI;/**
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
 */class FI extends UI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}FI.type="SESSION";const BI=FI;/**
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
 */function LU(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Lm{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new Lm(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:o}=t.data,u=this.handlersMap[s];if(!u?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const h=Array.from(u).map(async p=>p(t.origin,o)),m=await LU(h);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lm.receivers=[];/**
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
 */function Yv(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class VU{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,u;return new Promise((h,m)=>{const p=Yv("",20);s.port1.start();const _=setTimeout(()=>{m(new Error("unsupported_event"))},i);u={messageChannel:s,onMessage(v){const T=v;if(T.data.eventId===p)switch(T.data.status){case"ack":clearTimeout(_),o=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),h(T.data.response);break;default:clearTimeout(_),clearTimeout(o),m(new Error("invalid_response"));break}}},this.handlers.add(u),s.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:p,data:t},[s.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function wr(){return window}function UU(n){wr().location.href=n}/**
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
 */function zI(){return typeof wr().WorkerGlobalScope<"u"&&typeof wr().importScripts=="function"}async function jU(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function FU(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function BU(){return zI()?self:null}/**
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
 */const qI="firebaseLocalStorageDb",zU=1,nm="firebaseLocalStorage",HI="fbase_key";class Ah{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Vm(n,e){return n.transaction([nm],e?"readwrite":"readonly").objectStore(nm)}function qU(){const n=indexedDB.deleteDatabase(qI);return new Ah(n).toPromise()}function cy(){const n=indexedDB.open(qI,zU);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(nm,{keyPath:HI})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(nm)?e(i):(i.close(),await qU(),e(await cy()))})})}async function wS(n,e,t){const i=Vm(n,!0).put({[HI]:e,value:t});return new Ah(i).toPromise()}async function HU(n,e){const t=Vm(n,!1).get(e),i=await new Ah(t).toPromise();return i===void 0?null:i.value}function bS(n,e){const t=Vm(n,!0).delete(e);return new Ah(t).toPromise()}const GU=800,YU=3;class GI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cy(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>YU)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lm._getInstance(BU()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await jU(),!this.activeServiceWorker)return;this.sender=new VU(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||FU()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cy();return await wS(e,tm,"1"),await bS(e,tm),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>wS(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>HU(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>bS(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=Vm(s,!1).getAll();return new Ah(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),GU)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}GI.type="LOCAL";const $U=GI;new wh(3e4,6e4);/**
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
 */function WU(n,e){return e?os(e):(we(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class $v extends qv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ql(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ql(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ql(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function KU(n){return LI(n.auth,new $v(n),n.bypassAuthState)}function QU(n){const{auth:e,user:t}=n;return we(t,e,"internal-error"),CU(t,new $v(n),n.bypassAuthState)}async function XU(n){const{auth:e,user:t}=n;return we(t,e,"internal-error"),AU(t,new $v(n),n.bypassAuthState)}/**
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
 */class YI{constructor(e,t,i,s,o=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:o,error:u,type:h}=e;if(u){this.reject(u);return}const m={auth:this.auth,requestUri:t,sessionId:i,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(m))}catch(p){this.reject(p)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return KU;case"linkViaPopup":case"linkViaRedirect":return XU;case"reauthViaPopup":case"reauthViaRedirect":return QU;default:Zi(this.auth,"internal-error")}}resolve(e){ps(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ps(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ZU=new wh(2e3,1e4);class Ll extends YI{constructor(e,t,i,s,o){super(e,t,s,o),this.provider=i,this.authWindow=null,this.pollId=null,Ll.currentPopupAction&&Ll.currentPopupAction.cancel(),Ll.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return we(e,this.auth,"internal-error"),e}async onExecution(){ps(this.filter.length===1,"Popup operations only handle one event");const e=Yv();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Tr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Tr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ll.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ZU.get())};e()}}Ll.currentPopupAction=null;/**
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
 */const JU="pendingRedirect",bd=new Map;class e6 extends YI{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=bd.get(this.auth._key());if(!e){try{const i=await t6(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}bd.set(this.auth._key(),e)}return this.bypassAuthState||bd.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function t6(n,e){const t=r6(e),i=i6(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function n6(n,e){bd.set(n._key(),e)}function i6(n){return os(n._redirectPersistence)}function r6(n){return wd(JU,n.config.apiKey,n.name)}async function s6(n,e,t=!1){if(Gn(n.app))return Promise.reject(cs(n));const i=ko(n),s=WU(i,e),u=await new e6(i,s,t).execute();return u&&!t&&(delete u.user._redirectEventId,await i._persistUserIfCurrent(u.user),await i._setRedirectUser(null,e)),u}/**
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
 */const a6=10*60*1e3;class o6{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!l6(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!$I(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Tr(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=a6&&this.cachedEventUids.clear(),this.cachedEventUids.has(SS(e))}saveEventToCache(e){this.cachedEventUids.add(SS(e)),this.lastProcessedEventTime=Date.now()}}function SS(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function $I({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function l6(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $I(n);default:return!1}}/**
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
 */async function u6(n,e={}){return ws(n,"GET","/v1/projects",e)}/**
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
 */const c6=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,h6=/^https?/;async function f6(n){if(n.config.emulator)return;const{authorizedDomains:e}=await u6(n);for(const t of e)try{if(d6(t))return}catch{}Zi(n,"unauthorized-domain")}function d6(n){const e=oy(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===i}if(!h6.test(t))return!1;if(c6.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const m6=new wh(3e4,6e4);function AS(){const n=wr().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function p6(n){return new Promise((e,t)=>{var i,s,o;function u(){AS(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{AS(),t(Tr(n,"network-request-failed"))},timeout:m6.get()})}if(!((s=(i=wr().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((o=wr().gapi)===null||o===void 0)&&o.load)u();else{const h=oU("iframefcb");return wr()[h]=()=>{gapi.load?u():t(Tr(n,"network-request-failed"))},OI(`${aU()}?onload=${h}`).catch(m=>t(m))}}).catch(e=>{throw Sd=null,e})}let Sd=null;function g6(n){return Sd=Sd||p6(n),Sd}/**
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
 */const _6=new wh(5e3,15e3),y6="__/auth/iframe",v6="emulator/auth/iframe",E6={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},T6=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function w6(n){const e=n.config;we(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Fv(e,v6):`https://${n.config.authDomain}/${y6}`,i={apiKey:e.apiKey,appName:n.name,v:Sa},s=T6.get(n.config.apiHost);s&&(i.eid=s);const o=n._getFrameworks();return o.length&&(i.fw=o.join(",")),`${t}?${lu(i).slice(1)}`}async function b6(n){const e=await g6(n),t=wr().gapi;return we(t,n,"internal-error"),e.open({where:document.body,url:w6(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:E6,dontclear:!0},i=>new Promise(async(s,o)=>{await i.restyle({setHideOnLeave:!1});const u=Tr(n,"network-request-failed"),h=wr().setTimeout(()=>{o(u)},_6.get());function m(){wr().clearTimeout(h),s(i)}i.ping(m).then(m,()=>{o(u)})}))}/**
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
 */const S6={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},A6=500,C6=600,R6="_blank",I6="http://localhost";class CS{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function N6(n,e,t,i=A6,s=C6){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),u=Math.max((window.screen.availWidth-i)/2,0).toString();let h="";const m=Object.assign(Object.assign({},S6),{width:i.toString(),height:s.toString(),top:o,left:u}),p=kn().toLowerCase();t&&(h=SI(p)?R6:t),wI(p)&&(e=e||I6,m.scrollbars="yes");const _=Object.entries(m).reduce((T,[C,O])=>`${T}${C}=${O},`,"");if(X4(p)&&h!=="_self")return D6(e||"",h),new CS(null);const v=window.open(e||"",h,_);we(v,n,"popup-blocked");try{v.focus()}catch{}return new CS(v)}function D6(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const O6="__/auth/handler",x6="emulator/auth/handler",k6=encodeURIComponent("fac");async function RS(n,e,t,i,s,o){we(n.config.authDomain,n,"auth-domain-config-required"),we(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Sa,eventId:s};if(e instanceof PI){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",q_(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,v]of Object.entries({}))u[_]=v}if(e instanceof Sh){const _=e.getScopes().filter(v=>v!=="");_.length>0&&(u.scopes=_.join(","))}n.tenantId&&(u.tid=n.tenantId);const h=u;for(const _ of Object.keys(h))h[_]===void 0&&delete h[_];const m=await n._getAppCheckToken(),p=m?`#${k6}=${encodeURIComponent(m)}`:"";return`${P6(n)}?${lu(h).slice(1)}${p}`}function P6({config:n}){return n.emulator?Fv(n,x6):`https://${n.authDomain}/${O6}`}/**
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
 */const D_="webStorageSupport";class M6{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=BI,this._completeRedirectFn=s6,this._overrideRedirectResult=n6}async _openPopup(e,t,i,s){var o;ps((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const u=await RS(e,t,i,oy(),s);return N6(e,u,Yv())}async _openRedirect(e,t,i,s){await this._originValidation(e);const o=await RS(e,t,i,oy(),s);return UU(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:o}=this.eventManagers[t];return s?Promise.resolve(s):(ps(o,"If manager is not set, promise should be"),o)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await b6(e),i=new o6(e);return t.register("authEvent",s=>(we(s?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(D_,{type:D_},s=>{var o;const u=(o=s?.[0])===null||o===void 0?void 0:o[D_];u!==void 0&&t(!!u),Zi(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=f6(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return NI()||bI()||zv()}}const L6=M6;var IS="@firebase/auth",NS="1.10.8";/**
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
 */class V6{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){we(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function U6(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function j6(n){Oi(new hi("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:u,authDomain:h}=i.options;we(u&&!u.includes(":"),"invalid-api-key",{appName:i.name});const m={apiKey:u,authDomain:h,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:DI(n)},p=new iU(i,s,o,m);return dU(p,t),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Oi(new hi("auth-internal",e=>{const t=ko(e.getProvider("auth").getImmediate());return(i=>new V6(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),xn(IS,NS,U6(n)),xn(IS,NS,"esm2017")}/**
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
 */const F6=5*60,B6=pC("authIdTokenMaxAge")||F6;let DS=null;const z6=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>B6)return;const s=t?.token;DS!==s&&(DS=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function q6(n=ph()){const e=Es(n,"auth");if(e.isInitialized())return e.getImmediate();const t=fU(n,{popupRedirectResolver:L6,persistence:[$U,MU,BI]}),i=pC("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(i,location.origin);if(location.origin===o.origin){const u=z6(o.toString());xU(t,u,()=>u(t.currentUser)),OU(t,h=>u(h))}}const s=dC("auth");return s&&mU(t,`http://${s}`),t}function H6(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}rU({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const o=Tr("internal-error");o.customData=s,t(o)},i.type="text/javascript",i.charset="UTF-8",H6().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});j6("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI="firebasestorage.googleapis.com",KI="storageBucket",G6=2*60*1e3,Y6=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends xi{constructor(e,t,i=0){super(O_(e),`Firebase Storage: ${t} (${O_(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Pt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return O_(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var kt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(kt||(kt={}));function O_(n){return"storage/"+n}function Wv(){const n="An unknown error occurred, please check the error payload for server response.";return new Pt(kt.UNKNOWN,n)}function $6(n){return new Pt(kt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function W6(n){return new Pt(kt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function K6(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Pt(kt.UNAUTHENTICATED,n)}function Q6(){return new Pt(kt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function X6(n){return new Pt(kt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Z6(){return new Pt(kt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function J6(){return new Pt(kt.CANCELED,"User canceled the upload/download.")}function ej(n){return new Pt(kt.INVALID_URL,"Invalid URL '"+n+"'.")}function tj(n){return new Pt(kt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function nj(){return new Pt(kt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+KI+"' property when initializing the app?")}function ij(){return new Pt(kt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function rj(){return new Pt(kt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function sj(n){return new Pt(kt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function hy(n){return new Pt(kt.INVALID_ARGUMENT,n)}function QI(){return new Pt(kt.APP_DELETED,"The Firebase app was deleted.")}function aj(n){return new Pt(kt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Bc(n,e){return new Pt(kt.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Ac(n){throw new Pt(kt.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=li.makeFromUrl(e,t)}catch{return new li(e,"")}if(i.path==="")return i;throw tj(e)}static makeFromUrl(e,t){let i=null;const s="([A-Za-z0-9.\\-_]+)";function o(re){re.path.charAt(re.path.length-1)==="/"&&(re.path_=re.path_.slice(0,-1))}const u="(/(.*))?$",h=new RegExp("^gs://"+s+u,"i"),m={bucket:1,path:3};function p(re){re.path_=decodeURIComponent(re.path)}const _="v[A-Za-z0-9_]+",v=t.replace(/[.]/g,"\\."),T="(/([^?#]*).*)?$",C=new RegExp(`^https?://${v}/${_}/b/${s}/o${T}`,"i"),O={bucket:1,path:3},P=t===WI?"(?:storage.googleapis.com|storage.cloud.google.com)":t,L="([^?#]*)",H=new RegExp(`^https?://${P}/${s}/${L}`,"i"),W=[{regex:h,indices:m,postModify:o},{regex:C,indices:O,postModify:p},{regex:H,indices:{bucket:1,path:2},postModify:p}];for(let re=0;re<W.length;re++){const K=W[re],ae=K.regex.exec(e);if(ae){const N=ae[K.indices.bucket];let R=ae[K.indices.path];R||(R=""),i=new li(N,R),K.postModify(i);break}}if(i==null)throw ej(e);return i}}class oj{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lj(n,e,t){let i=1,s=null,o=null,u=!1,h=0;function m(){return h===2}let p=!1;function _(...L){p||(p=!0,e.apply(null,L))}function v(L){s=setTimeout(()=>{s=null,n(C,m())},L)}function T(){o&&clearTimeout(o)}function C(L,...H){if(p){T();return}if(L){T(),_.call(null,L,...H);return}if(m()||u){T(),_.call(null,L,...H);return}i<64&&(i*=2);let W;h===1?(h=2,W=0):W=(i+Math.random())*1e3,v(W)}let O=!1;function P(L){O||(O=!0,T(),!p&&(s!==null?(L||(h=2),clearTimeout(s),v(0)):L||(h=1)))}return v(0),o=setTimeout(()=>{u=!0,P(!0)},t),P}function uj(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cj(n){return n!==void 0}function hj(n){return typeof n=="object"&&!Array.isArray(n)}function Kv(n){return typeof n=="string"||n instanceof String}function OS(n){return Qv()&&n instanceof Blob}function Qv(){return typeof Blob<"u"}function xS(n,e,t,i){if(i<e)throw hy(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw hy(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function XI(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const s=e(i)+"="+e(n[i]);t=t+s+"&"}return t=t.slice(0,-1),t}var _o;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(_o||(_o={}));/**
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
 */function fj(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,o=e.indexOf(n)!==-1;return t||s||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dj{constructor(e,t,i,s,o,u,h,m,p,_,v,T=!0,C=!1){this.url_=e,this.method_=t,this.headers_=i,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=u,this.callback_=h,this.errorCallback_=m,this.timeout_=p,this.progressCallback_=_,this.connectionFactory_=v,this.retry=T,this.isUsingEmulator=C,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((O,P)=>{this.resolve_=O,this.reject_=P,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new od(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const u=h=>{const m=h.loaded,p=h.lengthComputable?h.total:-1;this.progressCallback_!==null&&this.progressCallback_(m,p)};this.progressCallback_!==null&&o.addUploadProgressListener(u),o.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(u),this.pendingConnection_=null;const h=o.getErrorCode()===_o.NO_ERROR,m=o.getStatus();if(!h||fj(m,this.additionalRetryCodes_)&&this.retry){const _=o.getErrorCode()===_o.ABORT;i(!1,new od(!1,null,_));return}const p=this.successCodes_.indexOf(m)!==-1;i(!0,new od(p,o))})},t=(i,s)=>{const o=this.resolve_,u=this.reject_,h=s.connection;if(s.wasSuccessCode)try{const m=this.callback_(h,h.getResponse());cj(m)?o(m):o()}catch(m){u(m)}else if(h!==null){const m=Wv();m.serverResponse=h.getErrorText(),this.errorCallback_?u(this.errorCallback_(h,m)):u(m)}else if(s.canceled){const m=this.appDelete_?QI():J6();u(m)}else{const m=Z6();u(m)}};this.canceled_?t(!1,new od(!1,null,!0)):this.backoffId_=lj(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&uj(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class od{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function mj(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function pj(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function gj(n,e){e&&(n["X-Firebase-GMPID"]=e)}function _j(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function yj(n,e,t,i,s,o,u=!0,h=!1){const m=XI(n.urlParams),p=n.url+m,_=Object.assign({},n.headers);return gj(_,e),mj(_,t),pj(_,o),_j(_,i),new dj(p,n.method,_,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,u,h)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vj(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Ej(...n){const e=vj();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(Qv())return new Blob(n);throw new Pt(kt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Tj(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function wj(n){if(typeof atob>"u")throw sj("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class x_{constructor(e,t){this.data=e,this.contentType=t||null}}function bj(n,e){switch(n){case Er.RAW:return new x_(ZI(e));case Er.BASE64:case Er.BASE64URL:return new x_(JI(n,e));case Er.DATA_URL:return new x_(Aj(e),Cj(e))}throw Wv()}function ZI(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const o=i,u=n.charCodeAt(++t);i=65536|(o&1023)<<10|u&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function Sj(n){let e;try{e=decodeURIComponent(n)}catch{throw Bc(Er.DATA_URL,"Malformed data URL.")}return ZI(e)}function JI(n,e){switch(n){case Er.BASE64:{const s=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(s||o)throw Bc(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Er.BASE64URL:{const s=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(s||o)throw Bc(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=wj(e)}catch(s){throw s.message.includes("polyfill")?s:Bc(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i}class e1{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Bc(Er.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=Rj(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function Aj(n){const e=new e1(n);return e.base64?JI(Er.BASE64,e.rest):Sj(e.rest)}function Cj(n){return new e1(n).contentType}function Rj(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,t){let i=0,s="";OS(e)?(this.data_=e,i=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(OS(this.data_)){const i=this.data_,s=Tj(i,e,t);return s===null?null:new ra(s)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new ra(i,!0)}}static getBlob(...e){if(Qv()){const t=e.map(i=>i instanceof ra?i.data_:i);return new ra(Ej.apply(null,t))}else{const t=e.map(u=>Kv(u)?bj(Er.RAW,u).data:u.data_);let i=0;t.forEach(u=>{i+=u.byteLength});const s=new Uint8Array(i);let o=0;return t.forEach(u=>{for(let h=0;h<u.length;h++)s[o++]=u[h]}),new ra(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t1(n){let e;try{e=JSON.parse(n)}catch{return null}return hj(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ij(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function Nj(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function n1(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dj(n,e){return e}class jn{constructor(e,t,i,s){this.server=e,this.local=t||e,this.writable=!!i,this.xform=s||Dj}}let ld=null;function Oj(n){return!Kv(n)||n.length<2?n:n1(n)}function i1(){if(ld)return ld;const n=[];n.push(new jn("bucket")),n.push(new jn("generation")),n.push(new jn("metageneration")),n.push(new jn("name","fullPath",!0));function e(o,u){return Oj(u)}const t=new jn("name");t.xform=e,n.push(t);function i(o,u){return u!==void 0?Number(u):u}const s=new jn("size");return s.xform=i,n.push(s),n.push(new jn("timeCreated")),n.push(new jn("updated")),n.push(new jn("md5Hash",null,!0)),n.push(new jn("cacheControl",null,!0)),n.push(new jn("contentDisposition",null,!0)),n.push(new jn("contentEncoding",null,!0)),n.push(new jn("contentLanguage",null,!0)),n.push(new jn("contentType",null,!0)),n.push(new jn("metadata","customMetadata",!0)),ld=n,ld}function xj(n,e){function t(){const i=n.bucket,s=n.fullPath,o=new li(i,s);return e._makeStorageReference(o)}Object.defineProperty(n,"ref",{get:t})}function kj(n,e,t){const i={};i.type="file";const s=t.length;for(let o=0;o<s;o++){const u=t[o];i[u.local]=u.xform(i,e[u.server])}return xj(i,n),i}function r1(n,e,t){const i=t1(e);return i===null?null:kj(n,i,t)}function Pj(n,e,t,i){const s=t1(e);if(s===null||!Kv(s.downloadTokens))return null;const o=s.downloadTokens;if(o.length===0)return null;const u=encodeURIComponent;return o.split(",").map(p=>{const _=n.bucket,v=n.fullPath,T="/b/"+u(_)+"/o/"+u(v),C=Xv(T,t,i),O=XI({alt:"media",token:p});return C+O})[0]}function Mj(n,e){const t={},i=e.length;for(let s=0;s<i;s++){const o=e[s];o.writable&&(t[o.server]=n[o.local])}return JSON.stringify(t)}class s1{constructor(e,t,i,s){this.url=e,this.method=t,this.handler=i,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a1(n){if(!n)throw Wv()}function Lj(n,e){function t(i,s){const o=r1(n,s,e);return a1(o!==null),o}return t}function Vj(n,e){function t(i,s){const o=r1(n,s,e);return a1(o!==null),Pj(o,s,n.host,n._protocol)}return t}function o1(n){function e(t,i){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=Q6():s=K6():t.getStatus()===402?s=W6(n.bucket):t.getStatus()===403?s=X6(n.path):s=i,s.status=t.getStatus(),s.serverResponse=i.serverResponse,s}return e}function Uj(n){const e=o1(n);function t(i,s){let o=e(i,s);return i.getStatus()===404&&(o=$6(n.path)),o.serverResponse=s.serverResponse,o}return t}function jj(n,e,t){const i=e.fullServerUrl(),s=Xv(i,n.host,n._protocol),o="GET",u=n.maxOperationRetryTime,h=new s1(s,o,Vj(n,t),u);return h.errorHandler=Uj(e),h}function Fj(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function Bj(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=Fj(null,e)),i}function zj(n,e,t,i,s){const o=e.bucketOnlyServerUrl(),u={"X-Goog-Upload-Protocol":"multipart"};function h(){let W="";for(let re=0;re<2;re++)W=W+Math.random().toString().slice(2);return W}const m=h();u["Content-Type"]="multipart/related; boundary="+m;const p=Bj(e,i,s),_=Mj(p,t),v="--"+m+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+_+`\r
--`+m+`\r
Content-Type: `+p.contentType+`\r
\r
`,T=`\r
--`+m+"--",C=ra.getBlob(v,i,T);if(C===null)throw ij();const O={name:p.fullPath},P=Xv(o,n.host,n._protocol),L="POST",H=n.maxUploadRetryTime,J=new s1(P,L,Lj(n,t),H);return J.urlParams=O,J.headers=u,J.body=C.uploadData(),J.errorHandler=o1(e),J}class qj{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=_o.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=_o.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=_o.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,s,o){if(this.sent_)throw Ac("cannot .send() more than once");if(Or(e)&&i&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),o!==void 0)for(const u in o)o.hasOwnProperty(u)&&this.xhr_.setRequestHeader(u,o[u].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ac("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ac("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ac("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ac("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Hj extends qj{initXhr(){this.xhr_.responseType="text"}}function l1(){return new Hj}/**
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
 */class Ro{constructor(e,t){this._service=e,t instanceof li?this._location=t:this._location=li.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ro(e,t)}get root(){const e=new li(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return n1(this._location.path)}get storage(){return this._service}get parent(){const e=Ij(this._location.path);if(e===null)return null;const t=new li(this._location.bucket,e);return new Ro(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw aj(e)}}function Gj(n,e,t){n._throwIfRoot("uploadBytes");const i=zj(n.storage,n._location,i1(),new ra(e,!0),t);return n.storage.makeRequestWithTokens(i,l1).then(s=>({metadata:s,ref:n}))}function Yj(n){n._throwIfRoot("getDownloadURL");const e=jj(n.storage,n._location,i1());return n.storage.makeRequestWithTokens(e,l1).then(t=>{if(t===null)throw rj();return t})}function $j(n,e){const t=Nj(n._location.path,e),i=new li(n._location.bucket,t);return new Ro(n.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wj(n){return/^[A-Za-z]+:\/\//.test(n)}function Kj(n,e){return new Ro(n,e)}function u1(n,e){if(n instanceof Zv){const t=n;if(t._bucket==null)throw nj();const i=new Ro(t,t._bucket);return e!=null?u1(i,e):i}else return e!==void 0?$j(n,e):n}function Qj(n,e){if(e&&Wj(e)){if(n instanceof Zv)return Kj(n,e);throw hy("To use ref(service, url), the first argument must be a Storage instance.")}else return u1(n,e)}function kS(n,e){const t=e?.[KI];return t==null?null:li.makeFromBucketSpec(t,n)}function Xj(n,e,t,i={}){n.host=`${e}:${t}`;const s=Or(e);s&&(Tm(`https://${n.host}/b`),wm("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:o}=i;o&&(n._overrideAuthToken=typeof o=="string"?o:Jy(o,n.app.options.projectId))}class Zv{constructor(e,t,i,s,o,u=!1){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=s,this._firebaseVersion=o,this._isUsingEmulator=u,this._bucket=null,this._host=WI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=G6,this._maxUploadRetryTime=Y6,this._requests=new Set,s!=null?this._bucket=li.makeFromBucketSpec(s,this._host):this._bucket=kS(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=li.makeFromBucketSpec(this._url,e):this._bucket=kS(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){xS("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){xS("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Gn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ro(this,e)}_makeRequest(e,t,i,s,o=!0){if(this._deleted)return new oj(QI());{const u=yj(e,this._appId,i,s,t,this._firebaseVersion,o,this._isUsingEmulator);return this._requests.add(u),u.getPromise().then(()=>this._requests.delete(u),()=>this._requests.delete(u)),u}}async makeRequestWithTokens(e,t){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,s).getPromise()}}const PS="@firebase/storage",MS="0.13.14";/**
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
 */const c1="storage";function Zj(n,e,t){return n=lt(n),Gj(n,e,t)}function Jj(n){return n=lt(n),Yj(n)}function e3(n,e){return n=lt(n),Qj(n,e)}function t3(n=ph(),e){n=lt(n);const i=Es(n,c1).getImmediate({identifier:e}),s=Zy("storage");return s&&n3(i,...s),i}function n3(n,e,t,i={}){Xj(n,e,t,i)}function i3(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Zv(t,i,s,e,Sa)}function r3(){Oi(new hi(c1,i3,"PUBLIC").setMultipleInstances(!0)),xn(PS,MS,""),xn(PS,MS,"esm2017")}r3();var LS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ca,h1;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,R){function I(){}I.prototype=R.prototype,N.D=R.prototype,N.prototype=new I,N.prototype.constructor=N,N.C=function(M,U,j){for(var x=Array(arguments.length-2),Et=2;Et<arguments.length;Et++)x[Et-2]=arguments[Et];return R.prototype[U].apply(M,x)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(N,R,I){I||(I=0);var M=Array(16);if(typeof R=="string")for(var U=0;16>U;++U)M[U]=R.charCodeAt(I++)|R.charCodeAt(I++)<<8|R.charCodeAt(I++)<<16|R.charCodeAt(I++)<<24;else for(U=0;16>U;++U)M[U]=R[I++]|R[I++]<<8|R[I++]<<16|R[I++]<<24;R=N.g[0],I=N.g[1],U=N.g[2];var j=N.g[3],x=R+(j^I&(U^j))+M[0]+3614090360&4294967295;R=I+(x<<7&4294967295|x>>>25),x=j+(U^R&(I^U))+M[1]+3905402710&4294967295,j=R+(x<<12&4294967295|x>>>20),x=U+(I^j&(R^I))+M[2]+606105819&4294967295,U=j+(x<<17&4294967295|x>>>15),x=I+(R^U&(j^R))+M[3]+3250441966&4294967295,I=U+(x<<22&4294967295|x>>>10),x=R+(j^I&(U^j))+M[4]+4118548399&4294967295,R=I+(x<<7&4294967295|x>>>25),x=j+(U^R&(I^U))+M[5]+1200080426&4294967295,j=R+(x<<12&4294967295|x>>>20),x=U+(I^j&(R^I))+M[6]+2821735955&4294967295,U=j+(x<<17&4294967295|x>>>15),x=I+(R^U&(j^R))+M[7]+4249261313&4294967295,I=U+(x<<22&4294967295|x>>>10),x=R+(j^I&(U^j))+M[8]+1770035416&4294967295,R=I+(x<<7&4294967295|x>>>25),x=j+(U^R&(I^U))+M[9]+2336552879&4294967295,j=R+(x<<12&4294967295|x>>>20),x=U+(I^j&(R^I))+M[10]+4294925233&4294967295,U=j+(x<<17&4294967295|x>>>15),x=I+(R^U&(j^R))+M[11]+2304563134&4294967295,I=U+(x<<22&4294967295|x>>>10),x=R+(j^I&(U^j))+M[12]+1804603682&4294967295,R=I+(x<<7&4294967295|x>>>25),x=j+(U^R&(I^U))+M[13]+4254626195&4294967295,j=R+(x<<12&4294967295|x>>>20),x=U+(I^j&(R^I))+M[14]+2792965006&4294967295,U=j+(x<<17&4294967295|x>>>15),x=I+(R^U&(j^R))+M[15]+1236535329&4294967295,I=U+(x<<22&4294967295|x>>>10),x=R+(U^j&(I^U))+M[1]+4129170786&4294967295,R=I+(x<<5&4294967295|x>>>27),x=j+(I^U&(R^I))+M[6]+3225465664&4294967295,j=R+(x<<9&4294967295|x>>>23),x=U+(R^I&(j^R))+M[11]+643717713&4294967295,U=j+(x<<14&4294967295|x>>>18),x=I+(j^R&(U^j))+M[0]+3921069994&4294967295,I=U+(x<<20&4294967295|x>>>12),x=R+(U^j&(I^U))+M[5]+3593408605&4294967295,R=I+(x<<5&4294967295|x>>>27),x=j+(I^U&(R^I))+M[10]+38016083&4294967295,j=R+(x<<9&4294967295|x>>>23),x=U+(R^I&(j^R))+M[15]+3634488961&4294967295,U=j+(x<<14&4294967295|x>>>18),x=I+(j^R&(U^j))+M[4]+3889429448&4294967295,I=U+(x<<20&4294967295|x>>>12),x=R+(U^j&(I^U))+M[9]+568446438&4294967295,R=I+(x<<5&4294967295|x>>>27),x=j+(I^U&(R^I))+M[14]+3275163606&4294967295,j=R+(x<<9&4294967295|x>>>23),x=U+(R^I&(j^R))+M[3]+4107603335&4294967295,U=j+(x<<14&4294967295|x>>>18),x=I+(j^R&(U^j))+M[8]+1163531501&4294967295,I=U+(x<<20&4294967295|x>>>12),x=R+(U^j&(I^U))+M[13]+2850285829&4294967295,R=I+(x<<5&4294967295|x>>>27),x=j+(I^U&(R^I))+M[2]+4243563512&4294967295,j=R+(x<<9&4294967295|x>>>23),x=U+(R^I&(j^R))+M[7]+1735328473&4294967295,U=j+(x<<14&4294967295|x>>>18),x=I+(j^R&(U^j))+M[12]+2368359562&4294967295,I=U+(x<<20&4294967295|x>>>12),x=R+(I^U^j)+M[5]+4294588738&4294967295,R=I+(x<<4&4294967295|x>>>28),x=j+(R^I^U)+M[8]+2272392833&4294967295,j=R+(x<<11&4294967295|x>>>21),x=U+(j^R^I)+M[11]+1839030562&4294967295,U=j+(x<<16&4294967295|x>>>16),x=I+(U^j^R)+M[14]+4259657740&4294967295,I=U+(x<<23&4294967295|x>>>9),x=R+(I^U^j)+M[1]+2763975236&4294967295,R=I+(x<<4&4294967295|x>>>28),x=j+(R^I^U)+M[4]+1272893353&4294967295,j=R+(x<<11&4294967295|x>>>21),x=U+(j^R^I)+M[7]+4139469664&4294967295,U=j+(x<<16&4294967295|x>>>16),x=I+(U^j^R)+M[10]+3200236656&4294967295,I=U+(x<<23&4294967295|x>>>9),x=R+(I^U^j)+M[13]+681279174&4294967295,R=I+(x<<4&4294967295|x>>>28),x=j+(R^I^U)+M[0]+3936430074&4294967295,j=R+(x<<11&4294967295|x>>>21),x=U+(j^R^I)+M[3]+3572445317&4294967295,U=j+(x<<16&4294967295|x>>>16),x=I+(U^j^R)+M[6]+76029189&4294967295,I=U+(x<<23&4294967295|x>>>9),x=R+(I^U^j)+M[9]+3654602809&4294967295,R=I+(x<<4&4294967295|x>>>28),x=j+(R^I^U)+M[12]+3873151461&4294967295,j=R+(x<<11&4294967295|x>>>21),x=U+(j^R^I)+M[15]+530742520&4294967295,U=j+(x<<16&4294967295|x>>>16),x=I+(U^j^R)+M[2]+3299628645&4294967295,I=U+(x<<23&4294967295|x>>>9),x=R+(U^(I|~j))+M[0]+4096336452&4294967295,R=I+(x<<6&4294967295|x>>>26),x=j+(I^(R|~U))+M[7]+1126891415&4294967295,j=R+(x<<10&4294967295|x>>>22),x=U+(R^(j|~I))+M[14]+2878612391&4294967295,U=j+(x<<15&4294967295|x>>>17),x=I+(j^(U|~R))+M[5]+4237533241&4294967295,I=U+(x<<21&4294967295|x>>>11),x=R+(U^(I|~j))+M[12]+1700485571&4294967295,R=I+(x<<6&4294967295|x>>>26),x=j+(I^(R|~U))+M[3]+2399980690&4294967295,j=R+(x<<10&4294967295|x>>>22),x=U+(R^(j|~I))+M[10]+4293915773&4294967295,U=j+(x<<15&4294967295|x>>>17),x=I+(j^(U|~R))+M[1]+2240044497&4294967295,I=U+(x<<21&4294967295|x>>>11),x=R+(U^(I|~j))+M[8]+1873313359&4294967295,R=I+(x<<6&4294967295|x>>>26),x=j+(I^(R|~U))+M[15]+4264355552&4294967295,j=R+(x<<10&4294967295|x>>>22),x=U+(R^(j|~I))+M[6]+2734768916&4294967295,U=j+(x<<15&4294967295|x>>>17),x=I+(j^(U|~R))+M[13]+1309151649&4294967295,I=U+(x<<21&4294967295|x>>>11),x=R+(U^(I|~j))+M[4]+4149444226&4294967295,R=I+(x<<6&4294967295|x>>>26),x=j+(I^(R|~U))+M[11]+3174756917&4294967295,j=R+(x<<10&4294967295|x>>>22),x=U+(R^(j|~I))+M[2]+718787259&4294967295,U=j+(x<<15&4294967295|x>>>17),x=I+(j^(U|~R))+M[9]+3951481745&4294967295,N.g[0]=N.g[0]+R&4294967295,N.g[1]=N.g[1]+(U+(x<<21&4294967295|x>>>11))&4294967295,N.g[2]=N.g[2]+U&4294967295,N.g[3]=N.g[3]+j&4294967295}i.prototype.u=function(N,R){R===void 0&&(R=N.length);for(var I=R-this.blockSize,M=this.B,U=this.h,j=0;j<R;){if(U==0)for(;j<=I;)s(this,N,j),j+=this.blockSize;if(typeof N=="string"){for(;j<R;)if(M[U++]=N.charCodeAt(j++),U==this.blockSize){s(this,M),U=0;break}}else for(;j<R;)if(M[U++]=N[j++],U==this.blockSize){s(this,M),U=0;break}}this.h=U,this.o+=R},i.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var R=1;R<N.length-8;++R)N[R]=0;var I=8*this.o;for(R=N.length-8;R<N.length;++R)N[R]=I&255,I/=256;for(this.u(N),N=Array(16),R=I=0;4>R;++R)for(var M=0;32>M;M+=8)N[I++]=this.g[R]>>>M&255;return N};function o(N,R){var I=h;return Object.prototype.hasOwnProperty.call(I,N)?I[N]:I[N]=R(N)}function u(N,R){this.h=R;for(var I=[],M=!0,U=N.length-1;0<=U;U--){var j=N[U]|0;M&&j==R||(I[U]=j,M=!1)}this.g=I}var h={};function m(N){return-128<=N&&128>N?o(N,function(R){return new u([R|0],0>R?-1:0)}):new u([N|0],0>N?-1:0)}function p(N){if(isNaN(N)||!isFinite(N))return v;if(0>N)return L(p(-N));for(var R=[],I=1,M=0;N>=I;M++)R[M]=N/I|0,I*=4294967296;return new u(R,0)}function _(N,R){if(N.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(N.charAt(0)=="-")return L(_(N.substring(1),R));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=p(Math.pow(R,8)),M=v,U=0;U<N.length;U+=8){var j=Math.min(8,N.length-U),x=parseInt(N.substring(U,U+j),R);8>j?(j=p(Math.pow(R,j)),M=M.j(j).add(p(x))):(M=M.j(I),M=M.add(p(x)))}return M}var v=m(0),T=m(1),C=m(16777216);n=u.prototype,n.m=function(){if(P(this))return-L(this).m();for(var N=0,R=1,I=0;I<this.g.length;I++){var M=this.i(I);N+=(0<=M?M:4294967296+M)*R,R*=4294967296}return N},n.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(O(this))return"0";if(P(this))return"-"+L(this).toString(N);for(var R=p(Math.pow(N,6)),I=this,M="";;){var U=re(I,R).g;I=H(I,U.j(R));var j=((0<I.g.length?I.g[0]:I.h)>>>0).toString(N);if(I=U,O(I))return j+M;for(;6>j.length;)j="0"+j;M=j+M}},n.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function O(N){if(N.h!=0)return!1;for(var R=0;R<N.g.length;R++)if(N.g[R]!=0)return!1;return!0}function P(N){return N.h==-1}n.l=function(N){return N=H(this,N),P(N)?-1:O(N)?0:1};function L(N){for(var R=N.g.length,I=[],M=0;M<R;M++)I[M]=~N.g[M];return new u(I,~N.h).add(T)}n.abs=function(){return P(this)?L(this):this},n.add=function(N){for(var R=Math.max(this.g.length,N.g.length),I=[],M=0,U=0;U<=R;U++){var j=M+(this.i(U)&65535)+(N.i(U)&65535),x=(j>>>16)+(this.i(U)>>>16)+(N.i(U)>>>16);M=x>>>16,j&=65535,x&=65535,I[U]=x<<16|j}return new u(I,I[I.length-1]&-2147483648?-1:0)};function H(N,R){return N.add(L(R))}n.j=function(N){if(O(this)||O(N))return v;if(P(this))return P(N)?L(this).j(L(N)):L(L(this).j(N));if(P(N))return L(this.j(L(N)));if(0>this.l(C)&&0>N.l(C))return p(this.m()*N.m());for(var R=this.g.length+N.g.length,I=[],M=0;M<2*R;M++)I[M]=0;for(M=0;M<this.g.length;M++)for(var U=0;U<N.g.length;U++){var j=this.i(M)>>>16,x=this.i(M)&65535,Et=N.i(U)>>>16,dt=N.i(U)&65535;I[2*M+2*U]+=x*dt,J(I,2*M+2*U),I[2*M+2*U+1]+=j*dt,J(I,2*M+2*U+1),I[2*M+2*U+1]+=x*Et,J(I,2*M+2*U+1),I[2*M+2*U+2]+=j*Et,J(I,2*M+2*U+2)}for(M=0;M<R;M++)I[M]=I[2*M+1]<<16|I[2*M];for(M=R;M<2*R;M++)I[M]=0;return new u(I,0)};function J(N,R){for(;(N[R]&65535)!=N[R];)N[R+1]+=N[R]>>>16,N[R]&=65535,R++}function W(N,R){this.g=N,this.h=R}function re(N,R){if(O(R))throw Error("division by zero");if(O(N))return new W(v,v);if(P(N))return R=re(L(N),R),new W(L(R.g),L(R.h));if(P(R))return R=re(N,L(R)),new W(L(R.g),R.h);if(30<N.g.length){if(P(N)||P(R))throw Error("slowDivide_ only works with positive integers.");for(var I=T,M=R;0>=M.l(N);)I=K(I),M=K(M);var U=ae(I,1),j=ae(M,1);for(M=ae(M,2),I=ae(I,2);!O(M);){var x=j.add(M);0>=x.l(N)&&(U=U.add(I),j=x),M=ae(M,1),I=ae(I,1)}return R=H(N,U.j(R)),new W(U,R)}for(U=v;0<=N.l(R);){for(I=Math.max(1,Math.floor(N.m()/R.m())),M=Math.ceil(Math.log(I)/Math.LN2),M=48>=M?1:Math.pow(2,M-48),j=p(I),x=j.j(R);P(x)||0<x.l(N);)I-=M,j=p(I),x=j.j(R);O(j)&&(j=T),U=U.add(j),N=H(N,x)}return new W(U,N)}n.A=function(N){return re(this,N).h},n.and=function(N){for(var R=Math.max(this.g.length,N.g.length),I=[],M=0;M<R;M++)I[M]=this.i(M)&N.i(M);return new u(I,this.h&N.h)},n.or=function(N){for(var R=Math.max(this.g.length,N.g.length),I=[],M=0;M<R;M++)I[M]=this.i(M)|N.i(M);return new u(I,this.h|N.h)},n.xor=function(N){for(var R=Math.max(this.g.length,N.g.length),I=[],M=0;M<R;M++)I[M]=this.i(M)^N.i(M);return new u(I,this.h^N.h)};function K(N){for(var R=N.g.length+1,I=[],M=0;M<R;M++)I[M]=N.i(M)<<1|N.i(M-1)>>>31;return new u(I,N.h)}function ae(N,R){var I=R>>5;R%=32;for(var M=N.g.length-I,U=[],j=0;j<M;j++)U[j]=0<R?N.i(j+I)>>>R|N.i(j+I+1)<<32-R:N.i(j+I);return new u(U,N.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,h1=i,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=p,u.fromString=_,ca=u}).apply(typeof LS<"u"?LS:typeof self<"u"?self:typeof window<"u"?window:{});var ud=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var f1,Nc,d1,Ad,fy,m1,p1,g1;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(f,y,E){return f==Array.prototype||f==Object.prototype||(f[y]=E.value),f};function t(f){f=[typeof globalThis=="object"&&globalThis,f,typeof window=="object"&&window,typeof self=="object"&&self,typeof ud=="object"&&ud];for(var y=0;y<f.length;++y){var E=f[y];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var i=t(this);function s(f,y){if(y)e:{var E=i;f=f.split(".");for(var A=0;A<f.length-1;A++){var B=f[A];if(!(B in E))break e;E=E[B]}f=f[f.length-1],A=E[f],y=y(A),y!=A&&y!=null&&e(E,f,{configurable:!0,writable:!0,value:y})}}function o(f,y){f instanceof String&&(f+="");var E=0,A=!1,B={next:function(){if(!A&&E<f.length){var Q=E++;return{value:y(Q,f[Q]),done:!1}}return A=!0,{done:!0,value:void 0}}};return B[Symbol.iterator]=function(){return B},B}s("Array.prototype.values",function(f){return f||function(){return o(this,function(y,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function m(f){var y=typeof f;return y=y!="object"?y:f?Array.isArray(f)?"array":y:"null",y=="array"||y=="object"&&typeof f.length=="number"}function p(f){var y=typeof f;return y=="object"&&f!=null||y=="function"}function _(f,y,E){return f.call.apply(f.bind,arguments)}function v(f,y,E){if(!f)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var B=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(B,A),f.apply(y,B)}}return function(){return f.apply(y,arguments)}}function T(f,y,E){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:v,T.apply(null,arguments)}function C(f,y){var E=Array.prototype.slice.call(arguments,1);return function(){var A=E.slice();return A.push.apply(A,arguments),f.apply(this,A)}}function O(f,y){function E(){}E.prototype=y.prototype,f.aa=y.prototype,f.prototype=new E,f.prototype.constructor=f,f.Qb=function(A,B,Q){for(var le=Array(arguments.length-2),He=2;He<arguments.length;He++)le[He-2]=arguments[He];return y.prototype[B].apply(A,le)}}function P(f){const y=f.length;if(0<y){const E=Array(y);for(let A=0;A<y;A++)E[A]=f[A];return E}return[]}function L(f,y){for(let E=1;E<arguments.length;E++){const A=arguments[E];if(m(A)){const B=f.length||0,Q=A.length||0;f.length=B+Q;for(let le=0;le<Q;le++)f[B+le]=A[le]}else f.push(A)}}class H{constructor(y,E){this.i=y,this.j=E,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function J(f){return/^[\s\xa0]*$/.test(f)}function W(){var f=h.navigator;return f&&(f=f.userAgent)?f:""}function re(f){return re[" "](f),f}re[" "]=function(){};var K=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function ae(f,y,E){for(const A in f)y.call(E,f[A],A,f)}function N(f,y){for(const E in f)y.call(void 0,f[E],E,f)}function R(f){const y={};for(const E in f)y[E]=f[E];return y}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(f,y){let E,A;for(let B=1;B<arguments.length;B++){A=arguments[B];for(E in A)f[E]=A[E];for(let Q=0;Q<I.length;Q++)E=I[Q],Object.prototype.hasOwnProperty.call(A,E)&&(f[E]=A[E])}}function U(f){var y=1;f=f.split(":");const E=[];for(;0<y&&f.length;)E.push(f.shift()),y--;return f.length&&E.push(f.join(":")),E}function j(f){h.setTimeout(()=>{throw f},0)}function x(){var f=xe;let y=null;return f.g&&(y=f.g,f.g=f.g.next,f.g||(f.h=null),y.next=null),y}class Et{constructor(){this.h=this.g=null}add(y,E){const A=dt.get();A.set(y,E),this.h?this.h.next=A:this.g=A,this.h=A}}var dt=new H(()=>new X,f=>f.reset());class X{constructor(){this.next=this.g=this.h=null}set(y,E){this.h=y,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let he,pe=!1,xe=new Et,k=()=>{const f=h.Promise.resolve(void 0);he=()=>{f.then(te)}};var te=()=>{for(var f;f=x();){try{f.h.call(f.g)}catch(E){j(E)}var y=dt;y.j(f),100>y.h&&(y.h++,f.next=y.g,y.g=f)}pe=!1};function ce(){this.s=this.s,this.C=this.C}ce.prototype.s=!1,ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function oe(f,y){this.type=f,this.g=this.target=y,this.defaultPrevented=!1}oe.prototype.h=function(){this.defaultPrevented=!0};var ge=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var f=!1,y=Object.defineProperty({},"passive",{get:function(){f=!0}});try{const E=()=>{};h.addEventListener("test",E,y),h.removeEventListener("test",E,y)}catch{}return f}();function Ne(f,y){if(oe.call(this,f?f.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,f){var E=this.type=f.type,A=f.changedTouches&&f.changedTouches.length?f.changedTouches[0]:null;if(this.target=f.target||f.srcElement,this.g=y,y=f.relatedTarget){if(K){e:{try{re(y.nodeName);var B=!0;break e}catch{}B=!1}B||(y=null)}}else E=="mouseover"?y=f.fromElement:E=="mouseout"&&(y=f.toElement);this.relatedTarget=y,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0),this.button=f.button,this.key=f.key||"",this.ctrlKey=f.ctrlKey,this.altKey=f.altKey,this.shiftKey=f.shiftKey,this.metaKey=f.metaKey,this.pointerId=f.pointerId||0,this.pointerType=typeof f.pointerType=="string"?f.pointerType:ve[f.pointerType]||"",this.state=f.state,this.i=f,f.defaultPrevented&&Ne.aa.h.call(this)}}O(Ne,oe);var ve={2:"touch",3:"pen",4:"mouse"};Ne.prototype.h=function(){Ne.aa.h.call(this);var f=this.i;f.preventDefault?f.preventDefault():f.returnValue=!1};var Tt="closure_listenable_"+(1e6*Math.random()|0),We=0;function Yt(f,y,E,A,B){this.listener=f,this.proxy=null,this.src=y,this.type=E,this.capture=!!A,this.ha=B,this.key=++We,this.da=this.fa=!1}function fi(f){f.da=!0,f.listener=null,f.proxy=null,f.src=null,f.ha=null}function Qn(f){this.src=f,this.g={},this.h=0}Qn.prototype.add=function(f,y,E,A,B){var Q=f.toString();f=this.g[Q],f||(f=this.g[Q]=[],this.h++);var le=ki(f,y,A,B);return-1<le?(y=f[le],E||(y.fa=!1)):(y=new Yt(y,this.src,Q,!!A,B),y.fa=E,f.push(y)),y};function di(f,y){var E=y.type;if(E in f.g){var A=f.g[E],B=Array.prototype.indexOf.call(A,y,void 0),Q;(Q=0<=B)&&Array.prototype.splice.call(A,B,1),Q&&(fi(y),f.g[E].length==0&&(delete f.g[E],f.h--))}}function ki(f,y,E,A){for(var B=0;B<f.length;++B){var Q=f[B];if(!Q.da&&Q.listener==y&&Q.capture==!!E&&Q.ha==A)return B}return-1}var ut="closure_lm_"+(1e6*Math.random()|0),Pi={};function fn(f,y,E,A,B){if(Array.isArray(y)){for(var Q=0;Q<y.length;Q++)fn(f,y[Q],E,A,B);return null}return E=jo(E),f&&f[Tt]?f.K(y,E,p(A)?!!A.capture:!1,B):dn(f,y,E,!1,A,B)}function dn(f,y,E,A,B,Q){if(!y)throw Error("Invalid event type");var le=p(B)?!!B.capture:!!B,He=kr(f);if(He||(f[ut]=He=new Qn(f)),E=He.add(y,E,A,le,Q),E.proxy)return E;if(A=Uo(),E.proxy=A,A.src=f,A.listener=E,f.addEventListener)ge||(B=le),B===void 0&&(B=!1),f.addEventListener(y.toString(),A,B);else if(f.attachEvent)f.attachEvent(xr(y.toString()),A);else if(f.addListener&&f.removeListener)f.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return E}function Uo(){function f(E){return y.call(f.src,f.listener,E)}const y=vu;return f}function Ss(f,y,E,A,B){if(Array.isArray(y))for(var Q=0;Q<y.length;Q++)Ss(f,y[Q],E,A,B);else A=p(A)?!!A.capture:!!A,E=jo(E),f&&f[Tt]?(f=f.i,y=String(y).toString(),y in f.g&&(Q=f.g[y],E=ki(Q,E,A,B),-1<E&&(fi(Q[E]),Array.prototype.splice.call(Q,E,1),Q.length==0&&(delete f.g[y],f.h--)))):f&&(f=kr(f))&&(y=f.g[y.toString()],f=-1,y&&(f=ki(y,E,A,B)),(E=-1<f?y[f]:null)&&As(E))}function As(f){if(typeof f!="number"&&f&&!f.da){var y=f.src;if(y&&y[Tt])di(y.i,f);else{var E=f.type,A=f.proxy;y.removeEventListener?y.removeEventListener(E,A,f.capture):y.detachEvent?y.detachEvent(xr(E),A):y.addListener&&y.removeListener&&y.removeListener(A),(E=kr(y))?(di(E,f),E.h==0&&(E.src=null,y[ut]=null)):fi(f)}}}function xr(f){return f in Pi?Pi[f]:Pi[f]="on"+f}function vu(f,y){if(f.da)f=!0;else{y=new Ne(y,this);var E=f.listener,A=f.ha||f.src;f.fa&&As(f),f=E.call(A,y)}return f}function kr(f){return f=f[ut],f instanceof Qn?f:null}var xa="__closure_events_fn_"+(1e9*Math.random()>>>0);function jo(f){return typeof f=="function"?f:(f[xa]||(f[xa]=function(y){return f.handleEvent(y)}),f[xa])}function wt(){ce.call(this),this.i=new Qn(this),this.M=this,this.F=null}O(wt,ce),wt.prototype[Tt]=!0,wt.prototype.removeEventListener=function(f,y,E,A){Ss(this,f,y,E,A)};function Ze(f,y){var E,A=f.F;if(A)for(E=[];A;A=A.F)E.push(A);if(f=f.M,A=y.type||y,typeof y=="string")y=new oe(y,f);else if(y instanceof oe)y.target=y.target||f;else{var B=y;y=new oe(A,f),M(y,B)}if(B=!0,E)for(var Q=E.length-1;0<=Q;Q--){var le=y.g=E[Q];B=Pn(le,A,!0,y)&&B}if(le=y.g=f,B=Pn(le,A,!0,y)&&B,B=Pn(le,A,!1,y)&&B,E)for(Q=0;Q<E.length;Q++)le=y.g=E[Q],B=Pn(le,A,!1,y)&&B}wt.prototype.N=function(){if(wt.aa.N.call(this),this.i){var f=this.i,y;for(y in f.g){for(var E=f.g[y],A=0;A<E.length;A++)fi(E[A]);delete f.g[y],f.h--}}this.F=null},wt.prototype.K=function(f,y,E,A){return this.i.add(String(f),y,!1,E,A)},wt.prototype.L=function(f,y,E,A){return this.i.add(String(f),y,!0,E,A)};function Pn(f,y,E,A){if(y=f.i.g[String(y)],!y)return!0;y=y.concat();for(var B=!0,Q=0;Q<y.length;++Q){var le=y[Q];if(le&&!le.da&&le.capture==E){var He=le.listener,$t=le.ha||le.src;le.fa&&di(f.i,le),B=He.call($t,A)!==!1&&B}}return B&&!A.defaultPrevented}function jt(f,y,E){if(typeof f=="function")E&&(f=T(f,E));else if(f&&typeof f.handleEvent=="function")f=T(f.handleEvent,f);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:h.setTimeout(f,y||0)}function ka(f){f.g=jt(()=>{f.g=null,f.i&&(f.i=!1,ka(f))},f.l);const y=f.h;f.h=null,f.m.apply(null,y)}class Fo extends ce{constructor(y,E){super(),this.m=y,this.l=E,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:ka(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pr(f){ce.call(this),this.h=f,this.g={}}O(Pr,ce);var mi=[];function er(f){ae(f.g,function(y,E){this.g.hasOwnProperty(E)&&As(y)},f),f.g={}}Pr.prototype.N=function(){Pr.aa.N.call(this),er(this)},Pr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xn=h.JSON.stringify,Mr=h.JSON.parse,tr=class{stringify(f){return h.JSON.stringify(f,void 0)}parse(f){return h.JSON.parse(f,void 0)}};function Lr(){}Lr.prototype.h=null;function Pa(f){return f.h||(f.h=f.i())}function Cs(){}var Mi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function pi(){oe.call(this,"d")}O(pi,oe);function Ft(){oe.call(this,"c")}O(Ft,oe);var gt={},nr=null;function Ke(){return nr=nr||new wt}gt.La="serverreachability";function mn(f){oe.call(this,gt.La,f)}O(mn,oe);function ir(f){const y=Ke();Ze(y,new mn(y))}gt.STAT_EVENT="statevent";function Rs(f,y){oe.call(this,gt.STAT_EVENT,f),this.stat=y}O(Rs,oe);function ct(f){const y=Ke();Ze(y,new Rs(y,f))}gt.Ma="timingevent";function Nt(f,y){oe.call(this,gt.Ma,f),this.size=y}O(Nt,oe);function bt(f,y){if(typeof f!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){f()},y)}function pn(){this.g=!0}pn.prototype.xa=function(){this.g=!1};function Vr(f,y,E,A,B,Q){f.info(function(){if(f.g)if(Q)for(var le="",He=Q.split("&"),$t=0;$t<He.length;$t++){var Ge=He[$t].split("=");if(1<Ge.length){var rn=Ge[0];Ge=Ge[1];var Wt=rn.split("_");le=2<=Wt.length&&Wt[1]=="type"?le+(rn+"="+Ge+"&"):le+(rn+"=redacted&")}}else le=null;else le=Q;return"XMLHTTP REQ ("+A+") [attempt "+B+"]: "+y+`
`+E+`
`+le})}function Ma(f,y,E,A,B,Q,le){f.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+B+"]: "+y+`
`+E+`
`+Q+" "+le})}function gi(f,y,E,A){f.info(function(){return"XMLHTTP TEXT ("+y+"): "+Li(f,E)+(A?" "+A:"")})}function Bo(f,y){f.info(function(){return"TIMEOUT: "+y})}pn.prototype.info=function(){};function Li(f,y){if(!f.g)return y;if(!y)return null;try{var E=JSON.parse(y);if(E){for(f=0;f<E.length;f++)if(Array.isArray(E[f])){var A=E[f];if(!(2>A.length)){var B=A[1];if(Array.isArray(B)&&!(1>B.length)){var Q=B[0];if(Q!="noop"&&Q!="stop"&&Q!="close")for(var le=1;le<B.length;le++)B[le]=""}}}}return Xn(E)}catch{return y}}var Vi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ui={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},_i;function Ce(){}O(Ce,Lr),Ce.prototype.g=function(){return new XMLHttpRequest},Ce.prototype.i=function(){return{}},_i=new Ce;function Me(f,y,E,A){this.j=f,this.i=y,this.l=E,this.R=A||1,this.U=new Pr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new De}function De(){this.i=null,this.g="",this.h=!1}var gn={},tn={};function Mn(f,y,E){f.L=1,f.v=Fa(Zn(y)),f.m=E,f.P=!0,ji(f,null)}function ji(f,y){f.F=Date.now(),La(f),f.A=Zn(f.v);var E=f.A,A=f.R;Array.isArray(A)||(A=[String(A)]),Au(E.i,"t",A),f.C=0,E=f.j.J,f.h=new De,f.g=Zh(f.j,E?y:null,!f.m),0<f.O&&(f.M=new Fo(T(f.Y,f,f.g),f.O)),y=f.U,E=f.g,A=f.ca;var B="readystatechange";Array.isArray(B)||(B&&(mi[0]=B.toString()),B=mi);for(var Q=0;Q<B.length;Q++){var le=fn(E,B[Q],A||y.handleEvent,!1,y.h||y);if(!le)break;y.g[le.key]=le}y=f.H?R(f.H):{},f.m?(f.u||(f.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",f.g.ea(f.A,f.u,f.m,y)):(f.u="GET",f.g.ea(f.A,f.u,null,y)),ir(),Vr(f.i,f.u,f.A,f.l,f.R,f.m)}Me.prototype.ca=function(f){f=f.target;const y=this.M;y&&Ti(f)==3?y.j():this.Y(f)},Me.prototype.Y=function(f){try{if(f==this.g)e:{const Wt=Ti(this.g);var y=this.g.Ba();const Gr=this.g.Z();if(!(3>Wt)&&(Wt!=3||this.g&&(this.h.h||this.g.oa()||Hh(this.g)))){this.J||Wt!=4||y==7||(y==8||0>=Gr?ir(3):ir(2)),Is(this);var E=this.g.Z();this.X=E;t:if(zo(this)){var A=Hh(this.g);f="";var B=A.length,Q=Ti(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){_n(this),rr(this);var le="";break t}this.h.i=new h.TextDecoder}for(y=0;y<B;y++)this.h.h=!0,f+=this.h.i.decode(A[y],{stream:!(Q&&y==B-1)});A.length=0,this.h.g+=f,this.C=0,le=this.h.g}else le=this.g.oa();if(this.o=E==200,Ma(this.i,this.u,this.A,this.l,this.R,Wt,E),this.o){if(this.T&&!this.K){t:{if(this.g){var He,$t=this.g;if((He=$t.g?$t.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!J(He)){var Ge=He;break t}}Ge=null}if(E=Ge)gi(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Va(this,E);else{this.o=!1,this.s=3,ct(12),_n(this),rr(this);break e}}if(this.P){E=!0;let yn;for(;!this.J&&this.C<le.length;)if(yn=Uh(this,le),yn==tn){Wt==4&&(this.s=4,ct(14),E=!1),gi(this.i,this.l,null,"[Incomplete Response]");break}else if(yn==gn){this.s=4,ct(15),gi(this.i,this.l,le,"[Invalid Chunk]"),E=!1;break}else gi(this.i,this.l,yn,null),Va(this,yn);if(zo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Wt!=4||le.length!=0||this.h.h||(this.s=1,ct(16),E=!1),this.o=this.o&&E,!E)gi(this.i,this.l,le,"[Invalid Chunked Response]"),_n(this),rr(this);else if(0<le.length&&!this.W){this.W=!0;var rn=this.j;rn.g==this&&rn.ba&&!rn.M&&(rn.j.info("Great, no buffering proxy detected. Bytes received: "+le.length),Wa(rn),rn.M=!0,ct(11))}}else gi(this.i,this.l,le,null),Va(this,le);Wt==4&&_n(this),this.o&&!this.J&&(Wt==4?Kh(this.j,this):(this.o=!1,La(this)))}else mp(this.g),E==400&&0<le.indexOf("Unknown SID")?(this.s=3,ct(12)):(this.s=0,ct(13)),_n(this),rr(this)}}}catch{}finally{}};function zo(f){return f.g?f.u=="GET"&&f.L!=2&&f.j.Ca:!1}function Uh(f,y){var E=f.C,A=y.indexOf(`
`,E);return A==-1?tn:(E=Number(y.substring(E,A)),isNaN(E)?gn:(A+=1,A+E>y.length?tn:(y=y.slice(A,A+E),f.C=A+E,y)))}Me.prototype.cancel=function(){this.J=!0,_n(this)};function La(f){f.S=Date.now()+f.I,jh(f,f.I)}function jh(f,y){if(f.B!=null)throw Error("WatchDog timer not null");f.B=bt(T(f.ba,f),y)}function Is(f){f.B&&(h.clearTimeout(f.B),f.B=null)}Me.prototype.ba=function(){this.B=null;const f=Date.now();0<=f-this.S?(Bo(this.i,this.A),this.L!=2&&(ir(),ct(17)),_n(this),this.s=2,rr(this)):jh(this,this.S-f)};function rr(f){f.j.G==0||f.J||Kh(f.j,f)}function _n(f){Is(f);var y=f.M;y&&typeof y.ma=="function"&&y.ma(),f.M=null,er(f.U),f.g&&(y=f.g,f.g=null,y.abort(),y.ma())}function Va(f,y){try{var E=f.j;if(E.G!=0&&(E.g==f||Eu(E.h,f))){if(!f.K&&Eu(E.h,f)&&E.G==3){try{var A=E.Da.g.parse(y)}catch{A=null}if(Array.isArray(A)&&A.length==3){var B=A;if(B[0]==0){e:if(!E.u){if(E.g)if(E.g.F+3e3<f.F)el(E),Zo(E);else break e;Du(E),ct(18)}}else E.za=B[1],0<E.za-E.T&&37500>B[2]&&E.F&&E.v==0&&!E.C&&(E.C=bt(T(E.Za,E),6e3));if(1>=Ho(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else Hr(E,11)}else if((f.K||E.g==f)&&el(E),!J(y))for(B=E.Da.g.parse(y),y=0;y<B.length;y++){let Ge=B[y];if(E.T=Ge[0],Ge=Ge[1],E.G==2)if(Ge[0]=="c"){E.K=Ge[1],E.ia=Ge[2];const rn=Ge[3];rn!=null&&(E.la=rn,E.j.info("VER="+E.la));const Wt=Ge[4];Wt!=null&&(E.Aa=Wt,E.j.info("SVER="+E.Aa));const Gr=Ge[5];Gr!=null&&typeof Gr=="number"&&0<Gr&&(A=1.5*Gr,E.L=A,E.j.info("backChannelRequestTimeoutMs_="+A)),A=E;const yn=f.g;if(yn){const hr=yn.g?yn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(hr){var Q=A.h;Q.g||hr.indexOf("spdy")==-1&&hr.indexOf("quic")==-1&&hr.indexOf("h2")==-1||(Q.j=Q.l,Q.g=new Set,Q.h&&(Go(Q,Q.h),Q.h=null))}if(A.D){const xu=yn.g?yn.g.getResponseHeader("X-HTTP-Session-Id"):null;xu&&(A.ya=xu,rt(A.I,A.D,xu))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-f.F,E.j.info("Handshake RTT: "+E.R+"ms")),A=E;var le=f;if(A.qa=Xh(A,A.J?A.ia:null,A.W),le.K){Ln(A.h,le);var He=le,$t=A.L;$t&&(He.I=$t),He.B&&(Is(He),La(He)),A.g=le}else $h(A);0<E.i.length&&Jo(E)}else Ge[0]!="stop"&&Ge[0]!="close"||Hr(E,7);else E.G==3&&(Ge[0]=="stop"||Ge[0]=="close"?Ge[0]=="stop"?Hr(E,7):Iu(E):Ge[0]!="noop"&&E.l&&E.l.ta(Ge),E.v=0)}}ir(4)}catch{}}var Fh=class{constructor(f,y){this.g=f,this.map=y}};function Ur(f){this.l=f||10,h.PerformanceNavigationTiming?(f=h.performance.getEntriesByType("navigation"),f=0<f.length&&(f[0].nextHopProtocol=="hq"||f[0].nextHopProtocol=="h2")):f=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=f?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function qo(f){return f.h?!0:f.g?f.g.size>=f.j:!1}function Ho(f){return f.h?1:f.g?f.g.size:0}function Eu(f,y){return f.h?f.h==y:f.g?f.g.has(y):!1}function Go(f,y){f.g?f.g.add(y):f.h=y}function Ln(f,y){f.h&&f.h==y?f.h=null:f.g&&f.g.has(y)&&f.g.delete(y)}Ur.prototype.cancel=function(){if(this.i=Tu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const f of this.g.values())f.cancel();this.g.clear()}};function Tu(f){if(f.h!=null)return f.i.concat(f.h.D);if(f.g!=null&&f.g.size!==0){let y=f.i;for(const E of f.g.values())y=y.concat(E.D);return y}return P(f.i)}function cp(f){if(f.V&&typeof f.V=="function")return f.V();if(typeof Map<"u"&&f instanceof Map||typeof Set<"u"&&f instanceof Set)return Array.from(f.values());if(typeof f=="string")return f.split("");if(m(f)){for(var y=[],E=f.length,A=0;A<E;A++)y.push(f[A]);return y}y=[],E=0;for(A in f)y[E++]=f[A];return y}function Yo(f){if(f.na&&typeof f.na=="function")return f.na();if(!f.V||typeof f.V!="function"){if(typeof Map<"u"&&f instanceof Map)return Array.from(f.keys());if(!(typeof Set<"u"&&f instanceof Set)){if(m(f)||typeof f=="string"){var y=[];f=f.length;for(var E=0;E<f;E++)y.push(E);return y}y=[],E=0;for(const A in f)y[E++]=A;return y}}}function wu(f,y){if(f.forEach&&typeof f.forEach=="function")f.forEach(y,void 0);else if(m(f)||typeof f=="string")Array.prototype.forEach.call(f,y,void 0);else for(var E=Yo(f),A=cp(f),B=A.length,Q=0;Q<B;Q++)y.call(void 0,A[Q],E&&E[Q],f)}var Ua=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hp(f,y){if(f){f=f.split("&");for(var E=0;E<f.length;E++){var A=f[E].indexOf("="),B=null;if(0<=A){var Q=f[E].substring(0,A);B=f[E].substring(A+1)}else Q=f[E];y(Q,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function Bt(f){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,f instanceof Bt){this.h=f.h,ja(this,f.j),this.o=f.o,this.g=f.g,Ns(this,f.s),this.l=f.l;var y=f.i,E=new Fr;E.i=y.i,y.g&&(E.g=new Map(y.g),E.h=y.h),jr(this,E),this.m=f.m}else f&&(y=String(f).match(Ua))?(this.h=!1,ja(this,y[1]||"",!0),this.o=yi(y[2]||""),this.g=yi(y[3]||"",!0),Ns(this,y[4]),this.l=yi(y[5]||"",!0),jr(this,y[6]||"",!0),this.m=yi(y[7]||"")):(this.h=!1,this.i=new Fr(null,this.h))}Bt.prototype.toString=function(){var f=[],y=this.j;y&&f.push(Ba(y,bu,!0),":");var E=this.g;return(E||y=="file")&&(f.push("//"),(y=this.o)&&f.push(Ba(y,bu,!0),"@"),f.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&f.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&f.push("/"),f.push(Ba(E,E.charAt(0)=="/"?fp:Su,!0))),(E=this.i.toString())&&f.push("?",E),(E=this.m)&&f.push("#",Ba(E,$o)),f.join("")};function Zn(f){return new Bt(f)}function ja(f,y,E){f.j=E?yi(y,!0):y,f.j&&(f.j=f.j.replace(/:$/,""))}function Ns(f,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);f.s=y}else f.s=null}function jr(f,y,E){y instanceof Fr?(f.i=y,zh(f.i,f.h)):(E||(y=Ba(y,dp)),f.i=new Fr(y,f.h))}function rt(f,y,E){f.i.set(y,E)}function Fa(f){return rt(f,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),f}function yi(f,y){return f?y?decodeURI(f.replace(/%25/g,"%2525")):decodeURIComponent(f):""}function Ba(f,y,E){return typeof f=="string"?(f=encodeURI(f).replace(y,Bh),E&&(f=f.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f):null}function Bh(f){return f=f.charCodeAt(0),"%"+(f>>4&15).toString(16)+(f&15).toString(16)}var bu=/[#\/\?@]/g,Su=/[#\?:]/g,fp=/[#\?]/g,dp=/[#\?@]/g,$o=/#/g;function Fr(f,y){this.h=this.g=null,this.i=f||null,this.j=!!y}function vi(f){f.g||(f.g=new Map,f.h=0,f.i&&hp(f.i,function(y,E){f.add(decodeURIComponent(y.replace(/\+/g," ")),E)}))}n=Fr.prototype,n.add=function(f,y){vi(this),this.i=null,f=sr(this,f);var E=this.g.get(f);return E||this.g.set(f,E=[]),E.push(y),this.h+=1,this};function Br(f,y){vi(f),y=sr(f,y),f.g.has(y)&&(f.i=null,f.h-=f.g.get(y).length,f.g.delete(y))}function zr(f,y){return vi(f),y=sr(f,y),f.g.has(y)}n.forEach=function(f,y){vi(this),this.g.forEach(function(E,A){E.forEach(function(B){f.call(y,B,A,this)},this)},this)},n.na=function(){vi(this);const f=Array.from(this.g.values()),y=Array.from(this.g.keys()),E=[];for(let A=0;A<y.length;A++){const B=f[A];for(let Q=0;Q<B.length;Q++)E.push(y[A])}return E},n.V=function(f){vi(this);let y=[];if(typeof f=="string")zr(this,f)&&(y=y.concat(this.g.get(sr(this,f))));else{f=Array.from(this.g.values());for(let E=0;E<f.length;E++)y=y.concat(f[E])}return y},n.set=function(f,y){return vi(this),this.i=null,f=sr(this,f),zr(this,f)&&(this.h-=this.g.get(f).length),this.g.set(f,[y]),this.h+=1,this},n.get=function(f,y){return f?(f=this.V(f),0<f.length?String(f[0]):y):y};function Au(f,y,E){Br(f,y),0<E.length&&(f.i=null,f.g.set(sr(f,y),P(E)),f.h+=E.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const f=[],y=Array.from(this.g.keys());for(var E=0;E<y.length;E++){var A=y[E];const Q=encodeURIComponent(String(A)),le=this.V(A);for(A=0;A<le.length;A++){var B=Q;le[A]!==""&&(B+="="+encodeURIComponent(String(le[A]))),f.push(B)}}return this.i=f.join("&")};function sr(f,y){return y=String(y),f.j&&(y=y.toLowerCase()),y}function zh(f,y){y&&!f.j&&(vi(f),f.i=null,f.g.forEach(function(E,A){var B=A.toLowerCase();A!=B&&(Br(this,A),Au(this,B,E))},f)),f.j=y}function za(f,y){const E=new pn;if(h.Image){const A=new Image;A.onload=C(Ei,E,"TestLoadImage: loaded",!0,y,A),A.onerror=C(Ei,E,"TestLoadImage: error",!1,y,A),A.onabort=C(Ei,E,"TestLoadImage: abort",!1,y,A),A.ontimeout=C(Ei,E,"TestLoadImage: timeout",!1,y,A),h.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=f}else y(!1)}function Fi(f,y){const E=new pn,A=new AbortController,B=setTimeout(()=>{A.abort(),Ei(E,"TestPingServer: timeout",!1,y)},1e4);fetch(f,{signal:A.signal}).then(Q=>{clearTimeout(B),Q.ok?Ei(E,"TestPingServer: ok",!0,y):Ei(E,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(B),Ei(E,"TestPingServer: error",!1,y)})}function Ei(f,y,E,A,B){try{B&&(B.onload=null,B.onerror=null,B.onabort=null,B.ontimeout=null),A(E)}catch{}}function qa(){this.g=new tr}function ar(f,y,E){const A=E||"";try{wu(f,function(B,Q){let le=B;p(B)&&(le=Xn(B)),y.push(A+Q+"="+encodeURIComponent(le))})}catch(B){throw y.push(A+"type="+encodeURIComponent("_badmap")),B}}function Ds(f){this.l=f.Ub||null,this.j=f.eb||!1}O(Ds,Lr),Ds.prototype.g=function(){return new qr(this.l,this.j)},Ds.prototype.i=function(f){return function(){return f}}({});function qr(f,y){wt.call(this),this.D=f,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}O(qr,wt),n=qr.prototype,n.open=function(f,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=f,this.A=y,this.readyState=1,lr(this)},n.send=function(f){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};f&&(y.body=f),(this.D||h).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,or(this)),this.readyState=0},n.Sa=function(f){if(this.g&&(this.l=f,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=f.headers,this.readyState=2,lr(this)),this.g&&(this.readyState=3,lr(this),this.g)))if(this.responseType==="arraybuffer")f.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in f){if(this.j=f.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Cu(this)}else f.text().then(this.Ra.bind(this),this.ga.bind(this))};function Cu(f){f.j.read().then(f.Pa.bind(f)).catch(f.ga.bind(f))}n.Pa=function(f){if(this.g){if(this.o&&f.value)this.response.push(f.value);else if(!this.o){var y=f.value?f.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!f.done}))&&(this.response=this.responseText+=y)}f.done?or(this):lr(this),this.readyState==3&&Cu(this)}},n.Ra=function(f){this.g&&(this.response=this.responseText=f,or(this))},n.Qa=function(f){this.g&&(this.response=f,or(this))},n.ga=function(){this.g&&or(this)};function or(f){f.readyState=4,f.l=null,f.j=null,f.v=null,lr(f)}n.setRequestHeader=function(f,y){this.u.append(f,y)},n.getResponseHeader=function(f){return this.h&&this.h.get(f.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const f=[],y=this.h.entries();for(var E=y.next();!E.done;)E=E.value,f.push(E[0]+": "+E[1]),E=y.next();return f.join(`\r
`)};function lr(f){f.onreadystatechange&&f.onreadystatechange.call(f)}Object.defineProperty(qr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(f){this.m=f?"include":"same-origin"}});function Ru(f){let y="";return ae(f,function(E,A){y+=A,y+=":",y+=E,y+=`\r
`}),y}function nn(f,y,E){e:{for(A in E){var A=!1;break e}A=!0}A||(E=Ru(E),typeof f=="string"?E!=null&&encodeURIComponent(String(E)):rt(f,y,E))}function et(f){wt.call(this),this.headers=new Map,this.o=f||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}O(et,wt);var Wo=/^https?$/i,Ha=["POST","PUT"];n=et.prototype,n.Ha=function(f){this.J=f},n.ea=function(f,y,E,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+f);y=y?y.toUpperCase():"GET",this.D=f,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():_i.g(),this.v=this.o?Pa(this.o):Pa(_i),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(y,String(f),!0),this.B=!1}catch(Q){qh(this,Q);return}if(f=E||"",E=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var B in A)E.set(B,A[B]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const Q of A.keys())E.set(Q,A.get(Q));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(E.keys()).find(Q=>Q.toLowerCase()=="content-type"),B=h.FormData&&f instanceof h.FormData,!(0<=Array.prototype.indexOf.call(Ha,y,void 0))||A||B||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Q,le]of E)this.g.setRequestHeader(Q,le);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ga(this),this.u=!0,this.g.send(f),this.u=!1}catch(Q){qh(this,Q)}};function qh(f,y){f.h=!1,f.g&&(f.j=!0,f.g.abort(),f.j=!1),f.l=y,f.m=5,Ko(f),ur(f)}function Ko(f){f.A||(f.A=!0,Ze(f,"complete"),Ze(f,"error"))}n.abort=function(f){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=f||7,Ze(this,"complete"),Ze(this,"abort"),ur(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ur(this,!0)),et.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Qo(this):this.bb())},n.bb=function(){Qo(this)};function Qo(f){if(f.h&&typeof u<"u"&&(!f.v[1]||Ti(f)!=4||f.Z()!=2)){if(f.u&&Ti(f)==4)jt(f.Ea,0,f);else if(Ze(f,"readystatechange"),Ti(f)==4){f.h=!1;try{const le=f.Z();e:switch(le){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var E;if(!(E=y)){var A;if(A=le===0){var B=String(f.D).match(Ua)[1]||null;!B&&h.self&&h.self.location&&(B=h.self.location.protocol.slice(0,-1)),A=!Wo.test(B?B.toLowerCase():"")}E=A}if(E)Ze(f,"complete"),Ze(f,"success");else{f.m=6;try{var Q=2<Ti(f)?f.g.statusText:""}catch{Q=""}f.l=Q+" ["+f.Z()+"]",Ko(f)}}finally{ur(f)}}}}function ur(f,y){if(f.g){Ga(f);const E=f.g,A=f.v[0]?()=>{}:null;f.g=null,f.v=null,y||Ze(f,"ready");try{E.onreadystatechange=A}catch{}}}function Ga(f){f.I&&(h.clearTimeout(f.I),f.I=null)}n.isActive=function(){return!!this.g};function Ti(f){return f.g?f.g.readyState:0}n.Z=function(){try{return 2<Ti(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(f){if(this.g){var y=this.g.responseText;return f&&y.indexOf(f)==0&&(y=y.substring(f.length)),Mr(y)}};function Hh(f){try{if(!f.g)return null;if("response"in f.g)return f.g.response;switch(f.H){case"":case"text":return f.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in f.g)return f.g.mozResponseArrayBuffer}return null}catch{return null}}function mp(f){const y={};f=(f.g&&2<=Ti(f)&&f.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<f.length;A++){if(J(f[A]))continue;var E=U(f[A]);const B=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const Q=y[B]||[];y[B]=Q,Q.push(E)}N(y,function(A){return A.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ya(f,y,E){return E&&E.internalChannelParams&&E.internalChannelParams[f]||y}function Xo(f){this.Aa=0,this.i=[],this.j=new pn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ya("failFast",!1,f),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ya("baseRetryDelayMs",5e3,f),this.cb=Ya("retryDelaySeedMs",1e4,f),this.Wa=Ya("forwardChannelMaxRetries",2,f),this.wa=Ya("forwardChannelRequestTimeoutMs",2e4,f),this.pa=f&&f.xmlHttpFactory||void 0,this.Xa=f&&f.Tb||void 0,this.Ca=f&&f.useFetchStreams||!1,this.L=void 0,this.J=f&&f.supportsCrossDomainXhr||!1,this.K="",this.h=new Ur(f&&f.concurrentRequestLimit),this.Da=new qa,this.P=f&&f.fastHandshake||!1,this.O=f&&f.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=f&&f.Rb||!1,f&&f.xa&&this.j.xa(),f&&f.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&f&&f.detectBufferingProxy||!1,this.ja=void 0,f&&f.longPollingTimeout&&0<f.longPollingTimeout&&(this.ja=f.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Xo.prototype,n.la=8,n.G=1,n.connect=function(f,y,E,A){ct(0),this.W=f,this.H=y||{},E&&A!==void 0&&(this.H.OSID=E,this.H.OAID=A),this.F=this.X,this.I=Xh(this,null,this.W),Jo(this)};function Iu(f){if(Gh(f),f.G==3){var y=f.U++,E=Zn(f.I);if(rt(E,"SID",f.K),rt(E,"RID",y),rt(E,"TYPE","terminate"),$a(f,E),y=new Me(f,f.j,y),y.L=2,y.v=Fa(Zn(E)),E=!1,h.navigator&&h.navigator.sendBeacon)try{E=h.navigator.sendBeacon(y.v.toString(),"")}catch{}!E&&h.Image&&(new Image().src=y.v,E=!0),E||(y.g=Zh(y.j,null),y.g.ea(y.v)),y.F=Date.now(),La(y)}Qh(f)}function Zo(f){f.g&&(Wa(f),f.g.cancel(),f.g=null)}function Gh(f){Zo(f),f.u&&(h.clearTimeout(f.u),f.u=null),el(f),f.h.cancel(),f.s&&(typeof f.s=="number"&&h.clearTimeout(f.s),f.s=null)}function Jo(f){if(!qo(f.h)&&!f.s){f.s=!0;var y=f.Ga;he||k(),pe||(he(),pe=!0),xe.add(y,f),f.B=0}}function pp(f,y){return Ho(f.h)>=f.h.j-(f.s?1:0)?!1:f.s?(f.i=y.D.concat(f.i),!0):f.G==1||f.G==2||f.B>=(f.Va?0:f.Wa)?!1:(f.s=bt(T(f.Ga,f,y),Ou(f,f.B)),f.B++,!0)}n.Ga=function(f){if(this.s)if(this.s=null,this.G==1){if(!f){this.U=Math.floor(1e5*Math.random()),f=this.U++;const B=new Me(this,this.j,f);let Q=this.o;if(this.S&&(Q?(Q=R(Q),M(Q,this.S)):Q=this.S),this.m!==null||this.O||(B.H=Q,Q=null),this.P)e:{for(var y=0,E=0;E<this.i.length;E++){t:{var A=this.i[E];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(y+=A,4096<y){y=E;break e}if(y===4096||E===this.i.length-1){y=E+1;break e}}y=1e3}else y=1e3;y=Yh(this,B,y),E=Zn(this.I),rt(E,"RID",f),rt(E,"CVER",22),this.D&&rt(E,"X-HTTP-Session-Id",this.D),$a(this,E),Q&&(this.O?y="headers="+encodeURIComponent(String(Ru(Q)))+"&"+y:this.m&&nn(E,this.m,Q)),Go(this.h,B),this.Ua&&rt(E,"TYPE","init"),this.P?(rt(E,"$req",y),rt(E,"SID","null"),B.T=!0,Mn(B,E,null)):Mn(B,E,y),this.G=2}}else this.G==3&&(f?Nu(this,f):this.i.length==0||qo(this.h)||Nu(this))};function Nu(f,y){var E;y?E=y.l:E=f.U++;const A=Zn(f.I);rt(A,"SID",f.K),rt(A,"RID",E),rt(A,"AID",f.T),$a(f,A),f.m&&f.o&&nn(A,f.m,f.o),E=new Me(f,f.j,E,f.B+1),f.m===null&&(E.H=f.o),y&&(f.i=y.D.concat(f.i)),y=Yh(f,E,1e3),E.I=Math.round(.5*f.wa)+Math.round(.5*f.wa*Math.random()),Go(f.h,E),Mn(E,A,y)}function $a(f,y){f.H&&ae(f.H,function(E,A){rt(y,A,E)}),f.l&&wu({},function(E,A){rt(y,A,E)})}function Yh(f,y,E){E=Math.min(f.i.length,E);var A=f.l?T(f.l.Na,f.l,f):null;e:{var B=f.i;let Q=-1;for(;;){const le=["count="+E];Q==-1?0<E?(Q=B[0].g,le.push("ofs="+Q)):Q=0:le.push("ofs="+Q);let He=!0;for(let $t=0;$t<E;$t++){let Ge=B[$t].g;const rn=B[$t].map;if(Ge-=Q,0>Ge)Q=Math.max(0,B[$t].g-100),He=!1;else try{ar(rn,le,"req"+Ge+"_")}catch{A&&A(rn)}}if(He){A=le.join("&");break e}}}return f=f.i.splice(0,E),y.D=f,A}function $h(f){if(!f.g&&!f.u){f.Y=1;var y=f.Fa;he||k(),pe||(he(),pe=!0),xe.add(y,f),f.v=0}}function Du(f){return f.g||f.u||3<=f.v?!1:(f.Y++,f.u=bt(T(f.Fa,f),Ou(f,f.v)),f.v++,!0)}n.Fa=function(){if(this.u=null,Wh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var f=2*this.R;this.j.info("BP detection timer enabled: "+f),this.A=bt(T(this.ab,this),f)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ct(10),Zo(this),Wh(this))};function Wa(f){f.A!=null&&(h.clearTimeout(f.A),f.A=null)}function Wh(f){f.g=new Me(f,f.j,"rpc",f.Y),f.m===null&&(f.g.H=f.o),f.g.O=0;var y=Zn(f.qa);rt(y,"RID","rpc"),rt(y,"SID",f.K),rt(y,"AID",f.T),rt(y,"CI",f.F?"0":"1"),!f.F&&f.ja&&rt(y,"TO",f.ja),rt(y,"TYPE","xmlhttp"),$a(f,y),f.m&&f.o&&nn(y,f.m,f.o),f.L&&(f.g.I=f.L);var E=f.g;f=f.ia,E.L=1,E.v=Fa(Zn(y)),E.m=null,E.P=!0,ji(E,f)}n.Za=function(){this.C!=null&&(this.C=null,Zo(this),Du(this),ct(19))};function el(f){f.C!=null&&(h.clearTimeout(f.C),f.C=null)}function Kh(f,y){var E=null;if(f.g==y){el(f),Wa(f),f.g=null;var A=2}else if(Eu(f.h,y))E=y.D,Ln(f.h,y),A=1;else return;if(f.G!=0){if(y.o)if(A==1){E=y.m?y.m.length:0,y=Date.now()-y.F;var B=f.B;A=Ke(),Ze(A,new Nt(A,E)),Jo(f)}else $h(f);else if(B=y.s,B==3||B==0&&0<y.X||!(A==1&&pp(f,y)||A==2&&Du(f)))switch(E&&0<E.length&&(y=f.h,y.i=y.i.concat(E)),B){case 1:Hr(f,5);break;case 4:Hr(f,10);break;case 3:Hr(f,6);break;default:Hr(f,2)}}}function Ou(f,y){let E=f.Ta+Math.floor(Math.random()*f.cb);return f.isActive()||(E*=2),E*y}function Hr(f,y){if(f.j.info("Error code "+y),y==2){var E=T(f.fb,f),A=f.Xa;const B=!A;A=new Bt(A||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||ja(A,"https"),Fa(A),B?za(A.toString(),E):Fi(A.toString(),E)}else ct(2);f.G=0,f.l&&f.l.sa(y),Qh(f),Gh(f)}n.fb=function(f){f?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function Qh(f){if(f.G=0,f.ka=[],f.l){const y=Tu(f.h);(y.length!=0||f.i.length!=0)&&(L(f.ka,y),L(f.ka,f.i),f.h.i.length=0,P(f.i),f.i.length=0),f.l.ra()}}function Xh(f,y,E){var A=E instanceof Bt?Zn(E):new Bt(E);if(A.g!="")y&&(A.g=y+"."+A.g),Ns(A,A.s);else{var B=h.location;A=B.protocol,y=y?y+"."+B.hostname:B.hostname,B=+B.port;var Q=new Bt(null);A&&ja(Q,A),y&&(Q.g=y),B&&Ns(Q,B),E&&(Q.l=E),A=Q}return E=f.D,y=f.ya,E&&y&&rt(A,E,y),rt(A,"VER",f.la),$a(f,A),A}function Zh(f,y,E){if(y&&!f.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=f.Ca&&!f.pa?new et(new Ds({eb:E})):new et(f.pa),y.Ha(f.J),y}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Jh(){}n=Jh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function tl(){}tl.prototype.g=function(f,y){return new Vn(f,y)};function Vn(f,y){wt.call(this),this.g=new Xo(y),this.l=f,this.h=y&&y.messageUrlParams||null,f=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(f?f["X-Client-Protocol"]="webchannel":f={"X-Client-Protocol":"webchannel"}),this.g.o=f,f=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(f?f["X-WebChannel-Content-Type"]=y.messageContentType:f={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(f?f["X-WebChannel-Client-Profile"]=y.va:f={"X-WebChannel-Client-Profile":y.va}),this.g.S=f,(f=y&&y.Sb)&&!J(f)&&(this.g.m=f),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!J(y)&&(this.g.D=y,f=this.h,f!==null&&y in f&&(f=this.h,y in f&&delete f[y])),this.j=new cr(this)}O(Vn,wt),Vn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Vn.prototype.close=function(){Iu(this.g)},Vn.prototype.o=function(f){var y=this.g;if(typeof f=="string"){var E={};E.__data__=f,f=E}else this.u&&(E={},E.__data__=Xn(f),f=E);y.i.push(new Fh(y.Ya++,f)),y.G==3&&Jo(y)},Vn.prototype.N=function(){this.g.l=null,delete this.j,Iu(this.g),delete this.g,Vn.aa.N.call(this)};function ef(f){pi.call(this),f.__headers__&&(this.headers=f.__headers__,this.statusCode=f.__status__,delete f.__headers__,delete f.__status__);var y=f.__sm__;if(y){e:{for(const E in y){f=E;break e}f=void 0}(this.i=f)&&(f=this.i,y=y!==null&&f in y?y[f]:void 0),this.data=y}else this.data=f}O(ef,pi);function tf(){Ft.call(this),this.status=1}O(tf,Ft);function cr(f){this.g=f}O(cr,Jh),cr.prototype.ua=function(){Ze(this.g,"a")},cr.prototype.ta=function(f){Ze(this.g,new ef(f))},cr.prototype.sa=function(f){Ze(this.g,new tf)},cr.prototype.ra=function(){Ze(this.g,"b")},tl.prototype.createWebChannel=tl.prototype.g,Vn.prototype.send=Vn.prototype.o,Vn.prototype.open=Vn.prototype.m,Vn.prototype.close=Vn.prototype.close,g1=function(){return new tl},p1=function(){return Ke()},m1=gt,fy={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Vi.NO_ERROR=0,Vi.TIMEOUT=8,Vi.HTTP_ERROR=6,Ad=Vi,Ui.COMPLETE="complete",d1=Ui,Cs.EventType=Mi,Mi.OPEN="a",Mi.CLOSE="b",Mi.ERROR="c",Mi.MESSAGE="d",wt.prototype.listen=wt.prototype.K,Nc=Cs,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha,f1=et}).apply(typeof ud<"u"?ud:typeof self<"u"?self:typeof window<"u"?window:{});const VS="@firebase/firestore",US="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Nn.UNAUTHENTICATED=new Nn(null),Nn.GOOGLE_CREDENTIALS=new Nn("google-credentials-uid"),Nn.FIRST_PARTY=new Nn("first-party-uid"),Nn.MOCK_USER=new Nn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let du="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=new mh("@firebase/firestore");function Ol(){return Io.logLevel}function fe(n,...e){if(Io.logLevel<=Fe.DEBUG){const t=e.map(Jv);Io.debug(`Firestore (${du}): ${n}`,...t)}}function gs(n,...e){if(Io.logLevel<=Fe.ERROR){const t=e.map(Jv);Io.error(`Firestore (${du}): ${n}`,...t)}}function ga(n,...e){if(Io.logLevel<=Fe.WARN){const t=e.map(Jv);Io.warn(`Firestore (${du}): ${n}`,...t)}}function Jv(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,_1(n,i,t)}function _1(n,e,t){let i=`FIRESTORE (${du}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw gs(i),new Error(i)}function tt(n,e,t,i){let s="Unexpected state";typeof t=="string"?s=t:i=t,n||_1(e,s,i)}function Ie(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class me extends xi{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class s3{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Nn.UNAUTHENTICATED))}shutdown(){}}class a3{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class o3{constructor(e){this.t=e,this.currentUser=Nn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){tt(this.o===void 0,42304);let i=this.i;const s=m=>this.i!==i?(i=this.i,t(m)):Promise.resolve();let o=new ha;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ha,e.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const m=o;e.enqueueRetryable(async()=>{await m.promise,await s(this.currentUser)})},h=m=>{fe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(m=>h(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?h(m):(fe("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ha)}},0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(fe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(tt(typeof i.accessToken=="string",31837,{l:i}),new y1(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return tt(e===null||typeof e=="string",2055,{h:e}),new Nn(e)}}class l3{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Nn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class u3{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new l3(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Nn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class c3{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Gn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){tt(this.o===void 0,3512);const i=o=>{o.error!=null&&fe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.m;return this.m=o.token,fe("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>i(o))};const s=o=>{fe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):fe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new jS(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(tt(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new jS(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function h3(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */function v1(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=h3(40);for(let o=0;o<s.length;++o)i.length<20&&s[o]<t&&(i+=e.charAt(s[o]%62))}return i}}function Pe(n,e){return n<e?-1:n>e?1:0}function dy(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=n.codePointAt(t),s=e.codePointAt(t);if(i!==s){if(i<128&&s<128)return Pe(i,s);{const o=v1(),u=f3(o.encode(FS(n,t)),o.encode(FS(e,t)));return u!==0?u:Pe(i,s)}}t+=i>65535?2:1}return Pe(n.length,e.length)}function FS(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function f3(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Pe(n[t],e[t]);return Pe(n.length,e.length)}function Zl(n,e,t){return n.length===e.length&&n.every((i,s)=>t(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS="__name__";class yr{constructor(e,t,i){t===void 0?t=0:t>e.length&&Se(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&Se(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return yr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof yr?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const o=yr.compareSegments(e.get(s),t.get(s));if(o!==0)return o}return Pe(e.length,t.length)}static compareSegments(e,t){const i=yr.isNumericId(e),s=yr.isNumericId(t);return i&&!s?-1:!i&&s?1:i&&s?yr.extractNumericId(e).compare(yr.extractNumericId(t)):dy(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ca.fromString(e.substring(4,e.length-2))}}class yt extends yr{construct(e,t,i){return new yt(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new me(se.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(s=>s.length>0))}return new yt(t)}static emptyPath(){return new yt([])}}const d3=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bn extends yr{construct(e,t,i){return new bn(e,t,i)}static isValidIdentifier(e){return d3.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===BS}static keyField(){return new bn([BS])}static fromServerFormat(e){const t=[];let i="",s=0;const o=()=>{if(i.length===0)throw new me(se.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let u=!1;for(;s<e.length;){const h=e[s];if(h==="\\"){if(s+1===e.length)throw new me(se.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[s+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new me(se.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=m,s+=2}else h==="`"?(u=!u,s++):h!=="."||u?(i+=h,s++):(o(),s++)}if(o(),u)throw new me(se.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new bn(t)}static emptyPath(){return new bn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(yt.fromString(e))}static fromName(e){return new ye(yt.fromString(e).popFirst(5))}static empty(){return new ye(yt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&yt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return yt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new yt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E1(n,e,t){if(!t)throw new me(se.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function m3(n,e,t,i){if(e===!0&&i===!0)throw new me(se.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function zS(n){if(!ye.isDocumentKey(n))throw new me(se.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function qS(n){if(ye.isDocumentKey(n))throw new me(se.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function T1(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function tE(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Se(12329,{type:typeof n})}function No(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new me(se.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=tE(n);throw new me(se.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ch(n,e){if(!T1(n))throw new me(se.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const s=e[i].typeString,o="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const u=n[i];if(s&&typeof u!==s){t=`JSON field '${i}' must be a ${s}.`;break}if(o!==void 0&&u!==o.value){t=`Expected '${i}' field to equal '${o.value}'`;break}}if(t)throw new me(se.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS=-62135596800,GS=1e6;class vt{static now(){return vt.fromMillis(Date.now())}static fromDate(e){return vt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*GS);return new vt(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new me(se.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new me(se.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<HS)throw new me(se.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new me(se.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/GS}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:vt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ch(e,vt._jsonSchema))return new vt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-HS;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}vt._jsonSchemaVersion="firestore/timestamp/1.0",vt._jsonSchema={type:Gt("string",vt._jsonSchemaVersion),seconds:Gt("number"),nanoseconds:Gt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{static fromTimestamp(e){return new Re(e)}static min(){return new Re(new vt(0,0))}static max(){return new Re(new vt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const rh=-1;function p3(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=Re.fromTimestamp(i===1e9?new vt(t+1,0):new vt(t,i));return new _a(s,ye.empty(),e)}function g3(n){return new _a(n.readTime,n.key,rh)}class _a{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new _a(Re.min(),ye.empty(),rh)}static max(){return new _a(Re.max(),ye.empty(),rh)}}function _3(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ye.comparator(n.documentKey,e.documentKey),t!==0?t:Pe(n.largestBatchId,e.largestBatchId))}/**
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
 */const y3="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class v3{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mu(n){if(n.code!==se.FAILED_PRECONDITION||n.message!==y3)throw n;fe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Se(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ie((i,s)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(i,s)},this.catchCallback=o=>{this.wrapFailure(t,o).next(i,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof ie?t:ie.resolve(t)}catch(t){return ie.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):ie.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):ie.reject(t)}static resolve(e){return new ie((t,i)=>{t(e)})}static reject(e){return new ie((t,i)=>{i(e)})}static waitFor(e){return new ie((t,i)=>{let s=0,o=0,u=!1;e.forEach(h=>{++s,h.next(()=>{++o,u&&o===s&&t()},m=>i(m))}),u=!0,o===s&&t()})}static or(e){let t=ie.resolve(!1);for(const i of e)t=t.next(s=>s?ie.resolve(s):i());return t}static forEach(e,t){const i=[];return e.forEach((s,o)=>{i.push(t.call(this,s,o))}),this.waitFor(i)}static mapArray(e,t){return new ie((i,s)=>{const o=e.length,u=new Array(o);let h=0;for(let m=0;m<o;m++){const p=m;t(e[p]).next(_=>{u[p]=_,++h,h===o&&i(u)},_=>s(_))}})}static doWhile(e,t){return new ie((i,s)=>{const o=()=>{e()===!0?t().next(()=>{o()},s):i()};o()})}}function E3(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function pu(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Um{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this._e(i),this.ae=i=>t.writeSequenceNumber(i))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Um.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE=-1;function jm(n){return n==null}function im(n){return n===0&&1/n==-1/0}function T3(n){return typeof n=="number"&&Number.isInteger(n)&&!im(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1="";function w3(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=YS(e)),e=b3(n.get(t),e);return YS(e)}function b3(n,e){let t=e;const i=n.length;for(let s=0;s<i;s++){const o=n.charAt(s);switch(o){case"\0":t+="";break;case w1:t+="";break;default:t+=o}}return t}function YS(n){return n+w1+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ca(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function b1(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,t){this.comparator=e,this.root=t||wn.EMPTY}insert(e,t){return new It(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,wn.BLACK,null,null))}remove(e){return new It(this.comparator,this.root.remove(e,this.comparator).copy(null,null,wn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new cd(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new cd(this.root,e,this.comparator,!1)}getReverseIterator(){return new cd(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new cd(this.root,e,this.comparator,!0)}}class cd{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?i(e.key,t):1,t&&s&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class wn{constructor(e,t,i,s,o){this.key=e,this.value=t,this.color=i??wn.RED,this.left=s??wn.EMPTY,this.right=o??wn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,o){return new wn(e??this.key,t??this.value,i??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const o=i(e,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(e,t,i),null):o===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return wn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return wn.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,wn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,wn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Se(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Se(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Se(27949);return e+(this.isRed()?0:1)}}wn.EMPTY=null,wn.RED=!0,wn.BLACK=!1;wn.EMPTY=new class{constructor(){this.size=0}get key(){throw Se(57766)}get value(){throw Se(16141)}get color(){throw Se(16727)}get left(){throw Se(29726)}get right(){throw Se(36894)}copy(e,t,i,s,o){return this}insert(e,t,i){return new wn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.comparator=e,this.data=new It(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new WS(this.data.getIterator())}getIteratorFrom(e){return new WS(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof en)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=i.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new en(this.comparator);return t.data=e,t}}class WS{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ui{constructor(e){this.fields=e,e.sort(bn.comparator)}static empty(){return new ui([])}unionWith(e){let t=new en(bn.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new ui(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Zl(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
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
 */class S1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class An{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new S1("Invalid base64 string: "+o):o}}(e);return new An(t)}static fromUint8Array(e){const t=function(s){let o="";for(let u=0;u<s.length;++u)o+=String.fromCharCode(s[u]);return o}(e);return new An(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}An.EMPTY_BYTE_STRING=new An("");const S3=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ya(n){if(tt(!!n,39018),typeof n=="string"){let e=0;const t=S3.exec(n);if(tt(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Vt(n.seconds),nanos:Vt(n.nanos)}}function Vt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function va(n){return typeof n=="string"?An.fromBase64String(n):An.fromUint8Array(n)}/**
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
 */const A1="server_timestamp",C1="__type__",R1="__previous_value__",I1="__local_write_time__";function iE(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[C1])===null||t===void 0?void 0:t.stringValue)===A1}function Fm(n){const e=n.mapValue.fields[R1];return iE(e)?Fm(e):e}function sh(n){const e=ya(n.mapValue.fields[I1].timestampValue);return new vt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A3{constructor(e,t,i,s,o,u,h,m,p,_){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=h,this.longPollingOptions=m,this.useFetchStreams=p,this.isUsingEmulator=_}}const rm="(default)";class ah{constructor(e,t){this.projectId=e,this.database=t||rm}static empty(){return new ah("","")}get isDefaultDatabase(){return this.database===rm}isEqual(e){return e instanceof ah&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const N1="__type__",C3="__max__",hd={mapValue:{}},D1="__vector__",sm="value";function Ea(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?iE(n)?4:I3(n)?9007199254740991:R3(n)?10:11:Se(28295,{value:n})}function Ir(n,e){if(n===e)return!0;const t=Ea(n);if(t!==Ea(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return sh(n).isEqual(sh(e));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const u=ya(s.timestampValue),h=ya(o.timestampValue);return u.seconds===h.seconds&&u.nanos===h.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,o){return va(s.bytesValue).isEqual(va(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,o){return Vt(s.geoPointValue.latitude)===Vt(o.geoPointValue.latitude)&&Vt(s.geoPointValue.longitude)===Vt(o.geoPointValue.longitude)}(n,e);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return Vt(s.integerValue)===Vt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const u=Vt(s.doubleValue),h=Vt(o.doubleValue);return u===h?im(u)===im(h):isNaN(u)&&isNaN(h)}return!1}(n,e);case 9:return Zl(n.arrayValue.values||[],e.arrayValue.values||[],Ir);case 10:case 11:return function(s,o){const u=s.mapValue.fields||{},h=o.mapValue.fields||{};if($S(u)!==$S(h))return!1;for(const m in u)if(u.hasOwnProperty(m)&&(h[m]===void 0||!Ir(u[m],h[m])))return!1;return!0}(n,e);default:return Se(52216,{left:n})}}function oh(n,e){return(n.values||[]).find(t=>Ir(t,e))!==void 0}function Jl(n,e){if(n===e)return 0;const t=Ea(n),i=Ea(e);if(t!==i)return Pe(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Pe(n.booleanValue,e.booleanValue);case 2:return function(o,u){const h=Vt(o.integerValue||o.doubleValue),m=Vt(u.integerValue||u.doubleValue);return h<m?-1:h>m?1:h===m?0:isNaN(h)?isNaN(m)?0:-1:1}(n,e);case 3:return KS(n.timestampValue,e.timestampValue);case 4:return KS(sh(n),sh(e));case 5:return dy(n.stringValue,e.stringValue);case 6:return function(o,u){const h=va(o),m=va(u);return h.compareTo(m)}(n.bytesValue,e.bytesValue);case 7:return function(o,u){const h=o.split("/"),m=u.split("/");for(let p=0;p<h.length&&p<m.length;p++){const _=Pe(h[p],m[p]);if(_!==0)return _}return Pe(h.length,m.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,u){const h=Pe(Vt(o.latitude),Vt(u.latitude));return h!==0?h:Pe(Vt(o.longitude),Vt(u.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return QS(n.arrayValue,e.arrayValue);case 10:return function(o,u){var h,m,p,_;const v=o.fields||{},T=u.fields||{},C=(h=v[sm])===null||h===void 0?void 0:h.arrayValue,O=(m=T[sm])===null||m===void 0?void 0:m.arrayValue,P=Pe(((p=C?.values)===null||p===void 0?void 0:p.length)||0,((_=O?.values)===null||_===void 0?void 0:_.length)||0);return P!==0?P:QS(C,O)}(n.mapValue,e.mapValue);case 11:return function(o,u){if(o===hd.mapValue&&u===hd.mapValue)return 0;if(o===hd.mapValue)return 1;if(u===hd.mapValue)return-1;const h=o.fields||{},m=Object.keys(h),p=u.fields||{},_=Object.keys(p);m.sort(),_.sort();for(let v=0;v<m.length&&v<_.length;++v){const T=dy(m[v],_[v]);if(T!==0)return T;const C=Jl(h[m[v]],p[_[v]]);if(C!==0)return C}return Pe(m.length,_.length)}(n.mapValue,e.mapValue);default:throw Se(23264,{le:t})}}function KS(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Pe(n,e);const t=ya(n),i=ya(e),s=Pe(t.seconds,i.seconds);return s!==0?s:Pe(t.nanos,i.nanos)}function QS(n,e){const t=n.values||[],i=e.values||[];for(let s=0;s<t.length&&s<i.length;++s){const o=Jl(t[s],i[s]);if(o)return o}return Pe(t.length,i.length)}function eu(n){return my(n)}function my(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=ya(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return va(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ye.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",s=!0;for(const o of t.values||[])s?s=!1:i+=",",i+=my(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let s="{",o=!0;for(const u of i)o?o=!1:s+=",",s+=`${u}:${my(t.fields[u])}`;return s+"}"}(n.mapValue):Se(61005,{value:n})}function Cd(n){switch(Ea(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Fm(n);return e?16+Cd(e):16;case 5:return 2*n.stringValue.length;case 6:return va(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((s,o)=>s+Cd(o),0)}(n.arrayValue);case 10:case 11:return function(i){let s=0;return Ca(i.fields,(o,u)=>{s+=o.length+Cd(u)}),s}(n.mapValue);default:throw Se(13486,{value:n})}}function py(n){return!!n&&"integerValue"in n}function rE(n){return!!n&&"arrayValue"in n}function XS(n){return!!n&&"nullValue"in n}function ZS(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Rd(n){return!!n&&"mapValue"in n}function R3(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[N1])===null||t===void 0?void 0:t.stringValue)===D1}function zc(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ca(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=zc(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=zc(n.arrayValue.values[t]);return e}return Object.assign({},n)}function I3(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===C3}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e){this.value=e}static empty(){return new Yn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Rd(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=zc(t)}setAll(e){let t=bn.emptyPath(),i={},s=[];e.forEach((u,h)=>{if(!t.isImmediateParentOf(h)){const m=this.getFieldsMap(t);this.applyChanges(m,i,s),i={},s=[],t=h.popLast()}u?i[h.lastSegment()]=zc(u):s.push(h.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,i,s)}delete(e){const t=this.field(e.popLast());Rd(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ir(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];Rd(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){Ca(t,(s,o)=>e[s]=o);for(const s of i)delete e[s]}clone(){return new Yn(zc(this.value))}}function O1(n){const e=[];return Ca(n.fields,(t,i)=>{const s=new bn([t]);if(Rd(i)){const o=O1(i.mapValue).fields;if(o.length===0)e.push(s);else for(const u of o)e.push(s.child(u))}else e.push(s)}),new ui(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,t,i,s,o,u,h){this.key=e,this.documentType=t,this.version=i,this.readTime=s,this.createTime=o,this.data=u,this.documentState=h}static newInvalidDocument(e){return new On(e,0,Re.min(),Re.min(),Re.min(),Yn.empty(),0)}static newFoundDocument(e,t,i,s){return new On(e,1,t,Re.min(),i,s,0)}static newNoDocument(e,t){return new On(e,2,t,Re.min(),Re.min(),Yn.empty(),0)}static newUnknownDocument(e,t){return new On(e,3,t,Re.min(),Re.min(),Yn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Yn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Yn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof On&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new On(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class am{constructor(e,t){this.position=e,this.inclusive=t}}function JS(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const o=e[s],u=n.position[s];if(o.field.isKeyField()?i=ye.comparator(ye.fromName(u.referenceValue),t.key):i=Jl(u,t.data.field(o.field)),o.dir==="desc"&&(i*=-1),i!==0)break}return i}function eA(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ir(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class om{constructor(e,t="asc"){this.field=e,this.dir=t}}function N3(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class x1{}class Jt extends x1{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new O3(e,t,i):t==="array-contains"?new P3(e,i):t==="in"?new M3(e,i):t==="not-in"?new L3(e,i):t==="array-contains-any"?new V3(e,i):new Jt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new x3(e,i):new k3(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Jl(t,this.value)):t!==null&&Ea(this.value)===Ea(t)&&this.matchesComparison(Jl(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Se(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nr extends x1{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Nr(e,t)}matches(e){return k1(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function k1(n){return n.op==="and"}function P1(n){return D3(n)&&k1(n)}function D3(n){for(const e of n.filters)if(e instanceof Nr)return!1;return!0}function gy(n){if(n instanceof Jt)return n.field.canonicalString()+n.op.toString()+eu(n.value);if(P1(n))return n.filters.map(e=>gy(e)).join(",");{const e=n.filters.map(t=>gy(t)).join(",");return`${n.op}(${e})`}}function M1(n,e){return n instanceof Jt?function(i,s){return s instanceof Jt&&i.op===s.op&&i.field.isEqual(s.field)&&Ir(i.value,s.value)}(n,e):n instanceof Nr?function(i,s){return s instanceof Nr&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((o,u,h)=>o&&M1(u,s.filters[h]),!0):!1}(n,e):void Se(19439)}function L1(n){return n instanceof Jt?function(t){return`${t.field.canonicalString()} ${t.op} ${eu(t.value)}`}(n):n instanceof Nr?function(t){return t.op.toString()+" {"+t.getFilters().map(L1).join(" ,")+"}"}(n):"Filter"}class O3 extends Jt{constructor(e,t,i){super(e,t,i),this.key=ye.fromName(i.referenceValue)}matches(e){const t=ye.comparator(e.key,this.key);return this.matchesComparison(t)}}class x3 extends Jt{constructor(e,t){super(e,"in",t),this.keys=V1("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class k3 extends Jt{constructor(e,t){super(e,"not-in",t),this.keys=V1("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function V1(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>ye.fromName(i.referenceValue))}class P3 extends Jt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return rE(t)&&oh(t.arrayValue,this.value)}}class M3 extends Jt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&oh(this.value.arrayValue,t)}}class L3 extends Jt{constructor(e,t){super(e,"not-in",t)}matches(e){if(oh(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!oh(this.value.arrayValue,t)}}class V3 extends Jt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!rE(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>oh(this.value.arrayValue,i))}}/**
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
 */class U3{constructor(e,t=null,i=[],s=[],o=null,u=null,h=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=o,this.startAt=u,this.endAt=h,this.Pe=null}}function tA(n,e=null,t=[],i=[],s=null,o=null,u=null){return new U3(n,e,t,i,s,o,u)}function sE(n){const e=Ie(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>gy(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(o){return o.field.canonicalString()+o.dir}(i)).join(","),jm(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>eu(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>eu(i)).join(",")),e.Pe=t}return e.Pe}function aE(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!N3(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!M1(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!eA(n.startAt,e.startAt)&&eA(n.endAt,e.endAt)}function _y(n){return ye.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e,t=null,i=[],s=[],o=null,u="F",h=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=o,this.limitType=u,this.startAt=h,this.endAt=m,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function j3(n,e,t,i,s,o,u,h){return new Bm(n,e,t,i,s,o,u,h)}function U1(n){return new Bm(n)}function nA(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function F3(n){return n.collectionGroup!==null}function qc(n){const e=Ie(n);if(e.Te===null){e.Te=[];const t=new Set;for(const o of e.explicitOrderBy)e.Te.push(o),t.add(o.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let h=new en(bn.comparator);return u.filters.forEach(m=>{m.getFlattenedFilters().forEach(p=>{p.isInequality()&&(h=h.add(p.field))})}),h})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.Te.push(new om(o,i))}),t.has(bn.keyField().canonicalString())||e.Te.push(new om(bn.keyField(),i))}return e.Te}function br(n){const e=Ie(n);return e.Ie||(e.Ie=B3(e,qc(n))),e.Ie}function B3(n,e){if(n.limitType==="F")return tA(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new om(s.field,o)});const t=n.endAt?new am(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new am(n.startAt.position,n.startAt.inclusive):null;return tA(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function yy(n,e,t){return new Bm(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function zm(n,e){return aE(br(n),br(e))&&n.limitType===e.limitType}function j1(n){return`${sE(br(n))}|lt:${n.limitType}`}function xl(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(s=>L1(s)).join(", ")}]`),jm(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(s=>eu(s)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(s=>eu(s)).join(",")),`Target(${i})`}(br(n))}; limitType=${n.limitType})`}function qm(n,e){return e.isFoundDocument()&&function(i,s){const o=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):ye.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o)}(n,e)&&function(i,s){for(const o of qc(i))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,e)&&function(i,s){for(const o of i.filters)if(!o.matches(s))return!1;return!0}(n,e)&&function(i,s){return!(i.startAt&&!function(u,h,m){const p=JS(u,h,m);return u.inclusive?p<=0:p<0}(i.startAt,qc(i),s)||i.endAt&&!function(u,h,m){const p=JS(u,h,m);return u.inclusive?p>=0:p>0}(i.endAt,qc(i),s))}(n,e)}function z3(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function F1(n){return(e,t)=>{let i=!1;for(const s of qc(n)){const o=q3(s,e,t);if(o!==0)return o;i=i||s.field.isKeyField()}return 0}}function q3(n,e,t){const i=n.field.isKeyField()?ye.comparator(e.key,t.key):function(o,u,h){const m=u.data.field(o),p=h.data.field(o);return m!==null&&p!==null?Jl(m,p):Se(42886)}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Se(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,o]of i)if(this.equalsFn(s,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return void(s[o]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ca(this.inner,(t,i)=>{for(const[s,o]of i)e(s,o)})}isEmpty(){return b1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H3=new It(ye.comparator);function _s(){return H3}const B1=new It(ye.comparator);function Dc(...n){let e=B1;for(const t of n)e=e.insert(t.key,t);return e}function z1(n){let e=B1;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function go(){return Hc()}function q1(){return Hc()}function Hc(){return new Po(n=>n.toString(),(n,e)=>n.isEqual(e))}const G3=new It(ye.comparator),Y3=new en(ye.comparator);function qe(...n){let e=Y3;for(const t of n)e=e.add(t);return e}const $3=new en(Pe);function W3(){return $3}/**
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
 */function oE(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:im(e)?"-0":e}}function H1(n){return{integerValue:""+n}}function K3(n,e){return T3(e)?H1(e):oE(n,e)}/**
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
 */class Hm{constructor(){this._=void 0}}function Q3(n,e,t){return n instanceof lm?function(s,o){const u={fields:{[C1]:{stringValue:A1},[I1]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&iE(o)&&(o=Fm(o)),o&&(u.fields[R1]=o),{mapValue:u}}(t,e):n instanceof lh?Y1(n,e):n instanceof uh?$1(n,e):function(s,o){const u=G1(s,o),h=iA(u)+iA(s.Ee);return py(u)&&py(s.Ee)?H1(h):oE(s.serializer,h)}(n,e)}function X3(n,e,t){return n instanceof lh?Y1(n,e):n instanceof uh?$1(n,e):t}function G1(n,e){return n instanceof um?function(i){return py(i)||function(o){return!!o&&"doubleValue"in o}(i)}(e)?e:{integerValue:0}:null}class lm extends Hm{}class lh extends Hm{constructor(e){super(),this.elements=e}}function Y1(n,e){const t=W1(e);for(const i of n.elements)t.some(s=>Ir(s,i))||t.push(i);return{arrayValue:{values:t}}}class uh extends Hm{constructor(e){super(),this.elements=e}}function $1(n,e){let t=W1(e);for(const i of n.elements)t=t.filter(s=>!Ir(s,i));return{arrayValue:{values:t}}}class um extends Hm{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function iA(n){return Vt(n.integerValue||n.doubleValue)}function W1(n){return rE(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Z3(n,e){return n.field.isEqual(e.field)&&function(i,s){return i instanceof lh&&s instanceof lh||i instanceof uh&&s instanceof uh?Zl(i.elements,s.elements,Ir):i instanceof um&&s instanceof um?Ir(i.Ee,s.Ee):i instanceof lm&&s instanceof lm}(n.transform,e.transform)}class J3{constructor(e,t){this.version=e,this.transformResults=t}}class Qi{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Qi}static exists(e){return new Qi(void 0,e)}static updateTime(e){return new Qi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Id(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Gm{}function K1(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new lE(n.key,Qi.none()):new Rh(n.key,n.data,Qi.none());{const t=n.data,i=Yn.empty();let s=new en(bn.comparator);for(let o of e.fields)if(!s.has(o)){let u=t.field(o);u===null&&o.length>1&&(o=o.popLast(),u=t.field(o)),u===null?i.delete(o):i.set(o,u),s=s.add(o)}return new Ra(n.key,i,new ui(s.toArray()),Qi.none())}}function e9(n,e,t){n instanceof Rh?function(s,o,u){const h=s.value.clone(),m=sA(s.fieldTransforms,o,u.transformResults);h.setAll(m),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()}(n,e,t):n instanceof Ra?function(s,o,u){if(!Id(s.precondition,o))return void o.convertToUnknownDocument(u.version);const h=sA(s.fieldTransforms,o,u.transformResults),m=o.data;m.setAll(Q1(s)),m.setAll(h),o.convertToFoundDocument(u.version,m).setHasCommittedMutations()}(n,e,t):function(s,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,e,t)}function Gc(n,e,t,i){return n instanceof Rh?function(o,u,h,m){if(!Id(o.precondition,u))return h;const p=o.value.clone(),_=aA(o.fieldTransforms,m,u);return p.setAll(_),u.convertToFoundDocument(u.version,p).setHasLocalMutations(),null}(n,e,t,i):n instanceof Ra?function(o,u,h,m){if(!Id(o.precondition,u))return h;const p=aA(o.fieldTransforms,m,u),_=u.data;return _.setAll(Q1(o)),_.setAll(p),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),h===null?null:h.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(v=>v.field))}(n,e,t,i):function(o,u,h){return Id(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):h}(n,e,t)}function t9(n,e){let t=null;for(const i of n.fieldTransforms){const s=e.data.field(i.field),o=G1(i.transform,s||null);o!=null&&(t===null&&(t=Yn.empty()),t.set(i.field,o))}return t||null}function rA(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&Zl(i,s,(o,u)=>Z3(o,u))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Rh extends Gm{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ra extends Gm{constructor(e,t,i,s,o=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Q1(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function sA(n,e,t){const i=new Map;tt(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const o=n[s],u=o.transform,h=e.data.field(o.field);i.set(o.field,X3(u,h,t[s]))}return i}function aA(n,e,t){const i=new Map;for(const s of n){const o=s.transform,u=t.data.field(s.field);i.set(s.field,Q3(o,u,e))}return i}class lE extends Gm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class n9 extends Gm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i9{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(e.key)&&e9(o,e,i[s])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Gc(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Gc(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=q1();return this.mutations.forEach(s=>{const o=e.get(s.key),u=o.overlayedDocument;let h=this.applyToLocalView(u,o.mutatedFields);h=t.has(s.key)?null:h;const m=K1(u,h);m!==null&&i.set(s.key,m),u.isValidDocument()||u.convertToNoDocument(Re.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),qe())}isEqual(e){return this.batchId===e.batchId&&Zl(this.mutations,e.mutations,(t,i)=>rA(t,i))&&Zl(this.baseMutations,e.baseMutations,(t,i)=>rA(t,i))}}class uE{constructor(e,t,i,s){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=s}static from(e,t,i){tt(e.mutations.length===i.length,58842,{Ve:e.mutations.length,me:i.length});let s=function(){return G3}();const o=e.mutations;for(let u=0;u<o.length;u++)s=s.insert(o[u].key,i[u].version);return new uE(e,t,i,s)}}/**
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
 */class r9{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class s9{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ht,$e;function a9(n){switch(n){case se.OK:return Se(64938);case se.CANCELLED:case se.UNKNOWN:case se.DEADLINE_EXCEEDED:case se.RESOURCE_EXHAUSTED:case se.INTERNAL:case se.UNAVAILABLE:case se.UNAUTHENTICATED:return!1;case se.INVALID_ARGUMENT:case se.NOT_FOUND:case se.ALREADY_EXISTS:case se.PERMISSION_DENIED:case se.FAILED_PRECONDITION:case se.ABORTED:case se.OUT_OF_RANGE:case se.UNIMPLEMENTED:case se.DATA_LOSS:return!0;default:return Se(15467,{code:n})}}function X1(n){if(n===void 0)return gs("GRPC error has no .code"),se.UNKNOWN;switch(n){case Ht.OK:return se.OK;case Ht.CANCELLED:return se.CANCELLED;case Ht.UNKNOWN:return se.UNKNOWN;case Ht.DEADLINE_EXCEEDED:return se.DEADLINE_EXCEEDED;case Ht.RESOURCE_EXHAUSTED:return se.RESOURCE_EXHAUSTED;case Ht.INTERNAL:return se.INTERNAL;case Ht.UNAVAILABLE:return se.UNAVAILABLE;case Ht.UNAUTHENTICATED:return se.UNAUTHENTICATED;case Ht.INVALID_ARGUMENT:return se.INVALID_ARGUMENT;case Ht.NOT_FOUND:return se.NOT_FOUND;case Ht.ALREADY_EXISTS:return se.ALREADY_EXISTS;case Ht.PERMISSION_DENIED:return se.PERMISSION_DENIED;case Ht.FAILED_PRECONDITION:return se.FAILED_PRECONDITION;case Ht.ABORTED:return se.ABORTED;case Ht.OUT_OF_RANGE:return se.OUT_OF_RANGE;case Ht.UNIMPLEMENTED:return se.UNIMPLEMENTED;case Ht.DATA_LOSS:return se.DATA_LOSS;default:return Se(39323,{code:n})}}($e=Ht||(Ht={}))[$e.OK=0]="OK",$e[$e.CANCELLED=1]="CANCELLED",$e[$e.UNKNOWN=2]="UNKNOWN",$e[$e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$e[$e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$e[$e.NOT_FOUND=5]="NOT_FOUND",$e[$e.ALREADY_EXISTS=6]="ALREADY_EXISTS",$e[$e.PERMISSION_DENIED=7]="PERMISSION_DENIED",$e[$e.UNAUTHENTICATED=16]="UNAUTHENTICATED",$e[$e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$e[$e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$e[$e.ABORTED=10]="ABORTED",$e[$e.OUT_OF_RANGE=11]="OUT_OF_RANGE",$e[$e.UNIMPLEMENTED=12]="UNIMPLEMENTED",$e[$e.INTERNAL=13]="INTERNAL",$e[$e.UNAVAILABLE=14]="UNAVAILABLE",$e[$e.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const o9=new ca([4294967295,4294967295],0);function oA(n){const e=v1().encode(n),t=new h1;return t.update(e),new Uint8Array(t.digest())}function lA(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new ca([t,i],0),new ca([s,o],0)]}class cE{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Oc(`Invalid padding: ${t}`);if(i<0)throw new Oc(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Oc(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Oc(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=ca.fromNumber(this.fe)}pe(e,t,i){let s=e.add(t.multiply(ca.fromNumber(i)));return s.compare(o9)===1&&(s=new ca([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=oA(e),[i,s]=lA(t);for(let o=0;o<this.hashCount;o++){const u=this.pe(i,s,o);if(!this.ye(u))return!1}return!0}static create(e,t,i){const s=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),u=new cE(o,s,t);return i.forEach(h=>u.insert(h)),u}insert(e){if(this.fe===0)return;const t=oA(e),[i,s]=lA(t);for(let o=0;o<this.hashCount;o++){const u=this.pe(i,s,o);this.we(u)}}we(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Oc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e,t,i,s,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const s=new Map;return s.set(e,Ih.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Ym(Re.min(),s,new It(Pe),_s(),qe())}}class Ih{constructor(e,t,i,s,o){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Ih(i,t,qe(),qe(),qe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e,t,i,s){this.Se=e,this.removedTargetIds=t,this.key=i,this.be=s}}class Z1{constructor(e,t){this.targetId=e,this.De=t}}class J1{constructor(e,t,i=An.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class uA{constructor(){this.ve=0,this.Ce=cA(),this.Fe=An.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=qe(),t=qe(),i=qe();return this.Ce.forEach((s,o)=>{switch(o){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:Se(38017,{changeType:o})}}),new Ih(this.Fe,this.Me,e,t,i)}ke(){this.xe=!1,this.Ce=cA()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,tt(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class l9{constructor(e){this.We=e,this.Ge=new Map,this.ze=_s(),this.je=fd(),this.Je=fd(),this.He=new It(Pe)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const i=this.tt(t);switch(e.state){case 0:this.nt(t)&&i.Be(e.resumeToken);break;case 1:i.Ue(),i.Oe||i.ke(),i.Be(e.resumeToken);break;case 2:i.Ue(),i.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(i.Ke(),i.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),i.Be(e.resumeToken));break;default:Se(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((i,s)=>{this.nt(s)&&t(s)})}it(e){const t=e.targetId,i=e.De.count,s=this.st(t);if(s){const o=s.target;if(_y(o))if(i===0){const u=new ye(o.path);this.Xe(t,u,On.newNoDocument(u,Re.min()))}else tt(i===1,20013,{expectedCount:i});else{const u=this.ot(t);if(u!==i){const h=this._t(e),m=h?this.ut(h,e,u):1;if(m!==0){this.rt(t);const p=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,p)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=t;let u,h;try{u=va(i).toUint8Array()}catch(m){if(m instanceof S1)return ga("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{h=new cE(u,s,o)}catch(m){return ga(m instanceof Oc?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return h.fe===0?null:h}ut(e,t,i){return t.De.count===i-this.ht(e,t.targetId)?0:2}ht(e,t){const i=this.We.getRemoteKeysForTarget(t);let s=0;return i.forEach(o=>{const u=this.We.lt(),h=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;e.mightContain(h)||(this.Xe(t,o,null),s++)}),s}Pt(e){const t=new Map;this.Ge.forEach((o,u)=>{const h=this.st(u);if(h){if(o.current&&_y(h.target)){const m=new ye(h.target.path);this.Tt(m).has(u)||this.It(u,m)||this.Xe(u,m,On.newNoDocument(m,e))}o.Ne&&(t.set(u,o.Le()),o.ke())}});let i=qe();this.Je.forEach((o,u)=>{let h=!0;u.forEachWhile(m=>{const p=this.st(m);return!p||p.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)}),h&&(i=i.add(o))}),this.ze.forEach((o,u)=>u.setReadTime(e));const s=new Ym(e,t,this.He,this.ze,i);return this.ze=_s(),this.je=fd(),this.Je=fd(),this.He=new It(Pe),s}Ze(e,t){if(!this.nt(e))return;const i=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,i),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,i){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),i&&(this.ze=this.ze.insert(t,i))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new uA,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new en(Pe),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new en(Pe),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||fe("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new uA),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function fd(){return new It(ye.comparator)}function cA(){return new It(ye.comparator)}const u9={asc:"ASCENDING",desc:"DESCENDING"},c9={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},h9={and:"AND",or:"OR"};class f9{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function vy(n,e){return n.useProto3Json||jm(e)?e:{value:e}}function cm(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function eN(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function d9(n,e){return cm(n,e.toTimestamp())}function Sr(n){return tt(!!n,49232),Re.fromTimestamp(function(t){const i=ya(t);return new vt(i.seconds,i.nanos)}(n))}function hE(n,e){return Ey(n,e).canonicalString()}function Ey(n,e){const t=function(s){return new yt(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function tN(n){const e=yt.fromString(n);return tt(aN(e),10190,{key:e.toString()}),e}function Ty(n,e){return hE(n.databaseId,e.path)}function k_(n,e){const t=tN(e);if(t.get(1)!==n.databaseId.projectId)throw new me(se.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new me(se.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ye(iN(t))}function nN(n,e){return hE(n.databaseId,e)}function m9(n){const e=tN(n);return e.length===4?yt.emptyPath():iN(e)}function wy(n){return new yt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function iN(n){return tt(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function hA(n,e,t){return{name:Ty(n,e),fields:t.value.mapValue.fields}}function p9(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(p){return p==="NO_CHANGE"?0:p==="ADD"?1:p==="REMOVE"?2:p==="CURRENT"?3:p==="RESET"?4:Se(39313,{state:p})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],o=function(p,_){return p.useProto3Json?(tt(_===void 0||typeof _=="string",58123),An.fromBase64String(_||"")):(tt(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array,16193),An.fromUint8Array(_||new Uint8Array))}(n,e.targetChange.resumeToken),u=e.targetChange.cause,h=u&&function(p){const _=p.code===void 0?se.UNKNOWN:X1(p.code);return new me(_,p.message||"")}(u);t=new J1(i,s,o,h||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=k_(n,i.document.name),o=Sr(i.document.updateTime),u=i.document.createTime?Sr(i.document.createTime):Re.min(),h=new Yn({mapValue:{fields:i.document.fields}}),m=On.newFoundDocument(s,o,u,h),p=i.targetIds||[],_=i.removedTargetIds||[];t=new Nd(p,_,m.key,m)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=k_(n,i.document),o=i.readTime?Sr(i.readTime):Re.min(),u=On.newNoDocument(s,o),h=i.removedTargetIds||[];t=new Nd([],h,u.key,u)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=k_(n,i.document),o=i.removedTargetIds||[];t=new Nd([],o,s,null)}else{if(!("filter"in e))return Se(11601,{At:e});{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:o}=i,u=new s9(s,o),h=i.targetId;t=new Z1(h,u)}}return t}function g9(n,e){let t;if(e instanceof Rh)t={update:hA(n,e.key,e.value)};else if(e instanceof lE)t={delete:Ty(n,e.key)};else if(e instanceof Ra)t={update:hA(n,e.key,e.data),updateMask:A9(e.fieldMask)};else{if(!(e instanceof n9))return Se(16599,{Rt:e.type});t={verify:Ty(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(o,u){const h=u.transform;if(h instanceof lm)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof lh)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof uh)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof um)return{fieldPath:u.field.canonicalString(),increment:h.Ee};throw Se(20930,{transform:u.transform})}(0,i))),e.precondition.isNone||(t.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:d9(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:Se(27497)}(n,e.precondition)),t}function _9(n,e){return n&&n.length>0?(tt(e!==void 0,14353),n.map(t=>function(s,o){let u=s.updateTime?Sr(s.updateTime):Sr(o);return u.isEqual(Re.min())&&(u=Sr(o)),new J3(u,s.transformResults||[])}(t,e))):[]}function y9(n,e){return{documents:[nN(n,e.path)]}}function v9(n,e){const t={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=nN(n,s);const o=function(p){if(p.length!==0)return sN(Nr.create(p,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const u=function(p){if(p.length!==0)return p.map(_=>function(T){return{field:kl(T.field),direction:w9(T.dir)}}(_))}(e.orderBy);u&&(t.structuredQuery.orderBy=u);const h=vy(n,e.limit);return h!==null&&(t.structuredQuery.limit=h),e.startAt&&(t.structuredQuery.startAt=function(p){return{before:p.inclusive,values:p.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(p){return{before:!p.inclusive,values:p.position}}(e.endAt)),{Vt:t,parent:s}}function E9(n){let e=m9(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){tt(i===1,65062);const _=t.from[0];_.allDescendants?s=_.collectionId:e=e.child(_.collectionId)}let o=[];t.where&&(o=function(v){const T=rN(v);return T instanceof Nr&&P1(T)?T.getFilters():[T]}(t.where));let u=[];t.orderBy&&(u=function(v){return v.map(T=>function(O){return new om(Pl(O.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(O.direction))}(T))}(t.orderBy));let h=null;t.limit&&(h=function(v){let T;return T=typeof v=="object"?v.value:v,jm(T)?null:T}(t.limit));let m=null;t.startAt&&(m=function(v){const T=!!v.before,C=v.values||[];return new am(C,T)}(t.startAt));let p=null;return t.endAt&&(p=function(v){const T=!v.before,C=v.values||[];return new am(C,T)}(t.endAt)),j3(e,s,u,o,h,"F",m,p)}function T9(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Se(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function rN(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Pl(t.unaryFilter.field);return Jt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=Pl(t.unaryFilter.field);return Jt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Pl(t.unaryFilter.field);return Jt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Pl(t.unaryFilter.field);return Jt.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Se(61313);default:return Se(60726)}}(n):n.fieldFilter!==void 0?function(t){return Jt.create(Pl(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Se(58110);default:return Se(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Nr.create(t.compositeFilter.filters.map(i=>rN(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Se(1026)}}(t.compositeFilter.op))}(n):Se(30097,{filter:n})}function w9(n){return u9[n]}function b9(n){return c9[n]}function S9(n){return h9[n]}function kl(n){return{fieldPath:n.canonicalString()}}function Pl(n){return bn.fromServerFormat(n.fieldPath)}function sN(n){return n instanceof Jt?function(t){if(t.op==="=="){if(ZS(t.value))return{unaryFilter:{field:kl(t.field),op:"IS_NAN"}};if(XS(t.value))return{unaryFilter:{field:kl(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ZS(t.value))return{unaryFilter:{field:kl(t.field),op:"IS_NOT_NAN"}};if(XS(t.value))return{unaryFilter:{field:kl(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:kl(t.field),op:b9(t.op),value:t.value}}}(n):n instanceof Nr?function(t){const i=t.getFilters().map(s=>sN(s));return i.length===1?i[0]:{compositeFilter:{op:S9(t.op),filters:i}}}(n):Se(54877,{filter:n})}function A9(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function aN(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,t,i,s,o=Re.min(),u=Re.min(),h=An.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=h,this.expectedCount=m}withSequenceNumber(e){return new sa(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new sa(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new sa(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new sa(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C9{constructor(e){this.gt=e}}function R9(n){const e=E9({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?yy(e,e.limit,"L"):e}/**
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
 */class I9{constructor(){this.Dn=new N9}addToCollectionParentIndex(e,t){return this.Dn.add(t),ie.resolve()}getCollectionParents(e,t){return ie.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return ie.resolve()}deleteFieldIndex(e,t){return ie.resolve()}deleteAllFieldIndexes(e){return ie.resolve()}createTargetIndexes(e,t){return ie.resolve()}getDocumentsMatchingTarget(e,t){return ie.resolve(null)}getIndexType(e,t){return ie.resolve(0)}getFieldIndexes(e,t){return ie.resolve([])}getNextCollectionGroupToUpdate(e){return ie.resolve(null)}getMinOffset(e,t){return ie.resolve(_a.min())}getMinOffsetFromCollectionGroup(e,t){return ie.resolve(_a.min())}updateCollectionGroup(e,t,i){return ie.resolve()}updateIndexEntries(e,t){return ie.resolve()}}class N9{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new en(yt.comparator),o=!s.has(i);return this.index[t]=s.add(i),o}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new en(yt.comparator)).toArray()}}/**
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
 */const fA={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},oN=41943040;class Hn{static withCacheSize(e){return new Hn(e,Hn.DEFAULT_COLLECTION_PERCENTILE,Hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hn.DEFAULT_COLLECTION_PERCENTILE=10,Hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Hn.DEFAULT=new Hn(oN,Hn.DEFAULT_COLLECTION_PERCENTILE,Hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Hn.DISABLED=new Hn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new tu(0)}static ur(){return new tu(-1)}}/**
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
 */const dA="LruGarbageCollector",D9=1048576;function mA([n,e],[t,i]){const s=Pe(n,t);return s===0?Pe(e,i):s}class O9{constructor(e){this.Tr=e,this.buffer=new en(mA),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();mA(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class x9{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){fe(dA,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){pu(t)?fe(dA,"Ignoring IndexedDB error during garbage collection: ",t):await mu(t)}await this.Rr(3e5)})}}class k9{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return ie.resolve(Um.ue);const i=new O9(t);return this.Vr.forEachTarget(e,s=>i.Er(s.sequenceNumber)).next(()=>this.Vr.gr(e,s=>i.Er(s))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(fe("LruGarbageCollector","Garbage collection skipped; disabled"),ie.resolve(fA)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(fe("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),fA):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let i,s,o,u,h,m,p;const _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(v=>(v>this.params.maximumSequenceNumbersToCollect?(fe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),s=this.params.maximumSequenceNumbersToCollect):s=v,u=Date.now(),this.nthSequenceNumber(e,s))).next(v=>(i=v,h=Date.now(),this.removeTargets(e,i,t))).next(v=>(o=v,m=Date.now(),this.removeOrphanedDocuments(e,i))).next(v=>(p=Date.now(),Ol()<=Fe.DEBUG&&fe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-_}ms
	Determined least recently used ${s} in `+(h-u)+`ms
	Removed ${o} targets in `+(m-h)+`ms
	Removed ${v} documents in `+(p-m)+`ms
Total Duration: ${p-_}ms`),ie.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:v})))}}function P9(n,e){return new k9(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M9{constructor(){this.changes=new Po(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,On.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?ie.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class L9{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V9{constructor(e,t,i,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(i!==null&&Gc(i.mutation,s,ui.empty(),vt.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,qe()).next(()=>i))}getLocalViewOfDocuments(e,t,i=qe()){const s=go();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,i).next(o=>{let u=Dc();return o.forEach((h,m)=>{u=u.insert(h,m.overlayedDocument)}),u}))}getOverlayedDocuments(e,t){const i=go();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,qe()))}populateOverlays(e,t,i){const s=[];return i.forEach(o=>{t.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(e,s).next(o=>{o.forEach((u,h)=>{t.set(u,h)})})}computeViews(e,t,i,s){let o=_s();const u=Hc(),h=function(){return Hc()}();return t.forEach((m,p)=>{const _=i.get(p.key);s.has(p.key)&&(_===void 0||_.mutation instanceof Ra)?o=o.insert(p.key,p):_!==void 0?(u.set(p.key,_.mutation.getFieldMask()),Gc(_.mutation,p,_.mutation.getFieldMask(),vt.now())):u.set(p.key,ui.empty())}),this.recalculateAndSaveOverlays(e,o).next(m=>(m.forEach((p,_)=>u.set(p,_)),t.forEach((p,_)=>{var v;return h.set(p,new L9(_,(v=u.get(p))!==null&&v!==void 0?v:null))}),h))}recalculateAndSaveOverlays(e,t){const i=Hc();let s=new It((u,h)=>u-h),o=qe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(u=>{for(const h of u)h.keys().forEach(m=>{const p=t.get(m);if(p===null)return;let _=i.get(m)||ui.empty();_=h.applyToLocalView(p,_),i.set(m,_);const v=(s.get(h.batchId)||qe()).add(m);s=s.insert(h.batchId,v)})}).next(()=>{const u=[],h=s.getReverseIterator();for(;h.hasNext();){const m=h.getNext(),p=m.key,_=m.value,v=q1();_.forEach(T=>{if(!o.has(T)){const C=K1(t.get(T),i.get(T));C!==null&&v.set(T,C),o=o.add(T)}}),u.push(this.documentOverlayCache.saveOverlays(e,p,v))}return ie.waitFor(u)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,s){return function(u){return ye.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):F3(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,s):this.getDocumentsMatchingCollectionQuery(e,t,i,s)}getNextDocuments(e,t,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,s).next(o=>{const u=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,s-o.size):ie.resolve(go());let h=rh,m=o;return u.next(p=>ie.forEach(p,(_,v)=>(h<v.largestBatchId&&(h=v.largestBatchId),o.get(_)?ie.resolve():this.remoteDocumentCache.getEntry(e,_).next(T=>{m=m.insert(_,T)}))).next(()=>this.populateOverlays(e,p,o)).next(()=>this.computeViews(e,m,p,qe())).next(_=>({batchId:h,changes:z1(_)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ye(t)).next(i=>{let s=Dc();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,i,s){const o=t.collectionGroup;let u=Dc();return this.indexManager.getCollectionParents(e,o).next(h=>ie.forEach(h,m=>{const p=function(v,T){return new Bm(T,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(t,m.child(o));return this.getDocumentsMatchingCollectionQuery(e,p,i,s).next(_=>{_.forEach((v,T)=>{u=u.insert(v,T)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(e,t,i,s){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,o,s))).next(u=>{o.forEach((m,p)=>{const _=p.getKey();u.get(_)===null&&(u=u.insert(_,On.newInvalidDocument(_)))});let h=Dc();return u.forEach((m,p)=>{const _=o.get(m);_!==void 0&&Gc(_.mutation,p,ui.empty(),vt.now()),qm(t,p)&&(h=h.insert(m,p))}),h})}}/**
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
 */class U9{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return ie.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Sr(s.createTime)}}(t)),ie.resolve()}getNamedQuery(e,t){return ie.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(s){return{name:s.name,query:R9(s.bundledQuery),readTime:Sr(s.readTime)}}(t)),ie.resolve()}}/**
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
 */class j9{constructor(){this.overlays=new It(ye.comparator),this.kr=new Map}getOverlay(e,t){return ie.resolve(this.overlays.get(t))}getOverlays(e,t){const i=go();return ie.forEach(t,s=>this.getOverlay(e,s).next(o=>{o!==null&&i.set(s,o)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((s,o)=>{this.wt(e,t,o)}),ie.resolve()}removeOverlaysForBatchId(e,t,i){const s=this.kr.get(i);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.kr.delete(i)),ie.resolve()}getOverlaysForCollection(e,t,i){const s=go(),o=t.length+1,u=new ye(t.child("")),h=this.overlays.getIteratorFrom(u);for(;h.hasNext();){const m=h.getNext().value,p=m.getKey();if(!t.isPrefixOf(p.path))break;p.path.length===o&&m.largestBatchId>i&&s.set(m.getKey(),m)}return ie.resolve(s)}getOverlaysForCollectionGroup(e,t,i,s){let o=new It((p,_)=>p-_);const u=this.overlays.getIterator();for(;u.hasNext();){const p=u.getNext().value;if(p.getKey().getCollectionGroup()===t&&p.largestBatchId>i){let _=o.get(p.largestBatchId);_===null&&(_=go(),o=o.insert(p.largestBatchId,_)),_.set(p.getKey(),p)}}const h=go(),m=o.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((p,_)=>h.set(p,_)),!(h.size()>=s)););return ie.resolve(h)}wt(e,t,i){const s=this.overlays.get(i.key);if(s!==null){const u=this.kr.get(s.largestBatchId).delete(i.key);this.kr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(i.key,new r9(t,i));let o=this.kr.get(t);o===void 0&&(o=qe(),this.kr.set(t,o)),this.kr.set(t,o.add(i.key))}}/**
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
 */class F9{constructor(){this.sessionToken=An.EMPTY_BYTE_STRING}getSessionToken(e){return ie.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ie.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(){this.qr=new en(un.Qr),this.$r=new en(un.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const i=new un(e,t);this.qr=this.qr.add(i),this.$r=this.$r.add(i)}Kr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.Wr(new un(e,t))}Gr(e,t){e.forEach(i=>this.removeReference(i,t))}zr(e){const t=new ye(new yt([])),i=new un(t,e),s=new un(t,e+1),o=[];return this.$r.forEachInRange([i,s],u=>{this.Wr(u),o.push(u.key)}),o}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new ye(new yt([])),i=new un(t,e),s=new un(t,e+1);let o=qe();return this.$r.forEachInRange([i,s],u=>{o=o.add(u.key)}),o}containsKey(e){const t=new un(e,0),i=this.qr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class un{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return ye.comparator(e.key,t.key)||Pe(e.Hr,t.Hr)}static Ur(e,t){return Pe(e.Hr,t.Hr)||ye.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B9{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new en(un.Qr)}checkEmpty(e){return ie.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,s){const o=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new i9(o,t,i,s);this.mutationQueue.push(u);for(const h of s)this.Yr=this.Yr.add(new un(h.key,o)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast());return ie.resolve(u)}lookupMutationBatch(e,t){return ie.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this.Xr(i),o=s<0?0:s;return ie.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return ie.resolve(this.mutationQueue.length===0?nE:this.er-1)}getAllMutationBatches(e){return ie.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new un(t,0),s=new un(t,Number.POSITIVE_INFINITY),o=[];return this.Yr.forEachInRange([i,s],u=>{const h=this.Zr(u.Hr);o.push(h)}),ie.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new en(Pe);return t.forEach(s=>{const o=new un(s,0),u=new un(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([o,u],h=>{i=i.add(h.Hr)})}),ie.resolve(this.ei(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let o=i;ye.isDocumentKey(o)||(o=o.child(""));const u=new un(new ye(o),0);let h=new en(Pe);return this.Yr.forEachWhile(m=>{const p=m.key.path;return!!i.isPrefixOf(p)&&(p.length===s&&(h=h.add(m.Hr)),!0)},u),ie.resolve(this.ei(h))}ei(e){const t=[];return e.forEach(i=>{const s=this.Zr(i);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){tt(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Yr;return ie.forEach(t.mutations,s=>{const o=new un(s.key,t.batchId);return i=i.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Yr=i})}rr(e){}containsKey(e,t){const i=new un(t,0),s=this.Yr.firstAfterOrEqual(i);return ie.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,ie.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z9{constructor(e){this.ni=e,this.docs=function(){return new It(ye.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,s=this.docs.get(i),o=s?s.size:0,u=this.ni(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return ie.resolve(i?i.document.mutableCopy():On.newInvalidDocument(t))}getEntries(e,t){let i=_s();return t.forEach(s=>{const o=this.docs.get(s);i=i.insert(s,o?o.document.mutableCopy():On.newInvalidDocument(s))}),ie.resolve(i)}getDocumentsMatchingQuery(e,t,i,s){let o=_s();const u=t.path,h=new ye(u.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(h);for(;m.hasNext();){const{key:p,value:{document:_}}=m.getNext();if(!u.isPrefixOf(p.path))break;p.path.length>u.length+1||_3(g3(_),i)<=0||(s.has(_.key)||qm(t,_))&&(o=o.insert(_.key,_.mutableCopy()))}return ie.resolve(o)}getAllFromCollectionGroup(e,t,i,s){Se(9500)}ri(e,t){return ie.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new q9(this)}getSize(e){return ie.resolve(this.size)}}class q9 extends M9{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(i)}),ie.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H9{constructor(e){this.persistence=e,this.ii=new Po(t=>sE(t),aE),this.lastRemoteSnapshotVersion=Re.min(),this.highestTargetId=0,this.si=0,this.oi=new fE,this.targetCount=0,this._i=tu.ar()}forEachTarget(e,t){return this.ii.forEach((i,s)=>t(s)),ie.resolve()}getLastRemoteSnapshotVersion(e){return ie.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ie.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),ie.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.si&&(this.si=t),ie.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new tu(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,ie.resolve()}updateTargetData(e,t){return this.hr(t),ie.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,ie.resolve()}removeTargets(e,t,i){let s=0;const o=[];return this.ii.forEach((u,h)=>{h.sequenceNumber<=t&&i.get(h.targetId)===null&&(this.ii.delete(u),o.push(this.removeMatchingKeysForTargetId(e,h.targetId)),s++)}),ie.waitFor(o).next(()=>s)}getTargetCount(e){return ie.resolve(this.targetCount)}getTargetData(e,t){const i=this.ii.get(t)||null;return ie.resolve(i)}addMatchingKeys(e,t,i){return this.oi.Kr(t,i),ie.resolve()}removeMatchingKeys(e,t,i){this.oi.Gr(t,i);const s=this.persistence.referenceDelegate,o=[];return s&&t.forEach(u=>{o.push(s.markPotentiallyOrphaned(e,u))}),ie.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),ie.resolve()}getMatchingKeysForTargetId(e,t){const i=this.oi.Jr(t);return ie.resolve(i)}containsKey(e,t){return ie.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e,t){this.ai={},this.overlays={},this.ui=new Um(0),this.ci=!1,this.ci=!0,this.li=new F9,this.referenceDelegate=e(this),this.hi=new H9(this),this.indexManager=new I9,this.remoteDocumentCache=function(s){return new z9(s)}(i=>this.referenceDelegate.Pi(i)),this.serializer=new C9(t),this.Ti=new U9(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new j9,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ai[e.toKey()];return i||(i=new B9(t,this.referenceDelegate),this.ai[e.toKey()]=i),i}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,i){fe("MemoryPersistence","Starting transaction:",e);const s=new G9(this.ui.next());return this.referenceDelegate.Ii(),i(s).next(o=>this.referenceDelegate.di(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Ei(e,t){return ie.or(Object.values(this.ai).map(i=>()=>i.containsKey(e,t)))}}class G9 extends v3{constructor(e){super(),this.currentSequenceNumber=e}}class dE{constructor(e){this.persistence=e,this.Ai=new fE,this.Ri=null}static Vi(e){return new dE(e)}get mi(){if(this.Ri)return this.Ri;throw Se(60996)}addReference(e,t,i){return this.Ai.addReference(i,t),this.mi.delete(i.toString()),ie.resolve()}removeReference(e,t,i){return this.Ai.removeReference(i,t),this.mi.add(i.toString()),ie.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),ie.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(s=>this.mi.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(o=>this.mi.add(o.toString()))}).next(()=>i.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ie.forEach(this.mi,i=>{const s=ye.fromPath(i);return this.fi(e,s).next(o=>{o||t.removeEntry(s,Re.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(i=>{i?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return ie.or([()=>ie.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class hm{constructor(e,t){this.persistence=e,this.gi=new Po(i=>w3(i.path),(i,s)=>i.isEqual(s)),this.garbageCollector=P9(this,t)}static Vi(e,t){return new hm(e,t)}Ii(){}di(e){return ie.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(s=>i+s))}yr(e){let t=0;return this.gr(e,i=>{t++}).next(()=>t)}gr(e,t){return ie.forEach(this.gi,(i,s)=>this.Sr(e,i,s).next(o=>o?ie.resolve():t(s)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ri(e,u=>this.Sr(e,u,t).next(h=>{h||(i++,o.removeEntry(u,Re.min()))})).next(()=>o.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),ie.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),ie.resolve()}removeReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),ie.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),ie.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Cd(e.data.value)),t}Sr(e,t,i){return ie.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return ie.resolve(s!==void 0&&s>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.Is=i,this.ds=s}static Es(e,t){let i=qe(),s=qe();for(const o of t.docChanges)switch(o.type){case 0:i=i.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new mE(e,t.fromCache,i,s)}}/**
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
 */class Y9{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class $9{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return xk()?8:E3(kn())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,i,s){const o={result:null};return this.ps(e,t).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.ys(e,t,s,i).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new Y9;return this.ws(e,t,u).next(h=>{if(o.result=h,this.Rs)return this.Ss(e,t,u,h.size)})}).next(()=>o.result)}Ss(e,t,i,s){return i.documentReadCount<this.Vs?(Ol()<=Fe.DEBUG&&fe("QueryEngine","SDK will not create cache indexes for query:",xl(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),ie.resolve()):(Ol()<=Fe.DEBUG&&fe("QueryEngine","Query:",xl(t),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.fs*s?(Ol()<=Fe.DEBUG&&fe("QueryEngine","The SDK decides to create cache indexes for query:",xl(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,br(t))):ie.resolve())}ps(e,t){if(nA(t))return ie.resolve(null);let i=br(t);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=yy(t,null,"F"),i=br(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(o=>{const u=qe(...o);return this.gs.getDocuments(e,u).next(h=>this.indexManager.getMinOffset(e,i).next(m=>{const p=this.bs(t,h);return this.Ds(t,p,u,m.readTime)?this.ps(e,yy(t,null,"F")):this.vs(e,p,t,m)}))})))}ys(e,t,i,s){return nA(t)||s.isEqual(Re.min())?ie.resolve(null):this.gs.getDocuments(e,i).next(o=>{const u=this.bs(t,o);return this.Ds(t,u,i,s)?ie.resolve(null):(Ol()<=Fe.DEBUG&&fe("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),xl(t)),this.vs(e,u,t,p3(s,rh)).next(h=>h))})}bs(e,t){let i=new en(F1(e));return t.forEach((s,o)=>{qm(e,o)&&(i=i.add(o))}),i}Ds(e,t,i,s){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ws(e,t,i){return Ol()<=Fe.DEBUG&&fe("QueryEngine","Using full collection scan to execute query:",xl(t)),this.gs.getDocumentsMatchingQuery(e,t,_a.min(),i)}vs(e,t,i,s){return this.gs.getDocumentsMatchingQuery(e,i,s).next(o=>(t.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
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
 */const pE="LocalStore",W9=3e8;class K9{constructor(e,t,i,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new It(Pe),this.Ms=new Po(o=>sE(o),aE),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(i)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new V9(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function Q9(n,e,t,i){return new K9(n,e,t,i)}async function uN(n,e){const t=Ie(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let s;return t.mutationQueue.getAllMutationBatches(i).next(o=>(s=o,t.Ns(e),t.mutationQueue.getAllMutationBatches(i))).next(o=>{const u=[],h=[];let m=qe();for(const p of s){u.push(p.batchId);for(const _ of p.mutations)m=m.add(_.key)}for(const p of o){h.push(p.batchId);for(const _ of p.mutations)m=m.add(_.key)}return t.localDocuments.getDocuments(i,m).next(p=>({Bs:p,removedBatchIds:u,addedBatchIds:h}))})})}function X9(n,e){const t=Ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),o=t.Os.newChangeBuffer({trackRemovals:!0});return function(h,m,p,_){const v=p.batch,T=v.keys();let C=ie.resolve();return T.forEach(O=>{C=C.next(()=>_.getEntry(m,O)).next(P=>{const L=p.docVersions.get(O);tt(L!==null,48541),P.version.compareTo(L)<0&&(v.applyToRemoteDocument(P,p),P.isValidDocument()&&(P.setReadTime(p.commitVersion),_.addEntry(P)))})}),C.next(()=>h.mutationQueue.removeMutationBatch(m,v))}(t,i,e,o).next(()=>o.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(h){let m=qe();for(let p=0;p<h.mutationResults.length;++p)h.mutationResults[p].transformResults.length>0&&(m=m.add(h.batch.mutations[p].key));return m}(e))).next(()=>t.localDocuments.getDocuments(i,s))})}function cN(n){const e=Ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function Z9(n,e){const t=Ie(n),i=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const h=[];e.targetChanges.forEach((_,v)=>{const T=s.get(v);if(!T)return;h.push(t.hi.removeMatchingKeys(o,_.removedDocuments,v).next(()=>t.hi.addMatchingKeys(o,_.addedDocuments,v)));let C=T.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(v)!==null?C=C.withResumeToken(An.EMPTY_BYTE_STRING,Re.min()).withLastLimboFreeSnapshotVersion(Re.min()):_.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(_.resumeToken,i)),s=s.insert(v,C),function(P,L,H){return P.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=W9?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(T,C,_)&&h.push(t.hi.updateTargetData(o,C))});let m=_s(),p=qe();if(e.documentUpdates.forEach(_=>{e.resolvedLimboDocuments.has(_)&&h.push(t.persistence.referenceDelegate.updateLimboDocument(o,_))}),h.push(J9(o,u,e.documentUpdates).next(_=>{m=_.Ls,p=_.ks})),!i.isEqual(Re.min())){const _=t.hi.getLastRemoteSnapshotVersion(o).next(v=>t.hi.setTargetsMetadata(o,o.currentSequenceNumber,i));h.push(_)}return ie.waitFor(h).next(()=>u.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,m,p)).next(()=>m)}).then(o=>(t.Fs=s,o))}function J9(n,e,t){let i=qe(),s=qe();return t.forEach(o=>i=i.add(o)),e.getEntries(n,i).next(o=>{let u=_s();return t.forEach((h,m)=>{const p=o.get(h);m.isFoundDocument()!==p.isFoundDocument()&&(s=s.add(h)),m.isNoDocument()&&m.version.isEqual(Re.min())?(e.removeEntry(h,m.readTime),u=u.insert(h,m)):!p.isValidDocument()||m.version.compareTo(p.version)>0||m.version.compareTo(p.version)===0&&p.hasPendingWrites?(e.addEntry(m),u=u.insert(h,m)):fe(pE,"Ignoring outdated watch update for ",h,". Current version:",p.version," Watch version:",m.version)}),{Ls:u,ks:s}})}function eF(n,e){const t=Ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=nE),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function tF(n,e){const t=Ie(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return t.hi.getTargetData(i,e).next(o=>o?(s=o,ie.resolve(s)):t.hi.allocateTargetId(i).next(u=>(s=new sa(e,u,"TargetPurposeListen",i.currentSequenceNumber),t.hi.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=t.Fs.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(i.targetId,i),t.Ms.set(e,i.targetId)),i})}async function by(n,e,t){const i=Ie(n),s=i.Fs.get(e),o=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",o,u=>i.persistence.referenceDelegate.removeTarget(u,s))}catch(u){if(!pu(u))throw u;fe(pE,`Failed to update sequence numbers for target ${e}: ${u}`)}i.Fs=i.Fs.remove(e),i.Ms.delete(s.target)}function pA(n,e,t){const i=Ie(n);let s=Re.min(),o=qe();return i.persistence.runTransaction("Execute query","readwrite",u=>function(m,p,_){const v=Ie(m),T=v.Ms.get(_);return T!==void 0?ie.resolve(v.Fs.get(T)):v.hi.getTargetData(p,_)}(i,u,br(e)).next(h=>{if(h)return s=h.lastLimboFreeSnapshotVersion,i.hi.getMatchingKeysForTargetId(u,h.targetId).next(m=>{o=m})}).next(()=>i.Cs.getDocumentsMatchingQuery(u,e,t?s:Re.min(),t?o:qe())).next(h=>(nF(i,z3(e),h),{documents:h,qs:o})))}function nF(n,e,t){let i=n.xs.get(e)||Re.min();t.forEach((s,o)=>{o.readTime.compareTo(i)>0&&(i=o.readTime)}),n.xs.set(e,i)}class gA{constructor(){this.activeTargetIds=W3()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class iF{constructor(){this.Fo=new gA,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,i){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new gA,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class rF{xo(e){}shutdown(){}}/**
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
 */const _A="ConnectivityMonitor";class yA{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){fe(_A,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){fe(_A,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let dd=null;function Sy(){return dd===null?dd=function(){return 268435456+Math.round(2147483648*Math.random())}():dd++,"0x"+dd.toString(16)}/**
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
 */const P_="RestConnection",sF={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class aF{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${i}/databases/${s}`,this.Ko=this.databaseId.database===rm?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Wo(e,t,i,s,o){const u=Sy(),h=this.Go(e,t.toUriEncodedString());fe(P_,`Sending RPC '${e}' ${u}:`,h,i);const m={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(m,s,o);const{host:p}=new URL(h),_=Or(p);return this.jo(e,h,m,i,_).then(v=>(fe(P_,`Received RPC '${e}' ${u}: `,v),v),v=>{throw ga(P_,`RPC '${e}' ${u} failed with error: `,v,"url: ",h,"request:",i),v})}Jo(e,t,i,s,o,u){return this.Wo(e,t,i,s,o)}zo(e,t,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+du}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,o)=>e[o]=s),i&&i.headers.forEach((s,o)=>e[o]=s)}Go(e,t){const i=sF[e];return`${this.$o}/v1/${t}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oF{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In="WebChannelConnection";class lF extends aF{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,i,s,o){const u=Sy();return new Promise((h,m)=>{const p=new f1;p.setWithCredentials(!0),p.listenOnce(d1.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case Ad.NO_ERROR:const v=p.getResponseJson();fe(In,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(v)),h(v);break;case Ad.TIMEOUT:fe(In,`RPC '${e}' ${u} timed out`),m(new me(se.DEADLINE_EXCEEDED,"Request time out"));break;case Ad.HTTP_ERROR:const T=p.getStatus();if(fe(In,`RPC '${e}' ${u} failed with status:`,T,"response text:",p.getResponseText()),T>0){let C=p.getResponseJson();Array.isArray(C)&&(C=C[0]);const O=C?.error;if(O&&O.status&&O.message){const P=function(H){const J=H.toLowerCase().replace(/_/g,"-");return Object.values(se).indexOf(J)>=0?J:se.UNKNOWN}(O.status);m(new me(P,O.message))}else m(new me(se.UNKNOWN,"Server responded with status "+p.getStatus()))}else m(new me(se.UNAVAILABLE,"Connection failed."));break;default:Se(9055,{c_:e,streamId:u,l_:p.getLastErrorCode(),h_:p.getLastError()})}}finally{fe(In,`RPC '${e}' ${u} completed.`)}});const _=JSON.stringify(s);fe(In,`RPC '${e}' ${u} sending request:`,s),p.send(t,"POST",_,i,15)})}P_(e,t,i){const s=Sy(),o=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=g1(),h=p1(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(m.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(m.useFetchStreams=!0),this.zo(m.initMessageHeaders,t,i),m.encodeInitMessageHeaders=!0;const _=o.join("");fe(In,`Creating RPC '${e}' stream ${s}: ${_}`,m);const v=u.createWebChannel(_,m);this.T_(v);let T=!1,C=!1;const O=new oF({Ho:L=>{C?fe(In,`Not sending because RPC '${e}' stream ${s} is closed:`,L):(T||(fe(In,`Opening RPC '${e}' stream ${s} transport.`),v.open(),T=!0),fe(In,`RPC '${e}' stream ${s} sending:`,L),v.send(L))},Yo:()=>v.close()}),P=(L,H,J)=>{L.listen(H,W=>{try{J(W)}catch(re){setTimeout(()=>{throw re},0)}})};return P(v,Nc.EventType.OPEN,()=>{C||(fe(In,`RPC '${e}' stream ${s} transport opened.`),O.s_())}),P(v,Nc.EventType.CLOSE,()=>{C||(C=!0,fe(In,`RPC '${e}' stream ${s} transport closed`),O.__(),this.I_(v))}),P(v,Nc.EventType.ERROR,L=>{C||(C=!0,ga(In,`RPC '${e}' stream ${s} transport errored. Name:`,L.name,"Message:",L.message),O.__(new me(se.UNAVAILABLE,"The operation could not be completed")))}),P(v,Nc.EventType.MESSAGE,L=>{var H;if(!C){const J=L.data[0];tt(!!J,16349);const W=J,re=W?.error||((H=W[0])===null||H===void 0?void 0:H.error);if(re){fe(In,`RPC '${e}' stream ${s} received error:`,re);const K=re.status;let ae=function(I){const M=Ht[I];if(M!==void 0)return X1(M)}(K),N=re.message;ae===void 0&&(ae=se.INTERNAL,N="Unknown error status: "+K+" with message "+re.message),C=!0,O.__(new me(ae,N)),v.close()}else fe(In,`RPC '${e}' stream ${s} received:`,J),O.a_(J)}}),P(h,m1.STAT_EVENT,L=>{L.stat===fy.PROXY?fe(In,`RPC '${e}' stream ${s} detected buffering proxy`):L.stat===fy.NOPROXY&&fe(In,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{O.o_()},0),O}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}function M_(){return typeof document<"u"?document:null}/**
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
 */function $m(n){return new f9(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(e,t,i=1e3,s=1.5,o=6e4){this.Fi=e,this.timerId=t,this.d_=i,this.E_=s,this.A_=o,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),i=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-i);s>0&&fe("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA="PersistentStream";class fN{constructor(e,t,i,s,o,u,h,m){this.Fi=e,this.w_=i,this.S_=s,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=h,this.listener=m,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new hN(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===se.RESOURCE_EXHAUSTED?(gs(t.toString()),gs("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===se.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.b_===t&&this.W_(i,s)},i=>{e(()=>{const s=new me(se.UNKNOWN,"Fetching auth token failed: "+i.message);return this.G_(s)})})}W_(e,t){const i=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{i(()=>this.listener.Zo())}),this.stream.e_(()=>{i(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(s=>{i(()=>this.G_(s))}),this.stream.onMessage(s=>{i(()=>++this.C_==1?this.j_(s):this.onNext(s))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return fe(vA,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(fe(vA,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uF extends fN{constructor(e,t,i,s,o,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,s,u),this.serializer=o}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=p9(this.serializer,e),i=function(o){if(!("targetChange"in o))return Re.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?Re.min():u.readTime?Sr(u.readTime):Re.min()}(e);return this.listener.J_(t,i)}H_(e){const t={};t.database=wy(this.serializer),t.addTarget=function(o,u){let h;const m=u.target;if(h=_y(m)?{documents:y9(o,m)}:{query:v9(o,m).Vt},h.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){h.resumeToken=eN(o,u.resumeToken);const p=vy(o,u.expectedCount);p!==null&&(h.expectedCount=p)}else if(u.snapshotVersion.compareTo(Re.min())>0){h.readTime=cm(o,u.snapshotVersion.toTimestamp());const p=vy(o,u.expectedCount);p!==null&&(h.expectedCount=p)}return h}(this.serializer,e);const i=T9(this.serializer,e);i&&(t.labels=i),this.k_(t)}Y_(e){const t={};t.database=wy(this.serializer),t.removeTarget=e,this.k_(t)}}class cF extends fN{constructor(e,t,i,s,o,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,s,u),this.serializer=o}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return tt(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,tt(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){tt(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=_9(e.writeResults,e.commitTime),i=Sr(e.commitTime);return this.listener.ta(i,t)}na(){const e={};e.database=wy(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>g9(this.serializer,i))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hF{}class fF extends hF{constructor(e,t,i,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new me(se.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Wo(e,Ey(t,i),s,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===se.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new me(se.UNKNOWN,o.toString())})}Jo(e,t,i,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Jo(e,Ey(t,i),s,u,h,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===se.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new me(se.UNKNOWN,u.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class dF{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(gs(t),this._a=!1):fe("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do="RemoteStore";class mF{constructor(e,t,i,s,o){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=o,this.Ea.xo(u=>{i.enqueueAndForget(async()=>{Mo(this)&&(fe(Do,"Restarting streams for network reachability change."),await async function(m){const p=Ie(m);p.Ia.add(4),await Nh(p),p.Aa.set("Unknown"),p.Ia.delete(4),await Wm(p)}(this))})}),this.Aa=new dF(i,s)}}async function Wm(n){if(Mo(n))for(const e of n.da)await e(!0)}async function Nh(n){for(const e of n.da)await e(!1)}function dN(n,e){const t=Ie(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),vE(t)?yE(t):gu(t).x_()&&_E(t,e))}function gE(n,e){const t=Ie(n),i=gu(t);t.Ta.delete(e),i.x_()&&mN(t,e),t.Ta.size===0&&(i.x_()?i.B_():Mo(t)&&t.Aa.set("Unknown"))}function _E(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Re.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}gu(n).H_(e)}function mN(n,e){n.Ra.$e(e),gu(n).Y_(e)}function yE(n){n.Ra=new l9({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),gu(n).start(),n.Aa.aa()}function vE(n){return Mo(n)&&!gu(n).M_()&&n.Ta.size>0}function Mo(n){return Ie(n).Ia.size===0}function pN(n){n.Ra=void 0}async function pF(n){n.Aa.set("Online")}async function gF(n){n.Ta.forEach((e,t)=>{_E(n,e)})}async function _F(n,e){pN(n),vE(n)?(n.Aa.la(e),yE(n)):n.Aa.set("Unknown")}async function yF(n,e,t){if(n.Aa.set("Online"),e instanceof J1&&e.state===2&&e.cause)try{await async function(s,o){const u=o.cause;for(const h of o.targetIds)s.Ta.has(h)&&(await s.remoteSyncer.rejectListen(h,u),s.Ta.delete(h),s.Ra.removeTarget(h))}(n,e)}catch(i){fe(Do,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await fm(n,i)}else if(e instanceof Nd?n.Ra.Ye(e):e instanceof Z1?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Re.min()))try{const i=await cN(n.localStore);t.compareTo(i)>=0&&await function(o,u){const h=o.Ra.Pt(u);return h.targetChanges.forEach((m,p)=>{if(m.resumeToken.approximateByteSize()>0){const _=o.Ta.get(p);_&&o.Ta.set(p,_.withResumeToken(m.resumeToken,u))}}),h.targetMismatches.forEach((m,p)=>{const _=o.Ta.get(m);if(!_)return;o.Ta.set(m,_.withResumeToken(An.EMPTY_BYTE_STRING,_.snapshotVersion)),mN(o,m);const v=new sa(_.target,m,p,_.sequenceNumber);_E(o,v)}),o.remoteSyncer.applyRemoteEvent(h)}(n,t)}catch(i){fe(Do,"Failed to raise snapshot:",i),await fm(n,i)}}async function fm(n,e,t){if(!pu(e))throw e;n.Ia.add(1),await Nh(n),n.Aa.set("Offline"),t||(t=()=>cN(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{fe(Do,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Wm(n)})}function gN(n,e){return e().catch(t=>fm(n,t,e))}async function Km(n){const e=Ie(n),t=Ta(e);let i=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:nE;for(;vF(e);)try{const s=await eF(e.localStore,i);if(s===null){e.Pa.length===0&&t.B_();break}i=s.batchId,EF(e,s)}catch(s){await fm(e,s)}_N(e)&&yN(e)}function vF(n){return Mo(n)&&n.Pa.length<10}function EF(n,e){n.Pa.push(e);const t=Ta(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function _N(n){return Mo(n)&&!Ta(n).M_()&&n.Pa.length>0}function yN(n){Ta(n).start()}async function TF(n){Ta(n).na()}async function wF(n){const e=Ta(n);for(const t of n.Pa)e.X_(t.mutations)}async function bF(n,e,t){const i=n.Pa.shift(),s=uE.from(i,e,t);await gN(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Km(n)}async function SF(n,e){e&&Ta(n).Z_&&await async function(i,s){if(function(u){return a9(u)&&u!==se.ABORTED}(s.code)){const o=i.Pa.shift();Ta(i).N_(),await gN(i,()=>i.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Km(i)}}(n,e),_N(n)&&yN(n)}async function EA(n,e){const t=Ie(n);t.asyncQueue.verifyOperationInProgress(),fe(Do,"RemoteStore received new credentials");const i=Mo(t);t.Ia.add(3),await Nh(t),i&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Wm(t)}async function AF(n,e){const t=Ie(n);e?(t.Ia.delete(2),await Wm(t)):e||(t.Ia.add(2),await Nh(t),t.Aa.set("Unknown"))}function gu(n){return n.Va||(n.Va=function(t,i,s){const o=Ie(t);return o.ia(),new uF(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Zo:pF.bind(null,n),e_:gF.bind(null,n),n_:_F.bind(null,n),J_:yF.bind(null,n)}),n.da.push(async e=>{e?(n.Va.N_(),vE(n)?yE(n):n.Aa.set("Unknown")):(await n.Va.stop(),pN(n))})),n.Va}function Ta(n){return n.ma||(n.ma=function(t,i,s){const o=Ie(t);return o.ia(),new cF(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:TF.bind(null,n),n_:SF.bind(null,n),ea:wF.bind(null,n),ta:bF.bind(null,n)}),n.da.push(async e=>{e?(n.ma.N_(),await Km(n)):(await n.ma.stop(),n.Pa.length>0&&(fe(Do,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))})),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e,t,i,s,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=o,this.deferred=new ha,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,o){const u=Date.now()+i,h=new EE(e,t,u,s,o);return h.start(i),h}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new me(se.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function TE(n,e){if(gs("AsyncQueue",`${e}: ${n}`),pu(n))return new me(se.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{static emptySet(e){return new Hl(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||ye.comparator(t.key,i.key):(t,i)=>ye.comparator(t.key,i.key),this.keyedMap=Dc(),this.sortedSet=new It(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Hl)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=i.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Hl;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(){this.fa=new It(ye.comparator)}track(e){const t=e.doc.key,i=this.fa.get(t);i?e.type!==0&&i.type===3?this.fa=this.fa.insert(t,e):e.type===3&&i.type!==1?this.fa=this.fa.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.fa=this.fa.remove(t):e.type===1&&i.type===2?this.fa=this.fa.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):Se(63341,{At:e,ga:i}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,i)=>{e.push(i)}),e}}class nu{constructor(e,t,i,s,o,u,h,m,p){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=h,this.excludesMetadataChanges=m,this.hasCachedResults=p}static fromInitialDocuments(e,t,i,s,o){const u=[];return t.forEach(h=>{u.push({type:0,doc:h})}),new nu(e,t,Hl.emptySet(t),u,i,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zm(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CF{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class RF{constructor(){this.queries=wA(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,i){const s=Ie(t),o=s.queries;s.queries=wA(),o.forEach((u,h)=>{for(const m of h.wa)m.onError(i)})})(this,new me(se.ABORTED,"Firestore shutting down"))}}function wA(){return new Po(n=>j1(n),zm)}async function IF(n,e){const t=Ie(n);let i=3;const s=e.query;let o=t.queries.get(s);o?!o.Sa()&&e.ba()&&(i=2):(o=new CF,i=e.ba()?0:1);try{switch(i){case 0:o.ya=await t.onListen(s,!0);break;case 1:o.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(u){const h=TE(u,`Initialization of query '${xl(e.query)}' failed`);return void e.onError(h)}t.queries.set(s,o),o.wa.push(e),e.va(t.onlineState),o.ya&&e.Ca(o.ya)&&wE(t)}async function NF(n,e){const t=Ie(n),i=e.query;let s=3;const o=t.queries.get(i);if(o){const u=o.wa.indexOf(e);u>=0&&(o.wa.splice(u,1),o.wa.length===0?s=e.ba()?0:1:!o.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function DF(n,e){const t=Ie(n);let i=!1;for(const s of e){const o=s.query,u=t.queries.get(o);if(u){for(const h of u.wa)h.Ca(s)&&(i=!0);u.ya=s}}i&&wE(t)}function OF(n,e,t){const i=Ie(n),s=i.queries.get(e);if(s)for(const o of s.wa)o.onError(t);i.queries.delete(e)}function wE(n){n.Da.forEach(e=>{e.next()})}var Ay,bA;(bA=Ay||(Ay={})).Fa="default",bA.Cache="cache";class xF{constructor(e,t,i){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=i||{}}Ca(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new nu(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const i=t!=="Offline";return(!this.options.ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=nu.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Ay.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(e){this.key=e}}class EN{constructor(e){this.key=e}}class kF{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=qe(),this.mutatedKeys=qe(),this.Xa=F1(e),this.eu=new Hl(this.Xa)}get tu(){return this.Ha}nu(e,t){const i=t?t.ru:new TA,s=t?t.eu:this.eu;let o=t?t.mutatedKeys:this.mutatedKeys,u=s,h=!1;const m=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,p=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((_,v)=>{const T=s.get(_),C=qm(this.query,v)?v:null,O=!!T&&this.mutatedKeys.has(T.key),P=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let L=!1;T&&C?T.data.isEqual(C.data)?O!==P&&(i.track({type:3,doc:C}),L=!0):this.iu(T,C)||(i.track({type:2,doc:C}),L=!0,(m&&this.Xa(C,m)>0||p&&this.Xa(C,p)<0)&&(h=!0)):!T&&C?(i.track({type:0,doc:C}),L=!0):T&&!C&&(i.track({type:1,doc:T}),L=!0,(m||p)&&(h=!0)),L&&(C?(u=u.add(C),o=P?o.add(_):o.delete(_)):(u=u.delete(_),o=o.delete(_)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const _=this.query.limitType==="F"?u.last():u.first();u=u.delete(_.key),o=o.delete(_.key),i.track({type:1,doc:_})}return{eu:u,ru:i,Ds:h,mutatedKeys:o}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,s){const o=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const u=e.ru.pa();u.sort((_,v)=>function(C,O){const P=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Se(20277,{At:L})}};return P(C)-P(O)}(_.type,v.type)||this.Xa(_.doc,v.doc)),this.su(i),s=s!=null&&s;const h=t&&!s?this.ou():[],m=this.Za.size===0&&this.current&&!s?1:0,p=m!==this.Ya;return this.Ya=m,u.length!==0||p?{snapshot:new nu(this.query,e.eu,o,u,e.mutatedKeys,m===0,p,!1,!!i&&i.resumeToken.approximateByteSize()>0),_u:h}:{_u:h}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new TA,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=qe(),this.eu.forEach(i=>{this.au(i.key)&&(this.Za=this.Za.add(i.key))});const t=[];return e.forEach(i=>{this.Za.has(i)||t.push(new EN(i))}),this.Za.forEach(i=>{e.has(i)||t.push(new vN(i))}),t}uu(e){this.Ha=e.qs,this.Za=qe();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return nu.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const bE="SyncEngine";class PF{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class MF{constructor(e){this.key=e,this.lu=!1}}class LF{constructor(e,t,i,s,o,u){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.hu={},this.Pu=new Po(h=>j1(h),zm),this.Tu=new Map,this.Iu=new Set,this.du=new It(ye.comparator),this.Eu=new Map,this.Au=new fE,this.Ru={},this.Vu=new Map,this.mu=tu.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function VF(n,e,t=!0){const i=CN(n);let s;const o=i.Pu.get(e);return o?(i.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.cu()):s=await TN(i,e,t,!0),s}async function UF(n,e){const t=CN(n);await TN(t,e,!0,!1)}async function TN(n,e,t,i){const s=await tF(n.localStore,br(e)),o=s.targetId,u=n.sharedClientState.addLocalQueryTarget(o,t);let h;return i&&(h=await jF(n,e,o,u==="current",s.resumeToken)),n.isPrimaryClient&&t&&dN(n.remoteStore,s),h}async function jF(n,e,t,i,s){n.gu=(v,T,C)=>async function(P,L,H,J){let W=L.view.nu(H);W.Ds&&(W=await pA(P.localStore,L.query,!1).then(({documents:N})=>L.view.nu(N,W)));const re=J&&J.targetChanges.get(L.targetId),K=J&&J.targetMismatches.get(L.targetId)!=null,ae=L.view.applyChanges(W,P.isPrimaryClient,re,K);return AA(P,L.targetId,ae._u),ae.snapshot}(n,v,T,C);const o=await pA(n.localStore,e,!0),u=new kF(e,o.qs),h=u.nu(o.documents),m=Ih.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",s),p=u.applyChanges(h,n.isPrimaryClient,m);AA(n,t,p._u);const _=new PF(e,t,u);return n.Pu.set(e,_),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),p.snapshot}async function FF(n,e,t){const i=Ie(n),s=i.Pu.get(e),o=i.Tu.get(s.targetId);if(o.length>1)return i.Tu.set(s.targetId,o.filter(u=>!zm(u,e))),void i.Pu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await by(i.localStore,s.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(s.targetId),t&&gE(i.remoteStore,s.targetId),Cy(i,s.targetId)}).catch(mu)):(Cy(i,s.targetId),await by(i.localStore,s.targetId,!0))}async function BF(n,e){const t=Ie(n),i=t.Pu.get(e),s=t.Tu.get(i.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),gE(t.remoteStore,i.targetId))}async function zF(n,e,t){const i=KF(n);try{const s=await function(u,h){const m=Ie(u),p=vt.now(),_=h.reduce((C,O)=>C.add(O.key),qe());let v,T;return m.persistence.runTransaction("Locally write mutations","readwrite",C=>{let O=_s(),P=qe();return m.Os.getEntries(C,_).next(L=>{O=L,O.forEach((H,J)=>{J.isValidDocument()||(P=P.add(H))})}).next(()=>m.localDocuments.getOverlayedDocuments(C,O)).next(L=>{v=L;const H=[];for(const J of h){const W=t9(J,v.get(J.key).overlayedDocument);W!=null&&H.push(new Ra(J.key,W,O1(W.value.mapValue),Qi.exists(!0)))}return m.mutationQueue.addMutationBatch(C,p,H,h)}).next(L=>{T=L;const H=L.applyToLocalDocumentSet(v,P);return m.documentOverlayCache.saveOverlays(C,L.batchId,H)})}).then(()=>({batchId:T.batchId,changes:z1(v)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(u,h,m){let p=u.Ru[u.currentUser.toKey()];p||(p=new It(Pe)),p=p.insert(h,m),u.Ru[u.currentUser.toKey()]=p}(i,s.batchId,t),await Dh(i,s.changes),await Km(i.remoteStore)}catch(s){const o=TE(s,"Failed to persist write");t.reject(o)}}async function wN(n,e){const t=Ie(n);try{const i=await Z9(t.localStore,e);e.targetChanges.forEach((s,o)=>{const u=t.Eu.get(o);u&&(tt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?u.lu=!0:s.modifiedDocuments.size>0?tt(u.lu,14607):s.removedDocuments.size>0&&(tt(u.lu,42227),u.lu=!1))}),await Dh(t,i,e)}catch(i){await mu(i)}}function SA(n,e,t){const i=Ie(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.Pu.forEach((o,u)=>{const h=u.view.va(e);h.snapshot&&s.push(h.snapshot)}),function(u,h){const m=Ie(u);m.onlineState=h;let p=!1;m.queries.forEach((_,v)=>{for(const T of v.wa)T.va(h)&&(p=!0)}),p&&wE(m)}(i.eventManager,e),s.length&&i.hu.J_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function qF(n,e,t){const i=Ie(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.Eu.get(e),o=s&&s.key;if(o){let u=new It(ye.comparator);u=u.insert(o,On.newNoDocument(o,Re.min()));const h=qe().add(o),m=new Ym(Re.min(),new Map,new It(Pe),u,h);await wN(i,m),i.du=i.du.remove(o),i.Eu.delete(e),SE(i)}else await by(i.localStore,e,!1).then(()=>Cy(i,e,t)).catch(mu)}async function HF(n,e){const t=Ie(n),i=e.batch.batchId;try{const s=await X9(t.localStore,e);SN(t,i,null),bN(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Dh(t,s)}catch(s){await mu(s)}}async function GF(n,e,t){const i=Ie(n);try{const s=await function(u,h){const m=Ie(u);return m.persistence.runTransaction("Reject batch","readwrite-primary",p=>{let _;return m.mutationQueue.lookupMutationBatch(p,h).next(v=>(tt(v!==null,37113),_=v.keys(),m.mutationQueue.removeMutationBatch(p,v))).next(()=>m.mutationQueue.performConsistencyCheck(p)).next(()=>m.documentOverlayCache.removeOverlaysForBatchId(p,_,h)).next(()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,_)).next(()=>m.localDocuments.getDocuments(p,_))})}(i.localStore,e);SN(i,e,t),bN(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Dh(i,s)}catch(s){await mu(s)}}function bN(n,e){(n.Vu.get(e)||[]).forEach(t=>{t.resolve()}),n.Vu.delete(e)}function SN(n,e,t){const i=Ie(n);let s=i.Ru[i.currentUser.toKey()];if(s){const o=s.get(e);o&&(t?o.reject(t):o.resolve(),s=s.remove(e)),i.Ru[i.currentUser.toKey()]=s}}function Cy(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Tu.get(e))n.Pu.delete(i),t&&n.hu.pu(i,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach(i=>{n.Au.containsKey(i)||AN(n,i)})}function AN(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(gE(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),SE(n))}function AA(n,e,t){for(const i of t)i instanceof vN?(n.Au.addReference(i.key,e),YF(n,i)):i instanceof EN?(fe(bE,"Document no longer in limbo: "+i.key),n.Au.removeReference(i.key,e),n.Au.containsKey(i.key)||AN(n,i.key)):Se(19791,{yu:i})}function YF(n,e){const t=e.key,i=t.path.canonicalString();n.du.get(t)||n.Iu.has(i)||(fe(bE,"New document in limbo: "+t),n.Iu.add(i),SE(n))}function SE(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new ye(yt.fromString(e)),i=n.mu.next();n.Eu.set(i,new MF(t)),n.du=n.du.insert(t,i),dN(n.remoteStore,new sa(br(U1(t.path)),i,"TargetPurposeLimboResolution",Um.ue))}}async function Dh(n,e,t){const i=Ie(n),s=[],o=[],u=[];i.Pu.isEmpty()||(i.Pu.forEach((h,m)=>{u.push(i.gu(m,e,t).then(p=>{var _;if((p||t)&&i.isPrimaryClient){const v=p?!p.fromCache:(_=t?.targetChanges.get(m.targetId))===null||_===void 0?void 0:_.current;i.sharedClientState.updateQueryState(m.targetId,v?"current":"not-current")}if(p){s.push(p);const v=mE.Es(m.targetId,p);o.push(v)}}))}),await Promise.all(u),i.hu.J_(s),await async function(m,p){const _=Ie(m);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>ie.forEach(p,T=>ie.forEach(T.Is,C=>_.persistence.referenceDelegate.addReference(v,T.targetId,C)).next(()=>ie.forEach(T.ds,C=>_.persistence.referenceDelegate.removeReference(v,T.targetId,C)))))}catch(v){if(!pu(v))throw v;fe(pE,"Failed to update sequence numbers: "+v)}for(const v of p){const T=v.targetId;if(!v.fromCache){const C=_.Fs.get(T),O=C.snapshotVersion,P=C.withLastLimboFreeSnapshotVersion(O);_.Fs=_.Fs.insert(T,P)}}}(i.localStore,o))}async function $F(n,e){const t=Ie(n);if(!t.currentUser.isEqual(e)){fe(bE,"User change. New user:",e.toKey());const i=await uN(t.localStore,e);t.currentUser=e,function(o,u){o.Vu.forEach(h=>{h.forEach(m=>{m.reject(new me(se.CANCELLED,u))})}),o.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Dh(t,i.Bs)}}function WF(n,e){const t=Ie(n),i=t.Eu.get(e);if(i&&i.lu)return qe().add(i.key);{let s=qe();const o=t.Tu.get(e);if(!o)return s;for(const u of o){const h=t.Pu.get(u);s=s.unionWith(h.view.tu)}return s}}function CN(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=wN.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=WF.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qF.bind(null,e),e.hu.J_=DF.bind(null,e.eventManager),e.hu.pu=OF.bind(null,e.eventManager),e}function KF(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=HF.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=GF.bind(null,e),e}class dm{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=$m(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Q9(this.persistence,new $9,e.initialUser,this.serializer)}Du(e){return new lN(dE.Vi,this.serializer)}bu(e){return new iF}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}dm.provider={build:()=>new dm};class QF extends dm{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){tt(this.persistence.referenceDelegate instanceof hm,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new x9(i,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Hn.withCacheSize(this.cacheSizeBytes):Hn.DEFAULT;return new lN(i=>hm.Vi(i,t),this.serializer)}}class Ry{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>SA(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=$F.bind(null,this.syncEngine),await AF(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new RF}()}createDatastore(e){const t=$m(e.databaseInfo.databaseId),i=function(o){return new lF(o)}(e.databaseInfo);return function(o,u,h,m){return new fF(o,u,h,m)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,s,o,u,h){return new mF(i,s,o,u,h)}(this.localStore,this.datastore,e.asyncQueue,t=>SA(this.syncEngine,t,0),function(){return yA.C()?new yA:new rF}())}createSyncEngine(e,t){return function(s,o,u,h,m,p,_){const v=new LF(s,o,u,h,m,p);return _&&(v.fu=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const o=Ie(s);fe(Do,"RemoteStore shutting down."),o.Ia.add(5),await Nh(o),o.Ea.shutdown(),o.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ry.provider={build:()=>new Ry};/**
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
 */class XF{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):gs("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa="FirestoreClient";class ZF{constructor(e,t,i,s,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=s,this.user=Nn.UNAUTHENTICATED,this.clientId=eE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(i,async u=>{fe(wa,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(i,u=>(fe(wa,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ha;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=TE(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function L_(n,e){n.asyncQueue.verifyOperationInProgress(),fe(wa,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await uN(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>{ga("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then(()=>{fe("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(s=>{ga("Terminating Firestore due to IndexedDb database deletion failed",s)})}),n._offlineComponents=e}async function CA(n,e){n.asyncQueue.verifyOperationInProgress();const t=await JF(n);fe(wa,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>EA(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>EA(e.remoteStore,s)),n._onlineComponents=e}async function JF(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){fe(wa,"Using user provided OfflineComponentProvider");try{await L_(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===se.FAILED_PRECONDITION||s.code===se.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;ga("Error using user provided cache. Falling back to memory cache: "+t),await L_(n,new dm)}}else fe(wa,"Using default OfflineComponentProvider"),await L_(n,new QF(void 0));return n._offlineComponents}async function RN(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(fe(wa,"Using user provided OnlineComponentProvider"),await CA(n,n._uninitializedComponentsProvider._online)):(fe(wa,"Using default OnlineComponentProvider"),await CA(n,new Ry))),n._onlineComponents}function e5(n){return RN(n).then(e=>e.syncEngine)}async function t5(n){const e=await RN(n),t=e.eventManager;return t.onListen=VF.bind(null,e.syncEngine),t.onUnlisten=FF.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=UF.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=BF.bind(null,e.syncEngine),t}function n5(n,e,t={}){const i=new ha;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,h,m,p){const _=new XF({next:T=>{_.Ou(),u.enqueueAndForget(()=>NF(o,v)),T.fromCache&&m.source==="server"?p.reject(new me(se.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):p.resolve(T)},error:T=>p.reject(T)}),v=new xF(h,_,{includeMetadataChanges:!0,ka:!0});return IF(o,v)}(await t5(n),n.asyncQueue,e,t,i)),i.promise}/**
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
 */function IN(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const RA=new Map;/**
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
 */const NN="firestore.googleapis.com",IA=!0;class NA{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new me(se.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=NN,this.ssl=IA}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:IA;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=oN;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<D9)throw new me(se.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}m3("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=IN((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new me(se.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new me(se.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new me(se.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Qm{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new NA({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new me(se.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new me(se.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new NA(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new s3;switch(i.type){case"firstParty":return new u3(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new me(se.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=RA.get(t);i&&(fe("ComponentProvider","Removing Datastore"),RA.delete(t),i.terminate())}(this),Promise.resolve()}}function i5(n,e,t,i={}){var s;n=No(n,Qm);const o=Or(e),u=n._getSettings(),h=Object.assign(Object.assign({},u),{emulatorOptions:n._getEmulatorOptions()}),m=`${e}:${t}`;o&&(Tm(`https://${m}`),wm("Firestore",!0)),u.host!==NN&&u.host!==m&&ga("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p=Object.assign(Object.assign({},u),{host:m,ssl:o,emulatorOptions:i});if(!fs(p,h)&&(n._setSettings(p),i.mockUserToken)){let _,v;if(typeof i.mockUserToken=="string")_=i.mockUserToken,v=Nn.MOCK_USER;else{_=Jy(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const T=i.mockUserToken.sub||i.mockUserToken.user_id;if(!T)throw new me(se.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new Nn(T)}n._authCredentials=new a3(new y1(_,v))}}/**
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
 */class Xm{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Xm(this.firestore,e,this._query)}}class hn{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fa(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new hn(this.firestore,e,this._key)}toJSON(){return{type:hn._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(Ch(t,hn._jsonSchema))return new hn(e,i||null,new ye(yt.fromString(t.referencePath)))}}hn._jsonSchemaVersion="firestore/documentReference/1.0",hn._jsonSchema={type:Gt("string",hn._jsonSchemaVersion),referencePath:Gt("string")};class fa extends Xm{constructor(e,t,i){super(e,t,U1(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new hn(this.firestore,null,new ye(e))}withConverter(e){return new fa(this.firestore,e,this._path)}}function oi(n,e,...t){if(n=lt(n),E1("collection","path",e),n instanceof Qm){const i=yt.fromString(e,...t);return qS(i),new fa(n,null,i)}{if(!(n instanceof hn||n instanceof fa))throw new me(se.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(yt.fromString(e,...t));return qS(i),new fa(n.firestore,null,i)}}function ys(n,e,...t){if(n=lt(n),arguments.length===1&&(e=eE.newId()),E1("doc","path",e),n instanceof Qm){const i=yt.fromString(e,...t);return zS(i),new hn(n,null,new ye(i))}{if(!(n instanceof hn||n instanceof fa))throw new me(se.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(yt.fromString(e,...t));return zS(i),new hn(n.firestore,n instanceof fa?n.converter:null,new ye(i))}}/**
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
 */const DA="AsyncQueue";class OA{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new hN(this,"async_queue_retry"),this.oc=()=>{const i=M_();i&&fe(DA,"Visibility state changed to "+i.visibilityState),this.F_.y_()},this._c=e;const t=M_();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=M_();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new ha;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!pu(e))throw e;fe(DA,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(i=>{throw this.tc=i,this.nc=!1,gs("INTERNAL UNHANDLED ERROR: ",xA(i)),i}).then(i=>(this.nc=!1,i))));return this._c=t,t}enqueueAfterDelay(e,t,i){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=EE.createAndSchedule(this,e,t,i,o=>this.lc(o));return this.ec.push(s),s}ac(){this.tc&&Se(47125,{hc:xA(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function xA(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Oh extends Qm{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=new OA,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new OA(e),this._firestoreClient=void 0,await e}}}function r5(n,e){const t=typeof n=="object"?n:ph(),i=typeof n=="string"?n:rm,s=Es(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const o=Zy("firestore");o&&i5(s,...o)}return s}function DN(n){if(n._terminated)throw new me(se.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||s5(n),n._firestoreClient}function s5(n){var e,t,i;const s=n._freezeSettings(),o=function(h,m,p,_){return new A3(h,m,p,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,IN(_.experimentalLongPollingOptions),_.useFetchStreams,_.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new ZF(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(h){const m=h?._online.build();return{_offline:h?._offline.build(m),_online:m}}(n._componentsProvider))}/**
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
 */class Di{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Di(An.fromBase64String(e))}catch(t){throw new me(se.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Di(An.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Di._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ch(e,Di._jsonSchema))return Di.fromBase64String(e.bytes)}}Di._jsonSchemaVersion="firestore/bytes/1.0",Di._jsonSchema={type:Gt("string",Di._jsonSchemaVersion),bytes:Gt("string")};/**
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
 */class Zm{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new me(se.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class AE{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new me(se.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new me(se.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ar._jsonSchemaVersion}}static fromJSON(e){if(Ch(e,Ar._jsonSchema))return new Ar(e.latitude,e.longitude)}}Ar._jsonSchemaVersion="firestore/geoPoint/1.0",Ar._jsonSchema={type:Gt("string",Ar._jsonSchemaVersion),latitude:Gt("number"),longitude:Gt("number")};/**
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
 */class Cr{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,s){if(i.length!==s.length)return!1;for(let o=0;o<i.length;++o)if(i[o]!==s[o])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Cr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ch(e,Cr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Cr(e.vectorValues);throw new me(se.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Cr._jsonSchemaVersion="firestore/vectorValue/1.0",Cr._jsonSchema={type:Gt("string",Cr._jsonSchemaVersion),vectorValues:Gt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a5=/^__.*__$/;class o5{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Ra(e,this.data,this.fieldMask,t,this.fieldTransforms):new Rh(e,this.data,t,this.fieldTransforms)}}class ON{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Ra(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function xN(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Se(40011,{Ec:n})}}class CE{constructor(e,t,i,s,o,u){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=s,o===void 0&&this.Ac(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new CE(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:i,mc:!1});return s.fc(e),s}gc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:i,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return mm(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(xN(this.Ec)&&a5.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class l5{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||$m(e)}Dc(e,t,i,s=!1){return new CE({Ec:e,methodName:t,bc:i,path:bn.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function kN(n){const e=n._freezeSettings(),t=$m(n._databaseId);return new l5(n._databaseId,!!e.ignoreUndefinedProperties,t)}function u5(n,e,t,i,s,o={}){const u=n.Dc(o.merge||o.mergeFields?2:0,e,t,s);RE("Data must be an object, but it was:",u,i);const h=PN(i,u);let m,p;if(o.merge)m=new ui(u.fieldMask),p=u.fieldTransforms;else if(o.mergeFields){const _=[];for(const v of o.mergeFields){const T=Iy(e,v,t);if(!u.contains(T))throw new me(se.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);LN(_,T)||_.push(T)}m=new ui(_),p=u.fieldTransforms.filter(v=>m.covers(v.field))}else m=null,p=u.fieldTransforms;return new o5(new Yn(h),m,p)}class Jm extends AE{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Jm}}function c5(n,e,t,i){const s=n.Dc(1,e,t);RE("Data must be an object, but it was:",s,i);const o=[],u=Yn.empty();Ca(i,(m,p)=>{const _=IE(e,m,t);p=lt(p);const v=s.gc(_);if(p instanceof Jm)o.push(_);else{const T=ep(p,v);T!=null&&(o.push(_),u.set(_,T))}});const h=new ui(o);return new ON(u,h,s.fieldTransforms)}function h5(n,e,t,i,s,o){const u=n.Dc(1,e,t),h=[Iy(e,i,t)],m=[s];if(o.length%2!=0)throw new me(se.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<o.length;T+=2)h.push(Iy(e,o[T])),m.push(o[T+1]);const p=[],_=Yn.empty();for(let T=h.length-1;T>=0;--T)if(!LN(p,h[T])){const C=h[T];let O=m[T];O=lt(O);const P=u.gc(C);if(O instanceof Jm)p.push(C);else{const L=ep(O,P);L!=null&&(p.push(C),_.set(C,L))}}const v=new ui(p);return new ON(_,v,u.fieldTransforms)}function ep(n,e){if(MN(n=lt(n)))return RE("Unsupported field value:",e,n),PN(n,e);if(n instanceof AE)return function(i,s){if(!xN(s.Ec))throw s.wc(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${i._methodName}() is not currently supported inside arrays`);const o=i._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(i,s){const o=[];let u=0;for(const h of i){let m=ep(h,s.yc(u));m==null&&(m={nullValue:"NULL_VALUE"}),o.push(m),u++}return{arrayValue:{values:o}}}(n,e)}return function(i,s){if((i=lt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return K3(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const o=vt.fromDate(i);return{timestampValue:cm(s.serializer,o)}}if(i instanceof vt){const o=new vt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:cm(s.serializer,o)}}if(i instanceof Ar)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Di)return{bytesValue:eN(s.serializer,i._byteString)};if(i instanceof hn){const o=s.databaseId,u=i.firestore._databaseId;if(!u.isEqual(o))throw s.wc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:hE(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof Cr)return function(u,h){return{mapValue:{fields:{[N1]:{stringValue:D1},[sm]:{arrayValue:{values:u.toArray().map(p=>{if(typeof p!="number")throw h.wc("VectorValues must only contain numeric values.");return oE(h.serializer,p)})}}}}}}(i,s);throw s.wc(`Unsupported field value: ${tE(i)}`)}(n,e)}function PN(n,e){const t={};return b1(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ca(n,(i,s)=>{const o=ep(s,e.Vc(i));o!=null&&(t[i]=o)}),{mapValue:{fields:t}}}function MN(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof vt||n instanceof Ar||n instanceof Di||n instanceof hn||n instanceof AE||n instanceof Cr)}function RE(n,e,t){if(!MN(t)||!T1(t)){const i=tE(t);throw i==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+i)}}function Iy(n,e,t){if((e=lt(e))instanceof Zm)return e._internalPath;if(typeof e=="string")return IE(n,e);throw mm("Field path arguments must be of type string or ",n,!1,void 0,t)}const f5=new RegExp("[~\\*/\\[\\]]");function IE(n,e,t){if(e.search(f5)>=0)throw mm(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Zm(...e.split("."))._internalPath}catch{throw mm(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function mm(n,e,t,i,s){const o=i&&!i.isEmpty(),u=s!==void 0;let h=`Function ${e}() called with invalid data`;t&&(h+=" (via `toFirestore()`)"),h+=". ";let m="";return(o||u)&&(m+=" (found",o&&(m+=` in field ${i}`),u&&(m+=` in document ${s}`),m+=")"),new me(se.INVALID_ARGUMENT,h+n+m)}function LN(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class VN{constructor(e,t,i,s,o){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new hn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new d5(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(UN("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class d5 extends VN{data(){return super.data()}}function UN(n,e){return typeof e=="string"?IE(n,e):e instanceof Zm?e._internalPath:e._delegate._internalPath}/**
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
 */function m5(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new me(se.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class p5{convertValue(e,t="none"){switch(Ea(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Vt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(va(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Se(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Ca(e,(s,o)=>{i[s]=this.convertValue(o,t)}),i}convertVectorValue(e){var t,i,s;const o=(s=(i=(t=e.fields)===null||t===void 0?void 0:t[sm].arrayValue)===null||i===void 0?void 0:i.values)===null||s===void 0?void 0:s.map(u=>Vt(u.doubleValue));return new Cr(o)}convertGeoPoint(e){return new Ar(Vt(e.latitude),Vt(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Fm(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(sh(e));default:return null}}convertTimestamp(e){const t=ya(e);return new vt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=yt.fromString(e);tt(aN(i),9688,{name:e});const s=new ah(i.get(1),i.get(3)),o=new ye(i.popFirst(5));return s.isEqual(t)||gs(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
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
 */function g5(n,e,t){let i;return i=n?n.toFirestore(e):e,i}class md{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Gl extends VN{constructor(e,t,i,s,o,u){super(e,t,i,s,u),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Dd(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(UN("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new me(se.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Gl._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Gl._jsonSchemaVersion="firestore/documentSnapshot/1.0",Gl._jsonSchema={type:Gt("string",Gl._jsonSchemaVersion),bundleSource:Gt("string","DocumentSnapshot"),bundleName:Gt("string"),bundle:Gt("string")};class Dd extends Gl{data(e={}){return super.data(e)}}class Yl{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new md(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new Dd(this._firestore,this._userDataWriter,i.key,i,new md(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new me(se.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map(h=>{const m=new Dd(s._firestore,s._userDataWriter,h.doc.key,h.doc,new md(s._snapshot.mutatedKeys.has(h.doc.key),s._snapshot.fromCache),s.query.converter);return h.doc,{type:"added",doc:m,oldIndex:-1,newIndex:u++}})}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(h=>o||h.type!==3).map(h=>{const m=new Dd(s._firestore,s._userDataWriter,h.doc.key,h.doc,new md(s._snapshot.mutatedKeys.has(h.doc.key),s._snapshot.fromCache),s.query.converter);let p=-1,_=-1;return h.type!==0&&(p=u.indexOf(h.doc.key),u=u.delete(h.doc.key)),h.type!==1&&(u=u.add(h.doc),_=u.indexOf(h.doc.key)),{type:_5(h.type),doc:m,oldIndex:p,newIndex:_}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new me(se.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Yl._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=eE.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],s=[];return this.docs.forEach(o=>{o._document!==null&&(t.push(o._document),i.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function _5(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Se(61501,{type:n})}}Yl._jsonSchemaVersion="firestore/querySnapshot/1.0",Yl._jsonSchema={type:Gt("string",Yl._jsonSchemaVersion),bundleSource:Gt("string","QuerySnapshot"),bundleName:Gt("string"),bundle:Gt("string")};class y5 extends p5{constructor(e){super(),this.firestore=e}convertBytes(e){return new Di(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new hn(this.firestore,null,t)}}function yo(n){n=No(n,Xm);const e=No(n.firestore,Oh),t=DN(e),i=new y5(e);return m5(n._query),n5(t,n._query).then(s=>new Yl(e,i,n,s))}function tp(n,e,t,...i){n=No(n,hn);const s=No(n.firestore,Oh),o=kN(s);let u;return u=typeof(e=lt(e))=="string"||e instanceof Zm?h5(o,"updateDoc",n._key,e,t,i):c5(o,"updateDoc",n._key,e),NE(s,[u.toMutation(n._key,Qi.exists(!0))])}function np(n){return NE(No(n.firestore,Oh),[new lE(n._key,Qi.none())])}function iu(n,e){const t=No(n.firestore,Oh),i=ys(n),s=g5(n.converter,e);return NE(t,[u5(kN(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,Qi.exists(!1))]).then(()=>i)}function NE(n,e){return function(i,s){const o=new ha;return i.asyncQueue.enqueueAndForget(async()=>zF(await e5(i),s,o)),o.promise}(DN(n),e)}(function(e,t=!0){(function(s){du=s})(Sa),Oi(new hi("firestore",(i,{instanceIdentifier:s,options:o})=>{const u=i.getProvider("app").getImmediate(),h=new Oh(new o3(i.getProvider("auth-internal")),new c3(u,i.getProvider("app-check-internal")),function(p,_){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new me(se.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ah(p.options.projectId,_)}(u,s),u);return o=Object.assign({useFetchStreams:t},o),h._setSettings(o),h},"PUBLIC").setMultipleInstances(!0)),xn(VS,US,e),xn(VS,US,"esm2017")})();const v5={apiKey:"AIzaSyDoiGpyo26lGOLoHNUypQoMMx4M1wzeUmE",authDomain:"diariomestra.firebaseapp.com",databaseURL:"https://diariomestra-default-rtdb.firebaseio.com",projectId:"diariomestra",storageBucket:"diariomestra.appspot.com",messagingSenderId:"82975937066",appId:"1:82975937066:web:f33626aafabb9cc21d6953",measurementId:"G-LT6NL075DN"},xh=SC(v5),kh=q6(xh),Ut=r5(xh),jN=dI(xh),E5=t3(xh);typeof window<"u"&&y2(xh);function Js({children:n,allowedProfiles:e}){const t=_m(),[i,s]=z.useState(!0);return z.useEffect(()=>{let o=!1;const u=kh.onIdTokenChanged(async h=>{if(!h){t("/login");return}if(e)try{const m=dI(),p=Lv(m,`usuarios/${h.uid}`),_=await fI(p);if(!_.exists()||!e.includes(_.val().perfil)){t("/acesso-negado");return}}catch(m){console.error("Erro ao verificar perfil:",m),t("/erro");return}o||s(!1)});return()=>{o=!0,u()}},[t,e]),i?b.jsx("p",{children:"Verificando acesso..."}):n}function T5(){return b.jsx("header",{className:"topo",children:b.jsx("h1",{children:"Escola Mestra"})})}function w5(){const[n,e]=z.useState(""),[t,i]=z.useState(""),[s,o]=z.useState(""),[u,h]=z.useState(!1),m=_m();async function p(_){if(_.preventDefault(),h(!0),o(""),console.log("Login tentativa →",{email:n,senha:t}),!n||!t){o("Preencha e‑mail e senha."),h(!1);return}try{const{user:v}=await IU(kh,n,t),T=await fI(Lv(jN,`usuarios/${v.uid}`));if(!T.exists())throw new Error("Usuário não cadastrado no sistema.");const{perfil:C}=T.val();m({coordenacao:"/coord",professor:"/professor",responsavel:"/responsavel"}[C]??"/")}catch(v){console.error("Erro de login:",v);const T={"auth/invalid-email":"E‑mail inválido.","auth/user-not-found":"Usuário não encontrado.","auth/wrong-password":"Senha incorreta.","auth/too-many-requests":"Muitas tentativas. Tente novamente mais tarde.","auth/invalid-credential":"Credenciais inválidas. Verifique e-mail e senha."}[v.code]||v.message;o(T)}finally{h(!1)}}return b.jsxs("form",{className:"login-box",onSubmit:p,children:[b.jsxs("label",{children:["E‑mail",b.jsx("input",{type:"email",value:n,onChange:_=>e(_.target.value),disabled:u,required:!0})]}),b.jsxs("label",{children:["Senha",b.jsx("input",{type:"password",value:t,onChange:_=>i(_.target.value),disabled:u,required:!0})]}),s&&b.jsx("p",{className:"erro",children:s}),b.jsx("button",{type:"submit",disabled:u,children:u?"Entrando…":"Entrar"}),b.jsxs("div",{className:"links-ajuda",children:[b.jsx(Hi,{to:"/esquecisenha",children:"Esqueci minha senha"}),b.jsx("br",{}),b.jsx(Hi,{to:"/cadastrocoord",children:"Primeiro acesso à coordenação"})]})]})}function b5(){return b.jsxs(b.Fragment,{children:[b.jsx(T5,{}),b.jsx("main",{className:"container",children:b.jsx(w5,{})})]})}function S5(){return b.jsx("header",{className:"topo",children:b.jsx("h1",{children:"Escola Mestra"})})}function A5(){const[n,e]=z.useState({nome:"",email:"",senha:"",cpf:"",confirmar:"",foto:null}),[t,i]=z.useState(null);function s(u){const{name:h,value:m,files:p}=u.target;if(h==="foto"){const _=p[0];e(v=>({...v,foto:_})),i(URL.createObjectURL(_))}else if(h==="cpf"){const _=m.replace(/\D/g,"");e(v=>({...v,cpf:_}))}else e(_=>({..._,[h]:m}))}async function o(u){if(u.preventDefault(),n.senha.length<5){alert("A senha precisa ter no mínimo 5 caracteres");return}if(n.senha!==n.confirmar){alert("As senhas devem ser iguais");return}if(!/^\d{11}$/.test(n.cpf)){alert("O CPF deve conter exatamente 11 números.");return}try{const h=await Gv(kh,n.email,n.senha);let m=null;if(n.foto){const p=e3(E5,`fotosPerfis/${h.user.uid}`);await Zj(p,n.foto),m=await Jj(p)}await DU(h.user,{displayName:n.nome,photoURL:m}),await T4(Lv(jN,"usuarios/"+h.user.uid),{nome:n.nome,email:n.email,cpf:n.cpf,perfil:"coordenacao",fotoURL:m||null}),alert("Usuário cadastrado com sucesso!"),console.log("Usuário:",h.user),e({nome:"",email:"",senha:"",cpf:"",confirmar:"",foto:null}),i(null)}catch(h){console.error("Erro no cadastro:",h.code,h.message),alert("Erro: "+h.message)}}return b.jsxs("form",{className:"login-box",onSubmit:o,children:[b.jsxs("label",{children:["Nome completo",b.jsx("input",{type:"text",name:"nome",value:n.nome,onChange:s,required:!0})]}),b.jsxs("label",{children:["CPF (somente números)",b.jsx("input",{type:"text",name:"cpf",value:n.cpf,onChange:s,maxLength:11,required:!0})]}),b.jsxs("label",{children:["E-mail",b.jsx("input",{type:"email",name:"email",value:n.email,onChange:s,required:!0})]}),b.jsxs("label",{children:["Senha",b.jsx("input",{type:"password",name:"senha",value:n.senha,onChange:s,required:!0})]}),b.jsxs("label",{children:["Confirmar senha",b.jsx("input",{type:"password",name:"confirmar",value:n.confirmar,onChange:s,required:!0})]}),b.jsxs("label",{children:["Foto de perfil",b.jsx("input",{type:"file",name:"foto",accept:"image/*",onChange:s})]}),t&&b.jsx("img",{src:t,alt:"Pré-visualização",style:{width:"100px",height:"100px",objectFit:"cover",borderRadius:"8px",marginTop:"8px"}}),b.jsxs("p",{style:{fontSize:"0.9rem",color:"gray",marginTop:"10px"},children:["Apenas membros da ",b.jsx("strong",{children:"coordenação"})," podem se cadastrar por aqui."]}),b.jsx("button",{type:"submit",children:"Cadastrar"})]})}function C5(){return b.jsxs(b.Fragment,{children:[b.jsx(S5,{}),b.jsx("main",{className:"container",children:b.jsx(A5,{})})]})}function Ia(){return b.jsx("header",{className:"topo",children:b.jsx("div",{children:b.jsx("h1",{children:" Escola Mestra - Coordenação"})})})}function Na(){return b.jsxs("nav",{className:"sidebar",children:[b.jsxs("ul",{className:"menu-principal",children:[b.jsx("li",{children:b.jsx(Hi,{to:"/coord",children:"Início"})}),b.jsx("li",{children:b.jsx(Hi,{to:"/gerenciamento",children:"Gerenciamento"})}),b.jsx("li",{children:b.jsx(Hi,{to:"/relatorio",children:"Relatório"})}),b.jsx("li",{children:b.jsx(Hi,{to:"/mensagem",children:"Mensagem"})})]}),b.jsxs("ul",{className:"menu-inferior",children:[b.jsx("li",{children:b.jsx(Hi,{to:"/configuracoes",children:"Configurações"})}),b.jsx("li",{children:b.jsx(Hi,{to:"/sair",children:"Sair"})})]}),b.jsx("button",{className:"botao-voltar",children:"Voltar"})]})}function R5(){return b.jsx("footer",{className:"rodape",children:b.jsx("p",{children:"© 2025 Diário Mestra - Sistema de Frequência Escolar | Desenvolvido por Picê."})})}function FN(n){var e,t,i="";if(typeof n=="string"||typeof n=="number")i+=n;else if(typeof n=="object")if(Array.isArray(n)){var s=n.length;for(e=0;e<s;e++)n[e]&&(t=FN(n[e]))&&(i&&(i+=" "),i+=t)}else for(t in n)n[t]&&(i&&(i+=" "),i+=t);return i}function ip(){for(var n,e,t=0,i="",s=arguments.length;t<s;t++)(n=arguments[t])&&(e=FN(n))&&(i&&(i+=" "),i+=e);return i}const I5=(n,e,t,i)=>{if(t==="length"||t==="prototype"||t==="arguments"||t==="caller")return;const s=Object.getOwnPropertyDescriptor(n,t),o=Object.getOwnPropertyDescriptor(e,t);!N5(s,o)&&i||Object.defineProperty(n,t,o)},N5=function(n,e){return n===void 0||n.configurable||n.writable===e.writable&&n.enumerable===e.enumerable&&n.configurable===e.configurable&&(n.writable||n.value===e.value)},D5=(n,e)=>{const t=Object.getPrototypeOf(e);t!==Object.getPrototypeOf(n)&&Object.setPrototypeOf(n,t)},O5=(n,e)=>`/* Wrapped ${n}*/
${e}`,x5=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),k5=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),P5=(n,e,t)=>{const i=t===""?"":`with ${t.trim()}() `,s=O5.bind(null,i,e.toString());Object.defineProperty(s,"name",k5);const{writable:o,enumerable:u,configurable:h}=x5;Object.defineProperty(n,"toString",{value:s,writable:o,enumerable:u,configurable:h})};function M5(n,e,{ignoreNonConfigurable:t=!1}={}){const{name:i}=n;for(const s of Reflect.ownKeys(e))I5(n,e,s,t);return D5(n,e),P5(n,e,i),n}const L5=new WeakMap,kA=new WeakMap;function BN(n,{cacheKey:e,cache:t=new Map,maxAge:i}={}){if(i===0)return n;if(typeof i=="number"){if(i>2147483647)throw new TypeError("The `maxAge` option cannot exceed 2147483647.");if(i<0)throw new TypeError("The `maxAge` option should not be a negative number.")}const s=function(...o){const u=e?e(o):o[0],h=t.get(u);if(h)return h.data;const m=n.apply(this,o),p=typeof i=="function"?i(...o):i;if(t.set(u,{data:m,maxAge:p?Date.now()+p:Number.POSITIVE_INFINITY}),p&&p>0&&p!==Number.POSITIVE_INFINITY){const _=setTimeout(()=>{t.delete(u)},p);_.unref?.();const v=kA.get(n)??new Set;v.add(_),kA.set(n,v)}return m};return M5(s,n,{ignoreNonConfigurable:!0}),L5.set(s,t),s}function V5(n){return typeof n=="string"}function U5(n,e,t){return t.indexOf(n)===e}function j5(n){return n.toLowerCase()===n}function PA(n){return n.indexOf(",")===-1?n:n.split(",")}function Ny(n){if(!n)return n;if(n==="C"||n==="posix"||n==="POSIX")return"en-US";if(n.indexOf(".")!==-1){var e=n.split(".")[0],t=e===void 0?"":e;return Ny(t)}if(n.indexOf("@")!==-1){var i=n.split("@")[0],t=i===void 0?"":i;return Ny(t)}if(n.indexOf("-")===-1||!j5(n))return n;var s=n.split("-"),o=s[0],u=s[1],h=u===void 0?"":u;return"".concat(o,"-").concat(h.toUpperCase())}function F5(n){var e=n===void 0?{}:n,t=e.useFallbackLocale,i=t===void 0?!0:t,s=e.fallbackLocale,o=s===void 0?"en-US":s,u=[];if(typeof navigator<"u"){for(var h=navigator.languages||[],m=[],p=0,_=h;p<_.length;p++){var v=_[p];m=m.concat(PA(v))}var T=navigator.language,C=T&&PA(T);u=u.concat(m,C)}return i&&u.push(o),u.filter(V5).map(Ny).filter(U5)}var B5=BN(F5,{cacheKey:JSON.stringify});function z5(n){return B5(n)[0]||null}var zN=BN(z5,{cacheKey:JSON.stringify});function bs(n,e,t){return function(s,o=t){const u=n(s)+o;return e(u)}}function Ph(n){return function(t){return new Date(n(t).getTime()-1)}}function Mh(n,e){return function(i){return[n(i),e(i)]}}function Ct(n){if(n instanceof Date)return n.getFullYear();if(typeof n=="number")return n;const e=Number.parseInt(n,10);if(typeof n=="string"&&!Number.isNaN(e))return e;throw new Error(`Failed to get year from date: ${n}.`)}function Da(n){if(n instanceof Date)return n.getMonth();throw new Error(`Failed to get month from date: ${n}.`)}function rp(n){if(n instanceof Date)return n.getDate();throw new Error(`Failed to get year from date: ${n}.`)}function _u(n){const e=Ct(n),t=e+(-e+1)%100,i=new Date;return i.setFullYear(t,0,1),i.setHours(0,0,0,0),i}const q5=bs(Ct,_u,-100),qN=bs(Ct,_u,100),DE=Ph(qN),H5=bs(Ct,DE,-100),HN=Mh(_u,DE);function Oa(n){const e=Ct(n),t=e+(-e+1)%10,i=new Date;return i.setFullYear(t,0,1),i.setHours(0,0,0,0),i}const GN=bs(Ct,Oa,-10),OE=bs(Ct,Oa,10),sp=Ph(OE),YN=bs(Ct,sp,-10),$N=Mh(Oa,sp);function yu(n){const e=Ct(n),t=new Date;return t.setFullYear(e,0,1),t.setHours(0,0,0,0),t}const WN=bs(Ct,yu,-1),xE=bs(Ct,yu,1),ap=Ph(xE),KN=bs(Ct,ap,-1),G5=Mh(yu,ap);function kE(n,e){return function(i,s=e){const o=Ct(i),u=Da(i)+s,h=new Date;return h.setFullYear(o,u,1),h.setHours(0,0,0,0),n(h)}}function Lo(n){const e=Ct(n),t=Da(n),i=new Date;return i.setFullYear(e,t,1),i.setHours(0,0,0,0),i}const QN=kE(Lo,-1),PE=kE(Lo,1),Lh=Ph(PE),XN=kE(Lh,-1),Y5=Mh(Lo,Lh);function $5(n,e){return function(i,s=e){const o=Ct(i),u=Da(i),h=rp(i)+s,m=new Date;return m.setFullYear(o,u,h),m.setHours(0,0,0,0),n(m)}}function Vh(n){const e=Ct(n),t=Da(n),i=rp(n),s=new Date;return s.setFullYear(e,t,i),s.setHours(0,0,0,0),s}const W5=$5(Vh,1),ME=Ph(W5),K5=Mh(Vh,ME);function ZN(n){return rp(Lh(n))}var Sn={GREGORY:"gregory",HEBREW:"hebrew",ISLAMIC:"islamic",ISO_8601:"iso8601"},Q5={gregory:["en-CA","en-US","es-AR","es-BO","es-CL","es-CO","es-CR","es-DO","es-EC","es-GT","es-HN","es-MX","es-NI","es-PA","es-PE","es-PR","es-SV","es-VE","pt-BR"],hebrew:["he","he-IL"],islamic:["ar","ar-AE","ar-BH","ar-DZ","ar-EG","ar-IQ","ar-JO","ar-KW","ar-LY","ar-OM","ar-QA","ar-SA","ar-SD","ar-SY","ar-YE","dv","dv-MV","ps","ps-AR"]},LE=[0,1,2,3,4,5,6],V_=new Map;function X5(n){return function(t,i){var s=t||zN();V_.has(s)||V_.set(s,new Map);var o=V_.get(s);return o.has(n)||o.set(n,new Intl.DateTimeFormat(s||void 0,n).format),o.get(n)(i)}}function Z5(n){var e=new Date(n);return new Date(e.setHours(12))}function Vo(n){return function(e,t){return X5(n)(e,Z5(t))}}var J5={day:"numeric"},eB={day:"numeric",month:"long",year:"numeric"},tB={month:"long"},nB={month:"long",year:"numeric"},iB={weekday:"short"},rB={weekday:"long"},sB={year:"numeric"},aB=Vo(J5),oB=Vo(eB),lB=Vo(tB),JN=Vo(nB),uB=Vo(iB),cB=Vo(rB),op=Vo(sB),hB=LE[0],fB=LE[5],MA=LE[6];function ch(n,e){e===void 0&&(e=Sn.ISO_8601);var t=n.getDay();switch(e){case Sn.ISO_8601:return(t+6)%7;case Sn.ISLAMIC:return(t+1)%7;case Sn.HEBREW:case Sn.GREGORY:return t;default:throw new Error("Unsupported calendar type.")}}function dB(n){var e=_u(n);return Ct(e)}function mB(n){var e=Oa(n);return Ct(e)}function Dy(n,e){e===void 0&&(e=Sn.ISO_8601);var t=Ct(n),i=Da(n),s=n.getDate()-ch(n,e);return new Date(t,i,s)}function pB(n,e){e===void 0&&(e=Sn.ISO_8601);var t=e===Sn.GREGORY?Sn.GREGORY:Sn.ISO_8601,i=Dy(n,e),s=Ct(n)+1,o,u;do o=new Date(s,0,t===Sn.ISO_8601?4:1),u=Dy(o,e),s-=1;while(n<u);return Math.round((i.getTime()-u.getTime())/(864e5*7))+1}function vo(n,e){switch(n){case"century":return _u(e);case"decade":return Oa(e);case"year":return yu(e);case"month":return Lo(e);case"day":return Vh(e);default:throw new Error("Invalid rangeType: ".concat(n))}}function gB(n,e){switch(n){case"century":return q5(e);case"decade":return GN(e);case"year":return WN(e);case"month":return QN(e);default:throw new Error("Invalid rangeType: ".concat(n))}}function eD(n,e){switch(n){case"century":return qN(e);case"decade":return OE(e);case"year":return xE(e);case"month":return PE(e);default:throw new Error("Invalid rangeType: ".concat(n))}}function _B(n,e){switch(n){case"decade":return GN(e,-100);case"year":return WN(e,-10);case"month":return QN(e,-12);default:throw new Error("Invalid rangeType: ".concat(n))}}function yB(n,e){switch(n){case"decade":return OE(e,100);case"year":return xE(e,10);case"month":return PE(e,12);default:throw new Error("Invalid rangeType: ".concat(n))}}function tD(n,e){switch(n){case"century":return DE(e);case"decade":return sp(e);case"year":return ap(e);case"month":return Lh(e);case"day":return ME(e);default:throw new Error("Invalid rangeType: ".concat(n))}}function vB(n,e){switch(n){case"century":return H5(e);case"decade":return YN(e);case"year":return KN(e);case"month":return XN(e);default:throw new Error("Invalid rangeType: ".concat(n))}}function EB(n,e){switch(n){case"decade":return YN(e,-100);case"year":return KN(e,-10);case"month":return XN(e,-12);default:throw new Error("Invalid rangeType: ".concat(n))}}function LA(n,e){switch(n){case"century":return HN(e);case"decade":return $N(e);case"year":return G5(e);case"month":return Y5(e);case"day":return K5(e);default:throw new Error("Invalid rangeType: ".concat(n))}}function TB(n,e,t){var i=[e,t].sort(function(s,o){return s.getTime()-o.getTime()});return[vo(n,i[0]),tD(n,i[1])]}function nD(n,e,t){return t.map(function(i){return(e||op)(n,i)}).join(" – ")}function wB(n,e,t){return nD(n,e,HN(t))}function iD(n,e,t){return nD(n,e,$N(t))}function bB(n){return n.getDay()===new Date().getDay()}function rD(n,e){e===void 0&&(e=Sn.ISO_8601);var t=n.getDay();switch(e){case Sn.ISLAMIC:case Sn.HEBREW:return t===fB||t===MA;case Sn.ISO_8601:case Sn.GREGORY:return t===MA||t===hB;default:throw new Error("Unsupported calendar type.")}}var _r="react-calendar__navigation";function SB(n){var e=n.activeStartDate,t=n.drillUp,i=n.formatMonthYear,s=i===void 0?JN:i,o=n.formatYear,u=o===void 0?op:o,h=n.locale,m=n.maxDate,p=n.minDate,_=n.navigationAriaLabel,v=_===void 0?"":_,T=n.navigationAriaLive,C=n.navigationLabel,O=n.next2AriaLabel,P=O===void 0?"":O,L=n.next2Label,H=L===void 0?"»":L,J=n.nextAriaLabel,W=J===void 0?"":J,re=n.nextLabel,K=re===void 0?"›":re,ae=n.prev2AriaLabel,N=ae===void 0?"":ae,R=n.prev2Label,I=R===void 0?"«":R,M=n.prevAriaLabel,U=M===void 0?"":M,j=n.prevLabel,x=j===void 0?"‹":j,Et=n.setActiveStartDate,dt=n.showDoubleView,X=n.view,he=n.views,pe=he.indexOf(X)>0,xe=X!=="century",k=gB(X,e),te=xe?_B(X,e):void 0,ce=eD(X,e),oe=xe?yB(X,e):void 0,ge=function(){if(k.getFullYear()<0)return!0;var ut=vB(X,e);return p&&p>=ut}(),Ne=xe&&function(){if(te.getFullYear()<0)return!0;var ut=EB(X,e);return p&&p>=ut}(),ve=m&&m<ce,Tt=xe&&m&&m<oe;function We(){Et(k,"prev")}function Yt(){Et(te,"prev2")}function fi(){Et(ce,"next")}function Qn(){Et(oe,"next2")}function di(ut){var Pi=function(){switch(X){case"century":return wB(h,u,ut);case"decade":return iD(h,u,ut);case"year":return u(h,ut);case"month":return s(h,ut);default:throw new Error("Invalid view: ".concat(X,"."))}}();return C?C({date:ut,label:Pi,locale:h||zN()||void 0,view:X}):Pi}function ki(){var ut="".concat(_r,"__label");return b.jsxs("button",{"aria-label":v,"aria-live":T,className:ut,disabled:!pe,onClick:t,style:{flexGrow:1},type:"button",children:[b.jsx("span",{className:"".concat(ut,"__labelText ").concat(ut,"__labelText--from"),children:di(e)}),dt?b.jsxs(b.Fragment,{children:[b.jsx("span",{className:"".concat(ut,"__divider"),children:" – "}),b.jsx("span",{className:"".concat(ut,"__labelText ").concat(ut,"__labelText--to"),children:di(ce)})]}):null]})}return b.jsxs("div",{className:_r,children:[I!==null&&xe?b.jsx("button",{"aria-label":N,className:"".concat(_r,"__arrow ").concat(_r,"__prev2-button"),disabled:Ne,onClick:Yt,type:"button",children:I}):null,x!==null&&b.jsx("button",{"aria-label":U,className:"".concat(_r,"__arrow ").concat(_r,"__prev-button"),disabled:ge,onClick:We,type:"button",children:x}),ki(),K!==null&&b.jsx("button",{"aria-label":W,className:"".concat(_r,"__arrow ").concat(_r,"__next-button"),disabled:ve,onClick:fi,type:"button",children:K}),H!==null&&xe?b.jsx("button",{"aria-label":P,className:"".concat(_r,"__arrow ").concat(_r,"__next2-button"),disabled:Tt,onClick:Qn,type:"button",children:H}):null]})}var Vl=function(){return Vl=Object.assign||function(n){for(var e,t=1,i=arguments.length;t<i;t++){e=arguments[t];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(n[s]=e[s])}return n},Vl.apply(this,arguments)},AB=function(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t};function VA(n){return"".concat(n,"%")}function VE(n){var e=n.children,t=n.className,i=n.count,s=n.direction,o=n.offset,u=n.style,h=n.wrap,m=AB(n,["children","className","count","direction","offset","style","wrap"]);return b.jsx("div",Vl({className:t,style:Vl({display:"flex",flexDirection:s,flexWrap:h?"wrap":"nowrap"},u)},m,{children:z.Children.map(e,function(p,_){var v=o&&_===0?VA(100*o/i):null;return z.cloneElement(p,Vl(Vl({},p.props),{style:{flexBasis:VA(100/i),flexShrink:0,flexGrow:0,overflow:"hidden",marginLeft:v,marginInlineStart:v,marginInlineEnd:0}}))})}))}function CB(n,e,t){return e&&e>n?e:t&&t<n?t:n}function hh(n,e){return e[0]<=n&&e[1]>=n}function RB(n,e){return n[0]<=e[0]&&n[1]>=e[1]}function sD(n,e){return hh(n[0],e)||hh(n[1],e)}function UA(n,e,t){var i=sD(e,n),s=[];if(i){s.push(t);var o=hh(n[0],e),u=hh(n[1],e);o&&s.push("".concat(t,"Start")),u&&s.push("".concat(t,"End")),o&&u&&s.push("".concat(t,"BothEnds"))}return s}function IB(n){return Array.isArray(n)?n[0]!==null&&n[1]!==null:n!==null}function NB(n){if(!n)throw new Error("args is required");var e=n.value,t=n.date,i=n.hover,s="react-calendar__tile",o=[s];if(!t)return o;var u=new Date,h=function(){if(Array.isArray(t))return t;var C=n.dateType;if(!C)throw new Error("dateType is required when date is not an array of two dates");return LA(C,t)}();if(hh(u,h)&&o.push("".concat(s,"--now")),!e||!IB(e))return o;var m=function(){if(Array.isArray(e))return e;var C=n.valueType;if(!C)throw new Error("valueType is required when value is not an array of two dates");return LA(C,e)}();RB(m,h)?o.push("".concat(s,"--active")):sD(m,h)&&o.push("".concat(s,"--hasActive"));var p=UA(m,h,"".concat(s,"--range"));o.push.apply(o,p);var _=Array.isArray(e)?e:[e];if(i&&_.length===1){var v=i>m[0]?[m[0],i]:[i,m[0]],T=UA(v,h,"".concat(s,"--hover"));o.push.apply(o,T)}return o}function lp(n){for(var e=n.className,t=n.count,i=t===void 0?3:t,s=n.dateTransform,o=n.dateType,u=n.end,h=n.hover,m=n.offset,p=n.renderTile,_=n.start,v=n.step,T=v===void 0?1:v,C=n.value,O=n.valueType,P=[],L=_;L<=u;L+=T){var H=s(L);P.push(p({classes:NB({date:H,dateType:o,hover:h,value:C,valueType:O}),date:H}))}return b.jsx(VE,{className:e,count:i,offset:m,wrap:!0,children:P})}function up(n){var e=n.activeStartDate,t=n.children,i=n.classes,s=n.date,o=n.formatAbbr,u=n.locale,h=n.maxDate,m=n.maxDateTransform,p=n.minDate,_=n.minDateTransform,v=n.onClick,T=n.onMouseOver,C=n.style,O=n.tileClassName,P=n.tileContent,L=n.tileDisabled,H=n.view,J=z.useMemo(function(){var re={activeStartDate:e,date:s,view:H};return typeof O=="function"?O(re):O},[e,s,O,H]),W=z.useMemo(function(){var re={activeStartDate:e,date:s,view:H};return typeof P=="function"?P(re):P},[e,s,P,H]);return b.jsxs("button",{className:ip(i,J),disabled:p&&_(p)>s||h&&m(h)<s||L?.({activeStartDate:e,date:s,view:H}),onClick:v?function(re){return v(s,re)}:void 0,onFocus:T?function(){return T(s)}:void 0,onMouseOver:T?function(){return T(s)}:void 0,style:C,type:"button",children:[o?b.jsx("abbr",{"aria-label":o(u,s),children:t}):t,W]})}var Oy=function(){return Oy=Object.assign||function(n){for(var e,t=1,i=arguments.length;t<i;t++){e=arguments[t];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(n[s]=e[s])}return n},Oy.apply(this,arguments)},DB=function(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t},jA="react-calendar__century-view__decades__decade";function OB(n){var e=n.classes,t=e===void 0?[]:e,i=n.currentCentury,s=n.formatYear,o=s===void 0?op:s,u=DB(n,["classes","currentCentury","formatYear"]),h=u.date,m=u.locale,p=[];return t&&p.push.apply(p,t),p.push(jA),_u(h).getFullYear()!==i&&p.push("".concat(jA,"--neighboringCentury")),b.jsx(up,Oy({},u,{classes:p,maxDateTransform:sp,minDateTransform:Oa,view:"century",children:iD(m,o,h)}))}var xy=function(){return xy=Object.assign||function(n){for(var e,t=1,i=arguments.length;t<i;t++){e=arguments[t];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(n[s]=e[s])}return n},xy.apply(this,arguments)},FA=function(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t};function xB(n){var e=n.activeStartDate,t=n.hover,i=n.showNeighboringCentury,s=n.value,o=n.valueType,u=FA(n,["activeStartDate","hover","showNeighboringCentury","value","valueType"]),h=dB(e),m=h+(i?119:99);return b.jsx(lp,{className:"react-calendar__century-view__decades",dateTransform:Oa,dateType:"decade",end:m,hover:t,renderTile:function(p){var _=p.date,v=FA(p,["date"]);return b.jsx(OB,xy({},u,v,{activeStartDate:e,currentCentury:h,date:_}),_.getTime())},start:h,step:10,value:s,valueType:o})}var ky=function(){return ky=Object.assign||function(n){for(var e,t=1,i=arguments.length;t<i;t++){e=arguments[t];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(n[s]=e[s])}return n},ky.apply(this,arguments)};function kB(n){function e(){return b.jsx(xB,ky({},n))}return b.jsx("div",{className:"react-calendar__century-view",children:e()})}var Py=function(){return Py=Object.assign||function(n){for(var e,t=1,i=arguments.length;t<i;t++){e=arguments[t];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(n[s]=e[s])}return n},Py.apply(this,arguments)},PB=function(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t},BA="react-calendar__decade-view__years__year";function MB(n){var e=n.classes,t=e===void 0?[]:e,i=n.currentDecade,s=n.formatYear,o=s===void 0?op:s,u=PB(n,["classes","currentDecade","formatYear"]),h=u.date,m=u.locale,p=[];return t&&p.push.apply(p,t),p.push(BA),Oa(h).getFullYear()!==i&&p.push("".concat(BA,"--neighboringDecade")),b.jsx(up,Py({},u,{classes:p,maxDateTransform:ap,minDateTransform:yu,view:"decade",children:o(m,h)}))}var My=function(){return My=Object.assign||function(n){for(var e,t=1,i=arguments.length;t<i;t++){e=arguments[t];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(n[s]=e[s])}return n},My.apply(this,arguments)},zA=function(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t};function LB(n){var e=n.activeStartDate,t=n.hover,i=n.showNeighboringDecade,s=n.value,o=n.valueType,u=zA(n,["activeStartDate","hover","showNeighboringDecade","value","valueType"]),h=mB(e),m=h+(i?11:9);return b.jsx(lp,{className:"react-calendar__decade-view__years",dateTransform:yu,dateType:"year",end:m,hover:t,renderTile:function(p){var _=p.date,v=zA(p,["date"]);return b.jsx(MB,My({},u,v,{activeStartDate:e,currentDecade:h,date:_}),_.getTime())},start:h,value:s,valueType:o})}var Ly=function(){return Ly=Object.assign||function(n){for(var e,t=1,i=arguments.length;t<i;t++){e=arguments[t];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(n[s]=e[s])}return n},Ly.apply(this,arguments)};function VB(n){function e(){return b.jsx(LB,Ly({},n))}return b.jsx("div",{className:"react-calendar__decade-view",children:e()})}var Vy=function(){return Vy=Object.assign||function(n){for(var e,t=1,i=arguments.length;t<i;t++){e=arguments[t];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(n[s]=e[s])}return n},Vy.apply(this,arguments)},UB=function(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t},qA=function(n,e,t){if(t||arguments.length===2)for(var i=0,s=e.length,o;i<s;i++)(o||!(i in e))&&(o||(o=Array.prototype.slice.call(e,0,i)),o[i]=e[i]);return n.concat(o||Array.prototype.slice.call(e))},jB="react-calendar__year-view__months__month";function FB(n){var e=n.classes,t=e===void 0?[]:e,i=n.formatMonth,s=i===void 0?lB:i,o=n.formatMonthYear,u=o===void 0?JN:o,h=UB(n,["classes","formatMonth","formatMonthYear"]),m=h.date,p=h.locale;return b.jsx(up,Vy({},h,{classes:qA(qA([],t,!0),[jB],!1),formatAbbr:u,maxDateTransform:Lh,minDateTransform:Lo,view:"year",children:s(p,m)}))}var Uy=function(){return Uy=Object.assign||function(n){for(var e,t=1,i=arguments.length;t<i;t++){e=arguments[t];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(n[s]=e[s])}return n},Uy.apply(this,arguments)},HA=function(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t};function BB(n){var e=n.activeStartDate,t=n.hover,i=n.value,s=n.valueType,o=HA(n,["activeStartDate","hover","value","valueType"]),u=0,h=11,m=Ct(e);return b.jsx(lp,{className:"react-calendar__year-view__months",dateTransform:function(p){var _=new Date;return _.setFullYear(m,p,1),Lo(_)},dateType:"month",end:h,hover:t,renderTile:function(p){var _=p.date,v=HA(p,["date"]);return b.jsx(FB,Uy({},o,v,{activeStartDate:e,date:_}),_.getTime())},start:u,value:i,valueType:s})}var jy=function(){return jy=Object.assign||function(n){for(var e,t=1,i=arguments.length;t<i;t++){e=arguments[t];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(n[s]=e[s])}return n},jy.apply(this,arguments)};function zB(n){function e(){return b.jsx(BB,jy({},n))}return b.jsx("div",{className:"react-calendar__year-view",children:e()})}var Fy=function(){return Fy=Object.assign||function(n){for(var e,t=1,i=arguments.length;t<i;t++){e=arguments[t];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(n[s]=e[s])}return n},Fy.apply(this,arguments)},qB=function(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t},U_="react-calendar__month-view__days__day";function HB(n){var e=n.calendarType,t=n.classes,i=t===void 0?[]:t,s=n.currentMonthIndex,o=n.formatDay,u=o===void 0?aB:o,h=n.formatLongDate,m=h===void 0?oB:h,p=qB(n,["calendarType","classes","currentMonthIndex","formatDay","formatLongDate"]),_=p.date,v=p.locale,T=[];return i&&T.push.apply(T,i),T.push(U_),rD(_,e)&&T.push("".concat(U_,"--weekend")),_.getMonth()!==s&&T.push("".concat(U_,"--neighboringMonth")),b.jsx(up,Fy({},p,{classes:T,formatAbbr:m,maxDateTransform:ME,minDateTransform:Vh,view:"month",children:u(v,_)}))}var By=function(){return By=Object.assign||function(n){for(var e,t=1,i=arguments.length;t<i;t++){e=arguments[t];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(n[s]=e[s])}return n},By.apply(this,arguments)},GA=function(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t};function GB(n){var e=n.activeStartDate,t=n.calendarType,i=n.hover,s=n.showFixedNumberOfWeeks,o=n.showNeighboringMonth,u=n.value,h=n.valueType,m=GA(n,["activeStartDate","calendarType","hover","showFixedNumberOfWeeks","showNeighboringMonth","value","valueType"]),p=Ct(e),_=Da(e),v=s||o,T=ch(e,t),C=v?0:T,O=(v?-T:0)+1,P=function(){if(s)return O+6*7-1;var L=ZN(e);if(o){var H=new Date;H.setFullYear(p,_,L),H.setHours(0,0,0,0);var J=7-ch(H,t)-1;return L+J}return L}();return b.jsx(lp,{className:"react-calendar__month-view__days",count:7,dateTransform:function(L){var H=new Date;return H.setFullYear(p,_,L),Vh(H)},dateType:"day",hover:i,end:P,renderTile:function(L){var H=L.date,J=GA(L,["date"]);return b.jsx(HB,By({},m,J,{activeStartDate:e,calendarType:t,currentMonthIndex:_,date:H}),H.getTime())},offset:C,start:O,value:u,valueType:h})}var aD="react-calendar__month-view__weekdays",j_="".concat(aD,"__weekday");function YB(n){for(var e=n.calendarType,t=n.formatShortWeekday,i=t===void 0?uB:t,s=n.formatWeekday,o=s===void 0?cB:s,u=n.locale,h=n.onMouseLeave,m=new Date,p=Lo(m),_=Ct(p),v=Da(p),T=[],C=1;C<=7;C+=1){var O=new Date(_,v,C-ch(p,e)),P=o(u,O);T.push(b.jsx("div",{className:ip(j_,bB(O)&&"".concat(j_,"--current"),rD(O,e)&&"".concat(j_,"--weekend")),children:b.jsx("abbr",{"aria-label":P,title:P,children:i(u,O).replace(".","")})},C))}return b.jsx(VE,{className:aD,count:7,onFocus:h,onMouseOver:h,children:T})}var pm=function(){return pm=Object.assign||function(n){for(var e,t=1,i=arguments.length;t<i;t++){e=arguments[t];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(n[s]=e[s])}return n},pm.apply(this,arguments)},YA=function(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t},$A="react-calendar__tile";function $B(n){var e=n.onClickWeekNumber,t=n.weekNumber,i=b.jsx("span",{children:t});if(e){var s=n.date,o=n.onClickWeekNumber,u=n.weekNumber,h=YA(n,["date","onClickWeekNumber","weekNumber"]);return b.jsx("button",pm({},h,{className:$A,onClick:function(m){return o(u,s,m)},type:"button",children:i}))}else{n.date,n.onClickWeekNumber,n.weekNumber;var h=YA(n,["date","onClickWeekNumber","weekNumber"]);return b.jsx("div",pm({},h,{className:$A,children:i}))}}function WB(n){var e=n.activeStartDate,t=n.calendarType,i=n.onClickWeekNumber,s=n.onMouseLeave,o=n.showFixedNumberOfWeeks,u=function(){if(o)return 6;var p=ZN(e),_=ch(e,t),v=p-(7-_);return 1+Math.ceil(v/7)}(),h=function(){for(var p=Ct(e),_=Da(e),v=rp(e),T=[],C=0;C<u;C+=1)T.push(Dy(new Date(p,_,v+C*7),t));return T}(),m=h.map(function(p){return pB(p,t)});return b.jsx(VE,{className:"react-calendar__month-view__weekNumbers",count:u,direction:"column",onFocus:s,onMouseOver:s,style:{flexBasis:"calc(100% * (1 / 8)",flexShrink:0},children:m.map(function(p,_){var v=h[_];if(!v)throw new Error("date is not defined");return b.jsx($B,{date:v,onClickWeekNumber:i,weekNumber:p},p)})})}var zy=function(){return zy=Object.assign||function(n){for(var e,t=1,i=arguments.length;t<i;t++){e=arguments[t];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(n[s]=e[s])}return n},zy.apply(this,arguments)},KB=function(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t};function QB(n){if(n)for(var e=0,t=Object.entries(Q5);e<t.length;e++){var i=t[e],s=i[0],o=i[1];if(o.includes(n))return s}return Sn.ISO_8601}function XB(n){var e=n.activeStartDate,t=n.locale,i=n.onMouseLeave,s=n.showFixedNumberOfWeeks,o=n.calendarType,u=o===void 0?QB(t):o,h=n.formatShortWeekday,m=n.formatWeekday,p=n.onClickWeekNumber,_=n.showWeekNumbers,v=KB(n,["calendarType","formatShortWeekday","formatWeekday","onClickWeekNumber","showWeekNumbers"]);function T(){return b.jsx(YB,{calendarType:u,formatShortWeekday:h,formatWeekday:m,locale:t,onMouseLeave:i})}function C(){return _?b.jsx(WB,{activeStartDate:e,calendarType:u,onClickWeekNumber:p,onMouseLeave:i,showFixedNumberOfWeeks:s}):null}function O(){return b.jsx(GB,zy({calendarType:u},v))}var P="react-calendar__month-view";return b.jsx("div",{className:ip(P,_?"".concat(P,"--weekNumbers"):""),children:b.jsxs("div",{style:{display:"flex",alignItems:"flex-end"},children:[C(),b.jsxs("div",{style:{flexGrow:1,width:"100%"},children:[T(),O()]})]})})}var Ul=function(){return Ul=Object.assign||function(n){for(var e,t=1,i=arguments.length;t<i;t++){e=arguments[t];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(n[s]=e[s])}return n},Ul.apply(this,arguments)},pd="react-calendar",Od=["century","decade","year","month"],ZB=["decade","year","month","day"],UE=new Date;UE.setFullYear(1,0,1);UE.setHours(0,0,0,0);var JB=new Date(864e13);function xc(n){return n instanceof Date?n:new Date(n)}function oD(n,e){return Od.slice(Od.indexOf(n),Od.indexOf(e)+1)}function ez(n,e,t){var i=oD(e,t);return i.indexOf(n)!==-1}function jE(n,e,t){return n&&ez(n,e,t)?n:t}function lD(n){var e=Od.indexOf(n);return ZB[e]}function tz(n,e){var t=Array.isArray(n)?n[e]:n;if(!t)return null;var i=xc(t);if(Number.isNaN(i.getTime()))throw new Error("Invalid date: ".concat(n));return i}function uD(n,e){var t=n.value,i=n.minDate,s=n.maxDate,o=n.maxDetail,u=tz(t,e);if(!u)return null;var h=lD(o),m=function(){switch(e){case 0:return vo(h,u);case 1:return tD(h,u);default:throw new Error("Invalid index value: ".concat(e))}}();return CB(m,i,s)}var FE=function(n){return uD(n,0)},cD=function(n){return uD(n,1)},nz=function(n){return[FE,cD].map(function(e){return e(n)})};function hD(n){var e=n.maxDate,t=n.maxDetail,i=n.minDate,s=n.minDetail,o=n.value,u=n.view,h=jE(u,s,t),m=FE({value:o,minDate:i,maxDate:e,maxDetail:t})||new Date;return vo(h,m)}function iz(n){var e=n.activeStartDate,t=n.defaultActiveStartDate,i=n.defaultValue,s=n.defaultView,o=n.maxDate,u=n.maxDetail,h=n.minDate,m=n.minDetail,p=n.value,_=n.view,v=jE(_,m,u),T=e||t;return T?vo(v,T):hD({maxDate:o,maxDetail:u,minDate:h,minDetail:m,value:p||i,view:_||s})}function F_(n){return n&&(!Array.isArray(n)||n.length===1)}function gd(n,e){return n instanceof Date&&e instanceof Date&&n.getTime()===e.getTime()}var rz=z.forwardRef(function(e,t){var i=e.activeStartDate,s=e.allowPartialRange,o=e.calendarType,u=e.className,h=e.defaultActiveStartDate,m=e.defaultValue,p=e.defaultView,_=e.formatDay,v=e.formatLongDate,T=e.formatMonth,C=e.formatMonthYear,O=e.formatShortWeekday,P=e.formatWeekday,L=e.formatYear,H=e.goToRangeStartOnSelect,J=H===void 0?!0:H,W=e.inputRef,re=e.locale,K=e.maxDate,ae=K===void 0?JB:K,N=e.maxDetail,R=N===void 0?"month":N,I=e.minDate,M=I===void 0?UE:I,U=e.minDetail,j=U===void 0?"century":U,x=e.navigationAriaLabel,Et=e.navigationAriaLive,dt=e.navigationLabel,X=e.next2AriaLabel,he=e.next2Label,pe=e.nextAriaLabel,xe=e.nextLabel,k=e.onActiveStartDateChange,te=e.onChange,ce=e.onClickDay,oe=e.onClickDecade,ge=e.onClickMonth,Ne=e.onClickWeekNumber,ve=e.onClickYear,Tt=e.onDrillDown,We=e.onDrillUp,Yt=e.onViewChange,fi=e.prev2AriaLabel,Qn=e.prev2Label,di=e.prevAriaLabel,ki=e.prevLabel,ut=e.returnValue,Pi=ut===void 0?"start":ut,fn=e.selectRange,dn=e.showDoubleView,Uo=e.showFixedNumberOfWeeks,Ss=e.showNavigation,As=Ss===void 0?!0:Ss,xr=e.showNeighboringCentury,vu=e.showNeighboringDecade,kr=e.showNeighboringMonth,xa=kr===void 0?!0:kr,jo=e.showWeekNumbers,wt=e.tileClassName,Ze=e.tileContent,Pn=e.tileDisabled,jt=e.value,ka=e.view,Fo=z.useState(h),Pr=Fo[0],mi=Fo[1],er=z.useState(null),Xn=er[0],Mr=er[1],tr=z.useState(Array.isArray(m)?m.map(function(Ce){return Ce!==null?xc(Ce):null}):m!=null?xc(m):null),Lr=tr[0],Pa=tr[1],Cs=z.useState(p),Mi=Cs[0],pi=Cs[1],Ft=i||Pr||iz({activeStartDate:i,defaultActiveStartDate:h,defaultValue:m,defaultView:p,maxDate:ae,maxDetail:R,minDate:M,minDetail:j,value:jt,view:ka}),gt=function(){var Ce=function(){return fn&&F_(Lr)?Lr:jt!==void 0?jt:Lr}();return Ce?Array.isArray(Ce)?Ce.map(function(Me){return Me!==null?xc(Me):null}):Ce!==null?xc(Ce):null:null}(),nr=lD(R),Ke=jE(ka||Mi,j,R),mn=oD(j,R),ir=fn?Xn:null,Rs=mn.indexOf(Ke)<mn.length-1,ct=mn.indexOf(Ke)>0,Nt=z.useCallback(function(Ce){var Me=function(){switch(Pi){case"start":return FE;case"end":return cD;case"range":return nz;default:throw new Error("Invalid returnValue.")}}();return Me({maxDate:ae,maxDetail:R,minDate:M,value:Ce})},[ae,R,M,Pi]),bt=z.useCallback(function(Ce,Me){mi(Ce);var De={action:Me,activeStartDate:Ce,value:gt,view:Ke};k&&!gd(Ft,Ce)&&k(De)},[Ft,k,gt,Ke]),pn=z.useCallback(function(Ce,Me){var De=function(){switch(Ke){case"century":return oe;case"decade":return ve;case"year":return ge;case"month":return ce;default:throw new Error("Invalid view: ".concat(Ke,"."))}}();De&&De(Ce,Me)},[ce,oe,ge,ve,Ke]),Vr=z.useCallback(function(Ce,Me){if(Rs){pn(Ce,Me);var De=mn[mn.indexOf(Ke)+1];if(!De)throw new Error("Attempted to drill down from the lowest view.");mi(Ce),pi(De);var gn={action:"drillDown",activeStartDate:Ce,value:gt,view:De};k&&!gd(Ft,Ce)&&k(gn),Yt&&Ke!==De&&Yt(gn),Tt&&Tt(gn)}},[Ft,Rs,k,pn,Tt,Yt,gt,Ke,mn]),Ma=z.useCallback(function(){if(ct){var Ce=mn[mn.indexOf(Ke)-1];if(!Ce)throw new Error("Attempted to drill up from the highest view.");var Me=vo(Ce,Ft);mi(Me),pi(Ce);var De={action:"drillUp",activeStartDate:Me,value:gt,view:Ce};k&&!gd(Ft,Me)&&k(De),Yt&&Ke!==Ce&&Yt(De),We&&We(De)}},[Ft,ct,k,We,Yt,gt,Ke,mn]),gi=z.useCallback(function(Ce,Me){var De=gt;pn(Ce,Me);var gn=fn&&!F_(De),tn;if(fn)if(gn)tn=vo(nr,Ce);else{if(!De)throw new Error("previousValue is required");if(Array.isArray(De))throw new Error("previousValue must not be an array");tn=TB(nr,De,Ce)}else tn=Nt(Ce);var Mn=!fn||gn||J?hD({maxDate:ae,maxDetail:R,minDate:M,minDetail:j,value:tn,view:Ke}):null;Me.persist(),mi(Mn),Pa(tn);var ji={action:"onChange",activeStartDate:Mn,value:tn,view:Ke};if(k&&!gd(Ft,Mn)&&k(ji),te)if(fn){var zo=F_(tn);if(!zo)te(tn||null,Me);else if(s){if(Array.isArray(tn))throw new Error("value must not be an array");te([tn||null,null],Me)}}else te(tn||null,Me)},[Ft,s,Nt,J,ae,R,M,j,k,te,pn,fn,gt,nr,Ke]);function Bo(Ce){Mr(Ce)}function Li(){Mr(null)}z.useImperativeHandle(t,function(){return{activeStartDate:Ft,drillDown:Vr,drillUp:Ma,onChange:gi,setActiveStartDate:bt,value:gt,view:Ke}},[Ft,Vr,Ma,gi,bt,gt,Ke]);function Vi(Ce){var Me=Ce?eD(Ke,Ft):vo(Ke,Ft),De=Rs?Vr:gi,gn={activeStartDate:Me,hover:ir,locale:re,maxDate:ae,minDate:M,onClick:De,onMouseOver:fn?Bo:void 0,tileClassName:wt,tileContent:Ze,tileDisabled:Pn,value:gt,valueType:nr};switch(Ke){case"century":return b.jsx(kB,Ul({formatYear:L,showNeighboringCentury:xr},gn));case"decade":return b.jsx(VB,Ul({formatYear:L,showNeighboringDecade:vu},gn));case"year":return b.jsx(zB,Ul({formatMonth:T,formatMonthYear:C},gn));case"month":return b.jsx(XB,Ul({calendarType:o,formatDay:_,formatLongDate:v,formatShortWeekday:O,formatWeekday:P,onClickWeekNumber:Ne,onMouseLeave:fn?Li:void 0,showFixedNumberOfWeeks:typeof Uo<"u"?Uo:dn,showNeighboringMonth:xa,showWeekNumbers:jo},gn));default:throw new Error("Invalid view: ".concat(Ke,"."))}}function Ui(){return As?b.jsx(SB,{activeStartDate:Ft,drillUp:Ma,formatMonthYear:C,formatYear:L,locale:re,maxDate:ae,minDate:M,navigationAriaLabel:x,navigationAriaLive:Et,navigationLabel:dt,next2AriaLabel:X,next2Label:he,nextAriaLabel:pe,nextLabel:xe,prev2AriaLabel:fi,prev2Label:Qn,prevAriaLabel:di,prevLabel:ki,setActiveStartDate:bt,showDoubleView:dn,view:Ke,views:mn}):null}var _i=Array.isArray(gt)?gt:[gt];return b.jsxs("div",{className:ip(pd,fn&&_i.length===1&&"".concat(pd,"--selectRange"),dn&&"".concat(pd,"--doubleView"),u),ref:W,children:[Ui(),b.jsxs("div",{className:"".concat(pd,"__viewContainer"),onBlur:fn?Li:void 0,onMouseLeave:fn?Li:void 0,children:[Vi(),dn?Vi(!0):null]})]})});function sz(){const[n,e]=z.useState(new Date);return b.jsxs(b.Fragment,{children:[b.jsx(Ia,{}),b.jsx(R5,{}),b.jsxs("div",{className:"main-container",children:[b.jsx(Na,{}),b.jsxs("main",{className:"content",children:[b.jsx("h2",{children:"Bem-Vinda Fulana"}),b.jsxs("div",{className:"cardsResumo",children:[b.jsxs("div",{className:"cardResumo",children:["Alunos Matriculados ",b.jsx("br",{}),b.jsx("strong",{children:"77"})]}),b.jsxs("div",{className:"cardResumo",children:["Turmas Cadastradas ",b.jsx("br",{}),b.jsx("strong",{children:"13"})]}),b.jsxs("div",{className:"cardResumo",children:["Professores Cadastrados ",b.jsx("br",{}),b.jsx("strong",{children:"12"})]})]}),b.jsxs("section",{children:[b.jsx("h3",{children:"Calendário"}),b.jsx(rz,{onChange:e,value:n})]})]})]})]})}function az(){const n=[{titulo:"Matérias",descricao:"Cadastre as disciplinas oferecidas pela escola...",botao:"Gerenciar Matérias",rota:"/gerenciar-materias"},{titulo:"Turmas",descricao:"Crie e organize as turmas por série e período...",botao:"Gerenciar Turmas",rota:"/gerenciar-turmas"},{titulo:"Alunos",descricao:"Gerencie o cadastro de alunos...",botao:"Gerenciar Alunos",rota:"/gerenciar-alunos"},{titulo:"Professores",descricao:"Cadastre, edite ou remova professores...",botao:"Gerenciar Professores",rota:"/gerenciar-professores"}];return b.jsxs(b.Fragment,{children:[b.jsx(Ia,{}),b.jsxs("div",{className:"main-container",children:[b.jsx("div",{className:"sidebar",children:b.jsx(Na,{})}),b.jsxs("main",{className:"content",children:[b.jsx("h1",{children:"Gerenciamento"}),b.jsx("div",{className:"cardsCoordGrid",children:n.map((e,t)=>b.jsxs("div",{className:"cardCoord",children:[b.jsx("h2",{children:e.titulo}),b.jsx("p",{children:e.descricao}),b.jsx(Hi,{to:e.rota,children:b.jsx("button",{className:"botao-gerenciar",children:e.botao})})]},t))})]})]})]})}function oz(){const[n,e]=z.useState([]),[t,i]=z.useState({nome:"",codigo:"",descricao:""}),[s,o]=z.useState(!1),[u,h]=z.useState(null);z.useEffect(()=>{(async()=>{try{const O=(await yo(oi(Ut,"materias"))).docs.map(P=>({id:P.id,...P.data()}));e(O)}catch(C){console.error("Erro ao buscar matérias:",C)}})()},[]);const m=T=>{const{name:C,value:O}=T.target;i(P=>({...P,[C]:O}))},p=async()=>{if(t.nome.trim())try{if(u)await tp(ys(Ut,"materias",u),t),e(n.map(T=>T.id===u?{...T,...t}:T));else{const T=await iu(oi(Ut,"materias"),t);e([...n,{id:T.id,...t}])}i({nome:"",codigo:"",descricao:""}),h(null),o(!1)}catch(T){console.error("Erro ao salvar matéria:",T),alert("Erro ao salvar matéria. Tente novamente.")}},_=T=>{i({nome:T.nome,codigo:T.codigo,descricao:T.descricao}),h(T.id),o(!0)},v=async T=>{if(window.confirm("Tem certeza que deseja excluir esta matéria?"))try{await np(ys(Ut,"materias",T)),e(n.filter(C=>C.id!==T))}catch(C){console.error("Erro ao excluir matéria:",C),alert("Erro ao excluir matéria. Tente novamente.")}};return b.jsxs(b.Fragment,{children:[b.jsx(Ia,{}),b.jsxs("div",{className:"main-container",children:[b.jsx("div",{className:"sidebar",children:b.jsx(Na,{})}),b.jsxs("main",{className:"content",children:[b.jsx("h2",{children:"Cadastro de Matérias"}),b.jsx("button",{className:"botaoPopup",onClick:()=>{o(!0),h(null),i({nome:"",codigo:"",descricao:""})},children:"Nova Matéria"}),b.jsx("div",{className:"materias-grid",children:n.length>0?n.map(T=>b.jsxs("div",{className:"materia-card",children:[b.jsxs("div",{children:[b.jsx("h3",{children:T.nome}),b.jsx("span",{children:T.codigo})]}),b.jsx("div",{children:b.jsx("p",{children:T.descricao})}),b.jsxs("div",{children:[b.jsx("button",{className:"botao",onClick:()=>_(T),children:"Editar"}),b.jsx("button",{className:"botao-cancelar",onClick:()=>v(T.id),children:"Excluir"})]})]},T.id)):b.jsx("p",{children:"Nenhuma matéria cadastrada ainda."})}),s&&b.jsx("div",{className:"popupOverlay",children:b.jsxs("div",{className:"popup",children:[b.jsx("h3",{children:u?"Editar Matéria":"Nova Matéria"}),b.jsxs("div",{children:[b.jsx("label",{children:"Nome da Matéria:"}),b.jsx("input",{type:"text",name:"nome",value:t.nome,onChange:m,required:!0})]}),b.jsxs("div",{children:[b.jsx("label",{children:"Código:"}),b.jsx("input",{type:"text",name:"codigo",value:t.codigo,onChange:m})]}),b.jsxs("div",{children:[b.jsx("label",{children:"Descrição:"}),b.jsx("textarea",{name:"descricao",value:t.descricao,onChange:m,rows:"3"})]}),b.jsxs("div",{children:[b.jsx("button",{className:"botaoPopupCancelar",onClick:()=>{o(!1),h(null)},children:"Cancelar"}),b.jsx("button",{className:"botaoPopup",onClick:p,children:u?"Atualizar":"Salvar"})]})]})})]})]})]})}function lz(){const[n,e]=z.useState([]),[t,i]=z.useState({serie:"",periodo:"",materias:[]}),[s,o]=z.useState([]),[u,h]=z.useState(!1),[m,p]=z.useState(null);z.useEffect(()=>{const P=async()=>{try{const J=(await yo(oi(Ut,"turmas"))).docs.map(W=>({id:W.id,...W.data()}));e(J)}catch(H){console.error("Erro ao buscar turmas:",H)}},L=async()=>{try{const J=(await yo(oi(Ut,"materias"))).docs.map(W=>W.data().nome);o(J)}catch(H){console.error("Erro ao buscar matérias disponíveis:",H)}};P(),L()},[]);const _=P=>{const{name:L,value:H}=P.target;i(J=>({...J,[L]:H}))},v=P=>{const{value:L,checked:H}=P.target;i(J=>({...J,materias:H?[...J.materias,L]:J.materias.filter(W=>W!==L)}))},T=async()=>{if(t.serie.trim())try{if(m)await tp(ys(Ut,"turmas",m),t),e(n.map(P=>P.id===m?{...P,...t}:P));else{const P=await iu(oi(Ut,"turmas"),t);e([...n,{id:P.id,...t}])}i({serie:"",periodo:"",materias:[]}),p(null),h(!1)}catch(P){console.error("Erro ao salvar turma:",P),alert("Erro ao salvar turma. Tente novamente.")}},C=P=>{i({serie:P.serie,periodo:P.periodo,materias:P.materias||[]}),p(P.id),h(!0)},O=async P=>{if(window.confirm("Tem certeza que deseja excluir esta turma?"))try{await np(ys(Ut,"turmas",P)),e(n.filter(L=>L.id!==P))}catch(L){console.error("Erro ao excluir turma:",L),alert("Erro ao excluir turma. Tente novamente.")}};return b.jsxs(b.Fragment,{children:[b.jsx(Ia,{}),b.jsxs("div",{className:"main-container",children:[b.jsx("div",{className:"sidebar",children:b.jsx(Na,{})}),b.jsxs("main",{className:"content",children:[b.jsx("h2",{children:"Gerenciamento de Turmas"}),b.jsx("button",{className:"botao",onClick:()=>{h(!0),i({serie:"",periodo:"",materias:[]}),p(null)},children:m?"Editar Turma":"Cadastrar Turma"}),b.jsx("div",{className:"materias-grid",children:n.map(P=>b.jsxs("div",{className:"materia-card",children:[b.jsxs("h3",{children:[P.serie," - ",P.periodo]}),b.jsxs("p",{children:[b.jsx("strong",{children:"Matérias:"})," ",P.materias?.join(", ")]}),b.jsx("button",{className:"botao",onClick:()=>C(P),children:"Editar"}),b.jsx("button",{className:"botao-cancelar",onClick:()=>O(P.id),children:"Excluir"})]},P.id))})]}),u&&b.jsx("div",{className:"popupOverlay",children:b.jsxs("div",{className:"popup",children:[b.jsx("h3",{children:m?"Editar Turma":"Nova Turma"}),b.jsxs("div",{className:"formGrid",children:[b.jsxs("div",{className:"filtro",children:[b.jsx("label",{htmlFor:"serie",children:"Série"}),b.jsx("input",{type:"text",name:"serie",value:t.serie,placeholder:"Ex: 1º Ano A",onChange:_})]}),b.jsxs("div",{className:"filtro",children:[b.jsx("label",{htmlFor:"periodo",children:"Período"}),b.jsxs("select",{name:"periodo",value:t.periodo,onChange:_,children:[b.jsx("option",{value:"",children:"Selecione"}),b.jsx("option",{value:"Manhã",children:"Manhã"}),b.jsx("option",{value:"Tarde",children:"Tarde"})]})]}),b.jsxs("div",{className:"filtro",children:[b.jsx("label",{children:"Matérias"}),b.jsx("div",{className:"checkboxGroup",children:s.map(P=>b.jsxs("div",{className:"checkboxItem",children:[b.jsx("input",{type:"checkbox",value:P,checked:t.materias.includes(P),onChange:v,id:`checkbox-${P}`}),b.jsx("label",{htmlFor:`checkbox-${P}`,children:P})]},P))})]})]}),b.jsxs("div",{className:"botoesPopup",children:[b.jsx("button",{className:"botaoPopupCancelar",onClick:()=>h(!1),children:"Cancelar"}),b.jsx("button",{className:"botaoPopup",onClick:T,children:m?"Atualizar":"Cadastrar"})]})]})})]})]})}function uz(){const[n,e]=z.useState([]),[t,i]=z.useState({nome:"",cpf:"",email:"",dataDeNascimento:"",foto:"",materias:[],turmas:[]}),[s,o]=z.useState([]),[u,h]=z.useState([]),[m,p]=z.useState(!1),[_,v]=z.useState(!1),[T,C]=z.useState(null);z.useEffect(()=>{const K=async()=>{try{const R=(await yo(oi(Ut,"professores"))).docs.map(I=>({id:I.id,...I.data()}));e(R)}catch(N){console.error("Erro ao buscar professores:",N)}},ae=async()=>{try{const N=await yo(oi(Ut,"materias")),R=await yo(oi(Ut,"turmas"));o(N.docs.map(I=>({id:I.id,...I.data()}))),h(R.docs.map(I=>({id:I.id,...I.data()})))}catch(N){console.error("Erro ao buscar matérias/turmas:",N)}};K(),ae()},[]);const O=async(K,ae)=>{try{if(!K||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(K))throw new Error("Email do professor inválido");const N=`${ae.toLowerCase().slice(0,3)}${t.cpf.slice(-4)}!`;return(await Gv(kh,K,N)).user.uid}catch(N){throw console.error("Erro ao criar usuário:",N),new Error(`Falha ao criar usuário: ${N.message}`)}},P=async(K,ae,N,R)=>{try{await iu(oi(Ut,"usuarios"),{uid:K,email:ae,tipo:"professor",professorId:N,nome:R,criadoEm:new Date().toISOString(),permissoes:{acessoResponsavel:!1,acessoCoordenacao:!1,acessoProfessor:!0}})}catch(I){throw console.error("Erro ao criar registro de usuário:",I),I}},L=async()=>{if(t.nome.trim())try{if(_&&T)await tp(ys(Ut,"professores",T),t),e(ae=>ae.map(N=>N.id===T?{...N,...t}:N));else{const ae=await iu(oi(Ut,"professores"),{...t,criadoEm:new Date().toISOString()}),N=await O(t.email,t.nome);await P(N,t.email,ae.id,t.nome),e([...n,{id:ae.id,...t}])}i({nome:"",cpf:"",email:"",dataDeNascimento:"",foto:"",materias:[],turmas:[]}),p(!1),v(!1),C(null),alert(`Professor cadastrado com sucesso!

Email: ${t.email}
Senha temporária: ${t.nome.toLowerCase().slice(0,3)}${t.cpf.slice(-4)}!`)}catch(ae){console.error("Erro ao salvar professor",ae);let N="Erro ao cadastrar: ";ae.message.includes("auth/invalid-email")?N+="Email inválido.":ae.message.includes("auth/email-already-in-use")?N+="Já existe um usuário com este email.":N+=ae.message,alert(N)}},H=async K=>{try{await np(ys(Ut,"professores",K)),e(n.filter(ae=>ae.id!==K))}catch(ae){console.error("Erro ao excluir professor:",ae)}},J=K=>{i({...K}),v(!0),C(K.id),p(!0)},W=K=>{const ae=K.target.files[0];if(ae){const N=URL.createObjectURL(ae);i({...t,foto:N})}},re=K=>{const{name:ae,value:N}=K.target;i(R=>({...R,[ae]:N}))};return b.jsxs(b.Fragment,{children:[b.jsx(Ia,{}),b.jsxs("div",{className:"main-container",children:[b.jsx("div",{className:"sidebar",children:b.jsx(Na,{})}),b.jsxs("main",{className:"content",children:[b.jsx("h2",{children:"Gerenciamento de Professores"}),b.jsx("button",{className:"botao",onClick:()=>{p(!0),v(!1),i({nome:"",cpf:"",email:"",dataDeNascimento:"",foto:"",materias:[],turmas:[]})},children:"Cadastrar Professor"}),b.jsx("div",{className:"cardsContainer",children:n.map(K=>b.jsx("div",{className:"cardProfessor",children:b.jsxs("div",{className:"conteudoCardBranco",children:[K.foto&&b.jsx("img",{className:"cardfoto",src:K.foto,alt:"Foto"}),b.jsxs("p",{children:["Professor: ",K.nome]}),b.jsxs("p",{children:["CPF: ",K.cpf]}),b.jsxs("p",{children:["Email: ",K.email]}),b.jsxs("p",{children:["Data de Nascimento: ",K.dataDeNascimento]}),b.jsxs("p",{children:[" Matérias: ",K.materias?.map(ae=>s.find(N=>N.id===ae)?.nome||ae).join(", ")||"Nenhuma"]}),b.jsxs("p",{children:["Turmas: ",K.turmas?.map(ae=>{const N=u.find(R=>R.id===ae);return N?`${N.serie} - ${N.periodo}`:ae}).join(", ")||"Nenhuma"]}),b.jsx("button",{className:"botaoPopup",onClick:()=>J(K),children:"Editar"}),b.jsx("button",{className:"botaoPopupCancelar",onClick:()=>H(K.id),children:"Excluir"})]})},K.id))}),m&&b.jsx("div",{className:"popupOverlay",children:b.jsxs("div",{className:"popup",children:[b.jsx("h3",{children:_?"Editar Professor":"Novo Professor"}),b.jsx("input",{type:"text",name:"nome",placeholder:"Nome completo",value:t.nome,onChange:re}),b.jsx("input",{type:"text",name:"cpf",placeholder:"CPF",value:t.cpf,onChange:re}),b.jsx("input",{type:"email",name:"email",placeholder:"Email pessoal",value:t.email,onChange:re}),b.jsx("input",{type:"date",name:"dataDeNascimento",value:t.dataDeNascimento,onChange:re}),b.jsxs("div",{className:"filtro",children:[b.jsx("label",{children:"Matérias"}),b.jsx("div",{className:"checkboxGroup",children:s.map(K=>b.jsxs("div",{className:"checkboxItem",children:[b.jsx("input",{type:"checkbox",id:`materia-${K.id}`,value:K.id,checked:t.materias.includes(K.id),onChange:ae=>{const{value:N,checked:R}=ae.target;i(I=>({...I,materias:R?[...I.materias,N]:I.materias.filter(M=>M!==N)}))}}),b.jsx("label",{htmlFor:`materia-${K.id}`,children:K.nome})]},K.id))})]}),b.jsxs("div",{className:"filtro",children:[b.jsx("label",{children:"Turmas"}),b.jsx("div",{className:"checkboxGroup",children:u.map(K=>b.jsxs("div",{className:"checkboxItem",children:[b.jsx("input",{type:"checkbox",id:`turma-${K.id}`,value:K.id,checked:t.turmas.includes(K.id),onChange:ae=>{const{value:N,checked:R}=ae.target;i(I=>({...I,turmas:R?[...I.turmas,N]:I.turmas.filter(M=>M!==N)}))}}),b.jsxs("label",{htmlFor:`turma-${K.id}`,children:[K.serie," - ",K.periodo]})]},K.id))})]}),b.jsx("input",{type:"file",accept:"image/*",onChange:W}),t.foto&&b.jsx("img",{className:"cardfoto",src:t.foto,alt:"Foto do Professor"}),b.jsxs("div",{className:"botoesPopup",children:[b.jsx("button",{className:"botaoPopupCancelar",onClick:()=>{p(!1),v(!1),C(null)},children:"Cancelar"}),b.jsx("button",{className:"botaoPopup",onClick:L,children:_?"Salvar Alterações":"Cadastrar"})]})]})})]})]})]})}function cz(){const[n,e]=z.useState([]),[t,i]=z.useState([]),[s,o]=z.useState({nome:"",cpf:"",responsavel:"",cpfResponsavel:"",dataDeNascimento:"",foto:"",turmaId:""}),[u,h]=z.useState(!1),[m,p]=z.useState(!1),[_,v]=z.useState(null);z.useEffect(()=>{(async()=>{try{const K=(await yo(oi(Ut,"turmas"))).docs.map(ae=>({id:ae.id,...ae.data()}));i(K)}catch(re){console.error("Erro ao buscar turmas:",re)}})()},[]);const T=async(W,re)=>{try{if(!W||W.replace(/\D/g,"").length<11)throw new Error("CPF do responsável inválido");const K=W.replace(/\D/g,"").slice(-11),ae=`responsavel.${K}@escolamestra.com`,N=`${K.slice(-6)}`;if(!/^[^@]+@[^@]+\.[^@]+$/.test(ae))throw new Error("Email gerado é inválido");return(await Gv(kh,ae,N)).user.uid}catch(K){throw console.error("Erro ao criar usuário:",K),new Error(`Falha ao criar usuário: ${K.message}`)}},C=async(W,re,K,ae)=>{try{await iu(oi(Ut,"usuarios"),{uid:W,cpfResponsavel:re,tipo:"responsavel",alunoId:K,nome:ae,criadoEm:new Date().toISOString(),permissoes:{acessoResponsavel:!0,acessoCoordenacao:!1,acessoProfessor:!1}})}catch(N){throw console.error("Erro ao criar registro de usuário:",N),N}},O=async()=>{if(s.nome.trim())try{if(m&&_)await tp(ys(Ut,"alunos",_),s),e(re=>re.map(K=>K.id===_?{...K,...s}:K));else{const re=await iu(oi(Ut,"alunos"),{...s,criadoEm:new Date().toISOString()}),K=await T(s.cpfResponsavel,s.responsavel);await C(K,s.cpfResponsavel,re.id,s.responsavel),e([...n,{id:re.id,...s}])}o({nome:"",cpf:"",responsavel:"",cpfResponsavel:"",dataDeNascimento:"",foto:"",turmaId:""}),h(!1),p(!1),v(null),alert(`Usuário criado com sucesso!

Login: ${s.cpfResponsavel}
Senha: ${s.cpfResponsavel.slice(-6)}`)}catch(re){console.error("Erro ao salvar aluno",re);let K="Erro ao cadastrar: ";re.message.includes("auth/invalid-email")?K+="Email inválido gerado para o responsável.":re.message.includes("auth/email-already-in-use")?K+="Já existe um usuário com este CPF (email).":K+=re.message,alert(K)}},P=async W=>{try{await np(ys(Ut,"alunos",W)),e(re=>re.filter(K=>K.id!==W))}catch(re){console.error("Erro ao excluir aluno:",re)}},L=W=>{o({...W}),p(!0),v(W.id),h(!0)},H=W=>{const re=W.target.files[0];if(re){const K=URL.createObjectURL(re);o({...s,foto:K})}},J=W=>{const{name:re,value:K}=W.target;o(ae=>({...ae,[re]:K}))};return b.jsxs(b.Fragment,{children:[b.jsx(Ia,{}),b.jsxs("div",{className:"main-container",children:[b.jsx("div",{className:"sidebar",children:b.jsx(Na,{})}),b.jsxs("main",{className:"content",children:[b.jsx("h2",{children:"Gerenciamento de Alunos"}),b.jsx("button",{className:"botao",onClick:()=>{h(!0),p(!1),o({nome:"",cpf:"",responsavel:"",cpfResponsavel:"",dataDeNascimento:"",foto:"",turmaId:""})},children:"Cadastrar Aluno"}),b.jsx("div",{className:"cardsContainer",children:n.map(W=>b.jsx("div",{className:"cardAluno",children:b.jsxs("div",{className:"conteudoCardBranco",children:[W.foto&&b.jsx("img",{className:"cardfoto",src:W.foto,alt:"Foto"}),b.jsxs("p",{children:["Aluno: ",W.nome]}),b.jsxs("p",{children:["CPF: ",W.cpf]}),b.jsxs("p",{children:["Responsável: ",W.responsavel]}),b.jsxs("p",{children:["CPF Responsável: ",W.cpfResponsavel]}),b.jsxs("p",{children:["Data de Nascimento: ",W.dataDeNascimento]}),b.jsxs("p",{children:["Turma: ",W.turmaId]}),b.jsx("button",{className:"botaoPopup",onClick:()=>L(W),children:"Editar"}),b.jsx("button",{className:"botaoPopupCancelar",onClick:()=>P(W.id),children:"Excluir"})]})},W.id))}),u&&b.jsx("div",{className:"popupOverlay",children:b.jsxs("div",{className:"popup",children:[b.jsx("h3",{children:m?"Editar Aluno":"Novo Aluno"}),b.jsx("input",{type:"text",name:"nome",placeholder:"Nome completo do aluno",value:s.nome,onChange:J}),b.jsx("input",{type:"text",name:"cpf",placeholder:"CPF do aluno",value:s.cpf,onChange:J}),b.jsx("input",{type:"text",name:"responsavel",placeholder:"Nome do responsável",value:s.responsavel,onChange:J}),b.jsx("input",{type:"text",name:"cpfResponsavel",placeholder:"CPF do responsável (será usado para login)",value:s.cpfResponsavel,onChange:J}),b.jsx("input",{type:"date",name:"dataDeNascimento",value:s.dataDeNascimento,onChange:J}),b.jsxs("select",{name:"turmaId",value:s.turmaId,onChange:J,children:[b.jsx("option",{value:"",children:"Selecione a turma"}),t.map(W=>b.jsxs("option",{value:W.id,children:[W.serie," - ",W.periodo]},W.id))]}),b.jsx("input",{type:"file",accept:"image/*",onChange:H}),s.foto&&b.jsx("img",{className:"cardfoto",src:s.foto,alt:"Foto do Aluno"}),b.jsxs("div",{className:"botoesPopup",children:[b.jsx("button",{className:"botaoPopupCancelar",onClick:()=>{h(!1),p(!1),v(null)},children:"Cancelar"}),b.jsx("button",{className:"botaoPopup",onClick:O,children:m?"Salvar Alterações":"Cadastrar"})]})]})})]})]})]})}function hz(){const[n,e]=z.useState({periodo:"",turma:"",materia:""}),t=s=>{const{name:o,value:u}=s.target;e({...n,[o]:u})},i=()=>{console.log("Filtros selecionados:",n)};return b.jsxs(b.Fragment,{children:[b.jsx(Ia,{}),b.jsxs("div",{className:"main-container",children:[b.jsx("div",{className:"sidebar",children:b.jsx(Na,{})}),b.jsxs("main",{className:"content",children:[b.jsx("h2",{children:"Relatórios"}),b.jsx("p",{children:"Gere relatórios de frequência personalizados"}),b.jsxs("section",{className:"filtros-box",children:[b.jsx("h4",{children:"Filtros"}),b.jsxs("div",{className:"filtros",children:[b.jsxs("div",{className:"filtro",children:[b.jsx("label",{htmlFor:"periodo",children:"Período"}),b.jsx("select",{name:"periodo",id:"periodo",value:n.periodo,onChange:t,children:b.jsx("option",{value:"",children:"Selecione"})})]}),b.jsxs("div",{className:"filtro",children:[b.jsx("label",{htmlFor:"turma",children:"Turma"}),b.jsx("select",{name:"turma",id:"turma",value:n.turma,onChange:t,children:b.jsx("option",{value:"",children:"Selecione"})})]}),b.jsxs("div",{className:"filtro",children:[b.jsx("label",{htmlFor:"materia",children:"Matéria"}),b.jsx("select",{name:"materia",id:"materia",value:n.materia,onChange:t,children:b.jsx("option",{value:"",children:"Selecione"})})]})]}),b.jsx("button",{className:"botao",onClick:i,children:"Gerar relatório"})]})]})]})]})}function fz(){const[n,e]=z.useState(""),t=s=>{e(s.target.value)},i=()=>{alert("Mensagem enviada: "+n),e("")};return b.jsxs(b.Fragment,{children:[b.jsx(Ia,{}),b.jsxs("div",{className:"main-container",children:[b.jsx("div",{className:"sidebar",children:b.jsx(Na,{})}),b.jsxs("main",{className:"content",children:[b.jsx("h2",{children:"Mensagem"}),b.jsxs("div",{children:[b.jsx("textarea",{value:n,onChange:t,placeholder:"Digite sua mensagem aqui",style:{width:"100%",height:"100px",padding:"10px",resize:"none"}}),b.jsx("button",{className:"botao",onClick:i,children:"Enviar"})]})]})]})]})}function dz(){return b.jsx(ok,{children:b.jsxs(Ux,{children:[b.jsx(Ni,{path:"/",element:b.jsx(b5,{})}),b.jsx(Ni,{path:"/cadastrocoord",element:b.jsx(C5,{})}),b.jsx(Ni,{path:"/coord",element:b.jsx(Js,{allowedProfiles:["coordenacao"],children:b.jsx(sz,{})})}),b.jsx(Ni,{path:"/gerenciamento",element:b.jsx(Js,{allowedProfiles:["coordenacao"],children:b.jsx(az,{})})}),b.jsx(Ni,{path:"/gerenciar-materias",element:b.jsx(Js,{allowedProfiles:["coordenacao"],children:b.jsx(oz,{})})}),b.jsx(Ni,{path:"/gerenciar-turmas",element:b.jsx(Js,{allowedProfiles:["coordenacao"],children:b.jsx(lz,{})})}),b.jsx(Ni,{path:"/gerenciar-alunos",element:b.jsx(Js,{allowedProfiles:["coordenacao"],children:b.jsx(cz,{})})}),b.jsx(Ni,{path:"/gerenciar-professores",element:b.jsx(Js,{allowedProfiles:["coordenacao"],children:b.jsx(uz,{})})}),b.jsx(Ni,{path:"/relatorio",element:b.jsx(Js,{allowedProfiles:["coordenacao"],children:b.jsx(hz,{})})}),b.jsx(Ni,{path:"/mensagem",element:b.jsx(Js,{allowedProfiles:["coordenacao"],children:b.jsx(fz,{})})}),b.jsx(Ni,{path:"*",element:b.jsx(Lx,{to:"/"})})]})})}$O.createRoot(document.getElementById("root")).render(b.jsx(jO.StrictMode,{children:b.jsx(dz,{})}));
