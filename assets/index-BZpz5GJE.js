function D1(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in n)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function I1(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var hv={exports:{}},Ac={},dv={exports:{}},He={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xl=Symbol.for("react.element"),U1=Symbol.for("react.portal"),N1=Symbol.for("react.fragment"),F1=Symbol.for("react.strict_mode"),O1=Symbol.for("react.profiler"),B1=Symbol.for("react.provider"),k1=Symbol.for("react.context"),z1=Symbol.for("react.forward_ref"),V1=Symbol.for("react.suspense"),G1=Symbol.for("react.memo"),H1=Symbol.for("react.lazy"),fg=Symbol.iterator;function W1(n){return n===null||typeof n!="object"?null:(n=fg&&n[fg]||n["@@iterator"],typeof n=="function"?n:null)}var pv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mv=Object.assign,gv={};function to(n,e,t){this.props=n,this.context=e,this.refs=gv,this.updater=t||pv}to.prototype.isReactComponent={};to.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};to.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function _v(){}_v.prototype=to.prototype;function Ep(n,e,t){this.props=n,this.context=e,this.refs=gv,this.updater=t||pv}var Tp=Ep.prototype=new _v;Tp.constructor=Ep;mv(Tp,to.prototype);Tp.isPureReactComponent=!0;var hg=Array.isArray,vv=Object.prototype.hasOwnProperty,wp={current:null},xv={key:!0,ref:!0,__self:!0,__source:!0};function yv(n,e,t){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)vv.call(e,i)&&!xv.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in o=n.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:xl,type:n,key:s,ref:a,props:r,_owner:wp.current}}function X1(n,e){return{$$typeof:xl,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Ap(n){return typeof n=="object"&&n!==null&&n.$$typeof===xl}function j1(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var dg=/\/+/g;function ef(n,e){return typeof n=="object"&&n!==null&&n.key!=null?j1(""+n.key):e.toString(36)}function xu(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var a=!1;if(n===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case xl:case U1:a=!0}}if(a)return a=n,r=r(a),n=i===""?"."+ef(a,0):i,hg(r)?(t="",n!=null&&(t=n.replace(dg,"$&/")+"/"),xu(r,e,t,"",function(u){return u})):r!=null&&(Ap(r)&&(r=X1(r,t+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(dg,"$&/")+"/")+n)),e.push(r)),1;if(a=0,i=i===""?".":i+":",hg(n))for(var o=0;o<n.length;o++){s=n[o];var l=i+ef(s,o);a+=xu(s,e,t,l,r)}else if(l=W1(n),typeof l=="function")for(n=l.call(n),o=0;!(s=n.next()).done;)s=s.value,l=i+ef(s,o++),a+=xu(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Dl(n,e,t){if(n==null)return n;var i=[],r=0;return xu(n,i,"","",function(s){return e.call(t,s,r++)}),i}function Y1(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var xn={current:null},yu={transition:null},q1={ReactCurrentDispatcher:xn,ReactCurrentBatchConfig:yu,ReactCurrentOwner:wp};function Sv(){throw Error("act(...) is not supported in production builds of React.")}He.Children={map:Dl,forEach:function(n,e,t){Dl(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Dl(n,function(){e++}),e},toArray:function(n){return Dl(n,function(e){return e})||[]},only:function(n){if(!Ap(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};He.Component=to;He.Fragment=N1;He.Profiler=O1;He.PureComponent=Ep;He.StrictMode=F1;He.Suspense=V1;He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q1;He.act=Sv;He.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=mv({},n.props),r=n.key,s=n.ref,a=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=wp.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var o=n.type.defaultProps;for(l in e)vv.call(e,l)&&!xv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:xl,type:n.type,key:r,ref:s,props:i,_owner:a}};He.createContext=function(n){return n={$$typeof:k1,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:B1,_context:n},n.Consumer=n};He.createElement=yv;He.createFactory=function(n){var e=yv.bind(null,n);return e.type=n,e};He.createRef=function(){return{current:null}};He.forwardRef=function(n){return{$$typeof:z1,render:n}};He.isValidElement=Ap;He.lazy=function(n){return{$$typeof:H1,_payload:{_status:-1,_result:n},_init:Y1}};He.memo=function(n,e){return{$$typeof:G1,type:n,compare:e===void 0?null:e}};He.startTransition=function(n){var e=yu.transition;yu.transition={};try{n()}finally{yu.transition=e}};He.unstable_act=Sv;He.useCallback=function(n,e){return xn.current.useCallback(n,e)};He.useContext=function(n){return xn.current.useContext(n)};He.useDebugValue=function(){};He.useDeferredValue=function(n){return xn.current.useDeferredValue(n)};He.useEffect=function(n,e){return xn.current.useEffect(n,e)};He.useId=function(){return xn.current.useId()};He.useImperativeHandle=function(n,e,t){return xn.current.useImperativeHandle(n,e,t)};He.useInsertionEffect=function(n,e){return xn.current.useInsertionEffect(n,e)};He.useLayoutEffect=function(n,e){return xn.current.useLayoutEffect(n,e)};He.useMemo=function(n,e){return xn.current.useMemo(n,e)};He.useReducer=function(n,e,t){return xn.current.useReducer(n,e,t)};He.useRef=function(n){return xn.current.useRef(n)};He.useState=function(n){return xn.current.useState(n)};He.useSyncExternalStore=function(n,e,t){return xn.current.useSyncExternalStore(n,e,t)};He.useTransition=function(){return xn.current.useTransition()};He.version="18.3.1";dv.exports=He;var ie=dv.exports;const Mv=I1(ie),$1=D1({__proto__:null,default:Mv},[ie]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K1=ie,Z1=Symbol.for("react.element"),Q1=Symbol.for("react.fragment"),J1=Object.prototype.hasOwnProperty,eM=K1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tM={key:!0,ref:!0,__self:!0,__source:!0};function Ev(n,e,t){var i,r={},s=null,a=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)J1.call(e,i)&&!tM.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Z1,type:n,key:s,ref:a,props:r,_owner:eM.current}}Ac.Fragment=Q1;Ac.jsx=Ev;Ac.jsxs=Ev;hv.exports=Ac;var Le=hv.exports,yh={},Tv={exports:{}},Kn={},wv={exports:{}},Av={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(F,G){var $=F.length;F.push(G);e:for(;0<$;){var ee=$-1>>>1,se=F[ee];if(0<r(se,G))F[ee]=G,F[$]=se,$=ee;else break e}}function t(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var G=F[0],$=F.pop();if($!==G){F[0]=$;e:for(var ee=0,se=F.length,Ue=se>>>1;ee<Ue;){var be=2*(ee+1)-1,Ae=F[be],q=be+1,ue=F[q];if(0>r(Ae,$))q<se&&0>r(ue,Ae)?(F[ee]=ue,F[q]=$,ee=q):(F[ee]=Ae,F[be]=$,ee=be);else if(q<se&&0>r(ue,$))F[ee]=ue,F[q]=$,ee=q;else break e}}return G}function r(F,G){var $=F.sortIndex-G.sortIndex;return $!==0?$:F.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();n.unstable_now=function(){return a.now()-o}}var l=[],u=[],c=1,h=null,f=3,p=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(F){for(var G=t(u);G!==null;){if(G.callback===null)i(u);else if(G.startTime<=F)i(u),G.sortIndex=G.expirationTime,e(l,G);else break;G=t(u)}}function S(F){if(_=!1,x(F),!g)if(t(l)!==null)g=!0,z(T);else{var G=t(u);G!==null&&U(S,G.startTime-F)}}function T(F,G){g=!1,_&&(_=!1,d(y),y=-1),p=!0;var $=f;try{for(x(G),h=t(l);h!==null&&(!(h.expirationTime>G)||F&&!P());){var ee=h.callback;if(typeof ee=="function"){h.callback=null,f=h.priorityLevel;var se=ee(h.expirationTime<=G);G=n.unstable_now(),typeof se=="function"?h.callback=se:h===t(l)&&i(l),x(G)}else i(l);h=t(l)}if(h!==null)var Ue=!0;else{var be=t(u);be!==null&&U(S,be.startTime-G),Ue=!1}return Ue}finally{h=null,f=$,p=!1}}var M=!1,w=null,y=-1,A=5,b=-1;function P(){return!(n.unstable_now()-b<A)}function D(){if(w!==null){var F=n.unstable_now();b=F;var G=!0;try{G=w(!0,F)}finally{G?k():(M=!1,w=null)}}else M=!1}var k;if(typeof v=="function")k=function(){v(D)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,L=O.port2;O.port1.onmessage=D,k=function(){L.postMessage(null)}}else k=function(){m(D,0)};function z(F){w=F,M||(M=!0,k())}function U(F,G){y=m(function(){F(n.unstable_now())},G)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(F){F.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,z(T))},n.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<F?Math.floor(1e3/F):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(F){switch(f){case 1:case 2:case 3:var G=3;break;default:G=f}var $=f;f=G;try{return F()}finally{f=$}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(F,G){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var $=f;f=F;try{return G()}finally{f=$}},n.unstable_scheduleCallback=function(F,G,$){var ee=n.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ee+$:ee):$=ee,F){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=$+se,F={id:c++,callback:G,priorityLevel:F,startTime:$,expirationTime:se,sortIndex:-1},$>ee?(F.sortIndex=$,e(u,F),t(l)===null&&F===t(u)&&(_?(d(y),y=-1):_=!0,U(S,$-ee))):(F.sortIndex=se,e(l,F),g||p||(g=!0,z(T))),F},n.unstable_shouldYield=P,n.unstable_wrapCallback=function(F){var G=f;return function(){var $=f;f=G;try{return F.apply(this,arguments)}finally{f=$}}}})(Av);wv.exports=Av;var nM=wv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iM=ie,Yn=nM;function ne(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cv=new Set,Wo={};function Hs(n,e){ka(n,e),ka(n+"Capture",e)}function ka(n,e){for(Wo[n]=e,n=0;n<e.length;n++)Cv.add(e[n])}var cr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sh=Object.prototype.hasOwnProperty,rM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pg={},mg={};function sM(n){return Sh.call(mg,n)?!0:Sh.call(pg,n)?!1:rM.test(n)?mg[n]=!0:(pg[n]=!0,!1)}function aM(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function oM(n,e,t,i){if(e===null||typeof e>"u"||aM(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function yn(n,e,t,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var rn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){rn[n]=new yn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];rn[e]=new yn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){rn[n]=new yn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){rn[n]=new yn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){rn[n]=new yn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){rn[n]=new yn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){rn[n]=new yn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){rn[n]=new yn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){rn[n]=new yn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Cp=/[\-:]([a-z])/g;function Rp(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Cp,Rp);rn[e]=new yn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Cp,Rp);rn[e]=new yn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Cp,Rp);rn[e]=new yn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){rn[n]=new yn(n,1,!1,n.toLowerCase(),null,!1,!1)});rn.xlinkHref=new yn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){rn[n]=new yn(n,1,!1,n.toLowerCase(),null,!0,!0)});function bp(n,e,t,i){var r=rn.hasOwnProperty(e)?rn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(oM(e,t,r,i)&&(t=null),i||r===null?sM(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var vr=iM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Il=Symbol.for("react.element"),pa=Symbol.for("react.portal"),ma=Symbol.for("react.fragment"),Pp=Symbol.for("react.strict_mode"),Mh=Symbol.for("react.profiler"),Rv=Symbol.for("react.provider"),bv=Symbol.for("react.context"),Lp=Symbol.for("react.forward_ref"),Eh=Symbol.for("react.suspense"),Th=Symbol.for("react.suspense_list"),Dp=Symbol.for("react.memo"),Pr=Symbol.for("react.lazy"),Pv=Symbol.for("react.offscreen"),gg=Symbol.iterator;function ao(n){return n===null||typeof n!="object"?null:(n=gg&&n[gg]||n["@@iterator"],typeof n=="function"?n:null)}var wt=Object.assign,tf;function Eo(n){if(tf===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);tf=e&&e[1]||""}return`
`+tf+n}var nf=!1;function rf(n,e){if(!n||nf)return"";nf=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=a&&0<=o);break}}}finally{nf=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Eo(n):""}function lM(n){switch(n.tag){case 5:return Eo(n.type);case 16:return Eo("Lazy");case 13:return Eo("Suspense");case 19:return Eo("SuspenseList");case 0:case 2:case 15:return n=rf(n.type,!1),n;case 11:return n=rf(n.type.render,!1),n;case 1:return n=rf(n.type,!0),n;default:return""}}function wh(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ma:return"Fragment";case pa:return"Portal";case Mh:return"Profiler";case Pp:return"StrictMode";case Eh:return"Suspense";case Th:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case bv:return(n.displayName||"Context")+".Consumer";case Rv:return(n._context.displayName||"Context")+".Provider";case Lp:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Dp:return e=n.displayName||null,e!==null?e:wh(n.type)||"Memo";case Pr:e=n._payload,n=n._init;try{return wh(n(e))}catch{}}return null}function uM(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wh(e);case 8:return e===Pp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function es(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Lv(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function cM(n){var e=Lv(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Ul(n){n._valueTracker||(n._valueTracker=cM(n))}function Dv(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Lv(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Vu(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ah(n,e){var t=e.checked;return wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function _g(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=es(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Iv(n,e){e=e.checked,e!=null&&bp(n,"checked",e,!1)}function Ch(n,e){Iv(n,e);var t=es(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Rh(n,e.type,t):e.hasOwnProperty("defaultValue")&&Rh(n,e.type,es(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function vg(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Rh(n,e,t){(e!=="number"||Vu(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var To=Array.isArray;function Ra(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+es(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function bh(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return wt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function xg(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ne(92));if(To(t)){if(1<t.length)throw Error(ne(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:es(t)}}function Uv(n,e){var t=es(e.value),i=es(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function yg(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Nv(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ph(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Nv(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Nl,Fv=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Nl=Nl||document.createElement("div"),Nl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Nl.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Xo(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Lo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fM=["Webkit","ms","Moz","O"];Object.keys(Lo).forEach(function(n){fM.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Lo[e]=Lo[n]})});function Ov(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Lo.hasOwnProperty(n)&&Lo[n]?(""+e).trim():e+"px"}function Bv(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Ov(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var hM=wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lh(n,e){if(e){if(hM[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Dh(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ih=null;function Ip(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Uh=null,ba=null,Pa=null;function Sg(n){if(n=Ml(n)){if(typeof Uh!="function")throw Error(ne(280));var e=n.stateNode;e&&(e=Lc(e),Uh(n.stateNode,n.type,e))}}function kv(n){ba?Pa?Pa.push(n):Pa=[n]:ba=n}function zv(){if(ba){var n=ba,e=Pa;if(Pa=ba=null,Sg(n),e)for(n=0;n<e.length;n++)Sg(e[n])}}function Vv(n,e){return n(e)}function Gv(){}var sf=!1;function Hv(n,e,t){if(sf)return n(e,t);sf=!0;try{return Vv(n,e,t)}finally{sf=!1,(ba!==null||Pa!==null)&&(Gv(),zv())}}function jo(n,e){var t=n.stateNode;if(t===null)return null;var i=Lc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ne(231,e,typeof t));return t}var Nh=!1;if(cr)try{var oo={};Object.defineProperty(oo,"passive",{get:function(){Nh=!0}}),window.addEventListener("test",oo,oo),window.removeEventListener("test",oo,oo)}catch{Nh=!1}function dM(n,e,t,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Do=!1,Gu=null,Hu=!1,Fh=null,pM={onError:function(n){Do=!0,Gu=n}};function mM(n,e,t,i,r,s,a,o,l){Do=!1,Gu=null,dM.apply(pM,arguments)}function gM(n,e,t,i,r,s,a,o,l){if(mM.apply(this,arguments),Do){if(Do){var u=Gu;Do=!1,Gu=null}else throw Error(ne(198));Hu||(Hu=!0,Fh=u)}}function Ws(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Wv(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Mg(n){if(Ws(n)!==n)throw Error(ne(188))}function _M(n){var e=n.alternate;if(!e){if(e=Ws(n),e===null)throw Error(ne(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Mg(r),n;if(s===i)return Mg(r),e;s=s.sibling}throw Error(ne(188))}if(t.return!==i.return)t=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===t){a=!0,t=r,i=s;break}if(o===i){a=!0,i=r,t=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===t){a=!0,t=s,i=r;break}if(o===i){a=!0,i=s,t=r;break}o=o.sibling}if(!a)throw Error(ne(189))}}if(t.alternate!==i)throw Error(ne(190))}if(t.tag!==3)throw Error(ne(188));return t.stateNode.current===t?n:e}function Xv(n){return n=_M(n),n!==null?jv(n):null}function jv(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=jv(n);if(e!==null)return e;n=n.sibling}return null}var Yv=Yn.unstable_scheduleCallback,Eg=Yn.unstable_cancelCallback,vM=Yn.unstable_shouldYield,xM=Yn.unstable_requestPaint,Ut=Yn.unstable_now,yM=Yn.unstable_getCurrentPriorityLevel,Up=Yn.unstable_ImmediatePriority,qv=Yn.unstable_UserBlockingPriority,Wu=Yn.unstable_NormalPriority,SM=Yn.unstable_LowPriority,$v=Yn.unstable_IdlePriority,Cc=null,Bi=null;function MM(n){if(Bi&&typeof Bi.onCommitFiberRoot=="function")try{Bi.onCommitFiberRoot(Cc,n,void 0,(n.current.flags&128)===128)}catch{}}var Si=Math.clz32?Math.clz32:wM,EM=Math.log,TM=Math.LN2;function wM(n){return n>>>=0,n===0?32:31-(EM(n)/TM|0)|0}var Fl=64,Ol=4194304;function wo(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Xu(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,a=t&268435455;if(a!==0){var o=a&~r;o!==0?i=wo(o):(s&=a,s!==0&&(i=wo(s)))}else a=t&~r,a!==0?i=wo(a):s!==0&&(i=wo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Si(e),r=1<<t,i|=n[t],e&=~r;return i}function AM(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function CM(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var a=31-Si(s),o=1<<a,l=r[a];l===-1?(!(o&t)||o&i)&&(r[a]=AM(o,e)):l<=e&&(n.expiredLanes|=o),s&=~o}}function Oh(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Kv(){var n=Fl;return Fl<<=1,!(Fl&4194240)&&(Fl=64),n}function af(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function yl(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Si(e),n[e]=t}function RM(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Si(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Np(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Si(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var et=0;function Zv(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Qv,Fp,Jv,ex,tx,Bh=!1,Bl=[],Gr=null,Hr=null,Wr=null,Yo=new Map,qo=new Map,Dr=[],bM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tg(n,e){switch(n){case"focusin":case"focusout":Gr=null;break;case"dragenter":case"dragleave":Hr=null;break;case"mouseover":case"mouseout":Wr=null;break;case"pointerover":case"pointerout":Yo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qo.delete(e.pointerId)}}function lo(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ml(e),e!==null&&Fp(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function PM(n,e,t,i,r){switch(e){case"focusin":return Gr=lo(Gr,n,e,t,i,r),!0;case"dragenter":return Hr=lo(Hr,n,e,t,i,r),!0;case"mouseover":return Wr=lo(Wr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Yo.set(s,lo(Yo.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,qo.set(s,lo(qo.get(s)||null,n,e,t,i,r)),!0}return!1}function nx(n){var e=Es(n.target);if(e!==null){var t=Ws(e);if(t!==null){if(e=t.tag,e===13){if(e=Wv(t),e!==null){n.blockedOn=e,tx(n.priority,function(){Jv(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Su(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=kh(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Ih=i,t.target.dispatchEvent(i),Ih=null}else return e=Ml(t),e!==null&&Fp(e),n.blockedOn=t,!1;e.shift()}return!0}function wg(n,e,t){Su(n)&&t.delete(e)}function LM(){Bh=!1,Gr!==null&&Su(Gr)&&(Gr=null),Hr!==null&&Su(Hr)&&(Hr=null),Wr!==null&&Su(Wr)&&(Wr=null),Yo.forEach(wg),qo.forEach(wg)}function uo(n,e){n.blockedOn===e&&(n.blockedOn=null,Bh||(Bh=!0,Yn.unstable_scheduleCallback(Yn.unstable_NormalPriority,LM)))}function $o(n){function e(r){return uo(r,n)}if(0<Bl.length){uo(Bl[0],n);for(var t=1;t<Bl.length;t++){var i=Bl[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Gr!==null&&uo(Gr,n),Hr!==null&&uo(Hr,n),Wr!==null&&uo(Wr,n),Yo.forEach(e),qo.forEach(e),t=0;t<Dr.length;t++)i=Dr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Dr.length&&(t=Dr[0],t.blockedOn===null);)nx(t),t.blockedOn===null&&Dr.shift()}var La=vr.ReactCurrentBatchConfig,ju=!0;function DM(n,e,t,i){var r=et,s=La.transition;La.transition=null;try{et=1,Op(n,e,t,i)}finally{et=r,La.transition=s}}function IM(n,e,t,i){var r=et,s=La.transition;La.transition=null;try{et=4,Op(n,e,t,i)}finally{et=r,La.transition=s}}function Op(n,e,t,i){if(ju){var r=kh(n,e,t,i);if(r===null)gf(n,e,i,Yu,t),Tg(n,i);else if(PM(r,n,e,t,i))i.stopPropagation();else if(Tg(n,i),e&4&&-1<bM.indexOf(n)){for(;r!==null;){var s=Ml(r);if(s!==null&&Qv(s),s=kh(n,e,t,i),s===null&&gf(n,e,i,Yu,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else gf(n,e,i,null,t)}}var Yu=null;function kh(n,e,t,i){if(Yu=null,n=Ip(i),n=Es(n),n!==null)if(e=Ws(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Wv(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Yu=n,null}function ix(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yM()){case Up:return 1;case qv:return 4;case Wu:case SM:return 16;case $v:return 536870912;default:return 16}default:return 16}}var Nr=null,Bp=null,Mu=null;function rx(){if(Mu)return Mu;var n,e=Bp,t=e.length,i,r="value"in Nr?Nr.value:Nr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var a=t-n;for(i=1;i<=a&&e[t-i]===r[s-i];i++);return Mu=r.slice(n,1<i?1-i:void 0)}function Eu(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function kl(){return!0}function Ag(){return!1}function Zn(n){function e(t,i,r,s,a){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],this[o]=t?t(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?kl:Ag,this.isPropagationStopped=Ag,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=kl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=kl)},persist:function(){},isPersistent:kl}),e}var no={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kp=Zn(no),Sl=wt({},no,{view:0,detail:0}),UM=Zn(Sl),of,lf,co,Rc=wt({},Sl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zp,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==co&&(co&&n.type==="mousemove"?(of=n.screenX-co.screenX,lf=n.screenY-co.screenY):lf=of=0,co=n),of)},movementY:function(n){return"movementY"in n?n.movementY:lf}}),Cg=Zn(Rc),NM=wt({},Rc,{dataTransfer:0}),FM=Zn(NM),OM=wt({},Sl,{relatedTarget:0}),uf=Zn(OM),BM=wt({},no,{animationName:0,elapsedTime:0,pseudoElement:0}),kM=Zn(BM),zM=wt({},no,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),VM=Zn(zM),GM=wt({},no,{data:0}),Rg=Zn(GM),HM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},WM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},XM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jM(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=XM[n])?!!e[n]:!1}function zp(){return jM}var YM=wt({},Sl,{key:function(n){if(n.key){var e=HM[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Eu(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?WM[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zp,charCode:function(n){return n.type==="keypress"?Eu(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Eu(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),qM=Zn(YM),$M=wt({},Rc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bg=Zn($M),KM=wt({},Sl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zp}),ZM=Zn(KM),QM=wt({},no,{propertyName:0,elapsedTime:0,pseudoElement:0}),JM=Zn(QM),eE=wt({},Rc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),tE=Zn(eE),nE=[9,13,27,32],Vp=cr&&"CompositionEvent"in window,Io=null;cr&&"documentMode"in document&&(Io=document.documentMode);var iE=cr&&"TextEvent"in window&&!Io,sx=cr&&(!Vp||Io&&8<Io&&11>=Io),Pg=" ",Lg=!1;function ax(n,e){switch(n){case"keyup":return nE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ox(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ga=!1;function rE(n,e){switch(n){case"compositionend":return ox(e);case"keypress":return e.which!==32?null:(Lg=!0,Pg);case"textInput":return n=e.data,n===Pg&&Lg?null:n;default:return null}}function sE(n,e){if(ga)return n==="compositionend"||!Vp&&ax(n,e)?(n=rx(),Mu=Bp=Nr=null,ga=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return sx&&e.locale!=="ko"?null:e.data;default:return null}}var aE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!aE[n.type]:e==="textarea"}function lx(n,e,t,i){kv(i),e=qu(e,"onChange"),0<e.length&&(t=new kp("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Uo=null,Ko=null;function oE(n){xx(n,0)}function bc(n){var e=xa(n);if(Dv(e))return n}function lE(n,e){if(n==="change")return e}var ux=!1;if(cr){var cf;if(cr){var ff="oninput"in document;if(!ff){var Ig=document.createElement("div");Ig.setAttribute("oninput","return;"),ff=typeof Ig.oninput=="function"}cf=ff}else cf=!1;ux=cf&&(!document.documentMode||9<document.documentMode)}function Ug(){Uo&&(Uo.detachEvent("onpropertychange",cx),Ko=Uo=null)}function cx(n){if(n.propertyName==="value"&&bc(Ko)){var e=[];lx(e,Ko,n,Ip(n)),Hv(oE,e)}}function uE(n,e,t){n==="focusin"?(Ug(),Uo=e,Ko=t,Uo.attachEvent("onpropertychange",cx)):n==="focusout"&&Ug()}function cE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return bc(Ko)}function fE(n,e){if(n==="click")return bc(e)}function hE(n,e){if(n==="input"||n==="change")return bc(e)}function dE(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Ei=typeof Object.is=="function"?Object.is:dE;function Zo(n,e){if(Ei(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Sh.call(e,r)||!Ei(n[r],e[r]))return!1}return!0}function Ng(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Fg(n,e){var t=Ng(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ng(t)}}function fx(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?fx(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function hx(){for(var n=window,e=Vu();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Vu(n.document)}return e}function Gp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function pE(n){var e=hx(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&fx(t.ownerDocument.documentElement,t)){if(i!==null&&Gp(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Fg(t,s);var a=Fg(t,i);r&&a&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==a.node||n.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var mE=cr&&"documentMode"in document&&11>=document.documentMode,_a=null,zh=null,No=null,Vh=!1;function Og(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Vh||_a==null||_a!==Vu(i)||(i=_a,"selectionStart"in i&&Gp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),No&&Zo(No,i)||(No=i,i=qu(zh,"onSelect"),0<i.length&&(e=new kp("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=_a)))}function zl(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var va={animationend:zl("Animation","AnimationEnd"),animationiteration:zl("Animation","AnimationIteration"),animationstart:zl("Animation","AnimationStart"),transitionend:zl("Transition","TransitionEnd")},hf={},dx={};cr&&(dx=document.createElement("div").style,"AnimationEvent"in window||(delete va.animationend.animation,delete va.animationiteration.animation,delete va.animationstart.animation),"TransitionEvent"in window||delete va.transitionend.transition);function Pc(n){if(hf[n])return hf[n];if(!va[n])return n;var e=va[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in dx)return hf[n]=e[t];return n}var px=Pc("animationend"),mx=Pc("animationiteration"),gx=Pc("animationstart"),_x=Pc("transitionend"),vx=new Map,Bg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function as(n,e){vx.set(n,e),Hs(e,[n])}for(var df=0;df<Bg.length;df++){var pf=Bg[df],gE=pf.toLowerCase(),_E=pf[0].toUpperCase()+pf.slice(1);as(gE,"on"+_E)}as(px,"onAnimationEnd");as(mx,"onAnimationIteration");as(gx,"onAnimationStart");as("dblclick","onDoubleClick");as("focusin","onFocus");as("focusout","onBlur");as(_x,"onTransitionEnd");ka("onMouseEnter",["mouseout","mouseover"]);ka("onMouseLeave",["mouseout","mouseover"]);ka("onPointerEnter",["pointerout","pointerover"]);ka("onPointerLeave",["pointerout","pointerover"]);Hs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ao));function kg(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,gM(i,e,void 0,n),n.currentTarget=null}function xx(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;kg(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;kg(r,o,u),s=l}}}if(Hu)throw n=Fh,Hu=!1,Fh=null,n}function pt(n,e){var t=e[jh];t===void 0&&(t=e[jh]=new Set);var i=n+"__bubble";t.has(i)||(yx(e,n,2,!1),t.add(i))}function mf(n,e,t){var i=0;e&&(i|=4),yx(t,n,i,e)}var Vl="_reactListening"+Math.random().toString(36).slice(2);function Qo(n){if(!n[Vl]){n[Vl]=!0,Cv.forEach(function(t){t!=="selectionchange"&&(vE.has(t)||mf(t,!1,n),mf(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Vl]||(e[Vl]=!0,mf("selectionchange",!1,e))}}function yx(n,e,t,i){switch(ix(e)){case 1:var r=DM;break;case 4:r=IM;break;default:r=Op}t=r.bind(null,e,t,n),r=void 0,!Nh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function gf(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Es(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Hv(function(){var u=s,c=Ip(t),h=[];e:{var f=vx.get(n);if(f!==void 0){var p=kp,g=n;switch(n){case"keypress":if(Eu(t)===0)break e;case"keydown":case"keyup":p=qM;break;case"focusin":g="focus",p=uf;break;case"focusout":g="blur",p=uf;break;case"beforeblur":case"afterblur":p=uf;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Cg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=FM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=ZM;break;case px:case mx:case gx:p=kM;break;case _x:p=JM;break;case"scroll":p=UM;break;case"wheel":p=tE;break;case"copy":case"cut":case"paste":p=VM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=bg}var _=(e&4)!==0,m=!_&&n==="scroll",d=_?f!==null?f+"Capture":null:f;_=[];for(var v=u,x;v!==null;){x=v;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,d!==null&&(S=jo(v,d),S!=null&&_.push(Jo(v,S,x)))),m)break;v=v.return}0<_.length&&(f=new p(f,g,null,t,c),h.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==Ih&&(g=t.relatedTarget||t.fromElement)&&(Es(g)||g[fr]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=u,g=g?Es(g):null,g!==null&&(m=Ws(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(_=Cg,S="onMouseLeave",d="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(_=bg,S="onPointerLeave",d="onPointerEnter",v="pointer"),m=p==null?f:xa(p),x=g==null?f:xa(g),f=new _(S,v+"leave",p,t,c),f.target=m,f.relatedTarget=x,S=null,Es(c)===u&&(_=new _(d,v+"enter",g,t,c),_.target=x,_.relatedTarget=m,S=_),m=S,p&&g)t:{for(_=p,d=g,v=0,x=_;x;x=Qs(x))v++;for(x=0,S=d;S;S=Qs(S))x++;for(;0<v-x;)_=Qs(_),v--;for(;0<x-v;)d=Qs(d),x--;for(;v--;){if(_===d||d!==null&&_===d.alternate)break t;_=Qs(_),d=Qs(d)}_=null}else _=null;p!==null&&zg(h,f,p,_,!1),g!==null&&m!==null&&zg(h,m,g,_,!0)}}e:{if(f=u?xa(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var T=lE;else if(Dg(f))if(ux)T=hE;else{T=cE;var M=uE}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=fE);if(T&&(T=T(n,u))){lx(h,T,t,c);break e}M&&M(n,f,u),n==="focusout"&&(M=f._wrapperState)&&M.controlled&&f.type==="number"&&Rh(f,"number",f.value)}switch(M=u?xa(u):window,n){case"focusin":(Dg(M)||M.contentEditable==="true")&&(_a=M,zh=u,No=null);break;case"focusout":No=zh=_a=null;break;case"mousedown":Vh=!0;break;case"contextmenu":case"mouseup":case"dragend":Vh=!1,Og(h,t,c);break;case"selectionchange":if(mE)break;case"keydown":case"keyup":Og(h,t,c)}var w;if(Vp)e:{switch(n){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else ga?ax(n,t)&&(y="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(y="onCompositionStart");y&&(sx&&t.locale!=="ko"&&(ga||y!=="onCompositionStart"?y==="onCompositionEnd"&&ga&&(w=rx()):(Nr=c,Bp="value"in Nr?Nr.value:Nr.textContent,ga=!0)),M=qu(u,y),0<M.length&&(y=new Rg(y,n,null,t,c),h.push({event:y,listeners:M}),w?y.data=w:(w=ox(t),w!==null&&(y.data=w)))),(w=iE?rE(n,t):sE(n,t))&&(u=qu(u,"onBeforeInput"),0<u.length&&(c=new Rg("onBeforeInput","beforeinput",null,t,c),h.push({event:c,listeners:u}),c.data=w))}xx(h,e)})}function Jo(n,e,t){return{instance:n,listener:e,currentTarget:t}}function qu(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=jo(n,t),s!=null&&i.unshift(Jo(n,s,r)),s=jo(n,e),s!=null&&i.push(Jo(n,s,r))),n=n.return}return i}function Qs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function zg(n,e,t,i,r){for(var s=e._reactName,a=[];t!==null&&t!==i;){var o=t,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=jo(t,s),l!=null&&a.unshift(Jo(t,l,o))):r||(l=jo(t,s),l!=null&&a.push(Jo(t,l,o)))),t=t.return}a.length!==0&&n.push({event:e,listeners:a})}var xE=/\r\n?/g,yE=/\u0000|\uFFFD/g;function Vg(n){return(typeof n=="string"?n:""+n).replace(xE,`
`).replace(yE,"")}function Gl(n,e,t){if(e=Vg(e),Vg(n)!==e&&t)throw Error(ne(425))}function $u(){}var Gh=null,Hh=null;function Wh(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Xh=typeof setTimeout=="function"?setTimeout:void 0,SE=typeof clearTimeout=="function"?clearTimeout:void 0,Gg=typeof Promise=="function"?Promise:void 0,ME=typeof queueMicrotask=="function"?queueMicrotask:typeof Gg<"u"?function(n){return Gg.resolve(null).then(n).catch(EE)}:Xh;function EE(n){setTimeout(function(){throw n})}function _f(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),$o(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);$o(e)}function Xr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Hg(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var io=Math.random().toString(36).slice(2),Ii="__reactFiber$"+io,el="__reactProps$"+io,fr="__reactContainer$"+io,jh="__reactEvents$"+io,TE="__reactListeners$"+io,wE="__reactHandles$"+io;function Es(n){var e=n[Ii];if(e)return e;for(var t=n.parentNode;t;){if(e=t[fr]||t[Ii]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Hg(n);n!==null;){if(t=n[Ii])return t;n=Hg(n)}return e}n=t,t=n.parentNode}return null}function Ml(n){return n=n[Ii]||n[fr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function xa(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ne(33))}function Lc(n){return n[el]||null}var Yh=[],ya=-1;function os(n){return{current:n}}function mt(n){0>ya||(n.current=Yh[ya],Yh[ya]=null,ya--)}function ht(n,e){ya++,Yh[ya]=n.current,n.current=e}var ts={},mn=os(ts),wn=os(!1),Ns=ts;function za(n,e){var t=n.type.contextTypes;if(!t)return ts;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function An(n){return n=n.childContextTypes,n!=null}function Ku(){mt(wn),mt(mn)}function Wg(n,e,t){if(mn.current!==ts)throw Error(ne(168));ht(mn,e),ht(wn,t)}function Sx(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,uM(n)||"Unknown",r));return wt({},t,i)}function Zu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ts,Ns=mn.current,ht(mn,n),ht(wn,wn.current),!0}function Xg(n,e,t){var i=n.stateNode;if(!i)throw Error(ne(169));t?(n=Sx(n,e,Ns),i.__reactInternalMemoizedMergedChildContext=n,mt(wn),mt(mn),ht(mn,n)):mt(wn),ht(wn,t)}var er=null,Dc=!1,vf=!1;function Mx(n){er===null?er=[n]:er.push(n)}function AE(n){Dc=!0,Mx(n)}function ls(){if(!vf&&er!==null){vf=!0;var n=0,e=et;try{var t=er;for(et=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}er=null,Dc=!1}catch(r){throw er!==null&&(er=er.slice(n+1)),Yv(Up,ls),r}finally{et=e,vf=!1}}return null}var Sa=[],Ma=0,Qu=null,Ju=0,ni=[],ii=0,Fs=null,ir=1,rr="";function _s(n,e){Sa[Ma++]=Ju,Sa[Ma++]=Qu,Qu=n,Ju=e}function Ex(n,e,t){ni[ii++]=ir,ni[ii++]=rr,ni[ii++]=Fs,Fs=n;var i=ir;n=rr;var r=32-Si(i)-1;i&=~(1<<r),t+=1;var s=32-Si(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,ir=1<<32-Si(e)+r|t<<r|i,rr=s+n}else ir=1<<s|t<<r|i,rr=n}function Hp(n){n.return!==null&&(_s(n,1),Ex(n,1,0))}function Wp(n){for(;n===Qu;)Qu=Sa[--Ma],Sa[Ma]=null,Ju=Sa[--Ma],Sa[Ma]=null;for(;n===Fs;)Fs=ni[--ii],ni[ii]=null,rr=ni[--ii],ni[ii]=null,ir=ni[--ii],ni[ii]=null}var Wn=null,Vn=null,gt=!1,vi=null;function Tx(n,e){var t=ai(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function jg(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Wn=n,Vn=Xr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Wn=n,Vn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Fs!==null?{id:ir,overflow:rr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=ai(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Wn=n,Vn=null,!0):!1;default:return!1}}function qh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function $h(n){if(gt){var e=Vn;if(e){var t=e;if(!jg(n,e)){if(qh(n))throw Error(ne(418));e=Xr(t.nextSibling);var i=Wn;e&&jg(n,e)?Tx(i,t):(n.flags=n.flags&-4097|2,gt=!1,Wn=n)}}else{if(qh(n))throw Error(ne(418));n.flags=n.flags&-4097|2,gt=!1,Wn=n}}}function Yg(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Wn=n}function Hl(n){if(n!==Wn)return!1;if(!gt)return Yg(n),gt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Wh(n.type,n.memoizedProps)),e&&(e=Vn)){if(qh(n))throw wx(),Error(ne(418));for(;e;)Tx(n,e),e=Xr(e.nextSibling)}if(Yg(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ne(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Vn=Xr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Vn=null}}else Vn=Wn?Xr(n.stateNode.nextSibling):null;return!0}function wx(){for(var n=Vn;n;)n=Xr(n.nextSibling)}function Va(){Vn=Wn=null,gt=!1}function Xp(n){vi===null?vi=[n]:vi.push(n)}var CE=vr.ReactCurrentBatchConfig;function fo(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ne(309));var i=t.stateNode}if(!i)throw Error(ne(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof n!="string")throw Error(ne(284));if(!t._owner)throw Error(ne(290,n))}return n}function Wl(n,e){throw n=Object.prototype.toString.call(e),Error(ne(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function qg(n){var e=n._init;return e(n._payload)}function Ax(n){function e(d,v){if(n){var x=d.deletions;x===null?(d.deletions=[v],d.flags|=16):x.push(v)}}function t(d,v){if(!n)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=$r(d,v),d.index=0,d.sibling=null,d}function s(d,v,x){return d.index=x,n?(x=d.alternate,x!==null?(x=x.index,x<v?(d.flags|=2,v):x):(d.flags|=2,v)):(d.flags|=1048576,v)}function a(d){return n&&d.alternate===null&&(d.flags|=2),d}function o(d,v,x,S){return v===null||v.tag!==6?(v=wf(x,d.mode,S),v.return=d,v):(v=r(v,x),v.return=d,v)}function l(d,v,x,S){var T=x.type;return T===ma?c(d,v,x.props.children,S,x.key):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Pr&&qg(T)===v.type)?(S=r(v,x.props),S.ref=fo(d,v,x),S.return=d,S):(S=Pu(x.type,x.key,x.props,null,d.mode,S),S.ref=fo(d,v,x),S.return=d,S)}function u(d,v,x,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Af(x,d.mode,S),v.return=d,v):(v=r(v,x.children||[]),v.return=d,v)}function c(d,v,x,S,T){return v===null||v.tag!==7?(v=Ps(x,d.mode,S,T),v.return=d,v):(v=r(v,x),v.return=d,v)}function h(d,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=wf(""+v,d.mode,x),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Il:return x=Pu(v.type,v.key,v.props,null,d.mode,x),x.ref=fo(d,null,v),x.return=d,x;case pa:return v=Af(v,d.mode,x),v.return=d,v;case Pr:var S=v._init;return h(d,S(v._payload),x)}if(To(v)||ao(v))return v=Ps(v,d.mode,x,null),v.return=d,v;Wl(d,v)}return null}function f(d,v,x,S){var T=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return T!==null?null:o(d,v,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Il:return x.key===T?l(d,v,x,S):null;case pa:return x.key===T?u(d,v,x,S):null;case Pr:return T=x._init,f(d,v,T(x._payload),S)}if(To(x)||ao(x))return T!==null?null:c(d,v,x,S,null);Wl(d,x)}return null}function p(d,v,x,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(x)||null,o(v,d,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Il:return d=d.get(S.key===null?x:S.key)||null,l(v,d,S,T);case pa:return d=d.get(S.key===null?x:S.key)||null,u(v,d,S,T);case Pr:var M=S._init;return p(d,v,x,M(S._payload),T)}if(To(S)||ao(S))return d=d.get(x)||null,c(v,d,S,T,null);Wl(v,S)}return null}function g(d,v,x,S){for(var T=null,M=null,w=v,y=v=0,A=null;w!==null&&y<x.length;y++){w.index>y?(A=w,w=null):A=w.sibling;var b=f(d,w,x[y],S);if(b===null){w===null&&(w=A);break}n&&w&&b.alternate===null&&e(d,w),v=s(b,v,y),M===null?T=b:M.sibling=b,M=b,w=A}if(y===x.length)return t(d,w),gt&&_s(d,y),T;if(w===null){for(;y<x.length;y++)w=h(d,x[y],S),w!==null&&(v=s(w,v,y),M===null?T=w:M.sibling=w,M=w);return gt&&_s(d,y),T}for(w=i(d,w);y<x.length;y++)A=p(w,d,y,x[y],S),A!==null&&(n&&A.alternate!==null&&w.delete(A.key===null?y:A.key),v=s(A,v,y),M===null?T=A:M.sibling=A,M=A);return n&&w.forEach(function(P){return e(d,P)}),gt&&_s(d,y),T}function _(d,v,x,S){var T=ao(x);if(typeof T!="function")throw Error(ne(150));if(x=T.call(x),x==null)throw Error(ne(151));for(var M=T=null,w=v,y=v=0,A=null,b=x.next();w!==null&&!b.done;y++,b=x.next()){w.index>y?(A=w,w=null):A=w.sibling;var P=f(d,w,b.value,S);if(P===null){w===null&&(w=A);break}n&&w&&P.alternate===null&&e(d,w),v=s(P,v,y),M===null?T=P:M.sibling=P,M=P,w=A}if(b.done)return t(d,w),gt&&_s(d,y),T;if(w===null){for(;!b.done;y++,b=x.next())b=h(d,b.value,S),b!==null&&(v=s(b,v,y),M===null?T=b:M.sibling=b,M=b);return gt&&_s(d,y),T}for(w=i(d,w);!b.done;y++,b=x.next())b=p(w,d,y,b.value,S),b!==null&&(n&&b.alternate!==null&&w.delete(b.key===null?y:b.key),v=s(b,v,y),M===null?T=b:M.sibling=b,M=b);return n&&w.forEach(function(D){return e(d,D)}),gt&&_s(d,y),T}function m(d,v,x,S){if(typeof x=="object"&&x!==null&&x.type===ma&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Il:e:{for(var T=x.key,M=v;M!==null;){if(M.key===T){if(T=x.type,T===ma){if(M.tag===7){t(d,M.sibling),v=r(M,x.props.children),v.return=d,d=v;break e}}else if(M.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Pr&&qg(T)===M.type){t(d,M.sibling),v=r(M,x.props),v.ref=fo(d,M,x),v.return=d,d=v;break e}t(d,M);break}else e(d,M);M=M.sibling}x.type===ma?(v=Ps(x.props.children,d.mode,S,x.key),v.return=d,d=v):(S=Pu(x.type,x.key,x.props,null,d.mode,S),S.ref=fo(d,v,x),S.return=d,d=S)}return a(d);case pa:e:{for(M=x.key;v!==null;){if(v.key===M)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(d,v.sibling),v=r(v,x.children||[]),v.return=d,d=v;break e}else{t(d,v);break}else e(d,v);v=v.sibling}v=Af(x,d.mode,S),v.return=d,d=v}return a(d);case Pr:return M=x._init,m(d,v,M(x._payload),S)}if(To(x))return g(d,v,x,S);if(ao(x))return _(d,v,x,S);Wl(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(d,v.sibling),v=r(v,x),v.return=d,d=v):(t(d,v),v=wf(x,d.mode,S),v.return=d,d=v),a(d)):t(d,v)}return m}var Ga=Ax(!0),Cx=Ax(!1),ec=os(null),tc=null,Ea=null,jp=null;function Yp(){jp=Ea=tc=null}function qp(n){var e=ec.current;mt(ec),n._currentValue=e}function Kh(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Da(n,e){tc=n,jp=Ea=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Tn=!0),n.firstContext=null)}function ci(n){var e=n._currentValue;if(jp!==n)if(n={context:n,memoizedValue:e,next:null},Ea===null){if(tc===null)throw Error(ne(308));Ea=n,tc.dependencies={lanes:0,firstContext:n}}else Ea=Ea.next=n;return e}var Ts=null;function $p(n){Ts===null?Ts=[n]:Ts.push(n)}function Rx(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,$p(e)):(t.next=r.next,r.next=t),e.interleaved=t,hr(n,i)}function hr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Lr=!1;function Kp(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bx(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ar(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function jr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,hr(n,t)}return r=i.interleaved,r===null?(e.next=e,$p(i)):(e.next=r.next,r.next=e),i.interleaved=e,hr(n,t)}function Tu(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Np(n,t)}}function $g(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=a:s=s.next=a,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function nc(n,e,t,i){var r=n.updateQueue;Lr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var c=n.alternate;c!==null&&(c=c.updateQueue,o=c.lastBaseUpdate,o!==a&&(o===null?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,c=u=l=null,o=s;do{var f=o.lane,p=o.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var g=n,_=o;switch(f=e,p=t,_.tag){case 1:if(g=_.payload,typeof g=="function"){h=g.call(p,h,f);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,f=typeof g=="function"?g.call(p,h,f):g,f==null)break e;h=wt({},h,f);break e;case 2:Lr=!0}}o.callback!==null&&o.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else p={eventTime:p,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Bs|=a,n.lanes=a,n.memoizedState=h}}function Kg(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var El={},ki=os(El),tl=os(El),nl=os(El);function ws(n){if(n===El)throw Error(ne(174));return n}function Zp(n,e){switch(ht(nl,e),ht(tl,n),ht(ki,El),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ph(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Ph(e,n)}mt(ki),ht(ki,e)}function Ha(){mt(ki),mt(tl),mt(nl)}function Px(n){ws(nl.current);var e=ws(ki.current),t=Ph(e,n.type);e!==t&&(ht(tl,n),ht(ki,t))}function Qp(n){tl.current===n&&(mt(ki),mt(tl))}var St=os(0);function ic(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var xf=[];function Jp(){for(var n=0;n<xf.length;n++)xf[n]._workInProgressVersionPrimary=null;xf.length=0}var wu=vr.ReactCurrentDispatcher,yf=vr.ReactCurrentBatchConfig,Os=0,Tt=null,Ht=null,Kt=null,rc=!1,Fo=!1,il=0,RE=0;function an(){throw Error(ne(321))}function em(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Ei(n[t],e[t]))return!1;return!0}function tm(n,e,t,i,r,s){if(Os=s,Tt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,wu.current=n===null||n.memoizedState===null?DE:IE,n=t(i,r),Fo){s=0;do{if(Fo=!1,il=0,25<=s)throw Error(ne(301));s+=1,Kt=Ht=null,e.updateQueue=null,wu.current=UE,n=t(i,r)}while(Fo)}if(wu.current=sc,e=Ht!==null&&Ht.next!==null,Os=0,Kt=Ht=Tt=null,rc=!1,e)throw Error(ne(300));return n}function nm(){var n=il!==0;return il=0,n}function Pi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Kt===null?Tt.memoizedState=Kt=n:Kt=Kt.next=n,Kt}function fi(){if(Ht===null){var n=Tt.alternate;n=n!==null?n.memoizedState:null}else n=Ht.next;var e=Kt===null?Tt.memoizedState:Kt.next;if(e!==null)Kt=e,Ht=n;else{if(n===null)throw Error(ne(310));Ht=n,n={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},Kt===null?Tt.memoizedState=Kt=n:Kt=Kt.next=n}return Kt}function rl(n,e){return typeof e=="function"?e(n):e}function Sf(n){var e=fi(),t=e.queue;if(t===null)throw Error(ne(311));t.lastRenderedReducer=n;var i=Ht,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var c=u.lane;if((Os&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,Tt.lanes|=c,Bs|=c}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,Ei(i,e.memoizedState)||(Tn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Tt.lanes|=s,Bs|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Mf(n){var e=fi(),t=e.queue;if(t===null)throw Error(ne(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var a=r=r.next;do s=n(s,a.action),a=a.next;while(a!==r);Ei(s,e.memoizedState)||(Tn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Lx(){}function Dx(n,e){var t=Tt,i=fi(),r=e(),s=!Ei(i.memoizedState,r);if(s&&(i.memoizedState=r,Tn=!0),i=i.queue,im(Nx.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Kt!==null&&Kt.memoizedState.tag&1){if(t.flags|=2048,sl(9,Ux.bind(null,t,i,r,e),void 0,null),Qt===null)throw Error(ne(349));Os&30||Ix(t,e,r)}return r}function Ix(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Ux(n,e,t,i){e.value=t,e.getSnapshot=i,Fx(e)&&Ox(n)}function Nx(n,e,t){return t(function(){Fx(e)&&Ox(n)})}function Fx(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Ei(n,t)}catch{return!0}}function Ox(n){var e=hr(n,1);e!==null&&Mi(e,n,1,-1)}function Zg(n){var e=Pi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rl,lastRenderedState:n},e.queue=n,n=n.dispatch=LE.bind(null,Tt,n),[e.memoizedState,n]}function sl(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Bx(){return fi().memoizedState}function Au(n,e,t,i){var r=Pi();Tt.flags|=n,r.memoizedState=sl(1|e,t,void 0,i===void 0?null:i)}function Ic(n,e,t,i){var r=fi();i=i===void 0?null:i;var s=void 0;if(Ht!==null){var a=Ht.memoizedState;if(s=a.destroy,i!==null&&em(i,a.deps)){r.memoizedState=sl(e,t,s,i);return}}Tt.flags|=n,r.memoizedState=sl(1|e,t,s,i)}function Qg(n,e){return Au(8390656,8,n,e)}function im(n,e){return Ic(2048,8,n,e)}function kx(n,e){return Ic(4,2,n,e)}function zx(n,e){return Ic(4,4,n,e)}function Vx(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Gx(n,e,t){return t=t!=null?t.concat([n]):null,Ic(4,4,Vx.bind(null,e,n),t)}function rm(){}function Hx(n,e){var t=fi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&em(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Wx(n,e){var t=fi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&em(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Xx(n,e,t){return Os&21?(Ei(t,e)||(t=Kv(),Tt.lanes|=t,Bs|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Tn=!0),n.memoizedState=t)}function bE(n,e){var t=et;et=t!==0&&4>t?t:4,n(!0);var i=yf.transition;yf.transition={};try{n(!1),e()}finally{et=t,yf.transition=i}}function jx(){return fi().memoizedState}function PE(n,e,t){var i=qr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Yx(n))qx(e,t);else if(t=Rx(n,e,t,i),t!==null){var r=vn();Mi(t,n,i,r),$x(t,e,i)}}function LE(n,e,t){var i=qr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Yx(n))qx(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,t);if(r.hasEagerState=!0,r.eagerState=o,Ei(o,a)){var l=e.interleaved;l===null?(r.next=r,$p(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Rx(n,e,r,i),t!==null&&(r=vn(),Mi(t,n,i,r),$x(t,e,i))}}function Yx(n){var e=n.alternate;return n===Tt||e!==null&&e===Tt}function qx(n,e){Fo=rc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function $x(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Np(n,t)}}var sc={readContext:ci,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useInsertionEffect:an,useLayoutEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useMutableSource:an,useSyncExternalStore:an,useId:an,unstable_isNewReconciler:!1},DE={readContext:ci,useCallback:function(n,e){return Pi().memoizedState=[n,e===void 0?null:e],n},useContext:ci,useEffect:Qg,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Au(4194308,4,Vx.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Au(4194308,4,n,e)},useInsertionEffect:function(n,e){return Au(4,2,n,e)},useMemo:function(n,e){var t=Pi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Pi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=PE.bind(null,Tt,n),[i.memoizedState,n]},useRef:function(n){var e=Pi();return n={current:n},e.memoizedState=n},useState:Zg,useDebugValue:rm,useDeferredValue:function(n){return Pi().memoizedState=n},useTransition:function(){var n=Zg(!1),e=n[0];return n=bE.bind(null,n[1]),Pi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Tt,r=Pi();if(gt){if(t===void 0)throw Error(ne(407));t=t()}else{if(t=e(),Qt===null)throw Error(ne(349));Os&30||Ix(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Qg(Nx.bind(null,i,s,n),[n]),i.flags|=2048,sl(9,Ux.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Pi(),e=Qt.identifierPrefix;if(gt){var t=rr,i=ir;t=(i&~(1<<32-Si(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=il++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=RE++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},IE={readContext:ci,useCallback:Hx,useContext:ci,useEffect:im,useImperativeHandle:Gx,useInsertionEffect:kx,useLayoutEffect:zx,useMemo:Wx,useReducer:Sf,useRef:Bx,useState:function(){return Sf(rl)},useDebugValue:rm,useDeferredValue:function(n){var e=fi();return Xx(e,Ht.memoizedState,n)},useTransition:function(){var n=Sf(rl)[0],e=fi().memoizedState;return[n,e]},useMutableSource:Lx,useSyncExternalStore:Dx,useId:jx,unstable_isNewReconciler:!1},UE={readContext:ci,useCallback:Hx,useContext:ci,useEffect:im,useImperativeHandle:Gx,useInsertionEffect:kx,useLayoutEffect:zx,useMemo:Wx,useReducer:Mf,useRef:Bx,useState:function(){return Mf(rl)},useDebugValue:rm,useDeferredValue:function(n){var e=fi();return Ht===null?e.memoizedState=n:Xx(e,Ht.memoizedState,n)},useTransition:function(){var n=Mf(rl)[0],e=fi().memoizedState;return[n,e]},useMutableSource:Lx,useSyncExternalStore:Dx,useId:jx,unstable_isNewReconciler:!1};function gi(n,e){if(n&&n.defaultProps){e=wt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Zh(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:wt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Uc={isMounted:function(n){return(n=n._reactInternals)?Ws(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=vn(),r=qr(n),s=ar(i,r);s.payload=e,t!=null&&(s.callback=t),e=jr(n,s,r),e!==null&&(Mi(e,n,r,i),Tu(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=vn(),r=qr(n),s=ar(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=jr(n,s,r),e!==null&&(Mi(e,n,r,i),Tu(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=vn(),i=qr(n),r=ar(t,i);r.tag=2,e!=null&&(r.callback=e),e=jr(n,r,i),e!==null&&(Mi(e,n,i,t),Tu(e,n,i))}};function Jg(n,e,t,i,r,s,a){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Zo(t,i)||!Zo(r,s):!0}function Kx(n,e,t){var i=!1,r=ts,s=e.contextType;return typeof s=="object"&&s!==null?s=ci(s):(r=An(e)?Ns:mn.current,i=e.contextTypes,s=(i=i!=null)?za(n,r):ts),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Uc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function e0(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Uc.enqueueReplaceState(e,e.state,null)}function Qh(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Kp(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ci(s):(s=An(e)?Ns:mn.current,r.context=za(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Zh(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Uc.enqueueReplaceState(r,r.state,null),nc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Wa(n,e){try{var t="",i=e;do t+=lM(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Ef(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Jh(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var NE=typeof WeakMap=="function"?WeakMap:Map;function Zx(n,e,t){t=ar(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){oc||(oc=!0,ud=i),Jh(n,e)},t}function Qx(n,e,t){t=ar(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Jh(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Jh(n,e),typeof i!="function"&&(Yr===null?Yr=new Set([this]):Yr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),t}function t0(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new NE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=$E.bind(null,n,e,t),e.then(n,n))}function n0(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function i0(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=ar(-1,1),e.tag=2,jr(t,e,1))),t.lanes|=1),n)}var FE=vr.ReactCurrentOwner,Tn=!1;function _n(n,e,t,i){e.child=n===null?Cx(e,null,t,i):Ga(e,n.child,t,i)}function r0(n,e,t,i,r){t=t.render;var s=e.ref;return Da(e,r),i=tm(n,e,t,i,s,r),t=nm(),n!==null&&!Tn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,dr(n,e,r)):(gt&&t&&Hp(e),e.flags|=1,_n(n,e,i,r),e.child)}function s0(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!hm(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Jx(n,e,s,i,r)):(n=Pu(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var a=s.memoizedProps;if(t=t.compare,t=t!==null?t:Zo,t(a,i)&&n.ref===e.ref)return dr(n,e,r)}return e.flags|=1,n=$r(s,i),n.ref=e.ref,n.return=e,e.child=n}function Jx(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Zo(s,i)&&n.ref===e.ref)if(Tn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Tn=!0);else return e.lanes=n.lanes,dr(n,e,r)}return ed(n,e,t,i,r)}function ey(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(wa,Bn),Bn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,ht(wa,Bn),Bn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,ht(wa,Bn),Bn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,ht(wa,Bn),Bn|=i;return _n(n,e,r,t),e.child}function ty(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function ed(n,e,t,i,r){var s=An(t)?Ns:mn.current;return s=za(e,s),Da(e,r),t=tm(n,e,t,i,s,r),i=nm(),n!==null&&!Tn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,dr(n,e,r)):(gt&&i&&Hp(e),e.flags|=1,_n(n,e,t,r),e.child)}function a0(n,e,t,i,r){if(An(t)){var s=!0;Zu(e)}else s=!1;if(Da(e,r),e.stateNode===null)Cu(n,e),Kx(e,t,i),Qh(e,t,i,r),i=!0;else if(n===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=t.contextType;typeof u=="object"&&u!==null?u=ci(u):(u=An(t)?Ns:mn.current,u=za(e,u));var c=t.getDerivedStateFromProps,h=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&e0(e,a,i,u),Lr=!1;var f=e.memoizedState;a.state=f,nc(e,i,a,r),l=e.memoizedState,o!==i||f!==l||wn.current||Lr?(typeof c=="function"&&(Zh(e,t,c,i),l=e.memoizedState),(o=Lr||Jg(e,t,o,i,f,l,u))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,bx(n,e),o=e.memoizedProps,u=e.type===e.elementType?o:gi(e.type,o),a.props=u,h=e.pendingProps,f=a.context,l=t.contextType,typeof l=="object"&&l!==null?l=ci(l):(l=An(t)?Ns:mn.current,l=za(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||f!==l)&&e0(e,a,i,l),Lr=!1,f=e.memoizedState,a.state=f,nc(e,i,a,r);var g=e.memoizedState;o!==h||f!==g||wn.current||Lr?(typeof p=="function"&&(Zh(e,t,p,i),g=e.memoizedState),(u=Lr||Jg(e,t,u,i,f,g,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,g,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),a.props=i,a.state=g,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return td(n,e,t,i,s,r)}function td(n,e,t,i,r,s){ty(n,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Xg(e,t,!1),dr(n,e,s);i=e.stateNode,FE.current=e;var o=a&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&a?(e.child=Ga(e,n.child,null,s),e.child=Ga(e,null,o,s)):_n(n,e,o,s),e.memoizedState=i.state,r&&Xg(e,t,!0),e.child}function ny(n){var e=n.stateNode;e.pendingContext?Wg(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Wg(n,e.context,!1),Zp(n,e.containerInfo)}function o0(n,e,t,i,r){return Va(),Xp(r),e.flags|=256,_n(n,e,t,i),e.child}var nd={dehydrated:null,treeContext:null,retryLane:0};function id(n){return{baseLanes:n,cachePool:null,transitions:null}}function iy(n,e,t){var i=e.pendingProps,r=St.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=n!==null&&n.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),ht(St,r&1),n===null)return $h(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,n=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Oc(a,i,0,null),n=Ps(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=id(t),e.memoizedState=nd,n):sm(e,a));if(r=n.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return OE(n,e,a,i,o,r,t);if(s){s=i.fallback,a=e.mode,r=n.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=$r(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=$r(o,s):(s=Ps(s,a,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=n.child.memoizedState,a=a===null?id(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=n.childLanes&~t,e.memoizedState=nd,i}return s=n.child,n=s.sibling,i=$r(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function sm(n,e){return e=Oc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Xl(n,e,t,i){return i!==null&&Xp(i),Ga(e,n.child,null,t),n=sm(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function OE(n,e,t,i,r,s,a){if(t)return e.flags&256?(e.flags&=-257,i=Ef(Error(ne(422))),Xl(n,e,a,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Oc({mode:"visible",children:i.children},r,0,null),s=Ps(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ga(e,n.child,null,a),e.child.memoizedState=id(a),e.memoizedState=nd,s);if(!(e.mode&1))return Xl(n,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ne(419)),i=Ef(s,i,void 0),Xl(n,e,a,i)}if(o=(a&n.childLanes)!==0,Tn||o){if(i=Qt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,hr(n,r),Mi(i,n,r,-1))}return fm(),i=Ef(Error(ne(421))),Xl(n,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=KE.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Vn=Xr(r.nextSibling),Wn=e,gt=!0,vi=null,n!==null&&(ni[ii++]=ir,ni[ii++]=rr,ni[ii++]=Fs,ir=n.id,rr=n.overflow,Fs=e),e=sm(e,i.children),e.flags|=4096,e)}function l0(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Kh(n.return,e,t)}function Tf(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function ry(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(_n(n,e,i.children,t),i=St.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&l0(n,t,e);else if(n.tag===19)l0(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(ht(St,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&ic(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Tf(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&ic(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Tf(e,!0,t,null,s);break;case"together":Tf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Cu(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function dr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Bs|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ne(153));if(e.child!==null){for(n=e.child,t=$r(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=$r(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function BE(n,e,t){switch(e.tag){case 3:ny(e),Va();break;case 5:Px(e);break;case 1:An(e.type)&&Zu(e);break;case 4:Zp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ht(ec,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ht(St,St.current&1),e.flags|=128,null):t&e.child.childLanes?iy(n,e,t):(ht(St,St.current&1),n=dr(n,e,t),n!==null?n.sibling:null);ht(St,St.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return ry(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,ey(n,e,t)}return dr(n,e,t)}var sy,rd,ay,oy;sy=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};rd=function(){};ay=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,ws(ki.current);var s=null;switch(t){case"input":r=Ah(n,r),i=Ah(n,i),s=[];break;case"select":r=wt({},r,{value:void 0}),i=wt({},i,{value:void 0}),s=[];break;case"textarea":r=bh(n,r),i=bh(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=$u)}Lh(t,i);var a;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Wo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(t||(t={}),t[a]=l[a])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Wo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&pt("scroll",n),s||o===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};oy=function(n,e,t,i){t!==i&&(e.flags|=4)};function ho(n,e){if(!gt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function on(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function kE(n,e,t){var i=e.pendingProps;switch(Wp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return on(e),null;case 1:return An(e.type)&&Ku(),on(e),null;case 3:return i=e.stateNode,Ha(),mt(wn),mt(mn),Jp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Hl(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,vi!==null&&(hd(vi),vi=null))),rd(n,e),on(e),null;case 5:Qp(e);var r=ws(nl.current);if(t=e.type,n!==null&&e.stateNode!=null)ay(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return on(e),null}if(n=ws(ki.current),Hl(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Ii]=e,i[el]=s,n=(e.mode&1)!==0,t){case"dialog":pt("cancel",i),pt("close",i);break;case"iframe":case"object":case"embed":pt("load",i);break;case"video":case"audio":for(r=0;r<Ao.length;r++)pt(Ao[r],i);break;case"source":pt("error",i);break;case"img":case"image":case"link":pt("error",i),pt("load",i);break;case"details":pt("toggle",i);break;case"input":_g(i,s),pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},pt("invalid",i);break;case"textarea":xg(i,s),pt("invalid",i)}Lh(t,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Gl(i.textContent,o,n),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Gl(i.textContent,o,n),r=["children",""+o]):Wo.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&pt("scroll",i)}switch(t){case"input":Ul(i),vg(i,s,!0);break;case"textarea":Ul(i),yg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=$u)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Nv(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=a.createElement(t,{is:i.is}):(n=a.createElement(t),t==="select"&&(a=n,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):n=a.createElementNS(n,t),n[Ii]=e,n[el]=i,sy(n,e,!1,!1),e.stateNode=n;e:{switch(a=Dh(t,i),t){case"dialog":pt("cancel",n),pt("close",n),r=i;break;case"iframe":case"object":case"embed":pt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Ao.length;r++)pt(Ao[r],n);r=i;break;case"source":pt("error",n),r=i;break;case"img":case"image":case"link":pt("error",n),pt("load",n),r=i;break;case"details":pt("toggle",n),r=i;break;case"input":_g(n,i),r=Ah(n,i),pt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=wt({},i,{value:void 0}),pt("invalid",n);break;case"textarea":xg(n,i),r=bh(n,i),pt("invalid",n);break;default:r=i}Lh(t,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Bv(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Fv(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Xo(n,l):typeof l=="number"&&Xo(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Wo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pt("scroll",n):l!=null&&bp(n,s,l,a))}switch(t){case"input":Ul(n),vg(n,i,!1);break;case"textarea":Ul(n),yg(n);break;case"option":i.value!=null&&n.setAttribute("value",""+es(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ra(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ra(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=$u)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return on(e),null;case 6:if(n&&e.stateNode!=null)oy(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(t=ws(nl.current),ws(ki.current),Hl(e)){if(i=e.stateNode,t=e.memoizedProps,i[Ii]=e,(s=i.nodeValue!==t)&&(n=Wn,n!==null))switch(n.tag){case 3:Gl(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Gl(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Ii]=e,e.stateNode=i}return on(e),null;case 13:if(mt(St),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(gt&&Vn!==null&&e.mode&1&&!(e.flags&128))wx(),Va(),e.flags|=98560,s=!1;else if(s=Hl(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[Ii]=e}else Va(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;on(e),s=!1}else vi!==null&&(hd(vi),vi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||St.current&1?Wt===0&&(Wt=3):fm())),e.updateQueue!==null&&(e.flags|=4),on(e),null);case 4:return Ha(),rd(n,e),n===null&&Qo(e.stateNode.containerInfo),on(e),null;case 10:return qp(e.type._context),on(e),null;case 17:return An(e.type)&&Ku(),on(e),null;case 19:if(mt(St),s=e.memoizedState,s===null)return on(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)ho(s,!1);else{if(Wt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(a=ic(n),a!==null){for(e.flags|=128,ho(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,n=a.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return ht(St,St.current&1|2),e.child}n=n.sibling}s.tail!==null&&Ut()>Xa&&(e.flags|=128,i=!0,ho(s,!1),e.lanes=4194304)}else{if(!i)if(n=ic(a),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),ho(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!gt)return on(e),null}else 2*Ut()-s.renderingStartTime>Xa&&t!==1073741824&&(e.flags|=128,i=!0,ho(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(t=s.last,t!==null?t.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ut(),e.sibling=null,t=St.current,ht(St,i?t&1|2:t&1),e):(on(e),null);case 22:case 23:return cm(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Bn&1073741824&&(on(e),e.subtreeFlags&6&&(e.flags|=8192)):on(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function zE(n,e){switch(Wp(e),e.tag){case 1:return An(e.type)&&Ku(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Ha(),mt(wn),mt(mn),Jp(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Qp(e),null;case 13:if(mt(St),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Va()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return mt(St),null;case 4:return Ha(),null;case 10:return qp(e.type._context),null;case 22:case 23:return cm(),null;case 24:return null;default:return null}}var jl=!1,cn=!1,VE=typeof WeakSet=="function"?WeakSet:Set,Me=null;function Ta(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Rt(n,e,i)}else t.current=null}function sd(n,e,t){try{t()}catch(i){Rt(n,e,i)}}var u0=!1;function GE(n,e){if(Gh=ju,n=hx(),Gp(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var a=0,o=-1,l=-1,u=0,c=0,h=n,f=null;t:for(;;){for(var p;h!==t||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===n)break t;if(f===t&&++u===r&&(o=a),f===s&&++c===i&&(l=a),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}t=o===-1||l===-1?null:{start:o,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Hh={focusedElem:n,selectionRange:t},ju=!1,Me=e;Me!==null;)if(e=Me,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Me=n;else for(;Me!==null;){e=Me;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?_:gi(e.type,_),m);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(S){Rt(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,Me=n;break}Me=e.return}return g=u0,u0=!1,g}function Oo(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&sd(e,t,s)}r=r.next}while(r!==i)}}function Nc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function ad(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function ly(n){var e=n.alternate;e!==null&&(n.alternate=null,ly(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Ii],delete e[el],delete e[jh],delete e[TE],delete e[wE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function uy(n){return n.tag===5||n.tag===3||n.tag===4}function c0(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||uy(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function od(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=$u));else if(i!==4&&(n=n.child,n!==null))for(od(n,e,t),n=n.sibling;n!==null;)od(n,e,t),n=n.sibling}function ld(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(ld(n,e,t),n=n.sibling;n!==null;)ld(n,e,t),n=n.sibling}var en=null,_i=!1;function Er(n,e,t){for(t=t.child;t!==null;)cy(n,e,t),t=t.sibling}function cy(n,e,t){if(Bi&&typeof Bi.onCommitFiberUnmount=="function")try{Bi.onCommitFiberUnmount(Cc,t)}catch{}switch(t.tag){case 5:cn||Ta(t,e);case 6:var i=en,r=_i;en=null,Er(n,e,t),en=i,_i=r,en!==null&&(_i?(n=en,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):en.removeChild(t.stateNode));break;case 18:en!==null&&(_i?(n=en,t=t.stateNode,n.nodeType===8?_f(n.parentNode,t):n.nodeType===1&&_f(n,t),$o(n)):_f(en,t.stateNode));break;case 4:i=en,r=_i,en=t.stateNode.containerInfo,_i=!0,Er(n,e,t),en=i,_i=r;break;case 0:case 11:case 14:case 15:if(!cn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&sd(t,e,a),r=r.next}while(r!==i)}Er(n,e,t);break;case 1:if(!cn&&(Ta(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(o){Rt(t,e,o)}Er(n,e,t);break;case 21:Er(n,e,t);break;case 22:t.mode&1?(cn=(i=cn)||t.memoizedState!==null,Er(n,e,t),cn=i):Er(n,e,t);break;default:Er(n,e,t)}}function f0(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new VE),e.forEach(function(i){var r=ZE.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function hi(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:en=o.stateNode,_i=!1;break e;case 3:en=o.stateNode.containerInfo,_i=!0;break e;case 4:en=o.stateNode.containerInfo,_i=!0;break e}o=o.return}if(en===null)throw Error(ne(160));cy(s,a,r),en=null,_i=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Rt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)fy(e,n),e=e.sibling}function fy(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(hi(e,n),Ci(n),i&4){try{Oo(3,n,n.return),Nc(3,n)}catch(_){Rt(n,n.return,_)}try{Oo(5,n,n.return)}catch(_){Rt(n,n.return,_)}}break;case 1:hi(e,n),Ci(n),i&512&&t!==null&&Ta(t,t.return);break;case 5:if(hi(e,n),Ci(n),i&512&&t!==null&&Ta(t,t.return),n.flags&32){var r=n.stateNode;try{Xo(r,"")}catch(_){Rt(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,a=t!==null?t.memoizedProps:s,o=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Iv(r,s),Dh(o,a);var u=Dh(o,s);for(a=0;a<l.length;a+=2){var c=l[a],h=l[a+1];c==="style"?Bv(r,h):c==="dangerouslySetInnerHTML"?Fv(r,h):c==="children"?Xo(r,h):bp(r,c,h,u)}switch(o){case"input":Ch(r,s);break;case"textarea":Uv(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ra(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ra(r,!!s.multiple,s.defaultValue,!0):Ra(r,!!s.multiple,s.multiple?[]:"",!1))}r[el]=s}catch(_){Rt(n,n.return,_)}}break;case 6:if(hi(e,n),Ci(n),i&4){if(n.stateNode===null)throw Error(ne(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){Rt(n,n.return,_)}}break;case 3:if(hi(e,n),Ci(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{$o(e.containerInfo)}catch(_){Rt(n,n.return,_)}break;case 4:hi(e,n),Ci(n);break;case 13:hi(e,n),Ci(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(lm=Ut())),i&4&&f0(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(cn=(u=cn)||c,hi(e,n),cn=u):hi(e,n),Ci(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Me=n,c=n.child;c!==null;){for(h=Me=c;Me!==null;){switch(f=Me,p=f.child,f.tag){case 0:case 11:case 14:case 15:Oo(4,f,f.return);break;case 1:Ta(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){Rt(i,t,_)}}break;case 5:Ta(f,f.return);break;case 22:if(f.memoizedState!==null){d0(h);continue}}p!==null?(p.return=f,Me=p):d0(h)}c=c.sibling}e:for(c=null,h=n;;){if(h.tag===5){if(c===null){c=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Ov("display",a))}catch(_){Rt(n,n.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){Rt(n,n.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:hi(e,n),Ci(n),i&4&&f0(n);break;case 21:break;default:hi(e,n),Ci(n)}}function Ci(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(uy(t)){var i=t;break e}t=t.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Xo(r,""),i.flags&=-33);var s=c0(n);ld(n,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=c0(n);od(n,o,a);break;default:throw Error(ne(161))}}catch(l){Rt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function HE(n,e,t){Me=n,hy(n)}function hy(n,e,t){for(var i=(n.mode&1)!==0;Me!==null;){var r=Me,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||jl;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||cn;o=jl;var u=cn;if(jl=a,(cn=l)&&!u)for(Me=r;Me!==null;)a=Me,l=a.child,a.tag===22&&a.memoizedState!==null?p0(r):l!==null?(l.return=a,Me=l):p0(r);for(;s!==null;)Me=s,hy(s),s=s.sibling;Me=r,jl=o,cn=u}h0(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Me=s):h0(n)}}function h0(n){for(;Me!==null;){var e=Me;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:cn||Nc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!cn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:gi(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Kg(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Kg(e,a,t)}break;case 5:var o=e.stateNode;if(t===null&&e.flags&4){t=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&$o(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}cn||e.flags&512&&ad(e)}catch(f){Rt(e,e.return,f)}}if(e===n){Me=null;break}if(t=e.sibling,t!==null){t.return=e.return,Me=t;break}Me=e.return}}function d0(n){for(;Me!==null;){var e=Me;if(e===n){Me=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Me=t;break}Me=e.return}}function p0(n){for(;Me!==null;){var e=Me;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Nc(4,e)}catch(l){Rt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Rt(e,r,l)}}var s=e.return;try{ad(e)}catch(l){Rt(e,s,l)}break;case 5:var a=e.return;try{ad(e)}catch(l){Rt(e,a,l)}}}catch(l){Rt(e,e.return,l)}if(e===n){Me=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Me=o;break}Me=e.return}}var WE=Math.ceil,ac=vr.ReactCurrentDispatcher,am=vr.ReactCurrentOwner,ui=vr.ReactCurrentBatchConfig,Ze=0,Qt=null,kt=null,tn=0,Bn=0,wa=os(0),Wt=0,al=null,Bs=0,Fc=0,om=0,Bo=null,Mn=null,lm=0,Xa=1/0,Qi=null,oc=!1,ud=null,Yr=null,Yl=!1,Fr=null,lc=0,ko=0,cd=null,Ru=-1,bu=0;function vn(){return Ze&6?Ut():Ru!==-1?Ru:Ru=Ut()}function qr(n){return n.mode&1?Ze&2&&tn!==0?tn&-tn:CE.transition!==null?(bu===0&&(bu=Kv()),bu):(n=et,n!==0||(n=window.event,n=n===void 0?16:ix(n.type)),n):1}function Mi(n,e,t,i){if(50<ko)throw ko=0,cd=null,Error(ne(185));yl(n,t,i),(!(Ze&2)||n!==Qt)&&(n===Qt&&(!(Ze&2)&&(Fc|=t),Wt===4&&Ir(n,tn)),Cn(n,i),t===1&&Ze===0&&!(e.mode&1)&&(Xa=Ut()+500,Dc&&ls()))}function Cn(n,e){var t=n.callbackNode;CM(n,e);var i=Xu(n,n===Qt?tn:0);if(i===0)t!==null&&Eg(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Eg(t),e===1)n.tag===0?AE(m0.bind(null,n)):Mx(m0.bind(null,n)),ME(function(){!(Ze&6)&&ls()}),t=null;else{switch(Zv(i)){case 1:t=Up;break;case 4:t=qv;break;case 16:t=Wu;break;case 536870912:t=$v;break;default:t=Wu}t=yy(t,dy.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function dy(n,e){if(Ru=-1,bu=0,Ze&6)throw Error(ne(327));var t=n.callbackNode;if(Ia()&&n.callbackNode!==t)return null;var i=Xu(n,n===Qt?tn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=uc(n,i);else{e=i;var r=Ze;Ze|=2;var s=my();(Qt!==n||tn!==e)&&(Qi=null,Xa=Ut()+500,bs(n,e));do try{YE();break}catch(o){py(n,o)}while(!0);Yp(),ac.current=s,Ze=r,kt!==null?e=0:(Qt=null,tn=0,e=Wt)}if(e!==0){if(e===2&&(r=Oh(n),r!==0&&(i=r,e=fd(n,r))),e===1)throw t=al,bs(n,0),Ir(n,i),Cn(n,Ut()),t;if(e===6)Ir(n,i);else{if(r=n.current.alternate,!(i&30)&&!XE(r)&&(e=uc(n,i),e===2&&(s=Oh(n),s!==0&&(i=s,e=fd(n,s))),e===1))throw t=al,bs(n,0),Ir(n,i),Cn(n,Ut()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:vs(n,Mn,Qi);break;case 3:if(Ir(n,i),(i&130023424)===i&&(e=lm+500-Ut(),10<e)){if(Xu(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){vn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Xh(vs.bind(null,n,Mn,Qi),e);break}vs(n,Mn,Qi);break;case 4:if(Ir(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var a=31-Si(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Ut()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*WE(i/1960))-i,10<i){n.timeoutHandle=Xh(vs.bind(null,n,Mn,Qi),i);break}vs(n,Mn,Qi);break;case 5:vs(n,Mn,Qi);break;default:throw Error(ne(329))}}}return Cn(n,Ut()),n.callbackNode===t?dy.bind(null,n):null}function fd(n,e){var t=Bo;return n.current.memoizedState.isDehydrated&&(bs(n,e).flags|=256),n=uc(n,e),n!==2&&(e=Mn,Mn=t,e!==null&&hd(e)),n}function hd(n){Mn===null?Mn=n:Mn.push.apply(Mn,n)}function XE(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Ei(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ir(n,e){for(e&=~om,e&=~Fc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Si(e),i=1<<t;n[t]=-1,e&=~i}}function m0(n){if(Ze&6)throw Error(ne(327));Ia();var e=Xu(n,0);if(!(e&1))return Cn(n,Ut()),null;var t=uc(n,e);if(n.tag!==0&&t===2){var i=Oh(n);i!==0&&(e=i,t=fd(n,i))}if(t===1)throw t=al,bs(n,0),Ir(n,e),Cn(n,Ut()),t;if(t===6)throw Error(ne(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,vs(n,Mn,Qi),Cn(n,Ut()),null}function um(n,e){var t=Ze;Ze|=1;try{return n(e)}finally{Ze=t,Ze===0&&(Xa=Ut()+500,Dc&&ls())}}function ks(n){Fr!==null&&Fr.tag===0&&!(Ze&6)&&Ia();var e=Ze;Ze|=1;var t=ui.transition,i=et;try{if(ui.transition=null,et=1,n)return n()}finally{et=i,ui.transition=t,Ze=e,!(Ze&6)&&ls()}}function cm(){Bn=wa.current,mt(wa)}function bs(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,SE(t)),kt!==null)for(t=kt.return;t!==null;){var i=t;switch(Wp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ku();break;case 3:Ha(),mt(wn),mt(mn),Jp();break;case 5:Qp(i);break;case 4:Ha();break;case 13:mt(St);break;case 19:mt(St);break;case 10:qp(i.type._context);break;case 22:case 23:cm()}t=t.return}if(Qt=n,kt=n=$r(n.current,null),tn=Bn=e,Wt=0,al=null,om=Fc=Bs=0,Mn=Bo=null,Ts!==null){for(e=0;e<Ts.length;e++)if(t=Ts[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}t.pending=i}Ts=null}return n}function py(n,e){do{var t=kt;try{if(Yp(),wu.current=sc,rc){for(var i=Tt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}rc=!1}if(Os=0,Kt=Ht=Tt=null,Fo=!1,il=0,am.current=null,t===null||t.return===null){Wt=1,al=e,kt=null;break}e:{var s=n,a=t.return,o=t,l=e;if(e=tn,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=o,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=n0(a);if(p!==null){p.flags&=-257,i0(p,a,o,s,e),p.mode&1&&t0(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){t0(s,u,e),fm();break e}l=Error(ne(426))}}else if(gt&&o.mode&1){var m=n0(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),i0(m,a,o,s,e),Xp(Wa(l,o));break e}}s=l=Wa(l,o),Wt!==4&&(Wt=2),Bo===null?Bo=[s]:Bo.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Zx(s,l,e);$g(s,d);break e;case 1:o=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Yr===null||!Yr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Qx(s,o,e);$g(s,S);break e}}s=s.return}while(s!==null)}_y(t)}catch(T){e=T,kt===t&&t!==null&&(kt=t=t.return);continue}break}while(!0)}function my(){var n=ac.current;return ac.current=sc,n===null?sc:n}function fm(){(Wt===0||Wt===3||Wt===2)&&(Wt=4),Qt===null||!(Bs&268435455)&&!(Fc&268435455)||Ir(Qt,tn)}function uc(n,e){var t=Ze;Ze|=2;var i=my();(Qt!==n||tn!==e)&&(Qi=null,bs(n,e));do try{jE();break}catch(r){py(n,r)}while(!0);if(Yp(),Ze=t,ac.current=i,kt!==null)throw Error(ne(261));return Qt=null,tn=0,Wt}function jE(){for(;kt!==null;)gy(kt)}function YE(){for(;kt!==null&&!vM();)gy(kt)}function gy(n){var e=xy(n.alternate,n,Bn);n.memoizedProps=n.pendingProps,e===null?_y(n):kt=e,am.current=null}function _y(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=zE(t,e),t!==null){t.flags&=32767,kt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Wt=6,kt=null;return}}else if(t=kE(t,e,Bn),t!==null){kt=t;return}if(e=e.sibling,e!==null){kt=e;return}kt=e=n}while(e!==null);Wt===0&&(Wt=5)}function vs(n,e,t){var i=et,r=ui.transition;try{ui.transition=null,et=1,qE(n,e,t,i)}finally{ui.transition=r,et=i}return null}function qE(n,e,t,i){do Ia();while(Fr!==null);if(Ze&6)throw Error(ne(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ne(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(RM(n,s),n===Qt&&(kt=Qt=null,tn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Yl||(Yl=!0,yy(Wu,function(){return Ia(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=ui.transition,ui.transition=null;var a=et;et=1;var o=Ze;Ze|=4,am.current=null,GE(n,t),fy(t,n),pE(Hh),ju=!!Gh,Hh=Gh=null,n.current=t,HE(t),xM(),Ze=o,et=a,ui.transition=s}else n.current=t;if(Yl&&(Yl=!1,Fr=n,lc=r),s=n.pendingLanes,s===0&&(Yr=null),MM(t.stateNode),Cn(n,Ut()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(oc)throw oc=!1,n=ud,ud=null,n;return lc&1&&n.tag!==0&&Ia(),s=n.pendingLanes,s&1?n===cd?ko++:(ko=0,cd=n):ko=0,ls(),null}function Ia(){if(Fr!==null){var n=Zv(lc),e=ui.transition,t=et;try{if(ui.transition=null,et=16>n?16:n,Fr===null)var i=!1;else{if(n=Fr,Fr=null,lc=0,Ze&6)throw Error(ne(331));var r=Ze;for(Ze|=4,Me=n.current;Me!==null;){var s=Me,a=s.child;if(Me.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(Me=u;Me!==null;){var c=Me;switch(c.tag){case 0:case 11:case 15:Oo(8,c,s)}var h=c.child;if(h!==null)h.return=c,Me=h;else for(;Me!==null;){c=Me;var f=c.sibling,p=c.return;if(ly(c),c===u){Me=null;break}if(f!==null){f.return=p,Me=f;break}Me=p}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}Me=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Me=a;else e:for(;Me!==null;){if(s=Me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Oo(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Me=d;break e}Me=s.return}}var v=n.current;for(Me=v;Me!==null;){a=Me;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,Me=x;else e:for(a=v;Me!==null;){if(o=Me,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Nc(9,o)}}catch(T){Rt(o,o.return,T)}if(o===a){Me=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,Me=S;break e}Me=o.return}}if(Ze=r,ls(),Bi&&typeof Bi.onPostCommitFiberRoot=="function")try{Bi.onPostCommitFiberRoot(Cc,n)}catch{}i=!0}return i}finally{et=t,ui.transition=e}}return!1}function g0(n,e,t){e=Wa(t,e),e=Zx(n,e,1),n=jr(n,e,1),e=vn(),n!==null&&(yl(n,1,e),Cn(n,e))}function Rt(n,e,t){if(n.tag===3)g0(n,n,t);else for(;e!==null;){if(e.tag===3){g0(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Yr===null||!Yr.has(i))){n=Wa(t,n),n=Qx(e,n,1),e=jr(e,n,1),n=vn(),e!==null&&(yl(e,1,n),Cn(e,n));break}}e=e.return}}function $E(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=vn(),n.pingedLanes|=n.suspendedLanes&t,Qt===n&&(tn&t)===t&&(Wt===4||Wt===3&&(tn&130023424)===tn&&500>Ut()-lm?bs(n,0):om|=t),Cn(n,e)}function vy(n,e){e===0&&(n.mode&1?(e=Ol,Ol<<=1,!(Ol&130023424)&&(Ol=4194304)):e=1);var t=vn();n=hr(n,e),n!==null&&(yl(n,e,t),Cn(n,t))}function KE(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),vy(n,t)}function ZE(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),vy(n,t)}var xy;xy=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||wn.current)Tn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Tn=!1,BE(n,e,t);Tn=!!(n.flags&131072)}else Tn=!1,gt&&e.flags&1048576&&Ex(e,Ju,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Cu(n,e),n=e.pendingProps;var r=za(e,mn.current);Da(e,t),r=tm(null,e,i,n,r,t);var s=nm();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,An(i)?(s=!0,Zu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Kp(e),r.updater=Uc,e.stateNode=r,r._reactInternals=e,Qh(e,i,n,t),e=td(null,e,i,!0,s,t)):(e.tag=0,gt&&s&&Hp(e),_n(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Cu(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=JE(i),n=gi(i,n),r){case 0:e=ed(null,e,i,n,t);break e;case 1:e=a0(null,e,i,n,t);break e;case 11:e=r0(null,e,i,n,t);break e;case 14:e=s0(null,e,i,gi(i.type,n),t);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:gi(i,r),ed(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:gi(i,r),a0(n,e,i,r,t);case 3:e:{if(ny(e),n===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,bx(n,e),nc(e,i,null,t);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Wa(Error(ne(423)),e),e=o0(n,e,i,t,r);break e}else if(i!==r){r=Wa(Error(ne(424)),e),e=o0(n,e,i,t,r);break e}else for(Vn=Xr(e.stateNode.containerInfo.firstChild),Wn=e,gt=!0,vi=null,t=Cx(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Va(),i===r){e=dr(n,e,t);break e}_n(n,e,i,t)}e=e.child}return e;case 5:return Px(e),n===null&&$h(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,a=r.children,Wh(i,r)?a=null:s!==null&&Wh(i,s)&&(e.flags|=32),ty(n,e),_n(n,e,a,t),e.child;case 6:return n===null&&$h(e),null;case 13:return iy(n,e,t);case 4:return Zp(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Ga(e,null,i,t):_n(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:gi(i,r),r0(n,e,i,r,t);case 7:return _n(n,e,e.pendingProps,t),e.child;case 8:return _n(n,e,e.pendingProps.children,t),e.child;case 12:return _n(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ht(ec,i._currentValue),i._currentValue=a,s!==null)if(Ei(s.value,a)){if(s.children===r.children&&!wn.current){e=dr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ar(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Kh(s.return,t,e),o.lanes|=t;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ne(341));a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),Kh(a,t,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}_n(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Da(e,t),r=ci(r),i=i(r),e.flags|=1,_n(n,e,i,t),e.child;case 14:return i=e.type,r=gi(i,e.pendingProps),r=gi(i.type,r),s0(n,e,i,r,t);case 15:return Jx(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:gi(i,r),Cu(n,e),e.tag=1,An(i)?(n=!0,Zu(e)):n=!1,Da(e,t),Kx(e,i,r),Qh(e,i,r,t),td(null,e,i,!0,n,t);case 19:return ry(n,e,t);case 22:return ey(n,e,t)}throw Error(ne(156,e.tag))};function yy(n,e){return Yv(n,e)}function QE(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(n,e,t,i){return new QE(n,e,t,i)}function hm(n){return n=n.prototype,!(!n||!n.isReactComponent)}function JE(n){if(typeof n=="function")return hm(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Lp)return 11;if(n===Dp)return 14}return 2}function $r(n,e){var t=n.alternate;return t===null?(t=ai(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Pu(n,e,t,i,r,s){var a=2;if(i=n,typeof n=="function")hm(n)&&(a=1);else if(typeof n=="string")a=5;else e:switch(n){case ma:return Ps(t.children,r,s,e);case Pp:a=8,r|=8;break;case Mh:return n=ai(12,t,e,r|2),n.elementType=Mh,n.lanes=s,n;case Eh:return n=ai(13,t,e,r),n.elementType=Eh,n.lanes=s,n;case Th:return n=ai(19,t,e,r),n.elementType=Th,n.lanes=s,n;case Pv:return Oc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Rv:a=10;break e;case bv:a=9;break e;case Lp:a=11;break e;case Dp:a=14;break e;case Pr:a=16,i=null;break e}throw Error(ne(130,n==null?n:typeof n,""))}return e=ai(a,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Ps(n,e,t,i){return n=ai(7,n,i,e),n.lanes=t,n}function Oc(n,e,t,i){return n=ai(22,n,i,e),n.elementType=Pv,n.lanes=t,n.stateNode={isHidden:!1},n}function wf(n,e,t){return n=ai(6,n,null,e),n.lanes=t,n}function Af(n,e,t){return e=ai(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function eT(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=af(0),this.expirationTimes=af(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=af(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function dm(n,e,t,i,r,s,a,o,l){return n=new eT(n,e,t,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ai(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kp(s),n}function tT(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pa,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Sy(n){if(!n)return ts;n=n._reactInternals;e:{if(Ws(n)!==n||n.tag!==1)throw Error(ne(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(An(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(n.tag===1){var t=n.type;if(An(t))return Sx(n,t,e)}return e}function My(n,e,t,i,r,s,a,o,l){return n=dm(t,i,!0,n,r,s,a,o,l),n.context=Sy(null),t=n.current,i=vn(),r=qr(t),s=ar(i,r),s.callback=e??null,jr(t,s,r),n.current.lanes=r,yl(n,r,i),Cn(n,i),n}function Bc(n,e,t,i){var r=e.current,s=vn(),a=qr(r);return t=Sy(t),e.context===null?e.context=t:e.pendingContext=t,e=ar(s,a),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=jr(r,e,a),n!==null&&(Mi(n,r,a,s),Tu(n,r,a)),a}function cc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function _0(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function pm(n,e){_0(n,e),(n=n.alternate)&&_0(n,e)}function nT(){return null}var Ey=typeof reportError=="function"?reportError:function(n){console.error(n)};function mm(n){this._internalRoot=n}kc.prototype.render=mm.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ne(409));Bc(n,e,null,null)};kc.prototype.unmount=mm.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;ks(function(){Bc(null,n,null,null)}),e[fr]=null}};function kc(n){this._internalRoot=n}kc.prototype.unstable_scheduleHydration=function(n){if(n){var e=ex();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Dr.length&&e!==0&&e<Dr[t].priority;t++);Dr.splice(t,0,n),t===0&&nx(n)}};function gm(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function zc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function v0(){}function iT(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=cc(a);s.call(u)}}var a=My(e,i,n,0,null,!1,!1,"",v0);return n._reactRootContainer=a,n[fr]=a.current,Qo(n.nodeType===8?n.parentNode:n),ks(),a}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=cc(l);o.call(u)}}var l=dm(n,0,!1,null,null,!1,!1,"",v0);return n._reactRootContainer=l,n[fr]=l.current,Qo(n.nodeType===8?n.parentNode:n),ks(function(){Bc(e,l,t,i)}),l}function Vc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=cc(a);o.call(l)}}Bc(e,a,n,r)}else a=iT(t,e,n,r,i);return cc(a)}Qv=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=wo(e.pendingLanes);t!==0&&(Np(e,t|1),Cn(e,Ut()),!(Ze&6)&&(Xa=Ut()+500,ls()))}break;case 13:ks(function(){var i=hr(n,1);if(i!==null){var r=vn();Mi(i,n,1,r)}}),pm(n,1)}};Fp=function(n){if(n.tag===13){var e=hr(n,134217728);if(e!==null){var t=vn();Mi(e,n,134217728,t)}pm(n,134217728)}};Jv=function(n){if(n.tag===13){var e=qr(n),t=hr(n,e);if(t!==null){var i=vn();Mi(t,n,e,i)}pm(n,e)}};ex=function(){return et};tx=function(n,e){var t=et;try{return et=n,e()}finally{et=t}};Uh=function(n,e,t){switch(e){case"input":if(Ch(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Lc(i);if(!r)throw Error(ne(90));Dv(i),Ch(i,r)}}}break;case"textarea":Uv(n,t);break;case"select":e=t.value,e!=null&&Ra(n,!!t.multiple,e,!1)}};Vv=um;Gv=ks;var rT={usingClientEntryPoint:!1,Events:[Ml,xa,Lc,kv,zv,um]},po={findFiberByHostInstance:Es,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sT={bundleType:po.bundleType,version:po.version,rendererPackageName:po.rendererPackageName,rendererConfig:po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Xv(n),n===null?null:n.stateNode},findFiberByHostInstance:po.findFiberByHostInstance||nT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ql.isDisabled&&ql.supportsFiber)try{Cc=ql.inject(sT),Bi=ql}catch{}}Kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rT;Kn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gm(e))throw Error(ne(200));return tT(n,e,null,t)};Kn.createRoot=function(n,e){if(!gm(n))throw Error(ne(299));var t=!1,i="",r=Ey;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=dm(n,1,!1,null,null,t,!1,i,r),n[fr]=e.current,Qo(n.nodeType===8?n.parentNode:n),new mm(e)};Kn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ne(188)):(n=Object.keys(n).join(","),Error(ne(268,n)));return n=Xv(e),n=n===null?null:n.stateNode,n};Kn.flushSync=function(n){return ks(n)};Kn.hydrate=function(n,e,t){if(!zc(e))throw Error(ne(200));return Vc(null,n,e,!0,t)};Kn.hydrateRoot=function(n,e,t){if(!gm(n))throw Error(ne(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",a=Ey;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),e=My(e,null,n,1,t??null,r,!1,s,a),n[fr]=e.current,Qo(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new kc(e)};Kn.render=function(n,e,t){if(!zc(e))throw Error(ne(200));return Vc(null,n,e,!1,t)};Kn.unmountComponentAtNode=function(n){if(!zc(n))throw Error(ne(40));return n._reactRootContainer?(ks(function(){Vc(null,null,n,!1,function(){n._reactRootContainer=null,n[fr]=null})}),!0):!1};Kn.unstable_batchedUpdates=um;Kn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!zc(t))throw Error(ne(200));if(n==null||n._reactInternals===void 0)throw Error(ne(38));return Vc(n,e,t,!1,i)};Kn.version="18.3.1-next-f1338f8080-20240426";function Ty(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ty)}catch(n){console.error(n)}}Ty(),Tv.exports=Kn;var aT=Tv.exports,x0=aT;yh.createRoot=x0.createRoot,yh.hydrateRoot=x0.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ol(){return ol=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},ol.apply(this,arguments)}var Or;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Or||(Or={}));const y0="popstate";function oT(n){n===void 0&&(n={});function e(r,s){let{pathname:a="/",search:o="",hash:l=""}=Xs(r.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),dd("",{pathname:a,search:o,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function t(r,s){let a=r.document.querySelector("base"),o="";if(a&&a.getAttribute("href")){let l=r.location.href,u=l.indexOf("#");o=u===-1?l:l.slice(0,u)}return o+"#"+(typeof s=="string"?s:fc(s))}function i(r,s){Gc(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return uT(e,t,i,n)}function zt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Gc(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function lT(){return Math.random().toString(36).substr(2,8)}function S0(n,e){return{usr:n.state,key:n.key,idx:e}}function dd(n,e,t,i){return t===void 0&&(t=null),ol({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Xs(e):e,{state:t,key:e&&e.key||i||lT()})}function fc(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Xs(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function uT(n,e,t,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=Or.Pop,l=null,u=c();u==null&&(u=0,a.replaceState(ol({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function h(){o=Or.Pop;let m=c(),d=m==null?null:m-u;u=m,l&&l({action:o,location:_.location,delta:d})}function f(m,d){o=Or.Push;let v=dd(_.location,m,d);t&&t(v,m),u=c()+1;let x=S0(v,u),S=_.createHref(v);try{a.pushState(x,"",S)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;r.location.assign(S)}s&&l&&l({action:o,location:_.location,delta:1})}function p(m,d){o=Or.Replace;let v=dd(_.location,m,d);t&&t(v,m),u=c();let x=S0(v,u),S=_.createHref(v);a.replaceState(x,"",S),s&&l&&l({action:o,location:_.location,delta:0})}function g(m){let d=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof m=="string"?m:fc(m);return v=v.replace(/ $/,"%20"),zt(d,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,d)}let _={get action(){return o},get location(){return n(r,a)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(y0,h),l=m,()=>{r.removeEventListener(y0,h),l=null}},createHref(m){return e(r,m)},createURL:g,encodeLocation(m){let d=g(m);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:f,replace:p,go(m){return a.go(m)}};return _}var M0;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(M0||(M0={}));function cT(n,e,t){return t===void 0&&(t="/"),fT(n,e,t)}function fT(n,e,t,i){let r=typeof e=="string"?Xs(e):e,s=_m(r.pathname||"/",t);if(s==null)return null;let a=wy(n);hT(a);let o=null;for(let l=0;o==null&&l<a.length;++l){let u=TT(s);o=ST(a[l],u)}return o}function wy(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(zt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=Kr([i,l.relativePath]),c=t.concat(l);s.children&&s.children.length>0&&(zt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),wy(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:xT(u,s.index),routesMeta:c})};return n.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of Ay(s.path))r(s,a,l)}),e}function Ay(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,r=t.endsWith("?"),s=t.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=Ay(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>n.startsWith("/")&&l===""?"/":l)}function hT(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:yT(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const dT=/^:[\w-]+$/,pT=3,mT=2,gT=1,_T=10,vT=-2,E0=n=>n==="*";function xT(n,e){let t=n.split("/"),i=t.length;return t.some(E0)&&(i+=vT),e&&(i+=mT),t.filter(r=>!E0(r)).reduce((r,s)=>r+(dT.test(s)?pT:s===""?gT:_T),i)}function yT(n,e){return n.length===e.length&&n.slice(0,-1).every((i,r)=>i===e[r])?n[n.length-1]-e[e.length-1]:0}function ST(n,e,t){let{routesMeta:i}=n,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],u=o===i.length-1,c=s==="/"?e:e.slice(s.length)||"/",h=MT({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),f=l.route;if(!h)return null;Object.assign(r,h.params),a.push({params:r,pathname:Kr([s,h.pathname]),pathnameBase:bT(Kr([s,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(s=Kr([s,h.pathnameBase]))}return a}function MT(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=ET(n.path,n.caseSensitive,n.end),r=e.match(t);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((u,c,h)=>{let{paramName:f,isOptional:p}=c;if(f==="*"){let _=o[h]||"";a=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const g=o[h];return p&&!g?u[f]=void 0:u[f]=(g||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:n}}function ET(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Gc(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],r="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),r+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":n!==""&&n!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function TT(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Gc(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function _m(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}const wT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,AT=n=>wT.test(n);function CT(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:r=""}=typeof n=="string"?Xs(n):n,s;if(t)if(AT(t))s=t;else{if(t.includes("//")){let a=t;t=t.replace(/\/\/+/g,"/"),Gc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+t))}t.startsWith("/")?s=T0(t.substring(1),"/"):s=T0(t,e)}else s=e;return{pathname:s,search:PT(i),hash:LT(r)}}function T0(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function Cf(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function RT(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Cy(n,e){let t=RT(n);return e?t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function Ry(n,e,t,i){i===void 0&&(i=!1);let r;typeof n=="string"?r=Xs(n):(r=ol({},n),zt(!r.pathname||!r.pathname.includes("?"),Cf("?","pathname","search",r)),zt(!r.pathname||!r.pathname.includes("#"),Cf("#","pathname","hash",r)),zt(!r.search||!r.search.includes("#"),Cf("#","search","hash",r)));let s=n===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=t;else{let h=e.length-1;if(!i&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),h-=1;r.pathname=f.join("/")}o=h>=0?e[h]:"/"}let l=CT(r,o),u=a&&a!=="/"&&a.endsWith("/"),c=(s||a===".")&&t.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Kr=n=>n.join("/").replace(/\/\/+/g,"/"),bT=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),PT=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,LT=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function DT(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const by=["post","put","patch","delete"];new Set(by);const IT=["get",...by];new Set(IT);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ll(){return ll=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},ll.apply(this,arguments)}const vm=ie.createContext(null),UT=ie.createContext(null),js=ie.createContext(null),Hc=ie.createContext(null),Ys=ie.createContext({outlet:null,matches:[],isDataRoute:!1}),Py=ie.createContext(null);function NT(n,e){let{relative:t}=e===void 0?{}:e;Tl()||zt(!1);let{basename:i,navigator:r}=ie.useContext(js),{hash:s,pathname:a,search:o}=Dy(n,{relative:t}),l=a;return i!=="/"&&(l=a==="/"?i:Kr([i,a])),r.createHref({pathname:l,search:o,hash:s})}function Tl(){return ie.useContext(Hc)!=null}function Wc(){return Tl()||zt(!1),ie.useContext(Hc).location}function Ly(n){ie.useContext(js).static||ie.useLayoutEffect(n)}function FT(){let{isDataRoute:n}=ie.useContext(Ys);return n?$T():OT()}function OT(){Tl()||zt(!1);let n=ie.useContext(vm),{basename:e,future:t,navigator:i}=ie.useContext(js),{matches:r}=ie.useContext(Ys),{pathname:s}=Wc(),a=JSON.stringify(Cy(r,t.v7_relativeSplatPath)),o=ie.useRef(!1);return Ly(()=>{o.current=!0}),ie.useCallback(function(u,c){if(c===void 0&&(c={}),!o.current)return;if(typeof u=="number"){i.go(u);return}let h=Ry(u,JSON.parse(a),s,c.relative==="path");n==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:Kr([e,h.pathname])),(c.replace?i.replace:i.push)(h,c.state,c)},[e,i,a,s,n])}function Dy(n,e){let{relative:t}=e===void 0?{}:e,{future:i}=ie.useContext(js),{matches:r}=ie.useContext(Ys),{pathname:s}=Wc(),a=JSON.stringify(Cy(r,i.v7_relativeSplatPath));return ie.useMemo(()=>Ry(n,JSON.parse(a),s,t==="path"),[n,a,s,t])}function BT(n,e){return kT(n,e)}function kT(n,e,t,i){Tl()||zt(!1);let{navigator:r}=ie.useContext(js),{matches:s}=ie.useContext(Ys),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u=Wc(),c;if(e){var h;let m=typeof e=="string"?Xs(e):e;l==="/"||(h=m.pathname)!=null&&h.startsWith(l)||zt(!1),c=m}else c=u;let f=c.pathname||"/",p=f;if(l!=="/"){let m=l.replace(/^\//,"").split("/");p="/"+f.replace(/^\//,"").split("/").slice(m.length).join("/")}let g=cT(n,{pathname:p}),_=WT(g&&g.map(m=>Object.assign({},m,{params:Object.assign({},o,m.params),pathname:Kr([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:Kr([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,t,i);return e&&_?ie.createElement(Hc.Provider,{value:{location:ll({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Or.Pop}},_):_}function zT(){let n=qT(),e=DT(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return ie.createElement(ie.Fragment,null,ie.createElement("h2",null,"Unexpected Application Error!"),ie.createElement("h3",{style:{fontStyle:"italic"}},e),t?ie.createElement("pre",{style:r},t):null,null)}const VT=ie.createElement(zT,null);class GT extends ie.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?ie.createElement(Ys.Provider,{value:this.props.routeContext},ie.createElement(Py.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function HT(n){let{routeContext:e,match:t,children:i}=n,r=ie.useContext(vm);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),ie.createElement(Ys.Provider,{value:e},i)}function WT(n,e,t,i){var r;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),n==null){var s;if(!t)return null;if(t.errors)n=t.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let a=n,o=(r=t)==null?void 0:r.errors;if(o!=null){let c=a.findIndex(h=>h.route.id&&(o==null?void 0:o[h.route.id])!==void 0);c>=0||zt(!1),a=a.slice(0,Math.min(a.length,c+1))}let l=!1,u=-1;if(t&&i&&i.v7_partialHydration)for(let c=0;c<a.length;c++){let h=a[c];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=c),h.route.id){let{loaderData:f,errors:p}=t,g=h.route.loader&&f[h.route.id]===void 0&&(!p||p[h.route.id]===void 0);if(h.route.lazy||g){l=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((c,h,f)=>{let p,g=!1,_=null,m=null;t&&(p=o&&h.route.id?o[h.route.id]:void 0,_=h.route.errorElement||VT,l&&(u<0&&f===0?(KT("route-fallback"),g=!0,m=null):u===f&&(g=!0,m=h.route.hydrateFallbackElement||null)));let d=e.concat(a.slice(0,f+1)),v=()=>{let x;return p?x=_:g?x=m:h.route.Component?x=ie.createElement(h.route.Component,null):h.route.element?x=h.route.element:x=c,ie.createElement(HT,{match:h,routeContext:{outlet:c,matches:d,isDataRoute:t!=null},children:x})};return t&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?ie.createElement(GT,{location:t.location,revalidation:t.revalidation,component:_,error:p,children:v(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):v()},null)}var Iy=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(Iy||{}),Uy=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(Uy||{});function XT(n){let e=ie.useContext(vm);return e||zt(!1),e}function jT(n){let e=ie.useContext(UT);return e||zt(!1),e}function YT(n){let e=ie.useContext(Ys);return e||zt(!1),e}function Ny(n){let e=YT(),t=e.matches[e.matches.length-1];return t.route.id||zt(!1),t.route.id}function qT(){var n;let e=ie.useContext(Py),t=jT(),i=Ny();return e!==void 0?e:(n=t.errors)==null?void 0:n[i]}function $T(){let{router:n}=XT(Iy.UseNavigateStable),e=Ny(Uy.UseNavigateStable),t=ie.useRef(!1);return Ly(()=>{t.current=!0}),ie.useCallback(function(r,s){s===void 0&&(s={}),t.current&&(typeof r=="number"?n.navigate(r):n.navigate(r,ll({fromRouteId:e},s)))},[n,e])}const w0={};function KT(n,e,t){w0[n]||(w0[n]=!0)}function ZT(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function Lu(n){zt(!1)}function QT(n){let{basename:e="/",children:t=null,location:i,navigationType:r=Or.Pop,navigator:s,static:a=!1,future:o}=n;Tl()&&zt(!1);let l=e.replace(/^\/*/,"/"),u=ie.useMemo(()=>({basename:l,navigator:s,static:a,future:ll({v7_relativeSplatPath:!1},o)}),[l,o,s,a]);typeof i=="string"&&(i=Xs(i));let{pathname:c="/",search:h="",hash:f="",state:p=null,key:g="default"}=i,_=ie.useMemo(()=>{let m=_m(c,l);return m==null?null:{location:{pathname:m,search:h,hash:f,state:p,key:g},navigationType:r}},[l,c,h,f,p,g,r]);return _==null?null:ie.createElement(js.Provider,{value:u},ie.createElement(Hc.Provider,{children:t,value:_}))}function JT(n){let{children:e,location:t}=n;return BT(pd(e),t)}new Promise(()=>{});function pd(n,e){e===void 0&&(e=[]);let t=[];return ie.Children.forEach(n,(i,r)=>{if(!ie.isValidElement(i))return;let s=[...e,r];if(i.type===ie.Fragment){t.push.apply(t,pd(i.props.children,s));return}i.type!==Lu&&zt(!1),!i.props.index||!i.props.children||zt(!1);let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=pd(i.props.children,s)),t.push(a)}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function md(){return md=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},md.apply(this,arguments)}function ew(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function tw(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function nw(n,e){return n.button===0&&(!e||e==="_self")&&!tw(n)}const iw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],rw="6";try{window.__reactRouterVersion=rw}catch{}const sw="startTransition",A0=$1[sw];function aw(n){let{basename:e,children:t,future:i,window:r}=n,s=ie.useRef();s.current==null&&(s.current=oT({window:r,v5Compat:!0}));let a=s.current,[o,l]=ie.useState({action:a.action,location:a.location}),{v7_startTransition:u}=i||{},c=ie.useCallback(h=>{u&&A0?A0(()=>l(h)):l(h)},[l,u]);return ie.useLayoutEffect(()=>a.listen(c),[a,c]),ie.useEffect(()=>ZT(i),[i]),ie.createElement(QT,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,future:i})}const ow=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",lw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,uw=ie.forwardRef(function(e,t){let{onClick:i,relative:r,reloadDocument:s,replace:a,state:o,target:l,to:u,preventScrollReset:c,viewTransition:h}=e,f=ew(e,iw),{basename:p}=ie.useContext(js),g,_=!1;if(typeof u=="string"&&lw.test(u)&&(g=u,ow))try{let x=new URL(window.location.href),S=u.startsWith("//")?new URL(x.protocol+u):new URL(u),T=_m(S.pathname,p);S.origin===x.origin&&T!=null?u=T+S.search+S.hash:_=!0}catch{}let m=NT(u,{relative:r}),d=cw(u,{replace:a,state:o,target:l,preventScrollReset:c,relative:r,viewTransition:h});function v(x){i&&i(x),x.defaultPrevented||d(x)}return ie.createElement("a",md({},f,{href:g||m,onClick:_||s?i:v,ref:t,target:l}))});var C0;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(C0||(C0={}));var R0;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(R0||(R0={}));function cw(n,e){let{target:t,replace:i,state:r,preventScrollReset:s,relative:a,viewTransition:o}=e===void 0?{}:e,l=FT(),u=Wc(),c=Dy(n,{relative:a});return ie.useCallback(h=>{if(nw(h,t)){h.preventDefault();let f=i!==void 0?i:fc(u)===fc(c);l(n,{replace:f,state:r,preventScrollReset:s,relative:a,viewTransition:o})}},[u,l,c,i,r,t,n,s,a,o])}function zo(n){let e=n[0],t=n[1],i=n[2];return Math.sqrt(e*e+t*t+i*i)}function gd(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n}function fw(n,e,t,i){return n[0]=e,n[1]=t,n[2]=i,n}function b0(n,e,t){return n[0]=e[0]+t[0],n[1]=e[1]+t[1],n[2]=e[2]+t[2],n}function P0(n,e,t){return n[0]=e[0]-t[0],n[1]=e[1]-t[1],n[2]=e[2]-t[2],n}function hw(n,e,t){return n[0]=e[0]*t[0],n[1]=e[1]*t[1],n[2]=e[2]*t[2],n}function dw(n,e,t){return n[0]=e[0]/t[0],n[1]=e[1]/t[1],n[2]=e[2]/t[2],n}function Rf(n,e,t){return n[0]=e[0]*t,n[1]=e[1]*t,n[2]=e[2]*t,n}function pw(n,e){let t=e[0]-n[0],i=e[1]-n[1],r=e[2]-n[2];return Math.sqrt(t*t+i*i+r*r)}function mw(n,e){let t=e[0]-n[0],i=e[1]-n[1],r=e[2]-n[2];return t*t+i*i+r*r}function L0(n){let e=n[0],t=n[1],i=n[2];return e*e+t*t+i*i}function gw(n,e){return n[0]=-e[0],n[1]=-e[1],n[2]=-e[2],n}function _w(n,e){return n[0]=1/e[0],n[1]=1/e[1],n[2]=1/e[2],n}function _d(n,e){let t=e[0],i=e[1],r=e[2],s=t*t+i*i+r*r;return s>0&&(s=1/Math.sqrt(s)),n[0]=e[0]*s,n[1]=e[1]*s,n[2]=e[2]*s,n}function Fy(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]}function D0(n,e,t){let i=e[0],r=e[1],s=e[2],a=t[0],o=t[1],l=t[2];return n[0]=r*l-s*o,n[1]=s*a-i*l,n[2]=i*o-r*a,n}function vw(n,e,t,i){let r=e[0],s=e[1],a=e[2];return n[0]=r+i*(t[0]-r),n[1]=s+i*(t[1]-s),n[2]=a+i*(t[2]-a),n}function xw(n,e,t,i,r){const s=Math.exp(-i*r);let a=e[0],o=e[1],l=e[2];return n[0]=t[0]+(a-t[0])*s,n[1]=t[1]+(o-t[1])*s,n[2]=t[2]+(l-t[2])*s,n}function yw(n,e,t){let i=e[0],r=e[1],s=e[2],a=t[3]*i+t[7]*r+t[11]*s+t[15];return a=a||1,n[0]=(t[0]*i+t[4]*r+t[8]*s+t[12])/a,n[1]=(t[1]*i+t[5]*r+t[9]*s+t[13])/a,n[2]=(t[2]*i+t[6]*r+t[10]*s+t[14])/a,n}function Sw(n,e,t){let i=e[0],r=e[1],s=e[2],a=t[3]*i+t[7]*r+t[11]*s+t[15];return a=a||1,n[0]=(t[0]*i+t[4]*r+t[8]*s)/a,n[1]=(t[1]*i+t[5]*r+t[9]*s)/a,n[2]=(t[2]*i+t[6]*r+t[10]*s)/a,n}function Mw(n,e,t){let i=e[0],r=e[1],s=e[2];return n[0]=i*t[0]+r*t[3]+s*t[6],n[1]=i*t[1]+r*t[4]+s*t[7],n[2]=i*t[2]+r*t[5]+s*t[8],n}function Ew(n,e,t){let i=e[0],r=e[1],s=e[2],a=t[0],o=t[1],l=t[2],u=t[3],c=o*s-l*r,h=l*i-a*s,f=a*r-o*i,p=o*f-l*h,g=l*c-a*f,_=a*h-o*c,m=u*2;return c*=m,h*=m,f*=m,p*=2,g*=2,_*=2,n[0]=i+c+p,n[1]=r+h+g,n[2]=s+f+_,n}const Tw=function(){const n=[0,0,0],e=[0,0,0];return function(t,i){gd(n,t),gd(e,i),_d(n,n),_d(e,e);let r=Fy(n,e);return r>1?0:r<-1?Math.PI:Math.acos(r)}}();function ww(n,e){return n[0]===e[0]&&n[1]===e[1]&&n[2]===e[2]}class Bt extends Array{constructor(e=0,t=e,i=e){return super(e,t,i),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this[0]=e}set y(e){this[1]=e}set z(e){this[2]=e}set(e,t=e,i=e){return e.length?this.copy(e):(fw(this,e,t,i),this)}copy(e){return gd(this,e),this}add(e,t){return t?b0(this,e,t):b0(this,this,e),this}sub(e,t){return t?P0(this,e,t):P0(this,this,e),this}multiply(e){return e.length?hw(this,this,e):Rf(this,this,e),this}divide(e){return e.length?dw(this,this,e):Rf(this,this,1/e),this}inverse(e=this){return _w(this,e),this}len(){return zo(this)}distance(e){return e?pw(this,e):zo(this)}squaredLen(){return L0(this)}squaredDistance(e){return e?mw(this,e):L0(this)}negate(e=this){return gw(this,e),this}cross(e,t){return t?D0(this,e,t):D0(this,this,e),this}scale(e){return Rf(this,this,e),this}normalize(){return _d(this,this),this}dot(e){return Fy(this,e)}equals(e){return ww(this,e)}applyMatrix3(e){return Mw(this,this,e),this}applyMatrix4(e){return yw(this,this,e),this}scaleRotateMatrix4(e){return Sw(this,this,e),this}applyQuaternion(e){return Ew(this,this,e),this}angle(e){return Tw(this,e)}lerp(e,t){return vw(this,this,e,t),this}smoothLerp(e,t,i){return xw(this,this,e,t,i),this}clone(){return new Bt(this[0],this[1],this[2])}fromArray(e,t=0){return this[0]=e[t],this[1]=e[t+1],this[2]=e[t+2],this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e}transformDirection(e){const t=this[0],i=this[1],r=this[2];return this[0]=e[0]*t+e[4]*i+e[8]*r,this[1]=e[1]*t+e[5]*i+e[9]*r,this[2]=e[2]*t+e[6]*i+e[10]*r,this.normalize()}}const I0=new Bt;let Aw=1,Cw=1,U0=!1;class Oy{constructor(e,t={}){e.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=e,this.attributes=t,this.id=Aw++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let i in t)this.addAttribute(i,t[i])}addAttribute(e,t){if(this.attributes[e]=t,t.id=Cw++,t.size=t.size||1,t.type=t.type||(t.data.constructor===Float32Array?this.gl.FLOAT:t.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),t.target=e==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,t.normalized=t.normalized||!1,t.stride=t.stride||0,t.offset=t.offset||0,t.count=t.count||(t.stride?t.data.byteLength/t.stride:t.data.length/t.size),t.divisor=t.instanced||0,t.needsUpdate=!1,t.usage=t.usage||this.gl.STATIC_DRAW,t.buffer||this.updateAttribute(t),t.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==t.count*t.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,t.count*t.divisor);this.instancedCount=t.count*t.divisor}else e==="index"?this.drawRange.count=t.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,t.count))}updateAttribute(e){const t=!e.buffer;t&&(e.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==e.buffer&&(this.gl.bindBuffer(e.target,e.buffer),this.glState.boundBuffer=e.buffer),t?this.gl.bufferData(e.target,e.data,e.usage):this.gl.bufferSubData(e.target,0,e.data),e.needsUpdate=!1}setIndex(e){this.addAttribute("index",e)}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}setInstancedCount(e){this.instancedCount=e}createVAO(e){this.VAOs[e.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.bindAttributes(e)}bindAttributes(e){e.attributeLocations.forEach((t,{name:i,type:r})=>{if(!this.attributes[i]){console.warn(`active attribute ${i} not being supplied`);return}const s=this.attributes[i];this.gl.bindBuffer(s.target,s.buffer),this.glState.boundBuffer=s.buffer;let a=1;r===35674&&(a=2),r===35675&&(a=3),r===35676&&(a=4);const o=s.size/a,l=a===1?0:a*a*4,u=a===1?0:a*4;for(let c=0;c<a;c++)this.gl.vertexAttribPointer(t+c,o,s.type,s.normalized,s.stride+l,s.offset+c*u),this.gl.enableVertexAttribArray(t+c),this.gl.renderer.vertexAttribDivisor(t+c,s.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:e,mode:t=this.gl.TRIANGLES}){var r;this.gl.renderer.currentGeometry!==`${this.id}_${e.attributeOrder}`&&(this.VAOs[e.attributeOrder]||this.createVAO(e),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${e.attributeOrder}`),e.attributeLocations.forEach((s,{name:a})=>{const o=this.attributes[a];o.needsUpdate&&this.updateAttribute(o)});let i=2;((r=this.attributes.index)==null?void 0:r.type)===this.gl.UNSIGNED_INT&&(i=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(t,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*i,this.instancedCount):this.gl.renderer.drawArraysInstanced(t,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(t,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*i):this.gl.drawArrays(t,this.drawRange.start,this.drawRange.count)}getPosition(){const e=this.attributes.position;if(e.data)return e;if(!U0)return console.warn("No position buffer data found to compute bounds"),U0=!0}computeBoundingBox(e){e||(e=this.getPosition());const t=e.data,i=e.size;this.bounds||(this.bounds={min:new Bt,max:new Bt,center:new Bt,scale:new Bt,radius:1/0});const r=this.bounds.min,s=this.bounds.max,a=this.bounds.center,o=this.bounds.scale;r.set(1/0),s.set(-1/0);for(let l=0,u=t.length;l<u;l+=i){const c=t[l],h=t[l+1],f=t[l+2];r.x=Math.min(c,r.x),r.y=Math.min(h,r.y),r.z=Math.min(f,r.z),s.x=Math.max(c,s.x),s.y=Math.max(h,s.y),s.z=Math.max(f,s.z)}o.sub(s,r),a.add(r,s).divide(2)}computeBoundingSphere(e){e||(e=this.getPosition());const t=e.data,i=e.size;this.bounds||this.computeBoundingBox(e);let r=0;for(let s=0,a=t.length;s<a;s+=i)I0.fromArray(t,s),r=Math.max(r,this.bounds.center.squaredDistance(I0));this.bounds.radius=Math.sqrt(r)}remove(){for(let e in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[e]),delete this.VAOs[e];for(let e in this.attributes)this.gl.deleteBuffer(this.attributes[e].buffer),delete this.attributes[e]}}let Rw=1;const N0={};class xm{constructor(e,{vertex:t,fragment:i,uniforms:r={},transparent:s=!1,cullFace:a=e.BACK,frontFace:o=e.CCW,depthTest:l=!0,depthWrite:u=!0,depthFunc:c=e.LEQUAL}={}){e.canvas||console.error("gl not passed as first argument to Program"),this.gl=e,this.uniforms=r,this.id=Rw++,t||console.warn("vertex shader not supplied"),i||console.warn("fragment shader not supplied"),this.transparent=s,this.cullFace=a,this.frontFace=o,this.depthTest=l,this.depthWrite=u,this.depthFunc=c,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=e.createShader(e.VERTEX_SHADER),this.fragmentShader=e.createShader(e.FRAGMENT_SHADER),this.program=e.createProgram(),e.attachShader(this.program,this.vertexShader),e.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:t,fragment:i})}setShaders({vertex:e,fragment:t}){if(e&&(this.gl.shaderSource(this.vertexShader,e),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${F0(e)}`)),t&&(this.gl.shaderSource(this.fragmentShader,t),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${F0(t)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let i=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let a=0;a<i;a++){let o=this.gl.getActiveUniform(this.program,a);this.uniformLocations.set(o,this.gl.getUniformLocation(this.program,o.name));const l=o.name.match(/(\w+)/g);o.uniformName=l[0],o.nameComponents=l.slice(1)}this.attributeLocations=new Map;const r=[],s=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const o=this.gl.getActiveAttrib(this.program,a),l=this.gl.getAttribLocation(this.program,o.name);l!==-1&&(r[l]=o.name,this.attributeLocations.set(o,l))}this.attributeOrder=r.join("")}setBlendFunc(e,t,i,r){this.blendFunc.src=e,this.blendFunc.dst=t,this.blendFunc.srcAlpha=i,this.blendFunc.dstAlpha=r,e&&(this.transparent=!0)}setBlendEquation(e,t){this.blendEquation.modeRGB=e,this.blendEquation.modeAlpha=t}setStencilFunc(e,t,i){this.stencilRef=t,this.stencilFunc.func=e,this.stencilFunc.ref=t,this.stencilFunc.mask=i}setStencilOp(e,t,i){this.stencilOp.stencilFail=e,this.stencilOp.depthFail=t,this.stencilOp.depthPass=i}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:e=!1}={}){let t=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((r,s)=>{let a=this.uniforms[s.uniformName];for(const o of s.nameComponents){if(!a)break;if(o in a)a=a[o];else{if(Array.isArray(a.value))break;a=void 0;break}}if(!a)return O0(`Active uniform ${s.name} has not been supplied`);if(a&&a.value===void 0)return O0(`${s.name} uniform is missing a value parameter`);if(a.value.texture)return t=t+1,a.value.update(t),bf(this.gl,s.type,r,t);if(a.value.length&&a.value[0].texture){const o=[];return a.value.forEach(l=>{t=t+1,l.update(t),o.push(t)}),bf(this.gl,s.type,r,o)}bf(this.gl,s.type,r,a.value)}),this.applyState(),e&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function bf(n,e,t,i){i=i.length?bw(i):i;const r=n.renderer.state.uniformLocations.get(t);if(i.length)if(r===void 0||r.length!==i.length)n.renderer.state.uniformLocations.set(t,i.slice(0));else{if(Pw(r,i))return;r.set?r.set(i):Lw(r,i),n.renderer.state.uniformLocations.set(t,r)}else{if(r===i)return;n.renderer.state.uniformLocations.set(t,i)}switch(e){case 5126:return i.length?n.uniform1fv(t,i):n.uniform1f(t,i);case 35664:return n.uniform2fv(t,i);case 35665:return n.uniform3fv(t,i);case 35666:return n.uniform4fv(t,i);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return i.length?n.uniform1iv(t,i):n.uniform1i(t,i);case 35671:case 35667:return n.uniform2iv(t,i);case 35672:case 35668:return n.uniform3iv(t,i);case 35673:case 35669:return n.uniform4iv(t,i);case 35674:return n.uniformMatrix2fv(t,!1,i);case 35675:return n.uniformMatrix3fv(t,!1,i);case 35676:return n.uniformMatrix4fv(t,!1,i)}}function F0(n){let e=n.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function bw(n){const e=n.length,t=n[0].length;if(t===void 0)return n;const i=e*t;let r=N0[i];r||(N0[i]=r=new Float32Array(i));for(let s=0;s<e;s++)r.set(n[s],s*t);return r}function Pw(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lw(n,e){for(let t=0,i=n.length;t<i;t++)n[t]=e[t]}let Pf=0;function O0(n){Pf>100||(console.warn(n),Pf++,Pf>100&&console.warn("More than 100 program warnings - stopping logs."))}const Lf=new Bt;let Dw=1;class By{constructor({canvas:e=document.createElement("canvas"),width:t=300,height:i=150,dpr:r=1,alpha:s=!1,depth:a=!0,stencil:o=!1,antialias:l=!1,premultipliedAlpha:u=!1,preserveDrawingBuffer:c=!1,powerPreference:h="default",autoClear:f=!0,webgl:p=2}={}){const g={alpha:s,depth:a,stencil:o,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:c,powerPreference:h};this.dpr=r,this.alpha=s,this.color=!0,this.depth=a,this.stencil=o,this.premultipliedAlpha=u,this.autoClear=f,this.id=Dw++,p===2&&(this.gl=e.getContext("webgl2",g)),this.isWebgl2=!!this.gl,this.gl||(this.gl=e.getContext("webgl",g)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(t,i),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(e,t){this.width=e,this.height=t,this.gl.canvas.width=e*this.dpr,this.gl.canvas.height=t*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:e+"px",height:t+"px"})}setViewport(e,t,i=0,r=0){this.state.viewport.width===e&&this.state.viewport.height===t||(this.state.viewport.width=e,this.state.viewport.height=t,this.state.viewport.x=i,this.state.viewport.y=r,this.gl.viewport(i,r,e,t))}setScissor(e,t,i=0,r=0){this.gl.scissor(i,r,e,t)}enable(e){this.state[e]!==!0&&(this.gl.enable(e),this.state[e]=!0)}disable(e){this.state[e]!==!1&&(this.gl.disable(e),this.state[e]=!1)}setBlendFunc(e,t,i,r){this.state.blendFunc.src===e&&this.state.blendFunc.dst===t&&this.state.blendFunc.srcAlpha===i&&this.state.blendFunc.dstAlpha===r||(this.state.blendFunc.src=e,this.state.blendFunc.dst=t,this.state.blendFunc.srcAlpha=i,this.state.blendFunc.dstAlpha=r,i!==void 0?this.gl.blendFuncSeparate(e,t,i,r):this.gl.blendFunc(e,t))}setBlendEquation(e,t){e=e||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===e&&this.state.blendEquation.modeAlpha===t)&&(this.state.blendEquation.modeRGB=e,this.state.blendEquation.modeAlpha=t,t!==void 0?this.gl.blendEquationSeparate(e,t):this.gl.blendEquation(e))}setCullFace(e){this.state.cullFace!==e&&(this.state.cullFace=e,this.gl.cullFace(e))}setFrontFace(e){this.state.frontFace!==e&&(this.state.frontFace=e,this.gl.frontFace(e))}setDepthMask(e){this.state.depthMask!==e&&(this.state.depthMask=e,this.gl.depthMask(e))}setDepthFunc(e){this.state.depthFunc!==e&&(this.state.depthFunc=e,this.gl.depthFunc(e))}setStencilMask(e){this.state.stencilMask!==e&&(this.state.stencilMask=e,this.gl.stencilMask(e))}setStencilFunc(e,t,i){this.state.stencilFunc===e&&this.state.stencilRef===t&&this.state.stencilFuncMask===i||(this.state.stencilFunc=e||this.gl.ALWAYS,this.state.stencilRef=t||0,this.state.stencilFuncMask=i||0,this.gl.stencilFunc(e||this.gl.ALWAYS,t||0,i||0))}setStencilOp(e,t,i){this.state.stencilFail===e&&this.state.stencilDepthFail===t&&this.state.stencilDepthPass===i||(this.state.stencilFail=e,this.state.stencilDepthFail=t,this.state.stencilDepthPass=i,this.gl.stencilOp(e,t,i))}activeTexture(e){this.state.activeTextureUnit!==e&&(this.state.activeTextureUnit=e,this.gl.activeTexture(this.gl.TEXTURE0+e))}bindFramebuffer({target:e=this.gl.FRAMEBUFFER,buffer:t=null}={}){this.state.framebuffer!==t&&(this.state.framebuffer=t,this.gl.bindFramebuffer(e,t))}getExtension(e,t,i){return t&&this.gl[t]?this.gl[t].bind(this.gl):(this.extensions[e]||(this.extensions[e]=this.gl.getExtension(e)),t?this.extensions[e]?this.extensions[e][i].bind(this.extensions[e]):null:this.extensions[e])}sortOpaque(e,t){return e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.program.id!==t.program.id?e.program.id-t.program.id:e.zDepth!==t.zDepth?e.zDepth-t.zDepth:t.id-e.id}sortTransparent(e,t){return e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.zDepth!==t.zDepth?t.zDepth-e.zDepth:t.id-e.id}sortUI(e,t){return e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.program.id!==t.program.id?e.program.id-t.program.id:t.id-e.id}getRenderList({scene:e,camera:t,frustumCull:i,sort:r}){let s=[];if(t&&i&&t.updateFrustum(),e.traverse(a=>{if(!a.visible)return!0;a.draw&&(i&&a.frustumCulled&&t&&!t.frustumIntersectsMesh(a)||s.push(a))}),r){const a=[],o=[],l=[];s.forEach(u=>{u.program.transparent?u.program.depthTest?o.push(u):l.push(u):a.push(u),u.zDepth=0,!(u.renderOrder!==0||!u.program.depthTest||!t)&&(u.worldMatrix.getTranslation(Lf),Lf.applyMatrix4(t.projectionViewMatrix),u.zDepth=Lf.z)}),a.sort(this.sortOpaque),o.sort(this.sortTransparent),l.sort(this.sortUI),s=a.concat(o,l)}return s}render({scene:e,camera:t,target:i=null,update:r=!0,sort:s=!0,frustumCull:a=!0,clear:o}){i===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(i),this.setViewport(i.width,i.height)),(o||this.autoClear&&o!==!1)&&(this.depth&&(!i||i.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!i||i.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),r&&e.updateMatrixWorld(),t&&t.updateMatrixWorld(),this.getRenderList({scene:e,camera:t,frustumCull:a,sort:s}).forEach(u=>{u.draw({camera:t})})}}function Iw(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n}function Uw(n,e,t,i,r){return n[0]=e,n[1]=t,n[2]=i,n[3]=r,n}function Nw(n,e){let t=e[0],i=e[1],r=e[2],s=e[3],a=t*t+i*i+r*r+s*s;return a>0&&(a=1/Math.sqrt(a)),n[0]=t*a,n[1]=i*a,n[2]=r*a,n[3]=s*a,n}function Fw(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]+n[3]*e[3]}function Ow(n){return n[0]=0,n[1]=0,n[2]=0,n[3]=1,n}function Bw(n,e,t){t=t*.5;let i=Math.sin(t);return n[0]=i*e[0],n[1]=i*e[1],n[2]=i*e[2],n[3]=Math.cos(t),n}function B0(n,e,t){let i=e[0],r=e[1],s=e[2],a=e[3],o=t[0],l=t[1],u=t[2],c=t[3];return n[0]=i*c+a*o+r*u-s*l,n[1]=r*c+a*l+s*o-i*u,n[2]=s*c+a*u+i*l-r*o,n[3]=a*c-i*o-r*l-s*u,n}function kw(n,e,t){t*=.5;let i=e[0],r=e[1],s=e[2],a=e[3],o=Math.sin(t),l=Math.cos(t);return n[0]=i*l+a*o,n[1]=r*l+s*o,n[2]=s*l-r*o,n[3]=a*l-i*o,n}function zw(n,e,t){t*=.5;let i=e[0],r=e[1],s=e[2],a=e[3],o=Math.sin(t),l=Math.cos(t);return n[0]=i*l-s*o,n[1]=r*l+a*o,n[2]=s*l+i*o,n[3]=a*l-r*o,n}function Vw(n,e,t){t*=.5;let i=e[0],r=e[1],s=e[2],a=e[3],o=Math.sin(t),l=Math.cos(t);return n[0]=i*l+r*o,n[1]=r*l-i*o,n[2]=s*l+a*o,n[3]=a*l-s*o,n}function Gw(n,e,t,i){let r=e[0],s=e[1],a=e[2],o=e[3],l=t[0],u=t[1],c=t[2],h=t[3],f,p,g,_,m;return p=r*l+s*u+a*c+o*h,p<0&&(p=-p,l=-l,u=-u,c=-c,h=-h),1-p>1e-6?(f=Math.acos(p),g=Math.sin(f),_=Math.sin((1-i)*f)/g,m=Math.sin(i*f)/g):(_=1-i,m=i),n[0]=_*r+m*l,n[1]=_*s+m*u,n[2]=_*a+m*c,n[3]=_*o+m*h,n}function Hw(n,e){let t=e[0],i=e[1],r=e[2],s=e[3],a=t*t+i*i+r*r+s*s,o=a?1/a:0;return n[0]=-t*o,n[1]=-i*o,n[2]=-r*o,n[3]=s*o,n}function Ww(n,e){return n[0]=-e[0],n[1]=-e[1],n[2]=-e[2],n[3]=e[3],n}function Xw(n,e){let t=e[0]+e[4]+e[8],i;if(t>0)i=Math.sqrt(t+1),n[3]=.5*i,i=.5/i,n[0]=(e[5]-e[7])*i,n[1]=(e[6]-e[2])*i,n[2]=(e[1]-e[3])*i;else{let r=0;e[4]>e[0]&&(r=1),e[8]>e[r*3+r]&&(r=2);let s=(r+1)%3,a=(r+2)%3;i=Math.sqrt(e[r*3+r]-e[s*3+s]-e[a*3+a]+1),n[r]=.5*i,i=.5/i,n[3]=(e[s*3+a]-e[a*3+s])*i,n[s]=(e[s*3+r]+e[r*3+s])*i,n[a]=(e[a*3+r]+e[r*3+a])*i}return n}function jw(n,e,t="YXZ"){let i=Math.sin(e[0]*.5),r=Math.cos(e[0]*.5),s=Math.sin(e[1]*.5),a=Math.cos(e[1]*.5),o=Math.sin(e[2]*.5),l=Math.cos(e[2]*.5);return t==="XYZ"?(n[0]=i*a*l+r*s*o,n[1]=r*s*l-i*a*o,n[2]=r*a*o+i*s*l,n[3]=r*a*l-i*s*o):t==="YXZ"?(n[0]=i*a*l+r*s*o,n[1]=r*s*l-i*a*o,n[2]=r*a*o-i*s*l,n[3]=r*a*l+i*s*o):t==="ZXY"?(n[0]=i*a*l-r*s*o,n[1]=r*s*l+i*a*o,n[2]=r*a*o+i*s*l,n[3]=r*a*l-i*s*o):t==="ZYX"?(n[0]=i*a*l-r*s*o,n[1]=r*s*l+i*a*o,n[2]=r*a*o-i*s*l,n[3]=r*a*l+i*s*o):t==="YZX"?(n[0]=i*a*l+r*s*o,n[1]=r*s*l+i*a*o,n[2]=r*a*o-i*s*l,n[3]=r*a*l-i*s*o):t==="XZY"&&(n[0]=i*a*l-r*s*o,n[1]=r*s*l-i*a*o,n[2]=r*a*o+i*s*l,n[3]=r*a*l+i*s*o),n}const Yw=Iw,qw=Uw,$w=Fw,Kw=Nw;class Zw extends Array{constructor(e=0,t=0,i=0,r=1){super(e,t,i,r),this.onChange=()=>{},this._target=this;const s=["0","1","2","3"];return new Proxy(this,{set(a,o){const l=Reflect.set(...arguments);return l&&s.includes(o)&&a.onChange(),l}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set w(e){this._target[3]=e,this.onChange()}identity(){return Ow(this._target),this.onChange(),this}set(e,t,i,r){return e.length?this.copy(e):(qw(this._target,e,t,i,r),this.onChange(),this)}rotateX(e){return kw(this._target,this._target,e),this.onChange(),this}rotateY(e){return zw(this._target,this._target,e),this.onChange(),this}rotateZ(e){return Vw(this._target,this._target,e),this.onChange(),this}inverse(e=this._target){return Hw(this._target,e),this.onChange(),this}conjugate(e=this._target){return Ww(this._target,e),this.onChange(),this}copy(e){return Yw(this._target,e),this.onChange(),this}normalize(e=this._target){return Kw(this._target,e),this.onChange(),this}multiply(e,t){return t?B0(this._target,e,t):B0(this._target,this._target,e),this.onChange(),this}dot(e){return $w(this._target,e)}fromMatrix3(e){return Xw(this._target,e),this.onChange(),this}fromEuler(e,t){return jw(this._target,e,e.order),t||this.onChange(),this}fromAxisAngle(e,t){return Bw(this._target,e,t),this.onChange(),this}slerp(e,t){return Gw(this._target,this._target,e,t),this.onChange(),this}fromArray(e,t=0){return this._target[0]=e[t],this._target[1]=e[t+1],this._target[2]=e[t+2],this._target[3]=e[t+3],this.onChange(),this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e[t+3]=this[3],e}}const Qw=1e-6;function Jw(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n}function eA(n,e,t,i,r,s,a,o,l,u,c,h,f,p,g,_,m){return n[0]=e,n[1]=t,n[2]=i,n[3]=r,n[4]=s,n[5]=a,n[6]=o,n[7]=l,n[8]=u,n[9]=c,n[10]=h,n[11]=f,n[12]=p,n[13]=g,n[14]=_,n[15]=m,n}function tA(n){return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function nA(n,e){let t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],h=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],v=t*o-i*a,x=t*l-r*a,S=t*u-s*a,T=i*l-r*o,M=i*u-s*o,w=r*u-s*l,y=c*_-h*g,A=c*m-f*g,b=c*d-p*g,P=h*m-f*_,D=h*d-p*_,k=f*d-p*m,O=v*k-x*D+S*P+T*b-M*A+w*y;return O?(O=1/O,n[0]=(o*k-l*D+u*P)*O,n[1]=(r*D-i*k-s*P)*O,n[2]=(_*w-m*M+d*T)*O,n[3]=(f*M-h*w-p*T)*O,n[4]=(l*b-a*k-u*A)*O,n[5]=(t*k-r*b+s*A)*O,n[6]=(m*S-g*w-d*x)*O,n[7]=(c*w-f*S+p*x)*O,n[8]=(a*D-o*b+u*y)*O,n[9]=(i*b-t*D-s*y)*O,n[10]=(g*M-_*S+d*v)*O,n[11]=(h*S-c*M-p*v)*O,n[12]=(o*A-a*P-l*y)*O,n[13]=(t*P-i*A+r*y)*O,n[14]=(_*x-g*T-m*v)*O,n[15]=(c*T-h*x+f*v)*O,n):null}function ky(n){let e=n[0],t=n[1],i=n[2],r=n[3],s=n[4],a=n[5],o=n[6],l=n[7],u=n[8],c=n[9],h=n[10],f=n[11],p=n[12],g=n[13],_=n[14],m=n[15],d=e*a-t*s,v=e*o-i*s,x=e*l-r*s,S=t*o-i*a,T=t*l-r*a,M=i*l-r*o,w=u*g-c*p,y=u*_-h*p,A=u*m-f*p,b=c*_-h*g,P=c*m-f*g,D=h*m-f*_;return d*D-v*P+x*b+S*A-T*y+M*w}function k0(n,e,t){let i=e[0],r=e[1],s=e[2],a=e[3],o=e[4],l=e[5],u=e[6],c=e[7],h=e[8],f=e[9],p=e[10],g=e[11],_=e[12],m=e[13],d=e[14],v=e[15],x=t[0],S=t[1],T=t[2],M=t[3];return n[0]=x*i+S*o+T*h+M*_,n[1]=x*r+S*l+T*f+M*m,n[2]=x*s+S*u+T*p+M*d,n[3]=x*a+S*c+T*g+M*v,x=t[4],S=t[5],T=t[6],M=t[7],n[4]=x*i+S*o+T*h+M*_,n[5]=x*r+S*l+T*f+M*m,n[6]=x*s+S*u+T*p+M*d,n[7]=x*a+S*c+T*g+M*v,x=t[8],S=t[9],T=t[10],M=t[11],n[8]=x*i+S*o+T*h+M*_,n[9]=x*r+S*l+T*f+M*m,n[10]=x*s+S*u+T*p+M*d,n[11]=x*a+S*c+T*g+M*v,x=t[12],S=t[13],T=t[14],M=t[15],n[12]=x*i+S*o+T*h+M*_,n[13]=x*r+S*l+T*f+M*m,n[14]=x*s+S*u+T*p+M*d,n[15]=x*a+S*c+T*g+M*v,n}function iA(n,e,t){let i=t[0],r=t[1],s=t[2],a,o,l,u,c,h,f,p,g,_,m,d;return e===n?(n[12]=e[0]*i+e[4]*r+e[8]*s+e[12],n[13]=e[1]*i+e[5]*r+e[9]*s+e[13],n[14]=e[2]*i+e[6]*r+e[10]*s+e[14],n[15]=e[3]*i+e[7]*r+e[11]*s+e[15]):(a=e[0],o=e[1],l=e[2],u=e[3],c=e[4],h=e[5],f=e[6],p=e[7],g=e[8],_=e[9],m=e[10],d=e[11],n[0]=a,n[1]=o,n[2]=l,n[3]=u,n[4]=c,n[5]=h,n[6]=f,n[7]=p,n[8]=g,n[9]=_,n[10]=m,n[11]=d,n[12]=a*i+c*r+g*s+e[12],n[13]=o*i+h*r+_*s+e[13],n[14]=l*i+f*r+m*s+e[14],n[15]=u*i+p*r+d*s+e[15]),n}function rA(n,e,t){let i=t[0],r=t[1],s=t[2];return n[0]=e[0]*i,n[1]=e[1]*i,n[2]=e[2]*i,n[3]=e[3]*i,n[4]=e[4]*r,n[5]=e[5]*r,n[6]=e[6]*r,n[7]=e[7]*r,n[8]=e[8]*s,n[9]=e[9]*s,n[10]=e[10]*s,n[11]=e[11]*s,n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n}function sA(n,e,t,i){let r=i[0],s=i[1],a=i[2],o=Math.hypot(r,s,a),l,u,c,h,f,p,g,_,m,d,v,x,S,T,M,w,y,A,b,P,D,k,O,L;return Math.abs(o)<Qw?null:(o=1/o,r*=o,s*=o,a*=o,l=Math.sin(t),u=Math.cos(t),c=1-u,h=e[0],f=e[1],p=e[2],g=e[3],_=e[4],m=e[5],d=e[6],v=e[7],x=e[8],S=e[9],T=e[10],M=e[11],w=r*r*c+u,y=s*r*c+a*l,A=a*r*c-s*l,b=r*s*c-a*l,P=s*s*c+u,D=a*s*c+r*l,k=r*a*c+s*l,O=s*a*c-r*l,L=a*a*c+u,n[0]=h*w+_*y+x*A,n[1]=f*w+m*y+S*A,n[2]=p*w+d*y+T*A,n[3]=g*w+v*y+M*A,n[4]=h*b+_*P+x*D,n[5]=f*b+m*P+S*D,n[6]=p*b+d*P+T*D,n[7]=g*b+v*P+M*D,n[8]=h*k+_*O+x*L,n[9]=f*k+m*O+S*L,n[10]=p*k+d*O+T*L,n[11]=g*k+v*O+M*L,e!==n&&(n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n)}function aA(n,e){return n[0]=e[12],n[1]=e[13],n[2]=e[14],n}function zy(n,e){let t=e[0],i=e[1],r=e[2],s=e[4],a=e[5],o=e[6],l=e[8],u=e[9],c=e[10];return n[0]=Math.hypot(t,i,r),n[1]=Math.hypot(s,a,o),n[2]=Math.hypot(l,u,c),n}function oA(n){let e=n[0],t=n[1],i=n[2],r=n[4],s=n[5],a=n[6],o=n[8],l=n[9],u=n[10];const c=e*e+t*t+i*i,h=r*r+s*s+a*a,f=o*o+l*l+u*u;return Math.sqrt(Math.max(c,h,f))}const Vy=function(){const n=[1,1,1];return function(e,t){let i=n;zy(i,t);let r=1/i[0],s=1/i[1],a=1/i[2],o=t[0]*r,l=t[1]*s,u=t[2]*a,c=t[4]*r,h=t[5]*s,f=t[6]*a,p=t[8]*r,g=t[9]*s,_=t[10]*a,m=o+h+_,d=0;return m>0?(d=Math.sqrt(m+1)*2,e[3]=.25*d,e[0]=(f-g)/d,e[1]=(p-u)/d,e[2]=(l-c)/d):o>h&&o>_?(d=Math.sqrt(1+o-h-_)*2,e[3]=(f-g)/d,e[0]=.25*d,e[1]=(l+c)/d,e[2]=(p+u)/d):h>_?(d=Math.sqrt(1+h-o-_)*2,e[3]=(p-u)/d,e[0]=(l+c)/d,e[1]=.25*d,e[2]=(f+g)/d):(d=Math.sqrt(1+_-o-h)*2,e[3]=(l-c)/d,e[0]=(p+u)/d,e[1]=(f+g)/d,e[2]=.25*d),e}}();function lA(n,e,t,i){let r=zo([n[0],n[1],n[2]]);const s=zo([n[4],n[5],n[6]]),a=zo([n[8],n[9],n[10]]);ky(n)<0&&(r=-r),t[0]=n[12],t[1]=n[13],t[2]=n[14];const l=n.slice(),u=1/r,c=1/s,h=1/a;l[0]*=u,l[1]*=u,l[2]*=u,l[4]*=c,l[5]*=c,l[6]*=c,l[8]*=h,l[9]*=h,l[10]*=h,Vy(e,l),i[0]=r,i[1]=s,i[2]=a}function uA(n,e,t,i){const r=n,s=e[0],a=e[1],o=e[2],l=e[3],u=s+s,c=a+a,h=o+o,f=s*u,p=s*c,g=s*h,_=a*c,m=a*h,d=o*h,v=l*u,x=l*c,S=l*h,T=i[0],M=i[1],w=i[2];return r[0]=(1-(_+d))*T,r[1]=(p+S)*T,r[2]=(g-x)*T,r[3]=0,r[4]=(p-S)*M,r[5]=(1-(f+d))*M,r[6]=(m+v)*M,r[7]=0,r[8]=(g+x)*w,r[9]=(m-v)*w,r[10]=(1-(f+_))*w,r[11]=0,r[12]=t[0],r[13]=t[1],r[14]=t[2],r[15]=1,r}function cA(n,e){let t=e[0],i=e[1],r=e[2],s=e[3],a=t+t,o=i+i,l=r+r,u=t*a,c=i*a,h=i*o,f=r*a,p=r*o,g=r*l,_=s*a,m=s*o,d=s*l;return n[0]=1-h-g,n[1]=c+d,n[2]=f-m,n[3]=0,n[4]=c-d,n[5]=1-u-g,n[6]=p+_,n[7]=0,n[8]=f+m,n[9]=p-_,n[10]=1-u-h,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function fA(n,e,t,i,r){let s=1/Math.tan(e/2),a=1/(i-r);return n[0]=s/t,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=s,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=(r+i)*a,n[11]=-1,n[12]=0,n[13]=0,n[14]=2*r*i*a,n[15]=0,n}function hA(n,e,t,i,r,s,a){let o=1/(e-t),l=1/(i-r),u=1/(s-a);return n[0]=-2*o,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=-2*l,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=2*u,n[11]=0,n[12]=(e+t)*o,n[13]=(r+i)*l,n[14]=(a+s)*u,n[15]=1,n}function dA(n,e,t,i){let r=e[0],s=e[1],a=e[2],o=i[0],l=i[1],u=i[2],c=r-t[0],h=s-t[1],f=a-t[2],p=c*c+h*h+f*f;p===0?f=1:(p=1/Math.sqrt(p),c*=p,h*=p,f*=p);let g=l*f-u*h,_=u*c-o*f,m=o*h-l*c;return p=g*g+_*_+m*m,p===0&&(u?o+=1e-6:l?u+=1e-6:l+=1e-6,g=l*f-u*h,_=u*c-o*f,m=o*h-l*c,p=g*g+_*_+m*m),p=1/Math.sqrt(p),g*=p,_*=p,m*=p,n[0]=g,n[1]=_,n[2]=m,n[3]=0,n[4]=h*m-f*_,n[5]=f*g-c*m,n[6]=c*_-h*g,n[7]=0,n[8]=c,n[9]=h,n[10]=f,n[11]=0,n[12]=r,n[13]=s,n[14]=a,n[15]=1,n}function z0(n,e,t){return n[0]=e[0]+t[0],n[1]=e[1]+t[1],n[2]=e[2]+t[2],n[3]=e[3]+t[3],n[4]=e[4]+t[4],n[5]=e[5]+t[5],n[6]=e[6]+t[6],n[7]=e[7]+t[7],n[8]=e[8]+t[8],n[9]=e[9]+t[9],n[10]=e[10]+t[10],n[11]=e[11]+t[11],n[12]=e[12]+t[12],n[13]=e[13]+t[13],n[14]=e[14]+t[14],n[15]=e[15]+t[15],n}function V0(n,e,t){return n[0]=e[0]-t[0],n[1]=e[1]-t[1],n[2]=e[2]-t[2],n[3]=e[3]-t[3],n[4]=e[4]-t[4],n[5]=e[5]-t[5],n[6]=e[6]-t[6],n[7]=e[7]-t[7],n[8]=e[8]-t[8],n[9]=e[9]-t[9],n[10]=e[10]-t[10],n[11]=e[11]-t[11],n[12]=e[12]-t[12],n[13]=e[13]-t[13],n[14]=e[14]-t[14],n[15]=e[15]-t[15],n}function pA(n,e,t){return n[0]=e[0]*t,n[1]=e[1]*t,n[2]=e[2]*t,n[3]=e[3]*t,n[4]=e[4]*t,n[5]=e[5]*t,n[6]=e[6]*t,n[7]=e[7]*t,n[8]=e[8]*t,n[9]=e[9]*t,n[10]=e[10]*t,n[11]=e[11]*t,n[12]=e[12]*t,n[13]=e[13]*t,n[14]=e[14]*t,n[15]=e[15]*t,n}class Zr extends Array{constructor(e=1,t=0,i=0,r=0,s=0,a=1,o=0,l=0,u=0,c=0,h=1,f=0,p=0,g=0,_=0,m=1){return super(e,t,i,r,s,a,o,l,u,c,h,f,p,g,_,m),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(e){this[12]=e}set y(e){this[13]=e}set z(e){this[14]=e}set w(e){this[15]=e}set(e,t,i,r,s,a,o,l,u,c,h,f,p,g,_,m){return e.length?this.copy(e):(eA(this,e,t,i,r,s,a,o,l,u,c,h,f,p,g,_,m),this)}translate(e,t=this){return iA(this,t,e),this}rotate(e,t,i=this){return sA(this,i,e,t),this}scale(e,t=this){return rA(this,t,typeof e=="number"?[e,e,e]:e),this}add(e,t){return t?z0(this,e,t):z0(this,this,e),this}sub(e,t){return t?V0(this,e,t):V0(this,this,e),this}multiply(e,t){return e.length?t?k0(this,e,t):k0(this,this,e):pA(this,this,e),this}identity(){return tA(this),this}copy(e){return Jw(this,e),this}fromPerspective({fov:e,aspect:t,near:i,far:r}={}){return fA(this,e,t,i,r),this}fromOrthogonal({left:e,right:t,bottom:i,top:r,near:s,far:a}){return hA(this,e,t,i,r,s,a),this}fromQuaternion(e){return cA(this,e),this}setPosition(e){return this.x=e[0],this.y=e[1],this.z=e[2],this}inverse(e=this){return nA(this,e),this}compose(e,t,i){return uA(this,e,t,i),this}decompose(e,t,i){return lA(this,e,t,i),this}getRotation(e){return Vy(e,this),this}getTranslation(e){return aA(e,this),this}getScaling(e){return zy(e,this),this}getMaxScaleOnAxis(){return oA(this)}lookAt(e,t,i){return dA(this,e,t,i),this}determinant(){return ky(this)}fromArray(e,t=0){return this[0]=e[t],this[1]=e[t+1],this[2]=e[t+2],this[3]=e[t+3],this[4]=e[t+4],this[5]=e[t+5],this[6]=e[t+6],this[7]=e[t+7],this[8]=e[t+8],this[9]=e[t+9],this[10]=e[t+10],this[11]=e[t+11],this[12]=e[t+12],this[13]=e[t+13],this[14]=e[t+14],this[15]=e[t+15],this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e[t+3]=this[3],e[t+4]=this[4],e[t+5]=this[5],e[t+6]=this[6],e[t+7]=this[7],e[t+8]=this[8],e[t+9]=this[9],e[t+10]=this[10],e[t+11]=this[11],e[t+12]=this[12],e[t+13]=this[13],e[t+14]=this[14],e[t+15]=this[15],e}}function mA(n,e,t="YXZ"){return t==="XYZ"?(n[1]=Math.asin(Math.min(Math.max(e[8],-1),1)),Math.abs(e[8])<.99999?(n[0]=Math.atan2(-e[9],e[10]),n[2]=Math.atan2(-e[4],e[0])):(n[0]=Math.atan2(e[6],e[5]),n[2]=0)):t==="YXZ"?(n[0]=Math.asin(-Math.min(Math.max(e[9],-1),1)),Math.abs(e[9])<.99999?(n[1]=Math.atan2(e[8],e[10]),n[2]=Math.atan2(e[1],e[5])):(n[1]=Math.atan2(-e[2],e[0]),n[2]=0)):t==="ZXY"?(n[0]=Math.asin(Math.min(Math.max(e[6],-1),1)),Math.abs(e[6])<.99999?(n[1]=Math.atan2(-e[2],e[10]),n[2]=Math.atan2(-e[4],e[5])):(n[1]=0,n[2]=Math.atan2(e[1],e[0]))):t==="ZYX"?(n[1]=Math.asin(-Math.min(Math.max(e[2],-1),1)),Math.abs(e[2])<.99999?(n[0]=Math.atan2(e[6],e[10]),n[2]=Math.atan2(e[1],e[0])):(n[0]=0,n[2]=Math.atan2(-e[4],e[5]))):t==="YZX"?(n[2]=Math.asin(Math.min(Math.max(e[1],-1),1)),Math.abs(e[1])<.99999?(n[0]=Math.atan2(-e[9],e[5]),n[1]=Math.atan2(-e[2],e[0])):(n[0]=0,n[1]=Math.atan2(e[8],e[10]))):t==="XZY"&&(n[2]=Math.asin(-Math.min(Math.max(e[4],-1),1)),Math.abs(e[4])<.99999?(n[0]=Math.atan2(e[6],e[5]),n[1]=Math.atan2(e[8],e[0])):(n[0]=Math.atan2(-e[9],e[10]),n[1]=0)),n}const G0=new Zr;let gA=class extends Array{constructor(e=0,t=e,i=e,r="YXZ"){super(e,t,i),this.order=r,this.onChange=()=>{},this._target=this;const s=["0","1","2"];return new Proxy(this,{set(a,o){const l=Reflect.set(...arguments);return l&&s.includes(o)&&a.onChange(),l}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set(e,t=e,i=e){return e.length?this.copy(e):(this._target[0]=e,this._target[1]=t,this._target[2]=i,this.onChange(),this)}copy(e){return this._target[0]=e[0],this._target[1]=e[1],this._target[2]=e[2],this.onChange(),this}reorder(e){return this._target.order=e,this.onChange(),this}fromRotationMatrix(e,t=this.order){return mA(this._target,e,t),this.onChange(),this}fromQuaternion(e,t=this.order,i){return G0.fromQuaternion(e),this._target.fromRotationMatrix(G0,t),i||this.onChange(),this}fromArray(e,t=0){return this._target[0]=e[t],this._target[1]=e[t+1],this._target[2]=e[t+2],this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e}};class ym{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new Zr,this.worldMatrix=new Zr,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new Bt,this.quaternion=new Zw,this.scale=new Bt(1),this.rotation=new gA,this.up=new Bt(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(e,t=!0){this.parent&&e!==this.parent&&this.parent.removeChild(this,!1),this.parent=e,t&&e&&e.addChild(this,!1)}addChild(e,t=!0){~this.children.indexOf(e)||this.children.push(e),t&&e.setParent(this,!1)}removeChild(e,t=!0){~this.children.indexOf(e)&&this.children.splice(this.children.indexOf(e),1),t&&e.setParent(null,!1)}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||e)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,e=!0);for(let t=0,i=this.children.length;t<i;t++)this.children[t].updateMatrixWorld(e)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(e){if(!e(this))for(let t=0,i=this.children.length;t<i;t++)this.children[t].traverse(e)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(e,t=!1){t?this.matrix.lookAt(this.position,e,this.up):this.matrix.lookAt(e,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}}const _A=new Zr,vA=new Bt,xA=new Bt;let yA=class extends ym{constructor(e,{near:t=.1,far:i=100,fov:r=45,aspect:s=1,left:a,right:o,bottom:l,top:u,zoom:c=1}={}){super(),Object.assign(this,{near:t,far:i,fov:r,aspect:s,left:a,right:o,bottom:l,top:u,zoom:c}),this.projectionMatrix=new Zr,this.viewMatrix=new Zr,this.projectionViewMatrix=new Zr,this.worldPosition=new Bt,this.type=a||o?"orthographic":"perspective",this.type==="orthographic"?this.orthographic():this.perspective()}perspective({near:e=this.near,far:t=this.far,fov:i=this.fov,aspect:r=this.aspect}={}){return Object.assign(this,{near:e,far:t,fov:i,aspect:r}),this.projectionMatrix.fromPerspective({fov:i*(Math.PI/180),aspect:r,near:e,far:t}),this.type="perspective",this}orthographic({near:e=this.near,far:t=this.far,left:i=this.left||-1,right:r=this.right||1,bottom:s=this.bottom||-1,top:a=this.top||1,zoom:o=this.zoom}={}){return Object.assign(this,{near:e,far:t,left:i,right:r,bottom:s,top:a,zoom:o}),i/=o,r/=o,s/=o,a/=o,this.projectionMatrix.fromOrthogonal({left:i,right:r,bottom:s,top:a,near:e,far:t}),this.type="orthographic",this}updateMatrixWorld(){return super.updateMatrixWorld(),this.viewMatrix.inverse(this.worldMatrix),this.worldMatrix.getTranslation(this.worldPosition),this.projectionViewMatrix.multiply(this.projectionMatrix,this.viewMatrix),this}updateProjectionMatrix(){return this.type==="perspective"?this.perspective():this.orthographic()}lookAt(e){return super.lookAt(e,!0),this}project(e){return e.applyMatrix4(this.viewMatrix),e.applyMatrix4(this.projectionMatrix),this}unproject(e){return e.applyMatrix4(_A.inverse(this.projectionMatrix)),e.applyMatrix4(this.worldMatrix),this}updateFrustum(){this.frustum||(this.frustum=[new Bt,new Bt,new Bt,new Bt,new Bt,new Bt]);const e=this.projectionViewMatrix;this.frustum[0].set(e[3]-e[0],e[7]-e[4],e[11]-e[8]).constant=e[15]-e[12],this.frustum[1].set(e[3]+e[0],e[7]+e[4],e[11]+e[8]).constant=e[15]+e[12],this.frustum[2].set(e[3]+e[1],e[7]+e[5],e[11]+e[9]).constant=e[15]+e[13],this.frustum[3].set(e[3]-e[1],e[7]-e[5],e[11]-e[9]).constant=e[15]-e[13],this.frustum[4].set(e[3]-e[2],e[7]-e[6],e[11]-e[10]).constant=e[15]-e[14],this.frustum[5].set(e[3]+e[2],e[7]+e[6],e[11]+e[10]).constant=e[15]+e[14];for(let t=0;t<6;t++){const i=1/this.frustum[t].distance();this.frustum[t].multiply(i),this.frustum[t].constant*=i}}frustumIntersectsMesh(e,t=e.worldMatrix){if(!e.geometry.attributes.position||((!e.geometry.bounds||e.geometry.bounds.radius===1/0)&&e.geometry.computeBoundingSphere(),!e.geometry.bounds))return!0;const i=vA;i.copy(e.geometry.bounds.center),i.applyMatrix4(t);const r=e.geometry.bounds.radius*t.getMaxScaleOnAxis();return this.frustumIntersectsSphere(i,r)}frustumIntersectsSphere(e,t){const i=xA;for(let r=0;r<6;r++){const s=this.frustum[r];if(i.copy(s).dot(e)+s.constant<-t)return!1}return!0}};function SA(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[4],n[4]=e[5],n[5]=e[6],n[6]=e[8],n[7]=e[9],n[8]=e[10],n}function MA(n,e){let t=e[0],i=e[1],r=e[2],s=e[3],a=t+t,o=i+i,l=r+r,u=t*a,c=i*a,h=i*o,f=r*a,p=r*o,g=r*l,_=s*a,m=s*o,d=s*l;return n[0]=1-h-g,n[3]=c-d,n[6]=f+m,n[1]=c+d,n[4]=1-u-g,n[7]=p-_,n[2]=f-m,n[5]=p+_,n[8]=1-u-h,n}function EA(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n}function TA(n,e,t,i,r,s,a,o,l,u){return n[0]=e,n[1]=t,n[2]=i,n[3]=r,n[4]=s,n[5]=a,n[6]=o,n[7]=l,n[8]=u,n}function wA(n){return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=1,n[5]=0,n[6]=0,n[7]=0,n[8]=1,n}function AA(n,e){let t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],h=c*a-o*u,f=-c*s+o*l,p=u*s-a*l,g=t*h+i*f+r*p;return g?(g=1/g,n[0]=h*g,n[1]=(-c*i+r*u)*g,n[2]=(o*i-r*a)*g,n[3]=f*g,n[4]=(c*t-r*l)*g,n[5]=(-o*t+r*s)*g,n[6]=p*g,n[7]=(-u*t+i*l)*g,n[8]=(a*t-i*s)*g,n):null}function H0(n,e,t){let i=e[0],r=e[1],s=e[2],a=e[3],o=e[4],l=e[5],u=e[6],c=e[7],h=e[8],f=t[0],p=t[1],g=t[2],_=t[3],m=t[4],d=t[5],v=t[6],x=t[7],S=t[8];return n[0]=f*i+p*a+g*u,n[1]=f*r+p*o+g*c,n[2]=f*s+p*l+g*h,n[3]=_*i+m*a+d*u,n[4]=_*r+m*o+d*c,n[5]=_*s+m*l+d*h,n[6]=v*i+x*a+S*u,n[7]=v*r+x*o+S*c,n[8]=v*s+x*l+S*h,n}function CA(n,e,t){let i=e[0],r=e[1],s=e[2],a=e[3],o=e[4],l=e[5],u=e[6],c=e[7],h=e[8],f=t[0],p=t[1];return n[0]=i,n[1]=r,n[2]=s,n[3]=a,n[4]=o,n[5]=l,n[6]=f*i+p*a+u,n[7]=f*r+p*o+c,n[8]=f*s+p*l+h,n}function RA(n,e,t){let i=e[0],r=e[1],s=e[2],a=e[3],o=e[4],l=e[5],u=e[6],c=e[7],h=e[8],f=Math.sin(t),p=Math.cos(t);return n[0]=p*i+f*a,n[1]=p*r+f*o,n[2]=p*s+f*l,n[3]=p*a-f*i,n[4]=p*o-f*r,n[5]=p*l-f*s,n[6]=u,n[7]=c,n[8]=h,n}function bA(n,e,t){let i=t[0],r=t[1];return n[0]=i*e[0],n[1]=i*e[1],n[2]=i*e[2],n[3]=r*e[3],n[4]=r*e[4],n[5]=r*e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n}function PA(n,e){let t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],h=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],v=t*o-i*a,x=t*l-r*a,S=t*u-s*a,T=i*l-r*o,M=i*u-s*o,w=r*u-s*l,y=c*_-h*g,A=c*m-f*g,b=c*d-p*g,P=h*m-f*_,D=h*d-p*_,k=f*d-p*m,O=v*k-x*D+S*P+T*b-M*A+w*y;return O?(O=1/O,n[0]=(o*k-l*D+u*P)*O,n[1]=(l*b-a*k-u*A)*O,n[2]=(a*D-o*b+u*y)*O,n[3]=(r*D-i*k-s*P)*O,n[4]=(t*k-r*b+s*A)*O,n[5]=(i*b-t*D-s*y)*O,n[6]=(_*w-m*M+d*T)*O,n[7]=(m*S-g*w-d*x)*O,n[8]=(g*M-_*S+d*v)*O,n):null}class LA extends Array{constructor(e=1,t=0,i=0,r=0,s=1,a=0,o=0,l=0,u=1){return super(e,t,i,r,s,a,o,l,u),this}set(e,t,i,r,s,a,o,l,u){return e.length?this.copy(e):(TA(this,e,t,i,r,s,a,o,l,u),this)}translate(e,t=this){return CA(this,t,e),this}rotate(e,t=this){return RA(this,t,e),this}scale(e,t=this){return bA(this,t,e),this}multiply(e,t){return t?H0(this,e,t):H0(this,this,e),this}identity(){return wA(this),this}copy(e){return EA(this,e),this}fromMatrix4(e){return SA(this,e),this}fromQuaternion(e){return MA(this,e),this}fromBasis(e,t,i){return this.set(e[0],e[1],e[2],t[0],t[1],t[2],i[0],i[1],i[2]),this}inverse(e=this){return AA(this,e),this}getNormalMatrix(e){return PA(this,e),this}}let DA=0,Sm=class extends ym{constructor(e,{geometry:t,program:i,mode:r=e.TRIANGLES,frustumCulled:s=!0,renderOrder:a=0}={}){super(),e.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=e,this.id=DA++,this.geometry=t,this.program=i,this.mode=r,this.frustumCulled=s,this.renderOrder=a,this.modelViewMatrix=new Zr,this.normalMatrix=new LA,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(e){return this.beforeRenderCallbacks.push(e),this}onAfterRender(e){return this.afterRenderCallbacks.push(e),this}draw({camera:e}={}){e&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=e.projectionMatrix,this.program.uniforms.cameraPosition.value=e.worldPosition,this.program.uniforms.viewMatrix.value=e.viewMatrix,this.modelViewMatrix.multiply(e.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:e}));let t=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:t}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:e}))}};const W0=new Uint8Array(4);function X0(n){return(n&n-1)===0}let IA=1,Gy=class{constructor(e,{image:t,target:i=e.TEXTURE_2D,type:r=e.UNSIGNED_BYTE,format:s=e.RGBA,internalFormat:a=s,wrapS:o=e.CLAMP_TO_EDGE,wrapT:l=e.CLAMP_TO_EDGE,wrapR:u=e.CLAMP_TO_EDGE,generateMipmaps:c=i===(e.TEXTURE_2D||e.TEXTURE_CUBE_MAP),minFilter:h=c?e.NEAREST_MIPMAP_LINEAR:e.LINEAR,magFilter:f=e.LINEAR,premultiplyAlpha:p=!1,unpackAlignment:g=4,flipY:_=i==(e.TEXTURE_2D||e.TEXTURE_3D),anisotropy:m=0,level:d=0,width:v,height:x=v,length:S=1}={}){this.gl=e,this.id=IA++,this.image=t,this.target=i,this.type=r,this.format=s,this.internalFormat=a,this.minFilter=h,this.magFilter=f,this.wrapS=o,this.wrapT=l,this.wrapR=u,this.generateMipmaps=c,this.premultiplyAlpha=p,this.unpackAlignment=g,this.flipY=_,this.anisotropy=Math.min(m,this.gl.renderer.parameters.maxAnisotropy),this.level=d,this.width=v,this.height=x,this.length=S,this.texture=this.gl.createTexture(),this.store={image:null},this.glState=this.gl.renderer.state,this.state={},this.state.minFilter=this.gl.NEAREST_MIPMAP_LINEAR,this.state.magFilter=this.gl.LINEAR,this.state.wrapS=this.gl.REPEAT,this.state.wrapT=this.gl.REPEAT,this.state.anisotropy=0}bind(){this.glState.textureUnits[this.glState.activeTextureUnit]!==this.id&&(this.gl.bindTexture(this.target,this.texture),this.glState.textureUnits[this.glState.activeTextureUnit]=this.id)}update(e=0){const t=!(this.image===this.store.image&&!this.needsUpdate);if((t||this.glState.textureUnits[e]!==this.id)&&(this.gl.renderer.activeTexture(e),this.bind()),!!t){if(this.needsUpdate=!1,this.flipY!==this.glState.flipY&&(this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,this.flipY),this.glState.flipY=this.flipY),this.premultiplyAlpha!==this.glState.premultiplyAlpha&&(this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),this.glState.premultiplyAlpha=this.premultiplyAlpha),this.unpackAlignment!==this.glState.unpackAlignment&&(this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,this.unpackAlignment),this.glState.unpackAlignment=this.unpackAlignment),this.minFilter!==this.state.minFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MIN_FILTER,this.minFilter),this.state.minFilter=this.minFilter),this.magFilter!==this.state.magFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MAG_FILTER,this.magFilter),this.state.magFilter=this.magFilter),this.wrapS!==this.state.wrapS&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_S,this.wrapS),this.state.wrapS=this.wrapS),this.wrapT!==this.state.wrapT&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_T,this.wrapT),this.state.wrapT=this.wrapT),this.wrapR!==this.state.wrapR&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_R,this.wrapR),this.state.wrapR=this.wrapR),this.anisotropy&&this.anisotropy!==this.state.anisotropy&&(this.gl.texParameterf(this.target,this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropy),this.state.anisotropy=this.anisotropy),this.image){if(this.image.width&&(this.width=this.image.width,this.height=this.image.height),this.target===this.gl.TEXTURE_CUBE_MAP)for(let i=0;i<6;i++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+i,this.level,this.internalFormat,this.format,this.type,this.image[i]);else if(ArrayBuffer.isView(this.image))this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,this.image):(this.target===this.gl.TEXTURE_2D_ARRAY||this.target===this.gl.TEXTURE_3D)&&this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);else if(this.image.isCompressedTexture)for(let i=0;i<this.image.length;i++)this.gl.compressedTexImage2D(this.target,i,this.internalFormat,this.image[i].width,this.image[i].height,0,this.image[i].data);else this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.format,this.type,this.image):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);this.generateMipmaps&&(!this.gl.renderer.isWebgl2&&(!X0(this.image.width)||!X0(this.image.height))?(this.generateMipmaps=!1,this.wrapS=this.wrapT=this.gl.CLAMP_TO_EDGE,this.minFilter=this.gl.LINEAR):this.gl.generateMipmap(this.target)),this.onUpdate&&this.onUpdate()}else if(this.target===this.gl.TEXTURE_CUBE_MAP)for(let i=0;i<6;i++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,W0);else this.width?this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,null):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,null):this.gl.texImage2D(this.target,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,W0);this.store.image=this.image}}};const j0={black:"#000000",white:"#ffffff",red:"#ff0000",green:"#00ff00",blue:"#0000ff",fuchsia:"#ff00ff",cyan:"#00ffff",yellow:"#ffff00",orange:"#ff8000"};function Y0(n){n.length===4&&(n=n[0]+n[1]+n[1]+n[2]+n[2]+n[3]+n[3]);const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);return e||console.warn(`Unable to convert hex string ${n} to rgb values`),[parseInt(e[1],16)/255,parseInt(e[2],16)/255,parseInt(e[3],16)/255]}function UA(n){return n=parseInt(n),[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255]}function q0(n){return n===void 0?[0,0,0]:arguments.length===3?arguments:isNaN(n)?n[0]==="#"?Y0(n):j0[n.toLowerCase()]?Y0(j0[n.toLowerCase()]):(console.warn("Color format not recognised"),[0,0,0]):UA(n)}let Df=class extends Array{constructor(e){return Array.isArray(e)?super(...e):super(...q0(...arguments))}get r(){return this[0]}get g(){return this[1]}get b(){return this[2]}set r(e){this[0]=e}set g(e){this[1]=e}set b(e){this[2]=e}set(e){return Array.isArray(e)?this.copy(e):this.copy(q0(...arguments))}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this}},Hy=class Wy extends Oy{constructor(e,{width:t=1,height:i=1,widthSegments:r=1,heightSegments:s=1,attributes:a={}}={}){const o=r,l=s,u=(o+1)*(l+1),c=o*l*6,h=new Float32Array(u*3),f=new Float32Array(u*3),p=new Float32Array(u*2),g=c>65536?new Uint32Array(c):new Uint16Array(c);Wy.buildPlane(h,f,p,g,t,i,0,o,l),Object.assign(a,{position:{size:3,data:h},normal:{size:3,data:f},uv:{size:2,data:p},index:{data:g}}),super(e,a)}static buildPlane(e,t,i,r,s,a,o,l,u,c=0,h=1,f=2,p=1,g=-1,_=0,m=0){const d=_,v=s/l,x=a/u;for(let S=0;S<=u;S++){let T=S*x-a/2;for(let M=0;M<=l;M++,_++){let w=M*v-s/2;if(e[_*3+c]=w*p,e[_*3+h]=T*g,e[_*3+f]=o/2,t[_*3+c]=0,t[_*3+h]=0,t[_*3+f]=o>=0?1:-1,i[_*2]=M/l,i[_*2+1]=1-S/u,S===u||M===l)continue;let y=d+M+S*(l+1),A=d+M+(S+1)*(l+1),b=d+M+(S+1)*(l+1)+1,P=d+M+S*(l+1)+1;r[m*6]=y,r[m*6+1]=A,r[m*6+2]=P,r[m*6+3]=A,r[m*6+4]=b,r[m*6+5]=P,m++}}}},NA=class extends Oy{constructor(e,{attributes:t={}}={}){Object.assign(t,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(e,t)}};const FA=`
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`,OA=`
precision mediump float;

varying vec2 vUv;

uniform float iTime;
uniform vec3  iResolution;
uniform float uScale;

uniform vec2  uGridMul;
uniform float uDigitSize;
uniform float uScanlineIntensity;
uniform float uGlitchAmount;
uniform float uFlickerAmount;
uniform float uNoiseAmp;
uniform float uChromaticAberration;
uniform float uDither;
uniform float uCurvature;
uniform vec3  uTint;
uniform vec2  uMouse;
uniform float uMouseStrength;
uniform float uUseMouse;
uniform float uPageLoadProgress;
uniform float uUsePageLoadAnimation;
uniform float uBrightness;

float time;

float hash21(vec2 p){
  p = fract(p * 234.56);
  p += dot(p, p + 34.56);
  return fract(p.x * p.y);
}

float noise(vec2 p)
{
  return sin(p.x * 10.0) * sin(p.y * (3.0 + sin(time * 0.090909))) + 0.2; 
}

mat2 rotate(float angle)
{
  float c = cos(angle);
  float s = sin(angle);
  return mat2(c, -s, s, c);
}

float fbm(vec2 p)
{
  p *= 1.1;
  float f = 0.0;
  float amp = 0.5 * uNoiseAmp;
  
  mat2 modify0 = rotate(time * 0.02);
  f += amp * noise(p);
  p = modify0 * p * 2.0;
  amp *= 0.454545;
  
  mat2 modify1 = rotate(time * 0.02);
  f += amp * noise(p);
  p = modify1 * p * 2.0;
  amp *= 0.454545;
  
  mat2 modify2 = rotate(time * 0.08);
  f += amp * noise(p);
  
  return f;
}

float pattern(vec2 p, out vec2 q, out vec2 r) {
  vec2 offset1 = vec2(1.0);
  vec2 offset0 = vec2(0.0);
  mat2 rot01 = rotate(0.1 * time);
  mat2 rot1 = rotate(0.1);
  
  q = vec2(fbm(p + offset1), fbm(rot01 * p + offset1));
  r = vec2(fbm(rot1 * q + offset0), fbm(q + offset0));
  return fbm(p + r);
}

float digit(vec2 p){
    vec2 grid = uGridMul * 15.0;
    vec2 s = floor(p * grid) / grid;
    p = p * grid;
    vec2 q, r;
    float intensity = pattern(s * 0.1, q, r) * 1.3 - 0.03;
    
    if(uUseMouse > 0.5){
        vec2 mouseWorld = uMouse * uScale;
        float distToMouse = distance(s, mouseWorld);
        float mouseInfluence = exp(-distToMouse * 8.0) * uMouseStrength * 10.0;
        intensity += mouseInfluence;
        
        float ripple = sin(distToMouse * 20.0 - iTime * 5.0) * 0.1 * mouseInfluence;
        intensity += ripple;
    }
    
    if(uUsePageLoadAnimation > 0.5){
        float cellRandom = fract(sin(dot(s, vec2(12.9898, 78.233))) * 43758.5453);
        float cellDelay = cellRandom * 0.8;
        float cellProgress = clamp((uPageLoadProgress - cellDelay) / 0.2, 0.0, 1.0);
        
        float fadeAlpha = smoothstep(0.0, 1.0, cellProgress);
        intensity *= fadeAlpha;
    }
    
    p = fract(p);
    p *= uDigitSize;
    
    float px5 = p.x * 5.0;
    float py5 = (1.0 - p.y) * 5.0;
    float x = fract(px5);
    float y = fract(py5);
    
    float i = floor(py5) - 2.0;
    float j = floor(px5) - 2.0;
    float n = i * i + j * j;
    float f = n * 0.0625;
    
    float isOn = step(0.1, intensity - f);
    float brightness = isOn * (0.2 + y * 0.8) * (0.75 + x * 0.25);
    
    return step(0.0, p.x) * step(p.x, 1.0) * step(0.0, p.y) * step(p.y, 1.0) * brightness;
}

float onOff(float a, float b, float c)
{
  return step(c, sin(iTime + a * cos(iTime * b))) * uFlickerAmount;
}

float displace(vec2 look)
{
    float y = look.y - mod(iTime * 0.25, 1.0);
    float window = 1.0 / (1.0 + 50.0 * y * y);
    return sin(look.y * 20.0 + iTime) * 0.0125 * onOff(4.0, 2.0, 0.8) * (1.0 + cos(iTime * 60.0)) * window;
}

vec3 getColor(vec2 p){
    
    float bar = step(mod(p.y + time * 20.0, 1.0), 0.2) * 0.4 + 1.0;
    bar *= uScanlineIntensity;
    
    float displacement = displace(p);
    p.x += displacement;

    if (uGlitchAmount != 1.0) {
      float extra = displacement * (uGlitchAmount - 1.0);
      p.x += extra;
    }

    float middle = digit(p);
    
    const float off = 0.002;
    float sum = digit(p + vec2(-off, -off)) + digit(p + vec2(0.0, -off)) + digit(p + vec2(off, -off)) +
                digit(p + vec2(-off, 0.0)) + digit(p + vec2(0.0, 0.0)) + digit(p + vec2(off, 0.0)) +
                digit(p + vec2(-off, off)) + digit(p + vec2(0.0, off)) + digit(p + vec2(off, off));
    
    vec3 baseColor = vec3(0.9) * middle + sum * 0.1 * vec3(1.0) * bar;
    return baseColor;
}

vec2 barrel(vec2 uv){
  vec2 c = uv * 2.0 - 1.0;
  float r2 = dot(c, c);
  c *= 1.0 + uCurvature * r2;
  return c * 0.5 + 0.5;
}

void main() {
    time = iTime * 0.333333;
    vec2 uv = vUv;

    if(uCurvature != 0.0){
      uv = barrel(uv);
    }
    
    vec2 p = uv * uScale;
    vec3 col = getColor(p);

    if(uChromaticAberration != 0.0){
      vec2 ca = vec2(uChromaticAberration) / iResolution.xy;
      col.r = getColor(p + ca).r;
      col.b = getColor(p - ca).b;
    }

    col *= uTint;
    col *= uBrightness;

    if(uDither > 0.0){
      float rnd = hash21(gl_FragCoord.xy);
      col += (rnd - 0.5) * (uDither * 0.003922);
    }

    gl_FragColor = vec4(col, 1.0);
}
`;function BA(n){let e=n.replace("#","").trim();e.length===3&&(e=e.split("").map(i=>i+i).join(""));const t=parseInt(e,16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}function kA({scale:n=1,gridMul:e=[2,1],digitSize:t=1.5,timeScale:i=.3,pause:r=!1,scanlineIntensity:s=.3,glitchAmount:a=1,flickerAmount:o=1,noiseAmp:l=0,chromaticAberration:u=0,dither:c=0,curvature:h=.2,tint:f="#ffffff",mouseReact:p=!0,mouseStrength:g=.2,dpr:_=Math.min(window.devicePixelRatio||1,2),pageLoadAnimation:m=!0,brightness:d=1,className:v,style:x,...S}){const T=ie.useRef(null),M=ie.useRef(null),w=ie.useRef(null),y=ie.useRef({x:.5,y:.5}),A=ie.useRef({x:.5,y:.5}),b=ie.useRef(0),P=ie.useRef(0),D=ie.useRef(0),k=ie.useRef(Math.random()*100),O=ie.useMemo(()=>BA(f),[f]),L=ie.useMemo(()=>typeof c=="boolean"?c?1:0:c,[c]),z=ie.useCallback(U=>{const F=T.current;if(!F)return;const G=F.getBoundingClientRect(),$=(U.clientX-G.left)/G.width,ee=1-(U.clientY-G.top)/G.height;y.current={x:$,y:ee}},[]);return ie.useEffect(()=>{const U=T.current;if(!U)return;const F=new By({dpr:_});w.current=F;const G=F.gl;G.clearColor(0,0,0,1);const $=new NA(G),ee=new xm(G,{vertex:FA,fragment:OA,uniforms:{iTime:{value:0},iResolution:{value:new Df(G.canvas.width,G.canvas.height,G.canvas.width/G.canvas.height)},uScale:{value:n},uGridMul:{value:new Float32Array(e)},uDigitSize:{value:t},uScanlineIntensity:{value:s},uGlitchAmount:{value:a},uFlickerAmount:{value:o},uNoiseAmp:{value:l},uChromaticAberration:{value:u},uDither:{value:L},uCurvature:{value:h},uTint:{value:new Df(O[0],O[1],O[2])},uMouse:{value:new Float32Array([A.current.x,A.current.y])},uMouseStrength:{value:g},uUseMouse:{value:p?1:0},uPageLoadProgress:{value:m?0:1},uUsePageLoadAnimation:{value:m?1:0},uBrightness:{value:d}}});M.current=ee;const se=new Sm(G,{geometry:$,program:ee});function Ue(){!U||!F||(F.setSize(U.offsetWidth,U.offsetHeight),ee.uniforms.iResolution.value=new Df(G.canvas.width,G.canvas.height,G.canvas.width/G.canvas.height))}const be=new ResizeObserver(()=>Ue());be.observe(U),Ue();const Ae=q=>{if(P.current=requestAnimationFrame(Ae),m&&D.current===0&&(D.current=q),r)ee.uniforms.iTime.value=b.current;else{const ue=(q*.001+k.current)*i;ee.uniforms.iTime.value=ue,b.current=ue}if(m&&D.current>0){const re=q-D.current,Re=Math.min(re/2e3,1);ee.uniforms.uPageLoadProgress.value=Re}if(p){const re=A.current,Re=y.current;re.x+=(Re.x-re.x)*.08,re.y+=(Re.y-re.y)*.08;const Ie=ee.uniforms.uMouse.value;Ie[0]=re.x,Ie[1]=re.y}F.render({scene:se})};return P.current=requestAnimationFrame(Ae),U.appendChild(G.canvas),p&&U.addEventListener("mousemove",z),()=>{var q;cancelAnimationFrame(P.current),be.disconnect(),p&&U.removeEventListener("mousemove",z),G.canvas.parentElement===U&&U.removeChild(G.canvas),(q=G.getExtension("WEBGL_lose_context"))==null||q.loseContext(),D.current=0,k.current=Math.random()*100}},[_,r,i,n,e,t,s,a,o,l,u,L,h,O,p,g,m,d,z]),Le.jsx("div",{ref:T,className:`faulty-terminal-container ${v}`,style:x,...S})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mm="184",zA=0,$0=1,VA=2,Du=1,GA=2,Co=3,ns=0,Rn=1,nr=2,or=0,Ua=1,K0=2,Z0=3,Q0=4,HA=5,Ss=100,WA=101,XA=102,jA=103,YA=104,qA=200,$A=201,KA=202,ZA=203,vd=204,xd=205,QA=206,JA=207,eC=208,tC=209,nC=210,iC=211,rC=212,sC=213,aC=214,yd=0,Sd=1,Md=2,ja=3,Ed=4,Td=5,wd=6,Ad=7,Xy=0,oC=1,lC=2,zi=0,jy=1,Yy=2,qy=3,$y=4,Ky=5,Zy=6,Qy=7,Jy=300,zs=301,Ya=302,If=303,Uf=304,Xc=306,Cd=1e3,sr=1001,Rd=1002,Zt=1003,uC=1004,$l=1005,hn=1006,Nf=1007,As=1008,si=1009,eS=1010,tS=1011,ul=1012,Em=1013,Hi=1014,Ni=1015,pr=1016,Tm=1017,wm=1018,cl=1020,nS=35902,iS=35899,rS=1021,sS=1022,yi=1023,mr=1026,Cs=1027,aS=1028,Am=1029,Vs=1030,Cm=1031,Rm=1033,Iu=33776,Uu=33777,Nu=33778,Fu=33779,bd=35840,Pd=35841,Ld=35842,Dd=35843,Id=36196,Ud=37492,Nd=37496,Fd=37488,Od=37489,hc=37490,Bd=37491,kd=37808,zd=37809,Vd=37810,Gd=37811,Hd=37812,Wd=37813,Xd=37814,jd=37815,Yd=37816,qd=37817,$d=37818,Kd=37819,Zd=37820,Qd=37821,Jd=36492,ep=36494,tp=36495,np=36283,ip=36284,dc=36285,rp=36286,cC=3200,J0=0,fC=1,Ur="",ti="srgb",pc="srgb-linear",mc="linear",Je="srgb",Js=7680,e_=519,hC=512,dC=513,pC=514,bm=515,mC=516,gC=517,Pm=518,_C=519,t_=35044,n_="300 es",Fi=2e3,gc=2001;function vC(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function _c(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function xC(){const n=_c("canvas");return n.style.display="block",n}const i_={};function r_(...n){const e="THREE."+n.shift();console.log(e,...n)}function oS(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function De(...n){n=oS(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ke(...n){n=oS(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function sp(...n){const e=n.join(" ");e in i_||(i_[e]=!0,De(...n))}function yC(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const SC={[yd]:Sd,[Md]:wd,[Ed]:Ad,[ja]:Td,[Sd]:yd,[wd]:Md,[Ad]:Ed,[Td]:ja};class qs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ff=Math.PI/180,ap=180/Math.PI;function wl(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function Ye(n,e,t){return Math.max(e,Math.min(t,n))}function MC(n,e){return(n%e+e)%e}function Of(n,e,t){return(1-t)*n+t*e}function mo(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Sn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Qm=class Qm{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Qm.prototype.isVector2=!0;let st=Qm;class ro{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],u=i[r+1],c=i[r+2],h=i[r+3],f=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(h!==_||l!==f||u!==p||c!==g){let m=l*f+u*p+c*g+h*_;m<0&&(f=-f,p=-p,g=-g,_=-_,m=-m);let d=1-o;if(m<.9995){const v=Math.acos(m),x=Math.sin(v);d=Math.sin(d*v)/x,o=Math.sin(o*v)/x,l=l*d+f*o,u=u*d+p*o,c=c*d+g*o,h=h*d+_*o}else{l=l*d+f*o,u=u*d+p*o,c=c*d+g*o,h=h*d+_*o;const v=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=v,u*=v,c*=v,h*=v}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],c=i[r+3],h=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+c*h+l*p-u*f,e[t+1]=l*g+c*f+u*h-o*p,e[t+2]=u*g+c*p+o*f-l*h,e[t+3]=c*g-o*h-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),c=o(r/2),h=o(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*c*h+u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h-f*p*g;break;case"YXZ":this._x=f*c*h+u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h+f*p*g;break;case"ZXY":this._x=f*c*h-u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h-f*p*g;break;case"ZYX":this._x=f*c*h-u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h+f*p*g;break;case"YZX":this._x=f*c*h+u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h-f*p*g;break;case"XZY":this._x=f*c*h-u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h+f*p*g;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],u=t[2],c=t[6],h=t[10],f=i+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(c-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+a*o+r*u-s*l,this._y=r*c+a*l+s*o-i*u,this._z=s*c+a*u+i*l-r*o,this._w=a*c-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const u=Math.acos(o),c=Math.sin(u);l=Math.sin(l*u)/c,t=Math.sin(t*u)/c,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Jm=class Jm{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(s_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(s_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),c=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+l*u+a*h-o*c,this.y=i+l*c+o*u-s*h,this.z=r+l*h+s*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Bf.copy(this).projectOnVector(e),this.sub(Bf)}reflect(e){return this.sub(Bf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Jm.prototype.isVector3=!0;let X=Jm;const Bf=new X,s_=new ro,eg=class eg{constructor(e,t,i,r,s,a,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u)}set(e,t,i,r,s,a,o,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],c=i[4],h=i[7],f=i[2],p=i[5],g=i[8],_=r[0],m=r[3],d=r[6],v=r[1],x=r[4],S=r[7],T=r[2],M=r[5],w=r[8];return s[0]=a*_+o*v+l*T,s[3]=a*m+o*x+l*M,s[6]=a*d+o*S+l*w,s[1]=u*_+c*v+h*T,s[4]=u*m+c*x+h*M,s[7]=u*d+c*S+h*w,s[2]=f*_+p*v+g*T,s[5]=f*m+p*x+g*M,s[8]=f*d+p*S+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return t*a*c-t*o*u-i*s*c+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],h=c*a-o*u,f=o*l-c*s,p=u*s-a*l,g=t*h+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*u-c*i)*_,e[2]=(o*i-r*a)*_,e[3]=f*_,e[4]=(c*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=p*_,e[7]=(i*l-u*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(kf.makeScale(e,t)),this}rotate(e){return this.premultiply(kf.makeRotation(-e)),this}translate(e,t){return this.premultiply(kf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};eg.prototype.isMatrix3=!0;let Fe=eg;const kf=new Fe,a_=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),o_=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function EC(){const n={enabled:!0,workingColorSpace:pc,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Je&&(r.r=lr(r.r),r.g=lr(r.g),r.b=lr(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Je&&(r.r=Na(r.r),r.g=Na(r.g),r.b=Na(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ur?mc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return sp("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return sp("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[pc]:{primaries:e,whitePoint:i,transfer:mc,toXYZ:a_,fromXYZ:o_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:e,whitePoint:i,transfer:Je,toXYZ:a_,fromXYZ:o_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),n}const je=EC();function lr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Na(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ea;class TC{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ea===void 0&&(ea=_c("canvas")),ea.width=e.width,ea.height=e.height;const r=ea.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ea}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_c("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=lr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(lr(t[i]/255)*255):t[i]=lr(t[i]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wC=0;class Lm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wC++}),this.uuid=wl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(zf(r[a].image)):s.push(zf(r[a]))}else s=zf(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function zf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?TC.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let AC=0;const Vf=new X;class dn extends qs{constructor(e=dn.DEFAULT_IMAGE,t=dn.DEFAULT_MAPPING,i=sr,r=sr,s=hn,a=As,o=yi,l=si,u=dn.DEFAULT_ANISOTROPY,c=Ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AC++}),this.uuid=wl(),this.name="",this.source=new Lm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vf).x}get height(){return this.source.getSize(Vf).y}get depth(){return this.source.getSize(Vf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cd:e.x=e.x-Math.floor(e.x);break;case sr:e.x=e.x<0?0:1;break;case Rd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cd:e.y=e.y-Math.floor(e.y);break;case sr:e.y=e.y<0?0:1;break;case Rd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Jy;dn.DEFAULT_ANISOTROPY=1;const tg=class tg{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],h=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(c-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,S=(p+1)/2,T=(d+1)/2,M=(c+f)/4,w=(h+_)/4,y=(g+m)/4;return x>S&&x>T?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=M/i,s=w/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=M/r,s=y/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=w/s,r=y/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-_)/v,this.z=(f-c)/v,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};tg.prototype.isVector4=!0;let Nt=tg;class CC extends qs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new dn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Lm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends CC{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class lS extends dn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class RC extends dn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wc=class wc{constructor(e,t,i,r,s,a,o,l,u,c,h,f,p,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u,c,h,f,p,g,_,m)}set(e,t,i,r,s,a,o,l,u,c,h,f,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=u,d[6]=c,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wc().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/ta.setFromMatrixColumn(e,0).length(),s=1/ta.setFromMatrixColumn(e,1).length(),a=1/ta.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*c,p=a*h,g=o*c,_=o*h;t[0]=l*c,t[4]=-l*h,t[8]=u,t[1]=p+g*u,t[5]=f-_*u,t[9]=-o*l,t[2]=_-f*u,t[6]=g+p*u,t[10]=a*l}else if(e.order==="YXZ"){const f=l*c,p=l*h,g=u*c,_=u*h;t[0]=f+_*o,t[4]=g*o-p,t[8]=a*u,t[1]=a*h,t[5]=a*c,t[9]=-o,t[2]=p*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*c,p=l*h,g=u*c,_=u*h;t[0]=f-_*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*c,t[9]=_-f*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*c,p=a*h,g=o*c,_=o*h;t[0]=l*c,t[4]=g*u-p,t[8]=f*u+_,t[1]=l*h,t[5]=_*u+f,t[9]=p*u-g,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*u,g=o*l,_=o*u;t[0]=l*c,t[4]=_-f*h,t[8]=g*h+p,t[1]=h,t[5]=a*c,t[9]=-o*c,t[2]=-u*c,t[6]=p*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=a*l,p=a*u,g=o*l,_=o*u;t[0]=l*c,t[4]=-h,t[8]=u*c,t[1]=f*h+_,t[5]=a*c,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*c,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bC,e,PC)}lookAt(e,t,i){const r=this.elements;return Fn.subVectors(e,t),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),Tr.crossVectors(i,Fn),Tr.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),Tr.crossVectors(i,Fn)),Tr.normalize(),Kl.crossVectors(Fn,Tr),r[0]=Tr.x,r[4]=Kl.x,r[8]=Fn.x,r[1]=Tr.y,r[5]=Kl.y,r[9]=Fn.y,r[2]=Tr.z,r[6]=Kl.z,r[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],c=i[1],h=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],v=i[3],x=i[7],S=i[11],T=i[15],M=r[0],w=r[4],y=r[8],A=r[12],b=r[1],P=r[5],D=r[9],k=r[13],O=r[2],L=r[6],z=r[10],U=r[14],F=r[3],G=r[7],$=r[11],ee=r[15];return s[0]=a*M+o*b+l*O+u*F,s[4]=a*w+o*P+l*L+u*G,s[8]=a*y+o*D+l*z+u*$,s[12]=a*A+o*k+l*U+u*ee,s[1]=c*M+h*b+f*O+p*F,s[5]=c*w+h*P+f*L+p*G,s[9]=c*y+h*D+f*z+p*$,s[13]=c*A+h*k+f*U+p*ee,s[2]=g*M+_*b+m*O+d*F,s[6]=g*w+_*P+m*L+d*G,s[10]=g*y+_*D+m*z+d*$,s[14]=g*A+_*k+m*U+d*ee,s[3]=v*M+x*b+S*O+T*F,s[7]=v*w+x*P+S*L+T*G,s[11]=v*y+x*D+S*z+T*$,s[15]=v*A+x*k+S*U+T*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],c=e[2],h=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15],v=l*p-u*f,x=o*p-u*h,S=o*f-l*h,T=a*p-u*c,M=a*f-l*c,w=a*h-o*c;return t*(_*v-m*x+d*S)-i*(g*v-m*T+d*M)+r*(g*x-_*T+d*w)-s*(g*S-_*M+m*w)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],h=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],v=t*o-i*a,x=t*l-r*a,S=t*u-s*a,T=i*l-r*o,M=i*u-s*o,w=r*u-s*l,y=c*_-h*g,A=c*m-f*g,b=c*d-p*g,P=h*m-f*_,D=h*d-p*_,k=f*d-p*m,O=v*k-x*D+S*P+T*b-M*A+w*y;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/O;return e[0]=(o*k-l*D+u*P)*L,e[1]=(r*D-i*k-s*P)*L,e[2]=(_*w-m*M+d*T)*L,e[3]=(f*M-h*w-p*T)*L,e[4]=(l*b-a*k-u*A)*L,e[5]=(t*k-r*b+s*A)*L,e[6]=(m*S-g*w-d*x)*L,e[7]=(c*w-f*S+p*x)*L,e[8]=(a*D-o*b+u*y)*L,e[9]=(i*b-t*D-s*y)*L,e[10]=(g*M-_*S+d*v)*L,e[11]=(h*S-c*M-p*v)*L,e[12]=(o*A-a*P-l*y)*L,e[13]=(t*P-i*A+r*y)*L,e[14]=(_*x-g*T-m*v)*L,e[15]=(c*T-h*x+f*v)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,c=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,c*o+i,c*l-r*a,0,u*l-r*o,c*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,u=s+s,c=a+a,h=o+o,f=s*u,p=s*c,g=s*h,_=a*c,m=a*h,d=o*h,v=l*u,x=l*c,S=l*h,T=i.x,M=i.y,w=i.z;return r[0]=(1-(_+d))*T,r[1]=(p+S)*T,r[2]=(g-x)*T,r[3]=0,r[4]=(p-S)*M,r[5]=(1-(f+d))*M,r[6]=(m+v)*M,r[7]=0,r[8]=(g+x)*w,r[9]=(m-v)*w,r[10]=(1-(f+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=ta.set(r[0],r[1],r[2]).length();const o=ta.set(r[4],r[5],r[6]).length(),l=ta.set(r[8],r[9],r[10]).length();s<0&&(a=-a),di.copy(this);const u=1/a,c=1/o,h=1/l;return di.elements[0]*=u,di.elements[1]*=u,di.elements[2]*=u,di.elements[4]*=c,di.elements[5]*=c,di.elements[6]*=c,di.elements[8]*=h,di.elements[9]*=h,di.elements[10]*=h,t.setFromRotationMatrix(di),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=Fi,l=!1){const u=this.elements,c=2*s/(t-e),h=2*s/(i-r),f=(t+e)/(t-e),p=(i+r)/(i-r);let g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===Fi)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===gc)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=h,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=_,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Fi,l=!1){const u=this.elements,c=2/(t-e),h=2/(i-r),f=-(t+e)/(t-e),p=-(i+r)/(i-r);let g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===Fi)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===gc)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=h,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=g,u[14]=_,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};wc.prototype.isMatrix4=!0;let Xt=wc;const ta=new X,di=new Xt,bC=new X(0,0,0),PC=new X(1,1,1),Tr=new X,Kl=new X,Fn=new X,l_=new Xt,u_=new ro;class Gs{constructor(e=0,t=0,i=0,r=Gs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],c=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return l_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(l_,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return u_.setFromEuler(this),this.setFromQuaternion(u_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gs.DEFAULT_ORDER="XYZ";class uS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let LC=0;const c_=new X,na=new ro,Yi=new Xt,Zl=new X,go=new X,DC=new X,IC=new ro,f_=new X(1,0,0),h_=new X(0,1,0),d_=new X(0,0,1),p_={type:"added"},UC={type:"removed"},ia={type:"childadded",child:null},Gf={type:"childremoved",child:null};class Xn extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:LC++}),this.uuid=wl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const e=new X,t=new Gs,i=new ro,r=new X(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Xt},normalMatrix:{value:new Fe}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return na.setFromAxisAngle(e,t),this.quaternion.multiply(na),this}rotateOnWorldAxis(e,t){return na.setFromAxisAngle(e,t),this.quaternion.premultiply(na),this}rotateX(e){return this.rotateOnAxis(f_,e)}rotateY(e){return this.rotateOnAxis(h_,e)}rotateZ(e){return this.rotateOnAxis(d_,e)}translateOnAxis(e,t){return c_.copy(e).applyQuaternion(this.quaternion),this.position.add(c_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(f_,e)}translateY(e){return this.translateOnAxis(h_,e)}translateZ(e){return this.translateOnAxis(d_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Zl.copy(e):Zl.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(go,Zl,this.up):Yi.lookAt(Zl,go,this.up),this.quaternion.setFromRotationMatrix(Yi),r&&(Yi.extractRotation(r.matrixWorld),na.setFromRotationMatrix(Yi),this.quaternion.premultiply(na.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(p_),ia.child=e,this.dispatchEvent(ia),ia.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(UC),Gf.child=e,this.dispatchEvent(Gf),Gf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(p_),ia.child=e,this.dispatchEvent(ia),ia.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,e,DC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,IC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Xn.DEFAULT_UP=new X(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ql extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const NC={type:"move"};class Hf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ql,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ql,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ql,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),d=this._getHandJoint(u,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=c.position.distanceTo(h.position),p=.02,g=.005;u.inputState.pinching&&f>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(NC)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ql;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const cS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wr={h:0,s:0,l:0},Jl={h:0,s:0,l:0};function Wf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class rt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=je.workingColorSpace){if(e=MC(e,1),t=Ye(t,0,1),i=Ye(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Wf(a,s,e+1/3),this.g=Wf(a,s,e),this.b=Wf(a,s,e-1/3)}return je.colorSpaceToWorking(this,r),this}setStyle(e,t=ti){function i(s){s!==void 0&&parseFloat(s)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ti){const i=cS[e.toLowerCase()];return i!==void 0?this.setHex(i,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=Na(e.r),this.g=Na(e.g),this.b=Na(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return je.workingToColorSpace(un.copy(this),e),Math.round(Ye(un.r*255,0,255))*65536+Math.round(Ye(un.g*255,0,255))*256+Math.round(Ye(un.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(un.copy(this),t);const i=un.r,r=un.g,s=un.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const c=(o+a)/2;if(o===a)l=0,u=0;else{const h=a-o;switch(u=c<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=ti){je.workingToColorSpace(un.copy(this),e);const t=un.r,i=un.g,r=un.b;return e!==ti?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(wr),this.setHSL(wr.h+e,wr.s+t,wr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(wr),e.getHSL(Jl);const i=Of(wr.h,Jl.h,t),r=Of(wr.s,Jl.s,t),s=Of(wr.l,Jl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new rt;rt.NAMES=cS;class FC extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gs,this.environmentIntensity=1,this.environmentRotation=new Gs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const pi=new X,qi=new X,Xf=new X,$i=new X,ra=new X,sa=new X,m_=new X,jf=new X,Yf=new X,qf=new X,$f=new Nt,Kf=new Nt,Zf=new Nt;class xi{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),pi.subVectors(e,t),r.cross(pi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){pi.subVectors(r,t),qi.subVectors(i,t),Xf.subVectors(e,t);const a=pi.dot(pi),o=pi.dot(qi),l=pi.dot(Xf),u=qi.dot(qi),c=qi.dot(Xf),h=a*u-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(u*l-o*c)*f,g=(a*c-o*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,$i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,$i.x),l.addScaledVector(a,$i.y),l.addScaledVector(o,$i.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return $f.setScalar(0),Kf.setScalar(0),Zf.setScalar(0),$f.fromBufferAttribute(e,t),Kf.fromBufferAttribute(e,i),Zf.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector($f,s.x),a.addScaledVector(Kf,s.y),a.addScaledVector(Zf,s.z),a}static isFrontFacing(e,t,i,r){return pi.subVectors(i,t),qi.subVectors(e,t),pi.cross(qi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),pi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return xi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;ra.subVectors(r,i),sa.subVectors(s,i),jf.subVectors(e,i);const l=ra.dot(jf),u=sa.dot(jf);if(l<=0&&u<=0)return t.copy(i);Yf.subVectors(e,r);const c=ra.dot(Yf),h=sa.dot(Yf);if(c>=0&&h<=c)return t.copy(r);const f=l*h-c*u;if(f<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(ra,a);qf.subVectors(e,s);const p=ra.dot(qf),g=sa.dot(qf);if(g>=0&&p<=g)return t.copy(s);const _=p*u-l*g;if(_<=0&&u>=0&&g<=0)return o=u/(u-g),t.copy(i).addScaledVector(sa,o);const m=c*g-p*h;if(m<=0&&h-c>=0&&p-g>=0)return m_.subVectors(s,r),o=(h-c)/(h-c+(p-g)),t.copy(r).addScaledVector(m_,o);const d=1/(m+_+f);return a=_*d,o=f*d,t.copy(i).addScaledVector(ra,a).addScaledVector(sa,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Al{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,mi):mi.fromBufferAttribute(s,a),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),eu.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),eu.copy(i.boundingBox)),eu.applyMatrix4(e.matrixWorld),this.union(eu)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_o),tu.subVectors(this.max,_o),aa.subVectors(e.a,_o),oa.subVectors(e.b,_o),la.subVectors(e.c,_o),Ar.subVectors(oa,aa),Cr.subVectors(la,oa),fs.subVectors(aa,la);let t=[0,-Ar.z,Ar.y,0,-Cr.z,Cr.y,0,-fs.z,fs.y,Ar.z,0,-Ar.x,Cr.z,0,-Cr.x,fs.z,0,-fs.x,-Ar.y,Ar.x,0,-Cr.y,Cr.x,0,-fs.y,fs.x,0];return!Qf(t,aa,oa,la,tu)||(t=[1,0,0,0,1,0,0,0,1],!Qf(t,aa,oa,la,tu))?!1:(nu.crossVectors(Ar,Cr),t=[nu.x,nu.y,nu.z],Qf(t,aa,oa,la,tu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ki=[new X,new X,new X,new X,new X,new X,new X,new X],mi=new X,eu=new Al,aa=new X,oa=new X,la=new X,Ar=new X,Cr=new X,fs=new X,_o=new X,tu=new X,nu=new X,hs=new X;function Qf(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){hs.fromArray(n,s);const o=r.x*Math.abs(hs.x)+r.y*Math.abs(hs.y)+r.z*Math.abs(hs.z),l=e.dot(hs),u=t.dot(hs),c=i.dot(hs);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const Ft=new X,iu=new st;let OC=0;class Gi extends qs{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:OC++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=t_,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)iu.fromBufferAttribute(this,t),iu.applyMatrix3(e),this.setXY(t,iu.x,iu.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=mo(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Sn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),i=Sn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),i=Sn(i,this.array),r=Sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),i=Sn(i,this.array),r=Sn(r,this.array),s=Sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==t_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class fS extends Gi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class hS extends Gi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ur extends Gi{constructor(e,t,i){super(new Float32Array(e),t,i)}}const BC=new Al,vo=new X,Jf=new X;class Dm{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):BC.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vo.subVectors(e,this.center);const t=vo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(vo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vo.copy(e.center).add(Jf)),this.expandByPoint(vo.copy(e.center).sub(Jf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let kC=0;const Jn=new Xt,eh=new Xn,ua=new X,On=new Al,xo=new Al,qt=new X;class xr extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kC++}),this.uuid=wl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vC(e)?hS:fS)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,i){return Jn.makeTranslation(e,t,i),this.applyMatrix4(Jn),this}scale(e,t,i){return Jn.makeScale(e,t,i),this.applyMatrix4(Jn),this}lookAt(e){return eh.lookAt(e),eh.updateMatrix(),this.applyMatrix4(eh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ua).negate(),this.translate(ua.x,ua.y,ua.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ur(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Al);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];On.setFromBufferAttribute(s),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dm);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(On.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];xo.setFromBufferAttribute(o),this.morphTargetsRelative?(qt.addVectors(On.min,xo.min),On.expandByPoint(qt),qt.addVectors(On.max,xo.max),On.expandByPoint(qt)):(On.expandByPoint(xo.min),On.expandByPoint(xo.max))}On.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)qt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(qt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)qt.fromBufferAttribute(o,u),l&&(ua.fromBufferAttribute(e,u),qt.add(ua)),r=Math.max(r,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gi(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new X,l[y]=new X;const u=new X,c=new X,h=new X,f=new st,p=new st,g=new st,_=new X,m=new X;function d(y,A,b){u.fromBufferAttribute(i,y),c.fromBufferAttribute(i,A),h.fromBufferAttribute(i,b),f.fromBufferAttribute(s,y),p.fromBufferAttribute(s,A),g.fromBufferAttribute(s,b),c.sub(u),h.sub(u),p.sub(f),g.sub(f);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(P),o[y].add(_),o[A].add(_),o[b].add(_),l[y].add(m),l[A].add(m),l[b].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let y=0,A=v.length;y<A;++y){const b=v[y],P=b.start,D=b.count;for(let k=P,O=P+D;k<O;k+=3)d(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const x=new X,S=new X,T=new X,M=new X;function w(y){T.fromBufferAttribute(r,y),M.copy(T);const A=o[y];x.copy(A),x.sub(T.multiplyScalar(T.dot(A))).normalize(),S.crossVectors(M,A);const P=S.dot(l[y])<0?-1:1;a.setXYZW(y,x.x,x.y,x.z,P)}for(let y=0,A=v.length;y<A;++y){const b=v[y],P=b.start,D=b.count;for(let k=P,O=P+D;k<O;k+=3)w(e.getX(k+0)),w(e.getX(k+1)),w(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new X,s=new X,a=new X,o=new X,l=new X,u=new X,c=new X,h=new X;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),c.subVectors(a,s),h.subVectors(r,s),c.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),o.add(c),l.add(c),u.add(c),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),c.subVectors(a,s),h.subVectors(r,s),c.cross(h),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(o,l){const u=o.array,c=o.itemSize,h=o.normalized,f=new u.constructor(l.length*c);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*c;for(let d=0;d<c;d++)f[g++]=u[p++]}return new Gi(f,c,h)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xr,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let c=0,h=u.length;c<h;c++){const f=u[c],p=e(f,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,f=u.length;h<f;h++){const p=u[h];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],h=s[u];for(let f=0,p=h.length;f<p;f++)c.push(h[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let zC=0;class jc extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zC++}),this.uuid=wl(),this.name="",this.type="Material",this.blending=Ua,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vd,this.blendDst=xd,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=ja,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=e_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ua&&(i.blending=this.blending),this.side!==ns&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==vd&&(i.blendSrc=this.blendSrc),this.blendDst!==xd&&(i.blendDst=this.blendDst),this.blendEquation!==Ss&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ja&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==e_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Js&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Js&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Js&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Zi=new X,th=new X,ru=new X,Rr=new X,nh=new X,su=new X,ih=new X;class VC{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,t),Zi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){th.copy(e).add(t).multiplyScalar(.5),ru.copy(t).sub(e).normalize(),Rr.copy(this.origin).sub(th);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ru),o=Rr.dot(this.direction),l=-Rr.dot(ru),u=Rr.lengthSq(),c=Math.abs(1-a*a);let h,f,p,g;if(c>0)if(h=a*l-o,f=a*o-l,g=s*c,h>=0)if(f>=-g)if(f<=g){const _=1/c;h*=_,f*=_,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+u}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+u;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+u;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+u):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+u);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(th).addScaledVector(ru,f),p}intersectSphere(e,t){Zi.subVectors(e.center,this.origin);const i=Zi.dot(this.direction),r=Zi.dot(Zi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,a=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,a=(e.min.y-f.y)*c),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,t,i,r,s){nh.subVectors(t,e),su.subVectors(i,e),ih.crossVectors(nh,su);let a=this.direction.dot(ih),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Rr.subVectors(this.origin,e);const l=o*this.direction.dot(su.crossVectors(Rr,su));if(l<0)return null;const u=o*this.direction.dot(nh.cross(Rr));if(u<0||l+u>a)return null;const c=-o*Rr.dot(ih);return c<0?null:this.at(c/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dS extends jc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gs,this.combine=Xy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const g_=new Xt,ds=new VC,au=new Dm,__=new X,ou=new X,lu=new X,uu=new X,rh=new X,cu=new X,v_=new X,fu=new X;class Wi extends Xn{constructor(e=new xr,t=new dS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){cu.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=o[l],h=s[l];c!==0&&(rh.fromBufferAttribute(h,e),a?cu.addScaledVector(rh,c):cu.addScaledVector(rh.sub(t),c))}t.add(cu)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),au.copy(i.boundingSphere),au.applyMatrix4(s),ds.copy(e.ray).recast(e.near),!(au.containsPoint(ds.origin)===!1&&(ds.intersectSphere(au,__)===null||ds.origin.distanceToSquared(__)>(e.far-e.near)**2))&&(g_.copy(s).invert(),ds.copy(e.ray).applyMatrix4(g_),!(i.boundingBox!==null&&ds.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ds)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,T=x;S<T;S+=3){const M=o.getX(S),w=o.getX(S+1),y=o.getX(S+2);r=hu(this,d,e,i,u,c,h,M,w,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const v=o.getX(m),x=o.getX(m+1),S=o.getX(m+2);r=hu(this,a,e,i,u,c,h,v,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,T=x;S<T;S+=3){const M=S,w=S+1,y=S+2;r=hu(this,d,e,i,u,c,h,M,w,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const v=m,x=m+1,S=m+2;r=hu(this,a,e,i,u,c,h,v,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function GC(n,e,t,i,r,s,a,o){let l;if(e.side===Rn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ns,o),l===null)return null;fu.copy(o),fu.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(fu);return u<t.near||u>t.far?null:{distance:u,point:fu.clone(),object:n}}function hu(n,e,t,i,r,s,a,o,l,u){n.getVertexPosition(o,ou),n.getVertexPosition(l,lu),n.getVertexPosition(u,uu);const c=GC(n,e,t,i,ou,lu,uu,v_);if(c){const h=new X;xi.getBarycoord(v_,ou,lu,uu,h),r&&(c.uv=xi.getInterpolatedAttribute(r,o,l,u,h,new st)),s&&(c.uv1=xi.getInterpolatedAttribute(s,o,l,u,h,new st)),a&&(c.normal=xi.getInterpolatedAttribute(a,o,l,u,h,new X),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a:o,b:l,c:u,normal:new X,materialIndex:0};xi.getNormal(ou,lu,uu,f.normal),c.face=f,c.barycoord=h}return c}class HC extends dn{constructor(e=null,t=1,i=1,r,s,a,o,l,u=Zt,c=Zt,h,f){super(null,a,o,l,u,c,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const sh=new X,WC=new X,XC=new Fe;class xs{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=sh.subVectors(i,t).cross(WC.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(sh),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||XC.getNormalMatrix(e),r=this.coplanarPoint(sh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new Dm,jC=new st(.5,.5),du=new X;class pS{constructor(e=new xs,t=new xs,i=new xs,r=new xs,s=new xs,a=new xs){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Fi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],u=s[3],c=s[4],h=s[5],f=s[6],p=s[7],g=s[8],_=s[9],m=s[10],d=s[11],v=s[12],x=s[13],S=s[14],T=s[15];if(r[0].setComponents(u-a,p-c,d-g,T-v).normalize(),r[1].setComponents(u+a,p+c,d+g,T+v).normalize(),r[2].setComponents(u+o,p+h,d+_,T+x).normalize(),r[3].setComponents(u-o,p-h,d-_,T-x).normalize(),i)r[4].setComponents(l,f,m,S).normalize(),r[5].setComponents(u-l,p-f,d-m,T-S).normalize();else if(r[4].setComponents(u-l,p-f,d-m,T-S).normalize(),t===Fi)r[5].setComponents(u+l,p+f,d+m,T+S).normalize();else if(t===gc)r[5].setComponents(l,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){ps.center.set(0,0,0);const t=jC.distanceTo(e.center);return ps.radius=.7071067811865476+t,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(du.x=r.normal.x>0?e.max.x:e.min.x,du.y=r.normal.y>0?e.max.y:e.min.y,du.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(du)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mS extends dn{constructor(e=[],t=zs,i,r,s,a,o,l,u,c){super(e,t,i,r,s,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class YC extends dn{constructor(e,t,i,r,s,a,o,l,u){super(e,t,i,r,s,a,o,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qa extends dn{constructor(e,t,i=Hi,r,s,a,o=Zt,l=Zt,u,c=mr,h=1){if(c!==mr&&c!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,r,s,a,o,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class qC extends qa{constructor(e,t=Hi,i=zs,r,s,a=Zt,o=Zt,l,u=mr){const c={width:e,height:e,depth:1},h=[c,c,c,c,c,c];super(e,e,t,i,r,s,a,o,l,u),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class gS extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Cl extends xr{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],c=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ur(u,3)),this.setAttribute("normal",new ur(c,3)),this.setAttribute("uv",new ur(h,2));function g(_,m,d,v,x,S,T,M,w,y,A){const b=S/w,P=T/y,D=S/2,k=T/2,O=M/2,L=w+1,z=y+1;let U=0,F=0;const G=new X;for(let $=0;$<z;$++){const ee=$*P-k;for(let se=0;se<L;se++){const Ue=se*b-D;G[_]=Ue*v,G[m]=ee*x,G[d]=O,u.push(G.x,G.y,G.z),G[_]=0,G[m]=0,G[d]=M>0?1:-1,c.push(G.x,G.y,G.z),h.push(se/w),h.push(1-$/y),U+=1}}for(let $=0;$<y;$++)for(let ee=0;ee<w;ee++){const se=f+ee+L*$,Ue=f+ee+L*($+1),be=f+(ee+1)+L*($+1),Ae=f+(ee+1)+L*$;l.push(se,Ue,Ae),l.push(Ue,be,Ae),F+=6}o.addGroup(p,F,A),p+=F,f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Rl extends xr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),u=o+1,c=l+1,h=e/o,f=t/l,p=[],g=[],_=[],m=[];for(let d=0;d<c;d++){const v=d*f-a;for(let x=0;x<u;x++){const S=x*h-s;g.push(S,-v,0),_.push(0,0,1),m.push(x/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<o;v++){const x=v+u*d,S=v+u*(d+1),T=v+1+u*(d+1),M=v+1+u*d;p.push(x,S,M),p.push(S,T,M)}this.setIndex(p),this.setAttribute("position",new ur(g,3)),this.setAttribute("normal",new ur(_,3)),this.setAttribute("uv",new ur(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rl(e.width,e.height,e.widthSegments,e.heightSegments)}}function $a(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(x_(r))r.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(x_(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function gn(n){const e={};for(let t=0;t<n.length;t++){const i=$a(n[t]);for(const r in i)e[r]=i[r]}return e}function x_(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function $C(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function _S(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const KC={clone:$a,merge:gn};var ZC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,QC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends jc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ZC,this.fragmentShader=QC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$a(e.uniforms),this.uniformsGroups=$C(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class JC extends Ti{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class eR extends jc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tR extends jc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const pu=new X,mu=new ro,Ri=new X;class vS extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(pu,mu,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pu,mu,Ri.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(pu,mu,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pu,mu,Ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const br=new X,y_=new st,S_=new st;class ri extends vS{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ap*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ff*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ap*2*Math.atan(Math.tan(Ff*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(br.x,br.y).multiplyScalar(-e/br.z),br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(br.x,br.y).multiplyScalar(-e/br.z)}getViewSize(e,t){return this.getViewBounds(e,y_,S_),t.subVectors(S_,y_)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ff*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class xS extends vS{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ca=-90,fa=1;class nR extends Xn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ri(ca,fa,e,t);r.layers=this.layers,this.add(r);const s=new ri(ca,fa,e,t);s.layers=this.layers,this.add(s);const a=new ri(ca,fa,e,t);a.layers=this.layers,this.add(a);const o=new ri(ca,fa,e,t);o.layers=this.layers,this.add(o);const l=new ri(ca,fa,e,t);l.layers=this.layers,this.add(l);const u=new ri(ca,fa,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const u of t)this.remove(u);if(e===Fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===gc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,c]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(h,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class iR extends ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ng=class ng{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};ng.prototype.isMatrix2=!0;let M_=ng;function E_(n,e,t,i){const r=rR(i);switch(t){case rS:return n*e;case aS:return n*e/r.components*r.byteLength;case Am:return n*e/r.components*r.byteLength;case Vs:return n*e*2/r.components*r.byteLength;case Cm:return n*e*2/r.components*r.byteLength;case sS:return n*e*3/r.components*r.byteLength;case yi:return n*e*4/r.components*r.byteLength;case Rm:return n*e*4/r.components*r.byteLength;case Iu:case Uu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Nu:case Fu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pd:case Dd:return Math.max(n,16)*Math.max(e,8)/4;case bd:case Ld:return Math.max(n,8)*Math.max(e,8)/2;case Id:case Ud:case Fd:case Od:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Nd:case hc:case Bd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zd:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Vd:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Hd:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Wd:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case jd:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Yd:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case qd:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case $d:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Kd:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Zd:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Qd:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Jd:case ep:case tp:return Math.ceil(n/4)*Math.ceil(e/4)*16;case np:case ip:return Math.ceil(n/4)*Math.ceil(e/4)*8;case dc:case rp:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rR(n){switch(n){case si:case eS:return{byteLength:1,components:1};case ul:case tS:case pr:return{byteLength:2,components:1};case Tm:case wm:return{byteLength:2,components:4};case Hi:case Em:case Ni:return{byteLength:4,components:1};case nS:case iS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mm}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yS(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function sR(n){const e=new WeakMap;function t(o,l){const u=o.array,c=o.usage,h=u.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,u,c),o.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=n.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,u){const c=l.array,h=l.updateRanges;if(n.bindBuffer(u,o),h.length===0)n.bufferSubData(u,0,c);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];n.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,t(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var aR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pR=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,mR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_R=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,SR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,MR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ER=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,AR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,CR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,RR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,bR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,PR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,LR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,DR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,IR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,UR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,NR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FR="gl_FragColor = linearToOutputTexel( gl_FragColor );",OR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,BR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,kR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,VR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,GR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,HR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,WR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,XR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$R=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,KR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,QR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,JR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ib=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ab=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ob=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lb=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ub=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,db=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_b=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Eb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ab=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Pb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Db=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ib=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ub=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Fb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ob=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Hb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$b=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Kb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,e2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,t2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,n2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,i2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,r2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,s2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const a2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,o2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,d2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,p2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,m2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,g2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,x2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,y2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,S2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,w2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,C2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,R2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,L2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,N2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,F2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,k2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:aR,alphahash_pars_fragment:oR,alphamap_fragment:lR,alphamap_pars_fragment:uR,alphatest_fragment:cR,alphatest_pars_fragment:fR,aomap_fragment:hR,aomap_pars_fragment:dR,batching_pars_vertex:pR,batching_vertex:mR,begin_vertex:gR,beginnormal_vertex:_R,bsdfs:vR,iridescence_fragment:xR,bumpmap_pars_fragment:yR,clipping_planes_fragment:SR,clipping_planes_pars_fragment:MR,clipping_planes_pars_vertex:ER,clipping_planes_vertex:TR,color_fragment:wR,color_pars_fragment:AR,color_pars_vertex:CR,color_vertex:RR,common:bR,cube_uv_reflection_fragment:PR,defaultnormal_vertex:LR,displacementmap_pars_vertex:DR,displacementmap_vertex:IR,emissivemap_fragment:UR,emissivemap_pars_fragment:NR,colorspace_fragment:FR,colorspace_pars_fragment:OR,envmap_fragment:BR,envmap_common_pars_fragment:kR,envmap_pars_fragment:zR,envmap_pars_vertex:VR,envmap_physical_pars_fragment:QR,envmap_vertex:GR,fog_vertex:HR,fog_pars_vertex:WR,fog_fragment:XR,fog_pars_fragment:jR,gradientmap_pars_fragment:YR,lightmap_pars_fragment:qR,lights_lambert_fragment:$R,lights_lambert_pars_fragment:KR,lights_pars_begin:ZR,lights_toon_fragment:JR,lights_toon_pars_fragment:eb,lights_phong_fragment:tb,lights_phong_pars_fragment:nb,lights_physical_fragment:ib,lights_physical_pars_fragment:rb,lights_fragment_begin:sb,lights_fragment_maps:ab,lights_fragment_end:ob,lightprobes_pars_fragment:lb,logdepthbuf_fragment:ub,logdepthbuf_pars_fragment:cb,logdepthbuf_pars_vertex:fb,logdepthbuf_vertex:hb,map_fragment:db,map_pars_fragment:pb,map_particle_fragment:mb,map_particle_pars_fragment:gb,metalnessmap_fragment:_b,metalnessmap_pars_fragment:vb,morphinstance_vertex:xb,morphcolor_vertex:yb,morphnormal_vertex:Sb,morphtarget_pars_vertex:Mb,morphtarget_vertex:Eb,normal_fragment_begin:Tb,normal_fragment_maps:wb,normal_pars_fragment:Ab,normal_pars_vertex:Cb,normal_vertex:Rb,normalmap_pars_fragment:bb,clearcoat_normal_fragment_begin:Pb,clearcoat_normal_fragment_maps:Lb,clearcoat_pars_fragment:Db,iridescence_pars_fragment:Ib,opaque_fragment:Ub,packing:Nb,premultiplied_alpha_fragment:Fb,project_vertex:Ob,dithering_fragment:Bb,dithering_pars_fragment:kb,roughnessmap_fragment:zb,roughnessmap_pars_fragment:Vb,shadowmap_pars_fragment:Gb,shadowmap_pars_vertex:Hb,shadowmap_vertex:Wb,shadowmask_pars_fragment:Xb,skinbase_vertex:jb,skinning_pars_vertex:Yb,skinning_vertex:qb,skinnormal_vertex:$b,specularmap_fragment:Kb,specularmap_pars_fragment:Zb,tonemapping_fragment:Qb,tonemapping_pars_fragment:Jb,transmission_fragment:e2,transmission_pars_fragment:t2,uv_pars_fragment:n2,uv_pars_vertex:i2,uv_vertex:r2,worldpos_vertex:s2,background_vert:a2,background_frag:o2,backgroundCube_vert:l2,backgroundCube_frag:u2,cube_vert:c2,cube_frag:f2,depth_vert:h2,depth_frag:d2,distance_vert:p2,distance_frag:m2,equirect_vert:g2,equirect_frag:_2,linedashed_vert:v2,linedashed_frag:x2,meshbasic_vert:y2,meshbasic_frag:S2,meshlambert_vert:M2,meshlambert_frag:E2,meshmatcap_vert:T2,meshmatcap_frag:w2,meshnormal_vert:A2,meshnormal_frag:C2,meshphong_vert:R2,meshphong_frag:b2,meshphysical_vert:P2,meshphysical_frag:L2,meshtoon_vert:D2,meshtoon_frag:I2,points_vert:U2,points_frag:N2,shadow_vert:F2,shadow_frag:O2,sprite_vert:B2,sprite_frag:k2},pe={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Di={basic:{uniforms:gn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:gn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new rt(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:gn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:gn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:gn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new rt(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:gn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:gn([pe.points,pe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:gn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:gn([pe.common,pe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:gn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:gn([pe.sprite,pe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:gn([pe.common,pe.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:gn([pe.lights,pe.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Di.physical={uniforms:gn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const gu={r:0,b:0,g:0},z2=new Xt,SS=new Fe;SS.set(-1,0,0,0,1,0,0,0,1);function V2(n,e,t,i,r,s){const a=new rt(0);let o=r===!0?0:1,l,u,c=null,h=0,f=null;function p(v){let x=v.isScene===!0?v.background:null;if(x&&x.isTexture){const S=v.backgroundBlurriness>0;x=e.get(x,S)}return x}function g(v){let x=!1;const S=p(v);S===null?m(a,o):S&&S.isColor&&(m(S,1),x=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||x)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(v,x){const S=p(x);S&&(S.isCubeTexture||S.mapping===Xc)?(u===void 0&&(u=new Wi(new Cl(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:$a(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,M,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(z2.makeRotationFromEuler(x.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(SS),u.material.toneMapped=je.getTransfer(S.colorSpace)!==Je,(c!==S||h!==S.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,c=S,h=S.version,f=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Wi(new Rl(2,2),new Ti({name:"BackgroundMaterial",uniforms:$a(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=je.getTransfer(S.colorSpace)!==Je,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(c!==S||h!==S.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,c=S,h=S.version,f=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,x){v.getRGB(gu,_S(n)),t.buffers.color.setClear(gu.r,gu.g,gu.b,x,s)}function d(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),o=x,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:g,addToRenderList:_,dispose:d}}function G2(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(P,D,k,O,L){let z=!1;const U=h(P,O,k,D);s!==U&&(s=U,u(s.object)),z=p(P,O,k,L),z&&g(P,O,k,L),L!==null&&e.update(L,n.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,S(P,D,k,O),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return n.createVertexArray()}function u(P){return n.bindVertexArray(P)}function c(P){return n.deleteVertexArray(P)}function h(P,D,k,O){const L=O.wireframe===!0;let z=i[D.id];z===void 0&&(z={},i[D.id]=z);const U=P.isInstancedMesh===!0?P.id:0;let F=z[U];F===void 0&&(F={},z[U]=F);let G=F[k.id];G===void 0&&(G={},F[k.id]=G);let $=G[L];return $===void 0&&($=f(l()),G[L]=$),$}function f(P){const D=[],k=[],O=[];for(let L=0;L<t;L++)D[L]=0,k[L]=0,O[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:O,object:P,attributes:{},index:null}}function p(P,D,k,O){const L=s.attributes,z=D.attributes;let U=0;const F=k.getAttributes();for(const G in F)if(F[G].location>=0){const ee=L[G];let se=z[G];if(se===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(se=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(se=P.instanceColor)),ee===void 0||ee.attribute!==se||se&&ee.data!==se.data)return!0;U++}return s.attributesNum!==U||s.index!==O}function g(P,D,k,O){const L={},z=D.attributes;let U=0;const F=k.getAttributes();for(const G in F)if(F[G].location>=0){let ee=z[G];ee===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor));const se={};se.attribute=ee,ee&&ee.data&&(se.data=ee.data),L[G]=se,U++}s.attributes=L,s.attributesNum=U,s.index=O}function _(){const P=s.newAttributes;for(let D=0,k=P.length;D<k;D++)P[D]=0}function m(P){d(P,0)}function d(P,D){const k=s.newAttributes,O=s.enabledAttributes,L=s.attributeDivisors;k[P]=1,O[P]===0&&(n.enableVertexAttribArray(P),O[P]=1),L[P]!==D&&(n.vertexAttribDivisor(P,D),L[P]=D)}function v(){const P=s.newAttributes,D=s.enabledAttributes;for(let k=0,O=D.length;k<O;k++)D[k]!==P[k]&&(n.disableVertexAttribArray(k),D[k]=0)}function x(P,D,k,O,L,z,U){U===!0?n.vertexAttribIPointer(P,D,k,L,z):n.vertexAttribPointer(P,D,k,O,L,z)}function S(P,D,k,O){_();const L=O.attributes,z=k.getAttributes(),U=D.defaultAttributeValues;for(const F in z){const G=z[F];if(G.location>=0){let $=L[F];if($===void 0&&(F==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),F==="instanceColor"&&P.instanceColor&&($=P.instanceColor)),$!==void 0){const ee=$.normalized,se=$.itemSize,Ue=e.get($);if(Ue===void 0)continue;const be=Ue.buffer,Ae=Ue.type,q=Ue.bytesPerElement,ue=Ae===n.INT||Ae===n.UNSIGNED_INT||$.gpuType===Em;if($.isInterleavedBufferAttribute){const re=$.data,Re=re.stride,Ie=$.offset;if(re.isInstancedInterleavedBuffer){for(let Pe=0;Pe<G.locationSize;Pe++)d(G.location+Pe,re.meshPerAttribute);P.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Pe=0;Pe<G.locationSize;Pe++)m(G.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,be);for(let Pe=0;Pe<G.locationSize;Pe++)x(G.location+Pe,se/G.locationSize,Ae,ee,Re*q,(Ie+se/G.locationSize*Pe)*q,ue)}else{if($.isInstancedBufferAttribute){for(let re=0;re<G.locationSize;re++)d(G.location+re,$.meshPerAttribute);P.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let re=0;re<G.locationSize;re++)m(G.location+re);n.bindBuffer(n.ARRAY_BUFFER,be);for(let re=0;re<G.locationSize;re++)x(G.location+re,se/G.locationSize,Ae,ee,se*q,se/G.locationSize*re*q,ue)}}else if(U!==void 0){const ee=U[F];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(G.location,ee);break;case 3:n.vertexAttrib3fv(G.location,ee);break;case 4:n.vertexAttrib4fv(G.location,ee);break;default:n.vertexAttrib1fv(G.location,ee)}}}}v()}function T(){A();for(const P in i){const D=i[P];for(const k in D){const O=D[k];for(const L in O){const z=O[L];for(const U in z)c(z[U].object),delete z[U];delete O[L]}}delete i[P]}}function M(P){if(i[P.id]===void 0)return;const D=i[P.id];for(const k in D){const O=D[k];for(const L in O){const z=O[L];for(const U in z)c(z[U].object),delete z[U];delete O[L]}}delete i[P.id]}function w(P){for(const D in i){const k=i[D];for(const O in k){const L=k[O];if(L[P.id]===void 0)continue;const z=L[P.id];for(const U in z)c(z[U].object),delete z[U];delete L[P.id]}}}function y(P){for(const D in i){const k=i[D],O=P.isInstancedMesh===!0?P.id:0,L=k[O];if(L!==void 0){for(const z in L){const U=L[z];for(const F in U)c(U[F].object),delete U[F];delete L[z]}delete k[O],Object.keys(k).length===0&&delete i[D]}}}function A(){b(),a=!0,s!==r&&(s=r,u(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:M,releaseStatesOfObject:y,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function H2(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,c){c!==0&&(n.drawArraysInstanced(i,l,u,c),t.update(u,i,c))}function o(l,u,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,c);let f=0;for(let p=0;p<c;p++)f+=u[p];t.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function W2(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==yi&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const y=w===pr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==si&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ni&&!y)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(De("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:S,maxSamples:T,samples:M}}function X2(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new xs,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=c(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,x=v*4;let S=d.clippingState||null;l.value=S,S=c(g,f,x,p);for(let T=0;T!==x;++T)S[T]=t[T];d.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(h,f,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,S=p;x!==_;++x,S+=4)a.copy(h[x]).applyMatrix4(v,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const Br=4,T_=[.125,.215,.35,.446,.526,.582],Ms=20,j2=256,yo=new xS,w_=new rt;let ah=null,oh=0,lh=0,uh=!1;const Y2=new X;class A_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=Y2}=s;ah=this._renderer.getRenderTarget(),oh=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel(),uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=b_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=R_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ah,oh,lh),this._renderer.xr.enabled=uh,e.scissorTest=!1,ha(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zs||e.mapping===Ya?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ah=this._renderer.getRenderTarget(),oh=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel(),uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:pr,format:yi,colorSpace:pc,depthBuffer:!1},r=C_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=C_(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=q2(s)),this._blurMaterial=K2(s,e,t),this._ggxMaterial=$2(s,e,t)}return r}_compileMaterial(e){const t=new Wi(new xr,e);this._renderer.compile(t,yo)}_sceneToCubeUV(e,t,i,r,s){const l=new ri(90,1,t,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(w_),h.toneMapping=zi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wi(new Cl,new dS({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let d=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,d=!0):(m.color.copy(w_),d=!0);for(let x=0;x<6;x++){const S=x%3;S===0?(l.up.set(0,u[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[x],s.y,s.z)):S===1?(l.up.set(0,0,u[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[x],s.z)):(l.up.set(0,u[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[x]));const T=this._cubeSize;ha(r,S*T,x>2?T:0,T,T),h.setRenderTarget(r),d&&h.render(_,l),h.render(e,l)}h.toneMapping=p,h.autoClear=f,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===zs||e.mapping===Ya;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=b_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=R_());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ha(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,yo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,u=i/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),h=Math.sqrt(u*u-c*c),f=0+u*1.25,p=h*f,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-Br?i-g+Br:0),d=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,ha(s,m,d,3*_,2*_),r.setRenderTarget(s),r.render(o,yo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,ha(e,m,d,3*_,2*_),r.setRenderTarget(e),r.render(o,yo)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ke("blur direction must be either latitudinal or longitudinal!");const c=3,h=this._lodMeshes[r];h.material=u;const f=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ms-1),_=s/g,m=isFinite(s)?1+Math.floor(c*_):Ms;m>Ms&&De(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ms}`);const d=[];let v=0;for(let w=0;w<Ms;++w){const y=w/_,A=Math.exp(-y*y/2);d.push(A),w===0?v+=A:w<m&&(v+=2*A)}for(let w=0;w<d.length;w++)d[w]=d[w]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const S=this._sizeLods[r],T=3*S*(r>x-Br?r-x+Br:0),M=4*(this._cubeSize-S);ha(t,T,M,3*S,2*S),l.setRenderTarget(t),l.render(h,yo)}}function q2(n){const e=[],t=[],i=[];let r=n;const s=n-Br+1+T_.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-Br?l=T_[a-n+Br-1]:a===0&&(l=0),t.push(l);const u=1/(o-2),c=-u,h=1+u,f=[c,c,h,c,h,h,c,c,h,h,c,h],p=6,g=6,_=3,m=2,d=1,v=new Float32Array(_*g*p),x=new Float32Array(m*g*p),S=new Float32Array(d*g*p);for(let M=0;M<p;M++){const w=M%3*2/3-1,y=M>2?0:-1,A=[w,y,0,w+2/3,y,0,w+2/3,y+1,0,w,y,0,w+2/3,y+1,0,w,y+1,0];v.set(A,_*g*M),x.set(f,m*g*M);const b=[M,M,M,M,M,M];S.set(b,d*g*M)}const T=new xr;T.setAttribute("position",new Gi(v,_)),T.setAttribute("uv",new Gi(x,m)),T.setAttribute("faceIndex",new Gi(S,d)),i.push(new Wi(T,null)),r>Br&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function C_(n,e,t){const i=new Vi(n,e,t);return i.texture.mapping=Xc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ha(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function $2(n,e,t){return new Ti({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:j2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function K2(n,e,t){const i=new Float32Array(Ms),r=new X(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function R_(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function b_(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Yc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class MS extends Vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new mS(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Cl(5,5,5),s=new Ti({name:"CubemapFromEquirect",uniforms:$a(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rn,blending:or});s.uniforms.tEquirect.value=t;const a=new Wi(r,s),o=t.minFilter;return t.minFilter===As&&(t.minFilter=hn),new nR(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function Z2(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,p=!1){return f==null?null:p?a(f):s(f)}function s(f){if(f&&f.isTexture){const p=f.mapping;if(p===If||p===Uf)if(e.has(f)){const g=e.get(f).texture;return o(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const _=new MS(g.height);return _.fromEquirectangularTexture(n,f),e.set(f,_),f.addEventListener("dispose",u),o(_.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const p=f.mapping,g=p===If||p===Uf,_=p===zs||p===Ya;if(g||_){let m=t.get(f);const d=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return i===null&&(i=new A_(n)),m=g?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const v=f.image;return g&&v&&v.height>0||_&&v&&l(v)?(i===null&&(i=new A_(n)),m=g?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",c),m.texture):null}}}return f}function o(f,p){return p===If?f.mapping=zs:p===Uf&&(f.mapping=Ya),f}function l(f){let p=0;const g=6;for(let _=0;_<g;_++)f[_]!==void 0&&p++;return p===g}function u(f){const p=f.target;p.removeEventListener("dispose",u);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function c(f){const p=f.target;p.removeEventListener("dispose",c);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function Q2(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&sp("WebGLRenderer: "+i+" extension not supported."),r}}}function J2(n,e,t,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function u(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(g===void 0)return;if(p!==null){const v=p.array;_=p.version;for(let x=0,S=v.length;x<S;x+=3){const T=v[x+0],M=v[x+1],w=v[x+2];f.push(T,M,M,w,w,T)}}else{const v=g.array;_=g.version;for(let x=0,S=v.length/3-1;x<S;x+=3){const T=x+0,M=x+1,w=x+2;f.push(T,M,M,w,w,T)}}const m=new(g.count>=65535?hS:fS)(f,1);m.version=_;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function c(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&u(h)}else u(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:c}}function e3(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,f){n.drawElements(i,f,s,h*a),t.update(f,i,1)}function u(h,f,p){p!==0&&(n.drawElementsInstanced(i,f,s,h*a,p),t.update(f,i,p))}function c(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,p);let _=0;for(let m=0;m<p;m++)_+=f[m];t.update(_,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c}function t3(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Ke("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function n3(n,e,t){const i=new WeakMap,r=new Nt;function s(a,o,l){const u=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=c!==void 0?c.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let b=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",b)};var p=b;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let T=o.attributes.position.count*S,M=1;T>e.maxTextureSize&&(M=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const w=new Float32Array(T*M*4*h),y=new lS(w,T,M,h);y.type=Ni,y.needsUpdate=!0;const A=S*4;for(let P=0;P<h;P++){const D=d[P],k=v[P],O=x[P],L=T*M*4*P;for(let z=0;z<D.count;z++){const U=z*A;g===!0&&(r.fromBufferAttribute(D,z),w[L+U+0]=r.x,w[L+U+1]=r.y,w[L+U+2]=r.z,w[L+U+3]=0),_===!0&&(r.fromBufferAttribute(k,z),w[L+U+4]=r.x,w[L+U+5]=r.y,w[L+U+6]=r.z,w[L+U+7]=0),m===!0&&(r.fromBufferAttribute(O,z),w[L+U+8]=r.x,w[L+U+9]=r.y,w[L+U+10]=r.z,w[L+U+11]=O.itemSize===4?r.w:1)}}f={count:h,texture:y,size:new st(T,M)},i.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function i3(n,e,t,i,r){let s=new WeakMap;function a(u){const c=r.render.frame,h=u.geometry,f=e.get(u,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==c&&(t.update(u.instanceMatrix,n.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,n.ARRAY_BUFFER),s.set(u,c))),u.isSkinnedMesh){const p=u.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return f}function o(){s=new WeakMap}function l(u){const c=u.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}const r3={[jy]:"LINEAR_TONE_MAPPING",[Yy]:"REINHARD_TONE_MAPPING",[qy]:"CINEON_TONE_MAPPING",[$y]:"ACES_FILMIC_TONE_MAPPING",[Zy]:"AGX_TONE_MAPPING",[Qy]:"NEUTRAL_TONE_MAPPING",[Ky]:"CUSTOM_TONE_MAPPING"};function s3(n,e,t,i,r){const s=new Vi(e,t,{type:n,depthBuffer:i,stencilBuffer:r,depthTexture:i?new qa(e,t):void 0}),a=new Vi(e,t,{type:pr,depthBuffer:!1,stencilBuffer:!1}),o=new xr;o.setAttribute("position",new ur([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new ur([0,2,0,0,2,0],2));const l=new JC({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Wi(o,l),c=new xS(-1,1,1,-1,0,1);let h=null,f=null,p=!1,g,_=null,m=[],d=!1;this.setSize=function(v,x){s.setSize(v,x),a.setSize(v,x);for(let S=0;S<m.length;S++){const T=m[S];T.setSize&&T.setSize(v,x)}},this.setEffects=function(v){m=v,d=m.length>0&&m[0].isRenderPass===!0;const x=s.width,S=s.height;for(let T=0;T<m.length;T++){const M=m[T];M.setSize&&M.setSize(x,S)}},this.begin=function(v,x){if(p||v.toneMapping===zi&&m.length===0)return!1;if(_=x,x!==null){const S=x.width,T=x.height;(s.width!==S||s.height!==T)&&this.setSize(S,T)}return d===!1&&v.setRenderTarget(s),g=v.toneMapping,v.toneMapping=zi,!0},this.hasRenderPass=function(){return d},this.end=function(v,x){v.toneMapping=g,p=!0;let S=s,T=a;for(let M=0;M<m.length;M++){const w=m[M];if(w.enabled!==!1&&(w.render(v,T,S,x),w.needsSwap!==!1)){const y=S;S=T,T=y}}if(h!==v.outputColorSpace||f!==v.toneMapping){h=v.outputColorSpace,f=v.toneMapping,l.defines={},je.getTransfer(h)===Je&&(l.defines.SRGB_TRANSFER="");const M=r3[f];M&&(l.defines[M]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(_),v.render(u,c),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const ES=new dn,op=new qa(1,1),TS=new lS,wS=new RC,AS=new mS,P_=[],L_=[],D_=new Float32Array(16),I_=new Float32Array(9),U_=new Float32Array(4);function so(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=P_[r];if(s===void 0&&(s=new Float32Array(r),P_[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function qc(n,e){let t=L_[e];t===void 0&&(t=new Int32Array(e),L_[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function a3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function o3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2fv(this.addr,e),Yt(t,e)}}function l3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;n.uniform3fv(this.addr,e),Yt(t,e)}}function u3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4fv(this.addr,e),Yt(t,e)}}function c3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(jt(t,i))return;U_.set(i),n.uniformMatrix2fv(this.addr,!1,U_),Yt(t,i)}}function f3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(jt(t,i))return;I_.set(i),n.uniformMatrix3fv(this.addr,!1,I_),Yt(t,i)}}function h3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(jt(t,i))return;D_.set(i),n.uniformMatrix4fv(this.addr,!1,D_),Yt(t,i)}}function d3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function p3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2iv(this.addr,e),Yt(t,e)}}function m3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3iv(this.addr,e),Yt(t,e)}}function g3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4iv(this.addr,e),Yt(t,e)}}function _3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function v3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2uiv(this.addr,e),Yt(t,e)}}function x3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3uiv(this.addr,e),Yt(t,e)}}function y3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4uiv(this.addr,e),Yt(t,e)}}function S3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(op.compareFunction=t.isReversedDepthBuffer()?Pm:bm,s=op):s=ES,t.setTexture2D(e||s,r)}function M3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||wS,r)}function E3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||AS,r)}function T3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||TS,r)}function w3(n){switch(n){case 5126:return a3;case 35664:return o3;case 35665:return l3;case 35666:return u3;case 35674:return c3;case 35675:return f3;case 35676:return h3;case 5124:case 35670:return d3;case 35667:case 35671:return p3;case 35668:case 35672:return m3;case 35669:case 35673:return g3;case 5125:return _3;case 36294:return v3;case 36295:return x3;case 36296:return y3;case 35678:case 36198:case 36298:case 36306:case 35682:return S3;case 35679:case 36299:case 36307:return M3;case 35680:case 36300:case 36308:case 36293:return E3;case 36289:case 36303:case 36311:case 36292:return T3}}function A3(n,e){n.uniform1fv(this.addr,e)}function C3(n,e){const t=so(e,this.size,2);n.uniform2fv(this.addr,t)}function R3(n,e){const t=so(e,this.size,3);n.uniform3fv(this.addr,t)}function b3(n,e){const t=so(e,this.size,4);n.uniform4fv(this.addr,t)}function P3(n,e){const t=so(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function L3(n,e){const t=so(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function D3(n,e){const t=so(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function I3(n,e){n.uniform1iv(this.addr,e)}function U3(n,e){n.uniform2iv(this.addr,e)}function N3(n,e){n.uniform3iv(this.addr,e)}function F3(n,e){n.uniform4iv(this.addr,e)}function O3(n,e){n.uniform1uiv(this.addr,e)}function B3(n,e){n.uniform2uiv(this.addr,e)}function k3(n,e){n.uniform3uiv(this.addr,e)}function z3(n,e){n.uniform4uiv(this.addr,e)}function V3(n,e,t){const i=this.cache,r=e.length,s=qc(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Yt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=op:a=ES;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function G3(n,e,t){const i=this.cache,r=e.length,s=qc(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Yt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||wS,s[a])}function H3(n,e,t){const i=this.cache,r=e.length,s=qc(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Yt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||AS,s[a])}function W3(n,e,t){const i=this.cache,r=e.length,s=qc(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Yt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||TS,s[a])}function X3(n){switch(n){case 5126:return A3;case 35664:return C3;case 35665:return R3;case 35666:return b3;case 35674:return P3;case 35675:return L3;case 35676:return D3;case 5124:case 35670:return I3;case 35667:case 35671:return U3;case 35668:case 35672:return N3;case 35669:case 35673:return F3;case 5125:return O3;case 36294:return B3;case 36295:return k3;case 36296:return z3;case 35678:case 36198:case 36298:case 36306:case 35682:return V3;case 35679:case 36299:case 36307:return G3;case 35680:case 36300:case 36308:case 36293:return H3;case 36289:case 36303:case 36311:case 36292:return W3}}class j3{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=w3(t.type)}}class Y3{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=X3(t.type)}}class q3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const ch=/(\w+)(\])?(\[|\.)?/g;function N_(n,e){n.seq.push(e),n.map[e.id]=e}function $3(n,e,t){const i=n.name,r=i.length;for(ch.lastIndex=0;;){const s=ch.exec(i),a=ch.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){N_(t,u===void 0?new j3(o,n,e):new Y3(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new q3(o),N_(t,h)),t=h}}}class Ou{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);$3(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function F_(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const K3=37297;let Z3=0;function Q3(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const O_=new Fe;function J3(n){je._getMatrix(O_,je.workingColorSpace,n);const e=`mat3( ${O_.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(n)){case mc:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function B_(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Q3(n.getShaderSource(e),o)}else return s}function eP(n,e){const t=J3(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const tP={[jy]:"Linear",[Yy]:"Reinhard",[qy]:"Cineon",[$y]:"ACESFilmic",[Zy]:"AgX",[Qy]:"Neutral",[Ky]:"Custom"};function nP(n,e){const t=tP[e];return t===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _u=new X;function iP(){je.getLuminanceCoefficients(_u);const n=_u.x.toFixed(4),e=_u.y.toFixed(4),t=_u.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rP(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ro).join(`
`)}function sP(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function aP(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ro(n){return n!==""}function k_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function z_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oP=/^[ \t]*#include +<([\w\d./]+)>/gm;function lp(n){return n.replace(oP,uP)}const lP=new Map;function uP(n,e){let t=ze[e];if(t===void 0){const i=lP.get(e);if(i!==void 0)t=ze[i],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return lp(t)}const cP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function V_(n){return n.replace(cP,fP)}function fP(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function G_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const hP={[Du]:"SHADOWMAP_TYPE_PCF",[Co]:"SHADOWMAP_TYPE_VSM"};function dP(n){return hP[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const pP={[zs]:"ENVMAP_TYPE_CUBE",[Ya]:"ENVMAP_TYPE_CUBE",[Xc]:"ENVMAP_TYPE_CUBE_UV"};function mP(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":pP[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const gP={[Ya]:"ENVMAP_MODE_REFRACTION"};function _P(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":gP[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const vP={[Xy]:"ENVMAP_BLENDING_MULTIPLY",[oC]:"ENVMAP_BLENDING_MIX",[lC]:"ENVMAP_BLENDING_ADD"};function xP(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":vP[n.combine]||"ENVMAP_BLENDING_NONE"}function yP(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function SP(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=dP(t),u=mP(t),c=_P(t),h=xP(t),f=yP(t),p=rP(t),g=sP(s),_=r.createProgram();let m,d,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ro).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ro).join(`
`),d.length>0&&(d+=`
`)):(m=[G_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ro).join(`
`),d=[G_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zi?"#define TONE_MAPPING":"",t.toneMapping!==zi?ze.tonemapping_pars_fragment:"",t.toneMapping!==zi?nP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,eP("linearToOutputTexel",t.outputColorSpace),iP(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ro).join(`
`)),a=lp(a),a=k_(a,t),a=z_(a,t),o=lp(o),o=k_(o,t),o=z_(o,t),a=V_(a),o=V_(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===n_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===n_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=v+m+a,S=v+d+o,T=F_(r,r.VERTEX_SHADER,x),M=F_(r,r.FRAGMENT_SHADER,S);r.attachShader(_,T),r.attachShader(_,M),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(P){if(n.debug.checkShaderErrors){const D=r.getProgramInfoLog(_)||"",k=r.getShaderInfoLog(T)||"",O=r.getShaderInfoLog(M)||"",L=D.trim(),z=k.trim(),U=O.trim();let F=!0,G=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,T,M);else{const $=B_(r,T,"vertex"),ee=B_(r,M,"fragment");Ke("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+L+`
`+$+`
`+ee)}else L!==""?De("WebGLProgram: Program Info Log:",L):(z===""||U==="")&&(G=!1);G&&(P.diagnostics={runnable:F,programLog:L,vertexShader:{log:z,prefix:m},fragmentShader:{log:U,prefix:d}})}r.deleteShader(T),r.deleteShader(M),y=new Ou(r,_),A=aP(r,_)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let A;this.getAttributes=function(){return A===void 0&&w(this),A};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(_,K3)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Z3++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=M,this}let MP=0;class EP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new TP(e),t.set(e,i)),i}}class TP{constructor(e){this.id=MP++,this.code=e,this.usedTimes=0}}function wP(n){return n===Vs||n===hc||n===dc}function AP(n,e,t,i,r,s){const a=new uS,o=new EP,l=new Set,u=[],c=new Map,h=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,A,b,P,D,k){const O=P.fog,L=D.geometry,z=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,U=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,F=e.get(y.envMap||z,U),G=F&&F.mapping===Xc?F.image.height:null,$=p[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&De("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const ee=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,se=ee!==void 0?ee.length:0;let Ue=0;L.morphAttributes.position!==void 0&&(Ue=1),L.morphAttributes.normal!==void 0&&(Ue=2),L.morphAttributes.color!==void 0&&(Ue=3);let be,Ae,q,ue;if($){const Oe=Di[$];be=Oe.vertexShader,Ae=Oe.fragmentShader}else be=y.vertexShader,Ae=y.fragmentShader,o.update(y),q=o.getVertexShaderID(y),ue=o.getFragmentShaderID(y);const re=n.getRenderTarget(),Re=n.state.buffers.depth.getReversed(),Ie=D.isInstancedMesh===!0,Pe=D.isBatchedMesh===!0,vt=!!y.map,We=!!y.matcap,tt=!!F,dt=!!y.aoMap,Ge=!!y.lightMap,Vt=!!y.bumpMap,xt=!!y.normalMap,Un=!!y.displacementMap,N=!!y.emissiveMap,Gt=!!y.metalnessMap,Xe=!!y.roughnessMap,ct=y.anisotropy>0,de=y.clearcoat>0,At=y.dispersion>0,R=y.iridescence>0,E=y.sheen>0,V=y.transmission>0,Z=ct&&!!y.anisotropyMap,te=de&&!!y.clearcoatMap,ae=de&&!!y.clearcoatNormalMap,he=de&&!!y.clearcoatRoughnessMap,Y=R&&!!y.iridescenceMap,Q=R&&!!y.iridescenceThicknessMap,_e=E&&!!y.sheenColorMap,ye=E&&!!y.sheenRoughnessMap,ce=!!y.specularMap,oe=!!y.specularColorMap,Ne=!!y.specularIntensityMap,ke=V&&!!y.transmissionMap,Qe=V&&!!y.thicknessMap,I=!!y.gradientMap,le=!!y.alphaMap,K=y.alphaTest>0,ve=!!y.alphaHash,fe=!!y.extensions;let J=zi;y.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(J=n.toneMapping);const Te={shaderID:$,shaderType:y.type,shaderName:y.name,vertexShader:be,fragmentShader:Ae,defines:y.defines,customVertexShaderID:q,customFragmentShaderID:ue,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Pe,batchingColor:Pe&&D._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&D.instanceColor!==null,instancingMorph:Ie&&D.morphTexture!==null,outputColorSpace:re===null?n.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:vt,matcap:We,envMap:tt,envMapMode:tt&&F.mapping,envMapCubeUVHeight:G,aoMap:dt,lightMap:Ge,bumpMap:Vt,normalMap:xt,displacementMap:Un,emissiveMap:N,normalMapObjectSpace:xt&&y.normalMapType===fC,normalMapTangentSpace:xt&&y.normalMapType===J0,packedNormalMap:xt&&y.normalMapType===J0&&wP(y.normalMap.format),metalnessMap:Gt,roughnessMap:Xe,anisotropy:ct,anisotropyMap:Z,clearcoat:de,clearcoatMap:te,clearcoatNormalMap:ae,clearcoatRoughnessMap:he,dispersion:At,iridescence:R,iridescenceMap:Y,iridescenceThicknessMap:Q,sheen:E,sheenColorMap:_e,sheenRoughnessMap:ye,specularMap:ce,specularColorMap:oe,specularIntensityMap:Ne,transmission:V,transmissionMap:ke,thicknessMap:Qe,gradientMap:I,opaque:y.transparent===!1&&y.blending===Ua&&y.alphaToCoverage===!1,alphaMap:le,alphaTest:K,alphaHash:ve,combine:y.combine,mapUv:vt&&g(y.map.channel),aoMapUv:dt&&g(y.aoMap.channel),lightMapUv:Ge&&g(y.lightMap.channel),bumpMapUv:Vt&&g(y.bumpMap.channel),normalMapUv:xt&&g(y.normalMap.channel),displacementMapUv:Un&&g(y.displacementMap.channel),emissiveMapUv:N&&g(y.emissiveMap.channel),metalnessMapUv:Gt&&g(y.metalnessMap.channel),roughnessMapUv:Xe&&g(y.roughnessMap.channel),anisotropyMapUv:Z&&g(y.anisotropyMap.channel),clearcoatMapUv:te&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:ae&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:ye&&g(y.sheenRoughnessMap.channel),specularMapUv:ce&&g(y.specularMap.channel),specularColorMapUv:oe&&g(y.specularColorMap.channel),specularIntensityMapUv:Ne&&g(y.specularIntensityMap.channel),transmissionMapUv:ke&&g(y.transmissionMap.channel),thicknessMapUv:Qe&&g(y.thicknessMap.channel),alphaMapUv:le&&g(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(xt||ct),vertexNormals:!!L.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!L.attributes.uv&&(vt||le),fog:!!O,useFog:y.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||L.attributes.normal===void 0&&xt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Re,skinning:D.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Ue,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&b.length>0,shadowMapType:n.shadowMap.type,toneMapping:J,decodeVideoTexture:vt&&y.map.isVideoTexture===!0&&je.getTransfer(y.map.colorSpace)===Je,decodeVideoTextureEmissive:N&&y.emissiveMap.isVideoTexture===!0&&je.getTransfer(y.emissiveMap.colorSpace)===Je,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===nr,flipSided:y.side===Rn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:fe&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&y.extensions.multiDraw===!0||Pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function m(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const b in y.defines)A.push(b),A.push(y.defines[b]);return y.isRawShaderMaterial===!1&&(d(A,y),v(A,y),A.push(n.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function d(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function v(y,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),y.push(a.mask)}function x(y){const A=p[y.type];let b;if(A){const P=Di[A];b=KC.clone(P.uniforms)}else b=y.uniforms;return b}function S(y,A){let b=c.get(A);return b!==void 0?++b.usedTimes:(b=new SP(n,A,y,r),u.push(b),c.set(A,b)),b}function T(y){if(--y.usedTimes===0){const A=u.indexOf(y);u[A]=u[u.length-1],u.pop(),c.delete(y.cacheKey),y.destroy()}}function M(y){o.remove(y)}function w(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:x,acquireProgram:S,releaseProgram:T,releaseShaderCache:M,programs:u,dispose:w}}function CP(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function RP(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function H_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function W_(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,g,_,m,d){let v=n[e];return v===void 0?(v={id:f.id,object:f,geometry:p,material:g,materialVariant:a(f),groupOrder:_,renderOrder:f.renderOrder,z:m,group:d},n[e]=v):(v.id=f.id,v.object=f,v.geometry=p,v.material=g,v.materialVariant=a(f),v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=m,v.group=d),e++,v}function l(f,p,g,_,m,d){const v=o(f,p,g,_,m,d);g.transmission>0?i.push(v):g.transparent===!0?r.push(v):t.push(v)}function u(f,p,g,_,m,d){const v=o(f,p,g,_,m,d);g.transmission>0?i.unshift(v):g.transparent===!0?r.unshift(v):t.unshift(v)}function c(f,p){t.length>1&&t.sort(f||RP),i.length>1&&i.sort(p||H_),r.length>1&&r.sort(p||H_)}function h(){for(let f=e,p=n.length;f<p;f++){const g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:h,sort:c}}function bP(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new W_,n.set(i,[a])):r>=s.length?(a=new W_,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function PP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new rt};break;case"SpotLight":t={position:new X,direction:new X,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function LP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let DP=0;function IP(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function UP(n){const e=new PP,t=LP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new X);const r=new X,s=new Xt,a=new Xt;function o(u){let c=0,h=0,f=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,v=0,x=0,S=0,T=0,M=0,w=0;u.sort(IP);for(let A=0,b=u.length;A<b;A++){const P=u[A],D=P.color,k=P.intensity,O=P.distance;let L=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Vs?L=P.shadow.map.texture:L=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)c+=D.r*k,h+=D.g*k,f+=D.b*k;else if(P.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(P.sh.coefficients[z],k);w++}else if(P.isDirectionalLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const U=P.shadow,F=t.get(P);F.shadowIntensity=U.intensity,F.shadowBias=U.bias,F.shadowNormalBias=U.normalBias,F.shadowRadius=U.radius,F.shadowMapSize=U.mapSize,i.directionalShadow[p]=F,i.directionalShadowMap[p]=L,i.directionalShadowMatrix[p]=P.shadow.matrix,v++}i.directional[p]=z,p++}else if(P.isSpotLight){const z=e.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(D).multiplyScalar(k),z.distance=O,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,i.spot[_]=z;const U=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,U.updateMatrices(P),P.castShadow&&M++),i.spotLightMatrix[_]=U.matrix,P.castShadow){const F=t.get(P);F.shadowIntensity=U.intensity,F.shadowBias=U.bias,F.shadowNormalBias=U.normalBias,F.shadowRadius=U.radius,F.shadowMapSize=U.mapSize,i.spotShadow[_]=F,i.spotShadowMap[_]=L,S++}_++}else if(P.isRectAreaLight){const z=e.get(P);z.color.copy(D).multiplyScalar(k),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=z,m++}else if(P.isPointLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){const U=P.shadow,F=t.get(P);F.shadowIntensity=U.intensity,F.shadowBias=U.bias,F.shadowNormalBias=U.normalBias,F.shadowRadius=U.radius,F.shadowMapSize=U.mapSize,F.shadowCameraNear=U.camera.near,F.shadowCameraFar=U.camera.far,i.pointShadow[g]=F,i.pointShadowMap[g]=L,i.pointShadowMatrix[g]=P.shadow.matrix,x++}i.point[g]=z,g++}else if(P.isHemisphereLight){const z=e.get(P);z.skyColor.copy(P.color).multiplyScalar(k),z.groundColor.copy(P.groundColor).multiplyScalar(k),i.hemi[d]=z,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=h,i.ambient[2]=f;const y=i.hash;(y.directionalLength!==p||y.pointLength!==g||y.spotLength!==_||y.rectAreaLength!==m||y.hemiLength!==d||y.numDirectionalShadows!==v||y.numPointShadows!==x||y.numSpotShadows!==S||y.numSpotMaps!==T||y.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+T-M,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=w,y.directionalLength=p,y.pointLength=g,y.spotLength=_,y.rectAreaLength=m,y.hemiLength=d,y.numDirectionalShadows=v,y.numPointShadows=x,y.numSpotShadows=S,y.numSpotMaps=T,y.numLightProbes=w,i.version=DP++)}function l(u,c){let h=0,f=0,p=0,g=0,_=0;const m=c.matrixWorldInverse;for(let d=0,v=u.length;d<v;d++){const x=u[d];if(x.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(x.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function X_(n){const e=new UP(n),t=[],i=[],r=[];function s(f){h.camera=f,t.length=0,i.length=0,r.length=0}function a(f){t.push(f)}function o(f){i.push(f)}function l(f){r.push(f)}function u(){e.setup(t)}function c(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:u,setupLightsView:c,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function NP(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new X_(n),e.set(r,[o])):s>=a.length?(o=new X_(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const FP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OP=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,BP=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],kP=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],j_=new Xt,So=new X,fh=new X;function zP(n,e,t){let i=new pS;const r=new st,s=new st,a=new Nt,o=new eR,l=new tR,u={},c=t.maxTextureSize,h={[ns]:Rn,[Rn]:ns,[nr]:nr},f=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:FP,fragmentShader:OP}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new xr;g.setAttribute("position",new Gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Wi(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Du;let d=this.type;this.render=function(M,w,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===GA&&(De("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Du);const A=n.getRenderTarget(),b=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),D=n.state;D.setBlending(or),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const k=d!==this.type;k&&w.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(L=>L.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,L=M.length;O<L;O++){const z=M[O],U=z.shadow;if(U===void 0){De("WebGLShadowMap:",z,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const F=U.getFrameExtents();r.multiply(F),s.copy(U.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/F.x),r.x=s.x*F.x,U.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/F.y),r.y=s.y*F.y,U.mapSize.y=s.y));const G=n.state.buffers.depth.getReversed();if(U.camera._reversedDepth=G,U.map===null||k===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Co){if(z.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Vi(r.x,r.y,{format:Vs,type:pr,minFilter:hn,magFilter:hn,generateMipmaps:!1}),U.map.texture.name=z.name+".shadowMap",U.map.depthTexture=new qa(r.x,r.y,Ni),U.map.depthTexture.name=z.name+".shadowMapDepth",U.map.depthTexture.format=mr,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Zt,U.map.depthTexture.magFilter=Zt}else z.isPointLight?(U.map=new MS(r.x),U.map.depthTexture=new qC(r.x,Hi)):(U.map=new Vi(r.x,r.y),U.map.depthTexture=new qa(r.x,r.y,Hi)),U.map.depthTexture.name=z.name+".shadowMap",U.map.depthTexture.format=mr,this.type===Du?(U.map.depthTexture.compareFunction=G?Pm:bm,U.map.depthTexture.minFilter=hn,U.map.depthTexture.magFilter=hn):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Zt,U.map.depthTexture.magFilter=Zt);U.camera.updateProjectionMatrix()}const $=U.map.isWebGLCubeRenderTarget?6:1;for(let ee=0;ee<$;ee++){if(U.map.isWebGLCubeRenderTarget)n.setRenderTarget(U.map,ee),n.clear();else{ee===0&&(n.setRenderTarget(U.map),n.clear());const se=U.getViewport(ee);a.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),D.viewport(a)}if(z.isPointLight){const se=U.camera,Ue=U.matrix,be=z.distance||se.far;be!==se.far&&(se.far=be,se.updateProjectionMatrix()),So.setFromMatrixPosition(z.matrixWorld),se.position.copy(So),fh.copy(se.position),fh.add(BP[ee]),se.up.copy(kP[ee]),se.lookAt(fh),se.updateMatrixWorld(),Ue.makeTranslation(-So.x,-So.y,-So.z),j_.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),U._frustum.setFromProjectionMatrix(j_,se.coordinateSystem,se.reversedDepth)}else U.updateMatrices(z);i=U.getFrustum(),S(w,y,U.camera,z,this.type)}U.isPointLightShadow!==!0&&this.type===Co&&v(U,y),U.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(A,b,P)};function v(M,w){const y=e.update(_);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Vi(r.x,r.y,{format:Vs,type:pr})),f.uniforms.shadow_pass.value=M.map.depthTexture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(w,null,y,f,_,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(w,null,y,p,_,null)}function x(M,w,y,A){let b=null;const P=y.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)b=P;else if(b=y.isPointLight===!0?l:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const D=b.uuid,k=w.uuid;let O=u[D];O===void 0&&(O={},u[D]=O);let L=O[k];L===void 0&&(L=b.clone(),O[k]=L,w.addEventListener("dispose",T)),b=L}if(b.visible=w.visible,b.wireframe=w.wireframe,A===Co?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:h[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,y.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const D=n.properties.get(b);D.light=y}return b}function S(M,w,y,A,b){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&b===Co)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,M.matrixWorld);const k=e.update(M),O=M.material;if(Array.isArray(O)){const L=k.groups;for(let z=0,U=L.length;z<U;z++){const F=L[z],G=O[F.materialIndex];if(G&&G.visible){const $=x(M,G,A,b);M.onBeforeShadow(n,M,w,y,k,$,F),n.renderBufferDirect(y,null,k,$,M,F),M.onAfterShadow(n,M,w,y,k,$,F)}}}else if(O.visible){const L=x(M,O,A,b);M.onBeforeShadow(n,M,w,y,k,L,null),n.renderBufferDirect(y,null,k,L,M,null),M.onAfterShadow(n,M,w,y,k,L,null)}}const D=M.children;for(let k=0,O=D.length;k<O;k++)S(D[k],w,y,A,b)}function T(M){M.target.removeEventListener("dispose",T);for(const y in u){const A=u[y],b=M.target.uuid;b in A&&(A[b].dispose(),delete A[b])}}}function VP(n,e){function t(){let I=!1;const le=new Nt;let K=null;const ve=new Nt(0,0,0,0);return{setMask:function(fe){K!==fe&&!I&&(n.colorMask(fe,fe,fe,fe),K=fe)},setLocked:function(fe){I=fe},setClear:function(fe,J,Te,Oe,Pt){Pt===!0&&(fe*=Oe,J*=Oe,Te*=Oe),le.set(fe,J,Te,Oe),ve.equals(le)===!1&&(n.clearColor(fe,J,Te,Oe),ve.copy(le))},reset:function(){I=!1,K=null,ve.set(-1,0,0,0)}}}function i(){let I=!1,le=!1,K=null,ve=null,fe=null;return{setReversed:function(J){if(le!==J){const Te=e.get("EXT_clip_control");J?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),le=J;const Oe=fe;fe=null,this.setClear(Oe)}},getReversed:function(){return le},setTest:function(J){J?re(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(J){K!==J&&!I&&(n.depthMask(J),K=J)},setFunc:function(J){if(le&&(J=SC[J]),ve!==J){switch(J){case yd:n.depthFunc(n.NEVER);break;case Sd:n.depthFunc(n.ALWAYS);break;case Md:n.depthFunc(n.LESS);break;case ja:n.depthFunc(n.LEQUAL);break;case Ed:n.depthFunc(n.EQUAL);break;case Td:n.depthFunc(n.GEQUAL);break;case wd:n.depthFunc(n.GREATER);break;case Ad:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ve=J}},setLocked:function(J){I=J},setClear:function(J){fe!==J&&(fe=J,le&&(J=1-J),n.clearDepth(J))},reset:function(){I=!1,K=null,ve=null,fe=null,le=!1}}}function r(){let I=!1,le=null,K=null,ve=null,fe=null,J=null,Te=null,Oe=null,Pt=null;return{setTest:function(nt){I||(nt?re(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(nt){le!==nt&&!I&&(n.stencilMask(nt),le=nt)},setFunc:function(nt,ji,wi){(K!==nt||ve!==ji||fe!==wi)&&(n.stencilFunc(nt,ji,wi),K=nt,ve=ji,fe=wi)},setOp:function(nt,ji,wi){(J!==nt||Te!==ji||Oe!==wi)&&(n.stencilOp(nt,ji,wi),J=nt,Te=ji,Oe=wi)},setLocked:function(nt){I=nt},setClear:function(nt){Pt!==nt&&(n.clearStencil(nt),Pt=nt)},reset:function(){I=!1,le=null,K=null,ve=null,fe=null,J=null,Te=null,Oe=null,Pt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,u=new WeakMap;let c={},h={},f={},p=new WeakMap,g=[],_=null,m=!1,d=null,v=null,x=null,S=null,T=null,M=null,w=null,y=new rt(0,0,0),A=0,b=!1,P=null,D=null,k=null,O=null,L=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,F=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(G)[1]),U=F>=1):G.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),U=F>=2);let $=null,ee={};const se=n.getParameter(n.SCISSOR_BOX),Ue=n.getParameter(n.VIEWPORT),be=new Nt().fromArray(se),Ae=new Nt().fromArray(Ue);function q(I,le,K,ve){const fe=new Uint8Array(4),J=n.createTexture();n.bindTexture(I,J),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Te=0;Te<K;Te++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,ve,0,n.RGBA,n.UNSIGNED_BYTE,fe):n.texImage2D(le+Te,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,fe);return J}const ue={};ue[n.TEXTURE_2D]=q(n.TEXTURE_2D,n.TEXTURE_2D,1),ue[n.TEXTURE_CUBE_MAP]=q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[n.TEXTURE_2D_ARRAY]=q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ue[n.TEXTURE_3D]=q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(n.DEPTH_TEST),a.setFunc(ja),Vt(!1),xt($0),re(n.CULL_FACE),dt(or);function re(I){c[I]!==!0&&(n.enable(I),c[I]=!0)}function Re(I){c[I]!==!1&&(n.disable(I),c[I]=!1)}function Ie(I,le){return f[I]!==le?(n.bindFramebuffer(I,le),f[I]=le,I===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=le),I===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=le),!0):!1}function Pe(I,le){let K=g,ve=!1;if(I){K=p.get(le),K===void 0&&(K=[],p.set(le,K));const fe=I.textures;if(K.length!==fe.length||K[0]!==n.COLOR_ATTACHMENT0){for(let J=0,Te=fe.length;J<Te;J++)K[J]=n.COLOR_ATTACHMENT0+J;K.length=fe.length,ve=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,ve=!0);ve&&n.drawBuffers(K)}function vt(I){return _!==I?(n.useProgram(I),_=I,!0):!1}const We={[Ss]:n.FUNC_ADD,[WA]:n.FUNC_SUBTRACT,[XA]:n.FUNC_REVERSE_SUBTRACT};We[jA]=n.MIN,We[YA]=n.MAX;const tt={[qA]:n.ZERO,[$A]:n.ONE,[KA]:n.SRC_COLOR,[vd]:n.SRC_ALPHA,[nC]:n.SRC_ALPHA_SATURATE,[eC]:n.DST_COLOR,[QA]:n.DST_ALPHA,[ZA]:n.ONE_MINUS_SRC_COLOR,[xd]:n.ONE_MINUS_SRC_ALPHA,[tC]:n.ONE_MINUS_DST_COLOR,[JA]:n.ONE_MINUS_DST_ALPHA,[iC]:n.CONSTANT_COLOR,[rC]:n.ONE_MINUS_CONSTANT_COLOR,[sC]:n.CONSTANT_ALPHA,[aC]:n.ONE_MINUS_CONSTANT_ALPHA};function dt(I,le,K,ve,fe,J,Te,Oe,Pt,nt){if(I===or){m===!0&&(Re(n.BLEND),m=!1);return}if(m===!1&&(re(n.BLEND),m=!0),I!==HA){if(I!==d||nt!==b){if((v!==Ss||T!==Ss)&&(n.blendEquation(n.FUNC_ADD),v=Ss,T=Ss),nt)switch(I){case Ua:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case K0:n.blendFunc(n.ONE,n.ONE);break;case Z0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Q0:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ke("WebGLState: Invalid blending: ",I);break}else switch(I){case Ua:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case K0:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Z0:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Q0:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",I);break}x=null,S=null,M=null,w=null,y.set(0,0,0),A=0,d=I,b=nt}return}fe=fe||le,J=J||K,Te=Te||ve,(le!==v||fe!==T)&&(n.blendEquationSeparate(We[le],We[fe]),v=le,T=fe),(K!==x||ve!==S||J!==M||Te!==w)&&(n.blendFuncSeparate(tt[K],tt[ve],tt[J],tt[Te]),x=K,S=ve,M=J,w=Te),(Oe.equals(y)===!1||Pt!==A)&&(n.blendColor(Oe.r,Oe.g,Oe.b,Pt),y.copy(Oe),A=Pt),d=I,b=!1}function Ge(I,le){I.side===nr?Re(n.CULL_FACE):re(n.CULL_FACE);let K=I.side===Rn;le&&(K=!K),Vt(K),I.blending===Ua&&I.transparent===!1?dt(or):dt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const ve=I.stencilWrite;o.setTest(ve),ve&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),N(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?re(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(I){P!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),P=I)}function xt(I){I!==zA?(re(n.CULL_FACE),I!==D&&(I===$0?n.cullFace(n.BACK):I===VA?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),D=I}function Un(I){I!==k&&(U&&n.lineWidth(I),k=I)}function N(I,le,K){I?(re(n.POLYGON_OFFSET_FILL),(O!==le||L!==K)&&(O=le,L=K,a.getReversed()&&(le=-le),n.polygonOffset(le,K))):Re(n.POLYGON_OFFSET_FILL)}function Gt(I){I?re(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function Xe(I){I===void 0&&(I=n.TEXTURE0+z-1),$!==I&&(n.activeTexture(I),$=I)}function ct(I,le,K){K===void 0&&($===null?K=n.TEXTURE0+z-1:K=$);let ve=ee[K];ve===void 0&&(ve={type:void 0,texture:void 0},ee[K]=ve),(ve.type!==I||ve.texture!==le)&&($!==K&&(n.activeTexture(K),$=K),n.bindTexture(I,le||ue[I]),ve.type=I,ve.texture=le)}function de(){const I=ee[$];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function At(){try{n.compressedTexImage2D(...arguments)}catch(I){Ke("WebGLState:",I)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(I){Ke("WebGLState:",I)}}function E(){try{n.texSubImage2D(...arguments)}catch(I){Ke("WebGLState:",I)}}function V(){try{n.texSubImage3D(...arguments)}catch(I){Ke("WebGLState:",I)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(I){Ke("WebGLState:",I)}}function te(){try{n.compressedTexSubImage3D(...arguments)}catch(I){Ke("WebGLState:",I)}}function ae(){try{n.texStorage2D(...arguments)}catch(I){Ke("WebGLState:",I)}}function he(){try{n.texStorage3D(...arguments)}catch(I){Ke("WebGLState:",I)}}function Y(){try{n.texImage2D(...arguments)}catch(I){Ke("WebGLState:",I)}}function Q(){try{n.texImage3D(...arguments)}catch(I){Ke("WebGLState:",I)}}function _e(I){return h[I]!==void 0?h[I]:n.getParameter(I)}function ye(I,le){h[I]!==le&&(n.pixelStorei(I,le),h[I]=le)}function ce(I){be.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),be.copy(I))}function oe(I){Ae.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Ae.copy(I))}function Ne(I,le){let K=u.get(le);K===void 0&&(K=new WeakMap,u.set(le,K));let ve=K.get(I);ve===void 0&&(ve=n.getUniformBlockIndex(le,I.name),K.set(I,ve))}function ke(I,le){const ve=u.get(le).get(I);l.get(le)!==ve&&(n.uniformBlockBinding(le,ve,I.__bindingPointIndex),l.set(le,ve))}function Qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),c={},h={},$=null,ee={},f={},p=new WeakMap,g=[],_=null,m=!1,d=null,v=null,x=null,S=null,T=null,M=null,w=null,y=new rt(0,0,0),A=0,b=!1,P=null,D=null,k=null,O=null,L=null,be.set(0,0,n.canvas.width,n.canvas.height),Ae.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:re,disable:Re,bindFramebuffer:Ie,drawBuffers:Pe,useProgram:vt,setBlending:dt,setMaterial:Ge,setFlipSided:Vt,setCullFace:xt,setLineWidth:Un,setPolygonOffset:N,setScissorTest:Gt,activeTexture:Xe,bindTexture:ct,unbindTexture:de,compressedTexImage2D:At,compressedTexImage3D:R,texImage2D:Y,texImage3D:Q,pixelStorei:ye,getParameter:_e,updateUBOMapping:Ne,uniformBlockBinding:ke,texStorage2D:ae,texStorage3D:he,texSubImage2D:E,texSubImage3D:V,compressedTexSubImage2D:Z,compressedTexSubImage3D:te,scissor:ce,viewport:oe,reset:Qe}}function GP(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new st,c=new WeakMap,h=new Set;let f;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,E){return g?new OffscreenCanvas(R,E):_c("canvas")}function m(R,E,V){let Z=1;const te=At(R);if((te.width>V||te.height>V)&&(Z=V/Math.max(te.width,te.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ae=Math.floor(Z*te.width),he=Math.floor(Z*te.height);f===void 0&&(f=_(ae,he));const Y=E?_(ae,he):f;return Y.width=ae,Y.height=he,Y.getContext("2d").drawImage(R,0,0,ae,he),De("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+ae+"x"+he+")."),Y}else return"data"in R&&De("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function d(R){return R.generateMipmaps}function v(R){n.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(R,E,V,Z,te,ae=!1){if(R!==null){if(n[R]!==void 0)return n[R];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let he;Z&&(he=e.get("EXT_texture_norm16"),he||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=E;if(E===n.RED&&(V===n.FLOAT&&(Y=n.R32F),V===n.HALF_FLOAT&&(Y=n.R16F),V===n.UNSIGNED_BYTE&&(Y=n.R8),V===n.UNSIGNED_SHORT&&he&&(Y=he.R16_EXT),V===n.SHORT&&he&&(Y=he.R16_SNORM_EXT)),E===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(Y=n.R8UI),V===n.UNSIGNED_SHORT&&(Y=n.R16UI),V===n.UNSIGNED_INT&&(Y=n.R32UI),V===n.BYTE&&(Y=n.R8I),V===n.SHORT&&(Y=n.R16I),V===n.INT&&(Y=n.R32I)),E===n.RG&&(V===n.FLOAT&&(Y=n.RG32F),V===n.HALF_FLOAT&&(Y=n.RG16F),V===n.UNSIGNED_BYTE&&(Y=n.RG8),V===n.UNSIGNED_SHORT&&he&&(Y=he.RG16_EXT),V===n.SHORT&&he&&(Y=he.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(Y=n.RG8UI),V===n.UNSIGNED_SHORT&&(Y=n.RG16UI),V===n.UNSIGNED_INT&&(Y=n.RG32UI),V===n.BYTE&&(Y=n.RG8I),V===n.SHORT&&(Y=n.RG16I),V===n.INT&&(Y=n.RG32I)),E===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),V===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),V===n.UNSIGNED_INT&&(Y=n.RGB32UI),V===n.BYTE&&(Y=n.RGB8I),V===n.SHORT&&(Y=n.RGB16I),V===n.INT&&(Y=n.RGB32I)),E===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),V===n.UNSIGNED_INT&&(Y=n.RGBA32UI),V===n.BYTE&&(Y=n.RGBA8I),V===n.SHORT&&(Y=n.RGBA16I),V===n.INT&&(Y=n.RGBA32I)),E===n.RGB&&(V===n.UNSIGNED_SHORT&&he&&(Y=he.RGB16_EXT),V===n.SHORT&&he&&(Y=he.RGB16_SNORM_EXT),V===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),V===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),E===n.RGBA){const Q=ae?mc:je.getTransfer(te);V===n.FLOAT&&(Y=n.RGBA32F),V===n.HALF_FLOAT&&(Y=n.RGBA16F),V===n.UNSIGNED_BYTE&&(Y=Q===Je?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT&&he&&(Y=he.RGBA16_EXT),V===n.SHORT&&he&&(Y=he.RGBA16_SNORM_EXT),V===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function T(R,E){let V;return R?E===null||E===Hi||E===cl?V=n.DEPTH24_STENCIL8:E===Ni?V=n.DEPTH32F_STENCIL8:E===ul&&(V=n.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Hi||E===cl?V=n.DEPTH_COMPONENT24:E===Ni?V=n.DEPTH_COMPONENT32F:E===ul&&(V=n.DEPTH_COMPONENT16),V}function M(R,E){return d(R)===!0||R.isFramebufferTexture&&R.minFilter!==Zt&&R.minFilter!==hn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function w(R){const E=R.target;E.removeEventListener("dispose",w),A(E),E.isVideoTexture&&c.delete(E),E.isHTMLTexture&&h.delete(E)}function y(R){const E=R.target;E.removeEventListener("dispose",y),P(E)}function A(R){const E=i.get(R);if(E.__webglInit===void 0)return;const V=R.source,Z=p.get(V);if(Z){const te=Z[E.__cacheKey];te.usedTimes--,te.usedTimes===0&&b(R),Object.keys(Z).length===0&&p.delete(V)}i.remove(R)}function b(R){const E=i.get(R);n.deleteTexture(E.__webglTexture);const V=R.source,Z=p.get(V);delete Z[E.__cacheKey],a.memory.textures--}function P(R){const E=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let te=0;te<E.__webglFramebuffer[Z].length;te++)n.deleteFramebuffer(E.__webglFramebuffer[Z][te]);else n.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)n.deleteFramebuffer(E.__webglFramebuffer[Z]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const V=R.textures;for(let Z=0,te=V.length;Z<te;Z++){const ae=i.get(V[Z]);ae.__webglTexture&&(n.deleteTexture(ae.__webglTexture),a.memory.textures--),i.remove(V[Z])}i.remove(R)}let D=0;function k(){D=0}function O(){return D}function L(R){D=R}function z(){const R=D;return R>=r.maxTextures&&De("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),D+=1,R}function U(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function F(R,E){const V=i.get(R);if(R.isVideoTexture&&ct(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&V.__version!==R.version){const Z=R.image;if(Z===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(V,R,E);return}}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+E)}function G(R,E){const V=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){Re(V,R,E);return}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+E)}function $(R,E){const V=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){Re(V,R,E);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+E)}function ee(R,E){const V=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&V.__version!==R.version){Ie(V,R,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+E)}const se={[Cd]:n.REPEAT,[sr]:n.CLAMP_TO_EDGE,[Rd]:n.MIRRORED_REPEAT},Ue={[Zt]:n.NEAREST,[uC]:n.NEAREST_MIPMAP_NEAREST,[$l]:n.NEAREST_MIPMAP_LINEAR,[hn]:n.LINEAR,[Nf]:n.LINEAR_MIPMAP_NEAREST,[As]:n.LINEAR_MIPMAP_LINEAR},be={[hC]:n.NEVER,[_C]:n.ALWAYS,[dC]:n.LESS,[bm]:n.LEQUAL,[pC]:n.EQUAL,[Pm]:n.GEQUAL,[mC]:n.GREATER,[gC]:n.NOTEQUAL};function Ae(R,E){if(E.type===Ni&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===hn||E.magFilter===Nf||E.magFilter===$l||E.magFilter===As||E.minFilter===hn||E.minFilter===Nf||E.minFilter===$l||E.minFilter===As)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,se[E.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,se[E.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,se[E.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Ue[E.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Ue[E.minFilter]),E.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,be[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Zt||E.minFilter!==$l&&E.minFilter!==As||E.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function q(R,E){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",w));const Z=E.source;let te=p.get(Z);te===void 0&&(te={},p.set(Z,te));const ae=U(E);if(ae!==R.__cacheKey){te[ae]===void 0&&(te[ae]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,V=!0),te[ae].usedTimes++;const he=te[R.__cacheKey];he!==void 0&&(te[R.__cacheKey].usedTimes--,he.usedTimes===0&&b(E)),R.__cacheKey=ae,R.__webglTexture=te[ae].texture}return V}function ue(R,E,V){return Math.floor(Math.floor(R/V)/E)}function re(R,E,V,Z){const ae=R.updateRanges;if(ae.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,V,Z,E.data);else{ae.sort((ye,ce)=>ye.start-ce.start);let he=0;for(let ye=1;ye<ae.length;ye++){const ce=ae[he],oe=ae[ye],Ne=ce.start+ce.count,ke=ue(oe.start,E.width,4),Qe=ue(ce.start,E.width,4);oe.start<=Ne+1&&ke===Qe&&ue(oe.start+oe.count-1,E.width,4)===ke?ce.count=Math.max(ce.count,oe.start+oe.count-ce.start):(++he,ae[he]=oe)}ae.length=he+1;const Y=t.getParameter(n.UNPACK_ROW_LENGTH),Q=t.getParameter(n.UNPACK_SKIP_PIXELS),_e=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let ye=0,ce=ae.length;ye<ce;ye++){const oe=ae[ye],Ne=Math.floor(oe.start/4),ke=Math.ceil(oe.count/4),Qe=Ne%E.width,I=Math.floor(Ne/E.width),le=ke,K=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Qe),t.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,Qe,I,le,K,V,Z,E.data)}R.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Y),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(n.UNPACK_SKIP_ROWS,_e)}}function Re(R,E,V){let Z=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=n.TEXTURE_3D);const te=q(R,E),ae=E.source;t.bindTexture(Z,R.__webglTexture,n.TEXTURE0+V);const he=i.get(ae);if(ae.version!==he.__version||te===!0){if(t.activeTexture(n.TEXTURE0+V),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const K=je.getPrimaries(je.workingColorSpace),ve=E.colorSpace===Ur?null:je.getPrimaries(E.colorSpace),fe=E.colorSpace===Ur||K===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe)}t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let Q=m(E.image,!1,r.maxTextureSize);Q=de(E,Q);const _e=s.convert(E.format,E.colorSpace),ye=s.convert(E.type);let ce=S(E.internalFormat,_e,ye,E.normalized,E.colorSpace,E.isVideoTexture);Ae(Z,E);let oe;const Ne=E.mipmaps,ke=E.isVideoTexture!==!0,Qe=he.__version===void 0||te===!0,I=ae.dataReady,le=M(E,Q);if(E.isDepthTexture)ce=T(E.format===Cs,E.type),Qe&&(ke?t.texStorage2D(n.TEXTURE_2D,1,ce,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,ce,Q.width,Q.height,0,_e,ye,null));else if(E.isDataTexture)if(Ne.length>0){ke&&Qe&&t.texStorage2D(n.TEXTURE_2D,le,ce,Ne[0].width,Ne[0].height);for(let K=0,ve=Ne.length;K<ve;K++)oe=Ne[K],ke?I&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,oe.width,oe.height,_e,ye,oe.data):t.texImage2D(n.TEXTURE_2D,K,ce,oe.width,oe.height,0,_e,ye,oe.data);E.generateMipmaps=!1}else ke?(Qe&&t.texStorage2D(n.TEXTURE_2D,le,ce,Q.width,Q.height),I&&re(E,Q,_e,ye)):t.texImage2D(n.TEXTURE_2D,0,ce,Q.width,Q.height,0,_e,ye,Q.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ke&&Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,ce,Ne[0].width,Ne[0].height,Q.depth);for(let K=0,ve=Ne.length;K<ve;K++)if(oe=Ne[K],E.format!==yi)if(_e!==null)if(ke){if(I)if(E.layerUpdates.size>0){const fe=E_(oe.width,oe.height,E.format,E.type);for(const J of E.layerUpdates){const Te=oe.data.subarray(J*fe/oe.data.BYTES_PER_ELEMENT,(J+1)*fe/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,J,oe.width,oe.height,1,_e,Te)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,oe.width,oe.height,Q.depth,_e,oe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,ce,oe.width,oe.height,Q.depth,0,oe.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,oe.width,oe.height,Q.depth,_e,ye,oe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,ce,oe.width,oe.height,Q.depth,0,_e,ye,oe.data)}else{ke&&Qe&&t.texStorage2D(n.TEXTURE_2D,le,ce,Ne[0].width,Ne[0].height);for(let K=0,ve=Ne.length;K<ve;K++)oe=Ne[K],E.format!==yi?_e!==null?ke?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,oe.width,oe.height,_e,oe.data):t.compressedTexImage2D(n.TEXTURE_2D,K,ce,oe.width,oe.height,0,oe.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?I&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,oe.width,oe.height,_e,ye,oe.data):t.texImage2D(n.TEXTURE_2D,K,ce,oe.width,oe.height,0,_e,ye,oe.data)}else if(E.isDataArrayTexture)if(ke){if(Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,ce,Q.width,Q.height,Q.depth),I)if(E.layerUpdates.size>0){const K=E_(Q.width,Q.height,E.format,E.type);for(const ve of E.layerUpdates){const fe=Q.data.subarray(ve*K/Q.data.BYTES_PER_ELEMENT,(ve+1)*K/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ve,Q.width,Q.height,1,_e,ye,fe)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,_e,ye,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ce,Q.width,Q.height,Q.depth,0,_e,ye,Q.data);else if(E.isData3DTexture)ke?(Qe&&t.texStorage3D(n.TEXTURE_3D,le,ce,Q.width,Q.height,Q.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,_e,ye,Q.data)):t.texImage3D(n.TEXTURE_3D,0,ce,Q.width,Q.height,Q.depth,0,_e,ye,Q.data);else if(E.isFramebufferTexture){if(Qe)if(ke)t.texStorage2D(n.TEXTURE_2D,le,ce,Q.width,Q.height);else{let K=Q.width,ve=Q.height;for(let fe=0;fe<le;fe++)t.texImage2D(n.TEXTURE_2D,fe,ce,K,ve,0,_e,ye,null),K>>=1,ve>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){const K=n.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),Q.parentNode!==K){K.appendChild(Q),h.add(E),K.onpaint=Oe=>{const Pt=Oe.changedElements;for(const nt of h)Pt.includes(nt.image)&&(nt.needsUpdate=!0)},K.requestPaint();return}const ve=0,fe=n.RGBA,J=n.RGBA,Te=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,ve,fe,J,Te,Q),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(ke&&Qe){const K=At(Ne[0]);t.texStorage2D(n.TEXTURE_2D,le,ce,K.width,K.height)}for(let K=0,ve=Ne.length;K<ve;K++)oe=Ne[K],ke?I&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,_e,ye,oe):t.texImage2D(n.TEXTURE_2D,K,ce,_e,ye,oe);E.generateMipmaps=!1}else if(ke){if(Qe){const K=At(Q);t.texStorage2D(n.TEXTURE_2D,le,ce,K.width,K.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,ye,Q)}else t.texImage2D(n.TEXTURE_2D,0,ce,_e,ye,Q);d(E)&&v(Z),he.__version=ae.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Ie(R,E,V){if(E.image.length!==6)return;const Z=q(R,E),te=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+V);const ae=i.get(te);if(te.version!==ae.__version||Z===!0){t.activeTexture(n.TEXTURE0+V);const he=je.getPrimaries(je.workingColorSpace),Y=E.colorSpace===Ur?null:je.getPrimaries(E.colorSpace),Q=E.colorSpace===Ur||he===Y?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const _e=E.isCompressedTexture||E.image[0].isCompressedTexture,ye=E.image[0]&&E.image[0].isDataTexture,ce=[];for(let J=0;J<6;J++)!_e&&!ye?ce[J]=m(E.image[J],!0,r.maxCubemapSize):ce[J]=ye?E.image[J].image:E.image[J],ce[J]=de(E,ce[J]);const oe=ce[0],Ne=s.convert(E.format,E.colorSpace),ke=s.convert(E.type),Qe=S(E.internalFormat,Ne,ke,E.normalized,E.colorSpace),I=E.isVideoTexture!==!0,le=ae.__version===void 0||Z===!0,K=te.dataReady;let ve=M(E,oe);Ae(n.TEXTURE_CUBE_MAP,E);let fe;if(_e){I&&le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Qe,oe.width,oe.height);for(let J=0;J<6;J++){fe=ce[J].mipmaps;for(let Te=0;Te<fe.length;Te++){const Oe=fe[Te];E.format!==yi?Ne!==null?I?K&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te,0,0,Oe.width,Oe.height,Ne,Oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te,Qe,Oe.width,Oe.height,0,Oe.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te,0,0,Oe.width,Oe.height,Ne,ke,Oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te,Qe,Oe.width,Oe.height,0,Ne,ke,Oe.data)}}}else{if(fe=E.mipmaps,I&&le){fe.length>0&&ve++;const J=At(ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Qe,J.width,J.height)}for(let J=0;J<6;J++)if(ye){I?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ce[J].width,ce[J].height,Ne,ke,ce[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Qe,ce[J].width,ce[J].height,0,Ne,ke,ce[J].data);for(let Te=0;Te<fe.length;Te++){const Pt=fe[Te].image[J].image;I?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te+1,0,0,Pt.width,Pt.height,Ne,ke,Pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te+1,Qe,Pt.width,Pt.height,0,Ne,ke,Pt.data)}}else{I?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ne,ke,ce[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Qe,Ne,ke,ce[J]);for(let Te=0;Te<fe.length;Te++){const Oe=fe[Te];I?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te+1,0,0,Ne,ke,Oe.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te+1,Qe,Ne,ke,Oe.image[J])}}}d(E)&&v(n.TEXTURE_CUBE_MAP),ae.__version=te.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Pe(R,E,V,Z,te,ae){const he=s.convert(V.format,V.colorSpace),Y=s.convert(V.type),Q=S(V.internalFormat,he,Y,V.normalized,V.colorSpace),_e=i.get(E),ye=i.get(V);if(ye.__renderTarget=E,!_e.__hasExternalTextures){const ce=Math.max(1,E.width>>ae),oe=Math.max(1,E.height>>ae);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,ae,Q,ce,oe,E.depth,0,he,Y,null):t.texImage2D(te,ae,Q,ce,oe,0,he,Y,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),Xe(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,te,ye.__webglTexture,0,Gt(E)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,te,ye.__webglTexture,ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function vt(R,E,V){if(n.bindRenderbuffer(n.RENDERBUFFER,R),E.depthBuffer){const Z=E.depthTexture,te=Z&&Z.isDepthTexture?Z.type:null,ae=T(E.stencilBuffer,te),he=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Xe(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Gt(E),ae,E.width,E.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,Gt(E),ae,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ae,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,R)}else{const Z=E.textures;for(let te=0;te<Z.length;te++){const ae=Z[te],he=s.convert(ae.format,ae.colorSpace),Y=s.convert(ae.type),Q=S(ae.internalFormat,he,Y,ae.normalized,ae.colorSpace);Xe(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Gt(E),Q,E.width,E.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,Gt(E),Q,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Q,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function We(R,E,V){const Z=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(E.depthTexture);if(te.__renderTarget=E,(!te.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Z){if(te.__webglInit===void 0&&(te.__webglInit=!0,E.depthTexture.addEventListener("dispose",w)),te.__webglTexture===void 0){te.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),Ae(n.TEXTURE_CUBE_MAP,E.depthTexture);const _e=s.convert(E.depthTexture.format),ye=s.convert(E.depthTexture.type);let ce;E.depthTexture.format===mr?ce=n.DEPTH_COMPONENT24:E.depthTexture.format===Cs&&(ce=n.DEPTH24_STENCIL8);for(let oe=0;oe<6;oe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ce,E.width,E.height,0,_e,ye,null)}}else F(E.depthTexture,0);const ae=te.__webglTexture,he=Gt(E),Y=Z?n.TEXTURE_CUBE_MAP_POSITIVE_X+V:n.TEXTURE_2D,Q=E.depthTexture.format===Cs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===mr)Xe(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,Y,ae,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,Q,Y,ae,0);else if(E.depthTexture.format===Cs)Xe(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,Y,ae,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,Q,Y,ae,0);else throw new Error("Unknown depthTexture format")}function tt(R){const E=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Z){const te=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Z.removeEventListener("dispose",te)};Z.addEventListener("dispose",te),E.__depthDisposeCallback=te}E.__boundDepthTexture=Z}if(R.depthTexture&&!E.__autoAllocateDepthBuffer)if(V)for(let Z=0;Z<6;Z++)We(E.__webglFramebuffer[Z],R,Z);else{const Z=R.texture.mipmaps;Z&&Z.length>0?We(E.__webglFramebuffer[0],R,0):We(E.__webglFramebuffer,R,0)}else if(V){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]===void 0)E.__webglDepthbuffer[Z]=n.createRenderbuffer(),vt(E.__webglDepthbuffer[Z],R,!1);else{const te=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=E.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,ae)}}else{const Z=R.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),vt(E.__webglDepthbuffer,R,!1);else{const te=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,ae)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function dt(R,E,V){const Z=i.get(R);E!==void 0&&Pe(Z.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&tt(R)}function Ge(R){const E=R.texture,V=i.get(R),Z=i.get(E);R.addEventListener("dispose",y);const te=R.textures,ae=R.isWebGLCubeRenderTarget===!0,he=te.length>1;if(he||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=E.version,a.memory.textures++),ae){V.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[Y]=[];for(let Q=0;Q<E.mipmaps.length;Q++)V.__webglFramebuffer[Y][Q]=n.createFramebuffer()}else V.__webglFramebuffer[Y]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let Y=0;Y<E.mipmaps.length;Y++)V.__webglFramebuffer[Y]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(he)for(let Y=0,Q=te.length;Y<Q;Y++){const _e=i.get(te[Y]);_e.__webglTexture===void 0&&(_e.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&Xe(R)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Y=0;Y<te.length;Y++){const Q=te[Y];V.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[Y]);const _e=s.convert(Q.format,Q.colorSpace),ye=s.convert(Q.type),ce=S(Q.internalFormat,_e,ye,Q.normalized,Q.colorSpace,R.isXRRenderTarget===!0),oe=Gt(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,ce,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,V.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),vt(V.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ae){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Ae(n.TEXTURE_CUBE_MAP,E);for(let Y=0;Y<6;Y++)if(E.mipmaps&&E.mipmaps.length>0)for(let Q=0;Q<E.mipmaps.length;Q++)Pe(V.__webglFramebuffer[Y][Q],R,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Q);else Pe(V.__webglFramebuffer[Y],R,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);d(E)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let Y=0,Q=te.length;Y<Q;Y++){const _e=te[Y],ye=i.get(_e);let ce=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ce=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,ye.__webglTexture),Ae(ce,_e),Pe(V.__webglFramebuffer,R,_e,n.COLOR_ATTACHMENT0+Y,ce,0),d(_e)&&v(ce)}t.unbindTexture()}else{let Y=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Y=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Y,Z.__webglTexture),Ae(Y,E),E.mipmaps&&E.mipmaps.length>0)for(let Q=0;Q<E.mipmaps.length;Q++)Pe(V.__webglFramebuffer[Q],R,E,n.COLOR_ATTACHMENT0,Y,Q);else Pe(V.__webglFramebuffer,R,E,n.COLOR_ATTACHMENT0,Y,0);d(E)&&v(Y),t.unbindTexture()}R.depthBuffer&&tt(R)}function Vt(R){const E=R.textures;for(let V=0,Z=E.length;V<Z;V++){const te=E[V];if(d(te)){const ae=x(R),he=i.get(te).__webglTexture;t.bindTexture(ae,he),v(ae),t.unbindTexture()}}}const xt=[],Un=[];function N(R){if(R.samples>0){if(Xe(R)===!1){const E=R.textures,V=R.width,Z=R.height;let te=n.COLOR_BUFFER_BIT;const ae=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(R),Y=E.length>1;if(Y)for(let _e=0;_e<E.length;_e++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);const Q=R.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let _e=0;_e<E.length;_e++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),Y){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[_e]);const ye=i.get(E[_e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ye,0)}n.blitFramebuffer(0,0,V,Z,0,0,V,Z,te,n.NEAREST),l===!0&&(xt.length=0,Un.length=0,xt.push(n.COLOR_ATTACHMENT0+_e),R.depthBuffer&&R.resolveDepthBuffer===!1&&(xt.push(ae),Un.push(ae),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Un)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,xt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let _e=0;_e<E.length;_e++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,he.__webglColorRenderbuffer[_e]);const ye=i.get(E[_e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Gt(R){return Math.min(r.maxSamples,R.samples)}function Xe(R){const E=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ct(R){const E=a.render.frame;c.get(R)!==E&&(c.set(R,E),R.update())}function de(R,E){const V=R.colorSpace,Z=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==pc&&V!==Ur&&(je.getTransfer(V)===Je?(Z!==yi||te!==si)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",V)),E}function At(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=z,this.resetTextureUnits=k,this.getTextureUnits=O,this.setTextureUnits=L,this.setTexture2D=F,this.setTexture2DArray=G,this.setTexture3D=$,this.setTextureCube=ee,this.rebindTextures=dt,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=Xe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function HP(n,e){function t(i,r=Ur){let s;const a=je.getTransfer(r);if(i===si)return n.UNSIGNED_BYTE;if(i===Tm)return n.UNSIGNED_SHORT_4_4_4_4;if(i===wm)return n.UNSIGNED_SHORT_5_5_5_1;if(i===nS)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===iS)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===eS)return n.BYTE;if(i===tS)return n.SHORT;if(i===ul)return n.UNSIGNED_SHORT;if(i===Em)return n.INT;if(i===Hi)return n.UNSIGNED_INT;if(i===Ni)return n.FLOAT;if(i===pr)return n.HALF_FLOAT;if(i===rS)return n.ALPHA;if(i===sS)return n.RGB;if(i===yi)return n.RGBA;if(i===mr)return n.DEPTH_COMPONENT;if(i===Cs)return n.DEPTH_STENCIL;if(i===aS)return n.RED;if(i===Am)return n.RED_INTEGER;if(i===Vs)return n.RG;if(i===Cm)return n.RG_INTEGER;if(i===Rm)return n.RGBA_INTEGER;if(i===Iu||i===Uu||i===Nu||i===Fu)if(a===Je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Iu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Uu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Nu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Iu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Uu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Nu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bd||i===Pd||i===Ld||i===Dd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===bd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ld)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Dd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Id||i===Ud||i===Nd||i===Fd||i===Od||i===hc||i===Bd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Id||i===Ud)return a===Je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Nd)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Fd)return s.COMPRESSED_R11_EAC;if(i===Od)return s.COMPRESSED_SIGNED_R11_EAC;if(i===hc)return s.COMPRESSED_RG11_EAC;if(i===Bd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===kd||i===zd||i===Vd||i===Gd||i===Hd||i===Wd||i===Xd||i===jd||i===Yd||i===qd||i===$d||i===Kd||i===Zd||i===Qd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===kd)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zd)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vd)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gd)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hd)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wd)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xd)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jd)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yd)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qd)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$d)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Kd)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zd)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Qd)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jd||i===ep||i===tp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Jd)return a===Je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ep)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===np||i===ip||i===dc||i===rp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===np)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ip)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===dc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===cl?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const WP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XP=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new gS(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ti({vertexShader:WP,fragmentShader:XP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wi(new Rl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YP extends qs{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,c=null,h=null,f=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new jP,d={},v=t.getContextAttributes();let x=null,S=null;const T=[],M=[],w=new st;let y=null;const A=new ri;A.viewport=new Nt;const b=new ri;b.viewport=new Nt;const P=[A,b],D=new iR;let k=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ue=T[q];return ue===void 0&&(ue=new Hf,T[q]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(q){let ue=T[q];return ue===void 0&&(ue=new Hf,T[q]=ue),ue.getGripSpace()},this.getHand=function(q){let ue=T[q];return ue===void 0&&(ue=new Hf,T[q]=ue),ue.getHandSpace()};function L(q){const ue=M.indexOf(q.inputSource);if(ue===-1)return;const re=T[ue];re!==void 0&&(re.update(q.inputSource,q.frame,u||a),re.dispatchEvent({type:q.type,data:q.inputSource}))}function z(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",U);for(let q=0;q<T.length;q++){const ue=M[q];ue!==null&&(M[q]=null,T[q].disconnect(ue))}k=null,O=null,m.reset();for(const q in d)delete d[q];e.setRenderTarget(x),p=null,f=null,h=null,r=null,S=null,Ae.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",z),r.addEventListener("inputsourceschange",U),v.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Re=null,Ie=null;v.depth&&(Ie=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=v.stencil?Cs:mr,Re=v.stencil?cl:Hi);const Pe={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Pe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Vi(f.textureWidth,f.textureHeight,{format:yi,type:si,depthTexture:new qa(f.textureWidth,f.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const re={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Vi(p.framebufferWidth,p.framebufferHeight,{format:yi,type:si,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),Ae.setContext(r),Ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function U(q){for(let ue=0;ue<q.removed.length;ue++){const re=q.removed[ue],Re=M.indexOf(re);Re>=0&&(M[Re]=null,T[Re].disconnect(re))}for(let ue=0;ue<q.added.length;ue++){const re=q.added[ue];let Re=M.indexOf(re);if(Re===-1){for(let Pe=0;Pe<T.length;Pe++)if(Pe>=M.length){M.push(re),Re=Pe;break}else if(M[Pe]===null){M[Pe]=re,Re=Pe;break}if(Re===-1)break}const Ie=T[Re];Ie&&Ie.connect(re)}}const F=new X,G=new X;function $(q,ue,re){F.setFromMatrixPosition(ue.matrixWorld),G.setFromMatrixPosition(re.matrixWorld);const Re=F.distanceTo(G),Ie=ue.projectionMatrix.elements,Pe=re.projectionMatrix.elements,vt=Ie[14]/(Ie[10]-1),We=Ie[14]/(Ie[10]+1),tt=(Ie[9]+1)/Ie[5],dt=(Ie[9]-1)/Ie[5],Ge=(Ie[8]-1)/Ie[0],Vt=(Pe[8]+1)/Pe[0],xt=vt*Ge,Un=vt*Vt,N=Re/(-Ge+Vt),Gt=N*-Ge;if(ue.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Gt),q.translateZ(N),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ie[10]===-1)q.projectionMatrix.copy(ue.projectionMatrix),q.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Xe=vt+N,ct=We+N,de=xt-Gt,At=Un+(Re-Gt),R=tt*We/ct*Xe,E=dt*We/ct*Xe;q.projectionMatrix.makePerspective(de,At,R,E,Xe,ct),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ee(q,ue){ue===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ue.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let ue=q.near,re=q.far;m.texture!==null&&(m.depthNear>0&&(ue=m.depthNear),m.depthFar>0&&(re=m.depthFar)),D.near=b.near=A.near=ue,D.far=b.far=A.far=re,(k!==D.near||O!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),k=D.near,O=D.far),D.layers.mask=q.layers.mask|6,A.layers.mask=D.layers.mask&-5,b.layers.mask=D.layers.mask&-3;const Re=q.parent,Ie=D.cameras;ee(D,Re);for(let Pe=0;Pe<Ie.length;Pe++)ee(Ie[Pe],Re);Ie.length===2?$(D,A,b):D.projectionMatrix.copy(A.projectionMatrix),se(q,D,Re)};function se(q,ue,re){re===null?q.matrix.copy(ue.matrixWorld):(q.matrix.copy(re.matrixWorld),q.matrix.invert(),q.matrix.multiply(ue.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ue.projectionMatrix),q.projectionMatrixInverse.copy(ue.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ap*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(q){return d[q]};let Ue=null;function be(q,ue){if(c=ue.getViewerPose(u||a),g=ue,c!==null){const re=c.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Re=!1;re.length!==D.cameras.length&&(D.cameras.length=0,Re=!0);for(let We=0;We<re.length;We++){const tt=re[We];let dt=null;if(p!==null)dt=p.getViewport(tt);else{const Vt=h.getViewSubImage(f,tt);dt=Vt.viewport,We===0&&(e.setRenderTargetTextures(S,Vt.colorTexture,Vt.depthStencilTexture),e.setRenderTarget(S))}let Ge=P[We];Ge===void 0&&(Ge=new ri,Ge.layers.enable(We),Ge.viewport=new Nt,P[We]=Ge),Ge.matrix.fromArray(tt.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(tt.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(dt.x,dt.y,dt.width,dt.height),We===0&&(D.matrix.copy(Ge.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Re===!0&&D.cameras.push(Ge)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){h=i.getBinding();const We=h.getDepthInformation(re[0]);We&&We.isValid&&We.texture&&m.init(We,r.renderState)}if(Ie&&Ie.includes("camera-access")&&_){e.state.unbindTexture(),h=i.getBinding();for(let We=0;We<re.length;We++){const tt=re[We].camera;if(tt){let dt=d[tt];dt||(dt=new gS,d[tt]=dt);const Ge=h.getCameraImage(tt);dt.sourceTexture=Ge}}}}for(let re=0;re<T.length;re++){const Re=M[re],Ie=T[re];Re!==null&&Ie!==void 0&&Ie.update(Re,ue,u||a)}Ue&&Ue(q,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),g=null}const Ae=new yS;Ae.setAnimationLoop(be),this.setAnimationLoop=function(q){Ue=q},this.dispose=function(){}}}const qP=new Xt,CS=new Fe;CS.set(-1,0,0,0,1,0,0,0,1);function $P(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,_S(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,v,x,S){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(m,d):d.isMeshLambertMaterial?(s(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,v,x):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Rn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Rn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d),x=v.envMap,S=v.envMapRotation;x&&(m.envMap.value=x,m.envMapRotation.value.setFromMatrix4(qP.makeRotationFromEuler(S)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(CS),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=x*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Rn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function KP(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const S=x.program;i.uniformBlockBinding(v,S)}function u(v,x){let S=r[v.id];S===void 0&&(g(v),S=c(v),r[v.id]=S,v.addEventListener("dispose",m));const T=x.program;i.updateUBOMapping(v,T);const M=e.render.frame;s[v.id]!==M&&(f(v),s[v.id]=M)}function c(v){const x=h();v.__bindingPointIndex=x;const S=n.createBuffer(),T=v.__size,M=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,T,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=r[v.id],S=v.uniforms,T=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let M=0,w=S.length;M<w;M++){const y=Array.isArray(S[M])?S[M]:[S[M]];for(let A=0,b=y.length;A<b;A++){const P=y[A];if(p(P,M,A,T)===!0){const D=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let O=0;for(let L=0;L<k.length;L++){const z=k[L],U=_(z);typeof z=="number"||typeof z=="boolean"?(P.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,D+O,P.__data)):z.isMatrix3?(P.__data[0]=z.elements[0],P.__data[1]=z.elements[1],P.__data[2]=z.elements[2],P.__data[3]=0,P.__data[4]=z.elements[3],P.__data[5]=z.elements[4],P.__data[6]=z.elements[5],P.__data[7]=0,P.__data[8]=z.elements[6],P.__data[9]=z.elements[7],P.__data[10]=z.elements[8],P.__data[11]=0):ArrayBuffer.isView(z)?P.__data.set(new z.constructor(z.buffer,z.byteOffset,P.__data.length)):(z.toArray(P.__data,O),O+=U.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,x,S,T){const M=v.value,w=x+"_"+S;if(T[w]===void 0)return typeof M=="number"||typeof M=="boolean"?T[w]=M:ArrayBuffer.isView(M)?T[w]=M.slice():T[w]=M.clone(),!0;{const y=T[w];if(typeof M=="number"||typeof M=="boolean"){if(y!==M)return T[w]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(y.equals(M)===!1)return y.copy(M),!0}}return!1}function g(v){const x=v.uniforms;let S=0;const T=16;for(let w=0,y=x.length;w<y;w++){const A=Array.isArray(x[w])?x[w]:[x[w]];for(let b=0,P=A.length;b<P;b++){const D=A[b],k=Array.isArray(D.value)?D.value:[D.value];for(let O=0,L=k.length;O<L;O++){const z=k[O],U=_(z),F=S%T,G=F%U.boundary,$=F+G;S+=G,$!==0&&T-$<U.storage&&(S+=T-$),D.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=S,S+=U.storage}}}const M=S%T;return M>0&&(S+=T-M),v.__size=S,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(x.boundary=16,x.storage=v.byteLength):De("WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const v in r)n.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:u,dispose:d}}const ZP=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let bi=null;function QP(){return bi===null&&(bi=new HC(ZP,16,16,Vs,pr),bi.name="DFG_LUT",bi.minFilter=hn,bi.magFilter=hn,bi.wrapS=sr,bi.wrapT=sr,bi.generateMipmaps=!1,bi.needsUpdate=!0),bi}class JP{constructor(e={}){const{canvas:t=xC(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=si}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const _=p,m=new Set([Rm,Cm,Am]),d=new Set([si,Hi,ul,cl,Tm,wm]),v=new Uint32Array(4),x=new Int32Array(4),S=new X;let T=null,M=null;const w=[],y=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let P=!1,D=null;this._outputColorSpace=ti;let k=0,O=0,L=null,z=-1,U=null;const F=new Nt,G=new Nt;let $=null;const ee=new rt(0);let se=0,Ue=t.width,be=t.height,Ae=1,q=null,ue=null;const re=new Nt(0,0,Ue,be),Re=new Nt(0,0,Ue,be);let Ie=!1;const Pe=new pS;let vt=!1,We=!1;const tt=new Xt,dt=new X,Ge=new Nt,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function Un(){return L===null?Ae:1}let N=i;function Gt(C,B){return t.getContext(C,B)}try{const C={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mm}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",Oe,!1),N===null){const B="webgl2";if(N=Gt(B,C),N===null)throw Gt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Ke("WebGLRenderer: "+C.message),C}let Xe,ct,de,At,R,E,V,Z,te,ae,he,Y,Q,_e,ye,ce,oe,Ne,ke,Qe,I,le,K;function ve(){Xe=new Q2(N),Xe.init(),I=new HP(N,Xe),ct=new W2(N,Xe,e,I),de=new VP(N,Xe),ct.reversedDepthBuffer&&f&&de.buffers.depth.setReversed(!0),At=new t3(N),R=new CP,E=new GP(N,Xe,de,R,ct,I,At),V=new Z2(b),Z=new sR(N),le=new G2(N,Z),te=new J2(N,Z,At,le),ae=new i3(N,te,Z,le,At),Ne=new n3(N,ct,E),ye=new X2(R),he=new AP(b,V,Xe,ct,le,ye),Y=new $P(b,R),Q=new bP,_e=new NP(Xe),oe=new V2(b,V,de,ae,g,l),ce=new zP(b,ae,ct),K=new KP(N,At,ct,de),ke=new H2(N,Xe,At),Qe=new e3(N,Xe,At),At.programs=he.programs,b.capabilities=ct,b.extensions=Xe,b.properties=R,b.renderLists=Q,b.shadowMap=ce,b.state=de,b.info=At}ve(),_!==si&&(A=new s3(_,t.width,t.height,r,s));const fe=new YP(b,N);this.xr=fe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const C=Xe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Xe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Ae},this.setPixelRatio=function(C){C!==void 0&&(Ae=C,this.setSize(Ue,be,!1))},this.getSize=function(C){return C.set(Ue,be)},this.setSize=function(C,B,j=!0){if(fe.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}Ue=C,be=B,t.width=Math.floor(C*Ae),t.height=Math.floor(B*Ae),j===!0&&(t.style.width=C+"px",t.style.height=B+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,C,B)},this.getDrawingBufferSize=function(C){return C.set(Ue*Ae,be*Ae).floor()},this.setDrawingBufferSize=function(C,B,j){Ue=C,be=B,Ae=j,t.width=Math.floor(C*j),t.height=Math.floor(B*j),this.setViewport(0,0,C,B)},this.setEffects=function(C){if(_===si){Ke("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let B=0;B<C.length;B++)if(C[B].isOutputPass===!0){De("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy(re)},this.setViewport=function(C,B,j,H){C.isVector4?re.set(C.x,C.y,C.z,C.w):re.set(C,B,j,H),de.viewport(F.copy(re).multiplyScalar(Ae).round())},this.getScissor=function(C){return C.copy(Re)},this.setScissor=function(C,B,j,H){C.isVector4?Re.set(C.x,C.y,C.z,C.w):Re.set(C,B,j,H),de.scissor(G.copy(Re).multiplyScalar(Ae).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(C){de.setScissorTest(Ie=C)},this.setOpaqueSort=function(C){q=C},this.setTransparentSort=function(C){ue=C},this.getClearColor=function(C){return C.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(C=!0,B=!0,j=!0){let H=0;if(C){let W=!1;if(L!==null){const ge=L.texture.format;W=m.has(ge)}if(W){const ge=L.texture.type,Se=d.has(ge),me=oe.getClearColor(),Ee=oe.getClearAlpha(),we=me.r,Be=me.g,Ve=me.b;Se?(v[0]=we,v[1]=Be,v[2]=Ve,v[3]=Ee,N.clearBufferuiv(N.COLOR,0,v)):(x[0]=we,x[1]=Be,x[2]=Ve,x[3]=Ee,N.clearBufferiv(N.COLOR,0,x))}else H|=N.COLOR_BUFFER_BIT}B&&(H|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),D=C},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),oe.dispose(),Q.dispose(),_e.dispose(),R.dispose(),V.dispose(),ae.dispose(),le.dispose(),K.dispose(),he.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",ig),fe.removeEventListener("sessionend",rg),cs.stop()};function J(C){C.preventDefault(),r_("WebGLRenderer: Context Lost."),P=!0}function Te(){r_("WebGLRenderer: Context Restored."),P=!1;const C=At.autoReset,B=ce.enabled,j=ce.autoUpdate,H=ce.needsUpdate,W=ce.type;ve(),At.autoReset=C,ce.enabled=B,ce.autoUpdate=j,ce.needsUpdate=H,ce.type=W}function Oe(C){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Pt(C){const B=C.target;B.removeEventListener("dispose",Pt),nt(B)}function nt(C){ji(C),R.remove(C)}function ji(C){const B=R.get(C).programs;B!==void 0&&(B.forEach(function(j){he.releaseProgram(j)}),C.isShaderMaterial&&he.releaseShaderCache(C))}this.renderBufferDirect=function(C,B,j,H,W,ge){B===null&&(B=Vt);const Se=W.isMesh&&W.matrixWorld.determinant()<0,me=A1(C,B,j,H,W);de.setMaterial(H,Se);let Ee=j.index,we=1;if(H.wireframe===!0){if(Ee=te.getWireframeAttribute(j),Ee===void 0)return;we=2}const Be=j.drawRange,Ve=j.attributes.position;let Ce=Be.start*we,it=(Be.start+Be.count)*we;ge!==null&&(Ce=Math.max(Ce,ge.start*we),it=Math.min(it,(ge.start+ge.count)*we)),Ee!==null?(Ce=Math.max(Ce,0),it=Math.min(it,Ee.count)):Ve!=null&&(Ce=Math.max(Ce,0),it=Math.min(it,Ve.count));const Lt=it-Ce;if(Lt<0||Lt===1/0)return;le.setup(W,H,me,j,Ee);let Ct,at=ke;if(Ee!==null&&(Ct=Z.get(Ee),at=Qe,at.setIndex(Ct)),W.isMesh)H.wireframe===!0?(de.setLineWidth(H.wireframeLinewidth*Un()),at.setMode(N.LINES)):at.setMode(N.TRIANGLES);else if(W.isLine){let sn=H.linewidth;sn===void 0&&(sn=1),de.setLineWidth(sn*Un()),W.isLineSegments?at.setMode(N.LINES):W.isLineLoop?at.setMode(N.LINE_LOOP):at.setMode(N.LINE_STRIP)}else W.isPoints?at.setMode(N.POINTS):W.isSprite&&at.setMode(N.TRIANGLES);if(W.isBatchedMesh)if(Xe.get("WEBGL_multi_draw"))at.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const sn=W._multiDrawStarts,xe=W._multiDrawCounts,Nn=W._multiDrawCount,$e=Ee?Z.get(Ee).bytesPerElement:1,Qn=R.get(H).currentProgram.getUniforms();for(let Ai=0;Ai<Nn;Ai++)Qn.setValue(N,"_gl_DrawID",Ai),at.render(sn[Ai]/$e,xe[Ai])}else if(W.isInstancedMesh)at.renderInstances(Ce,Lt,W.count);else if(j.isInstancedBufferGeometry){const sn=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,xe=Math.min(j.instanceCount,sn);at.renderInstances(Ce,Lt,xe)}else at.render(Ce,Lt)};function wi(C,B,j){C.transparent===!0&&C.side===nr&&C.forceSinglePass===!1?(C.side=Rn,C.needsUpdate=!0,Ll(C,B,j),C.side=ns,C.needsUpdate=!0,Ll(C,B,j),C.side=nr):Ll(C,B,j)}this.compile=function(C,B,j=null){j===null&&(j=C),M=_e.get(j),M.init(B),y.push(M),j.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(M.pushLight(W),W.castShadow&&M.pushShadow(W))}),C!==j&&C.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(M.pushLight(W),W.castShadow&&M.pushShadow(W))}),M.setupLights();const H=new Set;return C.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ge=W.material;if(ge)if(Array.isArray(ge))for(let Se=0;Se<ge.length;Se++){const me=ge[Se];wi(me,j,W),H.add(me)}else wi(ge,j,W),H.add(ge)}),M=y.pop(),H},this.compileAsync=function(C,B,j=null){const H=this.compile(C,B,j);return new Promise(W=>{function ge(){if(H.forEach(function(Se){R.get(Se).currentProgram.isReady()&&H.delete(Se)}),H.size===0){W(C);return}setTimeout(ge,10)}Xe.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Qc=null;function T1(C){Qc&&Qc(C)}function ig(){cs.stop()}function rg(){cs.start()}const cs=new yS;cs.setAnimationLoop(T1),typeof self<"u"&&cs.setContext(self),this.setAnimationLoop=function(C){Qc=C,fe.setAnimationLoop(C),C===null?cs.stop():cs.start()},fe.addEventListener("sessionstart",ig),fe.addEventListener("sessionend",rg),this.render=function(C,B){if(B!==void 0&&B.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;D!==null&&D.renderStart(C,B);const j=fe.enabled===!0&&fe.isPresenting===!0,H=A!==null&&(L===null||j)&&A.begin(b,L);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(B),B=fe.getCamera()),C.isScene===!0&&C.onBeforeRender(b,C,B,L),M=_e.get(C,y.length),M.init(B),M.state.textureUnits=E.getTextureUnits(),y.push(M),tt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Pe.setFromProjectionMatrix(tt,Fi,B.reversedDepth),We=this.localClippingEnabled,vt=ye.init(this.clippingPlanes,We),T=Q.get(C,w.length),T.init(),w.push(T),fe.enabled===!0&&fe.isPresenting===!0){const Se=b.xr.getDepthSensingMesh();Se!==null&&Jc(Se,B,-1/0,b.sortObjects)}Jc(C,B,0,b.sortObjects),T.finish(),b.sortObjects===!0&&T.sort(q,ue),xt=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,xt&&oe.addToRenderList(T,C),this.info.render.frame++,vt===!0&&ye.beginShadows();const W=M.state.shadowsArray;if(ce.render(W,C,B),vt===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&A.hasRenderPass())===!1){const Se=T.opaque,me=T.transmissive;if(M.setupLights(),B.isArrayCamera){const Ee=B.cameras;if(me.length>0)for(let we=0,Be=Ee.length;we<Be;we++){const Ve=Ee[we];ag(Se,me,C,Ve)}xt&&oe.render(C);for(let we=0,Be=Ee.length;we<Be;we++){const Ve=Ee[we];sg(T,C,Ve,Ve.viewport)}}else me.length>0&&ag(Se,me,C,B),xt&&oe.render(C),sg(T,C,B)}L!==null&&O===0&&(E.updateMultisampleRenderTarget(L),E.updateRenderTargetMipmap(L)),H&&A.end(b),C.isScene===!0&&C.onAfterRender(b,C,B),le.resetDefaultState(),z=-1,U=null,y.pop(),y.length>0?(M=y[y.length-1],E.setTextureUnits(M.state.textureUnits),vt===!0&&ye.setGlobalState(b.clippingPlanes,M.state.camera)):M=null,w.pop(),w.length>0?T=w[w.length-1]:T=null,D!==null&&D.renderEnd()};function Jc(C,B,j,H){if(C.visible===!1)return;if(C.layers.test(B.layers)){if(C.isGroup)j=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(B);else if(C.isLightProbeGrid)M.pushLightProbeGrid(C);else if(C.isLight)M.pushLight(C),C.castShadow&&M.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Pe.intersectsSprite(C)){H&&Ge.setFromMatrixPosition(C.matrixWorld).applyMatrix4(tt);const Se=ae.update(C),me=C.material;me.visible&&T.push(C,Se,me,j,Ge.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Pe.intersectsObject(C))){const Se=ae.update(C),me=C.material;if(H&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ge.copy(C.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ge.copy(Se.boundingSphere.center)),Ge.applyMatrix4(C.matrixWorld).applyMatrix4(tt)),Array.isArray(me)){const Ee=Se.groups;for(let we=0,Be=Ee.length;we<Be;we++){const Ve=Ee[we],Ce=me[Ve.materialIndex];Ce&&Ce.visible&&T.push(C,Se,Ce,j,Ge.z,Ve)}}else me.visible&&T.push(C,Se,me,j,Ge.z,null)}}const ge=C.children;for(let Se=0,me=ge.length;Se<me;Se++)Jc(ge[Se],B,j,H)}function sg(C,B,j,H){const{opaque:W,transmissive:ge,transparent:Se}=C;M.setupLightsView(j),vt===!0&&ye.setGlobalState(b.clippingPlanes,j),H&&de.viewport(F.copy(H)),W.length>0&&Pl(W,B,j),ge.length>0&&Pl(ge,B,j),Se.length>0&&Pl(Se,B,j),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function ag(C,B,j,H){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[H.id]===void 0){const Ce=Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[H.id]=new Vi(1,1,{generateMipmaps:!0,type:Ce?pr:si,minFilter:As,samples:Math.max(4,ct.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace})}const ge=M.state.transmissionRenderTarget[H.id],Se=H.viewport||F;ge.setSize(Se.z*b.transmissionResolutionScale,Se.w*b.transmissionResolutionScale);const me=b.getRenderTarget(),Ee=b.getActiveCubeFace(),we=b.getActiveMipmapLevel();b.setRenderTarget(ge),b.getClearColor(ee),se=b.getClearAlpha(),se<1&&b.setClearColor(16777215,.5),b.clear(),xt&&oe.render(j);const Be=b.toneMapping;b.toneMapping=zi;const Ve=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),M.setupLightsView(H),vt===!0&&ye.setGlobalState(b.clippingPlanes,H),Pl(C,j,H),E.updateMultisampleRenderTarget(ge),E.updateRenderTargetMipmap(ge),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let it=0,Lt=B.length;it<Lt;it++){const Ct=B[it],{object:at,geometry:sn,material:xe,group:Nn}=Ct;if(xe.side===nr&&at.layers.test(H.layers)){const $e=xe.side;xe.side=Rn,xe.needsUpdate=!0,og(at,j,H,sn,xe,Nn),xe.side=$e,xe.needsUpdate=!0,Ce=!0}}Ce===!0&&(E.updateMultisampleRenderTarget(ge),E.updateRenderTargetMipmap(ge))}b.setRenderTarget(me,Ee,we),b.setClearColor(ee,se),Ve!==void 0&&(H.viewport=Ve),b.toneMapping=Be}function Pl(C,B,j){const H=B.isScene===!0?B.overrideMaterial:null;for(let W=0,ge=C.length;W<ge;W++){const Se=C[W],{object:me,geometry:Ee,group:we}=Se;let Be=Se.material;Be.allowOverride===!0&&H!==null&&(Be=H),me.layers.test(j.layers)&&og(me,B,j,Ee,Be,we)}}function og(C,B,j,H,W,ge){C.onBeforeRender(b,B,j,H,W,ge),C.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),W.onBeforeRender(b,B,j,H,C,ge),W.transparent===!0&&W.side===nr&&W.forceSinglePass===!1?(W.side=Rn,W.needsUpdate=!0,b.renderBufferDirect(j,B,H,W,C,ge),W.side=ns,W.needsUpdate=!0,b.renderBufferDirect(j,B,H,W,C,ge),W.side=nr):b.renderBufferDirect(j,B,H,W,C,ge),C.onAfterRender(b,B,j,H,W,ge)}function Ll(C,B,j){B.isScene!==!0&&(B=Vt);const H=R.get(C),W=M.state.lights,ge=M.state.shadowsArray,Se=W.state.version,me=he.getParameters(C,W.state,ge,B,j,M.state.lightProbeGridArray),Ee=he.getProgramCacheKey(me);let we=H.programs;H.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?B.environment:null,H.fog=B.fog;const Be=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;H.envMap=V.get(C.envMap||H.environment,Be),H.envMapRotation=H.environment!==null&&C.envMap===null?B.environmentRotation:C.envMapRotation,we===void 0&&(C.addEventListener("dispose",Pt),we=new Map,H.programs=we);let Ve=we.get(Ee);if(Ve!==void 0){if(H.currentProgram===Ve&&H.lightsStateVersion===Se)return ug(C,me),Ve}else me.uniforms=he.getUniforms(C),D!==null&&C.isNodeMaterial&&D.build(C,j,me),C.onBeforeCompile(me,b),Ve=he.acquireProgram(me,Ee),we.set(Ee,Ve),H.uniforms=me.uniforms;const Ce=H.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ce.clippingPlanes=ye.uniform),ug(C,me),H.needsLights=R1(C),H.lightsStateVersion=Se,H.needsLights&&(Ce.ambientLightColor.value=W.state.ambient,Ce.lightProbe.value=W.state.probe,Ce.directionalLights.value=W.state.directional,Ce.directionalLightShadows.value=W.state.directionalShadow,Ce.spotLights.value=W.state.spot,Ce.spotLightShadows.value=W.state.spotShadow,Ce.rectAreaLights.value=W.state.rectArea,Ce.ltc_1.value=W.state.rectAreaLTC1,Ce.ltc_2.value=W.state.rectAreaLTC2,Ce.pointLights.value=W.state.point,Ce.pointLightShadows.value=W.state.pointShadow,Ce.hemisphereLights.value=W.state.hemi,Ce.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ce.spotLightMatrix.value=W.state.spotLightMatrix,Ce.spotLightMap.value=W.state.spotLightMap,Ce.pointShadowMatrix.value=W.state.pointShadowMatrix),H.lightProbeGrid=M.state.lightProbeGridArray.length>0,H.currentProgram=Ve,H.uniformsList=null,Ve}function lg(C){if(C.uniformsList===null){const B=C.currentProgram.getUniforms();C.uniformsList=Ou.seqWithValue(B.seq,C.uniforms)}return C.uniformsList}function ug(C,B){const j=R.get(C);j.outputColorSpace=B.outputColorSpace,j.batching=B.batching,j.batchingColor=B.batchingColor,j.instancing=B.instancing,j.instancingColor=B.instancingColor,j.instancingMorph=B.instancingMorph,j.skinning=B.skinning,j.morphTargets=B.morphTargets,j.morphNormals=B.morphNormals,j.morphColors=B.morphColors,j.morphTargetsCount=B.morphTargetsCount,j.numClippingPlanes=B.numClippingPlanes,j.numIntersection=B.numClipIntersection,j.vertexAlphas=B.vertexAlphas,j.vertexTangents=B.vertexTangents,j.toneMapping=B.toneMapping}function w1(C,B){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;S.setFromMatrixPosition(B.matrixWorld);for(let j=0,H=C.length;j<H;j++){const W=C[j];if(W.texture!==null&&W.boundingBox.containsPoint(S))return W}return null}function A1(C,B,j,H,W){B.isScene!==!0&&(B=Vt),E.resetTextureUnits();const ge=B.fog,Se=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?B.environment:null,me=L===null?b.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:je.workingColorSpace,Ee=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,we=V.get(H.envMap||Se,Ee),Be=H.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ve=!!j.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ce=!!j.morphAttributes.position,it=!!j.morphAttributes.normal,Lt=!!j.morphAttributes.color;let Ct=zi;H.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ct=b.toneMapping);const at=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,sn=at!==void 0?at.length:0,xe=R.get(H),Nn=M.state.lights;if(vt===!0&&(We===!0||C!==U)){const ft=C===U&&H.id===z;ye.setState(H,C,ft)}let $e=!1;H.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==Nn.state.version||xe.outputColorSpace!==me||W.isBatchedMesh&&xe.batching===!1||!W.isBatchedMesh&&xe.batching===!0||W.isBatchedMesh&&xe.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&xe.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&xe.instancing===!1||!W.isInstancedMesh&&xe.instancing===!0||W.isSkinnedMesh&&xe.skinning===!1||!W.isSkinnedMesh&&xe.skinning===!0||W.isInstancedMesh&&xe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&xe.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&xe.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&xe.instancingMorph===!1&&W.morphTexture!==null||xe.envMap!==we||H.fog===!0&&xe.fog!==ge||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==ye.numPlanes||xe.numIntersection!==ye.numIntersection)||xe.vertexAlphas!==Be||xe.vertexTangents!==Ve||xe.morphTargets!==Ce||xe.morphNormals!==it||xe.morphColors!==Lt||xe.toneMapping!==Ct||xe.morphTargetsCount!==sn||!!xe.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&($e=!0):($e=!0,xe.__version=H.version);let Qn=xe.currentProgram;$e===!0&&(Qn=Ll(H,B,W),D&&H.isNodeMaterial&&D.onUpdateProgram(H,Qn,xe));let Ai=!1,yr=!1,Ks=!1;const ot=Qn.getUniforms(),Dt=xe.uniforms;if(de.useProgram(Qn.program)&&(Ai=!0,yr=!0,Ks=!0),H.id!==z&&(z=H.id,yr=!0),xe.needsLights){const ft=w1(M.state.lightProbeGridArray,W);xe.lightProbeGrid!==ft&&(xe.lightProbeGrid=ft,yr=!0)}if(Ai||U!==C){de.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),ot.setValue(N,"projectionMatrix",C.projectionMatrix),ot.setValue(N,"viewMatrix",C.matrixWorldInverse);const Mr=ot.map.cameraPosition;Mr!==void 0&&Mr.setValue(N,dt.setFromMatrixPosition(C.matrixWorld)),ct.logarithmicDepthBuffer&&ot.setValue(N,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ot.setValue(N,"isOrthographic",C.isOrthographicCamera===!0),U!==C&&(U=C,yr=!0,Ks=!0)}if(xe.needsLights&&(Nn.state.directionalShadowMap.length>0&&ot.setValue(N,"directionalShadowMap",Nn.state.directionalShadowMap,E),Nn.state.spotShadowMap.length>0&&ot.setValue(N,"spotShadowMap",Nn.state.spotShadowMap,E),Nn.state.pointShadowMap.length>0&&ot.setValue(N,"pointShadowMap",Nn.state.pointShadowMap,E)),W.isSkinnedMesh){ot.setOptional(N,W,"bindMatrix"),ot.setOptional(N,W,"bindMatrixInverse");const ft=W.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),ot.setValue(N,"boneTexture",ft.boneTexture,E))}W.isBatchedMesh&&(ot.setOptional(N,W,"batchingTexture"),ot.setValue(N,"batchingTexture",W._matricesTexture,E),ot.setOptional(N,W,"batchingIdTexture"),ot.setValue(N,"batchingIdTexture",W._indirectTexture,E),ot.setOptional(N,W,"batchingColorTexture"),W._colorsTexture!==null&&ot.setValue(N,"batchingColorTexture",W._colorsTexture,E));const Sr=j.morphAttributes;if((Sr.position!==void 0||Sr.normal!==void 0||Sr.color!==void 0)&&Ne.update(W,j,Qn),(yr||xe.receiveShadow!==W.receiveShadow)&&(xe.receiveShadow=W.receiveShadow,ot.setValue(N,"receiveShadow",W.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&B.environment!==null&&(Dt.envMapIntensity.value=B.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=QP()),yr){if(ot.setValue(N,"toneMappingExposure",b.toneMappingExposure),xe.needsLights&&C1(Dt,Ks),ge&&H.fog===!0&&Y.refreshFogUniforms(Dt,ge),Y.refreshMaterialUniforms(Dt,H,Ae,be,M.state.transmissionRenderTarget[C.id]),xe.needsLights&&xe.lightProbeGrid){const ft=xe.lightProbeGrid;Dt.probesSH.value=ft.texture,Dt.probesMin.value.copy(ft.boundingBox.min),Dt.probesMax.value.copy(ft.boundingBox.max),Dt.probesResolution.value.copy(ft.resolution)}Ou.upload(N,lg(xe),Dt,E)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ou.upload(N,lg(xe),Dt,E),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ot.setValue(N,"center",W.center),ot.setValue(N,"modelViewMatrix",W.modelViewMatrix),ot.setValue(N,"normalMatrix",W.normalMatrix),ot.setValue(N,"modelMatrix",W.matrixWorld),H.uniformsGroups!==void 0){const ft=H.uniformsGroups;for(let Mr=0,Zs=ft.length;Mr<Zs;Mr++){const cg=ft[Mr];K.update(cg,Qn),K.bind(cg,Qn)}}return Qn}function C1(C,B){C.ambientLightColor.needsUpdate=B,C.lightProbe.needsUpdate=B,C.directionalLights.needsUpdate=B,C.directionalLightShadows.needsUpdate=B,C.pointLights.needsUpdate=B,C.pointLightShadows.needsUpdate=B,C.spotLights.needsUpdate=B,C.spotLightShadows.needsUpdate=B,C.rectAreaLights.needsUpdate=B,C.hemisphereLights.needsUpdate=B}function R1(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(C,B,j){const H=R.get(C);H.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),R.get(C.texture).__webglTexture=B,R.get(C.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:j,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,B){const j=R.get(C);j.__webglFramebuffer=B,j.__useDefaultFramebuffer=B===void 0};const b1=N.createFramebuffer();this.setRenderTarget=function(C,B=0,j=0){L=C,k=B,O=j;let H=null,W=!1,ge=!1;if(C){const me=R.get(C);if(me.__useDefaultFramebuffer!==void 0){de.bindFramebuffer(N.FRAMEBUFFER,me.__webglFramebuffer),F.copy(C.viewport),G.copy(C.scissor),$=C.scissorTest,de.viewport(F),de.scissor(G),de.setScissorTest($),z=-1;return}else if(me.__webglFramebuffer===void 0)E.setupRenderTarget(C);else if(me.__hasExternalTextures)E.rebindTextures(C,R.get(C.texture).__webglTexture,R.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Be=C.depthTexture;if(me.__boundDepthTexture!==Be){if(Be!==null&&R.has(Be)&&(C.width!==Be.image.width||C.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(C)}}const Ee=C.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ge=!0);const we=R.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(we[B])?H=we[B][j]:H=we[B],W=!0):C.samples>0&&E.useMultisampledRTT(C)===!1?H=R.get(C).__webglMultisampledFramebuffer:Array.isArray(we)?H=we[j]:H=we,F.copy(C.viewport),G.copy(C.scissor),$=C.scissorTest}else F.copy(re).multiplyScalar(Ae).floor(),G.copy(Re).multiplyScalar(Ae).floor(),$=Ie;if(j!==0&&(H=b1),de.bindFramebuffer(N.FRAMEBUFFER,H)&&de.drawBuffers(C,H),de.viewport(F),de.scissor(G),de.setScissorTest($),W){const me=R.get(C.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+B,me.__webglTexture,j)}else if(ge){const me=B;for(let Ee=0;Ee<C.textures.length;Ee++){const we=R.get(C.textures[Ee]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ee,we.__webglTexture,j,me)}}else if(C!==null&&j!==0){const me=R.get(C.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,me.__webglTexture,j)}z=-1},this.readRenderTargetPixels=function(C,B,j,H,W,ge,Se,me=0){if(!(C&&C.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=R.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee){de.bindFramebuffer(N.FRAMEBUFFER,Ee);try{const we=C.textures[me],Be=we.format,Ve=we.type;if(C.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+me),!ct.textureFormatReadable(Be)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(Ve)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=C.width-H&&j>=0&&j<=C.height-W&&N.readPixels(B,j,H,W,I.convert(Be),I.convert(Ve),ge)}finally{const we=L!==null?R.get(L).__webglFramebuffer:null;de.bindFramebuffer(N.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(C,B,j,H,W,ge,Se,me=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=R.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee)if(B>=0&&B<=C.width-H&&j>=0&&j<=C.height-W){de.bindFramebuffer(N.FRAMEBUFFER,Ee);const we=C.textures[me],Be=we.format,Ve=we.type;if(C.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+me),!ct.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ce=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ce),N.bufferData(N.PIXEL_PACK_BUFFER,ge.byteLength,N.STREAM_READ),N.readPixels(B,j,H,W,I.convert(Be),I.convert(Ve),0);const it=L!==null?R.get(L).__webglFramebuffer:null;de.bindFramebuffer(N.FRAMEBUFFER,it);const Lt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await yC(N,Lt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ce),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ge),N.deleteBuffer(Ce),N.deleteSync(Lt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,B=null,j=0){const H=Math.pow(2,-j),W=Math.floor(C.image.width*H),ge=Math.floor(C.image.height*H),Se=B!==null?B.x:0,me=B!==null?B.y:0;E.setTexture2D(C,0),N.copyTexSubImage2D(N.TEXTURE_2D,j,0,0,Se,me,W,ge),de.unbindTexture()};const P1=N.createFramebuffer(),L1=N.createFramebuffer();this.copyTextureToTexture=function(C,B,j=null,H=null,W=0,ge=0){let Se,me,Ee,we,Be,Ve,Ce,it,Lt;const Ct=C.isCompressedTexture?C.mipmaps[ge]:C.image;if(j!==null)Se=j.max.x-j.min.x,me=j.max.y-j.min.y,Ee=j.isBox3?j.max.z-j.min.z:1,we=j.min.x,Be=j.min.y,Ve=j.isBox3?j.min.z:0;else{const Dt=Math.pow(2,-W);Se=Math.floor(Ct.width*Dt),me=Math.floor(Ct.height*Dt),C.isDataArrayTexture?Ee=Ct.depth:C.isData3DTexture?Ee=Math.floor(Ct.depth*Dt):Ee=1,we=0,Be=0,Ve=0}H!==null?(Ce=H.x,it=H.y,Lt=H.z):(Ce=0,it=0,Lt=0);const at=I.convert(B.format),sn=I.convert(B.type);let xe;B.isData3DTexture?(E.setTexture3D(B,0),xe=N.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(E.setTexture2DArray(B,0),xe=N.TEXTURE_2D_ARRAY):(E.setTexture2D(B,0),xe=N.TEXTURE_2D),de.activeTexture(N.TEXTURE0),de.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),de.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),de.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment);const Nn=de.getParameter(N.UNPACK_ROW_LENGTH),$e=de.getParameter(N.UNPACK_IMAGE_HEIGHT),Qn=de.getParameter(N.UNPACK_SKIP_PIXELS),Ai=de.getParameter(N.UNPACK_SKIP_ROWS),yr=de.getParameter(N.UNPACK_SKIP_IMAGES);de.pixelStorei(N.UNPACK_ROW_LENGTH,Ct.width),de.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ct.height),de.pixelStorei(N.UNPACK_SKIP_PIXELS,we),de.pixelStorei(N.UNPACK_SKIP_ROWS,Be),de.pixelStorei(N.UNPACK_SKIP_IMAGES,Ve);const Ks=C.isDataArrayTexture||C.isData3DTexture,ot=B.isDataArrayTexture||B.isData3DTexture;if(C.isDepthTexture){const Dt=R.get(C),Sr=R.get(B),ft=R.get(Dt.__renderTarget),Mr=R.get(Sr.__renderTarget);de.bindFramebuffer(N.READ_FRAMEBUFFER,ft.__webglFramebuffer),de.bindFramebuffer(N.DRAW_FRAMEBUFFER,Mr.__webglFramebuffer);for(let Zs=0;Zs<Ee;Zs++)Ks&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,R.get(C).__webglTexture,W,Ve+Zs),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,R.get(B).__webglTexture,ge,Lt+Zs)),N.blitFramebuffer(we,Be,Se,me,Ce,it,Se,me,N.DEPTH_BUFFER_BIT,N.NEAREST);de.bindFramebuffer(N.READ_FRAMEBUFFER,null),de.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(W!==0||C.isRenderTargetTexture||R.has(C)){const Dt=R.get(C),Sr=R.get(B);de.bindFramebuffer(N.READ_FRAMEBUFFER,P1),de.bindFramebuffer(N.DRAW_FRAMEBUFFER,L1);for(let ft=0;ft<Ee;ft++)Ks?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Dt.__webglTexture,W,Ve+ft):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Dt.__webglTexture,W),ot?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Sr.__webglTexture,ge,Lt+ft):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Sr.__webglTexture,ge),W!==0?N.blitFramebuffer(we,Be,Se,me,Ce,it,Se,me,N.COLOR_BUFFER_BIT,N.NEAREST):ot?N.copyTexSubImage3D(xe,ge,Ce,it,Lt+ft,we,Be,Se,me):N.copyTexSubImage2D(xe,ge,Ce,it,we,Be,Se,me);de.bindFramebuffer(N.READ_FRAMEBUFFER,null),de.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ot?C.isDataTexture||C.isData3DTexture?N.texSubImage3D(xe,ge,Ce,it,Lt,Se,me,Ee,at,sn,Ct.data):B.isCompressedArrayTexture?N.compressedTexSubImage3D(xe,ge,Ce,it,Lt,Se,me,Ee,at,Ct.data):N.texSubImage3D(xe,ge,Ce,it,Lt,Se,me,Ee,at,sn,Ct):C.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ge,Ce,it,Se,me,at,sn,Ct.data):C.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ge,Ce,it,Ct.width,Ct.height,at,Ct.data):N.texSubImage2D(N.TEXTURE_2D,ge,Ce,it,Se,me,at,sn,Ct);de.pixelStorei(N.UNPACK_ROW_LENGTH,Nn),de.pixelStorei(N.UNPACK_IMAGE_HEIGHT,$e),de.pixelStorei(N.UNPACK_SKIP_PIXELS,Qn),de.pixelStorei(N.UNPACK_SKIP_ROWS,Ai),de.pixelStorei(N.UNPACK_SKIP_IMAGES,yr),ge===0&&B.generateMipmaps&&N.generateMipmap(xe),de.unbindTexture()},this.initRenderTarget=function(C){R.get(C).__webglFramebuffer===void 0&&E.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?E.setTextureCube(C,0):C.isData3DTexture?E.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?E.setTexture2DArray(C,0):E.setTexture2D(C,0),de.unbindTexture()},this.resetState=function(){k=0,O=0,L=null,de.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}const eL=`
varying vec2 vUv;
uniform float uTime;
uniform float mouse;
uniform float uEnableWaves;

void main() {
    vUv = uv;
    float time = uTime * 5.;

    float waveFactor = uEnableWaves;

    vec3 transformed = position;

    transformed.x += sin(time + position.y) * 0.5 * waveFactor;
    transformed.y += cos(time + position.z) * 0.15 * waveFactor;
    transformed.z += sin(time + position.x) * waveFactor;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
}
`,tL=`
varying vec2 vUv;
uniform float mouse;
uniform float uTime;
uniform sampler2D uTexture;

void main() {
    float time = uTime;
    vec2 pos = vUv;
    
    float move = sin(time + mouse) * 0.01;
    float r = texture2D(uTexture, pos + cos(time * 2. - time + pos.x) * .01).r;
    float g = texture2D(uTexture, pos + tan(time * .5 + pos.x - time) * .01).g;
    float b = texture2D(uTexture, pos - cos(time * 2. + time + pos.y) * .01).b;
    float a = texture2D(uTexture, pos).a;
    gl_FragColor = vec4(r, g, b, a);
}
`;Math.map=function(n,e,t,i,r){return(n-e)/(t-e)*(r-i)+i};const Y_=typeof window<"u"?window.devicePixelRatio:1;class nL{constructor(e,{fontSize:t,fontFamily:i,charset:r,invert:s}={}){this.renderer=e,this.domElement=document.createElement("div"),this.domElement.style.position="absolute",this.domElement.style.top="0",this.domElement.style.left="0",this.domElement.style.width="100%",this.domElement.style.height="100%",this.pre=document.createElement("pre"),this.domElement.appendChild(this.pre),this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.domElement.appendChild(this.canvas),this.deg=0,this.invert=s??!0,this.fontSize=t??12,this.fontFamily=i??"'Courier New', monospace",this.charset=r??"@%#*+=-:. ",this.context.webkitImageSmoothingEnabled=!1,this.context.mozImageSmoothingEnabled=!1,this.context.msImageSmoothingEnabled=!1,this.context.imageSmoothingEnabled=!1,this.onMouseMove=this.onMouseMove.bind(this),document.addEventListener("mousemove",this.onMouseMove)}setSize(e,t){this.width=e,this.height=t,this.renderer.setSize(e,t),this.reset(),this.center={x:e/2,y:t/2},this.mouse={x:this.center.x,y:this.center.y}}reset(){this.context.font=`${this.fontSize}px ${this.fontFamily}`;const e=this.context.measureText("A").width;this.cols=Math.floor(this.width/(this.fontSize*(e/this.fontSize))),this.rows=Math.floor(this.height/this.fontSize),this.canvas.width=this.cols,this.canvas.height=this.rows,this.pre.style.fontFamily=this.fontFamily,this.pre.style.fontSize=`${this.fontSize}px`,this.pre.style.margin="0",this.pre.style.padding="0",this.pre.style.lineHeight="1em",this.pre.style.position="absolute",this.pre.style.left="50%",this.pre.style.top="50%",this.pre.style.transform="translate(-50%, -50%)",this.pre.style.zIndex="9",this.pre.style.backgroundAttachment="fixed",this.pre.style.display="block",this.pre.style.width="max-content"}render(e,t){if(!this.renderer||!this.renderer.domElement)return;this.renderer.render(e,t);const i=this.canvas.width,r=this.canvas.height;this.context.clearRect(0,0,i,r),this.context&&i&&r&&this.context.drawImage(this.renderer.domElement,0,0,i,r),this.asciify(this.context,i,r),this.hue()}onMouseMove(e){if(!this.renderer||!this.renderer.domElement)return;const t=this.renderer.domElement.getBoundingClientRect(),i=(e.clientX-t.left)*Y_,r=(e.clientY-t.top)*Y_;this.mouse={x:i,y:r}}get dx(){return this.mouse.x-this.center.x}get dy(){return this.mouse.y-this.center.y}hue(){const e=Math.atan2(this.dy,this.dx)*180/Math.PI;this.deg+=(e-this.deg)*.075,this.domElement.style.filter=`hue-rotate(${this.deg.toFixed(1)}deg)`}asciify(e,t,i){if(t&&i){const r=e.getImageData(0,0,t,i).data;let s="";for(let a=0;a<i;a++){for(let o=0;o<t;o++){const l=o*4+a*4*t,[u,c,h,f]=[r[l],r[l+1],r[l+2],r[l+3]];if(f===0){s+=" ";continue}let p=(.3*u+.6*c+.1*h)/255,g=f/255;p=p*g,p=Math.max(0,Math.min(1,p));let _=Math.floor((1-p)*(this.charset.length-1));s+=this.charset[_]}s+=`
`}this.pre.innerHTML=s}}dispose(){document.removeEventListener("mousemove",this.onMouseMove)}}class iL{constructor(e,{fontSize:t=200,fontFamily:i="Arial",color:r="#fdf9f3"}={}){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.txt=e,this.fontSize=t,this.fontFamily=i,this.color=r,this.font=`600 ${this.fontSize}px ${this.fontFamily}`}resize(){this.context.font=this.font;const e=this.context.measureText(this.txt),t=Math.ceil(e.width)+40,i=Math.ceil(e.actualBoundingBoxAscent+e.actualBoundingBoxDescent)+40;this.canvas.width=t,this.canvas.height=i}render(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.fillStyle=this.color,this.context.font=this.font;const t=20+this.context.measureText(this.txt).actualBoundingBoxAscent;this.context.fillText(this.txt,20,t)}get width(){return this.canvas.width}get height(){return this.canvas.height}get texture(){return this.canvas}}class rL{constructor({text:e,asciiFontSize:t,textFontSize:i,textColor:r,planeBaseHeight:s,enableWaves:a},o,l,u){this.textString=e,this.asciiFontSize=t,this.textFontSize=i,this.textColor=r,this.planeBaseHeight=s,this.container=o,this.width=l,this.height=u,this.enableWaves=a,this.camera=new ri(45,this.width/this.height,1,1e3),this.camera.position.z=30,this.scene=new FC,this.mouse={x:this.width/2,y:this.height/2},this.onMouseMove=this.onMouseMove.bind(this)}async init(){try{await document.fonts.load('600 200px "IBM Plex Mono"'),await document.fonts.load('500 12px "IBM Plex Mono"')}catch{}await document.fonts.ready,this.setMesh(),this.setRenderer()}setMesh(){this.textCanvas=new iL(this.textString,{fontSize:this.textFontSize,fontFamily:"IBM Plex Mono",color:this.textColor}),this.textCanvas.resize(),this.textCanvas.render(),this.texture=new YC(this.textCanvas.texture),this.texture.minFilter=Zt;const e=this.textCanvas.width/this.textCanvas.height,t=this.planeBaseHeight,i=t*e,r=t;this.geometry=new Rl(i,r,36,36),this.material=new Ti({vertexShader:eL,fragmentShader:tL,transparent:!0,uniforms:{uTime:{value:0},mouse:{value:1},uTexture:{value:this.texture},uEnableWaves:{value:this.enableWaves?1:0}}}),this.mesh=new Wi(this.geometry,this.material),this.scene.add(this.mesh)}setRenderer(){this.renderer=new JP({antialias:!1,alpha:!0}),this.renderer.setPixelRatio(1),this.renderer.setClearColor(0,0),this.filter=new nL(this.renderer,{fontFamily:"monospace",fontSize:this.asciiFontSize,invert:!0}),this.container.appendChild(this.filter.domElement),this.setSize(this.width,this.height),this.container.addEventListener("mousemove",this.onMouseMove),this.container.addEventListener("touchmove",this.onMouseMove)}setSize(e,t){e===0||t===0||(this.width=e,this.height=t,this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.filter&&this.filter.setSize(e,t),this.center={x:e/2,y:t/2})}load(){this.animate()}onMouseMove(e){const t=e.touches?e.touches[0]:e,i=this.container.getBoundingClientRect(),r=t.clientX-i.left,s=t.clientY-i.top;this.mouse={x:r,y:s}}animate(){const e=()=>{this.animationFrameId=requestAnimationFrame(e),this.render()};e()}render(){const e=new Date().getTime()*.001;this.textCanvas.render(),this.texture.needsUpdate=!0,this.mesh.material.uniforms.uTime.value=Math.sin(e),this.updateRotation(),this.filter.render(this.scene,this.camera)}updateRotation(){const e=Math.map(this.mouse.y,0,this.height,.5,-.5),t=Math.map(this.mouse.x,0,this.width,-.5,.5);this.mesh.rotation.x+=(e-this.mesh.rotation.x)*.05,this.mesh.rotation.y+=(t-this.mesh.rotation.y)*.05}clear(){this.scene.traverse(e=>{e.isMesh&&typeof e.material=="object"&&e.material!==null&&(Object.keys(e.material).forEach(t=>{const i=e.material[t];i!==null&&typeof i=="object"&&typeof i.dispose=="function"&&i.dispose()}),e.material.dispose(),e.geometry.dispose())}),this.scene.clear()}dispose(){cancelAnimationFrame(this.animationFrameId),this.filter&&(this.filter.dispose(),this.filter.domElement.parentNode&&this.container.removeChild(this.filter.domElement)),this.container.removeEventListener("mousemove",this.onMouseMove),this.container.removeEventListener("touchmove",this.onMouseMove),this.clear(),this.renderer&&(this.renderer.dispose(),this.renderer.forceContextLoss())}}function sL({text:n="Robots!",asciiFontSize:e=1,textFontSize:t=200,textColor:i="#fdf9f3",planeBaseHeight:r=8,enableWaves:s=!1}){const a=ie.useRef(null),o=ie.useRef(null);return ie.useEffect(()=>{if(!a.current)return;let l=!1,u=null,c=null;const h=async(p,g,_)=>{const m=new rL({text:n,asciiFontSize:e,textFontSize:t,textColor:i,planeBaseHeight:r,enableWaves:s},p,g,_);return await m.init(),m};return(async()=>{const{width:p,height:g}=a.current.getBoundingClientRect();if(p===0||g===0){const m=a.current.parentElement.getBoundingClientRect();if(m.width>0&&m.height>0){o.current=await h(a.current,m.width,m.height),!l&&o.current&&(o.current.load(),c=new ResizeObserver(d=>{if(!d[0]||!o.current)return;const{width:v,height:x}=d[0].contentRect;v>0&&x>0&&o.current.setSize(v,x)}),c.observe(a.current));return}u=new IntersectionObserver(async([d])=>{if(!l&&d.isIntersecting&&d.boundingClientRect.width>0&&d.boundingClientRect.height>0){const{width:v,height:x}=d.boundingClientRect;u.disconnect(),u=null,l||(o.current=await h(a.current,v,x),!l&&o.current&&o.current.load())}},{threshold:.1}),u.observe(a.current);return}o.current=await h(a.current,p,g),!l&&o.current&&(o.current.load(),c=new ResizeObserver(_=>{if(!_[0]||!o.current)return;const{width:m,height:d}=_[0].contentRect;m>0&&d>0&&o.current.setSize(m,d)}),c.observe(a.current))})(),()=>{l=!0,u&&u.disconnect(),c&&c.disconnect(),o.current&&(o.current.dispose(),o.current=null)}},[n,e,t,i,r,s]),Le.jsx("div",{ref:a,className:"ascii-text-container",style:{position:"absolute",width:"100%",height:"100%"},children:Le.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500;600&display=swap');

        .ascii-text-container canvas {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          image-rendering: optimizeSpeed;
          image-rendering: -moz-crisp-edges;
          image-rendering: -o-crisp-edges;
          image-rendering: -webkit-optimize-contrast;
          image-rendering: optimize-contrast;
          image-rendering: crisp-edges;
          image-rendering: pixelated;
        }

        .ascii-text-container pre {
          margin: 0;
          user-select: none;
          padding: 0;
          line-height: 1em;
          text-align: center;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          background-image: radial-gradient(circle, #A7EF9E 0%, #61884b 100%);
          background-attachment: fixed;
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          z-index: 9;
          display: block;
          width: max-content;
        }
      `})})}function Ji(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function RS(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var jn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},fl={duration:.5,overwrite:!1,delay:0},Im,nn,_t,oi=1e8,ut=1/oi,up=Math.PI*2,aL=up/4,oL=0,bS=Math.sqrt,lL=Math.cos,uL=Math.sin,Jt=function(e){return typeof e=="string"},bt=function(e){return typeof e=="function"},gr=function(e){return typeof e=="number"},Um=function(e){return typeof e>"u"},Xi=function(e){return typeof e=="object"},bn=function(e){return e!==!1},Nm=function(){return typeof window<"u"},vu=function(e){return bt(e)||Jt(e)},PS=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},pn=Array.isArray,cL=/random\([^)]+\)/g,fL=/,\s*/g,q_=/(?:-?\.?\d|\.)+/gi,LS=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Aa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,hh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,DS=/[+-]=-?[.\d]+/,hL=/[^,'"\[\]\s]+/gi,dL=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Mt,Li,cp,Fm,qn={},vc={},IS,US=function(e){return(vc=Ka(e,qn))&&In},Om=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},hl=function(e,t){return!t&&console.warn(e)},NS=function(e,t){return e&&(qn[e]=t)&&vc&&(vc[e]=t)||qn},dl=function(){return 0},pL={suppressEvents:!0,isStart:!0,kill:!1},Bu={suppressEvents:!0,kill:!1},mL={suppressEvents:!0},Bm={},Qr=[],fp={},FS,kn={},dh={},$_=30,ku=[],km="",zm=function(e){var t=e[0],i,r;if(Xi(t)||bt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=ku.length;r--&&!ku[r].targetTest(t););i=ku[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new r1(e[r],i)))||e.splice(r,1);return e},Ls=function(e){return e._gsap||zm(li(e))[0]._gsap},OS=function(e,t,i){return(i=e[t])&&bt(i)?e[t]():Um(i)&&e.getAttribute&&e.getAttribute(t)||i},Pn=function(e,t){return(e=e.split(",")).forEach(t)||e},It=function(e){return Math.round(e*1e5)/1e5||0},yt=function(e){return Math.round(e*1e7)/1e7||0},Fa=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},gL=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},xc=function(){var e=Qr.length,t=Qr.slice(0),i,r;for(fp={},Qr.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Vm=function(e){return!!(e._initted||e._startAt||e.add)},BS=function(e,t,i,r){Qr.length&&!nn&&xc(),e.render(t,i,!!(nn&&t<0&&Vm(e))),Qr.length&&!nn&&xc()},kS=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(hL).length<2?t:Jt(e)?e.trim():e},zS=function(e){return e},$n=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},_L=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Ka=function(e,t){for(var i in t)e[i]=t[i];return e},K_=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Xi(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},yc=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Vo=function(e){var t=e.parent||Mt,i=e.keyframes?_L(pn(e.keyframes)):$n;if(bn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},vL=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},VS=function(e,t,i,r,s){var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},$c=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[i]===t&&(e[i]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},is=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ds=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},xL=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},hp=function(e,t,i,r){return e._startAt&&(nn?e._startAt.revert(Bu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},yL=function n(e){return!e||e._ts&&n(e.parent)},Z_=function(e){return e._repeat?Za(e._tTime,e=e.duration()+e._rDelay)*e:0},Za=function(e,t){var i=Math.floor(e=yt(e/t));return e&&i===e?i-1:i},Sc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Kc=function(e){return e._end=yt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ut)||0))},Zc=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=yt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Kc(e),i._dirty||Ds(i,e)),e},GS=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Sc(e.rawTime(),t),(!t._dur||bl(0,t.totalDuration(),i)-t._tTime>ut)&&t.render(i,!0)),Ds(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-ut}},Ui=function(e,t,i,r){return t.parent&&is(t),t._start=yt((gr(i)?i:i||e!==Mt?ei(e,i,t):e._time)+t._delay),t._end=yt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),VS(e,t,"_first","_last",e._sort?"_start":0),dp(t)||(e._recent=t),r||GS(e,t),e._ts<0&&Zc(e,e._tTime),e},HS=function(e,t){return(qn.ScrollTrigger||Om("scrollTrigger",t))&&qn.ScrollTrigger.create(t,e)},WS=function(e,t,i,r,s){if(Hm(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!nn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&FS!==zn.frame)return Qr.push(e),e._lazy=[s,r],1},SL=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},dp=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},ML=function(e,t,i,r){var s=e.ratio,a=t<0||!t&&(!e._start&&SL(e)&&!(!e._initted&&dp(e))||(e._ts<0||e._dp._ts<0)&&!dp(e))?0:1,o=e._rDelay,l=0,u,c,h;if(o&&e._repeat&&(l=bl(0,e._tDur,t),c=Za(l,o),e._yoyo&&c&1&&(a=1-a),c!==Za(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||nn||r||e._zTime===ut||!t&&e._zTime){if(!e._initted&&WS(e,t,r,i,l))return;for(h=e._zTime,e._zTime=t||(i?ut:0),i||(i=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,u=e._pt;u;)u.r(a,u.d),u=u._next;t<0&&hp(e,t,i,!0),e._onUpdate&&!i&&Gn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Gn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&is(e,1),!i&&!nn&&(Gn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},EL=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Qa=function(e,t,i,r){var s=e._repeat,a=yt(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:yt(a*(s+1)+e._rDelay*s):a,o>0&&!r&&Zc(e,e._tTime=e._tDur*o),e.parent&&Kc(e),i||Ds(e.parent,e),e},Q_=function(e){return e instanceof En?Ds(e):Qa(e,e._dur)},TL={_start:0,endTime:dl,totalDuration:dl},ei=function n(e,t,i){var r=e.labels,s=e._recent||TL,a=e.duration()>=oi?s.endTime(!1):e._dur,o,l,u;return Jt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(o<0?s:i).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),u&&i&&(l=l/100*(pn(i)?i[0]:i).totalDuration()),o>1?n(e,t.substr(0,o-1),i)+l:a+l)):t==null?a:+t},Go=function(e,t,i){var r=gr(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=bn(l.vars.inherit)&&l.parent;a.immediateRender=bn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Ot(t[0],a,t[s+1])},us=function(e,t){return e||e===0?t(e):t},bl=function(e,t,i){return i<e?e:i>t?t:i},fn=function(e,t){return!Jt(e)||!(t=dL.exec(e))?"":t[1]},wL=function(e,t,i){return us(i,function(r){return bl(e,t,r)})},pp=[].slice,XS=function(e,t){return e&&Xi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Xi(e[0]))&&!e.nodeType&&e!==Li},AL=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Jt(r)&&!t||XS(r,1)?(s=i).push.apply(s,li(r)):i.push(r)})||i},li=function(e,t,i){return _t&&!t&&_t.selector?_t.selector(e):Jt(e)&&!i&&(cp||!Ja())?pp.call((t||Fm).querySelectorAll(e),0):pn(e)?AL(e,i):XS(e)?pp.call(e,0):e?[e]:[]},mp=function(e){return e=li(e)[0]||hl("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return li(t,i.querySelectorAll?i:i===e?hl("Invalid scope")||Fm.createElement("div"):e)}},jS=function(e){return e.sort(function(){return .5-Math.random()})},YS=function(e){if(bt(e))return e;var t=Xi(e)?e:{each:e},i=Is(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,u=t.axis,c=r,h=r;return Jt(r)?c=h={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(c=r[0],h=r[1]),function(f,p,g){var _=(g||t).length,m=a[_],d,v,x,S,T,M,w,y,A;if(!m){if(A=t.grid==="auto"?0:(t.grid||[1,oi])[1],!A){for(w=-oi;w<(w=g[A++].getBoundingClientRect().left)&&A<_;);A<_&&A--}for(m=a[_]=[],d=l?Math.min(A,_)*c-.5:r%A,v=A===oi?0:l?_*h/A-.5:r/A|0,w=0,y=oi,M=0;M<_;M++)x=M%A-d,S=v-(M/A|0),m[M]=T=u?Math.abs(u==="y"?S:x):bS(x*x+S*S),T>w&&(w=T),T<y&&(y=T);r==="random"&&jS(m),m.max=w-y,m.min=y,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(A>_?_-1:u?u==="y"?_/A:A:Math.max(A,_/A))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=fn(t.amount||t.each)||0,i=i&&_<0?kL(i):i}return _=(m[f]-m.min)/m.max||0,yt(m.b+(i?i(_):_)*m.v)+m.u}},gp=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=yt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(gr(i)?0:fn(i))}},qS=function(e,t){var i=pn(e),r,s;return!i&&Xi(e)&&(r=i=e.radius||oi,e.values?(e=li(e.values),(s=!gr(e[0]))&&(r*=r)):e=gp(e.increment)),us(t,i?bt(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),u=oi,c=0,h=e.length,f,p;h--;)s?(f=e[h].x-o,p=e[h].y-l,f=f*f+p*p):f=Math.abs(e[h]-o),f<u&&(u=f,c=h);return c=!r||u<=r?e[c]:a,s||c===a||gr(a)?c:c+fn(a)}:gp(e))},$S=function(e,t,i,r){return us(pn(e)?!t:i===!0?!!(i=0):!r,function(){return pn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},CL=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,a){return a(s)},r)}},RL=function(e,t){return function(i){return e(parseFloat(i))+(t||fn(i))}},bL=function(e,t,i){return ZS(e,t,0,1,i)},KS=function(e,t,i){return us(i,function(r){return e[~~t(r)]})},PL=function n(e,t,i){var r=t-e;return pn(e)?KS(e,n(0,e.length),t):us(i,function(s){return(r+(s-e)%r)%r+e})},LL=function n(e,t,i){var r=t-e,s=r*2;return pn(e)?KS(e,n(0,e.length-1),t):us(i,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},pl=function(e){return e.replace(cL,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(fL);return $S(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},ZS=function(e,t,i,r,s){var a=t-e,o=r-i;return us(s,function(l){return i+((l-e)/a*o||0)})},DL=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var a=Jt(e),o={},l,u,c,h,f;if(i===!0&&(r=1)&&(i=null),a)e={p:e},t={p:t};else if(pn(e)&&!pn(t)){for(c=[],h=e.length,f=h-2,u=1;u<h;u++)c.push(n(e[u-1],e[u]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return c[_](g-_)},i=t}else r||(e=Ka(pn(e)?[]:{},e));if(!c){for(l in t)Gm.call(o,e,l,"get",t[l]);s=function(g){return jm(g,o)||(a?e.p:e)}}}return us(i,s)},J_=function(e,t,i){var r=e.labels,s=oi,a,o,l;for(a in r)o=r[a]-t,o<0==!!i&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Gn=function(e,t,i){var r=e.vars,s=r[t],a=_t,o=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Qr.length&&xc(),o&&(_t=o),c=l?s.apply(u,l):s.call(u),_t=a,c},bo=function(e){return is(e),e.scrollTrigger&&e.scrollTrigger.kill(!!nn),e.progress()<1&&Gn(e,"onInterrupt"),e},Ca,QS=[],JS=function(e){if(e)if(e=!e.name&&e.default||e,Nm()||e.headless){var t=e.name,i=bt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:dl,render:jm,add:Gm,kill:$L,modifier:qL,rawVars:0},a={targetTest:0,get:0,getSetter:Xm,aliases:{},register:0};if(Ja(),e!==r){if(kn[t])return;$n(r,$n(yc(e,s),a)),Ka(r.prototype,Ka(s,yc(e,a))),kn[r.prop=t]=r,e.targetTest&&(ku.push(r),Bm[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}NS(t,r),e.register&&e.register(In,r,Ln)}else QS.push(e)},lt=255,Po={aqua:[0,lt,lt],lime:[0,lt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,lt],navy:[0,0,128],white:[lt,lt,lt],olive:[128,128,0],yellow:[lt,lt,0],orange:[lt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[lt,0,0],pink:[lt,192,203],cyan:[0,lt,lt],transparent:[lt,lt,lt,0]},ph=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*lt+.5|0},e1=function(e,t,i){var r=e?gr(e)?[e>>16,e>>8&lt,e&lt]:0:Po.black,s,a,o,l,u,c,h,f,p,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Po[e])r=Po[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&lt,r&lt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&lt,e&lt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(q_),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,a=c<=.5?c*(u+1):c+u-c*u,s=c*2-a,r.length>3&&(r[3]*=1),r[0]=ph(l+1/3,s,a),r[1]=ph(l,s,a),r[2]=ph(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(LS),i&&r.length<4&&(r[3]=1),r}else r=e.match(q_)||Po.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/lt,a=r[1]/lt,o=r[2]/lt,h=Math.max(s,a,o),f=Math.min(s,a,o),c=(h+f)/2,h===f?l=u=0:(p=h-f,u=c>.5?p/(2-h-f):p/(h+f),l=h===s?(a-o)/p+(a<o?6:0):h===a?(o-s)/p+2:(s-a)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},t1=function(e){var t=[],i=[],r=-1;return e.split(Jr).forEach(function(s){var a=s.match(Aa)||[];t.push.apply(t,a),i.push(r+=a.length+1)}),t.c=i,t},ev=function(e,t,i){var r="",s=(e+r).match(Jr),a=t?"hsla(":"rgba(",o=0,l,u,c,h;if(!s)return e;if(s=s.map(function(f){return(f=e1(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(c=t1(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Jr,"1").split(Aa),h=u.length-1;o<h;o++)r+=u[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Jr),h=u.length-1;o<h;o++)r+=u[o]+s[o];return r+u[h]},Jr=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Po)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),IL=/hsl[a]?\(/,n1=function(e){var t=e.join(" "),i;if(Jr.lastIndex=0,Jr.test(t))return i=IL.test(t),e[1]=ev(e[1],i),e[0]=ev(e[0],i,t1(e[1])),!0},ml,zn=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,a=s,o=[],l,u,c,h,f,p,g=function _(m){var d=n()-r,v=m===!0,x,S,T,M;if((d>e||d<0)&&(i+=d-t),r+=d,T=r-i,x=T-a,(x>0||v)&&(M=++h.frame,f=T-h.time*1e3,h.time=T=T/1e3,a+=x+(x>=s?4:s-x),S=1),v||(l=u(_)),S)for(p=0;p<o.length;p++)o[p](T,f,M,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){IS&&(!cp&&Nm()&&(Li=cp=window,Fm=Li.document||{},qn.gsap=In,(Li.gsapVersions||(Li.gsapVersions=[])).push(In.version),US(vc||Li.GreenSockGlobals||!Li.gsap&&Li||{}),QS.forEach(JS)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),u=c||function(m){return setTimeout(m,a-h.time*1e3+1|0)},ml=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),ml=0,u=dl},lagSmoothing:function(m,d){e=m||1/0,t=Math.min(d||33,e)},fps:function(m){s=1e3/(m||240),a=h.time*1e3+s},add:function(m,d,v){var x=d?function(S,T,M,w){m(S,T,M,w),h.remove(x)}:m;return h.remove(m),o[v?"unshift":"push"](x),Ja(),x},remove:function(m,d){~(d=o.indexOf(m))&&o.splice(d,1)&&p>=d&&p--},_listeners:o},h}(),Ja=function(){return!ml&&zn.wake()},qe={},UL=/^[\d.\-M][\d.\-,\s]/,NL=/["']/g,FL=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,a=i.length,o,l,u;s<a;s++)l=i[s],o=s!==a-1?l.lastIndexOf(","):l.length,u=l.substr(0,o),t[r]=isNaN(u)?u.replace(NL,"").trim():+u,r=l.substr(o+1).trim();return t},OL=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},BL=function(e){var t=(e+"").split("("),i=qe[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[FL(t[1])]:OL(e).split(",").map(kS)):qe._CE&&UL.test(e)?qe._CE("",e):i},kL=function(e){return function(t){return 1-e(1-t)}},Is=function(e,t){return e&&(bt(e)?e:qe[e]||BL(e))||t},$s=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},a;return Pn(e,function(o){qe[o]=qn[o]=s,qe[a=o.toLowerCase()]=i;for(var l in s)qe[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=qe[o+"."+l]=s[l]}),s},i1=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},mh=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),a=s/up*(Math.asin(1/r)||0),o=function(c){return c===1?1:r*Math.pow(2,-10*c)*uL((c-a)*s)+1},l=e==="out"?o:e==="in"?function(u){return 1-o(1-u)}:i1(o);return s=up/s,l.config=function(u,c){return n(e,u,c)},l},gh=function n(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:i1(i);return r.config=function(s){return n(e,s)},r};Pn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;$s(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});qe.Linear.easeNone=qe.none=qe.Linear.easeIn;$s("Elastic",mh("in"),mh("out"),mh());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(o){return o<t?n*o*o:o<i?n*Math.pow(o-1.5/e,2)+.75:o<r?n*(o-=2.25/e)*o+.9375:n*Math.pow(o-2.625/e,2)+.984375};$s("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);$s("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});$s("Circ",function(n){return-(bS(1-n*n)-1)});$s("Sine",function(n){return n===1?1:-lL(n*aL)+1});$s("Back",gh("in"),gh("out"),gh());qe.SteppedEase=qe.steps=qn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,a=1-ut;return function(o){return((r*bl(0,a,o)|0)+s)*i}}};fl.ease=qe["quad.out"];Pn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return km+=n+","+n+"Params,"});var r1=function(e,t){this.id=oL++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:OS,this.set=t?t.getSetter:Xm},gl=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Qa(this,+t.duration,1,1),this.data=t.data,_t&&(this._ctx=_t,_t.data.push(this)),ml||zn.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Qa(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Ja(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Zc(this,i),!s._dp||s.parent||GS(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Ui(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===ut||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),BS(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Z_(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Z_(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Za(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-ut?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Sc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-ut?0:this._rts,this.totalTime(bl(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Kc(this),xL(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ja(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ut&&(this._tTime-=ut)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=yt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Ui(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(bn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Sc(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=mL);var r=nn;return nn=i,Vm(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),nn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Q_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Q_(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(ei(this,i),bn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,bn(r)),this._dur||(this._zTime=-ut),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-ut:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ut,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-ut)},e.eventCallback=function(i,r,s){var a=this.vars;return arguments.length>1?(r?(a[i]=r,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete a[i],this):a[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(a){var o=bt(i)?i:zS,l=function(){var c=r.then;r.then=null,s&&s(),bt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),a(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){bo(this)},n}();$n(gl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ut,_prom:0,_ps:!1,_rts:1});var En=function(n){RS(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=bn(i.sortChildren),Mt&&Ui(i.parent||Mt,Ji(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&HS(Ji(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return Go(0,arguments,this),this},t.from=function(r,s,a){return Go(1,arguments,this),this},t.fromTo=function(r,s,a,o){return Go(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,Vo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ot(r,s,ei(this,a),1),this},t.call=function(r,s,a){return Ui(this,Ot.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,u,c){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=u,a.onCompleteParams=c,a.parent=this,new Ot(r,a,ei(this,l)),this},t.staggerFrom=function(r,s,a,o,l,u,c){return a.runBackwards=1,Vo(a).immediateRender=bn(a.immediateRender),this.staggerTo(r,s,a,o,l,u,c)},t.staggerFromTo=function(r,s,a,o,l,u,c,h){return o.startAt=a,Vo(o).immediateRender=bn(o.immediateRender),this.staggerTo(r,s,o,l,u,c,h)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:yt(r),h=this._zTime<0!=r<0&&(this._initted||!u),f,p,g,_,m,d,v,x,S,T,M,w;if(this!==Mt&&c>l&&r>=0&&(c=l),c!==this._tTime||a||h){if(o!==this._time&&u&&(c+=this._time-o,r+=this._time-o),f=c,S=this._start,x=this._ts,d=!x,h&&(u||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(M=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,a);if(f=yt(c%m),c===l?(_=this._repeat,f=u):(T=yt(c/m),_=~~T,_&&_===T&&(f=u,_--),f>u&&(f=u)),T=Za(this._tTime,m),!o&&this._tTime&&T!==_&&this._tTime-T*m-this._dur<=0&&(T=_),M&&_&1&&(f=u-f,w=1),_!==T&&!this._lock){var y=M&&T&1,A=y===(M&&_&1);if(_<T&&(y=!y),o=y?0:c%u?u:c,this._lock=1,this.render(o||(w?0:yt(_*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Gn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,T=_),o&&o!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,A&&(this._lock=2,o=y?u:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!d)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=EL(this,yt(o),yt(f)),v&&(c-=f-(f=v._start))),this._tTime=c,this._time=f,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&c&&u&&!s&&!T&&(Gn(this,"onStart"),this._tTime!==c))return this;if(f>=o&&r>=0)for(p=this._first;p;){if(g=p._next,(p._act||f>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,a);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,a),f!==this._time||!this._ts&&!d){v=0,g&&(c+=this._zTime=-ut);break}}p=g}else{p=this._last;for(var b=r<0?r:f;p;){if(g=p._prev,(p._act||b<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,a);if(p.render(p._ts>0?(b-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(b-p._start)*p._ts,s,a||nn&&Vm(p)),f!==this._time||!this._ts&&!d){v=0,g&&(c+=this._zTime=b?-ut:ut);break}}p=g}}if(v&&!s&&(this.pause(),v.render(f>=o?0:-ut)._zTime=f>=o?1:-1,this._ts))return this._start=S,Kc(this),this.render(r,s,a);this._onUpdate&&!s&&Gn(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&o)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&is(this,1),!s&&!(r<0&&!o)&&(c||o||!l)&&(Gn(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(gr(s)||(s=ei(this,s,r)),!(r instanceof gl)){if(pn(r))return r.forEach(function(o){return a.add(o,s)}),this;if(Jt(r))return this.addLabel(r,s);if(bt(r))r=Ot.delayedCall(0,r);else return this}return this!==r?Ui(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-oi);for(var l=[],u=this._first;u;)u._start>=o&&(u instanceof Ot?s&&l.push(u):(a&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,a)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return Jt(r)?this.removeLabel(r):bt(r)?this.killTweensOf(r):(r.parent===this&&$c(this,r),r===this._recent&&(this._recent=this._last),Ds(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=yt(zn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=ei(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=Ot.delayedCall(0,s||dl,a);return o.data="isPause",this._hasPause=1,Ui(this,o,ei(this,r))},t.removePause=function(r){var s=this._first;for(r=ei(this,r);s;)s._start===r&&s.data==="isPause"&&is(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)kr!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=li(r),l=this._first,u=gr(s),c;l;)l instanceof Ot?gL(l._targets,o)&&(u?(!kr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(c=l.getTweensOf(o,s)).length&&a.push.apply(a,c),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=ei(a,r),l=s,u=l.startAt,c=l.onStart,h=l.onStartParams,f=l.immediateRender,p,g=Ot.to(a,$n({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(u&&"time"in u?u.time:a._time))/a.timeScale())||ut,onStart:function(){if(a.pause(),!p){var m=s.duration||Math.abs((o-(u&&"time"in u?u.time:a._time))/a.timeScale());g._dur!==m&&Qa(g,m,0,1).render(g._time,!0,!0),p=1}c&&c.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,$n({startAt:{time:ei(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),J_(this,ei(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),J_(this,ei(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+ut)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,u;for(r=yt(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(u in l)l[u]>=a&&(l[u]+=r);return Ds(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Ds(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=oi,u,c,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(h=a.parent;o;)u=o._prev,o._dirty&&o.totalDuration(),c=o._start,c>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Ui(a,o,c-o._delay,1)._lock=0):l=c,c<0&&o._ts&&(s-=c,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=yt(c/a._ts),a._time-=c,a._tTime-=c),a.shiftChildren(-c,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=u;Qa(a,a===Mt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(Mt._ts&&(BS(Mt,Sc(r,Mt)),FS=zn.frame),zn.frame>=$_){$_+=jn.autoSleep||120;var s=Mt._first;if((!s||!s._ts)&&jn.autoSleep&&zn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||zn.sleep()}}},e}(gl);$n(En.prototype,{_lock:0,_hasPause:0,_forcing:0});var zL=function(e,t,i,r,s,a,o){var l=new Ln(this._pt,e,t,0,1,c1,null,s),u=0,c=0,h,f,p,g,_,m,d,v;for(l.b=i,l.e=r,i+="",r+="",(d=~r.indexOf("random("))&&(r=pl(r)),a&&(v=[i,r],a(v,e,t),i=v[0],r=v[1]),f=i.match(hh)||[];h=hh.exec(r);)g=h[0],_=r.substring(u,h.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==f[c++]&&(m=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:m,c:g.charAt(1)==="="?Fa(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},u=hh.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=o,(DS.test(r)||d)&&(l.e=0),this._pt=l,l},Gm=function(e,t,i,r,s,a,o,l,u,c){bt(r)&&(r=r(s||0,e,a));var h=e[t],f=i!=="get"?i:bt(h)?u?e[t.indexOf("set")||!bt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():h,p=bt(h)?u?XL:l1:Wm,g;if(Jt(r)&&(~r.indexOf("random(")&&(r=pl(r)),r.charAt(1)==="="&&(g=Fa(f,r)+(fn(f)||0),(g||g===0)&&(r=g))),!c||f!==r||_p)return!isNaN(f*r)&&r!==""?(g=new Ln(this._pt,e,t,+f||0,r-(f||0),typeof h=="boolean"?YL:u1,0,p),u&&(g.fp=u),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&Om(t,r),zL.call(this,e,t,f,r,p,l||jn.stringFilter,u))},VL=function(e,t,i,r,s){if(bt(e)&&(e=Ho(e,s,t,i,r)),!Xi(e)||e.style&&e.nodeType||pn(e)||PS(e))return Jt(e)?Ho(e,s,t,i,r):e;var a={},o;for(o in e)a[o]=Ho(e[o],s,t,i,r);return a},s1=function(e,t,i,r,s,a){var o,l,u,c;if(kn[e]&&(o=new kn[e]).init(s,o.rawVars?t[e]:VL(t[e],r,s,a,i),i,r,a)!==!1&&(i._pt=l=new Ln(i._pt,s,e,0,1,o.render,o,0,o.priority),i!==Ca))for(u=i._ptLookup[i._targets.indexOf(s)],c=o._props.length;c--;)u[o._props[c]]=l;return o},kr,_p,Hm=function n(e,t,i){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,h=r.yoyoEase,f=r.keyframes,p=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,d=e.parent,v=d&&d.data==="nested"?d.vars.targets:m,x=e._overwrite==="auto"&&!Im,S=e.timeline,T=r.easeReverse||h,M,w,y,A,b,P,D,k,O,L,z,U,F;if(S&&(!f||!s)&&(s="none"),e._ease=Is(s,fl.ease),e._rEase=T&&(Is(T)||e._ease),e._from=!S&&!!r.runBackwards,e._from&&(e.ratio=1),!S||f&&!r.stagger){if(k=m[0]?Ls(m[0]).harness:0,U=k&&r[k.prop],M=yc(r,Bm),_&&(_._zTime<0&&_.progress(1),t<0&&c&&o&&!p?_.render(-1,!0):_.revert(c&&g?Bu:pL),_._lazy=0),a){if(is(e._startAt=Ot.set(m,$n({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!_&&bn(l),startAt:null,delay:0,onUpdate:u&&function(){return Gn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(nn||!o&&!p)&&e._startAt.revert(Bu),o&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&g&&!_){if(t&&(o=!1),y=$n({overwrite:!1,data:"isFromStart",lazy:o&&!_&&bn(l),immediateRender:o,stagger:0,parent:d},M),U&&(y[k.prop]=U),is(e._startAt=Ot.set(m,y)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(nn?e._startAt.revert(Bu):e._startAt.render(-1,!0)),e._zTime=t,!o)n(e._startAt,ut,ut);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&bn(l)||l&&!g,w=0;w<m.length;w++){if(b=m[w],D=b._gsap||zm(m)[w]._gsap,e._ptLookup[w]=L={},fp[D.id]&&Qr.length&&xc(),z=v===m?w:v.indexOf(b),k&&(O=new k).init(b,U||M,e,z,v)!==!1&&(e._pt=A=new Ln(e._pt,b,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(G){L[G]=A}),O.priority&&(P=1)),!k||U)for(y in M)kn[y]&&(O=s1(y,M,e,z,b,v))?O.priority&&(P=1):L[y]=A=Gm.call(e,b,y,"get",M[y],z,v,0,r.stringFilter);e._op&&e._op[w]&&e.kill(b,e._op[w]),x&&e._pt&&(kr=e,Mt.killTweensOf(b,L,e.globalTime(t)),F=!e.parent,kr=0),e._pt&&l&&(fp[D.id]=1)}P&&f1(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!F,f&&t<=0&&S.render(oi,!0,!0)},GL=function(e,t,i,r,s,a,o,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,h,f,p;if(!u)for(u=e._ptCache[t]=[],f=e._ptLookup,p=e._targets.length;p--;){if(c=f[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return _p=1,e.vars[t]="+=0",Hm(e,o),_p=0,l?hl(t+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(p=u.length;p--;)h=u[p],c=h._pt||h,c.s=(r||r===0)&&!s?r:c.s+(r||0)+a*c.c,c.c=i-c.s,h.e&&(h.e=It(i)+fn(h.e)),h.b&&(h.b=c.s+fn(h.b))},HL=function(e,t){var i=e[0]?Ls(e[0]).harness:0,r=i&&i.aliases,s,a,o,l;if(!r)return t;s=Ka({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},WL=function(e,t,i,r){var s=t.ease||r||"power1.inOut",a,o;if(pn(t))o=i[e]||(i[e]=[]),t.forEach(function(l,u){return o.push({t:u/(t.length-1)*100,v:l,e:s})});else for(a in t)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Ho=function(e,t,i,r,s){return bt(e)?e.call(t,i,r,s):Jt(e)&&~e.indexOf("random(")?pl(e):e},a1=km+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",o1={};Pn(a1+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return o1[n]=1});var Ot=function(n){RS(e,n);function e(i,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=n.call(this,a?r:Vo(r))||this;var l=o.vars,u=l.duration,c=l.delay,h=l.immediateRender,f=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,d=r.parent||Mt,v=(pn(i)||PS(i)?gr(i[0]):"length"in r)?[i]:li(i),x,S,T,M,w,y,A,b;if(o._targets=v.length?zm(v):hl("GSAP target "+i+" not found. https://gsap.com",!jn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,g||f||vu(u)||vu(c)){r=o.vars;var P=r.easeReverse||r.yoyoEase;if(x=o.timeline=new En({data:"nested",defaults:_||{},targets:d&&d.data==="nested"?d.vars.targets:v}),x.kill(),x.parent=x._dp=Ji(o),x._start=0,f||vu(u)||vu(c)){if(M=v.length,A=f&&YS(f),Xi(f))for(w in f)~a1.indexOf(w)&&(b||(b={}),b[w]=f[w]);for(S=0;S<M;S++)T=yc(r,o1),T.stagger=0,P&&(T.easeReverse=P),b&&Ka(T,b),y=v[S],T.duration=+Ho(u,Ji(o),S,y,v),T.delay=(+Ho(c,Ji(o),S,y,v)||0)-o._delay,!f&&M===1&&T.delay&&(o._delay=c=T.delay,o._start+=c,T.delay=0),x.to(y,T,A?A(S,y,v):0),x._ease=qe.none;x.duration()?u=c=0:o.timeline=0}else if(g){Vo($n(x.vars.defaults,{ease:"none"})),x._ease=Is(g.ease||r.ease||"none");var D=0,k,O,L;if(pn(g))g.forEach(function(z){return x.to(v,z,">")}),x.duration();else{T={};for(w in g)w==="ease"||w==="easeEach"||WL(w,g[w],T,g.easeEach);for(w in T)for(k=T[w].sort(function(z,U){return z.t-U.t}),D=0,S=0;S<k.length;S++)O=k[S],L={ease:O.e,duration:(O.t-(S?k[S-1].t:0))/100*u},L[w]=O.v,x.to(v,L,D),D+=L.duration;x.duration()<u&&x.to({},{duration:u-x.duration()})}}u||o.duration(u=x.duration())}else o.timeline=0;return p===!0&&!Im&&(kr=Ji(o),Mt.killTweensOf(v),kr=0),Ui(d,Ji(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(h||!u&&!g&&o._start===yt(d._time)&&bn(h)&&yL(Ji(o))&&d.data!=="nested")&&(o._tTime=-ut,o.render(Math.max(0,-c)||0)),m&&HS(Ji(o),m),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,u=this._dur,c=r<0,h=r>l-ut&&!c?l:r<ut?0:r,f,p,g,_,m,d,v,x;if(!u)ML(this,r,s,a);else if(h!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(f=h,x=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+r,s,a);if(f=yt(h%_),h===l?(g=this._repeat,f=u):(m=yt(h/_),g=~~m,g&&g===m?(f=u,g--):f>u&&(f=u)),d=this._yoyo&&g&1,d&&(f=u-f),m=Za(this._tTime,_),f===o&&!a&&this._initted&&g===m)return this._tTime=h,this;g!==m&&this.vars.repeatRefresh&&!d&&!this._lock&&f!==_&&this._initted&&(this._lock=a=1,this.render(yt(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(WS(this,c?r:f,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(u!==this._dur)return this.render(r,s,a)}if(this._rEase){var S=f<o;if(S!==this._inv){var T=S?o:u-o;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=T?(S?-1:1)/T:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(f/u);if(this._from&&(this.ratio=v=1-v),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&h&&!s&&!m&&(Gn(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&hp(this,r,s,a),Gn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Gn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(c&&!this._onUpdate&&hp(this,r,!0,!0),(r||!u)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&is(this,1),!s&&!(c&&!o)&&(h||o||d)&&(Gn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,l){ml||zn.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Hm(this,u),c=this._ease(u/this._dur),GL(this,r,s,a,o,c,u,l)?this.resetTo(r,s,a,o,1):(Zc(this,0),this.parent||VS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?bo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!nn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,kr&&kr.vars.overwrite!==!0)._first||bo(this),this.parent&&a!==this.timeline.totalDuration()&&Qa(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?li(r):o,u=this._ptLookup,c=this._pt,h,f,p,g,_,m,d;if((!s||s==="all")&&vL(o,l))return s==="all"&&(this._pt=0),bo(this);for(h=this._op=this._op||[],s!=="all"&&(Jt(s)&&(_={},Pn(s,function(v){return _[v]=1}),s=_),s=HL(o,s)),d=o.length;d--;)if(~l.indexOf(o[d])){f=u[d],s==="all"?(h[d]=s,g=f,p={}):(p=h[d]=h[d]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&$c(this,m,"_pt"),delete f[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&c&&bo(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Go(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return Go(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return Mt.killTweensOf(r,s,a)},e}(gl);$n(Ot.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Pn("staggerTo,staggerFrom,staggerFromTo",function(n){Ot[n]=function(){var e=new En,t=pp.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Wm=function(e,t,i){return e[t]=i},l1=function(e,t,i){return e[t](i)},XL=function(e,t,i,r){return e[t](r.fp,i)},jL=function(e,t,i){return e.setAttribute(t,i)},Xm=function(e,t){return bt(e[t])?l1:Um(e[t])&&e.setAttribute?jL:Wm},u1=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},YL=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},c1=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},jm=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},qL=function(e,t,i,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,i),s=a},$L=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?$c(this,t,"_pt"):t.dep||(i=1),t=r;return!i},KL=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},f1=function(e){for(var t=e._pt,i,r,s,a;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=i}e._pt=s},Ln=function(){function n(t,i,r,s,a,o,l,u,c){this.t=i,this.s=s,this.c=a,this.p=r,this.r=o||u1,this.d=l||this,this.set=u||Wm,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=KL,this.m=i,this.mt=s,this.tween=r},n}();Pn(km+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return Bm[n]=1});qn.TweenMax=qn.TweenLite=Ot;qn.TimelineLite=qn.TimelineMax=En;Mt=new En({sortChildren:!1,defaults:fl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});jn.stringFilter=n1;var Us=[],zu={},ZL=[],tv=0,QL=0,_h=function(e){return(zu[e]||ZL).map(function(t){return t()})},vp=function(){var e=Date.now(),t=[];e-tv>2&&(_h("matchMediaInit"),Us.forEach(function(i){var r=i.queries,s=i.conditions,a,o,l,u;for(o in r)a=Li.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,u=1);u&&(i.revert(),l&&t.push(i))}),_h("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),tv=e,_h("matchMedia"))},h1=function(){function n(t,i){this.selector=i&&mp(i),this.data=[],this._r=[],this.isReverted=!1,this.id=QL++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){bt(i)&&(s=r,r=i,i=bt);var a=this,o=function(){var u=_t,c=a.selector,h;return u&&u!==a&&u.data.push(a),s&&(a.selector=mp(s)),_t=a,h=r.apply(a,arguments),bt(h)&&a._r.push(h),_t=u,a.selector=c,a.isReverted=!1,h};return a.last=o,i===bt?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var r=_t;_t=null,i(this),_t=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Ot&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var o=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}));for(o.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,h){return h.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof En?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Ot)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=Us.length;a--;)Us[a].id===this.id&&Us.splice(a,1)},e.revert=function(i){this.kill(i||{})},n}(),JL=function(){function n(t){this.contexts=[],this.scope=t,_t&&_t.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Xi(i)||(i={matches:i});var a=new h1(0,s||this.scope),o=a.conditions={},l,u,c;_t&&!a.selector&&(a.selector=_t.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=i;for(u in i)u==="all"?c=1:(l=Li.matchMedia(i[u]),l&&(Us.indexOf(a)<0&&Us.push(a),(o[u]=l.matches)&&(c=1),l.addListener?l.addListener(vp):l.addEventListener("change",vp)));return c&&r(a,function(h){return a.add(null,h)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Mc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return JS(r)})},timeline:function(e){return new En(e)},getTweensOf:function(e,t){return Mt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Jt(e)&&(e=li(e)[0]);var s=Ls(e||{}).get,a=i?zS:kS;return i==="native"&&(i=""),e&&(t?a((kn[t]&&kn[t].get||s)(e,t,i,r)):function(o,l,u){return a((kn[o]&&kn[o].get||s)(e,o,l,u))})},quickSetter:function(e,t,i){if(e=li(e),e.length>1){var r=e.map(function(c){return In.quickSetter(c,t,i)}),s=r.length;return function(c){for(var h=s;h--;)r[h](c)}}e=e[0]||{};var a=kn[t],o=Ls(e),l=o.harness&&(o.harness.aliases||{})[t]||t,u=a?function(c){var h=new a;Ca._pt=0,h.init(e,i?c+i:c,Ca,0,[e]),h.render(1,h),Ca._pt&&jm(1,Ca)}:o.set(e,l);return a?u:function(c){return u(e,l,i?c+i:c,o,1)}},quickTo:function(e,t,i){var r,s=In.to(e,$n((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),a=function(l,u,c){return s.resetTo(t,l,u,c)};return a.tween=s,a},isTweening:function(e){return Mt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Is(e.ease,fl.ease)),K_(fl,e||{})},config:function(e){return K_(jn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!kn[o]&&!qn[o]&&hl(t+" effect requires "+o+" plugin.")}),dh[t]=function(o,l,u){return i(li(o),$n(l||{},s),u)},a&&(En.prototype[t]=function(o,l,u){return this.add(dh[t](o,Xi(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){qe[e]=Is(t)},parseEase:function(e,t){return arguments.length?Is(e,t):qe},getById:function(e){return Mt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new En(e),r,s;for(i.smoothChildTiming=bn(e.smoothChildTiming),Mt.remove(i),i._dp=0,i._time=i._tTime=Mt._time,r=Mt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Ot&&r.vars.onComplete===r._targets[0]))&&Ui(i,r,r._start-r._delay),r=s;return Ui(Mt,i,0),i},context:function(e,t){return e?new h1(e,t):_t},matchMedia:function(e){return new JL(e)},matchMediaRefresh:function(){return Us.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||vp()},addEventListener:function(e,t){var i=zu[e]||(zu[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=zu[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:PL,wrapYoyo:LL,distribute:YS,random:$S,snap:qS,normalize:bL,getUnit:fn,clamp:wL,splitColor:e1,toArray:li,selector:mp,mapRange:ZS,pipe:CL,unitize:RL,interpolate:DL,shuffle:jS},install:US,effects:dh,ticker:zn,updateRoot:En.updateRoot,plugins:kn,globalTimeline:Mt,core:{PropTween:Ln,globals:NS,Tween:Ot,Timeline:En,Animation:gl,getCache:Ls,_removeLinkedListItem:$c,reverting:function(){return nn},context:function(e){return e&&_t&&(_t.data.push(e),e._ctx=_t),_t},suppressOverwrites:function(e){return Im=e}}};Pn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Mc[n]=Ot[n]});zn.add(En.updateRoot);Ca=Mc.to({},{duration:0});var eD=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},tD=function(e,t){var i=e._targets,r,s,a;for(r in t)for(s=i.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=eD(a,r)),a&&a.modifier&&a.modifier(t[r],e,i[s],r))},vh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,u;if(Jt(s)&&(l={},Pn(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}tD(o,s)}}}},In=Mc.registerPlugin({name:"attr",init:function(e,t,i,r,s){var a,o,l;this.tween=i;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)nn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},vh("roundProps",gp),vh("modifiers"),vh("snap",qS))||Mc;Ot.version=En.version=In.version="3.15.0";IS=1;Nm()&&Ja();qe.Power0;qe.Power1;qe.Power2;qe.Power3;qe.Power4;qe.Linear;qe.Quad;qe.Cubic;qe.Quart;qe.Quint;qe.Strong;qe.Elastic;qe.Back;qe.SteppedEase;qe.Bounce;qe.Sine;qe.Expo;qe.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var nv,zr,Oa,Ym,Rs,iv,qm,nD=function(){return typeof window<"u"},_r={},ys=180/Math.PI,Ba=Math.PI/180,da=Math.atan2,rv=1e8,$m=/([A-Z])/g,iD=/(left|right|width|margin|padding|x)/i,rD=/[\s,\(]\S/,Oi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},xp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},sD=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},aD=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},oD=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},lD=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},d1=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},p1=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},uD=function(e,t,i){return e.style[t]=i},cD=function(e,t,i){return e.style.setProperty(t,i)},fD=function(e,t,i){return e._gsap[t]=i},hD=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},dD=function(e,t,i,r,s){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},pD=function(e,t,i,r,s){var a=e._gsap;a[t]=i,a.renderTransform(s,a)},Et="transform",Dn=Et+"Origin",mD=function n(e,t){var i=this,r=this.target,s=r.style,a=r._gsap;if(e in _r&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Oi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=tr(r,o)}):this.tfm[e]=a.x?a[e]:tr(r,e),e===Dn&&(this.tfm.zOrigin=a.zOrigin);else return Oi.transform.split(",").forEach(function(o){return n.call(i,o,t)});if(this.props.indexOf(Et)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Dn,t,"")),e=Et}(s||t)&&this.props.push(e,t,s[e])},m1=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},gD=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace($m,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=qm(),(!s||!s.isStart)&&!i[Et]&&(m1(i),r.zOrigin&&i[Dn]&&(i[Dn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},g1=function(e,t){var i={target:e,props:[],revert:gD,save:mD};return e._gsap||In.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},_1,yp=function(e,t){var i=zr.createElementNS?zr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):zr.createElement(e);return i&&i.style?i:zr.createElement(e)},Hn=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace($m,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,eo(t)||t,1)||""},sv="O,Moz,ms,Ms,Webkit".split(","),eo=function(e,t,i){var r=t||Rs,s=r.style,a=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(sv[a]+e in s););return a<0?null:(a===3?"ms":a>=0?sv[a]:"")+e},Sp=function(){nD()&&window.document&&(nv=window,zr=nv.document,Oa=zr.documentElement,Rs=yp("div")||{style:{}},yp("div"),Et=eo(Et),Dn=Et+"Origin",Rs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",_1=!!eo("perspective"),qm=In.core.reverting,Ym=1)},av=function(e){var t=e.ownerSVGElement,i=yp("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Oa.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Oa.removeChild(i),s},ov=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},v1=function(e){var t,i;try{t=e.getBBox()}catch{t=av(e),i=1}return t&&(t.width||t.height)||i||(t=av(e)),t&&!t.width&&!t.x&&!t.y?{x:+ov(e,["x","cx","x1"])||0,y:+ov(e,["y","cy","y1"])||0,width:0,height:0}:t},x1=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&v1(e))},rs=function(e,t){if(t){var i=e.style,r;t in _r&&t!==Dn&&(t=Et),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace($m,"-$1").toLowerCase())):i.removeAttribute(t)}},Vr=function(e,t,i,r,s,a){var o=new Ln(e._pt,t,i,0,1,a?p1:d1);return e._pt=o,o.b=r,o.e=s,e._props.push(i),o},lv={deg:1,rad:1,turn:1},_D={grid:1,flex:1},ss=function n(e,t,i,r){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=Rs.style,l=iD.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",p=r==="%",g,_,m,d;if(r===a||!s||lv[r]||lv[a])return s;if(a!=="px"&&!f&&(s=n(e,t,i,"px")),d=e.getCTM&&x1(e),(p||a==="%")&&(_r[t]||~t.indexOf("adius")))return g=d?e.getBBox()[l?"width":"height"]:e[c],It(p?s/g*h:s/100*g);if(o[l?"width":"height"]=h+(f?a:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,d&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===zr||!_.appendChild)&&(_=zr.body),m=_._gsap,m&&p&&m.width&&l&&m.time===zn.time&&!m.uncache)return It(s/m.width*h);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=h+r,g=e[c],v?e.style[t]=v:rs(e,t)}else(p||a==="%")&&!_D[Hn(_,"display")]&&(o.position=Hn(e,"position")),_===e&&(o.position="static"),_.appendChild(Rs),g=Rs[c],_.removeChild(Rs),o.position="absolute";return l&&p&&(m=Ls(_),m.time=zn.time,m.width=_[c]),It(f?g*s/h:g&&s?h/g*s:0)},tr=function(e,t,i,r){var s;return Ym||Sp(),t in Oi&&t!=="transform"&&(t=Oi[t],~t.indexOf(",")&&(t=t.split(",")[0])),_r[t]&&t!=="transform"?(s=vl(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Tc(Hn(e,Dn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Ec[t]&&Ec[t](e,t,i)||Hn(e,t)||OS(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?ss(e,t,s,i)+i:s},vD=function(e,t,i,r){if(!i||i==="none"){var s=eo(t,e,1),a=s&&Hn(e,s,1);a&&a!==i?(t=s,i=a):t==="borderColor"&&(i=Hn(e,"borderTopColor"))}var o=new Ln(this._pt,e.style,t,0,1,c1),l=0,u=0,c,h,f,p,g,_,m,d,v,x,S,T;if(o.b=i,o.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Hn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=Hn(e,t)||r,_?e.style[t]=_:rs(e,t)),c=[i,r],n1(c),i=c[0],r=c[1],f=i.match(Aa)||[],T=r.match(Aa)||[],T.length){for(;h=Aa.exec(r);)m=h[0],v=r.substring(l,h.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),m!==(_=f[u++]||"")&&(p=parseFloat(_)||0,S=_.substr((p+"").length),m.charAt(1)==="="&&(m=Fa(p,m)+S),d=parseFloat(m),x=m.substr((d+"").length),l=Aa.lastIndex-x.length,x||(x=x||jn.units[t]||S,l===r.length&&(r+=x,o.e+=x)),S!==x&&(p=ss(e,t,_,x)||0),o._pt={_next:o._pt,p:v||u===1?v:",",s:p,c:d-p,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?p1:d1;return DS.test(r)&&(o.e=0),this._pt=o,o},uv={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},xD=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=uv[i]||i,t[1]=uv[r]||r,t.join(" ")},yD=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,a=i._gsap,o,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)o=s[u],_r[o]&&(l=1,o=o==="transformOrigin"?Dn:Et),rs(i,o);l&&(rs(i,Et),a&&(a.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",vl(i,1),a.uncache=1,m1(r)))}},Ec={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var a=e._pt=new Ln(e._pt,t,i,0,0,yD);return a.u=r,a.pr=-10,a.tween=s,e._props.push(i),1}}},_l=[1,0,0,1,0,0],y1={},S1=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},cv=function(e){var t=Hn(e,Et);return S1(t)?_l:t.substr(7).match(LS).map(It)},Km=function(e,t){var i=e._gsap||Ls(e),r=e.style,s=cv(e),a,o,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?_l:s):(s===_l&&!e.offsetParent&&e!==Oa&&!i.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,o=e.nextElementSibling,Oa.appendChild(e)),s=cv(e),l?r.display=l:rs(e,"display"),u&&(o?a.insertBefore(e,o):a?a.appendChild(e):Oa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Mp=function(e,t,i,r,s,a){var o=e._gsap,l=s||Km(e,!0),u=o.xOrigin||0,c=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,p=l[0],g=l[1],_=l[2],m=l[3],d=l[4],v=l[5],x=t.split(" "),S=parseFloat(x[0])||0,T=parseFloat(x[1])||0,M,w,y,A;i?l!==_l&&(w=p*m-g*_)&&(y=S*(m/w)+T*(-_/w)+(_*v-m*d)/w,A=S*(-g/w)+T*(p/w)-(p*v-g*d)/w,S=y,T=A):(M=v1(e),S=M.x+(~x[0].indexOf("%")?S/100*M.width:S),T=M.y+(~(x[1]||x[0]).indexOf("%")?T/100*M.height:T)),r||r!==!1&&o.smooth?(d=S-u,v=T-c,o.xOffset=h+(d*p+v*_)-d,o.yOffset=f+(d*g+v*m)-v):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=T,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!i,e.style[Dn]="0px 0px",a&&(Vr(a,o,"xOrigin",u,S),Vr(a,o,"yOrigin",c,T),Vr(a,o,"xOffset",h,o.xOffset),Vr(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",S+" "+T)},vl=function(e,t){var i=e._gsap||new r1(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),u=Hn(e,Dn)||"0",c,h,f,p,g,_,m,d,v,x,S,T,M,w,y,A,b,P,D,k,O,L,z,U,F,G,$,ee,se,Ue,be,Ae;return c=h=f=_=m=d=v=x=S=0,p=g=1,i.svg=!!(e.getCTM&&x1(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Et]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Et]!=="none"?l[Et]:"")),r.scale=r.rotate=r.translate="none"),w=Km(e,i.svg),i.svg&&(i.uncache?(F=e.getBBox(),u=i.xOrigin-F.x+"px "+(i.yOrigin-F.y)+"px",U=""):U=!t&&e.getAttribute("data-svg-origin"),Mp(e,U||u,!!U||i.originIsAbsolute,i.smooth!==!1,w)),T=i.xOrigin||0,M=i.yOrigin||0,w!==_l&&(P=w[0],D=w[1],k=w[2],O=w[3],c=L=w[4],h=z=w[5],w.length===6?(p=Math.sqrt(P*P+D*D),g=Math.sqrt(O*O+k*k),_=P||D?da(D,P)*ys:0,v=k||O?da(k,O)*ys+_:0,v&&(g*=Math.abs(Math.cos(v*Ba))),i.svg&&(c-=T-(T*P+M*k),h-=M-(T*D+M*O))):(Ae=w[6],Ue=w[7],$=w[8],ee=w[9],se=w[10],be=w[11],c=w[12],h=w[13],f=w[14],y=da(Ae,se),m=y*ys,y&&(A=Math.cos(-y),b=Math.sin(-y),U=L*A+$*b,F=z*A+ee*b,G=Ae*A+se*b,$=L*-b+$*A,ee=z*-b+ee*A,se=Ae*-b+se*A,be=Ue*-b+be*A,L=U,z=F,Ae=G),y=da(-k,se),d=y*ys,y&&(A=Math.cos(-y),b=Math.sin(-y),U=P*A-$*b,F=D*A-ee*b,G=k*A-se*b,be=O*b+be*A,P=U,D=F,k=G),y=da(D,P),_=y*ys,y&&(A=Math.cos(y),b=Math.sin(y),U=P*A+D*b,F=L*A+z*b,D=D*A-P*b,z=z*A-L*b,P=U,L=F),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,d=180-d),p=It(Math.sqrt(P*P+D*D+k*k)),g=It(Math.sqrt(z*z+Ae*Ae)),y=da(L,z),v=Math.abs(y)>2e-4?y*ys:0,S=be?1/(be<0?-be:be):0),i.svg&&(U=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!S1(Hn(e,Et)),U&&e.setAttribute("transform",U))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=h-((i.yPercent=h&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=f+a,i.scaleX=It(p),i.scaleY=It(g),i.rotation=It(_)+o,i.rotationX=It(m)+o,i.rotationY=It(d)+o,i.skewX=v+o,i.skewY=x+o,i.transformPerspective=S+a,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[Dn]=Tc(u)),i.xOffset=i.yOffset=0,i.force3D=jn.force3D,i.renderTransform=i.svg?MD:_1?M1:SD,i.uncache=0,i},Tc=function(e){return(e=e.split(" "))[0]+" "+e[1]},xh=function(e,t,i){var r=fn(t);return It(parseFloat(t)+parseFloat(ss(e,"x",i+"px",r)))+r},SD=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,M1(e,t)},ms="0deg",Mo="0px",gs=") ",M1=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.z,u=i.rotation,c=i.rotationY,h=i.rotationX,f=i.skewX,p=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,d=i.force3D,v=i.target,x=i.zOrigin,S="",T=d==="auto"&&e&&e!==1||d===!0;if(x&&(h!==ms||c!==ms)){var M=parseFloat(c)*Ba,w=Math.sin(M),y=Math.cos(M),A;M=parseFloat(h)*Ba,A=Math.cos(M),a=xh(v,a,w*A*-x),o=xh(v,o,-Math.sin(M)*-x),l=xh(v,l,y*A*-x+x)}m!==Mo&&(S+="perspective("+m+gs),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(T||a!==Mo||o!==Mo||l!==Mo)&&(S+=l!==Mo||T?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+gs),u!==ms&&(S+="rotate("+u+gs),c!==ms&&(S+="rotateY("+c+gs),h!==ms&&(S+="rotateX("+h+gs),(f!==ms||p!==ms)&&(S+="skew("+f+", "+p+gs),(g!==1||_!==1)&&(S+="scale("+g+", "+_+gs),v.style[Et]=S||"translate(0, 0)"},MD=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.rotation,u=i.skewX,c=i.skewY,h=i.scaleX,f=i.scaleY,p=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,d=i.yOffset,v=i.forceCSS,x=parseFloat(a),S=parseFloat(o),T,M,w,y,A;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Ba,u*=Ba,T=Math.cos(l)*h,M=Math.sin(l)*h,w=Math.sin(l-u)*-f,y=Math.cos(l-u)*f,u&&(c*=Ba,A=Math.tan(u-c),A=Math.sqrt(1+A*A),w*=A,y*=A,c&&(A=Math.tan(c),A=Math.sqrt(1+A*A),T*=A,M*=A)),T=It(T),M=It(M),w=It(w),y=It(y)):(T=h,y=f,M=w=0),(x&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(x=ss(p,"x",a,"px"),S=ss(p,"y",o,"px")),(g||_||m||d)&&(x=It(x+g-(g*T+_*w)+m),S=It(S+_-(g*M+_*y)+d)),(r||s)&&(A=p.getBBox(),x=It(x+r/100*A.width),S=It(S+s/100*A.height)),A="matrix("+T+","+M+","+w+","+y+","+x+","+S+")",p.setAttribute("transform",A),v&&(p.style[Et]=A)},ED=function(e,t,i,r,s){var a=360,o=Jt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?ys:1),u=l-r,c=r+u+"deg",h,f;return o&&(h=s.split("_")[1],h==="short"&&(u%=a,u!==u%(a/2)&&(u+=u<0?a:-a)),h==="cw"&&u<0?u=(u+a*rv)%a-~~(u/a)*a:h==="ccw"&&u>0&&(u=(u-a*rv)%a-~~(u/a)*a)),e._pt=f=new Ln(e._pt,t,i,r,u,sD),f.e=c,f.u="deg",e._props.push(i),f},fv=function(e,t){for(var i in t)e[i]=t[i];return e},TD=function(e,t,i){var r=fv({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,u,c,h,f,p,g;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),a[Et]=t,o=vl(i,1),rs(i,Et),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Et],a[Et]=t,o=vl(i,1),a[Et]=u);for(l in _r)u=r[l],c=o[l],u!==c&&s.indexOf(l)<0&&(p=fn(u),g=fn(c),h=p!==g?ss(i,l,u,g):parseFloat(u),f=parseFloat(c),e._pt=new Ln(e._pt,o,l,h,f-h,xp),e._pt.u=g||0,e._props.push(l));fv(o,r)};Pn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",a=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(o){return e<2?n+o:"border"+o+n});Ec[e>1?"border"+n:n]=function(o,l,u,c,h){var f,p;if(arguments.length<4)return f=a.map(function(g){return tr(o,g,u)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(c+"").split(" "),p={},a.forEach(function(g,_){return p[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,p,h)}});var E1={name:"css",register:Sp,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var a=this._props,o=e.style,l=i.vars.startAt,u,c,h,f,p,g,_,m,d,v,x,S,T,M,w,y,A;Ym||Sp(),this.styles=this.styles||g1(e),y=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(c=t[_],!(kn[_]&&s1(_,t,i,r,e,s)))){if(p=typeof c,g=Ec[_],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=pl(c)),g)g(this,e,_,c,i)&&(w=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(_)+"").trim(),c+="",Jr.lastIndex=0,Jr.test(u)||(m=fn(u),d=fn(c),d?m!==d&&(u=ss(e,_,u,d)+d):m&&(c+=m)),this.add(o,"setProperty",u,c,r,s,0,0,_),a.push(_),y.push(_,0,o[_]);else if(p!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],Jt(u)&&~u.indexOf("random(")&&(u=pl(u)),fn(u+"")||u==="auto"||(u+=jn.units[_]||fn(tr(e,_))||""),(u+"").charAt(1)==="="&&(u=tr(e,_))):u=tr(e,_),f=parseFloat(u),v=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),h=parseFloat(c),_ in Oi&&(_==="autoAlpha"&&(f===1&&tr(e,"visibility")==="hidden"&&h&&(f=0),y.push("visibility",0,o.visibility),Vr(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Oi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in _r,x){if(this.styles.save(_),A=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=Hn(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var b=e.style.perspective;e.style.perspective=c,c=Hn(e,"perspective"),b?e.style.perspective=b:rs(e,"perspective")}h=parseFloat(c)}if(S||(T=e._gsap,T.renderTransform&&!t.parseTransform||vl(e,t.parseTransform),M=t.smoothOrigin!==!1&&T.smooth,S=this._pt=new Ln(this._pt,o,Et,0,1,T.renderTransform,T,0,-1),S.dep=1),_==="scale")this._pt=new Ln(this._pt,T,"scaleY",T.scaleY,(v?Fa(T.scaleY,v+h):h)-T.scaleY||0,xp),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){y.push(Dn,0,o[Dn]),c=xD(c),T.svg?Mp(e,c,0,M,0,this):(d=parseFloat(c.split(" ")[2])||0,d!==T.zOrigin&&Vr(this,T,"zOrigin",T.zOrigin,d),Vr(this,o,_,Tc(u),Tc(c)));continue}else if(_==="svgOrigin"){Mp(e,c,1,M,0,this);continue}else if(_ in y1){ED(this,T,_,f,v?Fa(f,v+c):c);continue}else if(_==="smoothOrigin"){Vr(this,T,"smooth",T.smooth,c);continue}else if(_==="force3D"){T[_]=c;continue}else if(_==="transform"){TD(this,c,e);continue}}else _ in o||(_=eo(_)||_);if(x||(h||h===0)&&(f||f===0)&&!rD.test(c)&&_ in o)m=(u+"").substr((f+"").length),h||(h=0),d=fn(c)||(_ in jn.units?jn.units[_]:m),m!==d&&(f=ss(e,_,u,d)),this._pt=new Ln(this._pt,x?T:o,_,f,(v?Fa(f,v+h):h)-f,!x&&(d==="px"||_==="zIndex")&&t.autoRound!==!1?lD:xp),this._pt.u=d||0,x&&A!==c?(this._pt.b=u,this._pt.e=A,this._pt.r=oD):m!==d&&d!=="%"&&(this._pt.b=u,this._pt.r=aD);else if(_ in o)vD.call(this,e,_,u,v?v+c:c);else if(_ in e)this.add(e,_,u||e[_],v?v+c:c,r,s);else if(_!=="parseTransform"){Om(_,c);continue}x||(_ in o?y.push(_,0,o[_]):typeof e[_]=="function"?y.push(_,2,e[_]()):y.push(_,1,u||e[_])),a.push(_)}}w&&f1(this)},render:function(e,t){if(t.tween._time||!qm())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:tr,aliases:Oi,getSetter:function(e,t,i){var r=Oi[t];return r&&r.indexOf(",")<0&&(t=r),t in _r&&t!==Dn&&(e._gsap.x||tr(e,"x"))?i&&iv===i?t==="scale"?hD:fD:(iv=i||{})&&(t==="scale"?dD:pD):e.style&&!Um(e.style[t])?uD:~t.indexOf("-")?cD:Xm(e,t)},core:{_removeProperty:rs,_getMatrix:Km}};In.utils.checkPrefix=eo;In.core.getStyleSaver=g1;(function(n,e,t,i){var r=Pn(n+","+e+","+t,function(s){_r[s]=1});Pn(e,function(s){jn.units[s]="deg",y1[s]=1}),Oi[r[13]]=n+","+e,Pn(i,function(s){var a=s.split(":");Oi[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Pn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){jn.units[n]="px"});In.registerPlugin(E1);var $t=In.registerPlugin(E1)||In;$t.core.Tween;const wD=[{label:"home",href:"#",ariaLabel:"Home",rotation:-8,hoverStyles:{bgColor:"#3b82f6",textColor:"#ffffff"}},{label:"about",href:"#",ariaLabel:"About",rotation:8,hoverStyles:{bgColor:"#10b981",textColor:"#ffffff"}},{label:"projects",href:"#",ariaLabel:"Documentation",rotation:8,hoverStyles:{bgColor:"#f59e0b",textColor:"#ffffff"}},{label:"blog",href:"#",ariaLabel:"Blog",rotation:8,hoverStyles:{bgColor:"#ef4444",textColor:"#ffffff"}},{label:"contact",href:"#",ariaLabel:"Contact",rotation:-8,hoverStyles:{bgColor:"#8b5cf6",textColor:"#ffffff"}}];function Zm({logo:n,onMenuClick:e,className:t,style:i,menuAriaLabel:r="Toggle menu",menuBg:s="#fff",menuContentColor:a="#111",useFixedPosition:o=!1,items:l,animationEase:u="back.out(1.5)",animationDuration:c=.5,staggerDelay:h=.12}){const[f,p]=ie.useState(!1),[g,_]=ie.useState(!1),m=ie.useRef(null),d=ie.useRef([]),v=ie.useRef([]),x=l!=null&&l.length?l:wD,S=["bubble-menu",o?"fixed":"absolute",t].filter(Boolean).join(" "),T=()=>{const M=!f;M&&_(!0),p(M),e==null||e(M)};return ie.useEffect(()=>{const M=m.current,w=d.current.filter(Boolean),y=v.current.filter(Boolean);!M||!w.length||(f?($t.killTweensOf(M),$t.set(M,{visibility:"visible"}),$t.to(M,{opacity:1,duration:.3,ease:"power2.out",onStart:()=>{$t.set(M,{backdropFilter:"blur(0px)",webkitBackdropFilter:"blur(0px)"})}}),$t.to(M,{backdropFilter:"blur(10px)",webkitBackdropFilter:"blur(10px)",duration:.5,ease:"power2.out"}),$t.killTweensOf([...w,...y]),$t.set(w,{scale:0,rotation:0,transformOrigin:"50% 50%"}),$t.set(y,{y:24,autoAlpha:0}),w.forEach((A,b)=>{const P=x[b],k=window.innerWidth>=900?(P==null?void 0:P.rotation)??0:0,O=b*h+$t.utils.random(-.05,.05),L=$t.timeline({delay:O});L.to(A,{scale:1,rotation:k,duration:c,ease:u}),y[b]&&L.to(y[b],{y:0,autoAlpha:1,duration:c,ease:"power3.out"},`-=${c*.9}`)})):g&&($t.killTweensOf(M),$t.to(M,{opacity:0,backdropFilter:"blur(0px)",webkitBackdropFilter:"blur(0px)",duration:.3,ease:"power2.in",onComplete:()=>{$t.set(M,{visibility:"hidden"}),_(!1)}}),$t.killTweensOf([...w,...y]),$t.to(y,{y:24,autoAlpha:0,duration:.2,ease:"power3.in"}),$t.to(w,{scale:0,rotation:0,duration:.2,ease:"power3.in"})))},[f,g,u,c,h]),ie.useEffect(()=>{const M=()=>{if(f){const w=d.current.filter(Boolean),y=window.innerWidth>=900;w.forEach((A,b)=>{const P=x[b];if(A&&P){const D=y?P.rotation??0:0;$t.set(A,{rotation:D})}})}};return window.addEventListener("resize",M),()=>window.removeEventListener("resize",M)},[f,x]),Le.jsxs(Le.Fragment,{children:[Le.jsx("nav",{className:S,style:{...i,pointerEvents:"none"},"aria-label":"Main navigation",children:Le.jsxs("button",{type:"button",className:`bubble toggle-bubble menu-btn ${f?"open":""}`,onClick:T,"aria-label":r,"aria-pressed":f,style:{background:s,pointerEvents:"auto"},children:[Le.jsx("span",{className:"menu-line",style:{background:a}}),Le.jsx("span",{className:"menu-line",style:{background:a}})]})}),g&&Le.jsx("div",{ref:m,className:`bubble-menu-items ${o?"fixed":"absolute"}`,"aria-hidden":!f,style:{pointerEvents:f?"auto":"none",visibility:"hidden",opacity:0},children:Le.jsx("ul",{className:"pill-list",role:"menu","aria-label":"Menu links",children:x.map((M,w)=>{var y,A;return Le.jsx("li",{role:"none",className:"pill-col",children:Le.jsx(uw,{role:"menuitem",to:M.href,"aria-label":M.ariaLabel||M.label,className:"pill-link",onClick:()=>{f&&T()},style:{"--item-rot":`${M.rotation??0}deg`,"--pill-bg":s,"--pill-color":a,"--hover-bg":((y=M.hoverStyles)==null?void 0:y.bgColor)||"#f3f4f6","--hover-color":((A=M.hoverStyles)==null?void 0:A.textColor)||a},ref:b=>{b&&(d.current[w]=b)},children:Le.jsx("span",{className:"pill-label",ref:b=>{b&&(v.current[w]=b)},children:M.label})})},w)})})})]})}function AD(){const[n,e]=ie.useState(!1),t=[{label:"home",href:"/",ariaLabel:"Home",rotation:-8,hoverStyles:{bgColor:"#A7EF9E",textColor:"#000000"}},{label:"projects",href:"/projects",ariaLabel:"Projects",rotation:8,hoverStyles:{bgColor:"#A7EF9E",textColor:"#000000"}},{label:"contact",href:"/contact",ariaLabel:"Contact",rotation:-8,hoverStyles:{bgColor:"#A7EF9E",textColor:"#000000"}}];return Le.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"hidden"},children:[Le.jsx("div",{className:"backgroundContainer",style:{width:"100vw",height:"100vh",position:"absolute",top:0,left:0,zIndex:0,background:"#000",transition:"opacity 0.3s ease"},children:Le.jsx("div",{style:{width:"100%",height:"100%"},children:Le.jsx(kA,{scale:1.5,gridMul:[2,1],digitSize:1.4,timeScale:.8,pause:!1,scanlineIntensity:.8,glitchAmount:1,flickerAmount:1,noiseAmp:1,chromaticAberration:0,dither:0,curvature:.12,tint:"#A7EF9E",mouseReact:!0,mouseStrength:.5,pageLoadAnimation:!0,brightness:.6})})}),Le.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",zIndex:1,width:"100vw",height:"100vh",transform:"translate(-50%, -50%)",pointerEvents:"none"},children:Le.jsx(sL,{text:"Robots!",enableWaves:!1,asciiFontSize:8})}),Le.jsx("div",{style:{position:"absolute",top:0,left:0,zIndex:10,width:"100vw",height:"100vh",pointerEvents:"none"},children:Le.jsx(Zm,{logo:Le.jsx("span",{style:{fontWeight:700,color:"#A7EF9E"},children:"RB"}),items:t,onMenuClick:e,menuAriaLabel:"Toggle navigation",menuBg:"#2d2d2d",menuContentColor:"#A7EF9E",useFixedPosition:!1,animationEase:"power3.out",animationDuration:.3,staggerDelay:.1})})]})}function CD(n,e){let t;return function(...i){clearTimeout(t),t=setTimeout(()=>n.apply(this,i),e)}}function RD(n,e,t){return n+(e-n)*t}function bD(n){const e=Object.getPrototypeOf(n);Object.getOwnPropertyNames(e).forEach(t=>{t!=="constructor"&&typeof n[t]=="function"&&(n[t]=n[t].bind(n))})}function PD(n,e,t="bold 30px monospace",i="black"){const r=document.createElement("canvas"),s=r.getContext("2d");s.font=t;let a=[e];e.includes(`
`)?a=e.split(`
`):e.includes(": ")&&(a=e.split(": ").map((c,h,f)=>h<f.length-1?c+":":c));let o=0;const l=parseInt(t,10)*1.2;a.forEach(c=>{const h=s.measureText(c);o=Math.max(o,Math.ceil(h.width))}),r.width=o+20,r.height=l*a.length+20,s.font=t,s.fillStyle=i,s.textBaseline="middle",s.textAlign="center",s.clearRect(0,0,r.width,r.height),a.forEach((c,h)=>{const f=r.height/2-(a.length-1)*l/2+h*l;s.fillText(c,r.width/2,f)});const u=new Gy(n,{generateMipmaps:!1});return u.image=r,{texture:u,width:r.width,height:r.height,linesCount:a.length}}class LD{constructor({gl:e,plane:t,renderer:i,text:r,textColor:s="#545050",font:a="30px sans-serif"}){bD(this),this.gl=e,this.plane=t,this.renderer=i,this.text=r,this.textColor=s,this.font=a,this.createMesh()}createMesh(){const{texture:e,width:t,height:i,linesCount:r}=PD(this.gl,this.text,this.font,this.textColor),s=new Hy(this.gl),a=new xm(this.gl,{vertex:`
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragment:`
        precision highp float;
        uniform sampler2D tMap;
        varying vec2 vUv;
        void main() {
          vec4 color = texture2D(tMap, vUv);
          if (color.a < 0.1) discard;
          gl_FragColor = color;
        }
      `,uniforms:{tMap:{value:e}},transparent:!0});this.mesh=new Sm(this.gl,{geometry:s,program:a});const o=t/i,l=this.plane.scale.y*.15*(r||1),u=l*o;this.mesh.scale.set(u,l,1),this.mesh.position.y=-this.plane.scale.y*.5-l*.5-.05,this.mesh.setParent(this.plane)}}class DD{constructor({geometry:e,gl:t,image:i,index:r,length:s,renderer:a,scene:o,screen:l,text:u,viewport:c,bend:h,textColor:f,borderRadius:p=0,font:g}){this.extra=0,this.geometry=e,this.gl=t,this.image=i,this.index=r,this.length=s,this.renderer=a,this.scene=o,this.screen=l,this.text=u,this.viewport=c,this.bend=h,this.textColor=f,this.borderRadius=p,this.font=g,this.createShader(),this.createMesh(),this.createTitle(),this.onResize()}createShader(){const e=new Gy(this.gl,{generateMipmaps:!0});this.program=new xm(this.gl,{depthTest:!1,depthWrite:!1,vertex:`
        precision highp float;
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        uniform float uTime;
        uniform float uSpeed;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 p = position;
          p.z = (sin(p.x * 4.0 + uTime) * 1.5 + cos(p.y * 2.0 + uTime) * 1.5) * (0.1 + uSpeed * 0.5);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,fragment:`
        precision highp float;
        uniform vec2 uImageSizes;
        uniform vec2 uPlaneSizes;
        uniform sampler2D tMap;
        uniform float uBorderRadius;
        varying vec2 vUv;
        
        float roundedBoxSDF(vec2 p, vec2 b, float r) {
          vec2 d = abs(p) - b;
          return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
        }
        
        void main() {
          vec2 ratio = vec2(
            min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
            min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
          );
          vec2 uv = vec2(
            vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
            vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
          );
          vec4 color = texture2D(tMap, uv);
          
          float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
          
          // Smooth antialiasing for edges
          float edgeSmooth = 0.002;
          float alpha = 1.0 - smoothstep(-edgeSmooth, edgeSmooth, d);
          
          gl_FragColor = vec4(color.rgb, alpha);
        }
      `,uniforms:{tMap:{value:e},uPlaneSizes:{value:[0,0]},uImageSizes:{value:[0,0]},uSpeed:{value:0},uTime:{value:100*Math.random()},uBorderRadius:{value:this.borderRadius}},transparent:!0});const t=new Image;t.crossOrigin="anonymous",t.src=this.image,t.onload=()=>{e.image=t,this.program.uniforms.uImageSizes.value=[t.naturalWidth,t.naturalHeight]}}createMesh(){this.plane=new Sm(this.gl,{geometry:this.geometry,program:this.program}),this.plane.setParent(this.scene)}createTitle(){this.title=new LD({gl:this.gl,plane:this.plane,renderer:this.renderer,text:this.text,textColor:this.textColor,fontFamily:this.font})}update(e,t){this.plane.position.x=this.x-e.current-this.extra;const i=this.plane.position.x,r=this.viewport.width/2;if(this.bend===0)this.plane.position.y=0,this.plane.rotation.z=0;else{const o=Math.abs(this.bend),l=(r*r+o*o)/(2*o),u=Math.min(Math.abs(i),r),c=l-Math.sqrt(l*l-u*u);this.bend>0?(this.plane.position.y=-c,this.plane.rotation.z=-Math.sign(i)*Math.asin(u/l)):(this.plane.position.y=c,this.plane.rotation.z=Math.sign(i)*Math.asin(u/l))}this.speed=e.current-e.last,this.program.uniforms.uTime.value+=.04,this.program.uniforms.uSpeed.value=this.speed;const s=this.plane.scale.x/2,a=this.viewport.width/2;this.isBefore=this.plane.position.x+s<-a,this.isAfter=this.plane.position.x-s>a,t==="right"&&this.isBefore&&(this.extra-=this.widthTotal,this.isBefore=this.isAfter=!1),t==="left"&&this.isAfter&&(this.extra+=this.widthTotal,this.isBefore=this.isAfter=!1)}onResize({screen:e,viewport:t}={}){e&&(this.screen=e),t&&(this.viewport=t,this.plane.program.uniforms.uViewportSizes&&(this.plane.program.uniforms.uViewportSizes.value=[this.viewport.width,this.viewport.height])),this.scale=this.screen.height/1500,this.plane.scale.y=this.viewport.height*(800*this.scale)/this.screen.height,this.plane.scale.x=this.viewport.width*(600*this.scale)/this.screen.width,this.plane.program.uniforms.uPlaneSizes.value=[this.plane.scale.x,this.plane.scale.y],this.padding=2,this.width=this.plane.scale.x+this.padding,this.widthTotal=this.width*this.length,this.x=this.width*this.index}}let ID=class{constructor(e,{items:t,bend:i,textColor:r="#ffffff",borderRadius:s=0,font:a="bold 30px Figtree",scrollSpeed:o=2,scrollEase:l=.05}={}){document.documentElement.classList.remove("no-js"),this.container=e,this.scrollSpeed=o,this.scroll={ease:l,current:0,target:0,last:0},this.onCheckDebounce=CD(this.onCheck,200),this.createRenderer(),this.createCamera(),this.createScene(),this.onResize(),this.createGeometry(),this.createMedias(t,i,r,s,a),this.update(),this.addEventListeners()}createRenderer(){this.renderer=new By({alpha:!0,antialias:!0,dpr:Math.min(window.devicePixelRatio||1,2)}),this.gl=this.renderer.gl,this.gl.clearColor(0,0,0,0),this.container.appendChild(this.gl.canvas)}createCamera(){this.camera=new yA(this.gl),this.camera.fov=45,this.camera.position.z=20}createScene(){this.scene=new ym}createGeometry(){this.planeGeometry=new Hy(this.gl,{heightSegments:50,widthSegments:100})}createMedias(e,t=1,i,r,s){const a=[{image:"https://picsum.photos/seed/1/800/600?grayscale",text:"Bridge"},{image:"https://picsum.photos/seed/2/800/600?grayscale",text:"Desk Setup"},{image:"https://picsum.photos/seed/3/800/600?grayscale",text:"Waterfall"},{image:"https://picsum.photos/seed/4/800/600?grayscale",text:"Strawberries"},{image:"https://picsum.photos/seed/5/800/600?grayscale",text:"Deep Diving"},{image:"https://picsum.photos/seed/16/800/600?grayscale",text:"Train Track"},{image:"https://picsum.photos/seed/17/800/600?grayscale",text:"Santorini"},{image:"https://picsum.photos/seed/8/800/600?grayscale",text:"Blurry Lights"},{image:"https://picsum.photos/seed/9/800/600?grayscale",text:"New York"},{image:"https://picsum.photos/seed/10/800/600?grayscale",text:"Good Boy"},{image:"https://picsum.photos/seed/21/800/600?grayscale",text:"Coastline"},{image:"https://picsum.photos/seed/12/800/600?grayscale",text:"Palm Trees"}],o=e&&e.length?e:a;this.mediasImages=o.concat(o),this.medias=this.mediasImages.map((l,u)=>new DD({geometry:this.planeGeometry,gl:this.gl,image:l.image,index:u,length:this.mediasImages.length,renderer:this.renderer,scene:this.scene,screen:this.screen,text:l.text,viewport:this.viewport,bend:t,textColor:i,borderRadius:r,font:s}))}onTouchDown(e){this.isDown=!0,this.scroll.position=this.scroll.current,this.start=e.touches?e.touches[0].clientX:e.clientX}onTouchMove(e){if(!this.isDown)return;const t=e.touches?e.touches[0].clientX:e.clientX,i=(this.start-t)*(this.scrollSpeed*.025);this.scroll.target=this.scroll.position+i}onTouchUp(){this.isDown=!1,this.onCheck()}onWheel(e){const t=e.deltaY||e.wheelDelta||e.detail;this.scroll.target+=(t>0?this.scrollSpeed:-this.scrollSpeed)*.2,this.onCheckDebounce()}onCheck(){if(!this.medias||!this.medias[0])return;const e=this.medias[0].width,t=Math.round(Math.abs(this.scroll.target)/e),i=e*t;this.scroll.target=this.scroll.target<0?-i:i}onResize(){this.screen={width:this.container.clientWidth,height:this.container.clientHeight},this.renderer.setSize(this.screen.width,this.screen.height),this.camera.perspective({aspect:this.screen.width/this.screen.height});const e=this.camera.fov*Math.PI/180,t=2*Math.tan(e/2)*this.camera.position.z,i=t*this.camera.aspect;this.viewport={width:i,height:t},this.medias&&this.medias.forEach(r=>r.onResize({screen:this.screen,viewport:this.viewport}))}update(){this.scroll.current=RD(this.scroll.current,this.scroll.target,this.scroll.ease);const e=this.scroll.current>this.scroll.last?"right":"left";this.medias&&this.medias.forEach(t=>t.update(this.scroll,e)),this.renderer.render({scene:this.scene,camera:this.camera}),this.scroll.last=this.scroll.current,this.raf=window.requestAnimationFrame(this.update.bind(this))}addEventListeners(){this.boundOnResize=this.onResize.bind(this),this.boundOnWheel=this.onWheel.bind(this),this.boundOnTouchDown=this.onTouchDown.bind(this),this.boundOnTouchMove=this.onTouchMove.bind(this),this.boundOnTouchUp=this.onTouchUp.bind(this),window.addEventListener("resize",this.boundOnResize),window.addEventListener("mousewheel",this.boundOnWheel),window.addEventListener("wheel",this.boundOnWheel),window.addEventListener("mousedown",this.boundOnTouchDown),window.addEventListener("mousemove",this.boundOnTouchMove),window.addEventListener("mouseup",this.boundOnTouchUp),window.addEventListener("touchstart",this.boundOnTouchDown),window.addEventListener("touchmove",this.boundOnTouchMove),window.addEventListener("touchend",this.boundOnTouchUp)}destroy(){window.cancelAnimationFrame(this.raf),window.removeEventListener("resize",this.boundOnResize),window.removeEventListener("mousewheel",this.boundOnWheel),window.removeEventListener("wheel",this.boundOnWheel),window.removeEventListener("mousedown",this.boundOnTouchDown),window.removeEventListener("mousemove",this.boundOnTouchMove),window.removeEventListener("mouseup",this.boundOnTouchUp),window.removeEventListener("touchstart",this.boundOnTouchDown),window.removeEventListener("touchmove",this.boundOnTouchMove),window.removeEventListener("touchend",this.boundOnTouchUp),this.renderer&&this.renderer.gl&&this.renderer.gl.canvas.parentNode&&this.renderer.gl.canvas.parentNode.removeChild(this.renderer.gl.canvas)}};function UD({items:n,bend:e=3,textColor:t="#ffffff",borderRadius:i=.05,font:r="bold 30px Figtree",scrollSpeed:s=2,scrollEase:a=.05}){const o=ie.useRef(null);return ie.useEffect(()=>{const l=new ID(o.current,{items:n,bend:e,textColor:t,borderRadius:i,font:r,scrollSpeed:s,scrollEase:a});return()=>{l.destroy()}},[n,e,t,i,r,s,a]),Le.jsx("div",{className:"circular-gallery",ref:o})}function ND(){const[n,e]=ie.useState(!1),t=[{image:"robosite_atestat/src/images/s11.jpeg",text:`FTC Centerstage: 
first ever robot built`},{image:"/robosite_atestat/src/images/s12.jpeg",text:`FTC Centerstage: 
competition robot`},{image:"src/images/s13.jpeg",text:`FTC Centerstage: 
regionals robot`},{image:"src/images/s21.jpeg",text:`FTC Into the Deep: 
prototype robot`},{image:"src/images/s22.jpeg",text:`FTC Into the Deep: 
competition robot`},{image:"src/images/s23.jpeg",text:`FTC Into the Deep: 
regionals robot`},{image:"src/images/s31.jpeg",text:`FTC Decode: 
competition robot`},{image:"src/images/s32.jpeg",text:`FTC Decode: 
regionals robot`},{image:"src/images/s33.jpeg",text:`FTC Decode: 
nationals robot`}],i=[{label:"home",href:"/",ariaLabel:"Home",rotation:-8,hoverStyles:{bgColor:"#A7EF9E",textColor:"#000000"}},{label:"projects",href:"/projects",ariaLabel:"Projects",rotation:8,hoverStyles:{bgColor:"#A7EF9E",textColor:"#000000"}},{label:"contact",href:"/contact",ariaLabel:"Contact",rotation:-8,hoverStyles:{bgColor:"#A7EF9E",textColor:"#000000"}}];return Le.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"hidden",background:"#000"},children:[Le.jsx("div",{style:{width:"100%",height:"100%",position:"absolute",top:0,left:0},children:Le.jsx(UD,{items:t,bend:3,textColor:"#A7EF9E",borderRadius:.05,scrollEase:.02})}),Le.jsx("div",{style:{position:"absolute",top:"2em",left:"50%",transform:"translateX(-50%)",zIndex:5,pointerEvents:"none",height:"48px",display:"flex",alignItems:"center"},children:Le.jsx("h1",{style:{color:"#A7EF9E",fontSize:"2.5rem",margin:0,textShadow:"0 0 10px rgba(167, 239, 158, 0.5)"},children:"Projects"})}),Le.jsx("div",{style:{position:"absolute",top:0,left:0,zIndex:10,width:"100vw",height:"100vh",pointerEvents:"none"},children:Le.jsx(Zm,{logo:Le.jsx("span",{style:{fontWeight:700,color:"#A7EF9E"},children:"RB"}),items:i,onMenuClick:e,menuAriaLabel:"Toggle navigation",menuBg:"#2d2d2d",menuContentColor:"#A7EF9E",useFixedPosition:!1,animationEase:"power3.out",animationDuration:.3,staggerDelay:.1})})]})}function FD(){const[n,e]=ie.useState(!1),t=[{label:"home",href:"/",ariaLabel:"Home",rotation:-8,hoverStyles:{bgColor:"#A7EF9E",textColor:"#000000"}},{label:"projects",href:"/projects",ariaLabel:"Projects",rotation:8,hoverStyles:{bgColor:"#A7EF9E",textColor:"#000000"}},{label:"contact",href:"/contact",ariaLabel:"Contact",rotation:-8,hoverStyles:{bgColor:"#A7EF9E",textColor:"#000000"}}];return Le.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"hidden",background:"#000",display:"flex",alignItems:"center",justifyContent:"center"},children:[Le.jsx("h1",{style:{color:"#A7EF9E",fontSize:"4rem"},children:"Contact Page"}),Le.jsx("div",{style:{position:"absolute",top:0,left:0,zIndex:10,width:"100vw",height:"100vh",pointerEvents:"none"},children:Le.jsx(Zm,{logo:Le.jsx("span",{style:{fontWeight:700,color:"#A7EF9E"},children:"RB"}),items:t,onMenuClick:e,menuAriaLabel:"Toggle navigation",menuBg:"#2d2d2d",menuContentColor:"#A7EF9E",useFixedPosition:!1,animationEase:"power3.out",animationDuration:.3,staggerDelay:.1})})]})}function OD(){return Le.jsx(aw,{children:Le.jsx("div",{style:{position:"relative",zIndex:1},children:Le.jsxs(JT,{children:[Le.jsx(Lu,{path:"/",element:Le.jsx(AD,{})}),Le.jsx(Lu,{path:"/projects",element:Le.jsx(ND,{})}),Le.jsx(Lu,{path:"/contact",element:Le.jsx(FD,{})})]})})})}yh.createRoot(document.getElementById("root")).render(Le.jsx(Mv.StrictMode,{children:Le.jsx(OD,{})}));
